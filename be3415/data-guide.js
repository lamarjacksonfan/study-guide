// Review guide: the professor's review sheet, explained concept by concept.
// items use short refs: t = true statement, m = multiple choice, o = other question.
window.BE = window.BE || {};
BE.guide = [];
BE.guide.push(
{
  id: "g-receptors", title: "Receptors and ligands", topics: ["rec", "rtypes"],
  items: ["t1", "t2", "t3", "t4"],
  idea: "<p>A receptor is a protein that waits for one specific chemical messenger, the ligand, and passes the news into the cell. The four statements describe one sequence in order: <b>bind, reshape, relay, release</b>.</p>" +
    "<p>The ligand fits into a hollow or cleft on the receptor surface and is held by non-covalent bonds. Holding it makes the receptor change shape slightly so the fit improves. That is <b>induced fit</b>. The shape change sets off a chain of events inside the cell called <b>signal transduction</b>. The ligand never has to go inside, and afterwards it simply lets go.</p>",
  points: ["The binding site is like an enzyme's active site, except nothing is converted there.",
           "The bonds are intermolecular (non-covalent), so binding is reversible.",
           "The message crosses the membrane as a change in the receptor's shape, not as the ligand itself."],
  twists: ["“The ligand must enter the cell to deliver its signal” (false).",
           "“The ligand is permanently bound” or “is chemically changed” (false).",
           "“Lock-and-key fit” in place of induced fit.",
           "Calling the binding site an “active site” where a reaction takes place."],
  test: [["Why does the ligand not need to enter the cell?", "The receptor changes shape on binding, and that shape change relays the message inward. The ligand stays outside and leaves unchanged."],
         ["What is the difference between a receptor binding site and an enzyme active site?", "Both are clefts that bind a molecule non-covalently. At an active site a reaction happens; at a receptor binding site none does."],
         ["Name the three words in the chain after the ligand binds.", "Induced fit, then signal transduction (the domino effect), ending with a chemical signal inside the cell."]]
},
{
  id: "g-forces", title: "Weak forces, water and specificity", topics: ["forces"],
  items: ["t5", "t6", "t7", "t8", "t9", "t10"],
  idea: "<p>Binding between a protein and its partner is made of many weak, non-covalent contacts: hydrogen bonds, ionic attraction, pi interactions and van der Waals forces. Any single contact is easy to break. <b>Together over a well-matched surface they are strong.</b></p>" +
    "<p>Water matters as much as the contacts. A water molecule can bridge a hydrogen bond between two groups that cannot reach each other. Surfaces must also be stripped of their water (desolvation) before they can bind, so solvation and desolvation regulate how tightly something binds. When a surface is hydrophobic, water next to it is forced into an ordered, low-entropy arrangement. Releasing that water when the interface forms <b>gains entropy</b>, which helps binding.</p>" +
    "<p>Specificity means binding the intended target and little else. Without it, sensors give false positives, imaging agents give high background and drugs cause side effects.</p>",
  points: ["Van der Waals: optimising contact distance maximises induced dipole to induced dipole attraction in hydrophobic regions.",
           "Water can act as a hydrogen-bond bridge.",
           "Releasing ordered water from a hydrophobic interface is favourable for entropy.",
           "The three costs of poor specificity: false positives (sensors), high background (imaging), side effects (drugs)."],
  twists: ["“Individually strong, collectively weak” (reversed).",
           "Crediting the hydrophobic effect to enthalpy only, or saying water release is unfavourable.",
           "“Water plays no role in binding.”",
           "Swapping hydrophobic for hydrophilic regions in the van der Waals statement."],
  test: [["Why do many weak bonds add up to strong binding?", "Each contact is weak and breakable, but a complementary surface makes dozens of them at once, and together they hold firmly."],
         ["Why is releasing water from a hydrophobic interface favourable?", "Water beside a non-polar surface is ordered and low in entropy. Freeing it raises entropy, which pays for part of the binding."],
         ["What goes wrong with a drug that is not specific?", "It binds other targets as well, which shows up as side effects."]]
},
{
  id: "g-antibodies", title: "Antibodies", topics: ["ab", "iso"],
  items: ["t11", "t12", "t13", "t14", "t15"],
  idea: "<p>Antibodies are <b>immunoglobulins</b>, Y-shaped proteins built from two heavy and two light chains. There are five classes: <b>IgG, IgM, IgA, IgD and IgE</b>.</p>" +
    "<p>The Y does two jobs. The tips of the arms bind the antigen, and the tail recruits cells and other immune machinery to where the antibody has landed. Which antigen is bound is decided by the <b>variable region</b>. Within the variable region the differences between antibodies are not spread evenly. They are packed into three loops per chain called the <b>CDRs</b> (complementarity determining regions), which together form the binding site. The stretches between them are the framework regions and stay fairly constant.</p>",
  points: ["Variable region sets specificity; constant region handles effector functions.",
           "Variation is concentrated in the CDRs.",
           "Two functions: bind antigen, and recruit effector cells.",
           "GAMED lists the five classes: IgG, IgA, IgM, IgE, IgD."],
  twists: ["“Determined by the constant region.”",
           "“Variability is evenly distributed across the variable region.”",
           "A sixth class invented in the list of five.",
           "Giving only one of the two functions."],
  test: [["Which part of an antibody decides what it binds?", "The variable region, specifically the CDR loops within it."],
         ["What do CDR and framework regions each do?", "CDRs vary a lot and form the antigen-binding site. Framework regions stay relatively constant and hold the loops in position."],
         ["State the two functions of an antibody molecule.", "It binds a specific antigen and elicits a response, and through its tail it binds cells to recruit them to the antigen site."]]
},
{
  id: "g-vectors", title: "Plasmids and the three kinds of vector", topics: ["vec", "lib"],
  items: ["t16", "t17", "t18", "t19", "t32"],
  idea: "<p>A plasmid is a circular DNA molecule that copies itself inside a host and can pass to other cells. It only replicates in a host whose machinery recognises its <b>origin of replication (ori)</b>.</p>" +
    "<p>Vectors are plasmids put to work, and the three types differ by purpose:</p><ul>" +
    "<li><b>Cloning vector:</b> insert foreign DNA and make many copies of it.</li>" +
    "<li><b>Expression vector:</b> make mRNA, and so protein. It must have a <b>promoter</b> to start transcription and a <b>terminator</b> to stop it.</li>" +
    "<li><b>Shuttle vector:</b> carries genes between two different organisms, for example grown in bacteria then used in yeast or human cells.</li></ul>" +
    "<p>To make a eukaryotic protein in E. coli, use the <b>cDNA</b> (bacteria cannot remove introns) in an expression vector with a promoter, a ribosome binding site and ideally a terminator.</p>",
  points: ["Cloning = copies of DNA. Expression = protein.",
           "Promoter starts transcription; terminator stops it.",
           "Compatible ori needed for replication in a given host.",
           "Eukaryotic gene in E. coli: cDNA + promoter + ribosome binding site + terminator."],
  twists: ["Swapping promoter and terminator.",
           "Saying a cloning vector is meant to produce protein.",
           "“A shuttle vector works in two identical hosts.”",
           "Using genomic DNA with introns for bacterial expression."],
  test: [["What two regions must an expression vector have?", "A promoter to start transcription and a terminator to stop it."],
         ["Why does the review put a note about ori in brackets after the plasmid statement?", "A plasmid only replicates in a cell whose machinery recognises its origin of replication."],
         ["Why use cDNA to express a human protein in E. coli?", "Bacteria cannot splice out introns. cDNA is made from mRNA and has none."]]
},
{
  id: "g-transcription", title: "Transcription, RNA types and regulation", topics: ["rna"],
  items: ["t20", "t21", "t22", "o2", "o5"],
  idea: "<p>The gene is copied into RNA by RNA polymerase. It starts at the <b>end of the promoter</b>, a conserved sequence at the 5' end of the gene, and keeps going until it reaches a <b>terminator</b>, where it lets go of both the new RNA and the DNA template.</p>" +
    "<p>Genes in both bacteria and eukaryotes carry regulatory sequences. Proteins bind these to switch the gene on or off: repressors block polymerase, activators recruit it.</p>" +
    "<p>The letters in <b>mRNA, rRNA, tRNA</b> stand for messenger, ribosomal and transfer. The <b>Shine–Dalgarno</b> sequence is a binding site on the mRNA for the <b>ribosome</b>. RNA polymerase reads the promoter on DNA and does not recognise Shine–Dalgarno, which is why the printed true/false statement is false.</p>",
  points: ["Promoter = start on the DNA. Terminator = stop.",
           "Shine–Dalgarno: on mRNA, read by the ribosome.",
           "m = messenger, r = ribosomal, t = transfer."],
  twists: ["“Shine–Dalgarno is recognised by RNA polymerase” (the review's false statement).",
           "Swapping promoter and terminator.",
           "Saying the promoter itself is transcribed."],
  test: [["What binds Shine–Dalgarno, and what does RNA polymerase bind instead?", "The ribosome binds Shine–Dalgarno on the mRNA. RNA polymerase binds the promoter on the DNA."],
         ["What happens when RNA polymerase meets a terminator?", "It releases the growing RNA and the DNA template."],
         ["Where does RNA synthesis start relative to the promoter?", "At the end of the promoter, which sits 5' of the gene."]]
}
);
BE.guide.push(
{
  id: "g-lac", title: "The lac operon", topics: ["lac"],
  items: ["t23", "t24"],
  idea: "<p>The lac operon has three genes for using lactose. One is <b>lacZ</b>, which makes <b>beta-galactosidase</b>, the enzyme that splits lactose into glucose and galactose.</p>" +
    "<p>Two separate controls decide whether it is on. The <b>repressor</b> sits on the operator and blocks RNA polymerase, and <b>lactose pulls it off</b>. <b>CAP</b> helps polymerase bind the promoter, but it only works when <b>glucose is absent</b>. Both conditions are needed for real expression.</p>",
  table: { head: ["Glucose", "Lactose", "Repressor", "CAP", "Beta-galactosidase"],
           rows: [["present", "absent", "on operator", "inactive", "little to none"],
                  ["present", "present", "lifted off", "inactive", "little to none (very low)"],
                  ["absent", "absent", "on operator", "active", "little to none"],
                  ["absent", "present", "lifted off", "active", "<b>produced</b>"]] },
  points: ["Only one of the four rows is ON: no glucose and lactose present.",
           "The glucose-plus-lactose row is a trickle, not zero, because CAP is missing.",
           "Lactose switches the repressor off; glucose switches CAP off."],
  twists: ["Claiming the operon is fully on whenever lactose is present.",
           "Reversing the glucose condition in the ON row.",
           "Saying lacZ produces the repressor, or that beta-galactosidase makes glucose and fructose."],
  test: [["Which condition turns the lac operon fully on?", "Glucose absent and lactose present."],
         ["Why is expression so low when both sugars are present?", "Lactose removes the repressor, but without CAP (which needs glucose to be absent) polymerase binds weakly."],
         ["What does beta-galactosidase produce?", "Glucose and galactose, from lactose."]]
},
{
  id: "g-replication", title: "Replication and mutations", topics: ["rep"],
  items: ["t25", "t26"],
  idea: "<p>DNA polymerase can check its own work. <b>Proofreading</b> removes a wrongly added nucleotide immediately after it goes in, by stepping backwards. It makes copying more accurate but slower.</p>" +
    "<p>Mutations come at two scales. <b>Chromosome-level:</b> deletions, inversions, translocations and duplications. Gene-level mutations (substitutions, frameshifts, small insertions and deletions) are a different list, so watch for options that mix the two.</p>",
  points: ["Proofreading happens right after the base is added.",
           "Chromosome-level: deletion, inversion, translocation, duplication."],
  twists: ["Offering substitution or frameshift in the chromosome-level list.",
           "Saying proofreading speeds replication up."],
  test: [["Name the four chromosome-level mutations.", "Deletions, inversions, translocations and duplications."],
         ["What is the trade-off of proofreading?", "Higher accuracy at the cost of speed."]]
},
{
  id: "g-pcr", title: "PCR and primer design", topics: ["pcr", "primer", "dna"],
  items: ["t27", "t28", "o1"],
  idea: "<p>PCR copies a chosen stretch of DNA by cycling three temperatures: about 94 °C to separate the strands, a cooler step for primers to bind, and 72 °C for the polymerase to extend. <b>Taq polymerase</b> is used because it survives the denaturation step.</p>" +
    "<p>For primer design, the target region is fixed and you choose two short primers:</p><ul>" +
    "<li><b>Forward primer</b> = the first N bases of the target, copied exactly as written.</li>" +
    "<li><b>Reverse primer</b> = the <b>reverse complement</b> of the last N bases.</li></ul>" +
    "<p>The review's answer shows it: the highlighted region starts GATAACAATGGCA, so that is the forward primer. It ends CAAAAATGCTACA, whose reverse complement is TGTAGCATTTTTG. To reverse complement, swap each base for its partner (A↔T, G↔C) and then reverse the order.</p>" +
    "<p>Quantitative PCR measures fluorescence every cycle. The cycle at which the signal crosses a threshold is earlier when there was more starting DNA. Accept the sheet's wording about labelled primers.</p>",
  points: ["Taq survives denaturation.",
           "Forward primer = first N bases as written.",
           "Reverse primer = reverse complement of the last N bases.",
           "qPCR: signal every cycle; earlier threshold means more template."],
  twists: ["Writing the end of the target straight off as the reverse primer without reverse complementing.",
           "Doing only one of the two steps (complement, or reverse).",
           "Giving the primers without 5' and 3' labels."],
  test: [["Write the reverse complement of 5'-ATGCCATTG-3'.", "CAATGGCAT. Complement gives TACGGTAAC, then reverse that."],
         ["Why can the forward primer be copied straight from the top strand?", "It has to match the top strand's start so it anneals to the bottom strand and extends along the target."],
         ["Why is Taq polymerase used?", "It tolerates the roughly 94 °C denaturation step that would destroy an ordinary polymerase."]]
},
{
  id: "g-cloning", title: "Cloning tools: MCS, directional cloning and blue-white", topics: ["clone", "xform"],
  items: ["t29", "t30", "t31"],
  idea: "<p>A <b>multiple cloning site (MCS)</b> is a short region of the vector containing many common restriction sites, so you can choose enzymes that suit your DNA.</p>" +
    "<p><b>Directional cloning</b>: cut the vector with two different enzymes and cut the insert with the same two. The ends no longer match each other, so the insert can only go in one way round.</p>" +
    "<p><b>Blue-white screening</b>: the MCS sits inside the lacZ gene. If no insert is present, lacZ works and makes beta-galactosidase, which turns X-Gal blue. If an insert has landed in the MCS, lacZ is broken, no enzyme is made, X-Gal stays colourless and the colony is <b>white</b>. White colonies are the ones carrying your insert.</p>",
  points: ["MCS = many restriction sites together.",
           "Directional cloning needs two different enzymes.",
           "White = recombinant, blue = empty vector."],
  twists: ["Reversing the colours.",
           "“Two cuts with the same enzyme gives directional cloning.”",
           "Describing the MCS as a single unique site."],
  test: [["Which colony colour carries your insert, and why?", "White. The insert disrupted lacZ, so no beta-galactosidase cleaved X-Gal."],
         ["Why must the two enzymes be different for directional cloning?", "Different enzymes leave different ends, so the insert can only join in one orientation."],
         ["What is the point of an MCS?", "It gives a choice of restriction sites in one place."]]
},
{
  id: "g-restriction", title: "Restriction enzymes, maps and gels (the written problems)", topics: ["re", "map", "gel"],
  items: ["o3", "o7", "o8", "o9"],
  idea: "<p>These four review problems all rest on a few rules.</p><ul>" +
    "<li><b>Blunt or sticky:</b> an enzyme that cuts dead centre of its palindrome gives blunt ends. TGG↓CCA (BalI) is blunt; C↓CTAGG is off-centre and sticky.</li>" +
    "<li><b>Finding the enzyme:</b> scan the sequence for each full six-base site. GGATCC (BamHI) is in the review sequence. BclI and BglII share the middle GATC but not the outer bases.</li>" +
    "<li><b>Fragment size on a linear map:</b> turn the gaps into running positions, then find a pair of cuts the right distance apart. BamHI at 2700 and the right-hand PstI at 4700 are 2000 apart.</li>" +
    "<li><b>Circular plasmid:</b> n cuts give <b>n</b> fragments (a linear molecule would give n + 1). Subtract positions for the inside piece; the wrap-around piece is the total minus that.</li></ul>" +
    "<p>For the gel: SapI and SspI each cut once, so each gives one band of 5762. HpaI (4519) with SapI (2534) gives 1985 and 3777. SspI (724) with BamHI (210) gives 514 and 5248. Small fragments run furthest. A drawn lane must add up to 5762.</p>",
  points: ["Cut at the centre = blunt.", "Read all six bases of a site.",
           "Linear n+1, circle n.", "Check that band sizes sum to the plasmid size."],
  twists: ["Offering an enzyme that shares the central bases but not the full site.",
           "Giving two bands for a single cut in a plasmid.",
           "Placing larger fragments further down the gel."],
  test: [["How many fragments does a plasmid give when cut twice?", "Two."],
         ["A 5762 bp plasmid is cut at 210 and 724. What are the fragments?", "514 (724 − 210) and 5248 (5762 − 514)."],
         ["Why does BclI not cut TACGATGACGAGCATGGATCCAGAG?", "Its full site TGATCA is not present; only GATC is shared with BamHI's GGATCC."]]
}
);
BE.guide.push(
{
  id: "g-phage", title: "Phage display, ELISA and viruses", topics: ["phage", "elisa"],
  items: ["t33", "t50", "t51", "o4"],
  idea: "<p><b>Phage display</b> puts a huge collection of peptides or proteins, billions of variants, on the surface of bacteriophage. You then mix the phage with a target, wash away what does not stick, keep what does and grow it back up in E. coli. The DNA inside each phage records which peptide it displays, so the winners can be read out.</p>" +
    "<p>This works because <b>M13 is a filamentous phage that does not kill its host</b>. It slows the cell down but the cell keeps producing phage.</p>" +
    "<p>Viruses are often called non-living because they have no metabolism of their own, yet they evolve and replicate inside host cells.</p>" +
    "<p><b>ELISA</b> stands for enzyme-linked immuno<b>sorbent</b> assay. The review's “immunosuppressent” version is false. In ELISA an antibody binds the target, a second enzyme-linked antibody binds the first, and the enzyme turns a substrate coloured.</p>",
  points: ["Phage display = a library shown on phage, screened against a target.",
           "M13 is non-lytic.",
           "ELISA = immunosorbent, not immunosuppressant.",
           "Viruses lack independent metabolism but still evolve."],
  twists: ["“ELISA stands for enzyme-linked immunosuppressant assay.”",
           "Saying M13 kills E. coli.",
           "Saying viruses carry out their own metabolism."],
  test: [["Why can M13 be used for display without killing the culture?", "It is non-lytic: it leaves the cell alive, and the cell keeps making phage."],
         ["What does the S in ELISA stand for?", "Sorbent. The antigen is adsorbed onto the plate."],
         ["Why are viruses called non-living?", "They do not independently carry out metabolism, although they evolve and replicate inside hosts."]]
},
{
  id: "g-chemgen", title: "Chemical genetics: forward and reverse", topics: ["chem"],
  items: ["t34", "t35", "t36"],
  idea: "<p>Chemical genetics uses small molecules to change what one gene product does, inside a living system. The two directions mirror each other.</p>" +
    "<p><b>Forward:</b> screen many compounds for one that produces an interesting <b>phenotype</b>, then work out which protein it hits. The goal is <b>target identification</b>.</p>" +
    "<p><b>Reverse:</b> start from a protein you care about, find compounds that bind it, add them to cells and see what changes. The goal is <b>target function and validation</b>.</p>",
  points: ["Forward: phenotype first, find the protein, identification.",
           "Reverse: protein first, find the ligand, function and validation."],
  twists: ["Swapping “forward” and “reverse”.",
           "Swapping “identification” and “validation”.",
           "Saying chemical genetics only works in a test tube."],
  test: [["A screen finds a compound that makes cells stop dividing. You now hunt for its protein target. Forward or reverse?", "Forward chemical genetics: phenotype first, target identification."],
         ["What does reverse chemical genetics aim to show?", "The function of a chosen protein, and whether it really causes a given response (target validation)."]]
},
{
  id: "g-chromatin", title: "Chromatin, histones, HAT and HDAC", topics: ["chrom"],
  items: ["t37", "t38", "t39", "t40", "t41", "t42", "t43", "t44", "t48", "t49"],
  idea: "<p>DNA is packaged as chromatin: DNA wrapped around histone proteins. A nucleosome is DNA around a core of <b>two copies of each of four histones</b>, which is why the core is called an octamer. Histones are rich in positive charge, and DNA is negative, so they cling together.</p>" +
    "<p>Chemical tags on the histone tails change that grip. <b>HAT adds acetyl groups</b>, which neutralise the positive charge, loosen the DNA and switch genes on. <b>HDAC removes acetyl groups</b>, restoring the charge, tightening the grip and switching genes off.</p>" +
    "<p><b>Euchromatin</b> is loose and lets polymerase in. <b>Heterochromatin</b> is tightly packed and silent, and much of the genome is heterochromatin. Every core histone has an unstructured N-terminal tail of about 30 amino acids that carries many modifications and acts as a docking signal for other proteins.</p>" +
    "<p>Epigenetics is the term for non-genetic factors changing how genes are expressed, sometimes across several generations.</p>",
  points: ["HAT adds acetyl, activates. HDAC removes acetyl, represses.",
           "Euchromatin open, heterochromatin closed, most of the genome is heterochromatin.",
           "Tails: N-terminal, about 30 amino acids, modified."],
  twists: ["Swapping HAT and HDAC.", "Swapping euchromatin and heterochromatin.",
           "Saying only a small fraction of the genome is heterochromatin.",
           "Saying acetylation increases positive charge."],
  test: [["Give the one-line difference between HAT and HDAC.", "HAT adds acetyl groups and activates genes; HDAC removes them and represses genes."],
         ["Why does acetylation loosen DNA?", "It neutralises the positive charge on histone lysines, weakening attraction to the negative DNA."],
         ["What is the nucleosome core made of?", "Two copies each of four different histones, an octamer."]]
},
{
  id: "g-methylation", title: "DNA methylation", topics: ["meth"],
  items: ["t45", "t46", "t47"],
  idea: "<p>In humans, DNA methylation happens at <b>CpG</b> dinucleotides: the cytosine is methylated to 5-methylcytosine, typically on both strands. The enzyme is DNMT and the methyl donor is SAM.</p>" +
    "<p>Methylation lowers expression in <b>two ways</b>: it blocks transcription factors from binding, and it recruits methyl-CpG binding domain (MBD) proteins, which bring in histone-modifying enzymes such as HDACs. Chromatin then tightens.</p>" +
    "<p>Because methylation changes expression without changing the DNA sequence, the environment can alter gene activity quickly without permanent mutation.</p>",
  points: ["CpG, on cytosine, both strands.",
           "Two mechanisms: blocks transcription factors, recruits MBD proteins.",
           "Changes expression without changing sequence."],
  twists: ["Giving only one of the two mechanisms.",
           "“Methylation enhances transcription factor binding.”",
           "Saying methylation makes permanent mutations."],
  test: [["Give both ways methylation reduces transcription.", "It inhibits transcription factor binding, and it recruits MBD proteins that recruit or modify histones."],
         ["Where does human DNA methylation occur?", "At CpG dinucleotides, on cytosine, as 5-methylcytosine."]]
},
{
  id: "g-meteng", title: "Metabolic engineering and selection", topics: ["meteng"],
  items: ["t52", "t53", "o6"],
  idea: "<p>Metabolic engineers redesign a cell's pathways to overproduce a compound. The review asks for six strategies:</p><ol>" +
    "<li>Remove genetic-level transcriptional controls.</li>" +
    "<li>Remove allosteric-level enzymatic controls.</li>" +
    "<li>Kinetically enhance rate-limiting enzymes.</li>" +
    "<li>Genetically block competing pathways.</li>" +
    "<li>Enhance commitment of carbon to the pathway of interest.</li>" +
    "<li>Enhance transport of the toxic compound out of the cell.</li></ol>" +
    "<p>Adding genes can change a target phenotype. Mutant clones with a wanted trait are found with <b>selection</b> (survival conditions that kill the rest) and <b>screening</b> (everything grows and you look for the trait).</p>",
  points: ["Pattern: two remove, one enhance, one block, two enhance.",
           "Selection kills the unwanted; screening inspects everything."],
  twists: ["Listing five strategies instead of six.", "Mixing up selection and screening."],
  test: [["Write the six strategies from memory.", "Remove transcriptional controls; remove allosteric controls; enhance rate-limiting enzymes; block competing pathways; enhance carbon commitment; enhance export of the toxic compound."],
         ["Selection or screening: plating on antibiotic?", "Selection. It kills cells that lack resistance."]]
}
);
// Option-by-option reasoning for the nine multiple-choice questions.
BE.guideMC = {
  m1: ["A is wrong: amino acids in a protein do not each have their own melting point that sets the optimum.",
       "B is wrong: reaction rates are governed by kinetics, and the optimum comes from the protein's stability.",
       "C is wrong: the problem at high temperature is unfolding of the whole protein, not chemical breakdown of side chains.",
       "D is right: the rate rises with temperature until denaturation sets in."],
  m2: ["A is right: ATCase is allosteric and cooperative, so rate against substrate is sigmoidal.",
       "B is wrong: ATCase shows cooperative kinetics.",
       "C is wrong: zero order describes a saturated enzyme at high substrate, not the whole curve.",
       "D is wrong: hyperbolic is the shape for a non-allosteric Michaelis–Menten enzyme."],
  m3: ["A is wrong: zero order belongs to saturating substrate.",
       "B is right: at low substrate most enzyme is free, so rate rises in proportion to [S], which is first order.",
       "C is wrong: second order needs two concentrations or one squared.",
       "D is wrong: low substrate does not denature an enzyme."],
  m4: ["A is right: with every active site occupied the rate cannot rise, so it is constant, which is zero order.",
       "B is wrong: first order is the low-substrate regime.",
       "C is wrong: nothing here makes it second order.",
       "D is wrong: saturation is not denaturation."],
  m5: ["A is wrong: the Michaelis constant is not tied to the enzyme's molecular weight.",
       "B is wrong: it says nothing about resistance to denaturation.",
       "C is wrong: it does not reflect the percentage of polar amino acids.",
       "D is right: it reflects how tightly substrate is bound. A lower K<sub>M</sub> means tighter apparent binding."],
  m6: ["A is wrong: the subscripts are inverted.",
       "B is right: K<sub>M</sub> = (k₋₁ + k₂) / k₁, the two ways the ES complex is lost over the rate it forms.",
       "C is wrong: k₂ belongs in the numerator.",
       "D is wrong: k₋₁/k₁ is the simple dissociation constant and leaves out k₂."],
  m7: ["A is wrong: “always”, and ES does not always go to product.",
       "B is wrong: “always”, and it does not always fall back to E + S.",
       "C is wrong: “always” again.",
       "D is right: ES may break down to E + S or to E + P."],
  m8: ["A is wrong: temperature does not define irreversible inhibition.",
       "B is wrong: irreversible inhibitors are not limited to serine side chains.",
       "C is right: the product is inactive and the original enzyme cannot be regenerated.",
       "D is wrong: lock-and-key describes normal substrate binding."],
  m9: ["A is right: a noncompetitive inhibitor binds somewhere other than the active site.",
       "B is wrong: being structurally related to the substrate describes a competitive inhibitor.",
       "C is wrong: it does lower V<sub>max</sub>.",
       "D is wrong: K<sub>M</sub> stays the same."]
};
BE.guide.push(
{
  id: "g-kin-a", title: "Temperature and reaction order", topics: ["enz", "order"],
  items: ["m1", "m3", "m4"],
  idea: "<p>Enzymes speed up with temperature until the protein unfolds, so there is an optimum. Reaction order describes how rate depends on substrate: at <b>low substrate the rate is proportional to [S] (first order)</b>, and at <b>saturating substrate it is constant (zero order)</b> because every enzyme is busy.</p>",
  points: ["Optimum temperature: rises until denaturation.", "Low [S] = first order. Saturated = zero order."],
  twists: ["Swapping first and zero order.", "Explaining the optimum by chemical breakdown of side chains."],
  test: [["An enzyme is saturated. What order, and what is the rate near?", "Zero order, with the rate close to V<sub>max</sub>."],
         ["Why does activity fall above the optimum temperature?", "The protein denatures, and an unfolded enzyme cannot catalyse."]]
},
{
  id: "g-kin-b", title: "Michaelis–Menten and Kₘ", topics: ["mm"],
  items: ["m5", "m6", "m7"],
  idea: "<p>The scheme is E + S ⇌ ES → E + P. K<sub>M</sub> collects the rate constants as <b>(k₋₁ + k₂) / k₁</b>. It is the substrate concentration at half V<sub>max</sub> and acts as a measure of how tightly substrate binds: a low K<sub>M</sub> means tight apparent binding.</p>" +
    "<p>Strictly, K<sub>M</sub> equals the dissociation constant only when k₂ is much smaller than k₋₁, but choice D is still the best answer on the sheet.</p>",
  points: ["K<sub>M</sub> = (k₋₁ + k₂)/k₁.", "ES has two fates: back to E + S or on to E + P."],
  twists: ["Inverting the subscripts in the formula.", "An option containing “always”."],
  test: [["Write K<sub>M</sub> in terms of the rate constants.", "(k₋₁ + k₂) / k₁."],
         ["What does a low K<sub>M</sub> tell you?", "The enzyme reaches half speed at low substrate: tight apparent binding."]]
},
{
  id: "g-kin-c", title: "Allosteric enzymes and inhibitors", topics: ["allo", "inh"],
  items: ["m2", "m8", "m9"],
  idea: "<p>An allosteric enzyme such as ATCase gives a <b>sigmoidal</b> curve; a plain Michaelis–Menten enzyme gives a hyperbola. A <b>noncompetitive</b> inhibitor binds away from the active site, lowering V<sub>max</sub> and leaving K<sub>M</sub> unchanged. An <b>irreversible</b> inhibitor reacts covalently and the original enzyme cannot be regenerated.</p>",
  points: ["Sigmoidal = allosteric. Hyperbolic = non-allosteric.",
           "Noncompetitive: elsewhere, V<sub>max</sub> down, K<sub>M</sub> same.",
           "Irreversible: enzyme cannot be regenerated."],
  twists: ["Calling the ATCase curve hyperbolic.", "Giving “related to the substrate” as the noncompetitive definition."],
  test: [["What shape is the ATCase rate curve?", "Sigmoidal, because the enzyme is allosteric and cooperative."],
         ["What happens to K<sub>M</sub> and V<sub>max</sub> with a noncompetitive inhibitor?", "K<sub>M</sub> is unchanged and V<sub>max</sub> decreases."]]
}
);
