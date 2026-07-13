import { notFound } from "next/navigation";
import { P5_RE_TOPICS, getP5ReTopic } from "@/lib/p5-re-topics";
import SharedTopicPage from "@/components/SharedTopicPage";

export function generateStaticParams() { return P5_RE_TOPICS.map((t) => ({ topic: t.id })); }
export default async function P5ReTopicPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic: topicId } = await params;
  const topic = getP5ReTopic(topicId);
  if (!topic) notFound();
  return <SharedTopicPage topic={topic} backHref="/re/p5" />;
}
