import Link from "next/link";
import { notFound } from "next/navigation";
import { PAPERS, getPaper } from "@/lib/papers";
import PaperAttempt from "@/components/PaperAttempt";

export function generateStaticParams() {
  return PAPERS.map((p) => ({ id: p.id }));
}

export default async function PaperAttemptPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const paper = getPaper(id);
  if (!paper) notFound();

  return (
    <div className="paper-attempt-page">
      <Link href={`/papers/${paper.id}`} className="back">← {paper.paperName}</Link>
      <div className="eyebrow">{paper.examBody} · {paper.year}</div>
      <h1>Start paper</h1>

      <PaperAttempt
        paperId={paper.id}
        paperName={paper.paperName}
        questions={paper.questions}
        totalMarks={paper.totalMarks}
      />
    </div>
  );
}
