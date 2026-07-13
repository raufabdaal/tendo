import { notFound } from "next/navigation";
import { P5_SOCIAL_TOPICS, getP5SocialTopic } from "@/lib/p5-social-topics";
import SharedTopicPage from "@/components/SharedTopicPage";

export function generateStaticParams() { return P5_SOCIAL_TOPICS.map((t) => ({ topic: t.id })); }
export default async function P5SocialTopicPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic: topicId } = await params;
  const topic = getP5SocialTopic(topicId);
  if (!topic) notFound();
  return <SharedTopicPage topic={topic} backHref="/social-studies/p5" />;
}
