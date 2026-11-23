// Original practice bank, part B (Modules 13–14). Set "P".
(function (Q) {
// ---------------- M13 interactions
Q("b1","P","m13","interact",1,"Which interaction is −/− for both species?",
 ["Mutualism","Commensalism","Competition","Parasitism"],2,
 "Both species lose when they share a limiting resource.",
 ["+/+.","+/0.","","+/−."],"Interaction signs","");
Q("b2","P","m13","interact",2,"An orchid grows on a rainforest tree branch, gaining access to light without taking water or nutrients from the tree. This is",
 ["parasitism","commensalism","mutualism","competition"],1,
 "Orchid +, tree unaffected = commensalism (M13 slide 18).",
 ["Parasites take resources from the host.","","The tree doesn't benefit.","They aren't competing for a shared limiting resource."],"Commensalism","Confusing with mistletoe.");
Q("b3","P","m13","interact",2,"Which is NOT a mutualism?",
 ["Pollinating bees and flowering plants","Ants and acacia trees","Ticks feeding on a deer","Nitrogen-fixing bacteria in legume nodules"],2,
 "Ticks benefit and the deer is harmed: parasitism (+/−).",
 ["+/+.","+/+.","","+/+."],"Mutualism","");
Q("b4","P","m13","interact",3,"Cattle egrets eat insects flushed by grazing cattle; sometimes they also eat ticks off the cattle. How should this relationship be described?",
 ["Strictly parasitism","Commensalism that can shift toward mutualism","Competition","Predation of cattle"],1,
 "Usually egret +, cattle 0; when egrets remove ticks, cattle benefit too (M13 slide 16).",
 ["Egrets don't harm cattle.","","No shared limiting resource.","Egrets don't eat cattle."],"Variable interactions","");
Q("b5","P","m13","interact",2,"Mistletoe taps a tree's xylem for water and minerals. This is",
 ["commensalism","mutualism","parasitism","competition"],2,
 "Mistletoe takes resources from the host (+/−).",
 ["The tree is harmed.","The tree doesn't benefit.","","They are not competing for an outside resource."],"Parasitism","");
Q("b6","P","m13","interact",1,"Leeches, ticks and fleas are examples of",
 ["mutualists","commensals","parasites","predators that kill their prey"],2,
 "They live on hosts and take resources without (usually) killing them.",
 ["Hosts don't benefit.","Hosts are harmed.","","They don't generally kill."],"Parasitism","");
// niche
Q("b7","P","m13","niche",1,"The competitive exclusion principle states that",
 ["predators exclude prey","two species with identical niches cannot coexist indefinitely","all species compete equally","larger species always win"],1,
 "Gause's principle.",
 ["Not the principle.","","Not true.","Size isn't the principle."],"Competitive exclusion","");
Q("b8","P","m13","niche",2,"Walruses and bearded seals could both eat many benthic invertebrates. Where they coexist, walruses eat mostly clams and seals eat anything but clams. The seals' diet where they coexist is their",
 ["fundamental niche","realized niche","habitat","trophic level"],1,
 "The niche actually used in the presence of a competitor is the realized niche.",
 ["The fundamental niche is everything they could use.","","Habitat is where it lives, not its full niche.","Diet doesn't define trophic level here."],"Fundamental vs realized","");
Q("b9","P","m13","niche",2,"Golden spiny mice are normally nocturnal but become active by day where common spiny mice live. This is",
 ["character displacement in beak size","resource partitioning in time","commensalism","mutualism"],1,
 "Shifting activity time reduces overlap (M13 slide 12).",
 ["No morphological change described.","","Both are affected.","Neither benefits."],"Resource partitioning","");
Q("b10","P","m13","niche",3,"Two finch species have similar beak depths on islands where they live separately but very different beak depths on the island they share. This pattern",
 ["is character displacement driven by competition","shows they are the same species","is caused by mutualism","is random variation"],0,
 "Divergence in sympatry vs similarity in allopatry = character displacement.",
 ["","Different species.","No mutual benefit.","Pattern is consistent, not random."],"Character displacement","");
Q("b11","P","m13","niche",3,"Ecologists remove barnacle species B from rocks. Barnacle species A then spreads into lower zones it never occupied before. What can be concluded?",
 ["A's fundamental niche is larger than its realized niche; B was competitively excluding it","A's realized niche is larger than its fundamental niche","B was a mutualist of A","A and B do not interact"],0,
 "Release from competition revealed more of A's fundamental niche.",
 ["","Impossible: realized ≤ fundamental.","Removal helped A, so B harmed it.","Clearly they interact."],"Niche & competition","");
Q("b12","P","m13","niche",2,"Resource partitioning is most likely between",
 ["sympatric populations of predators and prey","allopatric populations of species with similar niches","sympatric populations of species with similar niches","allopatric populations of the same species"],2,
 "Species must live together (sympatric) and overlap in niche to need partitioning.",
 ["Predator–prey isn't competition.","Allopatric species don't meet.","","Same species, different places."],"Resource partitioning","");
// defenses
Q("b13","P","m13","defense",1,"A harmless fly with yellow-and-black stripes resembling a stinging wasp is an example of",
 ["Müllerian mimicry","Batesian mimicry","cryptic coloration","aposematic coloration of the fly"],1,
 "Harmless mimic of a harmful model = Batesian.",
 ["Both would need to be harmful.","","It stands out rather than blending in.","The fly isn't actually dangerous."],"Mimicry","");
Q("b14","P","m13","defense",2,"Two distasteful butterfly species share the same orange-and-black pattern. The benefit to each species is that",
 ["they hide from predators","predators learn to avoid the shared pattern faster, so fewer of each species are eaten","they can interbreed","they become palatable"],1,
 "Müllerian mimicry spreads the 'cost' of predator learning.",
 ["Bright colors are the opposite of hiding.","","Mimicry doesn't enable interbreeding.","Both stay distasteful."],"Müllerian mimicry","");
Q("b15","P","m13","defense",3,"Where garter snakes are most resistant to tetrodotoxin, rough-skinned newts are most toxic. This best supports",
 ["commensalism","a coevolutionary arms race","competitive exclusion","random genetic drift"],1,
 "Reciprocal selection between predator ability and prey defense.",
 ["Both are affected.","","No shared resource.","The geographic match indicates selection."],"Coevolution","");
Q("b16","P","m13","defense",3,"In a food web, species C is toxic to its predators. Which species would gain the most from evolving to look like C?",
 ["A producer eaten by C","A palatable species eaten by the same predators that avoid C","C's own predator","A decomposer"],1,
 "A Batesian mimic must share predators with the model so those predators avoid it.",
 ["Producers aren't attacked by C's predators.","","Predators don't benefit from resembling prey.","Decomposers aren't hunted by these predators."],"Batesian mimicry in webs","");
// diversity
Q("b17","P","m13","diversity",1,"Species richness is",
 ["the number of individuals of a species","the number of different species in a community","how evenly individuals are distributed among species","the total biomass"],1,
 "Count of species.",
 ["That's abundance.","","That's relative abundance/evenness.","That's biomass."],"Richness","");
Q("b18","P","m13","diversity",2,"Two communities each contain 6 species and 25 animals. In community 1, 15 are elephants; in community 2, each species has 4 or 5 individuals. Which statement is correct?",
 ["Community 1 has higher richness","They have equal richness, but community 2 has higher diversity","They have identical diversity","Community 1 is more even"],1,
 "Same richness; community 2 is more even → higher Shannon index (lecture: 1.75 vs 1.30).",
 ["Richness is equal (6).","","Evenness differs.","Community 1 is dominated by elephants."],"Richness vs evenness","","diversity");
Q("b19","P","m13","diversity",3,"Rank these forests from most to least diverse: P (3 species, 40/30/30), Q (4 species, 90/5/3/2), R (2 species, 85/15), S (1 species).",
 ["Q > P > R > S","P > Q > R > S","P > R > Q > S","Q > R > P > S"],1,
 "P is almost perfectly even with 3 species (H ≈ 1.09). Q has 4 species but is heavily dominated (H ≈ 0.43). R: H ≈ 0.42. S: 0.",
 ["Q's extra species are so rare that evenness drags its H below P.","","Q (0.43) slightly exceeds R (0.42).","P is highest."],"Shannon index reasoning","Assuming richness always wins.");
Q("b20","P","m13","diversity",2,"Which community is expected to be most resistant to invasion by a non-native species?",
 ["A low-diversity community dominated by one species","A high-diversity community","A recently disturbed bare site","A community with no predators"],1,
 "Higher diversity communities resist introduced species (tunicate experiments, M13 slide 42).",
 ["Low diversity leaves niches open.","","Bare sites are easily invaded.","Not the main determinant."],"Diversity & stability","");
Q("b21","P","m13","diversity",3,"Several isolated populations of a frog species are lost, but one large population remains. Why might the species now be at greater risk?",
 ["Richness of the region increased","Genetic diversity across populations was lost, reducing ability to adapt to new disease or climate","The remaining population will grow exponentially forever","Carrying capacity rose"],1,
 "Genetic diversity between populations is the raw material for adaptation; losing it raises extinction risk (study guide Q3).",
 ["Richness didn't increase.","","No reason to expect that.","Irrelevant."],"Genetic diversity","");
// keystone
Q("b22","P","m13","keystone",1,"A keystone species is one that",
 ["is the most abundant in the community","has an effect on community structure that is large relative to its abundance","is always a primary producer","forms most of the biomass"],1,
 "Definition (Paine).",
 ["That's a dominant species.","","That describes foundation species.","Keystones are typically not abundant."],"Keystone","");
Q("b23","P","m13","keystone",2,"Sea stars are removed from intertidal plots. The most likely result is",
 ["more species because a predator is gone","mussels monopolize space and species diversity declines","barnacles outcompete mussels","no change"],1,
 "Paine's result: keystone predator removal lets the dominant competitor exclude others.",
 ["Diversity falls, not rises.","","Mussels are the dominant competitor.","Big change observed."],"Keystone predation","Assuming fewer predators means more species.");
Q("b24","P","m13","keystone",2,"Which is most likely a foundation species?",
 ["Gray wolf in Yellowstone","Reef-building coral","Sea otter","A rare pollinating moth"],1,
 "Abundant habitat-forming producer/structure.",
 ["Keystone predator.","","Keystone predator.","Not abundant or structural."],"Foundation species","");
Q("b25","P","m13","keystone",3,"After sea otters are removed from a coast, which sequence of changes is predicted?",
 ["Urchins ↓, kelp ↑","Urchins ↑, kelp ↓","Urchins ↑, kelp ↑","No change"],1,
 "Top-down trophic cascade: no otters → more urchins → overgrazed kelp.",
 ["Backwards.","","Urchins eat kelp.","Otters are keystone."],"Trophic cascade","","cascade");
Q("b26","P","m13","keystone",2,"Beavers build dams that turn streams into ponds, creating habitat for many species. Beavers are best described as",
 ["foundation species that are primary producers","ecosystem engineers","parasites","pioneer species"],1,
 "They physically alter the environment (M13 slide 52).",
 ["Beavers aren't producers.","","They don't take from a host.","They're not first colonizers."],"Ecosystem engineers","");
Q("b27","P","m13","keystone",3,"In a lake, adding phosphorus increases algae, which increases zooplankton, which increases fish. This pattern is",
 ["top-down control","bottom-up control","a trophic cascade from removing a predator","competitive exclusion"],1,
 "Changes at the lowest level propagate upward = bottom-up.",
 ["Top-down starts with predators.","","No predator removal.","No competition described."],"Bottom-up vs top-down","");
// islands
Q("b28","P","m13","islands",1,"In MacArthur and Wilson's model, species richness on an island is set by",
 ["the balance between immigration and extinction rates","the number of predators","latitude alone","competitive exclusion only"],0,
 "Equilibrium where the two rates are equal.",
 ["","Not the model's variables.","Not in the model.","Part of extinction, but not the whole model."],"Island biogeography","");
Q("b29","P","m13","islands",2,"Which island should have the HIGHEST equilibrium species richness?",
 ["Small, far from mainland","Small, near mainland","Large, far from mainland","Large, near mainland"],3,
 "Near → high immigration; large → low extinction.",
 ["Lowest.","Middle.","Middle.",""],"Island biogeography","","island");
Q("b30","P","m13","islands",2,"Two islands are the same distance from the mainland, but one is much larger. The larger island will have",
 ["a higher extinction rate","a lower extinction rate","a lower immigration rate","fewer habitats"],1,
 "Larger islands support larger populations and more habitats, lowering extinction.",
 ["Opposite.","","Distance controls immigration; they're equal.","More habitats."],"Area & extinction","");
Q("b31","P","m13","islands",3,"Simberloff and Wilson fumigated small mangrove islands and watched recolonization. Which result supports the equilibrium model?",
 ["Islands never recovered","Islands returned to about the same number of species, though not always the same species","Islands gained many more species than before","Only predators returned"],1,
 "Richness returned to equilibrium; composition differed (turnover).",
 ["They recovered.","","Richness returned to roughly the original level.","Many groups returned."],"Fumigation experiment","");
Q("b32","P","m13","islands",3,"A national park becomes surrounded by farmland. Island biogeography predicts that over time it will",
 ["gain species because farmland adds habitat","lose species, especially if it is small and far from other reserves","stay the same because it's protected","show exponential growth of all species"],1,
 "Isolated habitat fragments behave like islands: lower immigration and, if small, higher extinction.",
 ["Farmland is inhospitable for most species.","","Protection doesn't stop the island effect.","Not expected."],"Fragmentation","");
Q("b33","P","m13","islands",2,"Which is a widely supported explanation for higher species diversity in the tropics?",
 ["Tropical communities have fewer parasites","Tropical communities have more sunlight and precipitation and are generally older","Tropical communities are at low altitude","Temperate species are more competitive"],1,
 "Climate (energy, water, long growing season) plus evolutionary history (older; not reset by glaciation).",
 ["Not supported.","","Altitude isn't the explanation.","Not supported."],"Latitudinal gradient","");
// succession
Q("b34","P","m13","succession",1,"Succession on bare rock exposed by a retreating glacier is",
 ["secondary succession","primary succession","eutrophication","competitive exclusion"],1,
 "No soil → primary.",
 ["Secondary needs intact soil.","","Unrelated.","Unrelated."],"Primary succession","");
Q("b35","P","m13","succession",2,"A forest fire burns a stand of trees but leaves the soil intact. Regrowth will be",
 ["primary succession, slow","secondary succession, relatively fast","impossible without humans","identical to the pre-fire community immediately"],1,
 "Soil and seed banks remain → secondary.",
 ["Soil remains.","","Natural recovery occurs.","Takes time."],"Secondary succession","");
Q("b36","P","m13","succession",3,"Early colonists of glacial moraines often host nitrogen-fixing bacteria. Why does this matter?",
 ["They make the soil more acidic","They add usable nitrogen to nitrogen-poor substrate, helping later species establish","They block light from competitors","They are pollinated by bats"],1,
 "Dryas example (M13 slide 71).",
 ["Not the key role.","","Not the main role.","Irrelevant."],"Facilitation","");
// behavior
Q("b37","P","m13","behavior",1,"Which is an example of a fixed action pattern?",
 ["A young lion getting better at hunting","A baby gull pecking at a red spot on its parent's beak to get food","A chicken avoiding orange insects after eating a bad one","A bear returning to the same den each winter"],1,
 "Innate sequence triggered by a sign stimulus.",
 ["Learning through practice.","","Associative learning.","Spatial learning/memory."],"FAP","");
Q("b38","P","m13","behavior",2,"Each morning John feeds his fish when he enters the room; soon the fish rise whenever he enters. This is",
 ["habituation","imprinting","classical conditioning","a fixed action pattern"],2,
 "An arbitrary stimulus (John entering) becomes associated with food.",
 ["Habituation is losing a response.","Needs a critical period.","","Not innate."],"Classical conditioning","");
Q("b39","P","m13","behavior",2,"A chicken avoids orange insects after eating a distasteful one. This is",
 ["innate behavior","imprinting","associative learning","inclusive fitness"],2,
 "It associated its own action (eating orange insects) with a bad outcome.",
 ["It changed with experience.","No critical period.","","Not a behavior type."],"Associative learning","");
Q("b40","P","m13","behavior",3,"Male mosquitoes fly to a speaker playing a female's wing-beat tone and attempt to mate with it. The best explanation is",
 ["operant conditioning","a fixed action pattern released by a sign stimulus","social learning","habituation"],1,
 "The sound acts as a sign stimulus; the full innate sequence runs even with a fake female.",
 ["Not learned.","","Not observing others.","Opposite: a strong response."],"FAP","");
Q("b41","P","m13","behavior",2,"Prairie dogs stop sounding alarms at a harmless sprinkler that turns on daily. This is",
 ["habituation","imprinting","classical conditioning","altruism"],0,
 "Loss of response to a repeated harmless stimulus.",
 ["","No critical period.","No new association formed.","Not a cost to self."],"Habituation","");
Q("b42","P","m13","behavior",1,"Pheromones are used by animals to",
 ["warn others of danger","attract or find mates","recognize kin and mark territory","all of these"],3,
 "Kahoot marked all four uses.",
 ["Partially correct.","Partially correct.","Partially correct.",""],"Pheromones","");
// mating
Q("b43","P","m13","mating",1,"One female mating with several males is",
 ["polygyny","polyandry","monogamy","positive assortative mating"],1,
 "Andr- = male.",
 ["One male, several females.","","One mate.","Like with like."],"Mating systems","");
Q("b44","P","m13","mating",2,"Peahens choose peacocks with the most elaborate tails. This is",
 ["intrasexual selection","intersexual selection","kin selection","stabilizing selection on females"],1,
 "Mate choice by one sex = intersexual.",
 ["Same-sex competition.","","Helping relatives.","Selection is on male tails via female choice."],"Sexual selection","");
Q("b45","P","m13","mating",3,"Using Hamilton's rule, helping is favored for a bird that can give siblings a benefit of 2 offspring at a cost of 0.8 offspring. Is helping favored? (r for siblings = 0.5)",
 ["Yes, rB = 1.0 > C = 0.8","No, rB = 0.4 < C","Yes, because C < B regardless of r","No, because siblings share no genes"],0,
 "rB = 0.5 × 2 = 1.0 > 0.8.",
 ["","Miscalculated rB.","r matters.","Siblings share 0.5."],"Hamilton's rule","");
Q("b46","P","m13","mating",2,"Which relationship has a coefficient of relatedness of about 0.125?",
 ["Parent and offspring","Full siblings","Aunt and niece","First cousins"],3,
 "First cousins share 1/8.",
 ["0.5.","0.5.","0.25.",""],"Relatedness","");
Q("b47","P","m13","mating",3,"Female Seychelles warblers lay more daughter eggs in high-quality territories. Why?",
 ["Daughters disperse and found new territories","Daughters often stay as helpers, which pays off only where food is plentiful","Sons eat less food","It reduces competition among males"],1,
 "Helpers increase success in rich territories but cost food in poor ones (M13 slides 92–94).",
 ["Males are the dispersers.","","Not the reason given.","Not the reason."],"Altruism in warblers","");
Q("b48","P","m13","mating",2,"Monogamy is most likely to evolve when",
 ["males can easily guard many females","offspring survival depends strongly on care from both parents","females need no help","resources are clumped and defended by one male"],1,
 "Biparental care favors monogamy (M13 slide 76).",
 ["Favors polygyny.","","Favors polygyny/promiscuity.","Favors polygyny."],"Mating systems","");

// ---------------- M14 energy
Q("b49","P","m14","energy",1,"Net primary production equals",
 ["GPP + respiration","GPP − producer respiration","total producer biomass","consumer production"],1,
 "NPP = GPP − R.",
 ["Added instead of subtracted.","","NPP is a rate, not standing biomass.","That's secondary production."],"NPP","");
Q("b50","P","m14","energy",2,"Which ecosystem contributes the MOST to global NPP even though its NPP per square meter is low?",
 ["Tropical rainforest","Open ocean","Estuary","Coral reef"],1,
 "Low per area × enormous area = largest total.",
 ["Highest per area on land.","","Very high per area, small total.","Very high per area, small total."],"NPP by ecosystem","");
Q("b51","P","m14","energy",2,"Why must ecosystems receive a continuous input of energy but not of most nutrients?",
 ["Nutrients are created by decomposers","Energy is lost as heat at each transfer, while nutrients are recycled","Energy cycles between trophic levels","Plants store energy permanently"],1,
 "Energy flows; matter cycles.",
 ["Matter can't be created.","","Energy doesn't cycle.","Stored energy is eventually respired."],"Energy vs matter","");
Q("b52","P","m14","energy",3,"You manage 300 acres of patchy temperate forest and meadow. Which action would MOST increase NPP?",
 ["Planting 500 new trees","Introducing 100 rabbits","Relocating all deer","Adding fertilizer to the entire area"],3,
 "Producers are nutrient-limited; fertilizer relieves limitation across all 300 acres (Canvas Q9). Consumers don't raise NPP.",
 ["Helps a little, in a small area.","Herbivores eat producers.","Removing herbivores doesn't increase GPP directly.",""],"Limits to production","");
Q("b53","P","m14","energy",2,"A study encloses part of a natural lake with plastic barriers to test nutrient additions. This approach is a",
 ["holistic study","mesocosm","microcosm","climograph"],1,
 "Partitioning part of a natural ecosystem = mesocosm.",
 ["Holistic uses the whole natural system.","","Microcosm is a lab recreation.","Not a study type."],"Research modes","");
// foodweb
Q("b54","P","m14","foodweb",1,"In a food web, arrows point",
 ["from consumer to the organism it eats","from the organism eaten to the organism that eats it","from decomposers to producers","in random directions"],1,
 "Arrows follow energy flow.",
 ["Backward.","","Not the convention.","No."],"Arrow convention","");
Q("b55","P","m14","foodweb",2,"In the A–H food web shown, which species are primary producers?",
 ["A and B","C and D","E only","H"],0,
 "A and B have no arrows coming in; all their arrows go out.",
 ["","They eat A/B.","E receives from many.","H is a tertiary consumer."],"Reading webs","","foodweb");
Q("b56","P","m14","foodweb",2,"In the A–H food web, which species is most likely a decomposer?",
 ["A","D","E","H"],2,
 "E receives energy from producers and consumers alike and passes none on.",
 ["Producer.","Primary consumer.","","Tertiary consumer."],"Decomposers in webs","","foodweb");
Q("b57","P","m14","foodweb",3,"In the A–H food web, which species are tertiary consumers?",
 ["C and D","F and G","H (and the unlabeled top species that eats G and H)","A and B"],2,
 "H eats secondary consumers F and G. The top node also eats G (tertiary) and H (quaternary).",
 ["Primary.","Secondary.","","Producers."],"Trophic levels","","foodweb");
Q("b58","P","m14","foodweb",3,"In the A–H food web, if D disappeared, which species loses one of its food sources but still has another?",
 ["F","G","H","B"],0,
 "F eats both C and D.",
 ["","G eats only C.","H eats F and G, not D.","B is a producer."],"Web perturbation","","foodweb");
Q("b59","P","m14","foodweb",2,"In a marine food web, zooplankton are most likely",
 ["primary producers","primary consumers","tertiary consumers","decomposers"],1,
 "They eat phytoplankton.",
 ["Phytoplankton are.","","Too high.","They eat living phytoplankton."],"Marine trophic levels","");
Q("b60","P","m14","foodweb",2,"A diagram shows one species at each trophic level connected by single arrows. It is a food chain rather than a food web because",
 ["food webs always include decomposers","the arrows point the wrong way","only one species is represented at each trophic level","food webs never have five levels"],2,
 "A web shows multiple species and connections per level.",
 ["Not the defining difference.","Arrow direction doesn't decide it.","","Webs can have five levels."],"Chain vs web","");
// pyramids
Q("b61","P","m14","pyramids",1,"About what percentage of energy passes from one trophic level to the next?",
 ["1%","10%","50%","90%"],1,
 "The ~10% rule.",
 ["Close to the light→chemical conversion efficiency, not transfer.","","Too high.","That's roughly what is lost."],"10% rule","");
Q("b62","P","m14","pyramids",2,"If producers capture 20,000 kcal, roughly how much is available to secondary consumers?",
 ["2,000 kcal","200 kcal","20 kcal","10,000 kcal"],1,
 "20,000 → 2,000 (primary) → 200 (secondary).",
 ["That's primary consumers.","","That's tertiary.","Wrong efficiency."],"Energy transfer","");
Q("b63","P","m14","pyramids",2,"Why are top predators generally less abundant than herbivores?",
 ["They reproduce faster","Much less energy is available at higher trophic levels","They need less food","They are always endangered by humans"],1,
 "Energy losses at each transfer limit the biomass at the top.",
 ["They usually reproduce slower.","","They need large amounts.","Not the general reason."],"Pyramids","");
Q("b64","P","m14","pyramids",3,"In the open ocean, the standing biomass of zooplankton can exceed that of phytoplankton. How is this possible?",
 ["Zooplankton photosynthesize","Phytoplankton reproduce and are eaten so fast that their standing crop is small even though their production is high","Energy pyramids are inverted in the ocean","The 10% rule doesn't apply in water"],1,
 "Inverted biomass pyramid from rapid turnover; the energy pyramid stays upright.",
 ["They don't.","","Energy pyramids are never inverted.","It applies."],"Inverted biomass pyramids","");
Q("b65","P","m14","pyramids",2,"Food chains rarely exceed 4–5 trophic levels because",
 ["predators would be too large to move","energy transfer between levels is inefficient","decomposers stop working","producers can't support herbivores"],1,
 "Energetic hypothesis.",
 ["Not the main reason.","","Unrelated.","They can."],"Food-chain length","");
Q("b66","P","m14","pyramids",3,"Feeding 1,000 people on grain directly versus on beef from grain-fed cattle requires",
 ["the same cropland","about 10 times more cropland for beef","less cropland for beef","twice as much cropland for grain"],1,
 "Eating one trophic level higher costs ~10× more producer energy.",
 ["Ignores the 10% rule.","","Opposite.","Opposite."],"Ecological footprint","");
// cycles
Q("b67","P","m14","cycles",1,"How does nitrogen enter the living part of an ecosystem?",
 ["Plants absorb N₂ through leaves","Bacteria fix N₂ into ammonia or nitrate","Animals breathe in N₂","Lightning only"],1,
 "Biological nitrogen fixation is the main route (M14.1 slide 32).",
 ["Plants can't use N₂.","","Animals can't use N₂.","Lightning fixes a little but bacteria dominate ⚑."],"Nitrogen fixation","");
Q("b68","P","m14","cycles",2,"Animals obtain the nitrogen they need mainly as",
 ["nitrogen gas","ammonia from the soil","nitrate from water","proteins (amino acids) in food"],3,
 "Animals eat organic N.",
 ["Unusable.","Plants and bacteria use it.","Plants use it.",""],"Nitrogen forms","");
Q("b69","P","m14","cycles",2,"Which element's cycle lacks a significant atmospheric reservoir?",
 ["Carbon","Nitrogen","Phosphorus","Oxygen"],2,
 "Phosphorus cycles through rocks, soil, water and organisms.",
 ["CO₂ is atmospheric.","N₂ is atmospheric.","","O₂ is atmospheric."],"Phosphorus cycle","");
Q("b70","P","m14","cycles",3,"Burning fossil fuels and forests is best described in nutrient-cycle terms as",
 ["a carbon source becoming a sink","carbon sinks being converted into a carbon source","nitrogen fixation","a phosphorus flux into sediment"],1,
 "Stored carbon (sinks) is released faster than absorbed (source).",
 ["Backward.","","Unrelated.","Unrelated."],"Sinks & sources","");
Q("b71","P","m14","cycles",2,"Which two processes move carbon most directly between the atmosphere and living organisms?",
 ["Nitrogen fixation and denitrification","Photosynthesis and cellular respiration","Weathering and sedimentation","Transpiration and evaporation"],1,
 "M14.1 slide 33.",
 ["Nitrogen processes.","","Slow geologic processes.","Water cycle."],"Carbon cycle","");
// eutroph
Q("b72","P","m14","eutroph",1,"Eutrophication first causes a sudden population increase in",
 ["fish","algae and cyanobacteria","top predators","rooted plants in deep water"],1,
 "Nutrients relieve the limit on producers.",
 ["Fish decline.","","Not first.","Shading from blooms harms them."],"Eutrophication","");
Q("b73","P","m14","eutroph",2,"Why does eutrophication lead to low dissolved oxygen?",
 ["Algae consume oxygen at night only","Aerobic decomposers break down large amounts of dead algae, using up O₂","Nitrogen reacts with oxygen","Fish consume more oxygen"],1,
 "Decomposition of the bloom drives hypoxia.",
 ["Night respiration contributes, but decomposition is the main cause.","","Not the mechanism.","Fish are victims, not cause."],"Eutrophication mechanism","");
Q("b74","P","m14","eutroph",3,"Which action would best reduce eutrophication in a river downstream of farms?",
 ["Adding more fish to eat algae","Planting vegetation buffers and reducing fertilizer to cut nutrient runoff","Adding nitrogen to balance phosphorus","Removing all decomposers"],1,
 "Address the cause: nutrient input.",
 ["Treats a symptom; fish die in hypoxia.","","Adds more nutrients.","Impossible and harmful."],"Managing eutrophication","");
Q("b75","P","m14","eutroph",3,"After commercial whaling reduced whale populations, krill populations also declined. Which explanation fits the lecture?",
 ["Whales were krill's competitors","Whale feces released near the surface fertilized phytoplankton that krill eat","Krill eat whales","Whales caused upwelling of warm water"],1,
 "The 'whale pump' brings nutrients to the photic zone (M14.1 slides 39–40).",
 ["Whales eat krill.","","No.","Not the mechanism."],"Nutrient transport","");
Q("b76","P","m14","eutroph",2,"Large regions of the open ocean are limited mainly by which micronutrient?",
 ["Calcium","Iron","Sodium","Oxygen"],1,
 "Iron is a limiting factor in many ocean regions (M14.1 slide 37).",
 ["Not typically limiting.","","Abundant.","Not a nutrient limit on phytoplankton."],"Limiting nutrients","");
// biomag
Q("b77","P","m14","biomag",1,"The increase in concentration of a persistent toxin at each successive trophic level is",
 ["bioremediation","biomagnification","eutrophication","biological augmentation"],1,
 "Definition.",
 ["Organisms cleaning pollution.","","Nutrient enrichment.","Adding materials."],"Biomagnification","");
Q("b78","P","m14","biomag",2,"Why did fish-eating birds such as ospreys have extremely high DDT levels?",
 ["They drank contaminated water","They fed at a high trophic level, so DDT concentrated through the food chain","DDT was sprayed directly on nests","Birds produce DDT"],1,
 "Biomagnification.",
 ["Minor route.","","Not the main reason.","No."],"Biomagnification","");
Q("b79","P","m14","biomag",3,"In the chain phytoplankton → zooplankton → fish → seals → polar bears, which statement is accurate?",
 ["Polar bears are secondary consumers","Seals receive more energy than zooplankton","Polar bears likely carry the highest concentration of persistent pollutants","Phytoplankton have the highest pollutant concentration"],2,
 "Top of the chain = highest biomagnified concentration.",
 ["They're quaternary consumers.","Less energy reaches higher levels.","","Lowest concentration."],"Trophic levels & biomagnification","");
Q("b80","P","m14","biomag",2,"Which property makes a pollutant LIKELY to biomagnify?",
 ["Water-soluble and quickly excreted","Fat-soluble and persistent","Rapidly broken down by bacteria","Gaseous at room temperature"],1,
 "Persistence + fat storage.",
 ["Excreted easily.","","Doesn't persist.","Doesn't stay in tissue."],"Biomagnification","");
// acid
Q("b81","P","m14","acid",1,"Marine calcifiers are especially susceptible to",
 ["eutrophication","ocean acidification","biomagnification","upwelling"],1,
 "Study guide Q40.",
 ["Not specific to calcifiers.","","Not specific.","Upwelling helps productivity."],"Calcifiers","");
Q("b82","P","m14","acid",2,"Ocean acidification reduces calcifiers' ability to build shells because",
 ["warm water dissolves calcium","dissolved CO₂ forms carbonic acid, and the extra H⁺ converts carbonate to bicarbonate","nitrogen runoff dissolves shells","UV radiation breaks down shells"],1,
 "M14.1 slide 35.",
 ["Not the mechanism.","","Not the mechanism.","Not the mechanism."],"Acidification chemistry","");
Q("b83","P","m14","acid",3,"Which statement about ocean acidification is TRUE?",
 ["It leads to greater biomagnification of heavy metals","It is caused by atmospheric carbon dissolving into the ocean","It increases toxic algal blooms","It raises ocean pH"],1,
 "Woolink: the flux of atmospheric carbon dissolving into the ocean. (Coral bleaching is also linked.)",
 ["Not linked.","","Not the lecture's link.","It lowers pH."],"Acidification","");
// threats
Q("b84","P","m14","threats",1,"In E. O. Wilson's acronym HIPPO, the H stands for",
 ["Hunting","Habitat destruction","Human disease","Heat"],1,
 "Habitat destruction, Invasives, Pollution, Population growth, Overharvesting.",
 ["Hunting falls under overharvesting.","","Not in the acronym.","Not in the acronym."],"HIPPO","");
Q("b85","P","m14","threats",2,"An extinction rate of about 1 E/MSY represents",
 ["the current human-caused rate","the background (normal) rate","a mass extinction","zero extinctions"],1,
 "Study guide Q18.",
 ["Current rates are far higher.","","Mass extinctions are far higher.","One per million species per year."],"E/MSY","");
Q("b86","P","m14","threats",2,"Several fishing fleets each catch as much cod as possible from shared waters until the stock collapses. This illustrates",
 ["the shifting baseline","the tragedy of the commons","bioremediation","the competitive exclusion principle"],1,
 "Self-interest on a shared resource → overexploitation.",
 ["About changing perception.","","Unrelated.","Ecological, not economic."],"Tragedy of the commons","");
Q("b87","P","m14","threats",3,"Which threat operates mainly at the ecosystem level, according to the lecture?",
 ["Overharvesting of one fish species","Habitat destruction","Invasive species","Population growth"],1,
 "M14.2 slide 3.",
 ["Population level.","","Community level.","Population level."],"Threat levels","");
Q("b88","P","m14","threats",2,"A species likely to become endangered in the near future is classified as",
 ["extinct","threatened","endemic","keystone"],1,
 "Definition.",
 ["Gone.","","Found in only one place.","An ecological role."],"Threatened vs endangered","");
Q("b89","P","m14","threats",3,"Fishers today consider a catch 'good' that their grandparents would have considered poor. This is",
 ["the tragedy of the commons","a shifting baseline","biomagnification","density dependence"],1,
 "Generational amnesia (Pauly).",
 ["About shared resources.","","Unrelated.","Unrelated."],"Shifting baseline","");
// conserve
Q("b90","P","m14","conserve",1,"The main purpose of wildlife corridors is to",
 ["provide hiking trails","connect fragmented habitat so animals can move and populations stay connected","separate predators from prey","increase edge habitat"],1,
 "Study guide Q19.",
 ["Not the purpose.","","Not the purpose.","Not the purpose."],"Corridors","");
Q("b91","P","m14","conserve",2,"Using bacteria that convert dissolved uranium into an insoluble form at a contaminated site is",
 ["biological augmentation","bioremediation","biomagnification","restoration by dam removal"],1,
 "Organisms detoxifying pollution (Shewanella).",
 ["Augmentation adds missing materials.","","Toxin concentration in food chains.","Different technique."],"Bioremediation","");
Q("b92","P","m14","conserve",2,"Planting nitrogen-fixing legumes on degraded mine soil is an example of",
 ["bioremediation","biological augmentation","biomagnification","eutrophication"],1,
 "Adding essential materials with organisms.",
 ["Bioremediation removes toxins.","","Unrelated.","Unrelated."],"Biological augmentation","");
Q("b93","P","m14","conserve",2,"A biodiversity hotspot is",
 ["any large national park","a relatively small area with exceptional numbers of endemic, threatened species","an area of ocean upwelling","a region with the highest NPP"],1,
 "Definition (≥1,500 endemic plants, severe habitat loss).",
 ["Size isn't the criterion.","","Not the definition.","Not the definition."],"Hotspots","");
Q("b94","P","m14","conserve",3,"Amphibian declines in a watershed alert managers to pollution before other species are affected. Amphibians are serving as",
 ["keystone species","indicator species","foundation species","invasive species"],1,
 "Sensitive species signaling ecosystem threat.",
 ["Not about their community effect.","","Not abundant habitat-formers.","Native."],"Indicator species","");
Q("b95","P","m14","conserve",2,"John Muir is associated with",
 ["preservation: leaving wild areas undisturbed, and founding the Sierra Club","writing Silent Spring","the tragedy of the commons","bioremediation"],0,
 "M14.2 slide 4.",
 ["","Rachel Carson.","Hardin ⚑.","Unrelated."],"Conservation history","");
})(SG.Q);
