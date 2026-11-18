// Study topics, part A: M1 enzymes and M2 receptors/antibodies.
// Built from Week 10 Lecture 2 and Week 11 Lecture 2 with the review sheet.
window.BE = window.BE || {};
BE.topics = BE.topics || [];

BE.topics.push(
{
  id: "enz", m: "m1", title: "Enzymes, active sites & catalysis", heat: 2,
  src: "Week 10 Lecture 2 slides 2–6, 34–37; review MC 1",
  why: "Review MC 1 (optimum temperature) comes straight from here, and every other kinetics question assumes you know what the enzyme is physically doing.",
  know: "An enzyme is a biological catalyst. It does not change where equilibrium sits; it lowers the <b>activation energy</b> so the reaction gets there faster, by binding the <b>transition state</b>.",
  eli5: "A reaction is like getting a boulder over a hill. The enzyme does not make the boulder lighter or move the valley on the far side. It digs a lower pass through the hill, so the same boulder gets over far more often.",
  exam: "<p><b>Active site:</b> a small part of the enzyme surface where substrate binds through <b>non-covalent</b> forces — hydrogen bonds, electrostatic attraction, van der Waals.</p>" +
    "<p><b>Two binding models.</b> <i>Lock-and-key</i>: the substrate already matches a rigid site. <i>Induced fit</i>: binding changes the enzyme's shape to produce the match. Induced fit is the modern answer and the one your receptor lecture reuses.</p>" +
    "<p><b>Temperature:</b> raising it speeds the reaction until the protein <b>denatures</b> (unfolds), after which activity collapses. That is why there is an optimum rather than a steady climb.</p>" +
    "<p><b>Specificity</b> comes in three grades: <i>absolute</i> (one substrate only), <i>relative</i> (a family of related substrates) and <i>stereospecificity</i> (one stereoisomer only, which requires an asymmetric binding site).</p>" +
    "<p><b>Zymogen:</b> an inactive precursor switched on by cutting covalent bonds. Chymotrypsinogen (245 residues, 5 disulfides) is trimmed by trypsin into active chymotrypsin — the cell builds the weapon safe and arms it later.</p>",
  terms: [["Catalyst", "Speeds a reaction without being consumed; does not shift equilibrium"],
          ["Activation energy", "The barrier an enzyme lowers"],
          ["Transition state", "Structure between substrate and product; what the enzyme really binds"],
          ["Active site", "Small surface pocket binding substrate by non-covalent forces"],
          ["Zymogen", "Inactive enzyme precursor activated by cleavage"],
          ["kcat", "Turnover number: molecules of substrate converted per enzyme per second"]],
  traps: ["“Enzymes change the equilibrium” is false. They change the RATE in both directions equally.",
          "On the temperature question, the answer is denaturation, not degradation of side chains.",
          "Lock-and-key vs induced fit gets swapped. Induced fit = the protein changes shape on binding."],
  recall: ["What exactly does an enzyme lower, and what does it leave unchanged?",
           "Name the two models of substrate binding and say which involves a shape change.",
           "Why does enzyme activity fall above the optimum temperature?",
           "What is a zymogen, and how is chymotrypsinogen activated?"],
  one: "An enzyme binds the transition state and lowers activation energy; it speeds the reaction without moving the equilibrium."
},
{
  id: "order", m: "m1", title: "Reaction order: zero, first & second", heat: 3,
  src: "Week 10 Lecture 2 slides 7–11, 13–14; review MC 3 and 4",
  why: "Two of the nine review multiple-choice questions are exactly this, and they are a matched pair: low substrate and saturated enzyme.",
  know: "Reaction <b>order</b> says how the rate responds to concentration. Zero order: rate does not depend on [S]. First order: rate is proportional to [S]. Second order: rate depends on the product of two concentrations, or on one squared.",
  eli5: "Think of a coffee shop. Early in the morning, with two customers in the shop, serving more people per minute just needs more customers to walk in: the rate tracks the queue (first order). At full rush the baristas are flat out; another twenty customers in the queue changes nothing (zero order).",
  exam: "<p><b>Zero order:</b> rate = k[S]⁰ = k. A plot of rate against concentration is a flat line; a plot of concentration against time is a straight line of slope −k. This is what a <b>saturated</b> enzyme does, when every active site is occupied.</p>" +
    "<p><b>First order:</b> rate = k[S]. Doubling substrate doubles the rate. Units of k are s⁻¹. This is an enzyme at <b>low</b> substrate, where most of it sits free.</p>" +
    "<p><b>Second order:</b> rate = k[A][B] or k[A]². Doubling one reactant in the squared case quadruples the rate. Units of k are M⁻¹s⁻¹. Dimerisation counts.</p>" +
    "<p>The lecture's framing to memorise: <b>enzymes follow first-order kinetics at low substrate and zero-order kinetics at saturating substrate.</b> Michaelis-Menten is simply the curve joining those two regimes.</p>",
  compare: { head: ["", "Zero order", "First order", "Second order"],
             rows: [["Rate law", "v = k", "v = k[A]", "v = k[A][B] or k[A]²"],
                    ["Double [A]", "no change", "rate doubles", "rate quadruples (squared case)"],
                    ["Units of k", "M s⁻¹", "s⁻¹", "M⁻¹ s⁻¹"],
                    ["Enzyme case", "saturated, v ≈ Vmax", "low [S]", "two-substrate collision"]] },
  traps: ["The pair of review questions is deliberately symmetrical. Low [S] = FIRST order; saturated = ZERO order. Mixing them up loses two marks at once.",
          "Zero order does not mean the rate is zero. It means the rate is independent of concentration.",
          "Units are a free giveaway: if k is in s⁻¹ the reaction is first order."],
  recall: ["An enzyme is running far below its Km. What order is it, and why?",
           "An enzyme is saturated. What order is it, and what is v approximately equal to?",
           "Give the units of the rate constant for each of the three orders.",
           "Why is a surface-catalysed reaction often zero order?"],
  one: "Low substrate = first order (v rises with [S]); saturated = zero order (v is stuck at Vmax)."
});

