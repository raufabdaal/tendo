# CHANGELOG — Tendo

> Newest at the top. Dated, append-only. This file records what happened; `STATUS.md` explains where the project stands now.

## v1.6.0 — 2026-07-06 — Integrate 12 Founder-Provided Mathematics Video Explainer Lessons & Build Interactive Playlist Player

**Session theme:** Seamlessly integrate 12 founder-provided YouTube video explainer lessons into exact matching subtopics and modules across Primary Seven (P7 PLE) and Primary Six (P6) Mathematics, and upgrade the video viewing architecture.

**Changed:**
- `app/lib/topics.ts` — Added `videoUrl?: string` to `SubtopicModule` interface. Embedded founder video URLs into P7 Mathematics: `set-concepts` (`youtu.be/BAUouvIwPZQ`, `youtu.be/CMHmvvz8uJE`, `youtu.be/DMH70G_NjqA`), `whole-numbers` (`youtu.be/86ge44f5IYM`, `youtu.be/rGRPJKTClYg`, `youtu.be/pEfYJgoe_2o`), `operations-on-whole-numbers` (`youtu.be/TQu3yIGHA-4`, `youtu.be/Nx4h4j4jkCc`), `patterns-and-sequences` (`youtu.be/SVG2Y4U1MTk`, `youtu.be/MUBvjysD3VI`), and `fractions` (`youtu.be/HuitLoh1Q9g`, `youtu.be/YZNXTXfemQE`).
- `app/lib/p6-math-topics.ts` — Embedded matching video URLs across P6 Mathematics topics and modules (`p6-sets`, `p6-whole-numbers`, `p6-operations`, `p6-fractions-decimals`).
- `app/components/TopicTabs.tsx` — Upgraded the Watch tab to collect all video lessons available across a topic and its subtopics, displaying an interactive video lesson switcher/playlist below the iframe. Upgraded `ModularTopicView` so learners studying a module in the Read tab can watch that module's video embedded directly above the study notes.
- Root docs updated: `STATUS.md`, `CHECKLIST.md`, `HANDOFF.md`, `CHANGELOG.md`.

**Verified locally:**
- Production build passed cleanly with `✓ Generating static pages (185/185)`.

## v1.5.0 — 2026-07-05 — Execute Primary Six (P6) Deep Content Overhaul & Visual Roadmap Integration across All 5 Subjects

**Session theme:** Conduct a deep textbook-grade content overhaul of Primary Six (P6) across Social Studies and Integrated Science, linking verified educational textbook diagrams (`/images/...`) to modules across all five P6 subjects strictly adhering to NCDC Set One specifications.

**Changed:**
- `app/lib/p6-social-topics.ts` — Upgraded P6 Social Studies library from light single-module placeholders to exhaustive multi-module subtopics matching every competency in `content/curriculum/p6-social-studies.json`. Added deep Ugandan teacher voice modules covering East African latitudes/longitudes, maritime boundaries, EAC capital expansion (Arusha headquarters), Northern/Central transit corridors for landlocked states, Great Rift Valley faulting mechanics, block vs volcanic mountains (Rwenzori vs Kilimanjaro), equatorial/savanna/montane climatic zones, relief orographic rainfall/rain shadow effects, Bantu/Nilotic migration pathways, Nyamwezi/Akamba caravan trade corridors, Anglo-German partition treaties of 1886/1890, IBEAC/GEAC administration, armed resistance by Kabalega/Mkwawa/Koitalel, and regional integration organs under EALA. Integrated 8 custom educational maps and diagrams (`africa-latitudes-longitudes.png`, `great-rift-valley-formation.png`, `block-and-fold-mountains.png`, `relief-orographic-rainfall.png`, etc.).
- `app/lib/p6-science-topics.ts` — Upgraded P6 Integrated Science library to exhaustive multi-module subtopics matching `content/curriculum/p6-science.json`. Added deep modules on the five vertebrate classes, arthropod/arachnid/myriapod invertebrate characteristics, monocot vs dicot leaf venation and root systems, spore-bearing sori in ferns and saprophytic fungi, mechanical sound wave speed in solids vs gases, frequency/amplitude pitch control, inner ear cochlea and eardrum hygiene, 4-chambered heart double circulation, artery vs vein pocket valves, plasma/haemoglobin/leukocytes/platelets, hypertension/anaemia/sickle cell hygiene, alveolar gas exchange mechanics, tobacco smoking tar hazards, dairy/beef cattle breeds (Friesian vs Zebu), deep litter vs battery cage poultry housing, and tick/tsetse/Newcastle disease vector control. Integrated 6 custom anatomical and environmental illustrations (`human-skeleton.png`, `food-chain.png`, `carbon-oxygen-cycle.png`, `anopheles-mosquito-life-cycle.png`, etc.).
- Root docs updated: `STATUS.md`, `CHECKLIST.md`, `HANDOFF.md`, `CHANGELOG.md`.

**Verified locally:**
- Production build passed cleanly with `✓ Generating static pages (185/185)`.

## v1.4.0 — 2026-07-05 — Execute Primary Six (P6) Expansion Milestones 3b & 4 (Deep Math, English, & RE v3 Libraries, Practice Banks, and Class Filtering)

**Session theme:** Complete Primary Six (P6) Expansion Milestone 3b by authoring exhaustive Lesson Structure v3 topic data libraries for P6 Mathematics, P6 English Language, and P6 Religious Education (CRE & IRE), and execute Milestone 4 by seeding P6 practice banks and connecting class level filtering on the Teacher Dashboard and Worksheet Generator.

**Changed:**
- `app/lib/p6-math-topics.ts` — Expanded library to 6 complete NCDC topics: Set Concepts up to Two Categories, Whole Numbers up to 10M, Operations on Whole Numbers (long arithmetic, BODMAS, prime factorization, GCF/LCM), Fractions/Decimals/Percentages, Geometry and Angle Properties (compass construction of 90°, 60°, 30°, perimeter/area), and Data Handling/Simple Algebra.
- `app/lib/p6-english-topics.ts` — Expanded library to 5 complete NCDC situational topics: Safety on the Road (obligation modals: must, should, ought to), Debating and Expressing Opinions (motion, officials, contrast conjunctions), Family Relationships (kinship terms, possessive apostrophes 's vs s'), Occupations and Crafts (defining relative clauses: who, which, where), and Hotel/Dining Etiquette (quantifiers: much, many, a few, a little).
- `app/lib/p6-re-topics.ts` — Expanded library to 6 complete dual CRE/IRE topics: God's Creation/Stewardship, The Ten Commandments (honesty & authority), Jesus' Healing Miracles/Compassion, Surah Al-Qadr & Ad-Dhuha (Laylatul-Qadr & care for orphans), Pillars of Islam (Sawm & Salah), and Prophet Muhammad's Early Dawah in Makkah (Al-Amin & As-Sadiq).
- `app/lib/question-bank.ts` — Seeded central P6 practice banks (`P6_MATHS_BANK`, `P6_ENGLISH_BANK`, `P6_SCIENCE_BANK`, `P6_SOCIAL_STUDIES_BANK`, `P6_RE_BANK`), bringing total practice questions across P6 and P7 into `ALL_BANKS`, tagged with class level (`grade: "P6" | "P7"`).
- `app/components/WorksheetGenerator.tsx` — Added Class / Grade level filtering (`Primary 7 (PLE)`, `Primary 6`, `Mixed Classes (P6 & P7)`) so teachers can filter bank topics and generate customized print/copy worksheets for either or both primary grades.
- `app/components/TeacherDashboard.tsx` — Connected Class / Grade level filtering across Demo Class and Device views, enabling teachers to filter topic bar charts and student drill-downs by class.
- `app/app/[subject]/p6/[topic]/page.tsx` & `app/app/[subject]/p6/[topic]/practice/page.tsx` — Created endless practice runner pages for all P6 subjects and integrated Practice CTAs on all P6 topic pages.
- Root docs updated: `STATUS.md`, `CHECKLIST.md`, `HANDOFF.md`, `CHANGELOG.md`.

**Verified locally:**
- Production build passed cleanly with `✓ Generating static pages (185/185)`.

## v1.3.0 — 2026-07-05 — Execute Primary Six (P6) Expansion Milestone 3 (Deep Social Studies & Integrated Science content layer)

**Session theme:** Execute Primary Six (P6) Expansion Milestone 3 by building out exhaustive multi-module Lesson Structure v3 topic libraries across P6 Social Studies (*People and Resources of East Africa*) and P6 Integrated Science.

**Changed:**
- `app/lib/p6-social-topics.ts` — Created complete 6-topic regional library covering East African location, Rift Valley/volcanic mountains, equatorial/savanna climates, Bantu/Nilotic migrations, pre-colonial long-distance trade (Nyamwezi/Akamba), partition & chartered companies (IBEAC), and nationalist movements leading to the East African Community (EAC).
- `app/lib/p6-science-topics.ts` — Created complete 5-topic biological library covering classification of living things (vertebrates vs invertebrates, flowering vs non-flowering), sound energy & human ear anatomy, double circulatory system (4 heart chambers, blood components), respiratory system (alveoli gas exchange, lung hygiene), and livestock/poultry management (cattle breeds, deep litter housing, tick/tsetse control).
- Root docs updated: `STATUS.md`, `CHECKLIST.md`, `HANDOFF.md`, `CHANGELOG.md`.

**Verified locally:**
- Production build passed cleanly with `✓ Generating static pages (143/143)`.

## v1.2.0 — 2026-07-05 — Execute Primary Six (P6) Expansion Milestone 1 & Milestone 2 (Curriculum Specs & Grade Switcher)

**Session theme:** Execute Primary Six (P6) Expansion Milestone 1 (NCDC Curriculum specifications) and Milestone 2 (Routing & Grade Switcher architecture).

**Changed:**
- `content/curriculum/` — Created 5 comprehensive NCDC Set One curriculum JSON specifications for Primary Six:
  - `p6-social-studies.json` (East Africa: location, physical features, climate/vegetation, people/migrations, pre-colonial trade, colonization, road to independence, and East African Community EAC).
  - `p6-science.json` (Diversity of living things classification, sound energy, circulatory system, respiratory system, cattle/poultry keeping, sanitation/hygiene).
  - `p6-math.json` (Set concepts up to 2 categories, whole numbers up to 10M, long arithmetic/BODMAS/prime factors, fractions/decimals/percentages, geometry/angles, data handling).
  - `p6-english.json` (Functional grammar & vocabulary: road safety, debating, family relationships, occupations/crafts, hotel/dining etiquette).
  - `p6-re.json` (CRE creation/commandments/miracles & IRE Surahs/fasting/Makkah history).
- `app/components/ClassSelector.tsx` — Built interactive home grade switcher allowing learners to toggle between Primary Seven (`/?class=P7`) and Primary Six (`/p6-home`).
- `app/app/p6-home/page.tsx` — Created dedicated Primary Six landing overview offering all 5 P6 subjects.
- `app/lib/p6-*.ts` & `app/app/[subject]/p6/` — Created P6 baseline data libraries and static route shells (`/math/p6`, `/science/p6`, `/social-studies/p6`, `/english/p6`, `/re/p6`) structured on Lesson Structure v3.

**Verified locally:**
- Production build passed cleanly with `✓ Generating static pages (134/134)`. Both Primary 6 and Primary 7 classes are now live across all 5 subjects.

## v1.1.0 — 2026-07-05 — Establish Primary Six (P6) Expansion Master Roadmap & Milestones

**Session theme:** Establish comprehensive specification and milestone plan for expanding Tendo from a single class (P7) to supporting Primary Six (P6) across all 5 official NCDC subjects.

