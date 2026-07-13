import SubjectTopicList from "@/components/SubjectTopicList";
import { P4_SOCIAL_TOPICS } from "@/lib/p4-social-topics";

export default function P4SocialListPage() {
  return <SubjectTopicList topics={P4_SOCIAL_TOPICS} subjectName="Social Studies" getTopicHref={(id) => `/social-studies/p4/${id}`} />;
}
