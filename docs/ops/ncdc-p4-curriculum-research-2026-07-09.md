# NCDC P4 Curriculum Research — 2026-07-09

## Purpose

This document records Primary Four curriculum research under the non-negotiable rule: **NCDC first, build second**.

P4 is a transition year from the P1–P3 thematic curriculum to subject-based learning. The NCDC P4 materials repeatedly describe P4 as a transitional class where learners begin using English as the medium of instruction while consolidating concepts previously learnt in local languages.

**Build principle:** We are building the curriculum in a better app form — not inventing our own syllabus.

---

## Current P4 build decision

P4 curriculum mapping is now broad enough for planning across the five core app subjects, but only **P4 Mathematics** has been exposed as learner-facing beta.

Current state:

1. English, Mathematics, Integrated Science and Social Studies have NCDC-backed maps.
2. Mathematics has been verified against the official NCDC P4 Mathematics PDF and corrected.
3. Religious Education has been mapped from the NCDC/MoES Primary 4 Abridged Curriculum, but still needs a full standard P4 RE syllabus check before premium-final status.
4. P4 Mathematics is live beta at `/math/p4` and `/math/p4/[topic]`.
5. P4 English is live beta at `/english/p4` and `/english/p4/[topic]`.
6. P4 Integrated Science is live beta at `/science/p4` and `/science/p4/[topic]`.
7. P4 Social Studies is live beta at `/social-studies/p4` and `/social-studies/p4/[topic]`.
8. P4 Religious Education is live beta at `/re/p4` and `/re/p4/[topic]`, based on the NCDC/MoES abridged curriculum source.

Next P4 subject should only be built after its map/source is checked and the subject is intentionally selected.

---

## Sources checked and used

1. **NCDC P4 English Syllabus (2010)** — official NCDC PDF. It states the P4 English scope and sequence with eight topics: Describing People and Objects, Giving Directions, What I Like and How I Feel, Behaviour, Buying and Selling, Time, Expression of the Future, and Democracy.
2. **NCDC P4 Social Studies Syllabus (2010)** — official NCDC PDF. It states the P4 SST theme as *Living Together in Our District* with six topics: Location of Our District in Uganda, Physical Features in Our District, Vegetation in Our District, People in Our District, Our Leaders in the District, and How to Meet People's Needs in Our District.
3. **NCDC P4 Integrated Science Syllabus (April 2009)** — NCDC/UNESCO-hosted PDF. It states P4 Science topic outline across The World of Living Things, Our Environment, Human Health, Human Body, Matter and Energy, and related themes.
4. **NCDC P4 Mathematics Syllabus (2010)** — official NCDC PDF, ISBN `978-9970-117-40-6`, verified from `https://ncdc.go.ug/wp-content/uploads/2024/02/P4_MATHEMATICS_SYLLABUS.pdf`. This corrected the earlier garbled extract-based map.
5. **NCDC/MoES Primary 4 Abridged Curriculum for Uganda (2022)** — NCDC/MoES abridged curriculum, ISBN `978-9970-898-23-7`, located through the UNEB NCDC abridged-curricula listing and downloaded from a Sharebility mirror because the UNEB Google Drive link was stale during this pass. This source provided P4 CRE/IRE topic headings. It is official NCDC/MoES abridged curriculum, but still needs a full standard P4 RE syllabus check.

---

## P4 curriculum maps added

Added:

- `content/curriculum/p4-english.json`
- `content/curriculum/p4-math.json`
- `content/curriculum/p4-science.json`
- `content/curriculum/p4-social-studies.json`

Added cautiously after the later RE pass:

- `content/curriculum/p4-re.json`

Important: `p4-re.json` is mapped from the NCDC/MoES **abridged** Primary 4 curriculum. It is usable as an NCDC-backed planning map, but it is not yet verified against the full standard P4 RE syllabus.

---

## P4 English researched structure

Source: NCDC P4 English Syllabus, 2010.

Topics:

1. Describing People and Objects — 22 periods
2. Giving Directions
3. What I Like and How I Feel
4. Behaviour
5. Buying and Selling
6. Time
7. Expression of the Future
8. Democracy

Map file: `content/curriculum/p4-english.json`

---

## P4 Social Studies researched structure

Source: NCDC P4 Social Studies Syllabus, 2010.

Theme: Living Together in Our District

Topics:

1. Location of Our District in Uganda — 16 periods
2. Physical Features in Our District — 20 periods
3. Vegetation in Our District — 25 periods
4. People in Our District — 15 periods
5. Our Leaders in the District — 25 periods
6. How to Meet People's Needs in Our District — 25 periods

Map file: `content/curriculum/p4-social-studies.json`

---

## P4 Integrated Science researched structure

Source: NCDC P4 Integrated Science Syllabus, April 2009.

Topics from the outline:

1. Plant Life
2. Growing Crops
3. Weather Changes Around Us
4. Personal Hygiene
5. Our Food
6. Human Body Organs
7. The Teeth
8. Sanitation
9. Communicable Intestinal Diseases and Worm Infestation
10. Vectors and Diseases
11. Accidents, Poisoning and First Aid
12. Animal Life

Map file: `content/curriculum/p4-science.json`

---

## P4 Mathematics verified structure

Source: official NCDC P4 Mathematics Syllabus, 2010.

The earlier P4 Mathematics map was based on a partly garbled extract. It has now been corrected against the official NCDC PDF.

Themes/topics mapped:

### Term I

Theme 1: Sets

1. Set Concepts — 8 periods

