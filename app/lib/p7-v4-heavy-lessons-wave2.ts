import type { ExerciseBlock, UpperPrimaryContentBlock, UpperPrimaryLesson } from "@/lib/content-blocks";

type TermName = UpperPrimaryLesson["term"];
type SubjectName = UpperPrimaryLesson["subject"];
type ExerciseQuestion = ExerciseBlock["questions"][number];

type LessonSpec = {
  id: string;
  term: TermName;
  subject: SubjectName;
  topicTitle: string;
  subTopicTitle: string;
  definition: string;
  simpleCheck?: string;
  categories: Array<{ name: string; definition: string; examples: string[]; notes?: string[] }>;
  examples: Array<{ name: string; explanation: string; localContext?: string }>;
  facts: string[];
  image?: { title: string; imageUrl: string; caption: string; labels?: string[] };
  worked?: { question: string; steps: string[]; answer: string };
  activity?: { title: string; instructions: string[]; safetyNote?: string };
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
    { kind: "categories", title: "Types / key ideas", categories: spec.categories },
    { kind: "examples", title: "Examples and illustrations", examples: spec.examples },
    { kind: "characteristics", title: "Facts to remember", points: spec.facts },
  ];
  if (spec.image) blocks.push({ kind: "diagram", ...spec.image });
  if (spec.worked) blocks.push({ kind: "worked-example", ...spec.worked });
  if (spec.activity) blocks.push({ kind: "activity", ...spec.activity });
  blocks.push({ kind: "exercise", title: "Evaluation", questions: spec.questions });
  return {
    id: spec.id,
    classLevel: "P7",
    term: spec.term,
    curriculumMode: "subject",
    subject: spec.subject,
    topicTitle: spec.topicTitle,
    subTopicTitle: spec.subTopicTitle,
    lessonTitle: spec.subTopicTitle,
    blocks,
  };
}

