import SubjectTopicList from "@/components/SubjectTopicList";
import { TOPICS } from "@/lib/topics";

export default function TopicListPage() {
  return (
    <SubjectTopicList
      topics={TOPICS}
      subjectName="Mathematics"
      getTopicHref={(id) => `/math/p7/${id}`}
    />
  );
}
