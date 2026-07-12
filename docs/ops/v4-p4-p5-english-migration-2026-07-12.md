# V4 P4/P5 English Migration — 2026-07-12

## Purpose

Record the first English migration batch in the NCDC-native v4 content architecture.

Target:

- P4 English
- P5 English

English needs a v4 structure that is not only notes, but also vocabulary, grammar/language ideas, examples, speaking practice, guided writing and evaluation.

---

## Structure implemented

New shared helper:

- `app/lib/v4-english-helpers.ts`

Purpose:

- Convert existing English topic/subtopic/module content into `upper-primary-v4` lessons.
- Preserve existing vocabulary, grammar and writing-practice content while changing the student-facing render structure.
- Generate one v4 lesson per existing English subtopic.
- Generate an extra Guided Writing lesson when a topic has `writingTasks`.

The helper adds:

```ts
contentFormat: "upper-primary-v4"
upperPrimaryLessons: UpperPrimaryLesson[]
```

for every English topic passed through it.

---

## Renderer support added

Updated:

- `app/lib/content-blocks.ts`
- `app/components/V4LessonViews.tsx`

Upper-primary v4 blocks now support English-friendly blocks:

- `VocabularyBlock`
- `StoryBlock`
- `ActivityBlock`

This allows English lessons to render:

```txt
Vocabulary
→ definition / language idea
→ grammar / language categories
→ examples and model sentences
→ diagram/image where available
→ worked example
→ speaking and writing practice
→ evaluation
```

---

## P4 English migration

Updated file:

- `app/lib/p4-english-topics.ts`

Implementation:

- Replaced direct export array with internal `P4_ENGLISH_TOPIC_DATA`.
- Added `P4_ENGLISH_TERMS` from `content/curriculum/p4-english.json`.
- Export now wraps data with:

```ts
addUpperPrimaryEnglishV4(P4_ENGLISH_TOPIC_DATA, "P4", P4_ENGLISH_TERMS)
```

Coverage:

- 8 P4 English topics now render through upper-primary v4.

P4 English topics:

1. Describing People and Objects
2. Giving Directions
3. What I Like and How I Feel
4. Behaviour
5. Buying and Selling
6. Time
7. Expression of the Future
8. Democracy

---

## P5 English migration

Updated file:

- `app/lib/p5-english-topics.ts`

Implementation:

- Added `P5_ENGLISH_TERMS` from `content/curriculum/p5-english.json`.
- Export now wraps data with:

```ts
balanceTopicAnswers(addUpperPrimaryEnglishV4(P5_ENGLISH_TOPIC_DATA, "P5", P5_ENGLISH_TERMS))
```

Coverage:

- 8 P5 English topics now render through upper-primary v4.

P5 English topics:

1. Vehicle Repair and Maintenance
2. Print Media
3. Travelling
4. Letter Writing
5. Communication
6. Culture
7. Peace and Security
8. Services: Banking

---

## Student-facing result

P4/P5 English topic pages now use the upper-primary v4 renderer:

```txt
Lesson selector
→ one lesson/module at a time
→ vocabulary
→ definition / language idea
→ grammar / language categories
→ examples and model sentences
→ image where available
→ worked example
→ speaking and writing practice
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

This is a **structural migration**, not final manual deepening of every English topic.

Recommended manual-deepening order:

1. P4 Describing People and Objects
2. P4 Giving Directions
3. P4 Buying and Selling
4. P5 Letter Writing
5. P5 Communication
6. P5 Print Media
7. P5 Culture / Peace and Security

Teacher review remains required before premium-final status.

---

## Priority manual deepening update — P4/P5 English

Priority P4/P5 English topics have now been hand-deepened in upper-primary v4.

### P4 Describing People and Objects

Route:

```txt
/english/p4/p4-describing-people-objects
```

Lessons:

1. Describing People
2. Describing Objects

Key content:

- adjective definition,
- appearance words,
- character words,
- object description,
- colour, shape, texture and weight,
- present simple with `is` and `are`,
- comparative description,
- safe/respectful descriptive language.

### P4 Giving Directions

Route:

```txt
/english/p4/p4-giving-directions
```

Lessons:

1. Giving Directions

Key content:

- direction vocabulary,
- directions definition,
- start points,
- movement words,
- place markers,
- polite language,
- model route sentences,
- speaking practice.

### P4 Buying and Selling

Route:

```txt
/english/p4/p4-buying-selling
```

Lessons:

1. Buying and Selling Conversations

Key content:

- market vocabulary,
- buyer, seller, price, change, receipt and customer,
- polite buying/selling conversation,
- asking price,
- requesting politely,
- seller replies,
- role-play.

### P5 Letter Writing

Route:

```txt
/english/p5/p5-letter-writing
```

Lessons:

1. Parts of a Friendly Letter
2. Invitations and Replies

Key content:

- friendly letter definition,
- address, date, greeting, body, closing and signature,
- invitation definition,
- event, date/time, place and polite request,
- polite replies.

### P5 Communication

Route:

```txt
/english/p5/p5-communication
```

Lessons:

1. Means of Communication
2. Clear Messages and Telephone Language

Key content:

- communication definition,
- post office,
- telephone,
- internet,
- radio and television,
- parts of a clear message: who, what, when and where,
- polite telephone language.

### P5 Print Media

Route:

```txt
/english/p5/p5-print-media
```

Lessons:

1. Print Media Vocabulary
2. Articles, Relative Pronouns and Writing

Key content:

- print media definition,
- newspaper, magazine, brochure, newsletter, article and advert,
- articles: a, an and the,
- relative pronouns: who and which,
- short article writing practice.

Implementation:

- Added `P4_DESCRIBING_V4`.
- Added `P4_DIRECTIONS_V4`.
- Added `P4_BUYING_SELLING_V4`.
- Added `P5_LETTER_WRITING_V4`.
- Added `P5_COMMUNICATION_V4`.
- Added `P5_PRINT_MEDIA_V4`.
- Set `useOnlyV4Lessons: true` for these priority topics.

Build result:

```txt
cd app && npm run build
✓ Compiled successfully
✓ Generating static pages (356/356)
```

Remaining P4/P5 English manual deepening:

P4:

- What I Like and How I Feel
- Behaviour
- Time
- Expression of the Future
- Democracy

P5:

- Vehicle Repair and Maintenance
- Travelling
- Culture
- Peace and Security
- Services: Banking

---

## Final manual deepening update — P4/P5 English v4 complete

The remaining P4/P5 English topics have now been hand-deepened in upper-primary v4.

### Final P4 English topics completed

1. **What I Like and How I Feel**
   - likes and preferences,
   - feeling words,
   - `because` for reasons,
   - `like` and `prefer` sentence patterns.

2. **Behaviour**
   - good behaviour definition,
   - behaviour vocabulary,
   - advice structures: `should`, `must`, `must not`,
   - safe and respectful advice writing.

3. **Time**
   - past simple tense,
   - past continuous tense,
   - `was/were + -ing`,
   - `while` structures,
   - writing about past events.

4. **Expression of the Future**
   - future tense definition,
   - `will`,
   - `going to`,
   - diary and study planning language.

5. **Democracy**
   - democracy definition,
   - election vocabulary,
   - candidate, vote, majority and fair play,
   - MDD / games / sports participation language,
   - class election report writing.

### Final P5 English topics completed

1. **Vehicle Repair and Maintenance**
   - vehicle parts,
   - repair tools,
   - maintenance definition,
   - `has/have`,
   - `must/mustn't`,
   - `if`,
   - `in order to`,
   - safety sentences.

2. **Travelling**
   - travel vocabulary,
   - fare, ticket, destination and journey,
   - past simple,
   - past continuous,
   - `while`,
   - adverbs,
   - travel dialogue writing.

3. **Culture**
   - culture definition,
   - nationalities,
   - languages,
   - adjectives and prepositions,
   - respectful cultural description,
   - because/as structures.

4. **Peace and Security**
   - peace and security vocabulary,
   - safety-message definition,
   - conjunctions,
   - past simple,
   - present perfect,
   - `so...that`,
   - guided safety messages.

5. **Services: Banking**
   - banking definition,
   - account, deposit, withdraw, balance and cashier,
   - banking dialogue,
   - `neither...nor`,
   - `as soon as`,
   - privacy/safety note about real account details.

Implementation:

- Added `P4_LIKES_FEELINGS_V4`.
- Added `P4_BEHAVIOUR_V4`.
- Added `P4_TIME_ENGLISH_V4`.
- Added `P4_FUTURE_V4`.
- Added `P4_DEMOCRACY_V4`.
- Added `P5_VEHICLE_REPAIR_V4`.
- Added `P5_TRAVELLING_V4`.
- Added `P5_CULTURE_V4`.
- Added `P5_PEACE_SECURITY_V4`.
- Added `P5_BANKING_V4`.
- Set `useOnlyV4Lessons: true` for these topics.

Build result:

```txt
cd app && npm run build
✓ Compiled successfully
✓ Generating static pages (356/356)
```

Current P4/P5 English status:

- P4 English: 8/8 topics structurally migrated and hand-deepened in v4.
- P5 English: 8/8 topics structurally migrated and hand-deepened in v4.
- P4/P5 English are complete at AI-builder v4 level.

Remaining review:

- English teacher review,
- real-phone review,
- writing-task quality review,
- source fidelity review against official/trusted NCDC copy.
