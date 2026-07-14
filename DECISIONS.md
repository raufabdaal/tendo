# DECISIONS — Tendo (append-only)

> Architecture, product, pilot, and workflow decisions. Historical entries are preserved. Superseded items stay for context.

---

## DEV-037 · 2026-07-14 · Strict P7 SST formatting: founder content in, agent structure out

**Context:** The founder clarified the active P7 Social Studies workflow. The founder provides the exact educational content. The agent's role is to dissect that content into digestible learner modules with a quiz/check for each module, not to invent additional syllabus facts.

**Decision:** P7 Social Studies strict-content modules should follow the founder's formatting standard: direct heading, definition beginning with `Is...` or `Are...`, short bullet fragments for types/examples/uses/importances/advantages/disadvantages, and bold high-utility UNEB keywords in the learner view.

**Implementation effect:** All five official P7 SST Topic 1 subtopics have been rewritten in `app/lib/social-topics.ts` using this strict format: `location-position-africa`, `world-continents-sizes`, `water-bodies-africa`, `regions-africa` and `countries-capitals-africa`. `SubtopicViewer.tsx` now renders `###` strict headings and `*` strict bullets cleanly, with supporting styles in `globals.css`.

**Guardrail:** Do not add conversational filler, curriculum meta-copy or unsourced facts. Future subtopics should use the founder-provided exact content and reformat it into app-ready modules and checks.

**Tracked across:** `app/lib/social-topics.ts`, `app/components/SubtopicViewer.tsx`, `app/app/globals.css`, `docs/ops/p7-sst-strict-formatting-pass-2026-07-14.md`.

---

## DEV-036 · 2026-07-13 · Every push/milestone handoff must include exact file overwrite/add/delete lists

**Context:** The founder uses a manual overwrite workflow to move workspace changes into the GitHub-connected local repository and may lose agent context between sessions. The founder explicitly requested that exact files-to-overwrite guidance be documented as a necessity for future agents.

**Decision:** Every meaningful milestone handoff and every “ready to push” response must include an exact file action list grouped as:

1. Files to overwrite.
2. Files to add.
3. Files to delete.
4. Files/folders not to copy.
5. Build status.
6. Suggested commit message.

**Implementation effect:** Future agents must not say “copy changed files” vaguely. They must name paths and actions clearly so the founder can apply the update safely.

**Tracked across:** `docs/ops/update-handoff-protocol.md`, `HANDOFF.md`, `STATUS.md`.

## DEV-035 · 2026-07-12 · V4 learner content must render as mobile-first modules/steps

**Context:** Founder approved the v4 direct lesson-block structure but found the first implementation too long and mismatched on mobile. Most users will use Tendo on phones, so the lesson experience must avoid long overwhelming scrolls.

**Decision:** V4 student-facing lessons must render as mobile-first modules/steps. Each lesson should show one content block/module at a time with a clear module number, progress meter, previous/next navigation and a finish action. If a topic has multiple v4 lessons/sub-topics, show a lesson selector first.

**Image rule:** Text-heavy diagrams and study cards must be readable on mobile. V4 image cards should use larger image treatment and allow horizontal swiping when labels would be too small at phone width.

**Implementation effect:** `V4LessonViews.tsx` is now the preferred renderer for the migration of P3–P7. Legacy v3 remains for unmigrated content only.

**Tracked across:** `app/components/V4LessonViews.tsx`, `app/app/globals.css`, `docs/ops/v4-content-architecture-pilot-2026-07-12.md`.


## DEV-034 · 2026-07-12 · P1 and P2 remain in the same app, but are deferred until after P3–P7 restructure

**Context:** After discussing whether to stop at P3 or split lower primary separately, the founder clarified that P1 and P2 should eventually be included in the same Tendo app, but not now.

**Decision:** Keep P1/P2 as future same-app classes, but defer them until P3–P7 student-facing content is restructured using the NCDC-native v4 content architecture.

**Reasoning:** P1/P2 need even more specialised lower-primary treatment: phonics, audio, local/familiar language, early literacy and very simple child-facing flows. Starting them before fixing P3–P7 would multiply the current structure problem.

**Implementation effect:** Do not start P1/P2 research or routes yet. Current active work is v4 restructuring for P3, P4, P5, P6 and P7.

**Tracked across:** `STATUS.md`, `HANDOFF.md`, `CHECKLIST.md`, `docs/spec/ncdc-native-content-architecture-v4-2026-07-12.md`.


## DEV-033 · 2026-07-12 · NCDC-native content architecture v4: fullness means direct lesson blocks, not meta modules

**Context:** Founder review found that the attempt to make content “full” by adding more modules and learning-objective wrappers is not working well, especially for P3, P4 and P5. The content often reads like a teacher curriculum guide rather than direct pupil teaching.

