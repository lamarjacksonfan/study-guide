// Integrity checks across every BE 3415 data file.
const ctx = require(require('path').join(__dirname, 'load.js')), BE = ctx.BE;
let fail = 0; const bad = (c, m) => { if (!c) { fail++; console.log('  FAIL:', m); } };

const tids = new Set(BE.topics.map(t => t.id));
const mids = new Set(BE.modules.map(m => m.id));
const seen = new Set();

for (const q of BE.questions) {
  bad(!seen.has(q.id), 'duplicate question id ' + q.id); seen.add(q.id);
  bad(mids.has(q.m), q.id + ': unknown module ' + q.m);
  bad(tids.has(q.t), q.id + ': unknown topic ' + q.t);
  bad(q.o.length >= 2, q.id + ': needs >=2 options');
  bad(q.a.length >= 1, q.id + ': no answer');
  for (const a of q.a) bad(a >= 0 && a < q.o.length, q.id + ': answer index out of range');
  bad(q.w.length === q.o.length, q.id + ': whyWrong length ' + q.w.length + ' != options ' + q.o.length);
  for (const a of q.a) bad(q.w[a] === '', q.id + ': correct option ' + a + ' must have empty whyWrong');
  q.o.forEach((o, i) => bad(q.a.includes(i) || q.w[i] !== '',
    q.id + ': wrong option ' + i + ' has no explanation'));
  bad(new Set(q.o).size === q.o.length, q.id + ': duplicate option text');
  bad(q.why && q.why.length > 15, q.id + ': explanation too short');
  bad([1, 2, 3, 4].includes(q.lvl), q.id + ': bad level ' + q.lvl);
}

// review integrity
BE.reviewTrue.forEach(r => bad(tids.has(r[1]), 'reviewTrue ' + r[0] + ': bad topic ' + r[1]));
BE.reviewMC.forEach(r => {
  bad(tids.has(r[1]), 'reviewMC ' + r[0] + ': bad topic');
  bad(r[4] >= 0 && r[4] < r[3].length, 'reviewMC ' + r[0] + ': answer out of range');
});
const probIds = new Set(BE.fixed.map(p => p.id));
BE.reviewOther.forEach(r => {
  bad(tids.has(r[1]), 'reviewOther ' + r[0] + ': bad topic');
  bad(r[2] === null || probIds.has(r[2]), 'reviewOther ' + r[0] + ': unknown problem ' + r[2]);
});
// cards
BE.cards.forEach((c, i) => {
  bad(mids.has(c[0]), 'card ' + i + ': bad module');
  bad(tids.has(c[1]), 'card ' + i + ': bad topic');
  bad(c[2] && c[3], 'card ' + i + ': empty face');
});
// topics
BE.topics.forEach(t => {
  bad(mids.has(t.m), t.id + ': bad module');
  bad(t.recall && t.recall.length >= 3, t.id + ': needs >=3 recall prompts');
  bad(t.traps && t.traps.length >= 2, t.id + ': needs >=2 traps');
  if (t.compare) t.compare.rows.forEach((r, i) =>
    bad(r.length === t.compare.head.length, t.id + ': compare row ' + i + ' width mismatch'));
});
// every module has at least one topic and one question
for (const m of BE.modules) {
  bad(BE.topics.some(t => t.m === m.id), m.id + ': no topics');
  bad(BE.questions.some(q => q.m === m.id), m.id + ': no questions');
}
// mock exams must not reuse practice questions
const P = new Set(BE.questions.filter(q => q.set === 'P').map(q => q.id));
BE.questions.filter(q => q.set !== 'P').forEach(q =>
  bad(!P.has(q.id), q.id + ': exam question also in practice'));


// review guide: every review item appears exactly once, links resolve, MC options all explained
const want = [];
for (let i = 1; i <= 53; i++) want.push('t' + i);
for (let i = 1; i <= 9; i++) { want.push('m' + i); want.push('o' + i); }
const cover = {};
BE.guide.forEach(g => {
  bad(g.items.length && g.idea && g.points.length && g.twists.length && g.test.length, g.id + ': section incomplete');
  g.topics.forEach(t => bad(tids.has(t), g.id + ': bad topic ' + t));
  g.items.forEach(r => { cover[r] = (cover[r] || 0) + 1; });
});
want.forEach(r => bad(cover[r] === 1, 'guide: item ' + r + ' covered ' + (cover[r] || 0) + ' times'));
Object.keys(cover).forEach(r => bad(want.includes(r), 'guide: unknown item ' + r));
for (let i = 1; i <= 9; i++) bad((BE.guideMC['m' + i] || []).length === 4, 'guide: m' + i + ' needs 4 option explanations');

const counts = {}; BE.questions.forEach(q => counts[q.set] = (counts[q.set] || 0) + 1);
console.log('topics', BE.topics.length, '| cards', BE.cards.length,
  '| questions', BE.questions.length, JSON.stringify(counts),
  '| review', BE.reviewTrue.length + BE.reviewMC.length + BE.reviewOther.length,
  '| problems', BE.fixed.length);
console.log(fail ? '\n' + fail + ' FAILURES' : '\nAll data checks passed');
process.exit(fail ? 1 : 0);
