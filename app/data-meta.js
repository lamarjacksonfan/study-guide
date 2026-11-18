// Exam 2 meta-data: modules, analysis, checklist, plan, matrices, connections, cram.
window.SG = window.SG || {};

SG.modules = [
  { id: "m4", short: "M4", name: "Taxonomy", weight: "<5%", heat: 1, files: "No slides uploaded (study guide + review Qs 2–3, 24)" },
  { id: "m5", short: "M5", name: "Viruses & Prokaryotes", weight: "M5+M6 <30%", heat: 3, files: "M5_2 Prokaryotes.pptx (45 slides); Module 5 objectives screenshot (viruses: objectives only)" },
  { id: "m6", short: "M6", name: "Protists & Fungi", weight: "M5+M6 <30%", heat: 3, files: "M6_1 Protists.pptx (36 slides); M6_2 Fungi.pptx (39 slides)" },
  { id: "m7", short: "M7", name: "Plants", weight: "20%", heat: 3, files: "M7_1 Plants.pptx (67 slides)" },
  { id: "m8", short: "M8", name: "Animals & Invertebrates", weight: "<15%", heat: 2, files: "M8_1 Intro to Animal Diversity.pdf (59 pages); M8_2 Invertebrates.pptx (47 slides)" },
  { id: "m9", short: "M9", name: "Chordates & Vertebrates", weight: "20%", heat: 3, files: "Module 9 objectives screenshot only (slides too large to upload)" },
  { id: "m10", short: "M10", name: "Human Evolution", weight: "10%", heat: 2, files: "M10 Human Evolution.pptx (35 slides)" }
];

SG.examDefault = "2026-10-30";

