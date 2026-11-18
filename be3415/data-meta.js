// BE 3415 Exam 3: modules, materials analysis, plan, cram packet.
window.BE = window.BE || {};

BE.modules = [
  { id: "m1", short: "M1", name: "Enzyme kinetics & regulation", src: "Review MC (9 Qs). Lecture not uploaded ⚑" },
  { id: "m2", short: "M2", name: "Receptors, binding & antibodies", src: "Review true statements 1–15. Lecture not uploaded ⚑" },
  { id: "m3", short: "M3", name: "DNA replication, vectors & cloning", src: "Week 12 Lecture 2 slides 2–13, 26–31 + review" },
  { id: "m4", short: "M4", name: "PCR, restriction digests & gels", src: "Review problems. Lecture not uploaded ⚑" },
  { id: "m5", short: "M5", name: "RNA, gene expression & lac operon", src: "Week 12 L1 slides 2–5; Week 12 L2 slides 14–24 + review" },
  { id: "m6", short: "M6", name: "RNAi & CRISPR genome editing", src: "Week 12 Lecture 1 slides 6–35 (not on review)" },
  { id: "m7", short: "M7", name: "Libraries, phage display & chemical genetics", src: "Week 12 Lecture 2 slides 25–56 + review" },
  { id: "m8", short: "M8", name: "Epigenetics", src: "Week 13 Lecture 1 (38 slides) + review" },
  { id: "m9", short: "M9", name: "Metabolic engineering", src: "Review (6 strategies); Week 13 L1 slide 2 (trp feedback) ⚑" }
];

