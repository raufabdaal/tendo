import Link from "next/link";
import ClassSelector from "@/components/ClassSelector";

const subjects = [
  {
    href: "/math/p6",
    icon: "➗",
    accent: "accent-math",
    title: "Mathematics",
    sub: "Sets, whole numbers up to 10M, fractions and geometry",
    topics: "6 topics",
    questions: "120+ questions",
  },
  {
    href: "/english/p6",
    icon: "📖",
    accent: "accent-english",
    title: "English Language",
    sub: "Road safety, debating, family, occupations and dining",
    topics: "5 topics",
    questions: "100 questions",
  },
  {
    href: "/science/p6",
    icon: "🔬",
    accent: "accent-science",
    title: "Integrated Science",
    sub: "Living things, sound, body systems and agriculture",
    topics: "5 topics",
    questions: "100 questions",
  },
  {
    href: "/social-studies/p6",
    icon: "🌍",
    accent: "accent-sst",
    title: "Social Studies",
    sub: "People and resources of East Africa",
    topics: "6 topics",
    questions: "120 questions",
  },
  {
    href: "/re/p6",
    icon: "🕊️",
    accent: "accent-re",
    title: "Religious Education",
    sub: "CRE and IRE foundation topics",
    topics: "6 topics",
    questions: "80 questions",
  },
];

export default function P6HomePage() {
  return (
    <div className="home-page">
      <section className="home-hero hero-learner p6-hero">
        <div className="hero-copy">
          <div className="eyebrow">Welcome · Primary Six</div>
          <h1>Build the foundation early.</h1>
          <p className="lead">
            Start with simple P6 topics now so P7 and PLE revision feel easier later.
          </p>
          <div className="hero-actions">
            <Link href="/math/p6/p6-fractions-decimals" className="btn btn-primary">▶ Continue lesson</Link>
            <Link href="/practice" className="btn btn-secondary">✏️ Quick practice</Link>
          </div>
        </div>

        <div className="hero-progress-card" aria-label="Learner progress summary">
          <div className="floating-emoji one" aria-hidden="true">🌱</div>
          <div className="floating-emoji two" aria-hidden="true">⭐</div>
          <div className="learner-mini-card">
            <span className="mini-avatar">🎓</span>
            <div>
              <strong>P6 foundation learner</strong>
              <p>Only P6 content first, with a clear path to P7.</p>
            </div>
          </div>
          <div className="learner-mini-card">
            <span className="mini-avatar">📚</span>
            <div className="mini-card-wide">
              <strong>This week</strong>
              <p>3 topics studied · 18 questions answered</p>
              <div className="soft-meter"><span style={{ width: "48%" }} /></div>
            </div>
          </div>
          <div className="learner-mini-card">
            <span className="mini-avatar">🏁</span>
            <div>
              <strong>Getting ready for P7</strong>
              <p>Practice small bits every day. No pressure.</p>
            </div>
          </div>
        </div>
      </section>

      <ClassSelector activeLevel="P6" />

      <section id="quick-start" className="quick-start-grid" aria-label="Quick actions">
        <Link href="/math/p6/p6-fractions-decimals" className="quick-action-card">
          <span className="quick-icon">▶️</span>
          <strong>Continue lesson</strong>
          <span>Fractions and decimals</span>
          <em>Start here</em>
        </Link>
        <Link href="/practice" className="quick-action-card">
          <span className="quick-icon">✏️</span>
          <strong>Quick practice</strong>
          <span>Short questions for memory</span>
          <em>10 minutes</em>
        </Link>
        <Link href="/" className="quick-action-card">
          <span className="quick-icon">🏁</span>
          <strong>Peek at P7</strong>
          <span>See what comes next</span>
          <em>Optional</em>
        </Link>
      </section>

      <section id="subjects" className="home-section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">Study</div>
            <h2>P6 Subjects</h2>
            <p>Foundation content aligned with the NCDC syllabus.</p>
          </div>
          <Link href="/study" className="btn btn-secondary compact">See P6 + P7</Link>
        </div>

        <div className="subject-card-grid">
          {subjects.map((subject) => (
            <Link key={subject.href} href={subject.href} className={`subject-tile ${subject.accent}`}>
              <span className="subject-emoji">{subject.icon}</span>
              <h3>{subject.title}</h3>
              <p>{subject.sub}</p>
              <div className="tile-pills">
                <span>{subject.topics}</span>
                <span>{subject.questions}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="foot">
        Primary Six foundation curriculum aligned with NCDC Set One syllabus.
      </div>
    </div>
  );
}
