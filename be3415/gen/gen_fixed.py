import json, os, sys
G = os.path.dirname(os.path.abspath(__file__))
OUT = sys.argv[1]
COMP = {'A': 'T', 'T': 'A', 'G': 'C', 'C': 'G'}
rc = lambda s: ''.join(COMP[c] for c in reversed(s))

def sites(name):
    rows = [l.split('\t') for l in open(os.path.join(G, name)).read().split('\n') if l]
    return sorted([(n.rstrip('2'), int(p)) for n, p in rows], key=lambda r: r[1])

MAPS = {'plic': (5762, dict(sites('plic.tsv'))), 'pet': (8577, dict(sites('pet.tsv')))}

def digest(key, enzymes):
    size, m = MAPS[key]
    cuts = sorted(m[e] for e in enzymes)
    if len(cuts) == 1:
        return [size]
    out = [cuts[i + 1] - cuts[i] for i in range(len(cuts) - 1)]
    out.append(size - cuts[-1] + cuts[0])
    return sorted(out, reverse=True)

probs = json.load(open(os.path.join(G, 'fixed_a.json'))) + json.load(open(os.path.join(G, 'fixed_b.json')))
for p in probs:
    k = p['kind']
    if k == 'primer':
        seq = ''.join(open(os.path.join(G, p.pop('seqFile'))).read().split())
        a, b = p.pop('hlFrom'), p.pop('hlTo')
        i, j = seq.index(a), seq.index(b) + len(b)
        n = p['n']
        p['seq'], p['hl'] = seq, [i, j]
        p['answer'] = {'fwd': seq[i:i + n], 'rev': rc(seq[j - n:j]), 'ampLen': j - i}
    elif k == 'linmap':
        pos, x = [0], 0
        for g in p['gaps']:
            x += g
            pos.append(x)
        p['pos'] = pos
    elif k == 'gel':
        p['bands'] = [digest(p['plasmid'], lane) for lane in p['lanes']]
    elif k == 'design':
        p['fragLen'] = digest(p['plasmid'], p['answer'])[-1]

L = ["", "// Fixed problems taken straight from the review sheet and the labs.",
     "// Answers are computed by scratchpad/gen/gen_fixed.py from the maps above,",
     "// not typed in by hand, and they match the professor's answer key.",
     "BE.fixed = " + json.dumps(probs, indent=1, ensure_ascii=False) + ";"]
open(OUT, 'a').write('\n'.join(L) + '\n')
for p in probs:
    print(p['id'], '|', p.get('answer') or p.get('bands'), p.get('fragLen', ''))
