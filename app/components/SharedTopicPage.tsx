import SimplifiedTopicView from "@/components/SimplifiedTopicView";
import type { Topic } from "@/lib/topics";

interface SharedTopicPageProps {
  topic: Topic;
  backHref: string;
}

export default function SharedTopicPage({ topic, backHref }: SharedTopicPageProps) {
  return (
    <div className="topic-page">
      <h1 className="topic-page-title">{topic.title}</h1>
      <SimplifiedTopicView topic={topic} backHref={backHref} />
    </div>
  );
}
