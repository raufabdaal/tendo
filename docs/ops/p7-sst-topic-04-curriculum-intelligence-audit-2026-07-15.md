# P7 SST Topic 4 Curriculum Intelligence Audit — 2026-07-15

## Topic

```txt
Class: P7
Subject: Social Studies
Theme: Living Together in Africa
Topic 4: Vegetation of Africa
App ID: vegetation-of-africa
Official periods: 18
```

## Purpose

Topic 4 is now being restarted under the Curriculum Intelligence direction.

Correct process:

```txt
Official source → evidence notes → module blueprint → learner rewrite → audit → build → documentation
```

---

## Source used

Existing extract:

```txt
docs/ncdc-extracts/p7-sst-topic-04-vegetation-of-africa.md
```

New curriculum intelligence files:

```txt
content/curriculum-intelligence/p7-sst/topic-04-vegetation-of-africa/evidence-notes.json
content/curriculum-intelligence/p7-sst/topic-04-vegetation-of-africa/module-blueprint.json
content/curriculum-intelligence/p7-sst/topic-04-vegetation-of-africa/qa-checklist.json
```

---

## What NCDC requires

Official content areas:

1. Location and names of vegetation types of Africa.
2. Factors that influence vegetation distribution in Africa.
3. Importance of vegetation to people and animals.
4. Importance of game parks.
5. Animals found in different vegetation zones.
6. Reasons why animals live in different vegetation zones.
7. Population distribution in relation to vegetation.
8. Reasons for differences in population distribution in different vegetation zones.
9. Effects of population on vegetation.

Vegetation types listed:

- Equatorial forests,
- Mangrove forests,
- Montane vegetation,
- Temperate grasslands / velds,
- Savannah vegetation,
- Mediterranean vegetation.

Factors listed:

- climate,
- types of soil,
- human activities,
- relief/altitude.

Assessment expects learners to:

- locate and name vegetation types,
- describe factors influencing vegetation,
- explain how each factor influences vegetation,
- explain the importance of vegetation,
- identify animals in different zones,
- explain why animals live in different zones,
- relate population distribution to vegetation,
- explain reasons for differences,
- outline effects of population on vegetation.

---

## Current app issue

The current app has the right broad structure, but still includes mechanical filler:

```txt
Uses, Importances, Advantages and Disadvantages...
```

The rewrite should keep:

- vegetation types,
- factors,
- importance,
- game parks/animals,
- population and effects,
- application practice.

---

## First batch target

```txt
vegetation-types
factors-vegetation
```

Rules:

- Teach NCDC vegetation types exactly.
- Teach factors exactly: climate, soil, human activities, relief/altitude.
- Explain how each factor influences vegetation.
- Remove broad filler.

---

## Current status

Evidence notes created. Blueprint created. QA checklist created.

Next step:

```txt
Rewrite vegetation-types and factors-vegetation in app/lib/social-topics.ts.
```

---

## Update — First two Topic 4 subtopics rewritten together

Updated in `app/lib/social-topics.ts`:

```txt
Topic: vegetation-of-africa
Subtopics:
- vegetation-types
- factors-vegetation
```

### Vegetation types new structure

1. `vegetation-meaning-types` — Meaning and Types of Vegetation
2. `forest-vegetation-types` — Forest Vegetation Types
3. `grassland-shrub-vegetation-types` — Grassland and Shrub Vegetation Types
4. `vegetation-map-practice` — Map Practice: Locating Vegetation Types

### Factors subtopic new structure

1. `vegetation-factors-ncdc-list` — Main Factors that Influence Vegetation Distribution
2. `climate-soil-relief-vegetation` — Climate, Soil and Relief/Altitude
3. `human-activities-vegetation` — Human Activities and Vegetation
4. `vegetation-factor-answer-practice` — Answering Vegetation Factor Questions

Source basis:

- NCDC Topic 4 extract.
- NCDC vegetation type list: Equatorial forests, Mangrove forests, Montane vegetation, Temperate grasslands/velds, Savannah vegetation and Mediterranean vegetation.
- NCDC factor list: climate, types of soil, human activities and relief/altitude.

