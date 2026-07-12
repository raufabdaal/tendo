# HANDOFF — for the next session

*Written: 2026-07-12*





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

## CURRENT COMMAND CENTER — 2026-07-12

### Active direction
Build Tendo as a **premium parent-funded, student-first app**. Content quality is now the product. Parent ROI matters more than teacher-dashboard expansion. Trainup/school-first work is archived.

### Active milestone
**P3–P7 are now structurally on NCDC-native v4; next is review + targeted deepening.**

Founder review found that “more modules” was structurally wrong when the child-facing page still sounded like a curriculum guide. The locked direction is v4: mobile-first lesson selector/module stepper with direct teaching blocks (definitions, classifications, examples, diagrams/worked examples, activities and evaluation).

Current state of the milestone:
- P3 thematic is migrated and manually deepened in lower-primary v4 across all 12 official themes.
- P3 Religious Education is migrated to lower-primary v4 across 18 CRE/IRE topics and still needs qualified CRE/IRE review.
- P4/P5 Science, Mathematics, English and Social Studies are complete at AI-builder v4 level after structural migration + manual deepening.
- P4/P5 Religious Education is structurally migrated to upper-primary v4, but still requires qualified CRE/IRE review; P4 RE also needs full standard syllabus confirmation beyond the abridged source.
- P6 and P7 have now been structurally migrated to upper-primary v4 across all 5 subjects.
- P6/P7 structural batch coverage: 78 topics and 278 generated v4 lessons from current app subtopic libraries.
- Social Studies v4 helper now uses the right context by class: district (P4), Uganda (P5), East Africa (P6), Africa/world (P7).
- Latest build passed: `cd app && npm run build` → `✓ Generating static pages (356/356)`.

### Immediate next tasks
1. Real-phone smoke test representative v4 pages:
   - `/math/p6/p6-sets`
   - `/science/p6/p6-classification-living-things`
   - `/social-studies/p6/p6-location-east-africa`
   - `/math/p7/set-concepts`
   - `/science/p7/muscular-skeletal-system`
   - `/social-studies/p7/location-of-africa`
   - `/re/p7/cre-ancestors-pioneers-faith`
2. Start targeted hand-deepening of P6/P7 PLE-heavy topics in v4. Recommended first set:
   - P7 Mathematics: Set Concepts, Fractions, Data Handling, Construction, Algebra
   - P7 Science: Muscular-Skeletal System, Electricity and Magnetism, Light Energy, Population and Health
   - P7 Social Studies: Location/Physical Features of Africa, Foreign Influence, Nationalism, Major World Organisations
   - P6 bridge topics that prepare P7/PLE work in Maths, Science and SST
3. Keep all RE migration notes visible: P3/P4/P5/P6/P7 CRE/IRE content must be reviewed by qualified teachers before premium-final status.
4. Do not start P1/P2 yet; they will be in the same app later, after P3–P7 v4 restructure and review.

### Push status
Current local workspace includes a large unpushed milestone bundle. Founder has not pushed yet. When founder says “ready to push”, provide:
- files to overwrite
- files to add
- files to delete
- build status
- suggested commit message

### Do not forget
- Do not re-open Trainup as active strategy.
- Do not make schools the gatekeeper again.
- Do not start P1/P2 yet. Founder has decided P1/P2 will eventually live in the same app, but later. Current focus is restructuring P3–P7 first using v4.
- Do not create lots of new docs unless necessary; update the core docs first.

---

## Strategic pivot — 2026-07-09

Tendo is now **student-first**. Do not continue building around Trainup a Child Uganda or a school-first sales dependency.

- Trainup is archived historical context.
- The active path is: make Tendo excellent for target P6/P7 learners and premium parents using it directly.
- Teachers/tutors and parents remain supporting users.
- Schools can be optional partners later, not the gatekeepers.
- The old `/trainup` route has been removed.

Read: `docs/ops/strategic-pivot-student-first-2026-07-09.md`.

---


## Premium parent/content-first refinement — 2026-07-09

The student-first pivot is now refined further: Tendo is a **premium parent-funded product**.

- Target parents already spending heavily on education.
- Working price assumption: about UGX 50,000/month.
- The main priority is content completion and quality, starting with P7.
- First P7 Maths premium pass completed for Integers, Time, Data Handling, Measurement/Money and Algebra; human review remains.
- Teacher dashboard is no longer central; leave it useful but secondary.
- Parent dashboard/ROI visibility is strategically important because the parent pays.
- Build class-by-class after P7: P6, then next class down systematically.

