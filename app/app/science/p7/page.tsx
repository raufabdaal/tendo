import Link from "next/link";
import ProgressBadge from "@/components/ProgressBadge";
import { getTopicVisualPill } from "@/lib/topics";
import { SCIENCE_TOPICS } from "@/lib/science-topics";

const THEME_ORDER = [
  "Human Body",
  "Matter and Energy",
  "The Environment",
  "The Community, Population and Family Life",
] as const;

function sortThemeEntries<T>(entries: [string, T][]) {
  return [...entries].sort(([a], [b]) => {
    const aIndex = THEME_ORDER.indexOf(a as (typeof THEME_ORDER)[number]);
    const bIndex = THEME_ORDER.indexOf(b as (typeof THEME_ORDER)[number]);
    const safeA = aIndex === -1 ? Number.MAX_SAFE_INTEGER : aIndex;
    const safeB = bIndex === -1 ? Number.MAX_SAFE_INTEGER : bIndex;

    if (safeA !== safeB) return safeA - safeB;
    return a.localeCompare(b);
  });
}

export default function ScienceTopicListPage() {
  const groups = new Map<string, typeof SCIENCE_TOPICS>();
  for (const topic of SCIENCE_TOPICS) {
    const existing = groups.get(topic.themeName) ?? [];
    existing.push(topic);
    groups.set(topic.themeName, existing);
  }

  const orderedGroups = sortThemeEntries(Array.from(groups.entries()));

  return (
    <div className="subject-list-page">
      <section className="compact-page-intro subject-intro-card">
        <div>
          <div className="eyebrow">P7 · Integrated Science</div>
          <h1>Science</h1>
        </div>
        <span aria-hidden="true">🔬</span>
      </section>

      {orderedGroups.map(([theme, topics]) => (
        <section key={theme} id={slugify(theme)} className="theme-group strand-section simplified-strand-section">
          <div className="theme-label">{theme}</div>
          <div className="topic-card-grid">
            {topics.map((topic) => (
              <Link key={topic.id} href={`/science/p7/${topic.id}`} className="card topic-card simplified-topic-card">
                <div className="card-row">
                  <div>
                    <div className="card-title">{topic.title}</div>
                    <div className="card-sub">{topic.estMinutes} min</div>
                    {getTopicVisualPill(topic) && <div className="visual-cue">{getTopicVisualPill(topic)}</div>}
                  </div>
                  <ProgressBadge topicId={`science-${topic.id}`} />
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
