# UX/Auth/Production Cleanup Handoff — 2026-07-07

## Why this document exists

The app has grown from a content-rich prototype into a real P6/P7 learning product. The main risk now is not missing content; it is **unnecessary UI clutter** making the app feel less simple than it should for children, teachers, and production school pilots.

This document records what changed, what decisions now govern UX, and what still needs cleanup.

---


## Update — remaining cleanup completed later on 2026-07-07

After the first role/auth declutter pass, the remaining immediate cleanup items were completed:

- `TeacherDashboard.tsx` no longer uses sales/demo-pitch wording. Sample data is framed neutrally as sample class data.
- `WorksheetGenerator.tsx` default flow is now class → subject → topics → questions → generate. Advanced fields are collapsed under Advanced options.
- Topic page intro callouts were removed across P6/P7 topic pages so lesson content appears faster.
- Practice runner footer copy was removed.
- Build passed again with 187 static pages.

Remaining work is now mainly real-device mobile verification and future backend auth planning.

---

## Current product direction

Tendo should feel like:

- **Student:** open app → sign in → see only my class → pick one next action → study/practice/papers.
- **Teacher:** open app → sign in → dashboard/worksheets/reports/content library for lesson inspiration.
- **Production UI:** less explanation, fewer stats, fewer labels, no visible implementation language, no “mode” language unless the user is actively switching accounts.

The design language remains:

- warm cream background
- playful subject colours
- emojis instead of heavy illustrations where useful
- soft blobs for depth
- strong mobile-first layout
- large tap targets

---

## Major UX/auth changes completed

### 1. Role-based device sign-in

Added a client-side sign-in gate:

- `app/components/AuthGate.tsx`
- `app/lib/auth-session.ts`

Current auth is **local/device auth only**. It is intentionally not a backend account system yet.

Users choose:

- **Student** — optional name + class (`P6` or `P7`)
- **Teacher** — optional name + school

Session is stored in `localStorage` under `tendo:session`.

### 2. Student and teacher experiences separated

Students get:

- Home
- Study
- Practice
- Papers

Teachers get:

- hamburger menu only
- Teacher home
- Content library
- Worksheets
- Past papers
- Content reports
- Switch account

Teacher pages are blocked from student sessions. Wrong student grade routes are redirected back to the correct student home.

### 3. Student grade safety

P7 students should not see P6 study/practice content. P6 students should not see P7 content unless intentionally changed via account switch.

Implemented in:

- `app/components/AuthGate.tsx`
- `app/components/StudyDirectory.tsx`
- `app/components/PracticeHomeContent.tsx`

### 4. Student home decluttered

Student home was reduced to a true home screen:

- welcome
- progress/suggested next step
- continue card
- quick links

Removed duplicate subject directory and teacher CTAs from home.

Updated:

- `app/app/page.tsx`
- `app/app/p6-home/page.tsx`

### 5. Study/Practice/Papers pages decluttered

The large hero cards were replaced with compact intro cards that keep depth/blobs but use less vertical space.

Updated:

- `app/app/study/page.tsx`
- `app/components/StudyDirectory.tsx`
- `app/app/practice/page.tsx`
- `app/components/PracticeHomeContent.tsx`
- `app/app/papers/page.tsx`

### 6. Subject pages decluttered

Removed the production-unfriendly text/stat blocks from subject landing pages, including examples like:

- “Choose a maths strand to study”
- “11 topics live”
- “study strands”
- “topics with diagrams”
- long subject descriptions
- footer summaries
- “coming phase” backlog cards

Subject pages now show:

- compact subject header
- grouped topic list
- minimal topic metadata
- progress badge where already supported

Updated:

- `app/app/math/p7/page.tsx`
- `app/app/english/p7/page.tsx`
- `app/app/science/p7/page.tsx`
- `app/app/social-studies/p7/page.tsx`
- `app/app/re/p7/page.tsx`
- all P6 subject landing pages

### 7. Papers language simplified

Removed visible learner/teacher mode cards and labels from papers flow. In production, the user should not see mixed-persona labels unless switching accounts.

