"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function gradeFromPath(pathname: string): "P6" | "P7" {
  if (pathname === "/p6-home" || pathname.includes("/p6")) return "P6";
  return "P7";
}

function activeSection(pathname: string): "home" | "study" | "practice" | "papers" | "teacher" {
  if (pathname.startsWith("/teacher")) return "teacher";
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

export default function AppNav() {
  const pathname = usePathname() ?? "/";
  const grade = gradeFromPath(pathname);
  const active = activeSection(pathname);
  const homeHref = grade === "P6" ? "/p6-home" : "/";
  const studyHref = "/study";

  const navItems = [
    { id: "home", label: "Home", emoji: "🏠", href: homeHref },
    { id: "study", label: "Study", emoji: "📚", href: studyHref },
    { id: "practice", label: "Practice", emoji: "✏️", href: "/practice" },
    { id: "papers", label: "Papers", emoji: "📝", href: "/papers" },
    { id: "teacher", label: "Teacher", emoji: "👩🏾‍🏫", href: "/teacher" },
  ] as const;

  return (
    <header className="app-shell no-print">
      <div className="app-topbar">
        <Link href={homeHref} className="app-brand" aria-label="Tendo home">
          <span className="app-brand-mark">T</span>
          <span className="app-brand-text">
            Tendo
            <small>{active === "teacher" ? "Teacher mode" : `${grade} learner mode`}</small>
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

        <div className="grade-switch" aria-label="Class switcher">
          <Link href="/p6-home" className={grade === "P6" ? "on" : undefined}>P6</Link>
          <Link href="/" className={grade === "P7" ? "on" : undefined}>P7</Link>
        </div>
      </div>

      <nav className="bottom-nav" aria-label="Mobile navigation">
        {navItems.filter((item) => item.id !== "papers").map((item) => (
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
