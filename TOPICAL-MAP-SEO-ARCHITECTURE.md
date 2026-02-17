# TOPICAL MAP & SEO SITE ARCHITECTURE
## ShineDetail — Car Detailing & Car Valeting
### Manchester (Primary) | Stockport (Secondary)

---

## PART 1: HIGH-LEVEL SITE ARCHITECTURE

### Entity Model

Two distinct topical entities are treated as SEPARATE authority pillars:

| Entity | Definition | Core Intent |
|---|---|---|
| **Car Detailing** | Professional-grade paint correction, ceramic coating, deep restoration | High-ticket, enthusiast/luxury |
| **Car Valeting** | Regular maintenance cleaning — interior, exterior, full valet | Frequency-based, everyday drivers |

These entities OVERLAP but are NOT synonyms. Google treats them as distinct topics with separate SERPs. Our architecture respects this separation while building semantic bridges between them.

---

### URL Taxonomy

```
/                                   → Homepage (brand entity hub)
│
├── /manchester/                    → Manchester location hub (pillar)
│   ├── /manchester/car-detailing/  → Detailing pillar for Manchester
│   │   ├── /manchester/car-detailing/ceramic-coating/
│   │   ├── /manchester/car-detailing/paint-correction/
│   │   ├── /manchester/car-detailing/engine-bay-detailing/
│   │   ├── /manchester/car-detailing/headlight-restoration/
│   │   ├── /manchester/car-detailing/leather-conditioning/
│   │   ├── /manchester/car-detailing/interior-detailing/
│   │   ├── /manchester/car-detailing/exterior-detailing/
│   │   ├── /manchester/car-detailing/new-car-protection/
│   │   ├── /manchester/car-detailing/swirl-mark-removal/
│   │   └── /manchester/car-detailing/prices/
│   │
│   ├── /manchester/car-valeting/   → Valeting pillar for Manchester
│   │   ├── /manchester/car-valeting/full-valet/
│   │   ├── /manchester/car-valeting/mini-valet/
│   │   ├── /manchester/car-valeting/interior-valeting/
│   │   ├── /manchester/car-valeting/exterior-valeting/
│   │   ├── /manchester/car-valeting/mobile-valeting/
│   │   ├── /manchester/car-valeting/pet-hair-removal/
│   │   ├── /manchester/car-valeting/odour-removal/
│   │   ├── /manchester/car-valeting/upholstery-cleaning/
│   │   └── /manchester/car-valeting/prices/
│   │
│   ├── /manchester/areas/          → Hyper-local sub-area pages
│   │   ├── /manchester/areas/city-centre/
│   │   ├── /manchester/areas/didsbury/
│   │   ├── /manchester/areas/chorlton/
│   │   ├── /manchester/areas/salford/
│   │   ├── /manchester/areas/trafford/
│   │   ├── /manchester/areas/sale/
│   │   ├── /manchester/areas/altrincham/
│   │   ├── /manchester/areas/oldham/
│   │   ├── /manchester/areas/rochdale/
│   │   ├── /manchester/areas/bury/
│   │   ├── /manchester/areas/bolton/
│   │   ├── /manchester/areas/wigan/
│   │   └── /manchester/areas/tameside/
│   │
│   └── /manchester/reviews/        → Manchester social proof
│
├── /stockport/                     → Stockport location hub (pillar)
│   ├── /stockport/car-detailing/   → Detailing pillar for Stockport
│   │   ├── /stockport/car-detailing/ceramic-coating/
│   │   ├── /stockport/car-detailing/paint-correction/
│   │   ├── /stockport/car-detailing/headlight-restoration/
│   │   ├── /stockport/car-detailing/new-car-protection/
│   │   └── /stockport/car-detailing/prices/
│   │
│   ├── /stockport/car-valeting/    → Valeting pillar for Stockport
│   │   ├── /stockport/car-valeting/full-valet/
│   │   ├── /stockport/car-valeting/mini-valet/
│   │   ├── /stockport/car-valeting/interior-valeting/
│   │   ├── /stockport/car-valeting/exterior-valeting/
│   │   ├── /stockport/car-valeting/mobile-valeting/
│   │   └── /stockport/car-valeting/prices/
│   │
│   ├── /stockport/areas/           → Stockport sub-areas
│   │   ├── /stockport/areas/bramhall/
│   │   ├── /stockport/areas/cheadle/
│   │   ├── /stockport/areas/marple/
│   │   ├── /stockport/areas/hazel-grove/
│   │   ├── /stockport/areas/reddish/
│   │   ├── /stockport/areas/edgeley/
│   │   └── /stockport/areas/heaton-moor/
│   │
│   └── /stockport/reviews/
│
├── /guides/                        → Informational hub (topical authority)
│   ├── /guides/what-is-car-detailing/
│   ├── /guides/what-is-car-valeting/
│   ├── /guides/how-often-should-you-valet-your-car/
│   ├── /guides/how-often-should-you-detail-your-car/
│   ├── /guides/car-detailing-step-by-step/
│   ├── /guides/car-valeting-checklist/
│   ├── /guides/ceramic-coating-explained/
│   ├── /guides/paint-correction-guide/
│   ├── /guides/how-to-maintain-ceramic-coating/
│   ├── /guides/best-car-cleaning-products/
│   ├── /guides/how-to-remove-swirl-marks/
│   ├── /guides/how-to-clean-leather-seats/
│   ├── /guides/how-to-remove-pet-hair-from-car/
│   ├── /guides/how-to-remove-car-odours/
│   ├── /guides/is-car-detailing-worth-it/
│   ├── /guides/what-does-a-full-valet-include/
│   ├── /guides/how-to-protect-car-paint/
│   ├── /guides/winter-car-care-guide/
│   ├── /guides/summer-car-care-guide/
│   ├── /guides/new-car-detailing-guide/
│   ├── /guides/used-car-detailing-before-selling/
│   ├── /guides/how-to-wash-car-without-scratching/
│   ├── /guides/machine-polishing-vs-hand-polishing/
│   ├── /guides/interior-detailing-guide/
│   ├── /guides/exterior-detailing-guide/
│   ├── /guides/alloy-wheel-cleaning-guide/
│   ├── /guides/car-wax-vs-ceramic-coating/
│   ├── /guides/ppf-vs-ceramic-coating/
│   └── /guides/clay-bar-treatment-explained/
│
├── /compare/                       → Comparison hub (Featured Snippets)
│   ├── /compare/car-detailing-vs-car-valeting/
│   ├── /compare/ceramic-coating-vs-wax/
│   ├── /compare/ceramic-coating-vs-ppf/
│   ├── /compare/full-valet-vs-mini-valet/
│   ├── /compare/mobile-valeting-vs-fixed-location/
│   ├── /compare/interior-vs-exterior-valeting/
│   ├── /compare/hand-polish-vs-machine-polish/
│   └── /compare/diy-detailing-vs-professional/
│
├── /blog/                          → News + seasonal + long-tail
│   ├── /blog/[slug]/               → Dynamic blog posts
│   └── /blog/category/[category]/  → Blog categories
│
├── /faq/                           → FAQ hub (AI Overviews / PAA)
│   ├── /faq/car-detailing/
│   ├── /faq/car-valeting/
│   ├── /faq/ceramic-coating/
│   ├── /faq/pricing/
│   └── /faq/booking/
│
├── /pricing/                       → Central pricing hub
│   ├── /pricing/car-detailing/
│   └── /pricing/car-valeting/
│
├── /about-us/                      → Brand entity page
├── /contact/                       → Contact page
├── /booking/                       → Online booking
└── /gallery/                       → Portfolio / before-after
    ├── /gallery/detailing/
    └── /gallery/valeting/
```

---

### Next.js App Router Folder Structure

```
src/app/
├── page.tsx                                    [SSG]
├── layout.tsx
├── globals.css
├── not-found.tsx
├── robots.ts
├── sitemap.ts
│
├── manchester/
│   ├── page.tsx                                [SSG] → /manchester
│   ├── layout.tsx
│   ├── car-detailing/
│   │   ├── page.tsx                            [SSG] → /manchester/car-detailing
│   │   ├── ceramic-coating/
│   │   │   └── page.tsx                        [SSG]
│   │   ├── paint-correction/
│   │   │   └── page.tsx                        [SSG]
│   │   ├── engine-bay-detailing/
│   │   │   └── page.tsx                        [SSG]
│   │   ├── headlight-restoration/
│   │   │   └── page.tsx                        [SSG]
│   │   ├── leather-conditioning/
│   │   │   └── page.tsx                        [SSG]
│   │   ├── interior-detailing/
│   │   │   └── page.tsx                        [SSG]
│   │   ├── exterior-detailing/
│   │   │   └── page.tsx                        [SSG]
│   │   ├── new-car-protection/
│   │   │   └── page.tsx                        [SSG]
│   │   ├── swirl-mark-removal/
│   │   │   └── page.tsx                        [SSG]
│   │   └── prices/
│   │       └── page.tsx                        [SSG]
│   │
│   ├── car-valeting/
│   │   ├── page.tsx                            [SSG] → /manchester/car-valeting
│   │   ├── full-valet/
│   │   │   └── page.tsx                        [SSG]
│   │   ├── mini-valet/
│   │   │   └── page.tsx                        [SSG]
│   │   ├── interior-valeting/
│   │   │   └── page.tsx                        [SSG]
│   │   ├── exterior-valeting/
│   │   │   └── page.tsx                        [SSG]
│   │   ├── mobile-valeting/
│   │   │   └── page.tsx                        [SSG]
│   │   ├── pet-hair-removal/
│   │   │   └── page.tsx                        [SSG]
│   │   ├── odour-removal/
│   │   │   └── page.tsx                        [SSG]
│   │   ├── upholstery-cleaning/
│   │   │   └── page.tsx                        [SSG]
│   │   └── prices/
│   │       └── page.tsx                        [SSG]
│   │
│   ├── areas/
│   │   ├── page.tsx                            [SSG] → /manchester/areas
│   │   └── [area]/
│   │       └── page.tsx                        [SSG + generateStaticParams]
│   │
│   └── reviews/
│       └── page.tsx                            [Dynamic SSR]
│
├── stockport/
│   ├── page.tsx                                [SSG] → /stockport
│   ├── layout.tsx
│   ├── car-detailing/
│   │   ├── page.tsx                            [SSG]
│   │   ├── ceramic-coating/
│   │   │   └── page.tsx                        [SSG]
│   │   ├── paint-correction/
│   │   │   └── page.tsx                        [SSG]
│   │   ├── headlight-restoration/
│   │   │   └── page.tsx                        [SSG]
│   │   ├── new-car-protection/
│   │   │   └── page.tsx                        [SSG]
│   │   └── prices/
│   │       └── page.tsx                        [SSG]
│   │
│   ├── car-valeting/
│   │   ├── page.tsx                            [SSG]
│   │   ├── full-valet/
│   │   │   └── page.tsx                        [SSG]
│   │   ├── mini-valet/
│   │   │   └── page.tsx                        [SSG]
│   │   ├── interior-valeting/
│   │   │   └── page.tsx                        [SSG]
│   │   ├── exterior-valeting/
│   │   │   └── page.tsx                        [SSG]
│   │   ├── mobile-valeting/
│   │   │   └── page.tsx                        [SSG]
│   │   └── prices/
│   │       └── page.tsx                        [SSG]
│   │
│   ├── areas/
│   │   ├── page.tsx                            [SSG]
│   │   └── [area]/
│   │       └── page.tsx                        [SSG + generateStaticParams]
│   │
│   └── reviews/
│       └── page.tsx                            [Dynamic SSR]
│
├── guides/
│   ├── page.tsx                                [SSG] → /guides
│   └── [slug]/
│       └── page.tsx                            [SSG + generateStaticParams]
│
├── compare/
│   ├── page.tsx                                [SSG] → /compare
│   └── [slug]/
│       └── page.tsx                            [SSG + generateStaticParams]
│
├── blog/
│   ├── page.tsx                                [Dynamic SSR] → /blog
│   ├── [slug]/
│   │   └── page.tsx                            [Dynamic SSR]
│   └── category/
│       └── [category]/
│           └── page.tsx                        [Dynamic SSR]
│
├── faq/
│   ├── page.tsx                                [SSG] → /faq
│   └── [topic]/
│       └── page.tsx                            [SSG + generateStaticParams]
│
├── pricing/
│   ├── page.tsx                                [SSG] → /pricing
│   ├── car-detailing/
│   │   └── page.tsx                            [SSG]
│   └── car-valeting/
│       └── page.tsx                            [SSG]
│
├── about-us/
│   └── page.tsx                                [SSG]
│
├── contact/
│   └── page.tsx                                [SSG]
│
├── booking/
│   └── page.tsx                                [Dynamic SSR]
│
└── gallery/
    ├── page.tsx                                [SSG]
    ├── detailing/
    │   └── page.tsx                            [SSG]
    └── valeting/
        └── page.tsx                            [SSG]
```

