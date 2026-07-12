# CHECKLIST — Tendo execution tracker

*Updated: 2026-07-12*

















## Phase 31 — P3 NCDC Research and Mapping
- [x] Research official NCDC P3 Thematic Curriculum source
- [x] Confirm P3 is thematic/lower-primary, not subject-based like P4–P7
- [x] Add P3 thematic curriculum map (`content/curriculum/p3-thematic.json`)
- [x] Add P3 Religious Education map (`content/curriculum/p3-re.json`)
- [x] Document P3 research (`docs/ops/ncdc-p3-curriculum-research-2026-07-09.md`)
- [ ] Review P3 maps for extraction/source-cleanup issues
- [x] Decide P3 learner-facing app structure: thematic-first (`/p3-home`, `/p3/theme/[theme]`)
- [x] Build first P3 beta slice: `/p3-home` and Theme 1 only
- [x] Add P3 thematic content library (`app/lib/p3-thematic-topics.ts`)
- [x] Add `/p3-home` route
- [x] Add `/p3/theme/[theme]` route and static generation for P3 themes
- [x] Extend local sign-in/session/navigation/study/practice support to P3
- [x] Build passed after P3 Theme 1 beta (`npm run build`, 326 static pages)
- [x] Review P3 Theme 1 beta pattern at AI-builder level before extending the model
- [x] Build remaining P3 themes from `content/curriculum/p3-thematic.json`
- [x] Add 36 P3 sub-theme SVG visuals under `app/public/images/p3/`
- [x] Update `/p3-home`, Study Directory and Practice suggestions for all 12 P3 themes
- [x] Build passed after full P3 thematic beta (`npm run build`, 337 static pages)
- [x] Run internal review/polish pass across P3 thematic beta
- [x] Add tailored `SUBTHEME_POLISH` layer for all 36 P3 thematic sub-themes
- [x] Research trusted CRE/IRE supporting sources for P3 RE
- [x] Log `DEV-032` decision for P3 RE beta from official map plus trusted source cross-checks
- [x] Build P3 Religious Education beta (`/p3/re`, `/p3/re/[topic]`)
- [x] Add P3 RE content library (`app/lib/p3-re-topics.ts`)
- [x] Add 18 P3 RE SVG visuals under `app/public/images/p3/re/`
- [x] Update P3 home/study/practice/navigation guard for P3 RE
- [x] Build passed after P3 review/polish and RE beta (`npm run build`, 356 static pages)
- [x] Tighten P3 thematic and RE quiz distractors after internal QA
- [x] Fix P3 Study Directory student copy from subject-first wording to theme-first wording
- [x] Build passed after P3 QA tightening (`npm run build`, 356 static pages)
- [x] Prepare P3 milestone push package (`docs/ops/p3-push-package-2026-07-12.md`)
- [x] Add post-P3 scope note: do not start P2/P1 without separate lower-primary decision
- [ ] Human/founder/teacher review all 12 P3 thematic beta themes
- [ ] Qualified CRE/IRE teacher review P3 RE beta before premium-final status

---

