/* Practice bank, quiz runner, mock exams, weakness tracker. */
(function () {
  "use strict";
  var SG = window.SG, APP = window.APP, $ = APP.$, $$ = APP.$$, esc = APP.esc;
  function S() { return APP.S; }

  /* ------------------------------------------------------------ question rendering */
  function qType(q) { return q.o.length === 2 && APP.strip(q.o[0]) === "True" ? "True / False" : q.a.length > 1 ? "Select all that apply" : "Multiple choice"; }
  APP.qType = qType;
  function setOk(q, picks) { if (picks.length !== q.a.length) return false; for (var i = 0; i < picks.length; i++) if (q.a.indexOf(picks[i]) < 0) return false; return true; }
  APP.setOk = setOk;
  function qHead(q, num) {
    var t = APP.topicById[q.t];
    return '<div class="qhead">' + (num ? '<span class="num">' + num + "</span>" : "") + APP.modTag(q.m) + APP.lvlBadge(q.lvl) + '<span class="pill">' + qType(q) + '</span><span class="small muted">' + esc(t.title) + (q.set !== "P" ? " · " + APP.SETS[q.set] : "") + "</span></div>";
  }
  APP.renderQ = function (q, opts) {
    opts = opts || {};
    var picks = opts.picks || [], done = !!opts.done, multi = q.a.length > 1, name = "q_" + q.id + (opts.suffix || "");
    var h = '<div class="q" id="Q' + q.id + '">' + qHead(q, opts.num) + '<div class="qstem">' + q.q + "</div>" + (q.fig ? '<div class="qfig">' + FIG.html(q.fig) + "</div>" : "") + '<div class="opts">';
    q.o.forEach(function (o, i) {
      var cls = "", on = picks.indexOf(i) >= 0;
      if (done) cls = q.a.indexOf(i) >= 0 ? " right" : on ? " wrong" : "";
      var ow = done && opts.explain && q.w[i] ? '<span class="ow">' + q.w[i] + "</span>" : "";
      h += '<label class="opt' + cls + '"><input type="' + (multi ? "checkbox" : "radio") + '" name="' + name + '" value="' + i + '"' + (on ? " checked" : "") + (done ? " disabled" : "") + "><span>" + APP.LET[i] + ". " + o + ow + "</span></label>";
    });
    h += "</div>";
    if (done && opts.explain) h += feedback(q, picks);
    return h + (opts.tail || "") + "</div>";
  };
  function feedback(q, picks) {
    var ok = setOk(q, picks), t = APP.topicById[q.t];
    var h = '<div class="fb ' + (ok ? "fbok" : "fbbad") + '"><span class="verdict">' + (ok ? "Correct." : picks.length ? "Not quite." : "Not answered.") + "</span> " + (ok ? "" : "Correct answer: <b>" + q.a.map(function (a) { return APP.LET[a]; }).join(", ") + "</b>.") +
      '<p style="margin:6px 0"><b>Why:</b> ' + q.why + "</p>";
    if (!ok && q.set !== "P") h += '<p class="small muted">Class-practice items carry a single explanation; open the lesson for detail.</p>';
    h += '<p class="small" style="margin:0"><b>Concept tested:</b> ' + esc(q.c) + (q.trap ? " · <b>Trap:</b> " + q.trap : "") + '</p><p class="small" style="margin:4px 0 0"><b>Review next:</b> <a href="#learn-' + t.id + '">' + esc(t.title) + "</a></p></div>";
    return h;
  }
  APP.feedback = feedback;
  function readPicks(q, suffix) { return $$('input[name="q_' + q.id + (suffix || "") + '"]:checked').map(function (x) { return +x.value; }); }
  APP.readPicks = readPicks;
  function typeSelect(err) {
    if (!err) return "";
    return '<div class="row small" style="margin-top:8px"><label class="lbl" for="et' + err.id + '" style="margin:0">What went wrong?</label><select id="et' + err.id + '" data-err="' + err.id + '">' + SG.errorTypes.map(function (t) { return "<option" + (t === err.type ? " selected" : "") + ">" + t + "</option>"; }).join("") + '</select><span class="muted">Saved to your error log.</span></div>';
  }
  APP.bindErrSelects = function (root) {
    $$("[data-err]", root).forEach(function (s) { s.addEventListener("change", function () { var id = s.getAttribute("data-err"); S().errors.forEach(function (e) { if (e.id === id) { e.type = s.value; e.auto = false; } }); APP.save(); APP.toast("Error type saved"); }); });
  };

  /* ------------------------------------------------------------ quiz runner (one question at a time) */
  var RUN = null;
  APP.startQuiz = function (ids, opts) {
    opts = opts || {};
    RUN = { ids: ids, i: 0, picks: {}, done: {}, errs: {}, title: opts.title || "Practice", timed: !!opts.timed, endAt: opts.timed ? Date.now() + ids.length * 75 * 1000 : 0, finished: false, ctx: opts.ctx || "Practice" };
    if (location.hash === "#practice-run") APP.route();
    else if (/^#(practice-t-|practice-tse|tutor-)/.test(location.hash)) location.replace("#practice-run");
    else location.hash = "practice-run";
  };
  function runView() {
    if (!RUN) { location.hash = "practice"; return ""; }
    if (RUN.finished) return summaryView();
    var q = APP.qById[RUN.ids[RUN.i]], done = !!RUN.done[q.id], n = RUN.ids.length, answered = Object.keys(RUN.done).length;
    var right = Object.keys(RUN.done).filter(function (k) { return setOk(APP.qById[k], RUN.picks[k]); }).length;
    var h = '<div class="exambar"><b>' + esc(RUN.title) + '</b><span class="num small">Question ' + (RUN.i + 1) + " / " + n + "</span><span class=\"small\">" + right + "/" + answered + " right</span>" + (RUN.timed ? '<span class="timer" id="timer"></span>' : "") + '<button class="btn ghost sm" id="qend" style="' + (RUN.timed ? "" : "margin-left:auto") + '">End quiz</button></div>';
    h += APP.renderQ(q, { num: RUN.i + 1, picks: RUN.picks[q.id] || [], done: done, explain: true, tail: done ? typeSelect(RUN.errs[q.id]) : "" });
    h += '<div class="qbtns">' + (!done ? '<button class="btn" id="qsub">Submit answer</button><button class="btn ghost" id="qskip">Skip</button>' : '<button class="btn" id="qnext">' + (RUN.i < n - 1 ? "Next question →" : "See results") + "</button>") + "</div>";
    APP.after(function () {
      $("#qend").addEventListener("click", function () { RUN.finished = true; APP.rerender(); });
      if (!done) {
        $("#qsub").addEventListener("click", function () {
          var p = readPicks(q); if (!p.length) { APP.toast("Choose an answer first"); return; }
          RUN.picks[q.id] = p; RUN.done[q.id] = true; RUN.errs[q.id] = APP.record(q, setOk(q, p), p, RUN.ctx); APP.rerender();
        });
        $("#qskip").addEventListener("click", function () { RUN.ids.push(RUN.ids.splice(RUN.i, 1)[0]); APP.rerender(); });
      } else {
        $("#qnext").addEventListener("click", function () { if (RUN.i < n - 1) { RUN.i++; } else RUN.finished = true; APP.route(); });
        APP.bindErrSelects($("#main"));
      }
      if (RUN.timed) startTimer(RUN.endAt, function () { RUN.finished = true; APP.toast("Time's up"); APP.rerender(); });
    });
    return h;
  }
  function startTimer(endAt, onEnd) {
    var el = $("#timer"); if (!el) return;
    var tick = function () {
      var left = Math.max(0, Math.round((endAt - Date.now()) / 1000));
      el.textContent = Math.floor(left / 60) + ":" + String(left % 60).padStart(2, "0"); el.classList.toggle("low", left < 60);
      if (left <= 0) { clearInterval(iv); onEnd(); }
    };
    var iv = setInterval(tick, 1000); tick(); APP.cleanup = function () { clearInterval(iv); };
  }
  function summaryView() {
    var ids = Object.keys(RUN.done), right = ids.filter(function (k) { return setOk(APP.qById[k], RUN.picks[k]); });
    var missed = ids.filter(function (k) { return right.indexOf(k) < 0; });
    var byT = {}; ids.forEach(function (k) { var q = APP.qById[k]; var x = byT[q.t] = byT[q.t] || { n: 0, c: 0 }; x.n++; if (right.indexOf(k) >= 0) x.c++; });
    var h = "<h1>" + esc(RUN.title) + ': results</h1><div class="grid g3"><div class="card stat"><span class="label">Score</span><p class="big">' + right.length + "<small>/" + ids.length + "</small></p>" + APP.bar(ids.length ? right.length / ids.length * 100 : 0) + '</div><div class="card stat"><span class="label">Skipped / unanswered</span><p class="big">' + (RUN.ids.length - ids.length) + "</p></div></div>";
    if (ids.length) h += '<div class="card"><h2>By topic</h2>' + APP.table(["Topic", "Score", "Review"], Object.keys(byT).sort(function (a, b) { return byT[a].c / byT[a].n - byT[b].c / byT[b].n; }).map(function (t) { return [esc(APP.topicById[t].title), byT[t].c + "/" + byT[t].n, byT[t].c < byT[t].n ? '<a href="#learn-' + t + '">Re-study</a>' : '<span class="pill pg">solid</span>']; })) + "</div>";
    if (missed.length) h += '<div class="card"><h2>Questions you missed</h2><ul>' + missed.map(function (k) { var q = APP.qById[k]; return "<li>" + APP.strip(q.q).slice(0, 140) + ' <span class="small muted">(answer: ' + q.a.map(function (a) { return APP.strip(q.o[a]); }).join("; ") + ")</span></li>"; }).join("") + '</ul><button class="btn" id="rmiss">Retry these ' + missed.length + "</button></div>";
    h += '<div class="row"><a class="btn ghost" href="#practice">New quiz</a><a class="btn ghost" href="#weak">Error log</a></div>';
    APP.after(function () { var b = $("#rmiss"); if (b) b.addEventListener("click", function () { APP.startQuiz(APP.shuffle(missed), { title: "Retry missed", ctx: "Retry" }); }); });
    return h;
  }

  /* ------------------------------------------------------------ practice config */
  var PC = { src: { P: true, SV: true, K: false, C: false, W: false }, mods: {}, topic: "all", lv: { 1: true, 2: true, 3: true, 4: true }, status: "all", count: 15, timed: false, adaptive: true };
  function filtered() {
    var s = S(), mods = Object.keys(PC.mods).filter(function (k) { return PC.mods[k]; });
    return SG.questions.filter(function (q) {
      if (!PC.src[q.set]) return false;
      if (mods.length && mods.indexOf(q.m) < 0) return false;
      if (PC.topic !== "all" && q.t !== PC.topic) return false;
      if (q.set === "P" && !PC.lv[q.lvl]) return false;
      var a = s.answers[q.id];
      if (PC.status === "new" && a) return false;
      if (PC.status === "missed" && !(a && a.last === false)) return false;
      return true;
    });
  }
  APP.adaptivePick = function (list, k) {
    var s = S();
    var scored = list.map(function (q) {
      var a = s.answers[q.id], ts = APP.topicStats(q.t), w = Math.random();
      if (!a) w += 2; else if (a.last === false) w += 3; else w -= 1;
      var strong = ts.acc != null && ts.acc >= 0.75 && ts.seen >= 4;
      if (strong && q.lvl >= 3) w += 1.5; if (!strong && q.lvl <= 2) w += 0.8;
      return [w, q.id];
    }).sort(function (a, b) { return b[0] - a[0]; });
    return scored.slice(0, k).map(function (x) { return x[1]; });
  };
  APP.views.practice = function (h) {
    if (h === "practice-run") return runView();
    if (h.indexOf("practice-t-") === 0) {
      var tid = h.slice(11), ids = SG.questions.filter(function (q) { return q.t === tid && q.set !== "XA" && q.set !== "XB"; });
      setTimeout(function () { APP.startQuiz(APP.adaptivePick(ids, Math.min(12, ids.length)), { title: "Topic quiz: " + APP.topicById[tid].title, ctx: "Topic quiz" }); }, 0);
      return '<p class="muted">Building the quiz…</p>';
    }
    if (h === "practice-tse") {
      var tseIds = ["sv38", "sv39", "sv40", "sv41", "sv42", "b81", "b82", "b83", "b32", "a35", "b84", "b85", "xb37"].filter(function (id) { return APP.qById[id] && APP.qById[id].set !== "XB"; });
      setTimeout(function () { APP.startQuiz(APP.shuffle(tseIds), { title: "Sixth Extinction concepts", ctx: "TSE quiz" }); }, 0);
      return '<p class="muted">Building the quiz…</p>';
    }
    var list = filtered(), s = S();
    var counts = {}; SG.questions.forEach(function (q) { counts[q.set] = (counts[q.set] || 0) + 1; });
    var tops = SG.topics.filter(function (t) { var m = Object.keys(PC.mods).filter(function (k) { return PC.mods[k]; }); return !m.length || m.indexOf(t.m) >= 0; });
    var out = '<h1>Practice question bank</h1><p class="lede">' + counts.P + " original questions (4 difficulty levels, every wrong option explained), " + counts.SV + " variations of the professor's questions, and " + (counts.K + counts.C + counts.W) + " questions transcribed from your Kahoot, Canvas and Woolink practice. Mock-exam questions are held out. Answers stay hidden until you submit.</p>";
    out += '<div class="card"><div class="grid g2"><div><span class="label">Sources</span><div class="chips">' + [["P", "Original (" + counts.P + ")"], ["SV", "Professor variations (" + counts.SV + ")"], ["K", "Kahoot (" + counts.K + ")"], ["C", "Canvas (" + counts.C + ")"], ["W", "Woolink (" + counts.W + ")"]].map(function (x) { return '<button class="chip' + (PC.src[x[0]] ? " on" : "") + '" data-src="' + x[0] + '" aria-pressed="' + !!PC.src[x[0]] + '">' + x[1] + "</button>"; }).join("") + "</div></div>" +
      '<div><span class="label">Modules (none = all)</span><div class="chips">' + SG.modules.map(function (m) { return '<button class="chip' + (PC.mods[m.id] ? " on" : "") + '" data-mod="' + m.id + '" aria-pressed="' + !!PC.mods[m.id] + '">' + m.short + " " + esc(m.name) + "</button>"; }).join("") + "</div></div>" +
      "<div>" + APP.sel("ptop", "Topic", [["all", "All topics"]].concat(tops.map(function (t) { return [t.id, t.title]; })), PC.topic) + "</div>" +
      '<div><span class="label">Difficulty (original questions)</span><div class="chips">' + [1, 2, 3, 4].map(function (l) { return '<button class="chip' + (PC.lv[l] ? " on" : "") + '" data-lv="' + l + '" aria-pressed="' + !!PC.lv[l] + '">' + ["", "L1 Recall", "L2 Understanding", "L3 Application", "L4 Reasoning"][l] + "</button>"; }).join("") + "</div></div>" +
      "<div>" + APP.sel("pst", "Which questions", [["all", "Any"], ["new", "Not attempted yet"], ["missed", "Missed last time"]], PC.status) + "</div>" +
      "<div>" + APP.sel("pcnt", "How many", [["5", "5"], ["10", "10"], ["15", "15"], ["20", "20"], ["30", "30"], ["999", "All matching"]], String(PC.count)) + "</div></div>" +
      '<div class="row" style="margin-top:12px"><label class="row small"><input type="checkbox" id="ptimed"' + (PC.timed ? " checked" : "") + "> Timed (75 s per question)</label><label class=\"row small\"><input type=\"checkbox\" id=\"padapt\"" + (PC.adaptive ? " checked" : "") + '> Adaptive order (missed and unseen first; harder levels once a topic is strong)</label></div>' +
      '<div class="row" style="margin-top:12px"><button class="btn big" id="pgo"' + (list.length ? "" : " disabled") + ">Start " + Math.min(PC.count, list.length) + " questions</button><span class=\"small muted\">" + list.length + " questions match.</span></div></div>";
    out += '<div class="card"><h2>Quick starts</h2><div class="row"><button class="btn ghost sm" data-quick="mixed">Mixed exam-style (20)</button><button class="btn ghost sm" data-quick="hard">Levels 3–4 only (15)</button><button class="btn ghost sm" data-quick="missed">Everything I missed</button><button class="btn ghost sm" data-quick="kahoot">All Kahoot</button><button class="btn ghost sm" data-quick="woolink">All Woolink</button></div>' +
      '<p class="small muted" style="margin-top:10px">Not imported: ' + SG.classSkipped.map(function (x) { return esc(x[0]) + " (" + esc(x[1]) + ")"; }).join("; ") + " Canvas and Woolink came without answer keys, so their answers here are derived from your lectures.</p></div>";
    APP.after(function () {
      $$("[data-src]").forEach(function (b) { b.addEventListener("click", function () { var k = b.getAttribute("data-src"); PC.src[k] = !PC.src[k]; APP.rerender(); }); });
      $$("[data-mod]").forEach(function (b) { b.addEventListener("click", function () { var k = b.getAttribute("data-mod"); PC.mods[k] = !PC.mods[k]; PC.topic = "all"; APP.rerender(); }); });
      $$("[data-lv]").forEach(function (b) { b.addEventListener("click", function () { var k = b.getAttribute("data-lv"); PC.lv[k] = !PC.lv[k]; APP.rerender(); }); });
      $("#ptop").addEventListener("change", function (e) { PC.topic = e.target.value; APP.rerender(); });
      $("#pst").addEventListener("change", function (e) { PC.status = e.target.value; APP.rerender(); });
      $("#pcnt").addEventListener("change", function (e) { PC.count = +e.target.value; APP.rerender(); });
      $("#ptimed").addEventListener("change", function (e) { PC.timed = e.target.checked; });
      $("#padapt").addEventListener("change", function (e) { PC.adaptive = e.target.checked; });
      $("#pgo").addEventListener("click", function () {
        var k = Math.min(PC.count, list.length), ids = PC.adaptive ? APP.adaptivePick(list, k) : APP.shuffle(list.map(function (q) { return q.id; })).slice(0, k);
        APP.startQuiz(ids, { title: "Practice", timed: PC.timed });
      });
      $$("[data-quick]").forEach(function (b) { b.addEventListener("click", function () {
        var k = b.getAttribute("data-quick"), pool = APP.pool(), ids;
        if (k === "mixed") ids = APP.adaptivePick(pool.filter(function (q) { return q.set === "P" || q.set === "SV"; }), 20);
        if (k === "hard") ids = APP.adaptivePick(pool.filter(function (q) { return q.lvl >= 3; }), 15);
        if (k === "missed") ids = pool.filter(function (q) { var a = s.answers[q.id]; return a && a.last === false; }).map(function (q) { return q.id; });
        if (k === "kahoot") ids = pool.filter(function (q) { return q.set === "K"; }).map(function (q) { return q.id; });
        if (k === "woolink") ids = pool.filter(function (q) { return q.set === "W"; }).map(function (q) { return q.id; });
        if (!ids.length) { APP.toast(k === "missed" ? "No missed questions yet" : "Nothing to start"); return; }
        APP.startQuiz(k === "woolink" ? ids : APP.shuffle(ids), { title: b.textContent.replace(/\s*\(.*\)/, ""), ctx: "Practice" });
      }); });
    });
    return out;
  };

  /* ------------------------------------------------------------ MOCK EXAMS */
  var EX = null;
  APP.views.exams = function (h) {
    if (h.indexOf("exams-") === 0 && EX) return examRun();
    var s = S();
    var out = '<h1>Mock exams</h1><p class="lede">Two full exams held out from practice: 40 questions each, 10 per module, no answers until you submit. <b>Assumption:</b> your syllabus doesn\'t state Exam 3\'s length or weighting, so these use equal module weighting and 50 minutes. Your in-progress answers are saved if you leave the page.</p><div class="grid g2">';
    ["XA", "XB"].forEach(function (k) {
      var meta = SG.examMeta[k], rec = s.exams[k] || {}, att = rec.attempts || [];
      out += '<div class="card"><h2>' + meta.name + '</h2><p class="small">' + meta.note + "</p>" +
        (att.length ? '<p>Attempts: ' + att.map(function (a) { return '<span class="pill ' + (a.score / a.n >= .8 ? "pg" : a.score / a.n >= .6 ? "py" : "pr") + '">' + a.score + "/" + a.n + "</span>"; }).join(" ") + "</p>" : '<p class="muted small">Not taken yet.</p>') +
        (rec.draft ? '<p class="small"><b>In progress:</b> ' + Object.keys(rec.draft.picks || {}).length + " answered.</p>" : "") +
        '<div class="row"><label class="row small"><input type="checkbox" id="tm' + k + '" checked> Timed (' + meta.minutes + ' min)</label></div><div class="row" style="margin-top:8px"><button class="btn" data-ex="' + k + '">' + (rec.draft ? "Resume" : "Start") + "</button>" + (att.length ? '<button class="btn ghost" data-rev="' + k + '">Review last attempt</button>' : "") + "</div></div>";
    });
    out += "</div>";
    APP.after(function () {
      $$("[data-ex]").forEach(function (b) { b.addEventListener("click", function () {
        var k = b.getAttribute("data-ex"), rec = s.exams[k] = s.exams[k] || {}, meta = SG.examMeta[k];
        if (!rec.draft) rec.draft = { picks: {}, start: Date.now(), timed: $("#tm" + k).checked, endAt: $("#tm" + k).checked ? Date.now() + meta.minutes * 60000 : 0 };
        APP.save(); EX = { k: k, review: false }; location.hash = "exams-" + k;
      }); });
      $$("[data-rev]").forEach(function (b) { b.addEventListener("click", function () { EX = { k: b.getAttribute("data-rev"), review: true }; location.hash = "exams-" + EX.k; }); });
    });
    return out;
  };
  function examQs(k) { return SG.questions.filter(function (q) { return q.set === k; }); }
  function examRun() {
    var s = S(), k = EX.k, rec = s.exams[k], meta = SG.examMeta[k], qs = examQs(k);
    if (EX.review) return examResults(k, rec.attempts[rec.attempts.length - 1]);
    var d = rec.draft; if (!d) { EX = null; location.hash = "exams"; return ""; }
    var answered = Object.keys(d.picks).filter(function (id) { return d.picks[id].length; }).length;
    var h = '<div class="exambar"><b>' + meta.name + '</b><span class="small num" id="exc">' + answered + "/" + qs.length + ' answered</span>' + (d.endAt ? '<span class="timer" id="timer"></span>' : '<span class="small muted" style="margin-left:auto">Untimed</span>') + '<button class="btn sm" id="exsub">Submit exam</button></div>';
    h += '<div id="exconf" hidden class="confirm"><p id="exmsg"></p><button class="btn sm" id="exyes">Submit and grade</button><button class="btn sm ghost" id="exno">Keep working</button></div>';
    h += '<div class="examqs">' + qs.map(function (q, i) { return APP.renderQ(q, { num: i + 1, picks: d.picks[q.id] || [] }); }).join("") + "</div>";
    h += '<div class="row"><button class="btn big" id="exsub2">Submit exam</button><a class="btn ghost" href="#exams">Save and leave</a></div>';
    APP.after(function () {
      $$(".examqs input").forEach(function (inp) { inp.addEventListener("change", function () {
        var id = inp.name.slice(2); d.picks[id] = readPicks(APP.qById[id]); APP.save();
        $("#exc").textContent = Object.keys(d.picks).filter(function (x) { return d.picks[x].length; }).length + "/" + qs.length + " answered";
      }); });
      var ask = function () { var un = qs.length - Object.keys(d.picks).filter(function (x) { return d.picks[x].length; }).length; $("#exmsg").textContent = un ? un + " question" + (un > 1 ? "s are" : " is") + " unanswered. Submit anyway?" : "Submit your exam for grading?"; $("#exconf").hidden = false; $("#exconf").scrollIntoView({ block: "center" }); };
      $("#exsub").addEventListener("click", ask); $("#exsub2").addEventListener("click", ask);
      $("#exno").addEventListener("click", function () { $("#exconf").hidden = true; });
      $("#exyes").addEventListener("click", function () { grade(); });
      if (d.endAt) { startTimer(d.endAt, function () { APP.toast("Time's up: exam submitted"); grade(); }); }
    });
    function grade() {
      var score = 0, picks = d.picks;
      qs.forEach(function (q) { var p = picks[q.id] || [], ok = setOk(q, p); if (ok) score++; if (p.length) APP.record(q, ok, p, meta.name); });
      rec.attempts = rec.attempts || []; rec.attempts.push({ ts: Date.now(), score: score, n: qs.length, picks: picks, secs: Math.round((Date.now() - d.start) / 1000) });
      if (rec.attempts.length > 5) rec.attempts.shift();
      rec.draft = null; APP.save(); EX.review = true; APP.route();
    }
    return h;
  }
  function examResults(k, att) {
    var meta = SG.examMeta[k], qs = examQs(k), byM = {}, byT = {};
    qs.forEach(function (q) { var ok = setOk(q, att.picks[q.id] || []); [[byM, q.m], [byT, q.t]].forEach(function (p) { var x = p[0][p[1]] = p[0][p[1]] || { n: 0, c: 0 }; x.n++; if (ok) x.c++; }); });
    var weakT = Object.keys(byT).filter(function (t) { return byT[t].c / byT[t].n < 0.75; }).sort(function (a, b) { return byT[a].c / byT[a].n - byT[b].c / byT[b].n; });
    var pct = att.score / att.n;
    var unans = qs.filter(function (q) { return !(att.picks[q.id] || []).length; }).length;
    var h = "<h1>" + meta.name + ': results</h1>' + (unans ? '<p class="note">' + unans + " question" + (unans > 1 ? "s were" : " was") + " left blank. Blanks count against the exam score but are not added to your mastery data or error log.</p>" : "") + '<div class="grid g3"><div class="card stat"><span class="label">Score</span><p class="big">' + att.score + "<small>/" + att.n + "</small></p>" + APP.bar(pct * 100) + '<p class="small muted" style="margin:6px 0 0">' + APP.pct(pct) + " · " + Math.round(att.secs / 60) + ' min</p></div><div class="card"><h2>By module</h2>' +
      SG.modules.map(function (m) { var x = byM[m.id]; return '<div class="mbar"><span>' + APP.modTag(m.id) + " " + esc(m.name) + "</span>" + APP.bar(x.c / x.n * 100) + '<span class="num">' + x.c + "/" + x.n + "</span></div>"; }).join("") + "</div>" +
      '<div class="card"><h2>What to do next</h2>' + (weakT.length ? "<ol>" + weakT.slice(0, 5).map(function (t) { return '<li><a href="#learn-' + t + '">' + esc(APP.topicById[t].title) + "</a> (" + byT[t].c + "/" + byT[t].n + ")</li>"; }).join("") + '</ol><p class="small">Then classify each miss in <a href="#weak">Weak areas</a> and take a topic quiz.</p>' : "<p>No topic under 75%. Take the other mock exam or a Levels 3–4 practice set.</p>") + "</div></div>";
    h += '<h2>Every question with explanations</h2><div class="examqs">' + qs.map(function (q, i) { return APP.renderQ(q, { num: i + 1, picks: att.picks[q.id] || [], done: true, explain: true, suffix: "_r" }); }).join("") + '</div><div class="row"><a class="btn" href="#exams">Back to mock exams</a></div>';
    return h;
  }

  /* ------------------------------------------------------------ WEAK AREAS */
  var WK = { type: "all" };
  APP.views.weak = function () {
    var s = S();
    var rows = SG.topics.map(function (t) { return { t: t, s: APP.topicStats(t.id) }; }).filter(function (x) { return x.s.seen; }).sort(function (a, b) { return a.s.mastery - b.s.mastery; });
    var types = {}; s.errors.forEach(function (e) { types[e.type] = (types[e.type] || 0) + 1; });
    var missCount = {}; s.errors.forEach(function (e) { missCount[e.q] = (missCount[e.q] || 0) + 1; });
    var repeated = Object.keys(missCount).filter(function (k) { return missCount[k] >= 2; });
    var out = '<h1>Weakness tracker</h1><p class="lede">Built only from your answers. Mastery needs at least 6 answered questions in a topic, 80%+ on your latest attempts, and at least one Level 3–4 question right.</p>';
    if (!rows.length && !s.errors.length) return out + '<div class="card"><p>No answers yet. Take a <a href="#practice">practice quiz</a> or work through the <a href="#review">professor questions</a>; this page fills in as you go.</p></div>';
    out += '<div class="grid g2"><div class="card"><h2>Accuracy by topic</h2>' + APP.table(["Topic", "Answered", "Latest accuracy", "Status"], rows.map(function (x) { return ['<a href="#learn-' + x.t.id + '">' + esc(x.t.title) + "</a>", x.s.seen + "/" + x.s.total, APP.pct(x.s.acc), APP.masteryPill(x.s)]; })) + "</div>";
    out += '<div class="card"><h2>Mistake types</h2>' + (s.errors.length ? SG.errorTypes.map(function (t) { var n = types[t] || 0; return '<div class="mbar"><span>' + t + "</span>" + APP.bar(n / s.errors.length * 100) + '<span class="num">' + n + "</span></div>"; }).join("") + '<p class="small muted">Types are pre-filled from the question style (figure → graph error, NOT-questions → misreading…). Correct them below so this stays accurate.</p>' : '<p class="muted">No mistakes logged yet.</p>') +
      (repeated.length ? '<h3>Repeated misses</h3><ul class="small">' + repeated.slice(0, 8).map(function (id) { var q = APP.qById[id]; return "<li>" + (q ? APP.strip(q.q).slice(0, 100) + "… (" + missCount[id] + "×)" : esc(id) + " (" + missCount[id] + "×)") + "</li>"; }).join("") + "</ul>" : "") +
      '<div class="row" style="margin-top:10px"><a class="btn sm" href="#tutor-weak">Weakness review quiz</a></div></div></div>';
    var errs = s.errors.filter(function (e) { return WK.type === "all" || e.type === WK.type; });
    out += '<div class="card"><h2>Error log (' + s.errors.length + ')</h2><div class="chips">' + [["all", "All"]].concat(SG.errorTypes.map(function (t) { return [t, t]; })).map(function (f) { return '<button class="chip' + (WK.type === f[0] ? " on" : "") + '" data-wt="' + esc(f[0]) + '">' + esc(f[1]) + "</button>"; }).join("") + "</div>" +
      (errs.length ? '<div class="tw" style="margin-top:10px"><table class="t elog"><thead><tr><th>When</th><th>Question</th><th>You chose</th><th>Mistake type</th><th></th></tr></thead><tbody>' + errs.slice(0, 120).map(function (e) {
        var q = APP.qById[e.q], sgn = /^sg\d+$/.test(e.q) ? +e.q.slice(2) : 0;
        var stem = q ? APP.strip(q.q) : sgn ? SG.sgStems[sgn - 1] : e.q;
        var topic = q ? q.t : sgn ? SG.sg[sgn - 1].t : null;
        return "<tr><td class=\"small\">" + new Date(e.ts).toLocaleString(undefined, { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" }) + '<br><span class="muted">' + esc(e.ctx) + '</span></td><td class="wide small">' + esc(stem.length > 150 ? stem.slice(0, 147) + "…" : stem) + (topic ? '<br><a href="#learn-' + topic + '">' + esc(APP.topicById[topic].title) + "</a>" : "") + '</td><td class="small">' + esc(e.pick) + (q ? '<br><span class="muted">Answer: ' + esc(q.a.map(function (a) { return APP.strip(q.o[a]); }).join("; ")) + "</span>" : "") + '</td><td><select data-err="' + esc(e.id) + '" aria-label="Mistake type">' + SG.errorTypes.map(function (t) { return "<option" + (t === e.type ? " selected" : "") + ">" + t + "</option>"; }).join("") + "</select></td><td>" + (q ? '<button class="btn sm ghost" data-retry="' + esc(e.q) + '">Retry</button>' : sgn ? '<a class="btn sm ghost" href="#review-' + sgn + '">Open</a>' : "") + "</td></tr>";
      }).join("") + "</tbody></table></div>" : '<p class="muted">No errors of this type.</p>') + "</div>";
    APP.after(function () {
      APP.bindErrSelects($("#main"));
      $$("[data-wt]").forEach(function (b) { b.addEventListener("click", function () { WK.type = b.getAttribute("data-wt"); APP.rerender(); }); });
      $$("[data-retry]").forEach(function (b) { b.addEventListener("click", function () { APP.startQuiz([b.getAttribute("data-retry")], { title: "Retry", ctx: "Retry" }); }); });
    });
    return out;
  };
})();
