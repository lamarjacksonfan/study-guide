// Lessons, Module 12: Population Ecology.
window.SG = window.SG || {};
SG.topics = SG.topics || [];

SG.topics.push(
{
  id: "measure", m: "m12", title: "Population size, density & mark–recapture", heat: 2,
  src: "M12 slides 2–17", sg: [22],
  simple: "A population is all the members of one species in an area. Its size is how many there are; its density is how crowded they are (how many per acre, per m², per mL). Because you usually can't count everyone, ecologists sample a piece and scale up, or catch, mark and recatch animals to estimate the total.",
  detail: `<p><b>Population</b>: one species in the same geographic area, described by boundaries (natural or arbitrary) and size. Every population has a <b>distribution</b> (size, shape, location of range), <b>density</b> (individuals per unit area or volume) and <b>abundance</b> (total number or biomass in a specified area).</p>
<p><b>Size</b> = total number of individuals. <b>Density</b> = size ÷ area (or volume). Eight elephants per acre is <b>population density</b> (Q22).</p>
<p><b>Three ways to measure</b>:</p>
<ol><li><b>Count them all</b>: only for small areas, observable organisms, few individuals.</li>
<li><b>Subsample and extrapolate</b>: random plots, quadrats, transects or grids; count, average, multiply out. Assumes the sample is representative and you can count everything in it. Aerial photo/drone surveys work for mobile animals. Example from slide 9: 20 bacteria in 1 mL of milk = density <b>20/mL</b> (density doesn't change with the size of the jug).</li>
<li><b>Mark and recapture</b>: for mobile or cryptic animals. Mark M animals, release, let them mix ("dilution"), catch n, count r marked recaptures. The marked fraction in the sample equals the marked fraction in the population:</li></ol>
<p class="eq">N / M = n / r &nbsp;&nbsp;→&nbsp;&nbsp; <b>N = (M × n) / r</b></p>
<p>Slide 13: M = 20, n = 30, r = 10 → N = 60. Slide 16: 12 marked, 15 caught, 4 marked → N = 45. Slide 17 (Joe Pool Lake bluegill): 30 marked, 50 caught, 10 recaptures → <b>(30 × 50)/10 = 150</b>.</p>`,
  why: `<p>Mark–recapture works because marked animals are diluted into the whole population. If 1 in 5 fish in your second catch is marked, then about 1 in 5 fish in the lake is marked, so the lake has 5 × M fish. The method assumes marks aren't lost, marked animals mix randomly and aren't more or less catchable, and no births, deaths or migration between samples ⚑.</p>`,
  vocab: [["Population size (N)", "Total number of individuals", "1,200 deer"], ["Density", "Individuals per unit area or volume", "8 elephants/acre; 20 bacteria/mL"], ["Abundance", "Total number or biomass of a species in a specified area", ""], ["Quadrat / transect", "Sample plot / sample line", "1 m² frames across a meadow"], ["Mark–recapture", "N = Mn/r", "Banding birds, tagging fish"]],
  miscon: ["Density is not the same as size: a large population can have low density if spread out.", "In mark–recapture you divide by recaptured marked (r), not by total caught (n).", "Species richness is about many species; density refers to one species (M13 slide 32)."],
  exam: { q: "Biologists tag 40 turtles. A week later they catch 60, of which 8 are tagged. Estimate N.", a: "N = (40 × 60) / 8 = 300 turtles.", how: "Marked first × caught second ÷ marked in second." },
  recall: ["Write the mark–recapture equation and define each letter.", "When is mark–recapture better than quadrats?", "What assumption makes subsampling valid?", "Distinguish size, density and abundance."],
  take: "Density = N ÷ area. Mark–recapture: N = (M × n) ÷ r."
},
{
  id: "dispersion", m: "m12", title: "Dispersion patterns", heat: 2,
  src: "M12 slides 18–23; M13 review 39–40", sg: [20, 21],
  simple: "Dispersion is how individuals are spaced out inside the population's area: bunched in groups (clumped), evenly spaced like a grid (uniform), or scattered with no pattern (random).",
  detail: `<p><b>Dispersion</b> = the pattern of spacing among individuals within the boundaries of the population (Q20). Don't confuse it with <b>dispersal</b> = movement of individuals away from where they were born.</p>
<ul><li><b>Clumped</b> (most common): individuals aggregate in patches. Causes: patchy resources or favorable conditions, mating, group hunting, herding/schooling for defense. (Attraction.)</li>
<li><b>Uniform</b>: evenly spaced. Causes: <b>competition</b>, plants secreting chemicals that inhibit neighbors (allelopathy ⚑ term), animal <b>territoriality</b>. (Repulsion.) Creosote bush (Q21) is uniform because of competition for water and chemical inhibition. Namibia fairy circles are uniform; newer work argues competition among grasses causes it. Spider webs spaced evenly = uniform dispersion from territoriality (Kahoot).</li>
<li><b>Random</b>: each individual's position is independent of the others. Happens when there are no strong attractions or repulsions and resources are evenly spread (e.g. wind-dispersed dandelions ⚑).</li></ul>`,
  why: `<p>Spacing is a footprint of interactions. Attraction (shared resources, safety in numbers, mates) pulls individuals together → clumped. Repulsion (fighting over territory, competing roots, toxins) pushes them apart until each holds an equal share → uniform. With neither force, chance places them → random.</p>`,
  fig: "dispersion",
  vocab: [["Dispersion", "Spacing pattern within a population", "Clumped, uniform, random"], ["Dispersal", "Movement of individuals from origin", "Seeds blown by wind"], ["Territoriality", "Defense of a bounded space", "Nesting seabirds, eagles"], ["Allelopathy ⚑", "Plant chemicals inhibiting neighbors", "Creosote bush"]],
  compare: { head: ["Pattern", "Cause", "Example"], rows: [["Clumped", "Patchy resources, herding, mating", "Fish schools, elephants at water holes"], ["Uniform", "Competition, territoriality, chemical inhibition", "Creosote bush, nesting penguins, spider webs"], ["Random", "No strong interaction, uniform resources", "Dandelions, some trees"]] },
  miscon: ["Uniform spacing is caused by competition/territoriality, not by cooperation.", "Clumped, not random, is the most common pattern in nature.", "Dispersion ≠ dispersal."],
  exam: { q: "Nesting gannets peck any neighbor that comes within reach, so nests end up about 1 m apart. Predict and explain the dispersion.", a: "Uniform, caused by territorial repulsion.", how: "Repulsion → even spacing." },
  recall: ["Define dispersion.", "What causes uniform dispersion?", "Which pattern is most common, and why?", "Give one plant and one animal example of uniform dispersion."],
  take: "Clumped = attraction or patchy resources. Uniform = competition/territoriality. Random = no interaction."
},
{
  id: "survivorship", m: "m12", title: "Survivorship curves", heat: 3,
  src: "M12 slides 24–31", sg: [55],
  simple: "A survivorship curve shows what fraction of a group born together is still alive at each age. Some species protect their young so most live to old age (Type I), some die at the same rate at every age (Type II), and some produce masses of young that mostly die right away (Type III).",
  detail: `<p>Survivorship curve: the proportion (usually log scale) of a cohort surviving at each age.</p>
<ul><li><b>Type I</b>: low death rates in early and middle life, sharp increase in old age. Flat line until ~80% of lifespan, then a steep drop. <b>Large mammals with high parental care</b>: humans, great apes, elephants, whales (Q55). Not only vertebrates (slide 26).</li>
<li><b>Type II</b>: constant death rate at all ages, a straight diagonal on a log scale. Rodents, many invertebrates, lizards, some plants; the lecture also uses <b>birds</b> (slide 28). Kahoot: rabbit "equally likely to die at any age" → Type II.</li>
<li><b>Type III</b>: very high death among the young, then the survivors live a long time. Steep drop until ~30% of lifespan, then flat. Organisms that produce many young: <b>fish, marine invertebrates, some plants</b> (a toad with 10,000 eggs; lobsters; trees from acorns).</li></ul>
<p>Survivorship can vary by population and environment; human survivorship shifted toward Type I with modern medicine.</p>`,
  why: `<p>Curve type follows from parental investment. If parents put lots of energy into a few offspring (care, protection, feeding), the young survive and death comes from aging → Type I. If parents release thousands of tiny unprotected eggs, most are eaten or starve, but the few that reach adult size escape most predators → Type III. In the Kahoot graph, the organism with the highest chance of surviving "a bit longer" is the <b>mature tree</b> (it already made it through the steep early part of a Type III curve), not the acorn.</p>`,
  fig: "survivorship",
  vocab: [["Survivorship curve", "Surviving fraction of a cohort vs age", ""], ["Cohort", "Group of individuals born at the same time ⚑", ""], ["Type I", "High survival until old age", "Elephants, humans"], ["Type II", "Constant mortality", "Rodents, birds, lizards"], ["Type III", "High early mortality", "Oysters, fish, trees"]],
  compare: { head: ["", "Type I", "Type II", "Type III"], rows: [["Death concentrated", "Old age", "Evenly", "Youth"], ["Offspring number", "Few", "Moderate", "Very many"], ["Parental care", "High", "Some", "Little/none"], ["Life history", "K-selected", "Intermediate", "r-selected"]] },
  miscon: ["Type III organisms are not all short-lived: survivors (trees, lobsters) can live long.", "A straight diagonal means constant death rate only on a log y-axis.", "The acorn and the mature tree are on the same Type III curve; position on the curve matters."],
  exam: { q: "A sea turtle lays 100 eggs; 1 in 1,000 hatchlings reaches adulthood, but adults live 80 years. Which curve, and which life-history strategy?", a: "Type III; r-selected traits (many offspring, no care), even though adults are long-lived.", how: "Where is death concentrated? In the young." },
  recall: ["Sketch all three curves on one graph.", "Give two examples of each type.", "Which type do great apes, elephants and whales show?", "Which type would a rabbit equally likely to die at any age show?", "Why does parental care produce Type I?"],
  take: "Type I = die old (much care), Type II = die at any age, Type III = die young (many offspring, no care)."
},
{
  id: "growth", m: "m12", title: "Exponential & logistic growth", heat: 3,
  src: "M12 slides 32–52, 63", sg: [47, 49, 50],
  simple: "With unlimited food and space, a population grows faster and faster because more individuals make more babies: a J-shaped curve. In the real world resources run short, growth slows, and the population levels off at the most the environment can support, the carrying capacity (K): an S-shaped curve.",
  detail: `<p><b>Change in size</b> = births + immigrants − deaths − emigrants. Ignoring migration: ΔN/Δt = B − D.</p>
<p>Per capita rates: b = B/N, d = D/N. <b>r = b − d</b> = per capita (intrinsic) rate of increase, also called biotic potential. N<sub>t+1</sub> = N<sub>t</sub> + rN<sub>t</sub>.</p>
<p><b>Exponential growth</b>: <span class="eq">dN/dt = rN</span></p>
<ul><li>Occurs under ideal conditions: abundant resources, minimal predation and disease; reproducing at full physiological capacity.</li>
<li>Population increases by a <b>constant proportion</b> per unit time (r is constant), so the <b>number added grows with N</b>: J-shaped curve (Q47).</li>
<li>Seen when a species enters a new environment, after a catastrophe, or after hunting stops (whooping cranes after protection; trees after glaciers retreated).</li>
<li>Describes growth in an <b>idealized, resource-unlimited</b> environment (Q50; Kahoot).</li></ul>
<p><b>Logistic growth</b>: <span class="eq">dN/dt = rN (K − N)/K</span></p>
<ul><li><b>Carrying capacity (K)</b>: the maximum population an environment can sustain; varies with food, shelter from predators, water, nutrients, nesting sites, disease, and over space and time.</li>
<li>Sigmoid (S-shaped). Growth is fastest at <b>intermediate N</b> (K/2 ⚑) when there are many breeders and resources are still plentiful.</li>
<li>When N ≪ K, (K−N)/K ≈ 1, growth ≈ rN (nearly exponential). When N → K, (K−N)/K → 0, growth → 0.</li>
<li><b>Rules</b>: N &lt; K → positive growth; N = K → zero growth; N &gt; K → negative growth.</li>
<li>A <b>stable</b> population shows logistic growth, sitting at K (Q49). A negative growth rate means deaths (and emigration) exceed births (and immigration): the population is shrinking.</li>
<li>Real populations: some overshoot K, some females raise output when resources are low, many fluctuate too much to define K.</li></ul>
<p>Example from M13 review: deer grow 100 → 200 → 600 and level off at 600 → they reached <b>carrying capacity</b>.</p>`,
  why: `<p>Exponential growth is <b>density-independent</b>: each individual reproduces at the same rate no matter how crowded it is, so more individuals simply means more births. Logistic growth is <b>density-dependent</b>: as N rises, each individual gets less food, space and safety, so per capita births fall and/or deaths rise until they balance at K. The (K−N)/K term is the fraction of "room" left.</p>`,
  fig: "growth",
  vocab: [["r", "Per capita rate of increase = b − d", "r = 0.1/yr"], ["K", "Carrying capacity: max sustainable N", "Seychelles warbler K ≈ 320"], ["Exponential (J)", "dN/dt = rN", "Bacteria in fresh broth"], ["Logistic (S)", "dN/dt = rN(K−N)/K", "Yeast in a flask"], ["dN/dt", "Population growth rate (individuals per time)", ""]],
  compare: { head: ["", "Exponential", "Logistic"], rows: [["Shape", "J", "S (sigmoid)"], ["Resources", "Unlimited, idealized", "Limited"], ["Per capita rate", "Constant r", "Falls as N → K"], ["Regulation", "Density-independent", "Density-dependent"], ["Fastest absolute growth", "At largest N", "At intermediate N (~K/2)"], ["Typical of", "r-selected species, invaders", "K-selected species"]] },
  miscon: ["Exponential growth doesn't mean adding the same number each year; it adds the same proportion.", "In logistic growth the population is NOT growing fastest when it's largest; growth peaks at medium N.", "K is not fixed; it changes with the environment.", "A population above K shrinks (negative growth)."],
  exam: { q: "A population has r = 0.2 per year and K = 1000. Compare dN/dt at N = 100 and N = 900.", a: "N=100: 0.2 × 100 × 0.9 = 18/yr. N=900: 0.2 × 900 × 0.1 = 18/yr. Equal, and both lower than at N=500 (50/yr).", how: "Plug into rN(K−N)/K; growth peaks at K/2." },
  recall: ["Write both growth equations.", "What does (K−N)/K represent?", "What happens to growth when N > K?", "Why is exponential growth J-shaped?", "Which model fits a stable population?", "Name three things that set K."],
  take: "Exponential: dN/dt = rN, J-curve, unlimited resources. Logistic: dN/dt = rN(K−N)/K, S-curve, levels off at K."
},
{
  id: "regulation", m: "m12", title: "Density-dependent vs density-independent regulation", heat: 3,
  src: "M12 slides 53–62", sg: [51],
  simple: "Some things that kill animals hit harder when the population is crowded (disease spreads faster, food runs out). Those are density-dependent. Others hit the same no matter how many there are (a flood, a freeze). Those are density-independent.",
  detail: `<p>The environment limits growth by changing birth and death rates.</p>
<p><b>Density-dependent factors</b> (mostly <b>biotic</b>): their effect per individual increases as density rises. They <b>regulate</b> growth through <b>negative feedback</b>.</p>
<ol><li>Resource limitation from <b>intraspecific competition</b> (tomatoes per plant drop as plants get denser).</li>
<li>Limited territories/space (eagle nest sites limited by territoriality).</li>
<li>More predators or pathogens (wolf predation; disease spreads faster in crowds).</li>
<li>Also: intrinsic (physiological) factors, toxic wastes (bacteria in their own waste).</li></ol>
<p>Kelp perch: death rate rises with density because hiding places from predators run out (slide 61).</p>
<p><b>Density-independent factors</b> (mostly <b>abiotic</b>): kill the same fraction regardless of density: floods, earthquakes, fire, hurricanes, freezes, drought. They don't regulate; they cause crashes. A sudden natural catastrophe = density-<b>independent</b> (Q51).</p>
<p><b>Seychelles warbler</b> (slides 57–59): reduced to one island by 1920; on Cousin Island N = 30 in 1967; island bought in 1968, habitat restored; population grew to N = 320 by 1982 and stayed there; maximum ~115 territories. That is <b>logistic growth</b> limited by territories, a density-dependent factor.</p>
<p>⚑ Boom-and-bust lynx–hare cycles involve both bottom-up food limitation and top-down predation (Kahoot marked both).</p>`,
  why: `<p>A factor regulates only if it pushes back harder when numbers are high and eases off when numbers are low; that negative feedback steers N toward K. A hurricane kills 50% of a population whether it holds 100 or 10,000, so it can't steer toward any particular size.</p>`,
  vocab: [["Density-dependent", "Per capita effect rises with density; regulates", "Disease, competition, predation, territory"], ["Density-independent", "Effect independent of density; does not regulate", "Flood, fire, freeze, hurricane"], ["Negative feedback", "High N → lower growth; low N → higher growth", ""], ["Intraspecific competition", "Competition within one species", "Seedlings in a crowded flat"]],
  compare: { head: ["Density-dependent", "Density-independent"], rows: [["Mostly biotic", "Mostly abiotic"], ["Competition, predation, disease, parasites, territories, toxic waste", "Weather, fire, flood, earthquake, freeze"], ["Regulates toward K", "Does not regulate"], ["Produces logistic growth", "Can occur with any growth pattern"]] },
  miscon: ["'Temperature of an enclosed fish tank' is density-independent (Kahoot: density-dependent mortality would NOT include it).", "Not every biotic factor is density-dependent, and a fire's damage can be worse in a dense forest; on exams, catastrophes = independent.", "Toxic waste buildup in a bacterial culture IS density-dependent: more cells, more waste."],
  exam: { q: "A late frost kills 40% of a moth population in both a dense valley and a sparse hillside. Classify the factor.", a: "Density-independent; the same fraction died regardless of density.", how: "Ask whether the per-capita effect changed with density." },
  recall: ["Give four density-dependent factors.", "Why can't a hurricane regulate a population?", "How did territories limit the Seychelles warbler?", "Which factor produces logistic growth?"],
  take: "Density-dependent (biotic, negative feedback) regulates toward K. Density-independent (abiotic catastrophes) cuts numbers regardless of density."
},
{
  id: "lifehist", m: "m12", title: "Life history: trade-offs, r- and K-selection", heat: 3,
  src: "M12 slides 63–67; Kahoot", sg: [52, 53, 54],
  simple: "No organism can do everything at once: energy spent on making lots of babies can't also be spent on caring for each one. Species fall on a spectrum from 'many cheap offspring, no care' (r-selected) to 'few expensive offspring, lots of care' (K-selected).",
  detail: `<p><b>Life history</b>: the complete life cycle of an organism: when it reproduces, how often, how many offspring, how much care.</p>
<p><b>Life history theory</b> assumes <b>energy is limited</b>, so organisms cannot maximize every function and must make <b>trade-offs</b>. Females cannot produce an infinite number of offspring because of energetic constraints; that is why no female can produce a very large number of very large eggs (Q52: <b>energy</b>). Common trend: extensive parental care goes with few offspring.</p>
<p>When survival is low, two options: produce more offspring, or invest more per offspring (or recruit kin as helpers).</p>
<p><b>r-selection</b>: low density, low competition, often disturbed habitats. High intrinsic reproductive rate; many small offspring; little care; early maturity; short life; Type III survivorship; usually exponential bursts ("disturbance specialists"); rarely approach K.</p>
<p><b>K-selection</b>: populations near K, high density, high competition, scarce resources. Few large offspring, long-term parental care, late maturity, long life, Type I survivorship, logistic growth. Dolphins (one calf, heavy investment) = K-selected (Kahoot); long-term parental care → K-selected (Q54).</p>
<p>⚑ <b>Semelparous</b> = reproduces once then dies (salmon, agave); <b>iteroparous</b> = reproduces repeatedly (humans, oaks). Kahoot: "organisms that reproduce once before they die" = semelparous.</p>`,
  why: `<p>Natural selection favors whatever strategy leaves the most surviving offspring in that environment. In a crowded, competitive habitat near K, a well-provisioned offspring that can compete wins, so K-traits are favored. In an unpredictable habitat where disaster resets populations, the winner is whoever reproduces fastest after the disturbance, so r-traits are favored.</p>`,
  vocab: [["Life history", "An organism's schedule of growth, reproduction and survival", ""], ["Trade-off", "Energy used for one function can't be used for another", "Egg number vs egg size"], ["r-selected", "Many small offspring, little care, fast reproduction", "Mice, insects, weeds"], ["K-selected", "Few offspring, much care, near K", "Elephants, apes, whales"], ["Semelparity ⚑", "One reproductive event, then death", "Pacific salmon"], ["Iteroparity ⚑", "Repeated reproduction", "Humans"]],
  compare: { head: ["Trait", "r-selected", "K-selected"], rows: [["Offspring", "Many, small", "Few, large"], ["Parental care", "Little/none", "Extensive"], ["Maturity", "Early", "Late"], ["Lifespan", "Short", "Long"], ["Survivorship", "Type III", "Type I"], ["Population", "Below K, fluctuating", "Near K, stable"], ["Habitat", "Disturbed, unpredictable", "Stable, competitive"]] },
  miscon: ["'K' doesn't mean the species has a large K; it means it lives near its K.", "Long lifespan alone doesn't make a species K-selected; look at offspring number and care.", "Semelparous is about how often, not how many."],
  exam: { q: "A dandelion matures in weeks, makes hundreds of wind-dispersed seeds, and colonizes newly plowed fields. Classify and justify.", a: "r-selected: early maturity, many small offspring, no care, a disturbance specialist.", how: "Count offspring, check care, look at habitat stability." },
  recall: ["Why can't a female produce many very large eggs?", "List four r-selected traits.", "Which strategy has long-term parental care?", "Match r and K to survivorship curve types.", "Define semelparous."],
  take: "Energy is limited → trade-offs. r = many cheap offspring, no care, Type III. K = few costly offspring, much care, Type I."
},
{
  id: "humanpop", m: "m12", title: "Human population & age-structure pyramids", heat: 3,
  src: "M12 slides 68–70; M13 review 25–28", sg: [45, 46, 48],
  simple: "An age pyramid stacks the population by age, with youngest at the bottom. A wide bottom means lots of children about to become parents, so the population will grow. A narrow bottom means few future parents, so it will shrink or hold steady.",
  detail: `<p><b>Population (age-structure) pyramid</b>: percentage of males and females in each age class (pre-reproductive, reproductive, post-reproductive). It predicts future growth.</p>
<ul><li><b>Broad base, slopes quickly to a narrow top</b>: many young people → <b>rapid growth</b>; typical of least-developed nations (Rwanda, Haiti, Somalia) (Q45; Kahoot: "increase in size at a faster rate"/"grow at an accelerating rate").</li>
<li><b>Column/straight sides</b>: births ≈ deaths → <b>stable</b> or slow growth (Canada).</li>
<li><b>Narrow base</b>: fewer young than adults → population will <b>decline</b> (or level off) over the next generations; typical of developed nations (Italy, Japan) (Q46; Kahoot).</li></ul>
<p><b>Human growth</b>: the growth rate peaked in the 1960s; the population is still growing, just more slowly. Birth rate peaked and has been declining, but the population will <b>keep increasing at a slower rate for decades</b> because so many people are still entering reproductive age (momentum ⚑) before leveling off (Q48).</p>
<p><b>Development and resources</b> (slide 70): developing countries have high growth rates but low per capita resource use; industrialized countries have low growth but high per capita resource use (larger ecological footprint; meat-heavy diets, M14.1 slide 25).</p>
<p>Unchecked growth: eventually limited by K; Earth's K for humans depends on technology and consumption.</p>`,
  why: `<p>Today's children are tomorrow's parents. A pyramid predicts the future because each bar moves up one step every few years. Even if every family now has fewer children, a huge base of young people still produces many births, which is why a falling birth rate slows growth before it stops it.</p>`,
  fig: "pyramids",
  vocab: [["Age structure", "Distribution of individuals among age classes", ""], ["Population pyramid", "Bar graph of age classes by sex", ""], ["Demographic transition ⚑", "Shift from high births/deaths to low births/deaths with development", ""], ["Ecological footprint", "Land/resources needed to support a person's consumption", "Higher in developed nations"]],
  compare: { head: ["Shape", "Meaning", "Example"], rows: [["Wide base, pointed top", "Rapid growth", "Rwanda"], ["Straight sides", "Stable / slow growth", "Canada"], ["Narrow base, wider middle", "Decline", "Japan, Italy"]] },
  miscon: ["A declining birth rate does not mean the population immediately shrinks.", "Developed countries grow slowly but use far more resources per person.", "Human growth RATE peaked in the 1960s, but the NUMBER of people is still rising."],
  exam: { q: "Country X's pyramid has 20% of its people aged 0–4 and 4% over 65. Country Y has 4% aged 0–4 and 28% over 65. Predict each country's population over two generations.", a: "X grows rapidly (broad base); Y declines (narrow base, aging population).", how: "Look at the base relative to the reproductive bars above it." },
  recall: ["What does a broad-based pyramid predict?", "What does a narrow-based pyramid predict?", "Why will the human population keep growing even though birth rates are falling?", "Compare growth rate and resource use in developing vs industrialized countries."],
  take: "Broad base → growth. Straight sides → stable. Narrow base → decline. Falling birth rates slow growth before stopping it."
}
);
