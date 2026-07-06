import Link from "next/link";

export default function P6HomePage() {
  return (
    <div className="home-page simple-home">
      <section className="home-hero hero-learner p6-hero">
        <div className="hero-copy">
          <div className="eyebrow">Student home · Primary Six</div>
          <h1>Build one foundation skill today.</h1>
          <p className="lead">
            Home is simple on purpose. Choose one next step, then use the tabs for subjects and practice.
          </p>
          <div className="hero-actions">
            <Link href="/math/p6/p6-fractions-decimals" className="btn btn-primary">▶ Continue Fractions</Link>
            <Link href="/study" className="btn btn-secondary">📚 Choose subject</Link>
          </div>
        </div>

        <div className="hero-progress-card" aria-label="Learner progress summary">
          <div className="floating-emoji one" aria-hidden="true">🌱</div>
          <div className="floating-emoji two" aria-hidden="true">⭐</div>
          <div className="learner-mini-card">
            <span className="mini-avatar">🎓</span>
            <div>
              <strong>P6 foundation learner</strong>
              <p>Small daily practice now makes P7 revision easier later.</p>
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
              <strong>Suggested next step</strong>
              <p>Finish Fractions and Decimals, then do quick practice.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="today-grid" aria-label="Today on Tendo">
        <Link href="/math/p6/p6-fractions-decimals" className="today-card main-today-card">
          <span>▶️</span>
          <div>
            <div className="eyebrow">Continue</div>
            <h2>Fractions, Decimals and Percentages</h2>
            <p>Build the foundation before moving to harder P7 topics.</p>
          </div>
        </Link>
        <Link href="/practice" className="today-card">
          <span>✏️</span>
          <div>
            <h3>Quick practice</h3>
            <p>Short questions for memory.</p>
          </div>
        </Link>
        <Link href="/study" className="today-card">
          <span>📚</span>
          <div>
            <h3>Subjects</h3>
            <p>Maths, English, Science, SST and RE.</p>
          </div>
        </Link>
      </section>

      <div className="home-note-card">
        <span aria-hidden="true">✨</span>
        <p>
          Tip: P6 is your foundation space. Use the bottom tabs to move between Home, Study, Practice and Papers.
        </p>
      </div>
    </div>
  );
}