BE.topics.push(
{
  id: "mm", m: "m1", title: "Michaelis–Menten: Km, Vmax & Lineweaver–Burk", heat: 3,
  src: "Week 10 Lecture 2 slides 15–22; review MC 5, 6 and 7",
  why: "Three review multiple-choice questions come from this one topic, including the Km formula, which is pure memorisation and therefore free marks.",
  know: "The Michaelis–Menten equation describes how velocity depends on substrate: <b>v₀ = V<sub>max</sub>[S] / (K<sub>M</sub> + [S])</b>. It produces a hyperbola that rises steeply at first and then flattens toward V<sub>max</sub>.",
  eli5: "K<sub>M</sub> is the substrate concentration at which the enzyme is working at half speed. An enzyme with a small K<sub>M</sub> gets to half speed on very little substrate, so it must grab substrate well. A big K<sub>M</sub> means you have to flood it before it gets going.",
  exam: "<p><b>The scheme:</b> E + S ⇌ ES → E + P, with k₁ forming ES, k₋₁ releasing it back, and k₂ making product.</p>" +
    "<p><b>K<sub>M</sub> = (k₋₁ + k₂) / k₁.</b> Numerator = the two ways ES is lost; denominator = the rate it forms. Know this formula letter for letter; review MC 6 asks for it directly.</p>" +
    "<p><b>Meaning of K<sub>M</sub>:</b> the [S] giving ½V<sub>max</sub>, and an estimate of the dissociation constant of E from S. Small K<sub>M</sub> = tight binding; large K<sub>M</sub> = weak binding, so you need more substrate.</p>" +
    "<p><b>V<sub>max</sub></b> is the theoretical maximum, reached only if every enzyme molecule were bound at once; it is approached asymptotically. V<sub>max</sub> = k₂[E]<sub>T</sub>.</p>" +
    "<p><b>The ES complex has two fates</b> (review MC 7): back to E + S, or forward to E + P. Any answer containing “always” is wrong.</p>" +
    "<p><b>Lineweaver–Burk:</b> take reciprocals to get a straight line, 1/v against 1/[S], with slope K<sub>M</sub>/V<sub>max</sub> and y-intercept 1/V<sub>max</sub>. It exists because V<sub>max</sub> is hard to measure directly from the curve.</p>" +
    "<p><b>k<sub>cat</sub></b> is the turnover number, and <b>k<sub>cat</sub>/K<sub>M</sub></b> is catalytic efficiency, how well the enzyme performs when substrate is scarce. Its ceiling is the diffusion limit, about 10⁸–10⁹ M⁻¹s⁻¹.</p>",
  terms: [["K<sub>M</sub>", "(k₋₁ + k₂)/k₁; the [S] at ½V<sub>max</sub>; lower = tighter apparent binding"],
          ["V<sub>max</sub>", "Theoretical maximum velocity, = k₂[E]<sub>T</sub>, approached asymptotically"],
          ["k<sub>cat</sub>", "Turnover number: substrate molecules converted per enzyme per unit time"],
          ["k<sub>cat</sub>/K<sub>M</sub>", "Catalytic efficiency; matters at low [S]; capped by diffusion"],
          ["Lineweaver–Burk", "1/v vs 1/[S]: slope K<sub>M</sub>/V<sub>max</sub>, y-intercept 1/V<sub>max</sub>"]],
  traps: ["Do not write K<sub>M</sub> = (k₁ + k₂)/k₋₁. The minus-one goes on TOP with k₂.",
          "A LOW K<sub>M</sub> means tight binding. The inverse relationship catches people out.",
          "V<sub>max</sub> is never actually reached, only approached.",
          "On the E-S complex question, eliminate every option containing “always”."],
  recall: ["Write the Michaelis–Menten equation from memory.",
           "Write the K<sub>M</sub> expression in terms of k₁, k₋₁ and k₂.",
           "What does a low K<sub>M</sub> tell you about the enzyme?",
           "What are the slope and y-intercept of a Lineweaver–Burk plot?",
           "What are the two possible fates of the ES complex?"],
  one: "v₀ = V<sub>max</sub>[S]/(K<sub>M</sub>+[S]); K<sub>M</sub> = (k₋₁+k₂)/k₁ = the [S] at half V<sub>max</sub>; low K<sub>M</sub> means tight binding."
},
{
  id: "inh", m: "m1", title: "Enzyme inhibition: competitive, noncompetitive, irreversible", heat: 3,
  src: "Week 10 Lecture 2 slides 23–24; review MC 8 and 9",
  why: "Two review multiple-choice questions, and the effects on K<sub>M</sub> and V<sub>max</sub> are the kind of detail that is easy to state precisely and easy to lose marks on.",
  know: "A <b>reversible</b> inhibitor binds and can be released. A <b>competitive</b> one occupies the active site; a <b>noncompetitive</b> one binds elsewhere and changes the enzyme's shape. An <b>irreversible</b> inhibitor makes or breaks covalent bonds and the enzyme cannot be recovered.",
  eli5: "Competitive inhibition is someone standing in the only doorway: push enough of your own people through and you still get everyone in eventually. Noncompetitive is someone bending the door frame from outside: no amount of queuing fixes it, the doorway is just narrower now.",
  exam: "<p><b>Competitive:</b> resembles the substrate, binds the active site, and is out-competed by more substrate. <b>K<sub>M</sub> increases</b> (you need more substrate to reach half speed) but <b>V<sub>max</sub> is unchanged</b> (flood it and you still get there).</p>" +
    "<p><b>Noncompetitive:</b> binds a site other than the active site and inhibits by changing conformation. <b>V<sub>max</sub> falls</b> and <b>K<sub>M</sub> is unchanged</b>. Review MC 9 asks for the defining feature: it binds away from the active site.</p>" +
    "<p><b>Irreversible:</b> reacts covalently to produce a protein that is not enzymatically active and <b>from which the original enzyme cannot be regenerated</b> — that is the exact wording of the correct option in review MC 8.</p>" +
    "<p><b>Feedback inhibition</b> is the pathway-level version: the end product inhibits an earlier enzyme allosterically, keeping output steady. Tryptophan doing this to its own pathway opens the Week 13 lecture.</p>",
  compare: { head: ["", "Competitive", "Noncompetitive", "Irreversible"],
             rows: [["Where it binds", "Active site", "Another site", "Covalent, anywhere critical"],
                    ["Looks like substrate?", "Yes", "No", "Not necessarily"],
                    ["K<sub>M</sub>", "Increases", "Unchanged", "—"],
                    ["V<sub>max</sub>", "Unchanged", "Decreases", "—"],
                    ["Beaten by more substrate?", "Yes", "No", "No"],
                    ["Enzyme recoverable?", "Yes", "Yes", "No"]] },
  traps: ["Competitive raises K<sub>M</sub>; noncompetitive lowers V<sub>max</sub>. Swapping these is the most common error in the topic.",
          "“Structurally related to the substrate” describes a COMPETITIVE inhibitor, and appears as a distractor on the noncompetitive question.",
          "Irreversible is defined by the enzyme not being regenerable, not by temperature or by which residue is hit."],
  recall: ["For each inhibitor type, say what happens to K<sub>M</sub> and to V<sub>max</sub>.",
           "Which type can be overcome by adding more substrate, and why?",
           "Give the defining property of an irreversible inhibitor.",
           "What is feedback inhibition and where does the lecture show it?"],
  one: "Competitive: active site, K<sub>M</sub> up, V<sub>max</sub> same. Noncompetitive: elsewhere, V<sub>max</sub> down, K<sub>M</sub> same. Irreversible: covalent, no recovery."
});

