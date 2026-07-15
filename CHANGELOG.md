# CHANGELOG — Tendo

## v1.8.103 — 2026-07-15 — Screened rich source content method documented

**Session theme:** Founder review found the vertical chain pilot is clearer but can still feel too dry/shallow for children. The content process now accepts rich school-style source content, but screens it before publishing.

### Added
- `docs/spec/screened-source-content-method-2026-07-15.md`

### Updated
- `docs/spec/content-mindset-lock-2026-07-15.md`
- `docs/spec/learner-content-three-layer-standard-2026-07-15.md`
- `docs/spec/vertical-structural-chain-content-pilot-2026-07-15.md`

### New rule
- Do not blindly paste partner/textbook/founder content.
- Do not over-compress learner content into dry labels.
- Screen rich source content using labels: `KEEP_CORE`, `KEEP_EXAM_BOOSTER`, `KEEP_PRACTICE`, `REWRITE_SIMPLER`, `SOURCE_CHECK`, `MOVE_EXTENSION`, `REMOVE`.
- Build learner modules with friendly explanation + structured answer chain + exam booster + practice.

---
## v1.8.102 — 2026-07-15 — Topic 1 vertical structural chain learner-layout pilot

**Session theme:** Improve learner-facing readability after founder noticed paragraph-style content may still be too hard for primary learners.

### Added
- `docs/spec/vertical-structural-chain-content-pilot-2026-07-15.md` — documents the new learner-facing presentation rule.

### Changed
- Converted all `location-of-africa` learner modules in `app/lib/social-topics.ts` to vertical structural chain style.
- Applied to all Topic 1 subtopics:
  - `location-position-africa`
  - `world-continents-sizes`
  - `water-bodies-africa`
  - `regions-africa`
  - `countries-capitals-africa`
  - `premium-map-answering`
- Learner content now uses short labelled chains such as `Meaning`, `Map tools`, `Example`, `Exam point`, `Step`, `Region check`, etc.

### Principle
- Evidence notes and blueprints stay full.
- Learner screen becomes short, labelled, scannable and exam-usable.
- This is not a return to blind strict headings; labels must match the NCDC subtopic.

### Verified
- `node scripts/audit-curriculum-intelligence.js` → 0 failures.
- `cd app && npm install && npm run build` → `✓ Generating static pages (413/413)`.

---
## v1.8.101 — 2026-07-15 — Topic 5 audit started and first two people/ethnic-group subtopics rewritten

**Session theme:** Start P7 SST Topic 5, the previously thin People of Africa topic, under curriculum intelligence with extra sensitivity around ethnic/cultural wording.

### Added
- `content/curriculum-intelligence/p7-sst/topic-05-people-ethnic-groups-settlement/evidence-notes.json`
- `content/curriculum-intelligence/p7-sst/topic-05-people-ethnic-groups-settlement/module-blueprint.json`
- `content/curriculum-intelligence/p7-sst/topic-05-people-ethnic-groups-settlement/qa-checklist.json`
- `docs/ops/p7-sst-topic-05-curriculum-intelligence-audit-2026-07-15.md`

### Changed
- Updated `content/curriculum-intelligence/p7-sst/source-registry.json` and `manifest.json` for Topic 5.
- Rewrote `origin-ethnic-groups` into 3 modules: ethnic group meaning/respect, basis of ethnic identity, and careful handling of major group terms.
- Rewrote `movements-ethnic-groups` into 3 modules: migration/origin/settlement, tracing movements on a map, and ancient/current migration.
- Used respectful learner-facing wording because the source includes older/sensitive terminology.

### Verified
- `node scripts/audit-curriculum-intelligence.js` → 0 failures / 46 warnings.
- `cd app && npm run build` → `✓ Generating static pages (413/413)`.

### Next
- Rewrite `settlement-tribes` and `problems-effects-migration` together if quality remains high.

---
## v1.8.100 — 2026-07-15 — Topic 4 final two subtopics rewritten

**Session theme:** Complete P7 SST Topic 4 learner-flow rewrite under curriculum intelligence.

### Changed
- Rewrote `population-vegetation` with 4 modules:
  1. `population-distribution-and-vegetation`
  2. `reasons-population-differs-vegetation-zones`
  3. `effects-of-big-population-on-vegetation`
  4. `protecting-vegetation-from-population-pressure`
- Rewrote `premium-vegetation-application` with 4 modules:
  1. `vegetation-question-commands`
  2. `vegetation-types-factors-practice`
  3. `animals-game-parks-practice`
  4. `population-vegetation-practice`
- Population content now separates distribution, reasons, effects and protection solutions.
- Application practice now aligns to NCDC vegetation assessment competences.

### Verified
- `node scripts/audit-curriculum-intelligence.js` → 0 failures / 46 warnings.
- `cd app && npm run build` → `✓ Generating static pages (413/413)`.

### Topic 4 status
- All Topic 4 learner-facing subtopics have now been rewritten under the curriculum-intelligence direction.

---
## v1.8.99 — 2026-07-15 — Topic 4 Importance and Game Parks subtopics rewritten

**Session theme:** Continue P7 SST Topic 4 Vegetation of Africa by rewriting two subtopics together while preserving source alignment.

### Changed
- Rewrote `importance-vegetation` with 3 modules:
  1. `vegetation-importance-people`
  2. `vegetation-importance-animals-environment`
  3. `caring-for-vegetation`
- Rewrote `game-parks-animals` with 4 modules:
  1. `importance-of-game-parks`
  2. `animals-in-vegetation-zones`
  3. `why-animals-live-in-different-zones`
  4. `caring-for-animals-birds`
- Removed broad uses/importances/advantages/disadvantages filler.
- Kept content aligned to NCDC requirements: importance of vegetation, game parks, animals in zones, reasons animals live in zones, and caring for animals/birds.

### Verified
- `node scripts/audit-curriculum-intelligence.js` → 0 failures / 46 warnings.
- `cd app && npm run build` → `✓ Generating static pages (413/413)`.

### Next
- Rewrite `population-vegetation` and `premium-vegetation-application` together if quality remains high.

---
## v1.8.98 — 2026-07-15 — Topic 4 audit started and first two vegetation subtopics rewritten

**Session theme:** Start P7 SST Topic 4 Vegetation of Africa under curriculum intelligence and rewrite two subtopics together.

### Added
- `content/curriculum-intelligence/p7-sst/topic-04-vegetation-of-africa/evidence-notes.json`
- `content/curriculum-intelligence/p7-sst/topic-04-vegetation-of-africa/module-blueprint.json`
- `content/curriculum-intelligence/p7-sst/topic-04-vegetation-of-africa/qa-checklist.json`
- `docs/ops/p7-sst-topic-04-curriculum-intelligence-audit-2026-07-15.md`

### Changed
- Updated `content/curriculum-intelligence/p7-sst/source-registry.json` and `manifest.json` for Topic 4.
- Rewrote `vegetation-types` into 4 modules: meaning/types, forest vegetation, grassland/shrub vegetation and map practice.
- Rewrote `factors-vegetation` into 4 modules: NCDC factor list, climate/soil/relief, human activities and factor-answer practice.
- Removed mechanical uses/importances/advantages/disadvantages filler.

### Verified
- `node scripts/audit-curriculum-intelligence.js` → 0 failures / 46 warnings.
- `cd app && npm run build` → `✓ Generating static pages (413/413)`.

### Next
- Rewrite `importance-vegetation` and `game-parks-animals` together if quality remains high.

---
## v1.8.97 — 2026-07-15 — Topic 3 final two subtopics rewritten

**Session theme:** Complete P7 SST Topic 3 learner-flow rewrite under curriculum intelligence.

### Changed
- Rewrote `human-activities-climate` with 4 modules:
  1. `human-activities-that-harm-climate`
  2. `effects-of-human-activities-on-climate`
  3. `protecting-climate-environment`
  4. `human-influence-answer-practice`
- Rewrote `premium-climate-interpretation` with 4 modules:
  1. `climate-question-commands`
  2. `climate-region-characteristic-practice`
  3. `climate-factors-activities-practice`
  4. `climate-protection-practice`
- Human influence content now separates harmful activities, effects and protective actions.
- Application practice now aligns to NCDC climate assessment competences.

### Verified
- `node scripts/audit-curriculum-intelligence.js` → 0 failures / 40 warnings.
- `cd app && npm run build` → `✓ Generating static pages (413/413)`.

### Topic 3 status
- All Topic 3 learner-facing subtopics have now been rewritten under the curriculum-intelligence direction.

---
## v1.8.96 — 2026-07-15 — Topic 3 Factors and Human Activities rewritten

**Session theme:** Continue P7 SST Topic 3 Climate of Africa by rewriting two subtopics together while staying source-aligned.

### Changed
- Rewrote `factors-climate` with 4 modules:
  1. `climate-factors-ncdc-list`
  2. `water-bodies-winds-landmass`
  3. `altitude-relief-vegetation-human-activities`
  4. `factor-answer-practice`
- Rewrote `climate-human-activities` with 4 modules:
  1. `climate-controls-activities`
  2. `desert-mediterranean-temperate-activities`
  3. `equatorial-tropical-mountain-activities`
  4. `climate-activity-answer-practice`
- Kept the NCDC factor list exact.
- Used the NCDC activity list by climate type instead of generic uses/advantages filler.

### Source basis
- NCDC P7 Set One Topic 3 extract / pages 322–326.

### Verified
- `node scripts/audit-curriculum-intelligence.js` → 0 failures / 40 warnings.
- `cd app && npm run build` → `✓ Generating static pages (413/413)`.

### Next
- Rewrite `human-activities-climate` and `premium-climate-interpretation` together if quality remains high.

---
## v1.8.95 — 2026-07-15 — Topic 3 audit started and first two climate subtopics rewritten

**Session theme:** Start P7 SST Topic 3 Climate of Africa under curriculum intelligence and rewrite two subtopics together while preserving quality.

### Added
- `content/curriculum-intelligence/p7-sst/topic-03-climate-of-africa/evidence-notes.json`
- `content/curriculum-intelligence/p7-sst/topic-03-climate-of-africa/module-blueprint.json`
- `content/curriculum-intelligence/p7-sst/topic-03-climate-of-africa/qa-checklist.json`
- `docs/ops/p7-sst-topic-03-curriculum-intelligence-audit-2026-07-15.md`

### Changed
- Updated `content/curriculum-intelligence/p7-sst/source-registry.json` and `manifest.json` for Topic 3.
- Rewrote `climatic-regions` into 3 modules: weather/climate elements, six climatic regions, and map practice.
- Rewrote `characteristics-climate` into 3 modules: equatorial/tropical, desert/Mediterranean, and temperate/mountain characteristics.
- Removed mechanical uses/importances/advantages/disadvantages filler.

### Verified
- `node scripts/audit-curriculum-intelligence.js` → 0 failures / 40 warnings.
- `cd app && npm run build` → `✓ Generating static pages (413/413)`.

### Next
- Rewrite `factors-climate` and `climate-human-activities` together if quality remains high.

---
## v1.8.94 — 2026-07-15 — Topic 2 final two subtopics rewritten

**Session theme:** Move faster by rewriting two subtopics together while preserving curriculum-intelligence consistency and quality.

### Changed
- Rewrote `formation-physical-features` inside `app/lib/social-topics.ts` with 4 source-backed modules:
  1. `formation-folded-mountains`
  2. `formation-fault-block-mountains-rift-valleys`
  3. `formation-volcanic-mountains`
  4. `formation-diagram-practice`
- Rewrote `premium-physical-features-application` with 4 assessment-aligned modules:
  1. `physical-features-question-commands`
  2. `physical-features-map-practice`
  3. `physical-features-formation-practice`
  4. `physical-features-value-answer-practice`
- Focused formation content on folded, fault-block and volcanic mountains because NCDC guidance explicitly names them.
- Focused application practice on NCDC competences: naming, locating, formation, diagrams and value answers.

### Source basis
- NCDC P7 Set One Topic 2 pages 318–321 / printed pages 297–300.

### Verified
- `node scripts/audit-curriculum-intelligence.js` → 0 failures / 34 warnings.
- `cd app && npm run build` → `✓ Generating static pages (413/413)`.

### Topic 2 status
- All Topic 2 learner-facing subtopics have now been rewritten under the curriculum-intelligence direction.
- Remaining warnings mark atlas/teacher review needs before premium-final status, not structure/build failures.

---
## v1.8.93 — 2026-07-15 — Topic 2 Plateau/Rift/Coastal Plains rewritten

**Session theme:** Continue P7 SST Topic 2 rewrite under curriculum intelligence.

### Changed
- Rewrote `plateau-rift-coastal` inside `app/lib/social-topics.ts`.
- Replaced the previous broad structure with 3 source-backed modules:
  1. `plateau-rift-coastal-as-relief-features`
  2. `locating-plateau-rift-coastal-plains`
  3. `model-and-value-practice-relief-features`
- Focused content on plateau, rift valley and coastal plains as relief features, NCDC coastal plains in the West/North/South, and modelling/map practice.
- Avoided mechanical uses/importances/advantages/disadvantages filler.

### Source basis
- NCDC P7 Set One Topic 2 pages 318–321 / printed pages 297–300.

### Verified
- `node scripts/audit-curriculum-intelligence.js` → 0 failures / 34 warnings.
- `cd app && npm run build` → `✓ Generating static pages (413/413)`.

### Next
- Rewrite `formation-physical-features`: folded, fault-block and volcanic mountains first, with simple diagram/model language.

---
## v1.8.92 — 2026-07-15 — Topic 2 Lakes of Africa rewritten

**Session theme:** Continue P7 SST Topic 2 rewrite under curriculum intelligence.

### Changed
- Rewrote `lakes-africa` inside `app/lib/social-topics.ts`.
- Replaced the previous lakes structure with 3 source-backed modules:
  1. `lakes-as-drainage-features`
  2. `lake-chad-lake-ngami`
  3. `lake-value-map-practice`
- Focused content on lakes as drainage features, NCDC-listed Lake Chad and Lake Ngami, map location and value/map practice.
- Avoided mechanical uses/importances/advantages/disadvantages filler.

### Source basis
- NCDC P7 Set One Topic 2 pages 318–321 / printed pages 297–300.

### Verified
- `node scripts/audit-curriculum-intelligence.js` → 0 failures / 34 warnings.
- `cd app && npm run build` → `✓ Generating static pages (413/413)`.

### Next
- Rewrite `plateau-rift-coastal`: plateau, rift valley and coastal plains as relief features, with map/model practice.

---
## v1.8.91 — 2026-07-15 — Topic 2 Rivers of Africa rewritten

**Session theme:** Continue P7 SST Topic 2 rewrite under curriculum intelligence.

### Changed
- Rewrote `rivers-africa` inside `app/lib/social-topics.ts`.
- Replaced the previous generic rivers structure with 4 source-backed modules:
  1. `rivers-as-drainage-features`
  2. `major-rivers-of-africa-ncdc-list`
  3. `river-mouths-oceans-seas`
  4. `river-value-map-practice`
- Focused content on rivers as drainage features, the NCDC-listed rivers, map location, and oceans/seas into which major rivers flow.
- Avoided mechanical uses/importances/advantages/disadvantages filler.

### Source basis
- NCDC P7 Set One Topic 2 pages 318–321 / printed pages 297–300.

### Verified
- `node scripts/audit-curriculum-intelligence.js` → 0 failures / 34 warnings.
- `cd app && npm run build` → `✓ Generating static pages (413/413)`.

### Next
- Rewrite `lakes-africa`: Lake Chad and Lake Ngami, lakes as drainage features, map location and value/map practice.

---
## v1.8.90 — 2026-07-15 — Topic 2 intelligence audit started and Mountains/Highlands rewritten

**Session theme:** Continue from Topic 1 into P7 SST Topic 2 using the same curriculum-intelligence direction.

### Added
- `content/curriculum-intelligence/p7-sst/topic-02-physical-features-of-africa/evidence-notes.json`
- `content/curriculum-intelligence/p7-sst/topic-02-physical-features-of-africa/module-blueprint.json`
- `content/curriculum-intelligence/p7-sst/topic-02-physical-features-of-africa/qa-checklist.json`
- `docs/ops/p7-sst-topic-02-curriculum-intelligence-audit-2026-07-15.md`

### Changed
- Updated `content/curriculum-intelligence/p7-sst/source-registry.json` with the Topic 2 extract source.
- Updated `content/curriculum-intelligence/p7-sst/manifest.json` with Topic 2 evidence/blueprint/QA mappings.
- Rewrote `mountains-highlands` inside `app/lib/social-topics.ts` with 3 source-backed modules:
  1. `physical-features-relief-drainage`
  2. `major-mountains-highlands-africa`
  3. `mountains-highlands-value-map-practice`
- Replaced mechanical uses/advantages/disadvantages framing with focused NCDC-aligned naming, locating, value and map practice.

### Source basis
- NCDC P7 Set One Topic 2 pages 318–321 / printed pages 297–300.

### Verified
- `node scripts/audit-curriculum-intelligence.js` → 0 failures / 34 warnings.
- `cd app && npm run build` → `✓ Generating static pages (413/413)`.

### Next
- Rewrite `rivers-africa`: NCDC-listed rivers, map location, and oceans/seas into which major rivers flow.

---
## v1.8.89 — 2026-07-15 — Topic 1 application practice rewritten around NCDC assessment competences

**Session theme:** Finish the P7 SST Topic 1 learner-flow rewrite by aligning the application subtopic to NCDC assessment competences.

### Changed
- Rewrote `premium-map-answering` inside `app/lib/social-topics.ts`.
- Replaced the previous general premium practice with 4 assessment-aligned modules:
  1. `map-answering-read-the-task`
  2. `drawing-africa-regions-lines`
  3. `answering-direction-questions`
  4. `countries-capitals-islands-practice`
- Focused practice on reading map questions, drawing Africa with regions and lines, answering compass-direction questions, and practising countries/capitals/islands.

### Source/policy basis
- NCDC Topic 1 assessment competences from P7 Set One pages 315–317 / printed pages 294–296.
- School-first country/capital approach approved for the main learner flow.

### Verified
- `node scripts/audit-curriculum-intelligence.js` → 0 failures / 28 warnings.
- `cd app && npm run build` → `✓ Generating static pages (413/413)`.

### Topic 1 status
- All core Topic 1 official subtopics and application practice have now been rewritten under the curriculum-intelligence direction.

---
## v1.8.88 — 2026-07-15 — Topic 1 Subtopic 5 rewritten with school-first country/capital approach

**Session theme:** Complete the core official subtopics under P7 SST Topic 1 using the agreed shorter P7 school-first approach for countries, capitals and islands.

### Changed
- Rewrote `countries-capitals-africa` inside `app/lib/social-topics.ts`.
- Replaced the old broad framing with 4 learner-focused modules:
  1. `country-capital-region-meaning`
  2. `school-first-countries-capitals-by-region`
  3. `islands-part-of-africa-school-first`
  4. `capital-city-answer-practice`
- Removed broad uses/importance and landlocked/coastal filler from the core subtopic.
- Used a manageable P7 school-first list in the learner flow while keeping the fuller reference pack as support material.

### Source/policy basis
- NCDC P7 Set One Topic 1 pages 315–317 / printed pages 294–296.
- Candidate reference pack: `content/curriculum-intelligence/p7-sst/topic-01-location-of-africa/reference-countries-capitals-islands.json`.
- Founder-approved policy: shorter P7 school-first main lesson, full reference pack as support/reference.

### Verified
- `node scripts/audit-curriculum-intelligence.js` → 0 failures / 28 warnings.
- `cd app && npm run build` → `✓ Generating static pages (413/413)`.

### Next
- Rewrite `premium-map-answering` so Topic 1 practice aligns to NCDC assessment competences.

---
## v1.8.87 — 2026-07-15 — Topic 1 Subtopic 4 rewritten from source-backed blueprint

**Session theme:** Continue source-backed P7 SST Topic 1 rewrite with regions of Africa.

### Changed
- Rewrote `regions-africa` inside `app/lib/social-topics.ts`.
- Replaced the previous broad region framing with 3 source-backed modules:
  1. `six-regions-of-africa`
  2. `locating-african-regions-on-map`
  3. `regions-countries-link`
- Focused the learner content on the six NCDC-named regions, map-location practice and preparation for countries/capitals by region.
- Removed broad uses/importance filler from the core subtopic.

### Source basis
- NCDC P7 Set One Topic 1 pages 315–317 / printed pages 294–296.

### Verified
- `node scripts/audit-curriculum-intelligence.js` → 0 failures / 28 warnings.
- `cd app && npm run build` → `✓ Generating static pages (413/413)`.

### Next
- Rewrite `countries-capitals-africa` using the approved shorter P7 school-first approach, with the fuller countries/capitals/islands reference pack kept as support material.

---
## v1.8.86 — 2026-07-15 — Topic 1 Subtopic 3 rewritten from source-backed blueprint

**Session theme:** Continue source-backed P7 SST Topic 1 rewrite with water bodies around Africa.

### Changed
- Rewrote `water-bodies-africa` inside `app/lib/social-topics.ts`.
- Reduced the subtopic from 5 modules to 3 source-backed modules:
  1. `oceans-around-africa`
  2. `seas-around-africa`
  3. `directions-of-water-bodies-from-africa`
- Removed marine gateways/channels and broad uses/importance framing from the core subtopic pending source/extension decision.
- Focused the learner content on NCDC-required oceans, seas and compass directions.

### Source basis
- NCDC P7 Set One Topic 1 pages 315–317 / printed pages 294–296.

### Verified
- `node scripts/audit-curriculum-intelligence.js` → 0 failures / 28 warnings.
- `cd app && npm run build` → `✓ Generating static pages (413/413)`.

### Next
- Rewrite `regions-africa` from the source-backed blueprint: six NCDC-named regions and map-location practice first; no broad region uses/importance filler unless source-justified.

---
## v1.8.85 — 2026-07-15 — Topic 1 Subtopic 2 rewritten from source-backed blueprint

**Session theme:** Continue the P7 SST Topic 1 rewrite one subtopic at a time under the curriculum-intelligence system.

### Changed
- Rewrote `world-continents-sizes` inside `app/lib/social-topics.ts`.
- Reduced the subtopic from 4 modules to 3 source-backed modules:
  1. `continents-of-the-world`
  2. `continents-size-order`
  3. `continent-map-practice`
- Removed the unsupported `continents-uses-importance` module because the extracted NCDC Topic 1 pages require continent names and size order, not broad uses/advantages/disadvantages of continents.
- Kept Africa's key P7 fact: Africa is the second largest continent after Asia.
- Added map practice to connect continent names to Africa's position on the world map.

### Source basis
- NCDC P7 Set One Topic 1 pages 315–317 / printed pages 294–296.

### Verified
- `node scripts/audit-curriculum-intelligence.js` → 0 failures / 28 warnings.
- `cd app && npm run build` → `✓ Generating static pages (413/413)`.

### Next
- Rewrite `water-bodies-africa` from the source-backed blueprint: oceans, seas and compass directions first; remove/quarantine marine gateways/channels unless source-justified.

---
## v1.8.84 — 2026-07-15 — Topic 1 Subtopic 1 rewritten from source-backed blueprint

**Session theme:** Start rewriting P7 SST Topic 1 the right way, one subtopic at a time, using curriculum-intelligence evidence instead of ad hoc polishing.

### Changed
- Rewrote `location-position-africa` inside `app/lib/social-topics.ts`.
- Reduced the subtopic from 9 modules to 5 source-backed modules:
  1. `africa-on-world-map`
  2. `latitude-longitude-position-keywords`
  3. `equator-tropics-prime-meridian-africa`
  4. `locating-africa-compass-directions`
  5. `map-drawing-activity-africa-lines`
- Removed/quarantined unsupported longitude/local-time calculation from this subtopic because it is not in the extracted NCDC Topic 1 pages.
- Replaced over-spaced one-line strict fragments with fuller short learner-facing explanations.
- Kept one inline check per module.

### Source basis
- NCDC P7 Set One Topic 1 pages 315–317 / printed pages 294–296.
- Britannica Africa reference for Equator, Tropics and Prime Meridian support.

### Verified
- `node scripts/audit-curriculum-intelligence.js` → 0 failures / 28 warnings.
- `cd app && npm run build` → `✓ Generating static pages (413/413)`.

### Next
- Rewrite `world-continents-sizes` from the source-backed blueprint, keeping only continent names and size order unless extra content is source-justified.

---
## v1.8.83 — 2026-07-15 — Topic 1 curriculum intelligence audit started

**Session theme:** Restart P7 SST Topic 1 from source evidence because the current strict-formatted content still contains spacing/readability issues and weakly supported filler.

### Added
- `content/curriculum-intelligence/p7-sst/topic-01-location-of-africa/evidence-notes.json` — extracted NCDC Topic 1 evidence from official PDF pages 315–317 / printed pages 294–296.
- `content/curriculum-intelligence/p7-sst/topic-01-location-of-africa/module-blueprint.json` — source-backed rewrite blueprint for Topic 1.
- `content/curriculum-intelligence/p7-sst/topic-01-location-of-africa/qa-checklist.json` — Topic 1 gate status and rewrite blockers.
- `docs/ops/p7-sst-topic-01-curriculum-intelligence-audit-2026-07-15.md` — audit note explaining what is source-backed, what is missing, and which current app modules need review/removal.

### Updated
- `content/curriculum-intelligence/p7-sst/source-registry.json` now records the Topic 1 extract and source verification state.
- `content/curriculum-intelligence/p7-sst/manifest.json` now gives Topic 1 an explicit evidence/blueprint/QA mapping.
- `scripts/audit-curriculum-intelligence.js` now warns for any manifest subtopic whose evidence status is not fully verified.

