# V4 P4/P5 Social Studies Migration — 2026-07-12

## Purpose

Record the Social Studies migration batch in the NCDC-native v4 content architecture.

Target:

- P4 Social Studies
- P5 Social Studies

Social Studies needs a v4 structure that supports definitions, key ideas, examples/evidence, facts to remember, maps/images, community practice and evaluation.

---

## Structure implemented

New shared helper:

- `app/lib/v4-social-helpers.ts`

Purpose:

- Convert existing Social Studies topic/subtopic/module content into `upper-primary-v4` lessons.
- Preserve existing map/history/civic content while changing the student-facing render structure.
- Generate one v4 lesson per existing SST subtopic.
- Keep hand-built v4 lessons in future when added later.

The helper adds:

```ts
contentFormat: "upper-primary-v4"
upperPrimaryLessons: UpperPrimaryLesson[]
```

for every Social Studies topic passed through it.

---

## P4 Social Studies migration

Updated file:

- `app/lib/p4-social-topics.ts`

Implementation:

- Replaced direct export array with internal `P4_SOCIAL_TOPIC_DATA`.
- Added `P4_SOCIAL_TERMS` from `content/curriculum/p4-social-studies.json`.
- Export now wraps data with:

```ts
addUpperPrimarySocialV4(P4_SOCIAL_TOPIC_DATA, "P4", P4_SOCIAL_TERMS)
```

Coverage:

- 6 P4 Social Studies topics now render through upper-primary v4.

P4 Social Studies topics:

1. Location of Our District in Uganda
2. Physical Features in Our District
3. Vegetation in Our District
4. People in Our District
5. Our Leaders in the District
6. How to Meet People's Needs in Our District

---

## P5 Social Studies migration

Updated file:

- `app/lib/p5-social-topics.ts`

Implementation:

- Replaced direct export array with internal `P5_SOCIAL_TOPIC_DATA`.
- Added `P5_SOCIAL_TERMS` from `content/curriculum/p5-social-studies.json`.
- Export now wraps data with:

```ts
addUpperPrimarySocialV4(P5_SOCIAL_TOPIC_DATA, "P5", P5_SOCIAL_TERMS)
```

Coverage:

- 12 P5 Social Studies topics now render through upper-primary v4.

P5 Social Studies topics:

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

---

## Student-facing result

P4/P5 Social Studies topic pages now use the upper-primary v4 renderer:

```txt
Lesson selector
→ one lesson/module at a time
→ definition
→ key ideas / groups
→ examples and evidence
→ facts to remember
→ map/image where available
→ worked example where available
→ map / community practice
→ evaluation
```

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

This is a **structural migration**, not final manual deepening of every SST topic.

Recommended manual-deepening order:

1. P4 Location of Our District in Uganda
2. P4 Physical Features / Vegetation
3. P5 Location of Uganda on the Map of East Africa
4. P5 Physical Features in Uganda
5. P5 Government / Independence topics
6. P5 Population, Size and Distribution

Teacher review remains required before premium-final status.

---

## Shared SST helper enrichment update — same cycle

The shared Social Studies v4 helper was upgraded to make the structural migration stronger across all P4/P5 SST topics without hand-patching each topic.

Updated file:

- `app/lib/v4-social-helpers.ts`

Improvements:

- Adds a `Vocabulary` module with SST key words.
- Adds a `Read and talk` context module for each lesson.
- Uses clearer social-studies definitions for common terms such as district, map, compass, key, scale, physical feature, vegetation, climate, resource, culture, leader, government, independence, population, settlement and migration.
- Strengthens local example guidance:
  - P4 uses district/local examples.
  - P5 uses Uganda/East Africa examples.
- Strengthens map/community practice instructions.
- Keeps civic/cultural respect reminders visible.

Build verification:

```txt
cd app && npm install && npm run build
✓ Compiled successfully
✓ Generating static pages (356/356)
```

Note: `npm install` was needed because `node_modules` was missing in the sandbox.

---

## Priority manual deepening update — P4 SST complete and P5 priority topics complete

After enriching the shared SST helper, priority Social Studies topics were hand-deepened in v4.

### P4 Social Studies — complete at AI-builder v4 level

All 6 P4 Social Studies topics now have hand-built v4 lessons:

1. **Location of Our District in Uganda**
   - district definition,
   - map title/key/compass,
   - district/local map practice.

2. **Physical Features in Our District**
   - physical feature definition,
   - raised land, low land and water features,
   - uses and problems of features.

3. **Vegetation in Our District**
   - vegetation definition,
   - natural/planted/wetland vegetation,
   - uses and conservation.

