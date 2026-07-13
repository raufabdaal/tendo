import SubjectTopicList from "@/components/SubjectTopicList";
import { P6_SOCIAL_TOPICS } from "@/lib/p6-social-topics";

export default function P6SocialListPage() {
  return <SubjectTopicList topics={P6_SOCIAL_TOPICS} subjectName="Social Studies" getTopicHref={(id) => `/social-studies/p6/${id}`} />;
}
