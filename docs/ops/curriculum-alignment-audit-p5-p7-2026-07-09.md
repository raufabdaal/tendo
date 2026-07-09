# Curriculum Alignment Audit — P5 to P7 — 2026-07-09

## Purpose

This audit compares the current app content against the curriculum maps for P5, P6 and P7.

Non-negotiable rule: **NCDC first, build second.** The app is only valid if each class/subject follows its curriculum map.

---

## Audit method

For each class and subject:

1. Read the curriculum map under `content/curriculum/`.
2. Extract the expected topic IDs.
3. Check that each expected topic ID exists in the relevant app content file under `app/lib/`.
4. Confirm that a route exists for each live class/subject where applicable.
5. Confirm build passes.

Build verification after this audit:

```bash
cd app
npm run build
```

Result: passed with **255 static pages**.

---

## Alignment table

| Class | Subject | Curriculum map | App content | Expected topics | Missing topics | Status |
|---|---|---|---|---:|---:|---|
| P7 | Mathematics | `p7-math.json` | `topics.ts` | 11 | 0 | Pass |
| P7 | English | `p7-english.json` | `english-topics.ts` | 7 | 0 | Pass |
| P7 | Integrated Science | `p7-science.json` | `science-topics.ts` | 8 | 0 | Pass |
| P7 | Social Studies | `p7-social-studies.json` | `social-topics.ts` | 10 | 0 | Pass |
| P7 | Religious Education | `p7-re.json` | `re-topics.ts` | 14 | 0 | Pass |
| P6 | Mathematics | `p6-math.json` | `p6-math-topics.ts` | 6 | 0 | Pass |
| P6 | English | `p6-english.json` | `p6-english-topics.ts` | 5 | 0 | Pass |
| P6 | Integrated Science | `p6-science.json` | `p6-science-topics.ts` | 5 | 0 | Pass |
| P6 | Social Studies | `p6-social-studies.json` | `p6-social-topics.ts` | 6 | 0 | Pass |
| P6 | Religious Education | `p6-re.json` | `p6-re-topics.ts` | 6 | 0 | Pass |
| P5 | Mathematics | `p5-math.json` | `p5-math-topics.ts` | 12 | 0 | Pass / live beta |
| P5 | English | `p5-english.json` | `p5-english-topics.ts` | 8 | 0 | Pass / live beta |
| P5 | Integrated Science | `p5-science.json` | `p5-science-topics.ts` | 9 | 0 | Pass / live beta |
| P5 | Social Studies | `p5-social-studies.json` | `p5-social-topics.ts` | 12 | 0 | Pass / live beta |
| P5 | Religious Education | `p5-re.json` | `p5-re-topics.ts` | 20 | 0 | Pass / live beta |

---

## Notes by class

### P7

P7 has complete top-level subject coverage across all five subjects. Premium strengthening passes have started across all P7 subjects. Still needs human/founder/teacher review, but there are no missing top-level curriculum topics in the app content.

### P6

P6 has complete top-level subject coverage across all five subjects. Premium strengthening passes have started across all P6 subjects. Still needs human/founder/teacher review, but there are no missing top-level curriculum topics in the app content.

### P5

P5 maps were corrected after NCDC research. P5 is now live beta across all five subjects. All expected topic IDs from the updated maps exist in app content. P5 still needs human/founder review and continued checking against official/trusted NCDC material.

---

## Important limitations

This audit verifies **top-level topic alignment** between curriculum maps and app content files. It does not prove every sentence, worked example or quiz answer is perfect.

Next review layers still needed:

1. Human/founder review of upgraded P7 content.
2. Human/founder review of upgraded P6 content.
3. Human/founder review of P5 beta content.
4. Teacher/reviewer pass for sensitive subjects: Science health topics and Religious Education.
5. Practice-bank alignment audit after content review.

---

## Verdict

P5, P6 and P7 currently pass top-level curriculum-map alignment. We can continue moving forward, while keeping all beta content open for review and correction.
