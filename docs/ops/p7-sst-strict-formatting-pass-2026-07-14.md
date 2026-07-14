# P7 Social Studies Strict Formatting Pass — 2026-07-14

## Purpose

Record the new strict learner-facing formatting direction for Primary 7 Social Studies content.

The founder clarified that the agent's job is not to invent topic content. The founder provides exact content; the agent restructures it into clean digestible app modules with a quiz/check for each module.

---

## Formatting rule now locked

Each strict-content module should follow this structure where relevant:

```txt
### Topic/Sub-topic Name

Term Being Defined:

Is ...

Types:

* short bullet

Type Name:

Is ...

Examples:

* short bullet

Uses:

* short bullet

Importances:

* short bullet

Advantages:

* short bullet

Disadvantages:

* short bullet
```

Implementation notes:

- Definitions must begin with `Is...` or `Are...`.
- High-utility UNEB keywords should be bolded in the learner view.
- Bullets should be short, punchy, single-sentence fragments.
- No conversational filler, curriculum meta-copy or summarised AI explanation should be added.
- The agent may reflow raw content into modules and checks, but should not add unsourced syllabus facts.

---

## App changes made in this pass

Updated:

- `app/lib/social-topics.ts`
- `app/components/SubtopicViewer.tsx`
- `app/app/globals.css`

### Content restructured

In `app/lib/social-topics.ts`, the first P7 SST topic remains:

- Topic: `location-of-africa`
- Subtopic: `location-position-africa`
- Title: `Location and position of Africa using lines of latitudes and longitudes`

The subtopic was rewritten into strict modules:

1. Meaning and Types of Location
2. Lines of Latitude
3. Major Lines of Latitude through Africa
4. Lines of Longitude
5. Longitude and Local Time
6. Absolute Position of Africa
7. Relative Position of Africa
8. Africa's Special Map Position
9. UNEB Exam Traps on Location

Each module now has a direct learner-facing structure and an inline `tryThis` check. The longitude time module also includes a worked example.

### Rendering support added

`SubtopicViewer.tsx` now renders strict content lines more cleanly:

- `###` lines display as compact in-module headings.
- `*` bullet lines display as proper strict bullet rows.
- Existing HTML keyword highlighting remains supported.

`globals.css` now includes a small strict-content styling block so the spacing and bullets are readable on mobile.

---

## Build verification

Command:

```bash
cd app && npm run build
```

Result:

```txt
✓ Compiled successfully
✓ Generating static pages (418/418)
```

---

## Next step

Founder should review the first subtopic formatting in the app.

If approved, continue the same process through the remaining subtopics in Topic 1:

1. World continents and their sizes
2. Water bodies that surround Africa
3. Regions that make up Africa
4. Countries in each region and their capital cities
5. Premium map answering

The founder will provide exact content for subsequent subtopics; the agent should only dissect and format it into digestible modules with checks.


---

## Update — World Continents and Their Sizes

Updated after founder provided exact content for Topic 1 / Subtopic 2:

- Subtopic ID: `world-continents-sizes`
- Title: `World continents and their sizes`
- File: `app/lib/social-topics.ts`

The raw content was restructured into 4 strict modules:

1. World Continents and Their Types
2. Uses, Importances, Advantages and Disadvantages of Continents
3. Continental Size Ranking
4. General Exam Summary Points

Each module has an inline check. The continental ranking module also has a worked example.

Build verification after this update:

```bash
cd app && npm run build
```

Result:

```txt
✓ Compiled successfully
✓ Generating static pages (418/418)
```

Next active subtopic:

- `water-bodies-africa`


---

## Update — Remaining Official Topic 1 Subtopics

Updated after founder provided exact content for the remaining official Topic 1 subtopics:

- `water-bodies-africa`
- `regions-africa`
- `countries-capitals-africa`

All three were rewritten in `app/lib/social-topics.ts` using the strict module format.

### Water Bodies That Surround Africa

Restructured into 5 modules:

1. Water Bodies That Surround Africa
2. Uses, Importances, Advantages and Disadvantages of Water Bodies
3. Marine Gateways and Channels
4. Uses and Importance of Marine Gateways
5. General Exam Summary Points

### Regions That Make Up Africa

Restructured into 3 modules:

1. Regions That Make Up Africa
2. Uses, Importances, Advantages and Disadvantages of Regions
3. General Exam Summary Points

### Countries in Each Region and Their Capital Cities

Restructured into 4 modules:

1. Countries in Each Region and Their Capital Cities
2. Uses, Importances, Advantages and Disadvantages of Capital Cities
3. Landlocked and Coastal Countries
4. General Exam Summary Points