---

### Rendering Strategy Summary

| Rendering | When to Use | Pages |
|---|---|---|
| **SSG** (Static) | Service pages, guides, comparisons, location hubs, FAQ, pricing | ~90% of pages |
| **Dynamic SSR** | Blog posts (CMS-driven), reviews (API-fed), booking | ~10% of pages |
| **ISR** (Incremental) | Blog listing, category pages — revalidate every 3600s | Optional enhancement |

---

## PART 2: DETAILED TOPICAL MAP

### Anti-Cannibalization Strategy

Before the table — here's how we avoid cannibalization across Manchester/Stockport:

1. **Manchester pages** are comprehensive "definitive" versions (3000-4000 words)
2. **Stockport pages** have UNIQUE content angles — local landmarks, Stockport-specific data, different testimonials, local area context
3. **Each location page** targets `[service] + [location]` as primary keyword — never just `[service]` alone
4. **Guides/Compare pages** are location-agnostic and target pure informational intent
5. **Internal links** flow: Guides → Service pages → Location hubs → Booking

---

### PILLAR 1: CAR DETAILING — MANCHESTER

| # | Pillar | Sub Topic | Search Intent | Primary Keyword | Semantic Keywords | Final URL | Next.js Path | Location | Content Angle | Internal Linking | Funnel Stage | Rendering | Word Count |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Car Detailing | Hub / Pillar | Commercial | car detailing manchester | professional car detailing, auto detailing manchester, vehicle detailing near me, detailing services manchester | /manchester/car-detailing | app/manchester/car-detailing/page.tsx | Manchester | Definitive guide to professional car detailing in Manchester — what's included, why it matters, process overview, pricing tiers | FROM: /guides/what-is-car-detailing, /compare/car-detailing-vs-car-valeting → TO: all sub-service pages, /manchester, /booking | MOFU | SSG | 3500 |
| 2 | Car Detailing | Ceramic Coating | Commercial | ceramic coating manchester | ceramic car coating, nano coating, glass coating manchester, ceramic protection, 9H ceramic coating | /manchester/car-detailing/ceramic-coating | app/manchester/car-detailing/ceramic-coating/page.tsx | Manchester | Why Manchester's weather makes ceramic coating essential — rain, road salt, industrial fallout protection. Include 2/5/7 year package comparison | FROM: /manchester/car-detailing, /guides/ceramic-coating-explained → TO: /compare/ceramic-coating-vs-wax, /manchester/car-detailing/prices, /booking | BOFU | SSG | 2000 |
| 3 | Car Detailing | Paint Correction | Commercial | paint correction manchester | swirl mark removal, scratch removal, machine polishing, compound polishing manchester | /manchester/car-detailing/paint-correction | app/manchester/car-detailing/paint-correction/page.tsx | Manchester | Manchester's multi-storey car parks and tight city streets cause micro-scratches — staged correction process explained | FROM: /manchester/car-detailing, /guides/paint-correction-guide → TO: /manchester/car-detailing/ceramic-coating, /gallery/detailing | BOFU | SSG | 2000 |
| 4 | Car Detailing | Engine Bay Detailing | Commercial | engine bay detailing manchester | engine clean, engine bay clean near me, under bonnet cleaning | /manchester/car-detailing/engine-bay-detailing | app/manchester/car-detailing/engine-bay-detailing/page.tsx | Manchester | Often-overlooked service — how engine bay detailing improves resale value and catches leaks early | FROM: /manchester/car-detailing → TO: /manchester/car-detailing/prices, /guides/is-car-detailing-worth-it | BOFU | SSG | 1500 |
| 5 | Car Detailing | Headlight Restoration | Commercial | headlight restoration manchester | foggy headlights, yellow headlights, headlight polishing, headlight lens repair | /manchester/car-detailing/headlight-restoration | app/manchester/car-detailing/headlight-restoration/page.tsx | Manchester | MOT-linked safety angle — oxidised headlights reduce visibility by up to 80%. Before/after showcase | FROM: /manchester/car-detailing → TO: /manchester/car-detailing/prices, /booking | BOFU | SSG | 1500 |
| 6 | Car Detailing | Leather Conditioning | Commercial | leather conditioning manchester | leather seat restoration, leather care, leather cleaning and conditioning | /manchester/car-detailing/leather-conditioning | app/manchester/car-detailing/leather-conditioning/page.tsx | Manchester | Premium vehicle focus — why leather in BMWs, Audis, and Range Rovers needs scheduled conditioning in Manchester's climate | FROM: /manchester/car-detailing, /guides/how-to-clean-leather-seats → TO: /manchester/car-detailing/interior-detailing, /booking | BOFU | SSG | 1500 |
| 7 | Car Detailing | Interior Detailing | Commercial | interior detailing manchester | deep interior clean, dashboard detailing, car interior restoration | /manchester/car-detailing/interior-detailing | app/manchester/car-detailing/interior-detailing/page.tsx | Manchester | Comprehensive interior transformation — steam cleaning, UV sanitisation, trim restoration. Focus on health/allergen benefits | FROM: /manchester/car-detailing, /guides/interior-detailing-guide → TO: /manchester/car-detailing/leather-conditioning, /manchester/car-detailing/odour-removal | BOFU | SSG | 2000 |
| 8 | Car Detailing | Exterior Detailing | Commercial | exterior detailing manchester | full exterior detail, paint decontamination, clay bar treatment manchester | /manchester/car-detailing/exterior-detailing | app/manchester/car-detailing/exterior-detailing/page.tsx | Manchester | Beyond a wash — iron fallout removal, clay bar, machine polish, sealant. Why Manchester's industrial air needs decontamination | FROM: /manchester/car-detailing, /guides/exterior-detailing-guide → TO: /manchester/car-detailing/paint-correction, /manchester/car-detailing/ceramic-coating | BOFU | SSG | 2000 |
| 9 | Car Detailing | New Car Protection | Commercial | new car protection manchester | new car ceramic coating, new car paint protection, showroom protection package | /manchester/car-detailing/new-car-protection | app/manchester/car-detailing/new-car-protection/page.tsx | Manchester | Why dealership "protection packages" are overpriced — what independent detailing actually delivers for new vehicles | FROM: /manchester/car-detailing, /guides/new-car-detailing-guide → TO: /manchester/car-detailing/ceramic-coating, /compare/ceramic-coating-vs-ppf | BOFU | SSG | 1800 |
| 10 | Car Detailing | Swirl Mark Removal | Commercial | swirl mark removal manchester | buffer marks, wash marks, spider web scratches, paint swirls | /manchester/car-detailing/swirl-mark-removal | app/manchester/car-detailing/swirl-mark-removal/page.tsx | Manchester | How automatic car washes and dirty cloths create swirls — before/after gallery with correction stages | FROM: /guides/how-to-remove-swirl-marks, /manchester/car-detailing → TO: /manchester/car-detailing/paint-correction, /manchester/car-detailing/ceramic-coating | BOFU | SSG | 1500 |
| 11 | Car Detailing | Pricing | Commercial Investigation | car detailing prices manchester | how much does car detailing cost, detailing price list manchester, auto detailing rates | /manchester/car-detailing/prices | app/manchester/car-detailing/prices/page.tsx | Manchester | Transparent pricing table with vehicle size tiers (small/medium/large/SUV). "Why we don't do £30 details" educational angle | FROM: /manchester/car-detailing (all sub-pages) → TO: /booking, /compare/diy-detailing-vs-professional | BOFU | SSG | 1500 |

---

### PILLAR 2: CAR VALETING — MANCHESTER

