import type { UpperPrimaryLesson } from "@/lib/content-blocks";
import type { Topic } from "@/lib/topics";
import { addUpperPrimaryScienceV4 } from "@/lib/v4-science-helpers";

// P5 Integrated Science enriched beta content layer.
// Source map: content/curriculum/p5-science.json
// Rule: NCDC first, build second. This file follows the researched NCDC P5 Integrated Science topic structure.
// Status: live beta until checked by human science/health reviewers.


const P5_POULTRY_BREEDS_V4: UpperPrimaryLesson = {
  id: "p5-v4-breeds-of-poultry",
  classLevel: "P5",
  term: "Term I",
  curriculumMode: "subject",
  subject: "Integrated Science",
  topicTitle: "Keeping Poultry and Bees",
  subTopicTitle: "Breeds of Poultry",
  lessonTitle: "Breeds of Poultry",
  blocks: [
    {
      kind: "definition",
      term: "poultry",
      definition: "are domestic birds kept by people for eggs, meat, feathers, manure or income.",
      simpleCheck: "Chickens, ducks, turkeys and geese are poultry birds.",
    },
    {
      kind: "categories",
      title: "Types of poultry breeds",
      categories: [
        {
          name: "Local / indigenous breeds",
          definition: "These are poultry birds commonly kept in local communities and adapted to local conditions.",
          examples: ["local chickens", "local ducks", "local turkeys"],
          notes: ["They are usually hardy and can survive local conditions better than many exotic birds.", "They often lay fewer eggs than improved exotic layers."],
        },
        {
          name: "Exotic / improved breeds",
          definition: "These are breeds introduced or improved for higher production of eggs or meat.",
          examples: ["White Leghorn", "Light Sussex", "Rhode Island Red", "Plymouth Rock"],
          notes: ["They usually need better feeding, housing and disease control.", "Examples must be verified with Ugandan textbooks/teacher review before premium-final status."],
        },
      ],
    },
    {
      kind: "categories",
      title: "Breeds grouped by purpose",
      categories: [
        {
          name: "Layers",
          definition: "Layers are poultry birds kept mainly for laying eggs.",
          examples: ["White Leghorn", "Light Sussex"],
          notes: ["Layers usually have smaller bodies than meat birds.", "They need good feeds rich in nutrients for egg production."],
        },
        {
          name: "Broilers",
          definition: "Broilers are poultry birds kept mainly for meat production.",
          examples: ["commercial broiler chickens"],
          notes: ["They grow fast when well fed and well housed.", "Specific breed names should be checked with a P5 Science teacher/textbook."],
        },
        {
          name: "Dual-purpose breeds",
          definition: "Dual-purpose birds are kept for both eggs and meat.",
          examples: ["Rhode Island Red", "Plymouth Rock"],
          notes: ["They are useful where farmers want both eggs and meat."],
        },
      ],
    },
    {
      kind: "examples",
      title: "Examples of poultry birds",
      examples: [
        { name: "chicken", explanation: "kept for eggs and meat", localContext: "common in many Ugandan homes" },
        { name: "duck", explanation: "kept for eggs and meat", localContext: "often kept near wet places" },
        { name: "turkey", explanation: "kept for meat", localContext: "kept by some farmers" },
        { name: "goose", explanation: "kept for meat, eggs or guarding compounds", localContext: "less common than chickens" },
      ],
    },
    {
      kind: "characteristics",
      title: "Characteristics of exotic poultry breeds",
      points: [
        "They usually produce more eggs or meat than local birds when well managed.",
        "They need good housing, balanced feeds and clean water.",
        "They may be more affected by diseases if not well cared for.",
        "Some layers do not sit well on eggs, so farmers may use incubators or other hens for hatching.",
      ],
    },
    {
      kind: "uses",
      title: "Uses / importance of poultry",
      points: [
        "Poultry provide eggs for food and sale.",
        "Poultry provide meat.",
        "Poultry droppings can be used as manure.",
        "Poultry keeping provides income to farmers.",
        "Feathers may be used for some household or craft purposes.",
      ],
    },
    {
      kind: "diagram",
      title: "Poultry summary card",
      imageUrl: "/images/science/p5-poultry-bees.svg",
      caption: "A P5 Science study card showing poultry and bee keeping reminders.",
      labels: ["local breeds", "exotic breeds", "layers", "broilers", "dual-purpose"],
    },
    {
      kind: "exercise",
      title: "Evaluation",
      questions: [
        { type: "short-answer", prompt: "What is poultry?", answer: "Domestic birds kept for eggs, meat, feathers, manure or income." },
        { type: "short-answer", prompt: "Give two examples of poultry birds.", answer: "Chicken, duck, turkey or goose." },
        { type: "short-answer", prompt: "What is a layer?", answer: "A bird kept mainly for laying eggs." },
        { type: "short-answer", prompt: "What is a broiler?", answer: "A bird kept mainly for meat production." },
        { type: "short-answer", prompt: "State one difference between local and exotic poultry breeds.", answer: "Exotic breeds often produce more but need better feeding and housing." },
        { type: "multiple-choice", prompt: "Which breed group is kept mainly for eggs?", choices: ["layers", "broilers", "goats", "fish"], answer: "layers" },
      ],
    },
  ],
};

const P5_DIGESTIVE_SYSTEM_V4: UpperPrimaryLesson[] = [
  {
    id: "p5-v4-digestion-meaning-pathway",
    classLevel: "P5",
    term: "Term II",
    curriculumMode: "subject",
    subject: "Integrated Science",
    topicTitle: "The Digestive System",
    subTopicTitle: "Meaning and Food Pathway",
    lessonTitle: "Meaning and Food Pathway",
    blocks: [
      { kind: "definition", term: "digestion", definition: "is the process by which food is broken down into simpler soluble substances that the body can use.", simpleCheck: "Chewing food into smaller pieces is the beginning of digestion." },
      { kind: "categories", title: "Main parts of the digestive system", categories: [
        { name: "Mouth", definition: "where digestion begins; teeth chew food and saliva moistens it", examples: ["teeth", "tongue", "saliva"] },
        { name: "Oesophagus", definition: "the tube that carries swallowed food from the mouth to the stomach", examples: ["food pipe"] },
        { name: "Stomach", definition: "a muscular bag that churns food and mixes it with digestive juices", examples: ["churning", "temporary food storage"] },
        { name: "Small intestine", definition: "where most digestion ends and useful digested food is absorbed", examples: ["absorption of nutrients"] },
        { name: "Large intestine", definition: "where water is absorbed from undigested food", examples: ["formation of faeces"] },
        { name: "Rectum and anus", definition: "parts that store and remove faeces from the body", examples: ["egestion"] },
      ] },
      { kind: "diagram", title: "Digestive system diagram", imageUrl: "/images/science/p5-digestive-system-simple.svg", caption: "The food pathway through the digestive system.", labels: ["mouth", "oesophagus", "stomach", "small intestine", "large intestine", "anus"] },
      { kind: "characteristics", title: "Food pathway", points: ["Food enters the mouth.", "Teeth chew food into small pieces.", "Saliva moistens food and starts digestion of starch.", "Food passes through the oesophagus to the stomach.", "Food is churned in the stomach.", "Useful digested food is absorbed in the small intestine.", "Water is absorbed in the large intestine.", "Waste leaves the body through the anus." ] },
      { kind: "worked-example", question: "Why is chewing important in digestion?", steps: ["Chewing breaks food into smaller pieces.", "Small pieces mix better with saliva and digestive juices.", "This makes digestion easier."], answer: "Chewing helps break food into small pieces so digestion becomes easier." },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "What is digestion?", answer: "Breaking food into simpler soluble substances the body can use." },
        { type: "short-answer", prompt: "Name four parts of the digestive system.", answer: "Mouth, oesophagus, stomach, small intestine, large intestine, rectum or anus." },
        { type: "multiple-choice", prompt: "Where does digestion begin?", choices: ["mouth", "foot", "ear", "hand"], answer: "mouth" },
      ] },
    ],
  },
  {
    id: "p5-v4-teeth-saliva-digestion",
    classLevel: "P5",
    term: "Term II",
    curriculumMode: "subject",
    subject: "Integrated Science",
    topicTitle: "The Digestive System",
    subTopicTitle: "Teeth, Saliva and Digestion",
    lessonTitle: "Teeth, Saliva and Digestion",
    blocks: [
      { kind: "definition", term: "saliva", definition: "is a liquid produced in the mouth that moistens food and starts digestion of starch.", simpleCheck: "Dry food becomes easier to swallow when mixed with saliva." },
      { kind: "categories", title: "Mouth parts and their roles", categories: [
        { name: "Teeth", definition: "break food into small pieces by biting, tearing, crushing and grinding", examples: ["incisors", "canines", "premolars", "molars"] },
        { name: "Tongue", definition: "mixes food with saliva and helps push food for swallowing", examples: ["tasting", "mixing", "swallowing"] },
        { name: "Saliva", definition: "moistens food and begins chemical digestion of starch", examples: ["softening food", "making swallowing easier"] },
      ] },
      { kind: "characteristics", title: "Mechanical and chemical digestion", points: ["Mechanical digestion is physical breaking of food into smaller pieces, such as chewing.", "Chemical digestion uses digestive juices to change food into simpler substances.", "Teeth mainly help mechanical digestion.", "Saliva begins chemical digestion in the mouth." ] },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "What is saliva?", answer: "A liquid in the mouth that moistens food and starts digestion of starch." },
        { type: "short-answer", prompt: "Give two functions of the tongue during digestion.", answer: "Mixes food with saliva and helps swallowing." },
        { type: "multiple-choice", prompt: "Which liquid moistens food in the mouth?", choices: ["saliva", "urine", "sweat", "blood"], answer: "saliva" },
      ] },
    ],
  },
  {
    id: "p5-v4-care-digestive-system",
    classLevel: "P5",
    term: "Term II",
    curriculumMode: "subject",
    subject: "Integrated Science",
    topicTitle: "The Digestive System",
    subTopicTitle: "Care of the Digestive System",
    lessonTitle: "Care of the Digestive System",
    blocks: [
      { kind: "definition", term: "care of the digestive system", definition: "means doing healthy things that help digestion and prevent stomach diseases.", simpleCheck: "Eating clean food and drinking safe water helps care for the digestive system." },
      { kind: "categories", title: "Healthy digestion habits", categories: [
        { name: "Balanced diet", definition: "eating foods from different food groups in the right amounts", examples: ["energy foods", "body-building foods", "protective foods", "water"] },
        { name: "Food hygiene", definition: "keeping food clean and safe from germs", examples: ["wash hands", "cover food", "wash fruits", "use clean utensils"] },
        { name: "Safe water", definition: "water that is clean enough to drink", examples: ["boiled water", "treated water", "protected water source"] },
        { name: "Good eating habits", definition: "ways of eating that help digestion", examples: ["chew food well", "eat enough fibre", "avoid too much junk food"] },
      ] },
      { kind: "characteristics", title: "Diseases and problems to prevent", points: ["Diarrhoea can come from dirty food or unsafe water.", "Constipation can happen when a person eats too little fibre or drinks too little water.", "Worms can enter through dirty hands, contaminated food or bare feet in contaminated soil.", "Stomach pain should be reported to an adult or health worker." ] },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "Give four ways to care for the digestive system.", answer: "Eat a balanced diet, wash hands, drink safe water, chew food well, eat fibre and avoid dirty food." },
        { type: "short-answer", prompt: "Why should food be covered?", answer: "To keep away flies, dust and germs." },
        { type: "multiple-choice", prompt: "Which food habit is good?", choices: ["eating clean food", "drinking dirty water", "eating spoiled food", "not washing hands"], answer: "eating clean food" },
      ] },
    ],
  },
];