**Decision:** Move to an NCDC-native v4 content architecture. For learner-facing screens, content must be structured as direct lesson blocks: definitions, types/classifications, examples, characteristics/properties/uses, diagrams and exercises. Curriculum metadata such as expected outcomes, theme guides and “what you will learn” should remain internal/reviewer context, not the main child-facing lesson.

**Lower primary rule:** P1–P3 remain thematic, but the child-facing flow should be vocabulary/story/definition/types/examples/phonics/numeracy/activity/exercise, not meta curriculum explanations.

**Upper primary rule:** P4–P7 remain subject-based, with each sub-topic rendered in chalkboard-note style: definition → types/classifications → examples/illustrations → characteristics/properties/uses → evaluation.

**Implementation effect:** Stop expanding lower/middle-primary content using the current meta-module pattern. Next work should pilot the v4 block renderer on one P3 sub-theme and one P5 Science sub-topic before broad migration.

**Tracked across:** `docs/spec/ncdc-native-content-architecture-v4-2026-07-12.md`, `STATUS.md`, `HANDOFF.md`, `CHECKLIST.md`, `CHANGELOG.md`.


## DEV-032 · 2026-07-12 · P3 RE beta may use trusted faith sources under NCDC map control

**Context:** P3 Religious Education is outside the thematic matrix, but the official NCDC P3 PDF includes CRE and IRE topic maps. The extracted map needed review, but the founder clarified that valid CRE/IRE information already exists in trusted sources and should be gathered to build the best internal beta before teacher verification.

**Decision:** Build P3 RE beta from `content/curriculum/p3-re.json`, while cross-checking learner-facing faith facts against trusted sources: Bible passage sources for CRE, Quran.com for Qur'an references, Sunnah.com for hadith references, and reputable Arabic-reading references for basic vowels/harakat. Teachers remain the final review layer before premium-final status.

**Route model:**
- `/p3/re`
- `/p3/re/[topic]`

**Guardrail:** This does not permit forbidden subject-style P3 routes such as `/re/p3`, `/math/p3`, `/english/p3`, `/science/p3`, or `/social-studies/p3`. P3 remains thematic-first, and RE remains a clearly separate lower-primary RE section because NCDC places RE outside the thematic matrix.

**Tracked across:** `content/curriculum/p3-re.json`, `app/lib/p3-re-topics.ts`, `app/app/p3/re/page.tsx`, `app/app/p3/re/[topic]/page.tsx`, `docs/ops/p3-re-source-research-2026-07-12.md`.

---

## DEV-031 · 2026-07-09 · P3 must be thematic-first, not subject-route-first

**Context:** Official NCDC P3 curriculum is part of the P1–P3 Thematic Curriculum cycle. It is organised around 12 themes and 36 sub-themes, with Mathematics, Literacy, English, Creative Performing Arts, Life Skills and Values woven through the thematic matrix. Religious Education and Physical Education sit outside the matrix but align to the 12-theme timetable.

**Decision:** P3 learner-facing architecture must be **thematic-first**. Do not copy the P4–P7 subject-route model (`/math/p3`, `/science/p3`, etc.) as the primary structure unless a documented bridge design is approved.

**Recommended route model:**
- `/p3-home`
- `/p3/theme/[theme]`

**Reasoning:** A subject-first P3 app would misrepresent the NCDC lower-primary curriculum. The app should present the curriculum in a better form, not invent a fake P3 subject syllabus.

**Implementation effect:** P3 maps have been added, but no P3 routes/content should be built until the thematic app structure is implemented from those maps.

**Tracked across:** `content/curriculum/p3-thematic.json`, `content/curriculum/p3-re.json`, `docs/ops/ncdc-p3-curriculum-research-2026-07-09.md`, `docs/ops/p3-thematic-app-structure-2026-07-09.md`.

---



## DEV-030 · 2026-07-09 · Beta content must be built to premium standard before review

**Decision:** Live beta does not mean rough draft. Any content exposed to beta testers should be built to the best standard we can produce ourselves before external review.
**Reasoning:** Reviewers are a second safety layer, not a substitute for our own curriculum alignment and quality work. Premium parents will judge quality even during beta.
**Implementation effect:** P5 Mathematics and P5 English are marked beta and live, but they must still follow NCDC maps, contain complete lessons/examples/checks/quizzes, and receive internal passes before broader release.

---

## DEV-029 · 2026-07-09 · Non-negotiable content workflow: NCDC first, build second

**Decision:** No learner-facing class, subject, topic, practice bank or route should be treated as valid product work unless it starts from researched NCDC curriculum requirements.
**Required order:** research NCDC → document structure → create/update curriculum map → build content → review/correct → expose as premium-ready.
**Reasoning:** Tendo is the Ugandan primary curriculum in a better app form. If the app drifts away from NCDC, the product fails regardless of design quality.
**Implementation effect:** P5 draft app routes/content that were built before strict verification were removed; P5 remains at researched curriculum-map stage until verified.
**Tracked across:** `STATUS.md`, `HANDOFF.md`, `START_HERE.md`, `docs/ops/content-corrections-workflow-2026-07-09.md`, `docs/ops/primary-content-completion-roadmap-2026-07-09.md`.

