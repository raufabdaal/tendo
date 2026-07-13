import { notFound } from "next/navigation";
import { P6_SOCIAL_TOPICS, getP6SocialTopic } from "@/lib/p6-social-topics";
import SharedTopicPage from "@/components/SharedTopicPage";

export function generateStaticParams() { return P6_SOCIAL_TOPICS.map((t) => ({ topic: t.id })); }
export default async function P6SocialTopicPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic: topicId } = await params;
  const topic = getP6SocialTopic(topicId);
  if (!topic) notFound();
  return <SharedTopicPage topic={topic} backHref="/social-studies/p6" />;
}
