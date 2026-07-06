// Presentation/sample class data for the teacher dashboard.
//
// This data makes the product feel alive during demos and school previews.
// It is intentionally isolated from real auth/user data and can be disabled
// later with NEXT_PUBLIC_TENDO_PRESENTATION_DATA=off once real backend auth is live.

export interface DemoStudent {
  id: string;
  name: string;
  classCode: string;
  topicActivity: Record<string, { bestScore: number; lastTotal: number; attempts: number; updatedAt: string }>;
  paperActivity: Record<string, { best: number; lastTotal: number; attempts: number; updatedAt: string }>;
}

const NAMES = [
  "Akello Joy", "Mukasa Daniel", "Namutebi Sarah", "Okello Brian", "Nakato Faith",
  "Ssemakula Trevor", "Achieng Patricia", "Kato Allan", "Auma Rebecca", "Wanyama Joshua",
  "Nabirye Mariam", "Tumusiime Ronald", "Apio Stella", "Mugisha Henry", "Nakimera Esther",
  "Opio Kenneth", "Kemigisha Doreen", "Ssali Vincent", "Atim Christine", "Lubega Ivan",
  "Nansubuga Ruth", "Kiprotich Samuel",
];

// Current P7 topic ids across subjects so dashboard labels resolve cleanly.
const TOPIC_IDS = [
  "set-concepts",
  "whole-numbers",
  "operations-on-whole-numbers",
  "fractions",
  "data-handling",
  "construction",
  "time",
  "algebra",
  "school-holidays",
  "letter-writing",
  "electronic-media",
  "environmental-protection",
  "muscular-skeletal-system",
  "electricity-and-magnetism",
  "light-energy",
  "interdependence-environment",
  "location-of-africa",
  "physical-features-of-africa",
  "climate-of-africa",
  "major-world-organisations",
];

const PAPER_IDS = ["ple-math-2018", "ple-math-2019", "ple-math-2020"];

const PAPER_TOTAL_MARKS: Record<string, number> = {
  "ple-math-2018": 100,
  "ple-math-2019": 100,
  "ple-math-2020": 100,
};

const TOPIC_QUIZ_LEN = 10;

let seed = 7;
function rnd(): number {
  seed = (seed * 1664525 + 1013904223) % 4294967296;
  return seed / 4294967296;
}
function pickInt(min: number, max: number): number {
  return Math.floor(rnd() * (max - min + 1)) + min;
}
function pickDateWithinDays(daysAgo: number): string {
  const d = new Date();
  d.setDate(d.getDate() - pickInt(0, daysAgo));
  d.setHours(pickInt(8, 20), pickInt(0, 59), 0, 0);
  return d.toISOString();
}

export function generateDemoClass(): DemoStudent[] {
  seed = 7;
  const students: DemoStudent[] = [];

  for (let i = 0; i < NAMES.length; i++) {
    // Presentation data should look active and hopeful, with some learners needing support.
    const r = rnd();
    const band: "high" | "mid" | "low" = r < 0.42 ? "high" : r < 0.9 ? "mid" : "low";

    const topicCount =
      band === "high" ? pickInt(12, 18) : band === "mid" ? pickInt(8, 14) : pickInt(4, 8);

    const shuffled = [...TOPIC_IDS].sort(() => rnd() - 0.5);
    const attempted = shuffled.slice(0, topicCount);

    const topicActivity: DemoStudent["topicActivity"] = {};
    for (const tid of attempted) {
      const baseBest =
        band === "high" ? pickInt(8, 10) : band === "mid" ? pickInt(6, 8) : pickInt(3, 6);
      topicActivity[tid] = {
        bestScore: baseBest,
        lastTotal: TOPIC_QUIZ_LEN,
        attempts: pickInt(1, 4),
        updatedAt: pickDateWithinDays(10),
      };
    }

    const paperActivity: DemoStudent["paperActivity"] = {};
    const paperAttempts =
      band === "high" ? pickInt(2, 3) : band === "mid" ? pickInt(1, 2) : pickInt(0, 1);
    const shuffledPapers = [...PAPER_IDS].sort(() => rnd() - 0.5).slice(0, paperAttempts);
    for (const pid of shuffledPapers) {
      const total = PAPER_TOTAL_MARKS[pid];
      const pctTarget =
        band === "high" ? pickInt(72, 92) : band === "mid" ? pickInt(52, 74) : pickInt(30, 52);
      const best = Math.round((pctTarget / 100) * total);
      paperActivity[pid] = {
        best,
        lastTotal: total,
        attempts: pickInt(1, 2),
        updatedAt: pickDateWithinDays(14),
      };
    }

    students.push({
      id: `demo-${i + 1}`,
      name: NAMES[i],
      classCode: "P7",
      topicActivity,
      paperActivity,
    });
  }

  return students;
}

const STORAGE_KEY = "tendo:demo-class";

export function saveDemoClass(students: DemoStudent[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
}

export function loadDemoClass(): DemoStudent[] | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function clearDemoClass() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(STORAGE_KEY);
}
