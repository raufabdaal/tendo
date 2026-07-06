import Link from "next/link";
import TeacherDashboard from "@/components/TeacherDashboard";

export const metadata = {
  title: "Teacher dashboard — Tendo",
  description: "See class progress, create work, and mark teacher-set questions.",
};

export default function TeacherPage() {
  return (
    <div className="teacher-page-shell simplified-teacher-home">
      <section className="compact-page-intro teacher-content-intro teacher-home-intro">
        <div>
          <div className="eyebrow">Teacher home</div>
          <h1>What do you want to do?</h1>
          <p className="lead">Pick one job. More tools are in the menu.</p>
        </div>
        <span aria-hidden="true">👩🏾‍🏫</span>
      </section>

      <section className="teacher-task-grid simplified-teacher-actions" aria-label="Teacher quick tasks">
        <Link href="#teacher-dashboard" className="teacher-task-card">
          <span>📉</span>
          <strong>Class progress</strong>
          <p>See who needs help.</p>
        </Link>
        <Link href="/teacher/worksheet" className="teacher-task-card">
          <span>🧾</span>
          <strong>Make worksheet</strong>
          <p>Print or copy work.</p>
        </Link>
        <Link href="/teacher/questions" className="teacher-task-card">
          <span>✍️</span>
          <strong>Set question</strong>
          <p>Write and mark your own.</p>
        </Link>
      </section>

      <section id="teacher-dashboard" className="teacher-dashboard-panel simplified-dashboard-panel">
        <TeacherDashboard />
      </section>
    </div>
  );
}
