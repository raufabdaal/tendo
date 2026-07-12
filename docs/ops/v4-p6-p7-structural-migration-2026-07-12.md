# V4 P6/P7 Structural Migration — 2026-07-12

## Purpose

Record the major upward migration batch for the NCDC-native v4 content architecture.

Target:

- Primary Six (P6): Mathematics, Integrated Science, English, Social Studies, Religious Education
- Primary Seven (P7): Mathematics, Integrated Science, English, Social Studies, Religious Education

This migration continues the locked rule:

> We are building the curriculum in a better app form — not inventing our own syllabus.

---

## What changed

P6 and P7 topic libraries now render through the upper-primary v4 learner-facing structure:

```txt
Subject → Topic → Lesson/Sub-topic selector
→ one module at a time
→ definition / key term
→ types / classifications / key ideas
→ examples / illustrations
→ characteristics / properties / uses
→ diagram or worked example where available
→ activity/application where relevant
→ evaluation
```

The migration reused the shared v4 subject helpers already introduced for P4/P5:

- `app/lib/v4-math-helpers.ts`
- `app/lib/v4-science-helpers.ts`
- `app/lib/v4-english-helpers.ts`
- `app/lib/v4-social-helpers.ts`
- `app/lib/v4-re-helpers.ts`

A small Social Studies helper improvement was also added so the generated child-facing context is class-appropriate:

- P4: district
- P5: Uganda
- P6: East Africa
- P7: Africa and the wider world

---

## Files migrated

### P6

Updated:

- `app/lib/p6-math-topics.ts`
- `app/lib/p6-science-topics.ts`
- `app/lib/p6-english-topics.ts`
- `app/lib/p6-social-topics.ts`
- `app/lib/p6-re-topics.ts`

Each file now:

1. Imports the relevant `addUpperPrimary...V4` helper.
2. Defines a subject-specific term map from the existing curriculum JSON.
3. Exports topics wrapped in the v4 migrator.

Example pattern:

```ts
export const P6_MATH_TOPICS: Topic[] = balanceTopicAnswers(
  addUpperPrimaryMathV4(P6_MATH_TOPICS_DATA, "P6", P6_MATH_TERMS)
);
```

### P7

Updated:

- `app/lib/topics.ts` — P7 Mathematics
- `app/lib/science-topics.ts` — P7 Integrated Science
- `app/lib/english-topics.ts` — P7 English
- `app/lib/social-topics.ts` — P7 Social Studies
- `app/lib/re-topics.ts` — P7 Religious Education

Each file now wraps the existing topic data with the matching v4 helper and a P7 term map.

P7 Religious Education preserves separate CRE and IRE exports:

```ts
export const CRE_TOPICS = balanceTopicAnswers(
  addUpperPrimaryReV4(CRE_TOPICS_DATA, "P7", P7_RE_TERMS)
);

export const IRE_TOPICS = balanceTopicAnswers(
  addUpperPrimaryReV4(IRE_TOPICS_DATA, "P7", P7_RE_TERMS)
);
```

---

## Coverage counts from current app topic data

### P6 structural v4 coverage

| Subject | Topics | V4 lessons generated from existing subtopics |
| --- | ---: | ---: |
| Mathematics | 6 | 24 |
| Integrated Science | 5 | 16 |
| English | 5 | 15 |
| Social Studies | 6 | 23 |
| Religious Education | 6 | 18 |
| **P6 total** | **28** | **96** |

### P7 structural v4 coverage

| Subject | Topics | V4 lessons generated from existing subtopics |
| --- | ---: | ---: |
| Mathematics | 11 | 26 |
| Integrated Science | 8 | 35 |
| English | 7 | 21 |
| Social Studies | 10 | 57 |
| Religious Education | 14 | 43 |
| **P7 total** | **50** | **182** |

### Combined batch

- **78 P6/P7 topics** now render through upper-primary v4.
- **278 P6/P7 learner-facing v4 lessons** are generated from the current app subtopic libraries.

---

## Important quality boundary

This is a **major structural migration**, not a claim that every P6/P7 topic is premium-final.

Current status:

- P6/P7 are now structurally corrected into the v4 mobile lesson-stepper format.
- Existing topic/subtopic content has been preserved and converted into child-facing lesson blocks.
- Images and diagrams already referenced by existing modules continue to render inside v4 diagram blocks.
- P6/P7 still need targeted hand-deepening of high-value topics after this structural pass.
- P6/P7 RE still needs qualified CRE/IRE teacher review before premium-final status.

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

## Recommended next steps

1. Real-phone smoke test selected P6/P7 topic pages:
   - `/math/p6/p6-sets`
   - `/science/p6/p6-classification-living-things`
   - `/social-studies/p6/p6-location-east-africa`
   - `/math/p7/set-concepts`
   - `/science/p7/muscular-skeletal-system`
   - `/social-studies/p7/location-of-africa`
   - `/re/p7/cre-ancestors-pioneers-faith`
2. Hand-deepen high-impact P6/P7 topics in v4, prioritising PLE-heavy areas:
   - P7 Mathematics: Set Concepts, Fractions, Data Handling, Construction, Algebra
   - P7 Science: Muscular-Skeletal System, Electricity and Magnetism, Light Energy, Population and Health
   - P7 Social Studies: Location/Physical Features of Africa, Foreign Influence, Nationalism, World Organisations
   - P6 Mathematics/Science/SST bridge topics that prepare P7/PLE work
3. Keep P4/P5 RE and all P6/P7 RE marked as needing CRE/IRE review until human faith-teacher checks are complete.
