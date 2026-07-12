"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getSession, type TendoGrade, type TendoSession } from "@/lib/auth-session";

const p7Subjects = [
  ["/math/p7", "➗", "accent-math", "Mathematics", "Sets, numbers, geometry and algebra", "11 topics"],
  ["/english/p7", "📖", "accent-english", "English Language", "Writing, grammar and comprehension", "7 topics"],
  ["/science/p7", "🔬", "accent-science", "Integrated Science", "Body systems, energy and health", "8 topics"],
  ["/social-studies/p7", "🌍", "accent-sst", "Social Studies", "Africa, maps, people and history", "10 topics"],
  ["/re/p7", "🕊️", "accent-re", "Religious Education", "Choose CRE or IRE", "14 topics"],
] as const;

const p6Subjects = [
  ["/math/p6", "➗", "accent-math", "Mathematics", "Numbers, fractions, geometry and data", "6 topics"],
  ["/english/p6", "📖", "accent-english", "English Language", "Road safety, debate and writing", "5 topics"],
  ["/science/p6", "🔬", "accent-science", "Integrated Science", "Living things, sound and body systems", "5 topics"],
  ["/social-studies/p6", "🌍", "accent-sst", "Social Studies", "People and resources of East Africa", "6 topics"],
  ["/re/p6", "🕊️", "accent-re", "Religious Education", "CRE and IRE foundations", "6 topics"],
] as const;



const p3Subjects = [
  ["/p3/theme/p3-theme-1-subcounty-division", "🧭", "accent-sst", "Theme 1: Our Sub-county/Division", "Maps, physical features, people and leaders", "3 sub-themes"],
  ["/p3/theme/p3-theme-2-livelihood", "🧺", "accent-sst", "Theme 2: Livelihood", "Occupations, social services and service challenges", "3 sub-themes"],
  ["/p3/theme/p3-theme-3-environment", "🌱", "accent-science", "Theme 3: Our Environment", "Soil and environmental changes", "3 sub-themes"],
  ["/p3/theme/p3-theme-4-environment-weather", "💧", "accent-science", "Theme 4: Environment and Weather", "Air, sun, water and water management", "3 sub-themes"],
  ["/p3/theme/p3-theme-5-animals", "🐝", "accent-science", "Theme 5: Animals", "Living things, birds, insects and care", "3 sub-themes"],
  ["/p3/theme/p3-theme-6-plants", "🌿", "accent-science", "Theme 6: Plants", "Habitats, flowering plants and crop growing", "3 sub-themes"],
  ["/p3/theme/p3-theme-7-managing-resources", "💰", "accent-math", "Theme 7: Managing Resources", "Saving, spending and projects", "3 sub-themes"],
  ["/p3/theme/p3-theme-8-keeping-peace", "🤝", "accent-re", "Theme 8: Keeping Peace", "Peace, child rights and responsibilities", "3 sub-themes"],
  ["/p3/theme/p3-theme-9-culture-gender", "🎭", "accent-english", "Theme 9: Culture and Gender", "Customs, fairness and preserving culture", "3 sub-themes"],
  ["/p3/theme/p3-theme-10-health", "🧼", "accent-science", "Theme 10: Health", "Vectors, vector diseases and HIV/AIDS", "3 sub-themes"],
  ["/p3/theme/p3-theme-11-basic-technology", "🧵", "accent-math", "Theme 11: Basic Technology", "Natural/artificial materials and making things", "3 sub-themes"],
  ["/p3/theme/p3-theme-12-energy", "⚡", "accent-science", "Theme 12: Energy", "Sources, saving energy and danger avoidance", "3 sub-themes"],
  ["/p3/re", "🕊️", "accent-re", "Religious Education", "CRE and IRE from the official P3 RE map", "18 topics"],
] as const;

const p4Subjects = [
  ["/math/p4", "➗", "accent-math", "Mathematics", "Sets, numbers, fractions, geometry and measurement", "12 topics"],
  ["/english/p4", "📖", "accent-english", "English", "Descriptions, directions, feelings and writing", "8 topics"],
  ["/science/p4", "🔬", "accent-science", "Integrated Science", "Plants, crops, weather, health, food and animals", "12 topics"],
  ["/social-studies/p4", "🌍", "accent-sst", "Social Studies", "Living together in our district", "6 topics"],
  ["/re/p4", "🕊️", "accent-re", "Religious Education", "CRE and IRE beta from NCDC abridged source", "25 topics"],
] as const;

