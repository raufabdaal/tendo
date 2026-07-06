import Link from "next/link";
import TeacherQuestionManager from "@/components/TeacherQuestionManager";

export const metadata = {
  title: "Set questions — Tendo",
  description: "Let teachers set questions for learners and mark answers manually.",
};

export default function TeacherQuestionsPage() {
  return (
    <div className="teacher-questions-page">
      <Link href="/teacher" className="back">← Teacher home</Link>
      <section className="compact-page-intro teacher-content-intro">
        <div>
          <div className="eyebrow">Teacher questions</div>
          <h1>Set questions</h1>
          <p className="lead">Write your own question. Learners answer in Practice. You mark it yourself.</p>
        </div>
        <span aria-hidden="true">✍️</span>
      </section>
      <TeacherQuestionManager />
    </div>
  );
}