**Changed:**
- `docs/spec/p6-expansion-milestones.md` — Created master architectural and curriculum roadmap mapping out 5 structured milestones for P6 expansion:
  - *Milestone 1:* P6 NCDC Curriculum specifications (`content/curriculum/p6-*.json` across Social Studies East Africa, Science, Math, English, and Religious Education).
  - *Milestone 2:* Routing & Grade Switcher architecture (`<ClassSelector />`, `/math/p6`, `/science/p6`, etc.).
  - *Milestone 3:* P6 Lesson Structure v3 content layer (`app/lib/p6-*.ts`).
  - *Milestone 4:* P6 practice question banks and Teacher Dashboard / Worksheet Generator filters.
  - *Milestone 5:* P6 Visual Roadmap and textbook illustrations.
- `DECISIONS.md` — Logged decision `DEV-021` documenting the P6 expansion architectural strategy.
- Root docs updated: `STATUS.md`, `CHECKLIST.md`, `HANDOFF.md`.

## v1.0.1 — 2026-07-05 — Complete NCDC Religious Education exhaustive content enrichment pass (14 official CRE & IRE topics)

**Session theme:** Rigorously audit, expand, and enrich all 14 official P7 Religious Education topics (7 CRE + 7 IRE) against the official NCDC specification requirement sheet across Terms 1, 2, and 3.

