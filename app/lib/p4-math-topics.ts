import type { Topic } from "@/lib/topics";

// P4 Mathematics live beta content layer.
// Source map: content/curriculum/p4-math.json
// Rule: NCDC first, build second. This file follows the verified NCDC Primary Four Mathematics Syllabus, 2010.
// Status: live beta until checked by a human reviewer against classroom practice and NCDC source text.

export const P4_MATH_TOPICS: Topic[] = [
  {
    "id": "p4-set-concepts",
    "themeId": "p4-theme-sets",
    "themeName": "Sets",
    "title": "Set Concepts",
    "estMinutes": 28,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P4 Mathematics beta: built from the verified NCDC Primary Four Mathematics Syllabus, 2010; human teacher review still required before premium-final release. Set Concepts gives P4 learners the foundation they need for confident upper-primary Mathematics.",
      "learningObjectives": [
        "Identify, name and form sets from real objects.",
        "Count members in a set.",
        "Recognise equivalent sets, empty sets and common members."
      ],
      "whatYouNeedToKnow": [
        "A set is a clear collection of objects or numbers.",
        "Members are the objects inside a set.",
        "Equivalent sets have the same number of members.",
        "An empty set has no members.",
        "Common members belong to more than one set."
      ],
      "worked": {
        "problem": "A = {mango, orange, banana} and B = {orange, guava}. Name the common member.",
        "steps": [
          "Look at set A: mango, orange, banana.",
          "Look at set B: orange, guava.",
          "The item found in both sets is orange."
        ],
        "answer": "The common member is orange."
      },
      "commonMistakes": [
        "Calling a set unclear when the rule is not well-defined.",
        "Confusing equal sets with equivalent sets.",
        "Writing {0} when the answer should be an empty set."
      ],
      "recap": [
        "Use curly brackets for sets.",
        "Count members carefully.",
        "Common means found in both sets."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-identifying-naming-sets",
        "title": "1. Identifying, naming and forming sets",
        "modules": [
          {
            "moduleId": "p4-set-basics",
            "title": "Sets from real things",
            "bigIdea": "A set must have a clear rule so every member can be checked.",
            "learnIt": [
              "A set of vowels is clear because we know the members: a, e, i, o, u.",
              "A set can be named using a capital letter, for example A = {2, 4, 6}.",
              "The number of members in a set is found by counting each member once."
            ],
            "workedExample": {
              "question": "Let C = {cow, goat, sheep}. Find n(C).",
              "steps": [
                "C has cow, goat and sheep.",
                "Count them: 1, 2, 3."
              ],
              "answer": "n(C) = 3"
            },
            "tryThis": {
              "question": "Which is a clear set?",
              "choices": [
                "Set of even numbers less than 10",
                "Set of nice pupils",
                "Set of good colours",
                "Set of big things"
              ],
              "correct": 0,
              "explanation": "Even numbers less than 10 is clear: 2, 4, 6, 8."
            },
            "imageUrl": "/images/math/p4-sets-common-members.svg",
            "imageCaption": "Sets and common members reminder."
          }
        ]
      },
      {
        "subtopicId": "p4-equivalent-empty-common",
        "title": "2. Equivalent, empty and common members",
        "modules": [
          {
            "moduleId": "p4-set-comparison",
            "title": "Comparing sets",
            "bigIdea": "Comparing sets means checking their members or their number of members.",
            "learnIt": [
              "Equal sets have exactly the same members.",
              "Equivalent sets have the same number of members, even if members differ.",
              "An empty set has no members and may be written as { } or ∅."
            ],
            "workedExample": {
              "question": "Are {1, 2, 3} and {a, b, c} equal or equivalent?",
              "steps": [
                "The first set has 3 members.",
                "The second set has 3 members.",
                "The members are not the same."
              ],
              "answer": "They are equivalent, not equal."
            },
            "tryThis": {
              "question": "Which set is empty?",
              "choices": [
                "Vowels in English",
                "Months with 40 days",
                "Odd numbers less than 5",
                "Fingers on one hand"
              ],
              "correct": 1,
              "explanation": "There is no month with 40 days."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "A set is:",
        "choices": [
          "a random list",
          "a story",
          "a clear collection",
          "a ruler"
        ],
        "correct": 2,
        "why": "A set must be clearly defined."
      },
      {
        "q": "n({a,b,c}) is:",
        "choices": [
          "2",
          "1",
          "0",
          "3"
        ],
        "correct": 3,
        "why": "There are 3 members."
      },
      {
        "q": "Which sets are equivalent?",
        "choices": [
          "{1,2} and {a,b}",
          "{1} and {1,2}",
          "{ } and {0}",
          "{a,b,c} and {a}"
        ],
        "correct": 0,
        "why": "Both have two members."
      },
      {
        "q": "An empty set has:",
        "choices": [
          "one member",
          "no members",
          "all members",
          "two members"
        ],
        "correct": 1,
        "why": "Empty means none."
      },
      {
        "q": "Common members of {2,4,6} and {4,6,8} are:",
        "choices": [
          "{2,8}",
          "{2,4,6,8}",
          "{4,6}",
          "{ }"
        ],
        "correct": 2,
        "why": "4 and 6 are in both sets."
      },
      {
        "q": "Equal sets have:",
        "choices": [
          "only the same number",
          "no members",
          "different members",
          "the same members"
        ],
        "correct": 3,
        "why": "Equal sets contain exactly the same members."
      }
    ]
  },
  {
    "id": "p4-whole-numbers",
    "themeId": "p4-theme-numeracy",
    "themeName": "Numeracy",
    "title": "Whole Numbers up to 100,000",
    "estMinutes": 32,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P4 Mathematics beta: built from the verified NCDC Primary Four Mathematics Syllabus, 2010; human teacher review still required before premium-final release. Whole Numbers up to 100,000 gives P4 learners the foundation they need for confident upper-primary Mathematics.",
      "learningObjectives": [
        "Read and count whole numbers up to 99,999.",
        "Find place value and value in 5-digit numbers.",
        "Write numbers in expanded and short form.",
        "Round numbers to the nearest 10, 100 and 1,000.",
        "Read and write Roman numerals up to XX."
      ],
      "whatYouNeedToKnow": [
        "A 5-digit number has ten-thousands, thousands, hundreds, tens and ones.",
        "Place value is the position of a digit; value is how much it is worth.",
        "Expanded form breaks a number into digit values.",
        "To round, check the digit to the right of the place you are rounding to.",
        "Roman numerals up to 20 use I, V and X."
      ],
      "worked": {
        "problem": "Find the value of 7 in 47,382.",
        "steps": [
          "Write place values: 4 is ten-thousands, 7 is thousands.",
          "7 in the thousands place means 7 × 1,000."
        ],
        "answer": "The value is 7,000."
      },
      "commonMistakes": [
        "Reading 40,306 as four thousand instead of forty thousand.",
        "Confusing place value with value.",
        "Rounding from the wrong digit.",
        "Writing Roman numerals with too many repeated symbols."
      ],
      "recap": [
        "Use a place-value table.",
        "Read large numbers in groups.",
        "When rounding, look next door."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-reading-place-value",
        "title": "1. Reading and place value",
        "modules": [
          {
            "moduleId": "p4-five-digit-numbers",
            "title": "Five-digit numbers",
            "bigIdea": "Place value helps us read, write and compare large numbers.",
            "learnIt": [
              "The number 38,415 is read as thirty-eight thousand four hundred fifteen.",
              "In 38,415, 3 is worth 30,000 and 8 is worth 8,000.",
              "Expanded form is 30,000 + 8,000 + 400 + 10 + 5."
            ],
            "workedExample": {
              "question": "Write 56,204 in expanded form.",
              "steps": [
                "5 is worth 50,000.",
                "6 is worth 6,000.",
                "2 is worth 200 and 4 is worth 4."
              ],
              "answer": "50,000 + 6,000 + 200 + 4"
            },
            "tryThis": {
              "question": "What is the value of 9 in 29,716?",
              "choices": [
                "9,000",
                "90,000",
                "900",
                "90"
              ],
              "correct": 0,
              "explanation": "The 9 is in the thousands place."
            },
            "imageUrl": "/images/math/p4-place-value-chart.svg",
            "imageCaption": "Place-value chart for reading and expanding 5-digit numbers."
          }
        ]
      },
      {
        "subtopicId": "p4-rounding-roman",
        "title": "2. Rounding and Roman numbers",
        "modules": [
          {
            "moduleId": "p4-rounding-roman-numbers",
            "title": "Rounding and Roman numerals",
            "bigIdea": "Rounding estimates numbers; Roman numerals write numbers using letters.",
            "learnIt": [
              "To round 4,786 to the nearest 100, check the tens digit 8, so round up to 4,800.",
              "I=1, V=5, X=10.",
              "XIX means 19 and XX means 20."
            ],
            "workedExample": {
              "question": "Round 34,672 to the nearest 1,000.",
              "steps": [
                "Find the thousands digit: 4.",
                "Check the hundreds digit: 6.",
                "Since 6 is 5 or more, round up."
              ],
              "answer": "35,000"
            },
            "tryThis": {
              "question": "What is 14 in Roman numerals?",
              "choices": [
                "XVI",
                "XIV",
                "IIIIX",
                "VX"
              ],
              "correct": 1,
              "explanation": "10 + 4 is XIV."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "What is the value of 5 in 35,920?",
        "choices": [
          "50,000",
          "500",
          "5,000",
          "50"
        ],
        "correct": 2,
        "why": "5 is in the thousands place."
      },
      {
        "q": "Write 42,006 in words.",
        "choices": [
          "four thousand two hundred six",
          "forty-two thousand sixty",
          "four hundred twenty-six",
          "forty-two thousand six"
        ],
        "correct": 3,
        "why": "42,006 is forty-two thousand six."
      },
      {
        "q": "Round 7,846 to the nearest 10.",
        "choices": [
          "7,850",
          "7,840",
          "7,800",
          "8,000"
        ],
        "correct": 0,
        "why": "The ones digit is 6, so round up."
      },
      {
        "q": "Round 18,420 to the nearest 1,000.",
        "choices": [
          "19,000",
          "18,000",
          "18,400",
          "20,000"
        ],
        "correct": 1,
        "why": "The hundreds digit is 4, so round down."
      },
      {
        "q": "XX means:",
        "choices": [
          "10",
          "15",
          "20",
          "19"
        ],
        "correct": 2,
        "why": "X is 10, so XX is 20."
      },
      {
        "q": "Expanded form of 9,305 is:",
        "choices": [
          "9,000 + 30 + 5",
          "900 + 300 + 5",
          "9,305 + 0",
          "9,000 + 300 + 5"
        ],
        "correct": 3,
        "why": "There are 9 thousands, 3 hundreds and 5 ones."
      }
    ]
  },
  {
    "id": "p4-operations-whole-numbers",
    "themeId": "p4-theme-numeracy",
    "themeName": "Numeracy",
    "title": "Operations on Whole Numbers",
    "estMinutes": 34,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P4 Mathematics beta: built from the verified NCDC Primary Four Mathematics Syllabus, 2010; human teacher review still required before premium-final release. Operations on Whole Numbers gives P4 learners the foundation they need for confident upper-primary Mathematics.",
      "learningObjectives": [
        "Add and subtract whole numbers up to 5 digits.",
        "Multiply up to 3-digit numbers by 0, 10, 100 and one-digit numbers.",
        "Divide 4-digit numbers by 1–10 and 100 without remainders.",
        "Form and solve simple word problems."
      ],
      "whatYouNeedToKnow": [
        "Addition combines quantities.",
        "Subtraction finds what remains or the difference.",
        "Multiplication is repeated addition.",
        "Division shares or groups equally.",
        "In word problems, decide which operation is needed before calculating."
      ],
      "worked": {
        "problem": "A school collected 23,475 bottle tops on Monday and 18,326 on Tuesday. How many were collected altogether?",
        "steps": [
          "Altogether means add.",
          "23,475 + 18,326 = 41,801."
        ],
        "answer": "41,801 bottle tops."
      },
      "commonMistakes": [
        "Adding when the question asks how many remained.",
        "Forgetting regrouping in subtraction.",
        "Multiplying by 10 but not adding the zero/place shift.",
        "Dividing without checking by multiplication."
      ],
      "recap": [
        "Read the word problem carefully.",
        "Line up place values.",
        "Check division by multiplying the answer by the divisor."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-add-subtract-word-problems",
        "title": "1. Addition and subtraction word problems",
        "modules": [
          {
            "moduleId": "p4-add-subtract",
            "title": "Adding and subtracting large numbers",
            "bigIdea": "Line up place values before adding or subtracting.",
            "learnIt": [
              "Add numbers in columns starting from ones.",
              "Subtract numbers in columns, regrouping when the top digit is smaller.",
              "Words like altogether, total and sum often mean addition; left, remained and difference often mean subtraction."
            ],
            "workedExample": {
              "question": "Work out 50,000 - 27,865.",
              "steps": [
                "Regroup across the zeros carefully.",
                "Subtract ones, tens, hundreds, thousands and ten-thousands."
              ],
              "answer": "22,135"
            },
            "tryThis": {
              "question": "A shop had 8,000 books and sold 3,475. How many remained?",
              "choices": [
                "4,525",
                "11,475",
                "5,525",
                "3,475"
              ],
              "correct": 0,
              "explanation": "8,000 - 3,475 = 4,525."
            },
            "imageUrl": "/images/math/p4-four-operations.svg",
            "imageCaption": "Choosing and checking the four operations."
          }
        ]
      },
      {
        "subtopicId": "p4-multiply-divide",
        "title": "2. Multiplication and division",
        "modules": [
          {
            "moduleId": "p4-multiply-divide-whole",
            "title": "Multiplying and dividing",
            "bigIdea": "Multiplication and division are opposite operations.",
            "learnIt": [
              "Multiplying by 10 shifts digits one place left; multiplying by 100 shifts two places left.",
              "For 3-digit by one-digit multiplication, multiply each place and regroup if needed.",
              "For division, share equally and check using multiplication."
            ],
            "workedExample": {
              "question": "Find 348 × 7.",
              "steps": [
                "7 × 8 = 56, write 6 carry 5.",
                "7 × 4 = 28, plus 5 = 33, write 3 carry 3.",
                "7 × 3 = 21, plus 3 = 24."
              ],
              "answer": "2,436"
            },
            "tryThis": {
              "question": "Find 4,800 ÷ 100.",
              "choices": [
                "480",
                "48",
                "4,700",
                "4"
              ],
              "correct": 1,
              "explanation": "Dividing by 100 moves two places: 4,800 ÷ 100 = 48."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Find 24,316 + 12,405",
        "choices": [
          "35,721",
          "12,721",
          "36,721",
          "37,721"
        ],
        "correct": 2,
        "why": "Add in columns."
      },
      {
        "q": "Find 70,000 - 12,500",
        "choices": [
          "58,500",
          "82,500",
          "52,500",
          "57,500"
        ],
        "correct": 3,
        "why": "70,000 - 12,500 = 57,500."
      },
      {
        "q": "126 × 10 =",
        "choices": [
          "1,260",
          "126",
          "12,600",
          "116"
        ],
        "correct": 0,
        "why": "Multiplying by 10 gives 1,260."
      },
      {
        "q": "205 × 0 =",
        "choices": [
          "205",
          "0",
          "1",
          "2,050"
        ],
        "correct": 1,
        "why": "Any number multiplied by 0 is 0."
      },
      {
        "q": "Find 936 ÷ 9",
        "choices": [
          "94",
          "106",
          "104",
          "9"
        ],
        "correct": 2,
        "why": "9 × 104 = 936."
      },
      {
        "q": "A farmer packs 240 eggs equally in 10 trays. Eggs per tray?",
        "choices": [
          "240",
          "2,400",
          "10",
          "24"
        ],
        "correct": 3,
        "why": "240 ÷ 10 = 24."
      }
    ]
  },
  {
    "id": "p4-patterns-sequences",
    "themeId": "p4-theme-numeracy",
    "themeName": "Numeracy",
    "title": "Patterns and Sequences",
    "estMinutes": 26,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P4 Mathematics beta: built from the verified NCDC Primary Four Mathematics Syllabus, 2010; human teacher review still required before premium-final release. Patterns and Sequences gives P4 learners the foundation they need for confident upper-primary Mathematics.",
      "learningObjectives": [
        "Recognise and name common shapes.",
        "Identify even and odd numbers.",
        "Recognise patterns and sequences from examples.",
        "Form patterns and sequences."
      ],
      "whatYouNeedToKnow": [
        "A pattern repeats or follows a rule.",
        "A sequence is an ordered list of numbers or objects.",
        "Even numbers can be shared into two equal groups.",
        "Odd numbers leave one over when shared into two equal groups.",
        "Patterns may use shapes, colours, numbers or operations."
      ],
      "worked": {
        "problem": "Find the next number: 5, 10, 15, 20, __.",
        "steps": [
          "Compare neighbouring numbers.",
          "Each number increases by 5.",
          "20 + 5 = 25."
        ],
        "answer": "25"
      },
      "commonMistakes": [
        "Looking at only the last two terms instead of the whole pattern.",
        "Confusing even and odd numbers.",
        "Continuing a colour pattern but ignoring shape order."
      ],
      "recap": [
        "Find the rule.",
        "Test the rule more than once.",
        "Use the rule to continue the pattern."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-shapes-even-odd",
        "title": "1. Shapes, even and odd numbers",
        "modules": [
          {
            "moduleId": "p4-shapes-even-odd",
            "title": "Recognising shapes and number types",
            "bigIdea": "Patterns often begin with simple shapes and number types.",
            "learnIt": [
              "Common shapes include circles, triangles, squares and rectangles.",
              "Even numbers end in 0, 2, 4, 6 or 8.",
              "Odd numbers end in 1, 3, 5, 7 or 9."
            ],
            "workedExample": {
              "question": "Is 47 even or odd?",
              "steps": [
                "Look at the last digit: 7.",
                "Numbers ending in 7 are odd."
              ],
              "answer": "47 is odd."
            },
            "tryThis": {
              "question": "Which number is even?",
              "choices": [
                "38",
                "41",
                "57",
                "99"
              ],
              "correct": 0,
              "explanation": "38 ends in 8, so it is even."
            },
            "imageUrl": "/images/math/p4-patterns-sequences.svg",
            "imageCaption": "Patterns, shapes and even/odd number reminders."
          }
        ]
      },
      {
        "subtopicId": "p4-forming-sequences",
        "title": "2. Forming and continuing patterns",
        "modules": [
          {
            "moduleId": "p4-pattern-rule",
            "title": "Finding the rule",
            "bigIdea": "A rule tells what happens from one term to the next.",
            "learnIt": [
              "Number patterns may add, subtract, multiply or divide.",
              "Shape patterns may repeat, such as circle, square, circle, square.",
              "Write the rule before giving the next term."
            ],
            "workedExample": {
              "question": "Find the missing number: 2, 4, 8, 16, __.",
              "steps": [
                "2 × 2 = 4.",
                "4 × 2 = 8.",
                "8 × 2 = 16, so 16 × 2 = 32."
              ],
              "answer": "32"
            },
            "tryThis": {
              "question": "What comes next: triangle, circle, triangle, circle, __?",
              "choices": [
                "circle",
                "triangle",
                "square",
                "rectangle"
              ],
              "correct": 1,
              "explanation": "The shapes alternate triangle and circle."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Which number is odd?",
        "choices": [
          "24",
          "36",
          "25",
          "80"
        ],
        "correct": 2,
        "why": "25 ends in 5."
      },
      {
        "q": "What comes next: 4, 8, 12, 16, __?",
        "choices": [
          "18",
          "24",
          "12",
          "20"
        ],
        "correct": 3,
        "why": "Add 4 each time."
      },
      {
        "q": "What is the rule: 30, 25, 20, 15?",
        "choices": [
          "subtract 5",
          "add 5",
          "multiply by 5",
          "subtract 10"
        ],
        "correct": 0,
        "why": "Each term is 5 less."
      },
      {
        "q": "Which is a common shape?",
        "choices": [
          "temperature",
          "triangle",
          "profit",
          "capacity"
        ],
        "correct": 1,
        "why": "Triangle is a shape."
      },
      {
        "q": "Even numbers can be shared into:",
        "choices": [
          "three unequal groups",
          "no groups",
          "two equal groups",
          "one group only"
        ],
        "correct": 2,
        "why": "Even means divisible by 2."
      },
      {
        "q": "Next shape: square, square, circle, square, square, circle, __",
        "choices": [
          "circle",
          "triangle",
          "rectangle",
          "square"
        ],
        "correct": 3,
        "why": "The pattern repeats square, square, circle."
      }
    ]
  },
  {
    "id": "p4-fractions",
    "themeId": "p4-theme-numeracy",
    "themeName": "Numeracy",
    "title": "Fractions",
    "estMinutes": 32,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P4 Mathematics beta: built from the verified NCDC Primary Four Mathematics Syllabus, 2010; human teacher review still required before premium-final release. Fractions gives P4 learners the foundation they need for confident upper-primary Mathematics.",
      "learningObjectives": [
        "Identify equivalent fractions less than 1.",
        "Name proper fractions, improper fractions and mixed numbers.",
        "Rename improper fractions as mixed numbers and vice versa.",
        "Compare fractions with the same denominator.",
        "Find simple fractions of a group and add/subtract same-denominator fractions."
      ],
      "whatYouNeedToKnow": [
        "A fraction shows part of a whole or part of a group.",
        "A proper fraction is less than 1.",
        "An improper fraction has numerator equal to or greater than denominator.",
        "A mixed number has a whole number and a fraction.",
        "Fractions with the same denominator are easy to compare: compare the numerators."
      ],
      "worked": {
        "problem": "Add 3/8 + 2/8.",
        "steps": [
          "The denominators are the same: eighths.",
          "Add the numerators: 3 + 2 = 5.",
          "Keep the denominator 8."
        ],
        "answer": "5/8"
      },
      "commonMistakes": [
        "Adding denominators when they are the same.",
        "Calling every fraction with a large numerator improper without checking denominator.",
        "Comparing same-denominator fractions by denominator instead of numerator."
      ],
      "recap": [
        "Denominator names the parts.",
        "Numerator counts the selected parts.",
        "For same denominators, add/subtract numerators only."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-fraction-types",
        "title": "1. Fraction types and equivalent fractions",
        "modules": [
          {
            "moduleId": "p4-proper-improper-mixed",
            "title": "Proper, improper, mixed and equivalent fractions",
            "bigIdea": "Fractions can name parts in different but equal ways.",
            "learnIt": [
              "1/2 and 2/4 are equivalent because they show the same amount.",
              "3/5 is proper because 3 is less than 5.",
              "7/4 is improper because 7 is greater than 4. It can be renamed as 1 3/4."
            ],
            "workedExample": {
              "question": "Rename 9/4 as a mixed number.",
              "steps": [
                "4 goes into 9 two times, making 8.",
                "There is 1 left over.",
                "Keep denominator 4."
              ],
              "answer": "2 1/4"
            },
            "tryThis": {
              "question": "Which fraction is improper?",
              "choices": [
                "5/3",
                "2/5",
                "1/4",
                "3/8"
              ],
              "correct": 0,
              "explanation": "5 is greater than 3."
            },
            "imageUrl": "/images/math/fraction-strips.svg",
            "imageCaption": "Fraction strips showing equivalent and same-denominator parts."
          }
        ]
      },
      {
        "subtopicId": "p4-fraction-calculations",
        "title": "2. Comparing and calculating fractions",
        "modules": [
          {
            "moduleId": "p4-compare-add-subtract-fractions",
            "title": "Using same denominators",
            "bigIdea": "When denominators are the same, the denominator names the kind of parts.",
            "learnIt": [
              "To compare 3/7 and 5/7, compare 3 and 5.",
              "To add 2/9 + 4/9, add 2 + 4 and keep 9.",
              "To find 1/4 of 20, divide 20 by 4."
            ],
            "workedExample": {
              "question": "Find 1/5 of 30 mangoes.",
              "steps": [
                "A fifth means divide into 5 equal groups.",
                "30 ÷ 5 = 6."
              ],
              "answer": "6 mangoes"
            },
            "tryThis": {
              "question": "Which is greater?",
              "choices": [
                "3/8",
                "5/8",
                "1/8",
                "They are equal"
              ],
              "correct": 1,
              "explanation": "Same denominator, compare numerators: 5 is greatest."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Which is equivalent to 1/2?",
        "choices": [
          "1/3",
          "3/5",
          "2/4",
          "4/5"
        ],
        "correct": 2,
        "why": "2/4 is the same as 1/2."
      },
      {
        "q": "Which fraction is proper?",
        "choices": [
          "8/5",
          "6/6",
          "9/4",
          "3/7"
        ],
        "correct": 3,
        "why": "3 is less than 7."
      },
      {
        "q": "7/3 as a mixed number is:",
        "choices": [
          "2 1/3",
          "1 2/3",
          "3 1/2",
          "7 1/3"
        ],
        "correct": 0,
        "why": "3 goes into 7 twice with 1 left."
      },
      {
        "q": "Add 2/5 + 1/5",
        "choices": [
          "3/10",
          "3/5",
          "2/10",
          "1/5"
        ],
        "correct": 1,
        "why": "Add numerators only."
      },
      {
        "q": "Subtract 5/6 - 2/6",
        "choices": [
          "3/0",
          "7/6",
          "3/6",
          "2/6"
        ],
        "correct": 2,
        "why": "5 - 2 = 3, denominator remains 6."
      },
      {
        "q": "Find 1/3 of 18",
        "choices": [
          "3",
          "9",
          "18",
          "6"
        ],
        "correct": 3,
        "why": "18 ÷ 3 = 6."
      }
    ]
  },
  {
    "id": "p4-two-dimensional-geometry",
    "themeId": "p4-theme-geometry",
    "themeName": "Geometry",
    "title": "2-Dimensional Geometry",
    "estMinutes": 34,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P4 Mathematics beta: built from the verified NCDC Primary Four Mathematics Syllabus, 2010; human teacher review still required before premium-final release. 2-Dimensional Geometry gives P4 learners the foundation they need for confident upper-primary Mathematics.",
      "learningObjectives": [
        "Identify and name 2-dimensional figures.",
        "Use rulers, set squares and compasses to construct simple figures.",
        "Recognise right angles in real-life situations.",
        "Build polygon figures.",
        "Find perimeter and area of simple rectangles and squares."
      ],
      "whatYouNeedToKnow": [
        "2-D figures are flat shapes.",
        "A right angle is a square corner of 90 degrees.",
        "A polygon is a closed figure made of straight sides.",
        "Perimeter is distance around a shape.",
        "Area is the space covered by a shape."
      ],
      "worked": {
        "problem": "Find the perimeter of a rectangle 8 cm long and 5 cm wide.",
        "steps": [
          "Perimeter = 8 + 5 + 8 + 5.",
          "Add: 8 + 5 + 8 + 5 = 26."
        ],
        "answer": "26 cm"
      },
      "commonMistakes": [
        "Using area formula when the question asks perimeter.",
        "Forgetting units.",
        "Calling a shape a polygon when it is open or curved.",
        "Drawing without a ruler when construction needs accuracy."
      ],
      "recap": [
        "Flat shapes are 2-D.",
        "Right angles are square corners.",
        "Perimeter goes around; area covers inside."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-2d-figures-right-angles",
        "title": "1. 2-D figures and right angles",
        "modules": [
          {
            "moduleId": "p4-flat-shapes",
            "title": "Flat figures and right angles",
            "bigIdea": "A good geometry answer uses correct shape names and accurate drawing.",
            "learnIt": [
              "Triangles have 3 sides; quadrilaterals have 4 sides.",
              "Squares and rectangles have right angles.",
              "Use a ruler for straight lines and a set square to check right angles."
            ],
            "workedExample": {
              "question": "Name a 2-D figure with 3 sides.",
              "steps": [
                "A triangle has 3 straight sides.",
                "It is flat, so it is 2-dimensional."
              ],
              "answer": "Triangle"
            },
            "tryThis": {
              "question": "Which shape usually has four equal sides and four right angles?",
              "choices": [
                "square",
                "triangle",
                "circle",
                "cone"
              ],
              "correct": 0,
              "explanation": "A square has 4 equal sides and 4 right angles."
            },
            "imageUrl": "/images/math/2d-geometry-perimeter-area.svg",
            "imageCaption": "2-D shapes with right angles, perimeter and area reminders."
          }
        ]
      },
      {
        "subtopicId": "p4-perimeter-area-polygons",
        "title": "2. Polygons, perimeter and area",
        "modules": [
          {
            "moduleId": "p4-perimeter-area",
            "title": "Measuring around and inside",
            "bigIdea": "Perimeter and area answer different questions.",
            "learnIt": [
              "Perimeter is found by adding all sides.",
              "Area of a rectangle is length × width.",
              "Build polygon models using sticks, straws or wires to see sides and corners."
            ],
            "workedExample": {
              "question": "Find the area of a rectangle 6 cm by 4 cm.",
              "steps": [
                "Area = length × width.",
                "6 × 4 = 24."
              ],
              "answer": "24 square cm"
            },
            "tryThis": {
              "question": "Perimeter means:",
              "choices": [
                "space inside a shape",
                "distance around a shape",
                "number of colours",
                "a curved line"
              ],
              "correct": 1,
              "explanation": "Perimeter is the total distance around."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "A 2-D figure is:",
        "choices": [
          "solid",
          "always round",
          "flat",
          "always heavy"
        ],
        "correct": 2,
        "why": "2-D figures are flat."
      },
      {
        "q": "A right angle is:",
        "choices": [
          "45 degrees",
          "180 degrees",
          "10 degrees",
          "90 degrees"
        ],
        "correct": 3,
        "why": "A right angle is 90°."
      },
      {
        "q": "A triangle has:",
        "choices": [
          "3 sides",
          "4 sides",
          "5 sides",
          "no sides"
        ],
        "correct": 0,
        "why": "Triangle means 3-sided polygon."
      },
      {
        "q": "Perimeter of a square side 4 cm is:",
        "choices": [
          "8 cm",
          "16 cm",
          "12 cm",
          "4 cm"
        ],
        "correct": 1,
        "why": "4 + 4 + 4 + 4 = 16 cm."
      },
      {
        "q": "Area of a rectangle 7 cm by 3 cm is:",
        "choices": [
          "20 cm",
          "10 square cm",
          "21 square cm",
          "14 cm"
        ],
        "correct": 2,
        "why": "7 × 3 = 21."
      },
      {
        "q": "A polygon must have:",
        "choices": [
          "only curves",
          "no corners",
          "one side",
          "straight sides and be closed"
        ],
        "correct": 3,
        "why": "Polygons are closed straight-sided figures."
      }
    ]
  },
  {
    "id": "p4-three-dimensional-geometry",
    "themeId": "p4-theme-geometry",
    "themeName": "Geometry",
    "title": "3-Dimensional Geometry",
    "estMinutes": 24,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P4 Mathematics beta: built from the verified NCDC Primary Four Mathematics Syllabus, 2010; human teacher review still required before premium-final release. 3-Dimensional Geometry gives P4 learners the foundation they need for confident upper-primary Mathematics.",
      "learningObjectives": [
        "Identify common solids.",
        "Name cube, cuboid, sphere, cylinder, pyramid and cone.",
        "Identify faces, edges and vertices.",
        "Build models of solids."
      ],
      "whatYouNeedToKnow": [
        "3-D shapes are solid shapes.",
        "A face is a flat surface of a solid.",
        "An edge is where two faces meet.",
        "A vertex is a corner point.",
        "Some solids, like spheres, have curved surfaces."
      ],
      "worked": {
        "problem": "How many faces, edges and vertices does a cube have?",
        "steps": [
          "A cube has 6 square faces.",
          "It has 12 edges.",
          "It has 8 vertices."
        ],
        "answer": "6 faces, 12 edges and 8 vertices."
      },
      "commonMistakes": [
        "Calling a circle a sphere.",
        "Confusing a face with an edge.",
        "Counting curved surfaces as flat faces without care.",
        "Forgetting that a vertex means a corner."
      ],
      "recap": [
        "Solids are 3-D.",
        "Faces are surfaces, edges are lines, vertices are corners.",
        "Models help you count accurately."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-solid-names",
        "title": "1. Naming solids",
        "modules": [
          {
            "moduleId": "p4-common-solids",
            "title": "Common 3-D solids",
            "bigIdea": "Many objects around us have solid-shape names.",
            "learnIt": [
              "A box may be a cuboid.",
              "A dice is usually a cube.",
              "A ball is a sphere.",
              "A tin may be a cylinder."
            ],
            "workedExample": {
              "question": "Which solid looks like a ball?",
              "steps": [
                "A ball has a round curved surface.",
                "The solid name is sphere."
              ],
              "answer": "Sphere"
            },
            "tryThis": {
              "question": "Which object is closest to a cylinder?",
              "choices": [
                "tin",
                "dice",
                "football",
                "pyramid roof"
              ],
              "correct": 0,
              "explanation": "A tin has circular ends and a curved side."
            },
            "imageUrl": "/images/math/3d-solids-faces-edges-vertices.svg",
            "imageCaption": "3-D solids showing faces, edges and vertices."
          }
        ]
      },
      {
        "subtopicId": "p4-faces-edges-vertices",
        "title": "2. Faces, edges and vertices",
        "modules": [
          {
            "moduleId": "p4-counting-solid-parts",
            "title": "Parts of solids",
            "bigIdea": "Counting solid parts is easier when you touch or draw the model.",
            "learnIt": [
              "A cuboid has rectangular faces.",
              "Edges are line segments on solids.",
              "Vertices are the corners where edges meet."
            ],
            "workedExample": {
              "question": "How many vertices does a cuboid have?",
              "steps": [
                "A cuboid has corners like a box.",
                "Count them: 4 on top and 4 at the bottom."
              ],
              "answer": "8 vertices"
            },
            "tryThis": {
              "question": "Where two faces meet, we get:",
              "choices": [
                "a face",
                "an edge",
                "a circle",
                "a capacity"
              ],
              "correct": 1,
              "explanation": "An edge is where faces meet."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "A cube is:",
        "choices": [
          "2-D",
          "a line",
          "3-D",
          "a number"
        ],
        "correct": 2,
        "why": "A cube is a solid."
      },
      {
        "q": "A sphere looks like:",
        "choices": [
          "a box",
          "a door",
          "a book",
          "a ball"
        ],
        "correct": 3,
        "why": "A ball is spherical."
      },
      {
        "q": "A face is:",
        "choices": [
          "a surface",
          "a corner",
          "a line",
          "a Roman numeral"
        ],
        "correct": 0,
        "why": "A face is a surface of a solid."
      },
      {
        "q": "A cube has how many faces?",
        "choices": [
          "8",
          "6",
          "12",
          "4"
        ],
        "correct": 1,
        "why": "A cube has 6 faces."
      },
      {
        "q": "A vertex is:",
        "choices": [
          "a face",
          "a side only",
          "a corner",
          "a circle"
        ],
        "correct": 2,
        "why": "A vertex is a corner."
      },
      {
        "q": "A cone has:",
        "choices": [
          "only square faces",
          "no curved surface",
          "six faces",
          "one pointed top"
        ],
        "correct": 3,
        "why": "A cone has one vertex and a circular base."
      }
    ]
  },
  {
    "id": "p4-data-handling",
    "themeId": "p4-theme-data",
    "themeName": "Interpretation of Graphs and Data",
    "title": "Data Handling",
    "estMinutes": 28,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P4 Mathematics beta: built from the verified NCDC Primary Four Mathematics Syllabus, 2010; human teacher review still required before premium-final release. Data Handling gives P4 learners the foundation they need for confident upper-primary Mathematics.",
      "learningObjectives": [
        "Use tally marks to collect and group data.",
        "Represent and interpret pictographs.",
        "Represent and interpret bar graphs.",
        "Represent and interpret line graphs."
      ],
      "whatYouNeedToKnow": [
        "Data is information collected for a purpose.",
        "Tally marks are counted in groups of five.",
        "A pictograph uses pictures to represent numbers.",
        "A bar graph uses bars of different heights.",
        "A line graph shows change over time."
      ],
      "worked": {
        "problem": "A tally shows ||||/ ||| mangoes. How many mangoes are recorded?",
        "steps": [
          "The crossed group ||||/ represents 5.",
          "The remaining ||| represents 3.",
          "5 + 3 = 8."
        ],
        "answer": "8 mangoes."
      },
      "commonMistakes": [
        "Forgetting to check the key in a pictograph.",
        "Counting each picture as 1 when the key says it represents more.",
        "Drawing unequal bar widths in a bar graph.",
        "Reading the wrong scale."
      ],
      "recap": [
        "Check the title and key.",
        "Use the scale carefully.",
        "Graphs help us compare quickly."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-tally-pictographs",
        "title": "1. Tally marks and pictographs",
        "modules": [
          {
            "moduleId": "p4-tally-picto",
            "title": "Collecting and displaying data",
            "bigIdea": "Data becomes easier to read when it is organised.",
            "learnIt": [
              "Use tally marks as you count objects or answers.",
              "After four tally marks, cross the fifth to make a group of 5.",
              "In pictographs, always read the key before counting."
            ],
            "workedExample": {
              "question": "A pictograph key says 1 picture = 2 learners. If there are 4 pictures, how many learners?",
              "steps": [
                "Each picture stands for 2.",
                "4 pictures stand for 4 × 2."
              ],
              "answer": "8 learners"
            },
            "tryThis": {
              "question": "What does a tally group of five look like?",
              "choices": [
                "four marks crossed by the fifth",
                "five separate circles",
                "one long bar only",
                "a triangle"
              ],
              "correct": 0,
              "explanation": "Tally marks are grouped in fives."
            },
            "imageUrl": "/images/math/p5-data-bar-line-graphs.svg",
            "imageCaption": "Data-handling diagram for tally, pictograph, bar and line graphs."
          }
        ]
      },
      {
        "subtopicId": "p4-bar-line-graphs",
        "title": "2. Bar and line graphs",
        "modules": [
          {
            "moduleId": "p4-reading-graphs",
            "title": "Reading graph scales",
            "bigIdea": "Graphs must be read using their scales and labels.",
            "learnIt": [
              "A bar graph compares quantities using bars.",
              "A line graph joins points to show change.",
              "Labels tell what each axis or bar represents."
            ],
            "workedExample": {
              "question": "A bar for Monday reaches 12 and Tuesday reaches 9. Which day is higher?",
              "steps": [
                "Compare the bar heights.",
                "12 is greater than 9."
              ],
              "answer": "Monday"
            },
            "tryThis": {
              "question": "A line graph is best for showing:",
              "choices": [
                "members of a set only",
                "change over time",
                "faces of a cube",
                "Roman numerals"
              ],
              "correct": 1,
              "explanation": "Line graphs show changes over time."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Data means:",
        "choices": [
          "a prayer",
          "a polygon",
          "collected information",
          "a Roman numeral"
        ],
        "correct": 2,
        "why": "Data is information."
      },
      {
        "q": "A tally group of 5 has:",
        "choices": [
          "five pictures",
          "one bar",
          "two circles",
          "four lines and a crossing fifth"
        ],
        "correct": 3,
        "why": "That is the standard tally group."
      },
      {
        "q": "If 1 picture = 5 books, 3 pictures mean:",
        "choices": [
          "15 books",
          "3 books",
          "8 books",
          "5 books"
        ],
        "correct": 0,
        "why": "3 × 5 = 15."
      },
      {
        "q": "A bar graph uses:",
        "choices": [
          "only circles",
          "bars",
          "only words",
          "Roman numerals"
        ],
        "correct": 1,
        "why": "Bars compare quantities."
      },
      {
        "q": "A graph key tells:",
        "choices": [
          "the answer always",
          "the date only",
          "what symbols represent",
          "the ruler length"
        ],
        "correct": 2,
        "why": "The key explains symbols."
      },
      {
        "q": "Which graph shows change over days well?",
        "choices": [
          "set only",
          "solid model",
          "number name",
          "line graph"
        ],
        "correct": 3,
        "why": "Line graphs show change over time."
      }
    ]
  },
  {
    "id": "p4-money",
    "themeId": "p4-theme-measurement",
    "themeName": "Measurement",
    "title": "Money",
    "estMinutes": 30,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P4 Mathematics beta: built from the verified NCDC Primary Four Mathematics Syllabus, 2010; human teacher review still required before premium-final release. Money gives P4 learners the foundation they need for confident upper-primary Mathematics.",
      "learningObjectives": [
        "Identify coins and notes of Uganda currency.",
        "Add and subtract money.",
        "Convert money values.",
        "Use Uganda currency in buying and selling.",
        "Calculate simple profit and loss."
      ],
      "whatYouNeedToKnow": [
        "Money in Uganda is counted in shillings.",
        "Buying and selling use addition and subtraction.",
        "Profit happens when selling price is greater than buying price.",
        "Loss happens when selling price is less than buying price.",
        "Always write money answers with UGX or shillings."
      ],
      "worked": {
        "problem": "A trader buys a bag at UGX 3,000 and sells it at UGX 3,800. Find the profit.",
        "steps": [
          "Profit = selling price - buying price.",
          "3,800 - 3,000 = 800."
        ],
        "answer": "Profit = UGX 800."
      },
      "commonMistakes": [
        "Subtracting in the wrong order for profit.",
        "Forgetting to add all items bought.",
        "Writing money without units.",
        "Calling every sale profit even when selling price is lower."
      ],
      "recap": [
        "Total cost means add.",
        "Change means money given minus cost.",
        "Profit = SP - CP; Loss = CP - SP."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-money-buying-selling",
        "title": "1. Buying, selling and change",
        "modules": [
          {
            "moduleId": "p4-shopping-money",
            "title": "Using Uganda currency",
            "bigIdea": "Money questions are easier when you identify cost, payment and change.",
            "learnIt": [
              "Add item prices to find total cost.",
              "Subtract total cost from money paid to find change.",
              "Use classroom shop role-play to practise."
            ],
            "workedExample": {
              "question": "A pencil costs UGX 500 and a book costs UGX 1,500. What is the total cost?",
              "steps": [
                "Add 500 + 1,500.",
                "500 + 1,500 = 2,000."
              ],
              "answer": "UGX 2,000"
            },
            "tryThis": {
              "question": "A learner pays UGX 5,000 for goods worth UGX 3,500. Change is:",
              "choices": [
                "UGX 1,500",
                "UGX 8,500",
                "UGX 3,500",
                "UGX 500"
              ],
              "correct": 0,
              "explanation": "5,000 - 3,500 = 1,500."
            },
            "imageUrl": "/images/math/p4-money-profit-loss.svg",
            "imageCaption": "Money, change, profit and loss reminder."
          }
        ]
      },
      {
        "subtopicId": "p4-profit-loss",
        "title": "2. Profit and loss",
        "modules": [
          {
            "moduleId": "p4-profit-loss",
            "title": "Simple business calculations",
            "bigIdea": "Profit and loss compare buying price and selling price.",
            "learnIt": [
              "If SP > CP, there is profit.",
              "If CP > SP, there is loss.",
              "Profit or loss amount is found by subtracting the smaller amount from the larger amount."
            ],
            "workedExample": {
              "question": "A mango was bought at UGX 700 and sold at UGX 600. Find the result.",
              "steps": [
                "Selling price is lower than buying price.",
                "Loss = 700 - 600."
              ],
              "answer": "Loss = UGX 100"
            },
            "tryThis": {
              "question": "Bought at UGX 2,000, sold at UGX 2,600. Result?",
              "choices": [
                "UGX 600 loss",
                "UGX 600 profit",
                "UGX 4,600 profit",
                "No profit"
              ],
              "correct": 1,
              "explanation": "2,600 - 2,000 = 600 profit."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Uganda currency is counted in:",
        "choices": [
          "dollars only",
          "metres",
          "shillings",
          "litres"
        ],
        "correct": 2,
        "why": "Ugandan money is in shillings."
      },
      {
        "q": "UGX 1,200 + UGX 800 =",
        "choices": [
          "UGX 1,000",
          "UGX 400",
          "UGX 2,800",
          "UGX 2,000"
        ],
        "correct": 3,
        "why": "1,200 + 800 = 2,000."
      },
      {
        "q": "Change from UGX 10,000 after spending UGX 7,500 is:",
        "choices": [
          "UGX 2,500",
          "UGX 17,500",
          "UGX 3,500",
          "UGX 1,500"
        ],
        "correct": 0,
        "why": "10,000 - 7,500 = 2,500."
      },
      {
        "q": "Profit is found by:",
        "choices": [
          "buying price + selling price",
          "selling price - buying price",
          "buying price only",
          "selling price only"
        ],
        "correct": 1,
        "why": "Profit compares SP and CP."
      },
      {
        "q": "If CP is UGX 5,000 and SP is UGX 4,500, there is:",
        "choices": [
          "profit",
          "no change",
          "loss",
          "double profit"
        ],
        "correct": 2,
        "why": "The item sold for less than it cost."
      },
      {
        "q": "A loss of UGX 300 means:",
        "choices": [
          "selling price was 300 more",
          "item was free",
          "buyer paid twice",
          "selling price was 300 less than buying price"
        ],
        "correct": 3,
        "why": "Loss is when selling price is lower."
      }
    ]
  },
  {
    "id": "p4-time",
    "themeId": "p4-theme-measurement",
    "themeName": "Measurement",
    "title": "Time",
    "estMinutes": 28,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P4 Mathematics beta: built from the verified NCDC Primary Four Mathematics Syllabus, 2010; human teacher review still required before premium-final release. Time gives P4 learners the foundation they need for confident upper-primary Mathematics.",
      "learningObjectives": [
        "Revise days and months in English.",
        "Use calendars.",
        "Tell time in hours and minutes.",
        "Convert measures of time.",
        "Find duration."
      ],
      "whatYouNeedToKnow": [
        "There are 7 days in a week.",
        "There are 12 months in a year.",
        "1 hour = 60 minutes.",
        "Duration is how long something takes.",
        "Calendars help us count days, weeks and months."
      ],
      "worked": {
        "problem": "A lesson starts at 9:00 a.m. and ends at 10:30 a.m. How long is it?",
        "steps": [
          "From 9:00 to 10:00 is 1 hour.",
          "From 10:00 to 10:30 is 30 minutes.",
          "Total is 1 hour 30 minutes."
        ],
        "answer": "1 hour 30 minutes."
      },
      "commonMistakes": [
        "Counting the start time as a full hour.",
        "Forgetting that 1 hour is 60 minutes.",
        "Confusing months and weeks.",
        "Writing duration as a clock time."
      ],
      "recap": [
        "Use a clock or timeline.",
        "Convert hours to minutes when needed.",
        "Duration answers how long."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-clocks-calendars",
        "title": "1. Clocks and calendars",
        "modules": [
          {
            "moduleId": "p4-clocks-calendars",
            "title": "Reading time tools",
            "bigIdea": "Clocks and calendars organise daily life.",
            "learnIt": [
              "Analogue clocks have hour and minute hands.",
              "Digital clocks show numbers.",
              "Calendars show days, weeks and months."
            ],
            "workedExample": {
              "question": "How many days are in 3 weeks?",
              "steps": [
                "1 week has 7 days.",
                "3 weeks = 3 × 7."
              ],
              "answer": "21 days"
            },
            "tryThis": {
              "question": "How many months are in a year?",
              "choices": [
                "12",
                "7",
                "24",
                "60"
              ],
              "correct": 0,
              "explanation": "A year has 12 months."
            },
            "imageUrl": "/images/math/time-clock-duration.svg",
            "imageCaption": "Clock and calendar facts for time and duration."
          }
        ]
      },
      {
        "subtopicId": "p4-duration-conversion",
        "title": "2. Converting time and duration",
        "modules": [
          {
            "moduleId": "p4-time-conversions",
            "title": "Working with time units",
            "bigIdea": "Time conversions help solve timetable problems.",
            "learnIt": [
              "1 hour = 60 minutes.",
              "Half an hour = 30 minutes.",
              "To find duration, count from the start time to the end time."
            ],
            "workedExample": {
              "question": "Convert 2 hours 15 minutes to minutes.",
              "steps": [
                "2 hours = 2 × 60 = 120 minutes.",
                "120 + 15 = 135."
              ],
              "answer": "135 minutes"
            },
            "tryThis": {
              "question": "From 2:00 p.m. to 4:00 p.m. is:",
              "choices": [
                "4 hours",
                "2 hours",
                "1 hour",
                "6 hours"
              ],
              "correct": 1,
              "explanation": "Count 2 to 3, then 3 to 4."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "1 hour equals:",
        "choices": [
          "30 minutes",
          "100 minutes",
          "60 minutes",
          "7 minutes"
        ],
        "correct": 2,
        "why": "An hour has 60 minutes."
      },
      {
        "q": "There are how many days in a week?",
        "choices": [
          "5",
          "10",
          "12",
          "7"
        ],
        "correct": 3,
        "why": "A week has 7 days."
      },
      {
        "q": "Half an hour is:",
        "choices": [
          "30 minutes",
          "15 minutes",
          "60 minutes",
          "45 minutes"
        ],
        "correct": 0,
        "why": "Half of 60 is 30."
      },
      {
        "q": "A meeting from 8:00 to 9:30 lasts:",
        "choices": [
          "30 minutes",
          "1 hour 30 minutes",
          "2 hours",
          "9 hours"
        ],
        "correct": 1,
        "why": "8 to 9 is 1 hour, plus 30 minutes."
      },
      {
        "q": "2 hours =",
        "choices": [
          "60 minutes",
          "200 minutes",
          "120 minutes",
          "20 minutes"
        ],
        "correct": 2,
        "why": "2 × 60 = 120."
      },
      {
        "q": "A calendar helps us find:",
        "choices": [
          "mass",
          "capacity",
          "faces",
          "dates and days"
        ],
        "correct": 3,
        "why": "Calendars show dates and days."
      }
    ]
  },
  {
    "id": "p4-length-mass-capacity",
    "themeId": "p4-theme-measurement",
    "themeName": "Measurement",
    "title": "Length, Mass and Capacity",
    "estMinutes": 34,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P4 Mathematics beta: built from the verified NCDC Primary Four Mathematics Syllabus, 2010; human teacher review still required before premium-final release. Length, Mass and Capacity gives P4 learners the foundation they need for confident upper-primary Mathematics.",
      "learningObjectives": [
        "Identify instruments for measuring length, mass and capacity.",
        "Use standard units to measure length, mass and capacity.",
        "Work with distance.",
        "Measure perimeter and area of simple shapes.",
        "Solve simple measurement problems."
      ],
      "whatYouNeedToKnow": [
        "Length can be measured in mm, cm, m and km.",
        "Mass can be measured in g and kg.",
        "Capacity can be measured in ml and l.",
        "Use the correct instrument: ruler/tape for length, scale for mass, measuring cylinder/jug for capacity.",
        "Choose sensible units for the object."
      ],
      "worked": {
        "problem": "Convert 3 m to centimetres.",
        "steps": [
          "1 m = 100 cm.",
          "3 m = 3 × 100 cm."
        ],
        "answer": "300 cm."
      },
      "commonMistakes": [
        "Using kg for capacity or litres for mass.",
        "Forgetting units in answers.",
        "Measuring from the wrong mark on a ruler.",
        "Confusing perimeter with area."
      ],
      "recap": [
        "Choose the right unit and instrument.",
        "Convert using known facts.",
        "Always write units."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-measurement-units",
        "title": "1. Units and instruments",
        "modules": [
          {
            "moduleId": "p4-units-instruments",
            "title": "Choosing the correct measurement",
            "bigIdea": "Good measuring begins with the right instrument and unit.",
            "learnIt": [
              "Use a ruler for short lengths and a tape measure for longer lengths.",
              "Use a weighing scale for mass.",
              "Use a measuring jug or cylinder for capacity."
            ],
            "workedExample": {
              "question": "Which instrument measures the mass of a bag of posho?",
              "steps": [
                "Mass is how heavy something is.",
                "A scale measures mass."
              ],
              "answer": "Weighing scale"
            },
            "tryThis": {
              "question": "Which unit is best for capacity of a water bottle?",
              "choices": [
                "litres",
                "kilograms",
                "metres",
                "centimetres"
              ],
              "correct": 0,
              "explanation": "Capacity is measured in litres or millilitres."
            },
            "imageUrl": "/images/math/measurement-units.svg",
            "imageCaption": "Measurement units and instruments for length, mass and capacity."
          }
        ]
      },
      {
        "subtopicId": "p4-measurement-problems",
        "title": "2. Measurement problems",
        "modules": [
          {
            "moduleId": "p4-simple-measurement-problems",
            "title": "Solving with standard units",
            "bigIdea": "Measurement problems often require conversion before calculation.",
            "learnIt": [
              "100 cm = 1 m.",
              "1,000 g = 1 kg.",
              "1,000 ml = 1 l.",
              "Perimeter is found by adding sides."
            ],
            "workedExample": {
              "question": "A rectangle is 10 m long and 6 m wide. Find its perimeter.",
              "steps": [
                "Add all sides: 10 + 6 + 10 + 6.",
                "The sum is 32."
              ],
              "answer": "32 m"
            },
            "tryThis": {
              "question": "2 kg equals:",
              "choices": [
                "200 g",
                "2,000 g",
                "20 g",
                "2 g"
              ],
              "correct": 1,
              "explanation": "1 kg = 1,000 g, so 2 kg = 2,000 g."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "A ruler measures:",
        "choices": [
          "mass",
          "capacity",
          "length",
          "time"
        ],
        "correct": 2,
        "why": "Rulers measure length."
      },
      {
        "q": "1 m =",
        "choices": [
          "10 cm",
          "1,000 cm",
          "60 cm",
          "100 cm"
        ],
        "correct": 3,
        "why": "One metre has 100 centimetres."
      },
      {
        "q": "1 kg =",
        "choices": [
          "1,000 g",
          "100 g",
          "10 g",
          "1 g"
        ],
        "correct": 0,
        "why": "One kilogram has 1,000 grams."
      },
      {
        "q": "1 litre =",
        "choices": [
          "100 ml",
          "1,000 ml",
          "10 ml",
          "60 ml"
        ],
        "correct": 1,
        "why": "One litre has 1,000 millilitres."
      },
      {
        "q": "Best unit for distance from Kampala to Jinja:",
        "choices": [
          "millimetres",
          "grams",
          "kilometres",
          "litres"
        ],
        "correct": 2,
        "why": "Long distances use kilometres."
      },
      {
        "q": "Perimeter of a triangle with sides 3 cm, 4 cm, 5 cm is:",
        "choices": [
          "20 cm",
          "6 cm",
          "60 cm",
          "12 cm"
        ],
        "correct": 3,
        "why": "3 + 4 + 5 = 12 cm."
      }
    ]
  },
  {
    "id": "p4-equations-without-letters",
    "themeId": "p4-theme-algebra",
    "themeName": "Algebra",
    "title": "Equations without Letters",
    "estMinutes": 26,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P4 Mathematics beta: built from the verified NCDC Primary Four Mathematics Syllabus, 2010; human teacher review still required before premium-final release. Equations without Letters gives P4 learners the foundation they need for confident upper-primary Mathematics.",
      "learningObjectives": [
        "Solve simple equations without letters.",
        "Use relationships between addition/subtraction and multiplication/division.",
        "Change simple word problems into equations without letters.",
        "Use the four operations to find missing numbers."
      ],
      "whatYouNeedToKnow": [
        "An equation is a number sentence with equal value on both sides.",
        "A box, blank or question mark can stand for a missing number.",
        "Addition and subtraction undo each other.",
        "Multiplication and division undo each other.",
        "Check by putting the missing number back."
      ],
      "worked": {
        "problem": "Solve: 4 + □ = 13.",
        "steps": [
          "The box plus 4 gives 13.",
          "Undo addition by subtracting: 13 - 4 = 9.",
          "Check: 4 + 9 = 13."
        ],
        "answer": "□ = 9"
      },
      "commonMistakes": [
        "Guessing without checking.",
        "Doing the same operation again instead of undoing it.",
        "Forgetting that both sides of an equation must balance.",
        "Changing a word problem into the wrong operation."
      ],
      "recap": [
        "Find what is missing.",
        "Undo the operation.",
        "Check in the original equation."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-missing-number-equations",
        "title": "1. Missing-number equations",
        "modules": [
          {
            "moduleId": "p4-equations-boxes",
            "title": "Finding the missing number",
            "bigIdea": "Equations without letters prepare learners for algebra using boxes and question marks.",
            "learnIt": [
              "For □ + 5 = 12, subtract 5 from 12.",
              "For □ - 3 = 8, add 3 to 8.",
              "For 4 × □ = 20, divide 20 by 4."
            ],
            "workedExample": {
              "question": "Solve: □ - 7 = 15.",
              "steps": [
                "The box minus 7 gives 15.",
                "Undo subtraction by adding 7.",
                "15 + 7 = 22."
              ],
              "answer": "□ = 22"
            },
            "tryThis": {
              "question": "Solve: 3 × □ = 27",
              "choices": [
                "9",
                "24",
                "30",
                "3"
              ],
              "correct": 0,
              "explanation": "27 ÷ 3 = 9."
            },
            "imageUrl": "/images/math/p4-equations-boxes.svg",
            "imageCaption": "Missing-number equation strategies."
          }
        ]
      },
      {
        "subtopicId": "p4-word-problems-equations",
        "title": "2. Changing words into equations",
        "modules": [
          {
            "moduleId": "p4-words-to-equations",
            "title": "From stories to number sentences",
            "bigIdea": "A word problem becomes easier when changed into a number sentence.",
            "learnIt": [
              "Look for the unknown amount.",
              "Choose the operation from the story.",
              "Write a balanced equation and solve."
            ],
            "workedExample": {
              "question": "A number plus 8 equals 20. Find the number.",
              "steps": [
                "Write □ + 8 = 20.",
                "Undo +8 by subtracting 8.",
                "20 - 8 = 12."
              ],
              "answer": "The number is 12."
            },
            "tryThis": {
              "question": "A number divided by 5 is 6. The number is:",
              "choices": [
                "11",
                "30",
                "1",
                "6"
              ],
              "correct": 1,
              "explanation": "If □ ÷ 5 = 6, then □ = 6 × 5 = 30."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Solve □ + 6 = 14",
        "choices": [
          "20",
          "6",
          "8",
          "14"
        ],
        "correct": 2,
        "why": "14 - 6 = 8."
      },
      {
        "q": "Solve □ - 5 = 9",
        "choices": [
          "4",
          "45",
          "9",
          "14"
        ],
        "correct": 3,
        "why": "9 + 5 = 14."
      },
      {
        "q": "Solve 4 × □ = 32",
        "choices": [
          "8",
          "28",
          "36",
          "4"
        ],
        "correct": 0,
        "why": "32 ÷ 4 = 8."
      },
      {
        "q": "Solve □ ÷ 6 = 7",
        "choices": [
          "13",
          "42",
          "1",
          "6"
        ],
        "correct": 1,
        "why": "7 × 6 = 42."
      },
      {
        "q": "An equation must:",
        "choices": [
          "always have a letter",
          "never use numbers",
          "balance both sides",
          "always be a story"
        ],
        "correct": 2,
        "why": "Both sides of an equation are equal."
      },
      {
        "q": "A number plus 10 equals 25. The number is:",
        "choices": [
          "35",
          "10",
          "25",
          "15"
        ],
        "correct": 3,
        "why": "25 - 10 = 15."
      }
    ]
  }
];

export function getP4MathTopic(id: string): Topic | undefined {
  return P4_MATH_TOPICS.find((topic) => topic.id === id);
}
