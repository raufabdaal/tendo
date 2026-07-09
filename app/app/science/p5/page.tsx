import Link from "next/link";
import { P5_SCIENCE_TOPICS } from "@/lib/p5-science-topics";

export const metadata = {
  title: "P5 Science — Tendo",
  description: "P5 Integrated Science beta study content on Tendo.",
};

export default function P5SciencePage() {
  return (
    <div className="subject-list-page">
      <section className="compact-page-intro subject-intro-card">
        <div>
          <div className="eyebrow">P5 · Integrated Science · Beta</div>
          <h1>Science</h1>
        </div>
        <span aria-hidden="true">🔬</span>
      </section>
      <div className="topic-card-grid">
        {P5_SCIENCE_TOPICS.map((topic) => (
          <Link key={topic.id} href={`/science/p5/${topic.id}`} className="card topic-card simplified-topic-card">
            <div className="card-title">{topic.title}</div>
            <div className="card-sub">{topic.estMinutes} min · beta</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
