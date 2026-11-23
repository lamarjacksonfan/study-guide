// Exam 3 metadata: modules, source inventory, content map, reading coverage,
// key terms, study plan, tutor modes.
window.SG = window.SG || {};

SG.examDefault = "2026-12-01";
SG.examLabel = "Exam 3 · Tue Dec 1, in class";

SG.modules = [
  { id: "m11", short: "M11", name: "Ecology & the Biosphere", lecture: "M11 Ecology and the Biosphere (69 slides, PDF)", reading: "Biology 2e ch 44 · TSE ch 1–4" },
  { id: "m12", short: "M12", name: "Population Ecology", lecture: "M12 Population Ecology (70 slides, PPTX)", reading: "Biology 2e ch 45 · TSE ch 6–7" },
  { id: "m13", short: "M13", name: "Community Ecology & Behavior", lecture: "M13 Community Ecology (115 slides, PDF)", reading: "Biology 2e ch 45 · TSE ch 6–7" },
  { id: "m14", short: "M14", name: "Ecosystems & Conservation", lecture: "M14.1 Ecosystems (43 slides) + M14.2 Conservation (23 slides), PPTX", reading: "Biology 2e ch 46–47 · TSE ch 8–10, 5, 11, 13" }
];

// Every uploaded file, what was in it, and how it was used.
SG.inventory = [
  ["M11 Ecology and the Biosphere.pptx.pdf", "69 slides", "Levels of ecology, biotic/abiotic, biogeography, climate drivers (latitude, air cells, winds, currents, deforestation), 8 terrestrial biomes, climographs, aquatic zones, thermocline/turnover, upwelling, eutrophication, climate change + greenhouse gases, feedback loops. Ends with 12 ch 44 review stems and 13 TSE ch 1–4 review stems.", "8 slides are image-only (15, 18, 21, 26, 36, 39, 67, 70); their titles were used, their figures were not readable as text."],
  ["M12_Populationecology.pptx", "70 slides", "Density, sampling, mark–recapture (with worked examples), dispersion, survivorship I/II/III, exponential & logistic equations, K, density-dependent vs independent factors, Seychelles warbler, life-history trade-offs, r/K, human population, pyramids, development & resource use.", "Graphs on slides are pictures; the app redraws them as labeled practice figures."],
  ["M13_CommunityEcology-compressed.pdf", "115 slides", "Interaction signs table, competition & competitive exclusion, niches, resource partitioning, character displacement, mutualism/commensalism/parasitism, defenses & mimicry, newt–garter-snake arms race, richness/relative abundance/Shannon index, stability, keystone (Paine), foundation, engineers, top-down/bottom-up, latitudinal gradient, species–area, island biogeography, Simberloff fumigation, succession, AND animal behavior (mating systems, altruism, Hamilton's rule, sexual selection, innate vs learned, FAP, learning types). Ends with 45 review stems.", "14 slides image-only (e.g. 9, 13, 23, 47–48, 77, 83, 93, 112). Behavior is part of M13 and is tested (study guide Q1–2)."],
  ["M14_1Ecosystems.pptx", "43 slides", "Levels, ecosystem research modes, energy flow & thermodynamics, chemical cycling, GPP/NPP, NPP by biome, food chains/webs, food-chain length, 10% rule, pyramids (biomass can invert in water), biogeochemical cycles + pools/fluxes/sinks/sources, N, C, P cycles, ocean acidification, limiting nutrients, krill/whale pump, upwelling, eutrophication.", ""],
  ["M14_2Conservation.pptx", "23 slides", "HIPPO causes, E/MSY, threats mapped to ecological levels, Muir, Carson, bioaccumulation, endangered vs threatened, overharvesting, tragedy of the commons, shifting baseline, corridors, restoration, bioremediation, biological augmentation, indicator species, hotspots, conservation conflicts. Last slide lists 19 review stems (incl. TSE ch 11, 13).", "Slides 11, 13, 21 have no text (pictures only)."],
  ["Exam3StudyGuide.docx", "64 stems", "The professor's 64 review questions. Stems only: the document has NO answer choices and NO figures.", "Q33, Q35, Q36, Q37 and Q43 refer to a figure that was not included. Q6, Q15, Q27, Q56, Q60 depend on answer choices that were not included. All are flagged in the app."],
  ["Unit3KeyTerms.docx", "10 terms", "Biogeography · Abiotic and biotic factors · Latitude and longitude · Biomes · Deforestation · Climograph · Eutrophication · Thermocline · Turnover · Nutrient cycles.", "All 10 are covered in lessons, flashcards and the checklist."],
  ["exam 3 kahoot practice problems updated.pdf", "19 screenshots, ~37 questions", "Kahoot questions with the correct answer(s) check-marked.", "Imported as the 'Class practice: Kahoot' set using the marked answers."],
  ["exam 3 practice question woolink.pdf", "15 screenshots", "Species-in-two-communities diversity questions, the A–H food web (primary/secondary/tertiary/quaternary), nutrient-cycle matching, ocean acidification, climate-change fill-ins, nitrogen-forms questions.", "No answers shown. The top-right node of the food web is hidden behind a close button in every screenshot, so its letter is unknown (the app calls it '?')."],
  ["exam 3 canvas practice problems corrected.pdf", "18 screenshots", "Canvas quiz items on productivity, tropical diversity, lake zones, abiotic/biotic, eutrophic lakes, NPP, ozone, fire biomes, greenhouse gases, turnover figure.", "No answers shown. Items 12, 18, 19 are about Your Inner Fish (Exam 2 material) and are listed but marked out of scope."],
  ["Course schedule screenshots (2 images)", "—", "Dates, modules 11–14, reading assignments: B2e ch 44–47, TSE ch 1–11 & 13, Module quizzes 11/8, 11/15, 11/29, Exam 3 on 12/1.", "Reading list only. No textbook text was supplied."]
];

