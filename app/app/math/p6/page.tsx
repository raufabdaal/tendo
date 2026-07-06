import Link from "next/link";
import { P6_MATH_TOPICS } from "@/lib/p6-math-topics";

export default function P6MathPage() {
  return (
    <div className="subject-list-page">
      <section className="compact-page-intro subject-intro-card">
        <div>
          <div className="eyebrow">P6 · Mathematics</div>
          <h1>Mathematics</h1>
        </div>
        <span aria-hidden="true">➗</span>
      </section>
      <div className="topic-card-grid">
        {P6_MATH_TOPICS.map((topic) => (
          <Link key={topic.id} href={`/math/p6/${topic.id}`} className="card topic-card simplified-topic-card">
            <div className="card-title">{topic.title}</div>
            <div className="card-sub">{topic.estMinutes} min</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
