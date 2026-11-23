/* Figure library: inline SVG drawn from theme tokens (works in light and dark).
   FIG.html(key) returns a <figure>. Figures redrawn from lecture slides or practice PDFs say so in the caption. */
(function () {
  "use strict";
  var FIG = window.FIG = {};
  function fig(svg, cap) { return '<figure class="fig">' + svg + (cap ? "<figcaption>" + cap + "</figcaption>" : "") + "</figure>"; }
  function svg(w, h, body, label) { return '<svg viewBox="0 0 ' + w + " " + h + '" width="' + w + '" role="img" aria-label="' + (label || "") + '">' + defs() + body + "</svg>"; }
  function defs() {
    return '<defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="fInk"/></marker>' +
      '<marker id="aha" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="fAcc"/></marker>' +
      '<marker id="aho" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="fOch"/></marker></defs>';
  }
  function t(x, y, s, o) { o = o || {}; return '<text x="' + x + '" y="' + y + '"' + (o.a ? ' text-anchor="' + o.a + '"' : "") + ' font-size="' + (o.s || 13) + '"' + (o.b ? ' font-weight="700"' : "") + (o.c ? ' class="' + o.c + '"' : "") + (o.r ? ' transform="rotate(' + o.r + " " + x + " " + y + ')"' : "") + ">" + s + "</text>"; }
  function line(x1, y1, x2, y2, c, m) { return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" class="' + (c || "ln") + '"' + (m ? ' marker-end="url(#' + m + ')"' : "") + "/>"; }
  function rect(x, y, w, h, c, rx) { return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + (rx || 0) + '" class="' + c + '"/>'; }
  FIG.t = t; FIG.line = line; FIG.rect = rect; FIG.svg = svg; FIG.wrap = fig;

  // generic flow chain of boxes
  function chain(items, cap, w) {
    w = w || 640; var bh = 46, gap = 18, h = items.length * (bh + gap) + 10, b = "";
    items.forEach(function (s, i) {
      var y = 6 + i * (bh + gap);
      b += rect(20, y, w - 40, bh, i % 2 ? "fS2" : "fSoft", 8) + t(w / 2, y + 28, s, { a: "middle", s: 14 });
      if (i < items.length - 1) b += line(w / 2, y + bh + 1, w / 2, y + bh + gap - 2, "ln", "ah");
    });
    return fig(svg(w, h, b, cap), cap);
  }
  FIG.chain = chain;

  var F = {};
  F.levels = function () {
    var b = rect(10, 10, 620, 230, "fLand", 14) + t(24, 34, "ECOSYSTEM = community + abiotic factors (sun, water, soil, climate)", { s: 13, b: true }) +
      rect(30, 48, 440, 176, "fLeaf", 12) + t(44, 70, "COMMUNITY = populations of different species", { s: 13, b: true }) +
      rect(48, 84, 190, 124, "fSurf", 10) + t(60, 106, "POPULATION", { s: 12, b: true }) + t(60, 122, "one species", { s: 12, c: "mut" }) +
      rect(64, 136, 110, 56, "fSoft", 8) + t(119, 160, "ORGANISM", { a: "middle", s: 12, b: true }) + t(119, 178, "one individual", { a: "middle", s: 11, c: "mut" }) +
      rect(256, 84, 196, 124, "fSurf", 10) + t(268, 106, "POPULATION", { s: 12, b: true }) + t(268, 122, "a second species", { s: 12, c: "mut" }) +
      t(550, 60, "ABIOTIC", { a: "middle", s: 11, c: "mut", b: true }) + t(550, 85, "Light", { a: "middle", s: 14 }) + t(550, 120, "Water", { a: "middle", s: 14 }) + t(550, 160, "Temperature", { a: "middle", s: 14 }) + t(550, 200, "Soil, minerals", { a: "middle", s: 14 });
    return fig(svg(640, 250, b, "Nested levels of ecological organization"), "Each level contains the one inside it. Only the ecosystem includes the abiotic environment (M11 slides 4–8). The biosphere contains all ecosystems.");
  };
  F.cells = function () {
    var lats = [["90°N", 30, "sinks · dry", "polar desert, tundra"], ["60°N", 100, "rises · wet", "boreal forest"], ["30°N", 170, "sinks · dry", "deserts"], ["0°", 240, "rises · very wet", "tropical rainforest"], ["30°S", 310, "sinks · dry", "deserts"], ["60°S", 380, "rises · wet", "(Southern Ocean)"], ["90°S", 450, "sinks · dry", "Antarctic desert"]];
    var b = "";
    lats.forEach(function (l, i) {
      var y = l[1], up = l[2].indexOf("rises") === 0;
      b += line(70, y, 560, y, "gr") + t(60, y + 4, l[0], { a: "end", s: 13, b: true });
      b += up ? line(130, y + 22, 130, y - 22, "acc", "aha") : line(130, y - 22, 130, y + 22, "och", "aho");
      b += t(150, y + 5, l[2], { s: 13, c: up ? "" : "mut" }) + t(330, y + 5, l[3], { s: 13 });
    });
    b += t(330, 14, "Typical biome", { s: 12, b: true, c: "mut" }) + t(150, 14, "Air", { s: 12, b: true, c: "mut" });
    return fig(svg(580, 470, b, "Rising and sinking air by latitude"), "Uneven heating makes air rise (and drop rain) at 0° and 60°, and sink (dry) at 30° and 90° (M11 slide 20). Practice figure drawn for this app.");
  };
  // Whittaker-style climograph; also used by the Visual lab (with click handler)
  F.whittakerRegions = [
    ["Tundra", [[-15, 0], [-5, 0], [-5, 100], [-15, 100]], "fS2"],
    ["Boreal forest", [[-5, 20], [5, 20], [5, 200], [-5, 200]], "fLeaf"],
    ["Cold desert / temperate grassland", [[-5, 0], [20, 0], [20, 60], [5, 60], [5, 20], [-5, 20]], "fLand"],
    ["Chaparral (woodland/shrubland)", [[10, 60], [20, 60], [20, 110], [10, 110]], "fOchSoft"],
    ["Temperate deciduous forest", [[5, 60], [10, 60], [10, 110], [20, 110], [20, 220], [5, 220]], "fLeaf"],
    ["Temperate rainforest", [[5, 220], [20, 220], [20, 300], [5, 300]], "fSoft"],
    ["Subtropical desert", [[20, 0], [30, 0], [30, 50], [20, 50]], "fLand"],
    ["Savanna", [[20, 50], [30, 50], [30, 150], [20, 150]], "fOchSoft"],
    ["Tropical forest (seasonal → rainforest)", [[20, 150], [30, 150], [30, 450], [20, 450]], "fSoft"]
  ];
  F.wx = function (T) { return 70 + (T + 15) / 45 * 520; };
  F.wy = function (P) { return 380 - P / 450 * 350; };
  F.whittakerSVG = function (extra) {
    var b = "";
    F.whittakerRegions.forEach(function (r) {
      var pts = r[1].map(function (p) { return F.wx(p[0]) + "," + F.wy(p[1]); }).join(" ");
      b += '<polygon points="' + pts + '" class="' + r[2] + '" stroke="currentColor" stroke-opacity=".25"/>';
    });
    var lab = [["Tundra", -10, 50], ["Boreal", 0, 110], ["forest", 0, 95], ["Grassland /", 7, 38], ["cold desert", 7, 22], ["Chaparral", 15, 85], ["Temperate", 12.5, 170], ["forest", 12.5, 155], ["Temp. rainforest", 12.5, 260], ["Desert", 25, 22], ["Savanna", 25, 100], ["Tropical", 25, 310], ["forest", 25, 295]];
    lab.forEach(function (l) { b += t(F.wx(l[1]), F.wy(l[2]), l[0], { a: "middle", s: 12, b: true }); });
    b += line(70, 380, 590, 380, "ax") + line(70, 380, 70, 30, "ax");
    [-15, -5, 5, 15, 25].forEach(function (T) { b += t(F.wx(T), 398, T + "°", { a: "middle", s: 11, c: "mut" }); });
    [0, 100, 200, 300, 400].forEach(function (P) { b += t(62, F.wy(P) + 4, P, { a: "end", s: 11, c: "mut" }); });
    b += t(330, 418, "Mean annual temperature (°C)", { a: "middle", s: 12 }) + t(18, 205, "Annual precipitation (cm)", { a: "middle", s: 12, r: -90 });
    return svg(610, 428, b + (extra || ""), "Climograph of terrestrial biomes");
  };
  F.whittaker = function () { return fig(F.whittakerSVG(), "Simplified temperature × precipitation climograph (after Whittaker). Boundaries are approximate and drawn for practice. Note tropical forest: narrow temperature band, widest precipitation range."); };
  F.zones = function () {
    var b = rect(0, 0, 640, 300, "fWater") +
      '<path d="M0,40 L90,40 L130,70 L300,95 L360,250 L640,280 L640,300 L0,300 Z" class="fLand"/>' +
      line(0, 140, 640, 140, "och") + t(630, 134, "≈200 m: bottom of photic zone", { a: "end", s: 12, c: "" }) +
      t(630, 160, "aphotic", { a: "end", s: 12, c: "mut" }) + t(630, 30, "photic", { a: "end", s: 12, c: "mut" }) +
      t(60, 30, "Intertidal", { a: "middle", s: 12, b: true }) + t(210, 62, "Neritic (continental shelf)", { a: "middle", s: 12, b: true }) + t(210, 80, "coral reefs, high light & O₂", { a: "middle", s: 11 }) +
      t(480, 90, "Pelagic (open ocean)", { a: "middle", s: 12, b: true }) + t(480, 108, "light at top, few nutrients", { a: "middle", s: 11 }) +
      t(330, 200, "Benthic", { a: "middle", s: 12, b: true, r: 68 }) + t(500, 292, "Abyssal (>4000 m): dark, cold, high pressure", { a: "middle", s: 12, b: true });
    return fig(svg(640, 300, b, "Ocean zones"), "Ocean zones (M11 slides 49–51). Not to scale. Practice figure drawn for this app.");
  };
  F.turnover = function () {
    var panels = [["Summer: stratified", ["22°", "18°", "thermocline", "5°", "4°"], false], ["Fall: turnover", ["4°", "4°", "mixing", "4°", "4°"], true], ["Winter: stratified", ["0° ice", "2°", "", "4°", "4°"], false], ["Spring: turnover", ["4°", "4°", "mixing", "4°", "4°"], true]];
    var b = "";
    panels.forEach(function (p, i) {
      var x = 10 + i * 157;
      b += t(x + 72, 18, p[0], { a: "middle", s: 12, b: true });
      b += '<path d="M' + x + ',30 L' + (x + 145) + ',30 L' + (x + 120) + ',190 L' + (x + 25) + ',190 Z" class="fWater"/>';
      if (!p[2]) { b += line(x + 12, 100, x + 133, 100, "och"); }
      p[1].forEach(function (s, j) { if (s) b += t(x + 72, 50 + j * 34, s, { a: "middle", s: 12, c: j === 2 ? "mut" : "" }); });
      if (p[2]) { b += line(x + 40, 60, x + 50, 170, "acc", "aha") + line(x + 105, 170, x + 95, 60, "och", "aho"); }
    });
    b += t(320, 214, "Turnover carries nutrients UP to the light and oxygen DOWN to the bottom.", { a: "middle", s: 12 });
    return fig(svg(640, 224, b, "Seasonal lake turnover"), "Temperate lake cycle (M11 slides 52, 59). Water is densest at 4 °C, so the lake mixes when the whole column reaches that temperature. Practice figure drawn for this app.");
  };
  F.greenhouse = function () {
    var b = rect(0, 230, 640, 50, "fLand") + t(320, 262, "Earth's surface warms and emits infrared (heat)", { a: "middle", s: 13 }) +
      rect(0, 70, 640, 44, "fOchSoft", 0) + t(320, 97, "Greenhouse gases: CO₂ · H₂O vapor · CH₄ · N₂O", { a: "middle", s: 13, b: true }) +
      t(60, 30, "Sunlight", { s: 15, b: true }) + line(90, 40, 170, 226, "och", "aho") +
      line(300, 226, 300, 118, "bads acc", "aha") + line(300, 68, 300, 20, "acc", "aha") + t(312, 28, "some IR escapes to space", { s: 12, c: "mut" }) +
      line(420, 226, 420, 118, "acc", "aha") + line(430, 118, 470, 224, "acc", "aha") + t(480, 170, "absorbed and", { s: 12 }) + t(480, 186, "re-emitted downward", { s: 12 });
    return fig(svg(640, 280, b, "Greenhouse effect"), "Greenhouse gases absorb outgoing infrared and re-emit part of it back toward the surface (M11 slide 63). Practice figure drawn for this app.");
  };
  function rng(seed) { return function () { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; }; }
  F.dispersion = function () {
    var b = "", names = ["Clumped", "Uniform", "Random"], r = rng(7);
    names.forEach(function (n, i) {
      var x0 = 10 + i * 210; b += rect(x0, 26, 190, 150, "fLand", 8) + t(x0 + 95, 18, n, { a: "middle", s: 13, b: true });
      var pts = [];
      if (i === 0) { [[50, 60], [140, 70], [90, 135]].forEach(function (c) { for (var k = 0; k < 6; k++) pts.push([c[0] + (r() - .5) * 34, c[1] + (r() - .5) * 30]); }); }
      if (i === 1) { for (var a = 0; a < 4; a++) for (var c2 = 0; c2 < 5; c2++) pts.push([24 + c2 * 36, 50 + a * 34]); }
      if (i === 2) { for (var k2 = 0; k2 < 18; k2++) pts.push([15 + r() * 160, 40 + r() * 128]); }
      pts.forEach(function (p) { b += '<circle cx="' + (x0 + p[0]) + '" cy="' + p[1] + '" r="5" class="fM13"/>'; });
    });
    b += t(105, 196, "patchy resources, groups", { a: "middle", s: 11, c: "mut" }) + t(315, 196, "territoriality, competition", { a: "middle", s: 11, c: "mut" }) + t(525, 196, "no strong interactions", { a: "middle", s: 11, c: "mut" });
    return fig(svg(640, 206, b, "Dispersion patterns"), "Three dispersion patterns (M12 slides 18–21).");
  };
  F.survivorshipSVG = function (hl) {
    var X = function (p) { return 70 + p / 100 * 500; }, Y = function (v) { return 320 - Math.log10(v) / 3 * 290; };
    var c1 = [], c2 = [], c3 = [];
    for (var p = 0; p <= 100; p += 2) {
      c1.push([p, p < 70 ? 1000 - p * 1.2 : Math.max(1, 916 * Math.pow(1 - (p - 70) / 30, 2.2))]);
      c2.push([p, Math.pow(10, 3 - p / 100 * 3)]);
      c3.push([p, p < 12 ? Math.pow(10, 3 - p / 12 * 2.2) : Math.max(1, 6.3 * Math.pow(1 - (p - 12) / 88, 0.6))]);
    }
    function path(c) { return c.map(function (q, i) { return (i ? "L" : "M") + X(q[0]).toFixed(1) + "," + Y(Math.max(1, q[1])).toFixed(1); }).join(" "); }
    var b = line(70, 320, 580, 320, "ax") + line(70, 320, 70, 25, "ax");
    [1, 10, 100, 1000].forEach(function (v) { b += line(66, Y(v), 580, Y(v), "gr") + t(60, Y(v) + 4, v, { a: "end", s: 11, c: "mut" }); });
    [0, 25, 50, 75, 100].forEach(function (v) { b += t(X(v), 338, v + "%", { a: "middle", s: 11, c: "mut" }); });
    b += '<path d="' + path(c1) + '" class="acc"' + (hl && hl !== 1 ? ' stroke-opacity=".3"' : "") + "/>" + '<path d="' + path(c2) + '" class="och"' + (hl && hl !== 2 ? ' stroke-opacity=".3"' : "") + "/>" + '<path d="' + path(c3) + '" class="ln m14s" stroke-width="2.5"' + (hl && hl !== 3 ? ' stroke-opacity=".3"' : "") + "/>";
    b += t(X(40), Y(900) - 8, "Type I", { s: 13, b: true }) + t(X(50), Y(31) - 10, "Type II", { s: 13, b: true }) + t(X(30), Y(4) - 8, "Type III", { s: 13, b: true });
    b += t(325, 358, "Percent of maximum lifespan", { a: "middle", s: 12 }) + t(18, 170, "Survivors per 1,000 (log scale)", { a: "middle", s: 12, r: -90 });
    return svg(600, 366, b, "Survivorship curves");
  };
  F.survivorship = function () { return fig(F.survivorshipSVG(), "Type I: low mortality until old age (elephants, apes, whales). Type II: constant mortality (birds, rodents). Type III: very high early mortality (fish, oysters, trees). Log y-axis. Practice figure drawn for this app (M12 slides 24–30)."); };
  F.growthSVG = function (r, K, N0, T) {
    r = r || 0.5; K = K || 500; N0 = N0 || 10; T = T || 20;
    var X = function (tt) { return 70 + tt / T * 500; }, ymax = K * 1.6, Y = function (n) { return 300 - Math.min(n, ymax) / ymax * 270; };
    var ex = "", lo = "", nL = N0;
    for (var i = 0; i <= 200; i++) {
      var tt = i / 200 * T, nE = N0 * Math.exp(r * tt);
      var nl = K / (1 + (K - N0) / N0 * Math.exp(-r * tt));
      ex += (i ? "L" : "M") + X(tt).toFixed(1) + "," + Y(nE).toFixed(1);
      lo += (i ? "L" : "M") + X(tt).toFixed(1) + "," + Y(nl).toFixed(1);
    }
    var b = line(70, 300, 580, 300, "ax") + line(70, 300, 70, 25, "ax") + '<line x1="70" x2="580" y1="' + Y(K) + '" y2="' + Y(K) + '" class="ln" stroke-dasharray="6 5"/>' +
      t(578, Y(K) - 6, "K = " + K, { a: "end", s: 12, b: true }) + '<line x1="70" x2="580" y1="' + Y(K / 2) + '" y2="' + Y(K / 2) + '" class="gr" stroke-dasharray="3 4"/>' + t(578, Y(K / 2) - 5, "K/2: fastest logistic growth", { a: "end", s: 11, c: "mut" }) +
      '<path d="' + ex + '" class="och"/>' + '<path d="' + lo + '" class="acc"/>' +
      t(X(T * .28), 45, "Exponential (J): dN/dt = rN", { s: 12, b: true }) + t(X(T * .55), Y(K) + 26, "Logistic (S): dN/dt = rN(K−N)/K", { s: 12, b: true }) +
      t(325, 320, "Time", { a: "middle", s: 12 }) + t(22, 160, "Population size (N)", { a: "middle", s: 12, r: -90 });
    return svg(600, 330, b, "Exponential and logistic growth");
  };
  F.growth = function () { return fig(F.growthSVG(), "Same r and starting N. The exponential curve keeps steepening; the logistic curve bends at K/2 and levels off at K (M12 slides 36–52). Try the sliders in the Visual lab."); };
  F.pyramidSVG = function (shape, label) {
    var shapes = { grow: [16, 14, 12, 10, 8.5, 7, 5.5, 4, 3, 2], stable: [8, 8, 8, 8, 7.8, 7.5, 7, 6, 4.5, 2.5], decline: [4.5, 5, 6, 7, 8, 8.5, 8.5, 8, 7, 5] };
    var v = shapes[shape], b = "", cx = 110;
    v.forEach(function (w, i) { var y = 200 - (i + 1) * 18; b += rect(cx - w * 6, y, w * 6, 15, "fM11") + rect(cx, y, w * 6, 15, "fM14"); });
    b += t(cx, 222, label, { a: "middle", s: 13, b: true }) + t(8, 196, "0–4", { s: 10, c: "mut" }) + t(8, 26, "85+", { s: 10, c: "mut" });
    return b;
  };
  F.pyramids = function () {
    var b = '<g>' + F.pyramidSVG("grow", "Rapid growth (Rwanda)") + "</g>" + '<g transform="translate(215,0)">' + F.pyramidSVG("stable", "Stable (Canada)") + "</g>" + '<g transform="translate(430,0)">' + F.pyramidSVG("decline", "Decline (Japan)") + "</g>";
    return fig(svg(650, 232, b, "Age-structure pyramids"), "Age-structure shapes: youngest at the bottom; males left, females right. Shapes are illustrative, not real census data (M12 slide 69; M13 review 25–28).");
  };
  F.signs = function () {
    return '<div class="tw"><table class="t"><thead><tr><th></th><th>Species 2 helped (+)</th><th>Species 2 harmed (−)</th><th>Species 2 unaffected (0)</th></tr></thead><tbody>' +
      "<tr><th>Species 1 helped (+)</th><td><b>Mutualism</b> +/+</td><td><b>Predation, herbivory, parasitism</b> +/−</td><td><b>Commensalism</b> +/0</td></tr>" +
      "<tr><th>Species 1 harmed (−)</th><td>(same as +/−)</td><td><b>Competition</b> −/−</td><td>Amensalism −/0 ⚑ (not in lecture)</td></tr></tbody></table></div>";
  };
  F.niche = function () {
    var b = t(20, 26, "Resource axis (e.g. prey size) →", { s: 12, c: "mut" }) + line(20, 140, 620, 140, "ax");
    b += rect(60, 50, 380, 26, "fSoft", 6) + t(250, 68, "Species A fundamental niche", { a: "middle", s: 12 });
    b += rect(260, 90, 330, 26, "fOchSoft", 6) + t(425, 108, "Species B fundamental niche", { a: "middle", s: 12 });
    b += rect(60, 160, 200, 26, "fAcc", 6) + t(160, 178, "A realized", { a: "middle", s: 12, c: "wh" }) + rect(330, 160, 260, 26, "fOch", 6) + t(460, 178, "B realized", { a: "middle", s: 12, c: "wh" });
    b += t(295, 212, "Overlap → competition → each shrinks to a realized niche (partitioning)", { a: "middle", s: 12 });
    return fig(svg(640, 224, b, "Fundamental vs realized niche"), "Competition narrows each species' fundamental niche to a realized niche (M13 slides 6–10). Practice figure drawn for this app.");
  };
  F.diversitySVG = function (c1, c2, names) {
    var cols = ["fM11", "fOch", "fM13", "fM14", "fAcc", "fMut"], b = "";
    function H(c) { var n = c.reduce(function (a, x) { return a + x; }, 0), h = 0; c.forEach(function (x) { if (x > 0) { var p = x / n; h -= p * Math.log(p); } }); return h; }
    [c1, c2].forEach(function (c, k) {
      var y = 40 + k * 80, n = c.reduce(function (a, x) { return a + x; }, 0), x = 150;
      b += t(10, y + 22, "Community " + (k + 1), { s: 13, b: true });
      c.forEach(function (v, i) { var w = v / n * 420; if (w > 0) { b += rect(x, y, w, 34, cols[i % cols.length]); if (w > 26) b += t(x + w / 2, y + 22, v, { a: "middle", s: 12, c: "wh" }); x += w; } });
      b += t(150, y + 52, "richness " + c.filter(function (v) { return v > 0; }).length + " · Shannon H = " + H(c).toFixed(2), { s: 12, c: "mut" });
    });
    var lx = 150; (names || []).forEach(function (nm, i) { b += rect(lx, 194, 12, 12, cols[i % cols.length]) + t(lx + 16, 205, nm, { s: 11 }); lx += 16 + nm.length * 7 + 14; });
    return svg(600, 214, b, "Relative abundance of two communities");
  };
  F.diversity = function () { return fig(F.diversitySVG([15, 2, 2, 1, 3, 2], [4, 3, 5, 4, 4, 4], ["Elephant", "Lion", "Giraffe", "Hippo", "Kudu", "Aardwolf"]), "Lecture example (M13 slide 40): same 6 species, 25 animals each. Community 2 is more even, so its Shannon index is higher."); };
  F.cascade = function () {
    function col(x, title, items) {
      var b = t(x + 110, 20, title, { a: "middle", s: 13, b: true });
      items.forEach(function (it, i) { var y = 34 + i * 70; b += rect(x, y, 220, 44, i === 2 ? "fLeaf" : "fS2", 8) + t(x + 110, y + 27, it, { a: "middle", s: 13 }); if (i < 2) b += line(x + 110, y + 46, x + 110, y + 66, "ln", "ah"); });
      return b;
    }
    var b = col(30, "With otters", ["Sea otters present", "Sea urchins kept low", "Kelp forest thrives"]) + col(360, "Otters removed", ["No otters", "Urchins boom (+)", "Kelp overgrazed (−)"]);
    return fig(svg(620, 240, b, "Trophic cascade"), "Top-down control: removing the top predator produces alternating effects down the chain (M13 slides 47–49, 55).");
  };
  F.islandSVG = function (sizeL, nearL, show) {
    // immigration I(S) = I0*(1 - S/P); extinction E(S) = E0*S/P; P = mainland pool 100
    var P = 100, X = function (s) { return 70 + s / P * 480; }, Y = function (r) { return 280 - r / 1.0 * 250; };
    var b = line(70, 280, 560, 280, "ax") + line(70, 280, 70, 25, "ax") + t(315, 300, "Number of species on island (S)", { a: "middle", s: 12 }) + t(22, 150, "Rate", { a: "middle", s: 12, r: -90 });
    var sets = show || [["near", "acc", .9], ["far", "acc", .45]];
    var I = { near: .9, far: .45 }, E = { small: .9, large: .4 };
    ["near", "far"].forEach(function (k) { b += line(X(0), Y(I[k]), X(P), Y(0), "acc" + (k === "far" ? '" stroke-dasharray="7 5' : "")); b += t(X(3), Y(I[k]) - 6, "Immigration (" + k + ")", { s: 11 }); });
    ["small", "large"].forEach(function (k) { b += line(X(0), Y(0), X(P), Y(E[k]), "och" + (k === "large" ? '" stroke-dasharray="7 5' : "")); b += t(X(P) - 4, Y(E[k]) - 6, "Extinction (" + k + ")", { a: "end", s: 11 }); });
    function eq(i, e) { return P * i / (i + e); }
    var combos = [["near", "small"], ["near", "large"], ["far", "small"], ["far", "large"]];
    combos.forEach(function (c) {
      var s = eq(I[c[0]], E[c[1]]), rr = I[c[0]] * (1 - s / P), on = sizeL && c[1] === sizeL && c[0] === nearL;
      b += '<circle cx="' + X(s) + '" cy="' + Y(rr) + '" r="' + (on ? 8 : 5) + '" class="' + (on ? "fBad" : "fInk") + '"/>';
      b += line(X(s), Y(rr), X(s), 280, "gr");
      b += t(X(s), 278 - (c[0] === "near" ? 0 : 12) + 0, "", {});
    });
    var lab = combos.map(function (c) { return [c, eq(I[c[0]], E[c[1]])]; }).sort(function (a, b2) { return a[1] - b2[1]; });
    lab.forEach(function (l, i) { b += t(X(l[1]), 316 + (i % 2) * 14, l[0][1] + "+" + l[0][0] + ": " + Math.round(l[1]), { a: "middle", s: 10, c: "mut" }); });
    return svg(600, 338, b, "MacArthur–Wilson equilibrium model");
  };
  F.island = function () { return fig(F.islandSVG(), "Equilibrium richness is where an immigration curve crosses an extinction curve. Near islands have higher immigration; small islands have higher extinction. Large + near gives the most species (M13 slides 64–67). Curves are schematic, drawn for practice."); };
  // A–H food web (positions match the lecture/Woolink figure). X = top-right species whose letter is hidden in the source.
  FIG.fw = {
    nodes: { H: [285, 60], X: [510, 60], F: [155, 175], G: [400, 175], C: [45, 290], D: [280, 290], E: [505, 300], A: [155, 410], B: [395, 410] },
    edges: [["A", "C"], ["A", "D"], ["A", "E"], ["B", "D"], ["B", "E"], ["C", "F"], ["C", "G"], ["C", "E"], ["D", "F"], ["D", "E"], ["F", "H"], ["G", "H"], ["G", "X"], ["H", "X"]]
  };
  F.foodwebSVG = function (cls, gone) {
    cls = cls || {}; gone = gone || {};
    var N = FIG.fw.nodes, b = "";
    FIG.fw.edges.forEach(function (e) {
      var a = N[e[0]], c = N[e[1]], dx = c[0] - a[0], dy = c[1] - a[1], L = Math.sqrt(dx * dx + dy * dy), r = 24;
      var x1 = a[0] + dx / L * r, y1 = a[1] + dy / L * r, x2 = c[0] - dx / L * (r + 4), y2 = c[1] - dy / L * (r + 4);
      if (e[0] === "C" && e[1] === "E") { // drawn as an arch over D, as in the source figure
        b += '<path d="M' + (a[0] + 18) + "," + (a[1] - 14) + " Q280,200 " + (c[0] - 22) + "," + (c[1] - 12) + '" class="ln" marker-end="url(#ah)"' + (gone.C || gone.E ? ' stroke-opacity=".15"' : "") + "/>";
        return;
      }
      b += '<linex1="' + x1.toFixed(1) + '" y1="' + y1.toFixed(1) + '" x2="' + x2.toFixed(1) + '" y2="' + y2.toFixed(1) + '" class="ln" marker-end="url(#ah)"' + (gone[e[0]] || gone[e[1]] ? ' stroke-opacity=".15"' : "") + "/>";
    });
    Object.keys(N).forEach(function (k) {
      var p = N[k];
      b += '<g class="fwnode ' + (cls[k] || "") + (gone[k] ? " gone" : "") + '" data-n="' + k + '" tabindex="0" role="button" aria-label="Species ' + (k === "X" ? "unlabeled top species" : k) + '"><circle cx="' + p[0] + '" cy="' + p[1] + '" r="22"/>' + t(p[0], p[1] + 7, k === "X" ? "?" : k, { a: "middle", s: 20, b: true }) + "</g>";
    });
    return svg(560, 440, b, "Food web with species A through H");
  };
  F.foodweb = function () { return fig(F.foodwebSVG(), "The A–H food web from your lecture review and Woolink practice, redrawn. Arrows show energy flow (eaten → eater). The top-right species' letter is hidden in your screenshots, so it appears here as “?”."); };
  F.trophic = function () {
    var lv = [["Producers", 10000, "fLeaf"], ["Primary consumers", 1000, "fOchSoft"], ["Secondary consumers", 100, "fSoft"], ["Tertiary consumers", 10, "fS2"]], b = "";
    lv.forEach(function (l, i) {
      var w = 560 - i * 130, y = 200 - i * 52;
      b += rect(320 - w / 2, y, w, 44, l[2], 4) + t(320, y + 20, l[0], { a: "middle", s: 13, b: true }) + t(320, y + 37, l[1].toLocaleString() + " kcal", { a: "middle", s: 12, c: "mut" });
    });
    b += t(600, 140, "~90% lost as heat", { a: "end", s: 12, c: "mut" });
    return fig(svg(640, 252, b, "Energy pyramid"), "~10% of energy passes to each higher level (M14.1 slide 23). Example numbers for practice.");
  };
  F.ncycle = function () {
    var bx = function (x, y, w, s, c) { return rect(x, y, w, 40, c || "fS2", 8) + t(x + w / 2, y + 25, s, { a: "middle", s: 13 }); };
    var b = bx(200, 10, 240, "N₂ in the atmosphere (78%)", "fSoft") + bx(20, 130, 200, "Ammonia / ammonium") + bx(420, 130, 200, "Nitrate (NO₃⁻)") + bx(220, 250, 200, "Plant proteins", "fLeaf") + bx(220, 340, 200, "Animal proteins", "fOchSoft") + bx(10, 340, 180, "Dead matter, waste");
    b += line(250, 52, 140, 126, "acc", "aha") + t(120, 90, "N fixation (bacteria)", { s: 12, b: true });
    b += line(222, 150, 416, 150, "ln", "ah") + t(320, 142, "nitrification ⚑", { a: "middle", s: 11, c: "mut" });
    b += line(140, 172, 260, 246, "ln", "ah") + line(500, 172, 380, 246, "ln", "ah") + t(320, 230, "plant uptake", { a: "middle", s: 12 });
    b += line(320, 292, 320, 336, "ln", "ah") + t(330, 318, "eaten", { s: 11, c: "mut" });
    b += line(218, 360, 194, 360, "ln", "ah") + line(100, 336, 110, 174, "ln", "ah") + t(20, 260, "decomposers", { s: 12 }) + t(20, 275, "(ammonification ⚑)", { s: 11, c: "mut" });
    b += line(520, 126, 430, 54, "ln", "ah") + t(560, 90, "denitrification ⚑", { a: "middle", s: 11, c: "mut" });
    return fig(svg(640, 392, b, "Nitrogen cycle"), "Nitrogen cycle. Lecture terms: N₂ is unusable to most life; bacteria fix it to ammonia/nitrate; plants make protein; animals eat protein; bacteria decompose protein (M14.1 slides 31–32). Terms marked ⚑ are standard names not used on the slides.");
  };
  F.eutroph = function () { return chain(["Fertilizer / sewage adds N and P", "Algal & cyanobacteria bloom (producers ↑)", "Bloom dies; dead algae sink", "Aerobic decomposer bacteria ↑", "Dissolved O₂ used up (hypoxia)", "Dead zone: fish and invertebrates die"], "Eutrophication sequence (M14.1 slides 42–43).", 520); };
  F.biomag = function () {
    var d = [["Water", 0.000003], ["Zooplankton", 0.04], ["Small fish", 0.5], ["Large fish", 2], ["Fish-eating birds", 25]], b = "";
    var X = function (v) { return 160 + (Math.log10(v) + 6) / 7.5 * 420; };
    d.forEach(function (r, i) { var y = 20 + i * 40; b += t(150, y + 20, r[0], { a: "end", s: 13 }) + rect(160, y + 4, X(r[1]) - 160, 24, i === 4 ? "fBad" : "fAcc", 3) + t(X(r[1]) + 6, y + 21, r[1] + " ppm", { s: 12 }); });
    return fig(svg(640, 230, b, "Biomagnification of DDT"), "DDT concentration rises at each trophic level (log scale). Values are a classic textbook illustration ⚑, not from your slides.");
  };
  F.acid = function () { return chain(["Atmospheric CO₂ dissolves into seawater", "CO₂ + H₂O → carbonic acid (H₂CO₃)", "H⁺ released → pH falls", "Carbonate (CO₃²⁻) converted to bicarbonate (HCO₃⁻)", "Less carbonate for shells & skeletons → calcifiers struggle"], "Ocean acidification (M14.1 slide 35).", 560); };

  FIG.html = function (key) { return F[key] ? F[key]() : ""; };
  FIG.F = F;
})();
