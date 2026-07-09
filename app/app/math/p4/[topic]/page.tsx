import Link from "next/link";
import { notFound } from "next/navigation";
import Quiz from "@/components/Quiz";
import TopicTabs from "@/components/TopicTabs";
import { P4_MATH_TOPICS, getP4MathTopic } from "@/lib/p4-math-topics";

export async function generateStaticParams() {
  return P4_MATH_TOPICS.map((topic) => ({ topic: topic.id }));
}

export default async function P4MathTopicPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic: topicId } = await params;
  const topic = getP4MathTopic(topicId);
  if (!topic) notFound();

  return (
    <>
      <Link href="/math/p4" className="back">← P4 Mathematics</Link>
      <div className="eyebrow">P4 · Mathematics · Beta</div>
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
        <Quiz questions={topic.quiz} topicId={topic.id} topicTitle={topic.title} backHref="/math/p4" />
      </section>
    </>
  );
}
