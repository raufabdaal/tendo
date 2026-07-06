import Link from "next/link";
import { notFound } from "next/navigation";
import PracticeRunner from "@/components/PracticeRunner";
import { RE_TOPICS, getReTopic } from "@/lib/re-topics";
import { getBank } from "@/lib/question-bank";

export async function generateStaticParams() {
  return RE_TOPICS.map((topic) => ({ topic: topic.id }));
}

export default async function RePracticePage({ params }: { params: Promise<{ topic: string }> }) {
  const resolved = await params;
  const topic = getReTopic(resolved.topic);
  if (!topic) notFound();

  const bank = getBank(resolved.topic);

  return (
    <>
      <div className="topic-header">
        <Link href={`/re/p7/${topic.id}`} className="back">← Back to {topic.title}</Link>
        <div className="eyebrow">P7 · Religious Education · Endless Practice</div>
        <h1>Practising {topic.title}</h1>
        <p className="lead" style={{ marginTop: 8 }}>
          Random 5-question sessions drawn from verified PLE examination patterns.
          {bank ? ` Drawing from ${bank.questions.length} questions.` : ""}
        </p>
      </div>

      <PracticeRunner topicId={topic.id} topicTitle={topic.title} backHref={`/re/p7/${topic.id}`} />
    </>
  );
}
