import { notFound } from "next/navigation";
import { SOCIAL_TOPICS, getSocialTopic } from "@/lib/social-topics";
import SharedTopicPage from "@/components/SharedTopicPage";

export function generateStaticParams() {
  return SOCIAL_TOPICS.map((t) => ({ topic: t.id }));
}

export default async function SocialTopicPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic: topicId } = await params;
  const topic = getSocialTopic(topicId);
  if (!topic) notFound();
  return <SharedTopicPage topic={topic} backHref="/social-studies/p7" />;
}
