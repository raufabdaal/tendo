import SubjectTopicList from "@/components/SubjectTopicList";
import { RE_TOPICS } from "@/lib/re-topics";

export default function ReTopicListPage() {
  return (
    <SubjectTopicList
      topics={RE_TOPICS}
      subjectName="Religious Education"
      getTopicHref={(id) => `/re/p7/${id}`}
    />
  );
}
