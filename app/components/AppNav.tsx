"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { TendoSession } from "@/lib/auth-session";

function gradeFromPath(pathname: string, session: TendoSession): "P6" | "P7" {
  if (session.role === "student" && session.grade) return session.grade;
  if (pathname === "/p6-home" || pathname.includes("/p6")) return "P6";
  return "P7";
}

function activeSection(pathname: string, role: TendoSession["role"]): "home" | "study" | "practice" | "papers" | "teacher" | "worksheet" | "reports" {
  if (pathname.startsWith("/teacher/worksheet")) return "worksheet";
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
  const grade = gradeFromPath(pathname, session);
  const active = activeSection(pathname, session.role);
  const homeHref = session.role === "teacher" ? "/teacher" : grade === "P6" ? "/p6-home" : "/";

  const learnerItems = [
    { id: "home", label: "Home", emoji: "🏠", href: homeHref },
    { id: "study", label: "Study", emoji: "📚", href: "/study" },
    { id: "practice", label: "Practice", emoji: "✏️", href: "/practice" },
    { id: "papers", label: "Papers", emoji: "📝", href: "/papers" },
  ] as const;

  const teacherItems = [
    { id: "home", label: "Home", emoji: "🏠", href: "/teacher" },
    { id: "study", label: "Content", emoji: "📚", href: "/study" },
    { id: "worksheet", label: "Worksheets", emoji: "🧾", href: "/teacher/worksheet" },
    { id: "reports", label: "Reports", emoji: "⚠️", href: "/teacher/content-reports" },
  ] as const;

  const navItems = session.role === "teacher" ? teacherItems : learnerItems;
  const firstName = session.name?.split(" ")[0];

  return (
    <header className="app-shell no-print">
      <div className="app-topbar">
        <Link href={homeHref} className="app-brand" aria-label="Tendo home">
          <span className="app-brand-mark">T</span>
          <span className="app-brand-text">
            Tendo
            <small>{session.role === "teacher" ? "Teacher workspace" : `${grade} learner`}</small>
          </span>
        </Link>

        <nav className="top-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={active === item.id ? "active" : undefined}
            >
              <span aria-hidden="true">{item.emoji}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="account-tools">
          {session.role === "student" ? (
            <div className="grade-switch" aria-label="Class switcher">
              <Link href="/p6-home" className={grade === "P6" ? "on" : undefined}>P6</Link>
              <Link href="/" className={grade === "P7" ? "on" : undefined}>P7</Link>
            </div>
          ) : (
            <span className="teacher-account-pill">👩🏾‍🏫 {firstName || "Teacher"}</span>
          )}
          <button type="button" className="sign-out-btn" onClick={onSignOut}>
            Switch
          </button>
        </div>
      </div>

      <nav className="bottom-nav" aria-label="Mobile navigation">
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={active === item.id ? "active" : undefined}
          >
            <span aria-hidden="true">{item.emoji}</span>
            <small>{item.label}</small>
          </Link>
        ))}
      </nav>
    </header>
  );
}
