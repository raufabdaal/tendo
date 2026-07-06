# STATUS — Tendo

*Updated: 2026-07-07*

> **Current state:** Tendo is a child-friendly study platform (not just for revision) for Ugandan upper-primary learners. Both Primary Seven (P7 PLE) and Primary Six (P6) are live across all 5 official NCDC subjects (Mathematics, English Language, Integrated Science, Social Studies, and Religious Education—both CRE and IRE) on the proven Lesson Structure v3 modular architecture.


## Latest snapshot — UX/auth and production cleanup (2026-07-07)

Tendo is now moving from "content-rich app" toward **production-ready role-specific UX**. The latest work introduced a local/device sign-in gate and separated the product into student and teacher experiences.

### Completed in the latest UX pass
- Added local role session scaffolding: `AuthGate.tsx` and `auth-session.ts`.
- Students sign in as `P6` or `P7`; teachers sign in to a separate teacher workspace.
- Students now see only their own grade in Study and Practice. Wrong-grade subject routes redirect back to the correct student home.
- Student home is now intentionally simple: continue, quick practice/papers links, and progress/suggested next step.
- Teacher navigation is now a hamburger menu; student navigation remains bottom-tab based on mobile.
- Teacher workspace includes dashboard, worksheets, reports, past papers, and the content library for lesson inspiration.
- Subject landing pages were decluttered for production: removed "topics live", "study strands", long explanatory copy, footer status notes, and visible phase/coming-soon backlog language.
- Papers flow no longer exposes mixed "student mode / teacher mode" labels to signed-in users.
- Mobile responsiveness was tightened for small phones down to ~320-340px widths.

### Current known UX cleanup still needed
- Manual real-device testing is still needed at 320/340/360/390/414/430px widths.
- Current auth is local/device-only UX scaffolding; real backend auth remains a future implementation task.
- After real-device testing, do a final pass on any screens that still push the main action below the fold.

Detailed handoff: `docs/ops/ux-auth-production-cleanup-2026-07-07.md`.

---

## Current focus

### 1. Primary Six (P6) Expansion Strategy & Roadmap
With P7 completed and verified, Tendo expanded to Primary Six (P6) per `docs/spec/p6-expansion-milestones.md`:
- Milestone 1: P6 NCDC Curriculum specifications (`content/curriculum/p6-*.json`) — **COMPLETED**
- Milestone 2: Grade Switcher & Routing architecture (`/[subject]/p6/`, `/p6-home`) — **COMPLETED**
- Milestone 3a: P6 Social Studies (*East Africa*) & P6 Integrated Science v3 content library — **COMPLETED & DEEPENED**
- Milestone 3b: P6 Mathematics, English Language, and Religious Education v3 content library — **COMPLETED & DEEPENED**
- Milestone 4: P6 practice banks and dashboard/worksheet class filtering (`P6` vs `P7`) — **COMPLETED**
- Milestone 5: P6 visual roadmap and textbook illustrations — **COMPLETED (All P6 topics linked to verified visual assets)**

