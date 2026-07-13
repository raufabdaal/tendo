"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import AppNav from "@/components/AppNav";
import { clearLearnerProfile, saveLearnerProfile } from "@/lib/learner-profile";
import { clearSession, getSession, saveSession, type TendoGrade, type TendoRole, type TendoSession } from "@/lib/auth-session";

function homeForGrade(_grade?: TendoGrade) {
  return "/study";
}

function pathGrade(pathname: string): TendoGrade | null {
  if (pathname === "/p3-home" || pathname.startsWith("/p3/theme") || pathname.startsWith("/p3/re")) return "P3";
  if (pathname === "/p4-home" || /\/(math|english|science|social-studies|re)\/p4/.test(pathname)) return "P4";
  if (pathname === "/p5-home" || /\/(math|english|science|social-studies|re)\/p5/.test(pathname)) return "P5";
  if (pathname === "/p6-home" || /\/(math|english|science|social-studies|re)\/p6/.test(pathname)) return "P6";
  if (pathname === "/" || /\/(math|english|science|social-studies|re)\/p7/.test(pathname)) return "P7";
  return null;
}

export default function AuthGate({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<TendoSession | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const pathname = usePathname() ?? "/";
  const router = useRouter();

  useEffect(() => {
    setSession(getSession());
    setHydrated(true);

    const sync = () => setSession(getSession());
    window.addEventListener("storage", sync);
    window.addEventListener("tendo:session-change", sync as EventListener);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener("tendo:session-change", sync as EventListener);
    };
  }, []);

  useEffect(() => {
    if (!hydrated || !session) return;

    if (session.role === "teacher" && (pathname === "/" || pathname === "/p3-home" || pathname === "/p4-home" || pathname === "/p5-home" || pathname === "/p6-home" || pathname.startsWith("/practice") || pathname === "/study")) {
      router.replace("/teacher");
      return;
    }

    if (session.role === "student" && pathname.startsWith("/teacher")) {
      router.replace("/study");
      return;
    }

    // Redirect root and old home pages to /study
    if (session.role === "student" && (pathname === "/" || pathname === "/p3-home" || pathname === "/p4-home" || pathname === "/p5-home" || pathname === "/p6-home")) {
      router.replace("/study");
      return;
    }

    if (session.role === "student") {
      const routeGrade = pathGrade(pathname);
      if (routeGrade && session.grade && routeGrade !== session.grade) {
        router.replace("/study");
      }
    }
  }, [hydrated, pathname, router, session]);

  function handleSignOut() {
    clearSession();
    clearLearnerProfile();
    setSession(null);
    router.replace("/");
  }

  if (!hydrated) {
    return (
      <main className="auth-main">
        <div className="auth-loading">Loading Tendo…</div>
      </main>
    );
  }

  if (!session) {
    return (
      <main className="auth-main">
        <SignInScreen onSignedIn={(nextSession) => setSession(nextSession)} />
      </main>
    );
  }

  return (
    <>
      <AppNav session={session} onSignOut={handleSignOut} />
      <main className={`app-main ${session.role === "teacher" ? "teacher-main" : "student-main"}`}>
        {children}
      </main>
    </>
  );
}

function SignInScreen({ onSignedIn }: { onSignedIn: (session: TendoSession) => void }) {
  const [role, setRole] = useState<TendoRole>("student");
  const [name, setName] = useState("");
  const [grade, setGrade] = useState<TendoGrade>("P7");
  const [schoolName, setSchoolName] = useState("");
  const router = useRouter();

  function signIn() {
    const cleanName = name.trim();
    const cleanSchool = schoolName.trim();
    const nextSession: TendoSession = {
      role,
      name: cleanName || undefined,
      grade: role === "student" ? grade : undefined,
      schoolName: cleanSchool || undefined,
      signedInAt: new Date().toISOString(),
    };

    saveSession(nextSession);

    if (role === "student") {
      saveLearnerProfile({
        name: cleanName || undefined,
        grade,
        onboardedAt: nextSession.signedInAt,
      });
      router.replace("/study");
    } else {
      clearLearnerProfile();
      router.replace("/teacher");
    }

    onSignedIn(nextSession);
  }

  return (
    <section className="auth-card" aria-label="Sign in to Tendo">
      <div className="auth-brand-lockup">
        <span className="app-brand-mark">T</span>
        <h1>Tendo</h1>
      </div>

      <div className="role-choice-grid" role="group" aria-label="Choose account type">
        <button type="button" className={`role-choice ${role === "student" ? "on" : ""}`} onClick={() => setRole("student")}>
          <span>🎓</span>
          <strong>Student</strong>
        </button>
        <button type="button" className={`role-choice teacher ${role === "teacher" ? "on" : ""}`} onClick={() => setRole("teacher")}>
          <span>👩🏾‍🏫</span>
          <strong>Teacher</strong>
        </button>
      </div>

      <div className="auth-form-grid">
        <label className="auth-field">
          <span>{role === "student" ? "Your first name" : "Teacher name"} <em>(optional)</em></span>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder={role === "student" ? "e.g. Akello Joy" : "e.g. Teacher Sarah"} />
        </label>

        {role === "student" ? (
          <div className="auth-field">
            <span>Class</span>
            <div className="auth-grade-grid three-grade-grid">
              <button type="button" className={grade === "P3" ? "on" : ""} onClick={() => setGrade("P3")}>P3</button>
              <button type="button" className={grade === "P4" ? "on" : ""} onClick={() => setGrade("P4")}>P4</button>
              <button type="button" className={grade === "P5" ? "on" : ""} onClick={() => setGrade("P5")}>P5</button>
              <button type="button" className={grade === "P6" ? "on" : ""} onClick={() => setGrade("P6")}>P6</button>
              <button type="button" className={grade === "P7" ? "on" : ""} onClick={() => setGrade("P7")}>P7</button>
            </div>
          </div>
        ) : (
          <label className="auth-field">
            <span>School / centre name <em>(optional)</em></span>
            <input value={schoolName} onChange={(e) => setSchoolName(e.target.value)} placeholder="e.g. Tendo Demo Primary" />
          </label>
        )}
      </div>

      <button type="button" className={`btn btn-primary auth-submit ${role === "teacher" ? "teacher-submit" : ""}`} onClick={signIn}>
        {role === "student" ? "Start studying →" : "Open teacher workspace →"}
      </button>
    </section>
  );
}
