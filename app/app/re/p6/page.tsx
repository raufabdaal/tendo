import SubjectTopicList from "@/components/SubjectTopicList";
import { P6_RE_TOPICS } from "@/lib/p6-re-topics";

export default function P6ReListPage() {
  return <SubjectTopicList topics={P6_RE_TOPICS} subjectName="Religious Education" getTopicHref={(id) => `/re/p6/${id}`} />;
}
