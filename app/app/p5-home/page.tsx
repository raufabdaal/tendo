import Link from "next/link";

const subjects = [
  ["/math/p5", "➗", "Mathematics", "Numbers, operations, measures and algebra"],
  ["/english/p5", "📖", "English", "Vehicle repair, print media, travelling and writing"],
  ["/science/p5", "🔬", "Science", "Poultry, health, soil, heat and changes"],
  ["/social-studies/p5", "🌍", "Social Studies", "Uganda, people, government and resources"],
  ["/re/p5", "🕊️", "Religious Education", "CRE and IRE faith foundations"],
] as const;

export default function P5HomePage() {
  return (
    <div className="home-page simple-home">
      <section className="home-hero hero-learner p6-hero">
        <div className="hero-copy">
          <div className="eyebrow">Student home · Primary Five</div>
          <h1>Build strong basics early.</h1>
          <p className="lead">P5 beta is live across the main subjects. Study one topic, then practise.</p>
          <div className="hero-actions">
            <Link href="/study" className="btn btn-primary">📚 Choose subject</Link>
            <Link href="/math/p5/p5-set-concepts" className="btn btn-secondary">▶ Start Maths</Link>
          </div>
        </div>

        <div className="hero-progress-card" aria-label="Learner progress summary">
          <div className="floating-emoji one" aria-hidden="true">🌱</div>
          <div className="floating-emoji two" aria-hidden="true">⭐</div>
          <div className="learner-mini-card">
            <span className="mini-avatar">🎓</span>
            <div>
              <strong>P5 beta learner</strong>
              <p>All current P5 subjects are live for beta testing and review.</p>
            </div>
          </div>
          <div className="learner-mini-card">
            <span className="mini-avatar">📚</span>
            <div className="mini-card-wide">
              <strong>Subjects ready</strong>
              <p>Maths · English · Science · SST · RE</p>
              <div className="soft-meter"><span style={{ width: "72%" }} /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="quick-start-grid" aria-label="P5 subjects">
        {subjects.slice(0, 3).map(([href, icon, title, sub]) => (
          <Link href={href} className="quick-action-card" key={href}>
            <span className="quick-icon">{icon}</span>
            <strong>{title}</strong>
            <span>{sub}</span>
            <em>Open</em>
          </Link>
        ))}
      </section>

      <section className="today-grid" aria-label="More P5 subjects">
        {subjects.slice(3).map(([href, icon, title, sub]) => (
          <Link href={href} className="today-card" key={href}>
            <span>{icon}</span>
            <div><h3>{title}</h3><p>{sub}</p></div>
          </Link>
        ))}
        <Link href="/practice" className="today-card">
          <span>✏️</span>
          <div><h3>Practice</h3><p>Try short checks and teacher questions.</p></div>
        </Link>
      </section>
    </div>
  );
}
