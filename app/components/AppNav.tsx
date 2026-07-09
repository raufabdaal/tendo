"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { TendoGrade, TendoSession } from "@/lib/auth-session";

function gradeFromPath(pathname: string, session: TendoSession): TendoGrade {
  if (session.role === "student" && session.grade) return session.grade;
  if (pathname === "/p4-home" || pathname.includes("/p4")) return "P4";
  if (pathname === "/p5-home" || pathname.includes("/p5")) return "P5";
  if (pathname === "/p6-home" || pathname.includes("/p6")) return "P6";
  return "P7";
}

function homeForGrade(grade: TendoGrade) {
  if (grade === "P4") return "/p4-home";
  if (grade === "P5") return "/p5-home";
  if (grade === "P6") return "/p6-home";
  return "/";
}

function activeSection(pathname: string, role: TendoSession["role"]): "home" | "study" | "practice" | "papers" | "teacher" | "worksheet" | "questions" | "reports" {
  if (pathname.startsWith("/teacher/worksheet")) return "worksheet";
  if (pathname.startsWith("/teacher/questions")) return "questions";
  if (pathname.startsWith("/teacher/content-reports")) return "reports";
  if (pathname.startsWith("/teacher")) return role === "teacher" ? "home" : "teacher";
  if (pathname.startsWith("/papers")) return "papers";
  if (pathname.startsWith("/practice")) return "practice";
  if (
    pathname.startsWith("/math") ||
    pathname.startsWith("/english") ||
    pathname.startsWith("/science") ||
    pathname.startsWith("/social-studies") ||
    pathname.startsWith("/re") ||
    pathname.startsWith("/study")
  ) return "study";
  return "home";
}

export default function AppNav({
  session,
  onSignOut,
}: {
  session: TendoSession;
  onSignOut: () => void;
}) {
  const pathname = usePathname() ?? "/";
  const [teacherMenuOpen, setTeacherMenuOpen] = useState(false);
  const grade = gradeFromPath(pathname, session);
  const active = activeSection(pathname, session.role);
  const homeHref = session.role === "teacher" ? "/teacher" : homeForGrade(grade);

  useEffect(() => {
    setTeacherMenuOpen(false);
  }, [pathname]);

  const learnerItems = [
    { id: "home", label: "Home", emoji: "🏠", href: homeHref },
    { id: "study", label: "Study", emoji: "📚", href: "/study" },
    { id: "practice", label: "Practice", emoji: "✏️", href: "/practice" },
    { id: "papers", label: "Papers", emoji: "📝", href: "/papers" },
  ] as const;

  const teacherItems = [
    { id: "home", label: "Teacher home", emoji: "🏠", href: "/teacher" },
    { id: "study", label: "Content library", emoji: "📚", href: "/study" },
    { id: "worksheet", label: "Worksheets", emoji: "🧾", href: "/teacher/worksheet" },
    { id: "questions", label: "Set questions", emoji: "✍️", href: "/teacher/questions" },
    { id: "papers", label: "Past papers", emoji: "📝", href: "/papers" },
    { id: "reports", label: "Content reports", emoji: "⚠️", href: "/teacher/content-reports" },
  ] as const;

  const firstName = session.name?.split(" ")[0];

  if (session.role === "teacher") {
    return (
      <header className="app-shell teacher-shell no-print">
        <div className="app-topbar teacher-topbar">
          <Link href="/teacher" className="app-brand" aria-label="Tendo teacher home">
            <span className="app-brand-mark">T</span>
            <span className="app-brand-text">
              Tendo
              <small>Teacher workspace</small>
            </span>
          </Link>

          <div className="teacher-menu-wrap">
            <span className="teacher-account-pill">👩🏾‍🏫 {firstName || "Teacher"}</span>
            <button type="button" className="teacher-menu-button" aria-label={teacherMenuOpen ? "Close teacher menu" : "Open teacher menu"} aria-expanded={teacherMenuOpen} onClick={() => setTeacherMenuOpen((open) => !open)}>
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        {teacherMenuOpen && (
          <>
            <button type="button" className="teacher-menu-backdrop" aria-label="Close menu" onClick={() => setTeacherMenuOpen(false)} />
            <div className="teacher-menu-popover" role="dialog" aria-label="Teacher navigation menu">
              <div className="teacher-menu-head">
                <span>👩🏾‍🏫</span>
                <div>
                  <strong>{firstName || "Teacher"}</strong>
                  <small>{session.schoolName || "Tendo teacher workspace"}</small>
                </div>
              </div>

              <nav className="teacher-menu-list" aria-label="Teacher navigation">
                {teacherItems.map((item) => (
                  <Link key={item.id} href={item.href} className={active === item.id ? "active" : undefined}>
                    <span aria-hidden="true">{item.emoji}</span>
                    <strong>{item.label}</strong>
                  </Link>
                ))}
              </nav>

              <button type="button" className="teacher-menu-switch" onClick={onSignOut}>
                Switch account
              </button>
            </div>
          </>
        )}
      </header>
    );
  }

  return (
    <header className="app-shell student-shell no-print">
      <div className="app-topbar">
        <Link href={homeHref} className="app-brand" aria-label="Tendo home">
          <span className="app-brand-mark">T</span>
          <span className="app-brand-text">
            Tendo
            <small>{`${grade} learner`}</small>
          </span>
        </Link>

        <nav className="top-nav" aria-label="Main navigation">
          {learnerItems.map((item) => (
            <Link key={item.id} href={item.href} className={active === item.id ? "active" : undefined}>
              <span aria-hidden="true">{item.emoji}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="account-tools">
          <span className="student-class-pill">🎓 {grade}</span>
          <button type="button" className="sign-out-btn" onClick={onSignOut}>Switch</button>
        </div>
      </div>

      <nav className="bottom-nav" aria-label="Mobile navigation">
        {learnerItems.map((item) => (
          <Link key={item.id} href={item.href} className={active === item.id ? "active" : undefined}>
            <span aria-hidden="true">{item.emoji}</span>
            <small>{item.label}</small>
          </Link>
        ))}
      </nav>
    </header>
  );
}
