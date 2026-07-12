import type { LowerPrimaryLesson } from "@/lib/content-blocks";
import type { QuizQuestion, Subtopic, SubtopicModule, Topic } from "@/lib/topics";

// P3 Thematic live beta content layer.
// Source maps: content/curriculum/p3-thematic.json and docs/ops/ncdc-p3-curriculum-research-2026-07-09.md
// Rule: NCDC first, build second. P3 is thematic, not subject-based.
// Status: all 12 official P3 thematic themes are now built for live beta review.

const BETA_NOTICE =
  "P3 thematic beta: built from the official NCDC Primary Three Thematic Curriculum, May 2008. P3 is organised by themes, not separate upper-primary subjects.";

type P3SubthemeBlueprint = {
  id: string;
  title: string;
  keyContent: string[];
  mathematicsFocus: string[];
  literacyFocus: string[];
  englishFocus: string[];
  imageUrl: string;
  imageCaption: string;
};

type P3ThemeBlueprint = {
  id: string;
  themeNumber: number;
  title: string;
  term: string;
  outcome: string;
  icon: string;
  minutes: number;
  subthemes: P3SubthemeBlueprint[];
};

const THEME_BLUEPRINTS: P3ThemeBlueprint[] = [
  {
    "id": "p3-theme-1-subcounty-division",
    "themeNumber": 1,
    "title": "Our Sub-county/Division",
    "term": "Term I",
    "outcome": "The child understands different ways of locating places and appreciates the various social groups in the Sub-county/Division.",
    "icon": "🧭",
    "minutes": 70,
    "subthemes": [
      {
        "id": "p3-1-1-name-location-subcounty-division",
        "title": "Name and Location of our Sub-county/Division",
        "keyContent": [
          "Name of our sub-county/division",
          "Difference between map and picture",
          "Compass direction cardinal points (East, North, West, South)",
          "Location of sub-county/division in relation to neighbouring parishes"
        ],
        "mathematicsFocus": [
          "Counting 0-999",
          "Forming, naming, drawing and recording sets",
          "Identifying empty set symbols",
          "Constructing and using a compass",
          "Estimating distance"
        ],
        "literacyFocus": [
          "Talking about sub-county background",
          "Distinguishing maps and pictures",
          "Locating neighbouring parishes on maps",
          "Reading names and maps",
          "Writing and labelling maps/pictures"
        ],
        "englishFocus": [
          "Direction and location vocabulary",
          "Prepositions",
          "Giving and obeying commands",
          "Reading and writing sentences about location"
        ],
        "imageUrl": "/images/p3/p3-1-1-name-location-subcounty-division.svg",
        "imageCaption": "P3 Theme 1.1: Name and Location of our Sub-county/Division."
      },
      {
        "id": "p3-1-2-physical-features-subcounty-division",
        "title": "Physical Features of our Sub-county/Division",
        "keyContent": [
          "Hills",
          "Valleys",
          "Lakes",
          "Rivers",
          "Swamps",
          "Ponds",
          "Mountains",
          "Position and importance of physical features"
        ],
        "mathematicsFocus": [
          "Comparing sets",
          "Counting in 10s, 2s and 5s",
          "Identifying place value of tens and hundreds",
          "Drawing compass points"
        ],
        "literacyFocus": [
          "Naming and describing physical features",
          "Explaining why a compass is used",
          "Reading names and short texts",
          "Writing descriptions of physical features"
        ],
        "englishFocus": [
          "Vocabulary for physical features",
          "Where is...? structures",
          "Reading puzzles and stories",
          "Writing sentences about features"
        ],
        "imageUrl": "/images/p3/p3-1-2-physical-features-subcounty-division.svg",
        "imageCaption": "P3 Theme 1.2: Physical Features of our Sub-county/Division."
      },
      {
        "id": "p3-1-3-people-subcounty-division",
        "title": "People in our Sub-county/Division",
        "keyContent": [
          "Tribes and clans",
          "Administrative set-up",
          "Political and cultural leaders",
          "Roles of leaders",
          "Settling disputes",
          "Guidance and counselling",
          "Planning for development"
        ],
        "mathematicsFocus": [
          "Reading and writing number symbols 0-999",
          "Drawing a simple school playground map",
          "Using direction and non-standard distance measures"
        ],
        "literacyFocus": [
          "Naming tribes and clans",
          "Retelling stories about clan origins",
          "Describing administrative set-up",
          "Reading roles of leaders",
          "Writing names and stories"
        ],
        "englishFocus": [
          "Vocabulary for leaders and community roles",
          "What does a...? do? structures",
          "Reading stories about people and activities",
          "Writing descriptive sentences"
        ],
        "imageUrl": "/images/p3/p3-1-3-people-subcounty-division.svg",
        "imageCaption": "P3 Theme 1.3: People in our Sub-county/Division."
      }
    ]
  },
  {
    "id": "p3-theme-2-livelihood",
    "themeNumber": 2,
    "title": "Livelihood in Our Sub-county/Division",
    "term": "Term I",
    "outcome": "The child applies acquired skills and appreciates the benefits of participating in different activities.",
    "icon": "🧺",
    "minutes": 70,
    "subthemes": [
      {
        "id": "p3-2-1-occupations-importance",
        "title": "Occupations of People in our Sub-county/Division and their Importance",
        "keyContent": [
          "Money-generating and subsistence activities",
          "Casual labouring",
          "Trading",
          "Farming/animal rearing",
          "Tailoring",
          "Entertainment",
          "Pottery/brick making",
          "Carpentry",
          "Weaving/knitting",
          "Practical cookery"
        ],
        "mathematicsFocus": [
          "Grouping in 10s",
          "Counting in 10s and 100s from 1000 to 2000",
          "Place value for tens, hundreds and thousands",
          "Horizontal addition",
          "Non-standard measures in cookery"
        ],
        "literacyFocus": [
          "Identifying occupations",
          "Describing activities",
          "Discussing importance of work",
          "Role-playing occupations",
          "Predicting future work"
        ],
        "englishFocus": [
          "Occupation vocabulary",
          "Can/cannot structures",
          "Who makes/sells...? structures",
          "Reading and reorganising jumbled sentences",
          "Writing descriptive sentences"
        ],
        "imageUrl": "/images/p3/p3-2-1-occupations-importance.svg",
        "imageCaption": "P3 Theme 2.1: Occupations of People in our Sub-county/Division and their Importance."
      },
      {
        "id": "p3-2-2-social-services-importance",
        "title": "Social Services and their Importance",
        "keyContent": [
          "Education",
          "Health",
          "Communication",
          "Transport",
          "Water supply",
          "Security",
          "Importance of services"
        ],
        "mathematicsFocus": [
          "Reading and writing numbers in 10s and 100s from 1000 to 2000",
          "Adding two 3-digit numbers vertically without carrying",
          "Classifying communication objects"
        ],
        "literacyFocus": [
          "Describing social services",
          "Discussing importance",
          "Role-playing service jobs",
          "Writing about services"
        ],
        "englishFocus": [
          "Transport, health and communication vocabulary",
          "Relative clauses with who",
          "Because structures",
          "Writing educative messages and guided compositions"
        ],
        "imageUrl": "/images/p3/p3-2-2-social-services-importance.svg",
        "imageCaption": "P3 Theme 2.2: Social Services and their Importance."
      },
      {
        "id": "p3-2-3-challenges-social-services-solutions",
        "title": "Challenges in Social Services and Possible Solutions",
        "keyContent": [
          "Education challenges",
          "Health centre and medicine challenges",
          "Road/transport challenges",
          "Communication cost/availability",
          "Water quality/availability",
          "Security effectiveness",
          "Possible solutions"
        ],
        "mathematicsFocus": [
          "Adding two 2-digit numbers with carrying",
          "Addition word problems",
          "Drawing a journey map showing direction and distance in non-standard units"
        ],
        "literacyFocus": [
          "Identifying challenges",
          "Discussing causes and solutions",
          "Reading texts on problems/solutions",
          "Writing short texts and letters"
        ],
        "englishFocus": [
          "Past tense and because structures",
          "Vocabulary for challenges",
          "Situational games",
          "Writing about solutions"
        ],
        "imageUrl": "/images/p3/p3-2-3-challenges-social-services-solutions.svg",
        "imageCaption": "P3 Theme 2.3: Challenges in Social Services and Possible Solutions."
      }
    ]
  },
  {
    "id": "p3-theme-3-environment",
    "themeNumber": 3,
    "title": "Our Environment in Our Sub-county/Division",
    "term": "Term I",
    "outcome": "The child appreciates environmental changes and applies knowledge and skills to manage the environment.",
    "icon": "🌱",
    "minutes": 70,
    "subthemes": [
      {
        "id": "p3-3-1-soil",
        "title": "Soil",
        "keyContent": [
          "Composition of soil",
          "Water, air, dead plants, animals and rock particles",
          "Types of soil and texture",
          "Sand, clay and loam"
        ],
        "mathematicsFocus": [
          "Environmental measurements and number work from the theme"
        ],
        "literacyFocus": [
          "Observing, describing and reading about soil"
        ],
        "englishFocus": [
          "Soil vocabulary and descriptive sentences"
        ],
        "imageUrl": "/images/p3/p3-3-1-soil.svg",
        "imageCaption": "P3 Theme 3.1: Soil."
      },
      {
        "id": "p3-3-2-natural-causes-environmental-change",
        "title": "Natural Causes of Changes in the Environment",
        "keyContent": [
          "Floods",
          "Drought",
          "Weather chart making and recording"
        ],
        "mathematicsFocus": [
          "Weather chart recording",
          "Number work linked to environmental observation"
        ],
        "literacyFocus": [
          "Discussing natural changes",
          "Reading and writing about environmental changes"
        ],
        "englishFocus": [
          "Weather/environment vocabulary and past-tense descriptions"
        ],
        "imageUrl": "/images/p3/p3-3-2-natural-causes-environmental-change.svg",
        "imageCaption": "P3 Theme 3.2: Natural Causes of Changes in the Environment."
      },
      {
        "id": "p3-3-3-human-activities-environmental-change",
        "title": "Changes in the Environment through Human Activities",
        "keyContent": [
          "Human activities causing environmental change",
          "Effects of human activities",
          "Ways to manage changes"
        ],
        "mathematicsFocus": [
          "Adding two 4-digit numbers vertically without carrying"
        ],
        "literacyFocus": [
          "Discussing and writing about human activities in the environment"
        ],
        "englishFocus": [
          "Vocabulary and sentences about human activities and environmental care"
        ],
        "imageUrl": "/images/p3/p3-3-3-human-activities-environmental-change.svg",
        "imageCaption": "P3 Theme 3.3: Changes in the Environment through Human Activities."
      }
    ]
  },
  {
    "id": "p3-theme-4-environment-weather",
    "themeNumber": 4,
    "title": "Environment and Weather in our Sub-county/Division",
    "term": "Term II",
    "outcome": "The child appreciates and conserves the environment.",
    "icon": "💧",
    "minutes": 70,
    "subthemes": [
      {
        "id": "p3-4-1-air-sun",
        "title": "Air and the Sun",
        "keyContent": [
          "Concept and properties of air",
          "Air has weight",
          "Air moves things",
          "Air occupies space",
          "Air can be felt",
          "The sun as a weather/energy factor"
        ],
        "mathematicsFocus": [
          "Theme-linked measurement and number competences"
        ],
        "literacyFocus": [
          "Observing and explaining air and sun"
        ],
        "englishFocus": [
          "Vocabulary and structures about air, sun and weather"
        ],
        "imageUrl": "/images/p3/p3-4-1-air-sun.svg",
        "imageCaption": "P3 Theme 4.1: Air and the Sun."
      },
      {
        "id": "p3-4-2-water",
        "title": "Water",
        "keyContent": [
          "How rain is formed",
          "Water cycle",
          "Formation of rain drops",
          "Evaporation and condensation",
          "Types of clouds",
          "How clouds affect weather"
        ],
        "mathematicsFocus": [
          "Theme-linked subtraction and measurement competences"
        ],
        "literacyFocus": [
          "Reading and writing about water and rain"
        ],
        "englishFocus": [
          "Water-cycle vocabulary and weather sentences"
        ],
        "imageUrl": "/images/p3/p3-4-2-water.svg",
        "imageCaption": "P3 Theme 4.2: Water."
      },
      {
        "id": "p3-4-3-managing-water",
        "title": "Managing Water",
        "keyContent": [
          "Importance of water",
          "Sources of water",
          "Water harvesting",
          "Maintenance of water sources"
        ],
        "mathematicsFocus": [
          "Subtracting vertically two 3-digit numbers",
          "Measurement linked to water use"
        ],
        "literacyFocus": [
          "Discussing water sources and care",
          "Writing about water management"
        ],
        "englishFocus": [
          "Water source and conservation vocabulary"
        ],
        "imageUrl": "/images/p3/p3-4-3-managing-water.svg",
        "imageCaption": "P3 Theme 4.3: Managing Water."
      }
    ]
  },
  {
    "id": "p3-theme-5-animals",
    "themeNumber": 5,
    "title": "Living Things: Animals in Our Sub-county/Division",
    "term": "Term II",
    "outcome": "The child acquires, appreciates and applies basic scientific knowledge about living things in day-to-day life.",
    "icon": "🐝",
    "minutes": 70,
    "subthemes": [
      {
        "id": "p3-5-1-living-things",
        "title": "Living Things",
        "keyContent": [
          "Types of living things",
          "Insects",
          "Animals",
          "Birds",
          "Fish",
          "Classes of animals by habitat"
        ],
        "mathematicsFocus": [
          "Multiplication and classification linked to living things"
        ],
        "literacyFocus": [
          "Naming, classifying and describing living things"
        ],
        "englishFocus": [
          "Vocabulary for animals, insects, birds and fish"
        ],
        "imageUrl": "/images/p3/p3-5-1-living-things.svg",
        "imageCaption": "P3 Theme 5.1: Living Things."
      },
      {
        "id": "p3-5-2-birds-insects",
        "title": "Birds and Insects",
        "keyContent": [
          "Domestic birds",
          "Wild birds",
          "Crested crane as national symbol",
          "Common insects",
          "Characteristics and uses/dangers"
        ],
        "mathematicsFocus": [
          "Theme-linked multiplication/division competences"
        ],
        "literacyFocus": [
          "Observing, reading and writing about birds/insects"
        ],
        "englishFocus": [
          "Bird and insect vocabulary and descriptive sentences"
        ],
        "imageUrl": "/images/p3/p3-5-2-birds-insects.svg",
        "imageCaption": "P3 Theme 5.2: Birds and Insects."
      },
      {
        "id": "p3-5-3-care-insects-birds-animals",
        "title": "Care for Insects, Birds and Animals",
        "keyContent": [
          "Caring for bees",
          "Providing a hive",
          "Care for birds and animals",
          "Safe/healthy practices"
        ],
        "mathematicsFocus": [
          "Word problems in multiplication by 2, 3 and 10"
        ],
        "literacyFocus": [
          "Discussing care for animals and insects"
        ],
        "englishFocus": [
          "Animal care vocabulary and action sentences"
        ],
        "imageUrl": "/images/p3/p3-5-3-care-insects-birds-animals.svg",
        "imageCaption": "P3 Theme 5.3: Care for Insects, Birds and Animals."
      }
    ]
  },
  {
    "id": "p3-theme-6-plants",
    "themeNumber": 6,
    "title": "Living Things: Plants in Our Sub-county/Division",
    "term": "Term II",
    "outcome": "The child appreciates the uses of different plants and participates in crop production for self-reliance.",
    "icon": "🌿",
    "minutes": 70,
    "subthemes": [
      {
        "id": "p3-6-1-plants-habitat",
        "title": "Plants and their Habitat",
        "keyContent": [
          "Examples of plants",
          "Maize",
          "Yams",
          "Sisal",
          "Cactus",
          "Characteristics of plants",
          "Plant habitats"
        ],
        "mathematicsFocus": [
          "Theme-linked division/counting competences"
        ],
        "literacyFocus": [
          "Naming and describing plants and habitats"
        ],
        "englishFocus": [
          "Plant vocabulary and descriptive structures"
        ],
        "imageUrl": "/images/p3/p3-6-1-plants-habitat.svg",
        "imageCaption": "P3 Theme 6.1: Plants and their Habitat."
      },
      {
        "id": "p3-6-2-parts-flowering-plant-uses",
        "title": "Parts of a Flowering Plant and their Uses",
        "keyContent": [
          "Roots",
          "Stem",
          "Leaves",
          "Flowers",
          "Seeds",
          "Uses of plant parts",
          "Food",
          "Medicine",
          "Fuel"
        ],
        "mathematicsFocus": [
          "Theme-linked number/measurement competences"
        ],
        "literacyFocus": [
          "Identifying and explaining plant parts"
        ],
        "englishFocus": [
          "Vocabulary for plant parts and uses"
        ],
        "imageUrl": "/images/p3/p3-6-2-parts-flowering-plant-uses.svg",
        "imageCaption": "P3 Theme 6.2: Parts of a Flowering Plant and their Uses."
      },
      {
        "id": "p3-6-3-crop-growing-practices",
        "title": "Crop-growing Practices",
        "keyContent": [
          "Garden",
          "Hoe",
          "Tool",
          "Panga",
          "Slasher",
          "Planting",
          "Care for crops"
        ],
        "mathematicsFocus": [
          "Dividing up to 300 by 2, 3, 4 and 5 without remainder"
        ],
        "literacyFocus": [
          "Discussing and demonstrating crop-growing practices"
        ],
        "englishFocus": [
          "Crop-growing vocabulary and action sentences"
        ],
        "imageUrl": "/images/p3/p3-6-3-crop-growing-practices.svg",
        "imageCaption": "P3 Theme 6.3: Crop-growing Practices."
      }
    ]
  },
  {
    "id": "p3-theme-7-managing-resources",
    "themeNumber": 7,
    "title": "Managing Resources in Our Sub-county/Division",
    "term": "Term III",
    "outcome": "The child understands and demonstrates proper management of resources.",
    "icon": "💰",
    "minutes": 70,
    "subthemes": [
      {
        "id": "p3-7-1-saving-resources",
        "title": "Saving Resources",
        "keyContent": [
          "Concept of resources",
          "Water",
          "Time",
          "Money",
          "Food",
          "Fuel",
          "Firewood",
          "Charcoal",
          "Meaning of saving"
        ],
        "mathematicsFocus": [
          "Theme-linked money/time/measurement competences"
        ],
        "literacyFocus": [
          "Discussing saving resources"
        ],
        "englishFocus": [
          "Saving and resources vocabulary"
        ],
        "imageUrl": "/images/p3/p3-7-1-saving-resources.svg",
        "imageCaption": "P3 Theme 7.1: Saving Resources."
      },
      {
        "id": "p3-7-2-spending-resources",
        "title": "Spending Resources",
        "keyContent": [
          "Meaning of spending",
          "Things we use and spend on",
          "Budgeting",
          "Negotiating",
          "Prioritising",
          "Comparing quality",
          "Comparing prices"
        ],
        "mathematicsFocus": [
          "Money and budgeting competences"
        ],
        "literacyFocus": [
          "Discussing wise spending"
        ],
        "englishFocus": [
          "Spending, price and budgeting vocabulary"
        ],
        "imageUrl": "/images/p3/p3-7-2-spending-resources.svg",
        "imageCaption": "P3 Theme 7.2: Spending Resources."
      },
      {
        "id": "p3-7-3-projects",
        "title": "Projects",
        "keyContent": [
          "Projects as activities for knowledge, skills or money",
          "Bee keeping",
          "Other community projects"
        ],
        "mathematicsFocus": [
          "Project-linked number/money competences"
        ],
        "literacyFocus": [
          "Describing project activities"
        ],
        "englishFocus": [
          "Project and activity vocabulary"
        ],
        "imageUrl": "/images/p3/p3-7-3-projects.svg",
        "imageCaption": "P3 Theme 7.3: Projects."
      }
    ]
  },
  {
    "id": "p3-theme-8-keeping-peace",
    "themeNumber": 8,
    "title": "Keeping Peace in Our Sub-county/Division",
    "term": "Term III",
    "outcome": "The child understands and participates in different ways of living harmoniously with others.",
    "icon": "🤝",
    "minutes": 70,
    "subthemes": [
      {
        "id": "p3-8-1-living-peace",
        "title": "Living in Peace with Others",
        "keyContent": [
          "Concept of living in peace",
          "Observing rules and regulations",
          "Respecting each other",
          "Peaceful living"
        ],
        "mathematicsFocus": [
          "Theme-linked number/word-problem competences"
        ],
        "literacyFocus": [
          "Discussing peace and rules"
        ],
        "englishFocus": [
          "Peace vocabulary and advice structures"
        ],
        "imageUrl": "/images/p3/p3-8-1-living-peace.svg",
        "imageCaption": "P3 Theme 8.1: Living in Peace with Others."
      },
      {
        "id": "p3-8-2-child-rights-needs",
        "title": "Child Rights, Needs and their Importance",
        "keyContent": [
          "Concept of child rights",
          "Education",
          "Identity",
          "Food",
          "Freedom of speech",
          "Health services",
          "Shelter",
          "Play",
          "Clothing",
          "Language"
        ],
        "mathematicsFocus": [
          "Theme-linked practical competences"
        ],
        "literacyFocus": [
          "Talking about rights and needs"
        ],
        "englishFocus": [
          "Rights and needs vocabulary"
        ],
        "imageUrl": "/images/p3/p3-8-2-child-rights-needs.svg",
        "imageCaption": "P3 Theme 8.2: Child Rights, Needs and their Importance."
      },
      {
        "id": "p3-8-3-child-responsibility",
        "title": "Child Responsibility",
        "keyContent": [
          "Respect parents, teachers, elders and other children",
          "Keep law and order",
          "Promote good behaviour",
          "Promote interests of country"
        ],
        "mathematicsFocus": [
          "Theme-linked practical competences"
        ],
        "literacyFocus": [
          "Discussing responsibilities"
        ],
        "englishFocus": [
          "Responsibility and good behaviour vocabulary"
        ],
        "imageUrl": "/images/p3/p3-8-3-child-responsibility.svg",
        "imageCaption": "P3 Theme 8.3: Child Responsibility."
      }
    ]
  },
  {
    "id": "p3-theme-9-culture-gender",
    "themeNumber": 9,
    "title": "Culture and Gender in Our Sub-county/Division",
    "term": "Term III",
    "outcome": "The child understands and appreciates different cultures and demonstrates awareness of gender issues that promote harmonious living.",
    "icon": "🎭",
    "minutes": 70,
    "subthemes": [
      {
        "id": "p3-9-1-customs",
        "title": "Customs in our Sub-county/Division",
        "keyContent": [
          "Marriage",
          "Naming",
          "Greeting",
          "Dressing",
          "Language",
          "Music",
          "Burial",
          "Taboos",
          "Child-rearing practices"
        ],
        "mathematicsFocus": [
          "Theme-linked competences"
        ],
        "literacyFocus": [
          "Discussing customs respectfully"
        ],
        "englishFocus": [
          "Customs and culture vocabulary"
        ],
        "imageUrl": "/images/p3/p3-9-1-customs.svg",
        "imageCaption": "P3 Theme 9.1: Customs in our Sub-county/Division."
      },
      {
        "id": "p3-9-2-gender",
        "title": "Gender",
        "keyContent": [
          "Concept of gender",
          "What makes me a boy/girl",
          "Activities boys and girls do",
          "Equity",
          "Fair distribution of work",
          "Basic needs",
          "Fairness"
        ],
        "mathematicsFocus": [
          "Theme-linked competences"
        ],
        "literacyFocus": [
          "Talking about gender and equity"
        ],
        "englishFocus": [
          "Gender/equity vocabulary and sentences"
        ],
        "imageUrl": "/images/p3/p3-9-2-gender.svg",
        "imageCaption": "P3 Theme 9.2: Gender."
      },
      {
        "id": "p3-9-3-promoting-preserving-culture",
        "title": "Ways of Promoting and Preserving Culture",
        "keyContent": [
          "Music, dance and drama",
          "Sharing roles and responsibilities",
          "Documenting",
          "Planting trees",
          "Preserving culture"
        ],
        "mathematicsFocus": [
          "Theme-linked competences"
        ],
        "literacyFocus": [
          "Discussing cultural preservation"
        ],
        "englishFocus": [
          "Culture preservation vocabulary"
        ],
        "imageUrl": "/images/p3/p3-9-3-promoting-preserving-culture.svg",
        "imageCaption": "P3 Theme 9.3: Ways of Promoting and Preserving Culture."
      }
    ]
  },
  {
    "id": "p3-theme-10-health",
    "themeNumber": 10,
    "title": "Health in Our Sub-county/Division",
    "term": "Term III",
    "outcome": "The child demonstrates knowledge and skills of preventing and controlling common diseases for a healthy life.",
    "icon": "🧼",
    "minutes": 70,
    "subthemes": [
      {
        "id": "p3-10-1-disease-vectors",
        "title": "Disease Vectors",
        "keyContent": [
          "Mosquito",
          "Rat",
          "Louse",
          "Cockroach",
          "Housefly",
          "Tsetse fly",
          "Flea",
          "Bed-bug",
          "Characteristics of vectors"
        ],
        "mathematicsFocus": [
          "Theme-linked competences"
        ],
        "literacyFocus": [
          "Identifying and describing vectors"
        ],
        "englishFocus": [
          "Vector vocabulary and prevention sentences"
        ],
        "imageUrl": "/images/p3/p3-10-1-disease-vectors.svg",
        "imageCaption": "P3 Theme 10.1: Disease Vectors."
      },
      {
        "id": "p3-10-2-diseases-spread-vectors",
        "title": "Diseases Spread by Vectors",
        "keyContent": [
          "Malaria",
          "Cholera",
          "Typhoid",
          "Yellow fever",
          "Plague",
          "Diarrhoea",
          "Dysentery",
          "Trachoma",
          "Sleeping sickness",
          "Ways vectors spread disease"
        ],
        "mathematicsFocus": [
          "Theme-linked competences"
        ],
        "literacyFocus": [
          "Discussing disease prevention"
        ],
        "englishFocus": [
          "Disease and prevention vocabulary"
        ],
        "imageUrl": "/images/p3/p3-10-2-diseases-spread-vectors.svg",
        "imageCaption": "P3 Theme 10.2: Diseases Spread by Vectors."
      },
      {
        "id": "p3-10-3-hiv-aids",
        "title": "HIV/AIDS",
        "keyContent": [
          "Concept of HIV/AIDS",
          "Causes and spread",
          "Effects",
          "Ways of caring for HIV/AIDS patients",
          "Not sharing sharp objects"
        ],
        "mathematicsFocus": [
          "Theme-linked competences"
        ],
        "literacyFocus": [
          "Discussing HIV/AIDS carefully and respectfully"
        ],
        "englishFocus": [
          "Health and care vocabulary"
        ],
        "imageUrl": "/images/p3/p3-10-3-hiv-aids.svg",
        "imageCaption": "P3 Theme 10.3: HIV/AIDS."
      }
    ]
  },
  {
    "id": "p3-theme-11-basic-technology",
    "themeNumber": 11,
    "title": "Basic Technology in Our Sub-county/Division",
    "term": "Term III",
    "outcome": "The child applies basic scientific knowledge and skills in processing and making materials for self-reliance.",
    "icon": "🧵",
    "minutes": 70,
    "subthemes": [
      {
        "id": "p3-11-1-concept-technology",
        "title": "Concept of Technology",
        "keyContent": [
          "Natural and artificial materials",
          "Banana fibres",
          "Palm leaves",
          "Wire",
          "Plastic",
          "Straws"
        ],
        "mathematicsFocus": [
          "Theme-linked measurement/making competences"
        ],
        "literacyFocus": [
          "Talking about materials and uses"
        ],
        "englishFocus": [
          "Technology and material vocabulary"
        ],
        "imageUrl": "/images/p3/p3-11-1-concept-technology.svg",
        "imageCaption": "P3 Theme 11.1: Concept of Technology."
      },
      {
        "id": "p3-11-2-processing-natural-materials",
        "title": "Processing and Making Things from Natural Materials",
        "keyContent": [
          "Food",
          "Fibre",
          "Leaves",
          "Sources such as swamp, plantation and bush",
          "Products such as mats, ropes, juice and salads",
          "Purpose such as selling"
        ],
        "mathematicsFocus": [
          "Theme-linked project/measurement competences"
        ],
        "literacyFocus": [
          "Describing processing and products"
        ],
        "englishFocus": [
          "Natural materials and product vocabulary"
        ],
        "imageUrl": "/images/p3/p3-11-2-processing-natural-materials.svg",
        "imageCaption": "P3 Theme 11.2: Processing and Making Things from Natural Materials."
      },
      {
        "id": "p3-11-3-making-artificial-materials",
        "title": "Making Things from Artificial Materials",
        "keyContent": [
          "Recycling",
          "Toy cars",
          "Toy bicycles",
          "Flowers",
          "Candles",
          "Bags",
          "Uses for play, selling, decoration and wearing"
        ],
        "mathematicsFocus": [
          "Theme-linked project competences"
        ],
        "literacyFocus": [
          "Discussing making and recycling"
        ],
        "englishFocus": [
          "Artificial materials and making vocabulary"
        ],
        "imageUrl": "/images/p3/p3-11-3-making-artificial-materials.svg",
        "imageCaption": "P3 Theme 11.3: Making Things from Artificial Materials."
      }
    ]
  },
  {
    "id": "p3-theme-12-energy",
    "themeNumber": 12,
    "title": "Energy in Our Sub-county/Division",
    "term": "Term III",
    "outcome": "The child appreciates the existence of energy and demonstrates knowledge and skills of using and preserving it.",
    "icon": "⚡",
    "minutes": 70,
    "subthemes": [
      {
        "id": "p3-12-1-sources-energy",
        "title": "Sources of Energy",
        "keyContent": [
          "Natural energy sources",
          "Wind",
          "Water",
          "Artificial sources",
          "Fuel",
          "Diesel",
          "Petrol",
          "Wood",
          "Charcoal",
          "Paraffin",
          "Electricity",
          "Uses of energy"
        ],
        "mathematicsFocus": [
          "Adding and subtracting 4-digit numbers with/without carrying/borrowing as revision"
        ],
        "literacyFocus": [
          "Explaining energy and sources",
          "Reading and writing about energy"
        ],
        "englishFocus": [
          "Energy vocabulary",
          "Present, past and future tense revision",
          "Requests and refusals"
        ],
        "imageUrl": "/images/p3/p3-12-1-sources-energy.svg",
        "imageCaption": "P3 Theme 12.1: Sources of Energy."
      },
      {
        "id": "p3-12-2-saving-energy",
        "title": "Ways of Saving Energy",
        "keyContent": [
          "Energy-saving stoves",
          "Energy-saving bulbs",
          "Switching off appliances",
          "Putting out fires after use",
          "Planting trees",
          "Following proper-use instructions",
          "Importance of saving energy"
        ],
        "mathematicsFocus": [
          "Multiplication/division revision",
          "Measuring length and distance for tree planting"
        ],
        "literacyFocus": [
          "Reading and writing messages on saving energy",
          "Tree planting project"
        ],
        "englishFocus": [
          "Switch on/off vocabulary",
          "Opposites",
          "Past simple tense"
        ],
        "imageUrl": "/images/p3/p3-12-2-saving-energy.svg",
        "imageCaption": "P3 Theme 12.2: Ways of Saving Energy."
      },
      {
        "id": "p3-12-3-dangers-energy",
        "title": "Dangers of Energy and Ways of Avoiding Them",
        "keyContent": [
          "Live wires",
          "Fire",
          "Strong wind",
          "Storm",
          "Drought",
          "Accidents",
          "Wind-breakers",
          "Avoiding playing with fire",
          "Not pushing nails into sockets",
          "Using fire extinguisher",
          "Making posters"
        ],
        "mathematicsFocus": [
          "Measuring length, capacity, weight, time and money as revision"
        ],
        "literacyFocus": [
          "Identifying dangers",
          "What to do during fire outbreak",
          "Writing stories/messages/posters"
        ],
        "englishFocus": [
          "Danger vocabulary",
          "Future tenses",
          "Comparisons"
        ],
        "imageUrl": "/images/p3/p3-12-3-dangers-energy.svg",
        "imageCaption": "P3 Theme 12.3: Dangers of Energy and Ways of Avoiding Them."
      }
    ]
  }
];

