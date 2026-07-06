import Link from "next/link";
import { PAPERS } from "@/lib/papers";

export default function PapersIndex() {
  return (
    <div className="papers-page">
      <section className="study-hero papers-hero">
        <div>
          <div className="eyebrow">UNEB · Past papers</div>
          <h1>Past PLE Mathematics papers</h1>
          <p className="lead">
            One paper, two simple uses: learners attempt it; teachers browse by topic or print sections.
          </p>
        </div>
        <div className="study-hero-badge" aria-hidden="true">📝</div>
      </section>

      <div className="paper-use-grid">
        <div className="paper-use-card learner-use">
          <span>🎓</span>
          <strong>Learner mode</strong>
          <p>Attempt questions, get marked, read explanations.</p>
        </div>
        <div className="paper-use-card teacher-use">
          <span>👩🏾‍🏫</span>
          <strong>Teacher mode</strong>
          <p>Browse by topic, discuss in class, print selected questions.</p>
        </div>
      </div>

      <div className="section-heading">
        <div>
          <div className="eyebrow">Available</div>
          <h2>Choose a paper</h2>
        </div>
      </div>

      <div className="paper-card-grid">
        {PAPERS.map((p) => (
          <Link key={p.id} href={`/papers/${p.id}`} className="paper-card">
            <div className="paper-year">{p.year}</div>
            <div>
              <h2>{p.paperName}</h2>
              <p>{p.examBody} · {p.questions.length} questions · {p.totalMarks} marks · {p.durationMinutes} minutes</p>
              <span className="pill-start">Open paper →</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="card card-disabled playful-disabled-card">
        <div className="card-row">
          <div>
            <div className="card-title">PLE Mathematics 2021, 2022, 2023</div>
            <div className="card-sub">More papers coming as content is reviewed.</div>
          </div>
          <span className="badge badge-phase">Coming</span>
        </div>
      </div>

      <div className="foot">
        Papers are based on the UNEB syllabus and structure. Full original-paper arrangements can be formalised later.
      </div>
    </div>
  );
}
