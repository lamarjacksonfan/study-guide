// Study topics, part C: M5 RNA/lac, M6 RNAi/CRISPR, M7 libraries/phage/ELISA/chemical
// genetics, M8 epigenetics, M9 metabolic engineering.
window.BE = window.BE || {};
BE.topics = BE.topics || [];

BE.topics.push(
{
  id: "rna", m: "m5", title: "RNA kinds, transcription & Shine–Dalgarno", heat: 3,
  src: "Week 12 L1 slides 2–5; Week 12 L2 slides 14–16; review statements 20–22 and 'Other' #2 and #5",
  why: "Two short-answer items on the review come from here, and both are free marks if you have the vocabulary straight.",
  know: "<b>m</b>RNA = <b>messenger</b>, <b>r</b>RNA = <b>ribosomal</b>, <b>t</b>RNA = <b>transfer</b>. Transcription starts at a <b>promoter</b> 5' of the gene and runs until a <b>terminator</b>, where RNA polymerase releases both the new RNA and the DNA template.",
  eli5: "The gene is a recipe in a reference book that cannot leave the library. mRNA is the photocopy you carry to the kitchen, rRNA is the worktop you cook on, and tRNA is the assistant fetching each ingredient as the recipe calls for it.",
  exam: "<p><b>RNA basics:</b> ribose rather than deoxyribose, uracil in place of thymine, usually single stranded though double-stranded RNA exists.</p>" +
    "<p><b>snRNA:</b> small nuclear RNA, 100–200 nucleotides, found in the eukaryotic nucleus. With protein it forms snRNPs, which process pre-mRNA into mature mRNA and form the basis of the <b>spliceosome</b>.</p>" +
    "<p><b>Promoter and terminator</b> (statements 20–21): RNA synthesis starts at the <b>end</b> of the promoter, a highly conserved sequence at the 5' end of the gene. Elongation continues until the terminator, where polymerase lets go of both strands.</p>" +
    "<p><b>Regulatory proteins</b> (statement 22): both prokaryotes and eukaryotes have regulatory DNA sequences bound by proteins that switch genes on or off. <b>Repressors</b> block RNA polymerase; <b>activators</b> recruit and stabilise it.</p>" +
    "<p><b>Shine–Dalgarno</b> (review true/false #5): the ribosome binding site on <b>mRNA</b>, recognised by the <b>ribosome</b> via 16S rRNA — <b>not</b> by RNA polymerase. The statement as printed is <b>FALSE</b>. RNA polymerase reads the promoter, which is on DNA. Two different molecules, two different sequences.</p>",
  terms: [["mRNA / rRNA / tRNA", "messenger / ribosomal / transfer"],
          ["snRNA", "Small nuclear RNA; with proteins forms snRNPs and the spliceosome"],
          ["Promoter", "Conserved DNA sequence 5' of the gene where transcription starts"],
          ["Terminator", "DNA sequence where polymerase releases RNA and template"],
          ["Shine–Dalgarno", "Ribosome binding site on mRNA, read by 16S rRNA"]],
  traps: ["Shine–Dalgarno is read by the RIBOSOME. The review's statement saying RNA polymerase is deliberately false.",
          "Repressor blocks, activator recruits. A swapped pair reads perfectly plausibly.",
          "Transcription starts at the END of the promoter; the promoter itself is not transcribed."],
  recall: ["What do m, r and t stand for?",
           "What binds the Shine–Dalgarno sequence, and what does RNA polymerase bind instead?",
           "What does a repressor do, and what does an activator do?",
           "What is snRNA for?"],
  one: "Messenger, ribosomal, transfer; transcription runs promoter to terminator; Shine–Dalgarno is read by the ribosome, not RNA polymerase."
},
{
  id: "lac", m: "m5", title: "The lac operon & inducible expression", heat: 3,
  src: "Week 12 Lecture 2 slides 17–24; review statements 23 and 24",
  why: "The four-scenario table is spelled out in full on the review sheet, which is as close to a guarantee as the exam gives. It is also the model for every inducible system in synthetic biology.",
  know: "The lac operon has <b>3 genes</b> for processing lactose; <b>lacZ</b> encodes <b>beta-galactosidase</b>, which hydrolyses lactose into <b>glucose + galactose</b>. The operon is ON in <b>one</b> of four situations: <b>glucose absent AND lactose present</b>.",
  eli5: "The cell prefers glucose, which needs no work. Lactose has to be broken down first, so the cell only builds the lactose machinery when there is no glucose left and there is lactose to use. Two conditions, both required.",
  exam: "<p><b>Two separate controls, which is the whole point:</b></p><ul>" +
    "<li>The <b>repressor</b> (product of lacI) sits on the <b>operator</b> and physically blocks RNA polymerase. Lactose binds the repressor at an allosteric site, changing its shape so it falls off.</li>" +
    "<li><b>CAP</b> (catabolite activator protein) <b>stabilises</b> RNA polymerase on the promoter, and <b>only works when glucose is absent</b>.</li></ul>" +
    "<p><b>Why glucose + lactose still gives almost nothing:</b> the repressor is off the operator, so polymerase can sit down, but without CAP it binds with low affinity and the complex is unstable. The lecture calls this <b>very low expression</b> and the review calls it <b>little to no</b> beta-galactosidase. Both mean the same thing: a trickle, not full transcription.</p>" +
    "<p><b>Inducible expression</b> is the engineering payoff: adding or removing a chemical turns a gene on or off in engineered bacteria. That is why IPTG-inducible vectors exist, and why lacI sits on the plasmids in your labs.</p>",
  compare: { head: ["Glucose", "Lactose", "Repressor", "CAP", "Transcription"],
             rows: [["Present", "Absent", "On the operator", "Not bound", "None"],
                    ["Present", "Present", "Lifted off", "Not bound", "Very low / little to none"],
                    ["Absent", "Absent", "On the operator", "Bound to DNA", "None"],
                    ["Absent", "Present", "Lifted off", "Bound to DNA", "<b>Full transcription</b>"]] },
  trick: "<b>No glucose, yes lactose.</b> Both conditions must hold. Any row with glucose present is effectively off.",
  traps: ["Three of the four rows give little or no enzyme. Only one gives real expression.",
          "The glucose+lactose row is not strictly zero: say 'very low' or 'little to none', matching both sources.",
          "Lactose removes the repressor; CAP needs glucose to be ABSENT. Two different molecules doing two different jobs.",
          "lacZ makes beta-galactosidase, which yields glucose AND galactose."],
  recall: ["Fill in the four-row table from memory, including what the repressor and CAP are doing.",
           "Why is there only a trickle of expression when both sugars are present?",
           "What does lactose physically do to the repressor?",
           "What does beta-galactosidase produce?"],
  one: "ON only when glucose is absent and lactose is present: lactose lifts the repressor, CAP stabilises polymerase, and CAP only works without glucose."
});

