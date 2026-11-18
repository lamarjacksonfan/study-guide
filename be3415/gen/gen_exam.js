// Builds held-out true/false exam items from the professor's own review statements.
// Half are left TRUE; half have one targeted word swapped, the trap the review's
// wording invites. Every swap is verified to actually apply before it is used.
const fs = require('fs'), vm = require('vm');
const ctx = vm.createContext({}); ctx.window = ctx; ctx.console = console;
for (const f of process.env.BEFILES.split(':'))
  vm.runInContext(fs.readFileSync(f, 'utf8'), ctx, { filename: f });
const BE = ctx.BE;

// [find, replace, what the swap breaks]
const SWAPS = [
  ['binding site (hollow or cleft on the receptor surface)', 'active site where catalysis of the ligand occurs', 'a receptor binding site does no chemistry'],
  ['an induced fit', 'a rigid lock-and-key fit', 'binding causes an induced fit'],
  ['being received inside the cell', 'being received outside the cell', 'the signal is carried INTO the cell'],
  ['it is not permanently bound', 'it is permanently bound', 'the ligand departs; binding is reversible'],
  ['attractive forces in hydrophobic regions', 'attractive forces in hydrophilic regions', 'these forces are maximised in HYDROPHOBIC regions'],
  ['serve as an H-bond bridge', 'serve as a covalent bridge', 'water bridges by hydrogen bonding, not covalently'],
  ['are critical regulators of the binding affinity', 'have no measurable effect on the binding affinity', 'solvation and desolvation DO regulate affinity'],
  ['favorable entropy', 'unfavorable entropy', 'releasing ordered water is entropically FAVOURABLE'],
  ['false positives', 'false negatives', 'poor specificity causes false POSITIVES'],
  ['IgG, IgM, IgA, IgD & IgE', 'IgG, IgM, IgA, IgD & IgK', 'the fifth class is IgE; there is no IgK'],
  ['between two\ndifferent organisms', 'between two identical host strains', 'a shuttle vector works in two DIFFERENT organisms'],
  ['two\ndifferent organisms', 'two identical host strains', 'a shuttle vector works in two DIFFERENT organisms'],
  ['amplify it (make more copies of the DNA for further use)', 'translate it directly into protein for harvesting', 'a cloning vector amplifies DNA; an expression vector makes protein'],
  ['encounters a termination sequence', 'encounters a second promoter sequence', 'elongation ends at a TERMINATOR'],
  ['glucose and\ngalactose', 'glucose and fructose', 'beta-galactosidase yields glucose and GALACTOSE'],
  ['yield glucose and galactose', 'yield glucose and fructose', 'beta-galactosidase yields glucose and GALACTOSE'],
  ['immediately after they are added', 'only several cell generations after they are added', 'proofreading acts IMMEDIATELY'],
  ['deletions; inversions; translocations; duplications', 'deletions; inversions; substitutions; duplications', 'substitution is a GENE-level mutation'],
  ['contains many common restriction\nenzyme sites', 'contains a single unique restriction enzyme site', 'an MCS holds MANY sites'],
  ['many common restriction', 'one single rarely-used restriction', 'an MCS holds MANY sites'],
  ['a single or multicellular environment', 'a cell-free test tube only', 'chemical genetics works in living single or multicellular systems'],
  ['non-genetic factors', 'permanent changes to the DNA sequence', 'epigenetics changes expression WITHOUT changing sequence'],
  ['2 copies of the 4 different histone protein cores', '4 copies of the 2 different histone protein cores', 'it is 2 copies each of 4 histones'],
  ['DNA is tightly wrapped', 'DNA is loosely wrapped', 'heterochromatin is TIGHTLY packed'],
  ['Much of the genome is packaged in heterochromatin', 'Only a tiny fraction of the genome is packaged in heterochromatin', 'MUCH of the genome is heterochromatin'],
  ['Posttranslational modification of the histone tails', 'Posttranslational modification of the DNA backbone', 'it is the HISTONE TAILS that are modified'],
  ['N-terminal tail', 'C-terminal tail', 'the modified histone tail is N-terminal'],
  ['can inhibit transcription factor binding', 'can enhance transcription factor binding', 'methylation INHIBITS transcription factor binding'],
  ['without making permanent mutations', 'by making permanent mutations', 'methylation works WITHOUT changing the sequence'],
  ['CpG (CG) dinucleotides', 'ApT (AT) dinucleotides', 'methylation occurs at CpG dinucleotides'],
  ['they do not independently carry out metabolism', 'they independently carry out metabolism', 'viruses have NO independent metabolism'],
  ['activators', 'repressors', 'HAT activates; a repressor does the opposite'],
  ['repressors', 'activators', 'HDAC represses; an activator does the opposite'],
  ['variable region', 'constant region', 'specificity comes from the variable region'],
  ['euchromatin', 'heterochromatin', 'euchromatin is the loose, transcribed form'],
  ['target identification', 'target validation', 'forward chemical genetics aims at identification'],
  ['target function and validation', 'target identification', 'reverse chemical genetics aims at validation'],
  ['promoter', 'terminator', 'the promoter starts transcription; the terminator stops it'],
  ['white', 'blue', 'a disrupted lacZ gives a WHITE colony'],
  ['immunoglobulins', 'immunosuppressants', 'antibodies are immunoglobulins'],
  ['circular', 'linear', 'plasmids are circular'],
  ['survives', 'is destroyed by', 'Taq survives the denaturation temperature'],
  ['non-covalent', 'covalent', 'recognition uses non-covalent interactions'],
  ['weak and easy to break but collectively quite strong',
   'strong individually but collectively weak', 'they are individually weak, collectively strong'],
  ['adding acetyl groups', 'removing acetyl groups', 'HAT ADDS acetyl groups'],
  ['removing acetyl groups', 'adding acetyl groups', 'HDAC REMOVES acetyl groups'],
  ['two different restriction enzymes', 'the same restriction enzyme twice',
   'directional cloning needs two DIFFERENT enzymes'],
  ['without killing', 'by killing', 'M13 is non-lytic and does not kill the cell'],
  ['octamer', 'dimer', 'the histone core is an octamer'],
];

