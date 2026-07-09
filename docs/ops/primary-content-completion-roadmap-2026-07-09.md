# Primary Content Completion Roadmap — 2026-07-09

## Update — P4 Religious Education moved live beta and P4 live-beta class sweep completed

P4 Religious Education is now live beta, completing the P4 live-beta sweep across all five app subjects.

Added:

- `app/lib/p4-re-topics.ts`
- `/re/p4`
- `/re/p4/[topic]`
- P4 RE card on `/p4-home` and the Study directory
- P4 RE practice suggestion

P4 Religious Education follows `content/curriculum/p4-re.json`, which was mapped from the NCDC/MoES Primary 4 Abridged Curriculum.

CRE topics: 11
IRE topics: 14
Total RE topics: 25

Build verification after live beta: 324 static pages.

Important: P4 is now live beta across Mathematics, English, Integrated Science, Social Studies and Religious Education. P4 RE remains explicitly beta because the source is NCDC/MoES abridged curriculum, not yet checked against the full standard P4 CRE/IRE syllabus.

---


## Update — P4 Social Studies moved live beta

P4 Social Studies is now live beta alongside P4 Mathematics, English and Integrated Science.

Added:

- `app/lib/p4-social-topics.ts`
- `/social-studies/p4`
- `/social-studies/p4/[topic]`
- P4 Social Studies card on `/p4-home` and the Study directory
- P4 Social Studies practice suggestion

P4 Social Studies follows the official NCDC P4 Social Studies theme: **Living Together in Our District**.

Topics:

1. Location of Our District in Uganda
2. Physical Features in Our District
3. Vegetation in Our District
4. People in Our District
5. Our Leaders in the District
6. How to Meet People's Needs in Our District

Build verification after live beta: 298 static pages.

Important: local-district examples and civic wording need human/teacher review before premium-final release. P4 Religious Education remains map/planning only until a decision is made about using the NCDC/MoES abridged source.

---


## Update — P4 Integrated Science moved live beta

P4 Integrated Science is now live beta alongside P4 Mathematics and P4 English.

Added:

- `app/lib/p4-science-topics.ts`
- `/science/p4`
- `/science/p4/[topic]`
- P4 Science card on `/p4-home` and the Study directory
- P4 Science practice suggestion

P4 Science follows the NCDC P4 Integrated Science topic structure:

1. Plant Life
2. Growing Crops
3. Weather Changes Around Us
4. Personal Hygiene
5. Our Food
6. Human Body Organs
7. The Teeth
8. Sanitation
9. Communicable Intestinal Diseases and Worm Infestation
10. Vectors and Diseases
11. Accidents, Poisoning and First Aid
12. Animal Life

Build verification after live beta: 291 static pages.

Important: health-sensitive wording needs human/teacher review before premium-final release. P4 Social Studies and Religious Education remain map/planning only until built.

---


## Update — P4 English moved live beta

P4 English is now live beta alongside P4 Mathematics.

Added:

- `app/lib/p4-english-topics.ts`
- `/english/p4`
- `/english/p4/[topic]`
- P4 English card on `/p4-home` and the Study directory
- P4 English practice suggestion

P4 English follows the official NCDC P4 English topic structure:

1. Describing People and Objects
2. Giving Directions
3. What I Like and How I Feel
4. Behaviour
5. Buying and Selling
6. Time
7. Expression of the Future
8. Democracy

Build verification after live beta: 278 static pages.

Important: this is live beta for review, not premium-final. P4 Science, Social Studies and Religious Education remain map/planning only until built.

---


## Update — P4 Mathematics moved live beta

P4 Mathematics is now live beta, built from the verified official NCDC P4 Mathematics map.

Added:

- `app/lib/p4-math-topics.ts`
- `/p4-home`
- `/math/p4`
- `/math/p4/[topic]`
- P4 student sign-in/session support
- P4 Mathematics study-directory and practice suggestions

P4 Mathematics follows these official NCDC topics:

1. Set Concepts
2. Whole Numbers up to 100,000
3. Operations on Whole Numbers
4. Patterns and Sequences
5. Fractions
6. 2-Dimensional Geometry
7. 3-Dimensional Geometry
8. Data Handling
9. Money
10. Time
11. Length, Mass and Capacity
12. Equations without Letters

Build verification after live beta: 269 static pages.

Important: this is live beta for review, not premium-final. Other P4 subjects remain map/planning only until built.

---


## Update — P4 Religious Education mapped from NCDC/MoES abridged curriculum

P4 Religious Education is no longer completely unmapped. A cautious map was added from the **NCDC/MoES Primary 4 Abridged Curriculum for Uganda**:

