# NCDC-Native Content Architecture v4 — 2026-07-12

## Purpose

This spec corrects a major product/content issue discovered during founder review.

The previous approach tried to make content “full” by adding more modules, learning objectives, theme guides and explanatory wrappers. That created volume, but not the right learner experience — especially for P3, P4 and P5.

The new rule:

> Full content means direct, child-facing lesson completeness: definitions, types, examples, characteristics/uses and exercises — not curriculum meta-explanations.

This spec defines the app-native content hierarchy and lesson delivery structure for Uganda’s NCDC primary curriculum.

---

## Problem we are correcting

Founder review found that lower-primary and middle-primary content currently reads too much like curriculum planning notes for a teacher.

Examples of content/UI that should not be pupil-facing:

- “Expected outcome”
- “Theme guide”
- “What you will learn” for very young learners
- “Explain key ideas in…”
- “This part helps a P3 learner understand…”
- “NCDC key content includes…”
- Broad meta-copy about why the lesson exists

These are useful internally, but they are not how a child learns.

A child opening a lesson about plants should see:

1. What are plants?
2. Examples of plants.
3. Types of plants.
4. Definition of each type.
5. Examples of each type.
6. Parts/characteristics/uses where relevant.
7. A clear exercise.

Not a curriculum explanation.

---

## Non-negotiable principles

1. **NCDC first, build second.**
2. **The learner screen should teach directly.**
3. **Curriculum metadata belongs in data/admin/reviewer context, not as the main child-facing lesson.**
4. **Completeness is structural, not just length.**
5. **P1–P3 and P4–P7 must use different curriculum models.**
6. **Every sub-topic/sub-theme should decompose into teachable knowledge blocks.**
7. **Definitions, types, examples and exercises are mandatory where the content requires them.**
8. **Local Ugandan examples and diagrams are part of completeness.**

---

## Global curriculum hierarchy

The app content database should support this strict hierarchy:

```txt
Class Level: P1–P7
└── Term: Term I, Term II, Term III
    └── Theme or Subject
        └── Topic / Strand
            └── Sub-topic / Sub-strand
                └── Lesson Content Blocks
                    ├── Definitions
                    ├── Types / Categories / Classifications
                    ├── Examples / Illustrations
                    ├── Characteristics / Properties / Uses
                    └── Evaluation / Exercises
```

For P1–P3, “Theme” is the main organiser.
For P4–P7, “Subject” is the main organiser.

---

# Part A — Lower Primary: P1–P3 thematic structure

## Why P3 uses themes, not subjects

Official NCDC lower primary uses a thematic approach for P1–P3. Subjects do not appear independently in the same way as P4–P7.

The app must still respect that. However, the learner UI should not feel like a teacher scheme of work. It should feel like a simple lesson.

Correct P3 route model remains:

```txt
/p3-home
/p3/theme/[theme]
/p3/re
/p3/re/[topic]
```

Do not add these unless a bridge design is approved:

```txt
/math/p3
/english/p3
/science/p3
/social-studies/p3
/re/p3
```

## P1–P3 data model

```ts
type LowerPrimaryLesson = {
  classLevel: "P1" | "P2" | "P3";
  term: "Term I" | "Term II" | "Term III";
  curriculumMode: "thematic";
  theme: {
    id: string;
    title: string;
    ncdcExpectedOutcome?: string; // internal/reviewer, not primary child UI
  };
  subTheme: {
    id: string;
    title: string;
  };
  learningAreas: LowerPrimaryLearningAreaBlock[];
};

type LowerPrimaryLearningAreaBlock = {
  area:
    | "Literacy I"
    | "Literacy II / News"
    | "Mathematics / Numeracy"
    | "English"
    | "Creative Performing Arts"
    | "Life Skills and Values";
  lessonTitle: string;
  blocks: LowerPrimaryContentBlock[];
};

type LowerPrimaryContentBlock =
  | VocabularyBlock
  | StoryBlock
  | DefinitionBlock
  | IdentificationBlock
  | CategoryBlock
  | ExamplesBlock
  | PhonicsBlock
  | NumeracyBlock
  | ActivityBlock
  | ExerciseBlock;
```

## P1–P3 learner screen flow

For younger learners, the screen should be simple and direct:

```txt
Theme: Living Things: Plants
Sub-theme: Parts of a Flowering Plant and their Uses

1. New Words
2. Short Story / Talk About It
3. Learn
   - What is a plant?
   - Parts of a flowering plant
   - Uses of each part
4. Examples Around Us
5. Say / Read / Write
6. Count / Sort / Match
7. Activity
8. Exercise
```

## Lower-primary content block definitions

### 1. Vocabulary / Spelling

Purpose: introduce core words before the lesson.

```ts
type VocabularyBlock = {
  kind: "vocabulary";
  words: Array<{
    word: string;
    meaning: string;
    localLanguage?: string;
    pronunciationHint?: string;
    audioKey?: string;
  }>;
};
```

