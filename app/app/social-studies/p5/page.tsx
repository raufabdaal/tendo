import SubjectTopicList from "@/components/SubjectTopicList";
import { P5_SOCIAL_TOPICS } from "@/lib/p5-social-topics";

export default function P5SocialListPage() {
  return <SubjectTopicList topics={P5_SOCIAL_TOPICS} subjectName="Social Studies" getTopicHref={(id) => `/social-studies/p5/${id}`} />;
}
