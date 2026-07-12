import Link from "next/link";
import { P3_THEMATIC_TOPICS } from "@/lib/p3-thematic-topics";
import { P3_CRE_TOPICS, P3_IRE_TOPICS } from "@/lib/p3-re-topics";

const themeIcons = ["🧭", "🧺", "🌱", "💧", "🐝", "🌿", "💰", "🤝", "🎭", "🧼", "🧵", "⚡"];

export default function P3HomePage() {
  const firstTheme = P3_THEMATIC_TOPICS[0];
  const totalThemes = P3_THEMATIC_TOPICS.length;
  const totalSubThemes = P3_THEMATIC_TOPICS.reduce((sum, theme) => sum + (theme.subtopics?.length ?? 0), 0);
  const totalReTopics = P3_CRE_TOPICS.length + P3_IRE_TOPICS.length;

  return (
    <div className="home-page simple-home">
      <section className="home-hero hero-learner p6-hero">
        <div className="hero-copy">
          <div className="eyebrow">Student home · Primary Three</div>
          <h1>Learn by themes, the NCDC way.</h1>
          <p className="lead">
            P3 is thematic, not subject-based. All {totalThemes} official NCDC P3 themes are now live in beta, with {totalSubThemes} sub-themes.
          </p>
          <div className="hero-actions">
            <Link href={`/p3/theme/${firstTheme.id}`} className="btn btn-primary">▶ Start Theme 1</Link>
            <Link href="/study" className="btn btn-secondary">📚 Study library</Link>
          </div>
        </div>
        <div className="hero-progress-card" aria-label="P3 beta summary">
          <div className="floating-emoji one" aria-hidden="true">🧭</div>
          <div className="floating-emoji two" aria-hidden="true">🌱</div>
          <div className="learner-mini-card">
            <span className="mini-avatar">🎓</span>
            <div>
              <strong>P3 thematic beta</strong>
              <p>All 12 official P3 themes are built from the researched NCDC thematic map.</p>
            </div>
          </div>
          <div className="learner-mini-card">
            <span className="mini-avatar">📚</span>
            <div className="mini-card-wide">
              <strong>Coverage</strong>
              <p>{totalThemes} themes · {totalSubThemes} sub-themes · thematic-first</p>
              <div className="soft-meter"><span style={{ width: "100%" }} /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="quick-start-grid" aria-label="P3 themes">
        {P3_THEMATIC_TOPICS.map((theme, index) => (
          <Link href={`/p3/theme/${theme.id}`} className="quick-action-card" key={theme.id}>
            <span className="quick-icon">{themeIcons[index] ?? "📘"}</span>
            <strong>Theme {index + 1}: {theme.title}</strong>
            <span>{theme.subtopics?.length ?? 0} sub-themes · beta</span>
            <em>Open</em>
          </Link>
        ))}
      </section>

      <section className="compact-page-intro subject-intro-card" aria-label="P3 Religious Education beta">
        <div>
          <div className="eyebrow">Separate RE section · beta</div>
          <h2>Religious Education</h2>
          <p className="lead">
            P3 RE sits outside the thematic matrix. Open {totalReTopics} CRE/IRE topics built from the NCDC RE map and trusted source cross-checks.
          </p>
          <div className="hero-actions">
            <Link href="/p3/re" className="btn btn-secondary">🕊️ Open P3 RE</Link>
          </div>
        </div>
        <span aria-hidden="true">🕊️</span>
      </section>
    </div>
  );
}
