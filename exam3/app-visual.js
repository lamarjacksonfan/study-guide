/* Visual lab: interactive diagrams and graph practice. */
(function () {
  "use strict";
  var SG = window.SG, APP = window.APP, $ = APP.$, $$ = APP.$$, esc = APP.esc, F = FIG.F;
  var TABS = [["web", "Food web A–H"], ["energy", "Energy pyramid"], ["growth", "Growth curves"], ["surv", "Survivorship"], ["clim", "Climograph"], ["island", "Island model"], ["div", "Diversity builder"], ["inter", "Interaction sorter"], ["lake", "Lake seasons"], ["age", "Age pyramids"], ["cycle", "Cycle sorter"], ["cascade", "Trophic cascade"]];
  var cur = "web";
  APP.views.visual = function (h) {
    if (h.indexOf("visual-") === 0) cur = h.slice(7);
    var out = '<h1>Visual lab</h1><p class="lede">Hands-on versions of the figures your exam uses. Figures re-created from your slides or practice PDFs are labeled; the rest are practice figures drawn for this app.</p>';
    out += '<div class="vtabs">' + TABS.map(function (t) { return '<button class="chip' + (cur === t[0] ? " on" : "") + '" data-tab="' + t[0] + '">' + t[1] + "</button>"; }).join("") + '</div><div class="vlab" id="vl"></div>';
    APP.after(function () {
      $$("[data-tab]").forEach(function (b) { b.addEventListener("click", function () { cur = b.getAttribute("data-tab"); history.replaceState(null, "", "#visual-" + cur); APP.rerender(); }); });
      (LAB[cur] || LAB.web)($("#vl"));
    });
    return out;
  };
  var LAB = {};

  /* ---------- food web */
  var FW = { task: 0, sel: {}, checked: false, mode: "id", gone: {} };
  var FWT = [
    ["Select every primary producer.", ["A", "B"], "No arrows point into A or B: energy enters the web through them."],
    ["Select every primary consumer.", ["C", "D"], "C and D eat only producers (A, B)."],
    ["Select every secondary consumer.", ["F", "G"], "F eats C and D; G eats C. Both eat primary consumers."],
    ["Select every tertiary consumer.", ["H", "X"], "H eats F and G. The top species '?' eats G (tertiary) and H (quaternary)."],
    ["Select the species that could be a quaternary consumer.", ["X"], "Only '?' eats a tertiary consumer (H)."],
    ["Select the species most likely to be a decomposer.", ["E"], "E receives energy from producers (A, B) and consumers (C, D) and passes none on."],
    ["Select the species that competes with D for food.", ["C"], "C and D both eat A."],
    ["Select the species that loses ALL its food if C disappears.", ["G"], "G's only prey is C. F still has D; E has A, B, D."]
  ];
  LAB.web = function (root) {
    var t = FWT[FW.task];
    function cls() {
      var c = {};
      Object.keys(FW.sel).forEach(function (k) { if (FW.sel[k]) c[k] = "sel"; });
      if (FW.checked) { Object.keys(FIG.fw.nodes).forEach(function (k) { var want = t[1].indexOf(k) >= 0, got = !!FW.sel[k]; c[k] = want && got ? "good" : want ? "miss" : got ? "badp" : ""; }); }
      return c;
    }
    function draw() {
      var ok = FW.checked && Object.keys(FIG.fw.nodes).every(function (k) { return (t[1].indexOf(k) >= 0) === !!FW.sel[k]; });
      root.innerHTML = '<div class="card"><div class="row" style="justify-content:space-between"><h2 style="margin:0">Read the food web</h2><div class="chips"><button class="chip' + (FW.mode === "id" ? " on" : "") + '" data-fm="id">Identify</button><button class="chip' + (FW.mode === "rm" ? " on" : "") + '" data-fm="rm">Remove a species</button></div></div>' +
        (FW.mode === "id" ? '<p style="font-weight:700;margin:10px 0 4px">Task ' + (FW.task + 1) + " of " + FWT.length + ": " + t[0] + '</p><p class="small muted">Tap species to select them, then check. Arrows point from the eaten to the eater.</p>' :
          '<p style="margin:10px 0 4px"><b>Tap a species to remove it</b> and see who loses food. Tap again to restore.</p>') +
        '<div class="fig">' + F.foodwebSVG(FW.mode === "id" ? cls() : {}, FW.mode === "rm" ? FW.gone : {}) + "</div>" +
        (FW.mode === "id" ? '<div class="qbtns"><button class="btn" id="fwc">Check</button><button class="btn ghost" id="fwr">Clear</button><button class="btn ghost" id="fwn">Next task →</button></div>' +
          (FW.checked ? '<div class="fb ' + (ok ? "fbok" : "fbbad") + '"><span class="verdict">' + (ok ? "Correct." : "Not quite.") + "</span> Answer: " + t[1].map(function (x) { return x === "X" ? "?" : x; }).join(", ") + ". " + t[2] + "</div>" : "") : rmReport()) +
        '<p class="small muted">Redrawn from your lecture review slides and Woolink practice. The top-right species is hidden behind a close button in your screenshots, so its letter is shown as “?”.</p></div>';
      $$("[data-fm]", root).forEach(function (b) { b.addEventListener("click", function () { FW.mode = b.getAttribute("data-fm"); draw(); }); });
      $$(".fwnode", root).forEach(function (g) {
        var act = function () { var n = g.getAttribute("data-n"); if (FW.mode === "id") { FW.sel[n] = !FW.sel[n]; FW.checked = false; } else FW.gone[n] = !FW.gone[n]; draw(); var again = root.querySelector('.fwnode[data-n="' + n + '"]'); if (again) again.focus(); };
        g.addEventListener("click", act); g.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); act(); } });
      });
      if (FW.mode === "id") {
        $("#fwc", root).addEventListener("click", function () { FW.checked = true; draw(); });
        $("#fwr", root).addEventListener("click", function () { FW.sel = {}; FW.checked = false; draw(); });
        $("#fwn", root).addEventListener("click", function () { FW.task = (FW.task + 1) % FWT.length; FW.sel = {}; FW.checked = false; draw(); });
      }
    }
    function rmReport() {
      var gone = Object.keys(FW.gone).filter(function (k) { return FW.gone[k]; });
      if (!gone.length) return '<p class="note">No species removed.</p>';
      var lines = [];
      Object.keys(FIG.fw.nodes).forEach(function (k) {
        if (FW.gone[k]) return;
        var prey = FIG.fw.edges.filter(function (e) { return e[1] === k; }).map(function (e) { return e[0]; });
        if (!prey.length) return;
        var lost = prey.filter(function (p) { return FW.gone[p]; });
        if (!lost.length) return;
        var nm = k === "X" ? "?" : k;
        lines.push(lost.length === prey.length ? "<b>" + nm + " has lost all its food</b> (it ate " + prey.map(nn).join(", ") + ")." : nm + " lost " + lost.map(nn).join(", ") + " but still eats " + prey.filter(function (p) { return !FW.gone[p]; }).map(nn).join(", ") + ".");
      });
      var freed = [];
      gone.forEach(function (g) { FIG.fw.edges.forEach(function (e) { if (e[1] === g && !FW.gone[e[0]]) freed.push(nn(e[0])); }); });
      return '<div class="note">' + (lines.length ? lines.join("<br>") : "No remaining consumer lost food.") + (freed.length ? "<br>Released from predation by " + gone.map(nn).join(", ") + ": " + uniq(freed).join(", ") + " (may increase, a top-down effect)." : "") + "</div>";
    }
    function nn(k) { return k === "X" ? "?" : k; }
    function uniq(a) { return a.filter(function (x, i) { return a.indexOf(x) === i; }); }
    draw();
  };

  /* ---------- energy pyramid */
  LAB.energy = function (root) {
    var st = { E: 20000, eff: 10, lv: 5 };
    function draw() {
      var vals = [], b = "", names = ["Producers", "Primary consumers", "Secondary consumers", "Tertiary consumers", "Quaternary consumers"];
      for (var i = 0; i < st.lv; i++) vals.push(st.E * Math.pow(st.eff / 100, i));
      var maxW = 560;
      vals.forEach(function (v, i) { var w = Math.max(30, maxW * Math.sqrt(v / st.E)), y = 20 + (st.lv - 1 - i) * 50; b += FIG.rect(320 - w / 2, y, w, 42, ["fLeaf", "fOchSoft", "fSoft", "fS2", "fS2"][i], 4) + FIG.t(320, y + 18, names[i], { a: "middle", s: 12, b: true }) + FIG.t(320, y + 34, (v >= 1 ? Math.round(v).toLocaleString() : v.toFixed(2)) + " kcal", { a: "middle", s: 12 }); });
      root.innerHTML = '<div class="card"><h2>Energy pyramid calculator</h2>' +
        slider("pe", "Producer energy (kcal)", 1000, 100000, 1000, st.E) + slider("pf", "Transfer efficiency %", 5, 20, 1, st.eff) + slider("pl", "Trophic levels", 2, 5, 1, st.lv) +
        '<div class="fig">' + FIG.svg(640, 30 + st.lv * 50, b, "Energy pyramid") + "</div>" +
        '<p class="note">Top level gets ' + (100 * Math.pow(st.eff / 100, st.lv - 1)).toPrecision(2) + "% of producer energy. At 10%, each step loses ~90% as heat, which is why chains stop at 4–5 levels (M14.1 slides 18, 23). Bar widths use a square-root scale so small levels stay visible.</p></div>";
      bindSl(root, { pe: "E", pf: "eff", pl: "lv" }, st, draw);
    }
    draw();
  };
  function slider(id, label, min, max, step, val) { return '<div class="slider"><label for="' + id + '">' + label + '</label><input type="range" id="' + id + '" min="' + min + '" max="' + max + '" step="' + step + '" value="' + val + '"><span class="num">' + val + "</span></div>"; }
  function bindSl(root, map, st, draw) { Object.keys(map).forEach(function (id) { var el = $("#" + id, root); el.addEventListener("input", function () { st[map[id]] = +el.value; draw(); var n = $("#" + id, root); n.focus(); }); }); }

  /* ---------- growth */
  var GQ = [["On the graph, where is the logistic population growing fastest (steepest)?", ["Near N = 0", "Near N = K/2", "Near N = K", "It grows at the same rate throughout"], 1, "Growth rate rN(K−N)/K peaks at K/2: many breeders and still plenty of resources."],
    ["If you double K and keep r the same, what happens to the logistic curve?", ["It levels off at a higher N", "It becomes exponential", "It levels off sooner at the same N", "Nothing"], 0, "K sets the plateau. Try the K slider."],
    ["Which curve represents a population with unlimited resources?", ["The S-shaped curve", "The J-shaped curve", "Both", "Neither"], 1, "Exponential (J) growth assumes unlimited resources."]];
  LAB.growth = function (root) {
    var st = { r: 0.5, K: 500, N0: 10, qi: 0, pick: null };
    function draw() {
      var q = GQ[st.qi];
      root.innerHTML = '<div class="card"><h2>Exponential vs logistic</h2>' + slider("gr", "r (per time)", 0.1, 1.2, 0.05, st.r) + slider("gk", "Carrying capacity K", 100, 1000, 50, st.K) + slider("gn", "Starting N", 2, 100, 1, st.N0) +
        '<div class="fig">' + F.growthSVG(st.r, st.K, st.N0, 20) + "</div>" +
        '<div class="q" style="margin-top:10px"><p class="qstem">' + q[0] + '</p><div class="opts">' + q[1].map(function (o, i) { var c = st.pick == null ? "" : i === q[2] ? " right" : i === st.pick ? " wrong" : ""; return '<label class="opt' + c + '"><input type="radio" name="gq" value="' + i + '"' + (st.pick != null ? " disabled" : "") + (st.pick === i ? " checked" : "") + "><span>" + o + "</span></label>"; }).join("") + "</div>" +
        (st.pick == null ? '<div class="qbtns"><button class="btn sm" id="gqc">Check</button></div>' : '<div class="fb ' + (st.pick === q[2] ? "fbok" : "fbbad") + '">' + q[3] + '</div><div class="qbtns"><button class="btn sm" id="gqn">Next question</button></div>') + "</div></div>";
      bindSl(root, { gr: "r", gk: "K", gn: "N0" }, st, draw);
      var c = $("#gqc", root); if (c) c.addEventListener("click", function () { var s = $('input[name="gq"]:checked', root); if (!s) return APP.toast("Pick an answer"); st.pick = +s.value; draw(); });
      var n = $("#gqn", root); if (n) n.addEventListener("click", function () { st.qi = (st.qi + 1) % GQ.length; st.pick = null; draw(); });
    }
    draw();
  };

  /* ---------- survivorship */
  var SQ = [["An oyster releases millions of larvae; almost all die within weeks.", 3], ["A gorilla mother nurses one infant for years; most gorillas die old.", 1], ["A songbird has about the same chance of dying each year of its life.", 2], ["A sea turtle lays 100 eggs per nest; few hatchlings reach the sea alive.", 3], ["A whale calf is protected by its mother; whales rarely die young.", 1], ["A lizard faces constant predation risk at every age.", 2], ["An oak drops thousands of acorns; mature oaks live centuries.", 3], ["Humans in a country with modern medicine.", 1]];
  LAB.surv = function (root) {
    var st = { i: 0, pick: null, score: 0, n: 0 };
    function draw() {
      var q = SQ[st.i];
      root.innerHTML = '<div class="card"><h2>Match the organism to its curve</h2><div class="fig">' + F.survivorshipSVG(st.pick != null ? q[1] : 0) + '</div><p style="font-weight:700">' + q[0] + '</p><div class="row">' + [1, 2, 3].map(function (k) { var c = st.pick == null ? "ghost" : k === q[1] ? "ok" : k === st.pick ? "bad" : "ghost"; return '<button class="btn ' + c + '" data-sv="' + k + '"' + (st.pick != null ? " disabled" : "") + ">Type " + ["", "I", "II", "III"][k] + "</button>"; }).join("") + '<span class="small muted num">' + st.score + "/" + st.n + "</span></div>" +
        (st.pick != null ? '<div class="fb ' + (st.pick === q[1] ? "fbok" : "fbbad") + '">' + ["", "Type I: death is concentrated in old age (lots of parental care).", "Type II: a constant death rate at every age.", "Type III: very high mortality among the young; survivors live long."][q[1]] + '</div><div class="qbtns"><button class="btn sm" id="svn">Next organism</button></div>' : "") + "</div>";
      $$("[data-sv]", root).forEach(function (b) { b.addEventListener("click", function () { st.pick = +b.getAttribute("data-sv"); st.n++; if (st.pick === q[1]) st.score++; draw(); }); });
      var n = $("#svn", root); if (n) n.addEventListener("click", function () { st.i = (st.i + 1) % SQ.length; st.pick = null; draw(); });
    }
    draw();
  };

  /* ---------- climograph */
  function inPoly(x, y, pts) { var c = false; for (var i = 0, j = pts.length - 1; i < pts.length; j = i++) { var xi = pts[i][0], yi = pts[i][1], xj = pts[j][0], yj = pts[j][1]; if (((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi)) c = !c; } return c; }
  function biomeAt(T, P) { for (var i = 0; i < F.whittakerRegions.length; i++) if (inPoly(T, P, F.whittakerRegions[i][1])) return F.whittakerRegions[i][0]; return "outside the plotted biomes"; }
  var CQ = [["Tropical forest (seasonal → rainforest)", "Click anywhere in tropical forest."], ["Tundra", "Click in tundra."], ["Savanna", "Click in savanna."], ["Boreal forest", "Click in boreal forest (taiga)."], ["Subtropical desert", "Click in hot desert."], ["Chaparral (woodland/shrubland)", "Click in chaparral."]];
  LAB.clim = function (root) {
    var st = { pt: null, mode: "explore", qi: 0, res: null };
    function draw() {
      var extra = st.pt ? '<circle cx="' + F.wx(st.pt[0]) + '" cy="' + F.wy(st.pt[1]) + '" r="7" class="fBad"/>' : "";
      root.innerHTML = '<div class="card"><div class="row" style="justify-content:space-between"><h2 style="margin:0">Climograph</h2><div class="chips"><button class="chip' + (st.mode === "explore" ? " on" : "") + '" data-cm="explore">Explore</button><button class="chip' + (st.mode === "find" ? " on" : "") + '" data-cm="find">Find the biome</button></div></div>' +
        (st.mode === "find" ? '<p style="font-weight:700;margin:8px 0">' + CQ[st.qi][1] + "</p>" : '<p class="small" style="margin:8px 0">Tap a spot to read off its temperature, precipitation and biome.</p>') +
        '<div class="fig" id="cfig" style="cursor:crosshair">' + F.whittakerSVG(extra) + "</div>" +
        (st.pt ? '<p class="note">' + st.pt[0].toFixed(0) + " °C, " + st.pt[1].toFixed(0) + " cm/yr → <b>" + biomeAt(st.pt[0], st.pt[1]) + "</b></p>" : "") +
        (st.res != null ? '<div class="fb ' + (st.res ? "fbok" : "fbbad") + '">' + (st.res ? "Correct." : "That point is " + biomeAt(st.pt[0], st.pt[1]) + ".") + ' <button class="btn sm" id="cnext">Next</button></div>' : "") +
        '<p class="small muted">Simplified, approximate boundaries after Whittaker, drawn for practice. Real biome edges blur, and soils, fire and seasonality matter too.</p></div>';
      $$("[data-cm]", root).forEach(function (b) { b.addEventListener("click", function () { st.mode = b.getAttribute("data-cm"); st.pt = null; st.res = null; draw(); }); });
      var svgEl = $("#cfig svg", root);
      svgEl.addEventListener("click", function (e) {
        var r = svgEl.getBoundingClientRect(), sx = (e.clientX - r.left) / r.width * 610, sy = (e.clientY - r.top) / r.height * 428;
        var T = (sx - 70) / 520 * 45 - 15, P = (380 - sy) / 350 * 450;
        if (T < -15 || T > 30 || P < 0 || P > 450) return;
        st.pt = [T, P]; if (st.mode === "find") st.res = biomeAt(T, P) === CQ[st.qi][0]; draw();
      });
      var n = $("#cnext", root); if (n) n.addEventListener("click", function () { st.qi = (st.qi + 1) % CQ.length; st.pt = null; st.res = null; draw(); });
    }
    draw();
  };

  /* ---------- island */
  var ISL = [["A", 260, 70, 24], ["B", 360, 130, 15], ["C", 150, 210, 42], ["D", 460, 200, 34], ["E", 505, 290, 13]]; // name, x, y, radius; mainland at left
  LAB.island = function (root) {
    var st = { size: "large", dist: "near", q: 0, pick: null };
    var IQ = [["Which island should have the GREATEST species richness at equilibrium?", "C", "C is both the largest island and the nearest to the mainland: high immigration, low extinction."], ["Which island should have the LOWEST species richness?", "E", "E is the smallest and farthest: low immigration and high extinction."], ["Which island should have the LOWEST extinction rate?", "C", "Extinction depends on size; C is the largest."], ["Which island should have the LOWEST immigration rate?", "E", "Immigration depends on distance; E is farthest from the mainland."]];
    function map() {
      var b = '<path d="M0,0 L70,0 Q95,160 70,330 L0,330 Z" class="fLand"/>' + FIG.t(30, 170, "Mainland", { a: "middle", s: 13, b: true, r: -90 });
      ISL.forEach(function (i) { var c = st.pick == null ? "fLand" : i[0] === IQ[st.q][1] ? "fOk" : i[0] === st.pick ? "fBad" : "fLand"; b += '<g class="fwnode" data-isl="' + i[0] + '" tabindex="0" role="button" aria-label="Island ' + i[0] + '"><circle cx="' + i[1] + '" cy="' + i[2] + '" r="' + i[3] + '" class="' + c + '" stroke="currentColor"/>' + FIG.t(i[1], i[2] + 5, i[0], { a: "middle", s: 15, b: true }) + "</g>"; });
      return FIG.svg(560, 330, '<rect width="560" height="330" class="fWater"/>' + b, "Five islands near a mainland");
    }
    function draw() {
      var q = IQ[st.q];
      root.innerHTML = '<div class="grid g2"><div class="card"><h2>Rates and equilibrium</h2><div class="row"><span class="label" style="margin:0">Island size</span><div class="chips">' + ["small", "large"].map(function (s) { return '<button class="chip' + (st.size === s ? " on" : "") + '" data-is="' + s + '">' + s + "</button>"; }).join("") + '</div><span class="label" style="margin:0">Distance</span><div class="chips">' + ["near", "far"].map(function (s) { return '<button class="chip' + (st.dist === s ? " on" : "") + '" data-id="' + s + '">' + s + "</button>"; }).join("") + "</div></div>" +
        '<div class="fig">' + F.islandSVG(st.size, st.dist) + '</div><p class="note">Red dot = equilibrium for a <b>' + st.size + ", " + st.dist + "</b> island. Immigration (teal) falls as the island fills; extinction (ochre) rises. Dashed lines are far immigration / large-island extinction.</p></div>" +
        '<div class="card"><h2>Five-island practice</h2><p class="small">This is a practice map drawn for this app, <b>not</b> the figure from study-guide Q43 (that figure wasn\'t in your files). Islands formed at the same time.</p><div class="fig">' + map() + '</div><p style="font-weight:700">' + q[0] + "</p>" + (st.pick != null ? '<div class="fb ' + (st.pick === q[1] ? "fbok" : "fbbad") + '">' + (st.pick === q[1] ? "Correct. " : "Answer: " + q[1] + ". ") + q[2] + '</div><div class="qbtns"><button class="btn sm" id="isn">Next question</button></div>' : '<p class="small muted">Tap an island.</p>') + "</div></div>";
      $$("[data-is]", root).forEach(function (b) { b.addEventListener("click", function () { st.size = b.getAttribute("data-is"); draw(); }); });
      $$("[data-id]", root).forEach(function (b) { b.addEventListener("click", function () { st.dist = b.getAttribute("data-id"); draw(); }); });
      $$("[data-isl]", root).forEach(function (g) { var act = function () { if (st.pick == null) { st.pick = g.getAttribute("data-isl"); draw(); } }; g.addEventListener("click", act); g.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); act(); } }); });
      var n = $("#isn", root); if (n) n.addEventListener("click", function () { st.q = (st.q + 1) % IQ.length; st.pick = null; draw(); });
    }
    draw();
  };

  /* ---------- diversity */
  LAB.div = function (root) {
    var names = ["Elephant", "Lion", "Giraffe", "Hippo", "Kudu", "Aardwolf"], st = { a: [15, 2, 2, 1, 3, 2], b: [4, 3, 5, 4, 4, 4] };
    function H(c) { var n = c.reduce(function (x, y) { return x + y; }, 0), h = 0; c.forEach(function (x) { if (x > 0) { var p = x / n; h -= p * Math.log(p); } }); return n ? h : 0; }
    function draw() {
      var ha = H(st.a), hb = H(st.b), ra = st.a.filter(function (x) { return x > 0; }).length, rb = st.b.filter(function (x) { return x > 0; }).length;
      root.innerHTML = '<div class="card"><h2>Diversity builder</h2><p class="small">Change the counts and watch richness and the Shannon index. Starting values are the lecture example (M13 slide 40). Challenge: give both communities the same richness but make Community 1 the more diverse one.</p>' +
        '<div class="tw"><table class="t"><thead><tr><th>Species</th><th>Community 1</th><th>Community 2</th></tr></thead><tbody>' + names.map(function (nm, i) { return "<tr><th>" + nm + '</th><td><input type="number" min="0" max="99" value="' + st.a[i] + '" data-c="a" data-i="' + i + '" aria-label="' + nm + ' in community 1" style="width:80px"></td><td><input type="number" min="0" max="99" value="' + st.b[i] + '" data-c="b" data-i="' + i + '" aria-label="' + nm + ' in community 2" style="width:80px"></td></tr>'; }).join("") + "</tbody></table></div>" +
        '<div class="fig">' + F.diversitySVG(st.a, st.b, names) + "</div>" +
        '<p class="note">Richness: ' + ra + " vs " + rb + " · Shannon H: " + ha.toFixed(2) + " vs " + hb.toFixed(2) + " → " + (Math.abs(ha - hb) < 0.005 ? "equal diversity" : (ha > hb ? "Community 1" : "Community 2") + " is more diverse") + (ra === rb && Math.abs(ha - hb) >= 0.005 ? ". Same richness, so the difference comes entirely from evenness." : ".") + "</p></div>";
      $$("[data-c]", root).forEach(function (inp) { inp.addEventListener("change", function () { st[inp.getAttribute("data-c")][+inp.getAttribute("data-i")] = Math.max(0, Math.min(99, +inp.value || 0)); draw(); }); });
    }
    draw();
  };

  /* ---------- interaction sorter */
  var IS = [["Bees collect nectar and carry pollen between flowers.", "+/+"], ["Mistletoe taps a tree's xylem for water.", "+/−"], ["An orchid grows on a branch, taking nothing from the tree.", "+/0"], ["Two warbler species eat the same scarce caterpillars.", "−/−"], ["A wolf kills and eats an elk.", "+/−"], ["Ants defend an acacia that feeds and houses them.", "+/+"], ["Barnacles ride on a whale without affecting it.", "+/0"], ["A tick feeds on a deer's blood.", "+/−"], ["Lions and hyenas fight over the same limited carcasses.", "−/−"], ["Cattle egrets catch insects flushed by grazing cattle.", "+/0"]];
  LAB.inter = function (root) {
    var st = { i: 0, pick: null, s: 0, n: 0 }, NAMES = { "+/+": "mutualism", "+/−": "predation / parasitism / herbivory", "+/0": "commensalism", "−/−": "competition" };
    function draw() {
      var q = IS[st.i];
      root.innerHTML = '<div class="card"><h2>Interaction sorter</h2>' + FIG.F.signs() + '<p style="font-weight:700;font-size:1.05rem">' + q[0] + '</p><div class="row">' + Object.keys(NAMES).map(function (k) { var c = st.pick == null ? "ghost" : k === q[1] ? "ok" : k === st.pick ? "bad" : "ghost"; return '<button class="btn ' + c + '" data-is="' + k + '"' + (st.pick ? " disabled" : "") + ">" + k + "</button>"; }).join("") + '<span class="small muted num">' + st.s + "/" + st.n + "</span></div>" +
        (st.pick ? '<div class="fb ' + (st.pick === q[1] ? "fbok" : "fbbad") + '">' + q[1] + " = " + NAMES[q[1]] + '.</div><div class="qbtns"><button class="btn sm" id="isn2">Next</button></div>' : "") + "</div>";
      $$("[data-is]", root).forEach(function (b) { b.addEventListener("click", function () { st.pick = b.getAttribute("data-is"); st.n++; if (st.pick === q[1]) st.s++; draw(); }); });
      var n = $("#isn2", root); if (n) n.addEventListener("click", function () { st.i = (st.i + 1) % IS.length; st.pick = null; draw(); });
    }
    draw();
  };

  /* ---------- lake seasons */
  LAB.lake = function (root) {
    var S4 = [["Summer", "Stratified. Warm, light, O₂-rich water floats on cold bottom water. The thermocline blocks mixing, so nutrients stay trapped at the bottom and decomposers slowly use up bottom O₂."], ["Fall", "Turnover. Surface water cools to ~4 °C (densest), sinks, and the whole lake mixes. Nutrients rise to the light; O₂ reaches the bottom."], ["Winter", "Stratified again: 0 °C ice and cold water on top, 4 °C water (densest) on the bottom."], ["Spring", "Turnover. Ice melts, surface warms to 4 °C, sinks; the lake mixes, fueling a spring phytoplankton bloom."]], st = { i: 0 };
    function draw() {
      root.innerHTML = '<div class="card"><h2>Lake through the seasons</h2><div class="chips">' + S4.map(function (s, i) { return '<button class="chip' + (st.i === i ? " on" : "") + '" data-ls="' + i + '">' + s[0] + "</button>"; }).join("") + "</div>" + FIG.html("turnover") + '<p class="note"><b>' + S4[st.i][0] + ":</b> " + S4[st.i][1] + '</p><p class="small">Ocean upwelling has the same effect by a different cause: wind pushes surface water offshore and deep, nutrient-rich water rises to replace it.</p></div>';
      $$("[data-ls]", root).forEach(function (b) { b.addEventListener("click", function () { st.i = +b.getAttribute("data-ls"); draw(); }); });
    }
    draw();
  };

  /* ---------- age pyramids */
  LAB.age = function (root) {
    var P = [["grow", "Pyramid 1", "Rapid growth: a broad base of children who will soon reproduce."], ["decline", "Pyramid 2", "Decline: fewer young people than parents' generation."], ["stable", "Pyramid 3", "Stable / slow growth: similar numbers in each age class."]], st = {};
    function draw() {
      root.innerHTML = '<div class="card"><h2>Predict from the pyramid</h2><p class="small">Illustrative shapes, not census data. For each, predict the next two generations.</p><div class="grid g3">' + P.map(function (p, i) {
        var pick = st[i];
        return '<div><div class="fig">' + FIG.svg(220, 232, F.pyramidSVG(p[0], p[1]), p[1]) + '</div><div class="row">' + [["grow", "Grow"], ["stable", "Stable"], ["decline", "Decline"]].map(function (o) { var c = pick == null ? "ghost" : o[0] === p[0] ? "ok" : o[0] === pick ? "bad" : "ghost"; return '<button class="btn sm ' + c + '" data-ap="' + i + '" data-v="' + o[0] + '"' + (pick ? " disabled" : "") + ">" + o[1] + "</button>"; }).join("") + "</div>" + (pick ? '<p class="small" style="margin-top:6px">' + p[2] + "</p>" : "") + "</div>";
      }).join("") + "</div></div>";
      $$("[data-ap]", root).forEach(function (b) { b.addEventListener("click", function () { st[+b.getAttribute("data-ap")] = b.getAttribute("data-v"); draw(); }); });
    }
    draw();
  };

  /* ---------- cycle sorter */
  var CY = [["Bacteria convert N₂ gas into ammonia.", "N"], ["Plants take in CO₂ during photosynthesis.", "C"], ["Weathering of rock releases phosphate into soil.", "P"], ["Burning coal releases ancient stored carbon.", "C"], ["This element has no significant atmospheric reservoir.", "P"], ["Legume root nodules host the key microbes.", "N"], ["Ocean uptake of this gas causes acidification.", "C"], ["Animals obtain this element mainly as protein.", "N"], ["Largest reservoir: marine sedimentary rock.", "P"], ["Respiration returns it to the atmosphere.", "C"]];
  LAB.cycle = function (root) {
    var st = { i: 0, pick: null, s: 0, n: 0 };
    function draw() {
      var q = CY[st.i];
      root.innerHTML = '<div class="card"><h2>Which cycle?</h2>' + FIG.html("ncycle") + '<p style="font-weight:700;font-size:1.05rem">' + q[0] + '</p><div class="row">' + [["C", "Carbon"], ["N", "Nitrogen"], ["P", "Phosphorus"]].map(function (o) { var c = st.pick == null ? "ghost" : o[0] === q[1] ? "ok" : o[0] === st.pick ? "bad" : "ghost"; return '<button class="btn ' + c + '" data-cy="' + o[0] + '"' + (st.pick ? " disabled" : "") + ">" + o[1] + "</button>"; }).join("") + '<span class="small muted num">' + st.s + "/" + st.n + "</span></div>" + (st.pick ? '<div class="qbtns"><button class="btn sm" id="cyn">Next</button></div>' : "") + "</div>";
      $$("[data-cy]", root).forEach(function (b) { b.addEventListener("click", function () { st.pick = b.getAttribute("data-cy"); st.n++; if (st.pick === q[1]) st.s++; draw(); }); });
      var n = $("#cyn", root); if (n) n.addEventListener("click", function () { st.i = (st.i + 1) % CY.length; st.pick = null; draw(); });
    }
    draw();
  };

  /* ---------- cascade */
  LAB.cascade = function (root) {
    root.innerHTML = '<div class="card"><h2>Trophic cascade</h2>' + FIG.html("cascade") + '<p>Paine\'s sea stars work the same way: remove the predator of the dominant competitor (mussels) and the dominant takes over, lowering diversity.</p><p class="small">The 2013 sea-star wasting disease (M13 slide 49): mussels ↑ → otters ate more mussels and fewer urchins → urchins ↑ → kelp ↓.</p><a class="btn sm" href="#learn-keystone">Open the keystone lesson</a></div>';
  };
})();
