# HANDOFF — for the next session

*Written: 2026-07-12 · Updated: 2026-07-15 (P7 SST structure split fixed)*


## CURRENT HANDOFF — 2026-07-14 — P7 SST STRICT FORMATTING PASS

We are currently working inside **Primary 7 Social Studies**, Topic 1: `Location of Africa on the map of the world`.

Founder workflow now locked:

1. Founder provides exact content for a subtopic.
2. Agent restructures that content into digestible modules.
3. Each module gets an inline quiz/check.
4. Agent must not add conversational filler, curriculum meta-copy or unsourced syllabus facts.
5. Every meaningful change must update docs and provide exact overwrite/add/delete lists.

Completed in the latest pass:

- Rewrote first subtopic `location-position-africa` in `app/lib/social-topics.ts`.
- Rewrote second subtopic `world-continents-sizes` in `app/lib/social-topics.ts` into 4 strict modules with inline checks.
- Rewrote remaining official Topic 1 subtopics: `water-bodies-africa`, `regions-africa` and `countries-capitals-africa`.
- All five official NCDC subtopics in Topic 1 are now strict-formatted.
- Topic 2 `Physical Features of Africa` official subtopics are also strict-formatted: mountains/highlands, rivers, lakes, plateau/rift/coastal plains and formation processes.
- The missed application subtopics are now strict-formatted too: `premium-map-answering` and `premium-physical-features-application`.
- Topic 3 `Climate of Africa` is now strict-formatted across official subtopics and `premium-climate-interpretation`.
- Topic 4 `Vegetation of Africa` is now strict-formatted across official subtopics and `premium-vegetation-application`.
- Structural fix completed: People subtopics were removed from Vegetation and restored under `people-ethnic-groups-settlement`.
- Structural fix completed: Topic 7–10 subtopics were removed from `foreign-influence-africa` and restored under their official topic objects: `nationalism-road-independence`, `post-independence-africa`, `economic-developments-africa` and `major-world-organisations`. P7 SST topic order now follows the official curriculum sequence.
- Added strict rendering support in `app/components/SubtopicViewer.tsx`.
- Added strict-content CSS in `app/app/globals.css`.
- Added ops note: `docs/ops/p7-sst-strict-formatting-pass-2026-07-14.md`.
- Build passed after strict rendering/content changes: `npm run build` → `✓ Generating static pages (418/418)`.
- Build passed after Topic 6–10 structure split: `npm run build` → `✓ Generating static pages (413/413)`.

Next step:

- Review Topic 4 `Vegetation of Africa` and the corrected People topic structure if needed.
- Continue to Topic 5: `people-ethnic-groups-settlement`, using source-traceable content from the new curriculum-intelligence workflow.

---

## CURRICULUM INTELLIGENCE SYSTEM — STARTED 2026-07-15

Founder direction: content is the core function of the app. The project must stop writing content ad hoc and move to a source-traceable curriculum intelligence pipeline.

Created this session:

- `docs/spec/curriculum-intelligence-system-v1.md`
- `docs/ops/p7-sst-curriculum-intelligence-pilot-2026-07-15.md`
- `content/curriculum-intelligence/p7-sst/source-registry.json`
- `content/curriculum-intelligence/p7-sst/manifest.json`
- `content/curriculum-intelligence/p7-sst/topic-05-people-ethnic-groups-settlement/evidence-notes.json`
- `content/curriculum-intelligence/p7-sst/topic-05-people-ethnic-groups-settlement/qa-checklist.json`
- `scripts/audit-curriculum-intelligence.js`

Audit command:

```bash
node scripts/audit-curriculum-intelligence.js
```

Latest result: 0 failures, 26 warnings. Warnings are expected and now define the content QA backlog.

Hard rule: do not publish new Topic 5 learner-facing content until verified evidence notes exist and QA gates pass.


### Topic 1 is now the active restart point

Founder wants to start from Topic 1 again because `location-of-africa` still feels incomplete/misaligned and has awkward spacing/one-line fragments. Do not blindly polish the current app content. Use the Topic 1 intelligence files first:

- `content/curriculum-intelligence/p7-sst/topic-01-location-of-africa/evidence-notes.json`
- `content/curriculum-intelligence/p7-sst/topic-01-location-of-africa/module-blueprint.json`
- `content/curriculum-intelligence/p7-sst/topic-01-location-of-africa/qa-checklist.json`
- `docs/ops/p7-sst-topic-01-curriculum-intelligence-audit-2026-07-15.md`

