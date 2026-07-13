import type { ExerciseBlock, UpperPrimaryContentBlock, UpperPrimaryLesson } from "@/lib/content-blocks";

type ExerciseQuestion = ExerciseBlock["questions"][number];

type LessonSpec = {
  id: string;
  topicTitle: string;
  subTopicTitle: string;
  definition: string;
  simpleCheck?: string;
  categories: Array<{ name: string; definition: string; examples: string[]; notes?: string[] }>;
  examples: Array<{ name: string; explanation: string; localContext?: string }>;
  facts: string[];
  image?: { title: string; imageUrl: string; caption: string; labels?: string[] };
  worked?: { question: string; steps: string[]; answer: string };
  questions: ExerciseQuestion[];
};

const short = (prompt: string, answer?: string): ExerciseQuestion => ({ type: "short-answer", prompt, answer });
const written = (prompt: string, answer?: string): ExerciseQuestion => ({ type: "written", prompt, answer });
const mc = (prompt: string, choices: string[], answer: string): ExerciseQuestion => ({ type: "multiple-choice", prompt, choices, answer });
const cat = (name: string, definition: string, examples: string[], notes?: string[]) => ({ name, definition, examples, notes });
const ex = (name: string, explanation: string, localContext?: string) => ({ name, explanation, localContext });

function lesson(spec: LessonSpec): UpperPrimaryLesson {
  const blocks: UpperPrimaryContentBlock[] = [
    { kind: "definition", term: spec.subTopicTitle, definition: spec.definition, simpleCheck: spec.simpleCheck },
    { kind: "categories", title: "Types / methods / key ideas", categories: spec.categories },
    { kind: "examples", title: "Examples and illustrations", examples: spec.examples },
    { kind: "characteristics", title: "Rules to remember", points: spec.facts },
  ];
  if (spec.image) blocks.push({ kind: "diagram", ...spec.image });
  if (spec.worked) blocks.push({ kind: "worked-example", ...spec.worked });
  blocks.push({ kind: "exercise", title: "Evaluation", questions: spec.questions });
  return {
    id: spec.id,
    classLevel: "P7",
    term: spec.topicTitle === "Whole Numbers" || spec.topicTitle === "Patterns and Sequences" ? "Term I" : "Term II",
    curriculumMode: "subject",
    subject: "Mathematics",
    topicTitle: spec.topicTitle,
    subTopicTitle: spec.subTopicTitle,
    lessonTitle: spec.subTopicTitle,
    blocks,
  };
}

