# P7 SST Topic 3 Curriculum Intelligence Audit — 2026-07-15

## Topic

```txt
Class: P7
Subject: Social Studies
Theme: Living Together in Africa
Topic 3: Climate of Africa
App ID: climate-of-africa
Official periods: 22
```

## Purpose

Topic 3 is now being restarted under the same Curriculum Intelligence direction used for Topics 1 and 2.

Correct process:

```txt
Official source → evidence notes → module blueprint → learner rewrite → audit → build → documentation
```

---

## Source used

Existing extract:

```txt
docs/ncdc-extracts/p7-sst-topic-03-climate-of-africa.md
```

New curriculum intelligence files:

```txt
content/curriculum-intelligence/p7-sst/topic-03-climate-of-africa/evidence-notes.json
content/curriculum-intelligence/p7-sst/topic-03-climate-of-africa/module-blueprint.json
content/curriculum-intelligence/p7-sst/topic-03-climate-of-africa/qa-checklist.json
```

---

## What NCDC requires

Official subtopics:

1. Climatic regions of Africa.
2. Characteristics of different climatic regions.
3. Factors that influence climate of Africa.
4. Influence of climate on human activities.
5. Influence of human activities on climate.

Climatic regions listed:

- Mediterranean,
- Temperate,
- Desert (hot and dry),
- Tropical,
- Equatorial,
- Mountain/Montane.

Elements of weather/climate listed:

- wind,
- rainfall,
- sunshine,
- temperature,
- humidity.

Factors influencing climate listed:

- nearness to water bodies,
- winds,
- land mass,
- altitude/relief,
- human activities,
- vegetation.

Assessment requires learners to:

- identify climatic regions and their characteristics,
- identify factors that influence climate,
- explain how climate influences human activities,
- describe how human activities affect climate,
- name hot deserts,
- identify seasons in Mediterranean climate,
- state problems in hot deserts,
- name countries experiencing different climate types.

---

## Current app issue

The current app structure is broadly correct, but several modules use the old mechanical pattern:

```txt
Uses, Importances, Advantages and Disadvantages...
```

For climate, this easily creates filler. The rewrite should keep:

- climate regions,
- characteristics,
- factors,
- human activities,
- human influence on climate,
- assessment practice.

Each subtopic should be clear and separate.

---

## Rewrite order

Two subtopics can be handled together if quality remains high:

1. `climatic-regions`
2. `characteristics-climate`
3. `factors-climate`
4. `climate-human-activities`
5. `human-activities-climate`
6. `premium-climate-interpretation`

---

## First batch target

```txt
climatic-regions
characteristics-climate
```

Rules:

- Teach names of the six NCDC climatic regions.
- Teach weather/climate elements briefly.
- Keep characteristics separate: temperature/rainfall/seasons.
- Avoid generic uses/advantages filler.

---

## Current status

Evidence notes created. Blueprint created. QA checklist created.

Next step:

```txt
Rewrite climatic-regions and characteristics-climate in app/lib/social-topics.ts.
```

---

## Update — First two Topic 3 subtopics rewritten together

Updated in `app/lib/social-topics.ts`:

```txt
Topic: climate-of-africa
Subtopics:
- climatic-regions
- characteristics-climate
```

### Climatic regions new structure

1. `weather-climate-elements` — Weather, Climate and Climate Elements
2. `six-climatic-regions-africa` — The Climatic Regions of Africa
3. `climate-region-map-practice` — Map Practice: Locating Climatic Regions

### Characteristics new structure

1. `equatorial-tropical-characteristics` — Equatorial and Tropical Climate Characteristics
2. `desert-mediterranean-characteristics` — Desert and Mediterranean Climate Characteristics
3. `temperate-mountain-characteristics` — Temperate and Mountain Climate Characteristics

Source basis:

- NCDC Topic 3 extract.
- NCDC lists the climatic regions: Mediterranean, Temperate, Desert, Tropical, Equatorial and Mountain/Montane.
- NCDC lists weather/climate elements: wind, rainfall, sunshine, temperature and humidity.
- NCDC assessment asks learners to identify climatic regions and their characteristics, name hot deserts, and identify Mediterranean seasons.

