# P7 SST Topic 2 Curriculum Intelligence Audit — 2026-07-15

## Topic

```txt
Class: P7
Subject: Social Studies
Theme: Living Together in Africa
Topic 2: Physical Features of Africa
App ID: physical-features-of-africa
Official periods: 12
```

## Purpose

Topic 2 is now being restarted under the same Curriculum Intelligence direction used for Topic 1.

Goal:

```txt
Official source → evidence notes → module blueprint → learner rewrite → audit → build → documentation
```

No ad hoc expansion. No filler headings. No unsupported geography facts in the core learner flow.

---

## Source used

Primary source:

```txt
NCDC Primary Seven Set One Curriculum PDF
Topic 2 pages: PDF pages 318–321 / printed pages 297–300
```

Existing extract:

```txt
docs/ncdc-extracts/p7-sst-topic-02-physical-features-of-africa.md
```

New curriculum intelligence files:

```txt
content/curriculum-intelligence/p7-sst/topic-02-physical-features-of-africa/evidence-notes.json
content/curriculum-intelligence/p7-sst/topic-02-physical-features-of-africa/module-blueprint.json
content/curriculum-intelligence/p7-sst/topic-02-physical-features-of-africa/qa-checklist.json
```

---

## What NCDC requires

### Learning outcome

The learner explores and appreciates the value of one’s immediate and distant environment for better and harmonious living.

### Topic background

NCDC explains that physical features are landforms that exist on earth and give it shape.

Physical features include:

- mountains,
- highlands,
- plateau,
- lowlands,
- rift valleys,
- lakes,
- rivers,
- depressions,
- islands,
- coastal plains.

NCDC separates:

- relief features: mountains, highlands, plateau, lowlands, rift valleys, coastal plains,
- drainage features: lakes, rivers, seas, oceans.

### Official content list

NCDC lists the following feature groups:

1. Mountains and highlands:
   - The Atlas,
   - The Drakensberg,
   - The Cameroon highlands,
   - The Jos plateau,
   - The Ahaggar,
   - The Tibesti,
   - The Ethiopian highlands.
2. Rivers:
   - River Congo,
   - The Nile,
   - The Niger,
   - Zambezi,
   - Orange,
   - Limpopo,
   - Blue Nile,
   - The Volta.
3. Lakes:
   - Lake Chad,
   - Lake Ngami.
4. Coastal plains:
   - West,
   - North,
   - South.
5. Formation of major physical features of Africa.

### Teacher guidance

NCDC tells the teacher to:

- guide learners to identify landforms of Africa,
- use maps of Africa to locate landforms,
- describe folded, fault-block and volcanic mountains,
- relate physical features to those found in East Africa,
- teach features outside East Africa region by region,
- use textbooks, atlases, wall maps and ground maps,
- model physical features using local materials,
- ensure oral and written questions and drawing/labeling of major physical features.

### Assessment competences

The learner should:

- name mountains in other regions of Africa formed by folding, faulting and volcanicity,
- identify oceans and seas into which major rivers flow,
- list mountains and highlands of different regions starting with the highest,
- mention countries where major physical features are located.

---

## Current app issue

The current app structure is broadly correct, but it still uses some strict-format filler patterns:

```txt
Uses, Importances, Advantages and Disadvantages of ...
```

Some of this may be useful because NCDC says physical features are valuable natural resources, but the rewrite should avoid adding all headings mechanically.

Correct approach:

- first teach names and locations,
- then teach map practice,
- then teach value/challenges only where it supports the NCDC learning outcome,
- teach formation separately with diagrams/modeling.

---

## Rewrite order

1. `mountains-highlands`
2. `rivers-africa`
3. `lakes-africa`
4. `plateau-rift-coastal`
5. `formation-physical-features`
6. `premium-physical-features-application`

---

## First rewrite target

```txt
mountains-highlands
```

Recommended modules:

1. Physical Features, Relief and Drainage
2. Major Mountains and Highlands of Africa
3. Value and Map Practice for Mountains and Highlands

---

## Current status

Evidence notes created. Blueprint created. QA checklist created.

