# Part 2 — Detailed Analysis: Ranks 1–5

**How to read the financial tables (applies to every idea)**
- **Operating profit** = revenue − variable costs − recurring fixed costs (insurance, software, phone, marketing). It is **before income/self-employment taxes and before paying either partner**. Your take-home is lower: set aside **~25–30%** of your share for federal/state income tax and the 15.3% self-employment tax (general rule; confirm with a tax preparer).
- **One-time startup purchases are not in operating costs.** They appear in section D and in the payback line.
- **Hours/partner/mo** includes the work itself plus sales, admin, and travel, split evenly between the two of you. **Effective $/hr** = profit per partner ÷ hours per partner.
- **M1/M3/M6/M12** = month 1, 3, 6, and 12 after launch, assuming you launch at the start of the business's normal season. Seasonal adjustments are noted.
- Every volume and price is an **assumption** I set conservatively against the cited market prices. The model code is in [`/model/financial_model.py`](../model/financial_model.py) so you can change any input.

---

## #1 — Storefront + Residential Window Cleaning

### A. Business Overview
- **What it does:** Cleans glass for (a) **storefront businesses** on a recurring route (restaurants, boutiques, salons, dentists, insurance offices, coffee shops), usually every 2–4 weeks, and (b) **homeowners** in one-off or twice-yearly interior/exterior jobs.
- **Services sold:** Storefront exterior glass (+ optional interior) on a monthly or biweekly plan. Residential "outside only" or "inside + out" packages. Screen and track cleaning add-ons. Later: hard-water stain removal and post-construction cleaning.
- **Target customers:** (1) Independent street-front businesses within 10 minutes of campus, especially food service with greasy, fingerprinted doors. (2) Owner-occupied homes, typically worth $250K+ and 1–2 stories, whose owners are 35–70 and value their time.
- **Problem solved:** Dirty glass makes a business look neglected, and owners don't want staff on ladders. Homeowners can't safely or easily clean second-story windows.
- **How you make money:** Per-visit or flat monthly fee. Storefronts: about $25–$40 per visit, modeled as **$60/month per account** (≈2 visits). Homes: modeled at **$250 per job**.

### B. Why This Business Could Work
- **Demand driver:** Glass gets dirty continuously, so storefront demand is **recurring**. Residential demand is **seasonal** (spring and fall peaks), with jobs repeating 1–2× per year.
- **Why customers would choose you:** Small storefront accounts are often underserved, because larger firms find a $30 stop barely worth the drive. You win on **reliability (showing up on the same day every cycle), responsiveness (text-to-reschedule), and price transparency**.
- **Barriers to entry:** Low. That's both the opportunity and the threat: anyone can start, but most new operators quit or show up inconsistently.
- **Realistic competitive advantage:** **Route density.** Twenty stores within one mile take about 4 hours to clean; twenty stores spread across town take a whole day. Lock down a few blocks first.
- **Student fit:** Storefronts are cleaned **early morning (6–9 a.m.) or evenings**, before or after classes. Each stop takes 10–20 minutes. Startup equipment is under $800.
- **Proven model vs. your odds:** The model is proven (franchises like Fish Window Cleaning and Squeegee Squad exist, and students have started window businesses). **Your version's risk** is that forum operators disagree on whether storefront routes pay off early ([WindowCleaner.com thread](https://community.windowcleaner.com/t/as-a-newbe-is-getting-into-storefront-worth-it/45640)). That's why the model pairs storefront volume with higher-ticket residential jobs.