4. **People in Our District**
   - people in a district definition,
   - ethnic groups, culture, customs and social services,
   - cooperation and respect.

5. **Our Leaders in the District**
   - leader definition,
   - family, school, local, religious and cultural leaders,
   - roles, qualities, rights and responsibilities.

6. **How to Meet People's Needs in Our District**
   - needs definition,
   - basic needs,
   - economic activities,
   - community services,
   - cooperation and problem solving.

### P5 Social Studies — priority topics hand-deepened

Priority P5 topics now have hand-built v4 lessons:

1. **Location of Uganda on the Map of East Africa**
   - landlocked definition,
   - region and neighbours,
   - compass directions,
   - map elements.

2. **Physical Features in Uganda**
   - physical feature definition,
   - mountains, lakes, rivers, rift valley, plains and plateaus,
   - importance and conservation.

3. **The Government of Uganda**
   - government definition,
   - executive, legislature and judiciary,
   - local government,
   - rights and responsibilities.

4. **Uganda as an Independent Nation**
   - independence definition,
   - national symbols,
   - citizenship,
   - benefits and challenges of independence.

5. **Population, Size and Distribution**
   - population definition,
   - population distribution,
   - settlement factors,
   - population problems and solutions.

Implementation:

- Added hand-built P4 v4 lesson arrays for all 6 P4 SST topics.
- Added hand-built P5 v4 lesson arrays for 5 priority P5 SST topics.
- Set `useOnlyV4Lessons: true` for those topics.

Updated files:

- `app/lib/p4-social-topics.ts`
- `app/lib/p5-social-topics.ts`

Build result:

```txt
cd app && npm run build
✓ Compiled successfully
✓ Generating static pages (356/356)
```

Current SST status:

- P4 Social Studies: complete at AI-builder v4 level across all 6 topics.
- P5 Social Studies: structurally migrated across all 12 topics; 5 priority topics hand-deepened.

Remaining P5 SST manual deepening:

- Climate of Uganda
- Vegetation in Uganda
- Natural Resources in Uganda
- The People of Pre-Colonial Uganda
- Foreign Influence in Uganda
- How Uganda Became a Nation
- The Road to Independence

---

## Final manual deepening update — P5 Social Studies v4 complete

The remaining P5 Social Studies topics have now been hand-deepened in upper-primary v4.

### Final P5 SST topics completed

1. **Climate of Uganda**
   - weather definition,
   - climate definition,
   - rainfall, temperature, sunshine, wind and humidity,
   - factors influencing climate,
   - effects of climate on people.

2. **Vegetation in Uganda**
   - vegetation definition,
   - forests, grasslands/savanna, wetlands and planted vegetation,
   - uses of vegetation,
   - vegetation conservation.

3. **Natural Resources in Uganda**
   - natural resource definition,
   - land/soil, water resources, vegetation/wildlife and minerals,
   - uses and conservation of resources.

4. **The People of Pre-Colonial Uganda**
   - pre-colonial Uganda definition,
   - ethnic groups,
   - migration and settlement,
   - pre-colonial societies,
   - culture and leadership.

5. **Foreign Influence in Uganda**
   - foreign influence definition,
   - traders, explorers, missionaries and colonial administrators,
   - balanced positive and negative effects.

6. **How Uganda Became a Nation**
   - nation definition,
   - communities before one country,
   - protectorate period,
   - administrative changes,
   - nationhood, symbols and unity.

7. **The Road to Independence**
   - nationalism definition,
   - political parties,
   - leaders,
   - events leading to independence,
   - independence date and meaning.

Implementation:

- Added `P5_CLIMATE_UGANDA_V4`.
- Added `P5_VEGETATION_UGANDA_V4`.
- Added `P5_NATURAL_RESOURCES_V4`.
- Added `P5_PRECOLONIAL_PEOPLE_V4`.
- Added `P5_FOREIGN_INFLUENCE_V4`.
- Added `P5_UGANDA_NATION_V4`.
- Added `P5_ROAD_INDEPENDENCE_V4`.
- Set `useOnlyV4Lessons: true` for these topics.

Updated file:

- `app/lib/p5-social-topics.ts`

Build result:

```txt
cd app && npm run build
✓ Compiled successfully
✓ Generating static pages (356/356)
```

Current P4/P5 SST status:

- P4 Social Studies: 6/6 topics structurally migrated and hand-deepened in v4.
- P5 Social Studies: 12/12 topics structurally migrated and hand-deepened in v4.
- P4/P5 Social Studies are complete at AI-builder v4 level.

Remaining review:

- Social Studies teacher review,
- history/civic balance review,
- local example review,
- real-phone review of maps/images.
