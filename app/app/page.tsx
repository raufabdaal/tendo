import Link from "next/link";
import ClassSelector from "@/components/ClassSelector";

const subjects = [
  {
    href: "/math/p7",
    icon: "➗",
    accent: "accent-math",
    title: "Mathematics",
    sub: "Sets, numbers, geometry, measurement and algebra",
    topics: "11 topics",
    questions: "220+ questions",
  },
  {
    href: "/english/p7",
    icon: "📖",
    accent: "accent-english",
    title: "English Language",
    sub: "Writing, media, rights, environment and ceremonies",
    topics: "7 topics",
    questions: "140 questions",
  },
  {
    href: "/science/p7",
    icon: "🔬",
    accent: "accent-science",
    title: "Integrated Science",
    sub: "Human body, energy, health, environment and machines",
    topics: "8 topics",
    questions: "160 questions",
  },
  {
    href: "/social-studies/p7",
    icon: "🌍",
    accent: "accent-sst",
    title: "Social Studies",
    sub: "Living together in Africa: maps, people and history",
    topics: "10 topics",
    questions: "200 questions",
  },
  {
    href: "/re/p7",
    icon: "🕊️",
    accent: "accent-re",
    title: "Religious Education",
    sub: "Choose CRE or IRE, then follow the PLE option",
    topics: "14 topics",
    questions: "112 questions",
  },
];

export default function HomePage() {
  return (
    <div className="home-page">
      <section className="home-hero hero-learner">
        <div className="hero-copy">
          <div className="eyebrow">Welcome · Primary Seven</div>
          <h1>Choose one thing to do now.</h1>
          <p className="lead">
            Tendo keeps study simple: continue a lesson, answer a few questions, or pick a school subject.
          </p>
          <div className="hero-actions">
            <Link href="/math/p7/fractions" className="btn btn-primary">▶ Continue lesson</Link>
            <Link href="/practice" className="btn btn-secondary">✏️ Practice 10 questions</Link>
          </div>
        </div>

        <div className="hero-progress-card" aria-label="Learner progress summary">
          <div className="floating-emoji one" aria-hidden="true">⭐</div>
          <div className="floating-emoji two" aria-hidden="true">📚</div>
          <div className="learner-mini-card">
            <span className="mini-avatar">🎓</span>
            <div>
              <strong>P7 PLE learner</strong>
              <p>Class is always visible. Switching is just one tap.</p>
            </div>
          </div>
          <div className="learner-mini-card">
            <span className="mini-avatar">🔥</span>
            <div className="mini-card-wide">
              <strong>This week</strong>
              <p>4 topics studied · 26 questions answered</p>
              <div className="soft-meter"><span style={{ width: "62%" }} /></div>
            </div>
          </div>
          <div className="learner-mini-card">
            <span className="mini-avatar">👩🏾‍🏫</span>
            <div>
              <strong>Teacher tools are separate</strong>
              <p>Kids see study first. Teachers get their own clear mode.</p>
            </div>
          </div>
        </div>
      </section>

      <ClassSelector activeLevel="P7" />

      <section id="quick-start" className="quick-start-grid" aria-label="Quick actions">
        <Link href="/math/p7/fractions" className="quick-action-card">
          <span className="quick-icon">▶️</span>
          <strong>Continue lesson</strong>
          <span>Fractions · Read then try quiz</span>
          <em>Start here</em>
        </Link>
        <Link href="/practice" className="quick-action-card">
          <span className="quick-icon">✏️</span>
          <strong>Quick practice</strong>
          <span>Small sets from important topics</span>
          <em>Good before prep</em>
        </Link>
        <Link href="/papers" className="quick-action-card">
          <span className="quick-icon">📝</span>
          <strong>PLE papers</strong>
          <span>Attempt papers or revise sections</span>
          <em>Exam mode</em>
        </Link>
      </section>

      <section id="subjects" className="home-section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">Study</div>
            <h2>P7 Subjects</h2>
            <p>Big colourful cards. Familiar school words. No clutter.</p>
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

      <section className="teacher-strip">
        <div>
          <span className="strip-emoji">👩🏾‍🏫</span>
          <h2>Teacher?</h2>
          <p>Open a separate teacher mode for class progress, worksheets and parent updates.</p>
        </div>
        <div className="teacher-strip-actions">
          <Link href="/teacher" className="btn btn-secondary">Teacher dashboard</Link>
          <Link href="/teacher/worksheet" className="btn btn-primary">Make worksheet</Link>
        </div>
      </section>

      <div className="foot">
        All progress is saved on this device. No login required in v0.
      </div>
    </div>
  );
}
