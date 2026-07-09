import Link from "next/link";
import { P4_MATH_TOPICS } from "@/lib/p4-math-topics";

export const metadata = {
  title: "P4 Mathematics — Tendo",
  description: "P4 Mathematics beta study content on Tendo.",
};

export default function P4MathPage() {
  return (
    <div className="subject-list-page">
      <section className="compact-page-intro subject-intro-card">
        <div>
          <div className="eyebrow">P4 · Mathematics · Beta</div>
          <h1>Mathematics</h1>
          <p className="lead">Built from the verified NCDC Primary Four Mathematics syllabus. Use for beta review before premium-final release.</p>
        </div>
        <span aria-hidden="true">➗</span>
      </section>
      <div className="topic-card-grid">
        {P4_MATH_TOPICS.map((topic) => (
          <Link key={topic.id} href={`/math/p4/${topic.id}`} className="card topic-card simplified-topic-card">
            <div className="card-title">{topic.title}</div>
            <div className="card-sub">{topic.estMinutes} min · beta</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