Updated:

- `app/app/papers/page.tsx`
- `app/app/papers/[id]/page.tsx`
- `app/app/papers/[id]/attempt/page.tsx`
- `app/app/papers/[id]/browse/page.tsx`

### 8. Mobile responsiveness pass

Added additional CSS for:

- 390px screens
- 360px screens
- 340px screens
- horizontal overflow prevention
- smaller card padding
- teacher hamburger menu fit
- student bottom nav fit

Most of this lives at the end of:

- `app/app/globals.css`

---

## Production cleanup rulebook

When reviewing any screen, remove text/elements if it only does one of these:

1. Repeats what the nav already tells the user.
2. Explains app architecture instead of helping the user act.
3. Shows internal milestones, phase language, build counts, or content status.
4. Shows both learner and teacher persona labels to a signed-in user.
5. Adds statistics that do not directly help the next action.
6. Pushes the actual task below the fold on mobile.

Keep text/elements if it:

1. Helps the user choose the next action.
2. Prevents a real mistake.
3. Provides necessary educational context.
4. Supports teacher planning or printing.
5. Improves confidence without stealing space.

---

## Screens already cleaned

- Student sign-in
- Student home (`/`, `/p6-home`)
- Study directory (`/study`)
- Practice hub (`/practice`)
- Papers index and cover pages
- P6/P7 subject landing pages
- Teacher top navigation
- Teacher content-library access

---

## Screens needing another cleanup pass

### 1. Real-device mobile verification

Manual verification is still needed at 320, 340, 360, 390, 414 and 430px widths. Focus on sign-in, student bottom nav, teacher hamburger menu, topic pages and worksheet generation.

### 2. Backend auth planning

Current auth is local/device-only UX scaffolding. A real school deployment will need backend accounts, school/class relationships and student progress sync.

### 3. Legacy docs/start pages

Some docs still describe older “Phase 0 / math only / no login” history. This is okay historically, but root docs should keep a latest snapshot at the top.

---

## Files changed in this UX/auth wave

Core shell/auth:

- `app/components/AuthGate.tsx`
- `app/components/AppNav.tsx`
- `app/lib/auth-session.ts`
- `app/app/layout.tsx`

Student/teacher pages:

- `app/app/page.tsx`
- `app/app/p6-home/page.tsx`
- `app/app/study/page.tsx`
- `app/components/StudyDirectory.tsx`
- `app/app/practice/page.tsx`
- `app/components/PracticeHomeContent.tsx`
- `app/app/teacher/page.tsx`
- `app/app/teacher/worksheet/page.tsx`
- `app/app/teacher/content-reports/page.tsx`

Subject pages:

- `app/app/math/p6/page.tsx`
- `app/app/math/p7/page.tsx`
- `app/app/english/p6/page.tsx`
- `app/app/english/p7/page.tsx`
- `app/app/science/p6/page.tsx`
- `app/app/science/p7/page.tsx`
- `app/app/social-studies/p6/page.tsx`
- `app/app/social-studies/p7/page.tsx`
- `app/app/re/p6/page.tsx`
- `app/app/re/p7/page.tsx`

Papers/practice/topic support:

- `app/app/papers/page.tsx`
- `app/app/papers/[id]/page.tsx`
- `app/app/papers/[id]/attempt/page.tsx`
- `app/app/papers/[id]/browse/page.tsx`
- `app/components/TopicTabs.tsx`
- `app/components/Quiz.tsx`
- all topic practice pages under `app/app/[subject]/[grade]/[topic]/practice/page.tsx`

Styling:

- `app/app/globals.css`

---

## Verification

Run from `app/`:

```bash
npm install
npm run build
```

Latest verification in this workspace: production build passed and generated all static pages.

---

## Next recommended production tasks

1. Test manually at mobile widths: 320, 340, 360, 390, 414, 430.
2. Decide backend-auth provider later; current role auth is local-only UX scaffolding.
3. After real-device testing, fix any remaining screens where the main action is pushed below the fold.
