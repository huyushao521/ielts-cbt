/* 各题型页面构建 + 提交判分 + 结果页 */
(function () {
  const A = window.App;
  const { el } = A;

  /* ---------- Listening ---------- */
  A.buildListening = function () {
    const cfg = { kind: "listening", name: "Listening 听力", minutes: A.D.listening.minutes, answerSrc: A.D.listening.answers };
    A.buildFrame(cfg);
    const body = A.$("#exam-body");
    const parts = A.D.listening.parts;

    const playerBar = el('<div class="audio-bar"><div class="audio-title">🎧 听力音频（练习模式可暂停 / 重播）</div></div>');
    const audio = el('<audio controls id="audio-player" preload="none"></audio>');
    const tabs = el('<div class="part-tabs"></div>');
    parts.forEach((p) => tabs.appendChild(el('<button class="part-tab" data-p="' + p.part + '">Part ' + p.part + "</button>")));
    playerBar.appendChild(audio); playerBar.appendChild(tabs);
    body.appendChild(playerBar);

    function loadPart(p) { audio.src = p.audio; A.$$(".part-tab").forEach((t) => t.classList.toggle("on", t.getAttribute("data-p") == p.part)); }
    tabs.querySelectorAll(".part-tab").forEach((t) => t.addEventListener("click", () => { const p = parts.find((x) => x.part == t.getAttribute("data-p")); loadPart(p); audio.play(); }));
    audio.addEventListener("ended", () => { const cur = parts.findIndex((x) => audio.src.endsWith(x.audio)); if (cur >= 0 && cur < parts.length - 1) { loadPart(parts[cur + 1]); audio.play(); } });
    loadPart(parts[0]);

    const nums = [];
    parts.forEach((p) => {
      body.appendChild(el('<h2 class="part-title">Part ' + p.part + " · " + p.title + "</h2>"));
      const wrap = el('<div class="part-wrap"></div>');
      A.renderBlocks(wrap, p.blocks);
      body.appendChild(wrap);
      wrap.querySelectorAll("[data-anchor]").forEach((x) => nums.push(parseInt(x.getAttribute("data-anchor"), 10)));
    });
    A.renderPalette([...new Set(nums)].sort((a, b) => a - b));
    A.startTimer(cfg.minutes);
  };

  /* ---------- Reading ---------- */
  A.buildReading = function () {
    const cfg = { kind: "reading", name: "Reading 阅读", minutes: A.D.reading.minutes, answerSrc: A.D.reading.answers };
    A.buildFrame(cfg);
    const body = A.$("#exam-body");
    body.classList.add("reading-body");

    const nums = [];
    A.D.reading.passages.forEach((pass) => {
      const sec = el('<section class="passage-sec">' +
        '<div class="passage-panel"><div class="passage-intro">' + pass.intro + "</div><h2>" + pass.title + "</h2>" +
        pass.paragraphs.map((p) => "<p>" + p + "</p>").join("") + "</div>" +
        '<div class="q-panel" id="q-panel-' + pass.number + '"></div></section>');
      body.appendChild(sec);
      const qp = sec.querySelector(".q-panel");
      A.renderBlocks(qp, pass.blocks);
      qp.querySelectorAll("[data-anchor]").forEach((x) => nums.push(parseInt(x.getAttribute("data-anchor"), 10)));
    });
    A.renderPalette([...new Set(nums)].sort((a, b) => a - b));
    A.startTimer(cfg.minutes);
  };

  /* ---------- Writing ---------- */
  A.buildWriting = function () {
    const cfg = { kind: "writing", name: "Writing 写作", minutes: A.D.writing.minutes };
    A.buildFrame(cfg);
    const body = A.$("#exam-body");
    body.classList.add("writing-body");

    A.D.writing.tasks.forEach((t) => {
      const sec = el('<section class="writing-task" data-task="' + t.id + '">' +
        '<h2>' + t.title + " <span class='task-time'>约 " + t.minutes + " 分钟</span></h2>" +
        '<div class="task-brief">' + t.html + "</div>" +
        '<div class="wc-bar">字数：<b id="wc-' + t.id + '">0</b> / 最低 ' + t.minWords + "</div>" +
        '<textarea class="essay-box" id="essay-' + t.id + '" placeholder="在此输入你的答案…"></textarea></section>');
      body.appendChild(sec);
      const ta = sec.querySelector("textarea");
      ta.addEventListener("input", () => {
        A.state.answers["essay" + t.id] = ta.value;
        const w = (ta.value.trim().match(/\S+/g) || []).length;
        sec.querySelector("#wc-" + t.id).textContent = w;
        sec.querySelector("#wc-" + t.id).classList.toggle("ok", w >= t.minWords);
      });
    });
    const nav = A.$("#nav-palette");
    nav.innerHTML = '<span class="nav-label">写作导航</span>';
    [1, 2].forEach((id) => {
      const b = el('<button class="nav-dot">' + id + "</button>");
      b.addEventListener("click", () => { const t = document.querySelector('.writing-task[data-task="' + id + '"]'); if (t) t.scrollIntoView({ behavior: "smooth", block: "start" }); });
      nav.appendChild(b);
    });
    A.startTimer(cfg.minutes);
  };

  /* ---------- Speaking ---------- */
  function htmlToText(html) {
    const t = document.createElement("template");
    t.innerHTML = html;
    return (t.content.textContent || "").trim().replace(/\s+/g, " ");
  }

  function renderSpeakingScore(container, transcript, sc) {
    const dims = [
      ["fluency", "流利度"],
      ["coherence", "连贯性"],
      ["lexical", "词汇资源"],
      ["grammar", "语法广度与准确度"],
      ["pronunciation", "发音"],
    ];
    const dimHtml = dims.map((d) => '<div class="score-dim"><span>' + d[1] + '</span><b>' + (sc[d[0]] != null ? sc[d[0]] : "—") + "</b></div>").join("");
    const errors = (sc.errors_cn || []).map((e) => "<li>" + e + "</li>").join("");
    container.innerHTML =
      '<div class="rec-transcript"><b>识别文本：</b>' + (transcript || "（未识别到内容）") + "</div>" +
      '<div class="score-panel">' +
      '<div class="score-head">估算总分 <b>' + (sc.band || sc.overall || "—") + "</b></div>" +
      '<div class="score-dims">' + dimHtml + "</div>" +
      '<div class="score-feedback">' + (sc.feedback_cn || "") + "</div>" +
      (errors ? '<ul class="score-errors">' + errors + "</ul>" : "") +
      "</div>";
  }

  function pickVoice(lang) {
    if (!("speechSynthesis" in window)) return null;
    const voices = window.speechSynthesis.getVoices();
    return voices.find((v) => (v.lang || "").toLowerCase().replace("_", "-").startsWith(lang)) || null;
  }

  function speak(text, lang) {
    if (!("speechSynthesis" in window)) return false;
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang;
    u.rate = 0.95;
    const v = pickVoice(lang);
    if (v) u.voice = v;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
    return true;
  }

  A.buildSpeaking = function () {
    const cfg = { kind: "speaking", name: "Speaking 口语", minutes: A.D.speaking.minutes };
    A.buildFrame(cfg);
    const body = A.$("#exam-body");
    body.classList.add("speaking-body");
    const aiReady = window.SpeakingAI && SpeakingAI.isSupported();

    // 预热语音列表（部分移动端首次 getVoices 为空）
    if ("speechSynthesis" in window) {
      window.speechSynthesis.getVoices();
      window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
    }

    A.D.speaking.parts.forEach((p) => {
      const sec = el('<section class="speak-part"><h2>' + p.title + "</h2><div class='speak-html'>" + p.html + "</div>" +
        '<div class="speak-ai">' +
          '<div class="voice-panel">' +
            '<div class="voice-row"><span class="voice-label">🎧 发音口音</span>' +
              '<div class="voice-pick">' +
                '<button class="voice-opt on" data-accent="en-GB" type="button">🇬🇧 英式</button>' +
                '<button class="voice-opt" data-accent="en-US" type="button">🇺🇸 美式</button>' +
                '<button class="voice-opt" data-accent="en-IN" type="button">🇮🇳 印式</button>' +
              '</div></div>' +
            '<textarea class="tts-input" rows="3" placeholder="输入英文文本（模拟回答或范文），可朗读，或合成后送 AI 评分"></textarea>' +
            '<div class="voice-actions">' +
              '<button class="ghost-btn speak-btn" type="button">🔊 朗读</button>' +
              '<button class="ghost-btn synth-btn" type="button">🎧 合成并评分</button>' +
            '</div>' +
            '<span class="synth-status"></span>' +
          '</div>' +
          '<div class="rec-row"><button class="rec-btn" type="button">🎙 开始录音</button><span class="rec-status"></span></div>' +
          '<div class="rec-result"></div>' +
        '</div></section>');
      body.appendChild(sec);

      const questionText = htmlToText(p.html);
      const input = sec.querySelector(".tts-input");
      input.value = questionText;

      let accent = "en-GB";
      sec.querySelectorAll(".voice-opt").forEach((b) => {
        b.addEventListener("click", () => {
          accent = b.getAttribute("data-accent");
          sec.querySelectorAll(".voice-opt").forEach((x) => x.classList.toggle("on", x === b));
        });
      });

      const synthStatus = sec.querySelector(".synth-status");

      sec.querySelector(".speak-btn").addEventListener("click", () => {
        const t = input.value.trim();
        if (!t) { synthStatus.textContent = "请先输入英文文本"; return; }
        if (!speak(t, accent)) { synthStatus.textContent = "当前浏览器不支持朗读"; return; }
        synthStatus.textContent = "正在朗读（" + accent + "）…";
      });

      const btn = sec.querySelector(".rec-btn");
      const status = sec.querySelector(".rec-status");
      const result = sec.querySelector(".rec-result");

      sec.querySelector(".synth-btn").addEventListener("click", async () => {
        const t = input.value.trim();
        if (!t) { synthStatus.textContent = "请先输入英文文本"; return; }
        if (!window.SpeakingAI) { synthStatus.textContent = "AI 模块未加载"; return; }
        const sb = sec.querySelector(".synth-btn");
        sb.disabled = true;
        synthStatus.textContent = "正在合成语音…";
        try {
          const pcm = await SpeakingAI.tts(t);
          synthStatus.textContent = "正在语音转写…";
          const transcript = await SpeakingAI.transcribe(pcm);
          synthStatus.textContent = "正在 AI 评分…";
          const sc = await SpeakingAI.score(transcript, questionText, p.title);
          renderSpeakingScore(result, transcript, sc);
          synthStatus.textContent = "";
        } catch (e) {
          synthStatus.textContent = "出错：" + (e && e.message ? e.message : e);
        } finally {
          sb.disabled = false;
        }
      });

      if (!aiReady) {
        btn.disabled = true;
        btn.textContent = "⚠ 当前浏览器不支持录音";
        return;
      }

      btn.addEventListener("click", async () => {
        if (SpeakingAI.isRecording()) {
          btn.disabled = true;
          status.textContent = "正在转写…";
          try {
            const blob = await SpeakingAI.stop();
            const pcm = await SpeakingAI.blobToPcm16k(blob);
            const transcript = await SpeakingAI.transcribe(pcm);
            status.textContent = "正在 AI 评分…";
            const sc = await SpeakingAI.score(transcript, questionText, p.title);
            renderSpeakingScore(result, transcript, sc);
            status.textContent = "";
          } catch (e) {
            status.textContent = "出错：" + (e && e.message ? e.message : e);
          } finally {
            btn.disabled = false;
            btn.textContent = "🎙 重新录音";
            btn.classList.remove("recording");
          }
        } else {
          try {
            await SpeakingAI.start();
            btn.textContent = "⏹ 停止录音";
            btn.classList.add("recording");
            status.textContent = "录音中…";
          } catch (e) {
            status.textContent = "无法开始录音：" + (e && e.message ? e.message : e);
          }
        }
      });
    });

    A.$("#nav-palette").innerHTML = '<span class="nav-label">口语部分（AI 评分 · 口音朗读 / 合成）</span>';
    A.startTimer(cfg.minutes);
  };

  /* ---------- 判分 ---------- */
  function band(correct, table) { for (const [th, b] of table) if (correct >= th) return b; return 0; }
  const BAND_LISTENING = [[39, 9], [37, 8.5], [35, 8], [32, 7.5], [30, 7], [26, 6.5], [23, 6], [18, 5.5], [16, 5], [13, 4.5], [11, 4], [8, 3.5], [6, 3], [4, 2.5], [3, 2], [2, 1.5], [1, 1], [0, 0]];
  const BAND_READING = [[39, 9], [37, 8.5], [35, 8], [33, 7.5], [30, 7], [27, 6.5], [23, 6], [19, 5.5], [15, 5], [13, 4.5], [10, 4], [8, 3.5], [6, 3], [4, 2.5], [3, 2], [2, 1.5], [1, 1], [0, 0]];

  function allBlocks(kind) {
    if (kind === "listening") return A.D.listening.parts.map((p) => p.blocks).flat();
    return A.D.reading.passages.map((p) => p.blocks).flat();
  }

  A.doSubmit = function (cfg) {
    A.stopTimer(); A.state.submitted = true;
    if (cfg.kind === "writing") { renderWritingResult(); return; }
    if (cfg.kind === "speaking") { renderSimpleResult("口语练习已结束", "请对照题目自评，或录音回听进行复盘。"); return; }
    // listening / reading 判分
    const answers = cfg.answerSrc;
    const nums = A.collectQNumbers(allBlocks(cfg.kind));
    const details = [];
    let correct = 0;

    nums.forEach((n) => {
      const key = Object.keys(answers).find((k) => (k.includes("|") && k.split("|").map(Number).includes(n)) || k === String(n));
      if (!key) return;
      const ans = answers[key];
      let ok = false, user, right;
      if (key.includes("|")) {
        const a = ans.map(A.norm).sort().join(",");
        const u = (A.state.answers[key] || []);
        const b = u.map(A.norm).sort().join(",");
        ok = u.length === 2 && u.every((v) => v) && a === b;
        user = (u || []).join(", ") || "未答";
        right = ans.join(", ");
      } else if (Array.isArray(ans)) {
        const u = A.state.answers[String(n)];
        ok = ans.some((x) => A.norm(x) === A.norm(u));
        user = u || "未答";
        right = ans.join(" / ");
      } else {
        const u = A.state.answers[String(n)];
        ok = A.norm(ans) === A.norm(u);
        user = u || "未答";
        right = ans;
      }
      if (ok) correct++;
      details.push({ n, ok, user, right });
    });

    renderGradedResult(cfg, correct, nums.length, details);
  };

  function renderGradedResult(cfg, correct, total, details) {
    const pct = total ? Math.round((correct / total) * 100) : 0;
    const b = cfg.kind === "listening" ? band(correct, BAND_LISTENING) : band(correct, BAND_READING);
    const view = el(
      '<div class="view active" id="result-view"><div class="result-wrap">' +
      '<h1>测验结果 · ' + cfg.name + "</h1>" +
      '<div class="score-card"><div class="score-big">' + correct + " / " + total + "</div>" +
      '<div class="score-sub">正确率 ' + pct + '% · 估算雅思分数 <b>' + b + "</b></div></div>" +
      '<p class="band-note">* 分数换算为雅思官方学术类估算值，仅供参考。</p>' +
      '<button class="submit-btn" id="retry-btn">重新练习</button>' +
      '<button class="ghost-btn" id="home-btn">返回首页</button>' +
      '<h2 class="review-title">答题详情</h2><div class="review-list"></div></div></div>'
    );
    A.$("#app").innerHTML = "";
    A.$("#app").appendChild(view);
    const list = view.querySelector(".review-list");
    details.forEach((d) => {
      list.appendChild(el('<div class="review-row ' + (d.ok ? "ok" : "bad") + '">' +
        '<span class="r-n">' + d.n + "</span>" +
        '<span class="r-mark">' + (d.ok ? "✓" : "✗") + "</span>" +
        '<span class="r-user">你的答案：<b>' + d.user + "</b></span>" +
        '<span class="r-right">正确答案：<b>' + d.right + "</b></span></div>"));
    });
    view.querySelector("#retry-btn").addEventListener("click", () => A.startSection(cfg.kind));
    view.querySelector("#home-btn").addEventListener("click", A.renderHome);
  }

  function renderWritingResult() {
    const wc1 = ((A.state.answers.essay1 || "").trim().match(/\S+/g) || []).length;
    const wc2 = ((A.state.answers.essay2 || "").trim().match(/\S+/g) || []).length;
    const view = el(
      '<div class="view active" id="result-view"><div class="result-wrap">' +
      "<h1>写作练习已提交</h1>" +
      '<div class="score-card"><div class="score-sub">Task 1 字数：<b>' + wc1 + "</b>（要求 ≥150） · Task 2 字数：<b>" + wc2 + "</b>（要求 ≥250）</div></div>" +
      "<p>写作无法自动判分。建议对照剑桥雅思官方评分标准（任务回应、连贯与衔接、词汇、语法）进行自评，或交给老师批改。</p>" +
      '<button class="submit-btn" id="retry-btn">重新练习</button>' +
      '<button class="ghost-btn" id="home-btn">返回首页</button></div></div>'
    );
    A.$("#app").innerHTML = "";
    A.$("#app").appendChild(view);
    view.querySelector("#retry-btn").addEventListener("click", () => A.startSection("writing"));
    view.querySelector("#home-btn").addEventListener("click", A.renderHome);
  }

  function renderSimpleResult(title, msg) {
    const view = el('<div class="view active" id="result-view"><div class="result-wrap"><h1>' + title + "</h1><p>" + msg + "</p>" +
      '<button class="submit-btn" id="home-btn">返回首页</button></div></div>');
    A.$("#app").innerHTML = "";
    A.$("#app").appendChild(view);
    view.querySelector("#home-btn").addEventListener("click", A.renderHome);
  }
})();
