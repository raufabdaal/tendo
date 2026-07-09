# CHECKLIST — Tendo execution tracker

*Updated: 2026-07-09*






## Phase 20 — P6 Premium Content Completion
- [x] Start P6 premium audit
- [x] Add premium practice subtopics to all 6 P6 Mathematics topics
- [x] Add premium practice subtopics to all 5 P6 English topics
- [x] Build passed after P6 Maths/English strengthening (`npm run build`, 188 static pages)
- [ ] Human/founder review upgraded P6 Mathematics topics
- [ ] Human/founder review upgraded P6 English topics
- [x] Audit P6 Science premium standard
- [x] Add premium practice subtopics to all 5 P6 Science topics
- [x] Build passed after P6 Science strengthening (`npm run build`, 188 static pages)
- [ ] Human/founder review upgraded P6 Science topics
- [x] Audit P6 Social Studies premium standard
- [x] Add premium practice subtopics to all 6 P6 Social Studies topics
- [x] Build passed after P6 Social Studies strengthening (`npm run build`, 188 static pages)
- [ ] Human/founder review upgraded P6 Social Studies topics
- [x] Audit P6 Religious Education premium standard
- [x] Add premium practice subtopics to all 6 P6 Religious Education topics
- [x] Build passed after P6 Religious Education strengthening (`npm run build`, 188 static pages)
- [ ] Human/founder/teacher review upgraded P6 Religious Education topics

---

## Phase 19 — P7 Premium Content Completion
- [x] Identify thinnest P7 Maths topics
- [x] Upgrade P7 Maths: Integers
- [x] Upgrade P7 Maths: Time
- [x] Upgrade P7 Maths: Data Handling and Graphs
- [x] Upgrade P7 Maths: Length, Mass, Capacity and Money
- [x] Upgrade P7 Maths: Algebra
- [x] Document P7 Maths premium audit
- [x] Build passed after P7 Maths strengthening (`npm run build`, 188 static pages)
- [ ] Human/founder review upgraded P7 Maths topics
- [x] Start P7 English premium audit
- [x] Strengthen P7 English comprehension/writing/grammar practice
- [x] Add premium exam-practice subtopics to all 7 P7 English topics
- [x] Build passed after P7 English strengthening (`npm run build`, 188 static pages)
- [ ] Human/founder review upgraded P7 English topics
- [x] Audit P7 Science premium standard
- [x] Add premium application subtopics to all 8 P7 Science topics
- [x] Build passed after P7 Science strengthening (`npm run build`, 188 static pages)
- [ ] Human/founder/teacher review upgraded P7 Science topics
- [x] Audit P7 Social Studies premium standard
- [x] Add premium reasoning subtopics to all 10 P7 Social Studies topics
- [x] Build passed after P7 Social Studies strengthening (`npm run build`, 188 static pages)
- [ ] Human/founder review upgraded P7 Social Studies topics
- [x] Audit P7 Religious Education premium standard
- [x] Add premium application subtopics to all 14 P7 RE topics
- [x] Build passed after P7 Religious Education strengthening (`npm run build`, 188 static pages)
- [ ] Human/founder/teacher review upgraded P7 Religious Education topics
- [ ] Prepare milestone push file list when founder is ready

---

## Phase 18 — Premium parent/content-first direction
- [x] Lock premium parent-funded positioning
- [x] Document working price assumption around UGX 50,000/month
- [x] Make P7 premium content completion the active priority
- [x] Document class-by-class content rollout roadmap
- [x] Document content correction/restructure workflow
- [x] Document parent dashboard / ROI roadmap
- [x] Log decision `DEV-028` in `DECISIONS.md`
- [x] Build passed after premium strategy updates (`npm run build`, 188 static pages)
- [x] Start P7 Mathematics premium audit and strengthening
- [x] Upgrade thin P7 Maths topics: Integers, Time, Data Handling, Measurement/Money and Algebra
- [x] Document P7 Maths premium audit (`docs/ops/p7-math-premium-audit-2026-07-09.md`)
- [x] Build passed after P7 Maths strengthening (`npm run build`, 188 static pages)
- [ ] Human/founder review upgraded P7 Maths topics
- [ ] Design parent dashboard MVP around usage, weaknesses and recommendations

