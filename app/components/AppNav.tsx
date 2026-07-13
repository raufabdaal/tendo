"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { TendoGrade, TendoSession } from "@/lib/auth-session";

export default function AppNav({
  session,
  onSignOut,
}: {
  session: TendoSession;
  onSignOut: () => void;
}) {
  const pathname = usePathname() ?? "/";
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const grade = session.grade ?? "P7";
  const firstName = session.name?.split(" ")[0];

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isOnSubjectList = /^\/(math|english|science|social-studies|re)\/p[3-7]$/.test(pathname);
  const isOnTopic = /^\/(math|english|science|social-studies|re)\/p[3-7]\/[^/]+$/.test(pathname);
  const isOnStudy = pathname === "/study";
  const isOnPractice = pathname.startsWith("/practice");
  const isOnPapers = pathname.startsWith("/papers");

  function getBackHref(): string | null {
    if (isOnTopic) {
      // e.g. /math/p7/set-concepts → /math/p7
      const parts = pathname.split("/");
      parts.pop();
      return parts.join("/");
    }
    if (isOnSubjectList) return "/study";
    return null;
  }

  const backHref = getBackHref();

  if (session.role === "teacher") {
    return (
      <header className="app-shell teacher-shell no-print">
        <div className="app-topbar">
          <Link href="/teacher" className="app-brand" aria-label="Tendo">
            <span className="app-brand-mark">T</span>
            <span className="app-brand-text">Tendo<small>Teacher</small></span>
          </Link>
          <div className="teacher-menu-wrap">
            <span className="teacher-pill">👩🏾‍🏫 {firstName || "Teacher"}</span>
            <button
              type="button"
              className="hamburger-btn"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
        {menuOpen && (
          <>
            <button type="button" className="menu-backdrop" aria-label="Close menu" onClick={() => setMenuOpen(false)} />
            <div className="menu-popover" role="dialog" aria-label="Menu">
              <div className="menu-head">
                <strong>{firstName || "Teacher"}</strong>
                <small>{session.schoolName || "Teacher workspace"}</small>
              </div>
              <nav className="menu-list">
                <Link href="/teacher">🏠 Home</Link>
                <Link href="/study">📚 Content library</Link>
                <Link href="/teacher/worksheet">🧾 Worksheets</Link>
                <Link href="/teacher/questions">✍️ Questions</Link>
                <Link href="/papers">📝 Past papers</Link>
                <Link href="/teacher/content-reports">⚠️ Reports</Link>
              </nav>
              <button type="button" className="menu-signout" onClick={onSignOut}>Switch account</button>
            </div>
          </>
        )}
      </header>
    );
  }

  return (
    <header className="app-shell student-shell no-print">
      <div className="app-topbar student-topbar">
        <div className="topbar-left">
          {backHref ? (
            <Link href={backHref} className="back-btn" aria-label="Go back">
              ←
            </Link>
          ) : (
            <Link href="/study" className="app-brand" aria-label="Tendo">
              <span className="app-brand-mark">T</span>
            </Link>
          )}
          <span className="grade-pill">{grade}</span>
        </div>

        <div className="topbar-right">
          <button
            type="button"
            className="hamburger-btn"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {menuOpen && (
        <>
          <button type="button" className="menu-backdrop" aria-label="Close menu" onClick={() => setMenuOpen(false)} />
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
            <button type="button" className="menu-signout" onClick={onSignOut}>Switch account</button>
          </div>
        </>
      )}
    </header>
  );
}
