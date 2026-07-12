# V4 P4/P5 Science Migration — 2026-07-12

## Purpose

Record the first post-P3 class migration batch in full migration mode.

Target:

- P4 Integrated Science
- P5 Integrated Science

Reason:

- P4/P5 Science had already been flagged by founder review as needing better lesson structure, especially topics like plants and poultry.
- Science topics need definitions, classifications, examples, characteristics/uses, diagrams and evaluation — not meta modules.

---

## Structure implemented

New shared helper:

- `app/lib/v4-science-helpers.ts`

Purpose:

- Convert existing Science topic/subtopic/module content into `upper-primary-v4` lessons.
- Preserve existing content while changing the student-facing render structure.
- Generate one v4 lesson per existing science subtopic.
- Keep any hand-built v4 lessons, such as P5 Poultry Breeds, and add generated lessons after them.

The helper adds:

```ts
contentFormat: "upper-primary-v4"
upperPrimaryLessons: UpperPrimaryLesson[]
```

for every topic passed through it.

---

## P4 Science migration

Updated file:

- `app/lib/p4-science-topics.ts`

Implementation:

- Replaced direct export array with internal `P4_SCIENCE_TOPIC_DATA`.
- Added `P4_SCIENCE_TERMS` from `content/curriculum/p4-science.json`.
- Export now wraps data with:

```ts
addUpperPrimaryScienceV4(P4_SCIENCE_TOPIC_DATA, "P4", P4_SCIENCE_TERMS)
```

Coverage:

- 12 P4 Science topics now render through upper-primary v4.

P4 Science topics:

1. Plant Life
2. Growing Crops
3. Animal Life
4. Weather Changes Around Us
5. Personal Hygiene
6. Sanitation
7. Communicable Intestinal Diseases and Worm Infestation
8. Vectors and Diseases
9. Accidents, Poisoning and First Aid
10. Our Food
11. Human Body Organs
12. The Teeth

---

## P5 Science migration

Updated file:

- `app/lib/p5-science-topics.ts`

Implementation:

- Replaced direct export array with internal `P5_SCIENCE_TOPIC_DATA`.
- Added `P5_SCIENCE_TERMS` from `content/curriculum/p5-science.json`.
- Export now wraps data with:

```ts
addUpperPrimaryScienceV4(P5_SCIENCE_TOPIC_DATA, "P5", P5_SCIENCE_TERMS)
```

Coverage:

- 9 P5 Science topics now render through upper-primary v4.
- Existing hand-built P5 Poultry Breeds v4 lesson is preserved and combined with generated v4 lessons from existing subtopics.

P5 Science topics:

1. Keeping Poultry and Bees
2. Measurement
3. Immunisation
4. The Digestive System
5. Components of the Environment: Soil
6. Heat Energy
7. Occupations in Our Community: Crop Growing
8. Bacteria and Fungi
9. Types of Changes: Biological, Physical and Chemical Changes

---

## Student-facing result

P4/P5 Science topic pages now use the upper-primary v4 renderer:

```txt
Lesson selector
→ one module/lesson at a time
→ definition
→ types / parts / key ideas
→ examples
→ characteristics / facts
→ diagram if available
→ worked example if available
→ evaluation
```

This is the intended chalkboard-note style for P4–P7.

---

## Build verification

Command:

```bash
cd app && npm run build
```

Result:

```txt
✓ Compiled successfully
✓ Generating static pages (356/356)
```

---

## Remaining work

This is a **subject-wide structural migration**, not final manual deepening of every Science topic.

Still needed:

1. Hand-deepen P4 Plant Life into a strong model topic.
2. Continue deepening P4 Science topic-by-topic.
3. Continue deepening P5 Science topic-by-topic beyond the existing Poultry Breeds pilot.
4. Review diagrams/images on actual mobile devices.
5. Teacher review before premium-final status.

Recommended next deepening order:

1. P4 Science — Plant Life
2. P4 Science — Human Body Organs / Teeth
3. P5 Science — Digestive System
4. P5 Science — Soil
5. P5 Science — Heat Energy

---

## Manual deepening update — P4 Plant Life complete

P4 Science Plant Life has now been hand-deepened as the first upper-primary Science v4 model topic.

Route:

```txt
/science/p4/p4-plant-life
```

Implementation:

- Added `P4_PLANT_LIFE_V4` in `app/lib/p4-science-topics.ts`.
- Set `useOnlyV4Lessons: true` for `p4-plant-life` so the hand-built v4 lessons override the generated structural lessons.
- Added `useOnlyV4Lessons?: boolean` to the shared `Topic` type.
- Updated `app/lib/v4-science-helpers.ts` to respect `useOnlyV4Lessons`.

Hand-deepened v4 lessons:

1. **What are plants?**
   - plant definition
   - flowering and non-flowering plants
   - food plants and useful non-food plants
   - characteristics of plants
   - examples around Uganda

2. **Parts of a Flowering Plant**
   - flowering plant definition
   - roots, stem, leaves, flowers, fruits and seeds
   - function of each part
   - labelled diagram
   - worked example about root functions

3. **Flowers, Fruits and Seeds**
   - reproduction in flowering plants
   - flower, pollination, fertilisation, fruit and seed
   - examples of fruits and seeds
   - evaluation

4. **Germination and Plant Needs**
   - germination definition
   - water, air, warmth, sunlight and good soil
   - stages of germination
   - worked example about a seed in dry soil

5. **Uses and Care of Plants**
   - care for plants definition
   - uses of plants
   - ways of caring for plants
   - plant care diagram
   - evaluation

Build result:

```txt
cd app && npm run build
✓ Compiled successfully
✓ Generating static pages (356/356)
```

Next recommended upper-primary Science manual deepening:

1. P4 Science — Growing Crops
2. P4 Science — Human Body Organs / Teeth
3. P5 Science — Digestive System
4. P5 Science — Soil
5. P5 Science — Heat Energy

---

## Manual deepening update — P4 Growing Crops, Human Body Organs and Teeth complete

Three more P4 Science topics have been hand-deepened in upper-primary v4.

### P4 Growing Crops

Route:

```txt
/science/p4/p4-growing-crops
```

Hand-deepened lessons:

1. What is crop growing?
2. Soil Preparation and Planting
3. Crop Care
4. Harvesting and Storage

Key content:

- crop growing definition,
- food crops, cash crops and vegetable crops,
- land clearing, digging/tilling, seedbeds and planting,
- watering, weeding, mulching and pest/disease control,
- harvesting mature crops,
- drying and safe storage.

### P4 Human Body Organs

Route:

```txt
/science/p4/p4-human-body-organs
```

Hand-deepened lessons:

1. Major Body Organs
2. Care for Body Organs

Key content:

- organ definition,
- brain, heart, lungs, stomach and kidneys,
- function of each organ,
- healthy habits for organ care,
- smoke/poison/unknown medicine safety.

### P4 The Teeth

Route:

```txt
/science/p4/p4-teeth
```

Hand-deepened lessons:

1. Types and Functions of Teeth
2. Tooth Care and Tooth Decay

Key content:

- teeth definition,
- incisors, canines, premolars and molars,
- function of each tooth type,
- tooth decay definition,
- tooth care and prevention.

Implementation:

- Added `P4_GROWING_CROPS_V4`.
- Added `P4_HUMAN_BODY_ORGANS_V4`.
- Added `P4_TEETH_V4`.
- Set `useOnlyV4Lessons: true` for these topics.

Updated file:

- `app/lib/p4-science-topics.ts`

Build result:

```txt
cd app && npm run build
✓ Compiled successfully
✓ Generating static pages (356/356)
```

Current hand-deepened P4 Science topics:

- Plant Life
- Growing Crops
- Human Body Organs
- The Teeth

Recommended next P4/P5 Science deepening:

1. P4 Animal Life
2. P4 Weather Changes
3. P4 Personal Hygiene / Sanitation
4. P5 Digestive System
5. P5 Soil

---

## Manual deepening update — P4 Animal Life, Weather, Personal Hygiene and Sanitation complete

Four more P4 Science topics have been hand-deepened in upper-primary v4.

### P4 Animal Life

Route:

```txt
/science/p4/p4-animal-life
```

Hand-deepened lessons:

1. Common Animals
2. Animal Needs and Care
3. Uses of Animals and Safety

Key content:

- animal definition,
- domestic and wild animals,
- poultry birds and small animals,
- animal needs: food, water, shelter, health care,
- uses of animals,
- animal safety and kindness.

### P4 Weather Changes Around Us

