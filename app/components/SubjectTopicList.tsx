import Link from "next/link";
import type { Topic } from "@/lib/topics";

interface SubjectTopicListProps {
  topics: Topic[];
  subjectName: string;
  backHref?: string;
  getTopicHref: (topicId: string) => string;
}

export default function SubjectTopicList({
  topics,
  subjectName,
  getTopicHref,
}: SubjectTopicListProps) {
  const published = topics.filter((t) => t.status === "published");

  return (
    <div className="subject-page">
      <h1 className="subject-page-title">{subjectName}</h1>
      <div className="topic-list">
        {published.map((topic) => (
          <Link
            key={topic.id}
            href={getTopicHref(topic.id)}
            className="topic-card"
          >
            <span>{topic.title}</span>
            <span className="topic-meta">{topic.estMinutes} min</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
