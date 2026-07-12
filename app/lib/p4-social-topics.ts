import type { UpperPrimaryLesson } from "@/lib/content-blocks";
import type { Topic } from "@/lib/topics";
import { addUpperPrimarySocialV4 } from "@/lib/v4-social-helpers";

// P4 Social Studies live beta content layer.
// Source map: content/curriculum/p4-social-studies.json
// Rule: NCDC first, build second. This file follows the official NCDC Primary Four Social Studies Syllabus, 2010.
// Status: live beta until checked by a human reviewer for district-local examples, tone and source fidelity.

const P4_LOCATION_DISTRICT_V4: UpperPrimaryLesson[] = [
  { id: "p4-v4-district-location", classLevel: "P4", term: "Term I", curriculumMode: "subject", subject: "Social Studies", topicTitle: "Location of Our District in Uganda", subTopicTitle: "District Location and Map Skills", lessonTitle: "District Location and Map Skills", blocks: [
    { kind: "definition", term: "district", definition: "is an administrative area in Uganda with leaders, people, services and important places.", simpleCheck: "Kampala, Wakiso, Gulu and Mbale are examples of districts." },
    { kind: "categories", title: "Map skills", categories: [{ name: "Map", definition: "a drawing of a place as seen from above", examples: ["map of Uganda", "map of a district"] }, { name: "Map title", definition: "tells what the map is about", examples: ["Map of Uganda"] }, { name: "Map key", definition: "explains symbols used on a map", examples: ["road symbol", "river symbol", "school symbol"] }, { name: "Compass directions", definition: "north, east, south and west", examples: ["Kenya is east of Uganda"] }] },
    { kind: "diagram", title: "District map and compass", imageUrl: "/images/social-studies/p4-district-map-compass.svg", caption: "Use map title, key and compass directions to locate a district.", labels: ["title", "key", "north", "east", "south", "west"] },
    { kind: "activity", title: "Map practice", instructions: ["Name your district.", "Name one neighbouring district.", "Draw a simple map with a title and key.", "Use north, east, south or west in one sentence."], safetyNote: "Use real local examples respectfully and ask a teacher if you are unsure." },
    { kind: "exercise", title: "Evaluation", questions: [{ type: "short-answer", prompt: "What is a district?", answer: "An administrative area in Uganda." }, { type: "short-answer", prompt: "What does a map key do?", answer: "It explains map symbols." }, { type: "multiple-choice", prompt: "Which is a compass direction?", choices: ["east", "market", "river", "near"], answer: "east" }] }
  ] }
];

const P4_PHYSICAL_FEATURES_V4: UpperPrimaryLesson[] = [
  { id: "p4-v4-physical-features", classLevel: "P4", term: "Term I", curriculumMode: "subject", subject: "Social Studies", topicTitle: "Physical Features in Our District", subTopicTitle: "Physical Features, Importance and Problems", lessonTitle: "Physical Features, Importance and Problems", blocks: [
    { kind: "definition", term: "physical feature", definition: "is a natural feature found on the earth's surface.", simpleCheck: "A river is a physical feature; a classroom is not." },
    { kind: "categories", title: "Types of physical features", categories: [{ name: "Raised land", definition: "high landforms", examples: ["hills", "mountains"] }, { name: "Low land", definition: "lower landforms", examples: ["valleys", "plains"] }, { name: "Water features", definition: "natural places with water", examples: ["rivers", "lakes", "swamps"] }] },
    { kind: "diagram", title: "Physical features", imageUrl: "/images/social-studies/p4-physical-features-district.svg", caption: "Common physical features in a district and their importance.", labels: ["hill", "valley", "river", "lake", "swamp"] },
    { kind: "uses", title: "Importance and problems", points: ["Rivers and lakes provide water and fish.", "Hills and mountains may attract tourists.", "Valleys may have fertile soils.", "Swamps store water and provide papyrus.", "Some features may flood, be dangerous or be polluted.", "People should protect water sources and avoid dumping rubbish."] },
    { kind: "exercise", title: "Evaluation", questions: [{ type: "short-answer", prompt: "What is a physical feature?", answer: "A natural feature on the earth's surface." }, { type: "short-answer", prompt: "Name three physical features in a district.", answer: "Hill, valley, river, lake, swamp or mountain." }, { type: "multiple-choice", prompt: "Which feature provides water?", choices: ["river", "desk", "shoe", "clock"], answer: "river" }] }
  ] }
];

const P4_VEGETATION_V4: UpperPrimaryLesson[] = [
  { id: "p4-v4-vegetation", classLevel: "P4", term: "Term II", curriculumMode: "subject", subject: "Social Studies", topicTitle: "Vegetation in Our District", subTopicTitle: "Types, Uses and Conservation of Vegetation", lessonTitle: "Types, Uses and Conservation of Vegetation", blocks: [
    { kind: "definition", term: "vegetation", definition: "is the plant cover growing in an area.", simpleCheck: "Grass, forests, crops and shrubs are vegetation." },
    { kind: "categories", title: "Types of vegetation", categories: [{ name: "Natural vegetation", definition: "plants that grow without being planted by people", examples: ["forests", "grasslands", "wetlands"] }, { name: "Planted vegetation", definition: "plants grown by people", examples: ["crops", "tree plantations", "flowers"] }, { name: "Wetland vegetation", definition: "plants that grow in wet places", examples: ["papyrus", "reeds"] }] },
    { kind: "diagram", title: "Vegetation conservation", imageUrl: "/images/social-studies/p4-vegetation-conservation.svg", caption: "Vegetation gives food, timber, shade, medicine and habitats.", labels: ["forest", "grass", "wetland", "conservation"] },
    { kind: "uses", title: "Uses and conservation", points: ["Vegetation provides food, firewood, timber, medicine, shade and habitats.", "Vegetation protects soil from erosion.", "People conserve vegetation by planting trees, avoiding bush burning and protecting wetlands.", "Cutting many trees can cause soil erosion and loss of habitats."] },
    { kind: "exercise", title: "Evaluation", questions: [{ type: "short-answer", prompt: "What is vegetation?", answer: "Plant cover in an area." }, { type: "short-answer", prompt: "Give three uses of vegetation.", answer: "Food, timber, firewood, medicine, shade or habitats." }, { type: "multiple-choice", prompt: "Which action conserves vegetation?", choices: ["planting trees", "bush burning", "cutting all trees", "destroying wetlands"], answer: "planting trees" }] }
  ] }
];

