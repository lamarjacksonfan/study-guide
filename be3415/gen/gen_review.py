import json, os, sys
G = os.path.dirname(os.path.abspath(__file__))
OUT = sys.argv[1]

def tsv(name):
    return [l.split('\t') for l in open(os.path.join(G, name)).read().split('\n') if l]

stmts = json.load(open(os.path.join(G, 'true_stmts.json')))
ann = {int(r[0]): r[1:] for r in tsv('true_ann.tsv')}
mc = json.load(open(os.path.join(G, 'mc.json')))
mcann = {int(r[0]): r[1:] for r in tsv('mc_ann.tsv')}
oth = tsv('other_ann.tsv')

assert len(stmts) == 53 and len(ann) == 53, (len(stmts), len(ann))
assert len(mc) == 9 and len(mcann) == 9
assert len(oth) == 9

def esc(s):
    return s.replace('\\', '\\\\').replace('"', '\\"')

L = ["// The professor's Exam 3 review sheet, with the answer key and a link from every",
     "// item to the study topic that explains it.",
     "// Statements and multiple-choice items are parsed verbatim from",
     "// Review_for_Exam_3_with_Answers.pdf by scratchpad/gen/gen_review.py; only the",
     "// topic link and the 'what to watch for' note are written by hand.",
     "window.BE = window.BE || {};", "",
     "// True statements: [n, topicId, statement, whatToWatchFor]",
     "BE.reviewTrue = ["]
for i, s in enumerate(stmts, 1):
    topic, note = ann[i]
    L.append('  [%d, "%s", "%s",\n   "%s"],' % (i, topic, esc(s), esc(note)))
L += ["];", "",
      "// Multiple choice: [n, topicId, stem, options[], answerIndex, explanation]",
      "BE.reviewMC = ["]
for i, it in enumerate(mc, 1):
    topic, note = mcann[i]
    opts = ', '.join('"%s"' % esc(o) for o in it['opts'])
    L.append('  [%d, "%s", "%s",\n   [%s], %d,\n   "%s"],'
             % (i, topic, esc(it['q']), opts, it['ans'], esc(note)))
L += ["];", "",
      "// Other questions: [n, topicId, problemId|null, stem, answer, explanation]",
      "BE.reviewOther = ["]
for r in oth:
    n, topic, prob, stem, answer, note = r
    pid = '"%s"' % prob if prob else 'null'
    L.append('  [%s, "%s", %s, "%s",\n   "%s",\n   "%s"],'
             % (n, topic, pid, esc(stem), esc(answer), esc(note)))
L.append("];")
open(OUT, 'w').write('\n'.join(L) + '\n')
print('wrote', OUT, len(L), 'lines:', len(stmts), 'true +', len(mc), 'MC +', len(oth), 'other')
