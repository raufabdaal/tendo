# Strategic Pivot — Student-first Tendo — 2026-07-09

## Decision

Tendo is now a **student-first product for the direct parent/student market**, not a school-dependent pilot product.

The previous Trainup a Child Uganda pilot path is archived. We will not build the product around one school, one school relationship, or a B2B-only sales motion.

## What changed strategically

### Previous direction

- School-sold / B2B2C positioning.
- Trainup a Child Uganda as the first active pilot context.
- School branding and school-specific route experiments.
- Teacher/school demos as the main validation path.

### New direction

- Build Tendo for **P6/P7 learners and premium parents directly** first.
- Students and parents should be able to use it without waiting for a school to adopt it.
- Teachers remain important users, but they are not the gatekeepers for product progress.
- Schools may become partners later, but they are an optional distribution channel, not the core dependency.

## Product implications

### Keep

- P6 and P7 study content.
- Student sign-in and grade-specific experience.
- Practice, past papers, writing space, teacher-set questions and manual marking.
- Teacher workspace because teachers/tutors can still use Tendo independently.
- Parent update direction, but do not require a school to unlock it.

### Stop prioritising

- Trainup-specific route, copy, branding, and pilot language.
- School-first sales deck language as the active product story.
- Waiting for school conversations before improving the product.
- Building features only because a single school might ask for them.

### Future growth path

The likely path is now:

1. Make the student product excellent on phones.
2. Let target learners use it directly without waiting for school approval.
3. Add real auth/backend when the UX is stable.
4. Add teacher/tutor workflows that support individual learners or small groups.
5. Add parent visibility/share features.
6. Consider school/org partnerships later as optional scale channels.

## App changes made with this decision

- Removed the active `/trainup` route.
- Archived Trainup-specific branding in `app/lib/school.ts` comments.
- Updated metadata/README/START_HERE/STATUS/HANDOFF/CHECKLIST/DECISIONS/CHANGELOG to reflect the student-first direction.
- Added auth-backend roadmap that supports direct student/teacher accounts rather than only school accounts.

## Documentation status

Historical Trainup references remain in older changelog/ops docs for audit trail. They should be treated as historical context, not current strategy.

Current source of truth:

- `STATUS.md`
- `HANDOFF.md`
- `DECISIONS.md` decision `DEV-027`
- this document

## New product principle

> Tendo should keep improving even if no school says yes. The learner is the primary user and the parent is the primary paying customer. Teachers and parents support the learner; schools are optional partners.