### C. Proof That the Model Works
| Evidence | What it shows | Type |
|---|---|---|
| [HomeAdvisor 2025 window cleaning cost](https://www.homeadvisor.com/cost/cleaning-services/clean-windows) | Typical residential job **~$220** (range ~$150–$302), ~**$10/window**; average home has ~22 windows | Published consumer pricing |
| [Fixr (updated Aug 2025)](https://fixr.com/costs/window-cleaning) | National average **~$310**, range $190–$460; $8–$16 per window | Published consumer pricing |
| [ThePricer — commercial window cleaning](https://www.thepricer.org/cost-to-hire-commercial-window-cleaners/) | Small storefronts **~$75–$175/visit**; very small recurring route stops **$40–$100+** | Secondary pricing guide |
| [WindowCleaner.com storefront price survey](https://community.windowcleaner.com/t/store-front-price-survey/343) and ["Making money on storefronts from day 1"](https://community.windowcleaner.com/t/making-money-on-storefronts-from-day-1/10728) | Working operators discuss real route prices and how to build a route | Practitioner anecdotes |
| [Diablo Gazette (July 2024)](https://www.diablogazette.com/2024/07/inspired-students-start-businessas-a-clean-way-to-make-money/) | Two students ran a door-to-door window-washing business while taking classes | Press, no revenue figures |
| [Rochester Business Journal](https://rbj.net/2015/04/17/window-cleaning-allows-owner-to-clean-up/) | Penfield Window Cleaning was launched in 2009 after the founder's college-era lawn customers asked for window cleaning | Press (older) |
| [Entrepreneur — Shine Window Care & Holiday Lighting](https://entrepreneur.com/franchises/this-holiday-chore-helped-a-window-washing-business-grow/285118) | A window-washing business fixed its slow winter by adding holiday lights in 2006 and began franchising in 2011 | Press (2016) |

**Verification note:** I found no audited P&L for a student storefront route. Revenue claims on forums and social media (for example, "$1K/day") are **unverified anecdotes** and are not used in the projections.

### D. Startup Cost Breakdown
| Expense | Estimated cost | Essential? |
|---|---|---|
| Equipment: pro squeegee and washer kit (12/14/18" channels, strip washers, scrapers, bucket, tool belt) $200; two extension poles $80; 6-ft step ladder + 24-ft extension ladder $380; ladder mitts/stabilizer $40 | **$700** | Essential (storefront-only start: ~$320, skip the extension ladder) |
| Software: domain + Google Workspace (2 mo); Square Invoices (free); Google Voice (free) | **$30** | Essential |
| Marketing: 500 business cards + 250 one-page price sheets + 250 door hangers | **$150** | Essential |
| Registration/insurance: LLC state filing (varies by state, ~$50–$500; $150 placeholder) + first month general liability (~$50–$75/mo; cleaning businesses average ~$48/mo per [Insureon](https://insureon.com/cleaning-business-insurance/cost), work at heights may cost more) | **$210** | Essential (insurance); LLC strongly recommended |
| Initial supplies: solution, spare rubbers/blades, 24 microfiber towels | **$60** | Essential |
| Contingency/reserve | **$100** | — |
| **Total** | **$1,250** | |
| *Optional upgrades:* water-fed pole + pure-water (DI) system ($800–$1,500) for 2nd-story exteriors without ladders; Jobber/Housecall Pro scheduling software | *(later, from profits)* | Optional |

### E. Revenue and Profitability Analysis
**Assumptions:** Storefront account = **$60/month** (≈2 visits × $30), **0.9 person-hours/month** including drive time. Residential job = **$250**, **5 person-hours** (two people × ~2.5 hrs). Variable costs are 5–6% of revenue (fuel, chemicals, card fees). Fixed costs are $110–$160/month (insurance, software, phone, marketing). Sales/admin is 20–30 hrs/month at first (door-to-door canvassing), then falls.

<!-- table:windows -->
| Scenario | Month | Volume × price | Revenue | Operating costs | Operating profit | Per partner | Hrs/partner/mo | Effective $/hr |
|---|---|---|---|---|---|---|---|---|
| Conservative | M1 | 4 storefront accts × $60; 1 residential jobs × $250 | $490 | $187 | **$303** | $152 | 19 | $8 |
| Conservative | M3 | 9 storefront accts × $60; 2 residential jobs × $250 | $1,040 | $167 | **$873** | $436 | 19 | $23 |
| Conservative | M6 | 15 storefront accts × $60; 3 residential jobs × $250 | $1,650 | $210 | **$1,440** | $720 | 24 | $30 |
| Conservative | M12 | 22 storefront accts × $60; 4 residential jobs × $250 | $2,320 | $266 | **$2,054** | $1,027 | 32 | $32 |
| Base | M1 | 6 storefront accts × $60; 2 residential jobs × $250 | $860 | $208 | **$652** | $326 | 23 | $14 |
| Base | M3 | 14 storefront accts × $60; 4 residential jobs × $250 | $1,840 | $212 | **$1,628** | $814 | 26 | $31 |
| Base | M6 | 24 storefront accts × $60; 6 residential jobs × $250 | $2,940 | $282 | **$2,658** | $1,329 | 36 | $37 |
| Base | M12 | 36 storefront accts × $60; 9 residential jobs × $250 | $4,410 | $383 | **$4,027** | $2,014 | 51 | $40 |
| Optimistic | M1 | 10 storefront accts × $60; 3 residential jobs × $250 | $1,350 | $235 | **$1,115** | $558 | 27 | $21 |
| Optimistic | M3 | 22 storefront accts × $60; 6 residential jobs × $250 | $2,820 | $266 | **$2,554** | $1,277 | 35 | $37 |
| Optimistic | M6 | 36 storefront accts × $60; 10 residential jobs × $250 | $4,660 | $378 | **$4,282** | $2,141 | 51 | $42 |
| Optimistic | M12 | 52 storefront accts × $60; 14 residential jobs × $250 | $6,620 | $506 | **$6,114** | $3,057 | 70 | $43 |
<!-- /table -->

- **Payback of the $1,250 startup:** base case ≈ **month 2**; conservative ≈ month 3.
- **Seasonality:** Residential volume drops in Dec–Feb in cold climates; storefront routes continue, slowed by freezing weather. Plan for winter months at **~60–70%** of these figures in northern states.

### F. Customer Acquisition Strategy
- **First 10 customers:** Walk a **single commercial strip or downtown block** near campus between **2–4 p.m.** (after lunch, before dinner rush). Target places with visibly dirty doors: cafés, pizza shops, nail salons, phone repair shops, clothing boutiques.
- **Approach:** Ask for the owner or manager. Offer to clean the front door glass **free on the spot** (2 minutes) as a demo, then quote the route price. Leave a one-page price sheet with your phone number and photos.
- **Pitch script (in person):**
  > "Hi, I'm ___. My partner and I run a small window-cleaning route on this block. We do the front glass every other week before you open, so you never have to think about it. For a storefront your size it's $30 a visit, no contract, cancel any time. Can I clean your door right now for free so you can see the result?"
- **Residential:** Ask every storefront owner, "Do you live nearby? We do homes too." Post before/after photos on Nextdoor and in local Facebook groups. Hang 250 door hangers in one owner-occupied neighborhood with "Book this week: $25 off."
- **Most effective channels (in order):** in-person walk-ins, referrals between neighboring shops, Google Business Profile (free), Nextdoor, door hangers. **Skip paid ads** until you have 20+ reviews.
- **Acquisition cost:** about $0–$15 per storefront account (your time plus printing), and roughly $20–$40 per residential job via door hangers (assumption).
- **Repeat customers:** Recurring calendar slots, auto-invoicing by card on file, and a "we noticed your awning is dirty" upsell. Ask every happy customer for a Google review the same day.

### G. Step-by-Step Launch Plan
| Phase | Actions | Measurable milestone |
|---|---|---|
| **Days 1–7: Validation** | Buy only the ~$320 storefront kit. Practice on your own or friends' windows (YouTube: pro squeegee technique). Walk in to **60 businesses** across 2–3 afternoons. Ask: "How often are your windows cleaned now? By whom? What do you pay?" Offer the free door demo. | **≥5 paid commitments** (first visit booked and paid) = proceed. 2–4 = adjust price or area. 0–1 = stop. |
| **Days 8–14: Setup** | File the LLC (or start as a general partnership and file soon), get liability insurance, open a business bank account, set up Square Invoices and Google Business Profile. **Split roles:** Partner A = sales + scheduling; Partner B = operations quality + supplies + bookkeeping. Both clean. | Insurance certificate in hand (some stores will ask). Route map drawn. |
| **Days 15–30: First customers** | Clean the committed accounts on a fixed weekday morning. Canvass 2 more blocks. Hang 250 residential door hangers. | **10 recurring storefronts + 2 residential jobs**; 5 Google reviews |
| **Days 31–60: Optimization** | Time every stop and drop or raise prices on slow stops. Add interior glass upsells. Build a stop checklist and before/after photo routine. | Average route stop ≤15 minutes; **15+ accounts**; effective rate ≥$30/hr |
| **Days 61–90: Growth** | Add a second route cluster. Pitch property managers (multi-store strip centers). Decide on the water-fed pole system. | **20–25 accounts, 4–6 residential jobs/month, ≥$1,500/mo operating profit** |

### H. Scalability and Long-Term Potential
- **$1,000/month:** ~12 storefronts + 2 homes per month. Likely by **month 2–3** (base).
- **$3,000/month:** ~25 storefronts + 7 homes per month, about 40 hrs per partner per month. **Month 6–8** (base).
- **$5,000–$10,000/month:** needs **1–2 part-time cleaners** (fellow students at $18–$22/hr), a second service line (pressure washing, #4, and holiday lights, #7), and about 60–100 storefronts or 30+ homes per month. This is realistic in **18–36 months**, and it's exactly how many window companies grow (see the Shine example above).
- **After graduation:** Routes are **sellable assets**. Window-cleaning forums discuss buying and selling storefront routes ([WindowCleaner.com](https://community.windowcleaner.com/t/buying-a-storefront-route/55081)). Alternatively, hire a route manager.
- **Growth limit:** **Your labor hours** and winter seasonality, not demand.

### I. Risks, Challenges, and Failure Points
| Risk | Mitigation |
|---|---|
| 1. Ladder falls / injury | Storefront-first (ground level). Use ladder stabilizers. Never work alone on ladders. Buy a water-fed pole before taking on 2-story homes. |
| 2. Property damage (scratched glass from razor on tempered glass) | Learn tempered-glass rules (no razor on tempered glass without testing). Carry liability insurance. Do a pre-job walkaround with photos. |
| 3. Low route density, so drive time kills profit | Sell **one block at a time**; decline accounts more than 10 minutes off-route unless they pay a premium. |
| 4. Customers cancel when they cut costs | Month-to-month terms build trust. Keep 10%+ of revenue from residential so route churn hurts less. |
| 5. Exams and breaks disrupt the schedule | Fixed route day; partners cover each other. Line up a backup student cleaner by month 3. |

**Plausible failure even with hard work:** Your town's storefront density is too low (a suburban campus with few walkable retail strips), so the route never gets dense enough to beat ~$25/hr. Residential is then the main business, and it is seasonal.

### J. Final Verdict
| Affordability | Ease | Demand evidence | Profit | Scalability | Schedule fit | Speed | Downside (safety) | **Weighted** |
|---|---|---|---|---|---|---|---|---|
| 10 | 7 | 7 | 6 | 7 | 9 | 9 | 9 | **7.75** |

**Recommendation: START HERE.** Cheapest real test, fastest cash, recurring revenue, and a natural path into higher-ticket exterior services.

---

## #2 — Pet Waste Removal Subscription ("Pooper Scooper")

### A. Business Overview
- **What it does:** Visits customers' yards weekly (or twice weekly or biweekly), picks up all dog waste, bags it, and disposes of it (typically in the customer's own trash bin, where local rules allow). Optional: deodorizing/sanitizing spray.
- **Services sold:** Weekly service (core), biweekly service, one-time "spring cleanup" of a neglected yard, and add-ons (deodorizer, extra dogs, litter-box swaps).
- **Target customers:** Dual-income households with 1–3 dogs in single-family homes with fenced yards; elderly or mobility-limited owners; busy families. Secondary: HOAs, apartment complexes with dog areas, and real-estate agents preparing listings.
- **Problem solved:** An unpleasant weekly chore that everyone puts off.
- **How you make money:** Recurring monthly billing, modeled at **$80/month per yard** (≈$18–$20 per weekly visit) plus **$100 initial cleanups**.

### B. Why This Business Could Work
- **Demand driver:** Dogs produce waste every day, so **demand is recurring**. There's a spring rush when snow melts, and it slows in deep winter in the North.
- **Why you over competitors:** Many towns have zero or one provider. Where competitors exist, they're often solo operators with spotty reliability. You compete on **reliability, gate-photo proof of service (a text photo after every visit), and friendliness to pets**.
- **Barriers to entry:** Low capital, and a stigma (the "gross factor") that keeps many people out. That stigma is your moat.
- **Competitive advantage:** **Route density plus recurring billing.** 40 yards in 3 adjacent neighborhoods is a very efficient route.
- **Student fit:** Visits are flexible (any daylight hour, 10–15 minutes each). Two partners can cover for each other. Afternoon routes after class work well.
- **Proven model vs. your odds:** The model is clearly proven (multiple documented operators). Your specific risk is **slow customer accumulation in winter** and the need to never miss a week.

### C. Proof That the Model Works
| Evidence | What it shows | Type |
|---|---|---|
| [Side Hustle Nation — Swoop Scoop](https://www.sidehustlenation.com/pet-waste-removal-business/) | Founder Will Milliken went from 0 to **~350 recurring customers in his first three months**, and the business has reported **$3M+ in revenue** (the period isn't specified in what I could access) | Founder-reported (podcast/article) |
| [NBC/CNBC Make It — Kroopin's Poopin Scoopin (Michigan)](https://www.nbcnewyork.com/news/business/money-report/how-this-37-year-old-grew-her-side-hustle-into-a-business-bringing-in-over-200000-a-year-without-a-college-degree/6063589/) | A side hustle grown to **over $200K/year**; **on track for ~$250K in 2024 per financial documents reviewed by CNBC** | **Press-verified documents** (strongest evidence in this report) |
| [Side Hustle Nation — "$50 an hour part-time"](https://www.sidehustlenation.com/pet-waste-removal/) | An operator interview describing part-time hourly economics | Self-reported |
| [Time To Pet guide](https://www.timetopet.com/blog/how-to-start-a-pooper-scooper-business-a-complete-guide) and other 2025–26 guides | Weekly service about **$15–$30 per visit**, roughly **$50–$120/month** for most single-dog yards; startup costs commonly **~$1,000–$5,000** | Vendor guides (pricing benchmarks) |
| [UpFlip Podcast ep. 166](https://theupflippodcast.buzzsprout.com/1812063/episodes/16285972-166-side-hustle-to-6-figures-how-to-start-a-pooper-scooper-business) | An operator interview on growing a side hustle to six figures | Self-reported |

**Note:** Vendor projections such as "$7,500–$15,000/month by months 7–12" are **marketing estimates** and were not used.

### D. Startup Cost Breakdown
| Expense | Estimated cost | Essential? |
|---|---|---|
| Equipment: 2 scooper sets (rake + pan / spade) $140; lidded 5-gal buckets + liners $40; pump sprayer for disinfectant $40; boots, gloves, boot covers $40 | **$260** | Essential |
| Software: billing and route app or Square subscriptions (first months) | **$30** | Essential (free options exist) |
| Marketing: 1,000 door hangers $110; 25 yard signs $150; $150 Nextdoor/Facebook local test ads | **$410** | Hangers essential; ads optional |
| Registration/insurance: LLC (~$150 placeholder) + first month GL (~$45–$60) | **$210** | Essential |
| Initial supplies: 1,000 waste bags; kennel-grade disinfectant (kills parvo, a must for cross-yard hygiene) | **$80** | Essential |
| Contingency/reserve | **$110** | — |
| **Total** | **$1,100** | |
| *Optional:* scooper-specific CRM; branded polo shirts; deodorizer service supplies | *(later)* | Optional |

### E. Revenue and Profitability Analysis
**Assumptions:** **$80/month per recurring yard** (≈4.3 weekly visits at ~$18.50); **1.7 person-hours/month per yard** (≈12 min on site + ~12 min driving per visit). Initial cleanup = $100, 1.5 hrs. Variable costs are 8% (bags, disinfectant, fuel, card fees). Fixed costs are $120–$170/month.

<!-- table:petwaste -->
| Scenario | Month | Volume × price | Revenue | Operating costs | Operating profit | Per partner | Hrs/partner/mo | Effective $/hr |
|---|---|---|---|---|---|---|---|---|
| Conservative | M1 | 4 recurring yards × $80; 3 initial cleanups × $100 | $620 | $211 | **$409** | $205 | 18 | $11 |
| Conservative | M3 | 12 recurring yards × $80; 4 initial cleanups × $100 | $1,360 | $217 | **$1,143** | $572 | 21 | $28 |
| Conservative | M6 | 22 recurring yards × $80; 3 initial cleanups × $100 | $2,060 | $286 | **$1,774** | $887 | 28 | $31 |
| Conservative | M12 | 32 recurring yards × $80; 2 initial cleanups × $100 | $2,760 | $355 | **$2,405** | $1,203 | 38 | $32 |
| Base | M1 | 6 recurring yards × $80; 5 initial cleanups × $100 | $980 | $233 | **$747** | $373 | 21 | $17 |
| Base | M3 | 18 recurring yards × $80; 6 initial cleanups × $100 | $2,040 | $265 | **$1,775** | $887 | 27 | $33 |
| Base | M6 | 35 recurring yards × $80; 5 initial cleanups × $100 | $3,300 | $379 | **$2,921** | $1,460 | 41 | $36 |
| Base | M12 | 55 recurring yards × $80; 4 initial cleanups × $100 | $4,800 | $512 | **$4,288** | $2,144 | 59 | $36 |
| Optimistic | M1 | 10 recurring yards × $80; 8 initial cleanups × $100 | $1,600 | $274 | **$1,326** | $663 | 27 | $25 |
| Optimistic | M3 | 28 recurring yards × $80; 8 initial cleanups × $100 | $3,040 | $339 | **$2,701** | $1,350 | 37 | $36 |
| Optimistic | M6 | 50 recurring yards × $80; 7 initial cleanups × $100 | $4,700 | $485 | **$4,215** | $2,108 | 55 | $38 |
| Optimistic | M12 | 80 recurring yards × $80; 6 initial cleanups × $100 | $7,000 | $682 | **$6,318** | $3,159 | 82 | $39 |
<!-- /table -->

- **Payback of $1,100:** base ≈ **month 2**.
- **Seasonality:** Launch in **late February–March** to catch the spring rush. In snowy climates, expect winter pauses (offer "winter biweekly" plans to reduce churn).

### F. Customer Acquisition Strategy
- **First 10 customers:** (1) **Door hangers** in 2–3 neighborhoods of single-family homes with fenced backyards (spot them on Google Maps satellite view), 300 per neighborhood. (2) A **Nextdoor** post with a launch offer. (3) **Partnerships:** leave cards and a referral offer with 3 dog groomers, 2 vets, and dog-walking or daycare businesses. (4) Real-estate agents who need yards cleaned before showings.
- **Pitch (door hanger / Nextdoor post):**
  > "Hate picking up the yard? We'll do it every week. Local college students, fully insured, with a photo text after every visit so you know it's done. **$18/visit for 1 dog**, no contract. First cleanup **half off** for neighbors on [Street]. Text ___."
- **Acquisition cost:** roughly **$15–$40 per customer** via door hangers (assumption based on typical 0.5–1.5% response rates). Close to free via referrals.
- **Repeat and retention:** Billing is automatically recurring. Text a photo after each visit. Offer a **"refer a neighbor, get a free week"** deal, which also builds route density.

### G. Step-by-Step Launch Plan
| Phase | Actions | Milestone |
|---|---|---|
| **Days 1–7: Validation** | Search Google Maps and Nextdoor for existing scoopers and note their prices. Post a "would you pay $18/week?" message **with a booking link that takes a $25 deposit** (not a survey). Drop 300 hangers in one neighborhood. | **≥5 paid deposits per 300 hangers** = proceed; 2–4 = test a new neighborhood or price; 0–1 = pause and retest in spring. |
| **Days 8–14: Setup** | LLC, insurance, billing, disinfectant protocol (spray tools and boots between yards). **Roles:** A = marketing + customer texts; B = routing + billing. Alternate route days. | Route map; service checklist; photo-proof workflow |
| **Days 15–30: First customers** | Complete initial cleanups. Hang 600 more door hangers. Visit groomers and vets. | **10 recurring yards** |
| **Days 31–60: Optimization** | Cluster new sign-ups and decline far-away yards. Introduce a deodorizer add-on ($10/month). | **20 yards**; ≤25 min per stop including drive |
| **Days 61–90: Growth** | Referral program; HOA/apartment pitch; hire a backup scooper. | **30–35 yards; ≥$2,000/mo operating profit** |

### H. Scalability and Long-Term Potential
- **$1,000/month:** ~13–15 yards. **$3,000/month:** ~36–40 yards (≈60 hrs/month combined).
- **$5,000–$10,000/month:** 70–140 yards with **1–2 part-time employees** paid per yard or per hour. A solo operator can handle about 125–150 accounts on a dense route, per a vendor estimate (treat as rough).
- **After graduation:** The most **"absentee-able"** business on this list: simple work, easy to train, and recurring billing. Routes can be sold.
- **Growth limit:** The local count of dog-owning households willing to pay, plus winter churn.

### I. Risks, Challenges, and Failure Points
| Risk | Mitigation |
|---|---|
| 1. Missed visits destroy trust | Fixed route days; partner backup; text customers before any delay. |
| 2. Disease transfer between yards (parvo) | Disinfect tools and boots between every yard; never enter a yard with a sick-dog notice. |
| 3. Dog bites / gate left open | Require dogs indoors during service; latch-check checklist; photo of closed gate; liability insurance. |
| 4. Winter cancellations | Winter biweekly plan; prepay discounts (pay 6 months, get 2 weeks free). |
| 5. Disposal rules | Confirm local ordinances on bagging waste into customers' trash. Offer to haul it away as an add-on if required. |

**Plausible failure:** Your campus is in a dense urban area with few fenced single-family yards, so the route never gets dense enough. Check Google Maps satellite view before spending anything.

### J. Final Verdict
| Affordability | Ease | Demand evidence | Profit | Scalability | Schedule fit | Speed | Downside (safety) | **Weighted** |
|---|---|---|---|---|---|---|---|---|
| 10 | 8 | 8 | 6 | 8 | 8 | 6 | 9 | **7.72** |

**Recommendation: STRONG — best long-term business.** Recurring, low-skill, sellable. Pre-sell now and launch fully for the spring rush.

---

## #3 — Student-Staffed Tutoring Agency (Local K-12 Math & SAT/ACT)

### A. Business Overview
- **What it does:** Starts with you two tutoring local high-school and middle-school students in math and SAT/ACT prep (in person at libraries or homes, or online). Then, once demand exceeds your hours, you **recruit vetted classmates as independent tutors**, charge parents $55/hr, pay tutors ~$27/hr, and keep the margin for matching, scheduling, quality control, and billing.
- **Services sold:** Weekly math tutoring (Algebra–Calculus), SAT/ACT packages (e.g., 10 sessions), finals cram sessions, AP subject help.
- **Target customers:** Parents of students in grades 7–12 in middle- and upper-middle-income school districts near campus.
- **Problem solved:** Parents want affordable, reliable, relatable tutors without vetting strangers themselves.
- **How you make money:** Hourly sessions or prepaid packages.

### B. Why This Business Could Work
- **Demand driver:** Grades, tests, and college admissions. Recurring weekly during the school year, with peaks before SAT/ACT dates and finals and a dip in summer.
- **Why you over competitors:** Big marketplaces (Wyzant, Varsity Tutors) charge parents more and take a cut from tutors. You offer **local, in-person, vetted college tutors at ~$50–$55/hr**, below the ~$62/hr SAT average, with a single point of contact.
- **Barriers to entry:** Low. Your **moat is reputation inside specific schools** (parents talk) and your supply of reliable student tutors.
- **Student fit:** Sessions are **evenings and weekends**, exactly when you're free. Zero equipment needed.
- **Proven model vs. your odds:** The model is proven (several student-founded agencies). The risk is that it stays a **job** unless you actually make the jump to contractor tutors. AI study tools are also a growing substitute for basic homework help (less so for accountability-driven test prep).

### C. Proof That the Model Works
| Evidence | What it shows | Type |
|---|---|---|
| [Wiingy study of 3,600 tutors (GlobeNewswire, Sept 30, 2025)](https://www.globenewswire.com/news-release/2025/09/30/3158961/0/en/sat-prep-tutoring-costs-63-more-than-language-learning-wiingy-study-finds.html) / [Wiingy research](https://wiingy.com/research/private-tutoring-costs-in-usa) | SAT tutoring averages **$62/hr** (range $25–$170); math averages **$46/hr** | Marketplace data (2025) |
| [K12.com rate guide](https://tutoring.k12.com/resources/parent-guides/costs-and-funding/rates-math-reading-sat-act/are-you-overpaying-for-math-or-sat-tutoring-rates/) | Private math **$40–$100/hr**; 1:1 SAT **$60–$150/hr** | Provider guide |
| [The Apopka Voice — SoFlo Tutors](https://theapopkavoice.com/this-entrepreneur-built-a-1m-sat-tutoring-business-from-his-bed/) | Founder started while in college, reports **~$15K/month** and hired tutors to keep up with demand | Self-reported |
| [Duke Chronicle (2019)](https://dukechronicle.com/article/2019/12/duke-university-student-massapequa-tutor-company-long-island) | A Duke student's Long Island tutoring company is built on student tutors | Press |
| [Clue / Danny's Tutoring](https://cluecho.com/7758/features/get-hired-help-dannys-tutoring/) | A UCSB graduate's student-driven K-12 agency grew from **11 to 65 tutors** | Press |
| [The Hoya — student tutoring company grows](https://thehoya.com/uncategorized/business/business-top/student-tutoring-company-grows-2/) | A student-run tutoring company at Georgetown | Press |

### D. Startup Cost Breakdown
| Expense | Estimated cost | Essential? |
|---|---|---|
| Equipment: portable whiteboard / supplies (assumes you own laptops) | **$40** | Essential |
| Software: domain + simple website $60; Google Workspace $30; free scheduling (Calendly) | **$90** | Essential |
| Marketing: flyers for libraries and community boards $60; boosted posts in local parent Facebook groups $100 | **$160** | Essential |
| Registration: LLC (~$150 placeholder) | **$150** | Recommended |
| Supplies: official SAT/ACT practice books and materials | **$80** | Essential |
| Contingency, incl. background checks for future tutors (~$30–$50 each) | **$130** | — |
| **Total** | **$650** | |
| *Optional:* professional liability insurance; tutoring CRM (TutorBird/TutorCruncher) once you have 5+ tutors | *(later)* | Optional |

### E. Revenue and Profitability Analysis
**Assumptions:** Partner-taught session = **$50/hr** and **1.3 person-hours** (prep and travel). Contractor-taught session = **$55/hr** to the parent, **$27/hr** to the tutor, and 0.2 hrs of your coordination time. Card fees are 3%. Fixed costs are $70–$110/month.

<!-- table:tutoring -->
| Scenario | Month | Volume × price | Revenue | Operating costs | Operating profit | Per partner | Hrs/partner/mo | Effective $/hr |
|---|---|---|---|---|---|---|---|---|
| Conservative | M1 | 12 partner sessions × $50 | $600 | $108 | **$492** | $246 | 15 | $16 |
| Conservative | M3 | 28 partner sessions × $50 | $1,400 | $112 | **$1,288** | $644 | 23 | $28 |
| Conservative | M6 | 36 partner sessions × $50; 16 contractor sessions × $55 | $2,680 | $602 | **$2,078** | $1,039 | 33 | $31 |
| Conservative | M12 | 36 partner sessions × $50; 50 contractor sessions × $55 | $4,550 | $1,596 | **$2,954** | $1,477 | 40 | $37 |
| Base | M1 | 20 partner sessions × $50 | $1,000 | $120 | **$880** | $440 | 20 | $21 |
| Base | M3 | 40 partner sessions × $50; 8 contractor sessions × $55 | $2,440 | $359 | **$2,081** | $1,040 | 32 | $33 |
| Base | M6 | 44 partner sessions × $50; 40 contractor sessions × $55 | $4,400 | $1,302 | **$3,098** | $1,549 | 41 | $38 |
| Base | M12 | 44 partner sessions × $50; 110 contractor sessions × $55 | $8,250 | $3,328 | **$4,922** | $2,461 | 52 | $48 |
| Optimistic | M1 | 28 partner sessions × $50 | $1,400 | $132 | **$1,268** | $634 | 26 | $25 |
| Optimistic | M3 | 48 partner sessions × $50; 24 contractor sessions × $55 | $3,720 | $830 | **$2,890** | $1,445 | 39 | $37 |
| Optimistic | M6 | 52 partner sessions × $50; 80 contractor sessions × $55 | $7,000 | $2,460 | **$4,540** | $2,270 | 50 | $46 |
| Optimistic | M12 | 52 partner sessions × $50; 200 contractor sessions × $55 | $13,600 | $5,918 | **$7,682** | $3,841 | 66 | $58 |
<!-- /table -->

- **Payback of $650:** **month 1** in all scenarios.
- **Seasonality:** June–August volume can fall 40–60%. Offer summer SAT boot camps to offset.
- **Legal note:** Contractor tutors must actually be independent (they set their own availability and use their own methods). Get a short consult or use your state's contractor test. Some districts require background checks for anyone working with minors.

### F. Customer Acquisition Strategy
- **First 10 customers:** (1) Post in **local parent Facebook groups** and on Nextdoor. (2) Email **high-school counselors and math teachers** (many keep tutor lists). (3) Flyers at public libraries. (4) Your own former high school if it's nearby. (5) Ask your first 3 families for referrals at session 3.
- **Pitch (parent Facebook group):**
  > "Hi neighbors! I'm a [major] student at [University]. I scored [score] on the SAT and tutor Algebra through Calculus. I offer 1-on-1 sessions at the library or online for $50/hr, with a free 20-minute diagnostic so you can see if it's a fit. I send parents a short progress note after every session. Message me!"
- **Acquisition cost:** about $0–$30 per family. **Repeat customers:** weekly standing slots, prepaid 10-session packages (5% off), and progress notes that justify renewal.

### G. Step-by-Step Launch Plan
| Phase | Actions | Milestone |
|---|---|---|
| **Days 1–7: Validation** | Post in 3 parent groups; email 10 counselors; offer free diagnostics. | **≥3 families book paid sessions** |
| **Days 8–14: Setup** | Website with tutor bios, booking link, prepaid packages via Square/Stripe. **Roles:** A = parent communication and sales; B = curriculum and progress-note templates. | Booking system live |
| **Days 15–30: First customers** | Deliver sessions; collect a written testimonial from each family. | **6–8 weekly students (~20 sessions/month)** |
| **Days 31–60: Optimization** | Standardize a diagnostic → plan → weekly-note process. Recruit 3 tutor candidates (high scorers, education majors) and run test sessions. | Waitlist ≥3 families |
| **Days 61–90: Growth** | Place overflow with contractor tutors; sell SAT packages ahead of test dates. | **≥10 contractor sessions/month; ≥$2,000/mo operating profit** |

### H. Scalability and Long-Term Potential
- **$1,000/month:** ~22 personal sessions. **$3,000/month:** ~44 personal + 40 contractor sessions (month ~6).
- **$5,000–$10,000/month:** needs **~150–350 contractor sessions/month** (8–20 active tutors). Agencies built on student tutors exist at that scale (Danny's Tutoring grew to 65 tutors).
- **After graduation:** It can continue if you keep recruiting at your university, but the tutor pipeline is tied to campus and your local reputation.
- **Growth limit:** **Quality control and tutor reliability**, not demand.

### I. Risks, Challenges, and Failure Points
| Risk | Mitigation |
|---|---|
| 1. It stays a job (your hours = your income) | Set a hard rule: by month 3, every new family goes to a contractor tutor. |
| 2. Contractor tutors flake or underperform | Trial sessions, parent feedback after session 2, replace quickly, a bench of backups. |
| 3. Liability with minors | Sessions in public places (libraries) or online; background checks; written policies. |
| 4. Seasonality (summer, holidays) | Summer SAT and "next-year prep" camps; prepaid packages. |
| 5. Substitution by AI tools / cheaper online platforms | Sell **accountability and test-score outcomes**, not homework answers. Track and publish score gains (with permission). |

**Plausible failure:** The local market is small or price-sensitive (low-income district or a rural campus), so families won't pay $50/hr in person.

### J. Final Verdict
| Affordability | Ease | Demand evidence | Profit | Scalability | Schedule fit | Speed | Downside (safety) | **Weighted** |
|---|---|---|---|---|---|---|---|---|
| 10 | 7 | 8 | 6 | 7 | 8 | 8 | 9 | **7.70** |

**Recommendation: STRONG — lowest-risk option, and the hourly benchmark every other idea must beat.** Start it in parallel at near-zero cost.

---

## #4 — Exterior House & Concrete Washing (Soft Wash + Pressure Wash)

### A. Business Overview
- **What it does:** Cleans vinyl siding (low-pressure "soft wash" with a diluted sodium hypochlorite/surfactant mix), driveways and sidewalks (surface cleaner), decks and fences, and small commercial flatwork (dumpster pads, storefront sidewalks, drive-thrus).
- **Target customers:** Owner-occupied homes (especially vinyl siding with algae on the north side) and homeowners prepping to sell; later, small commercial properties and HOAs.
- **Problem solved:** Visible green algae, mildew, and stained concrete. Doing it yourself means renting equipment and risking damage.
- **How you make money:** Per job, modeled at a **$325 average ticket** (house wash or house + driveway bundle).

### B. Why This Business Could Work
- **Demand driver:** Homeowners clean exteriors **annually** (spring–fall), so it's **seasonal but repeatable**.
- **Why you:** Before/after results sell themselves on Facebook and Nextdoor. You win on **fast quotes (same-day by text from photos), punctuality, and bundled pricing** with your window-cleaning customers.
- **Barriers:** Moderate. Equipment costs ~$2K, there's a learning curve with chemicals, and there's damage risk.
- **Student fit:** Weekend and summer work, which lines up with breaks. **Summer break is peak season.**
- **Proven model vs. your odds:** Very well proven, with many solo operators and pricing documented nationally. But it's **increasingly competitive** in many suburbs because it's a popular "side hustle" on YouTube.

### C. Proof That the Model Works
| Evidence | What it shows | Type |
|---|---|---|
| [Fixr — pressure wash house cost (updated Jan 2025)](https://www.fixr.com/costs/pressure-wash-house) | National average **~$700**, typical **$500–$900**, low end ~$300 | Published consumer pricing |
| [Bark price guide](https://www.bark.com/en/us/pressure-washing/house-pressure-washing-price-guide) | Average **~$450** | Marketplace pricing |
| [HomeAdvisor 2025 pressure washing](https://homeadvisor.com/cost/painting/powerwash-exterior-surfaces) | Consumer cost guide; contractors commonly **$50–$150/hr** | Published consumer pricing |
| [BizQuest listing](https://images.bizquest.com/business-for-sale/profitable-power-washing-business-ready-to-scale/BW2410455) | A power-washing business **founded in 2023, owned and operated by college students**, run in summers, listed for sale (no revenue figures in what I could access) | Marketplace listing |
| [UpFlip — "$12K/month pressure washing company" started in high school](https://newsletter.upflip.com/p/12k-month-pressure-washing-company-high-school) | A young founder profile (headline claim; **I couldn't open the article to verify details**) | Self-reported, unverified |
| [Insureon](https://insureon.com/cleaning-business-insurance/cost) | Pressure-washing businesses pay **~$75/month** for general liability | Insurance marketplace data |

### D. Startup Cost Breakdown
| Expense | Estimated cost | Essential? |
|---|---|---|
| Equipment: 4 GPM gas pressure washer (~$900 prosumer; pro carts start ~$1,700 per [Spraywell](https://spraywell.com/blog/how-to-choose-the-right-pressure-washing-equipment)); 16" surface cleaner $250; 150 ft pressure hose $200; 100 ft supply hose $60; nozzles, quick-connects, downstream injector, extension wand $150; step ladder $120; PPE (goggles, chemical gloves, boots) $70 | **$1,750** | Essential |
| Software: quoting/invoicing (Square free; domain) | **$30** | Essential |
| Marketing: door hangers $110, yard signs $90, local Facebook/Nextdoor boost $100 | **$300** | Essential |
| Registration/insurance: LLC ~$150 + first month GL ~$75 | **$225** | Essential |
| Initial supplies: sodium hypochlorite, surfactant, fuel | **$150** | Essential |
| Contingency (repairs, hitch cargo carrier if needed) | **$250** | — |
| **Total** | **$2,705** | |
| *Optional:* 12V soft-wash pump system ($300–$600); hot-water unit (thousands; skip) | *(later)* | Optional |

**Hidden requirement:** a vehicle that can carry a ~200 lb machine (SUV with hitch carrier, pickup, or small utility trailer). Water access is the customer's spigot. A 4 GPM machine needs adequate supply; one forum user warns some wells only produce 3–4 GPM ([PressureWashingResource](https://pressurewashingresource.com/community/t/4-gpm-pressure-washer/12327)).

### E. Revenue and Profitability Analysis
**Assumptions:** **$325 average ticket**; **7 person-hours per job** (two people ~3 hrs + travel and setup); $25/job chemicals and fuel + 4%; fixed costs $190–$260/month (higher insurance + equipment maintenance reserve). **These are in-season months (March–November in most of the U.S.).**

<!-- table:pressure -->
| Scenario | Month | Volume × price | Revenue | Operating costs | Operating profit | Per partner | Hrs/partner/mo | Effective $/hr |
|---|---|---|---|---|---|---|---|---|
| Conservative | M1 | 2 jobs × $325 | $650 | $336 | **$314** | $157 | 20 | $8 |
| Conservative | M3 | 5 jobs × $325 | $1,625 | $380 | **$1,245** | $622 | 26 | $24 |
| Conservative | M6 | 8 jobs × $325 | $2,600 | $494 | **$2,106** | $1,053 | 36 | $29 |
| Conservative | M12 | 10 jobs × $325 | $3,250 | $580 | **$2,670** | $1,335 | 44 | $30 |
| Base | M1 | 3 jobs × $325 | $975 | $374 | **$601** | $300 | 23 | $13 |
| Base | M3 | 8 jobs × $325 | $2,600 | $494 | **$2,106** | $1,053 | 36 | $29 |
| Base | M6 | 13 jobs × $325 | $4,225 | $684 | **$3,541** | $1,770 | 54 | $33 |
| Base | M12 | 17 jobs × $325 | $5,525 | $846 | **$4,679** | $2,340 | 68 | $34 |
| Optimistic | M1 | 5 jobs × $325 | $1,625 | $450 | **$1,175** | $588 | 30 | $20 |
| Optimistic | M3 | 12 jobs × $325 | $3,900 | $646 | **$3,254** | $1,627 | 50 | $33 |
| Optimistic | M6 | 19 jobs × $325 | $6,175 | $912 | **$5,263** | $2,632 | 74 | $35 |
| Optimistic | M12 | 26 jobs × $325 | $8,450 | $1,188 | **$7,262** | $3,631 | 100 | $36 |
<!-- /table -->

- **Payback of ~$2,700:** base ≈ **month 3**; conservative ≈ month 4–5.
- **Off-season:** Dec–Feb typically **20–40%** of in-season volume in cold climates.

### F. Customer Acquisition Strategy
- **First 10 customers:** (1) **Your own family's and friends' houses** at cost, in exchange for before/after photos and reviews. (2) **"Neighbor discount" door hangers** around each completed job ("We just cleaned 123 Elm, 15% off this week"). (3) Nextdoor and Facebook before/after posts. (4) Upsell existing window-cleaning customers.
- **Pitch (door hanger / text):**
  > "We just washed your neighbor's house at [address]. Since we're already in the neighborhood this week, we're offering **15% off house washes** (most homes $250–$400). Text a photo of your house to ___ for a quote in 10 minutes."
- **Acquisition cost:** about $20–$50 per job (assumption).
- **Repeat:** an annual reminder text every spring, and a maintenance-plan discount for booking yearly.

### G. Step-by-Step Launch Plan
| Phase | Actions | Milestone |
|---|---|---|
| **Days 1–7: Validation** | Before buying equipment: post a "spring house wash pre-booking" offer with a **$50 deposit**; quote from photos. **Rent** a pressure washer ($60–$100/day) for 1–2 practice jobs. | **≥5 deposits** before buying the $1,750 kit |
| **Days 8–14: Setup** | Buy equipment; watch soft-wash safety training; insurance; plant protection (pre-wet, rinse, tarps). **Roles:** A = quotes/sales; B = equipment and chemistry. | Practice on 2 friendly homes |
| **Days 15–30: First customers** | Complete deposit jobs; neighbor door hangers after each job. | **6–8 paid jobs; 5 reviews** |
| **Days 31–60: Optimization** | Price by home size (square footage tiers); add a gutter-exterior "brightening" upsell. | Average ticket ≥$325; ≤7 person-hrs per job |
| **Days 61–90: Growth** | Pitch 10 small commercial accounts (restaurants: dumpster pads and sidewalks, monthly). | **12+ jobs/month, ≥$3,000/mo profit in season** |

### H. Scalability and Long-Term Potential
- **$1,000/month:** 4–5 jobs. **$3,000/month:** ~11–13 jobs in season.
- **$5,000–$10,000/month:** 20–40 jobs per month, needing a **hired crew member**, a trailer rig (+$3K–$8K, financed from profits), and commercial accounts for off-season stability.
- **After graduation:** Very viable as a full-time business. Combined with windows (#1) and holiday lights (#7), it forms a year-round exterior services company.
- **Growth limit:** Seasonality, weekend labor, equipment capacity.

### I. Risks, Challenges, and Failure Points
| Risk | Mitigation |
|---|---|
| 1. Property damage (etched siding, killed plants, water intrusion) | Soft wash, not high pressure, on siding; pre-wet and rinse plants; avoid windows and seals; photograph before work; carry insurance. |
| 2. Chemical injury / runoff | Goggles and gloves; follow label dilution; check local runoff rules. |
| 3. Heavy competition / underpricing | Bundle with windows; target older neighborhoods and commercial; compete on reviews and speed of quotes. |
| 4. Equipment breakdown mid-season | Keep a maintenance reserve; learn pump basics; keep spare parts (unloader, O-rings). |
| 5. Seasonality | Pair with windows and holiday lights; pre-book spring work in February. |

**Plausible failure:** Your area already has many cheap weekend washers, so you can't get above ~$200/job, and profit per hour falls below tutoring rates.

### J. Final Verdict
| Affordability | Ease | Demand evidence | Profit | Scalability | Schedule fit | Speed | Downside (safety) | **Weighted** |
|---|---|---|---|---|---|---|---|---|
| 7 | 6 | 9 | 8 | 8 | 7 | 8 | 6 | **7.50** |

**Recommendation: GOOD, as the phase-2 expansion of #1** in spring, funded by window-cleaning profits instead of your starting capital.

---

## #5 — Mobile Interior Car Detailing

### A. Business Overview
- **What it does:** Interior-focused details performed at the customer's home, apartment complex, or workplace: vacuum, shampoo/extract seats and carpets, wipe down and dress plastics, clean glass, remove odors. Exterior hand wash as an add-on where water access allows.
- **Target customers:** Busy professionals, parents with kid-and-dog-damaged interiors, people selling cars, and rideshare drivers. Also college students' parents (gift certificates) and **local businesses with fleet vehicles** (B2B).
- **Problem solved:** Convenience. No dropping off the car or waiting.
- **How you make money:** Per detail, modeled at **$150**, plus monthly maintenance plans.

### B. Why This Business Could Work
- **Demand:** Cars get dirty constantly; demand is **semi-recurring** (every 1–3 months for maintenance customers).
- **Why you:** Mobile convenience at a price below established mobile operators (~$217 average for mobile interior per one guide), plus reliability and before/after proof.
- **Barriers:** Low, which makes this **very competitive** (lots of young operators). Your advantage has to be **niche focus** (interior-only, fast, fleet accounts) and **reviews**.
- **Student fit:** Weekend-heavy work, 2–4 hours per car, and you can work on campus or at apartment complexes (with permission).

### C. Proof That the Model Works
| Evidence | What it shows | Type |
|---|---|---|
| [Entrepreneur — Detail Dawgs (UGA)](https://www.entrepreneur.com/starting-a-business/college-senior-cleans-up-with-lucrative-car-detailing-side/466349) | A college student built a **~$7,000/month** detailing business, with early customers found by handing out cards in parking lots | Self-reported via press |
| [WABE — UGA student's mobile detailing](https://www.wabe.org/on-the-go-and-on-point-college-students-mobile-detailing-business-turns-heads/) | Student mobile-detailing business coverage | Press |
| [Queen's Gazette — Cleen Detailing](https://www.queensu.ca/gazette/stories/clean-idea-winner) | A student summer business that grew to **25 student detailers** and a manager | Press (Canada) |
| [Housecall Pro detailing price guide](https://www.housecallpro.com/resources/how-much-to-charge-for-car-detailing/) | 2026 analysis of 89 mobile operators: midsize SUV basic **~$158**, standard **~$278** | Vendor research |
| [CDC Auto Detailing](https://cdcautodetailing.com/how-much-does-it-cost-to-detail-interior-of-car) | National mobile interior-only average **~$217**; shop interior $70–$160 | Operator guide |

### D. Startup Cost Breakdown
| Expense | Estimated cost | Essential? |
|---|---|---|
| Equipment: wet/dry vac $130; hot-water spot extractor $180; drill + brush set $100; 100-ft extension cord $40; water jugs $30; buckets/kneeling pads $30 | **$510** | Essential |
| Software: booking link / invoicing | **$20** | Essential |
| Marketing: cards/flyers $80; apartment-complex flyer permissions; Google Business Profile (free); $120 local ads test | **$200** | Essential |
| Registration/insurance: LLC ~$150 + first month GL ~$50 (garage-keepers coverage may be needed for working on customers' cars; ask your agent) | **$200** | Essential |
| Supplies: interior cleaner, all-purpose cleaner, glass cleaner, protectant, odor treatment, 50 microfibers | **$150** | Essential |
| Contingency | **$100** | — |
| **Total** | **$1,180** | |
| *Optional:* steamer ($150), portable power station ($300–$600), ozone generator, canopy | *(later)* | Optional |

### E. Revenue and Profitability Analysis
**Assumptions:** **$150 per detail**, **3.5 person-hours** including travel, $15/job supplies + 4%, fixed costs $100–$150/month.

<!-- table:detail -->
| Scenario | Month | Volume × price | Revenue | Operating costs | Operating profit | Per partner | Hrs/partner/mo | Effective $/hr |
|---|---|---|---|---|---|---|---|---|
| Conservative | M1 | 4 details × $150 | $600 | $234 | **$366** | $183 | 17 | $11 |
| Conservative | M3 | 10 details × $150 | $1,500 | $310 | **$1,190** | $595 | 24 | $25 |
| Conservative | M6 | 15 details × $150 | $2,250 | $415 | **$1,835** | $918 | 32 | $28 |
| Conservative | M12 | 18 details × $150 | $2,700 | $488 | **$2,212** | $1,106 | 38 | $29 |
| Base | M1 | 6 details × $150 | $900 | $276 | **$624** | $312 | 20 | $15 |
| Base | M3 | 14 details × $150 | $2,100 | $394 | **$1,706** | $853 | 30 | $28 |
| Base | M6 | 22 details × $150 | $3,300 | $562 | **$2,738** | $1,369 | 44 | $31 |
| Base | M12 | 30 details × $150 | $4,500 | $740 | **$3,760** | $1,880 | 60 | $32 |
| Optimistic | M1 | 9 details × $150 | $1,350 | $339 | **$1,011** | $506 | 26 | $20 |
| Optimistic | M3 | 20 details × $150 | $3,000 | $520 | **$2,480** | $1,240 | 41 | $30 |
| Optimistic | M6 | 32 details × $150 | $4,800 | $772 | **$4,028** | $2,014 | 62 | $32 |
| Optimistic | M12 | 42 details × $150 | $6,300 | $992 | **$5,308** | $2,654 | 80 | $33 |
<!-- /table -->

- **Payback of ~$1,180:** base ≈ **month 2**.

### F. Customer Acquisition Strategy
- **First 10:** (1) Friends' and family's cars at a discount for photos and reviews. (2) **Apartment complexes:** ask property managers for a "Detail Day" in the parking lot (offer the manager's car free). (3) **Fleet B2B:** realtors, contractors, and dealerships' used-car lots (pitch per-car pricing). (4) Parents' weekend / move-in week offers.
- **Pitch (to an apartment manager):**
  > "We're two [University] students who run a mobile interior-detailing service. We'd like to offer your residents a discounted 'Detail Day' on a Saturday in your lot. No cost to you, we bring everything, we're insured, and we'll detail your car free as a thank-you. Could we put a flyer in the mail room?"
- **Repeat:** a monthly maintenance plan (e.g., $79/month for a quick interior refresh); 3-month reminder texts.

### G. Step-by-Step Launch Plan
| Phase | Actions | Milestone |
|---|---|---|
| **Days 1–7: Validation** | Post an offer in local groups and campus channels with a **$20 deposit to book**; pitch 5 apartment managers and 5 fleet businesses. | **≥5 deposits** |
| **Days 8–14: Setup** | Buy equipment; do 3 practice details; standardize a checklist and timing. | Detail time ≤3 hrs |
| **Days 15–30: First customers** | Deliver jobs; ask each customer for a review + 2 referrals. | **8 paid details, 6 reviews** |
| **Days 31–60: Optimization** | Tiered menu (Basic/Standard/Deep); upsells (pet hair, odor, seat shampoo). | Average ticket ≥$150 |
| **Days 61–90: Growth** | Maintenance plans; 2 fleet accounts. | **20+ details/month; ≥$2,500/mo profit** |

### H. Scalability and Long-Term Potential
- **$1,000/month:** ~8 details. **$3,000/month:** ~24 details (~45 hrs per partner).
- **$5,000–$10,000/month:** needs **hired detailers** (as Cleen Detailing did), a van, and fleet contracts.
- **After graduation:** viable, but it's a crowded market with thin differentiation.
- **Growth limit:** Labor intensity (each job is 3+ hours) and competition.

### I. Risks, Challenges, and Failure Points
| Risk | Mitigation |
|---|---|
| 1. Saturated local market / price wars | Specialize (interior-only, fleet, pet-hair removal) and lead with reviews. |
| 2. Damage claims (stains, electronics) | Test chemicals; take photos before; carry insurance. |
| 3. Weather and access (water/power) | Interior focus; extension cord + spot extractor; covered garages. |
| 4. Low repeat rate | Maintenance plans; reminder texts. |
| 5. Physical fatigue and long jobs during exam weeks | Cap jobs per week in finals; book in advance. |

**Plausible failure:** Too many young detailers in your town undercut you at $80–$100, so your effective rate falls below $20/hr.

### J. Final Verdict
| Affordability | Ease | Demand evidence | Profit | Scalability | Schedule fit | Speed | Downside (safety) | **Weighted** |
|---|---|---|---|---|---|---|---|---|
| 8 | 7 | 8 | 6 | 6 | 8 | 9 | 8 | **7.47** |

**Recommendation: GOOD, but crowded.** Pick it only if local competition is thin or you can land fleet accounts.

---

**Continue to:** [Part 3 — Detailed Analysis, Ranks 6–10](03-detailed-analysis-ranks-6-10.md)