- `content/curriculum/p4-re.json`
- `docs/ncdc-extracts/p4-re-abridged-topic-extract-2026-07-09.md`

Important limitation: this is an official abridged curriculum source, not yet the full standard P4 RE syllabus. P4 RE must remain beta/planning until a standard P4 CRE/IRE syllabus is found and checked.

At the time of the RE map pass, P4 learner-facing routes were still not added. Since then, P4 Mathematics has moved live beta from the verified Mathematics map. The other P4 subjects remain map/planning only.

---


## Update — P4 Mathematics verified, P4 RE still blocks full P4 launch

P4 Mathematics has been verified against the official NCDC P4 Mathematics Syllabus PDF and the map has been corrected to the official 12-topic structure:

1. Set Concepts
2. Whole Numbers up to 100,000
3. Operations on Whole Numbers
4. Patterns and Sequences
5. Fractions
6. 2-Dimensional Geometry
7. 3-Dimensional Geometry
8. Data Handling
9. Money
10. Time
11. Length, Mass and Capacity
12. Equations without Letters

P4 Mathematics has now started as live beta. Religious Education is mapped from an NCDC/MoES abridged source, but it still needs a full standard P4 RE syllabus check before premium-final status. Keep RE beta/planning if the abridged source remains the only source.

---











## Update — P5 Religious Education moved live beta

P5 Religious Education is now live beta, completing the first live-beta P5 subject sweep.

Added:

- `app/lib/p5-re-topics.ts`
- `/re/p5`
- `/re/p5/[topic]`
- P5 Study directory Religious Education card

P5 RE follows the researched NCDC P5 CRE/IRE topic structure:

CRE topics:

1. Faith
2. Christianity and Islam
3. God's Word for Us
4. God's Word for Us: Jesus
5. We are the New People of God in the Spirit
6. We are the Church
7. Witness
8. Discipleship and its Rewards
9. Relationship with God
10. Hope

IRE topics:

1. Surat Al-Zilzala
2. Hadith: Settlement of Debts
3. Resurrection and Judgment
4. Fasting
5. Prophet Muhammad at Madina
6. Surat Al-Kauthar
7. Hadith: Good Neighbourliness
8. Paradise and Hell
9. Tarawiih and Idd Prayers
10. Last Days of Prophet Muhammad (PBUH)

Build verification after live beta: 255 static pages.

---

## Update — P5 Social Studies moved live beta

P5 Social Studies is now live beta alongside P5 Mathematics, English and Science.

Added:

- `app/lib/p5-social-topics.ts`
- `/social-studies/p5`
- `/social-studies/p5/[topic]`
- P5 Study directory Social Studies card

P5 Social Studies follows the researched NCDC P5 Social Studies topic structure:

1. Location of Uganda on the Map of East Africa
2. Physical Features in Uganda
3. Climate of Uganda
4. Vegetation in Uganda
5. Natural Resources in Uganda
6. The People of Pre-Colonial Uganda
7. Foreign Influence in Uganda
8. How Uganda Became a Nation
9. The Road to Independence
10. Uganda as an Independent Nation
11. The Government of Uganda
12. Population, Size and Distribution

Build verification after live beta: 234 static pages.

---

## Update — P5 Science moved live beta

P5 Science is now live beta alongside P5 Mathematics and P5 English.

Added:

- `app/lib/p5-science-topics.ts`
- `/science/p5`
- `/science/p5/[topic]`
- P5 Study directory Science card

P5 Science follows the researched NCDC P5 Integrated Science topic structure:

1. Keeping Poultry and Bees
2. Measurement
3. Immunisation
4. The Digestive System
5. Components of the Environment: Soil
6. Heat Energy
7. Crop Growing
8. Bacteria and Fungi
9. Types of Changes: Biological, Physical and Chemical Changes

Build verification after live beta: 221 static pages.

---

## Update — P5 English moved live beta

P5 English is now live beta alongside P5 Mathematics.

Added:

- `app/lib/p5-english-topics.ts`
- `/english/p5`
- `/english/p5/[topic]`
- P5 Study directory English card

P5 English follows the researched NCDC P5 English topic structure:

1. Vehicle Repair and Maintenance
2. Print Media
3. Travelling
4. Letter Writing
5. Communication
6. Culture
7. Peace and Security
8. Services: Banking

Build verification after live beta: 211 static pages.

---

## Update — P5 Mathematics moved from draft layer to live beta

Founder direction changed: content should go live for beta testers as it is built, not remain hidden as draft.

P5 Mathematics is now live beta:

- `app/lib/p5-math-topics.ts`
- `/p5-home`
- `/math/p5`
- `/math/p5/[topic]`
- P5 sign-in support
- P5 Study directory support

Important:

- It is live for beta/testing, not public-final.
- It remains subject to NCDC verification and human/founder review.
- Future P5 subjects should follow the same pattern: NCDC map → content layer → live beta route → review.

Build verification after live beta: 202 static pages.

---

## Update — Corrected P5 Mathematics draft content layer added

After correcting the P5 Mathematics curriculum map to the researched NCDC 12-topic structure, a new draft content layer was added:

- `app/lib/p5-math-topics.ts`

This file follows the researched P5 Mathematics topics:

1. Set Concepts
2. Whole Numbers
3. Operations on Whole Numbers
4. Patterns and Sequences
5. Fractions
6. Lines, Angles and Geometrical Figures
7. Data Handling
8. Time
9. Money
10. Length, Mass and Capacity
11. Integers
12. Algebra

Important:

- No P5 routes were added.
- P5 Mathematics is not exposed in the main app navigation.
- The content layer is for internal review only until official/trusted NCDC verification and human review are complete.

Build verification after adding the content layer: 188 static pages.

---

## Correction — P5 draft routes removed pending curriculum verification

After checking the NCDC P5 Set One structure, the earlier P5 Mathematics and P5 English draft routes/content were removed because they had been built from generic scaffolding rather than the exact researched NCDC topic structure.

P5 now remains at curriculum-map/research stage only. The updated P5 curriculum JSON files reflect the researched NCDC Set One topics more closely, but still require official/trusted source verification before building learner-facing content.

Removed:

- `app/lib/p5-math-topics.ts`
- `app/lib/p5-english-topics.ts`
- `/math/p5` routes
- `/english/p5` routes

Build after removal returned to 188 static pages.

---

## Update — P5 Mathematics and English draft content/routes added

P5 expansion has moved from curriculum-map planning into draft content for the first two subjects.

Added draft content layers:

- `app/lib/p5-math-topics.ts` — 6 P5 Mathematics topics
- `app/lib/p5-english-topics.ts` — 5 P5 English topics

Added direct internal routes:

- `/math/p5`
- `/math/p5/[topic]`
- `/english/p5`
- `/english/p5/[topic]`

Important:

- These are **draft** routes for internal review.
- P5 is not yet added to the main student sign-in flow or Study directory.
- Do not expose P5 as a primary user option until the draft maps/content have been checked against official NCDC materials.

Build verification after adding routes: 201 static pages.

---

## Update — P5 planning structure added

P5 expansion planning has started at curriculum-map level only. No P5 app routes or learner-facing pages are live yet.

Added draft curriculum maps:

- `content/curriculum/p5-math.json` — 6 draft topics
- `content/curriculum/p5-english.json` — 5 draft topics
- `content/curriculum/p5-science.json` — 5 draft topics
- `content/curriculum/p5-social-studies.json` — 5 draft topics
- `content/curriculum/p5-re.json` — 6 draft topics

Important: these are marked `draft-needs-ncdc-review`. They are planning scaffolds, not verified official maps yet. Before building learner-facing P5 content, verify against official NCDC Primary Five materials.

Proposed P5 build order after P7/P6 review:

1. P5 Mathematics
2. P5 English
3. P5 Science
4. P5 Social Studies
5. P5 Religious Education

Why this order: Maths and English create the strongest premium parent ROI foundation and give the fastest route to useful daily practice.

---


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

## Goal

Finish the primary study app systematically, starting with **Primary 7**, then moving down class by class.

This is now the top product priority. Dashboards and growth features must support this, not distract from it.

---

## Premium content standard

A topic is not “premium complete” just because it exists in code. A topic is premium complete when it has:

1. Clear syllabus alignment.
2. Correct explanations in Ugandan classroom language.
3. Enough modular lesson depth for a learner to study without a teacher beside them.
4. Worked examples where the topic needs reasoning/calculation.
5. Quick checks inside lesson modules.
6. Practice questions with explanations.
7. Writing/working space where relevant.
8. Visuals/diagrams/maps where they materially help understanding.
9. Parent-facing weakness/recommendation metadata later.
10. Human review or founder review for accuracy.

---

## Current content snapshot

### Primary 7 existing coverage

| Subject | Topics | Modules | Quiz questions | Notes |
|---|---:|---:|---:|---|
| Mathematics | 11 | 31 | 88 | Exists; some topics still thinner than premium standard |
| English | 7 | 24 | 56 | Exists; needs richer comprehension/writing rubrics later |
| Integrated Science | 8 | 45 | 64 | Strong; visuals present |
| Social Studies | 10 | 110 | 70 | Deepest content; some topics need extra visuals/maps |
| Religious Education | 14 | 32 | 112 | Exists; visuals mostly absent; review later |