BE.topics.push(
{
  id: "rnai", m: "m6", title: "RNA interference: siRNA vs miRNA", heat: 2,
  src: "Week 12 Lecture 1 slides 6–24",
  why: "Nineteen slides and <b>nothing</b> on the review sheet. The handout explicitly warns that lecture material not on it will appear, so this is the highest-risk blind spot in the course.",
  know: "RNAi is <b>post-transcriptional gene silencing</b>: short double-stranded RNAs direct the destruction or blocking of matching mRNA. <b>Dicer</b> cuts long dsRNA into ~21 nt siRNA; <b>RISC</b> (containing <b>Argonaute</b>) uses one strand as a guide to find the target.",
  eli5: "A shredder and a search party. Dicer shreds long double-stranded RNA into short standard-length pieces. RISC picks up one piece and walks the cell comparing it against every message it meets. A perfect match gets destroyed; a near match just gets gagged.",
  exam: "<p><b>The mechanism:</b> dsRNA longer than 25 nt → <b>Dicer</b> cleaves to ~21 bp siRNA, a <b>19 nt duplex with 2 nt 3' overhangs</b> → loaded into <b>RISC</b> → RISC targets matching mRNA. Only <b>Ago2</b> of the four mammalian Argonautes has cutting activity.</p>" +
    "<p><b>The decisive difference:</b> a <b>perfect</b> match means the mRNA is <b>cleaved</b>; a <b>mismatch</b> means translation is <b>blocked</b> instead. A single base pair difference is enough to switch between the two outcomes.</p>" +
    "<p><b>siRNA vs miRNA.</b> siRNA: synthetic or exogenous dsRNA, perfectly complementary, <b>one</b> target. miRNA: natural, from a ~70 nt hairpin (stem-loop) cut down to ~22 nt, usually <b>imperfectly</b> matched to the 3'-UTR, and therefore able to regulate <b>many</b> targets. About 30% of genes are miRNA-regulated.</p>" +
    "<p><b>Strand bias:</b> RISC keeps the strand whose <b>5' end is less stable</b> (lower GC). Designing siRNA: 21–23 nt, GC slightly under 50%, perfectly complementary to the target and nothing else, targeting an open region of secondary structure, with 1–2 nt 3' uracil overhangs. Researchers typically use about four different duplexes at once.</p>" +
    "<p><b>Why cells have it:</b> defence against viruses, which often produce dsRNA, and suppression of transposons. Disrupting Dicer or Argonaute increases retrotransposon mobility; Dicer knockout is embryonic lethal in mice.</p>",
  compare: { head: ["", "siRNA", "miRNA"],
             rows: [["Origin", "Exogenous/synthetic dsRNA", "Natural ~70 nt hairpin"],
                    ["Match to target", "Perfect", "Usually imperfect, at the 3'-UTR"],
                    ["Outcome", "mRNA cleaved", "Translation blocked"],
                    ["Number of targets", "One", "Many"]] },
  traps: ["Perfect match destroys, mismatch blocks. This is the distinction most likely to be tested.",
          "Dicer CUTS; RISC/Argonaute SILENCES. Different jobs.",
          "RISC keeps the strand with the LESS stable 5' end.",
          "siRNA is specific to one target; miRNA hits many."],
  recall: ["Walk the pathway from long dsRNA to a silenced message.",
           "What decides whether the mRNA is cut or merely blocked?",
           "Give three differences between siRNA and miRNA.",
           "Which Argonaute protein can cut, and which strand does RISC keep?"],
  one: "Dicer cuts dsRNA to 21 nt siRNA, RISC/Argonaute uses one strand as a guide: perfect match cleaves the mRNA, mismatch (typical of miRNA) blocks translation."
},
{
  id: "crispr", m: "m6", title: "CRISPR/Cas9, ZFN, TALEN & dCas9", heat: 2,
  src: "Week 12 Lecture 1 slides 25–35",
  why: "Eleven slides, also absent from the review. NHEJ versus HDR is the kind of clean binary distinction that makes an easy exam question.",
  know: "CRISPR/Cas9 is a <b>programmable site-specific nuclease</b>. A guide RNA takes Cas9 to a matching sequence next to a <b>PAM</b>, and Cas9 makes a double-strand break. How the cell repairs that break decides what edit you get.",
  eli5: "Search-and-replace for the genome. The guide RNA is the search term, Cas9 is the cursor that cuts there, and what happens next depends on whether you supplied replacement text. No replacement, and the cell patches the gap clumsily, breaking the gene. Supply one, and it gets pasted in cleanly.",
  exam: "<p><b>Origin:</b> CRISPR = Clustered Regularly Interspaced Short Palindromic Repeats, a bacterial immune memory. Repeats separated by <b>spacers</b> taken from past viral infections; cas genes handle integration, processing and interference.</p>" +
    "<p><b>Targeting:</b> Cas9 with crRNA + tracrRNA (fused as a single <b>sgRNA</b>) binds a <b>PAM</b> site; PAM recognition causes local unwinding and lets the guide check the flanking DNA. A correct match activates nuclease activity and produces a double-strand break. Specificity comes from the crRNA sequence. Bacteria avoid cutting their own CRISPR locus because <b>it lacks PAMs</b>. Cas9 stays bound after cutting, which helps recruit repair machinery.</p>" +
    "<p><b>The repair fork in the road:</b></p><ul>" +
    "<li><b>No template → NHEJ</b> (non-homologous end joining): random insertions and deletions at the cut site. Used to <b>knock out</b> a gene.</li>" +
    "<li><b>Donor template with flanking homology → HDR</b> (homology directed repair): the donor sequence replaces the cut region. Used for a <b>precise edit</b>.</li></ul>" +
    "<p><b>The earlier technologies:</b> <b>ZFN</b> — Cys2-His2 zinc finger domains each contacting 3 bp in the major groove, fused to a FokI nuclease monomer, so cutting needs a second monomer on the other strand to form a functional dimer. <b>TALEN</b> — modular 33–34 amino acid repeats whose specificity sits at positions <b>12 and 13</b>. Both give a substrate for error-prone repair or homologous recombination, the same as Cas9.</p>" +
    "<p><b>dCas9:</b> nuclease-dead. It binds without cutting, so it can block transcription, carry an activator, or mark a locus for imaging. With an sgRNA library it enables functional genomics screens.</p>",
  compare: { head: ["", "NHEJ", "HDR"],
             rows: [["Template needed", "None", "Donor DNA with homology arms"],
                    ["Result", "Random indels", "Precise, designed sequence"],
                    ["Used for", "Gene knockout", "Gene correction or insertion"],
                    ["Accuracy", "Error prone", "Faithful"]] },
  traps: ["No template = NHEJ = knockout. With template = HDR = precise edit. This is the most likely question from these slides.",
          "The PAM is on the DNA next to the target, not part of the guide RNA.",
          "dCas9 does not cut. If a question has dCas9 making a break, it is wrong.",
          "ZFN needs FokI to dimerise, so you target two monomers."],
  recall: ["What does CRISPR stand for and where do the spacers come from?",
           "What must sit next to the target for Cas9 to cut, and why does the bacterium not cut itself?",
           "Contrast NHEJ with HDR and give the use of each.",
           "What is dCas9 good for if it cannot cut?"],
  one: "sgRNA guides Cas9 to a target beside a PAM and it cuts; no template gives NHEJ indels and a knockout, a donor template gives HDR and a precise edit."
});

