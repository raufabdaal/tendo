import Link from "next/link";
import { notFound } from "next/navigation";
import Quiz from "@/components/Quiz";
import TopicTabs from "@/components/TopicTabs";
import { RE_TOPICS, getReTopic } from "@/lib/re-topics";
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
      <Link href={`/re/p7/${topicId}/practice`} className="btn btn-primary">
        Start practice
      </Link>
    </div>
  );
}

export async function generateStaticParams() {
  return RE_TOPICS.map((topic) => ({ topic: topic.id }));
}

export default async function ReTopicPage({ params }: { params: Promise<{ topic: string }> }) {
  const resolved = await params;
  const topic = getReTopic(resolved.topic);
  if (!topic) notFound();

  return (
    <>
      <div className="topic-header">
        <Link href="/re/p7" className="back">← Religious Education</Link>
        <div className="eyebrow">P7 · Religious Education · {topic.themeName}</div>
        <h1>{topic.title}</h1>
        <div className="meta">
          <span>{topic.estMinutes} mins</span>
          <span>·</span>
          <span>{topic.quiz.length} quiz questions</span>
        </div>
      </div>

      <TopicTabs topic={topic} />

      <PracticeCTA topicId={topic.id} />

      <Quiz questions={topic.quiz} topicId={topic.id} topicTitle={topic.title} />
    </>
  );
}