**Earlier Learner Profile & Class Lock Integration (now mostly superseded by `AuthGate.tsx`):**
- Built a frictionless, zero-password **Learner Profile & Class Lock** system (`learner-profile.ts`, `ClassSelector.tsx`, `LearnerBanner.tsx`).
- On first visit, students encounter a child-friendly onboarding card allowing them to select their primary class (**Primary Six** or **Primary Seven PLE**) and optionally enter their first name.
- Once locked, learners automatically land on their designated grade study hub (`/` for P7, `/p6-home` for P6). If they navigate to a subject page belonging to the other grade, an automatic notice banner allows them to return instantly or switch their class profile.
- 100% static SSG compatible, requiring zero cloud login credentials or internet connectivity to switch and maintain study profiles.
- Integrated all 12 founder-provided YouTube video lessons across P7 Mathematics (`topics.ts`) and P6 Mathematics (`p6-math-topics.ts`).
- Upgraded `TopicTabs.tsx` to support `videoUrl` on both the main topic and individual subtopic modules (`SubtopicModule`).
- When studying a module inside the Read tab, learners can watch the embedded video lesson directly above the study notes.
- When inside the Watch tab, if a topic contains multiple video lessons across its modules, an interactive video lesson switcher/playlist appears below the video player.
- Authored deep Lesson Structure v3 topic data libraries across all 5 official P6 subjects: Social Studies (6 regional East Africa topics), Integrated Science (5 biological/physical topics), Mathematics (6 topics), English Language (5 functional grammar topics), and Religious Education (6 dual CRE/IRE topics).
- Performed an exhaustive content overhaul across all P6 subjects: every subtopic specified in `content/curriculum/p6-*.json` is now fully represented as a modular subtopic with paginated `Module` steps containing `bigIdea`, exhaustive multi-paragraph `learnIt` in Ugandan teacher voice, numerical/analytical `workedExample`, multiple-choice `tryThis` checks, and relevant educational diagram/image links (`/images/social-studies/...`, `/images/science/...`, etc.).
- Seeded central practice banks (`P6_MATHS_BANK`, `P6_ENGLISH_BANK`, `P6_SCIENCE_BANK`, `P6_SOCIAL_STUDIES_BANK`, `P6_RE_BANK`) in `app/lib/question-bank.ts`.
- Connected class filtering (`P7`, `P6`, `All Classes`) on the Teacher Dashboard and Worksheet Generator.
- Added practice CTAs and `/practice` endless practice routes across all P6 subjects.

**Next:**
1. Conduct school pilot readiness checks and demonstrations with teachers at Trainup a Child Uganda.

### 2. P7 Mathematics is complete enough
Mathematics has reached a founder-safe “done enough” state for current product scope and is calibrated to the official NCDC structure.

That means:
- 11 published official NCDC P7 Mathematics topics exist across 6 themes, encapsulating all 38 previous micro-competencies as v3 modular subtopics
- visible maths coming-soon backlog is clear
- practice mode and worksheet generation support the subject
- the maths landing page is structured by strand
- diagrams exist for selected visual topics
- closeout docs live inside the repo

Further maths work should be treated as enhancement unless a materially missing curriculum issue is discovered.

### 2. P7 Integrated Science is complete enough
Science includes all 8 NCDC-aligned P7 Integrated Science topics, with routes, diagrams, quizzes, practice banks, worksheet support and a quality audit.

Science is already pushed by the founder and has now been deepened further: all 8 topics include guided application/experiment tasks and 20 practice questions per topic.

### 3. P7 Social Studies is complete enough
Social Studies includes all 10 NCDC-aligned topics under **Living Together in Africa**.

Social Studies now has:
- `/social-studies/p7` landing page
- topic pages and practice pages
- diagrams for all 10 topics
- central question-bank and worksheet support
- 20-question practice banks per topic
- guided map/history/development tasks for every SST topic
- curriculum map at `content/curriculum/p7-social-studies.json`
- completion audit at `docs/ops/p7-social-studies-first-wave-audit-2026-07-01.md`

Honest status: **complete enough and now strengthened further**. Social Studies now has guided map/history/development tasks for all 10 topics and 20 practice questions per topic. All 10 topics are now on Lesson Structure v3 modular — Social Studies v3 rollout is complete.

### 4. P7 English is complete enough
English includes all 7 official NCDC Set One P7 English topics.

English now has:
- `/english/p7` landing page
- topic pages and practice pages
- all 7 official topics across Terms I–III
- central question-bank and worksheet support
- 20-question practice banks per topic
- guided writing-practice tasks for every English topic
- writing templates/diagrams for all 7 topics
- curriculum map at `content/curriculum/p7-english.json`
- quality audit at `docs/ops/p7-english-quality-audit-2026-07-01.md`

Honest status: **complete enough and now strengthened further**. English now has writing-practice packs on all 7 topics and 20 practice questions per topic, making the subject deeper despite having fewer official top-level topics than Maths. Later English improvements should focus on full comprehension passages, teacher marking rubrics and UNEB-style paper sections.

