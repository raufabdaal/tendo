import Link from "next/link";
import { notFound } from "next/navigation";
import { P6_MATH_TOPICS, getP6MathTopic } from "@/lib/p6-math-topics";
import { getBank } from "@/lib/question-bank";
import PracticeRunner from "@/components/PracticeRunner";

export function generateStaticParams() {
  return P6_MATH_TOPICS.map((t) => ({ topic: t.id }));
}

export default async function P6MathPracticePage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic: topicId } = await params;
  const topic = getP6MathTopic(topicId);
  if (!topic) notFound();

  const bank = getBank(topicId);

  return (
    <>
      <Link href={`/math/p6/${topic.id}`} className="back">← {topic.title}</Link>
      <div className="eyebrow">Practice</div>
      <h1>{topic.title}</h1>
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
