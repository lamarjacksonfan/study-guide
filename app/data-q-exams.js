// Held-out questions: Day 1 checkpoint (C1), Day 2 checkpoint (C2), Mock A (MA), Mock B (MB).
// The Day 3 checkpoint is assembled at run time from the whole bank, weighted toward missed questions.
(function (Q) {
// ================================================= DAY 1 CHECKPOINT (M4–M6)
Q("c1-1", "C1", "m4", "tax", 1, "Which is the correctly written scientific name for humans?",
  ["<i>Homo Sapiens</i>", "<i>homo sapiens</i>", "<i>Homo sapiens</i>", "<i>Homo sapien</i>"], 2,
  "Genus capitalized, specific epithet lowercase, both italicized; 'sapiens' always ends in s.",
  ["The species epithet is never capitalized.", "The genus must be capitalized.", "", "'Sapien' isn't a word in the name (the study guide's spelling is a typo)."],
  "Binomial nomenclature", "Tiny formatting differences.");
Q("c1-2", "C1", "m5", "virus", 2, "Which statement about viruses is TRUE?",
  ["A virus's genome can be DNA or RNA", "Viruses carry their own ribosomes", "Viruses reproduce by binary fission", "Viruses are a type of prokaryote"], 0,
  "Viral genomes are DNA or RNA (single- or double-stranded); that's what Baltimore classification sorts by.",
  ["", "They use host ribosomes.", "They replicate inside host cells; binary fission is prokaryotic division.", "Viruses are not cells at all."],
  "Virus basics");
Q("c1-3", "C1", "m5", "vdis", 3, "Why is evolution key to understanding emerging ('spillover') diseases?",
  ["Mutation and selection let animal viruses gain the ability to infect and spread among humans", "Humans evolve new receptors each generation that attract viruses", "Antibiotics cause viruses to mutate into human pathogens", "Viruses evolve only after they enter human cells"], 0,
  "Variants arise by mutation/recombination in reservoir hosts; those able to infect humans are selected after a spillover.",
  ["", "Human evolution is far too slow for this; the virus is what changes.", "Antibiotics don't act on viruses.", "Variation arises in reservoir hosts too."],
  "Spillover and evolution");
Q("c1-4", "C1", "m5", "pevo", 2, "Which of the following is TRUE of cyanobacteria?",
  ["They are photosynthetic prokaryotes that likely caused the rise in atmospheric O₂", "They are eukaryotic algae with chloroplasts", "They are anaerobic heterotrophs found in cow guts", "They evolved from chloroplasts that escaped plant cells"], 0,
  "Cyanobacteria ('blue-green algae') are bacteria whose oxygenic photosynthesis raised O₂ starting ~2.6 bya.",
  ["", "They're prokaryotes; the name 'blue-green algae' is misleading.", "That describes methanogens (archaea).", "Reversed: chloroplasts evolved FROM cyanobacteria."],
  "Cyanobacteria", "Reversal (D) and misleading common name (B).");
Q("c1-5", "C1", "m5", "pstruct", 2, "Which feature is found in BOTH prokaryotic and eukaryotic cells?",
  ["A nucleus", "Linear chromosomes wound around histones", "Ribosomes", "Mitosis"], 2,
  "All cells have ribosomes, a plasma membrane, cytoplasm and DNA.",
  ["Eukaryotes only.", "Eukaryotes only (prokaryotes: single circular chromosome).", "", "Prokaryotes divide by binary fission."],
  "Prokaryote vs eukaryote");
Q("c1-6", "C1", "m5", "pstruct", 2, "Salmonella food-poisoning symptoms are triggered when the bacteria die and release",
  ["An exotoxin secreted through the cell wall", "Endotoxin (lipopolysaccharide) from their outer membrane", "Peptidoglycan from a thick Gram-positive wall", "Plasmids carrying toxin genes"], 1,
  "Endotoxins are LPS components of the Gram-negative outer membrane, released when the cells die (M5_2 slide 21).",
  ["Exotoxins are secreted by living bacteria (e.g. cholera).", "", "Salmonella is Gram-negative; peptidoglycan isn't the toxin.", "Plasmids are DNA, not toxins."],
  "Endotoxins");
Q("c1-7", "C1", "m5", "pnut", 1, "This term describes an organism that obtains both carbon and energy by ingesting other organisms.",
  ["Autotroph", "Phototroph", "Heterotroph", "Chemoautotroph"], 2,
  "Heterotrophs get carbon (and, as chemoheterotrophs, energy) from other organisms.",
  ["Autotrophs fix CO₂.", "Phototrophs get energy from light.", "", "Chemoautotrophs fix CO₂ using chemical energy."],
  "Nutrition vocabulary");
Q("c1-8", "C1", "m5", "pdis", 1, "What is a 'superbug'?",
  ["A virus that can't be stopped by vaccines", "Bacteria that are resistant to (multiple) antibiotics", "An insect vector that spreads several diseases", "A fungus resistant to antifungal drugs"], 1,
  "Superbug = antibiotic-resistant bacteria (M5_2 slide 38).",
  ["Not the definition.", "", "Not the definition.", "Not the definition used in class."],
  "Superbugs");
Q("c1-9", "C1", "m5", "pben", 2, "True or False: all symbiotic relationships benefit both partners.",
  ["True", "False"], 1,
  "Symbiosis includes mutualism (+/+), commensalism (+/0) and parasitism (+/−).",
  ["Only mutualism benefits both.", ""],
  "Symbiosis", "Absolute 'all'.");
Q("c1-10", "C1", "m6", "endo", 1, "Which of the following was derived from an ancestral cyanobacterium?",
  ["Mitochondrion", "Chloroplast", "Nucleus", "Ribosome"], 1,
  "Primary endosymbiosis of a cyanobacterium produced plastids (chloroplasts).",
  ["Mitochondria came from α-proteobacteria.", "", "The nucleus isn't explained by endosymbiosis.", "Ribosomes are in all cells."],
  "Endosymbiosis");
Q("c1-11", "C1", "m6", "pgroups", 1, "Which eukaryote clade contains red algae, green algae and all land plants?",
  ["Opisthokonta", "Archaeplastida", "Stramenopila", "Excavata"], 1,
  "Archaeplastida = the lineage from primary endosymbiosis of a cyanobacterium.",
  ["Fungi + animals.", "", "Diatoms, brown algae.", "Giardia, Euglena, Trypanosoma."],
  "Supergroups");
Q("c1-12", "C1", "m6", "pdis2", 3, "After travel to central Africa you develop fever, lethargy and a swollen insect bite. A stained blood sample shows parasitic protozoa. You are most likely infected by members of which clade?",
  ["Alveolata (Plasmodium)", "Excavata (Trypanosoma)", "Amoebozoa (Entamoeba)", "Stramenopila (diatoms)"], 1,
  "An insect-bite-transmitted blood parasite causing fever and lethargy (sleeping sickness) = Trypanosoma, a euglenozoan in Excavata.",
  ["Malaria is mosquito-borne too, but the swollen bite plus lethargy describe trypanosomiasis (the review Q34 scenario).", "", "Entamoeba causes dysentery through contaminated food/water.", "Diatoms aren't parasites."],
  "Clinical scenario → clade", "A is the tempting 'Africa + insect' answer.");
Q("c1-13", "C1", "m6", "pdis2", 2, "Which clade best fits: 'phytoplankton with silica shells, mined from fossil sediments for abrasives, and a major source of oxygen'?",
  ["Dinoflagellates (Alveolata)", "Diatoms (Stramenopila)", "Red algae (Archaeplastida)", "Forams (Rhizaria)"], 1,
  "Silica (glass) shells = diatoms, which make up to half of Earth's O₂.",
  ["Cellulose plates, not silica.", "", "Seaweeds; no silica shells.", "Forams have calcium carbonate tests (helpful context)."],
  "Protist identification");
Q("c1-14", "C1", "m6", "fecol", 1, "Without fungi, human civilization would not have",
  ["Bread, beer and penicillin", "Cotton and paper", "Silk and wool", "Recombinant insulin"], 0,
  "Yeast ferments bread and beer; Penicillium gives penicillin.",
  ["", "Plant products.", "Animal products.", "Made by recombinant BACTERIA."],
  "Fungi and humans");
Q("c1-15", "C1", "m6", "pdis2", 3, "You find an orange blob in your yard. An expert says its 'feeding stage' is one giant cell with many nuclei. It is a",
  ["Zygomycete fungus", "Lichen", "Plasmodial slime mold", "Cellular slime mold"], 2,
  "Plasmodial slime molds (Amoebozoa) are huge multinucleate single cells.",
  ["Fungi grow as hyphae, not a single giant cell (and slime molds are no longer fungi).", "A lichen is a fungus + alga partnership.", "", "Cellular slime molds are separate individual cells that aggregate."],
  "Slime molds");

// ================================================= DAY 2 CHECKPOINT (M7–M9)
Q("c2-1", "C2", "m7", "porig", 1, "The most direct ancestors of land plants were probably",
  ["Red algae", "Charophytes", "Bryophytes", "Cyanobacteria"], 1,
  "Charophyte green algae share ring-shaped cellulose synthases, similar sperm and DNA with plants.",
  ["Red algae are more distant Archaeplastida.", "", "Bryophytes ARE land plants.", "Cyanobacteria gave rise to chloroplasts, not plants."],
  "Plant ancestry");
Q("c2-2", "C2", "m7", "porig", 2, "A trend through land-plant evolution is for the sporophyte to become ______ and more independent, and the gametophyte to become ______ and more dependent.",
  ["smaller; larger", "larger; smaller", "haploid; diploid", "larger; larger"], 1,
  "Mosses: gametophyte dominant. Ferns: sporophyte dominant. Seed plants: microscopic, dependent gametophytes.",
  ["Reversed.", "", "Ploidy doesn't change.", "Both can't grow."],
  "Life-cycle trend", "Reversed pair.");
Q("c2-3", "C2", "m7", "bryo", 2, "Nonvascular plants (including moss) require liquid water for fertilization because",
  ["Their spores need water to germinate", "Their sperm are flagellated and must swim to the egg", "Their pollen must be moistened", "They lack roots"], 1,
  "Antheridia release motile sperm that swim through a water film to the archegonium.",
  ["Spore germination isn't fertilization.", "", "Bryophytes have no pollen.", "True (rhizoids only) but unrelated to fertilization."],
  "Water dependence");
Q("c2-4", "C2", "m7", "bryo", 2, "The tall ferns we typically see in tropical and temperate woodlands are the",
  ["Gametophyte generation", "Sporophyte generation", "Seed-bearing generation", "Haploid generation"], 1,
  "In ferns the sporophyte is dominant.",
  ["Fern gametophytes are tiny.", "", "Ferns are seedless.", "The sporophyte is diploid."],
  "Fern life cycle");
Q("c2-5", "C2", "m7", "bryo", 3, "Walking through a moist forest, you step on a soft green carpet of moss. The green leafy plants you're stepping on are",
  ["Diploid sporophytes", "Haploid gametophytes", "Triploid endosperm", "Diploid gametophytes"], 1,
  "In bryophytes the visible, dominant generation is the haploid gametophyte.",
  ["The moss sporophyte is the small stalk and capsule on top.", "", "Endosperm is in angiosperm seeds.", "Gametophytes are haploid."],
  "Moss vs fern visible generation");
Q("c2-6", "C2", "m7", "gymno", 2, "Pollination is part of the life cycle in",
  ["Angiosperms only", "Both gymnosperms and angiosperms", "Ferns and mosses", "All land plants"], 1,
  "Pollen is a seed-plant innovation: cones in gymnosperms, flowers in angiosperms.",
  ["Gymnosperms pollinate too (male → female strobilus).", "", "Seedless plants use swimming sperm.", "Bryophytes and ferns have no pollen."],
  "Pollination");
Q("c2-7", "C2", "m7", "angio", 1, "Poison ivy is a eudicot, and wheat is a monocot. Both of these groups are",
  ["Gymnosperms", "Angiosperms", "Monilophytes", "Bryophytes"], 1,
  "Monocots and eudicots are the two main groups of flowering plants.",
  ["No flowers in gymnosperms.", "", "Ferns.", "Mosses."],
  "Angiosperm groups");
Q("c2-8", "C2", "m7", "angio", 1, "Which land-plant clade has the greatest number of species?",
  ["Bryophytes", "Gymnosperms", "Angiosperms", "Lycophytes"], 2,
  "Angiosperms: more than 290,000 species.",
  ["Far fewer.", "Four small groups.", "", "~1,200 species remain."],
  "Plant diversity");
Q("c2-9", "C2", "m7", "angio", 1, "In a flower, pollen is produced in the",
  ["Stigma", "Ovary", "Anther", "Sepal"], 2,
  "The anther (top of the stamen) makes microspores that develop into pollen.",
  ["The stigma RECEIVES pollen.", "The ovary holds ovules.", "", "Sepals enclose the bud."],
  "Flower anatomy");
Q("c2-10", "C2", "m7", "angio", 2, "Which statement most accurately describes the relationship between animals and pollination?",
  ["Most angiosperms are wind-pollinated; animals rarely matter", "About 80% of angiosperms rely on animal pollinators, often in coevolved relationships", "Animals pollinate gymnosperms but not angiosperms", "Animals only harm flowers through herbivory"], 1,
  "M7 slides 64–65: 80% of angiosperms rely on animals; often highly specialized coevolution.",
  ["Wind pollination is less common in angiosperms than in gymnosperms.", "", "Reversed emphasis.", "Ignores pollination mutualisms."],
  "Coevolution");
Q("c2-11", "C2", "m8", "anim", 2, "The last common ancestor of fungi and animals was most likely a",
  ["Multicellular sponge", "Unicellular, flagellated protist", "Photosynthetic green alga", "Coenocytic fungus"], 1,
  "Both are opisthokonts, descended from a single-celled flagellated ancestor.",
  ["Sponges are animals.", "", "Green algae are on the plant lineage.", "That's already a fungus."],
  "Opisthokont ancestry");
Q("c2-12", "C2", "m8", "body", 1, "The body cavity of coelomate animals develops within the",
  ["Ectoderm", "Endoderm", "Mesoderm", "Blastopore"], 2,
  "A true coelom is completely lined by mesoderm.",
  ["Outer layer.", "Gut lining.", "", "An opening, not a tissue."],
  "Coelom");
Q("c2-13", "C2", "m8", "body", 1, "True or False: all animals have true tissues.",
  ["True", "False"], 1,
  "Sponges (Porifera) lack true tissues.",
  ["Ignores sponges.", ""],
  "Tissues", "Absolute 'all'.");
Q("c2-14", "C2", "m8", "body", 2, "Complex, coordinated movement in animals is possible because of",
  ["Cell walls", "Nerve and muscle tissue", "A chitin exoskeleton", "Radial symmetry"], 1,
  "True tissues (Eumetazoa) include nervous and muscle tissue.",
  ["Animals lack cell walls.", "", "Only arthropods have one, and it isn't the coordinating system.", "Radial animals tend to be sessile or drifting."],
  "Animal tissues");
Q("c2-15", "C2", "m8", "inv", 2, "Sea stars, brittle stars, urchins and sea cucumbers are ______ and members of the ______ clade.",
  ["cnidarians; Radiata", "echinoderms; Deuterostomia", "molluscs; Lophotrochozoa", "arthropods; Ecdysozoa"], 1,
  "Spiny-skinned echinoderms are deuterostomes; adults are radial but larvae are bilateral.",
  ["Radial adults are a trap; they aren't cnidarians.", "", "Wrong phylum and clade.", "Wrong phylum and clade."],
  "Echinoderms", "Radial adult symmetry tempts 'Radiata'.");
Q("c2-16", "C2", "m9", "chord", 1, "Jawless fishes (cyclostomes) include",
  ["Sharks and rays", "Hagfishes and lampreys", "Lungfishes and coelacanths", "Lancelets and tunicates"], 1,
  "Cyclostomes = hagfishes + lampreys.",
  ["Jawed cartilaginous fish.", "", "Lobe-finned bony fish.", "Invertebrate chordates."],
  "Fish groups");
Q("c2-17", "C2", "m9", "chord", 2, "Which living chordates are thought to most resemble the earliest chordates in appearance?",
  ["Hagfishes", "Lancelets", "Sharks", "Tunicate adults"], 1,
  "Lancelets keep all 4 chordate traits as adults in a simple fish-like body.",
  ["Hagfishes are craniates (they have skulls).", "", "Jawed vertebrates: far more derived.", "Adult tunicates lose most chordate traits."],
  "Basal chordates");
Q("c2-18", "C2", "m9", "tetra", 2, "Which characteristic contributed most to vertebrate success in relatively dry environments?",
  ["Paired fins", "The amniotic egg", "The swim bladder", "Pharyngeal slits"], 1,
  "The amniotic egg's membranes and shell let embryos develop on land.",
  ["Fins are aquatic.", "", "Aquatic buoyancy organ.", "Aquatic feeding/breathing structures."],
  "Amniotic egg");
Q("c2-19", "C2", "m9", "tetra", 3, "Which characteristic is common to ALL modern reptilian lineages (turtles, lepidosaurs, crocodilians and birds)?",
  ["Ectothermy", "Teeth", "The amniotic egg", "A three-chambered heart"], 2,
  "All reptiles, including birds, are amniotes.",
  ["Birds are endotherms.", "Birds lack teeth.", "", "Crocodilians and birds have four-chambered hearts."],
  "Reptiles including birds", "Typical 'reptile' traits that birds break.");
Q("c2-20", "C2", "m9", "mammal", 1, "Which subgroup of mammals raises its young in pouches?",
  ["Monotremes", "Marsupials", "Eutherians", "Cetaceans"], 1,
  "Marsupials (kangaroos, koalas, opossums).",
  ["Egg-layers.", "", "Placentals.", "Whales (eutherians)."],
  "Mammal lineages");

// ================================================= MOCK EXAM A
Q("ma-1", "MA", "m4", "tax", 2, "Lions (Panthera leo) and tigers (Panthera tigris) belong to the same",
  ["Species", "Genus", "Subspecies", "Domain only"], 1,
  "The shared first word of a binomial name is the genus.",
  ["Different specific epithets = different species.", "", "Different species can't be the same subspecies.", "They share all ranks from domain to genus, not just domain."],
  "Binomial names");
Q("ma-2", "MA", "m4", "tax", 2, "Which of these groups is monophyletic?",
  ["Land plants", "Green algae", "Protists", "Algae"], 0,
  "Land plants (embryophytes) are one ancestor + all descendants.",
  ["", "Paraphyletic (excludes land plants).", "Paraphyletic/polyphyletic.", "Polyphyletic (evolved multiple times)."],
  "Monophyly");
Q("ma-3", "MA", "m5", "virus", 2, "Which statement about prions is TRUE?",
  ["They are infectious proteins that cause normal proteins to misfold", "They contain a small RNA genome", "They can be treated with antibiotics", "They are a type of bacteria"], 0,
  "Prions are misfolded proteins without nucleic acid (mad cow disease, CJD).",
  ["", "That's a viroid.", "Antibiotics target bacteria.", "Not cells."],
  "Prions");
Q("ma-4", "MA", "m5", "vdis", 2, "HIV is thought to have originated when simian immunodeficiency virus (SIV) passed from chimpanzees to humans. This is an example of",
  ["A spillover event", "Transduction", "Endosymbiosis", "Bioremediation"], 0,
  "Animal reservoir → human host = spillover.",
  ["", "Phage-mediated gene transfer between bacteria.", "Organelle origin.", "Pollution cleanup."],
  "Spillover");
Q("ma-5", "MA", "m5", "pstruct", 3, "Which structures would be found in a typical Gram-negative bacterium? (Select all that apply.)",
  ["A thin peptidoglycan layer", "An outer membrane containing lipopolysaccharide", "Ribosomes", "A nucleus", "Mitochondria"], [0, 1, 2],
  "Gram − cells have thin peptidoglycan, an LPS outer membrane and ribosomes; no prokaryote has a nucleus or mitochondria.",
  ["", "", "", "Prokaryotes lack a nucleus.", "Prokaryotes lack membrane-bound organelles."],
  "Gram-negative structure");
Q("ma-6", "MA", "m5", "pnut", 1, "Cyanobacteria are best classified as",
  ["Chemoheterotrophs", "Photoautotrophs", "Chemoautotrophs", "Photoheterotrophs"], 1,
  "Light energy + CO₂ carbon.",
  ["Wrong energy and carbon source.", "", "They use light, not chemicals.", "They fix CO₂."],
  "Nutrition modes");
Q("ma-7", "MA", "m5", "pdis", 3, "Tuberculosis, once at historic lows, is a growing problem again mainly because",
  ["Multidrug-resistant strains evolved through overuse and misuse of antibiotics", "It is a virus that mutates every year", "The bacterium learned to infect armadillos", "Antibiotics can't penetrate the lungs"], 0,
  "M5_2 slide 34: MDR strains evolved due to antibiotic overuse.",
  ["", "TB is bacterial.", "Armadillos carry LEPROSY.", "Not the reason given."],
  "Antibiotic resistance", "C mixes in the other mycobacterial disease.");
Q("ma-8", "MA", "m5", "pben", 3, "Which is NOT a commercial or research use of PROKARYOTES?",
  ["Producing yogurt", "Manufacturing human insulin", "Supplying DNA polymerase for PCR", "Producing penicillin"], 3,
  "Penicillin comes from the FUNGUS Penicillium (M6_2 slide 23).",
  ["Bacteria (e.g. S. thermophilus).", "Recombinant bacteria.", "Pyrococcus furiosus.", ""],
  "Cross-module uses", "True use, wrong kingdom.");
Q("ma-9", "MA", "m6", "endo", 2, "The endosymbiotic theory accounts for the origin of which components of a eukaryotic cell?",
  ["The nucleus and endoplasmic reticulum", "Mitochondria and chloroplasts", "The cytoskeleton", "The cell wall"], 1,
  "Both organelles descend from engulfed bacteria.",
  ["Not explained by endosymbiosis.", "", "Not explained.", "Not explained."],
  "Endosymbiosis");
Q("ma-10", "MA", "m6", "pgroups", 2, "Which pair are BOTH stramenopiles?",
  ["Diatoms and kelp (brown algae)", "Dinoflagellates and diatoms", "Giardia and Euglena", "Red algae and kelp"], 0,
  "Stramenopiles include diatoms, golden algae, brown algae and oomycetes.",
  ["", "Dinoflagellates are alveolates.", "Both Excavata.", "Red algae are Archaeplastida."],
  "Supergroups", "One wrong member per pair.");
Q("ma-11", "MA", "m6", "pdis2", 3, "While hiking you drink from a stream. Days later you have diarrhea and bloating, and parasitic protozoa are found in a stool sample. They most likely belong to",
  ["Alveolata", "Excavata (diplomonads)", "Rhizaria", "Archaeplastida"], 1,
  "Giardia intestinalis, a diplomonad, spreads through fecally contaminated water.",
  ["Alveolates include Plasmodium (blood, mosquito).", "", "Forams and radiolarians aren't human parasites.", "Algae and plants."],
  "Clinical scenario");
Q("ma-12", "MA", "m6", "pdis2", 2, "Coral bleaching occurs when",
  ["Corals expel their symbiotic dinoflagellates", "Diatoms coat the coral with silica", "Fungi infect the coral skeleton", "Corals switch to photosynthesizing themselves"], 0,
  "Stressed corals expel the dinoflagellates that feed them, losing their color.",
  ["", "Not the mechanism.", "Not discussed.", "Corals are animals and can't photosynthesize."],
  "Protist-animal mutualism");
Q("ma-13", "MA", "m6", "fungi", 1, "Fungal mycelia are made of bundles of threadlike",
  ["Rhizoids", "Hyphae", "Pseudopodia", "Spores"], 1,
  "Mycelium = interwoven mass of hyphae.",
  ["Moss anchors.", "", "Amoeba extensions.", "Reproductive cells."],
  "Fungal structure");
Q("ma-14", "MA", "m6", "fecol", 3, "Seedlings grown in sterilized soil, with plenty of water, grow poorly compared to seedlings in normal forest soil. The best explanation is that the sterile soil lacks",
  ["Mycorrhizal fungi that supply phosphate and minerals", "Lichens that supply carbon", "Pathogenic fungi that stimulate growth", "Chytrids that fix nitrogen"], 0,
  "Most vascular plants depend on mycorrhizae for phosphate and mineral uptake.",
  ["", "Lichens don't feed plants.", "Pathogens harm plants.", "Chytrids don't fix nitrogen; only prokaryotes do."],
  "Experimental reasoning: mycorrhizae");
Q("ma-15", "MA", "m6", "fphyla", 2, "White-nose syndrome in bats and ergot of rye are both caused by members of",
  ["Chytridiomycota", "Basidiomycota", "Ascomycota", "Zygomycota"], 2,
  "Both pathogens are ascomycetes (sac fungi).",
  ["Chytrids cause the amphibian disease Bd.", "Mushrooms, rusts, smuts.", "", "Bread molds."],
  "Fungal phyla");
Q("ma-16", "MA", "m7", "porig", 2, "What characteristic do plants, algae and some bacteria have in common that is not shared with fungi or animals?",
  ["Cell walls of chitin", "Photosynthesis", "Absorptive nutrition", "A nucleus"], 1,
  "Photoautotrophy: plants, algae, cyanobacteria.",
  ["Chitin is fungal.", "", "That's fungal nutrition.", "Bacteria lack a nucleus; fungi and animals have one."],
  "Photosynthesis across groups");
Q("ma-17", "MA", "m7", "bryo", 2, "In a moss, the thin stalk with a capsule at its tip is",
  ["The gametophyte producing gametes", "The sporophyte, attached to and dependent on the gametophyte", "A flower", "A rhizoid"], 1,
  "The moss sporophyte grows from the gametophyte and depends on it nutritionally.",
  ["The green leafy base is the gametophyte.", "", "Mosses have no flowers.", "Rhizoids are at the base, anchoring."],
  "Moss structure");
Q("ma-18", "MA", "m7", "bryo", 3, "Why are seedless vascular plants most abundant in the tropics and moist temperate regions?",
  ["Their sperm must swim through water to reach eggs", "They can't tolerate any sunlight", "They lack vascular tissue", "Their seeds need constant moisture"], 0,
  "Swimming sperm tie fertilization to wet environments.",
  ["", "They grow in sunlight.", "They ARE vascular.", "They're seedless."],
  "Water dependence");
Q("ma-19", "MA", "m7", "gymno", 3, "After the Permian extinction, gymnosperms (and reptiles) underwent adaptive radiation. The best explanation is that",
  ["A drier, hotter climate favored groups whose reproduction didn't depend on water", "An asteroid destroyed all angiosperms", "Gymnosperms evolved flowers at that time", "Seedless plants evolved seeds after the extinction"], 0,
  "Water-dependent reproduction became limited to the tropics; seeds/pollen (and amniotic eggs) were advantageous.",
  ["", "Wrong extinction, and angiosperms didn't exist yet.", "Gymnosperms never evolved flowers.", "Seeds already existed in gymnosperms."],
  "Permian aftermath");
Q("ma-20", "MA", "m7", "angio", 2, "The seeds of angiosperms are",
  ["Naked, borne on cones", "Enclosed within an ovary that becomes a fruit", "Single cells without stored food", "Produced only by wind-pollinated plants"], 1,
  "Angio = 'vessel': seeds develop inside the ovary.",
  ["Gymnosperms.", "", "That describes spores.", "Most angiosperms are animal-pollinated."],
  "Angiosperm seeds");
Q("ma-21", "MA", "m7", "angio", 2, "A plant has two cotyledons, netted leaf veins and a taproot. It is a",
  ["Monocot", "Eudicot", "Gymnosperm", "Lycophyte"], 1,
  "All three are eudicot traits.",
  ["Monocots: one cotyledon, parallel veins, fibrous roots.", "", "Cotyledons and veins don't decide this; gymnosperms lack flowers.", "Seedless; no cotyledons."],
  "Monocot vs eudicot");
Q("ma-22", "MA", "m7", "angio", 4, "A flower lineage evolves bilateral symmetry that forces bees to land in one orientation, so pollen is placed on a specific body spot. Compared with its radially symmetric relatives, this lineage is predicted to",
  ["Show a higher speciation rate", "Lose the ability to make fruit", "Switch to wind pollination", "Become a gymnosperm"], 0,
  "Precise pollen placement → pollen reaches only the same species → less crossing between diverging populations → faster speciation (M7 slide 65).",
  ["", "Unrelated to symmetry.", "Specialized animal pollination is the opposite.", "Clades don't switch like that."],
  "Prediction: coevolution");
Q("ma-23", "MA", "m8", "anim", 2, "What happened during the Cambrian explosion?",
  ["The first prokaryotes appeared", "A rapid adaptive radiation produced most animal body plans, with predators and hard body parts", "Non-avian dinosaurs went extinct", "Plants first colonized land"], 1,
  "~535–525 mya: bilaterians, trilobites, claws, armor.",
  ["~3.5–3.8 bya.", "", "KT extinction.", "Land plants ~500 mya, not the defining Cambrian event."],
  "Cambrian explosion");
Q("ma-24", "MA", "m8", "body", 2, "Which is a shared derived character of the bilaterian clade?",
  ["True tissues", "Radial symmetry", "Bilateral symmetry with three germ layers", "A notochord"], 2,
  "Bilateria = bilateral symmetry + triploblasty (mesoderm).",
  ["Defines Eumetazoa (cnidarians have them too).", "Cnidarians.", "", "Chordates only."],
  "Animal clades", "A trait from the wrong node of the tree.");
Q("ma-25", "MA", "m8", "body", 3, "True or False: animals with three germ layers evolved before animals with body cavities.",
  ["True", "False"], 0,
  "The order: tissues → radial → bilateral/triploblastic → body cavity (mesoderm is needed to line a coelom).",
  ["", "The mesoderm had to come first."],
  "Order of transitions");
Q("ma-26", "MA", "m8", "inv", 2, "Trilobites were highly segmented, with mineralized exoskeletons and jointed appendages. They belonged to phylum",
  ["Mollusca", "Annelida", "Arthropoda", "Echinodermata"], 2,
  "Jointed appendages + exoskeleton = arthropod.",
  ["Molluscs aren't jointed.", "Annelids are segmented but have no exoskeleton or jointed legs.", "", "Spiny skin, no jointed legs."],
  "Arthropods");
Q("ma-27", "MA", "m8", "inv", 1, "Which phylum lacks true tissues?",
  ["Cnidaria", "Porifera", "Platyhelminthes", "Nematoda"], 1,
  "Sponges: complex multicellularity but no true tissues.",
  ["Cnidarians have true tissues (Eumetazoa).", "", "Triploblastic.", "Triploblastic."],
  "Porifera");
Q("ma-28", "MA", "m9", "chord", 2, "Which structure is found in all chordates at some stage of life?",
  ["Vertebral column", "Notochord", "Jaws", "Lungs"], 1,
  "One of the 4 chordate hallmarks.",
  ["Vertebrates only.", "", "Gnathostomes only.", "Not in most fish or invertebrate chordates."],
  "Chordate traits");
Q("ma-29", "MA", "m9", "chord", 3, "Tiktaalik is called a transitional fossil because it has",
  ["Feathers and teeth", "Fish features (scales, gills, fins) plus tetrapod features (neck, wrist bones, lungs)", "An amniotic egg and hair", "A notochord but no head"], 1,
  "It mixes fish and tetrapod features, bridging the water-to-land transition (~375 mya).",
  ["That's Archaeopteryx (dinosaur → bird).", "", "Mammal/amniote traits.", "Describes a lancelet-like chordate."],
  "Transitional fossils", "A different transitional fossil (A).");
Q("ma-30", "MA", "m9", "tetra", 1, "What characterizes the tetrapod clade?",
  ["An amniotic egg", "Four limbs (with digits)", "Feathers", "A swim bladder"], 1,
  "Tetra-pod = four feet.",
  ["Amniotes, a subset.", "", "Birds.", "Bony fish."],
  "Tetrapods");
Q("ma-31", "MA", "m9", "tetra", 1, "Which is a shared derived character of birds compared to other living vertebrates?",
  ["Hollow bones", "Feathers", "An amniotic egg", "Endothermy"], 1,
  "Among living animals, only birds have feathers.",
  ["Pterosaurs and theropods had them too.", "", "All amniotes.", "Mammals are endothermic too."],
  "Bird traits");
Q("ma-32", "MA", "m9", "mammal", 2, "Which trait is unique to mammals?",
  ["Endothermy", "A four-chambered heart", "Mammary glands", "Internal fertilization"], 2,
  "Only mammals produce milk.",
  ["Shared with birds.", "Shared with birds and crocodilians.", "", "Shared with reptiles, sharks and others."],
  "Mammal traits");
Q("ma-33", "MA", "m9", "tetra", 2, "What is the main difference between amphibians and reptiles?",
  ["Reptiles have an amniotic egg; amphibians don't", "Amphibians have four limbs; reptiles don't", "Reptiles have gills as adults", "Amphibians are endotherms"], 0,
  "The amniotic egg (plus dry, scaly skin) frees reptiles from water.",
  ["", "Both are tetrapods.", "Adult reptiles breathe with lungs.", "Amphibians are ectotherms."],
  "Amphibians vs reptiles");
Q("ma-34", "MA", "m10", "primate", 1, "Which is humans' closest living relative?",
  ["Gorilla", "Orangutan", "Chimpanzee", "Gibbon"], 2,
  "Chimpanzees (and bonobos).",
  ["Next closest after chimps/bonobos.", "More distant great ape.", "", "Lesser ape."],
  "Primate phylogeny");
Q("ma-35", "MA", "m10", "homin", 1, "When modern humans arrived in Europe at least 40,000 years ago, they found the region already occupied by",
  ["Homo naledi", "Neanderthals", "Australopithecines", "Denisovans only"], 1,
  "Neanderthals lived in Eurasia when H. sapiens arrived.",
  ["South Africa, ~300,000 years ago.", "", "African, millions of years earlier.", "Denisovans are known from Asia."],
  "Neanderthals");
Q("ma-36", "MA", "m10", "homin", 3, "Lactase persistence is common in northern Europe but rare in most of the world. The best explanation is",
  ["A mutation that was favored by natural selection in populations that domesticated dairy animals", "Inheritance of Neanderthal genes", "Adults who drink milk acquire the ability and pass it to their children", "All mammals keep lactase as adults"], 0,
  "A single-nucleotide mutation spread under selection in dairying cultures (<20,000 years).",
  ["", "Not the explanation taught.", "Acquired traits aren't inherited.", "Most adult mammals are lactose intolerant."],
  "Recent human evolution", "C is the Lamarckian trap.");

// ================================================= MOCK EXAM B
Q("mb-1", "MB", "m4", "tax", 1, "The correct species name for humans is",
  ["Homo sapien", "<i>Homo sapiens</i>", "<i>Homo Sapiens</i>", "Sapiens homo"], 1,
  "Genus + epithet, italicized, genus capitalized.",
  ["'Sapien' is wrong and it isn't italicized.", "", "Epithet must be lowercase.", "Order reversed."],
  "Binomial nomenclature");
Q("mb-2", "MB", "m4", "tax", 3, "Suppose new DNA data showed that a group long classified as fungi is actually more closely related to animals than to other fungi. Taxonomists would most likely",
  ["Keep the old classification because it's traditional", "Revise the classification so named groups stay monophyletic", "Move the group into Kingdom Protista", "Classify it by cell-wall color"], 1,
  "When the phylogeny changes, taxonomy is revised to match (M6_1 slide 11).",
  ["Taxonomy should follow phylogeny.", "", "Protista isn't a valid taxon.", "Not a method."],
  "Taxonomy follows phylogeny");
Q("mb-3", "MB", "m5", "virus", 2, "Which is NOT one of the competing hypotheses for how viruses evolved?",
  ["Viruses escaped from host genetic material (progressive)", "Viruses descended from parasitic cells that lost genes (regressive)", "Viruses existed before cells (virus-first)", "Viruses evolved from fungi that lost their hyphae"], 3,
  "The three hypotheses are progressive, regressive and virus-first.",
  ["A real hypothesis.", "A real hypothesis.", "A real hypothesis.", ""],
  "Virus origins");
Q("mb-4", "MB", "m5", "vdis", 2, "Oncolytic virotherapy uses viruses to",
  ["Deliver working genes into a patient's cells", "Infect and kill cancer cells", "Kill antibiotic-resistant bacteria", "Make vaccines without any viral genes"], 1,
  "Onco = tumor, lytic = destroying.",
  ["Gene therapy.", "", "Phage therapy.", "Not the definition."],
  "Virus-based therapies");
Q("mb-5", "MB", "m5", "pevo", 3, "In Anabaena, nitrogen fixation happens only in heterocysts, cells that keep oxygen out. Why?",
  ["Oxygen interferes with nitrogen fixation, so it's separated from oxygen-producing photosynthetic cells", "Heterocysts are the only cells with ribosomes", "Nitrogen fixation produces oxygen that would kill the filament", "Heterocysts photosynthesize faster without oxygen"], 0,
  "Photosynthesis makes O₂, which disrupts nitrogen fixation. Division of labor solves this: sugars are traded for fixed nitrogen.",
  ["", "All cells have ribosomes.", "Nitrogen fixation doesn't produce O₂.", "Heterocysts specialize in N fixation, not photosynthesis."],
  "Metabolic cooperation");
Q("mb-6", "MB", "m5", "pstruct", 1, "True or False: prokaryotes do not have a nucleus.",
  ["True", "False"], 0,
  "Their DNA is in a nucleoid region with no membrane.",
  ["", "Pro-karyote = 'before nucleus'."],
  "Prokaryote structure");
Q("mb-7", "MB", "m5", "pnut", 3, "A bacterium uses light for energy but cannot fix CO₂; it must take in organic compounds for carbon. It is a",
  ["Photoautotroph", "Photoheterotroph", "Chemoautotroph", "Chemoheterotroph"], 1,
  "Photo (light energy) + hetero (organic carbon).",
  ["It can't fix CO₂.", "", "It uses light, not chemicals, and can't fix CO₂.", "It uses light energy."],
  "Nutrition modes");
Q("mb-8", "MB", "m5", "pnut", 2, "Which statement about methanogens is TRUE?",
  ["They are obligately anaerobic archaea that produce methane", "They are aerobic bacteria that consume methane", "They are photosynthetic protists", "They live only in hot springs"], 0,
  "Methanogens: archaea; permafrost, wetlands, cow guts; may have contributed to the Permian extinction.",
  ["", "Opposite.", "They're prokaryotes.", "They live in permafrost, wetlands, cow guts."],
  "Methanogens");
Q("mb-9", "MB", "m5", "pdis", 2, "Syphilis and Lyme disease are both caused by",
  ["Gram-negative spirochete bacteria", "Mycobacteria", "Viruses", "Protists transmitted by mosquitoes"], 0,
  "Treponema pallidum and Borrelia burgdorferi are spirochetes.",
  ["", "Those cause TB and leprosy.", "Both are bacterial.", "Lyme is spread by ticks; both are bacteria."],
  "Bacterial disease groups");
Q("mb-10", "MB", "m6", "endo", 3, "Giardia, a eukaryote living in anaerobic environments, has only highly reduced mitochondria. This is best explained by",
  ["Giardia being a prokaryote", "Endosymbiotic theory being false", "Lineages reducing organelles they no longer need in low-oxygen habitats", "Giardia getting its mitochondria from cyanobacteria"], 2,
  "Mitochondria are present in MOST eukaryotes; some lineages living without O₂ (many excavates) reduced them.",
  ["Giardia has a nucleus.", "Reduced organelles are consistent with the theory.", "", "Mitochondria come from α-proteobacteria."],
  "Eukaryote traits");
Q("mb-11", "MB", "m6", "pgroups", 1, "All eukaryotes that are not plants, fungi or animals have traditionally been called",
  ["Prokaryotes", "Protists", "Opisthokonts", "Archaea"], 1,
  "'Protist' is the traditional, informal name.",
  ["Prokaryotes lack nuclei.", "", "Opisthokonts INCLUDE fungi and animals.", "A prokaryote domain."],
  "Protist definition");
Q("mb-12", "MB", "m6", "pdis2", 2, "Green algae differ from land plants in that some green algae",
  ["Lack chlorophyll b", "Are unicellular", "Lack cellulose walls", "Are prokaryotic"], 1,
  "Some green algae are single cells; all land plants are multicellular embryophytes.",
  ["Both have chlorophyll a and b.", "", "Both have cellulose walls.", "Green algae are eukaryotes."],
  "Green algae vs plants");
Q("mb-13", "MB", "m6", "pdis2", 3, "Which diseases are caused by protists? (Select all that apply.)",
  ["Malaria", "Giardiasis", "Trichomoniasis", "Tuberculosis", "Ringworm"], [0, 1, 2],
  "Plasmodium, Giardia and Trichomonas are protists.",
  ["", "", "", "Bacterial (Mycobacterium).", "Fungal."],
  "Disease → organism type");
Q("mb-14", "MB", "m6", "frep", 3, "Which sequence describes sexual reproduction in a mushroom-forming fungus?",
  ["Plasmogamy → dikaryotic mycelium → karyogamy → meiosis → haploid spores", "Karyogamy → plasmogamy → mitosis → diploid spores", "Meiosis → plasmogamy → karyogamy → diploid mycelium", "Spores → karyogamy → dikaryotic mycelium → plasmogamy"], 0,
  "Cytoplasm fuses, then a long dikaryotic stage (the mushroom), then nuclei fuse, then meiosis makes spores.",
  ["", "Order reversed and spores are haploid.", "Meiosis comes after karyogamy.", "Scrambled order."],
  "Fungal life cycle");
Q("mb-15", "MB", "m6", "fphyla", 2, "Which phylum includes most edible mushrooms as well as plant parasites called rusts and smuts?",
  ["Ascomycota", "Basidiomycota", "Chytridiomycota", "Zygomycota"], 1,
  "Basidiomycota (M6_2 slide 38).",
  ["Yeasts, morels, truffles.", "", "Flagellated chytrids.", "Bread molds."],
  "Fungal phyla");
Q("mb-16", "MB", "m6", "fecol", 1, "Mycorrhizal fungi growing with plant roots and providing more water and nutrient uptake is an example of a ______ interaction.",
  ["Parasitic", "Commensal", "Mutualistic", "Predatory"], 2,
  "Both benefit: the plant gets minerals and the fungus gets sugars.",
  ["Parasitism harms the host.", "Commensalism gives the host no benefit.", "", "Not predation."],
  "Mycorrhizae");
Q("mb-17", "MB", "m7", "porig", 2, "Which was a CHALLENGE (not a benefit) for plants moving onto land?",
  ["Unfiltered sunlight", "More plentiful CO₂", "Scarcity of water", "Nutrient-rich soil"], 2,
  "Challenges: scarce water and gravity.",
  ["Benefit.", "Benefit.", "", "Benefit."],
  "Land adaptations");
Q("mb-18", "MB", "m7", "bryo", 2, "Which structure anchors a moss gametophyte but does NOT absorb water or minerals?",
  ["Root", "Rhizoid", "Xylem", "Sorus"], 1,
  "Rhizoids anchor only.",
  ["Bryophytes lack true roots.", "", "Bryophytes lack xylem.", "Fern spore clusters."],
  "Bryophyte structures");
Q("mb-19", "MB", "m7", "bryo", 3, "Lignin evolved ~450 million years ago. What was its most direct consequence for plants?",
  ["Plants could grow tall with water-conducting vascular tissue, making forests possible", "Plants no longer needed water for fertilization", "Plants evolved flowers", "Plants lost alternation of generations"], 0,
  "Lignin strengthens xylem, which allowed height, forests and competition for sunlight.",
  ["", "That was seeds and pollen.", "Much later.", "All plants keep it."],
  "Vascular tissue");
Q("mb-20", "MB", "m7", "gymno", 1, "Gymnosperms dominated terrestrial ecosystems during the",
  ["Cenozoic", "Mesozoic", "Cambrian", "Archean"], 1,
  "252–66 mya, alongside the dinosaurs.",
  ["Angiosperms and mammals dominate the Cenozoic.", "", "No land plants yet.", "Only prokaryotes."],
  "Geologic time");
Q("mb-21", "MB", "m7", "angio", 2, "Endosperm in an angiosperm seed is",
  ["Diploid tissue that becomes the embryo", "Triploid tissue that nourishes the developing embryo", "Haploid pollen tissue", "The fruit wall"], 1,
  "The second sperm + two polar nuclei → 3n endosperm.",
  ["The zygote/embryo is diploid.", "", "Pollen is the male gametophyte.", "The fruit wall is the ripened ovary (pericarp)."],
  "Double fertilization");
Q("mb-22", "MB", "m7", "angio", 3, "In a pea pod, the pod and the peas are, respectively,",
  ["Seed; fruit", "Fruit (ripened ovary); seeds (mature ovules)", "Ovule; ovary", "Endosperm; embryo"], 1,
  "M7 slide 60: a pea pod is a fruit with seeds encased in a ripened ovary.",
  ["Reversed.", "", "Those are immature names, and also reversed.", "Not the pod and peas."],
  "Fruit vs seed", "Reversal.");
Q("mb-23", "MB", "m7", "angio", 1, "The sticky tip of the carpel that receives pollen is the",
  ["Anther", "Stigma", "Ovary", "Filament"], 1,
  "Stigma → style → ovary.",
  ["Makes pollen.", "", "At the base.", "Stalk of the stamen."],
  "Flower anatomy");
Q("mb-24", "MB", "m8", "anim", 1, "Which is NOT a feature common to most animals?",
  ["Heterotrophic nutrition by ingestion", "Cell walls", "Nerves and muscles", "Multicellularity"], 1,
  "Animals lack cell walls; collagen and other proteins provide support.",
  ["Common feature.", "", "Common feature.", "Common feature."],
  "Animal traits");
Q("mb-25", "MB", "m8", "anim", 1, "How many animal phyla include unicellular animals?",
  ["None", "One (Porifera)", "Two", "Most of them"], 0,
  "All animals are multicellular.",
  ["", "Sponges are multicellular.", "None.", "None."],
  "Animal traits", "Sponges as the tempting exception.");
Q("mb-26", "MB", "m8", "body", 2, "What defines radial symmetry?",
  ["Only one plane divides the body into mirror halves", "Body parts arranged around a central axis, so any slice through that axis gives mirror images", "No plane divides the body into equal halves", "A distinct head end with sense organs"], 1,
  "Radial = around one axis, many planes of symmetry.",
  ["Bilateral symmetry.", "", "Asymmetry (some sponges).", "Cephalization (bilateral animals)."],
  "Symmetry");
Q("mb-27", "MB", "m8", "body", 2, "Cephalization is most commonly associated with",
  ["Sessile, radially symmetric animals", "Bilaterally symmetric animals that move actively", "Sponges", "Animals without tissues"], 1,
  "Moving head-first favors concentrating senses and nerves at the front.",
  ["Radial animals meet the environment from all sides.", "", "No tissues, no nervous system.", "Needs nervous tissue."],
  "Cephalization");
Q("mb-28", "MB", "m8", "inv", 3, "Bivalve molluscs like mussels and scallops have a trochophore larval stage. To which clade do they NOT belong?",
  ["Lophotrochozoa", "Protostomia", "Ecdysozoa", "Bilateria"], 2,
  "Molluscs are lophotrochozoan protostome bilaterians; they don't molt (not Ecdysozoa).",
  ["They do belong.", "They do belong.", "", "They do belong."],
  "Protostome clades");
Q("mb-29", "MB", "m9", "chord", 2, "Which animal keeps all four chordate characteristics as an adult?",
  ["An adult tunicate", "A lancelet", "An adult human", "A sea star"], 1,
  "Lancelets retain notochord, dorsal nerve cord, pharyngeal slits and tail.",
  ["Adult tunicates lose most traits.", "", "Humans lose the slits and tail.", "Echinoderms aren't chordates."],
  "Invertebrate chordates");
Q("mb-30", "MB", "m9", "chord", 3, "The earliest known mineralized (bony) structures in vertebrates are associated with",
  ["The skull roof", "The mouth (teeth / tooth-like elements)", "Limb bones", "The vertebral column"], 1,
  "Conodont tooth-like elements; 'teeth came first' (Your Inner Fish ch 4).",
  ["Later.", "", "Much later (tetrapods).", "Later."],
  "Vertebrate history ⚑ textbook/book");
Q("mb-31", "MB", "m9", "tetra", 2, "Which membrane of the amniotic egg stores nitrogenous waste?",
  ["Amnion", "Chorion", "Allantois", "Yolk sac"], 2,
  "The allantois stores waste (and helps with gas exchange).",
  ["Fluid cushion.", "Gas exchange.", "", "Food."],
  "Amniotic egg ⚑ textbook");
Q("mb-32", "MB", "m9", "tetra", 4, "A fossil has feathers, but also teeth, clawed fingers and a long bony tail. This fossil best supports which conclusion?",
  ["Birds evolved from theropod dinosaurs", "Mammals evolved from reptiles", "Feathers evolved after beaks", "Birds and dinosaurs are unrelated"], 0,
  "This describes Archaeopteryx: a mosaic of dinosaur and bird features.",
  ["", "Not about mammals.", "This animal has feathers but teeth (no beak), the opposite.", "It links them."],
  "Birds as dinosaurs");
Q("mb-33", "MB", "m9", "mammal", 1, "Humans belong to which subgroup of mammals?",
  ["Monotremes", "Marsupials", "Eutherians (placentals)", "Prosimians"], 2,
  "Long gestation with a complex placenta.",
  ["Egg-layers.", "Pouches.", "", "A primate group, not a mammal subgroup by reproduction."],
  "Mammal lineages");
Q("mb-34", "MB", "m9", "yif", 2, "What is unique about mammalian hearing?",
  ["Mammals have three middle-ear bones (malleus, incus, stapes)", "Mammals are the only animals with an inner ear", "Mammals hear with their lateral line", "Mammals have one middle-ear bone"], 0,
  "Reptiles and birds have one middle-ear bone (the stapes); mammals have three.",
  ["", "Fish and other vertebrates have inner ears.", "Lateral lines are a fish system.", "That's reptiles and birds."],
  "Mammalian ear ⚑ book");
Q("mb-35", "MB", "m10", "homin", 3, "Which scenario is NOT supported by scientific evidence?",
  ["Homo sapiens originated in Africa", "Modern humans interbred with Neanderthals", "Denny was a hybrid with a Neanderthal mother and Denisovan father", "Modern humans evolved from Neanderthals in Europe and replaced Africans"], 3,
  "The earliest H. sapiens are African; Neanderthals were a sister lineage that contributed a little DNA.",
  ["Supported.", "Supported (1–4% in non-Africans).", "Supported (DNA).", ""],
  "Human origins");
Q("mb-36", "MB", "m10", "homin", 3, "Ardipithecus ramidus ('Ardi', 4.4 mya) changed thinking about bipedalism mainly because",
  ["She had a brain as large as modern humans", "She lived in a forest, challenging the idea that bipedalism began on the savanna", "She was the first hominin with a sequenced genome", "She was fully bipedal with a non-grasping foot"], 1,
  "Before Ardi (2009), the savanna hypothesis led. Ardi was a facultative biped in forests with a grasping big toe.",
  ["~450 cc, chimp-sized.", "", "Only humans, Neanderthals and Denisovans.", "She had an opposable (grasping) big toe."],
  "Ardi");
})(SG.Q);
