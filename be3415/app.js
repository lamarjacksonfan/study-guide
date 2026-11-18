/* BE 3415 Exam 3 study app: rendering, quizzes, problem practice, progress tracking. */
(function () {
  "use strict";
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  };
  var strip = function (s) { return String(s).replace(/<[^>]+>/g, ""); };
  var LETTERS = "ABCDEFGH";
  var DAY = 86400000;

  var modById = {}; BE.modules.forEach(function (m) { modById[m.id] = m; });
  var topicById = {}; BE.topics.forEach(function (t) { topicById[t.id] = t; });
  var qById = {}; BE.questions.forEach(function (q) { qById[q.id] = q; });
  var fixedById = {}; BE.fixed.forEach(function (p) { fixedById[p.id] = p; });
  var cards = BE.cards.map(function (c, i) {
    return { i: i, m: c[0], t: c[1], f: c[2], b: c[3], k: c[4] };
  });

  /* ------------------------------------------------------------ state */
  var LS_KEY = "be3415-exam3-state-v1";
  function blank() {
    return { v: 1, updated: 0, settings: { examDate: BE.examDefault }, answers: {}, cards: {},
             topics: {}, errors: [], exams: {}, finalCheck: {}, starred: {}, tasks: {}, drills: {} };
  }
  var S = blank();
  try { var raw = localStorage.getItem(LS_KEY); if (raw) S = Object.assign(blank(), JSON.parse(raw)); } catch (e) {}

  var dbDoc = null, saveTimer = null, syncState = "local";
  function save() {
    S.updated = Date.now();
    try { localStorage.setItem(LS_KEY, JSON.stringify(S)); } catch (e) {}
    clearTimeout(saveTimer);
    saveTimer = setTimeout(pushDb, 1200);
  }
  function pushDb() {
    if (!dbDoc) return;
    dbDoc.set(JSON.parse(JSON.stringify(S)))
      .then(function () { setSync("saved"); }, function () { setSync("error"); });
  }
  function setSync(s) { syncState = s; var el = $("#sync"); if (el) el.textContent = syncLabel(); }
  function syncLabel() {
    return { local: "Progress saved in this browser",
             saved: "Progress synced · Claude can read it",
             error: "Couldn't sync; saved in this browser" }[syncState];
  }
  if (window.claude && window.claude.use) {
    window.claude.use("db").then(function (d) {
      if (!d) return;
      dbDoc = d.doc("progress/state");
      dbDoc.get().then(function (snap) {
        var remote = snap && snap.exists ? snap.data() : null;
        if (remote && (remote.updated || 0) > (S.updated || 0)) {
          S = Object.assign(blank(), remote);
          try { localStorage.setItem(LS_KEY, JSON.stringify(S)); } catch (e) {}
          route();
        } else if (S.updated) { pushDb(); }
        setSync("saved");
      }, function () { setSync("error"); });
    }, function () {});
  }

  /* ------------------------------------------------------------ stats */
  function recordAnswer(q, ok, picks, ctx) {
    var a = S.answers[q.id] || { n: 0, c: 0 };
    a.n += 1; if (ok) a.c += 1; a.last = ok; a.ts = Date.now();
    S.answers[q.id] = a;
    if (!ok) {
      S.errors.unshift({ q: q.id, ts: Date.now(),
        pick: picks.map(function (p) { return strip(q.o[p]); }).join(" + ") || "(no answer)",
        type: "", ctx: ctx || "" });
      if (S.errors.length > 300) S.errors.length = 300;
    }
  }
  function topicStats(tid) {
    var n = 0, c = 0, seen = 0, total = 0;
    BE.questions.forEach(function (q) {
      if (q.t !== tid) return;
      total++;
      var a = S.answers[q.id];
      if (a) { seen++; n += a.n; c += a.c; }
    });
    return { n: n, c: c, seen: seen, total: total, acc: n ? c / n : null };
  }
  function moduleStats(mid) {
    var n = 0, c = 0;
    BE.questions.forEach(function (q) {
      if (q.m !== mid) return;
      var a = S.answers[q.id];
      if (a) { n += a.n; c += a.c; }
    });
    return { n: n, c: c, acc: n ? c / n : null };
  }
  function pct(x) { return x == null ? "—" : Math.round(x * 100) + "%"; }
  function masteredCount() {
    var m = 0, tot = 0;
    BE.questions.forEach(function (q) { tot++; var a = S.answers[q.id]; if (a && a.last) m++; });
    return { m: m, tot: tot };
  }
  function readyCount() {
    var g = 0, y = 0;
    BE.topics.forEach(function (t) {
      var st = (S.topics[t.id] || {}).status || 0;
      if (st === 2) g++; else if (st === 1) y++;
    });
    return { g: g, y: y, total: BE.topics.length };
  }
  function drillStats(kind) {
    var d = S.drills[kind] || { n: 0, c: 0 };
    return { n: d.n, c: d.c, acc: d.n ? d.c / d.n : null };
  }
  function topicPriority(t) {
    var st = topicStats(t.id), conf = (S.topics[t.id] || {}).conf || 0;
    if (st.acc == null) return t.heat >= 3 ? "High" : "Medium";
    if (st.acc < 0.6) return "High";
    if (st.acc < 0.8) return "Medium";
    return conf && conf <= 2 ? "Medium" : "Low";
  }
  function daysLeft() {
    var d = new Date((S.settings.examDate || BE.examDefault) + "T09:00:00");
    var now = new Date(); now.setHours(0, 0, 0, 0);
    var ex = new Date(d); ex.setHours(0, 0, 0, 0);
    return Math.round((ex - now) / DAY);
  }
  // Spread the seven sessions over however many days are left.
  function sessionToday() {
    var dl = daysLeft(), n = BE.sessions.length;
    if (dl <= 0) return 0;
    if (dl >= n) return 1;
    return n - dl + 1;
  }

  /* ------------------------------------------------------------ helpers */
  function heat(n) { return n >= 3 ? "●●●" : n === 2 ? "●●" : "●"; }
  function modTag(mid) {
    var m = modById[mid];
    return m ? '<span class="mtag mtag-' + mid + '">' + esc(m.short) + "</span>" : "";
  }
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function lvlBadge(l) {
    return '<span class="lvl lvl' + l + '">' +
      ["", "L1 Recall", "L2 Understand", "L3 Apply", "L4 Integrate"][l] + "</span>";
  }
  function qType(q) {
    return q.o.length === 2 && strip(q.o[0]) === "True" ? "True/False"
         : q.a.length > 1 ? "Select all" : "Multiple choice";
  }
  function statusPill(s) {
    return ['<span class="pill pr">Not learned</span>', '<span class="pill py">Partial</span>',
            '<span class="pill pg">Exam ready</span>'][s || 0];
  }
  function table(head, rows, cls) {
    return '<div class="tw"><table class="t ' + (cls || "") + '"><thead><tr>' +
      head.map(function (h) { return "<th>" + h + "</th>"; }).join("") + "</tr></thead><tbody>" +
      rows.map(function (r) {
        return "<tr>" + r.map(function (c, i) {
          return (i === 0 ? "<th>" : "<td>") + c + (i === 0 ? "</th>" : "</td>");
        }).join("") + "</tr>";
      }).join("") + "</tbody></table></div>";
  }
  function topicLink(tid, label) {
    var t = topicById[tid];
    if (!t) return esc(label || tid);
    return '<a href="#topic-' + tid + '">' + esc(label || t.title) + "</a>";
  }

  /* ------------------------------------------------------------ router */
  var views = {};
  var NAV = [
    ["home", "Dashboard"], ["map", "Exam map"], ["plan", "Study plan"], ["study", "Study"],
    ["review", "Review sheet"], ["guide", "Review guide"], ["problems", "Problems"], ["cards", "Flashcards"],
    ["practice", "Practice"], ["exams", "Exams"], ["weak", "Weak areas"], ["cram", "Cram packet"]
  ];
  function nav() {
    $("#nav").innerHTML = NAV.map(function (n) {
      return '<a href="#' + n[0] + '" data-v="' + n[0] + '">' + n[1] + "</a>";
    }).join("");
  }
  var current = "home";
  function route() {
    var h = (location.hash || "#home").slice(1);
    var v = h.indexOf("topic-") === 0 ? "study" : h.indexOf("prob-") === 0 ? "problems" : h.indexOf("guide-") === 0 ? "guide" : h;
    if (!views[v]) { v = "home"; h = "home"; }
    current = v;
    $$("#nav a").forEach(function (a) { a.classList.toggle("on", a.getAttribute("data-v") === v); });
    var main = $("#main");
    main.innerHTML = views[v](h);
    var anchor = h.indexOf("guide-") === 0 ? document.getElementById(h) : null;
    if (anchor) anchor.scrollIntoView(); else window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", route);

  /* ------------------------------------------------------------ DASHBOARD */
  views.home = function () {
    var dl = daysLeft(), sn = sessionToday(), rc = readyCount(), mc = masteredCount();
    var countdown = dl > 0 ? dl + (dl === 1 ? " day" : " days") : dl === 0 ? "Exam day" : "Exam passed";
    var tasks;
    if (sn >= 1) {
      var p = BE.sessions[sn - 1];
      tasks = '<ul class="tasks">' + p.blocks.map(function (b, i) {
        var key = sn + "-" + i, on = S.tasks[key];
        return '<li><label><input type="checkbox" data-task="' + key + '"' + (on ? " checked" : "") +
          '> <span class="tt">' + esc(b[0]) + "</span> " + b[1] + "</label></li>";
      }).join("") + "</ul>";
    } else {
      tasks = "<p>It's exam day. Read the <a href='#cram'>cram packet</a> once, " +
        "run the readiness checklist, then stop. You've done the work.</p>";
    }
    var weakest = BE.topics.map(function (t) { return { t: t, s: topicStats(t.id) }; })
      .filter(function (x) { return x.s.acc != null; })
      .sort(function (a, b) { return a.s.acc - b.s.acc; }).slice(0, 5);
    var weakHtml = weakest.length ? '<ol class="weaklist">' + weakest.map(function (x) {
      return '<li><a href="#topic-' + x.t.id + '">' + modTag(x.t.m) + " " + esc(x.t.title) +
        '</a> <span class="num">' + pct(x.s.acc) + "</span></li>";
    }).join("") + "</ol>"
      : "<p class='muted'>Answer some practice questions and your weakest topics appear here.</p>";
    var modRows = BE.modules.map(function (m) {
      var a = moduleStats(m.id).acc;
      return '<div class="mbar"><span>' + modTag(m.id) + " " + esc(m.name) +
        '</span><span class="bar"><i style="width:' + (a == null ? 0 : Math.round(a * 100)) +
        '%"></i></span><span class="num">' + pct(a) + "</span></div>";
    }).join("");
    var drills = BE.generators.map(function (g) {
      var d = drillStats(g[0]);
      return '<div class="mbar"><span><a href="#prob-' + g[0] + '">' + esc(g[1]) +
        '</a></span><span class="bar"><i style="width:' + (d.acc == null ? 0 : Math.round(d.acc * 100)) +
        '%"></i></span><span class="num">' + (d.n ? d.c + "/" + d.n : "—") + "</span></div>";
    }).join("");

    return '<section class="hero"><div><p class="eyebrow">BE 3415 · Fundamentals of Biomolecular Engineering</p>' +
      "<h1>Exam 3 Lab Bench</h1>" +
      '<p class="lede">Built from your six lectures (Weeks 10–13), the professor’s review sheet ' +
      "with its answer key, and Labs 4–6. Retrieve, don’t reread — and do the problems by hand.</p></div>" +
      '<div class="countdown"><span class="big">' + countdown +
      '</span><label for="examDate">Exam date</label>' +
      '<input id="examDate" type="date" value="' + esc(S.settings.examDate) + '"></div></section>' +
      '<div class="grid g3">' +
      '<div class="card stat"><span class="label">Topics marked exam ready</span><span class="big">' +
      rc.g + "<small>/" + rc.total + '</small></span><span class="muted">' + rc.y +
      ' partial</span><span class="bar"><i style="width:' + Math.round(rc.g / rc.total * 100) +
      '%"></i></span></div>' +
      '<div class="card stat"><span class="label">Questions mastered</span><span class="big">' +
      mc.m + "<small>/" + mc.tot + '</small></span><span class="muted">last attempt correct</span>' +
      '<span class="bar"><i style="width:' + Math.round(mc.m / mc.tot * 100) + '%"></i></span></div>' +
      '<div class="card stat"><span class="label">Errors logged</span><span class="big">' +
      S.errors.length + '</span><span class="muted">' +
      S.errors.filter(function (e) { return !e.type; }).length +
      ' still need a reason tag</span><a class="btn sm" href="#weak">Open error log</a></div>' +
      "</div>" +
      '<div class="grid g2">' +
      '<div class="card"><h2>' + (sn >= 1 ? "Today: session " + sn + " · " +
        esc(BE.sessions[sn - 1].title) : "Today") + "</h2>" + tasks +
      (sn >= 1 ? '<p class="muted">About ' + BE.sessions[sn - 1].mins +
        " minutes. Tick blocks as you finish them.</p>" : "") + "</div>" +
      '<div class="card"><h2>Weakest topics</h2>' + weakHtml +
      "<h3>Accuracy by module</h3>" + modRows + "</div>" +
      "</div>" +
      '<div class="card"><h2>Problem drills</h2><p class="muted">The three skills the review sets as ' +
      "written problems, plus kinetics. Scores are correct/attempted.</p>" + drills +
      '<a class="btn" href="#problems">Open problems</a></div>' +
      '<div class="card tutor"><h2>Tutor modes (in chat with Claude)</h2>' +
      "<p>This page handles practice and tracking. For live tutoring, type one of these in the chat:</p>" +
      '<div class="cmds"><code>Quiz me [topic]</code><code>Teach me [topic]</code>' +
      "<code>Feynman: [topic]</code><code>Rapid fire</code><code>Exam mode</code>" +
      "<code>I only have [X] hours left</code></div>" +
      '<p class="muted">Claude can read your saved progress to adapt. If syncing is off, use ' +
      "<b>Copy my results</b> and paste them into the chat.</p>" +
      '<button class="btn ghost" id="copyRes">Copy my results for Claude</button> ' +
      '<span id="copyMsg" class="muted"></span></div>';
  };
  function resultsText() {
    var lines = ["BE 3415 EXAM 3 PROGRESS (" + new Date().toLocaleString() + ")",
                 "Exam date: " + S.settings.examDate, ""];
    lines.push("TOPIC ACCURACY (correct/attempts, self-confidence):");
    BE.topics.forEach(function (t) {
      var s = topicStats(t.id), c = (S.topics[t.id] || {}).conf;
      if (s.n || c) lines.push("- " + modById[t.m].short + " " + t.title + ": " + s.c + "/" + s.n +
        (c ? ", conf " + c + "/5" : ""));
    });
    lines.push("", "PROBLEM DRILLS:");
    BE.generators.forEach(function (g) {
      var d = drillStats(g[0]);
      if (d.n) lines.push("- " + g[1] + ": " + d.c + "/" + d.n);
    });
    lines.push("", "EXAMS:");
    Object.keys(S.exams).forEach(function (k) {
      S.exams[k].forEach(function (r) {
        lines.push("- " + k + ": " + r.score + "/" + r.total + " on " +
          new Date(r.ts).toLocaleDateString());
      });
    });
    lines.push("", "RECENT ERRORS:");
    S.errors.slice(0, 40).forEach(function (e) {
      var q = qById[e.q];
      if (q) lines.push("- [" + q.t + "] " + strip(q.q).slice(0, 90) + " | picked: " + e.pick +
        " | type: " + (e.type || "untagged"));
    });
    var rc = readyCount();
    lines.push("", "Topics: " + rc.g + " exam ready, " + rc.y + " partial, of " + rc.total);
    return lines.join("\n");
  }
  document.addEventListener("click", function (ev) {
    if (ev.target.id !== "copyRes") return;
    var txt = resultsText(), t = ev.target;
    var done = function (ok) {
      $("#copyMsg").textContent = ok ? "Copied. Paste it into the chat."
        : "Copy blocked. Select the text below and copy it.";
      if (!ok) {
        var ta = document.createElement("textarea");
        ta.className = "copyta"; ta.value = txt;
        t.parentNode.appendChild(ta); ta.select();
      }
    };
    try {
      navigator.clipboard.writeText(txt).then(function () { done(true); }, function () { done(false); });
    } catch (e) { done(false); }
  });
  document.addEventListener("change", function (ev) {
    var t = ev.target;
    if (t.id === "examDate") { S.settings.examDate = t.value || BE.examDefault; save(); route(); }
    if (t.dataset && t.dataset.task) { S.tasks[t.dataset.task] = t.checked; save(); }
  });

  /* ------------------------------------------------------------ EXAM MAP */
  views.map = function () {
    var A = BE.analysis;
    var cov = BE.modules.map(function (m) {
      var ts = BE.topics.filter(function (t) { return t.m === m.id; });
      var rq = BE.reviewTrue.filter(function (r) { return (topicById[r[1]] || {}).m === m.id; }).length +
               BE.reviewMC.filter(function (r) { return (topicById[r[1]] || {}).m === m.id; }).length +
               BE.reviewOther.filter(function (r) { return (topicById[r[1]] || {}).m === m.id; }).length;
      var qn = BE.questions.filter(function (q) { return q.m === m.id; }).length;
      return [modTag(m.id) + " " + esc(m.name), rq, qn,
        ts.map(function (t) { return '<a href="#topic-' + t.id + '">' + esc(t.title) + "</a>"; }).join("<br>"),
        esc(m.src)];
    });
    return "<h1>Exam content map</h1>" +
      '<p class="lede">What the exam covers, how it is tested, and where the gaps are. ' +
      "The review sheet says in its own opening that it is <b>not only multiple choice</b> and that " +
      "lecture and lab material <b>not on the handout</b> will appear.</p>" +
      '<nav class="toc"><a href="#map-inv">Materials</a><a href="#map-cov">Coverage</a>' +
      '<a href="#map-style">Question style</a><a href="#map-pri">Priorities</a>' +
      '<a href="#map-miss">Gaps</a><a href="#map-conf">Source conflicts</a></nav>' +
      '<section class="card" id="map-inv"><h2>1 · Materials</h2>' +
      table(["File", "What's in it", "Role"],
        A.inventory.map(function (r) { return [esc(r[0]), r[1], esc(r[2])]; })) + "</section>" +
      '<section class="card" id="map-cov"><h2>2 · Coverage by module</h2>' +
      table(["Module", "Review items", "Questions here", "Topics", "Your materials"], cov) + "</section>" +
      '<section class="card" id="map-style"><h2>3 · How your professor tests</h2><ul>' +
      A.styleNotes.map(function (s) { return "<li>" + s + "</li>"; }).join("") + "</ul></section>" +
      '<section class="card" id="map-pri"><h2>4 · High-yield priorities</h2>' +
      '<p class="muted">A = do these first. Each links to the topic that explains it.</p>' +
      table(["Yield", "What", "Module", "Why"], A.priorities.map(function (r) {
        return ['<span class="y' + r[0] + '">' + r[0] + "</span>", topicLink(r[3], strip(r[1])),
                modTag(r[2]), r[4]];
      })) + "</section>" +
      '<section class="card" id="map-miss"><h2>5 · Gaps and blind spots</h2><ul>' +
      A.missing.map(function (m) { return "<li>" + m + "</li>"; }).join("") + "</ul></section>" +
      '<section class="card" id="map-conf"><h2>6 · Source conflicts</h2>' +
      '<p class="muted">Where your materials disagree with each other or with the textbook. ' +
      "I kept the professor's version and flagged it rather than silently changing it.</p>" +
      table(["Issue", "What the sources say", "What to do"],
        A.conflicts.map(function (r) { return [esc(r[0]), r[1], r[2]]; })) + "</section>";
  };

  /* ------------------------------------------------------------ PLAN */
  views.plan = function () {
    var sn = sessionToday();
    return "<h1>Study plan</h1>" +
      '<p class="lede">Seven sessions, ordered so the hands-on skills come first and nothing new ' +
      "is introduced on the last two days. Each session opens by retrieving the one before it.</p>" +
      BE.sessions.map(function (p) {
        return '<section class="card day' + (p.n === sn ? " now" : "") + '"><p class="eyebrow">Session ' +
          p.n + (p.n === sn ? " · today" : "") + " · ~" + p.mins + " min</p><h2>" +
          esc(p.title) + "</h2>" +
          table(["Time", "What to do"], p.blocks.map(function (b) { return [esc(b[0]), b[1]]; })) +
          "</section>";
      }).join("") +
      '<section class="card"><h2>Rules for every session</h2><ul>' +
      "<li>Close the notes before answering any recall prompt. Say it aloud or write it, then check.</li>" +
      "<li>Tag every miss in the <a href='#weak'>error log</a>. The tags tell you whether your problem " +
      "is knowledge, vocabulary or misreading.</li>" +
      "<li>Do problems by hand on paper first, then type the answer in to check it.</li>" +
      "<li>When a topic passes 80%, stop drilling it at Level 1–2 and move to Level 3–4.</li>" +
      "<li>Breaks are part of the plan.</li></ul></section>";
  };

  /* ------------------------------------------------------------ STUDY */
  function topicSidebar(activeId) {
    return BE.modules.map(function (m) {
      var ts = BE.topics.filter(function (x) { return x.m === m.id; });
      if (!ts.length) return "";
      return '<div class="tgroup"><p class="glabel">' + modTag(m.id) + " " + esc(m.name) + "</p>" +
        ts.map(function (x) {
          var st = (S.topics[x.id] || {}).status || 0;
          return '<a class="tlink' + (activeId === x.id ? " on" : "") + '" href="#topic-' + x.id +
            '"><span class="dot d' + st + '"></span>' + esc(x.title) +
            ' <span class="heat">' + heat(x.heat) + "</span></a>";
        }).join("") + "</div>";
    }).join("");
  }
  views.study = function (h) {
    var tid = h.indexOf("topic-") === 0 ? h.slice(6) : null;
    var t = tid && topicById[tid];
    if (!t) {
      return "<h1>Study</h1><p class=\"lede\">" + BE.topics.length +
        " topics across the nine modules, in teaching order. Each has a plain-language version, " +
        "the exam-level detail, the traps, and recall prompts. Mark your status at the top of each.</p>" +
        '<div class="studylist">' + topicSidebar(null) + "</div>";
    }
    var tp = S.topics[t.id] || {}, st = topicStats(t.id);
    var sec = function (title, body, cls) {
      return body ? '<section class="tsec ' + (cls || "") + '"><h3>' + title + "</h3>" + body + "</section>" : "";
    };
    var ul = function (arr, cls) {
      return arr && arr.length ? '<ul class="' + (cls || "") + '">' +
        arr.map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ul>" : "";
    };
    var idx = BE.topics.indexOf(t), prev = BE.topics[idx - 1], next = BE.topics[idx + 1];
    // review items that point at this topic
    var rv = [];
    BE.reviewTrue.forEach(function (r) { if (r[1] === t.id) rv.push("Statement " + r[0]); });
    BE.reviewMC.forEach(function (r) { if (r[1] === t.id) rv.push("MC " + r[0]); });
    BE.reviewOther.forEach(function (r) { if (r[1] === t.id) rv.push("Problem " + r[0]); });

    return '<div class="studywrap"><aside class="side">' + topicSidebar(t.id) +
      '</aside><article class="topic">' +
      '<p class="eyebrow">' + modTag(t.m) + " " + esc(modById[t.m].name) + " · " + heat(t.heat) +
      "</p><h1>" + esc(t.title) + "</h1>" +
      '<div class="selfrate"><span>My status:</span>' +
      [0, 1, 2].map(function (s) {
        return '<button class="sr' + ((tp.status || 0) === s ? " on" : "") + '" data-status="' + s +
          '" data-tid="' + t.id + '">' + ["Not learned", "Partial", "Exam ready"][s] + "</button>";
      }).join("") +
      '<span class="sep">Confidence:</span>' +
      [1, 2, 3, 4, 5].map(function (c) {
        return '<button class="cf' + (tp.conf === c ? " on" : "") + '" data-conf="' + c +
          '" data-tid="' + t.id + '">' + c + "</button>";
      }).join("") +
      '<span class="muted acc">Accuracy: ' + pct(st.acc) + " (" + st.c + "/" + st.n + ")</span></div>" +
      '<div class="callout hot"><b>Why this matters:</b> ' + t.why +
      (rv.length ? ' <span class="muted">On the review: ' + rv.join(", ") + ".</span>" : "") + "</div>" +
      sec("What you need to know", "<p>" + t.know + "</p>") +
      sec("Explain it like I'm learning it for the first time", "<p>" + t.eli5 + "</p>", "eli5") +
      sec("Exam-level detail", t.exam) +
      (t.compare ? sec("Compare &amp; contrast", table(t.compare.head, t.compare.rows)) : "") +
      (t.terms ? sec("Key terms", '<dl class="terms">' + t.terms.map(function (x) {
        return "<dt>" + x[0] + "</dt><dd>" + x[1] + "</dd>";
      }).join("") + "</dl>") : "") +
      (t.traps && t.traps.length ? '<div class="callout trap"><b>Exam traps</b>' + ul(t.traps) + "</div>" : "") +
      (t.trick ? '<div class="callout mem"><b>Memory hook</b><p>' + t.trick + "</p></div>" : "") +
      '<section class="tsec recall"><h3>Active recall (answer without looking)</h3><ol>' +
      t.recall.map(function (r) { return "<li>" + r + "</li>"; }).join("") + "</ol></section>" +
      '<div class="callout one"><b>If you only remember one thing:</b><p>' + t.one + "</p></div>" +
      '<p class="src"><b>Source:</b> ' + esc(t.src) + "</p>" +
      '<div class="tnav"><a class="btn" href="#practice" data-practice-topic="' + t.id +
      '">Practice this topic</a>' +
      (prev ? '<a class="btn ghost" href="#topic-' + prev.id + '">← ' + esc(prev.title) + "</a>" : "") +
      (next ? '<a class="btn ghost" href="#topic-' + next.id + '">' + esc(next.title) + " →</a>" : "") +
      "</div></article></div>";
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

  /* ------------------------------------------------------ REVIEW SHEET */
  var reviewFilter = "all";
  views.review = function () {
    var showT = reviewFilter === "all" || reviewFilter === "star" || reviewFilter === "true";
    var showM = reviewFilter === "all" || reviewFilter === "star" || reviewFilter === "mc";
    var showO = reviewFilter === "all" || reviewFilter === "star" || reviewFilter === "other";
    var starOnly = reviewFilter === "star";
    var byTopic = function (tid) {
      var t = topicById[tid];
      return t ? ' <a class="pill" href="#topic-' + tid + '">' + esc(t.title) + "</a>" : "";
    };
    var trueItems = !showT ? [] : BE.reviewTrue.filter(function (r) { return !starOnly || S.starred["t" + r[0]]; });
    var mcItems = !showM ? [] : BE.reviewMC.filter(function (r) { return !starOnly || S.starred["m" + r[0]]; });
    var otherItems = !showO ? [] : BE.reviewOther.filter(function (r) { return !starOnly || S.starred["o" + r[0]]; });

    var html = "<h1>The professor's review sheet</h1>" +
      '<p class="lede">All 71 items, with the answer key and a link from each one to the topic that ' +
      "explains it. Answer out loud before you reveal. Star anything you hesitate on.</p>" +
      '<div class="chips" id="rvf">' +
      [["all", "All 71"], ["true", "53 true statements"], ["mc", "9 multiple choice"],
       ["other", "9 problems"], ["star", "Starred"]].map(function (c) {
        return '<button class="chip' + (reviewFilter === c[0] ? " on" : "") + '" data-rf="' + c[0] +
          '">' + c[1] + "</button>";
      }).join("") + '<button class="chip" id="revAll">Reveal all</button></div>';

    if (trueItems.length) {
      html += '<section class="card"><h2>True statements</h2>' +
        '<p class="muted">Every one of these is TRUE as printed. The exam’s likely move is to ' +
        "flip a single word, so read each one for the word that could be swapped.</p><ol class=\"rv\">" +
        trueItems.map(function (r) {
          return '<li class="rvi"><div class="rvq"><span class="num">' + r[0] + "</span>" +
            modTag((topicById[r[1]] || {}).m) + ' <span class="stem">' + esc(r[2]) + "</span>" +
            '<button class="star' + (S.starred["t" + r[0]] ? " on" : "") + '" data-star="t' + r[0] +
            '" aria-label="Star item">★</button></div>' +
            "<details><summary>What to watch for</summary><p>" + esc(r[3]) + "</p>" +
            "<p>Explained in: " + byTopic(r[1]) + "</p></details></li>";
        }).join("") + "</ol></section>";
    }
    if (mcItems.length) {
      html += '<section class="card"><h2>Multiple choice</h2>' +
        '<p class="muted">The professor’s own answer letters, with why each one is right.</p><ol class="rv">' +
        mcItems.map(function (r) {
          return '<li class="rvi"><div class="rvq"><span class="num">' + r[0] + "</span>" +
            modTag((topicById[r[1]] || {}).m) + ' <span class="stem">' + esc(r[2]) + "</span>" +
            '<button class="star' + (S.starred["m" + r[0]] ? " on" : "") + '" data-star="m' + r[0] +
            '" aria-label="Star item">★</button></div>' +
            '<ol class="rvopts">' + r[3].map(function (o, i) {
              return "<li>" + esc(o) + "</li>";
            }).join("") + "</ol>" +
            '<details><summary>Show answer</summary><p class="ans">Answer: ' +
            LETTERS[r[4]] + " — " + esc(r[3][r[4]]) + "</p><p>" + r[5] + "</p>" +
            "<p>Explained in: " + byTopic(r[1]) + "</p></details></li>";
        }).join("") + "</ol></section>";
    }
    if (otherItems.length) {
      html += '<section class="card"><h2>Written problems and short answers</h2>' +
        '<p class="muted">These are the non-multiple-choice items. Where there is a worked version, ' +
        "the link opens it with the numbers from the sheet.</p><ol class=\"rv\">" +
        otherItems.map(function (r) {
          return '<li class="rvi"><div class="rvq"><span class="num">' + r[0] + "</span>" +
            modTag((topicById[r[1]] || {}).m) + ' <span class="stem">' + esc(r[3]) + "</span>" +
            '<button class="star' + (S.starred["o" + r[0]] ? " on" : "") + '" data-star="o' + r[0] +
            '" aria-label="Star item">★</button></div>' +
            '<details><summary>Show answer</summary><p class="ans">' + esc(r[4]) + "</p><p>" +
            esc(r[5]) + "</p><p>Explained in: " + byTopic(r[1]) +
            (r[2] ? ' · <a href="#prob-' + r[2] + '">open the worked problem</a>' : "") +
            "</p></details></li>";
        }).join("") + "</ol></section>";
    }
    if (!trueItems.length && !mcItems.length && !otherItems.length)
      html += '<div class="card"><p>Nothing starred yet. Star items as you work through them.</p></div>';
    return html;
  };
  document.addEventListener("click", function (ev) {
    var b = ev.target.closest("[data-rf],[data-star],#revAll");
    if (!b) return;
    if (b.id === "revAll") { $$("details", $("#main")).forEach(function (d) { d.open = true; }); return; }
    if (b.dataset.rf) { reviewFilter = b.dataset.rf; route(); return; }
    if (b.dataset.star) {
      var n = b.dataset.star;
      if (S.starred[n]) delete S.starred[n]; else S.starred[n] = true;
      save(); b.classList.toggle("on");
    }
  });

  /* ------------------------------------------------------------ PROBLEMS */
  var PB = { kind: null, prob: null, shown: false, result: null, fixed: null };
  function seqHTML(seq, hl) {
    // 10-base groups with position ticks; the target region is highlighted
    var out = "", i;
    for (i = 0; i < seq.length; i += 10) {
      var chunk = "";
      for (var j = i; j < Math.min(i + 10, seq.length); j++) {
        var inHl = hl && j >= hl[0] && j < hl[1];
        chunk += inHl ? '<span class="hl">' + seq[j] + "</span>" : seq[j];
      }
      out += chunk + " ";
      if ((i / 10 + 1) % 6 === 0) out += '<span class="tick">·' + (i + 10) + "</span><br>";
    }
    return "5′ " + out + " 3′";
  }
  function fieldsHTML(fields) {
    return '<div class="fieldrow">' + fields.map(function (f) {
      return "<label>" + esc(f.label) + '<input type="text" class="' + (f.mono ? "mono" : "") +
        '" data-pf="' + f.key + '" autocomplete="off" autocapitalize="off" spellcheck="false"></label>';
    }).join("") + "</div>";
  }
  function choicesHTML(choices, picked, answerIdx, show) {
    return '<div class="opts">' + choices.map(function (c, i) {
      var cls = "opt";
      if (show) { if (i === answerIdx) cls += " right"; else if (i === picked) cls += " wrong"; }
      return '<label class="' + cls + '"><input type="radio" name="pbc" value="' + i + '"' +
        (picked === i ? " checked" : "") + (show ? " disabled" : "") + "> <b>" + LETTERS[i] +
        ".</b> <span>" + c + "</span></label>";
    }).join("") + "</div>";
  }
  function problemBody(p, show, result) {
    var h = "";
    if (p.seq) h += '<div class="seqbox">' + seqHTML(p.seq, p.hl) + "</div>";
    if (p.kind === "linmap") h += BE.linMapSVG(p.labels, p.pos);
    if (p.kind === "gel") {
      h += BE.plasmidSVG(p.plasmid, [].concat.apply([], p.lanes));
      h += BE.gelSVG(p.ladder, p.lanes.map(function (set, i) {
        return { label: set.join(" + "), bands: show ? p.answer.bands[i] : [] };
      }), { hideSizes: !show });
      h += '<p class="pnote">Cut positions — ' + esc(p.sitesUsed.join(" · ")) + "</p>";
    }
    if (p.kind === "design") {
      h += BE.plasmidSVG(p.plasmid, show ? p.answer : [], p.feature);
      h += '<p class="pnote">' + esc(p.feature[2]) + " spans " + p.feature[0] + "–" +
        p.feature[1] + " bp on the " + BE.plasmids[p.plasmid].size + " bp plasmid.</p>";
    }
    if (p.choices) h += choicesHTML(p.choices, result ? result.picked : -1, p.answerIdx, show);
    else if (p.fields) h += fieldsHTML(p.fields);
    return h;
  }
  views.problems = function (h) {
    var want = h.indexOf("prob-") === 0 ? h.slice(5) : null;
    // Switching to a different problem always starts hidden again, so arriving from
    // a drill you just revealed never spoils the next one.
    if (want && fixedById[want]) {
      if (PB.fixed !== want) { PB.shown = false; PB.result = null; }
      PB.fixed = want; PB.prob = null; PB.kind = null;
    }
    else if (want) {
      var gen = BE.generators.filter(function (g) { return g[0] === want; })[0];
      if (gen && PB.kind !== want) {
        PB.kind = want; PB.prob = gen[2](); PB.shown = false; PB.result = null; PB.fixed = null;
      }
    }
    var menu = '<div class="chips">' + BE.generators.map(function (g) {
      var d = drillStats(g[0]);
      return '<button class="chip' + (PB.kind === g[0] && !PB.fixed ? " on" : "") + '" data-pg="' +
        g[0] + '">' + esc(g[1]) +
        (d.n ? ' <span class="num">' + d.c + "/" + d.n + "</span>" : "") + "</button>";
    }).join("") + "</div>" +
      '<div class="chips">' + BE.fixed.map(function (p) {
        return '<button class="chip' + (PB.fixed === p.id ? " on" : "") + '" data-pfx="' + p.id +
          '">' + esc(p.src) + "</button>";
      }).join("") + "</div>";

    var head = "<h1>Problem practice</h1>" +
      '<p class="lede">The written problems your professor actually sets: primer design, restriction ' +
      "digests and plasmid gels, plus kinetics. Work each one on paper first, then check it. The top " +
      "row generates a fresh problem every time; the bottom row holds the real problems from the " +
      "review sheet and the labs, with their own answers.</p>" + menu;

    if (PB.fixed) return head + fixedProblemView(fixedById[PB.fixed]);
    if (!PB.prob) {
      return head + '<div class="card"><p>Pick a drill above. Each one generates a new problem every ' +
        "time, grades what you type, and names the specific mistake if you get it wrong.</p></div>";
    }
    var p = PB.prob, r = PB.result;
    var body = '<div class="pwrap"><div class="card"><p class="qstem">' + p.stem + "</p>" +
      problemBody(p, PB.shown, r) +
      (p.facts && PB.shown ? '<div class="facts">' + p.facts.map(function (f) {
        return "<span>" + esc(f[0]) + ": <b>" + esc(f[1]) + "</b></span>";
      }).join("") + "</div>" : "") +
      '<div class="qbtns" style="margin-top:12px">' +
      (PB.shown ? '<button class="btn" id="pbNext">New problem</button>'
                : '<button class="btn" id="pbCheck">Check my answer</button>' +
                  '<button class="btn ghost" id="pbShow">Show me how</button>') +
      "</div></div>";
    if (r) {
      body += '<div class="fb ' + (r.ok ? "fbok" : "fbbad") + '"><p class="verdict">' +
        (r.ok ? "✔ Correct" : "✘ Not yet") + "</p><ul>" +
        r.notes.map(function (n) { return "<li>" + esc(n) + "</li>"; }).join("") + "</ul></div>";
    }
    if (PB.shown) body += '<div class="card"><h3>How it works</h3>' + p.explain + "</div>";
    return head + body + "</div>";
  };
  function fixedProblemView(p) {
    var show = PB.shown, ans = "";
    if (p.kind === "primer")
      ans = "<p><b>Forward:</b> <code>" + p.answer.fwd + "</code><br><b>Reverse:</b> <code>" +
        p.answer.rev + "</code><br>Product: " + p.answer.ampLen + " bp</p>";
    else if (p.kind === "gel")
      ans = "<p>" + (p.answerNote || p.lanes.map(function (set, i) {
        return "<b>" + set.join(" + ") + ":</b> " + p.bands[i].join(" + ") + " bp";
      }).join("<br>")) + "</p>";
    else if (p.kind === "linmap") ans = "<p><b>" + p.answer.join(" and ") + "</b></p>";
    else if (p.kind === "design")
      ans = "<p><b>" + p.answer.join(" + ") + "</b> → a " + p.fragLen + " bp fragment</p>";
    else ans = "<p><b>" + esc(p.answer) + "</b></p>";

    var h = '<div class="pwrap"><div class="card"><p class="srcline">' + esc(p.src) + "</p>" +
      '<p class="qstem">' + esc(p.stem) + "</p>";
    if (p.seq) h += '<div class="seqbox">' + seqHTML(p.seq, p.hl) + "</div>";
    if (p.kind === "linmap") h += BE.linMapSVG(p.labels, p.pos);
    if (p.kind === "gel") {
      h += BE.plasmidSVG(p.plasmid, [].concat.apply([], p.lanes));
      h += BE.gelSVG(p.ladder, p.lanes.map(function (set, i) {
        return { label: set.join(" + "), bands: show ? p.bands[i] : [] };
      }), { hideSizes: !show });
    }
    if (p.kind === "design") h += BE.plasmidSVG(p.plasmid, show ? p.answer : [], p.feature);
    if (p.choices) {
      h += "<ul>" + p.choices.map(function (c) {
        return "<li>" + (Array.isArray(c) ? "<code>" + c[0] + "</code> — " + c[1] : esc(c)) + "</li>";
      }).join("") + "</ul>";
    }
    h += '<div class="qbtns" style="margin-top:12px"><button class="btn" id="pbReveal">' +
      (show ? "Hide the answer" : "Show the answer") + "</button></div></div>";
    if (show) h += '<div class="card"><h3>Answer</h3>' + ans +
      "<h3>How to get there</h3><p>" + esc(p.teach) + "</p></div>";
    return h + "</div>";
  }
  document.addEventListener("click", function (ev) {
    if (current !== "problems") return;
    var b = ev.target.closest("button"); if (!b) return;
    if (b.dataset.pg) {
      var gen = BE.generators.filter(function (g) { return g[0] === b.dataset.pg; })[0];
      PB.kind = b.dataset.pg; PB.prob = gen[2]();
      PB.shown = false; PB.result = null; PB.fixed = null;
      route();
    } else if (b.dataset.pfx) {
      PB.fixed = b.dataset.pfx; PB.shown = false; PB.prob = null; PB.kind = null; route();
    } else if (b.id === "pbReveal") { PB.shown = !PB.shown; route(); }
    else if (b.id === "pbShow") { PB.shown = true; route(); }
    else if (b.id === "pbNext") {
      var g2 = BE.generators.filter(function (g) { return g[0] === PB.kind; })[0];
      PB.prob = g2[2](); PB.shown = false; PB.result = null; route();
    } else if (b.id === "pbCheck") {
      var p = PB.prob, resp = {};
      $$("[data-pf]", $("#main")).forEach(function (i) { resp[i.dataset.pf] = i.value; });
      var picked = $('input[name="pbc"]:checked', $("#main"));
      if (picked) resp.choice = picked.value;
      if (p.choices && !picked) return;
      if (p.fields && Object.keys(resp).every(function (k) { return !resp[k]; })) return;
      var res = p.grade(resp);
      res.picked = picked ? +picked.value : -1;
      PB.result = res; PB.shown = true;
      var d = S.drills[PB.kind] || { n: 0, c: 0 };
      d.n++; if (res.ok) d.c++;
      S.drills[PB.kind] = d; save();
      route();
    }
  });

  /* ------------------------------------------------------------ FLASHCARDS */
  var FC = { mod: "all", kind: "all", hardOnly: false, deck: null, pos: 0, flipped: false };
  function buildDeck() {
    FC.deck = shuffle(cards.filter(function (c) {
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
    var controls = '<div class="chips">' +
      [["all", "All modules"]].concat(BE.modules.map(function (m) { return [m.id, m.short]; }))
        .map(function (x) {
          return '<button class="chip' + (FC.mod === x[0] ? " on" : "") + '" data-fm="' + x[0] + '">' +
            x[1] + "</button>";
        }).join("") + "</div>" +
      '<div class="chips">' +
      [["all", "Facts + prompts"], ["f", "Facts"], ["d", "Deeper prompts"]].map(function (x) {
        return '<button class="chip' + (FC.kind === x[0] ? " on" : "") + '" data-fk="' + x[0] + '">' +
          x[1] + "</button>";
      }).join("") +
      '<button class="chip' + (FC.hardOnly ? " on" : "") + '" id="fHard">Hard only (' + hardN +
      ')</button><button class="chip" id="fShuf">Shuffle</button></div>';
    if (!c) return "<h1>Flashcards</h1>" + controls +
      '<div class="card"><p>No cards match this filter. Mark cards hard as you study, or switch filters.</p></div>';
    var mark = S.cards[c.i] || {};
    return "<h1>Flashcards</h1>" +
      '<p class="lede">' + cards.length + " cards, generated from the study topics so they always " +
      "match what you read. Tap the card or press Space to flip.</p>" + controls +
      '<div class="fcwrap"><p class="muted">Card ' + (FC.pos + 1) + " of " + FC.deck.length + " · " +
      modTag(c.m) + " " + esc((topicById[c.t] || {}).title || "") +
      (c.k === "d" ? ' · <span class="lvl lvl3">Deeper prompt</span>' : "") +
      (mark.hard ? ' · <span class="pill pr">marked hard</span>' : "") + "</p>" +
      '<button class="fc' + (FC.flipped ? " flipped" : "") + '" id="fcard">' +
      '<span class="face front">' + c.f + '</span><span class="face back">' + c.b + "</span></button>" +
      '<div class="fcbtns"><button class="btn ghost" id="fPrev">← Prev</button>' +
      '<button class="btn bad" id="fAgain">Again</button>' +
      '<button class="btn ok" id="fGot">Got it</button>' +
      '<button class="btn ghost" id="fNext">Next →</button></div>' +
      '<p class="muted"><a href="#topic-' + c.t + '">Open the topic this came from</a></p></div>';
  };
  function fcMove(d) {
    FC.pos = Math.max(0, Math.min(FC.deck.length - 1, FC.pos + d));
    FC.flipped = false; route();
  }
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
      var c = FC.deck[FC.pos], m = S.cards[c.i] || {};
      if (b.id === "fAgain") { m.hard = true; m.miss = (m.miss || 0) + 1; }
      else { m.known = (m.known || 0) + 1; if (m.known >= 2) m.hard = false; }
      S.cards[c.i] = m; save(); fcMove(1);
    }
  });
  document.addEventListener("keydown", function (ev) {
    if (current !== "cards" || /INPUT|SELECT|TEXTAREA/.test(ev.target.tagName)) return;
    if (ev.key === " ") {
      ev.preventDefault();
      var f = $("#fcard");
      if (f) { FC.flipped = !FC.flipped; f.classList.toggle("flipped"); }
    }
    if (ev.key === "ArrowRight") fcMove(1);
    if (ev.key === "ArrowLeft") fcMove(-1);
  });

  /* -------------------------------------------------- QUESTION RENDERING */
  function sameSet(a, b) {
    if (a.length !== b.length) return false;
    var x = a.slice().sort(), y = b.slice().sort();
    return x.every(function (v, i) { return v === y[i]; });
  }
  function orderFor(q) {
    return qType(q) === "True/False" ? [0, 1] : shuffle(q.o.map(function (_, i) { return i; }));
  }
  function readPicks(container, name) {
    return $$('input[name="' + name + '"]:checked', container).map(function (i) { return +i.value; });
  }
  function renderQ(q, idx, opts) {
    var order = opts.order, multi = q.a.length > 1;
    var head = '<div class="qhead"><span class="num">' + (idx + 1) + "</span>" +
      (opts.hideMeta ? "" : modTag(q.m) + " " + lvlBadge(q.lvl)) +
      (multi ? ' <span class="pill">Select all that apply</span>' : "") + "</div>";
    var body = '<p class="qstem">' + q.q + '</p><div class="opts">' + order.map(function (oi, k) {
      var on = opts.picks.indexOf(oi) >= 0, cls = "opt";
      if (opts.showFeedback) {
        if (q.a.indexOf(oi) >= 0) cls += " right"; else if (on) cls += " wrong";
      }
      return '<label class="' + cls + '"><input type="' + (multi ? "checkbox" : "radio") +
        '" name="' + opts.name + '" value="' + oi + '"' + (on ? " checked" : "") +
        (opts.locked ? " disabled" : "") + "> <b>" + LETTERS[k] + ".</b> <span>" + q.o[oi] +
        "</span></label>";
    }).join("") + "</div>";
    var fb = "";
    if (opts.showFeedback) {
      var ok = sameSet(opts.picks, q.a);
      var letterOf = function (oi) { return LETTERS[order.indexOf(oi)]; };
      var letters = q.a.map(letterOf).sort().join(", ");
      fb = '<div class="fb ' + (ok ? "fbok" : "fbbad") + '"><p class="verdict">' +
        (ok ? "✔ Correct" : "✘ Incorrect") + " · Answer: " + letters + "</p>" +
        "<p><b>Why " + letters + " is right:</b> " + q.why + "</p><ul>" +
        order.map(function (oi) {
          return q.a.indexOf(oi) >= 0 || !q.w[oi] ? ""
            : "<li><b>Why " + letterOf(oi) + " is wrong:</b> " + q.w[oi] + "</li>";
        }).join("") + "</ul>" +
        "<p><b>Concept:</b> " + esc(q.c) +
        (topicById[q.t] ? ' · <a href="#topic-' + q.t + '">review the topic</a>' : "") + "</p>" +
        (q.trap ? "<p><b>Exam trap:</b> " + q.trap + "</p>" : "") + "</div>";
    }
    return '<div class="q" data-qid="' + q.id + '">' + head + body + fb + "</div>";
  }

  /* ------------------------------------------------------------ PRACTICE */
  var pendingTopic = null;
  var PR = { mods: [], topic: "", levels: [1, 2, 3, 4], count: 10, run: null };
  function weight(q) {
    var a = S.answers[q.id], ts = topicStats(q.t), w;
    if (!a) w = 2; else if (!a.last) w = 4; else if (a.c >= 2) w = 0.3; else w = 1;
    if (ts.acc != null && ts.acc >= 0.8 && ts.n >= 4 && q.lvl <= 2) w *= 0.3;
    return w;
  }
  function pickWeighted(pool, n) {
    var out = [], p = pool.slice();
    while (out.length < n && p.length) {
      var tot = p.reduce(function (s, q) { return s + weight(q); }, 0);
      var r = Math.random() * tot, i = 0;
      for (; i < p.length; i++) { r -= weight(p[i]); if (r <= 0) break; }
      out.push(p.splice(Math.min(i, p.length - 1), 1)[0]);
    }
    return out;
  }
  views.practice = function () {
    if (pendingTopic) {
      PR.topic = pendingTopic; PR.mods = []; PR.levels = [1, 2, 3, 4];
      pendingTopic = null; PR.run = null;
    }
    if (PR.run) return practiceRun();
    var bank = BE.questions.filter(function (q) { return q.set === "P"; });
    var topicsOpt = '<option value="">Any topic</option>' + BE.topics.map(function (t) {
      return '<option value="' + t.id + '"' + (PR.topic === t.id ? " selected" : "") + ">" +
        modById[t.m].short + " · " + esc(t.title) + "</option>";
    }).join("");
    return "<h1>Practice</h1>" +
      '<p class="lede">' + bank.length + " questions with every option explained. Feedback comes after " +
      "each answer. Questions you miss come back more often, and topics you have mastered shift " +
      "toward harder questions.</p>" +
      '<div class="card cfg"><div><span class="label">Modules</span><div class="chips">' +
      BE.modules.map(function (m) {
        return '<button class="chip' + (PR.mods.indexOf(m.id) >= 0 ? " on" : "") + '" data-pm="' +
          m.id + '">' + m.short + " " + esc(m.name) + "</button>";
      }).join("") + '</div><p class="muted">None selected means all modules.</p></div>' +
      '<div><label class="label" for="ptopic">Topic</label><select id="ptopic">' + topicsOpt + "</select></div>" +
      '<div><span class="label">Difficulty</span><div class="chips">' +
      [1, 2, 3, 4].map(function (l) {
        return '<button class="chip' + (PR.levels.indexOf(l) >= 0 ? " on" : "") + '" data-pl="' + l +
          '">' + lvlBadge(l) + "</button>";
      }).join("") + "</div></div>" +
      '<div><span class="label">Length</span><div class="chips">' +
      [5, 10, 20, 30].map(function (n) {
        return '<button class="chip' + (PR.count === n ? " on" : "") + '" data-pc="' + n + '">' + n +
          " Qs</button>";
      }).join("") + "</div></div>" +
      '<button class="btn big" id="pStart">Start practice</button></div>';
  };
  function practiceRun() {
    var r = PR.run, q = r.qs[r.i];
    if (!q) {
      var right = r.log.filter(function (x) { return x.ok; }).length;
      return "<h1>Practice complete</h1><div class=\"card\"><p class=\"big\">" + right + " / " +
        r.log.length + "</p>" +
        '<ul class="reslist">' + r.log.map(function (x) {
          var qq = qById[x.id];
          return "<li>" + (x.ok ? "✔" : "✘") + " " + modTag(qq.m) + " " +
            esc(strip(qq.q)).slice(0, 110) + "</li>";
        }).join("") + "</ul>" +
        '<p>Misses went to your <a href="#weak">error log</a>. Tag each one with why you missed it.</p>' +
        '<button class="btn" id="pAgain">New practice set</button></div>';
    }
    return "<h1>Practice</h1><p class=\"muted\">Question " + (r.i + 1) + " of " + r.qs.length +
      " · " + esc((topicById[q.t] || {}).title || "") + "</p>" +
      renderQ(q, r.i, { order: r.order, picks: r.picks || [], locked: r.answered,
                        showFeedback: r.answered, name: "pq" }) +
      '<div class="qbtns">' +
      (r.answered ? '<button class="btn" id="pNext">' +
        (r.i + 1 < r.qs.length ? "Next question →" : "See results") + "</button>"
        : '<button class="btn" id="pSubmit">Check answer</button>') +
      '<button class="btn ghost" id="pQuit">End set</button></div>';
  }
  document.addEventListener("click", function (ev) {
    if (current !== "practice") return;
    var b = ev.target.closest("button"); if (!b) return;
    var tog = function (arr, v) { var i = arr.indexOf(v); if (i >= 0) arr.splice(i, 1); else arr.push(v); };
    if (b.dataset.pm) { tog(PR.mods, b.dataset.pm); route(); }
    else if (b.dataset.pl) {
      tog(PR.levels, +b.dataset.pl);
      if (!PR.levels.length) PR.levels = [1, 2, 3, 4];
      route();
    }
    else if (b.dataset.pc) { PR.count = +b.dataset.pc; route(); }
    else if (b.id === "pStart") {
      var pool = BE.questions.filter(function (q) {
        return q.set === "P" && (!PR.mods.length || PR.mods.indexOf(q.m) >= 0) &&
          (!PR.topic || q.t === PR.topic) && PR.levels.indexOf(q.lvl) >= 0;
      });
      if (!pool.length) {
        pool = BE.questions.filter(function (q) {
          return q.set === "P" && (!PR.topic || q.t === PR.topic);
        });
      }
      if (!pool.length) return;
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
    else if (b.id === "pNext") {
      var r2 = PR.run; r2.i++; r2.answered = false; r2.picks = [];
      if (r2.qs[r2.i]) r2.order = orderFor(r2.qs[r2.i]);
      route();
    }
    else if (b.id === "pQuit" || b.id === "pAgain") { PR.run = null; route(); }
  });
  document.addEventListener("change", function (ev) {
    if (ev.target.id === "ptopic") PR.topic = ev.target.value;
  });

  /* ------------------------------------------------------------ EXAMS */
  var EXAMS = [
    { id: "MA", name: "Mock exam A", sub: "True/false from the review statements", min: 30 },
    { id: "MB", name: "Mock exam B", sub: "The other half of the statement bank", min: 30 },
    { id: "MX", name: "Mixed mock", sub: "30 questions drawn from everything, weighted to your misses", min: 40 }
  ];
  var EX = { run: null, result: null, timer: null };
  function examQuestions(id) {
    if (id !== "MX") return shuffle(BE.questions.filter(function (q) { return q.set === id; }));
    var pool = BE.questions.slice();
    var missed = pool.filter(function (q) { var a = S.answers[q.id]; return a && !a.last; });
    var chosen = shuffle(missed).slice(0, 12);
    var rest = pickWeighted(pool.filter(function (q) { return chosen.indexOf(q) < 0; }), 30 - chosen.length);
    return shuffle(chosen.concat(rest));
  }
  views.exams = function () {
    if (EX.run) return examRun();
    if (EX.result) return examResult();
    return "<h1>Exams</h1>" +
      '<p class="lede">No hints, no module labels, no feedback until you submit. Timed. ' +
      "Mock A and B are built from the professor’s own statements, with about four in ten altered " +
      "by a single word — the trap his wording invites.</p>" +
      '<div class="grid g2">' + EXAMS.map(function (e) {
        var hist = S.exams[e.id] || [], last = hist[hist.length - 1];
        var n = e.id === "MX" ? 30 : BE.questions.filter(function (q) { return q.set === e.id; }).length;
        return '<div class="card exam"><h2>' + esc(e.name) + '</h2><p class="muted">' + esc(e.sub) +
          " · " + n + " questions · " + e.min + " min</p>" +
          (last ? "<p>Last score: <b>" + last.score + "/" + last.total + "</b> (" +
            Math.round(last.score / last.total * 100) + "%) on " +
            new Date(last.ts).toLocaleDateString() + "</p>"
            : "<p class='muted'>Not taken yet.</p>") +
          '<button class="btn" data-exam="' + e.id + '">' + (last ? "Retake" : "Start") + "</button></div>";
      }).join("") + "</div>" +
      '<p class="muted">Mock A and B never appear in Practice, so they test real transfer. ' +
      "The mixed mock is rebuilt each time from what you have missed.</p>";
  };
  function examRun() {
    var r = EX.run, left = Math.max(0, r.end - Date.now());
    var mm = Math.floor(left / 60000), ss = Math.floor(left % 60000 / 1000);
    return '<div class="exambar"><b>' + esc(r.meta.name) + '</b><span id="timer" class="num">' + mm +
      ":" + (ss < 10 ? "0" : "") + ss + '</span><span class="muted" id="answered">' +
      r.qs.filter(function (q) { return (r.picks[q.id] || []).length; }).length + "/" + r.qs.length +
      ' answered</span><button class="btn" id="exSubmit">Submit exam</button></div>' +
      '<div class="examqs">' + r.qs.map(function (q, i) {
        return renderQ(q, i, { order: r.orders[q.id], picks: r.picks[q.id] || [], locked: false,
                               showFeedback: false, name: "ex-" + q.id, hideMeta: true });
      }).join("") + "</div>" +
      '<div class="qbtns"><button class="btn big" id="exSubmit2">Submit exam</button>' +
      '<button class="btn ghost" id="exQuit">Abandon</button></div>' +
      '<div class="confirm" id="exConfirm" hidden><p id="exConfirmMsg"></p>' +
      '<button class="btn" id="exYes">Submit now</button>' +
      '<button class="btn ghost" id="exNo">Keep working</button></div>';
  }
  function tick() {
    if (!EX.run) { clearInterval(EX.timer); return; }
    var left = EX.run.end - Date.now(), el = $("#timer");
    if (left <= 0) { finishExam(); return; }
    if (el) {
      var mm = Math.floor(left / 60000), ss = Math.floor(left % 60000 / 1000);
      el.textContent = mm + ":" + (ss < 10 ? "0" : "") + ss;
      el.classList.toggle("low", left < 5 * 60000);
    }
  }
  function finishExam() {
    clearInterval(EX.timer);
    var r = EX.run; if (!r) return;
    $$(".examqs .q").forEach(function (div) {
      r.picks[div.dataset.qid] = readPicks(div, "ex-" + div.dataset.qid);
    });
    var res = { meta: r.meta, qs: r.qs, orders: r.orders, picks: r.picks, ok: {},
                dur: Date.now() - r.start }, score = 0;
    r.qs.forEach(function (q) {
      var p = r.picks[q.id] || [], ok = sameSet(p, q.a);
      res.ok[q.id] = ok; if (ok) score++;
      recordAnswer(q, ok, p, r.meta.id);
    });
    res.score = score;
    (S.exams[r.meta.id] = S.exams[r.meta.id] || []).push({
      ts: Date.now(), score: score, total: r.qs.length, dur: res.dur });
    save();
    EX.run = null; EX.result = res; route();
  }
  function breakdown(res, keyFn, labelFn) {
    var g = {};
    res.qs.forEach(function (q) {
      var k = keyFn(q);
      g[k] = g[k] || { n: 0, c: 0 };
      g[k].n++; if (res.ok[q.id]) g[k].c++;
    });
    return Object.keys(g).map(function (k) {
      return { k: k, label: labelFn(k), n: g[k].n, c: g[k].c, acc: g[k].c / g[k].n };
    });
  }
  function examResult() {
    var res = EX.result, tot = res.qs.length, p = res.score / tot;
    var byMod = breakdown(res, function (q) { return q.m; },
      function (k) { return modTag(k) + " " + esc(modById[k].name); });
    var byTopic = breakdown(res, function (q) { return q.t; },
      function (k) { return esc(topicById[k].title); })
      .sort(function (a, b) { return a.acc - b.acc; });
    var row = function (x) {
      return [x.label, x.c + "/" + x.n,
        '<span class="bar sm"><i style="width:' + Math.round(x.acc * 100) + '%"></i></span> ' + pct(x.acc)];
    };
    var tiers = byTopic.filter(function (x) { return x.c < x.n; }).map(function (x) {
      var miss = x.n - x.c;
      var tier = x.acc < 0.4 && miss >= 2 ? 1 : x.acc < 0.6 ? 2 : x.acc < 0.8 ? 3 : 4;
      if (miss === 1 && x.n === 1) tier = 3;
      return { x: x, tier: tier };
    }).sort(function (a, b) { return a.tier - b.tier; });
    var tierName = ["", "Critical weakness", "Major weakness", "Moderate weakness", "Minor weakness"];
    var weakRep = tiers.length ? '<ol class="weakrep">' + tiers.map(function (w) {
      return '<li class="tier' + w.tier + '"><b>' + tierName[w.tier] + ":</b> " + w.x.label + " (" +
        w.x.c + "/" + w.x.n + ') → <a href="#topic-' + w.x.k +
        '">re-study the topic</a>, answer its recall prompts aloud, then practise it at Level 3.</li>';
    }).join("") + "</ol>" : "<p>No misses. Take the other mock or move to Level 3–4 practice.</p>";
    return "<h1>" + esc(res.meta.name) + ': results</h1><div class="grid g3">' +
      '<div class="card stat"><span class="label">Score</span><span class="big">' + res.score +
      "<small>/" + tot + '</small></span><span class="muted">' + pct(p) + " · " +
      Math.round(res.dur / 60000) + " min</span></div>" +
      '<div class="card stat"><span class="label">Verdict</span><span class="big sm">' +
      (p >= 0.9 ? "Exam ready" : p >= 0.75 ? "Close" : p >= 0.6 ? "Needs work" : "Rebuild") +
      '</span><span class="muted">' +
      (p >= 0.75 ? "Work the misses below." : "Use the weakness report before the next mock.") + "</span></div>" +
      '<div class="card stat"><span class="label">Next step</span><span class="muted">Open the ' +
      '<a href="#weak">error log</a> and tag why you missed each one. The tags show whether the ' +
      "problem is knowledge, vocabulary or misreading.</span></div></div>" +
      '<section class="card"><h2>Weakness report</h2>' + weakRep + "</section>" +
      '<div class="grid g2"><section class="card"><h2>By module</h2>' +
      table(["Module", "Score", "Accuracy"], byMod.map(row)) + "</section>" +
      '<section class="card"><h2>By topic</h2>' +
      table(["Topic", "Score", "Accuracy"], byTopic.map(row)) + "</section></div>" +
      '<section class="card"><h2>Answer review</h2><div class="chips">' +
      '<button class="chip on" id="rvMiss">Misses only</button>' +
      '<button class="chip" id="rvAllQ">Show all</button></div>' +
      '<div id="exreview">' + reviewList(res, true) + "</div></section>" +
      '<div class="qbtns"><button class="btn" id="exBack">Back to exams</button></div>';
  }
  function reviewList(res, missOnly) {
    return res.qs.map(function (q, i) {
      if (missOnly && res.ok[q.id]) return "";
      return renderQ(q, i, { order: res.orders[q.id], picks: res.picks[q.id] || [], locked: true,
                             showFeedback: true, name: "rv-" + q.id });
    }).join("") || "<p>No misses.</p>";
  }
  document.addEventListener("click", function (ev) {
    if (current !== "exams") return;
    var b = ev.target.closest("button"); if (!b) return;
    if (b.dataset.exam) {
      var meta = EXAMS.filter(function (e) { return e.id === b.dataset.exam; })[0];
      var qs = examQuestions(meta.id), orders = {};
      qs.forEach(function (q) { orders[q.id] = orderFor(q); });
      EX.result = null;
      EX.run = { meta: meta, qs: qs, orders: orders, picks: {}, start: Date.now(),
                 end: Date.now() + meta.min * 60000 };
      clearInterval(EX.timer); EX.timer = setInterval(tick, 1000);
      route();
    }
    else if (b.id === "exSubmit" || b.id === "exSubmit2") {
      var r = EX.run;
      $$(".examqs .q").forEach(function (div) {
        r.picks[div.dataset.qid] = readPicks(div, "ex-" + div.dataset.qid);
      });
      var un = r.qs.filter(function (q) { return !(r.picks[q.id] || []).length; }).length;
      var box = $("#exConfirm");
      $("#exConfirmMsg").textContent = un
        ? un + " question" + (un > 1 ? "s are" : " is") + " unanswered. Submit anyway?"
        : "Submit your exam for grading?";
      box.hidden = false; box.scrollIntoView({ block: "center" });
    }
    else if (b.id === "exYes") finishExam();
    else if (b.id === "exNo") $("#exConfirm").hidden = true;
    else if (b.id === "exQuit") { clearInterval(EX.timer); EX.run = null; route(); }
    else if (b.id === "exBack") { EX.result = null; route(); }
    else if (b.id === "rvMiss" || b.id === "rvAllQ") {
      $("#exreview").innerHTML = reviewList(EX.result, b.id === "rvMiss");
      $("#rvMiss").classList.toggle("on", b.id === "rvMiss");
      $("#rvAllQ").classList.toggle("on", b.id === "rvAllQ");
    }
  });
  document.addEventListener("change", function (ev) {
    if (current === "exams" && EX.run && ev.target.name && ev.target.name.indexOf("ex-") === 0) {
      var id = ev.target.name.slice(3), div = ev.target.closest(".q");
      EX.run.picks[id] = readPicks(div, ev.target.name);
      var a = $("#answered");
      if (a) a.textContent = EX.run.qs.filter(function (q) {
        return (EX.run.picks[q.id] || []).length;
      }).length + "/" + EX.run.qs.length + " answered";
    }
  });

  /* ------------------------------------------------------------ WEAK AREAS */
  var MISTAKE_TYPES = ["Knowledge gap", "Misread question", "Vocabulary confusion",
    "Mixed up two concepts", "Failed application", "Forgot detail", "Overthinking",
    "Changed correct answer", "Other"];
  views.weak = function () {
    var conf = BE.topics.map(function (t) {
      var s = topicStats(t.id), c = (S.topics[t.id] || {}).conf, pr = topicPriority(t);
      var flag = c && s.acc != null && c >= 4 && s.acc < 0.6
        ? ' <span class="pill pr">overconfident</span>'
        : c && s.acc != null && c <= 2 && s.acc >= 0.8
        ? ' <span class="pill pg">underconfident</span>' : "";
      return { row: ['<a href="#topic-' + t.id + '">' + modTag(t.m) + " " + esc(t.title) + "</a>",
                     c ? c + "/5" : "—",
                     pct(s.acc) + ' <span class="muted">(' + s.c + "/" + s.n + ")</span>" + flag,
                     '<span class="prio p' + pr + '">' + pr + "</span>"],
               pr: pr, acc: s.acc };
    }).sort(function (a, b) {
      var o = { High: 0, Medium: 1, Low: 2 };
      return o[a.pr] - o[b.pr] || (a.acc == null ? 1 : 0) - (b.acc == null ? 1 : 0) ||
        (a.acc || 0) - (b.acc || 0);
    });
    var typeCounts = {};
    S.errors.forEach(function (e) { if (e.type) typeCounts[e.type] = (typeCounts[e.type] || 0) + 1; });
    var tc = Object.keys(typeCounts).sort(function (a, b) { return typeCounts[b] - typeCounts[a]; });
    var topicMiss = {};
    S.errors.forEach(function (e) {
      var q = qById[e.q]; if (q) topicMiss[q.t] = (topicMiss[q.t] || 0) + 1;
    });
    var tm = Object.keys(topicMiss)
      .sort(function (a, b) { return topicMiss[b] - topicMiss[a]; }).slice(0, 6);
    var rec = tm.length ? "<ol>" + tm.map(function (tid) {
      return '<li><a href="#topic-' + tid + '">' + esc(topicById[tid].title) + "</a>: " +
        topicMiss[tid] + " miss" + (topicMiss[tid] > 1 ? "es" : "") +
        ". Re-read the traps, then practise it at Level 3.</li>";
    }).join("") + "</ol>" : "<p class='muted'>Nothing yet. Missed questions land here automatically.</p>";
    var log = S.errors.length
      ? '<div class="tw"><table class="t elog"><thead><tr><th>Topic</th><th>Question</th>' +
        "<th>My answer</th><th>Correct idea</th><th>Why I missed it</th></tr></thead><tbody>" +
        S.errors.slice(0, 120).map(function (e, i) {
          var q = qById[e.q]; if (!q) return "";
          return "<tr><td>" + modTag(q.m) + " " + esc(topicById[q.t].title) + "</td><td>" +
            esc(strip(q.q)) + "</td><td>" + esc(e.pick) + "</td><td>" +
            q.a.map(function (a) { return q.o[a]; }).join("; ") + '<br><span class="muted">' +
            q.why + '</span></td><td><select data-etype="' + i +
            '" aria-label="Mistake type"><option value="">Tag…</option>' +
            MISTAKE_TYPES.map(function (m) {
              return "<option" + (e.type === m ? " selected" : "") + ">" + m + "</option>";
            }).join("") + "</select></td></tr>";
        }).join("") + "</tbody></table></div>"
      : "<p class='muted'>No errors logged yet.</p>";
    return "<h1>Weak areas</h1>" +
      '<p class="lede">Your actual performance, not how you feel. Priority is driven by accuracy; ' +
      "the confidence you set on each topic sits beside it so overconfidence shows up.</p>" +
      '<div class="grid g2"><section class="card"><h2>Recommended review</h2>' + rec + "</section>" +
      '<section class="card"><h2>Mistake types</h2>' +
      (tc.length ? table(["Type", "Count"], tc.map(function (k) { return [esc(k), typeCounts[k]]; }))
        : "<p class='muted'>Tag errors below to see which kind of mistake you make most.</p>") +
      "</section></div>" +
      '<section class="card"><h2>Confidence tracker</h2>' +
      table(["Topic", "Confidence", "Accuracy", "Priority"], conf.map(function (x) { return x.row; })) +
      "</section>" +
      '<section class="card"><h2>My error log</h2>' + log +
      (S.errors.length ? '<button class="btn ghost" id="redoErr">Practise my missed questions</button>' : "") +
      "</section>";
  };
  document.addEventListener("change", function (ev) {
    if (ev.target.dataset && ev.target.dataset.etype != null) {
      S.errors[+ev.target.dataset.etype].type = ev.target.value; save();
    }
  });
  document.addEventListener("click", function (ev) {
    if (ev.target.id !== "redoErr") return;
    var ids = [];
    S.errors.forEach(function (e) {
      if (ids.indexOf(e.q) < 0 && qById[e.q] && qById[e.q].set === "P") ids.push(e.q);
    });
    var qs = shuffle(ids.map(function (id) { return qById[id]; })).slice(0, 20);
    if (!qs.length) return;
    PR.run = { qs: qs, i: 0, order: orderFor(qs[0]), answered: false, picks: [], log: [] };
    if (location.hash === "#practice") route(); else location.hash = "#practice";
  });

  /* ------------------------------------------------------------ CRAM */
  views.cram = function () {
    var misses = {};
    S.errors.forEach(function (e) { var q = qById[e.q]; if (q) misses[q.c] = (misses[q.c] || 0) + 1; });
    var mk = Object.keys(misses).sort(function (a, b) { return misses[b] - misses[a]; }).slice(0, 10);
    return "<h1>Final cram packet</h1>" +
      '<p class="lede">Only the highest-value facts. Read it twice the night before and once on the ' +
      "morning. Cover each bullet and recite it before you read it.</p>" +
      (mk.length ? '<section class="card callout trap"><h2>Things you keep missing</h2><ul>' +
        mk.map(function (c) { return "<li>" + esc(c) + " (" + misses[c] + "×)</li>"; }).join("") +
        "</ul></section>" : "") +
      '<div class="cram">' + BE.cram.map(function (s) {
        return '<section class="card"><h2>' + s.h + "</h2><ul>" +
          s.items.map(function (i) { return "<li>" + i + "</li>"; }).join("") + "</ul></section>";
      }).join("") + "</div>" +
      '<section class="card" id="final"><h2>Readiness checklist</h2>' +
      '<p class="muted">Only tick a line if you can do it without notes, out loud.</p>' +
      '<ul class="fcheck">' + BE.readiness.map(function (c, i) {
        return '<li><label><input type="checkbox" data-final="' + i + '"' +
          (S.finalCheck[i] ? " checked" : "") + "> " + c + "</label></li>";
      }).join("") + "</ul></section>";
  };
  document.addEventListener("change", function (ev) {
    if (ev.target.dataset && ev.target.dataset.final != null) {
      S.finalCheck[ev.target.dataset.final] = ev.target.checked; save();
    }
  });


  /* ------------------------------------------------------ REVIEW GUIDE */
  function guideItem(ref) {
    var kind = ref[0], n = +ref.slice(1), r, topic;
    if (kind === "t") {
      r = BE.reviewTrue[n - 1];
      return '<li><span class="num">Statement ' + n + "</span> " + esc(r[2]) + "</li>";
    }
    if (kind === "m") {
      r = BE.reviewMC[n - 1];
      var why = BE.guideMC["m" + n] || [];
      return '<li><span class="num">Multiple choice ' + n + "</span> <b>" + esc(r[2]) + "</b>" +
        '<ol class="rvopts">' + r[3].map(function (o, i) {
          return '<li class="' + (i === r[4] ? "right" : "") + '">' + esc(o) + "</li>";
        }).join("") + "</ol>" +
        "<details><summary>Answer " + LETTERS[r[4]] + ": why, and why not the others</summary><ul>" +
        why.map(function (w) { return "<li>" + w + "</li>"; }).join("") + "</ul></details></li>";
    }
    r = BE.reviewOther[n - 1];
    return '<li><span class="num">Problem ' + n + "</span> <b>" + esc(r[3]) + "</b>" +
      "<details><summary>Show the answer</summary><p class=\"ans\">" + esc(r[4]) + "</p><p>" +
      esc(r[5]) + "</p>" + (r[2] ? '<p><a href="#prob-' + r[2] + '">Work the problem</a></p>' : "") +
      "</details></li>";
  }
  views.guide = function () {
    if (!S.guideDone) S.guideDone = {};
    var done = BE.guide.filter(function (g) { return S.guideDone[g.id]; }).length;
    return "<h1>Review guide</h1>" +
      '<p class="lede">The professor’s review sheet, explained concept by concept. Each section says what ' +
      "the idea is, shows the exact review items it covers with their answers, lists how the exam could " +
      "twist them, and ends with questions to answer out loud. All 71 items appear once.</p>" +
      '<div class="card"><p><b>' + done + " of " + BE.guide.length + "</b> sections ticked as explainable " +
      'without notes.</p><span class="bar"><i style="width:' + Math.round(done / BE.guide.length * 100) +
      '%"></i></span></div>' +
      '<nav class="toc">' + BE.guide.map(function (g) {
        return '<a href="#guide-' + g.id + '">' + (S.guideDone[g.id] ? "✔ " : "") + esc(g.title) + "</a>";
      }).join("") + "</nav>" +
      BE.guide.map(function (g) {
        return '<section class="card" id="guide-' + g.id + '"><h2>' + esc(g.title) + "</h2>" +
          '<p class="muted">Covers ' + g.items.length + " review item" + (g.items.length > 1 ? "s" : "") +
          " · " + g.topics.map(function (t) { return topicLink(t); }).join(" · ") + "</p>" +
          '<div class="tsec"><h3>The idea</h3>' + g.idea + "</div>" +
          (g.table ? table(g.table.head, g.table.rows) : "") +
          '<div class="callout hot"><b>Key points</b><ul>' +
          g.points.map(function (p) { return "<li>" + p + "</li>"; }).join("") + "</ul></div>" +
          '<div class="tsec"><h3>The review items</h3><ul class="rv">' + g.items.map(guideItem).join("") +
          "</ul></div>" +
          '<div class="callout trap"><b>How the exam could twist it</b><ul>' +
          g.twists.map(function (p) { return "<li>" + p + "</li>"; }).join("") + "</ul></div>" +
          '<div class="tsec recall"><h3>Test yourself (answer aloud first)</h3><ol>' +
          g.test.map(function (q) {
            return "<li>" + q[0] + "<details><summary>Show answer</summary><p>" + q[1] + "</p></details></li>";
          }).join("") + "</ol></div>" +
          '<label class="fcheck"><input type="checkbox" data-gdone="' + g.id + '"' +
          (S.guideDone[g.id] ? " checked" : "") + "> I can explain this without notes</label></section>";
      }).join("");
  };
  document.addEventListener("change", function (ev) {
    var t = ev.target;
    if (t.dataset && t.dataset.gdone) {
      if (!S.guideDone) S.guideDone = {};
      S.guideDone[t.dataset.gdone] = t.checked; save();
    }
  });
  // in-page anchors like #guide-g-lac would normally leave the view, so scroll instead
  window.addEventListener("hashchange", function () {
    var h = location.hash.slice(1);
    if (h.indexOf("guide-") === 0) {
      var el = document.getElementById(h);
      if (el) el.scrollIntoView();
    }
  });

  /* ------------------------------------------------------------ boot */
  nav();
  $("#sync").textContent = syncLabel();
  route();
})();