Next step:

```txt
Rewrite mountains-highlands in app/lib/social-topics.ts.
```

---

## Update — Subtopic 1 rewritten from source-backed blueprint

Updated in `app/lib/social-topics.ts`:

```txt
Topic: physical-features-of-africa
Subtopic: mountains-highlands
```

Old structure:

- 3 modules.
- Used strict-fragment headings and broad uses/importance/advantages/disadvantages framing.

New structure:

1. `physical-features-relief-drainage` — Physical Features, Relief and Drainage
2. `major-mountains-highlands-africa` — Major Mountains and Highlands of Africa
3. `mountains-highlands-value-map-practice` — Value and Map Practice for Mountains and Highlands

Source basis:

- NCDC Topic 2 pages 318–321 / printed pages 297–300.
- NCDC lists the major mountains/highlands: Atlas, Drakensberg, Cameroon highlands, Jos plateau, Ahaggar, Tibesti and Ethiopian highlands.
- NCDC guidance says to use maps/atlases and teach physical features region by region.

Content decision:

- Kept NCDC-required names and map-location practice.
- Included school-first country/location examples, but marked them for atlas/teacher review before premium-final status because the extracted NCDC pages do not provide a full country-location table.
- Replaced mechanical uses/advantages/disadvantages with a focused value/map-practice module aligned to NCDC's learning outcome.
- Kept every module with an inline check.

Verification:

```bash
node scripts/audit-curriculum-intelligence.js
cd app && npm run build
```

Results:

```txt
Audit: 0 failures / 34 warnings
Build: ✓ Generating static pages (413/413)
```

Next Topic 2 rewrite target:

```txt
rivers-africa
```

Rewrite rule: teach NCDC-listed rivers, map location, and oceans/seas into which major rivers flow. Avoid generic uses/advantages filler unless it supports the learning outcome and assessment.

---

## Update — Subtopic 2 rewritten from source-backed blueprint

Updated in `app/lib/social-topics.ts`:

```txt
Topic: physical-features-of-africa
Subtopic: rivers-africa
```

New structure:

1. `rivers-as-drainage-features` — Rivers as Drainage Features
2. `major-rivers-of-africa-ncdc-list` — Major Rivers of Africa
3. `river-mouths-oceans-seas` — Where Major Rivers Flow
4. `river-value-map-practice` — Value and Map Practice for Rivers

Source basis:

- NCDC Topic 2 pages 318–321 / printed pages 297–300.
- NCDC lists: River Congo, Nile, Niger, Zambezi, Orange, Limpopo, Blue Nile and Volta.
- NCDC assessment expects learners to identify oceans and seas into which major rivers flow.

Content decision:

- Focused the subtopic on rivers as drainage features, the NCDC-listed rivers, map location, and where major rivers flow.
- Kept value/use material only where it supports the NCDC learning outcome that learners appreciate the value of the environment.
- Avoided the old mechanical uses/importances/advantages/disadvantages structure.
- Every module has an inline check.

Verification:

```bash
node scripts/audit-curriculum-intelligence.js
cd app && npm run build
```

Results:

```txt
Audit: 0 failures / 34 warnings
Build: ✓ Generating static pages (413/413)
```

Next Topic 2 rewrite target:

```txt
lakes-africa
```

Rewrite rule: teach lakes as drainage features, NCDC-listed Lake Chad and Lake Ngami, map location, and value/map practice without generic filler.

---

## Update — Subtopic 3 rewritten from source-backed blueprint

Updated in `app/lib/social-topics.ts`:

```txt
Topic: physical-features-of-africa
Subtopic: lakes-africa
```

New structure:

1. `lakes-as-drainage-features` — Lakes as Drainage Features
2. `lake-chad-lake-ngami` — Lake Chad and Lake Ngami
3. `lake-value-map-practice` — Value and Map Practice for Lakes

Source basis:

- NCDC Topic 2 pages 318–321 / printed pages 297–300.
- NCDC lists Lake Chad and Lake Ngami under lakes.
- NCDC guidance requires learners to identify and locate major physical features on the map of Africa.

Content decision:

- Focused the subtopic on lakes as drainage features, the two NCDC-listed lakes, map location and value/map practice.
- Avoided generic uses/importances/advantages/disadvantages filler.
- Included school-first location notes for Lake Chad and Lake Ngami, marked for atlas/teacher review before premium-final status.
- Every module has an inline check.

Verification:

```bash
node scripts/audit-curriculum-intelligence.js
cd app && npm run build
```

Results:

```txt
Audit: 0 failures / 34 warnings
Build: ✓ Generating static pages (413/413)
```

Next Topic 2 rewrite target:

```txt
plateau-rift-coastal
```

Rewrite rule: teach plateau, rift valley and coastal plains as relief features; include NCDC coastal plains in West, North and South; use map/model practice; avoid generic filler.

---

## Update — Subtopic 4 rewritten from source-backed blueprint

Updated in `app/lib/social-topics.ts`:

```txt
Topic: physical-features-of-africa
Subtopic: plateau-rift-coastal
```

New structure:

1. `plateau-rift-coastal-as-relief-features` — Plateau, Rift Valley and Coastal Plains as Relief Features
2. `locating-plateau-rift-coastal-plains` — Locating Plateau, Rift Valley and Coastal Plains
3. `model-and-value-practice-relief-features` — Model and Value Practice for Relief Features

Source basis:

- NCDC Topic 2 pages 318–321 / printed pages 297–300.
- NCDC lists plateau, rift valleys and coastal plains under relief features.
- NCDC specifically mentions coastal plains in the West, North and South.
- NCDC guidance encourages learners to model physical features using local materials.

Content decision:

- Focused on definitions, map location, and modelling/value practice.
- Kept location examples broad and map-based where extra atlas support is required.
- Avoided generic uses/importances/advantages/disadvantages filler.
- Every module has an inline check.

Verification:

```bash
node scripts/audit-curriculum-intelligence.js
cd app && npm run build
```

Results:

```txt
Audit: 0 failures / 34 warnings
Build: ✓ Generating static pages (413/413)
```

Next Topic 2 rewrite target:

```txt
formation-physical-features
```

Rewrite rule: teach folded, fault-block and volcanic mountains first because NCDC guidance explicitly names them; use diagrams/model language; avoid overloading beyond P7.

---

## Update — Final two Topic 2 subtopics rewritten together

Updated in `app/lib/social-topics.ts`:

```txt
Topic: physical-features-of-africa
Subtopics:
- formation-physical-features
- premium-physical-features-application
```

### Formation subtopic new structure

1. `formation-folded-mountains` — Formation of Folded Mountains
2. `formation-fault-block-mountains-rift-valleys` — Faulting: Block Mountains and Rift Valleys
3. `formation-volcanic-mountains` — Formation of Volcanic Mountains
4. `formation-diagram-practice` — Diagram and Model Practice

Source basis:

- NCDC guidance explicitly names folded, fault-block and volcanic mountains.
- NCDC guidance asks learners to draw diagrams and model physical features using local materials.

### Application practice new structure

1. `physical-features-question-commands` — Step 1: Read the Physical Features Question
2. `physical-features-map-practice` — Step 2: Practise Map Location
3. `physical-features-formation-practice` — Step 3: Practise Formation Answers
4. `physical-features-value-answer-practice` — Step 4: Explain Value Without Filler

Content decision:

- Formation now teaches the three NCDC-named mountain formation processes first.
- Application practice now rehearses NCDC assessment competences: naming, locating, formation, diagrams and value answers.
- Kept explanations simple and diagram/model based.
- Every module has an inline check.

Verification:

```bash
node scripts/audit-curriculum-intelligence.js
cd app && npm run build
```

Results:

```txt
Audit: 0 failures / 34 warnings
Build: ✓ Generating static pages (413/413)
```

Topic 2 status:

```txt
All Topic 2 learner-facing subtopics have now been rewritten under the curriculum-intelligence direction.
```

Remaining warnings are not build failures. They mark review needs such as atlas/teacher confirmation for feature-country examples, river mouths, lake locations and formation diagrams before premium-final status.
