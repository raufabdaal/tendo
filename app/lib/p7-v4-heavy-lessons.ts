import type { ExerciseBlock, UpperPrimaryContentBlock, UpperPrimaryLesson } from "@/lib/content-blocks";
import type { Topic } from "@/lib/topics";
import {
  P7_ENGLISH_HEAVY_V4_WAVE2,
  P7_MATH_HEAVY_V4_WAVE2,
  P7_SCIENCE_HEAVY_V4_WAVE2,
  P7_SOCIAL_HEAVY_V4_WAVE2,
} from "@/lib/p7-v4-heavy-lessons-wave2";
import { P7_MATH_HEAVY_V4_WAVE3 } from "@/lib/p7-v4-heavy-lessons-wave3";

type P7Subject = UpperPrimaryLesson["subject"];
type TermName = UpperPrimaryLesson["term"];
type ExerciseQuestion = ExerciseBlock["questions"][number];

type RichLessonSpec = {
  id: string;
  term: TermName;
  subject: P7Subject;
  topicTitle: string;
  subTopicTitle: string;
  lessonTitle: string;
  termLabel?: string;
  definition: string;
  simpleCheck?: string;
  categoryTitle?: string;
  categories: Array<{ name: string; definition: string; examples: string[]; notes?: string[] }>;
  examplesTitle?: string;
  examples: Array<{ name: string; explanation: string; localContext?: string }>;
  factsTitle?: string;
  facts: string[];
  image?: { title: string; imageUrl: string; caption: string; labels?: string[] };
  worked?: { question: string; steps: string[]; answer: string };
  activity?: { title: string; instructions: string[]; safetyNote?: string };
  questions: ExerciseQuestion[];
};

const short = (prompt: string, answer?: string): ExerciseQuestion => ({ type: "short-answer", prompt, answer });
const written = (prompt: string, answer?: string): ExerciseQuestion => ({ type: "written", prompt, answer });
const mc = (prompt: string, choices: string[], answer: string): ExerciseQuestion => ({ type: "multiple-choice", prompt, choices, answer });

function lesson(spec: RichLessonSpec): UpperPrimaryLesson {
  const blocks: UpperPrimaryContentBlock[] = [
    {
      kind: "definition",
      term: spec.subTopicTitle,
      definition: spec.definition,
      simpleCheck: spec.simpleCheck,
    },
    {
      kind: "categories",
      title: spec.categoryTitle ?? "Types / classifications / key ideas",
      categories: spec.categories,
    },
    {
      kind: "examples",
      title: spec.examplesTitle ?? "Examples and illustrations",
      examples: spec.examples,
    },
    {
      kind: "characteristics",
      title: spec.factsTitle ?? "Facts to remember",
      points: spec.facts,
    },
  ];

  if (spec.image) {
    blocks.push({
      kind: "diagram",
      title: spec.image.title,
      imageUrl: spec.image.imageUrl,
      caption: spec.image.caption,
      labels: spec.image.labels,
    });
  }

  if (spec.worked) {
    blocks.push({
      kind: "worked-example",
      question: spec.worked.question,
      steps: spec.worked.steps,
      answer: spec.worked.answer,
    });
  }

  if (spec.activity) {
    blocks.push({
      kind: "activity",
      title: spec.activity.title,
      instructions: spec.activity.instructions,
      safetyNote: spec.activity.safetyNote,
    });
  }

  blocks.push({
    kind: "exercise",
    title: "Evaluation",
    questions: spec.questions,
  });

  return {
    id: spec.id,
    classLevel: "P7",
    term: spec.term,
    curriculumMode: "subject",
    subject: spec.subject,
    topicTitle: spec.topicTitle,
    subTopicTitle: spec.subTopicTitle,
    lessonTitle: spec.lessonTitle,
    blocks,
  };
}

function applyHeavyV4(topics: Topic[], overrides: Record<string, UpperPrimaryLesson[]>): Topic[] {
  return topics.map((topic) => {
    const upperPrimaryLessons = overrides[topic.id];
    if (!upperPrimaryLessons) return topic;
    return {
      ...topic,
      contentFormat: "upper-primary-v4" as const,
      upperPrimaryLessons,
      useOnlyV4Lessons: true,
    };
  });
}

