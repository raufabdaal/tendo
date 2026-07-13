import SubjectTopicList from "@/components/SubjectTopicList";
import { P6_SCIENCE_TOPICS } from "@/lib/p6-science-topics";

export default function P6ScienceListPage() {
  return <SubjectTopicList topics={P6_SCIENCE_TOPICS} subjectName="Science" getTopicHref={(id) => `/science/p6/${id}`} />;
}