// Reading assignments vs. what content is actually available.
SG.readings = [
  ["Biology 2e ch 44 (Ecology & the Biosphere)", "m11", "Not supplied", "Lecture M11 covers the same objectives. Supplementary explanations (⚑) use standard intro-ecology content, not the chapter text."],
  ["Biology 2e ch 45 (Population & Community Ecology)", "m12 m13", "Not supplied", "Lectures M12 and M13 cover it."],
  ["Biology 2e ch 46 (Ecosystems)", "m14", "Not supplied", "Lecture M14.1 covers it; slide 14 notes cite Fig 46.6 (Lake Ontario food web)."],
  ["Biology 2e ch 47 (Conservation)", "m14", "Not supplied", "Lecture M14.2 covers it."],
  ["TSE ch 1–4", "m11", "Not supplied", "Only the 13 review stems at the end of M11 (Panamanian golden frog, Bd chytrid, Cuvier & extinction, great auk, ammonites, Lamarck). Their answers are given in the Sixth Extinction section and flagged ⚑ book."],
  ["TSE ch 5, 6, 7", "m12 m13 m14", "Not supplied", "Study guide Q40 (ch 6 calcifiers). Lecture M14.1 slide 35 (acidification → calcifiers)."],
  ["TSE ch 8–10", "m14", "Not supplied", "Study guide Q39 (ch 10 little brown bat), Q42 (ch 9 BDFFP). M12 objective on fragmentation & invasives."],
  ["TSE ch 11, 13", "m14", "Not supplied", "Study guide Q41 (Suci, Kinohi). M14.2 slide 23 stems (San Diego Zoo, Cincinnati Zoo, Big Bone Lick)."]
];

// The 10 key terms in the Unit 3 Key Terms document → where they live.
SG.keyTerms = [
  ["Biogeography", "m11", "abiotic", "The study of the geographic distribution of living things and the abiotic factors that affect it (M11 slide 9). Island biogeography (M13) is a special case."],
  ["Abiotic and biotic factors", "m11", "abiotic", "Abiotic = non-living physical/chemical factors (temperature, water, sunlight, soil, salinity). Biotic = other living organisms and their interactions (predation, competition, parasitism)."],
  ["Latitude and longitude", "m11", "climate", "Latitude (N–S position) changes the angle of sunlight and drives annual climate; longitude (E–W) only shifts the time of day. Latitude controls biome bands."],
  ["Biomes", "m11", "biomes", "Major communities with a characteristic appearance over a wide area, set mostly by temperature and precipitation (terrestrial) or light, depth, salinity and nutrients (aquatic)."],
  ["Deforestation", "m11", "climate", "Removing forest raises local temperature and dryness (less transpiration cooling and rain), releases stored CO₂, and fragments habitat."],
  ["Climograph", "m11", "biomes", "A graph of mean temperature and precipitation for a place (monthly bars/lines, or biomes plotted on temperature × precipitation axes)."],
  ["Eutrophication", "m14", "eutroph", "Nutrient (N, P) enrichment → algal bloom → algae die → aerobic decomposers use up O₂ → hypoxic dead zone and fish kills."],
  ["Thermocline", "m11", "strat", "A layer where temperature changes quickly with depth; it blocks mixing, trapping nutrients below and oxygen above."],
  ["Turnover", "m11", "strat", "Seasonal mixing of a temperate lake in spring and fall when the water column reaches one temperature (about 4 °C), bringing bottom nutrients up and oxygen down."],
  ["Nutrient cycles", "m14", "cycles", "Biogeochemical cycles that move elements (C, N, P, water) between biotic and abiotic pools. Matter cycles; energy does not."]
];

