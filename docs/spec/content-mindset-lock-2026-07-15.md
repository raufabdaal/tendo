# Content Mindset Lock — Tendo Curriculum Intelligence

*Created: 2026-07-15*

## Do not edit this document unless Rauf explicitly says so

This document captures the current content mindset for Tendo. It exists so any future session can be brought back to the correct direction quickly.

If the project drifts, read this first.

---

## Core belief

Tendo succeeds or fails on content trust.

The app can have good UX, practice, dashboards, parent reports and subscriptions, but if the learning content is weak, incomplete, misaligned or unsourced, the product fails.

The content is not an add-on. It is the core function of the app.

---

## Current direction

We are no longer doing ad hoc content writing.

We are building a **source-traceable curriculum intelligence system** for the Ugandan primary curriculum.

Correct order:

```txt
Official source → evidence notes → module blueprint → learner content → audit → build → documentation
```

Wrong order:

```txt
AI writes content → app looks full → later we try to clean it
```

We are breaking the cycle of unfinished content by refusing to publish learner-facing material until it is source-aligned and full enough for the actual NCDC subtopic.

---

## What “full content” means

Full content does not mean long content.

Full content means:

> A learner can meet the official NCDC requirement for that subtopic after studying the module.

A full subtopic may need:

- definitions,
- types/classifications,
- examples,
- causes,
- effects,
- uses/importance,
- map practice,
- lists/orderings,
- activities,
- worked examples,
- assessment checks.

But not every subtopic needs every heading.

The content structure must come from what the subtopic requires, not from a fixed template applied blindly.

---

## Strict format: useful, but not the final master

The earlier strict bullet format was useful because it stopped vague AI paragraphs.

It forced the content to include concrete items such as:

```txt
Definition
Types
Examples
Uses
Importance
Advantages
Disadvantages
Exam traps
```

But the lesson learned is:

> Strict headings are a tool, not the goal.

If NCDC asks learners to name continents and arrange them by size, then “uses and advantages of continents” is probably filler unless a source justifies it.

If NCDC asks learners to locate Africa using latitude, longitude and compass directions, the lesson needs map skills, not only definitions.

So Tendo content must be:

```txt
source-aligned + complete + easy for P7 learners
```

Not merely:

```txt
strict-looking bullet points
```

---

## Definitions policy

Definitions do not need to match one textbook word-for-word.

Different approved books may define the same term differently.

A Tendo definition is acceptable when it is:

- correct,
- simple enough for the class level,
- faithful to the NCDC concept,
- contains the key points a teacher/examiner expects,
- not overloaded with higher-level detail.

Example:

```txt
Lines of latitude are imaginary lines drawn from west to east on a map. They help show how far north or south a place is from the Equator.
```

This is better for P7 than a long technical definition if it carries the required meaning.

---

## Source hierarchy

Use sources in this order:

1. NCDC syllabus/curriculum.
2. NCDC teacher guide/resource/specification.
3. Approved learner book or teacher guide.
4. UNEB/official assessment-aligned material.
5. Trusted references only for cross-checking and only when clearly marked.

Do not invent facts.

Do not keep unsupported “nice to have” material inside core learner content.

If a fact is useful but not supported yet, either:

- find a source,
- mark it as extension,
- or remove/quarantine it.

---

## Current pilot

Pilot area:

```txt
Class: P7
Subject: Social Studies
Topic 1: Location of Africa on the Map of the World
```

We restarted Topic 1 because the earlier strict-format version still had problems:

- awkward one-line spacing,
- unsupported extension content,
- filler headings,
- insufficient source traceability.

Current approach:

- rewrite one official subtopic at a time,
- keep only source-backed core content,
- use shorter P7 school-first content in the main lesson,
- keep larger reference material separately,
- audit after each step,
- build after meaningful app changes.

---

## Current Topic 1 policy

For countries/capitals/islands:

- Main learner flow should be shorter and P7-school-first.
- Full 54-country/capital reference can exist separately as reference/practice support.
- Do not overload the core lesson with all 54 countries unless the product design intentionally makes it a lookup/reference section.
- Special capital cases need review before learner publishing:
  - South Africa,
  - Equatorial Guinea,
  - Eswatini,
  - Côte d'Ivoire,
  - Benin,
  - Burundi.

---

## How to decide what stays in a module

Ask these questions:

1. Is this required by the official NCDC subtopic?
2. If not directly required, does it support an NCDC activity or assessment competence?
3. Is there a verified source for it?
4. Is it appropriate for the class level?
5. Does it help the learner answer likely school/PLE-style questions?
6. Is it simple enough to understand?
7. Is it better in the core lesson, or should it be an extension/reference item?

If the answer is weak, do not put it in the core learner module.

---

## How to explain the content direction

If challenged, say:

> We are not making content less strict. We are making it more correct. The strict bullet format helped us avoid vague AI writing, but now every lesson must follow the actual NCDC subtopic. Some subtopics need definitions and types. Others need map practice, lists, ordering and compass directions. We keep all the points NCDC expects, remove unsupported filler, and write explanations in a way a P7 learner can actually understand.

---

## Standing warning

Do not drift back into speed-first content generation.

Do not make pages look full by adding every possible heading.

Do not use unsupported geography facts just because they are true somewhere on the internet.

Do not rewrite the same topic repeatedly without first fixing the evidence/source layer.

The goal is not more content.

The goal is trustworthy, complete, NCDC-aligned learning content.

---

## 2026-07-15 update — screened rich content method

Rauf explicitly approved editing this document to capture the next content correction.

The vertical structural chain layout helped readability, but by itself it can become too dry and too compressed for children. Labels such as “Meaning”, “P7 focus”, “Map tools” and “Exam point” are clear, but they can feel mechanical if there is no friendly teacher explanation.

The new rule is:

> Use rich school-style content, but screen it before publishing.

We should not blindly paste partner/textbook/founder content. But we also should not write shallow checklist content from scratch when richer school-style material exists.

Correct process:

```txt
NCDC source
→ rich school-style source notes
→ screen every point
→ keep / rewrite / source-check / move extension / remove
→ child-friendly module
→ exam booster
→ practice questions
```

Screening labels:

- `KEEP_CORE` — directly required by NCDC.
- `KEEP_EXAM_BOOSTER` — useful for school exams and source-supported.
- `KEEP_PRACTICE` — good question/answer practice.
- `REWRITE_SIMPLER` — good idea, wording too advanced.
- `SOURCE_CHECK` — useful but needs verification.
- `MOVE_EXTENSION` — true/useful but not core.
- `REMOVE` — unsupported, misleading, too advanced, or not needed.

The learner module should now combine:

```txt
Friendly explanation
Structured answer chain
Examples
Exam booster
Practice / marking-guide style answer
```

This is the new balance:

```txt
Not shallow.
Not overloaded.
Not blindly pasted.
Not dry checklist labels only.
```

The goal remains:

```txt
NCDC-aligned + child-friendly + exam-useful
```

Reference spec:

```txt
docs/spec/screened-source-content-method-2026-07-15.md
```