BE.topics.push(
{
  id: "allo", m: "m1", title: "Allosteric enzymes & cooperativity", heat: 3,
  src: "Week 10 Lecture 2 slides 25–33; review MC 2",
  why: "Review MC 2 (aspartate transcarbamoylase) is here, and the sigmoid-versus-hyperbola distinction is the fastest way to recognise an allosteric enzyme on a graph.",
  know: "<b>Allosteric</b> means “other shape”. An allosteric enzyme is an oligomer with several binding sites whose activity is changed by effectors binding away from the active site. Its rate curve is <b>sigmoidal</b>, not hyperbolic.",
  eli5: "A normal enzyme is a single turnstile: each person goes through independently. An allosteric enzyme is a row of turnstiles wired together — once one opens, the rest become easier to open. That is why the curve starts slow, then takes off: it is a switch, not a dial.",
  exam: "<p><b>Shape is the giveaway.</b> Hyperbolic = non-allosteric, ordinary Michaelis–Menten. <b>Sigmoidal = allosteric and cooperative.</b> ATCase is the lecture's example, which is exactly what review MC 2 asks about.</p>" +
    "<p><b>Two conformations:</b> <b>R</b> (relaxed) binds substrate well and is active; <b>T</b> (tight/taut) releases substrate easily and is inactive. Without substrate most molecules sit in T.</p>" +
    "<p><b>Concerted model:</b> all subunits flip from T to R <b>simultaneously</b>. Substrate binding shifts the equilibrium toward R. Constants: L is the T/R ratio when unbound (large L = mostly T to begin with), and c = K<sub>R</sub>/K<sub>T</sub>. If c approaches 1 both forms bind equally and the enzyme stops behaving allosterically.</p>" +
    "<p><b>Sequential model:</b> binding induces the change one subunit at a time, following induced fit. Inhibitor binding can give <b>negative</b> cooperativity.</p>" +
    "<p><b>Effectors:</b> an allosteric <b>activator</b> binds the R form and pulls the equilibrium toward R; an allosteric <b>inhibitor</b> binds the T form and pulls it toward T. For ATCase, ATP speeds it up and CTP slows it down.</p>",
  compare: { head: ["", "Non-allosteric", "Allosteric"],
             rows: [["Rate vs [S] curve", "Hyperbolic", "Sigmoidal"],
                    ["Subunits", "Works as one site", "Oligomer, multiple sites"],
                    ["Cooperativity", "None", "Binding one helps the next"],
                    ["Regulation", "Substrate only", "Activators and inhibitors at other sites"],
                    ["Example", "Typical MM enzyme", "Aspartate transcarbamoylase"]] },
  traps: ["On MC 2 the answer is sigmoidal/allosteric. “Hyperbolic, characteristic of a nonallosteric enzyme” is the tempting distractor, and it is the opposite.",
          "R = Relaxed = active. T = Tight = inactive. Remember R for Ready.",
          "Activator binds R, inhibitor binds T. Each stabilises the form it prefers."],
  recall: ["What shape is the rate curve of an allosteric enzyme, and what shape for a non-allosteric one?",
           "Which conformation is active, R or T, and which dominates without substrate?",
           "In the concerted model, do subunits change one at a time or together?",
           "Which form does an allosteric activator bind? And an inhibitor?"],
  one: "Sigmoidal curve = allosteric and cooperative; R is relaxed and active, T is tight and inactive, and effectors work by stabilising one or the other."
},
{
  id: "flux", m: "m1", title: "Metabolic flux analysis", heat: 1,
  src: "Week 10 Lecture 2 slides 38–44",
  why: "Not on the review sheet, but it closes the enzymes lecture and the review warns that lecture material outside the handout will appear. It also connects directly to metabolic engineering.",
  know: "<b>Flux</b> is the rate at which material moves through a pathway. Flux analysis models a metabolic network as a graph: nodes are metabolite concentrations, edges are the fluxes between them, mediated by enzymes.",
  eli5: "Think of the cell's metabolism as a water network. Flux analysis is not about how much water sits in each tank, it is about how fast water moves down each pipe. You usually cannot measure every pipe, so you assume the tank levels are steady and work out the flows that are consistent with what goes in and comes out.",
  exam: "<p><b>Why a steady-state assumption:</b> real kinetic parameters for every enzyme are impractical to measure, so there is not enough information for a real-time model. Assuming concentrations do not change with time turns it into a solvable, time-invariant problem.</p>" +
    "<p><b>The components:</b> a stoichiometry matrix, a flux vector and a concentration vector. Internal flux edges stay inside the system boundary; external ones cross it.</p>" +
    "<p><b>Signs at steady state:</b> substrate change is usually negative (consumed), metabolic product change is usually positive (made), and an intracellular metabolite can go either way.</p>" +
    "<p><b>Four categories</b> of compound: biomass (cellulose), substrate (glucose), intracellular metabolites and cofactors (pyruvate), and metabolic products (ethanol, acetate).</p>" +
    "<p><b>Seahorse analyser:</b> measures cellular bioenergetics in live cells, not metabolites directly. <b>OCR</b> (oxygen consumption rate) reports mitochondrial respiration; <b>ECAR</b> (extracellular acidification rate) reports glycolysis, because pyruvate converted to lactate releases protons.</p>",
  terms: [["Flux", "Conversion rate along one edge of the network, per unit time"],
          ["Stoichiometry matrix", "Encodes which reactions consume and produce which metabolites"],
          ["Steady state", "Assumption that concentrations stop changing with time"],
          ["OCR", "Oxygen consumption rate; proxy for mitochondrial respiration"],
          ["ECAR", "Extracellular acidification rate; proxy for glycolysis"]],
  traps: ["A Seahorse analyser measures RATES (oxygen use, acidification), not metabolite concentrations.",
          "ECAR tracks glycolysis via lactate and protons; OCR tracks respiration. Do not swap them.",
          "Flux is a rate, not an amount."],
  recall: ["Why is a steady-state assumption needed for flux analysis?",
           "What do OCR and ECAR each report on?",
           "At steady state, what sign would you expect for the change in substrate, and in product?"],
  one: "Flux analysis models pathway rates with a steady-state assumption, because measuring every kinetic parameter is impractical."
});

