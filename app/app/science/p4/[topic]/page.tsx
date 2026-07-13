import { notFound } from "next/navigation";
import { P4_SCIENCE_TOPICS, getP4ScienceTopic } from "@/lib/p4-science-topics";
import SharedTopicPage from "@/components/SharedTopicPage";

export function generateStaticParams() { return P4_SCIENCE_TOPICS.map((t) => ({ topic: t.id })); }
export default async function P4ScienceTopicPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic: topicId } = await params;
  const topic = getP4ScienceTopic(topicId);
  if (!topic) notFound();
  return <SharedTopicPage topic={topic} backHref="/science/p4" />;
}
