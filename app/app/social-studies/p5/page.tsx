import Link from "next/link";
import { P5_SOCIAL_TOPICS } from "@/lib/p5-social-topics";

export const metadata = {
  title: "P5 Social Studies — Tendo",
  description: "P5 Social Studies beta study content on Tendo.",
};

export default function P5SocialStudiesPage() {
  return (
    <div className="subject-list-page">
      <section className="compact-page-intro subject-intro-card">
        <div>
          <div className="eyebrow">P5 · Social Studies · Beta</div>
          <h1>Social Studies</h1>
        </div>
        <span aria-hidden="true">🌍</span>
      </section>
      <div className="topic-card-grid">
        {P5_SOCIAL_TOPICS.map((topic) => (
          <Link key={topic.id} href={`/social-studies/p5/${topic.id}`} className="card topic-card simplified-topic-card">
            <div className="card-title">{topic.title}</div>
            <div className="card-sub">{topic.estMinutes} min · beta</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