BE.topics.push(
{
  id: "rec", m: "m2", title: "Receptors, ligands & induced fit", heat: 3,
  src: "Week 11 Lecture 2 slides 2–8, 17–20; review true statements 1–4",
  why: "The review opens with four statements straight from these slides, and they are worded almost exactly as the lecture has them, so a single swapped word is the likely trap.",
  know: "A <b>receptor</b> is a protein that binds a specific <b>ligand</b>. Binding happens in a cleft on the surface through intermolecular bonds, causes an <b>induced fit</b>, and the shape change sets off <b>signal transduction</b> inside the cell. The ligand then leaves, unchanged.",
  eli5: "A receptor is a doorbell. The ligand presses it, which does not involve the visitor coming inside or being changed; the press just triggers a chain of events in the house. Then the visitor takes their finger off the button and walks away.",
  exam: "<p><b>The binding site</b> is a hollow or cleft on the surface, equivalent to an enzyme's active site <b>except that no chemistry happens there</b>. It holds amino acids complementary to the messenger, binding it non-covalently.</p>" +
    "<p><b>The sequence to memorise:</b> ligand binds → intermolecular bonds form → induced fit (the receptor changes shape) → domino effect → signal transduction → a chemical signal is received inside the cell.</p>" +
    "<p><b>The ligand does not enter the cell</b> and is not permanently bound. It departs unchanged; that reversibility is the point of statement 4.</p>" +
    "<p><b>Affinity</b> depends on structural, electrical and chemical complementarity. Binding must be strong enough to hold the ligand long enough for transduction (k<sub>on</sub>) but weak enough to let it go (k<sub>off</sub>). K<sub>d</sub> is the ratio; a smaller K<sub>d</sub> means tighter binding, which is how blocking drugs are designed.</p>" +
    "<p><b>Agonist</b> mimics or increases the ligand's effect; <b>antagonist</b> blocks or decreases it. A <b>competitive</b> antagonist takes the same site; a <b>noncompetitive</b> antagonist takes a different site — the same logic as enzyme inhibitors.</p>",
  terms: [["Ligand", "The molecule a receptor recognises: hormone, neurotransmitter, drug, odorant"],
          ["Binding site", "Surface cleft; like an active site but no catalysis"],
          ["Induced fit", "Shape change of the receptor caused by binding"],
          ["Signal transduction", "The domino effect carrying the message inside the cell"],
          ["K<sub>d</sub>", "k<sub>off</sub>/k<sub>on</sub>; smaller means tighter binding"],
          ["Agonist / antagonist", "Mimics the ligand / blocks it"]],
  traps: ["The ligand does NOT need to enter the cell, and is NOT permanently bound. Both appear as flipped statements.",
          "A binding site is not an active site: no reaction takes place there.",
          "Smaller K<sub>d</sub> = tighter binding. The inverse relationship catches people out, exactly like K<sub>M</sub>."],
  recall: ["Recite the chain from ligand binding to a signal inside the cell.",
           "How is a receptor binding site like an enzyme active site, and how is it different?",
           "What does a smaller K<sub>d</sub> mean?",
           "Distinguish a competitive from a noncompetitive antagonist."],
  one: "Ligand binds a surface cleft via non-covalent bonds → induced fit → signal transduction; the ligand leaves unchanged and never has to enter the cell."
},
{
  id: "forces", m: "m2", title: "Non-covalent forces, water & specificity", heat: 3,
  src: "Week 11 Lecture 2 slides 9–16; review true statements 5–10",
  why: "Six review statements come from these eight slides, the densest hit rate on the whole sheet. The entropy and water-displacement ideas are the ones people get wrong.",
  know: "Molecular recognition runs on <b>non-covalent</b> interactions: individually weak and easy to break, but <b>collectively strong</b>. They are short range, so the two surfaces must be complementary.",
  eli5: "One strip of Velcro hook does almost nothing. Thousands of them, lined up so every hook meets a loop, make a join you cannot pull apart by hand. That is non-covalent binding: no single bond matters, the fit of the whole surface does.",
  exam: "<p><b>The force list:</b> hydrogen bonds; electrostatic (salt bridges, ionic); pi interactions (pi-pi stacking, cation-pi, OH-pi); van der Waals, which covers hydrophobic contacts and steric repulsion.</p>" +
    "<p><b>Van der Waals:</b> optimising contact distance maximises <b>induced dipole – induced dipole</b> attraction in hydrophobic regions. That exact phrase is review statement 6.</p>" +
    "<p><b>Hydrogen bonds</b> depend on length (under 2.5 Å strong, over 2.8 Å weak) and on being linear. Donor/acceptor complementarity drives specificity, and leaving unpaired polar groups costs you.</p>" +
    "<p><b>Water is an active participant.</b> It can bridge an H-bond between groups otherwise out of reach. Solvation and desolvation are <b>critical regulators of binding affinity</b>.</p>" +
    "<p><b>The entropy argument</b> (statement 9, and the one most often misunderstood): non-polar surfaces force nearby water into an ordered, low-entropy cage with unsatisfied hydrogen bonds. Releasing that water when a hydrophobic interface forms is <b>entropically favourable</b>, and it also offsets the entropy lost when the two partners lose freedom of movement.</p>" +
    "<p><b>Specificity</b> limits non-specific interactions, preventing false positives for sensors, high background for imaging agents and side effects for drugs. Note the nuance: simply making the interface bigger raises affinity but <b>not necessarily specificity</b>, because weak off-target contacts also add up.</p>",
  terms: [["Non-covalent", "Weak individually, strong together; H-bond, ionic, pi, van der Waals"],
          ["Desolvation", "Stripping water off a surface before binding; regulates affinity"],
          ["Hydrophobic effect", "Releasing ordered water gives an entropy gain"],
          ["Avidity", "Several low-affinity interactions summing to a strong one"],
          ["Specificity", "Binding the intended target and not others"]],
  traps: ["Statement 9 is about ENTROPY. Crediting enthalpy alone for the hydrophobic effect is the trap.",
          "Non-covalent bonds are individually WEAK, collectively strong. A reversed version reads plausibly.",
          "A bigger binding interface does not automatically mean more specific.",
          "Learn the three consequences of poor specificity in the lecture's order: sensors, imaging, drugs."],
  recall: ["Name four classes of non-covalent interaction used in recognition.",
           "Why does releasing water from a hydrophobic interface help binding?",
           "What can a single water molecule do for two groups that cannot reach each other?",
           "Give the three problems that poor specificity causes."],
  one: "Recognition is many weak non-covalent contacts over complementary surfaces, and displacing ordered water from a hydrophobic interface pays for it entropically."
});

