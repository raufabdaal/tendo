import Link from "next/link";
import { P6_ENGLISH_TOPICS } from "@/lib/p6-english-topics";
import LearnerBanner from "@/components/LearnerBanner";

export default function P6EnglishPage() {
  return (
    <>
      <Link href="/p6-home" className="back">← P6 Subjects</Link>
      <LearnerBanner activeLevel="P6" subject="english" />
      <div className="eyebrow">P6 · English Language</div>
      <h1>Primary Six English Language</h1>
      <p className="lead">Functional grammar, road safety, debating, and situational vocabulary.</p>
      <div className="topic-card-grid" style={{ marginTop: 24 }}>
        {P6_ENGLISH_TOPICS.map((t) => (
          <Link key={t.id} href={`/english/p6/${t.id}`} className="card topic-card">
            <div className="card-title">{t.title}</div>
            <div className="card-sub">{t.estMinutes} mins · {t.quiz.length} questions</div>
          </Link>
        ))}
      </div>
    </>
  );
}
