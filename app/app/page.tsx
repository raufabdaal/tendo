import Link from "next/link";

export default function HomePage() {
  return (
    <div className="home-page simple-home">
      <section className="home-hero hero-learner">
        <div className="hero-copy">
          <div className="eyebrow">Student home · Primary Seven</div>
          <h1>Welcome back. Start with one small win.</h1>
          <p className="lead">
            Home is your calm starting point. Your subjects, practice sets and papers now live in their own tabs.
          </p>
          <div className="hero-actions">
            <Link href="/math/p7/fractions" className="btn btn-primary">▶ Continue Fractions</Link>
            <Link href="/study" className="btn btn-secondary">📚 Choose subject</Link>
          </div>
        </div>

        <div className="hero-progress-card" aria-label="Learner progress summary">
          <div className="floating-emoji one" aria-hidden="true">⭐</div>
          <div className="floating-emoji two" aria-hidden="true">🔥</div>
          <div className="learner-mini-card">
            <span className="mini-avatar">🎓</span>
            <div>
              <strong>P7 PLE learner</strong>
              <p>Stay focused: study a topic, practise, then try papers when ready.</p>
            </div>
          </div>
          <div className="learner-mini-card">
            <span className="mini-avatar">📚</span>
            <div className="mini-card-wide">
              <strong>This week</strong>
              <p>4 topics studied · 26 questions answered</p>
              <div className="soft-meter"><span style={{ width: "62%" }} /></div>
            </div>
          </div>
          <div className="learner-mini-card">
            <span className="mini-avatar">🎯</span>
            <div>
              <strong>Suggested next step</strong>
              <p>Finish Fractions, then do 10 quick practice questions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="today-grid" aria-label="Today on Tendo">
        <Link href="/math/p7/fractions" className="today-card main-today-card">
          <span>▶️</span>
          <div>
            <div className="eyebrow">Continue</div>
            <h2>Fractions, Decimals and Percentages</h2>
            <p>Pick up from the worked example, then try the quiz.</p>
          </div>
        </Link>
        <Link href="/practice" className="today-card">
          <span>✏️</span>
          <div>
            <h3>Quick practice</h3>
            <p>10 minutes is enough.</p>
          </div>
        </Link>
        <Link href="/papers" className="today-card">
          <span>📝</span>
          <div>
            <h3>Exam confidence</h3>
            <p>Open past papers when ready.</p>
          </div>
        </Link>
      </section>

      <div className="home-note-card">
        <span aria-hidden="true">✨</span>
        <p>
          Tip: use the bottom tabs on your phone. Home stays simple; Study, Practice and Papers each have their own space.
        </p>
      </div>
    </div>
  );
}
