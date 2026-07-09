import type { Topic } from "@/lib/topics";

// P5 Science beta content layer.
// Source map: content/curriculum/p5-science.json.
// Rule: NCDC first, build second. This follows the researched P5 Set One Integrated Science structure.

type Seed = {
  id: string;
  title: string;
  theme: string;
  minutes: number;
  objectives: string[];
  core: string[];
  worked: { problem: string; steps: string[]; answer: string };
  modules: Array<{
    id: string;
    title: string;
    bigIdea: string;
    learn: string[];
    question: string;
    steps: string[];
    answer: string;
    tryQ: string;
    choices: string[];
    explanation: string;
  }>;
  quiz: Array<{ q: string; choices: string[]; why: string }>;
};

function makeTopic(seed: Seed): Topic {
  return {
    id: seed.id,
    themeId: "p5-science-core",
    themeName: seed.theme,
    title: seed.title,
    estMinutes: seed.minutes,
    status: "published",
    reviewStatus: "beta",
    note: {
      intro: `P5 beta content: verify against official NCDC Primary Five Integrated Science before public-final release. ${seed.title} helps learners apply science to health, environment, farming and daily life.`,
      learningObjectives: seed.objectives,
      whatYouNeedToKnow: seed.core,
      worked: seed.worked,
      recap: seed.core.slice(0, 3),
    },
    subtopics: [
      {
        subtopicId: `${seed.id}-key-ideas`,
        title: "1. Key ideas",
        modules: seed.modules.slice(0, Math.ceil(seed.modules.length / 2)).map((m) => moduleToContent(m)),
      },
      {
        subtopicId: `${seed.id}-premium-practice`,
        title: "2. Premium practice and application",
        modules: seed.modules.slice(Math.ceil(seed.modules.length / 2)).map((m) => moduleToContent(m)),
      },
    ],
    quiz: seed.quiz.map((item) => ({ ...item, correct: 0 })),
  };
}

function moduleToContent(m: Seed["modules"][number]) {
  return {
    moduleId: m.id,
    title: m.title,
    bigIdea: m.bigIdea,
    learnIt: m.learn,
    workedExample: {
      question: m.question,
      steps: m.steps,
      answer: m.answer,
    },
    tryThis: {
      question: m.tryQ,
      choices: m.choices,
      correct: 0,
      explanation: m.explanation,
    },
  };
}

