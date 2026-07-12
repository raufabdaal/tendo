import type { Topic } from "@/lib/topics";
import { addUpperPrimaryMathV4 } from "@/lib/v4-math-helpers";


function balanceTopicAnswers(topics: Topic[]): Topic[] {
  let nextCorrectIndex = 0;

  function visit(value: unknown): void {
    if (Array.isArray(value)) {
      value.forEach(visit);
      return;
    }
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

const P6_MATH_TERMS: Record<string, "Term I" | "Term II" | "Term III"> = {
  "p6-sets": "Term I",
  "p6-whole-numbers": "Term I",
  "p6-operations": "Term I",
  "p6-fractions-decimals": "Term II",
  "p6-geometry": "Term II",
  "p6-data-algebra": "Term III"
};

const P6_MATH_TOPICS_DATA: Topic[] = [
  {
    id: "p6-sets",
    themeId: "p6-math-core",
    themeName: "Primary Six Core Mathematics",
    title: "Set Concepts up to Two Categories",
    estMinutes: 25,
    status: "published",
    reviewStatus: "verified",
    videoUrl: "https://youtu.be/BAUouvIwPZQ",
    note: {
      intro: "Why this matters: P6 Set Concepts build logical classification and problem-solving skills for PLE, moving from listing members to shading two-circle Venn diagrams and finding simple probabilities.",
      learningObjectives: [
        "List set members using roster notation and distinguish between equal and equivalent sets.",
        "Represent intersection (A ∩ B), union (A ∪ B), and set difference on two-circle Venn diagrams.",
        "List subsets systematically and calculate simple probability fractions."
      ],
      whatYouNeedToKnow: [
        "Equal sets contain identical elements (order does not matter), while equivalent sets contain the same count of elements (same cardinal number n).",
        "Intersection symbol ∩ means shared elements inside both circles; Union symbol ∪ means all combined elements across both circles without repeating common terms.",
        "Probability equals favourable outcomes divided by total possible outcomes."
      ],
      worked: {
        problem: "If set A = {2, 3, 5, 7} and set B = {1, 3, 5, 7, 9}, find n(A ∩ B) and n(A ∪ B).",
        steps: [
          "Find common elements shared inside both sets: A ∩ B = {3, 5, 7}. Count them: n(A ∩ B) = 3.",
          "List all elements without repeating shared terms: A ∪ B = {1, 2, 3, 5, 7, 9}. Count them: n(A ∪ B) = 6."
        ],
        answer: "n(A ∩ B) = 3, and n(A ∪ B) = 6."
      },
      recap: [
        "Check cardinal counts carefully before declaring sets equal or equivalent.",
        "In word problems, always fill the middle intersection overlap first."
      ]
    },
    subtopics: [
      {
        subtopicId: "p6-listing-equal-equivalent",
        title: "1. Listing Members, Equal and Equivalent Sets",
        modules: [
          {
            moduleId: "p6-roster-equal-equiv",
            videoUrl: "https://youtu.be/BAUouvIwPZQ",
            title: "Roster Notation, Equal vs Equivalent Sets",
            bigIdea: "Sets group well-defined collections; comparing member identities versus member counts separates equal sets from equivalent sets.",
            learnIt: [
              "Listing roster notation: members are written inside curly brackets { } and separated by commas. Example: Set of prime numbers less than 10 = {2, 3, 5, 7}. Cardinal number n is the total count of distinct members (n = 4).",
              "Equal sets (=): two sets are equal if they contain the exact same members, regardless of listing order. Example: If P = {a, e, i, o, u} and Q = {u, o, i, e, a}, then P = Q.",
              "Equivalent sets (~): two sets are equivalent if they have the exact same cardinal number n, even if the elements differ completely. Example: If X = {red, blue, green} and Y = {10, 20, 30}, then n(X) = 3 and n(Y) = 3, so X ~ Y."
            ],
            workedExample: {
              question: "Given set M = {p, q, r, s} and set N = {2, 4, 6, 8}, state with a reason whether set M and set N are equal or equivalent.",
              steps: [
                "Step 1: Count elements in set M: n(M) = 4.",
                "Step 2: Count elements in set N: n(N) = 4.",
                "Step 3: Compare actual elements: letters vs even numbers (not identical).",
                "Step 4: Since n(M) = n(N) = 4 but elements differ, they are equivalent sets."
              ],
              answer: "Set M and set N are equivalent sets because they have the same cardinal number of elements (4)."
            },
            tryThis: {
              question: "If set K = {odd numbers between 2 and 10} and set L = {3, 5, 7, 9}, which statement is true?",
              choices: ["Set K and set L are disjoint sets", "Set K and set L are equal sets (K = L)", "Set K is an empty set", "Set L has 5 elements"],
              correct: 1,
              explanation: "Odd numbers between 2 and 10 are {3, 5, 7, 9}, so set K and set L contain the exact same members."
            }
          }
        ]
      },
      {
        subtopicId: "p6-venn-intersection-union",
        title: "2. Intersection and Union of Two Sets on Venn Diagrams",
        modules: [
          {
            moduleId: "p6-two-circle-venn",
            imageUrl: "/images/math/venn-diagram-4-regions.png",
            imageCaption: "Two overlapping circles inside a universal set separating Only A, Overlap, Only B, and Neither.",
            title: "Shading and Calculating Venn Regions",
            bigIdea: "Venn diagrams visually sort elements into common overlaps (intersection) and combined unions.",
            learnIt: [
              "Intersection (A ∩ B): elements shared by both circle A and circle B. Shaded in the center overlap.",
              "Union (A ∪ B): all elements present in circle A, circle B, or both combined. Shaded across both entire circles.",
              "Difference (A - B) or 'Only A': elements inside circle A excluding the center overlap. Formula: n(Only A) = n(A) - n(A ∩ B)."
            ],
            workedExample: {
              question: "In a class of 40 pupils, 25 like Rice (R), 20 like Posho (P), and 10 like both foods. How many pupils like only Rice?",
              steps: [
                "Step 1: Identify total liking Rice: n(R) = 25.",
                "Step 2: Identify overlap liking both: n(R ∩ P) = 10.",
                "Step 3: Subtract overlap from total Rice: Only Rice = 25 - 10 = 15."
              ],
              answer: "15 pupils like only Rice."
            },
            tryThis: {
              question: "If n(X) = 18 and n(X ∩ Y) = 6, how many elements belong strictly to 'Only X' (X - Y)?",
              choices: ["24", "12", "6", "18"],
              correct: 1,
              explanation: "Only X = Total X minus intersection = 18 - 6 = 12."
            }
          }
        ]
      },
      {
        subtopicId: "p6-subsets-probability",
        title: "3. Subsets and Simple Probability",
        modules: [
          {
            moduleId: "p6-listing-subsets-prob",
            videoUrl: "https://youtu.be/CMHmvvz8uJE",
            imageUrl: "/images/math/subset-venn-diagram.png",
            imageCaption: "A smaller subset circle enclosed completely inside a parent universal set circle.",
            title: "Listing Subsets and Single-Event Probability",
            bigIdea: "Subsets represent smaller collections enclosed within a parent set, while probability measures numerical likelihood.",
            learnIt: [
              "Subset definition: If every member of set A is also found inside set B, A is a subset of B (A ⊂ B). The empty set ∅ is a subset of every set.",
              "Probability scale: ranges from 0 (impossible event) to 1 (certain event). Formula: P(Event) = Number of favourable outcomes ÷ Total possible outcomes.",
              "Complement rule: P(Happening) + P(Not Happening) = 1."
            ],
            workedExample: {
              question: "A bag contains 5 red balls, 3 blue balls, and 2 green balls. What is the probability of picking a blue ball at random?",
              steps: [
                "Step 1: Calculate total possible outcomes: 5 + 3 + 2 = 10 balls.",
                "Step 2: Identify favourable outcomes for blue balls = 3.",
                "Step 3: Write as a fraction: P(Blue) = 3 ÷ 10 = 3/10."
              ],
              answer: "The probability of picking a blue ball is 3/10."
            },
            tryThis: {
              question: "If a fair six-sided die numbered 1 to 6 is rolled once, what is the probability of rolling a number greater than 4?",
              choices: ["1/6", "2/6 (or 1/3)", "4/6", "1/2"],
              correct: 1,
              explanation: "Numbers greater than 4 on a die are 5 and 6 (2 outcomes). Probability = 2/6 = 1/3."
            }
          }
        ]
      }
    
      ,{
        subtopicId: "premium-premium-practice-sorting-and-venn-word-problems",
        title: "Premium Practice: Sorting and Venn Word Problems",
        modules: [
          {
            moduleId: "sorting-real-objects-into-sets",
            title: "Sorting Real Objects into Sets",
            bigIdea: "Set work becomes easier when learners first decide the rule for membership.",
            learnIt: ["A set must have a clear rule. For example, 'even numbers less than 12' is clear, but 'nice numbers' is not clear.", "When sorting real objects, write members only once even if they seem to fit more than one description.", "For Venn word problems, put the overlap first, then fill only-left and only-right regions."],
            workedExample: { question: "In a class, 18 pupils like milk, 15 like juice and 7 like both. How many like only milk?", steps: ["Step 1: Identify the total who like milk: 18.", "Step 2: Identify the overlap: 7 like both.", "Step 3: Only milk = 18 - 7 = 11."], answer: "11 pupils like only milk." },
            tryThis: { question: "If 12 learners play football and 5 also play netball, how many play football only?", choices: ["7", "12", "17", "5"], correct: 0, explanation: "Football only = 12 - 5 = 7." }
          }
        ]
      }],
    quiz: [
      { q: "If P = {1, 3, 5} and Q = {3, 5, 7}, find P ∩ Q.", choices: ["{3, 5}", "{1, 7}", "{1, 3, 5, 7}", "{ }"], correct: 0, why: "3 and 5 are common to both sets." },
      { q: "What symbol represents an empty set?", choices: ["∅ or { }", "E", "U", "∩"], correct: 0, why: "∅ indicates zero elements." },
      { q: "If n(A) = 4, how many subsets does set A have?", choices: ["16", "8", "4", "12"], correct: 0, why: "2^4 = 16 subsets." },
      { q: "Find n(A ∪ B) if A = {2, 4} and B = {4, 6}.", choices: ["3", "4", "2", "6"], correct: 0, why: "A ∪ B = {2, 4, 6}, which has 3 elements." },
      { q: "If a coin is tossed once, what is the probability of getting a Head?", choices: ["1/2", "1", "0", "1/4"], correct: 0, why: "1 head out of 2 total sides." },
      { q: "Which two sets are equivalent?", choices: ["{a, b} and {1, 2}", "{1, 2} and {1, 2, 3}", "{a} and {a, b}", "{ } and {0}"], correct: 0, why: "Both contain exactly 2 elements." },
      { q: "If set M is a subset of set N, how is it written?", choices: ["M ⊂ N", "M ∩ N", "M ∪ N", "M = N"], correct: 0, why: "⊂ symbol denotes subset." },
      { q: "What is the probability of picking a blue ball from a bag containing 3 red balls only?", choices: ["0", "1", "1/3", "3"], correct: 0, why: "It is impossible to pick blue from red balls only." }
    ]
  },
  {
    id: "p6-whole-numbers",
    themeId: "p6-math-core",
    themeName: "Primary Six Core Mathematics",
    title: "Whole Numbers up to 10,000,000",
    estMinutes: 25,
    status: "published",
    reviewStatus: "verified",
    videoUrl: "https://youtu.be/86ge44f5IYM",
    note: {
      intro: "Why this matters: Place value reasoning up to Ten Millions underpins large numerical accounting, Base Five non-decimal systems, and classical Roman numerals.",
      learningObjectives: [
        "Identify place values and calculate actual values of digits up to Ten Millions (10,000,000).",
        "Write large whole numbers in words and expand numbers using values or powers of ten.",
        "Convert between Hindu-Arabic numerals, Roman numerals up to M (1000), and Base Five numbers."
      ],
      whatYouNeedToKnow: [
        "Place value chart reads from right: Ones, Tens, Hundreds, Thousands, Ten Thousands, Hundred Thousands, Millions, Ten Millions.",
        "Actual Value = Digit × Place Value.",
        "Roman numeral subtraction rules apply when a smaller symbol precedes a larger one (e.g., IV = 4, IX = 9, XL = 40, XC = 90, CD = 400, CM = 900)."
      ],
      worked: {
        problem: "Find the sum of the value of digit 5 and the place value of digit 2 in the number 45,280,136.",
        steps: [
          "Digit 5 is in the Millions place: Value = 5 × 1,000,000 = 5,000,000.",
          "Digit 2 is in the Hundred Thousands place: Place Value = 100,000.",
          "Sum = 5,000,000 + 100,000 = 5,100,000."
        ],
        answer: "The sum is 5,100,000."
      },
      recap: [
        "Base Five uses only five digits: 0, 1, 2, 3, and 4.",
        "Never repeat a Roman numeral symbol more than three times consecutively."
      ]
    },
    subtopics: [
      {
        subtopicId: "p6-place-values-ten-millions",
        title: "1. Place Values and Values up to Ten Millions",
        modules: [
          {
            moduleId: "p6-millions-chart",
            videoUrl: "https://youtu.be/86ge44f5IYM",
            title: "Place Values and Digit Values up to 10,000,000",
            bigIdea: "As digits move one column to the left on the place value chart, their value becomes ten times larger.",
            learnIt: [
              "Place value columns: 1 (Ones), 10 (Tens), 100 (Hundreds), 1,000 (Thousands), 10,000 (Ten Thousands), 100,000 (Hundred Thousands), 1,000,000 (Millions), 10,000,000 (Ten Millions).",
              "Calculating digit value: multiply the digit by its place value. In 73,425,618, the digit 7 occupies Ten Millions, so its value is 7 × 10,000,000 = 70,000,000."
            ],
            workedExample: {
              question: "What is the difference between the value of digit 6 and digit 4 in 6,248,150?",
              steps: [
                "Value of 6 in Millions place = 6,000,000.",
                "Value of 4 in Ten Thousands place = 40,000.",
                "Difference = 6,000,000 - 40,000 = 5,960,000."
              ],
              answer: "The difference is 5,960,000."
            },
            tryThis: {
              question: "What is the place value of digit 8 in the number 28,401,350?",
              choices: ["Hundred Thousands", "Millions", "Ten Millions", "Thousands"],
              correct: 1,
              explanation: "Counting positions from the right places 8 in the Millions column."
            }
          }
        ]
      },
      {
        subtopicId: "p6-words-expanded-form",
        title: "2. Writing Numbers in Words and Expanded Form",
        modules: [
          {
            moduleId: "p6-expanded-powers",
            title: "Periods in Words and Powers of Ten Expansion",
            bigIdea: "Grouping digits into three-digit periods enables correct reading in words and systematic power notation expansion.",
            learnIt: [
              "Writing in words: group digits by periods of three from the right. Example: 45,602,318 = Forty-five million, six hundred two thousand, three hundred eighteen.",
              "Expanded form using powers of ten: label indices starting from 0 on the ones digit. For 5,402: (5 × 10^3) + (4 × 10^2) + (0 × 10^1) + (2 × 10^0)."
            ],
            workedExample: {
              question: "Write 34,506 in expanded form using powers of base 10.",
              steps: [
                "Assign power indices from right to left: 6(10^0), 0(10^1), 5(10^2), 4(10^3), 3(10^4).",
                "Combine terms: (3 × 10^4) + (4 × 10^3) + (5 × 10^2) + (6 × 10^0)."
              ],
              answer: "(3 × 10^4) + (4 × 10^3) + (5 × 10^2) + (6 × 10^0)."
            },
            tryThis: {
              question: "Which number corresponds to Forty-two million, six hundred five thousand, twelve?",
              choices: ["42,605,012", "42,650,012", "4,260,512", "42,605,120"],
              correct: 0,
              explanation: "Forty-two million (42,), six hundred five thousand (605,), twelve (012) = 42,605,012."
            }
          }
        ]
      },
      {
        subtopicId: "p6-roman-base-five",
        title: "3. Roman Numerals up to M and Base Five Conversions",
        modules: [
          {
            moduleId: "p6-roman-base-conversions",
            videoUrl: "https://youtu.be/rGRPJKTClYg",
            title: "Roman Numerals up to 1000 and Base Five Arithmetic",
            bigIdea: "Roman numerals combine seven symbols, while Base Five groups counts by powers of five using digits 0 to 4.",
            learnIt: [
              "Roman symbols: I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000.",
              "Base Five conversions to Base Ten: multiply each digit by its place value power of 5 (1, 5, 25, 125). Example: 213 (base 5) = (2 × 25) + (1 × 5) + (3 × 1) = 50 + 5 + 3 = 58."
            ],
            workedExample: {
              question: "Convert CMLXXXIV into Hindu-Arabic numerals.",
              steps: [
                "Break down symbols: CM = 900, LXXX = 80, IV = 4.",
                "Add components: 900 + 80 + 4 = 984."
              ],
              answer: "CMLXXXIV = 984."
            },
            tryThis: {
              question: "What is 34 (base 5) converted into Base Ten?",
              choices: ["19", "15", "34", "17"],
              correct: 0,
              explanation: "(3 × 5^1) + (4 × 5^0) = 15 + 4 = 19."
            }
          }
        ]
      }
    
      ,{
        subtopicId: "premium-premium-practice-large-numbers-in-real-life",
        title: "Premium Practice: Large Numbers in Real Life",
        modules: [
          {
            moduleId: "reading-and-checking-large-numbers",
            title: "Reading and Checking Large Numbers",
            bigIdea: "Large numbers are easier when learners group digits into periods and check place value carefully.",
            learnIt: ["Read large numbers in periods: millions, thousands and ones.", "When writing in words, each period is read separately, then the period name is added.", "Use place value to check whether an answer is reasonable, especially in money and population questions."],
            workedExample: { question: "Write 4,305,216 in words.", steps: ["Step 1: Split into periods: 4 | 305 | 216.", "Step 2: Read 4 as four million.", "Step 3: Read 305 as three hundred five thousand, and 216 as two hundred sixteen."], answer: "Four million, three hundred five thousand, two hundred sixteen." },
            tryThis: { question: "What is the value of 7 in 27,450,000?", choices: ["7,000,000", "70,000", "700,000", "7,000"], correct: 0, explanation: "The 7 is in the millions place, so its value is 7,000,000." }
          }
        ]
      }],
    quiz: [
      { q: "What is the place value of 7 in 47,205,110?", choices: ["Millions", "Ten Millions", "Hundred Thousands", "Thousands"], correct: 0, why: "7 occupies the seventh column from the right, which is Millions." },
      { q: "Write 604,015 in words.", choices: ["Six hundred four thousand, fifteen", "Six hundred forty thousand, fifteen", "Six million four thousand fifteen", "Sixty-four thousand fifteen"], correct: 0, why: "Grouped by periods: 604 (thousand) and 015 (fifteen)." },
      { q: "Convert Roman numeral CDXLV to Hindu-Arabic.", choices: ["445", "645", "545", "455"], correct: 0, why: "CD = 400, XL = 40, V = 5. Total = 445." },
      { q: "Which digit is NOT allowed in Base Five arithmetic?", choices: ["5", "0", "3", "4"], correct: 0, why: "Base Five uses strictly digits 0, 1, 2, 3, and 4." },
      { q: "Find the value of 23 (base 5) in Base Ten.", choices: ["13", "11", "23", "15"], correct: 0, why: "(2 × 5) + (3 × 1) = 10 + 3 = 13." },
      { q: "Round off 4,865,210 to the nearest Million.", choices: ["5,000,000", "4,000,000", "4,900,000", "4,800,000"], correct: 0, why: "Hundred thousands digit is 8 (≥ 5), so 4 million rounds up to 5,000,000." },
      { q: "What is the value of 9 in 19,420,000?", choices: ["9,000,000", "900,000", "90,000,000", "9,000"], correct: 0, why: "9 is in the Millions place: 9 × 1,000,000 = 9,000,000." },
      { q: "Express 420 in expanded form using place values.", choices: ["400 + 20", "40 + 2", "4000 + 200", "4 + 2 + 0"], correct: 0, why: "4 is in hundreds (400) and 2 is in tens (20)." }
    ]
  },
  {
    id: "p6-operations",
    themeId: "p6-math-core",
    themeName: "Primary Six Core Mathematics",
    title: "Operations on Whole Numbers",
    estMinutes: 25,
    status: "published",
    reviewStatus: "verified",
    videoUrl: "https://youtu.be/TQu3yIGHA-4",
    note: {
      intro: "Why this matters: Mastering four basic operations, BODMAS rules, and prime factorization unlocks complex fraction arithmetic and GCF/LCM problems.",
      learningObjectives: [
        "Perform long addition, subtraction, multiplication, and division on large whole numbers.",
        "Apply strict BODMAS order of operations and number properties (commutative, associative, distributive).",
        "Express numbers as prime factors and solve GCF/LCM problems using Venn diagrams."
      ],
      whatYouNeedToKnow: [
        "BODMAS order: Brackets, Orders (Indices), Division, Multiplication, Addition, Subtraction.",
        "GCF equals the product of shared prime factors inside the Venn intersection overlap.",
        "LCM equals the product of all prime factors inside the union across both Venn circles."
      ],
      worked: {
        problem: "Evaluate: 50 - 24 ÷ 6 × 4 + 10.",
        steps: [
          "Division first: 24 ÷ 6 = 4. Expression becomes 50 - 4 × 4 + 10.",
          "Multiplication next: 4 × 4 = 16. Expression becomes 50 - 16 + 10.",
          "Addition and Subtraction from left to right: 50 - 16 = 34; 34 + 10 = 44."
        ],
        answer: "The answer is 44."
      },
      recap: [
        "Always evaluate division before multiplication if BODMAS rules dictate, or left-to-right for equal ranks.",
        "Check vertical alignment in long division."
      ]
    },
    subtopics: [
      {
        subtopicId: "p6-long-operations",
        title: "1. Long Addition, Subtraction, Multiplication and Division",
        modules: [
          {
            moduleId: "p6-long-division-mult",
            videoUrl: "https://youtu.be/TQu3yIGHA-4",
            title: "Multiplication by Multi-Digit Numbers and Long Division",
            bigIdea: "Systematic vertical place alignment and place-holder zeros ensure precision in multi-digit calculation.",
            learnIt: [
              "Long multiplication: multiply by the ones digit first, then shift left by adding zero placeholders when multiplying by tens and hundreds.",
              "Long division cycle: Divide → Multiply → Subtract → Bring down next digit."
            ],
            workedExample: {
              question: "Divide 4,680 by 15.",
              steps: [
                "46 ÷ 15 = 3 remainder 1.",
                "Bring down 8 to make 18: 18 ÷ 15 = 1 remainder 3.",
                "Bring down 0 to make 30: 30 ÷ 15 = 2 remainder 0."
              ],
              answer: "4,680 ÷ 15 = 312."
            },
            tryThis: {
              question: "What is the product of 245 and 32?",
              choices: ["7,840", "7,640", "8,140", "6,840"], correct: 0,
              explanation: "245 × 32 = (245 × 30) + (245 × 2) = 7,350 + 490 = 7,840."
            }
          }
        ]
      },
      {
        subtopicId: "p6-bodmas-properties",
        title: "2. BODMAS Rules and Number Properties",
        modules: [
          {
            moduleId: "p6-bodmas-distributive",
            videoUrl: "https://youtu.be/TQu3yIGHA-4",
            title: "Order of Operations and Distributive Law",
            bigIdea: "BODMAS prevents ambiguity in multi-step arithmetic, while distributive laws simplify mental calculation.",
            learnIt: [
              "BODMAS: evaluate brackets inside-out first. Division and multiplication share precedence from left to right.",
              "Distributive property over addition: a(b + c) = ab + ac. Example: 8 × 105 = 8(100 + 5) = 800 + 40 = 840."
            ],
            workedExample: {
              question: "Work out: 36 ÷ (9 - 3) × 2.",
              steps: [
                "Evaluate brackets: 9 - 3 = 6. Expression becomes 36 ÷ 6 × 2.",
                "Divide first left-to-right: 36 ÷ 6 = 6. Then 6 × 2 = 12."
              ],
              answer: "The answer is 12."
            },
            tryThis: {
              question: "Evaluate: 20 + 40 ÷ 8",
              choices: ["25", "7.5", "60", "30"], correct: 0,
              explanation: "Divide first: 40 ÷ 8 = 5. Then 20 + 5 = 25."
            }
          }
        ]
      },
      {
        subtopicId: "p6-gcf-lcm",
        title: "3. Prime Factorization, GCF and LCM",
        modules: [
          {
            moduleId: "p6-venn-gcf-lcm",
            videoUrl: "https://youtu.be/Nx4h4j4jkCc",
            title: "Ladder Method and Venn Diagram GCF/LCM",
            bigIdea: "Representing prime factors inside overlapping circles makes finding GCF and LCM direct and visual.",
            learnIt: [
              "Prime factor ladder: divide repeatedly by prime numbers 2, 3, 5, 7 until reaching quotient 1.",
              "Venn diagram product rule: GCF = product of intersection overlap factors; LCM = product of all union factors."
            ],
            workedExample: {
              question: "Find the GCF and LCM of 18 and 24 using prime factors.",
              steps: [
                "Prime factors: 18 = 2 × 3 × 3; 24 = 2 × 2 × 2 × 3.",
                "Shared intersection factors = {2, 3}. GCF = 2 × 3 = 6.",
                "LCM = GCF (6) × remaining factors (3 from 18, 2×2 from 24) = 6 × 3 × 4 = 72."
              ],
              answer: "GCF = 6, LCM = 72."
            },
            tryThis: {
              question: "What is the Lowest Common Multiple (LCM) of 6 and 8?",
              choices: ["24", "48", "12", "14"], correct: 0,
              explanation: "Multiples of 6: 6, 12, 18, 24... Multiples of 8: 8, 16, 24... Lowest shared is 24."
            }
          }
        ]
      }
    
      ,{
        subtopicId: "premium-premium-practice-multi-step-word-problems",
        title: "Premium Practice: Multi-Step Word Problems",
        modules: [
          {
            moduleId: "choosing-the-right-operation",
            title: "Choosing the Right Operation",
            bigIdea: "A premium learner reads the story, chooses the operation and checks whether the answer makes sense.",
            learnIt: ["Addition combines quantities. Subtraction finds what is left, the difference or how much more.", "Multiplication is useful for equal groups. Division is useful for sharing or finding how many groups.", "For multi-step questions, write one short line of working for each step so you do not mix operations."],
            workedExample: { question: "A school bought 24 boxes of books. Each box had 18 books. It gave out 150 books. How many books remained?", steps: ["Step 1: Find total books: 24 \u00d7 18 = 432.", "Step 2: Subtract books given out: 432 - 150 = 282.", "Step 3: State the remaining books."], answer: "282 books remained." },
            tryThis: { question: "Which operation is best for '6 bags each have 25 mangoes'?", choices: ["Multiplication", "Subtraction", "Division", "Comparison only"], correct: 0, explanation: "Equal groups use multiplication: 6 \u00d7 25." }
          }
        ]
      }],
    quiz: [
      { q: "Work out: 64 ÷ 8 + 12 × 2", choices: ["32", "40", "28", "24"], correct: 0, why: "64 ÷ 8 = 8; 12 × 2 = 24; 8 + 24 = 32." },
      { q: "Find the Greatest Common Factor (GCF) of 16 and 20.", choices: ["4", "80", "2", "8"], correct: 0, why: "Highest number dividing both 16 and 20 without remainder is 4." },
      { q: "What is the prime factorization of 60?", choices: ["2² × 3 × 5", "2 × 30", "4 × 15", "2 × 3² × 5"], correct: 0, why: "60 = 4 × 15 = 2² × 3 × 5." },
      { q: "Evaluate: (15 - 5) × 3 + 10", choices: ["40", "35", "50", "25"], correct: 0, why: "Brackets: 10 × 3 = 30; 30 + 10 = 40." },
      { q: "Divide 3,150 by 15.", choices: ["210", "201", "215", "200"], correct: 0, why: "3150 ÷ 15 = 210." },
      { q: "Which property is shown by: 5 × (4 + 2) = (5 × 4) + (5 × 2)?", choices: ["Distributive property", "Commutative property", "Associative property", "Identity property"], correct: 0, why: "Distributing multiplication across addition inside brackets." },
      { q: "Find the LCM of 10 and 15.", choices: ["30", "150", "5", "60"], correct: 0, why: "Multiples of 10: 10, 20, 30... Multiples of 15: 15, 30... LCM = 30." },
      { q: "Work out: 120 - 40 ÷ 5", choices: ["112", "16", "100", "115"], correct: 0, why: "Divide first: 40 ÷ 5 = 8. Then 120 - 8 = 112." }
    ]
  },
  {
    id: "p6-fractions-decimals",
    themeId: "p6-math-core",
    themeName: "Primary Six Core Mathematics",
    title: "Fractions, Decimals and Percentages",
    estMinutes: 25,
    status: "published",
    reviewStatus: "verified",
    videoUrl: "https://youtu.be/HuitLoh1Q9g",
    note: {
      intro: "Why this matters: Converting between fractions, decimals, and percentages enables learners to solve commercial trade profit problems and direct/indirect proportion trade tasks.",
      learningObjectives: [
        "Perform four operations on proper fractions and mixed numbers.",
        "Identify decimal place values and convert between terminating/recurring decimals and fractions.",
        "Solve ratios, direct proportion, indirect proportion, and percentage calculation problems."
      ],
      whatYouNeedToKnow: [
        "In fraction division, keep the first fraction, change ÷ to ×, and flip the second fraction to its reciprocal.",
        "Percentage means 'out of 100'. To convert any fraction to a percentage, multiply by 100%.",
        "Inverse proportion trade: Total man-days = men × days."
      ],
      worked: {
        problem: "If 4 men can weed a garden in 6 days, how many days will 8 men take working at the same rate?",
        steps: [
          "Recognize indirect proportion (more men take fewer days).",
          "Calculate total man-days required: 4 men × 6 days = 24 man-days.",
          "Divide by new workforce: 24 man-days ÷ 8 men = 3 days."
        ],
        answer: "8 men will take 3 days."
      },
      recap: [
        "Align decimal points vertically before adding or subtracting decimals.",
        "Simplify fraction answers to their lowest terms."
      ]
    },
    subtopics: [
      {
        subtopicId: "p6-fraction-ops",
        title: "1. Operations on Proper and Mixed Fractions",
        modules: [
          {
            moduleId: "p6-mixed-division",
            videoUrl: "https://youtu.be/YZNXTXfemQE",
            title: "Adding, Subtracting, Multiplying and Dividing Fractions",
            bigIdea: "Common denominators align addition and subtraction, while reciprocals unlock fraction division.",
            learnIt: [
              "Addition/Subtraction: convert mixed numbers to improper fractions, find LCM of denominators, add/subtract numerators.",
              "Division: keep the first fraction, turn ÷ to ×, and multiply by the reciprocal of the divisor."
            ],
            workedExample: {
              question: "Evaluate: 1 1/2 ÷ 3/4.",
              steps: [
                "Convert 1 1/2 to improper fraction: 3/2.",
                "Multiply by reciprocal of 3/4: 3/2 × 4/3.",
                "Cancel common factors: 3 cancels 3; 4/2 = 2."
              ],
              answer: "The answer is 2."
            },
            tryThis: {
              question: "Work out: 3/5 + 1/4",
              choices: ["17/20", "4/9", "7/20", "4/20"], correct: 0,
              explanation: "LCM of 5 and 4 is 20. 12/20 + 5/20 = 17/20."
            }
          }
        ]
      },
      {
        subtopicId: "p6-decimal-conversions",
        title: "2. Decimals and Conversions",
        modules: [
          {
            moduleId: "p6-decimals-place-value",
            title: "Decimal Place Values and Terminating vs Recurring Decimals",
            bigIdea: "Digits after the decimal point represent tenths, hundredths, and thousandths.",
            learnIt: [
              "Place values: 0.1 is one-tenth (1/10); 0.01 is one-hundredth (1/100).",
              "Converting decimal to fraction: write digits over power of ten and simplify. 0.35 = 35/100 = 7/20."
            ],
            workedExample: {
              question: "Convert 3/8 into a decimal number.",
              steps: [
                "Long division: 3.0 ÷ 8 = 0.3 remainder 6.",
                "60 ÷ 8 = 7 remainder 4.",
                "40 ÷ 8 = 5 remainder 0."
              ],
              answer: "3/8 = 0.375."
            },
            tryThis: {
              question: "What is 0.45 expressed as a common fraction in lowest terms?",
              choices: ["9/20", "45/100", "3/5", "9/10"], correct: 0,
              explanation: "0.45 = 45/100. Divide top and bottom by 5 to get 9/20."
            }
          }
        ]
      },
      {
        subtopicId: "p6-ratios-proportions",
        title: "3. Ratios, Proportions and Percentages",
        modules: [
          {
            moduleId: "p6-sharing-ratios",
            title: "Sharing in Ratios and Percentage Calculations",
            bigIdea: "Ratios partition quantities into proportional parts, while percentages standardise ratios to base 100.",
            learnIt: [
              "Sharing in ratios: find total ratio shares, divide total quantity by total shares to get 1 part value, then multiply by individual ratios.",
              "Percentage calculation: Value = (Percentage ÷ 100) × Total."
            ],
            workedExample: {
              question: "Share UGX 30,000 between Amos and Jane in the ratio 2:3. How much does Jane get?",
              steps: [
                "Total ratio shares = 2 + 3 = 5 shares.",
                "Value of 1 share = 30,000 ÷ 5 = UGX 6,000.",
                "Jane's share (3 parts) = 3 × 6,000 = UGX 18,000."
              ],
              answer: "Jane receives UGX 18,000."
            },
            tryThis: {
              question: "What is 30% of UGX 40,000?",
              choices: ["UGX 12,000", "UGX 14,000", "UGX 3,000", "UGX 15,000"], correct: 0,
              explanation: "(30/100) × 40,000 = 30 × 400 = UGX 12,000."
            }
          }
        ]
      }
    
      ,{
        subtopicId: "premium-premium-practice-fractions-decimals-and-money",
        title: "Premium Practice: Fractions, Decimals and Money",
        modules: [
          {
            moduleId: "solving-fraction-and-percentage-word-problems",
            title: "Solving Fraction and Percentage Word Problems",
            bigIdea: "Fractions and percentages become clearer when learners identify the whole before calculating.",
            learnIt: ["The 'whole' is the total amount you are finding a fraction or percentage of.", "In word problems, after something is removed or used, the remainder becomes the new amount for the next step.", "Percent means out of 100. For example, 25% = 25/100 = 1/4."],
            workedExample: { question: "Akello had UGX 40,000. She spent 1/4 of it. How much money remained?", steps: ["Step 1: The whole is UGX 40,000.", "Step 2: 1/4 of 40,000 = 10,000.", "Step 3: Money remaining = 40,000 - 10,000 = 30,000."], answer: "UGX 30,000 remained." },
            tryThis: { question: "What is 25% of 80?", choices: ["20", "25", "40", "60"], correct: 0, explanation: "25% = 1/4. One quarter of 80 is 20." }
          }
        ]
      }],
    quiz: [
      { q: "Work out: 2/3 + 1/6", choices: ["5/6", "3/9", "1/2", "1/3"], correct: 0, why: "LCM = 6. 4/6 + 1/6 = 5/6." },
      { q: "What is 25% of 200?", choices: ["50", "25", "100", "75"], correct: 0, why: "25% is one quarter. 1/4 of 200 = 50." },
      { q: "Convert 0.6 to a fraction in lowest terms.", choices: ["3/5", "6/10", "2/3", "1/6"], correct: 0, why: "0.6 = 6/10 = 3/5." },
      { q: "If 3 books cost UGX 9,000, what is the cost of 5 books?", choices: ["UGX 15,000", "UGX 12,000", "UGX 18,000", "UGX 45,000"], correct: 0, why: "1 book = 3,000. 5 books = 5 × 3,000 = 15,000." },
      { q: "Work out: 3.45 + 1.2", choices: ["4.65", "4.57", "3.57", "5.65"], correct: 0, why: "Align vertical decimal points: 3.45 + 1.20 = 4.65." },
      { q: "Express 4/5 as a percentage.", choices: ["80%", "40%", "75%", "50%"], correct: 0, why: "(4/5) × 100% = 4 × 20% = 80%." },
      { q: "Divide: 3/4 ÷ 1/2", choices: ["1 1/2", "3/8", "2/3", "1 1/4"], correct: 0, why: "3/4 × 2/1 = 6/4 = 3/2 = 1 1/2." },
      { q: "If 6 workers take 4 days to build a wall, how many days will 3 workers take at the same rate?", choices: ["8 days", "2 days", "6 days", "12 days"], correct: 0, why: "Indirect proportion: total man-days = 6 × 4 = 24. For 3 workers: 24 ÷ 3 = 8 days." }
    ]
  },
  {
    id: "p6-geometry",
    themeId: "p6-math-core",
    themeName: "Primary Six Core Mathematics",
    title: "Geometry and Angle Properties",
    estMinutes: 25,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "Why this matters: Geometric angle reasoning and compass construction prepare learners for spatial accuracy and 2D area/perimeter measurements.",
      learningObjectives: [
        "Calculate angles on a straight line, vertically opposite angles, and angles around a point.",
        "Construct 90°, 60°, and 30° angles accurately using ruler and compasses.",
        "Calculate perimeter and area of rectangles, triangles, and parallelograms."
      ],
      whatYouNeedToKnow: [
        "Angles on a straight line sum to 180°; angles around a point sum to 360°.",
        "Constructing an equilateral triangle creates 60° angles; bisecting 60° creates 30°.",
        "Area of a triangle = 1/2 × base × height."
      ],
      worked: {
        problem: "Find the area of a triangle whose base is 12 cm and perpendicular height is 7 cm.",
        steps: [
          "State formula: Area = 1/2 × base × height.",
          "Substitute: Area = 1/2 × 12 × 7.",
          "Simplify: 6 × 7 = 42 cm²."
        ],
        answer: "The area is 42 cm²."
      },
      recap: [
        "Perimeter is the total boundary distance around a shape.",
        "Always check square units (cm², m²) for area."
      ]
    },
    subtopics: [
      {
        subtopicId: "p6-angles-straight-line",
        title: "1. Angles on a Straight Line and Intersecting Lines",
        modules: [
          {
            moduleId: "p6-angle-rules",
            imageUrl: "/images/math/angle-types-gallery.png",
            imageCaption: "Supplementary angles summing to 180° and vertically opposite equal angles.",
            title: "Supplementary and Vertically Opposite Angles",
            bigIdea: "Straight lines form 180° angles, and intersecting straight lines form equal vertically opposite pairs.",
            learnIt: [
              "Supplementary angles: adjacent angles on a straight line add up to 180°.",
              "Vertically opposite angles: across intersecting straight lines, opposite angles are equal."
            ],
            workedExample: {
              question: "Two angles on a straight line are 115° and y. Find the value of y.",
              steps: [
                "Sum on straight line = 180°.",
                "y = 180° - 115° = 65°."
              ],
              answer: "y = 65°."
            },
            tryThis: {
              question: "What is the sum of angles around a complete point circle?",
              choices: ["360°", "180°", "90°", "270°"], correct: 0,
              explanation: "A complete revolution around a point measures exactly 360°."
            }
          }
        ]
      },
      {
        subtopicId: "p6-compass-constructions",
        title: "2. Constructing 90°, 60°, and 30° Angles",
        modules: [
          {
            moduleId: "p6-bisecting-angles",
            title: "Constructing and Bisecting Angles Using Compasses",
            bigIdea: "Drawing arcs from fixed centers enables exact geometric angle construction without a protractor.",
            learnIt: [
              "60° construction: draw line AB, center A radius r draw arc cutting line at X. Center X same radius draw arc intersecting first arc at C. Angle CAB = 60°.",
              "Bisecting an angle: draw arcs from angle arms cutting at points P and Q. From P and Q draw intersecting arcs at R. Line connecting vertex to R bisects the angle in half."
            ],
            workedExample: {
              question: "Explain how to construct a 30° angle using ruler and compasses.",
              steps: [
                "Construct a 60° angle first by drawing intersecting arcs of equal radius.",
                "Bisect the 60° angle by drawing intersecting arcs from its two arm intersection points."
              ],
              answer: "Construct 60° and bisect it to obtain 30°."
            },
            tryThis: {
              question: "Which angle is obtained by bisecting a 90° perpendicular angle?",
              choices: ["45°", "30°", "60°", "15°"], correct: 0,
              explanation: "90° ÷ 2 = 45°."
            }
          }
        ]
      },
      {
        subtopicId: "p6-perimeter-area",
        title: "3. Perimeter and Area of Polygons",
        modules: [
          {
            moduleId: "p6-2d-area-perimeter",
            title: "Perimeter and Area of Rectangles, Triangles and Parallelograms",
            bigIdea: "Perimeter sums outer boundary lengths, while area measures 2D enclosed surface space.",
            learnIt: [
              "Rectangle: Perimeter = 2(l + w); Area = l × w.",
              "Parallelogram: Area = base × perpendicular height."
            ],
            workedExample: {
              question: "Calculate the perimeter of a rectangle measuring 15 m long and 8 m wide.",
              steps: [
                "Perimeter = 2(l + w) = 2(15 + 8).",
                "2 × 23 = 46 m."
              ],
              answer: "The perimeter is 46 m."
            },
            tryThis: {
              question: "What is the area of a square whose side is 9 cm?",
              choices: ["81 cm²", "36 cm²", "18 cm²", "72 cm²"], correct: 0,
              explanation: "Area = side × side = 9 × 9 = 81 cm²."
            }
          }
        ]
      }
    
      ,{
        subtopicId: "premium-premium-practice-draw-measure-and-explain",
        title: "Premium Practice: Draw, Measure and Explain",
        modules: [
          {
            moduleId: "geometry-with-working",
            title: "Geometry with Working",
            bigIdea: "Geometry answers improve when learners draw a simple sketch and label the known values.",
            learnIt: ["For angle questions, mark the straight line, right angle or intersecting lines before calculating.", "Angles on a straight line add up to 180\u00b0. Angles around a point add up to 360\u00b0.", "For perimeter and area, write the formula first, substitute values, then include units."],
            workedExample: { question: "Two angles on a straight line are x and 65\u00b0. Find x.", steps: ["Step 1: Angles on a straight line add up to 180\u00b0.", "Step 2: x + 65\u00b0 = 180\u00b0.", "Step 3: x = 180\u00b0 - 65\u00b0 = 115\u00b0."], answer: "x = 115\u00b0." },
            tryThis: { question: "Angles around a point add up to:", choices: ["360\u00b0", "180\u00b0", "90\u00b0", "45\u00b0"], correct: 0, explanation: "A complete turn around a point is 360\u00b0." }
          }
        ]
      }],
    quiz: [
      { q: "What is the sum of angles on a straight line?", choices: ["180°", "360°", "90°", "270°"], correct: 0, why: "A straight angle is 180°." },
      { q: "Find the area of a triangle with base 10 cm and height 6 cm.", choices: ["30 cm²", "60 cm²", "16 cm²", "15 cm²"], correct: 0, why: "1/2 × 10 × 6 = 30 cm²." },
      { q: "Find the perimeter of a square whose side is 8 cm.", choices: ["32 cm", "64 cm", "16 cm", "24 cm"], correct: 0, why: "4 × 8 = 32 cm." },
      { q: "Two angles on a straight line are 70° and x. Find x.", choices: ["110°", "20°", "90°", "290°"], correct: 0, why: "180° - 70° = 110°." },
      { q: "Which angle is formed by constructing an equilateral triangle?", choices: ["60°", "90°", "45°", "30°"], correct: 0, why: "Equilateral interior angles are exactly 60°." },
      { q: "Find the area of a rectangle 12 cm long and 5 cm wide.", choices: ["60 cm²", "34 cm²", "17 cm²", "120 cm²"], correct: 0, why: "12 × 5 = 60 cm²." },
      { q: "Bisecting a 60° angle creates two angles of what size?", choices: ["30°", "45°", "15°", "20°"], correct: 0, why: "60° ÷ 2 = 30°." },
      { q: "Vertically opposite angles formed by two intersecting lines are always:", choices: ["Equal", "Supplementary", "Complementary", "Obtuse"], correct: 0, why: "Intersecting lines form equal vertically opposite angles." }
    ]
  },
  {
    id: "p6-data-algebra",
    themeId: "p6-math-core",
    themeName: "Primary Six Core Mathematics",
    title: "Data Handling and Simple Algebra",
    estMinutes: 25,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "Why this matters: Data handling summarizes statistical charts and averages, while simple algebra introduces symbolic equation solving essential for advanced mathematics.",
      learningObjectives: [
        "Interpret bar graphs, line graphs, and simple pie charts.",
        "Calculate mean, mode, median, and range from numerical data sets.",
        "Form and solve simple one-step linear algebraic equations."
      ],
      whatYouNeedToKnow: [
        "Mean (Average) = Sum of all values ÷ Total number of items.",
        "Median is the middle number when arranged in ascending or descending order.",
        "In algebra, perform identical inverse operations on both sides to solve for x."
      ],
      worked: {
        problem: "Find the mean of the numbers: 12, 15, 18, 20, 15.",
        steps: [
          "Calculate sum of values: 12 + 15 + 18 + 20 + 15 = 80.",
          "Count number of items: 5.",
          "Divide sum by count: 80 ÷ 5 = 16."
        ],
        answer: "The mean is 16."
      },
      recap: [
        "Mode is the most frequently occurring number in a data set.",
        "Check equation solutions by substituting x back into the original statement."
      ]
    },
    subtopics: [
      {
        subtopicId: "p6-graphs-charts",
        title: "1. Bar Graphs, Line Graphs and Simple Pie Charts",
        modules: [
          {
            moduleId: "p6-interpreting-graphs",
            title: "Reading Heights, Trends and Sector Fractions",
            bigIdea: "Graphs translate raw numerical data into visual bars, line trends, or circular pie sector shares.",
            learnIt: [
              "Bar graphs: horizontal or vertical bars where length represents numerical quantity.",
              "Pie charts: 360° circle divided into fractional sectors. Sector angle = (Category value ÷ Total) × 360°."
            ],
            workedExample: {
              question: "If a pie chart sector represents 90° out of 360°, what fraction of the total data does it represent?",
              steps: [
                "Write angle fraction: 90/360.",
                "Simplify: divide top and bottom by 90 to get 1/4."
              ],
              answer: "It represents 1/4 of the total."
            },
            tryThis: {
              question: "On a bar graph where 1 vertical grid unit represents 5 pupils, how many pupils are represented by a bar 6 units high?",
              choices: ["30 pupils", "11 pupils", "25 pupils", "35 pupils"], correct: 0,
              explanation: "6 × 5 = 30 pupils."
            }
          }
        ]
      },
      {
        subtopicId: "p6-averages",
        title: "2. Mean, Mode, Median and Range",
        modules: [
          {
            moduleId: "p6-calculating-averages",
            title: "Statistical Measures of Central Tendency and Spread",
            bigIdea: "Central tendency summarizes typical values, while range measures spread between highest and lowest.",
            learnIt: [
              "Mean = Sum ÷ Count. Mode = Most frequent item. Range = Highest - Lowest.",
              "Median = Middle item after arranging in order. If two middle items exist, average them."
            ],
            workedExample: {
              question: "Find the median of: 8, 3, 11, 5, 14.",
              steps: [
                "Arrange in ascending order: 3, 5, 8, 11, 14.",
                "Identify middle position (3rd item): 8."
              ],
              answer: "The median is 8."
            },
            tryThis: {
              question: "What is the mode of the numbers: 4, 7, 4, 9, 5, 4, 7?",
              choices: ["4", "7", "5", "9"], correct: 0,
              explanation: "4 appears three times, which is more frequent than any other number."
            }
          }
        ]
      },
      {
        subtopicId: "p6-simple-equations",
        title: "3. Forming and Solving Simple Linear Equations",
        modules: [
          {
            moduleId: "p6-one-step-equations",
            title: "Isolating Variables in One-Step Equations",
            bigIdea: "An algebraic equation is a balanced scale; applying inverse operations to both sides isolates the unknown.",
            learnIt: [
              "Inverse operations: addition cancels subtraction; multiplication cancels division.",
              "Example: If x + 7 = 19, subtract 7 from both sides to get x = 12."
            ],
            workedExample: {
              question: "Solve for y: 4y = 36.",
              steps: [
                "Recognize 4y means 4 multiplied by y.",
                "Divide both sides by 4: y = 36 ÷ 4 = 9."
              ],
              answer: "y = 9."
            },
            tryThis: {
              question: "Solve for k: k - 5 = 14",
              choices: ["19", "9", "70", "10"], correct: 0,
              explanation: "Add 5 to both sides: k = 14 + 5 = 19."
            }
          }
        ]
      }
    
      ,{
        subtopicId: "premium-premium-practice-data-stories-and-simple-equations",
        title: "Premium Practice: Data Stories and Simple Equations",
        modules: [
          {
            moduleId: "reading-data-and-forming-equations",
            title: "Reading Data and Forming Equations",
            bigIdea: "Data and algebra questions ask learners to turn information into numbers, then reason step by step.",
            learnIt: ["Read graph titles, labels and scales before answering. The scale may jump by 2, 5, 10 or more.", "Mean is total divided by number of items; range is highest minus lowest.", "For simple equations, use inverse operations to leave the unknown alone."],
            workedExample: { question: "The marks of four learners are 6, 8, 10 and 12. Find the mean mark.", steps: ["Step 1: Add the marks: 6 + 8 + 10 + 12 = 36.", "Step 2: There are 4 learners.", "Step 3: Mean = 36 \u00f7 4 = 9."], answer: "The mean mark is 9." },
            tryThis: { question: "Solve: x + 7 = 19", choices: ["12", "26", "7", "19"], correct: 0, explanation: "Subtract 7 from both sides: x = 12." }
          }
        ]
      }],
    quiz: [
      { q: "Find the mean of: 6, 8, 10, 12, 14.", choices: ["10", "40", "8", "12"], correct: 0, why: "Sum = 50 ÷ 5 = 10." },
      { q: "Find the range of: 25, 14, 38, 19, 11.", choices: ["27", "38", "11", "24"], correct: 0, why: "Highest (38) - Lowest (11) = 27." },
      { q: "Solve for x: x + 8 = 21.", choices: ["13", "29", "14", "8"], correct: 0, why: "21 - 8 = 13." },
      { q: "Solve for m: 3m = 27.", choices: ["9", "30", "81", "6"], correct: 0, why: "27 ÷ 3 = 9." },
      { q: "What is the median of: 12, 7, 15, 9, 3?", choices: ["9", "12", "7", "15"], correct: 0, why: "Ordered: 3, 7, 9, 12, 15. Middle is 9." },
      { q: "In a pie chart, what angle represents half of the total circle?", choices: ["180°", "90°", "360°", "120°"], correct: 0, why: "Half of 360° is 180°." },
      { q: "Solve for p: p/4 = 5.", choices: ["20", "1", "9", "1.25"], correct: 0, why: "Multiply by 4: p = 5 × 4 = 20." },
      { q: "Find the mode of: 2, 5, 8, 5, 3, 5, 9.", choices: ["5", "8", "2", "9"], correct: 0, why: "5 appears three times." }
    ]
  }
];

export const P6_MATH_TOPICS: Topic[] = balanceTopicAnswers(addUpperPrimaryMathV4(P6_MATH_TOPICS_DATA, "P6", P6_MATH_TERMS));

export function getP6MathTopic(id: string): Topic | undefined {
  return P6_MATH_TOPICS.find((topic) => topic.id === id);
}
