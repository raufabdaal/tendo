import type { Topic } from "@/lib/topics";

// P4 Social Studies live beta content layer.
// Source map: content/curriculum/p4-social-studies.json
// Rule: NCDC first, build second. This file follows the official NCDC Primary Four Social Studies Syllabus, 2010.
// Status: live beta until checked by a human reviewer for district-local examples, tone and source fidelity.

export const P4_SOCIAL_TOPICS: Topic[] = [
  {
    "id": "p4-location-district-uganda",
    "themeId": "p4-sst-living-together-district",
    "themeName": "Living Together in Our District",
    "title": "Location of Our District in Uganda",
    "estMinutes": 34,
    "status": "published",
    "reviewStatus": "beta",
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
            }
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
                "shares a boundary",
                "is always across an ocean",
                "has no people",
                "is a school building"
              ],
              "correct": 0,
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
          "a drawing of a place from above",
          "a type of leader",
          "a food group",
          "a river only"
        ],
        "correct": 0,
        "why": "A map shows places from above."
      },
      {
        "q": "Which is a compass direction?",
        "choices": [
          "east",
          "behind",
          "near",
          "market"
        ],
        "correct": 0,
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
          "an administrative area",
          "a tooth",
          "a crop pest",
          "a shop item"
        ],
        "correct": 0,
        "why": "A district is an administrative area."
      },
      {
        "q": "A hospital is important because it provides:",
        "choices": [
          "health services",
          "fuel only",
          "elections only",
          "rain"
        ],
        "correct": 0,
        "why": "Hospitals provide health services."
      },
      {
        "q": "Neighbouring districts:",
        "choices": [
          "share boundaries",
          "are always islands",
          "have no leaders",
          "are inside one classroom"
        ],
        "correct": 0,
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
            }
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
                "planting trees",
                "cutting all trees",
                "burning grass",
                "digging everywhere"
              ],
              "correct": 0,
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
          "natural",
          "always man-made",
          "a classroom object",
          "a title"
        ],
        "correct": 0,
        "why": "Physical features are natural."
      },
      {
        "q": "Which is a physical feature?",
        "choices": [
          "hill",
          "shop",
          "clinic",
          "police post"
        ],
        "correct": 0,
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
          "heavy rain",
          "brushing teeth",
          "voting",
          "reading"
        ],
        "correct": 0,
        "why": "Heavy rain may cause floods."
      },
      {
        "q": "Trees on hills help reduce:",
        "choices": [
          "soil erosion",
          "tooth decay",
          "road signs",
          "school fees"
        ],
        "correct": 0,
        "why": "Roots hold soil."
      },
      {
        "q": "Wetlands should be:",
        "choices": [
          "protected",
          "filled with rubbish",
          "burnt",
          "ignored"
        ],
        "correct": 0,
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
            }
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
                "planting trees",
                "burning forests",
                "cutting all trees",
                "dumping rubbish in wetlands"
              ],
              "correct": 0,
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
          "plant cover",
          "money",
          "roads",
          "weather symbols"
        ],
        "correct": 0,
        "why": "Vegetation is plant cover."
      },
      {
        "q": "A forest has many:",
        "choices": [
          "trees",
          "cars",
          "desks",
          "clocks"
        ],
        "correct": 0,
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
          "hold soil",
          "spoil water",
          "make plastic",
          "measure time"
        ],
        "correct": 0,
        "why": "Roots reduce erosion."
      },
      {
        "q": "Which destroys vegetation?",
        "choices": [
          "bush burning",
          "tree planting",
          "protecting forests",
          "watering seedlings"
        ],
        "correct": 0,
        "why": "Bush burning can destroy plants."
      },
      {
        "q": "Conservation means:",
        "choices": [
          "wise protection and use",
          "wasting resources",
          "burning all plants",
          "ignoring plants"
        ],
        "correct": 0,
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
            }
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
                "health care",
                "a hill",
                "a swamp",
                "a proverb only"
              ],
              "correct": 0,
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
          "language, food and dress",
          "only maps",
          "only money",
          "only teeth"
        ],
        "correct": 0,
        "why": "Culture is people's way of life."
      },
      {
        "q": "A school provides:",
        "choices": [
          "education",
          "medicine only",
          "rain",
          "fish only"
        ],
        "correct": 0,
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
          "respect one another",
          "mock cultures",
          "fight always",
          "steal"
        ],
        "correct": 0,
        "why": "Respect promotes peace."
      },
      {
        "q": "A district may have:",
        "choices": [
          "many groups of people",
          "only one family",
          "no leaders",
          "no services"
        ],
        "correct": 0,
        "why": "Districts have many people."
      },
      {
        "q": "Cooperation means:",
        "choices": [
          "working together",
          "hiding from others",
          "destroying services",
          "refusing rules"
        ],
        "correct": 0,
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
            }
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
                "honesty",
                "greed",
                "laziness",
                "fighting"
              ],
              "correct": 0,
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
          "guide and serve people",
          "steal public property",
          "spread diseases",
          "destroy roads"
        ],
        "correct": 0,
        "why": "Leaders guide and serve."
      },
      {
        "q": "An elected leader is chosen by:",
        "choices": [
          "voters",
          "rain",
          "mountains",
          "teeth"
        ],
        "correct": 0,
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
          "obey laws",
          "break laws",
          "destroy property",
          "fight leaders"
        ],
        "correct": 0,
        "why": "Citizens have responsibilities."
      },
      {
        "q": "A school head teacher is a:",
        "choices": [
          "school leader",
          "weather symbol",
          "physical feature",
          "crop pest"
        ],
        "correct": 0,
        "why": "Head teachers lead schools."
      },
      {
        "q": "Fairness means:",
        "choices": [
          "treating people justly",
          "favouring only friends",
          "lying",
          "hiding resources"
        ],
        "correct": 0,
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
            }
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
                "school",
                "swamp",
                "hill",
                "forest"
              ],
              "correct": 0,
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
          "water",
          "a luxury toy",
          "extra sweets",
          "a decoration"
        ],
        "correct": 0,
        "why": "Water is necessary for life."
      },
      {
        "q": "Farming can provide:",
        "choices": [
          "food and income",
          "weather symbols",
          "votes only",
          "teeth"
        ],
        "correct": 0,
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
          "health needs",
          "transport only",
          "vegetation only",
          "games only"
        ],
        "correct": 0,
        "why": "Health centres provide medical care."
      },
      {
        "q": "Community problems are solved better by:",
        "choices": [
          "cooperation",
          "fighting",
          "destroying services",
          "refusing meetings"
        ],
        "correct": 0,
        "why": "Cooperation helps problem solving."
      },
      {
        "q": "Roads help people to:",
        "choices": [
          "move goods and reach services",
          "brush teeth",
          "make rain",
          "grow hair"
        ],
        "correct": 0,
        "why": "Roads support transport."
      }
    ]
  }
];

export function getP4SocialTopic(id: string): Topic | undefined {
  return P4_SOCIAL_TOPICS.find((topic) => topic.id === id);
}
