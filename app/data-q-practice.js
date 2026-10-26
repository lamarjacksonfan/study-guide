// Practice question bank (set "P").
// Q(id, set, module, topic, level, stem, options, answerIndexes, whyCorrect, whyWrong[], concept, trap)
// whyWrong is aligned with options; the entry for a correct option is "".
window.SG = window.SG || {};
SG.questions = SG.questions || [];
SG.Q = function (id, set, m, t, lvl, q, o, a, why, w, c, trap) {
  SG.questions.push({ id, set, m, t, lvl, q, o, a: Array.isArray(a) ? a : [a], why, w, c, trap: trap || "" });
};

(function (Q) {
// ---------- M4
Q("p1", "P", "m4", "tax", 1, "Which sequence lists taxonomic ranks from the one that encompasses the MOST diversity to the LEAST?",
  ["Domain, Kingdom, Class, Phylum, Order, Family, Genus, Species", "Domain, Kingdom, Phylum, Class, Order, Family, Genus, Species", "Kingdom, Domain, Phylum, Class, Family, Order, Genus, Species", "Species, Genus, Family, Order, Class, Phylum, Kingdom, Domain"], 1,
  "Domain is the broadest rank and species the narrowest: Dear King Philip Came Over For Good Soup.",
  ["Class and Phylum are swapped. Phylum is broader than Class.", "", "Kingdom and Domain are swapped (Domain is broadest), and Family and Order are also swapped.", "This is the right list in reverse (least → most diverse), so it doesn't answer the question asked."],
  "Taxonomic hierarchy", "Two reversed neighbors in an otherwise correct list; full reversal of the order asked for.");
Q("p2", "P", "m4", "tax", 2, "A named group contains the common ancestor of all green algae and land plants, but leaves out the land plants. This group is best described as",
  ["Monophyletic", "Paraphyletic", "Polyphyletic", "A clade"], 1,
  "Including an ancestor but only SOME of its descendants is the definition of paraphyletic. 'Green algae' is paraphyletic for exactly this reason (M6_1 slide 31).",
  ["A monophyletic group would have to include ALL descendants, land plants too.", "", "Polyphyletic means members came from different ancestors; here they share one ancestor.", "A clade is the same thing as a monophyletic group, so it has the same problem as A."],
  "Mono-, para-, polyphyly", "Clade = monophyletic, so A and D are really the same wrong answer.");

// ---------- M5 viruses
Q("p3", "P", "m5", "virus", 2, "Which components are found in EVERY virion? (Select all that apply.)",
  ["Nucleic acid genome", "Capsid", "Lipid envelope", "Ribosomes", "Both DNA and RNA"], [0, 1],
  "Every virion has a genome (DNA or RNA) inside a protein capsid. The envelope is present only in some viruses.",
  ["", "", "Only some viruses (flu, HIV, SARS-CoV-2) are enveloped; 'naked' viruses lack one.", "Viruses have no ribosomes; they use the host's.", "A virus has DNA OR RNA, never both."],
  "Virion structure", "'Typical' (review Q6 lists 3) vs 'every': the envelope is common but not universal.");
Q("p4", "P", "m5", "virus", 3, "A giant virus is discovered with a large genome that encodes some enzymes normally found only in cellular organisms. Which origin hypothesis does this BEST support?",
  ["Progressive (escape) hypothesis", "Regressive (reduction) hypothesis", "Virus-first hypothesis", "Endosymbiotic theory"], 1,
  "The regressive hypothesis says viruses descend from free-living cells that lost genes as they became parasites. A virus that still carries 'cell-like' genes looks like a partly reduced cell.",
  ["The escape hypothesis has viruses starting as small pieces of host genetic material, which doesn't predict a large, cell-like gene set.", "", "Virus-first proposes viruses predate cells; it doesn't explain why a virus has cellular enzyme genes.", "Endosymbiotic theory explains mitochondria and chloroplasts, not viruses."],
  "Virus origin hypotheses", "D is a real theory from another topic: true biology that doesn't answer the question.");
Q("p5", "P", "m5", "virus", 2, "A virologist groups viruses by whether their genome is dsDNA, ssDNA, dsRNA, +ssRNA or −ssRNA, and whether they use reverse transcriptase. Which system is she using?",
  ["Linnaean binomial nomenclature", "Gram staining", "Baltimore classification", "Classification by capsid shape"], 2,
  "Baltimore classification sorts viruses into 7 groups by genome type and how they make mRNA.",
  ["Linnaean naming gives two-part species names; it doesn't sort by genome type.", "Gram staining sorts BACTERIA by cell wall.", "", "Capsid shape (helical, polyhedral) is the older structural system, not genome-based."],
  "Baltimore classification");
Q("p6", "P", "m5", "virus", 3, "An infectious agent stays infectious after treatments that destroy DNA and RNA, but loses infectivity after treatments that denature proteins. The agent is most likely a",
  ["Viroid", "Prion", "Bacteriophage", "Enveloped RNA virus"], 1,
  "Prions are infectious misfolded proteins with no nucleic acid, so destroying nucleic acids has no effect but denaturing proteins does.",
  ["Viroids are naked RNA, so nucleic-acid destruction would inactivate them.", "", "A phage has a DNA or RNA genome that the treatment would destroy.", "Any virus depends on its nucleic acid genome."],
  "Prions vs viruses vs viroids", "Experimental-reasoning version of 'prions are made of…'.");

// ---------- M5 viral disease
Q("p7", "P", "m5", "vdis", 2, "Which is NOT a potential strategy to combat a measles outbreak?",
  ["Vaccinating susceptible people", "Treating patients with an antiviral drug", "Prescribing a full course of antibiotics to kill the measles virus", "Isolating infected people"], 2,
  "Measles is a virus. Antibiotics target bacterial structures (peptidoglycan, bacterial ribosomes) that viruses don't have.",
  ["Vaccines prevent viral infection: a valid strategy.", "Antivirals block steps of viral replication: valid.", "", "Isolation reduces transmission: valid."],
  "Treating viral vs bacterial disease", "Mirrors review Q5. 'A full course' sounds responsible but the drug type is wrong.");
Q("p8", "P", "m5", "vdis", 3, "A coronavirus circulates harmlessly in a bat population. A mutation lets its spike protein bind a human receptor, and a farmer handling the bats becomes infected. This event is best described as",
  ["A spillover event", "Horizontal gene transfer", "Secondary endosymbiosis", "Antibiotic resistance"], 0,
  "A spillover is a pathogen jumping from its animal reservoir to a new host species. The mutation shows why evolution is key to emerging disease.",
  ["", "HGT moves genes between prokaryotes; this is about a host switch.", "Endosymbiosis is one cell living inside another permanently; unrelated.", "Resistance concerns bacteria surviving drugs."],
  "Spillover", "");
Q("p9", "P", "m5", "vdis", 2, "Doctors treat a patient's antibiotic-resistant MRSA infection with viruses that infect and kill S. aureus. This is",
  ["Gene therapy", "Phage therapy", "Oncolytic virotherapy", "Vaccination"], 1,
  "Bacteriophages are viruses of bacteria; using them to kill pathogenic bacteria is phage therapy.",
  ["Gene therapy uses viral vectors to deliver genes to the patient's cells.", "", "Oncolytic viruses target cancer cells.", "Vaccines train immunity; they don't directly kill an existing infection."],
  "Virus-based therapies", "All four are real 'virus' applications. Match the target (bacteria).");

// ---------- M5 prokaryote evolution
Q("p10", "P", "m5", "pevo", 1, "Stromatolites provide early fossil evidence of life because they are",
  ["Fossilized coral reefs", "Fossilized microbial mats", "Mineral deposits from hydrothermal vents", "Fossilized eukaryotic algae"], 1,
  "A stromatolite is a fossilized microbial mat, a layered sheet of prokaryotes (M5_2 slide 6).",
  ["Corals are animals that appeared far later.", "", "They are biological, not purely mineral.", "They are prokaryotic (including cyanobacteria), not eukaryotic."],
  "Stromatolites");
Q("p11", "P", "m5", "pevo", 3, "Which sequence of events is BEST supported by the evidence presented in class?",
  ["Cyanobacteria release O₂ → anaerobic prokaryotes decline → aerobic cells with mitochondria arise", "Mitochondria evolve → O₂ rises → cyanobacteria evolve", "O₂-rich early atmosphere → anaerobic prokaryotes evolve → cyanobacteria", "Eukaryotes evolve → produce O₂ → prokaryotes adapt to O₂"], 0,
  "The early atmosphere was anoxic. Cyanobacteria's oxygenic photosynthesis raised O₂, causing a mass extinction of anaerobes and opening the way for aerobic eukaryotes (endosymbiosis of an aerobic bacterium).",
  ["", "Reversed: mitochondria required an O₂-rich world first.", "The early atmosphere was anoxic, not O₂-rich.", "Prokaryotes (cyanobacteria) made the first O₂, long before eukaryotes."],
  "Oxygen revolution chain", "Reversing cause and effect.");
Q("p12", "P", "m5", "pevo", 2, "Which statement about biofilms is FALSE?",
  ["They are held together by a gummy polysaccharide matrix.", "Cells at the edge release signals that recruit new cells.", "Channels allow nutrients in and wastes out.", "All cells in a biofilm must belong to a single species."], 3,
  "Biofilms are formed by cells of ONE OR MORE prokaryote species (M5_2 slide 7).",
  ["True (slide 7).", "True: chemical signaling recruits cells.", "True: channels serve interior cells.", ""],
  "Biofilms", "Absolute word ('must') on an otherwise plausible statement.");

// ---------- M5 structure
Q("p13", "P", "m5", "pstruct", 2, "Which is NOT true of Gram-negative bacteria?",
  ["They have an outer membrane containing lipopolysaccharide.", "They stain pink in a Gram stain.", "They have a thick peptidoglycan layer that traps the purple stain.", "They release endotoxins when they die."], 2,
  "Gram-negative bacteria have a THIN peptidoglycan layer; it's Gram-positive cells whose thick layer retains the purple stain.",
  ["True: the LPS outer membrane is the Gram − hallmark.", "True: they lose the purple and look pink.", "", "True: endotoxin is the LPS released when Gram − cells break down."],
  "Gram staining", "Professor-style NOT question; C describes Gram-positive (category swap).");
Q("p14", "P", "m5", "pstruct", 3, "A newly cultured cell has ribosomes, a single circular chromosome, no nucleus, a cell wall WITHOUT peptidoglycan, and ether-linked membrane lipids. It is most likely",
  ["A Gram-positive bacterium", "A Gram-negative bacterium", "An archaean", "A fungus"], 2,
  "No nucleus = prokaryote. No peptidoglycan + ether lipids = Archaea (M5_2 slides 15, 18).",
  ["Gram-positive bacteria have a thick peptidoglycan wall.", "Gram-negative bacteria still have (thin) peptidoglycan and ester lipids.", "", "Fungi are eukaryotes with a nucleus and chitin walls."],
  "Bacteria vs Archaea");
Q("p15", "P", "m5", "pstruct", 2, "A plasmid carrying an antibiotic-resistance gene passes from one bacterium to a neighbor through a pilus. This process is",
  ["Transformation", "Transduction", "Conjugation", "Binary fission"], 2,
  "Conjugation = direct DNA transfer between cells in contact via a pilus.",
  ["Transformation is uptake of free DNA from the environment.", "Transduction uses a bacteriophage to carry DNA.", "", "Binary fission is asexual division producing clones, not transfer between cells."],
  "Horizontal gene transfer", "Three 'trans-/con-' look-alike terms.");
Q("p16", "P", "m5", "pstruct", 3, "Why can cholera keep making a person sick even after antibiotics have killed the Vibrio cholerae bacteria?",
  ["Vibrio secretes a protein exotoxin that remains active without the bacteria.", "Dead Vibrio release peptidoglycan that acts as an exotoxin.", "Cholera is actually caused by a virus that antibiotics can't reach.", "Vibrio forms spores that survive in the liver."], 0,
  "Exotoxins are proteins secreted by bacteria that can cause disease even when the bacteria are no longer present (M5_2 slide 21: cholera).",
  ["", "Peptidoglycan isn't a toxin, and toxins released at death are ENDOtoxins (LPS).", "Cholera is bacterial.", "Not discussed and not the mechanism."],
  "Exotoxin vs endotoxin", "B mixes up the two toxin types.");

// ---------- M5 nutrition / extremophiles
Q("p17", "P", "m5", "pnut", 2, "A microbe at a deep-sea vent oxidizes hydrogen sulfide for energy and builds its organic molecules from CO₂. It is a",
  ["Photoautotroph", "Chemoautotroph", "Chemoheterotroph", "Photoheterotroph"], 1,
  "Energy from chemicals (chemo-) + carbon from CO₂ (auto-) = chemoautotroph, a mode unique to prokaryotes.",
  ["There's no light at a deep-sea vent; photo- means light energy.", "", "Hetero- means carbon from organic molecules, but this microbe fixes CO₂.", "Wrong on both energy and carbon."],
  "Nutrition modes", "Each prefix answers a different question: energy vs carbon.");
Q("p18", "P", "m5", "pnut", 1, "An organism that grows best at 100 °C is called a ______ and is most likely classified in ______.",
  ["thermophile; Bacteria", "hyperthermophile; Archaea", "psychrophile; Archaea", "halophile; Eukarya"], 1,
  "80–122 °C = hyperthermophile; most known hyperthermophiles are Archaea (review Q12).",
  ["Thermophiles grow at 60–80 °C; 100 °C is beyond that.", "", "Psychrophiles love cold.", "Halophiles love salt, and these are prokaryotes, not eukaryotes."],
  "Extremophiles", "Two-blank pairing: both halves must be right.");
Q("p19", "P", "m5", "pnut", 3, "Facultative anaerobes such as E. coli, Salmonella and MRSA tend to be especially dangerous pathogens because they",
  ["Can grow in both oxygen-rich and oxygen-poor tissues, so they grow almost anywhere", "Produce oxygen that damages host tissue", "Are always Gram-positive", "Cannot be killed by any antibiotic"], 0,
  "Facultative anaerobes use O₂ when present and ferment otherwise. That flexibility lets them grow almost anywhere and makes resistance more likely (M5_2 slide 29).",
  ["", "Bacterial pathogens don't damage tissue by making oxygen.", "E. coli and Salmonella are Gram-negative.", "Overstated absolute; they are treatable, just more likely to evolve resistance."],
  "Oxygen requirements", "Absolute 'cannot… any'.");

// ---------- M5 disease / resistance
Q("p20", "P", "m5", "pdis", 2, "Which practice is LEAST likely to promote antibiotic resistance?",
  ["Routine preventive antibiotics in livestock feed", "Taking antibiotics for a cold", "Completing the full prescribed course of antibiotics", "Antibiotic pollution in waterways"], 2,
  "Finishing the course kills the infection rather than leaving survivors exposed to a low dose. The other three create 'survivable selective pressure'.",
  ["Prophylactic livestock use is one of the biggest threats (slide 37).", "Colds are viral; this exposes bacteria to antibiotics for no benefit.", "", "Environmental exposure is a major driver."],
  "Antibiotic resistance", "LEAST-likely wording flips the usual question.");
Q("p21", "P", "m5", "pdis", 1, "The Black Death (1346–1361), which killed ~100 million people, was caused by",
  ["Salmonella enterica serovar Typhi", "Yersinia pestis", "Vibrio cholerae", "Borrelia burgdorferi"], 1,
  "Yersinia pestis causes bubonic plague: the Plague of Justinian and the Black Death.",
  ["Typhoid fever (Plague of Athens).", "", "Cholera.", "Lyme disease."],
  "Historic plagues");
Q("p22", "P", "m5", "pdis", 3, "Penicillin came into wide use in 1943, and penicillin-resistant S. aureus was common by 1945. The BEST explanation is that",
  ["Penicillin caused mutations that made the bacteria resistant", "Penicillin selected for resistant variants that already existed, and they reproduced", "Individual bacteria learned to tolerate penicillin", "S. aureus is a virus, so penicillin never worked well"], 1,
  "Natural selection: resistant variants (from earlier mutations or plasmids) survived and multiplied. Bacteria reproduce fast, so this happens in a couple of years.",
  ["Antibiotics don't cause the needed mutations; they select among existing variation.", "", "Individuals don't 'learn'; populations evolve.", "S. aureus is a bacterium."],
  "Natural selection for resistance", "Reversed cause and effect (A) is the classic distractor.");

// ---------- M5 benefits
Q("p23", "P", "m5", "pben", 1, "In general, what is the primary ecological role of prokaryotes?",
  ["Causing disease", "Decomposing organic matter", "Producing most of Earth's oxygen", "Fixing carbon in the deep ocean"], 1,
  "M5_2 slide 40: the primary role is decomposition, which releases nutrients for plants.",
  ["Only a small fraction are pathogens.", "", "Prokaryotes do ~20% of photosynthesis; plants ~50%.", "Not described as their primary role."],
  "Prokaryote ecology");
Q("p24", "P", "m5", "pben", 2, "After an oil spill, engineers spray the beach with nutrients that encourage oil-degrading bacteria to grow. This is an example of",
  ["Bioremediation", "Biofilm formation", "Eutrophication", "Nitrogen fixation"], 0,
  "Bioremediation = using prokaryotes to remove pollutants (e.g. Exxon Valdez, 1989).",
  ["", "A biofilm is a surface colony; not the goal here.", "Eutrophication is harmful nutrient overload causing algal blooms.", "N₂ → NH₃; unrelated to oil."],
  "Bioremediation", "Look-alike 'bio-' words.");
Q("p25", "P", "m5", "pben", 2, "Bacteroides thetaiotaomicron in the human gut makes vitamins and carbohydrates for its host and gets food and shelter in return. This relationship is",
  ["Commensalism", "Parasitism", "Mutualism", "Pathogenic"], 2,
  "Both partners benefit (+/+) = mutualism.",
  ["Commensalism is +/0; here the host clearly benefits.", "Parasitism harms the host.", "", "A pathogen causes disease."],
  "Symbiosis types");

// ---------- M6 endosymbiosis
Q("p26", "P", "m6", "endo", 1, "According to the endosymbiotic theory, mitochondria originated from",
  ["An engulfed cyanobacterium", "An engulfed aerobic α-proteobacterium", "An infolding of the host's plasma membrane", "A virus that integrated into the host"], 1,
  "The closest DNA relatives of mitochondria are α-proteobacteria (M6_1 slide 6).",
  ["Cyanobacteria gave rise to chloroplasts.", "", "Membrane infolding is a different (non-endosymbiotic) idea, often used for the nucleus.", "No."],
  "Endosymbiosis", "Swapping the two organelle ancestors.");
Q("p27", "P", "m6", "endo", 3, "Which observation does NOT support the endosymbiotic origin of mitochondria?",
  ["Mitochondrial DNA is most similar to bacterial DNA.", "The host nuclear genome cannot build mitochondria from scratch.", "Mitochondria use a slightly different genetic code with their own tRNAs.", "The nucleus is surrounded by a double membrane."], 3,
  "The nucleus is not explained by endosymbiotic theory; its envelope says nothing about where mitochondria came from.",
  ["Supports: bacterial ancestry.", "Supports: mitochondria are inherited, not built by the host.", "Supports: a separate genetic system.", ""],
  "Endosymbiosis evidence", "True statement, wrong organelle.");
Q("p28", "P", "m6", "endo", 4, "A protist's chloroplast is wrapped in four membranes, and a tiny leftover nucleus of a red alga sits between them. The best explanation is",
  ["Primary endosymbiosis of a cyanobacterium", "Secondary endosymbiosis: a eukaryote engulfed a red alga", "Horizontal gene transfer by conjugation", "Plasmogamy without karyogamy"], 1,
  "Extra membranes plus a remnant eukaryotic nucleus show that a eukaryote (a red alga, which already had a plastid) was engulfed: secondary endosymbiosis.",
  ["Primary endosymbiosis would leave a plastid with two membranes and no extra nucleus.", "", "Conjugation moves DNA between prokaryotes, not whole cells.", "Plasmogamy is fungal cytoplasm fusion."],
  "Primary vs secondary endosymbiosis");

// ---------- M6 supergroups
Q("p29", "P", "m6", "pgroups", 2, "Your professor is throwing a party and only opisthokonts are invited. Which guest list fits?",
  ["A mushroom, a choanoflagellate and a human", "A moss, a kelp and a human", "A diatom, a mushroom and a dog", "A slime mold, a red alga and a frog"], 0,
  "Opisthokonts = fungi + animals + choanoflagellates (+ nucleariids).",
  ["", "Moss (plant) and kelp (stramenopile) aren't opisthokonts.", "Diatoms are stramenopiles.", "Slime molds are amoebozoans and red algae are Archaeplastida."],
  "Opisthokonts", "One wrong member spoils each distractor list.");
Q("p30", "P", "m6", "pgroups", 1, "All protists are",
  ["Unicellular", "Photosynthetic", "Eukaryotic", "Motile"], 2,
  "The only universal protist trait is being eukaryotic (not plant, fungus or animal).",
  ["Kelp and red seaweeds are multicellular.", "Many are heterotrophs (Giardia, Plasmodium).", "", "Many have non-motile stages."],
  "Protist diversity", "Absolute 'all'; only one option is truly universal.");
Q("p31", "P", "m6", "pgroups", 3, "Why do biologists no longer recognize a Kingdom Protista?",
  ["Protists are prokaryotes, not eukaryotes", "Some 'protists' are more closely related to animals, plants or fungi than to other protists, so the group isn't monophyletic", "All protist lineages went extinct during the Permian", "Protists lack nuclei and mitochondria"], 1,
  "DNA shows Protista is paraphyletic/polyphyletic, e.g. choanoflagellates are closer to animals (M6_1 slides 9–11).",
  ["Protists are eukaryotes.", "", "False.", "Protists have nuclei; most have mitochondria."],
  "Taxonomy vs phylogeny");

// ---------- M6 protist disease & ecology
Q("p32", "P", "m6", "pdis2", 3, "Several people develop neurological symptoms after eating shellfish harvested during a red tide. Water samples show phytoplankton with cellulose plates and two flagella. The organism belongs to the",
  ["Alveolates (dinoflagellates)", "Stramenopiles (diatoms)", "Excavata (euglenozoans)", "Amoebozoa (slime molds)"], 0,
  "Red tide + cellulose plates + two flagella = dinoflagellates (e.g. Karenia brevis), an alveolate group.",
  ["", "Diatoms can cause harmful blooms too, but they have silica shells, not cellulose plates and two flagella.", "Euglenozoans aren't red-tide organisms.", "Slime molds are terrestrial heterotrophs."],
  "Protist identification", "B is partly true (diatoms cause some blooms), so use the structural clues.");
Q("p33", "P", "m6", "pdis2", 2, "Which protist has chloroplasts but can also feed heterotrophically (a mixotroph)?",
  ["Giardia", "Euglena", "Plasmodium", "Entamoeba"], 1,
  "Euglena has chloroplasts (autotroph) but may act like a heterotroph (M6_1 slide 25).",
  ["Giardia is a heterotrophic parasite.", "", "Plasmodium is a heterotrophic parasite.", "Entamoeba is a heterotrophic parasite."],
  "Protist nutrition");
Q("p34", "P", "m6", "pdis2", 3, "Why would replacing all mosquitoes with Plasmodium-resistant strains likely eradicate malaria in humans?",
  ["Mosquitoes are a necessary intermediate host for Plasmodium", "Plasmodium is a bacterium that insecticides kill", "Mosquitoes produce the toxin that causes malaria symptoms", "Plasmodium photosynthesizes only inside mosquitoes"], 0,
  "Plasmodium must pass through mosquitoes to complete its life cycle and reach humans (M6_1 slide 29).",
  ["", "Plasmodium is an apicomplexan protist.", "Symptoms come from the parasite destroying red blood cells.", "Plasmodium is not photosynthetic."],
  "Vectors / intermediate hosts");

// ---------- M6 fungi
Q("p35", "P", "m6", "fungi", 2, "An unknown organism can be EXCLUDED from the fungi if it",
  ["Is heterotrophic", "Has cell walls of cellulose and contains chloroplasts", "Reproduces with spores", "Has cell walls containing chitin"], 1,
  "Fungi have chitin walls and no chloroplasts. Cellulose + chloroplasts points to a plant or alga.",
  ["Fungi ARE heterotrophs, so this doesn't exclude it.", "", "Fungi reproduce with spores.", "Chitin is a fungal trait."],
  "Fungal characteristics", "Review Q49 phrasing: three options are fungal traits.");
Q("p36", "P", "m6", "fungi", 3, "Why is a mycelium of thin hyphae an effective body plan for a fungus?",
  ["It gives a huge surface area for secreting enzymes and absorbing nutrients", "It lets the fungus ingest whole prey", "It maximizes light capture for photosynthesis", "It lets the fungus swim toward food"], 0,
  "Fungi digest externally and absorb, so the more surface in contact with food, the better.",
  ["", "Fungi absorb; they don't ingest.", "Fungi don't photosynthesize.", "Multicellular fungi aren't motile; they grow into new territory."],
  "Structure ↔ function");
Q("p37", "P", "m6", "fungi", 2, "Fungi resemble animals in that both",
  ["Ingest food and digest it internally", "Store carbohydrate as glycogen and are heterotrophs", "Have chitin cell walls", "Are motile"], 1,
  "Fungi and animals are opisthokonts: both heterotrophs storing glycogen.",
  ["Fungi absorb after external digestion.", "", "Animals have no cell walls (arthropods have a chitin exoskeleton, which isn't a cell wall).", "Fungi aren't motile."],
  "Fungi vs animals");

// ---------- M6 fungal reproduction
Q("p38", "P", "m6", "frep", 1, "Many multicellular fungi form super-organisms through ______ followed by ______.",
  ["karyogamy; plasmogamy", "plasmogamy; karyogamy", "meiosis; plasmogamy", "mitosis; karyogamy"], 1,
  "Cytoplasm fuses first (plasmogamy), creating a long-lived dikaryon; the nuclei fuse later (karyogamy).",
  ["Reversed order.", "", "Meiosis comes after karyogamy, not before plasmogamy.", "Karyogamy follows plasmogamy, not mitosis."],
  "Fungal life cycle", "Pair reversal, exactly as in review Q51.");
Q("p39", "P", "m6", "frep", 2, "A cell in a dikaryotic fungal hypha contains",
  ["One diploid nucleus (2n)", "Two separate haploid nuclei (n + n)", "One haploid nucleus (n)", "One triploid nucleus (3n)"], 1,
  "After plasmogamy the two parental nuclei coexist, unfused, in each cell.",
  ["That's after karyogamy (the zygote).", "", "That's a normal haploid hypha before plasmogamy.", "Triploid is plant endosperm."],
  "Dikaryon");
Q("p40", "P", "m6", "frep", 3, "A mold reproduces asexually while food is plentiful but switches to sexual reproduction when its habitat dries out. Why is this switch advantageous?",
  ["Sexual spores are hardier and genetically varied, improving survival in poor conditions", "Asexual reproduction is slower in good conditions", "Sexual reproduction needs standing water", "Sexual reproduction avoids meiosis"], 0,
  "Lecture: asexual is faster (good conditions); sexual makes hardier, recombinant spores (poor conditions).",
  ["", "Asexual is FASTER.", "Not required; this mold switched because it's drying out.", "Sexual reproduction REQUIRES meiosis."],
  "Asexual vs sexual reproduction");

// ---------- M6 fungal phyla
Q("p41", "P", "m6", "fphyla", 2, "The fungus responsible for global amphibian declines belongs to",
  ["Ascomycota", "Basidiomycota", "Chytridiomycota", "Zygomycota"], 2,
  "Batrachochytrium dendrobatidis (Bd) is a chytrid: unicellular, with flagella.",
  ["Ascomycetes include the bat white-nose fungus, not Bd.", "Basidiomycetes are mushrooms and wood decomposers.", "", "Zygomycetes are bread molds."],
  "Fungal phyla", "Bat (asco) vs frog (chytrid) disease swap.");
Q("p42", "P", "m6", "fphyla", 2, "Which phylum makes spores in sac-like asci and includes yeasts, morels and truffles?",
  ["Ascomycota", "Basidiomycota", "Zygomycota", "Chytridiomycota"], 0,
  "Asco = sac. Ascomycetes form ascocarps containing asci.",
  ["", "Basidiomycetes form mushrooms with basidia.", "Zygomycetes form zygosporangia.", "Chytrids have flagellated spores."],
  "Fungal phyla");
Q("p43", "P", "m6", "fphyla", 4, "During the Carboniferous, undecayed plant material piled up and became coal. The later evolution of which fungal group most plausibly slowed coal formation?",
  ["Chytridiomycota, because they swim in water", "Basidiomycota, because they are the best decomposers of lignin", "Zygomycota, because their zygosporangia resist drying", "Ascomycota, because they include yeasts"], 1,
  "Coal formed because lignin decayed slowly. Basidiomycetes are best at breaking lignin down (M6_2 slide 38 + M7 slide 33).",
  ["Swimming has nothing to do with wood decay.", "", "True trait, but irrelevant to lignin.", "True trait, but irrelevant to lignin."],
  "Cross-module: fungi ↔ coal", "Distractors pair a TRUE fact with an irrelevant reason.");

// ---------- M6 fungal ecology
Q("p44", "P", "m6", "fecol", 2, "Lichens obtain organic carbon from carbohydrates made by",
  ["Photosynthesis by the fungal partner", "Photosynthesis by the algal or cyanobacterial partner", "Absorption of carbon from the rock surface", "Mycorrhizal connections to nearby trees"], 1,
  "Fungi can't photosynthesize; the photosynthetic partner supplies the sugar.",
  ["Fungi have no chloroplasts.", "", "Rock doesn't supply organic carbon.", "Mycorrhizae are root associations, not lichens."],
  "Lichens");
Q("p45", "P", "m6", "fecol", 2, "Ecological roles of fungi include (select all that apply):",
  ["Decomposers of dead organic matter", "Mutualists such as mycorrhizae", "Parasites and pathogens of plants", "Primary producers at the base of food webs"], [0, 1, 2],
  "Fungi decompose, form mutualisms (mycorrhizae, lichens, endophytes) and parasitize (~30% of species, mostly plants).",
  ["", "", "", "Fungi are heterotrophs, not producers."],
  "Fungal ecology", "");
Q("p46", "P", "m6", "fecol", 2, "In a mycorrhizal mutualism,",
  ["The fungus provides phosphate and minerals; the plant provides sugars", "The plant provides phosphate; the fungus provides sugars from photosynthesis", "The fungus parasitizes the root without giving anything back", "The fungus provides nitrogen fixed by its chloroplasts"], 0,
  "Mycorrhizal fungi deliver phosphate ions and minerals; plants supply organic nutrients (M6_2 slide 14).",
  ["", "Reversed: fungi can't photosynthesize.", "That's parasitism, not mutualism.", "Fungi have no chloroplasts, and N fixation is a prokaryote skill."],
  "Mycorrhizae", "Direction-of-exchange reversal.");

// ---------- M7
Q("p47", "P", "m7", "porig", 1, "In land plants, sporophytes are ______, whereas gametophytes are ______.",
  ["haploid; diploid", "diploid; haploid", "diploid; triploid", "haploid; haploid"], 1,
  "Sporophyte = 2n (makes spores by meiosis); gametophyte = n (makes gametes by mitosis).",
  ["Reversed.", "", "Triploid is endosperm.", "Sporophytes are diploid."],
  "Ploidy of generations", "Reversed pair (review Q60).");
Q("p48", "P", "m7", "porig", 3, "In plants, gametes are produced by mitosis rather than meiosis because",
  ["The gametophyte that makes them is already haploid", "Meiosis does not occur in plants", "Plant gametes are diploid", "Spores fuse to form gametes"], 0,
  "The haploid gametophyte simply copies its haploid nuclei by mitosis. Meiosis happens earlier, in the sporophyte, to make spores.",
  ["", "Meiosis happens in the sporophyte's sporangia.", "Gametes are haploid.", "Spores grow into gametophytes; they don't fuse."],
  "Alternation of generations logic");
Q("p49", "P", "m7", "porig", 2, "Which trait is found in land plants but NOT in charophytes?",
  ["Chlorophyll a and b", "Cellulose cell walls", "A multicellular, dependent embryo", "Flagellated sperm"], 2,
  "The embryo is the single defining derived trait of land plants (embryophytes).",
  ["Shared with green algae.", "Shared with green algae.", "", "Charophytes also have flagellated sperm (evidence of relatedness)."],
  "Plant derived traits", "Three shared ancestral traits vs one derived trait.");
Q("p50", "P", "m7", "porig", 1, "How does a plant get the carbon it needs to make glucose?",
  ["Absorbing organic carbon from the soil through roots", "Taking in CO₂ from the air", "From mycorrhizal fungi", "From water absorbed by roots"], 1,
  "Photosynthesis fixes atmospheric CO₂ (entering through stomata) into sugar.",
  ["Roots take up water and minerals, not carbon for glucose.", "", "Fungi deliver phosphate and minerals; plants give fungi carbon.", "Water supplies hydrogen/electrons and releases O₂, not carbon."],
  "Plant carbon source");
Q("p51", "P", "m7", "bryo", 2, "While mosses can cover large areas, they never grow more than a few centimeters tall. Why?",
  ["They need water for fertilization", "They lack vascular tissue (lignified xylem) for support and transport", "They lack chlorophyll", "Their gametophyte generation is dominant"], 1,
  "Without vascular tissue and lignin, mosses can't move water far or support tall bodies against gravity.",
  ["True, but it explains where they live, not their height.", "", "Mosses are photosynthetic.", "True, but not the cause of their small size."],
  "Bryophytes", "Two TRUE moss facts that don't answer 'why short'.");
Q("p52", "P", "m7", "bryo", 3, "On a hike you see a tall fern frond with clusters of brown dots on its underside. You are looking at",
  ["A gametophyte with archegonia", "A sporophyte with sori", "A sporophyte with seeds", "A gametophyte with sori"], 1,
  "The fern plant you see is the dominant sporophyte; the brown dots are sori (clusters of sporangia).",
  ["Fern gametophytes are tiny, separate and inconspicuous.", "", "Ferns are seedless.", "Sori are on the sporophyte."],
  "Fern life cycle");
Q("p53", "P", "m7", "bryo", 2, "Which structure is NOT found in bryophytes?",
  ["Rhizoids", "Archegonia", "Xylem", "A sporophyte stage"], 2,
  "Bryophytes are nonvascular: no xylem or phloem.",
  ["Bryophytes have rhizoids.", "They have archegonia (female gametangia).", "", "All plants have a sporophyte stage."],
  "Bryophyte structures");
Q("p54", "P", "m7", "bryo", 4, "A mutation causes a fern species to make sperm without flagella. Predict the most likely effect.",
  ["No effect, because ferns use pollen", "Sexual reproduction fails because sperm can't swim through water to the egg", "The sporophyte would become nonvascular", "The gametophyte would become the dominant generation"], 1,
  "Seedless plants depend on flagellated sperm swimming through a water film. Without flagella, fertilization fails (asexual reproduction may still occur).",
  ["Ferns have no pollen; that's seed plants.", "", "Vascular tissue doesn't depend on sperm.", "Generation dominance isn't changed by a sperm mutation."],
  "Prediction: water dependence");
Q("p55", "P", "m7", "gymno", 2, "Which is NOT classified as a gymnosperm?",
  ["Ginkgo biloba", "A cycad", "Welwitschia (a gnetophyte)", "A rose"], 3,
  "Roses are angiosperms (flowers, fruit). Ginkgo, cycads, gnetophytes and conifers are the 4 gymnosperm groups.",
  ["Gymnosperm.", "Gymnosperm.", "Gymnosperm, despite its strange look.", ""],
  "Gymnosperm groups");
Q("p56", "P", "m7", "gymno", 3, "Which is NOT an advantage of seeds over spores?",
  ["Seeds can remain dormant for years", "Seeds contain stored food for the seedling", "Seeds are single cells that disperse more easily", "Seeds can be carried long distances by wind or animals"], 2,
  "Seeds are MULTICELLULAR; spores are single cells (M7 slide 44).",
  ["True advantage.", "True advantage.", "", "True advantage."],
  "Seeds vs spores", "Swaps a spore trait into the seed list.");
Q("p57", "P", "m7", "gymno", 2, "Why do pine trees have two different types of cones?",
  ["Male cones produce pollen; female cones hold ovules that become seeds", "One type photosynthesizes and the other stores water", "Male cones become fruits; female cones become flowers", "One type produces spores for ferns that grow underneath"], 0,
  "Gymnosperms have separate pollen (male gametophyte) cones and ovule (female gametophyte) cones.",
  ["", "Cones are reproductive, not photosynthetic.", "Gymnosperms have no fruits or flowers.", "Nonsense."],
  "Gymnosperm life cycle");
Q("p58", "P", "m7", "angio", 1, "A fruit is",
  ["A mature ovule", "A mature ovary", "The endosperm", "A modified stamen"], 1,
  "As seeds develop, the ovary wall thickens and matures into the fruit.",
  ["A mature ovule is a SEED.", "", "Endosperm is food tissue inside the seed.", "Stamens are male organs."],
  "Fruit", "Ovule vs ovary.");
Q("p59", "P", "m7", "angio", 3, "During double fertilization in angiosperms,",
  ["Two sperm fertilize two eggs, making twins", "One sperm fertilizes the egg (2n zygote); the other fuses with two polar nuclei to form 3n endosperm", "One sperm fertilizes the egg and the other forms the seed coat", "Both sperm fuse with the egg to make a triploid zygote"], 1,
  "This is the definition (M7 slide 62).",
  ["There's one egg.", "", "The seed coat comes from parental tissue, not sperm.", "The zygote is diploid."],
  "Double fertilization");
Q("p60", "P", "m7", "angio", 2, "A plant has parallel leaf veins, scattered vascular bundles, fibrous roots and flower parts in threes. It is a",
  ["Eudicot", "Monocot", "Gymnosperm", "Bryophyte"], 1,
  "All four traits are monocot traits (e.g. wheat, grasses).",
  ["Eudicots have net veins, a ring of bundles, a taproot and parts in 4s/5s.", "", "Gymnosperms have no flowers.", "Bryophytes have no vascular bundles or flowers."],
  "Monocot vs eudicot");
Q("p61", "P", "m7", "angio", 1, "Which plant adaptation evolved MOST recently?",
  ["Vascular tissue", "Seeds", "Flowers", "The protected embryo"], 2,
  "Ladder: embryo → vascular tissue → seeds/pollen → flowers/fruit.",
  ["Second step.", "Third step.", "", "First step (defines land plants)."],
  "Plant evolution order");
Q("p62", "P", "m7", "angio", 2, "The female reproductive organ of a flower, the carpel, consists of",
  ["Anther and filament", "Stigma, style and ovary", "Sepals and petals", "Pollen and ovule"], 1,
  "Carpel = stigma (catches pollen) + style + ovary (holds ovules).",
  ["That's the stamen (male).", "", "Non-reproductive whorls.", "Not organ parts."],
  "Flower anatomy");

// ---------- M8
Q("p63", "P", "m8", "anim", 2, "A worldwide layer of rare iridium and a large impact crater correspond with which event?",
  ["The Permian extinction", "The KT (Cretaceous) extinction", "The Cambrian explosion", "The Ediacaran radiation"], 1,
  "Iridium (common in meteorites) + the Chicxulub crater = asteroid impact at 66 mya.",
  ["The Permian was driven by Siberian volcanism.", "", "The Cambrian was a radiation, not an impact.", "No impact link."],
  "Mass extinctions", "Swapping the two famous extinctions.");
Q("p64", "P", "m8", "anim", 3, "Which statement about mass extinctions is BEST supported by the lecture?",
  ["Biodiversity has increased steadily through time", "Each mass extinction was followed by an adaptive radiation that changed which groups dominate", "The Permian extinction was caused by an asteroid", "Mass extinctions eliminate all species in a clade"], 1,
  "Five major extinctions, each followed by a rapid rebound that often shifts dominance (e.g. mammals after the KT).",
  ["Biodiversity has NOT followed a steady trajectory.", "", "Volcanism.", "Over-generalization: birds survived the KT."],
  "Extinction → radiation pattern");
Q("p65", "P", "m8", "anim", 1, "True or False: every dinosaur species alive at the time went extinct in the Cretaceous mass extinction.",
  ["True", "False"], 1,
  "Birds are avian dinosaurs and survived. Only the non-avian dinosaurs went extinct.",
  ["'Every' ignores birds.", ""],
  "KT extinction", "Absolute 'every'.");
Q("p66", "P", "m8", "body", 2, "In protostome development, the blastopore becomes the",
  ["Anus", "Mouth", "Coelom", "Notochord"], 1,
  "Protostome = 'first mouth': the blastopore becomes the mouth.",
  ["That's deuterostomes.", "", "The coelom is a body cavity, not an opening.", "The notochord is a chordate rod."],
  "Protostome vs deuterostome");
Q("p67", "P", "m8", "body", 3, "Researchers separate the cells of a 4-cell embryo and each develops into a complete larva. Later, the blastopore becomes the anus. This animal is most likely a",
  ["Sea urchin", "Earthworm", "Snail", "Grasshopper"], 0,
  "Indeterminate cleavage + blastopore → anus = deuterostome. Sea urchins are echinoderms (deuterostomes).",
  ["", "Earthworms are protostomes (determinate cleavage, blastopore → mouth).", "Snails are protostomes.", "Insects are protostomes."],
  "Applying development traits");
Q("p68", "P", "m8", "body", 2, "Which animal is a pseudocoelomate?",
  ["Flatworm", "Nematode", "Earthworm", "Jellyfish"], 1,
  "Nematodes and rotifers are the only pseudocoelomates (M8_2 slide 21).",
  ["Acoelomate.", "", "Coelomate.", "Diploblastic with no body cavity."],
  "Body cavities");
Q("p69", "P", "m8", "body", 4, "Which combination does NOT describe a real animal?",
  ["Radial symmetry, diploblastic, no body cavity", "Bilateral symmetry, triploblastic, acoelomate", "Radial symmetry, diploblastic, true coelom", "Bilateral larva, radial adult, coelomate deuterostome"], 2,
  "A true coelom is lined by MESODERM, which diploblastic animals don't have. That combination is impossible.",
  ["Cnidarians (jellyfish).", "Flatworms.", "", "Echinoderms (sea stars)."],
  "Integrating body-plan traits", "From the in-class question list (slide 47).");
Q("p70", "P", "m8", "inv", 2, "Centipedes and millipedes belong to the Myriapoda, but pill bugs belong to the",
  ["Insecta", "Crustacea", "Arachnida", "Annelida"], 1,
  "Pill bugs are terrestrial crustaceans (M8_2 slide 37).",
  ["Insects have 6 legs.", "", "Arachnids have 8 legs and include spiders.", "Annelids are segmented worms, not arthropods."],
  "Arthropod subgroups");
Q("p71", "P", "m8", "inv", 3, "Which statement about Ecdysozoa and Lophotrochozoa is correct?",
  ["Both are deuterostomes", "Ecdysozoans molt their cuticle; lophotrochozoans include molluscs and annelids", "Annelids are ecdysozoans because they are segmented", "Nematodes are lophotrochozoans with trochophore larvae"], 1,
  "Ecdysozoa = molting animals (nematodes, arthropods, tardigrades); Lophotrochozoa = flatworms, rotifers, molluscs, annelids. Both are protostomes.",
  ["Both are PROTOSTOMES.", "", "Segmentation doesn't define Ecdysozoa; annelids are lophotrochozoans.", "Nematodes are ecdysozoans."],
  "Protostome clades");
Q("p72", "P", "m8", "inv", 2, "A butterfly develops egg → larva (caterpillar) → pupa → adult. This is",
  ["Hemimetabolous development", "Holometabolous development", "Direct development", "Ecdysis without metamorphosis"], 1,
  "Complete metamorphosis with a pupa = holometabolous.",
  ["Hemimetabolous = egg → nymph → adult (no pupa).", "", "Direct development has no larval stage.", "Butterflies do metamorphose."],
  "Insect metamorphosis");

// ---------- M9
Q("p73", "P", "m9", "chord", 2, "Which features are used to identify chordates? (Select all that apply.)",
  ["Notochord", "Dorsal hollow nerve cord", "Pharyngeal slits", "Post-anal tail", "Ventral solid nerve cord", "Vertebral column"], [0, 1, 2, 3],
  "The 4 chordate hallmarks, present at least in the embryo.",
  ["", "", "", "", "Ventral solid nerve cords are found in many INVERTEBRATES (e.g. arthropods), not chordates.", "Only vertebrates have one; tunicates and lancelets are chordates without it."],
  "Chordate traits", "A vertebrate trait sneaks into a chordate list.");
Q("p74", "P", "m9", "chord", 2, "How do members of the bony fish clade regulate buoyancy?",
  ["An oil-filled liver", "A swim bladder", "Constant swimming", "Cartilaginous skeleton"], 1,
  "Bony fish adjust gas in a swim bladder.",
  ["Sharks (cartilaginous) use oily livers.", "", "Sharks must keep swimming; bony fish don't need to.", "Cartilage is a shark trait and isn't a buoyancy organ."],
  "Fish groups", "Shark traits as distractors.");
Q("p75", "P", "m9", "chord", 3, "In chordate evolution, which sequence (earliest → most recent) is correct?",
  ["Notochord → cranium → vertebral column → jaws", "Jaws → notochord → cranium → vertebral column", "Cranium → jaws → notochord → vertebral column", "Vertebral column → notochord → jaws → cranium"], 0,
  "Each node adds one trait: chordates (notochord) → craniates (skull) → vertebrates (backbone) → gnathostomes (jaws).",
  ["", "Jaws came last of these.", "Notochord is the first chordate trait.", "The backbone replaced the notochord, so the notochord came first."],
  "Vertebrate cladogram");
Q("p76", "P", "m9", "tetra", 2, "Which is NOT a member of the amniote clade?",
  ["Snake", "Robin", "Bat", "Frog"], 3,
  "Amphibians lay non-amniotic eggs in water. Amniotes = reptiles (incl. birds) + mammals.",
  ["Reptile: an amniote.", "Bird: an amniote.", "Mammal: an amniote.", ""],
  "Amniotes");
Q("p77", "P", "m9", "tetra", 3, "Which statement BEST explains why amphibians are especially vulnerable to environmental change?",
  ["They have thin, permeable skin used for gas exchange and lay shell-less eggs in water", "They are endothermic and need lots of food", "Their amniotic eggs dry out easily", "They have no lungs at any stage"], 0,
  "Pollutants pass through permeable skin, eggs and larvae need clean water, and they need intact aquatic AND land habitats (plus Bd).",
  ["", "Amphibians are ectotherms.", "Amphibians lack amniotic eggs.", "Most adult amphibians have lungs (some salamanders are lungless)."],
  "Amphibian biology");
Q("p78", "P", "m9", "tetra", 3, "Which trait is NOT shared by modern birds and the theropod dinosaurs from which they evolved?",
  ["Feathers", "Hollow bones", "A furcula (wishbone)", "A toothless beak"], 3,
  "Theropods (and Archaeopteryx) had teeth. A toothless beak is a modern-bird trait.",
  ["Many theropods were feathered.", "Shared.", "Shared.", ""],
  "Birds as dinosaurs");
Q("p79", "P", "m9", "mammal", 2, "Which characteristic is NOT unique to mammals?",
  ["Hair", "Mammary glands", "Endothermy", "Three middle-ear bones"], 2,
  "Birds are also endothermic.",
  ["Unique.", "Unique.", "", "Unique."],
  "Unique vs shared traits", "'NOT unique' = find the one shared with another group.");
Q("p80", "P", "m9", "mammal", 1, "The platypus and the echidna lay eggs. To which mammal subgroup do they belong?",
  ["Marsupials", "Monotremes", "Eutherians", "Therapsids"], 1,
  "Monotremes are the egg-laying mammals.",
  ["Pouches.", "", "Placentals.", "An extinct synapsid group, not a living subgroup."],
  "Mammal lineages");
Q("p81", "P", "m9", "mammal", 3, "Which is the most historically accurate description of mammalian evolution?",
  ["Mammals evolved only after the dinosaurs went extinct", "Mammals evolved from synapsids, coexisted with dinosaurs, and radiated after the KT extinction", "Mammals evolved from birds after the Permian extinction", "Mammals and dinosaurs both evolved after the KT extinction"], 1,
  "Early mammals (~200+ mya) lived alongside dinosaurs, mostly small and nocturnal, then diversified in the Cenozoic.",
  ["Mammals appeared ~140 million years before the KT.", "", "Mammals descend from synapsids, not birds.", "Dinosaurs were long established before the KT."],
  "Mammal history", "Confusing ORIGIN with RADIATION.");
Q("p82", "P", "m9", "yif", 3, "According to Your Inner Fish, two of the three mammalian middle-ear bones (malleus and incus) evolved from",
  ["Bones of the reptilian jaw joint", "Fish scales", "The vertebral column", "The notochord"], 0,
  "As the mammalian lower jaw became a single bone, the former jaw-joint bones (articular, quadrate) became the malleus and incus. The stapes comes from the fish hyomandibula.",
  ["", "Not related.", "Not related.", "Not related."],
  "Middle-ear evolution ⚑ book");

// ---------- M10
Q("p83", "P", "m10", "primate", 2, "A monkey has wide, round nostrils spaced far apart and a prehensile tail. It is most likely",
  ["An Old World monkey from Africa", "A New World monkey from South America", "A prosimian from Madagascar", "A hominoid"], 1,
  "Wide nostrils + prehensile tail = New World monkey.",
  ["Old World monkeys have narrow, downward nostrils and non-prehensile tails.", "", "Prosimians (lemurs) aren't monkeys.", "Hominoids (apes) have no tail."],
  "Primate groups");
Q("p84", "P", "m10", "primate", 1, "Which of the following is NOT a primate?",
  ["Lemur", "Tarsier", "Gibbon", "Sloth"], 3,
  "Sloths are xenarthran mammals, not primates.",
  ["Prosimian primate.", "Prosimian primate.", "Hominoid (ape).", ""],
  "Primate membership");
Q("p85", "P", "m10", "homin", 3, "What was the major significance of Australopithecus afarensis ('Lucy')?",
  ["It showed that large brains evolved before bipedalism", "It confirmed that early hominins were fully bipedal before brains enlarged", "It was the first hominin genome to be sequenced", "It proved bipedalism originated in forests"], 1,
  "Lucy had hips, knees and toes adapted for walking upright with a chimp-sized (~450 cc) brain.",
  ["Reversed.", "", "Only humans, Neanderthals and Denisovans have sequenced genomes.", "That was Ardi's (forest-dwelling) contribution."],
  "Hominin sequence", "Reversed order (A); attributing Ardi's finding to Lucy (D).");
Q("p86", "P", "m10", "homin", 3, "Neanderthals share more of their nuclear genome with non-African than with African modern humans. The best conclusion is that",
  ["Neanderthals evolved in Africa", "Modern humans interbred with Neanderthals after leaving Africa", "Africans descend from Denisovans", "Neanderthals were the direct ancestors of Europeans only"], 1,
  "Neanderthals lived in Eurasia; humans who left Africa met and interbred with them, leaving 1–4% Neanderthal DNA in Eurasians.",
  ["Neanderthals lived in Eurasia.", "", "No evidence for this.", "Overstated: interbreeding, not sole ancestry."],
  "DNA evidence for interbreeding");
Q("p87", "P", "m10", "homin", 3, "Which statement best explains why human populations native to the equator tend to have darker skin?",
  ["Melanin protects folate from being destroyed by intense UV radiation", "Dark skin increases vitamin D production in strong sunlight", "Dark skin evolved to absorb more heat", "Dark skin is caused by Neanderthal genes"], 0,
  "The folate/vitamin D hypothesis: where UV is intense, protecting folate (needed for fetal development) favors more melanin.",
  ["", "Reversed: lighter skin favors vitamin D where UV is weak.", "Not the hypothesis taught.", "Introgression influenced some skin genes, but it doesn't explain the equatorial pattern."],
  "Skin color evolution", "Swapping the folate and vitamin D roles.");
})(SG.Q);
