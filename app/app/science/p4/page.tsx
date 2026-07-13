import SubjectTopicList from "@/components/SubjectTopicList";
import { P4_SCIENCE_TOPICS } from "@/lib/p4-science-topics";

export default function P4ScienceListPage() {
  return <SubjectTopicList topics={P4_SCIENCE_TOPICS} subjectName="Science" getTopicHref={(id) => `/science/p4/${id}`} />;
}
