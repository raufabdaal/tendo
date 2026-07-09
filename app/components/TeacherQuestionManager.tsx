"use client";

import { useEffect, useMemo, useState } from "react";
import {
  listTeacherQuestions,
  listTeacherQuestionSubmissions,
  makeId,
  saveTeacherQuestions,
  saveTeacherQuestionSubmissions,
  type TeacherQuestion,
  type TeacherQuestionSubmission,
} from "@/lib/teacher-questions";

const SUBJECTS = ["Mathematics", "English", "Integrated Science", "Social Studies", "Religious Education"];

export default function TeacherQuestionManager() {
  const [questions, setQuestions] = useState<TeacherQuestion[]>([]);
  const [submissions, setSubmissions] = useState<TeacherQuestionSubmission[]>([]);
  const [grade, setGrade] = useState<"P4" | "P5" | "P6" | "P7">("P7");
  const [subject, setSubject] = useState("Mathematics");
  const [title, setTitle] = useState("");
  const [prompt, setPrompt] = useState("");
  const [marks, setMarks] = useState(5);
  const [markingGuide, setMarkingGuide] = useState("");

  useEffect(() => {
    setQuestions(listTeacherQuestions());
    setSubmissions(listTeacherQuestionSubmissions());
  }, []);

  function persistQuestions(next: TeacherQuestion[]) {
    setQuestions(next);
    saveTeacherQuestions(next);
  }

  function persistSubmissions(next: TeacherQuestionSubmission[]) {
    setSubmissions(next);
    saveTeacherQuestionSubmissions(next);
  }

  function createQuestion() {
    if (!prompt.trim()) {
      alert("Write the question first.");
      return;
    }

    const nextQuestion: TeacherQuestion = {
      id: makeId("tq"),
      title: title.trim() || subject,
      prompt: prompt.trim(),
      grade,
      subject,
      marks,
      markingGuide: markingGuide.trim() || undefined,
      status: "open",
      createdAt: new Date().toISOString(),
    };

    persistQuestions([nextQuestion, ...questions]);
    setTitle("");
    setPrompt("");
    setMarkingGuide("");
    setMarks(5);
  }

  function toggleStatus(id: string) {
    persistQuestions(questions.map((q) => q.id === id ? { ...q, status: q.status === "open" ? "closed" : "open" } : q));
  }

  function deleteQuestion(id: string) {
    if (!confirm("Delete this question and its submitted answers?")) return;
    persistQuestions(questions.filter((q) => q.id !== id));
    persistSubmissions(submissions.filter((s) => s.questionId !== id));
  }

  function markSubmission(id: string, scoreValue: string, feedback: string) {
    const score = Number(scoreValue);
    if (Number.isNaN(score)) return;
    persistSubmissions(submissions.map((submission) => submission.id === id ? {
      ...submission,
      score,
      feedback: feedback.trim() || undefined,
      status: "marked",
      markedAt: new Date().toISOString(),
    } : submission));
  }

  const submissionsByQuestion = useMemo(() => {
    const map = new Map<string, TeacherQuestionSubmission[]>();
    for (const submission of submissions) {
      const existing = map.get(submission.questionId) ?? [];
      existing.push(submission);
      map.set(submission.questionId, existing);
    }
    return map;
  }, [submissions]);

  return (
    <div className="teacher-question-manager">
      <section className="teacher-question-form">
        <div className="worksheet-step-head">
          <h2>Set a question</h2>
          <span>Manual marking</span>
        </div>

        <div className="generator-controls compact-controls">
          <label className="ctl">
            <span>Class</span>
            <select value={grade} onChange={(e) => setGrade(e.target.value as "P4" | "P5" | "P6" | "P7")} className="num-input">
              <option value="P7">P7</option>
              <option value="P6">P6</option>
              <option value="P5">P5</option>
              <option value="P4">P4</option>
            </select>
          </label>
          <label className="ctl">
            <span>Subject</span>
            <select value={subject} onChange={(e) => setSubject(e.target.value)} className="num-input">
              {SUBJECTS.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
          </label>
          <label className="ctl">
            <span>Marks</span>
            <input type="number" min={1} max={100} value={marks} onChange={(e) => setMarks(Math.max(1, Number(e.target.value) || 1))} className="num-input" />
          </label>
        </div>

        <label className="ctl">
          <span>Short title</span>
          <input value={title} onChange={(e) => setTitle(e.target.value)} className="text-input" placeholder="e.g. Fractions word problem" />
        </label>

        <label className="ctl">
          <span>Question</span>
          <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} className="teacher-question-textarea" placeholder="Write the question learners should answer." />
        </label>

        <label className="ctl">
          <span>Marking guide <em>(optional)</em></span>
          <textarea value={markingGuide} onChange={(e) => setMarkingGuide(e.target.value)} className="teacher-question-textarea small" placeholder="What should a good answer include?" />
        </label>

        <button type="button" className="btn btn-primary btn-block" onClick={createQuestion}>Save question</button>
      </section>

      <section className="teacher-question-list">
        <h2>Questions you set</h2>
        {questions.length === 0 ? (
          <div className="dash-empty"><strong>No questions yet</strong>Set your first question above.</div>
        ) : (
          questions.map((question) => {
            const related = submissionsByQuestion.get(question.id) ?? [];
            return (
              <article key={question.id} className="teacher-question-card">
                <div className="teacher-question-card-head">
                  <div>
                    <span className="pill-start">{question.grade} · {question.subject}</span>
                    <h3>{question.title}</h3>
                  </div>
                  <span className={question.status === "open" ? "status-open" : "status-closed"}>{question.status}</span>
                </div>
                <p>{question.prompt}</p>
                {question.markingGuide && <div className="marking-guide"><strong>Guide:</strong> {question.markingGuide}</div>}
                <div className="teacher-question-actions">
                  <button type="button" className="btn btn-secondary compact" onClick={() => toggleStatus(question.id)}>{question.status === "open" ? "Close" : "Re-open"}</button>
                  <button type="button" className="btn btn-secondary compact" onClick={() => deleteQuestion(question.id)}>Delete</button>
                  <span>{related.length} answer{related.length === 1 ? "" : "s"}</span>
                </div>

                {related.length > 0 && (
                  <div className="submission-list">
                    {related.map((submission) => (
                      <SubmissionMarker key={submission.id} submission={submission} question={question} onSave={markSubmission} />
                    ))}
                  </div>
                )}
              </article>
            );
          })
        )}
      </section>
    </div>
  );
}

function SubmissionMarker({
  submission,
  question,
  onSave,
}: {
  submission: TeacherQuestionSubmission;
  question: TeacherQuestion;
  onSave: (id: string, score: string, feedback: string) => void;
}) {
  const [score, setScore] = useState(String(submission.score ?? ""));
  const [feedback, setFeedback] = useState(submission.feedback ?? "");

  return (
    <div className="submission-card">
      <div className="submission-card-head">
        <strong>{submission.studentName || "Student"}</strong>
        <span>{submission.status === "marked" ? `Marked${submission.score !== undefined ? ` · ${submission.score}/${question.marks}` : ""}` : "Needs marking"}</span>
      </div>
      <p>{submission.answer}</p>
      <div className="submission-mark-row">
        <input value={score} onChange={(e) => setScore(e.target.value)} placeholder={`/${question.marks}`} className="num-input" />
        <input value={feedback} onChange={(e) => setFeedback(e.target.value)} placeholder="Feedback" className="text-input" />
        <button type="button" className="btn btn-primary compact" onClick={() => onSave(submission.id, score, feedback)}>Save mark</button>
      </div>
    </div>
  );
}