BE.analysis = {
  inventory: [
    ["Review_for_Exam_3_with_Answers.pdf", "7 pages: 53 true statements, 9 multiple-choice, 9 'other' questions (primer design, restriction enzymes, gel, short answers, true/false). Says the exam is <b>not only multiple choice</b> and includes lecture and lab material that's <b>not on the review</b>.", "Priority 1"],
    ["Week 12 Lecture 1.pptx", "35 slides: <b>RNA-directed technologies</b>: kinds of RNA, snRNA/splicing, RNAi (siRNA, miRNA, Dicer, RISC, Argonaute, siRNA design), CRISPR/Cas9, ZFN, TALEN, NHEJ vs HDR, dCas9", "Priority 2"],
    ["Week 12 Lecture 2.pptx", "56 slides: <b>DNA libraries / virus libraries / chemical genetics</b>: replication, mutations, vectors, promoters, terminators, lac operon, DNA and cDNA libraries, M13 phage display, ELISA, SELEX, chemical genetics", "Priority 2"],
    ["Week 13 Lecture 1.pptx", "38 slides: <b>Epigenetics</b>: chromatin, histones, nucleosomes, HAT/HDAC, histone code, DNA methylation, CpG, DNMT/SAM, agouti mice, X-inactivation, plants", "Priority 2"],
    ["Week 13 Lecture 1 – Copy.pptx", "<b>Exact duplicate</b> of Week 13 Lecture 1 (identical file checksum). Ignored.", "Duplicate"]
  ],
  styleNotes: [
    "Multiple-choice items are classic textbook kinetics questions (order of kinetics, Km meaning and formula, inhibitor types, allosteric sigmoid curves).",
    "The 53 'true statements' read like the exam's true/false and multiple-choice pool. Many are lecture sentences nearly word for word (e.g. HAT/HDAC, forward/reverse chemical genetics, vectors), so a likely trap is a single word swapped (activator ↔ repressor, forward ↔ reverse, promoter ↔ terminator).",
    "Problem-solving items need hands-on skills: writing 13-nt primers (forward = first 13 nt; reverse = reverse complement of the last 13 nt), finding a restriction site in a sequence, picking enzymes that release a fragment of a given size, and drawing gel bands for single and double digests of a 5,762 bp plasmid.",
    "True/false items test exact terminology: ELISA's 'S' (immunosorbent), and Shine–Dalgarno being read by the ribosome rather than RNA polymerase.",
    "Short answer: list-recall (the 6 metabolic-engineering strategies; what m/r/t stand for)."
  ],
  missing: [
    "<b>Weeks 10 and 11 lectures</b>: you said the exam covers Weeks 10–13, but only Weeks 12–13 were uploaded. The review tests <b>enzyme kinetics, receptors/binding forces, antibodies, PCR/qPCR, restriction enzymes, blue-white screening, gel electrophoresis and metabolic engineering</b>, and none of those lectures are here. I built those topics from the review plus standard textbook knowledge and marked them ⚑. Upload those lectures and I'll check everything against them.",
    "<b>Lab materials</b>: none uploaded. The review warns that lab content will be on the exam. Likely candidates are restriction digests, gels, PCR and transformation/blue-white screening, but I haven't invented any lab procedures. Send your lab handouts if you have them.",
    "<b>Week 13 Lecture 2</b> (if one exists) wasn't uploaded.",
    "Several slides are figure-only (e.g. W12L1 slides 4, 14, 15, 30; W12L2 slides 36–39, 43, 45–47; W13L1 slides 5–7, 12, 25, 32, 35, 36). I read all of them visually; anything important from them is included."
  ],
  conflicts: [
    ["Nucleosome wording (review)", "'…2 copies of the 4 different histone protein cores (2x4 so a single histone is an octomer)'", "The <b>histone core</b> (the protein spool of one nucleosome) is the octamer: 2 each of H2A, H2B, H3, H4. Each individual histone is one protein. Answer 'octamer' for the core."],
    ["qPCR (review)", "'Quantitative PCR uses fluorescently labeled primers…'", "Accept it on the exam. Helpful context: most qPCR uses a DNA-binding dye (SYBR Green) or a labeled probe (TaqMan); some formats do use labeled primers. The key idea is fluorescence measured every cycle: an earlier threshold cycle (Ct) means more starting template."],
    ["Michaelis constant meaning (review MC)", "Answer D: 'a measure of how tightly the substrate is bound'", "Best answer among the choices. Strictly, Km = (k₋₁ + k₂)/k₁ equals the dissociation constant only when k₂ ≪ k₋₁. Lower Km = higher apparent affinity. Both ideas are on the review, so know both."],
    ["2 kb fragment (review)", "Answer: PstI and BamHI", "Correct if the map is a segment inside a larger molecule: PstI releases the right end and BamHI the left, giving 2,000 bp (BamHI→PstI) plus 2,700 bp. If the drawn DNA ends at the PstI sites, BamHI alone would also give 2,000 + 2,700. Follow the professor's two-enzyme logic."],
    ["Lac operon with glucose + lactose", "Review: 'little to no β-galactosidase'. Slide 22: 'very low expression'", "Consistent. Without CAP, RNA polymerase binds weakly, so a trickle of expression. Say 'very low/little'."],
    ["Bacterial replication time (W12L2 slide 3)", "'~3 million bp at ~1000 bp/s → ~40 min'", "Fine as an estimate (two forks from one ori → ~25 min of pure synthesis; real E. coli takes ~40 min). Know the logic: one ori is enough for a small genome; humans need ~10,000 origins."]
  ],
  priorities: [
    ["A", "PCR primer design & reverse complements", "M4", "Review 'other' problem; a skill, not memorization; easy to lose points on orientation"],
    ["A", "Restriction enzymes: sites, sticky vs blunt, mapping", "M4", "3 review problems (blunt-end pick, which enzyme cuts, 2 kb fragment)"],
    ["A", "Plasmid digests → gel bands", "M4", "Review gel problem; requires arithmetic on a circular map"],
    ["A", "Michaelis–Menten, Km/Vmax, order of kinetics", "M1", "5 of 9 review MCs"],
    ["A", "Inhibition & allosteric regulation", "M1", "3 review MCs + feedback inhibition on W13 slide 2"],
    ["A", "Lac operon & inducible expression", "M5", "2 true statements incl. the 4-scenario truth table; 8 lecture slides"],
    ["A", "Vectors: cloning / expression / shuttle, MCS, directional cloning, blue-white", "M3", "8 true statements + 4 lecture slides"],
    ["A", "Epigenetics: histones, HAT/HDAC, eu/heterochromatin, CpG methylation", "M8", "14 true statements + a full 38-slide lecture"],
    ["A", "Receptor binding forces & specificity", "M2", "10 true statements"],
    ["B", "Antibodies: classes, V/C regions, CDRs, functions", "M2", "5 true statements; links to phage display (scFv, Fab)"],
    ["B", "Phage display, M13, libraries, ELISA", "M7", "3 true statements + ELISA T/F + 22 slides"],
    ["B", "Chemical genetics: forward vs reverse", "M7", "3 true statements; classic swap trap"],
    ["B", "Metabolic engineering: 6 strategies", "M9", "Short-answer list + 1 true statement"],
    ["B", "Transcription/translation, kinds of RNA, Shine–Dalgarno", "M5", "Review short answer + T/F; W12L1 slides 2–5"],
    ["B", "RNAi (siRNA vs miRNA, Dicer, RISC)", "M6", "Not on the review but 24 lecture slides. The review warns about non-review material"],
    ["B", "CRISPR/Cas9, PAM, NHEJ vs HDR, dCas9", "M6", "Not on the review; 11 lecture slides"],
    ["C", "DNA replication enzymes & proofreading", "M3", "1 true statement; foundational"],
    ["C", "Mutations: gene vs chromosome level", "M3", "1 true statement"],
    ["C", "cDNA libraries, purification tags, SELEX, yeast two-hybrid", "M7", "Lecture only"]
  ]
};

