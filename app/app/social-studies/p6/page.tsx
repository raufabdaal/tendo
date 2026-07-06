import Link from "next/link";
import { P6_SOCIAL_TOPICS } from "@/lib/p6-social-topics";

export default function P6SocialPage() {
  return (
    <div className="subject-list-page">
      <section className="compact-page-intro subject-intro-card">
        <div>
          <div className="eyebrow">P6 · Social Studies</div>
          <h1>Social Studies</h1>
        </div>
        <span aria-hidden="true">🌍</span>
      </section>
      <div className="topic-card-grid">
        {P6_SOCIAL_TOPICS.map((topic) => (
          <Link key={topic.id} href={`/social-studies/p6/${topic.id}`} className="card topic-card simplified-topic-card">
            <div className="card-title">{topic.title}</div>
            <div className="card-sub">{topic.estMinutes} min</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
