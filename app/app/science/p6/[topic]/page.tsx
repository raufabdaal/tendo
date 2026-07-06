import Link from "next/link";
import { notFound } from "next/navigation";
import Quiz from "@/components/Quiz";
import TopicTabs from "@/components/TopicTabs";
import { P6_SCIENCE_TOPICS, getP6ScienceTopic } from "@/lib/p6-science-topics";
import { getBank } from "@/lib/question-bank";

function PracticeCTA({ topicId }: { topicId: string }) {
  const bank = getBank(topicId);
  if (!bank) return null;
  return (
    <div className="practice-cta">
      <div className="practice-cta-text">
        <div className="practice-cta-title">Want more practice?</div>
        <div className="practice-cta-sub">
          Endless practice mode draws from a bank of {bank.questions.length} questions for this topic.
          Different questions every time.
        </div>
      </div>
      <Link href={`/science/p6/${topicId}/practice`} className="btn btn-primary">
        Start practice
      </Link>
    </div>
  );
}

export async function generateStaticParams() { return P6_SCIENCE_TOPICS.map((t) => ({ topic: t.id })); }

export default async function P6ScienceTopicPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic: tid } = await params;
  const topic = getP6ScienceTopic(tid);
  if (!topic) notFound();
  return (
    <>
      <Link href="/science/p6" className="back">← P6 Integrated Science</Link>
      <div className="eyebrow">{topic.themeName}</div>
      <h1>{topic.title}</h1>
      <div className="callout">{topic.note.intro}</div>

      <TopicTabs topic={topic} />
      <section id="quick-quiz" className="quiz-panel">
        <div className="quiz-panel-heading">
          <span className="quiz-panel-emoji" aria-hidden="true">✏️</span>
          <div>
            <div className="eyebrow">Step 3 · Try</div>
            <h2>Check what you understood</h2>
          </div>
        </div>
        <Quiz questions={topic.quiz} topicId={topic.id} topicTitle={topic.title} backHref="/science/p6" />
      </section>
      <PracticeCTA topicId={topic.id} />
    </>
  );
}
