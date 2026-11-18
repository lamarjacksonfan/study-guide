// Practice question bank (set "P") and exam sets (C1, C2, MA, MB).
// Q(id, set, module, topic, level, stem, options, answerIdx|[idxs], why, whyWrong[], concept, trap)
// whyWrong is aligned with options; the entry for a correct option is "".
window.BE = window.BE || {};
BE.questions = BE.questions || [];
BE.Q = function (id, set, m, t, lvl, q, o, a, why, w, c, trap) {
  BE.questions.push({ id: id, set: set, m: m, t: t, lvl: lvl, q: q, o: o,
    a: Array.isArray(a) ? a : [a], why: why, w: w, c: c, trap: trap || "" });
};

(function (Q) {
// ---------------------------------------------------------------- M1 enzymes
Q("p1", "P", "m1", "order", 2, "An enzyme with K<sub>M</sub> = 40 µM is assayed at [S] = 2 µM. What kinetics will it show?",
  ["Zero order", "First order", "Second order", "It will denature"], 1,
  "[S] is far below K<sub>M</sub>, so most enzyme is free and the rate rises in proportion to substrate. That is first order.",
  ["Zero order needs saturation, which happens far ABOVE K<sub>M</sub>.", "",
   "Second order requires the rate to depend on two concentrations or on one squared.",
   "Nothing here raises temperature, so denaturation is irrelevant."],
  "Reaction order from [S] vs Km", "This is half of a matched pair with the saturation question. Check which side of K<sub>M</sub> you are on before answering.");
Q("p2", "P", "m1", "order", 2, "An enzyme is saturated with substrate. Which statement is correct?",
  ["It shows zero-order kinetics and v ≈ V<sub>max</sub>", "It shows first-order kinetics",
   "The rate doubles if substrate doubles", "K<sub>M</sub> has been exceeded so the enzyme stops"], 0,
  "Every active site is occupied, so adding more substrate cannot speed anything up. The rate is constant: zero order, at approximately V<sub>max</sub>.",
  ["", "First order is the LOW substrate regime.",
   "That is first-order behaviour, the opposite of saturation.",
   "Exceeding K<sub>M</sub> speeds an enzyme up toward V<sub>max</sub>; it does not stop it."],
  "Saturation and zero order", "Zero order does not mean zero rate. It means the rate is independent of concentration.");
Q("p3", "P", "m1", "mm", 1, "Which expression is K<sub>M</sub>?",
  ["(k₁ + k₂) / k₋₁", "(k₋₁ + k₂) / k₁", "(k₁ + k₋₁) / k₂", "k₋₁ / k₁"], 1,
  "K<sub>M</sub> = (k₋₁ + k₂)/k₁. The numerator is the two ways ES is lost — back to E+S (k₋₁) or forward to product (k₂) — over the rate it forms (k₁).",
  ["The subscripts are inverted; k₋₁ belongs on top with k₂.", "",
   "k₂ belongs in the numerator, not the denominator.",
   "That is the simple dissociation constant, which equals K<sub>M</sub> only when k₂ is negligible."],
  "Km expression", "This is review MC 6 almost verbatim. Memorise it as written.");
Q("p4", "P", "m1", "mm", 3, "V<sub>max</sub> is 80 µM/min and K<sub>M</sub> is 20 µM. What is v₀ at [S] = 20 µM?",
  ["20 µM/min", "40 µM/min", "60 µM/min", "80 µM/min"], 1,
  "When [S] = K<sub>M</sub> the equation reduces to V<sub>max</sub>/2, so v₀ = 40 µM/min. This is the definition of K<sub>M</sub>.",
  ["That would be a quarter of V<sub>max</sub>.", "",
   "That is three quarters, which would need [S] = 3K<sub>M</sub>.",
   "V<sub>max</sub> is only approached asymptotically, never reached at a finite [S]."],
  "Km as half-Vmax point", "Recognising [S] = K<sub>M</sub> saves you the arithmetic entirely.");
Q("p5", "P", "m1", "inh", 2, "A competitive inhibitor is added to an enzyme assay. What happens?",
  ["K<sub>M</sub> increases, V<sub>max</sub> unchanged", "V<sub>max</sub> decreases, K<sub>M</sub> unchanged",
   "Both increase", "Both decrease"], 0,
  "A competitive inhibitor occupies the active site but can be out-competed by substrate, so you still reach V<sub>max</sub> — you just need more substrate to get to half speed, which raises K<sub>M</sub>.",
  ["", "That is noncompetitive inhibition.",
   "V<sub>max</sub> never rises with an inhibitor present.",
   "K<sub>M</sub> rises, it does not fall."],
  "Competitive inhibition", "Competitive raises K<sub>M</sub>; noncompetitive lowers V<sub>max</sub>. Swapping these is the most common error in this module.");
Q("p6", "P", "m1", "inh", 2, "Which best describes an irreversible inhibitor?",
  ["Binds only at low temperatures", "Affects only serine side chains",
   "Reacts with the enzyme to give an inactive protein from which the original enzyme cannot be regenerated",
   "Binds by the lock-and-key mechanism"], 2,
  "Irreversible inhibition involves forming or breaking covalent bonds, and the defining consequence is that the original enzyme cannot be recovered.",
  ["Temperature is not what defines reversibility.",
   "Some irreversible inhibitors hit serine, but that is not the definition.", "",
   "Lock-and-key describes ordinary substrate binding, not inhibition."],
  "Irreversible inhibition", "Review MC 8. The key phrase is 'cannot be regenerated'.");
Q("p7", "P", "m1", "allo", 2, "A plot of rate against substrate concentration for aspartate transcarbamoylase is",
  ["Sigmoidal, characteristic of an allosteric enzyme", "Hyperbolic, characteristic of a nonallosteric enzyme",
   "Linear, showing zero order throughout", "Showing noncooperative kinetics"], 0,
  "ATCase is the lecture's allosteric example. Allosteric, cooperative enzymes give a sigmoid curve; CTP slows it and ATP speeds it up.",
  ["", "Hyperbolic is the NON-allosteric Michaelis-Menten shape.",
   "A linear plot would mean the rate never saturates.",
   "ATCase is cooperative, which is exactly what produces the sigmoid."],
  "Allosteric kinetics", "Review MC 2. Sigmoid means cooperative subunits; hyperbolic means a plain MM enzyme.");
Q("p8", "P", "m1", "allo", 3, "In the concerted model of allostery, an allosteric activator works by",
  ["Binding the R form and shifting the equilibrium toward R",
   "Binding the T form and shifting the equilibrium toward T",
   "Covalently modifying the active site", "Raising V<sub>max</sub> without binding the enzyme"], 0,
  "An activator binds and stabilises the relaxed, active R form, so more of the population sits in R and substrate binds more readily.",
  ["", "That is what an allosteric INHIBITOR does.",
   "Allosteric effectors bind non-covalently at a regulatory site.",
   "An effector must bind the enzyme to have any effect."],
  "Allosteric effectors", "R = Relaxed = Ready = active. T = Tight = inactive.");
Q("p9", "P", "m1", "enz", 1, "Enzyme activity has an optimum temperature because",
  ["Component amino acids have varying melting points", "Reaction rates are thermodynamically controlled",
   "Side chains of essential residues degrade chemically at higher temperatures",
   "Raising temperature speeds the reaction until protein denaturation sets in"], 3,
  "Rate climbs with temperature as it does for any reaction, until the protein unfolds. An unfolded protein is not a catalyst, so activity collapses past the optimum.",
  ["Amino acids within a protein do not have individual melting points in this sense.",
   "Kinetics, not thermodynamics, governs the rate.",
   "The fold fails before the side chains chemically degrade.", ""],
  "Temperature optimum", "Review MC 1. The answer is denaturation, not chemical degradation of residues.");
})(BE.Q);