### Status after this update

All five official NCDC subtopics under Topic 1 are now strict-formatted:

1. `location-position-africa`
2. `world-continents-sizes`
3. `water-bodies-africa`
4. `regions-africa`
5. `countries-capitals-africa`

The extra `premium-map-answering` subtopic remains present as application practice and needs a decision: strict-format it or move to Topic 2.

Build verification:

```bash
cd app && npm run build
```

Result:

```txt
✓ Compiled successfully
✓ Generating static pages (418/418)
```


---

## Update — Physical Features of Africa Official Subtopics

Updated after founder provided exact content for Topic 2, `Physical Features of Africa`.

Strict-formatted in `app/lib/social-topics.ts`:

1. `mountains-highlands` — Mountains and Highlands of Africa
2. `rivers-africa` — Rivers of Africa
3. `lakes-africa` — Lakes of Africa
4. `plateau-rift-coastal` — Plateau, Rift Valley and Coastal Plains
5. `formation-physical-features` — Forces and Processes that Form Physical Features

Each subtopic was restructured into digestible strict modules with inline checks.

The extra `premium-physical-features-application` subtopic remains present as application practice and needs a decision: strict-format it or move to Topic 3.

Build verification:

```bash
cd app && npm run build
```

Result:

```txt
✓ Compiled successfully
✓ Generating static pages (418/418)
```


---

## Update — Application Subtopics Strict-Formatted

After the founder noticed the application subtopics had been missed, the following extra practice/application subtopics were strict-formatted in `app/lib/social-topics.ts`:

1. `premium-map-answering`
2. `premium-physical-features-application`

### Premium Map Answering

Restructured into 3 modules:

1. Writing Accurate Map Location Answers
2. Worked Example: Locating Africa
3. Common Mistakes in Map Location Answers

### Premium Physical Features Application

Restructured into 3 modules:

1. Explaining Relief Features Clearly
2. Worked Examples: Importance and Problems
3. UNEB Traps in Physical Features

### Status after this update

- Topic 1 is strict-formatted across official subtopics and application practice.
- Topic 2 is strict-formatted across official subtopics and application practice.
- Next active topic: `climate-of-africa`.

Build verification:

```bash
cd app && npm run build
```

Result:

```txt
✓ Compiled successfully
✓ Generating static pages (418/418)
```


---

## Update — Climate of Africa Strict-Formatted

Updated after founder provided exact content for Topic 3, `Climate of Africa`.

Strict-formatted in `app/lib/social-topics.ts`:

1. `climatic-regions` — Climatic Regions of Africa
2. `characteristics-climate` — Characteristics of Different Climatic Regions
3. `factors-climate` — Factors that Influence Climate of Africa
4. `climate-human-activities` — Influence of Climate on Human Activities
5. `human-activities-climate` — Influence of Human Activities on Climate
6. `premium-climate-interpretation` — Premium Exam Practice: Climate Interpretation

Each subtopic was restructured into digestible strict modules with inline checks.

Status after this update:

- Topic 1 is strict-formatted.
- Topic 2 is strict-formatted.
- Topic 3 is strict-formatted.
- Next active topic: `vegetation-of-africa`.

Build verification:

```bash
cd app && npm run build
```

Result:

```txt
✓ Compiled successfully
✓ Generating static pages (418/418)
```


---

## Update — Vegetation of Africa Strict-Formatted and People Subtopic Structure Fixed

Updated after founder provided exact content for Topic 4, `Vegetation of Africa`.

Strict-formatted in `app/lib/social-topics.ts`:

1. `vegetation-types` — Vegetation Types of Africa
2. `factors-vegetation` — Factors that Influence Vegetation Distribution
3. `importance-vegetation` — Importance of Vegetation
4. `game-parks-animals` — Game Parks and Animals
5. `population-vegetation` — Population and Vegetation
6. `premium-vegetation-application` — Premium Exam Practice: Vegetation Reasoning

Structural correction completed:

- Removed People of Africa subtopics from `vegetation-of-africa`.
- Restored them under `people-ethnic-groups-settlement`.
- People topic now has the expected subtopics:
  - `origin-ethnic-groups`
  - `movements-ethnic-groups`
  - `settlement-tribes`
  - `problems-effects-migration`
  - `premium-people-settlement-reasoning`

Status after this update:

- Topics 1–4 are strict-formatted.
- Next active topic: `people-ethnic-groups-settlement`.

Build verification:

```bash
cd app && npm run build
```

Result:

```txt
✓ Compiled successfully
✓ Generating static pages (417/417)
```
