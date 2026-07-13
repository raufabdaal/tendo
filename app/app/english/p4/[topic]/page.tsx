import { notFound } from "next/navigation";
import { P4_ENGLISH_TOPICS, getP4EnglishTopic } from "@/lib/p4-english-topics";
import SharedTopicPage from "@/components/SharedTopicPage";

export function generateStaticParams() { return P4_ENGLISH_TOPICS.map((t) => ({ topic: t.id })); }
export default async function P4EnglishTopicPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic: topicId } = await params;
  const topic = getP4EnglishTopic(topicId);
  if (!topic) notFound();
  return <SharedTopicPage topic={topic} backHref="/english/p4" />;
}