(function (Q) {
// ------------------------------------------------- M2 receptors and antibodies
Q("p10", "P", "m2", "rec", 2, "Which statement about ligand binding to a receptor is FALSE?",
  ["Binding involves intermolecular bonds and causes an induced fit",
   "The ligand must enter the cell to deliver its signal",
   "A shape change can trigger signal transduction",
   "The ligand departs the receptor unchanged"], 1,
  "The ligand stays outside. The receptor's shape change carries the message inward — that is the whole point of signal transduction.",
  ["True: non-covalent bonds, then induced fit.", "",
   "True: this is the 'domino' effect the review describes.",
   "True: binding is reversible and the ligand is not permanently bound."],
  "Receptor signalling", "Watch for NOT and FALSE wording. Three options are lifted from the review's true statements; only one is flipped.");
Q("p11", "P", "m2", "forces", 3, "A hydrophobic binding interface forms. Why is releasing water from that interface favourable?",
  ["It increases enthalpy by forming new covalent bonds",
   "Ordered water is released, which is entropically favourable",
   "Water is a competitive inhibitor of binding",
   "It lowers the temperature at the interface"], 1,
  "Non-polar surfaces force nearby water into an ordered, low-entropy arrangement with unsatisfied hydrogen bonds. Releasing it raises entropy, which also offsets the entropy lost when the two partners lose freedom of movement.",
  ["No covalent bonds form in non-covalent recognition.", "",
   "Water is a solvent here, not an inhibitor occupying a site.",
   "Temperature is not the mechanism."],
  "Hydrophobic effect and entropy", "Review statement 9 is specifically about ENTROPY. An enthalpy-only answer is the trap.");
Q("p12", "P", "m2", "forces", 2, "Poor binding specificity causes all of the following EXCEPT",
  ["False positives for sensors", "High background for imaging agents",
   "Side effects for drugs", "Loss of the receptor's ability to change shape"], 3,
  "The review lists exactly three consequences of non-specific interaction: false positives, high background and side effects. Induced fit is unrelated to specificity failures.",
  ["Listed in the review.", "Listed in the review.", "Listed in the review.", ""],
  "Why specificity matters", "Learn the three consequences as a set. The odd one out is always something structural.");
Q("p13", "P", "m2", "ab", 2, "The ability of an immunoglobulin to bind a particular antigen is determined by",
  ["The amino acid sequence of the variable region", "The constant region sequence",
   "The number of disulfide bonds", "The length of the hinge region"], 0,
  "Antigen specificity comes from the variable region, with sequence variability concentrated in the three CDRs of each chain.",
  ["", "The constant region handles effector functions, not antigen recognition.",
   "Disulfides hold the structure together but do not choose the antigen.",
   "The hinge gives flexibility between the arms; it does not set specificity."],
  "Antibody variable region", "Constant-for-variable is the standard swap on this statement.");
Q("p14", "P", "m2", "ab", 3, "Papain cleaves an antibody at the hinge. What results, and why is the hinge cleavable?",
  ["Fab and Fc fragments; the hinge is exposed and not folded globularly, because proline prevents it",
   "Heavy and light chains; the hinge holds the only disulfide bonds",
   "Two identical halves; the hinge is the axis of symmetry",
   "Variable and constant domains; the hinge separates them"], 0,
  "The hinge is rich in proline, which prevents globular folding and leaves it exposed and flexible, so proteases can reach it. Cutting there gives the antigen-binding Fab arms and the Fc tail.",
  ["", "Light chains stay attached to the Fab fragments.",
   "Papain gives Fab and Fc, not two identical halves.",
   "Variable and constant domains sit within chains, not either side of the hinge."],
  "Fab/Fc and the hinge", "Remember the two hinge residues and their jobs: cysteine for disulfides, proline for flexibility.");
Q("p15", "P", "m2", "iso", 2, "Which antibody class crosses the placenta?",
  ["IgM", "IgG", "IgA", "IgE"], 1,
  "IgG is the only class with transplacental transfer, and it is also the most abundant in serum.",
  ["IgM is the best classical complement activator but does not cross the placenta.", "",
   "IgA is the most produced per day and works at secretions.",
   "IgE sits on mast cells and is tied to allergy."],
  "Antibody classes", "GAMED gives you the five. Then attach one signature fact to each.");
Q("p16", "P", "m2", "rtypes", 3, "Why must an EGF receptor dimerise before it signals?",
  ["Each half phosphorylates tyrosines on the other half, which requires two receptors together",
   "A single receptor cannot bind the ligand", "Dimerisation is needed to cross the membrane",
   "Only a dimer can bind GTP"], 0,
  "The EGF receptor is both receptor and kinase. Ligand binding causes dimerisation, which opens the kinase active sites, and the active site on one half phosphorylates tyrosines on the other. Those phosphorylated patches then recruit downstream proteins.",
  ["", "A monomer binds EGF perfectly well; it just cannot signal alone.",
   "The receptor already spans the membrane as a monomer.",
   "GTP binding is a G-protein feature, not a tyrosine kinase one."],
  "Tyrosine kinase receptors", "Not on the review sheet, which is precisely why it is worth knowing.");
})(BE.Q);

(function (Q) {
// ------------------------------------------------------ M3 vectors and cloning
Q("p17", "P", "m3", "vec", 2, "An expression vector must contain which two regions?",
  ["An origin and a selectable marker", "A promoter and a terminator",
   "A multiple cloning site and lacZ", "Two different restriction sites"], 1,
  "An expression vector exists to make mRNA, so it needs a region to initiate transcription (promoter) and a region to terminate it (terminator). In E. coli it also needs a ribosome binding site to make protein.",
  ["Every plasmid needs these; they do not make it an EXPRESSION vector.", "",
   "That describes a cloning vector set up for blue-white screening.",
   "Two different sites give directional cloning, which is a separate idea."],
  "Expression vectors", "Promoter starts, terminator stops. Swapping those two words is the likeliest trap here.");
Q("p18", "P", "m3", "clone", 2, "After blue-white screening, which colonies carry your insert?",
  ["Blue colonies", "White colonies", "Both colours equally", "Neither; colour reports antibiotic resistance"], 1,
  "The MCS sits inside lacZ. An insert disrupts lacZ, so no beta-galactosidase is made, X-Gal is not cleaved and the colony stays white. Blue means the vector re-closed with no insert.",
  ["Blue means intact lacZ, so no insert.", "",
   "The whole point is that the two colours separate recombinants from non-recombinants.",
   "Colour reports lacZ disruption; the antibiotic does the separate job of selection."],
  "Blue-white screening", "White is right. This is the most commonly reversed fact in the module.");
Q("p19", "P", "m3", "clone", 3, "Why does directional cloning require two DIFFERENT restriction enzymes?",
  ["It doubles the cutting efficiency",
   "Two different enzymes give two non-matching ends, so the insert can only ligate in one orientation",
   "One enzyme cannot cut a circular plasmid", "It prevents the vector from re-closing on itself"], 1,
  "Cutting vector and insert with the same two different enzymes gives each end a distinct overhang. Only one orientation allows both ends to pair, so the insert goes in the right way round.",
  ["Efficiency is not the issue; orientation is.", "",
   "A single enzyme cuts a plasmid perfectly well.",
   "It does help with that, but the defining purpose is controlling direction."],
  "Directional cloning", "Two cuts with the SAME enzyme give identical ends and therefore random orientation.");
Q("p20", "P", "m3", "xform", 2, "In Lab 6 the plasmid carried ampicillin resistance. Where do colonies grow?",
  ["On the tetracycline plate only", "On the ampicillin plate only",
   "On both plates", "On neither plate"], 1,
  "The plasmid's resistance gene makes beta-lactamase, which breaks down ampicillin. It confers nothing against tetracycline, so those cells are killed.",
  ["Nothing on the plasmid protects against tetracycline.", "",
   "Resistance is specific to the gene carried.",
   "Transformed cells survive ampicillin, so you do get colonies."],
  "Antibiotic selection", "Lab 6 post-lab question 1. Match the resistance gene to the antibiotic on the plate.");
Q("p21", "P", "m3", "xform", 3, "Why are transformed cells recovered in LB at 37 °C for 30 minutes before plating on antibiotic?",
  ["To let the cells repair their membranes only",
   "To give them time to express the resistance gene before meeting the antibiotic",
   "To let the plasmid integrate into the chromosome", "To dilute the sample"], 1,
  "Straight after heat shock the cell has the plasmid but no beta-lactamase yet. The recovery period lets it transcribe and translate the resistance gene so it can survive selection.",
  ["Membrane recovery happens, but expressing resistance is the reason for the timing.", "",
   "The plasmid replicates independently; integration is not required.",
   "Dilution is not the purpose."],
  "Transformation recovery step", "A likely 'why this step' question, since the protocol seems skippable until you think it through.");
Q("p22", "P", "m3", "rep", 1, "Which list contains ONLY chromosome-level mutations?",
  ["Deletion, inversion, translocation, duplication", "Substitution, insertion, deletion, frameshift",
   "Point mutation, frameshift, translocation", "Duplication, substitution, inversion"], 0,
  "The review's chromosome-level list is exactly these four. Substitution and frameshift belong to the gene level.",
  ["", "These are all gene-level.",
   "Point mutation and frameshift are gene-level.",
   "Substitution is gene-level, so this list is mixed."],
  "Mutation levels", "Deletion and inversion appear on BOTH lists, which is what makes the mixed options tempting.");
Q("p23", "P", "m3", "rep", 2, "Place these replication steps in order: ligase seals; primase lays an RNA primer; helicase unwinds; RNase H removes the primer.",
  ["Helicase, primase, RNase H, ligase", "Primase, helicase, ligase, RNase H",
   "Helicase, RNase H, primase, ligase", "Primase, RNase H, helicase, ligase"], 0,
  "Helicase opens the fork, primase lays an RNA primer, polymerase extends, RNase H removes the primer, polymerase fills the gap and ligase seals the backbone.",
  ["", "You cannot prime a duplex that has not been unwound.",
   "The primer must be laid before it can be removed.",
   "Same problem: removal cannot precede synthesis."],
  "Replication enzymes", "Anchor on the logic: open it, start it, extend it, tidy it, seal it.");
})(BE.Q);

