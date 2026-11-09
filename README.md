# College Startup Opportunity Research

An evidence-based assessment of **10 businesses two U.S. college students can start with $2,000–$4,000**, working 10–20 hours/week each. It covers cited market evidence, itemized startup budgets, three-scenario financial projections, launch plans, validation experiments, and a skeptical review of the recommendations.

*Prepared November 2026.*

## Headline recommendation

| Award | Business | Essential startup | Base-case operating profit, month 6* |
|---|---|---|---|
| **Best Overall** & **Fastest Path to Cash Flow** | Storefront + residential window cleaning | ~$1,250 (~$330 to test) | ~$2,660/mo |
| **Best Long-Term Business** | Pet waste removal subscription | ~$1,100 (~$400 to test) | ~$2,920/mo |
| **Lowest-risk benchmark / hedge** | Student-staffed tutoring agency | ~$650 (~$200 to test) | ~$3,100/mo |

\*Model projections, not results. Before owner taxes and before paying the partners.

**Strategy:** Start window cleaning + tutoring now. Pre-sell pet waste in February for a spring launch. Add house washing (spring) and holiday lights (fall) from profits, not starting capital, so the whole thing becomes one "exterior services + recurring routes" company.

## Read the report

1. [Executive Summary & Ranked Shortlist](report/01-executive-summary-and-shortlist.md): sections 1–3, method, screened-out ideas, scoring system
2. [Detailed Analysis — Ranks 1–5](report/02-detailed-analysis-ranks-1-5.md): window cleaning, pet waste, tutoring, exterior washing, mobile detailing
3. [Detailed Analysis — Ranks 6–10](report/03-detailed-analysis-ranks-6-10.md): website/GBP subscriptions, holiday lights, STR cleaning, moving + storage, furniture resale
4. [Financial Comparisons & Final Ranking](report/04-financial-comparison-and-final-ranking.md): side-by-side projections, score matrix, sensitivity test
5. [Top Three, Validation Experiments, Risk Review, First 30 Days](report/05-top-three-validation-risks-first-30-days.md)
6. [Final Recommendation & Sources](report/06-final-recommendation-and-sources.md): 67 cited sources

## Change the assumptions

Every projection table comes from [`model/financial_model.py`](model/financial_model.py). Edit a price, hours-per-job, cost, or customer count, then:

```bash
python3 model/financial_model.py           # print all tables
python3 model/financial_model.py --write   # rewrite the tables inside report/*.md
```

Summary figures quoted in prose (Parts 1, 4, 5, 6) are not regenerated automatically, so update them by hand if you change the model.

## Research caveats

- Facts are cited. Prices, hours, and volumes you'd charge or achieve are **assumptions**. All M1–M12 figures are **projections**.
- Named-company revenue figures are press-, self-, or seller-reported unless stated otherwise.
- Direct page retrieval was blocked during research, so many figures come from search-indexed excerpts. **Click through before relying on any number.**
- This isn't legal or tax advice. Confirm LLC, insurance, contractor-classification, and visa/work-authorization questions locally.
