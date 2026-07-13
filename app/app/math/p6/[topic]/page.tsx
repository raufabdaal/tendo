import { notFound } from "next/navigation";
import { P6_MATH_TOPICS, getP6MathTopic } from "@/lib/p6-math-topics";
import SharedTopicPage from "@/components/SharedTopicPage";

export function generateStaticParams() { return P6_MATH_TOPICS.map((t) => ({ topic: t.id })); }
export default async function P6MathTopicPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic: topicId } = await params;
  const topic = getP6MathTopic(topicId);
  if (!topic) notFound();
  return <SharedTopicPage topic={topic} backHref="/math/p6" />;
}
