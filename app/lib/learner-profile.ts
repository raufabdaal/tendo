// Frictionless Learner Profile & Class Lock (DEV-015)
// Stores learner grade choice (P6 vs P7) and optional name in browser storage.
// Ensures P6 learners see P6 content and P7 learners see P7 content without needing
// passwords or internet sign-ins.

export interface LearnerProfile {
  name?: string;
  grade: "P6" | "P7";
  onboardedAt: string;
}

const STORAGE_KEY = "tendo:learner-profile";

export function getLearnerProfile(): LearnerProfile | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function saveLearnerProfile(profile: LearnerProfile): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  } catch {}
}

export function clearLearnerProfile(): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {}
}
