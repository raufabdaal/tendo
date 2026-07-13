import { notFound } from "next/navigation";
import { RE_TOPICS, getReTopic } from "@/lib/re-topics";
import SharedTopicPage from "@/components/SharedTopicPage";

export function generateStaticParams() {
  return RE_TOPICS.map((t) => ({ topic: t.id }));
}

export default async function ReTopicPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic: topicId } = await params;
  const topic = getReTopic(topicId);
  if (!topic) notFound();
  return <SharedTopicPage topic={topic} backHref="/re/p7" />;
}