---

## Phase 17 — Strategic pivot to student-first product
- [x] Lock strategy: Tendo is now student-first/direct-to-learner
- [x] Archive Trainup as historical context, not active path
- [x] Remove active `/trainup` app route
- [x] Update app metadata away from school-sold positioning
- [x] Update README and START_HERE for student-first direction
- [x] Add strategic pivot handoff (`docs/ops/strategic-pivot-student-first-2026-07-09.md`)
- [x] Log decision `DEV-027` in `DECISIONS.md`
- [x] Build passed after removing Trainup route (`npm run build`, 188 static pages)

---

## Phase 13 — Role-based UX shell and production declutter
- [x] Add local/device sign-in gate (`AuthGate.tsx`, `auth-session.ts`)
- [x] Split student and teacher experiences after sign-in
- [x] Student mobile nav kept as bottom tabs
- [x] Teacher nav converted to hamburger menu
- [x] Teacher workspace includes content-library access for lesson inspiration
- [x] Student Study page shows only signed-in grade content
- [x] Student Practice page shows only signed-in grade practice
- [x] Wrong-grade student routes redirect back to the correct student home
- [x] Student home decluttered into a true home screen
- [x] Papers pages cleaned of mixed learner/teacher mode language
- [x] Subject landing pages cleaned of stats, long intros, status footers, and phase/backlog copy
- [x] Small-phone responsiveness pass added for 320–430px widths
- [x] UX/auth/production cleanup handoff created (`docs/ops/ux-auth-production-cleanup-2026-07-07.md`)
- [x] Final local build passed after declutter pass (`npm run build`, 187 static pages)

## Phase 14 — Remaining production simplification
- [x] Audit `TeacherDashboard.tsx` and remove/hide demo-sales copy
- [x] Simplify `WorksheetGenerator.tsx` default form: class → subject/topics → generate
- [x] Make worksheet advanced fields visually secondary
- [x] Tighten topic-page top area so lesson content appears faster on mobile
- [x] Review `PracticeRunner.tsx` for small-phone clutter
- [ ] Decide backend authentication provider and data model after UX stabilises
- [x] Final build passed after remaining cleanup (`npm run build`, 187 static pages)

---


## Phase 15 — Teacher-set questions and manual marking scaffold
- [x] Add local teacher question data helpers (`teacher-questions.ts`)
- [x] Add teacher question-setting page (`/teacher/questions`)
- [x] Add teacher hamburger menu link for Set questions
- [x] Add student teacher-question practice page (`/practice/teacher-questions`)
- [x] Show Teacher questions card in Practice when open questions exist for the student grade
- [x] Add manual marking UI for teacher-set question submissions
- [x] Add working-space textareas to Quiz, PracticeRunner and PaperAttempt
- [x] Document backend requirements for teacher questions/manual marking
- [x] Build passed after teacher-question scaffold (`npm run build`, 189 static pages)

---


## Phase 16 — Presentation/live-data polish
- [x] Auto-populate teacher dashboard with presentation sample class data
- [x] Update sample class topic IDs to current P6/P7 content model
- [x] Make demo student progress/status bars look more active
- [x] Polish past-paper cards with direct Start/Review actions
- [x] Document backend auth roadmap for later implementation
- [x] Add env escape hatch: `NEXT_PUBLIC_TENDO_PRESENTATION_DATA=off`
- [x] Build passed after presentation polish (`npm run build`, 189 static pages)

---

