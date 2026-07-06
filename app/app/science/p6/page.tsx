import Link from "next/link";
import { P6_SCIENCE_TOPICS } from "@/lib/p6-science-topics";

export default function P6SciencePage() {
  return (
    <div className="subject-list-page">
      <section className="compact-page-intro subject-intro-card">
        <div>
          <div className="eyebrow">P6 · Integrated Science</div>
          <h1>Science</h1>
        </div>
        <span aria-hidden="true">🔬</span>
      </section>
      <div className="topic-card-grid">
        {P6_SCIENCE_TOPICS.map((topic) => (
          <Link key={topic.id} href={`/science/p6/${topic.id}`} className="card topic-card simplified-topic-card">
            <div className="card-title">{topic.title}</div>
            <div className="card-sub">{topic.estMinutes} min</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
