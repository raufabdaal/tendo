import type { UpperPrimaryLesson } from "@/lib/content-blocks";
import type { Topic } from "@/lib/topics";
import { addUpperPrimaryMathV4 } from "@/lib/v4-math-helpers";

// P5 Mathematics live beta content layer.
// Source map: content/curriculum/p5-math.json
// Rule: NCDC first, build second. This file follows the researched P5 Set One Mathematics structure.
// Status: live beta until checked against an official/trusted NCDC copy by a human reviewer.

const BETA_NOTICE = "P5 beta content: verify against official NCDC Primary Five Mathematics before market-facing release.";


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

const P5_OPERATIONS_V4: UpperPrimaryLesson[] = [
  {
    id: "p5-v4-four-operations",
    classLevel: "P5",
    term: "Term I",
    curriculumMode: "subject",
    subject: "Mathematics",
    topicTitle: "Operations on Whole Numbers",
    subTopicTitle: "Four Operations",
    lessonTitle: "Four Operations",
    blocks: [
      { kind: "definition", term: "operation", definition: "is a mathematical action such as addition, subtraction, multiplication or division.", simpleCheck: "In 24 × 16, multiplication is the operation." },
      { kind: "categories", title: "The four operations", categories: [
        { name: "Addition", definition: "combines quantities to get a total", examples: ["235 + 184 = 419"] },
        { name: "Subtraction", definition: "finds what remains or the difference", examples: ["8,000 - 3,475 = 4,525"] },
        { name: "Multiplication", definition: "finds total in equal groups", examples: ["24 × 16 = 384"] },
        { name: "Division", definition: "shares or groups equally", examples: ["96 ÷ 8 = 12"] },
      ] },
      { kind: "diagram", title: "Choosing operations", imageUrl: "/images/math/p4-four-operations.svg", caption: "Use words in the problem to choose the correct operation.", labels: ["altogether", "left", "each", "share"] },
      { kind: "worked-example", question: "A farmer has 12 boxes with 18 pencils each. How many pencils are there?", steps: ["Each box has the same number.", "Use multiplication.", "12 × 18 = 216."], answer: "216 pencils." },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "Find 4,816 + 2,309.", answer: "7,125." },
        { type: "short-answer", prompt: "Find 24 × 16.", answer: "384." },
        { type: "multiple-choice", prompt: "Sharing 96 oranges among 8 baskets uses:", choices: ["division", "addition", "subtraction", "rounding"], answer: "division" },
      ] },
    ],
  },
  {
    id: "p5-v4-operation-checking-word-problems",
    classLevel: "P5",
    term: "Term I",
    curriculumMode: "subject",
    subject: "Mathematics",
    topicTitle: "Operations on Whole Numbers",
    subTopicTitle: "Word Problems and Checking",
    lessonTitle: "Word Problems and Checking",
    blocks: [
      { kind: "definition", term: "word problem", definition: "is a mathematics question written as a story or real-life situation.", simpleCheck: "A market story about buying 12 boxes of pencils is a word problem." },
      { kind: "categories", title: "Operation clue words", categories: [
        { name: "Addition clues", definition: "words suggesting addition", examples: ["altogether", "total", "sum", "in all"] },
        { name: "Subtraction clues", definition: "words suggesting subtraction", examples: ["left", "difference", "remain", "more than"] },
        { name: "Multiplication clues", definition: "words suggesting equal groups", examples: ["each", "every", "groups of", "times"] },
        { name: "Division clues", definition: "words suggesting sharing or grouping", examples: ["share equally", "each group", "per", "divide"] },
      ] },
      { kind: "characteristics", title: "Checking answers", points: ["Check addition by subtraction.", "Check subtraction by addition.", "Check multiplication by division.", "Check division by multiplication.", "Estimate to see if the answer is reasonable." ] },
      { kind: "worked-example", question: "Check 420 ÷ 7 = 60.", steps: ["Division is checked by multiplication.", "60 × 7 = 420.", "So the division answer is correct."], answer: "420 ÷ 7 = 60 is correct." },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "Which operation checks multiplication?", answer: "Division." },
        { type: "short-answer", prompt: "Write one clue word for addition.", answer: "Altogether, total, sum or in all." },
        { type: "multiple-choice", prompt: "Which operation checks 60 × 7 = 420?", choices: ["420 ÷ 7", "420 + 7", "60 - 7", "7 - 60"], answer: "420 ÷ 7" },
      ] },
    ],
  },
];

const P5_FRACTIONS_V4: UpperPrimaryLesson[] = [
  {
    id: "p5-v4-decimal-fractions",
    classLevel: "P5",
    term: "Term II",
    curriculumMode: "subject",
    subject: "Mathematics",
    topicTitle: "Fractions",
    subTopicTitle: "Decimal Fractions",
    lessonTitle: "Decimal Fractions",
    blocks: [
      { kind: "definition", term: "decimal fraction", definition: "is a fraction written using a decimal point.", simpleCheck: "0.6 means six tenths." },
      { kind: "categories", title: "Decimal place values", categories: [
        { name: "Tenths", definition: "the first digit after the decimal point", examples: ["0.4 = 4/10", "0.7 = 7/10"] },
        { name: "Hundredths", definition: "the second digit after the decimal point", examples: ["0.25 = 25/100", "0.09 = 9/100"] },
        { name: "Vulgar fractions", definition: "fractions written with numerator and denominator", examples: ["3/5", "25/100", "7/10"] },
      ] },
      { kind: "diagram", title: "Decimal place-value chart", imageUrl: "/images/math/p5-decimal-place-value.svg", caption: "Tenths and hundredths in decimal fractions.", labels: ["ones", "tenths", "hundredths", "0.6", "0.25"] },
      { kind: "worked-example", question: "Convert 0.6 to a vulgar fraction.", steps: ["0.6 means 6 tenths.", "Write 6/10.", "Simplify 6/10 to 3/5."], answer: "3/5." },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "What is 0.7 as a fraction?", answer: "7/10." },
        { type: "short-answer", prompt: "What is 0.25 as a fraction?", answer: "25/100 or 1/4." },
        { type: "multiple-choice", prompt: "Which is greater?", choices: ["0.8", "0.45", "0.08", "0.4"], answer: "0.8" },
      ] },
    ],
  },
  {
    id: "p5-v4-decimal-operations",
    classLevel: "P5",
    term: "Term II",
    curriculumMode: "subject",
    subject: "Mathematics",
    topicTitle: "Fractions",
    subTopicTitle: "Adding and Subtracting Decimal Fractions",
    lessonTitle: "Adding and Subtracting Decimal Fractions",
    blocks: [
      { kind: "definition", term: "decimal operation", definition: "is addition or subtraction using numbers with decimal points.", simpleCheck: "2.35 + 1.40 is a decimal operation." },
      { kind: "categories", title: "Rules for decimal operations", categories: [
        { name: "Line up decimal points", definition: "write decimal points under each other before adding or subtracting", examples: ["2.35 + 1.40", "5.80 - 2.40"] },
        { name: "Add zeros if needed", definition: "zeros can help numbers have the same number of decimal places", examples: ["3.5 = 3.50"] },
        { name: "Keep the decimal point", definition: "bring the decimal point straight down in the answer", examples: ["2.35 + 1.40 = 3.75"] },
      ] },
      { kind: "worked-example", question: "Add 2.35 + 1.40.", steps: ["Line up the decimal points.", "Add hundredths, tenths and ones.", "Keep the decimal point in the answer."], answer: "3.75." },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "Add 1.25 + 2.30.", answer: "3.55." },
        { type: "short-answer", prompt: "Subtract 5.80 - 2.40.", answer: "3.40." },
        { type: "multiple-choice", prompt: "Before adding decimals, you should line up:", choices: ["decimal points", "only first digits", "commas", "words"], answer: "decimal points" },
      ] },
    ],
  },
];

const P5_WHOLE_NUMBERS_V4: UpperPrimaryLesson[] = [
  {
    id: "p5-v4-whole-numbers-place-value",
    classLevel: "P5",
    term: "Term I",
    curriculumMode: "subject",
    subject: "Mathematics",
    topicTitle: "Whole Numbers",
    subTopicTitle: "Place Value up to 999,999",
    lessonTitle: "Place Value up to 999,999",
    blocks: [
      { kind: "definition", term: "whole numbers", definition: "are numbers without fractions or decimals. In P5, learners read and write whole numbers up to 999,999.", simpleCheck: "572,914 is a whole number." },
      { kind: "categories", title: "Six-digit place values", categories: [
        { name: "Ones, tens, hundreds", definition: "the first three places from the right", examples: ["914 has 9 hundreds, 1 ten and 4 ones"] },
        { name: "Thousands", definition: "groups of one thousand", examples: ["2 in 572,914 is thousands"] },
        { name: "Ten-thousands", definition: "groups of ten thousand", examples: ["7 in 572,914 is ten-thousands"] },
        { name: "Hundred-thousands", definition: "groups of one hundred thousand", examples: ["5 in 572,914 is hundred-thousands"] },
      ] },
      { kind: "diagram", title: "Place-value chart", imageUrl: "/images/math/p4-place-value-chart.svg", caption: "Use place value to read six-digit numbers.", labels: ["hundred-thousands", "ten-thousands", "thousands", "hundreds", "tens", "ones"] },
      { kind: "worked-example", question: "What is the value of 7 in 572,914?", steps: ["Locate digit 7.", "It is in the ten-thousands place.", "7 × 10,000 = 70,000."], answer: "70,000." },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "What is the value of 8 in 384,216?", answer: "80,000." },
        { type: "short-answer", prompt: "Write 425,306 in expanded form.", answer: "400,000 + 20,000 + 5,000 + 300 + 6." },
        { type: "multiple-choice", prompt: "The digit 5 in 572,914 is in the:", choices: ["hundred-thousands", "thousands", "hundreds", "ones"], answer: "hundred-thousands" },
      ] },
    ],
  },
  {
    id: "p5-v4-rounding-roman-numerals",
    classLevel: "P5",
    term: "Term I",
    curriculumMode: "subject",
    subject: "Mathematics",
    topicTitle: "Whole Numbers",
    subTopicTitle: "Rounding and Roman Numerals",
    lessonTitle: "Rounding and Roman Numerals",
    blocks: [
      { kind: "definition", term: "rounding off", definition: "is writing a number to the nearest chosen place to make it easier to use.", simpleCheck: "67,489 rounded to the nearest thousand is 67,000." },
      { kind: "categories", title: "Rules", categories: [
        { name: "Nearest ten-thousands", definition: "look at the thousands digit", examples: ["67,489 → 70,000 because thousands digit is 7"] },
        { name: "Roman numerals up to fifty", definition: "numbers written using I, V, X and L", examples: ["XL = 40", "L = 50", "XIX = 19"] },
      ] },
      { kind: "worked-example", question: "Round 67,489 to the nearest 10,000.", steps: ["Look at the thousands digit: 7.", "7 is 5 or more, so round up.", "67,489 becomes 70,000."], answer: "70,000." },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "Round 34,621 to the nearest 10,000.", answer: "30,000." },
        { type: "short-answer", prompt: "Write 49 in Roman numerals.", answer: "XLIX." },
        { type: "multiple-choice", prompt: "L means:", choices: ["50", "10", "5", "100"], answer: "50" },
      ] },
    ],
  },
];

