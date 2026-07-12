# P3 Religious Education Source Research and Beta Build — 2026-07-12

## Purpose

Record the source basis and implementation decision for building **P3 Religious Education (CRE and IRE)** as beta content.

This follows the founder direction:

- Build for both completion and quality.
- Use the official NCDC map first.
- For CRE/IRE, gather valid supporting information from trusted sources that already exist.
- Build our best internal version, then teachers verify.

---

## Curriculum source of truth

Official curriculum map:

- `content/curriculum/p3-re.json`
- Official source recorded in map: `NCDC Primary School Curriculum P.3, May 2008, Religious Education section`
- Official URL: `https://ncdc.go.ug/wp-content/uploads/2024/02/P3_Thematic_Curr_21_November_2007_-_Edited.pdf`

Important structure note:

- P3 RE is **outside** the P3 thematic matrix, but it corresponds with the 12-theme timetable.
- Therefore P3 RE is kept separate from `/p3/theme/[theme]` pages.
- P3 RE route model used:

```txt
/p3/re
/p3/re/[topic]
```

This does **not** create forbidden subject-style routes such as `/re/p3`.

---

## Trusted supporting source categories

These sources are used to cross-check facts and wording. They do not replace the NCDC map.

### CRE supporting sources

Used for age-appropriate source links around Jesus, prayer, Holy Spirit and Pentecost:

- BibleHub Matthew 6:9 — Lord's Prayer source connection: `https://biblehub.com/matthew/6-9.htm`
- BibleHub John 14:26 — Holy Spirit as Helper/Teacher source connection: `https://biblehub.com/john/14-26.htm`
- BibleHub Acts 2:4 — Pentecost source connection: `https://biblehub.com/acts/2-4.htm`
- BibleHub / Bible passage pages should be used only for source confirmation and teacher review, not as long copied text in app modules.

CRE content remains P3-simple:

- traditions and Christian customs,
- leadership and good leaders,
- messengers of God,
- Holy Week and Easter joy,
- Holy Spirit,
- worship,
- joint prayer activities,
- honesty, responsibility, service, abilities and prayer.

### IRE supporting sources

Used for Qur'an, divine books, first revelation, Dua after Adhan, and Dua for knowledge:

- Quran.com Al-Alaq 96:1-5 — first revelation / “Read/Recite” source connection: `https://quran.com/en/al-alaq/1-5`
- Quran.com Al-Baqarah 2:136 — belief in revelations given to prophets: `https://quran.com/en/al-baqarah/136`
- Quran.com Taha 20:114 — Dua for increase in knowledge: `https://quran.com/en/taha/114`
- Sunnah.com Sahih al-Bukhari 614 — Dua after Adhan: `https://sunnah.com/bukhari:614`
- Arabic vowel / harakat references used for Fatha, Kasra, Dhumma/Damma, Shadda and Madda confirmation. One reference searched: `https://arabic123.com/blog/arabic-vowels-diacritics-understanding-harakat`

IRE content remains P3-simple:

- Arabic alphabet, ayah, surah and juzu,
- respect for handling the Qur'an,
- divine books: Tawrat/Taurat, Zaburi/Zabur, Injili/Injil and Qur'an,
- basic Salat nullifiers and prayer values,
- first revelation, Mount Hira, Jibril and Khadijah (RA),
- Arabic vowels,
- Dua after Adhan,
- cleanliness, Najasah, toilet manners and ablution,
- Dua and seeking knowledge.

---

## Implementation completed

New content file:

- `app/lib/p3-re-topics.ts`

New routes:

- `app/app/p3/re/page.tsx`
- `app/app/p3/re/[topic]/page.tsx`

New visuals:

- `app/public/images/p3/re/*.svg`

App shell updates:

- `app/app/p3-home/page.tsx` — adds separate RE card.
- `app/components/StudyDirectory.tsx` — adds P3 Religious Education card.
- `app/components/PracticeHomeContent.tsx` — adds P3 RE practice entry.
- `app/components/AuthGate.tsx` — allows P3 student routes under `/p3/re`.
- `app/components/AppNav.tsx` — recognises `/p3/re` as P3 study content.

Curriculum map metadata updated:

- `content/curriculum/p3-re.json`
- `verificationStatus`: `official-ncdc-map-cross-checked-with-trusted-cre-ire-sources-beta-needs-teacher-review`
- `lastReviewed`: `2026-07-12`

---

## Coverage built

P3 CRE:

1. Traditions
2. Leadership
3. Messengers of God
4. Sorrow and Joy in Life
5. The Holy Spirit
6. Worshipping God
7. Christian Joint Activities and Prayers
8. Values, Abilities and Prayer

P3 IRE:

1. Reading from the Qur'an: Nature of the Qur'an
2. Tawhiid (Faith): Divine Books
3. Fiqh and Islamic Values
4. History of Islam: The First Revelation
5. Reading of the Qur'an: Vowels in Arabic
6. Tawhiid: Importance and Content of Divine Books
7. Dua after Adhan and Laws
8. Khadijah and the Revelation / Rites of the Qur'an
9. Uniqueness of the Qur'an and Impurities
10. Moral and Spiritual Teachings: Dua and Seeking Knowledge

Totals:

- 18 P3 RE topics
- 54 RE modules
- 18 RE visuals
- 144 RE quiz questions

---

## Internal quality safeguards applied

- P3 RE is labelled beta.
- Each RE topic states teacher review is still required.
- CRE and IRE are separated clearly.
- P3 RE is not mixed into the thematic pages.
- No `/re/p3` route was added.
- IRE uses respectful `Prophet Muhammad (PBUH)` wording.
- Khadijah is marked `(RA)` where mentioned.
- Arabic and Qur'an recitation are teacher-guided, not overconfidently automated.
- Potentially sensitive fiqh/cleanliness content is kept simple and teacher-reviewable.
- CRE content avoids long copied scripture and uses child-friendly paraphrase/source connection.

---

## Still required before premium-final

1. Qualified CRE teacher review.
2. Qualified IRE teacher review.
3. Confirmation that extracted NCDC topic/subtopic wording is clean.
4. Check school/community denominational sensitivity for CRE wording.
5. Check IRE terminology spelling and local Ugandan classroom conventions.
6. Check that P3 learners can understand the language without adult theological overload.

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

Route count moved from 337 pages after full P3 thematic beta to 356 pages after adding `/p3/re` and 18 P3 RE topic pages.
