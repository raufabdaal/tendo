import { notFound } from "next/navigation";
import { ENGLISH_TOPICS, getEnglishTopic } from "@/lib/english-topics";
import SharedTopicPage from "@/components/SharedTopicPage";

export function generateStaticParams() {
  return ENGLISH_TOPICS.map((t) => ({ topic: t.id }));
}

export default async function EnglishTopicPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic: topicId } = await params;
  const topic = getEnglishTopic(topicId);
  if (!topic) notFound();
  return <SharedTopicPage topic={topic} backHref="/english/p7" />;
}