### Current finding
- Topic 1 has the right broad structure, but several current modules need source justification or removal/quarantine: longitude time calculation, marine gateways/channels, uses/advantages/disadvantages filler for continents/regions/capitals, and other extension-style material.
- The official NCDC pages require country/capital lists and African islands, but do not provide the full lists; an additional verified source is needed before the final Topic 1 rewrite.

### Added source pack
- `content/curriculum-intelligence/p7-sst/topic-01-location-of-africa/reference-countries-capitals-islands.json` — candidate countries/capitals/islands reference pack for Topic 1.
- Updated `source-registry.json` with UNSD M49, Britannica Horn of Africa and candidate capital/island cross-check source entries.

### Important
- The reference pack is **not yet learner-approved**. It exists to prevent guessing and to make review issues explicit: Equatorial Guinea capital convention, South Africa capital convention, exact East Africa grouping, and island-country scope.

### Verified
- Ran `node scripts/audit-curriculum-intelligence.js`; result is 0 failures and 29 warnings.

---
## v1.8.82 — 2026-07-15 — Curriculum Intelligence System v1 started for P7 SST

**Session theme:** Break the cycle of unfinished/unsourced content by creating a formal source-traceable curriculum intelligence system before rewriting more learner content.

### Added
- `docs/spec/curriculum-intelligence-system-v1.md` — master source hierarchy, agent roles, quality gates, fullness standard and publishing rules.
- `docs/ops/p7-sst-curriculum-intelligence-pilot-2026-07-15.md` — P7 Social Studies pilot operating note.
- `content/curriculum-intelligence/p7-sst/source-registry.json` — source registry for official/candidate P7 SST sources.
- `content/curriculum-intelligence/p7-sst/manifest.json` — P7 SST manifest mapping official topic order and Topic 5 official subtopics to app IDs.
- `content/curriculum-intelligence/p7-sst/topic-05-people-ethnic-groups-settlement/evidence-notes.json` — empty evidence-note scaffold for Topic 5.
- `content/curriculum-intelligence/p7-sst/topic-05-people-ethnic-groups-settlement/qa-checklist.json` — hard-gate QA checklist for Topic 5.
- `scripts/audit-curriculum-intelligence.js` — structure audit for P7 SST topic order, duplicate subtopic IDs, manifest coverage and inline-check gaps.

### Verified
- Ran `node scripts/audit-curriculum-intelligence.js`.
- Result: 0 failures, 26 warnings.
- Warnings are expected at this stage: Topic 5 evidence is not yet verified, and later P7 SST topics still have module/check gaps from earlier content.
- Ran `cd app && npm run build`; build passed with `✓ Generating static pages (413/413)`.

### Rule locked
- No new Topic 5 learner-facing rewrite should be published until evidence notes exist and the QA gates are passed.

---
## v1.8.81 — 2026-07-15 — P7 SST Topic 6–10 structure split fix

**Session theme:** Correct the P7 Social Studies structure bug where later official topics were nested under `foreign-influence-africa`.

### Fixed
- Reworked `app/lib/social-topics.ts` so `foreign-influence-africa` now contains only Foreign Influence subtopics.
- Restored the richer misplaced subtopics to their official topic objects:
  - `nationalism-road-independence`
  - `post-independence-africa`
  - `economic-developments-africa`
  - `major-world-organisations`
- Reordered P7 SST topic data to follow the official curriculum sequence.
- Removed duplicate/misplaced subtopic routing created by the previous structure error.

### Verified
- Ran `cd app && npm run build` successfully.
- Build result: `✓ Generating static pages (413/413)`.

### Next
- Continue Topic 5 `people-ethnic-groups-settlement` as the SST pilot, but use the new curriculum-intelligence/source-traceability workflow before creating or restructuring more content.

---
## v1.8.80 — 2026-07-14 — P7 SST strict formatting: Vegetation of Africa and people-subtopic correction

**Session theme:** Strict-format founder-provided exact content for Topic 4, Vegetation of Africa, and fix a discovered subtopic placement error.

**Changed — content:**
- Rewrote Topic 4 / Subtopic 1, `vegetation-types`, in `app/lib/social-topics.ts`.
- Rewrote Topic 4 / Subtopic 2, `factors-vegetation`, in `app/lib/social-topics.ts`.
- Rewrote Topic 4 / Subtopic 3, `importance-vegetation`, in `app/lib/social-topics.ts`.
- Rewrote Topic 4 / Subtopic 4, `game-parks-animals`, in `app/lib/social-topics.ts`.
- Rewrote Topic 4 / Subtopic 5, `population-vegetation`, in `app/lib/social-topics.ts`.
- Strict-formatted `premium-vegetation-application` as vegetation application practice.

**Fixed — structure:**
- Removed People of Africa subtopics that had been incorrectly sitting under `vegetation-of-africa`.
- Restored those subtopics under `people-ethnic-groups-settlement`:
  - `origin-ethnic-groups`
  - `movements-ethnic-groups`
  - `settlement-tribes`
  - `problems-effects-migration`
  - `premium-people-settlement-reasoning`
- Removed unrelated copied subtopics from the People topic structure.

**Verified:**
- `cd app && npm run build` passed with 417 static pages.

**Next:**
- Continue with Topic 5: `people-ethnic-groups-settlement`, using founder-provided exact content if deeper strict formatting is needed.

---
## v1.8.79 — 2026-07-14 — P7 SST strict formatting: Climate of Africa

**Session theme:** Strict-format founder-provided exact content for Topic 3, Climate of Africa.

**Changed — content:**
- Rewrote Topic 3 / Subtopic 1, `climatic-regions`, in `app/lib/social-topics.ts`.
- Rewrote Topic 3 / Subtopic 2, `characteristics-climate`, in `app/lib/social-topics.ts`.
- Rewrote Topic 3 / Subtopic 3, `factors-climate`, in `app/lib/social-topics.ts`.
- Rewrote Topic 3 / Subtopic 4, `climate-human-activities`, in `app/lib/social-topics.ts`.
- Rewrote Topic 3 / Subtopic 5, `human-activities-climate`, in `app/lib/social-topics.ts`.
- Strict-formatted the application subtopic `premium-climate-interpretation`.
- Restructured raw content into digestible modules with inline checks and worked examples where useful.

**Coverage after this pass:**
- Topic 3 `Climate of Africa` is strict-formatted across official subtopics and application practice.

**Documentation:**
- Updated `STATUS.md`, `HANDOFF.md`, `CHECKLIST.md`, `START_HERE.md` and `docs/ops/p7-sst-strict-formatting-pass-2026-07-14.md`.

**Verified:**
- `cd app && npm run build` passed with 418 static pages.

**Next:**
- Move to Topic 4: `vegetation-of-africa`, using founder-provided exact content.

---
## v1.8.78 — 2026-07-14 — P7 SST strict formatting: application subtopics for Topics 1 and 2

**Session theme:** Strict-format the extra application/practice subtopics that had been missed after formatting the official Topic 1 and Topic 2 subtopics.

**Changed — content:**
- Rewrote `premium-map-answering` in `app/lib/social-topics.ts` using the strict learner-facing format.
- Rewrote `premium-physical-features-application` in `app/lib/social-topics.ts` using the strict learner-facing format.
- Each application subtopic now has digestible modules, inline checks and worked examples where useful.

**Coverage after this pass:**
- Topic 1 `Location of Africa on the map of the world` now has all official subtopics plus the application subtopic strict-formatted.
- Topic 2 `Physical Features of Africa` now has all official subtopics plus the application subtopic strict-formatted.

**Documentation:**
- Updated `STATUS.md`, `HANDOFF.md`, `CHECKLIST.md`, `START_HERE.md` and `docs/ops/p7-sst-strict-formatting-pass-2026-07-14.md`.

**Verified:**
- `cd app && npm run build` passed with 418 static pages.

**Next:**
- Move to Topic 3: `climate-of-africa`, using founder-provided exact content.

---
## v1.8.77 — 2026-07-14 — P7 SST strict formatting: Physical Features of Africa official subtopics

**Session theme:** Move from Topic 1 to Topic 2 in P7 Social Studies and strict-format founder-provided content for Physical Features of Africa.

**Changed — content:**
- Rewrote Topic 2 / Subtopic 1, `mountains-highlands`, in `app/lib/social-topics.ts`.
- Rewrote Topic 2 / Subtopic 2, `rivers-africa`, in `app/lib/social-topics.ts`.
- Rewrote Topic 2 / Subtopic 3, `lakes-africa`, in `app/lib/social-topics.ts`.
- Rewrote Topic 2 / Subtopic 4, `plateau-rift-coastal`, in `app/lib/social-topics.ts`.
- Rewrote Topic 2 / Subtopic 5, `formation-physical-features`, in `app/lib/social-topics.ts`.
- Restructured founder-provided raw content into digestible strict modules with inline checks.

**Coverage after this pass:**
- Physical Features of Africa now has its official content areas strict-formatted for mountains/highlands, rivers, lakes, plateau/rift/coastal plains and formation processes.
- `premium-physical-features-application` remains as an extra application/practice subtopic and still needs a later decision.

**Documentation:**
- Updated `STATUS.md`, `HANDOFF.md`, `CHECKLIST.md`, `START_HERE.md` and `docs/ops/p7-sst-strict-formatting-pass-2026-07-14.md`.

**Verified:**
- `cd app && npm run build` passed with 418 static pages.

**Next:**
- Founder reviews Topic 2 formatting.
- Decide whether to strict-format `premium-physical-features-application` or move to Topic 3, `climate-of-africa`.

---
## v1.8.76 — 2026-07-14 — P7 SST strict formatting: remaining official Topic 1 subtopics

**Session theme:** Continue the P7 Social Studies strict content-formatting pass using founder-provided exact content for the remaining official subtopics in Topic 1.

**Changed — content:**
- Rewrote Topic 1 / Subtopic 3, `water-bodies-africa`, in `app/lib/social-topics.ts`.
- Rewrote Topic 1 / Subtopic 4, `regions-africa`, in `app/lib/social-topics.ts`.
- Rewrote Topic 1 / Subtopic 5, `countries-capitals-africa`, in `app/lib/social-topics.ts`.
- Restructured founder-provided raw content into digestible strict modules with inline checks.
- Cleaned compressed raw text and accidental link artifacts while preserving the founder-provided content direction.

**Coverage after this pass:**
- All 5 official NCDC subtopics under P7 SST Topic 1 are now strict-formatted:
  1. `location-position-africa`
  2. `world-continents-sizes`
  3. `water-bodies-africa`
  4. `regions-africa`
  5. `countries-capitals-africa`
- `premium-map-answering` remains as an extra application/practice subtopic and still needs review or strict-format conversion.

**Documentation:**
- Updated `STATUS.md`, `HANDOFF.md`, `CHECKLIST.md`, `START_HERE.md`, `DECISIONS.md` and `docs/ops/p7-sst-strict-formatting-pass-2026-07-14.md`.

**Verified:**
- `cd app && npm run build` passed with 418 static pages.

**Next:**
- Founder reviews Topic 1 formatting across all official subtopics.
- Decide whether to strict-format `premium-map-answering` as application practice or move to Topic 2, `physical-features-of-africa`.

---
## v1.8.75 — 2026-07-14 — P7 SST strict formatting: World Continents and Their Sizes

**Session theme:** Continue the P7 Social Studies strict content-formatting pass using founder-provided exact content.

**Changed — content:**
- Rewrote Topic 1 / Subtopic 2, `world-continents-sizes`, in `app/lib/social-topics.ts`.
- Restructured the founder-provided raw content into 4 digestible modules:
  1. World Continents and Their Types
  2. Uses, Importances, Advantages and Disadvantages of Continents
  3. Continental Size Ranking
  4. General Exam Summary Points
- Added an inline `tryThis` check for each module.
- Added a worked example for arranging continents by size.
- Cleaned raw formatting artifacts such as compressed words and accidental link fragments while preserving the founder-provided content direction.

**Documentation:**
- Updated `STATUS.md`, `HANDOFF.md`, `CHECKLIST.md`, `START_HERE.md`, `DECISIONS.md` and `docs/ops/p7-sst-strict-formatting-pass-2026-07-14.md` to record that the first two Topic 1 subtopics have now been strict-formatted.

**Verified:**
- `cd app && npm run build` passed with 418 static pages.

**Next:**
- Continue Topic 1 / Subtopic 3: `water-bodies-africa`, using founder-provided exact content.

---
## v1.8.74 — 2026-07-14 — P7 SST strict formatting standard and first subtopic restructure

**Session theme:** Lock the founder's strict content-formatting direction and apply it to the first P7 Social Studies subtopic.

**Changed — content:**
- Rewrote `location-position-africa` inside `app/lib/social-topics.ts` using the strict layout: topic header, definition, types, examples, uses, importances, advantages and disadvantages where relevant.
- Split the first subtopic into 9 digestible modules with one inline check per module.
- Cleaned the previous rough formatting issues such as compressed definitions, missing spacing and raw note-style lines.
- Preserved the current P7 SST subtopic method: `Topic → Subtopic → Modules → Inline quiz`.

**Changed — renderer/style:**
- Updated `app/components/SubtopicViewer.tsx` so strict lines render cleanly: `###` lines become compact headings and `*` lines become strict bullet rows.
- Added a small strict-content CSS block to `app/app/globals.css` for spacing and mobile-readable bullets.

**Changed — documentation:**
- Added `docs/ops/p7-sst-strict-formatting-pass-2026-07-14.md`.
- Logged `DEV-037` in `DECISIONS.md`.
- Updated `STATUS.md`, `HANDOFF.md`, `CHECKLIST.md`, `START_HERE.md` and this changelog.

**Verified:**
- `cd app && npm run build` passed with 418 static pages.

**Next:**
- Founder reviews the first subtopic formatting.
- If approved, continue the same strict formatting process on the remaining Topic 1 subtopics, using founder-provided exact content.

---
## v1.8.73 — 2026-07-13 — P7 heavy completion, P6 core heavy deepening and push-list protocol

**Session theme:** Finish P7 non-RE heavy v4 and move P6 non-RE core subjects into heavy v4 before pushing.

**Changed — P7:**
- Added `app/lib/p7-v4-heavy-lessons-wave3.ts`.
- Merged Wave 3 into `app/lib/p7-v4-heavy-lessons.ts`.
- Hand-deepened the final 3 P7 Mathematics topics: Whole Numbers, Patterns and Sequences, Integers.
- P7 Mathematics is now complete in heavy v4 across all 11 topics.
- P7 non-RE subjects are now complete in heavy v4: Mathematics, Integrated Science, English and Social Studies.

**Changed — P6:**
- Added `app/lib/p6-v4-heavy-lessons.ts`.
- Wired P6 Mathematics, Integrated Science, English and Social Studies topic libraries to apply heavy-v4 overrides after structural v4 migration.
- Hand-deepened all 22 P6 non-RE topics across Mathematics, Integrated Science, English and Social Studies.

**Changed — workflow documentation:**
- Added `DEV-036` to `DECISIONS.md`.
- Strengthened `docs/ops/update-handoff-protocol.md` so future agents must provide exact files to overwrite/add/delete on every push/milestone handoff.
- Added `docs/ops/v4-p6-p7-heavy-completion-2026-07-13.md`.
- Updated checklist, status and handoff.

**Current P6/P7 status:**
- P7 non-RE: 36 topics / 60 hand-built v4 lessons complete.
- P6 non-RE: 22 topics / 22 hand-built v4 lessons complete.
- P6/P7 RE remains structurally v4 and pending qualified CRE/IRE review.

**Verified:**
- `cd app && npm run build` passed with 356 static pages.

---

## v1.8.72 — 2026-07-13 — P7 heavy manual v4 deepening wave 2 and Read UI simplification

**Session theme:** Continue heavy P7 deepening while reducing visual overload in the Read experience.

**Changed — UI:**
- Simplified topic tabs from numbered `Watch / Read / Try quiz` to clean `Watch / Read` only.
- Removed the extra Read-panel quiz CTA so the page no longer shows repeated large “Take the quiz” actions.
- Replaced large v4 lesson chooser cards with a compact dropdown.
- Replaced large module selector cards with small progress dots.
- Replaced “Module X of Y” + percent-heavy progress treatment with a compact `X/Y` progress row.
- Removed visible content-block number badges.
- Replaced large Previous/Next module buttons with smaller Back/Next controls.
- Added final CSS clarity pass in `app/app/globals.css`.

**Changed — content:**
- Added `app/lib/p7-v4-heavy-lessons-wave2.ts`.
- Merged Wave 2 overrides into `app/lib/p7-v4-heavy-lessons.ts`.
- Hand-deepened 19 more P7 topics with 26 hand-built v4 lessons.
- Documented the wave in `docs/ops/v4-p7-heavy-deepening-wave2-ui-simplification-2026-07-13.md`.
- Updated checklist, status and handoff.

**Wave 2 coverage:**
- Mathematics: Operations; Construction; Length/Mass/Capacity/Money; Time.
- Integrated Science: Excretory System; Simple Machines/Friction; Energy Resources; Interdependence.
- English: School Holidays; Electronic Media; Rights/Responsibilities/Freedom; Environmental Protection; Ceremonies.
- Social Studies: Climate; Vegetation; People/Settlement; Post-Independence Africa; Economic Developments; Major World Organisations.

**Combined P7 heavy coverage after Wave 2:**
- 33 P7 topics hand-deepened.
- 54 hand-built v4 lessons added.
- P7 Science, English and Social Studies are fully hand-deepened in heavy v4 at AI-builder level.
- P7 Mathematics has 3 heavy topics remaining: Whole Numbers, Patterns and Sequences, Integers.

**Verified:**
- `cd app && npm run build` passed with 356 static pages.

---

## v1.8.71 — 2026-07-12 — P7 heavy manual v4 deepening wave 1

**Session theme:** Begin manual heavy deepening after the P6/P7 structural v4 migration.

**Changed:**
- Added `app/lib/p7-v4-heavy-lessons.ts` as the P7 hand-built v4 override layer.
- Wired P7 Mathematics, Integrated Science, English and Social Studies libraries to apply heavy-v4 overrides after structural migration.
- Hand-deepened 14 high-priority P7 topics with 28 richer learner-facing v4 lessons.
- Reused existing diagrams/images in mobile-friendly v4 diagram blocks where useful.
- Documented the wave in `docs/ops/v4-p7-heavy-deepening-wave1-2026-07-12.md`.
- Updated checklist, status and handoff.

**Wave 1 topics:**
- Mathematics: Set Concepts; Fractions, Decimals and Percentages; Data Handling and Graphs; Algebra.
- Integrated Science: Muscular-Skeletal System; Electricity and Magnetism; Light Energy; Population and Health.
- English: Letter Writing; Examinations.
- Social Studies: Location of Africa; Physical Features of Africa; Foreign Influence in Africa; Nationalism and the Road to Independence.

**Verified:**
- Initial `npm run build` failed because `next` was missing from the sandbox snapshot.
- `cd app && npm install && npm run build` passed with 356 static pages.
- `npm audit fix --force` was not run.

---

## v1.8.70 — 2026-07-12 — P6/P7 structurally migrated to v4 across all subjects

**Session theme:** Major upward v4 migration after completing P4/P5 priority structure.

**Changed:**
- Structurally migrated all P6 topic libraries to upper-primary v4: Mathematics, Integrated Science, English, Social Studies and Religious Education.
- Structurally migrated all P7 topic libraries to upper-primary v4: Mathematics, Integrated Science, English, Social Studies and Religious Education.
- Added term maps for all migrated P6/P7 subject libraries from the existing curriculum JSON maps.
- Reused existing v4 helpers for Maths, Science, English, Social Studies and RE.
- Improved the Social Studies v4 helper so P6 lessons use East Africa context and P7 lessons use Africa/world context instead of generic P5/Uganda wording.
- Added migration note: `docs/ops/v4-p6-p7-structural-migration-2026-07-12.md`.
- Updated checklist, status and handoff.

**Coverage:**
- 78 P6/P7 topics now render through upper-primary v4.
- 278 P6/P7 v4 lessons are generated from current app subtopic libraries.

**Important:**
- This is the big structural migration, not premium-final hand-deepening of every P6/P7 topic.
- P6/P7 now need real-phone smoke testing and targeted hand-deepening of PLE-heavy topics.
- P6/P7 RE remains pending qualified CRE/IRE review.

**Verified:**
- `cd app && npm run build` passed with 356 static pages.

---

## v1.8.69 — 2026-07-12 — P5 Social Studies v4 manual deepening complete

**Session theme:** Finish P4/P5 Social Studies before moving upward.

**Changed:**
- Hand-deepened remaining P5 SST topics: Climate, Vegetation, Natural Resources, Pre-Colonial People, Foreign Influence, How Uganda Became a Nation and Road to Independence.
- P5 Social Studies is now complete at AI-builder v4 level across all 12 topics.
- P4/P5 Social Studies are now complete at AI-builder v4 level.
- Updated SST migration docs, checklist, status and handoff.

**Verified:**
- `cd app && npm run build` passed with 356 static pages.

---

## v1.8.68 — 2026-07-12 — P4 SST complete and P5 SST priority topics deepened in v4

**Session theme:** Take a bigger Social Studies deepening leap while staying quality-conscious.

**Changed:**
- Hand-deepened all 6 P4 Social Studies topics in v4.
- Hand-deepened 5 priority P5 Social Studies topics in v4: Location, Physical Features, Government, Independence and Population.
- Set `useOnlyV4Lessons: true` for those hand-built SST topics.
- Updated SST migration docs, checklist, status and handoff.

**Current SST status:**
- P4 Social Studies complete at AI-builder v4 level.
- P5 Social Studies structurally migrated; priority topics hand-deepened.

**Verified:**
- `cd app && npm run build` passed with 356 static pages.

---

## v1.8.67 — 2026-07-12 — Social helper enriched and P4/P5 RE structurally migrated to v4

**Session theme:** Take a bigger migration leap after P4/P5 Social Studies structural migration.

**Changed:**
- Enriched `app/lib/v4-social-helpers.ts` with vocabulary, read-and-talk context, stronger definitions and local-example guidance.
- Added shared Religious Education v4 migrator: `app/lib/v4-re-helpers.ts`.
- Updated `app/lib/p4-re-topics.ts` so all 25 P4 RE topics render through upper-primary v4.
- Updated `app/lib/p5-re-topics.ts` so all 20 P5 RE topics render through upper-primary v4.
- Added migration note: `docs/ops/v4-p4-p5-re-migration-2026-07-12.md`.
- Updated SST migration note, checklist, status and handoff.

**Important:**
- P4/P5 RE structural migration is not a substitute for CRE/IRE teacher review.
- P4 RE still needs full standard syllabus confirmation beyond the abridged source.

**Verified:**
- `cd app && npm install && npm run build` passed with 356 static pages.

---

## v1.8.66 — 2026-07-12 — P4/P5 Social Studies structurally migrated to v4

**Session theme:** Move v4 migration into Social Studies.

**Changed:**
- Added shared Social Studies v4 migrator: `app/lib/v4-social-helpers.ts`.
- Updated `app/lib/p4-social-topics.ts` so all 6 P4 Social Studies topics render through upper-primary v4.
- Updated `app/lib/p5-social-topics.ts` so all 12 P5 Social Studies topics render through upper-primary v4.
- Added migration note: `docs/ops/v4-p4-p5-social-studies-migration-2026-07-12.md`.
- Updated checklist, status and handoff.

**Important:**
- This is a structural v4 migration, not final manual deepening of every Social Studies topic.
- Next SST work should hand-deepen priority topics.

**Verified:**
- `cd app && npm run build` passed with 356 static pages.

---

## v1.8.65 — 2026-07-12 — P4/P5 English v4 manual deepening complete

**Session theme:** Finish P4/P5 English in full migration mode.

**Changed:**
- Hand-deepened remaining P4 English topics: Likes/Feelings, Behaviour, Time, Future Expression and Democracy.
- Hand-deepened remaining P5 English topics: Vehicle Repair and Maintenance, Travelling, Culture, Peace and Security, and Services: Banking.
- P4 English is now complete at AI-builder v4 level across all 8 topics.
- P5 English is now complete at AI-builder v4 level across all 8 topics.
- Updated English migration docs, checklist, status and handoff.

**Verified:**
- `cd app && npm run build` passed with 356 static pages.

---

## v1.8.64 — 2026-07-12 — P4/P5 English priority topics hand-deepened in v4

**Session theme:** Start manual deepening of English after structural v4 migration.

**Changed:**
- Hand-deepened P4 Describing People and Objects.
- Hand-deepened P4 Giving Directions.
- Hand-deepened P4 Buying and Selling.
- Hand-deepened P5 Letter Writing.
- Hand-deepened P5 Communication.
- Hand-deepened P5 Print Media.
- Set `useOnlyV4Lessons: true` for these topics.
- Updated English migration docs, checklist, status and handoff.

**Verified:**
- `cd app && npm run build` passed with 356 static pages.

---

## v1.8.63 — 2026-07-12 — P4/P5 English structurally migrated to v4

**Session theme:** Move v4 migration into English.

**Changed:**
- Added shared English v4 migrator: `app/lib/v4-english-helpers.ts`.
- Extended upper-primary v4 blocks/rendering to support vocabulary, story and activity blocks.
- Updated `app/lib/p4-english-topics.ts` so all 8 P4 English topics render through upper-primary v4.
- Updated `app/lib/p5-english-topics.ts` so all 8 P5 English topics render through upper-primary v4.
- Added migration note: `docs/ops/v4-p4-p5-english-migration-2026-07-12.md`.
- Updated checklist, status and handoff.

