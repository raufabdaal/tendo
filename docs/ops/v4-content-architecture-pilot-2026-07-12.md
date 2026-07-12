# V4 Content Architecture Pilot — 2026-07-12

## Purpose

Record the first implementation of the **NCDC-native content architecture v4** after founder review identified that “more modules” was not solving the content quality problem.

V4 changes the student-facing lesson from curriculum/meta wrappers into direct teaching blocks.

---

## Decision basis

Spec:

- `docs/spec/ncdc-native-content-architecture-v4-2026-07-12.md`

Decision:

- `DECISIONS.md` → `DEV-033 · NCDC-native content architecture v4: fullness means direct lesson blocks, not meta modules`

---

## Implemented in this pilot

### 1. Typed v4 content block model

New file:

- `app/lib/content-blocks.ts`

Core types added:

- `ContentFormat`
- `LowerPrimaryLesson`
- `UpperPrimaryLesson`
- `VocabularyBlock`
- `StoryBlock`
- `DefinitionBlock`
- `IdentificationBlock`
- `CategoryBlock`
- `ExamplesBlock`
- `CharacteristicsBlock`
- `UsesBlock`
- `PhonicsBlock`
- `NumeracyBlock`
- `DiagramBlock`
- `ActivityBlock`
- `WorkedExampleBlock`
- `ExerciseBlock`

`Topic` now supports optional v4 content:

- `contentFormat?: ContentFormat`
- `lowerPrimaryLessons?: LowerPrimaryLesson[]`
- `upperPrimaryLessons?: UpperPrimaryLesson[]`

Updated file:

- `app/lib/topics.ts`

---

### 2. V4 renderers

New file:

- `app/components/V4LessonViews.tsx`

Renderers:

- `LowerPrimaryLessonView`
- `UpperPrimaryLessonView`

Updated file:

- `app/components/TopicTabs.tsx`

`TopicTabs` now renders v4 lessons first when a topic has:

```ts
contentFormat: "lower-primary-v4"
```

or

```ts
contentFormat: "upper-primary-v4"
```

Legacy v3 modular rendering remains for all other content.

---

### 3. V4 styles

Updated:

- `app/app/globals.css`

New class family:

- `.v4-lesson-shell`
- `.v4-lesson-card`
- `.v4-block`
- `.v4-vocab-grid`
- `.v4-category-grid`
- `.v4-example-list`
- `.v4-pill-row`

---

## Pilot lesson 1 — P3 lower-primary thematic

Route:

```txt
/p3/theme/p3-theme-6-plants
```

Content file:

- `app/lib/p3-thematic-topics.ts`

Pilot:

```txt
Class: P3
Term: Term II
Theme: Living Things: Plants in Our Sub-county/Division
Sub-theme: Parts of a Flowering Plant and their Uses
Lesson: Parts of a Flowering Plant
```

Student-facing v4 flow:

1. New words
2. Read and talk
3. What is a plant?
4. Main parts of a flowering plant
5. Look at the plant
6. Useful plant parts
7. Plants around us
8. Say the sound
9. Count / sort / match
10. Activity: draw and label
11. Exercise

Important correction:

- For this v4 pilot theme page, the old learner-facing meta section is hidden:
  - no “Expected outcome and theme guide”
  - no “What you will learn” block
  - no “This part helps a learner...” copy

Updated file:

- `app/app/p3/theme/[theme]/page.tsx`

---

## Pilot lesson 2 — P5 upper-primary subject

Route:

```txt
/science/p5/p5-keeping-poultry-bees
```

Content file:

- `app/lib/p5-science-topics.ts`

Pilot:

```txt
Class: P5
Term: Term I
Subject: Integrated Science
Topic: Keeping Poultry and Bees
Sub-topic: Breeds of Poultry
Lesson: Breeds of Poultry
```

Student-facing v4 flow:

1. What is poultry?
2. Types of poultry breeds
3. Breeds grouped by purpose
4. Examples of poultry birds
5. Characteristics of exotic poultry breeds
6. Uses / importance of poultry
7. Poultry summary card
8. Evaluation

Important correction:

- The P5 lesson now starts with the definition and then classifications, examples, characteristics/uses and evaluation.
- This matches the founder-proposed chalkboard-note style much better than the previous meta-module approach.

---

## Build verification

Command:

```bash
cd app && npm install && npm run build
```

Result:

```txt
✓ Compiled successfully
✓ Generating static pages (356/356)
```

Note: `npm install` was needed because `node_modules` was missing in the sandbox and `next` was not found.

---

## Current status

V4 is implemented as a **pilot**, not yet migrated across all classes.

Working routes to review:

```txt
/p3/theme/p3-theme-6-plants
/science/p5/p5-keeping-poultry-bees
```

Recommended founder review questions:

1. Does the P3 lesson now feel like it is teaching a child directly?
2. Does the P5 poultry lesson now feel like proper Ugandan chalkboard notes?
3. Is the block order right?
4. Should we show one v4 lesson at a time or multiple sub-topics on one page?
5. Should the Read/Watch/Try tab shell remain, or should v4 lesson pages use a simpler direct lesson screen?

---

## Next recommended implementation

If founder approves this direction:

1. Refine visual/UI styling of v4 blocks.
2. Add a sub-topic/lesson selector for topics with many v4 lessons.
3. Convert all P3 thematic sub-themes to v4.
4. Convert P4/P5 Science first.
5. Then migrate P4/P5 remaining subjects.
6. Then migrate P6/P7 high-value subjects/topics.

---

## Push implication

The older P3 push package exists, but the product story has changed.

Do not push with the message “P3 complete” as if the content structure is final. If pushing now, use a commit message that reflects the architecture correction and pilot:

```txt
Content: add NCDC-native v4 lesson pilot
```

or wait until the v4 pilot is reviewed and refined.
