import Link from "next/link";
import { P6_MATH_TOPICS } from "@/lib/p6-math-topics";
import LearnerBanner from "@/components/LearnerBanner";

export default function P6MathPage() {
  return (
    <>
      <Link href="/p6-home" className="back">← P6 Subjects</Link>
      <LearnerBanner activeLevel="P6" subject="math" />
      <div className="eyebrow">P6 · Mathematics</div>
      <h1>Primary Six Mathematics</h1>
      <p className="lead">Foundation upper-primary mathematics covering sets, whole numbers, fractions, and simple geometry.</p>
      <div className="topic-card-grid" style={{ marginTop: 24 }}>
        {P6_MATH_TOPICS.map((t) => (
          <Link key={t.id} href={`/math/p6/${t.id}`} className="card topic-card">
            <div className="card-title">{t.title}</div>
            <div className="card-sub">{t.estMinutes} mins · {t.quiz.length} questions</div>
          </Link>
        ))}
      </div>
    </>
  );
}
