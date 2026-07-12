import Link from "next/link";
import { P3_CRE_TOPICS, P3_IRE_TOPICS } from "@/lib/p3-re-topics";

function TopicList({ title, intro, topics, icon }: { title: string; intro: string; topics: typeof P3_CRE_TOPICS; icon: string }) {
  return (
    <section className="teacher-library-section">
      <div className="section-heading compact-heading">
        <div>
          <div className="eyebrow">P3 Religious Education beta</div>
          <h2>{title}</h2>
          <p className="lead">{intro}</p>
        </div>
      </div>
      <div className="quick-start-grid">
        {topics.map((topic) => (
          <Link href={`/p3/re/${topic.id}`} className="quick-action-card" key={topic.id}>
            <span className="quick-icon">{icon}</span>
            <strong>{topic.title}</strong>
            <span>{topic.note.intro.includes("Term I") ? "Term I" : topic.note.intro.includes("Term II") ? "Term II" : "Term III"} · beta</span>
            <em>Open</em>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function P3ReligiousEducationPage() {
  return (
    <div className="study-page focused-study-page">
      <Link href="/p3-home" className="back">← P3 Home</Link>
      <section className="compact-page-intro subject-intro-card">
        <div>
          <div className="eyebrow">Primary Three · Religious Education</div>
          <h1>P3 CRE and IRE beta</h1>
          <p className="lead">
            Religious Education sits outside the P3 thematic matrix, so it is kept separate here. Topics come from the official NCDC P3 RE map and are cross-checked with trusted faith sources for teacher review.
          </p>
        </div>
        <span aria-hidden="true">🕊️</span>
      </section>

      <TopicList
        title="Christian Religious Education (CRE)"
        intro="Traditions, leadership, messengers, Holy Week, Holy Spirit, worship, prayer and Christian values."
        topics={P3_CRE_TOPICS}
        icon="🕊️"
      />
      <TopicList
        title="Islamic Religious Education (IRE)"
        intro="Qur'an reading, divine books, Salat values, first revelation, Arabic vowels, Dua, cleanliness and seeking knowledge."
        topics={P3_IRE_TOPICS}
        icon="☪️"
      />
    </div>
  );
}
