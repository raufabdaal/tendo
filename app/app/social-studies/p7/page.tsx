import Link from "next/link";
import ProgressBadge from "@/components/ProgressBadge";
import { getTopicVisualPill } from "@/lib/topics";
import { SOCIAL_TOPICS } from "@/lib/social-topics";

const TERM_ORDER = ["Term I", "Term II", "Term III"] as const;

const TOPIC_TERMS: Record<string, (typeof TERM_ORDER)[number]> = {
  "location-of-africa": "Term I",
  "physical-features-of-africa": "Term I",
  "climate-of-africa": "Term I",
  "vegetation-of-africa": "Term I",
  "people-ethnic-groups-settlement": "Term II",
  "foreign-influence-africa": "Term II",
  "nationalism-road-independence": "Term II",
  "post-independence-africa": "Term II",
  "economic-developments-africa": "Term III",
  "major-world-organisations": "Term III",
};

function sortTermEntries<T>(entries: [string, T][]) {
  return [...entries].sort(([a], [b]) => TERM_ORDER.indexOf(a as (typeof TERM_ORDER)[number]) - TERM_ORDER.indexOf(b as (typeof TERM_ORDER)[number]));
}

export default function SocialStudiesTopicListPage() {
  const groups = new Map<string, typeof SOCIAL_TOPICS>();
  for (const topic of SOCIAL_TOPICS) {
    const term = TOPIC_TERMS[topic.id] ?? "Term I";
    const existing = groups.get(term) ?? [];
    existing.push(topic);
    groups.set(term, existing);
  }

  const orderedGroups = sortTermEntries(Array.from(groups.entries()));

  return (
    <div className="subject-list-page">
      <section className="compact-page-intro subject-intro-card">
        <div>
          <div className="eyebrow">P7 · Social Studies</div>
          <h1>Social Studies</h1>
        </div>
        <span aria-hidden="true">🌍</span>
      </section>

      {orderedGroups.map(([term, topics]) => (
        <section key={term} id={slugify(term)} className="theme-group strand-section simplified-strand-section">
          <div className="theme-label">{term}</div>
          <div className="topic-card-grid">
            {topics.map((topic) => (
              <Link key={topic.id} href={`/social-studies/p7/${topic.id}`} className="card topic-card simplified-topic-card">
                <div className="card-row">
                  <div>
                    <div className="card-title">{topic.title}</div>
                    <div className="card-sub">{topic.estMinutes} min</div>
                    {getTopicVisualPill(topic) && <div className="visual-cue">{getTopicVisualPill(topic)}</div>}
                  </div>
                  <ProgressBadge topicId={`social-${topic.id}`} />
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
