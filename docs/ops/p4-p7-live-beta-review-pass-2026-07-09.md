# P4–P7 Live Beta Review Pass — 2026-07-09

## Purpose

This document records the routine review pass after completing P4 live beta. The goal is to pause before moving to the next class and check what remains across the live classes.

Rule being enforced:

> We are building the curriculum in a better app form — not inventing our own syllabus.

This pass is a product-safety checkpoint, not a claim that all content is premium-final.

---

## Scope

Classes checked:

- P4
- P5
- P6
- P7

Subjects checked per class:

- Mathematics
- English
- Integrated Science
- Social Studies
- Religious Education

---

## Coverage audit result

A script compared curriculum map topic IDs against app topic IDs for P4, P5, P6 and P7.

Result: **PASS**

### P4

- Mathematics: 12/12 mapped topics live
- English: 8/8 mapped topics live
- Integrated Science: 12/12 mapped topics live
- Social Studies: 6/6 mapped topics live
- Religious Education: 25/25 mapped topics live from abridged map

### P5

- Mathematics: 12/12 mapped topics live
- English: 8/8 mapped topics live
- Integrated Science: 9/9 mapped topics live
- Social Studies: 12/12 mapped topics live
- Religious Education: 20/20 mapped topics live

### P6

- Mathematics: 6/6 mapped topics live
- English: 5/5 mapped topics live
- Integrated Science: 5/5 mapped topics live
- Social Studies: 6/6 mapped topics live
- Religious Education: 6/6 mapped topics live

### P7

- Mathematics: 11/11 mapped topics live
- English: 7/7 mapped topics live
- Integrated Science: 8/8 mapped topics live
- Social Studies: 10/10 mapped topics live
- Religious Education: 14/14 mapped topics live

Important: this confirms top-level topic coverage only. It does not prove every explanation, example, quiz option or answer is premium-final.

---

## Build verification

First build attempt failed because `node_modules` is not persisted between sandbox turns:

```txt
sh: 1: next: not found
```

Resolution:

```bash
cd app && npm install && npm run build
```

Final result:

```txt
✓ Compiled successfully
✓ Generating static pages (324/324)
```

Build status: **PASS**

---

## Immediate correction made during this pass

Corrected stale wording in:

- `app/lib/p5-math-topics.ts`

Changed comment from “draft content layer” to “live beta content layer” because P5 Mathematics is already live beta.

---


## Quality fix added after initial audit

After the first review-pass audit, P4 content had an obvious practice-quality issue: quiz and try-this correct answers were all in option A because the first P4 content generation used map-derived answer templates.

Correction made:

- Balanced correct-answer positions across A/B/C/D in all P4 topic files:
  - `app/lib/p4-math-topics.ts`
  - `app/lib/p4-english-topics.ts`
  - `app/lib/p4-science-topics.ts`
  - `app/lib/p4-social-topics.ts`
  - `app/lib/p4-re-topics.ts`

Post-fix distribution:

- P4 Mathematics: 24 answers per option index across A/B/C/D
- P4 English: 16 answers per option index across A/B/C/D
- P4 Integrated Science: 21 answers per option index across A/B/C/D
- P4 Social Studies: 12 answers per option index across A/B/C/D
- P4 Religious Education: 50 answers per option index across A/B/C/D

Build after fix:

```txt
✓ Compiled successfully
✓ Generating static pages (324/324)
```

---


## P4 quality pass progress

### P4 Mathematics quick arithmetic pass

Checked P4 Mathematics note worked examples, module worked examples and quiz correct answers for arithmetic/readability. No arithmetic corrections were needed in this pass. Human/founder/teacher review remains open before premium-final status.




### P4 Religious Education respectful/source-limitation pass

Initial P4 RE beta content was source-limited and respectful, but too template-like across topics. Improved it by:

- adding topic-specific daily-life applications across CRE and IRE topics,
- replacing repeated generic worked-example answers with topic-specific actions,
- replacing repeated early quiz prompts with topic-specific value/practice prompts,
- improving respectful display wording for Prophet Muhammad (PBUH),
- clarifying the Night Journey display as Isra/Israi and Miraj while preserving source traceability,
- keeping the NCDC/MoES abridged-source beta limitation visible in topic intros.

