# V4 P4/P5 Religious Education Migration — 2026-07-12

## Purpose

Record the Religious Education migration batch in the NCDC-native v4 content architecture.

Target:

- P4 Religious Education
- P5 Religious Education

Important review note:

- P4 RE is still based on the NCDC/MoES Primary 4 Abridged Curriculum and needs confirmation against the full standard P4 CRE/IRE syllabus before premium-final status.
- P5 RE is based on researched P5 Set One RE structure and still needs official-copy and CRE/IRE teacher review before premium-final status.

---

## Structure implemented

New shared helper:

- `app/lib/v4-re-helpers.ts`

Purpose:

- Convert existing CRE/IRE topic/subtopic/module content into `upper-primary-v4` lessons.
- Preserve CRE/IRE separation.
- Preserve respectful faith wording.
- Generate one v4 lesson per existing RE subtopic.
- Add daily-life application and teacher-review reminders.

The helper adds:

```ts
contentFormat: "upper-primary-v4"
upperPrimaryLessons: UpperPrimaryLesson[]
```

for every RE topic passed through it.

---

## P4 Religious Education migration

Updated file:

- `app/lib/p4-re-topics.ts`

Implementation:

- Replaced direct export array with internal `P4_RE_TOPIC_DATA`.
- Added `P4_RE_TERMS` from `content/curriculum/p4-re.json`.
- Export now wraps data with:

```ts
addUpperPrimaryReV4(P4_RE_TOPIC_DATA, "P4", P4_RE_TERMS)
```

Coverage:

- 25 P4 RE topics now render through upper-primary v4.
- CRE and IRE remain separate in the P4 RE landing page.

---

## P5 Religious Education migration

Updated file:

- `app/lib/p5-re-topics.ts`

Implementation:

- Added `P5_RE_TERMS` from `content/curriculum/p5-re.json`.
- `P5_RE_TOPICS` now wraps generated topics with:

```ts
addUpperPrimaryReV4([...CRE_SEEDS, ...IRE_SEEDS].map(makeTopic), "P5", P5_RE_TERMS)
```

- `P5_CRE_TOPICS` and `P5_IRE_TOPICS` now filter from the migrated `P5_RE_TOPICS`, so landing pages use the v4 topics.

Coverage:

- 20 P5 RE topics now render through upper-primary v4.
- CRE and IRE remain separate in the P5 RE landing page.

---

## Student-facing result

P4/P5 Religious Education topic pages now use the upper-primary v4 renderer:

```txt
Lesson selector
→ one lesson/module at a time
→ CRE/IRE key words
→ definition / key teaching
→ teachings / key ideas
→ daily-life examples
→ image where available
→ worked example where available
→ respectful application
→ evaluation
```

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

## Remaining work

This is a **structural migration**, not final faith-content verification.

Still required:

1. Qualified CRE teacher review.
2. Qualified IRE teacher review.
3. P4 full standard RE syllabus confirmation.
4. Review of Arabic/Qur'an/Hadith terminology and transliteration.
5. Review of respectful denominational wording.
6. Real-phone review of RE images and module stepper.

Recommended next RE work:

- If continuing RE immediately: hand-deepen high-risk P4/P5 CRE/IRE topics after teacher/source review.
- If continuing broad v4 migration: move to P4/P5 Social Studies manual deepening or P6/P7 structural migration.