## Primary Six (P6) Expansion
- [x] Establish P6 Expansion Master Roadmap & Milestones (`docs/spec/p6-expansion-milestones.md`)
- [x] Milestone 1: P6 NCDC Curriculum specifications (`content/curriculum/p6-*.json`)
- [x] Milestone 2: Routing architecture & Grade Switcher (`<ClassSelector />`, `/p6-home`, `/[subject]/p6/`)
- [x] Milestone 3a: P6 Social Studies (*East Africa*) & P6 Integrated Science v3 content library
- [x] Milestone 3b: P6 Mathematics, English Language, and Religious Education v3 content library
- [x] Milestone 4: P6 practice question banks & Teacher Dashboard class filtering
- [x] Milestone 5: P6 Visual Roadmap & textbook illustrations linked to modules
- [x] Integrate 12 founder-provided YouTube video explainer lessons across P7 & P6 Mathematics modular libraries and build interactive video playlist switcher (`TopicTabs.tsx`)
- [x] Build Frictionless Learner Profile & Class Lock onboarding system (`ClassSelector.tsx`, `LearnerBanner.tsx`, `learner-profile.ts`)

---

## Immediate milestone — post-push verification + cleanup
- [x] P7 Social Studies completed enough for current scope
- [x] P7 English completed enough for current scope
- [x] Social Studies + English routes built
- [x] Social Studies + English practice routes built
- [x] Social Studies + English added to central question bank
- [x] Social Studies + English added to worksheet generator subject filters
- [x] Social Studies diagrams added for all 10 topics
- [x] English writing templates/diagrams added for all 7 topics
- [x] Social Studies completion audit created/updated
- [x] English quality audit created
- [x] Root docs updated
- [x] Final local build passed: `✓ Generating static pages (147/147)`
- [x] Founder copied grouped files into real local repo
- [x] Founder committed grouped milestone in GitHub Desktop
- [x] Founder pushed to `main`
- [x] Production deployment verified after push

---

## Phase 1 — Foundation
- [x] Next.js app shell created
- [x] Basic topic pages created
- [x] Quiz structure created
- [x] Past paper route created
- [x] Teacher dashboard shell created

## Phase 2 — Teacher + print flows
- [x] Teacher dashboard strengthened
- [x] Print/copy flows added
- [x] Sales materials updated for new feature set

## Phase 3 — Content depth + dashboard + Fellowship
- [x] Topic count expanded far beyond the initial 3-topic shell
- [x] Past papers expanded from 1 to 3
- [x] Demo class added
- [x] Topic performance chart added
- [x] Student drill-down view added
- [x] Teacher Fellowship/reporting flow added
- [x] Additional sales-pack updates made

## Phase 4 — Practice + worksheet generator + UI cleanup
- [x] Question bank added
- [x] Endless practice mode added
- [x] Worksheet generator added
- [x] Listen tab removed and demoted to in-read icon
- [x] Watch tab kept as placeholder/video slot
- [x] Review pill removed from visible UI
- [x] Content-sources documentation added

## Phase 5 — P7 Mathematics completion
- [x] Coverage audit completed against `content/curriculum/p7-math.json`
- [x] Practice/question layer audited and corrected
- [x] Published lighter maths topics strengthened
- [x] Curriculum structure/UI reorganised for maths
- [x] Major missing high-priority P7 maths topics built
- [x] P7 Mathematics final completion audit written
- [x] P7 Mathematics can be stated as complete enough for current scope

## Phase 6 — P7 Integrated Science
- [x] P7 Science curriculum map added
- [x] Science data layer added
- [x] Science landing and topic pages added
- [x] Science practice mode added
- [x] Science diagrams added for all 8 topics
- [x] Science integrated into question bank and worksheet generator
- [x] Science quality audit created
- [x] Sensitive Population and Health wording handled cautiously
- [x] Science pushed by founder
- [x] Science deepening pass completed