const items = [];
let eligible = 0;
BE.reviewTrue.forEach(function (r, i) {
  const [n, topic, stmt, note] = r;
  const m = /^m\d+$/.test(topic) ? topic : null;
  const mod = (BE.topics.find(t => t.id === topic) || {}).m;
  if (!mod) throw new Error('no module for topic ' + topic);
  const hit = SWAPS.find(s => stmt.includes(s[0]));
  if (hit) eligible++;
  // flip every other ELIGIBLE statement, so the bank lands near 50/50 true-false
  const makeFalse = hit && (eligible % 2 === 0);
  const text = makeFalse ? stmt.replace(hit[0], hit[1]) : stmt;
  if (makeFalse && text === stmt) throw new Error('swap did not apply on ' + n);
  items.push({
    id: 'x' + n, m: mod, t: topic, lvl: makeFalse ? 3 : 2,
    q: text, ans: makeFalse ? 1 : 0,
    why: makeFalse
      ? 'FALSE as written. The original statement says "' + hit[0] + '", not "' + hit[1] +
        '": ' + hit[2] + '.'
      : 'TRUE. This is the review statement unchanged. ' + note,
    concept: (BE.topics.find(t => t.id === topic) || {}).title || topic,
    // per-option feedback, so a wrong pick always explains itself
    w: makeFalse
      ? ['Read it again: "' + hit[1] + '" has been substituted for "' + hit[0] + '", so it is not true as written.', '']
      : ['', 'This is the review statement word for word, so it is true as written.']
  });
});

const esc = s => String(s).replace(/\\/g, '\\\\').replace(/"/g, '\\"');
const half = Math.ceil(items.length / 2);
const lines = ['',
  '// Held-out true/false bank, generated from the review statements by',
  '// be3415/gen/gen_exam.js. Items that read FALSE have exactly one word or phrase',
  '// swapped; the explanation names the swap. Never shown in Practice.',
  '(function (Q) {'];
items.forEach(function (it, i) {
  const set = i < half ? 'MA' : 'MB';
  lines.push('Q("' + it.id + '", "' + set + '", "' + it.m + '", "' + it.t + '", ' + it.lvl + ', "' +
    esc(it.q) + '",\n  ["True", "False"], ' + it.ans + ',\n  "' + esc(it.why) + '",\n  ["' +
    esc(it.w[0]) + '", "' + esc(it.w[1]) + '"], "' + esc(it.concept) + '", "");');
});
lines.push('})(BE.Q);');
fs.appendFileSync(process.argv[2], lines.join('\n') + '\n');
const f = items.filter(i => i.ans === 1).length;
console.log('appended', items.length, 'true/false items:', items.length - f, 'true,', f, 'false');