Route:

```txt
/science/p4/p4-weather-changes
```

Hand-deepened lessons:

1. Weather Elements
2. Weather Symbols and Weather Charts
3. Effects of Weather

Key content:

- weather definition,
- sunshine, rainfall, wind, cloud cover and temperature,
- weather symbols and charts,
- good and bad effects of weather,
- weather safety.

### P4 Personal Hygiene

Route:

```txt
/science/p4/p4-personal-hygiene
```

Hand-deepened lessons:

1. Body and Clothes Cleanliness
2. Good Hygiene Habits and Disease Prevention

Key content:

- personal hygiene definition,
- body cleanliness,
- clothes cleanliness,
- personal item cleanliness,
- when to wash hands,
- how hygiene prevents disease.

### P4 Sanitation

Route:

```txt
/science/p4/p4-sanitation
```

Hand-deepened lessons:

1. Clean Home and School Environment
2. Waste, Latrine Use and Clean Water

Key content:

- sanitation definition,
- clean compounds,
- safe waste disposal,
- clean water,
- latrine use,
- sanitation and disease prevention.

Implementation:

- Added `P4_ANIMAL_LIFE_V4`.
- Added `P4_WEATHER_CHANGES_V4`.
- Added `P4_PERSONAL_HYGIENE_V4`.
- Added `P4_SANITATION_V4`.
- Set `useOnlyV4Lessons: true` for these topics.

Updated file:

- `app/lib/p4-science-topics.ts`

Build result:

```txt
cd app && npm run build
✓ Compiled successfully
✓ Generating static pages (356/356)
```

Current hand-deepened P4 Science topics:

- Plant Life
- Growing Crops
- Animal Life
- Weather Changes Around Us
- Personal Hygiene
- Sanitation
- Human Body Organs
- The Teeth

Remaining P4 Science manual deepening:

- Communicable Intestinal Diseases and Worm Infestation
- Vectors and Diseases
- Accidents, Poisoning and First Aid
- Our Food

---

## Manual deepening update — P4 Science v4 complete

The remaining P4 Science topics have now been hand-deepened in upper-primary v4.

### Completed final P4 Science topics

1. **Communicable Intestinal Diseases and Worm Infestation**
   - communicable disease definition
   - intestinal disease definition
   - diarrhoea, dysentery, typhoid and cholera
   - worm infestation definition
   - roundworms, hookworms and tapeworms
   - spread and prevention

2. **Vectors and Diseases**
   - vector definition
   - mosquito, housefly, tsetse fly, rat, louse, flea and bed-bug
   - vector-borne diseases
   - vector control and protection

3. **Accidents, Poisoning and First Aid**
   - accident definition
   - first aid definition
   - cuts, burns, falls and road accidents
   - poison definition
   - medicines, household chemicals and farm chemicals
   - poisoning safety actions

4. **Our Food**
   - food definition
   - balanced diet definition
   - energy-giving, body-building and protective foods
   - food hygiene
   - uses of food
   - dangers of poor food hygiene

Implementation:

- Added `P4_INTESTINAL_DISEASES_WORMS_V4`.
- Added `P4_VECTORS_DISEASES_V4`.
- Added `P4_ACCIDENTS_FIRST_AID_V4`.
- Added `P4_OUR_FOOD_V4`.
- Set `useOnlyV4Lessons: true` for these topics.

Updated file:

- `app/lib/p4-science-topics.ts`

Build result:

```txt
cd app && npm run build
✓ Compiled successfully
✓ Generating static pages (356/356)
```

P4 Science status:

- 12/12 topics structurally migrated to v4.
- 12/12 topics now hand-deepened in v4.
- P4 Science is complete at AI-builder v4 level.

Remaining review:

- human/teacher science review,
- mobile real-device review,
- health/safety wording review for disease, poisoning and first aid topics.

Next recommended migration:

- P5 Science manual deepening, starting with Digestive System, Soil and Heat Energy.

---

## Manual deepening update — P5 Digestive System, Soil and Heat Energy complete

Three P5 Science topics have now been hand-deepened in upper-primary v4.

### P5 Digestive System

Route:

```txt
/science/p5/p5-digestive-system
```

Hand-deepened lessons:

1. Meaning and Food Pathway
2. Teeth, Saliva and Digestion
3. Care of the Digestive System