BE.topics.push(
{
  id: "rtypes", m: "m2", title: "Receptor types: GPCR, kinase-linked, ion channel", heat: 2,
  src: "Week 11 Lecture 2 slides 21–37",
  why: "Seventeen slides and not one review statement, which is exactly the pattern the review warns about when it says lecture material outside the handout will appear.",
  know: "Three families: <b>G-protein-coupled receptors</b>, <b>kinase-linked receptors</b> and <b>ion channel receptors</b>. All three start the same way — ligand binds, induced fit — and differ in what the shape change opens up.",
  eli5: "Same doorbell, three different wirings. One rings a bell that sets off a relay of servants (GPCR). One flips a switch that the receptor itself is wired to, so it starts stamping documents (kinase). One simply unlocks a gate and lets a crowd through (ion channel).",
  exam: "<p><b>GPCR:</b> seven transmembrane helices. Ligand binding opens a site for a <b>G-protein</b>, a GTP-binding heterotrimer. The G-protein binds GTP and splits into a monomer and a dimer, which is the active state. Subunits activate membrane-bound enzymes; eventually the G-protein hydrolyses its GTP and reassembles as the inactive trimer.</p>" +
    "<p><b>The canonical cascade:</b> external signal → receptor → transducer → primary effector → second messenger → secondary effector. Worked example: norepinephrine → beta-adrenergic receptor → G<sub>s</sub> → adenylyl cyclase → cAMP → protein kinase A. PKA's recognition site is Arg-Arg-X-Ser.</p>" +
    "<p><b>Kinase-linked (tyrosine kinase):</b> the protein is both receptor and enzyme. EGF receptor is the example: ligand binding causes <b>dimerisation</b>, which opens the kinase active sites, and each half phosphorylates tyrosines on the other half. Those phosphorylated patches then recruit further signalling proteins.</p>" +
    "<p><b>Ion channel:</b> induced fit rotates the <b>TM2</b> segments, which line the central pore, and the gate opens to let ions through.</p>" +
    "<p><b>Where the ligand binds a GPCR</b> varies: monoamines in a pocket within the helices; peptide hormones at the helix tops plus extracellular loops and N-terminus; glutamate at the N-terminal chain.</p>",
  compare: { head: ["", "GPCR", "Kinase-linked", "Ion channel"],
             rows: [["What opens", "Site for a G-protein", "Its own kinase active site", "A pore through the membrane"],
                    ["Key step", "G-protein binds GTP and splits", "Receptor dimerises, self-phosphorylates", "TM2 segments rotate"],
                    ["Carries the message", "Second messenger (cAMP)", "Phosphorylated tyrosines", "Ion flow"],
                    ["Example", "Beta-adrenergic / norepinephrine", "EGF receptor", "Ligand-gated channels"]] },
  traps: ["A tyrosine kinase receptor must DIMERISE before it is active; a monomer does nothing.",
          "The G-protein is active when split and GTP-bound, inactive when reassembled as a GDP trimer.",
          "TM2 is the segment lining the pore."],
  recall: ["Walk through GPCR activation from ligand to second messenger.",
           "Why must an EGF receptor dimerise?",
           "Which transmembrane segment lines an ion channel pore?",
           "Name the five stages of the general signalling cascade."],
  one: "All three receptor families begin with induced fit; GPCRs release a split G-protein, kinase receptors dimerise and self-phosphorylate, and channels rotate TM2 to open a pore."
},
{
  id: "ab", m: "m2", title: "Antibody structure: variable regions, CDRs, Fab & Fc", heat: 3,
  src: "Week 11 Lecture 2 slides 38–57; review true statements 11, 13, 14, 15",
  why: "Four review statements, and the structure underpins both ELISA in Lab 4 and phage display later in the course.",
  know: "Antibodies are <b>immunoglobulins</b>: Y-shaped proteins of <b>2 heavy + 2 light chains</b>. The arms bind antigen; the tail carries biological activity. Antigen binding is determined by the amino acid sequence of the <b>variable region</b>, and variability is concentrated in the <b>CDRs</b>.",
  eli5: "Picture a Y made of two long arms and two short ones clipped alongside. The tips of the Y are custom-made for one target and differ between antibodies; the stem is standard issue and is the part the immune system's other cells grab hold of.",
  exam: "<p><b>Chains:</b> light chain is 214 amino acids in two domains (V<sub>L</sub> + C<sub>L</sub>); heavy chain is 445 amino acids in four domains (V<sub>H</sub> + three C<sub>H</sub>). The evidence came from myeloma sequencing: the N-terminal domain varied, the C-terminal domains did not.</p>" +
    "<p><b>Two functions</b> (statement 14): specific binding to antigen eliciting a response, and biological activity that recruits effector cells to where the antibody has accumulated.</p>" +
    "<p><b>CDRs:</b> variability is <b>not spread evenly</b> through the variable region but sits in three complementarity determining regions per chain, which together form the binding site. Between them are the framework regions. On the heavy chain: CDR1 at 31–35, CDR2 at 50–65, CDR3 at 95–102.</p>" +
    "<p><b>Hinge region:</b> rich in cysteine (interchain disulfides) and proline (prevents globular folding, so the arms stay flexible). Flexibility lets the two arms reach epitopes that are not perfectly spaced. Being exposed, the hinge can be cut by proteases such as <b>papain</b>, which generates the <b>Fab</b> and <b>Fc</b> fragments.</p>" +
    "<p><b>Division of labour:</b> F(ab)₂ detects, precipitates and blocks antigen; <b>Fc</b> activates inflammatory and complement effector functions and traffics antigen into processing pathways.</p>",
  terms: [["Immunoglobulin", "The protein class antibodies belong to"],
          ["Variable region", "Sequence here determines what antigen is bound"],
          ["CDR", "Complementarity determining region; the three variable loops per chain forming the site"],
          ["Framework region", "The relatively constant stretches between CDRs"],
          ["Fab / Fc", "Antigen-binding arm / constant tail, separated by papain at the hinge"],
          ["Hinge", "Cys- and Pro-rich flexible neck between the arms"]],
  traps: ["Binding specificity comes from the VARIABLE region. “Constant region” is the swap-trap on statement 13.",
          "Variability is CONCENTRATED in CDRs, not evenly distributed; statement 15 is worded to test precisely that.",
          "Papain cuts at the hinge to give Fab and Fc. Know which fragment does which job."],
  recall: ["How many heavy and light chains, and which part binds antigen?",
           "What does CDR stand for and how many are there per chain?",
           "Which two amino acids dominate the hinge, and what does each contribute?",
           "State the antibody's two functions as the review words them."],
  one: "Two heavy + two light chains; the variable region sets specificity, with variability concentrated in three CDRs per chain, and the Fc tail recruits effector cells."
},
{
  id: "iso", m: "m2", title: "Antibody classes: IgG, IgM, IgA, IgD, IgE", heat: 2,
  src: "Week 11 Lecture 2 slides 58–64; review true statement 12",
  why: "One review statement just lists the five, which is an easy mark, but the lecture spends seven slides on their differences and the review warns that lecture detail appears on the exam.",
  know: "Five classes: <b>IgG, IgM, IgA, IgD, IgE</b>, distinguished by their heavy chain (gamma, mu, alpha, delta, epsilon). Each has a different half-life, location and job.",
  eli5: "Five versions of the same tool for different jobs. IgG is the general-purpose one that circulates everywhere and is the only one crossing into a fetus. IgM is the big first responder. IgA guards wet surfaces. IgE handles allergy. IgD's job is still unclear.",
  exam: "<p><b>IgG:</b> four subclasses, half-life about 21–24 days (IgG3 only 7–8), the bulk of serum immunoglobulin, and the <b>only class with transplacental transfer</b>. IgG3 activates complement most strongly, IgG4 not at all.</p>" +
    "<p><b>IgM:</b> mu heavy chain, about 10% of serum Ig, the <b>strongest classical-pathway complement activator</b>. Monomeric IgM has valency 2 and low affinity; <b>pentameric IgM has valency 10</b> and high avidity — the textbook illustration of avidity beating affinity.</p>" +
    "<p><b>IgA:</b> the most produced daily of any class (5–15 g/day in mucus). Works at external secretions: saliva, mucus, sweat, gastric fluid, tears. Plasma cells release it, it binds the poly-Ig receptor, and cleavage leaves the <b>secretory component</b> that protects it from proteolysis. Without that piece it stays a monomer in serum.</p>" +
    "<p><b>IgD:</b> co-expressed with IgM on B cells through differential RNA splicing; its role in host defence is unknown; the extended hinge makes it protease-sensitive.</p>" +
    "<p><b>IgE:</b> lowest serum level by far, mostly absorbed onto high-affinity receptors on mast cells, eosinophils and basophils, and tied to allergic disease. Has an extra heavy-chain domain and no hinge region.</p>",
  compare: { head: ["Class", "Heavy chain", "Signature fact"],
             rows: [["IgG", "gamma", "Most abundant in serum; only class crossing the placenta"],
                    ["IgM", "mu", "Best classical complement activator; pentamer, valency 10"],
                    ["IgA", "alpha", "Most produced per day; secretions; secretory component"],
                    ["IgD", "delta", "On naive B cells with IgM; function unknown"],
                    ["IgE", "epsilon", "Rarest in serum; mast cells; allergy; no hinge"]] },
  trick: "<b>GAMED</b> — IgG, IgA, IgM, IgE, IgD. If a question offers a sixth class such as “IgK”, it is invented.",
  traps: ["A light chain is kappa OR lambda, never both on the same antibody.",
          "IgM's strength is avidity from valency 10, not high affinity per site.",
          "Only IgG crosses the placenta."],
  recall: ["List the five classes and their heavy chains.",
           "Which class crosses the placenta? Which activates complement best?",
           "What does the secretory component do for IgA?",
           "Why is pentameric IgM effective despite low per-site affinity?"],
  one: "GAMED: IgG (abundant, placenta), IgM (pentamer, complement), IgA (secretions), IgD (B-cell surface, unclear), IgE (allergy, mast cells)."
});