/* ------------------------------------------------------- STUDY PLAN */
// Sessions are ordered; the dashboard spreads them over the days left.
BE.sessions = [
  { n: 1, title: "Diagnostic + DNA toolkit foundations", mins: 150, blocks: [
    ["20 min", "Diagnostic quiz (Mock tab). Don't study first; this shows your starting point."],
    ["40 min", "Learn: DNA replication → Vectors & cloning → Restriction enzymes. Do every Active Recall prompt aloud."],
    ["10 min", "Break"],
    ["50 min", "Problems: reverse-complement drill (5), restriction-site finder (5), sticky vs blunt (5)."],
    ["30 min", "Review tab: true statements 16–31 (vectors, lac, cloning). Answer before revealing."]
  ]},
  { n: 2, title: "PCR, digests and gels (the hands-on skills)", mins: 150, blocks: [
    ["10 min", "Spaced recall: flashcards from Session 1 (hard only)."],
    ["35 min", "Learn: PCR & primer design → Gel electrophoresis & restriction mapping."],
    ["45 min", "Problems: primer design ×4 (13-nt and 18-nt), linear map ×3, plasmid gel ×3."],
    ["10 min", "Break"],
    ["30 min", "Redo the 4 review problems (primer, which enzyme, 2 kb fragment, gel) from scratch without peeking."],
    ["20 min", "Practice quiz: M3 + M4, Levels 2–4."]
  ]},
  { n: 3, title: "Enzyme kinetics & binding", mins: 150, blocks: [
    ["10 min", "Spaced recall: 5 primer/digest problems (mixed)."],
    ["45 min", "Learn: Enzyme basics → Michaelis–Menten → Inhibition → Allosteric regulation. Sketch every graph."],
    ["20 min", "Problems: kinetics calculator ×6 (v from [S], Km from data, inhibitor predictions)."],
    ["10 min", "Break"],
    ["40 min", "Learn: Receptors & binding forces → Antibodies. Then review true statements 1–15 + all 9 MCs."],
    ["25 min", "Practice: M1 + M2."]
  ]},
  { n: 4, title: "Gene expression, lac operon, RNAi, CRISPR", mins: 150, blocks: [
    ["10 min", "Spaced recall: kinetics graphs from memory (MM, competitive, noncompetitive, sigmoid)."],
    ["40 min", "Learn: RNA & expression → Lac operon. Fill in the lac truth table from memory twice."],
    ["40 min", "Learn: RNAi → CRISPR/Cas9 (non-review material; expect at least one question)."],
    ["10 min", "Break"],
    ["30 min", "Practice: M5 + M6, plus scenario questions (gene ON/OFF predictions)."],
    ["20 min", "Short answers: 3 from the bank, graded."]
  ]},
  { n: 5, title: "Libraries, phage display, chemical genetics, epigenetics, metabolic engineering", mins: 165, blocks: [
    ["10 min", "Spaced recall: lac table + siRNA vs miRNA."],
    ["40 min", "Learn: Libraries & cDNA → Phage display → Chemical genetics."],
    ["45 min", "Learn: Chromatin & histones → DNA methylation. Draw the HAT/HDAC/MBD chain."],
    ["10 min", "Break"],
    ["20 min", "Learn: Metabolic engineering. Write the 6 strategies from memory 3 times."],
    ["40 min", "Review tab: true statements 32–53 + all 'other' questions."]
  ]},
  { n: 6, title: "Mock Exam A + fix weaknesses", mins: 150, blocks: [
    ["60 min", "Mock Exam A, timed, no notes."],
    ["10 min", "Break"],
    ["50 min", "Weakness tracker: re-study your 2 weakest topics, then retry every missed question."],
    ["30 min", "Problems: whichever generator you scored lowest on, ×5."]
  ]},
  { n: 7, title: "Mock Exam B + cram", mins: 140, blocks: [
    ["60 min", "Mock Exam B, timed."],
    ["30 min", "Error-log review: re-read explanations only for the misses."],
    ["40 min", "Cram packet top to bottom; cover each table and recite it."],
    ["10 min", "Final readiness checklist."]
  ]}
];