Key content:

- digestion definition,
- mouth, oesophagus, stomach, small intestine, large intestine, rectum and anus,
- mechanical and chemical digestion,
- role of teeth, tongue and saliva,
- balanced diet, food hygiene and safe water.

### P5 Soil

Route:

```txt
/science/p5/p5-components-environment-soil
```

Hand-deepened lessons:

1. Components of Soil
2. Types of Soil and Properties
3. Soil Erosion and Conservation

Key content:

- soil definition,
- mineral particles, humus, air, water and living organisms,
- sandy, clay and loam soils,
- texture, drainage, water retention and fertility,
- soil erosion and conservation.

### P5 Heat Energy

Route:

```txt
/science/p5/p5-heat-energy
```

Hand-deepened lessons:

1. Sources and Uses of Heat
2. Effects and Transfer of Heat
3. Expansion, Contraction and Safety

Key content:

- heat definition,
- sun, fire/fuels, electricity and friction,
- uses of heat,
- conduction, convection and radiation,
- expansion and contraction,
- heat safety.

Implementation:

- Added `P5_DIGESTIVE_SYSTEM_V4`.
- Added `P5_SOIL_V4`.
- Added `P5_HEAT_ENERGY_V4`.
- Set `useOnlyV4Lessons: true` for these topics.

Updated file:

- `app/lib/p5-science-topics.ts`

Build result:

```txt
cd app && npm run build
✓ Compiled successfully
✓ Generating static pages (356/356)
```

Current hand-deepened P5 Science topics:

- Keeping Poultry and Bees: partial hand-built v4 model for Breeds of Poultry, with generated v4 support for the rest.
- Digestive System
- Soil
- Heat Energy

Remaining P5 Science manual deepening:

- Measurement
- Immunisation
- Crop Growing
- Bacteria and Fungi
- Types of Changes
- Finish full hand-deepening of Keeping Poultry and Bees beyond Breeds of Poultry if needed.

---

## Manual deepening update — P5 Science v4 complete

The remaining P5 Science topics have now been hand-deepened in upper-primary v4.

### Completed final P5 Science topics

1. **Keeping Poultry and Bees**
   - completed beyond the original Breeds of Poultry model,
   - poultry management, feeding, housing and disease control,
   - bee keeping, bee colony members, bee products and pollination.

2. **Measurement**
   - measurement definition,
   - measuring length, mass, capacity and time,
   - instruments and standard units,
   - accurate scale reading,
   - daily uses of measurement.

3. **Immunisation**
   - immunisation definition,
   - vaccines,
   - childhood immunisable diseases,
   - health cards,
   - immunisation schedules,
   - safe decisions and health-worker guidance.

4. **Crop Growing**
   - crop growing definition,
   - common crops and farm tools,
   - land preparation,
   - planting,
   - crop care,
   - harvesting and storage.

5. **Bacteria and Fungi**
   - bacteria definition,
   - fungi definition,
   - useful and harmful bacteria,
   - useful and harmful fungi,
   - hygiene and prevention.

6. **Types of Changes**
   - change definition,
   - biological, physical and chemical changes,
   - reversible and irreversible changes,
   - examples in daily life.

Implementation:

- Added `P5_POULTRY_V4`.
- Added `P5_MEASUREMENT_V4`.
- Added `P5_IMMUNISATION_V4`.
- Added `P5_CROP_GROWING_V4`.
- Added `P5_BACTERIA_FUNGI_V4`.
- Added `P5_TYPES_CHANGES_V4`.
- Set `useOnlyV4Lessons: true` for final hand-built P5 Science topics.

Updated file:

- `app/lib/p5-science-topics.ts`

Build result:

```txt
cd app && npm run build
✓ Compiled successfully
✓ Generating static pages (356/356)
```

P5 Science status:

- 9/9 topics structurally migrated to v4.
- 9/9 topics now hand-deepened in v4.
- P5 Science is complete at AI-builder v4 level.

Remaining review:

- human/teacher science review,
- official-copy check for P5 source map,
- real-phone review of images and module stepper.

Current Science v4 status:

- P4 Integrated Science: complete at AI-builder v4 level.
- P5 Integrated Science: complete at AI-builder v4 level.

Recommended next migration:

- P4/P5 Mathematics or P4/P5 English, depending on founder priority.