const P5_MONEY_V4: UpperPrimaryLesson[] = [
  {
    id: "p5-v4-money-profit-loss",
    classLevel: "P5",
    term: "Term III",
    curriculumMode: "subject",
    subject: "Mathematics",
    topicTitle: "Money",
    subTopicTitle: "Buying, Selling, Profit and Loss",
    lessonTitle: "Buying, Selling, Profit and Loss",
    blocks: [
      { kind: "definition", term: "cost price", definition: "is the price at which an item is bought.", simpleCheck: "If a trader buys a basket at UGX 8,000, the cost price is UGX 8,000." },
      { kind: "definition", term: "selling price", definition: "is the price at which an item is sold.", simpleCheck: "If the basket is sold at UGX 10,000, the selling price is UGX 10,000." },
      { kind: "categories", title: "Money formulas", categories: [
        { name: "Profit", definition: "selling price - cost price", examples: ["10,000 - 8,000 = 2,000"] },
        { name: "Loss", definition: "cost price - selling price", examples: ["5,000 - 4,000 = 1,000"] },
        { name: "Change", definition: "money paid - cost", examples: ["1,000 - 700 = 300"] },
      ] },
      { kind: "diagram", title: "Money and profit card", imageUrl: "/images/math/p4-money-profit-loss.svg", caption: "Buying, selling, change, profit and loss.", labels: ["CP", "SP", "profit", "loss", "change"] },
      { kind: "worked-example", question: "A bag bought at UGX 8,000 is sold at UGX 9,500. Find profit.", steps: ["Profit = SP - CP.", "9,500 - 8,000 = 1,500."], answer: "UGX 1,500 profit." },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "What is profit?", answer: "Selling price minus cost price when SP is greater than CP." },
        { type: "short-answer", prompt: "Find the loss if CP is UGX 4,000 and SP is UGX 3,500.", answer: "UGX 500 loss." },
        { type: "multiple-choice", prompt: "A trader sells below cost price. This is:", choices: ["loss", "profit", "change", "discount only"], answer: "loss" },
      ] },
    ],
  },
];

const P5_MEASUREMENT_MATH_V4: UpperPrimaryLesson[] = [
  {
    id: "p5-v4-length-mass-capacity-math",
    classLevel: "P5",
    term: "Term III",
    curriculumMode: "subject",
    subject: "Mathematics",
    topicTitle: "Length, Mass and Capacity",
    subTopicTitle: "Length, Mass, Capacity, Perimeter and Area",
    lessonTitle: "Length, Mass, Capacity, Perimeter and Area",
    blocks: [
      { kind: "definition", term: "measurement", definition: "is finding size, distance, mass or capacity using standard units.", simpleCheck: "Using centimetres to measure a book is measurement." },
      { kind: "categories", title: "Units and formulas", categories: [
        { name: "Length", definition: "distance from one point to another", examples: ["10 mm = 1 cm", "100 cm = 1 m"] },
        { name: "Mass", definition: "how heavy something is", examples: ["1000 g = 1 kg"] },
        { name: "Capacity", definition: "how much a container holds", examples: ["1000 ml = 1 litre"] },
        { name: "Perimeter", definition: "distance around a shape", examples: ["square perimeter = 4 × side"] },
        { name: "Area", definition: "surface covered by a shape", examples: ["rectangle area = length × width"] },
      ] },
      { kind: "diagram", title: "Measurement units", imageUrl: "/images/math/measurement-units.svg", caption: "Length, mass, capacity, perimeter and area reminders.", labels: ["mm", "cm", "m", "g", "kg", "litre"] },
      { kind: "worked-example", question: "Find the area of a rectangle 7 cm by 5 cm.", steps: ["Area = length × width.", "7 × 5 = 35."], answer: "35 cm²." },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "Convert 3 m to cm.", answer: "300 cm." },
        { type: "short-answer", prompt: "Convert 5 kg to grams.", answer: "5000 g." },
        { type: "multiple-choice", prompt: "Capacity is measured in:", choices: ["litres", "kilograms", "metres", "degrees"], answer: "litres" },
      ] },
    ],
  },
];

const P5_ALGEBRA_V4: UpperPrimaryLesson[] = [
  {
    id: "p5-v4-simple-equations",
    classLevel: "P5",
    term: "Term III",
    curriculumMode: "subject",
    subject: "Mathematics",
    topicTitle: "Algebra",
    subTopicTitle: "Simple Equations and Unknown Values",
    lessonTitle: "Simple Equations and Unknown Values",
    blocks: [
      { kind: "definition", term: "unknown value", definition: "is a missing number represented by a box or letter in a number sentence.", simpleCheck: "In x + 7 = 19, x is the unknown value." },
      { kind: "definition", term: "equation", definition: "is a number sentence showing that two sides are equal.", simpleCheck: "x + 7 = 19 is an equation." },
      { kind: "categories", title: "Inverse operations", categories: [
        { name: "Addition and subtraction", definition: "subtraction undoes addition and addition undoes subtraction", examples: ["x + 7 = 19, so x = 19 - 7"] },
        { name: "Multiplication and division", definition: "division undoes multiplication and multiplication undoes division", examples: ["3n = 21, so n = 21 ÷ 3"] },
        { name: "Checking", definition: "putting the answer back into the original equation", examples: ["12 + 7 = 19"] },
      ] },
      { kind: "diagram", title: "Equation boxes", imageUrl: "/images/math/p4-equations-boxes.svg", caption: "Use inverse operations to find missing values.", labels: ["unknown", "equation", "inverse", "check"] },
      { kind: "worked-example", question: "Solve x + 7 = 19.", steps: ["Undo +7 by subtracting 7.", "19 - 7 = 12.", "Check: 12 + 7 = 19."], answer: "x = 12." },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "Solve y - 5 = 11.", answer: "y = 16." },
        { type: "short-answer", prompt: "Solve 3 × n = 21.", answer: "n = 7." },
        { type: "multiple-choice", prompt: "A letter in an equation can show:", choices: ["an unknown number", "only a word", "a full stop", "a road"], answer: "an unknown number" },
      ] },
    ],
  },
];

const P5_SETS_V4: UpperPrimaryLesson[] = [
  {
    id: "p5-v4-sets-union-intersection",
    classLevel: "P5",
    term: "Term I",
    curriculumMode: "subject",
    subject: "Mathematics",
    topicTitle: "Set Concepts",
    subTopicTitle: "Sets, Union and Intersection",
    lessonTitle: "Sets, Union and Intersection",
    blocks: [
      { kind: "definition", term: "set", definition: "is a well-defined collection of objects or numbers.", simpleCheck: "A = {2, 4, 6} is a set." },
      { kind: "categories", title: "Set ideas", categories: [
        { name: "Equal sets", definition: "sets with exactly the same members", examples: ["{2,4,6} = {6,4,2}"] },
        { name: "Equivalent sets", definition: "sets with the same number of members", examples: ["{a,b,c} and {1,2,3}"] },
        { name: "Empty set", definition: "a set with no members", examples: ["months with 40 days"] },
        { name: "Union", definition: "all members in the sets, written without repetition", examples: ["{2,4} ∪ {4,6} = {2,4,6}"] },
        { name: "Intersection", definition: "members common to both sets", examples: ["{2,4,6} ∩ {4,6,8} = {4,6}"] },
      ] },
      { kind: "diagram", title: "Venn diagram", imageUrl: "/images/math/venn-diagram-4-regions.png", caption: "Union and intersection on a two-set Venn diagram.", labels: ["union", "intersection", "only A", "only B"] },
      { kind: "worked-example", question: "Let A = {2,4,6} and B = {4,6,8}. Find A ∩ B and A ∪ B.", steps: ["Common members are 4 and 6, so A ∩ B = {4,6}.", "All members without repetition are 2,4,6,8, so A ∪ B = {2,4,6,8}."] , answer: "A ∩ B = {4,6}; A ∪ B = {2,4,6,8}." },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "What is union of sets?", answer: "All members in the sets, written once." },
        { type: "short-answer", prompt: "What is intersection of sets?", answer: "Members common to both sets." },
        { type: "multiple-choice", prompt: "The overlap in a Venn diagram shows:", choices: ["intersection", "union only", "empty set", "Roman numbers"], answer: "intersection" },
      ] },
    ],
  },
];