Content decision:

- Kept NCDC vegetation type and factor lists exact.
- Split forest vegetation from grassland/shrub vegetation for clarity.
- Explained how each factor affects vegetation instead of only listing factors.
- Removed mechanical uses/importances/advantages/disadvantages filler.
- Every module has an inline check.

Verification:

```bash
node scripts/audit-curriculum-intelligence.js
cd app && npm run build
```

Results:

```txt
Audit: 0 failures / 46 warnings
Build: ✓ Generating static pages (413/413)
```

Next Topic 4 rewrite target:

```txt
importance-vegetation

game-parks-animals
```

Rewrite rule: teach importance of vegetation to people/animals, importance of game parks, caring for animals, animals in vegetation zones and reasons animals live in different zones.

---

## Update — Subtopics 3 and 4 rewritten together

Updated in `app/lib/social-topics.ts`:

```txt
Topic: vegetation-of-africa
Subtopics:
- importance-vegetation
- game-parks-animals
```

### Importance subtopic new structure

1. `vegetation-importance-people` — Importance of Vegetation to People
2. `vegetation-importance-animals-environment` — Importance of Vegetation to Animals and the Environment
3. `caring-for-vegetation` — Caring for Vegetation

### Game parks and animals new structure

1. `importance-of-game-parks` — Importance of Game Parks
2. `animals-in-vegetation-zones` — Animals in Different Vegetation Zones
3. `why-animals-live-in-different-zones` — Why Animals Live in Different Vegetation Zones
4. `caring-for-animals-birds` — Caring for Animals and Birds

Source basis:

- NCDC Topic 4 extract.
- NCDC requires importance of vegetation to people and animals, importance of game parks, animals in different vegetation zones, reasons animals live in different zones, and caring for animals/birds.

Content decision:

- Separated importance to people from importance to animals/environment.
- Game parks now directly teaches protection, tourism, jobs/income, habitat protection and care through wardens/rangers.
- Animal examples are school-first and flagged for teacher review before premium-final status.
- Removed broad uses/importances/advantages/disadvantages filler.
- Every module has an inline check.

Verification:

```bash
node scripts/audit-curriculum-intelligence.js
cd app && npm run build
```

Results:

```txt
Audit: 0 failures / 46 warnings
Build: ✓ Generating static pages (413/413)
```

Next Topic 4 rewrite target:

```txt
population-vegetation
premium-vegetation-application
```

Rewrite rule: teach population distribution in relation to vegetation, reasons for differences, effects of population on vegetation, then application practice aligned to NCDC assessment competences.

---

## Update — Final two Topic 4 subtopics rewritten together

Updated in `app/lib/social-topics.ts`:

```txt
Topic: vegetation-of-africa
Subtopics:
- population-vegetation
- premium-vegetation-application
```

### Population and vegetation new structure

1. `population-distribution-and-vegetation` — Population Distribution and Vegetation
2. `reasons-population-differs-vegetation-zones` — Why Population Differs in Vegetation Zones
3. `effects-of-big-population-on-vegetation` — Effects of Big Population on Vegetation
4. `protecting-vegetation-from-population-pressure` — Protecting Vegetation from Population Pressure

### Application practice new structure

1. `vegetation-question-commands` — Step 1: Read the Vegetation Question
2. `vegetation-types-factors-practice` — Step 2: Practise Vegetation Types and Factors
3. `animals-game-parks-practice` — Step 3: Practise Animals and Game Parks
4. `population-vegetation-practice` — Step 4: Practise Population and Vegetation Answers

Content decision:

- Population content now clearly separates distribution, reasons for differences, effects of big population and protection solutions.
- Application practice now aligns to NCDC assessment competences: vegetation types, factors, importance, animals/game parks and population effects.
- Every module has an inline check.

Verification:

```bash
node scripts/audit-curriculum-intelligence.js
cd app && npm run build
```

Results:

```txt
Audit: 0 failures / 46 warnings
Build: ✓ Generating static pages (413/413)
```

Topic 4 status:

```txt
All Topic 4 learner-facing subtopics have now been rewritten under the curriculum-intelligence direction.
```