const GENERAL_DISTRACTORS = [
  "a private password",
  "a torn shoe lace",
  "a hidden phone game",
  "guessing without reading",
  "sleeping through the lesson",
  "a football score",
  "a pencil colour",
  "an unrelated joke",
  "a classroom nickname",
  "a magic password",
  "a random page number",
  "a missing button",
];

const THEME_VALUES: Record<string, string> = {
  "p3-theme-1-subcounty-division": "respect people, clans and leaders while locating places carefully",
  "p3-theme-2-livelihood": "respect useful work and appreciate services in the community",
  "p3-theme-3-environment": "care for soil and manage changes in the environment",
  "p3-theme-4-environment-weather": "use air, sun and water safely and conserve water sources",
  "p3-theme-5-animals": "care for animals, birds and useful insects without harming yourself",
  "p3-theme-6-plants": "care for plants and participate in simple crop-growing activities",
  "p3-theme-7-managing-resources": "save resources, spend wisely and learn from small projects",
  "p3-theme-8-keeping-peace": "respect rights, needs and responsibilities so people live peacefully",
  "p3-theme-9-culture-gender": "respect culture while treating boys and girls fairly",
  "p3-theme-10-health": "prevent disease, keep clean and care for sick people kindly",
  "p3-theme-11-basic-technology": "make useful things safely and reuse materials responsibly",
  "p3-theme-12-energy": "save energy and avoid dangerous sources of energy",
};

