import SubjectTopicList from "@/components/SubjectTopicList";
import { P5_MATH_TOPICS } from "@/lib/p5-math-topics";

export default function P5MathListPage() {
  return <SubjectTopicList topics={P5_MATH_TOPICS} subjectName="Mathematics" getTopicHref={(id) => `/math/p5/${id}`} />;
}
