import Link from "next/link";

const subjects = [
  ["/math/p4", "➗", "Mathematics", "Sets, numbers, fractions, geometry and measurement"],
  ["/english/p4", "📖", "English", "Descriptions, directions, feelings, behaviour and writing"],
  ["/science/p4", "🔬", "Integrated Science", "Plants, crops, weather, health, food and animals"],
  ["/social-studies/p4", "🌍", "Social Studies", "Our district, features, vegetation, people and leaders"],
  ["/re/p4", "🕊️", "Religious Education", "CRE and IRE from NCDC/MoES abridged source"],
] as const;

export default function P4HomePage() {
  return (
    <div className="home-page simple-home">
      <section className="home-hero hero-learner p6-hero">
        <div className="hero-copy">
          <div className="eyebrow">Student home · Primary Four</div>
          <h1>Start the transition year carefully.</h1>
          <p className="lead">P4 all five app subjects are live beta from NCDC-backed maps. RE is from the NCDC/MoES abridged source pending full standard-syllabus confirmation. Other P4 subjects remain mapped/planned before routes are added.</p>
          <div className="hero-actions">
            <Link href="/math/p4" className="btn btn-primary">➗ Open P4 Maths</Link>
            <Link href="/english/p4" className="btn btn-secondary">📖 Open P4 English</Link>
          </div>
        </div>

        <div className="hero-progress-card" aria-label="P4 beta summary">
          <div className="floating-emoji one" aria-hidden="true">🌱</div>
          <div className="floating-emoji two" aria-hidden="true">📖</div>
          <div className="learner-mini-card">
            <span className="mini-avatar">🎓</span>
            <div>
              <strong>P4 beta learner</strong>
              <p>Mathematics, English, Science, Social Studies and RE are live for review. Study one topic, then try the quick check.</p>
            </div>
          </div>
          <div className="learner-mini-card">
            <span className="mini-avatar">🧭</span>
            <div className="mini-card-wide">
              <strong>Transition year</strong>
              <p>Maths · English · Science · SST · RE</p>
              <div className="soft-meter"><span style={{ width: "45%" }} /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="quick-start-grid" aria-label="P4 beta subjects">
        {subjects.map(([href, icon, title, sub]) => (
          <Link href={href} className="quick-action-card" key={href}>
            <span className="quick-icon">{icon}</span>
            <strong>{title}</strong>
            <span>{sub}</span>
            <em>Open</em>
          </Link>
        ))}
        <Link href="/practice" className="quick-action-card">
          <span className="quick-icon">✏️</span>
          <strong>Practice</strong>
          <span>Quick P4 checks</span>
          <em>Open</em>
        </Link>
      </section>
    </div>
  );
}
