import Link from "next/link";
import ProgressBadge from "@/components/ProgressBadge";
import { hasTopicDiagram } from "@/components/TopicDiagram";
import { ENGLISH_TOPICS } from "@/lib/english-topics";

const TERM_ORDER = ["Term I", "Term II", "Term III"] as const;

export default function EnglishTopicListPage() {
  const groups = new Map<string, typeof ENGLISH_TOPICS>();
  for (const topic of ENGLISH_TOPICS) {
    const existing = groups.get(topic.themeName) ?? [];
    existing.push(topic);
    groups.set(topic.themeName, existing);
  }

  const orderedGroups = Array.from(groups.entries()).sort(([a], [b]) => TERM_ORDER.indexOf(a as (typeof TERM_ORDER)[number]) - TERM_ORDER.indexOf(b as (typeof TERM_ORDER)[number]));

  return (
    <div className="subject-list-page">
      <section className="compact-page-intro subject-intro-card">
        <div>
          <div className="eyebrow">P7 · English Language</div>
          <h1>English</h1>
        </div>
        <span aria-hidden="true">📖</span>
      </section>

      {orderedGroups.map(([term, topics]) => (
        <section key={term} id={slugify(term)} className="theme-group strand-section simplified-strand-section">
          <div className="theme-label">{term}</div>
          <div className="topic-card-grid">
            {topics.map((topic) => (
              <Link key={topic.id} href={`/english/p7/${topic.id}`} className="card topic-card simplified-topic-card">
                <div className="card-row">
                  <div>
                    <div className="card-title">{topic.title}</div>
                    <div className="card-sub">{topic.estMinutes} min</div>
                    {hasTopicDiagram(topic.id) && <div className="visual-cue">Writing template</div>}
                  </div>
                  <ProgressBadge topicId={`english-${topic.id}`} />
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