Read:
- `docs/ops/premium-parent-student-first-strategy-2026-07-09.md`
- `docs/ops/primary-content-completion-roadmap-2026-07-09.md`
- `docs/ops/ncdc-p5-curriculum-research-2026-07-09.md`
- `docs/ops/ncdc-p3-curriculum-research-2026-07-09.md`
- `docs/ops/p3-thematic-app-structure-2026-07-09.md`
- `docs/ops/p3-thematic-beta-completion-2026-07-12.md`
- `docs/ops/p3-review-polish-pass-2026-07-12.md`
- `docs/ops/p3-re-source-research-2026-07-12.md`
- `docs/ops/p3-thematic-beta-completion-2026-07-12.md`
- `docs/ops/ncdc-p4-curriculum-research-2026-07-09.md`
- `docs/ops/curriculum-alignment-audit-p5-p7-2026-07-09.md`
- `docs/ops/p7-math-premium-audit-2026-07-09.md`
- `docs/ops/content-corrections-workflow-2026-07-09.md`
- `docs/ops/parent-dashboard-roi-roadmap-2026-07-09.md`

---

## Latest handoff — 2026-07-07 UX/auth + production declutter

The app now has a local/device sign-in gate and role-specific experiences. This is UX scaffolding, not backend auth.

### What changed most recently
- `AuthGate.tsx` wraps the app and requires Student or Teacher sign-in.
- `auth-session.ts` stores the local session in browser storage.
- Student sessions are grade-specific. P7 students see P7 Study/Practice; P6 students see P6 Study/Practice. Wrong-grade routes redirect.
- Teacher sessions use a hamburger menu instead of student-style bottom nav.
- Teachers can still access both P6 and P7 content through the content library for lesson inspiration.
- Home, Study, Practice, Papers, subject pages, and paper pages were decluttered for production.
- Subject pages no longer show stats panels, long explanatory intros, status footers, or phase/backlog copy.
- Removed demo/sales wording from teacher dashboard and made sample data copy neutral.
- Simplified worksheet maker into class → subject → topics → questions → generate, with advanced options collapsed.
- Removed topic-page intro callouts so lesson content appears faster.
- Added teacher-set question/manual marking scaffold and student writing spaces for quizzes, practice and papers.
- Auto-populated teacher dashboard with presentation sample data and documented how to turn it off later.

### Files to understand first
- `docs/ops/strategic-pivot-student-first-2026-07-09.md`
- `app/components/AuthGate.tsx`
- `app/components/AppNav.tsx`
- `app/components/StudyDirectory.tsx`
- `app/components/PracticeHomeContent.tsx`
- `app/app/globals.css` (latest UX overrides are at the end)
- `docs/ops/ux-auth-production-cleanup-2026-07-07.md`
- `docs/ops/teacher-questions-manual-marking-2026-07-07.md`
- `docs/ops/parent-teacher-dashboard-requirements-2026-07-07.md`
- `docs/ops/auth-backend-roadmap-2026-07-07.md`

### Next tasks
1. Human/founder review upgraded P7/P6 premium additions.
2. Review live P5 Mathematics, P5 English and P5 Science beta against researched NCDC maps.
3. Review all P5 beta content against researched NCDC maps and improve weak areas.
4. Continue verifying P5 maps against official/trusted NCDC material as we refine.
5. Design parent dashboard MVP around usage, weaknesses, recommendations and ROI.
6. Test manually on 320/340/360/390/414/430px phone widths.
7. Decide backend auth/provider and data model when ready, especially for parent dashboard and cross-device progress.

---

## Read this first (for a no-context restart)

1. `STATUS.md` — current state and strategic direction.
2. `CHECKLIST.md` — what is done and what is in progress.
3. `CHANGELOG.md` — what happened in this and previous sessions.
4. `DECISIONS.md` — major product/technical/content decisions.
5. `docs/spec/tendo-lesson-structure-v3-modular.md` — the v3 architecture spec.
6. `docs/spec/p6-expansion-milestones.md` — P6 expansion master roadmap.

---

## Where the project really is

The platform is a child-friendly study app for upper-primary learners in Uganda (Primary Six and Primary Seven PLE). Both P7 and P6 are live across all 5 official NCDC subjects (Mathematics, Integrated Science, Social Studies, English Language, and Religious Education—both CRE and IRE) on Lesson Structure v3 modular architecture.

**All 5 official subjects complete across P7 and P6 on Lesson Structure v3:**
- Primary Seven (P7 PLE): 100% complete across Math (11 topics), Science (8 topics), SST (10 topics), English (7 topics), RE (14 topics).
- Primary Six (P6): 100% complete across Math (6 topics), Science (5 topics), SST (6 topics), English (5 topics), RE (6 topics).