const P4_PEOPLE_DISTRICT_V4: UpperPrimaryLesson[] = [
  { id: "p4-v4-people-district", classLevel: "P4", term: "Term II", curriculumMode: "subject", subject: "Social Studies", topicTitle: "People in Our District", subTopicTitle: "People, Culture, Services and Cooperation", lessonTitle: "People, Culture, Services and Cooperation", blocks: [
    { kind: "definition", term: "people in a district", definition: "are the families, groups, leaders, workers and learners who live or work in a district.", simpleCheck: "Teachers, pupils, farmers, traders and leaders are people in a district." },
    { kind: "categories", title: "People and services", categories: [{ name: "Ethnic groups", definition: "groups of people with shared origin, language or culture", examples: ["local examples from the district"] }, { name: "Culture and customs", definition: "ways of life of people", examples: ["language", "food", "dress", "music"] }, { name: "Social services", definition: "services that help people live better", examples: ["schools", "health centres", "roads", "water sources"] }] },
    { kind: "diagram", title: "People and services", imageUrl: "/images/social-studies/p4-people-culture-services.svg", caption: "People in a district live together through culture, services and cooperation.", labels: ["people", "culture", "school", "health centre", "market"] },
    { kind: "characteristics", title: "Living together", points: ["People in a district may have different languages and customs.", "People should respect one another.", "Social services help meet people's needs.", "Cooperation helps communities solve problems."] },
    { kind: "exercise", title: "Evaluation", questions: [{ type: "short-answer", prompt: "Name two social services in a district.", answer: "School, health centre, road, market, water source or police station." }, { type: "short-answer", prompt: "Why should people respect culture?", answer: "Respect helps people live peacefully." }, { type: "multiple-choice", prompt: "A school provides:", choices: ["education", "rain", "teeth", "fire"], answer: "education" }] }
  ] }
];

const P4_LEADERS_DISTRICT_V4: UpperPrimaryLesson[] = [
  { id: "p4-v4-leaders-district", classLevel: "P4", term: "Term III", curriculumMode: "subject", subject: "Social Studies", topicTitle: "Our Leaders in the District", subTopicTitle: "Leaders, Roles and Responsibilities", lessonTitle: "Leaders, Roles and Responsibilities", blocks: [
    { kind: "definition", term: "leader", definition: "is a person who guides, serves and organises other people.", simpleCheck: "A head teacher is a school leader." },
    { kind: "categories", title: "Types of leaders", categories: [{ name: "Family leaders", definition: "people who guide families", examples: ["parents", "guardians"] }, { name: "School leaders", definition: "people who guide a school", examples: ["head teacher", "teachers", "prefects"] }, { name: "Local leaders", definition: "leaders in the community or district", examples: ["LC leaders", "district chairperson"] }, { name: "Religious/cultural leaders", definition: "leaders who guide people in faith or culture", examples: ["priests", "imams", "clan leaders"] }] },
    { kind: "diagram", title: "District leaders and services", imageUrl: "/images/social-studies/p4-district-leaders-services.svg", caption: "Leaders guide, serve and organise people in a district.", labels: ["leader", "roles", "service", "responsibility"] },
    { kind: "characteristics", title: "Qualities and roles", points: ["Good leaders are honest, fair, responsible and hardworking.", "Leaders settle disputes and guide people.", "Leaders plan development and organise services.", "Citizens also have rights and responsibilities." ] },
    { kind: "exercise", title: "Evaluation", questions: [{ type: "short-answer", prompt: "What is a leader?", answer: "A person who guides, serves and organises others." }, { type: "short-answer", prompt: "Give three qualities of a good leader.", answer: "Honest, fair, responsible, caring or hardworking." }, { type: "multiple-choice", prompt: "A good leader should:", choices: ["serve people", "cheat people", "ignore rules", "insult others"], answer: "serve people" }] }
  ] }
];

const P4_MEETING_NEEDS_V4: UpperPrimaryLesson[] = [
  { id: "p4-v4-meeting-needs", classLevel: "P4", term: "Term III", curriculumMode: "subject", subject: "Social Studies", topicTitle: "How to Meet People's Needs in Our District", subTopicTitle: "Needs, Work, Services and Problem Solving", lessonTitle: "Needs, Work, Services and Problem Solving", blocks: [
    { kind: "definition", term: "need", definition: "is something important that people require to live well.", simpleCheck: "Food, water, shelter, clothing, education and health care are needs." },
    { kind: "categories", title: "Ways needs are met", categories: [{ name: "Basic needs", definition: "things people need for life and growth", examples: ["food", "water", "shelter", "clothing"] }, { name: "Economic activities", definition: "work people do to get income and goods", examples: ["farming", "trading", "fishing", "crafts"] }, { name: "Community services", definition: "services that help people", examples: ["schools", "health centres", "roads", "security"] }, { name: "Cooperation", definition: "working together", examples: ["community cleaning", "road repair", "saving groups"] }] },
    { kind: "diagram", title: "District needs and services", imageUrl: "/images/social-studies/p4-district-leaders-services.svg", caption: "People meet needs through work, services and cooperation.", labels: ["needs", "work", "services", "cooperation"] },
    { kind: "characteristics", title: "Problem solving", points: ["People identify the need or problem.", "They choose safe solutions.", "They work with leaders and community members.", "They care for public services and resources." ] },
    { kind: "exercise", title: "Evaluation", questions: [{ type: "short-answer", prompt: "Name four basic needs.", answer: "Food, water, shelter, clothing, education or health care." }, { type: "short-answer", prompt: "Give two economic activities in a district.", answer: "Farming, trading, fishing, transport, crafts or building." }, { type: "multiple-choice", prompt: "Roads help people to:", choices: ["move goods and reach services", "brush teeth", "make rain", "grow hair"], answer: "move goods and reach services" }] }
  ] }
];