const SEEDS: Seed[] = [
  {
    id: "p5-keeping-poultry-bees",
    title: "Keeping Poultry and Bees",
    theme: "Science in Human Activities and Occupations",
    minutes: 32,
    objectives: ["Describe ways of keeping poultry.", "Explain good poultry feeding, housing and disease control.", "Describe the importance and life of bees."],
    core: ["Poultry includes birds such as chickens, ducks and turkeys kept by people.", "Good poultry management requires clean housing, proper feeding, clean water and disease control.", "Bees produce honey and wax and help pollinate crops."],
    worked: { problem: "Why should a farmer isolate a sick chicken?", steps: ["Some poultry diseases spread from bird to bird.", "Isolation reduces contact between sick and healthy birds.", "This protects the rest of the flock."], answer: "The farmer isolates the sick chicken to prevent disease from spreading." },
    modules: [
      { id: "poultry-management", title: "Poultry Management", bigIdea: "Healthy poultry need good housing, feeding and disease control.", learn: ["A good poultry house protects birds from rain, cold, predators and thieves.", "Birds need clean water and balanced feeds for growth and egg production.", "Vaccination, cleaning and isolating sick birds help control disease."], question: "Give two ways of caring for poultry.", steps: ["Think of feeding and housing.", "Think of disease prevention."], answer: "Provide clean housing and clean water, and vaccinate birds when advised by a veterinary worker.", tryQ: "Which practice helps prevent poultry diseases?", choices: ["Keeping the house clean", "Leaving droppings everywhere", "Mixing sick and healthy birds", "Giving dirty water"], explanation: "Clean housing reduces germs and pests." },
      { id: "bee-keeping", title: "Bee Keeping", bigIdea: "Bees are useful insects when managed safely and carefully.", learn: ["A bee colony has a queen, workers and drones.", "Bees produce honey and wax.", "Bees pollinate crops, helping fruits and seeds to form."], question: "Give two uses of bees to farmers.", steps: ["Bees pollinate flowers.", "Bees produce honey that can be eaten or sold."], answer: "Bees pollinate crops and produce honey.", tryQ: "Which bee lays eggs?", choices: ["Queen bee", "Worker bee", "Drone", "Larva"], explanation: "The queen bee lays eggs in a colony." },
    ],
    quiz: [
      { q: "Which bird is poultry?", choices: ["Chicken", "Goat", "Cow", "Tilapia"], why: "Chicken is a common poultry bird." },
      { q: "Why should poultry houses be cleaned?", choices: ["To reduce diseases", "To attract snakes", "To reduce eggs", "To make birds sick"], why: "Clean houses reduce germs and pests." },
      { q: "Which product is obtained from bees?", choices: ["Honey", "Milk", "Wool", "Cotton"], why: "Bees produce honey." },
      { q: "What is one role of bees in crop farming?", choices: ["Pollination", "Digging soil", "Milking cows", "Making bricks"], why: "Bees pollinate flowers." },
      { q: "A sick chicken should be:", choices: ["Isolated", "Mixed with chicks", "Sold as healthy", "Ignored"], why: "Isolation helps prevent disease spread." },
      { q: "Which bee is usually responsible for laying eggs?", choices: ["Queen bee", "Drone", "Worker bee", "Larva"], why: "The queen lays eggs." },
    ],
  },
  {
    id: "p5-measurement-science",
    title: "Measurement",
    theme: "Matter and Energy",
    minutes: 30,
    objectives: ["Name instruments used for measuring.", "Measure length, mass, capacity and time.", "Read scales and record correct units."],
    core: ["Length may be measured using a ruler, tape measure or metre rule.", "Mass may be measured using a weighing scale or balance.", "Capacity may be measured using a measuring cylinder or marked container."],
    worked: { problem: "Which instrument measures the mass of a bag of rice?", steps: ["Mass is the amount of matter in an object.", "Mass is measured using a balance or weighing scale."], answer: "A weighing scale or balance." },
    modules: [
      { id: "measurement-instruments", title: "Measuring Instruments", bigIdea: "Each quantity needs a suitable instrument and unit.", learn: ["Use a ruler or metre rule for length.", "Use a balance or weighing scale for mass.", "Use a measuring cylinder or marked jug for capacity."], question: "Which instrument measures 500 ml of water?", steps: ["Water amount is capacity.", "Millilitres measure capacity.", "Use a measuring cylinder or marked jug."], answer: "A measuring cylinder or marked jug.", tryQ: "Which instrument measures temperature?", choices: ["Thermometer", "Ruler", "Clock", "Compass"], explanation: "A thermometer measures temperature." },
      { id: "reading-scales", title: "Reading Scales", bigIdea: "Scales are read correctly by checking what each mark represents.", learn: ["Start reading from zero where appropriate.", "Check whether marks count by 1, 2, 5 or 10.", "Write both number and unit, such as 12 cm or 2 kg."], question: "A mark is halfway between 6 cm and 7 cm. What length is shown?", steps: ["Halfway between 6 and 7 is 6.5.", "The unit is centimetres."], answer: "6.5 cm", tryQ: "A complete measurement answer should have:", choices: ["number and unit", "number only", "unit only", "a drawing only"], explanation: "Measurement answers need number and unit." },
    ],
    quiz: [
      { q: "Which instrument measures length?", choices: ["Ruler", "Thermometer", "Clock", "Measuring jug"], why: "A ruler measures length." },
      { q: "Mass is commonly measured in:", choices: ["Kilograms", "Litres", "Hours", "Degrees only"], why: "Kilograms measure mass." },
      { q: "Capacity is commonly measured in:", choices: ["Litres", "Metres", "Kilograms", "Seconds"], why: "Litres measure capacity." },
      { q: "Which instrument measures time?", choices: ["Clock", "Ruler", "Beam balance", "Measuring cylinder"], why: "A clock measures time." },
      { q: "A thermometer measures:", choices: ["Temperature", "Length", "Mass", "Capacity"], why: "Thermometers measure temperature." },
      { q: "Why read a scale carefully?", choices: ["To avoid errors", "To change the object", "To make it heavier", "To remove units"], why: "Careful scale reading prevents wrong measurements." },
    ],
  },
  {
    id: "p5-immunisation",
    title: "Immunisation",
    theme: "Human Health",
    minutes: 28,
    objectives: ["Explain the meaning of immunisation.", "State the importance of immunisation.", "Describe use of health cards and schedules."],
    core: ["Immunisation is giving a vaccine to help the body fight a disease.", "Vaccines should be given by trained health workers.", "Health cards help track the vaccines a child has received."],
    worked: { problem: "Why should babies be taken for immunisation?", steps: ["Babies can get dangerous diseases.", "Vaccines help the body prepare to fight some diseases."], answer: "Babies are immunised to protect them from dangerous diseases." },
    modules: [
      { id: "meaning-immunisation", title: "Meaning and Importance", bigIdea: "Immunisation protects people against some serious diseases.", learn: ["A vaccine helps the body recognise and fight a disease.", "Immunisation reduces serious illness and death.", "Following health worker guidance keeps children safer."], question: "Give one reason immunisation is important.", steps: ["It helps prevent some diseases.", "It protects children and the community."], answer: "It protects children from some serious diseases.", tryQ: "Who should give vaccines?", choices: ["Trained health worker", "Any small child", "Untrained stranger", "Shopkeeper only"], explanation: "Vaccines should be given by trained health workers." },
      { id: "health-card", title: "Health Cards and Schedules", bigIdea: "Health records help families know which vaccines have been given and when to return.", learn: ["A child health card records immunisation visits.", "Parents should keep health cards safe.", "If a date is missed, ask a health worker for advice."], question: "Why is a child health card useful?", steps: ["It records vaccines already given.", "It helps parents know when to return."], answer: "It helps track immunisation and clinic visits.", tryQ: "A child health card is used to:", choices: ["Record health services", "Cook food", "Repair cars", "Measure land"], explanation: "A health card records services such as immunisation." },
    ],
    quiz: [
      { q: "Immunisation means:", choices: ["Giving vaccine to protect against disease", "Eating any food", "Washing clothes only", "Building a house"], why: "Immunisation uses vaccines for disease protection." },
      { q: "Who should give vaccines?", choices: ["Trained health worker", "Any passer-by", "Shopkeeper only", "Class monitor only"], why: "Vaccines should be given by trained health workers." },
      { q: "A health card helps to:", choices: ["Record immunisation", "Measure rainfall", "Draw maps", "Count goats only"], why: "It records health services." },
      { q: "A vaccine helps the body to:", choices: ["Fight a disease", "Grow feathers", "Turn into water", "Break bones"], why: "Vaccines prepare the body to fight disease." },
      { q: "If a child misses an immunisation date, the parent should:", choices: ["Ask a health worker", "Throw away the card", "Hide the child", "Do nothing forever"], why: "A health worker can advise." },
      { q: "Immunisation can help the community because:", choices: ["Diseases spread less easily", "Everyone stops eating", "Schools close forever", "Water disappears"], why: "Protection in many people can reduce spread." },
    ],
  },
  {
    id: "p5-digestive-system",
    title: "The Digestive System",
    theme: "Human Body",
    minutes: 32,
    objectives: ["Name parts of the digestive system.", "Explain digestion and the role of teeth.", "State ways to care for the digestive system."],
    core: ["Digestion breaks food into simpler substances the body can use.", "Teeth chew food into smaller pieces.", "Clean food, clean water and a balanced diet help digestive health."],
    worked: { problem: "Why is chewing food important?", steps: ["Chewing breaks food into smaller pieces.", "Small pieces are easier to swallow and digest."], answer: "Chewing helps break food into smaller pieces for digestion." },
    modules: [
      { id: "digestion-parts", title: "Parts and Process of Digestion", bigIdea: "Digestion begins in the mouth and continues through the stomach and intestines.", learn: ["The mouth chews food and mixes it with saliva.", "The stomach churns food.", "The small intestine absorbs useful digested food."], question: "Where does digestion begin?", steps: ["Food first enters the mouth.", "Chewing and saliva begin digestion."], answer: "Digestion begins in the mouth.", tryQ: "Which part absorbs digested food?", choices: ["Small intestine", "Ear", "Rib", "Skin"], explanation: "The small intestine absorbs digested food." },
      { id: "teeth-diet-hygiene", title: "Teeth, Diet and Hygiene", bigIdea: "Healthy teeth and clean food support good digestion.", learn: ["Brush teeth to prevent decay.", "Eat a balanced diet with energy-giving, body-building and protective foods.", "Wash hands and food to reduce germs."], question: "Give two ways to care for teeth.", steps: ["Brush teeth regularly.", "Avoid too much sugary food or clean teeth after eating."], answer: "Brush teeth regularly and avoid too much sugary food.", tryQ: "Which habit protects the digestive system?", choices: ["Washing hands before eating", "Eating dirty food", "Drinking unsafe water", "Never chewing food"], explanation: "Handwashing reduces germs entering the body." },
    ],
    quiz: [
      { q: "Digestion is:", choices: ["Breaking food into simpler substances", "Breathing air", "Pumping blood", "Hearing sound"], why: "Digestion breaks food down." },
      { q: "Where does digestion begin?", choices: ["Mouth", "Foot", "Ear", "Skin"], why: "Chewing begins in the mouth." },
      { q: "Which part absorbs digested food?", choices: ["Small intestine", "Teeth", "Tongue only", "Windpipe"], why: "The small intestine absorbs digested food." },
      { q: "Which habit protects the digestive system?", choices: ["Washing fruits before eating", "Eating food from the floor", "Drinking dirty water", "Using dirty plates"], why: "Washing fruits removes dirt and germs." },
      { q: "Tooth decay can be reduced by:", choices: ["Brushing teeth", "Eating sweets all day", "Never cleaning teeth", "Sharing dirty toothbrushes"], why: "Brushing removes food remains." },
      { q: "Which organ churns food?", choices: ["Stomach", "Lungs", "Heart", "Brain"], why: "The stomach churns food." },
    ],
  },
  {
    id: "p5-components-environment-soil",
    title: "Components of the Environment: Soil",
    theme: "The Environment",
    minutes: 30,
    objectives: ["Name components and types of soil.", "State uses of soil.", "Explain soil erosion and conservation."],
    core: ["Soil contains mineral particles, air, water, humus and living organisms.", "Common soil types include sandy, clay and loam soil.", "Soil erosion is removal of topsoil by water, wind or human activity."],
    worked: { problem: "Give two ways of preventing soil erosion.", steps: ["Planting grass or trees holds soil.", "Terracing or contour ploughing slows running water."], answer: "Plant vegetation and use terracing or contour ploughing." },
    modules: [
      { id: "soil-parts-types", title: "Soil Components and Types", bigIdea: "Soil is a mixture that supports plant and animal life.", learn: ["Humus comes from decayed plant and animal matter.", "Sandy soil drains water quickly.", "Loam is a useful mixture for many crops."], question: "Why is humus important in soil?", steps: ["Humus comes from decayed matter.", "It adds nutrients and improves soil."], answer: "Humus adds nutrients to soil.", tryQ: "Which soil is generally best for many crops?", choices: ["Loam soil", "Dry sand only", "Pure clay only", "Stones only"], explanation: "Loam has a good mixture of particles and humus." },
      { id: "soil-erosion-conservation", title: "Soil Erosion and Conservation", bigIdea: "Topsoil is valuable and must be protected.", learn: ["Running water can wash away topsoil.", "Wind can blow away dry loose soil.", "Vegetation, mulching, terracing and contour ploughing help protect soil."], question: "Why does planting grass reduce erosion?", steps: ["Grass roots hold soil together.", "Grass cover reduces force of runoff and raindrops."], answer: "Grass holds and covers the soil, reducing erosion.", tryQ: "Which activity increases erosion?", choices: ["Cutting all vegetation", "Planting trees", "Mulching", "Terracing"], explanation: "Removing vegetation leaves soil exposed." },
    ],
    quiz: [
      { q: "Which part of soil comes from decayed matter?", choices: ["Humus", "Plastic", "Glass", "Petrol"], why: "Humus is decayed plant and animal matter." },
      { q: "Which soil drains water fastest?", choices: ["Sandy soil", "Clay soil", "Loam soil", "Swamp soil"], why: "Sandy soil has large particles." },
      { q: "Soil erosion means:", choices: ["Removal of topsoil", "Making soil", "Watering plants", "Planting seeds"], why: "Erosion removes topsoil." },
      { q: "Which prevents soil erosion?", choices: ["Planting grass", "Bush burning", "Overgrazing", "Cutting all trees"], why: "Grass roots hold soil." },
      { q: "Which agent can cause erosion?", choices: ["Running water", "School bell", "Chalk", "Book"], why: "Running water can wash soil away." },
      { q: "Which practice conserves soil?", choices: ["Mulching", "Overgrazing", "Bush burning", "Digging down slopes only"], why: "Mulching covers soil." },
    ],
  },
  {
    id: "p5-heat-energy",
    title: "Heat Energy",
    theme: "Matter and Energy",
    minutes: 28,
    objectives: ["Name sources of heat.", "Describe effects of heat.", "Explain expansion and contraction.", "State safety precautions."],
    core: ["Heat can come from the sun, fire, electricity, friction and fuels.", "Heat can cook, dry, melt, boil or burn things.", "Most materials expand when heated and contract when cooled."],
    worked: { problem: "Why are gaps left between metal rails?", steps: ["Metal expands when heated.", "Gaps give space for expansion.", "Without gaps, rails may bend."], answer: "Gaps allow metal rails to expand safely." },
    modules: [
      { id: "heat-sources-effects", title: "Sources and Effects of Heat", bigIdea: "Heat causes useful and dangerous changes.", learn: ["The sun is the main natural source of heat.", "Heat cooks food and dries clothes.", "Too much heat can burn skin or start fires."], question: "Give two useful effects of heat.", steps: ["Heat cooks food.", "Heat dries wet clothes or boils water."], answer: "Heat cooks food and dries clothes.", tryQ: "Which is a source of heat?", choices: ["Sun", "Ice only", "Shadow", "Cold water"], explanation: "The sun gives heat." },
      { id: "expansion-contraction", title: "Expansion and Contraction", bigIdea: "Heating and cooling can change the size of materials.", learn: ["Expansion is increase in size when heated.", "Contraction is decrease in size when cooled.", "Metal lids and railway lines show effects of expansion."], question: "Why may a tight metal lid open after warming?", steps: ["Heat makes the metal lid expand.", "The expanded lid becomes easier to open."], answer: "The lid expands when warmed.", tryQ: "Most materials expand when:", choices: ["Heated", "Cooled", "Hidden", "Painted only"], explanation: "Heating usually causes expansion." },
    ],
    quiz: [
      { q: "Which is the main natural source of heat?", choices: ["Sun", "Moon only", "Soil", "Wind only"], why: "The sun gives heat." },
      { q: "Heat can be used to:", choices: ["Cook food", "Freeze fire", "Make darkness", "Stop all movement"], why: "Heat cooks food." },
      { q: "Expansion means:", choices: ["Increase in size", "Decrease in size", "Disappear", "Break always"], why: "Expansion is increase in size." },
      { q: "Contraction often happens when materials are:", choices: ["Cooled", "Heated", "Burnt only", "Stretched always"], why: "Cooling often causes contraction." },
      { q: "Why handle hot saucepans carefully?", choices: ["To avoid burns", "To increase smoke", "To make them dirty", "To waste heat"], why: "Hot objects can burn skin." },
      { q: "Friction can produce:", choices: ["Heat", "Rain", "Soil", "Sound only"], why: "Rubbing can produce heat." },
    ],
  },
  {
    id: "p5-crop-growing",
    title: "Occupations in Our Community: Crop Growing",
    theme: "Science in Human Activities and Occupations",
    minutes: 30,
    objectives: ["Name common crops and farm tools.", "Describe soil preparation and crop care.", "Explain harvesting and storage."],
    core: ["Crop growing is cultivation of plants for food, income or raw materials.", "Farm tools include hoes, pangas, rakes, watering cans and wheelbarrows.", "Good crop care includes weeding, watering, mulching and pest control."],
    worked: { problem: "Why should a farmer weed a garden?", steps: ["Weeds compete with crops for water, nutrients, light and space.", "Removing weeds helps crops grow better."], answer: "A farmer weeds to reduce competition and help crops grow well." },
    modules: [
      { id: "farm-tools", title: "Farm Tools", bigIdea: "Tools help farmers prepare land, plant, care for crops and harvest.", learn: ["A hoe is used for digging and weeding.", "A rake can collect rubbish or level soil.", "A watering can provides water to young plants."], question: "Which tool is used for digging?", steps: ["A hoe is a common digging tool.", "It can also be used for weeding."], answer: "A hoe is used for digging.", tryQ: "Which tool waters seedlings?", choices: ["Watering can", "Saw", "Hammer", "Spanner"], explanation: "A watering can is used to water plants." },
      { id: "crop-care-storage", title: "Crop Care and Storage", bigIdea: "Crops need care from planting to storage.", learn: ["Weeding removes unwanted plants.", "Mulching reduces water loss.", "Dry clean storage reduces rotting and pest damage."], question: "Why should harvested maize be dried before storage?", steps: ["Drying reduces moisture.", "Low moisture reduces rotting and mould."], answer: "Maize is dried to prevent rotting and mould.", tryQ: "Which practice helps crops in dry weather?", choices: ["Mulching", "Burning all plants", "Removing soil", "Breaking roots"], explanation: "Mulching reduces water loss." },
    ],
    quiz: [
      { q: "Which tool is used for digging?", choices: ["Hoe", "Needle", "Thermometer", "Telephone"], why: "A hoe is a farm tool." },
      { q: "Why do farmers weed crops?", choices: ["To reduce competition", "To feed weeds", "To kill crops", "To remove all soil"], why: "Weeds compete with crops." },
      { q: "Which is a crop?", choices: ["Maize", "Goat", "Chicken", "Cow"], why: "Maize is a crop." },
      { q: "Mulching helps to:", choices: ["Reduce water loss", "Burn soil", "Increase erosion", "Break crops"], why: "Mulch covers soil." },
      { q: "Stored grain should be kept:", choices: ["Dry", "Wet", "Under rain", "In dirty water"], why: "Dry storage reduces rotting." },
      { q: "Pest control helps to:", choices: ["Protect crops", "Feed pests", "Destroy tools", "Stop germination always"], why: "Pest control protects crops." },
    ],
  },
  {
    id: "p5-bacteria-fungi",
    title: "Bacteria and Fungi",
    theme: "The World of Living Things",
    minutes: 28,
    objectives: ["Describe bacteria and fungi simply.", "State useful and harmful effects.", "Explain hygiene practices that reduce harm."],
    core: ["Bacteria are very tiny living things.", "Fungi include moulds, mushrooms and yeasts.", "Some bacteria and fungi are useful, while others cause disease or spoil food."],
    worked: { problem: "Why should food be covered?", steps: ["Uncovered food can be contaminated by germs and flies.", "Covering food reduces contamination."], answer: "Food should be covered to keep away germs and flies." },
    modules: [
      { id: "microbes-use-harm", title: "Useful and Harmful Microbes", bigIdea: "Bacteria and fungi affect food, health and the environment.", learn: ["Some microbes help decompose dead matter.", "Yeast is a fungus used in baking.", "Harmful microbes can spoil food or cause disease."], question: "Give one useful fungus.", steps: ["Yeast is a fungus.", "It is used in baking."], answer: "Yeast is a useful fungus used in baking.", tryQ: "Which fungus is used in baking?", choices: ["Yeast", "Mosquito", "Tick", "Tapeworm"], explanation: "Yeast is used in baking." },
      { id: "microbe-hygiene", title: "Hygiene and Prevention", bigIdea: "Good hygiene reduces the spread of harmful microbes.", learn: ["Wash hands before eating and after using the latrine.", "Boil unsafe drinking water.", "Keep food covered and dispose of rubbish properly."], question: "How can a family reduce germs in drinking water?", steps: ["Boil water or treat it safely.", "Store it in a clean covered container."], answer: "They can boil water and store it safely.", tryQ: "Which habit reduces disease spread?", choices: ["Washing hands", "Eating dirty food", "Leaving food uncovered", "Sharing dirty cups"], explanation: "Handwashing removes many germs." },
    ],
    quiz: [
      { q: "Which fungus is used in baking?", choices: ["Yeast", "Mosquito", "Rat", "Tick"], why: "Yeast is used in baking." },
      { q: "Bacteria are usually:", choices: ["Very tiny living things", "Large stones", "Vehicles", "Books"], why: "Bacteria are very small." },
      { q: "Which may spoil food?", choices: ["Mould", "Clean plate", "Fresh air only", "Sunlight only"], why: "Mould can spoil food." },
      { q: "Which habit reduces germs?", choices: ["Washing hands", "Eating dirty food", "Sharing dirty cups", "Leaving rubbish everywhere"], why: "Handwashing reduces germs." },
      { q: "A mushroom is a type of:", choices: ["Fungus", "Insect", "Bird", "Fish"], why: "Mushrooms are fungi." },
      { q: "Unsafe water should be:", choices: ["Boiled before drinking", "Stored open near rubbish", "Mixed with soil", "Ignored"], why: "Boiling can make water safer." },
    ],
  },
  {
    id: "p5-types-of-changes",
    title: "Types of Changes: Biological, Physical and Chemical Changes",
    theme: "Managing Changes in the Environment",
    minutes: 28,
    objectives: ["Identify biological, physical and chemical changes.", "Distinguish reversible and irreversible changes.", "Give daily-life examples."],
    core: ["Biological changes happen in living things, such as growth or decay.", "Physical changes change form, size or state without necessarily forming a new substance.", "Chemical changes form new substances and are often difficult to reverse."],
    worked: { problem: "Classify rusting of iron.", steps: ["Rusting forms a new substance called rust.", "It is not easy to reverse."], answer: "Rusting is a chemical change." },
    modules: [
      { id: "classifying-changes", title: "Classifying Changes", bigIdea: "Changes can be grouped by what happens to the material or living thing.", learn: ["Biological changes include germination, growth and rotting.", "Physical changes include melting, freezing and cutting.", "Chemical changes include burning, rusting and cooking."], question: "Classify melting ice.", steps: ["Ice changes from solid to liquid water.", "No new substance is formed.", "It can freeze again."], answer: "Melting ice is a physical change.", tryQ: "Which is a biological change?", choices: ["Seed germination", "Melting wax", "Breaking glass", "Rusting iron"], explanation: "Seed germination happens in a living thing." },
      { id: "reversible-irreversible", title: "Reversible and Irreversible Changes", bigIdea: "Some changes can be reversed while others cannot easily be undone.", learn: ["Freezing water can be reversed by melting.", "Burning wood cannot easily be reversed.", "Cooking an egg is an irreversible change."], question: "Is boiling water to steam reversible?", steps: ["Steam can cool.", "Cooling steam forms water again."], answer: "Yes, it is reversible by condensation.", tryQ: "Which change is irreversible?", choices: ["Burning paper", "Melting ice", "Freezing water", "Evaporating water"], explanation: "Burning paper forms new substances." },
    ],
    quiz: [
      { q: "Which is a biological change?", choices: ["Growth of a plant", "Melting ice", "Breaking a cup", "Boiling water"], why: "Growth happens in living things." },
      { q: "Which is a physical change?", choices: ["Melting ice", "Rusting iron", "Burning paper", "Rotting fruit"], why: "Melting changes state without forming a new substance." },
      { q: "Which is a chemical change?", choices: ["Burning wood", "Cutting paper", "Melting wax", "Freezing water"], why: "Burning forms new substances." },
      { q: "Rusting of iron is a:", choices: ["Chemical change", "Physical change only", "Measurement", "Sound"], why: "Rusting forms rust." },
      { q: "Which change is reversible?", choices: ["Freezing water", "Burning paper", "Cooking an egg", "Rusting iron"], why: "Frozen water can melt again." },
      { q: "A seed germinating is a:", choices: ["Biological change", "Telephone call", "Banking service", "Road sign"], why: "Germination is a living process." },
    ],
  },
];

export const P5_SCIENCE_TOPICS: Topic[] = SEEDS.map(makeTopic);

export function getP5ScienceTopic(id: string): Topic | undefined {
  return P5_SCIENCE_TOPICS.find((topic) => topic.id === id);
}