## Phase 30 — P4/P5 Visuals and Depth Pass Before P3
- [x] Create local SVG visual assets for P4/P5 Math, Science and Social Studies
- [x] Attach diagrams to P4 Math modules
- [x] Attach diagrams to P4 Science modules
- [x] Attach diagrams to P4 Social Studies modules
- [x] Attach diagrams to P5 Math modules
- [x] Attach diagrams to P5 Science modules
- [x] Attach diagrams to P5 Social Studies modules
- [x] Complete P5 Science visual attachment audit: all 9 topics have images
- [x] Complete P5 Social Studies visual attachment audit: all 12 topics have images
- [x] Deepen P4 Science Plant Life / Flowering Plants with flowers, fruits, seeds and germination modules
- [x] Deepen thin P5 Mathematics topics with practical/application modules
- [x] Build passed after visuals/depth changes (`npm run build`, 324 static pages)
- [x] Fill additional P4 no-image topic gaps across Math, Science and Social Studies
- [x] Build passed after additional visual gap fill (`npm run build`, 324 static pages)
- [x] Build passed after P5 Science/SST visual coverage fix (`npm run build`, 324 static pages)
- [x] Document visuals/depth pass (`docs/ops/p4-p5-visuals-depth-pass-2026-07-09.md`)
- [x] Rebuild P5 Science to 3 modules per topic with visuals and practical applications
- [x] Build passed after P5 Science full depth rebuild (`npm run build`, 324 static pages)
- [x] Rebuild P5 Social Studies to 3 modules per topic with visuals and stronger reasoning
- [x] Build passed after P5 Social Studies full depth rebuild (`npm run build`, 324 static pages)
- [x] Deepen P5 Religious Education with visuals and third reasoning/application module per topic
- [x] Build passed after P5 RE depth/visual upgrade (`npm run build`, 324 static pages)
- [x] Deepen P4 English with visuals and third writing/speaking module per topic
- [x] Deepen P4 RE with visuals and third reasoning/application module per topic
- [x] Deepen P5 English with visuals and third writing/speaking module per topic
- [x] Deepen P5 RE with visuals and third reasoning/exam-practice module per topic
- [x] Build passed after English/RE depth upgrade (`npm run build`, 324 static pages)
- [x] Run final P4/P5 module/image audit and close visuals/depth pass if clean
- [x] Close Step 1 and Step 2 at AI-builder level
- [x] Start P3 NCDC research and curriculum mapping
- [x] Visuals/depth pass intentionally closed before P3 research

---

## Phase 29 — P4 to P7 Review Pass Before Next Class
- [x] Re-audit P4/P5/P6/P7 curriculum map topic IDs against app topic IDs
- [x] Confirm zero missing top-level mapped topics across P4–P7
- [x] Run build after dependency reinstall (`npm run build`, 324 static pages)
- [x] Fix stale P5 Mathematics comment from draft to live beta
- [x] Balance P4 quiz/try-this correct answer positions across A/B/C/D
- [x] Build passed after P4 answer distribution fix (`npm run build`, 324 static pages)
- [x] Document review pass (`docs/ops/p4-p7-live-beta-review-pass-2026-07-09.md`)
- [x] Quick AI review P4 Mathematics arithmetic/readability
- [x] Quick AI review P4 English language level/tone
- [x] Deepen P4 Science with practical/health-safety application modules
- [x] Quick AI review P4 Science health-sensitive wording
- [x] Quick AI review P4 Social Studies district/civic wording
- [x] Quick AI review and improve P4 RE respectful wording/source limitation
- [x] Balance P5 quiz/try-this correct answer positions across A/B/C/D
- [x] Build passed after P5 answer distribution fix (`npm run build`, 324 static pages)
- [x] P5 English quality pass: replace generic examples in Letter Writing, Communication, Culture, Peace/Security and Banking
- [x] Quick AI review P5 Science health/science-sensitive wording
- [x] Quick AI review P5 Social Studies historical/civic wording
- [x] Quick AI review and improve P5 RE respectful wording
- [x] P5 AI-level quality pass complete; human review remains open
- [x] Balance P6 quiz/try-this correct answer positions across A/B/C/D
- [x] Quick AI review P6 Science health/science-sensitive wording
- [x] Quick AI review P6 Social Studies historical/civic wording
- [x] Quick AI review and fix P6 RE respectful Prophet Muhammad (PBUH) wording
- [x] Build passed after P6 review fixes (`npm run build`, 324 static pages)
- [x] P6 AI-level premium additions review complete; human review remains open
- [x] Balance P7 quiz/try-this correct answer positions across A/B/C/D
- [x] Quick AI review P7 Science health-sensitive wording
- [x] Quick AI review P7 Social Studies historical/civic wording
- [x] Quick AI review P7 RE respectful wording
- [x] Build passed after P7 review fixes (`npm run build`, 324 static pages)
- [x] P7 AI-level premium additions review complete; human review remains open
- [x] P4–P7 AI-level review/improvement pass documented
- [ ] Start next class only after founder approves moving from review to P3 research

