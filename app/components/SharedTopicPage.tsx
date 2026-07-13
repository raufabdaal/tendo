import Link from "next/link";
import type { Topic } from "@/lib/topics";
import SimplifiedTopicView from "@/components/SimplifiedTopicView";

interface SharedTopicPageProps {
  topic: Topic;
  backHref: string;
}

export default function SharedTopicPage({ topic, backHref }: SharedTopicPageProps) {
  return (
    <div className="topic-page">
      <div className="topic-header">
        <Link href={backHref} className="back-link">←</Link>
        <h1>{topic.title}</h1>
      </div>
      <SimplifiedTopicView topic={topic} backHref={backHref} />
    </div>
  );
}
