# P4/P5 Visuals and Depth Pass — 2026-07-09

## Purpose

This pass responds to the product-quality concern that coverage alone is not enough. A topic can exist but still feel under-built. The goal is to make P4/P5 feel fuller before moving to P3.

Workflow being followed exactly:

1. Add P4/P5 visual assets and diagrams for Science/SST/Math.
2. Deepen P4/P5 topics that still feel thin.
3. Start P3 only after this pass is intentionally completed.

---

## Step 1 — Visual assets added and attached

Local SVG diagrams were created under:

- `app/public/images/math/`
- `app/public/images/science/`
- `app/public/images/social-studies/`

These are local app assets, not external images, so they work in the app preview/deployment without network dependencies.

Attached image counts in topic files:

- `p4-math`: 7 image attachments
- `p4-science`: 7 image attachments
- `p4-social`: 4 image attachments
- `p5-math`: 11 image attachments
- `p5-science`: 9 image attachments
- `p5-social`: 5 image attachments

Examples of diagrams added:

### Math

- P4 place-value chart
- Fraction strips
- 2-D geometry/perimeter/area diagram
- 3-D solids faces/edges/vertices diagram
- Time/duration diagram
- Measurement units diagram
- P5 decimal place-value diagram
- P5 data/bar/line graph diagram

### Science

- Flowering plant parts
- Crop-growing cycle
- Weather symbols chart
- Personal hygiene handwashing
- Teeth types and functions
- Vectors and disease control
- Poultry and bees
- Digestive system
- Immunisation card
- Soil layers
- Heat transfer
- Bacteria/fungi
- Types of changes

### Social Studies

- P4 district map/compass
- P4 physical features in a district
- P4 district leaders/services
- P5 Uganda in East Africa map
- P5 Uganda physical features
- P5 climate and vegetation
- P5 road to independence timeline
- P5 government arms
- P5 population distribution

---

## Step 2 — Depth improvements started

### P4 Science: Plant Life / Flowering Plants

The Plant Life topic was too thin for a major flowering-plants topic. It was expanded beyond the original two modules by adding:

- Flowers, fruits and seeds
- Seed germination and plant needs

P4 Plant Life now better covers:

- plant parts and their functions,
- flowers developing into fruits/seeds,
- seed germination,
- water/air/warmth/light needs,
- care for plants.

### P5 Mathematics

Many P5 Mathematics topics had only one module. Added practical/application/checking modules to thin topics, including:

- operation checking,
- pattern word problems,
- decimals in money/measurement,
- geometry construction care,
- data stories,
- timetable planning,
- money checking,
- sensible measurement units,
- integers in real life,
- equation checking.

Build after these changes:

```txt
✓ Compiled successfully
✓ Generating static pages (324/324)
```

---


## Update — additional P4 visual gap fill

After the first visual attachment pass, P4 still had several no-image topics. Added and attached more diagrams for:

- P4 Sets and common members
- P4 Four operations
- P4 Patterns and sequences
- P4 Money/profit/loss
- P4 Equations without letters
- P4 Animal care
- P4 Sanitation
- P4 Balanced diet
- P4 Body organs
- P4 Disease/worm prevention
- P4 First aid and poisoning safety
- P4 Vegetation conservation
- P4 People/culture/services

Updated attachment counts:

- `p4-math`: 12 image attachments
- `p4-science`: 13 image attachments
- `p4-social`: 6 image attachments
- `p5-math`: 11 image attachments
- `p5-science`: 9 image attachments
- `p5-social`: 12 image attachments

Build after additional visual attachments and depth changes:

```txt
✓ Compiled successfully
✓ Generating static pages (324/324)
```

---


## Update — P5 Science and Social Studies visual coverage completed

A second audit showed some P5 Science and P5 Social Studies seed-generated modules had not received images because their module IDs did not match the first attachment pass. These were corrected.

Final current image attachment counts:

- `p4-math`: 12 image attachments
- `p4-science`: 13 image attachments
- `p4-social`: 6 image attachments
- `p5-math`: 11 image attachments
- `p5-science`: 21 image attachments
- `p5-social`: 25 image attachments

P5 Science now has image support across all 9 topics. P5 Social Studies now has image support across all 12 topics.

Build after this correction:

```txt
✓ Compiled successfully
✓ Generating static pages (324/324)
```

