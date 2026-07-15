# P7 SST Topic 1 Curriculum Intelligence Audit — 2026-07-15

## Topic

```txt
Class: P7
Subject: Social Studies
Theme: Living Together in Africa
Topic 1: Location of Africa on the Map of the World
App ID: location-of-africa
Official periods: 8
```

## Why this audit started

Founder review flagged that even Topic 1 still feels unfinished/misaligned despite a prior strict-formatting pass. Specific concerns:

- too much spacing and one-line fragments,
- some content feels thin in places,
- some content feels like filler rather than the right full information,
- repeated content passes are frustrating unless the source truth is captured first.

This audit starts Topic 1 again under the new Curriculum Intelligence System.

---

## Source used in this audit

Primary source:

```txt
NCDC Primary Seven Set One Curriculum PDF
Topic 1 pages: PDF pages 315–317 / printed pages 294–296
```

The official PDF page extract was checked directly this session and cross-checked against the existing in-repo extract:

```txt
docs/ncdc-extracts/p7-sst-topic-01-location-of-africa.md
```

New evidence files:

```txt
content/curriculum-intelligence/p7-sst/topic-01-location-of-africa/evidence-notes.json
content/curriculum-intelligence/p7-sst/topic-01-location-of-africa/module-blueprint.json
content/curriculum-intelligence/p7-sst/topic-01-location-of-africa/qa-checklist.json
```

---

## What the official NCDC pages require

### Learning outcomes

The learner:

- appreciates Africa as a continent and its position on the world map,
- demonstrates the usage of lines of latitudes and longitudes to locate Africa and its member countries.

### Language competences

The learner correctly uses:

- latitude,
- longitude,
- position.

The learner also reads, spells and writes words/sentences related to:

- African regions,
- countries in each region,
- capital cities.

### Official content areas

NCDC lists:

1. Location and position of Africa using major lines of latitudes and longitudes.
2. World continents in order of their sizes:
   - Asia,
   - Africa,
   - North America,
   - South America,
   - Antarctic/Antarctica,
   - Europe,
   - Australia.
3. Oceans:
   - Atlantic,
   - Pacific,
   - Arctic,
   - Indian.
4. Seas:
   - Mediterranean,
   - Red Sea.
5. Regions:
   - West Africa,
   - East Africa,
   - Northern Africa,
   - Central Africa,
   - Southern Africa,
   - Horn of Africa.
6. Countries in each region.
7. Capital cities of different countries in Africa.
8. Islands which are part of Africa.

### Suggested activities

NCDC suggests:

- locating Africa on the world map,
- drawing the map of the world,
- identifying major lines of latitude and longitude that pass through Africa,
- naming continents,
- naming oceans and seas that surround Africa,
- stating directions of other continents, oceans and seas from Africa,
- locating African countries using latitudes and longitudes region by region,
- listing countries in each region and their capital cities,
- listing islands which are part of Africa.

### Teacher guidance

NCDC tells the teacher to:

- use a globe,
- help learners locate Africa and their own country,
- show the difference between latitude and longitude,
- organise group comparison of latitude and longitude,
- let learners draw a diagram showing latitude and longitude,
- identify the Equator and Prime Meridian,
- explain how latitude and longitude identify locations on maps.

### Assessment competences

The learner should be able to:

- draw the map of Africa showing regions, latitude lines and longitude lines,
- name countries and capital cities,
- name islands which are part of Africa,
- identify compass directions of oceans, seas and other continents from Africa.

---

## Current app structure status

The app currently has the correct high-level Topic 1 subtopics:

1. `location-position-africa`
2. `world-continents-sizes`
3. `water-bodies-africa`
4. `regions-africa`
5. `countries-capitals-africa`
6. `premium-map-answering` as application practice

The structure is not the main problem. The problem is **source fidelity and fullness**.

---

## Content problems found

### 1. Unsupported or weakly supported extension content

The current app includes some modules that are not clearly supported by the extracted NCDC Topic 1 pages:

| Current module | Issue |
|---|---|
| `longitude-time-calculation-rules` | Longitude time calculation is not in the extracted Topic 1 pages. Needs source or removal/quarantine as extension. |
| `continents-uses-importance` | NCDC asks for continents and size order, not uses/advantages/disadvantages of continents. |
| `water-bodies-uses-importance` | NCDC asks for water bodies and directions. Uses/importance needs source and should not crowd out map skill. |
| `marine-gateways-channels` | Not in extracted Topic 1 pages. Needs source or removal. |
| `marine-gateways-uses-importance` | Not in extracted Topic 1 pages. Needs source or removal. |
| `regions-uses-importance` | NCDC asks for identifying regions, not broad uses/importance of regions. |
| `capital-cities-uses-importance` | NCDC asks for naming/listing capital cities; uses/importance needs source and may be filler. |
| `landlocked-coastal-countries` | May be useful, but not explicit in extracted Topic 1 pages. Needs source or extension label. |

### 2. Missing verified support for the fullest required content

The official NCDC pages require:

- countries in each region,
- capital cities,
- islands which are part of Africa.

But the extracted pages do not provide the full country/capital table or island list. That means we need an additional verified source before finalising those modules.

Possible acceptable sources:

- approved NCDC learner book,
- approved teacher guide/resource,
- official atlas/reference used in Ugandan schools,
- verified current official country/capital reference cross-checked against the curriculum.

### 3. Reading quality issue

The current strict-format style sometimes creates many short lines with too much spacing. The rewrite should keep direct teaching, but make modules read more smoothly.

A better module should use:

```txt
Short paragraph definition
Bullet list where listing matters
Map/practice activity
Inline check
```

Not every line needs to be isolated.

---

## Rewrite blueprint

The next Topic 1 rewrite should follow this source-backed blueprint.

### Subtopic 1 — Location and position of Africa using major lines

Recommended modules:

1. Africa on the World Map
2. Latitude, Longitude and Position
3. Equator and Prime Meridian
4. Locating Africa Using Compass Directions and Lines
5. Map Drawing Activity: Africa, Regions and Lines

### Subtopic 2 — World continents and their sizes

Recommended modules:

1. Continents of the World
2. Continents in Order of Size

### Subtopic 3 — Water bodies that surround Africa

Recommended modules:

1. Oceans and Seas Around Africa
2. Compass Directions from Africa

### Subtopic 4 — Regions that make up Africa

Recommended modules:

1. Regions of Africa
2. Locating African Regions on a Map

### Subtopic 5 — Countries in each region and their capital cities

Recommended modules:

1. Countries and Capital Cities by Region
2. Islands Which Are Part of Africa

This gives about 13 core modules plus one application/practice module. That is enough if each module is full and source-backed.

---

## Current gate status

| Gate | Status |
|---|---|
| Source gate | Partial pass — NCDC pages extracted, but countries/capitals/islands need extra source. |
| Relevance gate | Needs review — current app has unsupported extension modules. |
| Depth gate | Needs rewrite — official areas represented, but not cleanly/full-source-backed. |
| Language gate | Needs rewrite — reduce over-spaced one-line fragments. |
| Context gate | Needs extra source for country/capital/island facts. |
| Assessment gate | Partial pass — inline checks exist but must align to official assessment competences. |
| Traceability gate | Needs rewrite — current app modules do not carry sourceRefs. |

---

## Decision

Do not polish the current Topic 1 blindly.

Instead:

1. Finish source collection for country/capital and island lists.
2. Rewrite Topic 1 from the blueprint, one subtopic at a time.
3. Remove or quarantine unsupported filler modules.
4. Run the audit after each subtopic.
5. Build after each meaningful app change.

---

## Next immediate task

Find and verify a source for:

- countries in each African region,
- capital cities,
- islands which are part of Africa,
- optional major latitude lines through Africa if keeping Tropic of Cancer/Capricorn details.

Only after that should we rewrite `location-of-africa` in `app/lib/social-topics.ts`.

---

## Update — Candidate countries/capitals/islands reference pack created

A candidate reference pack has now been created:

```txt
content/curriculum-intelligence/p7-sst/topic-01-location-of-africa/reference-countries-capitals-islands.json
```

Purpose:

- support the NCDC requirement to list countries in each African region,
- support the NCDC requirement to list capital cities,
- support the NCDC requirement to name islands which are part of Africa.

Source logic:

- NCDC provides the region names but not the full country/capital table.
- UN M49 provides a current statistical baseline for African subregions.
- NCDC separately names the Horn of Africa, so the reference pack separates Djibouti, Eritrea, Ethiopia and Somalia into Horn of Africa.
- Current capital references are used only as a candidate cross-check because some school-answer conventions may differ from current political changes.

Important review issues before publishing:

1. Confirm whether P7 should memorise all 54 sovereign African countries or a shorter representative list by region.
2. Confirm the school-answer convention for Equatorial Guinea after the 2026 capital change from Malabo to Ciudad de la Paz.
3. Confirm the answer convention for South Africa: Pretoria only, or Pretoria/Cape Town/Bloemfontein.
4. Confirm whether East Africa should follow UN Eastern Africa minus Horn, or a narrower school/EAC grouping.
5. Confirm whether the island module should teach the six independent African island countries only.

Status:

```txt
candidate-reference-pack-not-yet-learner-approved
```

This means we can use it to plan the rewrite, but not yet as final learner-facing content without review.

---

## Update — Subtopic 1 rewritten from source-backed blueprint

Updated in `app/lib/social-topics.ts`:

```txt
Topic: location-of-africa
Subtopic: location-position-africa
```

Old structure:

- 9 modules.
- Included unsupported/extension content such as longitude and local time calculation.
- Used many strict one-line fragments that created awkward spacing.

New structure:

1. `africa-on-world-map` — Africa on the World Map
2. `latitude-longitude-position-keywords` — Latitude, Longitude and Position
3. `equator-tropics-prime-meridian-africa` — Equator, Tropics and Prime Meridian
4. `locating-africa-compass-directions` — Locating Africa Using Compass Directions
5. `map-drawing-activity-africa-lines` — Map Drawing Activity: Africa, Regions and Lines

Source basis:

- NCDC Topic 1 pages 315–317 / printed pages 294–296.
- Britannica Africa reference for the Equator, Tropics and Prime Meridian map-line support.

Content decision:

- Removed longitude/local-time calculation from this subtopic because it is not supported by the extracted NCDC Topic 1 pages.
- Replaced one-line strict fragments with fuller but still short P7 learner-facing explanations.
- Kept every module with an inline check.
- Aligned the last module to NCDC's assessment expectation that learners draw Africa showing regions, latitude lines and longitude lines.

Verification:

```bash
node scripts/audit-curriculum-intelligence.js
cd app && npm run build
```

Results:

```txt
Audit: 0 failures / 28 warnings
Build: ✓ Generating static pages (413/413)
```

Next Topic 1 rewrite target:

```txt
world-continents-sizes
```

Rewrite rule: keep only source-backed continent names and size order unless another approved source justifies extra content.
