# P7 Mathematics Premium Audit & Strengthening Pass — 2026-07-09

## Purpose

This is the first content-first pass under the premium parent-funded strategy. The goal is to make P7 Mathematics feel more complete, trustworthy and worth paying for.

## Audit finding

P7 Mathematics already had all 11 official top-level topics live, but some topics were thinner than the strongest modular topics. The thinnest topics were:

1. Integers
2. Time
3. Data Handling and Graphs
4. Length, Mass, Capacity and Money
5. Algebra

These topics had fewer modules and more generic fallback-style explanations compared with stronger topics like Set Concepts and Whole Numbers.

## Work completed

Updated `app/lib/topics.ts` for the five thinnest P7 Mathematics topics.

### Integers

Now includes:

- number line and ordering
- adding/subtracting integers
- multiplying/dividing integers
- real-life applications such as temperature, losses and movement
- worked examples
- quick checks
- visual brief
- improved quiz explanations

Current structure:

- 2 subtopics
- 3 modules
- 8 quiz questions

### Time

Now includes:

- 12-hour and 24-hour clock conversion
- duration calculation
- crossing midnight
- timetable problems
- worked examples
- quick checks

Current structure:

- 2 subtopics
- 3 modules
- 8 quiz questions

### Data Handling and Graphs

Now includes:

- mean, median, mode and range
- bar graphs, line graphs and pictograms
- pie chart sector angles
- coordinates
- travel graphs
- worked examples
- visual brief
- quick checks

Current structure:

- 2 subtopics
- 3 modules
- 8 quiz questions

### Length, Mass, Capacity and Money

Now includes:

- metric conversions
- length, mass and capacity units
- perimeter and area
- circles and triangles
- volume and capacity
- profit, loss and simple interest
- worked examples
- quick checks

Current structure:

- 3 subtopics
- 4 modules
- 8 quiz questions

### Algebra

Now includes:

- simplifying expressions
- substitution
- solving equations
- inequalities and number lines
- algebra word problems
- worked examples
- quick checks
- visual brief

Current structure:

- 2 subtopics
- 5 modules
- 8 quiz questions

## Verification

Ran:

```bash
cd app
npm run build
```

Build passed with 188 static pages.

## Remaining P7 Mathematics premium tasks

1. Human/founder review of the five upgraded topics for accuracy and wording.
2. Add or improve visuals for Time and Measurement if needed.
3. Review question-bank alignment after the content upgrade.
4. Add parent-facing recommendation tags later, e.g.:
   - weak in integer signs
   - weak in time intervals
   - weak in graph scales
   - weak in algebra equations
5. After Maths, move to P7 English premium audit.

## Verdict

P7 Mathematics is now much closer to premium-ready. It still needs human review, but the biggest thin-topic gaps have been strengthened.