Theme 2: Numeracy

2. Whole Numbers up to 100,000 — 20 periods
3. Operations on Whole Numbers — 20 periods
4. Patterns and Sequences — 12 periods

### Term II

Theme 2: Numeracy

5. Fractions — 24 periods

Theme 3: Geometry

6. 2-Dimensional Geometry — 18 periods
7. 3-Dimensional Geometry — 8 periods

Theme 4: Interpretation of Graphs and Data

8. Data Handling — 12 periods

### Term III

Theme 5: Measurement

9. Money — 16 periods
10. Time — 16 periods
11. Length, Mass and Capacity — 20 periods

Theme 6: Algebra

12. Equations without Letters — 8 periods

Map file: `content/curriculum/p4-math.json`

Verification status now used in map: `verified-from-official-ncdc-pdf`.

---

## P4 Religious Education research status

Status: **mapped from NCDC/MoES abridged curriculum; still needs full standard syllabus check**.

What was checked:

1. NCDC WordPress media catalogue/search for P4, Primary Four, Religious Education, CRE and IRE. This found official P4 English, Mathematics, Integrated Science and Social Studies files, plus unrelated CRE/IRE materials, but not a standalone P4 RE standard syllabus.
2. NCDC lower-primary/thematic materials. These confirm that Religious Education exists as CRE/IRE and was retained as a separate learning area, but they do not provide a complete P4 CRE/IRE topic sequence.
3. MoES COVID-19 continued-learning framework. It contains P4 competency extracts for Mathematics, English, Integrated Science, Social Studies and CAPE, but not a complete P4 RE sequence.
4. Teacher/shared-resource pages. A P4 R.E Term One notes file was found, but it is a teacher note resource, not an official NCDC syllabus. It was not used for the map.
5. Publisher pages. Longhorn confirms that a P4 CRE textbook exists and claims to cover the P4 CRE syllabus, but the public product page does not expose the official topic list. It was not used for the map.
6. UNEB's **PRIMARY LEVEL — Abridged Curricula From NCDC** page lists P4. The Google Drive link was stale during this pass, but a matching Sharebility copy of the NCDC/MoES Primary 4 Abridged Curriculum was downloaded and parsed. This provided usable P4 CRE/IRE topic headings.

Decision: create `content/curriculum/p4-re.json` only as a cautious NCDC-abridged planning map. Keep the verification status as `mapped-from-ncdc-abridged-curriculum-needs-standard-p4-re-syllabus-check`.

---

## P4 Religious Education mapped structure

Source: NCDC/MoES Primary 4 Abridged Curriculum for Uganda, 2022.

### CRE

Term I:

1. Traditions
2. Messengers of God
3. God's Continuing Love for His People
4. God's People and the Law

Term II:

5. Following Jesus as a Leader
6. Jesus Christ Our Saviour
7. The Worshipping Community
8. The Christian Community

Term III:

9. Jesus Our Example in Service
10. Making Our Decisions as Christians
11. Peace

### IRE

IRE topic headings were extracted from the abridged curriculum. Term headings after the first IRE heading were not reliably extractable, so the map does **not** invent IRE term placement.

1. Surat Al-Asr — 6 periods
2. Prophet/Messenger — 6 periods
3. Dress for Prayer — 6 periods
4. Impurities — 6 periods
5. Early Converts in Islam — 6 periods
6. Surat Al-Humaza — 6 periods
7. The 25 Prophets — 6 periods
8. Imaan and Forgiveness — 6 periods
9. Congregational Prayer (Swalat Al-Jama-a) — 6 periods
10. The Night Journey (Israi and Miraj) — 6 periods
11. Surat Al-Falaq (113) — 6 periods
12. Unique Nature of Muhammad's (PBUH) Messengership — 6 periods
13. Conduct after Swalat — 6 periods
14. Dress and Cleanliness — 6 periods

Map file: `content/curriculum/p4-re.json`

Extract note: `docs/ncdc-extracts/p4-re-abridged-topic-extract-2026-07-09.md`

---

## Build verification

After the P4 Mathematics map correction and documentation update:

- First command after map correction: `cd app && npm run build`
- Result: passed
- Static pages: 255/255

After adding the P4 RE map and then P4 Mathematics live beta routes/content:

- Command: `cd app && npm run build`
- Result: passed
- Static pages: 269/269

After adding P4 English live beta routes/content:

- Command: `cd app && npm run build`
- Result: passed
- Static pages: 278/278

After adding P4 Integrated Science live beta routes/content:

- Command: `cd app && npm run build`
- Result: passed
- Static pages: 291/291

After adding P4 Social Studies live beta routes/content:

- Command: `cd app && npm run build`
- Result: passed
- Static pages: 298/298

After adding P4 Religious Education live beta routes/content:

- Command: `cd app && npm run build`
- Result: passed
- Static pages: 324/324

---

## Next action

1. Review P4 Mathematics beta for arithmetic, examples, tone and P4 readability.
2. Review P4 English beta for language level, examples, grammar and P4 readability.
3. Review P4 Integrated Science beta for science accuracy, health-sensitive wording and P4 readability.
4. Review P4 Social Studies beta for local-district examples, civic balance and P4 readability.
5. Review P4 Religious Education beta for respectful CRE/IRE wording and source limitation clarity.
6. Continue searching for the full standard P4 CRE/IRE syllabus to confirm the abridged RE map.
7. Keep P4 RE beta until the standard RE syllabus is found or reviewed by a qualified RE teacher.
