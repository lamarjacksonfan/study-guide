# Study guide repository

This repository holds three separate projects:

- [BE 3415 Exam 3 study system](#be-3415-exam-3-study-system) in `be3415/`
- [Biology II Exam 2 study system](#biology-ii-exam-2-study-system) in `app/`
- [College startup opportunity research](#college-startup-opportunity-research) in `report/` and `model/`

## BE 3415 Exam 3 study system

An interactive study app for **Exam 3** of Fundamentals of Biomolecular Engineering,
built from six lectures (Weeks 10-13), the professor's *Review for Exam 3 with Answers*,
and Labs 4-6.

Open `be3415/index.html` in a browser, or use the published artifact.

### What's inside

| File | Contents |
| --- | --- |
| `be3415/data-meta.js` | Modules, materials analysis, gaps, high-yield priorities, a 7-session plan, the cram packet and the readiness checklist |
| `be3415/data-review.js` | All 71 review-sheet items with the answer key: 53 true statements, 9 multiple choice, 9 written problems, each linked to the topic that explains it |
| `be3415/data-topics-a/b/c.js` | 32 study topics across the nine modules |
| `be3415/data-cards.js` | 273 flashcards, generated from the topics |
| `be3415/data-q-practice.js` | 48 practice questions with per-option explanations, plus 53 held-out true/false items for the mock exams |
| `be3415/data-problems.js` | Restriction enzymes, two real plasmid maps, and the 8 problems taken from the review sheet and the labs |
| `be3415/problems.js`, `be3415/gels.js` | Seven problem generators and the SVG drawing for gels, circular maps and linear maps |
| `be3415/app.js`, `be3415/index.html` | The app: dashboard, exam map, plan, study, review sheet, problems, flashcards, practice, timed exams, weak areas, cram packet |

### Problem practice

The review sets written problems, not just multiple choice. The **Problems** tab drills those:

- **Primer design** - generates a template with a target region, grades both primers, and tells
  you *which* mistake you made (copied the top strand, reversed without complementing, used the
  wrong end).
- **Restriction digests** - which enzyme cuts a sequence, sticky vs blunt, and linear maps.
- **Plasmid gels** - draws a circular map and a log-scale gel, then checks your band sizes and
  reminds you that a circle cut *n* times gives *n* fragments, not *n+1*.
- **Enzyme kinetics** - reaction order, Michaelis-Menten and inhibitor effects.

The eight problems from the review sheet and the labs are included with their own worked answers.

### Regenerating the data

Several data files are generated from compact sources in `be3415/gen/`, so they cannot drift
from the material they came from:

```bash
cd be3415
python3 -I gen/gen_problems.py data-problems.js && python3 -I gen/gen_fixed.py data-problems.js
python3 -I gen/gen_review.py data-review.js
BEFILES=data-topics-a.js:data-topics-b.js:data-topics-c.js node gen/gen_cards.js data-cards.js
```

### Checks

All four suites run from the `be3415/` directory and need no arguments beyond the data list:

```bash
cd be3415
BEFILES=data-problems.js:problems.js:gels.js node gen/test.js
```

```bash
cd be3415
BEFILES=$(ls data-*.js | tr '\n' ':') node gen/test-data.js
```

```bash
cd be3415
node gen/smoke.js
```

```bash
cd be3415
node gen/interact.js
```

`gen/test.js` runs 400 randomized rounds of every problem generator (~12,200 assertions),
checking among other things that a decoy enzyme never actually appears in the sequence shown
and that gel bands always sum to the plasmid size. `gen/test-data.js` checks cross-file
integrity: every question resolves to a real module and topic, each wrong option carries an
explanation, and no mock-exam item reuses a practice question. `gen/smoke.js` and
`gen/interact.js` drive the real page in Chromium.

### Accuracy notes

- The plasmid maps are transcribed from the review sheet and the Lab 6 handout. The digest
  arithmetic reproduces the professor's own answer key exactly (SapI+HpaI gives 1985/3777,
  SspI+BamHI gives 514/5248), which is how the transcription was verified.
- The primer answers likewise reproduce his key (`GATAACAATGGCA` / `TGTAGCATTTTTG`).
- Seven topics have no review coverage at all - metabolic flux, receptor families,
  transformation, DNA polarity, RNAi, CRISPR and DNA libraries. The review sheet says in its
  own opening that lecture and lab material outside the handout will appear, so these are
  flagged throughout as blind spots rather than safe ground.
- Gel electrophoresis theory and qPCR have no lecture of their own in the uploaded material;
  both are noted as thin on the Exam map.

## Biology II Exam 2 study system

An interactive study app for Exam 2 (Modules 4–10), built from the professor's study guide, the 111 review questions and the lecture slides.

Open `app/index.html` in a browser, or use the published artifact.

### What's inside

| File | Contents |
| --- | --- |
| `app/data-meta.js` | Modules, materials analysis, master checklist (every study-guide term), 4-day plan, trait matrices, connections, cram sheet, final-night checklist |
| `app/data-review.js` | Expected answers for all 111 professor review-question stems, plus in-class slide questions |
| `app/data-topics-a.js`, `app/data-topics-b.js` | 28 study topics (Modules 4–10) |
| `app/data-cards.js` | 209 flashcards (facts + deeper prompts) |
| `app/data-q-practice.js` | 87 practice questions with per-option explanations |
| `app/data-q-exams.js` | Day 1 and Day 2 checkpoints and two 36-question mock exams (held out from practice) |
| `app/app.js`, `app/index.html` | The app: dashboard, study, flashcards, adaptive practice, timed exams, error log, confidence tracker |

Content marked ⚑ comes from the textbook (OpenStax Biology 2e) or *Your Inner Fish*, not the uploaded slides. The Module 9 slides and the viruses half of Module 5 weren't available.

## College startup opportunity research

An evidence-based assessment of **10 businesses two U.S. college students can start with $2,000–$4,000**, working 10–20 hours/week each. It covers cited market evidence, itemized startup budgets, three-scenario financial projections, launch plans, validation experiments, and a skeptical review of the recommendations.

*Prepared November 2026.*

### Headline recommendation

| Award | Business | Essential startup | Base-case operating profit, month 6* |
|---|---|---|---|
| **Best Overall** & **Fastest Path to Cash Flow** | Storefront + residential window cleaning | ~$1,250 (~$330 to test) | ~$2,660/mo |
| **Best Long-Term Business** | Pet waste removal subscription | ~$1,100 (~$400 to test) | ~$2,920/mo |
| **Lowest-risk benchmark / hedge** | Student-staffed tutoring agency | ~$650 (~$200 to test) | ~$3,100/mo |

\*Model projections, not results. Before owner taxes and before paying the partners.

**Strategy:** Start window cleaning + tutoring now. Pre-sell pet waste in February for a spring launch. Add house washing (spring) and holiday lights (fall) from profits, not starting capital, so the whole thing becomes one "exterior services + recurring routes" company.

### Read the report

1. [Executive Summary & Ranked Shortlist](report/01-executive-summary-and-shortlist.md): sections 1–3, method, screened-out ideas, scoring system
2. [Detailed Analysis — Ranks 1–5](report/02-detailed-analysis-ranks-1-5.md): window cleaning, pet waste, tutoring, exterior washing, mobile detailing
3. [Detailed Analysis — Ranks 6–10](report/03-detailed-analysis-ranks-6-10.md): website/GBP subscriptions, holiday lights, STR cleaning, moving + storage, furniture resale
4. [Financial Comparisons & Final Ranking](report/04-financial-comparison-and-final-ranking.md): side-by-side projections, score matrix, sensitivity test
5. [Top Three, Validation Experiments, Risk Review, First 30 Days](report/05-top-three-validation-risks-first-30-days.md)
6. [Final Recommendation & Sources](report/06-final-recommendation-and-sources.md): 67 cited sources

### Change the assumptions

Every projection table comes from [`model/financial_model.py`](model/financial_model.py). Edit a price, hours-per-job, cost, or customer count, then:

```bash
python3 model/financial_model.py           # print all tables
python3 model/financial_model.py --write   # rewrite the tables inside report/*.md
```

Summary figures quoted in prose (Parts 1, 4, 5, 6) are not regenerated automatically, so update them by hand if you change the model.

### Research caveats

- Facts are cited. Prices, hours, and volumes you'd charge or achieve are **assumptions**. All M1–M12 figures are **projections**.
- Named-company revenue figures are press-, self-, or seller-reported unless stated otherwise.
- Direct page retrieval was blocked during research, so many figures come from search-indexed excerpts. **Click through before relying on any number.**
- This isn't legal or tax advice. Confirm LLC, insurance, contractor-classification, and visa/work-authorization questions locally.
