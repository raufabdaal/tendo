import { notFound } from "next/navigation";
import { SCIENCE_TOPICS, getScienceTopic } from "@/lib/science-topics";
import SharedTopicPage from "@/components/SharedTopicPage";

export function generateStaticParams() {
  return SCIENCE_TOPICS.map((t) => ({ topic: t.id }));
}

export default async function ScienceTopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic: topicId } = await params;
  const topic = getScienceTopic(topicId);
  if (!topic) notFound();

  return <SharedTopicPage topic={topic} backHref="/science/p7" />;
}
