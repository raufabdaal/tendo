# P3 Thematic App Structure — 2026-07-09

## Purpose

This document locks the learner-facing structure for P3 before any P3 routes or content are built.

P3 is not subject-based like P4–P7. P3 is lower-primary **Thematic Curriculum**.

---

## Decision

Tendo should build P3 as a **thematic-first learner experience**.

Recommended routes:

```txt
/p3-home
/p3/theme/[theme]
```

Do not start with:

```txt
/math/p3
/english/p3
/science/p3
/social-studies/p3
/re/p3
```

Reason: that would make P3 look like an upper-primary subject syllabus, which is not how NCDC structures P3.

---

## Source basis

Official source:

- NCDC Primary School Curriculum P.3, May 2008
- URL: `https://ncdc.go.ug/wp-content/uploads/2024/02/P3_Thematic_Curr_21_November_2007_-_Edited.pdf`

Maps:

- `content/curriculum/p3-thematic.json`
- `content/curriculum/p3-re.json`

---

## Proposed learner model

### `/p3-home`

Shows:

- “Primary Three thematic learning”
- current theme cards
- clear note: “P3 is organised by themes, not separate subjects”
- simple path to start Theme 1

### `/p3/theme/[theme]`

Each theme page should show:

1. Theme title and expected learning outcome.
2. Three sub-theme cards.
3. Inside each sub-theme, learning blocks for:
   - Numeracy / Mathematics competences
   - Literacy competences
   - English non-medium competences
   - Environment / Social / Science content from the theme
   - Creative activity where useful
   - Life skills and values
4. Short quizzes/checks that are age-appropriate and language-light.
5. Local/familiar examples.

---

## Religious Education handling

P3 Religious Education is outside the thematic matrix but aligned with the 12-theme timetable.

Recommended initial approach:

- Show RE as a separate section on `/p3-home`, labelled clearly as Religious Education.
- Use `content/curriculum/p3-re.json`.
- Build only after RE map is reviewed because extraction from the official table is less clean.

Possible route later:

```txt
/p3/re/[topic]
```

But do not mix RE into thematic pages unless the link to the official theme timetable is clear.

---

## Content architecture recommendation

Create one P3 content library first:

```txt
app/lib/p3-thematic-topics.ts
```

Data shape can reuse `Topic`, but each P3 “topic” should represent a theme, not a subject topic.

Possible IDs:

```txt
p3-theme-1-subcounty-division
p3-theme-2-livelihood
...
p3-theme-12-energy
```

Each theme should have 3 subtopics matching the NCDC sub-themes.

---

## Do not do yet

Do not build:

- `/math/p3`
- `/english/p3`
- `/science/p3`
- `/social-studies/p3`
- `/re/p3`

unless a bridge layer is explicitly designed and documented.

Do not expose P3 as premium-final until:

1. theme content is complete,
2. RE extraction is reviewed,
3. human/teacher review is done,
4. build passes.

---

## Next implementation step

Build P3 Theme 1 as the first thematic beta slice:

- Route: `/p3-home`
- Route: `/p3/theme/[theme]`
- Content: Theme 1, “Our Sub-county/Division”
- Sub-themes:
  1. Name and Location of our Sub-county/Division
  2. Physical Features of our Sub-county/Division
  3. People in our Sub-county/Division

Only after Theme 1 is reviewed should the remaining themes be generated in batches.

---

## Implementation update — 2026-07-12

The P3 thematic-first structure has now been extended from the first Theme 1 slice to all official P3 thematic themes.

Current live-beta route model remains:

```txt
/p3-home
/p3/theme/[theme]
```

Current generated P3 theme route count:

- 12 theme routes
- 36 official sub-themes
- 3 learner modules per sub-theme
- 108 learner-facing P3 thematic modules

Build verification:

```txt
cd app && npm run build
✓ Compiled successfully
✓ Generating static pages (337/337)
```

Important guardrail remains unchanged:

- No `/math/p3`, `/english/p3`, `/science/p3`, `/social-studies/p3`, or `/re/p3` subject-style routes have been added.
- P3 RE still needs separate review before learner-facing build.

Detailed completion note:

- `docs/ops/p3-thematic-beta-completion-2026-07-12.md`

---

## RE implementation update — 2026-07-12

After founder approval to use trusted CRE/IRE sources under the official NCDC map, P3 Religious Education beta was built as a **separate RE section**, not as a subject-style `/re/p3` route and not mixed into thematic pages.

Current RE route model:

```txt
/p3/re
/p3/re/[topic]
```

Coverage:

- 8 CRE topics
- 10 IRE topics
- 18 total P3 RE topics
- 54 RE modules
- 18 RE visuals

Source control:

- Curriculum source of truth remains `content/curriculum/p3-re.json`.
- Supporting details were cross-checked using trusted Bible, Qur'an, Hadith and Arabic-reading sources.
- Detailed source register: `docs/ops/p3-re-source-research-2026-07-12.md`.

Build verification after thematic polish + RE:

```txt
cd app && npm run build
✓ Compiled successfully
✓ Generating static pages (356/356)
```

Guardrail remains:

- Do not add `/re/p3`, `/math/p3`, `/english/p3`, `/science/p3`, or `/social-studies/p3` unless a documented bridge design is approved.