const P7_MATH_HEAVY_V4: Record<string, UpperPrimaryLesson[]> = {
  "set-concepts": [
    lesson({
      id: "p7-set-concepts-types-notation-heavy-v4",
      term: "Term I",
      subject: "Mathematics",
      topicTitle: "Set Concepts",
      subTopicTitle: "Types of Sets and Set Notation",
      lessonTitle: "Types of Sets and Set Notation",
      definition: "A set is a well-defined collection of different objects, numbers or items called elements. In P7, set notation helps learners write members, compare sets and solve Venn diagram problems accurately.",
      simpleCheck: "A group is a set only when the rule for membership is clear.",
      categories: [
        { name: "Finite set", definition: "a set whose members can be counted and have an end", examples: ["{2, 4, 6, 8}", "days of the week", "districts in a region"] },
        { name: "Infinite set", definition: "a set whose members continue without ending", examples: ["{1, 2, 3, 4, ...}", "multiples of 5", "counting numbers"] },
        { name: "Empty set", definition: "a set with no members", examples: ["set of months with 32 days", "set of prime numbers divisible by 4"], notes: ["It is written as ∅ or { }."] },
        { name: "Equal and equivalent sets", definition: "equal sets have the same members; equivalent sets have the same number of members", examples: ["{a,b,c} = {c,b,a}", "{red, blue} is equivalent to {1, 2}"] },
      ],
      examples: [
        { name: "Roster form", explanation: "The set of vowels is written as {a, e, i, o, u}.", localContext: "Useful when listing items exactly." },
        { name: "Set-builder idea", explanation: "The set of even numbers less than 10 means {2, 4, 6, 8}.", localContext: "Read the rule before listing." },
        { name: "Cardinal number", explanation: "If A = {3, 5, 7}, then n(A) = 3 because the set has three elements." },
      ],
      facts: [
        "Do not repeat an element when listing a set.",
        "Order does not matter in a set: {1, 2, 3} equals {3, 2, 1}.",
        "Use curly brackets { } for roster notation, not ordinary brackets.",
        "A clear membership rule helps avoid vague groups such as 'nice pupils' or 'big numbers'.",
      ],
      image: { title: "Subset and parent set", imageUrl: "/images/math/subset-venn-diagram.png", caption: "A subset is fully contained inside another set.", labels: ["universal set", "parent set", "subset"] },
      worked: {
        question: "If A = {prime numbers less than 10} and B = {2, 3, 5, 7}, state whether A and B are equal.",
        steps: ["List the prime numbers less than 10: 2, 3, 5 and 7.", "Compare the members of A with B.", "Both sets contain exactly the same members."],
        answer: "A and B are equal sets.",
      },
      activity: { title: "Sort and name sets", instructions: ["List a set of five school objects.", "Write its cardinal number.", "Create another set with the same number of different objects and call it an equivalent set." ] },
      questions: [
        short("Define a set.", "A well-defined collection of different objects or numbers."),
        short("What is n({a, e, i, o, u})?", "5"),
        mc("Which is an empty set?", ["months with 32 days", "vowels", "days in a week", "even numbers"], "months with 32 days"),
        written("Write the set of odd numbers between 1 and 10 in roster form.", "{3, 5, 7, 9}"),
      ],
    }),
    lesson({
      id: "p7-set-concepts-venn-two-events-heavy-v4",
      term: "Term I",
      subject: "Mathematics",
      topicTitle: "Set Concepts",
      subTopicTitle: "Venn Diagrams with Two Events",
      lessonTitle: "Venn Diagrams with Two Events",
      definition: "A Venn diagram is a drawing that uses circles to show how sets relate to each other. In two-event problems, the overlap shows members common to both sets.",
      simpleCheck: "Always put the intersection in the overlap first.",
      categories: [
        { name: "Intersection A ∩ B", definition: "members found in both A and B", examples: ["pupils who like both rice and matooke", "numbers that are both even and multiples of 3"] },
        { name: "Union A ∪ B", definition: "all members in A or B or both", examples: ["everyone who likes rice, matooke or both"] },
        { name: "Only A", definition: "members in A but not in B", examples: ["pupils who like only rice"], notes: ["Only A = n(A) - n(A ∩ B)"] },
        { name: "Neither", definition: "members in the universal set but outside both circles", examples: ["pupils who like neither rice nor matooke"] },
      ],
      examples: [
        { name: "Class survey", explanation: "If 20 pupils like football, 12 like netball and 6 like both, the overlap is 6." },
        { name: "Numbers", explanation: "Multiples of 2 and multiples of 3 overlap at multiples of 6." },
        { name: "Universal set", explanation: "In a class problem, the universal set is the whole class being surveyed." },
      ],
      facts: [
        "Draw the rectangle for the universal set first.",
        "Fill the overlap before the only-left and only-right parts.",
        "Subtract the overlap from each total set before placing numbers in the non-overlapping regions.",
        "Check that all regions add up to the universal total.",
      ],
      image: { title: "Two-circle Venn diagram", imageUrl: "/images/math/venn-diagram-4-regions.png", caption: "The four important regions are Only A, overlap, Only B and neither.", labels: ["Only A", "A ∩ B", "Only B", "Neither"] },
      worked: {
        question: "In a class of 50 pupils, 28 like Mathematics, 22 like Science and 10 like both. How many like neither subject?",
        steps: ["Put 10 in the overlap.", "Only Mathematics = 28 - 10 = 18.", "Only Science = 22 - 10 = 12.", "Total liking at least one = 18 + 10 + 12 = 40.", "Neither = 50 - 40 = 10."],
        answer: "10 pupils like neither Mathematics nor Science.",
      },
      activity: { title: "Draw your own survey", instructions: ["Ask 10 people whether they like mangoes and oranges.", "Draw a two-circle Venn diagram.", "Place the overlap first and check that all people are counted once." ] },
      questions: [
        short("What does A ∩ B mean?", "Members common to both A and B."),
        short("If n(A)=30 and n(A∩B)=8, find Only A.", "22"),
        mc("Which region is filled first in a Venn word problem?", ["intersection", "only left", "neither", "title"], "intersection"),
        written("Explain why the total of all Venn regions should equal the universal set."),
      ],
    }),
    lesson({
      id: "p7-set-concepts-probability-heavy-v4",
      term: "Term I",
      subject: "Mathematics",
      topicTitle: "Set Concepts",
      subTopicTitle: "Probability from Sets",
      lessonTitle: "Probability from Sets",
      definition: "Probability is the chance that an event will happen. It is written as favourable outcomes over total possible outcomes.",
      simpleCheck: "Probability is never less than 0 and never greater than 1.",
      categories: [
        { name: "Certain event", definition: "an event that must happen", examples: ["picking a number less than 7 from {1,2,3,4,5,6}"] },
        { name: "Impossible event", definition: "an event that cannot happen", examples: ["rolling 8 on an ordinary die"] },
        { name: "Even chance", definition: "an event with equal chance of happening or not happening", examples: ["getting a head when tossing a fair coin"] },
      ],
      examples: [
        { name: "Die", explanation: "Probability of rolling an even number on a die = 3/6 = 1/2." },
        { name: "Bag of balls", explanation: "If a bag has 4 red and 6 blue balls, P(red) = 4/10 = 2/5." },
        { name: "Complement", explanation: "P(red) + P(not red) = 1." },
      ],
      facts: [
        "The denominator is the total number of equally likely outcomes.",
        "The numerator is the number of favourable outcomes.",
        "Simplify probability fractions where possible.",
        "Use set counting carefully before writing probability in Venn problems.",
      ],
      worked: {
        question: "A box contains 5 blue pens, 3 black pens and 2 red pens. Find the probability of picking a black pen.",
        steps: ["Total pens = 5 + 3 + 2 = 10.", "Favourable black pens = 3.", "Probability = 3/10."],
        answer: "3/10",
      },
      activity: { title: "Probability practice", instructions: ["Write the outcomes when tossing one coin.", "Write the outcomes when rolling one die.", "Create two probability questions using classroom objects." ] },
      questions: [
        short("Write the formula for probability.", "Favourable outcomes ÷ total possible outcomes."),
        short("What is P(odd number) on a fair die?", "3/6 = 1/2"),
        mc("The probability of an impossible event is:", ["0", "1", "1/2", "2"], "0"),
        written("A bag has 2 green and 8 yellow balls. Find P(green).", "2/10 = 1/5"),
      ],
    }),
  ],
  fractions: [
    lesson({
      id: "p7-fractions-operations-heavy-v4",
      term: "Term II",
      subject: "Mathematics",
      topicTitle: "Fractions, Decimals and Percentages",
      subTopicTitle: "Operations on Fractions and Mixed Numbers",
      lessonTitle: "Operations on Fractions and Mixed Numbers",
      definition: "A fraction shows part of a whole or part of a group. In P7, learners add, subtract, multiply and divide proper fractions, improper fractions and mixed numbers.",
      simpleCheck: "For addition and subtraction, first make denominators the same.",
      categories: [
        { name: "Proper fraction", definition: "a fraction whose numerator is smaller than the denominator", examples: ["2/5", "7/10"] },
        { name: "Improper fraction", definition: "a fraction whose numerator is equal to or greater than the denominator", examples: ["9/4", "12/5"] },
        { name: "Mixed number", definition: "a whole number and a fraction together", examples: ["2 1/3", "5 3/4"] },
        { name: "Equivalent fractions", definition: "fractions with the same value", examples: ["1/2 = 2/4 = 3/6"] },
      ],
      examples: [
        { name: "Adding unlike denominators", explanation: "1/3 + 1/6 = 2/6 + 1/6 = 3/6 = 1/2." },
        { name: "Multiplying", explanation: "2/3 × 3/5 = 6/15 = 2/5." },
        { name: "Dividing", explanation: "3/4 ÷ 1/2 = 3/4 × 2/1 = 6/4 = 1 1/2." },
      ],
      facts: [
        "Convert mixed numbers to improper fractions before multiplying or dividing.",
        "Divide fractions by changing division to multiplication and inverting the second fraction.",
        "Always simplify the final answer.",
        "Use BODMAS when fractions appear in mixed operations.",
      ],
      image: { title: "Fraction strips", imageUrl: "/images/math/fraction-strips.svg", caption: "Fraction strips help learners compare equivalent parts of a whole.", labels: ["whole", "halves", "thirds", "quarters"] },
      worked: {
        question: "Work out: 2 1/2 × 3/5.",
        steps: ["Convert 2 1/2 to an improper fraction: 5/2.", "Multiply: 5/2 × 3/5.", "Cancel 5 and 5, leaving 3/2.", "Convert to mixed number: 1 1/2."],
        answer: "1 1/2",
      },
      activity: { title: "Fraction checking routine", instructions: ["Identify the operation sign.", "Convert mixed numbers where needed.", "Find a common denominator for addition/subtraction.", "Simplify the final answer." ] },
      questions: [
        short("Why do we find a common denominator before adding unlike fractions?"),
        short("Convert 3 2/5 to an improper fraction.", "17/5"),
        mc("To divide by a fraction, we:", ["multiply by its reciprocal", "add denominators", "subtract numerators", "ignore the sign"], "multiply by its reciprocal"),
        written("Work out 1/4 + 1/2.", "3/4"),
      ],
    }),
    lesson({
      id: "p7-fractions-decimals-percentages-heavy-v4",
      term: "Term II",
      subject: "Mathematics",
      topicTitle: "Fractions, Decimals and Percentages",
      subTopicTitle: "Decimals, Percentages and Proportion",
      lessonTitle: "Decimals, Percentages and Proportion",
      definition: "Decimals and percentages are other ways of writing parts of a whole. Percent means out of one hundred.",
      simpleCheck: "To convert a percentage to a fraction, write it over 100 and simplify.",
      categories: [
        { name: "Terminating decimal", definition: "a decimal that ends", examples: ["0.25", "3.75"] },
        { name: "Recurring decimal", definition: "a decimal where a digit or group of digits repeats", examples: ["0.333...", "0.666..."] },
        { name: "Percentage", definition: "a fraction out of 100", examples: ["25% = 25/100 = 1/4"] },
        { name: "Proportion", definition: "a statement showing that two ratios are equal", examples: ["2:3 = 4:6"] },
      ],
      examples: [
        { name: "Decimal to fraction", explanation: "0.75 = 75/100 = 3/4." },
        { name: "Fraction to percent", explanation: "3/5 = 60/100 = 60%." },
        { name: "Percentage of a quantity", explanation: "20% of 5000 shillings = 20/100 × 5000 = 1000 shillings." },
      ],
      facts: [
        "Move two decimal places to change a decimal to a percentage.",
        "Use 100 as the denominator when changing percentages to fractions.",
        "In direct proportion, both quantities increase or decrease together.",
        "In inverse proportion, one quantity increases as the other decreases.",
      ],
      worked: {
        question: "A school has 600 pupils. If 45% are girls, how many girls are in the school?",
        steps: ["Write 45% as 45/100.", "Multiply 45/100 by 600.", "Cancel 100 into 600 to get 6.", "45 × 6 = 270."],
        answer: "270 girls",
      },
      questions: [
        short("What does percent mean?", "Out of 100."),
        short("Change 0.6 to a percentage.", "60%"),
        mc("25% is equal to:", ["1/4", "1/2", "3/4", "2/5"], "1/4"),
        written("Find 15% of 2000 shillings.", "300 shillings"),
      ],
    }),
  ],
  "data-handling": [
    lesson({
      id: "p7-data-pie-travel-graphs-heavy-v4",
      term: "Term II",
      subject: "Mathematics",
      topicTitle: "Data Handling and Graphs",
      subTopicTitle: "Pie Charts and Travel Graphs",
      lessonTitle: "Pie Charts and Travel Graphs",
      definition: "Data handling is the collection, organisation, presentation and interpretation of information. Pie charts show parts of a whole circle; travel graphs show distance against time.",
      simpleCheck: "A full pie chart is always 360 degrees.",
      categories: [
        { name: "Pie chart", definition: "a circular graph divided into sectors", examples: ["class favourite foods", "school budget parts"], notes: ["sector angle = fraction of total × 360°"] },
        { name: "Travel graph", definition: "a graph showing how distance changes with time", examples: ["bus journey from Kampala to Jinja"] },
        { name: "Line graph", definition: "a graph that shows continuous change", examples: ["temperature over a day", "height of a plant over weeks"] },
      ],
      examples: [
        { name: "Quarter sector", explanation: "1/4 of a pie chart = 1/4 × 360° = 90°." },
        { name: "Half sector", explanation: "1/2 of a pie chart = 180°." },
        { name: "Stationary period", explanation: "A horizontal line on a travel graph means distance is not changing; the person has stopped." },
      ],
      facts: [
        "Read graph titles and labels before answering.",
        "Check the scale on each axis.",
        "Pie chart angles must add up to 360°.",
        "In a travel graph, a steeper line means greater speed.",
      ],
      image: { title: "Graphs for data", imageUrl: "/images/math/p5-data-bar-line-graphs.svg", caption: "Graphs make information easier to compare and interpret.", labels: ["title", "scale", "axis", "data"] },
      worked: {
        question: "In a class of 40 pupils, 10 choose Science as their favourite subject. What angle represents Science on a pie chart?",
        steps: ["Write the fraction: 10/40.", "Simplify: 1/4.", "Multiply by 360°: 1/4 × 360° = 90°."],
        answer: "90°",
      },
      questions: [
        short("How many degrees are in a full pie chart?", "360°"),
        short("What does a horizontal line on a travel graph show?", "No movement / stopped."),
        mc("A sector representing half of a total is:", ["180°", "90°", "360°", "45°"], "180°"),
        written("Find the pie-chart angle for 12 learners out of 48.", "90°"),
      ],
    }),
    lesson({
      id: "p7-data-averages-range-heavy-v4",
      term: "Term II",
      subject: "Mathematics",
      topicTitle: "Data Handling and Graphs",
      subTopicTitle: "Mean, Median, Mode and Range",
      lessonTitle: "Mean, Median, Mode and Range",
      definition: "Averages summarize a set of numbers. The common P7 averages are mean, median and mode; range shows how spread out the data is.",
      simpleCheck: "Arrange numbers in order before finding the median.",
      categories: [
        { name: "Mean", definition: "sum of values divided by number of values", examples: ["average score", "average age"] },
        { name: "Median", definition: "middle value after arranging values in order", examples: ["middle mark in ordered scores"] },
        { name: "Mode", definition: "value that occurs most often", examples: ["most common shoe size"] },
        { name: "Range", definition: "largest value minus smallest value", examples: ["spread of exam marks"] },
      ],
      examples: [
        { name: "Mean", explanation: "Mean of 4, 6, 8 = (4+6+8)/3 = 6." },
        { name: "Median", explanation: "Median of 2, 5, 9 is 5." },
        { name: "Mode", explanation: "Mode of 3, 4, 4, 5 is 4." },
      ],
      facts: [
        "Do not confuse mean with median.",
        "There can be more than one mode if two values tie as most frequent.",
        "If there are two middle values, add them and divide by 2 to get the median.",
        "Range is not an average; it measures spread.",
      ],
      worked: {
        question: "Find the mean, median, mode and range of 5, 8, 5, 10, 12.",
        steps: ["Arrange: 5, 5, 8, 10, 12.", "Mean = (5+5+8+10+12)/5 = 40/5 = 8.", "Median = middle value = 8.", "Mode = 5 because it appears twice.", "Range = 12 - 5 = 7."],
        answer: "Mean 8, median 8, mode 5, range 7.",
      },
      questions: [
        short("Define mode.", "The value that occurs most often."),
        short("Find the range of 9, 3, 12, 5.", "9"),
        mc("Before finding median, you should:", ["arrange values in order", "multiply by 360", "draw a circle", "ignore small values"], "arrange values in order"),
        written("Find the mean of 6, 7 and 8.", "7"),
      ],
    }),
  ],
  algebra: [
    lesson({
      id: "p7-algebra-expressions-substitution-heavy-v4",
      term: "Term III",
      subject: "Mathematics",
      topicTitle: "Algebra",
      subTopicTitle: "Expressions and Substitution",
      lessonTitle: "Expressions and Substitution",
      definition: "Algebra uses letters to stand for numbers. An expression is a mathematical phrase with numbers, letters and operations but no equal sign.",
      simpleCheck: "Like terms have the same letter part.",
      categories: [
        { name: "Variable", definition: "a letter representing an unknown or changing number", examples: ["x", "n", "p"] },
        { name: "Coefficient", definition: "the number multiplying a variable", examples: ["5 in 5x", "-3 in -3a"] },
        { name: "Like terms", definition: "terms with the same letter part", examples: ["3x and 7x", "2ab and 5ab"] },
        { name: "Substitution", definition: "replacing a letter with a given number", examples: ["if x=4, then 3x=12"] },
      ],
      examples: [
        { name: "Simplifying", explanation: "3x + 5x = 8x because the terms are like terms." },
        { name: "Unlike terms", explanation: "2a + 3b cannot be simplified into 5ab." },
        { name: "Substitution", explanation: "If p = 6, then 2p + 5 = 12 + 5 = 17." },
      ],
      facts: [
        "Keep signs attached to their terms.",
        "Use brackets carefully when substituting negative numbers.",
        "Do multiplication before addition when substituting.",
        "Do not combine unlike terms.",
      ],
      worked: {
        question: "Simplify 4x + 3y + 5x - y.",
        steps: ["Group like terms: 4x + 5x and 3y - y.", "Add x terms: 9x.", "Subtract y terms: 2y.", "Write the simplified expression."],
        answer: "9x + 2y",
      },
      questions: [
        short("What is a variable?", "A letter that represents a number."),
        short("Simplify 7a - 2a.", "5a"),
        mc("Which terms are like terms?", ["3x and 8x", "2a and 2b", "4m and 4n", "x and x²"], "3x and 8x"),
        written("If x = 5, find 3x + 2.", "17"),
      ],
    }),
    lesson({
      id: "p7-algebra-equations-inequalities-heavy-v4",
      term: "Term III",
      subject: "Mathematics",
      topicTitle: "Algebra",
      subTopicTitle: "Equations and Inequalities",
      lessonTitle: "Equations and Inequalities",
      definition: "An equation is a mathematical statement with an equal sign. An inequality compares quantities using signs such as <, >, ≤ or ≥.",
      simpleCheck: "Whatever you do to one side of an equation, do to the other side.",
      categories: [
        { name: "Linear equation", definition: "an equation where the unknown has power 1", examples: ["x + 5 = 12", "3p = 18"] },
        { name: "Inequality", definition: "a statement showing one quantity is greater or less than another", examples: ["x < 5", "n ≥ 10"] },
        { name: "Solution set", definition: "all values that make an equation or inequality true", examples: ["{1,2,3,4} for x < 5 when x is counting numbers"] },
      ],
      examples: [
        { name: "One-step equation", explanation: "x + 7 = 15 gives x = 8." },
        { name: "Multiplication equation", explanation: "4n = 28 gives n = 7." },
        { name: "Inequality solution", explanation: "If x < 4 and x is a counting number, x = {1, 2, 3}." },
      ],
      facts: [
        "Use inverse operations to isolate the unknown.",
        "Check your answer by substituting it back into the original equation.",
        "Read inequality signs carefully: < means less than; > means greater than.",
        "When a question gives a number set, list only solutions from that set.",
      ],
      worked: {
        question: "Solve: 3x + 4 = 19.",
        steps: ["Subtract 4 from both sides: 3x = 15.", "Divide both sides by 3: x = 5.", "Check: 3(5) + 4 = 19."],
        answer: "x = 5",
      },
      questions: [
        short("Solve x + 9 = 20.", "x = 11"),
        short("What does x > 6 mean?", "x is greater than 6."),
        mc("The inverse operation of multiplication is:", ["division", "addition", "subtraction", "squaring"], "division"),
        written("Solve 2p - 3 = 11.", "p = 7"),
      ],
    }),
  ],
};