Current Topic 1 blockers before final rewrite:

1. Candidate countries/capitals/islands reference pack now exists at `content/curriculum-intelligence/p7-sst/topic-01-location-of-africa/reference-countries-capitals-islands.json`, but it is not learner-approved yet.
2. Review/approve source policy: all 54 countries vs shorter school list, East Africa grouping, South Africa capital convention, Equatorial Guinea capital convention, and island scope.
3. Need decision/source for whether longitude-time calculation belongs in Topic 1.
4. Need remove/quarantine unsupported filler modules such as marine gateways/channels and broad uses/advantages/disadvantages sections if no source is found.

Latest audit command:

```bash
node scripts/audit-curriculum-intelligence.js
```

Latest result: 0 failures / 28 warnings.

Topic 1 Subtopic 1 rewrite completed:

- Updated `app/lib/social-topics.ts` → `location-of-africa` / `location-position-africa`.
- Replaced 9 over-spaced modules with 5 source-backed modules.
- Removed longitude/local-time calculation from this subtopic pending source/extension decision.
- Audit now: 0 failures / 28 warnings.
- Build passed: 413 static pages.

Next Topic 1 target completed: `world-continents-sizes`.

Topic 1 Subtopic 2 rewrite completed:

- Updated `app/lib/social-topics.ts` → `location-of-africa` / `world-continents-sizes`.
- Replaced 4 modules with 3 source-backed modules.
- Removed unsupported `continents-uses-importance` filler module.
- Build passed: 413 static pages.

Next Topic 1 target completed: `water-bodies-africa`.

Topic 1 Subtopic 3 rewrite completed:

- Updated `app/lib/social-topics.ts` → `location-of-africa` / `water-bodies-africa`.
- Replaced 5 modules with 3 source-backed modules.
- Removed marine gateways/channels from the core water-bodies subtopic pending source/extension decision.
- Build passed: 413 static pages.

Next Topic 1 target completed: `regions-africa`.

Topic 1 Subtopic 4 rewrite completed:

- Updated `app/lib/social-topics.ts` → `location-of-africa` / `regions-africa`.
- Replaced broad region framing with 3 source-backed modules.
- Removed broad region uses/importance filler from the core regions subtopic.
- Build passed: 413 static pages.

Next Topic 1 target completed: `countries-capitals-africa`.

Topic 1 Subtopic 5 rewrite completed:

- Updated `app/lib/social-topics.ts` → `location-of-africa` / `countries-capitals-africa`.
- Used the approved shorter P7 school-first approach in the learner flow.
- Kept fuller countries/capitals/islands list as reference-pack support, not core learner overload.
- Removed broad uses/importance and landlocked/coastal filler from the core subtopic.
- Build passed: 413 static pages.

Next Topic 1 target completed: `premium-map-answering`.

Topic 1 application practice rewrite completed:

- Updated `app/lib/social-topics.ts` → `location-of-africa` / `premium-map-answering`.
- Rebuilt practice around NCDC Topic 1 assessment competences: drawing Africa with regions/lines, countries/capitals, islands, and compass directions.
- Build passed: 413 static pages.

Topic 1 learner-flow rewrite is now complete under the curriculum-intelligence direction. Topic 2 has now started.



## SCREENED RICH SOURCE CONTENT METHOD

Founder/partner review found the vertical chain pilot can still feel too dry/shallow. New method:

```txt
Use rich school-style content → screen every point → keep/rewrite/source-check/move/remove → child-friendly module
```

Created:

- `docs/spec/screened-source-content-method-2026-07-15.md`

Updated with founder permission:

- `docs/spec/content-mindset-lock-2026-07-15.md`
- `docs/spec/learner-content-three-layer-standard-2026-07-15.md`
- `docs/spec/vertical-structural-chain-content-pilot-2026-07-15.md`

New learner module target:

```txt
Friendly explanation + structured answer chain + exam booster + practice
```

Next recommended action: rework Topic 1 pilot again using this screened rich source method, starting from the partner content Rauf provided.

## VERTICAL STRUCTURAL CHAIN LEARNER-LAYOUT PILOT

Founder identified that even corrected content may still be too paragraph-heavy for children. New learner-facing layout rule:

```txt
Label: short answer point
Label: short answer point
Label: short answer point
Inline check
```

Created:

- `docs/spec/vertical-structural-chain-content-pilot-2026-07-15.md`

Applied to Topic 1:

- `app/lib/social-topics.ts` → `location-of-africa` all subtopics converted to vertical structural chain style.

