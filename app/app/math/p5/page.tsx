import Link from "next/link";
import { P5_MATH_TOPICS } from "@/lib/p5-math-topics";

export const metadata = {
  title: "P5 Mathematics — Tendo",
  description: "P5 Mathematics beta study content on Tendo.",
};

export default function P5MathPage() {
  return (
    <div className="subject-list-page">
      <section className="compact-page-intro subject-intro-card">
        <div>
          <div className="eyebrow">P5 · Mathematics · Beta</div>
          <h1>Mathematics</h1>
        </div>
        <span aria-hidden="true">➗</span>
      </section>
      <div className="topic-card-grid">
        {P5_MATH_TOPICS.map((topic) => (
          <Link key={topic.id} href={`/math/p5/${topic.id}`} className="card topic-card simplified-topic-card">
            <div className="card-title">{topic.title}</div>
            <div className="card-sub">{topic.estMinutes} min · beta</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