**Important:**
- This is a structural v4 migration, not final manual deepening of every English topic.
- Next English work should hand-deepen priority topics.

**Verified:**
- `cd app && npm run build` passed with 356 static pages.

---

## v1.8.62 — 2026-07-12 — P4/P5 Mathematics v4 manual deepening complete

**Session theme:** Finish P4/P5 Mathematics in full migration mode.

**Changed:**
- Hand-deepened remaining P4 Mathematics topics: Set Concepts, Patterns and Sequences, 3-D Geometry, Data Handling and Equations without Letters.
- Hand-deepened remaining P5 Mathematics topics: Set Concepts, Patterns and Sequences, Integers, Lines/Angles/Geometrical Figures, Data Handling and Time.
- P4 Mathematics is now complete at AI-builder v4 level across all 12 topics.
- P5 Mathematics is now complete at AI-builder v4 level across all 12 topics.
- Updated Maths migration docs, checklist, status and handoff.

**Verified:**
- `cd app && npm run build` passed with 356 static pages.

---

## v1.8.61 — 2026-07-12 — Second P4/P5 Mathematics deepening batch completed

**Session theme:** Continue v4 Maths migration and deepen more high-impact topics.

**Changed:**
- Hand-deepened P4 2-D Geometry, Money, Time and Length/Mass/Capacity in v4.
- Hand-deepened P5 Whole Numbers, Money, Length/Mass/Capacity and Algebra in v4.
- Set `useOnlyV4Lessons: true` for these topics.
- Updated Maths migration note, checklist, status and handoff.

**Verified:**
- `cd app && npm run build` passed with 356 static pages.

---

## v1.8.60 — 2026-07-12 — P4/P5 Mathematics priority topics hand-deepened in v4

**Session theme:** Continue v4 migration by deepening high-impact Maths foundations.

**Changed:**
- Added hand-built v4 lessons for P4 Whole Numbers.
- Added hand-built v4 lessons for P4 Operations on Whole Numbers.
- Added hand-built v4 lessons for P4 Fractions.
- Added hand-built v4 lessons for P5 Operations on Whole Numbers.
- Added hand-built v4 lessons for P5 Fractions.
- Set `useOnlyV4Lessons: true` for these priority Maths topics.
- Added priority deepening note: `docs/ops/v4-p4-p5-math-priority-deepening-2026-07-12.md`.
- Updated checklist, status and handoff.

**Verified:**
- `cd app && npm run build` passed with 356 static pages.

---

## v1.8.59 — 2026-07-12 — P4/P5 Mathematics structurally migrated to v4

**Session theme:** Continue full migration mode after Science.

**Changed:**
- Added shared Mathematics v4 migrator: `app/lib/v4-math-helpers.ts`.
- Updated `app/lib/p4-math-topics.ts` so all 12 P4 Mathematics topics render through upper-primary v4.
- Updated `app/lib/p5-math-topics.ts` so all 12 P5 Mathematics topics render through upper-primary v4.
- Added migration note: `docs/ops/v4-p4-p5-math-migration-2026-07-12.md`.
- Updated checklist, status and handoff.

**Important:**
- This is a structural v4 migration, not final manual deepening of every Maths topic.
- Next Maths work should hand-deepen priority P4/P5 topics.

**Verified:**
- `cd app && npm run build` passed with 356 static pages.

---

## v1.8.58 — 2026-07-12 — P5 Integrated Science v4 manual deepening complete

**Session theme:** Finish P5 Science in full migration mode.

**Changed:**
- Completed full P5 Keeping Poultry and Bees v4 beyond the original breeds model.
- Hand-deepened P5 Measurement in v4.
- Hand-deepened P5 Immunisation in v4.
- Hand-deepened P5 Crop Growing in v4.
- Hand-deepened P5 Bacteria and Fungi in v4.
- Hand-deepened P5 Types of Changes in v4.
- P5 Integrated Science is now complete at AI-builder v4 level across all 9 topics.
- Updated P4/P5 Science migration docs, checklist, status and handoff.

**Verified:**
- `cd app && npm run build` passed with 356 static pages.

---

## v1.8.57 — 2026-07-12 — P5 Science Digestive System, Soil and Heat Energy hand-deepened in v4

**Session theme:** Continue P5 Science v4 manual deepening.

**Changed:**
- Added hand-built v4 lessons for P5 Digestive System.
- Added hand-built v4 lessons for P5 Soil.
- Added hand-built v4 lessons for P5 Heat Energy.
- Set `useOnlyV4Lessons: true` for these topics.
- Updated P4/P5 Science migration docs, checklist, status and handoff.

**Verified:**
- `cd app && npm run build` passed with 356 static pages.

---

## v1.8.56 — 2026-07-12 — P4 Integrated Science v4 manual deepening complete

**Session theme:** Finish P4 Science in full migration mode.

**Changed:**
- Hand-deepened P4 Communicable Intestinal Diseases and Worm Infestation in v4.
- Hand-deepened P4 Vectors and Diseases in v4.
- Hand-deepened P4 Accidents, Poisoning and First Aid in v4.
- Hand-deepened P4 Our Food in v4.
- P4 Integrated Science is now complete at AI-builder v4 level across all 12 topics.
- Updated P4/P5 Science migration docs, checklist, status and handoff.

**Verified:**
- `cd app && npm run build` passed with 356 static pages.

---

## v1.8.55 — 2026-07-12 — V4 mobile overflow guard added

**Session theme:** Fix mobile responsiveness before continuing migration.

**Changed:**
- Added final mobile overflow/responsiveness guard to `app/app/globals.css`.
- Prevented page-wide horizontal overflow across app shell, v4 lessons, cards, module strips, images, grids and buttons.
- Adjusted v4 images to scale to phone width by default.
- Ensured buttons and text wrap instead of forcing the phone viewport wider.
- Updated v4 ops note and checklist.

**Verified:**
- `cd app && npm install && npm run build` passed with 356 static pages.

---

## v1.8.54 — 2026-07-12 — P4 Science Animal Life, Weather, Hygiene and Sanitation hand-deepened in v4

**Session theme:** Continue P4 Science v4 manual deepening.

**Changed:**
- Added hand-built v4 lessons for P4 Animal Life.
- Added hand-built v4 lessons for P4 Weather Changes Around Us.
- Added hand-built v4 lessons for P4 Personal Hygiene.
- Added hand-built v4 lessons for P4 Sanitation.
- Set `useOnlyV4Lessons: true` for all four topics.
- Updated P4/P5 Science migration docs, checklist, status and handoff.

**Verified:**
- `cd app && npm run build` passed with 356 static pages.

---

## v1.8.53 — 2026-07-12 — P4 Science Growing Crops, Human Body Organs and Teeth hand-deepened in v4

**Session theme:** Continue P4 Science upper-primary v4 manual deepening.

**Changed:**
- Added hand-built v4 lessons for P4 Growing Crops.
- Added hand-built v4 lessons for P4 Human Body Organs.
- Added hand-built v4 lessons for P4 Teeth.
- Set `useOnlyV4Lessons: true` for all three topics.
- Updated P4/P5 Science migration docs, checklist, status and handoff.

**Verified:**
- `cd app && npm run build` passed with 356 static pages.

---

## v1.8.52 — 2026-07-12 — P4 Science Plant Life hand-deepened in v4

**Session theme:** Create the first upper-primary Science v4 model topic.

**Changed:**
- Added hand-built `P4_PLANT_LIFE_V4` lessons in `app/lib/p4-science-topics.ts`.
- Added `useOnlyV4Lessons` support to `Topic` and `app/lib/v4-science-helpers.ts` so hand-built v4 topics can override generated structural lessons.
- P4 Plant Life now has five v4 lessons: What are plants, Parts of a Flowering Plant, Flowers/Fruits/Seeds, Germination/Plant Needs, Uses and Care of Plants.
- Updated P4/P5 Science migration doc, checklist, status and handoff.

**Verified:**
- `cd app && npm run build` passed with 356 static pages.

---

## v1.8.51 — 2026-07-12 — P4/P5 Science structurally migrated to v4

**Session theme:** Enter full migration mode beyond P3.

**Changed:**
- Added shared upper-primary Science v4 migrator: `app/lib/v4-science-helpers.ts`.
- Updated `app/lib/p4-science-topics.ts` so all 12 P4 Integrated Science topics render through upper-primary v4.
- Updated `app/lib/p5-science-topics.ts` so all 9 P5 Integrated Science topics render through upper-primary v4.
- Preserved the hand-built P5 Poultry Breeds v4 lesson and combined it with generated v4 lessons from existing P5 Poultry subtopics.
- Added migration note: `docs/ops/v4-p4-p5-science-migration-2026-07-12.md`.
- Updated checklist, status and handoff.

**Important:**
- This is a subject-wide structural v4 migration, not final manual deepening of every P4/P5 Science topic.
- Next manual deepening target should be P4 Science Plant Life.

**Verified:**
- `cd app && npm run build` passed with 356 static pages.

---

## v1.8.50 — 2026-07-12 — P3 Religious Education migrated to v4

**Session theme:** Finish P3 v4 migration before moving to other classes.

**Changed:**
- Migrated P3 Religious Education CRE/IRE topics to lower-primary v4.
- `app/lib/p3-re-topics.ts` now sets `contentFormat: "lower-primary-v4"` and creates v4 lessons for all 18 RE topics.
- `app/lib/content-blocks.ts` now supports `Religious Education` as a lower-primary learning area.
- P3 RE now uses the mobile-first v4 lesson/module stepper instead of old RE modules.
- Updated v4 ops note, P3 RE source note, checklist, status and handoff.

**Coverage:**
- 8 CRE topics migrated to v4.
- 10 IRE topics migrated to v4.
- 18 total P3 RE topics migrated to v4.

**Verified:**
- `cd app && npm run build` passed with 356 static pages.

---

## v1.8.49 — 2026-07-12 — P3 thematic v4 manual deepening complete

**Session theme:** Finish the real P3 thematic migration work.

**Changed:**
- Hand-deepened P3 Theme 7: Managing Resources.
- Hand-deepened P3 Theme 8: Keeping Peace.
- Hand-deepened P3 Theme 9: Culture and Gender.
- Hand-deepened P3 Theme 11: Basic Technology.
- Hand-deepened P3 Theme 12: Energy.
- All 12 P3 thematic themes now use lower-primary v4 lesson selector + mobile module stepper.
- All 36 official P3 thematic sub-themes are represented as child-facing v4 lessons.
- Updated v4 ops note, checklist, status and handoff.

**Important:**
- P3 thematic migration to v4 is complete at AI-builder level.
- P3 RE remains separate and still requires teacher review / possible v4 restructure later.
- Real-phone review remains needed before premium-final status.

**Verified:**
- `cd app && npm run build` passed with 356 static pages.

---

## v1.8.48 — 2026-07-12 — P3 Themes 2, 3 and 4 hand-deepened in v4

**Session theme:** Continue swift P3 v4 manual deepening.

**Changed:**
- Added hand-built v4 lessons for Theme 2: Livelihood.
- Added hand-built v4 lessons for Theme 3: Our Environment.
- Added hand-built v4 lessons for Theme 4: Environment and Weather.
- Deepened occupations, social services, service challenges, soil, natural environmental changes, human environmental activities, air, sun, water cycle and water management.
- Updated v4 ops note, checklist, status and handoff.

**Verified:**
- `cd app && npm run build` passed with 356 static pages.

---

## v1.8.47 — 2026-07-12 — P3 Themes 5 and 10 hand-deepened in v4

**Session theme:** Move swiftly through high-impact P3 manual deepening.

**Changed:**
- Added hand-built v4 lessons for P3 Theme 5: Living Things — Animals.
- Deepened living things, animal/bird/insect/fish classification, birds vs insects, domestic/wild birds, useful/harmful insects and animal care.
- Added hand-built v4 lessons for P3 Theme 10: Health.
- Deepened disease vectors, diseases spread by vectors, prevention actions and HIV/AIDS kindness/safety wording.
- Preserved age-appropriate health language and adult/health-worker guidance.
- Updated v4 ops note, checklist, status and handoff.

**Verified:**
- `cd app && npm run build` passed with 356 static pages.

---

## v1.8.46 — 2026-07-12 — P3 Theme 1 hand-deepened in v4

**Session theme:** Continue real P3 v4 migration and deepen the entry theme.

**Changed:**
- Added hand-built v4 lessons for P3 Theme 1: Our Sub-county/Division.
- Deepened Name and Location with sub-county/division definition, map vs picture, map key, compass directions and map drawing activity.
- Deepened Physical Features with definitions, types, examples, uses and care for natural features.
- Deepened People with family/clan/tribe/community vocabulary, leader types, leader roles and peaceful leadership role-play.
- Updated v4 ops note, checklist, status and handoff.

**Verified:**
- `cd app && npm run build` passed with 356 static pages.

---

## v1.8.45 — 2026-07-12 — Full P3 thematic structural v4 migration pass

**Session theme:** Continue the real P3 migration work after locking the mobile-first v4 structure.

**Changed:**
- Updated `app/lib/p3-thematic-topics.ts` so all 12 P3 thematic routes now use `contentFormat: "lower-primary-v4"`.
- All P3 thematic pages now render through the v4 lower-primary lesson selector + mobile module stepper.
- Kept P3 Theme 6 Plants as the hand-deepened model with three complete lessons.
- Added a generic v4 structural builder for the other 11 themes using the official NCDC map, `SUBTHEME_POLISH`, and each sub-theme visual.
- Updated v4 ops doc, checklist, status and handoff.

**Important:**
- This is a structural migration pass across P3, not final manual deepening for every theme.
- Student-facing format is now correct across P3 thematic pages.
- Manual deepening and teacher review still remain before premium-final status.

**Verified:**
- `cd app && npm run build` passed with 356 static pages.

---

## v1.8.44 — 2026-07-12 — V4 mobile polish and full P3 Plants migration

**Session theme:** Lock the v4 mobile-first presentation and begin real migration.

**Changed:**
- Added v4 lesson selector for themes/topics with multiple v4 lessons.
- Completed full P3 Theme 6 Plants migration to v4:
  - Plants and Their Habitats
  - Parts of a Flowering Plant
  - Crop-growing Practices
- Tightened mobile UI: compact numbered module chips, no duplicate module numbers inside mobile cards, cleaner lesson selector, and full-width mobile navigation buttons.
- Improved mobile image handling: v4 image cards allow horizontal swiping and show a hint when labels may be small.
- Logged `DEV-035`: v4 learner content must render as mobile-first modules/steps.
- Updated v4 pilot docs and checklist.

**Verified:**
- `cd app && npm run build` passed with 356 static pages.

---

## v1.8.43 — 2026-07-12 — V4 mobile module stepper added

**Session theme:** Make the v4 content structure mobile-first and less overwhelming.

**Changed:**
- Reworked `app/components/V4LessonViews.tsx` so v4 content renders one module/block at a time instead of one long scroll.
- Added module progress: `Module X of Y`, progress meter, horizontal module strip, Previous/Next buttons and Finish lesson CTA.
- Added mobile-first v4 stepper styles and larger image treatment in `app/app/globals.css`.
- Updated `docs/ops/v4-content-architecture-pilot-2026-07-12.md` and checklist.

**Verified:**
- `cd app && npm run build` passed with 356 static pages.

---

## v1.8.42 — 2026-07-12 — V4 lesson block pilot implemented

**Session theme:** Move from documentation to implementation of the NCDC-native v4 content structure.

**Changed:**
- Added typed v4 content block model: `app/lib/content-blocks.ts`.
- Extended `Topic` to support `contentFormat`, `lowerPrimaryLessons` and `upperPrimaryLessons`.
- Added v4 renderers in `app/components/V4LessonViews.tsx`.
- Updated `TopicTabs.tsx` to render v4 lessons before legacy v3 modular content.
- Added v4 styles to `app/app/globals.css`.
- Converted P3 pilot route: `/p3/theme/p3-theme-6-plants` → Parts of a Flowering Plant and their Uses.
- Converted P5 Science pilot route: `/science/p5/p5-keeping-poultry-bees` → Breeds of Poultry.
- Hid old P3 expected-outcome/theme-guide meta panel on the v4 lower-primary pilot.
- Added pilot note: `docs/ops/v4-content-architecture-pilot-2026-07-12.md`.
- Logged `DEV-034`: P1/P2 will eventually be in the same app, but are deferred until P3–P7 restructure is fixed.

**Verified:**
- `cd app && npm install && npm run build` passed with 356 static pages.

---

## v1.8.41 — 2026-07-12 — NCDC-native content architecture v4 correction documented

**Session theme:** Founder review identified a major structure problem: fullness cannot mean more meta modules. Lessons must teach children directly.

**Changed:**
- Added `docs/spec/ncdc-native-content-architecture-v4-2026-07-12.md`.
- Logged `DEV-033`: learner-facing content must use direct lesson blocks, not curriculum meta wrappers.
- Updated `STATUS.md`, `HANDOFF.md` and `CHECKLIST.md` to make the v4 correction the next active work before premium-final push.

**Important:**
- Do not keep expanding P3/P4/P5 with the current meta-module pattern.
- Pilot v4 on one P3 sub-theme and one P5 Science sub-topic before broad migration.
- P3 remains thematic because NCDC lower primary is thematic, but the learner UI should be direct: vocabulary, story, definitions, types, examples, phonics/numeracy, activity and exercise.
- P4–P7 should use chalkboard-note structure: definition, classifications, examples, characteristics/uses, diagrams and evaluation.

---

## v1.8.40 — 2026-07-12 — P3 push package prepared

**Session theme:** Clear the P3 milestone for manual overwrite and push.

**Changed:**
- Added `docs/ops/p3-push-package-2026-07-12.md` with overwrite/add/delete lists, build status, commit message and post-deploy smoke-test checklist.
- Added a post-P3 scope note to `STATUS.md` and `HANDOFF.md`: do not start P2/P1 unless a separate lower-primary track is explicitly decided and documented.

**Verified:**
- Latest app build remains green from the P3 QA pass: `cd app && npm run build` passed with 356 static pages.

---

## v1.8.39 — 2026-07-12 — P3 QA tightening after RE beta

**Session theme:** Continue internal quality review before teacher verification.

**Changed:**
- Tightened P3 thematic quiz distractors so wrong choices are neutral and do not accidentally overlap with Health, Water, Resources or Energy content.
- Tightened P3 RE quiz distractors so wrong choices do not overlap with cleanliness or faith-learning content.
- Updated P3 student Study Directory wording from “Your subjects” to “Your themes”.
- Updated P3 Study Directory guidance to explain that P3 is organised by themes with Religious Education as a separate NCDC section.
- Appended the QA note to `docs/ops/p3-review-polish-pass-2026-07-12.md`.

**Verified:**
- `cd app && npm run build` passed with 356 static pages.

---

## v1.8.38 — 2026-07-12 — P3 review/polish pass and P3 RE beta added

**Session theme:** Work for both completion and quality: polish P3 thematic content and build P3 CRE/IRE beta from official NCDC map plus trusted source cross-checks.

**Changed:**
- Internally reviewed and polished the full P3 thematic beta.
- Added a tailored `SUBTHEME_POLISH` layer in `app/lib/p3-thematic-topics.ts` for all 36 P3 thematic sub-themes.
- Improved P3 thematic modules with specific explanations, local tasks, values/actions, numeracy practice, English sentence frames and creative activities.
- Researched trusted CRE/IRE support sources and documented the source register in `docs/ops/p3-re-source-research-2026-07-12.md`.
- Logged `DEV-032`: P3 RE beta may use trusted faith sources under NCDC map control, with teacher review required.
- Updated `content/curriculum/p3-re.json` verification metadata.
- Added P3 RE beta content library: `app/lib/p3-re-topics.ts`.
- Added P3 RE routes: `/p3/re` and `/p3/re/[topic]`.
- Added 18 P3 RE SVG visuals under `app/public/images/p3/re/`.
- Updated `/p3-home`, Study Directory, Practice suggestions, AppNav and AuthGate for P3 RE.
- Added P3 review/polish pass doc: `docs/ops/p3-review-polish-pass-2026-07-12.md`.
- Updated status/checklist/handoff/start/manual task docs.

**Coverage added:**
- P3 RE: 8 CRE topics + 10 IRE topics = 18 topics.
- 54 P3 RE modules.
- 144 P3 RE quiz questions.
- 18 P3 RE visuals.

**Important:**
- P3 remains thematic-first.
- P3 RE is separate because NCDC places RE outside the thematic matrix.
- No `/re/p3`, `/math/p3`, `/english/p3`, `/science/p3`, or `/social-studies/p3` routes were added.
- P3 thematic and RE content remain beta until human/teacher review.

**Verified:**
- `cd app && npm run build` passed with 356 static pages.

---

## v1.8.37 — 2026-07-12 — P3 thematic beta completed across all 12 themes

**Session theme:** Continue P3 the NCDC way by extending the approved thematic-first pattern from Theme 1 to all official P3 themes.

**Changed:**
- Rebuilt `app/lib/p3-thematic-topics.ts` as the full P3 thematic beta content layer.
- Added all 12 official P3 thematic themes from `content/curriculum/p3-thematic.json`.
- Built all 36 official P3 sub-themes with 3 modules each: Understand, Daily-life/values, and Theme skills.
- Added 108 learner-facing P3 thematic modules and 96 theme quiz questions.
- Added 36 new P3 sub-theme SVG visuals under `app/public/images/p3/`.
- Updated `/p3-home` to show all 12 themes and 36 sub-themes.
- Updated `/p3/theme/[theme]` with a visible expected-outcome/theme-guide overview before the module directory.
- Updated Study and Practice P3 cards to expose the broader thematic beta.
- Added completion note: `docs/ops/p3-thematic-beta-completion-2026-07-12.md`.
- Updated the P3 structure doc with the implementation status.

**Important:**
- P3 remains thematic-first.
- No subject-style P3 routes were added.
- P3 RE is still not built; `content/curriculum/p3-re.json` needs CRE/IRE review before learner-facing build.
- P3 thematic content is beta at AI-builder level and still needs human/founder/teacher review before premium-final status.

**Verified:**
- `cd app && npm run build` passed with 337 static pages.

---

## v1.8.36 — 2026-07-09 — First P3 thematic beta slice added

**Session theme:** Build P3 the NCDC way: thematic-first, first theme only.

**Changed:**
- Added P3 local visuals for Theme 1 under `app/public/images/p3/`.
- Added `app/lib/p3-thematic-topics.ts` for Theme 1, “Our Sub-county/Division”.
- Added `/p3-home`.
- Added `/p3/theme/[theme]` with static params for Theme 1 only.
- Extended local sign-in/session/navigation/study/practice support to P3.
- Extended teacher-set question grade typing/options to P3.
- Updated status/checklist/handoff/start docs.

**Important:**
- Only P3 Theme 1 is live beta.
- Remaining P3 themes are not built yet.
- No subject-style P3 routes were added.

**Verified:**
- `cd app && npm run build` passed with 326 static pages.

---

## v1.8.35 — 2026-07-09 — P3 thematic-first app structure locked

**Session theme:** Decide P3 learner-facing architecture before building routes.

**Changed:**
- Logged DEV-031: P3 must be thematic-first, not subject-route-first.
- Added `docs/ops/p3-thematic-app-structure-2026-07-09.md`.
- Updated status/checklist/handoff/start docs.

**Decision:**
- Recommended routes: `/p3-home` and `/p3/theme/[theme]`.
- Do not build `/math/p3`, `/science/p3`, etc. unless a bridge design is documented.

**Next:**
- Build first P3 beta slice only: Theme 1, “Our Sub-county/Division”.

---

## v1.8.34 — 2026-07-09 — P3 NCDC thematic research and maps added

**Session theme:** Start P3 correctly with NCDC research and curriculum maps, no routes/content.

**Changed:**
- Confirmed P3 is lower-primary thematic curriculum, not P4–P7 subject-based curriculum.
- Added `content/curriculum/p3-thematic.json` with 12 themes and 36 sub-themes.
- Added `content/curriculum/p3-re.json` with CRE/IRE map from the official P3 RE section.
- Added `docs/ops/ncdc-p3-curriculum-research-2026-07-09.md`.
- Updated status/checklist/handoff/start docs.

**Important:**
- No P3 learner-facing routes or content were added.
- P3 app structure must be decided before build; thematic-first is recommended.

---

## v1.8.33 — 2026-07-09 — P4/P5 visuals-depth pass closed

**Session theme:** Close the P4/P5 fullness pass before starting P3 research.

**Changed:**
- Ran final P4/P5 module/image audit.
- Confirmed every P4/P5 topic has at least 2 modules and at least 1 visual/image attachment.
- Confirmed rebuilt P5 Science and P5 Social Studies have 3 modules and 3 visuals per topic.
- Confirmed P4 English, P4 RE and P5 English have 3 modules and 3 visuals per topic.
- Confirmed P5 RE generates 3 modules per topic with visual support.
- Updated status/checklist/handoff to make P3 NCDC research the next active milestone.

**Verified:**
- `cd app && npm run build` passed with 324 static pages.

**Important:**
- Step 1 and Step 2 are closed at AI-builder level.
- P3 must start with NCDC research and mapping, not routes/content.

---

## v1.8.32 — 2026-07-09 — P4/P5 visuals and depth pass started

**Session theme:** Respond to fullness concern: coverage is not enough; P4/P5 need diagrams and deeper topic modules before P3.