---

## DEV-028 · 2026-07-09 · Premium parent-funded positioning and content-first roadmap

**Previous active direction:** Student-first direct-to-learner after archiving Trainup.
**New refinement:** The direct-to-learner product targets **premium parents** who already spend heavily on education and can pay for visible academic ROI.
**Working price assumption:** about UGX 50,000/month if Tendo feels premium, complete and trustworthy.
**Product priority:** finish and audit primary content first, starting with P7, then moving class by class.
**Dashboard priority:** Parent dashboard/ROI visibility becomes strategically more important than teacher dashboard expansion. Teacher/tutor tools remain useful but secondary.
**Reasoning:** Premium parents pay when they can see serious study, progress, weaknesses and recommendations. Content quality is the product.
**Tracked across:** `docs/ops/premium-parent-student-first-strategy-2026-07-09.md`, `docs/ops/primary-content-completion-roadmap-2026-07-09.md`, `docs/ops/parent-dashboard-roi-roadmap-2026-07-09.md`.

---

## DEV-027 · 2026-07-09 · Strategic pivot: student-first product, Trainup archived

**Previous direction:** Tendo was positioned as school-sold/B2B2C, with Trainup a Child Uganda treated as the active first pilot path.
**New decision:** Tendo is now a **student-first direct-to-parent/direct-to-learner product** for the premium parent market.
**Trainup status:** Archived historical context. Do not continue building product strategy around Trainup or any single school.
**Schools going forward:** Optional partners/distribution channels later, not the dependency for product progress.
**Reasoning:** School prospects can delay or ghost; the app must keep improving for students directly.
**Implementation:** Removed active `/trainup` route; updated README/START_HERE/STATUS/HANDOFF; created `docs/ops/strategic-pivot-student-first-2026-07-09.md`.
**Supersedes:** DEV-003 as the active go-to-market assumption and PILOT-001 as active product context. Historical entries remain for audit trail.

---

## DEV-022 · 2026-07-07 · Local role sign-in replaces visible class-lock onboarding as primary UX

**Previous decision:** DEV-002/DEV-015 style flow avoided login and used learner class lock only.
**New decision:** Tendo now uses a **local/device role sign-in gate** as UX scaffolding: Student or Teacher.
**Implementation:** `app/components/AuthGate.tsx`, `app/lib/auth-session.ts`.
**Reasoning:** The app needs separate experiences to remove mixed student/teacher clutter. Real backend auth can be added later without changing the core UX model.
**Status:** Local-only; not a secure production account system yet.

---

## DEV-023 · 2026-07-07 · Student and teacher navigation are different products

**Decision:** Students keep simple bottom-tab navigation. Teachers use a hamburger workspace menu.
**Student nav:** Home, Study, Practice, Papers.
**Teacher menu:** Teacher home, Content library, Worksheets, Past papers, Content reports, Switch account.
**Reasoning:** Students need persistent simple actions; teachers need more tools without cluttering the student interface.

---

## DEV-024 · 2026-07-07 · Students must only see their signed-in grade

**Decision:** A P7 student should not see P6 subject/practice cards, and a P6 student should not see P7 subject/practice cards. Wrong-grade routes redirect to the correct home.
**Implementation:** `AuthGate.tsx`, `StudyDirectory.tsx`, `PracticeHomeContent.tsx`.
**Reasoning:** Grade mixing created confusion and made the product feel less personal. Teachers can still access both grades through the content library.

---

## DEV-025 · 2026-07-07 · Production cleanup rule: remove explanation that does not drive action

**Decision:** Production screens should not show internal content counts, phase language, backlog notes, or mixed persona labels unless they directly help the current user act.
**Examples removed:** “topics live”, “study strands”, long subject-page intros, footer status notes, “Student mode / Teacher mode” cards, and coming-phase backlog cards.
**Reasoning:** The app is content-rich; production UX must reduce visible decision load, especially on phones.
**Detailed record:** `docs/ops/ux-auth-production-cleanup-2026-07-07.md`.

---


## DEV-026 · 2026-07-07 · Teacher-set questions require manual marking, not AI-first marking

**Decision:** Teacher-set questions are treated as manually marked by default. Students can write free-text answers; teachers enter scores and feedback.
**Implementation now:** localStorage scaffold via `teacher-questions.ts`, `/teacher/questions`, `/practice/teacher-questions`.
**Reasoning:** Teacher testers asked for control and trust. Manual marking also supports open-ended questions that multiple-choice cannot handle.
**Limitation:** Current implementation is device-local only; production requires backend storage and learner/teacher/class-group relationships. School relationships are optional later, not required for the core product.

---

## DEV-001 · 2026-06-24 · Scope = P6 & P7 only (PLE-bound), not P1

