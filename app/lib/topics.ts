import { addUpperPrimaryMathV4 } from "@/lib/v4-math-helpers";
// Phase 1 + 3 content layer.
// Topics structured as typed data (DEV-006). MDX migration deferred until topic count justifies it.
// Voice and structure per docs/spec/content-guidelines.md.
//
// reviewStatus flag (DEV-013):
//   "verified"  → human-reviewed, safe to demo to schools
//   "beta"      → live for beta testers, still awaiting official/human review
//   "draft"     → internal only, not ready for beta
// In Phase 3 we display a small "Reviewed: pending" pill on draft topics.

import type { ContentFormat, LowerPrimaryLesson, UpperPrimaryLesson } from "@/lib/content-blocks";

export type Choice = string;

export interface QuizQuestion {
  q: string;
  choices: Choice[];
  correct: number; // index 0-3
  why: string;
}

export interface TopicNote {
  intro: string; // "Why this matters" callout
  study?: {
    bigIdea: string;
    keyVocabulary?: Array<{ term: string; meaning: string }>;
    sections?: Array<{ title: string; points: string[] }>;
    visual?: TopicVisual;
    examTip?: string;
  };
  learningObjectives?: string[]; // what the student will be able to do after this topic
  whatYouNeedToKnow: string[]; // core concept explanations
  worked: {
    problem: string;
    steps: string[];
    answer: string;
  };
  commonMistakes?: string[]; // traps students often fall into
  tryThis?: {
    question: string;
    choices: string[];
    correct: number; // index 0-3
    explanation: string;
  };
  writingTasks?: Array<{
    title: string;
    prompt: string;
    planningSteps: string[];
    checklist: string[];
    modelOpening?: string;
  }>;
  recap: string[];
}

export interface TopicVisual {
  title: string;
  description: string;
  kind?: "map" | "diagram" | "timeline" | "comparison" | "flow" | "cards";
}

export interface SubtopicModule {
  moduleId: string;
  title: string;
  bigIdea: string;
  learnIt: string[];
  imageUrl?: string; // e.g. "/images/science/human-skeleton-labelled.png"
  imageCaption?: string; // description or educational caption for the image
  videoUrl?: string; // e.g. "https://youtu.be/..."
  workedExample?: {
    question: string;
    steps: string[];
    answer: string;
  };
  tryThis?: {
    question: string;
    choices: string[];
    correct: number;
    explanation: string;
  };
  visual?: TopicVisual;
  examTip?: string;
}

export interface Subtopic {
  subtopicId: string;
  title: string;
  modules: SubtopicModule[];
}

export interface Topic {
  id: string;
  themeId: string;
  themeName: string;
  title: string;
  estMinutes: number;
  note: TopicNote;
  quiz: QuizQuestion[];
  status: "published" | "coming-soon";
  reviewStatus: "verified" | "beta" | "draft";
  /** YouTube / direct video URL to embed in the Watch tab. Undefined = placeholder. */
  videoUrl?: string;
  /** v4 content format pilot/migration marker. */
  contentFormat?: ContentFormat;
  /** Lower-primary v4 child-facing lessons. */
  lowerPrimaryLessons?: LowerPrimaryLesson[];
  /** Upper-primary v4 child-facing lessons. */
  upperPrimaryLessons?: UpperPrimaryLesson[];
  /** If true, v4 helper-generated lessons should not be appended after hand-built lessons. */
  useOnlyV4Lessons?: boolean;
  /** Modular v3 content. If present, the Read tab renders subtopic directory + module viewer. */
  subtopics?: Subtopic[];
}


function balanceTopicAnswers(topics: Topic[]): Topic[] {
  let nextCorrectIndex = 0;
  function visit(value: unknown): void {
    if (Array.isArray(value)) { value.forEach(visit); return; }
    if (!value || typeof value !== "object") return;
    const record = value as Record<string, unknown>;
    if (Array.isArray(record.choices) && typeof record.correct === "number" && record.choices.length === 4) {
      const choices = record.choices as string[];
      const currentCorrect = record.correct;
      if (currentCorrect >= 0 && currentCorrect < choices.length) {
        const answer = choices[currentCorrect];
        const remaining = choices.filter((_, index) => index !== currentCorrect);
        const targetIndex = nextCorrectIndex % 4;
        remaining.splice(targetIndex, 0, answer);
        record.choices = remaining;
        record.correct = targetIndex;
        nextCorrectIndex += 1;
      }
    }
    Object.values(record).forEach(visit);
  }
  visit(topics);
  return topics;
}

const P7_MATH_TERMS: Record<string, "Term I" | "Term II" | "Term III"> = {
  "set-concepts": "Term I",
  "whole-numbers": "Term I",
  "operations-on-whole-numbers": "Term I",
  "patterns-and-sequences": "Term I",
  "fractions": "Term II",
  "integers": "Term II",
  "data-handling": "Term II",
  "construction": "Term II",
  "time": "Term II",
  "length-mass-capacity": "Term III",
  "algebra": "Term III"
};

