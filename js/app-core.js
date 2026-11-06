/* 核心：状态、工具函数、视图切换、三级首页（书 → 题号 → 部分）、计时器 */
window.App = (function () {
  const state = { section: null, bookId: null, testId: null, answers: {}, timerId: null, timeLeft: 0, submitted: false };

  const $ = (s) => document.querySelector(s);
  const $$ = (s) => Array.from(document.querySelectorAll(s));
  const el = (html) => { const t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstElementChild; };
  const norm = (s) => String(s || "").toLowerCase().replace(/[^a-z0-9]/g, "");
  const fmt = (sec) => { const m = Math.floor(sec / 60), s = sec % 60; return String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0"); };
  const REPO = "https://github.com/huyushao521/ielts-cbt";

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

  function findBook(id) { return window.IELTS_BOOKS.find((b) => b.id === id); }

  /* 加载某本书某套题的数据，写入 App.D 作为“当前题集” */
  function loadTest(bookId, testId) {
    const book = findBook(bookId);
    const td = book.tests.find((t) => t.id === testId);
    const data = window.IELTS_DATA_MAP[testId];
    if (!data) { alert("该套题数据尚未录入。"); return false; }
    data.meta = { book: book.name, short: book.short, test: td.label, module: book.module };
    App.D = data;
    state.bookId = bookId; state.testId = testId;
    return true;
  }

  /* ---------- 首页：三级导航 ---------- */
  function renderHome() {
    stopTimer();
    state.section = null; state.answers = {}; state.submitted = false;
    state.bookId = null; state.testId = null;
    renderHomeView();
  }

  function selectBook(bookId) {
    stopTimer();
    state.bookId = bookId; state.testId = null; state.section = null;
    renderHomeView();
  }

  function selectTest(bookId, testId) {
    stopTimer();
    if (!loadTest(bookId, testId)) return;
    state.section = null; state.answers = {}; state.submitted = false;
    renderHomeView();
  }

  function renderHomeView() {
    $("#app").innerHTML = "";
    if (!state.bookId) renderBooks();
    else if (!state.testId) renderTests();
    else renderSections();
  }

  function renderBooks() {
    const view = el(
      '<div class="view active" id="home-view"><div class="home-wrap">' +
      '<div class="home-head"><h1>剑桥雅思机考练习系统</h1>' +
      '<p class="sub">IELTS Academic Computer-Based Practice · 请选择真题集</p></div>' +
      '<div class="book-grid"></div>' +
      '<div class="star-card"><div><h3>⭐ 求一个 Star</h3>' +
      '<p>如果这个练习系统对你有帮助，欢迎在 GitHub 点个 Star，支持持续更新与勘误。</p></div>' +
      '<a class="star-btn" href="' + REPO + '" target="_blank" rel="noopener">🌟 Star on GitHub</a></div>' +
      '<div class="home-foot">听力 / 阅读可自动判分并估算雅思分数；听力音频已内置。</div>' +
      "</div></div>"
    );
    $("#app").appendChild(view);
    const grid = view.querySelector(".book-grid");
    window.IELTS_BOOKS.forEach((b) => {
      const card = el(
        '<div class="book-card' + (b.ready ? "" : " pending") + '">' +
        '<div class="book-short">' + b.short + "</div><h3>" + b.name + "</h3>" +
        "<p>" + (b.ready ? b.tests.length + " 套题" : "待录入") + "</p>" +
        '<div class="card-go">' + (b.ready ? "进入 →" : "敬请期待") + "</div></div>"
      );
      if (b.ready) card.addEventListener("click", () => App.selectBook(b.id));
      grid.appendChild(card);
    });
  }

  function renderTests() {
    const book = findBook(state.bookId);
    const view = el(
      '<div class="view active" id="home-view"><div class="home-wrap">' +
      '<button class="ghost-btn back-home">‹ 返回书目</button>' +
      '<div class="home-head"><h1>' + book.short + " · " + book.name + "</h1>" +
      '<p class="sub">' + book.module + " · 请选择题号</p></div>" +
      '<div class="test-grid"></div></div></div>'
    );
    $("#app").appendChild(view);
    view.querySelector(".back-home").addEventListener("click", App.renderHome);
    const grid = view.querySelector(".test-grid");
    book.tests.forEach((t) => {
      const card = el('<div class="test-card"><div class="test-num">' + t.label + '</div><div class="card-go">开始练习 →</div></div>');
      card.addEventListener("click", () => App.selectTest(book.id, t.id));
      grid.appendChild(card);
    });
  }

  function renderSections() {
    const D = App.D, book = findBook(state.bookId);
    const view = el(
      '<div class="view active" id="home-view"><div class="home-wrap">' +
      '<button class="ghost-btn back-home">‹ 返回' + book.short + "题号</button>" +
      '<div class="home-head"><h1>' + book.short + " · " + D.meta.test + "</h1>" +
      '<p class="sub">' + D.meta.book + " · " + D.meta.module + " · 机考练习系统</p></div>" +
      '<div class="card-grid"></div>' +
      '<div class="home-foot">听力音频已内置；听力 / 阅读可自动判分并估算雅思分数。</div>' +
      '<button class="errata-btn" id="section-errata-btn">📝 本题勘误 / 报错</button>' +
      "</div></div>"
    );
    $("#app").appendChild(view);
    view.querySelector(".back-home").addEventListener("click", () => App.selectBook(book.id));
    view.querySelector("#section-errata-btn").addEventListener("click", () => App.openErrata(state.testId));
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

  /* 打开某套题的勘误弹窗（可复用：首页各科页面与答题页均调用） */
  function openErrata(testId) {
    const data = window.IELTS_DATA_MAP[testId] || {};
    const book = findBook(state.bookId) || {};
    const label = (book.short ? book.short + " · " : "") + (data.meta ? data.meta.test : testId);
    const list = (window.IELTS_ERRATA && window.IELTS_ERRATA[testId]) || [];
    const title = encodeURIComponent("[勘误] " + testId + " 题目/答案有误");
    const body = encodeURIComponent("套题：" + testId + "\n模块/题号：\n问题描述：\n建议修正：");
    const reportUrl = REPO + "/issues/new?title=" + title + "&body=" + body;
    const itemsHtml = list.length
      ? '<ul class="errata-list">' + list.map((e) => "<li><b>" + e.q + "</b>：" + e.note + "</li>").join("") + "</ul>"
      : '<p class="errata-empty">本套题暂无勘误记录。</p>';
    const ov = el(
      '<div class="errata-overlay"><div class="errata-box">' +
      '<button class="errata-close" title="关闭">×</button>' +
      "<h3>📝 勘误 · " + label + "</h3>" +
      '<p class="errata-note">' + (window.IELTS_ERRATA_NOTE || "") + "</p>" +
      itemsHtml +
      '<a class="report-link" href="' + reportUrl + '" target="_blank" rel="noopener">🐛 我要报错 / 提交勘误</a>' +
      "</div></div>"
    );
    document.body.appendChild(ov);
    const close = () => ov.remove();
    ov.addEventListener("click", (e) => { if (e.target === ov) close(); });
    ov.querySelector(".errata-close").addEventListener("click", close);
  }

  function startSection(kind) {
    state.section = kind; state.answers = {}; state.submitted = false;
    $("#app").innerHTML = "";
    if (kind === "listening") App.buildListening();
    else if (kind === "reading") App.buildReading();
    else if (kind === "writing") App.buildWriting();
    else if (kind === "speaking") App.buildSpeaking();
  }

  return { D: null, state, $, $$, el, norm, fmt, show, stopTimer, startTimer, renderHome, selectBook, selectTest, loadTest, startSection, openErrata };
})();