const P4_SOCIAL_TOPIC_DATA: Topic[] = [
  {
    "id": "p4-location-district-uganda",
    "themeId": "p4-sst-living-together-district",
    "themeName": "Living Together in Our District",
    "title": "Location of Our District in Uganda",
    "estMinutes": 34,
    "status": "published",
    "reviewStatus": "beta",
    "upperPrimaryLessons": P4_LOCATION_DISTRICT_V4,
    "useOnlyV4Lessons": true,
    "note": {
      "intro": "P4 Social Studies beta: built from the official NCDC Primary Four Social Studies Syllabus, 2010; human review still required before premium-final release. Location of Our District in Uganda helps P4 learners understand and describe life in their district.",
      "learningObjectives": [
        "Locate a district on the map of Uganda.",
        "Name neighbouring districts.",
        "Use compass directions and map symbols.",
        "Describe important places in a district."
      ],
      "whatYouNeedToKnow": [
        "A district is an administrative area in Uganda.",
        "A map is a drawing of a place as seen from above.",
        "Compass directions include north, south, east and west.",
        "Neighbouring districts share boundaries.",
        "Important places may include schools, hospitals, markets, police stations, roads and district headquarters."
      ],
      "worked": {
        "problem": "How can you describe the location of your district?",
        "steps": [
          "Name your district.",
          "Name one or two neighbouring districts.",
          "Use compass direction if known.",
          "Mention an important place or headquarters."
        ],
        "answer": "Example: Kampala District is in central Uganda and neighbours Wakiso District."
      },
      "commonMistakes": [
        "Naming a village instead of a district.",
        "Using left/right instead of compass directions on a map.",
        "Forgetting to name neighbouring districts.",
        "Drawing a map without a key or title."
      ],
      "recap": [
        "Name the district.",
        "Use a map and compass directions.",
        "Include neighbouring districts and important places."
      ],
      "writingTasks": [
        {
          "title": "Describe your district",
          "prompt": "Write five sentences describing your district's location and important places.",
          "planningSteps": [
            "Name the district.",
            "Name neighbouring districts if known.",
            "Mention compass direction or region.",
            "List important places."
          ],
          "checklist": [
            "I used district names.",
            "I used map vocabulary.",
            "I mentioned important places.",
            "I wrote complete sentences."
          ],
          "modelOpening": "My district is found in Uganda."
        }
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-district-location-map",
        "title": "1. District location and map skills",
        "modules": [
          {
            "moduleId": "p4-map-district",
            "title": "Using maps to locate a district",
            "bigIdea": "Map skills help learners describe where their district is in Uganda.",
            "learnIt": [
              "Look for your district on a map of Uganda.",
              "Use compass directions to describe position.",
              "A map key explains symbols used on the map.",
              "A title tells what the map shows."
            ],
            "workedExample": {
              "question": "What does a map key do?",
              "steps": [
                "A key explains symbols on a map.",
                "Without a key, symbols may be confusing."
              ],
              "answer": "A map key explains the symbols used on a map."
            },
            "tryThis": {
              "question": "Which is a compass direction?",
              "choices": [
                "north",
                "near",
                "market",
                "river"
              ],
              "correct": 0,
              "explanation": "North is a compass direction."
            },
            "imageUrl": "/images/social-studies/p4-district-map-compass.svg",
            "imageCaption": "District map skills: title, key and compass directions."
          }
        ]
      },
      {
        "subtopicId": "p4-neighbouring-districts",
        "title": "2. Neighbouring districts and important places",
        "modules": [
          {
            "moduleId": "p4-neighbours-important-places",
            "title": "Neighbours and services",
            "bigIdea": "Districts are connected to nearby districts and important places.",
            "learnIt": [
              "Neighbouring districts share boundaries.",
              "Important places help people get services.",
              "Hospitals, schools, markets and police stations are examples of important places."
            ],
            "workedExample": {
              "question": "Why is a hospital an important place in a district?",
              "steps": [
                "A hospital gives health services.",
                "People go there for treatment and health advice."
              ],
              "answer": "It provides health services to people."
            },
            "tryThis": {
              "question": "A neighbouring district is one that:",
              "choices": [
                "is always across an ocean",
                "shares a boundary",
                "has no people",
                "is a school building"
              ],
              "correct": 1,
              "explanation": "Neighbouring districts share boundaries."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "A map is:",
        "choices": [
          "a type of leader",
          "a food group",
          "a drawing of a place from above",
          "a river only"
        ],
        "correct": 2,
        "why": "A map shows places from above."
      },
      {
        "q": "Which is a compass direction?",
        "choices": [
          "behind",
          "near",
          "market",
          "east"
        ],
        "correct": 3,
        "why": "East is a compass direction."
      },
      {
        "q": "A map key explains:",
        "choices": [
          "symbols",
          "weather only",
          "prices",
          "teeth"
        ],
        "correct": 0,
        "why": "Keys explain symbols."
      },
      {
        "q": "A district is:",
        "choices": [
          "a tooth",
          "an administrative area",
          "a crop pest",
          "a shop item"
        ],
        "correct": 1,
        "why": "A district is an administrative area."
      },
      {
        "q": "A hospital is important because it provides:",
        "choices": [
          "fuel only",
          "elections only",
          "health services",
          "rain"
        ],
        "correct": 2,
        "why": "Hospitals provide health services."
      },
      {
        "q": "Neighbouring districts:",
        "choices": [
          "are always islands",
          "have no leaders",
          "are inside one classroom",
          "share boundaries"
        ],
        "correct": 3,
        "why": "Neighbours share boundaries."
      }
    ]
  },
  {
    "id": "p4-physical-features-district",
    "themeId": "p4-sst-living-together-district",
    "themeName": "Living Together in Our District",
    "title": "Physical Features in Our District",
    "estMinutes": 34,
    "status": "published",
    "reviewStatus": "beta",
    "upperPrimaryLessons": P4_PHYSICAL_FEATURES_V4,
    "useOnlyV4Lessons": true,
    "note": {
      "intro": "P4 Social Studies beta: built from the official NCDC Primary Four Social Studies Syllabus, 2010; human review still required before premium-final release. Physical Features in Our District helps P4 learners understand and describe life in their district.",
      "learningObjectives": [
        "Name physical features in a district.",
        "Describe rivers, hills, valleys, lakes or swamps.",
        "Explain importance of physical features.",
        "Identify problems related to physical features and possible solutions."
      ],
      "whatYouNeedToKnow": [
        "Physical features are natural features on the land or water.",
        "Examples include rivers, lakes, hills, valleys, plains, forests and swamps.",
        "Physical features provide water, fish, transport, tourism, fertile soil and building materials.",
        "Some features may cause floods, waterborne diseases or transport difficulties.",
        "People should use physical features carefully and protect the environment."
      ],
      "worked": {
        "problem": "Give one importance and one problem of a river.",
        "steps": [
          "Think of how people use a river: water or fishing.",
          "Think of a danger: floods or drowning."
        ],
        "answer": "A river provides water, but it may flood during heavy rain."
      },
      "commonMistakes": [
        "Calling buildings physical features.",
        "Giving only problems and no importance.",
        "Forgetting safety near water bodies.",
        "Saying all swamps should be destroyed."
      ],
      "recap": [
        "Physical features are natural.",
        "They help people but can also cause problems.",
        "Use and protect them carefully."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-types-physical-features",
        "title": "1. Types and importance of physical features",
        "modules": [
          {
            "moduleId": "p4-feature-types",
            "title": "Natural features around us",
            "bigIdea": "Districts have different natural features that affect how people live.",
            "learnIt": [
              "Rivers and lakes provide water and fish.",
              "Hills may influence settlement and farming.",
              "Swamps store water and are homes for plants and animals.",
              "Valleys may have fertile soils."
            ],
            "workedExample": {
              "question": "Why are wetlands important?",
              "steps": [
                "Wetlands store water.",
                "They are habitats for plants and animals.",
                "They can reduce flooding when protected."
              ],
              "answer": "They store water, support living things and can reduce floods."
            },
            "tryThis": {
              "question": "Which is a physical feature?",
              "choices": [
                "river",
                "school",
                "hospital",
                "market stall"
              ],
              "correct": 0,
              "explanation": "A river is natural."
            },
            "imageUrl": "/images/social-studies/p4-physical-features-district.svg",
            "imageCaption": "Physical features commonly found in districts."
          }
        ]
      },
      {
        "subtopicId": "p4-problems-solutions-features",
        "title": "2. Problems and solutions",
        "modules": [
          {
            "moduleId": "p4-feature-problems",
            "title": "Using features safely",
            "bigIdea": "Physical features should be used safely and protected.",
            "learnIt": [
              "Floods may occur near rivers or swamps during heavy rain.",
              "Dirty water can spread diseases.",
              "Cutting trees on hills can cause soil erosion.",
              "Solutions include planting trees, protecting wetlands and using safe water."
            ],
            "workedExample": {
              "question": "A hill has many trees cut down and soil is being washed away. What can people do?",
              "steps": [
                "The problem is soil erosion.",
                "Trees help hold soil.",
                "Planting trees and reducing careless cutting helps."
              ],
              "answer": "Plant trees and control careless tree cutting."
            },
            "tryThis": {
              "question": "One solution to soil erosion is:",
              "choices": [
                "cutting all trees",
                "planting trees",
                "burning grass",
                "digging everywhere"
              ],
              "correct": 1,
              "explanation": "Trees help hold soil."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "A physical feature is:",
        "choices": [
          "always man-made",
          "a classroom object",
          "natural",
          "a title"
        ],
        "correct": 2,
        "why": "Physical features are natural."
      },
      {
        "q": "Which is a physical feature?",
        "choices": [
          "shop",
          "clinic",
          "police post",
          "hill"
        ],
        "correct": 3,
        "why": "A hill is natural."
      },
      {
        "q": "Rivers may provide:",
        "choices": [
          "water",
          "chalk",
          "books",
          "money notes only"
        ],
        "correct": 0,
        "why": "Rivers provide water."
      },
      {
        "q": "Floods can happen after:",
        "choices": [
          "brushing teeth",
          "heavy rain",
          "voting",
          "reading"
        ],
        "correct": 1,
        "why": "Heavy rain may cause floods."
      },
      {
        "q": "Trees on hills help reduce:",
        "choices": [
          "tooth decay",
          "road signs",
          "soil erosion",
          "school fees"
        ],
        "correct": 2,
        "why": "Roots hold soil."
      },
      {
        "q": "Wetlands should be:",
        "choices": [
          "filled with rubbish",
          "burnt",
          "ignored",
          "protected"
        ],
        "correct": 3,
        "why": "Wetlands are useful ecosystems."
      }
    ]
  },
  {
    "id": "p4-vegetation-district",
    "themeId": "p4-sst-living-together-district",
    "themeName": "Living Together in Our District",
    "title": "Vegetation in Our District",
    "estMinutes": 32,
    "status": "published",
    "reviewStatus": "beta",
    "upperPrimaryLessons": P4_VEGETATION_V4,
    "useOnlyV4Lessons": true,
    "note": {
      "intro": "P4 Social Studies beta: built from the official NCDC Primary Four Social Studies Syllabus, 2010; human review still required before premium-final release. Vegetation in Our District helps P4 learners understand and describe life in their district.",
      "learningObjectives": [
        "Name types of vegetation in a district.",
        "State uses of vegetation.",
        "Explain vegetation conservation.",
        "Describe human activities that affect vegetation."
      ],
      "whatYouNeedToKnow": [
        "Vegetation means plant cover in an area.",
        "Types may include forests, grasslands, wetlands and planted vegetation.",
        "Vegetation provides food, firewood, timber, medicine, shade and habitats for animals.",
        "Vegetation helps protect soil and improves rainfall and air quality.",
        "Human activities such as farming, charcoal burning and settlement can destroy vegetation if not controlled."
      ],
      "worked": {
        "problem": "Why should people plant trees after cutting some for timber?",
        "steps": [
          "Cutting trees reduces vegetation.",
          "Planting trees replaces some of the trees removed.",
          "This protects soil and future resources."
        ],
        "answer": "They should plant trees to conserve vegetation and replace what was removed."
      },
      "commonMistakes": [
        "Thinking vegetation means animals.",
        "Calling all vegetation a forest.",
        "Mentioning uses without conservation.",
        "Ignoring dangers of bush burning and deforestation."
      ],
      "recap": [
        "Vegetation is plant cover.",
        "It is useful to people and animals.",
        "Conserve vegetation by planting and protecting plants."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-types-uses-vegetation",
        "title": "1. Types and uses of vegetation",
        "modules": [
          {
            "moduleId": "p4-vegetation-types",
            "title": "Plant cover in a district",
            "bigIdea": "Vegetation shapes the environment and supports life.",
            "learnIt": [
              "Forests have many trees.",
              "Grasslands are dominated by grasses.",
              "Wetland vegetation grows in wet areas.",
              "Planted vegetation includes crops, hedges and tree plantations."
            ],
            "workedExample": {
              "question": "Give two uses of vegetation.",
              "steps": [
                "Vegetation gives people materials and food.",
                "It also protects soil and provides habitats."
              ],
              "answer": "Vegetation provides food/timber and protects soil or habitats."
            },
            "tryThis": {
              "question": "Vegetation means:",
              "choices": [
                "plant cover",
                "animal bones",
                "weather only",
                "district leaders"
              ],
              "correct": 0,
              "explanation": "Vegetation is plant cover."
            },
            "imageUrl": "/images/social-studies/p4-vegetation-conservation.svg",
            "imageCaption": "Vegetation types and conservation reminders."
          }
        ]
      },
      {
        "subtopicId": "p4-conserving-vegetation",
        "title": "2. Conservation of vegetation",
        "modules": [
          {
            "moduleId": "p4-vegetation-conservation",
            "title": "Protecting plant cover",
            "bigIdea": "Conservation means using vegetation wisely so it remains useful.",
            "learnIt": [
              "Plant trees where vegetation has been removed.",
              "Avoid unnecessary bush burning.",
              "Use fuel-saving stoves to reduce firewood demand.",
              "Protect forests, wetlands and school compounds."
            ],
            "workedExample": {
              "question": "A community burns grass every dry season and soil becomes bare. What is one better practice?",
              "steps": [
                "Bush burning destroys vegetation cover.",
                "A better practice is controlled clearing or protecting useful vegetation."
              ],
              "answer": "Avoid unnecessary bush burning and protect useful plants."
            },
            "tryThis": {
              "question": "Which action conserves vegetation?",
              "choices": [
                "burning forests",
                "planting trees",
                "cutting all trees",
                "dumping rubbish in wetlands"
              ],
              "correct": 1,
              "explanation": "Tree planting conserves vegetation."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Vegetation means:",
        "choices": [
          "money",
          "roads",
          "plant cover",
          "weather symbols"
        ],
        "correct": 2,
        "why": "Vegetation is plant cover."
      },
      {
        "q": "A forest has many:",
        "choices": [
          "cars",
          "desks",
          "clocks",
          "trees"
        ],
        "correct": 3,
        "why": "Forests have many trees."
      },
      {
        "q": "One use of vegetation is:",
        "choices": [
          "timber",
          "tooth decay",
          "malaria only",
          "broken bones"
        ],
        "correct": 0,
        "why": "Vegetation provides timber."
      },
      {
        "q": "Tree roots help to:",
        "choices": [
          "spoil water",
          "hold soil",
          "make plastic",
          "measure time"
        ],
        "correct": 1,
        "why": "Roots reduce erosion."
      },
      {
        "q": "Which destroys vegetation?",
        "choices": [
          "tree planting",
          "protecting forests",
          "bush burning",
          "watering seedlings"
        ],
        "correct": 2,
        "why": "Bush burning can destroy plants."
      },
      {
        "q": "Conservation means:",
        "choices": [
          "wasting resources",
          "burning all plants",
          "ignoring plants",
          "wise protection and use"
        ],
        "correct": 3,
        "why": "Conservation protects resources."
      }
    ]
  },
  {
    "id": "p4-people-district",
    "themeId": "p4-sst-living-together-district",
    "themeName": "Living Together in Our District",
    "title": "People in Our District",
    "estMinutes": 32,
    "status": "published",
    "reviewStatus": "beta",
    "upperPrimaryLessons": P4_PEOPLE_DISTRICT_V4,
    "useOnlyV4Lessons": true,
    "note": {
      "intro": "P4 Social Studies beta: built from the official NCDC Primary Four Social Studies Syllabus, 2010; human review still required before premium-final release. People in Our District helps P4 learners understand and describe life in their district.",
      "learningObjectives": [
        "Identify people and ethnic groups in a district.",
        "Describe culture and customs respectfully.",
        "Name social services used by people.",
        "Explain living and working together."
      ],
      "whatYouNeedToKnow": [
        "A district has people from different families, clans, religions, occupations and ethnic groups.",
        "Culture includes people's ways of life, language, food, dress, music, dance and ceremonies.",
        "Customs are accepted practices in a community.",
        "Social services include education, health care, water, transport and security.",
        "People live peacefully by respecting one another, obeying laws and cooperating."
      ],
      "worked": {
        "problem": "Why should learners respect people from different cultures?",
        "steps": [
          "People in a district may have different languages, food, dress and beliefs.",
          "Respect helps people live together peacefully.",
          "It reduces quarrels and discrimination."
        ],
        "answer": "Respect helps people from different cultures live together peacefully."
      },
      "commonMistakes": [
        "Mocking other people's culture.",
        "Thinking everyone in a district belongs to one group.",
        "Calling culture only music and dance.",
        "Forgetting that cooperation helps communities."
      ],
      "recap": [
        "Districts have diverse people.",
        "Culture should be respected.",
        "People need services and cooperation."
      ],
      "writingTasks": [
        {
          "title": "People in my district",
          "prompt": "Write a short paragraph about people, culture and services in your district.",
          "planningSteps": [
            "Name your district.",
            "Mention people or cultures respectfully.",
            "Name two services.",
            "Explain why cooperation is important."
          ],
          "checklist": [
            "I used respectful words.",
            "I mentioned services.",
            "I wrote full sentences.",
            "I checked spelling."
          ],
          "modelOpening": "People in my district come from different families and cultures."
        }
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-people-culture",
        "title": "1. People, culture and customs",
        "modules": [
          {
            "moduleId": "p4-culture-customs",
            "title": "Respecting people in a district",
            "bigIdea": "Understanding culture helps people live together with respect.",
            "learnIt": [
              "People may speak different languages.",
              "Traditional foods, dress, dances and ceremonies are part of culture.",
              "Religious and cultural differences should be respected.",
              "Good customs encourage unity, respect and responsibility."
            ],
            "workedExample": {
              "question": "Name two examples of culture.",
              "steps": [
                "Think of ways of life.",
                "Language and traditional dance are examples."
              ],
              "answer": "Examples: language and traditional dance."
            },
            "tryThis": {
              "question": "Culture includes:",
              "choices": [
                "language and food",
                "only roads",
                "only money",
                "only weather"
              ],
              "correct": 0,
              "explanation": "Language and food are parts of culture."
            },
            "imageUrl": "/images/social-studies/p4-people-culture-services.svg",
            "imageCaption": "People, culture and services in a district."
          }
        ]
      },
      {
        "subtopicId": "p4-social-services-cooperation",
        "title": "2. Social services and cooperation",
        "modules": [
          {
            "moduleId": "p4-services-cooperation",
            "title": "Living and working together",
            "bigIdea": "People in a district depend on services and on each other.",
            "learnIt": [
              "Schools provide education.",
              "Health centres provide medical care.",
              "Police help with security.",
              "Cooperation helps people solve common problems."
            ],
            "workedExample": {
              "question": "Which service does a school provide?",
              "steps": [
                "A school helps learners learn.",
                "Learning is education."
              ],
              "answer": "A school provides education services."
            },
            "tryThis": {
              "question": "Which is a social service?",
              "choices": [
                "a hill",
                "health care",
                "a swamp",
                "a proverb only"
              ],
              "correct": 1,
              "explanation": "Health care is a social service."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Culture includes:",
        "choices": [
          "only maps",
          "only money",
          "language, food and dress",
          "only teeth"
        ],
        "correct": 2,
        "why": "Culture is people's way of life."
      },
      {
        "q": "A school provides:",
        "choices": [
          "medicine only",
          "rain",
          "fish only",
          "education"
        ],
        "correct": 3,
        "why": "Schools provide education."
      },
      {
        "q": "A health centre provides:",
        "choices": [
          "medical care",
          "class elections",
          "timber",
          "vegetation only"
        ],
        "correct": 0,
        "why": "Health centres provide health care."
      },
      {
        "q": "People live peacefully when they:",
        "choices": [
          "mock cultures",
          "respect one another",
          "fight always",
          "steal"
        ],
        "correct": 1,
        "why": "Respect promotes peace."
      },
      {
        "q": "A district may have:",
        "choices": [
          "only one family",
          "no leaders",
          "many groups of people",
          "no services"
        ],
        "correct": 2,
        "why": "Districts have many people."
      },
      {
        "q": "Cooperation means:",
        "choices": [
          "hiding from others",
          "destroying services",
          "refusing rules",
          "working together"
        ],
        "correct": 3,
        "why": "Cooperation is working together."
      }
    ]
  },
  {
    "id": "p4-leaders-district",
    "themeId": "p4-sst-living-together-district",
    "themeName": "Living Together in Our District",
    "title": "Our Leaders in the District",
    "estMinutes": 34,
    "status": "published",
    "reviewStatus": "beta",
    "upperPrimaryLessons": P4_LEADERS_DISTRICT_V4,
    "useOnlyV4Lessons": true,
    "note": {
      "intro": "P4 Social Studies beta: built from the official NCDC Primary Four Social Studies Syllabus, 2010; human review still required before premium-final release. Our Leaders in the District helps P4 learners understand and describe life in their district.",
      "learningObjectives": [
        "Name local leaders in a district.",
        "Explain roles of leaders.",
        "Describe qualities of good leaders.",
        "State rights and responsibilities of people in a district."
      ],
      "whatYouNeedToKnow": [
        "Leaders guide and organise people to work together.",
        "District leaders may include LC leaders, councillors, district chairperson, chief administrative officer, cultural leaders, religious leaders and school leaders.",
        "Some leaders are elected, some are appointed, some inherit leadership and some volunteer.",
        "Good leaders are honest, fair, responsible, hardworking and respectful.",
        "Citizens also have responsibilities such as obeying laws, paying taxes when required, keeping peace and protecting public property."
      ],
      "worked": {
        "problem": "Why should a district leader be honest?",
        "steps": [
          "A leader handles people's concerns and resources.",
          "Honesty helps people trust the leader.",
          "Trust helps communities work together."
        ],
        "answer": "A leader should be honest so people can trust them and work together."
      },
      "commonMistakes": [
        "Thinking leaders only command and never serve.",
        "Forgetting that citizens also have responsibilities.",
        "Calling every famous person a district leader.",
        "Ignoring qualities like honesty and fairness."
      ],
      "recap": [
        "Leaders guide and serve.",
        "Good leaders have good qualities.",
        "People have rights and responsibilities."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-types-roles-leaders",
        "title": "1. Types and roles of leaders",
        "modules": [
          {
            "moduleId": "p4-leader-types",
            "title": "Leaders in a district",
            "bigIdea": "Different leaders help organise different parts of community life.",
            "learnIt": [
              "Elected leaders are chosen by voters.",
              "Appointed leaders are given roles by an authority.",
              "Cultural and religious leaders guide people in culture or faith.",
              "School leaders help organise learning."
            ],
            "workedExample": {
              "question": "What is one role of an LC leader?",
              "steps": [
                "LC leaders help local communities solve problems.",
                "They may guide people on security, sanitation and development."
              ],
              "answer": "An LC leader helps organise and solve community problems."
            },
            "tryThis": {
              "question": "A leader should mainly:",
              "choices": [
                "serve and guide people",
                "steal resources",
                "cause fights",
                "break laws"
              ],
              "correct": 0,
              "explanation": "Good leaders serve and guide."
            },
            "imageUrl": "/images/social-studies/p4-district-leaders-services.svg",
            "imageCaption": "District leaders and services they help organise."
          }
        ]
      },
      {
        "subtopicId": "p4-good-leadership",
        "title": "2. Good leadership and responsibility",
        "modules": [
          {
            "moduleId": "p4-leader-qualities",
            "title": "Qualities of good leaders",
            "bigIdea": "Good leadership depends on character and service.",
            "learnIt": [
              "Honest leaders tell the truth.",
              "Fair leaders treat people justly.",
              "Responsible leaders do their duties.",
              "People also support leaders by obeying laws and protecting public property."
            ],
            "workedExample": {
              "question": "Name two qualities of a good leader.",
              "steps": [
                "Think of qualities that help people trust a leader.",
                "Honesty and fairness are examples."
              ],
              "answer": "Honesty and fairness."
            },
            "tryThis": {
              "question": "Which is a good leader quality?",
              "choices": [
                "greed",
                "honesty",
                "laziness",
                "fighting"
              ],
              "correct": 1,
              "explanation": "Honesty is a good quality."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "A leader's work is to:",
        "choices": [
          "steal public property",
          "spread diseases",
          "guide and serve people",
          "destroy roads"
        ],
        "correct": 2,
        "why": "Leaders guide and serve."
      },
      {
        "q": "An elected leader is chosen by:",
        "choices": [
          "rain",
          "mountains",
          "teeth",
          "voters"
        ],
        "correct": 3,
        "why": "Voters choose elected leaders."
      },
      {
        "q": "A good leader should be:",
        "choices": [
          "honest",
          "greedy",
          "lazy",
          "unfair"
        ],
        "correct": 0,
        "why": "Honesty builds trust."
      },
      {
        "q": "Citizens should:",
        "choices": [
          "break laws",
          "obey laws",
          "destroy property",
          "fight leaders"
        ],
        "correct": 1,
        "why": "Citizens have responsibilities."
      },
      {
        "q": "A school head teacher is a:",
        "choices": [
          "weather symbol",
          "physical feature",
          "school leader",
          "crop pest"
        ],
        "correct": 2,
        "why": "Head teachers lead schools."
      },
      {
        "q": "Fairness means:",
        "choices": [
          "favouring only friends",
          "lying",
          "hiding resources",
          "treating people justly"
        ],
        "correct": 3,
        "why": "Fair leaders are just."
      }
    ]
  },
  {
    "id": "p4-meeting-needs-district",
    "themeId": "p4-sst-living-together-district",
    "themeName": "Living Together in Our District",
    "title": "How to Meet People's Needs in Our District",
    "estMinutes": 34,
    "status": "published",
    "reviewStatus": "beta",
    "upperPrimaryLessons": P4_MEETING_NEEDS_V4,
    "useOnlyV4Lessons": true,
    "note": {
      "intro": "P4 Social Studies beta: built from the official NCDC Primary Four Social Studies Syllabus, 2010; human review still required before premium-final release. How to Meet People's Needs in Our District helps P4 learners understand and describe life in their district.",
      "learningObjectives": [
        "Identify people's basic needs.",
        "Name economic activities in a district.",
        "Explain community services that meet needs.",
        "Describe cooperation and problem solving in a district."
      ],
      "whatYouNeedToKnow": [
        "People's basic needs include food, water, shelter, clothing, health care, education and security.",
        "People meet needs through work and services.",
        "Economic activities include farming, fishing, trade, transport, carpentry, tailoring and small businesses.",
        "Community services such as schools, health centres, roads, clean water and security help meet people's needs.",
        "Cooperation helps people solve problems like dirty water, poor roads and lack of services."
      ],
      "worked": {
        "problem": "How can a community help meet the need for clean water?",
        "steps": [
          "Identify the need: clean water.",
          "Think of a community solution.",
          "People can protect wells, repair boreholes and keep water sources clean."
        ],
        "answer": "They can protect water sources, repair boreholes and keep the area around water sources clean."
      },
      "commonMistakes": [
        "Calling wants and needs the same thing without explanation.",
        "Forgetting that people work to meet needs.",
        "Thinking government alone solves every community problem.",
        "Ignoring cooperation and care for public services."
      ],
      "recap": [
        "Needs are things people require for life and wellbeing.",
        "Work and services help meet needs.",
        "Communities solve problems better together."
      ],
      "writingTasks": [
        {
          "title": "Needs in our district",
          "prompt": "Write a paragraph explaining three needs of people in your district and how they can be met.",
          "planningSteps": [
            "List three needs.",
            "Match each need to a service or activity.",
            "Add one cooperation idea.",
            "Write full sentences."
          ],
          "checklist": [
            "I named real needs.",
            "I explained how needs are met.",
            "I included cooperation.",
            "I wrote clearly."
          ],
          "modelOpening": "People in my district need clean water, food and health care."
        }
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-needs-economic-activities",
        "title": "1. Needs and economic activities",
        "modules": [
          {
            "moduleId": "p4-basic-needs-work",
            "title": "Needs and work",
            "bigIdea": "People work and cooperate to meet needs.",
            "learnIt": [
              "Food, water, shelter and clothing are basic needs.",
              "Farming provides food and income.",
              "Trade helps people buy and sell goods.",
              "Transport helps people and goods move from place to place."
            ],
            "workedExample": {
              "question": "Which need is met by growing food crops?",
              "steps": [
                "Food crops provide food.",
                "Food is a basic need."
              ],
              "answer": "The need for food is met."
            },
            "tryThis": {
              "question": "Which is a basic need?",
              "choices": [
                "water",
                "a toy car",
                "extra sweets",
                "a decoration"
              ],
              "correct": 0,
              "explanation": "Water is needed for life."
            },
            "imageUrl": "/images/social-studies/p4-district-leaders-services.svg",
            "imageCaption": "Services and work that help meet people’s needs in a district."
          }
        ]
      },
      {
        "subtopicId": "p4-services-problem-solving",
        "title": "2. Services and problem solving",
        "modules": [
          {
            "moduleId": "p4-community-services",
            "title": "Meeting needs together",
            "bigIdea": "Community services work best when people protect and use them responsibly.",
            "learnIt": [
              "Schools meet the need for education.",
              "Health centres meet health needs.",
              "Roads and transport help people reach markets and services.",
              "People can report problems and take part in community work."
            ],
            "workedExample": {
              "question": "A road to the market is damaged. Why is this a problem?",
              "steps": [
                "People need roads to transport goods and reach services.",
                "A damaged road makes movement hard."
              ],
              "answer": "It makes transport to markets and services difficult."
            },
            "tryThis": {
              "question": "Which service meets education needs?",
              "choices": [
                "swamp",
                "school",
                "hill",
                "forest"
              ],
              "correct": 1,
              "explanation": "Schools provide education."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "A basic need is:",
        "choices": [
          "a luxury toy",
          "extra sweets",
          "water",
          "a decoration"
        ],
        "correct": 2,
        "why": "Water is necessary for life."
      },
      {
        "q": "Farming can provide:",
        "choices": [
          "weather symbols",
          "votes only",
          "teeth",
          "food and income"
        ],
        "correct": 3,
        "why": "Farming produces food and income."
      },
      {
        "q": "A school meets the need for:",
        "choices": [
          "education",
          "rain",
          "timber only",
          "fish only"
        ],
        "correct": 0,
        "why": "Schools provide education."
      },
      {
        "q": "A health centre meets:",
        "choices": [
          "transport only",
          "health needs",
          "vegetation only",
          "games only"
        ],
        "correct": 1,
        "why": "Health centres provide medical care."
      },
      {
        "q": "Community problems are solved better by:",
        "choices": [
          "fighting",
          "destroying services",
          "cooperation",
          "refusing meetings"
        ],
        "correct": 2,
        "why": "Cooperation helps problem solving."
      },
      {
        "q": "Roads help people to:",
        "choices": [
          "brush teeth",
          "make rain",
          "grow hair",
          "move goods and reach services"
        ],
        "correct": 3,
        "why": "Roads support transport."
      }
    ]
  }
];

const P4_SOCIAL_TERMS = {
  "p4-location-district-uganda": "Term I" as const,
  "p4-physical-features-district": "Term I" as const,
  "p4-vegetation-district": "Term II" as const,
  "p4-people-district": "Term II" as const,
  "p4-leaders-district": "Term III" as const,
  "p4-meeting-needs-district": "Term III" as const
};

export const P4_SOCIAL_TOPICS: Topic[] = addUpperPrimarySocialV4(P4_SOCIAL_TOPIC_DATA, "P4", P4_SOCIAL_TERMS);

export function getP4SocialTopic(id: string): Topic | undefined {
  return P4_SOCIAL_TOPICS.find((topic) => topic.id === id);
}
