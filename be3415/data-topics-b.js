// Study topics, part B: M3 replication/vectors/cloning and M4 PCR/digests/gels.
// Built from Week 11 Lecture 1, Week 12 Lecture 2 and Labs 5 and 6.
window.BE = window.BE || {};
BE.topics = BE.topics || [];

BE.topics.push(
{
  id: "rep", m: "m3", title: "DNA replication, proofreading & mutations", heat: 2,
  src: "Week 12 Lecture 2 slides 3–10; review true statements 25 and 26",
  why: "Two review statements, and the 5'→3' rule underpins everything you do with primers later.",
  know: "Replication starts at an <b>origin (ori)</b>, an AT-rich stretch that separates easily. DNA polymerase only adds nucleotides to the <b>3' end</b> of an existing strand, and only in the <b>5'→3'</b> direction.",
  eli5: "Copying DNA is like unzipping a zip and rebuilding both sides. The machine that lays down new teeth can only work in one direction and cannot start from nothing — it needs someone to lay the first few teeth for it, which is the primer's job.",
  exam: "<p><b>The enzyme sequence:</b> helicase unwinds at the ori to make a replication fork → <b>primase</b> lays an RNA primer of 3–10 bases → <b>DNA polymerase</b> extends it → <b>RNase H</b> removes the RNA primer → polymerase fills the gap → <b>ligase</b> seals the phosphodiester bond.</p>" +
    "<p><b>Speed and origins:</b> bacterial polymerase runs at about 1000 bp/s, mammalian at about 100 bp/s. A 3 million bp bacterial genome takes roughly 40 minutes from a <b>single ori</b>. Humans cannot scale that up by time, so they use about <b>10,000 origins</b>.</p>" +
    "<p><b>Proofreading</b> removes incorrect nucleotides <b>immediately after they are added</b>, by going backwards. It makes replication more accurate but inherently slower. Spontaneous error rates land around 1 in 10⁹ to 10¹⁰ bases.</p>" +
    "<p><b>Two levels of mutation.</b> Gene level: substitutions, insertions, deletions, frameshift, inversions. <b>Chromosome level: deletions, inversions, translocations, duplications</b> — memorise that four-item list, because review statement 26 is exactly it.</p>",
  compare: { head: ["Gene-level mutations", "Chromosome-level mutations"],
             rows: [["Substitution (point mutation)", "Deletion"], ["Insertion", "Inversion"],
                    ["Deletion", "Translocation"], ["Frameshift", "Duplication"], ["Inversion", "—"]] },
  traps: ["Deletion and inversion appear on BOTH lists. A question asking for chromosome-level items wants the four: deletion, inversion, translocation, duplication.",
          "Proofreading happens during replication, right after the wrong base goes in, not as a later repair sweep.",
          "Polymerase adds only to a 3'-OH and only 5'→3'. It cannot start a chain by itself."],
  recall: ["List the enzymes of replication in order and say what each does.",
           "Why do humans need about 10,000 origins when bacteria manage with one?",
           "Define proofreading and give its trade-off.",
           "Name the four chromosome-level mutations."],
  one: "Polymerase extends a primer 5'→3' from a 3'-OH; proofreading fixes errors as they happen; chromosome-level mutations are deletion, inversion, translocation and duplication."
},
{
  id: "vec", m: "m3", title: "Vectors: cloning, expression & shuttle", heat: 3,
  src: "Week 11 L1 slides 10–15; Week 12 L2 slides 12–13; review statements 16–19 and 32",
  why: "Five review statements, more than almost any other topic, and the three vector types are a textbook setup for a definition-swap question.",
  know: "A <b>plasmid (vector)</b> is a circular DNA molecule that replicates inside a host and can be transferred to other cells — but only if it carries an <b>ori compatible with that host</b>. Three types: cloning, expression and shuttle.",
  eli5: "A plasmid is a USB stick for bacteria. A cloning vector is for making copies of the file. An expression vector actually runs the program and produces protein. A shuttle vector is formatted so it works on two different computers.",
  exam: "<p><b>Cloning vector:</b> purpose is purely to <b>amplify</b> the DNA — more copies for later use. Needs a replicator (ori), a selectable marker (antibiotic resistance) and a cloning site.</p>" +
    "<p><b>Expression vector:</b> purpose is to <b>produce mRNA</b> and hence protein. Must have a region to <b>initiate</b> transcription (a <b>promoter</b>) and a region to <b>terminate</b> it (a <b>terminator</b>). Expression may be constitutive (always on) or inducible.</p>" +
    "<p><b>Shuttle vector:</b> propagates and transfers genes between <b>two different organisms</b> — grow it up in bacteria, then use it in yeast or human cells.</p>" +
    "<p><b>Standard plasmid parts:</b> ori (recruits replication machinery), antibiotic resistance gene (selection), multiple cloning site (easy insertion, usually downstream of a promoter in expression plasmids), promoter (drives transcription and sets which cell types express it), and other selectable markers for non-bacterial hosts.</p>" +
    "<p><b>To express a eukaryotic protein in E. coli</b> (statement 32) you need the <b>cDNA</b> — because bacteria cannot splice out introns — cloned into an expression vector with a <b>promoter</b>, a <b>ribosome binding site</b> and ideally a <b>transcriptional terminator</b>. Those three parts are the whole answer.</p>" +
    "<p><b>Promoter consensus</b> in E. coli: sigma70 reads ttgaca, 17 bases, tataat. Variants such as lac, Ptac and Pr differ by a few bases, which is how promoter strength is tuned.</p>",
  compare: { head: ["", "Cloning vector", "Expression vector", "Shuttle vector"],
             rows: [["Purpose", "Make copies of DNA", "Make mRNA, then protein", "Work in two organisms"],
                    ["Must have", "ori, marker, cloning site", "Promoter + terminator (+ RBS in E. coli)", "Two compatible oris"],
                    ["Output", "More DNA", "Protein", "Either, in either host"]] },
  traps: ["Promoter starts transcription, terminator stops it. Swapping those two words is the most likely trap in this topic.",
          "Cloning vector makes DNA, expression vector makes protein. Do not blur them.",
          "A plasmid only replicates in a host whose machinery matches its ori — the review states this in a parenthesis precisely because it is testable.",
          "For a eukaryotic gene in E. coli you must use cDNA. Genomic DNA still has introns."],
  recall: ["Define cloning, expression and shuttle vectors in one line each.",
           "Which two regions must an expression vector have, and what does each do?",
           "What three elements does an expression vector need to make a eukaryotic protein in E. coli?",
           "Why must it be cDNA rather than genomic DNA?"],
  one: "Cloning vector copies DNA; expression vector needs promoter + terminator (+ RBS) to make protein; shuttle vector works in two organisms; and nothing replicates without a compatible ori."
});