---


## Update — P5 Science full depth rebuild

P5 Integrated Science was rebuilt into a fuller beta subject. Each of the 9 topics now has 3 subtopics/modules with attached visuals.

Topics deepened:

1. Keeping Poultry and Bees
2. Measurement
3. Immunisation
4. The Digestive System
5. Components of the Environment: Soil
6. Heat Energy
7. Crop Growing
8. Bacteria and Fungi
9. Types of Changes

Each topic now has:

- 3 modules
- 3 image attachments
- practical daily-life applications
- safer health/science wording where relevant
- balanced answer distribution

Build after P5 Science rebuild:

```txt
✓ Compiled successfully
✓ Generating static pages (324/324)
```

---


## Update — P5 Social Studies full depth rebuild

P5 Social Studies was rebuilt into a fuller beta subject. Each of the 12 topics now has 3 subtopics/modules with attached visuals.

Topics deepened:

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

Each topic now has:

- 3 modules
- 3 image attachments
- stronger map/history/civic reasoning
- balanced answer distribution

Build after P5 Social Studies rebuild:

```txt
✓ Compiled successfully
✓ Generating static pages (324/324)
```

---


## Update — P5 Religious Education depth and visuals

P5 Religious Education was upgraded from a lighter two-part structure to a fuller three-part structure for every topic.

Added:

- CRE/IRE local SVG visual supports under `app/public/images/re/`
- visual attachment logic in `app/lib/p5-re-topics.ts`
- third subtopic for every P5 RE topic: **Reasoning and exam practice**

The third module trains learners to:

- explain the value behind the religious teaching,
- connect the topic to Bible/Christian values or Qur'an/Hadith/Islamic values,
- apply the topic at home, school or in the community,
- use respectful wording about God, Jesus, the Church, Allah, the Qur'an, prayer and Prophet Muhammad (PBUH).

Build after P5 RE depth/visual upgrade:

```txt
✓ Compiled successfully
✓ Generating static pages (324/324)
```

---


## Update — English and RE depth/visual upgrade

The final weak areas were P4 English, P4 Religious Education, P5 English and P5 Religious Education. These had little/no visual support and lighter two-module structures.

### P4 English

Upgraded to:

- 8 topics
- 24 modules total
- 24 image attachments
- third module per topic: writing and speaking practice

### P4 Religious Education

Upgraded to:

- 25 topics
- 75 modules total
- 75 image attachments
- third module per topic: reasoning and respectful application

### P5 English

Upgraded to:

- 8 topics
- 24 modules total
- 24 image attachments
- third module per topic: writing and speaking practice

### P5 Religious Education

Upgraded with:

- CRE/IRE visual support assets under `app/public/images/re/`
- third subtopic per topic: reasoning and exam practice
- respectful wording reminders for CRE and IRE
- Prophet Muhammad (PBUH) wording retained where applicable

Build after English/RE upgrade:

```txt
✓ Compiled successfully
✓ Generating static pages (324/324)
```

---

## Still remaining in this visuals/depth pass

1. Run one final P4/P5 module-count and image-count audit.
2. If no major thin topics remain, intentionally close this visuals/depth pass.
3. Only after closure should P3 NCDC research begin.

## Final audit — Step 2 closed at AI-builder level

Final module/image audit result: **PASS**.

Minimum standard checked:

- every P4/P5 topic has at least 2 modules,
- every P4/P5 topic has at least 1 visual/image attachment,
- rebuilt P5 Science and P5 Social Studies now have 3 modules and 3 visuals per topic,
- P4 English, P4 RE and P5 English now have 3 modules and 3 visuals per topic,
- P5 RE generates 3 modules per topic with visual support,
- P5 Math topics have at least 2 modules and at least 1 visual per topic.

Build verification after final audit:

```txt
✓ Compiled successfully
✓ Generating static pages (324/324)
```

Decision: **Step 1 and Step 2 are closed at AI-builder level.**

Remaining human-review work stays open, but it no longer blocks starting P3 NCDC research.

---

## Next step

Begin **Step 3: P3 NCDC research and curriculum mapping**.

P3 app structure was later documented as thematic-first, and the first P3 beta slice was built from the official P3 maps. Remaining P3 themes should continue from the P3 thematic map; subject-style P3 routes should still not be built without a documented bridge design.
