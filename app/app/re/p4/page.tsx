import Link from "next/link";
import { P4_RE_TOPICS } from "@/lib/p4-re-topics";

export const metadata = {
  title: "P4 Religious Education — Tendo",
  description: "P4 Religious Education beta study content on Tendo.",
};

export default function P4RePage() {
  const cre = P4_RE_TOPICS.filter((topic) => topic.themeId === "p4-cre");
  const ire = P4_RE_TOPICS.filter((topic) => topic.themeId === "p4-ire");

  return (
    <div className="subject-list-page">
      <section className="compact-page-intro subject-intro-card">
        <div>
          <div className="eyebrow">P4 · Religious Education · Beta</div>
          <h1>Religious Education</h1>
          <p className="lead">CRE and IRE mapped from the NCDC/MoES Primary 4 Abridged Curriculum. Full standard syllabus confirmation still required before premium-final status.</p>
        </div>
        <span aria-hidden="true">🕊️</span>
      </section>

      <section className="teacher-library-section">
        <div className="section-heading compact-heading"><div><div className="eyebrow">CRE</div><h2>Christian Religious Education</h2></div></div>
        <div className="topic-card-grid">
          {cre.map((topic) => (
            <Link key={topic.id} href={`/re/p4/${topic.id}`} className="card topic-card simplified-topic-card">
              <div className="card-title">{topic.title}</div>
              <div className="card-sub">{topic.estMinutes} min · beta</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="teacher-library-section">
        <div className="section-heading compact-heading"><div><div className="eyebrow">IRE</div><h2>Islamic Religious Education</h2></div></div>
        <div className="topic-card-grid">
          {ire.map((topic) => (
            <Link key={topic.id} href={`/re/p4/${topic.id}`} className="card topic-card simplified-topic-card">
              <div className="card-title">{topic.title}</div>
              <div className="card-sub">{topic.estMinutes} min · beta</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