export const P7_MATH_HEAVY_V4_WAVE2: Record<string, UpperPrimaryLesson[]> = {
  "operations-on-whole-numbers": [
    lesson({
      id: "p7-math-operations-properties-factors-heavy-v4-wave2",
      term: "Term I",
      subject: "Mathematics",
      topicTitle: "Operations on Whole Numbers",
      subTopicTitle: "Operations, Properties, Factors and Multiples",
      definition: "Operations on whole numbers involve addition, subtraction, multiplication and division. P7 learners use these operations with place value, factors, multiples, prime factorisation, GCF and LCM.",
      simpleCheck: "Choose the correct operation before calculating.",
      categories: [
        cat("Addition and subtraction", "operations used to combine quantities or find difference", ["total population", "change after buying goods"]),
        cat("Multiplication and division", "operations used for equal groups, repeated addition, sharing and rate problems", ["12 boxes each with 24 books", "sharing 360 mangoes equally"]),
        cat("Prime factorisation", "writing a number as a product of prime factors", ["36 = 2 × 2 × 3 × 3"]),
        cat("GCF and LCM", "GCF is greatest common factor; LCM is lowest common multiple", ["GCF for grouping", "LCM for events happening together"]),
      ],
      examples: [
        ex("Commutative property", "3 + 5 = 5 + 3 and 4 × 6 = 6 × 4."),
        ex("Associative property", "(2 + 3) + 4 = 2 + (3 + 4)."),
        ex("Distributive property", "7 × 18 = 7 × (20 - 2) = 140 - 14 = 126."),
      ],
      facts: [
        "Subtraction and division are not commutative.",
        "Prime numbers have exactly two factors: 1 and the number itself.",
        "Use GCF when sharing into the largest equal groups.",
        "Use LCM when finding the first time repeated events meet again.",
      ],
      image: { title: "Four operations", imageUrl: "/images/math/p4-four-operations.svg", caption: "The four operations remain the foundation of PLE number work.", labels: ["add", "subtract", "multiply", "divide"] },
      worked: { question: "Find the GCF of 24 and 36.", steps: ["Write factors of 24: 1, 2, 3, 4, 6, 8, 12, 24.", "Write factors of 36: 1, 2, 3, 4, 6, 9, 12, 18, 36.", "The greatest common factor is 12."], answer: "12" },
      questions: [short("Name the four basic operations."), short("Find the GCF of 18 and 30.", "6"), mc("Which property is shown by 5 × (10 + 2) = 5×10 + 5×2?", ["Distributive", "Empty set", "Reflection", "Median"], "Distributive"), written("Find the LCM of 6 and 8.", "24")],
    }),
    lesson({
      id: "p7-math-bodmas-indices-standard-form-heavy-v4-wave2",
      term: "Term I",
      subject: "Mathematics",
      topicTitle: "Operations on Whole Numbers",
      subTopicTitle: "BODMAS, Indices and Standard Form",
      definition: "BODMAS is the order used to solve mixed-operation questions. Indices show repeated multiplication, and standard form writes very large or very small numbers using powers of 10.",
      simpleCheck: "Do brackets first, then orders/indices, then division/multiplication, then addition/subtraction.",
      categories: [cat("Brackets", "parts worked first", ["(8 + 2) × 3"]), cat("Orders / indices", "powers such as squares and cubes", ["4² = 16", "10³ = 1000"]), cat("Standard form", "a number written as A × 10ⁿ where A is at least 1 but less than 10", ["45,000 = 4.5 × 10⁴"] )],
      examples: [ex("BODMAS", "3 + 4 × 5 = 3 + 20 = 23, not 35."), ex("Index notation", "2 × 2 × 2 × 2 = 2⁴."), ex("Expanded using indices", "7,305 = 7×10³ + 3×10² + 0×10 + 5.")],
      facts: ["Multiplication and division are worked from left to right.", "Addition and subtraction are worked from left to right.", "In standard form, move the decimal point until one non-zero digit remains before it.", "Check place value carefully when using powers of 10."],
      worked: { question: "Simplify 18 - 2(3 + 4) + 5².", steps: ["Brackets: 3 + 4 = 7.", "Orders: 5² = 25.", "Multiplication: 2 × 7 = 14.", "Now 18 - 14 + 25 = 4 + 25 = 29."], answer: "29" },
      questions: [short("What does BODMAS help us decide?", "The order of operations."), short("Write 10,000 as a power of 10.", "10⁴"), mc("3 + 2 × 6 equals:", ["15", "30", "36", "11"], "15"), written("Write 72,000 in standard form.", "7.2 × 10⁴")],
    }),
  ],
  construction: [
    lesson({
      id: "p7-math-construction-lines-angles-heavy-v4-wave2",
      term: "Term II",
      subject: "Mathematics",
      topicTitle: "Construction and Geometry",
      subTopicTitle: "Lines, Angles and Geometrical Construction",
      definition: "Geometrical construction means drawing accurate lines, angles and shapes using a ruler, pencil, protractor and pair of compasses.",
      simpleCheck: "In construction, accuracy matters more than a rough sketch.",
      categories: [cat("Parallel lines", "lines that never meet", ["railway lines on a straight section"]), cat("Perpendicular lines", "lines that meet at 90 degrees", ["corner of a book"]), cat("Angle bisector", "a line dividing an angle into two equal angles", ["60° divided into 30° and 30°"]), cat("Perpendicular bisector", "a line cutting a segment into two equal parts at 90 degrees", ["bisecting AB"] )],
      examples: [ex("Constructing 60°", "Use arcs from the same radius to form an equilateral triangle angle."), ex("Bisecting a line", "Use equal compass arcs from both endpoints, then join arc intersections."), ex("Checking", "Measure with a protractor only after construction to confirm accuracy." )],
      facts: ["Use a sharp pencil for thin accurate lines.", "Do not change compass radius while drawing required equal arcs.", "Label points clearly with capital letters.", "Construction lines should remain visible unless the question asks for final answer only."],
      image: { title: "Parallel, perpendicular and transversal lines", imageUrl: "/images/math/parallel-perpendicular-transversal.png", caption: "Line relationships help in construction and angle calculation.", labels: ["parallel", "perpendicular", "transversal"] },
      activity: { title: "Construction practice", instructions: ["Draw a line segment AB of 8 cm.", "Construct its perpendicular bisector.", "Measure both halves to confirm they are equal." ] },
      questions: [short("What tool is used to draw arcs in construction?", "Pair of compasses."), short("How many degrees are in a right angle?", "90°"), mc("Parallel lines:", ["never meet", "meet at 90°", "are always curved", "form a circle"], "never meet"), written("State two rules for accurate construction.")],
    }),
    lesson({
      id: "p7-math-polygons-bearings-scale-heavy-v4-wave2",
      term: "Term II",
      subject: "Mathematics",
      topicTitle: "Construction and Geometry",
      subTopicTitle: "Polygons, Bearings and Scale Drawing",
      definition: "Polygons are closed plane shapes with straight sides. Bearings and scale drawing help learners describe direction and represent real distances on paper.",
      simpleCheck: "Bearings are measured clockwise from north using three digits.",
      categories: [cat("Regular polygon", "a polygon with all sides and angles equal", ["equilateral triangle", "square", "regular hexagon"]), cat("Bearing", "direction measured clockwise from north", ["090° is east", "180° is south"]), cat("Scale drawing", "a reduced or enlarged accurate drawing", ["1 cm represents 10 km"] )],
      examples: [ex("Interior angles", "A square has four right angles, each 90°."), ex("Bearing", "If a place is due west, its bearing is 270°."), ex("Scale", "If 1 cm represents 5 km, then 7 cm represents 35 km." )],
      facts: ["Use three digits when writing bearings, e.g. 045°.", "A regular hexagon can be constructed inside a circle using the radius as side length.", "Always write units in scale drawing answers.", "Check direction before measuring distance."],
      image: { title: "Compass bearings", imageUrl: "/images/math/compass-bearings-diagram.png", caption: "Bearings are read clockwise from north.", labels: ["000°", "090°", "180°", "270°"] },
      worked: { question: "A map scale is 1 cm represents 20 km. What real distance is represented by 6.5 cm?", steps: ["1 cm represents 20 km.", "6.5 cm represents 6.5 × 20 km.", "6.5 × 20 = 130."], answer: "130 km" },
      questions: [short("What is the bearing of east?", "090°"), short("Define a regular polygon."), mc("A due south bearing is:", ["180°", "090°", "270°", "045°"], "180°"), written("A scale says 1 cm represents 50 km. Find the real distance for 4 cm.", "200 km")],
    }),
  ],
  "length-mass-capacity": [
    lesson({
      id: "p7-math-perimeter-area-volume-heavy-v4-wave2",
      term: "Term III",
      subject: "Mathematics",
      topicTitle: "Length, Mass, Capacity and Money",
      subTopicTitle: "Perimeter, Area and Volume",
      definition: "Measurement uses standard units to find size. Perimeter measures distance around a shape, area measures surface covered, and volume measures space occupied by a solid.",
      simpleCheck: "Perimeter uses units, area uses square units, volume uses cubic units.",
      categories: [cat("Perimeter", "distance around a shape", ["fence around a garden"]), cat("Area", "amount of surface covered", ["floor space in square metres"]), cat("Volume", "space occupied by a solid", ["box space in cubic centimetres"] )],
      examples: [ex("Rectangle perimeter", "P = 2(l + w)."), ex("Rectangle area", "A = l × w."), ex("Cuboid volume", "V = l × w × h." )],
      facts: ["Convert units before calculating if measurements are different.", "Use cm² or m² for area.", "Use cm³ or m³ for volume.", "Draw a simple diagram when solving word problems."],
      image: { title: "2D geometry perimeter and area", imageUrl: "/images/math/2d-geometry-perimeter-area.svg", caption: "Perimeter and area measure different things.", labels: ["length", "width", "perimeter", "area"] },
      worked: { question: "Find the area of a rectangle 12 cm long and 8 cm wide.", steps: ["Area = length × width.", "Area = 12 × 8.", "12 × 8 = 96."], answer: "96 cm²" },
      questions: [short("Define perimeter."), short("What unit is suitable for area?", "Square units such as cm² or m²."), mc("Volume is measured in:", ["cubic units", "degrees", "percent", "shillings"], "cubic units"), written("Find the perimeter of a rectangle 9 cm by 5 cm.", "28 cm")],
    }),
    lesson({
      id: "p7-math-capacity-mass-money-heavy-v4-wave2",
      term: "Term III",
      subject: "Mathematics",
      topicTitle: "Length, Mass, Capacity and Money",
      subTopicTitle: "Capacity, Mass and Money Applications",
      definition: "Capacity measures how much liquid a container can hold. Mass measures the amount of matter in an object. Money problems involve buying, selling, profit, loss, discount and interest.",
      simpleCheck: "Profit = selling price minus cost price; loss = cost price minus selling price.",
      categories: [cat("Capacity", "amount a container can hold", ["litres", "millilitres"]), cat("Mass", "amount of matter in an object", ["grams", "kilograms", "tonnes"]), cat("Profit and loss", "comparison of selling price and cost price", ["shopkeeper sells above or below cost"]), cat("Interest", "extra money paid for using borrowed or saved money", ["simple interest"] )],
      examples: [ex("Capacity conversion", "1 litre = 1000 millilitres."), ex("Mass conversion", "1 kilogram = 1000 grams."), ex("Discount", "A reduction from the marked price." )],
      facts: ["Read whether the question asks for profit, loss, percentage profit or new price.", "Convert litres to millilitres before adding if needed.", "Do not confuse mass with weight in everyday P7 questions.", "Simple interest = Principal × Rate × Time / 100."],
      image: { title: "Measurement units", imageUrl: "/images/math/measurement-units.svg", caption: "Common units help compare quantities accurately.", labels: ["length", "mass", "capacity", "time"] },
      worked: { question: "A trader buys a bag at 80,000 shillings and sells it at 95,000 shillings. Find the profit.", steps: ["Profit = selling price - cost price.", "Profit = 95,000 - 80,000.", "Profit = 15,000."], answer: "UGX 15,000" },
      questions: [short("How many millilitres are in 1 litre?", "1000 ml"), short("State the formula for profit."), mc("Selling below cost price gives:", ["loss", "profit", "interest", "area"], "loss"), written("Find simple interest on 100,000 shillings at 10% for 2 years.", "20,000 shillings")],
    }),
  ],
  time: [
    lesson({
      id: "p7-math-time-clocks-timetables-heavy-v4-wave2",
      term: "Term II",
      subject: "Mathematics",
      topicTitle: "Time",
      subTopicTitle: "Clocks, Duration and Timetables",
      definition: "Time measures when events happen and how long they take. P7 learners read 12-hour and 24-hour clocks, calculate duration and interpret timetables.",
      simpleCheck: "In 24-hour time, afternoon and evening hours add 12 to the hour number except 12 noon.",
      categories: [cat("12-hour clock", "uses a.m. and p.m.", ["7:30 a.m.", "4:15 p.m."]), cat("24-hour clock", "counts hours from 00:00 to 23:59", ["07:30", "16:15"]), cat("Duration", "length of time between two moments", ["from 8:20 a.m. to 10:05 a.m."]), cat("Timetable", "table showing events and times", ["bus timetable", "school timetable"] )],
      examples: [ex("Convert", "3:45 p.m. = 15:45."), ex("Midnight", "12:00 midnight = 00:00."), ex("Duration", "From 09:10 to 10:00 is 50 minutes." )],
      facts: ["Read departure and arrival times carefully.", "Borrow 1 hour as 60 minutes when subtracting time.", "Use a number line if crossing noon or midnight.", "Write units: hours and minutes."],
      image: { title: "Clock and duration", imageUrl: "/images/math/time-clock-duration.svg", caption: "Clock reading supports timetable and duration questions.", labels: ["hour hand", "minute hand", "duration"] },
      worked: { question: "A bus leaves at 08:35 and arrives at 11:10. How long is the journey?", steps: ["From 08:35 to 09:35 = 1 hour.", "From 09:35 to 10:35 = 1 hour.", "From 10:35 to 11:10 = 35 minutes."], answer: "2 hours 35 minutes" },
      questions: [short("Convert 6:20 p.m. to 24-hour time.", "18:20"), short("What is duration?", "Length of time between two moments."), mc("12:00 midnight in 24-hour time is:", ["00:00", "12:00", "24:00", "06:00"], "00:00"), written("Find the time from 2:15 p.m. to 4:00 p.m.", "1 hour 45 minutes")],
    }),
  ],
};