**Changed:**
- Added local SVG diagrams for P4/P5 Math, Science and Social Studies under `app/public/images/`.
- Attached diagrams to P4 Math, P4 Science, P4 Social Studies, P5 Math, P5 Science and P5 Social Studies topic modules.
- Deepened P4 Science Plant Life / Flowering Plants with flowers, fruits, seeds and germination modules.
- Deepened thin P5 Mathematics topics with practical/application modules.
- Filled additional P4 no-image topic gaps across Math, Science and Social Studies.
- Corrected P5 Science and P5 Social Studies visual attachments so all P5 Science/SST topics now have images.
- Rebuilt P5 Integrated Science to 3 modules per topic with visuals, practical applications and safer health/science wording.
- Rebuilt P5 Social Studies to 3 modules per topic with visuals and stronger map/history/civic reasoning.
- Deepened P5 Religious Education with CRE/IRE visuals and a third reasoning/application module per topic.
- Deepened P4 English and P5 English with visuals and third writing/speaking practice modules.
- Deepened P4 Religious Education with visuals and third reasoning/respectful-application modules.
- Added `docs/ops/p4-p5-visuals-depth-pass-2026-07-09.md`.
- Updated checklist to enforce the exact order: visuals → depth → P3 research.

**Verified:**
- `cd app && npm run build` passed with 324 static pages.
- Final P4/P5 module/image audit passed; Step 1 and Step 2 closed at AI-builder level.
- `cd app && npm run build` passed after additional P4 visual gap fill with 324 static pages.
- `cd app && npm run build` passed after P5 Science/SST visual coverage fix with 324 static pages.
- `cd app && npm run build` passed after P5 Science full depth rebuild with 324 static pages.
- `cd app && npm run build` passed after P5 Social Studies full depth rebuild with 324 static pages.
- `cd app && npm run build` passed after P5 RE depth/visual upgrade with 324 static pages.
- `cd app && npm run build` passed after English/RE depth upgrade with 324 static pages.

**Important:**
- P3 should not start until the P4/P5 visuals/depth pass is intentionally closed.

---

## v1.8.31 — 2026-07-09 — P4–P7 review pass started before next class

**Session theme:** Pause after P4 completion and run the routine review gate before moving to the next class.

**Changed:**
- Re-audited P4/P5/P6/P7 curriculum-map topic IDs against app topic IDs.
- Confirmed zero missing top-level mapped topics across P4–P7 live classes.
- Corrected stale P5 Mathematics comment from “draft” to “live beta”.
- Balanced P4 quiz/try-this correct answer positions across A/B/C/D in all five P4 topic libraries.
- Checked P4 Mathematics worked examples and quiz answers for arithmetic/readability; no arithmetic corrections needed.
- Deepened P4 Science by adding a second practical/health-safety application module to all 12 P4 Science topics.
- Rebalanced P4 answer positions again after Science deepening.
- Improved P4 RE topic-specific daily-life applications, quiz prompts and respectful Prophet Muhammad (PBUH) wording while keeping abridged-source limitation visible.
- Completed P4 quick AI-builder quality pass across Math, English, Science, SST and RE; human/teacher review remains open before premium-final status.
- Balanced P5 quiz/try-this correct answer positions across A/B/C/D in all five P5 topic libraries.
- Improved P5 English template-like topics: Letter Writing, Communication, Culture, Peace and Security, and Services: Banking now have topic-specific examples/quizzes/writing tasks.
- Improved P5 RE respectful IRE wording so Prophet Muhammad references include (PBUH) where applicable.
- Completed P5 AI-level quality pass for this round; human/teacher review remains open.
- Balanced P6 answer positions across A/B/C/D, spot-checked P6 Science/SST, and fixed P6 RE Prophet Muhammad (PBUH) wording.
- Completed P6 AI-level premium additions review for this round; human/teacher review remains open.
- Balanced P7 answer positions across A/B/C/D and spot-checked P7 Math/Science/SST/RE high-risk wording.
- Completed P7 AI-level premium additions review for this round; human/teacher PLE review remains open.
- Marked P4–P7 AI-level review/improvement pass complete for this round.
- Rebalanced P4 answer positions again after RE improvement.
- Added `docs/ops/p4-p7-live-beta-review-pass-2026-07-09.md`.
- Updated status/checklist/handoff/manual tasks to make review pass the next step before P3.

**Verified:**
- `cd app && npm install && npm run build` passed with 324 static pages.
- `cd app && npm run build` passed again after P4 answer distribution fix with 324 static pages.
- `cd app && npm run build` passed again after P4 Science deepening with 324 static pages.
- `cd app && npm run build` passed again after P4 RE improvement with 324 static pages.
- `cd app && npm run build` passed after P5 answer distribution fix with 324 static pages.
- `cd app && npm run build` passed after P5 English quality pass with 324 static pages.
- `cd app && npm run build` passed after P5 RE wording fix with 324 static pages.
- `cd app && npm run build` passed after P6 review fixes with 324 static pages.
- `cd app && npm run build` passed after P7 review fixes with 324 static pages.

**Important:**
- This pass confirms top-level coverage and build health, not premium-final quality.
- Do not start P3 until P4/P5/P6/P7 review/improvement tasks are documented and intentionally closed or deferred.

---

## v1.8.30 — 2026-07-09 — P4 Religious Education live beta added and P4 completed

**Session theme:** Finish P4 live beta across all five app subjects while keeping the P4 RE source limitation explicit.

**Changed:**
- Added `app/lib/p4-re-topics.ts` with 25 P4 Religious Education beta topics matching `content/curriculum/p4-re.json`.
- Added live beta routes: `/re/p4` and `/re/p4/[topic]`.
- Updated `/p4-home` to show all five P4 subjects.
- Added P4 RE to the Study directory and practice suggestions.
- Updated status/checklist/handoff/roadmap/P4 research docs.
- Added P4 completion audit doc: `docs/ops/p4-live-beta-completion-audit-2026-07-09.md`.

**Important:**
- P4 is now live beta across all five app subjects: Mathematics, English, Integrated Science, Social Studies and Religious Education.
- P4 RE is live beta from the NCDC/MoES Primary 4 Abridged Curriculum and still needs confirmation against the full standard P4 CRE/IRE syllabus or qualified RE teacher review before premium-final status.

**Verified:**
- P4 RE topic IDs match `content/curriculum/p4-re.json`.
- `cd app && npm run build` passed with 324 static pages.

---

## v1.8.29 — 2026-07-09 — P4 Social Studies live beta added

**Session theme:** Complete the currently safe P4 official-source subject rollout by adding Social Studies.

**Changed:**
- Added `app/lib/p4-social-topics.ts` with 6 P4 Social Studies beta topics matching `content/curriculum/p4-social-studies.json`.
- Added live beta routes: `/social-studies/p4` and `/social-studies/p4/[topic]`.
- Updated `/p4-home` to show P4 Mathematics, English, Integrated Science and Social Studies.
- Added P4 Social Studies to the Study directory and practice suggestions.
- Updated status/checklist/handoff/roadmap/P4 research docs.

**Important:**
- P4 Mathematics, English, Integrated Science and Social Studies are live beta.
- P4 Religious Education remains map/planning only because its current map is from the NCDC/MoES abridged curriculum and still needs full standard-syllabus confirmation before premium-final status.

**Verified:**
- P4 Social Studies topic IDs match `content/curriculum/p4-social-studies.json`.
- `cd app && npm run build` passed with 298 static pages.

---

## v1.8.28 — 2026-07-09 — P4 Integrated Science live beta added

**Session theme:** Continue P4 with the next NCDC-backed subject: Integrated Science.

**Changed:**
- Added `app/lib/p4-science-topics.ts` with 12 P4 Integrated Science beta topics matching `content/curriculum/p4-science.json`.
- Added live beta routes: `/science/p4` and `/science/p4/[topic]`.
- Updated `/p4-home` to show P4 Mathematics, English and Integrated Science.
- Added P4 Science to the Study directory and practice suggestions.
- Updated status/checklist/handoff/roadmap/P4 research docs.

**Important:**
- P4 Mathematics, P4 English and P4 Integrated Science are live beta.
- P4 Social Studies and Religious Education remain map/planning only.
- P4 Science health-sensitive wording needs human/teacher review before premium-final status.

**Verified:**
- P4 Science topic IDs match `content/curriculum/p4-science.json`.
- `cd app && npm run build` passed with 291 static pages.

---

## v1.8.27 — 2026-07-09 — P4 English live beta added

**Session theme:** Continue P4 systematically by adding the next official-source subject: English.

**Changed:**
- Added `app/lib/p4-english-topics.ts` with 8 P4 English beta topics matching `content/curriculum/p4-english.json`.
- Added live beta routes: `/english/p4` and `/english/p4/[topic]`.
- Updated `/p4-home` to show P4 Mathematics and P4 English.
- Added P4 English to the Study directory and practice suggestions.
- Updated status/checklist/handoff/roadmap/P4 research docs.

**Important:**
- P4 Mathematics and P4 English are live beta.
- P4 Science, Social Studies and Religious Education remain map/planning only.
- P4 RE still needs full standard-syllabus confirmation before premium-final status.

**Verified:**
- P4 English topic IDs match `content/curriculum/p4-english.json`.
- `cd app && npm run build` passed with 278 static pages.

---

## v1.8.26 — 2026-07-09 — P4 Mathematics live beta started

**Session theme:** Start P4 learner-facing content only where the NCDC map is verified: Mathematics first.

**Changed:**
- Added `app/lib/p4-math-topics.ts` with 12 P4 Mathematics beta topics matching `content/curriculum/p4-math.json`.
- Added `/p4-home`.
- Added live beta routes: `/math/p4` and `/math/p4/[topic]`.
- Extended local student sign-in, session routing, navigation and learner profile typing to include P4.
- Added P4 Mathematics to the Study directory and practice suggestions.
- Extended teacher-set question grade options to include P4.
- Updated status/checklist/handoff/roadmap/P4 research docs.

**Important:**
- Only P4 Mathematics is live beta.
- P4 English, Science, Social Studies and Religious Education remain map/planning only.
- P4 RE is still based on NCDC/MoES abridged curriculum and needs full standard-syllabus confirmation before premium-final status.

**Verified:**
- `cd app && npm run build` passed with 269 static pages.

---

## v1.8.25 — 2026-07-09 — P4 Mathematics verified against official NCDC PDF

**Session theme:** Continue P4 the right way: verify curriculum maps before building learner-facing routes.

**Changed:**
- Corrected `content/curriculum/p4-math.json` against the official NCDC P4 Mathematics Syllabus PDF.
- Expanded P4 Mathematics from the earlier extract-based 10-topic map to the official 12-topic structure, adding `2-Dimensional Geometry`, `3-Dimensional Geometry`, and `Equations without Letters`.
- Updated `docs/ops/ncdc-p4-curriculum-research-2026-07-09.md` with verified Mathematics structure and a clearer Religious Education source block.
- Updated `STATUS.md`, `HANDOFF.md`, `CHECKLIST.md`, `START_HERE.md`, and the primary content roadmap with the P4 state.

**Important:**
- No P4 app routes or learner-facing content were added.
- `content/curriculum/p4-re.json` is still missing by design because a reliable P4 CRE/IRE topic list has not been found. Do not invent it.

**Verified:**
- `cd app && npm run build` passed with 255 static pages.

---

## v1.8.24 — 2026-07-09 — P4 curriculum research and maps started

**Session theme:** Move beyond P5 by beginning P4 the correct way: research and curriculum maps first, no learner-facing content yet.

**Changed:**
- Added `content/curriculum/p4-english.json` from NCDC P4 English syllabus structure.
- Added `content/curriculum/p4-science.json` from NCDC P4 Integrated Science syllabus structure.
- Added `content/curriculum/p4-social-studies.json` from NCDC P4 Social Studies syllabus structure.
- Added `content/curriculum/p4-math.json` from NCDC P4 Mathematics PDF extract; marked for clean-copy verification.
- Added `docs/ops/ncdc-p4-curriculum-research-2026-07-09.md`.

**Important:**
- No P4 app routes or content layers were added.
- P4 Religious Education is not mapped yet because a reliable topic list was not found in this pass.

---

## v1.8.23 — 2026-07-09 — P5/P6/P7 curriculum alignment audit completed

**Session theme:** Confirm that live beta content matches curriculum maps at top-level topic coverage before moving forward.

**Changed:**
- Added `content/curriculum/p7-re.json` so P7 Religious Education has a curriculum map.
- Audited P5, P6 and P7 curriculum maps against app content files.
- Confirmed zero missing top-level topics across all mapped P5/P6/P7 subjects.
- Added audit doc: `docs/ops/curriculum-alignment-audit-p5-p7-2026-07-09.md`.
- Updated status/checklist/handoff.

**Verified:**
- `cd app && npm run build` passed with 255 static pages.

**Important:**
- This proves top-level topic coverage, not perfection of every explanation/answer. Human review is still required.

---

## v1.8.22 — 2026-07-09 — P5 Religious Education made live beta

**Session theme:** Complete the first live-beta P5 subject sweep by adding CRE/IRE Religious Education.

**Changed:**
- Added P5 Religious Education beta content layer: `app/lib/p5-re-topics.ts`.
- Added live beta P5 RE routes: `/re/p5` and `/re/p5/[topic]`.
- Added P5 RE to Study directory and P5 practice suggestions.
- Updated roadmap/status/checklist/handoff.

**Verified:**
- `cd app && npm run build` passed with 255 static pages.

**Important:**
- All current P5 subjects are now live beta. They still require NCDC/human review before public-final release.

---

## v1.8.21 — 2026-07-09 — P5 Social Studies made live beta

**Session theme:** Continue live-beta P5 expansion with Social Studies while keeping NCDC-first and beta-quality rules.

**Changed:**
- Added P5 Social Studies beta content layer: `app/lib/p5-social-topics.ts`.
- Added live beta P5 Social Studies routes: `/social-studies/p5` and `/social-studies/p5/[topic]`.
- Added P5 Social Studies to Study directory and P5 practice suggestions.
- Updated roadmap/status/checklist/handoff.

**Verified:**
- `cd app && npm run build` passed with 234 static pages.

**Important:**
- P5 Social Studies is live for beta testers, not public-final. It still requires NCDC/human review.

---

## v1.8.20 — 2026-07-09 — P5 Science made live beta

**Session theme:** Continue live-beta P5 expansion with Integrated Science while keeping NCDC-first and beta-quality rules.

**Changed:**
- Added P5 Science beta content layer: `app/lib/p5-science-topics.ts`.
- Added live beta P5 Science routes: `/science/p5` and `/science/p5/[topic]`.
- Added P5 Science to Study directory and P5 practice suggestions.
- Updated roadmap/status/checklist/handoff.

**Verified:**
- `cd app && npm run build` passed with 221 static pages.

**Important:**
- P5 Science is live for beta testers, not public-final. It still requires NCDC/human review.

---

## v1.8.19 — 2026-07-09 — P5 English made live beta and beta quality rule locked

**Session theme:** Continue the live-beta approach while making clear that beta still requires our best internal quality.

**Changed:**
- Added P5 English beta content layer: `app/lib/p5-english-topics.ts`.
- Added live beta P5 English routes: `/english/p5` and `/english/p5/[topic]`.
- Added P5 English to Study directory and P5 practice suggestions.
- Added beta quality rule to core docs: beta does not mean rough draft.
- Logged decision `DEV-030` in `DECISIONS.md`.

**Verified:**
- `cd app && npm run build` passed with 211 static pages.

---

## v1.8.18 — 2026-07-09 — P5 Mathematics made live beta

**Session theme:** Change from hidden draft content to live beta content for tester review.

**Changed:**
- Added P5 as a student sign-in option.
- Added `/p5-home`.
- Added live beta P5 Mathematics routes: `/math/p5` and `/math/p5/[topic]`.
- Marked P5 Mathematics topics as `reviewStatus: "beta"` instead of draft.
- Added P5 Mathematics to the Study directory for P5 learners and teacher content library.
- Added P5 practice cards that point learners into P5 Maths topic quizzes.
- Extended teacher-set question grade support to P5.

**Verified:**
- `cd app && npm run build` passed with 202 static pages.

**Important:**
- P5 Mathematics is live for beta testers, not public-final. It still requires NCDC/human review.

---

## v1.8.17 — 2026-07-09 — Corrected P5 Mathematics draft content layer added

**Session theme:** Resume P5 build carefully under the NCDC-first rule, without exposing routes prematurely.

**Changed:**
- Added `app/lib/p5-math-topics.ts` with 12 draft P5 Mathematics topics aligned to the researched P5 Mathematics map.
- Did not add P5 learner-facing routes or navigation.
- Updated roadmap/status/checklist/handoff to show P5 Mathematics content exists for internal review only.

**Verified:**
- `cd app && npm run build` passed with 188 static pages.

**Important:**
- P5 Mathematics remains draft/internal-review only until checked against official/trusted NCDC material.

---

## v1.8.16 — 2026-07-09 — NCDC-first rule promoted to top-level documentation

**Session theme:** Make the curriculum-alignment rule impossible to miss.

**Changed:**
- Added a major heading to `STATUS.md`, `HANDOFF.md`, `START_HERE.md`, `docs/ops/content-corrections-workflow-2026-07-09.md`, and `docs/ops/primary-content-completion-roadmap-2026-07-09.md`: **NON-NEGOTIABLE RULE: NCDC FIRST, BUILD SECOND**.
- Logged decision `DEV-029` in `DECISIONS.md`.
- Updated `CHECKLIST.md` to record the rule as locked.

**Rule:** Research NCDC → document structure → create/update curriculum map → build content → review/correct → expose as premium-ready.

---

## v1.8.15 — 2026-07-09 — P5 curriculum research correction and premature routes removed

**Session theme:** Enforce strict NCDC-first workflow before further P5 buildout.

**Changed:**
- Downloaded/parsed a P5 Set One curriculum copy attributed to NCDC and cross-checked with catalogue evidence.
- Corrected `content/curriculum/p5-math.json` to the researched NCDC 12-topic Mathematics structure.
- Corrected `content/curriculum/p5-english.json` to the researched NCDC 8-topic English structure.
- Corrected `content/curriculum/p5-science.json`, `p5-social-studies.json`, and `p5-re.json` to researched P5 Set One topic structures.
- Removed premature P5 Maths/English draft app routes and content layers because P5 learner-facing content must be built only after verified curriculum mapping.
- Added `docs/ops/ncdc-p5-curriculum-research-2026-07-09.md`.

**Verified:**
- `cd app && npm run build` passed with 188 static pages.

**Important:**
- Do not build P5 learner-facing content again until the updated maps are verified against an official/trusted NCDC copy.

---

## v1.8.14 — 2026-07-09 — P5 Mathematics and English draft content/routes added

**Session theme:** Continue P5 expansion structure by adding the first draft learner-facing content layers for internal review.

**Changed:**
- Added `app/lib/p5-math-topics.ts` with 6 draft P5 Mathematics topics.
- Added `/math/p5` and `/math/p5/[topic]` routes.
- Added `app/lib/p5-english-topics.ts` with 5 draft P5 English topics.
- Added `/english/p5` and `/english/p5/[topic]` routes.
- Updated roadmap/status/checklist/handoff.

**Important:**
- P5 remains draft/internal-review only and is not yet linked into student sign-in or the main Study directory.
- Verify against official NCDC P5 materials before exposing it as a product option.

**Verified:**
- `cd app && npm run build` passed with 201 static pages.

---

## v1.8.13 — 2026-07-09 — P5 draft curriculum planning maps added

**Session theme:** Start the next class expansion at planning level while founder reviews the pushed P7/P6 content.

**Changed:**
- Added `content/curriculum/p5-math.json` with 6 draft P5 Mathematics topics.
- Added `content/curriculum/p5-english.json` with 5 draft P5 English topics.
- Added `content/curriculum/p5-science.json` with 5 draft P5 Integrated Science topics.
- Added `content/curriculum/p5-social-studies.json` with 5 draft P5 Social Studies topics.
- Added `content/curriculum/p5-re.json` with 6 draft P5 Religious Education topics.
- Updated roadmap/status/checklist/handoff.

**Important:**
- P5 maps are marked `draft-needs-ncdc-review`. They are planning scaffolds only and must be verified against official NCDC P5 materials before learner-facing content/routes are built.

---

## v1.8.12 — 2026-07-09 — P6 Science, Social Studies and Religious Education premium strengthening starts

**Session theme:** Complete the first P6 premium strengthening sweep across the remaining P6 subjects.

**Changed:**
- Added premium practice/application subtopics to all 5 P6 Science topics in `app/lib/p6-science-topics.ts`.
- Added premium practice/reasoning subtopics to all 6 P6 Social Studies topics in `app/lib/p6-social-topics.ts`.
- Added premium practice/application subtopics to all 6 P6 Religious Education topics in `app/lib/p6-re-topics.ts`.
- Updated roadmap/status/checklist/handoff.

**Verified:**
- `cd app && npm run build` passed with 188 static pages.

**Still needed:**
- Human/founder/teacher review of upgraded P6 content.
- Plan next class expansion after P6 review.

---

## v1.8.11 — 2026-07-09 — P6 Mathematics and English premium strengthening starts

**Session theme:** Move from P7 premium strengthening into P6, starting with Mathematics and English.

**Changed:**
- Added premium practice subtopics/modules to all 6 P6 Mathematics topics in `app/lib/p6-math-topics.ts`.
- Strengthened P6 Maths real-life word problems, operation choice, large-number reasoning, fractions/money, geometry working, data and simple equations.
- Added premium practice subtopics/modules to all 5 P6 English topics in `app/lib/p6-english-topics.ts`.
- Strengthened P6 English road safety messages, debate points, family descriptions, relative clauses and polite dining language.
- Updated roadmap/status/checklist/handoff.

**Verified:**
- `cd app && npm run build` passed with 188 static pages.

**Still needed:**
- Human/founder review of P6 Maths and English additions.
- Continue P6 premium audit with Science next.

---

## v1.8.10 — 2026-07-09 — P7 Social Studies and Religious Education premium strengthening passes begin

**Session theme:** Continue the premium content-first roadmap by adding reasoning/application layers to P7 Social Studies and Religious Education.

**Changed:**
- Added premium reasoning/casework subtopics to all 10 P7 Social Studies topics in `app/lib/social-topics.ts`.
- Strengthened map answers, climate graph reasoning, vegetation conservation, migration/settlement reasoning, history chronology, post-independence problem/solution answers, economic development reasoning and organisation casework.
- Added premium application subtopics to all 14 P7 Religious Education topics in `app/lib/re-topics.ts`.
- Strengthened respectful CRE/IRE written-answer application around faith, commandments, parables, sacraments, Tawheed, pillars, Qur'an/Hadith, Akhlaq, Seerah and social justice.
- Updated content roadmap/checklist/handoff/status to show premium strengthening now covers all P7 subjects.

**Verified:**
- `cd app && npm run build` passed with 188 static pages.

**Still needed:**
- Human/founder/teacher review of all P7 premium additions.
- Begin P6 premium audit after P7 review/refinement.

---

## v1.8.9 — 2026-07-09 — P7 Science premium strengthening pass begins

**Session theme:** Continue the premium content-first roadmap by adding application/case-practice layers to all P7 Integrated Science topics.

**Changed:**
- Added premium application subtopics/modules to all 8 P7 Science topics in `app/lib/science-topics.ts`.
- Strengthened diagram labelling, circuit troubleshooting, health case reasoning, light/ray interpretation, ecosystem cause-effect reasoning, energy conservation, mechanical advantage and friction decisions.
- Updated content roadmap/checklist/handoff/status to show P7 Science premium pass has started.

**Verified:**
- `cd app && npm run build` passed with 188 static pages.

**Still needed:**
- Human/founder/teacher review of upgraded Science content, especially health-sensitive wording.
- Continue premium audit with P7 Social Studies next.

---

## v1.8.8 — 2026-07-09 — P7 English premium strengthening pass begins

**Session theme:** Continue the premium content-first roadmap by adding deeper exam-practice layers to all P7 English topics.

**Changed:**
- Added premium exam-practice subtopics/modules to all 7 P7 English topics in `app/lib/english-topics.ts`.
- Strengthened comprehension, written-answer quality, letter format decisions, examination rubrics, email/message writing, civic passage reading, environmental persuasive writing and ceremony programme/speech writing.
- Updated content roadmap/checklist/handoff/status to show P7 English premium pass has started.

**Verified:**
- `cd app && npm run build` passed with 188 static pages.

**Still needed:**
- Human/founder review of upgraded English content.
- Continue premium audit with P7 Science next.

---

## v1.8.7 — 2026-07-09 — Documentation command center tightened

**Session theme:** Make the core docs crystal clear so the project can resume safely even if the assistant context is lost.

**Changed:**
- Added a current operating snapshot to `STATUS.md`.
- Added a current command center to `HANDOFF.md`.
- Added Phase 19 P7 Premium Content Completion checklist.
- Added manual push task `MT-012` clarifying that the founder has not pushed yet and should request a file list when ready.

**No app code changed in this documentation pass.**

---

## v1.8.6 — 2026-07-09 — P7 Mathematics premium strengthening pass begins

**Session theme:** Start the content-first roadmap by upgrading the thinnest P7 Mathematics topics to a more premium modular standard.

**Changed:**
- Upgraded `app/lib/topics.ts` for Integers, Time, Data Handling and Graphs, Length/Mass/Capacity/Money, and Algebra.
- Added deeper subtopics/modules, worked examples, quick checks, common mistakes and stronger quiz explanations.
- Added visual briefs where useful for Integers, Data Handling and Algebra.
- Created audit note: `docs/ops/p7-math-premium-audit-2026-07-09.md`.

