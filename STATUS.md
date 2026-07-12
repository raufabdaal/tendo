# STATUS — Tendo

*Updated: 2026-07-12 · Current working state locked*

> **Current state:** Tendo is a premium, child-friendly study platform for Ugandan primary learners. P7, P6, P5 and P4 are live across all 5 app subjects as beta/live content, and P3 is now live as a thematic-first beta across all 12 official NCDC P3 themes.





# NON-NEGOTIABLE RULE: NCDC FIRST, BUILD SECOND

For every class and every subject, Tendo must follow this order:

1. **Research the official NCDC curriculum requirements.**
2. **Document the subject/class structure clearly.**
3. **Create or update the curriculum map.**
4. **Build learner-facing content from that map only.**
5. **Review and correct content before exposing it as premium-ready.**

If a topic, route, subject, class or practice bank is not aligned to the NCDC curriculum, it should not be treated as valid product work. We are building the curriculum in a better app form — not inventing our own syllabus.

---

# BETA QUALITY RULE: LIVE BETA DOES NOT MEAN ROUGH DRAFT

When content is marked beta, it should still be built to the best standard we can produce ourselves. Beta means it is live for testers to review and catch remaining mistakes; it does **not** mean incomplete, careless, filler or low-quality work is acceptable.

Builder responsibility before beta:
1. Follow the NCDC map.
2. Build complete lessons, examples, checks and quizzes.
3. Do our own correction pass.
4. Run the build.
5. Then expose for beta review.

Reviewers are a second safety layer, not a replacement for our own quality work.

---

## CURRENT OPERATING SNAPSHOT — READ FIRST

### Strategy
Tendo is now a **premium parent-funded, student-first study product**. We are not building around Trainup or any school-first dependency. Schools can become partners later, but the product must keep improving for learners and paying parents directly.

### Paying customer
Premium parents/guardians who already spend heavily on education and can justify around **UGX 50,000/month** if Tendo shows clear academic ROI.

### Primary user
Students, currently spanning **P7**, **P6**, **P5**, **P4 live beta**, and **P3 live beta**. Teachers/tutors remain supporting users. Parent visibility is strategically more important than expanding the teacher dashboard right now.

### Current product status
- P7 content exists across all 5 subjects.
- P6 content exists across all 5 subjects.
- P6 Mathematics, English, Science, Social Studies and Religious Education premium strengthening have started; all current P6 topics gained premium practice/application subtopics.
- P5 curriculum maps have been corrected against researched NCDC P5 Set One structure for all 5 subjects.
- The earlier P5 Mathematics/English draft routes were removed because P5 must not be exposed prematurely.
- P5 Mathematics, English, Science, Social Studies and Religious Education are now live as beta: sign-in supports P5, `/p5-home` exists, all P5 subject routes are live, and content is marked beta for tester review.
- P3 is confirmed as NCDC Thematic Curriculum, not P4–P7 subject-based. Added `content/curriculum/p3-thematic.json` and `content/curriculum/p3-re.json`. P3 thematic beta is now built and internally polished across all 12 official themes: `/p3-home` plus `/p3/theme/[theme]` for 12 themes, 36 sub-themes, 108 thematic modules and 36 sub-theme visuals. P3 Religious Education beta is now also built separately at `/p3/re` and `/p3/re/[topic]` with 18 CRE/IRE topics, 54 RE modules and trusted-source cross-checks; qualified CRE/IRE teacher review is still required before premium-final status.
- P4 curriculum research has started. English, Integrated Science, Social Studies and Religious Education maps exist; P4 Mathematics has been verified and corrected against the official NCDC P4 Mathematics PDF. P4 Religious Education is mapped from the NCDC/MoES Primary 4 Abridged Curriculum and still needs a full standard P4 RE syllabus check before premium-final status. P4 is now live beta across all 5 app subjects: Mathematics, English, Integrated Science, Social Studies and Religious Education. P4 RE is built from the NCDC/MoES Primary 4 Abridged Curriculum and remains beta until full standard P4 CRE/IRE syllabus confirmation.
- P7 Mathematics has started its premium-strengthening pass; the thinnest five topics were upgraded.
- P7 English premium strengthening has started; all 7 topics gained premium exam-practice subtopics for comprehension/writing/grammar quality.
- P7 Science premium strengthening has started; all 8 topics gained premium application/case-practice subtopics.
- P7 Social Studies premium strengthening has started; all 10 topics gained premium reasoning/casework subtopics.
- P7 Religious Education premium strengthening has started; all 14 CRE/IRE topics gained premium application subtopics.
- Teacher-set questions, student writing space and manual marking are scaffolded locally.
- Auth is still local/device-only. Backend auth is documented but not started.
- Teacher dashboard now auto-populates with presentation/sample data unless `NEXT_PUBLIC_TENDO_PRESENTATION_DATA=off`.

