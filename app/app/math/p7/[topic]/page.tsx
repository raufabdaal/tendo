import { notFound } from "next/navigation";
import { TOPICS, getTopic } from "@/lib/topics";
import SharedTopicPage from "@/components/SharedTopicPage";

export function generateStaticParams() {
  return TOPICS.map((t) => ({ topic: t.id }));
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic: topicId } = await params;
  const topic = getTopic(topicId);
  if (!topic) notFound();

  return <SharedTopicPage topic={topic} backHref="/math/p7" />;
}
