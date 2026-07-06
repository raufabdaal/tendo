import Link from "next/link";
import { notFound } from "next/navigation";
import Quiz from "@/components/Quiz";
import TopicTabs from "@/components/TopicTabs";
import { ENGLISH_TOPICS, getEnglishTopic } from "@/lib/english-topics";
import { getBank } from "@/lib/question-bank";

function PracticeCTA({ topicId }: { topicId: string }) {
  const bank = getBank(topicId);
  if (!bank) return null;
  return (
    <div className="practice-cta">
      <div className="practice-cta-text">
        <div className="practice-cta-title">More practice</div>
        <div className="practice-cta-sub">Extra questions for this topic.</div>
      </div>
      <Link href={`/english/p7/${topicId}/practice`} className="btn btn-primary">
        Start practice
      </Link>
    </div>
  );
}

export function generateStaticParams() {
  return ENGLISH_TOPICS.map((topic) => ({ topic: topic.id }));
}

export default async function EnglishTopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic: topicId } = await params;
  const topic = getEnglishTopic(topicId);
  if (!topic) notFound();

  return (
    <>
      <Link href="/english/p7" className="back">← All English topics</Link>
      <div className="eyebrow">P7 English · {topic.themeName}</div>
      <h1>{topic.title}</h1>
      <TopicTabs topic={topic} />

      <section id="quick-quiz" className="quiz-panel">
        <div className="quiz-panel-heading">
          <span className="quiz-panel-emoji" aria-hidden="true">✏️</span>
          <div>
            <div className="eyebrow">Step 3 · Try</div>
            <h2>Check what you understood</h2>
          </div>
        </div>
        <Quiz questions={topic.quiz} topicId={`english-${topic.id}`} topicTitle={topic.title} backHref="/english/p7" />
      </section>

      <PracticeCTA topicId={topic.id} />
    </>
  );
}
