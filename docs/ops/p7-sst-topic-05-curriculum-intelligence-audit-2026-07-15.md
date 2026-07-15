# P7 SST Topic 5 Curriculum Intelligence Audit — 2026-07-15

## Topic

```txt
Class: P7
Subject: Social Studies
Theme: Living Together in Africa
Topic 5: The People of Africa, the Ethnic Groups and Settlement Patterns
App ID: people-ethnic-groups-settlement
Official periods: 12
```

## Purpose

Topic 5 is the original thin topic we identified earlier. It is now being rewritten properly under the Curriculum Intelligence direction.

Correct process:

```txt
Official source → evidence notes → module blueprint → learner rewrite → audit → build → documentation
```

---

## Source used

Official source extracted this session:

```txt
NCDC Primary Seven Set One Curriculum PDF
PDF pages 333–336 / printed pages 312–315
```

New curriculum intelligence files:

```txt
content/curriculum-intelligence/p7-sst/topic-05-people-ethnic-groups-settlement/evidence-notes.json
content/curriculum-intelligence/p7-sst/topic-05-people-ethnic-groups-settlement/module-blueprint.json
content/curriculum-intelligence/p7-sst/topic-05-people-ethnic-groups-settlement/qa-checklist.json
```

---

## What NCDC requires

NCDC content areas include:

1. Origin of different ethnic groups.
2. Movements of different ethnic groups into Africa.
3. Settlement patterns of ethnic groups.
4. Tribes belonging to different ethnic groups.
5. Reasons for migration, movements and settlements.
6. Problems met during movement and settlement.
7. Effects of migrations.

NCDC reasons for migration include:

- internal conflicts,
- wars,
- population increase,
- lack of enough land and water,
- harsh climate,
- expansionism.

NCDC problems include:

- resistance from indigenous people,
- difficulty in movements,
- wild animals and diseases,
- difficult terrain,
- food and water shortage,
- harsh climate.

NCDC effects include:

- population increase,
- cultures changed.

NCDC teacher guidance emphasises:

- cultural heritage,
- unity in diversity,
- appreciation of cultural norms,
- brainstorming,
- storytelling,
- guided discovery,
- comparing ancient migration with current rural-urban/rural-rural/urban-rural migration,
- locating migration routes and settlement patterns,
- relief influence on settlement.

---

## Sensitivity note

The official source uses some older or sensitive ethnic/racial terminology. Tendo must not reproduce such terms carelessly in learner-facing explanations.

Correct approach:

- preserve assessable curriculum ideas,
- use respectful language,
- emphasise unity in diversity,
- avoid stereotyping,
- mark tribe/ethnic-group mappings for teacher review before premium-final status.

---

## First batch target

```txt
origin-ethnic-groups
movements-ethnic-groups
```

Rules:

- Teach meaning of ethnic group respectfully.
- Teach how ethnic identity may be connected to language, culture, ancestry, values, religion, nationality, place and belonging.
- Teach migration as movement from origin to settlement.
- Avoid unsourced detailed migration routes until an atlas/teacher source is available.

---

## Current status

Evidence notes created. Blueprint updated. QA checklist updated.

Next step:

```txt
Rewrite origin-ethnic-groups and movements-ethnic-groups in app/lib/social-topics.ts.
```

---

## Update — First two Topic 5 subtopics rewritten together

Updated in `app/lib/social-topics.ts`:

```txt
Topic: people-ethnic-groups-settlement
Subtopics:
- origin-ethnic-groups
- movements-ethnic-groups
```

### Origin subtopic new structure

1. `ethnic-group-meaning-respect` — Meaning of an Ethnic Group
2. `basis-of-ethnic-identity` — How Ethnic Groups are Identified
3. `major-ethnic-groups-careful-language` — Major Ethnic Group Terms in the Source

### Movements subtopic new structure

1. `migration-origin-settlement` — Migration, Origin and Settlement
2. `tracing-movements-map-practice` — Tracing Movements on a Map
3. `ancient-and-current-migration` — Ancient and Current Migration

Source basis:

- NCDC Topic 5 pages 333–336 / printed pages 312–315.
- NCDC background on ethnicity: geographical location, language, culture, ancestry, sense of belonging, religion, values and nationality.
- NCDC guidance on unity in diversity, cultural appreciation, migration route maps and comparison with current migration.

Content decision:

- Used respectful learner-facing language because the official source includes older/sensitive ethnic/racial terminology.
- Preserved assessable ideas while avoiding stereotypes or ranking groups.
- Separated origin, ethnic identity, migration, map tracing and current migration comparison.
- Every module has an inline check.

Verification:

```bash
node scripts/audit-curriculum-intelligence.js
cd app && npm run build
```

Results:

```txt
Audit: 0 failures / 46 warnings
Build: ✓ Generating static pages (413/413)
```

Next Topic 5 rewrite target:

```txt
settlement-tribes
problems-effects-migration
```

Rewrite rule: handle settlement patterns, tribes/ethnic group matching, reasons, problems and effects respectfully and clearly; avoid unsourced detailed tribe mapping until teacher-reviewed.