const P5_PATTERNS_V4: UpperPrimaryLesson[] = [
  {
    id: "p5-v4-patterns-sequences",
    classLevel: "P5",
    term: "Term I",
    curriculumMode: "subject",
    subject: "Mathematics",
    topicTitle: "Patterns and Sequences",
    subTopicTitle: "Number Patterns and Sequences",
    lessonTitle: "Number Patterns and Sequences",
    blocks: [
      { kind: "definition", term: "sequence", definition: "is a list of numbers or objects arranged in order using a rule.", simpleCheck: "2, 5, 8, 11 follows the rule add 3." },
      { kind: "categories", title: "Common rules", categories: [
        { name: "Add rule", definition: "each term increases by the same number", examples: ["4, 8, 12, 16"] },
        { name: "Subtract rule", definition: "each term decreases by the same number", examples: ["50, 45, 40, 35"] },
        { name: "Multiply rule", definition: "each term is multiplied", examples: ["3, 6, 12, 24"] },
        { name: "Changing difference", definition: "the difference changes in a pattern", examples: ["1, 3, 6, 10, 15"] },
      ] },
      { kind: "worked-example", question: "Find the next number: 1, 3, 6, 10, ___.", steps: ["Differences are +2, +3, +4.", "Next difference is +5.", "10 + 5 = 15."], answer: "15." },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "Find the next number: 5, 10, 20, 40, ___.", answer: "80." },
        { type: "short-answer", prompt: "State the rule: 7, 14, 21, 28.", answer: "Add 7." },
        { type: "multiple-choice", prompt: "What comes next: 2, 4, 8, 16, ___?", choices: ["32", "20", "24", "18"], answer: "32" },
      ] },
    ],
  },
];

const P5_INTEGERS_V4: UpperPrimaryLesson[] = [
  {
    id: "p5-v4-integers-number-line",
    classLevel: "P5",
    term: "Term III",
    curriculumMode: "subject",
    subject: "Mathematics",
    topicTitle: "Integers",
    subTopicTitle: "Integers on a Number Line",
    lessonTitle: "Integers on a Number Line",
    blocks: [
      { kind: "definition", term: "integer", definition: "is a whole number that may be positive, negative or zero.", simpleCheck: "-4, 0 and +7 are integers." },
      { kind: "categories", title: "Integer ideas", categories: [
        { name: "Positive integers", definition: "whole numbers greater than zero", examples: ["+1", "+2", "+10"] },
        { name: "Negative integers", definition: "whole numbers less than zero", examples: ["-1", "-5", "-20"] },
        { name: "Zero", definition: "neither positive nor negative", examples: ["0"] },
        { name: "Number line", definition: "a line that shows numbers in order", examples: ["numbers increase to the right"] },
      ] },
      { kind: "diagram", title: "Integer number line", imageUrl: "/images/math/p5-integer-number-line.svg", caption: "Positive and negative numbers on a number line.", labels: ["negative", "zero", "positive", "left", "right"] },
      { kind: "worked-example", question: "Arrange -3, 2, 0 and -1 from smallest to greatest.", steps: ["Place them on a number line.", "Read from left to right."], answer: "-3, -1, 0, 2." },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "What is an integer?", answer: "A whole number that may be positive, negative or zero." },
        { type: "short-answer", prompt: "Which is greater: -1 or -5?", answer: "-1." },
        { type: "multiple-choice", prompt: "A debt of UGX 2,000 can be shown as:", choices: ["-2000", "+2000", "0", "200"], answer: "-2000" },
      ] },
    ],
  },
];

const P5_GEOMETRY_V4: UpperPrimaryLesson[] = [
  {
    id: "p5-v4-lines-angles-figures",
    classLevel: "P5",
    term: "Term II",
    curriculumMode: "subject",
    subject: "Mathematics",
    topicTitle: "Lines, Angles and Geometrical Figures",
    subTopicTitle: "Lines, Angles and Geometrical Figures",
    lessonTitle: "Lines, Angles and Geometrical Figures",
    blocks: [
      { kind: "definition", term: "angle", definition: "is formed when two lines meet at a point.", simpleCheck: "The corner of a book forms an angle." },
      { kind: "categories", title: "Geometry ideas", categories: [
        { name: "Parallel lines", definition: "lines that never meet", examples: ["railway lines", "opposite sides of a rectangle"] },
        { name: "Perpendicular lines", definition: "lines that meet at a right angle", examples: ["corner of a square", "cross roads"] },
        { name: "Angles", definition: "turns measured in degrees", examples: ["right angle", "acute angle", "obtuse angle"] },
        { name: "Circle", definition: "a round 2-D shape", examples: ["coin", "plate", "wheel"] },
        { name: "Symmetry", definition: "when one side matches the other after folding", examples: ["some leaves", "rectangle fold line"] },
      ] },
      { kind: "diagram", title: "Lines and angles", imageUrl: "/images/math/parallel-perpendicular-transversal.png", caption: "Parallel and perpendicular lines and angle relationships.", labels: ["parallel", "perpendicular", "angle", "right angle"] },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "What are parallel lines?", answer: "Lines that never meet." },
        { type: "short-answer", prompt: "What are perpendicular lines?", answer: "Lines that meet at a right angle." },
        { type: "multiple-choice", prompt: "A right angle measures:", choices: ["90°", "45°", "180°", "360°"], answer: "90°" },
      ] },
    ],
  },
];

const P5_DATA_HANDLING_V4: UpperPrimaryLesson[] = [
  {
    id: "p5-v4-data-handling-graphs-average",
    classLevel: "P5",
    term: "Term II",
    curriculumMode: "subject",
    subject: "Mathematics",
    topicTitle: "Data Handling",
    subTopicTitle: "Graphs, Scales and Average",
    lessonTitle: "Graphs, Scales and Average",
    blocks: [
      { kind: "definition", term: "data", definition: "is information collected for study, comparison or decision making.", simpleCheck: "Marks scored by pupils are data." },
      { kind: "categories", title: "Data handling ideas", categories: [
        { name: "Scale", definition: "the value represented by equal spaces on an axis", examples: ["one square represents 10 pupils"] },
        { name: "Bar graph", definition: "uses bars to compare quantities", examples: ["number of fruits sold"] },
        { name: "Line graph", definition: "uses points joined by lines to show change", examples: ["temperature over days"] },
        { name: "Average", definition: "a typical value found by total divided by number of items", examples: ["mean score"] },
      ] },
      { kind: "diagram", title: "Data graphs", imageUrl: "/images/math/p5-data-bar-line-graphs.svg", caption: "Bar graphs, line graphs and scales.", labels: ["bar graph", "line graph", "scale", "average"] },
      { kind: "worked-example", question: "Find the average of 4, 6 and 8.", steps: ["Add: 4 + 6 + 8 = 18.", "There are 3 numbers.", "18 ÷ 3 = 6."], answer: "Average = 6." },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "What is data?", answer: "Information collected for study or comparison." },
        { type: "short-answer", prompt: "Find the average of 5, 7 and 9.", answer: "7." },
        { type: "multiple-choice", prompt: "Which graph uses bars?", choices: ["bar graph", "clock", "calendar", "ruler"], answer: "bar graph" },
      ] },
    ],
  },
];

const P5_TIME_V4: UpperPrimaryLesson[] = [
  {
    id: "p5-v4-time-duration-speed",
    classLevel: "P5",
    term: "Term II",
    curriculumMode: "subject",
    subject: "Mathematics",
    topicTitle: "Time",
    subTopicTitle: "Time, Duration and Speed",
    lessonTitle: "Time, Duration and Speed",
    blocks: [
      { kind: "definition", term: "duration", definition: "is the amount of time between the start and end of an activity.", simpleCheck: "From 2:15 p.m. to 3:05 p.m. is 50 minutes." },
      { kind: "categories", title: "Time ideas", categories: [
        { name: "12-hour clock", definition: "uses a.m. and p.m.", examples: ["8:45 a.m.", "2:30 p.m."] },
        { name: "Hours, minutes and seconds", definition: "units used to measure time", examples: ["1 hour = 60 minutes", "1 minute = 60 seconds"] },
        { name: "Duration", definition: "time taken", examples: ["lesson lasts 40 minutes"] },
        { name: "Speed", definition: "distance moved in a given time", examples: ["kilometres per hour"] },
      ] },
      { kind: "diagram", title: "Clock and duration", imageUrl: "/images/math/time-clock-duration.svg", caption: "Use clocks and timelines to find duration.", labels: ["a.m.", "p.m.", "minutes", "duration", "speed"] },
      { kind: "worked-example", question: "A journey begins at 2:15 p.m. and ends at 3:05 p.m. How long is it?", steps: ["2:15 to 3:00 = 45 minutes.", "3:00 to 3:05 = 5 minutes.", "45 + 5 = 50 minutes."], answer: "50 minutes." },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "How many minutes are in 3 hours?", answer: "180 minutes." },
        { type: "short-answer", prompt: "30 minutes after 8:45 is what time?", answer: "9:15." },
        { type: "multiple-choice", prompt: "p.m. means:", choices: ["after noon", "before noon", "midnight only", "morning only"], answer: "after noon" },
      ] },
    ],
  },
];

