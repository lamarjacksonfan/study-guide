/* Learn (master study guide), Professor 64, Flashcards, Sixth Extinction, Cram sheet. */
(function () {
  "use strict";
  var SG = window.SG, APP = window.APP, $ = APP.$, $$ = APP.$$, esc = APP.esc;
  function S() { return APP.S; }

  /* ------------------------------------------------------------ LEARN */
  APP.views.learn = function (h) {
    var tid = h.indexOf("learn-") === 0 ? h.slice(6) : null;
    if (tid && APP.topicById[tid]) return topicPage(APP.topicById[tid]);
    var out = '<h1>Master study guide</h1><p class="lede">' + SG.topics.length + " lessons across the four modules. Each lesson runs plain-English → exam-level detail → why it happens → vocabulary → figure → compare → misconceptions → exam application → recall → takeaway. Colored dots show your tested mastery, not whether you read it.</p>";
    out += '<p class="small muted">⚑ marks content from general ecology knowledge that isn\'t on your slides. Slide references are given at the top of each lesson.</p>';
    out += '<div class="grid g2">' + SG.modules.map(function (m) {
      var ts = SG.topics.filter(function (t) { return t.m === m.id; });
      return '<div class="card"><h2>' + APP.modTag(m.id) + " " + esc(m.name) + '</h2><p class="small muted">' + esc(m.reading) + "</p>" + ts.map(function (t) {
        var st = APP.topicStats(t.id), read = S().topics[t.id] && S().topics[t.id].read;
        return '<a class="tlink" href="#learn-' + t.id + '"><span class="dot ' + APP.dotClass(st) + '"></span><span style="flex:1">' + esc(t.title) + "</span>" + (read ? '<span class="pill">read</span>' : "") + APP.masteryPill(st) + "</a>";
      }).join("") + "</div>";
    }).join("") + "</div>";
    return out;
  };
  function sideNav(cur) {
    return '<nav class="side" aria-label="Lessons">' + SG.modules.map(function (m) {
      return '<div class="tgroup"><div class="glabel">' + APP.modTag(m.id) + " " + esc(m.name) + "</div>" + SG.topics.filter(function (t) { return t.m === m.id; }).map(function (t) {
        return '<a class="tlink' + (t.id === cur ? " on" : "") + '" href="#learn-' + t.id + '"><span class="dot ' + APP.dotClass(APP.topicStats(t.id)) + '"></span>' + esc(t.title) + "</a>";
      }).join("") + "</div>";
    }).join("") + "</nav>";
  }
  function topicPage(t) {
    var s = S(); s.topics[t.id] = s.topics[t.id] || {}; if (!s.topics[t.id].read) { s.topics[t.id].read = Date.now(); APP.save(); }
    var st = APP.topicStats(t.id), i = SG.topics.indexOf(t), prev = SG.topics[i - 1], next = SG.topics[i + 1];
    var sgs = SG.sg.filter(function (q) { return q.t === t.id; });
    var nq = SG.questions.filter(function (q) { return q.t === t.id && q.set !== "XA" && q.set !== "XB"; }).length;
    var nc = SG.cards.filter(function (c) { return c.t === t.id; }).length;
    var h = '<div class="studywrap">' + sideNav(t.id) + '<article class="topic">' + '<div class="mpick">' + APP.sel("jump", "Jump to lesson", SG.topics.map(function (x) { return [x.id, APP.modById[x.m].short + " · " + x.title]; }), t.id) + "</div>";
    APP.after(function () { var j = $("#jump"); if (j) j.addEventListener("change", function () { location.hash = "learn-" + j.value; }); });
    h += '<div><p class="label">' + APP.modTag(t.m) + " " + esc(APP.modById[t.m].name) + " · exam weight " + "●".repeat(t.heat) + "○".repeat(3 - t.heat) + "</p><h1>" + esc(t.title) + '</h1><p class="src">Sources: ' + esc(t.src) + "</p>" +
      '<div class="row">' + APP.masteryPill(st) + '<span class="small muted">' + st.seen + " of " + st.total + " related questions answered</span></div></div>";
    if (sgs.length) h += '<p class="small"><b>Professor questions on this lesson:</b> ' + sgs.map(function (q) { return '<a href="#review-' + q.n + '">Q' + q.n + "</a>"; }).join(", ") + "</p>";
    h += '<section class="tsec simple"><h3>Simple explanation</h3><p>' + t.simple + "</p></section>";
    h += '<section class="tsec"><h3>Detailed explanation</h3>' + t.detail + "</section>";
    h += '<section class="tsec"><h3>Why it happens</h3>' + t.why + "</section>";
    h += '<section class="tsec"><h3>Important vocabulary</h3><dl class="terms">' + t.vocab.map(function (v) { return "<dt>" + v[0] + "</dt><dd>" + v[1] + (v[2] ? " <i>e.g. " + v[2] + "</i>" : "") + "</dd>"; }).join("") + "</dl></section>";
    if (t.fig) h += '<section class="tsec"><h3>Visual</h3>' + FIG.html(t.fig) + "</section>";
    if (t.compare) h += '<section class="tsec"><h3>Compare and contrast</h3>' + APP.table(t.compare.head, t.compare.rows) + "</section>";
    h += '<div class="callout trap"><b>Common misconceptions</b><ul>' + t.miscon.map(function (m) { return "<li>" + m + "</li>"; }).join("") + "</ul></div>";
    h += '<div class="callout exam"><b>Exam application</b><p><b>Q:</b> ' + t.exam.q + '</p><details><summary>Show answer and reasoning</summary><p><b>A:</b> ' + t.exam.a + '</p><p class="small"><b>How to get there:</b> ' + t.exam.how + "</p></details></div>";
    h += '<div class="recall"><h3>Active recall: answer without looking</h3><ol>' + t.recall.map(function (r) { return "<li>" + r + "</li>"; }).join("") + '</ol><p class="small muted">Say or write each answer, then scroll up to check. To make it count toward mastery, take the topic quiz.</p></div>';
    h += '<div class="callout one"><b>Key takeaway</b><p>' + t.take + "</p></div>";
    h += '<div class="row"><a class="btn" href="#practice-t-' + t.id + '">Quiz this topic (' + nq + " questions)</a><a class=\"btn ghost\" href=\"#cards-t-" + t.id + '">Flashcards (' + nc + ')</a><a class="btn ghost" href="#tutor-teach-' + t.id + '">Teach me step by step</a></div>';
    h += '<div class="tnav">' + (prev ? '<a href="#learn-' + prev.id + '">← ' + esc(prev.title) + "</a>" : "<span></span>") + (next ? '<a href="#learn-' + next.id + '">' + esc(next.title) + " →</a>" : "") + "</div>";
    return h + "</article></div>";
  }

  /* ------------------------------------------------------------ PROFESSOR 64 */
  var rv = { filter: "all", mod: "all" };
  APP.views.review = function (h) {
    var target = h.indexOf("review-") === 0 ? parseInt(h.slice(7), 10) : null;
    if (target) rv.filter = "all";
    var c = APP.sgCount(), s = S();
    var list = SG.sg.filter(function (q) {
      var r = s.sg[q.n] || {}, m = APP.topicById[q.t].m;
      if (rv.mod !== "all" && m !== rv.mod) return false;
      return rv.filter === "all" || (rv.filter === "un" && !r.st) || (rv.filter === "wrong" && r.st === "wrong") || (rv.filter === "dif" && r.dif) || (rv.filter === "flag" && r.flg) || (rv.filter === "missing" && q.flag);
    });
    var out = '<h1>Professor\'s 64 questions</h1><p class="lede">Every stem from your Exam 3 Study Guide, word for word. Answer it yourself first (in your head or the box), then reveal, then mark yourself honestly. The document gave no answer choices, so the answers below are the best-supported answers from your lectures.</p>';
    out += '<div class="card"><div class="row" style="justify-content:space-between"><div><b class="num">' + c.done + "/64</b> attempted · <span class=\"pill pg\">" + c.right + " right</span> <span class=\"pill pr\">" + c.wrong + ' wrong</span></div><div style="flex:1;min-width:160px;max-width:300px">' + APP.bar(c.done / 64 * 100) + "</div></div>" +
      '<div class="chips" style="margin-top:10px">' + [["all", "All"], ["un", "Unanswered"], ["wrong", "Marked wrong"], ["dif", "Difficult"], ["flag", "Flagged"], ["missing", "Missing info"]].map(function (f) { return '<button class="chip' + (rv.filter === f[0] ? " on" : "") + '" data-f="' + f[0] + '">' + f[1] + "</button>"; }).join("") + "</div>" +
      '<div class="chips" style="margin-top:6px">' + [["all", "All modules"]].concat(SG.modules.map(function (m) { return [m.id, m.short]; })).map(function (f) { return '<button class="chip' + (rv.mod === f[0] ? " on" : "") + '" data-m="' + f[0] + '">' + f[1] + "</button>"; }).join("") + "</div>" +
      (c.wrong ? '<p style="margin:10px 0 0"><button class="btn sm" id="retry">Retry the ' + c.wrong + " I got wrong</button></p>" : "") + "</div>";
    out += '<div class="card">' + (list.length ? list.map(sgItem).join("") : '<p class="muted">No questions match this filter.</p>') + "</div>";
    APP.after(function () {
      $$("[data-f]").forEach(function (b) { b.addEventListener("click", function () { rv.filter = b.getAttribute("data-f"); APP.rerender(); }); });
      $$("[data-m]").forEach(function (b) { b.addEventListener("click", function () { rv.mod = b.getAttribute("data-m"); APP.rerender(); }); });
      var r = $("#retry"); if (r) r.addEventListener("click", function () { rv.filter = "wrong"; SG.sg.forEach(function (q) { var x = s.sg[q.n]; if (x && x.st === "wrong") x.shown = false; }); APP.save(); APP.rerender(); });
      bindSg($("#main"));
      if (target) { var el = document.getElementById("sg" + target); if (el) setTimeout(function () { el.scrollIntoView({ block: "start" }); }, 30); }
    });
    return out;
  };
  var FLAGTXT = { choices: "The study guide gives no answer choices for this item, and the answer depends on them. The answer below names the correct type of choice.", figure: "This item refers to a figure that was not in your files. The answer applies the rule; the Visual lab has a practice figure.", stem: "The stem in the study guide is incomplete (no question printed).", book: "Sixth Extinction detail: the book text wasn't uploaded. Parts of this answer come from general knowledge of the book; check against your copy.", conflict: "This stem conflicts with your lecture. Read the note in the explanation." };
  function sgItem(q) {
    var r = S().sg[q.n] || {}, t = APP.topicById[q.t], stem = SG.sgStems[q.n - 1];
    var h = '<div class="sgq" id="sg' + q.n + '"><div class="sghead"><span class="sgnum">Q' + q.n + "</span>" + APP.modTag(t.m) + '<a class="small" href="#learn-' + t.id + '">' + esc(t.title) + "</a>" + (q.flag ? APP.flagPill(q.flag) : "") +
      (r.st ? '<span class="pill ' + (r.st === "right" ? "pg" : "pr") + '">' + (r.st === "right" ? "Got it" : "Missed") + "</span>" : "") +
      '<span style="margin-left:auto" class="row"><button class="tog dif' + (r.dif ? " on" : "") + '" data-dif="' + q.n + '" aria-pressed="' + !!r.dif + '">Difficult</button><button class="tog flg' + (r.flg ? " on" : "") + '" data-flg="' + q.n + '" aria-pressed="' + !!r.flg + '">Flag for review</button></span></div>' +
      '<div class="sgstem">' + esc(stem) + "</div>";
    if (q.flag) h += '<p class="flag">' + FLAGTXT[q.flag] + "</p>";
    if (q.n === 35 || q.n === 36) h += FIG.html("foodweb");
    h += '<label class="lbl" for="mine' + q.n + '">Your answer (optional)</label><textarea id="mine' + q.n + '" data-mine="' + q.n + '" style="min-height:56px">' + esc(r.mine || "") + "</textarea>";
    if (!r.shown) h += '<div class="qbtns"><button class="btn sm" data-show="' + q.n + '">Reveal answer</button></div>';
    else {
      h += '<div class="reveal"><p class="ans">' + q.a + '</p><p>' + q.why + '</p><p class="small"><b>Concept:</b> ' + esc(q.c) + " · <b>Source:</b> " + esc(q.src) + '</p><p class="small"><b>Common trap:</b> ' + q.trap + "</p>" +
        '<div class="row"><span class="small"><b>How did you do?</b></span><button class="btn sm ok" data-mark="' + q.n + '" data-v="right">I got it</button><button class="btn sm bad" data-mark="' + q.n + '" data-v="wrong">I missed it</button></div>' +
        '<details style="margin-top:10px"' + (r.vpick != null ? " open" : "") + '><summary>New practice variation</summary>' + variation(q, r) + "</details></div>";
    }
    return h + "</div>";
  }
  function variation(q, r) {
    var v = q.v, picked = r.vpick, done = picked != null;
    var h = '<p style="font-weight:700;margin:8px 0">' + v[0] + '</p><div class="opts">' + v[1].map(function (o, i) {
      var cls = done ? (i === v[2] ? " right" : i === picked ? " wrong" : "") : "";
      return '<label class="opt' + cls + '"><input type="radio" name="v' + q.n + '" value="' + i + '"' + (done ? " disabled" : "") + (picked === i ? " checked" : "") + "><span>" + APP.LET[i] + ". " + o + "</span></label>";
    }).join("") + "</div>";
    if (!done) h += '<div class="qbtns"><button class="btn sm" data-vsub="' + q.n + '">Check</button></div>';
    else h += '<div class="fb ' + (picked === v[2] ? "fbok" : "fbbad") + '"><span class="verdict">' + (picked === v[2] ? "Correct." : "Not quite. Answer: " + APP.LET[v[2]]) + "</span><p style=\"margin:4px 0 0\">" + v[3] + '</p></div><div class="qbtns"><button class="btn sm ghost" data-vre="' + q.n + '">Try again</button></div>';
    return h;
  }
  function bindSg(root) {
    var s = S();
    function rec(n) { return (s.sg[n] = s.sg[n] || {}); }
    $$("[data-show]", root).forEach(function (b) { b.addEventListener("click", function () { var n = +b.getAttribute("data-show"); rec(n).shown = true; APP.save(); APP.rerender(); }); });
    $$("[data-mark]", root).forEach(function (b) { b.addEventListener("click", function () {
      var n = +b.getAttribute("data-mark"), v = b.getAttribute("data-v"), r = rec(n); r.st = v; r.tries = (r.tries || 0) + 1; r.ts = Date.now();
      var d = s.daily[APP.today()] || { n: 0, c: 0 }; d.n++; if (v === "right") d.c++; s.daily[APP.today()] = d;
      if (v === "wrong") { s.errors.unshift({ id: Date.now() + "-sg" + n, q: "sg" + n, ts: Date.now(), pick: r.mine || "(self-marked)", type: "Knowledge gap", ctx: "Professor Q" + n }); }
      APP.save(); APP.rerender(); APP.toast(v === "right" ? "Marked right" : "Logged in your error log");
    }); });
    $$("[data-dif]", root).forEach(function (b) { b.addEventListener("click", function () { var r = rec(+b.getAttribute("data-dif")); r.dif = !r.dif; APP.save(); APP.rerender(); }); });
    $$("[data-flg]", root).forEach(function (b) { b.addEventListener("click", function () { var r = rec(+b.getAttribute("data-flg")); r.flg = !r.flg; APP.save(); APP.rerender(); }); });
    $$("[data-mine]", root).forEach(function (ta) { ta.addEventListener("input", function () { rec(+ta.getAttribute("data-mine")).mine = ta.value; APP.save(); }); });
    $$("[data-vsub]", root).forEach(function (b) { b.addEventListener("click", function () {
      var n = +b.getAttribute("data-vsub"), sel = $('input[name="v' + n + '"]:checked'); if (!sel) { APP.toast("Pick an answer first"); return; }
      var q = SG.sg[n - 1], p = +sel.value; rec(n).vpick = p; APP.record(APP.qById["sv" + n], p === q.v[2], [p], "Professor Q" + n + " variation"); APP.rerender();
    }); });
    $$("[data-vre]", root).forEach(function (b) { b.addEventListener("click", function () { rec(+b.getAttribute("data-vre")).vpick = null; APP.save(); APP.rerender(); }); });
  }

  /* ------------------------------------------------------------ FLASHCARDS */
  var fc = { mod: "all", topic: "all", kind: "all", deck: "all", order: null, pos: 0, flipped: false };
  function buildDeck() {
    var s = S();
    var list = SG.cards.filter(function (c) {
      if (fc.mod !== "all" && c.m !== fc.mod) return false;
      if (fc.topic !== "all" && c.t !== fc.topic) return false;
      if (fc.kind !== "all" && c.k !== fc.kind) return false;
      var r = s.cards[c.i];
      if (fc.deck === "missed") return r && r.last === false;
      if (fc.deck === "dif") return r && r.dif;
      if (fc.deck === "new") return !r;
      return true;
    });
    fc.order = list.map(function (c) { return c.i; }); fc.pos = 0; fc.flipped = false;
  }
  APP.views.cards = function (h) {
    if (h.indexOf("cards-t-") === 0) { fc.topic = h.slice(8); fc.mod = APP.topicById[fc.topic] ? APP.topicById[fc.topic].m : "all"; fc.order = null; history.replaceState(null, "", "#cards"); }
    if (!fc.order) buildDeck();
    var s = S(), n = fc.order.length, c = n ? SG.cards[fc.order[fc.pos]] : null, r = c ? s.cards[c.i] || {} : {};
    var seen = Object.keys(s.cards).length, missed = SG.cards.filter(function (x) { var y = s.cards[x.i]; return y && y.last === false; }).length;
    var KIND = { f: "Definition / fact", c: "Concept: why or how", x: "Misconception check", e: "Example / apply" };
    var tops = SG.topics.filter(function (t) { return fc.mod === "all" || t.m === fc.mod; });
    var out = '<h1>Flashcards</h1><p class="lede">' + SG.cards.length + " cards: definitions, why/how concepts, misconception checks and examples. Tap the card (or press Space) to flip; mark yourself; missed cards come back in the Missed deck.</p>";
    out += '<div class="card"><div class="grid g4">' +
      sel("fcm", "Module", [["all", "All modules"]].concat(SG.modules.map(function (m) { return [m.id, m.short + " " + m.name]; })), fc.mod) +
      sel("fct", "Topic", [["all", "All topics"]].concat(tops.map(function (t) { return [t.id, t.title]; })), fc.topic) +
      sel("fck", "Card type", [["all", "All types"], ["f", KIND.f], ["c", KIND.c], ["x", KIND.x], ["e", KIND.e]], fc.kind) +
      sel("fcd", "Deck", [["all", "All cards"], ["new", "Not seen yet"], ["missed", "Missed last time (" + missed + ")"], ["dif", "Marked difficult"]], fc.deck) +
      '</div><p class="small muted" style="margin:8px 0 0">' + seen + " of " + SG.cards.length + " cards reviewed at least once.</p></div>";
    if (!c) { out += '<div class="card"><p>No cards match these filters.' + (fc.deck !== "all" ? " Switch the deck to All cards." : "") + "</p></div>"; }
    else {
      out += '<div class="fcwrap"><div class="progressline"><span class="num">' + (fc.pos + 1) + " / " + n + "</span>" + APP.bar((fc.pos + 1) / n * 100) + "</div>" +
        '<button class="fc' + (fc.flipped ? " flipped" : "") + '" id="fc" aria-label="Flashcard. Activate to flip."><span class="face front"><span class="fckind">' + APP.modById[c.m].short + " · " + KIND[c.k] + "</span>" + c.f + '</span><span class="face back">' + c.b + "</span></button>" +
        '<div class="row" style="justify-content:space-between"><div class="row"><button class="btn ghost sm" id="fprev">← Prev</button><button class="btn ghost sm" id="fshuf">Shuffle</button><button class="tog dif' + (r.dif ? " on" : "") + '" id="fdif" aria-pressed="' + !!r.dif + '">Difficult</button></div>' +
        '<div class="row"><button class="btn bad sm" id="fno">Missed it</button><button class="btn ok sm" id="fyes">Got it</button></div></div>' +
        '<p class="small muted">' + (r.n ? "Seen " + r.n + "× · correct " + (r.ok || 0) + "×" : "New card") + ' · <a href="#learn-' + c.t + '">' + esc(APP.topicById[c.t].title) + "</a> · Keys: Space flip, ← →, 1 missed, 2 got it</p></div>";
    }
    APP.after(function () {
      ["fcm", "fct", "fck", "fcd"].forEach(function (id) { var el = $("#" + id); el.addEventListener("change", function () { var k = { fcm: "mod", fct: "topic", fck: "kind", fcd: "deck" }[id]; fc[k] = el.value; if (id === "fcm") fc.topic = "all"; buildDeck(); APP.rerender(); }); });
      if (!c) return;
      var flip = function () { fc.flipped = !fc.flipped; $("#fc").classList.toggle("flipped", fc.flipped); };
      var go = function (d) { fc.pos = (fc.pos + d + n) % n; fc.flipped = false; APP.rerender(); };
      var mark = function (ok) { var x = s.cards[c.i] || { n: 0, ok: 0 }; x.n++; if (ok) x.ok++; x.last = ok; x.ts = Date.now(); s.cards[c.i] = x; APP.save(); if (fc.deck === "new" || (fc.deck === "missed" && ok)) { fc.order.splice(fc.pos, 1); if (fc.pos >= fc.order.length) fc.pos = 0; fc.flipped = false; APP.rerender(); } else go(1); };
      $("#fc").addEventListener("click", flip);
      $("#fprev").addEventListener("click", function () { go(-1); });
      $("#fshuf").addEventListener("click", function () { fc.order = APP.shuffle(fc.order); fc.pos = 0; fc.flipped = false; APP.rerender(); APP.toast("Shuffled"); });
      $("#fdif").addEventListener("click", function () { var x = s.cards[c.i] || { n: 0, ok: 0 }; x.dif = !x.dif; s.cards[c.i] = x; APP.save(); APP.rerender(); });
      $("#fno").addEventListener("click", function () { mark(false); });
      $("#fyes").addEventListener("click", function () { mark(true); });
      var key = function (e) { if (/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName)) return; if (e.key === " ") { e.preventDefault(); flip(); } else if (e.key === "ArrowRight") go(1); else if (e.key === "ArrowLeft") go(-1); else if (e.key === "1") mark(false); else if (e.key === "2") mark(true); };
      document.addEventListener("keydown", key); APP.cleanup = function () { document.removeEventListener("keydown", key); };
    });
    return out;
  };
  function sel(id, label, opts, val) { return '<div><label class="lbl" for="' + id + '">' + label + '</label><select id="' + id + '" style="width:100%">' + opts.map(function (o) { return '<option value="' + esc(o[0]) + '"' + (o[0] === val ? " selected" : "") + ">" + esc(o[1]) + "</option>"; }).join("") + "</select></div>"; }
  APP.sel = sel;

  /* ------------------------------------------------------------ SIXTH EXTINCTION */
  APP.views.tse = function () {
    var basis = { sg: '<span class="pill pg">study guide</span>', lec: '<span class="pill pb">lecture review slide</span>', book: '<span class="pill py">⚑ book, not in your files</span>' };
    var h = '<h1>The Sixth Extinction</h1><p class="lede">Elizabeth Kolbert\'s chapters assigned for Exam 3, reviewed through the ecology each one illustrates.</p><p class="flag">' + esc(SG.tseNote) + "</p>";
    h += '<div class="card"><h2>Study-guide examples and the concept behind each</h2>' + APP.table(["Example", "Chapter", "Ecological concept", "Lesson"], [
      ["Little brown bats", "10 · The New Pangaea", "Invasive species / introduced pathogen (white-nose fungus ⚑) spread by human travel", '<a href="#learn-threats">Threats</a>'],
      ["Marine calcifiers", "6 · The Sea Around Us", "Ocean acidification reduces carbonate", '<a href="#learn-acid">Acidification</a>'],
      ["Suci, Sumatran rhino", "11", "Zoos and captive breeding for critically endangered species", '<a href="#learn-conserve">Conservation</a>'],
      ["Kinohi, Hawaiian crow", "13", "Captive breeding / assisted reproduction", '<a href="#learn-conserve">Conservation</a>'],
      ["Amazon forest fragments (BDFFP)", "9 · Islands on Dry Land", "Habitat fragmentation = island biogeography on land", '<a href="#learn-islands">Island biogeography</a>'],
      ["Extinction & biodiversity", "1–5", "Background vs mass extinction; Anthropocene; HIPPO", '<a href="#learn-threats">Biodiversity loss</a>']]) + "</div>";
    h += SG.tse.map(function (c, ci) {
      return '<div class="card"><h2>' + esc(c.ch) + '</h2><p class="small"><b>' + esc(c.topic) + ".</b> " + esc(c.eco) + "</p>" + c.items.map(function (it, ii) {
        return '<div class="sgq"><div class="sghead">' + basis[it[2]] + '</div><p style="font-weight:700;margin:0 0 6px">' + esc(it[0]) + '</p><details><summary>Show answer</summary><p style="margin:6px 0 0">' + esc(it[1]) + "</p></details></div>";
      }).join("") + "</div>";
    }).join("");
    h += '<div class="card"><h2>Practice</h2><p>Professor study-guide questions 39–42 (and 38, 40 on acidification) have new practice variations. ' + [38, 39, 40, 41, 42].map(function (n) { return '<a href="#review-' + n + '">Q' + n + "</a>"; }).join(" · ") + '</p><a class="btn" href="#practice-tse">Quiz: Sixth Extinction concepts</a></div>';
    return h;
  };

  /* ------------------------------------------------------------ CRAM */
  APP.views.cram = function () {
    var weak = APP.weakest(6), s = S();
    var flaggedSg = SG.sg.filter(function (q) { var r = s.sg[q.n]; return r && (r.st === "wrong" || r.dif || r.flg); });
    var h = '<h1>Final cram sheet</h1><p class="lede">The whole exam on one page. Read top to bottom the night before and the morning of.</p>';
    h += '<div class="grid g2"><div class="card" style="border:2px solid var(--bad)"><h2>Your weak areas</h2>' + (weak.length ? "<ul>" + weak.map(function (x) { return '<li><a href="#learn-' + x.t.id + '">' + esc(x.t.title) + "</a> " + APP.masteryPill(x.s) + "<br><span class=\"small\">" + x.t.take + "</span></li>"; }).join("") + "</ul>" : '<p class="muted">Answer some practice questions and your weakest topics will be listed here with their one-line takeaways.</p>') + "</div>";
    h += '<div class="card"><h2>Professor questions you flagged or missed</h2>' + (flaggedSg.length ? "<ul>" + flaggedSg.map(function (q) { return '<li><a href="#review-' + q.n + '">Q' + q.n + "</a>: " + q.a + "</li>"; }).join("") + "</ul>" : '<p class="muted">None yet. Questions you mark wrong, difficult or flagged show up here.</p>') + "</div></div>";
    h += '<div class="cram">' + SG.cram.map(function (c) { return '<div class="card"><h2>' + esc(c[0]) + "</h2><ul>" + c[1].map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul></div>"; }).join("") + "</div>";
    h += '<div class="card callout trap"><b>Exam traps</b><ul>' + SG.traps.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul></div>";
    h += '<div class="grid g2">' + FIG.html("foodweb") + FIG.html("survivorship") + "</div>";
    return h;
  };
})();
