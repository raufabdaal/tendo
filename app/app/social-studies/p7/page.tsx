import SubjectTopicList from "@/components/SubjectTopicList";
import { SOCIAL_TOPICS } from "@/lib/social-topics";

export default function SocialTopicListPage() {
  return (
    <SubjectTopicList
      topics={SOCIAL_TOPICS}
      subjectName="Social Studies"
      getTopicHref={(id) => `/social-studies/p7/${id}`}
    />
  );
}
