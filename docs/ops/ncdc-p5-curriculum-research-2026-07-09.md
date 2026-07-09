# NCDC P5 Curriculum Research — 2026-07-09

## Purpose

This document records the correction to our P5 expansion process. We must not build P5 from assumptions. P5 must be built from the NCDC curriculum structure first.

## Sources checked

1. **Primary Five Curriculum Set One** — National Curriculum Development Centre, August 2010. This source lists Set One as English, Integrated Science, Local Language, Mathematics, Religious Education and Social Studies. It also states the P5 curriculum is subject-based and that P5 learners move fully into English as the medium of instruction.
2. **Uganda Martyrs University Library catalogue** — confirms the bibliographic record for *Primary five curriculum: set one: english, integrated science, local language, mathematics and religious education* by the Ministry of Education and Sports / National Curriculum Development Centre, published in Kampala by NCDC in 2010, with ISBN 9789970117918.
3. NCDC curriculum directorate information — confirms P5–P7 are Phase 3 subject-based curriculum years covering English, Mathematics, Social Studies, Integrated Science, Local Language, CAPE and Religious Education.

## Critical correction

The first P5 planning maps were too generic. They were useful as scaffolding but not strict enough. After checking the P5 Set One curriculum, the P5 curriculum maps were rewritten to match the official topic structure more closely.

The draft P5 Mathematics and English app routes/content that were briefly added were removed again because they were built before full curriculum verification.

## Current P5 status

P5 now has only curriculum maps, not learner-facing app routes.

Current files:

- `content/curriculum/p5-math.json`
- `content/curriculum/p5-english.json`
- `content/curriculum/p5-science.json`
- `content/curriculum/p5-social-studies.json`
- `content/curriculum/p5-re.json`

Removed after correction:

- `app/lib/p5-math-topics.ts`
- `app/lib/p5-english-topics.ts`
- `app/app/math/p5/`
- `app/app/english/p5/`

## P5 English official topic structure found

The P5 English Set One section states that English is organised around 8 topics:

1. Vehicle Repair and Maintenance — 23 periods
2. Print Media — 16 periods
3. Travelling — 15 periods
4. Letter Writing — 10 periods
5. Communication — 74 periods
6. Culture — 29 periods
7. Peace and Security — 15 periods
8. Services: Banking — 16 periods

These replace the earlier generic draft topics.

## P5 Mathematics official topic structure found

The P5 Mathematics introduction states six themes and twelve topics:

Themes:

1. Sets
2. Numeracy
3. Interpretation of Graphs and Data
4. Measurements
5. Geometry
6. Algebra

Topics:

1. Set Concepts
2. Whole Numbers
3. Operations on Whole Numbers
4. Patterns and Sequences
5. Fractions
6. Data Handling
7. Money
8. Time
9. Length, Mass and Capacity
10. Lines, Angles and Geometrical Figures
11. Integers
12. Algebra

These replace the earlier compressed six-topic draft.

## P5 Integrated Science official topic structure found

The P5 Integrated Science pages show these themes/topics:

1. Science in Human Activities and Occupations — Keeping Poultry and Bees
2. Matter and Energy — Measurement
3. Human Health — Immunisation
4. Human Body — The Digestive System
5. The Environment — Components of the Environment: Soil
6. Matter and Energy — Heat Energy
7. Science in Human Activities and Occupations — Occupations in Our Community: Crop Growing
8. The World of Living Things — Bacteria and Fungi
9. Managing Changes in the Environment — Types of Changes: Biological, Physical and Chemical Changes

## P5 Social Studies official topic structure found

The P5 Social Studies pages show 12 topics:

1. Location of Uganda on the Map of East Africa
2. Physical Features in Uganda
3. Climate of Uganda
4. Vegetation in Uganda
5. Natural Resources in Uganda
6. The People of Pre-Colonial Uganda
7. Foreign Influence in Uganda
8. How Uganda Became a Nation
9. The Road to Independence
10. Uganda as an Independent Nation
11. The Government of Uganda
12. Population, Size and Distribution

## P5 Religious Education official topic structure found

### CRE topics found

1. Faith
2. Christianity and Islam
3. God's Word for Us
4. God's Word for Us: Jesus
5. We are the New People of God in the Spirit
6. We are the Church
7. Witness
8. Discipleship and its Rewards
9. Relationship with God
10. Hope

### IRE topics found

1. Surat Al-Zilzala
2. Hadith: Settlement of Debts
3. Resurrection and Judgment
4. Fasting
5. Prophet Muhammad at Madina
6. Surat Al-Kauthar
7. Hadith: Good Neighbourliness
8. Paradise and Hell
9. Tarawiih and Idd Prayers
10. Last Days of Prophet Muhammad (PBUH)

## Build rule going forward

Do not build learner-facing content for a class/subject until:

1. the official curriculum structure is researched;
2. the structure is documented;
3. the curriculum JSON map is created/updated;
4. the content build plan is aligned to the map;
5. the content layer is built from that map.

## Immediate next step

Before building P5 learner-facing pages again, verify the updated P5 maps against the best available official NCDC copy or a trusted scanned copy.
