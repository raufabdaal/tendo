import SubjectTopicList from "@/components/SubjectTopicList";
import { P4_MATH_TOPICS } from "@/lib/p4-math-topics";

export default function P4MathListPage() {
  return <SubjectTopicList topics={P4_MATH_TOPICS} subjectName="Mathematics" getTopicHref={(id) => `/math/p4/${id}`} />;
}
