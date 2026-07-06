export type TeacherQuestionStatus = "open" | "closed";
export type TeacherQuestionSubmissionStatus = "submitted" | "marked";

export interface TeacherQuestion {
  id: string;
  title: string;
  prompt: string;
  grade: "P6" | "P7";
  subject: string;
  marks: number;
  markingGuide?: string;
  status: TeacherQuestionStatus;
  createdAt: string;
}

export interface TeacherQuestionSubmission {
  id: string;
  questionId: string;
  studentName?: string;
  answer: string;
  submittedAt: string;
  status: TeacherQuestionSubmissionStatus;
  score?: number;
  feedback?: string;
  markedAt?: string;
}

const QUESTIONS_KEY = "tendo:teacher-questions";
const SUBMISSIONS_KEY = "tendo:teacher-question-submissions";

function readList<T>(key: string): T[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeList<T>(key: string, value: T[]) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    window.dispatchEvent(new CustomEvent("tendo:teacher-questions-change"));
  } catch {}
}

export function listTeacherQuestions(): TeacherQuestion[] {
  return readList<TeacherQuestion>(QUESTIONS_KEY);
}

export function saveTeacherQuestions(questions: TeacherQuestion[]) {
  writeList(QUESTIONS_KEY, questions);
}

export function listTeacherQuestionSubmissions(): TeacherQuestionSubmission[] {
  return readList<TeacherQuestionSubmission>(SUBMISSIONS_KEY);
}

export function saveTeacherQuestionSubmissions(submissions: TeacherQuestionSubmission[]) {
  writeList(SUBMISSIONS_KEY, submissions);
}

export function makeId(prefix: string) {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return `${prefix}-${crypto.randomUUID()}`;
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