const P7_SCIENCE_HEAVY_V4: Record<string, UpperPrimaryLesson[]> = {
  "muscular-skeletal-system": [
    lesson({
      id: "p7-science-skeleton-bones-joints-heavy-v4",
      term: "Term I",
      subject: "Integrated Science",
      topicTitle: "Muscular-Skeletal System",
      subTopicTitle: "Skeleton, Bones and Joints",
      lessonTitle: "Skeleton, Bones and Joints",
      definition: "The muscular-skeletal system is made up of bones, joints and muscles. It supports the body, protects delicate organs and enables movement.",
      simpleCheck: "Bones support and protect; joints allow movement.",
      categories: [
        { name: "Skeleton", definition: "the framework of bones in the body", examples: ["skull", "backbone", "rib cage"] },
        { name: "Joint", definition: "a place where two or more bones meet", examples: ["elbow", "knee", "shoulder"] },
        { name: "Ligament", definition: "strong tissue joining bone to bone at a joint", examples: ["knee ligament"] },
        { name: "Cartilage", definition: "smooth protective tissue at bone ends that reduces friction", examples: ["cartilage in the knee"] },
      ],
      examples: [
        { name: "Skull", explanation: "Protects the brain." },
        { name: "Rib cage", explanation: "Protects the heart and lungs." },
        { name: "Backbone", explanation: "Protects the spinal cord and helps the body stand upright." },
      ],
      facts: [
        "A hinge joint allows movement mainly in one direction, like the elbow and knee.",
        "A ball-and-socket joint allows movement in many directions, like the shoulder and hip.",
        "Immovable joints are found in the skull.",
        "Good posture protects the backbone and muscles.",
      ],
      image: { title: "Human skeleton", imageUrl: "/images/science/human-skeleton.png", caption: "The skeleton supports the body and protects important organs.", labels: ["skull", "rib cage", "backbone", "limb bones"] },
      worked: { question: "Why is the rib cage important?", steps: ["Identify where the rib cage is found: chest.", "Name the organs inside: heart and lungs.", "State the protective function."], answer: "The rib cage protects the heart and lungs." },
      questions: [
        short("Define a joint.", "A place where two or more bones meet."),
        short("Name one organ protected by the skull.", "Brain."),
        mc("The knee is mainly a:", ["hinge joint", "fixed joint", "gliding joint", "suture"], "hinge joint"),
        written("Give two functions of the skeleton."),
      ],
    }),
    lesson({
      id: "p7-science-muscles-movement-care-heavy-v4",
      term: "Term I",
      subject: "Integrated Science",
      topicTitle: "Muscular-Skeletal System",
      subTopicTitle: "Muscles, Movement and Care",
      lessonTitle: "Muscles, Movement and Care",
      definition: "Muscles are body tissues that contract and relax to produce movement. Most body movements happen when muscles work in pairs across joints.",
      simpleCheck: "Muscles pull; they do not push bones.",
      categories: [
        { name: "Voluntary muscles", definition: "muscles controlled by our will", examples: ["arm muscles", "leg muscles"] },
        { name: "Involuntary muscles", definition: "muscles that work without our direct control", examples: ["heart muscle", "muscles in the intestines"] },
        { name: "Antagonistic muscle pair", definition: "two muscles working opposite each other", examples: ["biceps and triceps"] },
      ],
      examples: [
        { name: "Bending the arm", explanation: "The biceps contracts while the triceps relaxes." },
        { name: "Straightening the arm", explanation: "The triceps contracts while the biceps relaxes." },
        { name: "Exercise", explanation: "Regular exercise strengthens muscles and bones." },
      ],
      facts: [
        "Calcium and phosphorus help build strong bones.",
        "Proteins help body tissues grow and repair.",
        "Vitamin D helps the body use calcium well.",
        "Fractures, sprains and dislocations need proper first aid and medical attention.",
      ],
      image: { title: "Hinge and ball-and-socket joints", imageUrl: "/images/science/hinge-and-ball-joints.png", caption: "Different joints allow different kinds of movement.", labels: ["hinge joint", "ball-and-socket joint", "movement"] },
      activity: { title: "Safe body movement", instructions: ["Bend and straighten your elbow slowly.", "Feel the front and back of the upper arm.", "Explain which muscle contracts when the arm bends."], safetyNote: "Do not force a joint beyond its normal movement." },
      questions: [
        short("What happens when a muscle contracts?", "It becomes shorter and pulls a bone."),
        short("Name one food nutrient needed for strong bones.", "Calcium / phosphorus / vitamin D."),
        mc("Biceps and triceps are examples of:", ["antagonistic muscles", "bones", "blood vessels", "sense organs"], "antagonistic muscles"),
        written("State two ways of caring for the muscular-skeletal system."),
      ],
    }),
  ],
  "electricity-and-magnetism": [
    lesson({
      id: "p7-science-electric-circuits-heavy-v4",
      term: "Term I",
      subject: "Integrated Science",
      topicTitle: "Electricity and Magnetism",
      subTopicTitle: "Electric Circuits and Conductors",
      lessonTitle: "Electric Circuits and Conductors",
      definition: "An electric circuit is a complete path through which electric current flows. A simple circuit needs a source, conducting wires, a switch and a load such as a bulb.",
      simpleCheck: "A bulb lights only when the circuit is complete.",
      categories: [
        { name: "Source", definition: "part that provides electrical energy", examples: ["cell", "battery", "solar panel"] },
        { name: "Load", definition: "part that uses electrical energy", examples: ["bulb", "radio", "motor"] },
        { name: "Conductor", definition: "material that allows electricity to pass through it", examples: ["copper", "aluminium", "iron"] },
        { name: "Insulator", definition: "material that does not allow electricity to pass through easily", examples: ["rubber", "plastic", "dry wood"] },
      ],
      examples: [
        { name: "Closed circuit", explanation: "The switch is on and current flows." },
        { name: "Open circuit", explanation: "The switch is off or a wire is disconnected, so current does not flow." },
        { name: "Fuse", explanation: "Protects appliances by melting when too much current flows." },
      ],
      facts: [
        "Dry cells change chemical energy into electrical energy.",
        "Switches control circuits by opening or closing the path.",
        "Most metals are good conductors.",
        "Insulators protect people from electric shock.",
      ],
      image: { title: "Simple electric circuit", imageUrl: "/images/science/simple-electric-circuit.png", caption: "A complete circuit allows current to flow from the cell through the bulb and back.", labels: ["cell", "switch", "bulb", "wire"] },
      activity: { title: "Circuit safety check", instructions: ["Name the source, switch, wires and load in the diagram.", "Explain what happens when the switch is open.", "List two insulators used in homes."], safetyNote: "Do not experiment with mains electricity." },
      questions: [
        short("Define an electric circuit.", "A complete path through which current flows."),
        short("Give one example of an insulator.", "Rubber / plastic / dry wood."),
        mc("Which material is a good conductor?", ["copper", "rubber", "plastic", "glass"], "copper"),
        written("Why are electric wires covered with plastic?"),
      ],
    }),
    lesson({
      id: "p7-science-magnets-electromagnets-heavy-v4",
      term: "Term I",
      subject: "Integrated Science",
      topicTitle: "Electricity and Magnetism",
      subTopicTitle: "Magnets and Electromagnets",
      lessonTitle: "Magnets and Electromagnets",
      definition: "A magnet is a material that attracts magnetic substances such as iron and steel. An electromagnet is a temporary magnet made when electric current flows through a coil of wire around an iron core.",
      simpleCheck: "Like poles repel; unlike poles attract.",
      categories: [
        { name: "Natural magnet", definition: "a magnet found in nature", examples: ["lodestone"] },
        { name: "Artificial magnet", definition: "a magnet made by people", examples: ["bar magnet", "horseshoe magnet"] },
        { name: "Permanent magnet", definition: "a magnet that keeps its magnetism for a long time", examples: ["speaker magnet"] },
        { name: "Temporary magnet", definition: "a magnet that loses magnetism easily", examples: ["electromagnet", "soft iron nail magnet"] },
      ],
      examples: [
        { name: "Magnetic poles", explanation: "The strongest attraction is at the north and south poles." },
        { name: "Magnetic field", explanation: "The space around a magnet where magnetic force acts." },
        { name: "Electromagnet uses", explanation: "Electric bells, scrap-yard cranes and relays use electromagnets." },
      ],
      facts: [
        "Magnets attract iron, steel, nickel and cobalt.",
        "A freely suspended magnet rests in a north-south direction.",
        "Heating, hammering and poor storage can weaken a magnet.",
        "Increasing the number of coils or cells can strengthen an electromagnet.",
      ],
      image: { title: "Electromagnet", imageUrl: "/images/science/electromagnet-nail-coil.png", caption: "A coil carrying current can magnetize a soft iron nail temporarily.", labels: ["cell", "coil", "soft iron core", "magnetic field"] },
      worked: { question: "How can a learner make an electromagnet stronger?", steps: ["Identify the parts: coil, current and iron core.", "Increase the number of turns of wire.", "Use more cells if safe.", "Use a soft iron core."], answer: "Increase the coil turns, increase safe current and use a soft iron core." },
      questions: [
        short("Name two magnetic materials.", "Iron and steel."),
        short("What happens when two north poles are brought together?", "They repel."),
        mc("An electromagnet works because of:", ["electric current", "evaporation", "digestion", "germination"], "electric current"),
        written("State two uses of magnets in daily life."),
      ],
    }),
  ],
  "light-energy": [
    lesson({
      id: "p7-science-light-propagation-reflection-heavy-v4",
      term: "Term II",
      subject: "Integrated Science",
      topicTitle: "Light Energy",
      subTopicTitle: "Sources, Shadows and Reflection",
      lessonTitle: "Sources, Shadows and Reflection",
      definition: "Light is a form of energy that enables us to see. It travels in straight lines and can be reflected by shiny surfaces.",
      simpleCheck: "A shadow forms when an opaque object blocks light.",
      categories: [
        { name: "Luminous object", definition: "an object that produces its own light", examples: ["sun", "lamp", "candle flame"] },
        { name: "Non-luminous object", definition: "an object seen because it reflects light", examples: ["moon", "book", "tree"] },
        { name: "Opaque material", definition: "material that does not allow light through", examples: ["wood", "stone", "metal"] },
        { name: "Transparent material", definition: "material that allows light to pass through clearly", examples: ["clear glass", "clean water"] },
      ],
      examples: [
        { name: "Rectilinear propagation", explanation: "Light travelling in straight lines explains why shadows have clear shapes." },
        { name: "Reflection", explanation: "A plane mirror reflects light regularly and forms an image." },
        { name: "Shadow size", explanation: "A shadow grows bigger when the object is moved nearer to the light source." },
      ],
      facts: [
        "Smooth shiny surfaces are good reflectors.",
        "Rough surfaces scatter light in many directions.",
        "A shadow has umbra and sometimes penumbra depending on the light source.",
        "Never look directly at the sun or very bright light sources.",
      ],
      worked: { question: "Why can we see the moon although it does not produce its own light?", steps: ["Classify the moon as non-luminous.", "Recall that non-luminous objects are seen by reflected light.", "The moon reflects light from the sun."], answer: "We see the moon because it reflects sunlight." },
      questions: [
        short("Define a luminous object.", "An object that produces its own light."),
        short("Why does a shadow form?", "An opaque object blocks light."),
        mc("Light travels mainly in:", ["straight lines", "circles", "zigzags only", "soil"], "straight lines"),
        written("Give two examples of transparent materials."),
      ],
    }),
    lesson({
      id: "p7-science-refraction-eye-pinhole-heavy-v4",
      term: "Term II",
      subject: "Integrated Science",
      topicTitle: "Light Energy",
      subTopicTitle: "Refraction, Lenses and the Eye",
      lessonTitle: "Refraction, Lenses and the Eye",
      definition: "Refraction is the bending of light as it passes from one transparent medium to another. Lenses use refraction to form images.",
      simpleCheck: "Light bends when its speed changes between media such as air and glass.",
      categories: [
        { name: "Convex lens", definition: "a lens thicker in the middle that converges light", examples: ["magnifying glass", "camera lens"] },
        { name: "Concave lens", definition: "a lens thinner in the middle that diverges light", examples: ["some spectacles for short sight"] },
        { name: "Pinhole camera", definition: "a simple camera that forms an inverted image through a small hole", examples: ["cardboard box camera model"] },
        { name: "Eye", definition: "the organ of sight that focuses light onto the retina", examples: ["cornea", "lens", "retina", "optic nerve"] },
      ],
      examples: [
        { name: "Bent pencil appearance", explanation: "A pencil in water looks bent because light changes direction at the water-air boundary." },
        { name: "Human eye", explanation: "The lens focuses light on the retina, then the optic nerve carries messages to the brain." },
        { name: "Pinhole image", explanation: "A pinhole camera forms an inverted image because light travels in straight lines." },
      ],
      facts: [
        "The iris controls the amount of light entering the eye by changing pupil size.",
        "The retina is sensitive to light and receives the image.",
        "The optic nerve carries impulses from the eye to the brain.",
        "Good eye care includes reading in enough light and avoiding sharp objects near the eyes.",
      ],
      image: { title: "Light refraction", imageUrl: "/images/science/light-refraction.png", caption: "Light changes direction when it passes between air, glass or water.", labels: ["incident ray", "normal", "refracted ray"] },
      activity: { title: "Refraction observation", instructions: ["Place a pencil in a clear glass of water.", "Observe how it appears at the water surface.", "Explain the observation using refraction."], safetyNote: "Use a plastic cup if glass may break." },
      questions: [
        short("Define refraction.", "Bending of light as it passes from one transparent medium to another."),
        short("Which part of the eye receives the image?", "Retina."),
        mc("A convex lens mainly:", ["converges light", "absorbs all light", "stops all light", "makes sound"], "converges light"),
        written("Give two ways of caring for the eyes."),
      ],
    }),
  ],
  "population-and-health": [
    lesson({
      id: "p7-science-population-health-heavy-v4",
      term: "Term III",
      subject: "Integrated Science",
      topicTitle: "Population and Health",
      subTopicTitle: "Population, Disease Spread and Community Health",
      lessonTitle: "Population, Disease Spread and Community Health",
      definition: "Population is the number of people living in an area. Population and health are connected because crowding, sanitation, food, clean water and disease control affect community wellbeing.",
      simpleCheck: "Clean water and sanitation reduce many preventable diseases.",
      categories: [
        { name: "Population density", definition: "number of people per unit area", examples: ["people per square kilometre"] },
        { name: "Communicable disease", definition: "a disease that can spread from one person to another", examples: ["malaria", "cholera", "measles"] },
        { name: "Vector", definition: "a living organism that carries disease-causing germs", examples: ["mosquito", "housefly"] },
        { name: "Sanitation", definition: "safe disposal of waste and keeping the environment clean", examples: ["latrine use", "handwashing", "proper rubbish disposal"] },
      ],
      examples: [
        { name: "Mosquito", explanation: "Female Anopheles mosquitoes spread malaria parasites." },
        { name: "Housefly", explanation: "Houseflies can carry germs from faeces to food." },
        { name: "Overcrowding", explanation: "Overcrowding can increase the spread of airborne and contact diseases." },
      ],
      facts: [
        "Drain stagnant water to reduce mosquito breeding.",
        "Use latrines and wash hands after visiting the toilet.",
        "Cover food to protect it from flies.",
        "Immunisation protects communities by reducing disease spread.",
      ],
      image: { title: "Anopheles mosquito life cycle", imageUrl: "/images/science/anopheles-mosquito-life-cycle.png", caption: "Mosquito control breaks the life cycle and reduces malaria spread.", labels: ["eggs", "larva", "pupa", "adult"] },
      activity: { title: "Community health audit", instructions: ["Identify two places where mosquitoes may breed near a home or school.", "Suggest one safe control method for each place.", "Explain why covering food prevents disease."], safetyNote: "Do not touch dirty water, faeces or medical waste during observation." },
      questions: [
        short("Define a vector.", "A living organism that carries disease-causing germs."),
        short("Name the mosquito that spreads malaria.", "Female Anopheles mosquito."),
        mc("Which action reduces mosquito breeding?", ["draining stagnant water", "leaving tins with water", "throwing food anywhere", "sleeping late"], "draining stagnant water"),
        written("Give three ways of improving sanitation at school."),
      ],
    }),
  ],
};

