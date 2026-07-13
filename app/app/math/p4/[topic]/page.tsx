import { notFound } from "next/navigation";
import { P4_MATH_TOPICS, getP4MathTopic } from "@/lib/p4-math-topics";
import SharedTopicPage from "@/components/SharedTopicPage";

export function generateStaticParams() { return P4_MATH_TOPICS.map((t) => ({ topic: t.id })); }
export default async function P4MathTopicPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic: topicId } = await params;
  const topic = getP4MathTopic(topicId);
  if (!topic) notFound();
  return <SharedTopicPage topic={topic} backHref="/math/p4" />;
}