Example:

```txt
plant — a living thing that grows in soil or water
root — the part of a plant that holds it in the soil
leaf — the part of a plant that makes food for the plant
```

### 2. Story / Text Fragment

Purpose: make the theme familiar and readable.

```ts
type StoryBlock = {
  kind: "story";
  title: string;
  text: string;
  questions: string[];
};
```

Example:

```txt
Amina planted beans behind her home. After some days, small green plants came out of the soil. The plants had roots, stems and leaves.
```

### 3. Definition / Identification

Purpose: teach directly.

```ts
type DefinitionBlock = {
  kind: "definition";
  term: string;
  definition: string;
  simpleCheck?: string;
};
```

Example:

```txt
A plant is a living thing that grows in soil or water. Most plants have roots, stems and leaves.
```

### 4. Types / Categories

Purpose: break down the concept.

```ts
type CategoryBlock = {
  kind: "categories";
  title: string;
  categories: Array<{
    name: string;
    definition: string;
    examples: string[];
  }>;
};
```

Example:

```txt
Types of plants:
1. Food plants — plants people eat. Examples: beans, cassava, maize.
2. Medicine plants — plants used as medicine. Examples: aloe vera, neem.
3. Fibre plants — plants used to make ropes or mats. Examples: sisal, banana fibre.
```

### 5. Examples Around Us

Purpose: localise content.

```ts
type ExamplesBlock = {
  kind: "examples";
  title: string;
  examples: Array<{
    name: string;
    note?: string;
    localContext?: string;
  }>;
};
```

### 6. Phonics and Audio

This is important for P1–P3.

```ts
type PhonicsBlock = {
  kind: "phonics";
  sound: string;
  words: string[];
  audioKey?: string;
};
```

Example:

```txt
Sound: /pl/
Words: plant, play, plate
```

### 7. Numeracy

Purpose: teach maths through the theme.

```ts
type NumeracyBlock = {
  kind: "numeracy";
  skill: string;
  examples: string[];
  exercise: string[];
};
```

Example:

```txt
Count 5 leaves.
Put 10 seeds into two equal groups.
```

### 8. Activity

Purpose: make it practical.

```ts
type ActivityBlock = {
  kind: "activity";
  title: string;
  instructions: string[];
  safetyNote?: string;
};
```

### 9. Exercise

Purpose: pupil evaluation.

```ts
type ExerciseBlock = {
  kind: "exercise";
  questions: Array<{
    type: "oral" | "written" | "matching" | "multiple-choice" | "fill-blank";
    prompt: string;
    answer?: string;
    choices?: string[];
  }>;
};
```

---

# Part B — Upper Primary: P4–P7 subject structure

From P4 onwards, the curriculum is subject-based and exam-facing.

## P4–P7 data model

```ts
type UpperPrimaryLesson = {
  classLevel: "P4" | "P5" | "P6" | "P7";
  term: "Term I" | "Term II" | "Term III";
  curriculumMode: "subject";
  subject:
    | "Mathematics"
    | "English"
    | "Integrated Science"
    | "Social Studies"
    | "Religious Education";
  topic: {
    id: string;
    title: string;
  };
  subTopic: {
    id: string;
    title: string;
  };
  blocks: UpperPrimaryContentBlock[];
};

type UpperPrimaryContentBlock =
  | DefinitionBlock
  | ClassificationBlock
  | ExamplesBlock
  | CharacteristicsBlock
  | UsesBlock
  | DiagramBlock
  | WorkedExampleBlock
  | ExerciseBlock;
```

## P4–P7 learner screen flow

Every upper-primary sub-topic should mimic strong Ugandan chalkboard notes:

```txt
[SUB-TOPIC HEADER]

1. Definition
2. Types / Classifications
   - type definition
   - examples
3. Examples / Illustrations
4. Characteristics / Properties / Uses
5. Worked Examples / Diagrams
6. Evaluation
```

## Upper-primary block definitions

### 1. Definition

```ts
type DefinitionBlock = {
  kind: "definition";
  term: string;
  definition: string;
};
```

### 2. Types / Classifications

```ts
type ClassificationBlock = {
  kind: "classification";
  title: string;
  items: Array<{
    name: string;
    definition: string;
    examples: string[];
    notes?: string[];
  }>;
};
```

### 3. Examples / Illustrations

```ts
type ExamplesBlock = {
  kind: "examples";
  title: string;
  examples: Array<{
    name: string;
    explanation?: string;
    localExample?: boolean;
  }>;
};
```

### 4. Characteristics / Properties / Uses

```ts
type CharacteristicsBlock = {
  kind: "characteristics";
  title: string;
  points: string[];
};

type UsesBlock = {
  kind: "uses";
  title: string;
  points: string[];
};
```

