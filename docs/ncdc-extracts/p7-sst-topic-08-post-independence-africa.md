# NCDC Deep Extract — P7 Social Studies Topic 8: Post-Independence Africa

**Source:** `content/curriculum/p7-social-studies.json` → Theme: Living Together in Africa, Topic 8. NCDC Primary Seven Curriculum Set One, Social Studies Syllabus.  
**Periods:** 10.  
**Status:** Converted to Lesson Structure v3 modular format in `app/lib/social-topics.ts` (`id: "post-independence-africa"`).

---

## 1. NCDC stated learning outcome

The learner demonstrates an understanding of post-independence Africa, regional cooperation and economic groupings.

## 2. NCDC life skills, SST skills and values

| Category | Items |
|----------|-------|
| Life skills | Critical thinking, Decision making, Effective communication |
| SST skills | Inquiry, Observation, Interpretation, Drawing |
| Values | Cooperation, Responsibility, Respect, Patriotism |

## 3. NCDC content outline (exact sub-topics)

1. Formation of OAU
2. Objectives, functions, achievements and failures of OAU
3. Formation and objectives of AU
4. Challenges and organs of AU
5. Regional economic groupings including COMESA, ECOWAS, SADC and IGAD
6. Advantages and disadvantages of economic cooperation
7. Ways of solving problems faced by economic groupings

## 4. NCDC competences to be assessed

The learner should be able to:

- explain the formation of the OAU.
- state objectives, functions, achievements and failures of the OAU.
- describe the formation and objectives of the AU.
- explain challenges and organs of the AU.
- name regional economic groupings including COMESA, ECOWAS, SADC and IGAD.
- explain advantages and disadvantages of economic cooperation.
- suggest ways of solving problems faced by economic groupings.

## 5. Mapping NCDC content to v3 modules

| NCDC sub-topic(s) | Subtopic ID | Module ID | Module title |
|-------------------|-------------|-----------|--------------|
| 1 | `oau-formation-aims` | `formation-oau` | Formation of the OAU |
| 2 | `oau-formation-aims` | `objectives-functions-oau` | Objectives, functions, achievements and failures of OAU |
| 3 | `au-formation-organs` | `formation-objectives-au` | Formation and objectives of the AU |
| 4 | `au-formation-organs` | `challenges-organs-au` | Challenges and organs of the AU |
| 5 | `regional-economic-groupings` | `comesa-ecowas-sadc-igad` | Regional economic groupings: COMESA, ECOWAS, SADC, IGAD |
| 6 | `regional-economic-groupings` | `advantages-disadvantages-cooperation` | Advantages and disadvantages of economic cooperation |
| 7 | `regional-economic-groupings` | `solving-problems-groupings` | Ways of solving problems faced by economic groupings |

## 6. Exact NCDC factual lists used

### OAU
- Formed: 25 May 1963, Addis Ababa, Ethiopia
- Founding members: 32 independent African countries
- Objectives: promote unity; defend sovereignty; eradicate colonialism; promote cooperation; promote international cooperation
- Achievements: supported liberation; promoted unity; defended sovereignty
- Failures: limited funds; could not stop all conflicts; slow economic integration

### AU
- Replaced OAU in 2002, launched Durban, South Africa
- Objectives: unity, peace, democracy, human rights, development, cooperation
- Headquarters: Addis Ababa, Ethiopia
- Organs: Assembly of Heads of State; AU Commission; Pan-African Parliament; Peace and Security Council; Court of Justice
- Challenges: conflicts, poverty, political instability, limited funds, poor transport, disease outbreaks

### Regional economic groupings
- COMESA – Common Market for Eastern and Southern Africa
- ECOWAS – Economic Community of West African States
- SADC – Southern African Development Community
- IGAD – Intergovernmental Authority on Development (Eastern Africa / Horn of Africa)

### Advantages of cooperation
- larger markets
- shared infrastructure
- peace-building
- easier movement of goods/services
- stronger bargaining power
- technology/skills sharing

### Disadvantages / challenges
- political conflicts
- poor transport
- unequal development
- smuggling / unfair trade
- poverty
- different currencies/taxes
- failure to implement agreements

### Solutions
- promote peace and stability
- improve transport and communication
- harmonise trade policies
- fight corruption
- support poorer members
- invest in skills and industries
- respect agreements

## 7. Design decisions for the modular conversion

- The 7 NCDC sub-topics are grouped into 3 v3 subtopics to keep the learner flow coherent: OAU, AU, Regional groupings.
- OAU formation and objectives/functions are split into two focused modules to avoid information overload.
- AU formation/objectives and challenges/organs are similarly split.
- Regional groupings, advantages/disadvantages, and solutions are combined under one subtopic with three modules, progressing from naming → evaluating → solving.
- All modules preserve existing v2 note content in the topic object; v3 renderer ignores topic-level sections when `subtopics` is present.
- Quiz questions are unchanged from v2 to preserve practice-bank stability.

## 8. Files affected

- `app/lib/social-topics.ts` — `id: "post-independence-africa"` – added `subtopics` array (3 subtopics / 7 modules)
- `docs/ncdc-extracts/p7-sst-topic-08-post-independence-africa.md` – this file

---

**Extraction date:** 2026-07-04  
**Extractor:** Arena.ai Agent Mode  
**Source checked:** `content/curriculum/p7-social-studies.json` and existing `app/lib/social-topics.ts` v2 content.
