import { notFound } from "next/navigation";
import { P4_RE_TOPICS, getP4ReTopic } from "@/lib/p4-re-topics";
import SharedTopicPage from "@/components/SharedTopicPage";

export function generateStaticParams() { return P4_RE_TOPICS.map((t) => ({ topic: t.id })); }
export default async function P4ReTopicPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic: topicId } = await params;
  const topic = getP4ReTopic(topicId);
  if (!topic) notFound();
  return <SharedTopicPage topic={topic} backHref="/re/p4" />;
}
