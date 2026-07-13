import { notFound } from "next/navigation";
import { SOCIAL_TOPICS, getSocialTopic } from "@/lib/social-topics";
import SubtopicListPage from "@/components/SubtopicListPage";

export function generateStaticParams() {
  return SOCIAL_TOPICS.map((t) => ({ topic: t.id }));
}

export default async function SSTTopicPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic: topicId } = await params;
  const topic = getSocialTopic(topicId);
  if (!topic) notFound();

  return (
    <SubtopicListPage
      topic={topic}
      subjectHref="/social-studies/p7"
      topicHref={`/social-studies/p7/${topicId}`}
    />
  );
}
