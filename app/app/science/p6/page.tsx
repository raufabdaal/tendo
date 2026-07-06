import Link from "next/link";
import { P6_SCIENCE_TOPICS } from "@/lib/p6-science-topics";

export default function P6SciencePage() {
  return (
    <>
      <Link href="/" className="back">← All subjects</Link>
      <div className="eyebrow">P6 · Integrated Science</div>
      <h1>Primary Six Integrated Science</h1>
      <p className="lead">Diversity of living things, sound energy, circulation, respiration, and livestock.</p>
      <div className="topic-card-grid" style={{ marginTop: 24 }}>
        {P6_SCIENCE_TOPICS.map((t) => (
          <Link key={t.id} href={`/science/p6/${t.id}`} className="card topic-card">
            <div className="card-title">{t.title}</div>
            <div className="card-sub">{t.estMinutes} mins · {t.quiz.length} questions</div>
          </Link>
        ))}
      </div>
    </>
  );
}
