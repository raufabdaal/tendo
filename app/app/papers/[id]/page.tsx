import Link from "next/link";
import { notFound } from "next/navigation";
import { PAPERS, getPaper } from "@/lib/papers";

export function generateStaticParams() {
  return PAPERS.map((p) => ({ id: p.id }));
}

export default async function PaperCoverPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const paper = getPaper(id);
  if (!paper) notFound();

  return (
    <div className="paper-cover-page">
      <Link href="/papers" className="back">← Papers</Link>
      <section className="compact-page-intro papers-intro-card">
        <div>
          <div className="eyebrow">{paper.examBody} · {paper.year}</div>
          <h1>{paper.paperName}</h1>
          <p className="lead">{paper.questions.length} questions · {paper.totalMarks} marks · {paper.durationMinutes} minutes</p>
        </div>
        <span aria-hidden="true">📝</span>
      </section>

      <div className="paper-action-grid">
        <Link href={`/papers/${paper.id}/attempt`} className="paper-action-card primary-paper-action">
          <span aria-hidden="true">▶️</span>
          <div>
            <strong>Start paper</strong>
            <small>Answer questions and get explanations.</small>
          </div>
        </Link>

        <Link href={`/papers/${paper.id}/browse`} className="paper-action-card">
          <span aria-hidden="true">📚</span>
          <div>
            <strong>Review by topic</strong>
            <small>Browse questions grouped for revision.</small>
          </div>
        </Link>
      </div>
    </div>
  );
}
