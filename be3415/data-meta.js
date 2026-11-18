// BE 3415 Exam 3: modules, materials analysis, plan, cram packet.
window.BE = window.BE || {};

BE.examDefault = "2026-11-25";

// topics: the study-topic ids this module covers, in teaching order.
BE.modules = [
  { id: "m1", short: "M1", name: "Enzyme kinetics & regulation",
    src: "Week 10 Lecture 2 (44 slides) + review MC (9 Qs)",
    topics: ["enz", "order", "mm", "inh", "allo", "flux"] },
  { id: "m2", short: "M2", name: "Receptors, binding & antibodies",
    src: "Week 11 Lecture 2 (64 slides) + review true statements 1\u201315",
    topics: ["rec", "forces", "rtypes", "ab", "iso"] },
  { id: "m3", short: "M3", name: "DNA replication, vectors & cloning",
    src: "Week 11 L1 slides 9\u201327; Week 12 L2 slides 2\u201313, 26\u201331; Lab 6 + review",
    topics: ["rep", "vec", "clone", "xform"] },
  { id: "m4", short: "M4", name: "PCR, restriction digests & gels",
    src: "Week 11 L1 slides 1\u20138, 28\u201337; Lab 5; review problems",
    topics: ["dna", "pcr", "primer", "re", "map", "gel"] },
  { id: "m5", short: "M5", name: "RNA, gene expression & lac operon",
    src: "Week 12 L1 slides 2\u20135; Week 12 L2 slides 14\u201324 + review",
    topics: ["rna", "lac"] },
  { id: "m6", short: "M6", name: "RNAi & CRISPR genome editing",
    src: "Week 12 Lecture 1 slides 6\u201335 (not on the review)",
    topics: ["rnai", "crispr"] },
  { id: "m7", short: "M7", name: "Libraries, phage display, ELISA & chemical genetics",
    src: "Week 12 Lecture 2 slides 25\u201356; Lab 4 + review",
    topics: ["lib", "phage", "elisa", "chem"] },
  { id: "m8", short: "M8", name: "Epigenetics",
    src: "Week 13 Lecture 1 (38 slides) + review",
    topics: ["chrom", "meth"] },
  { id: "m9", short: "M9", name: "Metabolic engineering",
    src: "Review (6 strategies); W13 L1 slide 2 (trp feedback); W10 L2 slides 38\u201344 (flux)",
    topics: ["meteng"] }
];