### 5. Religious Education is intentionally paused
Religious Education is **not being worked on for now**, per founder direction.

### 6. Teacher-facing usefulness pass started
The worksheet generator has been strengthened after the grouped Social Studies + English push.

Teacher worksheet improvements now include:
- subject question-pool summary cards
- class, term/week, time and marks fields
- quick length buttons
- custom instruction line
- clean pupil questions with a separate answer key
- clearer page copy around question-bank topics

Next teacher-facing improvements should add richer English writing tasks and more short-answer/scaffolded questions for Science, Social Studies and English.

### 7. Four-subject core closeout audit completed
The four-subject P7 core has now been audited after the teacher, English, Science and Social Studies deepening passes.

Current closeout verdict: **product-level complete for present scope**, with remaining work treated as enhancement and teacher-feedback iteration.

See: `docs/ops/four-subject-core-closeout-audit-2026-07-01.md`

### 8. Repo documentation is the source of truth
Root docs must stay current:
- `STATUS.md`
- `HANDOFF.md`
- `CHECKLIST.md`
- `DECISIONS.md`
- `CHANGELOG.md`

Operational notes should live under `docs/ops/` where useful.

---

## What is already in strong shape

### Product features already built
- Next.js app shell
- Topic pages with notes + quizzes
- Subject landing pages for Maths, English, Science and Social Studies
- Past papers
- Teacher dashboard
- Practice mode
- Worksheet generator
- Worksheet subject filters: Maths only / English only / Science only / Social Studies only / Mixed
- Watch / Read topic structure with in-read audio support
- Trainup branding layer and `/trainup` route

### Current subject totals
- Published P7 Mathematics topics: 38
- Published P7 Integrated Science topics: 8
- Published P7 Social Studies topics: 10
- Published P7 English topics: 7
- English practice questions: 140 total across 7 topics
- Science practice questions: 160 total across 8 topics
- Social Studies practice questions: 200 total across 10 topics
- Total central question-bank pool: 695 questions across 38 bank topics

---

## Lesson Structure v2 restructuring has started

A new child-friendly study-page structure has been introduced after founder/partner feedback that the current study content can feel insufficiently structured.

Lesson Structure v2 is now live in workspace for all 10 Social Studies topics, all 8 Integrated Science topics, all 7 English topics and all 38 Mathematics topics.

The new structure adds:
- Big idea
- Key words
- Learn it in parts
- Visual brief
- PLE tip

See: `docs/spec/tendo-lesson-structure-v2.md`

The grouped Lesson Structure v2 milestone has been pushed and verified live. Maths is fully converted across all 38 topics, all four active P7 subjects use the new study flow, and the visual layer has been aligned so visual briefs and diagrams act more like instructional teaching aids.

## What still needs work right now

### 1. Post-push verification and cleanup
The grouped Social Studies + English milestone is now live. The immediate next task is to verify live behaviour, clean stale documentation wording and tighten any teacher-facing rough edges.

### 2. Later enrichment for completed subjects
Possible future enhancements:
- richer exam-style banks for heaviest Science, SST and English topics
- more English composition/comprehension rubrics
- real UNEB paper tagging by subject
- teacher review and feedback pass
- more precise maps/diagrams if requested by teachers

---

## Immediate next steps

1. **Roll v3 structure to Integrated Science.** Structural migration first: wrap existing v2 content into NCDC-mapped subtopics/modules without losing content, then deepen module-by-module.
2. Roll v3 structure to Mathematics.
3. Continue collecting structured teacher/learner feedback on the modular flow.

---

## Operational reminders

- Push to `main` auto-promotes to production.
- The founder uses a **manual overwrite workflow** from downloaded workspace files into the GitHub-connected local copy.
- Every meaningful update must clearly state:
  - what changed
  - why it changed
  - which files changed
  - whether to overwrite or add each file
- Repo docs are the canonical record.
- Build command should run from `app/`, not repo root:
  - `cd app && npm run build`

See:
- `docs/ops/update-handoff-protocol.md`

---

## Cost so far

**UGX 0 / USD 0.** Still free-tier first.