/* ---------------------------------------------------------------- ANALYSIS */
SG.analysis = {
  inventory: [
    ["Exam2StudyGuide (named .docx, actually a 2-page PDF)", "Professor's blueprint: % per module + 130-term list", "Priority 1"],
    ["Exam2ReviewQuestions.pdf", "111 question stems from the professor. No answer choices; figure-based items (#25, 27, 29, 31, 33, 53, 55, 66) are missing their images; #10 is blank", "Priority 3"],
    ["M5_2 Prokaryotes.pptx", "45 slides + M5 objectives (viruses, prokaryotes, Your Inner Fish ch 1–3)", "Priority 2"],
    ["M6_1 Protists.pptx", "36 slides + M6 objectives (protists, fungi, Your Inner Fish ch 4–6)", "Priority 2"],
    ["M6_2 Fungi.pptx", "39 slides", "Priority 2"],
    ["M7_1 Plants.pptx", "67 slides + Your Inner Fish ch 7–8 objectives", "Priority 2"],
    ["M8_1 Intro to Animal Diversity.pdf", "59 pages incl. trait table (organism × trait)", "Priority 2"],
    ["M8_2 Invertebrates.pptx", "47 slides; slide 47 lists 22 in-class practice questions", "Priority 2 + 3"],
    ["M10 Human Evolution.pptx", "35 slides; slide 35 holds ~25 practice items (matching + MC)", "Priority 2 + 3"],
    ["Screenshots ×4", "Module 5 & Module 9 objectives + Module 9 to-do (Biology 2e ch 29.1–29.6; Your Inner Fish ch 9–10)", "Priority 2 (objectives)"]
  ],
  questionStyle: [
    ["Definition recall (\"What is a spillover event?\", \"What is a superbug?\")", "~20%", "Know the one-sentence definition of every study-guide term."],
    ["NOT / FALSE / exclusion (\"Which is NOT…\", \"…can be excluded from fungi if it…\")", "~20% (≥22 of 111 stems)", "The professor's favorite pattern. Every option but one is TRUE, so you must know the full set of true features."],
    ["Organism → group identification (\"Which clade best fits this description?\")", "~15%", "Descriptions mix ecology + structure (silica shell → diatom; 2 flagella + cellulose plates + red tide → dinoflagellate)."],
    ["Clinical / real-world scenario (stream water + diarrhea; Africa + insect bite)", "~8%", "Map symptom + transmission → organism → clade (2 steps)."],
    ["Fill-in-two-blanks (\"_____ followed by _____\", \"sporophytes are __, gametophytes are __\")", "~8%", "Order and pairing matter: reversing the pair is the distractor."],
    ["Categorize / match / sort (prokaryote vs eukaryote; disease → organism; flower letters)", "~6%", "Expect drag-into-bins questions on Canvas."],
    ["Sequence / order (taxon ranks; chordate structure order; most recent plant adaptation)", "~5%", "Know the trait 'ladders' in order."],
    ["True/False (\"All animals have true tissues.\")", "~4%", "Absolute words (all, every, never) are usually the trap."],
    ["Photo / figure ID (fern sori, moss, flower diagram)", "~7%", "Know what the visible generation is (moss = gametophyte, fern = sporophyte) and flower parts."],
    ["Select-all (\"select all 3\")", "~2%", "Exact count given; know complete lists."]
  ],
  distractors: [
    ["Swapped pair", "Q51 plasmogamy → karyogamy; Q58 larger/smaller; Q60 diploid/haploid; Q12 hyperthermophile + Archaea", "Say the order out loud: cytoplasm fuses first (plasmogamy), nuclei later (karyogamy)."],
    ["Over-generalized absolute", "Q84 'All animals have true tissues'; Q88 'Every dinosaur species went extinct'; Q41 'All protists are…'", "Hunt for the exception: sponges, birds, and 'eukaryotic' (the only true 'all')."],
    ["True fact, wrong group", "Q98 'NOT unique to mammals' (endothermy is shared with birds); Q100 feature birds do NOT share with theropods; Q52 photosynthesis is shared by plants, algae, cyanobacteria", "Ask: does any OTHER group also have this?"],
    ["Right category, wrong pathogen type", "Q5 antibiotics vs a virus; Q9 prions are protein only; Q43 why causative organism matters", "Antibiotics hit bacteria (peptidoglycan, bacterial ribosomes), never viruses, fungi, or protists."],
    ["Old vs current classification", "Q24 protist 'kingdom'; Q40 'traditionally called protists'; Q1 Baltimore system", "Watch the words 'traditionally' vs 'correct/current'."],
    ["Look-alike names", "hominid/hominin; monocot/eudicot; protostome/deuterostome; endotoxin/exotoxin; hemi-/holometabolous; Lophotrochozoa/Ecdysozoa", "Use the memory hooks in each topic."]
  ],
  priority: [
    ["🔥🔥🔥", "Plant groups × adaptations matrix (M7)", "Study guide gives 20% to one instruction: 'know different types of plants and key adaptations and whether or not that plant has it'. 67 slides; 18 review Qs (#52–77)."],
    ["🔥🔥🔥", "Vertebrate clades & key traits (M9)", "20% of exam, 23 review Qs (#89–111) — the largest single block of review questions. Slides unavailable, so the textbook fills in."],
    ["🔥🔥🔥", "Protist clades, disease & ecology (M6)", "Q24–43 (20 Qs). 'Know groups responsible for diseases or environmentally important.'"],
    ["🔥🔥🔥", "Prokaryote structure, nutrition, ecology (M5)", "Q11–23 (13 Qs) + 8 study-guide terms."],
    ["🔥🔥", "Fungi: structure, life cycle, phyla, roles (M6)", "Q44–51 (8 Qs) + 12 study-guide terms."],
    ["🔥🔥", "Animal body plans & development (M8)", "Many study-guide terms (germ layers, coelom, blastopore). Q78–88."],
    ["🔥🔥", "Viruses & prions (M5)", "Q1, 4–9; objectives only (no slides), so stick to textbook basics."],
    ["🔥🔥", "Human evolution (M10)", "10%; in-class matching items on slide 35."],
    ["🔥", "Invertebrate phyla tour (M8)", "Know groups + examples; 'know new terms'."],
    ["🔥", "Geologic time & mass extinctions", "Terms: Cambrian, Ediacaran, Permian, KT, Mesozoic. Crosses M5, M7, M8."],
    ["Lower", "Taxonomy ranks (M4)", "<5% but easy points (Q2, Q3)."],
    ["Lower", "Your Inner Fish details", "Can appear via objectives (ears/eyes, hernias), but the study guide lists only Tiktaalik and Tetrapod."]
  ],
  missing: [
    "<b>Module 4</b> (taxonomy, <5%): nothing uploaded. Covered from the study guide and review Qs 2, 3, 24 plus standard taxonomy.",
    "<b>Module 5, viruses half</b>: only the objectives screenshot. Your M5_2 file starts at prokaryotes. Viruses content is built from the objectives + OpenStax Biology 2e ch 21. Flagged ⚑ textbook.",
    "<b>Module 9 (20%)</b>: slides not uploaded. Content built from the objectives + Biology 2e ch 29.1–29.6 (your assigned reading) + Your Inner Fish ch 9–10. Flagged ⚑ textbook. If you can export M9 as PDF, send it and I will cross-check.",
    "<b>Image-only slides</b>: ~15 slides contain only figures (e.g. M7 slides 3–5, 11; M8_2 slides 15, 18–19, 26, 31, 39, 45; M10 slides 7, 30, 34). Their text could not be read; topics around them are covered from neighboring slides.",
    "<b>Review question answer choices</b> are not in the PDF (stems only). The answer guide gives the expected answer for each stem; where the choices matter, it says so.",
    "<b>Your Inner Fish</b>: the book itself was not uploaded. Chapter content comes from general knowledge of the book; flagged ⚑ book."
  ],
  discrepancies: [
    ["Mollusca coelom", "M8_1 trait table (p.59) lists Mollusca as <i>pseudocoelomate</i>. M8_2 slide 21 says 'Rotifers and Nematodes are the only pseudocoelomates' and slide 22 calls molluscs the 'earliest coelomates'.", "Go with <b>Mollusca = coelomate</b> (matches M8_2 and the textbook). If a question uses the table, ask."],
    ["When oxygen appeared", "M5_2 slide 9: cyanobacteria raised O₂ starting ~2.6 bya. M7 slide 16: 'Photosynthesis likely 1.6 billion years old (oxygen in atmosphere started)'.", "Textbook value is ~2.4–2.7 bya. Use the M5 framing: cyanobacteria → oxygen revolution (Proterozoic)."],
    ["Hominid vs hominin", "M10 slide 11: 'Hominids (Great Apes)'. Slide 12: 'Hominids include everything following the split with chimpanzees'.", "Standard: <b>hominid</b> = great apes incl. humans; <b>hominin</b> = human lineage after the chimp split. The study guide lists 'Hominin'."],
    ["Dikaryotic", "M6_2 slide 28: 'Dikaryotic: two nuclei in separate cells'. Slide 29: 'contain two distinct haploid nuclei (n+n)'.", "Correct: <b>two haploid nuclei in the same cell</b>, not yet fused (n+n)."],
    ["Permian % lost", "M7 slide 40 and M8_1: '~96% of marine species'. Another M8_1 slide: '~96% of all species'.", "Say ~96% of <b>marine</b> species; largest mass extinction."],
    ["Proterozoic end date", "M8_1: '2.5 billion to 451 million years ago'.", "Typo: the Proterozoic ends ~541 mya (start of the Cambrian)."],
    ["Psychrophile range", "M5_2 slide 12: '-15 to -10 °C (5–50 °F)'. The °C and °F don't match.", "Textbook: about −15 °C to 10 °C. Just know psychrophile = cold-loving."],
    ["Segmented flatworms", "M8_2 slide 16: 'Some [flatworms] are segmented'.", "Tapeworm proglottids are repeated units, not true segmentation. 'True segmentation' questions point to annelids, arthropods, chordates."],
    ["Module weights", "Study guide: 'Animals and plants are each 20%' but also M8 <15% and M9 20%.", "Treat M8 + M9 together as the biggest animal block. Don't skip M8."],
    ["Spelling in study guide", "'Carophyte' = charophyte; 'Carpal' = carpel (flower part, not the wrist bone); 'Homo sapien' = <i>Homo sapiens</i> (review Q2 tests this!); 'Gingko' = Ginkgo.", "Use the correct spellings on the exam."]
  ]
};

