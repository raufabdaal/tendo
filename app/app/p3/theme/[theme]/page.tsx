import Link from "next/link";
import { notFound } from "next/navigation";
import Quiz from "@/components/Quiz";
import TopicTabs from "@/components/TopicTabs";
import { P3_THEMATIC_TOPICS, getP3ThematicTopic } from "@/lib/p3-thematic-topics";

export async function generateStaticParams() {
  return P3_THEMATIC_TOPICS.map((theme) => ({ theme: theme.id }));
}

export default async function P3ThemePage({ params }: { params: Promise<{ theme: string }> }) {
  const { theme: themeId } = await params;
  const topic = getP3ThematicTopic(themeId);
  if (!topic) notFound();

  return (
    <>
      <Link href="/p3-home" className="back">← P3 Home</Link>
      <div className="eyebrow">P3 · Thematic beta · NCDC lower primary</div>
      <h1>{topic.title}</h1>
      <p className="lead">This theme combines numeracy, literacy, English, environment/social content, creative activity, life skills and values.</p>

      <section className="study-card p3-theme-overview" aria-label="P3 theme overview">
        <div className="eyebrow">Expected outcome and theme guide</div>
        <p>{topic.note.intro}</p>
        {topic.note.learningObjectives && (
          <>
            <h2>What you will learn</h2>
            <ul>
              {topic.note.learningObjectives.map((objective) => <li key={objective}>{objective}</li>)}
            </ul>
          </>
        )}
        <h2>Theme reminders</h2>
        <ul>
          {topic.note.whatYouNeedToKnow.slice(3).map((point) => <li key={point}>{point}</li>)}
        </ul>
      </section>

      <TopicTabs topic={topic} />

      <section id="quick-quiz" className="quiz-panel">
        <div className="quiz-panel-heading">
          <span className="quiz-panel-emoji" aria-hidden="true">✏️</span>
          <div>
            <div className="eyebrow">Try</div>
            <h2>Check what you understood</h2>
          </div>
        </div>
        <Quiz questions={topic.quiz} topicId={topic.id} topicTitle={topic.title} backHref="/p3-home" />
      </section>
    </>
  );
}
