/* Exam 2 study app: rendering, quizzes, progress tracking. */
(function () {
  "use strict";
  var SG = window.SG;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var strip = function (s) { return String(s).replace(/<[^>]+>/g, ""); };
  var LETTERS = "ABCDEFGH";
  var DAY = 86400000;

  var modById = {}; SG.modules.forEach(function (m) { modById[m.id] = m; });
  var topicById = {}; SG.topics.forEach(function (t) { topicById[t.id] = t; });
  var qById = {}; SG.questions.forEach(function (q) { qById[q.id] = q; });
  SG.cards = SG.cards.map(function (c, i) { return { i: i, m: c[0], t: c[1], f: c[2], b: c[3], k: c[4] }; });

  /* ------------------------------------------------------------ state */
  var LS_KEY = "bio2-exam2-state-v1";
  var blank = function () {
    return { v: 1, updated: 0, settings: { examDate: SG.examDefault }, answers: {}, cards: {}, check: {}, topics: {}, errors: [], exams: {}, finalCheck: {}, starred: {}, tasks: {} };
  };
  var S = blank();
  try { var raw = localStorage.getItem(LS_KEY); if (raw) S = Object.assign(blank(), JSON.parse(raw)); } catch (e) {}

  var db = null, dbDoc = null, saveTimer = null, syncState = "local";
  function save() {
    S.updated = Date.now();
    try { localStorage.setItem(LS_KEY, JSON.stringify(S)); } catch (e) {}
    clearTimeout(saveTimer);
    saveTimer = setTimeout(pushDb, 1200);
  }
  function pushDb() {
    if (!dbDoc) return;
    dbDoc.set(JSON.parse(JSON.stringify(S))).then(function () { setSync("saved"); }, function () { setSync("error"); });
  }
  function setSync(s) { syncState = s; var el = $("#sync"); if (el) el.innerHTML = syncLabel(); }
  function syncLabel() {
    return { local: "Progress saved in this browser", saved: "Progress synced: Claude can read it", error: "Couldn't sync; saved in this browser" }[syncState];
  }
  if (window.claude && window.claude.use) {
    window.claude.use("db").then(function (d) {
      if (!d) return;
      db = d; dbDoc = db.doc("progress/state");
      dbDoc.get().then(function (snap) {
        var remote = snap && snap.exists ? snap.data() : null;
        if (remote && (remote.updated || 0) > (S.updated || 0)) {
          S = Object.assign(blank(), remote);
          try { localStorage.setItem(LS_KEY, JSON.stringify(S)); } catch (e) {}
          route();
        } else if (S.updated) { pushDb(); }
        setSync("saved");
      }, function () { setSync("error"); });
    });
  }

  /* ------------------------------------------------------------ stats */
  function qStat(id) { return S.answers[id] || null; }
  function recordAnswer(q, ok, picks, ctx) {
    var a = S.answers[q.id] || { n: 0, c: 0 };
    a.n += 1; if (ok) a.c += 1; a.last = ok; a.ts = Date.now();
    S.answers[q.id] = a;
    if (!ok) {
      S.errors.unshift({ q: q.id, ts: Date.now(), pick: picks.map(function (p) { return strip(q.o[p]); }).join(" + ") || "(no answer)", type: "", ctx: ctx || "" });
      if (S.errors.length > 300) S.errors.length = 300;
    }
  }
  function topicStats(tid) {
    var n = 0, c = 0, seen = 0, total = 0;
    SG.questions.forEach(function (q) {
      if (q.t !== tid) return; total++;
      var a = S.answers[q.id]; if (a) { seen++; n += a.n; c += a.c; }
    });
    return { n: n, c: c, seen: seen, total: total, acc: n ? c / n : null };
  }
  function moduleStats(mid) {
    var n = 0, c = 0;
    SG.questions.forEach(function (q) { if (q.m !== mid) return; var a = S.answers[q.id]; if (a) { n += a.n; c += a.c; } });
    return { n: n, c: c, acc: n ? c / n : null };
  }
  function pct(x) { return x == null ? "—" : Math.round(x * 100) + "%"; }
  function checkCounts() {
    var g = 0, y = 0;
    SG.checklist.forEach(function (it) { var s = S.check[it[0]] || 0; if (s === 2) g++; else if (s === 1) y++; });
    return { g: g, y: y, total: SG.checklist.length };
  }
  function masteredCount() {
    var m = 0, tot = 0;
    SG.questions.forEach(function (q) { tot++; var a = S.answers[q.id]; if (a && a.last) m++; });
    return { m: m, tot: tot };
  }
  function topicPriority(t) {
    var st = topicStats(t.id), conf = (S.topics[t.id] || {}).conf || 0;
    if (st.acc == null) return t.heat >= 3 ? "High" : "Medium";
    if (st.acc < 0.6) return "High";
    if (st.acc < 0.8) return "Medium";
    return conf && conf <= 2 ? "Medium" : "Low";
  }
  function daysLeft() {
    var d = new Date((S.settings.examDate || SG.examDefault) + "T09:00:00");
    var now = new Date(); now.setHours(0, 0, 0, 0);
    var ex = new Date(d); ex.setHours(0, 0, 0, 0);
    return Math.round((ex - now) / DAY);
  }
  function planDay() { var dl = daysLeft(); if (dl >= 4) return 1; if (dl <= 0) return 0; return 5 - dl; }

  /* ------------------------------------------------------------ helpers */
  function heat(n) { return n >= 3 ? "🔥🔥🔥" : n === 2 ? "🔥🔥" : "🔥"; }
  function modTag(mid) { var m = modById[mid]; return '<span class="mtag mtag-' + mid + '">' + esc(m.short) + "</span>"; }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function lvlBadge(l) { return '<span class="lvl lvl' + l + '">' + ["", "L1 Recall", "L2 Understand", "L3 Apply", "L4 Integrate"][l] + "</span>"; }
  function qType(q) { return q.o.length === 2 && strip(q.o[0]) === "True" ? "True/False" : q.a.length > 1 ? "Select all" : "Multiple choice"; }
  function statusPill(s) { return ['<span class="pill pr">🔴 Not learned</span>', '<span class="pill py">🟡 Partial</span>', '<span class="pill pg">🟢 Exam ready</span>'][s || 0]; }
  function table(head, rows, cls) {
    return '<div class="tw"><table class="t ' + (cls || "") + '"><thead><tr>' + head.map(function (h) { return "<th>" + h + "</th>"; }).join("") + "</tr></thead><tbody>" +
      rows.map(function (r) { return "<tr>" + r.map(function (c, i) { return (i === 0 ? "<th>" : "<td>") + c + (i === 0 ? "</th>" : "</td>"); }).join("") + "</tr>"; }).join("") + "</tbody></table></div>";
  }
  function ladder(steps) {
    return '<ol class="ladder">' + steps.map(function (s) { return "<li><b>" + s[0] + "</b><span>" + s[1] + "</span></li>"; }).join("") + "</ol>";
  }
  function cycle(steps) {
    return '<ol class="cycle">' + steps.map(function (s) { return "<li>" + s + "</li>"; }).join("") + '<li class="back">↺ back to the start</li></ol>';
  }

  /* ------------------------------------------------------------ router */
  var views = {};
  var NAV = [
    ["home", "Dashboard"], ["map", "Exam map"], ["plan", "4-day plan"], ["study", "Study"], ["matrices", "Trait matrices"],
    ["review", "Professor Qs"], ["cards", "Flashcards"], ["practice", "Practice"], ["exams", "Exams"], ["weak", "Weak areas"], ["cram", "Cram sheet"], ["checklist", "Checklist"]
  ];
  function nav() {
    $("#nav").innerHTML = NAV.map(function (n) { return '<a href="#' + n[0] + '" data-v="' + n[0] + '">' + n[1] + "</a>"; }).join("");
  }
  var current = "home";
  function route() {
    var h = (location.hash || "#home").slice(1);
    var v = h.indexOf("topic-") === 0 ? "study" : h;
    if (!views[v]) { v = "home"; h = "home"; }
    current = v;
    $$("#nav a").forEach(function (a) { a.classList.toggle("on", a.getAttribute("data-v") === v); });
    var main = $("#main");
    main.innerHTML = views[v](h);
    if (main.__after) { var f = main.__after; main.__after = null; f(); }
    window.scrollTo(0, 0);
  }
  function after(fn) { $("#main").__after = fn; }
  window.addEventListener("hashchange", route);

  /* ------------------------------------------------------------ DASHBOARD */
  views.home = function () {
    var dl = daysLeft(), pd = planDay(), cc = checkCounts(), mc = masteredCount();
    var countdown = dl > 0 ? dl + (dl === 1 ? " day" : " days") : dl === 0 ? "Exam day" : "Exam passed";
    var tasks = "";
    if (pd >= 1) {
      var p = SG.plan[pd - 1];
      tasks = '<ul class="tasks">' + p.blocks.map(function (b, i) {
        var key = pd + "-" + i, on = S.tasks[key];
        return '<li><label><input type="checkbox" data-task="' + key + '"' + (on ? " checked" : "") + '> <span class="tt">' + esc(b[0]) + '</span> <b>' + esc(b[1]) + "</b> " + esc(b[2]) + "</label></li>";
      }).join("") + "</ul>";
    } else {
      tasks = "<p>It's exam day. Skim the <a href='#cram'>Cram sheet</a> once, tick the Final Night Checklist, and stop studying an hour before. You're ready.</p>";
    }
    var weakest = SG.topics.map(function (t) { return { t: t, s: topicStats(t.id) }; })
      .filter(function (x) { return x.s.acc != null; })
      .sort(function (a, b) { return a.s.acc - b.s.acc; }).slice(0, 5);
    var weakHtml = weakest.length ? '<ol class="weaklist">' + weakest.map(function (x) {
      return '<li><a href="#topic-' + x.t.id + '">' + modTag(x.t.m) + " " + esc(x.t.title) + '</a> <span class="num">' + pct(x.s.acc) + "</span></li>";
    }).join("") + "</ol>" : "<p class='muted'>Answer some practice questions and your weakest topics will show up here.</p>";
    var modRows = SG.modules.map(function (m) {
      var s = moduleStats(m.id), a = s.acc;
      return '<div class="mbar"><span>' + modTag(m.id) + " " + esc(m.name) + '</span><span class="bar"><i style="width:' + (a == null ? 0 : Math.round(a * 100)) + '%"></i></span><span class="num">' + pct(a) + "</span></div>";
    }).join("");
    return '<section class="hero"><div><p class="eyebrow">Biology II · Exam 2</p><h1>Exam Mastery</h1><p class="lede">Built from your professor\'s study guide, 111 review questions, and your lecture slides for Modules 5–10. Retrieve, don\'t reread.</p></div>' +
      '<div class="countdown"><span class="big">' + countdown + '</span><label for="examDate">Exam date</label><input id="examDate" type="date" value="' + esc(S.settings.examDate) + '"></div></section>' +
      '<div class="grid g3">' +
      '<div class="card stat"><span class="label">Study-guide checklist</span><span class="big">' + cc.g + "<small>/" + cc.total + '</small></span><span class="muted">🟢 exam ready · ' + cc.y + ' 🟡 partial</span><span class="bar"><i style="width:' + Math.round(cc.g / cc.total * 100) + '%"></i></span></div>' +
      '<div class="card stat"><span class="label">Questions mastered</span><span class="big">' + mc.m + "<small>/" + mc.tot + '</small></span><span class="muted">last attempt correct</span><span class="bar"><i style="width:' + Math.round(mc.m / mc.tot * 100) + '%"></i></span></div>' +
      '<div class="card stat"><span class="label">Errors logged</span><span class="big">' + S.errors.length + '</span><span class="muted">' + S.errors.filter(function (e) { return !e.type; }).length + ' still need a "why I missed it" tag</span><a class="btn sm" href="#weak">Open error log</a></div>' +
      "</div>" +
      '<div class="grid g2">' +
      '<div class="card"><h2>' + (pd >= 1 ? "Today: Day " + pd + " · " + esc(SG.plan[pd - 1].title) : "Today") + "</h2>" + tasks + (pd >= 1 && SG.plan[pd - 1].checkpoint ? '<a class="btn" href="#exams">Start Day ' + pd + " checkpoint</a>" : "") + "</div>" +
      '<div class="card"><h2>Weakest topics</h2>' + weakHtml + '<h3>Accuracy by module</h3>' + modRows + "</div>" +
      "</div>" +
      '<div class="card tutor"><h2>Tutor modes (in chat with Claude)</h2><p>This page handles practice and tracking. For live tutoring, type one of these in the Claude Code chat where you made this:</p>' +
      '<div class="cmds"><code>Quiz me [topic]</code><code>Teach me [topic]</code><code>Feynman: [topic]</code><code>Rapid fire</code><code>Exam mode</code><code>I only have [X] hours left</code></div>' +
      '<p class="muted">Claude can read your saved progress (scores, error log, confidence) to adapt questions. If syncing is off, use <b>Copy my results for Claude</b> and paste them into the chat.</p>' +
      '<button class="btn ghost" id="copyRes">Copy my results for Claude</button> <span id="copyMsg" class="muted"></span></div>';
  };
  function resultsText() {
    var lines = ["BIO II EXAM 2 PROGRESS (" + new Date().toLocaleString() + ")", "Exam date: " + S.settings.examDate, ""];
    lines.push("TOPIC ACCURACY (correct/attempts, self-confidence):");
    SG.topics.forEach(function (t) { var s = topicStats(t.id), c = (S.topics[t.id] || {}).conf; if (s.n || c) lines.push("- " + modById[t.m].short + " " + t.title + ": " + s.c + "/" + s.n + (c ? ", conf " + c + "/5" : "")); });
    lines.push("", "EXAMS:");
    Object.keys(S.exams).forEach(function (k) { S.exams[k].forEach(function (r) { lines.push("- " + k + ": " + r.score + "/" + r.total + " on " + new Date(r.ts).toLocaleDateString()); }); });
    lines.push("", "RECENT ERRORS:");
    S.errors.slice(0, 40).forEach(function (e) { var q = qById[e.q]; if (q) lines.push("- [" + q.t + "] " + strip(q.q).slice(0, 90) + " | picked: " + e.pick + " | type: " + (e.type || "untagged")); });
    var cc = checkCounts(); lines.push("", "Checklist: " + cc.g + " green, " + cc.y + " yellow of " + cc.total);
    return lines.join("\n");
  }
  document.addEventListener("click", function (ev) {
    var t = ev.target;
    if (t.id === "copyRes") {
      var txt = resultsText();
      var done = function (ok) { $("#copyMsg").textContent = ok ? "Copied. Paste it into the chat." : "Copy blocked. Select the text below and copy it."; if (!ok) { var ta = document.createElement("textarea"); ta.className = "copyta"; ta.value = txt; t.parentNode.appendChild(ta); ta.select(); } };
      try { navigator.clipboard.writeText(txt).then(function () { done(true); }, function () { done(false); }); } catch (e) { done(false); }
    }
  });
  document.addEventListener("change", function (ev) {
    var t = ev.target;
    if (t.id === "examDate") { S.settings.examDate = t.value || SG.examDefault; save(); route(); }
    if (t.dataset && t.dataset.task) { S.tasks[t.dataset.task] = t.checked; save(); }
  });

  /* ------------------------------------------------------------ EXAM MAP */
  views.map = function () {
    var A = SG.analysis;
    var cov = SG.modules.map(function (m) {
      var ts = SG.topics.filter(function (t) { return t.m === m.id; });
      var rq = SG.review.filter(function (r) { return r[1] === m.id; }).length;
      return [modTag(m.id) + " " + esc(m.name), esc(m.weight), heat(m.heat), rq, ts.map(function (t) { return '<a href="#topic-' + t.id + '">' + esc(t.title) + "</a>"; }).join("<br>"), esc(m.files)];
    });
    return '<h1>Exam content map</h1><p class="lede">The first-pass analysis of everything you uploaded: what\'s on the exam, how it\'s tested, and what\'s missing.</p>' +
      '<nav class="toc"><a href="#map-inv">Materials</a><a href="#map-cov">Coverage</a><a href="#map-style">Question style</a><a href="#map-pat">Professor patterns</a><a href="#map-pri">Priorities</a><a href="#map-miss">Missing</a><a href="#map-conf">Source conflicts</a><a href="#map-conn">Connections</a></nav>' +
      '<section class="card" id="map-inv"><h2>1 · Materials inventory</h2>' + table(["File", "Contents", "Role"], A.inventory.map(function (r) { return [esc(r[0]), esc(r[1]), esc(r[2])]; })) + "</section>" +
      '<section class="card" id="map-cov"><h2>2 · Exam coverage map</h2><p class="muted">Weights come straight from the study guide. 🔥 ratings combine those weights with the number of review questions and slides.</p>' +
      table(["Module", "Study-guide weight", "Yield", "Review Qs", "Topics", "Your materials"], cov) + "</section>" +
      '<section class="card" id="map-style"><h2>4 · How your professor tests</h2><p>Based on the 111 review-question stems plus the in-class questions on M8_2 slide 47 and M10 slide 35. The answer choices weren\'t included, so the distractor patterns below are inferred from how the stems are worded.</p>' +
      table(["Question style", "Share of review Qs (approx.)", "What it means for you"], A.questionStyle.map(function (r) { return [esc(r[0]), esc(r[1]), esc(r[2])]; })) +
      '<p><b>Overall:</b> mostly recall and recognition (definitions, organism → group) with a steady layer of application (clinical scenarios, "why" questions, predictions). Memorization load is high (130 terms); application load is moderate. The exam rewards knowing <i>complete</i> sets (all traits of a group) because of the many NOT/FALSE questions.</p></section>' +
      '<section class="card" id="map-pat"><h2>Professor question patterns</h2>' + A.distractors.map(function (d) {
        return '<div class="pattern"><h3>' + esc(d[0]) + '</h3><p><b>Seen in:</b> ' + esc(d[1]) + '</p><p><b>What to watch for:</b> ' + esc(d[2]) + "</p></div>";
      }).join("") + "</section>" +
      '<section class="card" id="map-pri"><h2>5 · High-yield priority map</h2>' + table(["Yield", "Topic", "Why (evidence)"], A.priority.map(function (r) { return [r[0], esc(r[1]), esc(r[2])]; })) + "</section>" +
      '<section class="card" id="map-miss"><h2>7 · Missing or unclear material</h2><ul>' + A.missing.map(function (m) { return "<li>" + m + "</li>"; }).join("") + "</ul></section>" +
      '<section class="card" id="map-conf"><h2>Source conflicts to know about</h2><p class="muted">Places where your materials disagree with each other or with the textbook. I kept the professor\'s material and flagged the issue rather than silently changing it.</p>' +
      table(["Issue", "What the sources say", "What to do"], A.discrepancies.map(function (r) { return [esc(r[0]), r[1], r[2]]; })) + "</section>" +
      '<section class="card" id="map-conn"><h2>Big-picture connections</h2><ul class="conn">' + SG.connections.map(function (c) { return "<li>🔗 " + esc(c[0]) + ' <span class="muted">(' + esc(c[1]) + ")</span></li>"; }).join("") + "</ul></section>";
  };

  /* ------------------------------------------------------------ PLAN */
  views.plan = function () {
    var pd = planDay();
    return '<h1>Four-day plan</h1><p class="lede">Ordered by exam weight and difficulty, not split evenly. Each day starts by retrieving the previous day\'s material (spaced repetition), and Day 4 has no new content.</p>' +
      SG.plan.map(function (p) {
        return '<section class="card day' + (p.day === pd ? " now" : "") + '"><p class="eyebrow">Day ' + p.day + (p.day === pd ? " · today" : "") + "</p><h2>" + esc(p.title) + '</h2><p class="muted">' + esc(p.why) + "</p>" +
          table(["Time", "Block", "What to do"], p.blocks.map(function (b) { return [esc(b[0]), esc(b[1]), esc(b[2])]; })) +
          "<p><b>Active recall:</b> " + esc(p.recall) + "</p>" + (p.checkpoint ? '<a class="btn" href="#exams">Day ' + p.day + " checkpoint</a>" : '<a class="btn" href="#cram">Cram sheet</a>') + "</section>";
      }).join("") +
      '<section class="card"><h2>Rules for all four days</h2><ul><li>Close the notes before answering any Active Recall prompt. Say the answer out loud or write it, then check.</li><li>After every practice set, tag each miss in the <a href="#weak">error log</a>. The tags drive what you review on Day 3.</li><li>When a topic hits 80%+ accuracy, stop drilling it with easy questions. Practice mode does this for you automatically.</li><li>Breaks are part of the plan: 10–15 minutes away from screens.</li></ul></section>';
  };

  /* ------------------------------------------------------------ STUDY */
  views.study = function (h) {
    var tid = h.indexOf("topic-") === 0 ? h.slice(6) : null;
    var t = tid && topicById[tid];
    var list = SG.modules.map(function (m) {
      var ts = SG.topics.filter(function (x) { return x.m === m.id; });
      return '<div class="tgroup"><p class="glabel">' + modTag(m.id) + " " + esc(m.name) + ' <span class="muted">' + esc(m.weight) + "</span></p>" + ts.map(function (x) {
        var st = (S.topics[x.id] || {}).status || 0;
        return '<a class="tlink' + (t && t.id === x.id ? " on" : "") + '" href="#topic-' + x.id + '"><span class="dot d' + st + '"></span>' + esc(x.title) + ' <span class="heat">' + heat(x.heat) + "</span></a>";
      }).join("") + "</div>";
    }).join("");
    if (!t) {
      return '<h1>Study</h1><p class="lede">28 topics, ordered as the exam blueprint. Each topic has a plain-language explanation, the exam-level version, traps, a memory trick, and recall prompts. Mark yourself 🔴 🟡 🟢 at the top of each one.</p><div class="studylist">' + list + "</div>";
    }
    var tp = S.topics[t.id] || {};
    var st = topicStats(t.id);
    var sec = function (title, body, cls) { return body ? '<section class="tsec ' + (cls || "") + '"><h3>' + title + "</h3>" + body + "</section>" : ""; };
    var ul = function (arr, cls) { return arr && arr.length ? '<ul class="' + (cls || "") + '">' + arr.map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ul>" : ""; };
    var idx = SG.topics.indexOf(t), prev = SG.topics[idx - 1], next = SG.topics[idx + 1];
    var html = '<div class="studywrap"><aside class="side">' + list + '</aside><article class="topic">' +
      '<p class="eyebrow">' + modTag(t.m) + " " + esc(modById[t.m].name) + " · " + heat(t.heat) + "</p><h1>" + esc(t.title) + "</h1>" +
      (t.flag ? '<p class="flag">⚑ Built partly from the textbook or book, not your slides. Check it against your lecture if you have it.</p>' : "") +
      '<div class="selfrate"><span>My status:</span>' + [0, 1, 2].map(function (s) { return '<button class="sr' + ((tp.status || 0) === s ? " on" : "") + '" data-status="' + s + '" data-tid="' + t.id + '">' + ["🔴 Not learned", "🟡 Partial", "🟢 Exam ready"][s] + "</button>"; }).join("") +
      '<span class="sep">Confidence:</span>' + [1, 2, 3, 4, 5].map(function (c) { return '<button class="cf' + (tp.conf === c ? " on" : "") + '" data-conf="' + c + '" data-tid="' + t.id + '">' + c + "</button>"; }).join("") +
      '<span class="muted acc">Accuracy: ' + pct(st.acc) + " (" + st.c + "/" + st.n + ")</span></div>" +
      '<div class="callout hot"><b>🔥 Why this matters:</b> ' + esc(t.why) + "</div>" +
      sec("What you need to know", "<p>" + t.know + "</p>") +
      sec("Explain it like I'm learning it for the first time", "<p>" + t.eli5 + "</p>", "eli5") +
      sec("Exam-level explanation", t.exam) +
      (t.process ? sec("Mechanism / process", '<ol class="steps">' + t.process.map(function (p) { return "<li>" + p + "</li>"; }).join("") + "</ol>") : "") +
      (t.compare ? sec("Compare & contrast", table(t.compare.head, t.compare.rows)) : "") +
      (t.terms ? sec("Key terms", '<dl class="terms">' + t.terms.map(function (x) { return "<dt>" + x[0] + "</dt><dd>" + x[1] + "</dd>"; }).join("") + "</dl>") : "") +
      (t.confuse && t.confuse.length ? '<div class="callout warn"><b>⚠️ Don\'t confuse</b>' + ul(t.confuse) + "</div>" : "") +
      (t.traps && t.traps.length ? '<div class="callout trap"><b>⚠️ Exam traps</b>' + ul(t.traps) + "</div>" : "") +
      (t.tested ? sec("How it could be tested", ul(t.tested)) : "") +
      (t.trick ? '<div class="callout mem"><b>🧠 Memory trick</b><p>' + t.trick + "</p></div>" : "") +
      (t.memorize || t.understand ? '<div class="ku"><div><h4>Memorize</h4>' + ul(t.memorize) + "</div><div><h4>Understand</h4>" + ul(t.understand) + "</div></div>" : "") +
      (t.connect ? ul(t.connect.map(function (c) { return "🔗 " + c; }), "conn") : "") +
      '<section class="tsec recall"><h3>Active recall (answer without looking)</h3><ol>' + t.recall.map(function (r) { return "<li>" + r + "</li>"; }).join("") + "</ol></section>" +
      '<div class="callout one"><b>If you only remember one thing:</b><p>' + t.one + "</p></div>" +
      '<p class="src"><b>Source:</b> ' + esc(t.src) + "</p>" +
      '<div class="tnav"><a class="btn" href="#practice" data-practice-topic="' + t.id + '">Practice this topic</a>' +
      (prev ? '<a class="btn ghost" href="#topic-' + prev.id + '">← ' + esc(prev.title) + "</a>" : "") +
      (next ? '<a class="btn ghost" href="#topic-' + next.id + '">' + esc(next.title) + " →</a>" : "") + "</div></article></div>";
    return html;
  };
  document.addEventListener("click", function (ev) {
    var b = ev.target.closest("[data-status],[data-conf],[data-practice-topic]");
    if (!b) return;
    if (b.dataset.practiceTopic) { pendingTopic = b.dataset.practiceTopic; return; }
    var tid = b.dataset.tid, tp = S.topics[tid] || {};
    if (b.dataset.status != null) tp.status = +b.dataset.status;
    if (b.dataset.conf != null) tp.conf = +b.dataset.conf;
    S.topics[tid] = tp; save(); route();
  });

  /* ------------------------------------------------------------ MATRICES */
  views.matrices = function () {
    var D = SG.diagrams;
    return '<h1>Trait matrices & diagrams</h1><p class="lede">The study guide keeps asking you to compare groups and to know "whether or not that plant has it". These tables are the fastest way to see that. Cover a column with your hand and recite it.</p>' +
      SG.matrices.map(function (mx) { return '<section class="card" id="mx-' + mx.id + '"><h2>' + esc(mx.title) + '</h2><p class="muted">' + esc(mx.note) + "</p>" + table(mx.head, mx.rows, "mx") + "</section>"; }).join("") +
      '<div class="grid g2"><section class="card"><h2>Plant evolution ladder</h2><p class="muted">Each step adds a trait that every later group keeps.</p>' + ladder(D.plantLadder) + "</section>" +
      '<section class="card"><h2>Animal evolution ladder</h2><p class="muted">Order of the major transitions (M8_2 slide 3).</p>' + ladder(D.animalLadder) + "</section></div>" +
      '<div class="grid g2"><section class="card"><h2>Alternation of generations</h2><p class="muted">Where it\'s tested: the ploidy of each stage, and which step is meiosis vs mitosis. Remove meiosis and no spores form; remove flagellated sperm (seedless plants) and fertilization fails.</p>' + cycle(D.altGen) + "</section>" +
      '<section class="card"><h2>Fungal sexual life cycle</h2><p class="muted">Most-tested point: plasmogamy comes BEFORE karyogamy, with a long n+n stage between them.</p>' + cycle(D.fungalCycle) + "</section></div>";
  };

  /* ------------------------------------------------------------ REVIEW Qs */
  var reviewFilter = "all";
  views.review = function () {
    var items = SG.review.filter(function (r) { return reviewFilter === "all" || (reviewFilter === "star" ? S.starred[r[0]] : r[1] === reviewFilter); });
    return '<h1>Professor review questions</h1><p class="lede">All 111 stems from Exam2ReviewQuestions.pdf, with the expected answer for each. These are probably the closest thing you have to the real exam, so answer each one out loud before you reveal it. Star the ones you hesitate on.</p>' +
      '<div class="chips" id="rvf">' + [["all", "All"], ["star", "★ Starred"]].concat(SG.modules.map(function (m) { return [m.id, m.short]; })).map(function (c) { return '<button class="chip' + (reviewFilter === c[0] ? " on" : "") + '" data-rf="' + c[0] + '">' + c[1] + "</button>"; }).join("") +
      '<button class="chip" id="revAll">Reveal all</button></div>' +
      '<ol class="rv">' + items.map(function (r) {
        return '<li class="rvi"><div class="rvq"><span class="num">' + r[0] + "</span>" + modTag(r[1]) + " <span>" + r[2] + '</span><button class="star' + (S.starred[r[0]] ? " on" : "") + '" data-star="' + r[0] + '" aria-label="Star question">★</button></div>' +
          '<details><summary>Show answer</summary><p class="ans">' + r[3] + "</p>" + (r[4] ? '<p class="muted">' + r[4] + "</p>" : "") + "</details></li>";
      }).join("") + "</ol>" +
      '<section class="card"><h2>In-class practice items (from your slides)</h2><p class="muted">From M8_2 slide 47 and M10 slide 35: more evidence of how your professor words questions.</p><ol class="rv">' + SG.inClass.map(function (r) {
        return '<li class="rvi"><div class="rvq">' + modTag(r[0]) + " <span>" + r[1] + '</span></div><details><summary>Show answer</summary><p class="ans">' + r[2] + "</p></details></li>";
      }).join("") + "</ol></section>";
  };
  document.addEventListener("click", function (ev) {
    var b = ev.target.closest("[data-rf],[data-star],#revAll");
    if (!b) return;
    if (b.id === "revAll") { $$("details", $("#main")).forEach(function (d) { d.open = true; }); return; }
    if (b.dataset.rf) { reviewFilter = b.dataset.rf; route(); return; }
    if (b.dataset.star) { var n = b.dataset.star; if (S.starred[n]) delete S.starred[n]; else S.starred[n] = true; save(); b.classList.toggle("on"); }
  });

  /* ------------------------------------------------------------ FLASHCARDS */
  var FC = { mod: "all", kind: "all", hardOnly: false, deck: null, pos: 0, flipped: false };
  function buildDeck() {
    FC.deck = shuffle(SG.cards.filter(function (c) {
      if (FC.mod !== "all" && c.m !== FC.mod) return false;
      if (FC.kind !== "all" && c.k !== FC.kind) return false;
      if (FC.hardOnly && !(S.cards[c.i] && S.cards[c.i].hard)) return false;
      return true;
    }));
    FC.pos = 0; FC.flipped = false;
  }
  views.cards = function () {
    if (!FC.deck) buildDeck();
    var c = FC.deck[FC.pos];
    var hardN = Object.keys(S.cards).filter(function (k) { return S.cards[k].hard; }).length;
    var controls = '<div class="chips">' + [["all", "All modules"]].concat(SG.modules.map(function (m) { return [m.id, m.short]; })).map(function (x) { return '<button class="chip' + (FC.mod === x[0] ? " on" : "") + '" data-fm="' + x[0] + '">' + x[1] + "</button>"; }).join("") + "</div>" +
      '<div class="chips">' + [["all", "Facts + deep prompts"], ["f", "Facts"], ["d", "Deep prompts"]].map(function (x) { return '<button class="chip' + (FC.kind === x[0] ? " on" : "") + '" data-fk="' + x[0] + '">' + x[1] + "</button>"; }).join("") +
      '<button class="chip' + (FC.hardOnly ? " on" : "") + '" id="fHard">★ Hard cards only (' + hardN + ')</button><button class="chip" id="fShuf">Shuffle</button></div>';
    if (!c) return '<h1>Flashcards</h1>' + controls + '<div class="card"><p>No cards match this filter. Mark cards as hard while you study, or switch filters.</p></div>';
    var mark = S.cards[c.i] || {};
    return '<h1>Flashcards</h1><p class="lede">' + SG.cards.length + ' cards. Tap the card (or press Space) to flip. "Again" marks a card hard; hard cards come back in the hard-only deck.</p>' + controls +
      '<div class="fcwrap"><p class="muted">Card ' + (FC.pos + 1) + " of " + FC.deck.length + " · " + modTag(c.m) + " " + esc((topicById[c.t] || {}).title || "") + (c.k === "d" ? ' · <span class="lvl lvl3">Deep prompt</span>' : "") + (mark.hard ? ' · <span class="pill pr">marked hard</span>' : "") + "</p>" +
      '<button class="fc' + (FC.flipped ? " flipped" : "") + '" id="fcard"><span class="face front">' + c.f + '</span><span class="face back">' + c.b + "</span></button>" +
      '<div class="fcbtns"><button class="btn ghost" id="fPrev">← Prev</button><button class="btn bad" id="fAgain">Again (hard)</button><button class="btn ok" id="fGot">Got it</button><button class="btn ghost" id="fNext">Next →</button></div></div>';
  };
  function fcMove(d) { FC.pos = Math.max(0, Math.min(FC.deck.length - 1, FC.pos + d)); FC.flipped = false; route(); }
  document.addEventListener("click", function (ev) {
    if (current !== "cards") return;
    var b = ev.target.closest("button"); if (!b) return;
    if (b.dataset.fm) { FC.mod = b.dataset.fm; buildDeck(); route(); }
    else if (b.dataset.fk) { FC.kind = b.dataset.fk; buildDeck(); route(); }
    else if (b.id === "fHard") { FC.hardOnly = !FC.hardOnly; buildDeck(); route(); }
    else if (b.id === "fShuf") { buildDeck(); route(); }
    else if (b.id === "fcard") { FC.flipped = !FC.flipped; b.classList.toggle("flipped"); }
    else if (b.id === "fPrev") fcMove(-1);
    else if (b.id === "fNext") fcMove(1);
    else if (b.id === "fAgain" || b.id === "fGot") {
      var c = FC.deck[FC.pos]; var m = S.cards[c.i] || {};
      if (b.id === "fAgain") { m.hard = true; m.miss = (m.miss || 0) + 1; } else { m.known = (m.known || 0) + 1; if (m.known >= 2) m.hard = false; }
      S.cards[c.i] = m; save(); fcMove(1);
    }
  });
  document.addEventListener("keydown", function (ev) {
    if (current !== "cards" || /INPUT|SELECT|TEXTAREA/.test(ev.target.tagName)) return;
    if (ev.key === " ") { ev.preventDefault(); var f = $("#fcard"); if (f) { FC.flipped = !FC.flipped; f.classList.toggle("flipped"); } }
    if (ev.key === "ArrowRight") fcMove(1);
    if (ev.key === "ArrowLeft") fcMove(-1);
  });

  /* ------------------------------------------------------------ QUESTION RENDERING */
  function renderQ(q, idx, opts) {
    // opts: {order, picks, locked, showFeedback, name}
    var order = opts.order, multi = q.a.length > 1;
    var head = '<div class="qhead"><span class="num">' + (idx + 1) + "</span>" + (opts.hideMeta ? "" : modTag(q.m) + " " + lvlBadge(q.lvl)) + (multi ? ' <span class="pill">Select all that apply</span>' : "") + "</div>";
    var body = '<p class="qstem">' + q.q + '</p><div class="opts">' + order.map(function (oi, k) {
      var on = opts.picks.indexOf(oi) >= 0, cls = "opt";
      if (opts.showFeedback) { if (q.a.indexOf(oi) >= 0) cls += " right"; else if (on) cls += " wrong"; }
      return '<label class="' + cls + '"><input type="' + (multi ? "checkbox" : "radio") + '" name="' + opts.name + '" value="' + oi + '"' + (on ? " checked" : "") + (opts.locked ? " disabled" : "") + '> <b>' + LETTERS[k] + ".</b> <span>" + q.o[oi] + "</span></label>";
    }).join("") + "</div>";
    var fb = "";
    if (opts.showFeedback) {
      var ok = sameSet(opts.picks, q.a);
      var letterOf = function (oi) { return LETTERS[order.indexOf(oi)]; };
      fb = '<div class="fb ' + (ok ? "fbok" : "fbbad") + '"><p class="verdict">' + (ok ? "✔ Correct" : "✘ Incorrect") + " · Correct answer: " + q.a.map(letterOf).sort().join(", ") + "</p>" +
        "<p><b>Why " + q.a.map(letterOf).sort().join(", ") + " is correct:</b> " + q.why + "</p><ul>" +
        order.map(function (oi) { return q.a.indexOf(oi) >= 0 || !q.w[oi] ? "" : "<li><b>Why " + letterOf(oi) + " is wrong:</b> " + q.w[oi] + "</li>"; }).join("") + "</ul>" +
        "<p><b>Concept tested:</b> " + esc(q.c) + (topicById[q.t] ? ' · <a href="#topic-' + q.t + '">review topic</a>' : "") + "</p>" + (q.trap ? "<p><b>Exam trap:</b> " + q.trap + "</p>" : "") + "</div>";
    }
    return '<div class="q" data-qid="' + q.id + '">' + head + body + fb + "</div>";
  }
  function sameSet(a, b) { if (a.length !== b.length) return false; var x = a.slice().sort(), y = b.slice().sort(); return x.every(function (v, i) { return v === y[i]; }); }
  function orderFor(q) { return qType(q) === "True/False" ? [0, 1] : shuffle(q.o.map(function (_, i) { return i; })); }
  function readPicks(container, name) { return $$('input[name="' + name + '"]:checked', container).map(function (i) { return +i.value; }); }

  /* ------------------------------------------------------------ PRACTICE */
  var pendingTopic = null;
  var PR = { mods: [], topic: "", levels: [2, 3, 4], count: 10, run: null };
  function weight(q) {
    var a = S.answers[q.id], ts = topicStats(q.t), w;
    if (!a) w = 2; else if (!a.last) w = 4; else if (a.c >= 2) w = 0.3; else w = 1;
    if (ts.acc != null && ts.acc >= 0.8 && ts.n >= 4 && q.lvl <= 2) w *= 0.3;
    S.errors.slice(0, 30).forEach(function (e) { var eq = qById[e.q]; if (eq && eq.t === q.t) w *= 1.15; });
    return w;
  }
  function pickWeighted(pool, n) {
    var out = [], p = pool.slice();
    while (out.length < n && p.length) {
      var tot = p.reduce(function (s, q) { return s + weight(q); }, 0), r = Math.random() * tot, i = 0;
      for (; i < p.length; i++) { r -= weight(p[i]); if (r <= 0) break; }
      out.push(p.splice(Math.min(i, p.length - 1), 1)[0]);
    }
    return out;
  }
  views.practice = function () {
    if (pendingTopic) { PR.topic = pendingTopic; PR.mods = []; PR.levels = [1, 2, 3, 4]; pendingTopic = null; PR.run = null; }
    if (PR.run) return practiceRun();
    var bank = SG.questions.filter(function (q) { return q.set === "P"; });
    var topicsOpt = '<option value="">Any topic</option>' + SG.topics.map(function (t) { return '<option value="' + t.id + '"' + (PR.topic === t.id ? " selected" : "") + ">" + modById[t.m].short + " · " + esc(t.title) + "</option>"; }).join("");
    return '<h1>Practice</h1><p class="lede">' + bank.length + ' questions with every option explained. You get feedback after each answer. Questions you missed come back more often; topics you\'ve mastered (80%+) shift toward harder questions.</p>' +
      '<div class="card cfg"><div><span class="label">Modules</span><div class="chips">' + SG.modules.map(function (m) { return '<button class="chip' + (PR.mods.indexOf(m.id) >= 0 ? " on" : "") + '" data-pm="' + m.id + '">' + m.short + " " + esc(m.name) + "</button>"; }).join("") + '</div><p class="muted">None selected = all modules.</p></div>' +
      '<div><label class="label" for="ptopic">Topic</label><select id="ptopic">' + topicsOpt + "</select></div>" +
      '<div><span class="label">Difficulty</span><div class="chips">' + [1, 2, 3, 4].map(function (l) { return '<button class="chip' + (PR.levels.indexOf(l) >= 0 ? " on" : "") + '" data-pl="' + l + '">' + lvlBadge(l) + "</button>"; }).join("") + "</div></div>" +
      '<div><span class="label">Length</span><div class="chips">' + [5, 10, 20, 30].map(function (n) { return '<button class="chip' + (PR.count === n ? " on" : "") + '" data-pc="' + n + '">' + n + " Qs</button>"; }).join("") + "</div></div>" +
      '<button class="btn big" id="pStart">Start practice</button></div>';
  };
  function practiceRun() {
    var r = PR.run, q = r.qs[r.i];
    if (!q) {
      var right = r.log.filter(function (x) { return x.ok; }).length;
      return '<h1>Practice complete</h1><div class="card"><p class="big">' + right + " / " + r.log.length + "</p>" +
        '<ul class="reslist">' + r.log.map(function (x) { var qq = qById[x.id]; return "<li>" + (x.ok ? "✔" : "✘") + " " + modTag(qq.m) + " " + esc(strip(qq.q)).slice(0, 110) + "</li>"; }).join("") + "</ul>" +
        '<p>Misses went into your <a href="#weak">error log</a>. Tag each one with why you missed it.</p><button class="btn" id="pAgain">New practice set</button></div>';
    }
    var name = "pq";
    return '<h1>Practice</h1><p class="muted">Question ' + (r.i + 1) + " of " + r.qs.length + " · " + esc((topicById[q.t] || {}).title || "") + "</p>" +
      renderQ(q, r.i, { order: r.order, picks: r.picks || [], locked: r.answered, showFeedback: r.answered, name: name }) +
      '<div class="qbtns">' + (r.answered ? '<button class="btn" id="pNext">' + (r.i + 1 < r.qs.length ? "Next question →" : "See results") + "</button>" : '<button class="btn" id="pSubmit">Check answer</button>') + '<button class="btn ghost" id="pQuit">End set</button></div>';
  }
  document.addEventListener("click", function (ev) {
    if (current !== "practice") return;
    var b = ev.target.closest("button"); if (!b) return;
    var tog = function (arr, v) { var i = arr.indexOf(v); if (i >= 0) arr.splice(i, 1); else arr.push(v); };
    if (b.dataset.pm) { tog(PR.mods, b.dataset.pm); route(); }
    else if (b.dataset.pl) { tog(PR.levels, +b.dataset.pl); if (!PR.levels.length) PR.levels = [1, 2, 3, 4]; route(); }
    else if (b.dataset.pc) { PR.count = +b.dataset.pc; route(); }
    else if (b.id === "pStart") {
      var pool = SG.questions.filter(function (q) {
        return q.set === "P" && (!PR.mods.length || PR.mods.indexOf(q.m) >= 0) && (!PR.topic || q.t === PR.topic) && PR.levels.indexOf(q.lvl) >= 0;
      });
      if (!pool.length) { pool = SG.questions.filter(function (q) { return q.set === "P" && (!PR.topic || q.t === PR.topic); }); }
      var qs = pickWeighted(pool, PR.count);
      PR.run = { qs: qs, i: 0, order: orderFor(qs[0]), answered: false, picks: [], log: [] };
      route();
    }
    else if (b.id === "pSubmit") {
      var r = PR.run, q = r.qs[r.i], picks = readPicks($("#main"), "pq");
      if (!picks.length) return;
      var ok = sameSet(picks, q.a);
      r.picks = picks; r.answered = true; r.log.push({ id: q.id, ok: ok });
      recordAnswer(q, ok, picks, "practice"); save(); route();
    }
    else if (b.id === "pNext") { var r2 = PR.run; r2.i++; r2.answered = false; r2.picks = []; if (r2.qs[r2.i]) r2.order = orderFor(r2.qs[r2.i]); route(); }
    else if (b.id === "pQuit" || b.id === "pAgain") { PR.run = null; route(); }
  });
  document.addEventListener("change", function (ev) { if (ev.target.id === "ptopic") { PR.topic = ev.target.value; } });

  /* ------------------------------------------------------------ EXAMS */
  var EXAMS = [
    { id: "C1", name: "Day 1 checkpoint", sub: "M4–M6 · 15 questions", min: 18 },
    { id: "C2", name: "Day 2 checkpoint", sub: "M7–M9 · 20 questions", min: 25 },
    { id: "C3", name: "Day 3 checkpoint", sub: "30 mixed questions, weighted toward your misses", min: 36 },
    { id: "MA", name: "Mock exam A", sub: "36 questions, all modules, weighted like the real exam", min: 45 },
    { id: "MB", name: "Mock exam B", sub: "36 new questions, all modules", min: 45 }
  ];
  var EX = { run: null, result: null, timer: null };
  function examQuestions(id) {
    if (id !== "C3") return shuffle(SG.questions.filter(function (q) { return q.set === id; }));
    var pool = SG.questions.filter(function (q) { return q.set === "P" || q.set === "C1" || q.set === "C2"; });
    var missed = pool.filter(function (q) { var a = S.answers[q.id]; return a && !a.last; });
    var unseen = pool.filter(function (q) { return !S.answers[q.id]; });
    var chosen = shuffle(missed).slice(0, 14);
    var rest = pickWeighted(unseen.filter(function (q) { return chosen.indexOf(q) < 0; }), 30 - chosen.length);
    chosen = chosen.concat(rest);
    if (chosen.length < 30) chosen = chosen.concat(pickWeighted(pool.filter(function (q) { return chosen.indexOf(q) < 0; }), 30 - chosen.length));
    return shuffle(chosen);
  }
  views.exams = function () {
    if (EX.run) return examRun();
    if (EX.result) return examResult();
    return '<h1>Exams</h1><p class="lede">Exam mode: no hints, no topic labels, no feedback until you submit. Timed. After you submit you get a score breakdown and a weakness report.</p>' +
      '<div class="grid g2">' + EXAMS.map(function (e) {
        var hist = S.exams[e.id] || [];
        var last = hist[hist.length - 1];
        return '<div class="card exam"><h2>' + esc(e.name) + '</h2><p class="muted">' + esc(e.sub) + " · " + e.min + " min</p>" +
          (last ? "<p>Last score: <b>" + last.score + "/" + last.total + "</b> (" + Math.round(last.score / last.total * 100) + "%) on " + new Date(last.ts).toLocaleDateString() + "</p>" : "<p class='muted'>Not taken yet.</p>") +
          '<button class="btn" data-exam="' + e.id + '">' + (last ? "Retake" : "Start") + "</button></div>";
      }).join("") + "</div>" +
      '<p class="muted">Mock exams A and B use questions that never appear in Practice, so they test real transfer. Checkpoints 1–2 are also held out; checkpoint 3 is built fresh each time from what you\'ve missed.</p>';
  };
  function examRun() {
    var r = EX.run, left = Math.max(0, r.end - Date.now());
    var mm = Math.floor(left / 60000), ss = Math.floor(left % 60000 / 1000);
    return '<div class="exambar"><b>' + esc(r.meta.name) + '</b><span id="timer" class="num">' + mm + ":" + (ss < 10 ? "0" : "") + ss + '</span><span class="muted" id="answered">' + r.qs.filter(function (q) { return (r.picks[q.id] || []).length; }).length + "/" + r.qs.length + ' answered</span><button class="btn" id="exSubmit">Submit exam</button></div>' +
      '<div class="examqs">' + r.qs.map(function (q, i) { return renderQ(q, i, { order: r.orders[q.id], picks: r.picks[q.id] || [], locked: false, showFeedback: false, name: "ex-" + q.id, hideMeta: true }); }).join("") + "</div>" +
      '<div class="qbtns"><button class="btn big" id="exSubmit2">Submit exam</button><button class="btn ghost" id="exQuit">Abandon</button></div>' +
      '<div class="confirm" id="exConfirm" hidden><p id="exConfirmMsg"></p><button class="btn" id="exYes">Submit now</button><button class="btn ghost" id="exNo">Keep working</button></div>';
  }
  function tick() {
    if (!EX.run) { clearInterval(EX.timer); return; }
    var left = EX.run.end - Date.now(), el = $("#timer");
    if (left <= 0) { finishExam(); return; }
    if (el) { var mm = Math.floor(left / 60000), ss = Math.floor(left % 60000 / 1000); el.textContent = mm + ":" + (ss < 10 ? "0" : "") + ss; el.classList.toggle("low", left < 5 * 60000); }
  }
  function finishExam() {
    clearInterval(EX.timer);
    var r = EX.run; if (!r) return;
    $$(".examqs .q").forEach(function (div) { var id = div.dataset.qid; r.picks[id] = readPicks(div, "ex-" + id); });
    var res = { meta: r.meta, qs: r.qs, orders: r.orders, picks: r.picks, ok: {}, dur: Date.now() - r.start };
    var score = 0;
    r.qs.forEach(function (q) { var p = r.picks[q.id] || [], ok = sameSet(p, q.a); res.ok[q.id] = ok; if (ok) score++; recordAnswer(q, ok, p, r.meta.id); });
    res.score = score;
    (S.exams[r.meta.id] = S.exams[r.meta.id] || []).push({ ts: Date.now(), score: score, total: r.qs.length, dur: res.dur });
    save();
    EX.run = null; EX.result = res; route();
  }
  function breakdown(res, keyFn, labelFn) {
    var g = {};
    res.qs.forEach(function (q) { var k = keyFn(q); g[k] = g[k] || { n: 0, c: 0 }; g[k].n++; if (res.ok[q.id]) g[k].c++; });
    return Object.keys(g).map(function (k) { return { k: k, label: labelFn(k), n: g[k].n, c: g[k].c, acc: g[k].c / g[k].n }; });
  }
  function examResult() {
    var res = EX.result, tot = res.qs.length, p = res.score / tot;
    var byMod = breakdown(res, function (q) { return q.m; }, function (k) { return modTag(k) + " " + esc(modById[k].name); });
    var byTopic = breakdown(res, function (q) { return q.t; }, function (k) { return esc(topicById[k].title); }).sort(function (a, b) { return a.acc - b.acc; });
    var byLvl = breakdown(res, function (q) { return q.lvl; }, function (k) { return lvlBadge(+k); });
    var byType = breakdown(res, qType, function (k) { return esc(k); });
    var row = function (x) { return [x.label, x.c + "/" + x.n, '<span class="bar sm"><i style="width:' + Math.round(x.acc * 100) + '%"></i></span> ' + pct(x.acc)]; };
    var tiers = byTopic.filter(function (x) { return x.c < x.n; }).map(function (x) {
      var miss = x.n - x.c, tier = x.acc < 0.4 && miss >= 2 ? 1 : x.acc < 0.6 ? 2 : x.acc < 0.8 ? 3 : 4;
      if (miss === 1 && x.n === 1) tier = 3;
      return { x: x, tier: tier };
    }).sort(function (a, b) { return a.tier - b.tier; });
    var tierName = ["", "Critical weakness", "Major weakness", "Moderate weakness", "Minor weakness"];
    var weakRep = tiers.length ? '<ol class="weakrep">' + tiers.map(function (w) {
      return '<li class="tier' + w.tier + '"><b>' + tierName[w.tier] + ":</b> " + w.x.label + " (" + w.x.c + "/" + w.x.n + ') → <a href="#topic-' + w.x.k + '">re-study the topic</a>, answer its Active Recall prompts aloud, then practice it at Level 3.</li>';
    }).join("") + "</ol>" : "<p>No misses. Retake a different exam or switch to Level 3–4 practice.</p>";
    var mins = Math.round(res.dur / 60000);
    return '<h1>' + esc(res.meta.name) + ': results</h1><div class="grid g3"><div class="card stat"><span class="label">Score</span><span class="big">' + res.score + "<small>/" + tot + '</small></span><span class="muted">' + pct(p) + " · " + mins + ' min</span></div>' +
      '<div class="card stat"><span class="label">Verdict</span><span class="big sm">' + (p >= 0.9 ? "Exam ready" : p >= 0.75 ? "Close" : p >= 0.6 ? "Needs work" : "Rebuild") + '</span><span class="muted">' + (p >= 0.75 ? "Focus on the misses below." : "Use the weakness report before your next exam.") + "</span></div>" +
      '<div class="card stat"><span class="label">Next step</span><span class="muted">Open the <a href="#weak">error log</a> and tag why you missed each question. The tags show whether your problem is knowledge, vocabulary or misreading.</span></div></div>' +
      '<section class="card"><h2>Weakness report</h2>' + weakRep + "</section>" +
      '<div class="grid g2"><section class="card"><h2>By module</h2>' + table(["Module", "Score", "Accuracy"], byMod.map(row)) + "</section>" +
      '<section class="card"><h2>By question type</h2>' + table(["Type", "Score", "Accuracy"], byType.map(row)) + "<h3>By difficulty</h3>" + table(["Level", "Score", "Accuracy"], byLvl.map(row)) + "</section></div>" +
      '<section class="card"><h2>By topic</h2>' + table(["Topic", "Score", "Accuracy"], byTopic.map(row)) + "</section>" +
      '<section class="card"><h2>Answer review</h2><div class="chips"><button class="chip on" id="rvMiss">Show misses only</button><button class="chip" id="rvAllQ">Show all</button></div><div id="exreview">' + reviewList(res, true) + "</div></section>" +
      '<div class="qbtns"><button class="btn" id="exBack">Back to exams</button></div>';
  }
  function reviewList(res, missOnly) {
    return res.qs.map(function (q, i) { if (missOnly && res.ok[q.id]) return ""; return renderQ(q, i, { order: res.orders[q.id], picks: res.picks[q.id] || [], locked: true, showFeedback: true, name: "rv-" + q.id }); }).join("") || "<p>No misses 🎉</p>";
  }
  document.addEventListener("click", function (ev) {
    if (current !== "exams") return;
    var b = ev.target.closest("button"); if (!b) return;
    if (b.dataset.exam) {
      var meta = EXAMS.filter(function (e) { return e.id === b.dataset.exam; })[0];
      var qs = examQuestions(meta.id), orders = {};
      qs.forEach(function (q) { orders[q.id] = orderFor(q); });
      EX.result = null; EX.run = { meta: meta, qs: qs, orders: orders, picks: {}, start: Date.now(), end: Date.now() + meta.min * 60000 };
      clearInterval(EX.timer); EX.timer = setInterval(tick, 1000); route();
    }
    else if (b.id === "exSubmit" || b.id === "exSubmit2") {
      var r = EX.run; $$(".examqs .q").forEach(function (div) { r.picks[div.dataset.qid] = readPicks(div, "ex-" + div.dataset.qid); });
      var un = r.qs.filter(function (q) { return !(r.picks[q.id] || []).length; }).length;
      var box = $("#exConfirm"); $("#exConfirmMsg").textContent = un ? un + " question" + (un > 1 ? "s are" : " is") + " unanswered. Submit anyway?" : "Submit your exam for grading?";
      box.hidden = false; box.scrollIntoView({ block: "center" });
    }
    else if (b.id === "exYes") finishExam();
    else if (b.id === "exNo") $("#exConfirm").hidden = true;
    else if (b.id === "exQuit") { clearInterval(EX.timer); EX.run = null; route(); }
    else if (b.id === "exBack") { EX.result = null; route(); }
    else if (b.id === "rvMiss" || b.id === "rvAllQ") { $("#exreview").innerHTML = reviewList(EX.result, b.id === "rvMiss"); $("#rvMiss").classList.toggle("on", b.id === "rvMiss"); $("#rvAllQ").classList.toggle("on", b.id === "rvAllQ"); }
  });
  document.addEventListener("change", function (ev) {
    if (current === "exams" && EX.run && ev.target.name && ev.target.name.indexOf("ex-") === 0) {
      var id = ev.target.name.slice(3), div = ev.target.closest(".q");
      EX.run.picks[id] = readPicks(div, ev.target.name);
      var a = $("#answered"); if (a) a.textContent = EX.run.qs.filter(function (q) { return (EX.run.picks[q.id] || []).length; }).length + "/" + EX.run.qs.length + " answered";
    }
  });

  /* ------------------------------------------------------------ WEAK AREAS */
  var MISTAKE_TYPES = ["Knowledge gap", "Misread question", "Vocabulary confusion", "Mixed up two concepts", "Failed application", "Forgot detail", "Overthinking", "Changed correct answer", "Other"];
  views.weak = function () {
    var conf = SG.topics.map(function (t) {
      var s = topicStats(t.id), c = (S.topics[t.id] || {}).conf, pr = topicPriority(t);
      var flag = c && s.acc != null && c >= 4 && s.acc < 0.6 ? ' <span class="pill pr">overconfident</span>' : c && s.acc != null && c <= 2 && s.acc >= 0.8 ? ' <span class="pill pg">underconfident</span>' : "";
      return { t: t, row: ['<a href="#topic-' + t.id + '">' + modTag(t.m) + " " + esc(t.title) + "</a>", c ? c + "/5" : "—", pct(s.acc) + ' <span class="muted">(' + s.c + "/" + s.n + ")</span>" + flag, '<span class="prio p' + pr + '">' + pr + "</span>"], pr: pr, acc: s.acc };
    }).sort(function (a, b) { var o = { High: 0, Medium: 1, Low: 2 }; return o[a.pr] - o[b.pr] || (a.acc == null ? 1 : 0) - (b.acc == null ? 1 : 0) || (a.acc || 0) - (b.acc || 0); });
    var typeCounts = {}; S.errors.forEach(function (e) { if (e.type) typeCounts[e.type] = (typeCounts[e.type] || 0) + 1; });
    var tc = Object.keys(typeCounts).sort(function (a, b) { return typeCounts[b] - typeCounts[a]; });
    var topicMiss = {}; S.errors.forEach(function (e) { var q = qById[e.q]; if (q) topicMiss[q.t] = (topicMiss[q.t] || 0) + 1; });
    var tm = Object.keys(topicMiss).sort(function (a, b) { return topicMiss[b] - topicMiss[a]; }).slice(0, 6);
    var rec = tm.length ? "<ol>" + tm.map(function (tid) { return '<li><a href="#topic-' + tid + '">' + esc(topicById[tid].title) + "</a>: " + topicMiss[tid] + " miss" + (topicMiss[tid] > 1 ? "es" : "") + ". Re-read the ⚠️ boxes, then practice this topic at Level 3.</li>"; }).join("") + "</ol>" : "<p class='muted'>Nothing yet. Missed questions land here automatically.</p>";
    var log = S.errors.length ? '<div class="tw"><table class="t elog"><thead><tr><th>Topic</th><th>Question</th><th>My answer</th><th>Correct idea</th><th>Why I missed it</th></tr></thead><tbody>' + S.errors.slice(0, 120).map(function (e, i) {
      var q = qById[e.q]; if (!q) return "";
      return "<tr><td>" + modTag(q.m) + " " + esc(topicById[q.t].title) + "</td><td>" + esc(strip(q.q)) + "</td><td>" + esc(e.pick) + "</td><td>" + q.a.map(function (a) { return q.o[a]; }).join("; ") + '<br><span class="muted">' + q.why + '</span></td><td><select data-etype="' + i + '" aria-label="Mistake type"><option value="">Tag…</option>' + MISTAKE_TYPES.map(function (m) { return "<option" + (e.type === m ? " selected" : "") + ">" + m + "</option>"; }).join("") + "</select></td></tr>";
    }).join("") + "</tbody></table></div>" : "<p class='muted'>No errors logged yet.</p>";
    return '<h1>Weak areas</h1><p class="lede">Your actual performance, not just how you feel. Priority is driven mainly by accuracy; the confidence you set on each topic page is shown beside it so you can spot overconfidence.</p>' +
      '<div class="grid g2"><section class="card"><h2>Recommended review</h2>' + rec + '</section><section class="card"><h2>Mistake types</h2>' +
      (tc.length ? table(["Type", "Count"], tc.map(function (k) { return [esc(k), typeCounts[k]]; })) : "<p class='muted'>Tag errors below to see which kind of mistake you make most.</p>") + "</section></div>" +
      '<section class="card"><h2>Confidence tracker</h2>' + table(["Topic", "Confidence", "Accuracy", "Priority"], conf.map(function (x) { return x.row; })) + "</section>" +
      '<section class="card"><h2>My error log</h2>' + log + (S.errors.length ? '<button class="btn ghost" id="redoErr">Practice my missed questions</button>' : "") + "</section>";
  };
  document.addEventListener("change", function (ev) { if (ev.target.dataset && ev.target.dataset.etype != null) { S.errors[+ev.target.dataset.etype].type = ev.target.value; save(); } });
  document.addEventListener("click", function (ev) {
    if (ev.target.id !== "redoErr") return;
    var ids = []; S.errors.forEach(function (e) { if (ids.indexOf(e.q) < 0 && qById[e.q] && (qById[e.q].set === "P" || qById[e.q].set === "C1" || qById[e.q].set === "C2")) ids.push(e.q); });
    var qs = shuffle(ids.map(function (id) { return qById[id]; })).slice(0, 20);
    if (!qs.length) return;
    PR.run = { qs: qs, i: 0, order: orderFor(qs[0]), answered: false, picks: [], log: [] };
    if (location.hash === "#practice") route(); else location.hash = "#practice";
  });

  /* ------------------------------------------------------------ CRAM */
  views.cram = function () {
    var misses = {}; S.errors.forEach(function (e) { var q = qById[e.q]; if (q) misses[q.c] = (misses[q.c] || 0) + 1; });
    var mk = Object.keys(misses).sort(function (a, b) { return misses[b] - misses[a]; }).slice(0, 10);
    return '<h1>Final cram sheet</h1><p class="lede">Only the highest-value facts. Read it twice on Day 4 and once on exam morning. Cover each bullet and recite it before reading.</p>' +
      (mk.length ? '<section class="card callout trap"><h2>Things you keep missing</h2><ul>' + mk.map(function (c) { return "<li>" + esc(c) + " (" + misses[c] + "×)</li>"; }).join("") + "</ul></section>" : "") +
      '<div class="cram">' + SG.cram.map(function (s) { return '<section class="card"><h2>' + s.h + "</h2><ul>" + s.items.map(function (i) { return "<li>" + i + "</li>"; }).join("") + "</ul></section>"; }).join("") + "</div>" +
      '<section class="card"><h2>Professor patterns to remember</h2><ul>' + SG.analysis.distractors.map(function (d) { return "<li><b>" + esc(d[0]) + ":</b> " + esc(d[2]) + "</li>"; }).join("") + "</ul></section>" +
      '<section class="card" id="final"><h2>Final night checklist</h2><ul class="fcheck">' + SG.finalCheck.map(function (c, i) { return '<li><label><input type="checkbox" data-final="' + i + '"' + (S.finalCheck[i] ? " checked" : "") + "> " + c + "</label></li>"; }).join("") + "</ul></section>";
  };
  document.addEventListener("change", function (ev) { if (ev.target.dataset && ev.target.dataset.final != null) { S.finalCheck[ev.target.dataset.final] = ev.target.checked; save(); } });

  /* ------------------------------------------------------------ CHECKLIST */
  var CL = { mod: "all", status: "all" };
  views.checklist = function () {
    var cc = checkCounts();
    var items = SG.checklist.filter(function (it) { return (CL.mod === "all" || it[1] === CL.mod) && (CL.status === "all" || String(S.check[it[0]] || 0) === CL.status); });
    return '<h1>Master checklist</h1><p class="lede">Every focus line and every term from your professor\'s study guide, mapped to where it appears in your materials. Tap a status to cycle 🔴 → 🟡 → 🟢. Only mark 🟢 when you can explain it without notes.</p>' +
      '<p><b>' + cc.g + "</b> 🟢 · <b>" + cc.y + "</b> 🟡 · <b>" + (cc.total - cc.g - cc.y) + "</b> 🔴 of " + cc.total + "</p>" +
      '<div class="chips">' + [["all", "All"]].concat(SG.modules.map(function (m) { return [m.id, m.short]; })).map(function (c) { return '<button class="chip' + (CL.mod === c[0] ? " on" : "") + '" data-cm="' + c[0] + '">' + c[1] + "</button>"; }).join("") + "</div>" +
      '<div class="chips">' + [["all", "Any status"], ["0", "🔴"], ["1", "🟡"], ["2", "🟢"]].map(function (c) { return '<button class="chip' + (CL.status === c[0] ? " on" : "") + '" data-cs="' + c[0] + '">' + c[1] + "</button>"; }).join("") + "</div>" +
      '<div class="tw"><table class="t clist"><thead><tr><th>Status</th><th>Item</th><th>Module</th><th>Where in your materials</th></tr></thead><tbody>' + items.map(function (it) {
        return '<tr><td><button class="stbtn" data-ck="' + it[0] + '">' + statusPill(S.check[it[0]]) + '</button></td><td><a href="#' + (it[4] === "mx" ? "matrices" : "topic-" + it[4]) + '">' + esc(it[2]) + "</a></td><td>" + modTag(it[1]) + "</td><td>" + esc(it[3]) + "</td></tr>";
      }).join("") + "</tbody></table></div>";
  };
  document.addEventListener("click", function (ev) {
    if (current !== "checklist") return;
    var b = ev.target.closest("button"); if (!b) return;
    if (b.dataset.cm) { CL.mod = b.dataset.cm; route(); }
    else if (b.dataset.cs) { CL.status = b.dataset.cs; route(); }
    else if (b.dataset.ck) { var id = b.dataset.ck; S.check[id] = ((S.check[id] || 0) + 1) % 3; save(); b.innerHTML = statusPill(S.check[id]); }
  });

  /* ------------------------------------------------------------ boot */
  nav();
  $("#sync").innerHTML = syncLabel();
  route();
})();
