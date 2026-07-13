import { notFound } from "next/navigation";
import { P4_SOCIAL_TOPICS, getP4SocialTopic } from "@/lib/p4-social-topics";
import SharedTopicPage from "@/components/SharedTopicPage";

export function generateStaticParams() { return P4_SOCIAL_TOPICS.map((t) => ({ topic: t.id })); }
export default async function P4SocialTopicPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic: topicId } = await params;
  const topic = getP4SocialTopic(topicId);
  if (!topic) notFound();
  return <SharedTopicPage topic={topic} backHref="/social-studies/p4" />;
}
