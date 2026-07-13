import SubjectTopicList from "@/components/SubjectTopicList";
import { P4_RE_TOPICS } from "@/lib/p4-re-topics";

export default function P4ReListPage() {
  return <SubjectTopicList topics={P4_RE_TOPICS} subjectName="Religious Education" getTopicHref={(id) => `/re/p4/${id}`} />;
}
