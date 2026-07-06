import Link from "next/link";
import { notFound } from "next/navigation";
import Quiz from "@/components/Quiz";
import TopicTabs from "@/components/TopicTabs";
import { P6_SOCIAL_TOPICS, getP6SocialTopic } from "@/lib/p6-social-topics";
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
      <Link href={`/social-studies/p6/${topicId}/practice`} className="btn btn-primary">
        Start practice
      </Link>
    </div>
  );
}

export async function generateStaticParams() { return P6_SOCIAL_TOPICS.map((t) => ({ topic: t.id })); }

export default async function P6SocialTopicPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic: tid } = await params;
  const topic = getP6SocialTopic(tid);
  if (!topic) notFound();
  return (
    <>
      <Link href="/social-studies/p6" className="back">← P6 Social Studies</Link>
      <div className="eyebrow">{topic.themeName}</div>
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
        <Quiz questions={topic.quiz} topicId={topic.id} topicTitle={topic.title} backHref="/social-studies/p6" />
      </section>
      <PracticeCTA topicId={topic.id} />
    </>
  );
}
