// Lessons, Module 14: Ecosystems & Conservation Biology.
window.SG = window.SG || {};
SG.topics = SG.topics || [];

SG.topics.push(
{
  id: "energy", m: "m14", title: "Energy flow & primary production (GPP, NPP)", heat: 3,
  src: "M14.1 slides 2–12", sg: [17],
  simple: "Energy enters an ecosystem as sunlight, gets captured by plants and algae (producers), passes to animals that eat them, and leaves as heat. It flows one way and never recycles. Primary production is how fast producers turn that sunlight into new living material.",
  detail: `<p><b>Two main ecosystem processes</b>: energy flow and chemical cycling.</p>
<p><b>Energy flow</b>: sunlight → chemical energy by autotrophs → eaten by heterotrophs → dissipated as heat. Energy does <b>not cycle</b>; a continuous input is needed. Governed by thermodynamics: <b>1st law</b> (energy is transferred/transformed, never created or destroyed); <b>2nd law</b> (every conversion increases entropy, so conversions are inefficient and lose heat).</p>
<p><b>Chemical cycling</b>: elements move between biotic and abiotic parts. Producers (photo- and chemosynthetic) turn inorganic → organic; metabolism and decomposers return it to inorganic form. Matter is conserved and recycled. Ecosystems are open: if more nutrient leaves than enters, nutrients limit production.</p>
<p><b>Research modes</b>: holistic (whole natural ecosystem), mesocosm (a partitioned part of a natural system), microcosm (lab recreation).</p>
<p><b>Global energy budget</b>: ~50% of solar energy reaches Earth's surface; only ~1% of light hitting photosynthetic surfaces becomes chemical energy.</p>
<p><b>Primary production</b>: production of new organic matter (biomass) by autotrophs.</p>
<ul><li><b>GPP</b> (gross): total photosynthetic conversion of light to chemical energy per time.</li>
<li><b>NPP</b> (net) = <b>GPP − energy producers use in respiration</b>. ~½ of GPP. It's the biomass <b>added per unit time</b> (not the standing biomass), the food available to consumers.</li></ul>
<p><b>NPP varies regionally</b>: highest <b>per unit area</b> in <b>tropical forests, estuaries and coral reefs</b>; open ocean is low per area but contributes the <b>most total</b> global NPP because it is so big. Tropical forest has the highest primary production of the biomes in the Kahoot. Terrestrial productivity is higher in equatorial climates because of a <b>combination</b> of sunlight, water and temperature (Canvas Q1).</p>
<p>Phytoplankton are <b>primary producers</b> (Q17, Q37). Adding fertilizer (relieving nutrient limitation) to patchy forest-meadow would raise NPP most (Canvas Q9 ⚑ reasoning: nutrients, not consumers, limit production).</p>`,
  why: `<p>Each organism uses most of the energy it takes in to stay alive (respiration), and that energy ends as heat, which no organism can use. So energy leaks out at every step and must be constantly replaced by the sun. Atoms, by contrast, are never destroyed, so decomposers can hand them back to producers indefinitely.</p>`,
  vocab: [["Autotroph / primary producer", "Makes organic matter from inorganic (light or chemicals)", "Plants, phytoplankton, cyanobacteria"], ["Heterotroph", "Gets energy by eating others", "Animals, fungi"], ["GPP", "Total photosynthetic production", ""], ["NPP", "GPP − producer respiration", "Food available to consumers"], ["Mesocosm / microcosm", "Partitioned natural plot / lab ecosystem", ""], ["Chemoautotroph", "Producer using chemical energy", "Vent bacteria"]],
  compare: { head: ["", "Energy", "Matter (nutrients)"], rows: [["Path", "One-way flow", "Cycles"], ["Enters as", "Sunlight", "Already present; recycled"], ["Leaves as", "Heat", "Doesn't leave Earth (may leave an ecosystem)"], ["Law", "Thermodynamics (1st & 2nd)", "Conservation of mass"]] },
  miscon: ["Energy does not cycle. 'Nutrients cycle, energy flows.'", "NPP is a rate of new growth, not the total biomass present.", "The open ocean has LOW productivity per m² but the HIGHEST total.", "Decomposers recycle nutrients, not energy."],
  exam: { q: "A grassland has GPP of 2,000 kcal/m²/yr and producers respire 1,100 kcal/m²/yr. What is NPP, and what does it represent?", a: "NPP = 900 kcal/m²/yr: the energy stored as new producer biomass, available to consumers and decomposers.", how: "NPP = GPP − R." },
  recall: ["Why must energy be continuously supplied but nutrients need not be?", "Define GPP and NPP and give the relationship.", "Which ecosystems have the highest NPP per area? Highest total?", "State the 1st and 2nd laws as they apply to ecosystems.", "What is phytoplankton's trophic role?"],
  take: "Energy flows (sun → heat) and is lost at every step; matter cycles. NPP = GPP − respiration; highest per area in tropical forest, estuaries, reefs."
},
{
  id: "foodweb", m: "m14", title: "Food chains, food webs & trophic levels", heat: 3,
  src: "M14.1 slides 13–17; M13 review 2, 22, 24; M14.2 review; Woolink", sg: [33, 35, 36, 37, 61],
  simple: "A food chain is one line of who-eats-whom. A food web is all those lines tangled together. Arrows point from the thing that gets eaten to the thing that eats it, following the energy. Producers are at the bottom with no arrows coming in; top predators are at the top with no arrows going out (except to decomposers).",
  detail: `<p><b>Food chain</b>: transfer of food energy up trophic levels. <b>Trophic level</b>: feeding position. <b>Trophic structure</b>: feeding relationships that set the route of energy flow and chemical cycling.</p>
<ol><li><b>Primary producers</b> (autotrophs): plants, algae, <b>phytoplankton</b>.</li>
<li><b>Primary consumers</b> (herbivores): eat producers, e.g. <b>zooplankton</b> in a marine web (Q33), krill.</li>
<li><b>Secondary consumers</b>: eat primary consumers.</li>
<li><b>Tertiary consumers</b>; then <b>quaternary</b> (apex).</li></ol>
<p><b>Decomposers/detritivores</b> (bacteria, fungi) break down dead material from all levels and return nutrients.</p>
<p><b>Arrow convention</b>: arrows go <b>from the organism consumed to the consumer</b> (direction of energy flow). Lake Ontario web (Fig 46.6): opossum shrimp eat both producers and primary consumers, so organisms can occupy more than one trophic level (omnivores).</p>
<p><b>Chains vs webs</b>: chains are simpler, easier to model and experiment with; webs represent ecosystem structure and dynamics more accurately and feed simulation models. A diagram with <b>only one species at each level</b> is a chain, not a web (Kahoot).</p>
<p><b>Reading the A–H web</b> (Woolink/lecture figure): arrows A→C, A→D, A→E, B→D, B→E, C→F, C→G, C→E, D→F, D→E, F→H, G→H, G→?, H→? (top-right node; its letter is hidden in your screenshot).</p>
<ul><li>No arrows in: <b>A and B = primary producers</b>.</li>
<li>C and D eat only producers: <b>primary consumers</b>. D competes with C for A.</li>
<li>F and G eat C/D: <b>secondary consumers</b>.</li>
<li>H eats F and G: <b>tertiary consumer</b>. The hidden top node eats G and H: tertiary and <b>quaternary</b>.</li>
<li>E receives arrows from A, B, C and D (producers and consumers) and none leave it: most likely the <b>decomposer</b> (M13 review 22 / M14.2 review).</li></ul>
<p>Arctic chain (Q61): phytoplankton → zooplankton → fish → seals → polar bears. Polar bears are <b>quaternary consumers</b> (5th trophic level); only ~0.01% of phytoplankton energy reaches them (10% × 10% × 10% × 10%); they carry the highest concentration of persistent toxins. Humans eating seals would be at the same trophic level as polar bears. A "vegan" human is a primary consumer.</p>`,
  why: `<p>Arrows follow energy: energy in the zooplankton's body moves into the fish when the fish eats it, so the arrow points to the fish. To find a trophic level, count steps from a producer: producers = 1, eaters of producers = 2 (primary consumer), etc. An organism that eats at several levels has more than one trophic position.</p>`,
  fig: "foodweb",
  vocab: [["Trophic level", "Feeding position in a chain", ""], ["Primary producer", "Autotroph, level 1", "Phytoplankton"], ["Primary consumer", "Herbivore, level 2", "Zooplankton"], ["Secondary consumer", "Eats herbivores, level 3", "Small fish"], ["Tertiary / quaternary", "Levels 4 / 5", "Seal / polar bear"], ["Omnivore", "Eats more than one trophic level", "Opossum shrimp, humans"], ["Decomposer / detritivore", "Breaks down dead matter", "Bacteria, fungi, earthworms"]],
  compare: { head: ["", "Food chain", "Food web"], rows: [["Structure", "One species per level, linear", "Many interconnected chains"], ["Strength", "Simple to model/experiment", "Accurate picture of the ecosystem"], ["Use", "Nutrient-exchange models", "Simulation modeling"]] },
  miscon: ["Arrows point TO the eater, not to the eaten.", "Zooplankton are consumers (primary), not producers. Phytoplankton are producers.", "A decomposer receives arrows from many levels including producers.", "Numbering: 'primary consumer' is trophic level 2."],
  exam: { q: "In the A–H web, a disease wipes out D. Which species compete less, and which predators lose food?", a: "C would face less competition for A (and E loses one food source). F loses one of its two prey (still eats C).", how: "Follow every arrow into and out of the removed node." },
  recall: ["Which way do arrows point in a food web?", "In a marine web, what are phytoplankton and zooplankton?", "In the A–H web, which species are producers? Secondary consumers?", "What trophic level is a polar bear in the arctic chain?", "Why is a diagram with one species per level a chain?"],
  take: "Arrows run eaten → eater. Count steps from producers. Phytoplankton = producers; zooplankton = primary consumers."
},
{
  id: "pyramids", m: "m14", title: "Energy transfer efficiency & ecological pyramids", heat: 3,
  src: "M14.1 slides 18–25", sg: [62, 64],
  simple: "Only about a tenth of the energy at one feeding level makes it to the next; the rest is burned for living and lost as heat. That's why there are far more plants than plant-eaters, more plant-eaters than meat-eaters, and so few top predators. It's also why food chains rarely have more than 4–5 links.",
  detail: `<p><b>~10% rule</b>: only ~10% of energy passes to the next trophic level; ~90% is lost, mostly as heat from respiration (plus waste and uneaten parts). What's inefficient: some energy is transformed into less useful forms, such as heat (Kahoot).</p>
<p><b>Limits to food-chain length</b>: only 4–5 trophic levels per community. <b>Energetic hypothesis</b>: chain length is limited by inefficient energy transfer; chains should be longest in the most productive habitats (Q62). Also: organisms get bigger at higher levels; large carnivores need enough prey for their metabolic needs. Big animals need less food per kg (1 kg of elephant costs less energy than 1 kg of mouse); whales survive on krill by eating enormous quantities of an abundant, low-level food.</p>
<p><b>Pyramids</b>:</p>
<ul><li><b>Energy (production) pyramid</b>: always upright: energy can't increase up the chain.</li>
<li><b>Biomass pyramid</b>: dry mass at each level. Terrestrial: sharply upright. Aquatic: sometimes <b>inverted</b>, because phytoplankton reproduce fast and are eaten quickly, so standing biomass is small even though production is high.</li>
<li><b>Numbers (abundance) pyramid</b>: usually upright; can be odd (one tree feeding thousands of insects ⚑).</li></ul>
<p>For most terrestrial ecosystems all three share a broad base and narrow top because <b>energy is lost at each transfer</b> (Q64). Collective biomass is smallest at the <b>top (tertiary) consumers</b> (Kahoot).</p>
<p><b>Consequences</b>: top predators have the lowest abundance and are most vulnerable to extinction (they need large areas, have small populations, and accumulate toxins). Meat is a "luxury": eating at a higher trophic level needs ~10× more producer energy, so livestock fed on grain is a large part of the developed-world ecological footprint.</p>`,
  why: `<p>The 2nd law of thermodynamics: every energy conversion (digesting, building tissue, moving, keeping warm) releases heat. A predator can only build its body from the small fraction of its prey's energy that the prey stored as tissue, and then it spends most of that too. After four or five steps there isn't enough energy left to support a viable population of another level.</p>`,
  fig: "trophic",
  vocab: [["10% rule", "~10% of energy transfers to the next level", ""], ["Energy pyramid", "Energy per level per time; never inverted", ""], ["Biomass pyramid", "Standing dry mass per level; can invert in water", ""], ["Energetic hypothesis", "Food chain length limited by energy loss", ""], ["Ecological footprint", "Resources needed to support consumption", "Meat-heavy diets have large footprints"]],
  compare: { head: ["Pyramid", "Can it be inverted?", "Why"], rows: [["Energy", "Never", "Energy is lost at each step (2nd law)"], ["Biomass", "Yes (aquatic)", "Phytoplankton turn over fast; small standing crop"], ["Numbers", "Sometimes", "One large producer can feed many small consumers"]] },
  miscon: ["Energy isn't 'used up' in the sense of destroyed; it's converted to heat that can't be passed on.", "An inverted biomass pyramid doesn't mean more energy at the top.", "Decomposers don't 'maintain efficiency'; they recycle nutrients, not energy."],
  exam: { q: "Producers in a lake capture 50,000 kcal/m²/yr. Roughly how much reaches tertiary consumers?", a: "About 50 kcal/m²/yr (50,000 → 5,000 → 500 → 50).", how: "Multiply by 0.1 for each transfer: producers → primary → secondary → tertiary = 3 transfers." },
  recall: ["Why are food chains typically short?", "Why do pyramids have a broad base?", "Which pyramid can be inverted, and where?", "Why are top predators the most endangered?", "Why is eating meat energetically costly?"],
  take: "~10% passes up; ~90% is lost as heat. So pyramids are bottom-heavy, chains have 4–5 links, and top predators are rare and vulnerable."
},
{
  id: "cycles", m: "m14", title: "Biogeochemical cycles: nitrogen, carbon, phosphorus", heat: 3,
  src: "M14.1 slides 26–36; Woolink", sg: [8, 9, 10],
  simple: "Atoms like carbon and nitrogen go round and round between living things and the air, water, soil and rock. Carbon moves mostly through photosynthesis and respiration; nitrogen enters life only after bacteria convert it from air into a usable form; phosphorus comes from rocks and never enters the air.",
  detail: `<p><b>Nutrient cycles</b> (key term) are <b>biogeochemical</b> because they involve biotic and abiotic parts. Gaseous elements (C, O, S, N) cycle globally via the atmosphere; heavier ones (P, K, Ca) cycle locally on land and more widely in water. For each cycle know: biological importance, forms available to life, reservoirs, key processes.</p>
<p><b>Reservoir terms</b>: <b>pool</b> = amount stored in a component; <b>flux</b> = movement between pools; <b>sink</b> = nutrient absorbed faster than released (P precipitating into lake sediment); <b>source</b> = released faster than absorbed. Woolink matching: nutrient moves from reservoir into environment = <b>a sink becomes a source</b>; nutrient removed from cycling into storage = <b>a source becomes a sink</b>; current climate change = <b>carbon sinks converted into a carbon source</b> (burning fossil fuels and forests); ocean acidification = <b>atmospheric carbon being converted into an ocean carbon sink</b>.</p>
<h4>Nitrogen cycle</h4>
<ul><li>Huge atmospheric pool of N₂, <b>unusable by most organisms</b>. Needed for amino acids/proteins and nucleic acids; often limits primary production.</li>
<li><b>Nitrogen fixation</b>: bacteria (in soil, water and root nodules of legumes and some trees) convert N₂ into <b>ammonia/ammonium or nitrate</b> that plants can use. This is how N enters the living part of the ecosystem (Q9).</li>
<li>Plants build N into <b>proteins</b>, which animals eat. Decomposer bacteria return proteins to inorganic N (ammonification ⚑); nitrification ⚑ converts ammonium → nitrate; denitrification ⚑ returns N₂ to the air.</li>
<li>Forms usable (Woolink): <b>plants</b> → ammonia (ammonium) and nitrate; <b>animals</b> → proteins (organic N in food); <b>bacteria</b> → collectively all four: N₂ (fixers), ammonia, nitrate, proteins (decomposers).</li></ul>
<h4>Carbon cycle</h4>
<ul><li>Carbon is the backbone of all organic molecules. Moves between atmosphere and organisms by <b>photosynthesis</b> (CO₂ → sugar) and <b>respiration</b> (sugar → CO₂); also decomposition, combustion, ocean exchange, sedimentation into fossil fuels/limestone.</li>
<li>Climate change is an <b>imbalance</b> in CO₂ cycling (more released than sequestered).</li></ul>
<h4>Phosphorus cycle</h4>
<ul><li>P is in nucleic acids, phospholipids and ATP. Main inorganic form: <b>phosphate (PO₄³⁻)</b>. <b>No significant atmospheric phase</b>.</li>
<li>Reservoirs: marine sedimentary rocks (largest), soil, oceans, organisms. Weathering releases phosphate to soil; it reaches water by leaching/runoff; settles as sediment; geologic uplift returns it to land.</li></ul>`,
  why: `<p>Each cycle is limited by its slowest, hardest step. For nitrogen, it's breaking the N≡N triple bond, which only certain bacteria can do, so fixation controls how much N enters life. For phosphorus, there's no gas phase, so it moves only as fast as rock weathers. That's why N and P are the classic limiting nutrients and why fertilizer (adding N and P) has such big effects.</p>`,
  fig: "ncycle",
  vocab: [["Biogeochemical cycle", "Element movement through biotic and abiotic parts", ""], ["Pool / flux", "Stored amount / movement between pools", ""], ["Sink / source", "Absorbs faster than releases / releases faster than absorbs", "Forest growth / forest fire"], ["Nitrogen fixation", "N₂ → NH₃ by bacteria", "Rhizobium in legume nodules"], ["Nitrification ⚑", "NH₄⁺ → NO₂⁻ → NO₃⁻ by bacteria", ""], ["Denitrification ⚑", "NO₃⁻ → N₂", ""], ["Phosphate", "PO₄³⁻, main inorganic P", ""]],
  compare: { head: ["", "Carbon", "Nitrogen", "Phosphorus"], rows: [["Main reservoir", "Atmosphere CO₂, oceans, fossil fuels, rock", "Atmosphere N₂", "Sedimentary rock"], ["Entry to life", "Photosynthesis", "Bacterial N fixation", "Plant uptake of phosphate from soil/water"], ["Gas phase?", "Yes", "Yes", "No"], ["Used for", "All organic molecules", "Proteins, nucleic acids", "DNA, ATP, phospholipids"]] },
  miscon: ["Plants cannot use N₂ directly, even though air is 78% N₂.", "Animals get N from proteins in food, not from nitrate or air.", "Phosphorus has no atmospheric reservoir.", "Nutrient cycling is studied at the ecosystem level (Q8)."],
  exam: { q: "A farmer plants soybeans one year and corn the next without adding nitrogen fertilizer, and the corn grows well. Explain.", a: "Soybeans are legumes whose root-nodule bacteria fix N₂ into ammonia; residual fixed N enriches the soil for the corn.", how: "Link legumes → nodule bacteria → nitrogen fixation." },
  recall: ["How does nitrogen enter the living part of an ecosystem?", "In what forms can plants, animals and bacteria use nitrogen?", "What two processes move carbon between air and organisms?", "Why does phosphorus cycle slowly?", "Define sink and source.", "What level of ecology studies nutrient cycling?"],
  take: "N enters life only via bacterial fixation (N₂ → NH₃/NO₃⁻); plants use NH₄⁺/NO₃⁻, animals use protein. C cycles by photosynthesis/respiration. P has no gas phase."
},
{
  id: "eutroph", m: "m14", title: "Limiting nutrients, eutrophication & upwelling", heat: 3,
  src: "M14.1 slides 37–43; M11 slides 56–57", sg: [7, 58],
  simple: "Most lakes and coastal waters are short on nitrogen and phosphorus. When fertilizer or sewage washes in, algae explode (a bloom). When they die, bacteria decomposing them use up the oxygen, and fish suffocate: a 'dead zone'.",
  detail: `<p><b>Limiting factors for aquatic production</b>: light (photic vs aphotic; 50% absorbed by 15 m, 5–10% reaches 75 m) and nutrients. A <b>limiting nutrient</b> is the element that must be added for production to increase; most often <b>nitrogen and phosphorus</b>; <b>iron</b> limits large ocean regions.</p>
<p><b>Krill and whales</b>: krill are a foundation species eaten by whales. When whaling cut whale numbers, krill <b>declined</b> too, because whales forage at depth and defecate near the surface, fertilizing phytoplankton (the "whale pump"). Upwelling (deep, nutrient-rich water rising) increases productivity and diversity.</p>
<p><b>Eutrophication</b> (key term): primary production increases as a water body changes from nutrient-poor to nutrient-rich. Most aquatic systems are adapted to low nutrients; released from limitation they become too productive.</p>
<ol class="steps"><li>N and P from fertilizer runoff and sewage enter a lake or coast.</li>
<li>Algae and cyanobacteria grow explosively: an <b>algal bloom</b> (sudden population increase in algae/phytoplankton, Q58).</li>
<li>Blooms shade deeper plants; algae die.</li>
<li><b>Aerobic decomposers</b> (bacteria) multiply and break down the dead algae, <b>consuming dissolved O₂</b>.</li>
<li>Water becomes hypoxic: <b>dead zones</b>, <b>fish kills</b>; sometimes red tides and toxic blooms.</li></ol>
<p>Eutrophic lakes are characterized by <b>high nutrient levels</b> (Canvas Q8). Best fix near farms (M14.2 review): <b>reduce fertilizer runoff</b> (less fertilizer, buffer strips/riparian vegetation, wetlands that trap nutrients ⚑), not adding fish or chemicals to kill algae.</p>`,
  why: `<p>The oxygen loss comes from decomposition, not from the living algae: while alive they produce O₂ by day, but their huge dead biomass becomes food for aerobic bacteria, whose respiration uses O₂ faster than diffusion from the air can replace it, especially below a thermocline.</p>`,
  fig: "eutroph",
  vocab: [["Limiting nutrient", "Nutrient whose addition increases production", "N, P, Fe"], ["Eutrophication", "Nutrient enrichment → excessive production", ""], ["Algal bloom", "Rapid algae/cyanobacteria population increase", ""], ["Hypoxia / dead zone", "Very low dissolved O₂", "Gulf of Mexico dead zone ⚑"], ["Oligotrophic ⚑", "Nutrient-poor, clear, O₂-rich", ""]],
  miscon: ["Algae themselves don't 'use up' the oxygen; decomposers of dead algae do.", "Eutrophication is caused by too many nutrients, not too few.", "Eutrophication doesn't involve methane from permafrost or K-selected life histories (Kahoot distractors)."],
  exam: { q: "Predict the order of population changes after heavy fertilizer runoff into a lake: fish, algae, aerobic bacteria.", a: "Algae ↑ first; then aerobic bacteria ↑ as algae die; then fish ↓ as O₂ falls.", how: "Nutrients → producers → decomposers → oxygen → animals." },
  recall: ["What is a limiting nutrient? Name the two most common.", "List the steps from runoff to fish kill.", "Which organisms first increase in eutrophication?", "Why did krill decline after whaling?", "What is the best way to prevent eutrophication near farms?"],
  take: "Excess N/P → algal bloom → algae die → aerobic decomposers use up O₂ → dead zone and fish kill. Prevent it by cutting nutrient runoff."
},
{
  id: "biomag", m: "m14", title: "Bioaccumulation & biomagnification", heat: 3,
  src: "M14.2 slides 5–6; M14.2 review", sg: [61, 63],
  simple: "Some poisons (like DDT and mercury) don't break down and get stored in fat. Each animal stores what it eats over its life, and a predator eats many of those animals, so the poison gets more concentrated at every step up the food chain. Top predators end up with the highest doses.",
  detail: `<p><b>Bioaccumulation</b>: buildup of a persistent toxin in an organism's tissues over its lifetime, because it's absorbed faster than excreted.</p>
<p><b>Biomagnification</b>: the <b>increase in toxin concentration at each higher trophic level</b> (Q63). Primary consumers are exposed to background levels and concentrate them over time; predators are exposed to the lifetime accumulation of every prey they eat.</p>
<p>The toxins that do this are <b>persistent</b> (not broken down), <b>fat-soluble</b>, not easily excreted: DDT, PCBs, methylmercury ⚑.</p>
<p><b>Rachel Carson</b>, <i>Silent Spring</i> (1962): pictured a town contaminated by DDT; exposed insect resistance, wildlife damage and bioaccumulation. Led (posthumously) to the formation of the EPA and a partial DDT ban. Fish-eating birds (eagles, ospreys, pelicans) had extremely high DDT because they feed at a <b>high trophic level</b> (biomagnification), causing eggshell thinning ⚑.</p>
<p>The tendency of toxins to concentrate in top predators is called <b>biological magnification</b>.</p>`,
  why: `<p>Biomass shrinks ~10× per level (only ~10% of energy passes up), but a persistent toxin isn't burned off with the energy; it stays in the tissue. So the same toxin gets packed into ~1/10 the biomass at each step: concentration rises roughly 10× per level. In the arctic chain the polar bear has the highest concentration.</p>`,
  fig: "biomag",
  vocab: [["Bioaccumulation", "Toxin builds up within one organism over time", ""], ["Biomagnification", "Toxin concentration increases up trophic levels", "DDT in ospreys"], ["Persistent pollutant", "Not broken down by organisms or environment", "DDT, PCBs, mercury"], ["Silent Spring", "Rachel Carson, 1962", "Led to EPA, DDT ban"]],
  compare: { head: ["", "Bioaccumulation", "Biomagnification"], rows: [["Scale", "One organism over its life", "Across trophic levels"], ["Question asked", "Why does an old fish have more mercury than a young one?", "Why does a tuna have more mercury than a sardine?"]] },
  miscon: ["Biomagnification and bioaccumulation aren't identical; magnification is the trophic-level increase.", "Water-soluble, quickly excreted chemicals don't biomagnify.", "Ocean acidification does not cause biomagnification of heavy metals (Woolink distractor)."],
  exam: { q: "DDT in lake water is 0.00005 ppm. Which has the highest DDT concentration: zooplankton, small fish, large fish or fish-eating birds? Why?", a: "Fish-eating birds: they're at the highest trophic level, and DDT is persistent and fat-soluble, so it magnifies at each step.", how: "Top of chain + persistent toxin = highest concentration." },
  recall: ["Define biomagnification.", "What properties make a toxin biomagnify?", "Why did fish-eating birds have such high DDT?", "What did Silent Spring lead to?", "In the arctic chain, which organism has the highest toxin concentration?"],
  take: "Persistent, fat-soluble toxins concentrate at each trophic level (biomagnification), so top predators carry the highest loads."
},
{
  id: "acid", m: "m14", title: "Ocean acidification & marine calcifiers", heat: 2,
  src: "M14.1 slide 35; M14 objectives (TSE); Woolink", sg: [38, 40],
  simple: "The ocean absorbs a lot of the CO₂ we emit. In seawater, CO₂ forms carbonic acid, lowering pH and using up carbonate, the building block that corals, clams, snails and some plankton use to make their shells and skeletons.",
  detail: `<p><b>Chemistry</b> (slide 35): CO₂ dissolves → <b>carbonic acid</b> (H₂CO₃) → releases H⁺, <b>lowering pH</b>. The extra H⁺ converts <b>carbonate</b> (CO₃²⁻) into <b>bicarbonate</b> (HCO₃⁻), reducing the carbonate available to <b>marine calcifiers</b>.</p>
<p><b>Calcifiers</b>: organisms that build shells or skeletons from calcium carbonate: corals, mollusks (clams, oysters, pteropods), sea urchins, coccolithophores, foraminifera ⚑. They come from many branches of the tree of life, but all are highly susceptible to <b>ocean acidification</b> (Q40).</p>
<p><b>Cause</b> (Woolink): the flux of <b>atmospheric carbon dissolving into the ocean</b>; the ocean acts as a carbon sink. Effects include harm to coral reefs (acidification and warming both stress corals; <b>coral bleaching</b> = corals expelling their symbiotic algae under stress ⚑). M14 objectives list coral bleaching as a result of acidification.</p>
<p>The ocean as a carbon sink slows atmospheric warming but at the cost of acidification (Q38's best answer). Recall the feedback: warmer water dissolves <b>less</b> CO₂ (M11 slide 65), so the sink weakens as the ocean warms.</p>`,
  why: `<p>Carbonate is like the bricks for a shell. Acid "steals" bricks by turning carbonate into bicarbonate, which calcifiers can't use as easily. Lower carbonate means building costs more energy, shells grow thinner, and in very acidic water existing shells can dissolve ⚑.</p>`,
  fig: "acid",
  vocab: [["Ocean acidification", "Falling ocean pH from absorbed CO₂", ""], ["Carbonic acid", "H₂CO₃, formed from CO₂ + water", ""], ["Calcifier", "Builds CaCO₃ shells/skeletons", "Coral, clams, pteropods"], ["Coral bleaching", "Coral expels symbiotic algae under stress ⚑", "Linked to warming and acidification"], ["Carbon sink", "Stores more carbon than it releases", "Ocean"]],
  miscon: ["Acidification doesn't make seawater acidic (pH < 7); it makes it less basic (≈8.2 → 8.1) ⚑.", "It's caused by CO₂ dissolving, not by acid rain or nutrient runoff.", "It doesn't increase toxic algal blooms or biomagnification (Woolink distractors)."],
  exam: { q: "Why would rising atmospheric CO₂ threaten oyster farms even if the water temperature stayed the same?", a: "CO₂ dissolves to form carbonic acid; H⁺ converts carbonate to bicarbonate, so oysters have less carbonate to build shells.", how: "CO₂ → carbonic acid → less carbonate → calcifiers suffer." },
  recall: ["Write the chain from atmospheric CO₂ to weaker shells.", "Name three types of calcifiers.", "What ecosystem process causes ocean acidification?", "Why does a warming ocean absorb less CO₂?"],
  take: "CO₂ + water → carbonic acid → lower pH and less carbonate → calcifiers (corals, mollusks) struggle to build shells."
},
{
  id: "threats", m: "m14", title: "Biodiversity loss: HIPPO, extinction rates & levels", heat: 3,
  src: "M14.2 slides 1–3, 7–10; M14.1 objectives", sg: [3, 5, 18],
  simple: "E. O. Wilson summed up why species are disappearing with HIPPO: Habitat destruction, Invasive species, Pollution, Population growth (human), Overharvesting. Today species are going extinct much faster than the normal background rate.",
  detail: `<p><b>HIPPO</b> (E. O. Wilson): <b>H</b>abitat destruction, <b>I</b>nvasive species, <b>P</b>ollution, <b>P</b>opulation growth (human), <b>O</b>verharvesting. Plus global warming/climate change.</p>
<p><b>E/MSY</b> = extinctions per million species-years. ~1 E/MSY is the <b>background extinction rate</b>: the normal rate between mass extinctions (Q18). (The slide wording "1 million species per year" is a slip; it's one extinction per million species per year.) Current rates are estimated far above background ⚑.</p>
<p><b>Threats mapped to ecological levels</b> (slide 3): <b>Habitat destruction → ecosystem level</b> (Q5); invasive species → community level; overharvesting/population growth → population level; climate change → biosphere level.</p>
<p><b>Endangered</b>: in danger of extinction throughout all or most of its range. <b>Threatened</b>: likely to become endangered in the near future.</p>
<p><b>Overharvesting</b>: harvesting a renewable resource faster than it can be replenished. <b>Tragedy of the commons</b>: groups competing for a shared resource (fish) act in self-interest → overexploitation. Solutions: catch limits, seasonal restrictions, banning certain methods, protected areas.</p>
<p><b>Shifting baseline</b> (Daniel Pauly): each generation accepts a more degraded state as "normal": "generational amnesia".</p>
<p><b>Invasive species</b>: harm natives through community-level interactions: competition, predation, disease (little brown bats and white-nose fungus, TSE ch 10 ⚑), hybridization. Low-diversity communities are easier to invade.</p>
<p><b>Habitat fragmentation</b>: breaks habitat into small isolated "islands" → island-biogeography losses (small size → more extinction, isolation → less immigration), edge effects ⚑.</p>
<p><b>Genetic diversity</b> between populations gives species the variation to adapt to change, disease and new conditions; losing populations erodes it and raises extinction risk (Q3).</p>
<p>⚑ The "Anthropocene" (M14 objective, TSE): a proposed epoch defined by human impact on geology and biology.</p>`,
  why: `<p>Habitat destruction acts on whole ecosystems because removing a forest or wetland removes every species and the abiotic structure at once. Overharvesting targets particular populations. Invasives disrupt interactions within communities. Climate change acts on the whole biosphere.</p>`,
  vocab: [["HIPPO", "Habitat destruction, Invasives, Pollution, Population growth, Overharvesting", ""], ["E/MSY", "Extinctions per million species-years", "~1 = background rate"], ["Background extinction", "Normal extinction rate outside mass extinctions", ""], ["Endangered / threatened", "At risk now / likely to become endangered", ""], ["Tragedy of the commons", "Shared resource overused by self-interest", "Open-ocean fisheries"], ["Shifting baseline", "Each generation redefines 'normal'", ""], ["Invasive species", "Introduced species that spreads and harms natives", "Brown tree snake ⚑"]],
  compare: { head: ["Threat", "Main level (slide 3)"], rows: [["Habitat destruction", "Ecosystem"], ["Invasive species", "Community"], ["Overharvesting / human population growth", "Population"], ["Climate change", "Biosphere"]] },
  miscon: ["E/MSY = 1 is the normal background rate, not a crisis rate.", "Threatened is less severe than endangered.", "Habitat destruction acts at the ecosystem level, not just on single populations."],
  exam: { q: "Each generation of fishers remembers smaller catches as normal and sets lower restoration goals. What concept is this, and why does it matter?", a: "Shifting baseline: degraded conditions become the reference point, so true losses are underestimated.", how: "'Generational amnesia' = shifting baseline." },
  recall: ["Expand HIPPO.", "What does 1 E/MSY describe?", "Which threat operates primarily at the ecosystem level?", "Distinguish endangered and threatened.", "Explain the tragedy of the commons and two solutions.", "Why is genetic diversity between populations significant?"],
  take: "HIPPO + climate. Habitat destruction = ecosystem level. 1 E/MSY = background extinction. Overharvesting comes from the tragedy of the commons."
},
{
  id: "conserve", m: "m14", title: "Conservation tools & history", heat: 3,
  src: "M14.2 slides 4–5, 7, 12–22", sg: [19],
  simple: "Conservation biology uses ecology to save species and habitats. Tools include linking habitat patches with corridors, restoring damaged habitat, using microbes or plants to clean pollution, protecting hotspots with many unique species, and watching sensitive 'indicator' species for early warnings.",
  detail: `<p><b>Conservation biology</b>: applies ecology, behavior, physiology, molecular biology, genetics and evolution to conserve biodiversity; prioritizes areas of greatest concern. Approaches: resource management (fisheries), movement corridors, habitat restoration, identifying primary habitat and reducing impact.</p>
<p><b>History</b>:</p>
<ul><li><b>John Muir</b>: his writing helped motivate Yosemite (1890); founded the Sierra Club; favored <b>preservation</b> (leave areas wild) vs <b>conservation</b> (sustainable use of resources).</li>
<li><b>Rachel Carson</b>: <i>Silent Spring</i> (1962) → EPA and partial DDT ban.</li></ul>
<p><b>Movement (wildlife) corridors</b>: strips of habitat connecting habitat islands, allowing <b>dispersal and migration</b>, access to breeding habitat, connecting otherwise isolated populations, lessening fragmentation, increasing migration and repopulation (Banff overpasses) (Q19). In island-biogeography terms, they raise immigration and gene flow between fragments.</p>
<p><b>Restoration ecology</b>: returns degraded ecosystems to a more natural state; many recover on their own with time, and restoration starts or speeds the process; physical structure is often restored before biological. Examples: dam and canal removal, coastal rehabilitation, reforestation.</p>
<p><b>Bioremediation</b>: organisms (mostly prokaryotes, fungi, plants) <b>detoxify</b> polluted ecosystems. <i>Shewanella oneidensis</i> converts uranium to an insoluble form less likely to leach.</p>
<p><b>Biological augmentation</b>: organisms <b>add</b> essential materials: nitrogen-fixing plants raise soil N; mycorrhizal fungi help plants access nutrients.</p>
<p><b>Indicator species</b>: sensitive to environmental change, so their decline signals a threatened ecosystem (amphibians, lichens ⚑).</p>
<p><b>Biodiversity hotspots</b>: relatively small areas with exceptional numbers of endemic, endangered and threatened species. Criteria: ≥1,500 endemic vascular plant species and ≥70% of original habitat lost (the slide's wording says "have at least 70% of original habitat extent"; the standard Conservation International definition is having <b>lost</b> ≥70% ⚑).</p>
<p><b>Conflicts</b>: removing invasives, charismatic megafauna (sea lions eating salmon), misunderstood management, NIMBY, human–wildlife conflict. Salmon decline involves dams, pollution, nest-habitat loss, and competition with sea lions and humans.</p>
<p><b>Zoos</b> (TSE ch 11, 13): captive breeding of critically endangered species (Suci the Sumatran rhino at Cincinnati; Kinohi the Hawaiian crow at San Diego). See the Sixth Extinction section.</p>`,
  why: `<p>Fragmentation turns habitat into islands that lose species; corridors attack the cause by reconnecting the islands so individuals can move, recolonize, find mates and exchange genes. Restoration, bioremediation and augmentation fix the habitat itself; hotspots and indicators tell us where to act first.</p>`,
  vocab: [["Movement corridor", "Habitat strip linking patches", "Banff wildlife overpasses"], ["Restoration ecology", "Returning degraded systems to natural state", "Dam removal"], ["Bioremediation", "Organisms detoxify pollution", "Shewanella and uranium"], ["Biological augmentation", "Organisms add missing materials", "N-fixing plants, mycorrhizae"], ["Indicator species", "Sensitive species signaling ecosystem health", "Amphibians ⚑"], ["Biodiversity hotspot", "Small area with many endemic, threatened species", "≥1,500 endemic plants"], ["Endemic", "Found nowhere else", ""], ["Preservation vs conservation", "Leave wild vs sustainable use", "Muir vs resource managers"]],
  compare: { head: ["", "Bioremediation", "Biological augmentation"], rows: [["Does", "Removes/detoxifies a harmful substance", "Adds a missing essential substance"], ["Example", "Bacteria immobilize uranium", "Legumes add nitrogen; mycorrhizae"]] },
  miscon: ["Corridors aren't mainly for tourists or roads; they're for animal movement and gene flow.", "Bioremediation removes; augmentation adds.", "Muir favored preservation, not utilitarian conservation."],
  exam: { q: "A highway splits a cougar population into two small groups that now show inbreeding. Which conservation tool best addresses the cause, and why?", a: "A wildlife corridor/overpass: reconnects the fragments so individuals can move and interbreed, restoring gene flow and reducing local extinction risk.", how: "Problem = fragmentation/isolation → solution = connectivity." },
  recall: ["What is the main purpose of a wildlife corridor?", "Distinguish bioremediation and biological augmentation.", "What makes a biodiversity hotspot?", "What is an indicator species?", "Contrast Muir's preservation with conservation.", "What did Rachel Carson's book lead to?"],
  take: "Corridors reconnect fragments (movement, gene flow). Restoration fixes habitat. Bioremediation removes toxins; augmentation adds nutrients. Hotspots and indicators set priorities."
}
);
