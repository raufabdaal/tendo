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

---

## Mobile module stepper update — same pass

Founder review of the first v4 pilot confirmed that the content itself was much better, but the single long list was still too overwhelming on mobile.

Implemented update:

- V4 lessons now render as a **module/stepper flow**.
- One content block/module is shown at a time.
- Learners see:
  - `Module X of Y`,
  - module title,
  - progress meter,
  - horizontal module strip,
  - Previous / Next module buttons,
  - Finish lesson button on the last module.
- This gives pupils a sense of completion and reduces long scrolling.

Updated file:

- `app/components/V4LessonViews.tsx`

Mobile-first style updates:

- bigger image treatment inside v4 modules,
- horizontal scrollable module strip,
- full-width mobile navigation buttons,
- minimum module height for breathing space,
- single-column cards on small screens.

Updated file:

- `app/app/globals.css`

Current pilot routes remain:

```txt
/p3/theme/p3-theme-6-plants
/science/p5/p5-keeping-poultry-bees
```

Build result:

```txt
cd app && npm run build
✓ Compiled successfully
✓ Generating static pages (356/356)
```

This stepper/module presentation is now the preferred v4 learner-facing structure for P3–P7 migration.

---

## Lesson selector + mobile polish update — same pass

Founder review after the module stepper confirmed the structure direction, but the mobile UI still looked mismatched and the images needed better mobile treatment.

Additional implementation:

- Added a **lesson selector** for topics/themes with more than one v4 lesson.
- Completed the first full P3 v4 migration batch:
  - `Plants and Their Habitats`
  - `Parts of a Flowering Plant`
  - `Crop-growing Practices`
- The P3 Plants theme now uses a lesson selector first, then a module stepper inside the selected lesson.
- Mobile module chips are compact numbered circles instead of wide mismatched cards.
- Duplicate internal block numbers are hidden on mobile because the module header already provides progress.
- V4 image cards now allow horizontal swiping on mobile so text-heavy diagrams remain readable.
- Added a mobile image hint: “swipe the picture sideways if the labels look small.”

Updated files:

- `app/components/V4LessonViews.tsx`
- `app/lib/p3-thematic-topics.ts`
- `app/app/globals.css`

Current migrated v4 routes:

```txt
/p3/theme/p3-theme-6-plants
/science/p5/p5-keeping-poultry-bees
```

Build result:

```txt
cd app && npm run build
✓ Compiled successfully
✓ Generating static pages (356/356)
```

This is now the locked v4 presentation standard for migration unless founder review requests further UI changes.

---

## Full P3 thematic structural migration pass — same cycle

After the v4 mobile stepper was locked, the remaining P3 thematic pages were moved into the v4 renderer.

Implementation:

- All 12 P3 thematic routes now set `contentFormat: "lower-primary-v4"`.
- All P3 thematic routes now use the lower-primary lesson selector + module stepper instead of the old meta-module learner UI.
- P3 Theme 6 Plants remains the first hand-deepened model with three full v4 lessons:
  - Plants and Their Habitats
  - Parts of a Flowering Plant
  - Crop-growing Practices
- The other 11 themes now have a first-pass v4 structural migration generated from:
  - the official NCDC thematic map,
  - the existing `SUBTHEME_POLISH` layer,
  - each sub-theme's visual asset.

Important honesty note:

- This is a **structural migration pass**, not final content deepening for every P3 theme.
- The student-facing UI is now in the right format across P3.
- Some themes still need manual deepening, better definitions/examples and teacher review before premium-final status.

Updated file:

- `app/lib/p3-thematic-topics.ts`

Build result:

```txt
cd app && npm run build
✓ Compiled successfully
✓ Generating static pages (356/356)
```

Next recommended P3 work:

1. Manually deepen Theme 1: Our Sub-county/Division.
2. Manually deepen Theme 5: Animals.
3. Manually deepen Theme 10: Health.
4. Continue theme-by-theme until all generated v4 lessons are upgraded to full child-facing quality.

---

## Manual deepening update — Theme 1 complete

P3 Theme 1 has now been manually deepened in v4, not just structurally migrated.

Route:

```txt
/p3/theme/p3-theme-1-subcounty-division
```

Hand-deepened lessons:

1. **Name and Location of Our Sub-county/Division**
   - sub-county/division definition
   - map vs picture
   - map key
   - compass directions
   - local location words
   - counting/sets/distance practice
   - map drawing activity

2. **Physical Features Around Us**
   - physical feature definition
   - types of physical features
   - raised land / low land / water features
   - local examples and uses
   - caring for rivers, lakes and swamps
   - counting/comparing features

3. **People and Leaders in Our Area**
   - family/clan/tribe/community vocabulary
   - people in the sub-county/division
   - types of leaders
   - roles of leaders
   - respect for clans, tribes and communities
   - peaceful leadership role-play

