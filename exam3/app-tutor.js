/* Tutor: eight learning modes plus an optional live "Ask Claude" helper (sample capability). */
(function () {
  "use strict";
  var SG = window.SG, APP = window.APP, $ = APP.$, $$ = APP.$$, esc = APP.esc;
  function S() { return APP.S; }
  var sampleP = null;
  function getSample() { if (!sampleP) sampleP = (window.claude && window.claude.use) ? window.claude.use("sample").catch(function () { return null; }) : Promise.resolve(null); return sampleP; }
  var aiDenied = false;

  APP.views.tutor = function (h) {
    var parts = h.split("-"), mode = parts[1] || "", arg = parts.slice(2).join("-");
    var head = '<h1>Tutor</h1><p class="lede">Pick how you want to study. Every mode runs on the prebuilt lessons and questions; the Ask Claude panel adds live explanations where your viewer allows it.</p>';
    var picker = '<div class="modes">' + SG.tutorModes.map(function (m) { return '<a class="mode' + (mode === m[0] ? " on" : "") + '" href="#tutor-' + m[0] + '" style="text-decoration:none"><b>' + m[1] + "</b><span>" + m[2] + "</span></a>"; }).join("") + "</div>";
    if (!mode) { APP.after(function () { bindAsk(null); }); return head + picker + askPanel(null); }
    if (mode === "exam") { setTimeout(function () { location.replace("#exams"); }, 0); return "<p>Opening mock exams…</p>"; }
    if (mode === "weak") return weakMode();
    var body = { teach: teach, quiz: quizMode, rapid: rapid, apply: applyMode, feynman: feynman, cram: cram }[mode];
    return head + picker + (body ? body(arg) : "");
  };

  /* ---------- Teach me */
  function teach(tid) {
    if (!tid || !APP.topicById[tid]) return '<div class="card"><h2>Teach me</h2>' + topicPicker("tutor-teach-") + "</div>";
    var t = APP.topicById[tid], k = "teach_" + tid, step = APP._teach && APP._teach[0] === tid ? APP._teach[1] : 0;
    var steps = [["Start simple", "<p>" + t.simple + "</p>"], ["The full picture", t.detail], ["Why it happens", t.why + (t.fig ? FIG.html(t.fig) : "")], ["Words you need", '<dl class="terms">' + t.vocab.map(function (v) { return "<dt>" + v[0] + "</dt><dd>" + v[1] + "</dd>"; }).join("") + "</dl>"], ["Don't fall for these", "<ul>" + t.miscon.map(function (m) { return "<li>" + m + "</li>"; }).join("") + "</ul>" + (t.compare ? APP.table(t.compare.head, t.compare.rows) : "")], ["Worked example", "<p><b>Q:</b> " + t.exam.q + "</p><p><b>A:</b> " + t.exam.a + '</p><p class="small"><b>Reasoning:</b> ' + t.exam.how + "</p>"], ["Check yourself", checkQs(tid)], ["Remember this", '<div class="callout one"><p>' + t.take + "</p></div>"]];
    var s = steps[step];
    var h = '<div class="card"><p class="label">' + APP.modTag(t.m) + " Teach me · " + esc(t.title) + '</p><div class="progressline"><span class="num">Step ' + (step + 1) + "/" + steps.length + "</span>" + APP.bar((step + 1) / steps.length * 100) + "</div><h2 style=\"margin-top:12px\">" + s[0] + "</h2>" + s[1] +
      '<div class="tnav" style="margin-top:12px"><button class="btn ghost" id="tprev"' + (step ? "" : " disabled") + '>← Back</button><a class="small" href="#learn-' + tid + '">Full lesson</a><button class="btn" id="tnext">' + (step < steps.length - 1 ? "Next →" : "Take the topic quiz") + "</button></div></div>" + askPanel(tid);
    APP.after(function () {
      $("#tprev").addEventListener("click", function () { APP._teach = [tid, step - 1]; APP.rerender(); });
      $("#tnext").addEventListener("click", function () { if (step < steps.length - 1) { APP._teach = [tid, step + 1]; APP.rerender(); } else location.hash = "practice-t-" + tid; });
      bindInline($("#main")); bindAsk(tid);
    });
    return h;
  }
  function checkQs(tid) {
    var qs = APP.adaptivePick(SG.questions.filter(function (q) { return q.t === tid && (q.set === "P" || q.set === "SV"); }), 3);
    return '<p class="small muted">Three questions picked for you. They count toward mastery.</p>' + qs.map(function (id, i) { return inlineQ(APP.qById[id], i + 1); }).join("");
  }
  function inlineQ(q, n) { return '<div data-iq="' + q.id + '">' + APP.renderQ(q, { num: n, suffix: "_i" }) + '<div class="qbtns"><button class="btn sm" data-isub="' + q.id + '">Check</button></div></div>'; }
  function bindInline(root) {
    $$("[data-isub]", root).forEach(function (b) { b.addEventListener("click", function () {
      var q = APP.qById[b.getAttribute("data-isub")], p = APP.readPicks(q, "_i"); if (!p.length) { APP.toast("Pick an answer"); return; }
      var err = APP.record(q, APP.setOk(q, p), p, "Tutor");
      var box = root.querySelector('[data-iq="' + q.id + '"]'); box.innerHTML = APP.renderQ(q, { picks: p, done: true, explain: true, suffix: "_i" }) + (err ? '<p class="small muted">Logged in your error log.</p>' : "");
    }); });
  }
  function topicPicker(prefix) {
    return SG.modules.map(function (m) { return '<p class="label" style="margin-top:10px">' + APP.modTag(m.id) + " " + esc(m.name) + '</p><div class="chips">' + SG.topics.filter(function (t) { return t.m === m.id; }).map(function (t) { return '<a class="chip" href="#' + prefix + t.id + '" style="text-decoration:none">' + esc(t.title) + "</a>"; }).join("") + "</div>"; }).join("");
  }

  /* ---------- Quiz me */
  function quizMode(tid) {
    if (tid && APP.topicById[tid]) { setTimeout(function () { location.replace("#practice-t-" + tid); }, 0); return ""; }
    return '<div class="card"><h2>Quiz me</h2><p class="small">Choose a topic. You get up to 12 questions, missed and unseen ones first, answers hidden until you submit.</p>' + topicPicker("tutor-quiz-") + "</div>";
  }

  /* ---------- Application */
  function applyMode() {
    var h = '<div class="card"><h2>Application mode</h2><p>Level 3–4 questions only: new scenarios, calculations and graph reasoning.</p><div class="row">' + SG.modules.map(function (m) { return '<button class="btn ghost sm" data-ap="' + m.id + '">' + m.short + " " + esc(m.name) + "</button>"; }).join("") + '<button class="btn sm" data-ap="all">All modules</button></div></div>';
    APP.after(function () { $$("[data-ap]").forEach(function (b) { b.addEventListener("click", function () {
      var m = b.getAttribute("data-ap"), pool = APP.pool().filter(function (q) { return q.lvl >= 3 && (m === "all" || q.m === m); });
      APP.startQuiz(APP.adaptivePick(pool, Math.min(15, pool.length)), { title: "Application" + (m === "all" ? "" : " · " + APP.modById[m].short), ctx: "Application mode" });
    }); }); });
    return h;
  }

  /* ---------- Rapid fire */
  var RF = null;
  function rapid() {
    if (!RF) return '<div class="card"><h2>Rapid fire</h2><p>Fast recall: a card appears, you have 8 seconds to answer out loud before it flips, then grade yourself. 20 cards.</p><div class="row">' + SG.modules.map(function (m) { return '<button class="btn ghost sm" data-rf="' + m.id + '">' + m.short + "</button>"; }).join("") + '<button class="btn sm" data-rf="all">Mixed</button></div></div>' + bindLater(function () {
      $$("[data-rf]").forEach(function (b) { b.addEventListener("click", function () { var m = b.getAttribute("data-rf"); var pool = SG.cards.filter(function (c) { return m === "all" || c.m === m; }); RF = { ids: APP.shuffle(pool.map(function (c) { return c.i; })).slice(0, 20), i: 0, ok: 0, flipped: false }; APP.rerender(); }); });
    });
    if (RF.i >= RF.ids.length) { var sc = RF.ok + "/" + RF.ids.length; RF = null; return '<div class="card"><h2>Rapid fire done</h2><p class="big" style="font-family:var(--display);font-size:2rem">' + sc + '</p><a class="btn" href="#tutor-rapid">Go again</a> <a class="btn ghost" href="#cards">Review missed cards</a></div>'; }
    var c = SG.cards[RF.ids[RF.i]];
    var h = '<div class="card"><div class="progressline"><span class="num">' + (RF.i + 1) + "/" + RF.ids.length + '</span>' + APP.bar(RF.i / RF.ids.length * 100) + '<span class="timer" id="rft"></span></div><div class="fcwrap" style="margin-top:10px"><button class="fc' + (RF.flipped ? " flipped" : "") + '" id="rfc"><span class="face front">' + c.f + '</span><span class="face back">' + c.b + '</span></button><div class="row" style="justify-content:flex-end"><button class="btn bad sm" id="rfno">Missed</button><button class="btn ok sm" id="rfyes">Got it</button></div></div></div>';
    APP.after(function () {
      var left = 8, el = $("#rft"), iv = null;
      function flip() { RF.flipped = true; $("#rfc").classList.add("flipped"); clearInterval(iv); el.textContent = ""; }
      if (!RF.flipped) { el.textContent = left + "s"; iv = setInterval(function () { left--; el.textContent = left + "s"; if (left <= 0) flip(); }, 1000); }
      APP.cleanup = function () { clearInterval(iv); };
      $("#rfc").addEventListener("click", flip);
      function grade(ok) { var s = S(), x = s.cards[c.i] || { n: 0, ok: 0 }; x.n++; if (ok) { x.ok++; RF.ok++; } x.last = ok; x.ts = Date.now(); s.cards[c.i] = x; APP.save(); RF.i++; RF.flipped = false; APP.rerender(); }
      $("#rfno").addEventListener("click", function () { grade(false); }); $("#rfyes").addEventListener("click", function () { grade(true); });
    });
    return h;
  }
  function bindLater(fn) { APP.after(fn); return ""; }

  /* ---------- Feynman */
  var FY = { i: 0 };
  function feynman() {
    var p = SG.feynman[FY.i], s = S(), saved = (s.feyn[FY.i] || {}).text || "";
    var h = '<div class="card"><h2>Feynman mode</h2><p class="small">Explain the idea as if teaching a classmate who missed the lecture. Then check: the app looks for the key ideas a complete answer needs (by keyword, so read the model answer too).</p>' +
      APP.sel("fyp", "Prompt", SG.feynman.map(function (f, i) { return [String(i), f[1]]; }), String(FY.i)) +
      '<p style="font-weight:700;margin-top:12px">' + esc(p[1]) + '</p><label class="lbl" for="fyt">Your explanation</label><textarea id="fyt" style="min-height:150px">' + esc(saved) + '</textarea><div class="qbtns"><button class="btn" id="fyc">Check my explanation</button><button class="btn ghost" id="fyai" hidden>Get feedback from Claude</button></div><div id="fyout"></div></div>' + askPanel(p[0]);
    APP.after(function () {
      $("#fyp").addEventListener("change", function (e) { FY.i = +e.target.value; APP.rerender(); });
      $("#fyt").addEventListener("input", function (e) { s.feyn[FY.i] = { text: e.target.value }; APP.save(); });
      $("#fyc").addEventListener("click", function () {
        var txt = $("#fyt").value.toLowerCase(); if (txt.trim().length < 20) { APP.toast("Write a few sentences first"); return; }
        var hits = p[2].map(function (k) { return [k[0], k[1].some(function (w) { return txt.indexOf(w.toLowerCase()) >= 0; })]; });
        var n = hits.filter(function (x) { return x[1]; }).length;
        s.feyn[FY.i] = { text: $("#fyt").value, score: n + "/" + hits.length, ts: Date.now() }; APP.save();
        $("#fyout").innerHTML = '<div class="fb ' + (n === hits.length ? "fbok" : "fbbad") + '"><span class="verdict">' + n + " of " + hits.length + ' key ideas found</span><ul class="kis">' + hits.map(function (x) { return "<li>" + (x[1] ? "✓ " : "✗ <b>Missing:</b> ") + esc(x[0]) + "</li>"; }).join("") + "</ul></div>" + '<div class="note" style="margin-top:10px"><b>Model explanation:</b> ' + esc(p[3]) + '</div><p class="small muted">Keyword checks can miss correct wording or accept vague answers; compare with the model explanation yourself.</p>';
      });
      getSample().then(function (smp) { if (smp && !aiDenied) { var b = $("#fyai"); if (b) { b.hidden = false; b.addEventListener("click", function () {
        var txt = $("#fyt").value.trim(); if (txt.length < 20) { APP.toast("Write a few sentences first"); return; }
        var t = APP.topicById[p[0]];
        runAI(smp, $("#fyout"), "You are a supportive Biology 1442 (intro ecology) tutor. A student explained a concept in their own words. Give feedback in under 180 words: first what is correct, then any errors or missing steps, then one sentence they could add. Use only the course material below as the standard; if they go beyond it, say so without marking it wrong. Plain text, no markdown headings.\n\nPROMPT: " + p[1] + "\n\nCOURSE MATERIAL:\n" + lessonText(t) + "\nMODEL ANSWER: " + p[3] + "\n\nSTUDENT EXPLANATION:\n" + txt);
      }); } } });
      bindAsk(p[0]);
    });
    return h;
  }

  /* ---------- Weakness review */
  function weakMode() {
    var s = S(), pool = APP.pool();
    var missed = pool.filter(function (q) { var a = s.answers[q.id]; return a && a.last === false; }).map(function (q) { return q.id; });
    var weakT = APP.weakest(4).map(function (x) { return x.t.id; });
    var extra = APP.adaptivePick(pool.filter(function (q) { return weakT.indexOf(q.t) >= 0 && missed.indexOf(q.id) < 0; }), Math.max(0, 15 - missed.length));
    var ids = APP.shuffle(missed.slice(0, 15).concat(extra));
    if (!ids.length) return '<h1>Tutor</h1><div class="card"><h2>Weakness review</h2><p>No misses or weak topics yet. Answer some questions first; this mode then builds a quiz from what you get wrong.</p><a class="btn" href="#practice">Go to practice</a></div>';
    setTimeout(function () { APP.startQuiz(ids, { title: "Weakness review", ctx: "Weakness review" }); }, 0);
    return "<p>Building your weakness review…</p>";
  }

  /* ---------- Emergency cram */
  function cram() {
    var h = '<div class="card"><h2>Emergency cram</h2><p class="small">Short on time? These 12 ideas cover the most-tested material. Read the line, answer the check question, move on. Then skim the <a href="#cram">cram sheet</a>.</p></div>';
    h += SG.emergency.map(function (e, i) { var q = APP.qById[e[1]]; return '<div class="card"><p style="font-weight:700;margin:0 0 8px">' + (i + 1) + ". " + esc(e[0]) + "</p>" + inlineQ(q, "✓") + "</div>"; }).join("");
    APP.after(function () { bindInline($("#main")); });
    return h;
  }

  /* ---------- Ask Claude (live, optional) */
  function lessonText(t) { return t.title + ". " + APP.strip(t.simple + " " + t.detail + " " + t.why).replace(/\s+/g, " ").slice(0, 6000) + " Takeaway: " + APP.strip(t.take); }
  function askPanel(tid) {
    return '<div class="card" id="askcard" hidden><h2>Ask Claude</h2><p class="small">Live explanations grounded in this app\'s lesson. Answers are generated, so check anything surprising against your lecture.</p>' +
      APP.sel("askt", "Topic", SG.topics.map(function (t) { return [t.id, APP.modById[t.m].short + " · " + t.title]; }), tid || SG.topics[0].id) +
      '<div class="row" style="margin-top:10px"><button class="btn ghost sm" data-ask="simpler">Explain it more simply</button><button class="btn ghost sm" data-ask="deeper">Go deeper</button><button class="btn ghost sm" data-ask="example">Worked example</button><button class="btn ghost sm" data-ask="quiz">Ask me 3 new questions</button></div>' +
      '<label class="lbl" for="askq" style="margin-top:10px">Or ask your own question</label><textarea id="askq" style="min-height:60px" placeholder="e.g. Why does a thermocline stop nutrients from reaching the surface?"></textarea><div class="qbtns"><button class="btn sm" id="askgo">Ask</button></div><div class="aiout" id="askout" aria-live="polite"></div></div>';
  }
  function bindAsk(tid) {
    var card = $("#askcard"); if (!card) return;
    getSample().then(function (smp) {
      if (!smp || aiDenied) return; card.hidden = false;
      var go = function (kind) {
        var t = APP.topicById[$("#askt").value], q = $("#askq").value.trim();
        var ask = { simpler: "Explain this topic in plain language for someone seeing it for the first time, with one everyday analogy. Under 170 words.", deeper: "Explain the cause-and-effect reasoning behind this topic at intro-college level, including how it is typically tested. Under 220 words.", example: "Give one new worked exam-style example (a scenario question) with the answer and step-by-step reasoning. Under 200 words.", quiz: "Write 3 new multiple-choice questions (A–D) on this topic at application level. List the answers with one-line explanations at the very end under 'Answers'." }[kind] || ("Answer the student's question: " + q + " Under 200 words.");
        if (!kind && !q) { APP.toast("Type a question first"); return; }
        runAI(smp, $("#askout"), "You are a Biology 1442 (intro ecology) tutor helping a student prepare for an exam. Base your answer on the course lesson below. If you add anything not in the lesson, mark it '(beyond the lecture)'. Plain text, short paragraphs or numbered lines, no markdown headings.\n\nLESSON:\n" + lessonText(t) + "\n\nTASK: " + ask);
      };
      $$("[data-ask]", card).forEach(function (b) { b.addEventListener("click", function () { go(b.getAttribute("data-ask")); }); });
      $("#askgo", card).addEventListener("click", function () { go(null); });
    });
  }
  function runAI(smp, out, prompt) {
    out.textContent = "Thinking…";
    smp(prompt, { onText: function (e) { out.textContent = e.text; } }).then(function (r) { out.textContent = r.text + (r.truncated ? "\n\n(Cut short. Ask for less at a time.)" : ""); }, function (e) {
      var code = e && e.code;
      if (code === "not_granted") { aiDenied = true; out.textContent = "Live answers are turned off for this page. Everything else in the tutor still works."; }
      else if (code === "rate_limited") out.textContent = "Too many requests right now. Wait a minute and try again.";
      else if (code === "cancelled") out.textContent = "";
      else out.textContent = "Couldn't get an answer (" + (code || "error") + "). The prebuilt explanations above still work.";
    });
  }
})();