type P3SubthemePolish = {
  explain: string;
  localTask: string;
  valueAction: string;
  mathPractice: string;
  englishFrame: string;
  creativeAction: string;
};

const SUBTHEME_POLISH: Record<string, P3SubthemePolish> = {
  "p3-1-1-name-location-subcounty-division": {
    explain: "A learner should name the sub-county or division, point to nearby parishes and use a simple map as a drawing from above.",
    localTask: "Ask: What is the name of our sub-county/division? What parish or village is near us? Draw the school, road and one nearby place.",
    valueAction: "Give directions politely and help younger children find safe places.",
    mathPractice: "Count objects on a simple map, group places into sets and estimate distance in steps.",
    englishFrame: "Our school is near ___. The ___ is east/west/north/south of ___.",
    creativeAction: "Make a small classroom map with paper symbols for school, road, water source and market.",
  },
  "p3-1-2-physical-features-subcounty-division": {
    explain: "Physical features are natural features such as hills, valleys, rivers, lakes, swamps, ponds and mountains, not buildings made by people.",
    localTask: "Name one natural feature learners have seen, then say whether it provides water, soil, fish, grazing, transport or beauty.",
    valueAction: "Protect natural features by not dumping rubbish in rivers, swamps or ponds.",
    mathPractice: "Compare sets of features, count in 2s, 5s and 10s and use place value when counting examples.",
    englishFrame: "The ___ is near our ___. It is important because ___.",
    creativeAction: "Draw a hill, valley and river, then label each one.",
  },
  "p3-1-3-people-subcounty-division": {
    explain: "People live in families, clans, tribes and communities, and they are guided by family, school, cultural and local leaders.",
    localTask: "Name a leader learners know safely, such as a head teacher, LC leader, church/mosque leader or clan elder, and state one role.",
    valueAction: "Speak about every clan, tribe and family with respect.",
    mathPractice: "Read and write numbers 0-999, draw a simple playground map and measure distance using steps.",
    englishFrame: "A ___ helps people by ___.",
    creativeAction: "Role-play a peaceful community meeting led by a fair leader.",
  },
  "p3-2-1-occupations-importance": {
    explain: "Occupations are useful activities people do to earn money, get food, make things or serve the community.",
    localTask: "List work seen near home or school, such as farming, trading, tailoring, carpentry, cooking, weaving or brick making.",
    valueAction: "Respect honest work and avoid laughing at anyone's occupation.",
    mathPractice: "Group items in 10s and 100s, count from 1000 to 2000 and add simple totals from work activities.",
    englishFrame: "A ___ makes/sells/repairs ___. This work is important because ___.",
    creativeAction: "Role-play a market, garden, workshop or cooking activity safely.",
  },
  "p3-2-2-social-services-importance": {
    explain: "Social services are services that help people live better, such as education, health care, transport, water, communication and security.",
    localTask: "Name the nearest school, health centre, water source, road or security post and say how it helps people.",
    valueAction: "Use public services responsibly and thank people who serve the community.",
    mathPractice: "Read numbers in 10s and 100s, add 3-digit numbers without carrying and classify communication objects.",
    englishFrame: "We need ___ because ___. A person who helps there is a ___.",
    creativeAction: "Make an educative poster about caring for a school, road or water source.",
  },
  "p3-2-3-challenges-social-services-solutions": {
    explain: "Social services can face problems such as long distance, few workers, bad roads, unsafe water, high cost or lack of medicine.",
    localTask: "Choose one service problem and suggest one child-safe solution, such as reporting, cleaning, sharing information or using water safely.",
    valueAction: "Do not spoil community property; help keep shared places clean.",
    mathPractice: "Solve addition word problems, add 2-digit numbers with carrying and draw a simple journey map.",
    englishFrame: "The problem is ___. We can help by ___.",
    creativeAction: "Act a short scene where learners report a broken tap, dirty place or road problem to an adult.",
  },
  "p3-3-1-soil": {
    explain: "Soil is made of rock particles, air, water and dead plant or animal matter. Sand, clay and loam feel different when touched safely.",
    localTask: "Observe dry soil and wet soil in the school compound or garden, then describe colour and texture without putting soil in the mouth.",
    valueAction: "Protect soil by planting grass, avoiding bush burning and not throwing rubbish in gardens.",
    mathPractice: "Sort soil samples, count containers and compare which sample holds water longer.",
    englishFrame: "This soil is ___. It can be used for ___.",
    creativeAction: "Make a simple soil texture chart using safe labelled samples.",
  },
  "p3-3-2-natural-causes-environmental-change": {
    explain: "Some environmental changes happen naturally, such as floods, drought and changes in daily weather.",
    localTask: "Record sunny, cloudy, rainy or windy days for a week and talk about how weather affects people, animals and plants.",
    valueAction: "Listen to adults during heavy rain, flooding, storms or drought warnings.",
    mathPractice: "Make a weather chart, tally days and compare which weather appeared most often.",
    englishFrame: "Today is ___. Yesterday was ___.",
    creativeAction: "Draw a weekly weather chart with symbols for sun, cloud, rain and wind.",
  },
  "p3-3-3-human-activities-environmental-change": {
    explain: "People can change the environment by farming, cutting trees, building, digging, dumping rubbish or planting trees.",
    localTask: "Find one human activity that helps the environment and one that harms it, then explain the difference.",
    valueAction: "Choose helpful actions such as planting trees, sweeping compounds and using rubbish pits safely.",
    mathPractice: "Add two 4-digit numbers without carrying using tree, seedling or rubbish-cleanup examples.",
    englishFrame: "People change the environment when they ___. We should ___.",
    creativeAction: "Make a before-and-after drawing showing a dirty place changed into a clean place.",
  },
  "p3-4-1-air-sun": {
    explain: "Air is around us, occupies space, has weight, can be felt when it moves, and the sun gives light and warmth.",
    localTask: "Use safe activities such as blowing a paper, feeling wind on the skin or watching shadows to observe air and sun.",
    valueAction: "Avoid dusty places, protect the body from too much hot sun and keep classroom air fresh.",
    mathPractice: "Measure shadows, count moving objects and compare short/long or light/heavy examples.",
    englishFrame: "Air can ___. The sun helps us by ___.",
    creativeAction: "Make a paper wind wheel or shadow drawing with teacher guidance.",
  },
  "p3-4-2-water": {
    explain: "Rain forms when water evaporates, cools, condenses into clouds and falls back as rain in the water cycle.",
    localTask: "Name local water sources and talk about rain, clouds, puddles and drying clothes as familiar water-cycle examples.",
    valueAction: "Keep water clean and avoid playing in dirty flood water.",
    mathPractice: "Use subtraction and measurement with cups, bottles or rainfall observations.",
    englishFrame: "Rain comes from ___. Clouds can ___.",
    creativeAction: "Draw the water cycle with arrows for evaporation, clouds and rain.",
  },
  "p3-4-3-managing-water": {
    explain: "Water is important for drinking, cooking, washing, animals, plants and building; it must be collected, stored and protected safely.",
    localTask: "Observe how water is fetched, stored or used at school, then name one way to keep it clean.",
    valueAction: "Close taps, cover water containers and do not waste clean water.",
    mathPractice: "Subtract 3-digit numbers, count containers and compare small/large amounts of water.",
    englishFrame: "We save water by ___. We get water from ___.",
    creativeAction: "Make a class poster: Keep water clean.",
  },
  "p3-5-1-living-things": {
    explain: "Living things grow, feed, breathe, reproduce and respond. Animals, birds, insects and fish can be grouped by where they live.",
    localTask: "Name living things seen at home, school, garden, water source or market, then group them safely.",
    valueAction: "Observe living things without hurting them or destroying their homes.",
    mathPractice: "Classify living things, count legs/wings and make multiplication groups.",
    englishFrame: "A ___ is a living thing. It lives in/on ___.",
    creativeAction: "Make animal habitat cards for land, water, air and home.",
  },
  "p3-5-2-birds-insects": {
    explain: "Birds have feathers and beaks; insects have six legs. Some are useful, some can spread disease or harm crops.",
    localTask: "Identify domestic birds, wild birds, useful insects and harmful insects without touching unknown insects.",
    valueAction: "Care for useful birds and insects, but protect yourself from bites and stings.",
    mathPractice: "Count wings, legs and groups, then solve simple multiplication or sharing examples.",
    englishFrame: "A ___ has ___. It is useful/harmful because ___.",
    creativeAction: "Draw and label a bird and an insect.",
  },
  "p3-5-3-care-insects-birds-animals": {
    explain: "People care for animals and useful insects by providing food, water, shelter, clean places and safe handling.",
    localTask: "Discuss how people care for hens, goats, cows, dogs, cats or bees in the community.",
    valueAction: "Be kind to animals and report sick or dangerous animals to an adult.",
    mathPractice: "Solve word problems in groups of 2, 3 and 10 using eggs, chicks, animals or hives.",
    englishFrame: "We care for ___ by giving it ___.",
    creativeAction: "Role-play feeding animals or cleaning a bird house safely.",
  },
  "p3-6-1-plants-habitat": {
    explain: "Plants grow in different habitats. Maize, yams, sisal, cactus and other plants have features that help them live where they grow.",
    localTask: "Find common plants in the compound, garden or home area and say where each one grows best.",
    valueAction: "Do not uproot useful plants carelessly; water and protect young plants.",
    mathPractice: "Count plants in rows, compare groups and share seedlings equally.",
    englishFrame: "A ___ plant grows in ___. It needs ___.",
    creativeAction: "Draw two plants and their habitats.",
  },
  "p3-6-2-parts-flowering-plant-uses": {
    explain: "A flowering plant has roots, stem, leaves, flowers, fruits and seeds. Each part has a use, such as holding the plant, making food or producing seeds.",
    localTask: "Observe a safe plant and identify roots, stem, leaves, flower, fruit or seed where available.",
    valueAction: "Handle plants gently and wash hands after touching soil or plant parts.",
    mathPractice: "Count leaves, petals, seeds or fruits and compare plant parts.",
    englishFrame: "The ___ helps the plant to ___. People use ___ for ___.",
    creativeAction: "Make a labelled drawing of a flowering plant.",
  },
  "p3-6-3-crop-growing-practices": {
    explain: "Crop growing includes preparing a garden, using tools safely, planting, watering, weeding and protecting crops.",
    localTask: "Name garden tools such as hoe, panga and slasher, then discuss who may use them and why children need adult guidance.",
    valueAction: "Use tools only with adult/teacher guidance and care for school gardens.",
    mathPractice: "Divide up to 300 by 2, 3, 4 or 5 using seeds, rows or groups without remainder.",
    englishFrame: "We plant ___. We care for crops by ___.",
    creativeAction: "Plan a small class garden row on paper.",
  },
  "p3-7-1-saving-resources": {
    explain: "Resources are useful things such as water, time, money, food, fuel, firewood and charcoal. Saving means using them carefully.",
    localTask: "Name one resource used at home or school and one way to avoid wasting it.",
    valueAction: "Switch off, close, cover, keep, share and use only what is needed.",
    mathPractice: "Count coins, minutes, cups of water or bundles of firewood and compare saved amounts.",
    englishFrame: "We save ___ by ___.",
    creativeAction: "Make a saving-resources reminder card.",
  },
  "p3-7-2-spending-resources": {
    explain: "Spending means using money or resources. Wise spending means planning, comparing prices and buying needs before wants.",
    localTask: "Discuss a simple home or class budget: what is needed first, what can wait, and how to compare quality.",
    valueAction: "Do not waste money; ask a trusted adult before buying something important.",
    mathPractice: "Use money examples, compare prices and add or subtract simple costs.",
    englishFrame: "I need ___. It costs ___. I should buy ___ first.",
    creativeAction: "Role-play a shop where learners ask prices politely.",
  },
  "p3-7-3-projects": {
    explain: "Projects are planned activities that help people learn skills, solve problems or earn money, such as bee keeping or a school garden.",
    localTask: "Name one small project in the community and say what people need to start it.",
    valueAction: "Work together, keep records and share duties fairly in a project.",
    mathPractice: "Count project items, share duties and use money examples for buying or selling.",
    englishFrame: "Our project is ___. We need ___. It helps by ___.",
    creativeAction: "Draw a simple project plan with materials, workers and products.",
  },
  "p3-8-1-living-peace": {
    explain: "Living in peace means following rules, respecting others, listening, sharing and solving disagreements without fighting.",
    localTask: "Name one class, home or community rule and explain how it helps people stay safe and peaceful.",
    valueAction: "Use polite words, say sorry, forgive and ask adults for help when conflicts grow.",
    mathPractice: "Use simple word problems about sharing, turns and fair groups.",
    englishFrame: "We keep peace when we ___.",
    creativeAction: "Role-play two children solving a disagreement peacefully.",
  },
  "p3-8-2-child-rights-needs": {
    explain: "Children have rights and needs such as education, identity, food, health care, shelter, play, clothing and language.",
    localTask: "Sort rights and needs into examples learners understand, then name a trusted adult who protects children.",
    valueAction: "Respect other children's needs and report harm or neglect to a trusted adult.",
    mathPractice: "Count and group needs, compare quantities and solve simple practical problems.",
    englishFrame: "A child needs ___. A child has a right to ___.",
    creativeAction: "Make a child-rights and needs poster.",
  },
  "p3-8-3-child-responsibility": {
    explain: "Responsibilities are good duties children can do, such as respecting parents, teachers and elders, keeping order and behaving well.",
    localTask: "List small responsibilities at home and school that are safe for P3 learners.",
    valueAction: "Do duties willingly, tell the truth and care for shared things.",
    mathPractice: "Make a simple duty timetable and count completed tasks.",
    englishFrame: "My responsibility is to ___.",
    creativeAction: "Draw a duty chart for home or class.",
  },
  "p3-9-1-customs": {
    explain: "Customs are ways people do important things such as greeting, naming, dressing, language, music, marriage, burial and child-rearing.",
    localTask: "Share a respectful greeting, song, dress or naming custom from the community without mocking anyone.",
    valueAction: "Respect other people's customs and ask questions politely.",
    mathPractice: "Count items used in a ceremony, compare groups and make simple tables.",
    englishFrame: "In our culture, people ___. We should respect ___.",
    creativeAction: "Perform a respectful greeting, song or dance from a local custom.",
  },
  "p3-9-2-gender": {
    explain: "Gender learning helps children understand boys and girls, fairness, equity, basic needs and fair distribution of work.",
    localTask: "Sort home and school activities that both boys and girls can do, such as sweeping, reading, fetching safe items or leading a group.",
    valueAction: "Treat boys and girls fairly and do not mock someone for helping with a task.",
    mathPractice: "Count duties and share them equally among boys and girls.",
    englishFrame: "Boys and girls can both ___. It is fair to ___.",
    creativeAction: "Role-play a family sharing work fairly.",
  },
  "p3-9-3-promoting-preserving-culture": {
    explain: "People preserve culture by music, dance, drama, documenting stories, sharing roles and planting trees or caring for cultural places.",
    localTask: "Choose one culture-preserving action learners can safely do, such as learning a song, asking elders for a story or planting a tree.",
    valueAction: "Keep good cultural practices and reject harmful or disrespectful behaviour.",
    mathPractice: "Count songs, stories, tree seedlings or group roles and make a simple record.",
    englishFrame: "We preserve culture by ___.",
    creativeAction: "Prepare a short song, dance, drama or story-sharing activity.",
  },
  "p3-10-1-disease-vectors": {
    explain: "Disease vectors are living things that can carry germs from one place or person to another, such as mosquitoes, rats, lice, cockroaches, houseflies, tsetse flies, fleas and bed-bugs.",
    localTask: "Identify places where vectors may hide, such as stagnant water, rubbish, dirty latrines, uncovered food or unclean bedding.",
    valueAction: "Keep homes and classrooms clean and tell an adult about vector problems.",
    mathPractice: "Count vectors in a picture, tally clean-up actions and compare before/after numbers.",
    englishFrame: "A ___ can spread disease. We prevent it by ___.",
    creativeAction: "Draw a clean compound and label places where vectors should be controlled.",
  },
  "p3-10-2-diseases-spread-vectors": {
    explain: "Some diseases are spread by vectors or dirty conditions, including malaria, cholera, typhoid, diarrhoea, dysentery, plague, yellow fever, trachoma and sleeping sickness.",
    localTask: "Match common prevention actions to diseases: sleep under a mosquito net, boil water, wash hands, cover food and keep latrines clean.",
    valueAction: "If someone is sick, tell a trusted adult and seek help from a health worker; do not laugh at sick people.",
    mathPractice: "Make a tally of prevention actions and solve simple comparison questions.",
    englishFrame: "We prevent ___ by ___.",
    creativeAction: "Make a prevention poster about handwashing, safe water or mosquito nets.",
  },
  "p3-10-3-hiv-aids": {
    explain: "HIV is a virus that can make the body weak if a person does not get care. AIDS is a serious stage of HIV sickness. This topic must be taught gently and without stigma.",
    localTask: "Discuss safe care messages: be kind to people who are sick, do not share sharp objects, and ask trusted adults or health workers for help.",
    valueAction: "Show kindness, avoid stigma and never share razor blades, needles or other sharp objects.",
    mathPractice: "Use simple counting or sorting with safe/unsafe health actions, not frightening details.",
    englishFrame: "We care for sick people by ___. We should not share ___.",
    creativeAction: "Make a kindness-and-safety health message card.",
  },
  "p3-11-1-concept-technology": {
    explain: "Technology means using knowledge, materials and tools to solve problems or make useful things from natural and artificial materials.",
    localTask: "Identify natural materials such as banana fibres or palm leaves and artificial materials such as wire, plastic and straws.",
    valueAction: "Use materials safely, avoid sharp items without adult help and do not waste materials.",
    mathPractice: "Count, measure, sort and compare materials before making something.",
    englishFrame: "This material is ___. We can use it to make ___.",
    creativeAction: "Sort safe classroom materials into natural and artificial groups.",
  },
  "p3-11-2-processing-natural-materials": {
    explain: "Processing natural materials means changing materials from plants, swamps, plantations or bushes into useful products such as mats, ropes, juice or salads.",
    localTask: "Name a natural material and describe the safe steps used to make a product from it.",
    valueAction: "Respect people who make things and use natural materials without destroying the environment.",
    mathPractice: "Measure, count, share and record materials used in a small making activity.",
    englishFrame: "We get ___ from ___. We make ___ from it.",
    creativeAction: "Draw the steps from natural material to finished product.",
  },
  "p3-11-3-making-artificial-materials": {
    explain: "Artificial materials can be reused or recycled to make safe things such as toy cars, toy bicycles, flowers, bags or decorations.",
    localTask: "Collect safe clean materials such as bottle tops, boxes or paper, then plan what they can make.",
    valueAction: "Reuse clean materials, avoid dangerous waste and keep the environment tidy.",
    mathPractice: "Count parts, compare sizes and follow simple project steps.",
    englishFrame: "I can make ___ from ___. It is useful for ___. ",
    creativeAction: "Make a simple safe toy or decoration with teacher guidance.",
  },
  "p3-12-1-sources-energy": {
    explain: "Energy helps people cook, move, light homes, run machines and do work. Sources include wind, water, fuel, diesel, petrol, wood, charcoal, paraffin and electricity.",
    localTask: "Name energy sources used at home or school and say one use for each.",
    valueAction: "Use energy carefully and keep away from dangerous sources such as fire, fuel and live electricity.",
    mathPractice: "Add and subtract 4-digit numbers using safe energy examples such as trees planted or units saved.",
    englishFrame: "We use ___ for ___. It gives energy for ___.",
    creativeAction: "Make energy source cards: natural and artificial.",
  },
  "p3-12-2-saving-energy": {
    explain: "Saving energy means using less fuel, firewood, charcoal, paraffin or electricity by switching off, cooking efficiently and planting trees.",
    localTask: "Find one energy-saving action at home or school, such as switching off lights, covering saucepans or using improved stoves with adult help.",
    valueAction: "Switch off appliances, put out fires safely after use and plant trees where adults guide.",
    mathPractice: "Use multiplication/division revision and measure distance for tree planting or energy-saving tasks.",
    englishFrame: "We save energy when we ___.",
    creativeAction: "Make a switch-off or plant-a-tree poster.",
  },
  "p3-12-3-dangers-energy": {
    explain: "Energy can be dangerous when people touch live wires, play with fire, misuse fuel, face strong wind, storms or drought, or ignore safety instructions.",
    localTask: "Name dangers learners should report quickly, such as live wires, fire, storm damage or children playing with sockets.",
    valueAction: "Never touch live wires or sockets, never play with fire and call an adult when there is danger.",
    mathPractice: "Measure length, capacity, weight, time or money using safe revision examples.",
    englishFrame: "Do not ___. Tell an adult when ___.",
    creativeAction: "Make a danger-warning poster with clear safety words.",
  },
};

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