---

## Phase 28 — P4 Religious Education Live Beta and P4 Class Completion
- [x] Build P4 Religious Education beta content from `content/curriculum/p4-re.json`
- [x] Add P4 RE topic data (`app/lib/p4-re-topics.ts`)
- [x] Add `/re/p4` and `/re/p4/[topic]` routes
- [x] Add P4 RE to `/p4-home`, Study directory and practice suggestions
- [x] Confirm P4 RE top-level topic IDs match `content/curriculum/p4-re.json`
- [x] Build passed after P4 RE live beta (`npm run build`, 324 static pages)
- [x] P4 live beta complete across all 5 app subjects
- [ ] Human/founder/teacher review P4 RE respectful faith wording and source limitations
- [ ] Verify P4 RE map against full standard P4 CRE/IRE syllabus when found

---

## Phase 27 — P4 Social Studies Live Beta
- [x] Build P4 Social Studies beta content from official NCDC P4 SST map
- [x] Add P4 Social Studies topic data (`app/lib/p4-social-topics.ts`)
- [x] Add `/social-studies/p4` and `/social-studies/p4/[topic]` routes
- [x] Add P4 Social Studies to `/p4-home`, Study directory and practice suggestions
- [x] Confirm P4 Social Studies top-level topic IDs match `content/curriculum/p4-social-studies.json`
- [x] Build passed after P4 Social Studies live beta (`npm run build`, 298 static pages)
- [ ] Human/founder/teacher review P4 Social Studies local-district examples and civic balance

---

## Phase 26 — P4 Integrated Science Live Beta
- [x] Build P4 Integrated Science beta content from NCDC P4 Integrated Science map
- [x] Add P4 Science topic data (`app/lib/p4-science-topics.ts`)
- [x] Add `/science/p4` and `/science/p4/[topic]` routes
- [x] Add P4 Science to `/p4-home`, Study directory and practice suggestions
- [x] Confirm P4 Science top-level topic IDs match `content/curriculum/p4-science.json`
- [x] Build passed after P4 Science live beta (`npm run build`, 291 static pages)
- [ ] Human/founder/teacher review P4 Science accuracy and health-sensitive wording

---

## Phase 25 — P4 English Live Beta
- [x] Build P4 English beta content from official NCDC P4 English map
- [x] Add P4 English topic data (`app/lib/p4-english-topics.ts`)
- [x] Add `/english/p4` and `/english/p4/[topic]` routes
- [x] Add P4 English to `/p4-home`, Study directory and practice suggestions
- [x] Confirm P4 English top-level topic IDs match `content/curriculum/p4-english.json`
- [x] Build passed after P4 English live beta (`npm run build`, 278 static pages)
- [ ] Human/founder/teacher review P4 English language level, tone and source fidelity

---

## Phase 24 — P4 Mathematics Live Beta
- [x] Build P4 Mathematics beta content from verified NCDC P4 Mathematics map
- [x] Add P4 Mathematics topic data (`app/lib/p4-math-topics.ts`)
- [x] Add `/math/p4` and `/math/p4/[topic]` routes
- [x] Add `/p4-home` route
- [x] Extend local student sign-in/session guard to P4
- [x] Add P4 Mathematics to study directory and practice suggestions
- [x] Build passed after P4 Mathematics live beta (`npm run build`, 269 static pages)
- [ ] Human/founder/teacher review P4 Mathematics beta arithmetic and P4 readability

---