/* ------------------------------------------------------- MASTER CHECKLIST */
// [id, module, text, where-in-materials, topicId]
SG.checklist = [
  // Study-guide focus statements
  ["f4", "m4", "FOCUS: Know taxon groups", "Study guide; review Qs 2, 3, 24", "tax"],
  ["f5a", "m5", "FOCUS: Compare traits among major groups (how fungi differ from protists, etc.)", "Study guide; see Trait Matrices", "mx"],
  ["f5b", "m5", "FOCUS: Know groups responsible for diseases or environmentally important", "M5_2 sl.29–35; M6_1 sl.19–35; M6_2 sl.19–22, 36", "pdis"],
  ["f5c", "m6", "FOCUS: Know importance of organisms (uses, environmental impact)", "M5_2 sl.39–45; M6_1 sl.17–24; M6_2 sl.11–23", "pben"],
  ["f5d", "m6", "FOCUS: Know current evolutionary theories (endosymbiosis, virus origins, eukaryote origins)", "M6_1 sl.5–8; M5 objectives", "endo"],
  ["f7", "m7", "FOCUS: Different types of plants, key adaptations, and whether each plant has it", "M7 sl.6, 11–15, 22–65", "mx"],
  ["f8a", "m8", "FOCUS: Know new terms and what they mean", "M8_1 entire; M8_2", "body"],
  ["f8b", "m8", "FOCUS: Know groups of invertebrates", "M8_2 sl.3–46", "inv"],
  ["f9", "m9", "FOCUS: Key evolutionary traits and types of organisms (chordates)", "M9 objectives; Biology 2e ch 29", "chord"],
  ["f10", "m10", "FOCUS: Key evolutionary steps and theories on human evolution", "M10 sl.2–33", "homin"],
  // Terms — column 1
  ["t1", "m6", "Endosymbiotic theory", "M6_1 sl.5–6", "endo"],
  ["t2", "m5", "Peptidoglycan", "M5_2 sl.15, 18–20", "pstruct"],
  ["t3", "m5", "Stromatolite", "M5_2 sl.6, 9; M8_1 Archean", "pevo"],
  ["t4", "m5", "Biofilm", "M5_2 sl.7–8", "pevo"],
  ["t5", "m5", "Cyanobacteria", "M5_2 sl.9–10; M6_1 sl.21", "pevo"],
  ["t6", "m5", "Microflora", "M5_2 sl.44; M6_2 sl.20–21", "pben"],
  ["t7", "m6", "Plastid", "M6_1 sl.5–6 (chloroplast = plastid)", "endo"],
  ["t8", "m5", "Capsid", "Viruses (objectives only) ⚑ textbook", "virus"],
  ["t9", "m5", "Envelope", "Viruses ⚑ textbook", "virus"],
  ["t10", "m5", "Baltimore classification", "Viruses ⚑ textbook; review Q1", "virus"],
  ["t11", "m5", "Spillover", "Viruses ⚑ textbook; review Q7", "vdis"],
  ["t12", "m6", "Hyphae", "M6_2 sl.3, 6–10, 16", "fungi"],
  ["t13", "m6", "Chitin", "M6_2 sl.3, 6, 35; M8_2 sl.35", "fungi"],
  ["t14", "m6", "Mycelium", "M6_2 sl.7–8", "fungi"],
  ["t15", "m6", "Decomposer", "M6_2 sl.11–12; M5_2 sl.40", "fecol"],
  ["t16", "m6", "Mycorrhiza", "M6_2 sl.14–16; M7 sl.17", "fecol"],
  ["t17", "m6", "Lichen", "M6_2 sl.18; M6_1 sl.31; M7 sl.7", "fecol"],
  ["t18", "m6", "Plasmogamy", "M6_2 sl.28–30", "frep"],
  ["t19", "m6", "Karyogamy", "M6_2 sl.28–30; M6_1 sl.7", "frep"],
  ["t20", "m6", "Chytridiomycota", "M6_2 sl.36", "fphyla"],
  ["t21", "m6", "Zygomycota", "M6_2 sl.37", "fphyla"],
  ["t22", "m6", "Ascomycota", "M6_2 sl.39, 10, 22", "fphyla"],
  ["t23", "m6", "Basidiomycota", "M6_2 sl.38", "fphyla"],
  ["t24", "m5", "Heterotroph", "M5_2 sl.25–26; M6_2 sl.3, 5", "pnut"],
  ["t25", "m5", "Autotroph", "M5_2 sl.25", "pnut"],
  ["t26", "m7", "Charophyte (study guide: 'Carophyte')", "M7 sl.6, 9; M6_1 sl.12", "porig"],
  ["t27", "m7", "Bryophyte", "M7 sl.6, 12, 22–29", "bryo"],
  ["t28", "m7", "Lycophyte", "M7 sl.6, 36, 42", "bryo"],
  ["t29", "m7", "Monilophyte", "M7 sl.6, 32, 38", "bryo"],
  ["t30", "m6", "Archaeplastida", "M6_1 sl.12, 31; M7 sl.7", "pgroups"],
  // column 4
  ["t31", "m7", "Gymnosperm", "M7 sl.14, 39–49", "gymno"],
  ["t32", "m7", "Angiosperm", "M7 sl.15, 50–65", "angio"],
  ["t33", "m7", "Conifer, Cycad, Ginkgo", "M7 sl.47", "gymno"],
  ["t34", "m7", "Alternation of generations", "M7 sl.20–21", "porig"],
  ["t35", "m7", "Sporophyte", "M7 sl.20–21, 38, 46", "porig"],
  ["t36", "m7", "Gametophyte", "M7 sl.20–21, 25–28, 46", "porig"],
  ["t37", "m8", "Cambrian (explosion)", "M8_1 Cambrian slides", "anim"],
  ["t38", "m8", "Ediacaran", "M8_1 Proterozoic / first animals", "anim"],
  ["t39", "m8", "Permian extinction", "M7 sl.40–42; M8_1; M5_2 sl.13", "anim"],
  ["t40", "m8", "KT extinction", "M8_1 K-T slide", "anim"],
  ["t41", "m7", "Co-evolution", "M7 sl.64–65; M8_1 (arthropods & plants)", "angio"],
  ["t42", "m7", "Mesozoic", "M7 sl.43; M8_1", "gymno"],
  ["t43", "m7", "Eudicot", "M7 sl.52–53", "angio"],
  ["t44", "m7", "Dicot", "M7 sl.52–54", "angio"],
  ["t45", "m7", "Stamen", "M7 sl.55–56", "angio"],
  ["t46", "m7", "Carpel (study guide: 'Carpal')", "M7 sl.55, 57", "angio"],
  ["t47", "m7", "Cellulose", "M7 sl.8–9; M5_2 sl.18", "porig"],
  ["t48", "m8", "Metazoa", "M8_1 phylogeny", "body"],
  ["t49", "m8", "Parazoa", "M8_1 'no true tissues' (sponges) ⚑ term not on slides", "body"],
  ["t50", "m8", "Eumetazoa", "M8_1; M8_2 sl.7", "body"],
  ["t51", "m8", "Bilateria", "M8_2 sl.11", "body"],
  ["t52", "m8", "Radiata", "M8_1 symmetry ⚑ term not on slides", "body"],
  ["t53", "m8", "Deuterostomia", "M8_1; M8_2 sl.13, 43–46", "body"],
  ["t54", "m8", "Lophotrochozoa", "M8_2 sl.14–29", "inv"],
  // column 5
  ["t55", "m8", "Acoelomates", "M8_1; M8_2 sl.16, 20–21", "body"],
  ["t56", "m8", "Ecdysozoa", "M8_2 sl.14, 32–42", "inv"],
  ["t57", "m8", "Protostomia", "M8_1; M8_2 sl.13–14", "body"],
  ["t58", "m8", "Holometabolous", "M8_2 sl.38", "inv"],
  ["t59", "m8", "Hemimetabolous", "M8_2 sl.38", "inv"],
  ["t60", "m8", "Cephalization", "M8_1; M8_2 sl.11–12", "body"],
  ["t61", "m8", "Gastrulation", "M8_1 'Creation of tissues'", "body"],
  ["t62", "m8", "Blastula", "M8_1", "body"],
  ["t63", "m8", "Blastopore", "M8_1 'Fate of the blastopore'", "body"],
  ["t64", "m8", "Diploblastic", "M8_1; M8_2 sl.7", "body"],
  ["t65", "m8", "Triploblastic", "M8_1; M8_2 sl.11", "body"],
  ["t66", "m8", "Endoderm", "M8_1 germ layers", "body"],
  ["t67", "m8", "Ectoderm", "M8_1 germ layers", "body"],
  ["t68", "m8", "Mesoderm", "M8_1 germ layers", "body"],
  ["t69", "m8", "Coelom", "M8_1; M8_2 sl.20–21", "body"],
  ["t70", "m8", "Pseudocoelomate", "M8_1; M8_2 sl.20–21, 28, 33", "body"],
  ["t71", "m8", "Eucoelomate", "M8_1", "body"],
  ["t72", "m8", "Cleavage", "M8_1 'Creation of tissues', protostome/deuterostome", "body"],
  ["t73", "m8", "Echinoderm", "M8_2 sl.44", "inv"],
  ["t74", "m8", "Cnidaria", "M8_2 sl.7–10", "inv"],
  ["t75", "m8", "Arthropod", "M8_2 sl.34–40", "inv"],
  ["t76", "m9", "Chordates", "M8_2 sl.46; M9", "chord"],
  ["t77", "m9", "Lancelets", "M8_2 sl.46; M9 ⚑ textbook", "chord"],
  ["t78", "m9", "Tunicates", "M8_2 sl.46; M9 ⚑ textbook", "chord"],
  ["t79", "m9", "Jawless fish", "M9 ⚑ textbook; review Q93", "chord"],
  // column 6
  ["t80", "m9", "Chondrichthyes", "M9 ⚑ textbook", "chord"],
  ["t81", "m9", "Bony fish", "M9 ⚑ textbook; review Q92", "chord"],
  ["t82", "m9", "Amphibians", "M9 ⚑ textbook; review Q103–105", "tetra"],
  ["t83", "m9", "Reptiles", "M9 ⚑ textbook; review Q100–102", "tetra"],
  ["t84", "m9", "Marsupials", "M9 ⚑ textbook; M10 sl.35", "mammal"],
  ["t85", "m9", "Monotremes", "M9 ⚑ textbook; M10 sl.35", "mammal"],
  ["t86", "m9", "Eutherians / placentals", "M9 ⚑ textbook; M10 sl.35", "mammal"],
  ["t87", "m9", "Amniote / amniotic egg", "M9 ⚑ textbook; M8_1 (land vertebrates)", "tetra"],
  ["t88", "m9", "Notochord", "M9 ⚑ textbook", "chord"],
  ["t89", "m9", "Postanal tail", "M9 ⚑ textbook", "chord"],
  ["t90", "m9", "Pharyngeal slits", "M9 ⚑ textbook", "chord"],
  ["t91", "m9", "Nerve cord (dorsal, hollow)", "M9 ⚑ textbook", "chord"],
  ["t92", "m9", "Tiktaalik", "Your Inner Fish ch 1–3 (M5 objectives) ⚑ book", "chord"],
  ["t93", "m9", "Tetrapod", "M8_1 (land vertebrates); M9 ⚑ textbook", "tetra"],
  ["t94", "m10", "Hominin", "M10 sl.12–21", "homin"],
  ["t95", "m10", "Ape", "M10 sl.11–14", "primate"],
  ["t96", "m10", "Bipedal", "M10 sl.14–18", "homin"],
  ["t97", "m10", "Homo sapiens (study guide: 'Homo sapien')", "M10 sl.21; review Q2", "homin"],
  ["t98", "m10", "Neanderthal", "M10 sl.19–29", "homin"],
  ["t99", "m10", "Denisovan", "M10 sl.21–26", "homin"]
];

