import SubjectTopicList from "@/components/SubjectTopicList";
import { P5_ENGLISH_TOPICS } from "@/lib/p5-english-topics";

export default function P5EnglishListPage() {
  return <SubjectTopicList topics={P5_ENGLISH_TOPICS} subjectName="English" getTopicHref={(id) => `/english/p5/${id}`} />;
}