function lowerFirst(value: string): string {
  if (!value) return value;
  return value.charAt(0).toLowerCase() + value.slice(1);
}

function sentenceList(items: string[], limit = 6): string {
  const selected = items.filter(Boolean).slice(0, limit);
  if (selected.length === 0) return "the examples in the official P3 map";
  if (selected.length === 1) return selected[0];
  return `${selected.slice(0, -1).join(", ")} and ${selected[selected.length - 1]}`;
}

function usefulFocus(items: string[], fallback: string): string {
  const useful = items.filter((item) => item && !/^Theme-linked/i.test(item));
  return useful.length > 0 ? sentenceList(useful, 4) : fallback;
}

function safeGuidance(theme: P3ThemeBlueprint, subtheme: P3SubthemeBlueprint): string {
  if (subtheme.id.includes("hiv-aids")) {
    return "This health topic must be taught carefully: be kind to people living with HIV/AIDS, do not share sharp objects, and ask a trusted adult or health worker for help.";
  }
  if (theme.id.includes("health")) {
    return "For health topics, focus on prevention, cleanliness, safe water, covering food and asking trusted adults or health workers when someone is sick.";
  }
  if (subtheme.id.includes("gender")) {
    return "Gender learning should build fairness: boys and girls can learn, help at home and take responsibility without being mocked.";
  }
  if (theme.id.includes("peace")) {
    return "Peace learning should use gentle words, listening, sharing and respect for children, parents, teachers and community members.";
  }
  if (theme.id.includes("energy")) {
    return "Energy learning must be safe: never touch live wires, never play with fire, and report danger to an adult quickly.";
  }
  if (theme.id.includes("technology")) {
    return "Technology activities should use safe materials and simple tools under adult or teacher guidance.";
  }
  if (theme.id.includes("culture")) {
    return "Culture learning should be respectful: do not laugh at another person's language, dress, greeting or custom.";
  }
  if (theme.id.includes("animals")) {
    return "Animal learning should protect learners and living things: observe animals carefully and avoid touching unknown insects or wild animals.";
  }
  if (theme.id.includes("plants")) {
    return "Plant learning should connect to gardens, homes and school compounds, with care for tools and living plants.";
  }
  if (theme.id.includes("environment")) {
    return "Environment learning should connect observation with care: keep places clean, protect water sources and avoid damaging soil, plants or swamps.";
  }
  return "The important idea is to use familiar examples from the learner's own sub-county or division, not to memorise far-away examples only.";
}

