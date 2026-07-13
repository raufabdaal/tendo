# V4 P7 Heavy Manual Deepening — Wave 2 + UI Simplification — 2026-07-13

## Purpose

Continue the manual heavy-deepening phase while responding to founder UI feedback that the v4 Read experience had become visually overwhelming.

Founder feedback to address:

- Too many big buttons.
- Too many boxes and borders.
- Duplicate quiz CTAs: “Take the quiz” appearing in more than one place.
- Too many numbers, percentages, Previous/Next labels and progress elements competing for attention.
- Read content should feel simple, clean and mobile-first.

---

## UI simplification completed

Updated:

- `app/components/TopicTabs.tsx`
- `app/components/V4LessonViews.tsx`
- `app/app/globals.css`

### Changes in `TopicTabs`

- Simplified the top study tabs from numbered `1 Watch / 2 Read / 3 Try quiz` to a clean two-option control:

```txt
Watch | Read
```

- Removed the top `Try quiz` tab/link.
- Removed the extra `read-next-card` quiz CTA from the bottom of the Read panel.
- V4 Read panels now use `note-v4-readable` so nested card styling can be reduced.

Result:

- The quiz section remains on the page, but the Read content no longer repeats large “Take the quiz” buttons.

### Changes in `V4LessonViews`

- Replaced the large horizontal lesson chooser cards with a compact dropdown selector.
- Replaced the large module strip/card selector with small progress dots.
- Replaced “Module X of Y” + percentage emphasis with a simpler compact `X/Y` progress row.
- Removed the visible block/module number badge inside the content card.
- Replaced large Previous/Next module buttons with smaller text/button navigation:

```txt
← Back        Next →
```

- Final module now shows a small `Quiz below ↓` text link instead of another large quiz button.

### CSS clarity pass

Added a final CSS section:

```txt
V4 clarity pass — reduce visual noise in read lessons (2026-07-13)
```

It reduces:

- heavy borders,
- nested card shadows,
- dark progress block dominance,
- large module buttons,
- repeated number circles,
- button width on mobile.

---

## Wave 2 heavy deepening implementation

Added:

- `app/lib/p7-v4-heavy-lessons-wave2.ts`

Updated:

- `app/lib/p7-v4-heavy-lessons.ts`

The Wave 2 file exports:

- `P7_MATH_HEAVY_V4_WAVE2`
- `P7_SCIENCE_HEAVY_V4_WAVE2`
- `P7_ENGLISH_HEAVY_V4_WAVE2`
- `P7_SOCIAL_HEAVY_V4_WAVE2`

The main P7 heavy override layer now merges Wave 1 and Wave 2:

```ts
{ ...P7_MATH_HEAVY_V4, ...P7_MATH_HEAVY_V4_WAVE2 }
```

and equivalent merges for Science, English and Social Studies.

---

## P7 Wave 2 topics deepened

### P7 Mathematics — 4 topics / 7 hand-built v4 lessons

1. **Operations on Whole Numbers**
   - Operations, Properties, Factors and Multiples
   - BODMAS, Indices and Standard Form

2. **Construction and Geometry**
   - Lines, Angles and Geometrical Construction
   - Polygons, Bearings and Scale Drawing

3. **Length, Mass, Capacity and Money**
   - Perimeter, Area and Volume
   - Capacity, Mass and Money Applications

4. **Time**
   - Clocks, Duration and Timetables

### P7 Integrated Science — 4 topics / 8 hand-built v4 lessons

1. **Excretory System**
   - Excretory Organs and Waste Products
   - Kidney Function and Care of Excretory Organs

2. **Simple Machines and Friction**
   - Simple Machines, Levers and Mechanical Advantage
   - Friction: Advantages, Disadvantages and Reduction

3. **Energy Resources in the Environment**
   - Renewable and Non-renewable Energy Resources
   - Energy Conservation and Environmental Care

4. **Interdependence of Things in the Environment**
   - Food Chains, Food Webs and Interdependence
   - Environmental Balance and Conservation

### P7 English — 5 topics / 5 hand-built v4 lessons

1. **School Holidays**
   - Holiday Plans, Activities and Composition

2. **Electronic Media**
   - Radio, Television, Phones and Responsible Communication

3. **Rights, Responsibilities and Freedom**
   - Rights, Responsibilities and Freedom in Speech and Writing

4. **Environmental Protection**
   - Environmental Vocabulary, Advice and Persuasive Writing

5. **Ceremonies**
   - Ceremonies, Invitations, Speeches and Reports

### P7 Social Studies — 6 topics / 6 hand-built v4 lessons

1. **Climate of Africa**
   - Climate Regions, Factors and Effects

2. **Vegetation of Africa**
   - Vegetation Zones, Uses and Conservation

3. **People of Africa, Ethnic Groups and Settlement Patterns**
   - Ethnic Groups, Migration and Settlement

4. **Post-Independence Africa**
   - Achievements, Challenges and Pan-African Cooperation

5. **Economic Developments in Africa**
   - Agriculture, Mining, Industry, Trade and Transport

6. **Major World Organisations**
   - World Organisations, Roles and Challenges

---

## Wave 2 coverage

- **19 P7 topics** manually deepened.
- **26 hand-built v4 lessons** added.

## Combined P7 heavy-deepening coverage so far

Wave 1 + Wave 2:

- **33 P7 topics** manually deepened.
- **54 hand-built v4 lessons** added.

Subject coverage after Wave 2:

- P7 Integrated Science: **8/8 topics** hand-deepened in heavy v4.
- P7 English: **7/7 topics** hand-deepened in heavy v4.
- P7 Social Studies: **10/10 topics** hand-deepened in heavy v4.
- P7 Mathematics: **8/11 topics** hand-deepened in heavy v4.

Remaining P7 Mathematics heavy-deepening topics:

- Whole Numbers
- Patterns and Sequences
- Integers

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

## Next steps

1. Real-phone review of the simplified v4 Read UI.
2. Finish remaining P7 Mathematics heavy topics:
   - Whole Numbers
   - Patterns and Sequences
   - Integers
3. Then move to P6 bridge-heavy deepening for PLE preparation.
4. Keep P7 Religious Education structurally migrated but pending CRE/IRE teacher review before premium-final status.
