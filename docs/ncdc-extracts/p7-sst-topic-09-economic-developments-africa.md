# NCDC Deep Extract — P7 Social Studies Topic 9: Economic Developments in Africa

**Source:** `content/curriculum/p7-social-studies.json` → Theme: Living Together in Africa, Topic 9. NCDC Primary Seven Curriculum Set One, Social Studies Syllabus.  
**Periods:** 30.  
**Status:** Converted to Lesson Structure v3 modular format in `app/lib/social-topics.ts` (`id: "economic-developments-africa"`).

---

## 1. NCDC stated learning outcome

The learner demonstrates an understanding of economic developments in Africa, resources, case studies and solutions to development challenges.

## 2. NCDC life skills, SST skills and values

| Category | Items |
|----------|-------|
| Life skills | Critical thinking, Decision making, Effective communication |
| SST skills | Inquiry, Observation, Interpretation, Drawing |
| Values | Cooperation, Responsibility, Patriotism, Integrity |

## 3. NCDC content outline (exact sub-topics)

1. Major economic resources of Africa
2. Problems faced in the utilisation of resources
3. Caring for our resources
4. Major economic development in Africa
5. Case studies: Nigeria, Sudan, Libya, South Africa, DRC and Uganda
6. Comparison with other countries in terms of economic development
7. Challenges affecting economic development in Africa
8. Possible solutions to problems that affect economic development in Africa

## 4. NCDC competences to be assessed

The learner should be able to:

- name major economic resources of Africa.
- explain problems faced in the utilisation of resources.
- describe how to care for resources.
- explain major economic developments in Africa.
- describe case studies of economic development: Nigeria, Sudan, Libya, South Africa, DRC and Uganda.
- compare countries in terms of economic development.
- explain challenges affecting economic development in Africa.
- suggest possible solutions to problems that affect economic development.

## 5. Mapping NCDC content to v3 modules

| NCDC sub-topic(s) | Subtopic ID | Module ID | Module title |
|-------------------|-------------|-----------|--------------|
| 1 | `resources-africa` | `major-economic-resources-africa` | Major economic resources of Africa |
| 2 | `resources-africa` | `problems-utilisation-resources` | Problems faced in the utilisation of resources |
| 3 | `resources-africa` | `caring-resources` | Caring for our resources |
| 4 | `economic-activities-development` | `major-economic-development-africa` | Major economic development in Africa |
| 5–6 | `country-case-studies` | `nigeria-sudan-libya` | Case studies: Nigeria, Sudan, Libya |
| 5–6 | `country-case-studies` | `south-africa-drc-uganda` | Case studies: South Africa, DRC, Uganda |
| 5–6 | `country-case-studies` | `comparing-countries` | Comparison with other countries in terms of economic development |
| 7 | `challenges-solutions` | `challenges-economic-development` | Challenges affecting economic development in Africa |
| 8 | `challenges-solutions` | `solutions-economic-development` | Possible solutions to problems that affect economic development in Africa |

## 6. Exact NCDC factual lists used

### Major economic resources
- Minerals: gold, copper, cobalt, diamonds, petroleum, iron ore, bauxite, coltan
- Agricultural: fertile soils, favourable climate, pasture, water
- Forest: timber, medicine, fuel, rainfall support
- Water: rivers, lakes, fisheries, irrigation, HEP
- Wildlife/tourism
- Human labour
- Renewable energy: sunshine, wind

### Problems in resource utilisation
- Poor transport
- Limited capital
- Low technology
- Political instability
- Corruption
- Poor markets
- Climate problems
- Land conflicts
- Low value addition
- Environmental degradation

### Economic activities
- Agriculture, mining, tourism, industries, trade, transport, fishing, pastoralism, irrigation, HEP, industrialisation

### Case study summaries
- **Nigeria:** petroleum, farming, trade, large market; problems: oil price fluctuation, pipeline vandalism, pollution, corruption
- **Sudan:** Nile Valley, Gezira Irrigation Scheme (cotton), pastoralism, gum arabic, gold; problems: instability, desertification
- **Libya:** petroleum, desert irrigation (Great Man-Made River), tourism, industrialisation; problems: instability, desert climate
- **South Africa:** mining (gold, diamonds, platinum, coal), farming, manufacturing, trade, tourism; advanced infrastructure; problems: inequality, unemployment, power cuts
- **DRC:** minerals (copper, cobalt, coltan, diamonds, gold), forests, hydro-power (Inga Dam), wildlife; problems: poor transport, conflict, weak infrastructure
- **Uganda:** farming (coffee, tea, cotton), tourism (gorillas, parks), fishing, mining, oil development; problems: over-dependence on agriculture, poor rural transport, youth unemployment

### Challenges affecting development
- Poor transport, unreliable electricity, political instability, corruption, low technology/skills, over-dependence on raw exports, unfavourable trade terms, rapid population growth, climate change, debt burden, poor market access

### Solutions
- Good governance, peace/stability, infrastructure investment, industrialisation/value addition, skills training, regional trade cooperation, responsible investment, environmental care, economic diversification, support small businesses

## 7. Design decisions for the modular conversion

- The 8 NCDC sub-topics are grouped into 4 v3 subtopics: resources + care (3 modules), economic activities (1 module), country case studies (3 modules), challenges + solutions (2 modules).
- Resources are taught first with problems and caring, so learners understand responsible use before studying country examples.
- Case studies are split geographically: Nigeria/Sudan/Libya (North/West/North-East) then South Africa/DRC/Uganda (Southern/Central/East), with a dedicated comparison module that teaches analytical thinking, not memorisation.
- The country comparison module explicitly teaches that resource wealth ≠ automatic development – governance, infrastructure, peace and value addition matter more.
- Challenges and solutions are paired, with exam tips encouraging balanced problem→solution answers.
- All modules preserve existing v2 note content in the topic object.

## 8. Files affected

- `app/lib/social-topics.ts` — `id: "economic-developments-africa"` – added `subtopics` array (4 subtopics / 8 modules)
- `docs/ncdc-extracts/p7-sst-topic-09-economic-developments-africa.md` – this file

---

**Extraction date:** 2026-07-04  
**Extractor:** Arena.ai Agent Mode  
**Source checked:** `content/curriculum/p7-social-studies.json` and existing `app/lib/social-topics.ts` v2 content.
