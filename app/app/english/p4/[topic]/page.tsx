import Link from "next/link";
import { notFound } from "next/navigation";
import Quiz from "@/components/Quiz";
import TopicTabs from "@/components/TopicTabs";
import { P4_ENGLISH_TOPICS, getP4EnglishTopic } from "@/lib/p4-english-topics";

export async function generateStaticParams() {
  return P4_ENGLISH_TOPICS.map((topic) => ({ topic: topic.id }));
}

export default async function P4EnglishTopicPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic: topicId } = await params;
  const topic = getP4EnglishTopic(topicId);
  if (!topic) notFound();

  return (
    <>
      <Link href="/english/p4" className="back">← P4 English</Link>
      <div className="eyebrow">P4 · English · Beta</div>
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
        <Quiz questions={topic.quiz} topicId={topic.id} topicTitle={topic.title} backHref="/english/p4" />
      </section>
    </>
  );
}
