import { notFound } from "next/navigation";
import { P5_MATH_TOPICS, getP5MathTopic } from "@/lib/p5-math-topics";
import SharedTopicPage from "@/components/SharedTopicPage";

export function generateStaticParams() { return P5_MATH_TOPICS.map((t) => ({ topic: t.id })); }
export default async function P5MathTopicPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic: topicId } = await params;
  const topic = getP5MathTopic(topicId);
  if (!topic) notFound();
  return <SharedTopicPage topic={topic} backHref="/math/p5" />;
}