const P5_SOIL_V4: UpperPrimaryLesson[] = [
  {
    id: "p5-v4-soil-components",
    classLevel: "P5",
    term: "Term II",
    curriculumMode: "subject",
    subject: "Integrated Science",
    topicTitle: "Components of the Environment: Soil",
    subTopicTitle: "Components of Soil",
    lessonTitle: "Components of Soil",
    blocks: [
      { kind: "definition", term: "soil", definition: "is the top layer of the earth where many plants grow.", simpleCheck: "Garden crops grow in soil because soil supports roots and provides water and mineral salts." },
      { kind: "categories", title: "Components of soil", categories: [
        { name: "Mineral particles", definition: "small pieces of rock that make up soil", examples: ["sand", "silt", "clay"] },
        { name: "Humus", definition: "dead plant and animal matter in soil", examples: ["rotting leaves", "decayed grass", "manure"] },
        { name: "Air", definition: "gas found in spaces between soil particles", examples: ["needed by roots and soil organisms"] },
        { name: "Water", definition: "moisture held in soil spaces", examples: ["water for plant roots"] },
        { name: "Living organisms", definition: "small living things in soil", examples: ["earthworms", "bacteria", "fungi", "insects"] },
      ] },
      { kind: "diagram", title: "Soil layers and components", imageUrl: "/images/science/p5-soil-layers.svg", caption: "Soil contains mineral particles, humus, air, water and living organisms.", labels: ["humus", "sand", "clay", "air", "water", "organisms"] },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "What is soil?", answer: "The top layer of the earth where many plants grow." },
        { type: "short-answer", prompt: "Name five components of soil.", answer: "Mineral particles, humus, air, water and living organisms." },
        { type: "multiple-choice", prompt: "Dead plant and animal matter in soil is called:", choices: ["humus", "plastic", "glass", "smoke"], answer: "humus" },
      ] },
    ],
  },
  {
    id: "p5-v4-soil-types-properties",
    classLevel: "P5",
    term: "Term II",
    curriculumMode: "subject",
    subject: "Integrated Science",
    topicTitle: "Components of the Environment: Soil",
    subTopicTitle: "Types of Soil and Properties",
    lessonTitle: "Types of Soil and Properties",
    blocks: [
      { kind: "definition", term: "soil type", definition: "is a group of soil with similar particles, texture and water-holding ability.", simpleCheck: "Sandy soil feels different from clay soil because its particles are larger." },
      { kind: "categories", title: "Types of soil", categories: [
        { name: "Sandy soil", definition: "soil with large loose particles and large air spaces", examples: ["lets water pass quickly", "not very sticky", "less fertile unless improved"] },
        { name: "Clay soil", definition: "soil with very fine particles and small air spaces", examples: ["holds water", "sticky when wet", "hard when dry"] },
        { name: "Loam soil", definition: "a mixture of sand, clay, silt and humus", examples: ["fertile", "holds some water", "good for many crops"] },
      ] },
      { kind: "characteristics", title: "Properties to compare", points: ["Texture: how soil feels.", "Water retention: how much water soil holds.", "Drainage: how fast water passes through soil.", "Air spaces: spaces between particles.", "Fertility: how well soil supports plant growth." ] },
      { kind: "worked-example", question: "Which soil is usually best for crop growing and why?", steps: ["Loam contains sand, clay and humus.", "It holds enough water but also drains fairly well.", "Humus provides nutrients for plants."], answer: "Loam soil is usually best because it is fertile and holds enough water without becoming waterlogged." },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "Name three types of soil.", answer: "Sandy, clay and loam soil." },
        { type: "short-answer", prompt: "State two properties of clay soil.", answer: "Fine particles, sticky when wet, holds water, hard when dry." },
        { type: "multiple-choice", prompt: "Which soil is usually best for growing crops?", choices: ["loam", "glass", "plastic", "ash only"], answer: "loam" },
      ] },
    ],
  },
  {
    id: "p5-v4-soil-erosion-conservation",
    classLevel: "P5",
    term: "Term II",
    curriculumMode: "subject",
    subject: "Integrated Science",
    topicTitle: "Components of the Environment: Soil",
    subTopicTitle: "Soil Erosion and Conservation",
    lessonTitle: "Soil Erosion and Conservation",
    blocks: [
      { kind: "definition", term: "soil erosion", definition: "is the removal of topsoil by water, wind, animals or human activities.", simpleCheck: "Rainwater carrying away garden soil is soil erosion." },
      { kind: "definition", term: "soil conservation", definition: "is protecting soil from being washed or blown away and keeping it useful for plant growth.", simpleCheck: "Planting grass on bare soil helps conserve soil." },
      { kind: "categories", title: "Causes and prevention", categories: [
        { name: "Causes of erosion", definition: "things that remove topsoil", examples: ["running water", "wind", "overgrazing", "deforestation", "poor farming"] },
        { name: "Effects of erosion", definition: "problems caused when topsoil is removed", examples: ["poor crop growth", "bare land", "silt in rivers", "gullies"] },
        { name: "Conservation methods", definition: "ways of protecting soil", examples: ["mulching", "terracing", "contour ploughing", "planting trees", "cover crops"] },
      ] },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "What is soil erosion?", answer: "Removal of topsoil by water, wind, animals or human activities." },
        { type: "short-answer", prompt: "Give three ways of conserving soil.", answer: "Mulching, terracing, contour ploughing, planting trees/grass or cover crops." },
        { type: "multiple-choice", prompt: "Which practice conserves soil?", choices: ["mulching", "deforestation", "overgrazing", "burning bushes"], answer: "mulching" },
      ] },
    ],
  },
];

const P5_HEAT_ENERGY_V4: UpperPrimaryLesson[] = [
  {
    id: "p5-v4-sources-uses-heat",
    classLevel: "P5",
    term: "Term II",
    curriculumMode: "subject",
    subject: "Integrated Science",
    topicTitle: "Heat Energy",
    subTopicTitle: "Sources and Uses of Heat",
    lessonTitle: "Sources and Uses of Heat",
    blocks: [
      { kind: "definition", term: "heat", definition: "is a form of energy that makes things hot or warmer.", simpleCheck: "A fire gives heat energy for cooking." },
      { kind: "categories", title: "Sources of heat", categories: [
        { name: "Sun", definition: "a natural source of heat and light", examples: ["drying clothes", "warming soil", "helping plants grow"] },
        { name: "Fire and fuels", definition: "heat from burning materials", examples: ["firewood", "charcoal", "paraffin", "gas"] },
        { name: "Electricity", definition: "can produce heat in appliances", examples: ["electric iron", "kettle", "cooker"] },
        { name: "Friction", definition: "heat produced when surfaces rub together", examples: ["rubbing hands", "brakes getting hot"] },
      ] },
      { kind: "uses", title: "Uses of heat", points: ["Cooking food.", "Boiling water.", "Drying clothes and crops.", "Keeping bodies warm.", "Ironing clothes.", "Changing states of matter such as melting wax or ice." ] },
      { kind: "diagram", title: "Heat transfer card", imageUrl: "/images/science/p5-heat-transfer.svg", caption: "Heat sources, uses and movement by conduction, convection and radiation.", labels: ["sun", "fire", "electricity", "friction", "heat" ] },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "What is heat?", answer: "A form of energy that makes things hot or warmer." },
        { type: "short-answer", prompt: "Name four sources of heat.", answer: "Sun, fire, electricity, friction or fuels." },
        { type: "multiple-choice", prompt: "Which is a natural source of heat?", choices: ["sun", "shoe", "stone", "chair"], answer: "sun" },
      ] },
    ],
  },
  {
    id: "p5-v4-heat-effects-transfer",
    classLevel: "P5",
    term: "Term II",
    curriculumMode: "subject",
    subject: "Integrated Science",
    topicTitle: "Heat Energy",
    subTopicTitle: "Effects and Transfer of Heat",
    lessonTitle: "Effects and Transfer of Heat",
    blocks: [
      { kind: "definition", term: "heat transfer", definition: "is the movement of heat from a hotter place or object to a cooler one.", simpleCheck: "Heat moves from a hot saucepan to the food inside it." },
      { kind: "categories", title: "Ways heat moves", categories: [
        { name: "Conduction", definition: "heat movement through solids", examples: ["metal spoon getting hot", "saucepan handle heating"] },
        { name: "Convection", definition: "heat movement in liquids and gases", examples: ["boiling water moving", "warm air rising"] },
        { name: "Radiation", definition: "heat movement through space without needing a material", examples: ["heat from the sun", "heat felt near a fire"] },
      ] },
      { kind: "characteristics", title: "Effects of heat", points: ["Heat can make things expand.", "Heat can make solids melt.", "Heat can make liquids evaporate.", "Heat can cook food.", "Heat can dry wet clothes or crops.", "Too much heat can burn or damage things." ] },
      { kind: "worked-example", question: "Why does a metal spoon in hot tea become hot?", steps: ["The spoon touches hot tea.", "Heat moves through the metal spoon.", "This movement through a solid is conduction."], answer: "The spoon becomes hot because heat moves through it by conduction." },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "What is conduction?", answer: "Heat movement through solids." },
        { type: "short-answer", prompt: "Name three ways heat moves.", answer: "Conduction, convection and radiation." },
        { type: "multiple-choice", prompt: "Heat from the sun reaches us mainly by:", choices: ["radiation", "digestion", "pollination", "germination"], answer: "radiation" },
      ] },
    ],
  },
  {
    id: "p5-v4-expansion-contraction-safety",
    classLevel: "P5",
    term: "Term II",
    curriculumMode: "subject",
    subject: "Integrated Science",
    topicTitle: "Heat Energy",
    subTopicTitle: "Expansion, Contraction and Safety",
    lessonTitle: "Expansion, Contraction and Safety",
    blocks: [
      { kind: "definition", term: "expansion", definition: "is the increase in size of a material when heated.", simpleCheck: "Many metals expand when heated." },
      { kind: "definition", term: "contraction", definition: "is the decrease in size of a material when cooled.", simpleCheck: "Many metals contract when cooled." },
      { kind: "categories", title: "Expansion, contraction and safety", categories: [
        { name: "Expansion in solids", definition: "solids get slightly bigger when heated", examples: ["railway lines", "bridge parts", "metal lids"] },
        { name: "Contraction in solids", definition: "solids get smaller when cooled", examples: ["metal shrinking when cold"] },
        { name: "Safety with heat", definition: "ways of avoiding burns and fire accidents", examples: ["use pot holders", "keep children away from fire", "do not touch hot metal"] },
      ] },
      { kind: "characteristics", title: "Why expansion gaps are important", points: ["Rails and bridges can expand on hot days.", "Small gaps give materials space to expand.", "Without gaps, materials may bend, crack or break.", "Hot objects should be handled with protection and adult guidance." ] },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "What is expansion?", answer: "Increase in size when heated." },
        { type: "short-answer", prompt: "What is contraction?", answer: "Decrease in size when cooled." },
        { type: "short-answer", prompt: "Why are gaps left between railway lines?", answer: "To allow expansion when the metal gets hot." },
        { type: "multiple-choice", prompt: "Which safety practice is correct?", choices: ["use a pot holder", "touch hot metal", "play with fire", "carry hot water carelessly"], answer: "use a pot holder" },
      ] },
    ],
  },
];

const P5_POULTRY_V4: UpperPrimaryLesson[] = [
  P5_POULTRY_BREEDS_V4,
  {
    id: "p5-v4-poultry-management-care",
    classLevel: "P5",
    term: "Term I",
    curriculumMode: "subject",
    subject: "Integrated Science",
    topicTitle: "Keeping Poultry and Bees",
    subTopicTitle: "Poultry Management, Feeding and Housing",
    lessonTitle: "Poultry Management, Feeding and Housing",
    blocks: [
      { kind: "definition", term: "poultry management", definition: "is the proper care of domestic birds kept for eggs, meat, manure, feathers or income.", simpleCheck: "Good poultry management includes housing, feeding, watering and disease control." },
      { kind: "categories", title: "Good poultry management", categories: [
        { name: "Housing", definition: "providing a safe house for poultry", examples: ["dry house", "well-ventilated house", "safe from predators", "easy to clean"] },
        { name: "Feeding", definition: "giving poultry enough balanced feeds for their age and purpose", examples: ["chick mash", "growers mash", "layers mash", "broiler feed"] },
        { name: "Watering", definition: "providing clean water every day", examples: ["clean drinkers", "fresh water", "water away from droppings"] },
        { name: "Disease control", definition: "preventing and managing poultry diseases", examples: ["vaccination", "clean housing", "separating sick birds", "veterinary guidance"] },
      ] },
      { kind: "characteristics", title: "Qualities of a good poultry house", points: ["It is dry and clean.", "It is well ventilated.", "It protects birds from rain, sun, thieves and predators.", "It has enough space to avoid overcrowding.", "It is easy to clean and disinfect." ] },
      { kind: "worked-example", question: "Why should a farmer separate a sick chicken from healthy birds?", steps: ["Some poultry diseases spread from one bird to another.", "Separating the sick bird reduces contact.", "The farmer can then ask a veterinary worker for advice."], answer: "To reduce spread of disease and get proper help." },
      { kind: "diagram", title: "Poultry and bee keeping card", imageUrl: "/images/science/p5-poultry-bees.svg", caption: "Poultry need good housing, feeding, clean water and disease control.", labels: ["housing", "feeding", "water", "disease control", "hygiene"] },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "What is poultry management?", answer: "Proper care of domestic birds kept for eggs, meat or income." },
        { type: "short-answer", prompt: "Give four qualities of a good poultry house.", answer: "Dry, clean, ventilated, enough space and safe from predators." },
        { type: "multiple-choice", prompt: "Which practice helps prevent poultry diseases?", choices: ["cleaning the house", "giving dirty water", "overcrowding", "mixing sick birds"], answer: "cleaning the house" },
      ] },
    ],
  },
  {
    id: "p5-v4-bees-life-products-importance",
    classLevel: "P5",
    term: "Term I",
    curriculumMode: "subject",
    subject: "Integrated Science",
    topicTitle: "Keeping Poultry and Bees",
    subTopicTitle: "Bee Keeping, Bee Products and Pollination",
    lessonTitle: "Bee Keeping, Bee Products and Pollination",
    blocks: [
      { kind: "definition", term: "bee keeping", definition: "is the rearing of bees in hives for honey, wax, pollination or income.", simpleCheck: "A farmer who keeps bees in a hive is practising bee keeping." },
      { kind: "categories", title: "Types of bees in a colony", categories: [
        { name: "Queen bee", definition: "the female bee that lays eggs in a colony", examples: ["one queen in most colonies"] },
        { name: "Worker bees", definition: "female bees that collect nectar, make honey, clean the hive and care for young bees", examples: ["many workers in a hive"] },
        { name: "Drones", definition: "male bees whose main role is mating with the queen", examples: ["male bees"] },
      ] },
      { kind: "uses", title: "Importance of bees", points: ["Bees produce honey used as food and medicine with guidance.", "Bees produce wax used for candles and polish.", "Bees pollinate flowers, helping fruits and seeds to form.", "Bee keeping can provide income.", "Bees support crop production through pollination." ] },
      { kind: "characteristics", title: "Conditions for safe bee keeping", points: ["Keep hives away from busy paths and homes.", "Place hives where bees can find flowers and water.", "Use protective clothing when handling hives.", "Bee keeping should be done by trained adults or under adult guidance.", "Do not disturb bees unnecessarily." ] },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "What is bee keeping?", answer: "Rearing bees in hives for honey, wax, pollination or income." },
        { type: "short-answer", prompt: "Name three types of bees in a colony.", answer: "Queen, workers and drones." },
        { type: "short-answer", prompt: "Give three uses of bees.", answer: "Honey, wax, pollination and income." },
        { type: "multiple-choice", prompt: "Which bee lays eggs?", choices: ["queen", "worker", "drone", "larva"], answer: "queen" },
      ] },
    ],
  },
];

