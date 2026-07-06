import Link from "next/link";
import ClassSelector from "@/components/ClassSelector";

export default function P6HomePage() {
  return (
    <>
      <div className="eyebrow">Welcome · Primary Six</div>
      <h1>Primary 6 Foundation Study.</h1>
      <p className="lead">
        Pick a subject. Pick a topic. Read the modules. Take a practice quiz. Repeat. Prepare for P7 PLE early.
      </p>

      <ClassSelector activeLevel="P6" />

      <h2>P6 Subjects</h2>

      <Link href="/math/p6" className="card">
        <div className="card-row">
          <div>
            <div className="card-title">Mathematics</div>
            <div className="card-sub">P.6 · Sets, Whole Numbers up to 10M, Fractions</div>
          </div>
          <span className="badge badge-math">Active</span>
        </div>
      </Link>

      <Link href="/english/p6" className="card">
        <div className="card-row">
          <div>
            <div className="card-title">English</div>
            <div className="card-sub">P.6 · Road Safety, Debating, Occupations</div>
          </div>
          <span className="badge badge-math">Active</span>
        </div>
      </Link>

      <Link href="/science/p6" className="card">
        <div className="card-row">
          <div>
            <div className="card-title">Integrated Science</div>
            <div className="card-sub">P.6 · Classification, Sound, Circulatory System</div>
          </div>
          <span className="badge badge-math">Active</span>
        </div>
      </Link>

      <Link href="/social-studies/p6" className="card">
        <div className="card-row">
          <div>
            <div className="card-title">Social Studies</div>
            <div className="card-sub">P.6 · People and Resources of East Africa</div>
          </div>
          <span className="badge badge-math">Active</span>
        </div>
      </Link>

      <Link href="/re/p6" className="card">
        <div className="card-row">
          <div>
            <div className="card-title">Religious Education</div>
            <div className="card-sub">P.6 · CRE & IRE foundation topics</div>
          </div>
          <span className="badge badge-math">Active</span>
        </div>
      </Link>

      <div className="foot">
        Primary Six foundation curriculum aligned with NCDC Set One syllabus.
      </div>
    </>
  );
}