**Previous decision:** Founder's early brief implied P1 and P7.
**Problem reported:** Founder clarified that P1 was a typo and the correct scope is P6 and P7.
**New decision:** v0 serves **P7 first** and **P6 second**.
**Reasoning:** P6 and P7 are aligned around PLE preparation and are commercially much easier to serve together than P1 and P7.
**Tracked across:** `docs/spec/PRD.md`, `content/curriculum/p7-math.json`, sales docs.

---

## DEV-002 · 2026-06-24 · No login in v0; localStorage progress only

**Previous decision:** open question.
**New decision:** v0 has **no login**. Progress is stored in `localStorage`.
**Reasoning:** Faster demo, lower build complexity, zero cost, no sign-up friction for school pilots.
**Tracked across:** `docs/spec/PRD.md`, `preview.html`, app state handling.

---

## DEV-003 · 2026-06-24 · B2B2C model: sell to schools, schools resell to parents (SUPERSEDED by DEV-027)

**Previous decision:** model was still fluid.
**New decision:** **Schools are the customer.**
**Reasoning:** Better CAC, trusted payment channel, stronger distribution, better alignment with school incentives.
**Tracked across:** `docs/sales/*`, `docs/spec/PRD.md`.

---

## DEV-004 · 2026-06-24 · Hybrid AI-draft + human review content workflow

**Previous decision:** open question.
**New decision:** Content is drafted quickly, then reviewed and refined before school-facing use.
**Reasoning:** Faster than fully manual authoring, safer than unreviewed AI output.
**Tracked across:** `docs/spec/content-guidelines.md`, prompts, content workflow.

---

## DEV-005 · 2026-06-24 · Math only in v0; other subjects remain clearly marked as coming soon

**Previous decision:** broader subject ambition existed.
**New decision:** v0 ships **Mathematics only**.
**Reasoning:** Simplifies delivery and makes the strongest measurable school story.
**Tracked across:** home page, PRD, sales docs.

---

## DEV-006 · 2026-06-24 · Phase 1 content lives in TypeScript, not MDX

**Previous decision:** MDX had been considered.
**New decision:** Use `app/lib/topics.ts` as the main content layer for Phase 1 and the early product.
**Reasoning:** Faster iteration, strict typing, lower setup overhead.
**Tracked across:** `app/lib/topics.ts`, route implementation.

---

## DEV-007 · 2026-06-24 · Plain CSS, no Tailwind, no UI library

**Previous decision:** Tailwind was a possible direction.
**New decision:** Use plain CSS in `app/app/globals.css`.
**Reasoning:** Lower dependency load, clearer styling surface, simpler maintenance.
**Tracked across:** package setup and styling architecture.

---

## DEV-008 · 2026-06-24 · Pin to patched Next.js line

**Previous decision:** older Next.js version was used initially.
**Problem reported:** Vercel blocked deployment due to a vulnerable Next.js version.
**New decision:** Pin to the patched Next.js 15.x line (`15.5.19` at the time).
**Reasoning:** Security compliance and successful deploys.
**Tracked across:** `app/package.json`, `app/package-lock.json`.

---

## DEV-009 · 2026-06-25 · Teacher dashboard is localStorage-backed in v0 with honest limitations

**Previous decision:** no teacher-facing dashboard.
**New decision:** Build the dashboard now on `localStorage`, with honest framing that real multi-device reporting needs a later backend.
**Reasoning:** Preserves demo value without pretending a backend already exists.
**Tracked across:** `app/components/TeacherDashboard.tsx`.

---

## DEV-010 · 2026-06-25 · No streaks, no leaderboard, no parent app in v0

**Previous decision:** more gamified directions were discussed.
**New decision:** Explicitly keep v0 serious and restrained.
**Reasoning:** Better fit for school buyers and less product sprawl.
**Tracked across:** product scope, sales framing.

---

## DEV-011 · 2026-06-25 · Teacher dashboard is a stronger sales feature than video-first work

**Previous decision:** video had strong internal momentum.
**New decision:** Prioritise past papers, dashboard, and teacher-facing leverage before deeper video investment.
**Reasoning:** Schools buy reporting and seriousness faster than they buy media polish.
**Tracked across:** roadmap and Phase 2 / Phase 3 implementation.

---

## DEV-012 · 2026-06-25 · Teacher Fellowship as the feedback/QA strategy

**Previous decision:** no structured teacher contribution system.
**New decision:** Use teacher feedback/reporting plus a recognition model rather than a paid reviewer model.
**Reasoning:** Low-cost quality loop and stronger teacher buy-in.
**Tracked across:** `app/components/ReportProblem.tsx`, sales docs, strategy docs.

---

## DEV-013 · 2026-06-25 · Visible review-status pill on topics and papers

⚠️ **Superseded by DEV-016.** Kept here for historical continuity.

**Original decision:** show `verified` / `review pending` visibly in the UI.
**Reasoning at the time:** honest UI and content-status visibility.