BE.topics.push(
{
  id: "clone", m: "m3", title: "Cloning: MCS, directional cloning & blue-white screening", heat: 3,
  src: "Week 11 Lecture 1 slides 9, 16–27; review statements 29–31",
  why: "Three review statements, and blue-white screening is the single most commonly reversed fact in the whole course.",
  know: "To <b>clone</b> is to make many identical copies. Cut vector and insert with restriction enzymes, join them with <b>ligase</b>, put the recombinant plasmid into bacteria, and let the bacteria copy it as they grow.",
  eli5: "Cut a sentence out of one book and paste it into another, then photocopy the second book a million times. The restriction enzymes are the scissors, ligase is the glue, and the bacteria are the photocopier.",
  exam: "<p><b>Ligation</b> needs T4 bacteriophage ligase and ATP, and the DNA must have an exposed <b>5' phosphate</b>. Sticky ends ligate more efficiently than blunt ends, because the overhangs hold the pieces together while the enzyme works.</p>" +
    "<p><b>Multiple cloning site (MCS):</b> a short region packed with many common restriction sites, giving you a <b>choice</b> of enzymes for getting your DNA in.</p>" +
    "<p><b>Directional cloning:</b> make <b>two cuts with two DIFFERENT enzymes</b> in the vector, and use <b>the same two enzymes</b> on the insert. Because the two ends are now non-matching, the insert can only go in one way round.</p>" +
    "<p><b>Blue-white screening.</b> The MCS sits inside <b>lacZ</b>. X-Gal turns blue when its beta-glycosidic bond is cleaved by the lacZ product. So: lacZ intact (no insert) → beta-galactosidase made → X-Gal cleaved → <b>BLUE</b>. lacZ disrupted by an insert → no product → <b>WHITE = the recombinant you want</b>.</p>" +
    "<p><b>Selection vs screening:</b> selection kills what you do not want (antibiotics); screening lets everything grow and you look at it (blue/white). Many cloning plasmids carry both an antibiotic marker and a visual marker.</p>" +
    "<p><b>Linkers</b> are short DNA duplexes carrying a restriction site, ligated on to give a fragment the ends you need. <b>BioBrick</b> assembly uses EcoRI, XbaI, SpeI and PstI; because XbaI and SpeI leave compatible overhangs, joining them creates a <b>scar</b> that neither enzyme can cut again. <b>Gibson assembly</b> avoids scars entirely: PCR fragments with 20 bp overlaps, then T5 exonuclease, Phusion polymerase and Taq ligase join everything at once.</p>",
  trick: "<b>White is right.</b> The white colonies carry your insert.",
  traps: ["Blue = empty vector; WHITE = recombinant. Getting this backwards is the most common single error in this module.",
          "Directional cloning needs two DIFFERENT enzymes. Two cuts with the same enzyme gives identical ends and a random orientation.",
          "Selection and screening are not synonyms: one kills, the other just shows you.",
          "Ligation needs an exposed 5' phosphate and ATP."],
  recall: ["Which colour colony has your insert, and walk through why.",
           "What makes cloning directional?",
           "What is an MCS for?",
           "Distinguish selection from screening with an example of each.",
           "Why does BioBrick assembly leave a scar and Gibson does not?"],
  one: "Cut with two different enzymes for directional cloning, ligate, transform; white colonies are the recombinants because the insert has disrupted lacZ."
},
{
  id: "xform", m: "m3", title: "Transformation & antibiotic selection", heat: 2,
  src: "Week 11 L1 slides 12–14; Lab 6 (transformation protocol)",
  why: "You did this in Lab 6, and the review warns lab material is on the exam. Post-lab question 1 — which plate grows colonies — is a very likely exam question.",
  know: "<b>Transformation</b> is the transfer of a plasmid into a cell. The cell must first be made <b>competent</b> (permeable). Afterwards the plasmid's antibiotic resistance gene lets you select only the cells that took it up.",
  eli5: "You are trying to get a letter into a locked house. First you weaken the locks with cold salt washes, then a sudden burst of heat pops the door open just long enough to push the letter in. Afterwards, you flood the whole street with something only houses holding that letter can survive.",
  exam: "<p><b>History:</b> Griffith, 1928, showed Streptococcus pneumoniae could pass a transferable element to harmless bacteria and make them lethal.</p>" +
    "<p><b>Two methods:</b> heat shock and electroporation. For <b>chemical competence</b>, grow cells to log phase (exponentially growing cells become competent most easily), harvest, and treat with a series of <b>cold salt washes</b> to disrupt the membranes.</p>" +
    "<p><b>The Lab 6 heat shock, in order:</b> mix plasmid with chilled competent cells and keep on ice → <b>42 °C for exactly 45 seconds</b> → straight back on ice → add LB broth → recover at 37 °C for 30 minutes → plate. The recovery step matters: it gives the cells time to express the resistance enzyme before they meet the antibiotic.</p>" +
    "<p><b>Selection in Lab 6:</b> the plasmid carries <b>ampicillin</b> resistance, which produces <b>beta-lactamase</b> to break down ampicillin. Ampicillin itself works by inhibiting <b>cell wall synthesis</b>. So colonies grow on the ampicillin plate and <b>not</b> on the tetracycline plate, because the plasmid carries no tetracycline resistance.</p>" +
    "<p><b>Antibiotic classes from the lecture:</b> inhibit protein synthesis — kanamycin, tetracycline, streptomycin, chloramphenicol, erythromycin; inhibit cell wall synthesis — ampicillin; induce DNA breaks — bleomycin.</p>" +
    "<p><b>Why antibiotics at all:</b> cells drop what they do not need. Without selective pressure they discard the plasmid rather than spend energy replicating it.</p>",
  traps: ["Lab 6 answer: growth on AMPICILLIN only. The plasmid gives no tetracycline resistance.",
          "Ampicillin blocks cell WALL synthesis; tetracycline and kanamycin block PROTEIN synthesis.",
          "The 30-minute recovery in LB before plating is needed to express resistance first — a likely 'why this step' question.",
          "Heat shock is 42 °C for about 45 seconds, then immediately back on ice."],
  recall: ["Which plate grows colonies in Lab 6, and why the other does not?",
           "What does beta-lactamase do, and what does ampicillin attack?",
           "Why must cells recover in LB before being plated on antibiotic?",
           "Name the two transformation methods and how chemical competence is made."],
  one: "Competent cells + plasmid, 42 °C for 45 s, recover in LB, then select on ampicillin; only transformed cells make beta-lactamase and survive."
});