P4 RE remains beta until checked against the full standard P4 CRE/IRE syllabus or reviewed by qualified RE teachers.

Build after RE improvement:

```txt
✓ Compiled successfully
✓ Generating static pages (324/324)
```

### P4 Social Studies quick district/civic pass

Checked P4 Social Studies worked examples, module examples and quiz correct answers for district flexibility, civic balance and respectful wording. No corrections were needed in this pass. Human/founder/teacher review remains open before premium-final status.

### P4 English quick grammar/tone pass

Checked P4 English worked examples, module examples and quiz correct answers for grammar, tone and P4 language level. No corrections were needed in this pass. Human/founder/teacher review remains open before premium-final status.

### P4 Integrated Science deepening pass

Initial completeness scan showed P4 Science had only one module per topic, while the other P4 subjects had two modules per topic. Added a second practical/application module to all 12 P4 Science topics, with special attention to:

- safe crop/pest wording,
- animal care and veterinary referral,
- weather safety,
- hygiene and sanitation decisions,
- balanced diet choices,
- organ protection,
- tooth decay prevention,
- communicable disease/worm prevention,
- vector-control choices,
- accident/poisoning/first-aid safety.

Post-deepening structure: 12/12 P4 Science topics now have 2 subtopics/modules.

After the science deepening, P4 answer positions were rebalanced again across A/B/C/D and the build passed with 324 static pages.

---


## P5 quality pass progress





### P5 Religious Education respectful wording pass

Checked P5 RE for respectful CRE/IRE wording. Improved IRE references so learner-facing content consistently uses `Prophet Muhammad (PBUH)` where applicable, including the Madina and last-days topics. Build passed afterward with 324 static pages.

### P5 AI-level quality pass status

P5 quality pass is complete at AI-builder level for this round:

- answer-position bias fixed across all five P5 subject libraries,
- P5 English generic/template topics improved with topic-specific examples and writing tasks,
- P5 Science health-sensitive wording spot-checked,
- P5 Social Studies historical/civic wording spot-checked,
- P5 RE respectful wording improved.

Human/founder/teacher review remains open before premium-final status.

### P5 Social Studies quick historical/civic pass

Checked P5 Social Studies wording around pre-colonial Uganda, foreign influence, independence, government and population. Wording is balanced at beta level: foreign influence includes positive and negative effects, independence is described through political activity/negotiation, and government/civic content is age-appropriate. No correction was needed in this pass.

### P5 Science quick health/science pass

Checked P5 Science for high-risk health/science wording around immunisation, disease, digestion, poultry disease, bacteria and fungi. The wording is acceptable for beta: vaccines are linked to trained health workers, missed immunisation dates direct parents to health workers, and disease-control guidance avoids unsafe self-treatment. No correction was needed in this pass.

### P5 English template-quality pass

P5 English had generic template sections in the last five topics. Replaced generic worked examples and module prompts with topic-specific content for:

- Letter Writing
- Communication
- Culture
- Peace and Security
- Services: Banking

Improvements included topic-specific worked examples, module examples, quiz prompts and writing tasks. Build passed afterward with 324 static pages.

### P5 answer-distribution fix

Found the same quiz/practice issue in P5 that appeared in P4: correct answers were biased to option A across P5 topic libraries. Fixed by adding deterministic answer-position balancing across:

- `app/lib/p5-math-topics.ts`
- `app/lib/p5-english-topics.ts`
- `app/lib/p5-science-topics.ts`
- `app/lib/p5-social-topics.ts`
- `app/lib/p5-re-topics.ts`

This does not change curriculum topic IDs or content coverage; it improves practice quality by preventing predictable answer positions.

Build after fix:

```txt
✓ Compiled successfully
✓ Generating static pages (324/324)
```

Remaining P5 work: deeper quality pass on English, Science, Social Studies and RE to reduce template-like sections and improve premium feel.