/* ------------------------------------------------------- 4-DAY PLAN */
SG.plan = [
  {
    day: 1, title: "Build the foundation: microbes (M4, M5, M6)",
    why: "M5 + M6 is the biggest block (<30%) with the most terms and the most review questions (#1–51). Learning it first gives it 3 more days of spaced review.",
    blocks: [
      ["0:00–0:15", "Warm-up", "Skim the Exam Content Map and the Trait Matrices tab. Don't memorize yet; just see the shape."],
      ["0:15–1:05", "Learn", "Study: Taxonomy → Viruses (both topics) → Prokaryote evolution. Do each topic's Active Recall questions out loud before moving on."],
      ["1:05–1:15", "Break", "Walk away from the screen."],
      ["1:15–2:05", "Learn", "Study: Prokaryote structure, nutrition, disease, benefits."],
      ["2:05–2:25", "Retrieve", "Flashcards: M4 + M5 (shuffle). Mark the hard ones."],
      ["2:25–2:40", "Break", ""],
      ["2:40–3:40", "Learn", "Study: Endosymbiosis → Protist supergroups → Protist disease & ecology → all 4 Fungi topics."],
      ["3:40–4:00", "Practice", "Practice tab: M5 + M6, Levels 2–3."],
      ["4:00–4:20", "Checkpoint", "Day 1 Checkpoint (15 Qs). Read every explanation, even for the ones you got right."]
    ],
    recall: "Without notes: draw the eukaryote supergroup tree; list 4 nutrition modes with an example of each; write the fungal life cycle with plasmogamy and karyogamy in order.",
    checkpoint: "c1"
  },
  {
    day: 2, title: "Complete the content: plants & animals (M7, M8, M9)",
    why: "Plants (20%) and vertebrates (20%) are the two heaviest single modules. Both are 'trait ladder' topics, so learn them as ordered steps rather than lists.",
    blocks: [
      ["0:00–0:20", "Spaced review", "Flashcards: Day 1 hard cards only. Then 10 rapid-fire practice Qs from M5/M6."],
      ["0:20–1:30", "Learn", "Study all 4 plant topics. Then fill in the plant matrix from memory and check it."],
      ["1:30–1:40", "Break", ""],
      ["1:40–2:30", "Learn", "Study: Animal origins & extinctions → Body plans → Invertebrate tour."],
      ["2:30–2:45", "Break", ""],
      ["2:45–3:45", "Learn", "Study: Chordates & fishes → Tetrapods/amniotes/birds → Mammals → Your Inner Fish (eyes & ears)."],
      ["3:45–4:05", "Retrieve", "Flashcards: M7 + M8 + M9."],
      ["4:05–4:30", "Checkpoint", "Day 2 Checkpoint (20 Qs)."]
    ],
    recall: "Without notes: draw the plant ladder (embryo → vascular → seeds/pollen → flowers/fruit); draw the animal tree with the trait at each node; build the vertebrate cladogram from notochord to hair.",
    checkpoint: "c2"
  },
  {
    day: 3, title: "Application + weak areas (M10, professor questions, Mock A)",
    why: "Finish the last module, then switch from learning to applying. The 111 review questions are the closest thing to the real exam.",
    blocks: [
      ["0:00–0:40", "Learn", "Study: Primates → Hominins & human evolution."],
      ["0:40–1:30", "Professor Qs", "Review Qs tab: answer all 111 stems out loud before revealing. Star the ones you hesitate on."],
      ["1:30–1:45", "Break", ""],
      ["1:45–2:45", "Exam sim", "Mock Exam A (40 Qs, 50 min, timed). No notes."],
      ["2:45–3:00", "Break", ""],
      ["3:00–3:45", "Fix", "Weak Areas tab: work through the error log. Re-study the 2 weakest topics; re-do their Active Recall."],
      ["3:45–4:15", "Checkpoint", "Day 3 Checkpoint (30 mixed Qs, weighted toward your misses)."]
    ],
    recall: "Explain why amphibians are vulnerable, why moss is short, why fungi have chitin, why antibiotics don't work on viruses. Each in 30 seconds without notes.",
    checkpoint: "c3"
  },
  {
    day: 4, title: "Exam simulation + final review (no new material)",
    why: "Consolidate. Retrieval beats rereading.",
    blocks: [
      ["0:00–0:50", "Exam sim", "Mock Exam B (40 Qs, 50 min)."],
      ["0:50–1:05", "Break", ""],
      ["1:05–1:50", "Fix", "Error log: re-attempt every missed question. Re-read only the explanations."],
      ["1:50–2:30", "Cram", "Cram Sheet, top to bottom, twice. Cover each table and recite it."],
      ["2:30–2:45", "Final check", "Final Night Checklist. Anything you can't tick goes into one last 10-min flashcard round."],
      ["Night", "Sleep", "Sleep consolidates memory. Don't pull an all-nighter."]
    ],
    recall: "Final Night Checklist.",
    checkpoint: null
  }
];

