import type { Topic } from "@/lib/topics";

// P5 Social Studies enriched beta content layer.
// Source map: content/curriculum/p5-social-studies.json
// Rule: NCDC first, build second. This file follows the researched NCDC P5 Social Studies topic structure.
// Status: live beta until checked by human Social Studies/history/civic reviewers.

export const P5_SOCIAL_TOPICS: Topic[] = [
  {
    "id": "p5-location-uganda-map-east-africa",
    "themeId": "p5-sst-uganda",
    "themeName": "Primary Five Social Studies: Uganda",
    "title": "Location of Uganda on the Map of East Africa",
    "estMinutes": 40,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P5 Social Studies beta: built from researched NCDC Primary Five Social Studies Set One structure; human history/civic review still required before premium-final release. Location of Uganda on the Map of East Africa helps learners understand Uganda and explain Social Studies ideas with evidence.",
      "learningObjectives": [
        "Locate Uganda in East Africa.",
        "Name Uganda’s neighbours.",
        "Use compass directions to describe location.",
        "Use map elements such as title, key and scale."
      ],
      "whatYouNeedToKnow": [
        "Uganda is a landlocked country in East Africa.",
        "Uganda borders Kenya, Tanzania, Rwanda, the Democratic Republic of Congo and South Sudan.",
        "A compass shows north, east, south and west.",
        "A map key explains symbols used on a map.",
        "The title tells what the map shows."
      ],
      "worked": {
        "problem": "Describe Uganda’s location using neighbours.",
        "steps": [
          "State the region: East Africa.",
          "Mention that Uganda is landlocked.",
          "Name at least two neighbours."
        ],
        "answer": "Uganda is a landlocked country in East Africa. It neighbours Kenya and Tanzania among others."
      },
      "commonMistakes": [
        "Confusing East Africa with the whole of Africa.",
        "Using left/right instead of compass directions on maps.",
        "Forgetting that Uganda is landlocked.",
        "Naming non-neighbouring countries as direct neighbours."
      ],
      "recap": [
        "Uganda is in East Africa.",
        "Uganda is landlocked.",
        "Use compass directions and map elements."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p5-uganda-location",
        "title": "1. Uganda in East Africa",
        "modules": [
          {
            "moduleId": "p5-uganda-location-region",
            "title": "Uganda’s position in East Africa",
            "bigIdea": "Location is clearer when learners use region, neighbours and water bodies.",
            "learnIt": [
              "Uganda lies in East Africa.",
              "It is landlocked, meaning it has no coastline.",
              "Lake Victoria lies to the south of Uganda.",
              "Kenya is east of Uganda and DRC is west of Uganda."
            ],
            "imageUrl": "/images/social-studies/p5-uganda-east-africa-map.svg",
            "imageCaption": "Uganda in East Africa and its neighbours.",
            "workedExample": {
              "question": "Which country lies east of Uganda?",
              "steps": [
                "Look at Uganda’s neighbouring countries.",
                "Kenya is on the eastern side."
              ],
              "answer": "Kenya lies east of Uganda."
            },
            "tryThis": {
              "question": "Uganda is described as landlocked because it:",
              "choices": [
                "has no coastline",
                "has no lakes",
                "has no neighbours",
                "has no rivers"
              ],
              "correct": 0,
              "explanation": "Landlocked means no coastline."
            }
          }
        ]
      },
      {
        "subtopicId": "p5-uganda-map-skills",
        "title": "2. Map reading skills",
        "modules": [
          {
            "moduleId": "p5-uganda-map-elements",
            "title": "Map title, key, scale and compass",
            "bigIdea": "A map is useful only when its elements are read correctly.",
            "learnIt": [
              "A title tells what the map is about.",
              "A key explains symbols such as towns, roads, rivers and lakes.",
              "A scale helps estimate real distance.",
              "A compass helps locate north, east, south and west."
            ],
            "imageUrl": "/images/social-studies/p5-uganda-east-africa-map.svg",
            "imageCaption": "Map elements and compass directions.",
            "workedExample": {
              "question": "Why is a map key important?",
              "steps": [
                "Maps use symbols.",
                "The key explains what each symbol means."
              ],
              "answer": "A map key explains the symbols used on a map."
            },
            "tryThis": {
              "question": "Which map element explains symbols?",
              "choices": [
                "border only",
                "key",
                "colour only",
                "page number"
              ],
              "correct": 1,
              "explanation": "A key explains map symbols."
            }
          }
        ]
      },
      {
        "subtopicId": "p5-uganda-neighbours-directions",
        "title": "3. Neighbours and directions",
        "modules": [
          {
            "moduleId": "p5-uganda-neighbours-directions-module",
            "title": "Using compass directions for neighbours",
            "bigIdea": "A strong map answer names the neighbour and direction.",
            "learnIt": [
              "Kenya is east of Uganda.",
              "Tanzania and Rwanda are south/south-west of Uganda.",
              "DRC is west of Uganda.",
              "South Sudan is north of Uganda."
            ],
            "imageUrl": "/images/social-studies/p5-uganda-east-africa-map.svg",
            "imageCaption": "Uganda neighbours and compass directions.",
            "workedExample": {
              "question": "Use compass direction to describe DRC from Uganda.",
              "steps": [
                "Find DRC on Uganda’s western side.",
                "Use a compass word."
              ],
              "answer": "DRC is west of Uganda."
            },
            "tryThis": {
              "question": "Which neighbour is north of Uganda?",
              "choices": [
                "Kenya",
                "Tanzania",
                "South Sudan",
                "Rwanda"
              ],
              "correct": 2,
              "explanation": "South Sudan is north of Uganda."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Uganda is found in:",
        "choices": [
          "West Africa",
          "Europe",
          "South America",
          "East Africa"
        ],
        "correct": 3,
        "why": "Uganda is in East Africa."
      },
      {
        "q": "Uganda is landlocked because it has:",
        "choices": [
          "no coastline",
          "no lakes",
          "no rivers",
          "no districts"
        ],
        "correct": 0,
        "why": "Landlocked means no sea coast."
      },
      {
        "q": "Kenya lies to the ___ of Uganda.",
        "choices": [
          "west",
          "east",
          "north",
          "south-west"
        ],
        "correct": 1,
        "why": "Kenya is east of Uganda."
      },
      {
        "q": "A map key explains:",
        "choices": [
          "weather only",
          "population only",
          "symbols",
          "prices"
        ],
        "correct": 2,
        "why": "A key explains map symbols."
      },
      {
        "q": "Which is a compass direction?",
        "choices": [
          "near",
          "market",
          "river",
          "north"
        ],
        "correct": 3,
        "why": "North is a compass direction."
      },
      {
        "q": "The title of a map tells:",
        "choices": [
          "what the map shows",
          "only the owner",
          "the answer always",
          "the size of paper"
        ],
        "correct": 0,
        "why": "The title names the map subject."
      }
    ]
  },
  {
    "id": "p5-physical-features-uganda",
    "themeId": "p5-sst-uganda",
    "themeName": "Primary Five Social Studies: Uganda",
    "title": "Physical Features in Uganda",
    "estMinutes": 42,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P5 Social Studies beta: built from researched NCDC Primary Five Social Studies Set One structure; human history/civic review still required before premium-final release. Physical Features in Uganda helps learners understand Uganda and explain Social Studies ideas with evidence.",
      "learningObjectives": [
        "Name major physical features in Uganda.",
        "Locate examples of mountains, lakes and rivers.",
        "Explain importance of physical features.",
        "Describe problems and conservation of physical features."
      ],
      "whatYouNeedToKnow": [
        "Physical features are natural features on land or water.",
        "Examples in Uganda include mountains, rivers, lakes, valleys, plains, plateaus and swamps.",
        "Physical features influence farming, transport, fishing, tourism and settlement.",
        "They can also cause problems such as floods, disease vectors and transport barriers.",
        "People should use and protect physical features carefully."
      ],
      "worked": {
        "problem": "Give one importance and one problem of Lake Victoria.",
        "steps": [
          "Lake Victoria provides fish and water transport.",
          "But storms or water weeds can make transport/fishing difficult."
        ],
        "answer": "Lake Victoria provides fish and transport, but storms or water weeds can be a problem."
      },
      "commonMistakes": [
        "Calling man-made buildings physical features.",
        "Listing features without explaining importance.",
        "Ignoring problems caused by features.",
        "Forgetting conservation and safety."
      ],
      "recap": [
        "Physical features are natural.",
        "They are useful but may cause problems.",
        "Use and protect them wisely."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p5-feature-types",
        "title": "1. Types and examples",
        "modules": [
          {
            "moduleId": "p5-uganda-relief-features-full",
            "title": "Mountains, rivers, lakes and plains",
            "bigIdea": "Uganda’s physical features shape how people live and work.",
            "learnIt": [
              "Mountains include Rwenzori and Elgon.",
              "Lakes include Victoria, Albert, Kyoga, Edward and George.",
              "The River Nile flows out of Lake Victoria at Jinja.",
              "Plains and plateaus support settlement and farming."
            ],
            "imageUrl": "/images/social-studies/p5-uganda-physical-features.svg",
            "imageCaption": "Major physical features of Uganda.",
            "workedExample": {
              "question": "Name two mountains in Uganda.",
              "steps": [
                "Recall Uganda’s major mountains.",
                "Rwenzori and Elgon are examples."
              ],
              "answer": "Rwenzori and Elgon are mountains in Uganda."
            },
            "tryThis": {
              "question": "Which is a lake in Uganda?",
              "choices": [
                "Sahara",
                "Lake Victoria",
                "Kilimanjaro",
                "Nairobi"
              ],
              "correct": 1,
              "explanation": "Lake Victoria is in Uganda."
            }
          }
        ]
      },
      {
        "subtopicId": "p5-feature-importance",
        "title": "2. Importance of physical features",
        "modules": [
          {
            "moduleId": "p5-feature-importance-module",
            "title": "How features support people",
            "bigIdea": "Physical features provide resources and opportunities.",
            "learnIt": [
              "Lakes and rivers provide water and fish.",
              "Rivers may provide hydro-electric power.",
              "Mountains attract tourists and influence rainfall.",
              "Swamps provide papyrus and habitats for living things."
            ],
            "imageUrl": "/images/social-studies/p5-uganda-physical-features.svg",
            "imageCaption": "Importance of physical features.",
            "workedExample": {
              "question": "How can a river be useful?",
              "steps": [
                "A river may provide water.",
                "It may support fishing, transport, irrigation or power."
              ],
              "answer": "A river provides water and may support fishing, transport or power."
            },
            "tryThis": {
              "question": "Which is a benefit of mountains?",
              "choices": [
                "no rainfall anywhere",
                "removing roads",
                "tourism",
                "making maps useless"
              ],
              "correct": 2,
              "explanation": "Mountains can attract tourists."
            }
          }
        ]
      },
      {
        "subtopicId": "p5-feature-problems",
        "title": "3. Problems and conservation",
        "modules": [
          {
            "moduleId": "p5-feature-problems-conservation",
            "title": "Using features safely",
            "bigIdea": "Physical features should be used carefully to reduce danger and damage.",
            "learnIt": [
              "Rivers may flood during heavy rain.",
              "Swamps may have mosquitoes if badly managed, but they also store water.",
              "Steep slopes can suffer soil erosion if vegetation is removed.",
              "Conservation includes tree planting, wetland protection and safe water use."
            ],
            "imageUrl": "/images/social-studies/p5-uganda-physical-features.svg",
            "imageCaption": "Problems and conservation of features.",
            "workedExample": {
              "question": "How can people reduce erosion on hills?",
              "steps": [
                "Vegetation holds soil.",
                "Planting trees and grass protects slopes."
              ],
              "answer": "People can plant trees/grass and avoid removing all vegetation."
            },
            "tryThis": {
              "question": "Which action protects a swamp?",
              "choices": [
                "fill it with rubbish",
                "burn all plants",
                "build anywhere carelessly",
                "avoid dumping rubbish"
              ],
              "correct": 3,
              "explanation": "Wetlands should be protected from pollution and misuse."
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
          "a classroom desk",
          "a bank"
        ],
        "correct": 0,
        "why": "Physical features are natural."
      },
      {
        "q": "Which is a mountain in Uganda?",
        "choices": [
          "Sahara",
          "Rwenzori",
          "Atlantic",
          "Nairobi"
        ],
        "correct": 1,
        "why": "Rwenzori is a mountain range."
      },
      {
        "q": "Lake Victoria is useful for:",
        "choices": [
          "making clocks",
          "growing teeth",
          "fishing",
          "printing books only"
        ],
        "correct": 2,
        "why": "Lakes support fishing."
      },
      {
        "q": "A problem near rivers can be:",
        "choices": [
          "no water ever",
          "no fish anywhere",
          "no plants",
          "flooding"
        ],
        "correct": 3,
        "why": "Rivers may flood."
      },
      {
        "q": "Vegetation on slopes helps reduce:",
        "choices": [
          "soil erosion",
          "school fees",
          "tooth decay",
          "traffic lights"
        ],
        "correct": 0,
        "why": "Roots help hold soil."
      },
      {
        "q": "Conserving features means:",
        "choices": [
          "destroying them",
          "protecting and using them wisely",
          "polluting them",
          "ignoring them"
        ],
        "correct": 1,
        "why": "Conservation is wise use and protection."
      }
    ]
  },
  {
    "id": "p5-climate-uganda",
    "themeId": "p5-sst-uganda",
    "themeName": "Primary Five Social Studies: Uganda",
    "title": "Climate of Uganda",
    "estMinutes": 40,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P5 Social Studies beta: built from researched NCDC Primary Five Social Studies Set One structure; human history/civic review still required before premium-final release. Climate of Uganda helps learners understand Uganda and explain Social Studies ideas with evidence.",
      "learningObjectives": [
        "Define weather and climate.",
        "Name elements of weather/climate.",
        "Describe factors affecting climate in Uganda.",
        "Explain effects of climate on people."
      ],
      "whatYouNeedToKnow": [
        "Weather is the condition of the atmosphere for a short time.",
        "Climate is the average weather condition of an area over a long period.",
        "Elements include rainfall, temperature, sunshine, wind and humidity.",
        "Climate affects farming, clothing, settlement, transport and health.",
        "Relief, altitude, water bodies and winds influence climate."
      ],
      "worked": {
        "problem": "How can drought affect farmers?",
        "steps": [
          "Drought is a long dry period.",
          "Crops may dry up and animals may lack water/pasture."
        ],
        "answer": "Drought can reduce crop yields and pasture for animals."
      },
      "commonMistakes": [
        "Confusing weather and climate.",
        "Listing climate effects without examples.",
        "Forgetting temperature/rainfall are elements.",
        "Saying climate affects only farmers."
      ],
      "recap": [
        "Weather is short-term.",
        "Climate is long-term.",
        "Climate affects people’s activities."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p5-weather-climate",
        "title": "1. Weather and climate",
        "modules": [
          {
            "moduleId": "p5-weather-climate-full",
            "title": "Weather vs Climate",
            "bigIdea": "Weather changes quickly, while climate describes long-term patterns.",
            "learnIt": [
              "Weather can change within hours or days.",
              "Climate is studied over many years.",
              "Rainfall and temperature help describe both weather and climate."
            ],
            "imageUrl": "/images/social-studies/p5-uganda-climate-vegetation.svg",
            "imageCaption": "Weather and climate elements.",
            "workedExample": {
              "question": "Define climate.",
              "steps": [
                "Climate is not one day’s weather.",
                "It is average weather over a long time."
              ],
              "answer": "Climate is the average weather condition of an area over a long period."
            },
            "tryThis": {
              "question": "Which is an element of weather?",
              "choices": [
                "school bag",
                "bank teller",
                "rainfall",
                "pencil"
              ],
              "correct": 2,
              "explanation": "Rainfall is a weather element."
            }
          }
        ]
      },
      {
        "subtopicId": "p5-climate-factors",
        "title": "2. Factors influencing climate",
        "modules": [
          {
            "moduleId": "p5-climate-factors-full",
            "title": "Why climate differs",
            "bigIdea": "Climate changes from place to place because of several factors.",
            "learnIt": [
              "Highland areas are often cooler than lowland areas.",
              "Areas near large water bodies may receive more rainfall.",
              "Relief can cause rainfall on windward slopes.",
              "Winds can bring moist or dry air."
            ],
            "imageUrl": "/images/social-studies/p5-uganda-climate-vegetation.svg",
            "imageCaption": "Factors influencing climate.",
            "workedExample": {
              "question": "Why are highland areas cooler?",
              "steps": [
                "Temperature often decreases with altitude.",
                "Highland areas are at higher altitude."
              ],
              "answer": "Highlands are cooler because temperature reduces with altitude."
            },
            "tryThis": {
              "question": "A large lake may influence climate by increasing:",
              "choices": [
                "school fees",
                "population only",
                "soil colour only",
                "rainfall nearby"
              ],
              "correct": 3,
              "explanation": "Water bodies can increase moisture and rainfall nearby."
            }
          }
        ]
      },
      {
        "subtopicId": "p5-climate-effects",
        "title": "3. Effects of climate",
        "modules": [
          {
            "moduleId": "p5-climate-effects-full",
            "title": "Climate and people’s lives",
            "bigIdea": "Climate affects what people grow, wear and how they move.",
            "learnIt": [
              "Rainfall affects crop growing and pasture.",
              "Hot or cold conditions affect clothing and housing.",
              "Floods and droughts affect transport, health and food supply.",
              "Farmers choose crops suitable for their climate."
            ],
            "imageUrl": "/images/social-studies/p5-uganda-climate-vegetation.svg",
            "imageCaption": "Effects of climate.",
            "workedExample": {
              "question": "Why may farmers in dry areas need irrigation?",
              "steps": [
                "Dry areas receive little rainfall.",
                "Crops still need water to grow."
              ],
              "answer": "They need irrigation to provide water for crops."
            },
            "tryThis": {
              "question": "A long period without enough rain is:",
              "choices": [
                "drought",
                "flood",
                "breeze",
                "sunrise"
              ],
              "correct": 0,
              "explanation": "Drought is a long dry period."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Weather means:",
        "choices": [
          "population size",
          "condition of atmosphere for a short time",
          "a type of soil",
          "a river"
        ],
        "correct": 1,
        "why": "Weather is short-term."
      },
      {
        "q": "Climate means:",
        "choices": [
          "one minute of sunshine",
          "a road sign",
          "average weather over a long time",
          "a market"
        ],
        "correct": 2,
        "why": "Climate is long-term."
      },
      {
        "q": "Which is an element of weather?",
        "choices": [
          "school bag",
          "bank teller",
          "pencil",
          "rainfall"
        ],
        "correct": 3,
        "why": "Rainfall is a weather element."
      },
      {
        "q": "Temperature is measured using:",
        "choices": [
          "thermometer",
          "compass",
          "ruler",
          "clock only"
        ],
        "correct": 0,
        "why": "A thermometer measures temperature."
      },
      {
        "q": "Drought means:",
        "choices": [
          "too much money",
          "long dry period",
          "heavy daily rainfall",
          "a lake"
        ],
        "correct": 1,
        "why": "Drought is prolonged lack of rain."
      },
      {
        "q": "Climate affects farming because:",
        "choices": [
          "crops do not need weather",
          "only books grow",
          "crops need suitable rainfall and temperature",
          "animals do not need water"
        ],
        "correct": 2,
        "why": "Farming depends on rainfall and temperature."
      }
    ]
  },
  {
    "id": "p5-vegetation-uganda",
    "themeId": "p5-sst-uganda",
    "themeName": "Primary Five Social Studies: Uganda",
    "title": "Vegetation in Uganda",
    "estMinutes": 38,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P5 Social Studies beta: built from researched NCDC Primary Five Social Studies Set One structure; human history/civic review still required before premium-final release. Vegetation in Uganda helps learners understand Uganda and explain Social Studies ideas with evidence.",
      "learningObjectives": [
        "Define vegetation.",
        "Name types of vegetation in Uganda.",
        "State uses of vegetation.",
        "Explain conservation of vegetation."
      ],
      "whatYouNeedToKnow": [
        "Vegetation means plant cover in an area.",
        "Uganda has forests, savanna grasslands, wetlands and planted vegetation.",
        "Vegetation provides timber, medicine, pasture, food, shade and habitats.",
        "Vegetation protects soil and water sources.",
        "Human activities such as deforestation, bush burning and overgrazing damage vegetation."
      ],
      "worked": {
        "problem": "Why should people plant trees after cutting some for timber?",
        "steps": [
          "Cutting trees reduces plant cover.",
          "Planting trees replaces lost trees and protects soil."
        ],
        "answer": "People should plant trees to conserve vegetation and replace what was cut."
      },
      "commonMistakes": [
        "Thinking vegetation means animals.",
        "Calling every vegetation type a forest.",
        "Ignoring conservation.",
        "Forgetting human activities can damage vegetation."
      ],
      "recap": [
        "Vegetation is plant cover.",
        "It is useful and must be conserved.",
        "Human activities can damage it."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p5-vegetation-types",
        "title": "1. Types of vegetation",
        "modules": [
          {
            "moduleId": "p5-vegetation-types-full",
            "title": "Forests, grasslands and wetlands",
            "bigIdea": "Uganda has different vegetation types because climate and land differ.",
            "learnIt": [
              "Forests have many trees.",
              "Savanna has grass with scattered trees.",
              "Wetlands have plants that grow in wet places.",
              "Planted vegetation includes crops and tree plantations."
            ],
            "imageUrl": "/images/social-studies/p5-uganda-climate-vegetation.svg",
            "imageCaption": "Vegetation types in Uganda.",
            "workedExample": {
              "question": "Name two types of vegetation.",
              "steps": [
                "Think of plant cover types.",
                "Forests and grasslands are examples."
              ],
              "answer": "Forests and grasslands are types of vegetation."
            },
            "tryThis": {
              "question": "Vegetation means:",
              "choices": [
                "animal bones",
                "road network",
                "school fees",
                "plant cover"
              ],
              "correct": 3,
              "explanation": "Vegetation is plant cover."
            }
          }
        ]
      },
      {
        "subtopicId": "p5-vegetation-uses",
        "title": "2. Uses of vegetation",
        "modules": [
          {
            "moduleId": "p5-vegetation-uses-full",
            "title": "Why vegetation matters",
            "bigIdea": "Vegetation supports people, animals and the environment.",
            "learnIt": [
              "Forests provide timber, fruits and medicine.",
              "Grasslands provide pasture for animals.",
              "Wetlands provide papyrus and habitats.",
              "Vegetation protects soil from erosion."
            ],
            "imageUrl": "/images/social-studies/p5-uganda-climate-vegetation.svg",
            "imageCaption": "Uses of vegetation.",
            "workedExample": {
              "question": "Give two uses of forests.",
              "steps": [
                "Forests provide materials and habitats.",
                "Timber and medicine are examples."
              ],
              "answer": "Forests provide timber and medicine/habitats."
            },
            "tryThis": {
              "question": "Which is a use of vegetation?",
              "choices": [
                "timber",
                "tooth decay",
                "traffic lights",
                "banking"
              ],
              "correct": 0,
              "explanation": "Vegetation can provide timber."
            }
          }
        ]
      },
      {
        "subtopicId": "p5-vegetation-conservation",
        "title": "3. Conserving vegetation",
        "modules": [
          {
            "moduleId": "p5-vegetation-conservation-full",
            "title": "Protecting plant cover",
            "bigIdea": "Conservation keeps vegetation useful for the future.",
            "learnIt": [
              "Afforestation means planting trees where they were not before.",
              "Re-afforestation means planting trees again where they were cut.",
              "Avoid unnecessary bush burning.",
              "Control overgrazing and protect wetlands."
            ],
            "imageUrl": "/images/social-studies/p5-uganda-climate-vegetation.svg",
            "imageCaption": "Vegetation conservation.",
            "workedExample": {
              "question": "Why should bush burning be controlled?",
              "steps": [
                "Bush burning destroys plant cover.",
                "Bare soil can be washed away by rain."
              ],
              "answer": "It destroys vegetation and exposes soil to erosion."
            },
            "tryThis": {
              "question": "Which action conserves vegetation?",
              "choices": [
                "bush burning",
                "planting trees",
                "overgrazing",
                "cutting all forests"
              ],
              "correct": 1,
              "explanation": "Planting trees conserves vegetation."
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
        "q": "Which damages vegetation?",
        "choices": [
          "tree planting",
          "bush burning",
          "protecting forests",
          "watering seedlings"
        ],
        "correct": 1,
        "why": "Bush burning can damage vegetation."
      },
      {
        "q": "Afforestation means:",
        "choices": [
          "cutting all trees",
          "burning grass",
          "planting trees",
          "polluting water"
        ],
        "correct": 2,
        "why": "Afforestation is tree planting."
      },
      {
        "q": "Vegetation protects soil by:",
        "choices": [
          "increasing all floods",
          "removing all roots",
          "destroying humus",
          "reducing erosion"
        ],
        "correct": 3,
        "why": "Roots and cover reduce erosion."
      }
    ]
  },
  {
    "id": "p5-natural-resources-uganda",
    "themeId": "p5-sst-uganda",
    "themeName": "Primary Five Social Studies: Uganda",
    "title": "Natural Resources in Uganda",
    "estMinutes": 38,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P5 Social Studies beta: built from researched NCDC Primary Five Social Studies Set One structure; human history/civic review still required before premium-final release. Natural Resources in Uganda helps learners understand Uganda and explain Social Studies ideas with evidence.",
      "learningObjectives": [
        "Define natural resources.",
        "Name examples of Uganda’s resources.",
        "Explain uses of resources.",
        "Describe conservation of resources."
      ],
      "whatYouNeedToKnow": [
        "Natural resources are things found in nature that people use.",
        "Examples include land, water, forests, wildlife, minerals, soils and climate.",
        "Resources support farming, fishing, tourism, mining, transport and settlement.",
        "Resources should be conserved to avoid exhaustion or damage.",
        "Pollution, overuse and poor management reduce resource value."
      ],
      "worked": {
        "problem": "Give one use of water as a natural resource.",
        "steps": [
          "People use water at home.",
          "Farmers and fishermen also depend on water."
        ],
        "answer": "Water is used for domestic work, farming and fishing."
      },
      "commonMistakes": [
        "Calling manufactured goods natural resources.",
        "Listing resources without uses.",
        "Forgetting conservation.",
        "Ignoring pollution and overuse."
      ],
      "recap": [
        "Resources come from nature.",
        "They support life and work.",
        "Conserve resources for the future."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p5-resource-types",
        "title": "1. Types of natural resources",
        "modules": [
          {
            "moduleId": "p5-resource-types-full",
            "title": "Resources from nature",
            "bigIdea": "Natural resources are not made by people, but people use them.",
            "learnIt": [
              "Land supports farming and settlement.",
              "Water supports domestic work, fishing, transport and irrigation.",
              "Forests provide timber and habitats.",
              "Minerals can be mined for industry and income."
            ],
            "imageUrl": "/images/social-studies/mining-and-agriculture-processing.png",
            "imageCaption": "Natural resources and processing.",
            "workedExample": {
              "question": "Name three natural resources.",
              "steps": [
                "Think of things provided by nature.",
                "Land, water and forests are examples."
              ],
              "answer": "Land, water and forests are natural resources."
            },
            "tryThis": {
              "question": "Which is a natural resource?",
              "choices": [
                "water",
                "plastic spoon",
                "school uniform",
                "exercise book"
              ],
              "correct": 0,
              "explanation": "Water is found in nature."
            }
          }
        ]
      },
      {
        "subtopicId": "p5-resource-uses",
        "title": "2. Uses of resources",
        "modules": [
          {
            "moduleId": "p5-resource-uses-full",
            "title": "How resources support people",
            "bigIdea": "Resources help people meet needs and earn income.",
            "learnIt": [
              "Soil and land support crop growing.",
              "Water supports fishing and domestic use.",
              "Wildlife and scenery support tourism.",
              "Minerals may be processed into useful products."
            ],
            "imageUrl": "/images/social-studies/mining-and-agriculture-processing.png",
            "imageCaption": "Uses of natural resources.",
            "workedExample": {
              "question": "How can wildlife help Uganda?",
              "steps": [
                "Wildlife attracts tourists.",
                "Tourists bring income and jobs."
              ],
              "answer": "Wildlife supports tourism, income and jobs."
            },
            "tryThis": {
              "question": "Which resource supports fishing?",
              "choices": [
                "desert wind only",
                "water",
                "plastic bag",
                "class desk"
              ],
              "correct": 1,
              "explanation": "Fishing needs water bodies."
            }
          }
        ]
      },
      {
        "subtopicId": "p5-resource-conservation",
        "title": "3. Conserving resources",
        "modules": [
          {
            "moduleId": "p5-resource-conservation-full",
            "title": "Using resources wisely",
            "bigIdea": "Conservation helps resources remain useful for children in the future.",
            "learnIt": [
              "Plant trees to protect forests.",
              "Avoid polluting water sources.",
              "Protect wildlife through laws and parks.",
              "Use land carefully to reduce erosion and exhaustion."
            ],
            "imageUrl": "/images/social-studies/agroforestry-farm.png",
            "imageCaption": "Resource conservation through tree planting and farming care.",
            "workedExample": {
              "question": "How can people conserve water sources?",
              "steps": [
                "Do not dump rubbish in water.",
                "Protect vegetation near water sources."
              ],
              "answer": "People can avoid pollution and protect vegetation near water sources."
            },
            "tryThis": {
              "question": "Which action conserves resources?",
              "choices": [
                "poaching wildlife",
                "polluting rivers",
                "planting trees",
                "wasting water"
              ],
              "correct": 2,
              "explanation": "Tree planting protects forest resources."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Natural resources are:",
        "choices": [
          "only factory goods",
          "only school books",
          "only clothes",
          "things from nature people use"
        ],
        "correct": 3,
        "why": "Natural resources come from nature."
      },
      {
        "q": "Which is a natural resource?",
        "choices": [
          "land",
          "plastic cup",
          "metal spoon made in factory",
          "school uniform"
        ],
        "correct": 0,
        "why": "Land is natural."
      },
      {
        "q": "Wildlife can support:",
        "choices": [
          "tooth decay",
          "tourism",
          "clock repair",
          "shoe polishing only"
        ],
        "correct": 1,
        "why": "Wildlife attracts tourists."
      },
      {
        "q": "Polluting water sources is:",
        "choices": [
          "conservation",
          "tree planting",
          "bad resource use",
          "safe always"
        ],
        "correct": 2,
        "why": "Pollution damages resources."
      },
      {
        "q": "A way to conserve forests is:",
        "choices": [
          "cutting all trees",
          "burning forests",
          "dumping rubbish",
          "planting trees"
        ],
        "correct": 3,
        "why": "Tree planting conserves forests."
      },
      {
        "q": "Minerals may be used for:",
        "choices": [
          "industry and income",
          "making rain",
          "digestion",
          "voting only"
        ],
        "correct": 0,
        "why": "Minerals support industry and income."
      }
    ]
  },
  {
    "id": "p5-people-precolonial-uganda",
    "themeId": "p5-sst-uganda",
    "themeName": "Primary Five Social Studies: Uganda",
    "title": "The People of Pre-Colonial Uganda",
    "estMinutes": 40,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P5 Social Studies beta: built from researched NCDC Primary Five Social Studies Set One structure; human history/civic review still required before premium-final release. The People of Pre-Colonial Uganda helps learners understand Uganda and explain Social Studies ideas with evidence.",
      "learningObjectives": [
        "Name ethnic groups in Uganda.",
        "Explain migration and settlement reasons.",
        "Describe leadership, occupations and culture before colonial rule.",
        "Respect cultural diversity."
      ],
      "whatYouNeedToKnow": [
        "Pre-colonial means before colonial rule.",
        "Uganda had many ethnic groups, clans, kingdoms, chiefdoms and communities.",
        "People migrated because of pasture, water, fertile land, trade, security and population pressure.",
        "Pre-colonial societies had leaders, occupations, customs and beliefs.",
        "Culture should be described respectfully."
      ],
      "worked": {
        "problem": "Why did some people migrate in pre-colonial times?",
        "steps": [
          "People needed resources such as water and pasture.",
          "Some moved for security, trade or fertile land."
        ],
        "answer": "They migrated to look for water, pasture, fertile land, security or trade."
      },
      "commonMistakes": [
        "Mocking cultures.",
        "Thinking all communities had the same leadership.",
        "Giving only one reason for migration.",
        "Confusing pre-colonial with post-independence."
      ],
      "recap": [
        "Pre-colonial means before colonial rule.",
        "Uganda had diverse peoples.",
        "Migration had push and pull reasons."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p5-ethnic-groups-migration",
        "title": "1. Ethnic groups and migration",
        "modules": [
          {
            "moduleId": "p5-ethnic-groups-migration-full",
            "title": "People and movement",
            "bigIdea": "Uganda’s people have diverse origins, languages and cultures.",
            "learnIt": [
              "Ethnic groups include Baganda, Banyankole, Basoga, Iteso, Acholi, Bagisu and many others.",
              "Migration is movement of people from one place to another.",
              "Pastoral groups may move for pasture and water.",
              "Farmers may move for fertile land."
            ],
            "imageUrl": "/images/social-studies/bantu-nilote-migration-map.png",
            "imageCaption": "Migration and settlement context.",
            "workedExample": {
              "question": "What is migration?",
              "steps": [
                "People move from one place to another.",
                "They may move because of needs or danger."
              ],
              "answer": "Migration is movement of people from one place to another."
            },
            "tryThis": {
              "question": "Which is a reason for migration?",
              "choices": [
                "no need for water",
                "search for pasture",
                "only sleeping",
                "breaking pots"
              ],
              "correct": 1,
              "explanation": "Pastoral groups may move for pasture."
            }
          }
        ]
      },
      {
        "subtopicId": "p5-precolonial-leadership",
        "title": "2. Leadership and occupations",
        "modules": [
          {
            "moduleId": "p5-precolonial-leadership-full",
            "title": "Leadership before colonial rule",
            "bigIdea": "Communities had organised ways of leading and working before colonial rule.",
            "learnIt": [
              "Some communities had kings, chiefs or clan leaders.",
              "People worked as farmers, pastoralists, hunters, fishermen, traders and craftsmen.",
              "Leaders helped settle disputes, organise defence and guide customs."
            ],
            "imageUrl": "/images/social-studies/bantu-nilote-migration-map.png",
            "imageCaption": "Pre-colonial communities and leadership.",
            "workedExample": {
              "question": "Name two occupations in pre-colonial Uganda.",
              "steps": [
                "Think of ways people earned a living.",
                "Farming and pastoralism are examples."
              ],
              "answer": "Farming and pastoralism were occupations."
            },
            "tryThis": {
              "question": "A pre-colonial leader could be a:",
              "choices": [
                "thermometer",
                "bicycle",
                "chief",
                "river"
              ],
              "correct": 2,
              "explanation": "Chiefs led some communities."
            }
          }
        ]
      },
      {
        "subtopicId": "p5-culture-respect",
        "title": "3. Culture and respect",
        "modules": [
          {
            "moduleId": "p5-culture-respect-precolonial",
            "title": "Respecting cultural diversity",
            "bigIdea": "Social Studies should help learners describe cultures without insulting them.",
            "learnIt": [
              "Culture includes language, food, dress, music, ceremonies and customs.",
              "Different groups can have different cultures and still live together peacefully.",
              "A good answer uses respectful words and examples."
            ],
            "imageUrl": "/images/social-studies/p4-people-culture-services.svg",
            "imageCaption": "Culture and respect.",
            "workedExample": {
              "question": "Give two examples of culture.",
              "steps": [
                "Think of ways of life.",
                "Language and music are examples."
              ],
              "answer": "Language and music are examples of culture."
            },
            "tryThis": {
              "question": "Which is a cultural practice?",
              "choices": [
                "soil erosion",
                "thermometer reading",
                "long division",
                "traditional dance"
              ],
              "correct": 3,
              "explanation": "Traditional dance is part of culture."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Pre-colonial means:",
        "choices": [
          "before colonial rule",
          "after independence only",
          "during computer age",
          "after 2020"
        ],
        "correct": 0,
        "why": "Pre-colonial means before colonial rule."
      },
      {
        "q": "Migration means:",
        "choices": [
          "growth of teeth",
          "movement of people",
          "reading maps only",
          "making rain"
        ],
        "correct": 1,
        "why": "Migration is movement."
      },
      {
        "q": "A reason for migration was:",
        "choices": [
          "too many books",
          "no need for land",
          "search for pasture",
          "only games"
        ],
        "correct": 2,
        "why": "People moved for pasture."
      },
      {
        "q": "A pre-colonial leader could be:",
        "choices": [
          "thermometer",
          "river",
          "bicycle",
          "chief"
        ],
        "correct": 3,
        "why": "Chiefs were leaders."
      },
      {
        "q": "Culture includes:",
        "choices": [
          "language and dress",
          "only rainfall",
          "only school fees",
          "only rocks"
        ],
        "correct": 0,
        "why": "Culture is way of life."
      },
      {
        "q": "Cultures should be described:",
        "choices": [
          "with insults",
          "respectfully",
          "with mockery",
          "carelessly"
        ],
        "correct": 1,
        "why": "Respect is required."
      }
    ]
  },
  {
    "id": "p5-foreign-influence-uganda",
    "themeId": "p5-sst-uganda",
    "themeName": "Primary Five Social Studies: Uganda",
    "title": "Foreign Influence in Uganda",
    "estMinutes": 40,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P5 Social Studies beta: built from researched NCDC Primary Five Social Studies Set One structure; human history/civic review still required before premium-final release. Foreign Influence in Uganda helps learners understand Uganda and explain Social Studies ideas with evidence.",
      "learningObjectives": [
        "Name early foreigners who came to Uganda.",
        "Explain reasons why they came.",
        "Describe positive and negative effects.",
        "Use balanced historical language."
      ],
      "whatYouNeedToKnow": [
        "Foreigners came as traders, explorers, missionaries and colonial agents.",
        "Traders came to exchange goods.",
        "Missionaries came to spread Christianity and build mission centres, schools and hospitals.",
        "Foreign influence had positive and negative effects.",
        "Colonial rule led to loss of independence and changes in land, leadership and labour."
      ],
      "worked": {
        "problem": "Give one positive and one negative effect of foreign influence.",
        "steps": [
          "Positive effects may include schools or hospitals.",
          "Negative effects may include loss of independence or land."
        ],
        "answer": "Foreign influence introduced schools, but colonial rule reduced African self-rule."
      },
      "commonMistakes": [
        "Saying all foreign influence was only good or only bad.",
        "Ignoring colonial loss of independence.",
        "Confusing missionaries, traders and explorers.",
        "Giving effects without examples."
      ],
      "recap": [
        "Foreigners had different reasons.",
        "Effects were both positive and negative.",
        "Use balanced examples."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p5-foreign-groups",
        "title": "1. Foreigners and reasons",
        "modules": [
          {
            "moduleId": "p5-foreigners-reasons-full",
            "title": "Traders, explorers and missionaries",
            "bigIdea": "Different groups came for different reasons.",
            "learnIt": [
              "Traders came to exchange goods.",
              "Explorers came to find information about places and resources.",
              "Missionaries came to spread Christianity and build mission centres.",
              "Colonial agents came to establish control."
            ],
            "imageUrl": "/images/social-studies/triangular-trade-map.png",
            "imageCaption": "Foreign influence and trade context.",
            "workedExample": {
              "question": "Why did missionaries come to Uganda?",
              "steps": [
                "Missionaries were religious people.",
                "They came to spread Christianity and build mission centres."
              ],
              "answer": "They came to spread Christianity."
            },
            "tryThis": {
              "question": "Which group spread Christianity?",
              "choices": [
                "only hunters",
                "only fishermen",
                "missionaries",
                "only farmers"
              ],
              "correct": 2,
              "explanation": "Missionaries spread Christianity."
            }
          }
        ]
      },
      {
        "subtopicId": "p5-positive-negative-effects",
        "title": "2. Effects of foreign influence",
        "modules": [
          {
            "moduleId": "p5-effects-foreign-full",
            "title": "Balanced historical effects",
            "bigIdea": "A strong answer gives examples of both benefits and problems.",
            "learnIt": [
              "Positive effects included schools, hospitals, literacy, new crops and roads.",
              "Negative effects included loss of independence, forced labour, taxes and land loss.",
              "Some changes helped development, while others harmed African freedom and control."
            ],
            "imageUrl": "/images/social-studies/partition-of-africa-1884.png",
            "imageCaption": "Colonial influence and partition context.",
            "workedExample": {
              "question": "How did mission schools affect Uganda?",
              "steps": [
                "Mission schools taught reading and writing.",
                "They helped spread formal education."
              ],
              "answer": "Mission schools helped introduce formal education."
            },
            "tryThis": {
              "question": "Which was a negative effect of colonial rule?",
              "choices": [
                "more African control",
                "no taxes anywhere",
                "no forced labour anywhere",
                "loss of independence"
              ],
              "correct": 3,
              "explanation": "Colonial rule reduced self-rule."
            }
          }
        ]
      },
      {
        "subtopicId": "p5-history-balance",
        "title": "3. Explaining history fairly",
        "modules": [
          {
            "moduleId": "p5-history-balance-full",
            "title": "Fair explanation of foreign influence",
            "bigIdea": "History answers should be balanced and evidence-based.",
            "learnIt": [
              "Do not praise or condemn without examples.",
              "Name the group involved.",
              "Explain the effect on Ugandan communities.",
              "Use respectful language for African societies and foreign groups."
            ],
            "imageUrl": "/images/social-studies/partition-of-africa-1884.png",
            "imageCaption": "Balanced historical explanation.",
            "workedExample": {
              "question": "Why is “foreigners changed Uganda” not enough as an answer?",
              "steps": [
                "It is too general.",
                "It does not say who changed what or how.",
                "A better answer gives an example."
              ],
              "answer": "It needs specific examples of people and effects."
            },
            "tryThis": {
              "question": "A good history answer should include:",
              "choices": [
                "effects and examples",
                "guessing only",
                "no examples",
                "insults"
              ],
              "correct": 0,
              "explanation": "Good history explains with evidence."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Which group came to spread Christianity?",
        "choices": [
          "only fishermen",
          "missionaries",
          "only blacksmiths",
          "only herdsmen"
        ],
        "correct": 1,
        "why": "Missionaries spread Christianity."
      },
      {
        "q": "Traders came mainly to:",
        "choices": [
          "measure rainfall only",
          "draw triangles only",
          "exchange goods",
          "teach photosynthesis only"
        ],
        "correct": 2,
        "why": "Traders exchange goods."
      },
      {
        "q": "A positive effect of foreign influence was:",
        "choices": [
          "loss of independence",
          "forced labour",
          "land loss only",
          "formal education"
        ],
        "correct": 3,
        "why": "Formal education expanded through mission schools."
      },
      {
        "q": "A negative effect of colonial rule was:",
        "choices": [
          "loss of independence",
          "more self-rule",
          "no taxes",
          "free land for all"
        ],
        "correct": 0,
        "why": "Colonial rule reduced independence."
      },
      {
        "q": "A balanced historical answer gives:",
        "choices": [
          "only praise",
          "positive and negative effects",
          "only insults",
          "no examples"
        ],
        "correct": 1,
        "why": "Balanced history gives both sides."
      },
      {
        "q": "Explorers came to:",
        "choices": [
          "vaccinate poultry",
          "draw only angles",
          "find information",
          "sell only shoes"
        ],
        "correct": 2,
        "why": "Explorers gathered information."
      }
    ]
  },
  {
    "id": "p5-how-uganda-became-nation",
    "themeId": "p5-sst-uganda",
    "themeName": "Primary Five Social Studies: Uganda",
    "title": "How Uganda Became a Nation",
    "estMinutes": 38,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P5 Social Studies beta: built from researched NCDC Primary Five Social Studies Set One structure; human history/civic review still required before premium-final release. How Uganda Became a Nation helps learners understand Uganda and explain Social Studies ideas with evidence.",
      "learningObjectives": [
        "Describe Uganda before it became one country.",
        "Explain protectorate and colonial administration simply.",
        "Name national symbols.",
        "Explain unity and diversity."
      ],
      "whatYouNeedToKnow": [
        "Before colonial rule, Uganda had different communities, kingdoms and chiefdoms.",
        "The British declared Uganda a protectorate in 1894.",
        "Different areas were gradually administered together as Uganda.",
        "A nation brings people under shared symbols, government and identity.",
        "Unity is important because Uganda has many communities."
      ],
      "worked": {
        "problem": "What was Uganda before it became one country?",
        "steps": [
          "There were different communities.",
          "Some were kingdoms or chiefdoms.",
          "They were later administered together."
        ],
        "answer": "Uganda was made up of different communities, kingdoms and chiefdoms."
      },
      "commonMistakes": [
        "Thinking Uganda had no organised societies before colonial rule.",
        "Forgetting diversity among communities.",
        "Confusing protectorate with independence.",
        "Listing symbols without explaining unity."
      ],
      "recap": [
        "Uganda was formed from diverse communities.",
        "Protectorate rule began in 1894.",
        "Nationhood requires unity and respect."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p5-before-one-country",
        "title": "1. Before one country",
        "modules": [
          {
            "moduleId": "p5-before-uganda-one-country",
            "title": "Communities before Uganda",
            "bigIdea": "Uganda did not begin as one single modern state.",
            "learnIt": [
              "Different kingdoms, chiefdoms and communities existed.",
              "Examples include Buganda, Bunyoro, Ankole, Busoga and others.",
              "Communities had leaders, customs and ways of life."
            ],
            "imageUrl": "/images/social-studies/p5-uganda-east-africa-map.svg",
            "imageCaption": "Uganda from diverse regions and communities.",
            "workedExample": {
              "question": "What existed before Uganda became one country?",
              "steps": [
                "There were many communities.",
                "Some were kingdoms and chiefdoms."
              ],
              "answer": "Different communities, kingdoms and chiefdoms existed."
            },
            "tryThis": {
              "question": "Before Uganda became one country, there were:",
              "choices": [
                "computers only",
                "airports only",
                "televisions only",
                "communities and kingdoms"
              ],
              "correct": 3,
              "explanation": "Different communities existed."
            }
          }
        ]
      },
      {
        "subtopicId": "p5-protectorate-administration",
        "title": "2. Protectorate and administration",
        "modules": [
          {
            "moduleId": "p5-protectorate-administration-full",
            "title": "Protectorate period",
            "bigIdea": "Colonial administration joined different areas under one protectorate.",
            "learnIt": [
              "The Uganda Protectorate began in 1894.",
              "Colonial leaders created administrative areas.",
              "Different communities were governed under one colonial administration.",
              "This process helped form the modern Uganda state but reduced African self-rule."
            ],
            "imageUrl": "/images/social-studies/partition-of-africa-1884.png",
            "imageCaption": "Protectorate and partition context.",
            "workedExample": {
              "question": "When did Uganda become a British protectorate?",
              "steps": [
                "Recall the key date.",
                "Uganda Protectorate began in 1894."
              ],
              "answer": "1894"
            },
            "tryThis": {
              "question": "Uganda became a British protectorate in:",
              "choices": [
                "1894",
                "1962",
                "2005",
                "1945"
              ],
              "correct": 0,
              "explanation": "The protectorate began in 1894."
            }
          }
        ]
      },
      {
        "subtopicId": "p5-nation-symbols-unity",
        "title": "3. Nationhood, symbols and unity",
        "modules": [
          {
            "moduleId": "p5-nation-symbols-unity-full",
            "title": "Becoming one nation",
            "bigIdea": "A nation needs shared identity and respect for diversity.",
            "learnIt": [
              "National symbols include the flag, anthem and coat of arms.",
              "A shared government can plan services for the whole country.",
              "Uganda’s communities should live with unity and respect.",
              "National unity does not mean all cultures are the same."
            ],
            "imageUrl": "/images/social-studies/p5-government-uganda.svg",
            "imageCaption": "Nationhood and symbols.",
            "workedExample": {
              "question": "Why is national unity important?",
              "steps": [
                "Uganda has many communities.",
                "Unity helps people work together and avoid conflict."
              ],
              "answer": "National unity helps people from different communities live and work together."
            },
            "tryThis": {
              "question": "Which is a national symbol?",
              "choices": [
                "private shoe",
                "flag",
                "class desk",
                "home cup"
              ],
              "correct": 1,
              "explanation": "A flag is a national symbol."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Before Uganda became one country, there were:",
        "choices": [
          "computers only",
          "airports only",
          "communities and kingdoms",
          "televisions only"
        ],
        "correct": 2,
        "why": "Different communities existed."
      },
      {
        "q": "Uganda became a British protectorate in:",
        "choices": [
          "1962",
          "2005",
          "1945",
          "1894"
        ],
        "correct": 3,
        "why": "The protectorate began in 1894."
      },
      {
        "q": "A national symbol is:",
        "choices": [
          "flag",
          "private shoe",
          "class desk",
          "home cup"
        ],
        "correct": 0,
        "why": "A flag is a national symbol."
      },
      {
        "q": "Unity is important because Uganda has:",
        "choices": [
          "no people",
          "many communities",
          "one family only",
          "no culture"
        ],
        "correct": 1,
        "why": "Uganda is diverse."
      },
      {
        "q": "Protectorate rule reduced:",
        "choices": [
          "all roads",
          "all lakes",
          "African self-rule",
          "all crops"
        ],
        "correct": 2,
        "why": "Colonial rule reduced self-rule."
      },
      {
        "q": "A nation usually has:",
        "choices": [
          "no identity",
          "no people",
          "only one school",
          "shared government and symbols"
        ],
        "correct": 3,
        "why": "Nations have shared identity and government."
      }
    ]
  },
  {
    "id": "p5-road-to-independence",
    "themeId": "p5-sst-uganda",
    "themeName": "Primary Five Social Studies: Uganda",
    "title": "The Road to Independence",
    "estMinutes": 38,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P5 Social Studies beta: built from researched NCDC Primary Five Social Studies Set One structure; human history/civic review still required before premium-final release. The Road to Independence helps learners understand Uganda and explain Social Studies ideas with evidence.",
      "learningObjectives": [
        "Explain nationalism.",
        "Name political parties/leaders generally.",
        "Describe peaceful methods used to demand independence.",
        "State Uganda’s independence date."
      ],
      "whatYouNeedToKnow": [
        "Nationalism is love for one’s country and desire for self-rule.",
        "Ugandans demanded independence through political parties, leaders, meetings, elections and negotiations.",
        "Independence means self-rule.",
        "Uganda became independent on 9 October 1962.",
        "A good answer links leaders, parties and events to self-rule."
      ],
      "worked": {
        "problem": "Give one peaceful method used to demand independence.",
        "steps": [
          "Think of methods without war.",
          "Political parties organised people.",
          "Negotiations and meetings were also used."
        ],
        "answer": "Africans formed political parties and negotiated for self-rule."
      },
      "commonMistakes": [
        "Thinking independence came in one day without organisation.",
        "Forgetting the date 9 October 1962.",
        "Calling every action violent.",
        "Explaining nationalism as hatred of other countries."
      ],
      "recap": [
        "Nationalism means love for country and self-rule.",
        "Political organisation helped independence.",
        "Uganda became independent on 9 October 1962."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p5-nationalism",
        "title": "1. Nationalism",
        "modules": [
          {
            "moduleId": "p5-nationalism-full",
            "title": "Love for country and self-rule",
            "bigIdea": "Nationalism helped people demand the right to govern themselves.",
            "learnIt": [
              "Nationalism is love for one’s country.",
              "It includes desire for freedom and self-rule.",
              "Nationalists organised people and spoke against unfair rule."
            ],
            "imageUrl": "/images/social-studies/p5-road-independence-timeline.svg",
            "imageCaption": "Road to independence timeline.",
            "workedExample": {
              "question": "What is nationalism?",
              "steps": [
                "It involves love for country.",
                "It includes desire for self-rule."
              ],
              "answer": "Nationalism is love for one’s country and desire for self-rule."
            },
            "tryThis": {
              "question": "Nationalism means:",
              "choices": [
                "love for country and self-rule",
                "hatred of all people",
                "only singing",
                "only farming"
              ],
              "correct": 0,
              "explanation": "Nationalism includes love for country and self-rule."
            }
          }
        ]
      },
      {
        "subtopicId": "p5-political-activity",
        "title": "2. Parties, leaders and negotiations",
        "modules": [
          {
            "moduleId": "p5-political-activity-full",
            "title": "Organising for independence",
            "bigIdea": "Political activity helped Ugandans demand self-government.",
            "learnIt": [
              "Political parties helped organise people.",
              "Leaders spoke for citizens and negotiated.",
              "Elections and constitutional talks prepared the country for self-rule."
            ],
            "imageUrl": "/images/social-studies/p5-road-independence-timeline.svg",
            "imageCaption": "Political activity towards independence.",
            "workedExample": {
              "question": "Why were political parties important?",
              "steps": [
                "They organised people.",
                "They helped demand self-government."
              ],
              "answer": "Political parties organised people to demand self-rule."
            },
            "tryThis": {
              "question": "A peaceful way to demand independence was:",
              "choices": [
                "destroying schools",
                "forming political parties",
                "burning all crops",
                "stopping learning"
              ],
              "correct": 1,
              "explanation": "Political parties organised people peacefully."
            }
          }
        ]
      },
      {
        "subtopicId": "p5-independence-date",
        "title": "3. Independence date and meaning",
        "modules": [
          {
            "moduleId": "p5-independence-date-full",
            "title": "9 October 1962",
            "bigIdea": "Dates become meaningful when learners understand what changed.",
            "learnIt": [
              "Uganda became independent on 9 October 1962.",
              "Independence means a country governs itself.",
              "After independence, Ugandans had responsibility to build the nation."
            ],
            "imageUrl": "/images/social-studies/p5-road-independence-timeline.svg",
            "imageCaption": "Independence timeline.",
            "workedExample": {
              "question": "What does independence mean?",
              "steps": [
                "A country is not ruled by another country.",
                "Its people govern themselves through their leaders."
              ],
              "answer": "Independence means self-rule."
            },
            "tryThis": {
              "question": "Uganda got independence on:",
              "choices": [
                "1 January 2000",
                "12 December 1963",
                "9 October 1962",
                "9 October 1945"
              ],
              "correct": 2,
              "explanation": "Uganda became independent on 9 October 1962."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Nationalism means:",
        "choices": [
          "hatred only",
          "being foreign ruled",
          "no government",
          "love for country and desire for self-rule"
        ],
        "correct": 3,
        "why": "Nationalism includes love for country/self-rule."
      },
      {
        "q": "Uganda got independence on:",
        "choices": [
          "9 October 1962",
          "1 January 2000",
          "12 December 1963",
          "9 October 1945"
        ],
        "correct": 0,
        "why": "Uganda became independent on 9 October 1962."
      },
      {
        "q": "Independence means:",
        "choices": [
          "foreign rule forever",
          "self-rule",
          "no government",
          "no citizens"
        ],
        "correct": 1,
        "why": "Independence means self-government."
      },
      {
        "q": "A peaceful way to demand independence was:",
        "choices": [
          "burning all crops",
          "destroying schools",
          "forming political parties",
          "stopping all learning"
        ],
        "correct": 2,
        "why": "Political parties organised people."
      },
      {
        "q": "Political leaders helped by:",
        "choices": [
          "hiding all issues",
          "ending all schools",
          "destroying maps",
          "speaking and negotiating"
        ],
        "correct": 3,
        "why": "Leaders spoke and negotiated."
      },
      {
        "q": "The road to independence involved:",
        "choices": [
          "organisation and negotiation",
          "only one event",
          "no leaders",
          "no citizens"
        ],
        "correct": 0,
        "why": "It involved organised activity."
      }
    ]
  },
  {
    "id": "p5-independent-uganda",
    "themeId": "p5-sst-uganda",
    "themeName": "Primary Five Social Studies: Uganda",
    "title": "Uganda as an Independent Nation",
    "estMinutes": 38,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P5 Social Studies beta: built from researched NCDC Primary Five Social Studies Set One structure; human history/civic review still required before premium-final release. Uganda as an Independent Nation helps learners understand Uganda and explain Social Studies ideas with evidence.",
      "learningObjectives": [
        "Explain the meaning of independence.",
        "Name national symbols.",
        "State responsibilities of citizens.",
        "Describe benefits and challenges of independence."
      ],
      "whatYouNeedToKnow": [
        "Independence means self-rule.",
        "National symbols include the flag, anthem, coat of arms and national motto.",
        "Good citizens obey laws, respect others and protect public property.",
        "Independence allows self-government and national planning.",
        "Independent countries still face challenges such as poverty, unemployment, disease, corruption and conflict."
      ],
      "worked": {
        "problem": "Give one benefit and one challenge of independence.",
        "steps": [
          "Benefit: self-government.",
          "Challenge: development problems can remain."
        ],
        "answer": "A benefit is self-rule; a challenge is poverty or unemployment."
      },
      "commonMistakes": [
        "Thinking independence means no rules.",
        "Listing symbols without responsibilities.",
        "Ignoring challenges after independence.",
        "Confusing citizen rights with irresponsible behaviour."
      ],
      "recap": [
        "Independence means self-rule.",
        "Citizens have duties.",
        "Independent countries still solve problems."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p5-meaning-symbols",
        "title": "1. Meaning and national symbols",
        "modules": [
          {
            "moduleId": "p5-independent-symbols-full",
            "title": "Self-rule and symbols",
            "bigIdea": "Symbols help citizens recognise and respect their nation.",
            "learnIt": [
              "Independence means Uganda governs itself.",
              "The flag, anthem and coat of arms represent the nation.",
              "Symbols should be treated respectfully."
            ],
            "imageUrl": "/images/social-studies/p5-government-uganda.svg",
            "imageCaption": "National symbols and government.",
            "workedExample": {
              "question": "Name two national symbols of Uganda.",
              "steps": [
                "Think of symbols used for the country.",
                "Flag and anthem are examples."
              ],
              "answer": "The flag and national anthem are national symbols."
            },
            "tryThis": {
              "question": "Which is a national symbol?",
              "choices": [
                "private shoe",
                "coat of arms",
                "class chalk",
                "market basket"
              ],
              "correct": 1,
              "explanation": "The coat of arms represents the nation."
            }
          }
        ]
      },
      {
        "subtopicId": "p5-citizen-responsibilities",
        "title": "2. Responsibilities of citizens",
        "modules": [
          {
            "moduleId": "p5-citizen-responsibilities-full",
            "title": "Good citizenship",
            "bigIdea": "Citizens help their country by acting responsibly.",
            "learnIt": [
              "Good citizens obey laws.",
              "They protect public property.",
              "They respect other people’s rights.",
              "They take part in community development where possible."
            ],
            "imageUrl": "/images/social-studies/p5-government-uganda.svg",
            "imageCaption": "Citizenship and responsibilities.",
            "workedExample": {
              "question": "Give one responsibility of a citizen.",
              "steps": [
                "Think of actions that help the country.",
                "Obeying laws is one example."
              ],
              "answer": "A citizen should obey laws."
            },
            "tryThis": {
              "question": "A good citizen should:",
              "choices": [
                "destroy schools",
                "steal road signs",
                "protect public property",
                "fight leaders"
              ],
              "correct": 2,
              "explanation": "Good citizens protect public property."
            }
          }
        ]
      },
      {
        "subtopicId": "p5-benefits-challenges-independence",
        "title": "3. Benefits and challenges",
        "modules": [
          {
            "moduleId": "p5-independent-challenges-full",
            "title": "Building a country after independence",
            "bigIdea": "Independence brings responsibility as well as freedom.",
            "learnIt": [
              "Self-rule allows citizens to choose leaders.",
              "Government can plan national development.",
              "Challenges may include poverty, unemployment, corruption, disease and conflict.",
              "Citizens and leaders must work together to solve problems."
            ],
            "imageUrl": "/images/social-studies/p5-government-uganda.svg",
            "imageCaption": "Benefits and challenges of independence.",
            "workedExample": {
              "question": "Give one challenge faced by independent Uganda.",
              "steps": [
                "Think of development problems.",
                "Poverty or unemployment can affect development."
              ],
              "answer": "One challenge is poverty or unemployment."
            },
            "tryThis": {
              "question": "Which is a benefit of independence?",
              "choices": [
                "foreign rule forever",
                "no citizens",
                "no laws",
                "self-rule"
              ],
              "correct": 3,
              "explanation": "Independence allows self-rule."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Independence means:",
        "choices": [
          "self-rule",
          "foreign rule forever",
          "no government",
          "no citizens"
        ],
        "correct": 0,
        "why": "Independence means self-rule."
      },
      {
        "q": "A national symbol is:",
        "choices": [
          "private shoe",
          "coat of arms",
          "market basket",
          "class chalk"
        ],
        "correct": 1,
        "why": "The coat of arms is a national symbol."
      },
      {
        "q": "A good citizen should:",
        "choices": [
          "destroy property",
          "steal",
          "obey laws",
          "fight always"
        ],
        "correct": 2,
        "why": "Citizens should obey laws."
      },
      {
        "q": "A benefit of independence is:",
        "choices": [
          "foreign rule",
          "no identity",
          "no citizens",
          "self-government"
        ],
        "correct": 3,
        "why": "Independence allows self-government."
      },
      {
        "q": "A challenge after independence may be:",
        "choices": [
          "unemployment",
          "too much empty land only",
          "no need for health care",
          "no people"
        ],
        "correct": 0,
        "why": "Unemployment is a challenge."
      },
      {
        "q": "Public property should be:",
        "choices": [
          "destroyed",
          "protected",
          "stolen",
          "burnt"
        ],
        "correct": 1,
        "why": "Citizens should protect public property."
      }
    ]
  },
  {
    "id": "p5-government-uganda",
    "themeId": "p5-sst-uganda",
    "themeName": "Primary Five Social Studies: Uganda",
    "title": "The Government of Uganda",
    "estMinutes": 40,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P5 Social Studies beta: built from researched NCDC Primary Five Social Studies Set One structure; human history/civic review still required before premium-final release. The Government of Uganda helps learners understand Uganda and explain Social Studies ideas with evidence.",
      "learningObjectives": [
        "Define government.",
        "Name three arms of government.",
        "State roles of leaders and citizens.",
        "Explain local government services."
      ],
      "whatYouNeedToKnow": [
        "Government is the system that leads and manages a country.",
        "The three arms of government are Executive, Legislature and Judiciary.",
        "The Executive implements laws and runs government programmes.",
        "The Legislature makes laws.",
        "The Judiciary interprets laws and handles justice.",
        "Local government brings services closer to communities."
      ],
      "worked": {
        "problem": "Name the arm of government that makes laws.",
        "steps": [
          "The Legislature is responsible for making laws.",
          "In Uganda, Parliament is part of the Legislature."
        ],
        "answer": "The Legislature makes laws."
      },
      "commonMistakes": [
        "Confusing the three arms of government.",
        "Thinking government means one person only.",
        "Forgetting local government.",
        "Listing rights without responsibilities."
      ],
      "recap": [
        "Government leads and manages a country.",
        "Three arms have different roles.",
        "Local government brings services closer."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p5-arms-government",
        "title": "1. Arms of government",
        "modules": [
          {
            "moduleId": "p5-arms-government-full",
            "title": "Executive, Legislature and Judiciary",
            "bigIdea": "Government work is divided so each arm has a role.",
            "learnIt": [
              "The Executive implements laws and runs programmes.",
              "The Legislature makes laws.",
              "The Judiciary interprets laws and handles justice.",
              "Each arm helps government function properly."
            ],
            "imageUrl": "/images/social-studies/p5-government-uganda.svg",
            "imageCaption": "Three arms of government.",
            "workedExample": {
              "question": "Which arm interprets laws?",
              "steps": [
                "Courts handle justice.",
                "Courts belong to the Judiciary."
              ],
              "answer": "The Judiciary interprets laws."
            },
            "tryThis": {
              "question": "Which arm makes laws?",
              "choices": [
                "Executive",
                "Judiciary",
                "Legislature",
                "Police only"
              ],
              "correct": 2,
              "explanation": "The Legislature makes laws."
            }
          }
        ]
      },
      {
        "subtopicId": "p5-leaders-citizens",
        "title": "2. Leaders and citizens",
        "modules": [
          {
            "moduleId": "p5-leaders-citizens-full",
            "title": "Roles and responsibilities",
            "bigIdea": "Good governance depends on leaders and citizens doing their parts.",
            "learnIt": [
              "Leaders should serve people, plan services and protect rights.",
              "Citizens should obey laws and protect public property.",
              "People should report problems through proper channels."
            ],
            "imageUrl": "/images/social-studies/p5-government-uganda.svg",
            "imageCaption": "Leaders and citizens.",
            "workedExample": {
              "question": "Give one duty of a citizen.",
              "steps": [
                "Citizens help the country by obeying laws.",
                "They also protect public property."
              ],
              "answer": "A citizen should obey laws and protect public property."
            },
            "tryThis": {
              "question": "A role of leaders is to:",
              "choices": [
                "destroy services",
                "hide public money",
                "stop all meetings",
                "serve communities"
              ],
              "correct": 3,
              "explanation": "Leaders should serve communities."
            }
          }
        ]
      },
      {
        "subtopicId": "p5-local-government",
        "title": "3. Local government",
        "modules": [
          {
            "moduleId": "p5-local-government-full",
            "title": "Services near people",
            "bigIdea": "Local government helps services reach districts, sub-counties and villages.",
            "learnIt": [
              "Local leaders help manage community needs.",
              "Services may include roads, health centres, schools and sanitation.",
              "Local government can mobilise people for development.",
              "Citizens should cooperate with leaders and attend community meetings where appropriate."
            ],
            "imageUrl": "/images/social-studies/p5-government-uganda.svg",
            "imageCaption": "Local government and services.",
            "workedExample": {
              "question": "Give one service provided through local government.",
              "steps": [
                "Think of services near communities.",
                "Roads, schools or health centres are examples."
              ],
              "answer": "Local government may help provide roads, schools or health services."
            },
            "tryThis": {
              "question": "Local government brings services:",
              "choices": [
                "closer to people",
                "only overseas",
                "away from citizens",
                "to no one"
              ],
              "correct": 0,
              "explanation": "Local government works near communities."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Government is:",
        "choices": [
          "only a mountain",
          "system that leads a country",
          "only a river",
          "a crop disease"
        ],
        "correct": 1,
        "why": "Government leads/manages a country."
      },
      {
        "q": "The arm that makes laws is:",
        "choices": [
          "Judiciary",
          "Executive only",
          "Legislature",
          "Police only"
        ],
        "correct": 2,
        "why": "The Legislature makes laws."
      },
      {
        "q": "The arm that interprets laws is:",
        "choices": [
          "Legislature",
          "Executive",
          "Army only",
          "Judiciary"
        ],
        "correct": 3,
        "why": "Judiciary interprets laws."
      },
      {
        "q": "Local government helps provide:",
        "choices": [
          "services near people",
          "no services",
          "only foreign rule",
          "only weather"
        ],
        "correct": 0,
        "why": "Local government brings services closer."
      },
      {
        "q": "A citizen should:",
        "choices": [
          "destroy property",
          "obey laws",
          "steal",
          "hide public money"
        ],
        "correct": 1,
        "why": "Citizens have responsibilities."
      },
      {
        "q": "Leaders should:",
        "choices": [
          "cheat people",
          "ignore needs",
          "serve people",
          "destroy services"
        ],
        "correct": 2,
        "why": "Good leaders serve people."
      }
    ]
  },
  {
    "id": "p5-population-size-distribution",
    "themeId": "p5-sst-uganda",
    "themeName": "Primary Five Social Studies: Uganda",
    "title": "Population, Size and Distribution",
    "estMinutes": 38,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P5 Social Studies beta: built from researched NCDC Primary Five Social Studies Set One structure; human history/civic review still required before premium-final release. Population, Size and Distribution helps learners understand Uganda and explain Social Studies ideas with evidence.",
      "learningObjectives": [
        "Define population.",
        "Explain population distribution.",
        "Name factors influencing settlement.",
        "Describe population problems and solutions."
      ],
      "whatYouNeedToKnow": [
        "Population is the number of people living in an area.",
        "Population distribution means how people are spread over an area.",
        "Densely populated areas have many people; sparsely populated areas have few people.",
        "People settle where there is water, fertile soil, jobs, security and services.",
        "High population can cause unemployment, congestion, land shortage and pressure on services."
      ],
      "worked": {
        "problem": "Why do many people settle near towns?",
        "steps": [
          "Towns provide jobs and trade.",
          "They may have schools, hospitals, roads and markets."
        ],
        "answer": "Many people settle near towns because of jobs, trade and services."
      },
      "commonMistakes": [
        "Confusing population with vegetation.",
        "Calling every crowded place bad without explanation.",
        "Listing settlement factors without examples.",
        "Ignoring planning solutions."
      ],
      "recap": [
        "Population counts people.",
        "Distribution means spread.",
        "Settlement depends on resources and services."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p5-population-meaning",
        "title": "1. Population and distribution",
        "modules": [
          {
            "moduleId": "p5-population-meaning-full",
            "title": "Counting and spread of people",
            "bigIdea": "Population studies help learners understand where and why people live in certain places.",
            "learnIt": [
              "Population is the number of people in an area.",
              "Population distribution is how people are spread.",
              "Dense population means many people in an area.",
              "Sparse population means few people in an area."
            ],
            "imageUrl": "/images/social-studies/p5-population-distribution.svg",
            "imageCaption": "Population distribution factors.",
            "workedExample": {
              "question": "What does population mean?",
              "steps": [
                "It refers to people.",
                "It counts people living in an area."
              ],
              "answer": "Population is the number of people living in an area."
            },
            "tryThis": {
              "question": "An area with many people close together is:",
              "choices": [
                "empty",
                "a desert only",
                "uninhabited",
                "densely populated"
              ],
              "correct": 3,
              "explanation": "Dense population means many people."
            }
          }
        ]
      },
      {
        "subtopicId": "p5-settlement-factors",
        "title": "2. Factors influencing settlement",
        "modules": [
          {
            "moduleId": "p5-settlement-factors-full",
            "title": "Why people settle",
            "bigIdea": "People choose settlement areas because of needs and opportunities.",
            "learnIt": [
              "Water attracts people and animals.",
              "Fertile soil supports farming.",
              "Jobs attract people to towns.",
              "Security, roads, schools and health centres also attract settlement."
            ],
            "imageUrl": "/images/social-studies/p5-population-distribution.svg",
            "imageCaption": "Factors influencing settlement.",
            "workedExample": {
              "question": "Why do people settle near fertile soil?",
              "steps": [
                "Fertile soil supports crop growing.",
                "People need food and income from farming."
              ],
              "answer": "People settle near fertile soil because it supports farming."
            },
            "tryThis": {
              "question": "Which can attract settlement?",
              "choices": [
                "jobs",
                "insecurity",
                "drought only",
                "no water"
              ],
              "correct": 0,
              "explanation": "Jobs attract people to settle."
            }
          }
        ]
      },
      {
        "subtopicId": "p5-population-problems",
        "title": "3. Problems and solutions",
        "modules": [
          {
            "moduleId": "p5-population-problems-full",
            "title": "Managing population pressure",
            "bigIdea": "Population growth requires planning and service improvement.",
            "learnIt": [
              "High population may cause unemployment and congestion.",
              "Land shortage can occur where many people need farms or homes.",
              "Services such as schools and hospitals may become crowded.",
              "Solutions include job creation, better farming, education and improved services."
            ],
            "imageUrl": "/images/social-studies/p5-population-distribution.svg",
            "imageCaption": "Population problems and solutions.",
            "workedExample": {
              "question": "Give one problem caused by high population in a town.",
              "steps": [
                "Many people need jobs and services.",
                "There may be congestion or unemployment."
              ],
              "answer": "High population can cause congestion or unemployment."
            },
            "tryThis": {
              "question": "A solution to population pressure can be:",
              "choices": [
                "closing schools",
                "job creation",
                "destroying clinics",
                "stopping farming"
              ],
              "correct": 1,
              "explanation": "Job creation can reduce unemployment."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Population means:",
        "choices": [
          "number of trees only",
          "amount of rainfall",
          "number of people in an area",
          "height of mountains"
        ],
        "correct": 2,
        "why": "Population counts people."
      },
      {
        "q": "Densely populated means:",
        "choices": [
          "no people",
          "only animals",
          "only rivers",
          "many people in an area"
        ],
        "correct": 3,
        "why": "Dense means many people close together."
      },
      {
        "q": "Which attracts settlement?",
        "choices": [
          "water",
          "war",
          "drought",
          "disease only"
        ],
        "correct": 0,
        "why": "People settle near water."
      },
      {
        "q": "A problem of high population is:",
        "choices": [
          "too much empty land",
          "unemployment",
          "no need for food",
          "no people"
        ],
        "correct": 1,
        "why": "Many people may struggle to find jobs."
      },
      {
        "q": "Population distribution means:",
        "choices": [
          "how books are printed",
          "how clocks work",
          "how people are spread",
          "how food digests"
        ],
        "correct": 2,
        "why": "Distribution is spread over space."
      },
      {
        "q": "Which service can influence settlement?",
        "choices": [
          "desert wind only",
          "empty rock",
          "no road",
          "school"
        ],
        "correct": 3,
        "why": "Schools and services attract people."
      }
    ]
  }
];

export function getP5SocialTopic(id: string): Topic | undefined {
  return P5_SOCIAL_TOPICS.find((topic) => topic.id === id);
}