## Phase 23 — P4 Curriculum Research and Mapping
- [x] Research P4 English NCDC syllabus structure
- [x] Research P4 Social Studies NCDC syllabus structure
- [x] Research P4 Integrated Science NCDC syllabus structure
- [x] Add P4 English curriculum map
- [x] Add initial P4 Mathematics curriculum map from NCDC PDF extract
- [x] Add P4 Integrated Science curriculum map
- [x] Add P4 Social Studies curriculum map
- [x] Document P4 curriculum research (`docs/ops/ncdc-p4-curriculum-research-2026-07-09.md`)
- [x] Verify and correct P4 Mathematics map against official NCDC PDF
- [x] Find NCDC-backed P4 Religious Education CRE/IRE topic list in NCDC/MoES Primary 4 Abridged Curriculum
- [x] Add `content/curriculum/p4-re.json` from the NCDC/MoES abridged source
- [ ] Verify P4 RE map against full standard P4 CRE/IRE syllabus
- [x] Build passed after P4 Mathematics official verification (`npm run build`, 255 static pages)
- [x] Build all five P4 app subjects as live beta after map/source checks

---

## Phase 22 — P5 to P7 Curriculum Alignment Audit
- [x] Add P7 Religious Education curriculum map
- [x] Compare P7 curriculum maps against app content
- [x] Compare P6 curriculum maps against app content
- [x] Compare P5 curriculum maps against app content
- [x] Confirm zero missing top-level topics across P5/P6/P7 maps
- [x] Document audit (`docs/ops/curriculum-alignment-audit-p5-p7-2026-07-09.md`)
- [x] Build passed after audit (`npm run build`, 255 static pages)
- [ ] Human/founder/teacher review content details beyond top-level topic coverage

---

## Phase 21 — P5 Curriculum Research and Expansion Planning
- [x] Lock beta quality rule in docs
- [x] Lock non-negotiable NCDC-first build rule in docs
- [x] Research P5 Set One curriculum source
- [x] Correct P5 Mathematics curriculum map to official 12-topic structure
- [x] Correct P5 English curriculum map to official 8-topic structure
- [x] Correct P5 Integrated Science curriculum map to researched official topic structure
- [x] Correct P5 Social Studies curriculum map to official 12-topic structure
- [x] Correct P5 Religious Education curriculum map to CRE/IRE topic structure
- [x] Remove premature P5 Mathematics/English draft app routes and content layers
- [x] Document P5 curriculum research (`docs/ops/ncdc-p5-curriculum-research-2026-07-09.md`)
- [x] Build passed after P5 correction (`npm run build`, 188 static pages)
- [ ] Verify updated P5 maps against an official/trusted NCDC copy
- [x] Build P5 Mathematics beta content layer from researched map
- [x] Add P5 sign-in/home/study support and live P5 Mathematics routes
- [x] Mark P5 Mathematics as beta, not draft
- [x] Build passed after live P5 Mathematics beta (`npm run build`, 202 static pages)
- [ ] Human/founder review P5 Mathematics beta content
- [x] Build P5 English beta content layer from researched map
- [x] Add live P5 English beta routes
- [x] Build passed after live P5 English beta (`npm run build`, 211 static pages)
- [ ] Human/founder review P5 English beta content
- [x] Build P5 Science beta content layer from researched map
- [x] Add live P5 Science beta routes
- [x] Build passed after live P5 Science beta (`npm run build`, 221 static pages)
- [ ] Human/founder review P5 Science beta content
- [x] Build P5 Social Studies beta content layer from researched map
- [x] Add live P5 Social Studies beta routes
- [x] Build passed after live P5 Social Studies beta (`npm run build`, 234 static pages)
- [ ] Human/founder review P5 Social Studies beta content
- [x] Build P5 Religious Education beta content layer from researched map
- [x] Add live P5 Religious Education beta routes
- [x] Build passed after live P5 Religious Education beta (`npm run build`, 255 static pages)
- [ ] Human/founder/teacher review P5 Religious Education beta content
- [x] All current P5 subjects live as beta

---

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