export const P7_MATH_HEAVY_V4_WAVE3: Record<string, UpperPrimaryLesson[]> = {
  "whole-numbers": [
    lesson({
      id: "p7-math-whole-numbers-place-value-heavy-v4-wave3",
      topicTitle: "Whole Numbers",
      subTopicTitle: "Place Value, Value, Rounding and Expanded Form",
      definition: "Whole numbers are counting numbers together with zero. In P7, learners read, write, compare and expand whole numbers up to millions using place value.",
      simpleCheck: "A digit's value depends on its position in the number.",
      categories: [
        cat("Place value", "the position of a digit in a number", ["ones", "tens", "hundreds", "thousands", "millions"]),
        cat("Value", "the amount a digit represents in its position", ["In 5,482, the value of 4 is 400"]),
        cat("Expanded form", "writing a number as the sum of its place values", ["7,305 = 7000 + 300 + 5"]),
        cat("Rounding off", "writing a number to the nearest required place", ["nearest ten", "nearest hundred", "nearest thousand"]),
      ],
      examples: [
        ex("Reading numbers", "4,205,018 is read as four million, two hundred five thousand and eighteen."),
        ex("Comparing numbers", "Compare from the highest place value first, moving left to right."),
        ex("Rounding", "6,748 rounded to the nearest hundred is 6,700 because the tens digit is 4."),
      ],
      facts: [
        "Use commas to group digits in threes from the right.",
        "Zero can hold a place even when it has no value in that position.",
        "If the next digit is 5 or more, round up.",
        "Expanded form helps identify value and avoid reading errors.",
      ],
      image: { title: "Place value chart", imageUrl: "/images/math/p4-place-value-chart.svg", caption: "Place value columns help learners read and expand large numbers accurately.", labels: ["millions", "thousands", "hundreds", "ones"] },
      worked: { question: "Write 8,407,239 in expanded form.", steps: ["Identify each non-zero digit's place.", "8 is in millions: 8,000,000.", "4 is in hundred thousands: 400,000.", "7 is in thousands: 7,000; 2 is hundreds: 200; 3 is tens: 30; 9 is ones: 9."], answer: "8,000,000 + 400,000 + 7,000 + 200 + 30 + 9" },
      questions: [short("What is the value of 6 in 3,628,410?", "600,000"), short("Round 7,846 to the nearest thousand.", "8,000"), mc("In 92,517 the digit 2 is in the:", ["thousands", "hundreds", "tens", "ones"], "thousands"), written("Write 5,030,406 in words.")],
    }),
    lesson({
      id: "p7-math-whole-numbers-roman-bases-heavy-v4-wave3",
      topicTitle: "Whole Numbers",
      subTopicTitle: "Roman Numerals and Number Bases",
      definition: "Roman numerals are symbols used to write numbers without place value. Number bases show how numbers are grouped using a fixed base such as base ten, base five or base two.",
      simpleCheck: "Roman numerals use symbols; number bases use place-value powers of the base.",
      categories: [
        cat("Roman numerals", "number symbols from ancient Rome", ["I=1", "V=5", "X=10", "L=50", "C=100", "D=500", "M=1000"]),
        cat("Subtractive Roman rule", "a smaller symbol before a bigger one means subtract", ["IV=4", "IX=9", "XL=40", "CM=900"]),
        cat("Base ten", "ordinary decimal system using powers of 10", ["ones", "tens", "hundreds"]),
        cat("Other bases", "number systems using groups other than ten", ["base two", "base five"]),
      ],
      examples: [
        ex("Roman numeral", "XLVI = 40 + 5 + 1 = 46."),
        ex("Base five", "243₅ = 2×25 + 4×5 + 3 = 73₁₀."),
        ex("Base two", "1011₂ = 1×8 + 0×4 + 1×2 + 1 = 11₁₀."),
      ],
      facts: [
        "A Roman symbol is not repeated more than three times in standard writing.",
        "In base five, allowed digits are 0, 1, 2, 3 and 4 only.",
        "In base two, allowed digits are 0 and 1 only.",
        "Always write the base as a small subscript or state it clearly in words.",
      ],
      worked: { question: "Convert 132₅ to base ten.", steps: ["Write place values in base five: 5², 5¹, 5⁰.", "132₅ = 1×25 + 3×5 + 2×1.", "25 + 15 + 2 = 42."], answer: "42₁₀" },
      questions: [short("Write 49 in Roman numerals.", "XLIX"), short("Which digits are allowed in base five?", "0, 1, 2, 3, 4"), mc("M represents:", ["1000", "100", "50", "500"], "1000"), written("Convert 101₂ to base ten.", "5")],
    }),
  ],
  "patterns-and-sequences": [
    lesson({
      id: "p7-math-patterns-divisibility-heavy-v4-wave3",
      topicTitle: "Patterns and Sequences",
      subTopicTitle: "Tests of Divisibility",
      definition: "A divisibility test is a quick rule used to know whether one number can be divided exactly by another number without leaving a remainder.",
      simpleCheck: "Divisibility tests save time before doing long division.",
      categories: [
        cat("Divisible by 2", "the last digit is even", ["48", "136", "2,450"]),
        cat("Divisible by 3", "the sum of digits is divisible by 3", ["123 because 1+2+3=6"]),
        cat("Divisible by 5", "the last digit is 0 or 5", ["75", "310"]),
        cat("Divisible by 9 and 10", "by 9 if digit sum is divisible by 9; by 10 if last digit is 0", ["729", "4,580"]),
      ],
      examples: [
        ex("Testing 2,346 by 3", "2+3+4+6 = 15, and 15 is divisible by 3, so 2,346 is divisible by 3."),
        ex("Testing 4,125 by 5", "It ends in 5, so it is divisible by 5."),
        ex("Testing 8,460 by 10", "It ends in 0, so it is divisible by 10."),
      ],
      facts: [
        "A number divisible by 10 is also divisible by 2 and 5.",
        "A number divisible by 9 is also divisible by 3.",
        "Divisibility is useful in fractions, factors, LCM and GCF work.",
        "Do not use the last digit rule for 3 or 9; use sum of digits.",
      ],
      worked: { question: "Is 7,236 divisible by 9?", steps: ["Add the digits: 7 + 2 + 3 + 6 = 18.", "18 is divisible by 9.", "Therefore 7,236 is divisible by 9."], answer: "Yes, it is divisible by 9." },
      questions: [short("State the divisibility test for 5.", "Last digit is 0 or 5."), short("Is 4,218 divisible by 3?", "Yes, digit sum is 15."), mc("A number divisible by 10 must end in:", ["0", "5", "2", "9"], "0"), written("Test whether 6,372 is divisible by 9.")],
    }),
    lesson({
      id: "p7-math-patterns-sequences-rules-heavy-v4-wave3",
      topicTitle: "Patterns and Sequences",
      subTopicTitle: "Number Patterns and Sequence Rules",
      definition: "A sequence is an ordered list of numbers following a rule. A pattern is the relationship that helps predict missing or future terms.",
      simpleCheck: "Find the rule before filling the missing number.",
      categories: [
        cat("Arithmetic sequence", "a sequence with a constant difference", ["4, 7, 10, 13, ..."]),
        cat("Geometric pattern", "a pattern where each term is multiplied or divided by the same number", ["3, 6, 12, 24, ..."]),
        cat("Mixed pattern", "a pattern using more than one operation or alternating rules", ["2, 4, 7, 11, 16, ..."]),
      ],
      examples: [
        ex("Common difference", "In 5, 9, 13, 17, the common difference is +4."),
        ex("Multiplication rule", "In 2, 6, 18, 54, each term is multiplied by 3."),
        ex("Position rule", "If term n = 3n + 2, then the 5th term is 17."),
      ],
      facts: [
        "Write differences between consecutive terms to identify a pattern.",
        "Check whether the same rule works for all given terms.",
        "Some PLE patterns use squares, cubes, odd numbers or triangular numbers.",
        "A table of position and term helps find the nth-term rule.",
      ],
      image: { title: "Patterns and sequences", imageUrl: "/images/math/p4-patterns-sequences.svg", caption: "Patterns become easier when learners identify the rule step by step.", labels: ["term", "rule", "next term"] },
      worked: { question: "Find the next two numbers: 6, 11, 16, 21, __, __", steps: ["Find the difference: 11-6=5, 16-11=5, 21-16=5.", "The rule is add 5.", "21+5=26 and 26+5=31."], answer: "26, 31" },
      questions: [short("What is a sequence?"), short("Find the next number: 4, 8, 16, 32, __", "64"), mc("The pattern 7, 10, 13, 16 has rule:", ["add 3", "multiply by 3", "subtract 3", "add 7"], "add 3"), written("Find the 6th term if term n = 2n + 1.", "13")],
    }),
  ],
  integers: [
    lesson({
      id: "p7-math-integers-number-line-heavy-v4-wave3",
      topicTitle: "Integers",
      subTopicTitle: "Integers on the Number Line",
      definition: "Integers are whole numbers, their negatives and zero. They are used to show quantities above and below zero, gains and losses, floors above and below ground, and temperature changes.",
      simpleCheck: "Numbers to the right on a number line are greater than numbers to the left.",
      categories: [
        cat("Positive integers", "integers greater than zero", ["+1", "+7", "+100"]),
        cat("Negative integers", "integers less than zero", ["-1", "-12", "-50"]),
        cat("Zero", "an integer that is neither positive nor negative", ["0"]),
        cat("Opposite integers", "integers the same distance from zero on opposite sides", ["+5 and -5"]),
      ],
      examples: [
        ex("Temperature", "-3°C is colder than +2°C."),
        ex("Money", "A loss of 5,000 shillings may be written as -5,000."),
        ex("Direction", "Moving 4 steps left from zero lands on -4."),
      ],
      facts: [
        "Every positive integer is greater than zero.",
        "Every negative integer is less than zero.",
        "The closer a negative number is to zero, the greater it is.",
        "Absolute value is distance from zero and is never negative.",
      ],
      image: { title: "Integer number line", imageUrl: "/images/math/p5-integer-number-line.svg", caption: "The number line helps compare and operate on integers.", labels: ["negative", "zero", "positive"] },
      worked: { question: "Arrange -2, 5, 0, -7 and 3 from smallest to largest.", steps: ["On the number line, the farthest left is smallest.", "Negative numbers come before zero and positives.", "-7 is less than -2."], answer: "-7, -2, 0, 3, 5" },
      questions: [short("Define integers."), short("Which is greater: -3 or -8?", "-3"), mc("Zero is:", ["neither positive nor negative", "always negative", "always positive", "not an integer"], "neither positive nor negative"), written("Write the opposite of +12.", "-12")],
    }),
    lesson({
      id: "p7-math-integers-operations-clock-heavy-v4-wave3",
      topicTitle: "Integers",
      subTopicTitle: "Operations on Integers and Clock Arithmetic",
      definition: "Operations on integers follow sign rules for addition, subtraction, multiplication and division. Clock arithmetic uses a fixed cycle where numbers repeat after a set modulus.",
      simpleCheck: "Adding a negative is the same as subtracting; subtracting a negative is the same as adding.",
      categories: [
        cat("Adding integers", "combine movements on the number line", ["-3 + 5 = 2"]),
        cat("Subtracting integers", "change subtraction to addition of the opposite", ["4 - (-2) = 6"]),
        cat("Multiplying/dividing signs", "same signs give positive; different signs give negative", ["-3 × -4 = +12", "-20 ÷ 5 = -4"]),
        cat("Clock arithmetic", "arithmetic in a repeating cycle", ["12-hour clock", "modulo systems"]),
      ],
      examples: [
        ex("Addition", "-7 + 10 = 3."),
        ex("Subtraction", "-5 - 4 = -9 because you move 4 more steps left."),
        ex("Clock", "Three hours after 10 o'clock is 1 o'clock on a 12-hour clock."),
      ],
      facts: [
        "Use brackets to avoid confusion with signs.",
        "Two negative signs next to each other often become addition in subtraction questions.",
        "For multiplication/division, count negative signs.",
        "In clock arithmetic, after the largest number the count returns to the start.",
      ],
      worked: { question: "Work out: -6 - (-9) + 2.", steps: ["Change subtracting negative nine to adding nine: -6 + 9 + 2.", "-6 + 9 = 3.", "3 + 2 = 5."], answer: "5" },
      questions: [short("Calculate -4 + 9.", "5"), short("Calculate -3 × -5.", "15"), mc("6 - (-2) equals:", ["8", "4", "-8", "-4"], "8"), written("On a 12-hour clock, what time is 5 hours after 9 o'clock?", "2 o'clock")],
    }),
  ],
};
