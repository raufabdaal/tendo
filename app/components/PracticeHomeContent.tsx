"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getSession, type TendoSession } from "@/lib/auth-session";

const p7Sets = [
  {
    href: "/math/p7/fractions/practice",
    icon: "🎯",
    title: "Maths weak-topic practice",
    sub: "Fractions, decimals and percentages",
    tone: "accent-math",
  },
  {
    href: "/english/p7/letter-writing/practice",
    icon: "✍️",
    title: "English writing practice",
    sub: "Letter writing and grammar checks",
    tone: "accent-english",
  },
  {
    href: "/science/p7/electricity-and-magnetism/practice",
    icon: "🔌",
    title: "Science diagram practice",
    sub: "Electricity and magnetism",
    tone: "accent-science",
  },
  {
    href: "/social-studies/p7/climate-of-africa/practice",
    icon: "🌦️",
    title: "SST map practice",
    sub: "Climate of Africa",
    tone: "accent-sst",
  },
];

const p6Sets = [
  {
    href: "/math/p6/p6-fractions-decimals/practice",
    icon: "🌱",
    title: "Maths foundation practice",
    sub: "Fractions and decimals",
    tone: "accent-math",
  },
  {
    href: "/english/p6/p6-safety-road/practice",
    icon: "🚦",
    title: "English vocabulary practice",
    sub: "Road safety and sentence checks",
    tone: "accent-english",
  },
  {
    href: "/science/p6/p6-sound-energy/practice",
    icon: "👂",
    title: "Science practice",
    sub: "Sound energy and the ear",
    tone: "accent-science",
  },
  {
    href: "/social-studies/p6/p6-location-east-africa/practice",
    icon: "🗺️",
    title: "SST map practice",
    sub: "Location of East Africa",
    tone: "accent-sst",
  },
];

function PracticeGrid({ sets }: { sets: typeof p7Sets }) {
  return (
    <div className="quick-practice-grid polished-practice-grid">
      {sets.map((set) => (
        <Link href={set.href} className={`practice-choice ${set.tone}`} key={set.href}>
          <span className="practice-choice-icon">{set.icon}</span>
          <div>
            <h2>{set.title}</h2>
            <p>{set.sub}</p>
            <span className="pill-start">Start →</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default function PracticeHomeContent() {
  const [session, setSession] = useState<TendoSession | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setSession(getSession());
    setReady(true);
  }, []);

  if (!ready) return <div className="auth-loading">Loading practice…</div>;

  const grade = session?.grade ?? "P7";
  const sets = grade === "P6" ? p6Sets : p7Sets;

  return (
    <div className="practice-home focused-practice-page">
      <section className="compact-page-intro practice-intro-card">
        <div>
          <div className="eyebrow">Practice · {grade}</div>
          <h1>Short practice</h1>
          <p className="lead">Pick one small set and get quick feedback.</p>
        </div>
        <span aria-hidden="true">✏️</span>
      </section>
      <PracticeGrid sets={sets} />
    </div>
  );
}
