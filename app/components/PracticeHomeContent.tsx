"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getSession, type TendoSession } from "@/lib/auth-session";
import { listTeacherQuestions } from "@/lib/teacher-questions";

type PracticeSet = {
  href: string;
  icon: string;
  title: string;
  sub: string;
  tone: string;
};

const p7Sets: PracticeSet[] = [
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

const p6Sets: PracticeSet[] = [
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

function PracticeGrid({ sets }: { sets: PracticeSet[] }) {
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
  const [teacherQuestionCount, setTeacherQuestionCount] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const currentSession = getSession();
    setSession(currentSession);
    setTeacherQuestionCount(listTeacherQuestions().filter((q) => q.status === "open" && q.grade === (currentSession?.grade ?? "P7")).length);
    setReady(true);
  }, []);

  if (!ready) return <div className="auth-loading">Loading practice…</div>;

  const grade = session?.grade ?? "P7";
  const sets = grade === "P6" ? p6Sets : p7Sets;
  const finalSets = teacherQuestionCount > 0
    ? [{ href: "/practice/teacher-questions", icon: "📝", title: "Teacher questions", sub: `${teacherQuestionCount} question${teacherQuestionCount === 1 ? "" : "s"} to answer`, tone: "accent-english" }, ...sets]
    : sets;

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
      <PracticeGrid sets={finalSets} />
    </div>
  );
}
