import Link from "next/link";
import { P6_ENGLISH_TOPICS } from "@/lib/p6-english-topics";

export default function P6EnglishPage() {
  return (
    <div className="subject-list-page">
      <section className="compact-page-intro subject-intro-card">
        <div>
          <div className="eyebrow">P6 · English Language</div>
          <h1>English</h1>
        </div>
        <span aria-hidden="true">📖</span>
      </section>
      <div className="topic-card-grid">
        {P6_ENGLISH_TOPICS.map((topic) => (
          <Link key={topic.id} href={`/english/p6/${topic.id}`} className="card topic-card simplified-topic-card">
            <div className="card-title">{topic.title}</div>
            <div className="card-sub">{topic.estMinutes} min</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