Important: this changes presentation, not source policy. Evidence notes and blueprints stay full. Learner screens should be short, labelled, scannable and exam-usable. Do not return to blind headings like uses/advantages everywhere; labels must match NCDC need.

Build passed after `npm install && npm run build`: 413 static pages.

## TOPIC 2 STARTED — PHYSICAL FEATURES OF AFRICA

Created Topic 2 curriculum-intelligence files:

- `content/curriculum-intelligence/p7-sst/topic-02-physical-features-of-africa/evidence-notes.json`
- `content/curriculum-intelligence/p7-sst/topic-02-physical-features-of-africa/module-blueprint.json`
- `content/curriculum-intelligence/p7-sst/topic-02-physical-features-of-africa/qa-checklist.json`
- `docs/ops/p7-sst-topic-02-curriculum-intelligence-audit-2026-07-15.md`

Topic 2 Subtopic 1 completed:

- Updated `app/lib/social-topics.ts` → `physical-features-of-africa` / `mountains-highlands`.
- Rewrote it into 3 source-backed modules.
- Country-location examples are school-first support and need atlas/teacher review before premium-final.
- Audit: 0 failures / 34 warnings.
- Build passed: 413 static pages.

Next target completed: `rivers-africa`.

Topic 2 Subtopic 2 completed:

- Updated `app/lib/social-topics.ts` → `physical-features-of-africa` / `rivers-africa`.
- Rewrote it into 4 source-backed modules.
- Focused on rivers as drainage features, NCDC-listed rivers, map location and oceans/seas into which rivers flow.
- Audit: 0 failures / 34 warnings.
- Build passed: 413 static pages.

Next target completed: `lakes-africa`.

Topic 2 Subtopic 3 completed:

- Updated `app/lib/social-topics.ts` → `physical-features-of-africa` / `lakes-africa`.
- Rewrote it into 3 source-backed modules.
- Focused on lakes as drainage features, NCDC-listed Lake Chad and Lake Ngami, map location and value/map practice.
- Audit: 0 failures / 34 warnings.
- Build passed: 413 static pages.

Next target completed: `plateau-rift-coastal`.

Topic 2 Subtopic 4 completed:

- Updated `app/lib/social-topics.ts` → `physical-features-of-africa` / `plateau-rift-coastal`.
- Rewrote it into 3 source-backed modules.
- Focused on plateau, rift valley and coastal plains as relief features, NCDC coastal plains in West/North/South, and model/map practice.
- Audit: 0 failures / 34 warnings.
- Build passed: 413 static pages.

Next target completed: `formation-physical-features` plus application practice.

Topic 2 final two subtopics completed:

- Updated `app/lib/social-topics.ts` → `physical-features-of-africa` / `formation-physical-features`.
- Updated `app/lib/social-topics.ts` → `physical-features-of-africa` / `premium-physical-features-application`.
- Formation now focuses on folded, fault-block and volcanic mountains with diagram/model practice.
- Application practice now aligns to NCDC competences: naming, locating, formation, diagrams and value answers.
- Audit: 0 failures / 34 warnings.
- Build passed: 413 static pages.

Topic 2 learner-flow rewrite is complete. Remaining warnings are review tasks before premium-final status, especially atlas/teacher confirmation for feature-country examples, river mouths, lake locations and formation diagrams.

Next recommended target started: Topic 3 `climate-of-africa`.

## TOPIC 3 STARTED — CLIMATE OF AFRICA

Created Topic 3 curriculum-intelligence files:

- `content/curriculum-intelligence/p7-sst/topic-03-climate-of-africa/evidence-notes.json`
- `content/curriculum-intelligence/p7-sst/topic-03-climate-of-africa/module-blueprint.json`
- `content/curriculum-intelligence/p7-sst/topic-03-climate-of-africa/qa-checklist.json`
- `docs/ops/p7-sst-topic-03-curriculum-intelligence-audit-2026-07-15.md`

Topic 3 first batch completed:

- Updated `app/lib/social-topics.ts` → `climate-of-africa` / `climatic-regions`.
- Updated `app/lib/social-topics.ts` → `climate-of-africa` / `characteristics-climate`.
- Removed mechanical uses/importances/advantages/disadvantages filler.
- Audit: 0 failures / 40 warnings.
- Build passed: 413 static pages.

Next target completed: `factors-climate` and `climate-human-activities`.

Topic 3 second batch completed:

- Updated `app/lib/social-topics.ts` → `climate-of-africa` / `factors-climate`.
- Updated `app/lib/social-topics.ts` → `climate-of-africa` / `climate-human-activities`.
- Kept NCDC factor list exact.
- Used NCDC human activity list by climate type.
- Audit: 0 failures / 40 warnings.
- Build passed: 413 static pages.

Next target completed: `human-activities-climate` and `premium-climate-interpretation`.

Topic 3 final batch completed:

- Updated `app/lib/social-topics.ts` → `climate-of-africa` / `human-activities-climate`.
- Updated `app/lib/social-topics.ts` → `climate-of-africa` / `premium-climate-interpretation`.
- Human influence now separates harmful activities, effects and protective actions.
- Application practice now aligns to NCDC climate assessment competences.
- Audit: 0 failures / 40 warnings.
- Build passed: 413 static pages.

Topic 3 learner-flow rewrite is complete. Remaining warnings are review tasks before premium-final status, especially country/climate examples and atlas/teacher confirmation.

Next recommended target started: Topic 4 `vegetation-of-africa`.

## TOPIC 4 STARTED — VEGETATION OF AFRICA

Created Topic 4 curriculum-intelligence files:

- `content/curriculum-intelligence/p7-sst/topic-04-vegetation-of-africa/evidence-notes.json`
- `content/curriculum-intelligence/p7-sst/topic-04-vegetation-of-africa/module-blueprint.json`
- `content/curriculum-intelligence/p7-sst/topic-04-vegetation-of-africa/qa-checklist.json`
- `docs/ops/p7-sst-topic-04-curriculum-intelligence-audit-2026-07-15.md`

Topic 4 first batch completed:

- Updated `app/lib/social-topics.ts` → `vegetation-of-africa` / `vegetation-types`.
- Updated `app/lib/social-topics.ts` → `vegetation-of-africa` / `factors-vegetation`.
- Kept NCDC vegetation type list and factor list exact.
- Removed mechanical uses/importances/advantages/disadvantages filler.
- Audit: 0 failures / 46 warnings.
- Build passed: 413 static pages.

Next target completed: `importance-vegetation` and `game-parks-animals`.

Topic 4 second batch completed:

- Updated `app/lib/social-topics.ts` → `vegetation-of-africa` / `importance-vegetation`.
- Updated `app/lib/social-topics.ts` → `vegetation-of-africa` / `game-parks-animals`.
- Importance now separates people, animals/environment and caring for vegetation.
- Game parks now covers importance, animals in vegetation zones, reasons animals live in different zones, and caring for animals/birds.
- Audit: 0 failures / 46 warnings.
- Build passed: 413 static pages.

Next target completed: `population-vegetation` and `premium-vegetation-application`.

Topic 4 final batch completed:

- Updated `app/lib/social-topics.ts` → `vegetation-of-africa` / `population-vegetation`.
- Updated `app/lib/social-topics.ts` → `vegetation-of-africa` / `premium-vegetation-application`.
- Population content now separates distribution, reasons for differences, effects of big population and protection solutions.
- Application practice now aligns to NCDC vegetation assessment competences.
- Audit: 0 failures / 46 warnings.
- Build passed: 413 static pages.

Topic 4 learner-flow rewrite is complete. Remaining warnings are review tasks before premium-final status, especially animal examples and vegetation-location examples.

Next recommended target started: Topic 5 `people-ethnic-groups-settlement`.

## TOPIC 5 STARTED — PEOPLE OF AFRICA, ETHNIC GROUPS AND SETTLEMENT

Created/updated Topic 5 curriculum-intelligence files:

- `content/curriculum-intelligence/p7-sst/topic-05-people-ethnic-groups-settlement/evidence-notes.json`
- `content/curriculum-intelligence/p7-sst/topic-05-people-ethnic-groups-settlement/module-blueprint.json`
- `content/curriculum-intelligence/p7-sst/topic-05-people-ethnic-groups-settlement/qa-checklist.json`
- `docs/ops/p7-sst-topic-05-curriculum-intelligence-audit-2026-07-15.md`

Topic 5 first batch completed:

- Updated `app/lib/social-topics.ts` → `people-ethnic-groups-settlement` / `origin-ethnic-groups`.
- Updated `app/lib/social-topics.ts` → `people-ethnic-groups-settlement` / `movements-ethnic-groups`.
- Used respectful wording because the source includes older/sensitive ethnic terminology.
- Audit: 0 failures / 46 warnings.
- Build passed: 413 static pages.