**Verified:**
- `cd app && npm run build` passed with 188 static pages.

**Still needed:**
- Founder/human review of upgraded Maths content.
- Continue premium audit with P7 English next.

---

## v1.8.5 — 2026-07-09 — Premium parent-funded content-first strategy

**Session theme:** Refine the student-first pivot into a premium parent-funded product strategy and make content completion the absolute priority.

**Changed:**
- Updated README/START_HERE/STATUS/HANDOFF to reflect premium parent-funded positioning.
- Added `DEV-028` decision: target premium parents, content-first roadmap, parent dashboard priority.
- Created premium strategy doc: `docs/ops/premium-parent-student-first-strategy-2026-07-09.md`.
- Created primary content roadmap: `docs/ops/primary-content-completion-roadmap-2026-07-09.md`.
- Created content correction/restructure workflow: `docs/ops/content-corrections-workflow-2026-07-09.md`.
- Created parent dashboard ROI roadmap: `docs/ops/parent-dashboard-roi-roadmap-2026-07-09.md`.
- Updated app metadata to describe Tendo as a premium study platform.

**Strategic note:**
- Teacher dashboard is no longer central. Parent dashboard and complete premium content are the priority.

**Verified:**
- `cd app && npm run build` passed with 188 static pages.

---

## v1.8.4 — 2026-07-09 — Strategic pivot to student-first product

**Session theme:** Lock in the move away from Trainup/school-dependent product strategy and toward a direct student-first Tendo.

**Changed:**
- Archived Trainup a Child Uganda as historical context, not active product direction.
- Removed the active `/trainup` route from the Next.js app.
- Simplified `app/lib/school.ts` back to generic Tendo branding only.
- Updated app metadata away from “school-sold” positioning.
- Updated root docs (`README.md`, `START_HERE.md`, `STATUS.md`, `HANDOFF.md`, `CHECKLIST.md`, `DECISIONS.md`).
- Added strategic pivot handoff: `docs/ops/strategic-pivot-student-first-2026-07-09.md`.
- Added `DEV-027` decision: Tendo is now student-first/direct-to-learner; schools are optional partners later.

**Verified:**
- `cd app && npm run build` passed with 188 static pages.

---

## v1.8.3 — 2026-07-07 — Presentation data polish and auth roadmap documentation

**Session theme:** Make the app feel alive for presentation while keeping an escape hatch for real user data later.

**Changed:**
- Teacher dashboard now auto-loads a populated sample class when no real data exists.
- Sample class data now uses current topic IDs and fuller learner activity so dashboard charts/cards look used.
- Student home progress bars were made more active for demo readiness.
- Past-paper cards now have direct Start and Review actions.
- Added `NEXT_PUBLIC_TENDO_PRESENTATION_DATA=off` escape hatch for turning sample dashboard data off when real backend data is ready.
- Added backend authentication roadmap: `docs/ops/auth-backend-roadmap-2026-07-07.md`.

**Verified:**
- `cd app && npm run build` passed with 189 static pages.

---

## v1.8.2 — 2026-07-07 — Teacher-set questions, manual marking scaffold, and student writing space

**Session theme:** Address tester feedback that students need a place to write answers and teachers need to set/mark their own questions.

**Changed:**
- Added local teacher-question storage helpers: `app/lib/teacher-questions.ts`.
- Added teacher question manager and route: `app/components/TeacherQuestionManager.tsx`, `/teacher/questions`.
- Added student teacher-question answering route: `app/components/StudentTeacherQuestions.tsx`, `/practice/teacher-questions`.
- Added Set questions to the teacher hamburger menu.
- Practice page now surfaces Teacher questions when open questions exist for the signed-in student grade.
- Added working-space textareas to `Quiz.tsx`, `PracticeRunner.tsx`, and `PaperAttempt.tsx`.
- Added documentation: `docs/ops/teacher-questions-manual-marking-2026-07-07.md`.

**Known limitation:**
- Current teacher questions and submissions are localStorage-only UX scaffolding and do not sync across devices yet.

**Verified:**
- `cd app && npm run build` passed with 189 static pages.

---

## v1.8.1 — 2026-07-07 — Remaining production simplification pass

**Session theme:** Finish the immediate cleanup tasks after role-based UX: teacher dashboard copy, worksheet default flow, and topic-page vertical space.

**Changed:**
- Removed demo/sales wording from `TeacherDashboard.tsx`; sample data copy is now neutral and classroom-focused.
- Simplified `WorksheetGenerator.tsx` default state into class → subject → topics → questions → generate.
- Moved worksheet title, school, term, marks, time, difficulty, answer key and instruction fields into collapsed Advanced options.
- Removed topic-page intro callouts across P6/P7 subject topic pages so lesson content appears faster on mobile.
- Removed the practice runner footer copy.
- Added final CSS overrides for cleaner worksheet steps and tighter topic-page spacing.
- Updated root docs and the UX/auth production handoff.

**Verified:**
- `cd app && npm run build` passed with 187 static pages.

---

## v1.8.0 — 2026-07-07 — Role-based UX shell and production declutter

**Session theme:** Convert the UX from a content-rich mixed prototype into a cleaner role-specific product surface for students and teachers.

**Changed:**
- Added local/device sign-in scaffolding: `app/components/AuthGate.tsx` and `app/lib/auth-session.ts`.
- Split experiences by role: students get Home/Study/Practice/Papers; teachers get a hamburger workspace menu with Teacher home, Content library, Worksheets, Past papers, Content reports and Switch account.
- Removed visible student/teacher mixed-mode language from papers screens.
- Made student grade visibility strict: P7 students see P7 study/practice; P6 students see P6 study/practice; teachers can browse both through content library.
- Reworked Study and Practice into client-aware directories: `StudyDirectory.tsx`, `PracticeHomeContent.tsx`.
- Decluttered all subject landing pages by removing stats panels, long intro paragraphs, phase/coming-soon backlog cards, and footer status copy.
- Simplified paper cover, paper attempt, paper browse, and topic practice page copy.
- Added compact intro-card and polished subject-card CSS at the end of `app/app/globals.css`.
- Added detailed operational handoff: `docs/ops/ux-auth-production-cleanup-2026-07-07.md`.

**Verified:**
- `cd app && npm run build` passed.

---

> Newest at the top. Dated, append-only. This file records what happened; `STATUS.md` explains where the project stands now.

## v1.7.0 — 2026-07-06 — Build Frictionless Learner Profile & Class Lock Onboarding System

**Session theme:** Implement an offline-first, zero-password Learner Profile and Class Lock system to lock students into their selected class (P6 vs P7 PLE) during onboarding without complex backend authentication.

**Changed:**
- `app/lib/learner-profile.ts` — Created data model and storage manager for persisting learner profile (`name`, `grade: "P6" | "P7"`, `onboardedAt`) in browser local storage.
- `app/components/ClassSelector.tsx` — Transformed into an interactive onboarding and class lock component. Displays a friendly welcome card on first visit where learners pick their grade and enter an optional name. Automatically locks the home hub and routes P6 learners away from P7 content and vice versa while providing a clean profile bar (`🎓 Akello · Locked into: Primary Six`).
- `app/components/LearnerBanner.tsx` — Created a top notice banner for subject pages that alerts learners when they browse content outside their locked class profile, providing a one-click return to their class hub or profile switcher.
- `app/app/[subject]/p6/page.tsx` & `app/app/[subject]/p7/page.tsx` — Embedded `LearnerBanner` across all subject landing pages.
- Root docs updated: `STATUS.md`, `CHECKLIST.md`, `HANDOFF.md`, `CHANGELOG.md`.

**Verified locally:**
- Production build passed cleanly with `✓ Generating static pages (185/185)`.

## v1.6.0 — 2026-07-06 — Integrate 12 Founder-Provided Mathematics Video Explainer Lessons & Build Interactive Playlist Player

**Session theme:** Seamlessly integrate 12 founder-provided YouTube video explainer lessons into exact matching subtopics and modules across Primary Seven (P7 PLE) and Primary Six (P6) Mathematics, and upgrade the video viewing architecture.

**Changed:**
- `app/lib/topics.ts` — Added `videoUrl?: string` to `SubtopicModule` interface. Embedded founder video URLs into P7 Mathematics: `set-concepts` (`youtu.be/BAUouvIwPZQ`, `youtu.be/CMHmvvz8uJE`, `youtu.be/DMH70G_NjqA`), `whole-numbers` (`youtu.be/86ge44f5IYM`, `youtu.be/rGRPJKTClYg`, `youtu.be/pEfYJgoe_2o`), `operations-on-whole-numbers` (`youtu.be/TQu3yIGHA-4`, `youtu.be/Nx4h4j4jkCc`), `patterns-and-sequences` (`youtu.be/SVG2Y4U1MTk`, `youtu.be/MUBvjysD3VI`), and `fractions` (`youtu.be/HuitLoh1Q9g`, `youtu.be/YZNXTXfemQE`).
- `app/lib/p6-math-topics.ts` — Embedded matching video URLs across P6 Mathematics topics and modules (`p6-sets`, `p6-whole-numbers`, `p6-operations`, `p6-fractions-decimals`).
- `app/components/TopicTabs.tsx` — Upgraded the Watch tab to collect all video lessons available across a topic and its subtopics, displaying an interactive video lesson switcher/playlist below the iframe. Upgraded `ModularTopicView` so learners studying a module in the Read tab can watch that module's video embedded directly above the study notes.
- Root docs updated: `STATUS.md`, `CHECKLIST.md`, `HANDOFF.md`, `CHANGELOG.md`.

**Verified locally:**
- Production build passed cleanly with `✓ Generating static pages (185/185)`.

## v1.5.0 — 2026-07-05 — Execute Primary Six (P6) Deep Content Overhaul & Visual Roadmap Integration across All 5 Subjects

**Session theme:** Conduct a deep textbook-grade content overhaul of Primary Six (P6) across Social Studies and Integrated Science, linking verified educational textbook diagrams (`/images/...`) to modules across all five P6 subjects strictly adhering to NCDC Set One specifications.

**Changed:**
- `app/lib/p6-social-topics.ts` — Upgraded P6 Social Studies library from light single-module placeholders to exhaustive multi-module subtopics matching every competency in `content/curriculum/p6-social-studies.json`. Added deep Ugandan teacher voice modules covering East African latitudes/longitudes, maritime boundaries, EAC capital expansion (Arusha headquarters), Northern/Central transit corridors for landlocked states, Great Rift Valley faulting mechanics, block vs volcanic mountains (Rwenzori vs Kilimanjaro), equatorial/savanna/montane climatic zones, relief orographic rainfall/rain shadow effects, Bantu/Nilotic migration pathways, Nyamwezi/Akamba caravan trade corridors, Anglo-German partition treaties of 1886/1890, IBEAC/GEAC administration, armed resistance by Kabalega/Mkwawa/Koitalel, and regional integration organs under EALA. Integrated 8 custom educational maps and diagrams (`africa-latitudes-longitudes.png`, `great-rift-valley-formation.png`, `block-and-fold-mountains.png`, `relief-orographic-rainfall.png`, etc.).
- `app/lib/p6-science-topics.ts` — Upgraded P6 Integrated Science library to exhaustive multi-module subtopics matching `content/curriculum/p6-science.json`. Added deep modules on the five vertebrate classes, arthropod/arachnid/myriapod invertebrate characteristics, monocot vs dicot leaf venation and root systems, spore-bearing sori in ferns and saprophytic fungi, mechanical sound wave speed in solids vs gases, frequency/amplitude pitch control, inner ear cochlea and eardrum hygiene, 4-chambered heart double circulation, artery vs vein pocket valves, plasma/haemoglobin/leukocytes/platelets, hypertension/anaemia/sickle cell hygiene, alveolar gas exchange mechanics, tobacco smoking tar hazards, dairy/beef cattle breeds (Friesian vs Zebu), deep litter vs battery cage poultry housing, and tick/tsetse/Newcastle disease vector control. Integrated 6 custom anatomical and environmental illustrations (`human-skeleton.png`, `food-chain.png`, `carbon-oxygen-cycle.png`, `anopheles-mosquito-life-cycle.png`, etc.).
- Root docs updated: `STATUS.md`, `CHECKLIST.md`, `HANDOFF.md`, `CHANGELOG.md`.

**Verified locally:**
- Production build passed cleanly with `✓ Generating static pages (185/185)`.

## v1.4.0 — 2026-07-05 — Execute Primary Six (P6) Expansion Milestones 3b & 4 (Deep Math, English, & RE v3 Libraries, Practice Banks, and Class Filtering)

**Session theme:** Complete Primary Six (P6) Expansion Milestone 3b by authoring exhaustive Lesson Structure v3 topic data libraries for P6 Mathematics, P6 English Language, and P6 Religious Education (CRE & IRE), and execute Milestone 4 by seeding P6 practice banks and connecting class level filtering on the Teacher Dashboard and Worksheet Generator.

**Changed:**
- `app/lib/p6-math-topics.ts` — Expanded library to 6 complete NCDC topics: Set Concepts up to Two Categories, Whole Numbers up to 10M, Operations on Whole Numbers (long arithmetic, BODMAS, prime factorization, GCF/LCM), Fractions/Decimals/Percentages, Geometry and Angle Properties (compass construction of 90°, 60°, 30°, perimeter/area), and Data Handling/Simple Algebra.
- `app/lib/p6-english-topics.ts` — Expanded library to 5 complete NCDC situational topics: Safety on the Road (obligation modals: must, should, ought to), Debating and Expressing Opinions (motion, officials, contrast conjunctions), Family Relationships (kinship terms, possessive apostrophes 's vs s'), Occupations and Crafts (defining relative clauses: who, which, where), and Hotel/Dining Etiquette (quantifiers: much, many, a few, a little).
- `app/lib/p6-re-topics.ts` — Expanded library to 6 complete dual CRE/IRE topics: God's Creation/Stewardship, The Ten Commandments (honesty & authority), Jesus' Healing Miracles/Compassion, Surah Al-Qadr & Ad-Dhuha (Laylatul-Qadr & care for orphans), Pillars of Islam (Sawm & Salah), and Prophet Muhammad's Early Dawah in Makkah (Al-Amin & As-Sadiq).
- `app/lib/question-bank.ts` — Seeded central P6 practice banks (`P6_MATHS_BANK`, `P6_ENGLISH_BANK`, `P6_SCIENCE_BANK`, `P6_SOCIAL_STUDIES_BANK`, `P6_RE_BANK`), bringing total practice questions across P6 and P7 into `ALL_BANKS`, tagged with class level (`grade: "P6" | "P7"`).
- `app/components/WorksheetGenerator.tsx` — Added Class / Grade level filtering (`Primary 7 (PLE)`, `Primary 6`, `Mixed Classes (P6 & P7)`) so teachers can filter bank topics and generate customized print/copy worksheets for either or both primary grades.
- `app/components/TeacherDashboard.tsx` — Connected Class / Grade level filtering across Demo Class and Device views, enabling teachers to filter topic bar charts and student drill-downs by class.
- `app/app/[subject]/p6/[topic]/page.tsx` & `app/app/[subject]/p6/[topic]/practice/page.tsx` — Created endless practice runner pages for all P6 subjects and integrated Practice CTAs on all P6 topic pages.
- Root docs updated: `STATUS.md`, `CHECKLIST.md`, `HANDOFF.md`, `CHANGELOG.md`.

**Verified locally:**
- Production build passed cleanly with `✓ Generating static pages (185/185)`.

## v1.3.0 — 2026-07-05 — Execute Primary Six (P6) Expansion Milestone 3 (Deep Social Studies & Integrated Science content layer)

**Session theme:** Execute Primary Six (P6) Expansion Milestone 3 by building out exhaustive multi-module Lesson Structure v3 topic libraries across P6 Social Studies (*People and Resources of East Africa*) and P6 Integrated Science.

**Changed:**
- `app/lib/p6-social-topics.ts` — Created complete 6-topic regional library covering East African location, Rift Valley/volcanic mountains, equatorial/savanna climates, Bantu/Nilotic migrations, pre-colonial long-distance trade (Nyamwezi/Akamba), partition & chartered companies (IBEAC), and nationalist movements leading to the East African Community (EAC).
- `app/lib/p6-science-topics.ts` — Created complete 5-topic biological library covering classification of living things (vertebrates vs invertebrates, flowering vs non-flowering), sound energy & human ear anatomy, double circulatory system (4 heart chambers, blood components), respiratory system (alveoli gas exchange, lung hygiene), and livestock/poultry management (cattle breeds, deep litter housing, tick/tsetse control).
- Root docs updated: `STATUS.md`, `CHECKLIST.md`, `HANDOFF.md`, `CHANGELOG.md`.

**Verified locally:**
- Production build passed cleanly with `✓ Generating static pages (143/143)`.

## v1.2.0 — 2026-07-05 — Execute Primary Six (P6) Expansion Milestone 1 & Milestone 2 (Curriculum Specs & Grade Switcher)

**Session theme:** Execute Primary Six (P6) Expansion Milestone 1 (NCDC Curriculum specifications) and Milestone 2 (Routing & Grade Switcher architecture).

**Changed:**
- `content/curriculum/` — Created 5 comprehensive NCDC Set One curriculum JSON specifications for Primary Six:
  - `p6-social-studies.json` (East Africa: location, physical features, climate/vegetation, people/migrations, pre-colonial trade, colonization, road to independence, and East African Community EAC).
  - `p6-science.json` (Diversity of living things classification, sound energy, circulatory system, respiratory system, cattle/poultry keeping, sanitation/hygiene).
  - `p6-math.json` (Set concepts up to 2 categories, whole numbers up to 10M, long arithmetic/BODMAS/prime factors, fractions/decimals/percentages, geometry/angles, data handling).
  - `p6-english.json` (Functional grammar & vocabulary: road safety, debating, family relationships, occupations/crafts, hotel/dining etiquette).
  - `p6-re.json` (CRE creation/commandments/miracles & IRE Surahs/fasting/Makkah history).
- `app/components/ClassSelector.tsx` — Built interactive home grade switcher allowing learners to toggle between Primary Seven (`/?class=P7`) and Primary Six (`/p6-home`).
- `app/app/p6-home/page.tsx` — Created dedicated Primary Six landing overview offering all 5 P6 subjects.
- `app/lib/p6-*.ts` & `app/app/[subject]/p6/` — Created P6 baseline data libraries and static route shells (`/math/p6`, `/science/p6`, `/social-studies/p6`, `/english/p6`, `/re/p6`) structured on Lesson Structure v3.

**Verified locally:**
- Production build passed cleanly with `✓ Generating static pages (134/134)`. Both Primary 6 and Primary 7 classes are now live across all 5 subjects.

## v1.1.0 — 2026-07-05 — Establish Primary Six (P6) Expansion Master Roadmap & Milestones

**Session theme:** Establish comprehensive specification and milestone plan for expanding Tendo from a single class (P7) to supporting Primary Six (P6) across all 5 official NCDC subjects.

**Changed:**
- `docs/spec/p6-expansion-milestones.md` — Created master architectural and curriculum roadmap mapping out 5 structured milestones for P6 expansion:
  - *Milestone 1:* P6 NCDC Curriculum specifications (`content/curriculum/p6-*.json` across Social Studies East Africa, Science, Math, English, and Religious Education).
  - *Milestone 2:* Routing & Grade Switcher architecture (`<ClassSelector />`, `/math/p6`, `/science/p6`, etc.).
  - *Milestone 3:* P6 Lesson Structure v3 content layer (`app/lib/p6-*.ts`).
  - *Milestone 4:* P6 practice question banks and Teacher Dashboard / Worksheet Generator filters.
  - *Milestone 5:* P6 Visual Roadmap and textbook illustrations.
- `DECISIONS.md` — Logged decision `DEV-021` documenting the P6 expansion architectural strategy.
- Root docs updated: `STATUS.md`, `CHECKLIST.md`, `HANDOFF.md`.

## v1.0.1 — 2026-07-05 — Complete NCDC Religious Education exhaustive content enrichment pass (14 official CRE & IRE topics)

**Session theme:** Rigorously audit, expand, and enrich all 14 official P7 Religious Education topics (7 CRE + 7 IRE) against the official NCDC specification requirement sheet across Terms 1, 2, and 3.

