"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { TendoGrade, TendoSession } from "@/lib/auth-session";

function gradeFromPath(pathname: string, session: TendoSession): TendoGrade {
  if (session.role === "student" && session.grade) return session.grade;
  if (pathname === "/p3-home" || pathname.startsWith("/p3/theme") || pathname.startsWith("/p3/re")) return "P3";
  if (pathname === "/p4-home" || pathname.includes("/p4")) return "P4";
  if (pathname === "/p5-home" || pathname.includes("/p5")) return "P5";
  if (pathname === "/p6-home" || pathname.includes("/p6")) return "P6";
  return "P7";
}

export default function AppNav({
  session,
  onSignOut,
}: {
  session: TendoSession;
  onSignOut: () => void;
}) {
  const pathname = usePathname() ?? "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const grade = gradeFromPath(pathname, session);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const firstName = session.name?.split(" ")[0];

  if (session.role === "teacher") {
    return (
      <header className="app-shell teacher-shell no-print">
        <div className="app-topbar teacher-topbar">
          <Link href="/teacher" className="app-brand" aria-label="Tendo teacher home">
            <span className="app-brand-mark">T</span>
            <span className="app-brand-text">
              Tendo
              <small>Teacher</small>
            </span>
          </Link>

          <div className="teacher-menu-wrap">
            <span className="teacher-account-pill">👩🏾‍🏫 {firstName || "Teacher"}</span>
            <button
              type="button"
              className="hamburger-btn"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        {menuOpen && (
          <>
            <button
              type="button"
              className="menu-backdrop"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            />
            <div className="menu-popover" role="dialog" aria-label="Menu">
              <div className="menu-head">
                <strong>{firstName || "Teacher"}</strong>
                <small>{session.schoolName || "Teacher workspace"}</small>
              </div>
              <nav className="menu-list">
                <Link href="/teacher">🏠 Teacher home</Link>
                <Link href="/study">📚 Content library</Link>
                <Link href="/teacher/worksheet">🧾 Worksheets</Link>
                <Link href="/teacher/questions">✍️ Set questions</Link>
                <Link href="/papers">📝 Past papers</Link>
                <Link href="/teacher/content-reports">⚠️ Content reports</Link>
              </nav>
              <button type="button" className="menu-signout" onClick={onSignOut}>
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
      <div className="app-topbar student-topbar">
        <Link href="/study" className="app-brand" aria-label="Tendo home">
          <span className="app-brand-mark">T</span>
        </Link>

        <div className="topbar-right">
          <span className="grade-pill">{grade}</span>
          <button
            type="button"
            className="hamburger-btn"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {menuOpen && (
        <>
          <button
            type="button"
            className="menu-backdrop"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          />
          <div className="menu-popover" role="dialog" aria-label="Menu">
            <div className="menu-head">
              <strong>{firstName || `${grade} Learner`}</strong>
              <small>{grade} · Tendo</small>
            </div>
            <nav className="menu-list">
              <Link href="/study">📚 Subjects</Link>
              <Link href="/practice">✏️ Practice</Link>
              <Link href="/papers">📝 Past papers</Link>
            </nav>
            <button type="button" className="menu-signout" onClick={onSignOut}>
              Switch account
            </button>
          </div>
        </>
      )}
    </header>
  );
}
