import Link from "next/link";
import { PAPERS } from "@/lib/papers";

export default function PapersIndex() {
  return (
    <div className="papers-page focused-papers-page">
      <section className="compact-page-intro papers-intro-card">
        <div>
          <div className="eyebrow">Past papers</div>
          <h1>PLE practice</h1>
          <p className="lead">Start a paper or review questions by topic.</p>
        </div>
        <span aria-hidden="true">📝</span>
      </section>

      <div className="paper-card-grid polished-paper-grid live-paper-grid">
        {PAPERS.map((p) => (
          <article key={p.id} className="paper-card polished-paper-card live-paper-card">
            <div className="paper-year">{p.year}</div>
            <div>
              <h2>{p.paperName}</h2>
              <p>{p.questions.length} questions · {p.durationMinutes} min</p>
              <div className="paper-card-actions">
                <Link href={`/papers/${p.id}/attempt`} className="btn btn-primary compact">Start</Link>
                <Link href={`/papers/${p.id}/browse`} className="btn btn-secondary compact">Review</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