**Changed:**
- `app/lib/re-topics.ts` — Upgraded Religious Education to exactly 14 official NCDC topics (7 CRE + 7 IRE), eliminating summary traps and injecting 100% of all required theological definitions, historical figures, parables, miracles, and ethical rulings:
  - **Part I: CRE (7 Topics):**
    1. *Overview of Theme:* "Witnessing for Christ" daily application, Parable of Talents (Matthew 25).
    2. *Ancestors & Pioneers:* Old Testament giants (Abraham, Moses, David Psalm 51 repentance), New Testament pioneers (John the Baptist, Peter, Paul), and Uganda Martyrs (St. Charles Lwanga at Namugongo 3 June 1886).
    3. *God's Freedom & Law:* Ten Commandments (Decalogue at Mt. Sinai: duties to God 1-4 vs neighbors 5-10), Christian freedom vs lawlessness (Galatians 5:13).
    4. *Person & Ministry of Jesus:* Major Parables (Prodigal Son, Good Samaritan, Sower), Miracles (healing, nature, raising Lazarus), Sermon on the Mount & Beatitudes (Matthew 5).
    5. *Passion, Death & Resurrection:* Palm Sunday, Last Supper foot washing & Eucharist, Judas betrayal, trials before Caiaphas/Pilate, Peter's denial, Golgotha crucifixion, Easter empty tomb.
    6. *Holy Spirit & Church:* Pentecost rushing wind/fire (Acts 2), Spiritual Gifts (1 Cor 12) vs Fruits (Gal 5:22-23), Sacraments (Baptism, Holy Communion, Confirmation).
    7. *Christian Citizenship & Service:* Civic leadership obedience (Romans 13, praying for leaders 1 Tim 2), biblical work ethics combating laziness (2 Thess 3:10), social justice toward orphans/widows/refugees (James 1:27).
  - **Part II: IRE (7 Topics):**
    1. *Surat al-Fatiha & Selected Surahs:* Al-Fatiha Tajweed/meaning as mandatory Salah pillar, protective short Surahs (Al-Ikhlas, Al-Falaq, An-Nas Al-Mu'awwidhatayn, Al-Asr time valuation).
    2. *Tawheed & Iman:* 6 Pillars of Iman, Asma-ul-Husna (99 Names: Al-Alim, Al-Quddus, As-Salam), Shirk definition (Major Shirk vs Minor Shirk / Riya) as unforgivable sin.
    3. *Holy Qur'an as Guided Book:* Cave Hira revelation (Laylatul Qadr, Iqra Surah Al-Alaq via Jibril over 23 years), compilation under Caliphs Abu Bakr and Uthman (Mushaf standardization by Zayd ibn Thabit), Wudhu purity rules.
    4. *Fiqh & Ibadah:* 5 Pillars practical application, Salah prerequisites/Fard/Sunnah Taraweeh/invalidators, Zakah calculation ($2.5\%$) vs Sadaqah, 8 official Qur'anic recipient categories (Surah At-Tawbah 9:60).
    5. *Hadith & Sunnah:* Hadith vs Sunnah distinction, prophetic Hadiths on Akhlaq morals (cleanliness "Taharah is half of faith", honoring mothers 3 times, neighborly rights, truthfulness).
    6. *History & Seerah:* Prophet in Makkah (Al-Amin), Hijrah migration to Madinah ($622\text{ AD}$, calendar change, Ansar/Muhajirun brotherhood), Rightly Guided Caliphs Khulafa-ur-Rashidun (Abu Bakr, Umar Al-Farooq Bait-ul-Mal, Uthman Dhun-Nurayn, Ali).
    7. *Adab & Social Justice:* Modesty dress code (Awrah navel to knee, Hijab), Halal vs Haram dietary laws (pork, blood, intoxicants/Khamr), Marketplace business ethics against short measures (Al-Mutaffifin), Riba (usury), and hoarding (Ihtikar).

**Verified locally:**
- Production build passed cleanly with `✓ Generating static pages (123/123)`. All 5 official P7 PLE subjects (Mathematics, English Language, Integrated Science, Social Studies, and Religious Education CRE/IRE) are now 100% enriched against official NCDC specification requirement sheets.

## v1.0.0 — 2026-07-05 — Complete P7 Religious Education (CRE & IRE) rollout — All 5 PLE subjects live!

**Session theme:** Conduct deep research and build the final P7 subject, Religious Education, offering complete coverage of both Christian Religious Education (CRE) and Islamic Religious Education (IRE) under the official NCDC Set One syllabus.

**Changed:**
- `app/lib/re-topics.ts` — Created complete data file exporting 6 official CRE topics and 5 official IRE topics structured in Lesson Structure v3 modular format:
  - **CRE Topics:** God's Creation and Fall of Man (`cre-gods-creation-fall`), Jesus Christ Our Savior and Holy Spirit (`cre-jesus-savior-spirit`), Christian Living, Worship & Sacraments (`cre-living-worship`), Christian Approaches to Social/Ethical Issues (`cre-social-ethical`), The Church in Uganda, Uganda Martyrs & Heritage (`cre-uganda-martyrs-heritage`), and Serving Others & Christian Citizenship (`cre-serving-citizenship`).
  - **IRE Topics:** Belief in Allah (Tawhid) & Articles of Faith (`ire-tawhid-iman`), The 5 Pillars of Islam (`ire-pillars-ibadah`), Holy Qur'an & Hadith Guidance (`ire-quran-hadith`), Islamic Morals & Ethics (`ire-akhlaq-morals`), and History of Islam in Uganda (`ire-history-uganda`).
- `app/lib/question-bank.ts` — Added `CRE_BANK` and `IRE_BANK` with 88 practice questions across all 11 RE topics.
- `app/app/re/p7/page.tsx`, `app/app/re/p7/[topic]/page.tsx`, & `app/app/re/p7/[topic]/practice/page.tsx` — Created full subject landing page and static topic/practice routes for Religious Education.
- `app/app/page.tsx`, `app/components/TeacherDashboard.tsx`, & `app/components/WorksheetGenerator.tsx` — Added Religious Education subject cards, teacher progress reporting, and worksheet generator support.

**Verified locally:**
- Production build passed cleanly with `✓ Generating static pages (117/117)`. All 5 official NCDC primary school subjects (Mathematics, English Language, Integrated Science, Social Studies, and Religious Education) are now 100% complete and live.

## v0.9.12 — 2026-07-05 — Complete NCDC Mathematics exhaustive module expansion and content enrichment pass

**Session theme:** Eliminate single-paragraph summary traps in Mathematics and inject 100% of all official NCDC specification requirement terms across all 11 topics and 6 themes.

**Changed:**
- `app/lib/topics.ts` — Performed deep module expansion and content enrichment across all 11 Mathematics topics, ensuring every module includes step-by-step calculations, numerical `workedExample` breakdowns, and multiple-choice `tryThis` checks:
  - **Topic 1 (Set Concepts):** Expanded into 4 subtopics and 8 rich modules covering Equal/Equivalent/Empty/Disjoint sets, Finite/Infinite sets, Subsets ($2^n$ and proper subsets $2^n-1$), 5-region Venn diagram operations ($A \cap B, A \cup B, A', A-B, B-A$), algebraic word problem equations, and probability.
  - **Topic 2 (Whole Numbers):** Upgraded place values up to 8 digits ($99,999,999$), expanded forms (values vs powers of 10), Roman numerals up to MM ($2000$), and non-decimal number bases (Binary, Base 5, Base 8).
  - **Topic 3 (Operations on Whole Numbers):** Added Commutative, Associative, and Distributive properties over addition, BODMAS / BOOMDAS rules, prime factorisation in power notation, and exact Venn diagram product rules for GCF and LCM.
  - **Topic 4 (Patterns & Sequences):** Added divisibility tests (2, 3, 4, 5, 6, 8, 9, 10, 11), triangular numbers ($n(n+1)/2$), square/cube numbers, and progressive sequence rules.
  - **Topic 5 (Fractions, Decimals & Percentages):** Added fraction BODMAS operations, terminating vs recurring decimals ($0.333\ldots$), direct/inverse proportion ($3\text{ men} \times 8\text{ days} = 24\text{ man-days}$), and ratio sharing.
  - **Topic 7 (Data Handling & Graphs):** Added Mean/Median/Mode/Range calculations, Pictograms (symbol keys), Pie chart sector angles ($360^\circ$), travel graphs, and 4-quadrant Cartesian coordinate plotting.
  - **Topic 8 (Construction & Geometry):** Added angle sum rules ($180^\circ$ straight line, $360^\circ$ point, polygon $(n-2) \times 180^\circ$), ruler/compass bisecting rules ($90^\circ, 60^\circ, 45^\circ, 30^\circ, 15^\circ, 135^\circ, 120^\circ$), and 3-figure clockwise bearings with back bearing rules ($+180^\circ$ or $-180^\circ$).
  - **Topic 9 (Time):** Added 12/24-hour clock conversions and travel timetable duration reasoning across midnight boundaries.
  - **Topic 10 (Length, Mass, Capacity & Money):** Added 2D area/perimeter (including circles $\pi r^2$), 3D prism volume ($V = \text{base area} \times h$), capacity conversion rule ($1000\text{ cm}^3 = 1\text{ litre}$), mass conversions, and business mathematics (profit/loss percentage, simple interest $I = P \times R \times T$).
  - **Topic 11 (Algebra):** Added algebraic simplification, numerical substitution, linear equations, compound inequalities ($-2 < x \le 5$), sign flip rules when dividing/multiplying by negatives, and open/closed circle number line representation.

**Verified locally:**
- Production build passed cleanly with `✓ Generating static pages (94/94)`. All 4 active subjects (Science, SST, English Language, Mathematics) are now 100% enriched against official NCDC specification requirement sheets.

## v0.9.11 — 2026-07-05 — Complete NCDC Mathematics exhaustive content enrichment pass

**Session theme:** Rigorously audit and enrich all 11 P7 Mathematics topics across 6 themes against the official NCDC specification requirement sheet.

**Changed:**
- `app/lib/topics.ts` — Performed exhaustive content injection ensuring 100% inclusion of all official NCDC requirement terms, set definitions, arithmetic properties, geometric constructions, and inequality representation rules:
  - **Topic 1 (Set Concepts):** Added Disjoint sets (sharing zero elements), Difference of sets ($A - B$ / Only A and $B - A$ / Only B), and Complement of a set ($A'$).
  - **Topic 3 (Operations on Whole Numbers):** Added Commutative ($a+b=b+a$), Associative, and Distributive properties over addition ($a(b+c)=ab+ac$). Added exact Venn diagram product rules for GCF (intersection product) and LCM (union product).
  - **Topic 5 (Fractions, Decimals & Percentages):** Added Recurring / repeating decimals ($0.333\ldots = 1/3$), Inverse / indirect proportion calculations ($3 \times 8 = 24$ man-days), and ratio sharing.
  - **Topic 7 (Data Handling & Graphs):** Added Pictograms (data representation using symbol keys) and 4-quadrant Cartesian coordinate plotting.
  - **Topic 8 (Construction & Geometry):** Added ruler/compass bisecting rules, exact angle constructions ($90^\circ, 60^\circ, 45^\circ, 30^\circ, 15^\circ, 135^\circ, 120^\circ$), and 3-figure clockwise back bearing calculation rules ($+180^\circ$ or $-180^\circ$).
  - **Topic 10 (Length, Mass, Capacity & Money):** Added 3D prism volume ($V = \text{base area} \times h$), composite surface area, and capacity conversion rule ($1000\text{ cm}^3 = 1\text{ litre}$).
  - **Topic 11 (Algebra):** Added Compound inequalities ($-2 < x \le 5$), inequality sign flip rule when dividing/multiplying by negatives, and open/closed circle number line representation.

**Verified locally:**
- Production build passed cleanly with `✓ Generating static pages (94/94)`.

## v0.9.10 — 2026-07-05 — Complete NCDC English Language exhaustive content enrichment pass

**Session theme:** Rigorously audit and enrich all 7 P7 English Language topics against the official NCDC specification requirement sheet across Terms 1, 2, and 3.

**Changed:**
- `app/lib/english-topics.ts` — Performed exhaustive content injection ensuring 100% inclusion of all official NCDC requirement terms, grammatical transformations, and functional writing conventions:
  - **Topic 1 (School Holidays):** Added exact Future Simple rules (*shall* vs *will*), prior intention structure (*going to*), and sequential time conjunctions (*as soon as*, *immediately*, *no sooner had... than...* with inverted *had* subject word order).
  - **Topic 2 (Letter Writing):** Added single-address informal friendly layout vs double-address formal official layout, exact salutation pairings (*Dear Sir/Madam* strictly with *Yours faithfully*; named greetings with *Yours sincerely*), and excuse duty / job application templates.
  - **Topic 3 (Examinations):** Added assessment vocabulary (*invigilator*, *candidate*, *index number*, *pass slip*), complete coverage of Conditionals 1, 2, and 3 (*If I study...* / *If I studied...* / *If I had studied...*), purpose structures (*so... that*, *too... to*, *in order to*), and examination rubric rules.
  - **Topic 4 (Electronic Media):** Added modern media vocabulary (*broadcast*, *presenter*, *download*, *viral*), Active and Passive Voice conversions across tenses, and preference grammar (*prefer... to...*, *like... more than...*, *interested in...*).
  - **Topic 5 (Rights, Responsibilities & Freedom):** Added civic vocabulary (*citizen*, *child abuse*, *fair trial*, *violate*), Direct and Indirect (Reported) Speech rules (pronoun, tense backshifting, time/place adverbs), and contrast conjunctions (*although*, *even if*, *in spite of*, *despite* without *of*).
  - **Topic 6 (Environmental Protection):** Added ecology vocabulary (*pollution*, *afforestation*, *poach*, *ecosystem*), Relative Pronouns (*who*, *which*, *whose*, *whom*, *that*), and cause/effect connectors (*because*, *since*, *as a result of*).
  - **Topic 7 (Ceremonies):** Added gathering vocabulary (*MC*, *guest of honor*, *bride*, *RSVP*), Adverbial Clauses of Time (*while*, *whereas*, *during*), and Question Tag golden polarity rules across complex tenses (including negative trap words like *rarely*, *hardly*, *never*, *seldom* requiring positive tags).

**Verified locally:**
- Production build passed cleanly with `✓ Generating static pages (94/94)`.

## v0.9.9 — 2026-07-05 — Complete NCDC Social Studies exhaustive content enrichment pass

**Session theme:** Rigorously audit and enrich all 10 P7 Social Studies topics against the official NCDC specification requirement sheet across Terms 1, 2, and 3.

**Changed:**
- `app/lib/social-topics.ts` — Performed exhaustive content injection ensuring 100% inclusion of all official NCDC requirement terms and concepts:
  - **Topic 1 (Location):** Added exact longitude time calculation ($1^\circ = 4\text{ minutes}$), 16 compass cardinal/secondary/tertiary points, island nations (Madagascar, Seychelles), and landlocked country challenges.
  - **Topic 2 (Physical Features):** Added river stages (youthful V-valley gorges, mature meanders, old deltas/ox-bows), lake formation by crustal sagging/downwarping (Lake Victoria, Lake Kyoga), and volcanic/faulting hazards.
  - **Topic 3 (Climate):** Added ocean current impacts (warm Agulhas/Mozambique vs cold Benguela/Canary forming 800 km Namib Desert), ceilometer cloud ceiling height, and Stevenson Screen louvered structure.
  - **Topic 5 (People of Africa):** Added Cushites, Semites/Berbers, Negroes, and Khoisan (San hunters & Khoikhoi pastoralists of the Kalahari).
  - **Topic 6 (Foreign Influence):** Added Trans-Saharan camel trade (gold for salt), Trans-Atlantic Triangular Trade, and colonial systems (British Indirect Rule, French Assimilation, Belgian Paternalism in Congo).
  - **Topic 7 (Nationalism):** Added active armed resistance leaders and rebellions (Dedan Kimathi Mau Mau in Kenya, Kinjikitile Ngwale Maji Maji in Tanzania, Omukama Kabalega of Bunyoro) and collaborators (Apollo Kaggwa, Semei Kakungulu).
  - **Topic 10 (World Organisations):** Added Commonwealth Heads of Government Meeting (CHOGM) and specialized UN agencies.

**Verified locally:**
- Production build passed cleanly with `✓ Generating static pages (94/94)`.

## v0.9.8 — 2026-07-05 — Complete NCDC Integrated Science exhaustive content enrichment pass

**Session theme:** Rigorously expand all 6 core P7 Integrated Science topics against the official NCDC specification requirement sheet across Terms 1, 2, and 3.

**Changed:**
- `app/lib/science-topics.ts` — Performed deep, exhaustive expansion across all core P7 topics and preserved crossover topics:
  - **Topic 1 (Skeletal/Muscular):** Added exoskeleton/endoskeleton/hydrostatic distinctions, synovial joint structures (cartilage, synovial fluid, ligaments, tendons), cardiac muscles, antagonistic action (biceps/triceps), and specific disorders (rickets, osteoporosis, polio, fractures, sprains, strains, dislocations).
  - **Topic 2 (Electricity/Magnetism):** Added static electricity laws, lightning formation and lightning arrester mechanism, series vs parallel circuits, voltage/current/resistance definitions, electric bell structure and working, demagnetization methods, and magnetic keepers.
  - **Topic 3 (Excretory System):** Added core biological distinction between excretion and egestion, liver deamination and bile pigments, internal kidney anatomy (cortex, medulla, pelvis), skin layers (epidermis with Malpighian melanin, dermis with sweat glands), and specific disorders (nephritis, stones, failure, cirrhosis, hepatitis, ringworm, scabies).
  - **Topic 4 (Light Energy):** Added speed of light (300,000 km/s), rectilinear propagation, beams, umbra/penumbra shadows, solar/lunar eclipses, pinhole camera aperture effects, laws of reflection, periscopes, real vs apparent depth, ROYGBIV dispersion, eye cross-section anatomy, and myopia/hypermetropia lens corrections.
  - **Topic 5 (Interdependence):** Added biotic/abiotic distinctions, plant-animal gas exchange, 4-stage food chains/webs with decomposers, and agroforestry management (nitrogen-fixing trees, coppicing, pollarding, lopping, fire lines).
  - **Topic 6 (Population & Health):** Added female Anopheles 4-stage life cycle and vector control, housefly transmission, 4 Fs faecal-oral chain, cholera/typhoid, exact homemade ORS preparation formula (1L boiled water + 8 tsp sugar + 1 tsp salt), hookworm/tapeworm/roundworm prevention, youth alcohol/substance abuse (liver cirrhosis), assertiveness skills, tally-chart surveys, and tippy-tap handwashing construction.

**Verified locally:**
- Production build passed cleanly with `✓ Generating static pages (94/94)`.

## v0.9.7 — 2026-07-05 — Visual Roadmap 100% complete (Milestone Batch 7 English Writing, Science & SST History illustrations)

**Session theme:** Execute final Visual Roadmap Milestone Batch 7 across P7 English, Integrated Science, and Social Studies modules, completing the master visual specification.

**Changed:**
- `public/images/` — Generated 5 final primary school textbook illustrations for Milestone Batch 7:
  - `/images/english/composition-paragraph-structure.png` (Hamburger paragraph model: topic sentence introduction, supporting details body, concluding closing).
  - `/images/english/ple-exam-instruction-sheet.png` (PLE exam instructions sheet highlighting careful reading and time budgeting).
  - `/images/science/conductors-vs-insulators.png` (Comparison of shiny copper wire conducting vs rubber/wood acting as electrical insulators).
  - `/images/science/fossil-fuels-formation.png` (Geological cross-section showing prehistoric strata transforming into coal and petroleum under pressure).
  - `/images/social-studies/partition-of-africa-1884.png` (Map illustrating European colonial partition of Africa following 1884 Berlin Conference).
- `app/lib/english-topics.ts`, `app/lib/science-topics.ts`, & `app/lib/social-topics.ts` — Linked all 5 Milestone Batch 7 illustrations directly into core learning modules (`writing-reading`, `exam-conduct`, `conductors-insulators`, `fossil-fuels`, `scramble-partition`). Total live textbook illustrations across all 4 subjects now at **41 verified assets** (Science: 18, SST: 13, Math: 7, English: 3).
- `docs/spec/visual-roadmap-v3.md` — Updated master visual spec marking all 7 phased milestone batches as 100% completed.

**Verified locally:**
- Production build passed cleanly with `✓ Generating static pages (94/94)`.

## v0.9.6 — 2026-07-05 — Visual Roadmap Milestone Batch 6 complete (Mathematics Sets & Geometry illustrations)

**Session theme:** Execute Visual Roadmap Milestone Batch 6 across P7 Mathematics sets and geometry modules.

**Changed:**
- `public/images/math/` — Generated 5 high-clarity primary school mathematics textbook illustrations for Milestone Batch 6:
  - `/images/math/venn-diagram-4-regions.png` (Two-circle Venn diagram illustrating only A, intersection both, only B, and neither outside).
  - `/images/math/subset-venn-diagram.png` (Subset Venn diagram showing Set A enclosed inside Set B).
  - `/images/math/parallel-perpendicular-transversal.png` (Parallel lines cut by a transversal illustrating alternate and corresponding angles).
  - `/images/math/triangles-quadrilaterals-chart.png` (Chart comparing equilateral/right triangles and rectangle/square properties).
  - `/images/math/regular-polygons-angles.png` (Regular pentagon and hexagon illustrating interior/exterior angle relationships).
- `app/lib/topics.ts` — Linked all 5 Milestone Batch 6 illustrations directly into core mathematics modules (`venn-diagrams-2-events-core`, `subsets-core`, `parallel-skew-lines-core`, `simple-polygons-core`, `regular-polygons-core`). Total live textbook illustrations now at **36 verified assets** across all 4 subjects.
- `docs/spec/visual-roadmap-v3.md` — Updated master visual spec moving Batch 6 into completed status and staging the final batch: Milestone Batch 7 (English Writing Aids & Advanced Science).

**Verified locally:**
- Production build passed cleanly with `✓ Generating static pages (94/94)`.

## v0.9.5 — 2026-07-05 — Visual Roadmap Milestone Batch 5 complete (History, Geometry & English Letter Layout illustrations)

**Session theme:** Execute Visual Roadmap Milestone Batch 5 across P7 Social Studies, Mathematics, and English modules.

**Changed:**
- `public/images/` — Generated 5 primary school textbook illustrations for Milestone Batch 5:
  - `/images/social-studies/bantu-nilote-migration-map.png` (Map tracing Bantu and Nilotic historical migration routes into East Africa).
  - `/images/social-studies/triangular-trade-map.png` (Trans-Atlantic Triangular Trade routes linking Europe, West Africa, and Americas).
  - `/images/math/angle-types-gallery.png` (Geometry chart comparing acute, right 90°, obtuse, straight 180°, and reflex angles).
  - `/images/math/compass-bearings-diagram.png` (360-degree compass rose illustrating 3-figure clockwise bearings from North 000°).
  - `/images/english/letter-layouts.png` (Visual layout comparison: informal single-address vs formal official double-address letters).
- `app/lib/social-topics.ts`, `app/lib/topics.ts`, & `app/lib/english-topics.ts` — Linked all 5 Milestone Batch 5 illustrations directly into core learning modules (`major-ethnic-groups`, `triangular-trade`, `line-segments-angles-core`, `bearing-scale-drawing-core`, `informal-format`). Total live textbook illustrations now at **31 verified assets** across all 4 subjects.
- `docs/spec/visual-roadmap-v3.md` — Updated master visual spec moving Batch 5 into completed status and staging the final batches: Batch 6 (Mathematics Sets/Geometry) and Batch 7 (English Writing & Advanced Science).

**Verified locally:**
- Production build passed cleanly with `✓ Generating static pages (94/94)`.

## v0.9.4 — 2026-07-05 — Visual Roadmap Milestone Batch 4 complete (Public Health, Ecology & Value Addition illustrations)

**Session theme:** Execute Visual Roadmap Milestone Batch 4 across P7 Integrated Science and Social Studies modules.

**Changed:**
- `public/images/` — Generated 5 high-clarity primary school textbook illustrations for Milestone Batch 4:
  - `/images/science/anopheles-mosquito-life-cycle.png` (4-stage life cycle of the female Anopheles mosquito vector).
  - `/images/science/tippy-tap-handwashing.png` (Village tippy-tap handwashing device with soap and foot pedal).
  - `/images/science/three-classes-of-levers.png` (Comparison of 1st, 2nd, and 3rd class levers showing effort, load, fulcrum).
  - `/images/science/carbon-oxygen-cycle.png` (Gas exchange cycle between plants releasing oxygen and animals exhaling carbon dioxide).
  - `/images/social-studies/mining-and-agriculture-processing.png` (Value addition illustration: transforming raw coffee/minerals into finished industrial goods).
- `app/lib/science-topics.ts` & `app/lib/social-topics.ts` — Linked all 5 Milestone Batch 4 illustrations directly into core modules (`malaria-vector-control`, `school-health-clubs`, `lever-basics`, `plant-animal-interdependence`, `major-economic-resources-africa`). Total live textbook illustrations now at **26 assets**.
- `docs/spec/visual-roadmap-v3.md` — Updated master visual spec moving Batch 4 into completed status and staging Batch 5.

**Verified locally:**
- Production build passed cleanly with `✓ Generating static pages (94/94)`.

## v0.9.3 — 2026-07-05 — Visual Roadmap Milestone Batch 3 complete & truthful dynamic visual pills

**Session theme:** Execute Visual Roadmap Milestone Batch 3 (African Geography & Climate illustrations) and implement universal dynamic visual pills (`getTopicVisualPill`) across all subject landing pages.

**Changed:**
- `public/images/social-studies/` — Generated 5 high-clarity primary school geography textbook illustrations for Milestone Batch 3:
  - `/images/social-studies/africa-latitudes-longitudes.png` (Map of Africa showing Equator 0°, Prime Meridian 0°, Tropics of Cancer/Capricorn).
  - `/images/social-studies/block-and-fold-mountains.png` (Comparison of block horst mountain formation vs volcanic peak formation).
  - `/images/social-studies/africa-climatic-zones.png` (Color-coded map of major African climatic zones: Equatorial, Savanna, Desert, Mediterranean).
  - `/images/social-studies/africa-vegetation-belts.png` (Side-by-side comparison of multi-layered tropical rainforest canopy vs open grassy savanna woodland).
  - `/images/social-studies/major-rivers-lakes-map.png` (Map tracing major African rivers: Nile, Congo, Niger, Zambezi and Lake Victoria).
- `app/lib/social-topics.ts` — Linked all 5 Milestone Batch 3 illustrations directly into core geography modules (`major-lines-cross-africa`, `mountains-highlands-africa`, `equatorial-tropical`, `forest-vegetation`, `rivers-of-africa`). Total live textbook illustrations now at **21 assets**.
- `app/lib/topics.ts` — Created smart helper function `getTopicVisualPill(topic)` that checks modules for real images (`imageUrl`) or diagrams (`visual`).
- `app/science/p7/page.tsx`, `app/social-studies/p7/page.tsx`, `app/math/p7/page.tsx` — Updated landing page topic cards to use `getTopicVisualPill(topic)`, ensuring that visual cues ("Includes images" / "Includes diagrams") are 100% truthful and dynamically reflecting live assets.
- `docs/spec/visual-roadmap-v3.md` — Updated master visual spec moving Batch 3 into completed status.

**Verified locally:**
- Production build passed cleanly with `✓ Generating static pages (94/94)`.

## v0.9.2 — 2026-07-05 — Visual Roadmap Milestone Batch 2 complete (Science anatomy & physics illustrations)

**Session theme:** Execute Visual Roadmap Milestone Batch 2, creating and linking 5 educational textbook illustrations across P7 Integrated Science anatomy and physics modules.

**Changed:**
- `public/images/science/` — Generated 5 high-clarity primary school textbook illustrations for Milestone Batch 2:
  - `/images/science/hinge-and-ball-joints.png` (Comparison of elbow hinge joint and shoulder ball-and-socket joint).
  - `/images/science/kidney-nephron-diagram.png` (Anatomical cross-section of the human kidney showing cortex, medulla, pelvis, ureter).
  - `/images/science/bar-magnet-field-lines.png` (Rectangular bar magnet showing N/S poles and looping magnetic field lines).
  - `/images/science/electromagnet-nail-coil.png` (Electromagnet setup with insulated wire coiled around iron nail connected to a dry cell).
  - `/images/science/pinhole-camera-ray-diagram.png` (Ray diagram of pin-hole camera focusing straight light rays into an inverted real image).
- `app/lib/science-topics.ts` — Linked all 5 Milestone Batch 2 illustrations directly into core learning modules (`joint-types`, `kidney-structure-function`, `magnetic-materials`, `electromagnet-setup`, `pinhole-camera`). Total live textbook illustrations now at **16 assets**.
- `docs/spec/visual-roadmap-v3.md` — Updated master visual spec moving Batch 2 into completed status and advancing to Batch 3 (African Geography & Climate).

**Verified locally:**
- Production build passed cleanly with `✓ Generating static pages (94/94)`.

## v0.9.1 — 2026-07-05 — Visual Roadmap Spec & Milestone Batch 1 visual integration complete

**Session theme:** Establish comprehensive multi-subject visual roadmap spec and execute Milestone Batch 1 visual textbook illustrations.

**Changed:**
- `docs/spec/visual-roadmap-v3.md` — Created comprehensive master visual specification mapping every module requiring textbook diagrams across Science, Social Studies, Mathematics, and English organized into 5 phased milestone batches.
- `public/images/` — Created 5 new high-impact primary school textbook illustrations for Milestone Batch 1:
  - Science: `/images/science/simple-electric-circuit.png`, `/images/science/human-skin-cross-section.png`, `/images/science/human-eye-anatomy.png`.
  - Social Studies: `/images/social-studies/great-rift-valley-formation.png`, `/images/social-studies/relief-orographic-rainfall.png`.
- `app/lib/science-topics.ts` & `app/lib/social-topics.ts` — Linked all 11 baseline and Milestone Batch 1 textbook illustrations directly to their exact module IDs (`skeleton-basics`, `circuit-components`, `four-excretory-organs`, `skin-structure-layers`, `refraction-dispersion-rainbow`, `human-eye-structure-care`, `food-chains-webs`, `six-regions`, `rift-valley`, `latitude-altitude-distance`, `caring-resources`).

**Verified locally:**
- Production build passed cleanly with `✓ Generating static pages (94/94)`.

## v0.9.0 — 2026-07-04 — Implement native image rendering and integrate textbook visual illustrations

**Session theme:** Replace crude hand-coded stick-figure SVGs with high-quality educational textbook illustrations rendered natively inside Lesson Structure v3 modules.

**Changed:**
- `app/lib/topics.ts` — Extended `SubtopicModule` data interface to support `imageUrl?: string` and `imageCaption?: string`.
- `app/components/TopicTabs.tsx` — Updated `ModularTopicView` to render `.module-image-card` with responsive native lazy-loaded images directly beneath module big ideas.
- `app/app/globals.css` — Added responsive styling for `.module-image-card`, `.module-image`, and `.module-image-caption`.
- `public/images/` — Created clean educational textbook illustrations using AI image generation across subjects:
  - Science: `/images/science/human-skeleton.png`, `/images/science/urinary-system.png`, `/images/science/light-refraction.png`, `/images/science/food-chain.png`.
  - Social Studies: `/images/social-studies/map-of-africa.png`, `/images/social-studies/agroforestry-farm.png`.
- `app/lib/science-topics.ts` & `app/lib/social-topics.ts` — Linked newly generated visual textbook assets to core learning modules (`skeleton-basics`, `four-excretory-organs`, `refraction-dispersion-rainbow`, `food-chains-webs`, `regions-africa`, `tree-projects`).

**Verified locally:**
- Production build passed cleanly with `✓ Generating static pages (94/94)`.

## v0.8.2 — 2026-07-04 — Populate Mathematics question banks and clarify study positioning

**Session theme:** Eliminate remaining zero-question bugs in Mathematics and clarify platform positioning as a structured study app rather than a revision app.

**Changed:**
- `app/lib/topics.ts` & `app/lib/question-bank.ts` — Populated topic quizzes (`quiz: [...]`) for all 11 official Mathematics topics with 8 verified questions each. Added seeded practice banks for `operations-on-whole-numbers`, `patterns-and-sequences`, `integers`, and `construction`, ensuring every single one of the 11 official Mathematics topics has between 20 and 68 practice questions in endless practice mode.
- `app/page.tsx` — Replaced legacy references to "revision" with "structured study" (`Structured study that follows the syllabus.`), and confirmed main menu displays `11 study topics`.

**Verified locally:**
- Production build passed with `✓ Generating static pages (94/94)`.

## v0.8.1 — 2026-07-04 — Refine UI layout and fix zero-question practice bank bugs across subjects

**Session theme:** Eliminate zero-question states and streamline UI layout across landing pages and teacher dashboard.

**Changed:**
- `app/lib/topics.ts` & `app/lib/question-bank.ts` — Fixed zero-question states by ensuring all 11 official Mathematics topics and all 7 English topics have fully populated `quiz` and practice question banks.
- `app/page.tsx` — Updated main subject overview card to display `P7 · 6 themes · 11 study topics`.
- `app/math/p7/page.tsx` — Cleaned up Mathematics strand page layout by grouping all 11 official topics under the 6 core NCDC themes (`Sets`, `Numeracy`, `Interpretation of Graphs and Data`, `Geometry`, `Measurement`, `Algebra`), eliminating redundant banner boxes and saving screen space.
- `app/components/TeacherDashboard.tsx` — Updated topic lookup to search across Mathematics, Integrated Science, Social Studies, and English so teacher progress reports render correctly for all subjects.

**Verified locally:**
- Production build passed with `✓ Generating static pages (94/94)`.

## v0.8.0 — 2026-07-04 — P7 Mathematics calibrated to 11 official NCDC topics (Lesson Structure v3 rollout complete across all 4 subjects)

**Session theme:** Restructure and calibrate P7 Mathematics from 38 fragmented micro-topics into the 11 official NCDC syllabus topics across 6 themes, preserving all existing worked examples and practice items inside v3 modular subtopics.

**Changed:**
- `app/lib/topics.ts` — Restructured `TOPICS` into the exact 11 official NCDC syllabus topics (`set-concepts`, `whole-numbers`, `operations-on-whole-numbers`, `patterns-and-sequences`, `fractions`, `integers`, `data-handling`, `construction`, `time`, `length-mass-capacity`, `algebra`). All 38 previous micro-competencies are preserved as NCDC subtopics and paginated modules (`learnIt`, `workedExample`, `tryThis`). Updated `getTopic` with fallback subtopic lookup so legacy references resolve seamlessly.
- `app/lib/question-bank.ts` — Updated `MATHS_BANK` to map questions under the 11 official parent topics while maintaining legacy subtopic banks for full backward compatibility.
- Root docs updated: `STATUS.md`, `CHECKLIST.md`, `HANDOFF.md`, `CHANGELOG.md`.

**Verified locally:**
- Production build passed with `✓ Generating static pages (94/94)`. All 4 active subjects (Social Studies 10/10, Integrated Science 8/8, English 7/7, Mathematics 11/11) are now fully rolled out on Lesson Structure v3.

## v0.7.1 — 2026-07-04 — Deep NCDC curriculum audit and module enrichment pass across SST, Science, and English

**Session theme:** Rigorously cross-reference NCDC syllabi (`content/curriculum/*.json`) to eliminate compressed summaries and missing competencies across Social Studies, Integrated Science, and English prior to Mathematics rollout.

**Changed:**
- `app/lib/social-topics.ts` — Added explicit subtopic `forms-of-government` (Democracy/Republics, Monarchies e.g. Eswatini/Morocco, Military regimes/Dictatorships, Pillars of good governance) to `nationalism-road-independence`. Added subtopic `political-instabilities-conflicts` (Causes: colonial borders, tribalism, coups d'état, corruption; Effects: refugees/IDPs, brain drain; Solutions: AU/regional peacekeeping) to `post-independence-africa`. Expanded `economic-developments-africa` subtopic 4 (`challenges-solutions`) from 2 generic summaries into 5 comprehensive modules covering infrastructure/energy bottlenecks, trade terms/foreign debt, governance/corruption, climate change, and industrial transformation.
- `app/lib/science-topics.ts` — Expanded topics 5–8 (`excretory-system`, `light-energy`, `interdependence-environment`, `population-and-health`) from thin 2–3 module placeholders into 14 rich subtopics with 30 detailed modules, ensuring 100% 1-to-1 module coverage of every NCDC sub-competency.
- `app/lib/english-topics.ts` — Enriched `letter-writing` subtopics with dedicated format, layout, and vocabulary modules for both informal and formal official letters.

**Verified locally:**
- Production build passed with `✓ Generating static pages (148/148)`.

## v0.7.0 — 2026-07-04 — P7 Integrated Science structural migration to v3 complete & build recovery

**Session theme:** Recover build from incomplete agent migration and finish rolling out modular architecture (v3) to P7 Integrated Science.

**Changed:**
- `app/lib/science-topics.ts` — fixed syntax error caused by truncated previous session (`crashed agent migrate 2`). Completed structural migration of remaining 4 topics (`excretory-system`, `light-energy`, `interdependence-environment`, `population-and-health`) to v3 modular structure mapped from `content/curriculum/p7-science.json`. All 8 science topics now have NCDC-mapped `subtopics` arrays and modular steps.
- Root docs updated: `STATUS.md`, `CHECKLIST.md`, `HANDOFF.md`, `CHANGELOG.md`.

**Verified locally:**
- Production build passed with `✓ Generating static pages (148/148)`.

**Next:**
- Roll v3 structural migration to Mathematics (38 topics).

## v0.6.9 — 2026-07-04 — P7 English structural migration to v3 complete

**Session theme:** Roll out the modular architecture (v3) to P7 English.

**Changed:**
- `app/lib/english-topics.ts` — converted all 7 topics to v3 modular structure, mapping them to NCDC sub-competencies from `content/curriculum/p7-english.json`.
- Root docs updated: `STATUS.md`, `HANDOFF.md`.

**Verified locally:**
- Production build passed with `✓ Generating static pages (148/148)`.

**Next:**
- Roll v3 structural migration to Integrated Science and Mathematics.

## v0.6.8 — 2026-07-04 — Social Studies content audit and gap-filling complete

**Session theme:** Final comprehensive audit of Social Studies v3 content against NCDC curriculum to ensure 100% alignment before starting English v3 migration.

**Fixed:**
- `app/lib/social-topics.ts` — removed duplicate `weather-instruments` module in `climatic-regions` subtopic.
- `app/lib/social-topics.ts` — added missing `climate-problems-solutions` module to `climate-human-activities` subtopic, covering drought, flooding, extreme heat and climate change solutions.

**Verified locally:**
- Content audited against `content/curriculum/p7-social-studies.json`.
- 10/10 topics fully modular and curriculum-aligned.

**Milestone:**
- **Social Studies "SST pass" is officially complete.**
- Next: Roll v3 structure to English (structural migration first, then deepening).

## v0.6.7 — 2026-07-04 — Major World Organisations converted to v3 — Social Studies v3 complete

**Session theme:** Finish the Social Studies v3 modular rollout. SST is now 10/10 modular.

**Added:**
- `docs/ncdc-extracts/p7-sst-topic-10-major-world-organisations.md` — deep extract mapping NCDC curriculum to modular topic.

**Changed:**
- `app/lib/social-topics.ts` — converted `major-world-organisations` to v3 (3 subtopics / 8 modules):
  - un-formation-organs: Formation of the United Nations; Origin, objectives, membership, organs and functions of the UN
  - un-agencies-rights: UN agencies and their functions; UN Human Rights Charter; Importance of the United Nations
  - commonwealth-challenges: The Commonwealth of Nations; Membership and functions of the Commonwealth; Challenges of the UN and the Commonwealth
- Root docs updated: `STATUS.md`, `HANDOFF.md`, `CHECKLIST.md`, `CHANGELOG.md`.

**Verified locally:**
- Production build passed with `✓ Generating static pages (148/148)`.

**Milestone:**
- **Social Studies v3 rollout is complete — 10/10 topics, 97 total modules.**
- Next: Roll v3 structure to Mathematics, Integrated Science and English (structural migration, preserve v2 content), then deepen.

## v0.6.6 — 2026-07-04 — Economic Developments in Africa converted to v3

**Session theme:** Continue SST v3 modular rollout — 9/10 complete.

**Added:**
- `docs/ncdc-extracts/p7-sst-topic-09-economic-developments-africa.md` — deep extract mapping NCDC curriculum to modular topic.

**Changed:**
- `app/lib/social-topics.ts` — converted `economic-developments-africa` to v3 (4 subtopics / 8 modules):
  - resources-africa: Major economic resources; Problems in utilisation; Caring for resources
  - economic-activities-development: Major economic development in Africa
  - country-case-studies: Nigeria/Sudan/Libya; South Africa/DRC/Uganda; Comparing countries
  - challenges-solutions: Challenges affecting economic development; Possible solutions
- Root docs updated.

**Verified locally:**
- Production build passed with `✓ Generating static pages (148/148)`.

**Remaining SST v3:**
- 1 Social Studies topic still on v2: `major-world-organisations`.


## v0.6.5 — 2026-07-04 — Post-Independence Africa converted to v3

**Session theme:** Continue SST v3 modular rollout back-to-back, with session documentation updated per founder rule.

**Added:**
- `docs/ncdc-extracts/p7-sst-topic-08-post-independence-africa.md` — deep extract mapping NCDC curriculum to modular topic.

**Changed:**
- `app/lib/social-topics.ts` — converted `post-independence-africa` to v3 (3 subtopics / 7 modules):
  - oau-formation-aims: Formation of the OAU; Objectives, functions, achievements and failures of OAU
  - au-formation-organs: Formation and objectives of the AU; Challenges and organs of the AU
  - regional-economic-groupings: COMESA, ECOWAS, SADC, IGAD; Advantages and disadvantages of economic cooperation; Ways of solving problems faced by economic groupings
- Root docs updated: `STATUS.md`, `HANDOFF.md`, `CHECKLIST.md`, `CHANGELOG.md`.

**Verified locally:**
- Production build passed with `✓ Generating static pages (148/148)`.

**Remaining SST v3:**
- 2 Social Studies topics still on v2: `economic-developments-africa`, `major-world-organisations`.
- Mathematics, Integrated Science and English still on v2; structural v3 migration queued after SST.


## v0.6.4 — 2026-07-04 — Nationalism and the Road to Independence converted to v3

**Session theme:** Continue the SST v3 modular rollout, with strong session documentation discipline per founder request.

**Added:**
- `docs/ncdc-extracts/p7-sst-topic-07-nationalism-road-independence.md` — deep extract mapping NCDC curriculum to modular topic.

**Changed:**
- `app/lib/social-topics.ts` — converted `nationalism-road-independence` to v3 (5 subtopics / 11 modules):
  - meaning-nationalism-panafricanism: nationalism & patriotism; Pan-Africanism
  - panafricanists-nationalists-work: work of Pan-Africanists and nationalists; leading Pan-Africanists (Nkrumah, Kenyatta, Nyerere, Lumumba, Mandela)
  - countries-not-colonised: Ethiopia and Liberia; reasons for maintaining independence
  - methods-problems-independence: methods of work; problems faced
  - political-systems: multiparty system; single party system; comparing political systems
- Root docs updated: `STATUS.md`, `HANDOFF.md`, `CHECKLIST.md`, `CHANGELOG.md` — session documentation protocol enforced: what was done, what is next.

**Verified locally:**
- Production build passed with `✓ Generating static pages (148/148)`.

**Remaining SST v3:**
- 3 Social Studies topics still on v2: `post-independence-africa`, `economic-developments-africa`, `major-world-organisations`.
- Mathematics, Integrated Science and English still on v2; structural v3 migration queued after SST.

## v0.6.3 — 2026-07-03 — Continue SST v3 conversion; strategic pivot to v3 everywhere approved

**Session theme:** The founder decided to apply Lesson Structure v3 across all subjects because time is short and v3 is now the proven destination structure. The session focused on continuing the Social Studies conversion pipeline while acknowledging the broader rollout ahead.

**Added:**
- `docs/ncdc-extracts/p7-sst-topic-06-foreign-influence-in-africa.md` — deep extract mapping NCDC pages 337–342 to the new modular topic.

**Changed:**
- `app/lib/social-topics.ts` — converted `people-ethnic-groups-settlement` to v3 (4 subtopics / 8 modules) using the existing deep extract.
- `app/lib/social-topics.ts` — converted `foreign-influence-africa` to v3 (6 subtopics / 11 modules) with NCDC-aligned content.
- Root handoff docs (`STATUS.md`, `HANDOFF.md`, `CHECKLIST.md`) updated for a clean founder push and next-session restart.

**Strategic decision recorded:**
- Finish the remaining 4 Social Studies topics first, then roll v3 structure to Mathematics, Integrated Science and English.
- For the non-SST subjects, the approved plan is: migrate every topic to v3 *structure* first (subtopics/modules mapped from NCDC curriculum JSONs, existing v2 content preserved inside modules), then deepen modules topic-by-topic.

**Verified locally:**
- Dependencies reinstalled and production build passed with `✓ Generating static pages (148/148)`.

**Remaining before v3 is everywhere:**
- 4 Social Studies topics still on v2: `nationalism-road-independence`, `post-independence-africa`, `economic-developments-africa`, `major-world-organisations`.
- Mathematics, Integrated Science and English still on v2; structural v3 migration not yet started.

## v0.6.1 — 2026-07-02 — Modular spike review fixes: navigation, content depth and UI simplification

**Session theme:** Founder review of the v3 modular spike found three issues: rigid topic-level sections were repeating under every module, browser back jumped out of the topic instead of back to the module list, and the UI felt too box-heavy compared with the content.

**Fixed:**
- `app/components/TopicTabs.tsx` — wrapped the topic-level Worked example / Common mistakes / Try this / Guided practice / Quick recap block so it only appears for non-modular topics. Modular topics now show only per-module content.
- `app/components/TopicTabs.tsx` — modular selection is now synced to the URL hash (`#subtopic-id` or `#subtopic-id/module-index`). Browser back/forward now moves through module → subtopic list → topic page as expected.
- `app/app/globals.css` — simplified modular styles: removed heavy borders and boxes, made subtopic cards flatter, reduced visual clutter so the text content has more room.

**Changed:**
- `app/lib/social-topics.ts` — deepened and clarified the `location-of-africa` modular content. Expanded from 14 to 16 modules, with fuller teacher-voice explanations, clearer step-by-step worked examples, and stronger alignment to the NCDC P7 Set One PDF.
- `app/lib/social-topics.ts` — removed the duplicated v2 `note.study` from `location-of-africa`; the modular `subtopics` array is now the single source of truth for this topic.

**Verified locally:**
- Production build passed with `✓ Generating static pages (147/147)`.

**Result:**
- The modular topic now reads as one coherent lesson in small steps, without repeated rigid sections, and navigation behaves like a native multi-screen experience.

## v0.6.2 — 2026-07-03 — Modular role model + SST conversion starts

**Session theme:** Make `location-of-africa` a clean, copyable template, then begin converting the remaining SST topics to v3 one by one.

**Added:**
- `docs/ncdc-extracts/p7-sst-topic-01-location-of-africa.md` — deep extract mapping NCDC pages 315–317 to every `location-of-africa` module.
- `docs/ncdc-extracts/p7-sst-topic-02-physical-features-of-africa.md` — deep extract mapping NCDC pages 318–321 to the new modular topic.
- `docs/ncdc-extracts/p7-sst-topic-03-climate-of-africa.md` — deep extract mapping NCDC pages 322–326 to the new modular topic.
- `docs/ncdc-extracts/p7-sst-topic-04-vegetation-of-africa.md` — deep extract mapping NCDC pages 327–331 to the new modular topic.
- `app/components/ReportContentIssue.tsx` — in-app content issue reporter for modular topics.
- `app/app/teacher/content-reports/page.tsx` — reviewer page to view and export locally stored reports.

**Changed:**
- `app/lib/social-topics.ts` — converted `physical-features-of-africa`, `climate-of-africa` and `vegetation-of-africa` to v3 modular, with content sourced from the NCDC PDF.
- `app/components/TopicTabs.tsx` — added `ReportContentIssue` to the modular viewer footer.
- `app/app/teacher/page.tsx` — added link to the content-reports review page.
- `app/app/globals.css` — fixed potential button overlap in modular pagination on small screens; added report-list styles; improved tab shrinking.

**Decision:**
- Finish Social Studies first, then roll v3 to other subjects.
- Source every conversion strictly from NCDC; produce a deep-extract doc per topic.
- No backend for content issues — use localStorage + GitHub issue link.

**Verified locally:**
- Reinstalled dependencies and production build passed with `✓ Generating static pages (148/148)`.

---

## v0.6.0 — 2026-07-02 — Lesson Structure v3 modular architecture spike

**Session theme:** Address founder insight that AI-generated topic pages compress content because the generation target (one whole topic) and the UI (one scrolling page) both force summarisation. Move from a flat topic page to a hierarchical module structure.

**Added:**
- `docs/spec/tendo-lesson-structure-v3-modular.md` — v3 architecture spec: topics as directories, subtopics matching NCDC sub-competencies, modules as atomic paginated learning steps.
- `app/lib/topics.ts` — new modular types: `TopicVisual`, `SubtopicModule`, `Subtopic`, and optional `subtopics` field on `Topic`.
- `app/components/TopicTabs.tsx` — modular topic directory + module viewer rendered when `topic.subtopics` exists. Includes Previous/Next pagination, progress dots, per-module big idea, learn-it content, worked example, try-this, visual brief and exam tip.
- `app/app/globals.css` — styles for `.modular-directory`, `.subtopic-grid`, `.subtopic-card`, `.modular-viewer`, `.modular-module`, `.modular-pagination` and responsive rules.
- `app/lib/social-topics.ts` — added `subtopics` to `location-of-africa` only, with 5 NCDC-aligned subtopics and modules sourced from the NCDC P7 Set One PDF.

**Changed:**
- `app/components/TopicTabs.tsx` — Read tab now checks `topic.subtopics` first and falls back to v2 `note.study` or legacy content safely.
- `app/components/TopicTabs.tsx` — `buildScript()` now builds the listen-aloud script from modular content when `subtopics` is present.

**Not changed (intentionally):**
- The other 9 Social Studies topics still use Lesson Structure v2.
- Mathematics, Integrated Science and English are untouched.

**Verified locally:**
- Production build passed with `✓ Generating static pages (147/147)`.

**Result:**
- The modular architecture is proven end-to-end on one topic. It breaks the summary trap by giving each learning step its own focused screen and generation target.

---

## v0.5.23 — 2026-07-02 — Key-word definitions teacher-voice phrasing pass

**Session theme:** Address founder/partner feedback that some key-word definitions still sounded like machine/database labels rather than Ugandan classroom explanations.

**Changed:**
- `app/lib/topics.ts` — revised Maths key-word definitions into sentence-style teacher phrasing.
- `app/lib/english-topics.ts` — revised English key-word definitions into sentence-style teacher phrasing.
- `app/lib/science-topics.ts` — revised Science key-word definitions into sentence-style teacher phrasing.
- `app/lib/social-topics.ts` — revised Social Studies key-word definitions into sentence-style teacher phrasing.

**Example direction:**
- Before: `Independence: Freedom of a country`
- After: `Independence is freedom of a country to govern itself.`

**Verified locally:**
- Production build passed with `✓ Generating static pages (147/147)`.

**Result:**
- Key words now read more like a teacher explaining to P7 learners, not a dictionary/database export.

---

## v0.5.22 — 2026-07-02 — Post-push cleanup and Pilot Readiness Pack v1

**Session theme:** After the Lesson Structure v2 grouped push was confirmed live, prepare the next practical milestone: pilot readiness.

**Added:**
- `docs/ops/post-push-verification-lesson-structure-v2-2026-07-02.md` — live-route verification after the grouped restructuring push.
- `docs/pilot/teacher-classroom-guide-v1.md` — teacher-facing classroom use guide.
- `docs/pilot/pilot-checklist-v1.md` — before/during/after pilot checklist.
- `docs/pilot/founder-demo-script-v1.md` — 5–10 minute founder demo script.
- `docs/pilot/teacher-feedback-loop-v1.md` — structured teacher feedback collection loop.

**Changed:**
- `app/app/page.tsx` — updated stale Maths home-card wording from `40 sub-topics` to `38 study topics`.
- Root docs updated to show the Lesson Structure v2 milestone has been pushed and verified live.

**Verified live before cleanup:**
- Home page, one topic from each subject, and worksheet generator loaded successfully in production.
- Lesson Structure v2 was visible live across sampled Maths, Science, English and Social Studies topics.

**Result:**
- The app is no longer only content-ready; it now has practical pilot materials for teacher/school conversations.

---

## v0.5.21 — 2026-07-02 — Final Lesson Structure v2 release review completed

**Session theme:** Review all subjects and prepare the grouped restructuring milestone for founder push.

**Added:**
- `docs/ops/lesson-structure-v2-release-review-2026-07-02.md` — final release-review audit for the Lesson Structure v2 and visual alignment milestone.

**Verified:**
- Mathematics: 38/38 topics have `note.study`, visual brief and PLE tip.
- English: 7/7 topics have `note.study`, visual brief and PLE tip.
- Integrated Science: 8/8 topics have `note.study`, visual brief and PLE tip.
- Social Studies: 10/10 topics have `note.study`, visual brief and PLE tip.
- TopicDiagram coverage: 63 active topic IDs / 63 diagram IDs, with no missing or extra diagram IDs.

**Verified locally:**
- Production build passed with `✓ Generating static pages (147/147)`.

**Result:**
- The grouped restructuring milestone is ready for founder review and push prep.

---

## v0.5.20 — 2026-07-02 — Visual brief and diagram alignment pass

**Session theme:** Address founder/partner concern that visuals/images can feel off by making visuals more instructional and less decorative.

**Changed:**
- `app/components/TopicTabs.tsx` — upgraded v2 Visual brief rendering into a more useful instructional visual card with a preview icon and extracted checklist-style reading steps.
- `app/app/globals.css` — restyled visual briefs to look like learning aids rather than dashed placeholder notes.
- `app/components/TopicDiagram.tsx` — expanded Maths diagram coverage so all 38 Maths topics now have rendered instructional diagrams or reusable diagram cards, not only visual text briefs.

**Visual direction now:**
- Maths: formula cards, conversion ladders, number lines, process flows and table/chart helpers.
- English: writing templates, message checklists and tone/purpose cards.
- Science: labelled/process diagrams and prevention/action flows.
- Social Studies: maps, timelines, cause/effect and comparison visuals.

**Verified locally:**
- Production build passed with `✓ Generating static pages (147/147)`.

**Result:**
- The visual layer now better matches Lesson Structure v2. Visuals are presented as teaching tools, not decorative images.

---

## v0.5.19 — 2026-07-02 — Full Maths Lesson Structure v2 conversion completed

**Session theme:** Respond to founder concern that Maths is a big subject and also needs the clearer structure, not only a targeted sample.

**Changed:**
- `app/lib/topics.ts` — all 38 published P7 Mathematics topics now include `note.study` with Big idea, Key words, Learn it in parts, Visual brief and PLE tip.
- Root docs/spec updated to show Lesson Structure v2 now covers all four active P7 subjects.

**Maths v2 emphasis:**
- clearer method steps for multi-step topics
- formula selection and unit warnings
- visual briefs for diagrams, conversion ladders, number lines, formula cards and process flows
- PLE tips focused on common traps such as wrong units, wrong operation, double-counting, decimal alignment and unclear variables

**Verified locally:**
- Production build passed with `✓ Generating static pages (147/147)`.

**Result:**
- The study-page restructuring is now consistent across Mathematics, English, Integrated Science and Social Studies. This is a stronger grouped milestone than pushing after only SST/Science/English.

---

## v0.5.18 — 2026-07-02 — Targeted Maths Lesson Structure v2 upgrade completed

**Session theme:** Finish the grouped restructuring pass by upgrading the most visual and word-problem-heavy Maths topics instead of forcing all 38 Maths pages into v2 at once.

**Changed:**
- `app/lib/topics.ts` — added `note.study` to 12 high-impact Maths topics: Venn diagrams, Fractions, Proportion and percentages, Area, Volume, Equations, Mean/Median/Mode/Range, Money, Data handling, Bearing/Scale drawing, Coordinates and Probability introduction.
- Root docs/spec updated to mark the Lesson Structure v2 restructuring milestone as ready for founder review/push prep.

**Verified locally:**
- Production build passed with `✓ Generating static pages (147/147)`.

**Result:**
- SST, Science and English are fully converted to v2, and Maths now has targeted v2 support on the topics most likely to benefit from diagrams, formula cards, process flows and PLE trap warnings.

---

## v0.5.17 — 2026-07-02 — English converted to Lesson Structure v2

**Session theme:** Continue grouped study-page restructuring after Science, keeping pace high without pushing small batches.

**Changed:**
- `app/lib/english-topics.ts` — all 7 official P7 English topics now include `note.study` with Big idea, Key words, Learn it in parts, Visual brief and PLE tip.
- `docs/spec/tendo-lesson-structure-v2.md` — updated rollout status to include English.
- Root docs updated to show SST, Science and English are now converted.

**English v2 emphasis:**
- clearer writing-format guidance
- vocabulary for compositions, letters, announcements, speeches, posters and ceremony messages
- visual briefs as templates/checklists instead of decorative images
- practical PLE tips around tone, audience, purpose, tense and format

**Verified locally:**
- Production build passed with `✓ Generating static pages (147/147)`.

**Result:**
- English now uses the same child-friendly study flow as Social Studies and Science, with stronger support for writing tasks.

---

## v0.5.16 — 2026-07-02 — Integrated Science converted to Lesson Structure v2

**Session theme:** Continue the fast grouped study-page restructuring after full Social Studies v2 conversion.

**Changed:**
- `app/lib/science-topics.ts` — all 8 P7 Integrated Science topics now include `note.study` with Big idea, Key words, Learn it in parts, Visual brief and PLE tip.
- `docs/spec/tendo-lesson-structure-v2.md` — updated rollout status to include Science.
- Root docs updated to show Science v2 is complete and English is next.

**Science v2 emphasis:**
- clearer key vocabulary
- smaller process/application sections
- instructional visual briefs such as labelled diagrams, flows, comparison cards and prevention cards
- safety-focused PLE tips for electricity, body systems and Population and Health

**Verified locally:**
- Production build passed with `✓ Generating static pages (147/147)`.

**Result:**
- Integrated Science no longer depends on the old paragraph-heavy Read flow. All official Science topics now have a clearer P7-friendly study structure.

---

## v0.5.15 — 2026-07-02 — Social Studies fully converted to Lesson Structure v2

**Session theme:** Continue the study-page restructuring quickly without pushing every small change.

**Changed:**
- `app/lib/social-topics.ts` — all 10 P7 Social Studies topics now include `note.study` with Big idea, Key words, Learn it in parts, Visual brief and PLE tip.
- `docs/spec/tendo-lesson-structure-v2.md` — updated from pilot status to full Social Studies rollout status.
- Root docs updated to reflect full SST v2 conversion and next direction.

**Verified locally:**
- Production build passed with `✓ Generating static pages (147/147)`.

**Result:**
- Social Studies no longer uses the old paragraph-heavy study flow. It now has a clearer, child-friendly structure across all official topics.

---

## v0.5.14 — 2026-07-02 — Lesson Structure v2 pilot started for child-friendly study pages

**Session theme:** Respond to founder/partner feedback that study content needs a clearer, more child-friendly structure and that visuals should be instructional rather than decorative.

**Added:**
- `docs/spec/tendo-lesson-structure-v2.md` — new study-page structure standard.

**Changed:**
- `app/lib/topics.ts` — added optional `note.study` structure for Big idea, Key words, Learn it in parts, Visual brief and PLE tip.
- `app/components/TopicTabs.tsx` — Read tab now renders the new v2 structure when a topic provides it, while old topics remain compatible.
- `app/app/globals.css` — added v2 study-card, vocabulary, section, visual-brief and exam-tip styles.
- `app/lib/social-topics.ts` — piloted v2 structure on Location of Africa, Climate of Africa and Economic developments in Africa.
- Root docs updated to track the restructuring direction.

**Verified locally:**
- Production build passed with `✓ Generating static pages (147/147)`.

**Result:**
- The restructuring path is now in place. Next step is to roll Lesson Structure v2 across remaining SST topics before pushing a grouped restructuring milestone.

---

## v0.5.13 — 2026-07-01 — Four-subject P7 core closeout audit completed

**Session theme:** Close out the post-push verification, teacher usefulness and non-maths subject-deepening sequence with a full four-subject audit.

**Added:**
- `docs/ops/four-subject-core-closeout-audit-2026-07-01.md` — final closeout audit for Maths, English, Science, Social Studies and teacher worksheet readiness.

**Changed:**
- `STATUS.md`, `HANDOFF.md`, `CHECKLIST.md` — updated to reflect the four-subject core closeout and current practice totals.
- `docs/ops/p7-english-quality-audit-2026-07-01.md` and `docs/ops/p7-science-quality-audit-2026-07-01.md` — clarified later deepening updates where earlier first-wave totals were stale.

**Verified totals:**
- Mathematics: 195 central-bank questions
- English: 140 central-bank questions
- Integrated Science: 160 central-bank questions
- Social Studies: 200 central-bank questions
- Total central question-bank pool: 695 questions

**Verified locally:**
- Production build passed with `✓ Generating static pages (147/147)`.

**Result:**
- The four-subject P7 core is product-level complete for present scope. Remaining work is enhancement and teacher-feedback iteration.

---

## v0.5.12 — 2026-07-01 — P7 Social Studies deepened with guided SST tasks and larger practice bank

**Session theme:** Continue deepening non-maths subjects toward maths-level product completeness, after English and Science.

**Changed:**
- `app/lib/social-topics.ts` — added guided map/history/development/organisation tasks for all 10 SST topics.
- `app/lib/question-bank.ts` — expanded Social Studies practice depth to 20 questions per topic.
- `docs/ops/p7-social-studies-deepening-pass-2026-07-01.md` — documented the SST deepening pass.
- Root docs updated to reflect Social Studies strengthening.

**Social Studies practice now:**
- 10 topics
- 20 questions per topic
- 200 Social Studies practice questions total
- guided map/history/development tasks for all 10 topics

**Verified locally:**
- Production build passed with `✓ Generating static pages (147/147)`.

**Result:**
- Social Studies now has stronger PLE-oriented depth inside the official NCDC Living Together in Africa outline.

---

## v0.5.11 — 2026-07-01 — P7 Science deepened with guided application tasks and larger practice bank

**Session theme:** Continue deepening non-maths subjects toward maths-level product completeness, after English.

**Changed:**
- `app/components/TopicTabs.tsx` — renamed the practice section to Guided practice so it fits Science and SST, not only English writing.
- `app/lib/science-topics.ts` — added guided application/experiment tasks for all 8 Science topics.
- `app/lib/question-bank.ts` — expanded Science practice depth to 20 questions per topic.
- `app/app/globals.css` — reused guided-practice card styles for Science.
- `docs/ops/p7-science-deepening-pass-2026-07-01.md` — documented the Science deepening pass.
- Root docs updated to reflect Science strengthening.

**Science practice now:**
- 8 topics
- 20 questions per topic
- 160 Science practice questions total
- guided application/experiment tasks for all 8 topics

**Verified locally:**
- Production build passed with `✓ Generating static pages (147/147)`.

**Result:**
- Science now has stronger classroom and exam-prep depth inside the official 8 NCDC topics.

---

## v0.5.10 — 2026-07-01 — P7 English deepened with writing-practice packs and larger practice bank

**Session theme:** Start deepening the non-maths subjects toward maths-level product completeness, beginning with English.

**Changed:**
- `app/lib/topics.ts` — topic notes now support optional writing-practice tasks.
- `app/components/TopicTabs.tsx` — Read tab renders writing-practice cards with prompts, planning steps, checklists and model openings.
- `app/lib/english-topics.ts` — added writing-practice packs for all 7 English topics.
- `app/lib/question-bank.ts` — expanded English practice depth to 20 questions per topic.
- `app/app/globals.css` — added writing-practice card styles.
- `docs/ops/p7-english-deepening-pass-2026-07-01.md` — documented the English deepening pass.
- Root docs updated to reflect English strengthening.

**English practice now:**
- 7 topics
- 20 questions per topic
- 140 English practice questions total
- writing-practice packs for all 7 topics

**Verified locally:**
- Production build passed with `✓ Generating static pages (147/147)`.

**Result:**
- English now has more depth inside fewer official NCDC themes, which is the correct standard for English compared with Maths.

---

## v0.5.9 — 2026-07-01 — Teacher worksheet generator made more classroom-ready

**Session theme:** After the Social Studies + English push was confirmed working, the next execution step was teacher-facing usefulness.

**Changed:**
- `app/components/WorksheetGenerator.tsx` — added subject pool summary cards, class/term/time/marks fields, quick length buttons, custom instructions and a separate answer-key section.
- `app/app/teacher/worksheet/page.tsx` — clarified the worksheet pool as question-bank topics and updated teacher-facing copy.
- `app/app/globals.css` — added styles for worksheet summary cards, quick picks, metadata grid and printable answer key.
- `docs/ops/teacher-worksheet-usefulness-pass-2026-07-01.md` — added audit note for the teacher-facing pass.
- Root docs updated to reflect the teacher usefulness pass.

**Verified locally:**
- Production build passed with `✓ Generating static pages (147/147)`.

**Result:**
- The worksheet generator is more credible for real classroom use: cleaner pupil sheet, separate answer key, better metadata and clearer subject/question-pool controls.

---

## v0.5.8 — 2026-07-01 — P7 English built, practiced, templated and completed enough for grouped push

**Session theme:** The founder intentionally stretched the Social Studies push and asked to continue into English before pushing. Religious Education was explicitly paused. This milestone completes P7 English enough to group with the unpushed Social Studies work.

**Added:**
- `app/lib/english-topics.ts` — all 7 NCDC-aligned P7 English topics across Terms I–III.
- `app/app/english/p7/page.tsx` — English topic landing page grouped by term.
- `app/app/english/p7/[topic]/page.tsx` — English topic detail route.
- `app/app/english/p7/[topic]/practice/page.tsx` — English practice route.
- `content/curriculum/p7-english.json` — NCDC-based English curriculum map.
- `docs/ops/p7-english-quality-audit-2026-07-01.md` — English quality and closeout audit.

**Changed:**
- `app/app/page.tsx` — English is now active.
- `app/components/TopicDiagram.tsx` — added English writing templates/diagrams for all 7 topics.
- `app/app/english/p7/page.tsx` — shows template counts and writing-template cues.
- `app/lib/question-bank.ts` — added English subject metadata and 12-question banks per topic.
- `app/components/WorksheetGenerator.tsx` — added English-only worksheets.
- `app/app/teacher/worksheet/page.tsx` — updated worksheet copy to include English.
- `app/lib/english-topics.ts` — deepened writing-heavy topics: Letter Writing; Rights, Responsibilities and Freedom; Environmental Protection; Ceremonies.
- Root docs updated to reflect English completion and the grouped Social Studies + English push.

**English coverage now live:**
1. School Holidays
2. Letter Writing
3. Examinations
4. Electronic Media
5. Rights, Responsibilities and Freedom
6. Environmental Protection
7. Ceremonies

**Verified locally:**
- Production build passed with `✓ Generating static pages (147/147)`.

**Result:**
- P7 English is complete enough to move on and to push as part of the grouped Social Studies + English milestone. Remaining English work is enhancement, not a core blocker.

---

## v0.5.7 — 2026-07-01 — P7 Social Studies built, diagrammed, practiced and completed enough to move on

**Session theme:** After the Science milestone was pushed, Social Studies became the next active subject. This milestone turns SST from coming-soon into a complete enough P7 subject build for current product scope.

**Added:**
- `app/lib/social-topics.ts` — all 10 NCDC-aligned P7 Social Studies topics under Living Together in Africa.
- `app/app/social-studies/p7/page.tsx` — Social Studies topic landing page grouped by term.
- `app/app/social-studies/p7/[topic]/page.tsx` — Social Studies topic detail route.
- `app/app/social-studies/p7/[topic]/practice/page.tsx` — Social Studies practice route.
- `content/curriculum/p7-social-studies.json` — NCDC-based SST curriculum map.
- `docs/ops/p7-social-studies-first-wave-audit-2026-07-01.md` — upgraded to completion audit after depth/diagram passes.

**Changed:**
- `app/app/page.tsx` — Social Studies is now active.
- `app/components/TopicDiagram.tsx` — added diagrams for all 10 SST topics.
- `app/app/social-studies/p7/page.tsx` — shows diagram counts and visual cues.
- `app/lib/question-bank.ts` — added Social Studies subject metadata and 12-question banks per topic.
- `app/components/WorksheetGenerator.tsx` — added Social Studies-only worksheets.
- `app/app/teacher/worksheet/page.tsx` — updated worksheet copy to include Social Studies.
- `app/lib/social-topics.ts` — heavy topics deepened after the first wave.
- Root docs updated to reflect SST completion status.

**SST coverage now live:**
1. Location of Africa on the Map of the World
2. Physical Features of Africa
3. Climate of Africa
4. Vegetation of Africa
5. People of Africa, Ethnic Groups and Settlement Patterns
6. Foreign Influence in Africa
7. Nationalism and the Road to Independence of Africa
8. Post-Independence Africa
9. Economic Developments in Africa
10. Major World Organisations

**Verified locally:**
- Production build passed with `✓ Generating static pages (132/132)`.

**Result:**
- P7 Social Studies is complete enough to move on. Remaining work is enhancement and teacher feedback, not core subject completion.

---

## v0.5.6 — 2026-07-01 — P7 Integrated Science built, diagrammed, practiced, audited, and added to worksheets

**Session theme:** After finishing Mathematics, the founder redirected the next-subject push from Social Studies to **P7 Integrated Science**. This milestone turns Science from unavailable/coming-soon into a serious active subject build.

**Added:**
- `app/lib/science-topics.ts` — P7 Integrated Science content data layer with all 8 NCDC-aligned topics.
- `app/app/science/p7/page.tsx` — Science strand/topic landing page.
- `app/app/science/p7/[topic]/page.tsx` — Science topic detail route.
- `app/app/science/p7/[topic]/practice/page.tsx` — Science practice route.
- `content/curriculum/p7-science.json` — P7 Science curriculum map based on the NCDC Primary Seven Set One Integrated Science outline.
- `docs/ops/p7-science-quality-audit-2026-07-01.md` — Science quality and closeout audit note.

**Changed:**
- `app/app/page.tsx` — Integrated Science is now an active subject card linking to `/science/p7`.
- `app/components/TopicDiagram.tsx` — added diagrams for all 8 Science topics and retained maths diagrams.
- `app/components/TopicTabs.tsx` — renders topic diagrams inside the Read flow.
- `app/components/PracticeRunner.tsx` — supports subject-specific back links so Science practice returns to Science, not Maths.
- `app/lib/question-bank.ts` — added subject metadata, Science banks, and 64 additional Science practice questions.
- `app/components/WorksheetGenerator.tsx` — added subject filters: Maths only, Science only, Mixed.
- `app/app/teacher/worksheet/page.tsx` — updated worksheet page copy/metadata to include Science.
- `app/app/globals.css` — added styles for Science/Maths landing diagrams and worksheet subject filters; removed stale merge-conflict markers.
- `app/lib/science-topics.ts` — deepened the heavy Science topics: Electricity and Magnetism, Simple Machines and Friction, Light Energy, and Population and Health.
- `STATUS.md`, `HANDOFF.md`, `CHECKLIST.md`, `DECISIONS.md`, `CHANGELOG.md` — updated root docs so they no longer incorrectly say Social Studies is the current next subject.

**Science coverage now live:**
1. Muscular-skeletal system
2. Electricity and magnetism
3. Energy resources in the environment
4. Simple machines and friction
5. Excretory system
6. Light energy
7. Interdependence of things in the environment
8. Population and health

**Quality notes:**
- Population and Health was handled with respectful, safety-focused wording instead of directly reproducing outdated/sensitive curriculum phrasing in learner-facing content.
- Science practice now has 15 questions per topic: 7 quiz questions plus 8 additional practice-bank questions.
- Worksheet generator can now cleanly generate Maths-only, Science-only, or mixed worksheets.

**Verified locally:**
- TypeScript check passed from `app/`.
- Production build passed with `✓ Generating static pages (111/111)`.

**Result:**
- P7 Integrated Science is live, structured, diagrammed, practice-enabled, worksheet-enabled, quality-audited and deepened.
- Honest status: Science is strong enough to demo and continue from. The founder can decide whether to accept this as “done enough” before moving to Social Studies.

---

## v0.5.5 — 2026-07-01 — P7 Mathematics completed, docs consolidated into repo, and handoff reset for Social Studies next

**Session theme:** Finish P7 Mathematics properly, close the documentation gap, and make the repo itself the single source of truth before moving to the next subject.

**Added:**
- `docs/ops/p7-maths-final-completion-audit-2026-07-01.md` — final founder-safe audit for whether mathematics can truthfully be treated as done.
- `docs/ops/p7-maths-diagram-visual-plan-2026-07-01.md` — consolidated in-repo plan for first-wave maths diagrams and visual support.

**Changed:**
- `app/lib/topics.ts` — expanded P7 Mathematics coverage substantially and cleared the held final wave with:
  - probability of numbers and events
  - regular polygons
  - algebra in real-life situations
  - plus the wider completed topic-build waves already prepared during the maths finish push
- `app/lib/question-bank.ts` — audited and corrected so the practice layer no longer lags behind the topic content.
- `app/app/math/p7/page.tsx` — reworked the maths landing page to feel more study-first, less flat, and more honestly structured; also fixed stale footer counting.
- `STATUS.md` — rewritten to reflect the real current state: P7 Mathematics is now complete enough to move focus, docs are being consolidated into the repo, and Social Studies is the next major execution target.
- `HANDOFF.md` — rewritten as a clean next-session operating brief for post-maths execution.
- `CHECKLIST.md` — updated so maths closeout is reflected accurately and the next core subject push is visible.
- `DECISIONS.md` — appended with the maths-completion and repo-docs-source-of-truth decisions.
- `CHANGELOG.md` — this entry records the maths closeout and documentation consolidation milestone.

**Removed / superseded operationally:**
- External workspace-only maths planning notes are no longer the authoritative source. Equivalent high-value docs now live inside `tendo-ug/docs/ops/`.

**Why this mattered:**
- The product could not safely move to another subject while maths still felt half-finished.
- The workspace had started splitting key documentation between repo files and external workspace docs, which is unsafe for your manual overwrite workflow.
- Root tracking docs had gone stale relative to the real maths state.

**Result:**
- P7 Mathematics is now in a founder-safe “done” state.
- The repo is now the intended home for live project documentation.
- The next subject can be started without losing the maths narrative or operational context.

**Next session:** Start Social Studies intentionally, using the same curriculum-first and study-ready standard used to finish Mathematics.

---

## v0.5.4 — 2026-06-30 — Documentation sweep begins for Trainup + NCDC study-ready alignment

**Session theme:** Before continuing deeper content work, the docs needed to stop behaving like two merged timelines. This sweep begins the cleanup so the repo reflects the real current state: Trainup pilot prep, study-first framing, NCDC alignment, and a move from demo-ready to study-ready.

**Added:**
- `docs/ops/update-handoff-protocol.md` — standing delivery protocol for manual overwrite workflow.
- `docs/ops/doc-sweep-plan-2026-06-30.md` — plan for cleaning the project documents in a reliable order.
- `docs/ops/ncdc-p7-math-coverage-audit-2026-06-30.md` — detailed curriculum coverage audit against `content/curriculum/p7-math.json`.
- `docs/ops/session-note-2026-06-30-next-step-alignment.md` — internal note capturing the founder's clarified direction for the next pass.

**Changed:**
- `STATUS.md` — rewritten to reflect the real current state: Trainup pilot prep, about 10 stronger study-ready topics, documentation cleanup, practice-layer alignment next.
- `HANDOFF.md` — rewritten to remove mixed historical states and give the next session a clean operating picture.
- `CHECKLIST.md` — rewritten so the current milestone is Trainup pilot prep and NCDC study-ready alignment, not older phase labels alone.
- `DECISIONS.md` — rewritten cleanly to remove conflict markers while preserving the major product, pilot, and workflow decisions.
- `CHANGELOG.md` — this entry documents the sweep itself and resets the file as a clean historical narrative.

**Why this mattered:**
- The docs had unresolved merge-conflict leftovers.
- The repo had started telling two stories at once: older video-first work and newer Trainup pilot / study-ready work.
- Future content work would keep inheriting confusion unless the documentation layer was cleaned first.

**Result:**
- The project docs now point more clearly at the real next work:
  1. finish the doc sweep
  2. audit the practice/question layer
  3. standardise the 3 lighter published topics
  4. continue building missing high-priority NCDC topics

**Next session:** Practice/question alignment audit, then topic standardisation and curriculum-structure cleanup.

---

## v0.5.3 — 2026-06-30 — Trainup branding and first major study-module rewrites

**Session theme:** Shift from generic revision/demo product toward a school-facing study platform for the Trainup pilot.

**Added:**
- `app/lib/school.ts` — school config layer with Tendo and Trainup a Child Uganda configs.
- `app/components/BrandBar.tsx` — school-brand bar for Trainup pathing.
- `app/app/trainup/page.tsx` — Trainup-branded landing page.
- Extended `TopicNote` interface with `learningObjectives`, `commonMistakes`, and `tryThis`.

**Changed:**
- Rewrote the following topics into fuller NCDC-aligned study modules:
  - Fractions
  - Proportion and percentages
  - Equations
  - Decimals
  - Venn diagrams
  - Area
  - Perimeter
  - Volume
  - Money
  - Mean, median, mode and range
- `app/components/TopicTabs.tsx` — updated to render the richer study sections and include them in the listen-aloud flow.
- `app/app/globals.css` — styling support for newer study-module sections and branding work.

**Verified locally:**
- Build succeeded with the new `/trainup` route.

**Next session at the time:** Continue the pilot-prep study rewrite work or audit curriculum coverage.

---

## v0.5.2 — 2026-06-30 — Trainup pilot plan and answer-bias quality fix

**Session theme:** Prepare the product for a real school pilot by fixing obvious quality issues before any school sees the product.

**Added:**
- `docs/ops/trainup-pilot-plan.md` — phased pilot-prep plan.
- `scripts/shuffle-correct-answers.js` — script to randomise answer positions.

**Changed:**
- Shuffled correct-answer positions across topic quizzes and the question bank.
- Logged Trainup pilot decisions in the operational docs.

**Why this mattered:**
- The answer-position bias was a credibility problem for teachers and students.
- The project needed a quality-first pilot plan before broader rollout.

---

## v0.5.1 — 2026-06-25 — Video wiring for the Watch tab

**Session theme:** Make the Watch tab ready for real topic-level video embeds without requiring repeated component rewrites.

**Added:**
- Optional `videoUrl?: string` field on topics.
- `docs/ops/notebooklm-video-guide.md`.
- `toEmbedUrl()` helper and responsive video wrapper styling.
- Placeholder video comments on starter topics.

**Changed:**
- Watch tab now embeds video when `videoUrl` exists and shows an honest placeholder otherwise.

**Verified locally:**
- Build succeeded.
- Topic-page watch behaviour spot-checked.

---

## v0.5.0 — 2026-06-25 — Practice mode, worksheet generator, and UI cleanup

**Session theme:** Turn the product from a fixed-topic demo into something with repeatable student practice and teacher utility.

**Added:**
- Static question bank
- Practice mode
- Worksheet generator
- Content-sources documentation

**Changed:**
- Listen tab removed as a full tab and moved into the reading experience.
- Review-pill UI removed.
- Home and teacher pages updated to surface the new tools.

**Verified locally:**
- Build succeeded.
- Practice and worksheet flows worked.

---

## v0.4.0 — 2026-06-25 — More topics, stronger teacher dashboard, and Fellowship strategy

**Added:**
- 10 more P7 Math topics
- 2 more past papers
- demo class
- richer teacher dashboard
- report-a-problem flow
- teacher contribution strategy docs

**Changed:**
- Sales materials and dashboard flows expanded.

---

## v0.3.0 — 2026-06-25 — Past papers, topic tabs, and teacher dashboard foundations

**Added:**
- Past paper system
- student attempt flow
- teacher browse mode
- Watch / Listen / Read structure
- teacher dashboard

**Changed:**
- Home page and topic page evolved into a more complete study flow.

---

## v0.2.1 — 2026-06-24 — Next.js security/version bump for Vercel deploy

**Changed:**
- Next.js moved to a patched 15.x line.
- React moved to stable 19.

**Why:**
- Vercel blocked the older vulnerable framework version.

---

## v0.2.0 — 2026-06-24 — Phase 1 app shell built

**Added:**
- Next.js app setup
- home route
- topic list route
- topic detail route
- first 3 topics
- quiz + progress tracking

**Verified locally:**
- Local build and route checks passed.

---

## v0.1.0 — 2026-06-24 — Foundation

**Added:**
- project skeleton
- session docs
- P7 Math curriculum map
- product/spec/sales docs
- clickable preview demo

**Cost:**
- UGX 0 / USD 0.
