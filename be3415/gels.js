/* Digest, gel and kinetics generators, plus the SVG drawings they need.
   Gel geometry uses a log scale, the way a real agarose gel separates DNA:
   migration distance is proportional to log(size), so small fragments run far. */
window.BE = window.BE || {};
(function () {
  "use strict";
  var S = BE.seq, pick = S.pick, ri = S.ri;
  function fmtbp(n) { return n >= 1000 ? (n / 1000).toFixed(n % 1000 ? 2 : 0).replace(/\.?0+$/, "") + " kb" : n + " bp"; }
  function sortDesc(a) { return a.slice().sort(function (x, y) { return y - x; }); }
  function sameSet(a, b) {
    if (a.length !== b.length) return false;
    var x = sortDesc(a), y = sortDesc(b);
    return x.every(function (v, i) { return Math.abs(v - y[i]) < 1; });
  }

  /* Fragments from cutting a circular plasmid at the given positions. */
  function circFrags(size, cuts) {
    var c = cuts.slice().sort(function (a, b) { return a - b; });
    if (!c.length) return [];
    if (c.length === 1) return [size];
    var out = [];
    for (var i = 0; i < c.length - 1; i++) out.push(c[i + 1] - c[i]);
    out.push(size - c[c.length - 1] + c[0]);
    return sortDesc(out);
  }
  /* Fragments from cutting a linear molecule. n cuts give n+1 pieces. */
  function linFrags(size, cuts) {
    var c = cuts.slice().sort(function (a, b) { return a - b; }), out = [], prev = 0;
    for (var i = 0; i < c.length; i++) { out.push(c[i] - prev); prev = c[i]; }
    out.push(size - prev);
    return sortDesc(out.filter(function (x) { return x > 0; }));
  }
  BE.circFrags = circFrags;
  BE.linFrags = linFrags;

  /* ------------------------------------------------------------- GEL DRAWING */
  // lanes: [{label, bands:[sizes]}]; ladder: descending sizes.
  BE.gelSVG = function (ladder, lanes, opts) {
    opts = opts || {};
    var top = ladder[0] * 1.35, bot = ladder[ladder.length - 1] * 0.62;
    var lw = 104, pad = 14, headH = opts.headH || 42, gelH = 300;
    var n = lanes.length + 1, w = pad * 2 + lw * n, h = headH + gelH + 26;
    var y = function (bp) {
      var t = (Math.log(top) - Math.log(Math.max(bp, bot))) / (Math.log(top) - Math.log(bot));
      return headH + 16 + t * (gelH - 34);
    };
    var p = ['<svg viewBox="0 0 ' + w + ' ' + h + '" width="100%" role="img" class="gelsvg" ' +
      'aria-label="Agarose gel: ' + lanes.map(function (l) { return l.label; }).join(", ") + '">'];
    p.push('<rect x="' + pad + '" y="' + headH + '" width="' + (w - pad * 2) + '" height="' +
      gelH + '" rx="4" class="gelbox"/>');
    var lx = function (i) { return pad + lw * i; };
    for (var i = 0; i < n; i++) {
      p.push('<rect x="' + (lx(i) + 16) + '" y="' + (headH - 5) + '" width="' + (lw - 32) +
        '" height="10" class="gelwell"/>');
    }
    // ladder lane
    p.push('<text x="' + (lx(0) + lw / 2) + '" y="' + (headH - 12) +
      '" class="gellabel">Standard</text>');
    ladder.forEach(function (bp) {
      var yy = y(bp);
      p.push('<line x1="' + (lx(0) + 22) + '" x2="' + (lx(0) + lw - 22) + '" y1="' + yy +
        '" y2="' + yy + '" class="gelband lad"/>');
      p.push('<text x="' + (lx(0) + 16) + '" y="' + (yy - 4) + '" class="gelsize lad">' +
        fmtbp(bp) + "</text>");
    });
    lanes.forEach(function (lane, k) {
      var x = lx(k + 1);
      lane.label.split("+").forEach(function (part, j) {
        p.push('<text x="' + (x + lw / 2) + '" y="' + (headH - 26 + j * 13) +
          '" class="gellabel">' + part.trim() + "</text>");
      });
      (lane.bands || []).forEach(function (bp) {
        var yy = y(bp);
        p.push('<line x1="' + (x + 20) + '" x2="' + (x + lw - 20) + '" y1="' + yy + '" y2="' +
          yy + '" class="gelband"/>');
        if (!opts.hideSizes)
          p.push('<text x="' + (x + lw / 2) + '" y="' + (yy - 5) + '" class="gelsize">' +
            bp + "</text>");
      });
    });
    p.push('<text x="' + pad + '" y="' + (h - 6) + '" class="gelfoot">− well side · ' +
      'DNA runs toward + · small fragments travel furthest</text>');
    p.push("</svg>");
    return p.join("");
  };

  /* Circular plasmid map with the chosen sites marked. */
  BE.plasmidSVG = function (key, marks, feature) {
    // Wide viewBox: site labels sit outside the ring and must not clip.
    var pl = BE.plasmids[key], R = 78, cx = 220, cy = 124;
    var ang = function (bp) { return (bp / pl.size) * 2 * Math.PI - Math.PI / 2; };
    var pt = function (bp, r) {
      var a = ang(bp);
      return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
    };
    var p = ['<svg viewBox="0 0 440 254" width="100%" role="img" class="mapsvg" aria-label="' +
      pl.name + ' map, ' + pl.size + ' base pairs">'];
    p.push('<circle cx="' + cx + '" cy="' + cy + '" r="' + R + '" class="mapring"/>');
    if (feature) {
      var a0 = ang(feature[0]), a1 = ang(feature[1]);
      var s = pt(feature[0], R), e = pt(feature[1], R);
      var large = (a1 - a0 + 2 * Math.PI) % (2 * Math.PI) > Math.PI ? 1 : 0;
      p.push('<path d="M ' + s[0].toFixed(1) + " " + s[1].toFixed(1) + " A " + R + " " + R +
        " 0 " + large + " 1 " + e[0].toFixed(1) + " " + e[1].toFixed(1) + '" class="mapfeat"/>');
    }
    (marks || []).forEach(function (m) {
      var bp = typeof m === "string" ? siteOf(key, m) : m[1], name = typeof m === "string" ? m : m[0];
      if (bp == null) return;
      var i = pt(bp, R - 7), o = pt(bp, R + 7), t = pt(bp, R + 13);
      var a = ang(bp), right = Math.cos(a) > -0.1;
      p.push('<line x1="' + i[0].toFixed(1) + '" y1="' + i[1].toFixed(1) + '" x2="' +
        o[0].toFixed(1) + '" y2="' + o[1].toFixed(1) + '" class="maptick"/>');
      p.push('<text x="' + t[0].toFixed(1) + '" y="' + (t[1] + 3).toFixed(1) + '" class="maplab" ' +
        'text-anchor="' + (right ? "start" : "end") + '">' + name + " · " + bp + "</text>");
    });
    p.push('<text x="' + cx + '" y="' + (cy - 4) + '" class="mapname">' + pl.name + "</text>");
    p.push('<text x="' + cx + '" y="' + (cy + 13) + '" class="mapsize">' + pl.size + " bp</text>");
    p.push("</svg>");
    return p.join("");
  };
  function siteOf(key, name) {
    var s = BE.plasmids[key].sites;
    for (var i = 0; i < s.length; i++) if (s[i][0] === name) return s[i][1];
    return null;
  }
  BE.siteOf = siteOf;

  /* Linear restriction map drawing. */
  BE.linMapSVG = function (labels, pos) {
    var total = pos[pos.length - 1], w = 640, L = 40, R = w - 40;
    var x = function (bp) { return L + (bp / total) * (R - L); };
    var p = ['<svg viewBox="0 0 ' + w + ' 96" width="100%" role="img" class="mapsvg" ' +
      'aria-label="Linear restriction map, ' + total + ' base pairs">'];
    p.push('<line x1="' + L + '" y1="52" x2="' + R + '" y2="52" class="linbar"/>');
    labels.forEach(function (nm, i) {
      var xx = x(pos[i]);
      p.push('<line x1="' + xx.toFixed(1) + '" y1="42" x2="' + xx.toFixed(1) +
        '" y2="62" class="maptick"/>');
      p.push('<text x="' + xx.toFixed(1) + '" y="34" class="maplab" text-anchor="middle">' +
        nm + "</text>");
      if (i < labels.length - 1) {
        var mid = (xx + x(pos[i + 1])) / 2;
        p.push('<text x="' + mid.toFixed(1) + '" y="78" class="gelsize" text-anchor="middle">' +
          (pos[i + 1] - pos[i]) + "</text>");
      }
    });
    p.push("</svg>");
    return p.join("");
  };

  /* ------------------------------------------------------- PLASMID GEL DRILL */
  BE.gen_gel = function () {
    var key = pick(["plic", "pet"]), pl = BE.plasmids[key];
    var names = pl.sites.map(function (s) { return s[0]; });
    var lanes = [], used = {};
    var nLanes = 2 + ri(2);
    for (var i = 0; i < nLanes; i++) {
      var k = i === 0 ? 1 : 1 + ri(2), set = [];
      var guard = 0;
      while (set.length < k && guard++ < 50) {
        var nm = pick(names);
        if (set.indexOf(nm) < 0) set.push(nm);
      }
      var sig = set.slice().sort().join("+");
      if (used[sig]) { i--; continue; }
      used[sig] = 1;
      lanes.push(set);
    }
    var bands = lanes.map(function (set) {
      return circFrags(pl.size, set.map(function (n) { return siteOf(key, n); }));
    });
    var ladder = pl.size > 7000 ? [10000, 8000, 6000, 5000, 4000, 3000, 2000, 1000]
                                : [6000, 5000, 4000, 3000, 2000, 1000, 500];
    return {
      kind: "gel",
      stem: "Cut " + pl.name + " (" + pl.size + " bp, circular) with the enzymes above each " +
            "well. Give the size of every band you would see, largest first.",
      plasmid: key, lanes: lanes, ladder: ladder,
      sitesUsed: lanes.map(function (set) {
        return set.map(function (n) { return n + " " + siteOf(key, n); }).join(", ");
      }),
      fields: lanes.map(function (set, i) {
        return { key: "l" + i, label: set.join(" + ") + " bands (bp, comma separated)" };
      }),
      answer: { bands: bands },
      explain: "<p>A circular plasmid cut <b>n</b> times gives <b>n</b> fragments, not n+1: " +
        "there are no free ends to count.</p><ul>" +
        lanes.map(function (set, i) {
          var cuts = set.map(function (n) { return siteOf(key, n); }).sort(function (a, b) { return a - b; });
          if (cuts.length === 1)
            return "<li><b>" + set[0] + "</b> cuts once at " + cuts[0] +
              ", so the circle just opens: one linear band at " + pl.size + " bp.</li>";
          var parts = [];
          for (var j = 0; j < cuts.length - 1; j++)
            parts.push(cuts[j + 1] + " − " + cuts[j] + " = " + (cuts[j + 1] - cuts[j]));
          parts.push(pl.size + " − " + cuts[cuts.length - 1] + " + " + cuts[0] + " = " +
            (pl.size - cuts[cuts.length - 1] + cuts[0]) + " (the piece that wraps past zero)");
          return "<li><b>" + set.join(" + ") + "</b> cuts at " + cuts.join(" and ") + ": " +
            parts.join("; ") + ".</li>";
        }).join("") + "</ul>",
      grade: function (r) {
        var notes = [], ok = true;
        lanes.forEach(function (set, i) {
          var got = String(r["l" + i] || "").split(/[^0-9]+/).filter(Boolean).map(Number);
          if (sameSet(got, bands[i])) return;
          ok = false;
          var msg = "Lane " + set.join("+") + " should be " + bands[i].join(" + ") + ".";
          if (got.length === bands[i].length + 1 && set.length > 1)
            msg += " You have one band too many — a circle cut n times gives n pieces.";
          else if (got.length === 1 && bands[i].length > 1)
            msg += " Two cuts give two pieces.";
          else if (got.length && Math.abs(got.reduce(function (a, b) { return a + b; }, 0) -
                   BE.plasmids[key].size) > 1)
            msg += " Your band sizes must add up to " + BE.plasmids[key].size + " bp.";
          notes.push(msg);
        });
        if (ok) notes.push("Every lane correct.");
        return { ok: ok, notes: notes };
      }
    };
  };

  /* ------------------------------------------------- LINEAR DIGEST / MAPPING */
  BE.gen_lindigest = function () {
    var nCuts = 2 + ri(2), names = [], pos = [0], total = 0;
    var pool = BE.enzymes.map(function (e) { return e[0]; });
    for (var i = 0; i <= nCuts; i++) {
      var nm;
      do { nm = pick(pool); } while (names.indexOf(nm) >= 0 && names.length < pool.length);
      names.push(nm);
      if (i < nCuts) { var g = (2 + ri(18)) * 100; total += g; pos.push(total); }
    }
    var frags = [];
    for (var j = 0; j < pos.length - 1; j++) frags.push(pos[j + 1] - pos[j]);
    var target = pick(frags), ti = frags.indexOf(target);
    return {
      kind: "linmap",
      stem: "Which single pair of enzymes would release a " + fmtbp(target) +
            " fragment from this linear DNA?",
      labels: names, pos: pos,
      fields: [{ key: "pair", label: "The two enzymes (comma separated)" }],
      answer: { pair: [names[ti], names[ti + 1]], size: target },
      explain: "<p>Write the cut positions along the molecule: " +
        names.map(function (n, i) { return n + " " + pos[i]; }).join(", ") +
        ". Then look for the pair whose positions differ by " + target + ". That is <b>" +
        names[ti] + " (" + pos[ti] + ")</b> and <b>" + names[ti + 1] + " (" + pos[ti + 1] +
        ")</b>.</p><p>On a <b>linear</b> molecule n cuts give n+1 fragments, because the two " +
        "original ends count as pieces.</p>",
      grade: function (r) {
        var got = String(r.pair || "").toLowerCase().split(/[^a-z0-9]+/i).filter(Boolean);
        var want = [names[ti].toLowerCase(), names[ti + 1].toLowerCase()];
        var ok = got.length === 2 && want.every(function (w) { return got.indexOf(w) >= 0; });
        return { ok: ok, notes: [ok ? "Correct." :
          "The pair is " + names[ti] + " and " + names[ti + 1] + ", which are " + target +
          " bp apart."] };
      }
    };
  };

  /* -------------------------------------------------------- ENZYME KINETICS */
  BE.gen_kinetics = function () {
    var mode = pick(["v", "km", "order", "inhib"]);
    var Vmax = (2 + ri(18)) * 5, Km = pick([5, 10, 20, 25, 50, 100]);
    if (mode === "v") {
      var Sx = pick([Km / 4, Km / 2, Km, 2 * Km, 4 * Km, 9 * Km]);
      var v = Vmax * Sx / (Km + Sx);
      return {
        kind: "calc",
        stem: "An enzyme has V<sub>max</sub> = " + Vmax + " µM/min and K<sub>M</sub> = " +
          Km + " µM. What is the initial velocity at [S] = " + Sx + " µM?",
        fields: [{ key: "v", label: "v₀ (µM/min)" }],
        answer: { v: Math.round(v * 100) / 100 },
        explain: "<p>v₀ = V<sub>max</sub>[S] / (K<sub>M</sub> + [S]) = " + Vmax +
          " × " + Sx + " / (" + Km + " + " + Sx + ") = <b>" + (Math.round(v * 100) / 100) +
          " µM/min</b>" + (Sx === Km ? ", which is exactly ½V<sub>max</sub> because " +
          "[S] = K<sub>M</sub>." : ".") + "</p>",
        grade: function (r) {
          var ok = Math.abs(parseFloat(r.v) - v) < Math.max(0.5, v * 0.02);
          return { ok: ok, notes: [ok ? "Correct." : "v₀ = " + (Math.round(v * 100) / 100) +
            " µM/min."] };
        }
      };
    }
    if (mode === "km") {
      var half = Vmax / 2;
      return {
        kind: "calc",
        stem: "A reaction reaches half its maximum velocity (" + half + " µM/min of a " +
          Vmax + " µM/min V<sub>max</sub>) at [S] = " + Km + " µM. What is K<sub>M</sub>?",
        fields: [{ key: "v", label: "Kₘ (µM)" }],
        answer: { v: Km },
        explain: "<p>K<sub>M</sub> is <i>defined</i> as the substrate concentration giving " +
          "½V<sub>max</sub>, so K<sub>M</sub> = <b>" + Km + " µM</b>. A low K<sub>M</sub> " +
          "means the enzyme reaches half speed at little substrate, i.e. tight apparent binding.</p>",
        grade: function (r) {
          var ok = Math.abs(parseFloat(r.v) - Km) < 0.51;
          return { ok: ok, notes: [ok ? "Correct." : "Kₘ = " + Km + " µM."] };
        }
      };
    }
    if (mode === "order") {
      var low = Math.random() < 0.5;
      var Sy = low ? Math.round(Km / 20) || 1 : Km * 50;
      return {
        kind: "mc",
        stem: "An enzyme has K<sub>M</sub> = " + Km + " µM and is running at [S] = " + Sy +
          " µM. What kinetics does it show?",
        choices: ["Zero order (rate independent of [S])", "First order (rate ∝ [S])",
                  "Second order", "The enzyme denatures"],
        answerIdx: low ? 1 : 0,
        explain: "<p>[S] = " + Sy + " µM is " + (low ? "far below" : "far above") +
          " K<sub>M</sub> = " + Km + " µM, so the enzyme is " +
          (low ? "mostly free and the rate rises in proportion to substrate: <b>first order</b>."
               : "saturated — every active site is busy — so adding more substrate " +
                 "changes nothing: <b>zero order</b>, v ≈ V<sub>max</sub>.") + "</p>",
        grade: function (r) {
          var want = low ? 1 : 0, ok = +r.choice === want;
          return { ok: ok, notes: [ok ? "Correct." : (low ? "Below Kₘ it is first order."
            : "Saturated means zero order.")] };
        }
      };
    }
    var comp = Math.random() < 0.5;
    return {
      kind: "mc",
      stem: "An inhibitor " + (comp ? "binds the active site and resembles the substrate"
        : "binds a site away from the active site") + ". What happens to the kinetic constants?",
      choices: ["Kₘ increases, Vₘₐₓ unchanged",
                "Vₘₐₓ decreases, Kₘ unchanged",
                "Both Kₘ and Vₘₐₓ increase",
                "Neither changes"],
      answerIdx: comp ? 0 : 1,
      explain: "<p><b>Competitive</b> (active site, substrate lookalike): more substrate " +
        "out-competes it, so V<sub>max</sub> is still reachable but you need more substrate to " +
        "get there — K<sub>M</sub> rises. <b>Noncompetitive</b> (other site): it distorts " +
        "the enzyme no matter how much substrate you add, so V<sub>max</sub> falls while " +
        "K<sub>M</sub> stays put.</p>",
      grade: function (r) {
        var want = comp ? 0 : 1, ok = +r.choice === want;
        return { ok: ok, notes: [ok ? "Correct." : (comp
          ? "Competitive inhibition raises Kₘ and leaves Vₘₐₓ alone."
          : "Noncompetitive inhibition lowers Vₘₐₓ and leaves Kₘ alone.")] };
      }
    };
  };

  BE.generators = [
    ["primer", "Primer design", function () { return BE.gen_primer(); }],
    ["revcomp", "Reverse complements", function () { return BE.gen_revcomp(); }],
    ["which", "Which enzyme cuts?", function () { return BE.gen_which(); }],
    ["blunt", "Sticky vs blunt", function () { return BE.gen_blunt(); }],
    ["linmap", "Linear restriction maps", function () { return BE.gen_lindigest(); }],
    ["gel", "Plasmid digests → gel", function () { return BE.gen_gel(); }],
    ["kinetics", "Enzyme kinetics", function () { return BE.gen_kinetics(); }]
  ];
})();
