# NCDC P3 Curriculum Research — 2026-07-09

## Purpose

This document records the start of P3 work under the rule: **NCDC first, build second**.

P3 is not a P4–P7 style subject-based class. It belongs to **Cycle 1 (P1–P3): Basic skills**, organised using the **Thematic Curriculum**.

Build principle:

> We are building the curriculum in a better app form — not inventing our own syllabus.

---

## Official source used

Source:

- **NCDC Primary School Curriculum P.3**, May 2008
- Official NCDC PDF: `https://ncdc.go.ug/wp-content/uploads/2024/02/P3_Thematic_Curr_21_November_2007_-_Edited.pdf`
- ISBN: `978-9970-117-05-5`

Supporting source:

- **NCDC P.3 Teacher’s Guide**, official NCDC PDF: `https://ncdc.go.ug/wp-content/uploads/2024/02/P.3_teachers_guide_-_Book.pdf`

---

## Key curriculum finding

P3 is lower-primary **thematic** curriculum, not upper-primary subject-based curriculum.

The NCDC P3 curriculum states:

- Cycle 1 (P1–P3) uses a thematic approach.
- P4 is the transition year.
- P5–P7 are subject-based.
- The P3 curriculum has 12 themes subdivided into 36 sub-themes.
- The thematic matrix includes Mathematics, Literacy, English (non-medium), Creative Performing Arts, and Life Skills/Values.
- Religious Education and Physical Education are outside the thematic matrix.
- Religious Education keeps its framework but is aligned to the 12-theme timetable.

This means we must not simply copy the P4–P7 app subject structure into P3 without a product/design decision.

---

## P3 maps added

Added:

- `content/curriculum/p3-thematic.json`
- `content/curriculum/p3-re.json`

Not added yet:

- P3 app routes
- P3 learner-facing content libraries
- P3 home page

Reason: P3 must be designed around the thematic curriculum structure first.

---

## P3 thematic structure

The official P3 curriculum has 12 themes and 36 sub-themes.

### Theme 1 — Our Sub-county/Division

1. Name and Location of our Sub-county/Division
2. Physical Features of our Sub-county/Division
3. People in our Sub-county/Division

### Theme 2 — Livelihood in Our Sub-county/Division

1. Occupations of People in our Sub-county/Division and their Importance
2. Social Services and their Importance
3. Challenges in Social Services and Possible Solutions

### Theme 3 — Our Environment in Our Sub-county/Division

1. Soil
2. Natural Causes of Changes in the Environment
3. Changes in the Environment through Human Activities

### Theme 4 — Environment and Weather in our Sub-county/Division

1. Air and the Sun
2. Water
3. Managing Water

### Theme 5 — Living Things: Animals in Our Sub-county/Division

1. Living Things
2. Birds and Insects
3. Care for Insects, Birds and Animals

### Theme 6 — Living Things: Plants in Our Sub-county/Division

1. Plants and their Habitat
2. Parts of a Flowering Plant and their Uses
3. Crop-growing Practices

### Theme 7 — Managing Resources in Our Sub-county/Division

1. Saving Resources
2. Spending Resources
3. Projects

### Theme 8 — Keeping Peace in Our Sub-county/Division

1. Living in Peace with Others
2. Child Rights, Needs and their Importance
3. Child Responsibility

### Theme 9 — Culture and Gender in Our Sub-county/Division

1. Customs in our Sub-county/Division
2. Gender
3. Ways of Promoting and Preserving Culture

### Theme 10 — Health in Our Sub-county/Division

1. Disease Vectors
2. Diseases Spread by Vectors
3. HIV/AIDS

### Theme 11 — Basic Technology in Our Sub-county/Division

1. Concept of Technology
2. Processing and Making Things from Natural Materials
3. Making Things from Artificial Materials

### Theme 12 — Energy in Our Sub-county/Division

1. Sources of Energy
2. Ways of Saving Energy
3. Dangers of Energy and Ways of Avoiding Them

---

## P3 Religious Education structure

P3 RE is outside the thematic matrix but appears in the official curriculum.

### CRE mapped areas

1. Traditions
2. Leadership
3. Messengers of God
4. Sorrow and Joy in Life
5. The Holy Spirit
6. Worshipping God
7. Christian Joint Activities and Prayers
8. Values, Abilities and Prayer

### IRE mapped areas

1. Reading from the Qur’an: Nature of the Qur’an
2. Tawhiid: Divine Books
3. Fiqh and Islamic Values
4. History of Islam: The First Revelation
5. Reading of the Qur’an: Vowels in Arabic
6. Tawhiid: Importance and Content of Divine Books
7. Dua after Adhan and Laws
8. Khadijah and the Revelation / Rites of the Qur’an
9. Uniqueness of the Qur’an and Impurities
10. Moral and Spiritual Teachings: Dua and Seeking Knowledge

Important: the RE extraction is less clean than the thematic section because the source PDF is table-heavy. The map is official-source-based but should be reviewed by CRE/IRE teachers before learner-facing build.

---

## Product implication for Tendo

P3 needs a design decision before building routes:

Option A — thematic P3 experience:

- `/p3-home`
- `/p3/theme/[theme]`
- modules inside each theme for Literacy, Numeracy, English, Science/SST concepts, life skills and values.

Option B — app-subject bridge:

- Keep familiar subject cards, but each subject pulls from thematic strands.
- Must be documented carefully so we do not invent a fake P3 subject syllabus.

Recommended approach: **Option A**, because it follows NCDC structure most faithfully.

---

## Next action

1. Review the P3 maps for extraction errors.
2. Decide the P3 app structure: thematic-first is recommended.
3. Only after that, build learner-facing P3 beta content.
4. Do not build P3 content as if it were P4–P7 subject-based unless a documented bridge design is approved.
