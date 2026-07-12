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




const p3Sets: PracticeSet[] = [
  { href: "/p3/theme/p3-theme-1-subcounty-division", icon: "🧭", title: "P3 Theme 1 practice", sub: "Maps, physical features, people and leaders", tone: "accent-sst" },
  { href: "/p3/theme/p3-theme-2-livelihood", icon: "🧺", title: "Livelihood practice", sub: "Occupations and social services", tone: "accent-sst" },
  { href: "/p3/theme/p3-theme-6-plants", icon: "🌿", title: "Plants practice", sub: "Plant habitats, parts and crop care", tone: "accent-science" },
  { href: "/p3/theme/p3-theme-8-keeping-peace", icon: "🤝", title: "Peace practice", sub: "Rights, needs and responsibilities", tone: "accent-re" },
  { href: "/p3/theme/p3-theme-10-health", icon: "🧼", title: "Health practice", sub: "Vectors, disease prevention and care", tone: "accent-science" },
  { href: "/p3/theme/p3-theme-12-energy", icon: "⚡", title: "Energy practice", sub: "Saving energy and avoiding danger", tone: "accent-science" },
  { href: "/p3/re", icon: "🕊️", title: "P3 RE practice", sub: "CRE and IRE beta topics", tone: "accent-re" },
];

const p4Sets: PracticeSet[] = [
  {
    href: "/math/p4/p4-set-concepts",
    icon: "🌱",
    title: "P4 Maths beta practice",
    sub: "Sets and common members",
    tone: "accent-math",
  },
  {
    href: "/math/p4/p4-whole-numbers",
    icon: "🔢",
    title: "Whole numbers",
    sub: "Place value, rounding and Roman numerals",
    tone: "accent-math",
  },
  {
    href: "/english/p4/p4-describing-people-objects",
    icon: "📝",
    title: "P4 English descriptions",
    sub: "Describing people and objects",
    tone: "accent-english",
  },
  {
    href: "/science/p4/p4-personal-hygiene",
    icon: "🧼",
    title: "P4 Science health",
    sub: "Personal hygiene and disease prevention",
    tone: "accent-science",
  },
  {
    href: "/social-studies/p4/p4-location-district-uganda",
    icon: "🗺️",
    title: "P4 SST district map",
    sub: "Location of our district in Uganda",
    tone: "accent-sst",
  },
  {
    href: "/re/p4/p4-cre-traditions",
    icon: "🕊️",
    title: "P4 RE values",
    sub: "Traditions and respectful conduct",
    tone: "accent-re",
  },
  {
    href: "/math/p4/p4-fractions",
    icon: "🍕",
    title: "Fractions",
    sub: "Equivalent fractions and same-denominator work",
    tone: "accent-math",
  },
  {
    href: "/math/p4/p4-time",
    icon: "⏰",
    title: "Time",
    sub: "Calendars, duration and conversions",
    tone: "accent-math",
  },
];

const p5Sets: PracticeSet[] = [
  {
    href: "/math/p5/p5-set-concepts",
    icon: "🌱",
    title: "P5 Maths beta practice",
    sub: "Sets and Venn diagrams",
    tone: "accent-math",
  },
  {
    href: "/math/p5/p5-whole-numbers",
    icon: "🔢",
    title: "Whole numbers",
    sub: "Place value and rounding",
    tone: "accent-math",
  },
  {
    href: "/math/p5/p5-operations-whole-numbers",
    icon: "➕",
    title: "Operations",
    sub: "Add, subtract, multiply and divide",
    tone: "accent-math",
  },
  {
    href: "/english/p5/p5-letter-writing",
    icon: "✉️",
    title: "Letter writing",
    sub: "Personal letters and invitations",
    tone: "accent-english",
  },
  {
    href: "/science/p5/p5-digestive-system",
    icon: "🍽️",
    title: "Digestive system",
    sub: "Food, teeth and body health",
    tone: "accent-science",
  },
  {
    href: "/social-studies/p5/p5-location-uganda-map-east-africa",
    icon: "🗺️",
    title: "Uganda map",
    sub: "Location and neighbours",
    tone: "accent-sst",
  },
  {
    href: "/re/p5/p5-cre-faith",
    icon: "🕊️",
    title: "Faith",
    sub: "CRE and daily life",
    tone: "accent-re",
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
  const sets = grade === "P3" ? p3Sets : grade === "P4" ? p4Sets : grade === "P5" ? p5Sets : grade === "P6" ? p6Sets : p7Sets;
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
