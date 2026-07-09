# P4 Live Beta Completion Audit — 2026-07-09

## Purpose

This audit records the completion of the Primary Four live-beta sweep under Tendo's non-negotiable rule:

> We are building the curriculum in a better app form — not inventing our own syllabus.

P4 is now live beta across all five app subjects. This means the content is visible for testing/review, not premium-final.

---

## P4 live beta status

Live beta subjects:

1. Mathematics
2. English
3. Integrated Science
4. Social Studies
5. Religious Education

Build verification:

- Command: `cd app && npm run build`
- Result: passed
- Static pages: 324/324

---

## P4 source status by subject

### Mathematics

- Map: `content/curriculum/p4-math.json`
- Content: `app/lib/p4-math-topics.ts`
- Routes:
  - `/math/p4`
  - `/math/p4/[topic]`
- Source: official NCDC Primary Four Mathematics Syllabus, 2010.
- Verification: corrected and verified against official NCDC PDF.

### English

- Map: `content/curriculum/p4-english.json`
- Content: `app/lib/p4-english-topics.ts`
- Routes:
  - `/english/p4`
  - `/english/p4/[topic]`
- Source: official NCDC Primary Four English Syllabus, 2010.
- Verification: researched from NCDC PDF.

### Integrated Science

- Map: `content/curriculum/p4-science.json`
- Content: `app/lib/p4-science-topics.ts`
- Routes:
  - `/science/p4`
  - `/science/p4/[topic]`
- Source: NCDC Primary Four Integrated Science Syllabus, April 2009.
- Verification: researched from NCDC/UNESCO-hosted PDF.

### Social Studies

- Map: `content/curriculum/p4-social-studies.json`
- Content: `app/lib/p4-social-topics.ts`
- Routes:
  - `/social-studies/p4`
  - `/social-studies/p4/[topic]`
- Source: official NCDC Primary Four Social Studies Syllabus, 2010.
- Verification: researched from NCDC PDF.

### Religious Education

- Map: `content/curriculum/p4-re.json`
- Content: `app/lib/p4-re-topics.ts`
- Routes:
  - `/re/p4`
  - `/re/p4/[topic]`
- Source: NCDC/MoES Primary 4 Abridged Curriculum for Uganda.
- Verification: mapped from NCDC/MoES abridged source, **not yet confirmed against full standard P4 CRE/IRE syllabus**.
- Required warning: P4 RE must stay beta until full standard syllabus confirmation or qualified RE teacher review.

---

## P4 top-level topic alignment result

Top-level app topic IDs match curriculum map topic IDs for all live P4 subjects:

- P4 Mathematics: pass — 12/12 mapped topics live.
- P4 English: pass — 8/8 mapped topics live.
- P4 Integrated Science: pass — 12/12 mapped topics live.
- P4 Social Studies: pass — 6/6 mapped topics live.
- P4 Religious Education: pass — 25/25 mapped topics live from abridged map.

This confirms route/content coverage at top-level topic ID level. It does **not** prove every explanation, grammar example, health statement, faith wording or quiz answer is premium-final.

---

## Review checklist before P4 premium-final status

### Mathematics

- Check arithmetic in worked examples and quizzes.
- Check P4 readability and wording.
- Check that 2-D/3-D geometry, measurement and algebra remain age-appropriate.

### English

- Check grammar accuracy.
- Check that examples match P4 language transition level.
- Check spelling, punctuation and model writing tasks.

### Integrated Science

- Check scientific accuracy.
- Check health-sensitive wording, especially diseases, poisoning, first aid and body topics.
- Ensure first-aid guidance always encourages adult/health-worker help where needed.

### Social Studies

- Check local-district examples and neutrality.
- Check civic wording around leaders, rights and responsibilities.
- Ensure district content stays flexible for learners from different districts.

### Religious Education

- Check CRE wording with a qualified CRE reviewer/teacher.
- Check IRE wording with a qualified IRE reviewer/teacher.
- Confirm against full standard P4 CRE/IRE syllabus when found.
- Keep source limitation visible in documentation until confirmed.

---

## Files added for P4 live beta

Content libraries:

- `app/lib/p4-math-topics.ts`
- `app/lib/p4-english-topics.ts`
- `app/lib/p4-science-topics.ts`
- `app/lib/p4-social-topics.ts`
- `app/lib/p4-re-topics.ts`

Routes:

- `app/app/p4-home/page.tsx`
- `app/app/math/p4/page.tsx`
- `app/app/math/p4/[topic]/page.tsx`
- `app/app/english/p4/page.tsx`
- `app/app/english/p4/[topic]/page.tsx`
- `app/app/science/p4/page.tsx`
- `app/app/science/p4/[topic]/page.tsx`
- `app/app/social-studies/p4/page.tsx`
- `app/app/social-studies/p4/[topic]/page.tsx`
- `app/app/re/p4/page.tsx`
- `app/app/re/p4/[topic]/page.tsx`

Curriculum maps:

- `content/curriculum/p4-english.json`
- `content/curriculum/p4-math.json`
- `content/curriculum/p4-science.json`
- `content/curriculum/p4-social-studies.json`
- `content/curriculum/p4-re.json`

Supporting source note:

- `docs/ncdc-extracts/p4-re-abridged-topic-extract-2026-07-09.md`

---

## Milestone decision

P4 can be considered **live beta complete**.

It should not be called premium-final until the review checklist above is completed.
