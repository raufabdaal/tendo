import Link from "next/link";

const p7Subjects = [
  ["/math/p7", "➗", "accent-math", "Mathematics", "11 topics · PLE core"],
  ["/english/p7", "📖", "accent-english", "English Language", "7 topics · writing and grammar"],
  ["/science/p7", "🔬", "accent-science", "Integrated Science", "8 topics · diagrams and checks"],
  ["/social-studies/p7", "🌍", "accent-sst", "Social Studies", "10 topics · Africa theme"],
  ["/re/p7", "🕊️", "accent-re", "Religious Education", "CRE or IRE option"],
];

const p6Subjects = [
  ["/math/p6", "➗", "accent-math", "Mathematics", "6 foundation topics"],
  ["/english/p6", "📖", "accent-english", "English Language", "5 foundation topics"],
  ["/science/p6", "🔬", "accent-science", "Integrated Science", "5 foundation topics"],
  ["/social-studies/p6", "🌍", "accent-sst", "Social Studies", "East Africa theme"],
  ["/re/p6", "🕊️", "accent-re", "Religious Education", "CRE and IRE foundations"],
];

export const metadata = {
  title: "Study — Tendo",
  description: "Choose a P6 or P7 subject to study on Tendo.",
};

export default function StudyPage() {
  return (
    <div className="study-page">
      <section className="study-hero">
        <div>
          <div className="eyebrow">Study</div>
          <h1>Choose your class, then your subject.</h1>
          <p className="lead">
            A simple subject directory for students and a content library for teachers planning lessons.
          </p>
        </div>
        <div className="study-hero-badge" aria-hidden="true">📚</div>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">Primary Seven</div>
            <h2>P7 PLE study</h2>
          </div>
          <Link href="/" className="btn btn-secondary compact">Open P7 home</Link>
        </div>
        <div className="subject-card-grid compact-subject-grid">
          {p7Subjects.map(([href, icon, accent, title, sub]) => (
            <Link key={href} href={href} className={`subject-tile ${accent}`}>
              <span className="subject-emoji">{icon}</span>
              <h3>{title}</h3>
              <p>{sub}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">Primary Six</div>
            <h2>P6 foundation study</h2>
          </div>
          <Link href="/p6-home" className="btn btn-secondary compact">Open P6 home</Link>
        </div>
        <div className="subject-card-grid compact-subject-grid">
          {p6Subjects.map(([href, icon, accent, title, sub]) => (
            <Link key={href} href={href} className={`subject-tile ${accent}`}>
              <span className="subject-emoji">{icon}</span>
              <h3>{title}</h3>
              <p>{sub}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