### Current active milestone
**P3 thematic + RE beta — internally polished; teacher review next.**

Immediate sequence:
1. Human/teacher review the full P3 thematic beta: `/p3-home` and all 12 `/p3/theme/[theme]` pages.
2. Human/teacher review P3 RE beta: `/p3/re` and all 18 `/p3/re/[topic]` pages, especially CRE/IRE terminology and source fidelity.
3. Check P3 language level, local/familiar examples, health/gender/culture safety wording, image usefulness and quiz clarity.
4. Do not build subject-style P3 routes such as `/math/p3` or `/re/p3` unless a documented bridge design is approved.
5. Continue P4 RE source work: find the full standard P4 CRE/IRE syllabus to confirm the NCDC-abridged map.
6. Human/teacher review remains open across P3–P7 before premium-final status.

### Content architecture correction — READ BEFORE MORE CONTENT BUILD
Founder review identified a serious content-structure issue: adding more modules does not automatically make lessons full or child-friendly. P3/P4/P5 especially must stop showing curriculum meta-copy such as “expected outcome”, “theme guide”, “what you will learn” and “this part helps a learner...”. Learner-facing lessons need direct teaching blocks: definitions, types/classifications, examples, characteristics/uses and exercises. This is documented in `docs/spec/ncdc-native-content-architecture-v4-2026-07-12.md` and logged as `DEV-033`. The first v4 pilot is now implemented on `/p3/theme/p3-theme-6-plants` and `/science/p5/p5-keeping-poultry-bees`, and it now uses a mobile-first module/stepper flow instead of one long scroll.

### P1/P2 scope note
Founder has decided **P1 and P2 will eventually be in the same app**, but they are deferred. Do **not** start P1/P2 now. First restructure P3–P7 student-facing content using the v4 architecture. P1/P2 will need their own later NCDC research and lower-primary phonics/audio/local-language implementation plan.

### Push status
Founder has **not pushed** the current milestone bundle yet. Do not assume the remote repo has these latest changes. When founder is ready, provide a clear overwrite/add file list for the whole milestone.

### Key docs for this state
- `HANDOFF.md` — no-context restart and exact next tasks.
- `CHECKLIST.md` — active milestones and push state.
- `DECISIONS.md` — DEV-027 and DEV-028 are the active strategic decisions.
- `docs/ops/primary-content-completion-roadmap-2026-07-09.md` — content rollout plan.
- `docs/ops/content-corrections-workflow-2026-07-09.md` — how to fix/restructure content safely.
- `docs/ops/ncdc-p5-curriculum-research-2026-07-09.md` — researched P5 curriculum structure and correction note.
- `docs/ops/ncdc-p3-curriculum-research-2026-07-09.md` — P3 official NCDC thematic curriculum research and mapping.
- `docs/ops/p3-thematic-app-structure-2026-07-09.md` — P3 thematic-first app structure decision.
- `docs/ops/p3-thematic-beta-completion-2026-07-12.md` — P3 full thematic beta completion note.
- `docs/ops/p3-review-polish-pass-2026-07-12.md` — P3 thematic polish + RE beta review pass.
- `docs/ops/p3-re-source-research-2026-07-12.md` — P3 RE trusted source register and beta build note.
- `docs/spec/ncdc-native-content-architecture-v4-2026-07-12.md` — required v4 content structure correction.
- `docs/ops/v4-content-architecture-pilot-2026-07-12.md` — first v4 implementation pilot.
- `docs/ops/ncdc-p4-curriculum-research-2026-07-09.md` — P4 curriculum research, verified Mathematics correction, P4 RE abridged-map limitation, and full P4 live-beta rollout.
- `docs/ops/p4-live-beta-completion-audit-2026-07-09.md` — P4 completion audit, file list, source limits and review checklist.
- `docs/ops/p4-p7-live-beta-review-pass-2026-07-09.md` — P4–P7 AI-level review pass before starting the next class.
- `docs/ops/p4-p5-visuals-depth-pass-2026-07-09.md` — closed P4/P5 visuals/depth pass before P3.
- `docs/ops/curriculum-alignment-audit-p5-p7-2026-07-09.md` — current P5/P6/P7 topic alignment audit.

