// Original practice bank, part A (Modules 11–12). Set "P".
// Q(id, set, module, topic, level, stem, options, answerIndex(es), whyCorrect, whyWrong[], concept, trap, fig?)
// whyWrong is aligned with options; the entry for a correct option is "".
window.SG = window.SG || {};
SG.questions = SG.questions || [];
SG.Q = function (id, set, m, t, lvl, q, o, a, why, w, c, trap, fig) {
  SG.questions.push({ id: id, set: set, m: m, t: t, lvl: lvl, q: q, o: o, a: Array.isArray(a) ? a : [a], why: why, w: w, c: c, trap: trap || "", fig: fig || "" });
};

(function (Q) {
// ---------------- M11 levels
Q("a1","P","m11","levels",1,"Which list is in order from the narrowest to the broadest level of ecological organization?",
 ["Population, organism, community, ecosystem","Organism, population, community, ecosystem","Organism, community, population, ecosystem","Community, population, ecosystem, biosphere"],1,
 "Each level nests inside the next: individuals form populations (one species), populations form communities (many species), communities plus the abiotic environment form ecosystems.",
 ["Organism must come before population; a population is made of organisms.","","Community (many species) is broader than population (one species).","Population is narrower than community, so it can't come after it."],
 "Levels of organization","Swapping population and community.");
Q("a2","P","m11","levels",2,"A researcher asks: 'Do wolves change where elk feed, and does that change which plant species grow along streams?' This question is primarily at the level of",
 ["organism","population","community","biosphere"],2,
 "The question is about interactions among several species (wolves, elk, plants) and how those shape species composition: community ecology.",
 ["It isn't about one individual's physiology or behavior alone.","It involves several species, not one.","","The biosphere is the whole Earth system (global CO₂, climate)."],
 "Matching questions to levels","Picking population because elk numbers might change.");
Q("a3","P","m11","levels",3,"Which study would require an ECOSYSTEM ecologist rather than a community ecologist?",
 ["Whether two warbler species partition feeding heights","How much phosphorus washes from a watershed into a lake each year","Whether a parasite reduces a host's offspring number","How many beetle species live on each tree species"],1,
 "Phosphorus flux involves abiotic pools (soil, water) and nutrient cycling, which only the ecosystem level includes.",
 ["Resource partitioning between species is community ecology.","","A parasite–host interaction is a community (or population) question.","Counting species richness is a community question."],
 "Ecosystem vs community","Thinking any 'big' question is ecosystem-level.");
Q("a4","P","m11","levels",2,"A lizard basks longer on cold mornings and seeks shade at noon. This response is best described as",
 ["evolutionary adaptation within the lizard's lifetime","phenotypic plasticity (behavioral acclimation)","a population-level process","natural selection acting on the individual"],1,
 "An individual changing its behavior in response to conditions is plasticity/acclimation. Adaptation requires heritable change across generations.",
 ["Evolution happens to populations across generations, not within one lifetime.","","It's one individual's behavior.","Selection acts across generations; the lizard's choice isn't selection."],
 "Plasticity vs adaptation","Calling any useful response an 'adaptation'.");
// abiotic
Q("a5","P","m11","abiotic",1,"Which is a biotic factor that could limit the distribution of a freshwater mussel?",
 ["Water temperature","Calcium concentration","A fish species its larvae must attach to","Current speed"],2,
 "The host fish is a living organism, so it's biotic. The rest are physical/chemical (abiotic).",
 ["Temperature is physical.","Calcium is a chemical.","","Current is physical."],
 "Biotic vs abiotic","Thinking chemicals used by organisms are biotic.");
Q("a6","P","m11","abiotic",2,"A plant species grows only on north-facing slopes in a dry region. The best first hypothesis is that its distribution is limited by",
 ["a biotic factor, because slopes contain different herbivores","an abiotic factor such as moisture or temperature, because north slopes get less direct sun","longitude","its dispersion pattern"],1,
 "In the northern hemisphere, north-facing slopes get less direct sunlight, staying cooler and moister: an abiotic limit is the simplest explanation.",
 ["Possible, but nothing points to herbivores; the slope aspect points to sunlight.","","Longitude doesn't change between slopes.","Dispersion describes spacing, not why a species is limited to a habitat."],
 "Abiotic limits on distribution","Ignoring the sun-angle clue.");
Q("a7","P","m11","abiotic",1,"Biogeography is the study of",
 ["how organisms acquire energy","the geographic distribution of organisms and the factors that affect it","the chemistry of soils","the evolution of geographic features"],1,
 "Definition from M11 slide 9: distribution of living things and the abiotic factors that affect it, in space and time.",
 ["That's bioenergetics/ecosystem ecology.","","Soil chemistry is part of it but not the definition.","That's geology."],
 "Biogeography","");
// climate
Q("a8","P","m11","climate",2,"Why is the equator warmer than the poles?",
 ["The equator is closer to the sun","Sunlight strikes the equator more directly, so the same energy falls on a smaller area","The poles have more ozone","Ocean currents carry all heat to the equator"],1,
 "Angle of incidence: direct rays concentrate energy; slanted rays at high latitude spread it out.",
 ["The distance difference is too small to matter (M11 slide 13 'FALSE').","","Ozone absorbs UV but doesn't explain the gradient.","Currents actually carry heat away from the equator toward the poles."],
 "Sun angle","The distance myth.");
Q("a9","P","m11","climate",2,"Moist air rises at the equator and descends at about 30° N and S. The most direct consequence is that",
 ["rainforests occur at 30°","many of the world's deserts occur near 30°","tundra occurs at the equator","the westerlies stop at 30°"],1,
 "Rising air cools and drops rain at the equator; the now-dry air descends near 30°, warming and absorbing moisture → deserts.",
 ["Rainforests are where air rises (0°).","","Tundra is at high latitude/altitude.","Westerlies blow between ~30° and 60°."],
 "Air circulation cells","");
Q("a10","P","m11","climate",3,"A city on a large lake has cooler summer days and warmer winter nights than a city 200 km inland at the same latitude. The best explanation is",
 ["the lake reflects more sunlight","water's high specific heat absorbs and releases heat slowly, moderating nearby air","the lake city has a different longitude","the inland city has more vegetation"],1,
 "Water warms and cools slowly, buffering local temperature swings (M11 slide 24).",
 ["Reflection doesn't explain warmer winters.","","Longitude doesn't affect temperature this way.","Vegetation actually tends to cool via transpiration; it doesn't explain the pattern."],
 "Water moderates climate","");
Q("a11","P","m11","climate",3,"After a large tropical forest is cleared for pasture, local climate is predicted to become",
 ["cooler and wetter because pasture is lighter in color","hotter and drier because transpiration and its cooling and rain are reduced","unchanged because climate depends only on latitude","cooler because more CO₂ is released"],1,
 "Trees transpire, cooling the air and recycling moisture as rain; removing them makes the area hotter and drier (M11 slides 25–26).",
 ["The albedo change is small compared with losing transpiration cooling.","","Vegetation feeds back on local climate.","Released CO₂ warms, not cools."],
 "Deforestation & climate","Over-weighting albedo.");
Q("a12","P","m11","climate",1,"Which factor is the PRIMARY cause of global wind patterns, ocean currents and precipitation bands?",
 ["Ocean currents","Variation in the heating of Earth's surface","Global wind patterns","Precipitation differences between tropics and poles"],1,
 "Uneven solar heating creates pressure differences → winds → currents and precipitation bands.",
 ["Currents are driven by winds (a result).","","Winds result from uneven heating.","Precipitation bands result from rising/sinking air."],
 "Climate drivers","Choosing an effect instead of the root cause.");
// biomes
Q("a13","P","m11","biomes",1,"The two abiotic factors that best predict which terrestrial biome occurs in a region are",
 ["soil type and altitude","temperature and precipitation","latitude and longitude","sunlight and wind"],1,
 "M11 slide 28: temperature and precipitation.",
 ["They matter locally but aren't the two main predictors.","","Longitude doesn't predict biomes.","Not the two main predictors."],
 "Biome predictors","");
Q("a14","P","m11","biomes",2,"Which pair of biomes both depend on periodic fire and/or drought to persist?",
 ["Tundra and boreal forest","Temperate grassland and savanna","Tropical forest and tundra","Deciduous forest and tropical forest"],1,
 "Fire and drought kill tree seedlings, keeping these biomes grass-dominated.",
 ["Both are cold-limited, not fire-maintained.","","Neither is fire-maintained.","Forests would be destroyed, not maintained, by frequent fire."],
 "Fire-maintained biomes","");
Q("a15","P","m11","biomes",2,"A climograph shows mean monthly temperature between −30 °C and 10 °C and annual precipitation of 30 cm. The vegetation is mosses, lichens and dwarf shrubs. This biome is",
 ["boreal forest","tundra","desert","temperate grassland"],1,
 "Very cold, low precipitation, no trees, low herbaceous vegetation = arctic tundra (20–60 cm).",
 ["Boreal forest has conifers and wetter summers.","","Hot/cold deserts lack the moss/lichen tundra flora and permafrost.","Grasslands are warmer and grass-dominated."],
 "Biome identification","Calling any low-precipitation biome a desert.");
Q("a16","P","m11","biomes",3,"Fire is suppressed in a North American tallgrass prairie for 40 years while rainfall stays normal. The most likely outcome is",
 ["the prairie becomes more diverse in grasses","woody plants invade and the area shifts toward woodland","the prairie becomes a desert","nothing changes because grasses are immune to competition"],1,
 "Fire kills young trees while grasses regrow from roots. Without fire, trees survive, shade grasses and the community shifts (succession).",
 ["Removing the disturbance favors trees, not grasses.","","Rainfall is normal; desertification needs drought.","Grasses are not immune to shading by trees."],
 "Fire-maintained biomes","");
Q("a17","P","m11","biomes",2,"Why do tropical rainforests have nutrient-poor soils despite enormous productivity?",
 ["Nutrients are locked in permafrost","Nutrients cycle rapidly and are held mostly in living biomass","Fires remove all nutrients every year","Low rainfall prevents weathering"],1,
 "Warm, wet conditions speed decomposition and uptake; nutrients move quickly into plants and are leached from soil by heavy rain.",
 ["No permafrost in the tropics.","","Rainforests rarely burn naturally.","Rainfall is very high (200–400 cm/yr)."],
 "Tropical forest","");
Q("a18","P","m11","biomes",2,"Which biome has long cold winters, wet summers, acidic nutrient-poor soils, and forests of conifers with few tree species?",
 ["Temperate deciduous forest","Boreal forest (taiga)","Chaparral","Tropical seasonal forest"],1,
 "Matches M11 slide 44 on northern coniferous forest.",
 ["Broadleaf deciduous trees, richer soils.","","Shrubland with hot dry summers.","Warm, not long cold winters."],
 "Biome identification","");
Q("a19","P","m11","biomes",3,"On a temperature × precipitation climograph, a site at 25 °C mean temperature receives 350 cm/yr. A second site at the same temperature receives 40 cm/yr. The two sites most likely support",
 ["tropical forest and savanna/desert respectively","tundra and boreal forest","temperate forest and chaparral","the same biome, because temperature is equal"],0,
 "At tropical temperatures, precipitation decides between rainforest (very wet) and savanna or desert (dry).",
 ["","Both are cold biomes.","Those require cooler temperatures.","Precipitation is the other half of the climograph."],
 "Reading climographs","Ignoring precipitation.","whittaker");
// aquatic
Q("a20","P","m11","aquatic",1,"Phytoplankton in a lake are most abundant in the",
 ["aphotic zone","benthic zone","photic zone","abyssal zone"],2,
 "Phytoplankton photosynthesize and need light.",
 ["No light there.","The bottom is usually dark except in shallow water.","","Abyssal is a deep-ocean term with no light."],
 "Aquatic zones","");
Q("a21","P","m11","aquatic",2,"Why is the open-ocean surface usually low in productivity per square meter?",
 ["There is too little light","Nutrients sink below the photic zone, leaving surface water nutrient-poor","The water is too cold","Zooplankton eat all producers"],1,
 "Light is plentiful at the surface, but nutrients sink to the benthos; production is nutrient-limited.",
 ["Surface water is sunlit.","","Temperature isn't the main limit.","Grazing doesn't explain the low production itself."],
 "Light vs nutrients","");
Q("a22","P","m11","aquatic",2,"A reef-building coral is found at 10 m depth on a tropical continental shelf. This location is in the",
 ["abyssal zone","neritic zone","aphotic pelagic zone","intertidal zone"],1,
 "Shallow water over the continental shelf, sunlit to the bottom, = neritic zone.",
 ["Abyssal is >4000 m with no light.","","10 m is well within the photic zone.","Intertidal is between tide lines, exposed at low tide."],
 "Ocean zones","");
Q("a23","P","m11","aquatic",3,"If the sun stopped shining, which community would likely persist longest?",
 ["Tropical forest","Pelagic ocean surface","Deep-sea vent communities in the benthic zone","Tundra"],2,
 "Vent communities are powered by chemosynthesis, not sunlight.",
 ["Depends on photosynthesis.","Depends on phytoplankton photosynthesis.","","Depends on photosynthesis."],
 "Chemosynthesis","");
Q("a24","P","m11","aquatic",2,"Organisms of the rocky intertidal zone are most strongly selected to tolerate",
 ["constant darkness and high pressure","drying, temperature swings and wave pounding","low salinity only","permanent freezing"],1,
 "Intertidal habitat alternates between submerged and exposed, with extreme variation in moisture, salinity and surf (M11 slide 50).",
 ["That describes the abyssal zone.","","Salinity varies, but drying and waves are the defining stresses.","Not characteristic."],
 "Intertidal zone","");
Q("a25","P","m11","aquatic",1,"Aquatic primary productivity is most limited by",
 ["predation","temperature","nutrient availability and sunlight","pressure"],2,
 "Light and nutrients are the key limiting factors for aquatic production (M11 slide 47; Canvas Q7).",
 ["Predation doesn't limit production directly.","Secondary factor.","","Pressure affects deep organisms but not production."],
 "Aquatic limits","");
// strat
Q("a26","P","m11","strat",1,"A thermocline is",
 ["a zone of rapid temperature change with depth that limits mixing","the shallow near-shore zone of a lake","the layer of ice on a lake in winter","an area of ocean upwelling"],0,
 "Definition (key term).",
 ["","That's the littoral zone.","Ice isn't a thermocline.","Upwelling breaks stratification."],
 "Thermocline","");
Q("a27","P","m11","strat",2,"In late summer, the bottom water of a stratified temperate lake is typically",
 ["warm and oxygen-rich","cold, nutrient-rich and low in oxygen","the same temperature as the surface","free of decomposers"],1,
 "The thermocline traps nutrients below and blocks O₂ from the surface while decomposers use oxygen.",
 ["Surface water is warm and O₂-rich.","","Stratification means different temperatures.","Decomposers are active there and use the O₂."],
 "Stratification","");
Q("a28","P","m11","strat",3,"A diagram of a temperate lake shows 4 °C at the bottom, 7–10 °C up the sides, with surface water sinking at the edges and bottom water rising in the center. This depicts",
 ["biomagnification","ocean upwelling","seasonal turnover in a lake","bioaccumulation"],2,
 "Surface water cooling toward 4 °C sinks and displaces bottom water upward: fall (or spring) turnover. This is the Canvas Q15 figure.",
 ["Biomagnification is about toxins in food chains.","Upwelling is a coastal ocean process driven by wind.","","Bioaccumulation is toxin build-up in organisms."],
 "Lake turnover","Choosing upwelling because water moves upward.","turnover");
Q("a29","P","m11","strat",2,"What do lake turnover and coastal upwelling have in common?",
 ["Both are caused by surface heating","Both move nutrient-rich deep water to the sunlit surface","Both increase the strength of the thermocline","Both decrease productivity"],1,
 "Both break stratification and return nutrients to the photic zone, increasing productivity.",
 ["Turnover follows cooling; upwelling is wind-driven.","","They disrupt it.","They increase productivity."],
 "Turnover & upwelling","");
Q("a30","P","m11","strat",3,"Why do tropical lakes generally lack seasonal turnover?",
 ["They are too shallow to stratify","Their surface stays warm year-round, so the thermocline persists","Tropical water is denser","Tropical lakes have no nutrients"],1,
 "Without a cold season, surface water never cools to bottom temperature, so the density difference and thermocline remain (M11 slide 52).",
 ["Many are deep and stratified.","","Warm water is less dense.","Nutrients are present, just trapped below."],
 "Thermocline","");
// climate change
Q("a31","P","m11","climchange",1,"Which is NOT a greenhouse gas?",
 ["Carbon dioxide","Methane","Water vapor","Molecular nitrogen (N₂)"],3,
 "N₂ doesn't absorb infrared. CO₂, CH₄, H₂O and N₂O do.",
 ["GHG.","GHG.","GHG.",""],
 "Greenhouse gases","Thinking the most abundant gas must trap heat.");
Q("a32","P","m11","climchange",2,"Greenhouse gases raise Earth's surface temperature mainly because they",
 ["let in more ultraviolet light","absorb infrared radiation emitted by Earth and re-emit part of it downward","reflect visible light back to space","destroy the ozone layer"],1,
 "Definition of the greenhouse effect (M11 slide 63).",
 ["They don't increase UV input.","","Reflecting sunlight would cool Earth.","Ozone depletion is a different issue."],
 "Greenhouse effect","");
Q("a33","P","m11","climchange",3,"Which change would act as a NEGATIVE feedback, slowing warming?",
 ["Melting sea ice","Thawing permafrost","Increased growth of forests that absorb more CO₂","Warmer oceans absorbing less CO₂"],2,
 "More photosynthesis removes CO₂, counteracting warming. The others amplify warming (positive feedbacks).",
 ["Lowers albedo: positive.","Releases methane: positive.","","Leaves more CO₂ in the air: positive."],
 "Feedback loops","");
Q("a34","P","m11","climchange",3,"Snow-covered boreal forest and Arctic sea ice are lost as the climate warms. Which explanation best predicts the effect on global temperature?",
 ["Temperature falls because melting absorbs heat","Temperature rises because darker surfaces replace reflective ice and absorb more solar energy","No effect because albedo only matters locally","Temperature falls because more water vapor forms clouds"],1,
 "Lower albedo → more absorption → more warming: positive feedback (study guide Q12).",
 ["Melting absorbs heat locally, but loss of reflection dominates.","","Absorbed energy warms the global system.","Clouds have mixed effects; the stem points to albedo."],
 "Albedo feedback","");
Q("a35","P","m11","climchange",2,"The Industrial Revolution increased atmospheric CO₂ mainly by",
 ["increasing volcanic activity","burning fossil fuels that had sequestered ancient carbon","increasing ocean photosynthesis","reducing methane emissions"],1,
 "Coal and petroleum are fossilized plants/cyanobacteria (carbon sinks); burning them turns sinks into sources (M11 slide 61).",
 ["Volcanoes weren't the driver.","","Photosynthesis removes CO₂.","Methane is a separate GHG and also increased."],
 "Carbon cycle imbalance","");
Q("a36","P","m11","climchange",2,"Ozone in the upper atmosphere is important to life because it",
 ["creates carbon dioxide","emits UV radiation","reflects visible radiation","absorbs UV radiation"],3,
 "Stratospheric ozone absorbs harmful ultraviolet light (Canvas Q16).",
 ["It doesn't make CO₂.","It absorbs, not emits.","Visible light passes through.",""],
 "Ozone","Confusing ozone with greenhouse gases.");
Q("a37","P","m11","climchange",3,"As climate warms, a mountain wildflower's range shifts. The most likely change is",
 ["downslope and toward the equator","upslope and toward the poles","no change because plants can't move","downslope only"],1,
 "Species track cooler conditions: higher elevation and higher latitude (Woolink).",
 ["That's toward warmer conditions.","","Populations shift via dispersal and local extinction.","Downslope is warmer."],
 "Range shifts","");

// ---------------- M12 measure
Q("a38","P","m12","measure",1,"In mark–recapture, N = (M × n)/r. What does r stand for?",
 ["Rate of population growth","Number of marked individuals recaptured in the second sample","Total caught in the second sample","Number marked in the first sample"],1,
 "M = marked first, n = total caught second, r = marked among the second catch.",
 ["Same letter, different meaning in growth equations.","","That's n.","That's M."],
 "Mark–recapture","");
Q("a39","P","m12","measure",2,"Researchers mark 40 crabs. A week later they capture 50 crabs, 10 of them marked. Estimated population?",
 ["90","125","200","2,000"],2,
 "N = (40 × 50)/10 = 200.",
 ["That just adds samples.","Wrong arithmetic (50 × 25/10).","","That's M × n without dividing by r."],
 "Mark–recapture","");
Q("a40","P","m12","measure",3,"In a mark–recapture study, many marked animals lose their tags before the second sample. The population estimate will be",
 ["too low","too high","accurate","impossible to calculate"],1,
 "Fewer tags seen → r is too small → N = Mn/r becomes too large.",
 ["The opposite effect.","","Losing tags violates an assumption.","It's calculable, just biased."],
 "Mark–recapture assumptions","");
Q("a41","P","m12","measure",2,"Ten 1-m² quadrats placed randomly in a 500-m² meadow contain on average 6 milkweed plants. Estimated total?",
 ["60","500","3,000","5,000"],2,
 "Density 6/m² × 500 m² = 3,000.",
 ["That's only the 10 quadrats.","That's the area.","","Arithmetic error."],
 "Subsampling","");
Q("a42","P","m12","measure",1,"Which measurement is a population density?",
 ["312 deer in the county","Deer spaced evenly across the forest","4 deer per square kilometer","Deer increasing 3% per year"],2,
 "Density = individuals per area.",
 ["Population size.","Dispersion.","","Growth rate."],
 "Density","");
// dispersion
Q("a43","P","m12","dispersion",1,"Which pattern of dispersion is most common in nature?",
 ["Uniform","Random","Clumped","Linear"],2,
 "Resources are patchy and many animals group, so clumped is most common (M12 slide 19).",
 ["Requires strong repulsion.","Requires absence of interactions and even resources.","","Not a category."],
 "Dispersion","");
Q("a44","P","m12","dispersion",2,"Which group would most likely show uniform dispersion?",
 ["A school of herring","Wildflowers whose wind-blown seeds land by chance","Nesting penguins that peck neighbors","Fungi growing on scattered fallen logs"],2,
 "Territorial repulsion spaces individuals evenly.",
 ["Schools are clumped.","Chance placement → random.","","Patchy resources → clumped."],
 "Uniform dispersion","");
Q("a45","P","m12","dispersion",3,"Desert shrubs are found evenly spaced. Removing every other shrub causes the remaining shrubs to grow larger roots. What does this suggest about the cause of the pattern?",
 ["Mutualism among shrubs","Competition for water among shrubs","Random seed dispersal","Clumped resources"],1,
 "Neighbors' removal releasing growth shows they were competing; competition produces uniform spacing.",
 ["Mutualists would suffer when neighbors are removed.","","Random dispersal wouldn't produce a growth response.","Clumped resources produce clumping."],
 "Causes of dispersion","");
// survivorship
Q("a46","P","m12","survivorship",1,"Elephants, great apes and whales show which survivorship curve?",
 ["Type I","Type II","Type III","Logistic"],0,
 "Low mortality until old age, high parental care.",
 ["","Constant mortality (rodents, birds).","High early mortality (fish).","Not a survivorship curve."],
 "Survivorship","");
Q("a47","P","m12","survivorship",2,"A plot shows log(survivors) dropping as a straight diagonal line from birth to maximum age. This means",
 ["most die young","death rate is constant across ages","most die old","the population is growing"],1,
 "A straight line on a log scale = constant proportional death rate (Type II).",
 ["That would be a steep early drop (Type III).","","That would be a late drop (Type I).","Survivorship doesn't show growth."],
 "Reading survivorship graphs","","survivorship");
Q("a48","P","m12","survivorship",3,"An oak produces thousands of acorns a year; most are eaten or fail to germinate, but trees that reach 10 years old often live 200 years. Which organism has the highest probability of surviving the next year?",
 ["A ripe acorn","A one-month-old seedling","A mature oak tree","All equal"],2,
 "On a Type III curve, mortality is highest early; individuals past that stage have high survival.",
 ["Acorns are at the steepest part of the curve.","Seedlings are still in the high-mortality phase.","","Type III mortality is age-dependent."],
 "Type III survivorship","Thinking the young always survive best.","survivorship");
Q("a49","P","m12","survivorship",2,"Most lobsters die young, but those that survive tend to live many years. Which curve?",
 ["Type I","Type II","Type III","K-selected curve"],2,
 "High early mortality → Type III (Kahoot).",
 ["Low early mortality.","Constant mortality.","","Not a curve type."],
 "Survivorship","");
// growth
Q("a50","P","m12","growth",1,"The equation dN/dt = rN describes",
 ["logistic growth","exponential growth","zero population growth","carrying capacity"],1,
 "No K term → exponential.",
 ["Logistic includes (K − N)/K.","","That's dN/dt = 0.","K is a parameter, not an equation."],
 "Growth equations","");
Q("a51","P","m12","growth",2,"In a population, the per capita birth rate is 0.05 and the per capita death rate is 0.02 per year. What is r?",
 ["0.07","0.03","0.025","2.5"],1,
 "r = b − d = 0.05 − 0.02 = 0.03.",
 ["Added instead of subtracting.","","Divided instead of subtracting.","Ratio, not difference."],
 "r = b − d","");
Q("a52","P","m12","growth",3,"A population has r = 0.5/yr and K = 800. At which N is dN/dt greatest?",
 ["N = 100","N = 400","N = 700","N = 800"],1,
 "Logistic growth peaks at K/2: 0.5 × 400 × 0.5 = 100/yr. At N = 100: 43.75; N = 700: 43.75; N = 800: 0.",
 ["Few breeders.","","Little room left.","Growth is zero at K."],
 "Logistic growth peak","Thinking growth is fastest when N is largest.","growth");
Q("a53","P","m12","growth",2,"A population exceeds its carrying capacity after a mild year. According to the logistic model, it will",
 ["keep growing exponentially","decline toward K","stay constant above K","immediately go extinct"],1,
 "If N > K, (K − N)/K is negative, so growth is negative.",
 ["Exponential growth assumes unlimited resources.","","Can't stay above K under this model.","Decline, not extinction."],
 "Logistic rules","");
Q("a54","P","m12","growth",2,"Which best describes exponential growth?",
 ["The same number of individuals is added each year","The population increases by the same proportion each unit of time","Growth slows as the population gets larger","Births equal deaths"],1,
 "Constant r means a constant proportional increase; the absolute number added grows with N.",
 ["That's linear growth.","","That's logistic.","That's zero growth."],
 "Exponential growth","");
Q("a55","P","m12","growth",3,"Whooping cranes increased rapidly after hunting was banned and wetlands were protected. Which growth pattern is expected at first, and why?",
 ["Logistic, because the population was near K","Exponential, because the population was far below K with abundant resources","Zero growth, because births equaled deaths","Negative growth, because N > K"],1,
 "Small population, plentiful habitat → near-exponential growth (M12 slide 41).",
 ["It was far below K.","","Births exceeded deaths.","N was far below K."],
 "When exponential growth occurs","");
Q("a56","P","m12","growth",2,"A graph shows N rising slowly, then steeply, then leveling off at 600. What is 600?",
 ["r","The intrinsic rate of increase","Carrying capacity","The inflection point"],2,
 "Leveling off marks K.",
 ["r is a rate, not a population size.","Same as r.","","The inflection point is at ~K/2 (300)."],
 "Reading logistic curves","","growth");
// regulation
Q("a57","P","m12","regulation",1,"Which is a density-independent factor?",
 ["Competition for nest sites","A spreading viral disease","A hurricane","Predation by wolves"],2,
 "Weather catastrophes kill regardless of density.",
 ["Density-dependent.","Spreads faster in crowds: density-dependent.","","Often density-dependent."],
 "DD vs DI","");
Q("a58","P","m12","regulation",2,"In a crowded tomato field, each plant produces fewer tomatoes. This is an example of",
 ["density-independent regulation via weather","density-dependent regulation via intraspecific competition","interspecific competition","exponential growth"],1,
 "M12 slide 53: more plants per area → less fruit per plant due to resource limitation.",
 ["Weather isn't involved.","","All the plants are the same species.","It's a limit on growth."],
 "Density-dependent factors","");
Q("a59","P","m12","regulation",3,"Seychelles warblers on Cousin Island grew from 30 to about 320 and then stayed there, with about 115 territories. Which statement is best supported?",
 ["Growth was exponential and continues today","Population size is regulated by a density-dependent factor (territory availability)","Hurricanes limit the population","The population exceeds K"],1,
 "A logistic plateau tied to the number of territories = density-dependent regulation by space.",
 ["It leveled off.","","No evidence of catastrophes.","It stabilized at K."],
 "Regulation case study","");
Q("a60","P","m12","regulation",2,"Density-dependent factors regulate population size through",
 ["positive feedback","negative feedback","random fluctuation","constant mortality"],1,
 "Higher density → lower growth; lower density → higher growth (M12 slide 61).",
 ["Positive feedback would amplify growth.","","Regulation isn't random.","Mortality changes with density."],
 "Negative feedback","");
Q("a61","P","m12","regulation",3,"Bacteria in a sealed flask stop growing even though sugar remains. Which density-dependent factor most likely limits them?",
 ["Temperature of the room","Accumulation of toxic metabolic wastes","An earthquake","Light level"],1,
 "Toxic wastes accumulate faster with more cells (M12 slide 62).",
 ["Independent of density.","","Independent.","Bacteria in broth don't need light."],
 "Density-dependent factors","");
// life history
Q("a62","P","m12","lifehist",1,"Which trait is characteristic of r-selected populations?",
 ["Few, large offspring","Extended parental care","Many small offspring with little parental care","Late maturity"],2,
 "r-selected = high reproductive output, little care.",
 ["K-trait.","K-trait.","","K-trait."],
 "r-selection","");
Q("a63","P","m12","lifehist",2,"Why can't a female fish produce both very many and very large eggs?",
 ["Predators eat large eggs","She has a limited energy budget to divide among offspring","Large eggs can't be fertilized","Males prefer small eggs"],1,
 "Life-history trade-off from limited energy (M12 slide 64).",
 ["Not the fundamental constraint.","","Not true.","Not the reason."],
 "Life-history trade-offs","");
Q("a64","P","m12","lifehist",3,"A weed colonizes freshly plowed fields, matures in weeks, and produces thousands of seeds. Its population is most likely to",
 ["remain stable near K","show bursts of exponential growth after disturbance","show Type I survivorship","invest heavily in each seed"],1,
 "r-selected disturbance specialist: rapid growth when resources open up.",
 ["K-selected behavior.","","Type III is expected.","Opposite of r-selection."],
 "r-selection","");
Q("a65","P","m12","lifehist",2,"Pacific salmon spawn once and then die. This reproductive pattern is called",
 ["iteroparity","semelparity","K-selection","polyandry"],1,
 "Semelparous = one reproductive event.",
 ["Repeated reproduction.","","A strategy, not about frequency.","A mating system."],
 "Semelparity","");
Q("a66","P","m12","lifehist",3,"An island has stable, crowded populations of birds that compete intensely for food. Which traits would selection favor?",
 ["Many tiny eggs, no care","Few well-provisioned offspring with parental care","Early maturity and short life","Semelparous reproduction"],1,
 "Near K, competitive offspring are favored → K-selected traits.",
 ["r-traits favored in low-density, disturbed habitats.","","r-traits.","Not favored by these conditions."],
 "Selection for life histories","");
// human pop
Q("a67","P","m12","humanpop",1,"A population pyramid with a broad base and narrow top indicates",
 ["a declining population","a rapidly growing population","a stable population","an aging population"],1,
 "Many young people will soon reproduce.",
 ["Narrow base.","","Straight sides.","Top-heavy shape."],
 "Age pyramids","","pyramids");
Q("a68","P","m12","humanpop",2,"A country's pyramid has fewer people aged 0–14 than aged 30–44. Over the next two generations, the population will most likely",
 ["grow rapidly","decline","grow exponentially","stay exactly the same"],1,
 "Fewer future parents → fewer births → decline (narrow base).",
 ["Broad base needed.","","Not with a narrow base.","Not likely."],
 "Age pyramids","","pyramids");
Q("a69","P","m12","humanpop",3,"Global birth rates have been falling for decades, yet world population is projected to rise for decades more. Why?",
 ["Death rates are rising","A large proportion of people are young and will still enter reproductive age","Immigration from other planets","Carrying capacity is decreasing"],1,
 "Population momentum from a large young cohort.",
 ["Falling death rates would also raise population, but the main reason is age structure.","","Not serious.","That would slow growth."],
 "Population momentum","");
Q("a70","P","m12","humanpop",2,"Compared with developing countries, industrialized countries typically have",
 ["higher growth rates and lower per capita resource use","lower growth rates and higher per capita resource use","higher growth and higher resource use","lower growth and lower resource use"],1,
 "M12 slide 70.",
 ["Reversed.","","Not typical.","Not typical."],
 "Development & resources","");
})(SG.Q);
