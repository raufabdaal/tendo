# V4 P6/P7 Heavy Deepening Completion — 2026-07-13

## Purpose

Record the next major content milestone before pushing: finish P7 heavy manual deepening and move P6 core subjects from structural v4 into hand-deepened v4.

This follows the product rule:

> Content quality is the product.

And the curriculum rule:

> We are building the curriculum in a better app form — not inventing our own syllabus.

---

## What changed

### P7 Mathematics completion

Added:

- `app/lib/p7-v4-heavy-lessons-wave3.ts`

Updated:

- `app/lib/p7-v4-heavy-lessons.ts`

P7 Mathematics heavy v4 now covers the final 3 remaining topics:

1. **Whole Numbers**
   - Place Value, Value, Rounding and Expanded Form
   - Roman Numerals and Number Bases

2. **Patterns and Sequences**
   - Tests of Divisibility
   - Number Patterns and Sequence Rules

3. **Integers**
   - Integers on the Number Line
   - Operations on Integers and Clock Arithmetic

This adds **6 hand-built P7 Mathematics v4 lessons**.

### P6 heavy v4 core-subject deepening

Added:

- `app/lib/p6-v4-heavy-lessons.ts`

Updated:

- `app/lib/p6-math-topics.ts`
- `app/lib/p6-science-topics.ts`
- `app/lib/p6-english-topics.ts`
- `app/lib/p6-social-topics.ts`

P6 now applies heavy v4 overrides after the structural v4 migration for:

- Mathematics
- Integrated Science
- English
- Social Studies

P6 Religious Education remains structurally migrated to v4 but is not heavily rewritten here because CRE/IRE content needs qualified teacher review before premium-final treatment.

---

## P6 topics hand-deepened

### P6 Mathematics — 6 topics / 6 hand-built v4 lessons

1. Set Concepts up to Two Categories
2. Whole Numbers up to 10,000,000
3. Operations on Whole Numbers
4. Fractions, Decimals and Percentages
5. Geometry and Angle Properties
6. Data Handling and Simple Algebra

### P6 Integrated Science — 5 topics / 5 hand-built v4 lessons

1. Classification of Living Things
2. Sound Energy and the Human Ear
3. The Human Circulatory System
4. The Human Respiratory System
5. Cattle and Poultry Keeping

### P6 English — 5 topics / 5 hand-built v4 lessons

1. Safety on the Road
2. Debating and Expressing Opinions
3. Family Relationships
4. Occupations and Crafts
5. Hotel and Dining Etiquette

### P6 Social Studies — 6 topics / 6 hand-built v4 lessons

1. Location of East Africa on the Map of Africa
2. Physical Features of East Africa
3. Climate and Natural Vegetation of East Africa
4. The People and Pre-Colonial History of East Africa
5. Foreign Influence and Colonization of East Africa
6. Road to Independence and the East African Community

---

## Completion status after this milestone

### P7

P7 non-RE subjects are now fully hand-deepened in heavy v4 at AI-builder level:

| Subject | Heavy-v4 status |
| --- | --- |
| Mathematics | 11/11 topics complete |
| Integrated Science | 8/8 topics complete |
| English | 7/7 topics complete |
| Social Studies | 10/10 topics complete |
| Religious Education | Structurally v4; requires CRE/IRE teacher review |

### P6

P6 core non-RE subjects are now hand-deepened in heavy v4 at AI-builder level:

| Subject | Heavy-v4 status |
| --- | --- |
| Mathematics | 6/6 topics complete |
| Integrated Science | 5/5 topics complete |
| English | 5/5 topics complete |
| Social Studies | 6/6 topics complete |
| Religious Education | Structurally v4; requires CRE/IRE teacher review |

### Combined P6/P7 heavy-v4 count

This milestone brings P6/P7 non-RE heavy-v4 coverage to:

- **58 hand-deepened P6/P7 topics**
- **82 hand-built v4 lessons**

Breakdown:

- P7 non-RE: 36 topics / 60 hand-built v4 lessons
- P6 non-RE: 22 topics / 22 hand-built v4 lessons

---

## Workflow requirement documented

The founder requested that every future push/milestone response must show exact files to overwrite/add/delete.

Updated:

- `docs/ops/update-handoff-protocol.md`
- `DECISIONS.md` with `DEV-036`

New standing requirement:

Every push/milestone handoff must include:

1. Files to overwrite.
2. Files to add.
3. Files to delete.
4. Files/folders not to copy.
5. Build status.
6. Suggested commit message.

Future agents must not say “copy changed files” vaguely.

---

## Build verification

Command:

```bash
cd app && npm run build
```

Result:

```txt
✓ Compiled successfully
✓ Generating static pages (356/356)
```

---

## Remaining before premium-final

1. Real-phone review of the simplified v4 Read UI.
2. Human/teacher review of P6/P7 heavy-v4 content.
3. CRE/IRE teacher review for P6/P7 Religious Education.
4. Optional future pass: add extra diagrams for P6 Science topics where current image coverage is weaker.
5. Then prepare the full push package if the founder is ready.