/* ------------------------------------------------------- TRAIT MATRICES */
SG.matrices = [
  {
    id: "plants", title: "Plant groups × adaptations", note: "The study guide's exact instruction for M7. ✔ = has it, ✘ = lacks it. Read across a row (what does a fern have?) and down a column (who has seeds?).",
    head: ["", "Charophytes (green algae)", "Bryophytes (moss, liverwort, hornwort)", "Lycophytes + Monilophytes (club moss; ferns, horsetails)", "Gymnosperms (conifers, cycads, Ginkgo, gnetophytes)", "Angiosperms (monocots, eudicots)"],
    rows: [
      ["Chlorophyll a & b, cellulose walls", "✔", "✔", "✔", "✔", "✔"],
      ["Multicellular dependent embryo (embryophyte)", "✘", "✔", "✔", "✔", "✔"],
      ["Alternation of generations", "✘ (not like plants)", "✔", "✔", "✔", "✔"],
      ["Vascular tissue (xylem, phloem) + lignin", "✘", "✘", "✔", "✔", "✔"],
      ["True roots", "✘", "✘ (rhizoids only)", "✔", "✔", "✔"],
      ["Seeds", "✘", "✘", "✘ (spores)", "✔ 'naked' (not in ovary)", "✔ enclosed in ovary → fruit"],
      ["Pollen (no swimming sperm needed)", "✘", "✘", "✘", "✔ wind", "✔ wind or ~80% animals"],
      ["Needs water for fertilization", "✔", "✔ (flagellated sperm)", "✔ (flagellated sperm)", "✘", "✘"],
      ["Flowers & fruit", "✘", "✘", "✘", "✘ (cones / strobili)", "✔"],
      ["Double fertilization (3n endosperm)", "✘", "✘", "✘", "✘", "✔"],
      ["Dominant generation", "—", "Gametophyte (the green moss)", "Sporophyte (the fern frond)", "Sporophyte (the tree)", "Sporophyte (the plant)"],
      ["Order of appearance", "Ancestor", "1st (late Silurian)", "2nd (lignin ~450 mya)", "3rd (dominant in Mesozoic)", "4th (most recent; most species)"]
    ]
  },
  {
    id: "animals", title: "Invertebrate phyla × body-plan traits", note: "Rebuilt from the M8_1 trait table (p.59). Mollusca is shown as coelomate per M8_2 (see Source Conflicts).",
    head: ["Phylum", "True tissues", "Symmetry", "Germ layers", "Body cavity", "Blastopore →", "Clade", "Examples"],
    rows: [
      ["Porifera", "✘", "None", "None", "None", "—", "Parazoa (basal)", "Sponges"],
      ["Cnidaria", "✔", "Radial", "Diploblastic", "None (gut only)", "—", "Eumetazoa ('Radiata')", "Jellyfish, coral, anemone, Hydra"],
      ["Platyhelminthes", "✔", "Bilateral", "Triploblastic", "Acoelomate", "Mouth", "Lophotrochozoa", "Planaria, tapeworm, fluke"],
      ["Rotifera", "✔", "Bilateral", "Triploblastic", "Pseudocoelomate", "Mouth", "Lophotrochozoa", "Rotifers (bdelloids)"],
      ["Mollusca", "✔", "Bilateral", "Triploblastic", "Coelomate", "Mouth", "Lophotrochozoa", "Snail, clam, squid, octopus"],
      ["Annelida", "✔", "Bilateral (segmented)", "Triploblastic", "Coelomate", "Mouth", "Lophotrochozoa", "Earthworm, leech, polychaete"],
      ["Nematoda", "✔", "Bilateral", "Triploblastic", "Pseudocoelomate", "Mouth", "Ecdysozoa (molts)", "Roundworms, C. elegans, Trichinella, heartworm"],
      ["Arthropoda", "✔", "Bilateral (segmented)", "Triploblastic", "Coelomate", "Mouth", "Ecdysozoa (molts)", "Insects, spiders, crabs, centipedes"],
      ["Echinodermata", "✔", "Bilateral larva → radial adult", "Triploblastic", "Coelomate", "Anus", "Deuterostomia", "Sea star, urchin, sea cucumber"],
      ["Chordata", "✔", "Bilateral", "Triploblastic", "Coelomate", "Anus", "Deuterostomia", "Tunicates, lancelets, vertebrates"]
    ]
  },
  {
    id: "verts", title: "Chordate / vertebrate cladogram traits", note: "Each row adds a trait that every group below it inherits (a 'shared derived character'). ⚑ textbook (Biology 2e ch 29).",
    head: ["Group", "New trait at this node", "Examples / notes"],
    rows: [
      ["Chordata", "Notochord, dorsal hollow nerve cord, pharyngeal slits, post-anal tail (+ endostyle)", "Tunicates (only larva shows all 4), lancelets (all 4 as adults)"],
      ["Craniata", "Cranium (skull) + neural crest", "Hagfishes"],
      ["Vertebrata", "Vertebral column", "Lampreys (with hagfishes = jawless fish / cyclostomes)"],
      ["Gnathostomata", "Hinged jaws (from gill arches) + paired fins", "Sharks, bony fish, tetrapods"],
      ["Osteichthyes", "Bony skeleton, swim bladder / lungs, operculum", "Ray-finned fish; lobe-finned fish (coelacanth, lungfish)"],
      ["Tetrapoda", "Four limbs with digits; neck; walk on land", "Amphibians; Tiktaalik is the fish→tetrapod transition"],
      ["Amniota", "Amniotic egg (amnion, chorion, allantois, yolk sac)", "Reptiles (incl. birds), mammals"],
      ["Mammalia", "Hair, mammary glands, 3 middle-ear bones", "Monotremes, marsupials, eutherians"],
      ["Aves (inside Reptilia)", "Feathers, hollow bones, beak, wishbone (furcula is shared with theropods)", "Birds = living theropod dinosaurs"]
    ]
  },
  {
    id: "microbes", title: "The 'how do they differ?' table: viruses → fungi", note: "Answers the study-guide line 'compare traits among major groups (how do fungi differ from protists, etc.)'.",
    head: ["Trait", "Viruses", "Bacteria", "Archaea", "Protists", "Fungi"],
    rows: [
      ["Cellular?", "✘ (not cells)", "✔ prokaryote", "✔ prokaryote", "✔ eukaryote", "✔ eukaryote"],
      ["Nucleus", "✘", "✘ (nucleoid)", "✘ (nucleoid)", "✔", "✔"],
      ["Wall material", "Capsid (protein coat), no wall", "Peptidoglycan", "No peptidoglycan (varied)", "Varies / none (diatom: silica; dino: cellulose)", "Chitin"],
      ["Nutrition", "Hijack host", "All 4 modes", "Many (methanogens, extremophiles)", "Photo-, hetero- & mixotrophs", "Absorptive heterotrophs (secrete enzymes outside)"],
      ["Reproduction", "Replicate inside host", "Binary fission + horizontal gene transfer", "Binary fission", "Binary fission / sexual / both", "Spores (sexual + asexual)"],
      ["Key disease examples", "Flu, HIV, COVID-19, measles", "Plague, TB, cholera, typhoid, Lyme", "None known", "Malaria, giardiasis, Chagas, amoebic dysentery, red tide", "Bd (frogs), ringworm, thrush, ergotism, white-nose (bats)"],
      ["Treated by", "Vaccines, antivirals", "Antibiotics", "—", "Antiparasitic drugs", "Antifungals"],
      ["Key ecological role", "Gene transfer; population control", "Decomposers, N-fixation, O₂ (cyanobacteria)", "Extreme habitats; methane", "~30% of photosynthesis; base of marine food web", "Main land decomposers; mycorrhizae"]
    ]
  }
];