function wrongChoices(theme: P3ThemeBlueprint, answer: string): string[] {
  const themeContent = new Set(theme.subthemes.flatMap((subtheme) => subtheme.keyContent).map((item) => item.toLowerCase()));
  const result = GENERAL_DISTRACTORS.filter((item) => item.toLowerCase() !== answer.toLowerCase() && !themeContent.has(item.toLowerCase()));
  while (result.length < 3) result.push("an unrelated answer");
  return result.slice(0, 3);
}

function makeTryThis(theme: P3ThemeBlueprint, question: string, answer: string, explanation: string): NonNullable<SubtopicModule["tryThis"]> {
  return {
    question,
    choices: [answer, ...wrongChoices(theme, answer)],
    correct: 0,
    explanation,
  };
}

function buildCoreModule(theme: P3ThemeBlueprint, subtheme: P3SubthemeBlueprint): SubtopicModule {
  const firstContent = subtheme.keyContent[0] ?? subtheme.title;
  const polish = SUBTHEME_POLISH[subtheme.id];
  return {
    moduleId: `${subtheme.id}-core-content`,
    title: `Understand: ${subtheme.title}`,
    bigIdea: `This part helps a P3 learner understand ${lowerFirst(subtheme.title)} using familiar examples from home, school and the sub-county/division.`,
    imageUrl: subtheme.imageUrl,
    imageCaption: subtheme.imageCaption,
    learnIt: [
      polish?.explain ?? `Learn the main idea in ${lowerFirst(subtheme.title)} using familiar examples.`,
      `NCDC key content for this sub-theme includes ${sentenceList(subtheme.keyContent)}.`,
      polish?.localTask ?? `Start with real examples the learner can see, hear, touch safely, draw, name or talk about in the local area.`,
      safeGuidance(theme, subtheme),
      "In P3, learners may first talk in a familiar/local language, then practise simple English words and sentences from the theme.",
    ],
    workedExample: {
      question: `Name one example from ${lowerFirst(subtheme.title)} and say why it is important.`,
      steps: [
        `Choose one example from the official content, such as ${firstContent}.`,
        "Say what it is or where it is found.",
        "Add one short reason, use or safe action.",
      ],
      answer: polish?.englishFrame ?? `${firstContent} is one example in this sub-theme. A learner should describe it using a familiar local example and one clear sentence.`,
    },
    tryThis: makeTryThis(
      theme,
      `Which one is key content in "${subtheme.title}"?`,
      firstContent,
      `${firstContent} is listed in the official P3 thematic map for this sub-theme.`,
    ),
  };
}

