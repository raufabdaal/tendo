import Link from "next/link";
import TeacherDashboard from "@/components/TeacherDashboard";

export const metadata = {
  title: "Teacher dashboard — Tendo",
  description: "See what your class has practiced and how they scored.",
};

export default function TeacherPage() {
  return (
    <div className="teacher-page-shell">
      <section className="teacher-hero">
        <div>
          <div className="eyebrow">For teachers</div>
          <h1>Good morning, Teacher. Pick the job.</h1>
          <p className="lead">
            See what needs reteaching, make a worksheet, or copy a parent-friendly update. Plain classroom language first — details second.
          </p>
          <div className="hero-actions">
            <Link href="/teacher/worksheet" className="btn btn-primary">🧾 Make worksheet</Link>
            <Link href="/teacher/content-reports" className="btn btn-secondary">⚠️ Review content issues</Link>
          </div>
        </div>
        <div className="teacher-hero-card">
          <div className="teacher-hero-stat"><strong>22</strong><span>sample learners</span></div>
          <div className="teacher-hero-stat"><strong>64%</strong><span>class average</span></div>
          <div className="teacher-hero-stat"><strong>4</strong><span>topics to re-teach</span></div>
          <div className="teacher-hero-stat"><strong>3</strong><span>papers attempted</span></div>
        </div>
      </section>

      <section className="teacher-task-grid" aria-label="Teacher quick tasks">
        <Link href="#teacher-dashboard" className="teacher-task-card">
          <span>📉</span>
          <strong>What needs reteaching?</strong>
          <p>Open the class summary and find topics with low scores.</p>
        </Link>
        <Link href="/teacher/worksheet" className="teacher-task-card">
          <span>🧾</span>
          <strong>Make a worksheet</strong>
          <p>Choose class, subject, topics and question length.</p>
        </Link>
        <Link href="#teacher-dashboard" className="teacher-task-card">
          <span>💬</span>
          <strong>Parent update</strong>
          <p>Use the dashboard's copy report button for a readable update.</p>
        </Link>
      </section>

      <section className="teacher-content-library">
        <div className="section-heading compact-heading">
          <div>
            <div className="eyebrow">Content library</div>
            <h2>Use the same lessons your learners see</h2>
            <p>Open subjects for lesson inspiration, examples, diagrams and quick checks.</p>
          </div>
          <Link href="/study" className="btn btn-secondary compact">Open full library</Link>
        </div>
        <div className="teacher-subject-strip">
          <Link href="/math/p7" className="teacher-subject-chip accent-math"><span>➗</span><strong>Maths</strong><small>P6 + P7</small></Link>
          <Link href="/english/p7" className="teacher-subject-chip accent-english"><span>📖</span><strong>English</strong><small>Writing ideas</small></Link>
          <Link href="/science/p7" className="teacher-subject-chip accent-science"><span>🔬</span><strong>Science</strong><small>Diagrams</small></Link>
          <Link href="/social-studies/p7" className="teacher-subject-chip accent-sst"><span>🌍</span><strong>SST</strong><small>Maps/history</small></Link>
          <Link href="/re/p7" className="teacher-subject-chip accent-re"><span>🕊️</span><strong>RE</strong><small>CRE/IRE</small></Link>
        </div>
      </section>

      <section id="teacher-dashboard" className="teacher-dashboard-panel">
        <div className="section-heading compact-heading">
          <div>
            <div className="eyebrow">Class dashboard</div>
            <h2>What is happening in class?</h2>
            <p>Load the demo class to see the teacher experience immediately.</p>
          </div>
        </div>
        <TeacherDashboard />
      </section>
    </div>
  );
}