const p5Subjects = [
  ["/math/p5", "➗", "accent-math", "Mathematics", "Numbers, operations, measures and algebra", "12 topics"],
  ["/english/p5", "📖", "accent-english", "English", "Vehicle repair, print media, travelling and writing", "8 topics"],
  ["/science/p5", "🔬", "accent-science", "Science", "Poultry, health, soil, heat and changes", "9 topics"],
  ["/social-studies/p5", "🌍", "accent-sst", "Social Studies", "Uganda, people, government and resources", "12 topics"],
  ["/re/p5", "🕊️", "accent-re", "Religious Education", "CRE and IRE faith foundations", "20 topics"],
] as const;

type SubjectTuple = typeof p7Subjects[number] | typeof p6Subjects[number] | typeof p5Subjects[number] | typeof p4Subjects[number] | typeof p3Subjects[number];

function subjectsForGrade(grade: TendoGrade): readonly SubjectTuple[] {
  if (grade === "P3") return p3Subjects;
  if (grade === "P4") return p4Subjects;
  if (grade === "P5") return p5Subjects;
  if (grade === "P6") return p6Subjects;
  return p7Subjects;
}

function SubjectGrid({ subjects }: { subjects: readonly SubjectTuple[] }) {
  return (
    <div className="subject-card-grid polished-subject-grid">
      {subjects.map(([href, icon, accent, title, sub, count]) => (
        <Link key={href} href={href} className={`subject-tile polished-subject ${accent}`}>
          <span className="subject-emoji">{icon}</span>
          <div>
            <h3>{title}</h3>
            <p>{sub}</p>
          </div>
          <div className="tile-pills">
            <span>{count}</span>
            <span>Open</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default function StudyDirectory() {
  const [session, setSession] = useState<TendoSession | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setSession(getSession());
    setReady(true);
  }, []);

  if (!ready) return <div className="auth-loading">Loading study library…</div>;

  const isTeacher = session?.role === "teacher";
  const studentGrade = session?.grade ?? "P7";
  const studentSubjects = subjectsForGrade(studentGrade);

  if (!isTeacher) {
    const p3Mode = studentGrade === "P3";
    return (
      <div className="study-page focused-study-page">
        <section className="compact-page-intro subject-intro-card">
          <div>
            <div className="eyebrow">Study · {studentGrade}</div>
            <h1>{p3Mode ? "Your themes" : "Your subjects"}</h1>
            <p className="lead">
              {p3Mode
                ? "P3 is organised by themes, with Religious Education kept as a separate NCDC section."
                : "Only your class is shown here. Pick one subject and continue."}
            </p>
          </div>
          <span aria-hidden="true">📚</span>
        </section>
        <SubjectGrid subjects={studentSubjects} />
      </div>
    );
  }

  return (
    <div className="study-page focused-study-page">
      <section className="compact-page-intro subject-intro-card teacher-content-intro">
        <div>
          <div className="eyebrow">Teacher content library</div>
          <h1>Lessons your learners see</h1>
          <p className="lead">Open topics for lesson inspiration, examples, diagrams and quick checks.</p>
        </div>
        <span aria-hidden="true">👩🏾‍🏫</span>
      </section>

      <section className="teacher-library-section">
        <div className="section-heading compact-heading">
          <div>
            <div className="eyebrow">Primary Seven</div>
            <h2>P7 PLE content</h2>
          </div>
        </div>
        <SubjectGrid subjects={p7Subjects} />
      </section>

      <section className="teacher-library-section">
        <div className="section-heading compact-heading">
          <div>
            <div className="eyebrow">Primary Six</div>
            <h2>P6 foundation content</h2>
          </div>
        </div>
        <SubjectGrid subjects={p6Subjects} />
      </section>



      <section className="teacher-library-section">
        <div className="section-heading compact-heading">
          <div>
            <div className="eyebrow">Primary Three</div>
            <h2>P3 thematic beta</h2>
          </div>
        </div>
        <SubjectGrid subjects={p3Subjects} />
      </section>

      <section className="teacher-library-section">
        <div className="section-heading compact-heading">
          <div>
            <div className="eyebrow">Primary Four</div>
            <h2>P4 beta content</h2>
          </div>
        </div>
        <SubjectGrid subjects={p4Subjects} />
      </section>

      <section className="teacher-library-section">
        <div className="section-heading compact-heading">
          <div>
            <div className="eyebrow">Primary Five</div>
            <h2>P5 beta content</h2>
          </div>
        </div>
        <SubjectGrid subjects={p5Subjects} />
      </section>
    </div>
  );
}
