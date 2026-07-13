import SubjectTopicList from "@/components/SubjectTopicList";
import { P6_ENGLISH_TOPICS } from "@/lib/p6-english-topics";

export default function P6EnglishListPage() {
  return <SubjectTopicList topics={P6_ENGLISH_TOPICS} subjectName="English" getTopicHref={(id) => `/english/p6/${id}`} />;
}