(function (Q) {
// --------------------------------------------------- M4 PCR, digests and gels
Q("p24", "P", "m4", "primer", 3, "A target region begins 5'-CGTTACGGATCC...-3'. What are the first 8 nucleotides of the forward primer?",
  ["5'-CGTTACGG-3'", "5'-GGCATTGC-3'", "5'-GCAATGCC-3'", "5'-CCTAGGCA-3'"], 0,
  "The forward primer is simply the first N nucleotides of the target, copied exactly as written on the top strand. No transformation of any kind.",
  ["", "This is the reverse complement, which is what the REVERSE primer needs.",
   "This is the complement without reversing.", "This is unrelated to the start of the target."],
  "Forward primer rule", "People over-think the forward primer and reverse-complement it unnecessarily. Copy it as written.");
Q("p25", "P", "m4", "primer", 3, "A target ends ...5'-ATGCCATTG-3'. What is the reverse primer for the last 9 nucleotides?",
  ["5'-ATGCCATTG-3'", "5'-CAATGGCAT-3'", "5'-TACGGTAAC-3'", "5'-GTTACCGTA-3'"], 1,
  "Complement ATGCCATTG to get TACGGTAAC, then reverse it to get CAATGGCAT. Both steps are needed.",
  ["That is the top strand copied straight, the single most common error.", "",
   "That is the complement without reversing.", "That is the reverse without complementing."],
  "Reverse primer rule", "Flip and swap. Each distractor here is one of the three ways to do it half-right.");
Q("p26", "P", "m4", "re", 2, "Which cut site produces blunt ends?",
  ["G↓GATCC", "TGG↓CCA", "C↓CTAGG", "A↓AGCTT"], 1,
  "TGGCCA is cut dead centre, three bases either side, so both strands break level and the ends are blunt.",
  ["Cut after one base: a 4-base 5' overhang, sticky.", "",
   "Cut after one base: sticky.", "Cut after one base: sticky."],
  "Sticky vs blunt", "Review 'other' #3. Count the bases each side of the arrow; equal means blunt.");
Q("p27", "P", "m4", "re", 3, "Which enzyme cuts 5'-TACGATGACGAGCATGGATCCAGAGATACGG-3'?",
  ["BclI (TGATCA)", "BglII (AGATCT)", "BamHI (GGATCC)", "AvrII (CCTAGG)"], 2,
  "Scanning the strand, GGATCC appears once. BclI and BglII share the central GATC but differ at the outer bases, and neither full site is present.",
  ["TGATCA does not appear; only the central GATC is shared.", "AGATCT does not appear.", "",
   "CCTAGG does not appear."],
  "Finding a restriction site", "Review 'other' #6. The GATC-sharing enzymes are deliberately offered to catch partial reading.");
Q("p28", "P", "m4", "map", 2, "A circular plasmid is cut twice. How many fragments result?",
  ["One", "Two", "Three", "Four"], 1,
  "A circle has no free ends, so n cuts give n fragments. Two cuts give two pieces. On a linear molecule the same two cuts would give three.",
  ["One cut gives one linear fragment; two cuts give two.", "",
   "Three is the LINEAR answer for two cuts.", "Four would need four cuts on a circle."],
  "Circular vs linear fragment counting", "Line n+1, circle n. Say it before every digest question.");
Q("p29", "P", "m4", "map", 4, "A 5762 bp plasmid is cut by SspI at 724 and BamHI at 210. What bands appear?",
  ["514 and 5248", "724 and 5038", "934 and 4828", "One band at 5762"], 0,
  "724 − 210 = 514 for the fragment between the cuts, and 5762 − 514 = 5248 for the piece that wraps past zero. They sum to 5762, which is the check.",
  ["", "That would be the answer if one cut sat at position 0.",
   "That adds the positions rather than subtracting them.",
   "Two cuts give two bands, not one."],
  "Plasmid digest arithmetic", "This is a lane from the review's own gel question. Always verify your bands sum to the plasmid size.");
Q("p30", "P", "m4", "gel", 2, "On an agarose gel, which fragment travels furthest from the well?",
  ["The largest", "The smallest", "They travel equally", "Whichever is most GC-rich"], 1,
  "The gel is a mesh and DNA is pushed through it toward the positive electrode. Small fragments thread through easily and travel furthest; large ones are retarded.",
  ["Large fragments stay near the well.", "",
   "Separation by size is the entire purpose.",
   "Base composition does not determine migration in standard agarose electrophoresis."],
  "Gel migration", "Also know the direction: DNA is negative, so it runs toward the positive electrode.");
Q("p31", "P", "m4", "gel", 3, "A plasmid is cut with a single enzyme that has one site. What do you see on the gel?",
  ["No bands", "One band at the full plasmid length", "Two bands summing to the plasmid length",
   "A smear"], 1,
  "One cut converts the circle into a single linear molecule of the full length, so you get exactly one band at the plasmid size.",
  ["The DNA is still there and still stains.", "",
   "Two bands need two cuts on a circle.",
   "A smear means degraded DNA or a failed digest, not a clean single cut."],
  "Single-cut plasmid", "Both the SapI and SspI lanes in the review's gel are exactly this case.");
Q("p32", "P", "m4", "pcr", 2, "Why is Taq polymerase used for PCR?",
  ["It proofreads better than other polymerases", "It survives the ~94 °C denaturation step",
   "It works without primers", "It copies RNA as well as DNA"], 1,
  "Taq comes from Thermus aquaticus, a hot spring organism. It tolerates the denaturation temperature that would destroy an ordinary polymerase, and still extends at 72 °C.",
  ["Its proofreading is poor, roughly one error per kb.", "",
   "Every DNA polymerase needs a primer with a free 3'-OH.",
   "That describes reverse transcriptase."],
  "Taq polymerase", "Heat tolerance is the advantage; accuracy is the trade-off.");
Q("p33", "P", "m4", "pcr", 3, "Your PCR yields too little product. Which change increases the number of copies?",
  ["Raise the annealing temperature", "Increase the number of cycles",
   "Lower the extension temperature below 72 °C", "Use only the forward primer"], 1,
  "Each cycle doubles the product, so more cycles means more copies. This is Lab 5 post-lab question 4.",
  ["A higher annealing temperature makes primer binding harder, reducing yield.", "",
   "72 °C is Taq's optimum; lowering it slows synthesis.",
   "One primer gives linear amplification of one strand, not exponential."],
  "PCR cycle number", "Note why one primer fails: you need both to get exponential doubling.");
})(BE.Q);