### 5. Diagram

```ts
type DiagramBlock = {
  kind: "diagram";
  title: string;
  imageUrl: string;
  labels?: string[];
  caption: string;
};
```

### 6. Worked Example

```ts
type WorkedExampleBlock = {
  kind: "worked-example";
  question: string;
  steps: string[];
  answer: string;
};
```

### 7. Evaluation

```ts
type ExerciseBlock = {
  kind: "exercise";
  title: "Evaluation" | string;
  questions: Array<{
    prompt: string;
    type: "short-answer" | "multiple-choice" | "fill-blank" | "matching";
    choices?: string[];
    answer?: string;
  }>;
};
```

---

## Example: P5 Science — Poultry Keeping

```txt
Class: P5
Term: Term I
Subject: Integrated Science
Topic: Keeping Poultry and Bees
Sub-topic: Breeds of Poultry
```

### 1. Definition

```txt
Poultry are domestic birds kept by people for eggs, meat, feathers or income.
```

### 2. Types / Classifications

```txt
1. Local / Indigenous breeds
   Definition: Birds that are commonly kept locally and are adapted to local conditions.
   Examples: local hens, local ducks, local turkeys.

2. Exotic / Improved breeds
   Definition: Birds introduced or improved for high production of eggs or meat.
   Examples: White Leghorn, Light Sussex, Rhode Island Red, Plymouth Rock.
```

### 3. Sub-types by purpose

```txt
1. Layers
   Definition: Birds kept mainly for laying eggs.
   Examples: White Leghorn, Light Sussex.

2. Broilers
   Definition: Birds kept mainly for meat production.
   Examples: examples must be checked against NCDC/local textbooks before final release.

3. Dual-purpose birds
   Definition: Birds kept for both eggs and meat.
   Examples: Rhode Island Red, Plymouth Rock depending on local textbook classification.
```

Important: examples must be checked against NCDC or trusted Ugandan primary textbooks before premium-final status. Do not blindly import web examples.

### 4. Characteristics

```txt
Characteristics of exotic layers:
- They lay many eggs.
- They usually need good feeding and housing.
- Some do not sit well on eggs.
- They are more expensive to keep than local birds.
```

### 5. Uses / Importance

```txt
Uses of poultry:
- provide eggs,
- provide meat,
- provide manure,
- provide income,
- provide feathers.
```

### 6. Evaluation

```txt
1. What is poultry?
2. Give two examples of poultry birds.
3. What is a layer?
4. Give one use of poultry.
5. State one difference between local and exotic poultry breeds.
```

---

## UI rendering implications

The current `TopicTabs` / `SubtopicModule` model can remain temporarily for backward compatibility, but it should not be the final authoring model.

Recommended next implementation:

1. Add new typed block model in `app/lib/content-blocks.ts`.
2. Add two renderers:
   - `LowerPrimaryLessonView.tsx`
   - `UpperPrimaryLessonView.tsx`
3. Keep `TopicTabs.tsx` as a wrapper/router that chooses renderer by `contentFormat`:

```ts
type TopicContentFormat =
  | "legacy-v3-modular"
  | "lower-primary-v4"
  | "upper-primary-v4";
```

4. Convert content gradually:
   - first one P3 sub-theme,
   - then one P5 Science topic,
   - then roll by class/subject.

---

## Migration plan

### Phase 1 — Architecture lock

- Create this spec.
- Log the decision in `DECISIONS.md`.
- Stop expanding lower-primary content using meta-module wrappers.

### Phase 2 — Pilot conversion

Convert two sample lessons:

1. P3 thematic sample:
   - Theme: Living Things: Plants in Our Sub-county/Division
   - Sub-theme: Parts of a Flowering Plant and their Uses

2. P5 Science sample:
   - Topic: Keeping Poultry and Bees
   - Sub-topic: Breeds of Poultry

### Phase 3 — Renderer implementation

Create child-friendly block renderers and test on mobile.

### Phase 4 — Content migration

Migrate classes in this order:

1. P3 thematic pages.
2. P4 Science and P5 Science because founder already noticed “Plants” and “Poultry” need full chalkboard-style structure.
3. P4/P5 remaining subjects.
4. P6/P7 high-value topics.

### Phase 5 — Premium-final review

Only after structure and content are corrected should teacher review start for premium-final status.

---

## Push implication

Do **not** present the current P3/P4/P5 lower/middle-primary content as premium-final.

The current P3 milestone may still be pushed as a beta foundation if needed, but the active next product work must be this content-architecture correction.

If founder wants the cleanest public/product path, hold P3 premium messaging until v4 content structure is piloted and approved.

---

## Product decision implication

P3 may be the bottom of the current Tendo primary cycle for now.

Do not start P2/P1 inside the same flow until there is a separate lower-primary product/track decision, because P1–P2 require even more phonics, audio, local-language and early-literacy support.
