# V4 P4/P5 Mathematics Priority Deepening — 2026-07-12

## Purpose

Record the first manual-deepening batch after structurally migrating P4/P5 Mathematics to v4.

Focus topics were chosen because they are high-impact foundations:

- P4 Whole Numbers
- P4 Operations on Whole Numbers
- P4 Fractions
- P5 Operations on Whole Numbers
- P5 Fractions

---

## Implementation summary

Updated files:

- `app/lib/p4-math-topics.ts`
- `app/lib/p5-math-topics.ts`

Added hand-built v4 lesson arrays:

- `P4_WHOLE_NUMBERS_V4`
- `P4_OPERATIONS_V4`
- `P4_FRACTIONS_V4`
- `P5_OPERATIONS_V4`
- `P5_FRACTIONS_V4`

Each topic now uses:

```ts
useOnlyV4Lessons: true
```

so the hand-built lessons override generated structural v4 lessons.

---

## P4 Whole Numbers

Route:

```txt
/math/p4/p4-whole-numbers
```

Lessons:

1. Reading, Place Value and Value
2. Expanded Form, Short Form and Words
3. Rounding and Roman Numerals

Key content:

- whole number definition,
- place-value columns up to ten-thousands,
- place value vs value,
- writing numbers in figures and words,
- expanded form and short form,
- rounding to nearest 10, 100 and 1,000,
- Roman numerals up to XX.

---

## P4 Operations on Whole Numbers

Route:

```txt
/math/p4/p4-operations-whole-numbers
```

Lessons:

1. Addition and Subtraction
2. Multiplication and Division

Key content:

- addition definition,
- subtraction definition,
- addition/subtraction with and without regrouping,
- multiplication definition,
- division definition,
- multiplying by 0, 10 and 100,
- division by 100,
- word problem operation choice.

---

## P4 Fractions

Route:

```txt
/math/p4/p4-fractions
```

Lessons:

1. Fraction Types
2. Comparing and Calculating Fractions

Key content:

- fraction definition,
- proper fractions,
- improper fractions,
- mixed numbers,
- equivalent fractions,
- ordering fractions,
- fractions of a group,
- addition/subtraction with same denominators.

---

## P5 Operations on Whole Numbers

Route:

```txt
/math/p5/p5-operations-whole-numbers
```

Lessons:

1. Four Operations
2. Word Problems and Checking

Key content:

- operation definition,
- addition, subtraction, multiplication and division,
- operation clue words,
- word problems,
- checking with inverse operations,
- estimation/reasonableness.

---

## P5 Fractions

Route:

```txt
/math/p5/p5-fractions
```

Lessons:

1. Decimal Fractions
2. Adding and Subtracting Decimal Fractions

Key content:

- decimal fraction definition,
- tenths,
- hundredths,
- vulgar fractions,
- decimal place value,
- converting decimals to fractions,
- adding/subtracting decimal fractions by lining up decimal points.

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

## Remaining Mathematics work

P4/P5 Mathematics are structurally in v4, and 5 priority topics are now hand-deepened.

Recommended next manual-deepening topics:

1. P4 2-D Geometry
2. P4 Money / Time / Measurement
3. P5 Whole Numbers
4. P5 Measurement / Money / Algebra
5. P5 Geometry / Data Handling

Teacher review remains required before premium-final status.

---

## Second manual deepening update — P4 Geometry/Money/Time/Measurement and P5 Whole Numbers/Money/Measurement/Algebra

Additional priority Mathematics topics have been hand-deepened in upper-primary v4.

### P4 2-Dimensional Geometry

Route:

```txt
/math/p4/p4-two-dimensional-geometry
```

Lessons:

1. 2-D Figures and Right Angles
2. Polygons, Perimeter and Area

### P4 Money

Route:

```txt
/math/p4/p4-money
```

Lessons:

1. Uganda Currency, Buying and Selling
2. Profit, Loss and Money Conversion

### P4 Time

Route:

```txt
/math/p4/p4-time
```

Lessons:

1. Calendar and Clock Time
2. Duration and Conversion of Time

### P4 Length, Mass and Capacity

Route:

```txt
/math/p4/p4-length-mass-capacity
```

Lessons:

1. Standard Instruments and Units
2. Perimeter, Area and Simple Problems

### P5 Whole Numbers

Route:

```txt
/math/p5/p5-whole-numbers
```

Lessons:

1. Place Value up to 999,999
2. Rounding and Roman Numerals

### P5 Money

Route:

```txt
/math/p5/p5-money
```

Lessons:

1. Buying, Selling, Profit and Loss

