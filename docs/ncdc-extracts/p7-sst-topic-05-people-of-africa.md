# NCDC Deep Extract — P7 Social Studies Topic 5: The People of Africa, the Ethnic Groups and Settlement Patterns

**Source:** `tmp/p7-set-one.pdf` (NCDC Primary Seven Curriculum Set One, 2012), pages 333–336.  
**Curriculum mapping:** `content/curriculum/p7-social-studies.json` → Theme: Living Together in Africa, Topic 5.  
**Periods:** 12.  
**Status:** Converted to Lesson Structure v3 modular format in `app/lib/social-topics.ts` (`id: "people-ethnic-groups-settlement"`).

---

## 1. NCDC stated learning outcome

The learner demonstrates and promotes positive values and social practises in the society, and shows respect for his/her own and other cultures.

## 2. NCDC life skills, SST skills and values

| Category | Items |
|----------|-------|
| Life skills | Creative thinking, Friendship formation |
| SST skills | Inquiry, Observation, Classifying, Drawing |
| Values | Cooperation, Love, Respect, Appreciation |

## 3. NCDC content outline (exact sub-topics)

1. Origin of different ethnic groups
2. Movements of different ethnic groups into Africa
3. Settlement patterns of different ethnic groups
4. Tribes belonging to different ethnic groups
5. Reasons for the migration and settlement of ethnic groups in Africa
6. Problems met by ethnic groups during their movement and settlement in Africa
7. Effects of ethnic migrations

## 4. NCDC competences to be assessed

The learner should be able to:

- describe the origin of different ethnic groups in Africa.
- describe the movement of different ethnic groups.
- identify settlement patterns of different ethnic groups.
- identify tribes that belong to different ethnic groups.
- identify reasons why different ethnic groups moved from their origins.
- discuss problems people met during their movements and settlements.
- explain the effects of ethnic migrations.
- draw a map of Africa showing the settlement of different ethnic groups.

## 5. Mapping NCDC content to v3 modules

| Sub-topic | Module ID | Module title | What it teaches (NCDC-aligned) |
|-----------|-----------|--------------|--------------------------------|
| Origin of different ethnic groups | `what-is-ethnic-group` | What is an ethnic group? | Shared culture, language, origin or history; respect and diversity. |
| Origin of different ethnic groups | `major-ethnic-groups` | Major ethnic groups of Africa | Berbers, Negroes, Bantu, Cushites, Arabs, Caucasians (Hamites and Semites). |
| Movements of different ethnic groups into Africa | `migration-into-africa` | Migration of ethnic groups into Africa | Movements into Africa from different directions; settlement. |
| Movements of different ethnic groups into Africa | `reasons-migration` | Reasons for migration | Population increase, wars/conflicts, search for land and water, harsh climate, expansionism. |
| Settlement patterns and tribes | `settlement-patterns` | Settlement patterns of ethnic groups | How different groups settled across Africa; influence of relief. |
| Settlement patterns and tribes | `tribes-ethnic-groups` | Tribes belonging to ethnic groups | Examples of tribes under Bantu, Cushitic, Nilotic, etc. |
| Problems and effects of migration | `problems-migration` | Problems during movement and settlement | Resistance, difficult terrain, wild animals, diseases, food/water shortage. |
| Problems and effects of migration | `effects-migration` | Effects of ethnic migrations | Population increase, cultural change, intermarriage, conflicts, new settlements. |

## 6. Exact NCDC factual lists used

### Ethnic groups (from PDF page 334)
- Berbers
- Negroes
- Bantu
- Cushites
- Arabs
- Caucasians (Hamites and Semites)

### Reasons for migration, movement and settlement (from PDF page 334)
- Internal conflicts
- Wars
- Population increase
- Lack of enough land and water
- Harsh climate
- Expansionism

### Problems met during movement and settlement (from PDF page 335)
- Resistance from indigenous people found on the way and in the places they settled
- Difficulty in movements
- Wild animals and diseases
- Difficult terrain
- Food and water shortage
- Harsh climate

### Effects of migrations (from PDF page 335)
- Population increase
- Cultures changed

## 7. Design decisions for the modular conversion

- The topic is kept respectful and factual. No ethnic group is ranked as superior or inferior.
- The NCDC's broad list of ethnic groups is preserved; examples of tribes are included where they are commonly taught and clearly linked.
- Migration is separated into reasons, problems and effects so learners can answer structured exam questions.
- The modules do not invent migration routes; they describe general movements and settlement patterns supported by the NCDC source.

## 8. Files affected

- `app/lib/social-topics.ts` — `id: "people-ethnic-groups-settlement"`
- `app/components/TopicTabs.tsx` — modular renderer
- `app/app/globals.css` — modular styles
- This document

---

**Extraction date:** 2026-07-03  
**Extractor:** Arena.ai Agent Mode  
**Source checked:** NCDC P7 Set One PDF pages 333–336 and `content/curriculum/p7-social-studies.json`.