const P5_MATH_TOPIC_DATA: Topic[] = [
  {
    id: "p5-set-concepts",
    themeId: "p5-theme-sets",
    themeName: "Sets",
    title: "Set Concepts",
    estMinutes: 28,
    status: "published",
    reviewStatus: "beta",
    upperPrimaryLessons: P5_SETS_V4,
    useOnlyV4Lessons: true,
    note: {
      intro: `${BETA_NOTICE} Set concepts help learners group objects, compare collections and use Venn diagrams in everyday situations.`,
      learningObjectives: [
        "Form and name sets from real objects or numbers.",
        "Distinguish equal, equivalent and empty sets.",
        "Find union and intersection using two-set Venn diagrams.",
      ],
      whatYouNeedToKnow: [
        "A set is a well-defined collection of objects or numbers.",
        "Equal sets contain exactly the same members; equivalent sets contain the same number of members.",
        "Union means all members in the sets, while intersection means members common to both sets.",
      ],
      worked: {
        problem: "Let A = {2, 4, 6} and B = {4, 6, 8}. Find A ∩ B and A ∪ B.",
        steps: [
          "Common members are 4 and 6, so A ∩ B = {4, 6}.",
          "All members without repetition are 2, 4, 6 and 8.",
          "Therefore A ∪ B = {2, 4, 6, 8}.",
        ],
        answer: "A ∩ B = {4, 6}; A ∪ B = {2, 4, 6, 8}.",
      },
      commonMistakes: [
        "Repeating common members when listing the union.",
        "Calling sets equal when they only have the same number of members.",
        "Forgetting that an empty set has no members.",
      ],
      recap: [
        "Equal means same members.",
        "Equivalent means same number of members.",
        "Intersection is the overlap; union is everything in the sets.",
      ],
    },
    subtopics: [
      {
        subtopicId: "p5-forming-comparing-sets",
        title: "1. Forming and comparing sets",
        modules: [
          {
            moduleId: "p5-set-meaning-types", imageUrl: "/images/math/p4-sets-common-members.svg", imageCaption: "Sets, equal/equivalent sets and common members.",
            title: "Sets, Equal Sets and Equivalent Sets",
            bigIdea: "A set must have a clear rule so that members can be listed correctly.",
            learnIt: [
              "Use curly brackets to list members, for example {a, e, i, o, u}.",
              "Equal sets have exactly the same members, even if the order is different.",
              "Equivalent sets have the same number of members, even when the members are different.",
            ],
            workedExample: {
              question: "Are {1, 2, 3} and {a, b, c} equal or equivalent?",
              steps: [
                "Count members in the first set: 3.",
                "Count members in the second set: 3.",
                "The members are not the same, but the number of members is the same.",
              ],
              answer: "They are equivalent sets, not equal sets.",
            },
            tryThis: {
              question: "Which pair of sets is equal?",
              choices: ["{2, 4, 6} and {6, 4, 2}", "{a, b} and {1, 2}", "{red} and {red, blue}", "{ } and {0}"],
              correct: 0,
              explanation: "Order does not matter; both sets have exactly the same members.",
            },
          },
        ],
      },
      {
        subtopicId: "p5-union-intersection-venn",
        title: "2. Union and intersection on Venn diagrams",
        modules: [
          {
            moduleId: "p5-venn-union-intersection", imageUrl: "/images/math/venn-diagram-4-regions.png", imageCaption: "Venn diagram regions for union and intersection.",
            title: "Reading Two-Set Venn Diagrams",
            bigIdea: "Venn diagrams show what belongs to only one set, both sets, or neither set.",
            learnIt: [
              "The middle overlap contains members in both sets. This is the intersection.",
              "The union contains everything inside either circle, but repeated members are written once.",
              "In word problems, fill the overlap first before finding only-left and only-right parts.",
            ],
            workedExample: {
              question: "In a class, 16 learners like mangoes, 12 like oranges and 5 like both. How many like only mangoes?",
              steps: [
                "Start with the mango group: 16 learners.",
                "Remove the overlap because 5 like both.",
                "Only mangoes = 16 - 5 = 11.",
              ],
              answer: "11 learners like only mangoes.",
            },
            tryThis: {
              question: "If 20 learners like football and 6 also like netball, how many like football only?",
              choices: ["14", "20", "26", "6"],
              correct: 0,
              explanation: "Football only = 20 - 6 = 14.",
            },
          },
        ],
      },
    ],
    quiz: [
      { q: "What is a set?", choices: ["A well-defined collection", "A random noise", "A type of road", "A clock"], correct: 0, why: "A set is a clear collection of objects or numbers." },
      { q: "Which sets are equivalent?", choices: ["{a, b, c} and {1, 2, 3}", "{a} and {a, b}", "{1, 2} and {1, 2, 3}", "{ } and {0}"], correct: 0, why: "Both sets have 3 members." },
      { q: "Find {2, 4} ∪ {4, 6}.", choices: ["{2, 4, 6}", "{4}", "{2, 6}", "{2, 4, 4, 6}"], correct: 0, why: "Union lists all members without repeating 4." },
      { q: "Find {2, 4, 6} ∩ {4, 6, 8}.", choices: ["{4, 6}", "{2, 8}", "{2, 4, 6, 8}", "{ }"], correct: 0, why: "4 and 6 are common to both sets." },
      { q: "An empty set has:", choices: ["no members", "one member", "two members", "all members"], correct: 0, why: "An empty set contains no members." },
      { q: "In a Venn diagram, the overlap means:", choices: ["members in both sets", "members in no set", "only the first set", "only the second set"], correct: 0, why: "The overlap is the intersection." },
    ],
  },
  {
    id: "p5-whole-numbers",
    themeId: "p5-theme-numeracy",
    themeName: "Numeracy",
    title: "Whole Numbers",
    estMinutes: 30,
    status: "published",
    reviewStatus: "beta",
    upperPrimaryLessons: P5_WHOLE_NUMBERS_V4,
    useOnlyV4Lessons: true,
    note: {
      intro: `${BETA_NOTICE} Whole numbers build the counting, reading and place-value skills needed for all later mathematics.`,
      learningObjectives: ["Read and write whole numbers up to 999,999.", "Find place value and value of digits.", "Round whole numbers to the nearest ten thousands.", "Read and write Roman numerals up to fifty."],
      whatYouNeedToKnow: ["Place value tells the position of a digit.", "Value tells how much a digit is worth.", "Rounding helps estimate numbers quickly.", "Roman numerals use letters such as I, V, X and L."],
      worked: { problem: "Find the value of 8 in 384,216.", steps: ["Locate the digit 8.", "It is in the ten thousands place.", "Value = 8 × 10,000 = 80,000."], answer: "80,000" },
      commonMistakes: ["Confusing place value with value.", "Forgetting commas when reading large numbers.", "Rounding from the wrong digit."],
      recap: ["Read numbers in groups.", "Use place-value columns.", "Check the next digit when rounding."],
    },
    subtopics: [
      { subtopicId: "p5-place-value-six-digits", title: "1. Place value up to 999,999", modules: [{ moduleId: "p5-six-digit-place-value", imageUrl: "/images/math/p4-place-value-chart.svg", imageCaption: "Place-value chart for large numbers.", title: "Six-Digit Numbers", bigIdea: "Digits become ten times larger as they move one place to the left.", learnIt: ["Place values include ones, tens, hundreds, thousands, ten thousands and hundred thousands.", "The value of a digit is digit times place value.", "Expanded form separates a number into the value of each digit."], workedExample: { question: "Write 425,306 in expanded form.", steps: ["4 is worth 400,000.", "2 is worth 20,000.", "5 is worth 5,000.", "3 is worth 300 and 6 is worth 6."], answer: "400,000 + 20,000 + 5,000 + 300 + 6" }, tryThis: { question: "What is the value of 7 in 572,914?", choices: ["70,000", "7,000", "700", "700,000"], correct: 0, explanation: "The 7 is in the ten thousands place." } }] },
      { subtopicId: "p5-rounding-roman", title: "2. Rounding and Roman numerals", modules: [{ moduleId: "p5-rounding-roman", title: "Rounding and Roman Numerals", bigIdea: "Rounding estimates values, while Roman numerals write numbers using letters.", learnIt: ["To round to the nearest 10,000, look at the thousands digit.", "If the next digit is 5 or more, round up; if less than 5, round down.", "Roman numerals up to 50 use I, V, X and L."], workedExample: { question: "Round 347,816 to the nearest ten thousand.", steps: ["The ten-thousands digit is 4.", "The thousands digit is 7.", "Since 7 is 5 or more, round up to 350,000."], answer: "350,000" }, tryThis: { question: "What is 40 in Roman numerals?", choices: ["XL", "XXXX", "LX", "VVVV"], correct: 0, explanation: "40 is written XL." } }] }
    ],
    quiz: [
      { q: "What is the value of 6 in 468,902?", choices: ["60,000", "6,000", "600", "600,000"], correct: 0, why: "6 is in the ten thousands place." },
      { q: "Round 82,415 to the nearest ten thousand.", choices: ["80,000", "82,000", "90,000", "100,000"], correct: 0, why: "The thousands digit is 2, so round down." },
      { q: "Which is the largest number?", choices: ["325,410", "324,999", "305,999", "320,999"], correct: 0, why: "325,410 has the greatest thousands value." },
      { q: "What is 50 in Roman numerals?", choices: ["L", "X", "V", "C"], correct: 0, why: "L represents 50." },
      { q: "Write 203,040 in words.", choices: ["Two hundred three thousand forty", "Twenty three thousand forty", "Two thousand thirty four", "Two hundred thirty thousand"], correct: 0, why: "203,040 is two hundred three thousand forty." },
      { q: "What is 90,000 + 4,000 + 50?", choices: ["94,050", "90,450", "94,500", "9,450"], correct: 0, why: "Add the values to get 94,050." },
    ],
  },
  {
    id: "p5-operations-whole-numbers",
    themeId: "p5-theme-numeracy",
    themeName: "Numeracy",
    title: "Operations on Whole Numbers",
    estMinutes: 32,
    status: "published",
    reviewStatus: "beta",
    upperPrimaryLessons: P5_OPERATIONS_V4,
    useOnlyV4Lessons: true,
    note: { intro: `${BETA_NOTICE} Operations help learners solve problems about totals, differences, equal groups and sharing.`, learningObjectives: ["Add, subtract, multiply and divide whole numbers.", "Solve word problems using the correct operation."], whatYouNeedToKnow: ["Addition combines quantities.", "Subtraction finds what is left or the difference.", "Multiplication uses equal groups.", "Division shares or groups equally."], worked: { problem: "A shop sold 235 books on Monday and 184 books on Tuesday. How many books were sold altogether?", steps: ["Add Monday and Tuesday sales.", "235 + 184 = 419."], answer: "419 books." }, recap: ["Align place values.", "Choose the operation before calculating.", "Check if your answer is reasonable."] },
    subtopics: [{ subtopicId: "p5-four-operations", title: "1. Four operations", modules: [{ moduleId: "p5-operation-choice", imageUrl: "/images/math/p4-four-operations.svg", imageCaption: "Choosing operations in word problems.", title: "Choosing the Correct Operation", bigIdea: "The story in a word problem tells which operation is needed.", learnIt: ["Words like altogether often suggest addition.", "Words like left, difference or more than often suggest subtraction.", "Equal groups suggest multiplication or division."], workedExample: { question: "12 boxes each contain 18 pencils. How many pencils are there?", steps: ["Each box has the same number.", "Use multiplication: 12 × 18.", "12 × 18 = 216."], answer: "216 pencils" }, tryThis: { question: "A farmer shares 96 oranges equally among 8 baskets. Which operation is needed?", choices: ["Division", "Addition", "Subtraction", "Rounding"], correct: 0, explanation: "Sharing equally uses division." } } , { moduleId: "p5-operation-checking", imageUrl: "/images/math/p4-four-operations.svg", imageCaption: "Checking operations with inverse operations.", title: "Checking Operation Answers", bigIdea: "A strong P5 learner checks answers using inverse operations and estimation.", learnIt: ["Check addition by subtracting one addend from the sum.", "Check subtraction by adding the difference to the smaller number.", "Check multiplication using division when possible.", "Estimate first to see if an answer is reasonable."], workedExample: { question: "Check 12 × 18 = 216.", steps: ["Use division to check multiplication.", "216 ÷ 12 = 18.", "The answer is reasonable."], answer: "12 × 18 = 216 is correct." }, tryThis: { question: "Which operation checks 420 ÷ 7 = 60?", choices: ["60 × 7", "60 - 7", "420 + 7", "7 - 60"], correct: 0, explanation: "Multiplication checks division." } }] }],
    quiz: [
      { q: "Find 4,816 + 2,309", choices: ["7,125", "6,125", "7,015", "2,507"], correct: 0, why: "Add in columns: 4,816 + 2,309 = 7,125." },
      { q: "Find 8,000 - 3,475", choices: ["4,525", "5,525", "4,625", "11,475"], correct: 0, why: "8,000 - 3,475 = 4,525." },
      { q: "Find 24 × 16", choices: ["384", "240", "264", "404"], correct: 0, why: "24 × 10 = 240 and 24 × 6 = 144; total = 384." },
      { q: "Find 144 ÷ 12", choices: ["12", "10", "14", "16"], correct: 0, why: "12 × 12 = 144." },
      { q: "A class has 38 boys and 42 girls. How many learners?", choices: ["80", "4", "70", "90"], correct: 0, why: "38 + 42 = 80." },
      { q: "A trader had 500 eggs and sold 175. How many remained?", choices: ["325", "675", "225", "375"], correct: 0, why: "500 - 175 = 325." },
    ],
  },
  {
    id: "p5-patterns-sequences",
    themeId: "p5-theme-numeracy",
    themeName: "Numeracy",
    title: "Patterns and Sequences",
    estMinutes: 25,
    status: "published",
    reviewStatus: "beta",
    upperPrimaryLessons: P5_PATTERNS_V4,
    useOnlyV4Lessons: true,
    note: { intro: `${BETA_NOTICE} Patterns help learners notice rules and predict the next numbers or shapes.`, learningObjectives: ["Identify number patterns.", "Find rules for sequences.", "Continue patterns correctly."], whatYouNeedToKnow: ["A sequence is an ordered list.", "A pattern has a rule.", "Rules may involve adding, subtracting, multiplying or alternating."], worked: { problem: "Find the next number: 4, 8, 12, 16, __", steps: ["Compare neighbouring numbers.", "Each number increases by 4.", "16 + 4 = 20."], answer: "20" }, recap: ["Look for the change between terms.", "Test the rule more than once.", "Use the rule to find missing terms."] },
    subtopics: [{ subtopicId: "p5-number-patterns", title: "1. Number patterns", modules: [{ moduleId: "p5-find-pattern-rule", imageUrl: "/images/math/p4-patterns-sequences.svg", imageCaption: "Finding rules in number patterns.", title: "Finding the Rule", bigIdea: "A pattern rule explains how one term changes to the next.", learnIt: ["Check whether the pattern adds or subtracts the same number.", "If not, check multiplication, division or alternating rules.", "Write the rule before finding the missing term."], workedExample: { question: "Find the missing number: 3, 6, 12, 24, __", steps: ["3 × 2 = 6.", "6 × 2 = 12.", "12 × 2 = 24, so 24 × 2 = 48."], answer: "48" }, tryThis: { question: "What comes next: 50, 45, 40, 35, __?", choices: ["30", "25", "40", "32"], correct: 0, explanation: "The pattern subtracts 5 each time." } } , { moduleId: "p5-pattern-word-problems", imageUrl: "/images/math/p4-patterns-sequences.svg", imageCaption: "Patterns in saving, seats and growing sequences.", title: "Pattern Word Problems", bigIdea: "Patterns can describe saving money, arranging seats or growing numbers.", learnIt: ["Find the change from term to term.", "Write the rule in words before calculating.", "Check the rule on at least two steps."], workedExample: { question: "A learner saves UGX 500, 1000, 1500, 2000. How much next?", steps: ["The amount increases by UGX 500 each time.", "2000 + 500 = 2500."], answer: "UGX 2,500" }, tryThis: { question: "What comes next: 7, 14, 21, 28?", choices: ["35", "30", "42", "21"], correct: 0, explanation: "The rule is add 7." } }] }],
    quiz: [
      { q: "What comes next: 2, 4, 6, 8, __?", choices: ["10", "9", "12", "6"], correct: 0, why: "The pattern adds 2." },
      { q: "What comes next: 5, 10, 20, 40, __?", choices: ["80", "60", "45", "100"], correct: 0, why: "Each term is multiplied by 2." },
      { q: "Find the missing number: 100, 90, 80, __, 60", choices: ["70", "75", "65", "50"], correct: 0, why: "The pattern subtracts 10." },
      { q: "Which sequence increases by 3?", choices: ["1, 4, 7, 10", "1, 3, 6, 10", "10, 7, 4, 1", "2, 4, 8, 16"], correct: 0, why: "Each term increases by 3." },
      { q: "What is the rule for 6, 12, 18, 24?", choices: ["Add 6", "Add 12", "Subtract 6", "Multiply by 6 each time"], correct: 0, why: "Each term is 6 more than the previous term." },
      { q: "What comes next: 1, 3, 6, 10, __?", choices: ["15", "14", "12", "20"], correct: 0, why: "The differences are +2, +3, +4, so next is +5." },
    ],
  },
  {
    id: "p5-fractions",
    themeId: "p5-theme-numeracy",
    themeName: "Numeracy",
    title: "Fractions",
    estMinutes: 30,
    status: "published",
    reviewStatus: "beta",
    upperPrimaryLessons: P5_FRACTIONS_V4,
    useOnlyV4Lessons: true,
    note: { intro: `${BETA_NOTICE} Fractions and decimal fractions show parts of a whole and prepare learners for upper-primary calculations.`, learningObjectives: ["Understand tenths and hundredths.", "Order decimal fractions.", "Convert decimals to vulgar fractions.", "Add and subtract decimal fractions."], whatYouNeedToKnow: ["Tenths are one-digit decimal parts.", "Hundredths are two-digit decimal parts.", "Place value is important when adding and subtracting decimals."], worked: { problem: "Add 2.35 + 1.40.", steps: ["Line up decimal points.", "Add hundredths, tenths and ones.", "2.35 + 1.40 = 3.75."], answer: "3.75" }, recap: ["Line up decimal points.", "Read decimal place values from left to right after the point.", "Convert decimals using tenths or hundredths." ] },
    subtopics: [{ subtopicId: "p5-decimal-fractions", title: "1. Decimal fractions", modules: [{ moduleId: "p5-tenths-hundredths-decimals", imageUrl: "/images/math/p5-decimal-place-value.svg", imageCaption: "Decimal place-value chart for tenths and hundredths.", title: "Tenths, Hundredths and Decimal Operations", bigIdea: "Decimals are fractions written using a decimal point.", learnIt: ["0.4 means four tenths or 4/10.", "0.25 means twenty-five hundredths or 25/100.", "When adding decimals, write decimal points under each other."], workedExample: { question: "Convert 0.6 to a vulgar fraction.", steps: ["0.6 means 6 tenths.", "Write 6/10.", "Simplify 6/10 to 3/5."], answer: "3/5" }, tryThis: { question: "What is 0.25 as a fraction?", choices: ["25/100", "25/10", "2/5", "1/25"], correct: 0, explanation: "0.25 means 25 hundredths." } } , { moduleId: "p5-decimals-money", title: "Decimals in Money and Measurement", bigIdea: "Decimals help us write parts of a unit in money and measurement problems.", imageUrl: "/images/math/p5-decimal-place-value.svg", imageCaption: "Tenths and hundredths place-value reminder.", learnIt: ["0.5 means five tenths.", "0.75 means seventy-five hundredths.", "Line up decimal points before adding or subtracting decimals."], workedExample: { question: "Add 3.50 + 2.25.", steps: ["Line up decimal points.", "Add hundredths, tenths and ones.", "3.50 + 2.25 = 5.75."], answer: "5.75" }, tryThis: { question: "Which is greater?", choices: ["0.8", "0.45", "0.08", "0.4"], correct: 0, explanation: "0.8 = 0.80, which is greater than 0.45." } }] }],
    quiz: [
      { q: "What is 0.7 as a fraction?", choices: ["7/10", "7/100", "70/10", "1/7"], correct: 0, why: "0.7 means seven tenths." },
      { q: "Add 1.25 + 2.30", choices: ["3.55", "3.45", "2.55", "4.55"], correct: 0, why: "Line up decimals: 1.25 + 2.30 = 3.55." },
      { q: "Subtract 5.80 - 2.40", choices: ["3.40", "3.20", "2.40", "4.20"], correct: 0, why: "5.80 - 2.40 = 3.40." },
      { q: "Which is greater: 0.6 or 0.45?", choices: ["0.6", "0.45", "They are equal", "Cannot tell"], correct: 0, why: "0.6 = 0.60, which is greater than 0.45." },
      { q: "Write 0.03 in words.", choices: ["three hundredths", "three tenths", "thirty tenths", "three wholes"], correct: 0, why: "0.03 has 3 in the hundredths place." },
      { q: "Arrange ascending: 0.5, 0.25, 0.75", choices: ["0.25, 0.5, 0.75", "0.75, 0.5, 0.25", "0.5, 0.25, 0.75", "0.25, 0.75, 0.5"], correct: 0, why: "0.25 is smallest, then 0.5, then 0.75." },
    ],
  },
  {
    id: "p5-lines-angles-geometrical-figures",
    themeId: "p5-theme-geometry",
    themeName: "Geometry",
    title: "Lines, Angles and Geometrical Figures",
    estMinutes: 35,
    status: "published",
    reviewStatus: "beta",
    upperPrimaryLessons: P5_GEOMETRY_V4,
    useOnlyV4Lessons: true,
    note: { intro: `${BETA_NOTICE} Geometry helps learners draw, measure and describe shapes accurately.`, learningObjectives: ["Draw and identify parallel and perpendicular lines.", "Draw and measure angles.", "Construct circles and regular hexagons.", "Identify folding symmetry, rotations and revolutions."], whatYouNeedToKnow: ["Parallel lines never meet.", "Perpendicular lines meet at right angles.", "A circle is drawn using a compass.", "Symmetry means two matching halves."], worked: { problem: "Name two examples of parallel lines in a classroom.", steps: ["Look for lines that run in the same direction.", "Edges of a ruler are parallel.", "Opposite edges of a rectangular desk are parallel."], answer: "Edges of a ruler and opposite edges of a desk are examples." }, recap: ["Use a ruler and compass carefully.", "Right angles are 90 degrees.", "Symmetry creates matching halves." ] },
    subtopics: [{ subtopicId: "p5-lines-angles-shapes", title: "1. Lines, angles and shapes", modules: [{ moduleId: "p5-parallel-perpendicular-angles", imageUrl: "/images/math/2d-geometry-perimeter-area.svg", imageCaption: "Geometry diagram for lines, angles and flat shapes.", title: "Parallel, Perpendicular and Angles", bigIdea: "Geometry starts with lines and angles drawn accurately.", learnIt: ["Parallel lines are always the same distance apart.", "Perpendicular lines meet at 90 degrees.", "Use a protractor to measure angles and a compass to draw circles."], workedExample: { question: "What is special about perpendicular lines?", steps: ["They meet each other.", "They form a right angle.", "A right angle is 90 degrees."], answer: "They meet at 90 degrees." }, tryThis: { question: "Parallel lines:", choices: ["do not meet", "always meet", "form a circle", "are always curved"], correct: 0, explanation: "Parallel lines do not meet." } } , { moduleId: "p5-geometry-construction-care", title: "Constructing Shapes Carefully", bigIdea: "Good geometry work is neat, measured and labelled.", imageUrl: "/images/math/2d-geometry-perimeter-area.svg", imageCaption: "2-D geometry reminder for lines, angles, perimeter and area.", learnIt: ["Use a sharp pencil and ruler for straight lines.", "Use a compass to draw circles.", "Label angles and shapes clearly."], workedExample: { question: "Why should a learner use a ruler when drawing a rectangle?", steps: ["A rectangle has straight sides.", "A ruler helps draw straight accurate sides."], answer: "A ruler makes the rectangle straight and accurate." }, tryThis: { question: "Which tool draws a circle accurately?", choices: ["compass", "spoon", "clock", "scale pan"], correct: 0, explanation: "A compass draws circles." } }] }],
    quiz: [
      { q: "Parallel lines are lines that:", choices: ["do not meet", "meet at 90 degrees", "form circles", "are always short"], correct: 0, why: "Parallel lines never meet." },
      { q: "Perpendicular lines meet at:", choices: ["90 degrees", "45 degrees", "180 degrees", "360 degrees"], correct: 0, why: "Perpendicular lines form right angles." },
      { q: "Which instrument draws circles?", choices: ["Compass", "Ruler only", "Eraser", "Chalk box"], correct: 0, why: "A compass is used to draw circles." },
      { q: "A line of symmetry divides a shape into:", choices: ["two matching halves", "three unequal parts", "only circles", "no parts"], correct: 0, why: "Symmetry creates matching halves." },
      { q: "A complete revolution is:", choices: ["one full turn", "half a turn", "no turn", "a straight line"], correct: 0, why: "A revolution is a full turn around a point." },
      { q: "A regular hexagon has:", choices: ["6 equal sides", "5 equal sides", "4 sides", "3 sides"], correct: 0, why: "A hexagon has 6 sides; regular means all sides are equal." },
    ],
  },
  {
    id: "p5-data-handling",
    themeId: "p5-theme-graphs-data",
    themeName: "Interpretation of Graphs and Data",
    title: "Data Handling",
    estMinutes: 28,
    status: "published",
    reviewStatus: "beta",
    upperPrimaryLessons: P5_DATA_HANDLING_V4,
    useOnlyV4Lessons: true,
    note: { intro: `${BETA_NOTICE} Graphs help learners present and interpret information clearly.`, learningObjectives: ["Read graph scales.", "Interpret bar and line graphs.", "Find averages from data."], whatYouNeedToKnow: ["Graphs have titles, labels and scales.", "Bar graphs compare amounts.", "Line graphs show changes.", "Average is total divided by number of items."], worked: { problem: "Find the average of 6, 8 and 10.", steps: ["Add the values: 6 + 8 + 10 = 24.", "There are 3 values.", "24 ÷ 3 = 8."], answer: "8" }, recap: ["Read the scale before answering.", "Use data to compare amounts.", "Average = total ÷ number of values." ] },
    subtopics: [{ subtopicId: "p5-graphs-average", title: "1. Graphs and average", modules: [{ moduleId: "p5-read-graphs-average", imageUrl: "/images/math/p5-data-bar-line-graphs.svg", imageCaption: "Data-handling diagram for reading graphs and averages.", title: "Reading Graphs and Finding Average", bigIdea: "Data becomes useful when learners can read it and summarise it.", learnIt: ["A graph title tells what the graph is about.", "The vertical axis scale may count in 1s, 2s, 5s or 10s.", "Average is found by adding values and dividing by how many values there are."], workedExample: { question: "A graph shows 10 mangoes on Monday, 15 on Tuesday and 20 on Wednesday. Find the average.", steps: ["Add: 10 + 15 + 20 = 45.", "There are 3 days.", "45 ÷ 3 = 15."], answer: "15 mangoes." }, tryThis: { question: "Find the average of 4, 6 and 8.", choices: ["6", "18", "4", "8"], correct: 0, explanation: "4 + 6 + 8 = 18; 18 ÷ 3 = 6." } } , { moduleId: "p5-data-stories", title: "Data Stories", bigIdea: "A graph should help a learner explain what happened, not just read numbers.", imageUrl: "/images/math/p5-data-bar-line-graphs.svg", imageCaption: "Graph types and tally reminders.", learnIt: ["Read the title first.", "Check the scale before reading values.", "Use words like highest, lowest, total and average in explanations."], workedExample: { question: "A bar graph shows 8, 12 and 10 books read. Find the total.", steps: ["Add all values.", "8 + 12 + 10 = 30."], answer: "30 books" }, tryThis: { question: "The highest bar shows:", choices: ["the greatest value", "the title", "the key only", "nothing"], correct: 0, explanation: "The tallest bar represents the greatest value." } }] }],
    quiz: [
      { q: "A bar graph is mainly used to:", choices: ["compare amounts", "boil water", "show only prayers", "measure height directly"], correct: 0, why: "Bar graphs compare quantities." },
      { q: "Find the average of 5, 7 and 9.", choices: ["7", "21", "9", "5"], correct: 0, why: "5 + 7 + 9 = 21; 21 ÷ 3 = 7." },
      { q: "A graph scale counts by 5. The bar reaches the 6th mark. What value is it?", choices: ["30", "11", "6", "60"], correct: 0, why: "6 × 5 = 30." },
      { q: "A line graph is useful for showing:", choices: ["change over time", "only names", "only spelling", "only shapes"], correct: 0, why: "Line graphs show how values change." },
      { q: "Which should you read first on a graph?", choices: ["title", "shoe size", "last word only", "nothing"], correct: 0, why: "The title tells what the graph is about." },
      { q: "Find the total of 12, 8 and 10.", choices: ["30", "20", "24", "40"], correct: 0, why: "12 + 8 + 10 = 30." },
    ],
  },
  {
    id: "p5-time",
    themeId: "p5-theme-measurement",
    themeName: "Measurements",
    title: "Time",
    estMinutes: 28,
    status: "published",
    reviewStatus: "beta",
    upperPrimaryLessons: P5_TIME_V4,
    useOnlyV4Lessons: true,
    note: { intro: `${BETA_NOTICE} Time helps learners read clocks, find duration and solve time-distance-speed problems.`, learningObjectives: ["Tell time on the 12-hour clock.", "Convert hours and minutes.", "Find duration.", "Solve simple time, distance and speed problems."], whatYouNeedToKnow: ["1 hour = 60 minutes.", "a.m. is before noon; p.m. is after noon.", "Duration is the time between a start and an end."], worked: { problem: "Find the duration from 8:30 a.m. to 10:00 a.m.", steps: ["8:30 to 9:30 is 1 hour.", "9:30 to 10:00 is 30 minutes."], answer: "1 hour 30 minutes." }, recap: ["Use 60 minutes in one hour.", "Count forward to find duration.", "Read a.m. and p.m. carefully." ] },
    subtopics: [{ subtopicId: "p5-time-duration-speed", title: "1. Time, duration and speed", modules: [{ moduleId: "p5-time-problems", imageUrl: "/images/math/time-clock-duration.svg", imageCaption: "Clock and duration diagram for time problems.", title: "Practical Time Problems", bigIdea: "Time questions are easiest when learners count forward in steps.", learnIt: ["Use clock faces to practise minutes past and minutes to.", "Break duration into easy parts, such as to the next hour, then to the finish time.", "Speed, distance and time are related in simple travel problems."], workedExample: { question: "A journey begins at 2:15 p.m. and ends at 3:05 p.m. How long is it?", steps: ["2:15 to 3:00 = 45 minutes.", "3:00 to 3:05 = 5 minutes.", "Total = 50 minutes."], answer: "50 minutes" }, tryThis: { question: "How many minutes are in 3 hours?", choices: ["180", "120", "60", "300"], correct: 0, explanation: "3 × 60 = 180 minutes." } } , { moduleId: "p5-timetable-planning", title: "Timetable Planning", bigIdea: "Time skills help learners plan study, travel and daily routines.", imageUrl: "/images/math/time-clock-duration.svg", imageCaption: "Clock and duration reminders.", learnIt: ["Break long durations into smaller parts.", "Use calendars for days and months.", "Write a.m. and p.m. carefully."], workedExample: { question: "A revision starts at 4:20 p.m. and lasts 40 minutes. When does it end?", steps: ["4:20 plus 40 minutes reaches 5:00.", "Keep p.m. because it is afternoon/evening."], answer: "5:00 p.m." }, tryThis: { question: "30 minutes after 8:45 is:", choices: ["9:15", "8:15", "9:45", "10:15"], correct: 0, explanation: "8:45 + 15 minutes = 9:00, plus 15 = 9:15." } }] }],
    quiz: [
      { q: "How many minutes are in 2 hours?", choices: ["120", "60", "100", "200"], correct: 0, why: "2 × 60 = 120." },
      { q: "Find duration from 9:00 a.m. to 11:30 a.m.", choices: ["2 h 30 min", "1 h 30 min", "3 h", "30 min"], correct: 0, why: "9:00 to 11:00 is 2 hours, then 30 minutes." },
      { q: "Which comes after 11:59 a.m.?", choices: ["12:00 noon", "12:00 midnight", "10:00 a.m.", "1:00 a.m."], correct: 0, why: "After 11:59 a.m. comes 12:00 noon." },
      { q: "A car travels 60 km in 2 hours. What is its speed?", choices: ["30 km/h", "62 km/h", "120 km/h", "58 km/h"], correct: 0, why: "Speed = distance ÷ time = 60 ÷ 2 = 30 km/h." },
      { q: "What does p.m. mean?", choices: ["after noon", "before noon", "midnight only", "morning only"], correct: 0, why: "p.m. is used after noon." },
      { q: "How many seconds are in 1 minute?", choices: ["60", "100", "30", "24"], correct: 0, why: "1 minute = 60 seconds." },
    ],
  },
  {
    id: "p5-money",
    themeId: "p5-theme-measurement",
    themeName: "Measurements",
    title: "Money",
    estMinutes: 25,
    status: "published",
    reviewStatus: "beta",
    upperPrimaryLessons: P5_MONEY_V4,
    useOnlyV4Lessons: true,
    note: { intro: `${BETA_NOTICE} Money helps learners solve real-life buying, selling, profit and loss problems.`, learningObjectives: ["Use Uganda currency in calculations.", "Find cost, price and change.", "Compute simple profit and loss."], whatYouNeedToKnow: ["Cost price is buying price.", "Selling price is the price an item is sold for.", "Profit occurs when selling price is greater than cost price; loss occurs when selling price is less."], worked: { problem: "A trader buys a basket for UGX 8,000 and sells it for UGX 10,000. Find the profit.", steps: ["Profit = selling price - cost price.", "10,000 - 8,000 = 2,000."], answer: "UGX 2,000 profit." }, recap: ["Profit = SP - CP.", "Loss = CP - SP.", "Change = money paid - cost." ] },
    subtopics: [{ subtopicId: "p5-money-profit-loss", title: "1. Buying, selling, profit and loss", modules: [{ moduleId: "p5-money-market", imageUrl: "/images/math/p4-money-profit-loss.svg", imageCaption: "Buying, selling, change, profit and loss.", title: "Market Money Problems", bigIdea: "Money maths becomes clear when learners identify cost price, selling price and change.", learnIt: ["Use UGX in money answers.", "If selling price is higher than cost price, there is profit.", "If selling price is lower than cost price, there is loss."], workedExample: { question: "A pencil costs UGX 700. A learner pays UGX 1,000. Find the change.", steps: ["Change = money paid - cost.", "1,000 - 700 = 300."], answer: "UGX 300" }, tryThis: { question: "A book bought at UGX 5,000 is sold at UGX 4,000. What happened?", choices: ["Loss of UGX 1,000", "Profit of UGX 1,000", "No change", "Profit of UGX 9,000"], correct: 0, explanation: "The selling price is lower than the cost price by UGX 1,000." } } , { moduleId: "p5-money-checking", imageUrl: "/images/math/p4-money-profit-loss.svg", imageCaption: "Checking money calculations.", title: "Checking Money Work", bigIdea: "Money answers should be checked because small mistakes can change profit or loss.", learnIt: ["Write UGX or shillings in answers.", "Check change by adding change to cost.", "Check profit by adding profit to cost price."], workedExample: { question: "A bag bought at UGX 8,000 is sold at UGX 9,500. Find and check profit.", steps: ["Profit = 9,500 - 8,000 = 1,500.", "Check: 8,000 + 1,500 = 9,500."], answer: "Profit = UGX 1,500" }, tryThis: { question: "CP UGX 4,000, SP UGX 3,500 means:", choices: ["loss of UGX 500", "profit of UGX 500", "profit of UGX 7,500", "no change"], correct: 0, explanation: "Selling price is lower by UGX 500." } }] }],
    quiz: [
      { q: "A bag costs UGX 12,000. You pay UGX 20,000. Find the change.", choices: ["UGX 8,000", "UGX 32,000", "UGX 12,000", "UGX 2,000"], correct: 0, why: "20,000 - 12,000 = 8,000." },
      { q: "Cost price is:", choices: ["buying price", "selling price", "profit", "change"], correct: 0, why: "Cost price is the price at which something is bought." },
      { q: "Selling price is greater than cost price. This gives:", choices: ["profit", "loss", "debt", "change only"], correct: 0, why: "Profit occurs when SP > CP." },
      { q: "Find profit: CP = UGX 6,000, SP = UGX 7,500.", choices: ["UGX 1,500", "UGX 13,500", "UGX 500", "UGX 7,500"], correct: 0, why: "7,500 - 6,000 = 1,500." },
      { q: "Find loss: CP = UGX 9,000, SP = UGX 7,000.", choices: ["UGX 2,000", "UGX 16,000", "UGX 7,000", "UGX 9,000"], correct: 0, why: "9,000 - 7,000 = 2,000." },
      { q: "Which is Uganda currency?", choices: ["shilling", "dollar only", "pound only", "yen only"], correct: 0, why: "Uganda uses shillings." },
    ],
  },
  {
    id: "p5-length-mass-capacity",
    themeId: "p5-theme-measurement",
    themeName: "Measurements",
    title: "Length, Mass and Capacity",
    estMinutes: 32,
    status: "published",
    reviewStatus: "beta",
    upperPrimaryLessons: P5_MEASUREMENT_MATH_V4,
    useOnlyV4Lessons: true,
    note: { intro: `${BETA_NOTICE} Length, mass and capacity help learners measure accurately and solve practical problems.`, learningObjectives: ["Convert mm, cm and m.", "Find perimeter and area.", "Convert kg and g.", "Convert litres and millilitres."], whatYouNeedToKnow: ["10 mm = 1 cm and 100 cm = 1 m.", "1000 g = 1 kg.", "1000 ml = 1 litre.", "Perimeter is distance around; area is surface covered."], worked: { problem: "Convert 4 kg to grams.", steps: ["1 kg = 1000 g.", "4 × 1000 = 4000."], answer: "4000 g" }, recap: ["Write units.", "Use correct conversion facts.", "Area uses square units." ] },
    subtopics: [{ subtopicId: "p5-measurement-units", title: "1. Measuring length, mass and capacity", modules: [{ moduleId: "p5-conversions-area", imageUrl: "/images/math/measurement-units.svg", imageCaption: "Measurement units and conversion reminders.", title: "Conversions, Perimeter and Area", bigIdea: "Measurement problems need correct units before calculation.", learnIt: ["Convert metres to centimetres by multiplying by 100.", "Convert kilograms to grams by multiplying by 1000.", "Area of a rectangle = length × width."], workedExample: { question: "Find the area of a rectangle 8 cm long and 3 cm wide.", steps: ["Area = length × width.", "8 × 3 = 24."], answer: "24 cm²" }, tryThis: { question: "Convert 2 litres to millilitres.", choices: ["2000 ml", "200 ml", "20 ml", "2 ml"], correct: 0, explanation: "1 litre = 1000 ml." } } , { moduleId: "p5-unit-choice", title: "Choosing Sensible Units", bigIdea: "Correct units make measurement answers meaningful.", imageUrl: "/images/math/measurement-units.svg", imageCaption: "Measurement units and instruments.", learnIt: ["Use kilometres for long distances.", "Use centimetres or metres for classroom lengths.", "Use litres/millilitres for capacity and kilograms/grams for mass."], workedExample: { question: "Which unit is sensible for the distance from Kampala to Gulu?", steps: ["It is a long distance between towns.", "Long distances are measured in kilometres."], answer: "Kilometres" }, tryThis: { question: "Best unit for a cup of water is:", choices: ["millilitres", "kilometres", "kilograms", "hectares"], correct: 0, explanation: "Cup capacity can be measured in millilitres." } }] }],
    quiz: [
      { q: "Convert 3 m to cm.", choices: ["300 cm", "30 cm", "3000 cm", "3 cm"], correct: 0, why: "1 m = 100 cm." },
      { q: "Convert 5 kg to grams.", choices: ["5000 g", "500 g", "50 g", "5 g"], correct: 0, why: "1 kg = 1000 g." },
      { q: "Convert 4 litres to ml.", choices: ["4000 ml", "400 ml", "40 ml", "4 ml"], correct: 0, why: "1 litre = 1000 ml." },
      { q: "Find the perimeter of a square of side 9 cm.", choices: ["36 cm", "18 cm", "81 cm", "27 cm"], correct: 0, why: "4 × 9 = 36 cm." },
      { q: "Find the area of a rectangle 7 cm by 5 cm.", choices: ["35 cm²", "24 cm²", "12 cm²", "30 cm²"], correct: 0, why: "7 × 5 = 35 cm²." },
      { q: "Which unit measures capacity?", choices: ["litre", "kilogram", "metre", "degree"], correct: 0, why: "Capacity is commonly measured in litres and millilitres." },
    ],
  },
  {
    id: "p5-integers",
    themeId: "p5-theme-numeracy",
    themeName: "Numeracy",
    title: "Integers",
    estMinutes: 24,
    status: "published",
    reviewStatus: "beta",
    upperPrimaryLessons: P5_INTEGERS_V4,
    useOnlyV4Lessons: true,
    note: { intro: `${BETA_NOTICE} Integers introduce learners to positive and negative numbers used in real-life situations.`, learningObjectives: ["Recognise positive and negative numbers.", "Order integers on a number line.", "Use integers in simple real-life contexts."], whatYouNeedToKnow: ["Positive numbers are greater than zero.", "Negative numbers are less than zero.", "A number further right on the number line is greater."], worked: { problem: "Which is greater: -2 or -6?", steps: ["Draw a number line.", "-2 is to the right of -6.", "The number to the right is greater."], answer: "-2 is greater." }, recap: ["Zero is neither positive nor negative.", "Negative numbers get smaller as they move left.", "Use number lines for comparison." ] },
    subtopics: [{ subtopicId: "p5-integer-number-line", title: "1. Integers on a number line", modules: [{ moduleId: "p5-positive-negative", imageUrl: "/images/math/p5-integer-number-line.svg", imageCaption: "Positive and negative numbers on a number line.", title: "Positive and Negative Numbers", bigIdea: "Integers can show gains, losses, temperatures and positions around zero.", learnIt: ["Numbers above zero are positive.", "Numbers below zero are negative.", "Zero separates positive and negative numbers."], workedExample: { question: "Arrange -3, 2, 0 and -1 from smallest to greatest.", steps: ["Place them on a number line.", "Read from left to right."], answer: "-3, -1, 0, 2" }, tryThis: { question: "Which is smallest?", choices: ["-5", "-1", "0", "3"], correct: 0, explanation: "-5 is furthest left." } } , { moduleId: "p5-integers-real-life", imageUrl: "/images/math/p5-integer-number-line.svg", imageCaption: "Integers in gains, losses and debts.", title: "Integers in Real Life", bigIdea: "Positive and negative numbers describe gains, losses and positions around zero.", learnIt: ["A gain can be positive.", "A debt or loss can be negative.", "A number line helps compare negative numbers."], workedExample: { question: "A team loses 3 points. Write the integer.", steps: ["Loss means negative.", "The amount is 3."], answer: "-3" }, tryThis: { question: "A debt of UGX 2,000 can be shown as:", choices: ["-2000", "+2000", "0", "200"], correct: 0, explanation: "A debt is negative." } }] }],
    quiz: [
      { q: "Which number is negative?", choices: ["-4", "4", "0", "8"], correct: 0, why: "-4 is less than zero." },
      { q: "Which is greater: -1 or -5?", choices: ["-1", "-5", "They are equal", "Cannot tell"], correct: 0, why: "-1 is to the right of -5." },
      { q: "Arrange from smallest: -2, 0, 3", choices: ["-2, 0, 3", "3, 0, -2", "0, -2, 3", "-2, 3, 0"], correct: 0, why: "Numbers increase from left to right." },
      { q: "A temperature is 3 degrees below zero. It is written as:", choices: ["-3", "+3", "0", "30"], correct: 0, why: "Below zero is negative." },
      { q: "Zero is:", choices: ["neither positive nor negative", "always negative", "always positive", "less than all negatives"], correct: 0, why: "Zero separates positives and negatives." },
      { q: "Which number is furthest left on a number line?", choices: ["-7", "-2", "0", "1"], correct: 0, why: "-7 is smaller than -2, 0 and 1." },
    ],
  },
  {
    id: "p5-algebra",
    themeId: "p5-theme-algebra",
    themeName: "Algebra",
    title: "Algebra",
    estMinutes: 24,
    status: "published",
    reviewStatus: "beta",
    upperPrimaryLessons: P5_ALGEBRA_V4,
    useOnlyV4Lessons: true,
    note: { intro: `${BETA_NOTICE} Algebra introduces unknown values and prepares learners for upper-primary equations.`, learningObjectives: ["Understand simple algebraic statements.", "Find unknown values.", "Solve simple equations."], whatYouNeedToKnow: ["A letter or box can stand for an unknown number.", "Use inverse operations to find the missing value.", "Check by putting the answer back into the number sentence."], worked: { problem: "Solve: x + 8 = 20.", steps: ["Subtract 8 from 20.", "20 - 8 = 12."], answer: "x = 12" }, recap: ["Unknowns can be letters or boxes.", "Undo the operation to find the unknown.", "Check your answer." ] },
    subtopics: [{ subtopicId: "p5-simple-equations", title: "1. Simple equations", modules: [{ moduleId: "p5-finding-unknown", imageUrl: "/images/math/p4-equations-boxes.svg", imageCaption: "Finding unknown values in equations.", title: "Finding Unknown Values", bigIdea: "A simple equation can be solved by undoing the operation.", learnIt: ["For x + 5 = 13, subtract 5 from 13.", "For x - 4 = 9, add 4 to 9.", "For 3 × x = 18, divide 18 by 3."], workedExample: { question: "Solve: 4 × y = 28.", steps: ["Undo multiplication by division.", "28 ÷ 4 = 7."], answer: "y = 7" }, tryThis: { question: "Solve: x - 6 = 10", choices: ["16", "4", "10", "6"], correct: 0, explanation: "Add 6 to both sides." } } , { moduleId: "p5-equation-checking", imageUrl: "/images/math/p4-equations-boxes.svg", imageCaption: "Checking simple equations.", title: "Checking Simple Equations", bigIdea: "An equation answer is only complete after it is checked in the original sentence.", learnIt: ["Find the unknown using inverse operations.", "Put the answer back into the original equation.", "If both sides match, the answer is correct."], workedExample: { question: "Check y = 7 in 4 × y = 28.", steps: ["Substitute y with 7.", "4 × 7 = 28.", "The left side equals the right side."], answer: "y = 7 is correct." }, tryThis: { question: "Check x = 9 in x + 6 = 15.", choices: ["correct", "wrong", "x is 6", "x is 15"], correct: 0, explanation: "9 + 6 = 15." } }] }],
    quiz: [
      { q: "Solve: x + 7 = 19", choices: ["12", "26", "7", "19"], correct: 0, why: "19 - 7 = 12." },
      { q: "Solve: y - 5 = 11", choices: ["16", "6", "55", "11"], correct: 0, why: "Add 5 to 11." },
      { q: "Solve: 3 × n = 21", choices: ["7", "18", "24", "63"], correct: 0, why: "21 ÷ 3 = 7." },
      { q: "A box plus 4 equals 13. What is the box?", choices: ["9", "17", "4", "13"], correct: 0, why: "13 - 4 = 9." },
      { q: "Which can represent an unknown number?", choices: ["x", "only 100", "a comma", "a full stop"], correct: 0, why: "A letter can stand for an unknown number." },
      { q: "Check x = 5 in x + 3 = 8.", choices: ["correct", "wrong", "cannot tell", "x is 8"], correct: 0, why: "5 + 3 = 8." },
    ],
  },
];

const P5_MATH_TERMS = {
  "p5-set-concepts": "Term I" as const,
  "p5-whole-numbers": "Term I" as const,
  "p5-operations-whole-numbers": "Term I" as const,
  "p5-patterns-sequences": "Term I" as const,
  "p5-fractions": "Term II" as const,
  "p5-integers": "Term III" as const,
  "p5-lines-angles-geometrical-figures": "Term II" as const,
  "p5-data-handling": "Term II" as const,
  "p5-time": "Term II" as const,
  "p5-money": "Term III" as const,
  "p5-length-mass-capacity": "Term III" as const,
  "p5-algebra": "Term III" as const
};

export const P5_MATH_TOPICS: Topic[] = balanceTopicAnswers(addUpperPrimaryMathV4(P5_MATH_TOPIC_DATA, "P5", P5_MATH_TERMS));

export function getP5MathTopic(id: string): Topic | undefined {
  return P5_MATH_TOPICS.find((topic) => topic.id === id);
}
