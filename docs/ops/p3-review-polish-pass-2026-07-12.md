# P3 Review and Polish Pass — 2026-07-12

## Purpose

Record the internal review/polish pass after the full P3 thematic beta and the first P3 RE beta build.

User direction for this pass:

- Work for both completion and quality.
- Build the best quality we can before teachers verify.
- For CRE and IRE, use valid information from trusted sources already available.

---

## What was reviewed

### P3 thematic beta

Reviewed route/content model:

- `/p3-home`
- `/p3/theme/[theme]`
- `app/lib/p3-thematic-topics.ts`
- `app/public/images/p3/*.svg`

Checks:

- P3 remains thematic-first.
- All 12 official themes from `content/curriculum/p3-thematic.json` are represented.
- All 36 official sub-themes are represented.
- Each sub-theme has 3 modules.
- Each sub-theme has a local SVG visual.
- Health, HIV/AIDS, gender, culture, peace, technology and energy safety wording is age-aware and respectful.
- Local/familiar language note remains visible.
- No subject-style P3 routes were added.

### P3 Religious Education beta

Reviewed/built route/content model:

- `/p3/re`
- `/p3/re/[topic]`
- `app/lib/p3-re-topics.ts`
- `content/curriculum/p3-re.json`
- `app/public/images/p3/re/*.svg`

Checks:

- P3 RE is separate from thematic pages because NCDC places RE outside the thematic matrix.
- P3 RE is not exposed as `/re/p3`.
- CRE and IRE are separated clearly.
- The official NCDC P3 RE topic map controls the topic list.
- CRE/IRE details are cross-checked with trusted sources.
- Teacher review remains required before premium-final status.

---

## Thematic polish completed

`app/lib/p3-thematic-topics.ts` was improved beyond the initial generated map-template layer.

Added a `SUBTHEME_POLISH` layer with tailored P3-friendly detail for all 36 sub-themes:

- specific explanations,
- local observation tasks,
- daily-life/value actions,
- theme-linked numeracy practice,
- English sentence frames,
- creative/CPA activity suggestions.

Examples of improvements:

- **Plants:** now explicitly covers flowering plant parts, uses of roots/stems/leaves/flowers/fruits/seeds, safe crop-growing tool use and labelled plant drawings.
- **Health:** now clearly explains vectors, disease prevention actions, and HIV/AIDS with kindness/no-stigma wording and no sharing of sharp objects.
- **Gender:** now stresses fairness, shared responsibilities and avoiding mockery.
- **Energy:** now stresses saving energy and avoiding live wires, sockets, fire and fuel danger.
- **Technology:** now separates natural/artificial materials, recycling and safe making under teacher guidance.

---

## CRE/IRE source and build completed

New P3 RE content built:

- 8 CRE topics
- 10 IRE topics
- 18 total P3 RE topics
- 54 P3 RE modules
- 18 P3 RE visuals
- 144 P3 RE quiz questions

New files:

- `app/lib/p3-re-topics.ts`
- `app/app/p3/re/page.tsx`
- `app/app/p3/re/[topic]/page.tsx`
- `app/public/images/p3/re/*.svg`
- `docs/ops/p3-re-source-research-2026-07-12.md`

Updated files:

- `content/curriculum/p3-re.json`
- `app/app/p3-home/page.tsx`
- `app/components/AuthGate.tsx`
- `app/components/AppNav.tsx`
- `app/components/StudyDirectory.tsx`
- `app/components/PracticeHomeContent.tsx`
- `DECISIONS.md`

---

## Trusted sources recorded

The detailed source register is in:

- `docs/ops/p3-re-source-research-2026-07-12.md`

Source categories used:

- NCDC official P3 RE map as curriculum source of truth.
- BibleHub pages for CRE Bible passage cross-checks.
- Quran.com pages for IRE Qur'an passage cross-checks.
- Sunnah.com Sahih al-Bukhari 614 for Dua after Adhan.
- Arabic vowel/harakat reference for Fatha, Kasra, Dhumma/Damma, Shadda and Madda.

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

## Remaining teacher-review items

P3 is now stronger, but still beta.

Teachers/reviewers should check:

1. P3 language level.
2. Local examples and Ugandan classroom fit.
3. P3 Health/HIV/AIDS wording.
4. Gender/culture sensitivity.
5. Energy/fire/electricity safety wording.
6. CRE denominational sensitivity.
7. IRE terms, Arabic transliteration and local teaching conventions.
8. P3 RE extraction cleanup against the official source.
9. Quiz clarity and answer correctness.
10. Whether any theme needs more illustrations beyond the current SVG study cards.

---

## Current verdict

P3 is now complete at AI-builder beta level across:

- 12 thematic themes,
- 36 thematic sub-themes,
- 18 Religious Education topics,
- 162 P3 learner modules total,
- 54 P3 visual assets for this pass,
- passing production build.

Not premium-final until human/teacher review is complete.

---

## Automated audit after build

Local audit result:

```txt
P3 thematic themes: 12 missing in ts: []
P3 thematic subthemes: 36 missing polish: [] missing svg: []
P3 RE topics: 18 missing in ts: [] missing svg: []
Forbidden P3 subject route dirs: []
```

---

## Follow-up QA tightening — same pass

Additional internal QA after the first RE build:

- Tightened thematic quiz distractors so wrong answers are neutral and do not accidentally look correct in Health, Water, Resources or Energy themes.
- Tightened RE quiz distractors so wrong answers do not accidentally overlap with cleanliness/faith content.
- Updated P3 student Study Directory copy from “Your subjects” to **“Your themes”** for P3 learners.
- Updated P3 student Study Directory guidance to say P3 is organised by themes with Religious Education kept as a separate NCDC section.
- Re-ran production build.

Build result after QA tightening:

```txt
cd app && npm run build
✓ Compiled successfully
✓ Generating static pages (356/356)
```