/* ------------------------------------------------------- DIAGRAMS (ladders / cycles) */
SG.diagrams = {
  plantLadder: [
    ["Charophyte ancestor", "Green alga; cellulose rings, flagellated sperm, chlorophyll a+b"],
    ["EMBRYO → land plants (embryophytes)", "Bryophytes: moss, liverwort, hornwort. Gametophyte dominant"],
    ["VASCULAR TISSUE + LIGNIN", "Lycophytes & monilophytes. Sporophyte dominant, still swimming sperm"],
    ["SEEDS + POLLEN", "Gymnosperms. No water needed for fertilization; gametophyte inside the sporophyte"],
    ["FLOWERS + FRUIT (+ double fertilization)", "Angiosperms. Most recent adaptation; ~290,000 species"]
  ],
  animalLadder: [
    ["Multicellularity (choanoflagellate-like ancestor)", "Porifera: no true tissues"],
    ["TRUE TISSUES (Eumetazoa)", "Cnidaria: radial, diploblastic, nematocysts"],
    ["BILATERAL SYMMETRY + MESODERM (Bilateria)", "Cephalization; triploblastic"],
    ["BODY CAVITY (coelom; pseudo/acoelomate are derived losses)", "Most bilaterians"],
    ["PROTOSTOME vs DEUTEROSTOME split", "Protostomes: Lophotrochozoa + Ecdysozoa. Deuterostomes: echinoderms + chordates"]
  ],
  fungalCycle: [
    "Haploid (n) mycelium",
    "PLASMOGAMY: cytoplasm of 2 compatible mating types fuses",
    "Dikaryotic (n+n) mycelium: 2 nuclei per cell, can last years",
    "KARYOGAMY: nuclei fuse → diploid zygote (2n)",
    "MEIOSIS → haploid recombinant spores",
    "Spores germinate → new haploid mycelium"
  ],
  altGen: [
    "Sporophyte (2n, multicellular)",
    "MEIOSIS in sporangium → spores (n)",
    "Spore grows by MITOSIS → gametophyte (n, multicellular)",
    "Gametophyte makes gametes by MITOSIS (eggs in archegonia, sperm in antheridia)",
    "FERTILIZATION → zygote (2n)",
    "Zygote grows (embryo kept in parent) → sporophyte"
  ]
};