Content decision:

- Kept climate region names separate from characteristics.
- Removed old mechanical uses/importances/advantages/disadvantages filler.
- Included country/location examples only broadly and marked them for atlas/teacher review before premium-final status.
- Every module has an inline check.

Verification:

```bash
node scripts/audit-curriculum-intelligence.js
cd app && npm run build
```

Results:

```txt
Audit: 0 failures / 40 warnings
Build: ✓ Generating static pages (413/413)
```

Next Topic 3 rewrite target:

```txt
factors-climate
climate-human-activities
```

Rewrite rule: keep NCDC factor list exact, then teach how climate influences human activities using the NCDC activity list.

---

## Update — Subtopics 3 and 4 rewritten together

Updated in `app/lib/social-topics.ts`:

```txt
Topic: climate-of-africa
Subtopics:
- factors-climate
- climate-human-activities
```

### Factors subtopic new structure

1. `climate-factors-ncdc-list` — Main Factors that Influence Climate
2. `water-bodies-winds-landmass` — Water Bodies, Winds and Land Mass
3. `altitude-relief-vegetation-human-activities` — Altitude, Relief, Vegetation and Human Activities
4. `factor-answer-practice` — Answering Factor Questions

### Climate influence on human activities new structure

1. `climate-controls-activities` — How Climate Influences Human Activities
2. `desert-mediterranean-temperate-activities` — Activities in Desert, Mediterranean and Temperate Climates
3. `equatorial-tropical-mountain-activities` — Activities in Equatorial, Tropical and Mountain Climates
4. `climate-activity-answer-practice` — Answering Climate and Activity Questions

Source basis:

- NCDC Topic 3 extract.
- NCDC factor list: nearness to water bodies, winds, land mass, altitude/relief, human activities and vegetation.
- NCDC human activity list by climate type: hot deserts; Mediterranean and temperate; equatorial and tropical; mountain.

Content decision:

- Kept the NCDC factor list exact.
- Taught factor explanations through rainfall, temperature, humidity and altitude rather than broad filler headings.
- Taught human activities by climate type using NCDC's activity list.
- Every module has an inline check.

Verification:

```bash
node scripts/audit-curriculum-intelligence.js
cd app && npm run build
```

Results:

```txt
Audit: 0 failures / 40 warnings
Build: ✓ Generating static pages (413/413)
```

Next Topic 3 rewrite target:

```txt
human-activities-climate
premium-climate-interpretation
```

Rewrite rule: teach harmful human activities and climate protection clearly, then align practice to NCDC assessment competences.

---

## Update — Final two Topic 3 subtopics rewritten together

Updated in `app/lib/social-topics.ts`:

```txt
Topic: climate-of-africa
Subtopics:
- human-activities-climate
- premium-climate-interpretation
```

### Human activities influence climate new structure

1. `human-activities-that-harm-climate` — Human Activities that Harm Climate
2. `effects-of-human-activities-on-climate` — Effects of Human Activities on Climate
3. `protecting-climate-environment` — Protecting Climate and the Environment
4. `human-influence-answer-practice` — Answering Human Influence Questions

### Application practice new structure

1. `climate-question-commands` — Step 1: Read the Climate Question
2. `climate-region-characteristic-practice` — Step 2: Practise Climate Regions and Characteristics
3. `climate-factors-activities-practice` — Step 3: Practise Factors and Human Activities
4. `climate-protection-practice` — Step 4: Practise Climate Protection Answers

Content decision:

- Human influence content now separates harmful activities, effects and protective actions.
- Application practice now aligns to NCDC assessment competences: climate regions, characteristics, factors, influence on activities, human influence on climate, hot deserts, Mediterranean seasons and desert problems.
- Every module has an inline check.

Verification:

```bash
node scripts/audit-curriculum-intelligence.js
cd app && npm run build
```

Results:

```txt
Audit: 0 failures / 40 warnings
Build: ✓ Generating static pages (413/413)
```

Topic 3 status:

```txt
All Topic 3 learner-facing subtopics have now been rewritten under the curriculum-intelligence direction.
```
