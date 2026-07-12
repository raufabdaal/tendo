import type { Topic } from "@/lib/topics";

// P4 English live beta content layer.
// Source map: content/curriculum/p4-english.json
// Rule: NCDC first, build second. This file follows the official NCDC Primary Four English Syllabus, 2010.
// Status: live beta until checked by a human reviewer for language level, tone and source fidelity.

export const P4_ENGLISH_TOPICS: Topic[] = [
  {
    "id": "p4-describing-people-objects",
    "themeId": "p4-english-transition",
    "themeName": "Primary Four English Transition Syllabus",
    "title": "Describing People and Objects",
    "estMinutes": 36,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P4 English beta: built from the official NCDC Primary Four English Syllabus, 2010; human language review still required before premium-final release. Describing People and Objects helps a P4 learner use English clearly in daily life and classroom work.",
      "learningObjectives": [
        "Use describing words for people and objects.",
        "Describe self and other people using the present simple tense.",
        "Compare people and objects using comparative and superlative forms.",
        "Write simple descriptions in full sentences."
      ],
      "whatYouNeedToKnow": [
        "A describing word is an adjective, for example tall, short, smooth, rough, kind or smart.",
        "Use am/is/are to describe people and objects in the present.",
        "Use -er or more to compare two things: taller, heavier, more polite.",
        "Use -est or most to compare three or more things: tallest, heaviest, most polite."
      ],
      "worked": {
        "problem": "Describe a girl called Amina using two adjectives.",
        "steps": [
          "Choose suitable adjectives: tall and polite.",
          "Use a complete sentence with is.",
          "Start the name with a capital letter."
        ],
        "answer": "Amina is tall and polite."
      },
      "commonMistakes": [
        "Writing adjectives without a noun or sentence.",
        "Using is with plural nouns instead of are.",
        "Forgetting capital letters for names.",
        "Comparing with more and -er at the same time, such as more taller."
      ],
      "recap": [
        "Use adjectives to describe.",
        "Use am, is and are correctly.",
        "Use full sentences when writing descriptions."
      ],
      "writingTasks": [
        {
          "title": "Describe a person",
          "prompt": "Write four sentences describing a friend or family member. Include appearance and character.",
          "planningSteps": [
            "Name the person.",
            "Choose two appearance words.",
            "Choose two character words.",
            "Write full sentences using is or has."
          ],
          "checklist": [
            "I used capital letters for names.",
            "I used describing words.",
            "My sentences are complete.",
            "I checked spelling."
          ],
          "modelOpening": "My sister Achen is tall and smart."
        }
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-describing-people",
        "title": "1. Describing people",
        "modules": [
          {
            "moduleId": "p4-describing-people-module",
            "title": "Appearance and character",
            "bigIdea": "Good descriptions tell what a person looks like and how they behave.",
            "learnIt": [
              "Words like tall, short, dark-skinned, light-skinned and smart describe appearance.",
              "Words like kind, polite, honest and careless describe character or behaviour.",
              "A complete description names the person and uses a verb: My brother is tall and kind."
            ],
            "workedExample": {
              "question": "Write a sentence describing your teacher as smart and kind.",
              "steps": [
                "Start with the person: My teacher.",
                "Use is because teacher is one person.",
                "Add the adjectives smart and kind."
              ],
              "answer": "My teacher is smart and kind."
            },
            "tryThis": {
              "question": "Which sentence describes a person correctly?",
              "choices": [
                "John is polite.",
                "John are polite.",
                "Polite John.",
                "John polite is."
              ],
              "correct": 0,
              "explanation": "John is one person, so use is."
            },
            "imageUrl": "/images/english/p4-describing-adjectives.svg",
            "imageCaption": "Describing words and complete sentences."
          }
        ]
      },
      {
        "subtopicId": "p4-describing-objects",
        "title": "2. Describing objects",
        "modules": [
          {
            "moduleId": "p4-describing-objects-module",
            "title": "Shape, size, colour and texture",
            "bigIdea": "Objects can be described by colour, size, shape, texture and weight.",
            "learnIt": [
              "Use words like round, flat, rectangular, smooth, rough, heavy and light.",
              "Use this/that for one object and these/those for many objects.",
              "Use comparatives when comparing two objects: The red book is bigger than the blue book."
            ],
            "workedExample": {
              "question": "Compare two pencils: red pencil is long, blue pencil is short.",
              "steps": [
                "Choose the comparative form of long: longer.",
                "Name both objects.",
                "Use than to compare."
              ],
              "answer": "The red pencil is longer than the blue pencil."
            },
            "tryThis": {
              "question": "Which word describes texture?",
              "choices": [
                "green",
                "rough",
                "round",
                "heavy"
              ],
              "correct": 1,
              "explanation": "Rough tells how a surface feels."
            },
            "imageUrl": "/images/english/p4-describing-adjectives.svg",
            "imageCaption": "Describing words and complete sentences."
          }
        ]
      },
      {
        "subtopicId": "p4-describing-people-objects-practice",
        "title": "3. Writing and speaking practice",
        "modules": [
          {
            "moduleId": "p4-describing-people-objects-writing-speaking-module",
            "title": "Writing and speaking practice",
            "bigIdea": "English becomes useful when learners practise real communication, not only definitions.",
            "imageUrl": "/images/english/p4-describing-adjectives.svg",
            "imageCaption": "Describing words and complete sentences.",
            "learnIt": [
              "Use the words from Describing People and Objects in complete P4 sentences.",
              "Say the sentence aloud first, then write it clearly.",
              "Check capital letters, spacing and full stops.",
              "If it is a dialogue or message, make it polite and easy to understand."
            ],
            "workedExample": {
              "question": "Write three clear sentences or a short dialogue about describing people and objects.",
              "steps": [
                "Choose the audience and purpose.",
                "Use the topic vocabulary.",
                "Write complete sentences and check punctuation."
              ],
              "answer": "A good answer uses describing people and objects vocabulary in complete, polite sentences."
            },
            "tryThis": {
              "question": "A strong English answer should be:",
              "choices": [
                "random words",
                "without punctuation",
                "clear, complete and polite",
                "copied without meaning"
              ],
              "correct": 2,
              "explanation": "Clear complete writing shows understanding."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Which word describes appearance?",
        "choices": [
          "quickly",
          "yesterday",
          "under",
          "tall"
        ],
        "correct": 3,
        "why": "Tall describes how someone looks."
      },
      {
        "q": "Choose the correct sentence.",
        "choices": [
          "The stones are rough.",
          "The stones is rough.",
          "Rough the stones.",
          "The stone are rough."
        ],
        "correct": 0,
        "why": "Stones is plural, so use are."
      },
      {
        "q": "Which is a superlative?",
        "choices": [
          "taller",
          "tallest",
          "tall",
          "more tall"
        ],
        "correct": 1,
        "why": "Tallest compares three or more."
      },
      {
        "q": "Which word describes shape?",
        "choices": [
          "kind",
          "polite",
          "round",
          "late"
        ],
        "correct": 2,
        "why": "Round is a shape word."
      },
      {
        "q": "Complete: My bag ___ heavy.",
        "choices": [
          "are",
          "am",
          "were",
          "is"
        ],
        "correct": 3,
        "why": "Bag is one object, so use is."
      },
      {
        "q": "A good description should be:",
        "choices": [
          "clear and complete",
          "only one adjective",
          "without a verb",
          "all capital letters"
        ],
        "correct": 0,
        "why": "A clear complete sentence communicates well."
      }
    ]
  },
  {
    "id": "p4-giving-directions",
    "themeId": "p4-english-transition",
    "themeName": "Primary Four English Transition Syllabus",
    "title": "Giving Directions",
    "estMinutes": 36,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P4 English beta: built from the official NCDC Primary Four English Syllabus, 2010; human language review still required before premium-final release. Giving Directions helps a P4 learner use English clearly in daily life and classroom work.",
      "learningObjectives": [
        "Use vocabulary for places and directions.",
        "Give clear directions to familiar places.",
        "Use polite direction language.",
        "Read simple routes and maps."
      ],
      "whatYouNeedToKnow": [
        "Direction words include left, right, near, far, opposite, behind, in front of and next to.",
        "Imperatives give instructions: Turn left. Walk straight. Cross the road carefully.",
        "Polite directions may begin with Please or Excuse me.",
        "A good direction mentions landmarks and order of movement."
      ],
      "worked": {
        "problem": "Give directions from the gate to a classroom near the office.",
        "steps": [
          "Start at the gate.",
          "Mention the landmark: office.",
          "Use direction words in order."
        ],
        "answer": "Walk straight from the gate. Turn right at the office. The classroom is next to the office."
      },
      "commonMistakes": [
        "Giving directions without a starting point.",
        "Using left and right carelessly.",
        "Forgetting polite words.",
        "Writing one long unclear sentence."
      ],
      "recap": [
        "Start where the person is.",
        "Use clear direction words.",
        "Give steps in order."
      ],
      "writingTasks": [
        {
          "title": "Write directions",
          "prompt": "Write directions from your classroom to the head teacher's office or another familiar place.",
          "planningSteps": [
            "Choose the starting point.",
            "Choose the destination.",
            "List landmarks in order.",
            "Write 3 to 5 clear steps."
          ],
          "checklist": [
            "I used direction words.",
            "My steps are in order.",
            "I used polite language.",
            "I used full stops."
          ],
          "modelOpening": "From our classroom, walk straight to the veranda."
        }
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-direction-vocabulary",
        "title": "1. Direction vocabulary",
        "modules": [
          {
            "moduleId": "p4-direction-words",
            "title": "Words for position and movement",
            "bigIdea": "Direction words help someone find a place without confusion.",
            "learnIt": [
              "Near and far tell distance.",
              "Opposite means facing across from something.",
              "Behind and in front of tell position.",
              "Turn left and turn right tell movement."
            ],
            "workedExample": {
              "question": "Use opposite in a sentence about a shop and a clinic.",
              "steps": [
                "Choose two places: shop and clinic.",
                "Use is opposite.",
                "Write a full sentence."
              ],
              "answer": "The shop is opposite the clinic."
            },
            "tryThis": {
              "question": "Which word shows position?",
              "choices": [
                "eating",
                "behind",
                "beautiful",
                "slowly"
              ],
              "correct": 1,
              "explanation": "Behind tells where something is."
            },
            "imageUrl": "/images/english/p4-giving-directions.svg",
            "imageCaption": "Direction words and route writing."
          }
        ]
      },
      {
        "subtopicId": "p4-polite-directions",
        "title": "2. Polite directions and routes",
        "modules": [
          {
            "moduleId": "p4-polite-route",
            "title": "Giving a route politely",
            "bigIdea": "Polite directions are clear, kind and safe.",
            "learnIt": [
              "Use Excuse me when asking for directions.",
              "Use Please when giving a polite instruction.",
              "A route should be in steps: first, next, then, finally."
            ],
            "workedExample": {
              "question": "Ask politely for the way to the library.",
              "steps": [
                "Begin with Excuse me.",
                "Ask where or how to reach the place.",
                "End with a question mark."
              ],
              "answer": "Excuse me, how can I get to the library?"
            },
            "tryThis": {
              "question": "Which is polite?",
              "choices": [
                "Move!",
                "You there, go!",
                "Please turn left at the signpost.",
                "Left now."
              ],
              "correct": 2,
              "explanation": "Please makes the direction polite."
            },
            "imageUrl": "/images/english/p4-giving-directions.svg",
            "imageCaption": "Direction words and route writing."
          }
        ]
      },
      {
        "subtopicId": "p4-giving-directions-practice",
        "title": "3. Writing and speaking practice",
        "modules": [
          {
            "moduleId": "p4-giving-directions-writing-speaking-module",
            "title": "Writing and speaking practice",
            "bigIdea": "English becomes useful when learners practise real communication, not only definitions.",
            "imageUrl": "/images/english/p4-giving-directions.svg",
            "imageCaption": "Direction words and route writing.",
            "learnIt": [
              "Use the words from Giving Directions in complete P4 sentences.",
              "Say the sentence aloud first, then write it clearly.",
              "Check capital letters, spacing and full stops.",
              "If it is a dialogue or message, make it polite and easy to understand."
            ],
            "workedExample": {
              "question": "Write three clear sentences or a short dialogue about giving directions.",
              "steps": [
                "Choose the audience and purpose.",
                "Use the topic vocabulary.",
                "Write complete sentences and check punctuation."
              ],
              "answer": "A good answer uses giving directions vocabulary in complete, polite sentences."
            },
            "tryThis": {
              "question": "A strong English answer should be:",
              "choices": [
                "random words",
                "without punctuation",
                "copied without meaning",
                "clear, complete and polite"
              ],
              "correct": 3,
              "explanation": "Clear complete writing shows understanding."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Which word is a direction word?",
        "choices": [
          "left",
          "happy",
          "market",
          "blue"
        ],
        "correct": 0,
        "why": "Left gives direction."
      },
      {
        "q": "Complete: The clinic is ___ the school.",
        "choices": [
          "polite",
          "opposite",
          "round",
          "heavy"
        ],
        "correct": 1,
        "why": "Opposite tells position."
      },
      {
        "q": "A good route should start with:",
        "choices": [
          "the last step",
          "a joke",
          "a starting point",
          "only the destination"
        ],
        "correct": 2,
        "why": "The listener needs to know where to begin."
      },
      {
        "q": "Which sentence is an instruction?",
        "choices": [
          "The tree is tall.",
          "I like mangoes.",
          "Yesterday was hot.",
          "Turn right at the tree."
        ],
        "correct": 3,
        "why": "Turn right gives an instruction."
      },
      {
        "q": "Which word makes a direction polite?",
        "choices": [
          "Please",
          "Never",
          "Rough",
          "Tall"
        ],
        "correct": 0,
        "why": "Please is polite."
      },
      {
        "q": "What punctuation ends a question asking for directions?",
        "choices": [
          ".",
          "?",
          ",",
          "!"
        ],
        "correct": 1,
        "why": "A question mark ends a question."
      }
    ]
  },
  {
    "id": "p4-likes-feelings",
    "themeId": "p4-english-transition",
    "themeName": "Primary Four English Transition Syllabus",
    "title": "What I Like and How I Feel",
    "estMinutes": 36,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P4 English beta: built from the official NCDC Primary Four English Syllabus, 2010; human language review still required before premium-final release. What I Like and How I Feel helps a P4 learner use English clearly in daily life and classroom work.",
      "learningObjectives": [
        "Use vocabulary for likes and feelings.",
        "Express preferences using like, prefer, enjoy and favourite.",
        "Explain feelings using because.",
        "Read and write simple sentences about feelings."
      ],
      "whatYouNeedToKnow": [
        "Likes tell what someone enjoys.",
        "Feelings tell someone's emotional or body state, such as happy, sad, tired, cold or worried.",
        "Use because to give a reason.",
        "Use I like and I do not like for preferences."
      ],
      "worked": {
        "problem": "Write a sentence saying you like football and give a reason.",
        "steps": [
          "Start with I like.",
          "Name the activity: football.",
          "Use because to give a reason."
        ],
        "answer": "I like football because it keeps me fit."
      },
      "commonMistakes": [
        "Writing because without a reason.",
        "Using likes after I, such as I likes.",
        "Confusing feelings with activities.",
        "Forgetting full stops."
      ],
      "recap": [
        "Say what you like.",
        "Name the feeling.",
        "Use because to explain."
      ],
      "writingTasks": [
        {
          "title": "Write about likes and feelings",
          "prompt": "Write five sentences about what you like and how you feel at school.",
          "planningSteps": [
            "List two things you like.",
            "List two feelings.",
            "Give a reason for each feeling.",
            "Use because correctly."
          ],
          "checklist": [
            "I used like/prefer/enjoy.",
            "I named feelings.",
            "I used because with reasons.",
            "I used full stops."
          ],
          "modelOpening": "I like English because I enjoy reading stories."
        }
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-likes-preferences",
        "title": "1. What I like",
        "modules": [
          {
            "moduleId": "p4-likes-prefer",
            "title": "Likes and preferences",
            "bigIdea": "Preferences help learners speak about choices clearly.",
            "learnIt": [
              "Use I like for something you enjoy.",
              "Use I prefer A to B when choosing between two things.",
              "Use favourite for what you like most."
            ],
            "workedExample": {
              "question": "Write a sentence with prefer about rice and matooke.",
              "steps": [
                "Choose what is liked more: rice.",
                "Use prefer with to.",
                "Write a full sentence."
              ],
              "answer": "I prefer rice to matooke."
            },
            "tryThis": {
              "question": "Complete: I ___ reading story books.",
              "choices": [
                "enjoys",
                "enjoying",
                "enjoy",
                "enjoyed are"
              ],
              "correct": 2,
              "explanation": "Use enjoy after I in the present simple."
            },
            "imageUrl": "/images/english/p4-feelings-preferences.svg",
            "imageCaption": "Likes, preferences and feelings."
          }
        ]
      },
      {
        "subtopicId": "p4-feelings-reasons",
        "title": "2. How I feel",
        "modules": [
          {
            "moduleId": "p4-feelings-because",
            "title": "Feelings and reasons",
            "bigIdea": "A good feelings sentence names the feeling and explains why.",
            "learnIt": [
              "Use I am for feelings: I am happy. I am tired.",
              "Use He is or She is for one person.",
              "Use because to connect a feeling to its reason."
            ],
            "workedExample": {
              "question": "Complete: Maria is sad because ___.",
              "steps": [
                "Choose a reason that can make someone sad.",
                "Write the reason after because."
              ],
              "answer": "Maria is sad because she lost her pencil."
            },
            "tryThis": {
              "question": "Which is a feeling word?",
              "choices": [
                "football",
                "market",
                "yellow",
                "worried"
              ],
              "correct": 3,
              "explanation": "Worried is a feeling."
            },
            "imageUrl": "/images/english/p4-feelings-preferences.svg",
            "imageCaption": "Likes, preferences and feelings."
          }
        ]
      },
      {
        "subtopicId": "p4-likes-feelings-practice",
        "title": "3. Writing and speaking practice",
        "modules": [
          {
            "moduleId": "p4-likes-feelings-writing-speaking-module",
            "title": "Writing and speaking practice",
            "bigIdea": "English becomes useful when learners practise real communication, not only definitions.",
            "imageUrl": "/images/english/p4-feelings-preferences.svg",
            "imageCaption": "Likes, preferences and feelings.",
            "learnIt": [
              "Use the words from What I Like and How I Feel in complete P4 sentences.",
              "Say the sentence aloud first, then write it clearly.",
              "Check capital letters, spacing and full stops.",
              "If it is a dialogue or message, make it polite and easy to understand."
            ],
            "workedExample": {
              "question": "Write three clear sentences or a short dialogue about what i like and how i feel.",
              "steps": [
                "Choose the audience and purpose.",
                "Use the topic vocabulary.",
                "Write complete sentences and check punctuation."
              ],
              "answer": "A good answer uses what i like and how i feel vocabulary in complete, polite sentences."
            },
            "tryThis": {
              "question": "A strong English answer should be:",
              "choices": [
                "clear, complete and polite",
                "random words",
                "without punctuation",
                "copied without meaning"
              ],
              "correct": 0,
              "explanation": "Clear complete writing shows understanding."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Complete: I ___ swimming.",
        "choices": [
          "likes",
          "like",
          "liking",
          "liked is"
        ],
        "correct": 1,
        "why": "Use like after I."
      },
      {
        "q": "Which is a feeling?",
        "choices": [
          "matooke",
          "classroom",
          "happy",
          "round"
        ],
        "correct": 2,
        "why": "Happy is a feeling."
      },
      {
        "q": "Why do we use because?",
        "choices": [
          "to name a person",
          "to count objects",
          "to make a plural",
          "to give a reason"
        ],
        "correct": 3,
        "why": "Because introduces a reason."
      },
      {
        "q": "Complete: She ___ tired.",
        "choices": [
          "is",
          "are",
          "am",
          "were"
        ],
        "correct": 0,
        "why": "She takes is."
      },
      {
        "q": "Which sentence is correct?",
        "choices": [
          "I prefers music to dance.",
          "I prefer music to dance.",
          "I prefer music than dance.",
          "Prefer I music."
        ],
        "correct": 1,
        "why": "Prefer goes with I and can use to."
      },
      {
        "q": "Favourite means:",
        "choices": [
          "hated most",
          "very heavy",
          "liked most",
          "near"
        ],
        "correct": 2,
        "why": "Favourite is what someone likes most."
      }
    ]
  },
  {
    "id": "p4-behaviour",
    "themeId": "p4-english-transition",
    "themeName": "Primary Four English Transition Syllabus",
    "title": "Behaviour",
    "estMinutes": 36,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P4 English beta: built from the official NCDC Primary Four English Syllabus, 2010; human language review still required before premium-final release. Behaviour helps a P4 learner use English clearly in daily life and classroom work.",
      "learningObjectives": [
        "Use vocabulary for good and bad behaviour.",
        "Describe conduct using full sentences.",
        "Give advice using should, must and must not.",
        "Read and write short texts about behaviour."
      ],
      "whatYouNeedToKnow": [
        "Behaviour means how a person acts.",
        "Good behaviour includes honesty, respect, kindness and obedience.",
        "Bad behaviour includes stealing, fighting, insulting and telling lies.",
        "Use should for advice and must for strong rules."
      ],
      "worked": {
        "problem": "Give advice to a learner who throws rubbish in class.",
        "steps": [
          "Name the bad behaviour: throwing rubbish.",
          "Use should or must not.",
          "Write a positive action."
        ],
        "answer": "You should put rubbish in the dustbin."
      },
      "commonMistakes": [
        "Giving advice without saying the correct action.",
        "Using must not for good behaviour.",
        "Confusing behaviour with appearance.",
        "Writing rude advice instead of polite advice."
      ],
      "recap": [
        "Behaviour is action.",
        "Use should for advice.",
        "Explain why good behaviour helps people live together."
      ],
      "writingTasks": [
        {
          "title": "Behaviour advice",
          "prompt": "Write a short paragraph advising P4 learners on good classroom behaviour.",
          "planningSteps": [
            "List three good behaviours.",
            "Use should or must.",
            "Give one reason.",
            "End with a clear sentence."
          ],
          "checklist": [
            "I used advice words.",
            "I named good behaviour.",
            "I used polite tone.",
            "I checked punctuation."
          ],
          "modelOpening": "Learners should listen when the teacher is speaking."
        }
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-good-bad-behaviour",
        "title": "1. Good and bad behaviour",
        "modules": [
          {
            "moduleId": "p4-behaviour-words",
            "title": "Words for conduct",
            "bigIdea": "Behaviour words help us talk about actions and values.",
            "learnIt": [
              "Respect means treating people well.",
              "Honesty means telling the truth and not stealing.",
              "Carelessness can lead to accidents or broken property."
            ],
            "workedExample": {
              "question": "Write a sentence about honesty.",
              "steps": [
                "Choose an honest action.",
                "Use should.",
                "Write clearly."
              ],
              "answer": "We should tell the truth."
            },
            "tryThis": {
              "question": "Which is good behaviour?",
              "choices": [
                "stealing a pen",
                "fighting",
                "telling lies",
                "helping a friend"
              ],
              "correct": 3,
              "explanation": "Helping is good behaviour."
            },
            "imageUrl": "/images/english/p4-behaviour-advice.svg",
            "imageCaption": "Behaviour and advice language."
          }
        ]
      },
      {
        "subtopicId": "p4-advice-behaviour",
        "title": "2. Advice and behaviour sentences",
        "modules": [
          {
            "moduleId": "p4-should-must",
            "title": "Should, must and must not",
            "bigIdea": "Advice language helps learners guide others politely.",
            "learnIt": [
              "Use should for advice: You should greet elders.",
              "Use must for important rules: You must obey school rules.",
              "Use must not for forbidden actions: You must not fight."
            ],
            "workedExample": {
              "question": "Advise learners not to make noise in the library.",
              "steps": [
                "Use must not because it is a rule.",
                "Name the action: make noise.",
                "Name the place: library."
              ],
              "answer": "Learners must not make noise in the library."
            },
            "tryThis": {
              "question": "Complete: You ___ respect elders.",
              "choices": [
                "should",
                "are",
                "were",
                "likes"
              ],
              "correct": 0,
              "explanation": "Should gives advice."
            },
            "imageUrl": "/images/english/p4-behaviour-advice.svg",
            "imageCaption": "Behaviour and advice language."
          }
        ]
      },
      {
        "subtopicId": "p4-behaviour-practice",
        "title": "3. Writing and speaking practice",
        "modules": [
          {
            "moduleId": "p4-behaviour-writing-speaking-module",
            "title": "Writing and speaking practice",
            "bigIdea": "English becomes useful when learners practise real communication, not only definitions.",
            "imageUrl": "/images/english/p4-behaviour-advice.svg",
            "imageCaption": "Behaviour and advice language.",
            "learnIt": [
              "Use the words from Behaviour in complete P4 sentences.",
              "Say the sentence aloud first, then write it clearly.",
              "Check capital letters, spacing and full stops.",
              "If it is a dialogue or message, make it polite and easy to understand."
            ],
            "workedExample": {
              "question": "Write three clear sentences or a short dialogue about behaviour.",
              "steps": [
                "Choose the audience and purpose.",
                "Use the topic vocabulary.",
                "Write complete sentences and check punctuation."
              ],
              "answer": "A good answer uses behaviour vocabulary in complete, polite sentences."
            },
            "tryThis": {
              "question": "A strong English answer should be:",
              "choices": [
                "random words",
                "clear, complete and polite",
                "without punctuation",
                "copied without meaning"
              ],
              "correct": 1,
              "explanation": "Clear complete writing shows understanding."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Behaviour means:",
        "choices": [
          "how tall a person is",
          "a colour",
          "how a person acts",
          "a direction"
        ],
        "correct": 2,
        "why": "Behaviour is action or conduct."
      },
      {
        "q": "Which is bad behaviour?",
        "choices": [
          "sharing",
          "helping",
          "greeting",
          "fighting"
        ],
        "correct": 3,
        "why": "Fighting is bad behaviour."
      },
      {
        "q": "Complete: We ___ keep the classroom clean.",
        "choices": [
          "should",
          "is",
          "am",
          "likes"
        ],
        "correct": 0,
        "why": "Should gives advice."
      },
      {
        "q": "Must not means:",
        "choices": [
          "allowed always",
          "forbidden",
          "past time",
          "a place"
        ],
        "correct": 1,
        "why": "Must not tells us not to do something."
      },
      {
        "q": "Honesty means:",
        "choices": [
          "being tall",
          "being near",
          "telling the truth",
          "running fast"
        ],
        "correct": 2,
        "why": "Honesty is truthfulness."
      },
      {
        "q": "Which sentence is polite advice?",
        "choices": [
          "You bad child!",
          "Go away!",
          "Wrong you!",
          "You should say sorry."
        ],
        "correct": 3,
        "why": "Should gives polite advice."
      }
    ]
  },
  {
    "id": "p4-buying-selling",
    "themeId": "p4-english-transition",
    "themeName": "Primary Four English Transition Syllabus",
    "title": "Buying and Selling",
    "estMinutes": 36,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P4 English beta: built from the official NCDC Primary Four English Syllabus, 2010; human language review still required before premium-final release. Buying and Selling helps a P4 learner use English clearly in daily life and classroom work.",
      "learningObjectives": [
        "Use market and shop vocabulary.",
        "Hold simple buying and selling conversations.",
        "Use polite requests when buying.",
        "Read and write short texts involving prices and items."
      ],
      "whatYouNeedToKnow": [
        "Buying means getting something by paying money.",
        "Selling means giving something to a buyer for money.",
        "A buyer buys; a seller sells.",
        "Use How much is...? to ask for a price.",
        "Use please and thank you in polite conversations."
      ],
      "worked": {
        "problem": "Write a polite request for a bar of soap in a shop.",
        "steps": [
          "Start with Please or May I.",
          "Name the item.",
          "End politely."
        ],
        "answer": "Please, may I have a bar of soap?"
      },
      "commonMistakes": [
        "Forgetting polite words.",
        "Confusing buyer and seller.",
        "Writing prices without currency words.",
        "Using much for countable plural items when many is needed."
      ],
      "recap": [
        "Buyer buys; seller sells.",
        "Ask prices politely.",
        "Use shop vocabulary in complete sentences."
      ],
      "writingTasks": [
        {
          "title": "Market dialogue",
          "prompt": "Write a short dialogue between a buyer and a seller at a market stall.",
          "planningSteps": [
            "Choose two items.",
            "Ask the price.",
            "Let the seller answer.",
            "End politely."
          ],
          "checklist": [
            "I used buyer/seller language.",
            "I included prices.",
            "I used please or thank you.",
            "Each speaker is clear."
          ],
          "modelOpening": "Buyer: Good morning. How much are these tomatoes?"
        }
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-market-vocabulary",
        "title": "1. Market vocabulary",
        "modules": [
          {
            "moduleId": "p4-buy-sell-words",
            "title": "People, items and prices",
            "bigIdea": "Buying and selling language is useful in shops, markets and classroom role-play.",
            "learnIt": [
              "A customer is a person who buys goods or services.",
              "A shopkeeper sells goods in a shop.",
              "Prices tell how much money an item costs."
            ],
            "workedExample": {
              "question": "Use customer in a sentence.",
              "steps": [
                "Choose a market action.",
                "Show that the customer buys something."
              ],
              "answer": "The customer bought two tomatoes."
            },
            "tryThis": {
              "question": "Who sells goods in a shop?",
              "choices": [
                "shopkeeper",
                "passenger",
                "patient",
                "referee"
              ],
              "correct": 0,
              "explanation": "A shopkeeper sells goods."
            },
            "imageUrl": "/images/english/p4-buying-selling-dialogue.svg",
            "imageCaption": "Buying and selling dialogue language."
          }
        ]
      },
      {
        "subtopicId": "p4-buying-conversations",
        "title": "2. Buying and selling conversations",
        "modules": [
          {
            "moduleId": "p4-shop-dialogue",
            "title": "Polite shop dialogue",
            "bigIdea": "A good shop conversation is polite and clear.",
            "learnIt": [
              "A buyer may ask: How much is this book?",
              "A seller may answer: It is one thousand shillings.",
              "Use thank you after receiving help or goods."
            ],
            "workedExample": {
              "question": "Complete a buyer's question for sugar.",
              "steps": [
                "Use How much is...",
                "Name the item.",
                "Add a question mark."
              ],
              "answer": "How much is this packet of sugar?"
            },
            "tryThis": {
              "question": "Which is polite?",
              "choices": [
                "Give me now!",
                "Please give me a pencil.",
                "You seller!",
                "Pencil here."
              ],
              "correct": 1,
              "explanation": "Please makes the request polite."
            },
            "imageUrl": "/images/english/p4-buying-selling-dialogue.svg",
            "imageCaption": "Buying and selling dialogue language."
          }
        ]
      },
      {
        "subtopicId": "p4-buying-selling-practice",
        "title": "3. Writing and speaking practice",
        "modules": [
          {
            "moduleId": "p4-buying-selling-writing-speaking-module",
            "title": "Writing and speaking practice",
            "bigIdea": "English becomes useful when learners practise real communication, not only definitions.",
            "imageUrl": "/images/english/p4-buying-selling-dialogue.svg",
            "imageCaption": "Buying and selling dialogue language.",
            "learnIt": [
              "Use the words from Buying and Selling in complete P4 sentences.",
              "Say the sentence aloud first, then write it clearly.",
              "Check capital letters, spacing and full stops.",
              "If it is a dialogue or message, make it polite and easy to understand."
            ],
            "workedExample": {
              "question": "Write three clear sentences or a short dialogue about buying and selling.",
              "steps": [
                "Choose the audience and purpose.",
                "Use the topic vocabulary.",
                "Write complete sentences and check punctuation."
              ],
              "answer": "A good answer uses buying and selling vocabulary in complete, polite sentences."
            },
            "tryThis": {
              "question": "A strong English answer should be:",
              "choices": [
                "random words",
                "without punctuation",
                "clear, complete and polite",
                "copied without meaning"
              ],
              "correct": 2,
              "explanation": "Clear complete writing shows understanding."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "A person who buys is a:",
        "choices": [
          "seller",
          "driver",
          "teacher",
          "buyer"
        ],
        "correct": 3,
        "why": "A buyer buys."
      },
      {
        "q": "A person who sells is a:",
        "choices": [
          "seller",
          "buyer",
          "patient",
          "captain"
        ],
        "correct": 0,
        "why": "A seller sells."
      },
      {
        "q": "Which question asks for price?",
        "choices": [
          "Where is the book?",
          "How much is this book?",
          "Who is the book?",
          "Why book?"
        ],
        "correct": 1,
        "why": "How much asks price."
      },
      {
        "q": "Which word is polite?",
        "choices": [
          "grab",
          "shout",
          "please",
          "rough"
        ],
        "correct": 2,
        "why": "Please is polite."
      },
      {
        "q": "A customer is:",
        "choices": [
          "a vehicle part",
          "a direction",
          "a shape",
          "a buyer of goods or services"
        ],
        "correct": 3,
        "why": "Customers buy goods or services."
      },
      {
        "q": "Complete: The shopkeeper ___ sugar.",
        "choices": [
          "sells",
          "buy",
          "buying",
          "sell are"
        ],
        "correct": 0,
        "why": "Shopkeeper is one person, so use sells."
      }
    ]
  },
  {
    "id": "p4-time",
    "themeId": "p4-english-transition",
    "themeName": "Primary Four English Transition Syllabus",
    "title": "Time",
    "estMinutes": 36,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P4 English beta: built from the official NCDC Primary Four English Syllabus, 2010; human language review still required before premium-final release. Time helps a P4 learner use English clearly in daily life and classroom work.",
      "learningObjectives": [
        "Use past simple tense in sentences.",
        "Use past continuous tense in sentences.",
        "Use time expressions correctly.",
        "Read and write short texts about past events."
      ],
      "whatYouNeedToKnow": [
        "The past simple tells completed actions: I played yesterday.",
        "The past continuous tells an action that was going on: I was playing.",
        "Time expressions include yesterday, last week, in the morning and at 3 o'clock.",
        "Use was with I/he/she/it and were with we/you/they."
      ],
      "worked": {
        "problem": "Change to past continuous: She cooks lunch.",
        "steps": [
          "Use she, so choose was.",
          "Change cook to cooking.",
          "Keep the object lunch."
        ],
        "answer": "She was cooking lunch."
      },
      "commonMistakes": [
        "Using was with they.",
        "Forgetting -ing in past continuous.",
        "Using yesterday with present tense.",
        "Writing irregular past verbs wrongly without checking."
      ],
      "recap": [
        "Past simple: completed action.",
        "Past continuous: was/were + -ing.",
        "Time expressions make the time clear."
      ],
      "writingTasks": [
        {
          "title": "Past event paragraph",
          "prompt": "Write five sentences about what you did yesterday. Use at least one past continuous sentence.",
          "planningSteps": [
            "List yesterday's activities.",
            "Choose past simple verbs.",
            "Add one was/were + -ing sentence.",
            "Use time words."
          ],
          "checklist": [
            "I used past tense.",
            "I used was/were correctly.",
            "I included time expressions.",
            "I checked full stops."
          ],
          "modelOpening": "Yesterday, I helped my mother at home."
        }
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-past-simple",
        "title": "1. Past simple tense",
        "modules": [
          {
            "moduleId": "p4-past-simple-module",
            "title": "Completed past actions",
            "bigIdea": "Past simple helps us tell what already happened.",
            "learnIt": [
              "Many verbs add -ed: play → played, clean → cleaned.",
              "Some verbs change: go → went, buy → bought.",
              "Use past time words like yesterday and last night."
            ],
            "workedExample": {
              "question": "Change: I walk to school. Use yesterday.",
              "steps": [
                "Walk is a regular verb.",
                "Add -ed: walked.",
                "Add the time word."
              ],
              "answer": "I walked to school yesterday."
            },
            "tryThis": {
              "question": "Which verb is past simple?",
              "choices": [
                "playing",
                "played",
                "plays",
                "play"
              ],
              "correct": 1,
              "explanation": "Played shows past time."
            },
            "imageUrl": "/images/english/p4-time-tenses.svg",
            "imageCaption": "Past and future time expressions."
          }
        ]
      },
      {
        "subtopicId": "p4-past-continuous",
        "title": "2. Past continuous tense",
        "modules": [
          {
            "moduleId": "p4-past-continuous-module",
            "title": "Was/were + -ing",
            "bigIdea": "Past continuous describes an action that was happening at a time in the past.",
            "learnIt": [
              "Use was with I, he, she and it.",
              "Use were with we, you and they.",
              "The main verb ends in -ing."
            ],
            "workedExample": {
              "question": "Complete: They ___ reading at 4 o'clock.",
              "steps": [
                "They takes were.",
                "The verb reading already has -ing."
              ],
              "answer": "They were reading at 4 o'clock."
            },
            "tryThis": {
              "question": "Complete: I ___ sweeping the compound.",
              "choices": [
                "were",
                "am",
                "was",
                "are"
              ],
              "correct": 2,
              "explanation": "Use was with I in past continuous."
            },
            "imageUrl": "/images/english/p4-time-tenses.svg",
            "imageCaption": "Past and future time expressions."
          }
        ]
      },
      {
        "subtopicId": "p4-time-practice",
        "title": "3. Writing and speaking practice",
        "modules": [
          {
            "moduleId": "p4-time-writing-speaking-module",
            "title": "Writing and speaking practice",
            "bigIdea": "English becomes useful when learners practise real communication, not only definitions.",
            "imageUrl": "/images/english/p4-time-tenses.svg",
            "imageCaption": "Past and future time expressions.",
            "learnIt": [
              "Use the words from Time in complete P4 sentences.",
              "Say the sentence aloud first, then write it clearly.",
              "Check capital letters, spacing and full stops.",
              "If it is a dialogue or message, make it polite and easy to understand."
            ],
            "workedExample": {
              "question": "Write three clear sentences or a short dialogue about time.",
              "steps": [
                "Choose the audience and purpose.",
                "Use the topic vocabulary.",
                "Write complete sentences and check punctuation."
              ],
              "answer": "A good answer uses time vocabulary in complete, polite sentences."
            },
            "tryThis": {
              "question": "A strong English answer should be:",
              "choices": [
                "random words",
                "without punctuation",
                "copied without meaning",
                "clear, complete and polite"
              ],
              "correct": 3,
              "explanation": "Clear complete writing shows understanding."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Which is past simple?",
        "choices": [
          "She washed plates.",
          "She washes plates.",
          "She is washing plates.",
          "Wash she plates."
        ],
        "correct": 0,
        "why": "Washed shows completed past action."
      },
      {
        "q": "Complete: We ___ playing netball.",
        "choices": [
          "was",
          "were",
          "is",
          "am"
        ],
        "correct": 1,
        "why": "Use were with we."
      },
      {
        "q": "Complete: He ___ reading.",
        "choices": [
          "were",
          "are",
          "was",
          "am"
        ],
        "correct": 2,
        "why": "Use was with he."
      },
      {
        "q": "Yesterday is a:",
        "choices": [
          "future word",
          "direction word",
          "price word",
          "past time expression"
        ],
        "correct": 3,
        "why": "Yesterday shows past time."
      },
      {
        "q": "Go in past simple is:",
        "choices": [
          "went",
          "goed",
          "going",
          "goes"
        ],
        "correct": 0,
        "why": "Go changes to went."
      },
      {
        "q": "Past continuous uses:",
        "choices": [
          "will + verb",
          "was/were + -ing",
          "has + noun",
          "many + price"
        ],
        "correct": 1,
        "why": "Past continuous is formed with was/were and -ing."
      }
    ]
  },
  {
    "id": "p4-future-expression",
    "themeId": "p4-english-transition",
    "themeName": "Primary Four English Transition Syllabus",
    "title": "Expression of the Future",
    "estMinutes": 36,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P4 English beta: built from the official NCDC Primary Four English Syllabus, 2010; human language review still required before premium-final release. Expression of the Future helps a P4 learner use English clearly in daily life and classroom work.",
      "learningObjectives": [
        "Use will and going to for future actions.",
        "Talk and write about plans.",
        "Keep a simple diary or study plan.",
        "Use future time expressions correctly."
      ],
      "whatYouNeedToKnow": [
        "Future actions have not happened yet.",
        "Use will for future statements: I will read tomorrow.",
        "Use going to for plans: I am going to revise English.",
        "Future time expressions include tomorrow, next week, soon and later."
      ],
      "worked": {
        "problem": "Write a future sentence about revising Mathematics tomorrow.",
        "steps": [
          "Choose future time: tomorrow.",
          "Use will.",
          "Name the activity: revise Mathematics."
        ],
        "answer": "I will revise Mathematics tomorrow."
      },
      "commonMistakes": [
        "Using yesterday with future tense.",
        "Forgetting will before the verb.",
        "Writing I am going revise instead of I am going to revise.",
        "Making a diary without dates or times."
      ],
      "recap": [
        "Future means later.",
        "Use will + verb.",
        "Use am/is/are going to + verb for plans."
      ],
      "writingTasks": [
        {
          "title": "Write a study plan",
          "prompt": "Write a simple study plan for tomorrow after school.",
          "planningSteps": [
            "Choose three times.",
            "Choose three study activities.",
            "Use will or going to.",
            "Write clearly."
          ],
          "checklist": [
            "I used future time words.",
            "I used will/going to.",
            "I included study activities.",
            "My plan is realistic."
          ],
          "modelOpening": "Tomorrow at 4 p.m., I will revise Mathematics."
        }
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-future-language",
        "title": "1. Future language",
        "modules": [
          {
            "moduleId": "p4-will-going-to",
            "title": "Will and going to",
            "bigIdea": "Future expressions help learners speak about plans and promises.",
            "learnIt": [
              "Will is followed by the base verb: will go, will read, will help.",
              "Going to uses am/is/are: I am going to read.",
              "Use future time words to make the time clear."
            ],
            "workedExample": {
              "question": "Complete: She ___ visit her aunt next week.",
              "steps": [
                "Use will before the base verb visit.",
                "Keep next week as the future time."
              ],
              "answer": "She will visit her aunt next week."
            },
            "tryThis": {
              "question": "Which is future?",
              "choices": [
                "I swept yesterday.",
                "I am sweeping now.",
                "I will sweep later.",
                "I sweep daily."
              ],
              "correct": 2,
              "explanation": "Will and later show future time."
            },
            "imageUrl": "/images/english/p4-time-tenses.svg",
            "imageCaption": "Past and future time expressions."
          }
        ]
      },
      {
        "subtopicId": "p4-diary-study-plan",
        "title": "2. Diary and study time",
        "modules": [
          {
            "moduleId": "p4-diary-plan",
            "title": "Planning study time",
            "bigIdea": "A simple diary helps learners plan and remember future activities.",
            "learnIt": [
              "A diary entry may include date, time and activity.",
              "A study plan should be realistic and clear.",
              "Use future expressions when writing plans."
            ],
            "workedExample": {
              "question": "Write a diary line for reading at 5 p.m. tomorrow.",
              "steps": [
                "Include tomorrow.",
                "Include the time.",
                "Name the activity."
              ],
              "answer": "Tomorrow at 5 p.m., I will read my English story."
            },
            "tryThis": {
              "question": "A study plan should be:",
              "choices": [
                "confusing",
                "without time",
                "only drawings",
                "clear and realistic"
              ],
              "correct": 3,
              "explanation": "A useful plan is clear and realistic."
            },
            "imageUrl": "/images/english/p4-time-tenses.svg",
            "imageCaption": "Past and future time expressions."
          }
        ]
      },
      {
        "subtopicId": "p4-future-expression-practice",
        "title": "3. Writing and speaking practice",
        "modules": [
          {
            "moduleId": "p4-future-expression-writing-speaking-module",
            "title": "Writing and speaking practice",
            "bigIdea": "English becomes useful when learners practise real communication, not only definitions.",
            "imageUrl": "/images/english/p4-time-tenses.svg",
            "imageCaption": "Past and future time expressions.",
            "learnIt": [
              "Use the words from Expression of the Future in complete P4 sentences.",
              "Say the sentence aloud first, then write it clearly.",
              "Check capital letters, spacing and full stops.",
              "If it is a dialogue or message, make it polite and easy to understand."
            ],
            "workedExample": {
              "question": "Write three clear sentences or a short dialogue about expression of the future.",
              "steps": [
                "Choose the audience and purpose.",
                "Use the topic vocabulary.",
                "Write complete sentences and check punctuation."
              ],
              "answer": "A good answer uses expression of the future vocabulary in complete, polite sentences."
            },
            "tryThis": {
              "question": "A strong English answer should be:",
              "choices": [
                "clear, complete and polite",
                "random words",
                "without punctuation",
                "copied without meaning"
              ],
              "correct": 0,
              "explanation": "Clear complete writing shows understanding."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Which word shows future time?",
        "choices": [
          "yesterday",
          "tomorrow",
          "last week",
          "ago"
        ],
        "correct": 1,
        "why": "Tomorrow is future time."
      },
      {
        "q": "Complete: I ___ help my sister later.",
        "choices": [
          "was",
          "were",
          "will",
          "went"
        ],
        "correct": 2,
        "why": "Will marks future action."
      },
      {
        "q": "Correct sentence:",
        "choices": [
          "We going play.",
          "We is going to play.",
          "We are go to played.",
          "We are going to play."
        ],
        "correct": 3,
        "why": "Going to uses are with we."
      },
      {
        "q": "A diary should show:",
        "choices": [
          "date or time",
          "only price",
          "only colour",
          "only shape"
        ],
        "correct": 0,
        "why": "A diary records time and activities."
      },
      {
        "q": "Future actions:",
        "choices": [
          "already happened",
          "have not happened yet",
          "are always yesterday",
          "never use verbs"
        ],
        "correct": 1,
        "why": "Future means later."
      },
      {
        "q": "Complete: He is going ___ read.",
        "choices": [
          "too",
          "two",
          "to",
          "at"
        ],
        "correct": 2,
        "why": "Going to is the correct phrase."
      }
    ]
  },
  {
    "id": "p4-democracy",
    "themeId": "p4-english-transition",
    "themeName": "Primary Four English Transition Syllabus",
    "title": "Democracy",
    "estMinutes": 36,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P4 English beta: built from the official NCDC Primary Four English Syllabus, 2010; human language review still required before premium-final release. Democracy helps a P4 learner use English clearly in daily life and classroom work.",
      "learningObjectives": [
        "Use vocabulary of participation, choice and elections.",
        "Talk about games, sports, music, dance and drama activities.",
        "Read and write simple texts about voting and leadership.",
        "Use polite language when accepting different choices."
      ],
      "whatYouNeedToKnow": [
        "Democracy involves participation, choice and respect for others.",
        "Election words include vote, candidate, leader, ballot and majority.",
        "Games and sports help learners practise fair play and teamwork.",
        "Music, Dance and Drama help learners express ideas and culture."
      ],
      "worked": {
        "problem": "Write one sentence about voting for a class leader.",
        "steps": [
          "Use election vocabulary.",
          "Mention learners or class.",
          "Write a complete sentence."
        ],
        "answer": "The learners will vote for a class leader."
      },
      "commonMistakes": [
        "Confusing vote with fight.",
        "Writing about leaders without mentioning choice or responsibility.",
        "Using rude language about different opinions.",
        "Forgetting that democracy needs rules and respect."
      ],
      "recap": [
        "Democracy needs participation.",
        "Voting is one way people choose leaders.",
        "Respect other people's choices."
      ],
      "writingTasks": [
        {
          "title": "Class election report",
          "prompt": "Write a short report about a class election or choosing a group leader.",
          "planningSteps": [
            "Name the election or group.",
            "Name the candidates or choices.",
            "Explain how learners voted or chose.",
            "Write the result politely."
          ],
          "checklist": [
            "I used election words.",
            "I wrote in full sentences.",
            "I showed respect for choices.",
            "I checked punctuation."
          ],
          "modelOpening": "Our class held an election for class monitor."
        }
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-elections-participation",
        "title": "1. Elections and participation",
        "modules": [
          {
            "moduleId": "p4-election-words",
            "title": "Election vocabulary",
            "bigIdea": "Election words help learners talk about choosing leaders fairly.",
            "learnIt": [
              "A candidate is a person who wants to be chosen.",
              "A vote shows a person's choice.",
              "A leader should serve people and follow rules."
            ],
            "workedExample": {
              "question": "Use candidate in a sentence.",
              "steps": [
                "Think of a class election.",
                "Say who wants to be chosen."
              ],
              "answer": "Sarah is a candidate for class monitor."
            },
            "tryThis": {
              "question": "What does vote mean?",
              "choices": [
                "run very fast",
                "buy goods",
                "draw a shape",
                "show a choice"
              ],
              "correct": 3,
              "explanation": "A vote shows a choice."
            },
            "imageUrl": "/images/english/p4-democracy-election.svg",
            "imageCaption": "Democracy, voting and fair play words."
          }
        ]
      },
      {
        "subtopicId": "p4-democracy-activities",
        "title": "2. Games, sports, music, dance and drama",
        "modules": [
          {
            "moduleId": "p4-fair-play-expression",
            "title": "Fair play and expression",
            "bigIdea": "Democratic behaviour includes teamwork, respect and listening to others.",
            "learnIt": [
              "Games and sports teach fair play and following rules.",
              "Music, Dance and Drama allow learners to express messages.",
              "A good participant listens, waits for a turn and respects others."
            ],
            "workedExample": {
              "question": "Write a sentence about fair play in football.",
              "steps": [
                "Name the game.",
                "Mention a rule or respect.",
                "Use a complete sentence."
              ],
              "answer": "In football, players should follow the rules and respect the referee."
            },
            "tryThis": {
              "question": "Which action shows fair play?",
              "choices": [
                "following rules",
                "cheating",
                "fighting",
                "insulting"
              ],
              "correct": 0,
              "explanation": "Fair play means following rules and respecting others."
            },
            "imageUrl": "/images/english/p4-democracy-election.svg",
            "imageCaption": "Democracy, voting and fair play words."
          }
        ]
      },
      {
        "subtopicId": "p4-democracy-practice",
        "title": "3. Writing and speaking practice",
        "modules": [
          {
            "moduleId": "p4-democracy-writing-speaking-module",
            "title": "Writing and speaking practice",
            "bigIdea": "English becomes useful when learners practise real communication, not only definitions.",
            "imageUrl": "/images/english/p4-democracy-election.svg",
            "imageCaption": "Democracy, voting and fair play words.",
            "learnIt": [
              "Use the words from Democracy in complete P4 sentences.",
              "Say the sentence aloud first, then write it clearly.",
              "Check capital letters, spacing and full stops.",
              "If it is a dialogue or message, make it polite and easy to understand."
            ],
            "workedExample": {
              "question": "Write three clear sentences or a short dialogue about democracy.",
              "steps": [
                "Choose the audience and purpose.",
                "Use the topic vocabulary.",
                "Write complete sentences and check punctuation."
              ],
              "answer": "A good answer uses democracy vocabulary in complete, polite sentences."
            },
            "tryThis": {
              "question": "A strong English answer should be:",
              "choices": [
                "random words",
                "clear, complete and polite",
                "without punctuation",
                "copied without meaning"
              ],
              "correct": 1,
              "explanation": "Clear complete writing shows understanding."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Democracy involves:",
        "choices": [
          "only fighting",
          "no rules",
          "choice and participation",
          "stealing"
        ],
        "correct": 2,
        "why": "Democracy includes choice and participation."
      },
      {
        "q": "A candidate is:",
        "choices": [
          "a shop item",
          "a direction",
          "a shape",
          "a person who wants to be chosen"
        ],
        "correct": 3,
        "why": "A candidate stands for selection."
      },
      {
        "q": "A vote shows:",
        "choices": [
          "a choice",
          "a price",
          "a colour",
          "a feeling only"
        ],
        "correct": 0,
        "why": "Voting shows choice."
      },
      {
        "q": "Fair play means:",
        "choices": [
          "cheating",
          "following rules",
          "shouting",
          "hiding the ball"
        ],
        "correct": 1,
        "why": "Fair play follows rules."
      },
      {
        "q": "MDD stands for:",
        "choices": [
          "Market, Door and Desk",
          "Money, Date and Day",
          "Music, Dance and Drama",
          "Map, Direction and Distance"
        ],
        "correct": 2,
        "why": "MDD means Music, Dance and Drama."
      },
      {
        "q": "A good leader should:",
        "choices": [
          "cheat people",
          "ignore rules",
          "insult others",
          "serve people"
        ],
        "correct": 3,
        "why": "Good leaders serve and respect people."
      }
    ]
  }
];

export function getP4EnglishTopic(id: string): Topic | undefined {
  return P4_ENGLISH_TOPICS.find((topic) => topic.id === id);
}
