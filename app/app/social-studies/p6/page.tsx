import Link from "next/link";
import { P6_SOCIAL_TOPICS } from "@/lib/p6-social-topics";

export default function P6SocialPage() {
  return (
    <>
      <Link href="/" className="back">← All subjects</Link>
      <div className="eyebrow">P6 · Social Studies</div>
      <h1>People and Resources of East Africa</h1>
      <p className="lead">Primary Six SST focusing specifically on the East African Community region.</p>
      <div className="topic-card-grid" style={{ marginTop: 24 }}>
        {P6_SOCIAL_TOPICS.map((t) => (
          <Link key={t.id} href={`/social-studies/p6/${t.id}`} className="card topic-card">
            <div className="card-title">{t.title}</div>
            <div className="card-sub">{t.estMinutes} mins · {t.quiz.length} questions</div>
          </Link>
        ))}
      </div>
    </>
  );
}
