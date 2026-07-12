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


function buildPlantsV4Lessons(theme: P3ThemeBlueprint): LowerPrimaryLesson[] {
  return [
    {
      id: "p3-v4-plants-habitat",
      classLevel: "P3",
      term: "Term II",
      curriculumMode: "thematic",
      themeTitle: "Living Things: Plants in Our Sub-county/Division",
      subThemeTitle: "Plants and their Habitat",
      lessonTitle: "Plants and Their Habitats",
      learningArea: "Integrated Theme",
      blocks: [
        {
          kind: "vocabulary",
          title: "New words",
          words: [
            { word: "plant", meaning: "a living thing that grows in soil or water" },
            { word: "habitat", meaning: "the place where a plant or animal lives and grows" },
            { word: "cactus", meaning: "a plant that can live in dry places" },
            { word: "sisal", meaning: "a plant with strong fibres used to make ropes and mats" },
            { word: "yam", meaning: "a plant with a root or tuber eaten as food" },
          ],
        },
        {
          kind: "story",
          title: "Read and talk",
          text: "In our village, some plants grow in gardens. Maize and beans grow well in soil. Some plants grow near water. A cactus can live in a dry place because it stores water in its thick stem.",
          questions: ["Where do maize and beans grow?", "Which plant can live in a dry place?", "What is a habitat?"],
        },
        {
          kind: "definition",
          term: "plant",
          definition: "is a living thing that grows in soil or water. Plants need air, water, warmth and space to grow well.",
          simpleCheck: "A maize plant is a plant because it grows and needs water, air and warmth.",
        },
        {
          kind: "definition",
          term: "habitat",
          definition: "is the place where a plant or animal lives and grows naturally.",
          simpleCheck: "A garden is a habitat for maize. A swamp can be a habitat for papyrus.",
        },
        {
          kind: "categories",
          title: "Plants by habitat",
          categories: [
            { name: "Garden plants", definition: "plants grown in gardens or farms", examples: ["maize", "beans", "cassava", "yams"] },
            { name: "Water-side plants", definition: "plants that grow in wet places or near water", examples: ["papyrus", "water lilies", "some grasses"] },
            { name: "Dry-place plants", definition: "plants that can live where there is little water", examples: ["cactus", "sisal"] },
          ],
        },
        {
          kind: "examples",
          title: "Plants around us",
          examples: [
            { name: "maize", explanation: "a food plant grown in gardens", localContext: "common in many Ugandan gardens" },
            { name: "cassava", explanation: "a food plant with edible roots", localContext: "common food crop" },
            { name: "sisal", explanation: "a fibre plant", localContext: "used for ropes and mats" },
            { name: "cactus", explanation: "a plant for dry places", localContext: "stores water and has spines" },
          ],
        },
        {
          kind: "diagram",
          title: "Plant habitat card",
          imageUrl: "/images/p3/p3-6-1-plants-habitat.svg",
          caption: "P3 study card for examples of plants and habitats.",
          labels: ["garden", "wet place", "dry place", "food plants", "fibre plants"],
        },
        {
          kind: "numeracy",
          skill: "counting and grouping plants",
          examples: ["Count 10 maize plants in a row.", "Put 12 seeds into groups of 3.", "Compare two plant groups: which has more?"],
          exercise: ["Draw 9 plants and circle them in groups of 3.", "If one row has 5 plants and another row has 4 plants, how many plants are there?"],
        },
        {
          kind: "activity",
          title: "Activity: plant walk",
          instructions: ["Walk around the school compound with your teacher.", "Name three plants you see.", "Say where each plant is growing.", "Draw one plant and write its habitat."],
          safetyNote: "Do not touch thorny plants or unknown plants without teacher guidance.",
        },
        {
          kind: "exercise",
          title: "Exercise",
          questions: [
            { type: "oral", prompt: "What is a habitat?", answer: "A habitat is a place where a plant or animal lives and grows." },
            { type: "written", prompt: "Give two examples of food plants.", answer: "Maize, beans, cassava or yams." },
            { type: "fill-blank", prompt: "A cactus can live in a ____ place.", answer: "dry" },
            { type: "multiple-choice", prompt: "Which plant gives fibre?", choices: ["sisal", "stone", "shoe", "cup"], answer: "sisal" },
          ],
        },
      ],
    },
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
          questions: ["What did Musa and Amina plant?", "Name two parts of the plant in the story.", "What can a seed do?"],
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
          points: ["Roots hold the plant in the soil and take in water.", "The stem holds the plant upright and carries water to other parts.", "Leaves help the plant make food.", "Flowers help the plant form fruits and seeds.", "Fruits protect seeds.", "Seeds can grow into new plants."],
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
        { kind: "phonics", sound: "/pl/", words: ["plant", "play", "plate"] },
        {
          kind: "numeracy",
          skill: "counting and grouping plant parts",
          examples: ["Count 6 leaves on a plant drawing.", "Put 12 bean seeds into 3 equal groups.", "Compare two plants: which one has more leaves?"],
          exercise: ["Draw 8 seeds and circle them in groups of 2.", "If one plant has 5 leaves and another has 3 leaves, how many leaves are there altogether?"],
        },
        {
          kind: "activity",
          title: "Activity: draw and label",
          instructions: ["Look at a safe plant with your teacher or parent.", "Draw the plant in your book.", "Label roots, stem, leaves and flower if they are visible.", "Write one sentence: A plant is a living thing."],
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
    {
      id: "p3-v4-crop-growing-practices",
      classLevel: "P3",
      term: "Term II",
      curriculumMode: "thematic",
      themeTitle: "Living Things: Plants in Our Sub-county/Division",
      subThemeTitle: "Crop-growing Practices",
      lessonTitle: "Crop-growing Practices",
      learningArea: "Integrated Theme",
      blocks: [
        {
          kind: "vocabulary",
          title: "New words",
          words: [
            { word: "crop", meaning: "a plant grown by people for food or use" },
            { word: "garden", meaning: "a place where crops are grown" },
            { word: "hoe", meaning: "a tool used for digging soil" },
            { word: "planting", meaning: "putting seeds or seedlings into soil" },
            { word: "weeding", meaning: "removing unwanted plants from a garden" },
          ],
        },
        {
          kind: "story",
          title: "Read and talk",
          text: "Kato helped his mother in the garden. They cleared weeds, made small holes and planted maize seeds. After planting, they watered the seeds and kept goats away from the garden.",
          questions: ["What did Kato plant?", "Why did they remove weeds?", "Why should goats be kept away from the garden?"],
        },
        {
          kind: "definition",
          term: "crop",
          definition: "is a plant grown by people for food, medicine, fibre, fuel or income.",
          simpleCheck: "Maize is a crop because people grow it for food.",
        },
        {
          kind: "identification",
          title: "Steps in growing crops",
          points: ["Choose good seeds or seedlings.", "Prepare the garden by clearing weeds and loosening soil.", "Plant seeds or seedlings in the soil.", "Water the crops where needed.", "Remove weeds as the crops grow.", "Protect crops from animals, pests and diseases."],
        },
        {
          kind: "categories",
          title: "Common garden tools",
          categories: [
            { name: "Hoe", definition: "a tool used for digging and loosening soil", examples: ["digging a garden", "making planting holes"] },
            { name: "Panga", definition: "a sharp tool used for cutting", examples: ["cutting small branches"], notes: ["Children should not use a panga without adult guidance."] },
            { name: "Slasher", definition: "a tool used for cutting grass", examples: ["clearing grass around a garden"], notes: ["Use only with adult guidance." ] },
          ],
        },
        {
          kind: "diagram",
          title: "Crop-growing card",
          imageUrl: "/images/p3/p3-6-3-crop-growing-practices.svg",
          caption: "A P3 study card for garden tools, planting and crop care.",
          labels: ["garden", "hoe", "planting", "weeding", "watering", "crop care"],
        },
        {
          kind: "examples",
          title: "Examples of crops",
          examples: [
            { name: "maize", explanation: "grown for food", localContext: "common in many gardens" },
            { name: "beans", explanation: "grown for food", localContext: "often planted with maize" },
            { name: "cassava", explanation: "grown for roots", localContext: "important food crop" },
            { name: "sisal", explanation: "grown for fibre", localContext: "used to make ropes and mats" },
          ],
        },
        {
          kind: "numeracy",
          skill: "sharing seeds equally",
          examples: ["Share 20 seeds among 4 holes.", "Count 5 rows of crops.", "Divide 30 seedlings into 5 equal groups."],
          exercise: ["If 12 seeds are shared into 3 holes equally, how many seeds go in each hole?", "Draw 15 seedlings in 5 equal groups."],
        },
        {
          kind: "activity",
          title: "Activity: plan a small garden",
          instructions: ["Draw a small garden bed.", "Show where you will plant seeds.", "Draw a path for walking.", "Write two ways to care for crops."],
          safetyNote: "Sharp garden tools should be used only with adult or teacher guidance.",
        },
        {
          kind: "exercise",
          title: "Exercise",
          questions: [
            { type: "oral", prompt: "What is a crop?", answer: "A crop is a plant grown by people for food or use." },
            { type: "written", prompt: "Name two garden tools.", answer: "Hoe, panga or slasher." },
            { type: "fill-blank", prompt: "Removing unwanted plants from a garden is called _____.", answer: "weeding" },
            { type: "multiple-choice", prompt: "Which crop is grown for food?", choices: ["maize", "stone", "shoe", "chair"], answer: "maize" },
            { type: "written", prompt: "Write one way to care for crops.", answer: "Watering, weeding, protecting from animals or controlling pests." },
          ],
        },
      ],
    },
  ];
}

function buildTheme1SubcountyV4Lessons(theme: P3ThemeBlueprint): LowerPrimaryLesson[] {
  return [
    {
      id: "p3-v4-name-location-subcounty-division",
      classLevel: "P3",
      term: "Term I",
      curriculumMode: "thematic",
      themeTitle: "Our Sub-county/Division",
      subThemeTitle: "Name and Location of our Sub-county/Division",
      lessonTitle: "Name and Location of Our Sub-county/Division",
      learningArea: "Integrated Theme",
      blocks: [
        {
          kind: "vocabulary",
          title: "New words",
          words: [
            { word: "sub-county", meaning: "a local area made up of parishes and villages" },
            { word: "division", meaning: "a local area in a town or city" },
            { word: "parish", meaning: "a smaller local area inside a sub-county or division" },
            { word: "map", meaning: "a drawing of a place as seen from above" },
            { word: "picture", meaning: "a drawing or photo showing how something looks" },
            { word: "compass", meaning: "a tool or sign that helps us know directions" },
          ],
        },
        {
          kind: "story",
          title: "Read and talk",
          text: "Nambi walks to school with her brother. Their school is near the trading centre. A health centre is west of the school, and a market is east of the school. Their teacher asks them to draw a simple map of the places around the school.",
          questions: [
            "What place is near Nambi's school?",
            "Which place is east of the school?",
            "What did the teacher ask the children to draw?",
          ],
        },
        {
          kind: "definition",
          term: "sub-county or division",
          definition: "is a local area where people live, go to school, work, worship, trade and get services. A sub-county is common in rural areas. A division is common in towns or cities.",
          simpleCheck: "A village can be inside a parish, and a parish can be inside a sub-county or division.",
        },
        {
          kind: "definition",
          term: "map",
          definition: "is a drawing of a place as seen from above. It can show roads, schools, rivers, markets, churches, mosques, homes and other places.",
          simpleCheck: "A map of a school compound can show classrooms, paths, a gate and a playground.",
        },
        {
          kind: "categories",
          title: "Map and picture",
          categories: [
            { name: "Map", definition: "shows a place from above and uses symbols", examples: ["map of a classroom", "map of a school", "map of a parish"], notes: ["A map should have a title and may have a key."] },
            { name: "Picture", definition: "shows how a person, place or thing looks from the front or side", examples: ["picture of a classroom", "picture of a market", "picture of a hill"] },
            { name: "Map key", definition: "explains the symbols used on a map", examples: ["a cross for a church", "a blue line for a river", "a square for a school"] },
          ],
        },
        {
          kind: "diagram",
          title: "Map and compass guide",
          imageUrl: "/images/p3/p3-1-1-name-location-subcounty-division.svg",
          caption: "P3 study card for map, picture, compass directions and neighbouring parishes.",
          labels: ["map", "picture", "key", "North", "East", "South", "West"],
        },
        {
          kind: "identification",
          title: "Compass directions",
          points: [
            "North, East, South and West are the four main compass directions.",
            "The sun rises in the East.",
            "The sun sets in the West.",
            "A learner can say: The market is east of the school.",
            "A learner can say: The health centre is west of the school.",
          ],
        },
        {
          kind: "examples",
          title: "Location words to use",
          examples: [
            { name: "near", explanation: "close to something", localContext: "The shop is near our school." },
            { name: "opposite", explanation: "on the other side facing something", localContext: "The clinic is opposite the market." },
            { name: "behind", explanation: "at the back of something", localContext: "The kitchen is behind the classroom." },
            { name: "between", explanation: "in the middle of two things", localContext: "The road is between the school and the garden." },
          ],
        },
        {
          kind: "numeracy",
          skill: "counting, sets and distance",
          examples: [
            "Count 5 places on a simple map.",
            "Make a set of schools and a set of markets shown on a map.",
            "Estimate distance using steps from the classroom to the gate.",
          ],
          exercise: [
            "Draw 4 places around your school and count them.",
            "Walk 10 safe steps with your teacher and say whether the place is near or far.",
          ],
        },
        {
          kind: "activity",
          title: "Activity: draw a simple map",
          instructions: [
            "Draw your school or home in the middle of the page.",
            "Draw one road or path.",
            "Add two nearby places, such as a shop, church, mosque, market, water source or health centre.",
            "Write one sentence using a direction word.",
          ],
          safetyNote: "Only move around with a teacher, parent or trusted adult.",
        },
        {
          kind: "exercise",
          title: "Exercise",
          questions: [
            { type: "oral", prompt: "What is a map?", answer: "A drawing of a place as seen from above." },
            { type: "written", prompt: "Write the four main compass directions.", answer: "North, East, South and West." },
            { type: "fill-blank", prompt: "The sun rises in the _____.", answer: "East" },
            { type: "multiple-choice", prompt: "Which one explains symbols on a map?", choices: ["key", "shoe", "plate", "song"], answer: "key" },
            { type: "written", prompt: "Write one sentence about where your school is found.", answer: "Example: Our school is near the road." },
          ],
        },
      ],
    },
    {
      id: "p3-v4-physical-features-subcounty-division",
      classLevel: "P3",
      term: "Term I",
      curriculumMode: "thematic",
      themeTitle: "Our Sub-county/Division",
      subThemeTitle: "Physical Features of our Sub-county/Division",
      lessonTitle: "Physical Features Around Us",
      learningArea: "Integrated Theme",
      blocks: [
        {
          kind: "vocabulary",
          title: "New words",
          words: [
            { word: "physical feature", meaning: "a natural thing found on the earth's surface" },
            { word: "hill", meaning: "raised land, but not as high as a mountain" },
            { word: "valley", meaning: "low land between hills or mountains" },
            { word: "river", meaning: "water that flows in a channel" },
            { word: "swamp", meaning: "a wet place with water-loving plants" },
            { word: "lake", meaning: "a large body of water surrounded by land" },
          ],
        },
        {
          kind: "story",
          title: "Read and talk",
          text: "Ali lives near a hill. When it rains, water flows down into a small valley. A river passes near the gardens, and people fetch water from a protected spring. Their teacher says these are natural features of the area.",
          questions: ["Which physical feature is near Ali's home?", "Where does water flow after rain?", "Name one water source in the story."],
        },
        {
          kind: "definition",
          term: "physical feature",
          definition: "is a natural thing found in an area. Physical features are not made by people.",
          simpleCheck: "A river is a physical feature. A classroom is not a physical feature because people build it.",
        },
        {
          kind: "categories",
          title: "Types of physical features",
          categories: [
            { name: "Raised land", definition: "land that is higher than the nearby land", examples: ["hill", "mountain"] },
            { name: "Low land", definition: "land that is lower than the nearby land", examples: ["valley", "plain"] },
            { name: "Water features", definition: "natural places with water", examples: ["river", "lake", "swamp", "pond"] },
          ],
        },
        {
          kind: "diagram",
          title: "Physical features card",
          imageUrl: "/images/p3/p3-1-2-physical-features-subcounty-division.svg",
          caption: "P3 study card for hills, valleys, lakes, rivers, swamps, ponds and mountains.",
          labels: ["hill", "valley", "river", "lake", "swamp", "mountain"],
        },
        {
          kind: "examples",
          title: "Why physical features are useful",
          examples: [
            { name: "river", explanation: "may provide water, fish and sometimes transport" },
            { name: "hill", explanation: "may help people see far and may attract visitors" },
            { name: "swamp", explanation: "stores water and is home to some plants and animals" },
            { name: "valley", explanation: "may have fertile soil for farming" },
          ],
        },
        {
          kind: "identification",
          title: "How to care for physical features",
          points: [
            "Do not throw rubbish in rivers, lakes or swamps.",
            "Do not cut all plants near water sources.",
            "Use water sources carefully and keep them clean.",
            "Report dangerous places like deep water or steep slopes to an adult.",
          ],
        },
        {
          kind: "numeracy",
          skill: "counting and comparing features",
          examples: ["Count physical features on a picture or map.", "Compare a set of water features and a set of land features.", "Count in 2s, 5s and 10s using stones, leaves or sticks."],
          exercise: ["Draw 3 physical features and count them.", "Make two groups: water features and land features."],
        },
        {
          kind: "activity",
          title: "Activity: feature sentences",
          instructions: [
            "Name one physical feature in your area.",
            "Say where it is found using near, behind, east, west, north or south.",
            "Draw it and write one sentence about its use.",
          ],
          safetyNote: "Do not go to rivers, swamps, ponds or steep hills without an adult.",
        },
        {
          kind: "exercise",
          title: "Exercise",
          questions: [
            { type: "oral", prompt: "What is a physical feature?", answer: "A natural thing found in an area." },
            { type: "written", prompt: "Name three water features.", answer: "River, lake, swamp or pond." },
            { type: "fill-blank", prompt: "A valley is low land between _____.", answer: "hills or mountains" },
            { type: "multiple-choice", prompt: "Which one is a physical feature?", choices: ["river", "desk", "cup", "shoe"], answer: "river" },
            { type: "written", prompt: "Give one way to care for a river.", answer: "Do not throw rubbish in it." },
          ],
        },
      ],
    },
    {
      id: "p3-v4-people-subcounty-division",
      classLevel: "P3",
      term: "Term I",
      curriculumMode: "thematic",
      themeTitle: "Our Sub-county/Division",
      subThemeTitle: "People in our Sub-county/Division",
      lessonTitle: "People and Leaders in Our Area",
      learningArea: "Integrated Theme",
      blocks: [
        {
          kind: "vocabulary",
          title: "New words",
          words: [
            { word: "family", meaning: "people related to one another" },
            { word: "clan", meaning: "a group of families with a common ancestor or name" },
            { word: "tribe", meaning: "a group of people with shared language or culture" },
            { word: "leader", meaning: "a person who guides or serves others" },
            { word: "LC leader", meaning: "a local council leader who helps guide a community" },
            { word: "dispute", meaning: "a disagreement between people" },
          ],
        },
        {
          kind: "story",
          title: "Read and talk",
          text: "At school, children come from different families, clans and tribes. Their teacher tells them to respect one another. When two children disagree, the class leader helps them speak calmly before the teacher guides them.",
          questions: ["Why should children respect one another?", "Who helps when children disagree?", "Name one group people can belong to."],
        },
        {
          kind: "definition",
          term: "people in a sub-county or division",
          definition: "are the families, clans, tribes, leaders, workers, children and other community members who live or work in that area.",
          simpleCheck: "Parents, teachers, pupils, religious leaders and local leaders are people in a community.",
        },
        {
          kind: "categories",
          title: "Groups of people",
          categories: [
            { name: "Families", definition: "people related to one another", examples: ["father", "mother", "children", "grandparents"] },
            { name: "Clans", definition: "groups of families with shared origin or clan name", examples: ["clan elders", "clan members"] },
            { name: "Tribes / communities", definition: "groups of people with shared language, culture or origin", examples: ["Baganda", "Basoga", "Banyankole", "Acholi"], notes: ["Use local examples respectfully and avoid mocking any group."] },
          ],
        },
        {
          kind: "diagram",
          title: "People and leaders card",
          imageUrl: "/images/p3/p3-1-3-people-subcounty-division.svg",
          caption: "P3 study card for tribes, clans, leaders and roles.",
          labels: ["families", "clans", "tribes", "LC leaders", "cultural leaders", "respect"],
        },
        {
          kind: "identification",
          title: "Types of leaders",
          points: [
            "Family leaders guide children and family members.",
            "School leaders include head teachers, teachers, prefects and class leaders.",
            "Local council leaders help organise community work and settle some problems.",
            "Religious leaders guide people in worship and good behaviour.",
            "Cultural leaders help guide people in culture and customs.",
          ],
        },
        {
          kind: "examples",
          title: "Roles of leaders",
          examples: [
            { name: "guide people", explanation: "leaders help people know what to do" },
            { name: "settle disputes", explanation: "leaders help people solve disagreements peacefully" },
            { name: "plan development", explanation: "leaders help people plan better roads, water, schools or health services" },
            { name: "counsel people", explanation: "leaders advise people to make good choices" },
          ],
        },
        {
          kind: "numeracy",
          skill: "numbers, maps and distance",
          examples: ["Read and write numbers from 0 to 999.", "Draw a simple map of the school playground.", "Use steps to compare near and far places."],
          exercise: ["Count 20 pupils and group them in 5s.", "Draw a playground and show where the class leader stands."],
        },
        {
          kind: "activity",
          title: "Activity: role-play peaceful leadership",
          instructions: [
            "Choose one learner to act as a class leader.",
            "Two learners act a small disagreement, such as sharing a book.",
            "The class leader asks each learner to speak calmly.",
            "The class says one respectful solution.",
          ],
          safetyNote: "Do not use real insults or fighting in the role-play.",
        },
        {
          kind: "exercise",
          title: "Exercise",
          questions: [
            { type: "oral", prompt: "Why should we respect people from other clans or tribes?", answer: "Respect helps people live peacefully." },
            { type: "written", prompt: "Name two types of leaders in a community.", answer: "Family, school, religious, cultural or LC leaders." },
            { type: "fill-blank", prompt: "A leader helps people to settle _____.", answer: "disputes" },
            { type: "multiple-choice", prompt: "Which is a good quality of a leader?", choices: ["honesty", "greed", "laziness", "cruelty"], answer: "honesty" },
            { type: "written", prompt: "Write one role of a leader.", answer: "Guiding people, settling disputes, counselling or planning development." },
          ],
        },
      ],
    },
  ];
}


function buildTheme5AnimalsV4Lessons(theme: P3ThemeBlueprint): LowerPrimaryLesson[] {
  return [
    {
      id: "p3-v4-living-things-animals",
      classLevel: "P3",
      term: "Term II",
      curriculumMode: "thematic",
      themeTitle: "Living Things: Animals in Our Sub-county/Division",
      subThemeTitle: "Living Things",
      lessonTitle: "Living Things",
      learningArea: "Integrated Theme",
      blocks: [
        {
          kind: "vocabulary",
          title: "New words",
          words: [
            { word: "living thing", meaning: "something that grows, feeds, breathes and reproduces" },
            { word: "animal", meaning: "a living thing that feeds and can usually move from place to place" },
            { word: "insect", meaning: "a small animal with six legs" },
            { word: "bird", meaning: "an animal with feathers, wings and a beak" },
            { word: "fish", meaning: "an animal that lives in water and breathes with gills" },
            { word: "habitat", meaning: "the place where a living thing lives" },
          ],
        },
        {
          kind: "story",
          title: "Read and talk",
          text: "At break time, Laker saw hens near the kitchen, butterflies near flowers and fish in a pond. Her teacher said all of them are living things, but they live in different places.",
          questions: ["Which living things did Laker see?", "Where did she see the fish?", "Why are animals called living things?"],
        },
        {
          kind: "definition",
          term: "living thing",
          definition: "is something that has life. Living things grow, feed, breathe, reproduce and respond to their surroundings.",
          simpleCheck: "A goat is a living thing. A stone is not a living thing.",
        },
        {
          kind: "categories",
          title: "Types of living things in this lesson",
          categories: [
            { name: "Animals", definition: "living things that feed and usually move", examples: ["goat", "cow", "dog", "cat"] },
            { name: "Birds", definition: "animals with feathers, wings and beaks", examples: ["hen", "duck", "turkey", "crested crane"] },
            { name: "Insects", definition: "small animals with six legs", examples: ["bee", "butterfly", "housefly", "mosquito"] },
            { name: "Fish", definition: "animals that live in water and breathe with gills", examples: ["tilapia", "mudfish", "Nile perch"] },
          ],
        },
        {
          kind: "diagram",
          title: "Living things card",
          imageUrl: "/images/p3/p3-5-1-living-things.svg",
          caption: "P3 study card for animals, insects, birds and fish.",
          labels: ["animals", "birds", "insects", "fish", "habitat"],
        },
        {
          kind: "examples",
          title: "Habitats of animals",
          examples: [
            { name: "land", explanation: "where goats, cows, dogs and cats live" },
            { name: "water", explanation: "where fish live" },
            { name: "air / trees", explanation: "where many birds fly or build nests" },
            { name: "flowers / soil", explanation: "where many insects find food or shelter" },
          ],
        },
        {
          kind: "numeracy",
          skill: "classification and multiplication groups",
          examples: ["Count 4 hens and 3 ducks.", "Group 12 insects into groups of 3.", "Compare animals that live on land and animals that live in water."],
          exercise: ["Draw 8 insects and group them in 2s.", "If 3 birds have 2 legs each, how many legs do they have altogether?"],
        },
        {
          kind: "activity",
          title: "Activity: sort animal cards",
          instructions: ["Draw or name 8 living things.", "Sort them into animals, birds, insects and fish.", "Say where each one lives."],
          safetyNote: "Do not touch unknown insects or wild animals. Observe them from a safe distance.",
        },
        {
          kind: "exercise",
          title: "Exercise",
          questions: [
            { type: "oral", prompt: "What is a living thing?", answer: "Something that has life." },
            { type: "written", prompt: "Name two insects.", answer: "Bee, butterfly, mosquito, housefly or any correct insect." },
            { type: "fill-blank", prompt: "A fish lives in _____.", answer: "water" },
            { type: "multiple-choice", prompt: "Which one is a bird?", choices: ["hen", "stone", "chair", "cup"], answer: "hen" },
          ],
        },
      ],
    },
    {
      id: "p3-v4-birds-insects",
      classLevel: "P3",
      term: "Term II",
      curriculumMode: "thematic",
      themeTitle: "Living Things: Animals in Our Sub-county/Division",
      subThemeTitle: "Birds and Insects",
      lessonTitle: "Birds and Insects",
      learningArea: "Integrated Theme",
      blocks: [
        {
          kind: "vocabulary",
          title: "New words",
          words: [
            { word: "domestic bird", meaning: "a bird kept by people at home or on a farm" },
            { word: "wild bird", meaning: "a bird that lives on its own in the environment" },
            { word: "feather", meaning: "the soft covering on a bird's body" },
            { word: "beak", meaning: "the hard mouth part of a bird" },
            { word: "wing", meaning: "the body part many birds use for flying" },
            { word: "insect", meaning: "a small animal with six legs" },
          ],
        },
        {
          kind: "story",
          title: "Read and talk",
          text: "Mirembe feeds hens at home. On the way to school she sees a crested crane in a wetland and bees visiting flowers. Her teacher says some birds are domestic, some are wild, and many insects are useful.",
          questions: ["Which domestic bird does Mirembe feed?", "Which wild bird did she see?", "Why can bees be useful?"],
        },
        {
          kind: "definition",
          term: "bird",
          definition: "is an animal with feathers, a beak and wings. Most birds lay eggs.",
          simpleCheck: "A hen is a bird because it has feathers, a beak and wings.",
        },
        {
          kind: "definition",
          term: "insect",
          definition: "is a small animal with six legs. Many insects have three body parts and some have wings.",
          simpleCheck: "A butterfly is an insect because it has six legs.",
        },
        {
          kind: "categories",
          title: "Types and examples",
          categories: [
            { name: "Domestic birds", definition: "birds kept by people", examples: ["hen", "duck", "turkey", "pigeon"] },
            { name: "Wild birds", definition: "birds that live on their own", examples: ["crested crane", "weaver bird", "eagle", "owl"] },
            { name: "Useful insects", definition: "insects that help people or plants", examples: ["bee", "butterfly", "silkworm"] },
            { name: "Harmful insects", definition: "insects that bite, spread disease or damage crops", examples: ["mosquito", "housefly", "termite", "weevil"] },
          ],
        },
        {
          kind: "diagram",
          title: "Birds and insects card",
          imageUrl: "/images/p3/p3-5-2-birds-insects.svg",
          caption: "P3 study card for domestic birds, wild birds, insects and the crested crane.",
          labels: ["domestic birds", "wild birds", "crested crane", "insects", "uses", "dangers"],
        },
        {
          kind: "identification",
          title: "Why birds and insects are important",
          points: ["Hens and ducks give eggs and meat.", "Bird droppings can add manure to soil.", "Bees make honey and help pollinate flowers.", "Butterflies help pollinate flowers.", "The crested crane is Uganda's national bird and should be protected."],
        },
        {
          kind: "numeracy",
          skill: "multiplication and grouping",
          examples: ["Count legs of birds in 2s.", "Count insect legs in 6s.", "Group eggs in trays or baskets."],
          exercise: ["If 4 hens have 2 legs each, how many legs are there?", "If 3 insects have 6 legs each, how many legs are there?"],
        },
        {
          kind: "activity",
          title: "Activity: compare a bird and an insect",
          instructions: ["Draw one bird and one insect.", "Label wings and legs where you can.", "Write one use of each."],
          safetyNote: "Do not disturb nests or touch bees, wasps or unknown insects.",
        },
        {
          kind: "exercise",
          title: "Exercise",
          questions: [
            { type: "oral", prompt: "What is a bird?", answer: "An animal with feathers, a beak and wings." },
            { type: "written", prompt: "Name two domestic birds.", answer: "Hen, duck, turkey or pigeon." },
            { type: "fill-blank", prompt: "An insect has _____ legs.", answer: "six" },
            { type: "multiple-choice", prompt: "Which insect makes honey?", choices: ["bee", "goat", "hen", "fish"], answer: "bee" },
          ],
        },
      ],
    },
    {
      id: "p3-v4-care-insects-birds-animals",
      classLevel: "P3",
      term: "Term II",
      curriculumMode: "thematic",
      themeTitle: "Living Things: Animals in Our Sub-county/Division",
      subThemeTitle: "Care for Insects, Birds and Animals",
      lessonTitle: "Care for Animals, Birds and Useful Insects",
      learningArea: "Integrated Theme",
      blocks: [
        {
          kind: "vocabulary",
          title: "New words",
          words: [
            { word: "care", meaning: "to look after someone or something well" },
            { word: "shelter", meaning: "a safe place to stay" },
            { word: "hive", meaning: "a home for bees" },
            { word: "feed", meaning: "food given to an animal or bird" },
            { word: "clean water", meaning: "water safe for animals or birds to drink" },
            { word: "vet", meaning: "an animal health worker" },
          ],
        },
        {
          kind: "story",
          title: "Read and talk",
          text: "Okello keeps hens at home. He gives them clean water, feeds them and sweeps their house. His uncle keeps bees in a hive away from the path so children do not disturb them.",
          questions: ["How does Okello care for hens?", "Where are the bees kept?", "Why should a hive be away from the path?"],
        },
        {
          kind: "definition",
          term: "care for animals",
          definition: "means giving animals and birds the things they need to live safely and stay healthy.",
          simpleCheck: "Giving clean water to hens is one way of caring for them.",
        },
        {
          kind: "categories",
          title: "Ways to care",
          categories: [
            { name: "Food and water", definition: "animals and birds need enough food and clean water", examples: ["feeds for hens", "grass for goats", "clean water in a container"] },
            { name: "Shelter", definition: "a safe place that protects animals from rain, sun, thieves and predators", examples: ["poultry house", "goat shed", "dog kennel"] },
            { name: "Health care", definition: "keeping animals clean and calling adults or vets when they are sick", examples: ["cleaning houses", "separating sick birds", "vaccination by trained people"] },
            { name: "Care for bees", definition: "keeping bees safely in a hive and not disturbing them", examples: ["hive", "protective clothing", "adult beekeeper"] },
          ],
        },
        {
          kind: "diagram",
          title: "Animal care card",
          imageUrl: "/images/p3/p3-5-3-care-insects-birds-animals.svg",
          caption: "P3 study card for caring for bees, birds and animals safely.",
          labels: ["food", "water", "shelter", "cleanliness", "hive", "adult help"],
        },
        {
          kind: "identification",
          title: "Safe animal care rules",
          points: ["Do not beat animals.", "Do not touch unknown insects or wild animals.", "Do not disturb bees or their hive.", "Tell an adult when an animal is sick or dangerous.", "Wash hands after cleaning animal places."],
        },
        {
          kind: "numeracy",
          skill: "word problems in 2s, 3s and 10s",
          examples: ["Count eggs in 2s.", "Group chicks in 3s.", "Count bundles of grass in 10s."],
          exercise: ["If 5 hens lay 2 eggs each, how many eggs are there?", "If 3 goats need 10 bundles of grass each, how many bundles are needed?"],
        },
        {
          kind: "activity",
          title: "Activity: animal care chart",
          instructions: ["Choose one animal or bird kept at home.", "Draw it.", "Write or say three ways to care for it.", "Share your chart with a friend."],
          safetyNote: "Do not go near dangerous animals or bee hives without an adult.",
        },
        {
          kind: "exercise",
          title: "Exercise",
          questions: [
            { type: "oral", prompt: "Give one way to care for hens.", answer: "Give food, clean water, shelter or clean their house." },
            { type: "written", prompt: "What is a hive?", answer: "A home for bees." },
            { type: "fill-blank", prompt: "A sick animal should be reported to an _____.", answer: "adult" },
            { type: "multiple-choice", prompt: "Which action is safe?", choices: ["asking an adult for help", "disturbing bees", "beating animals", "touching unknown insects"], answer: "asking an adult for help" },
          ],
        },
      ],
    },
  ];
}

function buildTheme10HealthV4Lessons(theme: P3ThemeBlueprint): LowerPrimaryLesson[] {
  return [
    {
      id: "p3-v4-disease-vectors",
      classLevel: "P3",
      term: "Term III",
      curriculumMode: "thematic",
      themeTitle: "Health in Our Sub-county/Division",
      subThemeTitle: "Disease Vectors",
      lessonTitle: "Disease Vectors",
      learningArea: "Integrated Theme",
      blocks: [
        {
          kind: "vocabulary",
          title: "New words",
          words: [
            { word: "vector", meaning: "a living thing that can carry germs from one place to another" },
            { word: "germ", meaning: "a tiny living thing that can cause disease" },
            { word: "mosquito", meaning: "a small flying insect that can spread malaria" },
            { word: "housefly", meaning: "a fly that can carry germs to food" },
            { word: "rat", meaning: "a small animal that can spoil food and spread disease" },
            { word: "cockroach", meaning: "an insect often found in dirty places" },
          ],
        },
        {
          kind: "story",
          title: "Read and talk",
          text: "Amina saw stagnant water behind the latrine. Her teacher told the class that mosquitoes can breed in stagnant water. The class poured away the water and cleaned the compound with adult guidance.",
          questions: ["Where did Amina see stagnant water?", "Which vector can breed in stagnant water?", "What did the class do?"],
        },
        {
          kind: "definition",
          term: "disease vector",
          definition: "is a living thing that can carry germs and spread disease from one person, animal or place to another.",
          simpleCheck: "A mosquito can be a disease vector because it can spread malaria.",
        },
        {
          kind: "categories",
          title: "Common disease vectors",
          categories: [
            { name: "Mosquito", definition: "a small flying insect that can spread malaria and other diseases", examples: ["breeds in stagnant water", "bites people"] },
            { name: "Housefly", definition: "a fly that can carry germs from dirty places to food", examples: ["latrine", "rubbish pit", "uncovered food"] },
            { name: "Rat", definition: "an animal that can spoil food and spread some diseases", examples: ["dirty stores", "uncovered food", "rubbish places"] },
            { name: "Cockroach / louse / flea / bed-bug", definition: "small pests that can live in dirty places, clothes, bedding or houses", examples: ["cockroach", "louse", "flea", "bed-bug"] },
          ],
        },
        {
          kind: "diagram",
          title: "Disease vectors card",
          imageUrl: "/images/p3/p3-10-1-disease-vectors.svg",
          caption: "P3 study card for mosquitoes, rats, lice, cockroaches, houseflies, tsetse flies, fleas and bed-bugs.",
          labels: ["mosquito", "rat", "louse", "cockroach", "housefly", "tsetse fly"],
        },
        {
          kind: "identification",
          title: "Where vectors may hide or breed",
          points: ["Mosquitoes may breed in stagnant water.", "Houseflies may move from latrines or rubbish to food.", "Rats may hide in dirty stores or rubbish places.", "Lice may spread where hair, clothes or bedding are not clean.", "Bed-bugs may hide in cracks and dirty bedding."],
        },
        {
          kind: "numeracy",
          skill: "tallying clean-up actions",
          examples: ["Tally places where stagnant water was removed.", "Count covered food containers.", "Compare a clean place and a dirty place."],
          exercise: ["Make 5 tally marks for 5 places cleaned.", "If 3 tins and 2 bottles hold stagnant water, how many containers should be emptied?"],
        },
        {
          kind: "activity",
          title: "Activity: vector search picture",
          instructions: ["Draw a compound.", "Mark places where vectors may hide or breed.", "Draw how to make the place clean and safe."],
          safetyNote: "Do not touch dirty rubbish, rats, insects or stagnant water with bare hands. Ask an adult for help.",
        },
        {
          kind: "exercise",
          title: "Exercise",
          questions: [
            { type: "oral", prompt: "What is a disease vector?", answer: "A living thing that can carry germs and spread disease." },
            { type: "written", prompt: "Name two disease vectors.", answer: "Mosquito, housefly, rat, cockroach, louse, flea, bed-bug or tsetse fly." },
            { type: "fill-blank", prompt: "Mosquitoes may breed in _____ water.", answer: "stagnant" },
            { type: "multiple-choice", prompt: "Which vector can spread malaria?", choices: ["mosquito", "shoe", "book", "chair"], answer: "mosquito" },
          ],
        },
      ],
    },
    {
      id: "p3-v4-diseases-spread-vectors",
      classLevel: "P3",
      term: "Term III",
      curriculumMode: "thematic",
      themeTitle: "Health in Our Sub-county/Division",
      subThemeTitle: "Diseases Spread by Vectors",
      lessonTitle: "Diseases Spread by Vectors",
      learningArea: "Integrated Theme",
      blocks: [
        {
          kind: "vocabulary",
          title: "New words",
          words: [
            { word: "malaria", meaning: "a disease spread by mosquitoes" },
            { word: "cholera", meaning: "a dangerous disease often linked to dirty water or poor sanitation" },
            { word: "typhoid", meaning: "a disease often linked to unsafe food or water" },
            { word: "diarrhoea", meaning: "passing watery stool many times" },
            { word: "dysentery", meaning: "diarrhoea with blood or mucus that needs medical help" },
            { word: "prevention", meaning: "actions done to stop disease before it happens" },
          ],
        },
        {
          kind: "story",
          title: "Read and talk",
          text: "During health parade, the teacher reminded pupils to sleep under mosquito nets, wash hands after using the latrine, drink safe water and cover food. These actions help prevent diseases.",
          questions: ["Why should pupils sleep under mosquito nets?", "When should pupils wash hands?", "Why should food be covered?"],
        },
        {
          kind: "definition",
          term: "disease prevention",
          definition: "means doing things that stop diseases from spreading or making people sick.",
          simpleCheck: "Boiling drinking water helps prevent diseases linked to unsafe water.",
        },
        {
          kind: "categories",
          title: "Diseases and prevention",
          categories: [
            { name: "Malaria", definition: "a disease spread by mosquitoes", examples: ["sleep under a mosquito net", "remove stagnant water", "clear bushes near homes"] },
            { name: "Cholera / typhoid / diarrhoea", definition: "diseases often linked to unsafe water, dirty food or poor sanitation", examples: ["boil drinking water", "wash hands", "cover food", "use a latrine properly"] },
            { name: "Sleeping sickness", definition: "a disease spread by tsetse flies", examples: ["avoid tsetse-infested areas", "report bites/sickness to adults"] },
            { name: "Trachoma", definition: "an eye disease linked to poor hygiene and flies", examples: ["wash face", "keep compounds clean", "control flies"] },
          ],
        },
        {
          kind: "diagram",
          title: "Vector diseases card",
          imageUrl: "/images/p3/p3-10-2-diseases-spread-vectors.svg",
          caption: "P3 study card for diseases spread by vectors and prevention actions.",
          labels: ["malaria", "cholera", "typhoid", "diarrhoea", "sleeping sickness", "prevention"],
        },
        {
          kind: "identification",
          title: "Good health habits",
          points: ["Sleep under a mosquito net.", "Wash hands with soap after using the latrine.", "Drink boiled or safe water.", "Cover food to keep away flies.", "Keep the compound clean.", "Tell an adult when someone is sick."],
        },
        {
          kind: "numeracy",
          skill: "counting prevention actions",
          examples: ["Count mosquito nets in a home picture.", "Tally pupils who washed hands before eating.", "Compare covered and uncovered food pictures."],
          exercise: ["Draw 4 health actions and count them.", "If 6 pupils wash hands and 4 more join them, how many pupils washed hands?"],
        },
        {
          kind: "activity",
          title: "Activity: prevention poster",
          instructions: ["Choose one disease prevention action.", "Draw it clearly.", "Write a short message, such as Wash your hands or Sleep under a net.", "Share your poster with the class."],
          safetyNote: "If someone is very sick, tell a trusted adult or health worker quickly.",
        },
        {
          kind: "exercise",
          title: "Exercise",
          questions: [
            { type: "oral", prompt: "How is malaria spread?", answer: "By mosquitoes." },
            { type: "written", prompt: "Write two ways to prevent diarrhoea.", answer: "Wash hands, drink safe water, cover food or use latrines properly." },
            { type: "fill-blank", prompt: "Food should be covered to keep away _____.", answer: "flies" },
            { type: "multiple-choice", prompt: "Which action helps prevent malaria?", choices: ["sleeping under a mosquito net", "drinking dirty water", "leaving stagnant water", "covering books"], answer: "sleeping under a mosquito net" },
          ],
        },
      ],
    },
    {
      id: "p3-v4-hiv-aids",
      classLevel: "P3",
      term: "Term III",
      curriculumMode: "thematic",
      themeTitle: "Health in Our Sub-county/Division",
      subThemeTitle: "HIV/AIDS",
      lessonTitle: "HIV/AIDS: Kindness and Safety",
      learningArea: "Integrated Theme",
      blocks: [
        {
          kind: "vocabulary",
          title: "New words",
          words: [
            { word: "HIV", meaning: "a virus that can make the body weak if a person does not get care" },
            { word: "AIDS", meaning: "a serious stage of sickness caused by HIV" },
            { word: "care", meaning: "helping and treating someone kindly" },
            { word: "stigma", meaning: "treating someone badly because of sickness or difference" },
            { word: "sharp object", meaning: "an object that can cut or pierce the skin, such as a razor blade or needle" },
            { word: "health worker", meaning: "a trained person who helps sick people" },
          ],
        },
        {
          kind: "story",
          title: "Read and talk",
          text: "A teacher tells the class that sick people need kindness, care and help from adults and health workers. She reminds pupils not to share sharp objects and not to laugh at anyone who is sick.",
          questions: ["How should sick people be treated?", "Why should pupils not share sharp objects?", "Who can help sick people?"],
        },
        {
          kind: "definition",
          term: "HIV",
          definition: "is a virus that can weaken the body. A person living with HIV can get help from health workers and can be treated with care and kindness.",
          simpleCheck: "We should not fear, mock or reject a person because they are sick.",
        },
        {
          kind: "definition",
          term: "AIDS",
          definition: "is a serious stage of illness caused by HIV when a person does not get enough care or treatment.",
          simpleCheck: "A health worker or trusted adult should guide questions about HIV/AIDS.",
        },
        {
          kind: "categories",
          title: "Kind and safe actions",
          categories: [
            { name: "Care for sick people", definition: "help sick people kindly and respectfully", examples: ["speak kindly", "help with safe simple tasks", "tell an adult when help is needed"] },
            { name: "Do not share sharp objects", definition: "do not use the same razor blade, needle or other sharp item with another person", examples: ["razor blade", "needle", "pin used for piercing"] },
            { name: "Ask trusted adults", definition: "get correct health guidance from adults and health workers", examples: ["parent", "teacher", "nurse", "doctor"] },
          ],
        },
        {
          kind: "diagram",
          title: "HIV/AIDS care card",
          imageUrl: "/images/p3/p3-10-3-hiv-aids.svg",
          caption: "P3 study card for HIV/AIDS care, kindness and not sharing sharp objects.",
          labels: ["kindness", "care", "health worker", "do not share sharp objects", "no stigma"],
        },
        {
          kind: "identification",
          title: "Important safety messages",
          points: ["Do not share razor blades, needles or other sharp objects.", "Do not touch blood with bare hands.", "Tell a trusted adult if someone is bleeding or badly hurt.", "Do not laugh at or reject people who are sick.", "Ask health questions respectfully."],
        },
        {
          kind: "numeracy",
          skill: "sorting safe and unsafe actions",
          examples: ["Sort cards into safe actions and unsafe actions.", "Count kind actions shown in a picture.", "Compare one safe action and one unsafe action."],
          exercise: ["Draw 3 safe health actions.", "If 2 pupils draw kindness cards and 3 more join, how many cards are drawn?"],
        },
        {
          kind: "activity",
          title: "Activity: kindness message",
          instructions: ["Draw a card with a kind health message.", "Write one sentence: We should care for sick people.", "Say one safety rule about sharp objects."],
          safetyNote: "This topic should be guided by a teacher, parent, guardian or health worker. Do not share sharp objects.",
        },
        {
          kind: "exercise",
          title: "Exercise",
          questions: [
            { type: "oral", prompt: "How should we treat sick people?", answer: "With kindness and care." },
            { type: "written", prompt: "Name one sharp object children should not share.", answer: "Razor blade, needle or pin." },
            { type: "fill-blank", prompt: "A trained person who helps sick people is a health _____.", answer: "worker" },
            { type: "multiple-choice", prompt: "Which action is safe?", choices: ["asking a trusted adult for help", "sharing razor blades", "laughing at sick people", "touching blood with bare hands"], answer: "asking a trusted adult for help" },
          ],
        },
      ],
    },
  ];
}


type SimpleP3V4LessonSpec = {
  id: string;
  subThemeTitle: string;
  lessonTitle: string;
  imageUrl: string;
  imageCaption: string;
  vocab: Array<{ word: string; meaning: string }>;
  story: string;
  storyQuestions: string[];
  definitionTerm: string;
  definition: string;
  check: string;
  categories: Array<{ name: string; definition: string; examples: string[]; notes?: string[] }>;
  examples: Array<{ name: string; explanation: string; localContext?: string }>;
  keyPoints: string[];
  numeracyExamples: string[];
  numeracyExercise: string[];
  activityTitle: string;
  activitySteps: string[];
  safetyNote: string;
  exercise: Array<{ type: "oral" | "written" | "matching" | "multiple-choice" | "fill-blank"; prompt: string; answer?: string; choices?: string[] }>;
};

function buildSimpleP3V4Lessons(theme: P3ThemeBlueprint, specs: SimpleP3V4LessonSpec[]): LowerPrimaryLesson[] {
  return specs.map((spec) => ({
    id: spec.id,
    classLevel: "P3",
    term: theme.term as "Term I" | "Term II" | "Term III",
    curriculumMode: "thematic",
    themeTitle: theme.title,
    subThemeTitle: spec.subThemeTitle,
    lessonTitle: spec.lessonTitle,
    learningArea: "Integrated Theme",
    blocks: [
      { kind: "vocabulary", title: "New words", words: spec.vocab },
      { kind: "story", title: "Read and talk", text: spec.story, questions: spec.storyQuestions },
      { kind: "definition", term: spec.definitionTerm, definition: spec.definition, simpleCheck: spec.check },
      { kind: "categories", title: "Types / groups to know", categories: spec.categories },
      { kind: "examples", title: "Examples around us", examples: spec.examples },
      { kind: "diagram", title: "Look at the picture", imageUrl: spec.imageUrl, caption: spec.imageCaption, labels: spec.vocab.slice(0, 6).map((item) => item.word) },
      { kind: "identification", title: "Important things to remember", points: spec.keyPoints },
      { kind: "numeracy", skill: "theme counting, sorting and word problems", examples: spec.numeracyExamples, exercise: spec.numeracyExercise },
      { kind: "activity", title: spec.activityTitle, instructions: spec.activitySteps, safetyNote: spec.safetyNote },
      { kind: "exercise", title: "Exercise", questions: spec.exercise },
    ],
  }));
}

function buildTheme2LivelihoodV4Lessons(theme: P3ThemeBlueprint): LowerPrimaryLesson[] {
  return buildSimpleP3V4Lessons(theme, [
    {
      id: "p3-v4-occupations-importance",
      subThemeTitle: "Occupations of People in our Sub-county/Division and their Importance",
      lessonTitle: "Occupations and Their Importance",
      imageUrl: "/images/p3/p3-2-1-occupations-importance.svg",
      imageCaption: "P3 study card for occupations such as farming, trading, tailoring, carpentry and cooking.",
      vocab: [
        { word: "occupation", meaning: "work that a person does" },
        { word: "income", meaning: "money a person gets after work or selling something" },
        { word: "subsistence", meaning: "work done mainly to provide food or needs for the family" },
        { word: "trading", meaning: "buying and selling goods" },
        { word: "farming", meaning: "growing crops or keeping animals" },
        { word: "tailoring", meaning: "making or repairing clothes" },
      ],
      story: "In the trading centre, Ayo sees many people working. One person sells tomatoes, another repairs clothes, and another makes a wooden stool. At home, her grandmother grows beans for food. Ayo learns that all honest work is important.",
      storyQuestions: ["Name two occupations in the story.", "Who grows beans?", "Why is honest work important?"],
      definitionTerm: "occupation",
      definition: "is work that a person does to earn money, get food, make things or serve other people.",
      check: "A farmer has an occupation because farming is useful work.",
      categories: [
        { name: "Money-generating work", definition: "work done to earn money", examples: ["trading", "tailoring", "carpentry", "brick making"] },
        { name: "Subsistence work", definition: "work done mainly to provide family needs", examples: ["growing food crops", "keeping animals for home use", "cooking at home"] },
        { name: "Service work", definition: "work that helps other people", examples: ["teaching", "nursing", "security work", "transport work"] },
      ],
      examples: [
        { name: "farmer", explanation: "grows crops or keeps animals", localContext: "common in many villages and towns" },
        { name: "trader", explanation: "buys and sells goods", localContext: "works in shops or markets" },
        { name: "tailor", explanation: "makes and repairs clothes" },
        { name: "carpenter", explanation: "makes things from wood such as chairs, doors and tables" },
      ],
      keyPoints: ["All honest work should be respected.", "People work to get money, food, skills and services.", "Children can help with safe simple work at home but should not do dangerous work.", "Occupations help the community to grow."],
      numeracyExamples: ["Group 30 tomatoes in 10s.", "Count money in 100s and 1000s using play money.", "Add simple prices of goods in a market role-play."],
      numeracyExercise: ["If a trader sells 10 mangoes in the morning and 10 in the afternoon, how many mangoes are sold?", "Write 1000, 1100, 1200, 1300."],
      activityTitle: "Activity: occupation role-play",
      activitySteps: ["Choose one occupation.", "Act what the worker does.", "Say one tool or material the worker uses.", "Say why the work is important."],
      safetyNote: "Do not use sharp tools, fire or machines when acting occupations.",
      exercise: [
        { type: "oral", prompt: "What is an occupation?", answer: "Work that a person does." },
        { type: "written", prompt: "Name three occupations in your area.", answer: "Farmer, trader, tailor, carpenter, teacher or other correct work." },
        { type: "fill-blank", prompt: "A tailor makes and repairs _____.", answer: "clothes" },
        { type: "multiple-choice", prompt: "Which person grows crops?", choices: ["farmer", "chair", "river", "shoe"], answer: "farmer" },
      ],
    },
    {
      id: "p3-v4-social-services-importance",
      subThemeTitle: "Social Services and their Importance",
      lessonTitle: "Social Services",
      imageUrl: "/images/p3/p3-2-2-social-services-importance.svg",
      imageCaption: "P3 study card for education, health, communication, transport, water supply and security.",
      vocab: [
        { word: "social service", meaning: "a service that helps people live better" },
        { word: "education", meaning: "learning at school, home or in the community" },
        { word: "health service", meaning: "help people get when they are sick or need health care" },
        { word: "transport", meaning: "moving people or goods from one place to another" },
        { word: "communication", meaning: "sending and receiving messages" },
        { word: "security", meaning: "keeping people and property safe" },
      ],
      story: "Musa goes to school in the morning. His mother takes his young sister to the health centre. In the evening, his father calls a relative on a phone. The family also fetches water from a protected tap. These are social services.",
      storyQuestions: ["Which social service helps Musa learn?", "Where does his sister go for health care?", "Which service helps the family send messages?"],
      definitionTerm: "social service",
      definition: "is a service provided in a community to help people live safely, learn, move, communicate, get water and stay healthy.",
      check: "A school gives education, so it is a social service.",
      categories: [
        { name: "Education services", definition: "services that help people learn", examples: ["schools", "libraries", "teachers"] },
        { name: "Health services", definition: "services that help people stay healthy or get treatment", examples: ["health centres", "clinics", "hospitals"] },
        { name: "Transport and communication", definition: "services that help people move and share messages", examples: ["roads", "buses", "phones", "radios"] },
        { name: "Water and security", definition: "services that provide safe water and protection", examples: ["wells", "taps", "police", "local leaders"] },
      ],
      examples: [
        { name: "school", explanation: "helps children learn" },
        { name: "health centre", explanation: "helps sick people get treatment" },
        { name: "road", explanation: "helps people move from place to place" },
        { name: "protected well or tap", explanation: "provides safer water" },
      ],
      keyPoints: ["Social services help many people, not only one person.", "People should use services responsibly.", "We should keep water sources, roads and schools clean.", "Community workers should be respected."],
      numeracyExamples: ["Read numbers in 10s and 100s from 1000 to 2000.", "Add simple service numbers, such as pupils in two classes.", "Classify communication objects into old and new types."],
      numeracyExercise: ["Add 123 pupils and 214 pupils without carrying.", "Count 5 services in your community."],
      activityTitle: "Activity: service map",
      activitySteps: ["Draw your school in the middle.", "Add two services near it, such as a road, water source or clinic.", "Write why each service is important."],
      safetyNote: "Visit community services only with a trusted adult.",
      exercise: [
        { type: "oral", prompt: "What is a social service?", answer: "A service that helps people live better." },
        { type: "written", prompt: "Name four social services.", answer: "Education, health, transport, communication, water supply or security." },
        { type: "fill-blank", prompt: "A health centre helps people who are _____.", answer: "sick" },
        { type: "multiple-choice", prompt: "Which service helps people learn?", choices: ["school", "stone", "shoe", "goat"], answer: "school" },
      ],
    },
    {
      id: "p3-v4-social-service-challenges-solutions",
      subThemeTitle: "Challenges in Social Services and Possible Solutions",
      lessonTitle: "Problems and Solutions in Social Services",
      imageUrl: "/images/p3/p3-2-3-challenges-social-services-solutions.svg",
      imageCaption: "P3 study card for challenges in education, health, roads, water, communication and security.",
      vocab: [
        { word: "challenge", meaning: "a problem or difficulty" },
        { word: "solution", meaning: "a way to solve a problem" },
        { word: "shortage", meaning: "not enough of something" },
        { word: "dirty water", meaning: "water that is not safe to drink" },
        { word: "bad road", meaning: "a road that is hard or unsafe to use" },
        { word: "report", meaning: "to tell a responsible person about a problem" },
      ],
      story: "After heavy rain, the road to the health centre becomes muddy. Some children also find rubbish near the school tap. Their teacher tells them that communities can report problems, clean safe places and ask leaders for help.",
      storyQuestions: ["What happened to the road?", "Where did children find rubbish?", "Who can help solve community problems?"],
      definitionTerm: "challenge in a social service",
      definition: "is a problem that makes it hard for people to use a service well.",
      check: "A broken tap is a challenge because people may fail to get clean water.",
      categories: [
        { name: "Education challenges", definition: "problems at school", examples: ["few books", "crowded classrooms", "long distance to school"] },
        { name: "Health challenges", definition: "problems in health care", examples: ["few medicines", "long queues", "far health centres"] },
        { name: "Transport challenges", definition: "problems with roads and movement", examples: ["bad roads", "flooded paths", "high transport cost"] },
        { name: "Water and security challenges", definition: "problems with water or safety", examples: ["dirty water", "broken tap", "theft", "few security helpers"] },
      ],
      examples: [
        { name: "bad road", explanation: "can delay people going to school, market or health centre" },
        { name: "dirty water", explanation: "can make people sick" },
        { name: "few books", explanation: "can make learning harder" },
        { name: "poor communication", explanation: "can make messages arrive late" },
      ],
      keyPoints: ["Every challenge needs a safe solution.", "Children should report serious problems to adults.", "People should not spoil public services.", "Community members and leaders can work together."],
      numeracyExamples: ["Add two 2-digit numbers with carrying using repair items.", "Solve word problems about a journey map.", "Count steps from one service to another."],
      numeracyExercise: ["A class collects 28 papers and 35 bottles during cleanup. How many items are collected?", "Draw a journey map from school to a water source."],
      activityTitle: "Activity: problem and solution cards",
      activitySteps: ["Draw one community service problem.", "Draw one safe solution.", "Say who should help solve it.", "Write: The problem is ___. The solution is ___."],
      safetyNote: "Children should not repair roads, wires, taps or buildings alone. Report to adults.",
      exercise: [
        { type: "oral", prompt: "What is a challenge?", answer: "A problem or difficulty." },
        { type: "written", prompt: "Name two challenges in social services.", answer: "Bad roads, dirty water, few books, lack of medicine or poor security." },
        { type: "fill-blank", prompt: "A way to solve a problem is a _____.", answer: "solution" },
        { type: "multiple-choice", prompt: "What should a child do when a tap is broken?", choices: ["report to an adult", "break it more", "hide it", "drink dirty water"], answer: "report to an adult" },
      ],
    },
  ]);
}

function buildTheme3EnvironmentV4Lessons(theme: P3ThemeBlueprint): LowerPrimaryLesson[] {
  return buildSimpleP3V4Lessons(theme, [
    {
      id: "p3-v4-soil",
      subThemeTitle: "Soil",
      lessonTitle: "Soil",
      imageUrl: "/images/p3/p3-3-1-soil.svg",
      imageCaption: "P3 study card for soil composition, sand, clay and loam.",
      vocab: [
        { word: "soil", meaning: "the top layer of the earth where many plants grow" },
        { word: "sand", meaning: "soil with large loose particles" },
        { word: "clay", meaning: "soil with very fine particles that holds water" },
        { word: "loam", meaning: "fertile soil with sand, clay and humus mixed together" },
        { word: "humus", meaning: "dead plant and animal matter in soil" },
        { word: "texture", meaning: "how soil feels when touched" },
      ],
      story: "The P3 class collected three soil samples. One felt rough and loose. One felt sticky when wet. One was dark and good for growing beans. The teacher told them the samples were sand, clay and loam.",
      storyQuestions: ["Which soil felt sticky?", "Which soil was good for growing beans?", "Name the three soil types."],
      definitionTerm: "soil",
      definition: "is the top layer of the earth where many plants grow. Soil contains rock particles, air, water and dead plant or animal matter.",
      check: "Beans grow in soil because soil holds roots and gives plants water and nutrients.",
      categories: [
        { name: "Sand", definition: "soil with large particles that lets water pass through quickly", examples: ["soil near some paths", "soil near some beaches or river banks"] },
        { name: "Clay", definition: "soil with very small particles that holds water and feels sticky when wet", examples: ["clay used for pots", "clay used for bricks"] },
        { name: "Loam", definition: "fertile soil made from sand, clay and humus", examples: ["garden soil", "soil good for crops"] },
      ],
      examples: [
        { name: "sand", explanation: "rough and loose" },
        { name: "clay", explanation: "sticky when wet and can make pots or bricks" },
        { name: "loam", explanation: "good for growing many crops" },
        { name: "humus", explanation: "dead plant and animal matter that makes soil fertile" },
      ],
      keyPoints: ["Soil has air and water in it.", "Different soils feel different.", "Loam is usually best for growing crops.", "Soil should be protected from erosion and rubbish."],
      numeracyExamples: ["Sort soil samples into three groups.", "Count containers used for soil samples.", "Compare which sample holds more water."],
      numeracyExercise: ["Draw 3 soil samples and label them.", "If one group collects 4 samples and another collects 5, how many samples are collected?"],
      activityTitle: "Activity: soil texture test",
      activitySteps: ["Look at safe soil samples with your teacher.", "Touch a little soil with your fingers.", "Say whether it feels rough, smooth or sticky.", "Draw and label sand, clay and loam."],
      safetyNote: "Do not put soil in the mouth. Wash hands after touching soil.",
      exercise: [
        { type: "oral", prompt: "What is soil?", answer: "The top layer of the earth where many plants grow." },
        { type: "written", prompt: "Name three types of soil.", answer: "Sand, clay and loam." },
        { type: "fill-blank", prompt: "Soil that is good for growing crops is usually _____.", answer: "loam" },
        { type: "multiple-choice", prompt: "Which soil feels sticky when wet?", choices: ["clay", "shoe", "air", "paper"], answer: "clay" },
      ],
    },
    {
      id: "p3-v4-natural-causes-environmental-change",
      subThemeTitle: "Natural Causes of Changes in the Environment",
      lessonTitle: "Natural Changes in the Environment",
      imageUrl: "/images/p3/p3-3-2-natural-causes-environmental-change.svg",
      imageCaption: "P3 study card for floods, drought and weather charts.",
      vocab: [
        { word: "environment", meaning: "everything around us" },
        { word: "change", meaning: "when something becomes different" },
        { word: "flood", meaning: "too much water covering land that is normally dry" },
        { word: "drought", meaning: "a long time with little or no rain" },
        { word: "weather", meaning: "how the sky and air are at a time" },
        { word: "weather chart", meaning: "a record showing weather for different days" },
      ],
      story: "For one week, the class recorded weather. Monday was sunny, Tuesday was rainy, and Wednesday was windy. Their teacher said weather can change the environment. Too much rain may cause floods, and too little rain may cause drought.",
      storyQuestions: ["What was Tuesday's weather?", "What can too much rain cause?", "What can too little rain cause?"],
      definitionTerm: "natural environmental change",
      definition: "is a change in the environment caused by nature, not by people.",
      check: "A flood after heavy rain is a natural change.",
      categories: [
        { name: "Flood", definition: "too much water covering land", examples: ["gardens covered by water", "roads blocked by water"] },
        { name: "Drought", definition: "a long time with little or no rain", examples: ["dry gardens", "dry grass", "little water"] },
        { name: "Weather changes", definition: "daily changes in sun, rain, clouds and wind", examples: ["sunny day", "rainy day", "windy day"] },
      ],
      examples: [
        { name: "heavy rain", explanation: "may cause floods" },
        { name: "long dry season", explanation: "may cause drought" },
        { name: "strong wind", explanation: "may break branches or blow dust" },
        { name: "sunny weather", explanation: "may dry clothes and soil" },
      ],
      keyPoints: ["Weather changes every day.", "Floods and drought can affect people, animals and plants.", "Weather charts help us record what we observe.", "Children should listen to adults during dangerous weather."],
      numeracyExamples: ["Make a tally of sunny, rainy and cloudy days.", "Count how many rainy days in a week.", "Compare which weather happened most."],
      numeracyExercise: ["Draw a 5-day weather chart.", "If 3 days are sunny and 2 days are rainy, how many days are recorded?"],
      activityTitle: "Activity: weather chart",
      activitySteps: ["Draw a table for five days.", "Use symbols for sunny, rainy, cloudy and windy.", "Record the weather each day.", "Say which weather happened most."],
      safetyNote: "Do not play in floods, storms or heavy rain. Stay with adults.",
      exercise: [
        { type: "oral", prompt: "What is weather?", answer: "How the sky and air are at a time." },
        { type: "written", prompt: "Name two natural causes of environmental change.", answer: "Flood and drought." },
        { type: "fill-blank", prompt: "Too much rain may cause _____.", answer: "floods" },
        { type: "multiple-choice", prompt: "What records daily weather?", choices: ["weather chart", "shoe", "spoon", "football"], answer: "weather chart" },
      ],
    },
    {
      id: "p3-v4-human-activities-environmental-change",
      subThemeTitle: "Changes in the Environment through Human Activities",
      lessonTitle: "Human Activities and Environmental Change",
      imageUrl: "/images/p3/p3-3-3-human-activities-environmental-change.svg",
      imageCaption: "P3 study card for human activities that change the environment.",
      vocab: [
        { word: "human activity", meaning: "something people do" },
        { word: "environmental change", meaning: "when the surroundings become different" },
        { word: "cutting trees", meaning: "removing trees from an area" },
        { word: "building", meaning: "making houses, roads or other structures" },
        { word: "dumping rubbish", meaning: "throwing waste in the wrong place" },
        { word: "planting trees", meaning: "putting seedlings in soil so they grow" },
      ],
      story: "Near the school, people planted trees along the road. In another place, some people dumped rubbish in a trench. The teacher asked the class which activity helped the environment and which one harmed it.",
      storyQuestions: ["Which activity helped the environment?", "Which activity harmed the environment?", "Why is dumping rubbish bad?"],
      definitionTerm: "human activity",
      definition: "is something people do. Human activities can help or harm the environment.",
      check: "Planting trees can help the environment. Dumping rubbish can harm it.",
      categories: [
        { name: "Helpful activities", definition: "activities that care for the environment", examples: ["planting trees", "sweeping compounds", "using rubbish pits", "protecting water sources"] },
        { name: "Harmful activities", definition: "activities that damage the environment", examples: ["dumping rubbish", "cutting many trees", "burning bushes", "dirtying water sources"] },
        { name: "Activities that must be managed", definition: "activities that may be useful but need care", examples: ["farming", "building", "digging", "road construction"] },
      ],
      examples: [
        { name: "farming", explanation: "can provide food but soil must be protected" },
        { name: "building", explanation: "gives houses and roads but changes land" },
        { name: "tree planting", explanation: "helps protect soil and gives shade" },
        { name: "rubbish dumping", explanation: "makes places dirty and may block water flow" },
      ],
      keyPoints: ["People can change the environment for good or bad.", "Trees help protect soil, give shade and clean air.", "Rubbish should be put in proper places.", "Children can help by keeping compounds clean and planting trees with adults."],
      numeracyExamples: ["Add tree seedlings planted by two groups.", "Count rubbish items collected safely.", "Compare clean and dirty places."],
      numeracyExercise: ["A class plants 123 trees and another plants 214. How many trees are planted altogether?", "Draw before-and-after pictures of a clean place."],
      activityTitle: "Activity: before and after",
      activitySteps: ["Draw a dirty place before cleaning.", "Draw the same place after cleaning.", "Write one action that made it better."],
      safetyNote: "Do not pick sharp or dirty rubbish with bare hands. Use adult guidance.",
      exercise: [
        { type: "oral", prompt: "What is a human activity?", answer: "Something people do." },
        { type: "written", prompt: "Name two activities that help the environment.", answer: "Planting trees, sweeping compounds, using rubbish pits or protecting water sources." },
        { type: "fill-blank", prompt: "Throwing waste in the wrong place is called dumping _____.", answer: "rubbish" },
        { type: "multiple-choice", prompt: "Which action helps the environment?", choices: ["planting trees", "dirtying water", "burning bushes", "dumping rubbish"], answer: "planting trees" },
      ],
    },
  ]);
}

function buildTheme4WeatherV4Lessons(theme: P3ThemeBlueprint): LowerPrimaryLesson[] {
  return buildSimpleP3V4Lessons(theme, [
    {
      id: "p3-v4-air-sun",
      subThemeTitle: "Air and the Sun",
      lessonTitle: "Air and the Sun",
      imageUrl: "/images/p3/p3-4-1-air-sun.svg",
      imageCaption: "P3 study card for air, sun and weather observations.",
      vocab: [
        { word: "air", meaning: "the gas around us that people, animals and plants need" },
        { word: "sun", meaning: "the star that gives the earth light and heat" },
        { word: "wind", meaning: "moving air" },
        { word: "space", meaning: "room that something occupies" },
        { word: "weight", meaning: "how heavy something is" },
        { word: "shadow", meaning: "a dark shape made when light is blocked" },
      ],
      story: "The class blew air into balloons. The balloons became bigger because air occupied space. Outside, the sun made shadows on the ground. When wind blew, leaves moved.",
      storyQuestions: ["What made the balloons bigger?", "What made shadows on the ground?", "What moved the leaves?"],
      definitionTerm: "air",
      definition: "is the gas around us. We cannot usually see air, but we can feel it when it moves as wind.",
      check: "A balloon becomes bigger when air enters it because air occupies space.",
      categories: [
        { name: "Air occupies space", definition: "air takes up room", examples: ["air in a balloon", "air in a bottle", "air in a ball"] },
        { name: "Air moves things", definition: "moving air can push light objects", examples: ["leaves", "paper", "clothes on a line"] },
        { name: "The sun gives light and heat", definition: "sunshine helps us see and warms the earth", examples: ["drying clothes", "helping plants grow", "making shadows"] },
      ],
      examples: [
        { name: "balloon", explanation: "shows air occupies space" },
        { name: "wind", explanation: "shows air moving" },
        { name: "shadow", explanation: "shows light from the sun is blocked" },
        { name: "sunshine", explanation: "helps dry clothes and warm soil" },
      ],
      keyPoints: ["Air is all around us.", "Air has weight and occupies space.", "Moving air is wind.", "The sun gives light and heat.", "Too much hot sun can harm people, so use shade when needed."],
      numeracyExamples: ["Measure a shadow using footsteps.", "Count objects moved by wind.", "Compare short and long shadows."],
      numeracyExercise: ["Draw a short shadow and a long shadow.", "If 4 leaves move and 3 more move, how many leaves moved?"],
      activityTitle: "Activity: air and shadow observation",
      activitySteps: ["Blow air into a balloon with your teacher.", "Watch leaves or paper move in wind.", "Stand safely in sunlight and look at your shadow.", "Draw what you observed."],
      safetyNote: "Do not look directly at the sun. Stay away from strong wind, storms and dust.",
      exercise: [
        { type: "oral", prompt: "What is wind?", answer: "Moving air." },
        { type: "written", prompt: "Give two uses of the sun.", answer: "It gives light, heat, dries clothes and helps plants grow." },
        { type: "fill-blank", prompt: "Air takes up _____.", answer: "space" },
        { type: "multiple-choice", prompt: "Which one shows air occupies space?", choices: ["balloon filled with air", "stone", "shoe", "book"], answer: "balloon filled with air" },
      ],
    },
    {
      id: "p3-v4-water-rain-cycle",
      subThemeTitle: "Water",
      lessonTitle: "Water and Rain",
      imageUrl: "/images/p3/p3-4-2-water.svg",
      imageCaption: "P3 study card for rain, water cycle, evaporation, condensation and clouds.",
      vocab: [
        { word: "water", meaning: "a liquid needed by people, animals and plants" },
        { word: "rain", meaning: "water that falls from clouds" },
        { word: "evaporation", meaning: "when water changes into vapour because of heat" },
        { word: "condensation", meaning: "when water vapour cools and forms drops" },
        { word: "cloud", meaning: "tiny drops of water or ice seen in the sky" },
        { word: "water cycle", meaning: "the movement of water from earth to air and back again" },
      ],
      story: "After rain, water collected in a small puddle. Later, the sun shone and the puddle became smaller. The teacher said some water had evaporated. In the sky, clouds formed and later rain fell again.",
      storyQuestions: ["What happened to the puddle after sunshine?", "What formed in the sky?", "What fell from the clouds?"],
      definitionTerm: "water cycle",
      definition: "is the movement of water from the earth to the air and back to the earth as rain.",
      check: "Rain, evaporation, condensation and clouds are parts of the water cycle.",
      categories: [
        { name: "Evaporation", definition: "water changes into vapour because of heat", examples: ["drying puddles", "drying clothes", "steam from hot water"] },
        { name: "Condensation", definition: "water vapour cools and forms tiny drops", examples: ["clouds forming", "drops on a cold bottle"] },
        { name: "Rainfall", definition: "water falls from clouds to the earth", examples: ["rain in gardens", "rain filling tanks", "rain on roofs"] },
        { name: "Clouds", definition: "tiny water drops or ice in the sky", examples: ["dark rain clouds", "white clouds"] },
      ],
      examples: [
        { name: "puddle drying", explanation: "shows evaporation" },
        { name: "clouds", explanation: "show condensed water in the sky" },
        { name: "rain", explanation: "brings water back to the earth" },
        { name: "drying clothes", explanation: "water leaves clothes by evaporation" },
      ],
      keyPoints: ["Water is needed by all living things.", "The sun helps evaporation.", "Clouds can bring rain.", "Rainwater should be collected and used carefully."],
      numeracyExamples: ["Subtract cups of water used from a container.", "Count rainy days on a weather chart.", "Compare full and half-full containers."],
      numeracyExercise: ["If a container has 9 cups and 3 cups are used, how many cups remain?", "Draw 4 raindrops and 4 more. How many altogether?"],
      activityTitle: "Activity: draw the water cycle",
      activitySteps: ["Draw the sun heating water.", "Draw arrows going up for evaporation.", "Draw clouds for condensation.", "Draw rain falling back to earth."],
      safetyNote: "Do not drink dirty water. Do not play in floods or deep water.",
      exercise: [
        { type: "oral", prompt: "What is rain?", answer: "Water that falls from clouds." },
        { type: "written", prompt: "Name two parts of the water cycle.", answer: "Evaporation, condensation, clouds or rain." },
        { type: "fill-blank", prompt: "The sun helps water to _____.", answer: "evaporate" },
        { type: "multiple-choice", prompt: "Which one is a source of rain?", choices: ["clouds", "shoe", "chair", "book"], answer: "clouds" },
      ],
    },
    {
      id: "p3-v4-managing-water",
      subThemeTitle: "Managing Water",
      lessonTitle: "Managing Water",
      imageUrl: "/images/p3/p3-4-3-managing-water.svg",
      imageCaption: "P3 study card for water sources, water harvesting and caring for water sources.",
      vocab: [
        { word: "water source", meaning: "a place where people get water" },
        { word: "harvest water", meaning: "collect and store rainwater" },
        { word: "protect", meaning: "keep something safe from harm" },
        { word: "tap", meaning: "a pipe part used to control flowing water" },
        { word: "well", meaning: "a deep hole where people get underground water" },
        { word: "spring", meaning: "a place where water comes naturally from the ground" },
      ],
      story: "At school, rainwater is collected from the roof into a tank. Pupils close the tap after washing hands. They also sweep around the water point so mud and rubbish do not enter the water.",
      storyQuestions: ["Where is rainwater collected?", "Why should pupils close the tap?", "How do pupils care for the water point?"],
      definitionTerm: "water management",
      definition: "means collecting, using, saving and protecting water carefully.",
      check: "Closing a tap after use is water management.",
      categories: [
        { name: "Sources of water", definition: "places where people get water", examples: ["rain", "wells", "springs", "rivers", "lakes", "taps"] },
        { name: "Water harvesting", definition: "collecting and storing rainwater", examples: ["roof gutters", "water tanks", "jerrycans"] },
        { name: "Caring for water sources", definition: "keeping water places clean and safe", examples: ["fencing wells", "not washing in springs", "not dumping rubbish"] },
      ],
      examples: [
        { name: "rain tank", explanation: "stores rainwater from a roof" },
        { name: "protected spring", explanation: "keeps water cleaner and safer" },
        { name: "covered jerrycan", explanation: "keeps stored water clean" },
        { name: "closed tap", explanation: "prevents water wastage" },
      ],
      keyPoints: ["Water should not be wasted.", "Stored water should be covered.", "Water sources should be kept clean.", "Unsafe water can make people sick.", "Children should report broken taps to adults."],
      numeracyExamples: ["Subtract water used from water stored.", "Count containers of water.", "Compare full, half-full and empty containers."],
      numeracyExercise: ["A tank has 8 jerrycans of water. 3 are used. How many remain?", "Draw 6 water containers and shade 2."],
      activityTitle: "Activity: save water poster",
      activitySteps: ["Draw a tap or water container.", "Write one way to save water.", "Write one way to keep water clean."],
      safetyNote: "Do not drink water from unsafe sources. Ask an adult before fetching water from far places.",
      exercise: [
        { type: "oral", prompt: "What is water management?", answer: "Collecting, using, saving and protecting water carefully." },
        { type: "written", prompt: "Name three sources of water.", answer: "Rain, well, spring, river, lake or tap." },
        { type: "fill-blank", prompt: "We should close the tap to avoid wasting _____.", answer: "water" },
        { type: "multiple-choice", prompt: "Which action keeps water clean?", choices: ["covering stored water", "throwing rubbish in it", "washing in a spring", "leaving it open"], answer: "covering stored water" },
      ],
    },
  ]);
}

function buildTheme7ResourcesV4Lessons(theme: P3ThemeBlueprint): LowerPrimaryLesson[] {
  return buildSimpleP3V4Lessons(theme, [
    {
      id: "p3-v4-saving-resources",
      subThemeTitle: "Saving Resources",
      lessonTitle: "Saving Resources",
      imageUrl: "/images/p3/p3-7-1-saving-resources.svg",
      imageCaption: "P3 study card for saving water, time, money, food, fuel, firewood and charcoal.",
      vocab: [
        { word: "resource", meaning: "something useful that people need or use" },
        { word: "save", meaning: "to use carefully and not waste" },
        { word: "money", meaning: "coins and notes used to buy things" },
        { word: "time", meaning: "minutes, hours and days used to plan work" },
        { word: "fuel", meaning: "something used to produce heat or energy" },
        { word: "food", meaning: "what people and animals eat to live and grow" },
      ],
      story: "At home, Sarah closes the tap after washing hands. Her brother switches off the light during the day. Their mother covers food well and uses firewood carefully. The family is saving resources.",
      storyQuestions: ["Which resource did Sarah save?", "Why did her brother switch off the light?", "Name one resource used at home."],
      definitionTerm: "saving resources",
      definition: "means using useful things carefully so they do not get wasted or finished quickly.",
      check: "Closing a tap after use saves water.",
      categories: [
        { name: "Water", definition: "a resource needed for drinking, cooking, washing, animals and plants", examples: ["tap water", "rainwater", "well water"] },
        { name: "Time", definition: "a resource used to plan activities", examples: ["school time", "homework time", "play time"] },
        { name: "Money", definition: "a resource used for buying goods and services", examples: ["coins", "notes", "savings"] },
        { name: "Food and fuel", definition: "resources used for eating and cooking", examples: ["beans", "maize", "firewood", "charcoal"] },
      ],
      examples: [
        { name: "closing taps", explanation: "saves water" },
        { name: "keeping time", explanation: "saves time for learning and work" },
        { name: "buying needs first", explanation: "saves money" },
        { name: "using firewood carefully", explanation: "saves fuel and trees" },
      ],
      keyPoints: ["Resources are useful and should not be wasted.", "Saving helps families and communities.", "Children can save resources through simple safe actions.", "Planting trees helps replace firewood resources."],
      numeracyExamples: ["Count coins saved in a box.", "Read time on a simple clock.", "Compare full and half-full water containers."],
      numeracyExercise: ["If you save 2 coins on Monday and 3 coins on Tuesday, how many coins are saved?", "Draw 4 ways to save resources."],
      activityTitle: "Activity: saving poster",
      activitySteps: ["Choose one resource.", "Draw how people waste it.", "Draw how people save it.", "Write one saving message."],
      safetyNote: "Children should not handle fire, charcoal stoves or electrical appliances without adult guidance.",
      exercise: [
        { type: "oral", prompt: "What is a resource?", answer: "Something useful that people need or use." },
        { type: "written", prompt: "Name four resources.", answer: "Water, time, money, food, fuel, firewood or charcoal." },
        { type: "fill-blank", prompt: "Closing a tap saves _____.", answer: "water" },
        { type: "multiple-choice", prompt: "Which action saves resources?", choices: ["switching off unused lights", "wasting water", "throwing food", "leaving taps open"], answer: "switching off unused lights" },
      ],
    },
    {
      id: "p3-v4-spending-resources",
      subThemeTitle: "Spending Resources",
      lessonTitle: "Spending Resources Wisely",
      imageUrl: "/images/p3/p3-7-2-spending-resources.svg",
      imageCaption: "P3 study card for spending, budgeting, negotiating, priorities, quality and prices.",
      vocab: [
        { word: "spending", meaning: "using money or resources to get something" },
        { word: "budget", meaning: "a plan for using money or resources" },
        { word: "need", meaning: "something important that a person must have" },
        { word: "want", meaning: "something a person would like but may not need" },
        { word: "price", meaning: "the amount of money needed to buy something" },
        { word: "quality", meaning: "how good or strong something is" },
      ],
      story: "Nana has money for school. She wants sweets but needs a pencil. Her aunt tells her to buy the pencil first because it will help her learn. Nana learns to spend wisely.",
      storyQuestions: ["What did Nana need?", "What did Nana want?", "Why did she buy the pencil first?"],
      definitionTerm: "spending wisely",
      definition: "means using money or resources first on important needs before wants.",
      check: "Buying a school pencil before sweets is wise spending.",
      categories: [
        { name: "Needs", definition: "things people must have", examples: ["food", "water", "school materials", "medicine"] },
        { name: "Wants", definition: "things people would like but can live without", examples: ["sweets", "toys", "extra snacks"] },
        { name: "Budgeting", definition: "planning how money or resources will be used", examples: ["saving some money", "buying needs first", "checking prices"] },
      ],
      examples: [
        { name: "buying exercise books", explanation: "a school need" },
        { name: "comparing prices", explanation: "helps choose wisely" },
        { name: "checking quality", explanation: "helps avoid buying weak or spoiled things" },
        { name: "negotiating politely", explanation: "can help people agree on a fair price" },
      ],
      keyPoints: ["Spend on needs before wants.", "A budget helps avoid wasting money.", "Compare prices before buying.", "Good quality things may last longer."],
      numeracyExamples: ["Add prices of two school items.", "Compare which item costs more.", "Subtract money spent from money available."],
      numeracyExercise: ["You have 1000 shillings and spend 600. How much remains?", "Which costs less: 500 shillings or 800 shillings?"],
      activityTitle: "Activity: shop role-play",
      activitySteps: ["Make a pretend shop.", "Put prices on three items.", "Choose one need and one want.", "Say what you would buy first and why."],
      safetyNote: "Do not take or spend real money without permission from a parent or guardian.",
      exercise: [
        { type: "oral", prompt: "What is spending?", answer: "Using money or resources to get something." },
        { type: "written", prompt: "Write two needs and two wants.", answer: "Needs: food, water, books. Wants: sweets, toys." },
        { type: "fill-blank", prompt: "A plan for using money is a _____.", answer: "budget" },
        { type: "multiple-choice", prompt: "Which should usually come first?", choices: ["needs", "wants", "extra sweets", "new toys"], answer: "needs" },
      ],
    },
    {
      id: "p3-v4-projects",
      subThemeTitle: "Projects",
      lessonTitle: "Projects",
      imageUrl: "/images/p3/p3-7-3-projects.svg",
      imageCaption: "P3 study card for projects, bee keeping and community activities.",
      vocab: [
        { word: "project", meaning: "a planned activity done to learn, solve a problem or earn money" },
        { word: "skill", meaning: "something a person can do well" },
        { word: "materials", meaning: "things needed to make or do something" },
        { word: "record", meaning: "information written down for remembering" },
        { word: "profit", meaning: "money gained after selling something" },
        { word: "teamwork", meaning: "working together" },
      ],
      story: "The P3 class starts a small vegetable garden project. Some pupils bring seeds, others fetch water with the teacher, and others record how many seedlings grow. They learn teamwork and responsibility.",
      storyQuestions: ["What project did the class start?", "What did pupils bring?", "Why is teamwork important?"],
      definitionTerm: "project",
      definition: "is a planned activity done to learn skills, solve a problem or earn income.",
      check: "A class garden can be a project because it is planned and teaches skills.",
      categories: [
        { name: "Learning projects", definition: "projects done to gain knowledge or skills", examples: ["class garden", "reading corner", "weather chart"] },
        { name: "Money projects", definition: "projects that may earn income", examples: ["vegetable growing", "bee keeping", "craft making"] },
        { name: "Community-help projects", definition: "projects that solve a community problem", examples: ["clean compound", "tree planting", "water-saving poster"] },
      ],
      examples: [
        { name: "bee keeping", explanation: "can produce honey and wax with trained adult guidance" },
        { name: "school garden", explanation: "teaches planting and care for crops" },
        { name: "tree planting", explanation: "helps the environment" },
        { name: "craft making", explanation: "teaches making useful things" },
      ],
      keyPoints: ["A project needs planning.", "Projects need materials and people with duties.", "Records help people know what has been done.", "Children should do safe project tasks with adult guidance."],
      numeracyExamples: ["Count seedlings in a project.", "Share duties among group members.", "Record money earned from a small sale."],
      numeracyExercise: ["If 4 groups plant 5 seedlings each, how many seedlings are planted?", "Draw a project record with 3 columns."],
      activityTitle: "Activity: project plan",
      activitySteps: ["Choose a simple safe project.", "List three materials needed.", "Give duties to group members.", "Draw a simple record chart."],
      safetyNote: "Projects involving bees, sharp tools, fire or selling should be guided by adults.",
      exercise: [
        { type: "oral", prompt: "What is a project?", answer: "A planned activity done to learn, solve a problem or earn money." },
        { type: "written", prompt: "Name two school projects.", answer: "Garden, tree planting, reading corner or cleanup project." },
        { type: "fill-blank", prompt: "Working together is called _____.", answer: "teamwork" },
        { type: "multiple-choice", prompt: "Which one can be a project?", choices: ["school garden", "sleeping all day", "breaking taps", "throwing rubbish"], answer: "school garden" },
      ],
    },
  ]);
}

function buildTheme8PeaceV4Lessons(theme: P3ThemeBlueprint): LowerPrimaryLesson[] {
  return buildSimpleP3V4Lessons(theme, [
    {
      id: "p3-v4-living-in-peace",
      subThemeTitle: "Living in Peace with Others",
      lessonTitle: "Living in Peace with Others",
      imageUrl: "/images/p3/p3-8-1-living-peace.svg",
      imageCaption: "P3 study card for rules, respect and peaceful living.",
      vocab: [
        { word: "peace", meaning: "living without fighting or fear" },
        { word: "rule", meaning: "an instruction people agree to follow" },
        { word: "respect", meaning: "treating people kindly and fairly" },
        { word: "sorry", meaning: "a word used when we accept that we did wrong" },
        { word: "forgive", meaning: "to stop being angry after someone says sorry" },
        { word: "share", meaning: "to use something together fairly" },
      ],
      story: "Two pupils wanted the same ball. Their friend asked them to take turns. One pupil said sorry for grabbing the ball. They played peacefully again.",
      storyQuestions: ["What did the pupils want?", "How did their friend help?", "What word helped them make peace?"],
      definitionTerm: "living in peace",
      definition: "means staying with others without fighting, using kind words and following good rules.",
      check: "Taking turns with a ball helps children live in peace.",
      categories: [
        { name: "Peaceful words", definition: "words that help people stay calm", examples: ["please", "sorry", "thank you", "let us share"] },
        { name: "Peaceful actions", definition: "actions that help people live well together", examples: ["sharing", "taking turns", "listening", "helping"] },
        { name: "Rules", definition: "instructions that guide good behaviour", examples: ["line up", "do not fight", "keep time", "care for property"] },
      ],
      examples: [
        { name: "taking turns", explanation: "helps people share fairly" },
        { name: "listening", explanation: "helps people understand each other" },
        { name: "saying sorry", explanation: "helps repair a mistake" },
        { name: "following rules", explanation: "keeps home, school and community orderly" },
      ],
      keyPoints: ["Peace starts with kind words.", "Rules help people live together.", "Fighting can hurt people and spoil property.", "Ask a trusted adult for help when a problem is big."],
      numeracyExamples: ["Share 10 pencils among 2 learners.", "Count pupils taking turns.", "Solve word problems about fair sharing."],
      numeracyExercise: ["If 8 pupils share 8 books equally, how many books does each pupil get?", "Draw 4 peaceful actions."],
      activityTitle: "Activity: peace role-play",
      activitySteps: ["Act a small disagreement.", "Use peaceful words.", "Take turns listening.", "Show one fair solution."],
      safetyNote: "Do not use real insults, pushing or fighting during role-play.",
      exercise: [
        { type: "oral", prompt: "What is peace?", answer: "Living without fighting or fear." },
        { type: "written", prompt: "Write two peaceful words.", answer: "Please, sorry, thank you or let us share." },
        { type: "fill-blank", prompt: "Rules help people live in _____.", answer: "peace" },
        { type: "multiple-choice", prompt: "Which action shows peace?", choices: ["sharing", "fighting", "insulting", "grabbing"], answer: "sharing" },
      ],
    },
    {
      id: "p3-v4-child-rights-needs",
      subThemeTitle: "Child Rights, Needs and their Importance",
      lessonTitle: "Child Rights and Needs",
      imageUrl: "/images/p3/p3-8-2-child-rights-needs.svg",
      imageCaption: "P3 study card for child rights, needs and their importance.",
      vocab: [
        { word: "right", meaning: "something every child should have for safety and growth" },
        { word: "need", meaning: "something important for life and growth" },
        { word: "identity", meaning: "who a child is, including name and family" },
        { word: "shelter", meaning: "a safe place to live" },
        { word: "education", meaning: "learning at school, home or community" },
        { word: "health care", meaning: "help to stay healthy or get treatment" },
      ],
      story: "At assembly, the head teacher says children need food, shelter, clothes, education, play and health care. She also says every child should be called by a name and treated with respect.",
      storyQuestions: ["Name two needs from the story.", "Why should a child have a name?", "How should children be treated?"],
      definitionTerm: "child right",
      definition: "is something every child should have to live safely, grow well and be treated with dignity.",
      check: "Education is a child right because children need to learn and grow.",
      categories: [
        { name: "Basic needs", definition: "things children need every day", examples: ["food", "water", "shelter", "clothing"] },
        { name: "Learning and health rights", definition: "rights that help children grow well", examples: ["education", "health care", "play"] },
        { name: "Identity and expression", definition: "rights that help children belong and speak respectfully", examples: ["name", "family", "language", "freedom of speech"] },
      ],
      examples: [
        { name: "food", explanation: "helps children grow and get energy" },
        { name: "school", explanation: "helps children learn" },
        { name: "health centre", explanation: "helps when a child is sick" },
        { name: "play", explanation: "helps children grow, rest and learn teamwork" },
      ],
      keyPoints: ["Rights should protect children.", "Needs help children live and grow.", "Children should also respect the rights of others.", "A child should tell a trusted adult when unsafe or badly treated."],
      numeracyExamples: ["Count needs in a picture.", "Sort needs and wants.", "Make a simple chart of rights."],
      numeracyExercise: ["Draw 5 child needs and count them.", "Sort food, toy, shelter and water into needs/wants."],
      activityTitle: "Activity: rights and needs poster",
      activitySteps: ["Choose one child right.", "Draw it.", "Write why it is important.", "Share respectfully with a friend."],
      safetyNote: "If a child feels unsafe, they should tell a trusted adult such as a parent, guardian, teacher or health worker.",
      exercise: [
        { type: "oral", prompt: "What is a child right?", answer: "Something every child should have for safety and growth." },
        { type: "written", prompt: "Name four child needs.", answer: "Food, water, shelter, clothing, education, health care or play." },
        { type: "fill-blank", prompt: "A safe place to live is called _____.", answer: "shelter" },
        { type: "multiple-choice", prompt: "Which one is a child need?", choices: ["food", "stone", "dust", "broken glass"], answer: "food" },
      ],
    },
    {
      id: "p3-v4-child-responsibility",
      subThemeTitle: "Child Responsibility",
      lessonTitle: "Child Responsibility",
      imageUrl: "/images/p3/p3-8-3-child-responsibility.svg",
      imageCaption: "P3 study card for child responsibility, respect, law and good behaviour.",
      vocab: [
        { word: "responsibility", meaning: "a good duty a person should do" },
        { word: "respect", meaning: "treating people well" },
        { word: "elder", meaning: "an older person" },
        { word: "law and order", meaning: "rules that help people live safely" },
        { word: "behaviour", meaning: "the way a person acts" },
        { word: "country", meaning: "a nation where people live together" },
      ],
      story: "Before class, Daniel sweeps his group area and arranges books. He greets the teacher and helps a younger child carry a bag. His teacher says he is showing responsibility.",
      storyQuestions: ["What did Daniel do before class?", "How did he greet the teacher?", "What value did he show?"],
      definitionTerm: "responsibility",
      definition: "is a good duty that a child can do at home, at school or in the community.",
      check: "Keeping your book safe is a responsibility.",
      categories: [
        { name: "At home", definition: "responsibilities done in the family", examples: ["help with safe chores", "respect parents", "keep things clean"] },
        { name: "At school", definition: "responsibilities done as a learner", examples: ["come on time", "care for books", "listen to teachers", "help classmates"] },
        { name: "In the community", definition: "responsibilities that help people live together", examples: ["keep law and order", "respect elders", "protect property"] },
      ],
      examples: [
        { name: "respecting parents", explanation: "shows good behaviour at home" },
        { name: "keeping books clean", explanation: "shows responsibility at school" },
        { name: "not stealing", explanation: "helps keep law and order" },
        { name: "helping young children", explanation: "shows care" },
      ],
      keyPoints: ["Rights go with responsibilities.", "Children can do safe duties.", "Good behaviour helps a class, family and country.", "Children should not be forced to do dangerous work."],
      numeracyExamples: ["Make a duty timetable.", "Count completed tasks.", "Share class duties fairly."],
      numeracyExercise: ["If 6 pupils sweep and 4 arrange books, how many pupils helped?", "Draw a duty chart with 5 days."],
      activityTitle: "Activity: my responsibility card",
      activitySteps: ["Write or draw one home responsibility.", "Write or draw one school responsibility.", "Say how each one helps people."],
      safetyNote: "Children should do only safe duties and ask adults before using tools, fire or heavy loads.",
      exercise: [
        { type: "oral", prompt: "What is a responsibility?", answer: "A good duty a person should do." },
        { type: "written", prompt: "Name two responsibilities of a child at school.", answer: "Listen, keep books clean, come on time, respect teachers or help classmates." },
        { type: "fill-blank", prompt: "Rights go with _____.", answer: "responsibilities" },
        { type: "multiple-choice", prompt: "Which action shows responsibility?", choices: ["keeping books safe", "breaking desks", "stealing", "fighting"], answer: "keeping books safe" },
      ],
    },
  ]);
}


function buildTheme9CultureGenderV4Lessons(theme: P3ThemeBlueprint): LowerPrimaryLesson[] {
  return buildSimpleP3V4Lessons(theme, [
    {
      id: "p3-v4-customs",
      subThemeTitle: "Customs in our Sub-county/Division",
      lessonTitle: "Customs in Our Community",
      imageUrl: "/images/p3/p3-9-1-customs.svg",
      imageCaption: "P3 study card for marriage, naming, greeting, dressing, language, music, burial and taboos.",
      vocab: [
        { word: "custom", meaning: "a way people do things in a community or culture" },
        { word: "greeting", meaning: "words or actions used to welcome or show respect" },
        { word: "naming", meaning: "giving a name to a child or person" },
        { word: "language", meaning: "words people use to speak, read and write" },
        { word: "music", meaning: "sounds, songs and rhythms people make" },
        { word: "taboo", meaning: "something a community says should not be done" },
      ],
      story: "At school, pupils greet visitors politely. One child explains how babies are named in her family. Another child shares a song from his community. Their teacher reminds them to respect good customs from different families.",
      storyQuestions: ["How did pupils greet visitors?", "What custom did one child explain?", "How should we treat other people's customs?"],
      definitionTerm: "custom",
      definition: "is a way people do important things in a family, clan, tribe or community.",
      check: "Greeting elders politely is a custom in many communities.",
      categories: [
        { name: "Family customs", definition: "customs done in families", examples: ["naming", "greeting", "child-rearing", "sharing meals"] },
        { name: "Community customs", definition: "customs done by many people in a community", examples: ["music", "dance", "dressing", "language"] },
        { name: "Ceremony customs", definition: "customs done during important events", examples: ["marriage", "burial", "introduction ceremonies"] },
      ],
      examples: [
        { name: "greeting", explanation: "shows respect" },
        { name: "language", explanation: "helps people communicate and keep culture" },
        { name: "music and dance", explanation: "help people celebrate and teach culture" },
        { name: "naming", explanation: "gives a child identity" },
      ],
      keyPoints: ["Customs should be discussed respectfully.", "Different communities may have different customs.", "Good customs can teach respect, unity and responsibility.", "Harmful customs should be discussed with trusted adults and teachers."],
      numeracyExamples: ["Count items used in a ceremony picture.", "Make a simple table of greetings in different languages.", "Compare two groups in a role-play."],
      numeracyExercise: ["If 5 pupils sing and 4 pupils drum, how many pupils take part?", "Draw 3 customs and count them."],
      activityTitle: "Activity: respectful custom sharing",
      activitySteps: ["Choose one good custom from home or community.", "Draw it or act it respectfully.", "Say why it is important.", "Listen to other learners without laughing at them."],
      safetyNote: "Do not mock another person's language, dress, greeting or custom.",
      exercise: [
        { type: "oral", prompt: "What is a custom?", answer: "A way people do things in a community or culture." },
        { type: "written", prompt: "Name three customs.", answer: "Greeting, naming, dressing, language, music, marriage or burial." },
        { type: "fill-blank", prompt: "A way to welcome people politely is a _____.", answer: "greeting" },
        { type: "multiple-choice", prompt: "How should we talk about other customs?", choices: ["respectfully", "rudely", "with mockery", "by fighting"], answer: "respectfully" },
      ],
    },
    {
      id: "p3-v4-gender",
      subThemeTitle: "Gender",
      lessonTitle: "Gender and Fairness",
      imageUrl: "/images/p3/p3-9-2-gender.svg",
      imageCaption: "P3 study card for gender, equity, fair work, basic needs and fairness.",
      vocab: [
        { word: "gender", meaning: "understanding boys and girls and treating both fairly" },
        { word: "boy", meaning: "a male child" },
        { word: "girl", meaning: "a female child" },
        { word: "fairness", meaning: "treating people justly" },
        { word: "equity", meaning: "giving people fair help according to their needs" },
        { word: "basic need", meaning: "something important for life and growth" },
      ],
      story: "In P3, boys and girls read, count, sweep, lead groups and play games. The teacher says work should be shared fairly and every child should be respected.",
      storyQuestions: ["Who can read and count?", "How should work be shared?", "How should every child be treated?"],
      definitionTerm: "gender fairness",
      definition: "means treating boys and girls with respect and giving them fair chances to learn, help and lead.",
      check: "Both boys and girls can be class leaders, read books and help with safe duties.",
      categories: [
        { name: "Activities both boys and girls can do", definition: "safe duties and learning tasks for all children", examples: ["reading", "sweeping", "counting", "leading groups", "planting trees"] },
        { name: "Basic needs", definition: "important things every child needs", examples: ["food", "clothes", "education", "health care", "shelter"] },
        { name: "Fair sharing of work", definition: "giving duties in a just way", examples: ["taking turns", "helping each other", "sharing class roles"] },
      ],
      examples: [
        { name: "a girl leading a group", explanation: "shows fairness" },
        { name: "a boy sweeping class", explanation: "shows shared responsibility" },
        { name: "both boys and girls reading", explanation: "shows equal learning chance" },
        { name: "taking turns", explanation: "helps work be fair" },
      ],
      keyPoints: ["Boys and girls should both learn.", "Boys and girls can both help at home and school.", "Do not mock a child for doing a safe duty.", "Fairness helps people live peacefully."],
      numeracyExamples: ["Share 10 duties between two groups fairly.", "Count boys and girls in a group respectfully.", "Make a fair duty chart."],
      numeracyExercise: ["If 6 children share 6 books equally, how many books does each child get?", "Draw a duty chart with boys and girls taking turns."],
      activityTitle: "Activity: fair duty chart",
      activitySteps: ["List four safe class duties.", "Share them fairly among learners.", "Say why both boys and girls can help."],
      safetyNote: "Fairness does not mean children should do dangerous work. Ask adults for help with unsafe tasks.",
      exercise: [
        { type: "oral", prompt: "What is fairness?", answer: "Treating people justly." },
        { type: "written", prompt: "Name two activities both boys and girls can do.", answer: "Read, count, sweep, lead, plant trees or help safely." },
        { type: "fill-blank", prompt: "Boys and girls should both get a chance to _____.", answer: "learn" },
        { type: "multiple-choice", prompt: "Which action shows gender fairness?", choices: ["sharing duties fairly", "mocking boys", "stopping girls from reading", "refusing to help"], answer: "sharing duties fairly" },
      ],
    },
    {
      id: "p3-v4-promoting-preserving-culture",
      subThemeTitle: "Ways of Promoting and Preserving Culture",
      lessonTitle: "Promoting and Preserving Culture",
      imageUrl: "/images/p3/p3-9-3-promoting-preserving-culture.svg",
      imageCaption: "P3 study card for music, dance, drama, documenting, tree planting and preserving culture.",
      vocab: [
        { word: "promote", meaning: "to support or make something known" },
        { word: "preserve", meaning: "to keep something safe for the future" },
        { word: "culture", meaning: "the way of life of a group of people" },
        { word: "drama", meaning: "acting a story" },
        { word: "document", meaning: "to write, draw or record information" },
        { word: "role", meaning: "a duty or part someone has" },
      ],
      story: "The class invites an elder to tell a story. Pupils write key words, sing a local song and plant a tree near the school compound. Their teacher says they are helping to preserve culture and care for the environment.",
      storyQuestions: ["Who told a story?", "What did pupils write?", "Why did they plant a tree?"],
      definitionTerm: "preserving culture",
      definition: "means keeping good customs, language, stories, songs and practices safe for children in the future.",
      check: "Writing down a story from an elder can help preserve culture.",
      categories: [
        { name: "Music, dance and drama", definition: "performing songs, dances and stories", examples: ["local song", "traditional dance", "short drama"] },
        { name: "Documenting", definition: "keeping records by writing, drawing or recording", examples: ["story book", "picture", "audio recording with adult help"] },
        { name: "Sharing roles and responsibilities", definition: "working together to keep culture alive", examples: ["elders tell stories", "children learn songs", "teachers guide activities"] },
        { name: "Planting trees", definition: "caring for cultural and community places", examples: ["shade trees", "fruit trees", "trees near community places"] },
      ],
      examples: [
        { name: "learning local songs", explanation: "keeps music alive" },
        { name: "asking elders questions", explanation: "helps children learn stories and customs" },
        { name: "writing stories", explanation: "keeps information for the future" },
        { name: "planting trees", explanation: "protects places and shows care" },
      ],
      keyPoints: ["Good culture should be respected and preserved.", "Children can learn from parents, guardians, teachers and elders.", "Writing, drawing and performing help keep culture alive.", "Harmful practices should not be copied."],
      numeracyExamples: ["Count songs performed by groups.", "Count trees planted.", "Make a simple table of cultural activities."],
      numeracyExercise: ["If 3 groups sing and 2 groups dance, how many groups perform?", "Draw 4 ways to preserve culture."],
      activityTitle: "Activity: culture record card",
      activitySteps: ["Ask a trusted adult for one good custom or story.", "Draw or write it.", "Share it respectfully with the class."],
      safetyNote: "Only record or photograph people with permission from adults and teachers.",
      exercise: [
        { type: "oral", prompt: "What does preserve mean?", answer: "To keep something safe for the future." },
        { type: "written", prompt: "Name three ways to preserve culture.", answer: "Music, dance, drama, documenting, storytelling or planting trees." },
        { type: "fill-blank", prompt: "Acting a story is called _____.", answer: "drama" },
        { type: "multiple-choice", prompt: "Which action preserves culture?", choices: ["writing down a story", "laughing at language", "destroying books", "mocking elders"], answer: "writing down a story" },
      ],
    },
  ]);
}

function buildTheme11TechnologyV4Lessons(theme: P3ThemeBlueprint): LowerPrimaryLesson[] {
  return buildSimpleP3V4Lessons(theme, [
    {
      id: "p3-v4-concept-technology",
      subThemeTitle: "Concept of Technology",
      lessonTitle: "What is Technology?",
      imageUrl: "/images/p3/p3-11-1-concept-technology.svg",
      imageCaption: "P3 study card for natural and artificial materials such as banana fibres, palm leaves, wire, plastic and straws.",
      vocab: [
        { word: "technology", meaning: "using knowledge, tools and materials to solve problems or make useful things" },
        { word: "natural material", meaning: "a material that comes from nature" },
        { word: "artificial material", meaning: "a material made or changed by people" },
        { word: "banana fibre", meaning: "strong strips from a banana plant" },
        { word: "wire", meaning: "thin metal used for tying, joining or making things" },
        { word: "plastic", meaning: "a man-made material used to make many objects" },
      ],
      story: "Pupils collect clean straws, banana fibres and bottle tops. Their teacher shows them how people use materials and simple tools to make useful things. She says this is basic technology.",
      storyQuestions: ["Name two materials pupils collected.", "What did the teacher call using materials to make useful things?", "Why should materials be clean and safe?"],
      definitionTerm: "technology",
      definition: "is using knowledge, tools and materials to solve problems or make useful things.",
      check: "Making a toy car from clean bottle tops and wire is a simple technology activity.",
      categories: [
        { name: "Natural materials", definition: "materials from plants, animals or the earth", examples: ["banana fibres", "palm leaves", "wood", "clay"] },
        { name: "Artificial materials", definition: "materials made or changed by people", examples: ["plastic", "wire", "paper", "metal tins"] },
        { name: "Simple tools", definition: "things used to make work easier", examples: ["scissors with teacher help", "ruler", "needle with adult help", "hammer with adult help"] },
      ],
      examples: [
        { name: "banana fibre", explanation: "can be used to make ropes or crafts" },
        { name: "palm leaves", explanation: "can be used to weave mats or baskets" },
        { name: "wire", explanation: "can join parts of a toy" },
        { name: "plastic", explanation: "can be reused safely for crafts" },
      ],
      keyPoints: ["Technology solves problems.", "Materials can be natural or artificial.", "Use clean and safe materials.", "Sharp tools need adult or teacher guidance."],
      numeracyExamples: ["Count materials before making an item.", "Measure straws using a ruler.", "Sort natural and artificial materials."],
      numeracyExercise: ["Count 6 bottle tops and 4 straws. How many materials are there?", "Sort 5 materials into natural and artificial groups."],
      activityTitle: "Activity: material sorting",
      activitySteps: ["Collect safe clean materials.", "Sort them into natural and artificial groups.", "Say one thing each material can make."],
      safetyNote: "Do not use sharp wire, broken glass, dirty tins or sharp tools without adult guidance.",
      exercise: [
        { type: "oral", prompt: "What is technology?", answer: "Using knowledge, tools and materials to solve problems or make useful things." },
        { type: "written", prompt: "Name two natural materials and two artificial materials.", answer: "Natural: banana fibre, palm leaves. Artificial: plastic, wire." },
        { type: "fill-blank", prompt: "A material made by people is called _____.", answer: "artificial" },
        { type: "multiple-choice", prompt: "Which one is a natural material?", choices: ["banana fibre", "plastic bottle", "wire", "metal tin"], answer: "banana fibre" },
      ],
    },
    {
      id: "p3-v4-processing-natural-materials",
      subThemeTitle: "Processing and Making Things from Natural Materials",
      lessonTitle: "Making Things from Natural Materials",
      imageUrl: "/images/p3/p3-11-2-processing-natural-materials.svg",
      imageCaption: "P3 study card for making things from food, fibre and leaves.",
      vocab: [
        { word: "process", meaning: "to change a material into something useful" },
        { word: "fibre", meaning: "strong thread-like material from plants or animals" },
        { word: "product", meaning: "something made from materials" },
        { word: "mat", meaning: "a woven item used for sitting or covering a floor" },
        { word: "rope", meaning: "a strong cord used for tying" },
        { word: "juice", meaning: "a drink made from fruits" },
      ],
      story: "Grandmother cuts banana fibres and dries them. Later, she twists them into a rope. At school, pupils squeeze oranges to make juice. They learn that natural materials can be processed into useful products.",
      storyQuestions: ["What did grandmother make from banana fibres?", "What fruit drink did pupils make?", "What does process mean?"],
      definitionTerm: "processing natural materials",
      definition: "means changing materials from nature into useful products.",
      check: "Twisting banana fibres into rope is processing a natural material.",
      categories: [
        { name: "Food products", definition: "things made from edible natural materials", examples: ["juice", "salads", "cooked food"] },
        { name: "Fibre products", definition: "things made from plant fibres", examples: ["ropes", "mats", "baskets"] },
        { name: "Leaf products", definition: "things made from leaves", examples: ["mats", "wrappers", "decorations"] },
      ],
      examples: [
        { name: "banana fibre rope", explanation: "made by drying and twisting fibres" },
        { name: "palm leaf mat", explanation: "made by weaving leaves" },
        { name: "fruit juice", explanation: "made by squeezing fruits" },
        { name: "salad", explanation: "made by preparing clean vegetables" },
      ],
      keyPoints: ["Natural materials come from plants, animals or the earth.", "Processing changes materials into useful products.", "Products can be used at home or sold.", "Cleanliness is important when making food products."],
      numeracyExamples: ["Count leaves used for weaving.", "Measure rope length using hand spans.", "Share fruit pieces equally."],
      numeracyExercise: ["If 3 pupils each bring 4 leaves, how many leaves are brought?", "Share 12 fruits among 4 groups."],
      activityTitle: "Activity: product steps drawing",
      activitySteps: ["Choose one natural material.", "Draw the material.", "Draw the product made from it.", "Say the steps used to make it."],
      safetyNote: "Food products should be made with clean hands and adult/teacher guidance. Do not use knives alone.",
      exercise: [
        { type: "oral", prompt: "What is processing?", answer: "Changing a material into something useful." },
        { type: "written", prompt: "Name two products made from natural materials.", answer: "Rope, mat, basket, juice, salad or cooked food." },
        { type: "fill-blank", prompt: "Banana fibres can be made into a _____.", answer: "rope" },
        { type: "multiple-choice", prompt: "Which product can be made from fruits?", choices: ["juice", "wire", "nail", "stone"], answer: "juice" },
      ],
    },
    {
      id: "p3-v4-making-artificial-materials",
      subThemeTitle: "Making Things from Artificial Materials",
      lessonTitle: "Making Things from Artificial Materials",
      imageUrl: "/images/p3/p3-11-3-making-artificial-materials.svg",
      imageCaption: "P3 study card for recycling and making toy cars, flowers, candles, bags and decorations.",
      vocab: [
        { word: "recycling", meaning: "using old materials again to make something useful" },
        { word: "toy", meaning: "something children play with" },
        { word: "decoration", meaning: "something used to make a place look nice" },
        { word: "bag", meaning: "something used for carrying items" },
        { word: "candle", meaning: "a stick of wax that gives light when lit" },
        { word: "artificial material", meaning: "a material made or changed by people" },
      ],
      story: "Pupils bring clean boxes, bottle tops and paper. With the teacher's help, they make toy cars and paper flowers. They learn that some artificial materials can be reused instead of being thrown away.",
      storyQuestions: ["What materials did pupils bring?", "What did they make?", "Why is reuse helpful?"],
      definitionTerm: "recycling",
      definition: "means using old or waste materials again to make useful things.",
      check: "Making a toy car from clean bottle tops is recycling.",
      categories: [
        { name: "Toys", definition: "things children can play with", examples: ["toy car", "toy bicycle", "paper ball"] },
        { name: "Decorations", definition: "things that make places look nice", examples: ["paper flowers", "wall hangings", "cards"] },
        { name: "Useful items", definition: "things that help people carry or store items", examples: ["bags", "boxes", "containers"] },
      ],
      examples: [
        { name: "toy car", explanation: "can be made from boxes, sticks and bottle tops" },
        { name: "paper flower", explanation: "can be used for decoration" },
        { name: "bag", explanation: "can be made or decorated from safe materials" },
        { name: "candle", explanation: "should only be made or used with adult guidance" },
      ],
      keyPoints: ["Recycling reduces waste.", "Use only clean and safe materials.", "Broken glass, sharp tins and dirty plastics are dangerous.", "Some products can be sold, used, worn or used for decoration."],
      numeracyExamples: ["Count bottle tops for wheels.", "Measure paper strips.", "Group materials by colour or size."],
      numeracyExercise: ["A toy car needs 4 bottle tops. How many bottle tops are needed for 3 toy cars?", "Sort 10 clean materials into 2 equal groups."],
      activityTitle: "Activity: make a safe toy plan",
      activitySteps: ["Draw a toy or decoration.", "List the safe materials needed.", "Count how many pieces you need.", "Make it only with teacher guidance."],
      safetyNote: "Do not use sharp, dirty or broken materials. Candles, fire, knives and wires need adult guidance.",
      exercise: [
        { type: "oral", prompt: "What is recycling?", answer: "Using old materials again to make useful things." },
        { type: "written", prompt: "Name two things made from artificial materials.", answer: "Toy car, toy bicycle, flowers, candles, bags or decorations." },
        { type: "fill-blank", prompt: "A toy car can use bottle tops as _____.", answer: "wheels" },
        { type: "multiple-choice", prompt: "Which material should children avoid?", choices: ["broken glass", "clean paper", "clean box", "bottle top"], answer: "broken glass" },
      ],
    },
  ]);
}

function buildTheme12EnergyV4Lessons(theme: P3ThemeBlueprint): LowerPrimaryLesson[] {
  return buildSimpleP3V4Lessons(theme, [
    {
      id: "p3-v4-sources-energy",
      subThemeTitle: "Sources of Energy",
      lessonTitle: "Sources of Energy",
      imageUrl: "/images/p3/p3-12-1-sources-energy.svg",
      imageCaption: "P3 study card for wind, water, fuel, diesel, petrol, wood, charcoal, paraffin and electricity.",
      vocab: [
        { word: "energy", meaning: "the power that helps people and things do work" },
        { word: "source", meaning: "where something comes from" },
        { word: "wind", meaning: "moving air" },
        { word: "fuel", meaning: "something used to produce heat or power" },
        { word: "electricity", meaning: "energy used for light and machines" },
        { word: "charcoal", meaning: "fuel made from wood" },
      ],
      story: "At home, Mama cooks food using charcoal. At school, lights use electricity. On a windy day, clothes dry quickly on the line. The teacher says these are examples of energy being used.",
      storyQuestions: ["What fuel did Mama use?", "What uses electricity at school?", "What helped clothes dry?"],
      definitionTerm: "energy",
      definition: "is the power that helps people, animals, plants and machines do work or make things happen.",
      check: "Fire gives heat energy for cooking. Electricity gives energy for lighting.",
      categories: [
        { name: "Natural sources", definition: "energy sources from nature", examples: ["sun", "wind", "water"] },
        { name: "Fuel sources", definition: "materials burned or used for heat and power", examples: ["wood", "charcoal", "paraffin", "petrol", "diesel"] },
        { name: "Electricity", definition: "energy used for lights, radios, phones and machines", examples: ["bulb", "radio", "charging phone with adult guidance"] },
      ],
      examples: [
        { name: "sun", explanation: "gives light and heat" },
        { name: "wind", explanation: "moves things and dries clothes" },
        { name: "charcoal", explanation: "used for cooking in some homes" },
        { name: "electricity", explanation: "used for lighting and appliances" },
      ],
      keyPoints: ["Energy helps us cook, see, move, dry, warm and use machines.", "Some energy sources are natural.", "Some energy sources can be dangerous if misused.", "Children should not play with fuel, fire or electricity."],
      numeracyExamples: ["Add and subtract energy examples as revision.", "Count energy sources in a picture.", "Sort natural and artificial energy sources."],
      numeracyExercise: ["Name 4 sources of energy and count them.", "If 3 bulbs are on and 1 is switched off, how many remain on?"],
      activityTitle: "Activity: energy source cards",
      activitySteps: ["Draw four energy sources.", "Sort them into natural and artificial/fuel sources.", "Say one use of each source."],
      safetyNote: "Do not touch sockets, fuel, fire or live wires. Ask an adult for help.",
      exercise: [
        { type: "oral", prompt: "What is energy?", answer: "Power that helps people and things do work." },
        { type: "written", prompt: "Name four sources of energy.", answer: "Sun, wind, water, wood, charcoal, paraffin, petrol, diesel or electricity." },
        { type: "fill-blank", prompt: "Moving air is called _____.", answer: "wind" },
        { type: "multiple-choice", prompt: "Which source gives light in a bulb?", choices: ["electricity", "stone", "soil", "shoe"], answer: "electricity" },
      ],
    },
    {
      id: "p3-v4-saving-energy",
      subThemeTitle: "Ways of Saving Energy",
      lessonTitle: "Saving Energy",
      imageUrl: "/images/p3/p3-12-2-saving-energy.svg",
      imageCaption: "P3 study card for energy-saving stoves, bulbs, switching off appliances, putting out fires and planting trees.",
      vocab: [
        { word: "save energy", meaning: "use less energy and avoid wasting it" },
        { word: "appliance", meaning: "a machine or device used at home or school" },
        { word: "energy-saving bulb", meaning: "a bulb that uses less electricity" },
        { word: "energy-saving stove", meaning: "a stove that uses less fuel" },
        { word: "switch off", meaning: "turn off a device or light" },
        { word: "tree planting", meaning: "putting seedlings in soil so they grow into trees" },
      ],
      story: "Before leaving class, the monitor switches off the light. At home, Father covers the saucepan while cooking and puts out the fire after use. The family also plants trees. These actions save energy.",
      storyQuestions: ["What did the monitor switch off?", "Why did Father cover the saucepan?", "Why does the family plant trees?"],
      definitionTerm: "saving energy",
      definition: "means using energy carefully so it is not wasted.",
      check: "Switching off an unused light saves energy.",
      categories: [
        { name: "Saving electricity", definition: "using less electrical energy", examples: ["switch off lights", "use energy-saving bulbs", "unplug safely with adult help"] },
        { name: "Saving cooking fuel", definition: "using less firewood, charcoal or paraffin", examples: ["cover saucepans", "use improved stoves", "put out fires after use"] },
        { name: "Planting trees", definition: "replacing trees used for fuel and protecting the environment", examples: ["fruit trees", "shade trees", "woodlots"] },
      ],
      examples: [
        { name: "switching off lights", explanation: "saves electricity" },
        { name: "covering a saucepan", explanation: "helps food cook faster and saves fuel" },
        { name: "putting out fire", explanation: "prevents waste and accidents" },
        { name: "planting trees", explanation: "helps replace firewood and protect the environment" },
      ],
      keyPoints: ["Saving energy saves money and resources.", "Saving energy protects the environment.", "Children can remind adults but should not handle dangerous appliances or fires.", "Trees should be planted to replace those cut for fuel."],
      numeracyExamples: ["Count bulbs switched off.", "Measure spacing for tree planting with adult help.", "Solve multiplication/division revision with tree seedlings."],
      numeracyExercise: ["If 4 rows have 5 trees each, how many trees are planted?", "If 6 lights are on and 2 are switched off, how many remain on?"],
      activityTitle: "Activity: save energy reminder",
      activitySteps: ["Draw a light bulb or stove.", "Write one message about saving energy.", "Share it at home or in class."],
      safetyNote: "Do not touch switches with wet hands. Do not put out fires alone unless guided by an adult.",
      exercise: [
        { type: "oral", prompt: "What does saving energy mean?", answer: "Using energy carefully so it is not wasted." },
        { type: "written", prompt: "Name three ways to save energy.", answer: "Switch off lights, use energy-saving bulbs/stoves, cover saucepans, put out fires, plant trees." },
        { type: "fill-blank", prompt: "A bulb that uses less electricity is an energy-saving _____.", answer: "bulb" },
        { type: "multiple-choice", prompt: "Which action saves energy?", choices: ["switching off unused lights", "leaving lights on", "wasting charcoal", "playing with fire"], answer: "switching off unused lights" },
      ],
    },
    {
      id: "p3-v4-dangers-energy",
      subThemeTitle: "Dangers of Energy and Ways of Avoiding Them",
      lessonTitle: "Dangers of Energy and Safety",
      imageUrl: "/images/p3/p3-12-3-dangers-energy.svg",
      imageCaption: "P3 study card for live wires, fire, strong wind, storms, drought and avoiding accidents.",
      vocab: [
        { word: "danger", meaning: "something that can harm people or property" },
        { word: "live wire", meaning: "an electric wire that can shock or kill" },
        { word: "fire", meaning: "heat and flame that can burn" },
        { word: "storm", meaning: "bad weather with strong wind, rain or thunder" },
        { word: "drought", meaning: "a long time with little or no rain" },
        { word: "accident", meaning: "an unexpected event that can hurt people or damage things" },
      ],
      story: "After a storm, pupils see a wire on the ground near the road. Their teacher tells them not to touch it and to call an adult. At home, children are also warned not to play with fire or push objects into sockets.",
      storyQuestions: ["What did pupils see on the ground?", "What did the teacher tell them?", "What should children not play with?"],
      definitionTerm: "danger of energy",
      definition: "is a way energy can harm people, animals, plants or property when it is not used safely.",
      check: "A live wire is dangerous because it can give an electric shock.",
      categories: [
        { name: "Electrical dangers", definition: "dangers from electricity", examples: ["live wires", "sockets", "wet hands near switches"] },
        { name: "Fire and fuel dangers", definition: "dangers from heat, flames or fuels", examples: ["burns", "house fires", "paraffin accidents"] },
        { name: "Weather energy dangers", definition: "dangers from wind, storms, lightning or drought", examples: ["falling branches", "storm damage", "dry crops"] },
      ],
      examples: [
        { name: "live wire", explanation: "do not touch; call an adult" },
        { name: "fire", explanation: "can burn people and property" },
        { name: "strong wind", explanation: "can break branches or roofs" },
        { name: "drought", explanation: "can dry crops and water sources" },
      ],
      keyPoints: ["Never touch a live wire.", "Never push nails, sticks or fingers into sockets.", "Never play with fire, paraffin, petrol or candles.", "Stay indoors or with adults during storms.", "Report danger quickly to a trusted adult."],
      numeracyExamples: ["Measure safe distance from danger in steps with teacher guidance.", "Count warning signs in a picture.", "Solve revision problems using time and money safely."],
      numeracyExercise: ["Draw 3 energy dangers and count them.", "If 2 warning posters are made by one group and 3 by another, how many posters are made?"],
      activityTitle: "Activity: danger warning poster",
      activitySteps: ["Choose one energy danger.", "Draw a clear warning picture.", "Write a short message such as Do not touch live wires.", "Tell an adult what your poster means."],
      safetyNote: "This is a safety lesson. Do not demonstrate dangerous actions. Only draw and talk about them.",
      exercise: [
        { type: "oral", prompt: "Why is a live wire dangerous?", answer: "It can give an electric shock or kill." },
        { type: "written", prompt: "Name three energy dangers.", answer: "Live wires, fire, sockets, petrol, storms, strong wind or drought." },
        { type: "fill-blank", prompt: "Children should not play with _____.", answer: "fire" },
        { type: "multiple-choice", prompt: "What should you do when you see a live wire?", choices: ["call an adult", "touch it", "jump on it", "play near it"], answer: "call an adult" },
      ],
    },
  ]);
}


const TERM_MEANINGS: Record<string, string> = {
  "name of our sub-county/division": "the name of the local area where people live, learn and work",
  "difference between map and picture": "a map shows a place from above, while a picture shows how something looks",
  "compass direction cardinal points (east, north, west, south)": "the four main directions used to locate places",
  "hills": "raised areas of land",
  "valleys": "low land between hills or mountains",
  "lakes": "large bodies of water surrounded by land",
  "rivers": "flowing water that moves in a channel",
  "swamps": "wet places with water-loving plants",
  "ponds": "small bodies of still water",
  "mountains": "very high raised land",
  "tribes and clans": "groups of people connected by family, origin or culture",
  "administrative set-up": "the way leaders and offices are arranged in an area",
  "political and cultural leaders": "people who guide communities in government or culture",
  "money-generating and subsistence activities": "work people do to earn money or provide for their families",
  "casual labouring": "temporary work done for payment",
  "trading": "buying and selling goods",
  "farming/animal rearing": "growing crops and keeping animals",
  "tailoring": "making or repairing clothes",
  "education": "learning in school, at home or in the community",
  "health": "the condition of the body and mind being well",
  "communication": "sending and receiving messages",
  "transport": "moving people or goods from one place to another",
  "water supply": "where people get clean water",
  "security": "keeping people and property safe",
  "soil": "the top layer of the earth where many plants grow",
  "sand": "soil with large loose particles that lets water pass quickly",
  "clay": "soil with very fine particles that holds water",
  "loam": "fertile soil with sand, clay and humus mixed together",
  "floods": "too much water covering land that is normally dry",
  "drought": "a long time with little or no rain",
  "air has weight": "air is matter, so it has weight even when we cannot see it",
  "air moves things": "moving air can push objects like paper, leaves or clothes",
  "air occupies space": "air takes up room in a container or balloon",
  "air can be felt": "we can feel air when it moves as wind",
  "how rain is formed": "water vapour cools, forms clouds and falls as rain",
  "water cycle": "the movement of water from earth to air and back again",
  "evaporation and condensation": "water changes to vapour, then cools back into droplets",
  "importance of water": "water is needed for drinking, cooking, washing, plants and animals",
  "sources of water": "places where people get water, such as wells, springs, rivers and rain",
  "water harvesting": "collecting and storing rainwater for later use",
  "types of living things": "groups of things that grow, feed, breathe and reproduce",
  "insects": "small animals with six legs",
  "animals": "living things that move, feed and respond to their surroundings",
  "birds": "animals with feathers, wings and beaks",
  "fish": "animals that live in water and breathe using gills",
  "domestic birds": "birds kept by people at home or on farms",
  "wild birds": "birds that live on their own in the environment",
  "crested crane as national symbol": "the bird shown on Uganda's national emblem and flag",
  "common insects": "insects often seen around homes, gardens or schools",
  "examples of plants": "plants learners can see around home, school or gardens",
  "maize": "a food crop grown for its grains",
  "yams": "food plants with edible tubers",
  "sisal": "a fibre plant used to make ropes and mats",
  "cactus": "a plant that can survive in dry places",
  "roots": "plant parts that hold the plant and take in water",
  "stem": "the part that holds a plant upright and carries water",
  "leaves": "plant parts that help make food",
  "flowers": "plant parts that help form fruits and seeds",
  "seeds": "plant parts that can grow into new plants",
  "garden": "a place where crops or plants are grown",
  "hoe": "a tool used for digging soil",
  "panga": "a sharp cutting tool used with adult guidance",
  "slasher": "a tool used to cut grass with adult guidance",
  "concept of resources": "useful things people need or use",
  "water": "a liquid needed by people, animals and plants",
  "time": "minutes, hours, days and seasons used to plan activities",
  "money": "coins and notes used to buy and sell goods or services",
  "food": "what people and animals eat to live and grow",
  "fuel": "something burned or used to produce energy",
  "firewood": "wood used as fuel for cooking or heating",
  "charcoal": "fuel made from wood",
  "meaning of spending": "using money or resources to get something",
  "budgeting": "planning how to use money or resources",
  "negotiating": "discussing to agree on a price or plan",
  "prioritising": "choosing the most important need first",
  "projects as activities for knowledge, skills or money": "planned activities people do to learn, solve problems or earn income",
  "bee keeping": "keeping bees safely for honey, wax or pollination",
  "concept of living in peace": "staying together without fighting",
  "observing rules and regulations": "following agreed instructions that keep people safe and orderly",
  "respecting each other": "treating other people kindly and fairly",
  "concept of child rights": "things every child should have for safety, growth and dignity",
  "identity": "who a child is, including name and family/community belonging",
  "freedom of speech": "being allowed to speak respectfully",
  "shelter": "a safe place to live",
  "play": "activities children do for enjoyment and growth",
  "clothing": "things worn to cover and protect the body",
  "language": "words people use to speak, read and write",
  "marriage": "a family custom where adults become husband and wife",
  "naming": "giving a name to a child or person",
  "greeting": "words or actions used to welcome or show respect",
  "dressing": "the way people wear clothes",
  "music": "sounds, songs and rhythms people make",
  "burial": "customs used when a person has died",
  "concept of gender": "understanding boys and girls and treating both fairly",
  "equity": "fairness according to people's needs",
  "fair distribution of work": "sharing work justly among people",
  "mosquito": "a small flying insect that can spread malaria",
  "rat": "a small animal that can spoil food and spread disease",
  "louse": "a small insect that can live in hair or clothes",
  "cockroach": "an insect often found in dirty places",
  "housefly": "a fly that can carry germs to food",
  "tsetse fly": "a fly that can spread sleeping sickness",
  "flea": "a small jumping insect that can bite",
  "bed-bug": "a small insect that bites people while they sleep",
  "malaria": "a disease spread by mosquitoes",
  "cholera": "a dangerous disease often linked to dirty water or poor sanitation",
  "typhoid": "a disease often linked to unsafe food or water",
  "yellow fever": "a disease spread by some mosquitoes",
  "diarrhoea": "passing watery stool many times",
  "dysentery": "diarrhoea with blood or mucus that needs medical help",
  "sleeping sickness": "a disease spread by tsetse flies",
  "concept of hiv/aids": "HIV is a virus that weakens the body; AIDS is a serious stage of HIV illness",
  "not sharing sharp objects": "not using the same razor blade, needle or other sharp item with another person",
  "natural and artificial materials": "materials from nature and materials made or changed by people",
  "banana fibres": "strong strips from banana plants used for making items",
  "palm leaves": "leaves from palm plants used for making items",
  "wire": "thin metal used to tie, join or make things",
  "plastic": "a man-made material used to make many objects",
  "straws": "thin tubes or plant stems that can be used in making things",
  "recycling": "using old materials again to make something useful",
  "natural energy sources": "energy sources from nature such as wind, sun and water",
  "wind": "moving air",
  "artificial sources": "energy sources made or processed by people",
  "diesel": "fuel used in some engines",
  "petrol": "fuel used in some vehicles and machines",
  "wood": "hard material from trees",
  "paraffin": "fuel used in some lamps or stoves",
  "electricity": "energy used for lighting, machines and appliances",
  "energy-saving stoves": "stoves that use less fuel",
  "energy-saving bulbs": "bulbs that use less electricity",
  "switching off appliances": "turning off devices when they are not in use",
  "planting trees": "putting seedlings in soil so they grow into trees",
  "live wires": "electric wires that can shock or kill",
  "fire": "heat and flame that can help or harm depending on how it is used",
  "strong wind": "moving air that can damage things",
  "storm": "bad weather with strong wind, rain or thunder",
};

function normaliseTerm(value: string): string {
  return value.trim().toLowerCase();
}

function termMeaning(term: string, subtheme: P3SubthemeBlueprint): string {
  const key = normaliseTerm(term);
  if (TERM_MEANINGS[key]) return TERM_MEANINGS[key];
  if (key.startsWith("concept of ")) return `what ${term.replace(/^Concept of\s+/i, "").toLowerCase()} means`;
  if (key.startsWith("meaning of ")) return `what ${term.replace(/^Meaning of\s+/i, "").toLowerCase()} means`;
  if (key.startsWith("ways of ")) return `different actions people can take to ${term.replace(/^Ways of\s+/i, "").toLowerCase()}`;
  if (key.startsWith("importance of ")) return `why ${term.replace(/^Importance of\s+/i, "").toLowerCase()} is useful`;
  return `an important example in this lesson about ${lowerFirst(subtheme.title)}`;
}

function cleanLessonTitle(title: string): string {
  return title.replace(/\s+in our Sub-county\/Division/gi, "").replace(/\s+of our Sub-county\/Division/gi, "").trim();
}

function buildGenericLowerPrimaryLesson(theme: P3ThemeBlueprint, subtheme: P3SubthemeBlueprint, index: number): LowerPrimaryLesson {
  const polish = SUBTHEME_POLISH[subtheme.id];
  const keyItems = subtheme.keyContent.filter(Boolean);
  const first = keyItems[0] ?? subtheme.title;
  const lessonTitle = cleanLessonTitle(subtheme.title);
  const categories = keyItems.slice(0, Math.min(5, keyItems.length)).map((item) => ({
    name: item,
    definition: termMeaning(item, subtheme),
    examples: keyItems.filter((other) => other !== item).slice(0, 3).length > 0 ? keyItems.filter((other) => other !== item).slice(0, 3) : [item],
  }));

  return {
    id: `${subtheme.id}-v4`,
    classLevel: "P3",
    term: theme.term as "Term I" | "Term II" | "Term III",
    curriculumMode: "thematic",
    themeTitle: theme.title,
    subThemeTitle: subtheme.title,
    lessonTitle,
    learningArea: "Integrated Theme",
    blocks: [
      {
        kind: "vocabulary",
        title: "New words",
        words: keyItems.slice(0, 6).map((word) => ({ word, meaning: termMeaning(word, subtheme) })),
      },
      {
        kind: "story",
        title: "Read and talk",
        text: `At school and at home, children can learn about ${lowerFirst(lessonTitle)}. They can see examples like ${sentenceList(keyItems, 4)} in their community or talk about them with a teacher, parent or guardian.`,
        questions: [
          `What is this lesson about?`,
          `Name one example of ${lowerFirst(lessonTitle)}.`,
          `How can children act safely and respectfully in this lesson?`,
        ],
      },
      {
        kind: "definition",
        term: lessonTitle,
        definition: polish?.explain ?? `${lessonTitle} is part of ${lowerFirst(theme.title)} that children learn using examples around home, school and the community.` ,
        simpleCheck: `${first} is one example to remember in this lesson.`,
      },
      {
        kind: "categories",
        title: "Types / examples to know",
        categories,
      },
      {
        kind: "examples",
        title: "Examples around us",
        examples: keyItems.slice(0, 6).map((item) => ({
          name: item,
          explanation: termMeaning(item, subtheme),
          localContext: "Use an example from home, school or the sub-county/division where possible.",
        })),
      },
      {
        kind: "diagram",
        title: "Look at the picture",
        imageUrl: subtheme.imageUrl,
        caption: subtheme.imageCaption,
        labels: keyItems.slice(0, 6),
      },
      {
        kind: "numeracy",
        skill: "theme counting, sorting and comparing",
        examples: [polish?.mathPractice ?? "Count, sort, compare or measure examples from the theme."],
        exercise: [
          `Count 5 examples connected to ${lowerFirst(lessonTitle)}.`,
          `Put the examples into two groups and say which group has more.`,
        ],
      },
      {
        kind: "activity",
        title: "Activity",
        instructions: [
          polish?.localTask ?? `Name or draw examples of ${lowerFirst(lessonTitle)} from your area.`,
          polish?.creativeAction ?? "Draw, role-play or make a simple poster about the lesson.",
          polish?.valueAction ?? "Use respectful words and safe actions.",
        ],
        safetyNote: safeGuidance(theme, subtheme),
      },
      {
        kind: "exercise",
        title: "Exercise",
        questions: [
          { type: "oral", prompt: `What is ${lowerFirst(lessonTitle)}?`, answer: polish?.explain ?? `${lessonTitle} is part of ${lowerFirst(theme.title)}.` },
          { type: "written", prompt: `Name two examples from this lesson.`, answer: sentenceList(keyItems, 2) },
          { type: "fill-blank", prompt: `${first} is part of this lesson about _____.`, answer: lessonTitle },
          { type: "multiple-choice", prompt: `Which one belongs to this lesson?`, choices: [first, "a magic password", "a football score", "a torn shoe lace"], answer: first },
          { type: "written", prompt: `Write one good action for this lesson.`, answer: polish?.valueAction ?? "Use respectful words and safe actions." },
        ],
      },
    ],
  };
}

function buildLowerPrimaryV4Pilot(theme: P3ThemeBlueprint): LowerPrimaryLesson[] {
  if (theme.id === "p3-theme-1-subcounty-division") return buildTheme1SubcountyV4Lessons(theme);
  if (theme.id === "p3-theme-2-livelihood") return buildTheme2LivelihoodV4Lessons(theme);
  if (theme.id === "p3-theme-3-environment") return buildTheme3EnvironmentV4Lessons(theme);
  if (theme.id === "p3-theme-4-environment-weather") return buildTheme4WeatherV4Lessons(theme);
  if (theme.id === "p3-theme-5-animals") return buildTheme5AnimalsV4Lessons(theme);
  if (theme.id === "p3-theme-6-plants") return buildPlantsV4Lessons(theme);
  if (theme.id === "p3-theme-7-managing-resources") return buildTheme7ResourcesV4Lessons(theme);
  if (theme.id === "p3-theme-8-keeping-peace") return buildTheme8PeaceV4Lessons(theme);
  if (theme.id === "p3-theme-9-culture-gender") return buildTheme9CultureGenderV4Lessons(theme);
  if (theme.id === "p3-theme-10-health") return buildTheme10HealthV4Lessons(theme);
  if (theme.id === "p3-theme-11-basic-technology") return buildTheme11TechnologyV4Lessons(theme);
  if (theme.id === "p3-theme-12-energy") return buildTheme12EnergyV4Lessons(theme);
  return theme.subthemes.map((subtheme, index) => buildGenericLowerPrimaryLesson(theme, subtheme, index));
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
