# NCDC Deep Extract — P7 Social Studies Topic 10: Major World Organisations

**Source:** `content/curriculum/p7-social-studies.json` → Theme: Living Together in Africa, Topic 10. NCDC Primary Seven Curriculum Set One, Social Studies Syllabus.  
**Periods:** 10.  
**Status:** Converted to Lesson Structure v3 modular format in `app/lib/social-topics.ts` (`id: "major-world-organisations"`).

---

## 1. NCDC stated learning outcome

The learner demonstrates an understanding of major world organisations, their origin, objectives, organs, agencies, functions and challenges, with emphasis on the United Nations and the Commonwealth.

## 2. NCDC life skills, SST skills and values

| Category | Items |
|----------|-------|
| Life skills | Critical thinking, Decision making, Effective communication |
| SST skills | Inquiry, Observation, Interpretation |
| Values | Cooperation, Responsibility, Respect, Patriotism, Integrity |

## 3. NCDC content outline (exact sub-topics)

1. Formation of the United Nations
2. Origin, objectives, membership, organs and functions of the UN
3. UN agencies and their functions
4. Importance of the United Nations
5. UN Human Rights Charter
6. The Commonwealth of Nations
7. Membership and functions of the Commonwealth
8. Challenges of the UN and the Commonwealth of Nations

## 4. NCDC competences to be assessed

The learner should be able to:

- explain the formation of the United Nations.
- describe the origin, objectives, membership, organs and functions of the UN.
- name UN agencies and explain their functions.
- explain the importance of the United Nations.
- describe the UN Human Rights Charter in simple terms.
- explain the Commonwealth of Nations, its membership and functions.
- explain challenges faced by the UN and the Commonwealth.

## 5. Mapping NCDC content to v3 modules

| NCDC sub-topic(s) | Subtopic ID | Module ID | Module title |
|-------------------|-------------|-----------|--------------|
| 1–2 | `un-formation-organs` | `formation-united-nations` | Formation of the United Nations |
| 1–2 | `un-formation-organs` | `un-organs-functions` | Origin, objectives, membership, organs and functions of the UN |
| 3–5 | `un-agencies-rights` | `un-agencies-functions` | UN agencies and their functions |
| 3–5 | `un-agencies-rights` | `un-human-rights-charter` | UN Human Rights Charter |
| 3–5 | `un-agencies-rights` | `importance-un` | Importance of the United Nations |
| 6–7 | `commonwealth-challenges` | `commonwealth-nations` | The Commonwealth of Nations |
| 6–7 | `commonwealth-challenges` | `membership-functions-commonwealth` | Membership and functions of the Commonwealth |
| 8 | `commonwealth-challenges` | `challenges-un-commonwealth` | Challenges of the UN and the Commonwealth of Nations |

## 6. Exact NCDC factual lists used

### United Nations
- Formed: 1945, after World War II
- Headquarters: New York, USA
- Objectives: maintain international peace and security; promote friendly relations; promote human rights; promote economic/social cooperation; harmonise international actions
- Organs: General Assembly; Security Council; International Court of Justice; Secretariat; Economic and Social Council (ECOSOC)
- Secretary-General heads the Secretariat

### UN agencies
- UNICEF – United Nations Children's Fund – children
- WHO – World Health Organization – health
- FAO – Food and Agriculture Organization – food/agriculture
- UNESCO – United Nations Educational, Scientific and Cultural Organization – education/science/culture
- UNHCR – United Nations High Commissioner for Refugees – refugees
- WFP – World Food Programme – food assistance

### Human Rights Charter
- Universal Declaration of Human Rights adopted 1948
- Rights include: right to life, education, health, fair treatment, worship, expression, freedom from discrimination
- Rights go together with responsibilities
- UN Convention on the Rights of the Child

### Commonwealth of Nations
- Association of independent countries, many formerly linked to Britain
- Membership is voluntary
- Secretariat in London, UK
- Functions: democracy/good governance, education (Commonwealth Scholarships), trade, health, youth empowerment, gender equality, Commonwealth Games
- Members include Uganda, Kenya, Tanzania, Nigeria, Ghana, South Africa, India, Canada, Australia and others

### Challenges of world organisations
- UN: limited funds, conflicts/wars, powerful countries' interests, slow decision-making, veto power disagreements, refugee crises, climate disasters, failure by members to respect agreements
- Commonwealth: limited funds, no enforcement power, political disagreements, balancing diverse members

## 7. Design decisions for the modular conversion

- The 8 NCDC sub-topics are grouped into 3 v3 subtopics: UN formation/organs (2 modules), UN agencies/rights/importance (3 modules), Commonwealth + challenges (3 modules).
- UN formation and organs/functions are split to avoid information overload – formation/history first, then structure/functions.
- UN agencies, Human Rights Charter, and Importance of the UN are grouped together, progressing from specific agencies → rights framework → overall importance.
- The Commonwealth and challenges are paired, with separate modules for: what is the Commonwealth, membership/functions, and challenges of both UN and Commonwealth.
- Agency-function matching is reinforced with visual cards, tryThis questions and a worked example (UNICEF + WHO).
- All modules preserve existing v2 note content in the topic object.
- Quiz questions are unchanged from v2 to preserve practice-bank stability.

## 8. Files affected

- `app/lib/social-topics.ts` — `id: "major-world-organisations"` – added `subtopics` array (3 subtopics / 8 modules)
- `docs/ncdc-extracts/p7-sst-topic-10-major-world-organisations.md` – this file

---

**Extraction date:** 2026-07-04  
**Extractor:** Arena.ai Agent Mode  
**Source checked:** `content/curriculum/p7-social-studies.json` and existing `app/lib/social-topics.ts` v2 content.