BE.topics.push(
{
  id: "dna", m: "m4", title: "DNA strands, polarity & reverse complements", heat: 3,
  src: "Week 11 Lecture 1 slide 1; foundational for every primer and digest problem",
  why: "Not a review question by itself, but every primer problem is really a reverse-complement problem. Get this automatic and the rest of M4 becomes arithmetic.",
  know: "DNA is antiparallel: one strand runs 5'→3' while its partner runs 3'→5'. <b>Always write a sequence 5'→3' unless told otherwise.</b> The <b>reverse complement</b> is what the other strand reads, written in its own 5'→3' direction.",
  eli5: "Two lanes of traffic running opposite ways. To describe the other lane the way its own drivers see it, you have to both swap each car for its partner (A for T, G for C) and read the lane backwards.",
  exam: "<p><b>Base pairing:</b> A with T (two hydrogen bonds), G with C (three). More G+C means a more stable duplex and a higher melting temperature — which is why GC content matters for primer design.</p>" +
    "<p><b>Reverse complement, two steps, in this order:</b> complement every base, then reverse the whole string. Doing only one of the two is the classic half-mark error.</p>" +
    "<p><b>Worked example.</b> Top strand 5'-GGATCC-3'. Complement: CCTAGG. Reverse: GGATCC. It came back to itself — which is exactly what makes it a <b>palindrome</b>, and why restriction sites look like this.</p>" +
    "<p><b>A second example that is not a palindrome.</b> 5'-ATTGCCA-3'. Complement: TAACGGT. Reverse it: TGGCAAT. So the other strand reads 5'-TGGCAAT-3'.</p>" +
    "<p><b>Self-check:</b> the reverse complement of a reverse complement is the original. If you do it twice and do not get back where you started, you made an error.</p>",
  trick: "Say it as a two-step chant: <b>“flip and swap”</b>. Swap the letters, flip the order. Miss either one and the answer is wrong.",
  traps: ["Complementing without reversing, or reversing without complementing. The app's primer grader tells you which of the two you did.",
          "Forgetting to label 5' and 3'. An unlabelled primer is ambiguous and can lose marks.",
          "Assuming a sequence is a palindrome because it looks symmetrical. Test it: reverse complement it and see if it matches."],
  recall: ["Write the reverse complement of 5'-ATTGCCA-3'.",
           "Why is GGATCC called a palindrome?",
           "Which base pair is held by three hydrogen bonds?",
           "What is the quickest way to check a reverse complement you just wrote?"],
  one: "Flip and swap: complement every base, then reverse the order, and always write the result 5'→3'."
},
{
  id: "pcr", m: "m4", title: "PCR: cycles, temperatures & Taq", heat: 3,
  src: "Week 11 L1 slides 30–35; Lab 5; review statements 27 and 28",
  why: "Two review statements plus a whole lab. The three temperatures and why Taq is special are near-certain exam content.",
  know: "PCR copies a chosen DNA sequence many times without bacteria, using two primers that flank the region. Each cycle doubles the product, so n cycles give about <b>2ⁿ</b> copies.",
  eli5: "A photocopier that only copies the paragraph between two bookmarks. Heat splits the pages apart, cooling lets the bookmarks stick on, and warming again lets the copier run from each bookmark. Repeat thirty times and one paragraph becomes a billion.",
  exam: "<p><b>The three steps, every cycle:</b></p><ul>" +
    "<li><b>Denaturation, 94–96 °C</b> — breaks the hydrogen bonds and separates the strands.</li>" +
    "<li><b>Annealing, 45–65 °C</b> (Lab 5 used 55 °C) — cool enough for primers to bind their targets.</li>" +
    "<li><b>Extension, 72 °C</b> — the optimum for Taq, which adds nucleotides to the <b>3' end</b> of each bound primer.</li></ul>" +
    "<p><b>Why Taq:</b> from <i>Thermus aquaticus</i>, found in a Yellowstone hot spring. It <b>survives the 94 °C denaturation step</b> while ordinary polymerases would denature, and still works at 72 °C. The trade-off: poor proofreading, roughly one error per kb.</p>" +
    "<p><b>The Lab 5 programme:</b> 5 min at 94 °C to start, then 32 cycles of 95 °C / 55 °C / 72 °C, then 4–10 min at 72 °C to finish any incomplete strands, then hold at 4 °C. To get more product, <b>increase the number of cycles</b> — that is post-lab question 4.</p>" +
    "<p><b>The reaction mix:</b> template DNA, a molar excess of both primers, all four dNTPs, buffer and a thermostable polymerase.</p>" +
    "<p><b>qPCR</b> (review statement 27): accept the professor's wording about fluorescently labelled primers. The concept to hold is that fluorescence is read <b>every cycle</b>, and an <b>earlier threshold cycle (Ct) means more starting template</b>.</p>",
  traps: ["Two different primers are needed because the two strands run in opposite directions; one primer alone copies one strand and gets you linear, not exponential, amplification.",
          "The 72 °C hold at the end is for completing partial products, not another cycle.",
          "Taq's advantage is heat tolerance, not accuracy. Its proofreading is poor.",
          "More product = more cycles, not a longer extension time."],
  recall: ["Give the three temperatures and what happens at each.",
           "Why is a polymerase from a hot spring organism needed?",
           "Why must there be two different primers?",
           "What does an earlier Ct tell you in qPCR?",
           "Which parameter would you change to get more copies?"],
  one: "Denature 94 °C, anneal ~55 °C, extend 72 °C, about 2ⁿ copies; Taq is used because it survives denaturation, at the cost of poor proofreading."
},
{
  id: "primer", m: "m4", title: "Primer design", heat: 3,
  src: "Week 11 L1 slides 31–34, 37; review 'Other questions' #1",
  why: "A guaranteed problem on the exam, worth full marks for a purely mechanical skill. Your professor has set it twice: on the review sheet and as an in-class exercise.",
  know: "<b>Forward primer = the first N nucleotides of the target, copied exactly as written on the top strand.</b> <b>Reverse primer = the reverse complement of the last N nucleotides of the target.</b> Both are written 5'→3'.",
  eli5: "You are marking out a stretch of road. The forward marker is a copy of the sign at the near end, facing inward. The reverse marker is a copy of the sign at the far end, but you have to read it off the opposite side of the road, which is why it comes out looking backwards.",
  exam: "<p><b>The method, every time:</b></p><ol>" +
    "<li>Find where the target region starts and ends.</li>" +
    "<li>Take the first N bases. That is your forward primer, unchanged.</li>" +
    "<li>Take the last N bases. Reverse complement them. That is your reverse primer.</li>" +
    "<li>Write both 5'→3' and label them.</li></ol>" +
    "<p><b>The worked review answer:</b> the highlighted region begins GATAACAATGGCA..., so the forward primer is <code>GATAACAATGGCA</code>. It ends ...CAAAAATGCTACA, whose reverse complement is <code>TGTAGCATTTTTG</code>. Those are exactly the professor's answers.</p>" +
    "<p><b>Design rules from the lecture:</b> melting temperatures between 54 and 60 °C; the two primers should have <b>similar Tm</b>; and the final 3' base is best as a <b>G or C</b>, which binds more firmly so the polymerase starts cleanly.</p>" +
    "<p><b>Things that break a primer:</b> a <b>hairpin</b>, where the 3' side folds back onto the 5' side and blocks the 3' end; <b>primer dimers</b>, especially when the 3' ends pair with each other; too long, needing an impractically high Tm; too short, so it will not stay bound.</p>",
  trick: "Forward = <b>F</b>irst, as written. Reverse = reverse complement of the <b>L</b>ast. The reverse primer always looks backwards compared with the top strand — if yours does not, you have probably forgotten to complement it.",
  traps: ["Copying the last N bases straight off the top strand instead of reverse complementing them. This is the single most common error.",
          "Reversing without complementing, or complementing without reversing.",
          "Using the start of the region for the reverse primer instead of the end.",
          "Leaving off the 5' and 3' labels."],
  recall: ["State the rule for the forward primer and for the reverse primer.",
           "What Tm range does the lecture ask for, and what should the 3' base be?",
           "What is a primer dimer and why does it matter most at the 3' end?",
           "You wrote a reverse primer that reads identically to the top strand. What did you forget?"],
  one: "Forward = first N bases as written; reverse = reverse complement of the last N bases; both written 5'→3'."
});