---

## DEV-014 · 2026-06-25 · Practice mode and worksheet generator are separate jobs backed by one bank

**Previous decision:** no clear split existed.
**New decision:**
- **Practice mode** = student drill
- **Worksheet generator** = teacher-controlled printable sampling
**Reasoning:** Same content, different user jobs, better product clarity.
**Tracked across:** practice routes and worksheet generator routes/components.

---

## DEV-015 · 2026-06-25 · Watch stays as a tab; Listen becomes an in-read control

**Previous decision:** Watch / Listen / Read had equal tab weight.
**New decision:** Keep Watch as a placeholder/video slot, but demote Listen into the reading experience.
**Reasoning:** TTS is useful, but not strong enough to deserve equal visual weight.
**Tracked across:** `app/components/TopicTabs.tsx`, `app/app/globals.css`.

---

## DEV-016 · 2026-06-25 · Auto-verify content for ship-speed; keep `reviewStatus` internally

**Previous decision:** visible review-status UI from DEV-013.
**Problem reported:** time pressure made visible status labelling less useful than shipping and improving.
**New decision:**
- mark content as verified internally
- remove visible review-pill UI
- keep the field in the schema for future richer review attribution
**Reasoning:** faster shipping without losing future flexibility.
**Tracked across:** topic list UI, topic page UI, topic/paper data.

---

## DEV-017 · 2026-06-25 · Pre-generated question bank, not runtime AI generation

**Previous decision:** runtime AI generation had been considered.
**New decision:** Use a static question bank sampled by practice and worksheet flows.
**Reasoning:** zero cost, zero latency, higher reliability, easier quality control.
**Tracked across:** `app/lib/question-bank.ts`, practice and worksheet features.

---

## DEV-018 · 2026-06-25 · Per-topic optional `videoUrl` with placeholder-first UX

**Previous decision:** Watch tab had no path to a live embedded video.
**New decision:** Add optional `videoUrl` per topic and embed YouTube when present.
**Reasoning:** makes topic-level videos a one-line content change instead of a component rewrite.
**Tracked across:** `app/lib/topics.ts`, `app/components/TopicTabs.tsx`, `docs/ops/notebooklm-video-guide.md`.

---

## PILOT-001 · 2026-06-30 · First pilot customer: Trainup a Child Uganda, starting with one P7 Math class (ARCHIVED by DEV-027)

**Context:** A real school pilot opportunity exists.
**Decision:** Start with **one P7 Mathematics class** at Trainup a Child Uganda.
**Reasoning:** Small enough to observe and fix issues quickly, while still being meaningful evidence for broader rollout.
**Tracked across:** `docs/ops/trainup-pilot-plan.md`, `STATUS.md`, `HANDOFF.md`.

---

## PILOT-002 · 2026-06-30 · Position Tendo as study, not only revision

**Previous framing:** revision platform.
**New decision:** Reframe Tendo as a **study** platform.
**Reasoning:** Better matches the intended value, longer product relationship, and the type of content now being written.
**Tracked across:** proposal docs, pilot plan, topic-note rewrites.

---

## PILOT-003 · 2026-06-30 · School provides its own branding and can provide its own videos

**Decision:** For the Trainup pilot, the school-specific layer supports branding and topic-level video slots.
**Reasoning:** School-specific presentation improves credibility and buy-in.
**Tracked across:** school config layer, pilot plan, topic video support.

---

## PILOT-004 · 2026-06-30 · Fix answer-position bias before the school sees the product

**Problem reported:** Correct answers defaulted to option A in too many places.
**Decision:** Randomise answer positions across topic quizzes and the question bank.
**Reasoning:** This was a credibility blocker for real school use.
**Tracked across:** `app/lib/topics.ts`, `app/lib/question-bank.ts`, `scripts/shuffle-correct-answers.js`.

---

## WORKFLOW-001 · 2026-06-30 · Manual overwrite workflow is the default delivery method

**Context:** The founder applies workspace changes manually to the GitHub-connected local copy.
**Decision:** Every meaningful update must clearly state:
- what changed
- why it changed
- which files changed
- whether to overwrite or add each file
**Reasoning:** Cleaner commits, safer merges, and lower risk of overwriting unrelated files.
**Tracked across:** `docs/ops/update-handoff-protocol.md`, session reporting style.

---

## WORKFLOW-002 · 2026-07-01 · Repo docs are now the source of truth for active project state

**Context:** Important operating notes had been split between the repo and external workspace docs.
**Decision:** Active project documentation should live inside `tendo-ug`, with root tracking docs kept current and high-value operational notes stored under `docs/ops/`.
**Reasoning:** This is safer for the founder's manual overwrite workflow and safer as a GitHub-backed record.
**Tracked across:** `STATUS.md`, `HANDOFF.md`, `CHECKLIST.md`, `CHANGELOG.md`, `docs/ops/*`.

---

