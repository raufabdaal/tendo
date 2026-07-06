# Primary Six (P6) Expansion — Master Roadmap & Milestones

*Created: 2026-07-05*

Having successfully completed and audited all 5 official NCDC subjects for Primary Seven (P7) on Lesson Structure v3 with 41 textbook visual assets, Tendo now expands to **Primary Six (P6)**.

P6 is the critical foundation year in Ugandan primary schools where upper-primary concepts are introduced before PLE consolidation in P7. This document establishes the multi-phase engineering and curriculum milestones for launching P6 across the platform.

---

## Milestone 1: P6 Curriculum Mapping & NCDC Specifications (`content/curriculum/p6-*.json`)
Create official NCDC curriculum JSON outlines for P6 across all 5 subjects, mapping exact syllabus topics, subtopics, and learning outcomes:

### 1.1 P6 Social Studies (`p6-social-studies.json`) — Theme: *People and Resources of East Africa*
Unlike P7 (which covers the whole African continent), P6 strictly focuses on the **East African region (Uganda, Kenya, Tanzania, Rwanda, Burundi, South Sudan)**:
- **Topic 1:** Location of East Africa on the Map of Africa (Latitudes, Longitudes, EAC boundaries).
- **Topic 2:** Physical Features of East Africa (Rift Valley lakes, Mt. Kilimanjaro/Elgon/Kenya, coastal plains).
- **Topic 3:** Climate and Natural Vegetation of East Africa (Equatorial, Savanna, Semi-arid zones).
- **Topic 4:** The People of East Africa (Bantu, Nilotes, Cushites migrations and settlement in East Africa).
- **Topic 5:** Pre-Colonial History and Early Trade in East Africa (Long-distance trade, Arab/Swahili coastal civilization).
- **Topic 6:** Foreign Influence and Colonization of East Africa (Scramble for East Africa, IBEAC, German East Africa).
- **Topic 7:** Road to Independence in East Africa (Nationalist movements: TANU, KANU, UNC/UPC).
- **Topic 8:** The East African Community (EAC) & Regional Cooperation (Arusha headquarters, organs, benefits).

### 1.2 P6 Integrated Science (`p6-science.json`)
- **Topic 1:** Classification of Living Things (Vertebrates vs Invertebrates; Flowering vs Non-flowering plants).
- **Topic 2:** Sound Energy (Production, transmission through media, pitch, frequency, echo, the human ear).
- **Topic 3:** The Human Circulatory System (Structure of the heart, blood vessels—arteries/veins/capillaries, blood components, circulation disorders).
- **Topic 4:** The Human Respiratory System (Breathing mechanism, lungs, respiration diseases—TB, pneumonia).
- **Topic 5:** Cattle and Poultry Keeping (Breeds, housing, feeding, livestock diseases and parasites).
- **Topic 6:** Sanitation, Hygiene and Accident Management (Water purification, first aid for burns/poisoning/fractures).

### 1.3 P6 Mathematics (`p6-math.json`) (~80% overlap with P7 foundation)
- **Topic 1:** Set Concepts (Equal/equivalent sets, intersection and union up to 2 sets, Venn diagrams without complex 3-set algebra).
- **Topic 2:** Whole Numbers up to 10,000,000 (Place value, rounding, Roman numerals up to M / 1000, Base Five and Binary).
- **Topic 3:** Operations on Whole Numbers (Long arithmetic, BODMAS, prime factorization, GCF/LCM).
- **Topic 4:** Fractions, Decimals, and Percentages (Operations on fractions, terminating decimals, ratio and simple proportions).
- **Topic 5:** Geometry and Construction (Angle properties on intersecting lines, constructing $90^\circ, 60^\circ, 30^\circ$, perimeter and area of rectangles/triangles).
- **Topic 6:** Data Handling and Simple Algebra (Bar graphs, pie charts, simple one-step linear equations).

### 1.4 P6 English Language (`p6-english.json`)
- **Topic 1:** Safety on the Road (Traffic rules, vocabulary, modals of obligation: *must, should, ought to*).
- **Topic 2:** Debating (Vocabulary: *motion, proposer, opposer*, expressing agreement/disagreement).
- **Topic 3:** Family Relationships (Extended family tree vocabulary, possessive pronouns).
- **Topic 4:** Occupations and Crafts (Professions vocabulary, relative clauses).
- **Topic 5:** Hotel and Dining (Ordering food, etiquette, countable/uncountable nouns).

### 1.5 P6 Religious Education (`p6-re.json` — CRE & IRE)
- **CRE:** God's creation and human relationships, Ten Commandments applied to daily school life, miracles of Jesus, early church growth.
- **IRE:** Selected Surahs (Al-Qadr, Ad-Dhuha), Pillars of Islam (fasting rules, daily prayers), life of Prophet in Makkah, Islamic morals (honesty, hygiene).

---

## Milestone 2: Routing Architecture & Grade Switcher (`/[subject]/p6/`)
Upgrade Tendo's routing and navigation to support seamless grade selection:
1. **Home Grade Switcher (`<ClassSelector />` in `app/page.tsx`):**
   - Add a prominent primary switcher allowing students to toggle between **Primary 6 (P6)** and **Primary 7 (P7)**.
2. **P6 Subject Landing & Topic Routes:**
   - Create `/math/p6`, `/science/p6`, `/social-studies/p6`, `/english/p6`, `/re/p6`.
   - Create dynamic topic viewers `/math/p6/[topic]`, `/science/p6/[topic]`, etc., utilizing shared UI components (`TopicTabs`, `ModularTopicView`).

---

## Milestone 3: P6 Content Layer (Lesson Structure v3 Implementation)
Create dedicated P6 topic data files (`app/lib/p6-*.ts`) structured strictly to Lesson Structure v3:
- Every module must contain: `bigIdea`, multi-paragraph `learnIt`, numerical/moral `workedExample`, and multiple-choice `tryThis` quick check.
- Eliminate summary traps by ensuring 2–4 modules per subtopic.

---

## Milestone 4: P6 Practice Question Banks & Teacher Dashboard
1. **P6 Question Banks (`app/lib/p6-question-bank.ts`):**
   - Seed verified 20-question practice banks for every P6 topic to power endless practice mode (`/[subject]/p6/[topic]/practice`).
2. **Worksheet Generator & Teacher Dashboard Upgrades:**
   - Add class filtering (`P6` vs `P7`) to `/teacher/worksheet` so teachers can generate grade-specific worksheets.
   - Update `/teacher` dashboard to track student progress independently across P6 and P7 topic IDs.

---

## Milestone 5: P6 Visual Roadmap & Textbook Illustrations
Author educational primary school illustrations tailored to P6 curricula:
- **Science:** Human heart cross-section, human ear/sound wave diagrams, livestock breeds.
- **Social Studies:** Map of East African physical features, East African Community (EAC) map and flag, historical migration routes.

---

## Recommended Session Execution Order
To execute cleanly session-by-session:
1. **Session 1 (Next):** Execute Milestone 1 (Create all 5 P6 NCDC curriculum JSON specifications under `content/curriculum/p6-*.json`) & Milestone 2 (Set up routing shell and home grade switcher).
2. **Session 2:** Execute P6 Social Studies (*East Africa*) & P6 Integrated Science v3 content layer.
3. **Session 3:** Execute P6 Mathematics, English Language, and Religious Education v3 content layer.
4. **Session 4:** Connect P6 practice banks, Teacher Dashboard filters, and execute P6 Visual Batch 1.