export const P7_SCIENCE_HEAVY_V4_WAVE2: Record<string, UpperPrimaryLesson[]> = {
  "excretory-system": [
    lesson({
      id: "p7-science-excretory-organs-heavy-v4-wave2",
      term: "Term II",
      subject: "Integrated Science",
      topicTitle: "Excretory System",
      subTopicTitle: "Excretory Organs and Waste Products",
      definition: "Excretion is the removal of metabolic waste products from the body. The excretory system helps keep the body's internal conditions safe and balanced.",
      simpleCheck: "Excretion is not the same as egestion; excretion removes metabolic wastes.",
      categories: [cat("Kidneys", "filter blood and remove urea, excess water and salts", ["urine formation"]), cat("Skin", "removes sweat containing water, salts and small amounts of urea", ["sweating during heat"]), cat("Lungs", "remove carbon dioxide and water vapour", ["breathing out"]), cat("Liver", "breaks down excess amino acids and detoxifies some substances", ["deamination"] )],
      examples: [ex("Urine", "Contains urea, excess water and salts."), ex("Sweat", "Helps remove wastes and cool the body."), ex("Exhaled air", "Contains more carbon dioxide than inhaled air." )],
      facts: ["The kidneys filter blood continuously.", "The ureters carry urine from kidneys to the bladder.", "The bladder stores urine temporarily.", "The urethra carries urine out of the body."],
      image: { title: "Urinary system", imageUrl: "/images/science/urinary-system.png", caption: "The urinary system removes urea and excess water from blood.", labels: ["kidney", "ureter", "bladder", "urethra"] },
      questions: [short("Define excretion."), short("Name the organ that removes carbon dioxide." , "Lungs."), mc("Urea is mainly removed by the:", ["kidneys", "eyes", "teeth", "ears"], "kidneys"), written("Give three excretory organs and one waste removed by each.")],
    }),
    lesson({
      id: "p7-science-kidney-care-heavy-v4-wave2",
      term: "Term II",
      subject: "Integrated Science",
      topicTitle: "Excretory System",
      subTopicTitle: "Kidney Function and Care of Excretory Organs",
      definition: "The kidneys filter blood through tiny units called nephrons. Good health habits protect the kidneys, skin, lungs and liver from damage.",
      simpleCheck: "Drinking safe water supports kidney function.",
      categories: [cat("Filtration", "removing small waste materials from blood", ["blood entering kidney is filtered"]), cat("Reabsorption", "useful substances are taken back into blood", ["some water and salts"]), cat("Urination", "release of urine from the bladder", ["controlled by sphincter muscles"] )],
      examples: [ex("Kidney care", "Drink enough safe water and avoid misuse of medicines."), ex("Skin care", "Bathe regularly and wear clean clothes."), ex("Lung care", "Avoid smoking and dusty air where possible." )],
      facts: ["Kidney failure may require dialysis or transplant.", "Too much salt can strain body water balance.", "Exercise and cleanliness support skin function.", "Seek medical help for pain during urination or blood in urine."],
      image: { title: "Kidney nephron", imageUrl: "/images/science/kidney-nephron-diagram.png", caption: "Nephrons filter blood and help form urine.", labels: ["blood vessel", "filter", "tubule", "urine"] },
      questions: [short("What is the main function of kidneys?", "To filter blood and remove wastes."), short("Name one way to care for kidneys."), mc("Dialysis helps when the:", ["kidneys fail", "teeth grow", "hair is cut", "eyes blink"], "kidneys fail"), written("Explain why misuse of medicines can be dangerous to the kidneys.")],
    }),
  ],
  "simple-machines-friction": [
    lesson({
      id: "p7-science-simple-machines-heavy-v4-wave2",
      term: "Term II",
      subject: "Integrated Science",
      topicTitle: "Simple Machines and Friction",
      subTopicTitle: "Simple Machines, Levers and Mechanical Advantage",
      definition: "A simple machine is a basic device that makes work easier by changing the size or direction of a force. Examples include levers, pulleys, inclined planes, wedges, screws and wheel-and-axle systems.",
      simpleCheck: "Mechanical advantage compares load to effort.",
      categories: [cat("Lever", "rigid bar turning about a fixed point called fulcrum", ["see-saw", "crowbar", "spade"]), cat("Pulley", "wheel with a groove used with a rope", ["flag pole", "well pulley"]), cat("Inclined plane", "sloping surface used to raise loads with less effort", ["ramp"]), cat("Wheel and axle", "large wheel fixed to a smaller axle", ["steering wheel", "bicycle wheel"] )],
      examples: [ex("First-class lever", "Fulcrum is between effort and load, e.g. see-saw."), ex("Second-class lever", "Load is between fulcrum and effort, e.g. wheelbarrow."), ex("Third-class lever", "Effort is between fulcrum and load, e.g. fishing rod." )],
      facts: ["MA = Load ÷ Effort.", "A machine with MA greater than 1 multiplies force.", "Longer effort arm in a lever can reduce effort needed.", "Machines do not remove work completely; they make it easier."],
      image: { title: "Three classes of levers", imageUrl: "/images/science/three-classes-of-levers.png", caption: "Lever classes depend on the positions of fulcrum, load and effort.", labels: ["fulcrum", "load", "effort"] },
      worked: { question: "A lever lifts a 300 N load using 75 N effort. Find its mechanical advantage.", steps: ["MA = Load ÷ Effort.", "MA = 300 ÷ 75.", "MA = 4."], answer: "4" },
      questions: [short("Define a simple machine."), short("Write the formula for mechanical advantage."), mc("A wheelbarrow is mainly a:", ["second-class lever", "third-class lever", "pulley", "screw"], "second-class lever"), written("Give four examples of simple machines used at home or school.")],
    }),
    lesson({
      id: "p7-science-friction-heavy-v4-wave2",
      term: "Term II",
      subject: "Integrated Science",
      topicTitle: "Simple Machines and Friction",
      subTopicTitle: "Friction: Advantages, Disadvantages and Reduction",
      definition: "Friction is a force that opposes motion between surfaces in contact. It can be useful, but it can also waste energy and wear out surfaces.",
      simpleCheck: "Rough surfaces usually produce more friction than smooth surfaces.",
      categories: [cat("Useful friction", "friction that helps an activity", ["walking", "braking a bicycle", "writing with a pencil"]), cat("Harmful friction", "friction that causes wear, heat or wasted energy", ["worn tyres", "hot machine parts"]), cat("Reducing friction", "methods that make surfaces move more easily", ["lubrication", "ball bearings", "streamlining"] )],
      examples: [ex("Shoes", "Shoe soles need friction to prevent slipping."), ex("Oil", "Oil reduces friction between moving engine parts."), ex("Tread", "Tyre treads increase grip on roads." )],
      facts: ["Friction produces heat.", "Friction depends on surface roughness and how hard surfaces press together.", "Lubricants separate surfaces with a thin layer.", "Too little friction can cause slipping."],
      questions: [short("Define friction."), short("Give one advantage of friction."), mc("Oil is used in machines mainly to:", ["reduce friction", "increase rust", "stop electricity", "make sound"], "reduce friction"), written("Give two ways of reducing friction and one way of increasing friction.")],
    }),
  ],
  "energy-resources-environment": [
    lesson({
      id: "p7-science-energy-resources-heavy-v4-wave2",
      term: "Term I",
      subject: "Integrated Science",
      topicTitle: "Energy Resources in the Environment",
      subTopicTitle: "Renewable and Non-renewable Energy Resources",
      definition: "Energy resources are sources from which people obtain energy for cooking, lighting, transport, farming and industries. They may be renewable or non-renewable.",
      simpleCheck: "Renewable resources can be replaced naturally in a short time if managed well.",
      categories: [cat("Renewable energy", "energy from sources that can be naturally replaced", ["sun", "wind", "water", "biomass"]), cat("Non-renewable energy", "energy from sources that can be used up", ["coal", "petroleum", "natural gas"]), cat("Hydro-electric power", "electricity generated from moving water", ["dams on rivers"] )],
      examples: [ex("Solar energy", "Used for drying crops, lighting and charging devices."), ex("Biogas", "Gas made from rotting organic matter such as animal waste."), ex("Petroleum", "Used for transport fuels but causes pollution when burnt." )],
      facts: ["Fossil fuels formed from ancient living things over millions of years.", "Burning fossil fuels releases carbon dioxide and other pollutants.", "Renewable energy still needs careful management.", "Energy choice affects health, forests, air and climate."],
      image: { title: "Fossil fuels formation", imageUrl: "/images/science/fossil-fuels-formation.png", caption: "Fossil fuels take millions of years to form and are non-renewable.", labels: ["buried remains", "heat", "pressure", "fuel"] },
      questions: [short("Define renewable energy."), short("Give two examples of non-renewable energy resources."), mc("Solar energy comes from the:", ["sun", "soil", "moon", "magnet"], "sun"), written("State two environmental problems caused by burning fossil fuels.")],
    }),
    lesson({
      id: "p7-science-energy-conservation-heavy-v4-wave2",
      term: "Term I",
      subject: "Integrated Science",
      topicTitle: "Energy Resources in the Environment",
      subTopicTitle: "Energy Conservation and Environmental Care",
      definition: "Energy conservation means using energy carefully to avoid waste and protect the environment. It helps families save money and reduces damage to natural resources.",
      simpleCheck: "Switch off unused lights and appliances.",
      categories: [cat("Saving energy at home", "using less energy without losing important services", ["improved stoves", "switching off lights"]), cat("Saving fuelwood", "reducing unnecessary cutting of trees", ["energy-saving stoves", "tree planting"]), cat("Cleaner energy", "energy that causes less pollution", ["solar", "biogas", "wind"] )],
      examples: [ex("Improved stove", "Uses less firewood and produces less smoke."), ex("Tree planting", "Replaces trees cut for fuel and protects soil."), ex("Solar lamps", "Reduce kerosene smoke and fuel costs." )],
      facts: ["Smoke from poor cooking fuels can harm lungs and eyes.", "Deforestation can lead to soil erosion and reduced rainfall reliability.", "Energy conservation is part of environmental protection.", "Communities should balance energy needs with conservation."],
      image: { title: "Carbon oxygen cycle", imageUrl: "/images/science/carbon-oxygen-cycle.png", caption: "Plants and animals depend on balanced gases in the environment.", labels: ["oxygen", "carbon dioxide", "plants", "animals"] },
      activity: { title: "Home energy audit", instructions: ["List three energy sources used at home.", "Identify one energy-wasting habit.", "Suggest one safer or cleaner energy practice." ] },
      questions: [short("What is energy conservation?"), short("Give one way of saving fuelwood."), mc("An improved stove helps because it:", ["uses less firewood", "makes rivers dry", "increases smoke", "stops cooking"], "uses less firewood"), written("Explain why planting trees helps conserve energy resources.")],
    }),
  ],
  "interdependence-environment": [
    lesson({
      id: "p7-science-interdependence-foodchains-heavy-v4-wave2",
      term: "Term III",
      subject: "Integrated Science",
      topicTitle: "Interdependence of Things in the Environment",
      subTopicTitle: "Food Chains, Food Webs and Interdependence",
      definition: "Interdependence means living things depend on one another and on non-living things for survival. Food chains and food webs show feeding relationships in an ecosystem.",
      simpleCheck: "Energy in most food chains begins with the sun and green plants.",
      categories: [cat("Producer", "green plant that makes its own food", ["grass", "maize", "algae"]), cat("Consumer", "living thing that eats plants or animals", ["cow", "lion", "human being"]), cat("Decomposer", "organism that breaks down dead matter", ["bacteria", "fungi"]), cat("Food web", "many connected food chains", ["grassland web"] )],
      examples: [ex("Food chain", "grass → grasshopper → frog → snake → hawk."), ex("Pollination", "Insects get nectar while helping flowers form seeds."), ex("Decomposition", "Fungi and bacteria return nutrients to soil." )],
      facts: ["Arrows in a food chain show direction of energy flow.", "Removing one organism can affect many others.", "Habitats provide food, water, air and shelter.", "Balanced ecosystems support agriculture and human life."],
      image: { title: "Food chain", imageUrl: "/images/science/food-chain.png", caption: "Food chains show how energy moves through living things.", labels: ["producer", "consumer", "predator", "decomposer"] },
      questions: [short("Define interdependence."), short("What is a producer?"), mc("In a food chain, arrows show:", ["energy flow", "school roads", "rainfall only", "sound"], "energy flow"), written("Give one effect of removing frogs from a food chain with grasshoppers and snakes.")],
    }),
    lesson({
      id: "p7-science-environment-balance-conservation-heavy-v4-wave2",
      term: "Term III",
      subject: "Integrated Science",
      topicTitle: "Interdependence of Things in the Environment",
      subTopicTitle: "Environmental Balance and Conservation",
      definition: "Environmental balance is a stable relationship between living and non-living things. Conservation protects resources so that plants, animals and people can continue to survive.",
      simpleCheck: "Pollution and habitat destruction disturb environmental balance.",
      categories: [cat("Habitat conservation", "protecting places where organisms live", ["wetlands", "forests", "national parks"]), cat("Pollution control", "reducing harmful substances in air, water and land", ["proper waste disposal"]), cat("Sustainable use", "using resources without finishing or destroying them", ["controlled fishing", "tree planting"] )],
      examples: [ex("Wetlands", "Filter water, reduce floods and provide habitats."), ex("Forests", "Protect soil, support rainfall patterns and provide habitats."), ex("National parks", "Protect wildlife and support tourism." )],
      facts: ["Overgrazing exposes soil to erosion.", "Bush burning destroys habitats and soil organisms.", "Wetland drainage can increase flooding and reduce water quality.", "Conservation needs community cooperation."],
      activity: { title: "Conservation action plan", instructions: ["Name one local environmental problem.", "Identify who or what is affected.", "Suggest two realistic actions learners can take."], safetyNote: "Do not enter unsafe wetlands, dumps or forests without adult guidance." },
      questions: [short("What is conservation?"), short("Name one protected habitat."), mc("Which action protects soil?", ["planting trees", "overgrazing", "burning bushes", "dumping plastics"], "planting trees"), written("Explain why wetlands should be protected.")],
    }),
  ],
};

