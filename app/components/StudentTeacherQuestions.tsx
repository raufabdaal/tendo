"use client";

import { useEffect, useMemo, useState } from "react";
import { getSession } from "@/lib/auth-session";
import {
  listTeacherQuestions,
  listTeacherQuestionSubmissions,
  makeId,
  saveTeacherQuestionSubmissions,
  type TeacherQuestion,
  type TeacherQuestionSubmission,
} from "@/lib/teacher-questions";

export default function StudentTeacherQuestions() {
  const [questions, setQuestions] = useState<TeacherQuestion[]>([]);
  const [submissions, setSubmissions] = useState<TeacherQuestionSubmission[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [loaded, setLoaded] = useState(false);

  const session = typeof window !== "undefined" ? getSession() : null;
  const grade = session?.grade ?? "P7";
  const studentName = session?.name || "Student";

  useEffect(() => {
    setQuestions(listTeacherQuestions().filter((q) => q.status === "open"));
    setSubmissions(listTeacherQuestionSubmissions());
    setLoaded(true);
  }, []);

  const visibleQuestions = useMemo(() => questions.filter((q) => q.grade === grade), [questions, grade]);

  function existingSubmission(questionId: string) {
    return submissions.find((submission) => submission.questionId === questionId && submission.studentName === studentName);
  }

  function submitAnswer(question: TeacherQuestion) {
    const answer = (answers[question.id] ?? "").trim();
    if (!answer) {
      alert("Write your answer first.");
      return;
    }

    const existing = existingSubmission(question.id);
    let next: TeacherQuestionSubmission[];
    if (existing && existing.status !== "marked") {
      next = submissions.map((submission) => submission.id === existing.id ? {
        ...submission,
        answer,
        submittedAt: new Date().toISOString(),
      } : submission);
    } else {
      next = [{
        id: makeId("tqs"),
        questionId: question.id,
        studentName,
        answer,
        submittedAt: new Date().toISOString(),
        status: "submitted",
      }, ...submissions];
    }

    setSubmissions(next);
    saveTeacherQuestionSubmissions(next);
    setAnswers((prev) => ({ ...prev, [question.id]: "" }));
  }

  if (!loaded) return <div className="dash-empty">Loading questions…</div>;

  return (
    <div className="student-teacher-questions">
      <section className="compact-page-intro practice-intro-card">
        <div>
          <div className="eyebrow">Teacher questions · {grade}</div>
          <h1>Questions from your teacher</h1>
          <p className="lead">Write your answer. Your teacher can mark it later.</p>
        </div>
        <span aria-hidden="true">📝</span>
      </section>

      {visibleQuestions.length === 0 ? (
        <div className="dash-empty"><strong>No teacher questions yet</strong>Check back after your teacher sets one.</div>
      ) : (
        <div className="teacher-question-student-list">
          {visibleQuestions.map((question) => {
            const submission = existingSubmission(question.id);
            const marked = submission?.status === "marked";
            return (
              <article key={question.id} className="teacher-question-card student-question-card">
                <div className="teacher-question-card-head">
                  <div>
                    <span className="pill-start">{question.subject} · {question.marks} marks</span>
                    <h2>{question.title}</h2>
                  </div>
                  {submission && <span className={marked ? "status-open" : "status-closed"}>{marked ? "marked" : "submitted"}</span>}
                </div>
                <p>{question.prompt}</p>
                {marked ? (
                  <div className="marked-answer-box">
                    <strong>Score: {submission.score ?? "—"}/{question.marks}</strong>
                    {submission.feedback && <p>{submission.feedback}</p>}
                    <small>Your answer: {submission.answer}</small>
                  </div>
                ) : (
                  <>
                    {submission && <div className="feedback"><strong>Submitted.</strong> You can update your answer before it is marked.</div>}
                    <label className="working-space">
                      <span>Your answer</span>
                      <textarea
                        value={answers[question.id] ?? submission?.answer ?? ""}
                        onChange={(e) => setAnswers((prev) => ({ ...prev, [question.id]: e.target.value }))}
                        placeholder="Write your answer here."
                      />
                    </label>
                    <button type="button" className="btn btn-primary btn-block" onClick={() => submitAnswer(question)}>
                      Submit answer
                    </button>
                  </>
                )}
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
