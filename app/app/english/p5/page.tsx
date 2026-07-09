import Link from "next/link";
import { P5_ENGLISH_TOPICS } from "@/lib/p5-english-topics";

export const metadata = {
  title: "P5 English — Tendo",
  description: "P5 English beta study content on Tendo.",
};

export default function P5EnglishPage() {
  return (
    <div className="subject-list-page">
      <section className="compact-page-intro subject-intro-card">
        <div>
          <div className="eyebrow">P5 · English · Beta</div>
          <h1>English</h1>
        </div>
        <span aria-hidden="true">📖</span>
      </section>
      <div className="topic-card-grid">
        {P5_ENGLISH_TOPICS.map((topic) => (
          <Link key={topic.id} href={`/english/p5/${topic.id}`} className="card topic-card simplified-topic-card">
            <div className="card-title">{topic.title}</div>
            <div className="card-sub">{topic.estMinutes} min · beta</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
