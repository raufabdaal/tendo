import Link from "next/link";
import { notFound } from "next/navigation";
import Quiz from "@/components/Quiz";
import TopicTabs from "@/components/TopicTabs";
import { P4_RE_TOPICS, getP4ReTopic } from "@/lib/p4-re-topics";

export async function generateStaticParams() {
  return P4_RE_TOPICS.map((topic) => ({ topic: topic.id }));
}

export default async function P4ReTopicPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic: topicId } = await params;
  const topic = getP4ReTopic(topicId);
  if (!topic) notFound();

  return (
    <>
      <Link href="/re/p4" className="back">← P4 Religious Education</Link>
      <div className="eyebrow">P4 · Religious Education · Beta</div>
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
        <Quiz questions={topic.quiz} topicId={topic.id} topicTitle={topic.title} backHref="/re/p4" />
      </section>
    </>
  );
}
