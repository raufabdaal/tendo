# Authentication + Backend Roadmap — updated after student-first pivot

*Original auth scaffold: 2026-07-07. Strategic update: 2026-07-09.*

## Why this matters

The current app has a role-based sign-in experience, teacher-set questions, student written answers and manual marking. These workflows are currently **local/device-only** so we can test the UX quickly.

Before real public use, this must become real backend authentication and synced data.

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

## Strategic update — student-first

Tendo is no longer waiting for a school pilot. The backend should be designed for **direct student accounts first**.

Schools/organisations can be added later as optional grouping and distribution channels, but the core backend should not require a school to exist before a learner can use Tendo.

---

## When we are ready for real auth

We need real accounts for:

- students
- teachers/tutors
- parents/guardians later
- optional schools/learning centres later

The backend must support:

1. Student progress sync across devices.
2. Teacher/tutor-created questions visible to assigned learners or groups.
3. Student written submissions.
4. Teacher manual marking and feedback.
5. Parent/guardian progress visibility or shareable reports later.
6. Optional class/group dashboards.

---

## Recommended first backend shape

### Tables / collections

- `users`
- `learner_profiles`
- `teacher_profiles`
- `learning_groups` optional
- `group_memberships` optional
- `topic_progress`
- `paper_attempts`
- `teacher_questions`
- `teacher_question_submissions`
- `content_reports`
- `guardian_links` later
- `organisations` later optional

### Users

Fields:

- `id`
- `role`: `student | teacher | parent | admin`
- `name`
- `phone_or_email`
- `created_at`

### Learner profiles

Fields:

- `user_id`
- `grade`: `P6 | P7`
- `display_name`
- `created_at`

### Learning groups optional

Groups are useful for teachers/tutors/classes but should not be required for solo learners.

Fields:

- `id`
- `name` e.g. `P7 Saturday Maths`
- `grade`: `P6 | P7 | mixed`
- `owner_teacher_id`
- `organisation_id` optional
- `join_code`
- `created_at`

### Teacher questions

Fields:

- `id`
- `teacher_id`
- `group_id` optional
- `learner_id` optional
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
- Teachers/tutors can access dashboard, worksheets, questions, content library and reports.
- Solo students should not be blocked by school/class setup.

Backend should not reintroduce clutter.

---

## Important product decisions for later

Before implementation, decide:

1. Student login method: phone, email, PIN, magic link, Google, or parent-assisted account?
2. Teacher/tutor login method.
3. Should teacher-set questions be assigned to groups, individual learners, public class codes, or all three?
4. Do parents get accounts now, later, or only shareable reports first?
5. Is Supabase still the preferred backend, or should we evaluate alternatives?

---

## Trigger to start backend auth

Start this work when:

- UX has been tested on real phones.
- Student-first home/study/practice flow feels stable.
- Teacher-set questions/manual marking workflow has been validated locally.
- We need cross-device student/teacher data.
