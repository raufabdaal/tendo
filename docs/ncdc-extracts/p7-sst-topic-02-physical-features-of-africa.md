# NCDC Deep Extract — P7 Social Studies Topic 2: Physical Features of Africa

**Source:** `tmp/p7-set-one.pdf` (NCDC Primary Seven Curriculum Set One, 2012), pages 318–321.  
**Curriculum mapping:** `content/curriculum/p7-social-studies.json` → Theme: Living Together in Africa, Topic 2.  
**Periods:** 12.  
**Status:** Converted to Lesson Structure v3 modular format in `app/lib/social-topics.ts` (`id: "physical-features-of-africa"`).

---

## 1. NCDC stated learning outcome

The learner explores and appreciates the value of one’s immediate and distant environment for better and harmonious living.

## 2. NCDC life skills, SST skills and values

| Category | Items |
|----------|-------|
| Life skills | Effective communication, Critical thinking |
| SST skills | Recording, Observation, Drawing, Modelling, Analysing differences in formation |
| Values | Caring, Appreciation, Love, Respect |

## 3. NCDC content outline (exact sub-topics)

1. Names and location of physical features in Africa
   - Mountains and highlands
   - Rivers
   - Lakes
   - Plateau
   - Rift valley
   - Coastal plains
2. Formation of major physical features of Africa

## 4. NCDC competences to be assessed

The learner should be able to:

- name and locate the major physical features of Africa beyond East Africa.
- discuss the formation of major physical features in the other regions of Africa.
- identify the coastal plains.
- identify the oceans and seas into which the major rivers of Africa flow.
- list the different mountains and highlands of the different regions in Africa starting with the highest.
- mention the countries where the major physical features are located.

## 5. Mapping NCDC content to v3 modules

| Sub-topic | Module ID | Module title | What it teaches (NCDC-aligned) |
|-----------|-----------|--------------|--------------------------------|
| Names and location — Mountains and highlands | `mountains-highlands-africa` | Mountains and highlands of Africa | Major mountains/highlands outside East Africa: Atlas, Drakensberg, Cameroon highlands, Jos plateau, Ahaggar, Tibesti, Ethiopian highlands; countries where they are found. |
| Names and location — Mountains and highlands | `mountains-highlands-use-challenge` | Use and challenges of mountains and highlands | Water sources, tourism, minerals, climate; barriers to transport, erosion, cold slopes. |
| Names and location — Rivers | `rivers-of-africa` | Rivers of Africa | Nile, Congo, Niger, Zambezi, Orange, Limpopo, Blue Nile, Volta; direction and where they flow. |
| Names and location — Rivers | `rivers-use-challenge` | How rivers help and challenge people | Irrigation, fishing, transport, HEP, water supply; flooding, rapids/waterfalls, pollution. |
| Names and location — Lakes | `lakes-of-africa` | Lakes of Africa | Victoria, Tanganyika, Malawi, Chad, Ngami; rift-valley lakes; uses of lakes. |
| Names and location — Plateau, rift valley, coastal plains | `plateau-coastal-plains` | Plateau and coastal plains | Africa as a plateau continent; coastal plains in West, North and South; uses and location. |
| Names and location — Plateau, rift valley, coastal plains | `rift-valley` | The Rift Valley | Long depression formed by earth movements; rift-valley lakes; location and importance. |
| Formation of major physical features | `formation-mountains` | How mountains are formed | Folded mountains (Atlas), fault-block mountains, volcanic mountains (Kilimanjaro, Cameroon, Ethiopian highlands). |
| Formation of major physical features | `formation-other-features` | Formation of rift valleys and coastal plains | Rift valley by faulting; coastal plains by deposition and sea-level change. |

## 6. Exact NCDC factual lists used

### Mountains and highlands (from PDF page 319)
- The Atlas
- The Drakensberg
- The Cameroon highlands
- The Jos plateau
- The Ahaggar
- The Tibesti
- The Ethiopian highlands

### Rivers (from PDF page 319)
- River Congo
- The Nile
- The Niger
- Zambezi
- Orange
- Limpopo
- Blue Nile
- The Volta

### Lakes (from PDF page 319)
- Lake Chad
- Lake Ngami

### Coastal plains (from PDF page 320)
- Coastal plains in the West, North and South.

### Formation types mentioned in teacher guidance (PDF page 320)
- Folded mountains
- Fault-block mountains
- Volcanic mountains

## 7. Design decisions for the modular conversion

- Each major physical feature group becomes one subtopic.
- Formation is kept as a separate subtopic because the NCDC devotes specific assessment competences to it.
- Modules include both naming/locating and explaining use/challenge, matching the NCDC competence “explores and appreciates the value of the environment.”
- No invented physical features; every mountain, river, lake and formation type comes directly from the NCDC PDF.

## 8. Files affected

- `app/lib/social-topics.ts` — `id: "physical-features-of-africa"`
- `app/components/TopicTabs.tsx` — modular renderer
- `app/app/globals.css` — modular styles
- This document

---

**Extraction date:** 2026-07-03  
**Extractor:** Arena.ai Agent Mode  
**Source checked:** NCDC P7 Set One PDF pages 318–321 and `content/curriculum/p7-social-studies.json`.