BE.analysis = {
  inventory: [
    ["Review_for_Exam_3_with_Answers.pdf", "7 pages: 53 true statements, 9 multiple-choice, 9 'other' questions (primer design, restriction enzymes, gel, short answers, true/false). Says the exam is <b>not only multiple choice</b> and includes lecture and lab material that's <b>not on the review</b>.", "Priority 1"],
    ["Week 10 Lecture 2.pptx", "44 slides: <b>Enzymes</b>: catalysis and transition states, lock-and-key vs induced fit, reaction order with units, temperature, the Michaelis\u2013Menten derivation, K<sub>M</sub>, V<sub>max</sub>, Lineweaver\u2013Burk, k<sub>cat</sub> and catalytic efficiency, inhibition, feedback, allostery (ATCase, concerted vs sequential), chymotrypsin, zymogens, specificity, metabolic flux analysis, Seahorse OCR/ECAR", "Priority 2"],
    ["Week 11 Lecture 1.pptx", "37 slides: <b>Restriction enzymes, cloning and PCR</b>: DNA-binding dimers and palindromes, sticky vs blunt, 4\u207f site frequency, restriction mapping, plasmid anatomy, transformation, antibiotics, directional cloning, ligation, linkers, MCS, blue-white screening, BioBrick assembly, Taq and PCR, primer design and primer faults, Gibson assembly", "Priority 1"],
    ["Week 11 Lecture 2.pptx", "64 slides: <b>Receptors, ligands and antibodies</b>: binding sites, induced fit, k<sub>on</sub>/k<sub>off</sub> and K<sub>d</sub>, non-covalent forces, water and desolvation, entropy, specificity vs avidity, agonists and antagonists, GPCR / tyrosine kinase / ion channel receptors, antibody structure, CDRs, hinge, Fab and Fc, and the five isotypes in detail", "Priority 2"],
    ["Lab 4 \u2013 ELISA.pdf", "Protocol and 7 post-lab questions: antigen, epitope, primary and secondary antibody, HRP and TMB, blocking buffer, wash steps, positive and negative controls, triplicates.", "Priority 3"],
    ["Lab 5 \u2013 PCR.pdf", "Protocol and 5 post-lab questions: the three temperatures, why Taq, why two primers, how to get more product, sources of error. Uses 25 bp primers and 32 cycles.", "Priority 3"],
    ["Lab 6 \u2013 Molecular Cloning.pdf", "Protocol and 5 post-lab questions: heat-shock transformation, ampicillin vs tetracycline plates, a NotI + XbaI digest of the 8,577 bp pET22b-T5-sfGFP vector, and designing a digest to release the GFP gene. The plasmid map is included, so digest questions from it are fair game.", "Priority 2"],
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
    "<b>Resolved.</b> Weeks 10 and 11 and Labs 4\u20136 have now been supplied, so enzyme kinetics, receptors, antibodies, restriction enzymes, PCR, cloning and transformation are all built from your own lectures rather than from the review alone. The \u26d1 marks on those topics are gone.",
    "<b>Gel electrophoresis theory</b> has no lecture of its own in what you uploaded. Gels appear in the review problem and in both lab protocols, so the gel topic is built from those plus standard practice. The procedure and the arithmetic are solid; only the physical theory is thin.",
    "<b>qPCR</b> appears only as the one review statement. There is no lecture slide on it, so that topic is only as deep as the statement itself.",
    "<b>Week 13 Lecture 2</b> (if one exists) wasn't uploaded.",
    "Several slides are figure-only (e.g. W10L2 slides 4\u20135, 15\u201316, 41, 43; W11L1 slides 4, 8, 18, 20; W12L1 slides 4, 14, 15, 30; W12L2 slides 36\u201339, 43, 45\u201347; W13L1 slides 5\u20137, 12, 25, 32, 35, 36). I read all of them visually; anything important from them is included, including the enzyme-site table on W11L1 slide 4 and the restriction-mapping worked example on slide 8.",
    "<b>Seven topics have no review item at all</b>: metabolic flux, receptor types, transformation, DNA polarity, RNAi, CRISPR and DNA libraries. The review sheet says in its own opening that lecture and lab material not on the handout will appear, so these are the blind spots, not the safe ground."
  ],
  conflicts: [
    ["Nucleosome wording (review)", "'…2 copies of the 4 different histone protein cores (2x4 so a single histone is an octomer)'", "The <b>histone core</b> (the protein spool of one nucleosome) is the octamer: 2 each of H2A, H2B, H3, H4. Each individual histone is one protein. Answer 'octamer' for the core."],
    ["qPCR (review)", "'Quantitative PCR uses fluorescently labeled primers…'", "Accept it on the exam. Helpful context: most qPCR uses a DNA-binding dye (SYBR Green) or a labeled probe (TaqMan); some formats do use labeled primers. The key idea is fluorescence measured every cycle: an earlier threshold cycle (Ct) means more starting template."],
    ["Michaelis constant meaning (review MC)", "Answer D: 'a measure of how tightly the substrate is bound'", "Best answer among the choices. Strictly, Km = (k₋₁ + k₂)/k₁ equals the dissociation constant only when k₂ ≪ k₋₁. Lower Km = higher apparent affinity. Both ideas are on the review, so know both."],
    ["2 kb fragment (review)", "Answer: PstI and BamHI", "Correct if the map is a segment inside a larger molecule: PstI releases the right end and BamHI the left, giving 2,000 bp (BamHI→PstI) plus 2,700 bp. If the drawn DNA ends at the PstI sites, BamHI alone would also give 2,000 + 2,700. Follow the professor's two-enzyme logic."],
    ["Lac operon with glucose + lactose", "Review: 'little to no β-galactosidase'. Slide 22: 'very low expression'", "Consistent. Without CAP, RNA polymerase binds weakly, so a trickle of expression. Say 'very low/little'."],
    ["Bacterial replication time (W12L2 slide 3)", "'~3 million bp at ~1000 bp/s → ~40 min'", "Fine as an estimate (two forks from one ori → ~25 min of pure synthesis; real E. coli takes ~40 min). Know the logic: one ori is enough for a small genome; humans need ~10,000 origins."]
  ],
  // [yield, what, moduleId, topicId, why]
  priorities: [
    ["A", "PCR primer design & reverse complements", "m4", "primer", "A review problem and an in-class exercise. A skill, not memorisation, and the easiest full marks on the paper"],
    ["A", "Restriction enzymes: sites, sticky vs blunt, finding a cutter", "m4", "re", "Three review problems, plus the enzyme-site table on W11L1 slide 4"],
    ["A", "Plasmid digests \u2192 gel bands", "m4", "gel", "The review's last question, plus Lab 6's own digest. Pure arithmetic once you know circle n, line n+1"],
    ["A", "Michaelis\u2013Menten, K<sub>M</sub>/V<sub>max</sub>, order of kinetics", "m1", "mm", "5 of the 9 review MCs, now backed by the full Week 10 lecture"],
    ["A", "Inhibition & allosteric regulation", "m1", "inh", "3 review MCs, plus feedback inhibition opening Week 13"],
    ["A", "Lac operon & inducible expression", "m5", "lac", "The 4-scenario table is written out in full on the review"],
    ["A", "Vectors: cloning / expression / shuttle, MCS, directional cloning, blue-white", "m3", "vec", "Five review statements, the most of any topic"],
    ["A", "Epigenetics: histones, HAT/HDAC, eu/heterochromatin, CpG methylation", "m8", "chrom", "Ten review statements and a full 38-slide lecture"],
    ["A", "Receptor binding forces, water & specificity", "m2", "forces", "Six review statements from eight slides, the densest hit rate on the sheet"],
    ["B", "Antibodies: classes, V/C regions, CDRs, Fab/Fc", "m2", "ab", "Four review statements; links to ELISA and phage display"],
    ["B", "Phage display, M13, panning", "m7", "phage", "Three review statements and 16 slides; p3/p8 numbers are directly askable"],
    ["B", "ELISA", "m7", "elisa", "A one-word review true/false, plus the whole of Lab 4"],
    ["B", "Chemical genetics: forward vs reverse", "m7", "chem", "Three review statements and a guaranteed swap trap"],
    ["B", "Metabolic engineering: the 6 strategies", "m9", "meteng", "A short-answer list. All or nothing, so bank it early"],
    ["B", "Transcription, kinds of RNA, Shine\u2013Dalgarno", "m5", "rna", "Two review short answers that are free marks"],
    ["B", "Transformation & antibiotic selection", "m3", "xform", "Lab 6 post-lab question 1. Lab material is explicitly on the exam"],
    ["B", "RNAi: siRNA vs miRNA", "m6", "rnai", "Not on the review, but 19 lecture slides. The review warns about exactly this"],
    ["B", "CRISPR/Cas9, PAM, NHEJ vs HDR, dCas9", "m6", "crispr", "Not on the review; 11 lecture slides"],
    ["C", "Receptor families: GPCR, kinase-linked, ion channel", "m2", "rtypes", "17 slides, no review coverage"],
    ["C", "DNA replication enzymes & mutation levels", "m3", "rep", "Two review statements; foundational"],
    ["C", "cDNA libraries, oligo(dT), reverse transcriptase", "m7", "lib", "Lecture only; feeds the expression and phage questions"],
    ["C", "Metabolic flux analysis, OCR/ECAR", "m1", "flux", "Lecture only, closes the enzymes lecture"]
  ]
};

