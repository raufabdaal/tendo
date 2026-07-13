import SubjectTopicList from "@/components/SubjectTopicList";
import { P4_ENGLISH_TOPICS } from "@/lib/p4-english-topics";

export default function P4EnglishListPage() {
  return <SubjectTopicList topics={P4_ENGLISH_TOPICS} subjectName="English" getTopicHref={(id) => `/english/p4/${id}`} />;
}