---


## P6 premium-additions review progress

P6 review is complete at AI-builder level for this round.

Actions completed:

- Balanced P6 quiz/try-this correct answer positions across A/B/C/D in all five P6 topic libraries.
- Spot-checked P6 Science high-risk wording around tobacco/smoking, respiratory disease, blood/circulation and livestock/vector disease. Wording is acceptable for beta/premium-review level.
- Spot-checked P6 Social Studies wording around migration, colonisation, resistance, independence and EAC. Wording is acceptable for beta/premium-review level.
- Improved P6 RE respectful IRE wording so Prophet Muhammad references include `(PBUH)` where applicable.

Build after P6 review fixes:

```txt
✓ Compiled successfully
✓ Generating static pages (324/324)
```

Human/founder/teacher review remains open before premium-final status.

---


## P7 premium-additions review progress

P7 review is complete at AI-builder level for this round.

Actions completed:

- Balanced P7 quiz/try-this correct answer positions across A/B/C/D in the P7 topic libraries.
- Spot-checked P7 Mathematics high-risk areas including probability, integers, interest, equations, area and volume.
- Spot-checked P7 Science high-risk wording around disease, first aid, excretion, tobacco/substance abuse and health-worker referral.
- Spot-checked P7 Social Studies wording around migration, colonialism, slave trade, nationalism, independence, world organisations and refugees.
- Spot-checked P7 RE respectful wording. Muhammad references without `(PBUH)` are limited to Shahadah wording, where the formula should not be altered.

Build after P7 review fixes:

```txt
✓ Compiled successfully
✓ Generating static pages (324/324)
```

Human/founder/teacher review remains open before premium-final status, especially for PLE correctness.

---

## Review pass current conclusion

The P4–P7 review/improvement pass is complete at AI-builder level for this round. Remaining quality risk is now primarily human/teacher/founder review, not missing top-level coverage or obvious mechanical issues.

Recommended next action: founder may approve moving to P3 NCDC research, while keeping the human review tasks open for P4–P7.

---

## Current class quality status

### P4

Status: live beta complete across all 5 app subjects.

Main remaining work:

- Mathematics: review arithmetic and P4 readability.
- English: review grammar, examples and P4 language-transition level.
- Science: review health-sensitive wording, first-aid wording and scientific accuracy.
- Social Studies: review local-district flexibility and civic balance.
- Religious Education: review respectful CRE/IRE wording and confirm map against full standard P4 CRE/IRE syllabus when found.

### P5

Status: live beta complete across all 5 app subjects.

Main remaining work:

- P5 content is live beta and needs a quality pass to reduce template-like sections, especially English, Science, Social Studies and RE.
- P5 maps were researched from NCDC P5 Set One, but still need official/trusted copy checks where source limitations were documented.

### P6

Status: live across all 5 app subjects; premium strengthening started/completed as first sweep.

Main remaining work:

- Review P6 premium additions for correctness and tone.
- Confirm practice/application additions remain age-appropriate and source-aligned.

### P7

Status: live across all 5 app subjects; premium strengthening started/completed across all current subjects.

Main remaining work:

- Review P7 premium additions subject by subject.
- Prioritise P7 because it has the strongest PLE/parent ROI urgency.

---

## Source limitations to keep visible

1. **P4 RE** is based on the NCDC/MoES Primary 4 Abridged Curriculum, not yet the full standard P4 CRE/IRE syllabus.
2. **P5 source copies** were researched from available NCDC-attributed Set One material and catalogue support; where marked, still check against official/trusted copies.
3. A beta label does not permit low quality. It means live for review after our own best-effort build.

---

## Recommended next sequence before P3

1. Quick P4 review pass across all 5 subjects.
2. P5 quality pass, especially template-like topics.
3. P6 premium-addition review.
4. P7 premium-addition review, prioritising exam/PLE correctness.
5. Only then begin P3 research under NCDC-first rules.

---

## Decision from this pass

Do **not** start the next class yet.

First, complete at least a quick quality/review pass on the existing live classes, starting with P4 because it was just completed.
