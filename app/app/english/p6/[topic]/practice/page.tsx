import Link from "next/link";
import { notFound } from "next/navigation";
import { P6_ENGLISH_TOPICS, getP6EnglishTopic } from "@/lib/p6-english-topics";
import { getBank } from "@/lib/question-bank";
import PracticeRunner from "@/components/PracticeRunner";

export function generateStaticParams() {
  return P6_ENGLISH_TOPICS.map((t) => ({ topic: t.id }));
}

export default async function P6EnglishPracticePage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic: topicId } = await params;
  const topic = getP6EnglishTopic(topicId);
  if (!topic) notFound();

  const bank = getBank(topicId);

  return (
    <>
      <Link href={`/english/p6/${topic.id}`} className="back">← {topic.title}</Link>
      <div className="eyebrow">{topic.themeName} · Endless practice</div>
      <h1>Practice: {topic.title}</h1>
      <p className="lead">
        Different question every time. Track your streak. Stop whenever you like.
        {bank ? ` Drawing from ${bank.questions.length} questions.` : ""}
      </p>

      {!bank ? (
        <div className="dash-empty">
          <strong>No practice bank for this topic yet.</strong>
          The standard quiz on the topic page still works.
        </div>
      ) : (
        <PracticeRunner topicId={topic.id} topicTitle={topic.title} />
      )}
    </>
  );
}
