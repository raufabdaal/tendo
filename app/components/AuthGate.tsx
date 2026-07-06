"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import AppNav from "@/components/AppNav";
import { clearLearnerProfile, saveLearnerProfile } from "@/lib/learner-profile";
import { clearSession, getSession, saveSession, type TendoRole, type TendoSession } from "@/lib/auth-session";

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

    if (session.role === "teacher" && (pathname === "/" || pathname === "/p6-home" || pathname === "/practice")) {
      router.replace("/teacher");
    }

    if (session.role === "student" && pathname.startsWith("/teacher")) {
      router.replace(session.grade === "P6" ? "/p6-home" : "/");
      return;
    }

    if (session.role === "student") {
      const isP6Path = pathname === "/p6-home" || pathname.includes("/p6");
      const isP7SubjectPath = /^\/(math|english|science|social-studies|re)\/p7/.test(pathname);

      if (session.grade === "P7" && isP6Path) {
        router.replace("/");
        return;
      }

      if (session.grade === "P6" && (pathname === "/" || isP7SubjectPath)) {
        router.replace("/p6-home");
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
  const [grade, setGrade] = useState<"P6" | "P7">("P7");
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
      router.replace(grade === "P6" ? "/p6-home" : "/");
    } else {
      clearLearnerProfile();
      router.replace("/teacher");
    }

    onSignedIn(nextSession);
  }

  return (
    <section className="auth-card" aria-label="Sign in to Tendo">
      <div className="auth-blob blob-one" aria-hidden="true" />
      <div className="auth-blob blob-two" aria-hidden="true" />

      <div className="auth-brand-lockup">
        <span className="app-brand-mark">T</span>
        <div>
          <div className="auth-kicker">Welcome to Tendo</div>
          <h1>Sign in for your own experience.</h1>
        </div>
      </div>
      <p className="lead">
        Students get a simple study path. Teachers get worksheets, class progress and the same content library for lesson inspiration.
      </p>

      <div className="role-choice-grid" role="group" aria-label="Choose account type">
        <button
          type="button"
          className={`role-choice ${role === "student" ? "on" : ""}`}
          onClick={() => setRole("student")}
        >
          <span>🎓</span>
          <strong>Student</strong>
          <small>Study, practise and attempt papers.</small>
        </button>
        <button
          type="button"
          className={`role-choice teacher ${role === "teacher" ? "on" : ""}`}
          onClick={() => setRole("teacher")}
        >
          <span>👩🏾‍🏫</span>
          <strong>Teacher</strong>
          <small>Dashboard, worksheets and content library.</small>
        </button>
      </div>

      <div className="auth-form-grid">
        <label className="auth-field">
          <span>{role === "student" ? "Your first name" : "Teacher name"} <em>(optional)</em></span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={role === "student" ? "e.g. Akello Joy" : "e.g. Teacher Sarah"}
          />
        </label>

        {role === "student" ? (
          <div className="auth-field">
            <span>Class</span>
            <div className="auth-grade-grid">
              <button type="button" className={grade === "P6" ? "on" : ""} onClick={() => setGrade("P6")}>P6</button>
              <button type="button" className={grade === "P7" ? "on" : ""} onClick={() => setGrade("P7")}>P7</button>
            </div>
          </div>
        ) : (
          <label className="auth-field">
            <span>School name <em>(optional)</em></span>
            <input
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
              placeholder="e.g. Tendo Demo Primary"
            />
          </label>
        )}
      </div>

      <button type="button" className={`btn btn-primary auth-submit ${role === "teacher" ? "teacher-submit" : ""}`} onClick={signIn}>
        {role === "student" ? "Start studying →" : "Open teacher workspace →"}
      </button>

      <div className="auth-note">
        v0 uses device sign-in only. Real school accounts can be connected later without changing the experience.
      </div>
    </section>
  );
}
