import Link from "next/link";
import { notFound } from "next/navigation";
import Quiz from "@/components/Quiz";
import TopicTabs from "@/components/TopicTabs";
import { P4_SOCIAL_TOPICS, getP4SocialTopic } from "@/lib/p4-social-topics";

export async function generateStaticParams() {
  return P4_SOCIAL_TOPICS.map((topic) => ({ topic: topic.id }));
}

export default async function P4SocialTopicPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic: topicId } = await params;
  const topic = getP4SocialTopic(topicId);
  if (!topic) notFound();

  return (
    <>
      <Link href="/social-studies/p4" className="back">← P4 Social Studies</Link>
      <div className="eyebrow">P4 · Social Studies · Beta</div>
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
        <Quiz questions={topic.quiz} topicId={topic.id} topicTitle={topic.title} backHref="/social-studies/p4" />
      </section>
    </>
  );
}
