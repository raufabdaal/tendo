import Link from "next/link";
import { P4_ENGLISH_TOPICS } from "@/lib/p4-english-topics";

export const metadata = {
  title: "P4 English — Tendo",
  description: "P4 English beta study content on Tendo.",
};

export default function P4EnglishPage() {
  return (
    <div className="subject-list-page">
      <section className="compact-page-intro subject-intro-card">
        <div>
          <div className="eyebrow">P4 · English · Beta</div>
          <h1>English</h1>
          <p className="lead">Transition-year English built from the official NCDC Primary Four English syllabus.</p>
        </div>
        <span aria-hidden="true">📖</span>
      </section>
      <div className="topic-card-grid">
        {P4_ENGLISH_TOPICS.map((topic) => (
          <Link key={topic.id} href={`/english/p4/${topic.id}`} className="card topic-card simplified-topic-card">
            <div className="card-title">{topic.title}</div>
            <div className="card-sub">{topic.estMinutes} min · beta</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
