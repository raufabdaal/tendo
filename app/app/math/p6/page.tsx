import SubjectTopicList from "@/components/SubjectTopicList";
import { P6_MATH_TOPICS } from "@/lib/p6-math-topics";

export default function P6MathListPage() {
  return <SubjectTopicList topics={P6_MATH_TOPICS} subjectName="Mathematics" getTopicHref={(id) => `/math/p6/${id}`} />;
}