export const P7_ENGLISH_HEAVY_V4_WAVE2: Record<string, UpperPrimaryLesson[]> = {
  "school-holidays": [lesson({ id: "p7-english-school-holidays-heavy-v4-wave2", term: "Term I", subject: "English", topicTitle: "School Holidays", subTopicTitle: "Holiday Plans, Activities and Composition", definition: "School holidays are periods when learners are away from regular school lessons. In English, this topic builds vocabulary, tense use, sequencing and composition writing.", simpleCheck: "Use future tense for plans and past tense for completed activities.", categories: [cat("Future plans", "activities intended for a coming holiday", ["I shall visit my aunt.", "We are going to revise."]), cat("Past activities", "things already done", ["I visited my grandparents.", "We cleaned the compound."]), cat("Sequence words", "words showing order of events", ["first", "afterwards", "finally"] )], examples: [ex("Future", "During the next holiday, I shall help my parents in the shop."), ex("Past", "Last holiday, we travelled to Mbarara by bus."), ex("Composition", "A good holiday composition has an opening, ordered events and a closing sentence." )], facts: ["Keep one tense consistent unless the question asks for a change.", "Use time words to guide the reader.", "Paragraphs make a composition easier to read.", "Avoid listing activities without explaining them."], image: { title: "Composition paragraph structure", imageUrl: "/images/english/composition-paragraph-structure.png", caption: "Strong paragraphs have a topic sentence, supporting details and a closing sentence.", labels: ["topic", "details", "closing"] }, questions: [short("Which tense is used for completed holiday activities?", "Past tense."), short("Give two sequence words."), mc("Which word shows the final event?", ["Finally", "Firstly", "Meanwhile", "Before"], "Finally"), written("Write three sentences about a useful holiday activity.")] })],
  "electronic-media": [lesson({ id: "p7-english-electronic-media-heavy-v4-wave2", term: "Term II", subject: "English", topicTitle: "Electronic Media", subTopicTitle: "Radio, Television, Phones and Responsible Communication", definition: "Electronic media are communication channels that use electronic technology to send information, sound, pictures or messages.", simpleCheck: "Electronic media can inform, educate and entertain, but it must be used responsibly.", categories: [cat("Radio", "electronic medium that sends sound programmes", ["news", "weather", "talk shows"]), cat("Television", "medium that sends sound and moving pictures", ["news", "documentaries"]), cat("Mobile phone / internet", "digital tools for calls, messages and online information", ["SMS", "email", "web pages"] )], examples: [ex("Announcement", "The head teacher made an announcement over the radio."), ex("Dialogue", "A caller politely asked the presenter a question."), ex("Report", "Learners can write a short report about a television programme." )], facts: ["Use polite language in calls and messages.", "Check information before sharing it.", "Avoid harmful or disrespectful media content.", "Electronic media vocabulary includes broadcast, presenter, audience, signal and programme."], image: { title: "Communication media", imageUrl: "/images/english/p5-communication-media.svg", caption: "Electronic media help people send and receive information quickly.", labels: ["radio", "TV", "phone", "internet"] }, questions: [short("Define electronic media."), short("Name two examples of electronic media."), mc("A person who hosts a radio programme is a:", ["presenter", "passenger", "candidate", "farmer"], "presenter"), written("Write a polite phone message to your teacher explaining why you will be late.")] })],
  "rights-responsibilities-freedom": [lesson({ id: "p7-english-rights-responsibilities-heavy-v4-wave2", term: "Term II", subject: "English", topicTitle: "Rights, Responsibilities and Freedom", subTopicTitle: "Rights, Responsibilities and Freedom in Speech and Writing", definition: "A right is something a person is entitled to have. A responsibility is a duty a person should perform. Freedom is the ability to act or speak within fair rules and respect for others.", simpleCheck: "Every right goes with a responsibility.", categories: [cat("Child rights", "things children should receive for safe growth", ["education", "medical care", "protection"]), cat("Responsibilities", "duties learners should perform", ["respecting others", "keeping school clean"]), cat("Freedom", "ability to make choices within rules", ["freedom of expression with respect"] )], examples: [ex("Sentence", "Children have a right to education, but they also have a responsibility to study seriously."), ex("Debate point", "Freedom should not be used to insult or harm others."), ex("Animal needs", "Animals need food, water, shelter and care." )], facts: ["Use modal verbs such as should, must and ought to when giving advice.", "Use because to support an opinion with a reason.", "Respectful language is important when discussing rights.", "A good paragraph explains both right and responsibility."], questions: [short("What is a responsibility?"), short("Give one child right."), mc("Which modal verb gives strong advice?", ["must", "under", "slowly", "yesterday"], "must"), written("Write two sentences linking a right to its responsibility.")] })],
  "environmental-protection": [lesson({ id: "p7-english-environmental-protection-heavy-v4-wave2", term: "Term III", subject: "English", topicTitle: "Environmental Protection", subTopicTitle: "Environmental Vocabulary, Advice and Persuasive Writing", definition: "Environmental protection means caring for air, water, land, plants and animals so that people and other living things can live safely.", simpleCheck: "Persuasive writing should give clear reasons and practical actions.", categories: [cat("Environmental problem", "harmful condition in the environment", ["pollution", "deforestation", "soil erosion"]), cat("Protection action", "step taken to care for the environment", ["tree planting", "proper waste disposal"]), cat("Persuasive language", "words used to convince people", ["should", "must", "therefore", "because"] )], examples: [ex("Advice", "We should plant trees because they protect soil and provide shade."), ex("Notice", "Keep Our School Clean: Use the rubbish bins provided."), ex("Composition", "A good environmental composition names the problem, effects and solutions." )], facts: ["Use cause-and-effect words: because, therefore, as a result.", "Avoid vague solutions; name exact actions.", "Use present tense for facts and advice.", "End persuasive writing with a strong call to action."], questions: [short("Define environmental protection."), short("Give two environmental problems."), mc("Which sentence is persuasive?", ["We must stop dumping rubbish in the stream.", "The stream is blue.", "Yesterday was Tuesday.", "I have a pencil."], "We must stop dumping rubbish in the stream."), written("Write a short notice encouraging learners to keep the school compound clean.")] })],
  ceremonies: [lesson({ id: "p7-english-ceremonies-heavy-v4-wave2", term: "Term III", subject: "English", topicTitle: "Ceremonies", subTopicTitle: "Ceremonies, Invitations, Speeches and Reports", definition: "A ceremony is a formal or special event held for an important occasion. In English, ceremonies help learners practise invitations, speeches, reports and respectful vocabulary.", simpleCheck: "Use language that matches the occasion: joyful, respectful or sympathetic.", categories: [cat("Invitation", "message asking someone to attend an event", ["wedding invitation", "graduation invitation"]), cat("Speech", "formal talk given to an audience", ["welcome speech", "vote of thanks"]), cat("Report", "written account of what happened", ["report about a school ceremony"] )], examples: [ex("Wedding", "Use words such as bride, bridegroom, reception and guests."), ex("Funeral", "Use respectful words such as bereaved, condolence and burial."), ex("Vote of thanks", "Thank guests, organisers and participants politely." )], facts: ["An invitation should include date, time, venue and purpose.", "A speech needs greeting, body and closing.", "A report should follow the order of events.", "Respectful tone is very important in funeral-related writing."], questions: [short("What is a ceremony?"), short("Name two details found on an invitation card."), mc("The woman on her wedding day is called the:", ["bride", "bridegroom", "chairperson", "candidate"], "bride"), written("Write four lines of a vote of thanks after a school ceremony.")] })],
};

