// Builds flashcards from the topic data, so cards can never drift from the topics.
// [moduleId, topicId, front, back, kind]  kind: f = fact, d = deeper prompt
const fs = require('fs'), vm = require('vm');
const ctx = vm.createContext({}); ctx.window = ctx; ctx.console = console;
for (const f of process.env.BEFILES.split(':'))
  vm.runInContext(fs.readFileSync(f, 'utf8'), ctx, { filename: f });
const BE = ctx.BE, out = [];
const strip = s => String(s).replace(/<[^>]+>/g, '');

for (const t of BE.topics) {
  // one card per key term
  for (const [term, def] of (t.terms || [])) out.push([t.m, t.id, term, def, 'f']);
  // the topic's one-liner, asked as a question
  out.push([t.m, t.id, 'In one line: ' + t.title, t.one, 'f']);
  // every compare table becomes a column-recall prompt
  if (t.compare) {
    const head = t.compare.head.filter(Boolean);
    out.push([t.m, t.id, 'Compare: ' + head.join(' vs '),
      t.compare.rows.map(r => r.join(' — ')).join('<br>'), 'd']);
  }
  // the first two recall prompts become deeper cards
  for (const r of (t.recall || []).slice(0, 2)) out.push([t.m, t.id, r, '', 'd']);
  // every trap becomes a card, since traps are where marks are lost
  for (const tr of (t.traps || [])) out.push([t.m, t.id, 'Trap check — ' + t.title, tr, 'f']);
  if (t.trick) out.push([t.m, t.id, 'Memory hook: ' + t.title, t.trick, 'f']);
}
// deeper prompts with no stored answer point back at the topic
for (const c of out) if (!c[3]) c[3] = 'Answer it aloud, then open the topic to check.';

const esc = s => String(s).replace(/\\/g, '\\\\').replace(/"/g, '\\"');
const lines = ['// Flashcards, generated from the topics by be3415/gen/gen_cards.js.',
  '// [module, topic, front, back, kind]  kind: "f" = fact, "d" = deeper prompt',
  '// Regenerate after editing any topic so the two never drift apart.',
  'window.BE = window.BE || {};', 'BE.cards = ['];
for (const c of out)
  lines.push('  ["' + c[0] + '", "' + c[1] + '", "' + esc(c[2]) + '", "' + esc(c[3]) + '", "' + c[4] + '"],');
lines.push('];');
fs.writeFileSync(process.argv[2], lines.join('\n') + '\n');
console.log('wrote', out.length, 'cards from', BE.topics.length, 'topics');
const byKind = {}; out.forEach(c => byKind[c[4]] = (byKind[c[4]] || 0) + 1);
console.log('kinds:', JSON.stringify(byKind));
