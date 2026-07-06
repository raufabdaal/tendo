export type TendoRole = "student" | "teacher";

export interface TendoSession {
  role: TendoRole;
  name?: string;
  grade?: "P6" | "P7";
  schoolName?: string;
  signedInAt: string;
}

const STORAGE_KEY = "tendo:session";

export function getSession(): TendoSession | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function saveSession(session: TendoSession): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    window.dispatchEvent(new CustomEvent("tendo:session-change", { detail: session }));
  } catch {}
}

export function clearSession(): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new CustomEvent("tendo:session-change", { detail: null }));
  } catch {}
}
