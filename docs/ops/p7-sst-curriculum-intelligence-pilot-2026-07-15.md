# P7 Social Studies Curriculum Intelligence Pilot — 2026-07-15

## Purpose

This note starts the new content operating model for Tendo.

The founder identified the core product risk clearly: unfinished or untrustworthy content breaks the entire app. The response is to stop treating content as ad hoc writing and start treating it as a **source-traceable curriculum intelligence workflow**.

Pilot scope:

```txt
Class: Primary Seven
Subject: Social Studies
Curriculum theme: Living Together in Africa
Pilot topic: The People of Africa, the Ethnic Groups and Settlement Patterns
Topic ID: people-ethnic-groups-settlement
```

---

## Why P7 SST is the pilot

P7 SST is the right pilot because:

- it is already the active content correction track,
- it has clear official topic/subtopic structure,
- it mixes geography, history, civic and social content,
- it exposes the risks of content drift quickly,
- it recently revealed structure bugs that only a stricter pipeline would catch.

---

## What was fixed before this pilot

A P7 SST structure bug was corrected in `app/lib/social-topics.ts`.

Previously, `foreign-influence-africa` had swallowed richer subtopics belonging to later official topics. The fix restored:

- Nationalism content to `nationalism-road-independence`,
- Post-Independence content to `post-independence-africa`,
- Economic Developments content to `economic-developments-africa`,
- Major World Organisations content to `major-world-organisations`.

Build passed after the fix:

```txt
✓ Generating static pages (413/413)
```

This confirms why a formal audit system is needed.

---

## New operating rule

For this pilot, no new learner-facing module should be written directly into `app/lib/social-topics.ts` until the following exists:

1. source registry,
2. curriculum-intelligence manifest,
3. official subtopic mapping,
4. evidence notes,
5. module draft,
6. QA checklist,
7. traceability status.

---

## Files introduced for the pilot

```txt
docs/spec/curriculum-intelligence-system-v1.md
content/curriculum-intelligence/p7-sst/source-registry.json
content/curriculum-intelligence/p7-sst/manifest.json
scripts/audit-curriculum-intelligence.js
```

Purpose of each:

| File | Purpose |
|---|---|
| `curriculum-intelligence-system-v1.md` | Master operating rules, source hierarchy, agent roles and gates. |
| `source-registry.json` | Tracks official/candidate sources and verification status. |
| `manifest.json` | Maps official P7 SST curriculum units to app topic/subtopic IDs. |
| `audit-curriculum-intelligence.js` | Checks app structure against the curriculum-intelligence manifest. |

---

## Pilot workflow

### Step 1 — Source registry

Collect official and credible sources.

Minimum source requirements for P7 SST:

- NCDC Primary Seven Set One curriculum PDF.
- Existing in-repo NCDC extract docs if derived from the official PDF.
- Any teacher guide / resource book if found and verified.
- Any approved learner-book reference only if cross-checked against NCDC.

### Step 2 — Manifest mapping

Map official curriculum topics and subtopics to app IDs.

For Topic 5, the official subtopics are:

1. Origin of different ethnic groups.
2. Movements of different ethnic groups into Africa.
3. Settlement patterns of different ethnic groups.
4. Tribes belonging to different ethnic groups.
5. Reasons for migration and settlement of ethnic groups in Africa.
6. Problems met by ethnic groups during movement and settlement in Africa.
7. Effects of ethnic migrations.

### Step 3 — Evidence notes

For each official subtopic, collect source-backed facts before writing modules.

Each evidence note must record:

- source ID,
- page/section where possible,
- exact quote or faithful summary,
- what it supports: definition, examples, activity, assessment, etc.

### Step 4 — Draft module

Only after evidence exists, create a learner module.

Each module must include:

- title,
- big idea,
- teaching points,
- local examples where appropriate,
- inline check,
- answer explanation,
- source references.

### Step 5 — QA gate

Before publishing to the app, check:

- source traceability,
- class/subject relevance,
- no higher-level drift,
- British English,
- Ugandan/African context,
- cultural sensitivity,
- correct answer key,
- accessibility/readability.

### Step 6 — Publish and build

Only after QA, update:

```txt
app/lib/social-topics.ts
```

Then run:

```bash
cd app && npm run build
```

### Step 7 — Documentation

Every meaningful content update must update:

```txt
STATUS.md
HANDOFF.md
CHECKLIST.md
CHANGELOG.md
docs/ops/p7-sst-curriculum-intelligence-pilot-2026-07-15.md
```

---

## Pilot acceptance checklist

Topic 5 is not considered complete until:

- [ ] each official subtopic is mapped,
- [ ] each app subtopic has evidence notes,
- [ ] every module has at least one source reference,
- [ ] every module has an inline check,
- [ ] all checks have correct answer explanations,
- [ ] no unsupported factual claim remains,
- [ ] language is age-appropriate,
- [ ] sensitive ethnic/cultural wording is respectful,
- [ ] audit script passes,
- [ ] build passes,
- [ ] changelog and handoff are updated.

---

## Current status

As of this note:

- P7 SST structure bug is fixed.
- Curriculum intelligence operating spec is created.
- Pilot registry and manifest are created.
- Audit script is created.
- Topic 5 content has **not** yet been rewritten under the new system.

Next practical step:

```txt
Fill Topic 5 evidence notes from verified sources, one official subtopic at a time.
```

Do not rush this. This is now the core content quality system for the app.
