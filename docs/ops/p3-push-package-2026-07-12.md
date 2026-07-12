# P3 Milestone Push Package — 2026-07-12

## Purpose

Prepare the founder/manual-overwrite push package for the P3 milestone.

This package covers:

- P3 NCDC thematic research and maps.
- P3 thematic-first app structure.
- P3 full thematic beta across 12 themes.
- P3 internal review/polish pass.
- P3 CRE/IRE Religious Education beta from official NCDC map plus trusted source cross-checks.

---

## Build status

Command:

```bash
cd app && npm run build
```

Result:

```txt
✓ Compiled successfully
✓ Generating static pages (356/356)
```

Do **not** copy generated folders:

- `app/.next/`
- `app/node_modules/`
- any generated/cache/build folders

---

## Files to overwrite

Overwrite these existing files in the GitHub-connected local repo.

### Core root docs

- `README.md`
- `START_HERE.md`
- `STATUS.md`
- `HANDOFF.md`
- `CHECKLIST.md`
- `CHANGELOG.md`
- `DECISIONS.md`
- `MANUAL_TASKS.md`

### Curriculum maps

- `content/curriculum/p3-thematic.json`
- `content/curriculum/p3-re.json`

### P3 learner routes

- `app/app/p3-home/page.tsx`
- `app/app/p3/theme/[theme]/page.tsx`

### App shell / navigation / auth support

- `app/lib/auth-session.ts`
- `app/lib/learner-profile.ts`
- `app/lib/teacher-questions.ts`
- `app/components/AuthGate.tsx`
- `app/components/AppNav.tsx`
- `app/components/ClassSelector.tsx`
- `app/components/StudyDirectory.tsx`
- `app/components/PracticeHomeContent.tsx`
- `app/components/TeacherQuestionManager.tsx`

---

## Files to add

Add these new files/directories if they are not already in the local repo.

### P3 content libraries

- `app/lib/p3-thematic-topics.ts`
- `app/lib/p3-re-topics.ts`

### P3 RE routes

- `app/app/p3/re/page.tsx`
- `app/app/p3/re/[topic]/page.tsx`

### P3 docs

- `docs/ops/ncdc-p3-curriculum-research-2026-07-09.md`
- `docs/ops/p3-thematic-app-structure-2026-07-09.md`
- `docs/ops/p3-thematic-beta-completion-2026-07-12.md`
- `docs/ops/p3-re-source-research-2026-07-12.md`
- `docs/ops/p3-review-polish-pass-2026-07-12.md`
- `docs/ops/p3-push-package-2026-07-12.md`

### P3 visuals

Copy the entire directory:

```txt
app/public/images/p3/
```

This includes:

- 36 thematic sub-theme SVGs.
- 3 original Theme 1 SVGs.
- 18 P3 RE SVGs under `app/public/images/p3/re/`.

Total current P3 visual files: 57 SVG files.

---

## Files to delete

None for this P3 milestone.

Important: confirm these forbidden P3 subject route folders do **not** exist:

```txt
app/app/math/p3/
app/app/english/p3/
app/app/science/p3/
app/app/social-studies/p3/
app/app/re/p3/
```

The correct P3 routes are:

```txt
/p3-home
/p3/theme/[theme]
/p3/re
/p3/re/[topic]
```

---

## Suggested commit message

```txt
P3: complete thematic beta and add RE beta
```

Longer commit body if useful:

```txt
- Add official NCDC P3 thematic maps and full 12-theme beta
- Add 36 sub-themes, 108 thematic modules and P3 visuals
- Add P3 RE beta from NCDC map plus trusted CRE/IRE source checks
- Add /p3-home, /p3/theme/[theme], /p3/re and /p3/re/[topic]
- Extend P3 auth/nav/study/practice support
- Update docs, decisions, checklist and handoff
- Build passes with 356 static pages
```

---

## Post-deploy smoke-test checklist

After pushing and deployment goes green, test in this order.

### 1. Sign-in / route guard

- Open live site in a fresh/incognito browser.
- Sign in as **P3 student**.
- Confirm it lands on `/p3-home`.
- Try opening a P4/P5/P6/P7 subject route; P3 student should be redirected back to `/p3-home`.

### 2. P3 home

Open:

```txt
/p3-home
```

Check:

- Says P3 is thematic, not subject-based.
- Shows all 12 themes.
- Shows the separate Religious Education section.
- Theme cards open correctly.

### 3. Sample P3 thematic routes

Open at least these:

```txt
/p3/theme/p3-theme-1-subcounty-division
/p3/theme/p3-theme-6-plants
/p3/theme/p3-theme-10-health
/p3/theme/p3-theme-12-energy
```

Check:

- Page loads.
- Expected-outcome guide appears.
- Sub-theme cards/modules load.
- Images display.
- Quiz appears and works.
- Health/HIV/AIDS wording is gentle and non-stigmatising.
- Energy/fire/electricity wording is safety-focused.

### 4. P3 RE directory

Open:

```txt
/p3/re
```

Check:

- CRE and IRE are separate sections.
- It says RE is beta and teacher review is required.
- Topic cards open.

### 5. Sample P3 RE routes

Open at least these:

```txt
/p3/re/p3-cre-holy-spirit
/p3/re/p3-cre-values-abilities-prayer
/p3/re/p3-ire-first-revelation
/p3/re/p3-ire-dua-after-adhan-laws
/p3/re/p3-ire-dua-seeking-knowledge
```

Check:

- Page loads.
- Image displays.
- CRE/IRE wording is respectful.
- Prophet Muhammad references include `(PBUH)` where applicable.
- RE page says beta/teacher review is required.
- Quiz works.

### 6. Study and Practice

Open as P3 student:

```txt
/study
/practice
```

Check:

- Study says **Your themes**, not “Your subjects”.
- P3 themes and RE appear.
- Practice cards include P3 thematic and RE options.

### 7. Teacher library

Sign out, sign in as **Teacher**, open:

```txt
/study
```

Check:

- Teacher can see P3 thematic beta in the content library.
- P3 RE card appears under Primary Three.

---

## Known remaining review tasks after push

P3 is beta, not premium-final.

Still required:

1. Founder/human review of all 12 P3 thematic themes.
2. Qualified CRE teacher review.
3. Qualified IRE teacher review.
4. Corrections from teacher review.
5. P4 RE full standard syllabus confirmation remains open.

---

## Post-P3 scope note

Founder is considering closing the current product-cycle primary expansion at **P3–P7** and **not** continuing downward into P2/P1 inside the same app flow.

Do not start P2/P1 unless there is a fresh documented decision. If P1/P2 are built later, treat them as a separate lower-primary track/product decision with its own NCDC research and architecture.

---

## Superseded push guidance — v4 architecture correction

After this push package was prepared, founder review identified a deeper content-structure issue: the P3/P4/P5 content should not be pushed as if the current meta-module structure is final.

New source of truth:

- `docs/spec/ncdc-native-content-architecture-v4-2026-07-12.md`
- `docs/ops/v4-content-architecture-pilot-2026-07-12.md`

Current recommendation:

- Do not push with the message “P3 complete” as a final content milestone.
- If pushing now, push as an architecture/pilot milestone, not premium-final content.
- Suggested current commit message:

```txt
Content: add NCDC-native v4 lesson pilot
```

Current build after v4 pilot:

```txt
✓ Compiled successfully
✓ Generating static pages (356/356)
```