## SUBJECT-001 · 2026-07-01 · P7 Mathematics can now be treated as complete enough to move focus

**Context:** Maths had been the highest-pressure subject and had to be finished honestly before attention shifted elsewhere.
**Decision:** Treat P7 Mathematics as done for current product scope, with any further maths work considered enhancement unless a materially missing curriculum issue is discovered.
**Reasoning:** Maths now has broad coverage, aligned practice, improved structure, and explicit visual planning; remaining issues are polish and enrichment rather than core subject-completion blockers.
**Tracked across:** `docs/ops/p7-maths-final-completion-audit-2026-07-01.md`, `app/lib/topics.ts`, `app/app/math/p7/page.tsx`, root tracking docs.

---

## SUBJECT-002 · 2026-07-01 · P7 Integrated Science became the second active subject before Social Studies

**Context:** After Mathematics was completed, the working docs expected Social Studies next. The founder redirected the next-subject push to Science instead.
**Decision:** Build **P7 Integrated Science** as the next active subject before Social Studies.
**Reasoning:** The founder chose Science as the immediate next pressure subject, and the NCDC P7 Integrated Science syllabus has a clear 8-topic structure suitable for a grouped build.
**Tracked across:** `app/lib/science-topics.ts`, `content/curriculum/p7-science.json`, Science routes, `docs/ops/p7-science-quality-audit-2026-07-01.md`, root tracking docs.

---

## DEV-019 · 2026-07-01 · Worksheet generator supports subject filtering

**Context:** Adding Science to the central question bank made the teacher worksheet topic list crowded and potentially confusing.
**Decision:** Add subject filters for **Maths only**, **Science only**, and **Mixed** worksheets.
**Reasoning:** Teachers need control over worksheet scope now that Tendo is multi-subject. Filtering keeps the UI usable while still allowing mixed revision worksheets.
**Tracked across:** `app/lib/question-bank.ts`, `app/components/WorksheetGenerator.tsx`, `app/app/teacher/worksheet/page.tsx`.

---

## CONTENT-001 · 2026-07-01 · Sensitive Science health wording must be safety-focused and age-appropriate

**Context:** The NCDC P7 Integrated Science `Population and Health` topic includes outdated/sensitive wording around social problems among young people.
**Decision:** Do not reproduce harmful or explicit wording directly in learner-facing content. Use respectful, safety-focused, adult-guided language while preserving curriculum intent around community health and safe behaviour.
**Reasoning:** P7 learners need protection, clarity and respect. The app should support teachers and pupils without normalising stigma or unsafe phrasing.
**Tracked across:** `app/lib/science-topics.ts`, `docs/ops/p7-science-quality-audit-2026-07-01.md`.

---

## SUBJECT-003 · 2026-07-01 · P7 Social Studies is complete enough for current product scope

**Context:** After Science was pushed, Social Studies became the next active subject. The NCDC P7 SST syllabus has one broad theme, Living Together in Africa, with 10 official topics.
**Decision:** Treat P7 Social Studies as done enough to move on after completing the topic build, routes, practice banks, worksheet support, diagrams, heavy-topic depth pass and completion audit.
**Reasoning:** SST now has all official topics live and has passed the same “done enough” standard used for Maths and Science. Remaining work is enhancement, teacher review and future exam-paper integration.
**Tracked across:** `app/lib/social-topics.ts`, `content/curriculum/p7-social-studies.json`, `app/app/social-studies/*`, `app/components/TopicDiagram.tsx`, `app/lib/question-bank.ts`, `docs/ops/p7-social-studies-first-wave-audit-2026-07-01.md`.

---

## SUBJECT-004 · 2026-07-01 · P7 English is complete enough for current product scope

**Context:** The founder chose to continue into English before the grouped Social Studies + English push, with Religious Education explicitly paused.

**Decision:** Treat P7 English as done enough for current product scope after completing all 7 official NCDC topics, routes, practice banks, worksheet support, writing templates, writing-heavy depth passes and the English quality audit.

**Reasoning:** English now meets the same product-completion standard used for Maths, Science and Social Studies. Remaining English work — deeper composition rubrics, more comprehension passages, UNEB-style tagging and teacher marking guides — is enhancement rather than a blocker.

**Tracked across:** `app/lib/english-topics.ts`, `content/curriculum/p7-english.json`, `app/app/english/*`, `app/components/TopicDiagram.tsx`, `app/lib/question-bank.ts`, `app/components/WorksheetGenerator.tsx`, `docs/ops/p7-english-quality-audit-2026-07-01.md`, root tracking docs.

---

## TEACHER-002 · 2026-07-01 · Worksheet generator should produce classroom-ready sheets

**Context:** After four P7 subjects were active, the teacher worksheet generator became one of the highest-value classroom tools. The founder asked to improve teacher-facing usefulness before deepening the non-maths subjects further.

**Decision:** Upgrade worksheets from basic generated quizzes into more classroom-ready sheets with metadata, marks, timing, custom instructions, clearer subject pools and a separate answer key.