BE.topics.push(
{
  id: "lib", m: "m7", title: "DNA & cDNA libraries", heat: 2,
  src: "Week 12 Lecture 2 slides 26–31; review statement 32",
  why: "Feeds the phage display and expression questions, and the oligo(dT) trick is a neat, very askable detail.",
  know: "A <b>DNA library</b> is a collection of DNA: a whole organism's genome, or a set of mutants of one gene. A <b>cDNA library</b> is built from mRNA instead, so it contains only the genes that were being expressed — and, crucially, <b>no introns</b>.",
  eli5: "A genomic library is every page in the building, including all the blank ones and the margins. A cDNA library is just the pages someone was actually reading that day, with the footnotes already stripped out.",
  exam: "<p><b>Building a DNA library:</b> restriction digest and subcloning of fragments, synthesis of degenerate oligonucleotides, or error-prone PCR for mutant collections.</p>" +
    "<p><b>Building a cDNA library, in order:</b> most eukaryotic mRNAs carry a <b>3' poly(A) tail</b>, so they can be fished out of total RNA by <b>oligo(dT)-cellulose chromatography</b> → short oligo(dT) chains anneal to those tails and serve as primers → <b>reverse transcriptase</b> copies RNA into DNA → DNA polymerase makes the second strand → <b>linkers</b> with restriction sites are added → ligate into a vector.</p>" +
    "<p><b>Why it matters for expression:</b> E. coli cannot splice. To express a eukaryotic protein you must start from cDNA, cloned into an expression vector with a promoter, a ribosome binding site and ideally a terminator. pET vectors are the common choice.</p>",
  terms: [["cDNA", "DNA copied from mRNA; contains no introns"],
          ["Oligo(dT)", "Short run of T's that anneals to a poly(A) tail; both purifies and primes"],
          ["Reverse transcriptase", "Synthesises DNA using RNA as template"],
          ["Linker", "Short duplex carrying a restriction site, added to give a fragment usable ends"]],
  traps: ["Oligo(dT) does two jobs: purifying the mRNA and priming the first strand. Questions often test the second.",
          "Reverse transcriptase goes RNA → DNA. Do not reverse the direction.",
          "A genomic library has introns; a cDNA library does not. That is the whole reason cDNA is used for bacterial expression."],
  recall: ["Walk from total cellular RNA to a cDNA insert in a vector.",
           "What two jobs does oligo(dT) perform?",
           "Why can a genomic eukaryotic gene not be expressed directly in E. coli?",
           "Name three ways to build a DNA library."],
  one: "cDNA libraries start from poly(A) mRNA captured on oligo(dT), copied by reverse transcriptase: intron-free, which is what makes bacterial expression possible."
},
{
  id: "phage", m: "m7", title: "M13 phage display & panning", heat: 3,
  src: "Week 12 Lecture 2 slides 32–47; review statements 31, 50 and 51",
  why: "Three review statements plus sixteen slides, and the p3/p8 numbers are exactly the sort of detail that gets asked directly.",
  know: "<b>M13</b> is a filamentous bacteriophage carrying <b>ssDNA</b> (~6400 nucleotides). It is <b>non-lytic</b>: it reproduces without killing the E. coli host, only slowing its growth. Fusing a peptide library to a coat protein gene displays those peptides on the phage surface, linking <b>genotype inside</b> to <b>phenotype outside</b>.",
  eli5: "Imagine a billion job applicants, each wearing their skill on a badge and carrying their CV in their pocket. You test the badges against a task, keep whoever sticks, and then read the CVs of the winners to find out who they are. The badge is the displayed peptide; the CV is the DNA inside.",
  exam: "<p><b>Two coat proteins to know:</b> <b>p3</b> — about <b>5 copies</b>, responsible for <b>infection</b>; <b>p8</b> — about <b>2700 copies</b>, the protective coat. p3 has an anchoring domain, an <b>F pilus</b> receptor domain and a <b>TolA</b> receptor domain; losing any one of them prevents infection. Insert your library at gene 3 and the peptide appears on p3.</p>" +
    "<p><b>Panning, the screening cycle:</b> mix the phage library with the immobilised target → <b>wash away non-binders</b> → elute the binders → <b>amplify</b> them by growing in E. coli → repeat under progressively harder binding conditions → sequence the survivors. Libraries of over a billion variants are routine.</p>" +
    "<p><b>Confirming a hit — phage ELISA:</b> immobilise the target, let phage bind through p3, then add an <b>anti-p8 antibody linked to horseradish peroxidase</b>, which converts TMB into colour.</p>" +
    "<p><b>Why it matters:</b> Greg Winter's work let small antibody fragments (<b>scFv</b>) be isolated from phage libraries. Eight of the twenty best-selling biotech drugs in the US are therapeutic monoclonal antibodies.</p>" +
    "<p><b>Related display technologies:</b> <b>SELEX</b> for RNA aptamers (diversity over 10¹²), mRNA display, and the <b>yeast two-hybrid</b> system, where a bait and a prey reconstitute a transcription factor from its DNA-binding and activating domains.</p>" +
    "<p><b>Viruses as non-living</b> (statement 50): no independent metabolism, yet they evolve and replicate inside hosts.</p>",
  traps: ["p3 = infection, ~5 copies. p8 = protection, ~2700 copies. Both the function and the number can be asked.",
          "M13 is NON-LYTIC. It does not kill the cell, which is precisely why display works.",
          "In panning you keep what binds and wash away what does not; the amplification step is what makes it exponential enrichment.",
          "Phage ELISA detects with an anti-p8 antibody while binding happens through p3."],
  recall: ["Give the copy number and job of p3 and of p8.",
           "List the steps of a panning cycle in order.",
           "Why does M13 not kill its host, and why does that matter?",
           "How does a phage ELISA confirm a binder?"],
  one: "M13 is a non-lytic filamentous phage; display a library on p3 (5 copies, infection) and enrich binders by panning, since the DNA inside encodes the peptide outside."
},
{
  id: "elisa", m: "m7", title: "ELISA", heat: 3,
  src: "Lab 4; Week 12 L2 slide 44; review true/false #4",
  why: "A true/false on the review turns on one word, and you ran the assay yourself in Lab 4, so the protocol logic is fair game.",
  know: "<b>ELISA = Enzyme-Linked ImmunoSORBENT Assay.</b> Not immunosuppressant. The antigen is <b>adsorbed</b> onto the plate, antibodies bind it, and an enzyme linked to the detection antibody produces colour.",
  eli5: "A fishing test with a dye at the end. Stick the sample to the bottom of a well, lower a hook shaped for your target, then lower a second hook that only grabs the first hook and carries a dye packet. Rinse hard between steps. Colour means the target was there.",
  exam: "<p><b>Why it is sensitive:</b> the enzyme (<b>horseradish peroxidase</b>) amplifies the signal — one binding event drives many colour-forming reactions. The antibody supplies the selectivity.</p>" +
    "<p><b>The Lab 4 sequence:</b> coat the well with the sample (30 min) → <b>blocking buffer</b> (30 min) to occupy remaining surface so later antibodies cannot stick non-specifically → <b>wash ×2</b> → primary antibody (anti-fd-protein8 from rabbit) plus secondary antibody (anti-rabbit Ig from goat), 30 min → <b>wash ×3</b> → <b>TMB</b> substrate → read within 20 minutes. Blue is positive, clear is negative.</p>" +
    "<p><b>Why two antibodies:</b> the <b>primary</b> is shaped for an epitope on the antigen and stays only if the antigen is there. The <b>secondary</b> is shaped for the primary and carries the HRP. No antigen → no primary retained → nothing for the secondary to hold → washed away → no colour.</p>" +
    "<p><b>Controls, and why:</b> without a <b>positive</b> control a colourless result is ambiguous — genuinely negative, or did the assay fail? Without a <b>negative</b> control you cannot tell whether everything would have gone blue regardless. <b>Triplicates</b> catch pipetting errors: if the three wells disagree, the technique is at fault and in a clinical lab the run would be repeated.</p>" +
    "<p><b>Everyday examples:</b> home pregnancy and ovulation tests, and drug tests, use the same antibody-plus-indicator principle.</p>",
  traps: ["The S is SORBENT. The review's 'immunosuppresent' version is FALSE and it is a one-word trap.",
          "The washes are not filler: they remove unbound antibody, which is what makes the result specific.",
          "Blocking buffer prevents non-specific sticking; skipping it gives background colour everywhere.",
          "Triplicates test your technique, not the patient."],
  recall: ["What does each letter of ELISA stand for?",
           "Why is a secondary antibody used rather than labelling the primary?",
           "What does blocking buffer do, and what happens without it?",
           "Why are both a positive and a negative control needed?",
           "What produces the blue colour?"],
  one: "Enzyme-linked immunoSORBENT assay: antigen on the plate, primary antibody binds it, enzyme-linked secondary binds the primary, and TMB turns blue if the target was present."
},
{
  id: "chem", m: "m7", title: "Chemical genetics: forward vs reverse", heat: 3,
  src: "Week 12 Lecture 2 slides 48–56; review statements 34–36",
  why: "Three review statements, and forward/reverse is a two-word swap — the easiest kind of trap for an examiner to set.",
  know: "<b>Chemical genetics</b> uses synthetic or exogenous ligands to alter the function of a single gene product in a living system. <b>Forward</b> starts from a phenotype and hunts the protein. <b>Reverse</b> starts from a protein and hunts a compound.",
  eli5: "Forward: you notice a machine in a factory has stopped and work backwards to find which lever someone pulled. Reverse: you pick a lever first, pull it, and watch what in the factory changes.",
  exam: "<p><b>Forward chemical genetics — goal: TARGET IDENTIFICATION.</b> Screen a large set of small molecules, one per well, for any that produce a phenotype of interest. Then work out which protein the active compound hits (deconvolution, for example a pull-down assay). Useful for finding new regulatory points in a pathway.</p>" +
    "<p><b>Reverse chemical genetics — goal: TARGET FUNCTION AND VALIDATION.</b> Start with a protein you care about, screen for compounds that <b>bind</b> it, optimise for selectivity, add the ligand to cells and assay the phenotype. The question being answered is whether this protein really does cause that response.</p>" +
    "<p><b>Four ways to remove a protein's function:</b> gene knockout, conditional knockout, RNAi — all <b>pre-translational</b> — and pharmacology, using a small molecule. The drawback of the chemical route is that highly selective ligands are hard to find; you want K<sub>d</sub> under 1 µM and molecular weight under 900 Da.</p>" +
    "<p><b>Two classes of inhibitor:</b> enzyme inhibitors, found readily by binding studies; and <b>protein-protein interaction</b> inhibitors, which are much harder because the interface is large and flat. Discovery routes include high-throughput screening, mechanism-based design for an enzyme class, and rational design of transition state analogues.</p>",
  compare: { head: ["", "Forward", "Reverse"],
             rows: [["Start from", "A phenotype", "A protein"],
                    ["Goal", "Target identification", "Target function and validation"],
                    ["You screen for", "Compounds causing the phenotype", "Compounds binding the protein"],
                    ["Then you", "Identify the protein hit", "Add the ligand and assay the phenotype"]] },
  trick: "<b>F</b>orward starts from the <b>F</b>unction you can see (the phenotype) and finds the protein. Reverse goes the other way.",
  traps: ["Forward = identification; reverse = validation. These two words are the whole question.",
          "Both use small molecules, so the compounds do not distinguish them. The starting point does.",
          "RNAi and knockouts act pre-translationally; pharmacology acts on the protein itself."],
  recall: ["Define forward chemical genetics and give its goal in one word.",
           "Define reverse chemical genetics and give its goal.",
           "List the four ways of removing protein function and say which is not pre-translational.",
           "Why are protein-protein interaction inhibitors harder to find than enzyme inhibitors?"],
  one: "Forward: phenotype first, find the protein, target identification. Reverse: protein first, find the ligand, target validation."
});

