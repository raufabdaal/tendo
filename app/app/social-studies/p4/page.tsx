import Link from "next/link";
import { P4_SOCIAL_TOPICS } from "@/lib/p4-social-topics";

export const metadata = {
  title: "P4 Social Studies — Tendo",
  description: "P4 Social Studies beta study content on Tendo.",
};

export default function P4SocialPage() {
  return (
    <div className="subject-list-page">
      <section className="compact-page-intro subject-intro-card">
        <div>
          <div className="eyebrow">P4 · Social Studies · Beta</div>
          <h1>Social Studies</h1>
          <p className="lead">Living together in our district, built from the official NCDC P4 Social Studies syllabus.</p>
        </div>
        <span aria-hidden="true">🌍</span>
      </section>
      <div className="topic-card-grid">
        {P4_SOCIAL_TOPICS.map((topic) => (
          <Link key={topic.id} href={`/social-studies/p4/${topic.id}`} className="card topic-card simplified-topic-card">
            <div className="card-title">{topic.title}</div>
            <div className="card-sub">{topic.estMinutes} min · beta</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
