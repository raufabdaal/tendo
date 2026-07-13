import SubjectTopicList from "@/components/SubjectTopicList";
import { P5_SCIENCE_TOPICS } from "@/lib/p5-science-topics";

export default function P5ScienceListPage() {
  return <SubjectTopicList topics={P5_SCIENCE_TOPICS} subjectName="Science" getTopicHref={(id) => `/science/p5/${id}`} />;
}
