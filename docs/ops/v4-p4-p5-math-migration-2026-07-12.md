# V4 P4/P5 Mathematics Migration — 2026-07-12

## Purpose

Record the first Mathematics migration batch in the NCDC-native v4 content architecture.

Target:

- P4 Mathematics
- P5 Mathematics

This follows the v4 rule:

```txt
Definition → methods/key ideas → examples/rules → steps → worked examples → evaluation
```

---

## Structure implemented

New shared helper:

- `app/lib/v4-math-helpers.ts`

Purpose:

- Convert existing Mathematics topic/subtopic/module content into `upper-primary-v4` lessons.
- Preserve existing topic content while changing the student-facing render structure.
- Generate one v4 lesson per existing maths subtopic.
- Preserve hand-built v4 lessons when added later.

The helper adds:

```ts
contentFormat: "upper-primary-v4"
upperPrimaryLessons: UpperPrimaryLesson[]
```

for every Mathematics topic passed through it.

---

## P4 Mathematics migration

Updated file:

- `app/lib/p4-math-topics.ts`

Implementation:

- Replaced direct export array with internal `P4_MATH_TOPIC_DATA`.
- Added `P4_MATH_TERMS` from `content/curriculum/p4-math.json`.
- Export now wraps data with:

```ts
addUpperPrimaryMathV4(P4_MATH_TOPIC_DATA, "P4", P4_MATH_TERMS)
```

Coverage:

- 12 P4 Mathematics topics now render through upper-primary v4.

P4 Mathematics topics:

1. Set Concepts
2. Whole Numbers up to 100,000
3. Operations on Whole Numbers
4. Patterns and Sequences
5. Fractions
6. 2-Dimensional Geometry
7. 3-Dimensional Geometry
8. Data Handling
9. Money
10. Time
11. Length, Mass and Capacity
12. Equations without Letters

---

## P5 Mathematics migration

Updated file:

- `app/lib/p5-math-topics.ts`

Implementation:

- Added `P5_MATH_TERMS` from `content/curriculum/p5-math.json`.
- Export now wraps data with:

```ts
balanceTopicAnswers(addUpperPrimaryMathV4(P5_MATH_TOPIC_DATA, "P5", P5_MATH_TERMS))
```

Coverage:

- 12 P5 Mathematics topics now render through upper-primary v4.

P5 Mathematics topics:

1. Set Concepts
2. Whole Numbers
3. Operations on Whole Numbers
4. Patterns and Sequences
5. Fractions
6. Integers
7. Lines, Angles and Geometrical Figures
8. Data Handling
9. Time
10. Money
11. Length, Mass and Capacity
12. Algebra

---

## Student-facing result

P4/P5 Mathematics topic pages now use the upper-primary v4 renderer:

```txt
Lesson selector
→ one module/lesson at a time
→ definition
→ methods / key ideas
→ examples and rules
→ steps to remember
→ diagram where available
→ worked examples
→ evaluation
```

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

## Remaining work

This is a **structural migration**, not final manual deepening of every Maths topic.

Recommended next manual deepening order:

1. P4 Mathematics — Whole Numbers up to 100,000
2. P4 Mathematics — Operations on Whole Numbers
3. P4 Mathematics — Fractions
4. P5 Mathematics — Fractions
5. P5 Mathematics — Operations on Whole Numbers
6. P5 Mathematics — Measurement / Money / Algebra

Teacher review remains required before premium-final status.
