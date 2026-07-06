# Teacher-set questions + manual marking requirements — 2026-07-07

## Why this exists

Teacher testers asked for functionality beyond auto-graded multiple choice:

1. Teachers want to set their own questions.
2. Students need somewhere to write answers/working.
3. Teachers need to mark some answers manually.
4. Students should see teacher-set questions inside their practice flow.

This document records the requirement and what has been scaffolded now.

---

## Product requirement

### Teacher

A teacher should be able to:

- open Teacher workspace
- choose **Set questions**
- write a question for a class (`P6` or `P7`)
- choose subject
- set marks
- optionally add a marking guide
- view submitted student answers
- manually enter a score and feedback

### Student

A student should be able to:

- open Practice
- see a **Teacher questions** card if their teacher has set questions for their class
- write an answer in a text box
- submit the answer
- later see teacher feedback/score when marked

### Auto-graded questions

Even auto-graded MCQ flows should include a **working space** so students can write calculations/notes before choosing an answer.

---

## Implemented now

### Local teacher-question scaffold

Added:

- `app/lib/teacher-questions.ts`
- `app/components/TeacherQuestionManager.tsx`
- `app/components/StudentTeacherQuestions.tsx`
- `app/app/teacher/questions/page.tsx`
- `app/app/practice/teacher-questions/page.tsx`

Current storage:

- localStorage key `tendo:teacher-questions`
- localStorage key `tendo:teacher-question-submissions`

This is a **device-only prototype**. It proves UX and workflow but does not sync between teacher and student devices yet.

### Teacher navigation

Added **Set questions** to the teacher hamburger menu.

### Student practice

The Practice page now shows a **Teacher questions** card when there are open teacher-set questions for the signed-in student’s grade.

### Manual marking

Teachers can mark submitted answers with:

- score
- feedback

### Writing space

Added working-space textareas to:

- `app/components/Quiz.tsx`
- `app/components/PracticeRunner.tsx`
- `app/components/PaperAttempt.tsx`
- `app/components/StudentTeacherQuestions.tsx`

---

## Important limitation

Because the current auth/session is local-only, teacher-set questions and student submissions only work on the same browser/device. This is acceptable as UX scaffolding, but it is not a real school deployment model.

For production, this needs backend storage and real relationships:

- school
- class
- teacher
- student
- assignment/question
- submission
- mark/feedback

---

## Suggested backend model later

### tables/collections

- `schools`
- `classes`
- `users`
- `teacher_questions`
- `teacher_question_submissions`
- `marks`

### `teacher_questions`

- `id`
- `school_id`
- `class_id`
- `teacher_id`
- `grade`
- `subject`
- `topic_id` optional
- `title`
- `prompt`
- `marks`
- `marking_guide`
- `status`
- `created_at`

### `teacher_question_submissions`

- `id`
- `question_id`
- `student_id`
- `answer`
- `submitted_at`
- `status`
- `score`
- `feedback`
- `marked_by`
- `marked_at`

---

## Next steps

1. Test the local UX flow with teacher → set question → switch account → student answer → switch back → teacher mark.
2. Decide whether teacher-set questions should support attachments/images later.
3. Decide whether teacher-set questions should be per-class, per-student, or both.
4. Choose backend auth/storage provider before making this cross-device.
