import { notFound } from "next/navigation";
import { P6_SCIENCE_TOPICS, getP6ScienceTopic } from "@/lib/p6-science-topics";
import SharedTopicPage from "@/components/SharedTopicPage";

export function generateStaticParams() { return P6_SCIENCE_TOPICS.map((t) => ({ topic: t.id })); }
export default async function P6ScienceTopicPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic: topicId } = await params;
  const topic = getP6ScienceTopic(topicId);
  if (!topic) notFound();
  return <SharedTopicPage topic={topic} backHref="/science/p6" />;
}
