# Visual Roadmap & Image Milestones — Tendo Lesson Structure v3

*Created: 2026-07-05*

This document maps out every module and subtopic across P7 Integrated Science, Social Studies, Mathematics, and English that requires native image rendering (`imageUrl` and `imageCaption` in Lesson Structure v3).

To maintain build stability and avoid AI image generation rate limits or timeouts, images are produced and linked in structured **Milestone Batches of 5–6 images per session**.

---

## Completed Visual Assets (Baseline + Batch 1)

### Baseline Images (Completed in v0.9.0)
- `skeleton-basics` (Science: Muscular-Skeletal System) → `/images/science/human-skeleton.png`
- `four-excretory-organs` (Science: Excretory System) → `/images/science/urinary-system.png`
- `refraction-dispersion-rainbow` (Science: Light Energy) → `/images/science/light-refraction.png`
- `food-chains-webs` (Science: Interdependence) → `/images/science/food-chain.png`
- `six-regions` (SST: Location of Africa) → `/images/social-studies/map-of-africa.png`
- `caring-resources` (SST: Economic Developments) → `/images/social-studies/agroforestry-farm.png`

### Milestone Batch 1 (Executed 2026-07-05)
- `circuits-conductors` (Science: Electricity & Magnetism) → `/images/science/simple-electric-circuit.png`
- `skin-structure-layers` (Science: Excretory System) → `/images/science/human-skin-cross-section.png`
- `human-eye-structure-care` (Science: Light Energy) → `/images/science/human-eye-anatomy.png`
- `plateau-rift-coastal` (SST: Physical Features of Africa) → `/images/social-studies/great-rift-valley-formation.png`
- `factors-climate` (SST: Climate of Africa) → `/images/social-studies/relief-orographic-rainfall.png`

### Milestone Batch 2 (Executed 2026-07-05)
- `joint-types` (Science: Muscular-Skeletal System) → `/images/science/hinge-and-ball-joints.png`
- `kidney-structure-function` (Science: Excretory System) → `/images/science/kidney-nephron-diagram.png`
- `magnetic-materials` (Science: Electricity & Magnetism) → `/images/science/bar-magnet-field-lines.png`
- `electromagnet-setup` (Science: Electricity & Magnetism) → `/images/science/electromagnet-nail-coil.png`
- `pinhole-camera` (Science: Light Energy) → `/images/science/pinhole-camera-ray-diagram.png`

### Milestone Batch 3 (Executed 2026-07-05)
- `major-lines-cross-africa` (SST: Location of Africa) → `/images/social-studies/africa-latitudes-longitudes.png`
- `mountains-highlands-africa` (SST: Physical Features of Africa) → `/images/social-studies/block-and-fold-mountains.png`
- `equatorial-tropical` (SST: Climate of Africa) → `/images/social-studies/africa-climatic-zones.png`
- `forest-vegetation` (SST: Vegetation of Africa) → `/images/social-studies/africa-vegetation-belts.png`
- `rivers-of-africa` (SST: Physical Features / Drainage) → `/images/social-studies/major-rivers-lakes-map.png`

### Milestone Batch 4 (Executed 2026-07-05)
- `malaria-vector-control` (Science: Population and Health) → `/images/science/anopheles-mosquito-life-cycle.png`
- `school-health-clubs` (Science: Population and Health) → `/images/science/tippy-tap-handwashing.png`
- `lever-basics` (Science: Simple Machines) → `/images/science/three-classes-of-levers.png`
- `plant-animal-interdependence` (Science: Interdependence) → `/images/science/carbon-oxygen-cycle.png`
- `major-economic-resources-africa` (SST: Economic Developments) → `/images/social-studies/mining-and-agriculture-processing.png`

### Milestone Batch 5 (Executed 2026-07-05)
- `major-ethnic-groups` (SST: People of Africa) → `/images/social-studies/bantu-nilote-migration-map.png`
- `triangular-trade` (SST: Foreign Influence) → `/images/social-studies/triangular-trade-map.png`
- `line-segments-angles-core` (Math: Construction & Geometry) → `/images/math/angle-types-gallery.png`
- `bearing-scale-drawing-core` (Math: Construction & Geometry) → `/images/math/compass-bearings-diagram.png`
- `informal-format` (English: Letter Writing) → `/images/english/letter-layouts.png`

### Milestone Batch 6 (Executed 2026-07-05)
- `venn-diagrams-2-events-core` (Math: Sets) → `/images/math/venn-diagram-4-regions.png`
- `subsets-core` (Math: Sets) → `/images/math/subset-venn-diagram.png`
- `parallel-skew-lines-core` (Math: Construction & Geometry) → `/images/math/parallel-perpendicular-transversal.png`
- `simple-polygons-core` (Math: Construction & Geometry) → `/images/math/triangles-quadrilaterals-chart.png`
- `regular-polygons-core` (Math: Construction & Geometry) → `/images/math/regular-polygons-angles.png`

### Milestone Batch 7 (Executed 2026-07-05 — Roadmap 100% Complete)
- `writing-reading` (English: School Holidays / Composition) → `/images/english/composition-paragraph-structure.png`
- `exam-conduct` (English: Examinations) → `/images/english/ple-exam-instruction-sheet.png`
- `conductors-insulators` (Science: Electricity & Magnetism) → `/images/science/conductors-vs-insulators.png`
- `fossil-fuels` (Science: Energy Resources) → `/images/science/fossil-fuels-formation.png`
- `scramble-partition` (SST: Foreign Influence) → `/images/social-studies/partition-of-africa-1884.png`

---

## Roadmap Summary & Conclusion
All 7 planned visual milestone batches across P7 Integrated Science, Social Studies, Mathematics, and English have been executed, verified, and linked into Lesson Structure v3 modules. Total verified visual assets live in application: **41 primary school textbook illustrations**.

---

## Execution Protocol for Agents
When working on a milestone batch:
1. Generate the 5 images using `generate_image` with clean, educational primary school textbook prompts.
2. Verify visual output using `read_file` or visual inspection.
3. Link the image URLs and captions into `app/lib/science-topics.ts`, `app/lib/social-topics.ts`, `app/lib/topics.ts`, or `app/lib/english-topics.ts`.
4. Run `cd app && npm run build` to verify clean compilation.
5. Update `STATUS.md`, `HANDOFF.md`, and `CHANGELOG.md` recording the completed milestone batch.