function buildDailyLifeModule(theme: P3ThemeBlueprint, subtheme: P3SubthemeBlueprint): SubtopicModule {
  const value = THEME_VALUES[theme.id] ?? "use respectful words and safe actions";
  const polish = SUBTHEME_POLISH[subtheme.id];
  return {
    moduleId: `${subtheme.id}-daily-life-values`,
    title: "Use it in daily life",
    bigIdea: "The theme should help learners act wisely at home, at school and in the community.",
    imageUrl: subtheme.imageUrl,
    imageCaption: `${subtheme.imageCaption} Daily-life and values practice.`,
    learnIt: [
      polish?.localTask ?? `Look for one safe, familiar example of ${lowerFirst(subtheme.title)} around home, school, a road, a garden, a water source, a market or a community place.`,
      `Talk about it politely with a parent, guardian, teacher or classmate.`,
      `Life skill/value for this theme: ${value}.`,
      `Practical action: ${polish?.valueAction ?? "use respectful words and safe actions"}.`,
      `Creative activity: ${polish?.creativeAction ?? "draw, model, role-play, sing, clap, make a poster or make a simple item that shows what you learnt"}.`,
    ],
    workedExample: {
      question: `What can a learner do after observing ${lowerFirst(subtheme.title)}?`,
      steps: [
        "Observe carefully and safely.",
        "Ask or answer one simple question.",
        "Draw, act, write or say one useful message.",
      ],
      answer: polish?.valueAction ?? "The learner can observe safely, talk politely and make a simple drawing or sentence about the theme.",
    },
    tryThis: makeTryThis(
      theme,
      "Which action shows good P3 theme learning?",
      "observe safely and speak respectfully",
      "Good theme learning connects observation, respectful talk and safe action.",
    ),
  };
}