### P5 Length, Mass and Capacity

Route:

```txt
/math/p5/p5-length-mass-capacity
```

Lessons:

1. Length, Mass, Capacity, Perimeter and Area

### P5 Algebra

Route:

```txt
/math/p5/p5-algebra
```

Lessons:

1. Simple Equations and Unknown Values

Implementation:

- Added `P4_2D_GEOMETRY_V4`.
- Added `P4_MONEY_V4`.
- Added `P4_TIME_V4`.
- Added `P4_MEASUREMENT_V4`.
- Added `P5_WHOLE_NUMBERS_V4`.
- Added `P5_MONEY_V4`.
- Added `P5_MEASUREMENT_MATH_V4`.
- Added `P5_ALGEBRA_V4`.
- Set `useOnlyV4Lessons: true` for these topics.

Build result:

```txt
cd app && npm run build
✓ Compiled successfully
✓ Generating static pages (356/356)
```

Current P4/P5 Mathematics hand-deepened topics:

P4:

- Whole Numbers
- Operations on Whole Numbers
- Fractions
- 2-Dimensional Geometry
- Money
- Time
- Length, Mass and Capacity

P5:

- Whole Numbers
- Operations on Whole Numbers
- Fractions
- Money
- Length, Mass and Capacity
- Algebra

Remaining recommended Maths manual deepening:

P4:

- Set Concepts
- Patterns and Sequences
- 3-Dimensional Geometry
- Data Handling
- Equations without Letters

P5:

- Set Concepts
- Patterns and Sequences
- Integers
- Lines, Angles and Geometrical Figures
- Data Handling
- Time

---

## Final manual deepening update — P4/P5 Mathematics v4 complete

The remaining P4/P5 Mathematics topics have now been hand-deepened in upper-primary v4.

### Final P4 Mathematics topics completed

1. **Set Concepts**
   - identifying, naming and forming sets,
   - members and number of members,
   - equal, equivalent and empty sets,
   - common members.

2. **Patterns and Sequences**
   - patterns,
   - even and odd numbers,
   - shape patterns,
   - add/subtract/multiply sequence rules.

3. **3-Dimensional Geometry**
   - 3-D shape definition,
   - cube, cuboid, sphere, cylinder, cone and pyramid,
   - faces, edges and vertices,
   - model building.

4. **Data Handling**
   - data definition,
   - tally marks,
   - pictographs,
   - bar graphs,
   - line graphs.

5. **Equations without Letters**
   - equation definition,
   - box/missing-number equations,
   - addition/subtraction relationships,
   - multiplication/division relationships,
   - changing word problems into equations.

### Final P5 Mathematics topics completed

1. **Set Concepts**
   - sets,
   - equal/equivalent/empty sets,
   - union,
   - intersection,
   - Venn diagrams.

2. **Patterns and Sequences**
   - number patterns,
   - sequence rules,
   - add/subtract/multiply patterns,
   - changing differences.

3. **Integers**
   - integer definition,
   - positive and negative numbers,
   - zero,
   - number line,
   - real-life integer situations.

4. **Lines, Angles and Geometrical Figures**
   - angle definition,
   - parallel and perpendicular lines,
   - right angles,
   - circles,
   - symmetry.

5. **Data Handling**
   - data definition,
   - scales,
   - bar graphs,
   - line graphs,
   - averages.

6. **Time**
   - duration definition,
   - 12-hour clock,
   - hours, minutes and seconds,
   - duration,
   - speed.

Implementation:

- Added `P4_SET_CONCEPTS_V4`.
- Added `P4_PATTERNS_V4`.
- Added `P4_3D_GEOMETRY_V4`.
- Added `P4_DATA_HANDLING_V4`.
- Added `P4_EQUATIONS_V4`.
- Added `P5_SETS_V4`.
- Added `P5_PATTERNS_V4`.
- Added `P5_INTEGERS_V4`.
- Added `P5_GEOMETRY_V4`.
- Added `P5_DATA_HANDLING_V4`.
- Added `P5_TIME_V4`.
- Set `useOnlyV4Lessons: true` for these topics.

Build result:

```txt
cd app && npm run build
✓ Compiled successfully
✓ Generating static pages (356/356)
```

Current P4/P5 Mathematics status:

- P4 Mathematics: 12/12 topics structurally migrated and hand-deepened in v4.
- P5 Mathematics: 12/12 topics structurally migrated and hand-deepened in v4.
- P4/P5 Mathematics are complete at AI-builder v4 level.

Remaining review:

- maths teacher review,
- mobile/real-device review,
- arithmetic/example spot-checks.