## Phase 7 — P7 Social Studies
- [x] NCDC SST outline extracted from P7 Set One PDF
- [x] `content/curriculum/p7-social-studies.json` added
- [x] `app/lib/social-topics.ts` added
- [x] `/social-studies/p7` landing page added
- [x] SST topic and practice routes added
- [x] Social Studies activated on home page
- [x] Social Studies integrated into question bank and worksheet generator
- [x] First-wave audit created and upgraded to completion audit
- [x] Diagrams added for all 10 SST topics
- [x] Heavy topic depth pass completed
- [x] Social Studies complete enough to move on
- [x] Social Studies deepening pass completed
- [x] Push milestone, grouped with English

## Phase 8 — P7 English
- [x] NCDC English outline extracted from P7 Set One PDF
- [x] `content/curriculum/p7-english.json` added
- [x] `app/lib/english-topics.ts` added
- [x] `/english/p7` landing page added
- [x] English topic and practice routes added
- [x] English activated on home page
- [x] English integrated into question bank and worksheet generator
- [x] English-only worksheet filter added
- [x] Writing templates/diagrams added for all 7 topics
- [x] Writing-practice packs added for all 7 English topics
- [x] English practice bank expanded to 20 questions per topic
- [x] Letter Writing depth pass completed
- [x] Rights, Responsibilities and Freedom depth pass completed
- [x] Environmental Protection depth pass completed
- [x] Ceremonies depth pass completed
- [x] English quality audit created
- [x] English complete enough for current scope
- [x] Push milestone, grouped with Social Studies

---

## Phase 9 — Teacher-facing usefulness
- [x] Worksheet subject stats made clearer
- [x] Worksheet page copy clarified as question-bank pool
- [x] Class, term/week, time and marks fields added
- [x] Quick worksheet length buttons added
- [x] Separate answer-key section added
- [x] Print layout improved for pupil sheet + answer key
- [x] Teacher worksheet usefulness audit note created
- [x] Add English composition/writing topic-page tasks
- [x] Add guided/scaffolded application tasks for Science and English
- [x] Add guided/scaffolded application tasks for SST

---

## Phase 10 — Four-subject core closeout
- [x] Four active P7 subjects audited together
- [x] Practice-bank totals verified
- [x] Guided-practice coverage verified for English, Science and SST
- [x] Worksheet generator support verified for all 4 subjects
- [x] Stale current-doc wording cleaned
- [x] Four-subject closeout audit created
- [x] Final build passed
- [x] Founder copies/pushes grouped improvement batch

---

## Phase 11 — Lesson Structure v2 restructuring
- [x] Lesson Structure v2 standard documented
- [x] Topic data model supports optional `note.study` field
- [x] Read tab renders v2 study flow when available
- [x] v2 styles added
- [x] SST pilot topic: Location of Africa
- [x] SST pilot topic: Climate of Africa
- [x] SST pilot topic: Economic developments in Africa
- [x] Build passed after v2 pilot
- [x] Build passed after full SST v2 conversion
- [x] Roll v2 across all SST topics
- [x] Build passed after full Science v2 conversion
- [x] Roll v2 across Science topics
- [x] Build passed after full English v2 conversion
- [x] Roll v2 across English topics
- [x] Review Maths for targeted v2 upgrades where needed
- [x] Roll v2 across all Maths topics
- [ ] Founder pushes grouped restructuring batch

---

## Phase 12 — Pilot readiness (archived context)
- [x] Lesson Structure v2 grouped push verified live
- [x] Stale Maths home-card wording cleaned
- [x] Post-push verification note created
- [x] Teacher classroom guide v1 created
- [x] Pilot checklist v1 created
- [x] Founder demo script v1 created
- [x] Teacher feedback loop v1 created
- [x] Key-word definitions teacher-voice phrasing pass completed
- [x] Founder copies/pushes pilot readiness cleanup batch
- [x] School-pilot dependency archived by DEV-027
- [ ] Direct-student feedback summarised into product priorities

