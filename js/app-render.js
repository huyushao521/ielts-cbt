/* 答题框架 + 题目块渲染器 */
(function () {
  const A = window.App;
  const { el } = A;

  A.buildFrame = function (cfg) {
    const view = el(
      '<div class="view active" id="exam-view">' +
      '<header class="exam-bar"><div class="exam-left">' +
      '<button class="back-btn" title="返回首页">‹ 返回</button>' +
      '<span class="exam-title">' + A.D.meta.book + " " + A.D.meta.test + " · " + cfg.name + "</span></div>" +
      '<div class="exam-right"><button class="errata-btn small" id="errata-btn" title="本题勘误/报错">📝 勘误</button><span class="timer" id="timer">--:--</span></div></header>' +
      '<div class="exam-body" id="exam-body"></div>' +
      '<nav class="nav-palette" id="nav-palette"></nav>' +
      '<div class="submit-bar"><button class="submit-btn" id="submit-btn">提交答卷</button></div></div>'
    );
    A.$("#app").appendChild(view);
    view.querySelector(".back-btn").addEventListener("click", A.renderHome);
    view.querySelector("#errata-btn").addEventListener("click", () => A.openErrata(A.state.testId));
    view.querySelector("#submit-btn").addEventListener("click", () => {
      if (!A.state.submitted && confirm("确定要提交答卷吗？提交后将无法修改。")) A.doSubmit(cfg);
    });
    return view;
  };

  A.collectQNumbers = function (blocks) {
    const nums = [], seen = new Set();
    blocks.forEach((b) => {
      if (b.kind === "fill") {
        const t = el("<div>" + b.html + "</div>");
        t.querySelectorAll("input[data-q]").forEach((i) => { const n = parseInt(i.getAttribute("data-q"), 10); if (!seen.has(n)) { seen.add(n); nums.push(n); } });
      } else if (b.kind === "mc2") {
        b.groups.forEach((g) => g.qnums.forEach((n) => { if (!seen.has(n)) { seen.add(n); nums.push(n); } }));
      } else if (b.questions) {
        b.questions.forEach((q) => { if (!seen.has(q.n)) { seen.add(q.n); nums.push(q.n); } });
      }
    });
    return nums.sort((a, b) => a - b);
  };

  A.renderPalette = function (nums) {
    const nav = A.$("#nav-palette");
    nav.innerHTML = '<span class="nav-label">题号导航</span>';
    nums.forEach((n) => {
      const b = el('<button class="nav-dot" data-n="' + n + '">' + n + "</button>");
      b.addEventListener("click", () => { const t = document.querySelector('[data-anchor="' + n + '"]'); if (t) t.scrollIntoView({ behavior: "smooth", block: "center" }); });
      nav.appendChild(b);
    });
    A.updatePalette();
  };

  A.updatePalette = function () {
    A.$$(".nav-dot").forEach((b) => {
      const n = b.getAttribute("data-n");
      let answered = A.state.answers[n] !== undefined && A.state.answers[n] !== "";
      if (!answered) {
        const pairKey = Object.keys(A.state.answers).find((k) => k.includes("|") && k.split("|").includes(n));
        if (pairKey && Array.isArray(A.state.answers[pairKey])) answered = A.state.answers[pairKey].every((v) => v);
      }
      b.classList.toggle("answered", !!answered);
    });
  };

  function letterSelect(q, opts) {
    return '<select class="letter-select" data-q="' + q + '"><option value="">请选择</option>' + opts.map((o) => '<option value="' + o + '">' + o + "</option>").join("") + "</select>";
  }

  A.renderBlocks = function (container, blocks) {
    blocks.forEach((b) => {
      if (b.kind === "html") {
        container.appendChild(el('<div class="block block-html">' + b.html + "</div>"));
      } else if (b.kind === "fill") {
        const wrap = el('<div class="block block-fill">' + (b.intro || "") + b.html + "</div>");
        container.appendChild(wrap);
        wrap.querySelectorAll("input[data-q]").forEach((inp) => {
          const n = inp.getAttribute("data-q");
          inp.addEventListener("input", () => { A.state.answers[n] = inp.value; A.updatePalette(); });
          inp.setAttribute("data-anchor", n);
        });
      } else if (b.kind === "mc") {
        const wrap = el('<div class="block">' + (b.intro || "") + "</div>");
        b.questions.forEach((q) => wrap.appendChild(renderMC(q)));
        container.appendChild(wrap);
      } else if (b.kind === "mc2") {
        b.groups.forEach((g) => {
          const wrap = el('<div class="block block-mc2">' + (b.intro || "") + '<p class="mc2-stem">' + g.stem + "</p>" +
            '<div class="opt-list">' + g.options.map((o) => '<span class="opt-chip"><b>' + o[0] + "</b> " + o[1] + "</span>").join("") + "</div></div>");
          const row = el('<div class="pair-row"></div>');
          g.qnums.forEach((n, idx) => {
            const sel = el('<div class="pair-slot" data-anchor="' + n + '"><label>第 ' + n + " 题</label>" +
              letterSelect(n, g.options.map((o) => o[0])).replace("data-q", 'data-pair="' + g.qnums.join("|") + '" data-idx="' + idx + '" data-q') + "</div>");
            sel.querySelector("select").addEventListener("change", (e) => {
              const key = e.target.getAttribute("data-pair"); const idx = parseInt(e.target.getAttribute("data-idx"), 10);
              if (!Array.isArray(A.state.answers[key])) A.state.answers[key] = [null, null];
              A.state.answers[key][idx] = e.target.value; A.updatePalette();
            });
            row.appendChild(sel);
          });
          wrap.appendChild(row);
          container.appendChild(wrap);
        });
      } else if (b.kind === "match" || b.kind === "matchEnd") {
        const wrap = el('<div class="block">' + (b.intro || "") + "</div>");
        const labels = b.kind === "matchEnd" ? b.endings : (Array.isArray(b.choices[0]) ? b.choices : b.choices.map((c) => [c, ""]));
        const box = el('<div class="choice-box' + (b.kind === "matchEnd" ? " endings" : "") + '"></div>');
        labels.forEach(([k, v]) => box.appendChild(el('<div class="choice-item"><b>' + k + "</b>" + (v ? " " + v : "") + "</div>")));
        wrap.appendChild(box);
        b.questions.forEach((q) => {
          const row = el('<div class="match-row" data-anchor="' + q.n + '"><div class="match-q"><b>' + q.n + "</b> " + q.text + "</div>" + letterSelect(q.n, labels.map((l) => l[0])) + "</div>");
          row.querySelector("select").addEventListener("change", (e) => { A.state.answers[e.target.getAttribute("data-q")] = e.target.value; A.updatePalette(); });
          wrap.appendChild(row);
        });
        container.appendChild(wrap);
      } else if (b.kind === "tfng" || b.kind === "ynng") {
        const opts = b.kind === "tfng" ? ["TRUE", "FALSE", "NOT GIVEN"] : ["YES", "NO", "NOT GIVEN"];
        const wrap = el('<div class="block">' + (b.intro || "") + "</div>");
        b.questions.forEach((q) => {
          const row = el('<div class="tfng-row" data-anchor="' + q.n + '"><div class="tfng-q"><b>' + q.n + "</b> " + q.text + "</div>" +
            '<div class="tfng-opts">' + opts.map((o) => '<label class="tfng-opt"><input type="radio" name="q-' + q.n + '" value="' + o + '" data-q="' + q.n + '"> ' + o + "</label>").join("") + "</div></div>");
          row.querySelectorAll("input[type=radio]").forEach((r) => r.addEventListener("change", (e) => { A.state.answers[e.target.getAttribute("data-q")] = e.target.value; A.updatePalette(); }));
          wrap.appendChild(row);
        });
        container.appendChild(wrap);
      }
    });
  };

  function renderMC(q) {
    const row = el('<div class="mc-row" data-anchor="' + q.n + '"><div class="mc-q"><b>' + q.n + "</b> " + q.text + "</div></div>");
    q.options.forEach(([k, v]) => {
      const lab = el('<label class="mc-opt"><input type="radio" name="q-' + q.n + '" value="' + k + '" data-q="' + q.n + '"><span><b>' + k + "</b> " + v + "</span></label>");
      lab.querySelector("input").addEventListener("change", (e) => { A.state.answers[e.target.getAttribute("data-q")] = e.target.value; A.updatePalette(); });
      row.appendChild(lab);
    });
    return row;
  }
})();
