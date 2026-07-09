import Link from "next/link";
import { P4_SCIENCE_TOPICS } from "@/lib/p4-science-topics";

export const metadata = {
  title: "P4 Integrated Science — Tendo",
  description: "P4 Integrated Science beta study content on Tendo.",
};

export default function P4SciencePage() {
  return (
    <div className="subject-list-page">
      <section className="compact-page-intro subject-intro-card">
        <div>
          <div className="eyebrow">P4 · Integrated Science · Beta</div>
          <h1>Integrated Science</h1>
          <p className="lead">P4 science lessons built from the NCDC Primary Four Integrated Science syllabus.</p>
        </div>
        <span aria-hidden="true">🔬</span>
      </section>
      <div className="topic-card-grid">
        {P4_SCIENCE_TOPICS.map((topic) => (
          <Link key={topic.id} href={`/science/p4/${topic.id}`} className="card topic-card simplified-topic-card">
            <div className="card-title">{topic.title}</div>
            <div className="card-sub">{topic.estMinutes} min · beta</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