/* ------------------------------------------------------- STUDY PLAN */
// Sessions are ordered; the dashboard spreads them over the days left.
BE.sessions = [
  { n: 1, title: "Diagnostic + the DNA toolkit", mins: 150, blocks: [
    ["20 min", "Diagnostic: Mock Exam A, first 20 questions. Do not study first; this is a baseline, not a test."],
    ["40 min", "Study: DNA polarity \u2192 Restriction enzymes \u2192 Mapping arithmetic. Say every Active Recall prompt out loud."],
    ["10 min", "Break"],
    ["50 min", "Problems: reverse complement \u00d75, sticky vs blunt \u00d75, which enzyme cuts \u00d75."],
    ["30 min", "Review tab, statements 16\u201331 (vectors, cloning, blue-white). Answer before revealing."]
  ]},
  { n: 2, title: "PCR, primers, digests and gels", mins: 150, blocks: [
    ["10 min", "Spaced recall: yesterday's hard flashcards only."],
    ["35 min", "Study: PCR \u2192 Primer design \u2192 Gels. Lab 5 and Lab 6 protocols alongside."],
    ["45 min", "Problems: primer design \u00d74 at mixed lengths, linear maps \u00d73, plasmid gels \u00d73."],
    ["10 min", "Break"],
    ["30 min", "Redo all four review problems cold: the 13-nt primers, which enzyme cuts, the 2 kb fragment, the four-lane gel."],
    ["20 min", "Practice quiz: M3 + M4, levels 2\u20134."]
  ]},
  { n: 3, title: "Enzyme kinetics and binding", mins: 150, blocks: [
    ["10 min", "Spaced recall: 5 mixed primer and digest problems."],
    ["45 min", "Study: Enzymes \u2192 Reaction order \u2192 Michaelis\u2013Menten \u2192 Inhibition \u2192 Allostery. Sketch every graph as you go."],
    ["20 min", "Problems: kinetics \u00d76. Write the K<sub>M</sub> expression from memory before you start."],
    ["10 min", "Break"],
    ["40 min", "Study: Receptors \u2192 Binding forces \u2192 Antibodies. Then review statements 1\u201315 and all 9 MCs."],
    ["25 min", "Practice: M1 + M2."]
  ]},
  { n: 4, title: "Gene expression, lac operon, RNAi, CRISPR", mins: 150, blocks: [
    ["10 min", "Spaced recall: draw the four kinetics curves from memory and label what each inhibitor changes."],
    ["40 min", "Study: RNA and transcription \u2192 Lac operon. Fill the four-row table from memory twice."],
    ["40 min", "Study: RNAi \u2192 CRISPR. Neither is on the review, and the review warns about exactly that."],
    ["10 min", "Break"],
    ["30 min", "Practice: M5 + M6."],
    ["20 min", "Write out the six metabolic engineering strategies three times."]
  ]},
  { n: 5, title: "Libraries, phage, ELISA, chemical genetics, epigenetics", mins: 165, blocks: [
    ["10 min", "Spaced recall: lac table, then siRNA vs miRNA."],
    ["40 min", "Study: cDNA libraries \u2192 Phage display \u2192 ELISA (with the Lab 4 protocol) \u2192 Chemical genetics."],
    ["45 min", "Study: Chromatin and histones \u2192 DNA methylation. Draw the HAT / HDAC / MBD chain on one page."],
    ["10 min", "Break"],
    ["20 min", "Study: Metabolic engineering. The six strategies, written out, no notes."],
    ["40 min", "Review tab: statements 32\u201353 and every 'other' question."]
  ]},
  { n: 6, title: "Mock Exam A, then fix what broke", mins: 150, blocks: [
    ["45 min", "Mock Exam A, timed, no notes."],
    ["10 min", "Break"],
    ["50 min", "Weak areas tab: re-study your two worst topics, then retry every question you missed."],
    ["30 min", "Problems: whichever generator you scored lowest on, five more."],
    ["15 min", "Tag every error in the log with why you missed it."]
  ]},
  { n: 7, title: "Mock Exam B and the cram packet", mins: 140, blocks: [
    ["45 min", "Mock Exam B, timed."],
    ["30 min", "Error log: read the explanations for the misses only."],
    ["40 min", "Cram packet top to bottom. Cover each table and recite it before reading."],
    ["15 min", "Lab recap: the three post-lab answers most likely to appear \u2014 which plate grows, which fragment has AmpR, why two primers."],
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
    "Temperature optimum: the rate rises with T until <b>denaturation</b> sets in.",
    "Lineweaver\u2013Burk: 1/v vs 1/[S], slope K<sub>M</sub>/V<sub>max</sub>, y-intercept 1/V<sub>max</sub>. k<sub>cat</sub> = turnover number; k<sub>cat</sub>/K<sub>M</sub> = catalytic efficiency, capped by diffusion at ~10\u2078\u201310\u2079 M\u207b\u00b9s\u207b\u00b9.",
    "R = <b>R</b>elaxed = active; T = tight = inactive. Activator binds R, inhibitor binds T. Zymogen = inactive precursor activated by cleavage."
  ]},
  { h: "2 · Receptors & antibodies", items: [
    "Ligand binds a cleft → intermolecular (non-covalent) bonds → <b>induced fit</b> → domino effect = <b>signal transduction</b>. Binding is reversible.",
    "Non-covalent bonds: individually weak, collectively strong (H-bonds, ionic, van der Waals/induced dipole, hydrophobic).",
    "Hydrophobic interface: releasing ordered water → favorable <b>entropy</b>. Solvation/desolvation regulates affinity. Water can bridge H-bonds.",
    "Specificity prevents false positives (sensors), background (imaging), side effects (drugs).",
    "Antibodies = immunoglobulins: IgG, IgM, IgA, IgD, IgE. 2 heavy + 2 light chains. Antigen binding is set by the <b>variable region</b> sequence; variability is concentrated in the <b>CDRs</b>. Constant (Fc) region recruits cells.",
    "ELISA = enzyme-linked immuno<b>sorbent</b> assay (not 'immunosuppressant').",
    "Three receptor families: <b>GPCR</b> (G-protein binds GTP and splits \u2192 second messenger, e.g. cAMP \u2192 PKA); <b>tyrosine kinase</b> (ligand \u2192 <b>dimerisation</b> \u2192 each half phosphorylates the other); <b>ion channel</b> (TM2 segments rotate to open the pore).",
    "<b>GAMED</b>: IgG (most abundant, only one crossing the placenta), IgM (pentamer, valency 10, best complement activator), IgA (most made per day, secretions, secretory component), IgD (on naive B cells, function unknown), IgE (rarest, mast cells, allergy). Hinge = cysteine (disulfides) + proline (flexibility); papain cuts it into Fab and Fc."
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
  ]},
  { h: "11 \u00b7 The three labs", items: [
    "<b>Lab 4 ELISA:</b> coat \u2192 <b>block</b> (stops non-specific sticking) \u2192 wash \u00d72 \u2192 primary + secondary antibody \u2192 wash \u00d73 \u2192 TMB. Blue = positive. The secondary carries <b>HRP</b>; the enzyme is what amplifies the signal.",
    "<b>Why both controls:</b> without a positive control a colourless well is ambiguous; without a negative control you cannot tell if everything would go blue anyway. Triplicates test your pipetting, not the patient.",
    "<b>Lab 5 PCR:</b> 94\u201396 \u00b0C denature, 45\u201365 \u00b0C anneal (55 used), 72 \u00b0C extend; 32 cycles; 72 \u00b0C hold at the end finishes partial strands. More product = <b>more cycles</b>. Two primers are needed because the strands run antiparallel.",
    "<b>Lab 6 transformation:</b> ice \u2192 <b>42 \u00b0C for 45 s</b> \u2192 ice \u2192 LB at 37 \u00b0C for 30 min (to express resistance) \u2192 plate. Grows on <b>ampicillin only</b>; the plasmid gives no tetracycline resistance. AmpR makes <b>beta-lactamase</b>; ampicillin blocks <b>cell wall</b> synthesis.",
    "<b>Lab 6 digest:</b> pET22b is 8,577 bp. NotI (8407) + XbaI (5159) \u2192 <b>3,248 and 5,329 bp</b>. AmpR sits near 900, inside the arc from 8407 past zero to 5159, so it travels with the <b>larger</b> fragment. To release the whole sfGFP gene (~5330\u20135990), cut with <b>XbaI + SacI</b> \u2192 848 bp.",
    "<b>Ethidium bromide</b> is highly carcinogenic: never handle the gel. Do not pierce the bottom of a well."
  ] }
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
  "I can list the 6 metabolic-engineering strategies",
  "I can state what HAT and HDAC each do, to the charge, the chromatin and the gene",
  "I can say which Lab 6 plate grows colonies and why, and which fragment carries AmpR",
  "I can give the three PCR temperatures and say why Taq is used",
  "I can contrast forward and reverse chemical genetics without hesitating",
  "I know the three receptor families and what opens in each"
];