**Documentation discipline (founder-mandated):**
- Every session must update `STATUS.md`, `HANDOFF.md`, `CHECKLIST.md`, `CHANGELOG.md`.
- Remember positioning correction: Tendo is for **study** (not just revision).
- Repo docs are the source of truth for future agents.

---

## What this session changed

**Frictionless Learner Profile & Class Lock System Built:**
- Built an offline, zero-password **Learner Profile & Class Lock** onboarding flow (`app/lib/learner-profile.ts`, `app/components/ClassSelector.tsx`, `app/components/LearnerBanner.tsx`).
- First-time visitors select their study class (**Primary Six** or **Primary Seven PLE**) and optionally record their name.
- Automatically locks the home hub and routes P6 learners away from P7 content and vice versa. If learners navigate to the opposite grade's subject pages, an instant top warning banner lets them return to their designated class hub or switch profiles.

**Mathematics Video Explainer Integration & Modular Video Player Upgrades:**
- Embedded all 12 founder-provided YouTube explainer videos into exact matching subtopics and modules across Primary Seven Mathematics (`app/lib/topics.ts`) and Primary Six Mathematics (`app/lib/p6-math-topics.ts`).
- Upgraded `TopicTabs.tsx` to support `videoUrl` on both the main topic and individual subtopic modules (`SubtopicModule`).
- When inside the Watch tab, if a topic contains multiple video lessons across its modules, an interactive video playlist switcher lets learners toggle between videos.
- When reading a module inside the Read tab, if that module has a `videoUrl`, learners can watch the video embedded directly above the study notes.

**Primary Six (P6) Expansion Complete (Exhaustive Lesson Structure v3 & Visual Overhaul):**
- Performed a deep overhaul across all 5 Primary Six subjects: Social Studies (`app/lib/p6-social-topics.ts`), Integrated Science (`app/lib/p6-science-topics.ts`), Mathematics (`app/lib/p6-math-topics.ts`), English Language (`app/lib/p6-english-topics.ts`), and Religious Education (`app/lib/p6-re-topics.ts`).
- Every single subtopic specified in `content/curriculum/p6-*.json` is now explicitly structured as a multi-module subtopic complete with paginated `Module` steps, Ugandan teacher voice explanations, numerical/analytical `workedExample`, multiple-choice `tryThis` checks, and relevant visual asset integrations (`/images/...`).
- Seeded central practice question banks (`P6_MATHS_BANK`, `P6_ENGLISH_BANK`, `P6_SCIENCE_BANK`, `P6_SOCIAL_STUDIES_BANK`, `P6_RE_BANK`) in `app/lib/question-bank.ts`.
- Connected class level filtering (`P7 (PLE)`, `P6`, `All Classes`) on the Worksheet Generator (`WorksheetGenerator.tsx`) and Teacher Dashboard (`TeacherDashboard.tsx`).
- Created `/practice` endless practice routes across all P6 subjects (`app/app/[subject]/p6/[topic]/practice/page.tsx`) and added Practice CTAs to P6 topic pages.
- Verified 100% build stability (`✓ Generating static pages (185/185)`).

**Primary Six (P6) Expansion Milestone 1 & Milestone 2 Executed:**
- Created all 5 official P6 NCDC Curriculum JSON specifications under `content/curriculum/p6-*.json` (*East African Social Studies, Science, Math, English, and Religious Education*).
- Built interactive home grade switcher (`ClassSelector.tsx`), enabling students to toggle between Primary Seven (`/`) and Primary Six (`/p6-home`).
- Created P6 baseline data libraries (`app/lib/p6-*.ts`) and static route shells under `app/app/[subject]/p6/` for all 5 subjects.

**Primary Six (P6) Expansion Strategy & Roadmap Established:**
- Created **`docs/spec/p6-expansion-milestones.md`**, establishing a 5-milestone engineering and curriculum roadmap for expanding Tendo from P7 to Primary Six across all 5 NCDC subjects.
- Documented key curriculum distinctions between P6 and P7 (e.g., P6 Social Studies focusing on *East Africa* vs P7 continent-wide *Living Together in Africa*).

**Exhaustive NCDC Religious Education Module Expansion & Content Enrichment Pass (14 Official Topics):**
- Rigorously upgraded `app/lib/re-topics.ts` to exactly 14 official NCDC topics (7 CRE + 7 IRE) across Terms 1, 2, and 3, eliminating summary traps and injecting 100% of all required theological definitions, historical figures, parables, miracles, and ethical rulings per the official NCDC specification requirement sheet.
- Added comprehensive practice question banks (`CRE_BANK` and `IRE_BANK`) covering all 14 official topics with 112 practice questions.

