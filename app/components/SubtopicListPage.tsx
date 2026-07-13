import Link from "next/link";
import type { Topic, Subtopic } from "@/lib/topics";

interface SubtopicListPageProps {
  topic: Topic;
  subjectHref: string;
  topicHref: string;
}

export default function SubtopicListPage({ topic, subjectHref, topicHref }: SubtopicListPageProps) {
  const subtopics = topic.subtopics ?? [];

  return (
    <div className="subtopic-page">
      <div className="subtopic-header">
        <Link href={subjectHref} className="back-link">←</Link>
        <h1 className="subtopic-page-title">{topic.title}</h1>
      </div>

      <div className="subtopic-grid">
        {subtopics.map((sub, i) => (
          <Link
            key={sub.subtopicId}
            href={`${topicHref}/${sub.subtopicId}`}
            className="subtopic-card"
          >
            <span className="subtopic-num">{i + 1}</span>
            <div className="subtopic-card-body">
              <span className="subtopic-card-title">{sub.title.replace(/^\d+\.\s*/, "")}</span>
              <span className="subtopic-card-meta">{sub.modules.length} modules</span>
            </div>
            <span className="subtopic-card-arrow">→</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