/* ------------------------------------------------------- CRAM PACKET */
BE.cram = [
  { h: "1 · Enzyme kinetics", items: [
    "v₀ = V<sub>max</sub>[S] / (K<sub>M</sub> + [S]). K<sub>M</sub> = [S] at ½V<sub>max</sub> = (k₋₁ + k₂)/k₁. Lower K<sub>M</sub> = higher apparent affinity.",
    "[S] ≪ K<sub>M</sub> → <b>first-order</b> (v ∝ [S]). [S] ≫ K<sub>M</sub> → saturated → <b>zero-order</b> (v ≈ V<sub>max</sub>).",
    "ES complex may go back to E + S (k₋₁) or forward to E + P (k₂).",
    "Competitive: active site, looks like substrate, K<sub>M</sub>↑, V<sub>max</sub> same, beaten by more substrate. Noncompetitive: other site, V<sub>max</sub>↓, K<sub>M</sub> same. Irreversible: covalent, enzyme can't be regenerated.",
    "Hyperbolic = Michaelis–Menten (non-allosteric). <b>Sigmoidal = allosteric/cooperative</b> (aspartate transcarbamoylase). Feedback inhibition: end product inhibits the first committed enzyme (trp).",
    "Temperature optimum: the rate rises with T until <b>denaturation</b> sets in."
  ]},
  { h: "2 · Receptors & antibodies", items: [
    "Ligand binds a cleft → intermolecular (non-covalent) bonds → <b>induced fit</b> → domino effect = <b>signal transduction</b>. Binding is reversible.",
    "Non-covalent bonds: individually weak, collectively strong (H-bonds, ionic, van der Waals/induced dipole, hydrophobic).",
    "Hydrophobic interface: releasing ordered water → favorable <b>entropy</b>. Solvation/desolvation regulates affinity. Water can bridge H-bonds.",
    "Specificity prevents false positives (sensors), background (imaging), side effects (drugs).",
    "Antibodies = immunoglobulins: IgG, IgM, IgA, IgD, IgE. 2 heavy + 2 light chains. Antigen binding is set by the <b>variable region</b> sequence; variability is concentrated in the <b>CDRs</b>. Constant (Fc) region recruits cells.",
    "ELISA = enzyme-linked immuno<b>sorbent</b> assay (not 'immunosuppressant')."
  ]},
  { h: "3 · DNA replication & vectors", items: [
    "ori (AT-rich) → helicase unwinds → primase lays RNA primer → DNA pol adds to 3′-OH only (5′→3′) → RNase H removes primer → pol fills → ligase seals.",
    "Proofreading removes wrong nucleotides right after they're added (slower but more accurate).",
    "Chromosome-level mutations: deletion, inversion, translocation, duplication. Gene-level: substitution, insertion/deletion (frameshift), inversion.",
    "Plasmid = circular DNA that replicates in a host only if its ori is compatible. Cloning vector = make copies. Expression vector = make mRNA/protein (promoter + terminator; in E. coli also an RBS). Shuttle vector = works in two organisms.",
    "Eukaryotic protein in E. coli: clone <b>cDNA</b> (no introns) into an expression vector with promoter + RBS + terminator."
  ]},
  { h: "4 · DNA / PCR / restriction rules", items: [
    "Always write DNA 5′→3′. Reverse complement = complement each base, then reverse the order.",
    "Forward primer = first N nt of the target (top strand, as written). Reverse primer = reverse complement of the last N nt of the target.",
    "PCR: denature ~95 °C → anneal ~55 °C → extend 72 °C. Taq survives denaturation. Copies ≈ 2ⁿ.",
    "Restriction sites are palindromes (the site reads the same 5′→3′ on both strands). Cut in the middle = <b>blunt</b> (TGG↓CCA, BalI). Off-center = <b>sticky</b> (G↓GATCC, BamHI → 5′-GATC overhang).",
    "Linear DNA: n cuts → n+1 fragments. Circular plasmid: n cuts → n fragments. One cut in a plasmid = one full-length linear band.",
    "Circular fragment sizes: subtract positions; the wrap-around fragment = total − (last − first).",
    "Gel: DNA (negative) runs toward + ; smaller fragments run farther. Read band sizes against the ladder."
  ]},
  { h: "5 · Cloning screens", items: [
    "MCS = many restriction sites in one spot → flexible choice of enzymes.",
    "Directional cloning: cut vector and insert with the same <b>two different</b> enzymes → the insert can only go in one way.",
    "Blue-white: MCS sits inside lacZ. Insert disrupts lacZ → no β-gal → X-Gal not cleaved → <b>white = recombinant</b>. Blue = empty vector.",
    "Selection kills or blocks the unwanted (antibiotic). Screening lets everything grow and you look (blue/white)."
  ]},
  { h: "6 · Gene expression & lac operon", items: [
    "mRNA = messenger, rRNA = ribosomal, tRNA = transfer. snRNA → spliceosome. siRNA/miRNA → silencing.",
    "Prokaryotic promoter: −35 TTGACA … (17 nt) … −10 TATAAT. RNA pol starts just after the promoter, stops at the terminator (GC hairpin + U-run).",
    "Shine–Dalgarno = ribosome binding site on mRNA, read by the <b>ribosome</b> (16S rRNA), not RNA polymerase.",
    "Lac: ON only when <b>glucose absent AND lactose present</b>. Lactose (allolactose) pulls the repressor off the operator; CAP (active only without glucose) stabilizes RNA polymerase.",
    "Repressors block RNA polymerase; activators recruit/stabilize it."
  ]},
  { h: "7 · RNAi & CRISPR", items: [
    "dsRNA → <b>Dicer</b> → ~21 nt siRNA (19 bp + 2-nt 3′ overhangs) → <b>RISC</b> (Argonaute; Ago2 cuts) keeps the strand with the less stable 5′ end → perfect match = mRNA cleaved.",
    "miRNA: ~70 nt hairpin → ~22 nt, imperfect match (3′-UTR) → blocks translation; one miRNA hits many mRNAs. siRNA hits one.",
    "CRISPR/Cas9: sgRNA (crRNA + tracrRNA) guides Cas9 to target next to a <b>PAM</b> (NGG) → double-strand break. No template → <b>NHEJ</b> (indels, knockout). Donor template → <b>HDR</b> (precise edit). dCas9 binds without cutting (block/activate transcription, imaging)."
  ]},
  { h: "8 · Libraries, phage & chemical genetics", items: [
    "cDNA library: oligo(dT) captures poly(A) mRNA → reverse transcriptase → cDNA → DNA pol → ds cDNA → add linkers → vector.",
    "M13: filamentous, ssDNA (~6,400 nt), <b>non-lytic</b>. p3 (~5 copies, infection, binds F pilus/TolA) and p8 (~2,700 copies, coat). Fuse library to gene 3 → display.",
    "Panning: mix with target → wash non-binders → elute binders → amplify in E. coli → repeat with tougher conditions → sequence.",
    "Forward chemical genetics = phenotype first → <b>target identification</b>. Reverse = protein first → <b>target validation/function</b>.",
    "Viruses are 'non-living': no independent metabolism, but they evolve and replicate inside hosts."
  ]},
  { h: "9 · Epigenetics", items: [
    "Nucleosome = DNA (~146 bp) around a histone octamer (2× H2A, H2B, H3, H4). Histones are positive; DNA is negative.",
    "HAT adds acetyl → neutralizes lysine + → DNA loosens → <b>euchromatin</b> → transcription ON. HDAC removes acetyl → tight → <b>heterochromatin</b> → OFF.",
    "DNA methylation at CpG (5-methylcytosine, both strands; DNMT + SAM) → blocks TFs + recruits MBD proteins → HDAC → compaction → silencing.",
    "Epigenetics = expression changes without sequence change, sometimes inherited (agouti mice + folate/BPA; royal jelly → DNMT3 off → queen)."
  ]},
  { h: "10 · Metabolic engineering: the 6 strategies", items: [
    "1 Remove genetic-level transcriptional controls · 2 Remove allosteric enzymatic controls · 3 Kinetically enhance rate-limiting enzymes · 4 Genetically block competing pathways · 5 Enhance commitment of carbon to the pathway · 6 Enhance transport of toxic compound out of the cell.",
    "Adding genes can change a target phenotype. Find improved mutant clones by selection and screening."
  ]}
];

