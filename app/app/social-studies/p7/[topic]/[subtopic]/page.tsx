import { notFound } from "next/navigation";
import { SOCIAL_TOPICS, getSocialTopic } from "@/lib/social-topics";
import SubtopicViewer from "@/components/SubtopicViewer";

export function generateStaticParams() {
  const params: { topic: string; subtopic: string }[] = [];
  for (const topic of SOCIAL_TOPICS) {
    for (const sub of topic.subtopics ?? []) {
      params.push({ topic: topic.id, subtopic: sub.subtopicId });
    }
  }
  return params;
}

export default async function SSTSubtopicPage({
  params,
}: {
  params: Promise<{ topic: string; subtopic: string }>;
}) {
  const { topic: topicId, subtopic: subtopicId } = await params;
  const topic = getSocialTopic(topicId);
  if (!topic) notFound();

  const subtopic = (topic.subtopics ?? []).find((s) => s.subtopicId === subtopicId);
  if (!subtopic) notFound();

  return (
    <SubtopicViewer
      topic={topic}
      subtopicId={subtopicId}
      topicHref={`/social-studies/p7/${topicId}`}
      subjectHref="/social-studies/p7"
    />
  );
}
