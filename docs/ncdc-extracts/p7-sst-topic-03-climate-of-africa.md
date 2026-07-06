# NCDC Deep Extract — P7 Social Studies Topic 3: Climate of Africa

**Source:** `tmp/p7-set-one.pdf` (NCDC Primary Seven Curriculum Set One, 2012), pages 322–326.  
**Curriculum mapping:** `content/curriculum/p7-social-studies.json` → Theme: Living Together in Africa, Topic 3.  
**Periods:** 22.  
**Status:** Converted to Lesson Structure v3 modular format in `app/lib/social-topics.ts` (`id: "climate-of-africa"`).

---

## 1. NCDC stated learning outcome

The learner appreciates the importance of climate and how it determines and supports humans, animals and plant life.

## 2. NCDC life skills, SST skills and values

| Category | Items |
|----------|-------|
| Life skills | Critical thinking, Effective communication, Problem-solving |
| SST skills | Observing, Drawing, Inquiring |
| Values | Appreciation, Sharing, Cooperation, Caring |

## 3. NCDC content outline (exact sub-topics)

1. Climatic regions of Africa
2. Characteristics of different climatic regions
3. Factors that influence climate of Africa
4. Influence of climate on human activities
5. Influence of human activities on climate

## 4. NCDC competences to be assessed

The learner should be able to:

- identify the climatic regions of Africa and their characteristics.
- identify factors that influence the climate of Africa.
- explain how climate influences human activities.
- describe how human activities affect climate.
- name the hot deserts of Africa.
- identify the seasons experienced in the Mediterranean climate in Africa.
- state the problems experienced in hot deserts in Africa.
- name the countries experiencing different types of climate in Africa.

## 5. Mapping NCDC content to v3 modules

| Sub-topic | Module ID | Module title | What it teaches (NCDC-aligned) |
|-----------|-----------|--------------|--------------------------------|
| Climatic regions of Africa | `weather-and-climate` | Weather and climate | Difference between weather and climate; elements of weather/climate: wind, rainfall, sunshine, temperature, humidity. |
| Climatic regions of Africa | `equatorial-tropical` | Equatorial and tropical climates | Hot and wet all year; wet and dry seasons; location in Africa. |
| Climatic regions of Africa | `desert-mediterranean` | Desert and Mediterranean climates | Hot dry deserts; Mediterranean hot dry summers and cool wet winters. |
| Climatic regions of Africa | `temperate-mountain` | Temperate and mountain climates | Temperate climate in parts of South Africa; mountain climate with temperature change by altitude. |
| Characteristics of different climatic regions | `temperature-rainfall` | Temperature and rainfall patterns | How temperature and rainfall define each climate; examples of hot, cool, wet and dry places. |
| Characteristics of different climatic regions | `where-climates-are-found` | Where each climate is found | Countries and regions for each climate type in Africa. |
| Factors that influence climate of Africa | `latitude-altitude-distance` | Latitude, altitude and distance from the sea | Why the Equator is hotter, why highlands are cooler, why coastal areas are more moderate. |
| Factors that influence climate of Africa | `winds-relief-vegetation` | Winds, relief and vegetation | How winds carry rain, how mountains create rain shadows, how vegetation affects local climate. |
| Factors that influence climate of Africa | `human-influence-climate` | Human activities that influence climate | Deforestation, bush burning, swamp drainage, overgrazing, pollution. |
| Influence of climate on human activities | `hot-deserts` | Life in hot deserts | Irrigation, mining, nomadism, tourism; problems such as water scarcity. |
| Influence of climate on human activities | `mediterranean-temperate-mountain` | Mediterranean, temperate and mountain areas | Trading, industry, farming, tourism, lumbering, mining in cooler/wetter highlands. |
| Influence of climate on human activities | `equatorial-tropical-activities` | Equatorial and tropical areas | Lumbering, agriculture, hunting, tourism, mining, trading, transport, livestock farming. |
| Influence of human activities on climate | `protecting-climate` | Protecting the climate | Tree planting, wetland protection, soil conservation, controlled bush burning. |

## 6. Exact NCDC factual lists used

### Climatic regions (from PDF page 323)
- Mediterranean
- Temperate
- Desert (hot & dry)
- Tropical
- Equatorial
- Mountane (mountain)

### Elements of weather/climate (from PDF page 322)
- Wind
- Rainfall
- Sunshine
- Temperature
- Humidity

### Factors that influence climate (from PDF page 323)
- Nearness to water bodies
- Winds
- Land mass
- Altitude/relief
- Human activities
- Vegetation

### Human activities in different climates (from PDF page 324)
- Hot deserts: irrigation, mining, nomadism, tourism
- Mediterranean and temperate climates: trading, industry, farming, tourism
- Equatorial and tropical: lumbering, agriculture, hunting, tourism, mining, trading, transport, livestock farming
- Mountain: farming, tourism, lumbering, mining

### Hot deserts (assessment competence, PDF page 326)
Sahara and Namib are the major hot deserts of Africa.

## 7. Design decisions for the modular conversion

- The NCDC devotes 22 periods to this topic, so it is split into more modules than Physical Features.
- “Climatic regions” and “Characteristics” are kept as separate subtopics because the NCDC treats them as distinct content blocks and assessment targets.
- Each climate type is described with temperature, rainfall and a clear African location, avoiding general textbook descriptions that are not tied to Africa.
- Human influence is split into “harmful activities” and “protective activities” so learners see both sides clearly.
- No invented climate regions or countries; every example is tied to the NCDC source or standard African geography.

## 8. Files affected

- `app/lib/social-topics.ts` — `id: "climate-of-africa"`
- `app/components/TopicTabs.tsx` — modular renderer
- `app/app/globals.css` — modular styles
- This document

---

**Extraction date:** 2026-07-03  
**Extractor:** Arena.ai Agent Mode  
**Source checked:** NCDC P7 Set One PDF pages 322–326 and `content/curriculum/p7-social-studies.json`.