const P7_ENGLISH_HEAVY_V4: Record<string, UpperPrimaryLesson[]> = {
  "letter-writing": [
    lesson({
      id: "p7-english-informal-letters-heavy-v4",
      term: "Term I",
      subject: "English",
      topicTitle: "Letter Writing",
      subTopicTitle: "Informal Letters",
      lessonTitle: "Informal Letters",
      definition: "An informal letter is a friendly letter written to someone we know well, such as a parent, relative or friend. It uses a warm but clear tone.",
      simpleCheck: "Informal letters still need correct address, date, greeting, body and ending.",
      categories: [
        { name: "Address and date", definition: "shows where and when the letter is written", examples: ["P.O. Box 24, Masaka", "13 July 2026"] },
        { name: "Greeting", definition: "friendly opening", examples: ["Dear Uncle John,", "Dear Sarah,"] },
        { name: "Body", definition: "main message divided into clear paragraphs", examples: ["reason for writing", "news", "request"] },
        { name: "Ending", definition: "closing words and writer's name", examples: ["Your loving daughter,", "Your friend,"] },
      ],
      examples: [
        { name: "Opening paragraph", explanation: "I hope you are well. I am writing to tell you about our school visitation day." },
        { name: "Polite request", explanation: "Kindly send me the revision books when you come home." },
        { name: "Closing", explanation: "I look forward to hearing from you soon." },
      ],
      facts: [
        "Use paragraphs; do not write one long block.",
        "Keep the tone friendly and respectful.",
        "Use correct punctuation after the greeting and closing.",
        "Answer the exact question asked in the writing prompt.",
      ],
      image: { title: "Letter layouts", imageUrl: "/images/english/letter-layouts.png", caption: "Letter layout helps learners place each part correctly.", labels: ["address", "date", "salutation", "body", "closing"] },
      activity: { title: "Plan before writing", instructions: ["Underline who you are writing to.", "Underline why you are writing.", "Plan three body paragraphs before writing the final letter." ] },
      questions: [
        short("What is an informal letter?", "A friendly letter written to someone we know well."),
        short("Name two parts of an informal letter."),
        mc("Which greeting is suitable for a friendly letter?", ["Dear Aunt Mary,", "To the Head teacher,", "RE: APPLICATION", "Yours faithfully,"], "Dear Aunt Mary,"),
        written("Write a short opening paragraph for a letter to your cousin about school holidays."),
      ],
    }),
    lesson({
      id: "p7-english-formal-letters-heavy-v4",
      term: "Term I",
      subject: "English",
      topicTitle: "Letter Writing",
      subTopicTitle: "Formal Letters",
      lessonTitle: "Formal Letters",
      definition: "A formal letter is an official letter written to a person in authority or to an organisation. It uses polite, serious and direct language.",
      simpleCheck: "Formal letters need a subject line and official tone.",
      categories: [
        { name: "Sender's address", definition: "writer's address", examples: ["St. Mary's Primary School, P.O. Box ..."] },
        { name: "Receiver's address", definition: "address of the person or office receiving the letter", examples: ["The Head Teacher", "The Chairperson"] },
        { name: "Subject line", definition: "brief title showing the purpose of the letter", examples: ["RE: APPLICATION FOR PERMISSION"] },
        { name: "Official closing", definition: "polite ending used in formal letters", examples: ["Yours faithfully,", "Yours sincerely,"] },
      ],
      examples: [
        { name: "Request", explanation: "I kindly request permission to attend the debate competition." },
        { name: "Complaint", explanation: "I am writing to report the broken water tap near the classroom block." },
        { name: "Application", explanation: "I wish to apply for the post of library prefect." },
      ],
      facts: [
        "Avoid slang and jokes in formal letters.",
        "State the purpose in the first paragraph.",
        "Keep each paragraph focused on one idea.",
        "Use respectful titles such as Sir, Madam, Head Teacher or Chairperson.",
      ],
      worked: { question: "Write a suitable subject line for a letter asking for permission to miss school for a medical appointment.", steps: ["Identify the purpose: asking permission.", "Mention the reason briefly: medical appointment.", "Write in capital or title case after RE:"], answer: "RE: REQUEST FOR PERMISSION TO ATTEND A MEDICAL APPOINTMENT" },
      questions: [
        short("Define a formal letter.", "An official letter written to a person in authority or organisation."),
        short("Why is a subject line important?", "It shows the purpose of the letter quickly."),
        mc("Which closing is most suitable for a formal letter?", ["Yours faithfully,", "Your loving son,", "See you soon,", "Bye for now,"], "Yours faithfully,"),
        written("Write one polite sentence requesting permission from a head teacher."),
      ],
    }),
  ],
  examinations: [
    lesson({
      id: "p7-english-exam-instructions-heavy-v4",
      term: "Term I",
      subject: "English",
      topicTitle: "Examinations",
      subTopicTitle: "Reading Examination Instructions",
      lessonTitle: "Reading Examination Instructions",
      definition: "Examination instructions are directions that tell a candidate what to do, how many questions to answer and how to present answers.",
      simpleCheck: "Read instructions before answering any question.",
      categories: [
        { name: "Command word", definition: "word that tells what action to take", examples: ["define", "explain", "state", "rewrite", "choose"] },
        { name: "Time instruction", definition: "direction about time allowed", examples: ["Answer in 2 hours", "Spend 30 minutes"] },
        { name: "Answer instruction", definition: "direction about number or style of answers", examples: ["Answer all questions", "Write in full sentences"] },
      ],
      examples: [
        { name: "State", explanation: "Give a short direct answer." },
        { name: "Explain", explanation: "Give the answer and add a reason or detail." },
        { name: "Rewrite", explanation: "Write the sentence again as instructed without changing meaning." },
      ],
      facts: [
        "Underline key words in long instructions.",
        "Do not answer more or fewer questions than required.",
        "Check whether the question asks for one word, a phrase or a full sentence.",
        "Reserve time to read through your answers before submitting.",
      ],
      image: { title: "PLE exam instruction sheet", imageUrl: "/images/english/ple-exam-instruction-sheet.png", caption: "Instruction words guide how a learner should answer.", labels: ["time", "section", "command word", "answer space"] },
      activity: { title: "Instruction decoding", instructions: ["Circle the command word in five questions.", "Write what each command word asks you to do.", "Answer one question exactly as instructed." ] },
      questions: [
        short("What is a command word?", "A word that tells what action to take in a question."),
        short("What should you do before answering an exam question?", "Read the instructions carefully."),
        mc("The command word 'explain' means:", ["give an answer with a reason", "draw only", "copy the question", "leave blank"], "give an answer with a reason"),
        written("Write two things a candidate should check before submitting an English paper."),
      ],
    }),
    lesson({
      id: "p7-english-conditionals-exam-writing-heavy-v4",
      term: "Term I",
      subject: "English",
      topicTitle: "Examinations",
      subTopicTitle: "Conditional Clauses and Exam Writing",
      lessonTitle: "Conditional Clauses and Exam Writing",
      definition: "A conditional clause uses 'if' to show a condition and its result. P7 English often tests conditionals, sentence rewriting and accurate punctuation.",
      simpleCheck: "The verb tense changes depending on whether the condition is real, likely, imaginary or past unreal.",
      categories: [
        { name: "First conditional", definition: "real possible future condition", examples: ["If I revise, I will pass."] },
        { name: "Second conditional", definition: "imaginary or unlikely present/future condition", examples: ["If I were the head prefect, I would improve cleanliness."] },
        { name: "Third conditional", definition: "past condition that did not happen", examples: ["If she had read the instructions, she would have answered correctly."] },
      ],
      examples: [
        { name: "First conditional", explanation: "If candidates arrive early, they will settle before the paper starts." },
        { name: "Second conditional", explanation: "If I had a dictionary, I would check the spelling." },
        { name: "Third conditional", explanation: "If he had managed his time, he would have completed the composition." },
      ],
      facts: [
        "Use a comma when the if-clause comes first.",
        "Do not use 'will' in the if-clause of the first conditional.",
        "Use 'were' with all subjects in formal second conditional answers.",
        "Check tense consistency when rewriting sentences.",
      ],
      worked: { question: "Rewrite: I did not read the instructions. I made mistakes. Begin: If I had...", steps: ["The event is in the past and did not happen.", "Use third conditional: If + subject + had + past participle.", "Result clause uses would have + past participle."], answer: "If I had read the instructions, I would not have made mistakes." },
      questions: [
        short("Give one example of a first conditional sentence."),
        short("Which conditional uses 'would have'?", "Third conditional."),
        mc("Choose the correct sentence:", ["If I revise, I will pass.", "If I will revise, I pass.", "If I revised, I will passed.", "If revising, passed."], "If I revise, I will pass."),
        written("Rewrite using If: She did not practise. She failed the oral test."),
      ],
    }),
  ],
};