P7 total current top-level topics: **50**.

### Primary 6 existing coverage

| Subject | Topics | Modules | Quiz questions | Notes |
|---|---:|---:|---:|---|
| Mathematics | 6 | 18 | 48 | Exists; has videos for math |
| English | 5 | 10 | 40 | Exists; likely needs more depth |
| Integrated Science | 5 | 17 | 40 | Exists |
| Social Studies | 6 | 20 | 48 | Exists; strong visuals |
| Religious Education | 6 | 12 | 48 | Exists |

P6 total current top-level topics: **28**.

---

## Rollout order

### Phase A — P7 premium completion

Order:

1. P7 Mathematics
2. P7 English
3. P7 Integrated Science
4. P7 Social Studies
5. P7 Religious Education

Why P7 first:

- Most urgent for PLE.
- Strongest parent ROI story.
- Current content already exists, so this is a quality/completeness push rather than starting from zero.

### Phase B — P6 premium completion

After P7 is premium-ready, upgrade P6 to the same standard.

### Phase C — Expand downward

Recommended order after P6:

1. P5
2. P4
3. P3
4. P2
5. P1

Do not rush lower-primary before P7/P6 are genuinely premium.

---






## Update — P6 premium strengthening sweep completed

The first P6 premium strengthening sweep now covers all current P6 subjects.

### P6 Mathematics
All 6 P6 Mathematics topics gained premium practice subtopics focused on real-life word problems, checking methods and exam-style reasoning.

### P6 English
All 5 P6 English topics gained premium practice subtopics focused on writing clear applied sentences and short responses.

### P6 Science
All 5 P6 Science topics gained premium practice/application subtopics focused on classification clues, sound reasoning, circulation, respiration and livestock care decisions.

### P6 Social Studies
All 6 P6 Social Studies topics gained premium practice/reasoning subtopics focused on location, physical features, climate/vegetation, migration, colonisation and EAC cooperation.

### P6 Religious Education
All 6 P6 Religious Education topics gained premium practice/application subtopics for CRE and IRE moral/application answers.

Still needed:

- Human/founder/teacher review of P6 premium additions.
- Decide next class expansion after P7/P6 review.

---

## Update — P6 premium strengthening started

After the first P7 premium layer, P6 premium audit has started.

### P6 Mathematics

All 6 P6 Mathematics topics gained a premium practice subtopic focused on real-life word problems, checking methods and exam-style reasoning.

Added focus areas:

- Set Concepts: sorting real objects and Venn word problems.
- Whole Numbers: large numbers in real-life contexts.
- Operations: multi-step word problems and operation choice.
- Fractions/Decimals/Percentages: money and percentage word problems.
- Geometry: drawing, angle reasoning, perimeter/area working.
- Data/Algebra: data stories, means and simple equations.

### P6 English

All 5 P6 English topics gained a premium practice subtopic focused on writing clear applied sentences and short responses.

Added focus areas:

- Safety on the Road: road safety notices and warnings.
- Debating: short debate points and polite disagreement.
- Family Relationships: family descriptions and possessive forms.
- Occupations and Crafts: describing work using relative clauses.
- Hotel and Dining Etiquette: polite ordering and quantifiers.

Still needed:

- Human/founder review of P6 Maths and English additions.
- Continue P6 premium audit with Science next.

---

## Update — P7 Social Studies premium strengthening started

P7 Social Studies has now received a premium reasoning layer across all 10 topics. Each topic gained a premium exam-practice subtopic focused on map reading, cause/effect explanation, balanced history, development reasoning or organisation casework.

Added focus areas:

- Location of Africa: map-location sentence answers.
- Physical Features: formation/importance reasoning.
- Climate: climate graph reading and climate-factor explanations.
- Vegetation: vegetation-climate matching and conservation decisions.
- People and Settlement: migration push/pull factors and settlement reasoning.
- Foreign Influence: chronology and balanced effects.
- Nationalism: causes of nationalism and independence timeline answers.
- Post-Independence Africa: challenges and realistic solutions.
- Economic Developments: resource-development links and trade/transport reasoning.
- Major World Organisations: organisation-function matching and challenge casework.

Current P7 Social Studies after this pass:

- 10 topics
- 55+ subtopics
- 120+ modules
- 70 quiz questions

Still needed:

- Human/founder review for history/political balance.
- Add extra visuals/maps for selected topics later if needed.

