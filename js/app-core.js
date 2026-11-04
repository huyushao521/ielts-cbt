/* 核心：状态、工具函数、视图切换、首页、计时器 */
window.App = (function () {
  const D = window.IELTS_DATA;
  const state = { section: null, answers: {}, timerId: null, timeLeft: 0, submitted: false };

  const $ = (s) => document.querySelector(s);
  const $$ = (s) => Array.from(document.querySelectorAll(s));
  const el = (html) => { const t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstElementChild; };
  const norm = (s) => String(s || "").toLowerCase().replace(/[^a-z0-9]/g, "");
  const fmt = (sec) => { const m = Math.floor(sec / 60), s = sec % 60; return String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0"); };

  function show(viewId) {
    $$(".view").forEach((v) => v.classList.remove("active"));
    const v = document.getElementById(viewId);
    if (v) v.classList.add("active");
    window.scrollTo(0, 0);
  }

  function stopTimer() { if (state.timerId) { clearInterval(state.timerId); state.timerId = null; } }

  function startTimer(minutes) {
    state.timeLeft = minutes * 60;
    $("#timer").textContent = fmt(state.timeLeft);
    state.timerId = setInterval(() => {
      state.timeLeft--;
      const t = $("#timer");
      if (t) { t.textContent = fmt(Math.max(0, state.timeLeft)); t.classList.toggle("warn", state.timeLeft < 300); }
      if (state.timeLeft <= 0) { stopTimer(); alert("时间到！"); }
    }, 1000);
  }

  function renderHome() {
    stopTimer();
    state.section = null; state.answers = {}; state.submitted = false;
    $("#app").innerHTML = "";
    const view = el(
      '<div class="view active" id="home-view"><div class="home-wrap">' +
      '<div class="home-head"><h1>' + D.meta.book + '</h1>' +
      '<p class="sub">' + D.meta.test + " · " + D.meta.module + " · 机考练习系统 (Computer-Based Practice)</p></div>" +
      '<div class="card-grid"></div>' +
      '<div class="home-foot">听力音频已内置（T1S1–T1S4）；听力 / 阅读可自动判分并估算雅思分数。</div>' +
      "</div></div>"
    );
    $("#app").appendChild(view);
    const grid = view.querySelector(".card-grid");
    const defs = [
      { k: "listening", icon: "🎧", name: "Listening 听力", desc: "4 个部分 · 30 分钟 · 40 题" },
      { k: "reading", icon: "📖", name: "Reading 阅读", desc: "3 篇文章 · 60 分钟 · 40 题" },
      { k: "writing", icon: "✍️", name: "Writing 写作", desc: "Task 1 + Task 2 · 60 分钟" },
      { k: "speaking", icon: "🗣️", name: "Speaking 口语", desc: "Part 1–3 · 约 14 分钟" },
    ];
    defs.forEach((d) => {
      const card = el('<div class="card" data-k="' + d.k + '"><div class="card-icon">' + d.icon + "</div><h3>" + d.name + "</h3><p>" + d.desc + '</p><div class="card-go">开始答题 →</div></div>');
      card.addEventListener("click", () => App.startSection(d.k));
      grid.appendChild(card);
    });
  }

  function startSection(kind) {
    state.section = kind; state.answers = {}; state.submitted = false;
    $("#app").innerHTML = "";
    if (kind === "listening") App.buildListening();
    else if (kind === "reading") App.buildReading();
    else if (kind === "writing") App.buildWriting();
    else if (kind === "speaking") App.buildSpeaking();
  }

  return { D, state, $, $$, el, norm, fmt, show, stopTimer, startTimer, renderHome, startSection };
})();