**Changed:**
- `app/lib/re-topics.ts` — Upgraded Religious Education to exactly 14 official NCDC topics (7 CRE + 7 IRE), eliminating summary traps and injecting 100% of all required theological definitions, historical figures, parables, miracles, and ethical rulings:
  - **Part I: CRE (7 Topics):**
    1. *Overview of Theme:* "Witnessing for Christ" daily application, Parable of Talents (Matthew 25).
    2. *Ancestors & Pioneers:* Old Testament giants (Abraham, Moses, David Psalm 51 repentance), New Testament pioneers (John the Baptist, Peter, Paul), and Uganda Martyrs (St. Charles Lwanga at Namugongo 3 June 1886).
    3. *God's Freedom & Law:* Ten Commandments (Decalogue at Mt. Sinai: duties to God 1-4 vs neighbors 5-10), Christian freedom vs lawlessness (Galatians 5:13).
    4. *Person & Ministry of Jesus:* Major Parables (Prodigal Son, Good Samaritan, Sower), Miracles (healing, nature, raising Lazarus), Sermon on the Mount & Beatitudes (Matthew 5).
    5. *Passion, Death & Resurrection:* Palm Sunday, Last Supper foot washing & Eucharist, Judas betrayal, trials before Caiaphas/Pilate, Peter's denial, Golgotha crucifixion, Easter empty tomb.
    6. *Holy Spirit & Church:* Pentecost rushing wind/fire (Acts 2), Spiritual Gifts (1 Cor 12) vs Fruits (Gal 5:22-23), Sacraments (Baptism, Holy Communion, Confirmation).
    7. *Christian Citizenship & Service:* Civic leadership obedience (Romans 13, praying for leaders 1 Tim 2), biblical work ethics combating laziness (2 Thess 3:10), social justice toward orphans/widows/refugees (James 1:27).
  - **Part II: IRE (7 Topics):**
    1. *Surat al-Fatiha & Selected Surahs:* Al-Fatiha Tajweed/meaning as mandatory Salah pillar, protective short Surahs (Al-Ikhlas, Al-Falaq, An-Nas Al-Mu'awwidhatayn, Al-Asr time valuation).
    2. *Tawheed & Iman:* 6 Pillars of Iman, Asma-ul-Husna (99 Names: Al-Alim, Al-Quddus, As-Salam), Shirk definition (Major Shirk vs Minor Shirk / Riya) as unforgivable sin.
    3. *Holy Qur'an as Guided Book:* Cave Hira revelation (Laylatul Qadr, Iqra Surah Al-Alaq via Jibril over 23 years), compilation under Caliphs Abu Bakr and Uthman (Mushaf standardization by Zayd ibn Thabit), Wudhu purity rules.
    4. *Fiqh & Ibadah:* 5 Pillars practical application, Salah prerequisites/Fard/Sunnah Taraweeh/invalidators, Zakah calculation ($2.5\%$) vs Sadaqah, 8 official Qur'anic recipient categories (Surah At-Tawbah 9:60).
    5. *Hadith & Sunnah:* Hadith vs Sunnah distinction, prophetic Hadiths on Akhlaq morals (cleanliness "Taharah is half of faith", honoring mothers 3 times, neighborly rights, truthfulness).
    6. *History & Seerah:* Prophet in Makkah (Al-Amin), Hijrah migration to Madinah ($622\text{ AD}$, calendar change, Ansar/Muhajirun brotherhood), Rightly Guided Caliphs Khulafa-ur-Rashidun (Abu Bakr, Umar Al-Farooq Bait-ul-Mal, Uthman Dhun-Nurayn, Ali).
    7. *Adab & Social Justice:* Modesty dress code (Awrah navel to knee, Hijab), Halal vs Haram dietary laws (pork, blood, intoxicants/Khamr), Marketplace business ethics against short measures (Al-Mutaffifin), Riba (usury), and hoarding (Ihtikar).

**Verified locally:**
- Production build passed cleanly with `✓ Generating static pages (123/123)`. All 5 official P7 PLE subjects (Mathematics, English Language, Integrated Science, Social Studies, and Religious Education CRE/IRE) are now 100% enriched against official NCDC specification requirement sheets.

## v1.0.0 — 2026-07-05 — Complete P7 Religious Education (CRE & IRE) rollout — All 5 PLE subjects live!

**Session theme:** Conduct deep research and build the final P7 subject, Religious Education, offering complete coverage of both Christian Religious Education (CRE) and Islamic Religious Education (IRE) under the official NCDC Set One syllabus.

**Changed:**
- `app/lib/re-topics.ts` — Created complete data file exporting 6 official CRE topics and 5 official IRE topics structured in Lesson Structure v3 modular format:
  - **CRE Topics:** God's Creation and Fall of Man (`cre-gods-creation-fall`), Jesus Christ Our Savior and Holy Spirit (`cre-jesus-savior-spirit`), Christian Living, Worship & Sacraments (`cre-living-worship`), Christian Approaches to Social/Ethical Issues (`cre-social-ethical`), The Church in Uganda, Uganda Martyrs & Heritage (`cre-uganda-martyrs-heritage`), and Serving Others & Christian Citizenship (`cre-serving-citizenship`).
  - **IRE Topics:** Belief in Allah (Tawhid) & Articles of Faith (`ire-tawhid-iman`), The 5 Pillars of Islam (`ire-pillars-ibadah`), Holy Qur'an & Hadith Guidance (`ire-quran-hadith`), Islamic Morals & Ethics (`ire-akhlaq-morals`), and History of Islam in Uganda (`ire-history-uganda`).
- `app/lib/question-bank.ts` — Added `CRE_BANK` and `IRE_BANK` with 88 practice questions across all 11 RE topics.
- `app/app/re/p7/page.tsx`, `app/app/re/p7/[topic]/page.tsx`, & `app/app/re/p7/[topic]/practice/page.tsx` — Created full subject landing page and static topic/practice routes for Religious Education.
- `app/app/page.tsx`, `app/components/TeacherDashboard.tsx`, & `app/components/WorksheetGenerator.tsx` — Added Religious Education subject cards, teacher progress reporting, and worksheet generator support.

**Verified locally:**
- Production build passed cleanly with `✓ Generating static pages (117/117)`. All 5 official NCDC primary school subjects (Mathematics, English Language, Integrated Science, Social Studies, and Religious Education) are now 100% complete and live.

## v0.9.12 — 2026-07-05 — Complete NCDC Mathematics exhaustive module expansion and content enrichment pass

**Session theme:** Eliminate single-paragraph summary traps in Mathematics and inject 100% of all official NCDC specification requirement terms across all 11 topics and 6 themes.

**Changed:**
- `app/lib/topics.ts` — Performed deep module expansion and content enrichment across all 11 Mathematics topics, ensuring every module includes step-by-step calculations, numerical `workedExample` breakdowns, and multiple-choice `tryThis` checks:
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

**Verified locally:**
- Production build passed cleanly with `✓ Generating static pages (94/94)`. All 4 active subjects (Science, SST, English Language, Mathematics) are now 100% enriched against official NCDC specification requirement sheets.

## v0.9.11 — 2026-07-05 — Complete NCDC Mathematics exhaustive content enrichment pass

**Session theme:** Rigorously audit and enrich all 11 P7 Mathematics topics across 6 themes against the official NCDC specification requirement sheet.

**Changed:**
- `app/lib/topics.ts` — Performed exhaustive content injection ensuring 100% inclusion of all official NCDC requirement terms, set definitions, arithmetic properties, geometric constructions, and inequality representation rules:
  - **Topic 1 (Set Concepts):** Added Disjoint sets (sharing zero elements), Difference of sets ($A - B$ / Only A and $B - A$ / Only B), and Complement of a set ($A'$).
  - **Topic 3 (Operations on Whole Numbers):** Added Commutative ($a+b=b+a$), Associative, and Distributive properties over addition ($a(b+c)=ab+ac$). Added exact Venn diagram product rules for GCF (intersection product) and LCM (union product).
  - **Topic 5 (Fractions, Decimals & Percentages):** Added Recurring / repeating decimals ($0.333\ldots = 1/3$), Inverse / indirect proportion calculations ($3 \times 8 = 24$ man-days), and ratio sharing.
  - **Topic 7 (Data Handling & Graphs):** Added Pictograms (data representation using symbol keys) and 4-quadrant Cartesian coordinate plotting.
  - **Topic 8 (Construction & Geometry):** Added ruler/compass bisecting rules, exact angle constructions ($90^\circ, 60^\circ, 45^\circ, 30^\circ, 15^\circ, 135^\circ, 120^\circ$), and 3-figure clockwise back bearing calculation rules ($+180^\circ$ or $-180^\circ$).
  - **Topic 10 (Length, Mass, Capacity & Money):** Added 3D prism volume ($V = \text{base area} \times h$), composite surface area, and capacity conversion rule ($1000\text{ cm}^3 = 1\text{ litre}$).
  - **Topic 11 (Algebra):** Added Compound inequalities ($-2 < x \le 5$), inequality sign flip rule when dividing/multiplying by negatives, and open/closed circle number line representation.

**Verified locally:**
- Production build passed cleanly with `✓ Generating static pages (94/94)`.

## v0.9.10 — 2026-07-05 — Complete NCDC English Language exhaustive content enrichment pass

**Session theme:** Rigorously audit and enrich all 7 P7 English Language topics against the official NCDC specification requirement sheet across Terms 1, 2, and 3.

**Changed:**
- `app/lib/english-topics.ts` — Performed exhaustive content injection ensuring 100% inclusion of all official NCDC requirement terms, grammatical transformations, and functional writing conventions:
  - **Topic 1 (School Holidays):** Added exact Future Simple rules (*shall* vs *will*), prior intention structure (*going to*), and sequential time conjunctions (*as soon as*, *immediately*, *no sooner had... than...* with inverted *had* subject word order).
  - **Topic 2 (Letter Writing):** Added single-address informal friendly layout vs double-address formal official layout, exact salutation pairings (*Dear Sir/Madam* strictly with *Yours faithfully*; named greetings with *Yours sincerely*), and excuse duty / job application templates.
  - **Topic 3 (Examinations):** Added assessment vocabulary (*invigilator*, *candidate*, *index number*, *pass slip*), complete coverage of Conditionals 1, 2, and 3 (*If I study...* / *If I studied...* / *If I had studied...*), purpose structures (*so... that*, *too... to*, *in order to*), and examination rubric rules.
  - **Topic 4 (Electronic Media):** Added modern media vocabulary (*broadcast*, *presenter*, *download*, *viral*), Active and Passive Voice conversions across tenses, and preference grammar (*prefer... to...*, *like... more than...*, *interested in...*).
  - **Topic 5 (Rights, Responsibilities & Freedom):** Added civic vocabulary (*citizen*, *child abuse*, *fair trial*, *violate*), Direct and Indirect (Reported) Speech rules (pronoun, tense backshifting, time/place adverbs), and contrast conjunctions (*although*, *even if*, *in spite of*, *despite* without *of*).
  - **Topic 6 (Environmental Protection):** Added ecology vocabulary (*pollution*, *afforestation*, *poach*, *ecosystem*), Relative Pronouns (*who*, *which*, *whose*, *whom*, *that*), and cause/effect connectors (*because*, *since*, *as a result of*).
  - **Topic 7 (Ceremonies):** Added gathering vocabulary (*MC*, *guest of honor*, *bride*, *RSVP*), Adverbial Clauses of Time (*while*, *whereas*, *during*), and Question Tag golden polarity rules across complex tenses (including negative trap words like *rarely*, *hardly*, *never*, *seldom* requiring positive tags).

**Verified locally:**
- Production build passed cleanly with `✓ Generating static pages (94/94)`.

## v0.9.9 — 2026-07-05 — Complete NCDC Social Studies exhaustive content enrichment pass

**Session theme:** Rigorously audit and enrich all 10 P7 Social Studies topics against the official NCDC specification requirement sheet across Terms 1, 2, and 3.

**Changed:**
- `app/lib/social-topics.ts` — Performed exhaustive content injection ensuring 100% inclusion of all official NCDC requirement terms and concepts:
  - **Topic 1 (Location):** Added exact longitude time calculation ($1^\circ = 4\text{ minutes}$), 16 compass cardinal/secondary/tertiary points, island nations (Madagascar, Seychelles), and landlocked country challenges.
  - **Topic 2 (Physical Features):** Added river stages (youthful V-valley gorges, mature meanders, old deltas/ox-bows), lake formation by crustal sagging/downwarping (Lake Victoria, Lake Kyoga), and volcanic/faulting hazards.
  - **Topic 3 (Climate):** Added ocean current impacts (warm Agulhas/Mozambique vs cold Benguela/Canary forming 800 km Namib Desert), ceilometer cloud ceiling height, and Stevenson Screen louvered structure.
  - **Topic 5 (People of Africa):** Added Cushites, Semites/Berbers, Negroes, and Khoisan (San hunters & Khoikhoi pastoralists of the Kalahari).
  - **Topic 6 (Foreign Influence):** Added Trans-Saharan camel trade (gold for salt), Trans-Atlantic Triangular Trade, and colonial systems (British Indirect Rule, French Assimilation, Belgian Paternalism in Congo).
  - **Topic 7 (Nationalism):** Added active armed resistance leaders and rebellions (Dedan Kimathi Mau Mau in Kenya, Kinjikitile Ngwale Maji Maji in Tanzania, Omukama Kabalega of Bunyoro) and collaborators (Apollo Kaggwa, Semei Kakungulu).
  - **Topic 10 (World Organisations):** Added Commonwealth Heads of Government Meeting (CHOGM) and specialized UN agencies.

**Verified locally:**
- Production build passed cleanly with `✓ Generating static pages (94/94)`.

## v0.9.8 — 2026-07-05 — Complete NCDC Integrated Science exhaustive content enrichment pass

**Session theme:** Rigorously expand all 6 core P7 Integrated Science topics against the official NCDC specification requirement sheet across Terms 1, 2, and 3.

**Changed:**
- `app/lib/science-topics.ts` — Performed deep, exhaustive expansion across all core P7 topics and preserved crossover topics:
  - **Topic 1 (Skeletal/Muscular):** Added exoskeleton/endoskeleton/hydrostatic distinctions, synovial joint structures (cartilage, synovial fluid, ligaments, tendons), cardiac muscles, antagonistic action (biceps/triceps), and specific disorders (rickets, osteoporosis, polio, fractures, sprains, strains, dislocations).
  - **Topic 2 (Electricity/Magnetism):** Added static electricity laws, lightning formation and lightning arrester mechanism, series vs parallel circuits, voltage/current/resistance definitions, electric bell structure and working, demagnetization methods, and magnetic keepers.
  - **Topic 3 (Excretory System):** Added core biological distinction between excretion and egestion, liver deamination and bile pigments, internal kidney anatomy (cortex, medulla, pelvis), skin layers (epidermis with Malpighian melanin, dermis with sweat glands), and specific disorders (nephritis, stones, failure, cirrhosis, hepatitis, ringworm, scabies).
  - **Topic 4 (Light Energy):** Added speed of light (300,000 km/s), rectilinear propagation, beams, umbra/penumbra shadows, solar/lunar eclipses, pinhole camera aperture effects, laws of reflection, periscopes, real vs apparent depth, ROYGBIV dispersion, eye cross-section anatomy, and myopia/hypermetropia lens corrections.
  - **Topic 5 (Interdependence):** Added biotic/abiotic distinctions, plant-animal gas exchange, 4-stage food chains/webs with decomposers, and agroforestry management (nitrogen-fixing trees, coppicing, pollarding, lopping, fire lines).
  - **Topic 6 (Population & Health):** Added female Anopheles 4-stage life cycle and vector control, housefly transmission, 4 Fs faecal-oral chain, cholera/typhoid, exact homemade ORS preparation formula (1L boiled water + 8 tsp sugar + 1 tsp salt), hookworm/tapeworm/roundworm prevention, youth alcohol/substance abuse (liver cirrhosis), assertiveness skills, tally-chart surveys, and tippy-tap handwashing construction.

**Verified locally:**
- Production build passed cleanly with `✓ Generating static pages (94/94)`.

## v0.9.7 — 2026-07-05 — Visual Roadmap 100% complete (Milestone Batch 7 English Writing, Science & SST History illustrations)

**Session theme:** Execute final Visual Roadmap Milestone Batch 7 across P7 English, Integrated Science, and Social Studies modules, completing the master visual specification.

**Changed:**
- `public/images/` — Generated 5 final primary school textbook illustrations for Milestone Batch 7:
  - `/images/english/composition-paragraph-structure.png` (Hamburger paragraph model: topic sentence introduction, supporting details body, concluding closing).
  - `/images/english/ple-exam-instruction-sheet.png` (PLE exam instructions sheet highlighting careful reading and time budgeting).
  - `/images/science/conductors-vs-insulators.png` (Comparison of shiny copper wire conducting vs rubber/wood acting as electrical insulators).
  - `/images/science/fossil-fuels-formation.png` (Geological cross-section showing prehistoric strata transforming into coal and petroleum under pressure).
  - `/images/social-studies/partition-of-africa-1884.png` (Map illustrating European colonial partition of Africa following 1884 Berlin Conference).
- `app/lib/english-topics.ts`, `app/lib/science-topics.ts`, & `app/lib/social-topics.ts` — Linked all 5 Milestone Batch 7 illustrations directly into core learning modules (`writing-reading`, `exam-conduct`, `conductors-insulators`, `fossil-fuels`, `scramble-partition`). Total live textbook illustrations across all 4 subjects now at **41 verified assets** (Science: 18, SST: 13, Math: 7, English: 3).
- `docs/spec/visual-roadmap-v3.md` — Updated master visual spec marking all 7 phased milestone batches as 100% completed.

**Verified locally:**
- Production build passed cleanly with `✓ Generating static pages (94/94)`.

## v0.9.6 — 2026-07-05 — Visual Roadmap Milestone Batch 6 complete (Mathematics Sets & Geometry illustrations)

**Session theme:** Execute Visual Roadmap Milestone Batch 6 across P7 Mathematics sets and geometry modules.

**Changed:**
- `public/images/math/` — Generated 5 high-clarity primary school mathematics textbook illustrations for Milestone Batch 6:
  - `/images/math/venn-diagram-4-regions.png` (Two-circle Venn diagram illustrating only A, intersection both, only B, and neither outside).
  - `/images/math/subset-venn-diagram.png` (Subset Venn diagram showing Set A enclosed inside Set B).
  - `/images/math/parallel-perpendicular-transversal.png` (Parallel lines cut by a transversal illustrating alternate and corresponding angles).
  - `/images/math/triangles-quadrilaterals-chart.png` (Chart comparing equilateral/right triangles and rectangle/square properties).
  - `/images/math/regular-polygons-angles.png` (Regular pentagon and hexagon illustrating interior/exterior angle relationships).
- `app/lib/topics.ts` — Linked all 5 Milestone Batch 6 illustrations directly into core mathematics modules (`venn-diagrams-2-events-core`, `subsets-core`, `parallel-skew-lines-core`, `simple-polygons-core`, `regular-polygons-core`). Total live textbook illustrations now at **36 verified assets** across all 4 subjects.
- `docs/spec/visual-roadmap-v3.md` — Updated master visual spec moving Batch 6 into completed status and staging the final batch: Milestone Batch 7 (English Writing Aids & Advanced Science).

**Verified locally:**
- Production build passed cleanly with `✓ Generating static pages (94/94)`.

## v0.9.5 — 2026-07-05 — Visual Roadmap Milestone Batch 5 complete (History, Geometry & English Letter Layout illustrations)

**Session theme:** Execute Visual Roadmap Milestone Batch 5 across P7 Social Studies, Mathematics, and English modules.

**Changed:**
- `public/images/` — Generated 5 primary school textbook illustrations for Milestone Batch 5:
  - `/images/social-studies/bantu-nilote-migration-map.png` (Map tracing Bantu and Nilotic historical migration routes into East Africa).
  - `/images/social-studies/triangular-trade-map.png` (Trans-Atlantic Triangular Trade routes linking Europe, West Africa, and Americas).
  - `/images/math/angle-types-gallery.png` (Geometry chart comparing acute, right 90°, obtuse, straight 180°, and reflex angles).
  - `/images/math/compass-bearings-diagram.png` (360-degree compass rose illustrating 3-figure clockwise bearings from North 000°).
  - `/images/english/letter-layouts.png` (Visual layout comparison: informal single-address vs formal official double-address letters).
- `app/lib/social-topics.ts`, `app/lib/topics.ts`, & `app/lib/english-topics.ts` — Linked all 5 Milestone Batch 5 illustrations directly into core learning modules (`major-ethnic-groups`, `triangular-trade`, `line-segments-angles-core`, `bearing-scale-drawing-core`, `informal-format`). Total live textbook illustrations now at **31 verified assets** across all 4 subjects.
- `docs/spec/visual-roadmap-v3.md` — Updated master visual spec moving Batch 5 into completed status and staging the final batches: Batch 6 (Mathematics Sets/Geometry) and Batch 7 (English Writing & Advanced Science).

**Verified locally:**
- Production build passed cleanly with `✓ Generating static pages (94/94)`.

## v0.9.4 — 2026-07-05 — Visual Roadmap Milestone Batch 4 complete (Public Health, Ecology & Value Addition illustrations)

**Session theme:** Execute Visual Roadmap Milestone Batch 4 across P7 Integrated Science and Social Studies modules.

**Changed:**
- `public/images/` — Generated 5 high-clarity primary school textbook illustrations for Milestone Batch 4:
  - `/images/science/anopheles-mosquito-life-cycle.png` (4-stage life cycle of the female Anopheles mosquito vector).
  - `/images/science/tippy-tap-handwashing.png` (Village tippy-tap handwashing device with soap and foot pedal).
  - `/images/science/three-classes-of-levers.png` (Comparison of 1st, 2nd, and 3rd class levers showing effort, load, fulcrum).
  - `/images/science/carbon-oxygen-cycle.png` (Gas exchange cycle between plants releasing oxygen and animals exhaling carbon dioxide).
  - `/images/social-studies/mining-and-agriculture-processing.png` (Value addition illustration: transforming raw coffee/minerals into finished industrial goods).
- `app/lib/science-topics.ts` & `app/lib/social-topics.ts` — Linked all 5 Milestone Batch 4 illustrations directly into core modules (`malaria-vector-control`, `school-health-clubs`, `lever-basics`, `plant-animal-interdependence`, `major-economic-resources-africa`). Total live textbook illustrations now at **26 assets**.
- `docs/spec/visual-roadmap-v3.md` — Updated master visual spec moving Batch 4 into completed status and staging Batch 5.

**Verified locally:**
- Production build passed cleanly with `✓ Generating static pages (94/94)`.

## v0.9.3 — 2026-07-05 — Visual Roadmap Milestone Batch 3 complete & truthful dynamic visual pills

**Session theme:** Execute Visual Roadmap Milestone Batch 3 (African Geography & Climate illustrations) and implement universal dynamic visual pills (`getTopicVisualPill`) across all subject landing pages.

**Changed:**
- `public/images/social-studies/` — Generated 5 high-clarity primary school geography textbook illustrations for Milestone Batch 3:
  - `/images/social-studies/africa-latitudes-longitudes.png` (Map of Africa showing Equator 0°, Prime Meridian 0°, Tropics of Cancer/Capricorn).
  - `/images/social-studies/block-and-fold-mountains.png` (Comparison of block horst mountain formation vs volcanic peak formation).
  - `/images/social-studies/africa-climatic-zones.png` (Color-coded map of major African climatic zones: Equatorial, Savanna, Desert, Mediterranean).
  - `/images/social-studies/africa-vegetation-belts.png` (Side-by-side comparison of multi-layered tropical rainforest canopy vs open grassy savanna woodland).
  - `/images/social-studies/major-rivers-lakes-map.png` (Map tracing major African rivers: Nile, Congo, Niger, Zambezi and Lake Victoria).
- `app/lib/social-topics.ts` — Linked all 5 Milestone Batch 3 illustrations directly into core geography modules (`major-lines-cross-africa`, `mountains-highlands-africa`, `equatorial-tropical`, `forest-vegetation`, `rivers-of-africa`). Total live textbook illustrations now at **21 assets**.
- `app/lib/topics.ts` — Created smart helper function `getTopicVisualPill(topic)` that checks modules for real images (`imageUrl`) or diagrams (`visual`).
- `app/science/p7/page.tsx`, `app/social-studies/p7/page.tsx`, `app/math/p7/page.tsx` — Updated landing page topic cards to use `getTopicVisualPill(topic)`, ensuring that visual cues ("Includes images" / "Includes diagrams") are 100% truthful and dynamically reflecting live assets.
- `docs/spec/visual-roadmap-v3.md` — Updated master visual spec moving Batch 3 into completed status.

**Verified locally:**
- Production build passed cleanly with `✓ Generating static pages (94/94)`.

## v0.9.2 — 2026-07-05 — Visual Roadmap Milestone Batch 2 complete (Science anatomy & physics illustrations)

**Session theme:** Execute Visual Roadmap Milestone Batch 2, creating and linking 5 educational textbook illustrations across P7 Integrated Science anatomy and physics modules.

**Changed:**
- `public/images/science/` — Generated 5 high-clarity primary school textbook illustrations for Milestone Batch 2:
  - `/images/science/hinge-and-ball-joints.png` (Comparison of elbow hinge joint and shoulder ball-and-socket joint).
  - `/images/science/kidney-nephron-diagram.png` (Anatomical cross-section of the human kidney showing cortex, medulla, pelvis, ureter).
  - `/images/science/bar-magnet-field-lines.png` (Rectangular bar magnet showing N/S poles and looping magnetic field lines).
  - `/images/science/electromagnet-nail-coil.png` (Electromagnet setup with insulated wire coiled around iron nail connected to a dry cell).
  - `/images/science/pinhole-camera-ray-diagram.png` (Ray diagram of pin-hole camera focusing straight light rays into an inverted real image).
- `app/lib/science-topics.ts` — Linked all 5 Milestone Batch 2 illustrations directly into core learning modules (`joint-types`, `kidney-structure-function`, `magnetic-materials`, `electromagnet-setup`, `pinhole-camera`). Total live textbook illustrations now at **16 assets**.
- `docs/spec/visual-roadmap-v3.md` — Updated master visual spec moving Batch 2 into completed status and advancing to Batch 3 (African Geography & Climate).

**Verified locally:**
- Production build passed cleanly with `✓ Generating static pages (94/94)`.

## v0.9.1 — 2026-07-05 — Visual Roadmap Spec & Milestone Batch 1 visual integration complete

**Session theme:** Establish comprehensive multi-subject visual roadmap spec and execute Milestone Batch 1 visual textbook illustrations.

**Changed:**
- `docs/spec/visual-roadmap-v3.md` — Created comprehensive master visual specification mapping every module requiring textbook diagrams across Science, Social Studies, Mathematics, and English organized into 5 phased milestone batches.
- `public/images/` — Created 5 new high-impact primary school textbook illustrations for Milestone Batch 1:
  - Science: `/images/science/simple-electric-circuit.png`, `/images/science/human-skin-cross-section.png`, `/images/science/human-eye-anatomy.png`.
  - Social Studies: `/images/social-studies/great-rift-valley-formation.png`, `/images/social-studies/relief-orographic-rainfall.png`.
- `app/lib/science-topics.ts` & `app/lib/social-topics.ts` — Linked all 11 baseline and Milestone Batch 1 textbook illustrations directly to their exact module IDs (`skeleton-basics`, `circuit-components`, `four-excretory-organs`, `skin-structure-layers`, `refraction-dispersion-rainbow`, `human-eye-structure-care`, `food-chains-webs`, `six-regions`, `rift-valley`, `latitude-altitude-distance`, `caring-resources`).

**Verified locally:**
- Production build passed cleanly with `✓ Generating static pages (94/94)`.

## v0.9.0 — 2026-07-04 — Implement native image rendering and integrate textbook visual illustrations

**Session theme:** Replace crude hand-coded stick-figure SVGs with high-quality educational textbook illustrations rendered natively inside Lesson Structure v3 modules.

**Changed:**
- `app/lib/topics.ts` — Extended `SubtopicModule` data interface to support `imageUrl?: string` and `imageCaption?: string`.
- `app/components/TopicTabs.tsx` — Updated `ModularTopicView` to render `.module-image-card` with responsive native lazy-loaded images directly beneath module big ideas.
- `app/app/globals.css` — Added responsive styling for `.module-image-card`, `.module-image`, and `.module-image-caption`.
- `public/images/` — Created clean educational textbook illustrations using AI image generation across subjects:
  - Science: `/images/science/human-skeleton.png`, `/images/science/urinary-system.png`, `/images/science/light-refraction.png`, `/images/science/food-chain.png`.
  - Social Studies: `/images/social-studies/map-of-africa.png`, `/images/social-studies/agroforestry-farm.png`.
- `app/lib/science-topics.ts` & `app/lib/social-topics.ts` — Linked newly generated visual textbook assets to core learning modules (`skeleton-basics`, `four-excretory-organs`, `refraction-dispersion-rainbow`, `food-chains-webs`, `regions-africa`, `tree-projects`).

**Verified locally:**
- Production build passed cleanly with `✓ Generating static pages (94/94)`.

## v0.8.2 — 2026-07-04 — Populate Mathematics question banks and clarify study positioning

**Session theme:** Eliminate remaining zero-question bugs in Mathematics and clarify platform positioning as a structured study app rather than a revision app.

**Changed:**
- `app/lib/topics.ts` & `app/lib/question-bank.ts` — Populated topic quizzes (`quiz: [...]`) for all 11 official Mathematics topics with 8 verified questions each. Added seeded practice banks for `operations-on-whole-numbers`, `patterns-and-sequences`, `integers`, and `construction`, ensuring every single one of the 11 official Mathematics topics has between 20 and 68 practice questions in endless practice mode.
- `app/page.tsx` — Replaced legacy references to "revision" with "structured study" (`Structured study that follows the syllabus.`), and confirmed main menu displays `11 study topics`.

**Verified locally:**
- Production build passed with `✓ Generating static pages (94/94)`.

## v0.8.1 — 2026-07-04 — Refine UI layout and fix zero-question practice bank bugs across subjects

**Session theme:** Eliminate zero-question states and streamline UI layout across landing pages and teacher dashboard.

**Changed:**
- `app/lib/topics.ts` & `app/lib/question-bank.ts` — Fixed zero-question states by ensuring all 11 official Mathematics topics and all 7 English topics have fully populated `quiz` and practice question banks.
- `app/page.tsx` — Updated main subject overview card to display `P7 · 6 themes · 11 study topics`.
- `app/math/p7/page.tsx` — Cleaned up Mathematics strand page layout by grouping all 11 official topics under the 6 core NCDC themes (`Sets`, `Numeracy`, `Interpretation of Graphs and Data`, `Geometry`, `Measurement`, `Algebra`), eliminating redundant banner boxes and saving screen space.
- `app/components/TeacherDashboard.tsx` — Updated topic lookup to search across Mathematics, Integrated Science, Social Studies, and English so teacher progress reports render correctly for all subjects.

**Verified locally:**
- Production build passed with `✓ Generating static pages (94/94)`.

## v0.8.0 — 2026-07-04 — P7 Mathematics calibrated to 11 official NCDC topics (Lesson Structure v3 rollout complete across all 4 subjects)

**Session theme:** Restructure and calibrate P7 Mathematics from 38 fragmented micro-topics into the 11 official NCDC syllabus topics across 6 themes, preserving all existing worked examples and practice items inside v3 modular subtopics.

**Changed:**
- `app/lib/topics.ts` — Restructured `TOPICS` into the exact 11 official NCDC syllabus topics (`set-concepts`, `whole-numbers`, `operations-on-whole-numbers`, `patterns-and-sequences`, `fractions`, `integers`, `data-handling`, `construction`, `time`, `length-mass-capacity`, `algebra`). All 38 previous micro-competencies are preserved as NCDC subtopics and paginated modules (`learnIt`, `workedExample`, `tryThis`). Updated `getTopic` with fallback subtopic lookup so legacy references resolve seamlessly.
- `app/lib/question-bank.ts` — Updated `MATHS_BANK` to map questions under the 11 official parent topics while maintaining legacy subtopic banks for full backward compatibility.
- Root docs updated: `STATUS.md`, `CHECKLIST.md`, `HANDOFF.md`, `CHANGELOG.md`.

**Verified locally:**
- Production build passed with `✓ Generating static pages (94/94)`. All 4 active subjects (Social Studies 10/10, Integrated Science 8/8, English 7/7, Mathematics 11/11) are now fully rolled out on Lesson Structure v3.

## v0.7.1 — 2026-07-04 — Deep NCDC curriculum audit and module enrichment pass across SST, Science, and English

**Session theme:** Rigorously cross-reference NCDC syllabi (`content/curriculum/*.json`) to eliminate compressed summaries and missing competencies across Social Studies, Integrated Science, and English prior to Mathematics rollout.

**Changed:**
- `app/lib/social-topics.ts` — Added explicit subtopic `forms-of-government` (Democracy/Republics, Monarchies e.g. Eswatini/Morocco, Military regimes/Dictatorships, Pillars of good governance) to `nationalism-road-independence`. Added subtopic `political-instabilities-conflicts` (Causes: colonial borders, tribalism, coups d'état, corruption; Effects: refugees/IDPs, brain drain; Solutions: AU/regional peacekeeping) to `post-independence-africa`. Expanded `economic-developments-africa` subtopic 4 (`challenges-solutions`) from 2 generic summaries into 5 comprehensive modules covering infrastructure/energy bottlenecks, trade terms/foreign debt, governance/corruption, climate change, and industrial transformation.
- `app/lib/science-topics.ts` — Expanded topics 5–8 (`excretory-system`, `light-energy`, `interdependence-environment`, `population-and-health`) from thin 2–3 module placeholders into 14 rich subtopics with 30 detailed modules, ensuring 100% 1-to-1 module coverage of every NCDC sub-competency.
- `app/lib/english-topics.ts` — Enriched `letter-writing` subtopics with dedicated format, layout, and vocabulary modules for both informal and formal official letters.

**Verified locally:**
- Production build passed with `✓ Generating static pages (148/148)`.

## v0.7.0 — 2026-07-04 — P7 Integrated Science structural migration to v3 complete & build recovery

**Session theme:** Recover build from incomplete agent migration and finish rolling out modular architecture (v3) to P7 Integrated Science.

**Changed:**
- `app/lib/science-topics.ts` — fixed syntax error caused by truncated previous session (`crashed agent migrate 2`). Completed structural migration of remaining 4 topics (`excretory-system`, `light-energy`, `interdependence-environment`, `population-and-health`) to v3 modular structure mapped from `content/curriculum/p7-science.json`. All 8 science topics now have NCDC-mapped `subtopics` arrays and modular steps.
- Root docs updated: `STATUS.md`, `CHECKLIST.md`, `HANDOFF.md`, `CHANGELOG.md`.

**Verified locally:**
- Production build passed with `✓ Generating static pages (148/148)`.

**Next:**
- Roll v3 structural migration to Mathematics (38 topics).

## v0.6.9 — 2026-07-04 — P7 English structural migration to v3 complete

**Session theme:** Roll out the modular architecture (v3) to P7 English.

**Changed:**
- `app/lib/english-topics.ts` — converted all 7 topics to v3 modular structure, mapping them to NCDC sub-competencies from `content/curriculum/p7-english.json`.
- Root docs updated: `STATUS.md`, `HANDOFF.md`.

**Verified locally:**
- Production build passed with `✓ Generating static pages (148/148)`.

**Next:**
- Roll v3 structural migration to Integrated Science and Mathematics.

## v0.6.8 — 2026-07-04 — Social Studies content audit and gap-filling complete

**Session theme:** Final comprehensive audit of Social Studies v3 content against NCDC curriculum to ensure 100% alignment before starting English v3 migration.

**Fixed:**
- `app/lib/social-topics.ts` — removed duplicate `weather-instruments` module in `climatic-regions` subtopic.
- `app/lib/social-topics.ts` — added missing `climate-problems-solutions` module to `climate-human-activities` subtopic, covering drought, flooding, extreme heat and climate change solutions.

**Verified locally:**
- Content audited against `content/curriculum/p7-social-studies.json`.
- 10/10 topics fully modular and curriculum-aligned.

**Milestone:**
- **Social Studies "SST pass" is officially complete.**
- Next: Roll v3 structure to English (structural migration first, then deepening).

## v0.6.7 — 2026-07-04 — Major World Organisations converted to v3 — Social Studies v3 complete

**Session theme:** Finish the Social Studies v3 modular rollout. SST is now 10/10 modular.

**Added:**
- `docs/ncdc-extracts/p7-sst-topic-10-major-world-organisations.md` — deep extract mapping NCDC curriculum to modular topic.

**Changed:**
- `app/lib/social-topics.ts` — converted `major-world-organisations` to v3 (3 subtopics / 8 modules):
  - un-formation-organs: Formation of the United Nations; Origin, objectives, membership, organs and functions of the UN
  - un-agencies-rights: UN agencies and their functions; UN Human Rights Charter; Importance of the United Nations
  - commonwealth-challenges: The Commonwealth of Nations; Membership and functions of the Commonwealth; Challenges of the UN and the Commonwealth
- Root docs updated: `STATUS.md`, `HANDOFF.md`, `CHECKLIST.md`, `CHANGELOG.md`.

**Verified locally:**
- Production build passed with `✓ Generating static pages (148/148)`.

**Milestone:**
- **Social Studies v3 rollout is complete — 10/10 topics, 97 total modules.**
- Next: Roll v3 structure to Mathematics, Integrated Science and English (structural migration, preserve v2 content), then deepen.

## v0.6.6 — 2026-07-04 — Economic Developments in Africa converted to v3

**Session theme:** Continue SST v3 modular rollout — 9/10 complete.

**Added:**
- `docs/ncdc-extracts/p7-sst-topic-09-economic-developments-africa.md` — deep extract mapping NCDC curriculum to modular topic.

**Changed:**
- `app/lib/social-topics.ts` — converted `economic-developments-africa` to v3 (4 subtopics / 8 modules):
  - resources-africa: Major economic resources; Problems in utilisation; Caring for resources
  - economic-activities-development: Major economic development in Africa
  - country-case-studies: Nigeria/Sudan/Libya; South Africa/DRC/Uganda; Comparing countries
  - challenges-solutions: Challenges affecting economic development; Possible solutions
- Root docs updated.

**Verified locally:**
- Production build passed with `✓ Generating static pages (148/148)`.

**Remaining SST v3:**
- 1 Social Studies topic still on v2: `major-world-organisations`.


## v0.6.5 — 2026-07-04 — Post-Independence Africa converted to v3

**Session theme:** Continue SST v3 modular rollout back-to-back, with session documentation updated per founder rule.

**Added:**
- `docs/ncdc-extracts/p7-sst-topic-08-post-independence-africa.md` — deep extract mapping NCDC curriculum to modular topic.

**Changed:**
- `app/lib/social-topics.ts` — converted `post-independence-africa` to v3 (3 subtopics / 7 modules):
  - oau-formation-aims: Formation of the OAU; Objectives, functions, achievements and failures of OAU
  - au-formation-organs: Formation and objectives of the AU; Challenges and organs of the AU
  - regional-economic-groupings: COMESA, ECOWAS, SADC, IGAD; Advantages and disadvantages of economic cooperation; Ways of solving problems faced by economic groupings
- Root docs updated: `STATUS.md`, `HANDOFF.md`, `CHECKLIST.md`, `CHANGELOG.md`.

**Verified locally:**
- Production build passed with `✓ Generating static pages (148/148)`.

**Remaining SST v3:**
- 2 Social Studies topics still on v2: `economic-developments-africa`, `major-world-organisations`.
- Mathematics, Integrated Science and English still on v2; structural v3 migration queued after SST.


## v0.6.4 — 2026-07-04 — Nationalism and the Road to Independence converted to v3

**Session theme:** Continue the SST v3 modular rollout, with strong session documentation discipline per founder request.

**Added:**
- `docs/ncdc-extracts/p7-sst-topic-07-nationalism-road-independence.md` — deep extract mapping NCDC curriculum to modular topic.

**Changed:**
- `app/lib/social-topics.ts` — converted `nationalism-road-independence` to v3 (5 subtopics / 11 modules):
  - meaning-nationalism-panafricanism: nationalism & patriotism; Pan-Africanism
  - panafricanists-nationalists-work: work of Pan-Africanists and nationalists; leading Pan-Africanists (Nkrumah, Kenyatta, Nyerere, Lumumba, Mandela)
  - countries-not-colonised: Ethiopia and Liberia; reasons for maintaining independence
  - methods-problems-independence: methods of work; problems faced
  - political-systems: multiparty system; single party system; comparing political systems
- Root docs updated: `STATUS.md`, `HANDOFF.md`, `CHECKLIST.md`, `CHANGELOG.md` — session documentation protocol enforced: what was done, what is next.

**Verified locally:**
- Production build passed with `✓ Generating static pages (148/148)`.

**Remaining SST v3:**
- 3 Social Studies topics still on v2: `post-independence-africa`, `economic-developments-africa`, `major-world-organisations`.
- Mathematics, Integrated Science and English still on v2; structural v3 migration queued after SST.

## v0.6.3 — 2026-07-03 — Continue SST v3 conversion; strategic pivot to v3 everywhere approved

**Session theme:** The founder decided to apply Lesson Structure v3 across all subjects because time is short and v3 is now the proven destination structure. The session focused on continuing the Social Studies conversion pipeline while acknowledging the broader rollout ahead.

**Added:**
- `docs/ncdc-extracts/p7-sst-topic-06-foreign-influence-in-africa.md` — deep extract mapping NCDC pages 337–342 to the new modular topic.

**Changed:**
- `app/lib/social-topics.ts` — converted `people-ethnic-groups-settlement` to v3 (4 subtopics / 8 modules) using the existing deep extract.
- `app/lib/social-topics.ts` — converted `foreign-influence-africa` to v3 (6 subtopics / 11 modules) with NCDC-aligned content.
- Root handoff docs (`STATUS.md`, `HANDOFF.md`, `CHECKLIST.md`) updated for a clean founder push and next-session restart.

**Strategic decision recorded:**
- Finish the remaining 4 Social Studies topics first, then roll v3 structure to Mathematics, Integrated Science and English.
- For the non-SST subjects, the approved plan is: migrate every topic to v3 *structure* first (subtopics/modules mapped from NCDC curriculum JSONs, existing v2 content preserved inside modules), then deepen modules topic-by-topic.

**Verified locally:**
- Dependencies reinstalled and production build passed with `✓ Generating static pages (148/148)`.

**Remaining before v3 is everywhere:**
- 4 Social Studies topics still on v2: `nationalism-road-independence`, `post-independence-africa`, `economic-developments-africa`, `major-world-organisations`.
- Mathematics, Integrated Science and English still on v2; structural v3 migration not yet started.

## v0.6.1 — 2026-07-02 — Modular spike review fixes: navigation, content depth and UI simplification

**Session theme:** Founder review of the v3 modular spike found three issues: rigid topic-level sections were repeating under every module, browser back jumped out of the topic instead of back to the module list, and the UI felt too box-heavy compared with the content.

**Fixed:**
- `app/components/TopicTabs.tsx` — wrapped the topic-level Worked example / Common mistakes / Try this / Guided practice / Quick recap block so it only appears for non-modular topics. Modular topics now show only per-module content.
- `app/components/TopicTabs.tsx` — modular selection is now synced to the URL hash (`#subtopic-id` or `#subtopic-id/module-index`). Browser back/forward now moves through module → subtopic list → topic page as expected.
- `app/app/globals.css` — simplified modular styles: removed heavy borders and boxes, made subtopic cards flatter, reduced visual clutter so the text content has more room.

**Changed:**
- `app/lib/social-topics.ts` — deepened and clarified the `location-of-africa` modular content. Expanded from 14 to 16 modules, with fuller teacher-voice explanations, clearer step-by-step worked examples, and stronger alignment to the NCDC P7 Set One PDF.
- `app/lib/social-topics.ts` — removed the duplicated v2 `note.study` from `location-of-africa`; the modular `subtopics` array is now the single source of truth for this topic.

**Verified locally:**
- Production build passed with `✓ Generating static pages (147/147)`.

**Result:**
- The modular topic now reads as one coherent lesson in small steps, without repeated rigid sections, and navigation behaves like a native multi-screen experience.

## v0.6.2 — 2026-07-03 — Modular role model + SST conversion starts

**Session theme:** Make `location-of-africa` a clean, copyable template, then begin converting the remaining SST topics to v3 one by one.

**Added:**
- `docs/ncdc-extracts/p7-sst-topic-01-location-of-africa.md` — deep extract mapping NCDC pages 315–317 to every `location-of-africa` module.
- `docs/ncdc-extracts/p7-sst-topic-02-physical-features-of-africa.md` — deep extract mapping NCDC pages 318–321 to the new modular topic.
- `docs/ncdc-extracts/p7-sst-topic-03-climate-of-africa.md` — deep extract mapping NCDC pages 322–326 to the new modular topic.
- `docs/ncdc-extracts/p7-sst-topic-04-vegetation-of-africa.md` — deep extract mapping NCDC pages 327–331 to the new modular topic.
- `app/components/ReportContentIssue.tsx` — in-app content issue reporter for modular topics.
- `app/app/teacher/content-reports/page.tsx` — reviewer page to view and export locally stored reports.

**Changed:**
- `app/lib/social-topics.ts` — converted `physical-features-of-africa`, `climate-of-africa` and `vegetation-of-africa` to v3 modular, with content sourced from the NCDC PDF.
- `app/components/TopicTabs.tsx` — added `ReportContentIssue` to the modular viewer footer.
- `app/app/teacher/page.tsx` — added link to the content-reports review page.
- `app/app/globals.css` — fixed potential button overlap in modular pagination on small screens; added report-list styles; improved tab shrinking.

**Decision:**
- Finish Social Studies first, then roll v3 to other subjects.
- Source every conversion strictly from NCDC; produce a deep-extract doc per topic.
- No backend for content issues — use localStorage + GitHub issue link.

**Verified locally:**
- Reinstalled dependencies and production build passed with `✓ Generating static pages (148/148)`.

---

## v0.6.0 — 2026-07-02 — Lesson Structure v3 modular architecture spike

**Session theme:** Address founder insight that AI-generated topic pages compress content because the generation target (one whole topic) and the UI (one scrolling page) both force summarisation. Move from a flat topic page to a hierarchical module structure.

**Added:**
- `docs/spec/tendo-lesson-structure-v3-modular.md` — v3 architecture spec: topics as directories, subtopics matching NCDC sub-competencies, modules as atomic paginated learning steps.
- `app/lib/topics.ts` — new modular types: `TopicVisual`, `SubtopicModule`, `Subtopic`, and optional `subtopics` field on `Topic`.
- `app/components/TopicTabs.tsx` — modular topic directory + module viewer rendered when `topic.subtopics` exists. Includes Previous/Next pagination, progress dots, per-module big idea, learn-it content, worked example, try-this, visual brief and exam tip.
- `app/app/globals.css` — styles for `.modular-directory`, `.subtopic-grid`, `.subtopic-card`, `.modular-viewer`, `.modular-module`, `.modular-pagination` and responsive rules.
- `app/lib/social-topics.ts` — added `subtopics` to `location-of-africa` only, with 5 NCDC-aligned subtopics and modules sourced from the NCDC P7 Set One PDF.

**Changed:**
- `app/components/TopicTabs.tsx` — Read tab now checks `topic.subtopics` first and falls back to v2 `note.study` or legacy content safely.
- `app/components/TopicTabs.tsx` — `buildScript()` now builds the listen-aloud script from modular content when `subtopics` is present.

**Not changed (intentionally):**
- The other 9 Social Studies topics still use Lesson Structure v2.
- Mathematics, Integrated Science and English are untouched.

**Verified locally:**
- Production build passed with `✓ Generating static pages (147/147)`.

**Result:**
- The modular architecture is proven end-to-end on one topic. It breaks the summary trap by giving each learning step its own focused screen and generation target.

---

## v0.5.23 — 2026-07-02 — Key-word definitions teacher-voice phrasing pass

**Session theme:** Address founder/partner feedback that some key-word definitions still sounded like machine/database labels rather than Ugandan classroom explanations.

**Changed:**
- `app/lib/topics.ts` — revised Maths key-word definitions into sentence-style teacher phrasing.
- `app/lib/english-topics.ts` — revised English key-word definitions into sentence-style teacher phrasing.
- `app/lib/science-topics.ts` — revised Science key-word definitions into sentence-style teacher phrasing.
- `app/lib/social-topics.ts` — revised Social Studies key-word definitions into sentence-style teacher phrasing.

**Example direction:**
- Before: `Independence: Freedom of a country`
- After: `Independence is freedom of a country to govern itself.`

**Verified locally:**
- Production build passed with `✓ Generating static pages (147/147)`.

**Result:**
- Key words now read more like a teacher explaining to P7 learners, not a dictionary/database export.

---

## v0.5.22 — 2026-07-02 — Post-push cleanup and Pilot Readiness Pack v1

**Session theme:** After the Lesson Structure v2 grouped push was confirmed live, prepare the next practical milestone: pilot readiness.

**Added:**
- `docs/ops/post-push-verification-lesson-structure-v2-2026-07-02.md` — live-route verification after the grouped restructuring push.
- `docs/pilot/teacher-classroom-guide-v1.md` — teacher-facing classroom use guide.
- `docs/pilot/pilot-checklist-v1.md` — before/during/after pilot checklist.
- `docs/pilot/founder-demo-script-v1.md` — 5–10 minute founder demo script.
- `docs/pilot/teacher-feedback-loop-v1.md` — structured teacher feedback collection loop.

**Changed:**
- `app/app/page.tsx` — updated stale Maths home-card wording from `40 sub-topics` to `38 study topics`.
- Root docs updated to show the Lesson Structure v2 milestone has been pushed and verified live.

**Verified live before cleanup:**
- Home page, one topic from each subject, and worksheet generator loaded successfully in production.
- Lesson Structure v2 was visible live across sampled Maths, Science, English and Social Studies topics.

**Result:**
- The app is no longer only content-ready; it now has practical pilot materials for teacher/school conversations.

---

## v0.5.21 — 2026-07-02 — Final Lesson Structure v2 release review completed

**Session theme:** Review all subjects and prepare the grouped restructuring milestone for founder push.

**Added:**
- `docs/ops/lesson-structure-v2-release-review-2026-07-02.md` — final release-review audit for the Lesson Structure v2 and visual alignment milestone.

**Verified:**
- Mathematics: 38/38 topics have `note.study`, visual brief and PLE tip.
- English: 7/7 topics have `note.study`, visual brief and PLE tip.
- Integrated Science: 8/8 topics have `note.study`, visual brief and PLE tip.
- Social Studies: 10/10 topics have `note.study`, visual brief and PLE tip.
- TopicDiagram coverage: 63 active topic IDs / 63 diagram IDs, with no missing or extra diagram IDs.

**Verified locally:**
- Production build passed with `✓ Generating static pages (147/147)`.

**Result:**
- The grouped restructuring milestone is ready for founder review and push prep.

---

## v0.5.20 — 2026-07-02 — Visual brief and diagram alignment pass

**Session theme:** Address founder/partner concern that visuals/images can feel off by making visuals more instructional and less decorative.

**Changed:**
- `app/components/TopicTabs.tsx` — upgraded v2 Visual brief rendering into a more useful instructional visual card with a preview icon and extracted checklist-style reading steps.
- `app/app/globals.css` — restyled visual briefs to look like learning aids rather than dashed placeholder notes.
- `app/components/TopicDiagram.tsx` — expanded Maths diagram coverage so all 38 Maths topics now have rendered instructional diagrams or reusable diagram cards, not only visual text briefs.

**Visual direction now:**
- Maths: formula cards, conversion ladders, number lines, process flows and table/chart helpers.
- English: writing templates, message checklists and tone/purpose cards.
- Science: labelled/process diagrams and prevention/action flows.
- Social Studies: maps, timelines, cause/effect and comparison visuals.

**Verified locally:**
- Production build passed with `✓ Generating static pages (147/147)`.

**Result:**
- The visual layer now better matches Lesson Structure v2. Visuals are presented as teaching tools, not decorative images.

---

## v0.5.19 — 2026-07-02 — Full Maths Lesson Structure v2 conversion completed

**Session theme:** Respond to founder concern that Maths is a big subject and also needs the clearer structure, not only a targeted sample.

**Changed:**
- `app/lib/topics.ts` — all 38 published P7 Mathematics topics now include `note.study` with Big idea, Key words, Learn it in parts, Visual brief and PLE tip.
- Root docs/spec updated to show Lesson Structure v2 now covers all four active P7 subjects.

**Maths v2 emphasis:**
- clearer method steps for multi-step topics
- formula selection and unit warnings
- visual briefs for diagrams, conversion ladders, number lines, formula cards and process flows
- PLE tips focused on common traps such as wrong units, wrong operation, double-counting, decimal alignment and unclear variables

**Verified locally:**
- Production build passed with `✓ Generating static pages (147/147)`.

**Result:**
- The study-page restructuring is now consistent across Mathematics, English, Integrated Science and Social Studies. This is a stronger grouped milestone than pushing after only SST/Science/English.

---

## v0.5.18 — 2026-07-02 — Targeted Maths Lesson Structure v2 upgrade completed

**Session theme:** Finish the grouped restructuring pass by upgrading the most visual and word-problem-heavy Maths topics instead of forcing all 38 Maths pages into v2 at once.

**Changed:**
- `app/lib/topics.ts` — added `note.study` to 12 high-impact Maths topics: Venn diagrams, Fractions, Proportion and percentages, Area, Volume, Equations, Mean/Median/Mode/Range, Money, Data handling, Bearing/Scale drawing, Coordinates and Probability introduction.
- Root docs/spec updated to mark the Lesson Structure v2 restructuring milestone as ready for founder review/push prep.

**Verified locally:**
- Production build passed with `✓ Generating static pages (147/147)`.

**Result:**
- SST, Science and English are fully converted to v2, and Maths now has targeted v2 support on the topics most likely to benefit from diagrams, formula cards, process flows and PLE trap warnings.

---

## v0.5.17 — 2026-07-02 — English converted to Lesson Structure v2

**Session theme:** Continue grouped study-page restructuring after Science, keeping pace high without pushing small batches.

**Changed:**
- `app/lib/english-topics.ts` — all 7 official P7 English topics now include `note.study` with Big idea, Key words, Learn it in parts, Visual brief and PLE tip.
- `docs/spec/tendo-lesson-structure-v2.md` — updated rollout status to include English.
- Root docs updated to show SST, Science and English are now converted.

**English v2 emphasis:**
- clearer writing-format guidance
- vocabulary for compositions, letters, announcements, speeches, posters and ceremony messages
- visual briefs as templates/checklists instead of decorative images
- practical PLE tips around tone, audience, purpose, tense and format

**Verified locally:**
- Production build passed with `✓ Generating static pages (147/147)`.

**Result:**
- English now uses the same child-friendly study flow as Social Studies and Science, with stronger support for writing tasks.

---

## v0.5.16 — 2026-07-02 — Integrated Science converted to Lesson Structure v2

**Session theme:** Continue the fast grouped study-page restructuring after full Social Studies v2 conversion.

**Changed:**
- `app/lib/science-topics.ts` — all 8 P7 Integrated Science topics now include `note.study` with Big idea, Key words, Learn it in parts, Visual brief and PLE tip.
- `docs/spec/tendo-lesson-structure-v2.md` — updated rollout status to include Science.
- Root docs updated to show Science v2 is complete and English is next.

**Science v2 emphasis:**
- clearer key vocabulary
- smaller process/application sections
- instructional visual briefs such as labelled diagrams, flows, comparison cards and prevention cards
- safety-focused PLE tips for electricity, body systems and Population and Health

**Verified locally:**
- Production build passed with `✓ Generating static pages (147/147)`.

**Result:**
- Integrated Science no longer depends on the old paragraph-heavy Read flow. All official Science topics now have a clearer P7-friendly study structure.

---

## v0.5.15 — 2026-07-02 — Social Studies fully converted to Lesson Structure v2

**Session theme:** Continue the study-page restructuring quickly without pushing every small change.

**Changed:**
- `app/lib/social-topics.ts` — all 10 P7 Social Studies topics now include `note.study` with Big idea, Key words, Learn it in parts, Visual brief and PLE tip.
- `docs/spec/tendo-lesson-structure-v2.md` — updated from pilot status to full Social Studies rollout status.
- Root docs updated to reflect full SST v2 conversion and next direction.

**Verified locally:**
- Production build passed with `✓ Generating static pages (147/147)`.

**Result:**
- Social Studies no longer uses the old paragraph-heavy study flow. It now has a clearer, child-friendly structure across all official topics.

---

## v0.5.14 — 2026-07-02 — Lesson Structure v2 pilot started for child-friendly study pages

**Session theme:** Respond to founder/partner feedback that study content needs a clearer, more child-friendly structure and that visuals should be instructional rather than decorative.

**Added:**
- `docs/spec/tendo-lesson-structure-v2.md` — new study-page structure standard.

**Changed:**
- `app/lib/topics.ts` — added optional `note.study` structure for Big idea, Key words, Learn it in parts, Visual brief and PLE tip.
- `app/components/TopicTabs.tsx` — Read tab now renders the new v2 structure when a topic provides it, while old topics remain compatible.
- `app/app/globals.css` — added v2 study-card, vocabulary, section, visual-brief and exam-tip styles.
- `app/lib/social-topics.ts` — piloted v2 structure on Location of Africa, Climate of Africa and Economic developments in Africa.
- Root docs updated to track the restructuring direction.

**Verified locally:**
- Production build passed with `✓ Generating static pages (147/147)`.

**Result:**
- The restructuring path is now in place. Next step is to roll Lesson Structure v2 across remaining SST topics before pushing a grouped restructuring milestone.

---

## v0.5.13 — 2026-07-01 — Four-subject P7 core closeout audit completed

**Session theme:** Close out the post-push verification, teacher usefulness and non-maths subject-deepening sequence with a full four-subject audit.

**Added:**
- `docs/ops/four-subject-core-closeout-audit-2026-07-01.md` — final closeout audit for Maths, English, Science, Social Studies and teacher worksheet readiness.

**Changed:**
- `STATUS.md`, `HANDOFF.md`, `CHECKLIST.md` — updated to reflect the four-subject core closeout and current practice totals.
- `docs/ops/p7-english-quality-audit-2026-07-01.md` and `docs/ops/p7-science-quality-audit-2026-07-01.md` — clarified later deepening updates where earlier first-wave totals were stale.

**Verified totals:**
- Mathematics: 195 central-bank questions
- English: 140 central-bank questions
- Integrated Science: 160 central-bank questions
- Social Studies: 200 central-bank questions
- Total central question-bank pool: 695 questions

**Verified locally:**
- Production build passed with `✓ Generating static pages (147/147)`.

**Result:**
- The four-subject P7 core is product-level complete for present scope. Remaining work is enhancement and teacher-feedback iteration.

---

## v0.5.12 — 2026-07-01 — P7 Social Studies deepened with guided SST tasks and larger practice bank

**Session theme:** Continue deepening non-maths subjects toward maths-level product completeness, after English and Science.

**Changed:**
- `app/lib/social-topics.ts` — added guided map/history/development/organisation tasks for all 10 SST topics.
- `app/lib/question-bank.ts` — expanded Social Studies practice depth to 20 questions per topic.
- `docs/ops/p7-social-studies-deepening-pass-2026-07-01.md` — documented the SST deepening pass.
- Root docs updated to reflect Social Studies strengthening.

**Social Studies practice now:**
- 10 topics
- 20 questions per topic
- 200 Social Studies practice questions total
- guided map/history/development tasks for all 10 topics

**Verified locally:**
- Production build passed with `✓ Generating static pages (147/147)`.

**Result:**
- Social Studies now has stronger PLE-oriented depth inside the official NCDC Living Together in Africa outline.

---

## v0.5.11 — 2026-07-01 — P7 Science deepened with guided application tasks and larger practice bank

**Session theme:** Continue deepening non-maths subjects toward maths-level product completeness, after English.

**Changed:**
- `app/components/TopicTabs.tsx` — renamed the practice section to Guided practice so it fits Science and SST, not only English writing.
- `app/lib/science-topics.ts` — added guided application/experiment tasks for all 8 Science topics.
- `app/lib/question-bank.ts` — expanded Science practice depth to 20 questions per topic.
- `app/app/globals.css` — reused guided-practice card styles for Science.
- `docs/ops/p7-science-deepening-pass-2026-07-01.md` — documented the Science deepening pass.
- Root docs updated to reflect Science strengthening.

**Science practice now:**
- 8 topics
- 20 questions per topic
- 160 Science practice questions total
- guided application/experiment tasks for all 8 topics

**Verified locally:**
- Production build passed with `✓ Generating static pages (147/147)`.

**Result:**
- Science now has stronger classroom and exam-prep depth inside the official 8 NCDC topics.

---

## v0.5.10 — 2026-07-01 — P7 English deepened with writing-practice packs and larger practice bank

**Session theme:** Start deepening the non-maths subjects toward maths-level product completeness, beginning with English.

**Changed:**
- `app/lib/topics.ts` — topic notes now support optional writing-practice tasks.
- `app/components/TopicTabs.tsx` — Read tab renders writing-practice cards with prompts, planning steps, checklists and model openings.
- `app/lib/english-topics.ts` — added writing-practice packs for all 7 English topics.
- `app/lib/question-bank.ts` — expanded English practice depth to 20 questions per topic.
- `app/app/globals.css` — added writing-practice card styles.
- `docs/ops/p7-english-deepening-pass-2026-07-01.md` — documented the English deepening pass.
- Root docs updated to reflect English strengthening.

**English practice now:**
- 7 topics
- 20 questions per topic
- 140 English practice questions total
- writing-practice packs for all 7 topics

**Verified locally:**
- Production build passed with `✓ Generating static pages (147/147)`.

**Result:**
- English now has more depth inside fewer official NCDC themes, which is the correct standard for English compared with Maths.

---

## v0.5.9 — 2026-07-01 — Teacher worksheet generator made more classroom-ready

**Session theme:** After the Social Studies + English push was confirmed working, the next execution step was teacher-facing usefulness.

**Changed:**
- `app/components/WorksheetGenerator.tsx` — added subject pool summary cards, class/term/time/marks fields, quick length buttons, custom instructions and a separate answer-key section.
- `app/app/teacher/worksheet/page.tsx` — clarified the worksheet pool as question-bank topics and updated teacher-facing copy.
- `app/app/globals.css` — added styles for worksheet summary cards, quick picks, metadata grid and printable answer key.
- `docs/ops/teacher-worksheet-usefulness-pass-2026-07-01.md` — added audit note for the teacher-facing pass.
- Root docs updated to reflect the teacher usefulness pass.

**Verified locally:**
- Production build passed with `✓ Generating static pages (147/147)`.

**Result:**
- The worksheet generator is more credible for real classroom use: cleaner pupil sheet, separate answer key, better metadata and clearer subject/question-pool controls.

---

## v0.5.8 — 2026-07-01 — P7 English built, practiced, templated and completed enough for grouped push

**Session theme:** The founder intentionally stretched the Social Studies push and asked to continue into English before pushing. Religious Education was explicitly paused. This milestone completes P7 English enough to group with the unpushed Social Studies work.

**Added:**
- `app/lib/english-topics.ts` — all 7 NCDC-aligned P7 English topics across Terms I–III.
- `app/app/english/p7/page.tsx` — English topic landing page grouped by term.
- `app/app/english/p7/[topic]/page.tsx` — English topic detail route.
- `app/app/english/p7/[topic]/practice/page.tsx` — English practice route.
- `content/curriculum/p7-english.json` — NCDC-based English curriculum map.
- `docs/ops/p7-english-quality-audit-2026-07-01.md` — English quality and closeout audit.

**Changed:**
- `app/app/page.tsx` — English is now active.
- `app/components/TopicDiagram.tsx` — added English writing templates/diagrams for all 7 topics.
- `app/app/english/p7/page.tsx` — shows template counts and writing-template cues.
- `app/lib/question-bank.ts` — added English subject metadata and 12-question banks per topic.
- `app/components/WorksheetGenerator.tsx` — added English-only worksheets.
- `app/app/teacher/worksheet/page.tsx` — updated worksheet copy to include English.
- `app/lib/english-topics.ts` — deepened writing-heavy topics: Letter Writing; Rights, Responsibilities and Freedom; Environmental Protection; Ceremonies.
- Root docs updated to reflect English completion and the grouped Social Studies + English push.

**English coverage now live:**
1. School Holidays
2. Letter Writing
3. Examinations
4. Electronic Media
5. Rights, Responsibilities and Freedom
6. Environmental Protection
7. Ceremonies

**Verified locally:**
- Production build passed with `✓ Generating static pages (147/147)`.

**Result:**
- P7 English is complete enough to move on and to push as part of the grouped Social Studies + English milestone. Remaining English work is enhancement, not a core blocker.

---

## v0.5.7 — 2026-07-01 — P7 Social Studies built, diagrammed, practiced and completed enough to move on

**Session theme:** After the Science milestone was pushed, Social Studies became the next active subject. This milestone turns SST from coming-soon into a complete enough P7 subject build for current product scope.

**Added:**
- `app/lib/social-topics.ts` — all 10 NCDC-aligned P7 Social Studies topics under Living Together in Africa.
- `app/app/social-studies/p7/page.tsx` — Social Studies topic landing page grouped by term.
- `app/app/social-studies/p7/[topic]/page.tsx` — Social Studies topic detail route.
- `app/app/social-studies/p7/[topic]/practice/page.tsx` — Social Studies practice route.
- `content/curriculum/p7-social-studies.json` — NCDC-based SST curriculum map.
- `docs/ops/p7-social-studies-first-wave-audit-2026-07-01.md` — upgraded to completion audit after depth/diagram passes.

**Changed:**
- `app/app/page.tsx` — Social Studies is now active.
- `app/components/TopicDiagram.tsx` — added diagrams for all 10 SST topics.
- `app/app/social-studies/p7/page.tsx` — shows diagram counts and visual cues.
- `app/lib/question-bank.ts` — added Social Studies subject metadata and 12-question banks per topic.
- `app/components/WorksheetGenerator.tsx` — added Social Studies-only worksheets.
- `app/app/teacher/worksheet/page.tsx` — updated worksheet copy to include Social Studies.
- `app/lib/social-topics.ts` — heavy topics deepened after the first wave.
- Root docs updated to reflect SST completion status.

**SST coverage now live:**
1. Location of Africa on the Map of the World
2. Physical Features of Africa
3. Climate of Africa
4. Vegetation of Africa
5. People of Africa, Ethnic Groups and Settlement Patterns
6. Foreign Influence in Africa
7. Nationalism and the Road to Independence of Africa
8. Post-Independence Africa
9. Economic Developments in Africa
10. Major World Organisations

**Verified locally:**
- Production build passed with `✓ Generating static pages (132/132)`.

**Result:**
- P7 Social Studies is complete enough to move on. Remaining work is enhancement and teacher feedback, not core subject completion.

---

## v0.5.6 — 2026-07-01 — P7 Integrated Science built, diagrammed, practiced, audited, and added to worksheets

**Session theme:** After finishing Mathematics, the founder redirected the next-subject push from Social Studies to **P7 Integrated Science**. This milestone turns Science from unavailable/coming-soon into a serious active subject build.

**Added:**
- `app/lib/science-topics.ts` — P7 Integrated Science content data layer with all 8 NCDC-aligned topics.
- `app/app/science/p7/page.tsx` — Science strand/topic landing page.
- `app/app/science/p7/[topic]/page.tsx` — Science topic detail route.
- `app/app/science/p7/[topic]/practice/page.tsx` — Science practice route.
- `content/curriculum/p7-science.json` — P7 Science curriculum map based on the NCDC Primary Seven Set One Integrated Science outline.
- `docs/ops/p7-science-quality-audit-2026-07-01.md` — Science quality and closeout audit note.

**Changed:**
- `app/app/page.tsx` — Integrated Science is now an active subject card linking to `/science/p7`.
- `app/components/TopicDiagram.tsx` — added diagrams for all 8 Science topics and retained maths diagrams.
- `app/components/TopicTabs.tsx` — renders topic diagrams inside the Read flow.
- `app/components/PracticeRunner.tsx` — supports subject-specific back links so Science practice returns to Science, not Maths.
- `app/lib/question-bank.ts` — added subject metadata, Science banks, and 64 additional Science practice questions.
- `app/components/WorksheetGenerator.tsx` — added subject filters: Maths only, Science only, Mixed.
- `app/app/teacher/worksheet/page.tsx` — updated worksheet page copy/metadata to include Science.
- `app/app/globals.css` — added styles for Science/Maths landing diagrams and worksheet subject filters; removed stale merge-conflict markers.
- `app/lib/science-topics.ts` — deepened the heavy Science topics: Electricity and Magnetism, Simple Machines and Friction, Light Energy, and Population and Health.
- `STATUS.md`, `HANDOFF.md`, `CHECKLIST.md`, `DECISIONS.md`, `CHANGELOG.md` — updated root docs so they no longer incorrectly say Social Studies is the current next subject.

**Science coverage now live:**
1. Muscular-skeletal system
2. Electricity and magnetism
3. Energy resources in the environment
4. Simple machines and friction
5. Excretory system
6. Light energy
7. Interdependence of things in the environment
8. Population and health

**Quality notes:**
- Population and Health was handled with respectful, safety-focused wording instead of directly reproducing outdated/sensitive curriculum phrasing in learner-facing content.
- Science practice now has 15 questions per topic: 7 quiz questions plus 8 additional practice-bank questions.
- Worksheet generator can now cleanly generate Maths-only, Science-only, or mixed worksheets.

**Verified locally:**
- TypeScript check passed from `app/`.
- Production build passed with `✓ Generating static pages (111/111)`.

**Result:**
- P7 Integrated Science is live, structured, diagrammed, practice-enabled, worksheet-enabled, quality-audited and deepened.
- Honest status: Science is strong enough to demo and continue from. The founder can decide whether to accept this as “done enough” before moving to Social Studies.

---

## v0.5.5 — 2026-07-01 — P7 Mathematics completed, docs consolidated into repo, and handoff reset for Social Studies next

**Session theme:** Finish P7 Mathematics properly, close the documentation gap, and make the repo itself the single source of truth before moving to the next subject.

**Added:**
- `docs/ops/p7-maths-final-completion-audit-2026-07-01.md` — final founder-safe audit for whether mathematics can truthfully be treated as done.
- `docs/ops/p7-maths-diagram-visual-plan-2026-07-01.md` — consolidated in-repo plan for first-wave maths diagrams and visual support.

**Changed:**
- `app/lib/topics.ts` — expanded P7 Mathematics coverage substantially and cleared the held final wave with:
  - probability of numbers and events
  - regular polygons
  - algebra in real-life situations
  - plus the wider completed topic-build waves already prepared during the maths finish push
- `app/lib/question-bank.ts` — audited and corrected so the practice layer no longer lags behind the topic content.
- `app/app/math/p7/page.tsx` — reworked the maths landing page to feel more study-first, less flat, and more honestly structured; also fixed stale footer counting.
- `STATUS.md` — rewritten to reflect the real current state: P7 Mathematics is now complete enough to move focus, docs are being consolidated into the repo, and Social Studies is the next major execution target.
- `HANDOFF.md` — rewritten as a clean next-session operating brief for post-maths execution.
- `CHECKLIST.md` — updated so maths closeout is reflected accurately and the next core subject push is visible.
- `DECISIONS.md` — appended with the maths-completion and repo-docs-source-of-truth decisions.
- `CHANGELOG.md` — this entry records the maths closeout and documentation consolidation milestone.

**Removed / superseded operationally:**
- External workspace-only maths planning notes are no longer the authoritative source. Equivalent high-value docs now live inside `tendo-ug/docs/ops/`.

**Why this mattered:**
- The product could not safely move to another subject while maths still felt half-finished.
- The workspace had started splitting key documentation between repo files and external workspace docs, which is unsafe for your manual overwrite workflow.
- Root tracking docs had gone stale relative to the real maths state.

**Result:**
- P7 Mathematics is now in a founder-safe “done” state.
- The repo is now the intended home for live project documentation.
- The next subject can be started without losing the maths narrative or operational context.

**Next session:** Start Social Studies intentionally, using the same curriculum-first and study-ready standard used to finish Mathematics.

---

## v0.5.4 — 2026-06-30 — Documentation sweep begins for Trainup + NCDC study-ready alignment

**Session theme:** Before continuing deeper content work, the docs needed to stop behaving like two merged timelines. This sweep begins the cleanup so the repo reflects the real current state: Trainup pilot prep, study-first framing, NCDC alignment, and a move from demo-ready to study-ready.

**Added:**
- `docs/ops/update-handoff-protocol.md` — standing delivery protocol for manual overwrite workflow.
- `docs/ops/doc-sweep-plan-2026-06-30.md` — plan for cleaning the project documents in a reliable order.
- `docs/ops/ncdc-p7-math-coverage-audit-2026-06-30.md` — detailed curriculum coverage audit against `content/curriculum/p7-math.json`.
- `docs/ops/session-note-2026-06-30-next-step-alignment.md` — internal note capturing the founder's clarified direction for the next pass.

**Changed:**
- `STATUS.md` — rewritten to reflect the real current state: Trainup pilot prep, about 10 stronger study-ready topics, documentation cleanup, practice-layer alignment next.
- `HANDOFF.md` — rewritten to remove mixed historical states and give the next session a clean operating picture.
- `CHECKLIST.md` — rewritten so the current milestone is Trainup pilot prep and NCDC study-ready alignment, not older phase labels alone.
- `DECISIONS.md` — rewritten cleanly to remove conflict markers while preserving the major product, pilot, and workflow decisions.
- `CHANGELOG.md` — this entry documents the sweep itself and resets the file as a clean historical narrative.

**Why this mattered:**
- The docs had unresolved merge-conflict leftovers.
- The repo had started telling two stories at once: older video-first work and newer Trainup pilot / study-ready work.
- Future content work would keep inheriting confusion unless the documentation layer was cleaned first.

**Result:**
- The project docs now point more clearly at the real next work:
  1. finish the doc sweep
  2. audit the practice/question layer
  3. standardise the 3 lighter published topics
  4. continue building missing high-priority NCDC topics

**Next session:** Practice/question alignment audit, then topic standardisation and curriculum-structure cleanup.

---

## v0.5.3 — 2026-06-30 — Trainup branding and first major study-module rewrites

**Session theme:** Shift from generic revision/demo product toward a school-facing study platform for the Trainup pilot.

**Added:**
- `app/lib/school.ts` — school config layer with Tendo and Trainup a Child Uganda configs.
- `app/components/BrandBar.tsx` — school-brand bar for Trainup pathing.
- `app/app/trainup/page.tsx` — Trainup-branded landing page.
- Extended `TopicNote` interface with `learningObjectives`, `commonMistakes`, and `tryThis`.

**Changed:**
- Rewrote the following topics into fuller NCDC-aligned study modules:
  - Fractions
  - Proportion and percentages
  - Equations
  - Decimals
  - Venn diagrams
  - Area
  - Perimeter
  - Volume
  - Money
  - Mean, median, mode and range
- `app/components/TopicTabs.tsx` — updated to render the richer study sections and include them in the listen-aloud flow.
- `app/app/globals.css` — styling support for newer study-module sections and branding work.

**Verified locally:**
- Build succeeded with the new `/trainup` route.

**Next session at the time:** Continue the pilot-prep study rewrite work or audit curriculum coverage.

---

## v0.5.2 — 2026-06-30 — Trainup pilot plan and answer-bias quality fix

**Session theme:** Prepare the product for a real school pilot by fixing obvious quality issues before any school sees the product.

**Added:**
- `docs/ops/trainup-pilot-plan.md` — phased pilot-prep plan.
- `scripts/shuffle-correct-answers.js` — script to randomise answer positions.

**Changed:**
- Shuffled correct-answer positions across topic quizzes and the question bank.
- Logged Trainup pilot decisions in the operational docs.

**Why this mattered:**
- The answer-position bias was a credibility problem for teachers and students.
- The project needed a quality-first pilot plan before broader rollout.

---

## v0.5.1 — 2026-06-25 — Video wiring for the Watch tab

**Session theme:** Make the Watch tab ready for real topic-level video embeds without requiring repeated component rewrites.

**Added:**
- Optional `videoUrl?: string` field on topics.
- `docs/ops/notebooklm-video-guide.md`.
- `toEmbedUrl()` helper and responsive video wrapper styling.
- Placeholder video comments on starter topics.

**Changed:**
- Watch tab now embeds video when `videoUrl` exists and shows an honest placeholder otherwise.

**Verified locally:**
- Build succeeded.
- Topic-page watch behaviour spot-checked.

---

## v0.5.0 — 2026-06-25 — Practice mode, worksheet generator, and UI cleanup

**Session theme:** Turn the product from a fixed-topic demo into something with repeatable student practice and teacher utility.

**Added:**
- Static question bank
- Practice mode
- Worksheet generator
- Content-sources documentation

**Changed:**
- Listen tab removed as a full tab and moved into the reading experience.
- Review-pill UI removed.
- Home and teacher pages updated to surface the new tools.

**Verified locally:**
- Build succeeded.
- Practice and worksheet flows worked.

---

## v0.4.0 — 2026-06-25 — More topics, stronger teacher dashboard, and Fellowship strategy

**Added:**
- 10 more P7 Math topics
- 2 more past papers
- demo class
- richer teacher dashboard
- report-a-problem flow
- teacher contribution strategy docs

**Changed:**
- Sales materials and dashboard flows expanded.

---

## v0.3.0 — 2026-06-25 — Past papers, topic tabs, and teacher dashboard foundations

**Added:**
- Past paper system
- student attempt flow
- teacher browse mode
- Watch / Listen / Read structure
- teacher dashboard

**Changed:**
- Home page and topic page evolved into a more complete study flow.

---

## v0.2.1 — 2026-06-24 — Next.js security/version bump for Vercel deploy

**Changed:**
- Next.js moved to a patched 15.x line.
- React moved to stable 19.

**Why:**
- Vercel blocked the older vulnerable framework version.

---

## v0.2.0 — 2026-06-24 — Phase 1 app shell built

**Added:**
- Next.js app setup
- home route
- topic list route
- topic detail route
- first 3 topics
- quiz + progress tracking

**Verified locally:**
- Local build and route checks passed.

---

## v0.1.0 — 2026-06-24 — Foundation

**Added:**
- project skeleton
- session docs
- P7 Math curriculum map
- product/spec/sales docs
- clickable preview demo

**Cost:**
- UGX 0 / USD 0.