function buildSkillsModule(theme: P3ThemeBlueprint, subtheme: P3SubthemeBlueprint): SubtopicModule {
  const mathFallback = "counting, sorting, measuring, comparing or solving simple word problems using examples from this sub-theme";
  const literacyFallback = "talking, reading, labelling, drawing and writing short sentences about this sub-theme";
  const englishFallback = "using theme vocabulary in short spoken and written English sentences";
  const mathLine = usefulFocus(subtheme.mathematicsFocus, mathFallback);
  const literacyLine = usefulFocus(subtheme.literacyFocus, literacyFallback);
  const englishLine = usefulFocus(subtheme.englishFocus, englishFallback);
  const answer = subtheme.englishFocus.find((item) => !/^Theme-linked/i.test(item)) ?? englishFallback;
  const polish = SUBTHEME_POLISH[subtheme.id];
  return {
    moduleId: `${subtheme.id}-theme-skills`,
    title: "Theme skills: Numeracy, Literacy and English",
    bigIdea: "P3 thematic learning mixes Mathematics, Literacy and English inside the same familiar theme.",
    imageUrl: subtheme.imageUrl,
    imageCaption: `${subtheme.imageCaption} Numeracy, literacy and English practice.`,
    learnIt: [
      `Mathematics practice: ${polish?.mathPractice ?? mathLine}. Official focus: ${mathLine}.`,
      `Literacy practice: ${literacyLine}.`,
      `English practice: ${englishLine}.`,
      `Sentence frame: ${polish?.englishFrame ?? "I can talk about ___."}`,
      "Write one short English sentence, then explain the same idea in the familiar/local language used by the teacher where appropriate.",
    ],
    workedExample: {
      question: "Write one short English sentence from this sub-theme.",
      steps: [
        "Choose one key word from the sub-theme.",
        "Use a capital letter at the beginning.",
        "End the sentence with a full stop.",
      ],
      answer: `Example: ${polish?.englishFrame ?? `I can talk about ${lowerFirst(subtheme.keyContent[0] ?? subtheme.title)}.`}`,
    },
    tryThis: makeTryThis(
      theme,
      "Which activity belongs to English practice in this sub-theme?",
      answer,
      "English practice uses theme vocabulary and short sentences from the official map.",
    ),
  };
}

function buildSubtopic(theme: P3ThemeBlueprint, subtheme: P3SubthemeBlueprint, index: number): Subtopic {
  return {
    subtopicId: subtheme.id,
    title: `${index + 1}. ${subtheme.title}`,
    modules: [
      buildCoreModule(theme, subtheme),
      buildDailyLifeModule(theme, subtheme),
      buildSkillsModule(theme, subtheme),
    ],
  };
}

function buildQuiz(theme: P3ThemeBlueprint): QuizQuestion[] {
  const [first, second, third] = theme.subthemes;
  const contentQuestion = (subtheme: P3SubthemeBlueprint): QuizQuestion => {
    const answer = subtheme.keyContent[0] ?? subtheme.title;
    return {
      q: `Which one belongs to "${subtheme.title}"?`,
      choices: [answer, ...wrongChoices(theme, answer)],
      correct: 0,
      why: `${answer} is listed in the official P3 map under this sub-theme.`,
    };
  };

  return [
    {
      q: `The P3 theme "${theme.title}" should be studied as:`,
      choices: ["one thematic unit with three sub-themes", "separate P7-only subjects", "a private phone game", "a spelling list only"],
      correct: 0,
      why: "P3 follows the NCDC thematic curriculum, so each theme has three official sub-themes.",
    },
    contentQuestion(first),
    contentQuestion(second),
    contentQuestion(third),
    {
      q: "In P3 thematic learning, Mathematics, Literacy and English are:",
      choices: ["learned through the theme", "removed from the timetable", "only for P7 learners", "not connected to daily life"],
      correct: 0,
      why: "The official P3 thematic matrix connects Mathematics, Literacy and English to each theme.",
    },
    {
      q: "A good P3 learner should use:",
      choices: ["familiar examples and respectful words", "mockery and guessing", "dangerous experiments alone", "only far-away examples"],
      correct: 0,
      why: "P3 learning starts from familiar local examples and respectful language.",
    },
    {
      q: "Which activity can support Creative Performing Arts in a P3 theme?",
      choices: ["drawing, role-playing, singing or making a poster", "tearing books", "hiding from the teacher", "wasting materials"],
      correct: 0,
      why: "Creative activities help young learners show what they understand.",
    },
    {
      q: "Before answering a theme question, a learner should:",
      choices: ["read carefully and think about the theme", "choose without reading", "copy any answer", "ignore the question"],
      correct: 0,
      why: "Careful reading helps the learner connect the question to the right sub-theme.",
    },
  ];
}