---

## Strategic pivot — student-first path (2026-07-09)

Tendo is now being built for the **direct student/parent market**, not around one school pilot or a school-first sales path.

- Trainup a Child Uganda is archived historical context, not the active product direction.
- The active product is for P6/P7 learners and premium parents to use directly.
- Teachers, tutors and parents remain important supporting users.
- Schools may become optional partners later, but product progress should not wait for schools.
- The old school-specific `/trainup` route has been removed from the app.

Source of truth: `docs/ops/strategic-pivot-student-first-2026-07-09.md`.

---


## Premium parent-funded direction (2026-07-09)

The latest commercial direction is **premium direct-to-parent / student-first**.

- We are targeting parents already spending heavily on education, not a mass-market free product.
- Working price assumption: around **UGX 50,000/month** if the app feels premium and shows clear ROI.
- The top priority is now completing and polishing the core study content, starting with **Primary 7**.
- After P7, we move systematically class by class.
- Teacher dashboard is no longer central; keep teacher/tutor tools, but do not let them distract from student content and parent ROI.
- Parent dashboard/ROI visibility is strategically important and should be designed around usage, strengths, weaknesses and recommendations.

New docs:
- `docs/ops/premium-parent-student-first-strategy-2026-07-09.md`
- `docs/ops/primary-content-completion-roadmap-2026-07-09.md`
- `docs/ops/p7-math-premium-audit-2026-07-09.md`
- `docs/ops/content-corrections-workflow-2026-07-09.md`
- `docs/ops/parent-dashboard-roi-roadmap-2026-07-09.md`

---

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
- Added local teacher-set questions and manual marking scaffold, plus writing space on quizzes, practice and papers.
- Presentation/sample data now auto-populates teacher dashboard unless `NEXT_PUBLIC_TENDO_PRESENTATION_DATA=off`. Student progress bars were made fuller for demos.

### Current known strategic/content work
- P7 Mathematics premium strengthening has started: Integers, Time, Data Handling, Measurement/Money and Algebra were upgraded. Founder/human review still needed.
- Parent dashboard/ROI design is strategically more important than teacher dashboard expansion.
- Manual real-device testing is still needed at 320/340/360/390/414/430px widths.
- Current auth is local/device-only UX scaffolding; real backend auth remains a future implementation task.

Detailed handoffs:
- `docs/ops/strategic-pivot-student-first-2026-07-09.md`
- `docs/ops/ux-auth-production-cleanup-2026-07-07.md`
- `docs/ops/teacher-questions-manual-marking-2026-07-07.md`
- `docs/ops/parent-teacher-dashboard-requirements-2026-07-07.md`
- `docs/ops/auth-backend-roadmap-2026-07-07.md`

---

## Current focus

### 1. P7 premium content completion
The active work is now to audit and strengthen P7 until it is premium-ready for paying parents. Start with Mathematics, then English, Science, Social Studies and Religious Education. See `docs/ops/primary-content-completion-roadmap-2026-07-09.md`.

### 2. Parent dashboard / ROI visibility
Parent visibility is the next strategic dashboard priority. Teacher tools remain useful, but the parent is the paying customer. See `docs/ops/parent-dashboard-roi-roadmap-2026-07-09.md`.

### Historical/completed: Primary Six (P6) Expansion Strategy & Roadmap
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
1. Continue direct-to-student product polish and real-device testing.
2. Keep teacher/tutor workflows useful, but do not depend on a school pilot to move forward.

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
- Teacher-set questions, manual marking, writing space, and presentation sample data

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