BE.topics.push(
{
  id: "chrom", m: "m8", title: "Chromatin, histones, HAT & HDAC", heat: 3,
  src: "Week 13 Lecture 1 slides 6–13, 27–34; review statements 37–44, 48, 49",
  why: "Ten review statements, the most of any topic on the sheet, backed by a full lecture. HAT versus HDAC is the single most likely epigenetics question.",
  know: "<b>Chromatin</b> = DNA + packaging proteins. The unit is the <b>nucleosome</b>: DNA wrapped around <b>2 copies each of 4 different histones</b> (an octamer core). Histones are <b>positively charged</b>; DNA is negative. Change that charge and you change how tightly the DNA is held.",
  eli5: "DNA is thread wound round a row of positively charged spools, and opposite charges make it cling. Stick little chemical tags on the spools to cancel their charge and the thread loosens, so the machinery can read it. Strip the tags off and it clamps shut again.",
  exam: "<p><b>HAT and HDAC, the pair to get right:</b></p><ul>" +
    "<li><b>HAT (histone acetyltransferase) ADDS acetyl groups</b> to lysines in histone tails. This <b>neutralises the positive charge</b>, weakens the grip on DNA, displaces nucleosomes and <b>ACTIVATES</b> transcription.</li>" +
    "<li><b>HDAC (histone deacetylase) REMOVES acetyl groups</b>, <b>restoring the positive charge</b>, tightening the histone–DNA interaction and <b>REPRESSING</b> transcription.</li></ul>" +
    "<p><b>Euchromatin vs heterochromatin:</b> euchromatin is the loose “beads on a string” form, hyper-acetylated, where RNA polymerase can bind and make mRNA. Heterochromatin is the condensed 30 nm fibre, hypo-acetylated, inactive. <b>Much of the genome sits in heterochromatin</b> — statement 42, counter-intuitive and therefore testable.</p>" +
    "<p><b>Histone tails:</b> all core histones have an <b>unstructured N-terminal tail of about 30 amino acids</b>, heavily modified post-translationally. These modifications change protein–DNA interaction and act as <b>docking signals</b> for other proteins.</p>" +
    "<p><b>Modification types:</b> acetylation and methylation and ubiquitination of lysine; methylation of arginine; phosphorylation of serine, threonine or tyrosine. All are reversible. Acetylation loosens; <b>methylation of histones can condense</b>; phosphorylation next to a methylated residue can loosen again.</p>" +
    "<p><b>The histone code hypothesis:</b> the specific combination and order of modifications, not any single mark, determines chromatin configuration. With ~34 lysine sites and at least 4 modification types the combinatorics are enormous. <b>HP1</b> recognises tri-methylated H3K9, binds, and recruits the enzyme that places the same mark on neighbouring histones — which is how heterochromatin spreads.</p>" +
    "<p><b>Three levels of organisation:</b> nucleosomes → 30 nm fibre → higher-order packing for mitosis. During metaphase some regions stay looser as a <b>bookmark</b> of the previous expression state, because transcription pauses during mitosis.</p>",
  compare: { head: ["", "HAT", "HDAC"],
             rows: [["Does what", "Adds acetyl groups", "Removes acetyl groups"],
                    ["Effect on charge", "Neutralises positive charge", "Restores positive charge"],
                    ["Effect on DNA grip", "Loosens", "Tightens"],
                    ["Chromatin", "Euchromatin", "Heterochromatin"],
                    ["Transcription", "Activated", "Repressed"]] },
  trick: "<b>HAT adds, and the gene is on.</b> HDAC has a D for Deacetylate and for Down.",
  traps: ["Reversing HAT and HDAC is the most likely trap in this whole module. Rehearse the one-liner until it is reflex.",
          "Euchromatin = open and expressed; heterochromatin = closed and silent.",
          "Histone ACETYLATION loosens, but histone METHYLATION generally condenses. Do not assume all marks act alike.",
          "The octamer is the core as a whole — 2 copies each of 4 histones — not a single histone, despite the review's wording."],
  recall: ["State what HAT and HDAC each do, to the charge, the chromatin and the gene.",
           "Which chromatin form is transcribed, and which holds most of the genome?",
           "How long are the histone tails, which terminus are they, and what are they for?",
           "What is the histone code hypothesis, and how does HP1 spread heterochromatin?"],
  one: "HAT adds acetyl, cancels the positive charge, opens euchromatin, gene ON; HDAC removes it, restores the charge, closes heterochromatin, gene OFF."
},
{
  id: "meth", m: "m8", title: "DNA methylation, CpG & epigenetic inheritance", heat: 3,
  src: "Week 13 Lecture 1 slides 14–26, 37; review statements 45–47",
  why: "Three review statements, and the agouti mouse and royal jelly stories are memorable examples your professor clearly likes.",
  know: "DNA methylation adds a methyl group to cytosine at <b>CpG dinucleotides</b>, giving <b>5-methylcytosine</b>, typically on <b>both strands</b>. The enzyme is <b>DNMT</b>; the methyl donor is <b>S-adenosyl methionine (SAM)</b>. The effect is reduced transcription.",
  eli5: "Methylation is a 'do not read' sticker on a page. It works two ways: it physically blocks the readers from landing, and it calls over the staff who close the book and shelve it. And because the stickers get copied when the book is duplicated, the next generation of cells inherits them.",
  exam: "<p><b>Two mechanisms, and the review wants both</b> (statement 45): methylation <b>inhibits transcription factor binding</b>, <b>and</b> it <b>recruits Methyl-CpG Binding Domain (MBD) proteins</b>, which bring in <b>HDAC</b> complexes. The HDAC deacetylates histones, chromatin compacts, and the gene is silenced. Note how this links straight back to the HAT/HDAC topic.</p>" +
    "<p><b>Where it occurs:</b> CpG (CG) dinucleotides, with the cytosines on both strands methylated, sitting diagonally opposite each other. Methyl marks are found on heterochromatin, and on remnants of past viral infections, transposons and repetitive sequences. <b>Maintenance after replication</b> is done by <b>Dnmt1</b>.</p>" +
    "<p><b>CpG islands near promoters</b> are the exception: normally unmethylated, but they can become methylated to silence the gene. <b>X-inactivation</b> works this way — CpG islands are methylated on the inactive X and unmethylated on the active one, producing Barr bodies.</p>" +
    "<p><b>Why it is useful</b> (statement 46): methylation lets environmental factors control expression <b>quickly and without permanent mutation</b>. The flip side is that effects can last.</p>" +
    "<p><b>The examples to remember:</b> <b>Agouti mice</b> — an active agouti gene gives a yellow coat with high disease risk and short life; feeding the mother <b>folate</b>, a methyl donor, silences it (actually the adjacent transposon) and shifts offspring toward lean pseudoagouti, while <b>bisphenol-A</b> causes loss of methylation and shifts them yellow. <b>Royal jelly</b> silences <b>DNMT3</b> in bee larvae, so genes stay unmethylated and the larva becomes a fertile queen instead of a sterile worker. In mammals, cytosine methylation shows up in differentiation, chromosomal stability, X-inactivation, carcinogenesis and ageing.</p>" +
    "<p><b>Plants:</b> same mechanisms, but methylation occurs in three sequence contexts (CG, CHG and CHH, where H is C, T or A), and plants lack the genome-wide demethylation waves animals show in germ cells.</p>",
  traps: ["Statement 45 has TWO mechanisms. An answer giving only 'blocks transcription factors' is incomplete.",
          "Methylation of DNA silences. Acetylation of histones activates. Different molecules, opposite directions.",
          "CpG islands at promoters are normally UNmethylated; methylating them is what silences the gene.",
          "Royal jelly turns DNMT3 OFF, which is what allows the queen phenotype."],
  recall: ["Which dinucleotide is methylated, on which base, and using which donor?",
           "Give both ways methylation reduces transcription.",
           "Explain the agouti mouse result for folate and for BPA.",
           "What happens to DNMT3 in a bee larva fed royal jelly?",
           "How does methylation relate to X-inactivation?"],
  one: "DNMT uses SAM to make 5-methylcytosine at CpG sites; that both blocks transcription factors and recruits MBD proteins which bring HDACs, compacting chromatin and silencing the gene."
},
{
  id: "meteng", m: "m9", title: "Metabolic engineering: the six strategies", heat: 3,
  src: "Review 'Other questions' #8; W13 L1 slide 2; review statements 52 and 53",
  why: "A short-answer question asking for a list of six. Pure recall, all or nothing, and the easiest marks on the paper to secure in advance.",
  know: "Metabolic engineering redesigns a cell's pathways to overproduce a compound. The review asks for <b>six strategies</b>, and they must be written out.",
  eli5: "You are trying to get more water out of one tap in a building. Remove whatever is throttling the supply, widen the narrowest pipe, close the taps competing for the same water, send more water down this branch, and stop the sink overflowing. Each strategy is one of those moves.",
  exam: "<p><b>The six strategies, in the professor's own wording:</b></p><ol>" +
    "<li>Remove genetic-level transcriptional controls</li>" +
    "<li>Remove allosteric-level enzymatic controls</li>" +
    "<li>Kinetically enhance rate-limiting enzymes</li>" +
    "<li>Genetically block competing pathways</li>" +
    "<li>Enhance commitment of carbon to the pathway of interest</li>" +
    "<li>Enhance transport of the toxic compound out of the cell</li></ol>" +
    "<p><b>Why each one:</b> 1 and 2 remove the brakes — the cell normally regulates these pathways down, at the gene level and at the protein level. 3 widens the bottleneck. 4 stops carbon leaking into pathways you do not want. 5 pushes more carbon in at the front. 6 stops the product poisoning the cell that is making it.</p>" +
    "<p><b>The allosteric brake in action:</b> Week 13 slide 2 shows <b>tryptophan feedback inhibition</b>, where the end product inhibits the first enzyme of its own pathway. That is exactly the control strategy 2 removes, and it links back to the enzymes lecture.</p>" +
    "<p><b>Two supporting statements:</b> adding genes can change a target phenotype (52), and improved mutant clones are found by <b>selection and screening</b> (53) — selection kills what you do not want, screening lets everything grow so you can look.</p>",
  trick: "Two <b>REMOVE</b> (transcriptional, allosteric), one <b>ENHANCE</b> enzyme (rate-limiting), one <b>BLOCK</b> (competing pathways), two <b>ENHANCE</b> flow (carbon in, toxin out). Pattern: <b>2 remove, 1 enhance, 1 block, 2 enhance</b>.",
  traps: ["The question asks for six. Five scores badly, so write them all out from memory three times before the exam.",
          "Strategy 1 is transcriptional (gene level); strategy 2 is allosteric (enzyme level). They are different brakes, not a duplicate.",
          "Strategy 6 is about exporting a TOXIC product so it stops inhibiting the cell."],
  recall: ["Write all six strategies from memory, then check.",
           "Which two strategies remove a control, and at what levels?",
           "Why does exporting the product help?",
           "What is the difference between selection and screening?"],
  one: "Remove transcriptional controls, remove allosteric controls, enhance rate-limiting enzymes, block competing pathways, commit more carbon, export the toxic product."
});