**Reasoning:** Teachers need printable materials that can be used immediately in class, not just app-generated question lists. Separating the answer key also makes pupil handouts cleaner and more realistic.

**Tracked across:** `app/components/WorksheetGenerator.tsx`, `app/app/teacher/worksheet/page.tsx`, `app/app/globals.css`, `docs/ops/teacher-worksheet-usefulness-pass-2026-07-01.md`.

---

## CONTENT-002 · 2026-07-01 · English depth is measured by writing richness, not maths-style topic count

**Context:** The founder noticed that English, Science and Social Studies have fewer top-level topics than Mathematics. The official English outline has fewer broad themes, but each theme requires deeper writing, grammar, vocabulary, comprehension and communication practice.

**Decision:** Do not inflate English by inventing unnecessary topic pages. Instead, deepen each official English topic with writing prompts, planning steps, marking checklists, model openings and a larger practice bank.

**Reasoning:** This keeps Tendo aligned to the NCDC outline while making English genuinely useful for PLE preparation and classroom teaching.

**Tracked across:** `app/lib/topics.ts`, `app/components/TopicTabs.tsx`, `app/lib/english-topics.ts`, `app/lib/question-bank.ts`, `docs/ops/p7-english-deepening-pass-2026-07-01.md`.

---

## CONTENT-003 · 2026-07-01 · Science depth is measured by application and experiment readiness

**Context:** Science has fewer official top-level topics than Mathematics, but each topic needs observation, experiment, application, diagram and safety practice.

**Decision:** Deepen Science by adding guided application/experiment tasks and increasing practice-bank depth, rather than inventing non-official extra topic pages.

**Reasoning:** This keeps Tendo aligned with the NCDC Science outline while making each broad Science topic more useful for classroom teaching and PLE preparation.

**Tracked across:** `app/lib/science-topics.ts`, `app/lib/question-bank.ts`, `app/components/TopicTabs.tsx`, `docs/ops/p7-science-deepening-pass-2026-07-01.md`.

---

## CONTENT-004 · 2026-07-01 · Social Studies depth is measured by map, source and case-study readiness

**Context:** Social Studies has fewer official top-level topics than Mathematics because NCDC organises P7 SST under the broad theme Living Together in Africa.

**Decision:** Deepen Social Studies through guided map tasks, history/source reasoning, country case studies, development problem-solving and organisation-function practice instead of inventing extra topic pages.

**Reasoning:** This preserves curriculum alignment while making SST more useful for PLE preparation and classroom teaching.

**Tracked across:** `app/lib/social-topics.ts`, `app/lib/question-bank.ts`, `docs/ops/p7-social-studies-deepening-pass-2026-07-01.md`.

---

## PRODUCT-005 · 2026-07-01 · Four-subject P7 core is product-level complete for current scope

**Context:** After Maths completion, Science, Social Studies and English were built, pushed and then deepened. The teacher worksheet generator was also improved for classroom use.

**Decision:** Treat the four-subject P7 core — Mathematics, English, Integrated Science and Social Studies — as product-level complete for the present Tendo scope.

**Reasoning:** The app now has four active subjects, guided practice for English/Science/SST, strong central question-bank totals, worksheet generation for all four subjects, audit documentation and a passing production build. Remaining work is enhancement, teacher feedback and future exam-paper/marking-rubric sophistication rather than core subject completion.

**Tracked across:** `docs/ops/four-subject-core-closeout-audit-2026-07-01.md`, `STATUS.md`, `HANDOFF.md`, `CHECKLIST.md`, `CHANGELOG.md`.

---

## CONTENT-005 · 2026-07-02 · Study pages should use Lesson Structure v2

**Context:** Founder/partner feedback identified that study pages can feel insufficiently structured for children and that many visuals/images feel off.

**Decision:** Introduce Lesson Structure v2 as the standard for study pages: Big idea, key words, learn-it-in-parts sections, instructional visual brief, PLE tip, worked example, mistakes, try-this, guided practice and recap.

**Reasoning:** P7 learners need concise, scaffolded lessons rather than long note blocks. Visuals should be instructional diagrams/maps/flows, not decorative images. The `note.study` field now powers the standard study flow across all four active P7 subjects.

**Tracked across:** `docs/spec/tendo-lesson-structure-v2.md`, `app/lib/topics.ts`, `app/lib/english-topics.ts`, `app/lib/science-topics.ts`, `app/lib/social-topics.ts`, `app/components/TopicTabs.tsx`, `app/components/TopicDiagram.tsx`, `app/app/globals.css`.

---

## CONTENT-006 · 2026-07-02 · Lesson Structure v3: move from flat topics to hierarchical modules

**Context:** The founder observed that AI-generated topic pages still compress content because the generation target (one whole topic) and the UI (one scrolling page) silently negotiate down to a summary. This is the "summary trap": a full NCDC topic is too broad for one generation or one page view.