(function (Q) {
// ------------------------------------- M5-M9 expression, editing, epigenetics
Q("p34", "P", "m5", "lac", 2, "Under which condition is the lac operon fully transcribed?",
  ["Glucose present, lactose absent", "Glucose present, lactose present",
   "Glucose absent, lactose absent", "Glucose absent, lactose present"], 3,
  "Two conditions must hold at once: lactose lifts the repressor off the operator, and CAP (active only without glucose) stabilises RNA polymerase on the promoter.",
  ["The repressor is on the operator, so transcription is blocked.",
   "The repressor is off, but without CAP the polymerase binds weakly: very low expression only.",
   "No lactose means the repressor stays bound.", ""],
  "lac operon logic", "Three of the four rows give little or no enzyme. Only no-glucose-plus-lactose gives real transcription.");
Q("p35", "P", "m5", "lac", 4, "Glucose and lactose are both present. What happens, and why?",
  ["Full transcription, because the repressor is off the operator",
   "Very low transcription, because the repressor is off but CAP is inactive",
   "No transcription at all, because the repressor stays bound",
   "No transcription, because lactose inhibits RNA polymerase"], 1,
  "Lactose removes the repressor, so polymerase can sit on the promoter, but CAP only works when glucose is absent. Without CAP the complex is unstable and you get a trickle. The review calls this 'little to no'; the lecture calls it 'very low'. Both describe the same thing.",
  ["Full transcription needs CAP, which glucose prevents.", "",
   "The repressor is lifted off by lactose.",
   "Lactose does not inhibit polymerase; it inactivates the repressor."],
  "CAP and catabolite repression", "This row is the one that distinguishes real understanding from memorising 'lac is off with glucose'.");
Q("p36", "P", "m5", "rna", 1, "The Shine-Dalgarno sequence is recognised by",
  ["RNA polymerase", "The ribosome", "DNA ligase", "The lac repressor"], 1,
  "Shine-Dalgarno is the ribosome binding site on the mRNA, read by 16S rRNA in the ribosome. RNA polymerase binds the promoter, which is on DNA.",
  ["This is the review's deliberately false statement.", "",
   "Ligase joins DNA backbones.", "The repressor binds the operator on DNA."],
  "Shine-Dalgarno", "Review true/false #5, where the printed statement is FALSE. Two different molecules, two different sequences.");
Q("p37", "P", "m6", "rnai", 3, "An siRNA matches its target mRNA perfectly. What happens, and what would a mismatch cause?",
  ["Perfect match cleaves the mRNA; a mismatch blocks translation instead",
   "Perfect match blocks translation; a mismatch cleaves",
   "Both cleave the mRNA", "Both merely block translation"], 0,
  "RISC cleaves only on perfect complementarity. A single base pair difference is enough to switch the outcome to translational blocking, which is typical of miRNA.",
  ["", "This is the right pair of outcomes, reversed.",
   "A mismatch prevents cleavage.", "A perfect match does cleave."],
  "siRNA vs miRNA outcome", "This distinction is the most likely RNAi exam question, and RNAi is not on the review at all.");
Q("p38", "P", "m6", "crispr", 3, "Cas9 cuts a gene and no donor template is supplied. What is the outcome?",
  ["Homology directed repair, giving a precise edit", "Non-homologous end joining, giving random indels",
   "The break is left unrepaired", "The cell reverts the cut exactly"], 1,
  "With no template the cell uses NHEJ, which inserts or deletes random nucleotides at the cut site. That usually disrupts the reading frame, which is how CRISPR knockouts are made.",
  ["HDR requires a donor with homology arms.", "",
   "Double-strand breaks are repaired, accurately or otherwise.",
   "NHEJ is error-prone; exact restoration is not the expected outcome."],
  "NHEJ vs HDR", "No template = NHEJ = knockout. With template = HDR = precise edit.");
Q("p39", "P", "m6", "crispr", 2, "What is dCas9 used for?",
  ["Making double-strand breaks more efficiently", "Binding DNA without cutting, to block or activate transcription",
   "Degrading mRNA", "Replacing the PAM requirement"], 1,
  "dCas9 is nuclease-dead. It still binds where the guide RNA directs it, so it can block transcription, carry an activator domain, or mark a locus for imaging.",
  ["dCas9 cannot cut at all.", "",
   "That is RNAi, a different system.", "dCas9 still requires a PAM to bind."],
  "dCas9", "If a question has dCas9 making a cut, that option is wrong by definition.");
Q("p40", "P", "m7", "phage", 2, "Which M13 coat protein carries the displayed peptide and mediates infection?",
  ["p8, about 2700 copies", "p3, about 5 copies", "p3, about 2700 copies", "p8, about 5 copies"], 1,
  "p3 is present at roughly 5 copies and handles infection through its F pilus and TolA receptor domains. Libraries are usually fused to gene 3. p8 is the protective coat at about 2700 copies.",
  ["p8 protects; it is not the infection protein.", "",
   "Right protein, wrong copy number.", "Right copy number, wrong protein."],
  "M13 coat proteins", "Both the function and the copy number are fair game, so learn them as a pair.");
Q("p41", "P", "m7", "phage", 3, "In a panning cycle, what happens immediately after mixing the phage library with the target?",
  ["Sequence the phage", "Wash away non-binders", "Amplify in E. coli", "Add TMB substrate"], 1,
  "The order is: bind, wash away non-binders, elute the binders, amplify them in E. coli, then repeat under harder conditions. Sequencing comes at the very end.",
  ["Sequencing is the final step, after enrichment.", "",
   "Amplification follows elution of the binders.",
   "TMB belongs to the confirmatory ELISA, not the panning cycle."],
  "Phage display panning", "The washing step is what creates selection pressure; amplification is what makes enrichment exponential.");
Q("p42", "P", "m7", "elisa", 1, "ELISA stands for",
  ["Enzyme-linked immunosuppressant assay", "Enzyme-linked immunosorbent assay",
   "Enzyme-labelled immunoselective assay", "Enzyme-linked immunoseparation assay"], 1,
  "Immunosorbent: the antigen is adsorbed onto the plate surface. The review's true/false item uses 'immunosuppresent' precisely to catch this.",
  ["This is the review's false version.", "", "Invented term.", "Invented term."],
  "ELISA terminology", "A one-word trap worth a whole mark.");
Q("p43", "P", "m7", "elisa", 3, "In Lab 4, why was blocking buffer added before the antibodies?",
  ["To wash away the antigen", "To occupy remaining surface so antibodies cannot stick non-specifically",
   "To provide substrate for the enzyme", "To keep the plate at the right temperature"], 1,
  "After the antigen coats the well, bare plastic remains. Blocking buffer covers it so later antibodies can only be retained by genuine binding, not by sticking to the plate.",
  ["The antigen needs to stay; that is what you are detecting.", "",
   "TMB is the substrate, added at the end.", "Temperature is not its role."],
  "ELISA blocking step", "Without blocking you get colour in every well, including the negatives.");
Q("p44", "P", "m7", "chem", 2, "A screen tests thousands of compounds for one that produces a phenotype, then identifies the protein hit. This is",
  ["Reverse chemical genetics, for target validation", "Forward chemical genetics, for target identification",
   "Classical genetics", "A phage display screen"], 1,
  "Starting from an observable phenotype and working back to the protein is forward chemical genetics, and its goal is target identification.",
  ["Reverse starts from a known protein.", "",
   "Classical genetics perturbs genes, not small molecules.",
   "Phage display screens for binding peptides, not for phenotypes in cells."],
  "Forward vs reverse chemical genetics", "Forward = phenotype first = identification. Reverse = protein first = validation.");
Q("p45", "P", "m8", "chrom", 2, "HDAC removes acetyl groups from histone tails. What is the consequence?",
  ["Positive charge restored, DNA held more tightly, transcription repressed",
   "Positive charge neutralised, DNA loosened, transcription activated",
   "DNA methylated at CpG sites", "Nucleosomes disassembled completely"], 0,
  "Removing acetyl groups restores the lysine positive charge, so the histones grip the negatively charged DNA more tightly. Chromatin condenses into heterochromatin and the gene is repressed.",
  ["", "That describes HAT, the opposite enzyme.",
   "That is DNMT's job, a separate mechanism.",
   "Chromatin condenses; nucleosomes are not destroyed."],
  "HAT vs HDAC", "HAT adds and activates; HDAC deacetylates and downregulates. Reversing them is the most likely epigenetics trap.");
Q("p46", "P", "m8", "meth", 3, "DNA methylation reduces transcription by which mechanisms?",
  ["Inhibiting transcription factor binding", "Recruiting MBD proteins that bring in HDACs",
   "Cutting the DNA backbone", "Preventing DNA replication entirely"], [0, 1],
  "Both are correct and the review states them together: methylation blocks transcription factors from binding AND recruits Methyl-CpG Binding Domain proteins, which recruit HDAC complexes to compact the chromatin.",
  ["", "", "Methylation adds a methyl group; it does not cleave DNA.",
   "Methylated DNA still replicates, and Dnmt1 copies the marks."],
  "DNA methylation mechanisms", "Select-all. An answer giving only one mechanism is incomplete on this review statement.");
Q("p47", "P", "m8", "meth", 2, "Where does DNA methylation occur in humans, and what is produced?",
  ["At CpG dinucleotides, producing 5-methylcytosine", "At AT-rich regions, producing methyladenine",
   "On the phosphate backbone", "At GC boxes, producing methylguanine"], 0,
  "Methylation targets the cytosine of CpG dinucleotides, giving 5-methylcytosine, typically on both strands. DNMT is the enzyme and SAM the methyl donor.",
  ["", "Methyladenine is a bacterial modification, not the human CpG system.",
   "The methyl goes on the base, not the backbone.", "It is cytosine that is methylated, not guanine."],
  "CpG methylation", "Know the enzyme (DNMT) and the donor (SAM) alongside the site.");
Q("p48", "P", "m9", "meteng", 3, "Which is NOT one of the six metabolic engineering strategies?",
  ["Remove genetic-level transcriptional controls", "Genetically block competing pathways",
   "Increase the host's growth temperature to speed all reactions",
   "Enhance transport of the toxic compound out of the cell"], 2,
  "The six are: remove transcriptional controls, remove allosteric controls, kinetically enhance rate-limiting enzymes, block competing pathways, enhance carbon commitment, and enhance export of the toxic product. Raising temperature is not among them.",
  ["Strategy 1.", "Strategy 4.", "", "Strategy 6."],
  "Six metabolic engineering strategies", "Write all six out from memory; the short-answer version gives no options to recognise.");
})(BE.Q);