| # | Pillar | Sub Topic | Search Intent | Primary Keyword | Semantic Keywords | Final URL | Next.js Path | Location | Content Angle | Internal Linking | Funnel Stage | Rendering | Word Count |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 12 | Car Valeting | Hub / Pillar | Commercial | car valeting manchester | car valet manchester, mobile car valet manchester, car cleaning manchester, valeting service near me | /manchester/car-valeting | app/manchester/car-valeting/page.tsx | Manchester | Complete guide to car valeting in Manchester — packages explained, what to expect, frequency advice, booking process | FROM: /guides/what-is-car-valeting, /compare/car-detailing-vs-car-valeting → TO: all valet sub-pages, /manchester, /booking | MOFU | SSG | 3500 |
| 13 | Car Valeting | Full Valet | Commercial | full valet manchester | full car valet, complete valet, full car clean manchester | /manchester/car-valeting/full-valet | app/manchester/car-valeting/full-valet/page.tsx | Manchester | The flagship valet — exhaustive breakdown of every step from pre-wash to final wax. Time: 3-4 hours. Includes checklist | FROM: /manchester/car-valeting, /guides/what-does-a-full-valet-include → TO: /manchester/car-valeting/prices, /booking | BOFU | SSG | 2000 |
| 14 | Car Valeting | Mini Valet | Commercial | mini valet manchester | quick valet, express valet, basic car clean manchester | /manchester/car-valeting/mini-valet | app/manchester/car-valeting/mini-valet/page.tsx | Manchester | Perfect for maintenance between full valets — 60-90 minute service. When a mini valet is enough vs when you need more | FROM: /manchester/car-valeting → TO: /compare/full-valet-vs-mini-valet, /manchester/car-valeting/prices, /booking | BOFU | SSG | 1500 |
| 15 | Car Valeting | Interior Valeting | Commercial | interior valeting manchester | interior car clean, inside car clean, car interior valet manchester | /manchester/car-valeting/interior-valeting | app/manchester/car-valeting/interior-valeting/page.tsx | Manchester | Deep interior focus — hoovering, dashboard, door cards, carpets, glass. Why winter salt and mud make this essential quarterly | FROM: /manchester/car-valeting → TO: /manchester/car-valeting/pet-hair-removal, /manchester/car-valeting/odour-removal, /booking | BOFU | SSG | 1800 |
| 16 | Car Valeting | Exterior Valeting | Commercial | exterior valeting manchester | exterior car wash, outside car clean, hand car wash manchester | /manchester/car-valeting/exterior-valeting | app/manchester/car-valeting/exterior-valeting/page.tsx | Manchester | Hand wash, wheel clean, tyre dressing, glass polish — why hand washing beats automatic every time. Snow foam process explained | FROM: /manchester/car-valeting → TO: /guides/how-to-wash-car-without-scratching, /manchester/car-valeting/prices | BOFU | SSG | 1800 |
| 17 | Car Valeting | Mobile Valeting | Commercial | mobile car valeting manchester | mobile valet near me, car valet at home manchester, doorstep valeting | /manchester/car-valeting/mobile-valeting | app/manchester/car-valeting/mobile-valeting/page.tsx | Manchester | We come to you — home, office, or workplace. Coverage map of Manchester areas. How mobile valeting works step-by-step | FROM: /manchester/car-valeting, /manchester/areas/* → TO: /booking, /manchester/car-valeting/prices | BOFU | SSG | 2000 |
| 18 | Car Valeting | Pet Hair Removal | Commercial | pet hair removal car manchester | dog hair car, pet fur removal, animal hair car interior | /manchester/car-valeting/pet-hair-removal | app/manchester/car-valeting/pet-hair-removal/page.tsx | Manchester | Specialist service — compressed air, rubber gloves, detailing brushes. Before/after with real Manchester customer cars | FROM: /guides/how-to-remove-pet-hair-from-car, /manchester/car-valeting → TO: /manchester/car-valeting/interior-valeting, /booking | BOFU | SSG | 1200 |
| 19 | Car Valeting | Odour Removal | Commercial | car odour removal manchester | smell removal car, smoke smell car, dog smell car removal | /manchester/car-valeting/odour-removal | app/manchester/car-valeting/odour-removal/page.tsx | Manchester | Ozone treatment + enzymatic cleaning — we eliminate odours, not mask them. Common odours: smoke, pets, food, damp | FROM: /guides/how-to-remove-car-odours, /manchester/car-valeting → TO: /manchester/car-valeting/interior-valeting, /booking | BOFU | SSG | 1200 |
| 20 | Car Valeting | Upholstery Cleaning | Commercial | car upholstery cleaning manchester | seat cleaning, fabric seats cleaning, cloth interior clean | /manchester/car-valeting/upholstery-cleaning | app/manchester/car-valeting/upholstery-cleaning/page.tsx | Manchester | Hot water extraction for fabric seats — stain removal, allergen elimination. Different approach for cloth vs Alcantara | FROM: /manchester/car-valeting/interior-valeting → TO: /manchester/car-valeting/odour-removal, /booking | BOFU | SSG | 1200 |
| 21 | Car Valeting | Pricing | Commercial Investigation | car valeting prices manchester | how much is a car valet, valet prices near me, car cleaning prices manchester | /manchester/car-valeting/prices | app/manchester/car-valeting/prices/page.tsx | Manchester | Clear pricing grid — Mini/Full/Interior/Exterior by vehicle size. Comparison table showing what each package includes | FROM: /manchester/car-valeting (all sub-pages) → TO: /booking, /compare/full-valet-vs-mini-valet | BOFU | SSG | 1500 |

---

### PILLAR 3: CAR DETAILING — STOCKPORT

**Anti-Cannibalization Note:** Stockport detailing pages have UNIQUE content angles — Stockport-specific references, different case studies, distinct customer testimonials, local landmarks, and area-specific environmental factors.

| # | Pillar | Sub Topic | Search Intent | Primary Keyword | Semantic Keywords | Final URL | Next.js Path | Location | Content Angle (UNIQUE vs Manchester) | Internal Linking | Funnel Stage | Rendering | Word Count |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 22 | Car Detailing | Hub / Pillar | Commercial | car detailing stockport | professional detailing stockport, auto detailing stockport, vehicle detailing stockport | /stockport/car-detailing | app/stockport/car-detailing/page.tsx | Stockport | Stockport's tree-lined streets and sap + bird dropping damage — why Stockport cars need detailing differently than city-centre vehicles | FROM: /guides/what-is-car-detailing → TO: sub-service pages, /stockport, /booking | MOFU | SSG | 3000 |
| 23 | Car Detailing | Ceramic Coating | Commercial | ceramic coating stockport | ceramic protection stockport, nano ceramic coating stockport | /stockport/car-detailing/ceramic-coating | app/stockport/car-detailing/ceramic-coating/page.tsx | Stockport | Stockport commuters — A6 corridor salt spray and motorway grit. How ceramic coating protects during the M60/A6 daily commute | FROM: /stockport/car-detailing, /guides/ceramic-coating-explained → TO: /stockport/car-detailing/prices, /booking | BOFU | SSG | 1800 |
| 24 | Car Detailing | Paint Correction | Commercial | paint correction stockport | scratch removal stockport, machine polishing stockport | /stockport/car-detailing/paint-correction | app/stockport/car-detailing/paint-correction/page.tsx | Stockport | Case study: Bramhall customer's Range Rover — hedge scratches from narrow Cheshire lanes + multi-storey damage correction | FROM: /stockport/car-detailing → TO: /stockport/car-detailing/ceramic-coating, /gallery/detailing | BOFU | SSG | 1800 |
| 25 | Car Detailing | Headlight Restoration | Commercial | headlight restoration stockport | headlight polishing stockport, foggy headlights stockport | /stockport/car-detailing/headlight-restoration | app/stockport/car-detailing/headlight-restoration/page.tsx | Stockport | Country roads around Marple and Disley — why clear headlights are critical on unlit roads. MOT pass rates data | FROM: /stockport/car-detailing → TO: /stockport/car-detailing/prices, /booking | BOFU | SSG | 1200 |
| 26 | Car Detailing | New Car Protection | Commercial | new car protection stockport | new car detailing stockport, showroom protection stockport | /stockport/car-detailing/new-car-protection | app/stockport/car-detailing/new-car-protection/page.tsx | Stockport | Collected from Stockport dealerships (Arnold Clark, Peter Vardy) — immediate protection before first road trip | FROM: /stockport/car-detailing → TO: /stockport/car-detailing/ceramic-coating, /booking | BOFU | SSG | 1500 |
| 27 | Car Detailing | Pricing | Commercial Investigation | car detailing prices stockport | detailing cost stockport, how much car detailing stockport | /stockport/car-detailing/prices | app/stockport/car-detailing/prices/page.tsx | Stockport | Stockport-specific pricing with local market context. Includes comparison vs Stockport competitors | FROM: /stockport/car-detailing (all sub-pages) → TO: /booking | BOFU | SSG | 1200 |

---

### PILLAR 4: CAR VALETING — STOCKPORT

| # | Pillar | Sub Topic | Search Intent | Primary Keyword | Semantic Keywords | Final URL | Next.js Path | Location | Content Angle (UNIQUE vs Manchester) | Internal Linking | Funnel Stage | Rendering | Word Count |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 28 | Car Valeting | Hub / Pillar | Commercial | car valeting stockport | car valet stockport, mobile valet stockport, car cleaning stockport | /stockport/car-valeting | app/stockport/car-valeting/page.tsx | Stockport | Residential-focused messaging — driveways, cul-de-sacs, at-home convenience. Stockport's suburban character | FROM: /guides/what-is-car-valeting → TO: sub-service pages, /stockport, /booking | MOFU | SSG | 3000 |
| 29 | Car Valeting | Full Valet | Commercial | full valet stockport | complete valet stockport, full car clean stockport | /stockport/car-valeting/full-valet | app/stockport/car-valeting/full-valet/page.tsx | Stockport | Weekend at-home service — we arrive Saturday morning, car perfect by lunch. Stockport family car focus | FROM: /stockport/car-valeting → TO: /stockport/car-valeting/prices, /booking | BOFU | SSG | 1800 |
| 30 | Car Valeting | Mini Valet | Commercial | mini valet stockport | quick valet stockport, express car clean stockport | /stockport/car-valeting/mini-valet | app/stockport/car-valeting/mini-valet/page.tsx | Stockport | Lunchtime service for Stockport office workers — 60 minutes in the car park while you work | FROM: /stockport/car-valeting → TO: /compare/full-valet-vs-mini-valet, /booking | BOFU | SSG | 1200 |
| 31 | Car Valeting | Interior Valeting | Commercial | interior valeting stockport | interior car clean stockport, inside car valet stockport | /stockport/car-valeting/interior-valeting | app/stockport/car-valeting/interior-valeting/page.tsx | Stockport | School run cars — crumbs, juice spills, muddy boots. Family-focused interior restoration | FROM: /stockport/car-valeting → TO: /stockport/car-valeting/pet-hair-removal, /booking | BOFU | SSG | 1500 |
| 32 | Car Valeting | Exterior Valeting | Commercial | exterior valeting stockport | exterior car wash stockport, hand car wash stockport | /stockport/car-valeting/exterior-valeting | app/stockport/car-valeting/exterior-valeting/page.tsx | Stockport | Tree sap, pollen, and bird droppings — Stockport's green suburbs vs Manchester's urban grime. Different challenges, same care | FROM: /stockport/car-valeting → TO: /stockport/car-valeting/prices, /booking | BOFU | SSG | 1500 |
| 33 | Car Valeting | Mobile Valeting | Commercial | mobile car valeting stockport | mobile valet stockport, home car valet stockport | /stockport/car-valeting/mobile-valeting | app/stockport/car-valeting/mobile-valeting/page.tsx | Stockport | Coverage map: Bramhall, Cheadle, Marple, Hazel Grove, Heaton Moor. Driveway requirements and water access | FROM: /stockport/car-valeting, /stockport/areas/* → TO: /booking, /stockport/car-valeting/prices | BOFU | SSG | 1800 |
| 34 | Car Valeting | Pricing | Commercial Investigation | car valeting prices stockport | valet prices stockport, car cleaning cost stockport | /stockport/car-valeting/prices | app/stockport/car-valeting/prices/page.tsx | Stockport | Stockport pricing with local competitor comparison. Emphasise value vs hand car washes on the A6 | FROM: /stockport/car-valeting (all sub-pages) → TO: /booking | BOFU | SSG | 1200 |

---

### PILLAR 5: MANCHESTER AREAS (Hyper-Local)

| # | Pillar | Sub Topic | Search Intent | Primary Keyword | Semantic Keywords | Final URL | Next.js Path | Location | Content Angle | Internal Linking | Funnel Stage | Rendering | Word Count |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 35 | Manchester Areas | Hub | Local | car valeting near me manchester | manchester areas we cover, detailing near me | /manchester/areas | app/manchester/areas/page.tsx | Manchester | Map-based areas overview — interactive coverage map with all Manchester sub-areas | FROM: /manchester → TO: all area pages | TOFU | SSG | 1500 |
| 36 | Manchester Areas | City Centre | Local | car detailing manchester city centre | car valet city centre, mobile valet manchester city centre | /manchester/areas/city-centre | app/manchester/areas/[area]/page.tsx | Manchester – City Centre | Office workers and apartment dwellers — underground parking logistics, collection service | FROM: /manchester/areas → TO: /manchester/car-detailing, /manchester/car-valeting, /booking | MOFU | SSG | 1200 |
| 37 | Manchester Areas | Didsbury | Local | car valeting didsbury | car detailing didsbury, mobile valet didsbury | /manchester/areas/didsbury | app/manchester/areas/[area]/page.tsx | Manchester – Didsbury | Affluent area — premium vehicle focus, driveway service, Didsbury lifestyle angle | FROM: /manchester/areas → TO: /manchester/car-detailing, /manchester/car-valeting, /booking | MOFU | SSG | 1200 |
| 38 | Manchester Areas | Chorlton | Local | car valeting chorlton | car detailing chorlton, mobile valet chorlton | /manchester/areas/chorlton | app/manchester/areas/[area]/page.tsx | Manchester – Chorlton | Eco-conscious community — biodegradable products, waterless wash options, Chorlton green credentials | FROM: /manchester/areas → TO: /manchester/car-valeting, /booking | MOFU | SSG | 1200 |
| 39 | Manchester Areas | Salford | Local | car valeting salford | car detailing salford, mobile valet salford quays | /manchester/areas/salford | app/manchester/areas/[area]/page.tsx | Manchester – Salford | MediaCity workers, Salford Quays apartments — workplace valeting, underground car park access | FROM: /manchester/areas → TO: /manchester/car-valeting/mobile-valeting, /booking | MOFU | SSG | 1200 |
| 40 | Manchester Areas | Trafford | Local | car valeting trafford | car detailing trafford, mobile valet trafford | /manchester/areas/trafford | app/manchester/areas/[area]/page.tsx | Manchester – Trafford | Family suburbs — Trafford Centre proximity, school-run cars, weekend driveway service | FROM: /manchester/areas → TO: /manchester/car-valeting, /booking | MOFU | SSG | 1200 |
| 41 | Manchester Areas | Sale | Local | car valeting sale | car detailing sale, mobile valet sale manchester | /manchester/areas/sale | app/manchester/areas/[area]/page.tsx | Manchester – Sale | Residential neighbourhood focus — regular monthly valeting packages for Sale residents | FROM: /manchester/areas → TO: /manchester/car-valeting, /booking | MOFU | SSG | 1000 |
| 42 | Manchester Areas | Altrincham | Local | car valeting altrincham | car detailing altrincham, mobile valet altrincham | /manchester/areas/altrincham | app/manchester/areas/[area]/page.tsx | Manchester – Altrincham | Market town charm + premium cars — Altrincham Grammar area, commuter belt, Range Rover territory | FROM: /manchester/areas → TO: /manchester/car-detailing, /booking | MOFU | SSG | 1200 |
| 43 | Manchester Areas | Oldham | Local | car valeting oldham | car detailing oldham, mobile valet oldham | /manchester/areas/oldham | app/manchester/areas/[area]/page.tsx | Manchester – Oldham | Hill-town driving — gritting salt damage, moor road grime, Saddleworth-edge vehicles | FROM: /manchester/areas → TO: /manchester/car-valeting, /booking | MOFU | SSG | 1000 |
| 44 | Manchester Areas | Rochdale | Local | car valeting rochdale | car detailing rochdale, mobile valet rochdale | /manchester/areas/rochdale | app/manchester/areas/[area]/page.tsx | Manchester – Rochdale | Gateway to Pennines — rural road mud, country lane driving, weekend warrior cars | FROM: /manchester/areas → TO: /manchester/car-valeting, /booking | MOFU | SSG | 1000 |
| 45 | Manchester Areas | Bury | Local | car valeting bury | car detailing bury, mobile valet bury | /manchester/areas/bury | app/manchester/areas/[area]/page.tsx | Manchester – Bury | Market town + commuter belt — affordable regular valeting for Bury families | FROM: /manchester/areas → TO: /manchester/car-valeting, /booking | MOFU | SSG | 1000 |
| 46 | Manchester Areas | Bolton | Local | car valeting bolton | car detailing bolton, mobile valet bolton | /manchester/areas/bolton | app/manchester/areas/[area]/page.tsx | Manchester – Bolton | Industrial heritage town — brake dust from hills, factory residue on paintwork | FROM: /manchester/areas → TO: /manchester/car-valeting, /booking | MOFU | SSG | 1000 |
| 47 | Manchester Areas | Wigan | Local | car valeting wigan | car detailing wigan, mobile valet wigan | /manchester/areas/wigan | app/manchester/areas/[area]/page.tsx | Manchester – Wigan | Furthest coverage point — booking logistics, travel radius, Wigan-specific packages | FROM: /manchester/areas → TO: /manchester/car-valeting, /booking | MOFU | SSG | 1000 |
| 48 | Manchester Areas | Tameside | Local | car valeting tameside | car detailing tameside, mobile valet ashton-under-lyne | /manchester/areas/tameside | app/manchester/areas/[area]/page.tsx | Manchester – Tameside | Pennine fringe — cold weather car care, frost protection, de-icing damage repair | FROM: /manchester/areas → TO: /manchester/car-valeting, /booking | MOFU | SSG | 1000 |

---

### PILLAR 6: STOCKPORT AREAS (Hyper-Local)

| # | Pillar | Sub Topic | Search Intent | Primary Keyword | Semantic Keywords | Final URL | Next.js Path | Location | Content Angle | Internal Linking | Funnel Stage | Rendering | Word Count |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 49 | Stockport Areas | Hub | Local | car valeting near me stockport | stockport areas we cover | /stockport/areas | app/stockport/areas/page.tsx | Stockport | Coverage map of all Stockport sub-areas with estimated arrival times | FROM: /stockport → TO: all area pages | TOFU | SSG | 1200 |
| 50 | Stockport Areas | Bramhall | Local | car valeting bramhall | car detailing bramhall, mobile valet bramhall | /stockport/areas/bramhall | app/stockport/areas/[area]/page.tsx | Stockport – Bramhall | Affluent Cheshire-border village — executive cars, large driveways, premium detailing demand | FROM: /stockport/areas → TO: /stockport/car-detailing, /booking | MOFU | SSG | 1200 |
| 51 | Stockport Areas | Cheadle | Local | car valeting cheadle | car detailing cheadle, mobile valet cheadle | /stockport/areas/cheadle | app/stockport/areas/[area]/page.tsx | Stockport – Cheadle | Cheadle Hulme + Cheadle village — school-run parents, commuter cars, weekend family service | FROM: /stockport/areas → TO: /stockport/car-valeting, /booking | MOFU | SSG | 1200 |
| 52 | Stockport Areas | Marple | Local | car valeting marple | car detailing marple, mobile valet marple | /stockport/areas/[area]/page.tsx | app/stockport/areas/[area]/page.tsx | Stockport – Marple | Peak District gateway — muddy off-roaders, country lane vehicles, canal-side parking grime | FROM: /stockport/areas → TO: /stockport/car-valeting, /booking | MOFU | SSG | 1000 |
| 53 | Stockport Areas | Hazel Grove | Local | car valeting hazel grove | car detailing hazel grove, mobile valet hazel grove | /stockport/areas/hazel-grove | app/stockport/areas/[area]/page.tsx | Stockport – Hazel Grove | A6 corridor — commuter car care, regular maintenance packages for daily drivers | FROM: /stockport/areas → TO: /stockport/car-valeting, /booking | MOFU | SSG | 1000 |
| 54 | Stockport Areas | Reddish | Local | car valeting reddish | car detailing reddish, mobile valet reddish | /stockport/areas/reddish | app/stockport/areas/[area]/page.tsx | Stockport – Reddish | Affordable neighbourhood — budget-friendly packages, regular valeting subscriptions | FROM: /stockport/areas → TO: /stockport/car-valeting/mini-valet, /booking | MOFU | SSG | 1000 |
| 55 | Stockport Areas | Edgeley | Local | car valeting edgeley | car detailing edgeley, mobile valet edgeley | /stockport/areas/edgeley | app/stockport/areas/[area]/page.tsx | Stockport – Edgeley | Near Stockport town centre — match-day valeting (County ground), terraced street logistics | FROM: /stockport/areas → TO: /stockport/car-valeting, /booking | MOFU | SSG | 1000 |
| 56 | Stockport Areas | Heaton Moor | Local | car valeting heaton moor | car detailing heaton moor, mobile valet heaton moor | /stockport/areas/heaton-moor | app/stockport/areas/[area]/page.tsx | Stockport – Heaton Moor | Popular suburban village — tree-lined streets, sap/pollen issues, on-street parking challenges | FROM: /stockport/areas → TO: /stockport/car-valeting, /stockport/car-detailing, /booking | MOFU | SSG | 1000 |

---

### PILLAR 7: INFORMATIONAL GUIDES (Topical Authority Builder)

| # | Pillar | Sub Topic | Search Intent | Primary Keyword | Semantic Keywords | Final URL | Next.js Path | Location | Content Angle | Internal Linking | Funnel Stage | Rendering | Word Count |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 57 | Guides | Hub | Informational | car care guides | car detailing tips, valeting advice, car cleaning guides | /guides | app/guides/page.tsx | None | Resource hub — categorised guide library with search/filter functionality | TO: all guide pages | TOFU | SSG | 800 |
| 58 | Guides | What Is Car Detailing | Informational | what is car detailing | car detailing meaning, car detailing explained, what does car detailing include | /guides/what-is-car-detailing | app/guides/[slug]/page.tsx | None | Definitive explainer — history, process, products, tools, difference from valeting. AI Overview optimised with clear definitions | TO: /manchester/car-detailing, /stockport/car-detailing, /compare/car-detailing-vs-car-valeting | TOFU | SSG | 3000 |
| 59 | Guides | What Is Car Valeting | Informational | what is car valeting | car valeting meaning, what does a car valet include, valeting explained | /guides/what-is-car-valeting | app/guides/[slug]/page.tsx | None | UK-specific terminology (valeting vs detailing is a UK distinction). Complete breakdown of packages and processes | TO: /manchester/car-valeting, /stockport/car-valeting, /compare/car-detailing-vs-car-valeting | TOFU | SSG | 3000 |
| 60 | Guides | How Often Valet Car | Informational | how often should you valet your car | car valet frequency, how often car clean, regular car valeting schedule | /guides/how-often-should-you-valet-your-car | app/guides/[slug]/page.tsx | None | Seasonal calendar — monthly/quarterly/annual. Factors: mileage, parking type, pets, kids. Featured Snippet: table format | TO: /manchester/car-valeting, /stockport/car-valeting, /pricing/car-valeting | TOFU | SSG | 2000 |
| 61 | Guides | How Often Detail Car | Informational | how often should you detail your car | car detailing frequency, how often ceramic coating, detailing schedule | /guides/how-often-should-you-detail-your-car | app/guides/[slug]/page.tsx | None | Different schedules for different services — paint correction (annually), ceramic (every 3-5 years), interior (quarterly) | TO: /manchester/car-detailing, /pricing/car-detailing | TOFU | SSG | 2000 |
| 62 | Guides | Detailing Step by Step | Informational | car detailing step by step | car detailing process, how to detail a car, detailing procedure | /guides/car-detailing-step-by-step | app/guides/[slug]/page.tsx | None | Professional 12-step process with time estimates. Numbered list for Featured Snippet. "Why each step matters" angle | TO: /manchester/car-detailing, /compare/diy-detailing-vs-professional | TOFU | SSG | 2500 |
| 63 | Guides | Valeting Checklist | Informational | car valeting checklist | valet checklist, car cleaning checklist, what to check when valeting | /guides/car-valeting-checklist | app/guides/[slug]/page.tsx | None | Printable PDF checklist — interior/exterior/engine. Both DIY and professional-grade versions | TO: /manchester/car-valeting, /compare/diy-detailing-vs-professional | TOFU | SSG | 1800 |
| 64 | Guides | Ceramic Coating Explained | Informational | ceramic coating explained | how ceramic coating works, ceramic coating benefits, is ceramic coating worth it | /guides/ceramic-coating-explained | app/guides/[slug]/page.tsx | None | Science of SiO2 nanotechnology — hydrophobic properties, UV resistance, hardness scale. Myth-busting section | TO: /manchester/car-detailing/ceramic-coating, /stockport/car-detailing/ceramic-coating, /compare/ceramic-coating-vs-wax | TOFU | SSG | 2500 |
| 65 | Guides | Paint Correction Guide | Informational | paint correction guide | how paint correction works, paint correction stages, compound vs polish | /guides/paint-correction-guide | app/guides/[slug]/page.tsx | None | 1-stage vs 2-stage vs 3-stage correction. Paint thickness gauge readings. Before/after photography guide | TO: /manchester/car-detailing/paint-correction, /stockport/car-detailing/paint-correction | TOFU | SSG | 2500 |
| 66 | Guides | Maintain Ceramic Coating | Informational | how to maintain ceramic coating | ceramic coating aftercare, ceramic coating maintenance, washing ceramic coated car | /guides/how-to-maintain-ceramic-coating | app/guides/[slug]/page.tsx | None | pH-neutral wash, no wax, annual inspection. Common mistakes that void warranties. Maintenance schedule table | TO: /manchester/car-detailing/ceramic-coating, /guides/ceramic-coating-explained | MOFU | SSG | 1800 |
| 67 | Guides | Best Car Cleaning Products | Informational | best car cleaning products uk | car detailing products, best car shampoo, snow foam, wheel cleaner | /guides/best-car-cleaning-products | app/guides/[slug]/page.tsx | None | Product recommendations by category — shampoo, wax, clay bar, microfibre. Budget vs premium. UK availability | TO: /guides/car-detailing-step-by-step, /compare/diy-detailing-vs-professional | TOFU | SSG | 2500 |
| 68 | Guides | Remove Swirl Marks | Informational | how to remove swirl marks | swirl mark removal DIY, polish swirl marks, buffer marks removal | /guides/how-to-remove-swirl-marks | app/guides/[slug]/page.tsx | None | DIY vs professional comparison — machine polisher guide, compound selection, pad types. Risk warning for beginners | TO: /manchester/car-detailing/swirl-mark-removal, /manchester/car-detailing/paint-correction | TOFU | SSG | 2000 |
| 69 | Guides | Clean Leather Seats | Informational | how to clean leather seats | leather seat care, leather conditioning, leather restoration tips | /guides/how-to-clean-leather-seats | app/guides/[slug]/page.tsx | None | Real vs faux leather care differences. Cleaning + conditioning 2-step process. Product recommendations | TO: /manchester/car-detailing/leather-conditioning | TOFU | SSG | 1800 |
| 70 | Guides | Remove Pet Hair | Informational | how to remove pet hair from car | dog hair removal car, pet fur car seats, animal hair cleaning | /guides/how-to-remove-pet-hair-from-car | app/guides/[slug]/page.tsx | None | 7 methods ranked by effectiveness — rubber gloves, pumice stone, compressed air, duct tape, detailing brush | TO: /manchester/car-valeting/pet-hair-removal | TOFU | SSG | 1500 |
| 71 | Guides | Remove Car Odours | Informational | how to remove car odours | bad smell in car, car smoke smell removal, eliminate car smells | /guides/how-to-remove-car-odours | app/guides/[slug]/page.tsx | None | Source identification → treatment. Ozone machine, enzymatic cleaners, baking soda. When DIY fails and you need professional help | TO: /manchester/car-valeting/odour-removal | TOFU | SSG | 1800 |
| 72 | Guides | Is Detailing Worth It | Informational | is car detailing worth it | car detailing benefits, why get car detailed, detailing value for money | /guides/is-car-detailing-worth-it | app/guides/[slug]/page.tsx | None | ROI analysis — resale value uplift (£500-£2000), paint preservation, pride of ownership. Data-backed argument | TO: /manchester/car-detailing, /pricing/car-detailing, /compare/diy-detailing-vs-professional | MOFU | SSG | 2000 |
| 73 | Guides | What Full Valet Includes | Informational | what does a full valet include | full valet checklist, full car valet details, complete valet service list | /guides/what-does-a-full-valet-include | app/guides/[slug]/page.tsx | None | Exhaustive checklist with time per step. Featured Snippet: numbered list. Comparison of different providers' definitions | TO: /manchester/car-valeting/full-valet, /stockport/car-valeting/full-valet | MOFU | SSG | 2000 |
| 74 | Guides | Protect Car Paint | Informational | how to protect car paint | car paint protection, prevent paint damage, keep car paint new | /guides/how-to-protect-car-paint | app/guides/[slug]/page.tsx | None | Layered protection strategy — wash technique → sealant → ceramic → PPF. Decision tree for different budgets | TO: /manchester/car-detailing/ceramic-coating, /compare/ceramic-coating-vs-ppf | TOFU | SSG | 2000 |
| 75 | Guides | Winter Car Care | Informational | winter car care guide uk | car care in winter, protect car from salt, winter car cleaning | /guides/winter-car-care-guide | app/guides/[slug]/page.tsx | None | Manchester-relevant: heavy rain, road salt, grit, frost. Monthly winter checklist. Undercarriage importance | TO: /manchester/car-valeting, /manchester/car-detailing/ceramic-coating | TOFU | SSG | 2000 |
| 76 | Guides | Summer Car Care | Informational | summer car care guide uk | car care in summer, protect car from sun, summer car cleaning | /guides/summer-car-care-guide | app/guides/[slug]/page.tsx | None | UV damage, tree sap, pollen, insect splatter. Summer-specific washing schedule and product recommendations | TO: /manchester/car-valeting, /manchester/car-detailing/exterior-detailing | TOFU | SSG | 1800 |
| 77 | Guides | New Car Detailing | Informational | new car detailing guide | should you detail a new car, new car protection, first detail on new car | /guides/new-car-detailing-guide | app/guides/[slug]/page.tsx | None | Myth: "new cars don't need detailing." Reality: transport damage, dealer wash marks, unprotected paint. Immediate protection plan | TO: /manchester/car-detailing/new-car-protection, /stockport/car-detailing/new-car-protection | MOFU | SSG | 2000 |
| 78 | Guides | Pre-Sale Detailing | Informational | detailing car before selling | used car detailing, prepare car for sale, increase car value | /guides/used-car-detailing-before-selling | app/guides/[slug]/page.tsx | None | ROI focus: average £500-£1500 value increase for £150-£300 detail. Which services matter most for selling | TO: /manchester/car-detailing, /pricing/car-detailing | MOFU | SSG | 1800 |
| 79 | Guides | Wash Without Scratching | Informational | how to wash car without scratching paint | safe car washing, two bucket method, touchless car wash | /guides/how-to-wash-car-without-scratching | app/guides/[slug]/page.tsx | None | Two-bucket method, grit guard, microfibre mitt, snow foam pre-wash. Why automatic washes destroy paint | TO: /manchester/car-valeting/exterior-valeting, /guides/best-car-cleaning-products | TOFU | SSG | 1800 |
| 80 | Guides | Machine vs Hand Polish | Informational | machine polishing vs hand polishing | DA polisher vs hand polish, machine polish car, rotary vs DA | /guides/machine-polishing-vs-hand-polishing | app/guides/[slug]/page.tsx | None | Technical comparison — cut rate, heat generation, pad types. When hand polish is enough vs when machine is necessary | TO: /manchester/car-detailing/paint-correction, /guides/paint-correction-guide | TOFU | SSG | 1800 |
| 81 | Guides | Interior Detailing Guide | Informational | interior detailing guide | how to detail car interior, interior car cleaning guide, deep clean car inside | /guides/interior-detailing-guide | app/guides/[slug]/page.tsx | None | Material-by-material guide — plastic trim, leather, Alcantara, carpet, headliner, glass. Product + technique per surface | TO: /manchester/car-detailing/interior-detailing, /guides/how-to-clean-leather-seats | TOFU | SSG | 2500 |
| 82 | Guides | Exterior Detailing Guide | Informational | exterior detailing guide | how to detail car exterior, full exterior detail process | /guides/exterior-detailing-guide | app/guides/[slug]/page.tsx | None | Panel-by-panel approach — decontamination, clay, polish, protect. Wheels, trim, glass each covered separately | TO: /manchester/car-detailing/exterior-detailing, /guides/paint-correction-guide | TOFU | SSG | 2500 |
| 83 | Guides | Alloy Wheel Cleaning | Informational | how to clean alloy wheels | alloy wheel cleaning guide, wheel cleaner, brake dust removal | /guides/alloy-wheel-cleaning-guide | app/guides/[slug]/page.tsx | None | Acid-free vs acid wheel cleaners. Brake dust chemistry. Wheel sealant and ceramic coating for wheels | TO: /manchester/car-valeting/exterior-valeting, /guides/best-car-cleaning-products | TOFU | SSG | 1500 |
| 84 | Guides | Wax vs Ceramic | Informational | car wax vs ceramic coating | wax or ceramic, should I get ceramic coating or wax, protection comparison | /guides/car-wax-vs-ceramic-coating | app/guides/[slug]/page.tsx | None | Feature-by-feature comparison table. Durability, cost, application, maintenance. Budget decision tree | TO: /manchester/car-detailing/ceramic-coating, /compare/ceramic-coating-vs-wax | TOFU | SSG | 2000 |
| 85 | Guides | PPF vs Ceramic | Informational | ppf vs ceramic coating | paint protection film or ceramic, PPF benefits vs ceramic | /guides/ppf-vs-ceramic-coating | app/guides/[slug]/page.tsx | None | Self-healing film vs hydrophobic coating. Cost analysis per panel. When to use both together | TO: /compare/ceramic-coating-vs-ppf, /manchester/car-detailing/ceramic-coating | TOFU | SSG | 2000 |
| 86 | Guides | Clay Bar Treatment | Informational | clay bar treatment explained | what is clay bar, clay bar car, how to clay bar a car | /guides/clay-bar-treatment-explained | app/guides/[slug]/page.tsx | None | What contamination is (iron particles, brake dust, industrial fallout). Bag test. Clay vs clay mitt. Step-by-step with photos | TO: /manchester/car-detailing/exterior-detailing, /guides/exterior-detailing-guide | TOFU | SSG | 1500 |

---

### PILLAR 8: COMPARISON PAGES (Featured Snippet Magnets)

| # | Pillar | Sub Topic | Search Intent | Primary Keyword | Semantic Keywords | Final URL | Next.js Path | Location | Content Angle | Internal Linking | Funnel Stage | Rendering | Word Count |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 87 | Compare | Hub | Informational | car care comparisons | detailing comparisons, valeting comparisons | /compare | app/compare/page.tsx | None | Index of all comparison pages — quick-answer format | TO: all compare sub-pages | TOFU | SSG | 800 |
| 88 | Compare | Detailing vs Valeting | Informational | car detailing vs car valeting | difference between detailing and valeting, detailing or valeting | /compare/car-detailing-vs-car-valeting | app/compare/[slug]/page.tsx | None | THE core differentiator page. Side-by-side table: price, time, what's included, who it's for, when to choose each. AI Overview optimised | FROM: /guides/what-is-car-detailing, /guides/what-is-car-valeting → TO: /manchester/car-detailing, /manchester/car-valeting | TOFU | SSG | 2500 |
| 89 | Compare | Ceramic vs Wax | Informational | ceramic coating vs wax | ceramic or wax, car wax vs ceramic protection, which is better | /compare/ceramic-coating-vs-wax | app/compare/[slug]/page.tsx | None | Comparison table: durability (months vs years), cost, application, maintenance, appearance. Clear winner per use case | FROM: /guides/ceramic-coating-explained → TO: /manchester/car-detailing/ceramic-coating | MOFU | SSG | 2000 |
| 90 | Compare | Ceramic vs PPF | Informational | ceramic coating vs ppf | ceramic or paint protection film, ppf vs ceramic cost | /compare/ceramic-coating-vs-ppf | app/compare/[slug]/page.tsx | None | Different protection types — chemical resistance vs physical barrier. Cost per panel. Combination strategy | FROM: /guides/ppf-vs-ceramic-coating → TO: /manchester/car-detailing/ceramic-coating, /manchester/car-detailing/new-car-protection | MOFU | SSG | 2000 |
| 91 | Compare | Full vs Mini Valet | Informational | full valet vs mini valet | difference between full and mini valet, which valet do I need | /compare/full-valet-vs-mini-valet | app/compare/[slug]/page.tsx | None | Decision tree — "Take this quiz to find your perfect valet." Time, cost, what's included, when each is appropriate | FROM: /guides/what-does-a-full-valet-include → TO: /manchester/car-valeting/full-valet, /manchester/car-valeting/mini-valet | MOFU | SSG | 1500 |
| 92 | Compare | Mobile vs Fixed | Informational | mobile valeting vs fixed location | mobile or fixed car valet, is mobile valeting good | /compare/mobile-valeting-vs-fixed-location | app/compare/[slug]/page.tsx | None | Pros/cons table. Water quality, space, lighting, convenience, price. Why we chose mobile-first | FROM: /manchester/car-valeting/mobile-valeting → TO: /manchester/car-valeting, /booking | MOFU | SSG | 1500 |
| 93 | Compare | Interior vs Exterior | Informational | interior vs exterior valeting | interior or exterior valet first, which valet do I need | /compare/interior-vs-exterior-valeting | app/compare/[slug]/page.tsx | None | Which to prioritise based on car usage. Combined package value. Seasonal advice (interior in winter, exterior in spring) | TO: /manchester/car-valeting/interior-valeting, /manchester/car-valeting/exterior-valeting | MOFU | SSG | 1500 |
| 94 | Compare | Hand vs Machine | Informational | hand polish vs machine polish car | hand polishing vs machine, da polisher results | /compare/hand-polish-vs-machine-polish | app/compare/[slug]/page.tsx | None | Visual results comparison. Safety for beginners. When hand polish is sufficient vs machine necessary | TO: /manchester/car-detailing/paint-correction, /guides/machine-polishing-vs-hand-polishing | TOFU | SSG | 1500 |
| 95 | Compare | DIY vs Professional | Informational | diy car detailing vs professional | should I detail my own car, professional detailing worth it | /compare/diy-detailing-vs-professional | app/compare/[slug]/page.tsx | None | True cost analysis — equipment investment, time, risk of damage, results quality. When DIY is fine vs when to go pro | FROM: /guides/is-car-detailing-worth-it → TO: /manchester/car-detailing, /pricing/car-detailing | MOFU | SSG | 2000 |

---

### PILLAR 9: FAQ PAGES (AI Overviews & People Also Ask)

| # | Pillar | Sub Topic | Search Intent | Primary Keyword | Semantic Keywords | Final URL | Next.js Path | Location | Content Angle | Internal Linking | Funnel Stage | Rendering | Word Count |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 96 | FAQ | Hub | Informational | car detailing faq | frequently asked questions car valeting, car care questions | /faq | app/faq/page.tsx | None | Master FAQ hub with categorised questions — accordion format with schema markup | TO: all FAQ sub-pages, relevant guides | TOFU | SSG | 1500 |
| 97 | FAQ | Car Detailing FAQ | Informational | car detailing questions | common detailing questions, detailing FAQ, what to ask detailer | /faq/car-detailing | app/faq/[topic]/page.tsx | None | 20+ questions with concise answers. Structured for PAA boxes. "How long does detailing take?" "Can detailing remove scratches?" etc. | TO: /guides/what-is-car-detailing, /manchester/car-detailing | TOFU | SSG | 2000 |
| 98 | FAQ | Car Valeting FAQ | Informational | car valeting questions | valeting FAQ, valet questions, what to expect from valet | /faq/car-valeting | app/faq/[topic]/page.tsx | None | 20+ valeting-specific questions. "What should I remove before a valet?" "How long does a valet take?" "Do I need to be home?" | TO: /guides/what-is-car-valeting, /manchester/car-valeting | TOFU | SSG | 2000 |
| 99 | FAQ | Ceramic Coating FAQ | Informational | ceramic coating questions | ceramic coating FAQ, is ceramic coating worth it questions | /faq/ceramic-coating | app/faq/[topic]/page.tsx | None | Myth-busting format — "Does ceramic coating prevent scratches?" (No, but...). "How long does ceramic coating last?" | TO: /guides/ceramic-coating-explained, /manchester/car-detailing/ceramic-coating | TOFU | SSG | 1800 |
| 100 | FAQ | Pricing FAQ | Informational | car detailing pricing questions | why is car detailing expensive, detailing price breakdown | /faq/pricing | app/faq/[topic]/page.tsx | None | Transparency page — "Why do prices vary?" "What affects the cost?" "Is cheap valeting safe?" Education on value vs price | TO: /pricing/car-detailing, /pricing/car-valeting, /manchester/car-detailing/prices | MOFU | SSG | 1500 |
| 101 | FAQ | Booking FAQ | Informational | how to book car valet | booking questions, what to expect when booking, preparation for valet | /faq/booking | app/faq/[topic]/page.tsx | None | Pre-booking: "Do I need a driveway?" "What about water/electric?" Post-booking: "What to remove from car" "How to prepare" | TO: /booking, /manchester/car-valeting/mobile-valeting | BOFU | SSG | 1200 |

---

### PILLAR 10: PRICING PAGES

| # | Pillar | Sub Topic | Search Intent | Primary Keyword | Semantic Keywords | Final URL | Next.js Path | Location | Content Angle | Internal Linking | Funnel Stage | Rendering | Word Count |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 102 | Pricing | Hub | Commercial Investigation | car detailing prices | car valeting prices, detailing cost, valet price list | /pricing | app/pricing/page.tsx | None | Central pricing overview — both detailing and valeting packages at a glance. "Starting from" format with CTAs to detailed pages | TO: /pricing/car-detailing, /pricing/car-valeting, /booking | BOFU | SSG | 1200 |
| 103 | Pricing | Detailing Prices | Commercial Investigation | car detailing price list | professional detailing cost, detailing packages and prices | /pricing/car-detailing | app/pricing/car-detailing/page.tsx | None | Detailed pricing grid by vehicle size and service. Package comparison. "What's included" breakdown per tier | FROM: /manchester/car-detailing/prices, /stockport/car-detailing/prices → TO: /booking, /faq/pricing | BOFU | SSG | 1500 |
| 104 | Pricing | Valeting Prices | Commercial Investigation | car valeting price list | valet prices, car cleaning cost, mobile valet prices | /pricing/car-valeting | app/pricing/car-valeting/page.tsx | None | Mini/Full/Interior/Exterior pricing by size. Subscription discounts. Add-on pricing (pet hair, odour) | FROM: /manchester/car-valeting/prices, /stockport/car-valeting/prices → TO: /booking, /faq/pricing | BOFU | SSG | 1500 |

---

### PILLAR 11: BRAND & CONVERSION PAGES

| # | Pillar | Sub Topic | Search Intent | Primary Keyword | Semantic Keywords | Final URL | Next.js Path | Location | Content Angle | Internal Linking | Funnel Stage | Rendering | Word Count |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 105 | Brand | Homepage | Navigational / Commercial | car detailing manchester | mobile car valeting, professional detailing near me | / | app/page.tsx | Manchester (primary) | Brand entity hub — hero with Manchester focus, service overview, trust signals, featured reviews, area coverage | TO: /manchester, /stockport, /manchester/car-detailing, /manchester/car-valeting, /guides | TOFU | SSG | — |
| 106 | Brand | About Us | Navigational | about [brand name] | who we are, our story, professional detailers manchester | /about-us | app/about-us/page.tsx | Both | Brand story, team credentials, certifications, insurance, values. E-E-A-T signals | TO: /manchester, /stockport, /gallery | MOFU | SSG | 1500 |
| 107 | Brand | Contact | Transactional | contact car detailer manchester | phone number, email, get in touch, contact form | /contact | app/contact/page.tsx | Both | Contact form, phone, email, WhatsApp. Coverage area map. Operating hours | TO: /booking, /faq/booking | BOFU | SSG | — |
| 108 | Brand | Booking | Transactional | book car valet manchester | book detailing, online booking, schedule valet | /booking | app/booking/page.tsx | Both | Online booking form — service selection, vehicle type, date/time, location. Instant quote calculator | FROM: all service/pricing pages → standalone | BOFU | Dynamic SSR | — |
| 109 | Brand | Gallery – Detailing | Commercial | car detailing results | before and after detailing, detailing portfolio, paint correction results | /gallery/detailing | app/gallery/detailing/page.tsx | Both | Before/after photo grid — filterable by service type. Each entry: vehicle, service performed, time, result | FROM: /manchester/car-detailing → TO: /booking | MOFU | SSG | — |
| 110 | Brand | Gallery – Valeting | Commercial | car valeting results | before and after valet, valet portfolio | /gallery/valeting | app/gallery/valeting/page.tsx | Both | Before/after grid for valeting work. Family cars, commercial vehicles, pet-owner vehicles | FROM: /manchester/car-valeting → TO: /booking | MOFU | SSG | — |
| 111 | Brand | Manchester Hub | Local | car care manchester | manchester car services, detailing and valeting manchester | /manchester | app/manchester/page.tsx | Manchester | Location authority page — Manchester-specific: map, areas served, local reviews, community involvement, local partnerships | TO: /manchester/car-detailing, /manchester/car-valeting, /manchester/areas | TOFU | SSG | 2500 |
| 112 | Brand | Stockport Hub | Local | car care stockport | stockport car services, detailing and valeting stockport | /stockport | app/stockport/page.tsx | Stockport | Location authority page — Stockport-specific: map, areas served, local reviews, SK postcode coverage | TO: /stockport/car-detailing, /stockport/car-valeting, /stockport/areas | TOFU | SSG | 2500 |
| 113 | Brand | Manchester Reviews | Local | car detailing reviews manchester | car valet reviews, customer testimonials manchester | /manchester/reviews | app/manchester/reviews/page.tsx | Manchester | Aggregated Google/Trustpilot reviews. Filter by service type. Schema markup for aggregate rating | FROM: /manchester → TO: /booking | MOFU | Dynamic SSR | — |
| 114 | Brand | Stockport Reviews | Local | car detailing reviews stockport | car valet reviews stockport, customer testimonials stockport | /stockport/reviews | app/stockport/reviews/page.tsx | Stockport | Stockport-specific reviews. Different testimonials from Manchester. Local customer stories | FROM: /stockport → TO: /booking | MOFU | Dynamic SSR | — |
| 115 | Brand | Gallery Hub | Commercial | detailing gallery | car care portfolio, our work | /gallery | app/gallery/page.tsx | Both | Portfolio landing page splitting into detailing vs valeting galleries | TO: /gallery/detailing, /gallery/valeting | MOFU | SSG | — |

---

### PILLAR 12: BLOG (Dynamic Long-Tail Content)

| # | Pillar | Sub Topic | Search Intent | Primary Keyword | Semantic Keywords | Final URL | Next.js Path | Location | Content Angle | Internal Linking | Funnel Stage | Rendering | Word Count |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 116 | Blog | Hub | Mixed | car detailing blog | car care tips blog, valeting news, detailing articles | /blog | app/blog/page.tsx | None | Blog listing with categories, featured posts, search. Latest-first with pagination | TO: all blog posts | TOFU | Dynamic SSR | — |
| 117 | Blog | Category Pages | Mixed | [category] articles | car detailing tips, valeting guides, ceramic coating articles | /blog/category/[category] | app/blog/category/[category]/page.tsx | None | Categories: detailing-tips, valeting-tips, ceramic-coating, seasonal-care, car-types, local-news | TO: blog posts in category | TOFU | Dynamic SSR | — |
| 118 | Blog | Best Time of Year for Ceramic | Informational | best time to get ceramic coating | when to ceramic coat, ceramic coating season, winter ceramic | /blog/best-time-of-year-for-ceramic-coating | app/blog/[slug]/page.tsx | None | Seasonal analysis — spring/autumn optimal. Manchester weather data supporting timing recommendations | TO: /manchester/car-detailing/ceramic-coating, /guides/ceramic-coating-explained | TOFU | Dynamic SSR | 1200 |
| 119 | Blog | Should You Valet Before MOT | Informational | should you valet car before mot | car valet before mot, clean car for mot | /blog/should-you-valet-car-before-mot | app/blog/[slug]/page.tsx | None | Does a clean car pass easier? Headlight clarity, visibility, tyre condition. What MOT testers actually check | TO: /manchester/car-valeting, /manchester/car-detailing/headlight-restoration | TOFU | Dynamic SSR | 1000 |
| 120 | Blog | Electric Car Detailing | Informational | electric car detailing | EV car care, Tesla detailing, electric car washing | /blog/electric-car-detailing-guide | app/blog/[slug]/page.tsx | None | EV-specific considerations — no engine bay, regenerative brake dust differences, charging port care | TO: /manchester/car-detailing, /guides/car-detailing-step-by-step | TOFU | Dynamic SSR | 1500 |
| 121 | Blog | Black Car Detailing Tips | Informational | black car detailing tips | detailing dark paint, swirl marks on black car, black car care | /blog/black-car-detailing-tips | app/blog/[slug]/page.tsx | None | Why black shows every flaw — specific compound/polish recommendations. Lighting techniques for inspection | TO: /manchester/car-detailing/paint-correction, /manchester/car-detailing/swirl-mark-removal | TOFU | Dynamic SSR | 1200 |
| 122 | Blog | White Car Care | Informational | white car care tips | keeping white car clean, white paint maintenance | /blog/white-car-care-tips | app/blog/[slug]/page.tsx | None | Iron fallout visibility on white, yellowing prevention, decontamination frequency | TO: /manchester/car-detailing/exterior-detailing, /guides/clay-bar-treatment-explained | TOFU | Dynamic SSR | 1200 |
| 123 | Blog | Detailing for Lease Return | Commercial Investigation | lease return detailing | end of lease car valet, lease return preparation | /blog/detailing-for-lease-return | app/blog/[slug]/page.tsx | None | Avoiding lease-end charges — BVRLA fair wear and tear guide. Which services prevent penalty charges | TO: /manchester/car-detailing, /pricing/car-detailing | MOFU | Dynamic SSR | 1500 |
| 124 | Blog | Company Car Care | Commercial | company car valeting | fleet car cleaning, business car valet, corporate detailing | /blog/company-car-valeting-guide | app/blog/[slug]/page.tsx | None | Fleet management angle — duty of care, BIK tax implications of poor condition, corporate packages | TO: /manchester/car-valeting/mobile-valeting, /pricing/car-valeting | MOFU | Dynamic SSR | 1500 |
| 125 | Blog | Wedding Car Detailing | Commercial | wedding car detailing | wedding car valet, bridal car preparation | /blog/wedding-car-detailing | app/blog/[slug]/page.tsx | None | Special occasion prep — ribbon-safe polish, day-before timing, rain protection. Manchester wedding venues | TO: /manchester/car-detailing, /booking | MOFU | Dynamic SSR | 1000 |
| 126 | Blog | Track Day Car Prep | Informational | track day car preparation | prepare car for track day, detailing before track day | /blog/track-day-car-preparation | app/blog/[slug]/page.tsx | None | Pre-track inspection detail — brake dust protection, stone chip prevention, Oulton Park/Aintree local tracks | TO: /manchester/car-detailing, /manchester/car-detailing/ceramic-coating | TOFU | Dynamic SSR | 1200 |
| 127 | Blog | Classic Car Detailing | Commercial Investigation | classic car detailing manchester | vintage car care, classic car polishing, heritage vehicle detailing | /blog/classic-car-detailing-manchester | app/blog/[slug]/page.tsx | Manchester | Single-stage paint care, chrome polishing, patina preservation. Manchester classic car scene | TO: /manchester/car-detailing, /manchester/car-detailing/paint-correction | MOFU | Dynamic SSR | 1500 |
| 128 | Blog | Caravan Valeting | Commercial | caravan valeting manchester | motorhome cleaning, caravan exterior wash | /blog/caravan-valeting-manchester | app/blog/[slug]/page.tsx | Manchester | Seasonal service — pre-season clean, post-holiday wash. Oxidation removal from fibreglass. Manchester storage sites | TO: /manchester/car-valeting, /booking | MOFU | Dynamic SSR | 1200 |
| 129 | Blog | Motorbike Detailing | Commercial | motorbike detailing manchester | motorcycle cleaning, bike valeting | /blog/motorbike-detailing-manchester | app/blog/[slug]/page.tsx | Manchester | Chain cleaning, tank polishing, wheel detail. Manchester biking community | TO: /manchester/car-detailing, /booking | MOFU | Dynamic SSR | 1200 |
| 130 | Blog | Rain and Paint Damage | Informational | does rain damage car paint | acid rain car paint, rain spots on car, water marks | /blog/does-rain-damage-car-paint | app/blog/[slug]/page.tsx | None | Manchester gets 150+ rain days/year — water mineral deposits, acid rain effects, prevention strategies | TO: /manchester/car-detailing/ceramic-coating, /guides/how-to-protect-car-paint | TOFU | Dynamic SSR | 1200 |
| 131 | Blog | Parking Under Trees | Informational | tree sap on car paint | bird droppings on car, tree damage car, sap removal | /blog/parking-under-trees-car-damage | app/blog/[slug]/page.tsx | None | Sap, bird droppings, pollen — chemical etching timeline. Emergency removal tips. Prevention with sealant/ceramic | TO: /guides/how-to-protect-car-paint, /manchester/car-detailing/exterior-detailing | TOFU | Dynamic SSR | 1000 |
| 132 | Blog | Car Detailing Manchester Spotlight | Local | manchester car scene | manchester car community, car meets manchester | /blog/manchester-car-detailing-scene | app/blog/[slug]/page.tsx | Manchester | Local flavour — Manchester car meets, popular vehicles, Trafford Centre car park culture, local car community | TO: /manchester, /manchester/car-detailing | TOFU | Dynamic SSR | 1500 |

---

## PART 3: PROGRAMMATIC EXPANSION TEMPLATES

### For Future Scale (150–300 pages)

These templates allow you to programmatically generate pages using `generateStaticParams`:

#### Vehicle-Specific Service Pages (Expansion to ~50 pages)
```
/manchester/car-detailing/[vehicle-type]/
  - /manchester/car-detailing/suv-detailing/
  - /manchester/car-detailing/sports-car-detailing/
  - /manchester/car-detailing/van-detailing/
  - /manchester/car-detailing/4x4-detailing/
```

#### Brand-Specific Pages (Expansion to ~30 pages)
```
/guides/[brand]-detailing-guide/
  - /guides/bmw-detailing-guide/
  - /guides/audi-detailing-guide/
  - /guides/range-rover-detailing-guide/
  - /guides/tesla-detailing-guide/
  - /guides/mercedes-detailing-guide/
  - /guides/volkswagen-detailing-guide/
```

#### Seasonal Blog Content (Expansion to ~24 pages/year)
```
/blog/[month]-car-care-[year]/
  - /blog/january-car-care-2025/
  - /blog/february-car-care-2025/
```

#### Additional Manchester Sub-Areas (Expansion to ~20 pages)
```
/manchester/areas/[area]/
  - /manchester/areas/stretford/
  - /manchester/areas/urmston/
  - /manchester/areas/prestwich/
  - /manchester/areas/whitefield/
  - /manchester/areas/failsworth/
  - /manchester/areas/denton/
  - /manchester/areas/droylsden/
  - /manchester/areas/eccles/
  - /manchester/areas/swinton/
  - /manchester/areas/worsley/
```

#### Additional Stockport Sub-Areas (Expansion to ~10 pages)
```
/stockport/areas/[area]/
  - /stockport/areas/woodley/
  - /stockport/areas/bredbury/
  - /stockport/areas/romiley/
  - /stockport/areas/gatley/
  - /stockport/areas/heald-green/
  - /stockport/areas/poynton/
  - /stockport/areas/disley/
```

---

## PART 4: INTERNAL LINKING ARCHITECTURE

### Link Flow Diagram

```
TOFU (Awareness)                    MOFU (Consideration)               BOFU (Decision)
─────────────────                   ────────────────────               ───────────────

/guides/*           ──────────►     /manchester/car-detailing   ──►   /manchester/car-detailing/prices
/compare/*          ──────────►     /manchester/car-valeting    ──►   /manchester/car-valeting/prices
/faq/*              ──────────►     /stockport/car-detailing    ──►   /stockport/car-detailing/prices
/blog/*             ──────────►     /stockport/car-valeting     ──►   /stockport/car-valeting/prices
                                    /gallery/*                  ──►   /pricing/*
                                    /manchester/areas/*               /booking
                                    /stockport/areas/*
                                    /about-us
                                    /manchester/reviews
                                    /stockport/reviews
```

### Contextual Linking Rules

1. **Every service page** links to: its pricing page, the booking page, and 1-2 relevant guides
2. **Every guide** links to: 1-2 service pages (Manchester primary, Stockport secondary) and 1 comparison page
3. **Every comparison page** links to: the 2 things being compared (service pages) and 1 booking CTA
4. **Every area page** links to: both detailing and valeting pillar pages for its parent location + booking
5. **Every FAQ page** links to: the corresponding guide and service page
6. **Every blog post** links to: 2-3 evergreen pages (guides or services)
7. **Location hubs** (/manchester, /stockport) link to: all service pillars + areas hub + reviews

### Breadcrumb Structure (JSON-LD)

```
Home > Manchester > Car Detailing > Ceramic Coating
Home > Stockport > Car Valeting > Full Valet
Home > Guides > What Is Car Detailing
Home > Compare > Car Detailing vs Car Valeting
Home > FAQ > Car Detailing
Home > Blog > [Post Title]
```

---

## PART 5: SCHEMA MARKUP REQUIREMENTS

| Page Type | Schema Types |
|---|---|
| Homepage | LocalBusiness, Organization, WebSite, SiteNavigationElement |
| Location Hubs | LocalBusiness (with areaServed), GeoCoordinates |
| Service Pages | Service, Offer, AggregateRating |
| Area Pages | LocalBusiness (with specific areaServed), Place |
| Guide Pages | Article, HowTo (where applicable), FAQPage (inline FAQ) |
| Compare Pages | Article, Table (markup), FAQPage |
| FAQ Pages | FAQPage |
| Pricing Pages | Service, Offer, PriceSpecification |
| Blog Posts | Article, BlogPosting |
| Reviews Pages | Review, AggregateRating |
| Gallery Pages | ImageGallery, ImageObject |
| Booking Page | ReserveAction |

---

## PART 6: PAGE COUNT SUMMARY

| Section | Current Pages | Expansion Potential | Total Potential |
|---|---|---|---|
| Manchester Detailing | 11 | +8 (vehicle types) | 19 |
| Manchester Valeting | 10 | +5 (add-on services) | 15 |
| Manchester Areas | 14 | +10 (new areas) | 24 |
| Stockport Detailing | 6 | +4 (vehicle types) | 10 |
| Stockport Valeting | 7 | +3 (add-on services) | 10 |
| Stockport Areas | 8 | +7 (new areas) | 15 |
| Guides | 30 | +15 (brand guides) | 45 |
| Compare | 9 | +5 | 14 |
| FAQ | 6 | +4 (new topics) | 10 |
| Pricing | 3 | — | 3 |
| Blog | 17 | +40 (ongoing) | 57 |
| Brand/Conversion | 11 | — | 11 |
| **TOTAL** | **132** | **+101** | **233** |

---

## PART 7: CONTENT PRIORITISATION (Build Order)

### Phase 1: Foundation (Weeks 1-4) — 25 pages
1. Homepage (rewrite for entity optimisation)
2. /manchester + /stockport hub pages
3. /manchester/car-detailing + /manchester/car-valeting pillar pages
4. /stockport/car-detailing + /stockport/car-valeting pillar pages
5. Top 5 Manchester service sub-pages (ceramic coating, paint correction, full valet, mini valet, mobile valeting)
6. /compare/car-detailing-vs-car-valeting
7. /guides/what-is-car-detailing + /guides/what-is-car-valeting
8. /pricing hub + both pricing sub-pages
9. /booking page
10. /about-us (rewrite)

### Phase 2: Local Authority (Weeks 5-8) — 30 pages
1. All Manchester area pages (13 areas)
2. All Stockport area pages (7 areas)
3. Remaining Manchester service sub-pages
4. Stockport service sub-pages
5. Manchester + Stockport reviews pages
6. Location-specific pricing pages

### Phase 3: Topical Depth (Weeks 9-14) — 40 pages
1. All guide pages (29 guides)
2. All comparison pages (8 comparisons)
3. All FAQ pages (5 FAQ hubs)

### Phase 4: Long-Tail & Scale (Ongoing) — 40+ pages
1. Blog content (2-3 posts per week)
2. Vehicle-type specific pages
3. Brand-specific guides
4. Additional area pages
5. Seasonal content

---

*Document generated: February 2026*
*Architecture version: 1.0*
*Total mapped pages: 132 (expandable to 233+)*
