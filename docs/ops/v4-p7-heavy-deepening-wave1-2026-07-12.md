# V4 P7 Heavy Manual Deepening — Wave 1 — 2026-07-12

## Purpose

Start the post-structural manual deepening phase after the major P6/P7 v4 migration.

The goal of this wave is not just to generate v4 lessons from old modules, but to hand-build fuller learner-facing v4 lessons for PLE-heavy P7 topics.

Locked standard:

```txt
Definition
→ types / classifications / key ideas
→ examples / illustrations
→ characteristics / facts / uses
→ diagram or worked example where useful
→ activity/application where useful
→ evaluation
```

---

## Implementation approach

Added a new override layer:

- `app/lib/p7-v4-heavy-lessons.ts`

This file exports subject-specific override functions:

- `applyP7MathHeavyV4`
- `applyP7ScienceHeavyV4`
- `applyP7EnglishHeavyV4`
- `applyP7SocialHeavyV4`

The override function pattern is:

```ts
contentFormat: "upper-primary-v4"
upperPrimaryLessons: handBuiltLessons
useOnlyV4Lessons: true
```

This preserves the structural v4 migration for all other topics while replacing selected high-priority topics with richer hand-built v4 lessons.

---

## Files updated

### New

- `app/lib/p7-v4-heavy-lessons.ts`

### Updated imports/exports

- `app/lib/topics.ts` — P7 Mathematics now applies `applyP7MathHeavyV4(...)`
- `app/lib/science-topics.ts` — P7 Science now applies `applyP7ScienceHeavyV4(...)`
- `app/lib/english-topics.ts` — P7 English now applies `applyP7EnglishHeavyV4(...)`
- `app/lib/social-topics.ts` — P7 Social Studies now applies `applyP7SocialHeavyV4(...)`

---

## Topics hand-deepened in this wave

### P7 Mathematics — 4 topics / 9 hand-built v4 lessons

1. **Set Concepts**
   - Types of Sets and Set Notation
   - Venn Diagrams with Two Events
   - Probability from Sets

2. **Fractions, Decimals and Percentages**
   - Operations on Fractions and Mixed Numbers
   - Decimals, Percentages and Proportion

3. **Data Handling and Graphs**
   - Pie Charts and Travel Graphs
   - Mean, Median, Mode and Range

4. **Algebra**
   - Expressions and Substitution
   - Equations and Inequalities

### P7 Integrated Science — 4 topics / 7 hand-built v4 lessons

1. **Muscular-Skeletal System**
   - Skeleton, Bones and Joints
   - Muscles, Movement and Care

2. **Electricity and Magnetism**
   - Electric Circuits and Conductors
   - Magnets and Electromagnets

3. **Light Energy**
   - Sources, Shadows and Reflection
   - Refraction, Lenses and the Eye

4. **Population and Health**
   - Population, Disease Spread and Community Health

### P7 English — 2 topics / 4 hand-built v4 lessons

1. **Letter Writing**
   - Informal Letters
   - Formal Letters

2. **Examinations**
   - Reading Examination Instructions
   - Conditional Clauses and Exam Writing

### P7 Social Studies — 4 topics / 8 hand-built v4 lessons

1. **Location of Africa on the Map of the World**
   - Africa, Latitudes and Longitudes
   - Map Skills for Africa

2. **Physical Features of Africa**
   - Relief Features of Africa
   - Rivers, Lakes and the Rift Valley

3. **Foreign Influence in Africa**
   - Foreign Groups and Their Activities
   - Scramble, Partition and Colonial Rule

4. **Nationalism and the Road to Independence of Africa**
   - Meaning, Causes and Methods of Nationalism
   - Leaders, Independence and Challenges

---

## Wave 1 coverage

- **14 P7 high-priority topics** manually deepened.
- **28 hand-built v4 lessons** added.
- Existing diagrams/images are reused inside mobile-friendly v4 diagram blocks where useful.
- Every hand-built lesson includes evaluation questions.

---

## Build verification

Initial build attempt failed because `node_modules` was missing in the sandbox:

```txt
sh: 1: next: not found
```

Then ran:

```bash
cd app && npm install && npm run build
```

Result:

```txt
✓ Compiled successfully
✓ Generating static pages (356/356)
```

Note: `npm install` still reports 2 moderate vulnerabilities and suggests `npm audit fix --force`; this was **not** run because it may introduce breaking changes.

---

## Remaining heavy-deepening priorities

Recommended next wave:

### P7 Mathematics
- Construction
- Length, Mass and Capacity
- Operations on Whole Numbers
- Time

### P7 Integrated Science
- Excretory System
- Simple Machines and Friction
- Energy Resources in the Environment
- Interdependence in the Environment

### P7 Social Studies
- Climate of Africa
- Vegetation of Africa
- People/Ethnic Groups/Settlement
- Post-Independence Africa
- Economic Developments
- Major World Organisations

### P7 English
- School Holidays
- Electronic Media
- Rights, Responsibilities and Freedom
- Environmental Protection
- Ceremonies

### P6 bridge topics
After P7 priority wave 2, deepen P6 bridge topics that prepare learners for P7/PLE success.