export const P7_SOCIAL_HEAVY_V4_WAVE2: Record<string, UpperPrimaryLesson[]> = {
  "climate-of-africa": [lesson({ id: "p7-sst-climate-africa-heavy-v4-wave2", term: "Term I", subject: "Social Studies", topicTitle: "Climate of Africa", subTopicTitle: "Climate Regions, Factors and Effects", definition: "Climate is the average weather condition of a place over a long period. Africa has different climate regions because of latitude, altitude, distance from the sea, winds and ocean currents.", simpleCheck: "Climate is long-term; weather is short-term.", categories: [cat("Equatorial climate", "hot and wet most of the year", ["Congo Basin", "parts of Uganda"]), cat("Savanna climate", "wet and dry seasons", ["much of East Africa"]), cat("Desert climate", "very low rainfall and high day temperatures", ["Sahara", "Kalahari"]), cat("Mediterranean climate", "hot dry summers and cool wet winters", ["North-west and south-west Africa"] )], examples: [ex("Altitude", "Highland areas are cooler than lowlands."), ex("Ocean currents", "Cold currents can reduce rainfall along some coasts."), ex("Human life", "Climate influences crops, clothing, housing and settlement." )], facts: ["The Equator influences high temperatures in tropical Africa.", "Relief rainfall occurs when moist air rises over highlands.", "Drought affects farming and livestock keeping.", "Climate change can worsen floods, droughts and food insecurity."], image: { title: "Africa climatic zones", imageUrl: "/images/social-studies/africa-climatic-zones.png", caption: "Africa has several climate regions with different rainfall and temperature patterns.", labels: ["equatorial", "savanna", "desert", "Mediterranean"] }, questions: [short("Define climate."), short("Name two factors affecting climate."), mc("The Sahara mainly has:", ["desert climate", "equatorial climate", "polar climate", "tundra"], "desert climate"), written("Explain how altitude affects temperature.")] })],
  "vegetation-of-africa": [lesson({ id: "p7-sst-vegetation-africa-heavy-v4-wave2", term: "Term I", subject: "Social Studies", topicTitle: "Vegetation of Africa", subTopicTitle: "Vegetation Zones, Uses and Conservation", definition: "Vegetation is the natural plant cover of an area. Africa's vegetation includes forests, savanna grasslands, deserts, Mediterranean vegetation and mountain vegetation.", simpleCheck: "Vegetation often changes with climate and altitude.", categories: [cat("Tropical rainforest", "dense evergreen forest in hot wet areas", ["Congo Basin"]), cat("Savanna", "grassland with scattered trees", ["East African plains"]), cat("Desert vegetation", "sparse drought-resistant plants", ["cactus-like plants", "thorn bushes"]), cat("Mountain vegetation", "plant cover changing with height", ["bamboo", "moorland"] )], examples: [ex("Uses", "Vegetation provides timber, medicine, pasture, fruits and wildlife habitats."), ex("Threat", "Deforestation removes plant cover and exposes soil."), ex("Conservation", "Afforestation, agroforestry and controlled grazing protect vegetation." )], facts: ["Savanna supports many wild animals and tourism.", "Forests help in rainfall formation and soil protection.", "Overgrazing can turn grassland into bare land.", "Protected areas help conserve vegetation and wildlife."], image: { title: "Africa vegetation belts", imageUrl: "/images/social-studies/africa-vegetation-belts.png", caption: "Vegetation belts are linked to climate, soils and human activity.", labels: ["rainforest", "savanna", "desert", "Mediterranean"] }, questions: [short("Define vegetation."), short("Name two vegetation zones in Africa."), mc("Dense evergreen forest is common in:", ["equatorial areas", "deserts", "polar regions", "salt lakes"], "equatorial areas"), written("Give three reasons for conserving vegetation.")] })],
  "people-ethnic-groups-settlement": [lesson({ id: "p7-sst-people-settlement-africa-heavy-v4-wave2", term: "Term II", subject: "Social Studies", topicTitle: "People of Africa, Ethnic Groups and Settlement Patterns", subTopicTitle: "Ethnic Groups, Migration and Settlement", definition: "The people of Africa belong to many ethnic groups with different languages, cultures and ways of life. Settlement patterns show how people are distributed in different places.", simpleCheck: "People settle where conditions support life and economic activity.", categories: [cat("Bantu", "large language group found in central, eastern and southern Africa", ["Baganda", "Basoga", "Kikuyu", "Zulu"]), cat("Nilotes", "groups historically linked to Nile Valley regions", ["Acholi", "Luo", "Maasai"]), cat("Settlement pattern", "arrangement of homes in an area", ["linear", "nucleated", "scattered"]), cat("Migration", "movement of people from one place to another", ["search for pasture", "trade", "security"] )], examples: [ex("Dense settlement", "Occurs near fertile soils, reliable rainfall, towns and transport routes."), ex("Sparse settlement", "Occurs in deserts, thick forests, steep mountains or disease-prone areas."), ex("Culture", "Language, food, dress, beliefs and customs identify communities." )], facts: ["Migration can spread culture, skills and technology.", "Population distribution is affected by climate, relief, soils, minerals and security.", "Urbanisation attracts people to towns for jobs and services.", "Respect for all ethnic groups promotes unity."], image: { title: "Bantu and Nilote migration map", imageUrl: "/images/social-studies/bantu-nilote-migration-map.png", caption: "Migration shaped settlement and cultural patterns in Africa.", labels: ["Bantu", "Nilotes", "routes", "settlement"] }, questions: [short("Define migration."), short("Name two factors affecting settlement."), mc("A settlement along a road or river is called:", ["linear", "scattered", "desert", "folded"], "linear"), written("Give two positive effects of migration.")] })],
  "post-independence-africa": [lesson({ id: "p7-sst-post-independence-africa-heavy-v4-wave2", term: "Term II", subject: "Social Studies", topicTitle: "Post-Independence Africa", subTopicTitle: "Achievements, Challenges and Pan-African Cooperation", definition: "Post-independence Africa refers to the period after African countries gained self-rule. Countries worked to build governments, economies, education, health services and unity.", simpleCheck: "Independence brought self-rule, but many colonial problems remained.", categories: [cat("Achievement", "positive progress after independence", ["more schools", "African leadership", "health centres"]), cat("Challenge", "problem faced after independence", ["poverty", "tribalism", "corruption", "civil wars"]), cat("Pan-Africanism", "idea of African unity and cooperation", ["OAU", "African Union"] )], examples: [ex("OAU", "Promoted decolonisation and unity among African states."), ex("AU", "Works on peace, development and cooperation."), ex("Challenge", "Military coups interrupted democratic governance in some countries." )], facts: ["Many countries inherited economies dependent on raw material exports.", "Education expansion helped create skilled citizens.", "Regional cooperation helps trade and conflict resolution.", "Good governance is important for development."], questions: [short("What does post-independence Africa mean?"), short("Name two challenges faced after independence."), mc("The OAU mainly promoted:", ["African unity", "desert formation", "volcanic eruption", "slave trade"], "African unity"), written("Give two achievements of African countries after independence.")] })],
  "economic-developments-africa": [lesson({ id: "p7-sst-economic-development-africa-heavy-v4-wave2", term: "Term III", subject: "Social Studies", topicTitle: "Economic Developments in Africa", subTopicTitle: "Agriculture, Mining, Industry, Trade and Transport", definition: "Economic development is the improvement of people's standards of living through productive activities such as farming, mining, industry, trade, transport and services.", simpleCheck: "Economic activities use resources to produce goods and services.", categories: [cat("Agriculture", "growing crops and keeping animals", ["coffee", "cotton", "cattle"]), cat("Mining", "extracting minerals from the earth", ["gold", "copper", "diamonds", "oil"]), cat("Industry", "processing raw materials into finished or semi-finished goods", ["cotton to cloth"]), cat("Trade", "buying and selling goods and services", ["local and international trade"] )], examples: [ex("Transport", "Roads, railways, air and water transport move people and goods."), ex("Tourism", "Wildlife, culture and physical features attract visitors."), ex("Challenge", "Landlocked countries may face higher transport costs." )], facts: ["Value addition increases income from raw materials.", "Reliable power supports industries.", "Good transport links farmers to markets.", "Political stability encourages investment."], image: { title: "Mining and agriculture processing", imageUrl: "/images/social-studies/mining-and-agriculture-processing.png", caption: "Processing raw materials adds value and creates jobs.", labels: ["raw material", "factory", "finished goods", "market"] }, questions: [short("Define economic development."), short("Name two economic activities in Africa."), mc("Processing cotton into cloth is an example of:", ["industry", "latitude", "rainfall", "migration"], "industry"), written("Explain why transport is important for trade.")] })],
  "major-world-organisations": [lesson({ id: "p7-sst-world-organisations-heavy-v4-wave2", term: "Term III", subject: "Social Studies", topicTitle: "Major World Organisations", subTopicTitle: "World Organisations, Roles and Challenges", definition: "World organisations are bodies formed by countries or groups to cooperate on peace, health, education, trade, children's rights, development and emergencies.", simpleCheck: "Match each organisation to its main role.", categories: [cat("United Nations", "world organisation promoting peace, security and cooperation", ["peacekeeping", "human rights"]), cat("UNICEF", "UN agency supporting children", ["immunisation", "education", "child protection"]), cat("WHO", "UN agency concerned with health", ["disease control", "health guidance"]), cat("Commonwealth", "association of many countries, many formerly linked to Britain", ["cooperation", "sports", "education"] )], examples: [ex("UNHCR", "Supports refugees and displaced people."), ex("FAO", "Works on food and agriculture."), ex("Red Cross", "Helps during disasters and conflict." )], facts: ["World organisations can provide aid, training and coordination.", "They may face challenges such as limited funds, conflicts and political disagreements.", "Uganda benefits from cooperation with regional and world bodies.", "Citizens should understand organisations by their roles, not only abbreviations."], questions: [short("What is the main role of WHO?", "Health."), short("Which organisation supports children?", "UNICEF."), mc("UNHCR mainly helps:", ["refugees", "mountains", "compass needles", "volcanoes"], "refugees"), written("Give two benefits of world organisations to African countries.")] })],
};
