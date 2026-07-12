import Link from "next/link";
import { notFound } from "next/navigation";
import Quiz from "@/components/Quiz";
import TopicTabs from "@/components/TopicTabs";
import { P3_RE_TOPICS, getP3ReTopic } from "@/lib/p3-re-topics";

export async function generateStaticParams() {
  return P3_RE_TOPICS.map((topic) => ({ topic: topic.id }));
}

export default async function P3ReTopicPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic: topicId } = await params;
  const topic = getP3ReTopic(topicId);
  if (!topic) notFound();

  return (
    <>
      <Link href="/p3/re" className="back">← P3 Religious Education</Link>
      <div className="eyebrow">P3 · Religious Education beta · {topic.themeName}</div>
      <h1>{topic.title}</h1>
      <p className="lead">Built from the official NCDC P3 RE map and cross-checked with trusted CRE/IRE sources. Teacher verification is still required before premium-final status.</p>

      <TopicTabs topic={topic} />

      <section id="quick-quiz" className="quiz-panel">
        <div className="quiz-panel-heading">
          <span className="quiz-panel-emoji" aria-hidden="true">✏️</span>
          <div>
            <div className="eyebrow">Try</div>
            <h2>Check what you understood</h2>
          </div>
        </div>
        <Quiz questions={topic.quiz} topicId={topic.id} topicTitle={topic.title} backHref="/p3/re" />
      </section>
    </>
  );
}
