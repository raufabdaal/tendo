import Link from "next/link";
import { notFound } from "next/navigation";
import Quiz from "@/components/Quiz";
import TopicTabs from "@/components/TopicTabs";
import { P4_SCIENCE_TOPICS, getP4ScienceTopic } from "@/lib/p4-science-topics";

export async function generateStaticParams() {
  return P4_SCIENCE_TOPICS.map((topic) => ({ topic: topic.id }));
}

export default async function P4ScienceTopicPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic: topicId } = await params;
  const topic = getP4ScienceTopic(topicId);
  if (!topic) notFound();

  return (
    <>
      <Link href="/science/p4" className="back">← P4 Integrated Science</Link>
      <div className="eyebrow">P4 · Integrated Science · Beta</div>
      <h1>{topic.title}</h1>

      <TopicTabs topic={topic} />

      <section id="quick-quiz" className="quiz-panel">
        <div className="quiz-panel-heading">
          <span className="quiz-panel-emoji" aria-hidden="true">✏️</span>
          <div>
            <div className="eyebrow">Try</div>
            <h2>Check what you understood</h2>
          </div>
        </div>
        <Quiz questions={topic.quiz} topicId={topic.id} topicTitle={topic.title} backHref="/science/p4" />
      </section>
    </>
  );
}