## Phase 13 — Modular topic architecture (v3)
- [x] v3 architecture problem and data model documented
- [x] Modular types added to `app/lib/topics.ts`
- [x] `TopicTabs.tsx` renders modular directory + module viewer when `subtopics` exists
- [x] Modular styles added to `app/app/globals.css`
- [x] First modular topic built: Social Studies → Location of Africa
- [x] Subtopics mapped directly to NCDC `subTopics` in `content/curriculum/p7-social-studies.json`
- [x] Module content sourced from NCDC P7 Set One PDF pages 294–296
- [x] Build passed after modular spike
- [x] Founder review of modular spike completed
- [x] Fixed: rigid topic-level sections no longer repeat under every module
- [x] Fixed: browser back now returns to subtopic list, not main topic page
- [x] Fixed: modular UI simplified — fewer boxes, more content space
- [x] Content deepened: 16 modules with fuller teacher-voice explanations
- [x] NCDC deep extract documented for Location of Africa
- [x] Content issue reporter + reviewer page added
- [x] Modular UI overlap fixed
- [x] Convert Physical Features of Africa to v3
- [x] Convert Climate of Africa to v3
- [x] Convert Vegetation of Africa to v3
- [x] Convert People of Africa, Ethnic Groups and Settlement Patterns to v3
- [x] Convert Foreign Influence in Africa to v3
- [x] Convert Nationalism and the Road to Independence to v3
- [x] Convert Post-Independence Africa to v3
- [x] Convert Economic Developments in Africa to v3
- [x] Convert Major World Organisations to v3
- [x] Roll v3 structure to Mathematics
- [x] Roll v3 structure to Integrated Science
- [x] Roll v3 structure to English
- [ ] Deepen v3 modules across all subjects topic-by-topic

---

## Current subject status

### P7 Mathematics
- [x] Broad curriculum-shaped coverage exists
- [x] Landing structure is improved
- [x] Practice layer is aligned enough for current scope
- [x] Completion can be stated honestly
- [x] First-wave diagrams implemented for selected visual topics

### P7 Integrated Science
- [x] All 8 NCDC P7 Integrated Science topics mapped
- [x] All 8 topics built in app
- [x] Science landing/topic/practice pages built
- [x] Diagrams included for all Science topics
- [x] 20-question practice bank per topic
- [x] Guided Science application tasks added for all 8 topics
- [x] Worksheet generator supports Science
- [x] Done enough and pushed

### P7 Social Studies
- [x] All 10 NCDC topics live
- [x] Practice routes added
- [x] 20-question practice bank per topic
- [x] Guided SST map/history/development tasks added for all 10 topics
- [x] Worksheet generator supports SST
- [x] Diagrams included for all SST topics
- [x] Heavy topic depth pass completed
- [x] Completion audit updated
- [x] Push milestone, grouped with English

### P7 English
- [x] All 7 NCDC topics live
- [x] Practice routes added
- [x] 20-question practice bank per topic
- [x] Worksheet generator supports English
- [x] Writing templates/diagrams included for all topics
- [x] Writing-heavy topic depth pass completed
- [x] Quality audit created
- [x] Push milestone, grouped with Social Studies

---

## Totals
- **Published P7 Mathematics topics:** 11 official NCDC topics (encapsulating all 38 previous micro-competencies as v3 subtopics)
- **Published P7 Integrated Science topics:** 8 official NCDC topics
- **Published P7 Social Studies topics:** 10 official NCDC topics
- **Published P7 English topics:** 7 official NCDC topics
- **Published P7 Religious Education topics:** 14 official NCDC topics (7 CRE topics + 7 IRE topics, 100% enriched against requirement specifications)
- **Visible maths coming-soon backlog:** 0
- **Latest grouped push completed:** Social Studies + English + shared docs/app support
- **Current improvement pass:** student-first UX/auth polish and presentation/live-data readiness
- **Religious Education:** content exists; future improvements should be driven by learner/teacher feedback
- **Strategic path:** student-first/direct-to-learner; Trainup pilot archived
- **Monthly recurring cost:** UGX 0
