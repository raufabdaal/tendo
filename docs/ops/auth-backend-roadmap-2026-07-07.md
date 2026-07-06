# Authentication + Backend Roadmap — 2026-07-07

## Why this matters

The current app now has a role-based sign-in experience, teacher-set questions, student written answers and manual marking. These workflows are currently **local/device-only** so we can test the UX quickly.

Before real school use, this must become real backend authentication and synced data.

---

## Current state

Current auth/session implementation:

- `app/components/AuthGate.tsx`
- `app/lib/auth-session.ts`
- stored in `localStorage` as `tendo:session`

Current teacher questions implementation:

- `app/lib/teacher-questions.ts`
- `localStorage` keys:
  - `tendo:teacher-questions`
  - `tendo:teacher-question-submissions`

This is good for demos and UX validation, but it is not enough for production.

---

## When we are ready for real auth

We need real accounts for:

- schools
- teachers
- classes
- students
- maybe parents later

The backend must support:

1. Student progress sync across devices.
2. Teacher dashboards with real class data.
3. Teacher-set questions visible to students on their own devices.
4. Student written submissions.
5. Teacher manual marking and feedback.
6. Parent updates or parent dashboard later.

---

## Recommended first backend shape

### Tables / collections

- `schools`
- `classes`
- `users`
- `class_memberships`
- `topic_progress`
- `paper_attempts`
- `teacher_questions`
- `teacher_question_submissions`
- `content_reports`

### Users

Fields:

- `id`
- `role`: `student | teacher | parent | admin`
- `name`
- `school_id`
- `created_at`

### Classes

Fields:

- `id`
- `school_id`
- `name` e.g. `P7 Blue`
- `grade`: `P6 | P7`
- `class_code`
- `created_by`

### Teacher questions

Fields:

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
- `status`: `open | closed`
- `created_at`

### Teacher question submissions

Fields:

- `id`
- `question_id`
- `student_id`
- `answer`
- `submitted_at`
- `status`: `submitted | marked`
- `score`
- `feedback`
- `marked_by`
- `marked_at`

---

## Auth UX should remain the same

Even after backend auth, the UX should stay simple:

- Student signs in and lands on student home.
- Teacher signs in and lands on teacher home.
- Students see only their class/grade.
- Teachers can access dashboard, worksheets, questions, content library and reports.

Backend should not reintroduce clutter.

---

## Important product decision for later

Before implementation, decide:

1. Do schools create accounts themselves, or do we create them manually during pilots?
2. Do students use passwords, class codes, PINs, or teacher-created accounts?
3. Do parents get accounts now, later, or only WhatsApp-style reports first?
4. Is Supabase still the preferred backend, or should we evaluate alternatives?

---

## Trigger to start backend auth

Start this work when:

- UX has been tested on real phones.
- Teacher-set questions/manual marking workflow has been validated with at least one teacher.
- The pilot school needs cross-device student/teacher data.
