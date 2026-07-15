# Screened Source Content Method — 2026-07-15

## Purpose

This document updates the Tendo content workflow after founder review found that even the vertical structural chain pilot can feel too direct, too compressed and not child-friendly enough.

The new insight:

> We should not write learner content from scratch in a dry checklist style when useful school-style source content already exists. We should use rich source content, then screen it carefully.

This method sits between two bad extremes:

```txt
Bad extreme 1: blindly paste textbook/partner content.
Bad extreme 2: over-compress everything into dry labels and short fragments.
```

The correct approach:

```txt
Use rich school-style content → screen it → simplify it → align it → publish only what passes.
```

---

## Why this method is needed

The current content has improved in source alignment, but some learner modules still feel like:

```txt
Meaning:
P7 focus:
Map tools:
Exam point:
```

That is clear, but it can feel too mechanical for a child.

Primary learners often need a friendly classroom explanation first:

```txt
A map is a drawing of a place as seen from above. It helps us find where places are.
```

Then the content can become more structured:

```txt
Uses of a map:
- shows location
- shows direction
- shows distance
- shows features
```

So the new learner flow should combine:

- warm teacher-style explanation,
- structured answer points,
- exam booster facts,
- practice questions.

---

## New operating method

For each subtopic, use this process:

### Step 1 — Start from official NCDC

Identify:

- topic,
- subtopic,
- competences,
- keywords,
- activities,
- assessment requirements.

### Step 2 — Add rich school-style source content

Use content from:

- founder/partner notes,
- approved textbooks,
- trusted school notes,
- teacher guides,
- atlas/map references,
- UNEB-style questions,
- other credible aligned sources.

But do not publish it yet.

### Step 3 — Screen the content

Every point must be screened.

Use these labels:

```txt
KEEP_CORE
KEEP_EXAM_BOOSTER
KEEP_PRACTICE
REWRITE_SIMPLER
SOURCE_CHECK
MOVE_EXTENSION
REMOVE
```

### Step 4 — Convert into child-friendly lesson form

The learner module should not be only labels.

It should use:

```txt
Friendly explanation
Structured answer chain
Examples
Exam booster
Practice question
```

### Step 5 — Audit and build

Run:

```bash
node scripts/audit-curriculum-intelligence.js
cd app && npm run build
```

---

## Screening labels

### KEEP_CORE

Use when the point is directly required by NCDC.

Example:

```txt
The Atlantic Ocean is west of Africa.
```

### KEEP_EXAM_BOOSTER

Use when the point is not in the direct NCDC extract but is useful, age-appropriate and source-supported for school exams.

Example:

```txt
The Mozambique Channel separates Madagascar from mainland Africa.
```

### KEEP_PRACTICE

Use when the point is a good short-answer or structured practice item.

Example:

```txt
Q: Name the ocean west of Africa.
A: Atlantic Ocean.
```

### REWRITE_SIMPLER

Use when the idea is good but the wording is too advanced.

Example original:

```txt
Simplifies cross-border aviation control across African airspace.
```

Possible rewrite:

```txt
Pilots use map positions to fly safely from one place to another.
```

### SOURCE_CHECK

Use when the fact may be useful but needs verification.

Example:

```txt
Africa stretches from 37°N to 35°S and 17°W to 51°E.
```

### MOVE_EXTENSION

Use when the fact is true/useful but not needed in the core lesson.

Example:

```txt
Longitude time calculation: 15° = 1 hour.
```

This may become an extension if source-supported, but not necessarily core Topic 1.

### REMOVE

Use when the point is too advanced, unsupported, misleading, or not age-appropriate.

Example:

```txt
Minor degree errors cause massive navigation tracking mistakes.
```

This is not needed for a P7 core lesson.

---

## Learner module shape after screening

A good module should look like this:

```txt
Short friendly explanation:
A map is a drawing of a place as seen from above. It helps us know where places are found.

Key answer points:
- A map shows location.
- A map shows direction.
- A map shows distance.
- A map shows physical features.

Example:
A map of Africa can show the Equator, countries, oceans and regions.

Exam booster:
The Equator crosses Africa and divides the earth into Northern and Southern Hemispheres.

Practice:
Q: What is a map?
A: A map is a drawing of a place as seen from above.
```

---

## Difference from the previous vertical chain pilot

The vertical chain pilot was too compressed when used alone.

Previous risk:

```txt
Meaning:
P7 focus:
Map tools:
Exam point:
```

Improved method:

```txt
Teacher explanation first.
Then answer chain.
Then example.
Then exam booster.
Then practice.
```

So the layout remains scannable, but the child gets enough explanation to understand.

---

## How to use partner/founder content

When Rauf provides partner/founder content:

1. Do not paste directly.
2. Break it into claims/points.
3. Mark every point with a screening label.
4. Keep what is useful.
5. Rewrite advanced wording into P7-friendly language.
6. Move uncertain points into source-check or extension.
7. Remove unsupported or overdone points.
8. Build a child-friendly module from the screened points.

---

## Example screening from partner content

### Keep as core

```txt
Location is the place where a country or continent is found.
```

Can become:

```txt
Location means where a place is found.
```

### Keep as core

```txt
Absolute location is finding a place using lines of latitude and longitude.
```

### Keep as core

```txt
Relative location is finding a place using neighbours or water bodies nearby.
```

### Keep as exam booster

```txt
Africa is crossed by the Equator, Tropic of Cancer and Tropic of Capricorn.
```

### Keep as exam booster / source-check

```txt
The Mozambique Channel separates Madagascar from mainland Africa.
```

### Move to extension or source-check

```txt
Time calculation using 15° = 1 hour and 1° = 4 minutes.
```

### Rewrite simpler

```txt
Assists pilots and sea captains in safe navigation.
```

Could become:

```txt
Pilots and sailors use latitude and longitude to find places safely.
```

### Remove or extension only

```txt
Simplifies cross-border aviation control across African airspace.
```

Too advanced for core P7 learner content.

---

## Final standard

Tendo learner content should be:

```txt
source-backed
child-friendly
exam-useful
not shallow
not overloaded
not blindly pasted
```

The best content is not the shortest content.

The best content is content that a child can understand, revise and use to answer questions correctly.
