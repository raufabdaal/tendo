# NCDC Deep Extract — P7 Social Studies Topic 1: Location of Africa on the Map of the World

**Source:** `tmp/p7-set-one.pdf` (NCDC Primary Seven Curriculum Set One, 2012), pages 315–317.  
**Curriculum mapping:** `content/curriculum/p7-social-studies.json` → Theme 4: Living Together in Africa, Topic 1.  
**Periods:** 8.  
**Status:** Converted to Lesson Structure v3 modular format in `app/lib/social-topics.ts` (`id: "location-of-africa"`).

---

## 1. NCDC stated learning outcomes

The learner:

- appreciates Africa as a continent and its position on the world map.
- demonstrates the usage of lines of latitudes and longitudes to locate Africa and its member countries.

## 2. NCDC life skills, SST skills and values

| Category | Items |
|----------|-------|
| Life skills | Creative thinking, Effective communication |
| SST skills | Recording, Observation |
| Values | Cooperation, Appreciation, Love, Sharing |

## 3. NCDC content outline (exact sub-topics)

The NCDC lists five sub-topics under Topic 1:

1. Location and position of Africa using lines of latitudes and lines of longitudes.
2. World continents and their sizes.
3. Water bodies that surround Africa.
4. Regions that make up Africa.
5. Countries in each region and their capital cities.

## 4. NCDC competences to be assessed

The learner should be able to:

- locate the position of Africa on the world map using lines of latitudes and longitudes.
- identify the continents of the world and their sizes.
- name the water bodies that surround Africa.
- identify the regions that make up Africa.
- list the countries in each region and their capital cities.
- list islands which are part of Africa.
- identify compass directions of different oceans, seas and other continents from Africa.
- draw the map of Africa showing the regions, lines of latitudes and lines of longitudes.

## 5. Mapping NCDC content to v3 modules

| Sub-topic | Module ID | Module title | What it teaches (NCDC-aligned) |
|-----------|-----------|--------------|--------------------------------|
| 1. Location and position of Africa using lines of latitudes and longitudes | `what-is-latitude` | What is latitude? | Definition of latitude; parallels; Equator as 0°; northern/southern hemisphere; how latitude is written. |
| 1. Location and position of Africa using lines of latitudes and longitudes | `what-is-longitude` | What is longitude? | Definition of longitude; meridians; Prime Meridian as 0°; eastern/western hemisphere; how longitude is written. |
| 1. Location and position of Africa using lines of latitudes and longitudes | `major-lines-cross-africa` | Major lines that cross Africa | Equator, Prime Meridian, Tropic of Cancer and Tropic of Capricorn crossing Africa; Africa as a tropical continent. |
| 1. Location and position of Africa using lines of latitudes and longitudes | `how-to-locate-a-place` | How to locate a place | Using latitude/longitude and compass directions together; locating Uganda. |
| 2. World continents and their sizes | `seven-continents` | The seven continents | Names of the seven continents; Africa as one of them; Uganda in Africa. |
| 2. World continents and their sizes | `continents-by-size` | Continents by size | Order by size: Asia, Africa, North America, South America, Antarctica, Europe, Australia. |
| 2. World continents and their sizes | `africa-place-among-continents` | Africa's place among continents | Africa is second largest; shape; position; connection to Asia via Isthmus of Suez. |
| 3. Water bodies that surround Africa | `four-main-oceans` | The four main oceans | Pacific, Atlantic, Indian, Arctic; which border Africa. |
| 3. Water bodies that surround Africa | `seas-oceans-near-africa` | Seas and oceans near Africa | Atlantic, Indian, Mediterranean Sea, Red Sea; difference between sea and ocean. |
| 3. Water bodies that surround Africa | `directions-water-bodies` | Directions of continents and water bodies from Africa | Compass-direction relationships: Europe north, Asia north-east, Atlantic west, Indian east. |
| 4. Regions that make up Africa | `six-regions` | The six regions of Africa | West, East, North, Central, Southern, Horn; example countries per region. |
| 4. Regions that make up Africa | `where-each-region-is` | Where each region is found | Map positions of each region; Uganda in East Africa. |
| 4. Regions that make up Africa | `horn-of-africa` | The Horn of Africa | Definition, countries, shape, importance (Red Sea / Indian Ocean / shipping). |
| 5. Countries in each region and their capital cities | `east-africa-countries-capitals` | Countries and capitals of East Africa | Uganda, Kenya, Tanzania, Rwanda, Burundi, South Sudan and capitals. |
| 5. Countries in each region and their capital cities | `other-regions-countries-capitals` | Countries and capitals of other regions | Sample countries/capitals for West, North, Central, Southern Africa and the Horn. |
| 5. Countries in each region and their capital cities | `islands-africa` | Islands which are part of Africa | Madagascar, Mauritius, Seychelles, Cape Verde, Canary Islands, São Tomé and Príncipe; definition of an island. |

## 6. Exact NCDC factual list used

### Continents (size order)
Asia, Africa, North America, South America, Antarctica, Europe, Australia.

### Oceans
Pacific, Atlantic, Indian, Arctic.

### Seas
Mediterranean Sea, Red Sea.

### Regions of Africa
West Africa, East Africa, Northern Africa (used as North Africa in the app), Central Africa, Southern Africa, Horn of Africa.

### Assessment competences reproduced exactly from PDF page 317

- draws the map of Africa showing the regions, lines of latitudes and lines of longitudes.
- names the countries and their capital cities.
- names Islands which are part of Africa.
- identifies compass directions of different oceans, seas and other continents from Africa.

## 7. Design decisions for the modular conversion

- Each NCDC sub-topic became one v3 subtopic.
- Each module covers **one atomic idea** so a learner can finish it in a short session.
- No invented countries, capitals or regions. Every country/capital pair is verified against standard reference.
- Visuals are described as **instructional diagrams/maps** rather than decorative images, matching the restructuring strategy.
- The topic-level v2 `note.study` was removed because the modular `subtopics` array is now the single source of truth.

## 8. Files affected

- `app/lib/social-topics.ts` — `id: "location-of-africa"`
- `app/components/TopicTabs.tsx` — modular renderer
- `app/app/globals.css` — modular styles
- This document

---

**Extraction date:** 2026-07-03  
**Extractor:** Arena.ai Agent Mode  
**Source checked:** NCDC P7 Set One PDF pages 315–317 and `content/curriculum/p7-social-studies.json`.
