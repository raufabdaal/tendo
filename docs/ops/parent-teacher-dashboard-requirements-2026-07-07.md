# Parent + Teacher Dashboard Requirements — 2026-07-07

## Problem

The teacher home/dashboard was carrying too much information at once. Testers also raised needs around parent visibility, teacher-set work, manual marking and written answers.

## Product direction

### Teacher home

Teacher home should answer one question first:

> What job do I want to do now?

Primary jobs:

1. Check class progress.
2. Make a worksheet.
3. Set a question.
4. Open content library from the hamburger menu.
5. Review content reports from the hamburger menu.

Avoid large hero stats on the teacher home. Detailed data belongs inside the class dashboard area.

### Teacher dashboard

Teacher dashboard should prioritise:

1. Topics that need reteaching.
2. Learners who need attention.
3. Parent-friendly report copying.
4. Drill-down only after the teacher chooses a learner/topic.

### Parent dashboard / parent updates

Current product does **not** have a separate parent login. For now, parent visibility should be handled through teacher-generated parent updates.

Future parent-facing experience may include:

- learner weekly summary
- topics practised
- best subject
- topic needing support
- simple next action at home
- teacher note/manual feedback

### Manual marking

Manual marking is required for teacher-set written questions. AI marking should not be the default for teacher-set work because teachers asked for control and trust.

## Implemented now

- Teacher home reduced to compact intro + three primary task cards.
- Teacher content library removed from the main home view and left in the hamburger menu.
- Teacher-set questions scaffold added under `/teacher/questions`.
- Student teacher-question answering scaffold added under `/practice/teacher-questions`.
- Teacher can manually enter score and feedback.
- Working-space textareas added to auto-graded quizzes, practice and papers.

## Still needed later

1. Real backend auth and storage.
2. Real class membership.
3. Parent account or parent share link decision.
4. Teacher dashboard redesign around “needs action” instead of tables first.
5. Parent-update templates connected to real student/class data.
