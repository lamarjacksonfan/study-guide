const ctx = require(require('path').join(__dirname, 'load.js'));
const BE = ctx.BE;
let fail = 0, n = 0;
const ck = (c, m) => { n++; if (!c) { fail++; console.log('  FAIL:', m); } };

for (let i = 0; i < 400; i++) {
  // primer: grading the correct answer must pass; common errors must fail with advice
  const p = BE.gen_primer();
  const seq = p.seq, [a, b] = p.hl;
  ck(p.answer.fwd === seq.slice(a, a + p.n), 'fwd = first n of target');
  ck(p.answer.rev === BE.seq.rc(seq.slice(b - p.n, b)), 'rev = rc of last n');
  ck(p.grade({ fwd: p.answer.fwd, rev: p.answer.rev }).ok, 'primer correct grades ok');
  const swapped = p.grade({ fwd: p.answer.rev, rev: p.answer.fwd });
  ck(!swapped.ok, 'swapped primers rejected');
  ck(p.grade({ fwd: p.answer.fwd, rev: seq.slice(b - p.n, b) }).notes.join(' ').includes('Reverse-complement'),
     'top-strand reverse gets the right hint');

  const r = BE.gen_revcomp();
  ck(r.grade({ rc: r.answer.rc }).ok, 'revcomp ok');
  ck(BE.seq.rc(r.answer.rc) === r.seq, 'revcomp is involutive');

  const w = BE.gen_which();
  const tgt = w.choices[w.answerIdx].split(' ')[0];
  const e = BE.seq.enzByName(tgt);
  ck(w.seq.indexOf(e[1]) >= 0, 'target site present: ' + tgt);
  w.choices.forEach((c, j) => {
    if (j === w.answerIdx) return;
    const other = BE.seq.enzByName(c.split(' ')[0]);
    ck(w.seq.indexOf(other[1]) < 0, 'decoy ' + other[0] + ' absent from ' + w.seq);
  });
  ck(w.grade({ choice: w.answerIdx }).ok, 'which grades ok');

  const bl = BE.gen_blunt();
  const want = bl.stem.includes('BLUNT');
  const ans = BE.seq.enzByName(bl.choices[bl.answerIdx].split(/\s+/)[0]);
  ck((BE.seq.overhang(ans).type === 'blunt') === want, 'blunt answer matches question');
  bl.choices.forEach((c, j) => {
    if (j === bl.answerIdx) return;
    const o = BE.seq.enzByName(c.split(/\s+/)[0]);
    ck((BE.seq.overhang(o).type === 'blunt') !== want, 'distractor is the other type');
  });

  const g = BE.gen_gel();
  const size = BE.plasmids[g.plasmid].size;
  g.answer.bands.forEach((bands, k) => {
    ck(bands.length === g.lanes[k].length, 'n cuts -> n fragments');
    ck(Math.abs(bands.reduce((x, y) => x + y, 0) - size) < 1, 'bands sum to plasmid size');
    ck(bands.every(x => x > 0), 'no zero/negative bands');
  });
  const good = {}; g.answer.bands.forEach((b, k) => good['l' + k] = b.join(','));
  ck(g.grade(good).ok, 'gel correct grades ok');
  const bad = Object.assign({}, good); bad.l0 = '1,2,3';
  ck(!g.grade(bad).ok, 'wrong gel rejected');

  const lm = BE.gen_lindigest();
  const ti = lm.labels.indexOf(lm.answer.pair[0]);
  ck(lm.pos[ti + 1] - lm.pos[ti] === lm.answer.size, 'linmap pair spacing matches');
  ck(lm.grade({ pair: lm.answer.pair.join(', ') }).ok, 'linmap grades ok');
  ck(lm.grade({ pair: lm.answer.pair.slice().reverse().join(',') }).ok, 'order-insensitive');

  const kin = BE.gen_kinetics();
  if (kin.kind === 'calc') ck(kin.grade({ v: kin.answer.v }).ok, 'kinetics calc ok');
  else ck(kin.grade({ choice: kin.answerIdx }).ok, 'kinetics mc ok');
}

// SVG smoke tests
const svg = BE.gelSVG([6000,5000,1000], [{label:'SapI', bands:[5762]}], {});
ck(svg.startsWith('<svg') && svg.endsWith('</svg>'), 'gel svg well formed');
ck((svg.match(/</g)||[]).length === (svg.match(/>/g)||[]).length, 'gel svg balanced');
const m = BE.plasmidSVG('plic', ['SapI','HpaI'], null);
ck(m.includes('pLICHIS_Stag') && m.endsWith('</svg>'), 'plasmid svg ok');
const lmv = BE.linMapSVG(['A','B','C'], [0, 500, 1500]);
ck(lmv.endsWith('</svg>'), 'linear map svg ok');

console.log(fail ? `\n${fail} FAILURES of ${n} checks` : `\nAll ${n} checks passed`);
process.exit(fail ? 1 : 0);
