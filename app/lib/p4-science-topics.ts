import type { Topic } from "@/lib/topics";

// P4 Integrated Science live beta content layer.
// Source map: content/curriculum/p4-science.json
// Rule: NCDC first, build second. This file follows the NCDC Primary Four Integrated Science Syllabus, April 2009.
// Status: live beta until checked by a human reviewer for science accuracy, health-sensitive wording and source fidelity.

export const P4_SCIENCE_TOPICS: Topic[] = [
  {
    "id": "p4-plant-life",
    "themeId": "p4-science-living-things",
    "themeName": "The World of Living Things",
    "title": "Plant Life",
    "estMinutes": 40,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P4 Science beta: built from the NCDC Primary Four Integrated Science Syllabus, April 2009; human science/health review still required before premium-final release. Plant Life helps P4 learners observe, care for health and environment, and explain everyday science clearly.",
      "learningObjectives": [
        "Name parts of a flowering plant.",
        "State functions of plant parts.",
        "Explain plant needs and uses.",
        "Describe ways of caring for plants."
      ],
      "whatYouNeedToKnow": [
        "A flowering plant has roots, stem, leaves, flowers, fruits and seeds.",
        "Roots hold the plant and absorb water and mineral salts.",
        "Leaves make food for the plant using sunlight, air and water.",
        "Plants need air, water, sunlight and good soil.",
        "Plants provide food, shade, medicine, timber and oxygen."
      ],
      "worked": {
        "problem": "Why do roots help a plant survive?",
        "steps": [
          "Roots hold the plant firmly in soil.",
          "Roots absorb water and mineral salts.",
          "Water and mineral salts help the plant grow."
        ],
        "answer": "Roots anchor the plant and absorb water and mineral salts."
      },
      "commonMistakes": [
        "Calling every green part a leaf.",
        "Forgetting that roots also hold the plant.",
        "Saying plants only need water and not sunlight or air."
      ],
      "recap": [
        "Name each part.",
        "Match each part to its function.",
        "Care for plants by watering, weeding and avoiding damage."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-flowering-plants",
        "title": "1. Flowering plants and their parts",
        "modules": [
          {
            "moduleId": "p4-plant-parts",
            "title": "Parts and functions of plants",
            "bigIdea": "Each plant part has a special job that helps the plant live.",
            "learnIt": [
              "Roots absorb water and hold the plant.",
              "The stem supports leaves and carries water.",
              "Leaves make food for the plant.",
              "Flowers help plants produce fruits and seeds."
            ],
            "workedExample": {
              "question": "Name the part that makes food for a plant.",
              "steps": [
                "Food-making happens mostly in leaves.",
                "Leaves use sunlight, air and water to make food."
              ],
              "answer": "Leaves make food for the plant."
            },
            "tryThis": {
              "question": "Which part absorbs water?",
              "choices": [
                "roots",
                "flower",
                "fruit",
                "seed"
              ],
              "correct": 0,
              "explanation": "Roots absorb water from soil."
            },
            "imageUrl": "/images/science/flowering-plant-parts.svg",
            "imageCaption": "Diagram of flowering plant parts and their functions."
          }
        ]
      },
      {
        "subtopicId": "p4-plant-flowers-fruits-seeds",
        "title": "2. Flowers, fruits and seeds",
        "modules": [
          {
            "moduleId": "p4-flowers-fruits-seeds",
            "title": "From Flower to Fruit and Seed",
            "bigIdea": "Flowering plants reproduce by forming fruits and seeds after flowers are pollinated.",
            "imageUrl": "/images/science/flowering-plant-parts.svg",
            "imageCaption": "Flowering plant parts: flowers help plants form fruits and seeds.",
            "learnIt": [
              "A flower is the part of many plants that helps in reproduction.",
              "After pollination and fertilisation, some flowers develop into fruits.",
              "Fruits protect seeds. Seeds can grow into new plants when conditions are suitable.",
              "Seeds need air, water and warmth to germinate."
            ],
            "workedExample": {
              "question": "Why are seeds important to flowering plants?",
              "steps": [
                "Seeds can grow into new young plants.",
                "This helps the plant kind continue."
              ],
              "answer": "Seeds are important because they can grow into new plants."
            },
            "tryThis": {
              "question": "Which plant part can develop into a fruit?",
              "choices": [
                "root",
                "flower",
                "stem only",
                "leaf only"
              ],
              "correct": 1,
              "explanation": "In many flowering plants, the flower can develop into a fruit after pollination and fertilisation."
            }
          }
        ]
      },
      {
        "subtopicId": "p4-plant-germination",
        "title": "3. Germination and plant needs",
        "modules": [
          {
            "moduleId": "p4-seed-germination-needs",
            "title": "Seed Germination and Plant Needs",
            "bigIdea": "A seed germinates when it has the right conditions, and the young plant then needs light, water, air and good soil.",
            "learnIt": [
              "Germination is the beginning of growth of a seed into a seedling.",
              "A seed usually needs water, air and warmth to germinate.",
              "After germination, the seedling needs sunlight to make food in its leaves.",
              "Good soil gives support and mineral salts."
            ],
            "workedExample": {
              "question": "A seed is put in dry soil and does not germinate. What is missing?",
              "steps": [
                "Seeds need water for germination.",
                "Dry soil has too little water."
              ],
              "answer": "Water is missing."
            },
            "tryThis": {
              "question": "Which condition is needed for germination?",
              "choices": [
                "a bank account",
                "a compass",
                "water",
                "a mirror"
              ],
              "correct": 2,
              "explanation": "Seeds need water to germinate."
            }
          }
        ]
      },
      {
        "subtopicId": "p4-plant-life-application",
        "title": "2. Observing and caring for plants",
        "modules": [
          {
            "moduleId": "p4-plant-life-application-module",
            "title": "Plant observation and care",
            "bigIdea": "A good P4 science learner can observe a plant and explain how to care for it.",
            "learnIt": [
              "Observe a real plant and name its visible parts before writing notes.",
              "Check whether the plant has enough water, sunlight and space.",
              "Do not uproot young plants carelessly during observation."
            ],
            "workedExample": {
              "question": "A bean seedling is yellow and weak because it has been kept in a dark box. What should be changed?",
              "steps": [
                "Plants need sunlight for healthy growth.",
                "Move the seedling to a safe place with enough light and continue watering it."
              ],
              "answer": "Move it to a place with sunlight and care for it properly."
            },
            "tryThis": {
              "question": "A safe way to observe roots is to:",
              "choices": [
                "uproot every plant in the garden",
                "cut all roots",
                "throw soil in class",
                "look at a drawn diagram or teacher sample"
              ],
              "correct": 3,
              "explanation": "Learners should avoid destroying plants unnecessarily."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Which part holds a plant in soil?",
        "choices": [
          "roots",
          "flower",
          "fruit",
          "leaf"
        ],
        "correct": 0,
        "why": "Roots hold the plant."
      },
      {
        "q": "Leaves mainly help a plant to:",
        "choices": [
          "walk",
          "make food",
          "chew",
          "hear"
        ],
        "correct": 1,
        "why": "Leaves make food."
      },
      {
        "q": "Plants need:",
        "choices": [
          "only stones",
          "only darkness",
          "water, air and sunlight",
          "salt only"
        ],
        "correct": 2,
        "why": "Plants need water, air and sunlight."
      },
      {
        "q": "A fruit usually contains:",
        "choices": [
          "teeth",
          "bones",
          "lungs",
          "seeds"
        ],
        "correct": 3,
        "why": "Fruits contain seeds."
      },
      {
        "q": "One use of plants is:",
        "choices": [
          "food",
          "spreading malaria",
          "causing accidents",
          "making smoke only"
        ],
        "correct": 0,
        "why": "Many plants provide food."
      },
      {
        "q": "We care for young plants by:",
        "choices": [
          "uprooting them",
          "watering them",
          "stepping on them",
          "burning them"
        ],
        "correct": 1,
        "why": "Watering helps them grow."
      }
    ]
  },
  {
    "id": "p4-growing-crops",
    "themeId": "p4-science-living-things",
    "themeName": "The World of Living Things",
    "title": "Growing Crops",
    "estMinutes": 32,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P4 Science beta: built from the NCDC Primary Four Integrated Science Syllabus, April 2009; human science/health review still required before premium-final release. Growing Crops helps P4 learners observe, care for health and environment, and explain everyday science clearly.",
      "learningObjectives": [
        "Describe steps in crop growing.",
        "Explain soil preparation and planting.",
        "Name crop-care practices.",
        "Explain harvesting and safe storage."
      ],
      "whatYouNeedToKnow": [
        "Crop growing starts with choosing a crop and preparing land.",
        "Soil preparation may include clearing, digging and making seedbeds.",
        "Crop care includes watering, weeding, mulching and controlling pests.",
        "Harvesting is collecting mature crops.",
        "Good storage protects crops from pests, rain and rotting."
      ],
      "worked": {
        "problem": "Why should a farmer weed a garden?",
        "steps": [
          "Weeds compete with crops for water, nutrients, light and space.",
          "Removing weeds helps crops grow well."
        ],
        "answer": "Weeding reduces competition and helps crops grow better."
      },
      "commonMistakes": [
        "Planting seeds too deep.",
        "Forgetting that weeds compete with crops.",
        "Harvesting before crops are mature.",
        "Storing wet crops where they can rot."
      ],
      "recap": [
        "Prepare soil well.",
        "Plant correctly.",
        "Care for crops until harvest."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-crop-growing-practices",
        "title": "1. Crop growing practices",
        "modules": [
          {
            "moduleId": "p4-growing-crops-steps",
            "title": "From planting to harvesting",
            "bigIdea": "Healthy crops need good preparation, planting and care.",
            "learnIt": [
              "Clear land and dig soil before planting.",
              "Plant good seeds or seedlings at the correct spacing.",
              "Water and weed crops regularly.",
              "Harvest crops when they are mature."
            ],
            "workedExample": {
              "question": "A crop is weak because weeds cover it. What should the farmer do?",
              "steps": [
                "Identify the problem: weeds.",
                "Use the correct practice: weeding."
              ],
              "answer": "The farmer should weed the garden."
            },
            "tryThis": {
              "question": "Which is a crop-care practice?",
              "choices": [
                "breaking all stems",
                "throwing rubbish",
                "weeding",
                "harvesting immature crops"
              ],
              "correct": 2,
              "explanation": "Weeding is a crop-care practice."
            },
            "imageUrl": "/images/science/crop-growing-cycle.svg",
            "imageCaption": "Crop-growing cycle from soil preparation to harvest."
          }
        ]
      },
      {
        "subtopicId": "p4-growing-crops-application",
        "title": "2. Crop problems and good farming choices",
        "modules": [
          {
            "moduleId": "p4-growing-crops-application-module",
            "title": "Solving crop-growing problems",
            "bigIdea": "Crop growing involves making good choices when plants face problems.",
            "learnIt": [
              "If seedlings wilt, check water, shade and soil condition.",
              "If pests attack crops, ask an adult for safe control methods.",
              "Harvest only when crops are mature and handle them carefully."
            ],
            "workedExample": {
              "question": "A farmer notices insects eating young cabbage leaves. What should the farmer do first?",
              "steps": [
                "Identify the problem as pests.",
                "Ask an experienced adult/agricultural worker for a safe control method.",
                "Avoid using unknown chemicals carelessly."
              ],
              "answer": "Seek safe pest-control advice and protect the crop."
            },
            "tryThis": {
              "question": "Which is safest for a child?",
              "choices": [
                "spray unknown chemicals alone",
                "taste pesticides",
                "ignore all pests",
                "ask an adult before using pest control"
              ],
              "correct": 3,
              "explanation": "Children should not handle unknown chemicals."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "The first step before planting is often:",
        "choices": [
          "preparing land",
          "selling crops",
          "cooking food",
          "harvesting"
        ],
        "correct": 0,
        "why": "Land is prepared before planting."
      },
      {
        "q": "Weeds compete with crops for:",
        "choices": [
          "school fees",
          "water and nutrients",
          "books",
          "chalk"
        ],
        "correct": 1,
        "why": "Weeds take water and nutrients."
      },
      {
        "q": "Mulching helps soil to:",
        "choices": [
          "burn quickly",
          "lose all water",
          "keep moisture",
          "become plastic"
        ],
        "correct": 2,
        "why": "Mulch reduces water loss."
      },
      {
        "q": "Harvesting means:",
        "choices": [
          "planting seeds",
          "watering soil",
          "naming animals",
          "collecting mature crops"
        ],
        "correct": 3,
        "why": "Harvesting collects mature crops."
      },
      {
        "q": "Wet grains should be dried before storage to prevent:",
        "choices": [
          "rotting",
          "reading",
          "germination always",
          "counting"
        ],
        "correct": 0,
        "why": "Moisture can cause rotting."
      },
      {
        "q": "Good seeds should be:",
        "choices": [
          "broken and rotten",
          "healthy and mature",
          "eaten by pests",
          "burnt"
        ],
        "correct": 1,
        "why": "Healthy mature seeds grow better."
      }
    ]
  },
  {
    "id": "p4-animal-life",
    "themeId": "p4-science-living-things",
    "themeName": "The World of Living Things",
    "title": "Animal Life",
    "estMinutes": 32,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P4 Science beta: built from the NCDC Primary Four Integrated Science Syllabus, April 2009; human science/health review still required before premium-final release. Animal Life helps P4 learners observe, care for health and environment, and explain everyday science clearly.",
      "learningObjectives": [
        "Name common animals.",
        "State needs of animals.",
        "Describe animal care.",
        "Explain uses of animals."
      ],
      "whatYouNeedToKnow": [
        "Animals are living things that need food, water, air and shelter.",
        "Domestic animals live with people and are cared for by people.",
        "Wild animals live in natural habitats such as forests, water bodies and grasslands.",
        "Animals provide food, labour, security, transport and income.",
        "Animals should be treated kindly and kept healthy."
      ],
      "worked": {
        "problem": "Why should animals be given clean water?",
        "steps": [
          "Animals need water to live.",
          "Dirty water can spread disease.",
          "Clean water keeps animals healthy."
        ],
        "answer": "Clean water helps animals stay healthy and prevents disease."
      },
      "commonMistakes": [
        "Thinking animals only need food.",
        "Calling all animals domestic animals.",
        "Mistreating animals instead of caring for them.",
        "Forgetting that shelter protects animals from weather and enemies."
      ],
      "recap": [
        "Animals need food, water, air and shelter.",
        "Care includes feeding, cleaning and treating sickness.",
        "Animals are useful but need protection."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-common-animals-care",
        "title": "1. Common animals and animal care",
        "modules": [
          {
            "moduleId": "p4-animal-needs",
            "title": "Animal needs and care",
            "bigIdea": "Animals stay healthy when their basic needs are met.",
            "learnIt": [
              "Give animals enough food and clean water.",
              "Provide shelter such as kraals, kennels, coops or stables.",
              "Clean animal houses to reduce diseases.",
              "Call a veterinary worker when animals are sick."
            ],
            "workedExample": {
              "question": "A calf is kept in a dirty kraal. What problem may happen?",
              "steps": [
                "Dirty places attract germs and parasites.",
                "The calf may become sick."
              ],
              "answer": "The calf may get diseases or parasites."
            },
            "tryThis": {
              "question": "Which is a need of animals?",
              "choices": [
                "chalk",
                "a blackboard",
                "water",
                "a ruler"
              ],
              "correct": 2,
              "explanation": "Animals need water to live."
            },
            "imageUrl": "/images/science/p4-animal-care.svg",
            "imageCaption": "Animal needs and care summary."
          }
        ]
      },
      {
        "subtopicId": "p4-animal-life-application",
        "title": "2. Animal safety and kindness",
        "modules": [
          {
            "moduleId": "p4-animal-life-application-module",
            "title": "Responsible animal care",
            "bigIdea": "Animals are useful, but learners must care for them safely and kindly.",
            "learnIt": [
              "Do not tease or beat animals because they can be hurt or may attack.",
              "Wash hands after handling animals or cleaning animal houses.",
              "Sick animals should be reported to an adult or veterinary worker."
            ],
            "workedExample": {
              "question": "A dog at home refuses to eat and looks weak. What should a learner do?",
              "steps": [
                "The animal may be sick.",
                "A learner should not guess treatment.",
                "Tell an adult so a veterinary worker can help."
              ],
              "answer": "Tell an adult and seek veterinary help."
            },
            "tryThis": {
              "question": "A kind way to care for animals is to:",
              "choices": [
                "throw stones at them",
                "deny them food",
                "keep them in dirty places",
                "give clean water"
              ],
              "correct": 3,
              "explanation": "Clean water is part of animal care."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Which is a domestic animal?",
        "choices": [
          "goat",
          "lion",
          "crocodile",
          "elephant"
        ],
        "correct": 0,
        "why": "Goats are commonly kept by people."
      },
      {
        "q": "Animals need shelter to:",
        "choices": [
          "help them read",
          "protect them from weather and enemies",
          "make them plants",
          "turn them into stones"
        ],
        "correct": 1,
        "why": "Shelter protects animals."
      },
      {
        "q": "A dog may help people by:",
        "choices": [
          "making leaves",
          "laying eggs always",
          "guarding a home",
          "measuring length"
        ],
        "correct": 2,
        "why": "Dogs can provide security."
      },
      {
        "q": "Animal houses should be:",
        "choices": [
          "dirty",
          "flooded",
          "broken",
          "clean"
        ],
        "correct": 3,
        "why": "Clean houses reduce disease."
      },
      {
        "q": "A sick animal should be seen by:",
        "choices": [
          "a veterinary worker",
          "a tailor",
          "a barber",
          "a conductor"
        ],
        "correct": 0,
        "why": "Veterinary workers treat animals."
      },
      {
        "q": "Wild animals usually live:",
        "choices": [
          "inside exercise books",
          "in natural habitats",
          "in cups",
          "on desks only"
        ],
        "correct": 1,
        "why": "Wild animals live in natural habitats."
      }
    ]
  },
  {
    "id": "p4-weather-changes",
    "themeId": "p4-science-environment",
    "themeName": "Our Environment",
    "title": "Weather Changes Around Us",
    "estMinutes": 32,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P4 Science beta: built from the NCDC Primary Four Integrated Science Syllabus, April 2009; human science/health review still required before premium-final release. Weather Changes Around Us helps P4 learners observe, care for health and environment, and explain everyday science clearly.",
      "learningObjectives": [
        "Name weather elements.",
        "Observe weather changes.",
        "Use simple weather symbols.",
        "Explain effects of weather on people, plants and animals."
      ],
      "whatYouNeedToKnow": [
        "Weather is the condition of the atmosphere at a particular time.",
        "Weather elements include sunshine, rain, wind, clouds and temperature.",
        "Weather changes from time to time and from place to place.",
        "Weather affects clothing, farming, travel and play.",
        "Weather symbols help us record weather quickly."
      ],
      "worked": {
        "problem": "Why do farmers need rain?",
        "steps": [
          "Crops need water to grow.",
          "Rain provides water to crops and soil.",
          "Too little rain can make crops dry."
        ],
        "answer": "Farmers need rain because crops need water to grow."
      },
      "commonMistakes": [
        "Confusing weather with climate.",
        "Saying every cloudy day must have heavy rain.",
        "Forgetting that too much rain can also cause problems.",
        "Not observing weather before recording it."
      ],
      "recap": [
        "Observe the sky and air.",
        "Use symbols carefully.",
        "Weather affects daily activities."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-weather-elements",
        "title": "1. Weather elements and symbols",
        "modules": [
          {
            "moduleId": "p4-weather-observation",
            "title": "Observing weather",
            "bigIdea": "Weather can be observed and recorded using simple symbols.",
            "learnIt": [
              "Sunshine can be shown by a sun symbol.",
              "Rain can be shown by drops or clouds with rain.",
              "Wind can be observed by moving leaves, flags or dust.",
              "Clouds may show that rain is possible."
            ],
            "workedExample": {
              "question": "A flag is moving strongly. Which weather element is being observed?",
              "steps": [
                "A moving flag shows air movement.",
                "Air movement is wind."
              ],
              "answer": "Wind is being observed."
            },
            "tryThis": {
              "question": "Which is a weather element?",
              "choices": [
                "tooth",
                "root",
                "rain",
                "profit"
              ],
              "correct": 2,
              "explanation": "Rain is a weather element."
            },
            "imageUrl": "/images/science/weather-symbols-chart.svg",
            "imageCaption": "Simple weather symbols for daily observation."
          }
        ]
      },
      {
        "subtopicId": "p4-weather-changes-application",
        "title": "2. Weather decisions in daily life",
        "modules": [
          {
            "moduleId": "p4-weather-changes-application-module",
            "title": "Using weather information",
            "bigIdea": "Weather observations help learners make safe daily choices.",
            "learnIt": [
              "Cloudy skies may warn people to carry raincoats or protect drying crops.",
              "Strong wind may make dust, falling branches or unsafe water travel.",
              "Weather records help farmers plan planting and harvesting."
            ],
            "workedExample": {
              "question": "The sky is dark with heavy clouds before school. What should a learner carry?",
              "steps": [
                "Dark heavy clouds may show rain is likely.",
                "A raincoat or umbrella can keep the learner dry."
              ],
              "answer": "A raincoat or umbrella."
            },
            "tryThis": {
              "question": "Which activity is risky during heavy rain?",
              "choices": [
                "staying indoors",
                "wearing a raincoat",
                "protecting books",
                "crossing a flooded stream"
              ],
              "correct": 3,
              "explanation": "Flooded streams can be dangerous."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Weather is:",
        "choices": [
          "condition of air at a time",
          "a plant part",
          "a tooth type",
          "a body organ"
        ],
        "correct": 0,
        "why": "Weather is the condition of the atmosphere."
      },
      {
        "q": "Which is a weather element?",
        "choices": [
          "root",
          "wind",
          "profit",
          "molar"
        ],
        "correct": 1,
        "why": "Wind is a weather element."
      },
      {
        "q": "A rain symbol helps us:",
        "choices": [
          "cook food",
          "measure teeth",
          "record rainy weather",
          "sell goods"
        ],
        "correct": 2,
        "why": "Weather symbols record weather."
      },
      {
        "q": "Farmers need rain because crops need:",
        "choices": [
          "stones only",
          "darkness only",
          "smoke",
          "water"
        ],
        "correct": 3,
        "why": "Crops need water."
      },
      {
        "q": "Too much rain may cause:",
        "choices": [
          "floods",
          "tooth decay",
          "reading",
          "good drying only"
        ],
        "correct": 0,
        "why": "Excess rain may flood places."
      },
      {
        "q": "A thermometer measures:",
        "choices": [
          "wind direction only",
          "temperature",
          "rain drops only",
          "plant roots"
        ],
        "correct": 1,
        "why": "Temperature is measured with a thermometer."
      }
    ]
  },
  {
    "id": "p4-personal-hygiene",
    "themeId": "p4-science-human-health",
    "themeName": "Human Health",
    "title": "Personal Hygiene",
    "estMinutes": 32,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P4 Science beta: built from the NCDC Primary Four Integrated Science Syllabus, April 2009; human science/health review still required before premium-final release. Personal Hygiene helps P4 learners observe, care for health and environment, and explain everyday science clearly.",
      "learningObjectives": [
        "Describe ways of keeping the body clean.",
        "Explain clothes cleanliness.",
        "State good hygiene habits.",
        "Explain how hygiene helps prevent disease."
      ],
      "whatYouNeedToKnow": [
        "Personal hygiene means keeping the body and personal items clean.",
        "Good hygiene includes bathing, washing hands, brushing teeth and wearing clean clothes.",
        "Wash hands with clean water and soap after latrine use and before eating.",
        "Clean clothes reduce bad smell, skin infections and spread of germs.",
        "Good hygiene protects the learner and the people around them."
      ],
      "worked": {
        "problem": "Why should learners wash hands before eating?",
        "steps": [
          "Hands may carry germs from surfaces, soil or latrines.",
          "If germs enter the mouth, they may cause disease.",
          "Washing hands removes many germs."
        ],
        "answer": "Learners wash hands before eating to remove germs and prevent disease."
      },
      "commonMistakes": [
        "Washing hands with water only when soap is available.",
        "Forgetting to wash after latrine use.",
        "Sharing towels or combs carelessly.",
        "Wearing wet dirty clothes for long."
      ],
      "recap": [
        "Keep body clean.",
        "Wash hands at key times.",
        "Cleanliness prevents many diseases."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-body-cleanliness",
        "title": "1. Body and clothes cleanliness",
        "modules": [
          {
            "moduleId": "p4-hygiene-habits",
            "title": "Good hygiene habits",
            "bigIdea": "Hygiene is a daily habit that protects health.",
            "learnIt": [
              "Bathe regularly using clean water and soap.",
              "Brush teeth to remove food particles and reduce tooth decay.",
              "Wash hands before eating and after using a latrine.",
              "Wear clean dry clothes."
            ],
            "workedExample": {
              "question": "Name two times when hands should be washed.",
              "steps": [
                "Think of times germs may enter the body.",
                "Before eating and after latrine use are important."
              ],
              "answer": "Before eating and after using the latrine."
            },
            "tryThis": {
              "question": "Which habit prevents disease?",
              "choices": [
                "eating with dirty hands",
                "wearing wet clothes",
                "washing hands with soap",
                "not bathing"
              ],
              "correct": 2,
              "explanation": "Handwashing removes many germs."
            },
            "imageUrl": "/images/science/personal-hygiene-handwashing.svg",
            "imageCaption": "Personal hygiene habits that help prevent disease."
          }
        ]
      },
      {
        "subtopicId": "p4-personal-hygiene-application",
        "title": "2. Hygiene decisions at school",
        "modules": [
          {
            "moduleId": "p4-personal-hygiene-application-module",
            "title": "Choosing healthy habits",
            "bigIdea": "Personal hygiene becomes useful when learners practise it at the right times.",
            "learnIt": [
              "Wash hands before eating, after latrine use and after cleaning dirty places.",
              "Keep nails short and clean because dirt can hide under nails.",
              "Do not share personal items such as toothbrushes."
            ],
            "workedExample": {
              "question": "A learner wants to eat after playing in soil. What should happen first?",
              "steps": [
                "Soil can carry germs or worm eggs.",
                "The learner should wash hands with clean water and soap before eating."
              ],
              "answer": "Wash hands with clean water and soap."
            },
            "tryThis": {
              "question": "Which item should not be shared?",
              "choices": [
                "football",
                "class reader",
                "chalkboard",
                "toothbrush"
              ],
              "correct": 3,
              "explanation": "A toothbrush is a personal hygiene item."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Personal hygiene means:",
        "choices": [
          "keeping the body clean",
          "growing crops",
          "drawing maps",
          "counting money"
        ],
        "correct": 0,
        "why": "Personal hygiene is body cleanliness."
      },
      {
        "q": "We should wash hands after:",
        "choices": [
          "reading a poem",
          "using a latrine",
          "seeing the sun",
          "drawing a line"
        ],
        "correct": 1,
        "why": "Hands may get germs after latrine use."
      },
      {
        "q": "Soap helps to:",
        "choices": [
          "grow teeth",
          "make wind",
          "remove germs and dirt",
          "measure mass"
        ],
        "correct": 2,
        "why": "Soap helps remove dirt and germs."
      },
      {
        "q": "Dirty clothes may cause:",
        "choices": [
          "good health always",
          "more sunlight",
          "clean air",
          "skin infections"
        ],
        "correct": 3,
        "why": "Dirty clothes can carry germs."
      },
      {
        "q": "Brushing teeth helps prevent:",
        "choices": [
          "tooth decay",
          "rain",
          "wind",
          "profit"
        ],
        "correct": 0,
        "why": "Brushing removes food particles."
      },
      {
        "q": "A clean learner should:",
        "choices": [
          "never wash",
          "bathe regularly",
          "share dirty towels",
          "eat with dirty hands"
        ],
        "correct": 1,
        "why": "Regular bathing is hygienic."
      }
    ]
  },
  {
    "id": "p4-sanitation",
    "themeId": "p4-science-human-health",
    "themeName": "Human Health",
    "title": "Sanitation",
    "estMinutes": 32,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P4 Science beta: built from the NCDC Primary Four Integrated Science Syllabus, April 2009; human science/health review still required before premium-final release. Sanitation helps P4 learners observe, care for health and environment, and explain everyday science clearly.",
      "learningObjectives": [
        "Describe sanitation at home and school.",
        "Explain safe disposal of waste.",
        "Describe proper latrine use.",
        "Explain the importance of clean water."
      ],
      "whatYouNeedToKnow": [
        "Sanitation means keeping the surroundings clean to protect health.",
        "Waste should be put in proper places such as dustbins, rubbish pits or compost pits.",
        "Latrines should be used properly and kept clean.",
        "Clean water should be collected, stored and used safely.",
        "Poor sanitation attracts flies, rats and germs."
      ],
      "worked": {
        "problem": "Why should a latrine be covered after use?",
        "steps": [
          "Uncovered latrines attract flies.",
          "Flies can carry germs to food.",
          "Covering helps reduce spread of disease."
        ],
        "answer": "It reduces flies and helps prevent disease spread."
      },
      "commonMistakes": [
        "Throwing rubbish anywhere.",
        "Leaving stagnant water around homes.",
        "Using latrines without washing hands.",
        "Mixing drinking water with dirty containers."
      ],
      "recap": [
        "Keep surroundings clean.",
        "Dispose of waste safely.",
        "Use clean water and latrines properly."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-clean-environment",
        "title": "1. Clean home and school environment",
        "modules": [
          {
            "moduleId": "p4-sanitation-practices",
            "title": "Sanitation practices",
            "bigIdea": "Clean surroundings reduce pests and disease.",
            "learnIt": [
              "Sweep the compound and classroom.",
              "Put rubbish in dustbins or pits.",
              "Drain stagnant water to reduce mosquito breeding.",
              "Keep latrines clean and wash hands after use."
            ],
            "workedExample": {
              "question": "A school has stagnant water near classrooms. What should be done?",
              "steps": [
                "Stagnant water can breed mosquitoes.",
                "Drain or fill the stagnant water."
              ],
              "answer": "Drain or fill the stagnant water to reduce mosquitoes."
            },
            "tryThis": {
              "question": "Where should rubbish be put?",
              "choices": [
                "classroom floor",
                "water source",
                "dustbin or rubbish pit",
                "roadside"
              ],
              "correct": 2,
              "explanation": "Rubbish should be disposed of safely."
            },
            "imageUrl": "/images/science/p4-sanitation-clean-environment.svg",
            "imageCaption": "Sanitation practices for clean surroundings."
          }
        ]
      },
      {
        "subtopicId": "p4-sanitation-application",
        "title": "2. Sanitation problem solving",
        "modules": [
          {
            "moduleId": "p4-sanitation-application-module",
            "title": "Keeping shared places clean",
            "bigIdea": "Sanitation protects everyone because dirty places can spread disease.",
            "learnIt": [
              "Classrooms, latrines, kitchens and water points should be kept clean.",
              "Rubbish should be sorted or placed in the correct pit/bin.",
              "Community sanitation improves when everyone takes responsibility."
            ],
            "workedExample": {
              "question": "A rubbish pit is overflowing near a classroom. What problem can this cause?",
              "steps": [
                "Overflowing rubbish attracts flies, rats and bad smell.",
                "These can spread germs and make the school unhealthy."
              ],
              "answer": "It can attract pests and spread disease."
            },
            "tryThis": {
              "question": "A good sanitation action is to:",
              "choices": [
                "throw rubbish anywhere",
                "leave latrines dirty",
                "keep stagnant water",
                "empty or manage rubbish safely"
              ],
              "correct": 3,
              "explanation": "Safe waste management improves sanitation."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Sanitation means:",
        "choices": [
          "keeping surroundings clean",
          "eating only meat",
          "measuring time",
          "drawing triangles"
        ],
        "correct": 0,
        "why": "Sanitation is environmental cleanliness."
      },
      {
        "q": "Stagnant water may breed:",
        "choices": [
          "books",
          "mosquitoes",
          "teeth",
          "flowers only"
        ],
        "correct": 1,
        "why": "Mosquitoes breed in stagnant water."
      },
      {
        "q": "Rubbish should be put in:",
        "choices": [
          "a water pot",
          "the classroom floor",
          "a dustbin or rubbish pit",
          "a plate"
        ],
        "correct": 2,
        "why": "Safe disposal reduces pests."
      },
      {
        "q": "After using a latrine, we should:",
        "choices": [
          "eat immediately with dirty hands",
          "touch food",
          "leave the door open",
          "wash hands"
        ],
        "correct": 3,
        "why": "Handwashing prevents germs."
      },
      {
        "q": "Dirty surroundings attract:",
        "choices": [
          "flies and rats",
          "clean air only",
          "more books",
          "good water"
        ],
        "correct": 0,
        "why": "Flies and rats are attracted to dirt."
      },
      {
        "q": "Drinking water should be stored:",
        "choices": [
          "open and dirty",
          "covered and clean",
          "near rubbish",
          "in a broken container"
        ],
        "correct": 1,
        "why": "Covered clean storage protects water."
      }
    ]
  },
  {
    "id": "p4-our-food",
    "themeId": "p4-science-human-body",
    "themeName": "Human Body",
    "title": "Our Food",
    "estMinutes": 32,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P4 Science beta: built from the NCDC Primary Four Integrated Science Syllabus, April 2009; human science/health review still required before premium-final release. Our Food helps P4 learners observe, care for health and environment, and explain everyday science clearly.",
      "learningObjectives": [
        "Name food types.",
        "Explain a balanced diet.",
        "Describe food hygiene.",
        "State uses of food."
      ],
      "whatYouNeedToKnow": [
        "Food gives the body energy, helps growth and protects against disease.",
        "Energy-giving foods include posho, rice, cassava and sweet potatoes.",
        "Body-building foods include beans, fish, eggs, milk and meat.",
        "Protective foods include fruits and vegetables.",
        "A balanced diet contains energy-giving, body-building and protective foods."
      ],
      "worked": {
        "problem": "Why is a meal of posho, beans and greens better than posho alone?",
        "steps": [
          "Posho gives energy.",
          "Beans help body growth and repair.",
          "Greens help protect the body."
        ],
        "answer": "It is more balanced because it has energy-giving, body-building and protective foods."
      },
      "commonMistakes": [
        "Eating only one type of food every day.",
        "Keeping food uncovered where flies can land on it.",
        "Not washing fruits before eating.",
        "Calling sweets a balanced diet."
      ],
      "recap": [
        "Eat a variety of foods.",
        "Keep food clean and covered.",
        "Balanced meals help the body grow and stay healthy."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-food-types",
        "title": "1. Food types and hygiene",
        "modules": [
          {
            "moduleId": "p4-balanced-diet",
            "title": "Balanced diet",
            "bigIdea": "The body needs different food groups to work well.",
            "learnIt": [
              "Energy-giving foods help us work and play.",
              "Body-building foods help growth and repair.",
              "Protective foods help the body fight disease.",
              "Food should be washed, cooked well when needed and covered."
            ],
            "workedExample": {
              "question": "Classify beans by food group.",
              "steps": [
                "Beans help build and repair the body.",
                "They are rich in proteins."
              ],
              "answer": "Beans are body-building food."
            },
            "tryThis": {
              "question": "Which is protective food?",
              "choices": [
                "posho",
                "meat",
                "orange",
                "sugar"
              ],
              "correct": 2,
              "explanation": "Fruits such as oranges are protective foods."
            },
            "imageUrl": "/images/science/p4-balanced-diet.svg",
            "imageCaption": "Balanced diet and food hygiene summary."
          }
        ]
      },
      {
        "subtopicId": "p4-our-food-application",
        "title": "2. Planning a balanced meal",
        "modules": [
          {
            "moduleId": "p4-our-food-application-module",
            "title": "Healthy food choices",
            "bigIdea": "A balanced meal combines food groups in a way the body can use.",
            "learnIt": [
              "A meal of only one food group is usually not balanced.",
              "Add body-building and protective foods to energy-giving foods.",
              "Food hygiene matters: wash, cook and cover food properly."
            ],
            "workedExample": {
              "question": "Improve this meal: posho only.",
              "steps": [
                "Posho mainly gives energy.",
                "Add beans for body-building food.",
                "Add greens or fruit for protective food."
              ],
              "answer": "Add beans and vegetables or fruit to make it more balanced."
            },
            "tryThis": {
              "question": "Which meal is more balanced?",
              "choices": [
                "sweets only",
                "cassava only",
                "soda only",
                "posho, beans and greens"
              ],
              "correct": 3,
              "explanation": "It has energy, body-building and protective foods."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Food gives the body:",
        "choices": [
          "energy and growth materials",
          "only dirt",
          "rain",
          "vectors"
        ],
        "correct": 0,
        "why": "Food supports life."
      },
      {
        "q": "Beans are mainly:",
        "choices": [
          "weather symbols",
          "body-building foods",
          "vectors",
          "teeth"
        ],
        "correct": 1,
        "why": "Beans have proteins."
      },
      {
        "q": "Fruits and vegetables are:",
        "choices": [
          "only energy foods",
          "poisons",
          "protective foods",
          "waste"
        ],
        "correct": 2,
        "why": "They protect the body."
      },
      {
        "q": "A balanced diet has:",
        "choices": [
          "only sweets",
          "only water",
          "only salt",
          "different food groups"
        ],
        "correct": 3,
        "why": "Balanced means varied and useful."
      },
      {
        "q": "Food should be covered to keep away:",
        "choices": [
          "flies",
          "books",
          "sunlight always",
          "teachers"
        ],
        "correct": 0,
        "why": "Flies can carry germs."
      },
      {
        "q": "Before eating fruits, we should:",
        "choices": [
          "throw them in dust",
          "wash them",
          "step on them",
          "leave them near flies"
        ],
        "correct": 1,
        "why": "Washing removes dirt and germs."
      }
    ]
  },
  {
    "id": "p4-human-body-organs",
    "themeId": "p4-science-human-body",
    "themeName": "Human Body",
    "title": "Human Body Organs",
    "estMinutes": 32,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P4 Science beta: built from the NCDC Primary Four Integrated Science Syllabus, April 2009; human science/health review still required before premium-final release. Human Body Organs helps P4 learners observe, care for health and environment, and explain everyday science clearly.",
      "learningObjectives": [
        "Name major body organs.",
        "State functions of organs.",
        "Describe ways of caring for body organs.",
        "Introduce body systems simply."
      ],
      "whatYouNeedToKnow": [
        "Organs are body parts that do special work.",
        "The heart pumps blood around the body.",
        "The lungs help us breathe.",
        "The stomach helps digest food.",
        "The brain controls body activities.",
        "Good food, exercise, rest and hygiene help protect body organs."
      ],
      "worked": {
        "problem": "What is the function of the lungs?",
        "steps": [
          "Lungs are found in the chest.",
          "They help the body take in oxygen and remove carbon dioxide."
        ],
        "answer": "The lungs help us breathe."
      },
      "commonMistakes": [
        "Calling all body parts organs without knowing their work.",
        "Thinking the heart stores food.",
        "Forgetting that exercise and rest help body organs.",
        "Using unsafe substances that can harm organs."
      ],
      "recap": [
        "Each organ has a job.",
        "Care for organs by healthy habits.",
        "Body organs work together."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-major-organs",
        "title": "1. Major body organs",
        "modules": [
          {
            "moduleId": "p4-body-organs-functions",
            "title": "Organs and functions",
            "bigIdea": "The body works because organs do different jobs together.",
            "learnIt": [
              "The brain controls thinking, movement and many body activities.",
              "The heart pumps blood.",
              "The lungs help breathing.",
              "The stomach helps digest food."
            ],
            "workedExample": {
              "question": "Which organ pumps blood?",
              "steps": [
                "Blood is moved around the body by pumping.",
                "The heart is the pumping organ."
              ],
              "answer": "The heart pumps blood."
            },
            "tryThis": {
              "question": "Which organ controls thinking?",
              "choices": [
                "stomach",
                "tooth",
                "brain",
                "skin only"
              ],
              "correct": 2,
              "explanation": "The brain controls thinking and body activities."
            },
            "imageUrl": "/images/science/p4-body-organs.svg",
            "imageCaption": "Major body organs and functions."
          }
        ]
      },
      {
        "subtopicId": "p4-human-body-organs-application",
        "title": "2. Protecting body organs",
        "modules": [
          {
            "moduleId": "p4-human-body-organs-application-module",
            "title": "Healthy habits for organs",
            "bigIdea": "Body organs work best when learners practise safe and healthy habits.",
            "learnIt": [
              "Exercise helps the heart and lungs.",
              "Balanced food helps the stomach, blood and body growth.",
              "Avoid smoke, unknown medicines and poisonous substances because they can harm organs."
            ],
            "workedExample": {
              "question": "Why is cigarette smoke bad for the lungs?",
              "steps": [
                "Lungs help breathing.",
                "Smoke can damage lungs and make breathing difficult."
              ],
              "answer": "Smoke can harm the lungs and breathing."
            },
            "tryThis": {
              "question": "Which habit protects body organs?",
              "choices": [
                "taking unknown tablets",
                "breathing smoke",
                "never resting",
                "eating balanced food"
              ],
              "correct": 3,
              "explanation": "Balanced food supports body organs."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "The heart pumps:",
        "choices": [
          "blood",
          "air only",
          "food only",
          "urine only"
        ],
        "correct": 0,
        "why": "The heart pumps blood."
      },
      {
        "q": "The lungs help us:",
        "choices": [
          "chew",
          "breathe",
          "think only",
          "walk only"
        ],
        "correct": 1,
        "why": "Lungs are for breathing."
      },
      {
        "q": "The brain controls:",
        "choices": [
          "digestion only",
          "tooth decay",
          "body activities",
          "rain"
        ],
        "correct": 2,
        "why": "The brain controls body activities."
      },
      {
        "q": "The stomach helps to:",
        "choices": [
          "pump blood",
          "make rain",
          "measure length",
          "digest food"
        ],
        "correct": 3,
        "why": "The stomach digests food."
      },
      {
        "q": "We care for organs by:",
        "choices": [
          "eating well and exercising",
          "taking poison",
          "not resting",
          "eating dirty food"
        ],
        "correct": 0,
        "why": "Healthy habits protect organs."
      },
      {
        "q": "An organ is:",
        "choices": [
          "a type of weather",
          "a body part with a special job",
          "a crop disease",
          "a graph"
        ],
        "correct": 1,
        "why": "Organs do special work."
      }
    ]
  },
  {
    "id": "p4-teeth",
    "themeId": "p4-science-human-body",
    "themeName": "Human Body",
    "title": "The Teeth",
    "estMinutes": 32,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P4 Science beta: built from the NCDC Primary Four Integrated Science Syllabus, April 2009; human science/health review still required before premium-final release. The Teeth helps P4 learners observe, care for health and environment, and explain everyday science clearly.",
      "learningObjectives": [
        "Name types of teeth.",
        "State functions of different teeth.",
        "Describe tooth care.",
        "Explain ways of preventing tooth decay."
      ],
      "whatYouNeedToKnow": [
        "Teeth help us bite, tear, crush and grind food.",
        "Incisors cut food.",
        "Canines tear food.",
        "Premolars and molars crush and grind food.",
        "Brush teeth regularly and avoid too many sugary foods.",
        "Visit a dentist or health worker when teeth hurt."
      ],
      "worked": {
        "problem": "Which teeth are used for tearing food?",
        "steps": [
          "Different teeth have different shapes.",
          "Canines are pointed and help tear food."
        ],
        "answer": "Canines tear food."
      },
      "commonMistakes": [
        "Using the same function for all teeth.",
        "Forgetting to brush before sleep.",
        "Eating many sweets and not cleaning teeth.",
        "Using teeth to open bottles or crack hard objects."
      ],
      "recap": [
        "Know tooth types.",
        "Brush teeth properly.",
        "Reduce sugar and seek help for tooth pain."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-types-of-teeth",
        "title": "1. Types and care of teeth",
        "modules": [
          {
            "moduleId": "p4-teeth-functions-care",
            "title": "Teeth functions and tooth care",
            "bigIdea": "Healthy teeth help us eat and speak clearly.",
            "learnIt": [
              "Incisors cut food at the front of the mouth.",
              "Canines tear food.",
              "Premolars and molars grind food.",
              "Brush teeth with a toothbrush and toothpaste or safe local method recommended by a health worker."
            ],
            "workedExample": {
              "question": "Why should we brush teeth before sleeping?",
              "steps": [
                "Food particles left on teeth can feed germs.",
                "Germs can cause tooth decay."
              ],
              "answer": "Brushing removes food particles and helps prevent tooth decay."
            },
            "tryThis": {
              "question": "Which teeth grind food?",
              "choices": [
                "canines",
                "incisors only",
                "molars",
                "tongue"
              ],
              "correct": 2,
              "explanation": "Molars grind food."
            },
            "imageUrl": "/images/science/teeth-types-functions.svg",
            "imageCaption": "Types of teeth and their functions."
          }
        ]
      },
      {
        "subtopicId": "p4-teeth-application",
        "title": "2. Preventing tooth decay",
        "modules": [
          {
            "moduleId": "p4-teeth-application-module",
            "title": "Daily tooth care",
            "bigIdea": "Tooth care is daily work, not only something done when teeth hurt.",
            "learnIt": [
              "Brush teeth after meals or at least morning and night where possible.",
              "Reduce sugary snacks and rinse/clean teeth after eating.",
              "Do not use teeth to crack hard objects or open bottles."
            ],
            "workedExample": {
              "question": "A learner often eats sweets and sleeps without brushing. What may happen?",
              "steps": [
                "Sugar and food particles can remain on teeth.",
                "Germs use them and may cause tooth decay."
              ],
              "answer": "The learner may get tooth decay."
            },
            "tryThis": {
              "question": "Which protects teeth?",
              "choices": [
                "opening bottles with teeth",
                "eating sweets all day",
                "never cleaning teeth",
                "brushing regularly"
              ],
              "correct": 3,
              "explanation": "Regular brushing protects teeth."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Incisors are used for:",
        "choices": [
          "cutting food",
          "pumping blood",
          "breathing",
          "seeing"
        ],
        "correct": 0,
        "why": "Incisors cut food."
      },
      {
        "q": "Canines are used for:",
        "choices": [
          "grinding only",
          "tearing food",
          "making saliva",
          "hearing"
        ],
        "correct": 1,
        "why": "Canines tear food."
      },
      {
        "q": "Molars help to:",
        "choices": [
          "cut paper",
          "pump blood",
          "grind food",
          "make rain"
        ],
        "correct": 2,
        "why": "Molars grind food."
      },
      {
        "q": "Too many sweets may cause:",
        "choices": [
          "stronger teeth always",
          "rain",
          "clean water",
          "tooth decay"
        ],
        "correct": 3,
        "why": "Sugar can contribute to tooth decay."
      },
      {
        "q": "We should brush teeth:",
        "choices": [
          "regularly",
          "never",
          "only once a year",
          "with soil always"
        ],
        "correct": 0,
        "why": "Regular brushing helps teeth."
      },
      {
        "q": "A person who treats teeth is a:",
        "choices": [
          "driver",
          "dentist",
          "tailor",
          "farmer"
        ],
        "correct": 1,
        "why": "Dentists treat teeth."
      }
    ]
  },
  {
    "id": "p4-communicable-intestinal-diseases-worms",
    "themeId": "p4-science-human-health",
    "themeName": "Human Health",
    "title": "Communicable Intestinal Diseases and Worm Infestation",
    "estMinutes": 34,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P4 Science beta: built from the NCDC Primary Four Integrated Science Syllabus, April 2009; human science/health review still required before premium-final release. Communicable Intestinal Diseases and Worm Infestation helps P4 learners observe, care for health and environment, and explain everyday science clearly.",
      "learningObjectives": [
        "Explain communicable diseases simply.",
        "Name intestinal diseases and worm infestation risks.",
        "Describe signs that require adult/health-worker help.",
        "State prevention through hygiene, safe water and latrine use."
      ],
      "whatYouNeedToKnow": [
        "A communicable disease can spread from one person to another.",
        "Intestinal diseases affect the stomach and intestines and may cause diarrhoea or stomach pain.",
        "Worm infestation happens when worms live inside the body, often through contaminated soil, food or water.",
        "Prevention includes washing hands, using latrines, wearing shoes, drinking safe water and eating clean food.",
        "Sick learners should tell an adult and get help from a health worker."
      ],
      "worked": {
        "problem": "Why should learners wear shoes when going to the latrine or garden?",
        "steps": [
          "Some worms can enter through bare feet in contaminated soil.",
          "Shoes protect feet from germs, worms and injuries."
        ],
        "answer": "Shoes help prevent worm infestation and injuries."
      },
      "commonMistakes": [
        "Hiding sickness instead of telling an adult.",
        "Drinking unsafe water.",
        "Walking barefoot in dirty places.",
        "Thinking worms only affect children who eat too much."
      ],
      "recap": [
        "Communicable means can spread.",
        "Use latrines and wash hands.",
        "Seek adult/health-worker help when sick."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-intestinal-diseases-worms",
        "title": "1. Intestinal diseases and worm prevention",
        "modules": [
          {
            "moduleId": "p4-worms-hygiene",
            "title": "Preventing intestinal disease",
            "bigIdea": "Clean habits break the path of germs and worms into the body.",
            "learnIt": [
              "Wash hands after using the latrine and before eating.",
              "Drink boiled or treated safe water.",
              "Wear shoes in dirty or risky places.",
              "Use latrines properly and keep food covered."
            ],
            "workedExample": {
              "question": "A learner has stomach pain and diarrhoea. What should they do?",
              "steps": [
                "The learner should not hide sickness.",
                "Tell a parent, teacher or trusted adult.",
                "A health worker can advise treatment."
              ],
              "answer": "Tell an adult and get health-worker help."
            },
            "tryThis": {
              "question": "Which habit prevents worms?",
              "choices": [
                "walking barefoot in dirty soil",
                "eating unwashed fruit",
                "wearing shoes",
                "not washing hands"
              ],
              "correct": 2,
              "explanation": "Shoes protect feet from some worm infections and injuries."
            },
            "imageUrl": "/images/science/p4-worms-disease-prevention.svg",
            "imageCaption": "Ways to prevent intestinal diseases and worms."
          }
        ]
      },
      {
        "subtopicId": "p4-communicable-intestinal-diseases-worms-application",
        "title": "2. Breaking the disease path",
        "modules": [
          {
            "moduleId": "p4-communicable-intestinal-diseases-worms-application-module",
            "title": "Stopping germs and worms",
            "bigIdea": "Prevention works by stopping germs and worms from entering the body.",
            "learnIt": [
              "Use latrines so faeces do not contaminate soil and water.",
              "Wash hands and food before eating.",
              "Wear shoes in risky dirty places and drink safe water."
            ],
            "workedExample": {
              "question": "A child eats mangoes picked from the ground without washing them. What risk is there?",
              "steps": [
                "The mangoes may have dirt or germs on them.",
                "Eating them unwashed may cause stomach illness."
              ],
              "answer": "The child may swallow germs and get sick."
            },
            "tryThis": {
              "question": "Which breaks the disease path?",
              "choices": [
                "eating with dirty hands",
                "drinking unsafe water",
                "walking barefoot in dirty soil",
                "washing fruits before eating"
              ],
              "correct": 3,
              "explanation": "Washing fruits removes dirt and many germs."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Communicable disease can:",
        "choices": [
          "spread from person to person",
          "turn into a graph",
          "measure time",
          "be a tooth type"
        ],
        "correct": 0,
        "why": "Communicable means it can spread."
      },
      {
        "q": "One way to prevent intestinal disease is:",
        "choices": [
          "eating dirty food",
          "washing hands",
          "drinking unsafe water",
          "leaving food open"
        ],
        "correct": 1,
        "why": "Handwashing removes germs."
      },
      {
        "q": "Safe drinking water should be:",
        "choices": [
          "dirty",
          "from any puddle",
          "boiled or treated",
          "stored open near animals"
        ],
        "correct": 2,
        "why": "Safe water reduces disease."
      },
      {
        "q": "Worm infestation may be prevented by:",
        "choices": [
          "walking barefoot everywhere",
          "not using latrines",
          "eating soil",
          "wearing shoes"
        ],
        "correct": 3,
        "why": "Shoes protect feet."
      },
      {
        "q": "If a learner is sick, they should:",
        "choices": [
          "tell an adult",
          "hide it",
          "share medicine secretly",
          "ignore it always"
        ],
        "correct": 0,
        "why": "A trusted adult can help."
      },
      {
        "q": "A latrine helps to:",
        "choices": [
          "store food",
          "dispose of faeces safely",
          "wash clothes only",
          "grow flowers inside"
        ],
        "correct": 1,
        "why": "Latrines improve sanitation."
      }
    ]
  },
  {
    "id": "p4-vectors-diseases",
    "themeId": "p4-science-human-health",
    "themeName": "Human Health",
    "title": "Vectors and Diseases",
    "estMinutes": 32,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P4 Science beta: built from the NCDC Primary Four Integrated Science Syllabus, April 2009; human science/health review still required before premium-final release. Vectors and Diseases helps P4 learners observe, care for health and environment, and explain everyday science clearly.",
      "learningObjectives": [
        "Define vector simply.",
        "Name common vectors.",
        "Match vectors to diseases they may spread.",
        "Describe vector control and personal protection."
      ],
      "whatYouNeedToKnow": [
        "A vector is a living thing that carries disease-causing germs from one host to another.",
        "Common vectors include mosquitoes, houseflies, rats, fleas, lice and ticks.",
        "Mosquitoes can spread malaria.",
        "Houseflies can carry germs to food.",
        "Control vectors by destroying breeding places, covering food, using mosquito nets and keeping surroundings clean."
      ],
      "worked": {
        "problem": "Why should stagnant water be removed near homes?",
        "steps": [
          "Mosquitoes breed in stagnant water.",
          "Mosquitoes can spread malaria.",
          "Removing stagnant water reduces mosquito breeding."
        ],
        "answer": "It reduces mosquitoes and helps prevent malaria."
      },
      "commonMistakes": [
        "Calling every animal a vector.",
        "Killing one mosquito but leaving breeding water.",
        "Leaving food uncovered where flies can land.",
        "Forgetting that clean surroundings reduce vectors."
      ],
      "recap": [
        "Vectors spread germs.",
        "Destroy breeding places.",
        "Protect food and sleeping places."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-vector-control",
        "title": "1. Common vectors and control",
        "modules": [
          {
            "moduleId": "p4-vectors-control",
            "title": "Stopping vectors",
            "bigIdea": "Vector control protects families and communities from disease.",
            "learnIt": [
              "Drain stagnant water to control mosquitoes.",
              "Cover food and keep latrines clean to reduce flies.",
              "Store rubbish properly to reduce rats.",
              "Sleep under mosquito nets where needed."
            ],
            "workedExample": {
              "question": "A house has many flies around uncovered food. What should be done?",
              "steps": [
                "Flies can carry germs to food.",
                "Cover the food and clean the surroundings."
              ],
              "answer": "Cover food and keep the place clean."
            },
            "tryThis": {
              "question": "Which vector spreads malaria?",
              "choices": [
                "goat",
                "hen",
                "mosquito",
                "earthworm"
              ],
              "correct": 2,
              "explanation": "Mosquitoes can spread malaria."
            },
            "imageUrl": "/images/science/vectors-disease-control.svg",
            "imageCaption": "Common vectors and ways to control them."
          }
        ]
      },
      {
        "subtopicId": "p4-vectors-diseases-application",
        "title": "2. Vector-control choices",
        "modules": [
          {
            "moduleId": "p4-vectors-diseases-application-module",
            "title": "Stopping vectors before disease spreads",
            "bigIdea": "The best vector control removes the places vectors live, feed or breed.",
            "learnIt": [
              "Mosquito control includes draining stagnant water and sleeping under nets where needed.",
              "Fly control includes covering food and keeping latrines clean.",
              "Rat control includes proper storage and waste management."
            ],
            "workedExample": {
              "question": "A home has many mosquitoes because tins collect rainwater. What should be done?",
              "steps": [
                "Mosquitoes breed in stagnant water.",
                "Empty, cover or remove tins that collect water."
              ],
              "answer": "Remove or empty stagnant water containers."
            },
            "tryThis": {
              "question": "Which controls flies?",
              "choices": [
                "leaving food open",
                "keeping latrines dirty",
                "dumping rubbish everywhere",
                "covering food"
              ],
              "correct": 3,
              "explanation": "Covered food reduces contamination by flies."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "A vector:",
        "choices": [
          "carries disease germs",
          "makes food in leaves",
          "measures money",
          "is a tooth"
        ],
        "correct": 0,
        "why": "Vectors carry germs."
      },
      {
        "q": "Mosquitoes may spread:",
        "choices": [
          "tooth decay",
          "malaria",
          "profit",
          "weather"
        ],
        "correct": 1,
        "why": "Mosquitoes can spread malaria."
      },
      {
        "q": "Flies can contaminate:",
        "choices": [
          "chalk only",
          "rulers only",
          "food",
          "books only"
        ],
        "correct": 2,
        "why": "Flies can land on food."
      },
      {
        "q": "Stagnant water should be:",
        "choices": [
          "kept open",
          "used for rubbish",
          "covered with food",
          "drained"
        ],
        "correct": 3,
        "why": "Draining reduces mosquito breeding."
      },
      {
        "q": "Sleeping under a mosquito net helps prevent:",
        "choices": [
          "mosquito bites",
          "toothache",
          "broken bones",
          "reading"
        ],
        "correct": 0,
        "why": "Nets reduce mosquito bites."
      },
      {
        "q": "Clean surroundings help:",
        "choices": [
          "increase flies",
          "reduce vectors",
          "store germs",
          "breed rats"
        ],
        "correct": 1,
        "why": "Cleanliness reduces vectors."
      }
    ]
  },
  {
    "id": "p4-accidents-poisoning-first-aid",
    "themeId": "p4-science-human-health",
    "themeName": "Human Health",
    "title": "Accidents, Poisoning and First Aid",
    "estMinutes": 34,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P4 Science beta: built from the NCDC Primary Four Integrated Science Syllabus, April 2009; human science/health review still required before premium-final release. Accidents, Poisoning and First Aid helps P4 learners observe, care for health and environment, and explain everyday science clearly.",
      "learningObjectives": [
        "Name common accidents at home and school.",
        "Identify possible poisons and danger labels.",
        "State basic first-aid actions.",
        "Explain safety rules to prevent accidents and poisoning."
      ],
      "whatYouNeedToKnow": [
        "An accident is an unexpected event that may cause injury.",
        "Common accidents include cuts, burns, falls and road accidents.",
        "Poisoning happens when harmful substances enter the body.",
        "First aid is the first help given to an injured or sick person before full medical help.",
        "Children should call an adult quickly during serious injury or suspected poisoning."
      ],
      "worked": {
        "problem": "A learner cuts a finger while sharpening a pencil. What first help is safe?",
        "steps": [
          "Tell an adult or teacher.",
          "Wash hands or use clean materials.",
          "Press the cut gently with clean cloth to stop bleeding."
        ],
        "answer": "Tell an adult and press the cut with clean cloth; seek more help if bleeding continues."
      },
      "commonMistakes": [
        "Giving unknown medicine to a poisoned person.",
        "Touching blood with bare hands when clean protection is available.",
        "Hiding accidents from adults.",
        "Playing with paraffin, pesticides or tablets."
      ],
      "recap": [
        "Prevent accidents by following safety rules.",
        "Call an adult in emergencies.",
        "First aid is first help, not full treatment."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-safety-first-aid",
        "title": "1. Safety, poisoning and first aid",
        "modules": [
          {
            "moduleId": "p4-first-aid-safety",
            "title": "First help and safety rules",
            "bigIdea": "Safe first aid protects the injured person and the helper.",
            "learnIt": [
              "Keep sharp objects, medicines, paraffin and pesticides away from children.",
              "In suspected poisoning, call an adult and health worker immediately.",
              "For minor cuts, use clean cloth to control bleeding and seek help.",
              "For burns, cool the burn with clean cool running water and tell an adult."
            ],
            "workedExample": {
              "question": "A child drinks an unknown chemical. What should be done first?",
              "steps": [
                "This may be poisoning.",
                "Do not guess treatment or force vomiting.",
                "Call an adult and seek health-worker help immediately."
              ],
              "answer": "Call an adult and get urgent medical help."
            },
            "tryThis": {
              "question": "First aid means:",
              "choices": [
                "playing with tablets",
                "hiding injuries",
                "first help before full medical help",
                "full surgery"
              ],
              "correct": 2,
              "explanation": "First aid is immediate first help."
            },
            "imageUrl": "/images/science/p4-first-aid-safety.svg",
            "imageCaption": "Safe first aid and poisoning response reminders."
          }
        ]
      },
      {
        "subtopicId": "p4-accidents-poisoning-first-aid-application",
        "title": "2. Emergency choices",
        "modules": [
          {
            "moduleId": "p4-accidents-poisoning-first-aid-application-module",
            "title": "Safe action during accidents",
            "bigIdea": "First aid must be safe for both the injured person and the helper.",
            "learnIt": [
              "Call an adult quickly when an injury or poisoning is serious.",
              "Do not give unknown medicine or force vomiting after poisoning.",
              "Keep dangerous items such as paraffin, pesticides, tablets and sharp tools away from children."
            ],
            "workedExample": {
              "question": "A child swallows unknown tablets. What should be done immediately?",
              "steps": [
                "This is possible poisoning.",
                "Do not guess treatment.",
                "Call an adult and seek urgent health-worker help."
              ],
              "answer": "Call an adult and get urgent medical help."
            },
            "tryThis": {
              "question": "Which first action is safest for poisoning?",
              "choices": [
                "force vomiting immediately",
                "give more tablets",
                "hide the problem",
                "call an adult and health worker"
              ],
              "correct": 3,
              "explanation": "Poisoning needs urgent adult/health-worker help."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "An accident is:",
        "choices": [
          "an unexpected event causing injury",
          "a food group",
          "a weather symbol",
          "a plant part"
        ],
        "correct": 0,
        "why": "Accidents may cause injury."
      },
      {
        "q": "First aid is:",
        "choices": [
          "a game",
          "first help before full treatment",
          "a graph",
          "a type of crop"
        ],
        "correct": 1,
        "why": "First aid is first help."
      },
      {
        "q": "Medicines should be kept:",
        "choices": [
          "in sweets tins for play",
          "on the floor",
          "away from children",
          "in dirty water"
        ],
        "correct": 2,
        "why": "Medicines can poison if misused."
      },
      {
        "q": "For suspected poisoning, a child should:",
        "choices": [
          "hide",
          "drink more unknown chemicals",
          "sleep without telling anyone",
          "call an adult immediately"
        ],
        "correct": 3,
        "why": "Poisoning needs urgent adult help."
      },
      {
        "q": "A sharp knife can cause:",
        "choices": [
          "cuts",
          "malaria",
          "tooth decay",
          "clouds"
        ],
        "correct": 0,
        "why": "Sharp objects can cut."
      },
      {
        "q": "To prevent accidents, learners should:",
        "choices": [
          "play with fire",
          "follow safety rules",
          "run across roads",
          "touch electric wires"
        ],
        "correct": 1,
        "why": "Safety rules prevent accidents."
      }
    ]
  }
];

export function getP4ScienceTopic(id: string): Topic | undefined {
  return P4_SCIENCE_TOPICS.find((topic) => topic.id === id);
}
