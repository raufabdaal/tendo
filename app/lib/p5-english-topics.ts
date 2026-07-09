import type { Topic } from "@/lib/topics";

// P5 English beta content layer.
// Source map: content/curriculum/p5-english.json.
// Rule: NCDC first, build second. This follows the researched P5 Set One English structure.

export const P5_ENGLISH_TOPICS: Topic[] = [
  {
    "id": "p5-vehicle-repair-maintenance",
    "themeId": "p5-english-set-one",
    "themeName": "Primary Five English Language",
    "title": "Vehicle Repair and Maintenance",
    "estMinutes": 35,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P5 beta content: verify against official NCDC Primary Five English before public-final release. Learners use English to identify vehicle parts, repair tools and safety rules.",
      "learningObjectives": [
        "Name vehicle parts and repair tools.",
        "Use has/have, must/mustn't and if-conditionals.",
        "Read and write short texts about vehicle safety."
      ],
      "whatYouNeedToKnow": [
        "Vehicle vocabulary includes engine, tyre, windscreen, brakes, bell, reflector and handle bar.",
        "Repair tools include spanner, screwdriver, pliers, hammer, file, jack, grease, oil and wire.",
        "Use must for strong rules and mustn't for dangerous actions."
      ],
      "worked": {
        "problem": "Write a safety rule about bad brakes.",
        "steps": [
          "Identify the danger: bad brakes.",
          "Use mustn't for a forbidden action.",
          "Write a complete sentence."
        ],
        "answer": "You mustn't drive a vehicle with bad brakes."
      },
      "recap": [
        "Name vehicle parts correctly.",
        "Use must and mustn't for safety.",
        "Use if to show condition and result."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "vehicle-parts",
        "title": "1. Vehicle parts",
        "modules": [
          {
            "moduleId": "parts-vocabulary",
            "title": "Vehicle Parts Vocabulary",
            "bigIdea": "Knowing vehicle parts helps learners describe maintenance problems clearly.",
            "learnIt": [
              "The engine powers a vehicle.",
              "Brakes help a vehicle stop.",
              "Mirrors, lights, reflectors and indicators help road safety."
            ],
            "workedExample": {
              "question": "What is the use of a driving mirror?",
              "steps": [
                "A driving mirror helps the driver see behind or beside the vehicle.",
                "This helps the driver avoid accidents."
              ],
              "answer": "It helps the driver see behind or beside the vehicle."
            },
            "tryThis": {
              "question": "Which part helps a vehicle stop?",
              "choices": [
                "brakes",
                "seat",
                "boot",
                "saddle"
              ],
              "correct": 0,
              "explanation": "Brakes help a vehicle stop."
            }
          }
        ]
      },
      {
        "subtopicId": "repair-tools",
        "title": "2. Repair tools and safety structures",
        "modules": [
          {
            "moduleId": "tools-conditionals",
            "title": "Tools, Must and If",
            "bigIdea": "Repair language uses tools, purpose and condition sentences.",
            "learnIt": [
              "Use if to show a condition: If the tyre is flat, repair it.",
              "Use in order to to show purpose: He used a jack in order to lift the car.",
              "Use mustn't for dangerous actions."
            ],
            "workedExample": {
              "question": "Complete: If I want to remove a tyre, I will use a ____.",
              "steps": [
                "Choose the tool that lifts a vehicle.",
                "A jack lifts a vehicle during tyre repair."
              ],
              "answer": "If I want to remove a tyre, I will use a jack."
            },
            "tryThis": {
              "question": "Complete: You ___ drive with flat tyres.",
              "choices": [
                "mustn't",
                "must",
                "has",
                "were"
              ],
              "correct": 0,
              "explanation": "Driving with flat tyres is dangerous, so use mustn't."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Which part helps a driver see behind?",
        "choices": [
          "mirror",
          "engine",
          "seat",
          "boot"
        ],
        "correct": 0,
        "why": "A mirror helps a driver see behind."
      },
      {
        "q": "Which tool lifts a car?",
        "choices": [
          "jack",
          "saw",
          "file",
          "bell"
        ],
        "correct": 0,
        "why": "A jack lifts a vehicle."
      },
      {
        "q": "Complete: You ___ repair broken brakes.",
        "choices": [
          "must",
          "mustn't",
          "where",
          "because"
        ],
        "correct": 0,
        "why": "Must shows a strong safety rule."
      },
      {
        "q": "Complete: If the tyre is flat, the driver ___ repair it.",
        "choices": [
          "will",
          "were",
          "did",
          "has"
        ],
        "correct": 0,
        "why": "If can pair with will."
      },
      {
        "q": "Which is a repair tool?",
        "choices": [
          "spanner",
          "windscreen",
          "seat belt",
          "head lamp"
        ],
        "correct": 0,
        "why": "A spanner is a tool."
      },
      {
        "q": "Which sentence is correct?",
        "choices": [
          "The mechanic has repaired the car.",
          "The mechanic have repaired the car.",
          "The mechanic repairing car.",
          "Mechanic repair has."
        ],
        "correct": 0,
        "why": "Singular subject takes has."
      },
      {
        "q": "The word indicator shows:",
        "choices": [
          "turning direction",
          "fuel price",
          "driver's name",
          "number of passengers"
        ],
        "correct": 0,
        "why": "Indicators show turning direction."
      },
      {
        "q": "Why should vehicles be maintained?",
        "choices": [
          "To reduce accidents",
          "To spoil tyres",
          "To hide mirrors",
          "To make roads dirty"
        ],
        "correct": 0,
        "why": "Well-maintained vehicles are safer."
      }
    ]
  },
  {
    "id": "p5-print-media",
    "themeId": "p5-english-set-one",
    "themeName": "Primary Five English Language",
    "title": "Print Media",
    "estMinutes": 30,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P5 beta content: verify against official NCDC Primary Five English before public-final release. Learners read and write about newspapers, magazines, articles and advertisements.",
      "learningObjectives": [
        "Use print media vocabulary.",
        "Use articles a, an and the.",
        "Use relative pronouns who and which.",
        "Write short print-media texts."
      ],
      "whatYouNeedToKnow": [
        "Print media includes newspapers, magazines, brochures and newsletters.",
        "Use an before vowel sounds and a before consonant sounds.",
        "Use who for people and which for things."
      ],
      "worked": {
        "problem": "Join: The reporter wrote a story. The story was about elections.",
        "steps": [
          "The thing described is story.",
          "Use which for a thing.",
          "Join clearly."
        ],
        "answer": "The reporter wrote a story which was about elections."
      },
      "recap": [
        "Print media has special vocabulary.",
        "Use a/an/the correctly.",
        "Use who for people and which for things."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "print-vocabulary",
        "title": "1. Print media vocabulary",
        "modules": [
          {
            "moduleId": "newspaper-words",
            "title": "Newspapers and Articles",
            "bigIdea": "Print media helps people read news, announcements and opinions.",
            "learnIt": [
              "A reporter gathers information.",
              "A journalist writes or reports news.",
              "An editor checks writing before publication."
            ],
            "workedExample": {
              "question": "What is an advertisement?",
              "steps": [
                "It gives information to persuade people to buy, attend or use something.",
                "It is common in newspapers and magazines."
              ],
              "answer": "An advertisement promotes something."
            },
            "tryThis": {
              "question": "A person who writes news stories is a:",
              "choices": [
                "journalist",
                "driver",
                "nurse",
                "farmer"
              ],
              "correct": 0,
              "explanation": "A journalist writes or reports news."
            }
          }
        ]
      },
      {
        "subtopicId": "articles-relative",
        "title": "2. Articles and relative pronouns",
        "modules": [
          {
            "moduleId": "a-an-the-who-which",
            "title": "A, An, The, Who and Which",
            "bigIdea": "Articles and relative pronouns make print-media sentences correct.",
            "learnIt": [
              "Use an before vowel sounds: an article.",
              "Use a before consonant sounds: a reporter.",
              "Use who for people and which for things."
            ],
            "workedExample": {
              "question": "Complete: She read ___ interesting article.",
              "steps": [
                "Article begins with a vowel sound.",
                "Use an before vowel sounds."
              ],
              "answer": "She read an interesting article."
            },
            "tryThis": {
              "question": "The cartoon ___ made us laugh was on the back page.",
              "choices": [
                "which",
                "who",
                "where",
                "when"
              ],
              "correct": 0,
              "explanation": "Cartoon is a thing, so use which."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Which is print media?",
        "choices": [
          "newspaper",
          "radio only",
          "telephone call",
          "rainfall"
        ],
        "correct": 0,
        "why": "Newspapers are print media."
      },
      {
        "q": "Choose correctly: ___ editor checked the story.",
        "choices": [
          "An",
          "A",
          "Thee",
          "At"
        ],
        "correct": 0,
        "why": "Editor begins with a vowel sound."
      },
      {
        "q": "A person who reports news is a:",
        "choices": [
          "reporter",
          "patient",
          "cashier",
          "pilot"
        ],
        "correct": 0,
        "why": "A reporter reports news."
      },
      {
        "q": "The article ___ appeared yesterday was interesting.",
        "choices": [
          "which",
          "who",
          "where",
          "why"
        ],
        "correct": 0,
        "why": "Article is a thing, so use which."
      },
      {
        "q": "An advertisement is used to:",
        "choices": [
          "promote or announce something",
          "hide news",
          "cook food",
          "repair shoes"
        ],
        "correct": 0,
        "why": "Advertisements promote goods, events or services."
      },
      {
        "q": "Which is part of a newspaper?",
        "choices": [
          "front page",
          "car jack",
          "stethoscope",
          "hoe"
        ],
        "correct": 0,
        "why": "Front page is part of a newspaper."
      },
      {
        "q": "Choose correctly: He bought ___ magazine.",
        "choices": [
          "a",
          "an",
          "thee",
          "was"
        ],
        "correct": 0,
        "why": "Magazine begins with a consonant sound."
      },
      {
        "q": "A cartoon is usually:",
        "choices": [
          "a drawing or humorous picture",
          "a bank account",
          "a vehicle engine",
          "a type of rain"
        ],
        "correct": 0,
        "why": "Cartoons are drawings or humorous pictures."
      }
    ]
  },
  {
    "id": "p5-travelling",
    "themeId": "p5-english-set-one",
    "themeName": "Primary Five English Language",
    "title": "Travelling",
    "estMinutes": 28,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P5 beta content: verify against official NCDC Primary Five English before public-final release. Learners use vocabulary and structures for journeys, transport and travel reports.",
      "learningObjectives": [
        "Use travelling vocabulary.",
        "Use adverbs, past simple and past continuous tense.",
        "Read travel charts and write simple travel texts."
      ],
      "whatYouNeedToKnow": [
        "Travel vocabulary includes fare, conductor, ticket, departure, destination, luggage and passenger.",
        "Past continuous uses was/were + -ing.",
        "While joins two actions happening at the same time."
      ],
      "worked": {
        "problem": "Join with while: The taxi was moving. The conductor collected the fare.",
        "steps": [
          "Both actions happened at the same time.",
          "Use while to connect them."
        ],
        "answer": "The conductor collected the fare while the taxi was moving."
      },
      "recap": [
        "Use exact travel words.",
        "Use while for simultaneous actions.",
        "Read departure and destination carefully."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "travel-vocabulary",
        "title": "1. Travel vocabulary",
        "modules": [
          {
            "moduleId": "fare-ticket-destination",
            "title": "Fare, Ticket and Destination",
            "bigIdea": "Travel vocabulary helps learners understand journeys.",
            "learnIt": [
              "Fare is money paid for transport.",
              "Destination is the place where a traveller is going.",
              "Departure is the time or place of leaving."
            ],
            "workedExample": {
              "question": "What is a passenger?",
              "steps": [
                "A passenger travels in a vehicle but does not drive it."
              ],
              "answer": "A passenger is a person who travels in a vehicle."
            },
            "tryThis": {
              "question": "The money paid for a journey is called:",
              "choices": [
                "fare",
                "luggage",
                "speed",
                "seat"
              ],
              "correct": 0,
              "explanation": "Fare is transport money."
            }
          }
        ]
      },
      {
        "subtopicId": "travel-grammar",
        "title": "2. While and past continuous",
        "modules": [
          {
            "moduleId": "while-past-continuous",
            "title": "Using While in Travel Sentences",
            "bigIdea": "While joins actions happening at the same time during a journey.",
            "learnIt": [
              "Past continuous uses was or were plus an -ing verb.",
              "Example: The bus was moving.",
              "While can begin a sentence or come in the middle."
            ],
            "workedExample": {
              "question": "Complete: While we ___ travelling, it started raining.",
              "steps": [
                "Use were with we.",
                "The sentence needs past continuous."
              ],
              "answer": "While we were travelling, it started raining."
            },
            "tryThis": {
              "question": "Choose the correct sentence.",
              "choices": [
                "While the bus was moving, the baby slept.",
                "While bus moving baby slept.",
                "While was bus move.",
                "Baby bus while sleep."
              ],
              "correct": 0,
              "explanation": "It uses while and past continuous correctly."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Money paid for transport is called:",
        "choices": [
          "fare",
          "luggage",
          "ticket only",
          "destination"
        ],
        "correct": 0,
        "why": "Fare is transport money."
      },
      {
        "q": "The place a traveller is going to is the:",
        "choices": [
          "destination",
          "departure",
          "speed",
          "seat"
        ],
        "correct": 0,
        "why": "Destination is the end point."
      },
      {
        "q": "Complete: While he ___ travelling, he lost his ticket.",
        "choices": [
          "was",
          "were",
          "is",
          "are"
        ],
        "correct": 0,
        "why": "He was travelling."
      },
      {
        "q": "A passenger is a person who:",
        "choices": [
          "travels in a vehicle",
          "repairs engines only",
          "prints newspapers",
          "sells medicine"
        ],
        "correct": 0,
        "why": "A passenger travels in a vehicle."
      },
      {
        "q": "Which is a means of transport?",
        "choices": [
          "taxi",
          "newspaper",
          "paragraph",
          "kettle"
        ],
        "correct": 0,
        "why": "A taxi is used for transport."
      },
      {
        "q": "Complete: I often travel ___ bus.",
        "choices": [
          "by",
          "on",
          "at",
          "of"
        ],
        "correct": 0,
        "why": "We say travel by bus."
      },
      {
        "q": "The opposite of arrive is:",
        "choices": [
          "leave",
          "reach",
          "stop",
          "sit"
        ],
        "correct": 0,
        "why": "Leave means go away."
      },
      {
        "q": "A ticket shows:",
        "choices": [
          "payment or permission to travel",
          "weather only",
          "bank balance only",
          "vehicle colour"
        ],
        "correct": 0,
        "why": "A ticket proves payment or permission."
      }
    ]
  },
  {
    "id": "p5-letter-writing",
    "themeId": "p5-english-set-one",
    "themeName": "Primary Five English Language",
    "title": "Letter Writing",
    "estMinutes": 30,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P5 beta content: verify against official NCDC Primary Five English before public-final release. Learners write personal letters, greetings and invitations.",
      "learningObjectives": [
        "Use vocabulary for letter writing.",
        "Use would, could, punctuation and personal pronouns.",
        "Read and write short functional texts."
      ],
      "whatYouNeedToKnow": [
        "Important vocabulary includes address, date, greeting, body, closing and signature.",
        "Important structures include would, could, punctuation and personal pronouns.",
        "A clear answer uses full sentences and exact vocabulary."
      ],
      "worked": {
        "problem": "Write one clear sentence about letter writing.",
        "steps": [
          "Choose the key vocabulary.",
          "Use the correct structure.",
          "Write a complete sentence."
        ],
        "answer": "This is a clear sentence about letter writing."
      },
      "recap": [
        "Use exact vocabulary.",
        "Use the target structure correctly.",
        "Write complete sentences."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p5-letter-writing-vocabulary",
        "title": "1. Vocabulary and meaning",
        "modules": [
          {
            "moduleId": "p5-letter-writing-words",
            "title": "Key Words",
            "bigIdea": "This module teaches the key words for letter writing.",
            "learnIt": [
              "Learn and pronounce the important words: address, date, greeting, body, closing and signature.",
              "Use each word in a short sentence.",
              "Check spelling carefully."
            ],
            "workedExample": {
              "question": "Use one key word from Letter Writing in a sentence.",
              "steps": [
                "Choose a relevant word.",
                "Write a complete sentence."
              ],
              "answer": "The sentence should use a letter writing word correctly."
            },
            "tryThis": {
              "question": "Which word belongs to this topic?",
              "choices": [
                "address",
                "mountain",
                "triangle",
                "oxygen"
              ],
              "correct": 0,
              "explanation": "address belongs to Letter Writing."
            }
          }
        ]
      },
      {
        "subtopicId": "p5-letter-writing-writing",
        "title": "2. Functional writing",
        "modules": [
          {
            "moduleId": "p5-letter-writing-structures",
            "title": "Structures and Writing",
            "bigIdea": "This module helps learners write correctly about letter writing.",
            "learnIt": [
              "Practise would, could, punctuation and personal pronouns.",
              "Write short, clear sentences.",
              "For written tasks, include the important details and correct punctuation."
            ],
            "workedExample": {
              "question": "Write a short message related to Letter Writing.",
              "steps": [
                "Identify the purpose.",
                "Include the key detail.",
                "Use correct punctuation."
              ],
              "answer": "The answer should be clear, polite and complete."
            },
            "tryThis": {
              "question": "A good written answer should be:",
              "choices": [
                "clear and complete",
                "hidden",
                "unfinished",
                "only one random word"
              ],
              "correct": 0,
              "explanation": "A good answer is clear and complete."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Which word belongs to Letter Writing?",
        "choices": [
          "address",
          "photosynthesis",
          "isosceles",
          "evaporation only"
        ],
        "correct": 0,
        "why": "address is part of Letter Writing vocabulary."
      },
      {
        "q": "A good sentence should be:",
        "choices": [
          "complete",
          "confusing",
          "half-written",
          "without meaning"
        ],
        "correct": 0,
        "why": "A good sentence has complete meaning."
      },
      {
        "q": "Which is important in functional writing?",
        "choices": [
          "clear purpose",
          "random words",
          "no punctuation",
          "hidden message"
        ],
        "correct": 0,
        "why": "Functional writing should have a clear purpose."
      },
      {
        "q": "Which skill helps in this topic?",
        "choices": [
          "spelling words correctly",
          "tearing books",
          "ignoring instructions",
          "guessing only"
        ],
        "correct": 0,
        "why": "Correct spelling supports clear writing."
      },
      {
        "q": "Choose the complete sentence.",
        "choices": [
          "The learner wrote a clear message.",
          "Learner wrote.",
          "Because message.",
          "Clear the."
        ],
        "correct": 0,
        "why": "It has complete meaning."
      },
      {
        "q": "Why should learners read instructions carefully?",
        "choices": [
          "To answer correctly",
          "To waste time",
          "To avoid learning",
          "To hide answers"
        ],
        "correct": 0,
        "why": "Instructions guide the answer."
      },
      {
        "q": "Which word shows politeness?",
        "choices": [
          "please",
          "never mind you",
          "go away",
          "nonsense"
        ],
        "correct": 0,
        "why": "Please is polite."
      },
      {
        "q": "Before writing, a learner should first:",
        "choices": [
          "understand the task",
          "close the book",
          "ignore the question",
          "write random words"
        ],
        "correct": 0,
        "why": "Understanding the task helps produce a correct answer."
      }
    ]
  },
  {
    "id": "p5-communication",
    "themeId": "p5-english-set-one",
    "themeName": "Primary Five English Language",
    "title": "Communication",
    "estMinutes": 38,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P5 beta content: verify against official NCDC Primary Five English before public-final release. Learners use language for the post office, telephone and internet.",
      "learningObjectives": [
        "Use vocabulary for communication.",
        "Use future tense, conjunctions, unless, either...or, too...to and in order to.",
        "Read and write short functional texts."
      ],
      "whatYouNeedToKnow": [
        "Important vocabulary includes stamp, parcel, telephone, airtime, email, website, save and delete.",
        "Important structures include future tense, conjunctions, unless, either...or, too...to and in order to.",
        "A clear answer uses full sentences and exact vocabulary."
      ],
      "worked": {
        "problem": "Write one clear sentence about communication.",
        "steps": [
          "Choose the key vocabulary.",
          "Use the correct structure.",
          "Write a complete sentence."
        ],
        "answer": "This is a clear sentence about communication."
      },
      "recap": [
        "Use exact vocabulary.",
        "Use the target structure correctly.",
        "Write complete sentences."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p5-communication-vocabulary",
        "title": "1. Vocabulary and meaning",
        "modules": [
          {
            "moduleId": "p5-communication-words",
            "title": "Key Words",
            "bigIdea": "This module teaches the key words for communication.",
            "learnIt": [
              "Learn and pronounce the important words: stamp, parcel, telephone, airtime, email, website, save and delete.",
              "Use each word in a short sentence.",
              "Check spelling carefully."
            ],
            "workedExample": {
              "question": "Use one key word from Communication in a sentence.",
              "steps": [
                "Choose a relevant word.",
                "Write a complete sentence."
              ],
              "answer": "The sentence should use a communication word correctly."
            },
            "tryThis": {
              "question": "Which word belongs to this topic?",
              "choices": [
                "stamp",
                "mountain",
                "triangle",
                "oxygen"
              ],
              "correct": 0,
              "explanation": "stamp belongs to Communication."
            }
          }
        ]
      },
      {
        "subtopicId": "p5-communication-writing",
        "title": "2. Functional writing",
        "modules": [
          {
            "moduleId": "p5-communication-structures",
            "title": "Structures and Writing",
            "bigIdea": "This module helps learners write correctly about communication.",
            "learnIt": [
              "Practise future tense, conjunctions, unless, either...or, too...to and in order to.",
              "Write short, clear sentences.",
              "For written tasks, include the important details and correct punctuation."
            ],
            "workedExample": {
              "question": "Write a short message related to Communication.",
              "steps": [
                "Identify the purpose.",
                "Include the key detail.",
                "Use correct punctuation."
              ],
              "answer": "The answer should be clear, polite and complete."
            },
            "tryThis": {
              "question": "A good written answer should be:",
              "choices": [
                "clear and complete",
                "hidden",
                "unfinished",
                "only one random word"
              ],
              "correct": 0,
              "explanation": "A good answer is clear and complete."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Which word belongs to Communication?",
        "choices": [
          "stamp",
          "photosynthesis",
          "isosceles",
          "evaporation only"
        ],
        "correct": 0,
        "why": "stamp is part of Communication vocabulary."
      },
      {
        "q": "A good sentence should be:",
        "choices": [
          "complete",
          "confusing",
          "half-written",
          "without meaning"
        ],
        "correct": 0,
        "why": "A good sentence has complete meaning."
      },
      {
        "q": "Which is important in functional writing?",
        "choices": [
          "clear purpose",
          "random words",
          "no punctuation",
          "hidden message"
        ],
        "correct": 0,
        "why": "Functional writing should have a clear purpose."
      },
      {
        "q": "Which skill helps in this topic?",
        "choices": [
          "spelling words correctly",
          "tearing books",
          "ignoring instructions",
          "guessing only"
        ],
        "correct": 0,
        "why": "Correct spelling supports clear writing."
      },
      {
        "q": "Choose the complete sentence.",
        "choices": [
          "The learner wrote a clear message.",
          "Learner wrote.",
          "Because message.",
          "Clear the."
        ],
        "correct": 0,
        "why": "It has complete meaning."
      },
      {
        "q": "Why should learners read instructions carefully?",
        "choices": [
          "To answer correctly",
          "To waste time",
          "To avoid learning",
          "To hide answers"
        ],
        "correct": 0,
        "why": "Instructions guide the answer."
      },
      {
        "q": "Which word shows politeness?",
        "choices": [
          "please",
          "never mind you",
          "go away",
          "nonsense"
        ],
        "correct": 0,
        "why": "Please is polite."
      },
      {
        "q": "Before writing, a learner should first:",
        "choices": [
          "understand the task",
          "close the book",
          "ignore the question",
          "write random words"
        ],
        "correct": 0,
        "why": "Understanding the task helps produce a correct answer."
      }
    ]
  },
  {
    "id": "p5-culture",
    "themeId": "p5-english-set-one",
    "themeName": "Primary Five English Language",
    "title": "Culture",
    "estMinutes": 32,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P5 beta content: verify against official NCDC Primary Five English before public-final release. Learners talk respectfully about nationalities, languages and culture.",
      "learningObjectives": [
        "Use vocabulary for culture.",
        "Use adjectives, prepositions, passive voice and conditionals.",
        "Read and write short functional texts."
      ],
      "whatYouNeedToKnow": [
        "Important vocabulary includes Ugandan, Kenyan, Tanzanian, Luganda, Kiswahili and English.",
        "Important structures include adjectives, prepositions, passive voice and conditionals.",
        "A clear answer uses full sentences and exact vocabulary."
      ],
      "worked": {
        "problem": "Write one clear sentence about culture.",
        "steps": [
          "Choose the key vocabulary.",
          "Use the correct structure.",
          "Write a complete sentence."
        ],
        "answer": "This is a clear sentence about culture."
      },
      "recap": [
        "Use exact vocabulary.",
        "Use the target structure correctly.",
        "Write complete sentences."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p5-culture-vocabulary",
        "title": "1. Vocabulary and meaning",
        "modules": [
          {
            "moduleId": "p5-culture-words",
            "title": "Key Words",
            "bigIdea": "This module teaches the key words for culture.",
            "learnIt": [
              "Learn and pronounce the important words: Ugandan, Kenyan, Tanzanian, Luganda, Kiswahili and English.",
              "Use each word in a short sentence.",
              "Check spelling carefully."
            ],
            "workedExample": {
              "question": "Use one key word from Culture in a sentence.",
              "steps": [
                "Choose a relevant word.",
                "Write a complete sentence."
              ],
              "answer": "The sentence should use a culture word correctly."
            },
            "tryThis": {
              "question": "Which word belongs to this topic?",
              "choices": [
                "Ugandan",
                "mountain",
                "triangle",
                "oxygen"
              ],
              "correct": 0,
              "explanation": "Ugandan belongs to Culture."
            }
          }
        ]
      },
      {
        "subtopicId": "p5-culture-writing",
        "title": "2. Functional writing",
        "modules": [
          {
            "moduleId": "p5-culture-structures",
            "title": "Structures and Writing",
            "bigIdea": "This module helps learners write correctly about culture.",
            "learnIt": [
              "Practise adjectives, prepositions, passive voice and conditionals.",
              "Write short, clear sentences.",
              "For written tasks, include the important details and correct punctuation."
            ],
            "workedExample": {
              "question": "Write a short message related to Culture.",
              "steps": [
                "Identify the purpose.",
                "Include the key detail.",
                "Use correct punctuation."
              ],
              "answer": "The answer should be clear, polite and complete."
            },
            "tryThis": {
              "question": "A good written answer should be:",
              "choices": [
                "clear and complete",
                "hidden",
                "unfinished",
                "only one random word"
              ],
              "correct": 0,
              "explanation": "A good answer is clear and complete."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Which word belongs to Culture?",
        "choices": [
          "Ugandan",
          "photosynthesis",
          "isosceles",
          "evaporation only"
        ],
        "correct": 0,
        "why": "Ugandan is part of Culture vocabulary."
      },
      {
        "q": "A good sentence should be:",
        "choices": [
          "complete",
          "confusing",
          "half-written",
          "without meaning"
        ],
        "correct": 0,
        "why": "A good sentence has complete meaning."
      },
      {
        "q": "Which is important in functional writing?",
        "choices": [
          "clear purpose",
          "random words",
          "no punctuation",
          "hidden message"
        ],
        "correct": 0,
        "why": "Functional writing should have a clear purpose."
      },
      {
        "q": "Which skill helps in this topic?",
        "choices": [
          "spelling words correctly",
          "tearing books",
          "ignoring instructions",
          "guessing only"
        ],
        "correct": 0,
        "why": "Correct spelling supports clear writing."
      },
      {
        "q": "Choose the complete sentence.",
        "choices": [
          "The learner wrote a clear message.",
          "Learner wrote.",
          "Because message.",
          "Clear the."
        ],
        "correct": 0,
        "why": "It has complete meaning."
      },
      {
        "q": "Why should learners read instructions carefully?",
        "choices": [
          "To answer correctly",
          "To waste time",
          "To avoid learning",
          "To hide answers"
        ],
        "correct": 0,
        "why": "Instructions guide the answer."
      },
      {
        "q": "Which word shows politeness?",
        "choices": [
          "please",
          "never mind you",
          "go away",
          "nonsense"
        ],
        "correct": 0,
        "why": "Please is polite."
      },
      {
        "q": "Before writing, a learner should first:",
        "choices": [
          "understand the task",
          "close the book",
          "ignore the question",
          "write random words"
        ],
        "correct": 0,
        "why": "Understanding the task helps produce a correct answer."
      }
    ]
  },
  {
    "id": "p5-peace-security",
    "themeId": "p5-english-set-one",
    "themeName": "Primary Five English Language",
    "title": "Peace and Security",
    "estMinutes": 28,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P5 beta content: verify against official NCDC Primary Five English before public-final release. Learners use language for peaceful living, reporting and resolving conflict.",
      "learningObjectives": [
        "Use vocabulary for peace and security.",
        "Use conjunctions, past tense and present perfect.",
        "Read and write short functional texts."
      ],
      "whatYouNeedToKnow": [
        "Important vocabulary includes peace, security, police, court, witness, report and statement.",
        "Important structures include conjunctions, past tense and present perfect.",
        "A clear answer uses full sentences and exact vocabulary."
      ],
      "worked": {
        "problem": "Write one clear sentence about peace and security.",
        "steps": [
          "Choose the key vocabulary.",
          "Use the correct structure.",
          "Write a complete sentence."
        ],
        "answer": "This is a clear sentence about peace and security."
      },
      "recap": [
        "Use exact vocabulary.",
        "Use the target structure correctly.",
        "Write complete sentences."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p5-peace-security-vocabulary",
        "title": "1. Vocabulary and meaning",
        "modules": [
          {
            "moduleId": "p5-peace-security-words",
            "title": "Key Words",
            "bigIdea": "This module teaches the key words for peace and security.",
            "learnIt": [
              "Learn and pronounce the important words: peace, security, police, court, witness, report and statement.",
              "Use each word in a short sentence.",
              "Check spelling carefully."
            ],
            "workedExample": {
              "question": "Use one key word from Peace and Security in a sentence.",
              "steps": [
                "Choose a relevant word.",
                "Write a complete sentence."
              ],
              "answer": "The sentence should use a peace and security word correctly."
            },
            "tryThis": {
              "question": "Which word belongs to this topic?",
              "choices": [
                "peace",
                "mountain",
                "triangle",
                "oxygen"
              ],
              "correct": 0,
              "explanation": "peace belongs to Peace and Security."
            }
          }
        ]
      },
      {
        "subtopicId": "p5-peace-security-writing",
        "title": "2. Functional writing",
        "modules": [
          {
            "moduleId": "p5-peace-security-structures",
            "title": "Structures and Writing",
            "bigIdea": "This module helps learners write correctly about peace and security.",
            "learnIt": [
              "Practise conjunctions, past tense and present perfect.",
              "Write short, clear sentences.",
              "For written tasks, include the important details and correct punctuation."
            ],
            "workedExample": {
              "question": "Write a short message related to Peace and Security.",
              "steps": [
                "Identify the purpose.",
                "Include the key detail.",
                "Use correct punctuation."
              ],
              "answer": "The answer should be clear, polite and complete."
            },
            "tryThis": {
              "question": "A good written answer should be:",
              "choices": [
                "clear and complete",
                "hidden",
                "unfinished",
                "only one random word"
              ],
              "correct": 0,
              "explanation": "A good answer is clear and complete."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Which word belongs to Peace and Security?",
        "choices": [
          "peace",
          "photosynthesis",
          "isosceles",
          "evaporation only"
        ],
        "correct": 0,
        "why": "peace is part of Peace and Security vocabulary."
      },
      {
        "q": "A good sentence should be:",
        "choices": [
          "complete",
          "confusing",
          "half-written",
          "without meaning"
        ],
        "correct": 0,
        "why": "A good sentence has complete meaning."
      },
      {
        "q": "Which is important in functional writing?",
        "choices": [
          "clear purpose",
          "random words",
          "no punctuation",
          "hidden message"
        ],
        "correct": 0,
        "why": "Functional writing should have a clear purpose."
      },
      {
        "q": "Which skill helps in this topic?",
        "choices": [
          "spelling words correctly",
          "tearing books",
          "ignoring instructions",
          "guessing only"
        ],
        "correct": 0,
        "why": "Correct spelling supports clear writing."
      },
      {
        "q": "Choose the complete sentence.",
        "choices": [
          "The learner wrote a clear message.",
          "Learner wrote.",
          "Because message.",
          "Clear the."
        ],
        "correct": 0,
        "why": "It has complete meaning."
      },
      {
        "q": "Why should learners read instructions carefully?",
        "choices": [
          "To answer correctly",
          "To waste time",
          "To avoid learning",
          "To hide answers"
        ],
        "correct": 0,
        "why": "Instructions guide the answer."
      },
      {
        "q": "Which word shows politeness?",
        "choices": [
          "please",
          "never mind you",
          "go away",
          "nonsense"
        ],
        "correct": 0,
        "why": "Please is polite."
      },
      {
        "q": "Before writing, a learner should first:",
        "choices": [
          "understand the task",
          "close the book",
          "ignore the question",
          "write random words"
        ],
        "correct": 0,
        "why": "Understanding the task helps produce a correct answer."
      }
    ]
  },
  {
    "id": "p5-services-banking",
    "themeId": "p5-english-set-one",
    "themeName": "Primary Five English Language",
    "title": "Services: Banking",
    "estMinutes": 28,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P5 beta content: verify against official NCDC Primary Five English before public-final release. Learners use banking language for saving, depositing, withdrawing and reading account information.",
      "learningObjectives": [
        "Use vocabulary for services: banking.",
        "Use neither...nor, as soon as, past simple, future and present simple.",
        "Read and write short functional texts."
      ],
      "whatYouNeedToKnow": [
        "Important vocabulary includes bank, teller, deposit, withdraw, account, balance, cheque and ATM.",
        "Important structures include neither...nor, as soon as, past simple, future and present simple.",
        "A clear answer uses full sentences and exact vocabulary."
      ],
      "worked": {
        "problem": "Write one clear sentence about services: banking.",
        "steps": [
          "Choose the key vocabulary.",
          "Use the correct structure.",
          "Write a complete sentence."
        ],
        "answer": "This is a clear sentence about services: banking."
      },
      "recap": [
        "Use exact vocabulary.",
        "Use the target structure correctly.",
        "Write complete sentences."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p5-services-banking-vocabulary",
        "title": "1. Vocabulary and meaning",
        "modules": [
          {
            "moduleId": "p5-services-banking-words",
            "title": "Key Words",
            "bigIdea": "This module teaches the key words for services: banking.",
            "learnIt": [
              "Learn and pronounce the important words: bank, teller, deposit, withdraw, account, balance, cheque and ATM.",
              "Use each word in a short sentence.",
              "Check spelling carefully."
            ],
            "workedExample": {
              "question": "Use one key word from Services: Banking in a sentence.",
              "steps": [
                "Choose a relevant word.",
                "Write a complete sentence."
              ],
              "answer": "The sentence should use a services: banking word correctly."
            },
            "tryThis": {
              "question": "Which word belongs to this topic?",
              "choices": [
                "bank",
                "mountain",
                "triangle",
                "oxygen"
              ],
              "correct": 0,
              "explanation": "bank belongs to Services: Banking."
            }
          }
        ]
      },
      {
        "subtopicId": "p5-services-banking-writing",
        "title": "2. Functional writing",
        "modules": [
          {
            "moduleId": "p5-services-banking-structures",
            "title": "Structures and Writing",
            "bigIdea": "This module helps learners write correctly about services: banking.",
            "learnIt": [
              "Practise neither...nor, as soon as, past simple, future and present simple.",
              "Write short, clear sentences.",
              "For written tasks, include the important details and correct punctuation."
            ],
            "workedExample": {
              "question": "Write a short message related to Services: Banking.",
              "steps": [
                "Identify the purpose.",
                "Include the key detail.",
                "Use correct punctuation."
              ],
              "answer": "The answer should be clear, polite and complete."
            },
            "tryThis": {
              "question": "A good written answer should be:",
              "choices": [
                "clear and complete",
                "hidden",
                "unfinished",
                "only one random word"
              ],
              "correct": 0,
              "explanation": "A good answer is clear and complete."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Which word belongs to Services: Banking?",
        "choices": [
          "bank",
          "photosynthesis",
          "isosceles",
          "evaporation only"
        ],
        "correct": 0,
        "why": "bank is part of Services: Banking vocabulary."
      },
      {
        "q": "A good sentence should be:",
        "choices": [
          "complete",
          "confusing",
          "half-written",
          "without meaning"
        ],
        "correct": 0,
        "why": "A good sentence has complete meaning."
      },
      {
        "q": "Which is important in functional writing?",
        "choices": [
          "clear purpose",
          "random words",
          "no punctuation",
          "hidden message"
        ],
        "correct": 0,
        "why": "Functional writing should have a clear purpose."
      },
      {
        "q": "Which skill helps in this topic?",
        "choices": [
          "spelling words correctly",
          "tearing books",
          "ignoring instructions",
          "guessing only"
        ],
        "correct": 0,
        "why": "Correct spelling supports clear writing."
      },
      {
        "q": "Choose the complete sentence.",
        "choices": [
          "The learner wrote a clear message.",
          "Learner wrote.",
          "Because message.",
          "Clear the."
        ],
        "correct": 0,
        "why": "It has complete meaning."
      },
      {
        "q": "Why should learners read instructions carefully?",
        "choices": [
          "To answer correctly",
          "To waste time",
          "To avoid learning",
          "To hide answers"
        ],
        "correct": 0,
        "why": "Instructions guide the answer."
      },
      {
        "q": "Which word shows politeness?",
        "choices": [
          "please",
          "never mind you",
          "go away",
          "nonsense"
        ],
        "correct": 0,
        "why": "Please is polite."
      },
      {
        "q": "Before writing, a learner should first:",
        "choices": [
          "understand the task",
          "close the book",
          "ignore the question",
          "write random words"
        ],
        "correct": 0,
        "why": "Understanding the task helps produce a correct answer."
      }
    ]
  }
];

export function getP5EnglishTopic(id: string): Topic | undefined {
  return P5_ENGLISH_TOPICS.find((topic) => topic.id === id);
}