// Content map: what each module teaches and how it tends to be tested.
SG.contentMap = {
  m11: { memorize: ["4 levels: organism → population → community → ecosystem (plus landscape, biosphere)", "8 terrestrial biomes and their temperature/precipitation signatures", "Fire/drought-maintained biomes: savanna, temperate grassland, chaparral", "Ocean zones: intertidal, neritic, pelagic, benthic, abyssal, photic/aphotic", "Greenhouse gases: CO₂, water vapor, CH₄, N₂O (N₂ and O₂ are NOT)"], understand: ["Why latitude (not distance to the sun) creates climate", "Air rises at 0° and 60° (wet) and sinks at 30° and 90° (dry)", "Thermocline blocks mixing; turnover and upwelling restore it", "Positive feedbacks: albedo loss, permafrost methane, warmer oceans hold less CO₂, water vapor"], apply: ["Place a biome on a climograph", "Predict what removing fire does to a grassland", "Pick the abiotic or biotic factor from a list", "Pick which ecologist would study a question"] },
  m12: { memorize: ["Density = N ÷ area; dispersion = spacing pattern", "Clumped (most common), uniform (territoriality, allelopathy, competition), random", "Type I/II/III survivorship and examples", "dN/dt = rN and dN/dt = rN(K−N)/K", "Density-dependent = biotic; density-independent = abiotic catastrophes"], understand: ["Why exponential growth is J-shaped (growth ∝ N)", "Why logistic growth peaks at K/2 and stops at K", "Life-history trade-off: limited energy", "Why a broad-based pyramid means growth and narrow means decline"], apply: ["Mark–recapture N = M·n/r", "Read survivorship graphs", "Classify a factor as DD or DI", "Predict growth from a pyramid"] },
  m13: { memorize: ["Interaction signs: competition −/−, predation/parasitism/herbivory +/−, mutualism +/+, commensalism +/0", "Fundamental vs realized niche", "Keystone (big effect, low abundance) vs foundation (abundant producer/structure)", "Island model: large + near = most species", "Mating systems: monogamy, polygyny, polyandry", "Learning types: habituation, imprinting, classical, operant, social"], understand: ["Competitive exclusion → resource partitioning / character displacement", "Why evenness raises the Shannon index", "Paine's sea-star experiment and trophic cascades", "Immigration depends on distance; extinction depends on size", "Hamilton's rule rB > C"], apply: ["Classify an interaction from a scenario", "Rank communities by diversity", "Pick the island with highest/lowest richness or extinction", "Identify FAP vs learned behavior"] },
  m14: { memorize: ["GPP vs NPP (NPP = GPP − respiration)", "Highest NPP per area: tropical forest, estuary, coral reef; highest total: open ocean", "~10% energy transfer; 4–5 trophic levels", "N enters life by bacterial nitrogen fixation", "HIPPO; E/MSY = background extinction rate", "Endangered vs threatened"], understand: ["Energy flows, matter cycles", "Why pyramids have a broad base and why aquatic biomass can invert", "Eutrophication → O₂ depletion chain", "Biomagnification in top predators", "CO₂ → carbonic acid → less carbonate for calcifiers"], apply: ["Read a food web (arrows point to the eater)", "Predict effect of removing a species", "Choose the best fix for eutrophication", "Pick the conservation tool for fragmentation (corridor)"] }
};

