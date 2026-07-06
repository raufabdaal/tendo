import Link from "next/link";
import ProgressBadge from "@/components/ProgressBadge";
import { getTopicVisualPill } from "@/lib/topics";
import { CRE_TOPICS, IRE_TOPICS } from "@/lib/re-topics";

export default function ReligiousEducationPage() {
  return (
    <div className="subject-list-page">
      <section className="compact-page-intro subject-intro-card">
        <div>
          <div className="eyebrow">P7 · Religious Education</div>
          <h1>Religious Education</h1>
        </div>
        <span aria-hidden="true">🕊️</span>
      </section>

      <ReGroup title="CRE" topics={CRE_TOPICS} />
      <ReGroup title="IRE" topics={IRE_TOPICS} />
    </div>
  );
}

function ReGroup({ title, topics }: { title: string; topics: typeof CRE_TOPICS }) {
  return (
    <section className="theme-group strand-section simplified-strand-section">
      <div className="theme-label">{title}</div>
      <div className="topic-card-grid">
        {topics.map((topic) => {
          const pill = getTopicVisualPill(topic);
          return (
            <Link key={topic.id} href={`/re/p7/${topic.id}`} className="card topic-card simplified-topic-card">
              <div className="card-row">
                <div>
                  <div className="card-title">{topic.title}</div>
                  <div className="card-sub">{topic.estMinutes} min</div>
                  {pill && <div className="visual-cue">{pill}</div>}
                </div>
                <ProgressBadge topicId={topic.id} />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
