# P7 Social Studies Strict Formatting Pass — 2026-07-14

## Purpose

Record the new strict learner-facing formatting direction for Primary 7 Social Studies content.

The founder clarified that the agent's job is not to invent topic content. The founder provides exact content; the agent restructures it into clean digestible app modules with a quiz/check for each module.

---

## Formatting rule now locked

Each strict-content module should follow this structure where relevant:

```txt
### Topic/Sub-topic Name

Term Being Defined:

Is ...

Types:

* short bullet

Type Name:

Is ...

Examples:

* short bullet

Uses:

* short bullet

Importances:

* short bullet

Advantages:

* short bullet

Disadvantages:

* short bullet
```

Implementation notes:

- Definitions must begin with `Is...` or `Are...`.
- High-utility UNEB keywords should be bolded in the learner view.
- Bullets should be short, punchy, single-sentence fragments.
- No conversational filler, curriculum meta-copy or summarised AI explanation should be added.
- The agent may reflow raw content into modules and checks, but should not add unsourced syllabus facts.

---

## App changes made in this pass

Updated:

- `app/lib/social-topics.ts`
- `app/components/SubtopicViewer.tsx`
- `app/app/globals.css`

### Content restructured

In `app/lib/social-topics.ts`, the first P7 SST topic remains:

- Topic: `location-of-africa`
- Subtopic: `location-position-africa`
- Title: `Location and position of Africa using lines of latitudes and longitudes`

The subtopic was rewritten into strict modules:

1. Meaning and Types of Location
2. Lines of Latitude
3. Major Lines of Latitude through Africa
4. Lines of Longitude
5. Longitude and Local Time
6. Absolute Position of Africa
7. Relative Position of Africa
8. Africa's Special Map Position
9. UNEB Exam Traps on Location

Each module now has a direct learner-facing structure and an inline `tryThis` check. The longitude time module also includes a worked example.

### Rendering support added

`SubtopicViewer.tsx` now renders strict content lines more cleanly:

- `###` lines display as compact in-module headings.
- `*` bullet lines display as proper strict bullet rows.
- Existing HTML keyword highlighting remains supported.

`globals.css` now includes a small strict-content styling block so the spacing and bullets are readable on mobile.

---

## Build verification

Command:

```bash
cd app && npm run build
```

Result:

```txt
✓ Compiled successfully
✓ Generating static pages (418/418)
```

---

## Next step

Founder should review the first subtopic formatting in the app.

If approved, continue the same process through the remaining subtopics in Topic 1:

1. World continents and their sizes
2. Water bodies that surround Africa
3. Regions that make up Africa
4. Countries in each region and their capital cities
5. Premium map answering

The founder will provide exact content for subsequent subtopics; the agent should only dissect and format it into digestible modules with checks.
