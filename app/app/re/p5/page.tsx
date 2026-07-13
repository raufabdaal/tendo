import SubjectTopicList from "@/components/SubjectTopicList";
import { P5_RE_TOPICS } from "@/lib/p5-re-topics";

export default function P5ReListPage() {
  return <SubjectTopicList topics={P5_RE_TOPICS} subjectName="Religious Education" getTopicHref={(id) => `/re/p5/${id}`} />;
}
