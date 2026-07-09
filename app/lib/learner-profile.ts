// Frictionless Learner Profile & Class Lock (legacy helper)
// Current primary session handling is in auth-session.ts / AuthGate.tsx.

export interface LearnerProfile {
  name?: string;
  grade: "P4" | "P5" | "P6" | "P7";
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
