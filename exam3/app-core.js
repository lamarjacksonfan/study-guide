/* Exam 3 app core: state, persistence, mastery model, router, dashboard, exam map. */
(function () {
  "use strict";
  var SG = window.SG;
  var APP = window.APP = { views: {} };
  var $ = APP.$ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = APP.$$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = APP.esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  APP.strip = function (s) { return String(s).replace(/<[^>]+>/g, ""); };
  APP.LET = "ABCDEFGH";
  var DAY = 86400000;

  APP.modById = {}; SG.modules.forEach(function (m) { APP.modById[m.id] = m; });
  APP.topicById = {}; SG.topics.forEach(function (t) { APP.topicById[t.id] = t; });
  APP.qById = {}; SG.questions.forEach(function (q) { APP.qById[q.id] = q; });
  SG.cards = SG.cards.map(function (c, i) { return { i: i, m: c[0], t: c[1], f: c[2], b: c[3], k: c[4] }; });
  // Deterministic option shuffle (seeded by question id) so correct answers aren't clustered in one
  // position. Stable across sessions, so saved picks stay valid. Transcribed class sets keep their
  // original order, as do items whose options refer to each other ("all of these", True/False).
  function seeded(str) { var h = 2166136261; for (var i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); } return function () { h ^= h << 13; h ^= h >>> 17; h ^= h << 5; return ((h >>> 0) % 100000) / 100000; }; }
  function permute(id, opts) {
    if (opts.some(function (o) { return /(all|none) of (these|the above)|other responses|^(True|False)$/i.test(APP.strip(o)); })) return null;
    var r = seeded(id), idx = opts.map(function (_, i) { return i; });
    for (var i = idx.length - 1; i > 0; i--) { var j = Math.floor(r() * (i + 1)); var t = idx[i]; idx[i] = idx[j]; idx[j] = t; }
    return idx; // idx[newPos] = oldPos
  }
  SG.questions.forEach(function (q) {
    if (q.set === "K" || q.set === "C" || q.set === "W") return;
    var p = permute(q.id, q.o); if (!p) return;
    var o = q.o, w = q.w, a = q.a;
    q.o = p.map(function (k) { return o[k]; }); q.w = p.map(function (k) { return w[k]; });
    q.a = a.map(function (k) { return p.indexOf(k); }).sort();
  });
  SG.sg.forEach(function (s) {
    var p = permute("sv" + s.n, s.v[1]); if (!p) return;
    var o = s.v[1], ans = s.v[2];
    s.v = [s.v[0], p.map(function (k) { return o[k]; }), p.indexOf(ans), s.v[3]];
  });
  // Professor-question variations become questions too (set "SV"), so they count toward mastery.
  SG.sg.forEach(function (s) {
    var q = { id: "sv" + s.n, set: "SV", m: APP.topicById[s.t].m, t: s.t, lvl: 2, q: s.v[0], o: s.v[1], a: [s.v[2]], why: s.v[3], w: s.v[1].map(function () { return ""; }), c: s.c, trap: s.trap, fig: "" };
    SG.questions.push(q); APP.qById[q.id] = q;
  });
  APP.SETS = { P: "Original practice", K: "Kahoot (class)", C: "Canvas (class)", W: "Woolink (class)", SV: "Professor Q variation", XA: "Mock Exam A", XB: "Mock Exam B" };

  /* ------------------------------------------------------------ state */
  var LS_KEY = "bio2-exam3-state-v1";
  function blank() {
    return { v: 1, updated: 0, settings: { examDate: SG.examDefault }, answers: {}, sg: {}, cards: {}, topics: {}, errors: [], exams: {}, tasks: {}, daily: {}, feyn: {} };
  }
  var S = APP.S = blank();
  try { var raw = localStorage.getItem(LS_KEY); if (raw) S = APP.S = Object.assign(blank(), JSON.parse(raw)); } catch (e) {}

  var dbDoc = null, saveTimer = null, syncState = "local";
  APP.save = function () {
    S.updated = Date.now();
    try { localStorage.setItem(LS_KEY, JSON.stringify(S)); } catch (e) {}
    clearTimeout(saveTimer); saveTimer = setTimeout(pushDb, 1500);
  };
  function pushDb() {
    if (!dbDoc) return;
    dbDoc.set(JSON.parse(JSON.stringify(S))).then(function () { setSync("saved"); }, function () { setSync("error"); });
  }
  function setSync(s) { syncState = s; var el = $("#sync"); if (el) el.textContent = { local: "Progress saved in this browser", saved: "Progress synced to your account", error: "Couldn't sync; saved in this browser" }[s]; }
  APP.syncState = function () { return syncState; };
  function connectDb() {
    if (!(window.claude && window.claude.use)) return;
    Promise.all([window.claude.use("db"), window.claude.use("user")]).then(function (r) {
      var db = r[0], user = r[1];
      if (!db || !user) return;
      return user.id().then(function (uid) {
        if (!uid) return;
        dbDoc = db.doc("progress/" + uid);
        var timer = setTimeout(function () { setSync("error"); }, 10000);
        return dbDoc.get().then(function (snap) {
          clearTimeout(timer);
          var remote = snap && snap.exists ? snap.data() : null;
          if (remote && (remote.updated || 0) > (S.updated || 0)) {
            S = APP.S = Object.assign(blank(), JSON.parse(JSON.stringify(remote)));
            try { localStorage.setItem(LS_KEY, JSON.stringify(S)); } catch (e) {}
            APP.route();
          } else if (S.updated) { pushDb(); }
          setSync("saved");
        }, function () { clearTimeout(timer); setSync("error"); });
      });
    }).catch(function () {});
  }

  /* ------------------------------------------------------------ recording */
  function today() { var d = new Date(); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }
  APP.today = today;
  APP.record = function (q, ok, picks, ctx) {
    var a = S.answers[q.id] || { n: 0, c: 0 };
    a.n += 1; if (ok) a.c += 1; a.last = ok; a.ts = Date.now();
    S.answers[q.id] = a;
    var d = S.daily[today()] || { n: 0, c: 0 }; d.n++; if (ok) d.c++; S.daily[today()] = d;
    var err = null;
    if (!ok) {
      err = { id: Date.now() + "-" + q.id, q: q.id, ts: Date.now(), pick: picks.map(function (p) { return APP.strip(q.o[p]); }).join(" + ") || "(no answer)", type: APP.suggestType(q), ctx: ctx || "", auto: true };
      S.errors.unshift(err);
      if (S.errors.length > 400) S.errors.length = 400;
    }
    APP.save();
    return err;
  };
  APP.suggestType = function (q) {
    if (q.fig) return "Graph interpretation error";
    if (/NOT|EXCEPT/.test(q.q)) return "Misreading";
    if (q.lvl === 1) return "Vocabulary confusion";
    if (q.lvl >= 3) return "Incorrect application";
    return "Conceptual misunderstanding";
  };

  /* ------------------------------------------------------------ mastery model */
  // Mastery comes from performance only. Reading a lesson never raises it.
  APP.topicStats = function (tid) {
    var total = 0, seen = 0, lastOk = 0, n = 0, c = 0, hiOk = 0;
    SG.questions.forEach(function (q) {
      if (q.t !== tid) return; total++;
      var a = S.answers[q.id]; if (!a) return;
      seen++; n += a.n; c += a.c; if (a.last) { lastOk++; if (q.lvl >= 3) hiOk++; }
    });
    SG.sg.forEach(function (s) { if (s.t !== tid) return; var r = S.sg[s.n]; if (r && r.st) { seen++; total++; if (r.st === "right") lastOk++; n++; if (r.st === "right") c++; } else total++; });
    var acc = seen ? lastOk / seen : null;
    var mastery = seen ? Math.round(100 * acc * Math.min(1, seen / 6)) : null;
    var label = mastery == null ? "Not tested" : (mastery >= 80 && seen >= 6 && hiOk >= 1) ? "Mastered" : mastery >= 50 ? "Developing" : "Weak";
    return { total: total, seen: seen, n: n, c: c, acc: acc, mastery: mastery, label: label, hiOk: hiOk };
  };
  APP.moduleStats = function (mid) {
    var ts = SG.topics.filter(function (t) { return t.m === mid; }).map(function (t) { return APP.topicStats(t.id); });
    var seen = 0, ok = 0, tot = 0, ms = [];
    ts.forEach(function (s) { seen += s.seen; tot += s.total; if (s.acc != null) ok += s.acc * s.seen; if (s.mastery != null) ms.push(s.mastery); });
    return { seen: seen, total: tot, acc: seen ? ok / seen : null, mastery: ms.length ? Math.round(ms.reduce(function (a, b) { return a + b; }, 0) / ts.length) : null, tested: ms.length, topics: ts.length };
  };
  APP.pct = function (x) { return x == null ? "—" : Math.round(x * 100) + "%"; };
  APP.masteryPill = function (st) {
    var cls = { "Not tested": "", Weak: "pr", Developing: "py", Mastered: "pg" }[st.label];
    return '<span class="pill ' + cls + '">' + st.label + (st.mastery != null ? " · " + st.mastery + "%" : "") + "</span>";
  };
  APP.dotClass = function (st) { return st.mastery == null ? "" : st.label === "Mastered" ? "d2" : st.label === "Developing" ? "d1" : "d0"; };
  APP.weakest = function (k) {
    return SG.topics.map(function (t) { return { t: t, s: APP.topicStats(t.id) }; })
      .filter(function (x) { return x.s.seen > 0 && x.s.label !== "Mastered"; })
      .sort(function (a, b) { return a.s.mastery - b.s.mastery || b.t.heat - a.t.heat; }).slice(0, k || 5);
  };
  APP.sgCount = function () { var a = 0, r = 0, w = 0; SG.sg.forEach(function (s) { var x = S.sg[s.n]; if (x && x.st) { a++; if (x.st === "right") r++; else w++; } }); return { done: a, right: r, wrong: w }; };
  APP.pool = function () { return SG.questions.filter(function (q) { return q.set !== "XA" && q.set !== "XB"; }); };

  /* ------------------------------------------------------------ helpers */
  APP.modTag = function (mid) { var m = APP.modById[mid]; return '<span class="mtag mtag-' + mid + '">' + (m ? m.short : "ALL") + "</span>"; };
  APP.lvlBadge = function (l) { return '<span class="lvl lvl' + l + '">' + ["", "L1 Recall", "L2 Understand", "L3 Apply", "L4 Reason"][l] + "</span>"; };
  APP.shuffle = function (a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; };
  APP.table = function (head, rows, cls) {
    return '<div class="tw"><table class="t ' + (cls || "") + '"><thead><tr>' + head.map(function (h) { return "<th>" + h + "</th>"; }).join("") + "</tr></thead><tbody>" +
      rows.map(function (r) { return "<tr>" + r.map(function (c, i) { return (i === 0 ? "<th>" : "<td>") + c + (i === 0 ? "</th>" : "</td>"); }).join("") + "</tr>"; }).join("") + "</tbody></table></div>";
  };
  APP.toast = function (msg) { var el = $("#toast"); el.textContent = msg; el.hidden = false; clearTimeout(APP._tt); APP._tt = setTimeout(function () { el.hidden = true; }, 1800); };
  APP.daysLeft = function () {
    var ex = new Date((S.settings.examDate || SG.examDefault) + "T00:00:00"), now = new Date(); now.setHours(0, 0, 0, 0);
    return Math.round((ex - now) / DAY);
  };
  APP.bar = function (p) { return '<span class="bar"><i style="width:' + Math.max(0, Math.min(100, p || 0)) + '%"></i></span>'; };

  /* ------------------------------------------------------------ router */
  var NAV = [["home", "Dashboard"], ["learn", "Learn"], ["review", "Professor 64"], ["cards", "Flashcards"], ["practice", "Practice"], ["visual", "Visual lab"], ["exams", "Mock exams"], ["weak", "Weak areas"], ["tutor", "Tutor"], ["tse", "Sixth Extinction"], ["cram", "Cram sheet"], ["map", "Exam map"]];
  APP.route = function () {
    var h = (location.hash || "#home").slice(1), v = h.split("-")[0];
    if (!APP.views[v]) { v = "home"; h = "home"; }
    $$("#nav a").forEach(function (a) { a.classList.toggle("on", a.getAttribute("data-v") === v); });
    var main = $("#main"); APP.cleanup && APP.cleanup(); APP.cleanup = null;
    main.innerHTML = APP.views[v](h);
    if (APP._after) { var f = APP._after; APP._after = null; f(); }
    if (!APP._keepScroll) window.scrollTo(0, 0); APP._keepScroll = false;
  };
  APP.after = function (fn) { APP._after = fn; };
  APP.rerender = function () { APP._keepScroll = true; APP.route(); };
  APP.start = function () {
    $("#nav").innerHTML = NAV.map(function (n) { return '<a href="#' + n[0] + '" data-v="' + n[0] + '">' + n[1] + "</a>"; }).join("");
    window.addEventListener("hashchange", APP.route);
    APP.route(); connectDb();
  };

  /* ------------------------------------------------------------ DASHBOARD */
  APP.views.home = function () {
    var dl = APP.daysLeft(), sgc = APP.sgCount(), pool = APP.pool();
    var attempted = pool.filter(function (q) { return S.answers[q.id]; }).length;
    var nAns = 0, nOk = 0; Object.keys(S.answers).forEach(function (k) { nAns += S.answers[k].n; nOk += S.answers[k].c; });
    var cardsSeen = Object.keys(S.cards).length, lessons = Object.keys(S.topics).filter(function (k) { return S.topics[k].read; }).length;
    var todayKey = today(), plan = SG.plan, idx = -1;
    plan.forEach(function (d, i) { if (d.date === todayKey) idx = i; });
    if (idx < 0) idx = todayKey < plan[0].date ? 0 : plan.length - 1;
    var rec = APP.recommend(idx);
    var weak = APP.weakest(5);
    var h = '<div class="hero"><div><p class="eyebrow label">Biology 1442 · Unit II: Ecology</p><h1>Exam 3 Mastery</h1><p class="lede">Modules 11–14: biosphere, populations, communities & behavior, ecosystems & conservation. Learn → practice → fix weak spots → review.</p></div>' +
      '<div class="countdown"><label class="lbl" for="exd">Exam date</label><span class="big">' + (dl > 0 ? dl + " days" : dl === 0 ? "Today" : "Done") + '</span><input type="date" id="exd" value="' + esc(S.settings.examDate) + '"><span class="small muted">' + esc(SG.examLabel) + "</span></div></div>";
    h += '<div class="card" style="border:2px solid var(--accent)"><span class="label">Recommended next</span><p style="font-size:1.1rem;margin:0 0 8px"><b>' + rec.text + '</b></p><a class="btn" href="#' + rec.href + '">' + rec.cta + "</a> <span class=\"small muted\">" + rec.why + "</span></div>";
    h += '<div class="grid g4">' +
      stat("Professor questions", sgc.done + "<small>/64</small>", sgc.done ? sgc.right + " marked right, " + sgc.wrong + " wrong" : "None attempted yet", sgc.done / 64 * 100) +
      stat("Practice questions tried", attempted + "<small>/" + pool.length + "</small>", nAns ? "Overall accuracy " + APP.pct(nOk / nAns) + " over " + nAns + " answers" : "No answers yet", attempted / pool.length * 100) +
      stat("Flashcards reviewed", cardsSeen + "<small>/" + SG.cards.length + "</small>", "", cardsSeen / SG.cards.length * 100) +
      stat("Lessons opened", lessons + "<small>/" + SG.topics.length + "</small>", "Opening a lesson doesn't count toward mastery", lessons / SG.topics.length * 100) + "</div>";
    h += '<div class="grid g2"><div class="card"><h2>Mastery by module</h2><p class="small muted">Estimated from your answers only: latest-attempt accuracy, scaled down until a topic has at least 6 answered questions.</p>' +
      SG.modules.map(function (m) { var s = APP.moduleStats(m.id); return '<div class="mbar"><span>' + APP.modTag(m.id) + " " + esc(m.name) + '</span>' + APP.bar(s.mastery || 0) + '<span class="num">' + (s.mastery == null ? "—" : s.mastery + "%") + "</span></div>"; }).join("") +
      '<p class="small muted">' + SG.modules.map(function (m) { var s = APP.moduleStats(m.id); return m.short + ": " + s.tested + "/" + s.topics + " topics tested"; }).join(" · ") + "</p></div>";
    h += '<div class="card"><h2>Weakest topics</h2>' + (weak.length ? '<ul class="weaklist">' + weak.map(function (x) { return '<li><a href="#learn-' + x.t.id + '">' + esc(x.t.title) + "</a>" + APP.masteryPill(x.s) + "</li>"; }).join("") + '</ul><p><a class="btn sm" href="#tutor-weak">Weakness review quiz</a></p>' : '<p class="muted">Nothing to show yet. Weak topics appear here once you answer questions. Start with today\'s plan.</p>') + "</div></div>";
    // history
    var days = Object.keys(S.daily).sort();
    if (days.length) {
      h += '<div class="card"><h2>Accuracy by day</h2><div class="tw"><table class="t"><thead><tr><th>Day</th><th>Answers</th><th>Correct</th><th>Accuracy</th></tr></thead><tbody>' +
        days.slice(-10).map(function (d) { var x = S.daily[d]; return "<tr><th>" + d + '</th><td class="num">' + x.n + '</td><td class="num">' + x.c + '</td><td style="min-width:140px">' + APP.bar(x.c / x.n * 100) + ' <span class="num small">' + APP.pct(x.c / x.n) + "</span></td></tr>"; }).join("") + "</tbody></table></div></div>";
    }
    h += '<h2 style="margin-top:6px">Study plan · Nov 23 → Dec 1</h2><p class="small muted">Tick tasks as you finish them. Each day mixes new material with retrieval of earlier modules. Module 14 quiz is due Sun Nov 29, 11:59 pm.</p><div class="days">' +
      plan.map(function (d, i) {
        var done = d.tasks.filter(function (t, j) { return S.tasks[d.date + "-" + j]; }).length;
        return '<div class="day' + (i === idx && d.date === todayKey ? " now" : d.date < todayKey ? " past" : "") + '"><div class="row" style="justify-content:space-between"><b>' + new Date(d.date + "T12:00:00").toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" }) + "</b>" + (d.focus !== "all" ? APP.modTag(d.focus) : '<span class="mtag mtag-all">MIXED</span>') + '</div><p style="margin:4px 0 6px;font-weight:700">' + esc(d.title) + ' <span class="small muted num">' + done + "/" + d.tasks.length + '</span></p><ul class="tasks">' +
          d.tasks.map(function (t, j) { var id = d.date + "-" + j; return '<li><input type="checkbox" id="tk' + id + '" data-task="' + id + '"' + (S.tasks[id] ? " checked" : "") + '><label for="tk' + id + '">' + esc(t[0]) + "</label>" + (t[1] ? '<a href="#' + t[1] + '">go</a>' : "") + "</li>"; }).join("") + "</ul></div>";
      }).join("") + "</div>";
    h += '<div class="card"><h2>Save or move your progress</h2><p class="small">Progress saves automatically ' + (syncState === "saved" ? "to your account and this browser." : "in this browser. If account sync is available it switches on by itself.") + ' To move it to another device, copy the export code and paste it there.</p><div class="row"><button class="btn sm ghost" id="exp">Copy export code</button><button class="btn sm ghost" id="impb">Import a code</button><button class="btn sm ghost" id="rst">Reset all progress</button></div><div id="impbox" hidden><label class="lbl" for="impt">Paste export code</label><textarea id="impt"></textarea><div class="row" style="margin-top:6px"><button class="btn sm" id="impgo">Import</button></div></div><div id="rstbox" hidden class="confirm" style="margin-top:8px"><p>Erase every answer, mark and checkbox? This can\'t be undone.</p><button class="btn sm bad" id="rstyes">Erase progress</button><button class="btn sm ghost" id="rstno">Keep it</button></div></div>';
    APP.after(function () {
      $("#exd").addEventListener("change", function (e) { S.settings.examDate = e.target.value || SG.examDefault; APP.save(); APP.rerender(); });
      $$("[data-task]").forEach(function (c) { c.addEventListener("change", function () { S.tasks[c.getAttribute("data-task")] = c.checked; APP.save(); }); });
      $("#exp").addEventListener("click", function () {
        var code = btoa(unescape(encodeURIComponent(JSON.stringify(S))));
        var done = function () { APP.toast("Export code copied"); };
        if (navigator.clipboard) navigator.clipboard.writeText(code).then(done, function () { showCode(code); }); else showCode(code);
      });
      function showCode(code) { $("#impbox").hidden = false; $("#impt").value = code; $("#impt").select(); APP.toast("Copy the selected code"); }
      $("#impb").addEventListener("click", function () { $("#impbox").hidden = false; $("#impt").value = ""; $("#impt").focus(); });
      $("#impgo").addEventListener("click", function () {
        try { var o = JSON.parse(decodeURIComponent(escape(atob($("#impt").value.trim())))); if (!o || !o.answers) throw 0; S = APP.S = Object.assign(blank(), o); APP.save(); APP.toast("Progress imported"); APP.rerender(); }
        catch (e) { APP.toast("That code isn't a valid export. Copy it again in full."); }
      });
      $("#rst").addEventListener("click", function () { $("#rstbox").hidden = false; });
      $("#rstno").addEventListener("click", function () { $("#rstbox").hidden = true; });
      $("#rstyes").addEventListener("click", function () { S = APP.S = blank(); S.updated = Date.now(); APP.save(); pushDb(); APP.toast("Progress erased"); APP.rerender(); });
    });
    return h;
  };
  function stat(label, big, sub, p) { return '<div class="card stat"><span class="label">' + label + '</span><p class="big">' + big + "</p>" + APP.bar(p) + (sub ? '<p class="small muted" style="margin:6px 0 0">' + sub + "</p>" : "") + "</div>"; }
  APP.recommend = function (idx) {
    var d = SG.plan[idx];
    for (var j = 0; j < d.tasks.length; j++) if (!S.tasks[d.date + "-" + j] && d.tasks[j][1]) return { text: d.tasks[j][0], href: d.tasks[j][1], cta: "Start", why: "Next unchecked task in today's plan (" + d.title + ")." };
    var w = APP.weakest(1)[0];
    if (w) return { text: "Re-learn and re-test: " + w.t.title, href: "learn-" + w.t.id, cta: "Open lesson", why: "Your lowest-scoring topic so far." };
    var un = SG.sg.filter(function (s) { return !(S.sg[s.n] && S.sg[s.n].st); });
    if (un.length) return { text: un.length + " professor questions still unanswered", href: "review", cta: "Continue", why: "Today's tasks are done." };
    return { text: "Take a timed mock exam", href: "exams", cta: "Go", why: "Everything else is done." };
  };

  /* ------------------------------------------------------------ EXAM MAP */
  APP.views.map = function () {
    var h = '<h1>Exam map</h1><p class="lede">What was analyzed, what the exam covers, and where every professor question and key term lives in this app.</p>';
    h += '<div class="card"><h2>Exam scope</h2><p>' + esc(SG.examLabel) + ". Modules 11–14 (Unit II: Ecology). Exam length and module weighting weren't in your files, so mock exams assume equal weighting and 40 questions in 50 minutes.</p>" +
      APP.table(["Module", "Lecture file", "Assigned reading"], SG.modules.map(function (m) { return [APP.modTag(m.id) + " " + esc(m.name), esc(m.lecture), esc(m.reading)]; })) + "</div>";
    h += '<div class="card"><h2>Every uploaded file</h2>' + APP.table(["File", "Size", "What it contains", "Limits found"], SG.inventory.map(function (r) { return [esc(r[0]), esc(r[1]), esc(r[2]), esc(r[3])]; })) + "</div>";
    h += '<div class="card"><h2>Readings: supplied or only listed?</h2><p class="small">No textbook or <i>Sixth Extinction</i> text was uploaded; the schedule screenshot only lists chapters. Lessons are built from your lectures. Anything added from general ecology knowledge is marked ⚑.</p>' + APP.table(["Reading", "Module", "Text supplied?", "What the app uses instead"], SG.readings.map(function (r) { return [esc(r[0]), r[1].split(" ").map(APP.modTag).join(" "), '<span class="pill pr">' + r[2] + "</span>", esc(r[3])]; })) + "</div>";
    h += '<div class="card"><h2>Unit 3 key terms (all 10)</h2>' + APP.table(["Term", "Module", "Meaning", "Lesson"], SG.keyTerms.map(function (k) { return [esc(k[0]), APP.modTag(k[1]), esc(k[3]), '<a href="#learn-' + k[2] + '">' + esc(APP.topicById[k[2]].title) + "</a>"]; })) + "</div>";
    h += '<h2>Content map by module</h2><div class="grid g2">' + SG.modules.map(function (m) {
      var c = SG.contentMap[m.id], ts = SG.topics.filter(function (t) { return t.m === m.id; });
      return '<div class="card"><h3 style="margin-top:0">' + APP.modTag(m.id) + " " + esc(m.name) + '</h3><p class="small"><b>Lessons:</b> ' + ts.map(function (t) { return '<a href="#learn-' + t.id + '">' + esc(t.title) + "</a>"; }).join(" · ") + "</p>" +
        "<p class=\"label\">Memorize</p><ul class=\"small\">" + c.memorize.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul><p class=\"label\">Understand</p><ul class=\"small\">" + c.understand.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul><p class=\"label\">Apply</p><ul class=\"small\">" + c.apply.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul></div>";
    }).join("") + "</div>";
    var cnt = {}; SG.sg.forEach(function (s) { var m = APP.topicById[s.t].m; cnt[m] = (cnt[m] || 0) + 1; });
    h += '<div class="card"><h2>The 64 professor questions → lessons</h2><p class="small">By module: ' + SG.modules.map(function (m) { return m.short + " " + (cnt[m.id] || 0); }).join(" · ") + '. Flags: <span class="pill py">figure</span> refers to a missing figure, <span class="pill py">choices</span> depends on choices not given, <span class="pill py">stem</span> incomplete, <span class="pill pb">book</span> Sixth Extinction detail, <span class="pill pr">conflict</span> stem disagrees with lecture.</p>' +
      APP.table(["#", "Stem", "Lesson", "Flag"], SG.sg.map(function (s) { var stem = SG.sgStems[s.n - 1]; return ['<a href="#review-' + s.n + '">' + s.n + "</a>", esc(stem.length > 110 ? stem.slice(0, 107) + "…" : stem), APP.modTag(APP.topicById[s.t].m) + ' <a href="#learn-' + s.t + '">' + esc(APP.topicById[s.t].title) + "</a>", s.flag ? APP.flagPill(s.flag) : ""]; })) + "</div>";
    return h;
  };
  APP.flagPill = function (f) { return '<span class="pill ' + ({ book: "pb", conflict: "pr" }[f] || "py") + '">' + f + "</span>"; };
})();