**Complete Religious Education Rollout (CRE & IRE) — All 5 PLE Subjects Live:**
- Conducted deep research on the official NCDC Set One Primary Seven Religious Education curriculum in Uganda.
- Authored **`app/lib/re-topics.ts`**, exporting 6 official CRE topics and 5 official IRE topics in full Lesson Structure v3 modular architecture.
- Added **`CRE_BANK`** and **`IRE_BANK`** to `app/lib/question-bank.ts` with 88 verified practice questions across all 11 RE topics.
- Created full subject routes under `app/app/re/p7/` (landing page offering CRE and IRE options, static topic viewer, and practice runner).
- Integrated Religious Education into `app/app/page.tsx`, `TeacherDashboard.tsx`, and `WorksheetGenerator.tsx`.

**Exhaustive NCDC Mathematics Module Expansion & Content Enrichment Pass:**
- Performed deep module expansion across all 11 P7 Mathematics topics in `app/lib/topics.ts` to eliminate single-paragraph summary traps and ensure every module includes step-by-step calculations, numerical `workedExample` breakdowns, and multiple-choice `tryThis` checks:
  - **Topic 1 (Set Concepts):** Expanded into 4 subtopics and 8 rich modules covering Equal/Equivalent/Empty/Disjoint sets, Finite/Infinite sets, Subsets ($2^n$ and proper subsets $2^n-1$), 5-region Venn diagram operations ($A \cap B, A \cup B, A', A-B, B-A$), algebraic word problem equations, and probability.
  - **Topic 2 (Whole Numbers):** Upgraded place values up to 8 digits ($99,999,999$), expanded forms (values vs powers of 10), Roman numerals up to MM ($2000$), and non-decimal number bases (Binary, Base 5, Base 8).
  - **Topic 3 (Operations on Whole Numbers):** Added Commutative, Associative, and Distributive properties over addition, BODMAS / BOOMDAS rules, prime factorisation in power notation, and exact Venn diagram product rules for GCF and LCM.
  - **Topic 4 (Patterns & Sequences):** Added divisibility tests (2, 3, 4, 5, 6, 8, 9, 10, 11), triangular numbers ($n(n+1)/2$), square/cube numbers, and progressive sequence rules.
  - **Topic 5 (Fractions, Decimals & Percentages):** Added fraction BODMAS operations, terminating vs recurring decimals ($0.333\ldots$), direct/inverse proportion ($3\text{ men} \times 8\text{ days} = 24\text{ man-days}$), and ratio sharing.
  - **Topic 7 (Data Handling & Graphs):** Added Mean/Median/Mode/Range calculations, Pictograms (symbol keys), Pie chart sector angles ($360^\circ$), travel graphs, and 4-quadrant Cartesian coordinate plotting.
  - **Topic 8 (Construction & Geometry):** Added angle sum rules ($180^\circ$ straight line, $360^\circ$ point, polygon $(n-2) \times 180^\circ$), ruler/compass bisecting rules ($90^\circ, 60^\circ, 45^\circ, 30^\circ, 15^\circ, 135^\circ, 120^\circ$), and 3-figure clockwise bearings with back bearing rules ($+180^\circ$ or $-180^\circ$).
  - **Topic 9 (Time):** Added 12/24-hour clock conversions and travel timetable duration reasoning across midnight boundaries.
  - **Topic 10 (Length, Mass, Capacity & Money):** Added 2D area/perimeter (including circles $\pi r^2$), 3D prism volume ($V = \text{base area} \times h$), capacity conversion rule ($1000\text{ cm}^3 = 1\text{ litre}$), mass conversions, and business mathematics (profit/loss percentage, simple interest $I = P \times R \times T$).
  - **Topic 11 (Algebra):** Added algebraic simplification, numerical substitution, linear equations, compound inequalities ($-2 < x \le 5$), sign flip rules when dividing/multiplying by negatives, and open/closed circle number line representation.

**Exhaustive NCDC English Language Content Enrichment Pass:**
- Rigorously upgraded `app/lib/english-topics.ts` against the official NCDC P7 English Language requirement sheet across Terms 1, 2, and 3:
  - **Topic 1 (School Holidays):** Added exact Future Simple rules (*shall* vs *will*), *going to* intention structure, and sequential time grammar (*as soon as*, *immediately*, *no sooner had... than...* with inverted *had* subject word order).
  - **Topic 2 (Letter Writing):** Added single-address informal friendly layout vs double-address formal official layout, exact salutation pairings (*Dear Sir/Madam* strictly with *Yours faithfully*; named greetings with *Yours sincerely*), and excuse duty / job application rules.
  - **Topic 3 (Examinations):** Added assessment vocabulary (*invigilator*, *candidate*, *index number*, *pass slip*), complete coverage of Conditionals 1, 2, and 3 (*If I study...* / *If I studied...* / *If I had studied...*), purpose structures (*so... that*, *too... to*, *in order to*), and rubric instructions.
  - **Topic 4 (Electronic Media):** Added modern media vocabulary (*broadcast*, *presenter*, *download*, *viral*), Active and Passive Voice conversions across tenses, and preference grammar (*prefer... to...*, *like... more than...*, *interested in...*).
  - **Topic 5 (Rights, Responsibilities & Freedom):** Added civic vocabulary (*citizen*, *child abuse*, *fair trial*, *violate*), Direct and Indirect (Reported) Speech rules (pronoun, tense backshifting, time/place adverbs), and contrast conjunctions (*although*, *even if*, *in spite of*, *despite* without *of*).
  - **Topic 6 (Environmental Protection):** Added ecology vocabulary (*pollution*, *afforestation*, *poach*, *ecosystem*), Relative Pronouns (*who*, *which*, *whose*, *whom*, *that*), and cause/effect connectors (*because*, *since*, *as a result of*).
  - **Topic 7 (Ceremonies):** Added gathering vocabulary (*MC*, *guest of honor*, *bride*, *RSVP*), Adverbial Clauses of Time (*while*, *whereas*, *during*), and Question Tag golden polarity rules across complex tenses (including negative trap words like *rarely*, *hardly*, *never*, *seldom* requiring positive tags).

**Exhaustive NCDC Social Studies Content Enrichment Pass:**
- Rigorously upgraded `app/lib/social-topics.ts` against the official NCDC P7 Social Studies requirement sheet across Terms 1, 2, and 3:
  - **Topic 1 (Location):** Added longitude time calculation ($1^\circ = 4\text{ minutes}$), 16 compass cardinal/secondary/tertiary points, island nations, and landlocked challenges.
  - **Topic 2 (Physical Features):** Added 3 river stages (youthful V-gorges, mature meanders, old deltas), downwarping basin lakes (Victoria, Kyoga), and volcanic hazards.
  - **Topic 3 (Climate):** Added ocean currents (warm Agulhas/Mozambique vs cold Benguela/Canary forming Namib Desert), ceilometer, and Stevenson Screen.
  - **Topic 5 (People):** Added Cushites, Semites/Berbers, Negroes, and Khoisan (San hunters & Khoikhoi pastoralists).
  - **Topic 6 (Foreign Influence):** Added Trans-Saharan trade (gold for salt) and colonial systems (British Indirect Rule, French Assimilation, Belgian Paternalism).
  - **Topic 7 (Nationalism):** Added active resistance leaders (Mau Mau Dedan Kimathi, Maji Maji Kinjikitile Ngwale, Omukama Kabalega) and collaborators (Apollo Kaggwa).
  - **Topic 10 (World Organisations):** Added Commonwealth Heads of Government Meeting (CHOGM).

**Exhaustive NCDC Integrated Science Content Enrichment Pass:**
- Rigorously upgraded `app/lib/science-topics.ts` against the official NCDC P7 Integrated Science requirement sheet across Terms 1, 2, and 3:
  - **Topic 1 (Skeletal/Muscular):** Added exoskeleton/endoskeleton/hydrostatic distinctions, synovial joint structures (cartilage, synovial fluid, ligaments, tendons), cardiac muscles, antagonistic action (biceps/triceps), and specific disorders (rickets, osteoporosis, polio, fractures, sprains, strains, dislocations).
  - **Topic 2 (Electricity/Magnetism):** Added static electricity laws, lightning formation & lightning arrester mechanism, series vs parallel circuits, voltage/current/resistance definitions, electric bell structure and working, demagnetization methods, and magnetic keepers.
  - **Topic 3 (Excretory System):** Added biological excretion vs egestion distinction, liver deamination & bile pigments, gross internal kidney anatomy (cortex, medulla, pelvis), skin layers (epidermis with Malpighian melanin, dermis with sweat glands), and specific disorders (nephritis, stones, failure, cirrhosis, hepatitis, ringworm, scabies).
  - **Topic 4 (Light Energy):** Added speed of light (300,000 km/s), rectilinear propagation, beams, umbra/penumbra shadows, solar/lunar eclipses, pinhole camera aperture effects, laws of reflection, periscopes, real vs apparent depth, ROYGBIV dispersion, eye cross-section anatomy, and myopia/hypermetropia lens corrections.
  - **Topic 5 (Interdependence):** Added biotic/abiotic distinctions, plant-animal gas exchange, 4-stage food chains/webs with decomposers, and agroforestry management (nitrogen-fixing trees, coppicing, pollarding, lopping, fire lines).
  - **Topic 6 (Population & Health):** Added female Anopheles 4-stage life cycle & vector control, housefly transmission, 4 Fs faecal-oral chain, cholera/typhoid, exact homemade ORS preparation formula (1L boiled water + 8 tsp sugar + 1 tsp salt), hookworm/tapeworm/roundworm prevention, youth alcohol/substance abuse (liver cirrhosis), assertiveness skills, tally-chart surveys, and tippy-tap handwashing construction.

**Visual Roadmap Milestone Batch 7 Completed (Master Visual Roadmap 100% Complete):**
- Generated 5 final primary school textbook illustrations inside `app/public/images/`:
  - `composition-paragraph-structure.png` linked to `writing-reading` (English)
  - `ple-exam-instruction-sheet.png` linked to `exam-conduct` (English)
  - `conductors-vs-insulators.png` linked to `conductors-insulators` (Science)
  - `fossil-fuels-formation.png` linked to `fossil-fuels` (Science)
  - `partition-of-africa-1884.png` linked to `scramble-partition` (Social Studies)
- Total live linked images across all 4 subjects: **41 verified textbook visual assets** (Science: 18, Social Studies: 13, Mathematics: 7, English: 3).

**Visual Roadmap Milestone Batch 6 Completed (Mathematics Sets & Geometry):**
- Generated 5 new primary school mathematics textbook illustrations inside `app/public/images/math/`:
  - `venn-diagram-4-regions.png` linked to `venn-diagrams-2-events-core`
  - `subset-venn-diagram.png` linked to `subsets-core`
  - `parallel-perpendicular-transversal.png` linked to `parallel-skew-lines-core`
  - `triangles-quadrilaterals-chart.png` linked to `simple-polygons-core`
  - `regular-polygons-angles.png` linked to `regular-polygons-core`
- Total live linked images across all 4 subjects: **36 verified textbook visual assets**.

**Visual Roadmap Milestone Batch 5 Completed (History, Math Geometry & English Letters):**
- Generated 5 new primary school textbook illustrations inside `app/public/images/`:
  - `bantu-nilote-migration-map.png` linked to `major-ethnic-groups`
  - `triangular-trade-map.png` linked to `triangular-trade`
  - `angle-types-gallery.png` linked to `line-segments-angles-core`
  - `compass-bearings-diagram.png` linked to `bearing-scale-drawing-core`
  - `letter-layouts.png` linked to `informal-format`
- Total live linked images across all 4 subjects: **31 verified textbook visual assets**.

**Visual Roadmap Milestone Batch 4 Completed (Public Health, Ecology & Value Addition):**
- Generated 5 new primary school textbook illustrations inside `app/public/images/`:
  - `anopheles-mosquito-life-cycle.png` linked to `malaria-vector-control`
  - `tippy-tap-handwashing.png` linked to `school-health-clubs`
  - `three-classes-of-levers.png` linked to `lever-basics`
  - `carbon-oxygen-cycle.png` linked to `plant-animal-interdependence`
  - `mining-and-agriculture-processing.png` linked to `major-economic-resources-africa`
- Total live linked images across the app: **26 verified textbook visual assets**.

**Visual Roadmap Milestone Batch 3 Completed & Truthful Visual Pills:**
- Generated 5 new primary school geography textbook illustrations inside `app/public/images/social-studies/`:
  - `africa-latitudes-longitudes.png` linked to `major-lines-cross-africa`
  - `block-and-fold-mountains.png` linked to `mountains-highlands-africa`
  - `africa-climatic-zones.png` linked to `equatorial-tropical`
  - `africa-vegetation-belts.png` linked to `forest-vegetation`
  - `major-rivers-lakes-map.png` linked to `rivers-of-africa`
- Total live linked images across the app: **21 verified textbook visual assets**.
- Created universal helper function `getTopicVisualPill(topic)` in `app/lib/topics.ts` and updated all landing pages (`science/p7`, `social-studies/p7`, `math/p7`) so topic card visual pills ("Includes images" / "Includes diagrams") dynamically reflect verified visual content with 0% false positives.

**Visual Roadmap Milestone Batch 2 Completed (Science Anatomy & Physics):**
- Generated 5 new primary school textbook illustrations inside `app/public/images/science/`:
  - `hinge-and-ball-joints.png` linked to `joint-types`
  - `kidney-nephron-diagram.png` linked to `kidney-structure-function`
  - `bar-magnet-field-lines.png` linked to `magnetic-materials`
  - `electromagnet-nail-coil.png` linked to `electromagnet-setup`
  - `pinhole-camera-ray-diagram.png` linked to `pinhole-camera`
- Total live linked images across the app: **16 high-quality textbook visual assets**.

**Visual Roadmap Spec & Milestone Batch 1 Visual Integration:**
- Created **`docs/spec/visual-roadmap-v3.md`**, mapping out every module requiring native textbook diagrams across all 4 subjects grouped into 5 phased milestone batches of 5 images each.
- Generated and linked 5 new textbook illustrations for **Milestone Batch 1**:
  - `simple-electric-circuit.png` linked to `circuit-components`
  - `human-skin-cross-section.png` linked to `skin-structure-layers`
  - `human-eye-anatomy.png` linked to `human-eye-structure-care`
  - `great-rift-valley-formation.png` linked to `rift-valley`
  - `relief-orographic-rainfall.png` linked to `latitude-altitude-distance`
- Total live linked images across Science and SST: **11 high-quality textbook assets**.

**Deep NCDC Curriculum Audit across SST, Science, and English:**
- **Social Studies (`social-topics.ts`):** Added explicit subtopics and modules for **Forms of Government** (Democracy/Republics, Monarchies e.g. Eswatini/Morocco, Military Rule/Dictatorships) and **Political Instabilities** (causes: colonial borders, tribalism, coups; effects: refugees/IDPs; solutions: AU peacekeeping). Expanded economic challenges into 5 dedicated modules.
- **Integrated Science (`science-topics.ts`):** Enriched topics 5–8 from thin summaries into 14 comprehensive subtopics and 30 deep modules covering every NCDC competency.
- **English (`english-topics.ts`):** Enriched letter writing format, layout, and vocabulary modules.

**Mathematics Restructuring & Lesson Structure v3 Completion:**
- Restructured `app/lib/topics.ts` from 38 fragmented micro-topics into the **11 official NCDC Topics across 6 Themes** (`set-concepts`, `whole-numbers`, `operations-on-whole-numbers`, `patterns-and-sequences`, `fractions`, `integers`, `data-handling`, `construction`, `time`, `length-mass-capacity`, `algebra`).
- Preserved all 38 previous micro-competencies inside the 11 topics as clickable v3 `subtopics` and paginated `modules`. Updated `getTopic` with fallback subtopic lookup so legacy references resolve seamlessly.
- Updated `MATHS_BANK` in `app/lib/question-bank.ts` to pool questions under the 11 official parent topics.

**Builds:** Production build passed cleanly: `✓ Generating static pages (94/94)`.

**Docs:** Updated `STATUS.md`, `HANDOFF.md`, `CHECKLIST.md`, `CHANGELOG.md`.

---

## What to do in the next session (no-context restart)

1. **Run the build** to confirm the workspace is healthy:
   ```bash
   cd /home/user/tendo-ug/app && npm install && npm run build
   ```
   Expected: `✓ Generating static pages (143/143)`.

2. **Execute Primary Six (P6) Expansion Milestone 3b & Milestone 4:**
   - Author deep P6 Lesson Structure v3 content layer across Mathematics, English Language, and Religious Education (`p6-math-topics.ts`, `p6-english-topics.ts`, `p6-re-topics.ts`).
   - Connect P6 practice banks and Teacher Dashboard class filtering.
   - With all 5 official PLE subjects (Mathematics, English Language, Integrated Science, Social Studies, and Religious Education—both CRE and IRE) 100% complete, fully audited against official NCDC requirement sheets, running on Lesson Structure v3, and supported by 41 textbook illustrations, focus next on classroom pilot testing.

3. **Update root docs every session** — mandatory:
   - `STATUS.md`, `HANDOFF.md`, `CHECKLIST.md`, `CHANGELOG.md`

---

## Key files / directories

- `app/lib/topics.ts` — v3 type definitions
- `app/lib/social-topics.ts` — Social Studies topics — **10/10 v3**
- `app/lib/science-topics.ts` — Integrated Science topics — **8/8 v3**
- `app/lib/english-topics.ts` — English topics — **7/7 v3**
- `app/lib/topics.ts` — Mathematics topics — **11/11 v3 (restructured NCDC model)**
- `app/components/TopicTabs.tsx` — ModularTopicView
- `docs/spec/tendo-lesson-structure-v3-modular.md`
- `docs/ncdc-extracts/p7-sst-topic-0{1..10}-*.md` — complete set
- `content/curriculum/` — NCDC curriculum JSONs

---

## Build and verification

```bash
cd /home/user/tendo-ug/app
npm install
npm run build
```
Latest: `✓ Generating static pages (148/148)`

---

## Copy / push categories — Complete v3 Rollout & Image Integration Milestone

### 1. Static Images Folder — COPY ALL 41 IMAGES
Copy the `app/public/images/` directory into your local repository's `app/public/images/` folder:
- `app/public/images/science/food-chain.png`
- `app/public/images/science/human-skeleton.png`
- `app/public/images/science/light-refraction.png`
- `app/public/images/science/urinary-system.png`
- `app/public/images/science/simple-electric-circuit.png` *(Batch 1)*
- `app/public/images/science/human-skin-cross-section.png` *(Batch 1)*
- `app/public/images/science/human-eye-anatomy.png` *(Batch 1)*
- `app/public/images/science/hinge-and-ball-joints.png` *(Batch 2)*
- `app/public/images/science/kidney-nephron-diagram.png` *(Batch 2)*
- `app/public/images/science/bar-magnet-field-lines.png` *(Batch 2)*
- `app/public/images/science/electromagnet-nail-coil.png` *(Batch 2)*
- `app/public/images/science/pinhole-camera-ray-diagram.png` *(Batch 2)*
- `app/public/images/science/anopheles-mosquito-life-cycle.png` *(Batch 4)*
- `app/public/images/science/tippy-tap-handwashing.png` *(Batch 4)*
- `app/public/images/science/three-classes-of-levers.png` *(Batch 4)*
- `app/public/images/science/carbon-oxygen-cycle.png` *(Batch 4)*
- `app/public/images/science/conductors-vs-insulators.png` *(NEW - Batch 7)*
- `app/public/images/science/fossil-fuels-formation.png` *(NEW - Batch 7)*
- `app/public/images/social-studies/agroforestry-farm.png`
- `app/public/images/social-studies/map-of-africa.png`
- `app/public/images/social-studies/great-rift-valley-formation.png` *(Batch 1)*
- `app/public/images/social-studies/relief-orographic-rainfall.png` *(Batch 1)*
- `app/public/images/social-studies/africa-latitudes-longitudes.png` *(Batch 3)*
- `app/public/images/social-studies/block-and-fold-mountains.png` *(Batch 3)*
- `app/public/images/social-studies/africa-climatic-zones.png` *(Batch 3)*
- `app/public/images/social-studies/africa-vegetation-belts.png` *(Batch 3)*
- `app/public/images/social-studies/major-rivers-lakes-map.png` *(Batch 3)*
- `app/public/images/social-studies/mining-and-agriculture-processing.png` *(Batch 4)*
- `app/public/images/social-studies/bantu-nilote-migration-map.png` *(Batch 5)*
- `app/public/images/social-studies/triangular-trade-map.png` *(Batch 5)*
- `app/public/images/social-studies/partition-of-africa-1884.png` *(NEW - Batch 7)*
- `app/public/images/math/angle-types-gallery.png` *(Batch 5)*
- `app/public/images/math/compass-bearings-diagram.png` *(Batch 5)*
- `app/public/images/math/venn-diagram-4-regions.png` *(Batch 6)*
- `app/public/images/math/subset-venn-diagram.png` *(Batch 6)*
- `app/public/images/math/parallel-perpendicular-transversal.png` *(Batch 6)*
- `app/public/images/math/triangles-quadrilaterals-chart.png` *(Batch 6)*
- `app/public/images/math/regular-polygons-angles.png` *(Batch 6)*
- `app/public/images/english/letter-layouts.png` *(Batch 5)*
- `app/public/images/english/composition-paragraph-structure.png` *(NEW - Batch 7)*
- `app/public/images/english/ple-exam-instruction-sheet.png` *(NEW - Batch 7)*

### 2. App-critical Code & Data — copy these files
- `app/lib/*topics.ts` — P7 and P6 topic data libraries across all 5 subjects
- `app/lib/question-bank.ts` — Calibrated practice question banks
- `app/components/ClassSelector.tsx` — Interactive Home Grade Switcher *(NEW)*
- `app/components/TopicTabs.tsx`, `TeacherDashboard.tsx`, `WorksheetGenerator.tsx`
- `app/app/globals.css`, `app/app/page.tsx`, `app/app/p6-home/page.tsx` *(NEW)*
- `app/app/[subject]/p6/` & `app/app/[subject]/p7/` — P6 and P7 static route shells

### 3. Curriculum Specifications & Root Docs — copy these files
- `content/curriculum/p6-*.json` — 5 official P6 NCDC Curriculum JSON outlines *(NEW)*
- `STATUS.md`, `HANDOFF.md`, `CHECKLIST.md`, `CHANGELOG.md`
- `docs/spec/visual-roadmap-v3.md`, `docs/spec/p6-expansion-milestones.md`

### Do not copy
- `tmp/`, `app/.next/`, `app/node_modules/`, generated/cache/build folders

**Push recommendation:** **YES — push now.** Make sure GitHub Desktop reflects these updates before pushing.

---