const P5_MEASUREMENT_V4: UpperPrimaryLesson[] = [
  {
    id: "p5-v4-measuring-length-mass-capacity-time",
    classLevel: "P5",
    term: "Term I",
    curriculumMode: "subject",
    subject: "Integrated Science",
    topicTitle: "Measurement",
    subTopicTitle: "Measuring Length, Mass, Capacity and Time",
    lessonTitle: "Measuring Length, Mass, Capacity and Time",
    blocks: [
      { kind: "definition", term: "measurement", definition: "is the process of finding the size, amount or quantity of something using standard units and instruments.", simpleCheck: "Using a ruler to find length is measurement." },
      { kind: "categories", title: "Quantities, instruments and units", categories: [
        { name: "Length", definition: "distance from one point to another", examples: ["ruler", "tape measure", "metre (m)", "centimetre (cm)"] },
        { name: "Mass", definition: "amount of matter in an object", examples: ["beam balance", "spring balance", "kilogram (kg)", "gram (g)"] },
        { name: "Capacity", definition: "amount a container can hold", examples: ["measuring cylinder", "litre (L)", "millilitre (ml)"] },
        { name: "Time", definition: "duration of events", examples: ["clock", "watch", "seconds", "minutes", "hours"] },
      ] },
      { kind: "characteristics", title: "Rules for accurate measurement", points: ["Choose the correct instrument.", "Use the correct unit.", "Read scales from eye level.", "Start reading from zero where needed.", "Record the unit with the number." ] },
      { kind: "worked-example", question: "Why should a pupil read a measuring cylinder at eye level?", steps: ["Liquid level can look higher or lower from an angle.", "Eye-level reading reduces error.", "The pupil should read the bottom of the meniscus where guided."], answer: "To avoid parallax error and get a more accurate reading." },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "What is measurement?", answer: "Finding the size, amount or quantity of something." },
        { type: "short-answer", prompt: "Name instruments for length, mass, capacity and time.", answer: "Ruler/tape, balance, measuring cylinder, clock/watch." },
        { type: "multiple-choice", prompt: "Which unit measures mass?", choices: ["kilogram", "metre", "litre", "hour"], answer: "kilogram" },
      ] },
    ],
  },
  {
    id: "p5-v4-measurement-daily-life",
    classLevel: "P5",
    term: "Term I",
    curriculumMode: "subject",
    subject: "Integrated Science",
    topicTitle: "Measurement",
    subTopicTitle: "Measurement in Daily Life",
    lessonTitle: "Measurement in Daily Life",
    blocks: [
      { kind: "definition", term: "standard unit", definition: "is a unit accepted and used by many people for accurate measurement.", simpleCheck: "Metre, kilogram, litre and second are standard units." },
      { kind: "examples", title: "Daily uses of measurement", examples: [
        { name: "medicine", explanation: "health workers measure correct amounts of medicine" },
        { name: "building", explanation: "builders measure length and width" },
        { name: "cooking", explanation: "people measure ingredients and time" },
        { name: "farming", explanation: "farmers measure land, seeds and chemicals with adult guidance" },
      ] },
      { kind: "uses", title: "Importance of measurement", points: ["It helps avoid waste.", "It helps people be accurate.", "It helps health workers give correct doses.", "It helps traders sell fairly.", "It helps builders and farmers plan well." ] },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "Give four uses of measurement in daily life.", answer: "Medicine, cooking, building, farming, trading or travel time." },
        { type: "short-answer", prompt: "Why are standard units important?", answer: "They help people measure accurately and fairly." },
        { type: "multiple-choice", prompt: "Which instrument measures time?", choices: ["clock", "ruler", "balance", "measuring cylinder"], answer: "clock" },
      ] },
    ],
  },
];

const P5_IMMUNISATION_V4: UpperPrimaryLesson[] = [
  {
    id: "p5-v4-immunisation-meaning-importance",
    classLevel: "P5",
    term: "Term I",
    curriculumMode: "subject",
    subject: "Integrated Science",
    topicTitle: "Immunisation",
    subTopicTitle: "Meaning and Importance of Immunisation",
    lessonTitle: "Meaning and Importance of Immunisation",
    blocks: [
      { kind: "definition", term: "immunisation", definition: "is the process of giving a vaccine to help the body protect itself against specific diseases.", simpleCheck: "A child may be immunised against measles to help prevent measles." },
      { kind: "categories", title: "Immunisable childhood diseases", categories: [
        { name: "Measles", definition: "a communicable disease that can cause fever and rash", examples: ["prevented by immunisation"] },
        { name: "Polio", definition: "a disease that can cause paralysis", examples: ["prevented by polio vaccine"] },
        { name: "Tuberculosis (TB)", definition: "a disease that commonly affects the lungs", examples: ["BCG vaccine helps protect children"] },
        { name: "Tetanus", definition: "a serious disease that can enter through wounds", examples: ["tetanus immunisation"] },
      ] },
      { kind: "diagram", title: "Immunisation card", imageUrl: "/images/science/p5-immunisation-card.svg", caption: "A health card helps parents and health workers track immunisation dates.", labels: ["vaccine", "health card", "return date", "health worker"] },
      { kind: "uses", title: "Importance of immunisation", points: ["It helps protect children from dangerous diseases.", "It reduces spread of some communicable diseases.", "It helps communities stay healthier.", "Health cards help families remember return dates." ] },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "What is immunisation?", answer: "Giving a vaccine to help the body protect itself against specific diseases." },
        { type: "short-answer", prompt: "Name three immunisable diseases.", answer: "Measles, polio, TB, tetanus or whooping cough." },
        { type: "multiple-choice", prompt: "Who should guide immunisation?", choices: ["health worker", "toy seller", "unknown child", "football referee"], answer: "health worker" },
      ] },
    ],
  },
  {
    id: "p5-v4-immunisation-schedule-safety",
    classLevel: "P5",
    term: "Term I",
    curriculumMode: "subject",
    subject: "Integrated Science",
    topicTitle: "Immunisation",
    subTopicTitle: "Health Cards, Schedules and Safe Decisions",
    lessonTitle: "Health Cards, Schedules and Safe Decisions",
    blocks: [
      { kind: "definition", term: "immunisation schedule", definition: "is a plan showing when a child should receive vaccines.", simpleCheck: "A return date on a health card helps families know when to go back." },
      { kind: "categories", title: "Immunisation records", categories: [
        { name: "Health card", definition: "a card that records vaccines and dates", examples: ["child health card", "clinic card"] },
        { name: "Return date", definition: "the date when a child should go back for another vaccine or check", examples: ["next clinic date"] },
        { name: "Safe decision", definition: "a choice guided by correct health advice", examples: ["ask a health worker", "keep the health card", "do not hide missed dates"] },
      ] },
      { kind: "characteristics", title: "Safety notes", points: ["Vaccines should be given by trained health workers.", "Parents and guardians should keep health cards safely.", "If a vaccine date is missed, ask a health worker what to do.", "Do not believe rumours; ask trained health workers for guidance." ] },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "What is an immunisation schedule?", answer: "A plan showing when vaccines should be given." },
        { type: "short-answer", prompt: "Why is a health card important?", answer: "It records vaccines and return dates." },
        { type: "multiple-choice", prompt: "If a return date is missed, a parent should:", choices: ["ask a health worker", "hide the card", "throw it away", "guess"], answer: "ask a health worker" },
      ] },
    ],
  },
];

const P5_CROP_GROWING_V4: UpperPrimaryLesson[] = [
  {
    id: "p5-v4-common-crops-tools",
    classLevel: "P5",
    term: "Term III",
    curriculumMode: "subject",
    subject: "Integrated Science",
    topicTitle: "Occupations in Our Community: Crop Growing",
    subTopicTitle: "Common Crops and Farm Tools",
    lessonTitle: "Common Crops and Farm Tools",
    blocks: [
      { kind: "definition", term: "crop growing", definition: "is the occupation of preparing land, planting, caring for crops, harvesting and storing crops.", simpleCheck: "A farmer who grows maize and beans is doing crop growing." },
      { kind: "categories", title: "Common crops and tools", categories: [
        { name: "Food crops", definition: "crops grown mainly for food", examples: ["maize", "beans", "cassava", "rice", "sweet potatoes"] },
        { name: "Cash crops", definition: "crops grown mainly for sale", examples: ["coffee", "cotton", "tea", "sugarcane"] },
        { name: "Farm tools", definition: "tools used in crop growing", examples: ["hoe", "panga", "rake", "watering can", "slasher"] },
      ] },
      { kind: "characteristics", title: "Tool safety", points: ["Use tools for their proper purpose.", "Carry sharp tools carefully with adult guidance.", "Clean tools after use.", "Store tools safely away from young children.", "Do not play with pangas, hoes or slashers." ] },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "What is crop growing?", answer: "Preparing land, planting, caring, harvesting and storing crops." },
        { type: "short-answer", prompt: "Name three farm tools.", answer: "Hoe, panga, rake, slasher or watering can." },
        { type: "multiple-choice", prompt: "Which tool is used for digging?", choices: ["hoe", "cup", "plate", "shoe"], answer: "hoe" },
      ] },
    ],
  },
  {
    id: "p5-v4-land-preparation-crop-care-storage",
    classLevel: "P5",
    term: "Term III",
    curriculumMode: "subject",
    subject: "Integrated Science",
    topicTitle: "Occupations in Our Community: Crop Growing",
    subTopicTitle: "Land Preparation, Crop Care, Harvesting and Storage",
    lessonTitle: "Land Preparation, Crop Care, Harvesting and Storage",
    blocks: [
      { kind: "definition", term: "crop care", definition: "means doing activities that help crops grow well and stay healthy until harvesting.", simpleCheck: "Watering, weeding, mulching and pest control are crop-care practices." },
      { kind: "categories", title: "Steps in crop growing", categories: [
        { name: "Land preparation", definition: "making land ready for planting", examples: ["clearing", "digging", "making seedbeds", "adding manure"] },
        { name: "Planting", definition: "putting seeds or seedlings into soil", examples: ["sowing maize", "transplanting cabbage"] },
        { name: "Crop care", definition: "looking after crops as they grow", examples: ["watering", "weeding", "mulching", "pest control"] },
        { name: "Harvesting and storage", definition: "collecting mature crops and keeping them safely", examples: ["drying maize", "storing beans", "protecting from rats"] },
      ] },
      { kind: "diagram", title: "Crop growing cycle", imageUrl: "/images/science/crop-growing-cycle.svg", caption: "Crop growing moves from land preparation to planting, care, harvesting and storage.", labels: ["prepare", "plant", "care", "harvest", "store"] },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "Give four steps in crop growing.", answer: "Land preparation, planting, crop care, harvesting and storage." },
        { type: "short-answer", prompt: "Why should harvested crops be dried?", answer: "To prevent rotting and mould during storage." },
        { type: "multiple-choice", prompt: "Removing unwanted plants is called:", choices: ["weeding", "digestion", "measurement", "immunisation"], answer: "weeding" },
      ] },
    ],
  },
];

