/* 口语 AI 评分：录音 + 讯飞语音听写(IAT) + 通义千问评分（纯前端直连） */
window.SpeakingAI = (function () {
  "use strict";

  // ====== 密钥配置（分段存储，运行时拼接；仅提高肉眼/搜索门槛，非真正加密） ======
  const _K = {
    xf_appid:  ["33d0", "b653"],
    xf_apikey: ["4f0f137dc7", "12fc6d4722", "0db398e2d101"],
    xf_secret: ["NTA0MGNjNjU3", "NjAzNWQwZmMw", "Yzk5NjA5"],
    ds_key:    ["sk-ws-H.YRDIYMH.9IkT.MEYCIQCjMGNHpdHNYZcbxVh23frNCQV3hRMXf1ZULcPYJ2kBHAIhAOSM",
                "6lygfai2OK4iKM-SPSgfALYkresYG8AK5VpQV0Ee"],
  };
  const XFYUN_APP_ID = _K.xf_appid.join("");
  const XFYUN_API_KEY = _K.xf_apikey.join("");
  const XFYUN_API_SECRET = _K.xf_secret.join("");
  const DASHSCOPE_API_KEY = _K.ds_key.join("");
  // =================================

  function toBase64(input) {
    const bytes = input instanceof Uint8Array
      ? input
      : input instanceof ArrayBuffer
        ? new Uint8Array(input)
        : new Uint8Array(input.buffer, input.byteOffset, input.byteLength);
    let bin = "";
    for (let i = 0; i < bytes.length; i += 0x8000) {
      bin += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
    }
    return btoa(bin);
  }

  async function hmacSha256(message, secret) {
    const enc = new TextEncoder();
    const key = await crypto.subtle.importKey("raw", enc.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
    return crypto.subtle.sign("HMAC", key, enc.encode(message));
  }

  async function iatAuth() {
    const host = "iat-api.xfyun.cn";
    const date = new Date().toUTCString();
    const origin = `host: ${host}\ndate: ${date}\nGET /v2/iat HTTP/1.1`;
    const signature = toBase64(await hmacSha256(origin, XFYUN_API_SECRET));
    const authOrigin = `api_key="${XFYUN_API_KEY}", algorithm="hmac-sha256", headers="host date request-line", signature="${signature}"`;
    return { host, date, authorization: toBase64(new TextEncoder().encode(authOrigin)) };
  }

  // ---------- 录音 ----------
  let mediaRecorder = null, chunks = [], stream = null;

  function isSupported() {
    return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder);
  }
  function isRecording() { return !!(mediaRecorder && mediaRecorder.state === "recording"); }

  async function start() {
    if (isRecording()) return;
    stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder = MediaRecorder.isTypeSupported("audio/webm")
      ? new MediaRecorder(stream, { mimeType: "audio/webm" })
      : new MediaRecorder(stream);
    chunks = [];
    mediaRecorder.ondataavailable = (e) => { if (e.data && e.data.size > 0) chunks.push(e.data); };
    mediaRecorder.start();
  }

  function stop() {
    return new Promise((resolve, reject) => {
      if (!mediaRecorder) return reject(new Error("尚未开始录音"));
      mediaRecorder.onstop = () => {
        if (stream) stream.getTracks().forEach((t) => t.stop());
        resolve(new Blob(chunks, { type: mediaRecorder.mimeType || "audio/webm" }));
      };
      mediaRecorder.stop();
    });
  }

  // ---------- 音频：webm/mp4 → 16kHz 16bit PCM ----------
  async function blobToPcm16k(blob) {
    const buf = await blob.arrayBuffer();
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioCtx();
    try {
      const ab = await ctx.decodeAudioData(buf);
      const data = ab.getChannelData(0), ratio = ab.sampleRate / 16000;
      const len = Math.max(1, Math.round(data.length / ratio));
      const pcm = new Int16Array(len);
      for (let i = 0; i < len; i++) {
        const s = i * ratio, i0 = Math.floor(s), i1 = Math.min(i0 + 1, data.length - 1), f = s - i0;
        pcm[i] = Math.max(-32768, Math.min(32767, Math.round((data[i0] * (1 - f) + data[i1] * f) * 32767)));
      }
      return pcm;
    } finally { ctx.close(); }
  }

  // ---------- 讯飞 IAT 语音听写 ----------
  function decodeResult(result) {
    let text = "";
    (result.ws || []).forEach((ws) => {
      (ws.cw || []).forEach((c) => { if (c.wp === "p") text += " "; text += c.w; });
    });
    return text;
  }

  async function transcribe(pcm) {
    const { host, date, authorization } = await iatAuth();
    const url = `wss://${host}/v2/iat?authorization=${encodeURIComponent(authorization)}&date=${encodeURIComponent(date)}&host=${host}`;
    return new Promise((resolve, reject) => {
      const ws = new WebSocket(url);
      const segs = {}; let finished = false;
      ws.onopen = () => {
        ws.send(JSON.stringify({
          common: { app_id: XFYUN_APP_ID },
          business: { language: "en_us", domain: "iat", accent: "mandarin", vad_eos: 4000, dwa: "wpgs" },
          data: { status: 0, format: "audio/L16;rate=16000", encoding: "raw", audio: "" },
        }));
        for (let i = 0; i < pcm.length; i += 1280) {
          ws.send(JSON.stringify({ data: { status: 1, format: "audio/L16;rate=16000", encoding: "raw", audio: toBase64(pcm.subarray(i, i + 1280)) } }));
        }
        ws.send(JSON.stringify({ data: { status: 2, format: "audio/L16;rate=16000", encoding: "raw", audio: "" } }));
      };
      ws.onmessage = (e) => {
        if (typeof e.data !== "string") return;
        let msg; try { msg = JSON.parse(e.data); } catch { return; }
        if (msg.code !== 0) { finished = true; ws.close(); return reject(new Error("讯飞错误 " + msg.code + "：" + (msg.message || ""))); }
        const d = msg.data;
        if (d && d.result && d.result.sn != null) segs[d.result.sn] = decodeResult(d.result);
        if (d && d.status === 2) {
          finished = true; ws.close();
          resolve(Object.keys(segs).sort((a, b) => a - b).map((k) => segs[k]).join(" "));
        }
      };
      ws.onerror = () => { if (!finished) reject(new Error("讯飞连接失败")); };
      ws.onclose = () => { if (!finished) reject(new Error("讯飞连接中断")); };
    });
  }

  // ---------- 讯飞 TTS 语音合成（返回 16kHz 16bit PCM，可直接送 transcribe） ----------
  async function ttsAuth() {
    const host = "tts-api.xfyun.cn";
    const date = new Date().toUTCString();
    const origin = `host: ${host}\ndate: ${date}\nGET /v2/tts HTTP/1.1`;
    const signature = toBase64(await hmacSha256(origin, XFYUN_API_SECRET));
    const authOrigin = `api_key="${XFYUN_API_KEY}", algorithm="hmac-sha256", headers="host date request-line", signature="${signature}"`;
    return { host, date, authorization: toBase64(new TextEncoder().encode(authOrigin)) };
  }

  function base64ToBytes(b64) {
    const bin = atob(b64);
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return bytes;
  }

  async function tts(text) {
    const { host, date, authorization } = await ttsAuth();
    const url = `wss://${host}/v2/tts?authorization=${encodeURIComponent(authorization)}&date=${encodeURIComponent(date)}&host=${host}`;
    return new Promise((resolve, reject) => {
      const ws = new WebSocket(url);
      const chunks = []; let finished = false;
      ws.onopen = () => {
        ws.send(JSON.stringify({
          common: { app_id: XFYUN_APP_ID },
          business: { aue: "raw", vcn: "Catherine", speed: 50, volume: 50, pitch: 50, tte: "UTF8" },
          data: { status: 2, text: toBase64(new TextEncoder().encode(text)) },
        }));
      };
      ws.onmessage = (e) => {
        if (typeof e.data !== "string") return;
        let msg; try { msg = JSON.parse(e.data); } catch { return; }
        if (msg.code !== 0) { finished = true; ws.close(); return reject(new Error("讯飞合成失败 " + msg.code + "：" + (msg.message || ""))); }
        const d = msg.data;
        if (d && d.audio) chunks.push(base64ToBytes(d.audio));
        if (d && d.status === 2) {
          finished = true; ws.close();
          try {
            let total = 0; chunks.forEach((c) => { total += c.length; });
            const merged = new Uint8Array(total);
            let off = 0; chunks.forEach((c) => { merged.set(c, off); off += c.length; });
            resolve(new Int16Array(merged.buffer));
          } catch { reject(new Error("合成音频解析失败")); }
        }
      };
      ws.onerror = () => { if (!finished) reject(new Error("讯飞合成连接失败")); };
      ws.onclose = () => { if (!finished) reject(new Error("讯飞合成连接中断")); };
    });
  }

  // ---------- 通义千问评分 ----------
  const SCORE_SYSTEM = `你是经验丰富的雅思口语考官。请根据雅思官方评分标准对考生回答进行评分。
四个维度：流利度与连贯性(Fluency and Coherence)、词汇资源(Lexical Resource)、语法广度与准确度(Grammatical Range and Accuracy)、发音(Pronunciation)。
每个维度按 1-9 分打分，可含 0.5 分档。只输出 JSON，不要输出其他文字。JSON 结构：
{"fluency":数字,"coherence":数字,"lexical":数字,"grammar":数字,"pronunciation":数字,"overall":数字,"band":"例如 6.5","feedback_cn":"中文总体评价和具体改进建议","errors_cn":["具体的语法/词汇错误及纠正，每条一句话"]}`;

  async function score(transcript, question, part) {
    const resp = await fetch("https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions", {
      method: "POST",
      headers: { Authorization: "Bearer " + DASHSCOPE_API_KEY, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "qwen-plus",
        messages: [
          { role: "system", content: SCORE_SYSTEM },
          { role: "user", content: `题目（${part}）：${question}\n\n考生回答（语音转写）：${transcript}` },
        ],
        response_format: { type: "json_object" },
        temperature: 0.3,
      }),
    });
    if (!resp.ok) throw new Error("千问评分失败 HTTP " + resp.status + "：" + (await resp.text()).slice(0, 200));
    const data = await resp.json();
    const content = data?.choices?.[0]?.message?.content || "{}";
    try { return JSON.parse(content); } catch { throw new Error("评分模型返回格式异常"); }
  }

  return { isSupported, isRecording, start, stop, blobToPcm16k, transcribe, tts, score };
})();
