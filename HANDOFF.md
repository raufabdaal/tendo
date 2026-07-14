# HANDOFF — for the next session

*Written: 2026-07-12 · Updated: 2026-07-14 (P7 SST strict formatting pass started)*


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
- Added strict rendering support in `app/components/SubtopicViewer.tsx`.
- Added strict-content CSS in `app/app/globals.css`.
- Added ops note: `docs/ops/p7-sst-strict-formatting-pass-2026-07-14.md`.
- Build passed: `npm run build` → `✓ Generating static pages (418/418)`.

Next step:

- Founder reviews `/social-studies/p7/location-of-africa/location-position-africa`.
- If the style is approved, continue to Topic 1 / Subtopic 2: `world-continents-sizes`, using founder-provided exact content.

---

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