const TOPICS_DATA: Topic[] = [
  // ──────────────────────── Phase 1 (verified) ────────────────────────export const TOPICS: Topic[] = [
  {
    id: "set-concepts",
    themeId: "theme-1-sets",
    themeName: "Sets",
    title: "Set Concepts",
    estMinutes: 40,
    status: "published",
    reviewStatus: "verified",
    videoUrl: "https://youtu.be/BAUouvIwPZQ",
    note: {
      intro: "Why this matters: Mastering Set Concepts builds essential mathematical problem-solving skills tested across Section A and Section B of the PLE examination.",
      learningObjectives: [
        "Solve numerical and word problems related to Finite and infinite sets.",
        "Solve numerical and word problems related to Subsets.",
        "Solve numerical and word problems related to Venn diagrams (2 events).",
        "Solve numerical and word problems related to Probability (introduction).",
      ],
      whatYouNeedToKnow: [
        "Set Concepts groups foundational P7 competencies including: Finite and infinite sets, Subsets, Venn diagrams (2 events), Probability (introduction), Probability of numbers and events.",
        "Follow step-by-step methods, always show working clearly, and check your units or signs.",
      ],
      worked: {
        problem: "Evaluate a basic Set Concepts problem.",
        steps: [
          "Identify given values.",
          "Apply correct formula or operation.",
        ],
        answer: "Correct verified answer.",
      },
      recap: [
        "Understand key formulas and rules of Set Concepts.",
        "Check working step by step and verify units and arithmetic.",
      ],
    },
    subtopics: [
      {
        subtopicId: "finite-infinite-sets",
        title: "1. Types of Sets: Finite, Infinite, Equal and Disjoint",
        modules: [
          {
            moduleId: "types-of-sets-basics",
            videoUrl: "https://youtu.be/BAUouvIwPZQ",
            title: "Equal, Equivalent, Empty and Disjoint Sets",
            bigIdea: "Sets classify objects or numbers; comparing their elements reveals whether they are equal, equivalent, empty, or disjoint.",
            learnIt: [
              "A set is a well-defined collection of distinct objects, numbers, or elements enclosed in curly brackets { }.",
              "Equal sets: two sets are equal if they contain the exact same elements, even if listed in a different order. Example: If A = {2, 4, 6} and B = {6, 2, 4}, then A = B.",
              "Equivalent sets: two sets are equivalent if they contain the exact same number of elements (same cardinal number n), even if the elements themselves are different. Example: If P = {a, b, c} and Q = {1, 2, 3}, then n(P) = 3 and n(Q) = 3, so P is equivalent to Q (P ~ Q).",
              "Empty / Null set: a set that contains completely zero elements. Denoted by the symbol ∅ or empty brackets { }. Example: The set of cows flying in the sky is an empty set.",
              "Disjoint sets: two sets that share completely zero common elements. Their intersection is an empty set (A ∩ B = ∅)."
            ],
            workedExample: {
              question: "Given set M = {p, q, r, s} and set N = {2, 4, 6, 8}, state with a reason whether set M and set N are equal or equivalent.",
              steps: [
                "Step 1: Count the number of elements in set M: n(M) = 4.",
                "Step 2: Count the number of elements in set N: n(N) = 4.",
                "Step 3: Check if the elements are identical: letters vs even numbers (not identical).",
                "Step 4: Since n(M) = n(N) = 4 but elements differ, they are equivalent sets."
              ],
              answer: "Set M and set N are equivalent sets because they have the same cardinal number of elements (4)."
            },
            tryThis: {
              question: "If set X = {odd numbers between 2 and 10} and set Y = {3, 5, 7, 9}, which statement is true?",
              choices: ["Set X and set Y are disjoint sets", "Set X and set Y are equal sets (X = Y)", "Set X is an empty set", "Set Y has 5 elements"],
              correct: 1,
              explanation: "Odd numbers between 2 and 10 are exactly {3, 5, 7, 9}, so set X and set Y contain the exact same members."
            }
          },
          {
            moduleId: "finite-vs-infinite",
            title: "Finite and Infinite Sets",
            bigIdea: "A finite set has a countable number of elements with a clear end, while an infinite set continues endlessly.",
            learnIt: [
              "Finite set: a set whose members can be counted up to a final last element. Its cardinal number n is a specific whole number. Example: Set of days in a week = {Monday, Tuesday, ..., Sunday}, n = 7.",
              "Infinite set: a set whose members continue endlessly without stopping. We cannot count all its members. Denoted using three ellipsis dots (...) at the end. Example: Set of all even numbers = {2, 4, 6, 8, 10, ...}.",
              "Listing roster notation: always separate elements with commas inside curly brackets { }."
            ],
            workedExample: {
              question: "Is the set K = {multiples of 5 greater than 0} finite or infinite? List its first four members.",
              steps: [
                "Step 1: Recall the definition of multiples of 5: 5, 10, 15, 20, 25, 30...",
                "Step 2: Check if there is a largest multiple of 5: numbers continue forever without end.",
                "Step 3: Conclude that set K is infinite and write the first four terms with ellipsis dots."
              ],
              answer: "Set K is an infinite set. First four members: K = {5, 10, 15, 20, ...}."
            },
            tryThis: {
              question: "Which of the following represents a finite set?",
              choices: ["The set of stars in the universe", "The set of whole numbers greater than 10", "The set of months in a year starting with the letter J", "The set of odd numbers"],
              correct: 2,
              explanation: "Months starting with J are {January, June, July}, which is countable and finite (exactly 3 elements)."
            }
          }
        ]
      },
      {
        subtopicId: "subsets",
        title: "2. Subsets and Formula 2^n",
        modules: [
          {
            moduleId: "subsets-core",
            videoUrl: "https://youtu.be/CMHmvvz8uJE",
            imageUrl: "/images/math/subset-venn-diagram.png",
            imageCaption: "A smaller set circle completely enclosed inside a larger set circle.",
            title: "Understanding Subsets and Listing Method",
            bigIdea: "A subset is a set whose elements are all contained inside another parent set.",
            learnIt: [
              "If every member of set A is also found inside set B, then A is a subset of B (written as A ⊂ B).",
              "Universal set (E or U): the parent enclosing set containing all elements under consideration.",
              "Two fundamental rules of subsets: 1) The empty set ∅ is a subset of every set; 2) Every set is a subset of itself.",
              "Systematic listing of subsets: start with the empty set {}, then list subsets with 1 element, then 2 elements, and finally the full set itself."
            ],
            workedExample: {
              question: "List all the subsets of set P = {x, y}.",
              steps: [
                "Step 1: List the empty set: { }.",
                "Step 2: List subsets containing exactly 1 element: {x}, {y}.",
                "Step 3: List subsets containing exactly 2 elements (the set itself): {x, y}.",
                "Step 4: Combine all listed subsets."
              ],
              answer: "The subsets of P are: { }, {x}, {y}, and {x, y}. Total subsets = 4."
            },
            tryThis: {
              question: "Which of the following is ALWAYS a subset of any given set S?",
              choices: ["The set {0}", "The empty set ∅", "The set of even numbers", "An infinite set"],
              correct: 1,
              explanation: "By mathematical definition, the null/empty set ∅ is a subset of every set."
            }
          },
          {
            moduleId: "subsets-formula",
            title: "Calculating Subsets (2^n) and Proper Subsets",
            bigIdea: "The total number of subsets for a set with n elements is calculated using the exponential formula 2^n.",
            learnIt: [
              "Formula for Total Number of Subsets = 2^n, where n is the cardinal number of elements in the set.",
              "Examples: If n = 1, subsets = 2^1 = 2. If n = 2, subsets = 2^2 = 4. If n = 3, subsets = 2^3 = 2 × 2 × 2 = 8. If n = 4, subsets = 2^4 = 16.",
              "Proper Subset: any subset that is smaller than the parent set (excludes the set itself). Formula for Number of Proper Subsets = 2^n - 1."
            ],
            workedExample: {
              question: "Set Q contains the vowel letters in the word 'EDUCATION'. Find the number of proper subsets of set Q.",
              steps: [
                "Step 1: Identify the vowel letters in 'EDUCATION': E, U, A, I, O. (All 5 English vowels are present).",
                "Step 2: Find the cardinal number n(Q) = 5.",
                "Step 3: Calculate total subsets = 2^5 = 2 × 2 × 2 × 2 × 2 = 32.",
                "Step 4: Calculate proper subsets = 2^n - 1 = 32 - 1 = 31."
              ],
              answer: "Set Q has 31 proper subsets."
            },
            tryThis: {
              question: "If a set R has 16 total subsets, how many elements does set R contain?",
              choices: ["3 elements", "4 elements", "8 elements", "16 elements"],
              correct: 1,
              explanation: "Since 2^n = 16 and 2^4 = 2 × 2 × 2 × 2 = 16, the number of elements n equals 4."
            }
          }
        ]
      },
      {
        subtopicId: "venn-diagrams-2-events",
        title: "3. Venn Diagrams and Set Operations",
        modules: [
          {
            moduleId: "venn-diagrams-2-events-core",
            imageUrl: "/images/math/venn-diagram-4-regions.png",
            imageCaption: "Two overlapping sets A and B clearly showing only A, intersection both, only B, and neither outside.",
            title: "The Four Regions of a Two-Circle Venn Diagram",
            bigIdea: "Venn diagrams separate overlapping groups into Only A, Both (Intersection), Only B, and Neither (Complement).",
            learnIt: [
              "Intersection (A ∩ B): members found inside both circle A and circle B (the middle overlapping region).",
              "Union (A ∪ B): all members belonging to circle A, circle B, or both combined without double-counting the overlap.",
              "Difference (A - B) / Only A: members belonging strictly to circle A excluding the middle overlap. Formula: n(Only A) = n(A) - n(A ∩ B).",
              "Difference (B - A) / Only B: members belonging strictly to circle B excluding the middle overlap. Formula: n(Only B) = n(B) - n(A ∩ B).",
              "Complement (A ∪ B)': members outside both circles but inside the rectangular universal set (Neither A nor B)."
            ],
            workedExample: {
              question: "In a two-circle Venn diagram, n(A) = 20, n(B) = 25, and n(A ∩ B) = 8. Calculate n(Only A) and n(A ∪ B).",
              steps: [
                "Step 1: Calculate Only A by subtracting the overlap: n(Only A) = n(A) - n(A ∩ B) = 20 - 8 = 12.",
                "Step 2: Calculate Only B by subtracting the overlap: n(Only B) = n(B) - n(A ∩ B) = 25 - 8 = 17.",
                "Step 3: Calculate Union by adding the three separated regions: n(A ∪ B) = Only A + Overlap + Only B = 12 + 8 + 17 = 37. (Or using formula: 20 + 25 - 8 = 37)."
              ],
              answer: "n(Only A) = 12, and n(A ∪ B) = 37."
            },
            tryThis: {
              question: "If n(P) = 15 and n(P ∩ Q) = 6, how many elements belong to 'Only P' (P - Q)?",
              choices: ["21", "9", "6", "15"],
              correct: 1,
              explanation: "Only P = Total P minus the intersection overlap = 15 - 6 = 9."
            }
          },
          {
            moduleId: "venn-word-problems",
            title: "Solving PLE Word Problems Using Venn Equations",
            bigIdea: "In word problems, always fill the middle intersection first before working out the only-regions.",
            learnIt: [
              "Golden step-by-step rule for word problems: 1) Draw two overlapping circles inside a universal box; 2) Fill the middle intersection value first; 3) Subtract the intersection from total A to get Only A; 4) Subtract the intersection from total B to get Only B; 5) Put the 'neither' value outside the circles.",
              "Forming algebraic equations: Universal Total = Only A + Intersection + Only B + Neither."
            ],
            workedExample: {
              question: "In a class of 50 pupils, 30 like Rice (R), 25 like Posho (P), 10 like both foods, and y pupils like neither food. Find the value of y.",
              steps: [
                "Step 1: Put the overlap in the middle: both = 10.",
                "Step 2: Find Rice only = 30 - 10 = 20.",
                "Step 3: Find Posho only = 25 - 10 = 15.",
                "Step 4: Form the equation for class total: 20 (Only R) + 10 (Both) + 15 (Only P) + y (Neither) = 50.",
                "Step 5: Simplify and solve: 45 + y = 50 -> y = 50 - 45 = 5."
              ],
              answer: "The number of pupils who like neither food is y = 5."
            },
            tryThis: {
              question: "In a group of 40 farmers, 22 grow Beans, 18 grow Maize, and 6 grow neither crop. How many farmers grow both crops?",
              choices: ["6 farmers", "8 farmers", "10 farmers", "4 farmers"],
              correct: 0,
              explanation: "Let both = x. Beans only = 22-x, Maize only = 18-x. Total: (22-x) + x + (18-x) + 6 = 40 -> 46 - x = 40 -> x = 6."
            }
          }
        ]
      },
      {
        subtopicId: "probability-intro",
        title: "4. Introduction to Probability and Single Events",
        modules: [
          {
            moduleId: "probability-scale",
            videoUrl: "https://youtu.be/DMH70G_NjqA",
            title: "The Probability Scale and Outcomes",
            bigIdea: "Probability measures the numerical chance of an event happening on a scale from 0 (impossible) to 1 (certain).",
            learnIt: [
              "Probability is a fraction representing how likely an event is to occur.",
              "Probability scale bounds: If an event cannot possibly happen, its probability is 0 (e.g., probability of a cat laying an egg = 0). If an event is 100% certain to happen, its probability is 1 (e.g., probability of the sun rising tomorrow = 1).",
              "Equally likely chance: if an event has a 50-50 chance (like tossing a fair coin for Heads or Tails), its probability is 1/2."
            ],
            workedExample: {
              question: "A fair six-sided die numbered 1 to 6 is rolled once. What is the probability of rolling the number 8?",
              steps: [
                "Step 1: List the possible outcomes on a die: {1, 2, 3, 4, 5, 6}. Total outcomes = 6.",
                "Step 2: Check how many faces show the number 8: zero faces.",
                "Step 3: Calculate probability = Favourable outcomes ÷ Total outcomes = 0 ÷ 6 = 0."
              ],
              answer: "The probability is 0 (it is an impossible event)."
            },
            tryThis: {
              question: "If a fair coin is tossed once in the air, what is the probability that it lands showing a Tail?",
              choices: ["1", "0", "1/2", "1/4"],
              correct: 2,
              explanation: "A coin has 2 total faces (Head, Tail). Favourable outcome for Tail = 1. Probability = 1/2."
            }
          },
          {
            moduleId: "calculating-simple-probability",
            title: "Calculating Probability of Single Events",
            bigIdea: "Probability equals the number of favourable outcomes divided by the total number of possible outcomes.",
            learnIt: [
              "Fundamental Probability Formula: P(Event) = Number of Favourable Outcomes ÷ Total Possible Outcomes.",
              "Complementary probability rule: The probability of an event happening plus the probability of it NOT happening always equals 1. Formula: P(Happening) + P(Not Happening) = 1."
            ],
            workedExample: {
              question: "A basket contains 4 red balls, 5 green balls, and 3 blue balls. If one ball is picked at random, what is the probability of picking a green ball?",
              steps: [
                "Step 1: Find total number of balls in the basket = 4 + 5 + 3 = 12 balls.",
                "Step 2: Find number of favourable green balls = 5 balls.",
                "Step 3: Apply probability formula: P(Green) = Favourable green balls ÷ Total balls = 5/12."
              ],
              answer: "The probability of picking a green ball is 5/12."
            },
            tryThis: {
              question: "If the probability that it will rain in Kampala tomorrow is 3/10, what is the probability that it will NOT rain?",
              choices: ["3/10", "7/10", "1/10", "10/10"],
              correct: 1,
              explanation: "P(Not raining) = 1 - P(Raining) = 1 - 3/10 = 10/10 - 3/10 = 7/10."
            }
          }
        ]
      }
    ],quiz: [
      { q: "If set A = {1, 2, 3, 4} and set B = {3, 4, 5, 6}, list A \u2229 B.", choices: ["{3, 4}", "{1, 2}", "{5, 6}", "{1, 2, 3, 4, 5, 6}"], correct: 0, "why": "A \u2229 B means the intersection (members common to both sets A and B). The common elements are 3 and 4." },
      { q: "What is the symbol for an empty set (null set)?", choices: ["\u2205 or {}", "{0}", "E", "\u2229"], correct: 0, "why": "An empty set has no members and is represented by \u2205 or {}." },
      { q: "If a set P has 3 members, how many subsets does set P have?", choices: ["8", "6", "3", "9"], correct: 0, "why": "Number of subsets = 2^n. Since n = 3, 2^3 = 8 subsets." },
      { q: "In a class of 40 pupils, 25 play football and 20 play netball. If 10 play both games, how many play neither?", choices: ["5", "10", "15", "0"], correct: 0, "why": "Number playing at least one game = 25 + 20 \u2212 10 = 35. Neither = 40 \u2212 35 = 5." },
      { q: "If n(A) = 15, n(B) = 18 and n(A \u222a B) = 25, find n(A \u2229 B).", choices: ["8", "10", "7", "33"], correct: 0, "why": "n(A \u222a B) = n(A) + n(B) \u2212 n(A \u2229 B). So 25 = 15 + 18 \u2212 n(A \u2229 B), giving intersection = 33 \u2212 25 = 8." },
      { q: "A bag has 3 red balls and 7 blue balls. What is the probability of picking a red ball at random?", choices: ["3/10", "7/10", "3/7", "1/10"], correct: 0, "why": "Total balls = 3 + 7 = 10. Probability = 3 / 10." },
      { q: "What is the probability of the sun rising from the West tomorrow?", choices: ["0", "1", "1/2", "Cannot tell"], correct: 0, "why": "An impossible event has a probability of 0." },
      { q: "If two sets share all their members exactly, they are called:", choices: ["Equal sets", "Equivalent sets", "Empty sets", "Infinite sets"], correct: 0, "why": "Equal sets have the exact same members." },
    ],
  },
  {
    id: "whole-numbers",
    themeId: "theme-2-numeracy",
    themeName: "Numeracy",
    title: "Whole Numbers",
    estMinutes: 24,
    status: "published",
    reviewStatus: "verified",
    videoUrl: "https://youtu.be/86ge44f5IYM",
    note: {
      intro: "Why this matters: Mastering Whole Numbers builds essential mathematical problem-solving skills tested across Section A and Section B of the PLE examination.",
      learningObjectives: [
        "Solve numerical and word problems related to Numbers up to 99,999,999.",
        "Solve numerical and word problems related to Roman numerals up to MM.",
        "Solve numerical and word problems related to Bases (non-decimal number systems).",
      ],
      whatYouNeedToKnow: [
        "Whole Numbers groups foundational P7 competencies including: Numbers up to 99,999,999, Roman numerals up to MM, Bases (non-decimal number systems).",
        "Follow step-by-step methods, always show working clearly, and check your units or signs.",
      ],
      worked: {
        problem: "Evaluate a basic Whole Numbers problem.",
        steps: [
          "Identify given values.",
          "Apply correct formula or operation.",
        ],
        answer: "Correct verified answer.",
      },
      recap: [
        "Understand key formulas and rules of Whole Numbers.",
        "Check working step by step and verify units and arithmetic.",
      ],
    },
    subtopics: [
      {
        subtopicId: "numbers-up-to-99-999-999",
        title: "1. Place Values, Values and Writing Large Numbers",
        modules: [
          {
            moduleId: "place-values-up-to-8-digits",
            videoUrl: "https://youtu.be/86ge44f5IYM",
            title: "Place Values and Actual Values up to 99,999,999",
            bigIdea: "Each digit in an 8-digit whole number holds a place value from Ones up to Ten Millions.",
            learnIt: [
              "Place value chart from right to left: Ones (1), Tens (10), Hundreds (100), Thousands (1,000), Ten Thousands (10,000), Hundred Thousands (100,000), Millions (1,000,000), and Ten Millions (10,000,000).",
              "Actual Value of a digit = Digit × Place Value. For example, in 48,520,319, the digit 8 is in the Millions place, so its actual value = 8 × 1,000,000 = 8,000,000.",
              "Rounding off whole numbers: check the digit immediately to the right. If it is 0, 1, 2, 3, or 4, round down (leave digit unchanged). If it is 5, 6, 7, 8, or 9, round up (add 1 to the digit)."
            ],
            workedExample: {
              question: "Find the sum of the value of digit 6 and the place value of digit 3 in the number 46,238,105.",
              steps: [
                "Step 1: Identify place value and value of digit 6: 6 is in the Millions place, so Value = 6 × 1,000,000 = 6,000,000.",
                "Step 2: Identify place value of digit 3: 3 is in the Ten Thousands place, so Place Value = 10,000.",
                "Step 3: Add the two quantities: 6,000,000 + 10,000 = 6,010,000."
              ],
              answer: "The sum is 6,010,000."
            },
            tryThis: {
              question: "What is the actual value of digit 7 in the number 87,402,159?",
              choices: ["700,000", "7,000,000", "70,000,000", "7,000"],
              correct: 1,
              explanation: "Digit 7 occupies the Millions position, giving an actual value of 7 × 1,000,000 = 7,000,000."
            }
          },
          {
            moduleId: "writing-numbers-words-expanded",
            title: "Writing Numbers in Words and Expanded Form",
            bigIdea: "Large numbers can be written in words or expanded as sums of values, place values, or powers of 10.",
            learnIt: [
              "Writing in words: group digits into periods of three from the right (Millions, Thousands, Units). Example: 34,506,218 = Thirty-four million, five hundred six thousand, two hundred eighteen.",
              "Expanded form using values: 48,520 = 40,000 + 8,000 + 500 + 20.",
              "Expanded form using powers of 10 (exponents): label places from right starting at 10^0. For 4,852: = (4 × 10^3) + (8 × 10^2) + (5 × 10^1) + (2 × 10^0)."
            ],
            workedExample: {
              question: "Express the number 65,409 in expanded form using powers of base 10.",
              steps: [
                "Step 1: Assign power indices from right to left starting at 0: 9(10^0), 0(10^1), 4(10^2), 5(10^3), 6(10^4).",
                "Step 2: Write as products added together, omitting zero terms if desired: (6 × 10^4) + (5 × 10^3) + (4 × 10^2) + (9 × 10^0)."
              ],
              answer: "Expanded form: (6 × 10^4) + (5 × 10^3) + (4 × 10^2) + (9 × 10^0)."
            },
            tryThis: {
              question: "Which of the following represents 304,502 written in words?",
              choices: [
                "Three hundred four thousand, five hundred two",
                "Thirty-four thousand, five hundred two",
                "Three million, four thousand, five hundred two",
                "Three hundred forty thousand, fifty-two"
              ],
              correct: 0,
              explanation: "Grouping digits into periods gives 304 (thousand) and 502 (units)."
            }
          }
        ]
      },
      {
        subtopicId: "roman-numerals-mm",
        title: "2. Roman Numerals up to MM (2000)",
        modules: [
          {
            moduleId: "roman-numerals-rules",
            videoUrl: "https://youtu.be/rGRPJKTClYg",
            title: "Reading and Converting Roman Numerals up to MM",
            bigIdea: "Roman numerals combine seven basic symbols using addition and subtraction rules up to 2000.",
            learnIt: [
              "Seven fundamental symbols: I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000.",
              "Addition rule: when a smaller symbol follows a larger symbol, add their values (e.g., VI = 5 + 1 = 6; LX = 50 + 10 = 60; CX = 100 + 10 = 110).",
              "Subtraction rule: when a smaller symbol precedes a larger symbol, subtract it (e.g., IV = 5 - 1 = 4; IX = 10 - 1 = 9; XL = 50 - 10 = 40; XC = 100 - 10 = 90; CD = 500 - 100 = 400; CM = 1000 - 100 = 900). Never repeat a symbol more than three times consecutively."
            ],
            workedExample: {
              question: "Convert the Roman numeral MCDLXXIV into Hindu-Arabic numerals.",
              steps: [
                "Step 1: Break into standard values: M = 1000, CD = 400, LXX = 70, IV = 4.",
                "Step 2: Add the components together: 1000 + 400 + 70 + 4 = 1474."
              ],
              answer: "MCDLXXIV = 1474."
            },
            tryThis: {
              question: "Write the Hindu-Arabic number 1998 in Roman numerals.",
              choices: ["MCMXCVIII", "MDCCCCXCVIII", "MIIM", "MXMIX"],
              correct: 0,
              explanation: "1000(M) + 900(CM) + 90(XC) + 8(VIII) = MCMXCVIII."
            }
          }
        ]
      },
      {
        subtopicId: "bases",
        title: "3. Non-Decimal Number Bases",
        modules: [
          {
            moduleId: "bases-conversions",
            videoUrl: "https://youtu.be/pEfYJgoe_2o",
            title: "Converting Between Base Ten and Other Bases",
            bigIdea: "Number bases group values by powers of the base number rather than powers of ten.",
            learnIt: [
              "Base Two (Binary): uses only two digits (0, 1). Base Five: uses digits 0, 1, 2, 3, 4. Base Eight (Octal): uses 0 to 7.",
              "Converting from another base to Base Ten: multiply each digit by its place value power and add. For 143 (base 5): = (1 × 5^2) + (4 × 5^1) + (3 × 5^0) = 25 + 20 + 3 = 48 (base 10).",
              "Converting from Base Ten to another base: divide repeatedly by the new base and record remainders from bottom up."
            ],
            workedExample: {
              question: "Convert 29 (base ten) into Base Two (Binary).",
              steps: [
                "Step 1: Divide 29 by 2: 29 ÷ 2 = 14 remainder 1.",
                "Step 2: Divide 14 by 2: 14 ÷ 2 = 7 remainder 0.",
                "Step 3: Divide 7 by 2: 7 ÷ 2 = 3 remainder 1.",
                "Step 4: Divide 3 by 2: 3 ÷ 2 = 1 remainder 1.",
                "Step 5: Divide 1 by 2: 1 ÷ 2 = 0 remainder 1.",
                "Step 6: Read remainders from bottom to top: 11101."
              ],
              answer: "29 in base ten = 11101 (base two)."
            },
            tryThis: {
              question: "What is the value of 1011 (base two) in Base Ten?",
              choices: ["11", "9", "13", "15"],
              correct: 0,
              explanation: "(1×8) + (0×4) + (1×2) + (1×1) = 8 + 0 + 2 + 1 = 11."
            }
          }
        ]
      }
    ],quiz: [
      { q: "Write 45,607 in words.", choices: ["Forty-five thousand, six hundred seven", "Four hundred fifty-six thousand seven", "Forty-five hundred sixty-seven", "Forty-five thousand sixty-seven"], correct: 0, "why": "45,000 + 600 + 7 = Forty-five thousand, six hundred seven." },
      { q: "What is the place value of 8 in the number 384,102?", choices: ["Ten thousands", "Thousands", "Hundreds", "Lakhs"], correct: 0, "why": "Counting from right: 2 (ones), 0 (tens), 1 (hundreds), 4 (thousands), 8 (ten thousands)." },
      { q: "Convert Roman numeral CDLXXV to Hindu-Arabic.", choices: ["475", "675", "465", "575"], correct: 0, "why": "CD = 400, LXX = 70, V = 5. Total = 475." },
      { q: "Write 1,999 in Roman numerals.", choices: ["MCMXCIX", "MDCCCCXCIX", "MIM", "MXMIX"], correct: 0, "why": "1000 = M, 900 = CM, 90 = XC, 9 = IX. Total = MCMXCIX." },
      { q: "Convert 13 (base ten) to base two (binary).", choices: ["1101\u2082", "1011\u2082", "1110\u2082", "1001\u2082"], correct: 0, "why": "13 = 8 + 4 + 0 + 1 = 1\u00d72\u00b3 + 1\u00d72\u00b2 + 0\u00d72\u00b9 + 1\u00d72\u2070 = 1101\u2082." },
      { q: "Find the value of 101\u2082 in base ten.", choices: ["5", "3", "6", "101"], correct: 0, "why": "1\u00d72\u00b2 + 0\u00d72\u00b9 + 1\u00d72\u2070 = 4 + 0 + 1 = 5." },
      { q: "Round off 67,489 to the nearest thousand.", choices: ["67,000", "68,000", "67,500", "67,490"], correct: 0, "why": "The hundreds digit is 4 (less than 5), so round down to 67,000." },
      { q: "What is the value of 5 in 25,430?", choices: ["5,000", "500", "50,000", "50"], correct: 0, "why": "5 is in the thousands place, so its value is 5 \u00d7 1,000 = 5,000." },
    ],
  },
  {
    id: "operations-on-whole-numbers",
    themeId: "theme-2-numeracy",
    themeName: "Numeracy",
    title: "Operations on Whole Numbers",
    estMinutes: 16,
    status: "published",
    reviewStatus: "verified",
    videoUrl: "https://youtu.be/TQu3yIGHA-4",
    note: {
      intro: "Why this matters: Mastering Operations on Whole Numbers builds essential mathematical problem-solving skills tested across Section A and Section B of the PLE examination.",
      learningObjectives: [
        "Solve numerical and word problems related to Four basic operations.",
        "Solve numerical and word problems related to Prime factorisation.",
      ],
      whatYouNeedToKnow: [
        "Operations on Whole Numbers groups foundational P7 competencies including: Four basic operations, Prime factorisation.",
        "Follow step-by-step methods, always show working clearly, and check your units or signs.",
      ],
      worked: {
        problem: "Evaluate a basic Operations on Whole Numbers problem.",
        steps: [
          "Identify given values.",
          "Apply correct formula or operation.",
        ],
        answer: "Correct verified answer.",
      },
      recap: [
        "Understand key formulas and rules of Operations on Whole Numbers.",
        "Check working step by step and verify units and arithmetic.",
      ],
    },
    subtopics: [
      {
        subtopicId: "four-basic-operations",
        title: "1. The Four Basic Operations and Properties of Numbers",
        modules: [
          {
            moduleId: "four-operations-bodmas",
            videoUrl: "https://youtu.be/TQu3yIGHA-4",
            title: "Long Multiplication, Division and BODMAS Rules",
            bigIdea: "Large whole number arithmetic requires exact vertical column alignment and strict BODMAS order of operations.",
            learnIt: [
              "Long multiplication: multiply by ones digit first, then shift left with zero placeholders when multiplying by tens and hundreds.",
              "Long division: follow step-by-step cycle Divide -> Multiply -> Subtract -> Bring down.",
              "BODMAS / BOOMDAS Rule: Brackets, Orders (Indices/Powers), Division, Multiplication, Addition, Subtraction. Always evaluate inside brackets first before multiplication or division."
            ],
            workedExample: {
              question: "Evaluate: 48 + 72 ÷ 8 × 3 - 15.",
              steps: [
                "Step 1 (Division): 72 ÷ 8 = 9. Expression becomes: 48 + 9 × 3 - 15.",
                "Step 2 (Multiplication): 9 × 3 = 27. Expression becomes: 48 + 27 - 15.",
                "Step 3 (Addition): 48 + 27 = 75. Expression becomes: 75 - 15.",
                "Step 4 (Subtraction): 75 - 15 = 60."
              ],
              answer: "The final answer is 60."
            },
            tryThis: {
              question: "Work out: 24 - 16 ÷ 4 + 2",
              choices: ["4", "22", "18", "6"],
              correct: 1,
              explanation: "16 ÷ 4 = 4. Then 24 - 4 + 2 = 20 + 2 = 22."
            }
          },
          {
            moduleId: "properties-of-numbers",
            title: "Commutative, Associative and Distributive Properties",
            bigIdea: "Number properties allow rearrangement and grouping of arithmetic statements without altering their value.",
            learnIt: [
              "Commutative Property: order of numbers does not change the result for addition and multiplication (a + b = b + a and a × b = b × a). Note: division and subtraction are NOT commutative.",
              "Associative Property: grouping of numbers does not change the result ((a + b) + c = a + (b + c)).",
              "Distributive Property over addition: multiplying a number by a sum equals multiplying each addend separately (a(b + c) = ab + ac). Example: 7 × 104 = 7(100 + 4) = 700 + 28 = 728."
            ],
            workedExample: {
              question: "Use the distributive property of multiplication over addition to evaluate 15 × 102 quickly.",
              steps: [
                "Step 1: Expand 102 into (100 + 2). Expression becomes: 15 × (100 + 2).",
                "Step 2: Distribute 15 to both terms: (15 × 100) + (15 × 2).",
                "Step 3: Multiply out: 1500 + 30 = 1530."
              ],
              answer: "15 × 102 = 1530."
            },
            tryThis: {
              question: "Which number property is demonstrated by the statement: 4 × (5 × 6) = (4 × 5) × 6?",
              choices: ["Commutative property", "Associative property", "Distributive property", "Identity property"],
              correct: 1,
              explanation: "Changing the bracket grouping of multiplication without changing order demonstrates the associative property."
            }
          }
        ]
      },
      {
        subtopicId: "prime-factorisation",
        title: "2. Prime Factorisation, GCF and LCM on Venn Diagrams",
        modules: [
          {
            moduleId: "prime-factors-methods",
            videoUrl: "https://youtu.be/Nx4h4j4jkCc",
            title: "Expressing Numbers as Products of Prime Factors",
            bigIdea: "Every composite whole number can be expressed uniquely as a product of prime factors using ladder or factor tree methods.",
            learnIt: [
              "Prime number: a number with exactly two factors (1 and itself). First prime numbers: 2, 3, 5, 7, 11, 13, 17, 19.",
              "Ladder division method: divide repeatedly by the smallest possible prime number (start with 2, then 3, then 5) until quotient reaches 1.",
              "Writing in power / subscript notation: group identical factors using exponent indices (e.g., 2 × 2 × 2 × 3 = 2³ × 3)."
            ],
            workedExample: {
              question: "Express 72 as a product of its prime factors in power notation.",
              steps: [
                "Step 1: Divide by 2: 72 ÷ 2 = 36.",
                "Step 2: Divide by 2: 36 ÷ 2 = 18.",
                "Step 3: Divide by 2: 18 ÷ 2 = 9.",
                "Step 4: Divide by 3: 9 ÷ 3 = 3.",
                "Step 5: Divide by 3: 3 ÷ 3 = 1.",
                "Step 6: Product = 2 × 2 × 2 × 3 × 3 = 2³ × 3²."
              ],
              answer: "72 = 2³ × 3²."
            },
            tryThis: {
              question: "What is the prime factorisation of 90 in power notation?",
              choices: ["2 × 3² × 5", "2² × 3² × 5", "2² × 3 × 5", "9 × 10"],
              correct: 1,
              explanation: "90 ÷ 2 = 45; 45 ÷ 3 = 15; 15 ÷ 3 = 5; 5 ÷ 5 = 1. Product = 2 × 3² × 5."
            }
          },
          {
            moduleId: "gcf-lcm-venn",
            title: "Finding GCF and LCM Using Venn Diagrams",
            bigIdea: "Representing prime factors inside overlapping Venn diagram sets simplifies GCF and LCM calculations.",
            learnIt: [
              "GCF (Greatest Common Factor / HCF): the largest number that divides two or more numbers without remainder.",
              "LCM (Lowest Common Multiple): the smallest common multiple shared by two or more numbers.",
              "Venn Diagram Product Method: place common shared prime factors inside the intersection overlap. Place non-shared factors in only-regions.",
              "Rule 1: GCF equals the product of numbers inside the intersection overlap.",
              "Rule 2: LCM equals the product of ALL numbers across both circles inside the union."
            ],
            workedExample: {
              question: "The prime factors of 24 and 36 are placed on a Venn diagram. Find their GCF and LCM.",
              steps: [
                "Step 1: Prime factors of 24 = {2, 2, 2, 3}. Prime factors of 36 = {2, 2, 3, 3}.",
                "Step 2: Shared factors in intersection overlap = {2, 2, 3}.",
                "Step 3: Calculate GCF = product of intersection = 2 × 2 × 3 = 12.",
                "Step 4: Only 24 has remaining {2}; Only 36 has remaining {3}.",
                "Step 5: Calculate LCM = product of all union elements = 2 (Only 24) × [2 × 2 × 3] (Overlap) × 3 (Only 36) = 72."
              ],
              answer: "GCF = 12, and LCM = 72."
            },
            tryThis: {
              question: "If two numbers share prime factors 2 and 5 in their Venn diagram intersection, what is their GCF?",
              choices: ["7", "10", "20", "5"],
              correct: 1,
              explanation: "GCF equals the product of intersection factors: 2 × 5 = 10."
            }
          }
        ]
      }
    ],quiz: [
      { q: "Work out: 48 + 36 \u00f7 6", choices: ["54", "14", "42", "60"], correct: 0, "why": "Using BODMAS, divide first: 36 \u00f7 6 = 6. Then add: 48 + 6 = 54." },
      { q: "Find the product of 125 and 14.", choices: ["1,750", "1,650", "1,850", "1,500"], correct: 0, "why": "125 \u00d7 14 = 125 \u00d7 (10 + 4) = 1250 + 500 = 1,750." },
      { q: "Find the Greatest Common Factor (GCF) of 24 and 36.", choices: ["12", "6", "72", "4"], correct: 0, "why": "Finding GCF and LCM: GCF (Greatest Common Factor) is the largest factor shared by two numbers. LCM (Lowest Common Multiple) is the smallest common multiple. Product Method on a Venn Diagram: represent prime factors of two numbers inside overlapping circles. The product of numbers inside the intersection (overlap) equals the GCF. The product of ALL numbers across both circles inside the union equals the LCM." },
      { q: "Find the Lowest Common Multiple (LCM) of 8 and 12.", choices: ["24", "48", "96", "16"], correct: 0, "why": "Multiples of 8: 8, 16, 24, 32... Multiples of 12: 12, 24, 36... Lowest common multiple is 24." },
      { q: "Write 60 as a product of its prime factors.", choices: ["2\u00b2 \u00d7 3 \u00d7 5", "2 \u00d7 30", "4 \u00d7 15", "2 \u00d7 3\u00b2 \u00d7 5"], correct: 0, "why": "60 \u00f7 2 = 30; 30 \u00f7 2 = 15; 15 \u00f7 3 = 5. So 60 = 2 \u00d7 2 \u00d7 3 \u00d7 5 = 2\u00b2 \u00d7 3 \u00d7 5." },
      { q: "Express 450,000 in standard scientific notation.", choices: ["4.5 \u00d7 10\u2075", "45 \u00d7 10\u2074", "0.45 \u00d7 10\u2076", "4.5 \u00d7 10\u2074"], correct: 0, "why": "Move the decimal point 5 places to the left: 4.5 \u00d7 10\u2075." },
      { q: "Evaluate: 2\u00b3 + 3\u00b2", choices: ["17", "12", "15", "18"], correct: 0, "why": "2\u00b3 = 2\u00d72\u00d72 = 8. 3\u00b2 = 3\u00d73 = 9. 8 + 9 = 17." },
      { q: "Divide 4,368 by 12.", choices: ["364", "354", "374", "360"], correct: 0, "why": "4368 \u00f7 12 = 364." },
    ],
  },
  {
    id: "patterns-and-sequences",
    themeId: "theme-2-numeracy",
    themeName: "Numeracy",
    title: "Patterns and Sequences",
    estMinutes: 16,
    status: "published",
    reviewStatus: "verified",
    videoUrl: "https://youtu.be/SVG2Y4U1MTk",
    note: {
      intro: "Why this matters: Mastering Patterns and Sequences builds essential mathematical problem-solving skills tested across Section A and Section B of the PLE examination.",
      learningObjectives: [
        "Solve numerical and word problems related to Tests of divisibility.",
        "Solve numerical and word problems related to Number patterns.",
      ],
      whatYouNeedToKnow: [
        "Patterns and Sequences groups foundational P7 competencies including: Tests of divisibility, Number patterns.",
        "Follow step-by-step methods, always show working clearly, and check your units or signs.",
      ],
      worked: {
        problem: "Evaluate a basic Patterns and Sequences problem.",
        steps: [
          "Identify given values.",
          "Apply correct formula or operation.",
        ],
        answer: "Correct verified answer.",
      },
      recap: [
        "Understand key formulas and rules of Patterns and Sequences.",
        "Check working step by step and verify units and arithmetic.",
      ],
    },
    subtopics: [
      {
        subtopicId: "tests-of-divisibility",
        title: "1. Tests of Divisibility and Types of Numbers",
        modules: [
          {
            moduleId: "divisibility-rules",
            videoUrl: "https://youtu.be/MUBvjysD3VI",
            title: "Tests of Divisibility for 2, 3, 4, 5, 6, 8, 9, 10, 11",
            bigIdea: "Divisibility tests inspect digit sums and endings to determine if a number divides evenly without remainder.",
            learnIt: [
              "Divisibility by 2: number ends in 0, 2, 4, 6, 8. Divisibility by 5: ends in 0 or 5. Divisibility by 10: ends in 0.",
              "Divisibility by 3: sum of all digits is a multiple of 3 (e.g., 147 -> 1+4+7=12, divisible by 3). Divisibility by 9: sum of all digits is a multiple of 9.",
              "Divisibility by 4: last two digits form a number divisible by 4 (e.g., 3,516 -> 16 is divisible by 4). Divisibility by 8: last three digits form a number divisible by 8.",
              "Divisibility by 6: number is even AND its digit sum is divisible by 3.",
              "Divisibility by 11: difference between the sum of alternate digits is 0 or a multiple of 11 (e.g., 1,331 -> (1+3) - (3+1) = 4 - 4 = 0)."
            ],
            workedExample: {
              question: "Test whether the number 4,818 is divisible by 6.",
              steps: [
                "Step 1: Check if the number is even: ends in 8, so it is divisible by 2.",
                "Step 2: Check if digit sum is divisible by 3: 4 + 8 + 1 + 8 = 21. Since 21 ÷ 3 = 7, it is divisible by 3.",
                "Step 3: Since it is divisible by both 2 and 3, it is divisible by 6."
              ],
              answer: "Yes, 4,818 is divisible by 6."
            },
            tryThis: {
              question: "Which missing digit d makes the number 35d2 divisible by 3?",
              choices: ["1", "0", "2", "3"],
              correct: 0,
              explanation: "Sum = 3+5+d+2 = 10+d. If d=2, sum=12 (divisible by 3)."
            }
          },
          {
            moduleId: "types-of-numbers",
            title: "Prime, Composite, Triangular, Square and Cube Numbers",
            bigIdea: "Whole numbers follow specific geometric patterns such as triangles, squares, and cubes.",
            learnIt: [
              "Prime vs Composite: prime numbers have exactly two factors (1 and itself); composite numbers have more than two factors (4, 6, 8, 9, 10). Note: 1 is neither prime nor composite.",
              "Triangular numbers: numbers formed by counting dots arranged in equilateral triangles (1, 3, 6, 10, 15, 21, 28). Formula for nth triangular number = n(n + 1) ÷ 2.",
              "Square numbers: numbers formed by multiplying a whole number by itself (1², 2², 3², 4² = 1, 4, 9, 16, 25).",
              "Cube numbers: numbers formed by multiplying a whole number three times (1³, 2³, 3³, 4³ = 1, 8, 27, 64)."
            ],
            workedExample: {
              question: "Calculate the 8th triangular number using the formula.",
              steps: [
                "Step 1: State formula: nth triangular number = n(n + 1) ÷ 2.",
                "Step 2: Substitute n = 8: 8(8 + 1) ÷ 2 = 8(9) ÷ 2.",
                "Step 3: Evaluate: 72 ÷ 2 = 36."
              ],
              answer: "The 8th triangular number is 36."
            },
            tryThis: {
              question: "What is the value of 4³ (4 cubed)?",
              choices: ["12", "16", "64", "48"],
              correct: 2,
              explanation: "4³ = 4 × 4 × 4 = 16 × 4 = 64."
            }
          }
        ]
      },
      {
        subtopicId: "number-patterns",
        title: "2. Progressive Number Patterns and Sequences",
        modules: [
          {
            moduleId: "sequence-rules",
            videoUrl: "https://youtu.be/SVG2Y4U1MTk",
            title: "Finding Rules and Missing Terms in Sequences",
            bigIdea: "Sequences follow constant difference, ratio, or alternating rules to generate subsequent terms.",
            learnIt: [
              "Arithmetic progression: terms increase or decrease by adding or subtracting a constant difference d (e.g., 5, 9, 13, 17... d = +4).",
              "Geometric progression: terms increase by multiplying or dividing by a common ratio r (e.g., 2, 6, 18, 54... r = ×3).",
              "Alternating or double sequences: two independent patterns running inside alternate positions."
            ],
            workedExample: {
              question: "Find the next term in the sequence: 2, 5, 10, 17, 26, ___",
              steps: [
                "Step 1: Find differences between consecutive terms: 5-2 = +3; 10-5 = +5; 17-10 = +7; 26-17 = +9.",
                "Step 2: Observe that differences increase by odd numbers (+3, +5, +7, +9).",
                "Step 3: Add next odd difference (+11) to 26: 26 + 11 = 37."
              ],
              answer: "The next term is 37."
            },
            tryThis: {
              question: "Find the missing number: 81, 27, 9, ___, 1",
              choices: ["6", "3", "4", "5"],
              correct: 1,
              explanation: "Each term is divided by 3 (81÷3=27, 27÷3=9, 9÷3=3)."
            }
          }
        ]
      }
    ],quiz: [
      { q: "Which of the following numbers is divisible by 3?", choices: ["147", "143", "152", "161"], correct: 0, "why": "Sum of digits of 147 = 1 + 4 + 7 = 12, which is divisible by 3." },
      { q: "Find the next number in the sequence: 2, 5, 10, 17, ___", choices: ["26", "24", "25", "27"], correct: 0, "why": "Differences between terms increase by odd numbers: +3, +5, +7, +9. So 17 + 9 = 26." },
      { q: "Which of these numbers is divisible by both 2 and 5?", choices: ["340", "235", "412", "505"], correct: 0, "why": "A number divisible by both 2 and 5 must end in 0. Only 340 ends in 0." },
      { q: "Find the missing number: 1, 4, 9, 16, ___, 36", choices: ["25", "20", "30", "24"], correct: 0, "why": "These are square numbers: 1\u00b2, 2\u00b2, 3\u00b2, 4\u00b2, 5\u00b2, 6\u00b2. So 5\u00b2 = 25." },
      { q: "A number is divisible by 9 if:", choices: ["The sum of its digits is divisible by 9", "It ends in 9", "It is odd", "Its last digit is divisible by 3"], correct: 0, "why": "Divisibility rule for 9: sum of all digits must be a multiple of 9." },
      { q: "What is the 7th triangular number?", choices: ["28", "21", "36", "15"], correct: 0, "why": "Triangular numbers formula = n(n+1)/2. For n=7: 7\u00d78/2 = 28." },
      { q: "Which number comes next: 81, 27, 9, 3, ___?", choices: ["1", "0", "2", "1/3"], correct: 0, "why": "Each term is divided by 3. So 3 \u00f7 3 = 1." },
      { q: "Which of these is a prime number?", choices: ["29", "27", "33", "35"], correct: 0, "why": "29 has only two factors: 1 and 29." },
    ],
  },
  {
    id: "fractions",
    themeId: "theme-2-numeracy",
    themeName: "Numeracy",
    title: "Fractions, Decimals and Percentages",
    estMinutes: 24,
    status: "published",
    reviewStatus: "verified",
    videoUrl: "https://youtu.be/HuitLoh1Q9g",
    note: {
      intro: "Why this matters: Mastering Fractions, Decimals and Percentages builds essential mathematical problem-solving skills tested across Section A and Section B of the PLE examination.",
      learningObjectives: [
        "Solve numerical and word problems related to Fractions, ordering and operations.",
        "Solve numerical and word problems related to Decimals.",
        "Solve numerical and word problems related to Proportion and percentages.",
      ],
      whatYouNeedToKnow: [
        "Fractions, Decimals and Percentages groups foundational P7 competencies including: Fractions, ordering and operations, Decimals, Proportion and percentages.",
        "Follow step-by-step methods, always show working clearly, and check your units or signs.",
      ],
      worked: {
        problem: "Evaluate a basic Fractions, Decimals and Percentages problem.",
        steps: [
          "Identify given values.",
          "Apply correct formula or operation.",
        ],
        answer: "Correct verified answer.",
      },
      recap: [
        "Understand key formulas and rules of Fractions, Decimals and Percentages.",
        "Check working step by step and verify units and arithmetic.",
      ],
    },
    subtopics: [
      {
        subtopicId: "fractions-core",
        title: "1. Operations on Fractions and BODMAS",
        modules: [
          {
            moduleId: "fraction-operations",
            videoUrl: "https://youtu.be/YZNXTXfemQE",
            title: "Addition, Subtraction, Multiplication and Division",
            bigIdea: "Fraction operations require common denominators for addition/subtraction and reciprocal multiplication for division.",
            learnIt: [
              "Addition and Subtraction: convert mixed numbers to improper fractions, find LCM of denominators, add/subtract numerators, and simplify.",
              "Multiplication: cancel common factors across numerators and denominators across multiplication signs, then multiply top by top and bottom by bottom.",
              "Division: keep the first fraction, turn division sign to multiplication, and flip the second fraction upside down (reciprocal)."
            ],
            workedExample: {
              question: "Work out: 2 1/4 ÷ 1 1/2",
              steps: [
                "Step 1: Convert mixed numbers to improper fractions: 9/4 ÷ 3/2.",
                "Step 2: Multiply by reciprocal of second fraction: 9/4 × 2/3.",
                "Step 3: Cancel common factors (3 divides 9; 2 divides 4): = 3/2 × 1/1 = 3/2.",
                "Step 4: Convert improper fraction to mixed number: 3/2 = 1 1/2."
              ],
              answer: "The answer is 1 1/2."
            },
            tryThis: {
              question: "What is 3/4 × 8/9 simplified to its lowest terms?",
              choices: ["2/3", "3/8", "6/9", "1/2"],
              correct: 0,
              explanation: "3/4 × 8/9 = (3×8)/(4×9) = 24/36 = 2/3."
            }
          }
        ]
      },
      {
        subtopicId: "decimals",
        title: "2. Decimals, Recurring Decimals and Conversions",
        modules: [
          {
            moduleId: "decimals-recurring",
            title: "Place Values, Terminating and Recurring Decimals",
            bigIdea: "Decimals represent tenths, hundredths, and thousandths; recurring decimals repeat digit cycles infinitely.",
            learnIt: [
              "Place values after decimal point: tenths (1/10 = 0.1), hundredths (1/100 = 0.01), thousandths (1/1000 = 0.001).",
              "Terminating decimals: division stops after exact decimal places (e.g., 3/8 = 0.375).",
              "Recurring / Repeating decimals: division produces infinite repeating digits indicated by a dot or bar (e.g., 1/3 = 0.333... = 0.3)."
            ],
            workedExample: {
              question: "Convert 5/8 into a decimal number.",
              steps: [
                "Step 1: Divide numerator 5 by denominator 8 using long division.",
                "Step 2: 5.0 ÷ 8 = 0.6 remainder 2.",
                "Step 3: 20 ÷ 8 = 2 remainder 4.",
                "Step 4: 40 ÷ 8 = 5 remainder 0."
              ],
              answer: "5/8 = 0.625."
            },
            tryThis: {
              question: "Which fraction corresponds to the recurring decimal 0.666...?",
              choices: ["1/3", "2/3", "3/4", "6/10"],
              correct: 1,
              explanation: "2 ÷ 3 = 0.666... which repeats infinitely."
            }
          }
        ]
      },
      {
        subtopicId: "proportion-percentages",
        title: "3. Ratios, Direct/Inverse Proportion and Percentages",
        modules: [
          {
            moduleId: "direct-inverse-proportion",
            title: "Direct and Inverse (Indirect) Proportion",
            bigIdea: "Direct proportion scales quantities together, while inverse proportion trades workforce against completion time.",
            learnIt: [
              "Direct proportion: two quantities increase or decrease together (e.g., 1 pen costs 1,000; 5 pens cost 5,000).",
              "Inverse / Indirect proportion: one quantity increases while the other decreases proportionally. Classic trench problem: Total man-days = men × days.",
              "Sharing in ratios: divide total amount by sum of ratio shares, then multiply by each individual share ratio."
            ],
            workedExample: {
              question: "If 6 men can weed a banana plantation in 4 days, how many days will 8 men take working at the same rate?",
              steps: [
                "Step 1: Recognize inverse proportion (more men take fewer days).",
                "Step 2: Find total man-days required: 6 men × 4 days = 24 man-days.",
                "Step 3: Divide total man-days by new workforce: 24 man-days ÷ 8 men = 3 days."
              ],
              answer: "8 men will take 3 days."
            },
            tryThis: {
              question: "Share UGX 40,000 between Peter and John in the ratio 3:5. How much does John get?",
              choices: ["UGX 15,000", "UGX 25,000", "UGX 20,000", "UGX 30,000"],
              correct: 1,
              explanation: "Total parts = 3 + 5 = 8. One part = 40,000 ÷ 8 = 5,000. John's share = 5 × 5,000 = 25,000."
            }
          }
        ]
      }
    ],quiz: [
      { q: "Work out: 3/4 + 1/6", choices: ["11/12", "4/10", "2/3", "5/12"], correct: 0, "why": "LCM of 4 and 6 is 12. 9/12 + 2/12 = 11/12." },
      { q: "Multiply: 2/5 \u00d7 15/16", choices: ["3/8", "6/16", "1/4", "5/8"], correct: 0, "why": "Simplify cross factors: 15\u00f75=3, 2 and 16 simplify to 1 and 8. So 3/8." },
      { q: "Divide: 5/6 \u00f7 2/3", choices: ["1 1/4", "5/9", "4/5", "1 1/3"], correct: 0, "why": "5/6 \u00d7 3/2 = 15/12 = 5/4 = 1 1/4." },
      { q: "Convert 0.375 to a common fraction in its lowest terms.", choices: ["3/8", "3/5", "5/8", "37/100"], correct: 0, "why": "Decimals and conversions: Terminating decimals stop after a finite number of places (e.g., 0.375 = 3/8). Recurring / repeating decimals continue infinitely with a repeating digit pattern (e.g., 0.333... = 1/3 and 0.666... = 2/3). Always align decimal points vertically when adding or subtracting decimal numbers." },
      { q: "What is 40% of UGX 150,000?", choices: ["UGX 60,000", "UGX 40,000", "UGX 6,000", "UGX 75,000"], correct: 0, "why": "(40 / 100) \u00d7 150,000 = 40 \u00d7 1,500 = UGX 60,000." },
      { q: "If 3 men can dig a trench in 8 days, how long will 4 men take at the same rate?", choices: ["6 days", "10 days", "4 days", "12 days"], correct: 0, "why": "Indirect proportion: total man-days = 3 \u00d7 8 = 24. For 4 men: 24 \u00f7 4 = 6 days." },
      { q: "Express 18 minutes as a percentage of 1 hour.", choices: ["30%", "18%", "25%", "20%"], correct: 0, "why": "1 hour = 60 minutes. Fraction = 18/60 = 3/10. Percentage = (3/10) \u00d7 100 = 30." },
      { q: "Arrange in ascending order: 1/2, 2/3, 3/5", choices: ["1/2, 3/5, 2/3", "3/5, 1/2, 2/3", "2/3, 3/5, 1/2", "1/2, 2/3, 3/5"], correct: 0, "why": "LCM of denominators = 30. 1/2 = 15/30, 3/5 = 18/30, 2/3 = 20/30." },
    ],
  },
  {
    id: "integers",
    themeId: "theme-2-numeracy",
    themeName: "Numeracy",
    title: "Integers",
    estMinutes: 30,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "Integers help learners handle gains and losses, temperatures, debts, number lines and directed movement.",
      learningObjectives: [
        "Order positive and negative integers on a number line.",
        "Add, subtract, multiply and divide integers using sign rules.",
        "Apply integers to real-life situations such as temperature, money, lifts and scores.",
      ],
      whatYouNeedToKnow: [
        "Integers are whole numbers that may be positive, negative or zero.",
        "On a number line, values increase as you move to the right and decrease as you move to the left.",
        "For multiplication and division, like signs give a positive answer and unlike signs give a negative answer.",
      ],
      worked: {
        problem: "A lift starts on the 2nd floor, goes down 6 floors, then goes up 3 floors. Which floor is it on?",
        steps: [
          "Start at +2.",
          "Going down 6 floors means subtract 6: +2 - 6 = -4.",
          "Going up 3 floors means add 3: -4 + 3 = -1.",
        ],
        answer: "The lift is on floor -1.",
      },
      commonMistakes: [
        "Thinking -8 is greater than -3 because 8 is greater than 3.",
        "Forgetting that subtracting a negative becomes addition.",
        "Using addition rules for multiplication sign rules.",
      ],
      recap: [
        "Further right on the number line means greater.",
        "Adding a negative moves left; subtracting a negative moves right.",
        "Like signs multiply or divide to give positive; unlike signs give negative.",
      ],
    },
    subtopics: [
      {
        subtopicId: "integer-number-line",
        title: "1. Number line and ordering",
        modules: [
          {
            moduleId: "integer-meaning-order",
            title: "Meaning and order of integers",
            bigIdea: "Integers are positive and negative whole numbers arranged around zero.",
            learnIt: [
              "Zero is neither positive nor negative. Positive integers are written to the right of zero, and negative integers are written to the left of zero.",
              "The number that is further right on a number line is greater. For example, -2 is greater than -7 because -2 is closer to zero and lies to the right of -7.",
              "Real-life integer situations include temperatures below zero, debts, losses, floors below ground level and scores gained or lost.",
            ],
            visual: { title: "Integer number line", kind: "timeline", description: "Draw a horizontal number line with zero in the middle, negatives to the left and positives to the right." },
            workedExample: {
              question: "Arrange -6, +4, 0, -2 and +1 from smallest to greatest.",
              steps: [
                "Step 1: Place the numbers on a number line.",
                "Step 2: Read from left to right because values increase to the right.",
                "Step 3: The order is -6, -2, 0, +1, +4.",
              ],
              answer: "-6, -2, 0, +1, +4",
            },
            tryThis: {
              question: "Which integer is greatest?",
              choices: ["-9", "-1", "0", "-4"],
              correct: 2,
              explanation: "0 is to the right of all negative numbers, so it is greatest.",
            },
          },
        ],
      },
      {
        subtopicId: "integer-operations",
        title: "2. Operations on integers",
        modules: [
          {
            moduleId: "integer-add-subtract",
            title: "Adding and subtracting integers",
            bigIdea: "Integer addition and subtraction can be understood as movement on a number line.",
            learnIt: [
              "Adding a positive number moves to the right. Example: -3 + 5 means start at -3 and move 5 steps right to +2.",
              "Adding a negative number moves to the left. Example: 4 + (-6) means start at 4 and move 6 steps left to -2.",
              "Subtracting a negative becomes addition. Example: -4 - (-7) is the same as -4 + 7 = +3.",
            ],
            workedExample: {
              question: "Work out: -12 + 7 - (-5).",
              steps: [
                "Step 1: -12 + 7 = -5.",
                "Step 2: Subtracting -5 means adding +5.",
                "Step 3: -5 + 5 = 0.",
              ],
              answer: "0",
            },
            tryThis: {
              question: "Work out: -8 - (-3)",
              choices: ["-11", "-5", "+5", "+11"],
              correct: 1,
              explanation: "-8 - (-3) = -8 + 3 = -5.",
            },
          },
          {
            moduleId: "integer-multiply-divide",
            title: "Multiplying and dividing integers",
            bigIdea: "Sign rules make multiplication and division of integers predictable.",
            learnIt: [
              "Positive × positive = positive. Negative × negative = positive. The signs are the same, so the answer is positive.",
              "Positive × negative = negative. Negative × positive = negative. The signs are different, so the answer is negative.",
              "The same sign rules apply to division. Always work out the sign first, then the number value.",
            ],
            workedExample: {
              question: "Evaluate: -36 ÷ 4 + (-3 × -5).",
              steps: [
                "Step 1: -36 ÷ 4 = -9 because the signs are different.",
                "Step 2: -3 × -5 = +15 because the signs are the same.",
                "Step 3: -9 + 15 = +6.",
              ],
              answer: "+6",
            },
            tryThis: {
              question: "Work out: -7 × -6",
              choices: ["-42", "+42", "+13", "-13"],
              correct: 1,
              explanation: "A negative times a negative gives a positive. 7 × 6 = 42.",
            },
          },
        ],
      },
    ],
    quiz: [
      { q: "Which is the greatest integer?", choices: ["-6", "-2", "0", "-9"], correct: 2, why: "0 lies to the right of all negative numbers on the number line." },
      { q: "Arrange from smallest to greatest: -4, +3, 0, -7", choices: ["-7, -4, 0, +3", "-4, -7, 0, +3", "+3, 0, -4, -7", "0, +3, -4, -7"], correct: 0, why: "Values increase from left to right on a number line." },
      { q: "Work out: -5 + 8", choices: ["+3", "-3", "+13", "-13"], correct: 0, why: "Start at -5 and move 8 steps right to +3." },
      { q: "Work out: -4 - (-9)", choices: ["+5", "-13", "-5", "+13"], correct: 0, why: "Subtracting a negative becomes addition: -4 + 9 = +5." },
      { q: "Multiply: -6 × +4", choices: ["-24", "+24", "-10", "+10"], correct: 0, why: "Different signs give a negative answer. 6 × 4 = 24." },
      { q: "Divide: -36 ÷ -4", choices: ["+9", "-9", "+8", "-8"], correct: 0, why: "Same signs give a positive answer. 36 ÷ 4 = 9." },
      { q: "A temperature changes from -3°C to 5°C. By how many degrees did it rise?", choices: ["8°C", "2°C", "-8°C", "5°C"], correct: 0, why: "From -3 to 0 is 3 degrees, then 0 to 5 is 5 degrees. Total rise = 8°C." },
      { q: "A football team loses 2 points each match for 4 matches. What integer shows the total change?", choices: ["-8", "+8", "-6", "+6"], correct: 0, why: "A loss is negative. 4 × -2 = -8." },
    ],
  },
  {
    id: "data-handling",
    themeId: "theme-3-graphs-data",
    themeName: "Interpretation of Graphs and Data",
    title: "Data Handling and Graphs",
    estMinutes: 40,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "Data handling helps learners collect, organise, read and explain information from tables, graphs and charts.",
      learningObjectives: [
        "Read tables, bar graphs, line graphs, pictograms and pie charts.",
        "Calculate mean, median, mode and range.",
        "Interpret coordinates and travel graphs accurately.",
      ],
      whatYouNeedToKnow: [
        "Data becomes easier to understand when it is organised in tables, charts and graphs.",
        "Averages summarise data: mean, median and mode each answer a different question.",
        "Graphs must be read carefully using their title, scale, labels and key.",
      ],
      worked: {
        problem: "Find the mean of 4, 6, 7, 8 and 10.",
        steps: [
          "Add the numbers: 4 + 6 + 7 + 8 + 10 = 35.",
          "Count how many numbers there are: 5.",
          "Divide total by count: 35 ÷ 5 = 7.",
        ],
        answer: "The mean is 7.",
      },
      commonMistakes: [
        "Forgetting to arrange numbers before finding the median.",
        "Reading graph scales as 1, 2, 3 when the scale jumps by 5 or 10.",
        "Forgetting that pie chart angles add up to 360°.",
      ],
      recap: [
        "Read graph titles, labels and scales first.",
        "Mean = total ÷ number of items.",
        "Median needs ordered data; mode is the most common value; range is highest minus lowest.",
      ],
    },
    subtopics: [
      {
        subtopicId: "averages-summary",
        title: "1. Averages and spread",
        modules: [
          {
            moduleId: "mean-median-mode-range",
            title: "Mean, median, mode and range",
            bigIdea: "Averages describe the centre of a data set, while range shows spread.",
            learnIt: [
              "Mean is found by adding all values and dividing by the number of values.",
              "Median is the middle value after arranging values in order. If there are two middle values, find their average.",
              "Mode is the value that appears most often. Range is highest value minus lowest value.",
            ],
            visual: { title: "Data summary cards", kind: "cards", description: "Use four cards labelled mean, median, mode and range to remember the different methods." },
            workedExample: {
              question: "Find the mean, median, mode and range of 3, 7, 4, 7, 9.",
              steps: [
                "Step 1: Arrange in order: 3, 4, 7, 7, 9.",
                "Step 2: Mean = (3 + 4 + 7 + 7 + 9) ÷ 5 = 30 ÷ 5 = 6.",
                "Step 3: Median is the middle value = 7.",
                "Step 4: Mode is 7 because it appears twice. Range = 9 - 3 = 6.",
              ],
              answer: "Mean = 6, median = 7, mode = 7, range = 6.",
            },
            tryThis: {
              question: "Find the range of 12, 8, 15, 9 and 20.",
              choices: ["12", "20", "8", "28"],
              correct: 0,
              explanation: "Range = highest - lowest = 20 - 8 = 12.",
            },
          },
        ],
      },
      {
        subtopicId: "graphs-and-charts",
        title: "2. Graphs and charts",
        modules: [
          {
            moduleId: "bar-line-pictograph",
            title: "Bar graphs, line graphs and pictograms",
            bigIdea: "Different graphs show data in different ways, but all must be read using the scale and key.",
            learnIt: [
              "A bar graph compares quantities using bars of different heights. Always check the scale on the vertical axis.",
              "A line graph shows changes over time, such as temperature during a day or distance during a journey.",
              "A pictogram uses pictures or symbols. Always read the key: one symbol may represent 2, 5, 10 or more items.",
            ],
            workedExample: {
              question: "In a pictogram, one book symbol represents 5 books. If P7 has 8 symbols, how many books are there?",
              steps: [
                "Step 1: Read the key: 1 symbol = 5 books.",
                "Step 2: P7 has 8 symbols.",
                "Step 3: 8 × 5 = 40.",
              ],
              answer: "P7 has 40 books.",
            },
            tryThis: {
              question: "A bar graph scale jumps by 10. A bar reaches the 7th mark. What value is shown?",
              choices: ["70", "7", "17", "700"],
              correct: 0,
              explanation: "7 marks of 10 each gives 70.",
            },
          },
          {
            moduleId: "pie-charts-coordinates-travel",
            title: "Pie charts, coordinates and travel graphs",
            bigIdea: "Some graphs use angles, positions or movement to represent information.",
            learnIt: [
              "A pie chart is a circle divided into sectors. The whole circle is 360°. To find a sector angle, use fraction of total × 360°.",
              "Coordinates are written as (x, y). Move along the x-axis first, then up or down the y-axis.",
              "A travel graph shows distance against time. A flat horizontal line means no movement; a steeper line means faster movement.",
            ],
            workedExample: {
              question: "In a class of 40 pupils, 10 choose football. Find the football sector angle on a pie chart.",
              steps: [
                "Step 1: Fraction choosing football = 10/40 = 1/4.",
                "Step 2: Whole circle = 360°.",
                "Step 3: 1/4 × 360° = 90°.",
              ],
              answer: "90°",
            },
            tryThis: {
              question: "Which coordinate means move 3 right and 5 up?",
              choices: ["(3, 5)", "(5, 3)", "(-3, 5)", "(3, -5)"],
              correct: 0,
              explanation: "Coordinates are written (x, y): x first, then y.",
            },
          },
        ],
      },
    ],
    quiz: [
      { q: "Find the mean of 5, 6, 8 and 9.", choices: ["7", "8", "6", "28"], correct: 0, why: "Total = 28. There are 4 numbers. Mean = 28 ÷ 4 = 7." },
      { q: "Find the median of 4, 9, 2, 7, 5.", choices: ["5", "4", "7", "9"], correct: 0, why: "Arrange: 2, 4, 5, 7, 9. The middle value is 5." },
      { q: "Find the mode of 3, 6, 6, 8, 9, 6.", choices: ["6", "3", "8", "9"], correct: 0, why: "6 appears most often." },
      { q: "Find the range of 12, 18, 7, 20 and 9.", choices: ["13", "20", "7", "27"], correct: 0, why: "Range = highest - lowest = 20 - 7 = 13." },
      { q: "One symbol in a pictogram represents 4 pupils. How many pupils do 9 symbols represent?", choices: ["36", "13", "45", "27"], correct: 0, why: "9 × 4 = 36 pupils." },
      { q: "A pie chart represents 60 learners. 15 learners like netball. What angle represents netball?", choices: ["90°", "60°", "45°", "120°"], correct: 0, why: "15/60 = 1/4. 1/4 × 360° = 90°." },
      { q: "Which coordinate is plotted by moving 4 right and 2 down from the origin?", choices: ["(4, -2)", "(-4, 2)", "(2, 4)", "(-2, 4)"], correct: 0, why: "Right is positive x and down is negative y, so (4, -2)." },
      { q: "On a travel graph, a horizontal line usually means:", choices: ["Stopped", "Moving faster", "Moving backwards", "Starting again"], correct: 0, why: "Distance does not change during a horizontal section, so the object is stopped." },
    ],
  },
  {
    id: "construction",
    themeId: "theme-4-geometry",
    themeName: "Geometry",
    title: "Construction and Geometry",
    estMinutes: 40,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "Why this matters: Mastering Construction and Geometry builds essential mathematical problem-solving skills tested across Section A and Section B of the PLE examination.",
      learningObjectives: [
        "Solve numerical and word problems related to Parallel and skew lines.",
        "Solve numerical and word problems related to Line segments and angles.",
        "Solve numerical and word problems related to Simple polygons.",
        "Solve numerical and word problems related to Regular polygons.",
      ],
      whatYouNeedToKnow: [
        "Construction and Geometry groups foundational P7 competencies including: Parallel and skew lines, Line segments and angles, Simple polygons, Regular polygons, Bearing and scale drawing.",
        "Follow step-by-step methods, always show working clearly, and check your units or signs.",
      ],
      worked: {
        problem: "Evaluate a basic Construction and Geometry problem.",
        steps: [
          "Identify given values.",
          "Apply correct formula or operation.",
        ],
        answer: "Correct verified answer.",
      },
      recap: [
        "Understand key formulas and rules of Construction and Geometry.",
        "Check working step by step and verify units and arithmetic.",
      ],
    },
    subtopics: [
      {
        subtopicId: "construction-geometry",
        title: "1. Lines, Angles, Geometric Construction and Bearings",
        modules: [
          {
            moduleId: "angle-constructions",
            imageUrl: "/images/math/angle-types-gallery.png",
            imageCaption: "Comparison of acute, right (90°), obtuse, straight (180°), and reflex angles.",
            title: "Lines, Angles and Bisecting with Compasses",
            bigIdea: "Geometric constructions create exact standard angles and perpendicular bisectors using compasses and rulers.",
            learnIt: [
              "Angle facts: angles on a straight line sum to 180°; angles around a point sum to 360°; vertically opposite angles are equal.",
              "Constructing standard angles: constructing an equilateral triangle creates 60° angles; bisecting 60° gives 30° and 15°; bisecting a straight line 180° gives a 90° perpendicular; bisecting 90° gives 45°."
            ],
            workedExample: {
              question: "Two angles on a straight line are (2x + 10)° and (x + 20)°. Calculate the value of x.",
              steps: [
                "Step 1: State straight line rule: sum of angles = 180°.",
                "Step 2: Form equation: (2x + 10) + (x + 20) = 180.",
                "Step 3: Collect like terms: 3x + 30 = 180 -> 3x = 150 -> x = 50."
              ],
              answer: "The value of x is 50."
            },
            tryThis: {
              question: "What is the sum of interior angles inside any triangle?",
              choices: ["180°", "360°", "90°", "270°"],
              correct: 0,
              explanation: "The three interior angles of a triangle always add up to 180°."
            }
          },
          {
            moduleId: "polygons-bearings",
            imageUrl: "/images/math/compass-bearings-diagram.png",
            imageCaption: "360-degree compass rose illustrating 3-figure clockwise bearings measured from North (000°).",
            title: "Polygons and Three-Figure Bearings",
            bigIdea: "Polygon interior angles scale by formula (n-2)×180°, while bearings measure clockwise from True North.",
            learnIt: [
              "Polygon angle sum formula: Interior angle sum = (n - 2) × 180°, where n is the number of sides.",
              "Three-figure bearings: measured clockwise from True North 000° up to 360°. East = 090°, South = 180°, West = 270°.",
              "Back bearing calculation: If forward bearing < 180°, add 180°. If forward bearing > 180°, subtract 180°."
            ],
            workedExample: {
              question: "If the forward bearing of town B from town A is 065°, calculate the back bearing of town A from town B.",
              steps: [
                "Step 1: Check if forward bearing is less than 180°: 065° < 180°.",
                "Step 2: Add 180°: 065° + 180° = 245°."
              ],
              answer: "The back bearing is 245°."
            },
            tryThis: {
              question: "Calculate the sum of interior angles of a regular hexagon (6 sides).",
              choices: ["720°", "540°", "360°", "900°"],
              correct: 0,
              explanation: "(6 - 2) × 180° = 4 × 180° = 720°."
            }
          }
        ]
      }
    ],quiz: [
      { q: "What is the sum of interior angles in a triangle?", choices: ["180\u00b0", "360\u00b0", "90\u00b0", "270\u00b0"], correct: 0, "why": "The three interior angles of any triangle always add up to 180\u00b0." },
      { q: "Two angles that add up to 90\u00b0 are called:", choices: ["Complementary angles", "Supplementary angles", "Reflex angles", "Vertically opposite angles"], correct: 0, "why": "Complementary angles sum to 90\u00b0, while supplementary angles sum to 180\u00b0." },
      { q: "Find the size of one interior angle of a regular hexagon (6 sides).", choices: ["120\u00b0", "108\u00b0", "135\u00b0", "144\u00b0"], correct: 0, "why": "Sum of interior angles = (6 \u2212 2) \u00d7 180\u00b0 = 720\u00b0. One angle = 720\u00b0 \u00f7 6 = 120\u00b0." },
      { q: "What is the bearing of East from North?", choices: ["090\u00b0", "180\u00b0", "270\u00b0", "045\u00b0"], correct: 0, "why": "Bearings are measured clockwise from North (000\u00b0). East is 090\u00b0." },
      { q: "If two parallel lines are cut by a transversal, corresponding angles are:", choices: ["Equal", "Supplementary", "90\u00b0", "Unequal"], correct: 0, "why": "Corresponding angles (F-angles) on parallel lines are always equal." },
      { q: "An angle greater than 180\u00b0 but less than 360\u00b0 is called a:", choices: ["Reflex angle", "Obtuse angle", "Acute angle", "Right angle"], correct: 0, "why": "Reflex angles lie between 180\u00b0 and 360\u00b0." },
      { q: "On a map scale of 1 cm to 5 km, what actual distance is represented by a 6 cm line?", choices: ["30 km", "11 km", "35 km", "25 km"], correct: 0, "why": "Actual distance = 6 \u00d7 5 km = 30 km." },
      { q: "What is the sum of exterior angles of any polygon?", choices: ["360\u00b0", "180\u00b0", "540\u00b0", "720\u00b0"], correct: 0, "why": "The exterior angles of any closed polygon always sum up to 360\u00b0." },
    ],
  },
  {
    id: "time",
    themeId: "theme-5-measurement",
    themeName: "Measurement",
    title: "Time",
    estMinutes: 30,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "Time helps learners read clocks, timetables and durations accurately in daily life and examinations.",
      learningObjectives: [
        "Convert between 12-hour and 24-hour clock time.",
        "Calculate time intervals, including intervals that pass midnight.",
        "Use timetables to solve travel and daily-life problems.",
      ],
      whatYouNeedToKnow: [
        "A day has 24 hours, an hour has 60 minutes and a minute has 60 seconds.",
        "For p.m. times after 12 noon, add 12 to the hour to write 24-hour time.",
        "To find duration, count from the starting time to the finishing time in sensible jumps.",
      ],
      worked: {
        problem: "A bus leaves Kampala at 10:45 p.m. and arrives at 2:20 a.m. How long is the journey?",
        steps: [
          "From 10:45 p.m. to midnight is 1 hour 15 minutes.",
          "From midnight to 2:20 a.m. is 2 hours 20 minutes.",
          "Add: 1 h 15 min + 2 h 20 min = 3 h 35 min.",
        ],
        answer: "The journey takes 3 hours 35 minutes.",
      },
      commonMistakes: [
        "Adding 12 to 12 noon or 12 midnight incorrectly.",
        "Forgetting that one hour has 60 minutes, not 100 minutes.",
        "Getting confused when a time interval passes midnight.",
      ],
      recap: [
        "Use 60 minutes in every hour.",
        "For 24-hour p.m. times after noon, add 12 to the hour.",
        "Break long time intervals into smaller steps.",
      ],
    },
    subtopics: [
      {
        subtopicId: "time-clocks",
        title: "1. Clocks and time conversion",
        modules: [
          {
            moduleId: "time-12-24-hour",
            title: "12-hour and 24-hour time",
            bigIdea: "The 24-hour clock removes a.m. and p.m. by numbering hours from 00 to 23.",
            learnIt: [
              "From 1:00 a.m. to 11:59 a.m., the 24-hour time uses the same hour, often with a zero in front: 7:30 a.m. becomes 07:30.",
              "From 1:00 p.m. to 11:59 p.m., add 12 to the hour: 4:15 p.m. becomes 16:15.",
              "12 noon is 12:00. 12 midnight is 00:00 or 24:00 depending on the timetable, but 00:00 is the usual start of a new day.",
            ],
            workedExample: {
              question: "Write 9:40 p.m. in 24-hour time.",
              steps: [
                "Step 1: It is p.m. and the hour is not 12, so add 12 to the hour.",
                "Step 2: 9 + 12 = 21.",
                "Step 3: Keep the minutes the same: 40.",
              ],
              answer: "21:40",
            },
            tryThis: {
              question: "Write 6:05 a.m. in 24-hour time.",
              choices: ["06:05", "18:05", "6:50", "16:05"],
              correct: 0,
              explanation: "Morning time keeps the same hour with a zero in front: 06:05.",
            },
          },
        ],
      },
      {
        subtopicId: "time-duration",
        title: "2. Duration and timetables",
        modules: [
          {
            moduleId: "time-duration-method",
            title: "Finding time intervals",
            bigIdea: "Duration is the amount of time between a start and an end time.",
            learnIt: [
              "Use counting-on for most duration questions. Count from the start time to the next easy time, then to the finish time.",
              "When minutes are difficult, borrow or count through the next hour. For example, from 8:45 to 10:20: 8:45 to 9:00 is 15 min, 9:00 to 10:00 is 1 h, and 10:00 to 10:20 is 20 min.",
              "For times crossing midnight, split the work into before midnight and after midnight.",
            ],
            workedExample: {
              question: "Find the time from 8:45 a.m. to 10:20 a.m.",
              steps: [
                "Step 1: 8:45 to 9:00 = 15 minutes.",
                "Step 2: 9:00 to 10:00 = 1 hour.",
                "Step 3: 10:00 to 10:20 = 20 minutes.",
                "Step 4: Total = 1 hour 35 minutes.",
              ],
              answer: "1 hour 35 minutes",
            },
            tryThis: {
              question: "A lesson starts at 2:10 p.m. and ends at 3:00 p.m. How long is it?",
              choices: ["50 minutes", "40 minutes", "1 hour 10 minutes", "30 minutes"],
              correct: 0,
              explanation: "From 2:10 to 3:00 is 50 minutes.",
            },
          },
          {
            moduleId: "time-timetable-problems",
            title: "Timetable word problems",
            bigIdea: "Timetables show planned times; learners must read rows and columns carefully.",
            learnIt: [
              "Always read the heading first: departure, arrival, subject, day, route or activity.",
              "Check whether times are written in 12-hour or 24-hour format before calculating.",
              "In travel problems, duration = arrival time - departure time. If there is waiting time, add it separately.",
            ],
            workedExample: {
              question: "A train leaves at 14:35 and arrives at 17:10. How long is the journey?",
              steps: [
                "Step 1: 14:35 to 15:00 = 25 minutes.",
                "Step 2: 15:00 to 17:00 = 2 hours.",
                "Step 3: 17:00 to 17:10 = 10 minutes.",
                "Step 4: Total = 2 hours 35 minutes.",
              ],
              answer: "2 hours 35 minutes",
            },
            tryThis: {
              question: "A bus leaves at 23:20 and arrives at 01:05. How long is the journey?",
              choices: ["1 h 45 min", "2 h 15 min", "1 h 25 min", "45 min"],
              correct: 0,
              explanation: "23:20 to midnight = 40 min; midnight to 01:05 = 1 h 5 min. Total = 1 h 45 min.",
            },
          },
        ],
      },
    ],
    quiz: [
      { q: "Write 7:30 p.m. in 24-hour time.", choices: ["19:30", "07:30", "17:30", "20:30"], correct: 0, why: "For p.m. times after noon, add 12 to the hour: 7 + 12 = 19." },
      { q: "Write 04:45 in 12-hour time.", choices: ["4:45 a.m.", "4:45 p.m.", "12:45 a.m.", "16:45"], correct: 0, why: "04:45 is before 12:00, so it is 4:45 a.m." },
      { q: "How many minutes are in 2 hours 15 minutes?", choices: ["135", "115", "125", "215"], correct: 0, why: "2 hours = 120 minutes. 120 + 15 = 135 minutes." },
      { q: "Find the duration from 9:20 a.m. to 11:05 a.m.", choices: ["1 h 45 min", "2 h 15 min", "1 h 25 min", "45 min"], correct: 0, why: "9:20 to 10:00 is 40 min, 10:00 to 11:00 is 1 h, and 11:00 to 11:05 is 5 min." },
      { q: "A film starts at 8:50 p.m. and ends at 10:15 p.m. How long is it?", choices: ["1 h 25 min", "1 h 35 min", "2 h 25 min", "25 min"], correct: 0, why: "8:50 to 9:00 is 10 min, 9:00 to 10:00 is 1 h, 10:00 to 10:15 is 15 min." },
      { q: "A journey starts at 22:40 and ends at 01:10. How long is it?", choices: ["2 h 30 min", "3 h 30 min", "1 h 30 min", "2 h 10 min"], correct: 0, why: "22:40 to midnight is 1 h 20 min; midnight to 01:10 is 1 h 10 min. Total = 2 h 30 min." },
      { q: "What is 12 midnight in 24-hour time?", choices: ["00:00", "12:00", "24:12", "12:24"], correct: 0, why: "Midnight is the start of a new day and is usually written as 00:00." },
      { q: "A clock gains 5 minutes every hour. How much time will it gain in 6 hours?", choices: ["30 minutes", "11 minutes", "60 minutes", "25 minutes"], correct: 0, why: "5 minutes each hour for 6 hours gives 5 × 6 = 30 minutes." },
    ],
  },
  {
    id: "length-mass-capacity",
    themeId: "theme-5-measurement",
    themeName: "Measurement",
    title: "Length, Mass, Capacity and Money",
    estMinutes: 45,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "Measurement connects mathematics to real life: distance, weight, containers, area, volume and money.",
      learningObjectives: [
        "Convert between common metric units of length, mass and capacity.",
        "Calculate perimeter, area and volume of common shapes and solids.",
        "Solve money problems involving profit, loss and simple interest.",
      ],
      whatYouNeedToKnow: [
        "Metric conversions use powers of 10, such as 100 cm = 1 m and 1000 g = 1 kg.",
        "Perimeter is distance around a shape. Area is surface covered. Volume is space occupied.",
        "Money problems often use percentage profit, percentage loss or simple interest.",
      ],
      worked: {
        problem: "A rectangular garden is 12 m long and 8 m wide. Find its perimeter and area.",
        steps: [
          "Perimeter = 2 × (length + width) = 2 × (12 + 8) = 40 m.",
          "Area = length × width = 12 × 8 = 96 m².",
        ],
        answer: "Perimeter = 40 m and area = 96 m².",
      },
      commonMistakes: [
        "Confusing perimeter and area.",
        "Forgetting to square units for area and cube units for volume.",
        "Calculating percentage profit over selling price instead of cost price.",
      ],
      recap: [
        "Perimeter uses length units, area uses square units and volume uses cubic units.",
        "Profit = selling price - cost price.",
        "Simple interest = (P × R × T) ÷ 100.",
      ],
    },
    subtopics: [
      {
        subtopicId: "metric-conversions",
        title: "1. Metric conversions",
        modules: [
          {
            moduleId: "length-mass-capacity-units",
            title: "Length, mass and capacity units",
            bigIdea: "Metric units convert by multiplying or dividing by 10, 100 or 1000.",
            learnIt: [
              "Length: 10 mm = 1 cm, 100 cm = 1 m, and 1000 m = 1 km.",
              "Mass: 1000 g = 1 kg, and 1000 kg = 1 tonne.",
              "Capacity: 1000 ml = 1 litre. Also, 1000 cm³ = 1 litre for volume-capacity problems.",
            ],
            workedExample: {
              question: "Convert 3.75 kg to grams.",
              steps: [
                "Step 1: 1 kg = 1000 g.",
                "Step 2: 3.75 × 1000 = 3750.",
              ],
              answer: "3.75 kg = 3750 g.",
            },
            tryThis: {
              question: "Convert 4.2 litres to millilitres.",
              choices: ["4200 ml", "420 ml", "42 ml", "42000 ml"],
              correct: 0,
              explanation: "1 litre = 1000 ml, so 4.2 × 1000 = 4200 ml.",
            },
          },
        ],
      },
      {
        subtopicId: "perimeter-area-volume",
        title: "2. Perimeter, area and volume",
        modules: [
          {
            moduleId: "perimeter-area-2d",
            title: "Perimeter and area of plane shapes",
            bigIdea: "Perimeter measures distance around a shape; area measures surface covered.",
            learnIt: [
              "Rectangle: perimeter = 2(l + w), area = l × w.",
              "Triangle: area = 1/2 × base × height. The height must be perpendicular to the base.",
              "Circle: circumference = 2πr or πd; area = πr². Use the value of π given in the question.",
            ],
            workedExample: {
              question: "Find the area of a triangle with base 14 cm and height 9 cm.",
              steps: [
                "Step 1: Area = 1/2 × base × height.",
                "Step 2: Area = 1/2 × 14 × 9.",
                "Step 3: 7 × 9 = 63.",
              ],
              answer: "63 cm²",
            },
            tryThis: {
              question: "Find the perimeter of a rectangle 15 cm long and 6 cm wide.",
              choices: ["42 cm", "90 cm", "21 cm", "36 cm"],
              correct: 0,
              explanation: "Perimeter = 2(15 + 6) = 2 × 21 = 42 cm.",
            },
          },
          {
            moduleId: "volume-3d-capacity",
            title: "Volume and capacity",
            bigIdea: "Volume measures space occupied by a solid and can connect to litres for containers.",
            learnIt: [
              "Cuboid volume = length × width × height. Use cubic units such as cm³ or m³.",
              "Cylinder volume = πr²h. Find the circular base area first, then multiply by height.",
              "For containers, remember 1000 cm³ = 1 litre. This helps change volume into capacity.",
            ],
            workedExample: {
              question: "A tank is 50 cm long, 40 cm wide and 30 cm high. Find its capacity in litres.",
              steps: [
                "Step 1: Volume = 50 × 40 × 30 = 60000 cm³.",
                "Step 2: 1000 cm³ = 1 litre.",
                "Step 3: 60000 ÷ 1000 = 60 litres.",
              ],
              answer: "60 litres",
            },
            tryThis: {
              question: "Find the volume of a cuboid 8 cm by 5 cm by 4 cm.",
              choices: ["160 cm³", "40 cm³", "80 cm³", "17 cm³"],
              correct: 0,
              explanation: "8 × 5 × 4 = 160 cm³.",
            },
          },
        ],
      },
      {
        subtopicId: "money-business",
        title: "3. Money and business arithmetic",
        modules: [
          {
            moduleId: "profit-loss-interest",
            title: "Profit, loss and simple interest",
            bigIdea: "Money questions often compare cost price, selling price and time-based interest.",
            learnIt: [
              "Profit = selling price - cost price. Loss = cost price - selling price.",
              "Percentage profit or loss is calculated over cost price, not selling price.",
              "Simple interest: I = (P × R × T) ÷ 100, where P is principal, R is rate per year and T is time in years.",
            ],
            workedExample: {
              question: "A trader buys a bag for UGX 80,000 and sells it for UGX 100,000. Find the percentage profit.",
              steps: [
                "Step 1: Profit = 100,000 - 80,000 = UGX 20,000.",
                "Step 2: Percentage profit = (20,000 ÷ 80,000) × 100%.",
                "Step 3: 20,000/80,000 = 1/4, so 1/4 × 100% = 25%.",
              ],
              answer: "25% profit",
            },
            tryThis: {
              question: "Find the simple interest on UGX 300,000 for 2 years at 5% per year.",
              choices: ["UGX 30,000", "UGX 15,000", "UGX 3000", "UGX 60,000"],
              correct: 0,
              explanation: "I = (300,000 × 5 × 2) ÷ 100 = UGX 30,000.",
            },
          },
        ],
      },
    ],
    quiz: [
      { q: "Convert 3.2 tonnes into kilograms.", choices: ["3200 kg", "320 kg", "32000 kg", "32 kg"], correct: 0, why: "1 tonne = 1000 kg, so 3.2 × 1000 = 3200 kg." },
      { q: "Convert 4.5 litres into millilitres.", choices: ["4500 ml", "450 ml", "45000 ml", "45 ml"], correct: 0, why: "1 litre = 1000 ml, so 4.5 × 1000 = 4500 ml." },
      { q: "Find the perimeter of a rectangle 12 cm by 8 cm.", choices: ["40 cm", "96 cm", "20 cm", "48 cm"], correct: 0, why: "Perimeter = 2(12 + 8) = 40 cm." },
      { q: "Find the area of a circle of radius 7 cm. Take π = 22/7.", choices: ["154 cm²", "44 cm²", "308 cm²", "77 cm²"], correct: 0, why: "Area = πr² = 22/7 × 7 × 7 = 154 cm²." },
      { q: "Find the volume of a cuboid 10 cm by 5 cm by 4 cm.", choices: ["200 cm³", "100 cm³", "400 cm³", "19 cm³"], correct: 0, why: "Volume = length × width × height = 10 × 5 × 4 = 200 cm³." },
      { q: "A tank has volume 25000 cm³. What is its capacity in litres?", choices: ["25 litres", "250 litres", "2.5 litres", "25000 litres"], correct: 0, why: "1000 cm³ = 1 litre, so 25000 ÷ 1000 = 25 litres." },
      { q: "A trader bought a goat for UGX 120,000 and sold it for UGX 150,000. Find the percentage profit.", choices: ["25%", "20%", "30%", "15%"], correct: 0, why: "Profit = 30,000. Profit % = 30,000/120,000 × 100 = 25%." },
      { q: "Calculate simple interest on UGX 200,000 for 2 years at 5% per year.", choices: ["UGX 20,000", "UGX 10,000", "UGX 40,000", "UGX 25,000"], correct: 0, why: "I = (200,000 × 5 × 2) ÷ 100 = UGX 20,000." },
    ],
  },
  {
    id: "algebra",
    themeId: "theme-6-algebra",
    themeName: "Algebra",
    title: "Algebra",
    estMinutes: 45,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "Algebra uses letters to stand for numbers and helps learners solve unknown values in equations and word problems.",
      learningObjectives: [
        "Simplify algebraic expressions by collecting like terms.",
        "Substitute values into expressions.",
        "Solve linear equations and inequalities.",
        "Translate word problems into algebraic statements.",
      ],
      whatYouNeedToKnow: [
        "A letter such as x or y can represent an unknown number or a changing number.",
        "Like terms have the same letter part, such as 3a and 5a. Unlike terms cannot be combined.",
        "Equations are solved by doing the same operation to both sides until the unknown is alone.",
      ],
      worked: {
        problem: "Solve: 3x + 7 = 28.",
        steps: [
          "Subtract 7 from both sides: 3x = 21.",
          "Divide both sides by 3: x = 7.",
        ],
        answer: "x = 7.",
      },
      commonMistakes: [
        "Adding unlike terms such as 3a + 2b and calling it 5ab.",
        "Changing only one side of an equation.",
        "Forgetting to flip the inequality sign when multiplying or dividing by a negative number.",
      ],
      recap: [
        "Collect only like terms.",
        "Substitution means replacing letters with given numbers.",
        "Solve equations by using inverse operations on both sides.",
      ],
    },
    subtopics: [
      {
        subtopicId: "algebra-expressions",
        title: "1. Expressions and substitution",
        modules: [
          {
            moduleId: "like-terms-expressions",
            title: "Simplifying expressions",
            bigIdea: "Algebraic expressions become simpler when like terms are collected together.",
            learnIt: [
              "A term is a part of an expression, such as 4a, -2b or 7. Like terms have the same letter part.",
              "Collect like terms by adding or subtracting their coefficients. For example, 5a - 2a = 3a.",
              "Constants are number terms without letters. They can be combined with other constants.",
            ],
            workedExample: {
              question: "Simplify: 6x + 4y - 2x + 3y - 5.",
              steps: [
                "Step 1: Group x terms: 6x - 2x = 4x.",
                "Step 2: Group y terms: 4y + 3y = 7y.",
                "Step 3: Keep the constant -5.",
              ],
              answer: "4x + 7y - 5",
            },
            tryThis: {
              question: "Simplify: 8a - 3a + 2b",
              choices: ["5a + 2b", "7ab", "5a - 2b", "11a + 2b"],
              correct: 0,
              explanation: "8a - 3a = 5a. The 2b is unlike, so it remains 2b.",
            },
          },
          {
            moduleId: "substitution-values",
            title: "Substitution",
            bigIdea: "Substitution means replacing letters with given numbers, then calculating carefully.",
            learnIt: [
              "When a value is given, put it wherever the letter appears. If p = 4, then 3p means 3 × 4.",
              "Use brackets when substituting negative numbers to avoid sign mistakes.",
              "Follow BODMAS/BOOMDAS after substitution: brackets, powers, multiplication/division, addition/subtraction.",
            ],
            workedExample: {
              question: "If a = 3 and b = 5, evaluate 2a + 3b.",
              steps: [
                "Step 1: Replace a with 3 and b with 5.",
                "Step 2: 2a + 3b = 2(3) + 3(5).",
                "Step 3: 6 + 15 = 21.",
              ],
              answer: "21",
            },
            tryThis: {
              question: "If x = 4, find 5x - 6.",
              choices: ["14", "20", "11", "26"],
              correct: 0,
              explanation: "5(4) - 6 = 20 - 6 = 14.",
            },
          },
        ],
      },
      {
        subtopicId: "algebra-equations",
        title: "2. Equations, inequalities and word problems",
        modules: [
          {
            moduleId: "linear-equations",
            title: "Solving linear equations",
            bigIdea: "An equation stays balanced when the same operation is done on both sides.",
            learnIt: [
              "Use inverse operations to undo what has been done to the unknown. Addition is undone by subtraction, and multiplication is undone by division.",
              "Whatever you do to one side of the equation must also be done to the other side.",
              "Check your answer by substituting it back into the original equation.",
            ],
            workedExample: {
              question: "Solve: 4y - 5 = 19.",
              steps: [
                "Step 1: Add 5 to both sides: 4y = 24.",
                "Step 2: Divide both sides by 4: y = 6.",
                "Step 3: Check: 4(6) - 5 = 24 - 5 = 19.",
              ],
              answer: "y = 6",
            },
            tryThis: {
              question: "Solve: 3m + 4 = 22",
              choices: ["6", "8", "7", "5"],
              correct: 0,
              explanation: "3m = 18, so m = 6.",
            },
          },
          {
            moduleId: "inequalities-number-lines",
            title: "Inequalities and solution sets",
            bigIdea: "Inequalities show a range of possible answers rather than one answer only.",
            learnIt: [
              "The signs < and > mean less than and greater than. The signs ≤ and ≥ include equality.",
              "Solve inequalities like equations, but if you multiply or divide by a negative number, reverse the inequality sign.",
              "On a number line, use an open circle for < or > and a closed circle for ≤ or ≥.",
            ],
            visual: { title: "Inequality number line", kind: "timeline", description: "Use open and closed circles to show whether an endpoint is included in the solution set." },
            workedExample: {
              question: "Solve: 2x + 4 < 12.",
              steps: [
                "Step 1: Subtract 4 from both sides: 2x < 8.",
                "Step 2: Divide both sides by positive 2: x < 4.",
              ],
              answer: "x < 4",
            },
            tryThis: {
              question: "Solve: -2x > 10",
              choices: ["x < -5", "x > -5", "x < 5", "x > 5"],
              correct: 0,
              explanation: "Divide by -2 and reverse the sign: x < -5.",
            },
          },
          {
            moduleId: "algebra-word-problems",
            title: "Algebra word problems",
            bigIdea: "Word problems become easier when unknowns are represented by letters.",
            learnIt: [
              "Choose a letter for the unknown number. Let x be the number unless the question suggests another letter.",
              "Translate words carefully: 'sum' means add, 'difference' means subtract, 'product' means multiply, and 'quotient' means divide.",
              "For consecutive numbers, use x, x + 1, x + 2. For consecutive even numbers, use x, x + 2, x + 4.",
            ],
            workedExample: {
              question: "The sum of three consecutive whole numbers is 36. Find the numbers.",
              steps: [
                "Step 1: Let the numbers be x, x + 1 and x + 2.",
                "Step 2: x + x + 1 + x + 2 = 36.",
                "Step 3: 3x + 3 = 36, so 3x = 33 and x = 11.",
                "Step 4: The numbers are 11, 12 and 13.",
              ],
              answer: "11, 12 and 13",
            },
            tryThis: {
              question: "Five pencils cost UGX 15,000. What is the cost of y pencils?",
              choices: ["3000y", "15000y", "3000 + y", "15000/y"],
              correct: 0,
              explanation: "One pencil costs 15000 ÷ 5 = 3000, so y pencils cost 3000y.",
            },
          },
        ],
      },
    ],
    quiz: [
      { q: "Simplify: 5a + 3b - 2a + 4b", choices: ["3a + 7b", "7a + b", "3a - 7b", "8a + 7b"], correct: 0, why: "Collect like terms: 5a - 2a = 3a and 3b + 4b = 7b." },
      { q: "If p = 3 and q = 5, evaluate 2p + 3q.", choices: ["21", "16", "18", "24"], correct: 0, why: "2(3) + 3(5) = 6 + 15 = 21." },
      { q: "Solve for y: 4y - 5 = 19", choices: ["6", "5", "7", "4"], correct: 0, why: "Add 5 to both sides: 4y = 24. Divide by 4: y = 6." },
      { q: "Solve: m/3 + 4 = 9", choices: ["15", "5", "12", "27"], correct: 0, why: "Subtract 4: m/3 = 5. Multiply by 3: m = 15." },
      { q: "Solve the inequality: 2x + 4 < 12", choices: ["x < 4", "x > 4", "x < 8", "x = 4"], correct: 0, why: "2x < 8, so x < 4." },
      { q: "Solve: -3x ≥ 12", choices: ["x ≤ -4", "x ≥ -4", "x ≤ 4", "x ≥ 4"], correct: 0, why: "Divide by -3 and reverse the inequality sign: x ≤ -4." },
      { q: "The sum of three consecutive whole numbers is 36. Find the smallest number.", choices: ["11", "12", "13", "10"], correct: 0, why: "Let them be x, x+1, x+2. 3x + 3 = 36, so x = 11." },
      { q: "Expand and simplify: 3(x + 4) - 2(x - 1)", choices: ["x + 14", "x + 10", "5x + 14", "x + 12"], correct: 0, why: "3x + 12 - 2x + 2 = x + 14." },
    ],
  },
];