const P7_SOCIAL_HEAVY_V4: Record<string, UpperPrimaryLesson[]> = {
  "location-of-africa": [
    lesson({
      id: "p7-sst-africa-location-lines-heavy-v4",
      term: "Term I",
      subject: "Social Studies",
      topicTitle: "Location of Africa on the Map of the World",
      subTopicTitle: "Africa, Latitudes and Longitudes",
      lessonTitle: "Africa, Latitudes and Longitudes",
      definition: "Location means the position of a place. Africa can be located on the world map using continents, oceans, hemispheres, latitudes and longitudes.",
      simpleCheck: "The Equator and Greenwich Meridian both pass through Africa.",
      categories: [
        { name: "Latitude", definition: "imaginary line running from west to east, used to measure north or south of the Equator", examples: ["Equator", "Tropic of Cancer", "Tropic of Capricorn"] },
        { name: "Longitude", definition: "imaginary line running from north to south, used to measure east or west of Greenwich", examples: ["Greenwich Meridian"] },
        { name: "Hemisphere", definition: "half of the earth", examples: ["Northern Hemisphere", "Southern Hemisphere", "Eastern Hemisphere", "Western Hemisphere"] },
      ],
      examples: [
        { name: "Equator", explanation: "Divides Africa into northern and southern parts." },
        { name: "Greenwich Meridian", explanation: "Passes through West Africa and helps measure time and longitude." },
        { name: "Africa's neighbours", explanation: "Africa is bordered by the Mediterranean Sea, Red Sea, Indian Ocean and Atlantic Ocean." },
      ],
      facts: [
        "Africa is the second largest continent in the world.",
        "Most of Africa lies in the tropics between the Tropic of Cancer and Tropic of Capricorn.",
        "The Sahara Desert lies in northern Africa.",
        "Map reading requires title, key, scale and compass direction.",
      ],
      image: { title: "Africa latitudes and longitudes", imageUrl: "/images/social-studies/africa-latitudes-longitudes.png", caption: "Important imaginary lines help locate Africa accurately on the world map.", labels: ["Equator", "Greenwich Meridian", "Tropics"] },
      activity: { title: "Map location task", instructions: ["Point to Africa on a world map.", "Trace the Equator and Greenwich Meridian.", "Name two oceans that border Africa." ] },
      questions: [
        short("Define latitude.", "An imaginary line running west-east used to measure north or south of the Equator."),
        short("Name the line of latitude that divides Africa into northern and southern parts.", "Equator."),
        mc("Which ocean borders Africa to the east?", ["Indian Ocean", "Atlantic Ocean", "Arctic Ocean", "Southern Ocean"], "Indian Ocean"),
        written("Give two reasons why imaginary lines are useful on maps."),
      ],
    }),
    lesson({
      id: "p7-sst-africa-map-skills-heavy-v4",
      term: "Term I",
      subject: "Social Studies",
      topicTitle: "Location of Africa on the Map of the World",
      subTopicTitle: "Map Skills for Africa",
      lessonTitle: "Map Skills for Africa",
      definition: "Map skills are the abilities used to read, interpret and draw maps. P7 learners use map skills to locate countries, water bodies, physical features and directions in Africa.",
      simpleCheck: "A map is incomplete if it has no title, key, scale or direction.",
      categories: [
        { name: "Title", definition: "name showing what a map is about", examples: ["Map of Africa"] },
        { name: "Key", definition: "part explaining symbols used on a map", examples: ["blue line = river", "triangle = mountain"] },
        { name: "Scale", definition: "relationship between map distance and real distance", examples: ["1 cm represents 100 km"] },
        { name: "Compass direction", definition: "shows north, east, south and west", examples: ["north arrow"] },
      ],
      examples: [
        { name: "Relative location", explanation: "Uganda is in East Africa and is landlocked." },
        { name: "Island country", explanation: "Madagascar lies in the Indian Ocean off the south-east coast of Africa." },
        { name: "Coastal country", explanation: "Kenya and Tanzania have coastlines on the Indian Ocean." },
      ],
      facts: [
        "Use compass directions when describing where one place is from another.",
        "Use the key before interpreting symbols.",
        "Use scale when estimating real distance.",
        "Name places exactly as shown on the map to avoid spelling errors.",
      ],
      image: { title: "Map of Africa", imageUrl: "/images/social-studies/map-of-africa.png", caption: "Africa's position can be described using oceans, seas, countries and regions.", labels: ["North Africa", "East Africa", "West Africa", "Southern Africa"] },
      questions: [
        short("Name four elements of a good map."),
        short("What is a map key used for?", "Explaining map symbols."),
        mc("Madagascar lies in the:", ["Indian Ocean", "Mediterranean Sea", "Atlantic Ocean", "Red Sea"], "Indian Ocean"),
        written("Describe Uganda's location in Africa in one sentence."),
      ],
    }),
  ],
  "physical-features-of-africa": [
    lesson({
      id: "p7-sst-africa-relief-features-heavy-v4",
      term: "Term I",
      subject: "Social Studies",
      topicTitle: "Physical Features of Africa",
      subTopicTitle: "Relief Features of Africa",
      lessonTitle: "Relief Features of Africa",
      definition: "Physical features are natural features found on the earth's surface. Africa has mountains, plateaus, valleys, plains, deserts, rivers and lakes.",
      simpleCheck: "Relief means the height and shape of land.",
      categories: [
        { name: "Mountain", definition: "a high steep landform rising above surrounding land", examples: ["Kilimanjaro", "Kenya", "Rwenzori", "Atlas Mountains"] },
        { name: "Plateau", definition: "a broad area of high fairly flat land", examples: ["East African Plateau"] },
        { name: "Valley", definition: "low land between hills or mountains", examples: ["Great Rift Valley"] },
        { name: "Desert", definition: "dry area with very little rainfall", examples: ["Sahara", "Kalahari", "Namib"] },
      ],
      examples: [
        { name: "Mount Kilimanjaro", explanation: "Highest mountain in Africa, found in Tanzania." },
        { name: "Rwenzori Mountains", explanation: "Found along the Uganda-DR Congo border." },
        { name: "Great Rift Valley", explanation: "A long valley system with lakes, escarpments and volcanic features." },
      ],
      facts: [
        "Block mountains form when land between faults is uplifted or surrounding land sinks.",
        "Fold mountains form when layers of rock are compressed and folded.",
        "Volcanic mountains form when lava and ash build up around a vent.",
        "Physical features influence climate, settlement, transport and economic activities.",
      ],
      image: { title: "Block and fold mountains", imageUrl: "/images/social-studies/block-and-fold-mountains.png", caption: "Different mountain types are formed by different earth movements.", labels: ["block mountain", "fold mountain", "fault", "fold"] },
      questions: [
        short("Define a physical feature.", "A natural feature on the earth's surface."),
        short("Name the highest mountain in Africa.", "Mount Kilimanjaro."),
        mc("The Sahara is a:", ["desert", "river", "lake", "mountain"], "desert"),
        written("Give two ways physical features affect people's lives."),
      ],
    }),
    lesson({
      id: "p7-sst-africa-water-features-heavy-v4",
      term: "Term I",
      subject: "Social Studies",
      topicTitle: "Physical Features of Africa",
      subTopicTitle: "Rivers, Lakes and the Rift Valley",
      lessonTitle: "Rivers, Lakes and the Rift Valley",
      definition: "Water features are natural bodies or flows of water such as rivers, lakes and seas. They support transport, fishing, irrigation, tourism and hydro-electric power.",
      simpleCheck: "The River Nile is the longest river in Africa.",
      categories: [
        { name: "River", definition: "a natural flow of water from source to mouth", examples: ["Nile", "Congo", "Niger", "Zambezi"] },
        { name: "Lake", definition: "a large body of water surrounded by land", examples: ["Victoria", "Tanganyika", "Malawi", "Chad"] },
        { name: "Rift valley lake", definition: "a lake formed in a valley created by faulting", examples: ["Tanganyika", "Malawi", "Turkana"] },
      ],
      examples: [
        { name: "Lake Victoria", explanation: "Largest lake in Africa and source region of the River Nile." },
        { name: "River Congo", explanation: "Important river in Central Africa with large water volume." },
        { name: "Victoria Falls", explanation: "A waterfall on the Zambezi River, important for tourism." },
      ],
      facts: [
        "Rivers provide water for domestic use, irrigation and industries.",
        "Lakes support fishing and transport but can be affected by pollution.",
        "Waterfalls may be used to generate hydro-electric power.",
        "People should conserve water bodies by avoiding pollution and wetland destruction.",
      ],
      image: { title: "Major rivers and lakes of Africa", imageUrl: "/images/social-studies/major-rivers-lakes-map.png", caption: "Africa's rivers and lakes influence settlement, transport, farming and trade.", labels: ["Nile", "Congo", "Niger", "Lake Victoria"] },
      questions: [
        short("Name the longest river in Africa.", "River Nile."),
        short("Give one use of lakes.", "Fishing / transport / water supply / tourism."),
        mc("Victoria Falls is found on the:", ["Zambezi River", "Nile River", "Niger River", "Senegal River"], "Zambezi River"),
        written("State two ways of conserving rivers and lakes."),
      ],
    }),
  ],
  "foreign-influence-africa": [
    lesson({
      id: "p7-sst-foreign-groups-africa-heavy-v4",
      term: "Term II",
      subject: "Social Studies",
      topicTitle: "Foreign Influence in Africa",
      subTopicTitle: "Foreign Groups and Their Activities",
      lessonTitle: "Foreign Groups and Their Activities",
      definition: "Foreign influence in Africa refers to the effects of people from outside Africa, including traders, explorers, missionaries, colonialists and settlers.",
      simpleCheck: "Foreign groups came for trade, religion, exploration, settlement and political control.",
      categories: [
        { name: "Traders", definition: "people who came to buy and sell goods", examples: ["Arabs", "Portuguese", "European traders"] },
        { name: "Explorers", definition: "people who travelled to find information about Africa's geography and resources", examples: ["David Livingstone", "Henry Morton Stanley"] },
        { name: "Missionaries", definition: "religious workers who spread Christianity and built schools and hospitals", examples: ["CMS", "White Fathers"] },
        { name: "Colonialists", definition: "foreign powers that took political control of African territories", examples: ["British", "French", "Belgians", "Germans"] },
      ],
      examples: [
        { name: "Positive influence", explanation: "Missionaries introduced formal education and medical centres in many areas." },
        { name: "Negative influence", explanation: "Slave trade caused depopulation, insecurity and suffering." },
        { name: "Economic influence", explanation: "Foreign trade connected Africa to world markets but also encouraged exploitation of resources." },
      ],
      facts: [
        "The Trans-Atlantic slave trade took many Africans to the Americas by force.",
        "The Indian Ocean slave trade affected East Africa strongly.",
        "Explorers' reports encouraged European interest in Africa.",
        "Missionary work often prepared the way for colonial rule, even when missionaries also provided schools and health services.",
      ],
      image: { title: "Triangular trade map", imageUrl: "/images/social-studies/triangular-trade-map.png", caption: "The slave trade linked Africa, Europe and the Americas in an exploitative trade system.", labels: ["Africa", "Europe", "Americas", "trade routes"] },
      questions: [
        short("Define foreign influence in Africa."),
        short("Name two foreign groups that came to Africa."),
        mc("Missionaries are mainly associated with:", ["spreading religion", "drawing latitudes", "forming deserts", "making rainfall"], "spreading religion"),
        written("Give two negative effects of slave trade on Africa."),
      ],
    }),
    lesson({
      id: "p7-sst-scramble-partition-colonialism-heavy-v4",
      term: "Term II",
      subject: "Social Studies",
      topicTitle: "Foreign Influence in Africa",
      subTopicTitle: "Scramble, Partition and Colonial Rule",
      lessonTitle: "Scramble, Partition and Colonial Rule",
      definition: "The scramble for Africa was the rush by European powers to acquire African territories. Partition was the division of Africa among European powers, especially after the Berlin Conference of 1884–1885.",
      simpleCheck: "Partition created many boundaries without respecting African ethnic groups and kingdoms.",
      categories: [
        { name: "Scramble", definition: "rush by European powers to claim African land", examples: ["Britain in East Africa", "France in West Africa"] },
        { name: "Partition", definition: "division of African territories among European powers", examples: ["Berlin Conference boundaries"] },
        { name: "Colonial rule", definition: "system where a foreign country controls another territory", examples: ["British indirect rule", "French assimilation"] },
      ],
      examples: [
        { name: "Berlin Conference", explanation: "European powers met to set rules for claiming African territories; Africans were not properly represented." },
        { name: "Artificial boundaries", explanation: "Some borders split communities or joined different groups under one colony." },
        { name: "Cash crops", explanation: "Colonial economies often forced or encouraged Africans to produce crops for export." },
      ],
      facts: [
        "Reasons for colonisation included raw materials, markets, prestige, settlement and strategic control.",
        "Colonialism introduced new roads and railways but mainly to serve colonial economic interests.",
        "African resistance occurred in many regions but was often defeated by better European weapons.",
        "Colonial rule contributed to later nationalism and independence movements.",
      ],
      image: { title: "Partition of Africa 1884", imageUrl: "/images/social-studies/partition-of-africa-1884.png", caption: "European powers divided Africa into colonies with little regard for African political and cultural boundaries.", labels: ["British", "French", "Portuguese", "German", "Belgian"] },
      questions: [
        short("What was the scramble for Africa?", "The rush by European powers to acquire African territories."),
        short("When was the Berlin Conference held?", "1884–1885."),
        mc("One major reason for colonisation was the search for:", ["raw materials", "snow", "empty oceans", "pupils"], "raw materials"),
        written("Give two effects of partition on African communities."),
      ],
    }),
  ],
  "nationalism-road-independence": [
    lesson({
      id: "p7-sst-nationalism-causes-methods-heavy-v4",
      term: "Term II",
      subject: "Social Studies",
      topicTitle: "Nationalism and the Road to Independence of Africa",
      subTopicTitle: "Meaning, Causes and Methods of Nationalism",
      lessonTitle: "Meaning, Causes and Methods of Nationalism",
      definition: "Nationalism is love for one's country and the desire for self-rule. In Africa, nationalism grew as people opposed colonial rule and demanded independence.",
      simpleCheck: "Nationalism means wanting Africans to govern themselves.",
      categories: [
        { name: "Political nationalism", definition: "demand for African self-government", examples: ["political parties", "independence movements"] },
        { name: "Economic nationalism", definition: "demand for fair control of resources and jobs", examples: ["trade unions", "boycotts"] },
        { name: "Cultural nationalism", definition: "pride in African identity, culture and languages", examples: ["African newspapers", "cultural associations"] },
      ],
      examples: [
        { name: "Methods", explanation: "Nationalists used political parties, newspapers, strikes, demonstrations, petitions and negotiations." },
        { name: "Causes", explanation: "Causes included forced labour, heavy taxes, land loss, racial discrimination and ex-soldiers' experiences after world wars." },
        { name: "Education", explanation: "Educated Africans used reading, writing and organisation to challenge colonial rule." },
      ],
      facts: [
        "Nationalism grew faster after the Second World War.",
        "Trade unions helped workers organise against unfair conditions.",
        "Newspapers spread nationalist ideas.",
        "Some countries gained independence peacefully while others used armed struggle.",
      ],
      activity: { title: "Cause and method table", instructions: ["Draw a two-column table: Causes of nationalism and Methods used.", "Write four causes and four methods.", "Explain which method was peaceful and which could become violent." ] },
      questions: [
        short("Define nationalism.", "Love for one's country and the desire for self-rule."),
        short("Give two causes of African nationalism."),
        mc("Which was a peaceful method used by nationalists?", ["petitions", "earthquakes", "desertification", "forced labour"], "petitions"),
        written("Explain how newspapers helped African nationalism."),
      ],
    }),
    lesson({
      id: "p7-sst-independence-leaders-challenges-heavy-v4",
      term: "Term II",
      subject: "Social Studies",
      topicTitle: "Nationalism and the Road to Independence of Africa",
      subTopicTitle: "Leaders, Independence and Challenges",
      lessonTitle: "Leaders, Independence and Challenges",
      definition: "Independence is the freedom of a country to govern itself. African independence leaders mobilised people, formed parties and negotiated or fought for self-rule.",
      simpleCheck: "A country is independent when it makes its own political decisions.",
      categories: [
        { name: "Nationalist leader", definition: "person who leads people in the struggle for self-rule", examples: ["Kwame Nkrumah", "Jomo Kenyatta", "Julius Nyerere", "Nelson Mandela"] },
        { name: "Political party", definition: "organised group seeking political power and policy change", examples: ["CPP", "KANU", "TANU", "ANC"] },
        { name: "Post-independence challenge", definition: "problem faced after self-rule", examples: ["poverty", "tribalism", "illiteracy", "military coups", "neo-colonialism"] },
      ],
      examples: [
        { name: "Ghana", explanation: "Ghana became independent in 1957 under Kwame Nkrumah and inspired other African countries." },
        { name: "Kenya", explanation: "Kenya became independent in 1963 with Jomo Kenyatta as a key leader." },
        { name: "South Africa", explanation: "Nelson Mandela is remembered for fighting apartheid and promoting reconciliation." },
      ],
      facts: [
        "Independence did not automatically end all problems created during colonial rule.",
        "The Organisation of African Unity encouraged unity and decolonisation.",
        "The African Union later replaced the OAU to promote cooperation and development.",
        "Good citizenship after independence includes respecting laws, paying taxes, voting responsibly and protecting public property.",
      ],
      questions: [
        short("What is independence?", "Freedom of a country to govern itself."),
        short("Name one African nationalist leader."),
        mc("Ghana became independent in:", ["1957", "1884", "2001", "1492"], "1957"),
        written("State three challenges African countries faced after independence."),
      ],
    }),
  ],
};

export function applyP7MathHeavyV4(topics: Topic[]): Topic[] {
  return applyHeavyV4(topics, { ...P7_MATH_HEAVY_V4, ...P7_MATH_HEAVY_V4_WAVE2, ...P7_MATH_HEAVY_V4_WAVE3 });
}

export function applyP7ScienceHeavyV4(topics: Topic[]): Topic[] {
  return applyHeavyV4(topics, { ...P7_SCIENCE_HEAVY_V4, ...P7_SCIENCE_HEAVY_V4_WAVE2 });
}

export function applyP7EnglishHeavyV4(topics: Topic[]): Topic[] {
  return applyHeavyV4(topics, { ...P7_ENGLISH_HEAVY_V4, ...P7_ENGLISH_HEAVY_V4_WAVE2 });
}

export function applyP7SocialHeavyV4(topics: Topic[]): Topic[] {
  return applyHeavyV4(topics, { ...P7_SOCIAL_HEAVY_V4, ...P7_SOCIAL_HEAVY_V4_WAVE2 });
}