Updated file:

- `app/lib/p3-thematic-topics.ts`

Build result:

```txt
cd app && npm run build
✓ Compiled successfully
✓ Generating static pages (356/356)
```

Current manually deepened P3 v4 themes:

- Theme 1: Our Sub-county/Division
- Theme 6: Living Things: Plants

Recommended next manual deepening:

- Theme 5: Living Things: Animals
- Theme 10: Health

---

## Manual deepening update — Themes 5 and 10 complete

P3 Theme 5 and Theme 10 have now been manually deepened in v4.

### Theme 5 — Living Things: Animals

Route:

```txt
/p3/theme/p3-theme-5-animals
```

Hand-deepened lessons:

1. **Living Things**
   - living thing definition
   - animals, birds, insects and fish
   - habitats
   - classification and multiplication practice
   - safe observation activity

2. **Birds and Insects**
   - bird definition
   - insect definition
   - domestic birds
   - wild birds
   - useful insects
   - harmful insects
   - crested crane as Uganda's national bird
   - counting legs/wings practice

3. **Care for Animals, Birds and Useful Insects**
   - care definition
   - food and water
   - shelter
   - health care
   - care for bees/hives
   - safe animal care rules
   - word problems in 2s, 3s and 10s

### Theme 10 — Health

Route:

```txt
/p3/theme/p3-theme-10-health
```

Hand-deepened lessons:

1. **Disease Vectors**
   - vector definition
   - mosquito, housefly, rat, cockroach, louse, flea, bed-bug and tsetse fly
   - where vectors hide or breed
   - tallying clean-up actions
   - vector search picture activity

2. **Diseases Spread by Vectors**
   - disease prevention definition
   - malaria, cholera, typhoid, diarrhoea, dysentery, sleeping sickness and trachoma
   - prevention actions: nets, handwashing, safe water, covered food and clean compounds
   - prevention poster activity

3. **HIV/AIDS: Kindness and Safety**
   - HIV definition
   - AIDS definition
   - care, stigma, sharp objects and health workers
   - no-stigma language
   - not sharing sharp objects
   - trusted adult / health worker guidance
   - kindness message activity

Updated file:

- `app/lib/p3-thematic-topics.ts`

Build result:

```txt
cd app && npm run build
✓ Compiled successfully
✓ Generating static pages (356/356)
```

Current manually deepened P3 v4 themes:

- Theme 1: Our Sub-county/Division
- Theme 5: Living Things: Animals
- Theme 6: Living Things: Plants
- Theme 10: Health

Recommended next manual deepening:

- Theme 2: Livelihood
- Theme 3: Environment
- Theme 4: Environment and Weather

---

## Manual deepening update — Themes 2, 3 and 4 complete

P3 Themes 2, 3 and 4 have now been manually deepened in v4.

### Theme 2 — Livelihood in Our Sub-county/Division

Route:

```txt
/p3/theme/p3-theme-2-livelihood
```

Hand-deepened lessons:

1. **Occupations and Their Importance**
   - occupation definition
   - money-generating work
   - subsistence work
   - service work
   - examples: farmer, trader, tailor, carpenter
   - grouping/counting money and market role-play

2. **Social Services**
   - social service definition
   - education, health, transport, communication, water and security services
   - why each service matters
   - service map activity

3. **Problems and Solutions in Social Services**
   - challenge and solution definitions
   - education, health, transport, water and security challenges
   - safe reporting to adults/leaders
   - problem-and-solution cards

### Theme 3 — Our Environment in Our Sub-county/Division

Route:

```txt
/p3/theme/p3-theme-3-environment
```

Hand-deepened lessons:

1. **Soil**
   - soil definition
   - sand, clay and loam
   - humus and texture
   - safe soil texture test

2. **Natural Changes in the Environment**
   - natural environmental change definition
   - floods, drought and weather changes
   - weather chart activity

3. **Human Activities and Environmental Change**
   - human activity definition
   - helpful and harmful activities
   - tree planting, dumping rubbish, farming, building
   - before-and-after environmental drawing

### Theme 4 — Environment and Weather in our Sub-county/Division

Route:

```txt
/p3/theme/p3-theme-4-environment-weather
```

Hand-deepened lessons:

1. **Air and the Sun**
   - air definition
   - air occupies space
   - air moves things
   - sun gives light and heat
   - shadow observation

2. **Water and Rain**
   - water cycle definition
   - evaporation, condensation, clouds and rainfall
   - water-cycle drawing

3. **Managing Water**
   - water management definition
   - water sources
   - water harvesting
   - protecting water sources
   - save-water poster

Updated file:

- `app/lib/p3-thematic-topics.ts`

Build result:

```txt
cd app && npm run build
✓ Compiled successfully
✓ Generating static pages (356/356)
```

Current manually deepened P3 v4 themes:

- Theme 1: Our Sub-county/Division
- Theme 2: Livelihood
- Theme 3: Our Environment
- Theme 4: Environment and Weather
- Theme 5: Living Things — Animals
- Theme 6: Living Things — Plants
- Theme 10: Health

Remaining manual deepening:

- Theme 7: Managing Resources
- Theme 8: Keeping Peace
- Theme 9: Culture and Gender
- Theme 11: Basic Technology
- Theme 12: Energy

---

## Manual deepening update — P3 thematic v4 migration complete

All 12 P3 thematic themes are now manually deepened in the v4 lower-primary lesson selector + mobile module stepper format.

Final completed batch:

### Theme 7 — Managing Resources

Route:

```txt
/p3/theme/p3-theme-7-managing-resources
```

Lessons:

1. Saving Resources
2. Spending Resources Wisely
3. Projects

### Theme 8 — Keeping Peace

Route:

```txt
/p3/theme/p3-theme-8-keeping-peace
```

Lessons:

1. Living in Peace with Others
2. Child Rights and Needs
3. Child Responsibility

### Theme 9 — Culture and Gender

Route:

```txt
/p3/theme/p3-theme-9-culture-gender
```

Lessons:

1. Customs in Our Community
2. Gender and Fairness
3. Promoting and Preserving Culture

### Theme 11 — Basic Technology

Route:

```txt
/p3/theme/p3-theme-11-basic-technology
```

Lessons:

1. What is Technology?
2. Making Things from Natural Materials
3. Making Things from Artificial Materials

### Theme 12 — Energy

Route:

```txt
/p3/theme/p3-theme-12-energy
```

Lessons:

1. Sources of Energy
2. Saving Energy
3. Dangers of Energy and Safety

Current P3 thematic status:

- 12/12 themes use lower-primary v4.
- 36/36 official sub-themes are represented as v4 lessons.
- Every thematic lesson uses the mobile module/stepper presentation.
- Every theme has a lesson selector.
- Every lesson keeps NCDC map coverage while using direct child-facing blocks.
- P3 RE remains separate and still needs its own future v4 restructure pass if required.

Build result:

```txt
cd app && npm run build
✓ Compiled successfully
✓ Generating static pages (356/356)
```

Recommended next work after founder review:

1. Review P3 thematic routes on a real phone.
2. Decide whether P3 RE should be migrated to v4 next or handled after P4/P5 Science.
3. Begin P4/P5 Science v4 migration using the P5 Poultry pilot as the model.

---

## P3 Religious Education v4 migration complete

P3 Religious Education has now been migrated from the older RE module format to the lower-primary v4 lesson selector + mobile module stepper format.

Routes:

```txt
/p3/re
/p3/re/[topic]
```

Coverage:

- 8 CRE topics
- 10 IRE topics
- 18 total RE topics
- Each RE topic now renders as a P3 lower-primary v4 lesson.

Student-facing v4 RE flow:

1. New words
2. Read and talk
3. Definition / main lesson idea
4. Ideas to know
5. Picture
6. Important source connection
7. Good actions from this lesson
8. Activity
9. Exercise

Important safeguards:

- P3 RE remains separate from thematic pages.
- RE still says beta/teacher review in route copy and docs.
- CRE/IRE content remains under the NCDC P3 RE map.
- Trusted source cross-checks remain documented in `docs/ops/p3-re-source-research-2026-07-12.md`.
- Teacher review is still required before premium-final status.

Updated files:

- `app/lib/content-blocks.ts`
- `app/lib/p3-re-topics.ts`

Build result:

```txt
cd app && npm run build
✓ Compiled successfully
✓ Generating static pages (356/356)
```

Current P3 v4 status:

- 12/12 thematic themes migrated and manually deepened in v4.
- 36/36 thematic sub-themes represented as v4 lessons.
- 18/18 P3 RE topics migrated to v4.
- P3 is structurally complete in the new mobile-first v4 format at AI-builder level.

Remaining:

- real-phone founder review,
- qualified CRE/IRE teacher review,
- corrections from review.

---

## Mobile responsiveness guard update — same cycle

Founder review found that the v4 pages still looked like they did not fit cleanly on a phone screen.

Additional global CSS guard added in `app/app/globals.css`:

- Prevent page-wide horizontal overflow on `html`, `body`, `main.app-main` and major lesson containers.
- Force v4 shells/cards/blocks to respect `max-width: 100%` and `min-width: 0`.
- Make buttons wrap instead of forcing wide layouts.
- Keep v4 lesson and module strips inside the viewport.
- Make v4 images scale to phone width by default.
- Keep small-screen padding consistent.

Build result after the responsiveness guard:

```txt
cd app && npm install && npm run build
✓ Compiled successfully
✓ Generating static pages (356/356)
```

Note: `npm install` was needed again because `node_modules` was missing in the sandbox.