export const COMING_SOON: Array<{ id?: string; themeName: string; title: string; whyLater: string }> = [];

export const TOPICS: Topic[] = balanceTopicAnswers(addUpperPrimaryMathV4(TOPICS_DATA, "P7", P7_MATH_TERMS));

export function getTopic(id: string): Topic | undefined {
  const direct = TOPICS.find((t) => t.id === id);
  if (direct) return direct;
  // Legacy / subtopic lookup for backward compatibility
  return TOPICS.find((t) => t.subtopics?.some((s) => s.subtopicId === id));
}

export function hasTopicDiagram(id: string): boolean {
  const t = getTopic(id);
  return Boolean(t?.note.study?.visual || t?.subtopics?.some(s => s.modules.some(m => m.visual || m.imageUrl)));
}

export function getTopicVisualPill(topic: Topic): string | null {
  const hasImages = topic.subtopics?.some(s => s.modules.some(m => Boolean(m.imageUrl)));
  const hasDiagrams = Boolean(topic.note.study?.visual || topic.subtopics?.some(s => s.modules.some(m => Boolean(m.visual))));
  if (hasImages && hasDiagrams) return "Includes images & diagrams";
  if (hasImages) return "Includes images";
  if (hasDiagrams) return "Includes diagrams";
  return null;
}
