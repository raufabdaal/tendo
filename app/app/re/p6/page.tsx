import Link from "next/link";
import { P6_RE_TOPICS } from "@/lib/p6-re-topics";

export default function P6RePage() {
  return (
    <>
      <Link href="/" className="back">← All subjects</Link>
      <div className="eyebrow">P6 · Religious Education</div>
      <h1>Primary Six Religious Education</h1>
      <p className="lead">Christian and Islamic Religious Education foundation topics.</p>
      <div className="topic-card-grid" style={{ marginTop: 24 }}>
        {P6_RE_TOPICS.map((t) => (
          <Link key={t.id} href={`/re/p6/${t.id}`} className="card topic-card">
            <div className="card-title">{t.title}</div>
            <div className="card-sub">{t.estMinutes} mins · {t.quiz.length} questions</div>
          </Link>
        ))}
      </div>
    </>
  );
}