Next target: rewrite `settlement-tribes` and `problems-effects-migration` together if quality remains high. Handle settlement patterns, tribes/ethnic group matching, reasons, problems and effects respectfully and clearly; avoid unsourced detailed tribe mapping until teacher-reviewed.


## 🚀 PUSH STATUS — READY

**Full v5 UX overhaul + P7 Math/English/Science/SST reformatted to NCDC format.**
**Religious Education remains pending qualified CRE/IRE teacher review.**

See `PUSH_CHECKLIST.md` for exact file-by-file copy list.

### How to push
1. Copy the entire `app/` folder from this workspace into your local Tendo clone
2. Run: `cd app && npm install && npm run build`
3. Open in GitHub Desktop
4. Commit with: `v5: FCC-mobile UX + NCDC content alignment — P7 Math/English/Science/SST`
5. Push to `main`



---

## 🆕 v5 FCC-MOBILE UX OVERHAUL — 2026-07-13

### What changed and why

Founder wanted the FreeCodeCamp mobile experience: dead-simple drill-down with zero fluff. We stripped all filler headings, decorative borders, bottom tabs, home dashboard stats, "What you need to know" labels, and theme grouping from the student experience.

### New flow

```
Sign in → Subject grid (Math, English, Science, SST, RE)
       → Click subject → Flat topic list
       → Click topic → Module content → Inline quiz → Next → Done
```

### Architecture decisions

1. **No bottom navigation.** Replaced with a sticky topbar: back button (context-aware) + hamburger menu. Practice and Papers live in the hamburger.

2. **Back button is smart.** On a topic page → back to subject list. On a subject list → back to /study. On /study → shows Tendo brand mark.

3. **Module viewer handles all content formats.** `SimplifiedTopicView` auto-detects:
   - `subtopics[]` → ModularView (FCC-style step-by-step with progress bar)
   - old `note` format → LegacyNoteView (clean content + quiz at bottom)
   - V4 lessons → LegacyNoteView fallback

4. **Quiz gating.** When a module has a `tryThis` question, the Next/Finish button is hidden until the user answers ("Answer the question to continue" hint shown). This prevents accidental skipping.

5. **Key term bolding.** `boldKeyTerms()` auto-detects definition patterns (colon-separated terms, "is/are" definitions, math notation, concept keywords) and applies `<strong class="kw">` with a warm underline highlight. No manual markup needed.

6. **Root page returns null.** Prevents the redirect loop that was causing "Application error" on sign-in. AuthGate handles routing.

7. **All old home pages redirect to /study.** `p3-home`, `p4-home`, `p5-home`, `p6-home`, and root `/` all use `redirect("/study")` or `return null`.

### Files created (NEW)

| File | Purpose |
|------|---------|
| `components/SimplifiedTopicView.tsx` | FCC-style module viewer — handles all 3 content formats, quiz-gated Next button, auto key-term bolding |
| `components/InlineQuiz.tsx` | Reusable inline question component (used inside modules) |
| `components/SharedTopicPage.tsx` | Shared wrapper for all `[topic]/page.tsx` routes |
| `components/SubjectTopicList.tsx` | Shared clean topic list for all subject pages |

### Files modified (OVERWRITE)

| File | Change |
|------|--------|
| `components/AppNav.tsx` | Complete rewrite: hamburger menu header, no bottom nav, context-aware back button |
| `components/AuthGate.tsx` | Routes to /study, simplified sign-in (no filler copy, no blobs) |
| `components/StudyDirectory.tsx` | Clean subject grid + continue chip, no intro fluff |
| `app/page.tsx` | Returns null (AuthGate handles routing) |
| `app/p3-home/page.tsx` through `app/p6-home/page.tsx` | All redirect to /study |
| `app/globals.css` | ~650 lines of v5 CSS appended at bottom (header, cards, module viewer, quiz, responsive) |
| All `app/[subject]/p[3-7]/page.tsx` (~25 files) | Use `SubjectTopicList` shared component |
| All `app/[subject]/p[3-7]/[topic]/page.tsx` (~25 files) | Use `SharedTopicPage` shared component |

### Old files SAFE TO DELETE later

- `components/TopicTabs.tsx` — no longer referenced in student flow
- `components/Quiz.tsx` — replaced by inline quiz in SimplifiedTopicView
- `components/BrandBar.tsx` — hidden via CSS
- `components/PracticeHomeContent.tsx` — still reachable via hamburger menu

### Known content gap (CRITICAL)

