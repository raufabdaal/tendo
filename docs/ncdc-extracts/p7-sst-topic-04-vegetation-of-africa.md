# NCDC Deep Extract — P7 Social Studies Topic 4: Vegetation of Africa

**Source:** `tmp/p7-set-one.pdf` (NCDC Primary Seven Curriculum Set One, 2012), pages 327–331.  
**Curriculum mapping:** `content/curriculum/p7-social-studies.json` → Theme: Living Together in Africa, Topic 4.  
**Periods:** 18.  
**Status:** Converted to Lesson Structure v3 modular format in `app/lib/social-topics.ts` (`id: "vegetation-of-africa"`).

---

## 1. NCDC stated learning outcome

The learner appreciates the value of the vegetation and practises how to care for it for a better and harmonious living.

## 2. NCDC life skills, skills and values

| Category | Items |
|----------|-------|
| Life skills | Effective communication, Critical thinking, Problem-solving |
| Skills | Drawing, Observation |
| Values | Caring, Appreciation, Love |

## 3. NCDC content outline (exact sub-topics)

1. Location and names of vegetation types of Africa
2. Factors that influence vegetation distribution in Africa
3. Importance of vegetation to people and animals
4. Importance of game parks
5. Animals found in different vegetation zones
6. Reasons why animals live in different vegetation zones
7. Population distribution in relation to vegetation
8. Reasons for differences in population distribution in different vegetation zones
9. Effects of population on vegetation

## 4. NCDC competences to be assessed

The learner should be able to:

- locate and name the types of vegetation in Africa.
- describe factors influencing vegetation distribution in Africa.
- explain how each factor influences the vegetation.
- explain the importance of vegetation.
- list the various types of birds and animals in his/her area.
- identify animals found in different vegetation zones.
- explain why animals live in different vegetation zones.
- write down the importance of caring for animals and birds.
- relate population distribution to vegetation.
- explain reasons for differences in population distribution in different vegetation zones.
- outline the effects of population on vegetation.

## 5. Mapping NCDC content to v3 modules

| Sub-topic | Module ID | Module title | What it teaches (NCDC-aligned) |
|-----------|-----------|--------------|--------------------------------|
| Location and names of vegetation types | `forest-vegetation` | Forest vegetation of Africa | Equatorial forests, mangrove forests and montane forests. |
| Location and names of vegetation types | `grassland-shrub-vegetation` | Grassland and shrub vegetation | Savannah, temperate grasslands (velds), Mediterranean vegetation. |
| Factors that influence vegetation distribution | `natural-factors-vegetation` | Natural factors affecting vegetation | Climate, soil and relief/altitude. |
| Factors that influence vegetation distribution | `human-factors-vegetation` | Human activities affecting vegetation | Deforestation, bush burning, overgrazing, afforestation, farming. |
| Importance of vegetation to people and animals | `importance-vegetation` | Importance of vegetation | Food, timber, medicine, rainfall, soil protection, habitats, grazing, fuel, tourism. |
| Importance of game parks; Animals in vegetation zones | `game-parks-animals` | Game parks and animals | Importance of game parks; animals in equatorial forests, savannah and temperate grasslands. |
| Reasons why animals live in different vegetation zones | `animals-vegetation-zones` | Why animals live in different zones | Food, water, shelter, climate and protection from enemies. |
| Population distribution in relation to vegetation | `population-vegetation` | Population and vegetation | Where people settle in relation to vegetation; reasons for differences. |
| Effects of population on vegetation | `population-effects-vegetation` | Effects of population on vegetation | Deforestation, overgrazing, soil erosion, bush burning; conservation solutions. |

## 6. Exact NCDC factual lists used

### Vegetation types (from PDF page 328)
- Equatorial forests
- Mangrove forests
- Montane vegetation
- Temperate grasslands (velds)
- Savannah vegetation
- Mediterranean vegetation (in South Africa, Tunisia, Algeria, Morocco and Libya)

### Factors that influence vegetation distribution (from PDF page 329)
- Climate
- Types of soil
- Human activities
- Relief/altitude

### Importance of vegetation (from PDF page 329)
- Importance to people and animals
- Importance of game parks
- Caring for wild animals (protection, feeding, treatment, love, preserving habitat, provision of security by game wardens/rangers)

### Animals in different vegetation zones (from PDF page 329)
- Animals in Equatorial forests
- Animals in Savannah
- Animals in Temperate grasslands

### Population and vegetation (from PDF page 330)
- Population distribution in relation to vegetation: Equatorial, Desert, Savannah, Mediterranean, Mountain
- Reasons for differences in population distribution
- Effects of population on vegetation: big population vs small population

## 7. Design decisions for the modular conversion

- The nine NCDC sub-topics are grouped into five v3 subtopics so the directory is not overwhelming.
- Vegetation types are split into forest vegetation and grassland/shrub vegetation to keep each module focused.
- Game parks and animals are combined because the NCDC links them closely.
- Population-related sub-topics are kept together in two modules: population distribution and effects of population on vegetation.
- Every animal and vegetation example is tied to the NCDC source or standard African geography; no invented species or zones.

## 8. Files affected

- `app/lib/social-topics.ts` — `id: "vegetation-of-africa"`
- `app/components/TopicTabs.tsx` — modular renderer
- `app/app/globals.css` — modular styles
- This document

---

**Extraction date:** 2026-07-03  
**Extractor:** Arena.ai Agent Mode  
**Source checked:** NCDC P7 Set One PDF pages 327–331 and `content/curriculum/p7-social-studies.json`.