// Held-out true/false bank, generated from the review statements by
// be3415/gen/gen_exam.js. Items that read FALSE have exactly one word or phrase
// swapped; the explanation names the swap. Never shown in Practice.
(function (Q) {
Q("x1", "MA", "m2", "rec", 2, "Receptors contain a binding site (hollow or cleft on the receptor surface) that is recognized by the chemical messenger (ligand)",
  ["True", "False"], 0,
  "TRUE. This is the review statement unchanged. The binding site is a hollow or cleft on the surface. Swap-trap: an active site does chemistry, a binding site does not.",
  ["", "This is the review statement word for word, so it is true as written."], "Receptors, ligands & induced fit", "");
Q("x2", "MA", "m2", "rec", 3, "Binding of the ligand involves intermolecular bonds and results in a rigid lock-and-key fit of the receptor protein",
  ["True", "False"], 1,
  "FALSE as written. The original statement says \"an induced fit\", not \"a rigid lock-and-key fit\": binding causes an induced fit.",
  ["Read it again: \"a rigid lock-and-key fit\" has been substituted for \"an induced fit\", so it is not true as written.", ""], "Receptors, ligands & induced fit", "");
Q("x3", "MA", "m2", "rec", 2, "Change in receptor shape can results in a ‘domino’ effect known as signal transduction, leading to a chemical signal being received inside the cell",
  ["True", "False"], 0,
  "TRUE. This is the review statement unchanged. Signal transduction is the downstream domino effect. The signal gets inside the cell; the ligand itself does not have to.",
  ["", "This is the review statement word for word, so it is true as written."], "Receptors, ligands & induced fit", "");
Q("x4", "MA", "m2", "rec", 3, "Chemical messengers (ligands) can bind a receptor on the outside of the cell and departs the receptor (that is to say it is permanently bound)",
  ["True", "False"], 1,
  "FALSE as written. The original statement says \"it is not permanently bound\", not \"it is permanently bound\": the ligand departs; binding is reversible.",
  ["Read it again: \"it is permanently bound\" has been substituted for \"it is not permanently bound\", so it is not true as written.", ""], "Receptors, ligands & induced fit", "");
Q("x5", "MA", "m2", "forces", 2, "Non-covalent interactions are individually regarded as weak and easy to break but collectively quite strong",
  ["True", "False"], 0,
  "TRUE. This is the review statement unchanged. Individually weak, collectively strong. Watch for a flipped version saying they are individually strong.",
  ["", "This is the review statement word for word, so it is true as written."], "Non-covalent forces, water & specificity", "");
Q("x6", "MA", "m2", "forces", 3, "Optimizing contact distance including surface complementarity allows maximizing of induced dipole – induced dipole attractive forces in hydrophilic regions",
  ["True", "False"], 1,
  "FALSE as written. The original statement says \"attractive forces in hydrophobic regions\", not \"attractive forces in hydrophilic regions\": these forces are maximised in HYDROPHOBIC regions.",
  ["Read it again: \"attractive forces in hydrophilic regions\" has been substituted for \"attractive forces in hydrophobic regions\", so it is not true as written.", ""], "Non-covalent forces, water & specificity", "");
Q("x7", "MA", "m2", "forces", 2, "In some cases a water molecule can serve as an H-bond bridge between otherwise “out-of-reach” hydrogen bonding interactions",
  ["True", "False"], 0,
  "TRUE. This is the review statement unchanged. Water can bridge an H-bond that would otherwise be out of reach. It is not always a spectator.",
  ["", "This is the review statement word for word, so it is true as written."], "Non-covalent forces, water & specificity", "");
Q("x8", "MA", "m2", "forces", 3, "Solvation and desolvation have no measurable effect on the binding affinity",
  ["True", "False"], 1,
  "FALSE as written. The original statement says \"are critical regulators of the binding affinity\", not \"have no measurable effect on the binding affinity\": solvation and desolvation DO regulate affinity.",
  ["Read it again: \"have no measurable effect on the binding affinity\" has been substituted for \"are critical regulators of the binding affinity\", so it is not true as written.", ""], "Non-covalent forces, water & specificity", "");
Q("x9", "MA", "m2", "forces", 2, "If a binding interface is hydrophobic, then release of water from that interface will provide favorable entropy and interaction energy particularly by displacing water molecules in hydrophobic cavities.",
  ["True", "False"], 0,
  "TRUE. This is the review statement unchanged. Releasing ordered water from a hydrophobic interface is an ENTROPY gain. If a choice credits enthalpy only, it is wrong.",
  ["", "This is the review statement word for word, so it is true as written."], "Non-covalent forces, water & specificity", "");
Q("x10", "MA", "m2", "forces", 3, "Specificity is important to limit non-specific interaction that may otherwise cause false negatives for sensors, high background for imaging agents, or side effects for drugs.",
  ["True", "False"], 1,
  "FALSE as written. The original statement says \"false positives\", not \"false negatives\": poor specificity causes false POSITIVES.",
  ["Read it again: \"false negatives\" has been substituted for \"false positives\", so it is not true as written.", ""], "Non-covalent forces, water & specificity", "");
Q("x11", "MA", "m2", "ab", 2, "Antibodies belong to a class of proteins called immunoglobulins",
  ["True", "False"], 0,
  "TRUE. This is the review statement unchanged. Antibody = immunoglobulin. One word, easy point.",
  ["", "This is the review statement word for word, so it is true as written."], "Antibody structure: variable regions, CDRs, Fab & Fc", "");
Q("x12", "MA", "m2", "iso", 3, "Antibodies include IgG, IgM, IgA, IgD & IgK",
  ["True", "False"], 1,
  "FALSE as written. The original statement says \"IgG, IgM, IgA, IgD & IgE\", not \"IgG, IgM, IgA, IgD & IgK\": the fifth class is IgE; there is no IgK.",
  ["Read it again: \"IgG, IgM, IgA, IgD & IgK\" has been substituted for \"IgG, IgM, IgA, IgD & IgE\", so it is not true as written.", ""], "Antibody classes: IgG, IgM, IgA, IgD, IgE", "");
Q("x13", "MA", "m2", "ab", 2, "The ability of immunoglobulins to bind antigen is determined by amino acid sequence in the variable region",
  ["True", "False"], 0,
  "TRUE. This is the review statement unchanged. Antigen binding is set by the VARIABLE region sequence. Constant-region is the swap-trap.",
  ["", "This is the review statement word for word, so it is true as written."], "Antibody structure: variable regions, CDRs, Fab & Fc", "");
Q("x14", "MA", "m2", "ab", 2, "The antibody molecule has functions of specific binding to antigen eliciting response as well as having biological activity to bind to cells to recruit them to the antigen site.",
  ["True", "False"], 0,
  "TRUE. This is the review statement unchanged. Two functions: bind antigen, and recruit effector cells. The second one is the Fc tail.",
  ["", "This is the review statement word for word, so it is true as written."], "Antibody structure: variable regions, CDRs, Fab & Fc", "");
Q("x15", "MA", "m2", "ab", 3, "Sequence variability is not distributed evenly in the constant region of antibodies but is instead localized to the CDR (complementarity determining regions)",
  ["True", "False"], 1,
  "FALSE as written. The original statement says \"variable region\", not \"constant region\": specificity comes from the variable region.",
  ["Read it again: \"constant region\" has been substituted for \"variable region\", so it is not true as written.", ""], "Antibody structure: variable regions, CDRs, Fab & Fc", "");
Q("x16", "MA", "m3", "vec", 2, "Plasmids (or vectors) are circular DNA molecules that are capable of replicating within a host and can be transferred to other cells (note that the replication happens in those cells if the plasmid contains an origin of replication compatible for that host cell)",
  ["True", "False"], 0,
  "TRUE. This is the review statement unchanged. Circular, replicates in a host, transferable. The parenthesis is the real point: it only replicates if its ori suits that host.",
  ["", "This is the review statement word for word, so it is true as written."], "Vectors: cloning, expression & shuttle", "");
Q("x17", "MA", "m3", "vec", 2, "Shuttle vectors are plasmids capable of propagating and transferring (“shuttling”) genes between two different organisms.",
  ["True", "False"], 0,
  "TRUE. This is the review statement unchanged. Shuttle = works in TWO organisms. Grow it in bacteria, use it in yeast or human cells.",
  ["", "This is the review statement word for word, so it is true as written."], "Vectors: cloning, expression & shuttle", "");
Q("x18", "MA", "m3", "vec", 3, "Cloning vectors are used to insert foreign DNA and translate it directly into protein for harvesting",
  ["True", "False"], 1,
  "FALSE as written. The original statement says \"amplify it (make more copies of the DNA for further use)\", not \"translate it directly into protein for harvesting\": a cloning vector amplifies DNA; an expression vector makes protein.",
  ["Read it again: \"translate it directly into protein for harvesting\" has been substituted for \"amplify it (make more copies of the DNA for further use)\", so it is not true as written.", ""], "Vectors: cloning, expression & shuttle", "");
Q("x19", "MA", "m3", "vec", 2, "Expression vectors are used produce mRNA of a gene of interest and must have a region to initiate transcription of RNA (promoter) and must have a region to terminate transcription of RNA (terminator)",
  ["True", "False"], 0,
  "TRUE. This is the review statement unchanged. Expression vector: makes mRNA, so it needs a promoter to start and a terminator to stop. Promoter/terminator swap is the classic trap.",
  ["", "This is the review statement word for word, so it is true as written."], "Vectors: cloning, expression & shuttle", "");
Q("x20", "MA", "m5", "rna", 3, "RNA synthesis starts at the end of the terminator, which is a highly conserved sequence at the 5’ end of a gene.",
  ["True", "False"], 1,
  "FALSE as written. The original statement says \"promoter\", not \"terminator\": the promoter starts transcription; the terminator stops it.",
  ["Read it again: \"terminator\" has been substituted for \"promoter\", so it is not true as written.", ""], "RNA kinds, transcription & Shine–Dalgarno", "");
Q("x21", "MA", "m5", "rna", 2, "RNA elongation occurs until RNA polymerase encounters a termination sequence on the DNA where the RNA polymerase releases the growing single stranded RNA and the DNA template",
  ["True", "False"], 0,
  "TRUE. This is the review statement unchanged. Elongation runs until the terminator, where polymerase releases both the RNA and the DNA template.",
  ["", "This is the review statement word for word, so it is true as written."], "RNA kinds, transcription & Shine–Dalgarno", "");
Q("x22", "MA", "m5", "rna", 2, "Prokaryotic and eukaryotic genes have regulatory DNA sequences that interact with proteins that are used to help switch the gene on or off.",
  ["True", "False"], 0,
  "TRUE. This is the review statement unchanged. Regulatory sequences plus the proteins that bind them switch genes on or off. True in both prokaryotes and eukaryotes.",
  ["", "This is the review statement word for word, so it is true as written."], "RNA kinds, transcription & Shine–Dalgarno", "");
Q("x23", "MA", "m5", "lac", 3, "The lac operon has 3 genes each involved in processing the sugar lactose where one of them is the gene (lacZ) for the enzyme β-galactosidase and this enzyme hydrolyses lactose to yield glucose and fructose",
  ["True", "False"], 1,
  "FALSE as written. The original statement says \"yield glucose and galactose\", not \"yield glucose and fructose\": beta-galactosidase yields glucose and GALACTOSE.",
  ["Read it again: \"yield glucose and fructose\" has been substituted for \"yield glucose and galactose\", so it is not true as written.", ""], "The lac operon & inducible expression", "");
Q("x24", "MA", "m5", "lac", 2, "For the lac operon, little to no β-galactosidase is produced in these three scenarios: 1) When glucose is present and lactose is absent 2) When glucose is present and lactose is present 3) When glucose is absent and lactose is absent However, the lac operon does allow production of β-galactosidase when glucose is absent and lactose is present",
  ["True", "False"], 0,
  "TRUE. This is the review statement unchanged. The four-way table. ON only when glucose is ABSENT and lactose is PRESENT. The other three give little to no enzyme.",
  ["", "This is the review statement word for word, so it is true as written."], "The lac operon & inducible expression", "");
Q("x25", "MA", "m3", "rep", 2, "Some forms of DNA polymerase can remove mismatched bases by proofreading which eliminates incorrect nucleotides immediately after they are added to the growing DNA during replication.",
  ["True", "False"], 0,
  "TRUE. This is the review statement unchanged. Proofreading removes the wrong base immediately after it is added. More accurate but slower.",
  ["", "This is the review statement word for word, so it is true as written."], "DNA replication, proofreading & mutations", "");
Q("x26", "MA", "m3", "rep", 3, "Chromosome level mutations include: deletions; inversions; substitutions; duplications",
  ["True", "False"], 1,
  "FALSE as written. The original statement says \"deletions; inversions; translocations; duplications\", not \"deletions; inversions; substitutions; duplications\": substitution is a GENE-level mutation.",
  ["Read it again: \"deletions; inversions; substitutions; duplications\" has been substituted for \"deletions; inversions; translocations; duplications\", so it is not true as written.", ""], "DNA replication, proofreading & mutations", "");
Q("x27", "MA", "m4", "pcr", 2, "Taq polymerase is useful because it survives the melting temperature of DNA denaturation",
  ["True", "False"], 0,
  "TRUE. This is the review statement unchanged. Taq survives the ~94 C denaturation step. That is the whole reason it is used.",
  ["", "This is the review statement word for word, so it is true as written."], "PCR: cycles, temperatures & Taq", "");
Q("x28", "MB", "m4", "pcr", 2, "Quantitative PCR uses fluorescently labeled primers to develop time-point data to help discern how much DNA (or RNA) was originally in the sample.",
  ["True", "False"], 0,
  "TRUE. This is the review statement unchanged. Accept the professor's wording. In practice most qPCR uses a dye or a labelled probe; the key idea is fluorescence read every cycle, and an earlier Ct means more starting template.",
  ["", "This is the review statement word for word, so it is true as written."], "PCR: cycles, temperatures & Taq", "");
Q("x29", "MB", "m3", "clone", 3, "A multiple cloning site is an area of the plasmid vector that contains one single rarely-used restriction enzyme sites to provide a choice of restriction enzyme sites to use when you cut your DNA of interest and put it in the plasmid.",
  ["True", "False"], 1,
  "FALSE as written. The original statement says \"many common restriction\", not \"one single rarely-used restriction\": an MCS holds MANY sites.",
  ["Read it again: \"one single rarely-used restriction\" has been substituted for \"many common restriction\", so it is not true as written.", ""], "Cloning: MCS, directional cloning & blue-white screening", "");
Q("x30", "MB", "m3", "clone", 2, "X-Gal turns blue when its beta glycosidic bond is cleaved by the product of the lacZ; therefore, when the lacZ is intact it makes a blue color when expressed if X-Gal is present and contrastingly if the lacZ gene is disrupted, the bacteria appear white because no lacZ product is formed.",
  ["True", "False"], 0,
  "TRUE. This is the review statement unchanged. WHITE = recombinant (insert disrupted lacZ, no beta-gal, X-Gal stays colourless). Blue = empty vector. Getting this backwards is the single most common error here.",
  ["", "This is the review statement word for word, so it is true as written."], "Cloning: MCS, directional cloning & blue-white screening", "");
Q("x31", "MB", "m3", "clone", 3, "For directional cloning two cuts with the same restriction enzyme twice are made in the vector and the two same restriction enzymes are used construct a foreign DNA insert allowing the insert to be assembled into the vector in a specific direction.",
  ["True", "False"], 1,
  "FALSE as written. The original statement says \"two different restriction enzymes\", not \"the same restriction enzyme twice\": directional cloning needs two DIFFERENT enzymes.",
  ["Read it again: \"the same restriction enzyme twice\" has been substituted for \"two different restriction enzymes\", so it is not true as written.", ""], "Cloning: MCS, directional cloning & blue-white screening", "");
Q("x32", "MB", "m3", "vec", 2, "To express a eukaryotic protein in E. coli, the eukaryotic cDNA must be cloned in an expression vector that contains an appropriate, promoter, ribosome binding site, and ideally a transcriptional terminator",
  ["True", "False"], 0,
  "TRUE. This is the review statement unchanged. Three parts required: promoter, ribosome binding site, terminator. And it must be cDNA, because E. coli cannot splice out introns.",
  ["", "This is the review statement word for word, so it is true as written."], "Vectors: cloning, expression & shuttle", "");
Q("x33", "MB", "m7", "phage", 2, "Using recombinant DNA technology, collections of billions of peptides or proteins can be presented on phage and these phage-display libraries can be surveyed for specific affinity or activity of the displayed peptide or protein.",
  ["True", "False"], 0,
  "TRUE. This is the review statement unchanged. Billions of peptides displayed on phage, then screened for affinity or activity. This is the setup for panning.",
  ["", "This is the review statement word for word, so it is true as written."], "M13 phage display & panning", "");
Q("x34", "MB", "m7", "chem", 3, "Chemical genetics is the use of synthetic or exogenous ligands to alter the function of a single gene product within the context of a cell-free test tube only.",
  ["True", "False"], 1,
  "FALSE as written. The original statement says \"a single or multicellular environment\", not \"a cell-free test tube only\": chemical genetics works in living single or multicellular systems.",
  ["Read it again: \"a cell-free test tube only\" has been substituted for \"a single or multicellular environment\", so it is not true as written.", ""], "Chemical genetics: forward vs reverse", "");
Q("x35", "MB", "m7", "chem", 2, "In forward chemical genetics, the goal is target identification where screening large sets of small molecules is used to cause a specific phenotype of interest and ultimately used to isolate and identify the protein target that generates such a phenotype",
  ["True", "False"], 0,
  "TRUE. This is the review statement unchanged. FORWARD = phenotype first, then find the protein. Goal: target IDENTIFICATION.",
  ["", "This is the review statement word for word, so it is true as written."], "Chemical genetics: forward vs reverse", "");
Q("x36", "MB", "m7", "chem", 3, "In reverse chemical genetics, the goal is target identification to screen for compounds that bind to a given protein.",
  ["True", "False"], 1,
  "FALSE as written. The original statement says \"target function and validation\", not \"target identification\": reverse chemical genetics aims at validation.",
  ["Read it again: \"target identification\" has been substituted for \"target function and validation\", so it is not true as written.", ""], "Chemical genetics: forward vs reverse", "");
Q("x37", "MB", "m8", "chrom", 2, "Epigenetics are non-genetic factors that cause the organism's genes to express a certain way (increased or decrease expression) and this effect on the genetic expression levels can in some cases last through several generations.",
  ["True", "False"], 0,
  "TRUE. This is the review statement unchanged. Epigenetics changes expression without changing sequence, and can persist across generations.",
  ["", "This is the review statement word for word, so it is true as written."], "Chromatin, histones, HAT & HDAC", "");
Q("x38", "MB", "m8", "chrom", 3, "Histones are an dimer protein complex with positive charge residues that if modified by acetylation are believed to lower the charge of the histone thereby loosening the associated DNA.",
  ["True", "False"], 1,
  "FALSE as written. The original statement says \"octamer\", not \"dimer\": the histone core is an octamer.",
  ["Read it again: \"dimer\" has been substituted for \"octamer\", so it is not true as written.", ""], "Chromatin, histones, HAT & HDAC", "");
Q("x39", "MB", "m8", "chrom", 2, "Nucleosomes are the complex of DNA wrapped around the 2 copies of the 4 different histone protein cores (2x4 so a single histone is an octomer)",
  ["True", "False"], 0,
  "TRUE. This is the review statement unchanged. A nucleosome is DNA around 2 copies each of 4 histones. The OCTAMER is the core as a whole, not a single histone, despite the review's wording.",
  ["", "This is the review statement word for word, so it is true as written."], "Chromatin, histones, HAT & HDAC", "");
Q("x40", "MB", "m8", "chrom", 3, "Loose chromatin structure called heterochromatin allows RNA polymerase to bind and make mRNA",
  ["True", "False"], 1,
  "FALSE as written. The original statement says \"euchromatin\", not \"heterochromatin\": euchromatin is the loose, transcribed form.",
  ["Read it again: \"heterochromatin\" has been substituted for \"euchromatin\", so it is not true as written.", ""], "Chromatin, histones, HAT & HDAC", "");
Q("x41", "MB", "m8", "chrom", 2, "Heterochromatin are chromatin structures where DNA is tightly wrapped around structural proteins causes inactivation of the gene by preventing expression.",
  ["True", "False"], 0,
  "TRUE. This is the review statement unchanged. Heterochromatin is tightly wrapped and inactive. Euchromatin/heterochromatin swap is a frequent trap.",
  ["", "This is the review statement word for word, so it is true as written."], "Chromatin, histones, HAT & HDAC", "");
Q("x42", "MB", "m8", "chrom", 3, "Only a tiny fraction of the genome is packaged in heterochromatin.",
  ["True", "False"], 1,
  "FALSE as written. The original statement says \"Much of the genome is packaged in heterochromatin\", not \"Only a tiny fraction of the genome is packaged in heterochromatin\": MUCH of the genome is heterochromatin.",
  ["Read it again: \"Only a tiny fraction of the genome is packaged in heterochromatin\" has been substituted for \"Much of the genome is packaged in heterochromatin\", so it is not true as written.", ""], "Chromatin, histones, HAT & HDAC", "");
Q("x43", "MB", "m8", "chrom", 2, "Posttranslational modification of the histone tails help determine the chromatin packaging state.",
  ["True", "False"], 0,
  "TRUE. This is the review statement unchanged. Post-translational modification of histone TAILS sets the packing state.",
  ["", "This is the review statement word for word, so it is true as written."], "Chromatin, histones, HAT & HDAC", "");
Q("x44", "MB", "m8", "chrom", 3, "All of the core histones have an unstructured C-terminal tail of about 30 amino acids which is the site of extensive post-translational modification that changes protein-DNA interaction and serve as signals for docking of other proteins.",
  ["True", "False"], 1,
  "FALSE as written. The original statement says \"N-terminal tail\", not \"C-terminal tail\": the modified histone tail is N-terminal.",
  ["Read it again: \"C-terminal tail\" has been substituted for \"N-terminal tail\", so it is not true as written.", ""], "Chromatin, histones, HAT & HDAC", "");
Q("x45", "MB", "m8", "meth", 2, "DNA methylation can inhibit transcription factor binding and also recruit Methyl CpG Binding Domain proteins which can recruit/modify histones",
  ["True", "False"], 0,
  "TRUE. This is the review statement unchanged. Methylation does two things: blocks transcription factors AND recruits MBD proteins. Expect a question that only credits one.",
  ["", "This is the review statement word for word, so it is true as written."], "DNA methylation, CpG & epigenetic inheritance", "");
Q("x46", "MB", "m8", "meth", 3, "Methylation allows environmental factors to quickly control gene expression by making permanent mutations",
  ["True", "False"], 1,
  "FALSE as written. The original statement says \"without making permanent mutations\", not \"by making permanent mutations\": methylation works WITHOUT changing the sequence.",
  ["Read it again: \"by making permanent mutations\" has been substituted for \"without making permanent mutations\", so it is not true as written.", ""], "DNA methylation, CpG & epigenetic inheritance", "");
Q("x47", "MB", "m8", "meth", 2, "DNA methylation is found in CpG (CG) dinucleotides in humans, with the cytosines on both strand typically being methylated as 5-Methyl Cytosine.",
  ["True", "False"], 0,
  "TRUE. This is the review statement unchanged. CpG dinucleotides, cytosine methylated on BOTH strands, as 5-methylcytosine. Enzyme is DNMT, methyl donor is SAM.",
  ["", "This is the review statement word for word, so it is true as written."], "DNA methylation, CpG & epigenetic inheritance", "");
Q("x48", "MB", "m8", "chrom", 3, "HAT (histone acetyltransferase) are repressors of gene expression by adding acetyl groups to histone tails thereby loosening the DNA/histone interaction",
  ["True", "False"], 1,
  "FALSE as written. The original statement says \"activators\", not \"repressors\": HAT activates; a repressor does the opposite.",
  ["Read it again: \"repressors\" has been substituted for \"activators\", so it is not true as written.", ""], "Chromatin, histones, HAT & HDAC", "");
Q("x49", "MB", "m8", "chrom", 2, "HDAC (histone deacetylases) are repressors of gene expression by removing acetyl groups thereby restoring the positive charge allowing the tight interaction between histones and the DNA.",
  ["True", "False"], 0,
  "TRUE. This is the review statement unchanged. HDAC REMOVES acetyl, restores positive charge, tightens, REPRESSES. HAT/HDAC reversal is the most likely epigenetics trap on the exam.",
  ["", "This is the review statement word for word, so it is true as written."], "Chromatin, histones, HAT & HDAC", "");
Q("x50", "MB", "m7", "phage", 3, "Viruses are often considered non-living since they independently carry out metabolism, but can still evolve and replicate inside of host cells.",
  ["True", "False"], 1,
  "FALSE as written. The original statement says \"they do not independently carry out metabolism\", not \"they independently carry out metabolism\": viruses have NO independent metabolism.",
  ["Read it again: \"they independently carry out metabolism\" has been substituted for \"they do not independently carry out metabolism\", so it is not true as written.", ""], "M13 phage display & panning", "");
Q("x51", "MB", "m7", "phage", 2, "Filamentous bacteriophage known as M13 can reproduce without killing E. coli cell.",
  ["True", "False"], 0,
  "TRUE. This is the review statement unchanged. M13 is filamentous and NON-LYTIC: it slows the cell but does not kill it. That is why phage display works.",
  ["", "This is the review statement word for word, so it is true as written."], "M13 phage display & panning", "");
Q("x52", "MB", "m9", "meteng", 2, "In metabolic engineering, the addition of genes can be used to change a target phenotype.",
  ["True", "False"], 0,
  "TRUE. This is the review statement unchanged. Adding genes can change a target phenotype. Pairs with the six strategies short answer.",
  ["", "This is the review statement word for word, so it is true as written."], "Metabolic engineering: the six strategies", "");
Q("x53", "MB", "m9", "meteng", 2, "Mutant clones can be identified to have a certain trait by selection and screening processes",
  ["True", "False"], 0,
  "TRUE. This is the review statement unchanged. Selection kills what you do not want; screening lets everything grow and you look. Both are used to find improved mutants.",
  ["", "This is the review statement word for word, so it is true as written."], "Metabolic engineering: the six strategies", "");
})(BE.Q);