const P5_BACTERIA_FUNGI_V4: UpperPrimaryLesson[] = [
  {
    id: "p5-v4-bacteria-fungi-meaning",
    classLevel: "P5",
    term: "Term III",
    curriculumMode: "subject",
    subject: "Integrated Science",
    topicTitle: "Bacteria and Fungi",
    subTopicTitle: "Characteristics and Examples",
    lessonTitle: "Characteristics and Examples",
    blocks: [
      { kind: "definition", term: "bacteria", definition: "are very tiny living things, many of which can only be seen with a microscope.", simpleCheck: "Some bacteria are useful, while others cause diseases or spoil food." },
      { kind: "definition", term: "fungi", definition: "are living things such as moulds, mushrooms and yeast that do not make their own food like green plants.", simpleCheck: "Mould growing on bread is a fungus." },
      { kind: "categories", title: "Examples and characteristics", categories: [
        { name: "Bacteria", definition: "tiny living things that multiply quickly in suitable conditions", examples: ["useful bacteria in yoghurt", "disease-causing bacteria", "decay bacteria"] },
        { name: "Fungi", definition: "living things that feed on dead or living matter", examples: ["mushrooms", "mould", "yeast"] },
        { name: "Where they grow", definition: "places with warmth, moisture and food", examples: ["spoiled food", "damp bread", "dead leaves", "dirty places"] },
      ] },
      { kind: "diagram", title: "Microbes card", imageUrl: "/images/science/p5-microbes-bacteria-fungi.svg", caption: "Bacteria and fungi may be useful or harmful.", labels: ["bacteria", "fungi", "mould", "yeast", "mushroom"] },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "What are bacteria?", answer: "Very tiny living things, many seen only with a microscope." },
        { type: "short-answer", prompt: "Give three examples of fungi.", answer: "Mushrooms, moulds and yeast." },
        { type: "multiple-choice", prompt: "Which one is a fungus?", choices: ["mould", "stone", "metal spoon", "glass"], answer: "mould" },
      ] },
    ],
  },
  {
    id: "p5-v4-useful-harmful-microbes",
    classLevel: "P5",
    term: "Term III",
    curriculumMode: "subject",
    subject: "Integrated Science",
    topicTitle: "Bacteria and Fungi",
    subTopicTitle: "Useful and Harmful Bacteria and Fungi",
    lessonTitle: "Useful and Harmful Bacteria and Fungi",
    blocks: [
      { kind: "definition", term: "microbe", definition: "is a very small living thing, such as a bacterium or some fungi, that may be useful or harmful.", simpleCheck: "Yeast is a useful fungus used in baking bread." },
      { kind: "categories", title: "Useful and harmful roles", categories: [
        { name: "Useful bacteria", definition: "bacteria that help people or the environment", examples: ["making yoghurt", "decaying dead matter", "helping soil fertility"] },
        { name: "Harmful bacteria", definition: "bacteria that cause diseases or food spoilage", examples: ["cholera bacteria", "typhoid bacteria", "food poisoning"] },
        { name: "Useful fungi", definition: "fungi that people use", examples: ["yeast for bread", "edible mushrooms", "some medicines"] },
        { name: "Harmful fungi", definition: "fungi that cause disease or spoil food", examples: ["mould on bread", "ringworm", "rotting fruits"] },
      ] },
      { kind: "characteristics", title: "Hygiene and prevention", points: ["Wash hands before eating.", "Cover food.", "Eat properly cooked food.", "Do not eat mouldy food.", "Keep the body and clothes clean.", "Store food in clean, dry places." ] },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "Give two useful roles of bacteria or fungi.", answer: "Making yoghurt, making bread, decomposing dead matter or improving soil." },
        { type: "short-answer", prompt: "Give two harmful effects of bacteria or fungi.", answer: "Diseases, food spoilage, ringworm or rotting food." },
        { type: "multiple-choice", prompt: "Which fungus is used in baking bread?", choices: ["yeast", "mosquito", "rat", "sand"], answer: "yeast" },
      ] },
    ],
  },
];

const P5_TYPES_CHANGES_V4: UpperPrimaryLesson[] = [
  {
    id: "p5-v4-biological-physical-chemical-changes",
    classLevel: "P5",
    term: "Term III",
    curriculumMode: "subject",
    subject: "Integrated Science",
    topicTitle: "Types of Changes: Biological, Physical and Chemical Changes",
    subTopicTitle: "Biological, Physical and Chemical Changes",
    lessonTitle: "Biological, Physical and Chemical Changes",
    blocks: [
      { kind: "definition", term: "change", definition: "is when something becomes different from what it was before.", simpleCheck: "Melting ice is a change because solid ice becomes liquid water." },
      { kind: "categories", title: "Types of changes", categories: [
        { name: "Biological change", definition: "a change that happens in living things", examples: ["growth of a plant", "germination", "rotting of fruit", "growth of a child"] },
        { name: "Physical change", definition: "a change where no new substance is formed", examples: ["melting ice", "cutting paper", "breaking a cup", "freezing water"] },
        { name: "Chemical change", definition: "a change where a new substance is formed", examples: ["burning wood", "rusting iron", "cooking an egg", "rotting food"] },
      ] },
      { kind: "diagram", title: "Types of changes card", imageUrl: "/images/science/p5-types-of-changes.svg", caption: "Examples of biological, physical and chemical changes.", labels: ["biological", "physical", "chemical", "reversible", "irreversible"] },
      { kind: "worked-example", question: "Is burning paper a physical or chemical change?", steps: ["Burning forms ash and smoke.", "New substances are formed.", "A change that forms new substances is chemical."], answer: "Burning paper is a chemical change." },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "What is a biological change?", answer: "A change that happens in living things." },
        { type: "short-answer", prompt: "Give two examples of physical changes.", answer: "Melting ice, freezing water, cutting paper or breaking glass." },
        { type: "short-answer", prompt: "Give two examples of chemical changes.", answer: "Burning wood, rusting iron, cooking an egg or rotting fruit." },
        { type: "multiple-choice", prompt: "Which is a biological change?", choices: ["germination", "melting wax", "breaking a plate", "cutting paper"], answer: "germination" },
      ] },
    ],
  },
  {
    id: "p5-v4-reversible-irreversible-changes",
    classLevel: "P5",
    term: "Term III",
    curriculumMode: "subject",
    subject: "Integrated Science",
    topicTitle: "Types of Changes: Biological, Physical and Chemical Changes",
    subTopicTitle: "Reversible and Irreversible Changes",
    lessonTitle: "Reversible and Irreversible Changes",
    blocks: [
      { kind: "definition", term: "reversible change", definition: "is a change that can be changed back to the original form.", simpleCheck: "Ice can melt into water and water can freeze back into ice." },
      { kind: "definition", term: "irreversible change", definition: "is a change that cannot easily be changed back to the original form.", simpleCheck: "Burnt paper cannot easily become paper again." },
      { kind: "categories", title: "Reversible and irreversible examples", categories: [
        { name: "Reversible changes", definition: "changes that can be undone", examples: ["melting ice", "freezing water", "evaporating and condensing water", "stretching a rubber band gently"] },
        { name: "Irreversible changes", definition: "changes that cannot easily be undone", examples: ["burning paper", "cooking food", "rusting iron", "rotting fruit"] },
      ] },
      { kind: "characteristics", title: "How to identify changes", points: ["Ask whether a new substance has formed.", "Ask whether the material can return to its original form.", "Physical changes are often reversible, but not always.", "Chemical changes are usually irreversible.", "Biological changes happen in living things and are often not easily reversed." ] },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "What is a reversible change?", answer: "A change that can be changed back." },
        { type: "short-answer", prompt: "What is an irreversible change?", answer: "A change that cannot easily be changed back." },
        { type: "multiple-choice", prompt: "Which change is reversible?", choices: ["freezing water", "burning wood", "cooking an egg", "rusting iron"], answer: "freezing water" },
      ] },
    ],
  },
];