The NCDC curriculum alignment is not yet complete. Many topics use AI-generated content from the v4 migration. The next session MUST focus on content quality: NCDC-aligned definitions, UNEB-standard examples, and complete topic coverage per the official syllabus. Founder has provided a detailed content generation prompt for this.

### CSS architecture note

All v5 styles are appended at the bottom of `globals.css` under the `/* TENDO v5 — FCC-mobile simplicity */` comment block. The old 5,100+ lines of CSS are still above it and still loaded. We override with `!important` on critical resets (`.bottom-nav`, `.top-nav`, etc.). A future CSS cleanup pass can safely remove the old rules.

### Build status

Not tested with `npm run build`. Run:
```bash
cd app && npm install && npm run build
```

---

## NON-NEGOTIABLE RULE: NCDC FIRST, BUILD SECOND

For every class and every subject, Tendo must follow this order:

1. **Research the official NCDC curriculum requirements.**
2. **Document the subject/class structure clearly.**
3. **Create or update the curriculum map.**
4. **Build learner-facing content from that map only.**
5. **Review and correct content before exposing it as premium-ready.**

If a topic, route, subject, class or practice bank is not aligned to the NCDC curriculum, it should not be treated as valid product work.

---

## BETA QUALITY RULE: LIVE BETA DOES NOT MEAN ROUGH DRAFT

When content is marked beta, it should still be built to the best standard we can produce ourselves. Beta means it is live for testers to review; it does NOT mean incomplete, careless, or low-quality.

---

## Push status

Current local workspace includes the full v5 FCC-mobile UX overhaul. Founder has not pushed yet. Under `DEV-036`, every push/milestone handoff must provide an exact action list:

### Files to OVERWRITE (copy from workspace to local repo)
```
app/components/AppNav.tsx
app/components/AuthGate.tsx
app/components/StudyDirectory.tsx
app/app/page.tsx
app/app/p3-home/page.tsx
app/app/p4-home/page.tsx
app/app/p5-home/page.tsx
app/app/p6-home/page.tsx
app/app/globals.css
app/app/math/p4/page.tsx
app/app/math/p4/[topic]/page.tsx
app/app/math/p5/page.tsx
app/app/math/p5/[topic]/page.tsx
app/app/math/p6/page.tsx
app/app/math/p6/[topic]/page.tsx
app/app/math/p7/page.tsx
app/app/math/p7/[topic]/page.tsx
app/app/english/p4/page.tsx
app/app/english/p4/[topic]/page.tsx
app/app/english/p5/page.tsx
app/app/english/p5/[topic]/page.tsx
app/app/english/p6/page.tsx
app/app/english/p6/[topic]/page.tsx
app/app/english/p7/page.tsx
app/app/english/p7/[topic]/page.tsx
app/app/science/p4/page.tsx
app/app/science/p4/[topic]/page.tsx
app/app/science/p5/page.tsx
app/app/science/p5/[topic]/page.tsx
app/app/science/p6/page.tsx
app/app/science/p6/[topic]/page.tsx
app/app/science/p7/page.tsx
app/app/science/p7/[topic]/page.tsx
app/app/social-studies/p4/page.tsx
app/app/social-studies/p4/[topic]/page.tsx
app/app/social-studies/p5/page.tsx
app/app/social-studies/p5/[topic]/page.tsx
app/app/social-studies/p6/page.tsx
app/app/social-studies/p6/[topic]/page.tsx
app/app/social-studies/p7/page.tsx
app/app/social-studies/p7/[topic]/page.tsx
app/app/re/p4/page.tsx
app/app/re/p4/[topic]/page.tsx
app/app/re/p5/page.tsx
app/app/re/p5/[topic]/page.tsx
app/app/re/p6/page.tsx
app/app/re/p6/[topic]/page.tsx
app/app/re/p7/page.tsx
app/app/re/p7/[topic]/page.tsx
```

### Files to ADD (copy from workspace to local repo)
```
app/components/SimplifiedTopicView.tsx
app/components/InlineQuiz.tsx
app/components/SharedTopicPage.tsx
app/components/SubjectTopicList.tsx
```

### Files to DELETE (safe — no longer used)
```
None yet. Keep TopicTabs.tsx, Quiz.tsx, BrandBar.tsx until confirmed stable.
```

### Do NOT copy
```
app/.next/
app/node_modules/
tmp/
```

### Suggested commit message
```
v5: FCC-mobile UX overhaul — stripped fluff, hamburger nav, quiz-gated modules, key-term bolding
```
