/* Problem generators for BE 3415: primer design, restriction digests, plasmid gels,
   kinetics. Every generator returns a problem object:
     { kind, stem, answer, explain, fields:[...], grade(responses) -> {ok, notes[]} }
   Answers are computed here, never stored as prose, so a regenerated problem is
   always self-consistent. */
window.BE = window.BE || {};
(function () {
  "use strict";
  var COMP = { A: "T", T: "A", G: "C", C: "G" };
  var BASES = "ACGT";

  function rc(s) {
    var out = "";
    for (var i = s.length - 1; i >= 0; i--) out += COMP[s[i]];
    return out;
  }
  function clean(s) { return String(s || "").toUpperCase().replace(/[^ACGT]/g, ""); }
  function ri(n) { return Math.floor(Math.random() * n); }
  function pick(a) { return a[ri(a.length)]; }
  function randSeq(n) {
    var s = "";
    for (var i = 0; i < n; i++) s += BASES[ri(4)];
    return s;
  }
  function gc(s) {
    var n = 0;
    for (var i = 0; i < s.length; i++) if (s[i] === "G" || s[i] === "C") n++;
    return s.length ? n / s.length : 0;
  }
  // Wallace rule for short oligos, nearest-neighbour-free: good enough for the
  // 54-60 C window the lecture asks for.
  function tm(s) {
    var at = 0, gcn = 0;
    for (var i = 0; i < s.length; i++) (s[i] === "G" || s[i] === "C") ? gcn++ : at++;
    return s.length < 14 ? 2 * at + 4 * gcn : Math.round(64.9 + 41 * (gcn - 16.4) / s.length);
  }
  function enzByName(n) {
    for (var i = 0; i < BE.enzymes.length; i++) if (BE.enzymes[i][0] === n) return BE.enzymes[i];
    return null;
  }
  // All cut positions of one enzyme in a linear sequence, as the index of the
  // phosphodiester bond broken on the top strand.
  function findCuts(seq, e) {
    var site = e[1], out = [], i = seq.indexOf(site);
    while (i >= 0) { out.push(i + e[2]); i = seq.indexOf(site, i + 1); }
    return out;
  }
  function overhang(e) {
    var len = e[1].length, cut = e[2], d = len - 2 * cut;
    if (d === 0) return { type: "blunt", n: 0, text: "blunt ends" };
    if (d > 0) return { type: "5'", n: d, text: d + "-base 5' overhang" };
    return { type: "3'", n: -d, text: (-d) + "-base 3' overhang" };
  }

  BE.seq = { rc: rc, clean: clean, randSeq: randSeq, gc: gc, tm: tm, overhang: overhang,
             findCuts: findCuts, enzByName: enzByName, pick: pick, ri: ri };

  /* ---------------------------------------------------------- PRIMER DESIGN */
  // Build a template with a clearly delimited target region and ask for both primers.
  BE.gen_primer = function (opts) {
    opts = opts || {};
    var n = opts.n || pick([13, 15, 18, 20]);
    var lead = 10 + ri(12), tail = 10 + ri(12), mid = 60 + ri(90);
    var seq = randSeq(lead) + randSeq(mid) + randSeq(tail);
    var from = lead, to = lead + mid;
    var fwd = seq.slice(from, from + n), rev = rc(seq.slice(to - n, to));
    return {
      kind: "primer",
      stem: "Design a " + n + "-nucleotide forward primer and a " + n +
            "-nucleotide reverse primer that amplify only the highlighted region.",
      seq: seq, hl: [from, to], n: n,
      fields: [
        { key: "fwd", label: "Forward primer 5'→3'", mono: true },
        { key: "rev", label: "Reverse primer 5'→3'", mono: true }
      ],
      answer: { fwd: fwd, rev: rev, ampLen: to - from },
      facts: [["Product length", (to - from) + " bp"],
              ["Forward Tm", tm(fwd) + " °C"], ["Reverse Tm", tm(rev) + " °C"],
              ["Forward GC", Math.round(gc(fwd) * 100) + "%"]],
      explain:
        "<p><b>Forward primer</b> = the first " + n + " nt of the target, copied exactly as " +
        "written on the top strand: <code>" + fwd + "</code>.</p>" +
        "<p><b>Reverse primer</b> = the last " + n + " nt of the target, " +
        "<b>reverse complemented</b>: the target ends <code>" + seq.slice(to - n, to) +
        "</code>, which gives <code>" + rev + "</code>. Both primers are written 5'→3', " +
        "which is why the reverse one reads backwards relative to the top strand.</p>" +
        "<p>The primers sit at the two ends and point inward, so only the " + (to - from) +
        " bp between them is copied.</p>",
      grade: function (r) {
        var notes = [], f = clean(r.fwd), v = clean(r.rev), ok = true;
        if (f !== fwd) {
          ok = false;
          notes.push(f === seq.slice(from, from + n).split("").reverse().join("")
            ? "Forward: you reversed it. The forward primer is copied as written, not reversed."
            : f === rc(seq.slice(from, from + n))
            ? "Forward: you reverse-complemented it. Only the reverse primer needs that."
            : "Forward should be " + fwd + " — the first " + n + " nt of the target.");
        }
        if (v !== rev) {
          ok = false;
          notes.push(v === seq.slice(to - n, to)
            ? "Reverse: you copied the top strand. Reverse-complement it: " + rev + "."
            : v === seq.slice(to - n, to).split("").reverse().join("")
            ? "Reverse: you reversed without complementing. Swap A↔T and G↔C too."
            : v === rc(seq.slice(from, from + n))
            ? "Reverse: you used the start of the target. Use the last " + n + " nt."
            : "Reverse should be " + rev + ".");
        }
        if (ok) notes.push("Both primers correct. Product: " + (to - from) + " bp.");
        return { ok: ok, notes: notes };
      }
    };
  };

  /* ------------------------------------------------- REVERSE COMPLEMENT DRILL */
  BE.gen_revcomp = function () {
    var n = 8 + ri(7), s = randSeq(n), a = rc(s);
    return {
      kind: "revcomp",
      stem: "Write the reverse complement of this strand (5'→3').",
      seq: s, hl: [0, n], n: n,
      fields: [{ key: "rc", label: "Reverse complement 5'→3'", mono: true }],
      answer: { rc: a },
      explain: "<p>Complement each base (A↔T, G↔C), then reverse the order. " +
        "Complement of <code>" + s + "</code> is <code>" +
        s.split("").map(function (c) { return COMP[c]; }).join("") +
        "</code>; reversed, that is <code>" + a + "</code>.</p>",
      grade: function (r) {
        var v = clean(r.rc);
        if (v === a) return { ok: true, notes: ["Correct."] };
        if (v === s.split("").map(function (c) { return COMP[c]; }).join(""))
          return { ok: false, notes: ["You complemented but did not reverse. The answer is " + a + "."] };
        if (v === s.split("").reverse().join(""))
          return { ok: false, notes: ["You reversed but did not complement. The answer is " + a + "."] };
        return { ok: false, notes: ["The answer is " + a + "."] };
      }
    };
  };

  /* --------------------------------------------------- WHICH ENZYME CUTS THIS */
  BE.gen_which = function () {
    var six = BE.enzymes.filter(function (e) { return e[1].length === 6; });
    var target = pick(six);
    // Decoys that share the central four bases are the professor's trap.
    var core = target[1].slice(1, 5);
    var near = six.filter(function (e) { return e !== target && e[1].slice(1, 5) === core; });
    var others = six.filter(function (e) { return e !== target && near.indexOf(e) < 0; });
    var choices = [target].concat(near.slice(0, 2));
    while (choices.length < 5) {
      var c = pick(others);
      if (choices.indexOf(c) < 0) choices.push(c);
    }
    // Build a sequence containing the target site and none of the decoys.
    var seq, guard = 0;
    do {
      var a = randSeq(8 + ri(10)), b = randSeq(8 + ri(10));
      seq = a + target[1] + b;
      guard++;
    } while (guard < 60 && choices.some(function (e) {
      return e !== target && seq.indexOf(e[1]) >= 0;
    }));
    choices = choices.slice().sort(function () { return Math.random() - 0.5; });
    var at = seq.indexOf(target[1]);
    return {
      kind: "which",
      stem: "Which of these restriction enzymes cuts the sequence below?",
      seq: seq, hl: [at, at + 6],
      choices: choices.map(function (e) { return e[0] + " (" + e[1] + ")"; }),
      answerIdx: choices.indexOf(target),
      answer: { name: target[0] },
      explain: "<p><code>" + target[1] + "</code> (" + target[0] + ") appears at position " +
        (at + 1) + ". The cut leaves " + overhang(target).text + ".</p>" +
        (near.length ? "<p><b>The trap:</b> " + near.map(function (e) {
          return e[0] + " (" + e[1] + ")";
        }).join(" and ") + " share the middle <code>" + core +
        "</code> but differ in the outer bases. Read all six before committing.</p>" : ""),
      grade: function (r) {
        var ok = +r.choice === choices.indexOf(target);
        return { ok: ok, notes: [ok ? "Correct: " + target[0] + "." :
          "The site present is " + target[1] + ", cut by " + target[0] + "."] };
      }
    };
  };

  /* ------------------------------------------------------- STICKY VS BLUNT */
  BE.gen_blunt = function () {
    var want = Math.random() < 0.5;
    var bl = BE.enzymes.filter(function (e) { return overhang(e).type === "blunt"; });
    var st = BE.enzymes.filter(function (e) { return overhang(e).type !== "blunt"; });
    var target = want ? pick(bl) : pick(st);
    var pool = want ? st : bl;
    var choices = [target];
    while (choices.length < 4) {
      var c = pick(pool);
      if (choices.indexOf(c) < 0) choices.push(c);
    }
    choices.sort(function () { return Math.random() - 0.5; });
    var fmt = function (e) { return e[1].slice(0, e[2]) + "↓" + e[1].slice(e[2]); };
    return {
      kind: "blunt",
      stem: "Which enzyme produces " + (want ? "BLUNT" : "STICKY") + " ends?",
      choices: choices.map(function (e) { return e[0] + "  " + fmt(e); }),
      answerIdx: choices.indexOf(target),
      answer: { name: target[0] },
      explain: "<p><b>" + target[0] + "</b> — " + fmt(target) + " — gives " +
        overhang(target).text + ".</p><p>Cut dead centre of the palindrome and both strands " +
        "break at the same point: blunt. Cut off-centre and each strand breaks at a different " +
        "point, leaving a single-stranded overhang: sticky.</p><ul>" +
        choices.map(function (e) {
          return "<li>" + e[0] + " " + fmt(e) + " → " + overhang(e).text + "</li>";
        }).join("") + "</ul>",
      grade: function (r) {
        var ok = +r.choice === choices.indexOf(target);
        return { ok: ok, notes: [ok ? "Correct." : "The answer is " + target[0] +
          ", which gives " + overhang(target).text + "."] };
      }
    };
  };
})();
