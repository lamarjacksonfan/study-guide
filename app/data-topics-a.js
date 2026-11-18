// Study topics, part A: Modules 4, 5, 6.
window.SG = window.SG || {};
SG.topics = SG.topics || [];

SG.topics.push(
/* ============================================================ M4 */
{
  id: "tax", m: "m4", title: "Taxonomy & classification", heat: 1,
  why: "Under 5% of the exam, but review Qs 2, 3 and 24 are easy points, and the 'protists aren't a kingdom' logic shows up again in M6.",
  src: "No M4 slides uploaded. Study guide 'Know taxon groups'; M6_1 slides 9–11 (monophyletic taxa); M5_2 slides 4–5 (3 domains).",
  know: "Organisms are named and grouped in a nested hierarchy, and modern taxonomy tries to make every named group <b>monophyletic</b> (an ancestor plus ALL its descendants).",
  eli5: "Think of a mailing address: country → state → city → street → house. Domain is the 'country' (huge, very diverse); species is the 'house' (one kind of organism). Each level sits inside the one above it.",
  exam: `<p><b>Ranks, from most to least diverse:</b> Domain → Kingdom → Phylum → Class → Order → Family → Genus → Species.</p>
<p><b>Binomial nomenclature:</b> genus + specific epithet, italicized, genus capitalized: <i>Homo sapiens</i>, <i>Escherichia coli</i>, <i>Plasmodium falciparum</i>.</p>
<p><b>Three domains:</b> Bacteria and Archaea (prokaryotes) plus Eukarya. Genetic evidence shows Archaea and Eukarya share a more recent common ancestor (M5_2 slide 5).</p>
<p><b>Monophyletic vs paraphyletic vs polyphyletic:</b> when new DNA data shows a named group doesn't match the family tree, the name gets dropped or revised. That is exactly why 'Kingdom Protista' was abandoned (M6_1 slides 9–11).</p>
<p><b>Humans:</b> Eukarya → Animalia → Chordata → Mammalia → Primates → Hominidae → <i>Homo</i> → <i>sapiens</i>.</p>`,
  terms: [["Taxon", "Any named group at any rank (e.g. Mammalia, Fungi)"], ["Monophyletic", "Ancestor + all of its descendants (a clade). The goal of modern taxonomy"], ["Paraphyletic", "Ancestor + only SOME descendants (e.g. 'green algae' without land plants)"], ["Polyphyletic", "Group whose members came from different ancestors (e.g. 'Protista', 'algae')"], ["Clade", "A monophyletic branch of the tree"], ["Synapomorphy", "Shared derived character: a trait present in an ancestor and all its descendants (M10 slide 4)"]],
  compare: { head: ["Monophyletic", "Paraphyletic", "Polyphyletic"], rows: [["Ancestor + ALL descendants", "Ancestor + SOME descendants", "No single common ancestor in the group"], ["Mammals; land plants; Opisthokonta", "Green algae (excludes land plants); 'reptiles' without birds", "'Protists'; 'algae'"]] },
  confuse: ["Kingdom vs Domain: Domain is the top rank (3 of them). Kingdoms sit inside domains.", "Genus vs species: <i>Homo</i> is the genus; <i>Homo sapiens</i> (both words) is the species name."],
  traps: ["'Homo Sapiens' or 'homo sapiens' (wrong capitalization) or 'Homo sapien' (no such word).", "Ordering Order before Class. The ladder is …Phylum → Class → Order…", "Calling protists a kingdom (outdated)."],
  tested: ["Order the ranks (drag & drop).", "Pick the correctly formatted species name.", "Which group is not monophyletic?"],
  trick: "<b>D</b>ear <b>K</b>ing <b>P</b>hilip <b>C</b>ame <b>O</b>ver <b>F</b>or <b>G</b>ood <b>S</b>oup.",
  recall: ["List the 8 ranks from most to least inclusive.", "Write the human species name correctly.", "Why is Protista no longer a valid taxon?", "Which two domains are prokaryotic?", "Which domain is most closely related to Eukarya?"],
  memorize: ["8 ranks in order", "Binomial format", "3 domains"],
  understand: ["Why taxonomy is revised when the phylogeny changes"],
  one: "Domain → Kingdom → Phylum → Class → Order → Family → Genus → Species, and a valid group must be monophyletic."
},

/* ============================================================ M5 viruses */
{
  id: "virus", m: "m5", title: "Viruses: origins, structure, classification, prions", heat: 2, flag: true,
  why: "Review Qs 1, 4, 6, 8, 9 plus study-guide terms capsid, envelope and Baltimore classification. No slides were uploaded for this part, so this follows the M5 objectives and Biology 2e ch 21.",
  src: "M5 objectives (screenshot). ⚑ Content from OpenStax Biology 2e ch 21: verify against the viruses lecture if you have it.",
  know: "Viruses are not cells. A virion is genetic material inside a protein coat (sometimes wrapped in a membrane), and it can only reproduce inside a host cell.",
  eli5: "A virus is like a USB stick with malicious instructions. It can't do anything alone; it has to be plugged into a computer (a cell), which then follows the instructions and makes more USB sticks.",
  exam: `<p><b>Structure of a virion</b> (review Q6, 'select all 3'):</p>
<ul><li><b>Nucleic acid genome</b>: DNA <i>or</i> RNA, single- or double-stranded.</li><li><b>Capsid</b>: protein coat built from capsomere subunits; shapes are helical, polyhedral (icosahedral) or complex (bacteriophage).</li><li><b>Envelope</b>: lipid membrane taken from the host cell, studded with viral glycoproteins (spikes). <i>Only some viruses</i> (flu, HIV, SARS-CoV-2) have one; 'naked' viruses don't.</li></ul>
<p>Viruses have no ribosomes, no metabolism and no cell wall, and they are obligate intracellular parasites.</p>
<p><b>Three hypotheses of virus origin</b> (review Q4):</p>
<ol><li><b>Progressive / escape</b>: bits of host DNA or RNA (like plasmids or transposons) escaped cells and gained the ability to move between them.</li><li><b>Regressive / reduction</b>: viruses descend from free-living cells that became parasites and lost genes. Giant viruses (mimivirus) are cited as support.</li><li><b>Virus-first / self-replicating</b>: viruses (self-replicating nucleic acids) existed before or alongside the first cells.</li></ol>
<p>No single hypothesis is accepted; viruses may have arisen more than once.</p>
<p><b>Classification.</b> <i>Past</i>: by structure (capsid shape, enveloped or naked, host). <i>Baltimore</i>: by genome type and how the virus makes mRNA, giving 7 groups (I dsDNA, II ssDNA, III dsRNA, IV +ssRNA, V −ssRNA, VI RNA with reverse transcriptase such as HIV, VII dsDNA with RT such as hepatitis B). <i>Emerging</i>: genome-sequence-based phylogeny (ICTV).</p>
<p><b>Prions and viroids.</b> Prions are misfolded <b>proteins only</b> (no nucleic acid) that make normal proteins misfold: mad cow disease (BSE), Creutzfeldt-Jakob disease, kuru. Viroids are tiny naked RNA circles that infect plants.</p>`,
  terms: [["Virion", "One complete virus particle outside a cell"], ["Capsid", "Protein coat surrounding the viral genome"], ["Envelope", "Lipid membrane (from host) around some capsids"], ["Bacteriophage", "Virus that infects bacteria"], ["Baltimore classification", "Sorts viruses into 7 groups by genome type and mRNA production"], ["Prion", "Infectious misfolded protein, no DNA/RNA"], ["Retrovirus", "RNA virus that uses reverse transcriptase to make DNA (HIV)"]],
  process: ["Attachment: viral proteins bind host receptors (determines host range)", "Entry / penetration of genome", "Replication of genome + synthesis of viral proteins using HOST ribosomes", "Assembly of new virions", "Release (lysis, or budding, which wraps enveloped viruses in host membrane)"],
  confuse: ["Capsid (protein) vs envelope (lipid): every virus has a capsid; only some have an envelope.", "Prion (protein only) vs viroid (RNA only) vs virus (nucleic acid + protein)."],
  traps: ["'Viruses contain both DNA and RNA.' False: one or the other.", "'Viruses have ribosomes.' False: they borrow host ribosomes.", "'Baltimore classifies bacteria.' False: viruses only.", "'Prions contain RNA.' False."],
  tested: ["Select the 3 components of a virion.", "Which is NOT a virus-origin hypothesis?", "Which system organizes viruses by genome and mRNA?", "What are prions made of?"],
  trick: "Origins = <b>E</b>scape, <b>R</b>educe, <b>F</b>irst ('ERF').",
  recall: ["Name the 3 parts of a virion and say which is optional.", "Explain the escape hypothesis in one sentence.", "Explain the regressive hypothesis and one piece of support.", "What two features does Baltimore classification use?", "What is a prion made of?", "Why are viruses not considered cells?"],
  memorize: ["3 virion parts", "3 origin hypotheses", "Prion = protein"],
  understand: ["Why viruses need hosts", "Why there are competing origin hypotheses"],
  one: "Virion = nucleic acid + capsid (+/- envelope). Not alive on its own; classified by Baltimore."
},
{
  id: "vdis", m: "m5", title: "Viral disease, spillover & virus-based therapies", heat: 2, flag: true,
  why: "Review Qs 5, 7 plus objectives: major viral illnesses, why evolution explains spillover, and 3 therapies using viruses.",
  src: "M5 objectives. ⚑ Biology 2e ch 21.",
  know: "Many new human diseases are animal viruses that 'spilled over' into us. Viruses evolve fast, which is why we fight them with vaccines and antivirals, not antibiotics.",
  eli5: "A bat virus that randomly mutates to fit a human cell's 'lock' can jump species. That jump is a spillover. Once in humans it keeps mutating, which is why flu shots change every year.",
  exam: `<p><b>Major human viral illnesses:</b> influenza, HIV/AIDS, COVID-19 (SARS-CoV-2), measles, HPV (cervical cancer), hepatitis B and C, rabies, Ebola, polio, smallpox (eradicated), chickenpox/shingles (latent varicella), herpes, the common cold, Zika.</p>
<p><b>Spillover</b> = a pathogen jumps from an animal <b>reservoir</b> host into a new species. Evolution is the key: viruses (especially RNA viruses) have high mutation rates and can recombine/reassort genes, so variants that bind a new host's receptors can arise and be selected. Examples: HIV (from chimpanzee SIV), pandemic flu (birds/pigs), Ebola and SARS-CoV-2 (likely bats).</p>
<p><b>Combating viruses:</b> vaccines (prevent), antivirals (block viral enzymes or steps, e.g. Tamiflu, HIV protease inhibitors), public-health measures. <b>Antibiotics do nothing</b>: they target bacterial cell walls and ribosomes, which viruses lack.</p>
<p><b>Three therapies that USE viruses:</b></p>
<ol><li><b>Gene therapy</b>: a harmless viral vector delivers a working gene into a patient's cells.</li><li><b>Phage therapy</b>: bacteriophages kill bacteria, including antibiotic-resistant superbugs.</li><li><b>Oncolytic virotherapy</b>: viruses engineered to infect and kill cancer cells.</li></ol>
<p>(Viral-vector and mRNA vaccines are related applications.)</p>`,
  terms: [["Spillover", "Pathogen jumps from an animal reservoir to a new host species (e.g. humans)"], ["Reservoir", "Host species that carries a pathogen long-term, often without illness"], ["Zoonosis", "Disease transmitted from animals to humans"], ["Antiviral", "Drug that blocks a step in viral replication"], ["Phage therapy", "Using bacteriophages to treat bacterial infection"], ["Vaccine", "Exposes the immune system to an antigen so it can respond quickly later"]],
  process: ["Virus circulates in an animal reservoir", "Random mutation / recombination creates variants", "Close contact (markets, farming, habitat loss) exposes humans", "A variant that binds human receptors infects a person", "Selection favors variants that spread human-to-human → epidemic"],
  confuse: ["Spillover (animal → human jump) vs transmission (person → person).", "Phage therapy (viruses kill bacteria) vs antibiotic therapy (chemicals kill bacteria)."],
  traps: ["Antibiotics as a COVID treatment: wrong (NOT a strategy).", "'Spillover = when a virus spreads from one person to another.' Wrong."],
  tested: ["Which is NOT a strategy against SARS-CoV-2?", "What is a spillover event?", "Why is evolution key to understanding emerging diseases?", "Which therapy uses viruses to kill bacteria?"],
  trick: "Virus therapies = <b>G</b>ene, <b>P</b>hage, <b>O</b>ncolytic ('GPO').",
  recall: ["Define spillover and give an example.", "Why don't antibiotics work on viruses?", "Name 3 virus-based therapies.", "Why do RNA viruses evolve fast?", "Name 5 major viral diseases of humans."],
  memorize: ["Disease list", "3 therapies"],
  understand: ["Mutation + selection → host jump", "Why drug choice depends on pathogen type"],
  one: "Spillover = animal-to-human jump driven by viral evolution. Fight viruses with vaccines and antivirals, never antibiotics.",
  connect: ["Bd chytrid fungus also spread to 'naïve' populations through trade (M6), the same logic of a pathogen meeting a new host.", "Phage therapy is a response to antibiotic-resistant superbugs (M5 prokaryotes)."]
},

/* ============================================================ M5 prokaryotes */
{
  id: "pevo", m: "m5", title: "Prokaryote evolution: mats, stromatolites, cyanobacteria, biofilms", heat: 3,
  why: "Study-guide terms stromatolite, biofilm and cyanobacteria; review Q11; the O₂ story connects M5 → M6 → M8.",
  src: "M5_2 slides 3–11; M8_1 Archean/Proterozoic slides.",
  know: "Prokaryotes were Earth's only life for over a billion years. Cyanobacteria filled the air with oxygen, which changed everything that came after.",
  eli5: "For the first ~2 billion years of life, the planet belonged to bacteria. They built layered mats (fossilized as stromatolites). Then cyanobacteria started photosynthesizing and 'polluted' the air with oxygen. That killed many oxygen-hating microbes but opened the door to oxygen-using cells like ours.",
  exam: `<ul><li>Prokaryotes are the <b>oldest, simplest and most abundant</b> cellular life. Earliest fossils: <b>3.5–3.8 bya</b>.</li>
<li>Early prokaryotes split into two lineages: <b>Bacteria</b> and <b>Archaea</b>. Archaea are more closely related to Eukarya (molecular clock).</li>
<li><b>Microbial mats</b>: multi-layered sheets of prokaryotes, a few cm thick, on moist surfaces. A <b>stromatolite</b> is a fossilized microbial mat and gave early fossil evidence of life.</li>
<li><b>Early atmosphere was anoxic</b>, so the first organisms were anaerobic.</li>
<li><b>Cyanobacteria</b> ('blue-green algae', but they are bacteria) are photoautotrophs that formed stromatolites and probably caused the rise in atmospheric O₂ starting ~2.6 bya. That caused a mass extinction of anaerobic prokaryotes (M8_1) and made aerobic life possible.</li>
<li><b>Biofilms</b>: surface-coating colonies of one or more species in a gummy polysaccharide matrix. Edge cells release signaling molecules to recruit more cells; channels carry in nutrients and carry out wastes. Problems: corrosion, contaminated medical devices, tooth decay (plaque), chronic antibiotic-resistant infections.</li>
<li><b>Metabolic cooperation</b>: e.g. filamentous <i>Anabaena</i>. Photosynthetic cells trade carbohydrates for fixed nitrogen from <b>heterocysts</b>, cells that keep O₂ out because O₂ blocks nitrogen fixation. One organism's waste is another's nutrient.</li></ul>`,
  terms: [["Microbial mat", "Multi-layered sheet of prokaryotes on moist surfaces; earliest life form"], ["Stromatolite", "Fossilized microbial mat; early evidence of life"], ["Cyanobacteria", "Photosynthetic (O₂-producing) bacteria; ancestors of chloroplasts"], ["Biofilm", "Cooperative surface colony in a polysaccharide matrix with chemical signaling"], ["Heterocyst", "Cyanobacterial cell specialized for nitrogen fixation; excludes O₂"], ["Anoxic", "Without oxygen"]],
  process: ["Anoxic early Earth → anaerobic prokaryotes (~3.5–3.8 bya)", "Microbial mats → stromatolites", "Cyanobacteria evolve oxygenic photosynthesis", "O₂ accumulates (~2.6 bya onward): the 'oxygen revolution'", "Anaerobes go extinct or retreat; aerobic metabolism spreads", "Aerobic bacterium engulfed → mitochondria → eukaryotes (M6)"],
  compare: { head: ["Microbial mat", "Biofilm", "Stromatolite"], rows: [["Living layered sheet", "Living colony on a surface", "Fossil (rock)"], ["Ancient; moist surfaces", "Today too: teeth, pipes, catheters", "Evidence of early life"]] },
  confuse: ["Stromatolite (fossil) vs microbial mat (living).", "Cyanobacteria are BACTERIA even though they're called blue-green algae."],
  traps: ["'Cyanobacteria are eukaryotic algae.' False.", "'The early atmosphere was oxygen-rich.' False: anoxic."],
  tested: ["Which is true of cyanobacteria?", "What is a stromatolite evidence of?", "Why are biofilm infections hard to treat?"],
  trick: "<b>Strom</b>atolite = 'stone mat' (strom = layer, lite = stone).",
  recall: ["What is a stromatolite?", "Why were the first organisms anaerobic?", "What did cyanobacteria do to the atmosphere and what was the consequence?", "How do cells in a biofilm cooperate?", "Why are heterocysts needed?"],
  memorize: ["3.5–3.8 bya first life", "~2.6 bya O₂ rise"],
  understand: ["The O₂ cause → effect chain", "Biofilm cooperation"],
  one: "Cyanobacteria made Earth's oxygen. That killed off anaerobes and set the stage for eukaryotes."
},
{
  id: "pstruct", m: "m5", title: "Prokaryote structure: Bacteria vs Archaea vs Eukaryotes", heat: 3,
  why: "Review Qs 15, 16, 17, 23 and the term peptidoglycan. Gram staining and toxins are classic NOT-question material.",
  src: "M5_2 slides 14–24.",
  know: "Prokaryotes lack a nucleus and membrane-bound organelles. Bacteria have peptidoglycan walls; Archaea don't. Gram staining sorts bacteria by wall type, which determines which antibiotics work.",
  eli5: "Gram-positive bacteria wear one thick sweater (lots of peptidoglycan) that soaks up purple dye. Gram-negative bacteria wear a thin sweater under a waterproof raincoat (an outer membrane) that keeps the purple out, so they look pink. That raincoat also keeps out many antibiotics.",
  exam: `<p><b>All prokaryotes have:</b> plasma membrane, cytoplasm, double-stranded DNA, ribosomes. <b>None have:</b> a nucleus or membrane-bound organelles (DNA sits in the <b>nucleoid</b>).</p>
<p><b>DNA:</b> one circular chromosome plus optional <b>plasmids</b> (small independently replicating rings carrying genes for antibiotic resistance, pili, toxins).</p>
<p><b>Cell walls:</b> Bacteria = <b>peptidoglycan</b> (sugar polymers cross-linked by polypeptides). Archaea = various polysaccharides and proteins, <b>no peptidoglycan</b>. Eukaryotes = cellulose (plants) or chitin (fungi).</p>
<p><b>Gram stain:</b> Gram + = thick peptidoglycan → purple. Gram − = thin peptidoglycan + outer membrane with <b>lipopolysaccharide (LPS)</b> → pink. LPS blocks the stain and many antibiotics, so Gram − needs special antibiotics. Antibiotics commonly target peptidoglycan (eukaryotes lack it).</p>
<p><b>Toxins:</b> <b>Exotoxins</b> are proteins SECRETED by living bacteria; they can cause disease even after the bacteria are gone (cholera, <i>Vibrio cholerae</i>). <b>Endotoxins</b> are the LPS of Gram − outer membranes, released only when the bacteria DIE (<i>Salmonella</i> food poisoning).</p>
<p><b>Reproduction:</b> binary fission → clones. Genetic variation comes from <b>horizontal gene transfer</b>: <b>transformation</b> (take up DNA from the environment), <b>transduction</b> (bacteriophage carries DNA), <b>conjugation</b> (direct transfer through a pilus).</p>`,
  compare: { head: ["Feature", "Bacteria", "Archaea", "Eukarya"], rows: [["Nucleus", "No", "No", "Yes"], ["Peptidoglycan wall", "Yes", "No", "No"], ["Membrane lipids", "Fatty acid–glycerol ESTERS", "Phytanyl–glycerol ETHERS (bilayer or monolayer)", "Esters"], ["Initiator tRNA", "Formyl-methionine", "Methionine", "Methionine"], ["Streptomycin", "Sensitive", "Resistant", "Resistant"], ["Chromosome", "Single circular", "Single circular (multiple origins)", "Multiple linear + histones"], ["Size", "~1 µm", "~1 µm", "10–100 µm"], ["Flagellum", "Single protein fiber that rotates", "Rotates", "Complex, whips back and forth"], ["Division", "Binary fission", "Binary fission", "Mitosis"]] },
  terms: [["Peptidoglycan", "Bacterial cell wall polymer of sugars cross-linked by peptides"], ["Lipopolysaccharide (LPS)", "Outer-membrane molecule of Gram − bacteria; the endotoxin"], ["Nucleoid", "Region holding the prokaryote chromosome; no membrane"], ["Plasmid", "Small circular DNA, replicates independently; resistance genes"], ["Exotoxin", "Secreted protein toxin (cholera)"], ["Endotoxin", "LPS released when Gram − bacteria die (Salmonella)"], ["Conjugation", "DNA transfer through a pilus"], ["Transformation", "Uptake of free DNA from the environment"], ["Transduction", "DNA moved between bacteria by a phage"], ["Metagenomics", "Sequencing DNA straight from soil or seawater to find unculturable microbes"]],
  confuse: ["⚠️ Exotoxin (EXits a living cell, protein) vs Endotoxin (part of the cell, released at the END/death, LPS).", "⚠️ Transformation (from environment) vs Transduction (by phage) vs Conjugation (by pilus contact).", "⚠️ Gram + PURPLE (Positive = Purple, both P) vs Gram − PINK."],
  traps: ["'Gram-negative bacteria have a thick peptidoglycan layer.' False.", "'Archaea have peptidoglycan walls.' False.", "'Prokaryotes have no ribosomes.' False: they have ribosomes, just no membrane organelles.", "Ribosomes/DNA/membrane listed as 'eukaryote only'. They belong to both."],
  tested: ["Which is NOT true of Gram − bacteria?", "Categorize features into prokaryote/eukaryote.", "A wall lacking peptidoglycan suggests which domain?", "Which toxin type is released when bacteria die?"],
  trick: "<b>P</b>ositive = <b>P</b>urple = <b>P</b>lenty of <b>P</b>eptidoglycan. Gram negative has an extra layer that Negates the stain.",
  recall: ["List the 4 things ALL prokaryotes have.", "Explain why Gram − bacteria stain pink.", "Exotoxin vs endotoxin with one example each.", "Name the 3 forms of horizontal gene transfer.", "Give 3 differences between Bacteria and Archaea.", "Why do antibiotics target peptidoglycan?"],
  memorize: ["Gram +/− table", "Bacteria vs Archaea differences", "3 HGT modes"],
  understand: ["Why wall structure affects antibiotic choice", "How plasmids spread resistance"],
  one: "Peptidoglycan = Bacteria only. Gram + thick/purple, Gram − thin + LPS outer membrane/pink and harder to kill."
},
{
  id: "pnut", m: "m5", title: "Prokaryote nutrition, oxygen use & extremophiles", heat: 3,
  why: "Terms heterotroph and autotroph; review Qs 12, 19. Extremophile names are easy recall points.",
  src: "M5_2 slides 12–13, 25–29.",
  know: "Classify any organism by two separate questions: where does its ENERGY come from (light or chemicals) and where does its CARBON come from (CO₂ or organic molecules)?",
  eli5: "Every organism needs a power source and building blocks. Photo- means you run on sunlight; chemo- means you run on chemicals. Auto- means you build from CO₂ yourself; hetero- means you take carbon from others. Combine one of each: a plant is a photoautotroph, and you are a chemoheterotroph.",
  exam: `<table class="t"><tr><th></th><th>Carbon from CO₂ (auto-)</th><th>Carbon from organic compounds (hetero-)</th></tr><tr><th>Energy from light (photo-)</th><td><b>Photoautotroph</b>: cyanobacteria, plants, algae</td><td><b>Photoheterotroph</b>: some marine prokaryotes</td></tr><tr><th>Energy from chemicals (chemo-)</th><td><b>Chemoautotroph</b>: oxidizes inorganic compounds (e.g. H₂S, NH₃); unique to prokaryotes</td><td><b>Chemoheterotroph</b>: most bacteria, protozoa, fungi, animals</td></tr></table>
<p>The lecture (slide 26) also uses <b>heterotroph</b> loosely: obtains energy (and carbon) from other organisms, often by ingesting them (review Q19).</p>
<p><b>Oxygen:</b> <b>obligate aerobes</b> require O₂; <b>obligate anaerobes</b> are poisoned by or don't use O₂ (fermentation or anaerobic respiration); <b>facultative anaerobes</b> use O₂ if present, otherwise ferment. Facultative anaerobes tend to be the <b>most lethal</b> pathogens: they grow almost anywhere and most readily develop resistance (<i>E. coli</i>, <i>Listeria</i>, <i>Salmonella</i>, MRSA).</p>
<p><b>Extremophiles</b> (Bacteria and Archaea, especially Archaea):</p>
<table class="t"><tr><th>Name</th><th>Loves</th></tr><tr><td>Acidophile</td><td>pH ≤ 3</td></tr><tr><td>Alkaliphile</td><td>pH ≥ 9</td></tr><tr><td>Thermophile</td><td>60–80 °C</td></tr><tr><td>Hyperthermophile</td><td>80–122 °C (most likely Archaea, review Q12). Source of PCR's <i>Pyrococcus</i> polymerase</td></tr><tr><td>Psychrophile</td><td>cold (≈ −15 to 10 °C)</td></tr><tr><td>Halophile</td><td>high salt (≥0.2 M)</td></tr><tr><td>Osmophile</td><td>high sugar</td></tr></table>
<p><b>Methanogens</b> (Archaea): obligate anaerobes making methane from acetate; live in permafrost, wetlands and cow guts. They likely evolved ~250 mya by horizontal gene transfer and probably contributed to the <b>Permian extinction</b>.</p>`,
  terms: [["Autotroph", "Makes organic molecules from CO₂"], ["Heterotroph", "Gets carbon (and energy) from organic molecules or other organisms"], ["Phototroph", "Energy from light"], ["Chemotroph", "Energy from chemical compounds"], ["Facultative anaerobe", "Uses O₂ when available, ferments otherwise"], ["Extremophile", "Thrives in extreme conditions"], ["Methanogen", "Methane-producing archaean (obligate anaerobe)"]],
  confuse: ["⚠️ The prefix pairs answer DIFFERENT questions: photo/chemo = energy; auto/hetero = carbon.", "⚠️ Thermophile (60–80) vs hyperthermophile (80–122).", "⚠️ Obligate anaerobe (can't use O₂) vs facultative (either way)."],
  traps: ["'Chemoautotrophs get energy from light.' False.", "'All extremophiles are bacteria.' Most famous ones are Archaea."],
  tested: ["Name for an organism that ingests others for carbon + energy.", "80–120 °C organism → which name, which domain?", "Which oxygen type is most dangerous as a pathogen and why?"],
  trick: "Read the name backwards: photo-<b>auto</b>-troph = 'light-powered self-feeder'.",
  recall: ["Draw the 2×2 nutrition grid with an example in each box.", "Why are facultative anaerobes especially dangerous?", "Match 5 extremophile names to their conditions.", "How might methanogens be linked to the Permian extinction?"],
  memorize: ["2×2 grid", "Extremophile names"],
  understand: ["Classifying an unfamiliar organism from a description"],
  one: "Photo/chemo = energy, auto/hetero = carbon. Hyperthermophiles → Archaea."
},
{
  id: "pdis", m: "m5", title: "Bacterial disease & antibiotic resistance (superbugs)", heat: 2,
  why: "Study guide: 'know groups responsible for diseases'. Review Q14 (superbug). Lecture lists historically important plagues.",
  src: "M5_2 slides 28–38.",
  know: "A handful of bacteria caused history's great epidemics, and misusing antibiotics selects for resistant 'superbugs'.",
  eli5: "If you spray a weak dose of bug-killer on a crowd of bacteria, the few toughest survive and multiply. Repeat, and now the whole crowd is tough. That's a superbug, and it's natural selection happening fast.",
  exam: `<p><b>Historic plagues:</b></p><ul><li><i>Salmonella enterica</i> serovar Typhi → <b>typhoid fever</b>; Plague of Athens (430 BC, killed 25% of troops); thrives in overcrowding; facultative anaerobe.</li><li><i>Yersinia pestis</i> → <b>bubonic plague</b>: Plague of Justinian (541–750 AD, ~50% of Europeans) and the Black Death (1346–1361, ~100 million deaths).</li></ul>
<p><b>Other human pathogens by shape/Gram type:</b></p><ul><li>Gram + cocci: <i>Streptococcus pyogenes</i> (strep throat), <i>S. pneumoniae</i> (pneumonia). <i>S. thermophilus</i> is helpful (yogurt).</li><li>Gram − cocci: gonorrhea, meningitis.</li><li>Enteric / coliform Gram − rods (fecal-oral): <i>Salmonella</i>, pathogenic <i>E. coli</i>, cholera (death by dehydration; prevented by sewage treatment).</li><li>Mycobacteria (mycolic acid coat blocks penicillin): tuberculosis (multidrug-resistant strains), leprosy (nerve damage; armadillos carry it).</li><li>Spirochetes (Gram −): syphilis (<i>Treponema pallidum</i>), Lyme disease (<i>Borrelia burgdorferi</i>, deer tick).</li></ul>
<p><b>Resistance arms race:</b> penicillin in use 1943 → resistant <i>S. aureus</i> by 1945. Methicillin introduced 1959 → MRSA by 1961.</p>
<p><b>Why resistance evolves:</b> 'survivable selective pressure', meaning low-to-moderate antibiotic exposure. Biggest threats: environmental pollution, preventive (prophylactic) use in livestock, misuse (not finishing a course, taking antibiotics when not needed, e.g. for a virus), antimicrobial products. Resistance genes often sit on <b>plasmids</b> and spread by conjugation.</p>
<p><b>Superbug</b> = bacteria resistant to antibiotics (often several).</p>`,
  process: ["Population varies; a few cells carry resistance genes (mutation or plasmid)", "Antibiotic exposure (especially an incomplete or low dose)", "Susceptible cells die; resistant cells survive", "Survivors reproduce (binary fission) and share plasmids (conjugation)", "Population becomes resistant → superbug"],
  terms: [["Superbug", "Bacterium resistant to (multiple) antibiotics"], ["MRSA", "Methicillin-resistant Staphylococcus aureus"], ["Coliform", "Gut-type (enteric) bacteria in water; signal of fecal contamination"], ["Enteric", "Lives in the digestive tract"], ["Pathogen", "Disease-causing parasite"]],
  confuse: ["Typhoid (<i>Salmonella</i> Typhi) vs bubonic plague (<i>Yersinia pestis</i>).", "Syphilis and Lyme are both spirochetes; TB and leprosy are both mycobacteria."],
  traps: ["'Antibiotics cause mutations that make bacteria resistant.' No: they SELECT for existing resistant variants.", "'A superbug is a virus.' No."],
  tested: ["What is a superbug?", "Which practice does NOT contribute to resistance?", "Which organism caused the Black Death?"],
  trick: "<b>Y</b>ersinia = '<b>Y</b>ikes, plague'. MRSA timeline: drug in → resistance ~2 years later.",
  recall: ["Explain step by step how a superbug arises.", "Name 4 human behaviors that promote resistance.", "Which bacterium caused the Black Death?", "Why is TB hard to treat with penicillin?"],
  memorize: ["Plague organisms", "Disease ↔ group"],
  understand: ["Natural selection mechanism of resistance"],
  one: "Antibiotics don't create resistance; they select for it. Misuse = selection pressure → superbugs.",
  connect: ["Plasmids (structure topic) carry the resistance genes.", "Phage therapy (viruses topic) is one answer to superbugs."]
},
{
  id: "pben", m: "m5", title: "Benefits of prokaryotes: ecology, symbiosis, bioremediation, technology", heat: 3,
  why: "Review Qs 13, 18; study guide 'know importance of organisms (uses, environmental impact)'; term microflora.",
  src: "M5_2 slides 39–45.",
  know: "Most prokaryotes are helpful: they decompose, fix nitrogen, live in our guts and clean up pollution.",
  eli5: "Without bacteria, dead things would pile up forever, plants would starve for nitrogen, and you couldn't digest many foods. They're the recycling crew of the planet.",
  exam: `<ul><li><b>Primary ecological role = decomposition</b> (breaking down organic matter), which releases nutrients for plants.</li><li><b>Chemical cycling</b>: nitrogen fixation reduces N₂ → NH₃ (some in plant roots); methane production in the carbon cycle.</li><li>Share of global photosynthesis: <b>prokaryotes ~20%, protists ~30%, plants ~50%</b> (M5_2 slide 40).</li><li><b>Bioremediation</b> = using prokaryotes to remove pollutants: pesticides and fertilizers, oil spills (Exxon Valdez 1989), heavy metals, plastics, radioactive materials.</li><li><b>Symbiosis</b> = two species in close contact (larger host, smaller symbiont):<ul><li>Mutualism: both benefit.</li><li>Commensalism: one benefits, the other is unaffected.</li><li>Parasitism: parasite harms (but usually doesn't kill) the host; disease-causing parasites = pathogens.</li></ul></li><li><b>Microflora / microbiome</b>: 500–1,000 species in the human gut. Bacterial cells outnumber human cells ~10:1. <i>Bacteroides thetaiotaomicron</i> makes carbohydrates and vitamins and signals human genes for absorption and antimicrobial production.</li><li><b>Technology</b>: cheese, yogurt, beer/wine, pepperoni, sauerkraut, soy sauce; insulin from recombinant bacteria; <i>E. coli</i> in gene cloning; <i>Pyrococcus furiosus</i> DNA polymerase in PCR; bioplastics; ethanol from corn.</li></ul>`,
  terms: [["Decomposer", "Breaks down dead organic matter and recycles nutrients"], ["Nitrogen fixation", "N₂ → NH₃; only some prokaryotes can do it"], ["Bioremediation", "Organisms used to remove pollutants"], ["Mutualism", "+/+ relationship"], ["Commensalism", "+/0 relationship"], ["Parasitism", "+/− relationship"], ["Microflora", "Normal microbial community of the body (microbiome)"]],
  confuse: ["⚠️ Commensalism (+/0) vs mutualism (+/+).", "⚠️ Bioremediation (cleaning pollution) vs biofilm (a colony on a surface)."],
  traps: ["'The primary ecological role of prokaryotes is causing disease.' False: decomposition.", "'Plants do nearly all photosynthesis.' Only ~50%."],
  tested: ["Primary goal of bioremediation?", "Primary ecological role of prokaryotes?", "Classify a relationship from a scenario."],
  trick: "Symbiosis signs: Mutualism ++, Commensalism +0, Parasitism +−.",
  recall: ["What is the primary ecological role of prokaryotes?", "Define bioremediation and give 2 examples.", "Give the photosynthesis split (prokaryotes / protists / plants).", "Name 4 commercial uses of bacteria.", "What does B. thetaiotaomicron do for us?"],
  memorize: ["20/30/50 split", "Symbiosis types"],
  understand: ["Why nitrogen fixation matters for plants"],
  one: "Prokaryotes' main job = decomposition. Bioremediation = microbes cleaning pollution."
},

/* ============================================================ M6 */
{
  id: "endo", m: "m6", title: "Eukaryote origins & the endosymbiotic theory", heat: 3,
  why: "Study-guide terms endosymbiotic theory and plastid; review Qs 20–22; 'know current evolutionary theories'.",
  src: "M6_1 slides 4–8.",
  know: "Mitochondria and chloroplasts were once free-living bacteria that were engulfed by another cell and became permanent residents.",
  eli5: "Long ago a big cell swallowed a small bacterium but didn't digest it. The bacterium kept making energy for its host and the host kept it safe. Over generations they became one organism. Your mitochondria are those bacteria's descendants. A second swallowing (of a cyanobacterium) gave algae and plants their chloroplasts.",
  exam: `<p><b>Primary endosymbiosis</b>: a eukaryote engulfs a prokaryote. Mitochondria come from an aerobic <b>α-proteobacterium</b>; chloroplasts (plastids) come from a <b>cyanobacterium</b>, giving the Archaeplastida lineage.</p>
<p><b>Secondary endosymbiosis</b>: a eukaryote engulfs a eukaryote that already had a plastid (e.g. the origin of plastids in some algae such as Euglena and dinoflagellates).</p>
<p><b>Evidence:</b></p><ol><li>Closest DNA relatives of mitochondria and chloroplasts are bacteria (α-proteobacteria, cyanobacteria).</li><li>The host genome cannot build these organelles; they have their own DNA and divide on their own.</li><li>They use a different genetic code and their own tRNAs.</li><li>(Textbook extras: double membranes, bacterial-type ribosomes, circular DNA.)</li></ol>
<p><b>Unifying characteristics of eukaryotes</b> (present in the last common ancestor):</p>
<table class="t"><tr><th>Trait</th><th>How widespread</th></tr><tr><td>Nucleus</td><td>ALL. Necessary and sufficient to define a eukaryote</td></tr><tr><td>Mitochondria</td><td>MOST (some have reduced ones, e.g. Giardia)</td></tr><tr><td>Cytoskeleton (microtubules + microfilaments)</td><td>ALL. Allows varied and changing shapes</td></tr><tr><td>Flagella / cilia (whip-like)</td><td>MANY at some stage</td></tr><tr><td>Chromosomes on histones</td><td>Rarely absent</td></tr><tr><td>Mitosis</td><td>ALL</td></tr><tr><td>Meiosis / sexual reproduction</td><td>MANY/MOST</td></tr><tr><td>Cell walls</td><td>UNCLEAR: not homologous across groups</td></tr></table>`,
  terms: [["Endosymbiosis", "One cell living inside another; origin of mitochondria and plastids"], ["Plastid", "Chloroplast-family organelle descended from a cyanobacterium"], ["α-proteobacteria", "Bacterial group that gave rise to mitochondria"], ["Primary endosymbiosis", "Eukaryote engulfs a prokaryote"], ["Secondary endosymbiosis", "Eukaryote engulfs a eukaryote that already has a plastid"]],
  process: ["Host (archaeal-like) cell engulfs an aerobic α-proteobacterium", "Bacterium survives and supplies ATP; host provides protection/nutrients", "Genes transfer to the host nucleus; the symbiont becomes the mitochondrion", "Later, a mitochondria-bearing eukaryote engulfs a cyanobacterium → chloroplast (Archaeplastida)", "Secondary endosymbiosis spreads plastids to other lineages"],
  confuse: ["⚠️ Mitochondria ← α-proteobacteria; chloroplasts ← cyanobacteria. Don't swap.", "⚠️ Endosymbiosis does NOT explain the nucleus."],
  traps: ["'Mitochondria came from cyanobacteria.' False.", "'Endosymbiosis explains the origin of the nucleus.' False.", "'All eukaryotes have cell walls.' False."],
  tested: ["Origin of mitochondria?", "What came from an ancestral cyanobacterium?", "Which component does endosymbiotic theory explain?", "Which evidence supports it?"],
  trick: "<b>M</b>itochondria → <b>M</b>uscle power (respiration) → <b>a</b>erobic <b>a</b>lpha bacteria. <b>C</b>hloroplasts → <b>C</b>yanobacteria.",
  recall: ["State the endosymbiotic theory in 2 sentences.", "Give 3 lines of evidence.", "Primary vs secondary endosymbiosis?", "Which trait is necessary and sufficient to call something a eukaryote?", "Why are cell walls 'unclear' as a eukaryote trait?"],
  memorize: ["Organelle ↔ ancestor", "Eukaryote trait table"],
  understand: ["Why the evidence supports a bacterial origin"],
  one: "Mitochondria = engulfed α-proteobacteria; chloroplasts = engulfed cyanobacteria."
},
{
  id: "pgroups", m: "m6", title: "'Protists' are not a kingdom: the eukaryote supergroups", heat: 3,
  why: "Review Qs 24, 35, 36, 40, 41; term Archaeplastida. Knowing which protist sits in which clade underlies every M6 identification question.",
  src: "M6_1 slides 9–18, 30–32, 36.",
  know: "'Protist' is a leftover label for any eukaryote that isn't a plant, animal or fungus. DNA shows they're scattered across the eukaryote tree, so it's not a real group.",
  eli5: "Imagine calling everything in a store that isn't food, clothing or electronics 'miscellaneous'. That's 'protist'. It's useful as a word, but the items in that bin aren't related to each other.",
  exam: `<p><b>Why not a kingdom:</b> DNA shows 'Protista' is <b>paraphyletic/polyphyletic</b>. For example, choanoflagellates (protists) are closer to animals than to other protists, so a Kingdom Protista would have to include animals to stay monophyletic. 'Protist' and 'protozoa' remain <i>informal</i> names for eukaryotes that aren't plants, fungi or animals: highly variable, typically unicellular and microscopic, and needing wet habitats.</p>
<p><b>Protist characteristics:</b> unicellular, multinucleate or multicellular; phototrophs, mixotrophs or heterotrophs (heterotrophs use phagocytosis); move by cilia, pseudopodia or flagella; reproduce asexually (binary fission), sexually, or both. Called the 'most complicated cell' (one cell does everything; dinoflagellates even have an eye-like <b>ocelloid</b>) and the most nutritionally diverse group. <b>Algae evolved multiple times</b> across the tree.</p>
<p><b>Supergroups (as taught):</b></p>
<table class="t"><tr><th>Supergroup</th><th>Members</th><th>Hallmark</th></tr>
<tr><td><b>Excavata</b></td><td>Diplomonads (<i>Giardia</i>), parabasalids (<i>Trichomonas</i>), euglenozoans (<i>Euglena</i>, <i>Trypanosoma</i>)</td><td>'Excavated' feeding groove; many parasites; reduced mitochondria; anaerobic</td></tr>
<tr><td><b>Chromalveolata</b> (now 'SAR/TSAR')</td><td>Alveolates: dinoflagellates, apicomplexans (<i>Plasmodium</i>), ciliates. Stramenopiles: diatoms, golden algae, brown algae (kelp), oomycetes</td><td>Many phytoplankton; red tide; malaria</td></tr>
<tr><td><b>Rhizaria</b></td><td>Cercozoans, forams, radiolarians</td><td>Amoebas with thread-like pseudopodia</td></tr>
<tr><td><b>Archaeplastida</b></td><td>Red algae, green algae (chlorophytes, charophytes), land plants</td><td>Plastid from primary endosymbiosis of a cyanobacterium</td></tr>
<tr><td><b>Unikonta</b></td><td>Amoebozoans (slime molds, gymnamoebas, <i>Entamoeba</i>) + <b>Opisthokonts</b> (nucleariids, fungi, choanoflagellates, animals)</td><td>Opisthokonts: single posterior flagellum in ancestor</td></tr></table>
<p><b>Plankton:</b> phytoplankton (diatoms, green algae, photosynthetic dinoflagellates) form the base of the marine food web; microzooplankton protists include forams, radiolarians and mixotrophic dinoflagellates.</p>
<p class="ctx">Helpful context, probably not necessary to memorize: modern trees merge Chromalveolata + Rhizaria into 'SAR' (or 'TSAR'). The slides use both labels (slide 27 says 'TSAR clade').</p>`,
  terms: [["Protist", "Informal name for eukaryotes that aren't plants, fungi or animals"], ["Paraphyletic", "Group missing some descendants of its ancestor"], ["Opisthokonts", "Fungi + animals + choanoflagellates + nucleariids"], ["Archaeplastida", "Red algae + green algae + land plants"], ["Mixotroph", "Can photosynthesize AND eat"], ["Phagocytosis", "Engulfing food particles"], ["Pseudopodium", "'False foot' cytoplasm extension used to move and feed"], ["Phytoplankton", "Photosynthetic drifting microorganisms"]],
  confuse: ["⚠️ Opisthokont (fungi + animals) vs Archaeplastida (plants + red/green algae).", "⚠️ Amoebozoa (lobed pseudopods: slime molds, Entamoeba) vs Rhizaria (thread-like pseudopods: forams, radiolarians)."],
  traps: ["'All protists are unicellular.' False: kelp is multicellular.", "'All protists are photosynthetic.' False.", "'Slime molds are fungi.' Old classification; they are Amoebozoa.", "Including plants in Opisthokonta."],
  tested: ["Which clade contains red algae, green algae and land plants?", "Who's at the opisthokont party?", "What do all protists have in common? (eukaryotic)", "Correct taxonomic level of protists?"],
  trick: "Supergroups: '<b>E</b>very <b>C</b>lever <b>R</b>esearcher <b>A</b>lways <b>U</b>nderlines' (Excavata, Chromalveolata, Rhizaria, Archaeplastida, Unikonta).",
  recall: ["Why isn't Protista a valid kingdom?", "Name the 5 supergroups and 2 members of each.", "Who are the opisthokonts?", "What 3 groups make up Archaeplastida?", "What is the only trait ALL protists share?"],
  memorize: ["Supergroup table"],
  understand: ["Monophyly argument (choanoflagellates + animals)"],
  one: "Protists = 'everything else' eukaryotes, scattered across 5 supergroups. Fungi and animals are both opisthokonts."
},
{
  id: "pdis2", m: "m6", title: "Protists that matter: disease & ecology", heat: 3,
  why: "Review Qs 26–39, 42–43 (the biggest single protist block). Study guide: 'know groups responsible for diseases or environmentally important'.",
  src: "M6_1 slides 17–35.",
  know: "Be able to go from a description (symptom, habitat, shell, bloom) to the organism and then its clade.",
  eli5: "Protists are the plankton that make half the oxygen you breathe, the partners that feed coral reefs, and the parasites behind malaria, giardia and sleeping sickness.",
  exam: `<table class="t"><tr><th>Organism</th><th>Clade</th><th>Why it matters</th></tr>
<tr><td><i>Giardia intestinalis</i> (diplomonad)</td><td>Excavata</td><td>Giardiasis: severe diarrhea from fecally contaminated water, food or soil (the 'stream water' scenario)</td></tr>
<tr><td><i>Trichomonas vaginalis</i> (parabasalid)</td><td>Excavata</td><td>Trichomoniasis, one of the most common STDs</td></tr>
<tr><td><i>Trypanosoma</i> (euglenozoan)</td><td>Excavata</td><td>Blood parasite spread by insect bites: Chagas disease (<i>T. cruzi</i>, kissing bug); African sleeping sickness (tsetse fly)</td></tr>
<tr><td><i>Euglena</i> (euglenozoan)</td><td>Excavata</td><td>Mixotroph: chloroplasts but can act heterotrophic; lab model</td></tr>
<tr><td>Dinoflagellates (e.g. <i>Karenia brevis</i>)</td><td>Alveolata</td><td>Cellulose plates + 2 flagella; <b>red tides</b> (neurotoxins, O₂ depletion, shellfish poisoning, asthma); bioluminescence; coral symbionts (<i>Symbiodinium</i>)</td></tr>
<tr><td><i>Plasmodium falciparum</i> (apicomplexan)</td><td>Alveolata</td><td><b>Malaria</b>: mosquito = necessary intermediate host; ~220 million infected, ~450,000 deaths per year; evades the host by changing membrane proteins; partial vaccine since 2019</td></tr>
<tr><td>Diatoms</td><td>Stramenopila</td><td>Most common phytoplankton; <b>silica (glass) shells</b>; up to ½ of Earth's O₂ and ~50% of ocean organic material; diatomaceous earth used in filters and abrasives</td></tr>
<tr><td>Brown algae (kelp)</td><td>Stramenopila</td><td>Kelp forests = marine habitat</td></tr>
<tr><td>Red algae</td><td>Archaeplastida</td><td>Seaweeds; nori</td></tr>
<tr><td>Green algae</td><td>Archaeplastida</td><td>Closest relatives of land plants (charophytes); lichen partners</td></tr>
<tr><td>Plasmodial slime mold</td><td>Amoebozoa</td><td>Giant multinucleate single cell ('blob'), visible, up to meters wide</td></tr>
<tr><td>Cellular slime mold (<i>Dictyostelium</i>)</td><td>Amoebozoa</td><td>Model for the evolution of multicellularity</td></tr>
<tr><td><i>Entamoeba histolytica</i></td><td>Amoebozoa</td><td>Amoebic dysentery, 3rd-leading cause of death from eukaryotic parasites</td></tr>
<tr><td>Choanoflagellates</td><td>Opisthokonta</td><td>Look like sponge collar cells; closest living relatives of animals</td></tr></table>
<p><b>Ecological roles:</b> major photosynthesizers (~30% of global photosynthesis); symbionts (coral dinoflagellates; protists in termite guts digest wood); <b>coral bleaching</b> = coral expels its dinoflagellates under stress; <b>harmful algal blooms</b> (diatoms, dinoflagellates, cyanobacteria) driven by fertilizer runoff (eutrophication) and climate change → dead zones, neurotoxins (domoic acid, saxitoxin), shellfish poisoning; microbiome members; predators of prokaryotes that shape microbial communities (rumen ecosystem engineers); parasites (dysentery, blights on forests).</p>`,
  terms: [["Red tide", "Toxic dinoflagellate bloom"], ["Coral bleaching", "Coral expels its symbiotic dinoflagellates"], ["Intermediate host / vector", "Organism needed to transmit a parasite (mosquito for Plasmodium)"], ["Eutrophication", "Nutrient overload → algal bloom → O₂ depletion (dead zone)"], ["Diatomaceous earth", "Mined fossil diatom silica shells"]],
  confuse: ["⚠️ Diatom (silica shell, stramenopile) vs dinoflagellate (cellulose plates + 2 flagella, alveolate).", "⚠️ Plasmodium (malaria parasite) vs plasmodial slime mold (a multinucleate blob). Same word, unrelated!", "⚠️ Trypanosoma (insect bite, blood) vs Plasmodium (mosquito, blood): read the vector clue."],
  traps: ["Saying cyanobacteria are protists: they cause algal blooms but are bacteria.", "Calling choanoflagellates fungi."],
  tested: ["Clinical scenario → clade (Q30, Q34).", "Description → clade (Q26 silica; Q28 red tide).", "Categorize diseases by causative organism (Q42).", "Primary producer pick (Q39)."],
  trick: "<b>Di-a-tom</b> = 'glass house' (silica). <b>Dino</b>flagellate = 'whirling' with 2 flagella and makes the sea red/glow.",
  recall: ["Stream water + diarrhea → organism → clade?", "Insect bite in Africa + blood parasite → organism → clade?", "Why would mosquito resistance eradicate malaria?", "Which phytoplankton makes up to half of O₂ and has glass shells?", "What happens during coral bleaching?", "Describe a plasmodial slime mold's feeding stage."],
  memorize: ["Organism → clade → disease table"],
  understand: ["Why vectors/intermediate hosts are control points", "Eutrophication chain"],
  one: "Giardia/Trichomonas/Trypanosoma = Excavata; dinoflagellates/Plasmodium = Alveolates; diatoms/kelp = Stramenopiles; slime molds/Entamoeba = Amoebozoa.",
  connect: ["Dinoflagellate–coral mutualism (M6) appears again under Cnidaria (M8).", "Choanoflagellates link to animal origins (M8)."]
},
{
  id: "fungi", m: "m6", title: "Fungi: key features, nutrition & structure", heat: 3,
  why: "Terms hyphae, chitin, mycelium, heterotroph; review Qs 49, 50; 'compare fungi vs protists'.",
  src: "M6_2 slides 3–10.",
  know: "Fungi are heterotrophs that digest food OUTSIDE their bodies and then absorb it, through a web of thin filaments with chitin walls.",
  eli5: "A fungus is like a net of microscopic straws pushed into its food. It squirts digestive juices out, the food dissolves, and the straws suck it up. The mushroom you see is just the fruit; the real body is the net (mycelium) hidden in soil or wood.",
  exam: `<ul><li><b>More closely related to animals than to plants</b> (opisthokonts).</li><li>Eukaryotic; unicellular (yeasts) or multicellular (filamentous).</li><li><b>No chloroplasts</b>, not photosynthetic.</li><li><b>Absorptive heterotrophs</b>: secrete hydrolytic <b>exoenzymes</b> outside the body, then absorb the small molecules. Can digest living or dead material, even plastics and radioactive material. (Animals ingest, then digest inside.)</li><li><b>Cell walls of chitin</b>, a tough polysaccharide. Chitin keeps hyphae from bursting (lysing) under the osmotic pressure of absorbing nutrients.</li><li>Store carbohydrate as <b>glycogen</b> (like animals).</li><li>Like bacteria: absorb across the cell surface and act as decomposers.</li><li><b>Hyphae</b>: tubular filaments. A <b>mycelium</b> is the interwoven mass of hyphae, maximizing surface area for absorption. Hyphae grow in length, not girth, using cytoplasmic streaming to the tips. Fungi aren't motile; they spread by growth and spores.</li><li><b>Septate</b> hyphae have cross-walls (septa) with pores that let organelles pass. <b>Coenocytic</b> hyphae lack septa: one continuous cytoplasm with thousands of nuclei.</li><li><b>Specialized hyphae</b>: predatory (<i>Arthrobotrys</i>, an ascomycete, has constricting rings that trap nematodes); <b>haustoria</b> (parasitic hyphae that pull nutrients from plant cells; mistletoe has them too); <b>arbuscules</b> (mycorrhizal hyphae that penetrate the plant cell wall but not the membrane).</li><li>Largest organism: the honey mushroom <i>Armillaria solidipes</i>, >2,000 acres in Oregon, ~2,400 years old.</li></ul>`,
  compare: { head: ["", "Fungi", "Plants", "Animals", "Protists"], rows: [["Nutrition", "Absorptive heterotroph", "Photoautotroph", "Ingestive heterotroph", "All kinds"], ["Wall", "Chitin", "Cellulose", "None", "Varies / none"], ["Storage", "Glycogen", "Starch", "Glycogen", "Varies"], ["Motile?", "No (spores spread)", "No", "Yes", "Many"], ["Closest relatives", "Animals", "Green algae", "Choanoflagellates / fungi", "—"]] },
  terms: [["Hyphae", "Thin tubular filaments making up the fungal body"], ["Mycelium", "Network (mass) of hyphae"], ["Chitin", "Tough nitrogen-containing polysaccharide in fungal walls (and arthropod exoskeletons)"], ["Exoenzymes", "Digestive enzymes secreted outside the cell"], ["Septa", "Cross-walls dividing hyphae into cells"], ["Coenocytic", "Hyphae without septa; multinucleate"], ["Haustoria", "Parasitic hyphae that tap into host cells"], ["Yeast", "Single-celled fungus"]],
  confuse: ["⚠️ Absorptive (fungi) vs ingestive (animals) heterotrophy.", "⚠️ Chitin (fungi, arthropods) vs cellulose (plants, some algae) vs peptidoglycan (bacteria)."],
  traps: ["'Fungi are more closely related to plants.' False.", "'Fungi photosynthesize.' False.", "'Fungi ingest their food.' False: they absorb."],
  tested: ["Exclude an organism from fungi if it… (photosynthesizes / has cellulose / ingests).", "Mycelia are made of ___ (hyphae).", "How do fungi differ from protists?"],
  trick: "Fungi = 'pre-digest then sip'. <b>Chit</b>in → 'chitter-chatter crunchy': crunchy bug shells AND fungal walls.",
  recall: ["Describe how fungi feed.", "Why is chitin needed in hyphae?", "Septate vs coenocytic?", "Why does a mycelium maximize absorption?", "3 things that rule out an organism being a fungus."],
  memorize: ["Fungal traits list"],
  understand: ["Surface-area logic of hyphae"],
  one: "Fungi = absorptive heterotrophs with chitin walls, built from hyphae → mycelium; closer to animals than plants."
},
{
  id: "frep", m: "m6", title: "Fungal reproduction: plasmogamy → karyogamy", heat: 3,
  why: "Terms plasmogamy and karyogamy; review Q51 ('___ followed by ___'). Order-reversal trap guaranteed.",
  src: "M6_2 slides 24–31.",
  know: "Fungi reproduce with spores. In sex, cells fuse first (plasmogamy), the nuclei fuse later (karyogamy), and in between the cell carries two separate nuclei (dikaryotic).",
  eli5: "Two compatible fungi 'move in together' (cytoplasm merges) but keep separate bedrooms (two nuclei) for a long time. Only later do they 'marry' (nuclei fuse), immediately have 'kids' by meiosis (spores), and the kids spread on the wind.",
  exam: `<ul><li>Fungi make huge numbers of <b>spores</b>, sexually or asexually, dispersed by wind or water. Where moist food exists, spores germinate into new mycelia.</li><li><b>Asexual</b> = faster, best in ideal conditions. <b>Sexual</b> = hardier spores, better in poor conditions. All sexually reproducing fungi also reproduce asexually; some (deuteromycetes) are only known asexually.</li><li>Asexual forms: yeasts bud or divide (no spores); molds make haploid spores by <b>mitosis</b> (the 'furry' mycelium).</li><li>Sexual: haploid individuals release <b>pheromones</b> to find a compatible mating type (2 to ~3,000 mating types depending on the species). In yeast this is 'schmooing'.</li></ul>`,
  process: ["Haploid (n) hyphae of two compatible mating types meet (pheromone signaling)", "PLASMOGAMY: cytoplasm fuses, nuclei do NOT", "HETEROKARYOTIC / DIKARYOTIC stage (n+n): two distinct haploid nuclei in the same cell; can last years; a mushroom is a dense mass of dikaryotic hyphae", "KARYOGAMY: the nuclei fuse → diploid (2n) zygote (triggered by stress)", "MEIOSIS → haploid, genetically recombinant spores", "Spores disperse and germinate → new haploid mycelium"],
  terms: [["Plasmogamy", "Fusion of cytoplasm from two parent hyphae"], ["Karyogamy", "Fusion of the two haploid nuclei → diploid zygote"], ["Dikaryotic (n+n)", "Cell with two separate haploid nuclei"], ["Heterokaryon", "Mycelium with genetically different nuclei"], ["Spore", "Haploid reproductive cell that can grow by mitosis into a new individual"], ["Mushroom", "Reproductive structure (fruiting body) of dikaryotic hyphae that protects and disperses spores"]],
  confuse: ["⚠️ Plasma-gamy = plasma (cytoplasm) marriage; Karyo-gamy = karyon (nucleus) marriage. Cytoplasm always comes FIRST.", "⚠️ Dikaryotic (n+n, two nuclei) vs diploid (2n, one fused nucleus)."],
  traps: ["'Karyogamy followed by plasmogamy.' Reversed.", "'Dikaryotic cells are diploid.' False: n+n.", "'The mushroom is the whole fungus.' False: it's the reproductive structure."],
  tested: ["Fill in: ___ followed by ___.", "Order the fungal life-cycle steps.", "Advantage of sexual vs asexual spores."],
  trick: "'Move in together (<b>plasma</b>, cytoplasm) before you merge your brains (<b>karyo</b>, nucleus).'",
  recall: ["Draw the fungal sexual cycle from memory.", "What is the ploidy of a dikaryotic cell?", "When is asexual reproduction favored? Sexual?", "What is a mushroom, biologically?"],
  memorize: ["Life-cycle order"],
  understand: ["Why a delayed karyogamy (dikaryon) stage exists"],
  one: "Plasmogamy (cytoplasm) → dikaryon (n+n) → karyogamy (2n) → meiosis → spores."
},
{
  id: "fphyla", m: "m6", title: "Fungal phyla: Chytrids, Zygomycota, Ascomycota, Basidiomycota", heat: 2,
  why: "4 phyla are study-guide terms; review Q44 (Bd → chytrids); objective: 'one example unique to each phylum'.",
  src: "M6_2 slides 35–39 (+ slides 10, 22 for ascomycete examples).",
  know: "Each phylum has one signature feature: flagellated spores (chytrids), a tough zygosporangium (zygomycetes), sac-shaped asci (ascomycetes), club-shaped basidia and mushrooms (basidiomycetes).",
  eli5: "Chytrids are the 'swimmers' (flagella, mostly in water). Zygomycetes are the 'bread mold survivors'. Ascomycetes are the 'sac fungi': yeast, morels, truffles. Basidiomycetes are the 'classic mushrooms' and the best wood-rotters.",
  exam: `<table class="t"><tr><th>Phylum</th><th>Signature</th><th>Examples / importance</th></tr>
<tr><td><b>Cryptomycota + Microsporidia</b></td><td>Basal lineage, largely aquatic, still have chitin</td><td>Discovered via metagenomics</td></tr>
<tr><td><b>Chytridiomycota</b> (chytrids)</td><td>Unicellular with <b>flagella</b> (only fungi with flagellated cells)</td><td><i>Batrachochytrium dendrobatidis</i> (<b>Bd</b>): global amphibian decline and extinctions; endemic to Korea/Vietnam for ~50 million years, spread to naïve populations by the amphibian trade</td></tr>
<tr><td><b>Zygomycota</b></td><td><b>Zygosporangium</b>: dormant zygote that survives drying out</td><td>Decomposers, some parasites; black bread mold; the 'mold' is a fruiting body for sexual reproduction</td></tr>
<tr><td><b>Ascomycota</b> (sac fungi)</td><td>Spores in sac-like <b>asci</b> inside fruiting bodies called <b>ascocarps</b></td><td>Yeasts, morels, truffles; <i>Claviceps</i> (ergot of rye); white-nose syndrome in bats; <i>Arthrobotrys</i> (nematode trap); <i>Penicillium</i></td></tr>
<tr><td><b>Basidiomycota</b> (club fungi)</td><td>Mushrooms, puffballs, shelf fungi (~50,000 species)</td><td>Best at decomposing <b>lignin</b> (wood); some form mycorrhizae; plant parasites (rusts, smuts); most edible mushrooms</td></tr></table>
<p>Naming: <b>-mycota</b> = phylum, <b>-mycetes</b> = class. ~145,000 known species; estimated 2.2–3.8 million total.</p>`,
  terms: [["Chytridiomycota", "Flagellated fungi; Bd"], ["Zygomycota", "Zygosporangium; bread molds"], ["Ascomycota", "Sac fungi; asci in ascocarps; yeast, morels, truffles"], ["Basidiomycota", "Club fungi; mushrooms; lignin decomposers"], ["Bd", "Chytrid fungus killing amphibians worldwide"], ["Lignin", "Tough wood polymer; basidiomycetes decompose it best"]],
  confuse: ["⚠️ Ascomycota (yeasts, truffles, ergot, white-nose) vs Basidiomycota (mushrooms, rusts, smuts, lignin).", "⚠️ Bd (chytrid, frogs) vs white-nose (ascomycete, bats)."],
  traps: ["Placing Bd in Ascomycota.", "Saying yeast are basidiomycetes."],
  tested: ["Which group contains the amphibian-killing fungus?", "Which phylum is best at breaking down wood?", "Match unique feature ↔ phylum."],
  trick: "<b>C</b>hytrid = <b>C</b>an swim (flagella), kills <b>C</b>roakers. <b>Asc</b>o = 'sac'. <b>Basidio</b> = 'mushroom on a pedestal'. <b>Zygo</b> = 'zygote that waits'.",
  recall: ["Give the unique feature of each of the 4 main phyla.", "Why did Bd spread globally?", "Which phylum breaks down lignin, and why does that matter for coal?", "Name 3 ascomycetes."],
  memorize: ["Phylum ↔ feature ↔ example"],
  understand: ["Bd spread logic (naïve populations)"],
  one: "Chytrids swim and kill frogs (Bd); zygo = zygosporangium; asco = sacs (yeast, truffle); basidio = mushrooms that eat wood.",
  connect: ["Basidiomycetes evolving to break down lignin slowed coal formation (M7).", "Bd is one reason amphibians are vulnerable (M9)."]
},
{
  id: "fecol", m: "m6", title: "Fungal ecology & human importance", heat: 3,
  why: "Terms decomposer, mycorrhiza, lichen; review Qs 45–48; study guide 'importance of organisms'.",
  src: "M6_2 slides 11–23; M7 slide 17.",
  know: "Fungi are Earth's main land decomposers, essential partners of plant roots, and important pathogens of crops, along with food, drugs and some human infections.",
  eli5: "Fungi are the clean-up crew of forests, the delivery service for plant roots (mycorrhizae), the bakers and brewers of human history, and sometimes the villains that rot crops or cause athlete's foot.",
  exam: `<p><b>Three lifestyles:</b> decomposers (dead material), parasites (living hosts), mutualists (absorb from a host and give back).</p>
<ul><li><b>Decomposers</b>: with bacteria, the primary decomposers on land; release enzymes externally to break down complex compounds and recycle nutrients.</li><li><b>Mycorrhizae</b> ('fungus roots'): <b>mutualism</b>. The fungus delivers phosphate ions, minerals and water; the plant supplies sugars. Most vascular plants depend on them, and they're seen in the oldest plant fossils: plants and fungi colonized land together.</li><li><b>Endophytes</b>: fungi/bacteria living inside plants; some make toxins that defend the host or help it tolerate heat, drought or heavy metals.</li><li><b>Lichens</b>: fungus + green algae and/or cyanobacteria. The photosynthetic partner supplies organic carbon; the fungus provides structure. Grow on rocks, logs, trees and roofs. Lecture: unclear whether mutualism or parasitism.</li><li><b>Animal mutualisms</b>: fungi digest plant material in cattle guts; leaf-cutter ants farm fungi and eat the hyphal tips.</li><li><b>Plant parasites</b>: ~30% of fungal species are parasites/pathogens, mostly of plants; 10–50% of the world's fruit harvest is lost to fungi each year.</li><li><b>Toxins</b>: <i>Claviceps purpurea</i> (ergot of rye) causes gangrene, spasms, hallucinations; the ~944 CE epidemic killed up to 40,000 in France. Mold toxins are lethal in large doses and carcinogenic in small ones.</li><li><b>Human infections (mycoses)</b>: animals are less susceptible than plants. Skin infections (ringworm, athlete's foot), thrush, coccidioidomycosis (TB-like lung disease); opportunists strike when antibiotics or steroids disrupt normal flora or immunity is weak.</li><li><b>Uses</b>: mushrooms, cheese, bread, beer and wine (yeast); antibiotics (penicillin from <i>Penicillium</i>).</li></ul>`,
  terms: [["Decomposer", "Breaks down dead organic matter"], ["Mycorrhiza", "Mutualism between fungus and plant roots"], ["Arbuscule", "Branching mycorrhizal hypha inside the plant cell wall"], ["Endophyte", "Microbe living inside plant tissue"], ["Lichen", "Fungus + photosynthetic alga/cyanobacterium"], ["Mycosis", "Fungal infection in animals"], ["Ergotism", "Poisoning from Claviceps toxins in rye"]],
  confuse: ["⚠️ Mycorrhiza (fungus + root) vs lichen (fungus + alga/cyanobacterium).", "⚠️ In a lichen, the alga/cyanobacterium makes the sugar, not the fungus."],
  traps: ["'Lichens get carbon from the fungus's photosynthesis.' Fungi can't photosynthesize.", "'Mycorrhizae are parasitic.' They're mutualistic."],
  tested: ["Mycorrhizae = ___ interaction.", "Lichens get carbon from…", "Without fungi civilization wouldn't have…", "Ecological roles of fungi (select all)."],
  trick: "<b>Myco-rhiza</b> = 'fungus-root'. <b>Lichen</b> = 'fungus farmer who houses an algae chef'.",
  recall: ["What does each partner give in a mycorrhiza?", "Who makes the food in a lichen?", "Name 3 fungal diseases of humans and 2 of plants/crops.", "How did fungi help plants colonize land?", "Name 4 foods/drugs that need fungi."],
  memorize: ["Examples of uses and diseases"],
  understand: ["Why mutualism enabled land colonization"],
  one: "Fungi decompose, partner (mycorrhizae, lichens), parasitize (crops) and feed us (bread, beer, penicillin)."
}
);
