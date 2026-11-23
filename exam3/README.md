# Biology 1442 · Exam 3 study system (Ecology, Modules 11–14)

One interactive app for Exam 3 (Tue Dec 1, 2026). Open `index.html` in a browser, or use the published artifact. It follows the Exam 2 app's layout (left rail, dashboard, study, flashcards, practice, exams, error log) and adds a Visual lab, a Tutor and a Sixth Extinction section.

## What's inside

| Section | Contents |
| --- | --- |
| Dashboard | Countdown, recommended next step, progress counts, mastery by module, weakest topics, accuracy by day, 8-day plan (Nov 23–30) with checkboxes, export/import |
| Learn | 32 lessons (M11: 7, M12: 7, M13: 9, M14: 9), each with simple → detailed → why → vocabulary → figure → compare → misconceptions → exam application → recall → takeaway, plus slide references |
| Professor 64 | All 64 study-guide stems word for word, with answer, explanation, concept, trap, source, a new practice variation, right/wrong marking, difficult and flag toggles, filters, retry-missed |
| Flashcards | 277 cards (definitions, why/how concepts, misconception checks, examples) with flip, shuffle, module/topic/type filters, missed/difficult/new decks |
| Practice | 165 original questions (levels 1–4, every wrong option explained), 64 professor variations, 71 transcribed class questions (Kahoot 36, Canvas 15, Woolink 20); filters, timed mode, adaptive order, retry missed |
| Visual lab | Interactive A–H food web (identify + remove-a-species), energy pyramid calculator, exponential vs logistic sliders, survivorship matching, clickable climograph, island equilibrium model + 5-island practice map, diversity builder with live Shannon index, interaction sorter, lake seasons, age pyramids, cycle sorter, trophic cascade |
| Mock exams | Two held-out 40-question exams (10 per module), timed or untimed, saved drafts, grading, by-module breakdown, recommendations, full explanations |
| Weak areas | Accuracy by topic, mistake types (7 categories, editable), repeated misses, full error log with retry |
| Tutor | Teach me, Quiz me, Rapid fire, Application, Feynman (key-idea check + model answer), Exam, Weakness review, Emergency cram; optional live "Ask Claude" panel |
| Sixth Extinction | Each assigned chapter's ecological concept, review questions with answers labeled by evidence (study guide / lecture slide / book-only) |
| Cram sheet | One-page summary, exam traps, plus your own weak topics and flagged professor questions |
| Exam map | File inventory, reading coverage, all 10 key terms, content map, the 64 questions mapped to lessons |

## Files

| File | Contents |
| --- | --- |
| `index.html` | Shell and styles |
| `data-meta.js` | Modules, file inventory, reading coverage, key terms, content map, study plan, tutor modes |
| `data-sg-stems.js` | The 64 stems, extracted verbatim from `Exam3StudyGuide.docx` |
| `data-sg.js` | Answers, explanations, flags and variations for the 64 |
| `data-topics-m11.js` … `data-topics-m14.js` | The 32 lessons |
| `data-cards.js` | Flashcards |
| `data-q-practice-a.js`, `data-q-practice-b.js` | Original practice bank |
| `data-q-class.js` | Kahoot / Canvas / Woolink questions |
| `data-q-exams.js` | Mock exams A and B |
| `data-extra.js` | Sixth Extinction review, cram sheet, emergency cram, Feynman prompts |
| `figures.js` | SVG figure library |
| `app-*.js` | App code (core, learn, practice, visual, tutor) |

## Sources and limits

- Built from the five lecture decks, the 64-stem study guide, the key-terms list and the three practice PDFs. No textbook or *Sixth Extinction* text was uploaded; content marked ⚑ comes from general ecology knowledge, and book-only answers are labeled.
- The study guide has no answer choices or figures. Q33, 35, 36, 37, 43 reference missing figures; Q6, 15, 27, 56, 57, 60, 61 depend on missing choices; Q36 has no question; Q38's stem contradicts M11 slide 65 (warm water holds less CO₂). All are flagged in the app.
- Kahoot answers are as check-marked in the source. Canvas and Woolink had no key; their answers are derived from the lectures. Canvas 12, 18, 19 (Your Inner Fish) are out of scope and not imported.
- Exam length and weighting are unknown; mock exams assume 40 questions, 50 minutes, equal module weight.
- Answer options in original/mock questions are shuffled deterministically per question so correct answers aren't clustered in one position.
- Progress saves in the browser and, in the published artifact, to the viewer's account. Mastery comes from answers only; opening a lesson never raises it.