/* ------------------------------------------------------- BIG-PICTURE CONNECTIONS */
SG.connections = [
  ["Cyanobacteria → O₂ revolution → mass extinction of anaerobes → aerobic life possible → endosymbiosis of an α-proteobacterium → mitochondria → eukaryotes", "M5 → M6 → M8 (Proterozoic)"],
  ["Ancestral cyanobacterium → primary endosymbiosis → chloroplast (plastid) → Archaeplastida (red algae, green algae, land plants)", "M5 → M6 → M7"],
  ["Chitin: fungal cell walls = arthropod exoskeletons. Both are 'tough sugar polymer' solutions; fungi are closer relatives of animals than of plants (Opisthokonta)", "M6 ↔ M8"],
  ["Choanoflagellates (protists) ↔ sponge collar cells (choanocytes) → common ancestor of animals", "M6 ↔ M8"],
  ["Mycorrhizal fungi + bacteria (N, P) → plants could colonize land → land habitat → arthropods, then tetrapods follow", "M6 → M7 → M8 → M9"],
  ["Lignin evolves → vascular plants grow tall → Carboniferous swamp forests → little lignin decay (until basidiomycete fungi evolved) → COAL", "M7 ↔ M6"],
  ["Permian extinction (volcanism; methanogens may have contributed) → drying climate → seedless trees lost → gymnosperms + reptiles radiate (Mesozoic)", "M5 → M7 → M8 → M9"],
  ["KT asteroid (iridium layer) → non-avian dinosaurs extinct (birds survive) → mammals radiate (Cenozoic)", "M8 → M9 → M10"],
  ["Water dependence ladder: swimming sperm (bryophytes, ferns) ↔ amphibian eggs in water. Seeds/pollen ↔ amniotic egg. Both 'freed reproduction from water' and both radiated after the Permian", "M7 ↔ M9"],
  ["Antibiotic overuse → selection for resistant bacteria (plasmids spread resistance by conjugation) → superbugs (MRSA, MDR-TB). Antibiotics never work on viruses, protists or fungi", "M5 (+ M6)"],
  ["Spillover: virus evolves (mutation/recombination) in an animal reservoir → jumps to humans. Same logic as Bd chytrid spreading via amphibian trade to naïve populations", "M5 ↔ M6"],
  ["Gill arches (fish) → jaws (gnathostomes) → middle-ear bones (mammals: malleus + incus from the jaw joint, stapes from the 2nd arch)", "M9 (Your Inner Fish ch 4–5, 10)"],
  ["Hox genes: control segmentation and appendages (arthropods) and head-to-tail body plans in all bilaterians; sponges lack Hox genes", "M8 ↔ Your Inner Fish ch 6"],
  ["Protostome/deuterostome: chordates (us) and echinoderms (sea stars) are both deuterostomes, so a sea star is more closely related to you than a squid is", "M8 → M9"],
  ["Coevolution: angiosperm flowers ↔ animal pollinators (bilateral flowers → specialization → speciation). Herbivory ↔ plant defenses", "M7 ↔ M8"]
];

/* ------------------------------------------------------- CRAM SHEET */
SG.cram = [
  { h: "Taxonomy", items: [
    "Domain → Kingdom → Phylum → Class → Order → Family → Genus → Species (Dear King Philip Came Over For Good Soup). Most diverse → least.",
    "Binomial: <i>Homo sapiens</i>: Genus capitalized, species lowercase, italic. Never 'Homo sapien'.",
    "3 domains: Bacteria, Archaea (both prokaryotes), Eukarya. Archaea share a more recent ancestor with Eukarya.",
    "'Protista' is NOT a valid taxon (paraphyletic/polyphyletic). 'Protist' = informal name for eukaryotes that aren't plants, fungi or animals."
  ]},
  { h: "Viruses & prions ⚑ textbook", items: [
    "Virion = nucleic acid (DNA or RNA) + capsid (protein coat) + envelope (lipid; only some).",
    "Origins: progressive/escape (escaped host genes), regressive/reduction (degenerate cells), virus-first (pre-cells).",
    "Baltimore classification sorts VIRUSES by genome type + how they make mRNA (7 groups).",
    "Spillover = a pathogen jumps from an animal reservoir to a new host (us). Driven by viral evolution.",
    "Fight viruses with vaccines + antivirals, NOT antibiotics. Virus-based therapies: gene therapy, phage therapy, oncolytic viruses.",
    "Prions = misfolded PROTEIN only (no DNA/RNA): mad cow disease, CJD."
  ]},
  { h: "Prokaryotes", items: [
    "Oldest life (~3.5–3.8 bya). Stromatolites = fossilized microbial mats. Cyanobacteria → atmospheric O₂ (~2.6 bya).",
    "Bacteria: peptidoglycan wall, streptomycin-sensitive. Archaea: NO peptidoglycan, ether lipids, extremophiles, methanogens.",
    "Gram + = thick peptidoglycan, PURPLE. Gram − = thin peptidoglycan + outer LPS membrane, PINK, harder to kill, endotoxins.",
    "Exotoxin = secreted protein (cholera). Endotoxin = LPS released when Gram − cells die (Salmonella).",
    "Horizontal gene transfer: transformation (environment DNA), transduction (phage), conjugation (pilus).",
    "Photo-/chemo- = ENERGY source. Auto-/hetero- = CARBON source (CO₂ vs organic).",
    "Hyperthermophile = 80–122 °C → most likely Archaea. Halophile = salt. Acidophile = pH ≤3.",
    "Primary ecological role = DECOMPOSITION. Also N-fixation (N₂ → NH₃). Bioremediation = microbes clean pollutants (Exxon Valdez).",
    "Superbug = antibiotic-resistant bacteria. Caused by misuse, livestock use, pollution, unfinished courses.",
    "Plague = <i>Yersinia pestis</i>; typhoid = <i>Salmonella</i> Typhi; TB/leprosy = mycobacteria; syphilis/Lyme = spirochetes."
  ]},
  { h: "Protists", items: [
    "Endosymbiosis: mitochondria ← α-proteobacteria; chloroplasts ← cyanobacteria. Evidence: own DNA, own tRNA/genetic code, host genome can't build them.",
    "Excavata: Giardia (stream water → diarrhea), Trichomonas (STD), Trypanosoma (insect vector → Chagas / sleeping sickness), Euglena.",
    "Alveolates: dinoflagellates (red tide, coral symbionts), apicomplexans (Plasmodium → malaria via mosquito), ciliates.",
    "Stramenopiles: diatoms (silica shells, up to ½ of O₂), brown algae / kelp.",
    "Archaeplastida: red algae, green algae, land plants. Charophytes = closest relatives of land plants.",
    "Unikonta: Amoebozoa (slime molds, Entamoeba → amoebic dysentery) + Opisthokonta (choanoflagellates, fungi, animals)."
  ]},
  { h: "Fungi", items: [
    "Absorptive heterotrophs: secrete exoenzymes, then absorb. Chitin walls. Store glycogen. Closer to animals than to plants.",
    "Hyphae → mycelium (huge surface area). Septate vs coenocytic (no septa).",
    "PLASMOGAMY (cytoplasm fuses → dikaryon n+n) THEN KARYOGAMY (nuclei fuse → 2n zygote) → meiosis → spores.",
    "Chytrids: flagellated spores; Bd → amphibian decline. Zygomycota: zygosporangium, bread mold. Ascomycota: sac (asci), yeast, morels, truffles, ergot, white-nose. Basidiomycota: mushrooms, best at lignin, rusts/smuts.",
    "Mycorrhizae = mutualism (fungus gives P/minerals, plant gives sugar). Lichen = fungus + alga/cyanobacterium (photosynthesizer supplies carbon)."
  ]},
  { h: "Plants", items: [
    "Ladder: embryo → vascular tissue (lignin) → seeds + pollen → flowers + fruit.",
    "Sporophyte 2n makes spores by MEIOSIS. Gametophyte n makes gametes by MITOSIS.",
    "Bryophytes: gametophyte dominant, short (no vascular tissue), swimming sperm, rhizoids. Ferns: sporophyte dominant, sori under leaves, swimming sperm.",
    "Trend: sporophyte gets LARGER & more independent; gametophyte gets SMALLER & dependent.",
    "Seeds: multicellular, dormant, stored food, dispersed far (vs spores). Gymnosperm = naked seeds, cones (♂ pollen, ♀ ovule). Angiosperm = seeds in ovary → fruit.",
    "Flower: sepal, petal, stamen (anther + filament) ♂, carpel (stigma, style, ovary + ovules) ♀. Double fertilization → 2n zygote + 3n endosperm.",
    "Monocot: 1 cotyledon, parallel veins, scattered bundles, fibrous roots, parts in 3s. Eudicot: 2, net veins, ring, taproot, 4s/5s."
  ]},
  { h: "Animals", items: [
    "Animals: multicellular heterotrophs that INGEST, no cell walls (collagen), nerves + muscle, diploid-dominant. Ancestor: choanoflagellate-like.",
    "Ediacaran (~600 mya) soft-bodied → Cambrian explosion (adaptive radiation, predation, hard parts, bilaterians, trilobites).",
    "Permian (252 mya): volcanism, ~96% marine species, largest. KT (66 mya): asteroid, iridium, Chicxulub, dinosaurs except birds → mammals radiate.",
    "Cleavage → blastula → gastrulation → gastrula with germ layers. Diploblastic = ecto + endo (Cnidaria). Triploblastic = + mesoderm (all Bilateria).",
    "Coelom lined fully by mesoderm. Pseudocoelom = only body wall lined (nematodes, rotifers). Acoelomate = flatworms.",
    "Protostome: blastopore → MOUTH, spiral + determinate cleavage, coelom from split mesoderm. Deuterostome: blastopore → ANUS, radial + indeterminate, coelom from archenteron pouches.",
    "Ecdysozoa molt (nematodes, arthropods, tardigrades). Lophotrochozoa (flatworms, rotifers, molluscs, annelids).",
    "Holometabolous: egg → larva → PUPA → adult. Hemimetabolous: egg → nymph → adult."
  ]},
  { h: "Chordates ⚑ textbook", items: [
    "4 chordate traits: notochord, dorsal hollow nerve cord, pharyngeal slits, post-anal tail.",
    "Lancelets look most like the earliest chordates. Tunicate larvae show the traits; adults lose most.",
    "Jawless (hagfish, lamprey) → jaws + paired fins → Chondrichthyes (cartilage, no swim bladder, oily liver) / bony fish (swim bladder for buoyancy).",
    "Tiktaalik: ~375 mya fish with neck, wrist bones, lungs + gills. Fish → tetrapod transition.",
    "Amphibians: non-amniotic eggs in water, thin permeable skin (gas exchange) → vulnerable to pollution and Bd.",
    "Amniotic egg = key to dry land: reptiles (incl. birds), mammals. NOT amphibians.",
    "Birds: feathers unique; share hollow bones, furcula, 3-fingered hands, brooding with theropods. Theropods had TEETH, birds have beaks.",
    "Mammals: hair + mammary glands + 3 middle-ear bones (unique). Endothermy and 4-chambered heart are shared with birds.",
    "Monotremes lay eggs (platypus, echidna). Marsupials have pouches (kangaroo). Eutherians have a long placenta (humans)."
  ]},
  { h: "Human evolution", items: [
    "Primates: grasping hands/feet, stereoscopic vision, nails, big brains, one offspring, rotating shoulder.",
    "Prosimians → anthropoids (New World: wide nostrils, prehensile tails; Old World: narrow downward nostrils, buttock pads, non-prehensile tails) → hominoids (apes, no tail).",
    "Closest living relatives: chimpanzees & bonobos. Hominin = human lineage after the chimp split.",
    "Order: bipedalism FIRST (Ardi 4.4 mya facultative; Lucy 3+ mya fully bipedal, chimp-sized brain), big brain LATER.",
    "Homo erectus ~2 mya, ~900 cc, widespread. H. naledi ~300 kya, small. Neanderthals in Eurasia before H. sapiens arrived.",
    "Non-Africans carry 1–4% Neanderthal DNA (interbreeding after leaving Africa). Only humans, Neanderthals and Denisovans have sequenced genomes. Denny = Neanderthal mother + Denisovan father.",
    "Skin color balances folate (UV destroys it → dark skin near the equator) vs vitamin D (needs UV → light skin at high latitudes). Lactase persistence: a single mutation, selected by dairying, <20,000 yrs."
  ]}
];

