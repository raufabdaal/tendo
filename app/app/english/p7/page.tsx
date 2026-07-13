import SubjectTopicList from "@/components/SubjectTopicList";
import { ENGLISH_TOPICS } from "@/lib/english-topics";

export default function EnglishTopicListPage() {
  return (
    <SubjectTopicList
      topics={ENGLISH_TOPICS}
      subjectName="English"
      getTopicHref={(id) => `/english/p7/${id}`}
    />
  );
}