const P5_SCIENCE_TOPIC_DATA: Topic[] = [
  {
    "id": "p5-keeping-poultry-bees",
    "themeId": "p5-science-core",
    "themeName": "Science in Human Activities and Occupations",
    "title": "Keeping Poultry and Bees",
    "estMinutes": 42,
    "status": "published",
    "reviewStatus": "beta",
    "contentFormat": "upper-primary-v4",
    "upperPrimaryLessons": P5_POULTRY_V4,
    "useOnlyV4Lessons": true,
    "note": {
      "intro": "P5 Science beta: built from researched NCDC Primary Five Integrated Science Set One structure; human science/health review still required before premium-final release. Keeping Poultry and Bees connects science ideas to health, farming, environment and daily life.",
      "learningObjectives": [
        "Identify common types of poultry.",
        "Describe poultry housing, feeding and disease control.",
        "Explain bee colony members and bee products.",
        "Describe safe bee keeping and the importance of bees in crop production."
      ],
      "whatYouNeedToKnow": [
        "Poultry are domestic birds kept for eggs, meat, income or manure.",
        "Healthy poultry need clean housing, enough space, clean water, balanced feeds and disease control.",
        "A bee colony has a queen, workers and drones.",
        "Bees produce honey and wax, and they pollinate flowering crops.",
        "Sick birds should be isolated and handled with adult/veterinary guidance."
      ],
      "worked": {
        "problem": "Why should a farmer isolate a sick chicken?",
        "steps": [
          "Some poultry diseases spread from one bird to another.",
          "Isolation reduces contact between sick and healthy birds.",
          "An adult or veterinary worker can advise safe treatment."
        ],
        "answer": "The farmer isolates the sick chicken to reduce disease spread and seek proper help."
      },
      "commonMistakes": [
        "Mixing sick and healthy birds.",
        "Forgetting that clean water and ventilation matter.",
        "Disturbing bees without protective clothing or adult guidance.",
        "Thinking bees are useful only for honey and not pollination."
      ],
      "recap": [
        "Clean housing, water and feeds keep poultry healthy.",
        "Isolate sick birds and seek adult/veterinary advice.",
        "Bees give honey, wax and pollination."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p5-poultry-types-housing",
        "title": "1. Poultry types and housing",
        "modules": [
          {
            "moduleId": "p5-poultry-types-housing-module",
            "title": "Types and Housing of Poultry",
            "bigIdea": "Good poultry keeping starts with knowing the birds and giving them safe housing.",
            "learnIt": [
              "Poultry include chickens, ducks, turkeys and geese.",
              "A good poultry house protects birds from rain, cold, predators and thieves.",
              "The house should be dry, well-ventilated and easy to clean.",
              "Crowding birds encourages disease and poor growth."
            ],
            "workedExample": {
              "question": "Give two qualities of a good poultry house.",
              "steps": [
                "Think of what birds need for safety and health.",
                "A good house should be dry and clean.",
                "It should also protect birds from predators."
              ],
              "answer": "A good poultry house is dry, clean, well-ventilated and safe from predators."
            },
            "tryThis": {
              "question": "Which is poultry?",
              "choices": [
                "Chicken",
                "Goat",
                "Tilapia",
                "Cow"
              ],
              "correct": 0,
              "explanation": "Chicken is a domestic bird kept as poultry."
            },
            "imageUrl": "/images/science/p5-poultry-bees.svg",
            "imageCaption": "Poultry and bees summary."
          }
        ]
      },
      {
        "subtopicId": "p5-poultry-care-disease",
        "title": "2. Feeding, watering and disease control",
        "modules": [
          {
            "moduleId": "p5-poultry-care-disease-module",
            "title": "Caring for Healthy Poultry",
            "bigIdea": "Daily care prevents many poultry problems before they become serious.",
            "learnIt": [
              "Poultry need clean water every day.",
              "Feeds should suit the age and purpose of the bird, for example chicks, layers or broilers.",
              "Clean the house and remove droppings regularly.",
              "Vaccination and veterinary advice help prevent serious diseases such as Newcastle disease."
            ],
            "workedExample": {
              "question": "A farmer sees one chicken with twisted neck and greenish diarrhoea. What should be done?",
              "steps": [
                "These signs may suggest a serious poultry disease.",
                "The sick bird should be separated from healthy birds.",
                "The farmer should seek adult/veterinary advice."
              ],
              "answer": "Separate the sick bird and seek veterinary guidance."
            },
            "tryThis": {
              "question": "Which practice helps prevent poultry diseases?",
              "choices": [
                "Leaving droppings everywhere",
                "Cleaning the house regularly",
                "Mixing sick birds with healthy ones",
                "Giving dirty water"
              ],
              "correct": 1,
              "explanation": "Clean housing reduces germs and pests."
            },
            "imageUrl": "/images/science/p5-poultry-bees.svg",
            "imageCaption": "Poultry care reminders."
          }
        ]
      },
      {
        "subtopicId": "p5-bees-products-pollination",
        "title": "3. Bee keeping, honey and pollination",
        "modules": [
          {
            "moduleId": "p5-bees-products-pollination-module",
            "title": "Bees and Crop Production",
            "bigIdea": "Bees are useful insects, but they must be handled safely.",
            "learnIt": [
              "The queen lays eggs in a bee colony.",
              "Worker bees collect nectar, make honey and care for the hive.",
              "Drones are male bees.",
              "Bees pollinate flowering crops, helping fruits and seeds form.",
              "Bee hives should be managed by trained adults using protective clothing."
            ],
            "workedExample": {
              "question": "Give two uses of bees to farmers.",
              "steps": [
                "Bees pollinate crop flowers.",
                "Bees produce honey and wax.",
                "Honey and wax may be eaten, used or sold."
              ],
              "answer": "Bees pollinate crops and produce honey and wax."
            },
            "tryThis": {
              "question": "Which bee usually lays eggs?",
              "choices": [
                "Worker bee",
                "Drone",
                "Queen bee",
                "Larva"
              ],
              "correct": 2,
              "explanation": "The queen bee lays eggs in a colony."
            },
            "imageUrl": "/images/science/p5-poultry-bees.svg",
            "imageCaption": "Bee keeping and bee products."
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Which bird is poultry?",
        "choices": [
          "Goat",
          "Cow",
          "Tilapia",
          "Chicken"
        ],
        "correct": 3,
        "why": "Chicken is a common poultry bird."
      },
      {
        "q": "Why should poultry houses be cleaned?",
        "choices": [
          "To reduce diseases",
          "To attract snakes",
          "To reduce eggs",
          "To make birds sick"
        ],
        "correct": 0,
        "why": "Clean houses reduce germs and pests."
      },
      {
        "q": "Which bee lays eggs?",
        "choices": [
          "Drone",
          "Queen bee",
          "Worker bee",
          "Larva"
        ],
        "correct": 1,
        "why": "The queen bee lays eggs."
      },
      {
        "q": "One role of bees in crop farming is:",
        "choices": [
          "milking cows",
          "digging soil",
          "pollination",
          "measuring land"
        ],
        "correct": 2,
        "why": "Bees pollinate flowers."
      },
      {
        "q": "A sick chicken should be:",
        "choices": [
          "mixed with chicks",
          "sold as healthy",
          "ignored",
          "isolated"
        ],
        "correct": 3,
        "why": "Isolation helps reduce spread."
      },
      {
        "q": "Bee hives should be handled by:",
        "choices": [
          "trained adults with protection",
          "small children alone",
          "people without clothing",
          "anyone throwing stones"
        ],
        "correct": 0,
        "why": "Bee keeping needs adult skill and protection."
      }
    ]
  },
  {
    "id": "p5-measurement-science",
    "themeId": "p5-science-core",
    "themeName": "Matter and Energy",
    "title": "Measurement",
    "estMinutes": 38,
    "status": "published",
    "reviewStatus": "beta",
    "upperPrimaryLessons": P5_MEASUREMENT_V4,
    "useOnlyV4Lessons": true,
    "note": {
      "intro": "P5 Science beta: built from researched NCDC Primary Five Integrated Science Set One structure; human science/health review still required before premium-final release. Measurement connects science ideas to health, farming, environment and daily life.",
      "learningObjectives": [
        "Name instruments used for measuring length, mass, capacity, time and temperature.",
        "Read simple scales correctly.",
        "Record measurements with correct units.",
        "Explain why accuracy matters in science and daily life."
      ],
      "whatYouNeedToKnow": [
        "Length is measured with rulers, tape measures or metre rules.",
        "Mass is measured with a weighing scale or balance.",
        "Capacity is measured with a measuring cylinder, marked jug or similar container.",
        "Temperature is measured with a thermometer and time with a clock or stopwatch.",
        "A measurement answer needs both a number and a unit."
      ],
      "worked": {
        "problem": "Which instrument measures the mass of a bag of rice?",
        "steps": [
          "Mass tells how heavy an object is.",
          "Mass is measured with a balance or weighing scale."
        ],
        "answer": "A weighing scale or balance."
      },
      "commonMistakes": [
        "Writing a number without a unit.",
        "Using litres for mass or kilograms for capacity.",
        "Reading a scale without checking what each mark represents.",
        "Starting from the wrong point on a ruler."
      ],
      "recap": [
        "Choose the right instrument.",
        "Read the scale carefully.",
        "Write the number and unit."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p5-measuring-instruments",
        "title": "1. Measuring instruments and units",
        "modules": [
          {
            "moduleId": "p5-measurement-instruments-full",
            "title": "Instruments and Units",
            "bigIdea": "Each thing we measure has a suitable instrument and unit.",
            "learnIt": [
              "Use a ruler or metre rule for length.",
              "Use a weighing scale or balance for mass.",
              "Use a measuring cylinder or marked jug for capacity.",
              "Use a thermometer for temperature and a clock/stopwatch for time."
            ],
            "workedExample": {
              "question": "Which instrument measures 500 ml of water?",
              "steps": [
                "Water amount is capacity.",
                "Millilitres measure capacity.",
                "A measuring cylinder or marked jug can measure it."
              ],
              "answer": "A measuring cylinder or marked jug."
            },
            "tryThis": {
              "question": "Which instrument measures temperature?",
              "choices": [
                "Ruler",
                "Thermometer",
                "Clock",
                "Compass"
              ],
              "correct": 1,
              "explanation": "A thermometer measures temperature."
            },
            "imageUrl": "/images/math/measurement-units.svg",
            "imageCaption": "Measurement instruments and units."
          }
        ]
      },
      {
        "subtopicId": "p5-reading-scales",
        "title": "2. Reading scales accurately",
        "modules": [
          {
            "moduleId": "p5-reading-scales-full",
            "title": "Reading Scale Marks",
            "bigIdea": "A scale can only be read correctly if you know what each mark stands for.",
            "learnIt": [
              "Look at the labelled numbers on the scale.",
              "Find the value of the small intervals between numbers.",
              "Read from eye level to avoid mistakes.",
              "Record the unit, for example cm, kg, ml or °C."
            ],
            "workedExample": {
              "question": "A mark is halfway between 6 cm and 7 cm. What length is shown?",
              "steps": [
                "Halfway between 6 and 7 is 6.5.",
                "The unit is centimetres."
              ],
              "answer": "6.5 cm"
            },
            "tryThis": {
              "question": "A complete measurement answer should have:",
              "choices": [
                "number only",
                "unit only",
                "number and unit",
                "a drawing only"
              ],
              "correct": 2,
              "explanation": "Measurement answers need number and unit."
            },
            "imageUrl": "/images/math/measurement-units.svg",
            "imageCaption": "Reading measurement scales."
          }
        ]
      },
      {
        "subtopicId": "p5-measurement-daily-life",
        "title": "3. Measurement in daily life",
        "modules": [
          {
            "moduleId": "p5-measurement-daily-life-module",
            "title": "Why Measurement Matters",
            "bigIdea": "Measurement helps people cook, farm, build, treat sickness and do fair trade.",
            "learnIt": [
              "A farmer may measure medicine or feed for animals carefully.",
              "A nurse or health worker measures temperature to check fever.",
              "A builder measures length to avoid wasting materials.",
              "A trader measures mass or capacity fairly for customers."
            ],
            "workedExample": {
              "question": "Why is correct measurement important when giving medicine?",
              "steps": [
                "Too little medicine may not help.",
                "Too much medicine may be harmful.",
                "A trained adult or health worker should guide medicine use."
              ],
              "answer": "Correct measurement helps medicine be used safely and properly."
            },
            "tryThis": {
              "question": "Which job often uses a thermometer?",
              "choices": [
                "Tailor only",
                "Football referee only",
                "Bank teller only",
                "Health worker"
              ],
              "correct": 3,
              "explanation": "Health workers use thermometers to check body temperature."
            },
            "imageUrl": "/images/math/measurement-units.svg",
            "imageCaption": "Measurement in daily life."
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Which instrument measures length?",
        "choices": [
          "Ruler",
          "Thermometer",
          "Clock",
          "Measuring jug"
        ],
        "correct": 0,
        "why": "A ruler measures length."
      },
      {
        "q": "Mass is commonly measured in:",
        "choices": [
          "litres",
          "kilograms",
          "hours",
          "degrees only"
        ],
        "correct": 1,
        "why": "Kilograms measure mass."
      },
      {
        "q": "Capacity is commonly measured in:",
        "choices": [
          "metres",
          "kilograms",
          "litres",
          "seconds"
        ],
        "correct": 2,
        "why": "Litres measure capacity."
      },
      {
        "q": "A thermometer measures:",
        "choices": [
          "length",
          "mass",
          "capacity",
          "temperature"
        ],
        "correct": 3,
        "why": "Thermometers measure temperature."
      },
      {
        "q": "A complete measurement answer needs:",
        "choices": [
          "number and unit",
          "unit only",
          "number only",
          "a picture only"
        ],
        "correct": 0,
        "why": "Measurements need number and unit."
      },
      {
        "q": "Why read scales carefully?",
        "choices": [
          "to change the object",
          "to avoid errors",
          "to make it heavier",
          "to remove units"
        ],
        "correct": 1,
        "why": "Careful scale reading prevents wrong measurements."
      }
    ]
  },
  {
    "id": "p5-immunisation",
    "themeId": "p5-science-core",
    "themeName": "Human Health",
    "title": "Immunisation",
    "estMinutes": 38,
    "status": "published",
    "reviewStatus": "beta",
    "upperPrimaryLessons": P5_IMMUNISATION_V4,
    "useOnlyV4Lessons": true,
    "note": {
      "intro": "P5 Science beta: built from researched NCDC Primary Five Integrated Science Set One structure; human science/health review still required before premium-final release. Immunisation connects science ideas to health, farming, environment and daily life.",
      "learningObjectives": [
        "Explain the meaning of immunisation.",
        "State the importance of vaccines.",
        "Describe the use of health cards and schedules.",
        "Explain what families should do when a vaccine date is missed."
      ],
      "whatYouNeedToKnow": [
        "Immunisation is giving a vaccine to help the body fight a disease.",
        "Vaccines should be given by trained health workers.",
        "Health cards help track vaccines and clinic visits.",
        "Parents/guardians should keep health cards safe and return on scheduled dates.",
        "If a date is missed, ask a health worker for advice."
      ],
      "worked": {
        "problem": "Why should babies be taken for immunisation?",
        "steps": [
          "Babies can get dangerous diseases.",
          "Vaccines help the body prepare to fight some diseases.",
          "A health worker gives the vaccine safely."
        ],
        "answer": "Babies are immunised to help protect them from dangerous diseases."
      },
      "commonMistakes": [
        "Saying vaccines should be given by anyone.",
        "Throwing away health cards.",
        "Hiding missed immunisation dates.",
        "Thinking immunisation treats every illness instantly."
      ],
      "recap": [
        "Vaccines help prevent some serious diseases.",
        "Health workers give vaccines.",
        "Health cards keep records."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p5-immunisation-meaning",
        "title": "1. Meaning and importance",
        "modules": [
          {
            "moduleId": "p5-meaning-immunisation-full",
            "title": "Meaning and Importance of Immunisation",
            "bigIdea": "Immunisation helps protect children, families and communities from some serious diseases.",
            "learnIt": [
              "A vaccine trains the body to recognise and fight a disease.",
              "Immunisation reduces severe illness and death from some diseases.",
              "Many protected people can reduce disease spread in a community.",
              "Vaccines should be given by trained health workers."
            ],
            "workedExample": {
              "question": "Give one reason immunisation is important.",
              "steps": [
                "It helps prevent some diseases.",
                "It protects children and can protect the community."
              ],
              "answer": "Immunisation protects children from some serious diseases."
            },
            "tryThis": {
              "question": "Who should give vaccines?",
              "choices": [
                "Any passer-by",
                "Shopkeeper only",
                "Trained health worker",
                "Class monitor only"
              ],
              "correct": 2,
              "explanation": "Vaccines should be given by trained health workers."
            },
            "imageUrl": "/images/science/p5-immunisation-card.svg",
            "imageCaption": "Immunisation and health card reminder."
          }
        ]
      },
      {
        "subtopicId": "p5-health-card-schedule",
        "title": "2. Health cards and schedules",
        "modules": [
          {
            "moduleId": "p5-health-card-schedule-full",
            "title": "Health Cards and Return Dates",
            "bigIdea": "Health cards help families follow immunisation schedules correctly.",
            "learnIt": [
              "A child health card records vaccines already given.",
              "It can show when to return to the clinic.",
              "Parents should keep it dry and safe.",
              "If a date is missed, they should ask a health worker what to do next."
            ],
            "workedExample": {
              "question": "Why is a child health card useful?",
              "steps": [
                "It records vaccines already given.",
                "It helps parents know when to return."
              ],
              "answer": "It helps track immunisation and clinic visits."
            },
            "tryThis": {
              "question": "If a child misses an immunisation date, the parent should:",
              "choices": [
                "throw away the card",
                "hide the child",
                "do nothing forever",
                "ask a health worker"
              ],
              "correct": 3,
              "explanation": "A health worker can advise safely."
            },
            "imageUrl": "/images/science/p5-immunisation-card.svg",
            "imageCaption": "Health card and schedule reminder."
          }
        ]
      },
      {
        "subtopicId": "p5-immunisation-myth-safety",
        "title": "3. Safe immunisation decisions",
        "modules": [
          {
            "moduleId": "p5-immunisation-safety-module",
            "title": "Safe Decisions about Vaccines",
            "bigIdea": "Good health decisions use trained health workers, records and correct information.",
            "learnIt": [
              "Do not get injections from untrained people.",
              "Do not share rumours about vaccines without checking with health workers.",
              "Tell a parent/guardian if a health card is lost.",
              "If a child feels unwell after a vaccine, an adult should ask a health worker for advice."
            ],
            "workedExample": {
              "question": "A family hears a rumour that they should stop immunisation. What should they do?",
              "steps": [
                "Rumours may be wrong or harmful.",
                "Health workers have correct guidance.",
                "The family should ask at the clinic."
              ],
              "answer": "They should ask a trained health worker for advice."
            },
            "tryThis": {
              "question": "Which is the safest source of immunisation advice?",
              "choices": [
                "trained health worker",
                "rumour from a stranger",
                "guessing",
                "throwing away the card"
              ],
              "correct": 0,
              "explanation": "Health workers are trained to advise on vaccines."
            },
            "imageUrl": "/images/science/p5-immunisation-card.svg",
            "imageCaption": "Safe immunisation decisions."
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Immunisation means:",
        "choices": [
          "eating any food",
          "giving vaccine to help prevent disease",
          "washing clothes only",
          "building a house"
        ],
        "correct": 1,
        "why": "Immunisation uses vaccines for disease protection."
      },
      {
        "q": "Who should give vaccines?",
        "choices": [
          "any passer-by",
          "shopkeeper only",
          "trained health worker",
          "class monitor only"
        ],
        "correct": 2,
        "why": "Vaccines should be given by trained health workers."
      },
      {
        "q": "A health card helps to:",
        "choices": [
          "measure rainfall",
          "draw maps",
          "count goats only",
          "record immunisation"
        ],
        "correct": 3,
        "why": "It records health services."
      },
      {
        "q": "If a child misses an immunisation date, the parent should:",
        "choices": [
          "ask a health worker",
          "throw away the card",
          "hide the child",
          "do nothing forever"
        ],
        "correct": 0,
        "why": "A health worker can advise."
      },
      {
        "q": "Immunisation can help the community because:",
        "choices": [
          "everyone stops eating",
          "diseases spread less easily",
          "schools close forever",
          "water disappears"
        ],
        "correct": 1,
        "why": "Protection in many people can reduce spread."
      },
      {
        "q": "A vaccine helps the body to:",
        "choices": [
          "grow feathers",
          "turn into water",
          "fight a disease",
          "break bones"
        ],
        "correct": 2,
        "why": "Vaccines prepare the body to fight disease."
      }
    ]
  },
  {
    "id": "p5-digestive-system",
    "themeId": "p5-science-core",
    "themeName": "Human Body",
    "title": "The Digestive System",
    "estMinutes": 42,
    "status": "published",
    "reviewStatus": "beta",
    "upperPrimaryLessons": P5_DIGESTIVE_SYSTEM_V4,
    "useOnlyV4Lessons": true,
    "note": {
      "intro": "P5 Science beta: built from researched NCDC Primary Five Integrated Science Set One structure; human science/health review still required before premium-final release. The Digestive System connects science ideas to health, farming, environment and daily life.",
      "learningObjectives": [
        "Name the main parts of the digestive system.",
        "Explain the meaning of digestion.",
        "Describe the role of teeth, saliva, stomach and intestines.",
        "State ways to care for the digestive system."
      ],
      "whatYouNeedToKnow": [
        "Digestion breaks food into simpler substances the body can use.",
        "Digestion begins in the mouth where teeth chew food and saliva moistens it.",
        "The oesophagus carries food to the stomach.",
        "The stomach churns food and mixes it with digestive juices.",
        "The small intestine absorbs useful digested food, while the large intestine absorbs water."
      ],
      "worked": {
        "problem": "Why is chewing food important?",
        "steps": [
          "Chewing breaks food into smaller pieces.",
          "Small pieces are easier to swallow.",
          "Small pieces are easier for digestive juices to act on."
        ],
        "answer": "Chewing helps break food into smaller pieces for easier digestion."
      },
      "commonMistakes": [
        "Thinking digestion only happens in the stomach.",
        "Forgetting the mouth starts digestion.",
        "Confusing small intestine and large intestine roles.",
        "Ignoring food hygiene and clean water."
      ],
      "recap": [
        "Digestion starts in the mouth.",
        "Food moves through the digestive tract.",
        "Clean food and balanced diet protect digestion."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p5-digestion-parts",
        "title": "1. Parts and food pathway",
        "modules": [
          {
            "moduleId": "p5-digestive-parts-pathway",
            "title": "Food Pathway in the Body",
            "bigIdea": "The digestive system is a pathway that changes food into useful substances.",
            "learnIt": [
              "Food enters through the mouth.",
              "The oesophagus carries food from the mouth to the stomach.",
              "The stomach churns food.",
              "The small intestine absorbs useful digested food.",
              "The large intestine absorbs water and forms waste."
            ],
            "workedExample": {
              "question": "Arrange: stomach, mouth, oesophagus. Which comes first?",
              "steps": [
                "Food enters the mouth first.",
                "It then moves down the oesophagus.",
                "It reaches the stomach."
              ],
              "answer": "Mouth, oesophagus, stomach."
            },
            "tryThis": {
              "question": "Where does food first enter the digestive system?",
              "choices": [
                "stomach",
                "large intestine",
                "liver",
                "mouth"
              ],
              "correct": 3,
              "explanation": "Food first enters through the mouth."
            },
            "imageUrl": "/images/science/p5-digestive-system-simple.svg",
            "imageCaption": "Simple digestive system journey diagram."
          }
        ]
      },
      {
        "subtopicId": "p5-teeth-saliva-digestion",
        "title": "2. Teeth, saliva and digestion",
        "modules": [
          {
            "moduleId": "p5-teeth-saliva-digestion-module",
            "title": "Chewing and Saliva",
            "bigIdea": "Teeth and saliva begin digestion before food reaches the stomach.",
            "learnIt": [
              "Incisors cut food.",
              "Canines tear food.",
              "Premolars and molars crush and grind food.",
              "Saliva moistens food and starts digestion of some foods."
            ],
            "workedExample": {
              "question": "Which teeth grind food?",
              "steps": [
                "Molars and premolars have broad surfaces.",
                "They crush and grind food."
              ],
              "answer": "Premolars and molars grind food."
            },
            "tryThis": {
              "question": "Which liquid moistens food in the mouth?",
              "choices": [
                "saliva",
                "urine",
                "sweat",
                "blood"
              ],
              "correct": 0,
              "explanation": "Saliva moistens food in the mouth."
            },
            "imageUrl": "/images/science/teeth-types-functions.svg",
            "imageCaption": "Teeth types and functions."
          }
        ]
      },
      {
        "subtopicId": "p5-digestive-health",
        "title": "3. Caring for the digestive system",
        "modules": [
          {
            "moduleId": "p5-digestive-health-module",
            "title": "Healthy Digestion Habits",
            "bigIdea": "Digestive health depends on clean food, clean water and good eating habits.",
            "learnIt": [
              "Wash hands before eating.",
              "Wash fruits and vegetables before eating them.",
              "Drink safe water.",
              "Eat a balanced diet and avoid too much junk food.",
              "Use clean plates and cups."
            ],
            "workedExample": {
              "question": "Why should fruits be washed before eating?",
              "steps": [
                "Fruits may carry dirt or germs.",
                "Washing reduces germs and dirt.",
                "This protects the digestive system."
              ],
              "answer": "Fruits should be washed to remove dirt and germs."
            },
            "tryThis": {
              "question": "Which habit protects the digestive system?",
              "choices": [
                "eating food from the floor",
                "washing fruits before eating",
                "drinking dirty water",
                "using dirty plates"
              ],
              "correct": 1,
              "explanation": "Washing fruits removes dirt and germs."
            },
            "imageUrl": "/images/science/personal-hygiene-handwashing.svg",
            "imageCaption": "Hygiene protects digestion."
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Digestion begins in the:",
        "choices": [
          "large intestine",
          "skin",
          "mouth",
          "lungs"
        ],
        "correct": 2,
        "why": "Chewing and saliva begin digestion in the mouth."
      },
      {
        "q": "The oesophagus carries food to the:",
        "choices": [
          "ear",
          "kidney",
          "hand",
          "stomach"
        ],
        "correct": 3,
        "why": "The oesophagus connects the mouth to the stomach."
      },
      {
        "q": "Which part absorbs useful digested food?",
        "choices": [
          "small intestine",
          "teeth",
          "rib",
          "skin"
        ],
        "correct": 0,
        "why": "The small intestine absorbs nutrients."
      },
      {
        "q": "Which teeth grind food?",
        "choices": [
          "canines only",
          "molars",
          "incisors only",
          "tongue"
        ],
        "correct": 1,
        "why": "Molars grind food."
      },
      {
        "q": "Which habit protects digestion?",
        "choices": [
          "drinking dirty water",
          "eating spoiled food",
          "washing hands before eating",
          "using dirty plates"
        ],
        "correct": 2,
        "why": "Handwashing reduces germs."
      },
      {
        "q": "A balanced diet helps the body by giving:",
        "choices": [
          "only sweets",
          "only smoke",
          "only dirt",
          "different needed nutrients"
        ],
        "correct": 3,
        "why": "A balanced diet provides varied nutrients."
      }
    ]
  },
  {
    "id": "p5-components-environment-soil",
    "themeId": "p5-science-core",
    "themeName": "Our Environment",
    "title": "Components of the Environment: Soil",
    "estMinutes": 40,
    "status": "published",
    "reviewStatus": "beta",
    "upperPrimaryLessons": P5_SOIL_V4,
    "useOnlyV4Lessons": true,
    "note": {
      "intro": "P5 Science beta: built from researched NCDC Primary Five Integrated Science Set One structure; human science/health review still required before premium-final release. Components of the Environment: Soil connects science ideas to health, farming, environment and daily life.",
      "learningObjectives": [
        "Explain soil as a component of the environment.",
        "Name components of soil.",
        "Describe soil types and properties.",
        "Explain soil erosion and conservation."
      ],
      "whatYouNeedToKnow": [
        "Soil is the top layer of the earth where many plants grow.",
        "Soil contains mineral particles, humus, air, water and living organisms.",
        "Common soil types include sandy, clay and loam soils.",
        "Soil erosion is removal of topsoil by water, wind, animals or human activities.",
        "Soil can be conserved by planting trees/grass, mulching, terracing and contour ploughing."
      ],
      "worked": {
        "problem": "Why is topsoil important for crop growing?",
        "steps": [
          "Topsoil contains humus and many nutrients.",
          "Plant roots grow in topsoil.",
          "Crops get water and mineral salts from it."
        ],
        "answer": "Topsoil is important because it contains nutrients and supports plant roots."
      },
      "commonMistakes": [
        "Thinking soil is only sand.",
        "Forgetting soil contains air and water.",
        "Calling all soil loam without checking properties.",
        "Ignoring erosion as a cause of poor crop growth."
      ],
      "recap": [
        "Soil has many components.",
        "Loam is usually good for crop growing.",
        "Conserve soil to protect farming."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p5-soil-components",
        "title": "1. Soil components",
        "modules": [
          {
            "moduleId": "p5-soil-components-full",
            "title": "What Soil Contains",
            "bigIdea": "Soil is a mixture, not just one material.",
            "learnIt": [
              "Mineral particles come from weathered rocks.",
              "Humus comes from decayed plant and animal remains.",
              "Air spaces help roots and soil organisms breathe.",
              "Water in soil helps dissolve mineral salts for plants."
            ],
            "workedExample": {
              "question": "Name three components of soil.",
              "steps": [
                "Think of materials found in soil.",
                "Mineral particles, humus and water are examples."
              ],
              "answer": "Soil contains mineral particles, humus and water."
            },
            "tryThis": {
              "question": "Humus comes from:",
              "choices": [
                "decayed plant and animal remains",
                "fresh plastic",
                "clean glass",
                "metal only"
              ],
              "correct": 0,
              "explanation": "Humus forms from decayed organic matter."
            },
            "imageUrl": "/images/science/p5-soil-layers.svg",
            "imageCaption": "Soil layers and components."
          }
        ]
      },
      {
        "subtopicId": "p5-soil-types-properties",
        "title": "2. Soil types and properties",
        "modules": [
          {
            "moduleId": "p5-soil-types-properties-module",
            "title": "Sandy, Clay and Loam Soil",
            "bigIdea": "Different soils hold air and water differently.",
            "learnIt": [
              "Sandy soil has large particles and drains water quickly.",
              "Clay soil has very small particles and holds much water.",
              "Loam soil has a good mixture of sand, clay and humus and is often good for farming."
            ],
            "workedExample": {
              "question": "Why is loam soil good for crop growing?",
              "steps": [
                "It has a mixture of sand, clay and humus.",
                "It holds enough water but also drains fairly well.",
                "It contains nutrients for crops."
              ],
              "answer": "Loam soil is good because it has a balanced mixture and nutrients."
            },
            "tryThis": {
              "question": "Which soil drains fastest?",
              "choices": [
                "clay soil",
                "sandy soil",
                "loam soil always",
                "humus only"
              ],
              "correct": 1,
              "explanation": "Sandy soil has large particles and drains quickly."
            },
            "imageUrl": "/images/science/p5-soil-layers.svg",
            "imageCaption": "Soil types and layers."
          }
        ]
      },
      {
        "subtopicId": "p5-soil-erosion-conservation",
        "title": "3. Soil erosion and conservation",
        "modules": [
          {
            "moduleId": "p5-soil-erosion-conservation-full",
            "title": "Protecting Soil",
            "bigIdea": "Soil conservation protects the fertile topsoil needed for farming.",
            "learnIt": [
              "Running water can wash away topsoil.",
              "Wind can blow away dry bare soil.",
              "Plant roots hold soil together.",
              "Mulching, terracing and contour ploughing reduce erosion."
            ],
            "workedExample": {
              "question": "How does grass help prevent soil erosion?",
              "steps": [
                "Grass roots hold soil particles together.",
                "Grass leaves reduce the force of raindrops on soil."
              ],
              "answer": "Grass holds soil and protects it from raindrop impact."
            },
            "tryThis": {
              "question": "Which practice conserves soil?",
              "choices": [
                "burning all vegetation",
                "overgrazing",
                "terracing",
                "cutting all trees"
              ],
              "correct": 2,
              "explanation": "Terracing reduces soil erosion on slopes."
            },
            "imageUrl": "/images/science/p5-soil-layers.svg",
            "imageCaption": "Soil erosion and conservation."
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Soil contains:",
        "choices": [
          "only stones",
          "only plastic",
          "only iron",
          "air, water and humus"
        ],
        "correct": 3,
        "why": "Soil is a mixture."
      },
      {
        "q": "Humus comes from:",
        "choices": [
          "decayed plant and animal matter",
          "fresh glass",
          "metal nails",
          "clean water only"
        ],
        "correct": 0,
        "why": "Humus is decayed organic matter."
      },
      {
        "q": "Which soil drains fastest?",
        "choices": [
          "clay soil",
          "sandy soil",
          "loam soil always",
          "humus only"
        ],
        "correct": 1,
        "why": "Sandy soil drains quickly."
      },
      {
        "q": "Loam is good for crops because it:",
        "choices": [
          "has no air",
          "is only stones",
          "has a balanced mixture",
          "never holds water"
        ],
        "correct": 2,
        "why": "Loam has useful balance."
      },
      {
        "q": "Soil erosion is:",
        "choices": [
          "growth of teeth",
          "heating water",
          "counting animals",
          "removal of topsoil"
        ],
        "correct": 3,
        "why": "Erosion removes topsoil."
      },
      {
        "q": "Which reduces erosion?",
        "choices": [
          "planting grass",
          "overgrazing",
          "burning all plants",
          "digging down slopes always"
        ],
        "correct": 0,
        "why": "Grass roots hold soil."
      }
    ]
  },
  {
    "id": "p5-heat-energy",
    "themeId": "p5-science-core",
    "themeName": "Matter and Energy",
    "title": "Heat Energy",
    "estMinutes": 40,
    "status": "published",
    "reviewStatus": "beta",
    "upperPrimaryLessons": P5_HEAT_ENERGY_V4,
    "useOnlyV4Lessons": true,
    "note": {
      "intro": "P5 Science beta: built from researched NCDC Primary Five Integrated Science Set One structure; human science/health review still required before premium-final release. Heat Energy connects science ideas to health, farming, environment and daily life.",
      "learningObjectives": [
        "Name sources of heat.",
        "Describe effects of heat on materials.",
        "Explain expansion and contraction.",
        "Describe safe handling of heat and simple heat transfer."
      ],
      "whatYouNeedToKnow": [
        "Heat is a form of energy that makes things hot.",
        "Sources of heat include the sun, fire, electricity, friction and fuels.",
        "Heat can cook food, dry clothes, warm bodies and change states of matter.",
        "Many materials expand when heated and contract when cooled.",
        "Hot objects can burn skin and must be handled carefully."
      ],
      "worked": {
        "problem": "Why are small gaps left between rails or bridge parts?",
        "steps": [
          "Metals expand when heated.",
          "Gaps allow expansion without bending or cracking."
        ],
        "answer": "Gaps allow metal to expand safely when it becomes hot."
      },
      "commonMistakes": [
        "Thinking heat and temperature are exactly the same.",
        "Touching hot objects without protection.",
        "Forgetting that friction can produce heat.",
        "Saying all materials expand equally."
      ],
      "recap": [
        "Heat is energy.",
        "Heating can cause expansion and state changes.",
        "Handle heat safely."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p5-heat-sources-uses",
        "title": "1. Sources and uses of heat",
        "modules": [
          {
            "moduleId": "p5-heat-sources-uses-full",
            "title": "Sources and Uses of Heat",
            "bigIdea": "Heat comes from different sources and is useful when controlled safely.",
            "learnIt": [
              "The sun is the main natural source of heat.",
              "Firewood, charcoal, gas and electricity can produce heat for cooking.",
              "Friction can produce heat when surfaces rub.",
              "Heat dries clothes, cooks food and warms people."
            ],
            "workedExample": {
              "question": "Give two sources of heat used at home.",
              "steps": [
                "Think of cooking and lighting a fire.",
                "Charcoal and electricity are examples."
              ],
              "answer": "Charcoal and electricity are sources of heat used at home."
            },
            "tryThis": {
              "question": "Which is a natural source of heat?",
              "choices": [
                "spanner",
                "sun",
                "ruler",
                "chalk"
              ],
              "correct": 1,
              "explanation": "The sun is a natural heat source."
            },
            "imageUrl": "/images/science/p5-heat-transfer.svg",
            "imageCaption": "Heat sources and effects."
          }
        ]
      },
      {
        "subtopicId": "p5-heat-effects-transfer",
        "title": "2. Effects and movement of heat",
        "modules": [
          {
            "moduleId": "p5-heat-transfer-effects-module",
            "title": "Conduction, Convection and Radiation",
            "bigIdea": "Heat moves in different ways depending on the material and space.",
            "learnIt": [
              "Conduction is heat movement through solids.",
              "Convection is heat movement in liquids and gases.",
              "Radiation is heat transfer through space, such as heat from the sun.",
              "Heating can change state, for example ice melting."
            ],
            "workedExample": {
              "question": "Why does a metal spoon in hot tea become hot?",
              "steps": [
                "The spoon touches hot tea.",
                "Heat moves through the metal by conduction."
              ],
              "answer": "Heat reaches the spoon handle by conduction."
            },
            "tryThis": {
              "question": "Heat from the sun reaches Earth mainly by:",
              "choices": [
                "conduction only",
                "convection only",
                "radiation",
                "digestion"
              ],
              "correct": 2,
              "explanation": "Radiation transfers heat through space."
            },
            "imageUrl": "/images/science/p5-heat-transfer.svg",
            "imageCaption": "Heat transfer diagram."
          }
        ]
      },
      {
        "subtopicId": "p5-expansion-safety",
        "title": "3. Expansion, contraction and safety",
        "modules": [
          {
            "moduleId": "p5-expansion-contraction-safety",
            "title": "Expansion and Contraction",
            "bigIdea": "Heat changes the size of many materials and can cause danger if ignored.",
            "learnIt": [
              "Many solids expand when heated.",
              "Many solids contract when cooled.",
              "Expansion gaps prevent bending in rails and bridges.",
              "Use pot holders or dry cloth when handling hot utensils."
            ],
            "workedExample": {
              "question": "Why should a learner not touch a hot saucepan?",
              "steps": [
                "Hot metal can burn skin.",
                "A learner should use safe protection and adult guidance."
              ],
              "answer": "Because the hot saucepan can burn the learner."
            },
            "tryThis": {
              "question": "Cooling usually causes many solids to:",
              "choices": [
                "expand always",
                "turn into animals",
                "become money",
                "contract"
              ],
              "correct": 3,
              "explanation": "Cooling often causes contraction."
            },
            "imageUrl": "/images/science/p5-heat-transfer.svg",
            "imageCaption": "Expansion, contraction and heat safety."
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "The main natural source of heat is:",
        "choices": [
          "sun",
          "ruler",
          "clock",
          "soil"
        ],
        "correct": 0,
        "why": "The sun is a natural heat source."
      },
      {
        "q": "Friction can produce:",
        "choices": [
          "rain",
          "heat",
          "soil",
          "digestion"
        ],
        "correct": 1,
        "why": "Rubbing surfaces can produce heat."
      },
      {
        "q": "Conduction mostly happens through:",
        "choices": [
          "empty space only",
          "songs",
          "solids",
          "letters"
        ],
        "correct": 2,
        "why": "Conduction is common in solids."
      },
      {
        "q": "Heat from the sun reaches us by:",
        "choices": [
          "digestion",
          "germination",
          "pollination",
          "radiation"
        ],
        "correct": 3,
        "why": "Radiation transfers heat through space."
      },
      {
        "q": "Expansion means:",
        "choices": [
          "increase in size",
          "decrease in size",
          "disappear",
          "break always"
        ],
        "correct": 0,
        "why": "Expansion is increase in size."
      },
      {
        "q": "Hot objects should be handled:",
        "choices": [
          "with bare hands always",
          "carefully",
          "by small children alone",
          "carelessly"
        ],
        "correct": 1,
        "why": "Hot objects can burn."
      }
    ]
  },
  {
    "id": "p5-crop-growing",
    "themeId": "p5-science-core",
    "themeName": "Science in Human Activities and Occupations",
    "title": "Occupations in Our Community: Crop Growing",
    "estMinutes": 40,
    "status": "published",
    "reviewStatus": "beta",
    "upperPrimaryLessons": P5_CROP_GROWING_V4,
    "useOnlyV4Lessons": true,
    "note": {
      "intro": "P5 Science beta: built from researched NCDC Primary Five Integrated Science Set One structure; human science/health review still required before premium-final release. Occupations in Our Community: Crop Growing connects science ideas to health, farming, environment and daily life.",
      "learningObjectives": [
        "Name common crops and farm tools.",
        "Describe land preparation and planting.",
        "Explain crop-care practices.",
        "Describe harvesting and safe storage."
      ],
      "whatYouNeedToKnow": [
        "Crop growing is cultivation of plants for food, income or raw materials.",
        "Farm tools include hoes, pangas, rakes, watering cans and wheelbarrows.",
        "Land preparation includes clearing, digging and making seedbeds.",
        "Crop care includes watering, weeding, mulching and pest control.",
        "Harvested crops should be handled and stored safely to avoid pests, mould and rotting."
      ],
      "worked": {
        "problem": "Why should a farmer weed a garden?",
        "steps": [
          "Weeds compete with crops for water, nutrients, light and space.",
          "Removing weeds helps crops grow better."
        ],
        "answer": "A farmer weeds to reduce competition and help crops grow well."
      },
      "commonMistakes": [
        "Using farm tools carelessly.",
        "Planting poor seeds.",
        "Forgetting crop care after planting.",
        "Storing wet grains where they may rot or grow mould."
      ],
      "recap": [
        "Prepare land well.",
        "Care for crops regularly.",
        "Harvest and store crops safely."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p5-farm-tools-land-preparation",
        "title": "1. Farm tools and land preparation",
        "modules": [
          {
            "moduleId": "p5-farm-tools-full",
            "title": "Farm Tools and Safe Use",
            "bigIdea": "Farm tools make work easier but must be used carefully.",
            "learnIt": [
              "A hoe is used for digging and weeding.",
              "A panga can cut small branches or clear bush under adult guidance.",
              "A rake can collect rubbish and level soil.",
              "Tools should be stored safely after use."
            ],
            "workedExample": {
              "question": "Which tool is used for digging?",
              "steps": [
                "A hoe is a common digging tool.",
                "It can also be used for weeding."
              ],
              "answer": "A hoe is used for digging."
            },
            "tryThis": {
              "question": "Which tool waters seedlings?",
              "choices": [
                "saw",
                "hammer",
                "watering can",
                "spanner"
              ],
              "correct": 2,
              "explanation": "A watering can is used to water plants."
            },
            "imageUrl": "/images/science/crop-growing-cycle.svg",
            "imageCaption": "Crop growing and tools."
          }
        ]
      },
      {
        "subtopicId": "p5-planting-crop-care",
        "title": "2. Planting and crop care",
        "modules": [
          {
            "moduleId": "p5-planting-crop-care-module",
            "title": "From Planting to Healthy Crops",
            "bigIdea": "Planting is only the beginning; crops need continuous care.",
            "learnIt": [
              "Use healthy seeds or seedlings.",
              "Plant at the correct spacing and depth.",
              "Water young plants when needed.",
              "Weed, mulch and control pests safely."
            ],
            "workedExample": {
              "question": "Why is correct spacing important?",
              "steps": [
                "Crowded crops compete for light, water and nutrients.",
                "Correct spacing gives each crop room to grow."
              ],
              "answer": "Correct spacing reduces competition and improves growth."
            },
            "tryThis": {
              "question": "Which practice helps crops in dry weather?",
              "choices": [
                "burning all plants",
                "removing soil",
                "breaking roots",
                "mulching"
              ],
              "correct": 3,
              "explanation": "Mulching reduces water loss."
            },
            "imageUrl": "/images/science/crop-growing-cycle.svg",
            "imageCaption": "Crop care cycle."
          }
        ]
      },
      {
        "subtopicId": "p5-harvesting-storage",
        "title": "3. Harvesting and storage",
        "modules": [
          {
            "moduleId": "p5-harvest-storage-module",
            "title": "Protecting Harvested Crops",
            "bigIdea": "Good storage protects the farmer’s work after harvest.",
            "learnIt": [
              "Harvest crops when they are mature.",
              "Dry grains before storage.",
              "Store crops in clean dry places.",
              "Protect stored food from pests such as rats and weevils."
            ],
            "workedExample": {
              "question": "Why should harvested maize be dried before storage?",
              "steps": [
                "Drying reduces moisture.",
                "Low moisture reduces rotting and mould."
              ],
              "answer": "Maize is dried to prevent rotting and mould."
            },
            "tryThis": {
              "question": "Stored grain should be kept:",
              "choices": [
                "dry",
                "wet",
                "under rain",
                "in dirty water"
              ],
              "correct": 0,
              "explanation": "Dry storage reduces rotting and mould."
            },
            "imageUrl": "/images/science/crop-growing-cycle.svg",
            "imageCaption": "Harvesting and storage reminder."
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Which tool is used for digging?",
        "choices": [
          "Needle",
          "Hoe",
          "Thermometer",
          "Telephone"
        ],
        "correct": 1,
        "why": "A hoe is a farm tool."
      },
      {
        "q": "Why do farmers weed crops?",
        "choices": [
          "To feed weeds",
          "To kill crops",
          "To reduce competition",
          "To remove all soil"
        ],
        "correct": 2,
        "why": "Weeds compete with crops."
      },
      {
        "q": "Which is a crop?",
        "choices": [
          "Goat",
          "Chicken",
          "Cow",
          "Maize"
        ],
        "correct": 3,
        "why": "Maize is a crop."
      },
      {
        "q": "Mulching helps to:",
        "choices": [
          "reduce water loss",
          "burn soil",
          "increase erosion",
          "break crops"
        ],
        "correct": 0,
        "why": "Mulch covers soil."
      },
      {
        "q": "Stored grain should be kept:",
        "choices": [
          "wet",
          "dry",
          "under rain",
          "in dirty water"
        ],
        "correct": 1,
        "why": "Dry storage reduces rotting."
      },
      {
        "q": "Pest control helps to:",
        "choices": [
          "feed pests",
          "destroy tools",
          "protect crops",
          "stop germination always"
        ],
        "correct": 2,
        "why": "Pest control protects crops."
      }
    ]
  },
  {
    "id": "p5-bacteria-fungi",
    "themeId": "p5-science-core",
    "themeName": "The World of Living Things",
    "title": "Bacteria and Fungi",
    "estMinutes": 38,
    "status": "published",
    "reviewStatus": "beta",
    "upperPrimaryLessons": P5_BACTERIA_FUNGI_V4,
    "useOnlyV4Lessons": true,
    "note": {
      "intro": "P5 Science beta: built from researched NCDC Primary Five Integrated Science Set One structure; human science/health review still required before premium-final release. Bacteria and Fungi connects science ideas to health, farming, environment and daily life.",
      "learningObjectives": [
        "Describe bacteria and fungi simply.",
        "State useful effects of bacteria and fungi.",
        "State harmful effects of bacteria and fungi.",
        "Explain hygiene practices that reduce harm."
      ],
      "whatYouNeedToKnow": [
        "Bacteria are very tiny living things that can only be seen clearly with a microscope.",
        "Fungi include moulds, mushrooms and yeasts.",
        "Some bacteria and fungi are useful, while others cause disease or spoil food.",
        "Yeast is a useful fungus in baking.",
        "Good hygiene reduces the spread of harmful microbes."
      ],
      "worked": {
        "problem": "Why should food be covered?",
        "steps": [
          "Uncovered food can be contaminated by dust, flies and germs.",
          "Covering food reduces contamination."
        ],
        "answer": "Food should be covered to keep away germs, flies and dirt."
      },
      "commonMistakes": [
        "Thinking all bacteria and fungi are harmful.",
        "Eating unknown wild mushrooms.",
        "Leaving food uncovered.",
        "Forgetting handwashing before eating."
      ],
      "recap": [
        "Some microbes help; some harm.",
        "Fungi include yeast, moulds and mushrooms.",
        "Hygiene reduces harmful microbes."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p5-bacteria-fungi-meaning",
        "title": "1. Meaning and examples",
        "modules": [
          {
            "moduleId": "p5-microbes-meaning-examples",
            "title": "Tiny Living Things",
            "bigIdea": "Bacteria and fungi affect food, health and the environment.",
            "learnIt": [
              "Bacteria are very small living things.",
              "Fungi include moulds, mushrooms and yeasts.",
              "Mould may grow on damp food.",
              "Some mushrooms are edible, but learners should not eat wild mushrooms unless a trusted adult says they are safe."
            ],
            "workedExample": {
              "question": "Name two examples of fungi.",
              "steps": [
                "Think of common fungi.",
                "Mushrooms and yeast are examples."
              ],
              "answer": "Mushrooms and yeast are examples of fungi."
            },
            "tryThis": {
              "question": "A mushroom is a type of:",
              "choices": [
                "insect",
                "bird",
                "fish",
                "fungus"
              ],
              "correct": 3,
              "explanation": "Mushrooms are fungi."
            },
            "imageUrl": "/images/science/p5-microbes-bacteria-fungi.svg",
            "imageCaption": "Bacteria and fungi summary."
          }
        ]
      },
      {
        "subtopicId": "p5-useful-harmful-microbes",
        "title": "2. Useful and harmful microbes",
        "modules": [
          {
            "moduleId": "p5-useful-harmful-microbes-full",
            "title": "Helpful and Harmful Roles",
            "bigIdea": "Microbes are important because they can help or harm people.",
            "learnIt": [
              "Yeast helps dough rise in baking.",
              "Some microbes decompose dead plants and animals, returning nutrients to soil.",
              "Harmful microbes can spoil food or cause diseases.",
              "Mouldy food should not be eaten."
            ],
            "workedExample": {
              "question": "Give one useful role of fungi.",
              "steps": [
                "Yeast is a fungus.",
                "It is used in baking."
              ],
              "answer": "Yeast is used in baking."
            },
            "tryThis": {
              "question": "Which fungus is used in baking?",
              "choices": [
                "yeast",
                "mosquito",
                "tick",
                "tapeworm"
              ],
              "correct": 0,
              "explanation": "Yeast is used in baking."
            },
            "imageUrl": "/images/science/p5-microbes-bacteria-fungi.svg",
            "imageCaption": "Useful and harmful microbes."
          }
        ]
      },
      {
        "subtopicId": "p5-microbe-hygiene",
        "title": "3. Hygiene and prevention",
        "modules": [
          {
            "moduleId": "p5-microbe-hygiene-full",
            "title": "Stopping Harmful Microbes",
            "bigIdea": "Good hygiene breaks the path of harmful microbes into the body.",
            "learnIt": [
              "Wash hands before eating and after using the latrine.",
              "Boil unsafe drinking water.",
              "Keep food covered.",
              "Dispose of rubbish properly and keep utensils clean."
            ],
            "workedExample": {
              "question": "How can a family reduce germs in drinking water?",
              "steps": [
                "Unsafe water may contain harmful microbes.",
                "Boiling can kill many germs.",
                "Store boiled water safely."
              ],
              "answer": "They can boil water and store it safely."
            },
            "tryThis": {
              "question": "Which habit reduces disease spread?",
              "choices": [
                "eating dirty food",
                "washing hands",
                "leaving food uncovered",
                "sharing dirty cups"
              ],
              "correct": 1,
              "explanation": "Handwashing removes many germs."
            },
            "imageUrl": "/images/science/p5-microbes-bacteria-fungi.svg",
            "imageCaption": "Hygiene reduces harmful microbes."
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Bacteria are usually:",
        "choices": [
          "large stones",
          "vehicles",
          "very tiny living things",
          "books"
        ],
        "correct": 2,
        "why": "Bacteria are very small."
      },
      {
        "q": "Which fungus is used in baking?",
        "choices": [
          "mosquito",
          "rat",
          "tick",
          "yeast"
        ],
        "correct": 3,
        "why": "Yeast is used in baking."
      },
      {
        "q": "Which may spoil food?",
        "choices": [
          "mould",
          "clean plate",
          "fresh air only",
          "sunlight only"
        ],
        "correct": 0,
        "why": "Mould can spoil food."
      },
      {
        "q": "Which habit reduces germs?",
        "choices": [
          "eating dirty food",
          "washing hands",
          "sharing dirty cups",
          "leaving rubbish everywhere"
        ],
        "correct": 1,
        "why": "Handwashing reduces germs."
      },
      {
        "q": "A mushroom is a type of:",
        "choices": [
          "insect",
          "bird",
          "fungus",
          "fish"
        ],
        "correct": 2,
        "why": "Mushrooms are fungi."
      },
      {
        "q": "Unsafe water should be:",
        "choices": [
          "stored open near rubbish",
          "mixed with soil",
          "ignored",
          "boiled before drinking"
        ],
        "correct": 3,
        "why": "Boiling can make water safer."
      }
    ]
  },
  {
    "id": "p5-types-of-changes",
    "themeId": "p5-science-core",
    "themeName": "Managing Changes in the Environment",
    "title": "Types of Changes: Biological, Physical and Chemical Changes",
    "estMinutes": 38,
    "status": "published",
    "reviewStatus": "beta",
    "upperPrimaryLessons": P5_TYPES_CHANGES_V4,
    "useOnlyV4Lessons": true,
    "note": {
      "intro": "P5 Science beta: built from researched NCDC Primary Five Integrated Science Set One structure; human science/health review still required before premium-final release. Types of Changes: Biological, Physical and Chemical Changes connects science ideas to health, farming, environment and daily life.",
      "learningObjectives": [
        "Identify biological changes.",
        "Identify physical changes.",
        "Identify chemical changes.",
        "Distinguish reversible and irreversible changes using examples."
      ],
      "whatYouNeedToKnow": [
        "Biological changes happen in living things, such as germination, growth and rotting.",
        "Physical changes change form, size or state without forming a new substance.",
        "Chemical changes form new substances and are often difficult to reverse.",
        "Some changes are reversible, such as freezing and melting water.",
        "Some changes are irreversible, such as burning paper or cooking an egg."
      ],
      "worked": {
        "problem": "Classify rusting of iron.",
        "steps": [
          "Rusting forms a new substance called rust.",
          "It is not easy to reverse."
        ],
        "answer": "Rusting is a chemical change."
      },
      "commonMistakes": [
        "Calling every change chemical.",
        "Thinking cutting paper forms a new substance.",
        "Forgetting that biological changes happen in living things.",
        "Confusing reversible and irreversible changes."
      ],
      "recap": [
        "Biological changes happen in living things.",
        "Physical changes usually do not form new substances.",
        "Chemical changes form new substances."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p5-biological-changes",
        "title": "1. Biological changes",
        "modules": [
          {
            "moduleId": "p5-biological-changes-full",
            "title": "Changes in Living Things",
            "bigIdea": "Biological changes happen because living things grow, reproduce, decay or respond to life processes.",
            "learnIt": [
              "Seed germination is a biological change.",
              "Growth of a child or plant is a biological change.",
              "Rotting fruit is biological because microbes act on once-living material."
            ],
            "workedExample": {
              "question": "Classify seed germination.",
              "steps": [
                "A seed is part of a living plant.",
                "It begins to grow into a seedling."
              ],
              "answer": "Seed germination is a biological change."
            },
            "tryThis": {
              "question": "Which is a biological change?",
              "choices": [
                "seed germination",
                "melting wax",
                "breaking glass",
                "rusting iron"
              ],
              "correct": 0,
              "explanation": "Seed germination happens in a living thing."
            },
            "imageUrl": "/images/science/p5-types-of-changes.svg",
            "imageCaption": "Types of changes chart."
          }
        ]
      },
      {
        "subtopicId": "p5-physical-chemical-changes",
        "title": "2. Physical and chemical changes",
        "modules": [
          {
            "moduleId": "p5-physical-chemical-changes-full",
            "title": "Physical or Chemical?",
            "bigIdea": "The key question is whether a new substance is formed.",
            "learnIt": [
              "Melting ice is physical because it is still water.",
              "Cutting paper is physical because no new substance is formed.",
              "Burning paper is chemical because ash and gases form.",
              "Rusting is chemical because rust forms."
            ],
            "workedExample": {
              "question": "Classify melting ice.",
              "steps": [
                "Ice changes from solid to liquid water.",
                "No new substance is formed.",
                "It can freeze again."
              ],
              "answer": "Melting ice is a physical change."
            },
            "tryThis": {
              "question": "Which is a chemical change?",
              "choices": [
                "cutting paper",
                "burning wood",
                "melting wax",
                "freezing water"
              ],
              "correct": 1,
              "explanation": "Burning forms new substances."
            },
            "imageUrl": "/images/science/p5-types-of-changes.svg",
            "imageCaption": "Physical and chemical changes."
          }
        ]
      },
      {
        "subtopicId": "p5-reversible-irreversible",
        "title": "3. Reversible and irreversible changes",
        "modules": [
          {
            "moduleId": "p5-reversible-irreversible-full",
            "title": "Can the Change Be Undone?",
            "bigIdea": "Reversibility helps learners classify many daily-life changes.",
            "learnIt": [
              "Freezing water can be reversed by melting.",
              "Evaporation can be reversed by condensation.",
              "Cooking an egg is irreversible.",
              "Burning wood or paper is irreversible because new substances form."
            ],
            "workedExample": {
              "question": "Is boiling water to steam reversible?",
              "steps": [
                "Steam can cool.",
                "Cooling steam forms water again."
              ],
              "answer": "Yes, it is reversible by condensation."
            },
            "tryThis": {
              "question": "Which change is irreversible?",
              "choices": [
                "melting ice",
                "freezing water",
                "burning paper",
                "evaporating water"
              ],
              "correct": 2,
              "explanation": "Burning paper forms new substances."
            },
            "imageUrl": "/images/science/p5-types-of-changes.svg",
            "imageCaption": "Reversible and irreversible changes."
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Which is a biological change?",
        "choices": [
          "melting ice",
          "breaking a cup",
          "boiling water",
          "growth of a plant"
        ],
        "correct": 3,
        "why": "Growth happens in living things."
      },
      {
        "q": "Which is a physical change?",
        "choices": [
          "melting ice",
          "rusting iron",
          "burning paper",
          "rotting fruit"
        ],
        "correct": 0,
        "why": "Melting changes state without forming a new substance."
      },
      {
        "q": "Which is a chemical change?",
        "choices": [
          "cutting paper",
          "burning wood",
          "melting wax",
          "freezing water"
        ],
        "correct": 1,
        "why": "Burning forms new substances."
      },
      {
        "q": "Rusting of iron is a:",
        "choices": [
          "physical change only",
          "measurement",
          "chemical change",
          "sound"
        ],
        "correct": 2,
        "why": "Rusting forms rust."
      },
      {
        "q": "Which change is reversible?",
        "choices": [
          "burning paper",
          "cooking an egg",
          "rusting iron",
          "freezing water"
        ],
        "correct": 3,
        "why": "Frozen water can melt again."
      },
      {
        "q": "A seed germinating is a:",
        "choices": [
          "biological change",
          "telephone call",
          "banking service",
          "road sign"
        ],
        "correct": 0,
        "why": "Germination is a living process."
      }
    ]
  }
];

const P5_SCIENCE_TERMS = {
  "p5-keeping-poultry-bees": "Term I" as const,
  "p5-crop-growing": "Term III" as const,
  "p5-measurement-science": "Term I" as const,
  "p5-heat-energy": "Term II" as const,
  "p5-immunisation": "Term I" as const,
  "p5-digestive-system": "Term II" as const,
  "p5-components-environment-soil": "Term II" as const,
  "p5-bacteria-fungi": "Term III" as const,
  "p5-types-of-changes": "Term III" as const
};

export const P5_SCIENCE_TOPICS: Topic[] = addUpperPrimaryScienceV4(P5_SCIENCE_TOPIC_DATA, "P5", P5_SCIENCE_TERMS);

export function getP5ScienceTopic(id: string): Topic | undefined {
  return P5_SCIENCE_TOPICS.find((topic) => topic.id === id);
}
