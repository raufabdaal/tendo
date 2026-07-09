import Link from "next/link";
import { P5_CRE_TOPICS, P5_IRE_TOPICS } from "@/lib/p5-re-topics";

export const metadata = {
  title: "P5 Religious Education — Tendo",
  description: "P5 Religious Education beta study content on Tendo.",
};

export default function P5ReligiousEducationPage() {
  return (
    <div className="subject-list-page">
      <section className="compact-page-intro subject-intro-card">
        <div>
          <div className="eyebrow">P5 · Religious Education · Beta</div>
          <h1>Religious Education</h1>
        </div>
        <span aria-hidden="true">🕊️</span>
      </section>

      <ReGroup title="CRE" topics={P5_CRE_TOPICS} />
      <ReGroup title="IRE" topics={P5_IRE_TOPICS} />
    </div>
  );
}

function ReGroup({ title, topics }: { title: string; topics: typeof P5_CRE_TOPICS }) {
  return (
    <section className="theme-group strand-section simplified-strand-section">
      <div className="theme-label">{title}</div>
      <div className="topic-card-grid">
        {topics.map((topic) => (
          <Link key={topic.id} href={`/re/p5/${topic.id}`} className="card topic-card simplified-topic-card">
            <div className="card-title">{topic.title}</div>
            <div className="card-sub">{topic.estMinutes} min · beta</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
