import { notFound } from "next/navigation";
import { P6_ENGLISH_TOPICS, getP6EnglishTopic } from "@/lib/p6-english-topics";
import SharedTopicPage from "@/components/SharedTopicPage";

export function generateStaticParams() { return P6_ENGLISH_TOPICS.map((t) => ({ topic: t.id })); }
export default async function P6EnglishTopicPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic: topicId } = await params;
  const topic = getP6EnglishTopic(topicId);
  if (!topic) notFound();
  return <SharedTopicPage topic={topic} backHref="/english/p6" />;
}