// Day plan. Day numbers map to calendar dates; the dashboard highlights today.
SG.plan = [
  { date: "2026-11-23", title: "Map + Module 11", focus: "m11", tasks: [
    ["Read the Exam Map and the dashboard plan", "map"], ["Study M11 lessons: levels, abiotic/biotic, climate", "study"], ["Study M11 lessons: biomes, aquatic zones, turnover/upwelling, climate change", "study"], ["Flashcards: M11 deck once through", "cards"], ["Professor Qs: all M11 questions (filter M11)", "review"], ["Practice: M11 quiz, 15 Qs, levels 1–2", "practice"] ] },
  { date: "2026-11-24", title: "Module 12", focus: "m12", tasks: [
    ["Warm-up: Rapid Fire on M11 (5 min)", "tutor"], ["Study M12: density, mark–recapture, dispersion, survivorship", "study"], ["Study M12: exponential vs logistic, regulation, r/K, pyramids", "study"], ["Visual lab: growth curves + survivorship + pyramids", "visual"], ["Professor Qs: all M12 questions", "review"], ["Practice: M12 quiz, 15 Qs, levels 2–3", "practice"] ] },
  { date: "2026-11-25", title: "Module 13", focus: "m13", tasks: [
    ["Warm-up: re-try yesterday's misses (Weak areas)", "weak"], ["Study M13: interactions, niche, defenses", "study"], ["Study M13: diversity, keystone, island biogeography, succession", "study"], ["Study M13: behavior, mating systems, altruism, learning", "study"], ["Visual lab: diversity comparison + island model", "visual"], ["Professor Qs + Practice: M13, 20 Qs", "practice"] ] },
  { date: "2026-11-26", title: "Module 14 (part 1)", focus: "m14", tasks: [
    ["Warm-up: Rapid Fire mixed M11–M13", "tutor"], ["Study M14: energy flow, GPP/NPP, food webs, pyramids", "study"], ["Visual lab: A–H food web + trophic pyramid", "visual"], ["Study M14: nutrient cycles, eutrophication, limiting nutrients", "study"], ["Practice: M14 quiz, 15 Qs", "practice"] ] },
  { date: "2026-11-27", title: "Module 14 (part 2) + Sixth Extinction", focus: "m14", tasks: [
    ["Study M14: biomagnification, acidification, threats, conservation", "study"], ["Sixth Extinction section + its questions", "tse"], ["Professor Qs: all M14 questions", "review"], ["Flashcards: 'Missed' deck", "cards"], ["Class practice sets: Kahoot + Woolink", "class"] ] },
  { date: "2026-11-28", title: "All 64 professor questions", focus: "all", tasks: [
    ["Professor Qs: attempt every unanswered question", "review"], ["Professor Qs: retry all marked wrong or difficult", "review"], ["Practice: mixed, 25 Qs, levels 3–4", "practice"], ["Feynman mode: explain 3 weakest topics", "tutor"] ] },
  { date: "2026-11-29", title: "Mock Exam A + Module 14 quiz", focus: "all", tasks: [
    ["Module 14 Quiz on Canvas (due 11:59 pm)", ""], ["Mock Exam A, timed (50 min)", "exams"], ["Classify every miss in the Error log", "weak"], ["Re-study the 3 lowest topics", "study"] ] },
  { date: "2026-11-30", title: "Mock Exam B + final review", focus: "all", tasks: [
    ["Mock Exam B, timed", "exams"], ["Weakness Review mode", "tutor"], ["Cram sheet top to bottom", "cram"], ["Flashcards: difficult + missed", "cards"], ["Sleep. Exam is tomorrow in class.", ""] ] }
];

SG.tutorModes = [
  ["teach", "Teach me", "Walks one topic from a plain-English start to exam level, then checks you with recall prompts."],
  ["quiz", "Quiz me", "Questions on one topic, answers hidden until you submit."],
  ["rapid", "Rapid fire", "Fast flashcard-style recall across chosen modules. Say the answer, flip, grade yourself."],
  ["apply", "Application", "Level 3–4 scenario questions only: unfamiliar situations that need reasoning."],
  ["feynman", "Feynman", "Explain a concept in your own words. The app checks your explanation for the key ideas a full answer needs and shows a model explanation."],
  ["exam", "Exam mode", "Sends you to the timed mock exams."],
  ["weak", "Weakness review", "Builds a quiz from the topics and questions you have missed most."],
  ["cram", "Emergency cram", "The 12 highest-yield ideas with one check question each, for when time is short."]
];

SG.errorTypes = ["Knowledge gap", "Vocabulary confusion", "Conceptual misunderstanding", "Incorrect application", "Graph interpretation error", "Misreading", "Forgot a detail"];
