import { notFound } from "next/navigation";
import { P5_SCIENCE_TOPICS, getP5ScienceTopic } from "@/lib/p5-science-topics";
import SharedTopicPage from "@/components/SharedTopicPage";

export function generateStaticParams() { return P5_SCIENCE_TOPICS.map((t) => ({ topic: t.id })); }
export default async function P5ScienceTopicPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic: topicId } = await params;
  const topic = getP5ScienceTopic(topicId);
  if (!topic) notFound();
  return <SharedTopicPage topic={topic} backHref="/science/p5" />;
}
