import SubjectTopicList from "@/components/SubjectTopicList";
import { SCIENCE_TOPICS } from "@/lib/science-topics";

export default function ScienceTopicListPage() {
  return (
    <SubjectTopicList
      topics={SCIENCE_TOPICS}
      subjectName="Science"
      getTopicHref={(id) => `/science/p7/${id}`}
    />
  );
}
