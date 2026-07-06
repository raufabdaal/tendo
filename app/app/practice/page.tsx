import Link from "next/link";

const quickSets = [
  {
    href: "/math/p7/fractions/practice",
    icon: "🎯",
    title: "P7 Maths weak-topic practice",
    sub: "Fractions, decimals and percentages · endless questions",
    tone: "accent-math",
  },
  {
    href: "/english/p7/letter-writing/practice",
    icon: "✍️",
    title: "P7 English writing practice",
    sub: "Letter writing · quick grammar checks",
    tone: "accent-english",
  },
  {
    href: "/science/p7/electricity-and-magnetism/practice",
    icon: "🔌",
    title: "P7 Science diagram practice",
    sub: "Electricity and magnetism · circuit thinking",
    tone: "accent-science",
  },
  {
    href: "/social-studies/p7/climate-of-africa/practice",
    icon: "🌦️",
    title: "P7 SST map practice",
    sub: "Climate of Africa · memory and reasoning",
    tone: "accent-sst",
  },
  {
    href: "/math/p6/p6-fractions-decimals/practice",
    icon: "🌱",
    title: "P6 foundation practice",
    sub: "Fractions and decimals · gentle foundation set",
    tone: "accent-math",
  },
];

export const metadata = {
  title: "Practice — Tendo",
  description: "Quick practice sets for P6 and P7 learners.",
};

export default function PracticeHomePage() {
  return (
    <div className="practice-home">
      <section className="study-hero practice-hero">
        <div>
          <div className="eyebrow">Practice</div>
          <h1>Short practice. Quick feedback.</h1>
          <p className="lead">
            Pick one small set and answer a few questions. Practice should feel easy to start, especially on a phone.
          </p>
        </div>
        <div className="study-hero-badge" aria-hidden="true">✏️</div>
      </section>

      <div className="quick-practice-grid">
        {quickSets.map((set) => (
          <Link href={set.href} className={`practice-choice ${set.tone}`} key={set.href}>
            <span className="practice-choice-icon">{set.icon}</span>
            <div>
              <h2>{set.title}</h2>
              <p>{set.sub}</p>
              <span className="pill-start">Start practice →</span>
            </div>
          </Link>
        ))}
      </div>

      <section className="teacher-strip practice-teacher-strip">
        <div>
          <span className="strip-emoji">🧾</span>
          <h2>Need a printable class worksheet?</h2>
          <p>Teachers can choose topics, question length and answer key in Teacher mode.</p>
        </div>
        <Link href="/teacher/worksheet" className="btn btn-primary">Make worksheet</Link>
      </section>
    </div>
  );
}
