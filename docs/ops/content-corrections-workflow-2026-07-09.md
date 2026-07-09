# Content Corrections and Restructure Workflow — 2026-07-09

## Why this exists

As Tendo becomes a premium paid product, content mistakes must be easy to fix without breaking the app. We need a clean way to restructure content, correct errors and keep stable routes.

---

## Principles

1. **Stable topic IDs.** Do not rename topic IDs casually; routes and progress depend on them.
2. **Fix content at source.** Correct the TypeScript content libraries, not only UI copy.
3. **Keep a correction trail.** Major corrections should be logged in docs/changelog.
4. **Prefer small safe edits.** Fix one topic or subject at a time, then build.
5. **Premium standard beats speed once content is user-facing.** Fast, but not sloppy.

---

## Current content locations

P7:

- `app/lib/topics.ts` — Mathematics
- `app/lib/english-topics.ts`
- `app/lib/science-topics.ts`
- `app/lib/social-topics.ts`
- `app/lib/re-topics.ts`

P6:

- `app/lib/p6-math-topics.ts`
- `app/lib/p6-english-topics.ts`
- `app/lib/p6-science-topics.ts`
- `app/lib/p6-social-topics.ts`
- `app/lib/p6-re-topics.ts`

Practice banks:

- `app/lib/question-bank.ts`

Curriculum maps:

- `content/curriculum/*.json`

---

## Correction process

When a mistake is found:

1. Identify subject, class, topic ID and module/question.
2. Check if the error is in:
   - lesson text
   - worked example
   - quiz answer
   - practice bank answer
   - diagram/visual
   - UI explanation
3. Fix source file.
4. If answer choices are affected, verify `correct` index.
5. Run:

```bash
cd app
npm run build
```

6. Update `CHANGELOG.md` for meaningful corrections.
7. If it changes product direction or content architecture, update `DECISIONS.md`.

---

## Restructuring process

When a topic needs deeper restructuring:

1. Keep the same topic `id` unless absolutely impossible.
2. Add/adjust `subtopics` and `modules` inside the same topic object.
3. Keep route paths stable.
4. If a topic must split into multiple topics, create a redirect/compatibility plan first.
5. Update related practice bank topic IDs if needed.
6. Re-run build.

---

## Future improvement

Create a script that outputs a content health report for every class/subject:

- topic count
- module count
- quiz count
- images/videos count
- missing worked examples
- missing practice bank
- thin topics

This should become part of premium content QA before launch.

---

## Rule

> If a parent is paying UGX 50,000/month, the content cannot feel like a draft.
