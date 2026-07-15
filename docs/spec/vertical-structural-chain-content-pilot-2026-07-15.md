# Vertical Structural Chain Content Pilot — 2026-07-15

## Purpose

This document records the new learner-facing presentation decision for Tendo content.

The curriculum intelligence system remains the source of truth for alignment. But the learner screen must be easier for a primary child to read, remember and use in exam-style answers.

The pilot topic is:

```txt
Class: P7
Subject: Social Studies
Topic: Location of Africa on the Map of the World
App ID: location-of-africa
```

---

## Core decision

Use a **vertical structural chain layout** for learner-facing modules.

This means the learner sees short labelled answer blocks instead of long paragraphs.

Example:

```txt
Meaning:
Africa is one of the seven continents of the world.

Map tools:
- world map or globe
- compass directions
- latitudes and longitudes

Example:
Europe is north of Africa.

Exam point:
Use directions and nearby features.
```

In app data, we express this as short `learnIt` lines such as:

```ts
"<strong class=\"kw\">Meaning:</strong> Africa is one of the seven continents of the world.",
"<strong class=\"kw\">Map tools:</strong> world map/globe, compass directions, latitudes and longitudes.",
"<strong class=\"kw\">Exam point:</strong> Use directions and nearby features."
```

---

## Why this is better for P7 learners

The vertical chain layout:

- avoids long hidden paragraphs,
- highlights exam keywords quickly,
- supports short-term memory,
- matches how teachers often mark short-answer work,
- reduces reading fatigue on phones,
- makes revision faster,
- helps learners see the answer structure.

---

## What this is not

This is **not** a return to blind strict headings.

The old mistake was applying every heading to every subtopic:

```txt
Definition
Types
Examples
Uses
Importance
Advantages
Disadvantages
```

That created filler.

The new rule is:

> Use vertical labelled chains, but only include the labels the NCDC subtopic actually needs.

---

## Relationship to curriculum intelligence

The backend/source process remains:

```txt
Official source → evidence notes → module blueprint → learner content → audit → build → documentation
```

The learner-facing format becomes:

```txt
Label → short answer point
Label → short answer point
Label → short answer point
Inline check
```

So the source system controls **what** we teach.

The vertical chain controls **how** the child sees it.

---

## Definition policy

Definitions do not need to match one textbook word-for-word.

A definition is acceptable when it is:

- correct,
- simple enough for P7,
- faithful to the NCDC concept,
- includes the expected key points,
- not overloaded with advanced detail.

Example:

```txt
Latitude:
Imaginary lines running west to east; they show north or south of the Equator.
```

This is learner-friendly and markable.

---

## Good module shape

A strong P7 module should normally have:

```txt
Meaning / key term
Key points
Examples
Map skill / activity / exam point
Inline check
```

Depending on the subtopic, labels may include:

- Meaning
- Types
- Examples
- Causes
- Reasons
- Problems
- Effects
- Solutions
- Importance
- Map task
- Exam point
- Marking guide
- Answer pattern

Only use labels that fit the NCDC requirement.

---

## Topic 1 pilot status

The full learner flow for Topic 1 has been converted into vertical structural chain style:

1. `location-position-africa`
2. `world-continents-sizes`
3. `water-bodies-africa`
4. `regions-africa`
5. `countries-capitals-africa`
6. `premium-map-answering`

The content remains source-backed and school-first.

---

## Standing rule

Do not sacrifice source alignment for neat layout.

Do not sacrifice child readability for source-document fullness.

The correct target is both:

```txt
NCDC-aligned + child-readable + exam-usable
```

---

## Update — vertical chains must not become dry labels only

The vertical chain format is useful, but it must not become too mechanical.

Avoid modules that only feel like:

```txt
Meaning:
P7 focus:
Map tools:
Exam point:
```

Better:

```txt
Short teacher explanation:
A map is a drawing of a place as seen from above.

Then vertical chain:
- shows location
- shows direction
- shows distance
- shows features
```

The chain should support understanding, not replace teaching.

Use rich source content, screen it, then convert it into child-friendly structured modules.