BE.topics.push(
{
  id: "re", m: "m4", title: "Restriction enzymes: palindromes, sticky & blunt", heat: 3,
  src: "Week 11 Lecture 1 slides 1–6; review 'Other questions' #3 and #6",
  why: "Two review problems, and everything in cloning and gels depends on reading a cut site correctly.",
  know: "Type II restriction enzymes cut double-stranded DNA at specific sites. The sites are <b>palindromes</b> — they read the same 5'→3' on both strands — because the enzymes work as <b>dimers</b>, each half recognising the same sequence.",
  eli5: "Two identical hands gripping the DNA from opposite sides. Because the hands are identical, the grip only works where the sequence reads the same from either direction. Where the two cuts land relative to each other decides whether the broken ends are flat or ragged.",
  exam: "<p><b>Origin:</b> bacteria evolved them to “restrict” invading phage DNA by cleaving it. Their own genome is protected by methylation — some enzymes only cut unmethylated DNA. No ATP is needed.</p>" +
    "<p><b>Blunt or sticky is decided by where the cut falls:</b></p><ul>" +
    "<li><b>Dead centre of the palindrome → BLUNT.</b> TGG↓CCA (BalI) has three bases each side, so both strands break level.</li>" +
    "<li><b>Off centre → STICKY.</b> G↓GATCC (BamHI) is cut after one base, leaving a four-base 5' overhang.</li></ul>" +
    "<p><b>Overhangs come in two kinds:</b> 5' overhangs (the common case, as with BamHI and EcoRI) and 3' overhangs (as with PstI, CTGCA↓G). Sticky ends ligate more efficiently than blunt ones.</p>" +
    "<p><b>Site frequency:</b> in random DNA with equal base amounts, a <b>6-base cutter</b> hits roughly every 4⁶ = <b>4096 bp</b> and a <b>4-base cutter</b> every 4⁴ = <b>256 bp</b>. Longer recognition site, better specificity, fewer cuts.</p>" +
    "<p><b>Reading a sequence for sites:</b> scan the top strand for each recognition sequence in turn. Watch the near-misses: BamHI GGATCC, BclI TGATCA and BglII AGATCT all contain GATC in the middle and differ only at the ends.</p>",
  compare: { head: ["", "Blunt", "Sticky"],
             rows: [["Where the cut falls", "Centre of the palindrome", "Off centre"],
                    ["Ends produced", "Flat, no overhang", "Single-stranded overhang"],
                    ["Examples", "BalI TGG↓CCA, SmaI CCC↓GGG, HaeIII GG↓CC", "BamHI G↓GATCC, EcoRI G↓AATTC, PstI CTGCA↓G"],
                    ["Ligation", "Less efficient", "More efficient, overhangs hold the pieces"]] },
  traps: ["Review 'other' #3 answer is TGG↓CCA (BalI), the blunt cutter. C↓CTAGG is sticky.",
          "BamHI / BclI / BglII share the central GATC. Read all six bases before answering which enzyme cuts.",
          "A 6-base cutter cuts LESS often than a 4-base cutter: 1 in 4096 versus 1 in 256.",
          "Palindrome here means the same 5'→3' on both strands, not a letter-by-letter mirror like 'racecar'."],
  recall: ["Why are restriction sites palindromic?",
           "How do you tell from a cut site whether the ends will be sticky or blunt?",
           "How often would a 6-base cutter cut random DNA, and a 4-base cutter?",
           "Name three enzymes whose sites all contain GATC and say how they differ."],
  one: "Palindromic sites, cut dead centre gives blunt ends and off centre gives sticky overhangs; 6-base cutters hit about every 4096 bp."
},
{
  id: "map", m: "m4", title: "Restriction mapping & fragment arithmetic", heat: 3,
  src: "Week 11 Lecture 1 slides 7–8; review 'Other questions' #7",
  why: "The 2 kb fragment question is on the review, and the counting rule here is what makes the gel question tractable.",
  know: "The rule that decides everything: on a <b>linear</b> molecule, n cuts give <b>n+1</b> fragments. On a <b>circular</b> plasmid, n cuts give <b>n</b> fragments.",
  eli5: "Cut a piece of string twice and you have three pieces, because the two original ends count. Cut a rubber band twice and you have two pieces. The circle has no ends to spare.",
  exam: "<p><b>Linear arithmetic:</b> turn the gaps into running positions from the left end, then a fragment between two cuts is just the difference. Do not forget the two end pieces, from position 0 to the first cut and from the last cut to the end.</p>" +
    "<p><b>The review's 2 kb question, worked.</b> The map is PstI, EcoRI, BalI, BamHI, BclI, BglII, PstI with gaps 500, 1000, 1200, 1000, 800, 200. Positions: PstI 0, EcoRI 500, BalI 1500, <b>BamHI 2700</b>, BclI 3700, BglII 4500, <b>PstI 4700</b>. Looking for a pair exactly 2000 apart: 4700 − 2700 = 2000. So the answer is <b>PstI and BamHI</b>, and the other piece is 2700 bp.</p>" +
    "<p><b>Circular arithmetic:</b> for cuts at positions p₁ &lt; p₂ &lt; ... take each consecutive difference, then add the piece that wraps past zero: <b>total − p<sub>last</sub> + p<sub>first</sub></b>. Check your work by confirming the fragments sum to the plasmid size.</p>" +
    "<p><b>Mapping from gel data</b> (slide 8): given fragment sizes from enzyme A alone, B alone, and A+B together, you work out the only arrangement of cut sites consistent with all three digests. There is often more than one arrangement until you fix a reference point such as a labelled end.</p>",
  trick: "Say it out loud before every problem: <b>“line n+1, circle n”</b>.",
  traps: ["Giving n+1 bands for a circular plasmid. One cut in a plasmid gives ONE linear band.",
          "Forgetting the wrap-around fragment on a circular map.",
          "Not checking that fragments add up to the total; this catches most arithmetic slips.",
          "On the review map PstI appears twice, at both ends. Note which one you are using."],
  recall: ["How many fragments from 3 cuts on a linear molecule? On a plasmid?",
           "Write the formula for the wrap-around fragment of a circular digest.",
           "Work the review's 2 kb problem from the gap list without looking.",
           "What is the one-second check on any digest answer?"],
  one: "Linear: n cuts, n+1 fragments. Circular: n cuts, n fragments, including the one that wraps past zero. Always check the sizes sum to the total."
},
{
  id: "gel", m: "m4", title: "Gel electrophoresis & reading bands", heat: 3,
  src: "Week 11 L1 slide 7; Labs 5 and 6; review 'Other questions' #9",
  why: "The last question on the review is a gel you have to draw, and both labs end by running one. Expect to draw or read bands on the exam.",
  know: "DNA is <b>negatively charged</b> (the phosphate backbone), so in an electric field it runs <b>toward the positive electrode</b>. The gel is a mesh: <b>small fragments travel furthest</b>, large ones stay near the well.",
  eli5: "A crowd pushing through a dense hedge toward an exit. Small people slip through easily and get far; large people get tangled and barely move. After a fixed time you take a photograph, and position tells you size.",
  exam: "<p><b>Reading a gel:</b> compare each band against the <b>standard/ladder</b> lane of known sizes. Distance travelled is proportional to the <b>logarithm</b> of fragment size, which is why the ladder's rungs crowd together at the top.</p>" +
    "<p><b>Drawing a gel, the procedure:</b> work out the fragments for each lane (remember: circle n cuts → n bands), then place each band at the height its size implies, reading across from the ladder. Label each band with its size.</p>" +
    "<p><b>The review's answer, worked.</b> pLICHIS_Stag is 5762 bp. <b>SapI</b> alone cuts once at 2534 → one band at 5762. <b>HpaI (4519) + SapI (2534)</b> → 4519 − 2534 = <b>1985</b>, and 5762 − 1985 = <b>3777</b>. <b>SspI (724) + BamHI (210)</b> → 724 − 210 = <b>514</b>, and 5762 − 514 = <b>5248</b>. <b>SspI</b> alone → one band at 5762.</p>" +
    "<p><b>Lab practicalities:</b> samples are mixed with loading dye, which adds weight so they sink into the well and lets you see the run. <b>Ethidium bromide</b> stains the DNA and is read under <b>UV transillumination</b>; it is highly carcinogenic, which is why you never handle the gel. Do not puncture the bottom of a well or the sample leaks away.</p>" +
    "<p><b>Lab 6 applied:</b> cutting the 8577 bp pET22b with NotI (8407) and XbaI (5159) gives <b>3248</b> and <b>5329</b> bp. The AmpR gene sits near position 900, which falls in the arc running from 8407 past zero to 5159 — so resistance travels with the <b>larger</b> fragment.</p>",
  traps: ["DNA runs toward the POSITIVE electrode because it is negatively charged.",
          "Smaller fragments run FURTHER. Putting the big fragment at the bottom is a common slip.",
          "One cut in a plasmid gives ONE band, not two.",
          "Bands in a lane must sum to the starting molecule's size — use this to check before you commit."],
  recall: ["Which way does DNA migrate and why?",
           "Which travels further, a 500 bp or a 5000 bp fragment?",
           "Reproduce the four lanes of the review gel with their sizes.",
           "In Lab 6, which fragment carries ampicillin resistance and how do you know?",
           "What is the quick check that a drawn gel lane is right?"],
  one: "Negative DNA runs to the positive electrode and small fragments go furthest; bands in a lane must add up to the size of the molecule you cut."
});