BE.readiness = [
  "I can write the Michaelis–Menten equation and say what K<sub>M</sub> and V<sub>max</sub> mean, with units",
  "I can say whether a reaction is first- or zero-order from [S] relative to K<sub>M</sub>",
  "I can sketch MM, competitive, noncompetitive and allosteric curves and label what changes",
  "I can explain ligand binding → induced fit → signal transduction",
  "I can explain why releasing water from a hydrophobic interface helps binding",
  "I can name the 5 antibody classes and explain variable region vs CDR vs constant region",
  "I can write a reverse complement quickly and correctly",
  "I can design forward and reverse primers of any length for a highlighted region",
  "I can tell sticky from blunt and name the overhang",
  "I can find which enzyme cuts a sequence",
  "I can calculate fragments for single and double digests of linear and circular DNA and draw the gel",
  "I can explain cloning vs expression vs shuttle vectors, MCS, directional cloning and blue-white screening",
  "I can fill in the lac operon table for all 4 glucose/lactose combinations and explain why",
  "I know what the Shine–Dalgarno sequence is and what binds it",
  "I can contrast siRNA vs miRNA and NHEJ vs HDR",
  "I can describe phage display panning and the roles of p3 and p8",
  "I can contrast forward vs reverse chemical genetics",
  "I can explain HAT vs HDAC, euchromatin vs heterochromatin, and CpG methylation → silencing",
  "I can list the 6 metabolic-engineering strategies"
];
