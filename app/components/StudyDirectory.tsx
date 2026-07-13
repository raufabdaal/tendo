"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getSession, type TendoGrade, type TendoSession } from "@/lib/auth-session";

const p7Subjects = [
  ["/math/p7", "➗", "accent-math", "Mathematics", "11 topics"],
  ["/english/p7", "📖", "accent-english", "English", "7 topics"],
  ["/science/p7", "🔬", "accent-science", "Science", "8 topics"],
  ["/social-studies/p7", "🌍", "accent-sst", "Social Studies", "10 topics"],
  ["/re/p7", "🕊️", "accent-re", "Religious Education", "14 topics"],
] as const;

const p6Subjects = [
  ["/math/p6", "➗", "accent-math", "Mathematics", "6 topics"],
  ["/english/p6", "📖", "accent-english", "English", "5 topics"],
  ["/science/p6", "🔬", "accent-science", "Science", "5 topics"],
  ["/social-studies/p6", "🌍", "accent-sst", "Social Studies", "6 topics"],
  ["/re/p6", "🕊️", "accent-re", "Religious Education", "6 topics"],
] as const;

const p3Subjects = [
  ["/p3/theme/p3-theme-1-subcounty-division", "🧭", "accent-sst", "Theme 1: Our Sub-county", "3 sub-themes"],
  ["/p3/theme/p3-theme-2-livelihood", "🧺", "accent-sst", "Theme 2: Livelihood", "3 sub-themes"],
  ["/p3/theme/p3-theme-3-environment", "🌱", "accent-science", "Theme 3: Our Environment", "3 sub-themes"],
  ["/p3/theme/p3-theme-4-environment-weather", "💧", "accent-science", "Theme 4: Environment & Weather", "3 sub-themes"],
  ["/p3/theme/p3-theme-5-animals", "🐝", "accent-science", "Theme 5: Animals", "3 sub-themes"],
  ["/p3/theme/p3-theme-6-plants", "🌿", "accent-science", "Theme 6: Plants", "3 sub-themes"],
  ["/p3/theme/p3-theme-7-managing-resources", "💰", "accent-math", "Theme 7: Managing Resources", "3 sub-themes"],
  ["/p3/theme/p3-theme-8-keeping-peace", "🤝", "accent-re", "Theme 8: Keeping Peace", "3 sub-themes"],
  ["/p3/theme/p3-theme-9-culture-gender", "🎭", "accent-english", "Theme 9: Culture & Gender", "3 sub-themes"],
  ["/p3/theme/p3-theme-10-health", "🧼", "accent-science", "Theme 10: Health", "3 sub-themes"],
  ["/p3/theme/p3-theme-11-basic-technology", "🧵", "accent-math", "Theme 11: Basic Technology", "3 sub-themes"],
  ["/p3/theme/p3-theme-12-energy", "⚡", "accent-science", "Theme 12: Energy", "3 sub-themes"],
  ["/p3/re", "🕊️", "accent-re", "Religious Education", "18 topics"],
] as const;

const p4Subjects = [
  ["/math/p4", "➗", "accent-math", "Mathematics", "12 topics"],
  ["/english/p4", "📖", "accent-english", "English", "8 topics"],
  ["/science/p4", "🔬", "accent-science", "Science", "12 topics"],
  ["/social-studies/p4", "🌍", "accent-sst", "Social Studies", "6 topics"],
  ["/re/p4", "🕊️", "accent-re", "Religious Education", "25 topics"],
] as const;

const p5Subjects = [
  ["/math/p5", "➗", "accent-math", "Mathematics", "12 topics"],
  ["/english/p5", "📖", "accent-english", "English", "8 topics"],
  ["/science/p5", "🔬", "accent-science", "Science", "9 topics"],
  ["/social-studies/p5", "🌍", "accent-sst", "Social Studies", "12 topics"],
  ["/re/p5", "🕊️", "accent-re", "Religious Education", "20 topics"],
] as const;

type SubjectTuple = readonly [string, string, string, string, string];

function subjectsForGrade(grade: TendoGrade): readonly SubjectTuple[] {
  if (grade === "P3") return p3Subjects;
  if (grade === "P4") return p4Subjects;
  if (grade === "P5") return p5Subjects;
  if (grade === "P6") return p6Subjects;
  return p7Subjects;
}

function getContinueTopic(): { href: string; title: string } | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem("tendo:last-topic");
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (data.href && data.title) return { href: data.href, title: data.title };
  } catch { /* ignore */ }
  return null;
}

export default function StudyDirectory() {
  const [session, setSession] = useState<TendoSession | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setSession(getSession());
    setReady(true);
  }, []);

  if (!ready) return null;

  const isTeacher = session?.role === "teacher";
  const grade = session?.grade ?? "P7";
  const subjects = subjectsForGrade(grade);
  const continueTopic = getContinueTopic();

  if (isTeacher) {
    return (
      <div className="study-page">
        <div className="subject-grid">
          <section>
            <div className="section-label">P7</div>
            <SubjectList subjects={p7Subjects} />
          </section>
          <section>
            <div className="section-label">P6</div>
            <SubjectList subjects={p6Subjects} />
          </section>
          <section>
            <div className="section-label">P5</div>
            <SubjectList subjects={p5Subjects} />
          </section>
          <section>
            <div className="section-label">P4</div>
            <SubjectList subjects={p4Subjects} />
          </section>
          <section>
            <div className="section-label">P3</div>
            <SubjectList subjects={p3Subjects} />
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className="study-page">
      {continueTopic && (
        <Link href={continueTopic.href} className="continue-chip">
          <span>▶</span>
          <span>{continueTopic.title}</span>
          <span className="continue-chip-label">Continue</span>
        </Link>
      )}
      <div className="subject-grid">
        {subjects.map(([href, icon, accent, title, count]) => (
          <Link key={href} href={href} className={`subject-card ${accent}`}>
            <span className="subject-card-icon">{icon}</span>
            <span className="subject-card-title">{title}</span>
            <span className="subject-card-count">{count}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

function SubjectList({ subjects }: { subjects: readonly SubjectTuple[] }) {
  return (
    <div className="subject-grid">
      {subjects.map(([href, icon, accent, title, count]) => (
        <Link key={href} href={href} className={`subject-card ${accent}`}>
          <span className="subject-card-icon">{icon}</span>
          <span className="subject-card-title">{title}</span>
          <span className="subject-card-count">{count}</span>
        </Link>
      ))}
    </div>
  );
}