---

## Update — P7 Religious Education premium strengthening started

P7 Religious Education has now received a premium application layer across all 14 CRE/IRE topics. Each topic gained a respectful exam-practice module focused on meaning, daily application and written-answer quality.

Added focus areas:

- CRE: witnessing, talents, ancestors of faith, commandments, Jesus' teachings, Passion/Resurrection, Holy Spirit, sacraments, Christian citizenship and service.
- IRE: Tawheed/Iman, Five Pillars, Qur'an guidance, Akhlaq, Hadith/Sunnah, Seerah/Caliphs, Adab and social justice.

Current P7 RE after this pass:

- 14 topics
- 40+ subtopics
- 45+ modules
- 112 quiz questions

Still needed:

- Human/founder/teacher review for respectful wording and faith accuracy.
- Decide later whether RE needs visuals or if clear text is enough.

---

## Update — P7 Science premium strengthening started

P7 Integrated Science has now received a premium application layer across all 8 topics. Each topic gained a premium exam-practice subtopic focused on diagrams, case reasoning, practical tasks or decision-making.

Added focus areas:

- Muscular-skeletal system: diagram labelling, injuries, first aid and posture.
- Electricity and magnetism: circuit fault-finding, safety, fuses and lightning protection.
- Excretory system: organ-waste matching, urinary health, skin hygiene and safe care.
- Light energy: ray reasoning, shadows, pinhole camera, lenses and vision defects.
- Interdependence: food-web reasoning and agroforestry/conservation decisions.
- Population and health: disease transmission cases and community health actions.
- Energy resources: renewable/non-renewable comparisons and energy conservation.
- Simple machines and friction: mechanical advantage problems and friction decisions.

Current P7 Science after this pass:

- 8 topics
- 35 subtopics
- 61 modules
- 64 quiz questions

Still needed:

- Human/founder/teacher review for health-sensitive wording and scientific accuracy.
- Add parent recommendation tags later, e.g. weak in circuit reasoning, disease prevention, graph/ray interpretation.
- Continue premium audit with P7 Social Studies next.

---

## Update — P7 English premium strengthening started

P7 English has now received a premium practice layer across all 7 topics. Each topic gained an extra premium exam-practice subtopic focused on reading, writing, comprehension or written-answer quality.

Added focus areas:

- School Holidays: timetable/programme comprehension and holiday composition scoring.
- Letter Writing: choosing formal/informal format and marking checklist.
- Examinations: rubric/instruction reading and clear written examination answers.
- Electronic Media: email/message writing and online notice comprehension.
- Rights, Responsibilities and Freedom: civic passage reading and reported speech.
- Environmental Protection: cause/effect comprehension and persuasive paragraph writing.
- Ceremonies: programme/invitation reading and short ceremony speech writing.

Current P7 English after this pass:

- 7 topics
- 21 subtopics
- 38 modules
- 56 quiz questions

Still needed:

- Human/founder review for tone and correctness.
- Add longer comprehension passages later if parent-facing premium standard requires it.
- Add parent recommendation tags for writing, grammar and comprehension weaknesses later.

---

## P7 priority audit notes

### P7 Mathematics

Needs premium pass on thinner topics:

- Integers
- Time
- Algebra
- Data Handling and Graphs
- Length, Mass, Capacity and Money

Target: every Maths topic should feel as strong as the best modular topics, with worked examples and enough practice.

### P7 English

Needs:

- richer comprehension practice
- composition/writing rubric support
- grammar transformations with written-answer space
- parent-visible “writing needs practice” recommendations later

### P7 Integrated Science

Needs:

- keep diagram quality high
- add practical activity/checklist style where useful
- check health-sensitive wording carefully

### P7 Social Studies

Needs:

- extra maps/visuals for topics currently without images
- ensure political/history wording stays balanced
- reduce overwhelming passages where learner needs simpler steps

### P7 Religious Education

Needs:

- review tone and balance for CRE/IRE
- decide whether visuals are needed or whether text clarity is enough
- ensure question wording is respectful and syllabus-aligned

---

## Definition of done for a class

A class is premium-complete when:

- every official subject has all required topics
- every topic has study modules
- every topic has quiz/practice support
- no obvious placeholder/phase/demo copy remains
- content has been audited subject-by-subject
- parent dashboard can summarise progress and weaknesses meaningfully

---

## Immediate next action

Start P7 premium completion with **P7 Mathematics audit and strengthening**.

Recommended first practical task:

1. list all P7 Maths topics by current module depth
2. identify the thinnest topics
3. upgrade them one by one
4. run build
5. update audit doc
