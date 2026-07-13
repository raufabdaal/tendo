import { notFound } from "next/navigation";
import { P5_ENGLISH_TOPICS, getP5EnglishTopic } from "@/lib/p5-english-topics";
import SharedTopicPage from "@/components/SharedTopicPage";

export function generateStaticParams() { return P5_ENGLISH_TOPICS.map((t) => ({ topic: t.id })); }
export default async function P5EnglishTopicPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic: topicId } = await params;
  const topic = getP5EnglishTopic(topicId);
  if (!topic) notFound();
  return <SharedTopicPage topic={topic} backHref="/english/p5" />;
}
