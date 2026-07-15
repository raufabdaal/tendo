# Curriculum Intelligence System v1

*Created: 2026-07-15*

## Purpose

Tendo must become a **source-traceable curriculum intelligence system**, not a loose content-writing project.

The core product promise is simple:

> A learner opens Tendo and studies content that is full, age-appropriate, locally relevant and traceable to the Ugandan primary curriculum.

If this fails, the product fails. UX, practice, dashboards and subscriptions only matter after the learning content is trustworthy.

---

## Non-negotiable operating rule

Nothing enters learner-facing content unless it can be traced back to one of these:

1. Official NCDC syllabus/curriculum.
2. Official NCDC teacher guide or resource book.
3. Official NCDC textbook specification / guidance.
4. Officially approved learner book or teacher guide.
5. UNEB or other official assessment-aligned material.
6. Trusted publisher/reference material only after cross-checking against the official syllabus.

If a claim cannot be traced, it is not allowed into premium learner content.

---

## Source hierarchy

### Tier 1 — Binding official curriculum

Highest authority.

Examples:

- NCDC syllabus PDFs.
- NCDC curriculum documents.
- official NCDC subject guides.

Use this tier to decide:

- class level,
- subject,
- term,
- theme/topic,
- official subtopic wording,
- expected scope,
- time allocation where available,
- intended learning outcomes / competences.

### Tier 2 — Official pedagogy and teacher support

Use this tier to decide how content should be taught.

Examples:

- teacher guides,
- resource books,
- methodological notes,
- SNE/accessibility guidance,
- assessment guidance.

Use this tier to decide:

- learner-centred activity style,
- sequencing from known to unknown,
- age-appropriate language,
- classroom task types,
- assessment mode,
- mixed-ability support.

### Tier 3 — Approved learner and teacher books

Use this tier to enrich examples, activities and phrasing only if aligned with Tier 1.

Examples:

- approved learner books,
- approved teacher guides,
- recognised Ugandan publisher books if verified.

Rule: a textbook can clarify the syllabus, but it cannot override it.

### Tier 4 — Assessment-aligned references

Use this tier to check question style and exam phrasing.

Examples:

- UNEB publications,
- released sample papers where legally usable,
- official assessment guidance.

Rule: assessment references help build practice, but do not expand the syllabus beyond class level.

### Tier 5 — General web/reference support

Use only for background verification, never as the only source for learner content.

Examples:

- encyclopaedia-style reference,
- reputable educational sites,
- maps/statistics sources.

Rule: do not import unsupported definitions, examples or advanced concepts from general web sources into primary content.

---

## Agent roles

The system uses specialised roles. One agent should not collect, write, approve and publish the same content without independent checks.

| Role | Job | Output |
|---|---|---|
| Source Scout | Find official/credible source material. | Source candidates with links and metadata. |
| Document Verifier | Confirm authenticity, class, subject, issuer, version and completeness. | Verified source registry. |
| Curriculum Mapper | Extract official topics, subtopics, outcomes, competences, vocabulary, activities and assessment notes. | Structured curriculum map. |
| Source Extractor | Pull exact relevant facts/definitions/examples from approved sources. | Evidence notes with source references. |
| Content Inducer | Convert approved evidence into learner modules. | Draft lessons/modules. |
| Assessment Builder | Create checks, quizzes, practice tasks and answer keys. | Question bank with curriculum refs. |
| Compliance Auditor | Check fidelity, scope, age level, language, cultural sensitivity and traceability. | Pass/fail QA notes. |
| Localization Reviewer | Check Ugandan context, British English, simplicity and accessibility. | Final edit notes. |
| Publisher | Move approved content into app files only after all gates pass. | Versioned app content. |

---

## Hard quality gates

Content cannot move forward unless it passes all relevant gates.

### 1. Source gate

Every topic/subtopic/module must have source references.

Minimum requirement:

- at least one Tier 1 source for the curriculum unit,
- at least one source note for definitions or factual claims used in learner content.

### 2. Relevance gate

The source must match:

- Uganda,
- primary level,
- exact class,
- exact subject,
- correct curriculum/set/version,
- correct topic/subtopic.

### 3. Depth gate

Content must be full enough for learning but must not exceed class level.

For upper primary, a complete subtopic should normally include:

- definition where required,
- types/classifications where required,
- examples,
- uses/importance/effects/causes where relevant,
- local examples where safe,
- activity or worked example,
- inline check,
- answer/explanation.

### 4. Language gate

Learner content must use:

- simple British English,
- direct teaching statements,
- short sentences where possible,
- no filler,
- no hidden teacher-planning meta-copy.

Avoid learner-facing phrases like:

- “expected outcome”,
- “theme guide”,
- “this part helps learners…”,
- “NCDC key content includes…”.

### 5. Context gate

Examples must be:

- Ugandan/African where relevant,
- culturally safe,
- gender-sensitive,
- respectful of ethnic, religious and regional identity,
- non-inflammatory when covering sensitive history.

### 6. Assessment gate

Questions must match:

- the class level,
- official topic/subtopic,
- skill being tested,
- assessment style,
- answer key correctness.

Each question must have:

- correct answer,
- explanation,
- difficulty tag,
- curriculum reference,
- source reference or evidence note.

### 7. SNE/accessibility gate

Content should be usable for learners with different needs.

Check:

- no meaning carried only by colour,
- images have captions/labels,
- short chunks,
- clear headings,
- no tiny map-label dependency without explanation,
- activities can be adapted for low-resource environments.

### 8. Traceability gate

Every output must have:

- source references,
- curriculum unit ID,
- version number,
- review status,
- approval date when approved,
- authoring/review notes.

---

## Fullness standard

Fullness does **not** mean long notes.

Fullness means the learner receives all knowledge blocks needed to understand and practise the official subtopic.

### Upper-primary subtopic fullness checklist

A P4–P7 subtopic is incomplete if it lacks required pieces from this list:

- [ ] official curriculum wording recorded,
- [ ] source references recorded,
- [ ] simple definition where applicable,
- [ ] key terms explained,
- [ ] types/classifications where applicable,
- [ ] examples from Uganda/Africa where applicable,
- [ ] causes/reasons where applicable,
- [ ] effects/results where applicable,
- [ ] uses/importance where applicable,
- [ ] advantages/disadvantages where applicable,
- [ ] worked example or guided activity,
- [ ] at least one inline check per module,
- [ ] answer key and explanation,
- [ ] misconception/exam trap where useful,
- [ ] accessibility/context check,
- [ ] compliance review status.

### Strict module shape

A learner-facing module should usually fit this shape:

```txt
Title
Big idea
Teaching points
Examples / activity / worked example
Inline check
Answer explanation
Source references
Review status
```

For the current P7 SST strict rendering format, teaching points can use:

```txt
### Subtopic Name

Term:
Is ...

Types:
* ...

Examples:
* ...

Importance / Effects / Causes:
* ...
```

---

## Data model requirements

Every curriculum intelligence unit should store:

```ts
type CurriculumIntelligenceUnit = {
  id: string;
  classLevel: "P3" | "P4" | "P5" | "P6" | "P7";
  subject: string;
  term: "Term I" | "Term II" | "Term III";
  topicId: string;
  topicTitle: string;
  officialSubtopic: string;
  appSubtopicId: string;
  sourceRefs: string[];
  evidenceNotes: EvidenceNote[];
  requiredKnowledgeBlocks: string[];
  draftModules: DraftModule[];
  qa: QARecord;
  status: "source-needed" | "mapped" | "drafted" | "qa-failed" | "qa-passed" | "published";
  version: string;
};
```

Every evidence note should store:

```ts
type EvidenceNote = {
  id: string;
  sourceId: string;
  quoteOrSummary: string;
  pageOrSection?: string;
  reliabilityTier: 1 | 2 | 3 | 4 | 5;
  usedFor: "curriculum-map" | "definition" | "example" | "activity" | "assessment";
};
```

Every module should store:

```ts
type DraftModule = {
  moduleId: string;
  title: string;
  bigIdea: string;
  teachingPoints: string[];
  activityOrWorkedExample?: string;
  inlineCheck: {
    question: string;
    choices?: string[];
    correctAnswer: string;
    explanation: string;
    skillTested: string;
    difficulty: "easy" | "medium" | "hard";
  };
  sourceRefs: string[];
  qaStatus: "not-reviewed" | "needs-fix" | "passed";
};
```

---

## Publishing rule

Learner-facing app files must not be the first place content is created.

Correct order:

1. source registry,
2. curriculum map,
3. evidence notes,
4. draft content pack,
5. QA review,
6. app implementation,
7. build check,
8. documentation update.

For Tendo’s current TypeScript content model, publishing means updating files such as:

```txt
app/lib/social-topics.ts
app/lib/science-topics.ts
app/lib/topics.ts
```

But the authoritative content evidence should live under:

```txt
content/curriculum-intelligence/
```

---

## Pilot scope

The first pilot is:

```txt
Class: P7
Subject: Social Studies
Topic: people-ethnic-groups-settlement
```

This pilot must prove the pipeline before expanding to other subjects/classes.

---

## Success criteria

The system is working when:

- every P7 SST topic maps to official NCDC topic wording,
- every official subtopic maps to one or more app modules,
- every module has a source reference,
- every module has an inline check,
- every check has a correct answer and explanation,
- no topic contains subtopics from another official topic,
- build passes,
- QA status is visible,
- docs show exactly what changed and why.

---

## Standing warning

Speed is no longer the priority.

For curriculum content, correctness and fullness beat speed. It is acceptable to move one official subtopic at a time, or one module at a time, if that is what it takes to make the content trustworthy.