function buildLowerPrimaryV4Pilot(theme: P3ThemeBlueprint): LowerPrimaryLesson[] | undefined {
  if (theme.id !== "p3-theme-6-plants") return undefined;
  return [
    {
      id: "p3-v4-parts-flowering-plant-uses",
      classLevel: "P3",
      term: "Term II",
      curriculumMode: "thematic",
      themeTitle: "Living Things: Plants in Our Sub-county/Division",
      subThemeTitle: "Parts of a Flowering Plant and their Uses",
      lessonTitle: "Parts of a Flowering Plant",
      learningArea: "Integrated Theme",
      blocks: [
        {
          kind: "vocabulary",
          title: "New words",
          words: [
            { word: "plant", meaning: "a living thing that grows in soil or water" },
            { word: "root", meaning: "the part of a plant that holds it in the soil and takes in water" },
            { word: "stem", meaning: "the part that holds the plant upright and carries water" },
            { word: "leaf", meaning: "the part that helps the plant make food" },
            { word: "flower", meaning: "the part that can form fruits and seeds" },
            { word: "seed", meaning: "the part that can grow into a new plant" },
          ],
        },
        {
          kind: "story",
          title: "Read and talk",
          text: "Musa and Amina planted beans near their home. After some days, small plants came out of the soil. The plants had roots, stems and leaves. Later, some plants made flowers, fruits and seeds.",
          questions: [
            "What did Musa and Amina plant?",
            "Name two parts of the plant in the story.",
            "What can a seed do?",
          ],
        },
        {
          kind: "definition",
          term: "plant",
          definition: "is a living thing that usually grows in soil or water. Most plants have roots, stems and leaves. Some plants have flowers, fruits and seeds.",
          simpleCheck: "Is a bean plant a plant? Yes, because it grows and has plant parts.",
        },
        {
          kind: "identification",
          title: "Main parts of a flowering plant",
          points: [
            "Roots hold the plant in the soil and take in water.",
            "The stem holds the plant upright and carries water to other parts.",
            "Leaves help the plant make food.",
            "Flowers help the plant form fruits and seeds.",
            "Fruits protect seeds.",
            "Seeds can grow into new plants.",
          ],
        },
        {
          kind: "diagram",
          title: "Look at the plant",
          imageUrl: "/images/p3/p3-6-2-parts-flowering-plant-uses.svg",
          caption: "A P3 study card for roots, stem, leaves, flowers, fruits and seeds.",
          labels: ["roots", "stem", "leaves", "flowers", "fruits", "seeds"],
        },
        {
          kind: "categories",
          title: "Useful plant parts",
          categories: [
            { name: "Food parts", definition: "plant parts people can eat", examples: ["cassava roots", "cabbage leaves", "mango fruits", "bean seeds"] },
            { name: "Medicine parts", definition: "plant parts people may use as medicine with adult guidance", examples: ["aloe vera leaves", "neem leaves"] },
            { name: "Fuel parts", definition: "plant parts people may use for cooking fuel", examples: ["dry wood", "charcoal from trees"], notes: ["Trees should be replaced by planting more trees."] },
          ],
        },
        {
          kind: "examples",
          title: "Plants around us",
          examples: [
            { name: "beans", explanation: "seeds are eaten", localContext: "common in many homes and gardens" },
            { name: "maize", explanation: "seeds are eaten", localContext: "grown in many parts of Uganda" },
            { name: "cassava", explanation: "roots are eaten", localContext: "a common food crop" },
            { name: "mango", explanation: "fruits are eaten", localContext: "often found in compounds and gardens" },
          ],
        },
        {
          kind: "phonics",
          sound: "/pl/",
          words: ["plant", "play", "plate"],
        },
        {
          kind: "numeracy",
          skill: "counting and grouping plant parts",
          examples: [
            "Count 6 leaves on a plant drawing.",
            "Put 12 bean seeds into 3 equal groups.",
            "Compare two plants: which one has more leaves?",
          ],
          exercise: [
            "Draw 8 seeds and circle them in groups of 2.",
            "If one plant has 5 leaves and another has 3 leaves, how many leaves are there altogether?",
          ],
        },
        {
          kind: "activity",
          title: "Activity: draw and label",
          instructions: [
            "Look at a safe plant with your teacher or parent.",
            "Draw the plant in your book.",
            "Label roots, stem, leaves and flower if they are visible.",
            "Write one sentence: A plant is a living thing.",
          ],
          safetyNote: "Do not uproot plants without permission. Wash hands after touching soil.",
        },
        {
          kind: "exercise",
          title: "Exercise",
          questions: [
            { type: "oral", prompt: "What is a plant?", answer: "A plant is a living thing that grows in soil or water." },
            { type: "written", prompt: "Name three parts of a flowering plant.", answer: "Roots, stem, leaves, flowers, fruits or seeds." },
            { type: "matching", prompt: "Match: roots, leaves, seeds — make food, hold plant, grow into new plants." },
            { type: "fill-blank", prompt: "A seed can grow into a new _____.", answer: "plant" },
            { type: "multiple-choice", prompt: "Which plant part helps a plant make food?", choices: ["leaf", "stone", "shoe", "chair"], answer: "leaf" },
          ],
        },
      ],
    },
  ];
}

function buildTopic(theme: P3ThemeBlueprint): Topic {
  const subtopicTitles = theme.subthemes.map((subtheme) => subtheme.title);
  const value = THEME_VALUES[theme.id] ?? "use respectful words and safe actions";
  const lowerPrimaryLessons = buildLowerPrimaryV4Pilot(theme);

  return {
    id: theme.id,
    themeId: "p3-thematic",
    themeName: "Primary Three Thematic Curriculum",
    title: theme.title,
    estMinutes: theme.minutes,
    status: "published",
    reviewStatus: "beta",
    ...(lowerPrimaryLessons ? { contentFormat: "lower-primary-v4" as const, lowerPrimaryLessons: [...lowerPrimaryLessons] } : {}),
    note: {
      intro: `${BETA_NOTICE} ${theme.title} is a ${theme.term} theme. Expected learning outcome: ${theme.outcome}`,
      learningObjectives: [
        `Explain key ideas in ${lowerFirst(subtopicTitles[0])}.`,
        `Explain key ideas in ${lowerFirst(subtopicTitles[1])}.`,
        `Explain key ideas in ${lowerFirst(subtopicTitles[2])}.`,
        "Use theme-linked Mathematics, Literacy and English practice from the official P3 map.",
        "Use safe, respectful examples from the learner's own sub-county/division.",
      ],
      whatYouNeedToKnow: [
        `${subtopicTitles[0]}: ${sentenceList(theme.subthemes[0].keyContent)}.`,
        `${subtopicTitles[1]}: ${sentenceList(theme.subthemes[1].keyContent)}.`,
        `${subtopicTitles[2]}: ${sentenceList(theme.subthemes[2].keyContent)}.`,
        "P3 learners should connect every theme to familiar examples at home, school and in the sub-county/division.",
        "The teacher may use the familiar/local language for learning and then guide learners to practise simple English vocabulary and sentences.",
      ],
      worked: {
        problem: `Write two sentences about ${lowerFirst(theme.title)} using one familiar local example.`,
        steps: [
          "Choose one sub-theme.",
          "Name one familiar example from home, school or the community.",
          "Write two short sentences with capital letters and full stops.",
        ],
        answer: `Example: I can talk about ${lowerFirst(theme.subthemes[0].keyContent[0] ?? theme.title)}. I should ${value}.`,
      },
      commonMistakes: [
        "Treating P3 like separate upper-primary subject routes instead of one connected theme.",
        "Giving answers without using familiar examples from the learner's own area.",
        "Skipping the Mathematics, Literacy and English skills inside the theme.",
        "Using unsafe, disrespectful or mocking examples when the theme needs care and respect.",
      ],
      recap: [
        `${theme.title} has three NCDC sub-themes: ${sentenceList(subtopicTitles, 3)}.`,
        `A key value in this theme is to ${value}.`,
        "Good P3 learning joins local examples, simple skill practice, drawings/role-play and respectful behaviour.",
      ],
    },
    subtopics: theme.subthemes.map((subtheme, index) => buildSubtopic(theme, subtheme, index)),
    quiz: buildQuiz(theme),
  };
}

const P3_THEMATIC_TOPIC_DATA: Topic[] = THEME_BLUEPRINTS.map(buildTopic);

export const P3_THEMATIC_TOPICS: Topic[] = balanceTopicAnswers(P3_THEMATIC_TOPIC_DATA);

export function getP3ThematicTopic(id: string): Topic | undefined {
  return P3_THEMATIC_TOPICS.find((topic) => topic.id === id);
}