**Decision:** Introduce Lesson Structure v3, a hierarchical module architecture. A `Topic` becomes a directory of `Subtopic`s; each `Subtopic` maps to one NCDC sub-competency and contains small, paginated `Module`s. Content is generated one module at a time.

**Reasoning:**
- Smaller generation targets allow deeper explanations, more local context, fuller worked examples and step-by-step scaffolding.
- The UI stops scrolling forever; learners see a subtopic directory and then focus on one module at a time.
- The data model is backward-compatible: `subtopics` is optional, and topics without it keep rendering v2 or legacy content.
- Migration is subject-by-subject, topic-by-topic, so the rest of the app stays stable.

**Scope rule for the spike:** Only `location-of-africa` in Social Studies uses v3. All other SST topics and all other subjects remain on v2 until the modular flow is reviewed.

**Tracked across:** `docs/spec/tendo-lesson-structure-v3-modular.md`, `app/lib/topics.ts`, `app/lib/social-topics.ts`, `app/components/TopicTabs.tsx`, `app/app/globals.css`.

---

## CONTENT-007 · 2026-07-03 · Modular v3 roll-out: Social Studies first, then other subjects

**Context:** The founder approved the v3 modular architecture and wants it applied across all subjects and topics.

**Decision:** Convert the remaining 9 Social Studies topics to v3 first, using `location-of-africa` as the exact template. Only after Social Studies is fully modular and reviewed should v3 be rolled to Mathematics, Integrated Science and English.

**Reasoning:**
- SST is the smallest active subject group after the pilot topic (10 topics total), so it is the cheapest place to prove the full-subject modular workflow.
- Keeping one subject together makes cross-topic consistency easier to audit.
- Other subjects can be converted using the same template once it has been stress-tested across a whole subject.

**Tracked across:** `docs/ncdc-extracts/*`, `app/lib/social-topics.ts`, `STATUS.md`, `CHECKLIST.md`.

---

## CONTENT-008 · 2026-07-03 · NCDC sourcing is the hard requirement; no invented curriculum facts

**Context:** As content expands to every topic, the risk of invented countries, capitals, definitions or competencies increases.

**Decision:** Every modular conversion must be sourced from the NCDC PDF (`tmp/p7-set-one.pdf`) and the curriculum JSON (`content/curriculum/p7-social-studies.json`). Each converted topic gets its own deep-extract document under `docs/ncdc-extracts/` showing the exact NCDC sub-topics, competences and factual lists used.

**Reasoning:**
- Deep extracts create an auditable trail between the NCDC source and the app content.
- They become the template for the agent when generating modules for other topics.
- They make it easy for a human reviewer to verify that nothing was invented.

**Tracked across:** `docs/ncdc-extracts/`, `app/lib/social-topics.ts`.

---

## DEV-020 · 2026-07-03 · Content issue reporting: no backend, GitHub issue + localStorage

**Context:** The founder wants teachers or anyone using the live site to flag content problems, but does not want to build or maintain a backend yet.

**Decision:** Add an in-app “Report an issue with this content” button on modular topic pages. Submitting the form:
1. Saves the report to browser `localStorage` for on-device review.
2. Opens a pre-filled GitHub issue in a new tab so developers see it in the repo.

**Reasoning:**
- No backend, no auth, no cost.
- Developers can triage, discuss and fix issues through the existing GitHub workflow.
- The localStorage copy gives teachers/reviewers an immediate record on their own device.

**Tracked across:** `app/components/ReportContentIssue.tsx`, `app/app/teacher/content-reports/page.tsx`, `app/components/TopicTabs.tsx`, `app/app/teacher/page.tsx`.

---

## DEV-021 · 2026-07-05 · Primary Six (P6) Expansion Strategy & Grade Switcher

**Context:** With all 5 official NCDC Primary Seven (P7) PLE subjects 100% complete, fully audited, and running on Lesson Structure v3, the platform is expanding to support Primary Six (P6).

**Decision:**
1. Create grade-specific curriculum JSONs under `content/curriculum/p6-*.json`.
2. Implement a unified home grade switcher (`Primary 6` vs `Primary 7`) and grade-scoped routes (`/[subject]/p6/` and `/[subject]/p7/`).
3. Author P6 content using the same proven Lesson Structure v3 modular architecture (`app/lib/p6-*.ts`), ensuring every module contains `bigIdea`, multi-paragraph `learnIt`, numerical/moral `workedExample`, and `tryThis`.

**Reasoning:**
- P6 is the foundational upper-primary grade preparing learners for PLE consolidation in P7.
- Maintaining identical architectural structures across P6 and P7 maximizes UI component reuse (`TopicTabs`, `PracticeRunner`, `WorksheetGenerator`).

**Tracked across:** `docs/spec/p6-expansion-milestones.md`, `content/curriculum/p6-*.json`, `app/app/page.tsx`.
