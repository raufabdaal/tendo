import Link from "next/link";
import { PAPERS } from "@/lib/papers";

export default function PapersIndex() {
  return (
    <div className="papers-page focused-papers-page">
      <section className="compact-page-intro papers-intro-card">
        <div>
          <div className="eyebrow">UNEB · Past papers</div>
          <h1>Past papers</h1>
          <p className="lead">Choose one paper. Attempt it, revise it, or open topic sections.</p>
        </div>
        <span aria-hidden="true">📝</span>
      </section>

      <div className="paper-card-grid polished-paper-grid">
        {PAPERS.map((p) => (
          <Link key={p.id} href={`/papers/${p.id}`} className="paper-card polished-paper-card">
            <div className="paper-year">{p.year}</div>
            <div>
              <h2>{p.paperName}</h2>
              <p>{p.questions.length} questions · {p.totalMarks} marks · {p.durationMinutes} minutes</p>
              <span className="pill-start">Open paper →</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="card card-disabled playful-disabled-card compact-disabled-card">
        <div className="card-row">
          <div>
            <div className="card-title">More PLE Mathematics papers</div>
            <div className="card-sub">Coming as content is reviewed.</div>
          </div>
          <span className="badge badge-phase">Coming</span>
        </div>
      </div>
    </div>
  );
}
