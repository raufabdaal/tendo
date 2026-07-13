import { notFound } from "next/navigation";
import { P6_RE_TOPICS, getP6ReTopic } from "@/lib/p6-re-topics";
import SharedTopicPage from "@/components/SharedTopicPage";

export function generateStaticParams() { return P6_RE_TOPICS.map((t) => ({ topic: t.id })); }
export default async function P6ReTopicPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic: topicId } = await params;
  const topic = getP6ReTopic(topicId);
  if (!topic) notFound();
  return <SharedTopicPage topic={topic} backHref="/re/p6" />;
}