/* ------------------------------------------------------- FINAL NIGHT CHECKLIST */
SG.finalCheck = [
  "Can recite the 8 taxonomic ranks in order and write <i>Homo sapiens</i> correctly",
  "Can name the 3 parts of a virion and the 3 hypotheses of virus origin",
  "Can explain why antibiotics don't work on viruses (and what does)",
  "Can distinguish Gram + from Gram − (wall, color, LPS, treatment)",
  "Can distinguish exotoxin from endotoxin with an example of each",
  "Can name the 4 nutrition modes and what 'photo/chemo' vs 'auto/hetero' refer to",
  "Can explain endosymbiotic theory and list 3 pieces of evidence",
  "Can place diatoms, dinoflagellates, Plasmodium, Giardia, Trypanosoma, slime molds and choanoflagellates in their clades",
  "Can match each disease to its organism type (virus, bacterium, protist, fungus, prion)",
  "Can draw the fungal life cycle with plasmogamy before karyogamy",
  "Can give one unique feature per fungal phylum (chytrid, zygo, asco, basidio)",
  "Can fill in the plant matrix from memory (embryo, vascular, seed, pollen, flower, fruit, water, dominant generation)",
  "Can explain why moss is short and why mosses and ferns need water to reproduce",
  "Can label sepal, petal, anther, filament, stigma, style, ovary, ovule",
  "Can explain double fertilization and what a fruit is",
  "Can distinguish monocots from eudicots on 4 traits",
  "Can order: multicellularity → tissues → bilateral symmetry → body cavity → protostome/deuterostome",
  "Can distinguish protostome from deuterostome on blastopore fate, cleavage and coelom formation",
  "Can define diploblastic, triploblastic, coelom, pseudocoelom, acoelomate with an example each",
  "Can place every invertebrate phylum into Lophotrochozoa, Ecdysozoa or Deuterostomia",
  "Can state the causes and consequences of the Permian and KT extinctions",
  "Can list the 4 chordate traits and order the vertebrate cladogram",
  "Can say what's unique to mammals vs what's shared with birds",
  "Can explain why amphibians are vulnerable and how the amniotic egg solved life on land",
  "Can explain the evidence that birds are dinosaurs",
  "Can order Ardi → Lucy → H. erectus → Neanderthal/H. sapiens and say what each shows",
  "Can explain Neanderthal/Denisovan interbreeding evidence",
  "Can explain the folate / vitamin D skin-color hypothesis and lactase persistence"
];
