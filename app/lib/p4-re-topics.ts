import type { Topic } from "@/lib/topics";

// P4 Religious Education live beta content layer.
// Source map: content/curriculum/p4-re.json
// Rule: NCDC first, build second. This file follows the NCDC/MoES Primary 4 Abridged Curriculum RE topic structure.
// Status: live beta only. Needs confirmation against the full standard P4 CRE/IRE syllabus before premium-final release.

export const P4_RE_TOPICS: Topic[] = [
  {
    "id": "p4-cre-traditions",
    "themeId": "p4-cre",
    "themeName": "Christian Religious Education",
    "title": "Traditions",
    "estMinutes": 30,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P4 Religious Education beta: built from the NCDC/MoES Primary 4 Abridged Curriculum for Uganda; confirm against the full standard P4 CRE/IRE syllabus before premium-final release. Traditions helps P4 learners connect Christian teaching with respectful conduct, service and daily choices.",
      "learningObjectives": [
        "Explain the main idea of Traditions.",
        "Name the key practices, people or values in the topic.",
        "Apply the topic respectfully in daily life.",
        "Answer simple P4 Religious Education questions in full sentences."
      ],
      "whatYouNeedToKnow": [
        "Useful traditions can teach respect, unity and responsibility.",
        "Learners should connect the teaching to values such as love, obedience, service, forgiveness, peace and respect.",
        "This topic includes: Traditional customs, practices and values.",
        "This topic includes: Importance of traditions, customs and practices.",
        "This topic includes: Traditions and customs from other cultures.",
        "This topic includes: Christian practices and their importance."
      ],
      "worked": {
        "problem": "How can a P4 learner apply the lesson of Traditions at school?",
        "steps": [
          "Identify the main value or practice in the topic.",
          "Choose a real school situation.",
          "Write one respectful action a learner can take."
        ],
        "answer": "A P4 learner can apply Traditions by choosing to respect useful traditions while rejecting harmful practices."
      },
      "commonMistakes": [
        "Writing one-word answers without explanation.",
        "Using disrespectful words about faith, worship or other people.",
        "Forgetting to connect the topic to daily life.",
        "Treating this beta source as premium-final before the full standard P4 RE syllabus is checked."
      ],
      "recap": [
        "Useful traditions can teach respect, unity and responsibility.",
        "Learners should connect the teaching to values such as love, obedience, service, forgiveness, peace and respect.",
        "This topic includes: Traditional customs, practices and values."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-cre-traditions-key-teaching",
        "title": "1. Key teaching",
        "modules": [
          {
            "moduleId": "p4-cre-traditions-key",
            "title": "Understanding Traditions",
            "bigIdea": "Christian Religious Education connects faith teaching with values and daily conduct.",
            "learnIt": [
              "Traditions is part of the P4 CRE abridged curriculum map.",
              "Learners study traditional customs, practices and values.",
              "Learners study importance of traditions, customs and practices.",
              "Learners study traditions and customs from other cultures.",
              "Learners study christian practices and their importance."
            ],
            "workedExample": {
              "question": "Name one thing studied under Traditions.",
              "steps": [
                "Read the listed parts of the topic.",
                "Choose one clear part.",
                "Write it as a full answer."
              ],
              "answer": "Traditional customs, practices and values"
            },
            "tryThis": {
              "question": "Which belongs to Traditions?",
              "choices": [
                "Traditional customs, practices and values",
                "A random mathematics formula",
                "A road distance only",
                "A weather graph only"
              ],
              "correct": 0,
              "explanation": "The correct choice is part of the mapped topic."
            },
            "imageUrl": "/images/re/p4-cre-god-love-law.svg",
            "imageCaption": "CRE creation, God’s love, messengers and law."
          }
        ]
      },
      {
        "subtopicId": "p4-cre-traditions-application",
        "title": "2. Daily-life application",
        "modules": [
          {
            "moduleId": "p4-cre-traditions-life",
            "title": "Applying the lesson",
            "bigIdea": "Useful traditions can teach respect, unity and responsibility.",
            "learnIt": [
              "A learner can apply this topic by choosing to respect useful traditions while rejecting harmful practices.",
              "The answer should be respectful, practical and connected to daily life.",
              "If the question is about worship or scripture, learners should ask a teacher or trusted adult for correct details."
            ],
            "workedExample": {
              "question": "Write one respectful action connected to this topic.",
              "steps": [
                "Think of the topic value.",
                "Think of home, school or community.",
                "Write a practical action."
              ],
              "answer": "A P4 learner can apply Traditions by choosing to respect useful traditions while rejecting harmful practices."
            },
            "tryThis": {
              "question": "The best way to apply Religious Education is to:",
              "choices": [
                "mock other people",
                "choose to respect useful traditions while rejecting harmful practices",
                "spread quarrels",
                "ignore good advice"
              ],
              "correct": 1,
              "explanation": "This action applies the topic respectfully in daily life."
            },
            "imageUrl": "/images/re/p4-cre-god-love-law.svg",
            "imageCaption": "CRE creation, God’s love, messengers and law."
          }
        ]
      },
      {
        "subtopicId": "p4-cre-traditions-reasoning",
        "title": "3. Reasoning and respectful application",
        "modules": [
          {
            "moduleId": "p4-cre-traditions-reasoning-module",
            "title": "Reasoning and respectful application",
            "bigIdea": "Religious Education should shape respectful thinking and daily conduct, not only memorisation.",
            "imageUrl": "/images/re/p4-cre-god-love-law.svg",
            "imageCaption": "CRE creation, God’s love, messengers and law.",
            "learnIt": [
              "Name the main teaching in Traditions.",
              "Explain the value behind the teaching in simple words.",
              "Give one practical action a P4 learner can do at home, school or community.",
              "Use respectful language about faith, worship and other people."
            ],
            "workedExample": {
              "question": "Write two sentences showing how Traditions can guide a P4 learner.",
              "steps": [
                "Name the teaching.",
                "Explain the value.",
                "Give a practical respectful action."
              ],
              "answer": "A good answer explains Traditions and gives a respectful daily-life action."
            },
            "tryThis": {
              "question": "A strong RE answer should:",
              "choices": [
                "mock other people",
                "memorise words only",
                "explain and apply the teaching respectfully",
                "ignore daily life"
              ],
              "correct": 2,
              "explanation": "A strong answer explains the teaching and applies it respectfully."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Traditions should help a learner:",
        "choices": [
          "mock other people",
          "steal from others",
          "spread fights",
          "choose to respect useful traditions while rejecting harmful practices"
        ],
        "correct": 3,
        "why": "Useful traditions can teach respect, unity and responsibility."
      },
      {
        "q": "A good CRE answer should connect Bible/faith teaching to:",
        "choices": [
          "daily life and good conduct",
          "only noise",
          "only money",
          "only roads"
        ],
        "correct": 0,
        "why": "CRE should connect faith teaching to daily life."
      },
      {
        "q": "When speaking about people and beliefs, a learner should be:",
        "choices": [
          "insulting",
          "respectful",
          "careless",
          "violent"
        ],
        "correct": 1,
        "why": "Respectful speech supports peace and good learning."
      },
      {
        "q": "This topic includes Traditional customs, practices and values.",
        "choices": [
          "False",
          "Only for P7",
          "True",
          "Only for Mathematics"
        ],
        "correct": 2,
        "why": "Traditional customs, practices and values is listed in the NCDC/MoES P4 abridged map for this topic."
      },
      {
        "q": "Which is connected to this topic?",
        "choices": [
          "weather instruments only",
          "money conversion only",
          "road construction only",
          "Importance of traditions, customs and practices"
        ],
        "correct": 3,
        "why": "Importance of traditions, customs and practices is part of the topic scope."
      },
      {
        "q": "A learner shows good Religious Education learning by:",
        "choices": [
          "acting respectfully",
          "insulting others",
          "hiding all mistakes",
          "refusing peace"
        ],
        "correct": 0,
        "why": "Religious Education should shape respectful conduct."
      }
    ]
  },
  {
    "id": "p4-cre-messengers-of-god",
    "themeId": "p4-cre",
    "themeName": "Christian Religious Education",
    "title": "Messengers of God",
    "estMinutes": 30,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P4 Religious Education beta: built from the NCDC/MoES Primary 4 Abridged Curriculum for Uganda; confirm against the full standard P4 CRE/IRE syllabus before premium-final release. Messengers of God helps P4 learners connect Christian teaching with respectful conduct, service and daily choices.",
      "learningObjectives": [
        "Explain the main idea of Messengers of God.",
        "Name the key practices, people or values in the topic.",
        "Apply the topic respectfully in daily life.",
        "Answer simple P4 Religious Education questions in full sentences."
      ],
      "whatYouNeedToKnow": [
        "A messenger must be truthful and faithful to the message.",
        "Learners should connect the teaching to values such as love, obedience, service, forgiveness, peace and respect.",
        "This topic includes: Meaning of messenger.",
        "This topic includes: Different ways God speaks to His people.",
        "This topic includes: Qualities of God's messengers.",
        "This topic includes: Examples of God's messengers such as Elijah and Isaiah."
      ],
      "worked": {
        "problem": "How can a P4 learner apply the lesson of Messengers of God at school?",
        "steps": [
          "Identify the main value or practice in the topic.",
          "Choose a real school situation.",
          "Write one respectful action a learner can take."
        ],
        "answer": "A P4 learner can apply Messengers of God by choosing to deliver messages truthfully and listen carefully to good guidance."
      },
      "commonMistakes": [
        "Writing one-word answers without explanation.",
        "Using disrespectful words about faith, worship or other people.",
        "Forgetting to connect the topic to daily life.",
        "Treating this beta source as premium-final before the full standard P4 RE syllabus is checked."
      ],
      "recap": [
        "A messenger must be truthful and faithful to the message.",
        "Learners should connect the teaching to values such as love, obedience, service, forgiveness, peace and respect.",
        "This topic includes: Meaning of messenger."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-cre-messengers-of-god-key-teaching",
        "title": "1. Key teaching",
        "modules": [
          {
            "moduleId": "p4-cre-messengers-of-god-key",
            "title": "Understanding Messengers of God",
            "bigIdea": "Christian Religious Education connects faith teaching with values and daily conduct.",
            "learnIt": [
              "Messengers of God is part of the P4 CRE abridged curriculum map.",
              "Learners study meaning of messenger.",
              "Learners study different ways god speaks to his people.",
              "Learners study qualities of god's messengers.",
              "Learners study examples of god's messengers such as elijah and isaiah.",
              "Learners study angels as messengers of god."
            ],
            "workedExample": {
              "question": "Name one thing studied under Messengers of God.",
              "steps": [
                "Read the listed parts of the topic.",
                "Choose one clear part.",
                "Write it as a full answer."
              ],
              "answer": "Meaning of messenger"
            },
            "tryThis": {
              "question": "Which belongs to Messengers of God?",
              "choices": [
                "A random mathematics formula",
                "Meaning of messenger",
                "A road distance only",
                "A weather graph only"
              ],
              "correct": 1,
              "explanation": "The correct choice is part of the mapped topic."
            },
            "imageUrl": "/images/re/p4-cre-god-love-law.svg",
            "imageCaption": "CRE creation, God’s love, messengers and law."
          }
        ]
      },
      {
        "subtopicId": "p4-cre-messengers-of-god-application",
        "title": "2. Daily-life application",
        "modules": [
          {
            "moduleId": "p4-cre-messengers-of-god-life",
            "title": "Applying the lesson",
            "bigIdea": "A messenger must be truthful and faithful to the message.",
            "learnIt": [
              "A learner can apply this topic by choosing to deliver messages truthfully and listen carefully to good guidance.",
              "The answer should be respectful, practical and connected to daily life.",
              "If the question is about worship or scripture, learners should ask a teacher or trusted adult for correct details."
            ],
            "workedExample": {
              "question": "Write one respectful action connected to this topic.",
              "steps": [
                "Think of the topic value.",
                "Think of home, school or community.",
                "Write a practical action."
              ],
              "answer": "A P4 learner can apply Messengers of God by choosing to deliver messages truthfully and listen carefully to good guidance."
            },
            "tryThis": {
              "question": "The best way to apply Religious Education is to:",
              "choices": [
                "mock other people",
                "spread quarrels",
                "choose to deliver messages truthfully and listen carefully to good guidance",
                "ignore good advice"
              ],
              "correct": 2,
              "explanation": "This action applies the topic respectfully in daily life."
            },
            "imageUrl": "/images/re/p4-cre-god-love-law.svg",
            "imageCaption": "CRE creation, God’s love, messengers and law."
          }
        ]
      },
      {
        "subtopicId": "p4-cre-messengers-of-god-reasoning",
        "title": "3. Reasoning and respectful application",
        "modules": [
          {
            "moduleId": "p4-cre-messengers-of-god-reasoning-module",
            "title": "Reasoning and respectful application",
            "bigIdea": "Religious Education should shape respectful thinking and daily conduct, not only memorisation.",
            "imageUrl": "/images/re/p4-cre-god-love-law.svg",
            "imageCaption": "CRE creation, God’s love, messengers and law.",
            "learnIt": [
              "Name the main teaching in Messengers of God.",
              "Explain the value behind the teaching in simple words.",
              "Give one practical action a P4 learner can do at home, school or community.",
              "Use respectful language about faith, worship and other people."
            ],
            "workedExample": {
              "question": "Write two sentences showing how Messengers of God can guide a P4 learner.",
              "steps": [
                "Name the teaching.",
                "Explain the value.",
                "Give a practical respectful action."
              ],
              "answer": "A good answer explains Messengers of God and gives a respectful daily-life action."
            },
            "tryThis": {
              "question": "A strong RE answer should:",
              "choices": [
                "mock other people",
                "memorise words only",
                "ignore daily life",
                "explain and apply the teaching respectfully"
              ],
              "correct": 3,
              "explanation": "A strong answer explains the teaching and applies it respectfully."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Messengers of God should help a learner:",
        "choices": [
          "choose to deliver messages truthfully and listen carefully to good guidance",
          "mock other people",
          "steal from others",
          "spread fights"
        ],
        "correct": 0,
        "why": "A messenger must be truthful and faithful to the message."
      },
      {
        "q": "A good CRE answer should connect Bible/faith teaching to:",
        "choices": [
          "only noise",
          "daily life and good conduct",
          "only money",
          "only roads"
        ],
        "correct": 1,
        "why": "CRE should connect faith teaching to daily life."
      },
      {
        "q": "When speaking about people and beliefs, a learner should be:",
        "choices": [
          "insulting",
          "careless",
          "respectful",
          "violent"
        ],
        "correct": 2,
        "why": "Respectful speech supports peace and good learning."
      },
      {
        "q": "This topic includes Meaning of messenger.",
        "choices": [
          "False",
          "Only for P7",
          "Only for Mathematics",
          "True"
        ],
        "correct": 3,
        "why": "Meaning of messenger is listed in the NCDC/MoES P4 abridged map for this topic."
      },
      {
        "q": "Which is connected to this topic?",
        "choices": [
          "Different ways God speaks to His people",
          "weather instruments only",
          "money conversion only",
          "road construction only"
        ],
        "correct": 0,
        "why": "Different ways God speaks to His people is part of the topic scope."
      },
      {
        "q": "A learner shows good Religious Education learning by:",
        "choices": [
          "insulting others",
          "acting respectfully",
          "hiding all mistakes",
          "refusing peace"
        ],
        "correct": 1,
        "why": "Religious Education should shape respectful conduct."
      }
    ]
  },
  {
    "id": "p4-cre-gods-continuing-love",
    "themeId": "p4-cre",
    "themeName": "Christian Religious Education",
    "title": "God's Continuing Love for His People",
    "estMinutes": 30,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P4 Religious Education beta: built from the NCDC/MoES Primary 4 Abridged Curriculum for Uganda; confirm against the full standard P4 CRE/IRE syllabus before premium-final release. God's Continuing Love for His People helps P4 learners connect Christian teaching with respectful conduct, service and daily choices.",
      "learningObjectives": [
        "Explain the main idea of God's Continuing Love for His People.",
        "Name the key practices, people or values in the topic.",
        "Apply the topic respectfully in daily life.",
        "Answer simple P4 Religious Education questions in full sentences."
      ],
      "whatYouNeedToKnow": [
        "God’s continuing love calls learners to care, repentance and forgiveness.",
        "Learners should connect the teaching to values such as love, obedience, service, forgiveness, peace and respect.",
        "This topic includes: Creation.",
        "This topic includes: The order of creation.",
        "This topic includes: Caring for God's creation.",
        "This topic includes: The fall of human beings."
      ],
      "worked": {
        "problem": "How can a P4 learner apply the lesson of God's Continuing Love for His People at school?",
        "steps": [
          "Identify the main value or practice in the topic.",
          "Choose a real school situation.",
          "Write one respectful action a learner can take."
        ],
        "answer": "A P4 learner can apply God's Continuing Love for His People by choosing to care for creation, repent after doing wrong and forgive others."
      },
      "commonMistakes": [
        "Writing one-word answers without explanation.",
        "Using disrespectful words about faith, worship or other people.",
        "Forgetting to connect the topic to daily life.",
        "Treating this beta source as premium-final before the full standard P4 RE syllabus is checked."
      ],
      "recap": [
        "God’s continuing love calls learners to care, repentance and forgiveness.",
        "Learners should connect the teaching to values such as love, obedience, service, forgiveness, peace and respect.",
        "This topic includes: Creation."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-cre-gods-continuing-love-key-teaching",
        "title": "1. Key teaching",
        "modules": [
          {
            "moduleId": "p4-cre-gods-continuing-love-key",
            "title": "Understanding God's Continuing Love for His People",
            "bigIdea": "Christian Religious Education connects faith teaching with values and daily conduct.",
            "learnIt": [
              "God's Continuing Love for His People is part of the P4 CRE abridged curriculum map.",
              "Learners study creation.",
              "Learners study the order of creation.",
              "Learners study caring for god's creation.",
              "Learners study the fall of human beings.",
              "Learners study disobedience and its consequences."
            ],
            "workedExample": {
              "question": "Name one thing studied under God's Continuing Love for His People.",
              "steps": [
                "Read the listed parts of the topic.",
                "Choose one clear part.",
                "Write it as a full answer."
              ],
              "answer": "Creation"
            },
            "tryThis": {
              "question": "Which belongs to God's Continuing Love for His People?",
              "choices": [
                "A random mathematics formula",
                "A road distance only",
                "Creation",
                "A weather graph only"
              ],
              "correct": 2,
              "explanation": "The correct choice is part of the mapped topic."
            },
            "imageUrl": "/images/re/p4-cre-god-love-law.svg",
            "imageCaption": "CRE creation, God’s love, messengers and law."
          }
        ]
      },
      {
        "subtopicId": "p4-cre-gods-continuing-love-application",
        "title": "2. Daily-life application",
        "modules": [
          {
            "moduleId": "p4-cre-gods-continuing-love-life",
            "title": "Applying the lesson",
            "bigIdea": "God’s continuing love calls learners to care, repentance and forgiveness.",
            "learnIt": [
              "A learner can apply this topic by choosing to care for creation, repent after doing wrong and forgive others.",
              "The answer should be respectful, practical and connected to daily life.",
              "If the question is about worship or scripture, learners should ask a teacher or trusted adult for correct details."
            ],
            "workedExample": {
              "question": "Write one respectful action connected to this topic.",
              "steps": [
                "Think of the topic value.",
                "Think of home, school or community.",
                "Write a practical action."
              ],
              "answer": "A P4 learner can apply God's Continuing Love for His People by choosing to care for creation, repent after doing wrong and forgive others."
            },
            "tryThis": {
              "question": "The best way to apply Religious Education is to:",
              "choices": [
                "mock other people",
                "spread quarrels",
                "ignore good advice",
                "choose to care for creation, repent after doing wrong and forgive others"
              ],
              "correct": 3,
              "explanation": "This action applies the topic respectfully in daily life."
            },
            "imageUrl": "/images/re/p4-cre-god-love-law.svg",
            "imageCaption": "CRE creation, God’s love, messengers and law."
          }
        ]
      },
      {
        "subtopicId": "p4-cre-gods-continuing-love-reasoning",
        "title": "3. Reasoning and respectful application",
        "modules": [
          {
            "moduleId": "p4-cre-gods-continuing-love-reasoning-module",
            "title": "Reasoning and respectful application",
            "bigIdea": "Religious Education should shape respectful thinking and daily conduct, not only memorisation.",
            "imageUrl": "/images/re/p4-cre-god-love-law.svg",
            "imageCaption": "CRE creation, God’s love, messengers and law.",
            "learnIt": [
              "Name the main teaching in God's Continuing Love for His People.",
              "Explain the value behind the teaching in simple words.",
              "Give one practical action a P4 learner can do at home, school or community.",
              "Use respectful language about faith, worship and other people."
            ],
            "workedExample": {
              "question": "Write two sentences showing how God's Continuing Love for His People can guide a P4 learner.",
              "steps": [
                "Name the teaching.",
                "Explain the value.",
                "Give a practical respectful action."
              ],
              "answer": "A good answer explains God's Continuing Love for His People and gives a respectful daily-life action."
            },
            "tryThis": {
              "question": "A strong RE answer should:",
              "choices": [
                "explain and apply the teaching respectfully",
                "mock other people",
                "memorise words only",
                "ignore daily life"
              ],
              "correct": 0,
              "explanation": "A strong answer explains the teaching and applies it respectfully."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "God's Continuing Love for His People should help a learner:",
        "choices": [
          "mock other people",
          "choose to care for creation, repent after doing wrong and forgive others",
          "steal from others",
          "spread fights"
        ],
        "correct": 1,
        "why": "God’s continuing love calls learners to care, repentance and forgiveness."
      },
      {
        "q": "A good CRE answer should connect Bible/faith teaching to:",
        "choices": [
          "only noise",
          "only money",
          "daily life and good conduct",
          "only roads"
        ],
        "correct": 2,
        "why": "CRE should connect faith teaching to daily life."
      },
      {
        "q": "When speaking about people and beliefs, a learner should be:",
        "choices": [
          "insulting",
          "careless",
          "violent",
          "respectful"
        ],
        "correct": 3,
        "why": "Respectful speech supports peace and good learning."
      },
      {
        "q": "This topic includes Creation.",
        "choices": [
          "True",
          "False",
          "Only for P7",
          "Only for Mathematics"
        ],
        "correct": 0,
        "why": "Creation is listed in the NCDC/MoES P4 abridged map for this topic."
      },
      {
        "q": "Which is connected to this topic?",
        "choices": [
          "weather instruments only",
          "The order of creation",
          "money conversion only",
          "road construction only"
        ],
        "correct": 1,
        "why": "The order of creation is part of the topic scope."
      },
      {
        "q": "A learner shows good Religious Education learning by:",
        "choices": [
          "insulting others",
          "hiding all mistakes",
          "acting respectfully",
          "refusing peace"
        ],
        "correct": 2,
        "why": "Religious Education should shape respectful conduct."
      }
    ]
  },
  {
    "id": "p4-cre-gods-people-law",
    "themeId": "p4-cre",
    "themeName": "Christian Religious Education",
    "title": "God's People and the Law",
    "estMinutes": 30,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P4 Religious Education beta: built from the NCDC/MoES Primary 4 Abridged Curriculum for Uganda; confirm against the full standard P4 CRE/IRE syllabus before premium-final release. God's People and the Law helps P4 learners connect Christian teaching with respectful conduct, service and daily choices.",
      "learningObjectives": [
        "Explain the main idea of God's People and the Law.",
        "Name the key practices, people or values in the topic.",
        "Apply the topic respectfully in daily life.",
        "Answer simple P4 Religious Education questions in full sentences."
      ],
      "whatYouNeedToKnow": [
        "God’s law guides people to live rightly with God and others.",
        "Learners should connect the teaching to values such as love, obedience, service, forgiveness, peace and respect.",
        "This topic includes: God's covenant with His people.",
        "This topic includes: Noah's faithfulness to God.",
        "This topic includes: God's promises to Abraham.",
        "This topic includes: God's promises to Jacob."
      ],
      "worked": {
        "problem": "How can a P4 learner apply the lesson of God's People and the Law at school?",
        "steps": [
          "Identify the main value or practice in the topic.",
          "Choose a real school situation.",
          "Write one respectful action a learner can take."
        ],
        "answer": "A P4 learner can apply God's People and the Law by choosing to obey good rules, tell the truth and respect parents and neighbours."
      },
      "commonMistakes": [
        "Writing one-word answers without explanation.",
        "Using disrespectful words about faith, worship or other people.",
        "Forgetting to connect the topic to daily life.",
        "Treating this beta source as premium-final before the full standard P4 RE syllabus is checked."
      ],
      "recap": [
        "God’s law guides people to live rightly with God and others.",
        "Learners should connect the teaching to values such as love, obedience, service, forgiveness, peace and respect.",
        "This topic includes: God's covenant with His people."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-cre-gods-people-law-key-teaching",
        "title": "1. Key teaching",
        "modules": [
          {
            "moduleId": "p4-cre-gods-people-law-key",
            "title": "Understanding God's People and the Law",
            "bigIdea": "Christian Religious Education connects faith teaching with values and daily conduct.",
            "learnIt": [
              "God's People and the Law is part of the P4 CRE abridged curriculum map.",
              "Learners study god's covenant with his people.",
              "Learners study noah's faithfulness to god.",
              "Learners study god's promises to abraham.",
              "Learners study god's promises to jacob.",
              "Learners study moses and the exodus story."
            ],
            "workedExample": {
              "question": "Name one thing studied under God's People and the Law.",
              "steps": [
                "Read the listed parts of the topic.",
                "Choose one clear part.",
                "Write it as a full answer."
              ],
              "answer": "God's covenant with His people"
            },
            "tryThis": {
              "question": "Which belongs to God's People and the Law?",
              "choices": [
                "A random mathematics formula",
                "A road distance only",
                "A weather graph only",
                "God's covenant with His people"
              ],
              "correct": 3,
              "explanation": "The correct choice is part of the mapped topic."
            },
            "imageUrl": "/images/re/p4-cre-god-love-law.svg",
            "imageCaption": "CRE creation, God’s love, messengers and law."
          }
        ]
      },
      {
        "subtopicId": "p4-cre-gods-people-law-application",
        "title": "2. Daily-life application",
        "modules": [
          {
            "moduleId": "p4-cre-gods-people-law-life",
            "title": "Applying the lesson",
            "bigIdea": "God’s law guides people to live rightly with God and others.",
            "learnIt": [
              "A learner can apply this topic by choosing to obey good rules, tell the truth and respect parents and neighbours.",
              "The answer should be respectful, practical and connected to daily life.",
              "If the question is about worship or scripture, learners should ask a teacher or trusted adult for correct details."
            ],
            "workedExample": {
              "question": "Write one respectful action connected to this topic.",
              "steps": [
                "Think of the topic value.",
                "Think of home, school or community.",
                "Write a practical action."
              ],
              "answer": "A P4 learner can apply God's People and the Law by choosing to obey good rules, tell the truth and respect parents and neighbours."
            },
            "tryThis": {
              "question": "The best way to apply Religious Education is to:",
              "choices": [
                "choose to obey good rules, tell the truth and respect parents and neighbours",
                "mock other people",
                "spread quarrels",
                "ignore good advice"
              ],
              "correct": 0,
              "explanation": "This action applies the topic respectfully in daily life."
            },
            "imageUrl": "/images/re/p4-cre-god-love-law.svg",
            "imageCaption": "CRE creation, God’s love, messengers and law."
          }
        ]
      },
      {
        "subtopicId": "p4-cre-gods-people-law-reasoning",
        "title": "3. Reasoning and respectful application",
        "modules": [
          {
            "moduleId": "p4-cre-gods-people-law-reasoning-module",
            "title": "Reasoning and respectful application",
            "bigIdea": "Religious Education should shape respectful thinking and daily conduct, not only memorisation.",
            "imageUrl": "/images/re/p4-cre-god-love-law.svg",
            "imageCaption": "CRE creation, God’s love, messengers and law.",
            "learnIt": [
              "Name the main teaching in God's People and the Law.",
              "Explain the value behind the teaching in simple words.",
              "Give one practical action a P4 learner can do at home, school or community.",
              "Use respectful language about faith, worship and other people."
            ],
            "workedExample": {
              "question": "Write two sentences showing how God's People and the Law can guide a P4 learner.",
              "steps": [
                "Name the teaching.",
                "Explain the value.",
                "Give a practical respectful action."
              ],
              "answer": "A good answer explains God's People and the Law and gives a respectful daily-life action."
            },
            "tryThis": {
              "question": "A strong RE answer should:",
              "choices": [
                "mock other people",
                "explain and apply the teaching respectfully",
                "memorise words only",
                "ignore daily life"
              ],
              "correct": 1,
              "explanation": "A strong answer explains the teaching and applies it respectfully."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "God's People and the Law should help a learner:",
        "choices": [
          "mock other people",
          "steal from others",
          "choose to obey good rules, tell the truth and respect parents and neighbours",
          "spread fights"
        ],
        "correct": 2,
        "why": "God’s law guides people to live rightly with God and others."
      },
      {
        "q": "A good CRE answer should connect Bible/faith teaching to:",
        "choices": [
          "only noise",
          "only money",
          "only roads",
          "daily life and good conduct"
        ],
        "correct": 3,
        "why": "CRE should connect faith teaching to daily life."
      },
      {
        "q": "When speaking about people and beliefs, a learner should be:",
        "choices": [
          "respectful",
          "insulting",
          "careless",
          "violent"
        ],
        "correct": 0,
        "why": "Respectful speech supports peace and good learning."
      },
      {
        "q": "This topic includes God's covenant with His people.",
        "choices": [
          "False",
          "True",
          "Only for P7",
          "Only for Mathematics"
        ],
        "correct": 1,
        "why": "God's covenant with His people is listed in the NCDC/MoES P4 abridged map for this topic."
      },
      {
        "q": "Which is connected to this topic?",
        "choices": [
          "weather instruments only",
          "money conversion only",
          "Noah's faithfulness to God",
          "road construction only"
        ],
        "correct": 2,
        "why": "Noah's faithfulness to God is part of the topic scope."
      },
      {
        "q": "A learner shows good Religious Education learning by:",
        "choices": [
          "insulting others",
          "hiding all mistakes",
          "refusing peace",
          "acting respectfully"
        ],
        "correct": 3,
        "why": "Religious Education should shape respectful conduct."
      }
    ]
  },
  {
    "id": "p4-cre-following-jesus-leader",
    "themeId": "p4-cre",
    "themeName": "Christian Religious Education",
    "title": "Following Jesus as a Leader",
    "estMinutes": 30,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P4 Religious Education beta: built from the NCDC/MoES Primary 4 Abridged Curriculum for Uganda; confirm against the full standard P4 CRE/IRE syllabus before premium-final release. Following Jesus as a Leader helps P4 learners connect Christian teaching with respectful conduct, service and daily choices.",
      "learningObjectives": [
        "Explain the main idea of Following Jesus as a Leader.",
        "Name the key practices, people or values in the topic.",
        "Apply the topic respectfully in daily life.",
        "Answer simple P4 Religious Education questions in full sentences."
      ],
      "whatYouNeedToKnow": [
        "Jesus’ leadership shows service, humility and care.",
        "Learners should connect the teaching to values such as love, obedience, service, forgiveness, peace and respect.",
        "This topic includes: Jesus as a leader.",
        "This topic includes: Jesus' authority.",
        "This topic includes: Confidence in Jesus' authority.",
        "This topic includes: Jesus' instructions to His disciples."
      ],
      "worked": {
        "problem": "How can a P4 learner apply the lesson of Following Jesus as a Leader at school?",
        "steps": [
          "Identify the main value or practice in the topic.",
          "Choose a real school situation.",
          "Write one respectful action a learner can take."
        ],
        "answer": "A P4 learner can apply Following Jesus as a Leader by choosing to lead by serving, helping and setting a good example."
      },
      "commonMistakes": [
        "Writing one-word answers without explanation.",
        "Using disrespectful words about faith, worship or other people.",
        "Forgetting to connect the topic to daily life.",
        "Treating this beta source as premium-final before the full standard P4 RE syllabus is checked."
      ],
      "recap": [
        "Jesus’ leadership shows service, humility and care.",
        "Learners should connect the teaching to values such as love, obedience, service, forgiveness, peace and respect.",
        "This topic includes: Jesus as a leader."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-cre-following-jesus-leader-key-teaching",
        "title": "1. Key teaching",
        "modules": [
          {
            "moduleId": "p4-cre-following-jesus-leader-key",
            "title": "Understanding Following Jesus as a Leader",
            "bigIdea": "Christian Religious Education connects faith teaching with values and daily conduct.",
            "learnIt": [
              "Following Jesus as a Leader is part of the P4 CRE abridged curriculum map.",
              "Learners study jesus as a leader.",
              "Learners study jesus' authority.",
              "Learners study confidence in jesus' authority.",
              "Learners study jesus' instructions to his disciples.",
              "Learners study jesus' promises to his disciples."
            ],
            "workedExample": {
              "question": "Name one thing studied under Following Jesus as a Leader.",
              "steps": [
                "Read the listed parts of the topic.",
                "Choose one clear part.",
                "Write it as a full answer."
              ],
              "answer": "Jesus as a leader"
            },
            "tryThis": {
              "question": "Which belongs to Following Jesus as a Leader?",
              "choices": [
                "Jesus as a leader",
                "A random mathematics formula",
                "A road distance only",
                "A weather graph only"
              ],
              "correct": 0,
              "explanation": "The correct choice is part of the mapped topic."
            },
            "imageUrl": "/images/re/p4-cre-community-service-peace.svg",
            "imageCaption": "CRE community, service, decision-making and peace."
          }
        ]
      },
      {
        "subtopicId": "p4-cre-following-jesus-leader-application",
        "title": "2. Daily-life application",
        "modules": [
          {
            "moduleId": "p4-cre-following-jesus-leader-life",
            "title": "Applying the lesson",
            "bigIdea": "Jesus’ leadership shows service, humility and care.",
            "learnIt": [
              "A learner can apply this topic by choosing to lead by serving, helping and setting a good example.",
              "The answer should be respectful, practical and connected to daily life.",
              "If the question is about worship or scripture, learners should ask a teacher or trusted adult for correct details."
            ],
            "workedExample": {
              "question": "Write one respectful action connected to this topic.",
              "steps": [
                "Think of the topic value.",
                "Think of home, school or community.",
                "Write a practical action."
              ],
              "answer": "A P4 learner can apply Following Jesus as a Leader by choosing to lead by serving, helping and setting a good example."
            },
            "tryThis": {
              "question": "The best way to apply Religious Education is to:",
              "choices": [
                "mock other people",
                "choose to lead by serving, helping and setting a good example",
                "spread quarrels",
                "ignore good advice"
              ],
              "correct": 1,
              "explanation": "This action applies the topic respectfully in daily life."
            },
            "imageUrl": "/images/re/p4-cre-community-service-peace.svg",
            "imageCaption": "CRE community, service, decision-making and peace."
          }
        ]
      },
      {
        "subtopicId": "p4-cre-following-jesus-leader-reasoning",
        "title": "3. Reasoning and respectful application",
        "modules": [
          {
            "moduleId": "p4-cre-following-jesus-leader-reasoning-module",
            "title": "Reasoning and respectful application",
            "bigIdea": "Religious Education should shape respectful thinking and daily conduct, not only memorisation.",
            "imageUrl": "/images/re/p4-cre-community-service-peace.svg",
            "imageCaption": "CRE community, service, decision-making and peace.",
            "learnIt": [
              "Name the main teaching in Following Jesus as a Leader.",
              "Explain the value behind the teaching in simple words.",
              "Give one practical action a P4 learner can do at home, school or community.",
              "Use respectful language about faith, worship and other people."
            ],
            "workedExample": {
              "question": "Write two sentences showing how Following Jesus as a Leader can guide a P4 learner.",
              "steps": [
                "Name the teaching.",
                "Explain the value.",
                "Give a practical respectful action."
              ],
              "answer": "A good answer explains Following Jesus as a Leader and gives a respectful daily-life action."
            },
            "tryThis": {
              "question": "A strong RE answer should:",
              "choices": [
                "mock other people",
                "memorise words only",
                "explain and apply the teaching respectfully",
                "ignore daily life"
              ],
              "correct": 2,
              "explanation": "A strong answer explains the teaching and applies it respectfully."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Following Jesus as a Leader should help a learner:",
        "choices": [
          "mock other people",
          "steal from others",
          "spread fights",
          "choose to lead by serving, helping and setting a good example"
        ],
        "correct": 3,
        "why": "Jesus’ leadership shows service, humility and care."
      },
      {
        "q": "A good CRE answer should connect Bible/faith teaching to:",
        "choices": [
          "daily life and good conduct",
          "only noise",
          "only money",
          "only roads"
        ],
        "correct": 0,
        "why": "CRE should connect faith teaching to daily life."
      },
      {
        "q": "When speaking about people and beliefs, a learner should be:",
        "choices": [
          "insulting",
          "respectful",
          "careless",
          "violent"
        ],
        "correct": 1,
        "why": "Respectful speech supports peace and good learning."
      },
      {
        "q": "This topic includes Jesus as a leader.",
        "choices": [
          "False",
          "Only for P7",
          "True",
          "Only for Mathematics"
        ],
        "correct": 2,
        "why": "Jesus as a leader is listed in the NCDC/MoES P4 abridged map for this topic."
      },
      {
        "q": "Which is connected to this topic?",
        "choices": [
          "weather instruments only",
          "money conversion only",
          "road construction only",
          "Jesus' authority"
        ],
        "correct": 3,
        "why": "Jesus' authority is part of the topic scope."
      },
      {
        "q": "A learner shows good Religious Education learning by:",
        "choices": [
          "acting respectfully",
          "insulting others",
          "hiding all mistakes",
          "refusing peace"
        ],
        "correct": 0,
        "why": "Religious Education should shape respectful conduct."
      }
    ]
  },
  {
    "id": "p4-cre-jesus-christ-our-saviour",
    "themeId": "p4-cre",
    "themeName": "Christian Religious Education",
    "title": "Jesus Christ Our Saviour",
    "estMinutes": 30,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P4 Religious Education beta: built from the NCDC/MoES Primary 4 Abridged Curriculum for Uganda; confirm against the full standard P4 CRE/IRE syllabus before premium-final release. Jesus Christ Our Saviour helps P4 learners connect Christian teaching with respectful conduct, service and daily choices.",
      "learningObjectives": [
        "Explain the main idea of Jesus Christ Our Saviour.",
        "Name the key practices, people or values in the topic.",
        "Apply the topic respectfully in daily life.",
        "Answer simple P4 Religious Education questions in full sentences."
      ],
      "whatYouNeedToKnow": [
        "Christians call Jesus Saviour because they believe He saves people from sin.",
        "Learners should connect the teaching to values such as love, obedience, service, forgiveness, peace and respect.",
        "This topic includes: Jesus' suffering.",
        "This topic includes: Jesus' death.",
        "This topic includes: Jesus' burial and resurrection.",
        "This topic includes: Jesus saves people from sin."
      ],
      "worked": {
        "problem": "How can a P4 learner apply the lesson of Jesus Christ Our Saviour at school?",
        "steps": [
          "Identify the main value or practice in the topic.",
          "Choose a real school situation.",
          "Write one respectful action a learner can take."
        ],
        "answer": "A P4 learner can apply Jesus Christ Our Saviour by choosing to forgive others, choose hope and avoid revenge."
      },
      "commonMistakes": [
        "Writing one-word answers without explanation.",
        "Using disrespectful words about faith, worship or other people.",
        "Forgetting to connect the topic to daily life.",
        "Treating this beta source as premium-final before the full standard P4 RE syllabus is checked."
      ],
      "recap": [
        "Christians call Jesus Saviour because they believe He saves people from sin.",
        "Learners should connect the teaching to values such as love, obedience, service, forgiveness, peace and respect.",
        "This topic includes: Jesus' suffering."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-cre-jesus-christ-our-saviour-key-teaching",
        "title": "1. Key teaching",
        "modules": [
          {
            "moduleId": "p4-cre-jesus-christ-our-saviour-key",
            "title": "Understanding Jesus Christ Our Saviour",
            "bigIdea": "Christian Religious Education connects faith teaching with values and daily conduct.",
            "learnIt": [
              "Jesus Christ Our Saviour is part of the P4 CRE abridged curriculum map.",
              "Learners study jesus' suffering.",
              "Learners study jesus' death.",
              "Learners study jesus' burial and resurrection.",
              "Learners study jesus saves people from sin.",
              "Learners study lessons from jesus' suffering, death and resurrection."
            ],
            "workedExample": {
              "question": "Name one thing studied under Jesus Christ Our Saviour.",
              "steps": [
                "Read the listed parts of the topic.",
                "Choose one clear part.",
                "Write it as a full answer."
              ],
              "answer": "Jesus' suffering"
            },
            "tryThis": {
              "question": "Which belongs to Jesus Christ Our Saviour?",
              "choices": [
                "A random mathematics formula",
                "Jesus' suffering",
                "A road distance only",
                "A weather graph only"
              ],
              "correct": 1,
              "explanation": "The correct choice is part of the mapped topic."
            },
            "imageUrl": "/images/re/p4-cre-god-love-law.svg",
            "imageCaption": "CRE creation, God’s love, messengers and law."
          }
        ]
      },
      {
        "subtopicId": "p4-cre-jesus-christ-our-saviour-application",
        "title": "2. Daily-life application",
        "modules": [
          {
            "moduleId": "p4-cre-jesus-christ-our-saviour-life",
            "title": "Applying the lesson",
            "bigIdea": "Christians call Jesus Saviour because they believe He saves people from sin.",
            "learnIt": [
              "A learner can apply this topic by choosing to forgive others, choose hope and avoid revenge.",
              "The answer should be respectful, practical and connected to daily life.",
              "If the question is about worship or scripture, learners should ask a teacher or trusted adult for correct details."
            ],
            "workedExample": {
              "question": "Write one respectful action connected to this topic.",
              "steps": [
                "Think of the topic value.",
                "Think of home, school or community.",
                "Write a practical action."
              ],
              "answer": "A P4 learner can apply Jesus Christ Our Saviour by choosing to forgive others, choose hope and avoid revenge."
            },
            "tryThis": {
              "question": "The best way to apply Religious Education is to:",
              "choices": [
                "mock other people",
                "spread quarrels",
                "choose to forgive others, choose hope and avoid revenge",
                "ignore good advice"
              ],
              "correct": 2,
              "explanation": "This action applies the topic respectfully in daily life."
            },
            "imageUrl": "/images/re/p4-cre-god-love-law.svg",
            "imageCaption": "CRE creation, God’s love, messengers and law."
          }
        ]
      },
      {
        "subtopicId": "p4-cre-jesus-christ-our-saviour-reasoning",
        "title": "3. Reasoning and respectful application",
        "modules": [
          {
            "moduleId": "p4-cre-jesus-christ-our-saviour-reasoning-module",
            "title": "Reasoning and respectful application",
            "bigIdea": "Religious Education should shape respectful thinking and daily conduct, not only memorisation.",
            "imageUrl": "/images/re/p4-cre-god-love-law.svg",
            "imageCaption": "CRE creation, God’s love, messengers and law.",
            "learnIt": [
              "Name the main teaching in Jesus Christ Our Saviour.",
              "Explain the value behind the teaching in simple words.",
              "Give one practical action a P4 learner can do at home, school or community.",
              "Use respectful language about faith, worship and other people."
            ],
            "workedExample": {
              "question": "Write two sentences showing how Jesus Christ Our Saviour can guide a P4 learner.",
              "steps": [
                "Name the teaching.",
                "Explain the value.",
                "Give a practical respectful action."
              ],
              "answer": "A good answer explains Jesus Christ Our Saviour and gives a respectful daily-life action."
            },
            "tryThis": {
              "question": "A strong RE answer should:",
              "choices": [
                "mock other people",
                "memorise words only",
                "ignore daily life",
                "explain and apply the teaching respectfully"
              ],
              "correct": 3,
              "explanation": "A strong answer explains the teaching and applies it respectfully."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Jesus Christ Our Saviour should help a learner:",
        "choices": [
          "choose to forgive others, choose hope and avoid revenge",
          "mock other people",
          "steal from others",
          "spread fights"
        ],
        "correct": 0,
        "why": "Christians call Jesus Saviour because they believe He saves people from sin."
      },
      {
        "q": "A good CRE answer should connect Bible/faith teaching to:",
        "choices": [
          "only noise",
          "daily life and good conduct",
          "only money",
          "only roads"
        ],
        "correct": 1,
        "why": "CRE should connect faith teaching to daily life."
      },
      {
        "q": "When speaking about people and beliefs, a learner should be:",
        "choices": [
          "insulting",
          "careless",
          "respectful",
          "violent"
        ],
        "correct": 2,
        "why": "Respectful speech supports peace and good learning."
      },
      {
        "q": "This topic includes Jesus' suffering.",
        "choices": [
          "False",
          "Only for P7",
          "Only for Mathematics",
          "True"
        ],
        "correct": 3,
        "why": "Jesus' suffering is listed in the NCDC/MoES P4 abridged map for this topic."
      },
      {
        "q": "Which is connected to this topic?",
        "choices": [
          "Jesus' death",
          "weather instruments only",
          "money conversion only",
          "road construction only"
        ],
        "correct": 0,
        "why": "Jesus' death is part of the topic scope."
      },
      {
        "q": "A learner shows good Religious Education learning by:",
        "choices": [
          "insulting others",
          "acting respectfully",
          "hiding all mistakes",
          "refusing peace"
        ],
        "correct": 1,
        "why": "Religious Education should shape respectful conduct."
      }
    ]
  },
  {
    "id": "p4-cre-worshipping-community",
    "themeId": "p4-cre",
    "themeName": "Christian Religious Education",
    "title": "The Worshipping Community",
    "estMinutes": 30,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P4 Religious Education beta: built from the NCDC/MoES Primary 4 Abridged Curriculum for Uganda; confirm against the full standard P4 CRE/IRE syllabus before premium-final release. The Worshipping Community helps P4 learners connect Christian teaching with respectful conduct, service and daily choices.",
      "learningObjectives": [
        "Explain the main idea of The Worshipping Community.",
        "Name the key practices, people or values in the topic.",
        "Apply the topic respectfully in daily life.",
        "Answer simple P4 Religious Education questions in full sentences."
      ],
      "whatYouNeedToKnow": [
        "A worshipping community honours God together through prayer and praise.",
        "Learners should connect the teaching to values such as love, obedience, service, forgiveness, peace and respect.",
        "This topic includes: Christian activities in worshipping God.",
        "This topic includes: Christian joint activities and experiences.",
        "This topic includes: Importance of Christian joint activities.",
        "This topic includes: Christian life in worship."
      ],
      "worked": {
        "problem": "How can a P4 learner apply the lesson of The Worshipping Community at school?",
        "steps": [
          "Identify the main value or practice in the topic.",
          "Choose a real school situation.",
          "Write one respectful action a learner can take."
        ],
        "answer": "A P4 learner can apply The Worshipping Community by choosing to pray, sing, give thanks and take part respectfully in worship."
      },
      "commonMistakes": [
        "Writing one-word answers without explanation.",
        "Using disrespectful words about faith, worship or other people.",
        "Forgetting to connect the topic to daily life.",
        "Treating this beta source as premium-final before the full standard P4 RE syllabus is checked."
      ],
      "recap": [
        "A worshipping community honours God together through prayer and praise.",
        "Learners should connect the teaching to values such as love, obedience, service, forgiveness, peace and respect.",
        "This topic includes: Christian activities in worshipping God."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-cre-worshipping-community-key-teaching",
        "title": "1. Key teaching",
        "modules": [
          {
            "moduleId": "p4-cre-worshipping-community-key",
            "title": "Understanding The Worshipping Community",
            "bigIdea": "Christian Religious Education connects faith teaching with values and daily conduct.",
            "learnIt": [
              "The Worshipping Community is part of the P4 CRE abridged curriculum map.",
              "Learners study christian activities in worshipping god.",
              "Learners study christian joint activities and experiences.",
              "Learners study importance of christian joint activities.",
              "Learners study christian life in worship.",
              "Learners study types of prayer."
            ],
            "workedExample": {
              "question": "Name one thing studied under The Worshipping Community.",
              "steps": [
                "Read the listed parts of the topic.",
                "Choose one clear part.",
                "Write it as a full answer."
              ],
              "answer": "Christian activities in worshipping God"
            },
            "tryThis": {
              "question": "Which belongs to The Worshipping Community?",
              "choices": [
                "A random mathematics formula",
                "A road distance only",
                "Christian activities in worshipping God",
                "A weather graph only"
              ],
              "correct": 2,
              "explanation": "The correct choice is part of the mapped topic."
            },
            "imageUrl": "/images/re/p4-cre-community-service-peace.svg",
            "imageCaption": "CRE community, service, decision-making and peace."
          }
        ]
      },
      {
        "subtopicId": "p4-cre-worshipping-community-application",
        "title": "2. Daily-life application",
        "modules": [
          {
            "moduleId": "p4-cre-worshipping-community-life",
            "title": "Applying the lesson",
            "bigIdea": "A worshipping community honours God together through prayer and praise.",
            "learnIt": [
              "A learner can apply this topic by choosing to pray, sing, give thanks and take part respectfully in worship.",
              "The answer should be respectful, practical and connected to daily life.",
              "If the question is about worship or scripture, learners should ask a teacher or trusted adult for correct details."
            ],
            "workedExample": {
              "question": "Write one respectful action connected to this topic.",
              "steps": [
                "Think of the topic value.",
                "Think of home, school or community.",
                "Write a practical action."
              ],
              "answer": "A P4 learner can apply The Worshipping Community by choosing to pray, sing, give thanks and take part respectfully in worship."
            },
            "tryThis": {
              "question": "The best way to apply Religious Education is to:",
              "choices": [
                "mock other people",
                "spread quarrels",
                "ignore good advice",
                "choose to pray, sing, give thanks and take part respectfully in worship"
              ],
              "correct": 3,
              "explanation": "This action applies the topic respectfully in daily life."
            },
            "imageUrl": "/images/re/p4-cre-community-service-peace.svg",
            "imageCaption": "CRE community, service, decision-making and peace."
          }
        ]
      },
      {
        "subtopicId": "p4-cre-worshipping-community-reasoning",
        "title": "3. Reasoning and respectful application",
        "modules": [
          {
            "moduleId": "p4-cre-worshipping-community-reasoning-module",
            "title": "Reasoning and respectful application",
            "bigIdea": "Religious Education should shape respectful thinking and daily conduct, not only memorisation.",
            "imageUrl": "/images/re/p4-cre-community-service-peace.svg",
            "imageCaption": "CRE community, service, decision-making and peace.",
            "learnIt": [
              "Name the main teaching in The Worshipping Community.",
              "Explain the value behind the teaching in simple words.",
              "Give one practical action a P4 learner can do at home, school or community.",
              "Use respectful language about faith, worship and other people."
            ],
            "workedExample": {
              "question": "Write two sentences showing how The Worshipping Community can guide a P4 learner.",
              "steps": [
                "Name the teaching.",
                "Explain the value.",
                "Give a practical respectful action."
              ],
              "answer": "A good answer explains The Worshipping Community and gives a respectful daily-life action."
            },
            "tryThis": {
              "question": "A strong RE answer should:",
              "choices": [
                "explain and apply the teaching respectfully",
                "mock other people",
                "memorise words only",
                "ignore daily life"
              ],
              "correct": 0,
              "explanation": "A strong answer explains the teaching and applies it respectfully."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "The Worshipping Community should help a learner:",
        "choices": [
          "mock other people",
          "choose to pray, sing, give thanks and take part respectfully in worship",
          "steal from others",
          "spread fights"
        ],
        "correct": 1,
        "why": "A worshipping community honours God together through prayer and praise."
      },
      {
        "q": "A good CRE answer should connect Bible/faith teaching to:",
        "choices": [
          "only noise",
          "only money",
          "daily life and good conduct",
          "only roads"
        ],
        "correct": 2,
        "why": "CRE should connect faith teaching to daily life."
      },
      {
        "q": "When speaking about people and beliefs, a learner should be:",
        "choices": [
          "insulting",
          "careless",
          "violent",
          "respectful"
        ],
        "correct": 3,
        "why": "Respectful speech supports peace and good learning."
      },
      {
        "q": "This topic includes Christian activities in worshipping God.",
        "choices": [
          "True",
          "False",
          "Only for P7",
          "Only for Mathematics"
        ],
        "correct": 0,
        "why": "Christian activities in worshipping God is listed in the NCDC/MoES P4 abridged map for this topic."
      },
      {
        "q": "Which is connected to this topic?",
        "choices": [
          "weather instruments only",
          "Christian joint activities and experiences",
          "money conversion only",
          "road construction only"
        ],
        "correct": 1,
        "why": "Christian joint activities and experiences is part of the topic scope."
      },
      {
        "q": "A learner shows good Religious Education learning by:",
        "choices": [
          "insulting others",
          "hiding all mistakes",
          "acting respectfully",
          "refusing peace"
        ],
        "correct": 2,
        "why": "Religious Education should shape respectful conduct."
      }
    ]
  },
  {
    "id": "p4-cre-christian-community",
    "themeId": "p4-cre",
    "themeName": "Christian Religious Education",
    "title": "The Christian Community",
    "estMinutes": 30,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P4 Religious Education beta: built from the NCDC/MoES Primary 4 Abridged Curriculum for Uganda; confirm against the full standard P4 CRE/IRE syllabus before premium-final release. The Christian Community helps P4 learners connect Christian teaching with respectful conduct, service and daily choices.",
      "learningObjectives": [
        "Explain the main idea of The Christian Community.",
        "Name the key practices, people or values in the topic.",
        "Apply the topic respectfully in daily life.",
        "Answer simple P4 Religious Education questions in full sentences."
      ],
      "whatYouNeedToKnow": [
        "The Christian community grows through fellowship, service and unity.",
        "Learners should connect the teaching to values such as love, obedience, service, forgiveness, peace and respect.",
        "This topic includes: Meaning of the Church.",
        "This topic includes: Events and activities of the Early Church.",
        "This topic includes: Missionary work in the first century.",
        "This topic includes: Missionary work in Uganda."
      ],
      "worked": {
        "problem": "How can a P4 learner apply the lesson of The Christian Community at school?",
        "steps": [
          "Identify the main value or practice in the topic.",
          "Choose a real school situation.",
          "Write one respectful action a learner can take."
        ],
        "answer": "A P4 learner can apply The Christian Community by choosing to share, help needy people and speak respectfully about denominations."
      },
      "commonMistakes": [
        "Writing one-word answers without explanation.",
        "Using disrespectful words about faith, worship or other people.",
        "Forgetting to connect the topic to daily life.",
        "Treating this beta source as premium-final before the full standard P4 RE syllabus is checked."
      ],
      "recap": [
        "The Christian community grows through fellowship, service and unity.",
        "Learners should connect the teaching to values such as love, obedience, service, forgiveness, peace and respect.",
        "This topic includes: Meaning of the Church."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-cre-christian-community-key-teaching",
        "title": "1. Key teaching",
        "modules": [
          {
            "moduleId": "p4-cre-christian-community-key",
            "title": "Understanding The Christian Community",
            "bigIdea": "Christian Religious Education connects faith teaching with values and daily conduct.",
            "learnIt": [
              "The Christian Community is part of the P4 CRE abridged curriculum map.",
              "Learners study meaning of the church.",
              "Learners study events and activities of the early church.",
              "Learners study missionary work in the first century.",
              "Learners study missionary work in uganda.",
              "Learners study uganda martyrs and the growth of the church."
            ],
            "workedExample": {
              "question": "Name one thing studied under The Christian Community.",
              "steps": [
                "Read the listed parts of the topic.",
                "Choose one clear part.",
                "Write it as a full answer."
              ],
              "answer": "Meaning of the Church"
            },
            "tryThis": {
              "question": "Which belongs to The Christian Community?",
              "choices": [
                "A random mathematics formula",
                "A road distance only",
                "A weather graph only",
                "Meaning of the Church"
              ],
              "correct": 3,
              "explanation": "The correct choice is part of the mapped topic."
            },
            "imageUrl": "/images/re/p4-cre-community-service-peace.svg",
            "imageCaption": "CRE community, service, decision-making and peace."
          }
        ]
      },
      {
        "subtopicId": "p4-cre-christian-community-application",
        "title": "2. Daily-life application",
        "modules": [
          {
            "moduleId": "p4-cre-christian-community-life",
            "title": "Applying the lesson",
            "bigIdea": "The Christian community grows through fellowship, service and unity.",
            "learnIt": [
              "A learner can apply this topic by choosing to share, help needy people and speak respectfully about denominations.",
              "The answer should be respectful, practical and connected to daily life.",
              "If the question is about worship or scripture, learners should ask a teacher or trusted adult for correct details."
            ],
            "workedExample": {
              "question": "Write one respectful action connected to this topic.",
              "steps": [
                "Think of the topic value.",
                "Think of home, school or community.",
                "Write a practical action."
              ],
              "answer": "A P4 learner can apply The Christian Community by choosing to share, help needy people and speak respectfully about denominations."
            },
            "tryThis": {
              "question": "The best way to apply Religious Education is to:",
              "choices": [
                "choose to share, help needy people and speak respectfully about denominations",
                "mock other people",
                "spread quarrels",
                "ignore good advice"
              ],
              "correct": 0,
              "explanation": "This action applies the topic respectfully in daily life."
            },
            "imageUrl": "/images/re/p4-cre-community-service-peace.svg",
            "imageCaption": "CRE community, service, decision-making and peace."
          }
        ]
      },
      {
        "subtopicId": "p4-cre-christian-community-reasoning",
        "title": "3. Reasoning and respectful application",
        "modules": [
          {
            "moduleId": "p4-cre-christian-community-reasoning-module",
            "title": "Reasoning and respectful application",
            "bigIdea": "Religious Education should shape respectful thinking and daily conduct, not only memorisation.",
            "imageUrl": "/images/re/p4-cre-community-service-peace.svg",
            "imageCaption": "CRE community, service, decision-making and peace.",
            "learnIt": [
              "Name the main teaching in The Christian Community.",
              "Explain the value behind the teaching in simple words.",
              "Give one practical action a P4 learner can do at home, school or community.",
              "Use respectful language about faith, worship and other people."
            ],
            "workedExample": {
              "question": "Write two sentences showing how The Christian Community can guide a P4 learner.",
              "steps": [
                "Name the teaching.",
                "Explain the value.",
                "Give a practical respectful action."
              ],
              "answer": "A good answer explains The Christian Community and gives a respectful daily-life action."
            },
            "tryThis": {
              "question": "A strong RE answer should:",
              "choices": [
                "mock other people",
                "explain and apply the teaching respectfully",
                "memorise words only",
                "ignore daily life"
              ],
              "correct": 1,
              "explanation": "A strong answer explains the teaching and applies it respectfully."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "The Christian Community should help a learner:",
        "choices": [
          "mock other people",
          "steal from others",
          "choose to share, help needy people and speak respectfully about denominations",
          "spread fights"
        ],
        "correct": 2,
        "why": "The Christian community grows through fellowship, service and unity."
      },
      {
        "q": "A good CRE answer should connect Bible/faith teaching to:",
        "choices": [
          "only noise",
          "only money",
          "only roads",
          "daily life and good conduct"
        ],
        "correct": 3,
        "why": "CRE should connect faith teaching to daily life."
      },
      {
        "q": "When speaking about people and beliefs, a learner should be:",
        "choices": [
          "respectful",
          "insulting",
          "careless",
          "violent"
        ],
        "correct": 0,
        "why": "Respectful speech supports peace and good learning."
      },
      {
        "q": "This topic includes Meaning of the Church.",
        "choices": [
          "False",
          "True",
          "Only for P7",
          "Only for Mathematics"
        ],
        "correct": 1,
        "why": "Meaning of the Church is listed in the NCDC/MoES P4 abridged map for this topic."
      },
      {
        "q": "Which is connected to this topic?",
        "choices": [
          "weather instruments only",
          "money conversion only",
          "Events and activities of the Early Church",
          "road construction only"
        ],
        "correct": 2,
        "why": "Events and activities of the Early Church is part of the topic scope."
      },
      {
        "q": "A learner shows good Religious Education learning by:",
        "choices": [
          "insulting others",
          "hiding all mistakes",
          "refusing peace",
          "acting respectfully"
        ],
        "correct": 3,
        "why": "Religious Education should shape respectful conduct."
      }
    ]
  },
  {
    "id": "p4-cre-jesus-example-service",
    "themeId": "p4-cre",
    "themeName": "Christian Religious Education",
    "title": "Jesus Our Example in Service",
    "estMinutes": 30,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P4 Religious Education beta: built from the NCDC/MoES Primary 4 Abridged Curriculum for Uganda; confirm against the full standard P4 CRE/IRE syllabus before premium-final release. Jesus Our Example in Service helps P4 learners connect Christian teaching with respectful conduct, service and daily choices.",
      "learningObjectives": [
        "Explain the main idea of Jesus Our Example in Service.",
        "Name the key practices, people or values in the topic.",
        "Apply the topic respectfully in daily life.",
        "Answer simple P4 Religious Education questions in full sentences."
      ],
      "whatYouNeedToKnow": [
        "Jesus’ example teaches humble and voluntary service.",
        "Learners should connect the teaching to values such as love, obedience, service, forgiveness, peace and respect.",
        "Service should be practical, safe and helpful to other people.",
        "This topic includes: Ways Jesus served others.",
        "This topic includes: Jesus serving His parents and other people.",
        "This topic includes: Good service in the community.",
        "This topic includes: Unpaid service."
      ],
      "worked": {
        "problem": "How can a P4 learner apply the lesson of Jesus Our Example in Service at school?",
        "steps": [
          "Identify the main value or practice in the topic.",
          "Choose a real school situation.",
          "Write one respectful action a learner can take."
        ],
        "answer": "A P4 learner can apply Jesus Our Example in Service by choosing to serve at home, school and community without demanding payment."
      },
      "commonMistakes": [
        "Writing one-word answers without explanation.",
        "Using disrespectful words about faith, worship or other people.",
        "Forgetting to connect the topic to daily life.",
        "Treating this beta source as premium-final before the full standard P4 RE syllabus is checked."
      ],
      "recap": [
        "Jesus’ example teaches humble and voluntary service.",
        "Learners should connect the teaching to values such as love, obedience, service, forgiveness, peace and respect.",
        "Service should be practical, safe and helpful to other people."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-cre-jesus-example-service-key-teaching",
        "title": "1. Key teaching",
        "modules": [
          {
            "moduleId": "p4-cre-jesus-example-service-key",
            "title": "Understanding Jesus Our Example in Service",
            "bigIdea": "Christian Religious Education connects faith teaching with values and daily conduct.",
            "learnIt": [
              "Jesus Our Example in Service is part of the P4 CRE abridged curriculum map.",
              "Learners study ways jesus served others.",
              "Learners study jesus serving his parents and other people.",
              "Learners study good service in the community.",
              "Learners study unpaid service.",
              "Learners study voluntary service."
            ],
            "workedExample": {
              "question": "Name one thing studied under Jesus Our Example in Service.",
              "steps": [
                "Read the listed parts of the topic.",
                "Choose one clear part.",
                "Write it as a full answer."
              ],
              "answer": "Ways Jesus served others"
            },
            "tryThis": {
              "question": "Which belongs to Jesus Our Example in Service?",
              "choices": [
                "Ways Jesus served others",
                "A random mathematics formula",
                "A road distance only",
                "A weather graph only"
              ],
              "correct": 0,
              "explanation": "The correct choice is part of the mapped topic."
            },
            "imageUrl": "/images/re/p4-cre-community-service-peace.svg",
            "imageCaption": "CRE community, service, decision-making and peace."
          }
        ]
      },
      {
        "subtopicId": "p4-cre-jesus-example-service-application",
        "title": "2. Daily-life application",
        "modules": [
          {
            "moduleId": "p4-cre-jesus-example-service-life",
            "title": "Applying the lesson",
            "bigIdea": "Jesus’ example teaches humble and voluntary service.",
            "learnIt": [
              "A learner can apply this topic by choosing to serve at home, school and community without demanding payment.",
              "The answer should be respectful, practical and connected to daily life.",
              "If the question is about worship or scripture, learners should ask a teacher or trusted adult for correct details."
            ],
            "workedExample": {
              "question": "Write one respectful action connected to this topic.",
              "steps": [
                "Think of the topic value.",
                "Think of home, school or community.",
                "Write a practical action."
              ],
              "answer": "A P4 learner can apply Jesus Our Example in Service by choosing to serve at home, school and community without demanding payment."
            },
            "tryThis": {
              "question": "The best way to apply Religious Education is to:",
              "choices": [
                "mock other people",
                "choose to serve at home, school and community without demanding payment",
                "spread quarrels",
                "ignore good advice"
              ],
              "correct": 1,
              "explanation": "This action applies the topic respectfully in daily life."
            },
            "imageUrl": "/images/re/p4-cre-community-service-peace.svg",
            "imageCaption": "CRE community, service, decision-making and peace."
          }
        ]
      },
      {
        "subtopicId": "p4-cre-jesus-example-service-reasoning",
        "title": "3. Reasoning and respectful application",
        "modules": [
          {
            "moduleId": "p4-cre-jesus-example-service-reasoning-module",
            "title": "Reasoning and respectful application",
            "bigIdea": "Religious Education should shape respectful thinking and daily conduct, not only memorisation.",
            "imageUrl": "/images/re/p4-cre-community-service-peace.svg",
            "imageCaption": "CRE community, service, decision-making and peace.",
            "learnIt": [
              "Name the main teaching in Jesus Our Example in Service.",
              "Explain the value behind the teaching in simple words.",
              "Give one practical action a P4 learner can do at home, school or community.",
              "Use respectful language about faith, worship and other people."
            ],
            "workedExample": {
              "question": "Write two sentences showing how Jesus Our Example in Service can guide a P4 learner.",
              "steps": [
                "Name the teaching.",
                "Explain the value.",
                "Give a practical respectful action."
              ],
              "answer": "A good answer explains Jesus Our Example in Service and gives a respectful daily-life action."
            },
            "tryThis": {
              "question": "A strong RE answer should:",
              "choices": [
                "mock other people",
                "memorise words only",
                "explain and apply the teaching respectfully",
                "ignore daily life"
              ],
              "correct": 2,
              "explanation": "A strong answer explains the teaching and applies it respectfully."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Jesus Our Example in Service should help a learner:",
        "choices": [
          "mock other people",
          "steal from others",
          "spread fights",
          "choose to serve at home, school and community without demanding payment"
        ],
        "correct": 3,
        "why": "Jesus’ example teaches humble and voluntary service."
      },
      {
        "q": "A good CRE answer should connect Bible/faith teaching to:",
        "choices": [
          "daily life and good conduct",
          "only noise",
          "only money",
          "only roads"
        ],
        "correct": 0,
        "why": "CRE should connect faith teaching to daily life."
      },
      {
        "q": "When speaking about people and beliefs, a learner should be:",
        "choices": [
          "insulting",
          "respectful",
          "careless",
          "violent"
        ],
        "correct": 1,
        "why": "Respectful speech supports peace and good learning."
      },
      {
        "q": "This topic includes Ways Jesus served others.",
        "choices": [
          "False",
          "Only for P7",
          "True",
          "Only for Mathematics"
        ],
        "correct": 2,
        "why": "Ways Jesus served others is listed in the NCDC/MoES P4 abridged map for this topic."
      },
      {
        "q": "Which is connected to this topic?",
        "choices": [
          "weather instruments only",
          "money conversion only",
          "road construction only",
          "Jesus serving His parents and other people"
        ],
        "correct": 3,
        "why": "Jesus serving His parents and other people is part of the topic scope."
      },
      {
        "q": "A learner shows good Religious Education learning by:",
        "choices": [
          "acting respectfully",
          "insulting others",
          "hiding all mistakes",
          "refusing peace"
        ],
        "correct": 0,
        "why": "Religious Education should shape respectful conduct."
      }
    ]
  },
  {
    "id": "p4-cre-decisions-as-christians",
    "themeId": "p4-cre",
    "themeName": "Christian Religious Education",
    "title": "Making Our Decisions as Christians",
    "estMinutes": 30,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P4 Religious Education beta: built from the NCDC/MoES Primary 4 Abridged Curriculum for Uganda; confirm against the full standard P4 CRE/IRE syllabus before premium-final release. Making Our Decisions as Christians helps P4 learners connect Christian teaching with respectful conduct, service and daily choices.",
      "learningObjectives": [
        "Explain the main idea of Making Our Decisions as Christians.",
        "Name the key practices, people or values in the topic.",
        "Apply the topic respectfully in daily life.",
        "Answer simple P4 Religious Education questions in full sentences."
      ],
      "whatYouNeedToKnow": [
        "Christian decision-making considers God, consequences and other people.",
        "Learners should connect the teaching to values such as love, obedience, service, forgiveness, peace and respect.",
        "This topic includes: Meaning of decision-making.",
        "This topic includes: Good and bad decisions.",
        "This topic includes: Importance and consequences of decisions.",
        "This topic includes: Decisions in the Bible."
      ],
      "worked": {
        "problem": "How can a P4 learner apply the lesson of Making Our Decisions as Christians at school?",
        "steps": [
          "Identify the main value or practice in the topic.",
          "Choose a real school situation.",
          "Write one respectful action a learner can take."
        ],
        "answer": "A P4 learner can apply Making Our Decisions as Christians by choosing to pray, seek wise advice and choose what is right before acting."
      },
      "commonMistakes": [
        "Writing one-word answers without explanation.",
        "Using disrespectful words about faith, worship or other people.",
        "Forgetting to connect the topic to daily life.",
        "Treating this beta source as premium-final before the full standard P4 RE syllabus is checked."
      ],
      "recap": [
        "Christian decision-making considers God, consequences and other people.",
        "Learners should connect the teaching to values such as love, obedience, service, forgiveness, peace and respect.",
        "This topic includes: Meaning of decision-making."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-cre-decisions-as-christians-key-teaching",
        "title": "1. Key teaching",
        "modules": [
          {
            "moduleId": "p4-cre-decisions-as-christians-key",
            "title": "Understanding Making Our Decisions as Christians",
            "bigIdea": "Christian Religious Education connects faith teaching with values and daily conduct.",
            "learnIt": [
              "Making Our Decisions as Christians is part of the P4 CRE abridged curriculum map.",
              "Learners study meaning of decision-making.",
              "Learners study good and bad decisions.",
              "Learners study importance and consequences of decisions.",
              "Learners study decisions in the bible.",
              "Learners study how decisions can change one's direction in life."
            ],
            "workedExample": {
              "question": "Name one thing studied under Making Our Decisions as Christians.",
              "steps": [
                "Read the listed parts of the topic.",
                "Choose one clear part.",
                "Write it as a full answer."
              ],
              "answer": "Meaning of decision-making"
            },
            "tryThis": {
              "question": "Which belongs to Making Our Decisions as Christians?",
              "choices": [
                "A random mathematics formula",
                "Meaning of decision-making",
                "A road distance only",
                "A weather graph only"
              ],
              "correct": 1,
              "explanation": "The correct choice is part of the mapped topic."
            },
            "imageUrl": "/images/re/p4-cre-community-service-peace.svg",
            "imageCaption": "CRE community, service, decision-making and peace."
          }
        ]
      },
      {
        "subtopicId": "p4-cre-decisions-as-christians-application",
        "title": "2. Daily-life application",
        "modules": [
          {
            "moduleId": "p4-cre-decisions-as-christians-life",
            "title": "Applying the lesson",
            "bigIdea": "Christian decision-making considers God, consequences and other people.",
            "learnIt": [
              "A learner can apply this topic by choosing to pray, seek wise advice and choose what is right before acting.",
              "The answer should be respectful, practical and connected to daily life.",
              "If the question is about worship or scripture, learners should ask a teacher or trusted adult for correct details."
            ],
            "workedExample": {
              "question": "Write one respectful action connected to this topic.",
              "steps": [
                "Think of the topic value.",
                "Think of home, school or community.",
                "Write a practical action."
              ],
              "answer": "A P4 learner can apply Making Our Decisions as Christians by choosing to pray, seek wise advice and choose what is right before acting."
            },
            "tryThis": {
              "question": "The best way to apply Religious Education is to:",
              "choices": [
                "mock other people",
                "spread quarrels",
                "choose to pray, seek wise advice and choose what is right before acting",
                "ignore good advice"
              ],
              "correct": 2,
              "explanation": "This action applies the topic respectfully in daily life."
            },
            "imageUrl": "/images/re/p4-cre-community-service-peace.svg",
            "imageCaption": "CRE community, service, decision-making and peace."
          }
        ]
      },
      {
        "subtopicId": "p4-cre-decisions-as-christians-reasoning",
        "title": "3. Reasoning and respectful application",
        "modules": [
          {
            "moduleId": "p4-cre-decisions-as-christians-reasoning-module",
            "title": "Reasoning and respectful application",
            "bigIdea": "Religious Education should shape respectful thinking and daily conduct, not only memorisation.",
            "imageUrl": "/images/re/p4-cre-community-service-peace.svg",
            "imageCaption": "CRE community, service, decision-making and peace.",
            "learnIt": [
              "Name the main teaching in Making Our Decisions as Christians.",
              "Explain the value behind the teaching in simple words.",
              "Give one practical action a P4 learner can do at home, school or community.",
              "Use respectful language about faith, worship and other people."
            ],
            "workedExample": {
              "question": "Write two sentences showing how Making Our Decisions as Christians can guide a P4 learner.",
              "steps": [
                "Name the teaching.",
                "Explain the value.",
                "Give a practical respectful action."
              ],
              "answer": "A good answer explains Making Our Decisions as Christians and gives a respectful daily-life action."
            },
            "tryThis": {
              "question": "A strong RE answer should:",
              "choices": [
                "mock other people",
                "memorise words only",
                "ignore daily life",
                "explain and apply the teaching respectfully"
              ],
              "correct": 3,
              "explanation": "A strong answer explains the teaching and applies it respectfully."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Making Our Decisions as Christians should help a learner:",
        "choices": [
          "choose to pray, seek wise advice and choose what is right before acting",
          "mock other people",
          "steal from others",
          "spread fights"
        ],
        "correct": 0,
        "why": "Christian decision-making considers God, consequences and other people."
      },
      {
        "q": "A good CRE answer should connect Bible/faith teaching to:",
        "choices": [
          "only noise",
          "daily life and good conduct",
          "only money",
          "only roads"
        ],
        "correct": 1,
        "why": "CRE should connect faith teaching to daily life."
      },
      {
        "q": "When speaking about people and beliefs, a learner should be:",
        "choices": [
          "insulting",
          "careless",
          "respectful",
          "violent"
        ],
        "correct": 2,
        "why": "Respectful speech supports peace and good learning."
      },
      {
        "q": "This topic includes Meaning of decision-making.",
        "choices": [
          "False",
          "Only for P7",
          "Only for Mathematics",
          "True"
        ],
        "correct": 3,
        "why": "Meaning of decision-making is listed in the NCDC/MoES P4 abridged map for this topic."
      },
      {
        "q": "Which is connected to this topic?",
        "choices": [
          "Good and bad decisions",
          "weather instruments only",
          "money conversion only",
          "road construction only"
        ],
        "correct": 0,
        "why": "Good and bad decisions is part of the topic scope."
      },
      {
        "q": "A learner shows good Religious Education learning by:",
        "choices": [
          "insulting others",
          "acting respectfully",
          "hiding all mistakes",
          "refusing peace"
        ],
        "correct": 1,
        "why": "Religious Education should shape respectful conduct."
      }
    ]
  },
  {
    "id": "p4-cre-peace",
    "themeId": "p4-cre",
    "themeName": "Christian Religious Education",
    "title": "Peace",
    "estMinutes": 30,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P4 Religious Education beta: built from the NCDC/MoES Primary 4 Abridged Curriculum for Uganda; confirm against the full standard P4 CRE/IRE syllabus before premium-final release. Peace helps P4 learners connect Christian teaching with respectful conduct, service and daily choices.",
      "learningObjectives": [
        "Explain the main idea of Peace.",
        "Name the key practices, people or values in the topic.",
        "Apply the topic respectfully in daily life.",
        "Answer simple P4 Religious Education questions in full sentences."
      ],
      "whatYouNeedToKnow": [
        "Peace is kept through forgiveness, respect and reconciliation.",
        "Learners should connect the teaching to values such as love, obedience, service, forgiveness, peace and respect.",
        "Peace requires forgiveness, dialogue, respect and reconciliation.",
        "This topic includes: Meaning of peace.",
        "This topic includes: Keeping peace through prayer and obedience to God's commandments.",
        "This topic includes: Peace in African societies.",
        "This topic includes: Peace in the Bible."
      ],
      "worked": {
        "problem": "How can a P4 learner apply the lesson of Peace at school?",
        "steps": [
          "Identify the main value or practice in the topic.",
          "Choose a real school situation.",
          "Write one respectful action a learner can take."
        ],
        "answer": "A P4 learner can apply Peace by choosing to apologise, forgive, use dialogue and seek reconciliation."
      },
      "commonMistakes": [
        "Writing one-word answers without explanation.",
        "Using disrespectful words about faith, worship or other people.",
        "Forgetting to connect the topic to daily life.",
        "Treating this beta source as premium-final before the full standard P4 RE syllabus is checked."
      ],
      "recap": [
        "Peace is kept through forgiveness, respect and reconciliation.",
        "Learners should connect the teaching to values such as love, obedience, service, forgiveness, peace and respect.",
        "Peace requires forgiveness, dialogue, respect and reconciliation."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-cre-peace-key-teaching",
        "title": "1. Key teaching",
        "modules": [
          {
            "moduleId": "p4-cre-peace-key",
            "title": "Understanding Peace",
            "bigIdea": "Christian Religious Education connects faith teaching with values and daily conduct.",
            "learnIt": [
              "Peace is part of the P4 CRE abridged curriculum map.",
              "Learners study meaning of peace.",
              "Learners study keeping peace through prayer and obedience to god's commandments.",
              "Learners study peace in african societies.",
              "Learners study peace in the bible.",
              "Learners study need for reconciliation."
            ],
            "workedExample": {
              "question": "Name one thing studied under Peace.",
              "steps": [
                "Read the listed parts of the topic.",
                "Choose one clear part.",
                "Write it as a full answer."
              ],
              "answer": "Meaning of peace"
            },
            "tryThis": {
              "question": "Which belongs to Peace?",
              "choices": [
                "A random mathematics formula",
                "A road distance only",
                "Meaning of peace",
                "A weather graph only"
              ],
              "correct": 2,
              "explanation": "The correct choice is part of the mapped topic."
            },
            "imageUrl": "/images/re/p4-cre-community-service-peace.svg",
            "imageCaption": "CRE community, service, decision-making and peace."
          }
        ]
      },
      {
        "subtopicId": "p4-cre-peace-application",
        "title": "2. Daily-life application",
        "modules": [
          {
            "moduleId": "p4-cre-peace-life",
            "title": "Applying the lesson",
            "bigIdea": "Peace is kept through forgiveness, respect and reconciliation.",
            "learnIt": [
              "A learner can apply this topic by choosing to apologise, forgive, use dialogue and seek reconciliation.",
              "The answer should be respectful, practical and connected to daily life.",
              "If the question is about worship or scripture, learners should ask a teacher or trusted adult for correct details."
            ],
            "workedExample": {
              "question": "Write one respectful action connected to this topic.",
              "steps": [
                "Think of the topic value.",
                "Think of home, school or community.",
                "Write a practical action."
              ],
              "answer": "A P4 learner can apply Peace by choosing to apologise, forgive, use dialogue and seek reconciliation."
            },
            "tryThis": {
              "question": "The best way to apply Religious Education is to:",
              "choices": [
                "mock other people",
                "spread quarrels",
                "ignore good advice",
                "choose to apologise, forgive, use dialogue and seek reconciliation"
              ],
              "correct": 3,
              "explanation": "This action applies the topic respectfully in daily life."
            },
            "imageUrl": "/images/re/p4-cre-community-service-peace.svg",
            "imageCaption": "CRE community, service, decision-making and peace."
          }
        ]
      },
      {
        "subtopicId": "p4-cre-peace-reasoning",
        "title": "3. Reasoning and respectful application",
        "modules": [
          {
            "moduleId": "p4-cre-peace-reasoning-module",
            "title": "Reasoning and respectful application",
            "bigIdea": "Religious Education should shape respectful thinking and daily conduct, not only memorisation.",
            "imageUrl": "/images/re/p4-cre-community-service-peace.svg",
            "imageCaption": "CRE community, service, decision-making and peace.",
            "learnIt": [
              "Name the main teaching in Peace.",
              "Explain the value behind the teaching in simple words.",
              "Give one practical action a P4 learner can do at home, school or community.",
              "Use respectful language about faith, worship and other people."
            ],
            "workedExample": {
              "question": "Write two sentences showing how Peace can guide a P4 learner.",
              "steps": [
                "Name the teaching.",
                "Explain the value.",
                "Give a practical respectful action."
              ],
              "answer": "A good answer explains Peace and gives a respectful daily-life action."
            },
            "tryThis": {
              "question": "A strong RE answer should:",
              "choices": [
                "explain and apply the teaching respectfully",
                "mock other people",
                "memorise words only",
                "ignore daily life"
              ],
              "correct": 0,
              "explanation": "A strong answer explains the teaching and applies it respectfully."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Peace should help a learner:",
        "choices": [
          "mock other people",
          "choose to apologise, forgive, use dialogue and seek reconciliation",
          "steal from others",
          "spread fights"
        ],
        "correct": 1,
        "why": "Peace is kept through forgiveness, respect and reconciliation."
      },
      {
        "q": "A good CRE answer should connect Bible/faith teaching to:",
        "choices": [
          "only noise",
          "only money",
          "daily life and good conduct",
          "only roads"
        ],
        "correct": 2,
        "why": "CRE should connect faith teaching to daily life."
      },
      {
        "q": "When speaking about people and beliefs, a learner should be:",
        "choices": [
          "insulting",
          "careless",
          "violent",
          "respectful"
        ],
        "correct": 3,
        "why": "Respectful speech supports peace and good learning."
      },
      {
        "q": "This topic includes Meaning of peace.",
        "choices": [
          "True",
          "False",
          "Only for P7",
          "Only for Mathematics"
        ],
        "correct": 0,
        "why": "Meaning of peace is listed in the NCDC/MoES P4 abridged map for this topic."
      },
      {
        "q": "Which is connected to this topic?",
        "choices": [
          "weather instruments only",
          "Keeping peace through prayer and obedience to God's commandments",
          "money conversion only",
          "road construction only"
        ],
        "correct": 1,
        "why": "Keeping peace through prayer and obedience to God's commandments is part of the topic scope."
      },
      {
        "q": "A learner shows good Religious Education learning by:",
        "choices": [
          "insulting others",
          "hiding all mistakes",
          "acting respectfully",
          "refusing peace"
        ],
        "correct": 2,
        "why": "Religious Education should shape respectful conduct."
      }
    ]
  },
  {
    "id": "p4-ire-surat-al-asr",
    "themeId": "p4-ire",
    "themeName": "Islamic Religious Education",
    "title": "Surat Al-Asr",
    "estMinutes": 30,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P4 Religious Education beta: built from the NCDC/MoES Primary 4 Abridged Curriculum for Uganda; confirm against the full standard P4 CRE/IRE syllabus before premium-final release. Surat Al-Asr helps P4 learners connect Islamic teaching with worship, clean conduct, respect and daily choices.",
      "learningObjectives": [
        "Explain the main idea of Surat Al-Asr.",
        "Name the key practices, people or values in the topic.",
        "Apply the topic respectfully in daily life.",
        "Answer simple P4 Religious Education questions in full sentences."
      ],
      "whatYouNeedToKnow": [
        "Surat Al-Asr teaches the value of time, faith, good deeds, truth and patience.",
        "Learners should use respectful wording for Allah, the Qur'an, prayer and Prophet Muhammad (PBUH).",
        "Recitation should be practised with a teacher or knowledgeable adult, and learners should also understand the lesson for daily life.",
        "This topic includes: Reciting Surat Al-Asr.",
        "This topic includes: Meaning of Surat Al-Asr.",
        "This topic includes: Importance of Surat Al-Asr.",
        "This topic includes: Lessons from Surat Al-Asr."
      ],
      "worked": {
        "problem": "How can a P4 learner apply the lesson of Surat Al-Asr at school?",
        "steps": [
          "Identify the main value or practice in the topic.",
          "Choose a real school situation.",
          "Write one respectful action a learner can take."
        ],
        "answer": "A P4 learner can apply Surat Al-Asr by choosing to keep time, do good deeds, speak truth and remain patient."
      },
      "commonMistakes": [
        "Writing one-word answers without explanation.",
        "Using disrespectful words about faith, worship or other people.",
        "Forgetting to connect the topic to daily life.",
        "Treating this beta source as premium-final before the full standard P4 RE syllabus is checked."
      ],
      "recap": [
        "Surat Al-Asr teaches the value of time, faith, good deeds, truth and patience.",
        "Learners should use respectful wording for Allah, the Qur'an, prayer and Prophet Muhammad (PBUH).",
        "Recitation should be practised with a teacher or knowledgeable adult, and learners should also understand the lesson for daily life."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-ire-surat-al-asr-key-teaching",
        "title": "1. Key teaching",
        "modules": [
          {
            "moduleId": "p4-ire-surat-al-asr-key",
            "title": "Understanding Surat Al-Asr",
            "bigIdea": "Islamic Religious Education connects worship, belief and daily conduct.",
            "learnIt": [
              "Surat Al-Asr is part of the P4 IRE abridged curriculum map.",
              "Learners study reciting surat al-asr.",
              "Learners study meaning of surat al-asr.",
              "Learners study importance of surat al-asr.",
              "Learners study lessons from surat al-asr.",
              "Learners study value of time, faith and patience."
            ],
            "workedExample": {
              "question": "Name one thing studied under Surat Al-Asr.",
              "steps": [
                "Read the listed parts of the topic.",
                "Choose one clear part.",
                "Write it as a full answer."
              ],
              "answer": "Reciting Surat Al-Asr"
            },
            "tryThis": {
              "question": "Which belongs to Surat Al-Asr?",
              "choices": [
                "A random mathematics formula",
                "A road distance only",
                "A weather graph only",
                "Reciting Surat Al-Asr"
              ],
              "correct": 3,
              "explanation": "The correct choice is part of the mapped topic."
            },
            "imageUrl": "/images/re/p4-ire-quran-prayer-cleanliness.svg",
            "imageCaption": "IRE Qur’an, prayer and cleanliness."
          }
        ]
      },
      {
        "subtopicId": "p4-ire-surat-al-asr-application",
        "title": "2. Daily-life application",
        "modules": [
          {
            "moduleId": "p4-ire-surat-al-asr-life",
            "title": "Applying the lesson",
            "bigIdea": "Surat Al-Asr teaches the value of time, faith, good deeds, truth and patience.",
            "learnIt": [
              "A learner can apply this topic by choosing to keep time, do good deeds, speak truth and remain patient.",
              "The answer should be respectful, practical and connected to daily life.",
              "If the question is about worship or scripture, learners should ask a teacher or trusted adult for correct details."
            ],
            "workedExample": {
              "question": "Write one respectful action connected to this topic.",
              "steps": [
                "Think of the topic value.",
                "Think of home, school or community.",
                "Write a practical action."
              ],
              "answer": "A P4 learner can apply Surat Al-Asr by choosing to keep time, do good deeds, speak truth and remain patient."
            },
            "tryThis": {
              "question": "The best way to apply Religious Education is to:",
              "choices": [
                "choose to keep time, do good deeds, speak truth and remain patient",
                "mock other people",
                "spread quarrels",
                "ignore good advice"
              ],
              "correct": 0,
              "explanation": "This action applies the topic respectfully in daily life."
            },
            "imageUrl": "/images/re/p4-ire-quran-prayer-cleanliness.svg",
            "imageCaption": "IRE Qur’an, prayer and cleanliness."
          }
        ]
      },
      {
        "subtopicId": "p4-ire-surat-al-asr-reasoning",
        "title": "3. Reasoning and respectful application",
        "modules": [
          {
            "moduleId": "p4-ire-surat-al-asr-reasoning-module",
            "title": "Reasoning and respectful application",
            "bigIdea": "Religious Education should shape respectful thinking and daily conduct, not only memorisation.",
            "imageUrl": "/images/re/p4-ire-quran-prayer-cleanliness.svg",
            "imageCaption": "IRE Qur’an, prayer and cleanliness.",
            "learnIt": [
              "Name the main teaching in Surat Al-Asr.",
              "Explain the value behind the teaching in simple words.",
              "Give one practical action a P4 learner can do at home, school or community.",
              "Use respectful language about Allah, the Qur’an, prayer and Prophet Muhammad (PBUH)."
            ],
            "workedExample": {
              "question": "Write two sentences showing how Surat Al-Asr can guide a P4 learner.",
              "steps": [
                "Name the teaching.",
                "Explain the value.",
                "Give a practical respectful action."
              ],
              "answer": "A good answer explains Surat Al-Asr and gives a respectful daily-life action."
            },
            "tryThis": {
              "question": "A strong RE answer should:",
              "choices": [
                "mock other people",
                "explain and apply the teaching respectfully",
                "memorise words only",
                "ignore daily life"
              ],
              "correct": 1,
              "explanation": "A strong answer explains the teaching and applies it respectfully."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Surat Al-Asr should help a learner:",
        "choices": [
          "mock prayer",
          "be careless with worship",
          "choose to keep time, do good deeds, speak truth and remain patient",
          "spread insults"
        ],
        "correct": 2,
        "why": "Surat Al-Asr teaches the value of time, faith, good deeds, truth and patience."
      },
      {
        "q": "A good IRE answer should connect Islamic teaching to:",
        "choices": [
          "only noise",
          "only money",
          "only roads",
          "daily life and good conduct"
        ],
        "correct": 3,
        "why": "IRE should connect Islamic teaching to daily life."
      },
      {
        "q": "When unsure about a religious practice, a learner should:",
        "choices": [
          "ask a teacher or trusted adult",
          "guess carelessly",
          "mock it",
          "ignore learning"
        ],
        "correct": 0,
        "why": "Trusted guidance prevents mistakes."
      },
      {
        "q": "This topic includes Reciting Surat Al-Asr.",
        "choices": [
          "False",
          "True",
          "Only for P7",
          "Only for Mathematics"
        ],
        "correct": 1,
        "why": "Reciting Surat Al-Asr is listed in the NCDC/MoES P4 abridged map for this topic."
      },
      {
        "q": "Which is connected to this topic?",
        "choices": [
          "weather instruments only",
          "money conversion only",
          "Meaning of Surat Al-Asr",
          "road construction only"
        ],
        "correct": 2,
        "why": "Meaning of Surat Al-Asr is part of the topic scope."
      },
      {
        "q": "A learner shows good Religious Education learning by:",
        "choices": [
          "insulting others",
          "hiding all mistakes",
          "refusing peace",
          "acting respectfully"
        ],
        "correct": 3,
        "why": "Religious Education should shape respectful conduct."
      }
    ]
  },
  {
    "id": "p4-ire-prophet-messenger",
    "themeId": "p4-ire",
    "themeName": "Islamic Religious Education",
    "title": "Prophet/Messenger",
    "estMinutes": 30,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P4 Religious Education beta: built from the NCDC/MoES Primary 4 Abridged Curriculum for Uganda; confirm against the full standard P4 CRE/IRE syllabus before premium-final release. Prophet/Messenger helps P4 learners connect Islamic teaching with worship, clean conduct, respect and daily choices.",
      "learningObjectives": [
        "Explain the main idea of Prophet/Messenger.",
        "Name the key practices, people or values in the topic.",
        "Apply the topic respectfully in daily life.",
        "Answer simple P4 Religious Education questions in full sentences."
      ],
      "whatYouNeedToKnow": [
        "Prophets and messengers deliver Allah’s message and guide people to right conduct.",
        "Learners should use respectful wording for Allah, the Qur'an, prayer and Prophet Muhammad (PBUH).",
        "This topic includes: Meaning of prophet and messenger.",
        "This topic includes: Relationship between prophet and messenger.",
        "This topic includes: Duties of prophets and messengers.",
        "This topic includes: Qualities of a prophet."
      ],
      "worked": {
        "problem": "How can a P4 learner apply the lesson of Prophet/Messenger at school?",
        "steps": [
          "Identify the main value or practice in the topic.",
          "Choose a real school situation.",
          "Write one respectful action a learner can take."
        ],
        "answer": "A P4 learner can apply Prophet/Messenger by choosing to be truthful, patient and trustworthy when given responsibility."
      },
      "commonMistakes": [
        "Writing one-word answers without explanation.",
        "Using disrespectful words about faith, worship or other people.",
        "Forgetting to connect the topic to daily life.",
        "Treating this beta source as premium-final before the full standard P4 RE syllabus is checked."
      ],
      "recap": [
        "Prophets and messengers deliver Allah’s message and guide people to right conduct.",
        "Learners should use respectful wording for Allah, the Qur'an, prayer and Prophet Muhammad (PBUH).",
        "This topic includes: Meaning of prophet and messenger."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-ire-prophet-messenger-key-teaching",
        "title": "1. Key teaching",
        "modules": [
          {
            "moduleId": "p4-ire-prophet-messenger-key",
            "title": "Understanding Prophet/Messenger",
            "bigIdea": "Islamic Religious Education connects worship, belief and daily conduct.",
            "learnIt": [
              "Prophet/Messenger is part of the P4 IRE abridged curriculum map.",
              "Learners study meaning of prophet and messenger.",
              "Learners study relationship between prophet and messenger.",
              "Learners study duties of prophets and messengers.",
              "Learners study qualities of a prophet.",
              "Learners study delivering allah's message."
            ],
            "workedExample": {
              "question": "Name one thing studied under Prophet/Messenger.",
              "steps": [
                "Read the listed parts of the topic.",
                "Choose one clear part.",
                "Write it as a full answer."
              ],
              "answer": "Meaning of prophet and messenger"
            },
            "tryThis": {
              "question": "Which belongs to Prophet/Messenger?",
              "choices": [
                "Meaning of prophet and messenger",
                "A random mathematics formula",
                "A road distance only",
                "A weather graph only"
              ],
              "correct": 0,
              "explanation": "The correct choice is part of the mapped topic."
            },
            "imageUrl": "/images/re/p4-ire-prophets-values.svg",
            "imageCaption": "IRE prophets, Imaan and values."
          }
        ]
      },
      {
        "subtopicId": "p4-ire-prophet-messenger-application",
        "title": "2. Daily-life application",
        "modules": [
          {
            "moduleId": "p4-ire-prophet-messenger-life",
            "title": "Applying the lesson",
            "bigIdea": "Prophets and messengers deliver Allah’s message and guide people to right conduct.",
            "learnIt": [
              "A learner can apply this topic by choosing to be truthful, patient and trustworthy when given responsibility.",
              "The answer should be respectful, practical and connected to daily life.",
              "If the question is about worship or scripture, learners should ask a teacher or trusted adult for correct details."
            ],
            "workedExample": {
              "question": "Write one respectful action connected to this topic.",
              "steps": [
                "Think of the topic value.",
                "Think of home, school or community.",
                "Write a practical action."
              ],
              "answer": "A P4 learner can apply Prophet/Messenger by choosing to be truthful, patient and trustworthy when given responsibility."
            },
            "tryThis": {
              "question": "The best way to apply Religious Education is to:",
              "choices": [
                "mock other people",
                "choose to be truthful, patient and trustworthy when given responsibility",
                "spread quarrels",
                "ignore good advice"
              ],
              "correct": 1,
              "explanation": "This action applies the topic respectfully in daily life."
            },
            "imageUrl": "/images/re/p4-ire-prophets-values.svg",
            "imageCaption": "IRE prophets, Imaan and values."
          }
        ]
      },
      {
        "subtopicId": "p4-ire-prophet-messenger-reasoning",
        "title": "3. Reasoning and respectful application",
        "modules": [
          {
            "moduleId": "p4-ire-prophet-messenger-reasoning-module",
            "title": "Reasoning and respectful application",
            "bigIdea": "Religious Education should shape respectful thinking and daily conduct, not only memorisation.",
            "imageUrl": "/images/re/p4-ire-prophets-values.svg",
            "imageCaption": "IRE prophets, Imaan and values.",
            "learnIt": [
              "Name the main teaching in Prophet/Messenger.",
              "Explain the value behind the teaching in simple words.",
              "Give one practical action a P4 learner can do at home, school or community.",
              "Use respectful language about Allah, the Qur’an, prayer and Prophet Muhammad (PBUH)."
            ],
            "workedExample": {
              "question": "Write two sentences showing how Prophet/Messenger can guide a P4 learner.",
              "steps": [
                "Name the teaching.",
                "Explain the value.",
                "Give a practical respectful action."
              ],
              "answer": "A good answer explains Prophet/Messenger and gives a respectful daily-life action."
            },
            "tryThis": {
              "question": "A strong RE answer should:",
              "choices": [
                "mock other people",
                "memorise words only",
                "explain and apply the teaching respectfully",
                "ignore daily life"
              ],
              "correct": 2,
              "explanation": "A strong answer explains the teaching and applies it respectfully."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Prophet/Messenger should help a learner:",
        "choices": [
          "mock prayer",
          "be careless with worship",
          "spread insults",
          "choose to be truthful, patient and trustworthy when given responsibility"
        ],
        "correct": 3,
        "why": "Prophets and messengers deliver Allah’s message and guide people to right conduct."
      },
      {
        "q": "A good IRE answer should connect Islamic teaching to:",
        "choices": [
          "daily life and good conduct",
          "only noise",
          "only money",
          "only roads"
        ],
        "correct": 0,
        "why": "IRE should connect Islamic teaching to daily life."
      },
      {
        "q": "When unsure about a religious practice, a learner should:",
        "choices": [
          "guess carelessly",
          "ask a teacher or trusted adult",
          "mock it",
          "ignore learning"
        ],
        "correct": 1,
        "why": "Trusted guidance prevents mistakes."
      },
      {
        "q": "This topic includes Meaning of prophet and messenger.",
        "choices": [
          "False",
          "Only for P7",
          "True",
          "Only for Mathematics"
        ],
        "correct": 2,
        "why": "Meaning of prophet and messenger is listed in the NCDC/MoES P4 abridged map for this topic."
      },
      {
        "q": "Which is connected to this topic?",
        "choices": [
          "weather instruments only",
          "money conversion only",
          "road construction only",
          "Relationship between prophet and messenger"
        ],
        "correct": 3,
        "why": "Relationship between prophet and messenger is part of the topic scope."
      },
      {
        "q": "A learner shows good Religious Education learning by:",
        "choices": [
          "acting respectfully",
          "insulting others",
          "hiding all mistakes",
          "refusing peace"
        ],
        "correct": 0,
        "why": "Religious Education should shape respectful conduct."
      }
    ]
  },
  {
    "id": "p4-ire-dress-for-prayer",
    "themeId": "p4-ire",
    "themeName": "Islamic Religious Education",
    "title": "Dress for Prayer",
    "estMinutes": 30,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P4 Religious Education beta: built from the NCDC/MoES Primary 4 Abridged Curriculum for Uganda; confirm against the full standard P4 CRE/IRE syllabus before premium-final release. Dress for Prayer helps P4 learners connect Islamic teaching with worship, clean conduct, respect and daily choices.",
      "learningObjectives": [
        "Explain the main idea of Dress for Prayer.",
        "Name the key practices, people or values in the topic.",
        "Apply the topic respectfully in daily life.",
        "Answer simple P4 Religious Education questions in full sentences."
      ],
      "whatYouNeedToKnow": [
        "Dress for prayer should show cleanliness, modesty and respect for Swalat.",
        "Learners should use respectful wording for Allah, the Qur'an, prayer and Prophet Muhammad (PBUH).",
        "Prayer topics require attention to cleanliness, order, humility and respect for worship.",
        "Cleanliness and decent conduct should be explained as part of worship and healthy daily life.",
        "This topic includes: Usefulness of serving Allah and being peaceful.",
        "This topic includes: Acceptable male dress for prayer.",
        "This topic includes: Acceptable female dress for prayer."
      ],
      "worked": {
        "problem": "How can a P4 learner apply the lesson of Dress for Prayer at school?",
        "steps": [
          "Identify the main value or practice in the topic.",
          "Choose a real school situation.",
          "Write one respectful action a learner can take."
        ],
        "answer": "A P4 learner can apply Dress for Prayer by choosing to prepare for prayer by dressing cleanly, decently and respectfully."
      },
      "commonMistakes": [
        "Writing one-word answers without explanation.",
        "Using disrespectful words about faith, worship or other people.",
        "Forgetting to connect the topic to daily life.",
        "Treating this beta source as premium-final before the full standard P4 RE syllabus is checked."
      ],
      "recap": [
        "Dress for prayer should show cleanliness, modesty and respect for Swalat.",
        "Learners should use respectful wording for Allah, the Qur'an, prayer and Prophet Muhammad (PBUH).",
        "Prayer topics require attention to cleanliness, order, humility and respect for worship."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-ire-dress-for-prayer-key-teaching",
        "title": "1. Key teaching",
        "modules": [
          {
            "moduleId": "p4-ire-dress-for-prayer-key",
            "title": "Understanding Dress for Prayer",
            "bigIdea": "Islamic Religious Education connects worship, belief and daily conduct.",
            "learnIt": [
              "Dress for Prayer is part of the P4 IRE abridged curriculum map.",
              "Learners study usefulness of serving allah and being peaceful.",
              "Learners study acceptable male dress for prayer.",
              "Learners study acceptable female dress for prayer.",
              "Learners study importance of muslim dress for prayer.",
              "Learners study respecting islamic symbols."
            ],
            "workedExample": {
              "question": "Name one thing studied under Dress for Prayer.",
              "steps": [
                "Read the listed parts of the topic.",
                "Choose one clear part.",
                "Write it as a full answer."
              ],
              "answer": "Usefulness of serving Allah and being peaceful"
            },
            "tryThis": {
              "question": "Which belongs to Dress for Prayer?",
              "choices": [
                "A random mathematics formula",
                "Usefulness of serving Allah and being peaceful",
                "A road distance only",
                "A weather graph only"
              ],
              "correct": 1,
              "explanation": "The correct choice is part of the mapped topic."
            },
            "imageUrl": "/images/re/p4-ire-quran-prayer-cleanliness.svg",
            "imageCaption": "IRE Qur’an, prayer and cleanliness."
          }
        ]
      },
      {
        "subtopicId": "p4-ire-dress-for-prayer-application",
        "title": "2. Daily-life application",
        "modules": [
          {
            "moduleId": "p4-ire-dress-for-prayer-life",
            "title": "Applying the lesson",
            "bigIdea": "Dress for prayer should show cleanliness, modesty and respect for Swalat.",
            "learnIt": [
              "A learner can apply this topic by choosing to prepare for prayer by dressing cleanly, decently and respectfully.",
              "The answer should be respectful, practical and connected to daily life.",
              "If the question is about worship or scripture, learners should ask a teacher or trusted adult for correct details."
            ],
            "workedExample": {
              "question": "Write one respectful action connected to this topic.",
              "steps": [
                "Think of the topic value.",
                "Think of home, school or community.",
                "Write a practical action."
              ],
              "answer": "A P4 learner can apply Dress for Prayer by choosing to prepare for prayer by dressing cleanly, decently and respectfully."
            },
            "tryThis": {
              "question": "The best way to apply Religious Education is to:",
              "choices": [
                "mock other people",
                "spread quarrels",
                "choose to prepare for prayer by dressing cleanly, decently and respectfully",
                "ignore good advice"
              ],
              "correct": 2,
              "explanation": "This action applies the topic respectfully in daily life."
            },
            "imageUrl": "/images/re/p4-ire-quran-prayer-cleanliness.svg",
            "imageCaption": "IRE Qur’an, prayer and cleanliness."
          }
        ]
      },
      {
        "subtopicId": "p4-ire-dress-for-prayer-reasoning",
        "title": "3. Reasoning and respectful application",
        "modules": [
          {
            "moduleId": "p4-ire-dress-for-prayer-reasoning-module",
            "title": "Reasoning and respectful application",
            "bigIdea": "Religious Education should shape respectful thinking and daily conduct, not only memorisation.",
            "imageUrl": "/images/re/p4-ire-quran-prayer-cleanliness.svg",
            "imageCaption": "IRE Qur’an, prayer and cleanliness.",
            "learnIt": [
              "Name the main teaching in Dress for Prayer.",
              "Explain the value behind the teaching in simple words.",
              "Give one practical action a P4 learner can do at home, school or community.",
              "Use respectful language about Allah, the Qur’an, prayer and Prophet Muhammad (PBUH)."
            ],
            "workedExample": {
              "question": "Write two sentences showing how Dress for Prayer can guide a P4 learner.",
              "steps": [
                "Name the teaching.",
                "Explain the value.",
                "Give a practical respectful action."
              ],
              "answer": "A good answer explains Dress for Prayer and gives a respectful daily-life action."
            },
            "tryThis": {
              "question": "A strong RE answer should:",
              "choices": [
                "mock other people",
                "memorise words only",
                "ignore daily life",
                "explain and apply the teaching respectfully"
              ],
              "correct": 3,
              "explanation": "A strong answer explains the teaching and applies it respectfully."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Dress for Prayer should help a learner:",
        "choices": [
          "choose to prepare for prayer by dressing cleanly, decently and respectfully",
          "mock prayer",
          "be careless with worship",
          "spread insults"
        ],
        "correct": 0,
        "why": "Dress for prayer should show cleanliness, modesty and respect for Swalat."
      },
      {
        "q": "A good IRE answer should connect Islamic teaching to:",
        "choices": [
          "only noise",
          "daily life and good conduct",
          "only money",
          "only roads"
        ],
        "correct": 1,
        "why": "IRE should connect Islamic teaching to daily life."
      },
      {
        "q": "When unsure about a religious practice, a learner should:",
        "choices": [
          "guess carelessly",
          "mock it",
          "ask a teacher or trusted adult",
          "ignore learning"
        ],
        "correct": 2,
        "why": "Trusted guidance prevents mistakes."
      },
      {
        "q": "This topic includes Usefulness of serving Allah and being peaceful.",
        "choices": [
          "False",
          "Only for P7",
          "Only for Mathematics",
          "True"
        ],
        "correct": 3,
        "why": "Usefulness of serving Allah and being peaceful is listed in the NCDC/MoES P4 abridged map for this topic."
      },
      {
        "q": "Which is connected to this topic?",
        "choices": [
          "Acceptable male dress for prayer",
          "weather instruments only",
          "money conversion only",
          "road construction only"
        ],
        "correct": 0,
        "why": "Acceptable male dress for prayer is part of the topic scope."
      },
      {
        "q": "A learner shows good Religious Education learning by:",
        "choices": [
          "insulting others",
          "acting respectfully",
          "hiding all mistakes",
          "refusing peace"
        ],
        "correct": 1,
        "why": "Religious Education should shape respectful conduct."
      }
    ]
  },
  {
    "id": "p4-ire-impurities",
    "themeId": "p4-ire",
    "themeName": "Islamic Religious Education",
    "title": "Impurities",
    "estMinutes": 30,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P4 Religious Education beta: built from the NCDC/MoES Primary 4 Abridged Curriculum for Uganda; confirm against the full standard P4 CRE/IRE syllabus before premium-final release. Impurities helps P4 learners connect Islamic teaching with worship, clean conduct, respect and daily choices.",
      "learningObjectives": [
        "Explain the main idea of Impurities.",
        "Name the key practices, people or values in the topic.",
        "Apply the topic respectfully in daily life.",
        "Answer simple P4 Religious Education questions in full sentences."
      ],
      "whatYouNeedToKnow": [
        "Avoiding impurities helps a Muslim prepare respectfully for worship.",
        "Learners should use respectful wording for Allah, the Qur'an, prayer and Prophet Muhammad (PBUH).",
        "Cleanliness and decent conduct should be explained as part of worship and healthy daily life.",
        "This topic includes: Meaning of impurities.",
        "This topic includes: Types of impurities.",
        "This topic includes: Examples of impure things.",
        "This topic includes: Cleanliness before prayer."
      ],
      "worked": {
        "problem": "How can a P4 learner apply the lesson of Impurities at school?",
        "steps": [
          "Identify the main value or practice in the topic.",
          "Choose a real school situation.",
          "Write one respectful action a learner can take."
        ],
        "answer": "A P4 learner can apply Impurities by choosing to keep the body, clothes and prayer place clean before worship."
      },
      "commonMistakes": [
        "Writing one-word answers without explanation.",
        "Using disrespectful words about faith, worship or other people.",
        "Forgetting to connect the topic to daily life.",
        "Treating this beta source as premium-final before the full standard P4 RE syllabus is checked."
      ],
      "recap": [
        "Avoiding impurities helps a Muslim prepare respectfully for worship.",
        "Learners should use respectful wording for Allah, the Qur'an, prayer and Prophet Muhammad (PBUH).",
        "Cleanliness and decent conduct should be explained as part of worship and healthy daily life."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-ire-impurities-key-teaching",
        "title": "1. Key teaching",
        "modules": [
          {
            "moduleId": "p4-ire-impurities-key",
            "title": "Understanding Impurities",
            "bigIdea": "Islamic Religious Education connects worship, belief and daily conduct.",
            "learnIt": [
              "Impurities is part of the P4 IRE abridged curriculum map.",
              "Learners study meaning of impurities.",
              "Learners study types of impurities.",
              "Learners study examples of impure things.",
              "Learners study cleanliness before prayer.",
              "Learners study removing impurities."
            ],
            "workedExample": {
              "question": "Name one thing studied under Impurities.",
              "steps": [
                "Read the listed parts of the topic.",
                "Choose one clear part.",
                "Write it as a full answer."
              ],
              "answer": "Meaning of impurities"
            },
            "tryThis": {
              "question": "Which belongs to Impurities?",
              "choices": [
                "A random mathematics formula",
                "A road distance only",
                "Meaning of impurities",
                "A weather graph only"
              ],
              "correct": 2,
              "explanation": "The correct choice is part of the mapped topic."
            },
            "imageUrl": "/images/re/p4-ire-quran-prayer-cleanliness.svg",
            "imageCaption": "IRE Qur’an, prayer and cleanliness."
          }
        ]
      },
      {
        "subtopicId": "p4-ire-impurities-application",
        "title": "2. Daily-life application",
        "modules": [
          {
            "moduleId": "p4-ire-impurities-life",
            "title": "Applying the lesson",
            "bigIdea": "Avoiding impurities helps a Muslim prepare respectfully for worship.",
            "learnIt": [
              "A learner can apply this topic by choosing to keep the body, clothes and prayer place clean before worship.",
              "The answer should be respectful, practical and connected to daily life.",
              "If the question is about worship or scripture, learners should ask a teacher or trusted adult for correct details."
            ],
            "workedExample": {
              "question": "Write one respectful action connected to this topic.",
              "steps": [
                "Think of the topic value.",
                "Think of home, school or community.",
                "Write a practical action."
              ],
              "answer": "A P4 learner can apply Impurities by choosing to keep the body, clothes and prayer place clean before worship."
            },
            "tryThis": {
              "question": "The best way to apply Religious Education is to:",
              "choices": [
                "mock other people",
                "spread quarrels",
                "ignore good advice",
                "choose to keep the body, clothes and prayer place clean before worship"
              ],
              "correct": 3,
              "explanation": "This action applies the topic respectfully in daily life."
            },
            "imageUrl": "/images/re/p4-ire-quran-prayer-cleanliness.svg",
            "imageCaption": "IRE Qur’an, prayer and cleanliness."
          }
        ]
      },
      {
        "subtopicId": "p4-ire-impurities-reasoning",
        "title": "3. Reasoning and respectful application",
        "modules": [
          {
            "moduleId": "p4-ire-impurities-reasoning-module",
            "title": "Reasoning and respectful application",
            "bigIdea": "Religious Education should shape respectful thinking and daily conduct, not only memorisation.",
            "imageUrl": "/images/re/p4-ire-quran-prayer-cleanliness.svg",
            "imageCaption": "IRE Qur’an, prayer and cleanliness.",
            "learnIt": [
              "Name the main teaching in Impurities.",
              "Explain the value behind the teaching in simple words.",
              "Give one practical action a P4 learner can do at home, school or community.",
              "Use respectful language about Allah, the Qur’an, prayer and Prophet Muhammad (PBUH)."
            ],
            "workedExample": {
              "question": "Write two sentences showing how Impurities can guide a P4 learner.",
              "steps": [
                "Name the teaching.",
                "Explain the value.",
                "Give a practical respectful action."
              ],
              "answer": "A good answer explains Impurities and gives a respectful daily-life action."
            },
            "tryThis": {
              "question": "A strong RE answer should:",
              "choices": [
                "explain and apply the teaching respectfully",
                "mock other people",
                "memorise words only",
                "ignore daily life"
              ],
              "correct": 0,
              "explanation": "A strong answer explains the teaching and applies it respectfully."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Impurities should help a learner:",
        "choices": [
          "mock prayer",
          "choose to keep the body, clothes and prayer place clean before worship",
          "be careless with worship",
          "spread insults"
        ],
        "correct": 1,
        "why": "Avoiding impurities helps a Muslim prepare respectfully for worship."
      },
      {
        "q": "A good IRE answer should connect Islamic teaching to:",
        "choices": [
          "only noise",
          "only money",
          "daily life and good conduct",
          "only roads"
        ],
        "correct": 2,
        "why": "IRE should connect Islamic teaching to daily life."
      },
      {
        "q": "When unsure about a religious practice, a learner should:",
        "choices": [
          "guess carelessly",
          "mock it",
          "ignore learning",
          "ask a teacher or trusted adult"
        ],
        "correct": 3,
        "why": "Trusted guidance prevents mistakes."
      },
      {
        "q": "This topic includes Meaning of impurities.",
        "choices": [
          "True",
          "False",
          "Only for P7",
          "Only for Mathematics"
        ],
        "correct": 0,
        "why": "Meaning of impurities is listed in the NCDC/MoES P4 abridged map for this topic."
      },
      {
        "q": "Which is connected to this topic?",
        "choices": [
          "weather instruments only",
          "Types of impurities",
          "money conversion only",
          "road construction only"
        ],
        "correct": 1,
        "why": "Types of impurities is part of the topic scope."
      },
      {
        "q": "A learner shows good Religious Education learning by:",
        "choices": [
          "insulting others",
          "hiding all mistakes",
          "acting respectfully",
          "refusing peace"
        ],
        "correct": 2,
        "why": "Religious Education should shape respectful conduct."
      }
    ]
  },
  {
    "id": "p4-ire-early-converts-islam",
    "themeId": "p4-ire",
    "themeName": "Islamic Religious Education",
    "title": "Early Converts in Islam",
    "estMinutes": 30,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P4 Religious Education beta: built from the NCDC/MoES Primary 4 Abridged Curriculum for Uganda; confirm against the full standard P4 CRE/IRE syllabus before premium-final release. Early Converts in Islam helps P4 learners connect Islamic teaching with worship, clean conduct, respect and daily choices.",
      "learningObjectives": [
        "Explain the main idea of Early Converts in Islam.",
        "Name the key practices, people or values in the topic.",
        "Apply the topic respectfully in daily life.",
        "Answer simple P4 Religious Education questions in full sentences."
      ],
      "whatYouNeedToKnow": [
        "Early converts in Islam teach courage, faith and patience during difficulty.",
        "Learners should use respectful wording for Allah, the Qur'an, prayer and Prophet Muhammad (PBUH).",
        "This topic includes: Meaning of early converts.",
        "This topic includes: Names of early converts in Islam.",
        "This topic includes: Importance of early converts.",
        "This topic includes: Challenges faced by early Muslims."
      ],
      "worked": {
        "problem": "How can a P4 learner apply the lesson of Early Converts in Islam at school?",
        "steps": [
          "Identify the main value or practice in the topic.",
          "Choose a real school situation.",
          "Write one respectful action a learner can take."
        ],
        "answer": "A P4 learner can apply Early Converts in Islam by choosing to show courage and patience when choosing what is right."
      },
      "commonMistakes": [
        "Writing one-word answers without explanation.",
        "Using disrespectful words about faith, worship or other people.",
        "Forgetting to connect the topic to daily life.",
        "Treating this beta source as premium-final before the full standard P4 RE syllabus is checked."
      ],
      "recap": [
        "Early converts in Islam teach courage, faith and patience during difficulty.",
        "Learners should use respectful wording for Allah, the Qur'an, prayer and Prophet Muhammad (PBUH).",
        "This topic includes: Meaning of early converts."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-ire-early-converts-islam-key-teaching",
        "title": "1. Key teaching",
        "modules": [
          {
            "moduleId": "p4-ire-early-converts-islam-key",
            "title": "Understanding Early Converts in Islam",
            "bigIdea": "Islamic Religious Education connects worship, belief and daily conduct.",
            "learnIt": [
              "Early Converts in Islam is part of the P4 IRE abridged curriculum map.",
              "Learners study meaning of early converts.",
              "Learners study names of early converts in islam.",
              "Learners study importance of early converts.",
              "Learners study challenges faced by early muslims.",
              "Learners study lessons from early converts."
            ],
            "workedExample": {
              "question": "Name one thing studied under Early Converts in Islam.",
              "steps": [
                "Read the listed parts of the topic.",
                "Choose one clear part.",
                "Write it as a full answer."
              ],
              "answer": "Meaning of early converts"
            },
            "tryThis": {
              "question": "Which belongs to Early Converts in Islam?",
              "choices": [
                "A random mathematics formula",
                "A road distance only",
                "A weather graph only",
                "Meaning of early converts"
              ],
              "correct": 3,
              "explanation": "The correct choice is part of the mapped topic."
            },
            "imageUrl": "/images/re/p4-ire-prophets-values.svg",
            "imageCaption": "IRE prophets, Imaan and values."
          }
        ]
      },
      {
        "subtopicId": "p4-ire-early-converts-islam-application",
        "title": "2. Daily-life application",
        "modules": [
          {
            "moduleId": "p4-ire-early-converts-islam-life",
            "title": "Applying the lesson",
            "bigIdea": "Early converts in Islam teach courage, faith and patience during difficulty.",
            "learnIt": [
              "A learner can apply this topic by choosing to show courage and patience when choosing what is right.",
              "The answer should be respectful, practical and connected to daily life.",
              "If the question is about worship or scripture, learners should ask a teacher or trusted adult for correct details."
            ],
            "workedExample": {
              "question": "Write one respectful action connected to this topic.",
              "steps": [
                "Think of the topic value.",
                "Think of home, school or community.",
                "Write a practical action."
              ],
              "answer": "A P4 learner can apply Early Converts in Islam by choosing to show courage and patience when choosing what is right."
            },
            "tryThis": {
              "question": "The best way to apply Religious Education is to:",
              "choices": [
                "choose to show courage and patience when choosing what is right",
                "mock other people",
                "spread quarrels",
                "ignore good advice"
              ],
              "correct": 0,
              "explanation": "This action applies the topic respectfully in daily life."
            },
            "imageUrl": "/images/re/p4-ire-prophets-values.svg",
            "imageCaption": "IRE prophets, Imaan and values."
          }
        ]
      },
      {
        "subtopicId": "p4-ire-early-converts-islam-reasoning",
        "title": "3. Reasoning and respectful application",
        "modules": [
          {
            "moduleId": "p4-ire-early-converts-islam-reasoning-module",
            "title": "Reasoning and respectful application",
            "bigIdea": "Religious Education should shape respectful thinking and daily conduct, not only memorisation.",
            "imageUrl": "/images/re/p4-ire-prophets-values.svg",
            "imageCaption": "IRE prophets, Imaan and values.",
            "learnIt": [
              "Name the main teaching in Early Converts in Islam.",
              "Explain the value behind the teaching in simple words.",
              "Give one practical action a P4 learner can do at home, school or community.",
              "Use respectful language about Allah, the Qur’an, prayer and Prophet Muhammad (PBUH)."
            ],
            "workedExample": {
              "question": "Write two sentences showing how Early Converts in Islam can guide a P4 learner.",
              "steps": [
                "Name the teaching.",
                "Explain the value.",
                "Give a practical respectful action."
              ],
              "answer": "A good answer explains Early Converts in Islam and gives a respectful daily-life action."
            },
            "tryThis": {
              "question": "A strong RE answer should:",
              "choices": [
                "mock other people",
                "explain and apply the teaching respectfully",
                "memorise words only",
                "ignore daily life"
              ],
              "correct": 1,
              "explanation": "A strong answer explains the teaching and applies it respectfully."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Early Converts in Islam should help a learner:",
        "choices": [
          "mock prayer",
          "be careless with worship",
          "choose to show courage and patience when choosing what is right",
          "spread insults"
        ],
        "correct": 2,
        "why": "Early converts in Islam teach courage, faith and patience during difficulty."
      },
      {
        "q": "A good IRE answer should connect Islamic teaching to:",
        "choices": [
          "only noise",
          "only money",
          "only roads",
          "daily life and good conduct"
        ],
        "correct": 3,
        "why": "IRE should connect Islamic teaching to daily life."
      },
      {
        "q": "When unsure about a religious practice, a learner should:",
        "choices": [
          "ask a teacher or trusted adult",
          "guess carelessly",
          "mock it",
          "ignore learning"
        ],
        "correct": 0,
        "why": "Trusted guidance prevents mistakes."
      },
      {
        "q": "This topic includes Meaning of early converts.",
        "choices": [
          "False",
          "True",
          "Only for P7",
          "Only for Mathematics"
        ],
        "correct": 1,
        "why": "Meaning of early converts is listed in the NCDC/MoES P4 abridged map for this topic."
      },
      {
        "q": "Which is connected to this topic?",
        "choices": [
          "weather instruments only",
          "money conversion only",
          "Names of early converts in Islam",
          "road construction only"
        ],
        "correct": 2,
        "why": "Names of early converts in Islam is part of the topic scope."
      },
      {
        "q": "A learner shows good Religious Education learning by:",
        "choices": [
          "insulting others",
          "hiding all mistakes",
          "refusing peace",
          "acting respectfully"
        ],
        "correct": 3,
        "why": "Religious Education should shape respectful conduct."
      }
    ]
  },
  {
    "id": "p4-ire-surat-al-humaza",
    "themeId": "p4-ire",
    "themeName": "Islamic Religious Education",
    "title": "Surat Al-Humaza",
    "estMinutes": 30,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P4 Religious Education beta: built from the NCDC/MoES Primary 4 Abridged Curriculum for Uganda; confirm against the full standard P4 CRE/IRE syllabus before premium-final release. Surat Al-Humaza helps P4 learners connect Islamic teaching with worship, clean conduct, respect and daily choices.",
      "learningObjectives": [
        "Explain the main idea of Surat Al-Humaza.",
        "Name the key practices, people or values in the topic.",
        "Apply the topic respectfully in daily life.",
        "Answer simple P4 Religious Education questions in full sentences."
      ],
      "whatYouNeedToKnow": [
        "Surat Al-Humaza warns against harmful speech and mockery.",
        "Learners should use respectful wording for Allah, the Qur'an, prayer and Prophet Muhammad (PBUH).",
        "Recitation should be practised with a teacher or knowledgeable adult, and learners should also understand the lesson for daily life.",
        "This topic includes: Reciting Surat Al-Humaza.",
        "This topic includes: Meaning of Surat Al-Humaza.",
        "This topic includes: Importance of Surat Al-Humaza.",
        "This topic includes: Lessons from Surat Al-Humaza."
      ],
      "worked": {
        "problem": "How can a P4 learner apply the lesson of Surat Al-Humaza at school?",
        "steps": [
          "Identify the main value or practice in the topic.",
          "Choose a real school situation.",
          "Write one respectful action a learner can take."
        ],
        "answer": "A P4 learner can apply Surat Al-Humaza by choosing to avoid mockery, insults, rumours and backbiting."
      },
      "commonMistakes": [
        "Writing one-word answers without explanation.",
        "Using disrespectful words about faith, worship or other people.",
        "Forgetting to connect the topic to daily life.",
        "Treating this beta source as premium-final before the full standard P4 RE syllabus is checked."
      ],
      "recap": [
        "Surat Al-Humaza warns against harmful speech and mockery.",
        "Learners should use respectful wording for Allah, the Qur'an, prayer and Prophet Muhammad (PBUH).",
        "Recitation should be practised with a teacher or knowledgeable adult, and learners should also understand the lesson for daily life."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-ire-surat-al-humaza-key-teaching",
        "title": "1. Key teaching",
        "modules": [
          {
            "moduleId": "p4-ire-surat-al-humaza-key",
            "title": "Understanding Surat Al-Humaza",
            "bigIdea": "Islamic Religious Education connects worship, belief and daily conduct.",
            "learnIt": [
              "Surat Al-Humaza is part of the P4 IRE abridged curriculum map.",
              "Learners study reciting surat al-humaza.",
              "Learners study meaning of surat al-humaza.",
              "Learners study importance of surat al-humaza.",
              "Learners study lessons from surat al-humaza.",
              "Learners study avoiding bad speech and harmful behaviour."
            ],
            "workedExample": {
              "question": "Name one thing studied under Surat Al-Humaza.",
              "steps": [
                "Read the listed parts of the topic.",
                "Choose one clear part.",
                "Write it as a full answer."
              ],
              "answer": "Reciting Surat Al-Humaza"
            },
            "tryThis": {
              "question": "Which belongs to Surat Al-Humaza?",
              "choices": [
                "Reciting Surat Al-Humaza",
                "A random mathematics formula",
                "A road distance only",
                "A weather graph only"
              ],
              "correct": 0,
              "explanation": "The correct choice is part of the mapped topic."
            },
            "imageUrl": "/images/re/p4-ire-quran-prayer-cleanliness.svg",
            "imageCaption": "IRE Qur’an, prayer and cleanliness."
          }
        ]
      },
      {
        "subtopicId": "p4-ire-surat-al-humaza-application",
        "title": "2. Daily-life application",
        "modules": [
          {
            "moduleId": "p4-ire-surat-al-humaza-life",
            "title": "Applying the lesson",
            "bigIdea": "Surat Al-Humaza warns against harmful speech and mockery.",
            "learnIt": [
              "A learner can apply this topic by choosing to avoid mockery, insults, rumours and backbiting.",
              "The answer should be respectful, practical and connected to daily life.",
              "If the question is about worship or scripture, learners should ask a teacher or trusted adult for correct details."
            ],
            "workedExample": {
              "question": "Write one respectful action connected to this topic.",
              "steps": [
                "Think of the topic value.",
                "Think of home, school or community.",
                "Write a practical action."
              ],
              "answer": "A P4 learner can apply Surat Al-Humaza by choosing to avoid mockery, insults, rumours and backbiting."
            },
            "tryThis": {
              "question": "The best way to apply Religious Education is to:",
              "choices": [
                "mock other people",
                "choose to avoid mockery, insults, rumours and backbiting",
                "spread quarrels",
                "ignore good advice"
              ],
              "correct": 1,
              "explanation": "This action applies the topic respectfully in daily life."
            },
            "imageUrl": "/images/re/p4-ire-quran-prayer-cleanliness.svg",
            "imageCaption": "IRE Qur’an, prayer and cleanliness."
          }
        ]
      },
      {
        "subtopicId": "p4-ire-surat-al-humaza-reasoning",
        "title": "3. Reasoning and respectful application",
        "modules": [
          {
            "moduleId": "p4-ire-surat-al-humaza-reasoning-module",
            "title": "Reasoning and respectful application",
            "bigIdea": "Religious Education should shape respectful thinking and daily conduct, not only memorisation.",
            "imageUrl": "/images/re/p4-ire-quran-prayer-cleanliness.svg",
            "imageCaption": "IRE Qur’an, prayer and cleanliness.",
            "learnIt": [
              "Name the main teaching in Surat Al-Humaza.",
              "Explain the value behind the teaching in simple words.",
              "Give one practical action a P4 learner can do at home, school or community.",
              "Use respectful language about Allah, the Qur’an, prayer and Prophet Muhammad (PBUH)."
            ],
            "workedExample": {
              "question": "Write two sentences showing how Surat Al-Humaza can guide a P4 learner.",
              "steps": [
                "Name the teaching.",
                "Explain the value.",
                "Give a practical respectful action."
              ],
              "answer": "A good answer explains Surat Al-Humaza and gives a respectful daily-life action."
            },
            "tryThis": {
              "question": "A strong RE answer should:",
              "choices": [
                "mock other people",
                "memorise words only",
                "explain and apply the teaching respectfully",
                "ignore daily life"
              ],
              "correct": 2,
              "explanation": "A strong answer explains the teaching and applies it respectfully."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Surat Al-Humaza should help a learner:",
        "choices": [
          "mock prayer",
          "be careless with worship",
          "spread insults",
          "choose to avoid mockery, insults, rumours and backbiting"
        ],
        "correct": 3,
        "why": "Surat Al-Humaza warns against harmful speech and mockery."
      },
      {
        "q": "A good IRE answer should connect Islamic teaching to:",
        "choices": [
          "daily life and good conduct",
          "only noise",
          "only money",
          "only roads"
        ],
        "correct": 0,
        "why": "IRE should connect Islamic teaching to daily life."
      },
      {
        "q": "When unsure about a religious practice, a learner should:",
        "choices": [
          "guess carelessly",
          "ask a teacher or trusted adult",
          "mock it",
          "ignore learning"
        ],
        "correct": 1,
        "why": "Trusted guidance prevents mistakes."
      },
      {
        "q": "This topic includes Reciting Surat Al-Humaza.",
        "choices": [
          "False",
          "Only for P7",
          "True",
          "Only for Mathematics"
        ],
        "correct": 2,
        "why": "Reciting Surat Al-Humaza is listed in the NCDC/MoES P4 abridged map for this topic."
      },
      {
        "q": "Which is connected to this topic?",
        "choices": [
          "weather instruments only",
          "money conversion only",
          "road construction only",
          "Meaning of Surat Al-Humaza"
        ],
        "correct": 3,
        "why": "Meaning of Surat Al-Humaza is part of the topic scope."
      },
      {
        "q": "A learner shows good Religious Education learning by:",
        "choices": [
          "acting respectfully",
          "insulting others",
          "hiding all mistakes",
          "refusing peace"
        ],
        "correct": 0,
        "why": "Religious Education should shape respectful conduct."
      }
    ]
  },
  {
    "id": "p4-ire-twenty-five-prophets",
    "themeId": "p4-ire",
    "themeName": "Islamic Religious Education",
    "title": "The 25 Prophets",
    "estMinutes": 30,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P4 Religious Education beta: built from the NCDC/MoES Primary 4 Abridged Curriculum for Uganda; confirm against the full standard P4 CRE/IRE syllabus before premium-final release. The 25 Prophets helps P4 learners connect Islamic teaching with worship, clean conduct, respect and daily choices.",
      "learningObjectives": [
        "Explain the main idea of The 25 Prophets.",
        "Name the key practices, people or values in the topic.",
        "Apply the topic respectfully in daily life.",
        "Answer simple P4 Religious Education questions in full sentences."
      ],
      "whatYouNeedToKnow": [
        "The prophets guided people to worship Allah and do what is right.",
        "Learners should use respectful wording for Allah, the Qur'an, prayer and Prophet Muhammad (PBUH).",
        "This topic includes: Names of the 25 prophets mentioned in the Qur'an.",
        "This topic includes: More prophets beyond the 25 named prophets.",
        "This topic includes: Duties of prophets.",
        "This topic includes: Qualities of prophets."
      ],
      "worked": {
        "problem": "How can a P4 learner apply the lesson of The 25 Prophets at school?",
        "steps": [
          "Identify the main value or practice in the topic.",
          "Choose a real school situation.",
          "Write one respectful action a learner can take."
        ],
        "answer": "A P4 learner can apply The 25 Prophets by choosing to learn from the prophets by practising patience, obedience and truthfulness."
      },
      "commonMistakes": [
        "Writing one-word answers without explanation.",
        "Using disrespectful words about faith, worship or other people.",
        "Forgetting to connect the topic to daily life.",
        "Treating this beta source as premium-final before the full standard P4 RE syllabus is checked."
      ],
      "recap": [
        "The prophets guided people to worship Allah and do what is right.",
        "Learners should use respectful wording for Allah, the Qur'an, prayer and Prophet Muhammad (PBUH).",
        "This topic includes: Names of the 25 prophets mentioned in the Qur'an."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-ire-twenty-five-prophets-key-teaching",
        "title": "1. Key teaching",
        "modules": [
          {
            "moduleId": "p4-ire-twenty-five-prophets-key",
            "title": "Understanding The 25 Prophets",
            "bigIdea": "Islamic Religious Education connects worship, belief and daily conduct.",
            "learnIt": [
              "The 25 Prophets is part of the P4 IRE abridged curriculum map.",
              "Learners study names of the 25 prophets mentioned in the qur'an.",
              "Learners study more prophets beyond the 25 named prophets.",
              "Learners study duties of prophets.",
              "Learners study qualities of prophets.",
              "Learners study lessons from the prophets."
            ],
            "workedExample": {
              "question": "Name one thing studied under The 25 Prophets.",
              "steps": [
                "Read the listed parts of the topic.",
                "Choose one clear part.",
                "Write it as a full answer."
              ],
              "answer": "Names of the 25 prophets mentioned in the Qur'an"
            },
            "tryThis": {
              "question": "Which belongs to The 25 Prophets?",
              "choices": [
                "A random mathematics formula",
                "Names of the 25 prophets mentioned in the Qur'an",
                "A road distance only",
                "A weather graph only"
              ],
              "correct": 1,
              "explanation": "The correct choice is part of the mapped topic."
            },
            "imageUrl": "/images/re/p4-ire-prophets-values.svg",
            "imageCaption": "IRE prophets, Imaan and values."
          }
        ]
      },
      {
        "subtopicId": "p4-ire-twenty-five-prophets-application",
        "title": "2. Daily-life application",
        "modules": [
          {
            "moduleId": "p4-ire-twenty-five-prophets-life",
            "title": "Applying the lesson",
            "bigIdea": "The prophets guided people to worship Allah and do what is right.",
            "learnIt": [
              "A learner can apply this topic by choosing to learn from the prophets by practising patience, obedience and truthfulness.",
              "The answer should be respectful, practical and connected to daily life.",
              "If the question is about worship or scripture, learners should ask a teacher or trusted adult for correct details."
            ],
            "workedExample": {
              "question": "Write one respectful action connected to this topic.",
              "steps": [
                "Think of the topic value.",
                "Think of home, school or community.",
                "Write a practical action."
              ],
              "answer": "A P4 learner can apply The 25 Prophets by choosing to learn from the prophets by practising patience, obedience and truthfulness."
            },
            "tryThis": {
              "question": "The best way to apply Religious Education is to:",
              "choices": [
                "mock other people",
                "spread quarrels",
                "choose to learn from the prophets by practising patience, obedience and truthfulness",
                "ignore good advice"
              ],
              "correct": 2,
              "explanation": "This action applies the topic respectfully in daily life."
            },
            "imageUrl": "/images/re/p4-ire-prophets-values.svg",
            "imageCaption": "IRE prophets, Imaan and values."
          }
        ]
      },
      {
        "subtopicId": "p4-ire-twenty-five-prophets-reasoning",
        "title": "3. Reasoning and respectful application",
        "modules": [
          {
            "moduleId": "p4-ire-twenty-five-prophets-reasoning-module",
            "title": "Reasoning and respectful application",
            "bigIdea": "Religious Education should shape respectful thinking and daily conduct, not only memorisation.",
            "imageUrl": "/images/re/p4-ire-prophets-values.svg",
            "imageCaption": "IRE prophets, Imaan and values.",
            "learnIt": [
              "Name the main teaching in The 25 Prophets.",
              "Explain the value behind the teaching in simple words.",
              "Give one practical action a P4 learner can do at home, school or community.",
              "Use respectful language about Allah, the Qur’an, prayer and Prophet Muhammad (PBUH)."
            ],
            "workedExample": {
              "question": "Write two sentences showing how The 25 Prophets can guide a P4 learner.",
              "steps": [
                "Name the teaching.",
                "Explain the value.",
                "Give a practical respectful action."
              ],
              "answer": "A good answer explains The 25 Prophets and gives a respectful daily-life action."
            },
            "tryThis": {
              "question": "A strong RE answer should:",
              "choices": [
                "mock other people",
                "memorise words only",
                "ignore daily life",
                "explain and apply the teaching respectfully"
              ],
              "correct": 3,
              "explanation": "A strong answer explains the teaching and applies it respectfully."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "The 25 Prophets should help a learner:",
        "choices": [
          "choose to learn from the prophets by practising patience, obedience and truthfulness",
          "mock prayer",
          "be careless with worship",
          "spread insults"
        ],
        "correct": 0,
        "why": "The prophets guided people to worship Allah and do what is right."
      },
      {
        "q": "A good IRE answer should connect Islamic teaching to:",
        "choices": [
          "only noise",
          "daily life and good conduct",
          "only money",
          "only roads"
        ],
        "correct": 1,
        "why": "IRE should connect Islamic teaching to daily life."
      },
      {
        "q": "When unsure about a religious practice, a learner should:",
        "choices": [
          "guess carelessly",
          "mock it",
          "ask a teacher or trusted adult",
          "ignore learning"
        ],
        "correct": 2,
        "why": "Trusted guidance prevents mistakes."
      },
      {
        "q": "This topic includes Names of the 25 prophets mentioned in the Qur'an.",
        "choices": [
          "False",
          "Only for P7",
          "Only for Mathematics",
          "True"
        ],
        "correct": 3,
        "why": "Names of the 25 prophets mentioned in the Qur'an is listed in the NCDC/MoES P4 abridged map for this topic."
      },
      {
        "q": "Which is connected to this topic?",
        "choices": [
          "More prophets beyond the 25 named prophets",
          "weather instruments only",
          "money conversion only",
          "road construction only"
        ],
        "correct": 0,
        "why": "More prophets beyond the 25 named prophets is part of the topic scope."
      },
      {
        "q": "A learner shows good Religious Education learning by:",
        "choices": [
          "insulting others",
          "acting respectfully",
          "hiding all mistakes",
          "refusing peace"
        ],
        "correct": 1,
        "why": "Religious Education should shape respectful conduct."
      }
    ]
  },
  {
    "id": "p4-ire-imaan-forgiveness",
    "themeId": "p4-ire",
    "themeName": "Islamic Religious Education",
    "title": "Imaan and Forgiveness",
    "estMinutes": 30,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P4 Religious Education beta: built from the NCDC/MoES Primary 4 Abridged Curriculum for Uganda; confirm against the full standard P4 CRE/IRE syllabus before premium-final release. Imaan and Forgiveness helps P4 learners connect Islamic teaching with worship, clean conduct, respect and daily choices.",
      "learningObjectives": [
        "Explain the main idea of Imaan and Forgiveness.",
        "Name the key practices, people or values in the topic.",
        "Apply the topic respectfully in daily life.",
        "Answer simple P4 Religious Education questions in full sentences."
      ],
      "whatYouNeedToKnow": [
        "Imaan guides belief and forgiveness restores relationships.",
        "Learners should use respectful wording for Allah, the Qur'an, prayer and Prophet Muhammad (PBUH).",
        "This topic includes: Meaning of Imaan.",
        "This topic includes: Articles of Imaan.",
        "This topic includes: Meaning of forgiveness.",
        "This topic includes: Importance of forgiveness."
      ],
      "worked": {
        "problem": "How can a P4 learner apply the lesson of Imaan and Forgiveness at school?",
        "steps": [
          "Identify the main value or practice in the topic.",
          "Choose a real school situation.",
          "Write one respectful action a learner can take."
        ],
        "answer": "A P4 learner can apply Imaan and Forgiveness by choosing to strengthen faith, ask Allah for forgiveness and forgive others."
      },
      "commonMistakes": [
        "Writing one-word answers without explanation.",
        "Using disrespectful words about faith, worship or other people.",
        "Forgetting to connect the topic to daily life.",
        "Treating this beta source as premium-final before the full standard P4 RE syllabus is checked."
      ],
      "recap": [
        "Imaan guides belief and forgiveness restores relationships.",
        "Learners should use respectful wording for Allah, the Qur'an, prayer and Prophet Muhammad (PBUH).",
        "This topic includes: Meaning of Imaan."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-ire-imaan-forgiveness-key-teaching",
        "title": "1. Key teaching",
        "modules": [
          {
            "moduleId": "p4-ire-imaan-forgiveness-key",
            "title": "Understanding Imaan and Forgiveness",
            "bigIdea": "Islamic Religious Education connects worship, belief and daily conduct.",
            "learnIt": [
              "Imaan and Forgiveness is part of the P4 IRE abridged curriculum map.",
              "Learners study meaning of imaan.",
              "Learners study articles of imaan.",
              "Learners study meaning of forgiveness.",
              "Learners study importance of forgiveness.",
              "Learners study seeking allah's forgiveness."
            ],
            "workedExample": {
              "question": "Name one thing studied under Imaan and Forgiveness.",
              "steps": [
                "Read the listed parts of the topic.",
                "Choose one clear part.",
                "Write it as a full answer."
              ],
              "answer": "Meaning of Imaan"
            },
            "tryThis": {
              "question": "Which belongs to Imaan and Forgiveness?",
              "choices": [
                "A random mathematics formula",
                "A road distance only",
                "Meaning of Imaan",
                "A weather graph only"
              ],
              "correct": 2,
              "explanation": "The correct choice is part of the mapped topic."
            },
            "imageUrl": "/images/re/p4-ire-prophets-values.svg",
            "imageCaption": "IRE prophets, Imaan and values."
          }
        ]
      },
      {
        "subtopicId": "p4-ire-imaan-forgiveness-application",
        "title": "2. Daily-life application",
        "modules": [
          {
            "moduleId": "p4-ire-imaan-forgiveness-life",
            "title": "Applying the lesson",
            "bigIdea": "Imaan guides belief and forgiveness restores relationships.",
            "learnIt": [
              "A learner can apply this topic by choosing to strengthen faith, ask Allah for forgiveness and forgive others.",
              "The answer should be respectful, practical and connected to daily life.",
              "If the question is about worship or scripture, learners should ask a teacher or trusted adult for correct details."
            ],
            "workedExample": {
              "question": "Write one respectful action connected to this topic.",
              "steps": [
                "Think of the topic value.",
                "Think of home, school or community.",
                "Write a practical action."
              ],
              "answer": "A P4 learner can apply Imaan and Forgiveness by choosing to strengthen faith, ask Allah for forgiveness and forgive others."
            },
            "tryThis": {
              "question": "The best way to apply Religious Education is to:",
              "choices": [
                "mock other people",
                "spread quarrels",
                "ignore good advice",
                "choose to strengthen faith, ask Allah for forgiveness and forgive others"
              ],
              "correct": 3,
              "explanation": "This action applies the topic respectfully in daily life."
            },
            "imageUrl": "/images/re/p4-ire-prophets-values.svg",
            "imageCaption": "IRE prophets, Imaan and values."
          }
        ]
      },
      {
        "subtopicId": "p4-ire-imaan-forgiveness-reasoning",
        "title": "3. Reasoning and respectful application",
        "modules": [
          {
            "moduleId": "p4-ire-imaan-forgiveness-reasoning-module",
            "title": "Reasoning and respectful application",
            "bigIdea": "Religious Education should shape respectful thinking and daily conduct, not only memorisation.",
            "imageUrl": "/images/re/p4-ire-prophets-values.svg",
            "imageCaption": "IRE prophets, Imaan and values.",
            "learnIt": [
              "Name the main teaching in Imaan and Forgiveness.",
              "Explain the value behind the teaching in simple words.",
              "Give one practical action a P4 learner can do at home, school or community.",
              "Use respectful language about Allah, the Qur’an, prayer and Prophet Muhammad (PBUH)."
            ],
            "workedExample": {
              "question": "Write two sentences showing how Imaan and Forgiveness can guide a P4 learner.",
              "steps": [
                "Name the teaching.",
                "Explain the value.",
                "Give a practical respectful action."
              ],
              "answer": "A good answer explains Imaan and Forgiveness and gives a respectful daily-life action."
            },
            "tryThis": {
              "question": "A strong RE answer should:",
              "choices": [
                "explain and apply the teaching respectfully",
                "mock other people",
                "memorise words only",
                "ignore daily life"
              ],
              "correct": 0,
              "explanation": "A strong answer explains the teaching and applies it respectfully."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Imaan and Forgiveness should help a learner:",
        "choices": [
          "mock prayer",
          "choose to strengthen faith, ask Allah for forgiveness and forgive others",
          "be careless with worship",
          "spread insults"
        ],
        "correct": 1,
        "why": "Imaan guides belief and forgiveness restores relationships."
      },
      {
        "q": "A good IRE answer should connect Islamic teaching to:",
        "choices": [
          "only noise",
          "only money",
          "daily life and good conduct",
          "only roads"
        ],
        "correct": 2,
        "why": "IRE should connect Islamic teaching to daily life."
      },
      {
        "q": "When unsure about a religious practice, a learner should:",
        "choices": [
          "guess carelessly",
          "mock it",
          "ignore learning",
          "ask a teacher or trusted adult"
        ],
        "correct": 3,
        "why": "Trusted guidance prevents mistakes."
      },
      {
        "q": "This topic includes Meaning of Imaan.",
        "choices": [
          "True",
          "False",
          "Only for P7",
          "Only for Mathematics"
        ],
        "correct": 0,
        "why": "Meaning of Imaan is listed in the NCDC/MoES P4 abridged map for this topic."
      },
      {
        "q": "Which is connected to this topic?",
        "choices": [
          "weather instruments only",
          "Articles of Imaan",
          "money conversion only",
          "road construction only"
        ],
        "correct": 1,
        "why": "Articles of Imaan is part of the topic scope."
      },
      {
        "q": "A learner shows good Religious Education learning by:",
        "choices": [
          "insulting others",
          "hiding all mistakes",
          "acting respectfully",
          "refusing peace"
        ],
        "correct": 2,
        "why": "Religious Education should shape respectful conduct."
      }
    ]
  },
  {
    "id": "p4-ire-congregational-prayer",
    "themeId": "p4-ire",
    "themeName": "Islamic Religious Education",
    "title": "Congregational Prayer (Swalat Al-Jama-a)",
    "estMinutes": 30,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P4 Religious Education beta: built from the NCDC/MoES Primary 4 Abridged Curriculum for Uganda; confirm against the full standard P4 CRE/IRE syllabus before premium-final release. Congregational Prayer (Swalat Al-Jama-a) helps P4 learners connect Islamic teaching with worship, clean conduct, respect and daily choices.",
      "learningObjectives": [
        "Explain the main idea of Congregational Prayer (Swalat Al-Jama-a).",
        "Name the key practices, people or values in the topic.",
        "Apply the topic respectfully in daily life.",
        "Answer simple P4 Religious Education questions in full sentences."
      ],
      "whatYouNeedToKnow": [
        "Congregational prayer promotes unity, discipline and respectful worship.",
        "Learners should use respectful wording for Allah, the Qur'an, prayer and Prophet Muhammad (PBUH).",
        "Prayer topics require attention to cleanliness, order, humility and respect for worship.",
        "This topic includes: Meaning of congregational prayer.",
        "This topic includes: Importance of Swalat Al-Jama-a.",
        "This topic includes: How Muslims pray together.",
        "This topic includes: Roles in congregational prayer."
      ],
      "worked": {
        "problem": "How can a P4 learner apply the lesson of Congregational Prayer (Swalat Al-Jama-a) at school?",
        "steps": [
          "Identify the main value or practice in the topic.",
          "Choose a real school situation.",
          "Write one respectful action a learner can take."
        ],
        "answer": "A P4 learner can apply Congregational Prayer (Swalat Al-Jama-a) by choosing to join prayer respectfully, keep order and follow the Imam."
      },
      "commonMistakes": [
        "Writing one-word answers without explanation.",
        "Using disrespectful words about faith, worship or other people.",
        "Forgetting to connect the topic to daily life.",
        "Treating this beta source as premium-final before the full standard P4 RE syllabus is checked."
      ],
      "recap": [
        "Congregational prayer promotes unity, discipline and respectful worship.",
        "Learners should use respectful wording for Allah, the Qur'an, prayer and Prophet Muhammad (PBUH).",
        "Prayer topics require attention to cleanliness, order, humility and respect for worship."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-ire-congregational-prayer-key-teaching",
        "title": "1. Key teaching",
        "modules": [
          {
            "moduleId": "p4-ire-congregational-prayer-key",
            "title": "Understanding Congregational Prayer (Swalat Al-Jama-a)",
            "bigIdea": "Islamic Religious Education connects worship, belief and daily conduct.",
            "learnIt": [
              "Congregational Prayer (Swalat Al-Jama-a) is part of the P4 IRE abridged curriculum map.",
              "Learners study meaning of congregational prayer.",
              "Learners study importance of swalat al-jama-a.",
              "Learners study how muslims pray together.",
              "Learners study roles in congregational prayer.",
              "Learners study good conduct during prayer."
            ],
            "workedExample": {
              "question": "Name one thing studied under Congregational Prayer (Swalat Al-Jama-a).",
              "steps": [
                "Read the listed parts of the topic.",
                "Choose one clear part.",
                "Write it as a full answer."
              ],
              "answer": "Meaning of congregational prayer"
            },
            "tryThis": {
              "question": "Which belongs to Congregational Prayer (Swalat Al-Jama-a)?",
              "choices": [
                "A random mathematics formula",
                "A road distance only",
                "A weather graph only",
                "Meaning of congregational prayer"
              ],
              "correct": 3,
              "explanation": "The correct choice is part of the mapped topic."
            },
            "imageUrl": "/images/re/p4-ire-quran-prayer-cleanliness.svg",
            "imageCaption": "IRE Qur’an, prayer and cleanliness."
          }
        ]
      },
      {
        "subtopicId": "p4-ire-congregational-prayer-application",
        "title": "2. Daily-life application",
        "modules": [
          {
            "moduleId": "p4-ire-congregational-prayer-life",
            "title": "Applying the lesson",
            "bigIdea": "Congregational prayer promotes unity, discipline and respectful worship.",
            "learnIt": [
              "A learner can apply this topic by choosing to join prayer respectfully, keep order and follow the Imam.",
              "The answer should be respectful, practical and connected to daily life.",
              "If the question is about worship or scripture, learners should ask a teacher or trusted adult for correct details."
            ],
            "workedExample": {
              "question": "Write one respectful action connected to this topic.",
              "steps": [
                "Think of the topic value.",
                "Think of home, school or community.",
                "Write a practical action."
              ],
              "answer": "A P4 learner can apply Congregational Prayer (Swalat Al-Jama-a) by choosing to join prayer respectfully, keep order and follow the Imam."
            },
            "tryThis": {
              "question": "The best way to apply Religious Education is to:",
              "choices": [
                "choose to join prayer respectfully, keep order and follow the Imam",
                "mock other people",
                "spread quarrels",
                "ignore good advice"
              ],
              "correct": 0,
              "explanation": "This action applies the topic respectfully in daily life."
            },
            "imageUrl": "/images/re/p4-ire-quran-prayer-cleanliness.svg",
            "imageCaption": "IRE Qur’an, prayer and cleanliness."
          }
        ]
      },
      {
        "subtopicId": "p4-ire-congregational-prayer-reasoning",
        "title": "3. Reasoning and respectful application",
        "modules": [
          {
            "moduleId": "p4-ire-congregational-prayer-reasoning-module",
            "title": "Reasoning and respectful application",
            "bigIdea": "Religious Education should shape respectful thinking and daily conduct, not only memorisation.",
            "imageUrl": "/images/re/p4-ire-quran-prayer-cleanliness.svg",
            "imageCaption": "IRE Qur’an, prayer and cleanliness.",
            "learnIt": [
              "Name the main teaching in Congregational Prayer (Swalat Al-Jama-a).",
              "Explain the value behind the teaching in simple words.",
              "Give one practical action a P4 learner can do at home, school or community.",
              "Use respectful language about Allah, the Qur’an, prayer and Prophet Muhammad (PBUH)."
            ],
            "workedExample": {
              "question": "Write two sentences showing how Congregational Prayer (Swalat Al-Jama-a) can guide a P4 learner.",
              "steps": [
                "Name the teaching.",
                "Explain the value.",
                "Give a practical respectful action."
              ],
              "answer": "A good answer explains Congregational Prayer (Swalat Al-Jama-a) and gives a respectful daily-life action."
            },
            "tryThis": {
              "question": "A strong RE answer should:",
              "choices": [
                "mock other people",
                "explain and apply the teaching respectfully",
                "memorise words only",
                "ignore daily life"
              ],
              "correct": 1,
              "explanation": "A strong answer explains the teaching and applies it respectfully."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Congregational Prayer (Swalat Al-Jama-a) should help a learner:",
        "choices": [
          "mock prayer",
          "be careless with worship",
          "choose to join prayer respectfully, keep order and follow the Imam",
          "spread insults"
        ],
        "correct": 2,
        "why": "Congregational prayer promotes unity, discipline and respectful worship."
      },
      {
        "q": "A good IRE answer should connect Islamic teaching to:",
        "choices": [
          "only noise",
          "only money",
          "only roads",
          "daily life and good conduct"
        ],
        "correct": 3,
        "why": "IRE should connect Islamic teaching to daily life."
      },
      {
        "q": "When unsure about a religious practice, a learner should:",
        "choices": [
          "ask a teacher or trusted adult",
          "guess carelessly",
          "mock it",
          "ignore learning"
        ],
        "correct": 0,
        "why": "Trusted guidance prevents mistakes."
      },
      {
        "q": "This topic includes Meaning of congregational prayer.",
        "choices": [
          "False",
          "True",
          "Only for P7",
          "Only for Mathematics"
        ],
        "correct": 1,
        "why": "Meaning of congregational prayer is listed in the NCDC/MoES P4 abridged map for this topic."
      },
      {
        "q": "Which is connected to this topic?",
        "choices": [
          "weather instruments only",
          "money conversion only",
          "Importance of Swalat Al-Jama-a",
          "road construction only"
        ],
        "correct": 2,
        "why": "Importance of Swalat Al-Jama-a is part of the topic scope."
      },
      {
        "q": "A learner shows good Religious Education learning by:",
        "choices": [
          "insulting others",
          "hiding all mistakes",
          "refusing peace",
          "acting respectfully"
        ],
        "correct": 3,
        "why": "Religious Education should shape respectful conduct."
      }
    ]
  },
  {
    "id": "p4-ire-night-journey-israi-miraj",
    "themeId": "p4-ire",
    "themeName": "Islamic Religious Education",
    "title": "The Night Journey (Isra/Israi and Miraj)",
    "estMinutes": 30,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P4 Religious Education beta: built from the NCDC/MoES Primary 4 Abridged Curriculum for Uganda; confirm against the full standard P4 CRE/IRE syllabus before premium-final release. The Night Journey (Israi and Miraj) helps P4 learners connect Islamic teaching with worship, clean conduct, respect and daily choices.",
      "learningObjectives": [
        "Explain the main idea of The Night Journey (Israi and Miraj).",
        "Name the key practices, people or values in the topic.",
        "Apply the topic respectfully in daily life.",
        "Answer simple P4 Religious Education questions in full sentences."
      ],
      "whatYouNeedToKnow": [
        "Isra/Israi and Miraj teach Allah’s power and the importance of prayer.",
        "Learners should use respectful wording for Allah, the Qur'an, prayer and Prophet Muhammad (PBUH).",
        "This topic includes: Meaning of Israi.",
        "This topic includes: Meaning of Miraj.",
        "This topic includes: The night journey of Prophet Muhammad (PBUH).",
        "This topic includes: Lessons from the night journey."
      ],
      "worked": {
        "problem": "How can a P4 learner apply the lesson of The Night Journey (Israi and Miraj) at school?",
        "steps": [
          "Identify the main value or practice in the topic.",
          "Choose a real school situation.",
          "Write one respectful action a learner can take."
        ],
        "answer": "A P4 learner can apply The Night Journey (Isra/Israi and Miraj) by choosing to value Swalat and speak respectfully about sacred events."
      },
      "commonMistakes": [
        "Writing one-word answers without explanation.",
        "Using disrespectful words about faith, worship or other people.",
        "Forgetting to connect the topic to daily life.",
        "Treating this beta source as premium-final before the full standard P4 RE syllabus is checked."
      ],
      "recap": [
        "Isra/Israi and Miraj teach Allah’s power and the importance of prayer.",
        "Learners should use respectful wording for Allah, the Qur'an, prayer and Prophet Muhammad (PBUH).",
        "This topic includes: Meaning of Israi."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-ire-night-journey-israi-miraj-key-teaching",
        "title": "1. Key teaching",
        "modules": [
          {
            "moduleId": "p4-ire-night-journey-israi-miraj-key",
            "title": "Understanding The Night Journey (Israi and Miraj)",
            "bigIdea": "Islamic Religious Education connects worship, belief and daily conduct.",
            "learnIt": [
              "The Night Journey (Israi and Miraj) is part of the P4 IRE abridged curriculum map.",
              "Learners study meaning of israi.",
              "Learners study meaning of miraj.",
              "Learners study the night journey of prophet muhammad (pbuh).",
              "Learners study lessons from the night journey.",
              "Learners study allah's power and the gift of prayer."
            ],
            "workedExample": {
              "question": "Name one thing studied under The Night Journey (Israi and Miraj).",
              "steps": [
                "Read the listed parts of the topic.",
                "Choose one clear part.",
                "Write it as a full answer."
              ],
              "answer": "Meaning of Israi"
            },
            "tryThis": {
              "question": "Which belongs to The Night Journey (Israi and Miraj)?",
              "choices": [
                "Meaning of Israi",
                "A random mathematics formula",
                "A road distance only",
                "A weather graph only"
              ],
              "correct": 0,
              "explanation": "The correct choice is part of the mapped topic."
            },
            "imageUrl": "/images/re/p4-ire-prophets-values.svg",
            "imageCaption": "IRE prophets, Imaan and values."
          }
        ]
      },
      {
        "subtopicId": "p4-ire-night-journey-israi-miraj-application",
        "title": "2. Daily-life application",
        "modules": [
          {
            "moduleId": "p4-ire-night-journey-israi-miraj-life",
            "title": "Applying the lesson",
            "bigIdea": "Isra/Israi and Miraj teach Allah’s power and the importance of prayer.",
            "learnIt": [
              "A learner can apply this topic by choosing to value Swalat and speak respectfully about sacred events.",
              "The answer should be respectful, practical and connected to daily life.",
              "If the question is about worship or scripture, learners should ask a teacher or trusted adult for correct details."
            ],
            "workedExample": {
              "question": "Write one respectful action connected to this topic.",
              "steps": [
                "Think of the topic value.",
                "Think of home, school or community.",
                "Write a practical action."
              ],
              "answer": "A P4 learner can apply The Night Journey (Isra/Israi and Miraj) by choosing to value Swalat and speak respectfully about sacred events."
            },
            "tryThis": {
              "question": "The best way to apply Religious Education is to:",
              "choices": [
                "mock other people",
                "choose to value Swalat and speak respectfully about sacred events",
                "spread quarrels",
                "ignore good advice"
              ],
              "correct": 1,
              "explanation": "This action applies the topic respectfully in daily life."
            },
            "imageUrl": "/images/re/p4-ire-prophets-values.svg",
            "imageCaption": "IRE prophets, Imaan and values."
          }
        ]
      },
      {
        "subtopicId": "p4-ire-night-journey-israi-miraj-reasoning",
        "title": "3. Reasoning and respectful application",
        "modules": [
          {
            "moduleId": "p4-ire-night-journey-israi-miraj-reasoning-module",
            "title": "Reasoning and respectful application",
            "bigIdea": "Religious Education should shape respectful thinking and daily conduct, not only memorisation.",
            "imageUrl": "/images/re/p4-ire-prophets-values.svg",
            "imageCaption": "IRE prophets, Imaan and values.",
            "learnIt": [
              "Name the main teaching in The Night Journey (Isra/Israi and Miraj).",
              "Explain the value behind the teaching in simple words.",
              "Give one practical action a P4 learner can do at home, school or community.",
              "Use respectful language about Allah, the Qur’an, prayer and Prophet Muhammad (PBUH)."
            ],
            "workedExample": {
              "question": "Write two sentences showing how The Night Journey (Isra/Israi and Miraj) can guide a P4 learner.",
              "steps": [
                "Name the teaching.",
                "Explain the value.",
                "Give a practical respectful action."
              ],
              "answer": "A good answer explains The Night Journey (Isra/Israi and Miraj) and gives a respectful daily-life action."
            },
            "tryThis": {
              "question": "A strong RE answer should:",
              "choices": [
                "mock other people",
                "memorise words only",
                "explain and apply the teaching respectfully",
                "ignore daily life"
              ],
              "correct": 2,
              "explanation": "A strong answer explains the teaching and applies it respectfully."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "The Night Journey (Isra/Israi and Miraj) should help a learner:",
        "choices": [
          "mock prayer",
          "be careless with worship",
          "spread insults",
          "choose to value Swalat and speak respectfully about sacred events"
        ],
        "correct": 3,
        "why": "Isra/Israi and Miraj teach Allah’s power and the importance of prayer."
      },
      {
        "q": "A good IRE answer should connect Islamic teaching to:",
        "choices": [
          "daily life and good conduct",
          "only noise",
          "only money",
          "only roads"
        ],
        "correct": 0,
        "why": "IRE should connect Islamic teaching to daily life."
      },
      {
        "q": "When unsure about a religious practice, a learner should:",
        "choices": [
          "guess carelessly",
          "ask a teacher or trusted adult",
          "mock it",
          "ignore learning"
        ],
        "correct": 1,
        "why": "Trusted guidance prevents mistakes."
      },
      {
        "q": "This topic includes Meaning of Israi.",
        "choices": [
          "False",
          "Only for P7",
          "True",
          "Only for Mathematics"
        ],
        "correct": 2,
        "why": "Meaning of Israi is listed in the NCDC/MoES P4 abridged map for this topic."
      },
      {
        "q": "Which is connected to this topic?",
        "choices": [
          "weather instruments only",
          "money conversion only",
          "road construction only",
          "Meaning of Miraj"
        ],
        "correct": 3,
        "why": "Meaning of Miraj is part of the topic scope."
      },
      {
        "q": "A learner shows good Religious Education learning by:",
        "choices": [
          "acting respectfully",
          "insulting others",
          "hiding all mistakes",
          "refusing peace"
        ],
        "correct": 0,
        "why": "Religious Education should shape respectful conduct."
      }
    ]
  },
  {
    "id": "p4-ire-surat-al-falaq",
    "themeId": "p4-ire",
    "themeName": "Islamic Religious Education",
    "title": "Surat Al-Falaq (113)",
    "estMinutes": 30,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P4 Religious Education beta: built from the NCDC/MoES Primary 4 Abridged Curriculum for Uganda; confirm against the full standard P4 CRE/IRE syllabus before premium-final release. Surat Al-Falaq (113) helps P4 learners connect Islamic teaching with worship, clean conduct, respect and daily choices.",
      "learningObjectives": [
        "Explain the main idea of Surat Al-Falaq (113).",
        "Name the key practices, people or values in the topic.",
        "Apply the topic respectfully in daily life.",
        "Answer simple P4 Religious Education questions in full sentences."
      ],
      "whatYouNeedToKnow": [
        "Surat Al-Falaq teaches seeking Allah’s protection from harm.",
        "Learners should use respectful wording for Allah, the Qur'an, prayer and Prophet Muhammad (PBUH).",
        "Recitation should be practised with a teacher or knowledgeable adult, and learners should also understand the lesson for daily life.",
        "This topic includes: Reciting Surat Al-Falaq.",
        "This topic includes: Meaning of Surat Al-Falaq.",
        "This topic includes: Importance of Surat Al-Falaq.",
        "This topic includes: Seeking Allah's protection."
      ],
      "worked": {
        "problem": "How can a P4 learner apply the lesson of Surat Al-Falaq (113) at school?",
        "steps": [
          "Identify the main value or practice in the topic.",
          "Choose a real school situation.",
          "Write one respectful action a learner can take."
        ],
        "answer": "A P4 learner can apply Surat Al-Falaq (113) by choosing to seek Allah’s protection and avoid envy or harmful actions."
      },
      "commonMistakes": [
        "Writing one-word answers without explanation.",
        "Using disrespectful words about faith, worship or other people.",
        "Forgetting to connect the topic to daily life.",
        "Treating this beta source as premium-final before the full standard P4 RE syllabus is checked."
      ],
      "recap": [
        "Surat Al-Falaq teaches seeking Allah’s protection from harm.",
        "Learners should use respectful wording for Allah, the Qur'an, prayer and Prophet Muhammad (PBUH).",
        "Recitation should be practised with a teacher or knowledgeable adult, and learners should also understand the lesson for daily life."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-ire-surat-al-falaq-key-teaching",
        "title": "1. Key teaching",
        "modules": [
          {
            "moduleId": "p4-ire-surat-al-falaq-key",
            "title": "Understanding Surat Al-Falaq (113)",
            "bigIdea": "Islamic Religious Education connects worship, belief and daily conduct.",
            "learnIt": [
              "Surat Al-Falaq (113) is part of the P4 IRE abridged curriculum map.",
              "Learners study reciting surat al-falaq.",
              "Learners study meaning of surat al-falaq.",
              "Learners study importance of surat al-falaq.",
              "Learners study seeking allah's protection.",
              "Learners study avoiding mischief, harmful creatures and wickedness."
            ],
            "workedExample": {
              "question": "Name one thing studied under Surat Al-Falaq (113).",
              "steps": [
                "Read the listed parts of the topic.",
                "Choose one clear part.",
                "Write it as a full answer."
              ],
              "answer": "Reciting Surat Al-Falaq"
            },
            "tryThis": {
              "question": "Which belongs to Surat Al-Falaq (113)?",
              "choices": [
                "A random mathematics formula",
                "Reciting Surat Al-Falaq",
                "A road distance only",
                "A weather graph only"
              ],
              "correct": 1,
              "explanation": "The correct choice is part of the mapped topic."
            },
            "imageUrl": "/images/re/p4-ire-quran-prayer-cleanliness.svg",
            "imageCaption": "IRE Qur’an, prayer and cleanliness."
          }
        ]
      },
      {
        "subtopicId": "p4-ire-surat-al-falaq-application",
        "title": "2. Daily-life application",
        "modules": [
          {
            "moduleId": "p4-ire-surat-al-falaq-life",
            "title": "Applying the lesson",
            "bigIdea": "Surat Al-Falaq teaches seeking Allah’s protection from harm.",
            "learnIt": [
              "A learner can apply this topic by choosing to seek Allah’s protection and avoid envy or harmful actions.",
              "The answer should be respectful, practical and connected to daily life.",
              "If the question is about worship or scripture, learners should ask a teacher or trusted adult for correct details."
            ],
            "workedExample": {
              "question": "Write one respectful action connected to this topic.",
              "steps": [
                "Think of the topic value.",
                "Think of home, school or community.",
                "Write a practical action."
              ],
              "answer": "A P4 learner can apply Surat Al-Falaq (113) by choosing to seek Allah’s protection and avoid envy or harmful actions."
            },
            "tryThis": {
              "question": "The best way to apply Religious Education is to:",
              "choices": [
                "mock other people",
                "spread quarrels",
                "choose to seek Allah’s protection and avoid envy or harmful actions",
                "ignore good advice"
              ],
              "correct": 2,
              "explanation": "This action applies the topic respectfully in daily life."
            },
            "imageUrl": "/images/re/p4-ire-quran-prayer-cleanliness.svg",
            "imageCaption": "IRE Qur’an, prayer and cleanliness."
          }
        ]
      },
      {
        "subtopicId": "p4-ire-surat-al-falaq-reasoning",
        "title": "3. Reasoning and respectful application",
        "modules": [
          {
            "moduleId": "p4-ire-surat-al-falaq-reasoning-module",
            "title": "Reasoning and respectful application",
            "bigIdea": "Religious Education should shape respectful thinking and daily conduct, not only memorisation.",
            "imageUrl": "/images/re/p4-ire-quran-prayer-cleanliness.svg",
            "imageCaption": "IRE Qur’an, prayer and cleanliness.",
            "learnIt": [
              "Name the main teaching in Surat Al-Falaq (113).",
              "Explain the value behind the teaching in simple words.",
              "Give one practical action a P4 learner can do at home, school or community.",
              "Use respectful language about Allah, the Qur’an, prayer and Prophet Muhammad (PBUH)."
            ],
            "workedExample": {
              "question": "Write two sentences showing how Surat Al-Falaq (113) can guide a P4 learner.",
              "steps": [
                "Name the teaching.",
                "Explain the value.",
                "Give a practical respectful action."
              ],
              "answer": "A good answer explains Surat Al-Falaq (113) and gives a respectful daily-life action."
            },
            "tryThis": {
              "question": "A strong RE answer should:",
              "choices": [
                "mock other people",
                "memorise words only",
                "ignore daily life",
                "explain and apply the teaching respectfully"
              ],
              "correct": 3,
              "explanation": "A strong answer explains the teaching and applies it respectfully."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Surat Al-Falaq (113) should help a learner:",
        "choices": [
          "choose to seek Allah’s protection and avoid envy or harmful actions",
          "mock prayer",
          "be careless with worship",
          "spread insults"
        ],
        "correct": 0,
        "why": "Surat Al-Falaq teaches seeking Allah’s protection from harm."
      },
      {
        "q": "A good IRE answer should connect Islamic teaching to:",
        "choices": [
          "only noise",
          "daily life and good conduct",
          "only money",
          "only roads"
        ],
        "correct": 1,
        "why": "IRE should connect Islamic teaching to daily life."
      },
      {
        "q": "When unsure about a religious practice, a learner should:",
        "choices": [
          "guess carelessly",
          "mock it",
          "ask a teacher or trusted adult",
          "ignore learning"
        ],
        "correct": 2,
        "why": "Trusted guidance prevents mistakes."
      },
      {
        "q": "This topic includes Reciting Surat Al-Falaq.",
        "choices": [
          "False",
          "Only for P7",
          "Only for Mathematics",
          "True"
        ],
        "correct": 3,
        "why": "Reciting Surat Al-Falaq is listed in the NCDC/MoES P4 abridged map for this topic."
      },
      {
        "q": "Which is connected to this topic?",
        "choices": [
          "Meaning of Surat Al-Falaq",
          "weather instruments only",
          "money conversion only",
          "road construction only"
        ],
        "correct": 0,
        "why": "Meaning of Surat Al-Falaq is part of the topic scope."
      },
      {
        "q": "A learner shows good Religious Education learning by:",
        "choices": [
          "insulting others",
          "acting respectfully",
          "hiding all mistakes",
          "refusing peace"
        ],
        "correct": 1,
        "why": "Religious Education should shape respectful conduct."
      }
    ]
  },
  {
    "id": "p4-ire-unique-nature-muhammad-messengership",
    "themeId": "p4-ire",
    "themeName": "Islamic Religious Education",
    "title": "Unique Nature of Prophet Muhammad's (PBUH) Messengership",
    "estMinutes": 30,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P4 Religious Education beta: built from the NCDC/MoES Primary 4 Abridged Curriculum for Uganda; confirm against the full standard P4 CRE/IRE syllabus before premium-final release. Unique Nature of Muhammad's (PBUH) Messengership helps P4 learners connect Islamic teaching with worship, clean conduct, respect and daily choices.",
      "learningObjectives": [
        "Explain the main idea of Unique Nature of Muhammad's (PBUH) Messengership.",
        "Name the key practices, people or values in the topic.",
        "Apply the topic respectfully in daily life.",
        "Answer simple P4 Religious Education questions in full sentences."
      ],
      "whatYouNeedToKnow": [
        "Prophet Muhammad’s (PBUH) messengership is central to Islamic teaching.",
        "Learners should use respectful wording for Allah, the Qur'an, prayer and Prophet Muhammad (PBUH).",
        "This topic includes: Reasons why Muhammad (PBUH) went to the cave.",
        "This topic includes: Nature of Prophet Muhammad's (PBUH) messengership.",
        "This topic includes: Aspects that made Prophet Muhammad's (PBUH) message unique.",
        "This topic includes: How Muhammad's (PBUH) message differed from predecessors."
      ],
      "worked": {
        "problem": "How can a P4 learner apply the lesson of Unique Nature of Muhammad's (PBUH) Messengership at school?",
        "steps": [
          "Identify the main value or practice in the topic.",
          "Choose a real school situation.",
          "Write one respectful action a learner can take."
        ],
        "answer": "A P4 learner can apply Unique Nature of Prophet Muhammad's (PBUH) Messengership by choosing to respect Prophet Muhammad (PBUH) and follow truthful, merciful conduct."
      },
      "commonMistakes": [
        "Writing one-word answers without explanation.",
        "Using disrespectful words about faith, worship or other people.",
        "Forgetting to connect the topic to daily life.",
        "Treating this beta source as premium-final before the full standard P4 RE syllabus is checked."
      ],
      "recap": [
        "Prophet Muhammad’s (PBUH) messengership is central to Islamic teaching.",
        "Learners should use respectful wording for Allah, the Qur'an, prayer and Prophet Muhammad (PBUH).",
        "This topic includes: Reasons why Muhammad (PBUH) went to the cave."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-ire-unique-nature-muhammad-messengership-key-teaching",
        "title": "1. Key teaching",
        "modules": [
          {
            "moduleId": "p4-ire-unique-nature-muhammad-messengership-key",
            "title": "Understanding Unique Nature of Muhammad's (PBUH) Messengership",
            "bigIdea": "Islamic Religious Education connects worship, belief and daily conduct.",
            "learnIt": [
              "Unique Nature of Muhammad's (PBUH) Messengership is part of the P4 IRE abridged curriculum map.",
              "Learners study reasons why muhammad (pbuh) went to the cave.",
              "Learners study nature of prophet muhammad's (pbuh) messengership.",
              "Learners study aspects that made prophet muhammad's (pbuh) message unique.",
              "Learners study how muhammad's (pbuh) message differed from predecessors.",
              "Learners study lessons from prophet muhammad's (pbuh) messengership."
            ],
            "workedExample": {
              "question": "Name one thing studied under Unique Nature of Muhammad's (PBUH) Messengership.",
              "steps": [
                "Read the listed parts of the topic.",
                "Choose one clear part.",
                "Write it as a full answer."
              ],
              "answer": "Reasons why Muhammad (PBUH) went to the cave"
            },
            "tryThis": {
              "question": "Which belongs to Unique Nature of Muhammad's (PBUH) Messengership?",
              "choices": [
                "A random mathematics formula",
                "A road distance only",
                "Reasons why Muhammad (PBUH) went to the cave",
                "A weather graph only"
              ],
              "correct": 2,
              "explanation": "The correct choice is part of the mapped topic."
            },
            "imageUrl": "/images/re/p4-ire-prophets-values.svg",
            "imageCaption": "IRE prophets, Imaan and values."
          }
        ]
      },
      {
        "subtopicId": "p4-ire-unique-nature-muhammad-messengership-application",
        "title": "2. Daily-life application",
        "modules": [
          {
            "moduleId": "p4-ire-unique-nature-muhammad-messengership-life",
            "title": "Applying the lesson",
            "bigIdea": "Prophet Muhammad’s (PBUH) messengership is central to Islamic teaching.",
            "learnIt": [
              "A learner can apply this topic by choosing to respect Prophet Muhammad (PBUH) and follow truthful, merciful conduct.",
              "The answer should be respectful, practical and connected to daily life.",
              "If the question is about worship or scripture, learners should ask a teacher or trusted adult for correct details."
            ],
            "workedExample": {
              "question": "Write one respectful action connected to this topic.",
              "steps": [
                "Think of the topic value.",
                "Think of home, school or community.",
                "Write a practical action."
              ],
              "answer": "A P4 learner can apply Unique Nature of Prophet Muhammad's (PBUH) Messengership by choosing to respect Prophet Muhammad (PBUH) and follow truthful, merciful conduct."
            },
            "tryThis": {
              "question": "The best way to apply Religious Education is to:",
              "choices": [
                "mock other people",
                "spread quarrels",
                "ignore good advice",
                "choose to respect Prophet Muhammad (PBUH) and follow truthful, merciful conduct"
              ],
              "correct": 3,
              "explanation": "This action applies the topic respectfully in daily life."
            },
            "imageUrl": "/images/re/p4-ire-prophets-values.svg",
            "imageCaption": "IRE prophets, Imaan and values."
          }
        ]
      },
      {
        "subtopicId": "p4-ire-unique-nature-muhammad-messengership-reasoning",
        "title": "3. Reasoning and respectful application",
        "modules": [
          {
            "moduleId": "p4-ire-unique-nature-muhammad-messengership-reasoning-module",
            "title": "Reasoning and respectful application",
            "bigIdea": "Religious Education should shape respectful thinking and daily conduct, not only memorisation.",
            "imageUrl": "/images/re/p4-ire-prophets-values.svg",
            "imageCaption": "IRE prophets, Imaan and values.",
            "learnIt": [
              "Name the main teaching in Unique Nature of Prophet Muhammad's (PBUH) Messengership.",
              "Explain the value behind the teaching in simple words.",
              "Give one practical action a P4 learner can do at home, school or community.",
              "Use respectful language about Allah, the Qur’an, prayer and Prophet Muhammad (PBUH)."
            ],
            "workedExample": {
              "question": "Write two sentences showing how Unique Nature of Prophet Muhammad's (PBUH) Messengership can guide a P4 learner.",
              "steps": [
                "Name the teaching.",
                "Explain the value.",
                "Give a practical respectful action."
              ],
              "answer": "A good answer explains Unique Nature of Prophet Muhammad's (PBUH) Messengership and gives a respectful daily-life action."
            },
            "tryThis": {
              "question": "A strong RE answer should:",
              "choices": [
                "explain and apply the teaching respectfully",
                "mock other people",
                "memorise words only",
                "ignore daily life"
              ],
              "correct": 0,
              "explanation": "A strong answer explains the teaching and applies it respectfully."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Unique Nature of Prophet Muhammad's (PBUH) Messengership should help a learner:",
        "choices": [
          "mock prayer",
          "choose to respect Prophet Muhammad (PBUH) and follow truthful, merciful conduct",
          "be careless with worship",
          "spread insults"
        ],
        "correct": 1,
        "why": "Prophet Muhammad’s (PBUH) messengership is central to Islamic teaching."
      },
      {
        "q": "A good IRE answer should connect Islamic teaching to:",
        "choices": [
          "only noise",
          "only money",
          "daily life and good conduct",
          "only roads"
        ],
        "correct": 2,
        "why": "IRE should connect Islamic teaching to daily life."
      },
      {
        "q": "When unsure about a religious practice, a learner should:",
        "choices": [
          "guess carelessly",
          "mock it",
          "ignore learning",
          "ask a teacher or trusted adult"
        ],
        "correct": 3,
        "why": "Trusted guidance prevents mistakes."
      },
      {
        "q": "This topic includes Reasons why Muhammad (PBUH) went to the cave.",
        "choices": [
          "True",
          "False",
          "Only for P7",
          "Only for Mathematics"
        ],
        "correct": 0,
        "why": "Reasons why Muhammad (PBUH) went to the cave is listed in the NCDC/MoES P4 abridged map for this topic."
      },
      {
        "q": "Which is connected to this topic?",
        "choices": [
          "weather instruments only",
          "Nature of Prophet Muhammad's (PBUH) messengership",
          "money conversion only",
          "road construction only"
        ],
        "correct": 1,
        "why": "Nature of Prophet Muhammad's (PBUH) messengership is part of the topic scope."
      },
      {
        "q": "A learner shows good Religious Education learning by:",
        "choices": [
          "insulting others",
          "hiding all mistakes",
          "acting respectfully",
          "refusing peace"
        ],
        "correct": 2,
        "why": "Religious Education should shape respectful conduct."
      }
    ]
  },
  {
    "id": "p4-ire-conduct-after-swalat",
    "themeId": "p4-ire",
    "themeName": "Islamic Religious Education",
    "title": "Conduct after Swalat",
    "estMinutes": 30,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P4 Religious Education beta: built from the NCDC/MoES Primary 4 Abridged Curriculum for Uganda; confirm against the full standard P4 CRE/IRE syllabus before premium-final release. Conduct after Swalat helps P4 learners connect Islamic teaching with worship, clean conduct, respect and daily choices.",
      "learningObjectives": [
        "Explain the main idea of Conduct after Swalat.",
        "Name the key practices, people or values in the topic.",
        "Apply the topic respectfully in daily life.",
        "Answer simple P4 Religious Education questions in full sentences."
      ],
      "whatYouNeedToKnow": [
        "Conduct after Swalat includes dua, adhkar and respectful remembrance of Allah.",
        "Learners should use respectful wording for Allah, the Qur'an, prayer and Prophet Muhammad (PBUH).",
        "Prayer topics require attention to cleanliness, order, humility and respect for worship.",
        "This topic includes: Dua for acquisition of knowledge.",
        "This topic includes: Behaviour after Swalat.",
        "This topic includes: Adhkar after Swalat.",
        "This topic includes: Activities after Swalat."
      ],
      "worked": {
        "problem": "How can a P4 learner apply the lesson of Conduct after Swalat at school?",
        "steps": [
          "Identify the main value or practice in the topic.",
          "Choose a real school situation.",
          "Write one respectful action a learner can take."
        ],
        "answer": "A P4 learner can apply Conduct after Swalat by choosing to make dua, remember Allah and behave calmly after Swalat."
      },
      "commonMistakes": [
        "Writing one-word answers without explanation.",
        "Using disrespectful words about faith, worship or other people.",
        "Forgetting to connect the topic to daily life.",
        "Treating this beta source as premium-final before the full standard P4 RE syllabus is checked."
      ],
      "recap": [
        "Conduct after Swalat includes dua, adhkar and respectful remembrance of Allah.",
        "Learners should use respectful wording for Allah, the Qur'an, prayer and Prophet Muhammad (PBUH).",
        "Prayer topics require attention to cleanliness, order, humility and respect for worship."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-ire-conduct-after-swalat-key-teaching",
        "title": "1. Key teaching",
        "modules": [
          {
            "moduleId": "p4-ire-conduct-after-swalat-key",
            "title": "Understanding Conduct after Swalat",
            "bigIdea": "Islamic Religious Education connects worship, belief and daily conduct.",
            "learnIt": [
              "Conduct after Swalat is part of the P4 IRE abridged curriculum map.",
              "Learners study dua for acquisition of knowledge.",
              "Learners study behaviour after swalat.",
              "Learners study adhkar after swalat.",
              "Learners study activities after swalat.",
              "Learners study importance of duas and supplications."
            ],
            "workedExample": {
              "question": "Name one thing studied under Conduct after Swalat.",
              "steps": [
                "Read the listed parts of the topic.",
                "Choose one clear part.",
                "Write it as a full answer."
              ],
              "answer": "Dua for acquisition of knowledge"
            },
            "tryThis": {
              "question": "Which belongs to Conduct after Swalat?",
              "choices": [
                "A random mathematics formula",
                "A road distance only",
                "A weather graph only",
                "Dua for acquisition of knowledge"
              ],
              "correct": 3,
              "explanation": "The correct choice is part of the mapped topic."
            },
            "imageUrl": "/images/re/p4-ire-quran-prayer-cleanliness.svg",
            "imageCaption": "IRE Qur’an, prayer and cleanliness."
          }
        ]
      },
      {
        "subtopicId": "p4-ire-conduct-after-swalat-application",
        "title": "2. Daily-life application",
        "modules": [
          {
            "moduleId": "p4-ire-conduct-after-swalat-life",
            "title": "Applying the lesson",
            "bigIdea": "Conduct after Swalat includes dua, adhkar and respectful remembrance of Allah.",
            "learnIt": [
              "A learner can apply this topic by choosing to make dua, remember Allah and behave calmly after Swalat.",
              "The answer should be respectful, practical and connected to daily life.",
              "If the question is about worship or scripture, learners should ask a teacher or trusted adult for correct details."
            ],
            "workedExample": {
              "question": "Write one respectful action connected to this topic.",
              "steps": [
                "Think of the topic value.",
                "Think of home, school or community.",
                "Write a practical action."
              ],
              "answer": "A P4 learner can apply Conduct after Swalat by choosing to make dua, remember Allah and behave calmly after Swalat."
            },
            "tryThis": {
              "question": "The best way to apply Religious Education is to:",
              "choices": [
                "choose to make dua, remember Allah and behave calmly after Swalat",
                "mock other people",
                "spread quarrels",
                "ignore good advice"
              ],
              "correct": 0,
              "explanation": "This action applies the topic respectfully in daily life."
            },
            "imageUrl": "/images/re/p4-ire-quran-prayer-cleanliness.svg",
            "imageCaption": "IRE Qur’an, prayer and cleanliness."
          }
        ]
      },
      {
        "subtopicId": "p4-ire-conduct-after-swalat-reasoning",
        "title": "3. Reasoning and respectful application",
        "modules": [
          {
            "moduleId": "p4-ire-conduct-after-swalat-reasoning-module",
            "title": "Reasoning and respectful application",
            "bigIdea": "Religious Education should shape respectful thinking and daily conduct, not only memorisation.",
            "imageUrl": "/images/re/p4-ire-quran-prayer-cleanliness.svg",
            "imageCaption": "IRE Qur’an, prayer and cleanliness.",
            "learnIt": [
              "Name the main teaching in Conduct after Swalat.",
              "Explain the value behind the teaching in simple words.",
              "Give one practical action a P4 learner can do at home, school or community.",
              "Use respectful language about Allah, the Qur’an, prayer and Prophet Muhammad (PBUH)."
            ],
            "workedExample": {
              "question": "Write two sentences showing how Conduct after Swalat can guide a P4 learner.",
              "steps": [
                "Name the teaching.",
                "Explain the value.",
                "Give a practical respectful action."
              ],
              "answer": "A good answer explains Conduct after Swalat and gives a respectful daily-life action."
            },
            "tryThis": {
              "question": "A strong RE answer should:",
              "choices": [
                "mock other people",
                "explain and apply the teaching respectfully",
                "memorise words only",
                "ignore daily life"
              ],
              "correct": 1,
              "explanation": "A strong answer explains the teaching and applies it respectfully."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Conduct after Swalat should help a learner:",
        "choices": [
          "mock prayer",
          "be careless with worship",
          "choose to make dua, remember Allah and behave calmly after Swalat",
          "spread insults"
        ],
        "correct": 2,
        "why": "Conduct after Swalat includes dua, adhkar and respectful remembrance of Allah."
      },
      {
        "q": "A good IRE answer should connect Islamic teaching to:",
        "choices": [
          "only noise",
          "only money",
          "only roads",
          "daily life and good conduct"
        ],
        "correct": 3,
        "why": "IRE should connect Islamic teaching to daily life."
      },
      {
        "q": "When unsure about a religious practice, a learner should:",
        "choices": [
          "ask a teacher or trusted adult",
          "guess carelessly",
          "mock it",
          "ignore learning"
        ],
        "correct": 0,
        "why": "Trusted guidance prevents mistakes."
      },
      {
        "q": "This topic includes Dua for acquisition of knowledge.",
        "choices": [
          "False",
          "True",
          "Only for P7",
          "Only for Mathematics"
        ],
        "correct": 1,
        "why": "Dua for acquisition of knowledge is listed in the NCDC/MoES P4 abridged map for this topic."
      },
      {
        "q": "Which is connected to this topic?",
        "choices": [
          "weather instruments only",
          "money conversion only",
          "Behaviour after Swalat",
          "road construction only"
        ],
        "correct": 2,
        "why": "Behaviour after Swalat is part of the topic scope."
      },
      {
        "q": "A learner shows good Religious Education learning by:",
        "choices": [
          "insulting others",
          "hiding all mistakes",
          "refusing peace",
          "acting respectfully"
        ],
        "correct": 3,
        "why": "Religious Education should shape respectful conduct."
      }
    ]
  },
  {
    "id": "p4-ire-dress-cleanliness",
    "themeId": "p4-ire",
    "themeName": "Islamic Religious Education",
    "title": "Dress and Cleanliness",
    "estMinutes": 30,
    "status": "published",
    "reviewStatus": "beta",
    "note": {
      "intro": "P4 Religious Education beta: built from the NCDC/MoES Primary 4 Abridged Curriculum for Uganda; confirm against the full standard P4 CRE/IRE syllabus before premium-final release. Dress and Cleanliness helps P4 learners connect Islamic teaching with worship, clean conduct, respect and daily choices.",
      "learningObjectives": [
        "Explain the main idea of Dress and Cleanliness.",
        "Name the key practices, people or values in the topic.",
        "Apply the topic respectfully in daily life.",
        "Answer simple P4 Religious Education questions in full sentences."
      ],
      "whatYouNeedToKnow": [
        "Islam teaches cleanliness, purity and decent dress.",
        "Learners should use respectful wording for Allah, the Qur'an, prayer and Prophet Muhammad (PBUH).",
        "Cleanliness and decent conduct should be explained as part of worship and healthy daily life.",
        "This topic includes: Hadith concerning cleanliness.",
        "This topic includes: Prophetic teaching on cleanliness.",
        "This topic includes: Purity and decency in Islam.",
        "This topic includes: Substances which are unclean and can spoil Swalat."
      ],
      "worked": {
        "problem": "How can a P4 learner apply the lesson of Dress and Cleanliness at school?",
        "steps": [
          "Identify the main value or practice in the topic.",
          "Choose a real school situation.",
          "Write one respectful action a learner can take."
        ],
        "answer": "A P4 learner can apply Dress and Cleanliness by choosing to keep clothes, body and worship places clean and decent."
      },
      "commonMistakes": [
        "Writing one-word answers without explanation.",
        "Using disrespectful words about faith, worship or other people.",
        "Forgetting to connect the topic to daily life.",
        "Treating this beta source as premium-final before the full standard P4 RE syllabus is checked."
      ],
      "recap": [
        "Islam teaches cleanliness, purity and decent dress.",
        "Learners should use respectful wording for Allah, the Qur'an, prayer and Prophet Muhammad (PBUH).",
        "Cleanliness and decent conduct should be explained as part of worship and healthy daily life."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-ire-dress-cleanliness-key-teaching",
        "title": "1. Key teaching",
        "modules": [
          {
            "moduleId": "p4-ire-dress-cleanliness-key",
            "title": "Understanding Dress and Cleanliness",
            "bigIdea": "Islamic Religious Education connects worship, belief and daily conduct.",
            "learnIt": [
              "Dress and Cleanliness is part of the P4 IRE abridged curriculum map.",
              "Learners study hadith concerning cleanliness.",
              "Learners study prophetic teaching on cleanliness.",
              "Learners study purity and decency in islam.",
              "Learners study substances which are unclean and can spoil swalat.",
              "Learners study dress in a way accepted by allah."
            ],
            "workedExample": {
              "question": "Name one thing studied under Dress and Cleanliness.",
              "steps": [
                "Read the listed parts of the topic.",
                "Choose one clear part.",
                "Write it as a full answer."
              ],
              "answer": "Hadith concerning cleanliness"
            },
            "tryThis": {
              "question": "Which belongs to Dress and Cleanliness?",
              "choices": [
                "Hadith concerning cleanliness",
                "A random mathematics formula",
                "A road distance only",
                "A weather graph only"
              ],
              "correct": 0,
              "explanation": "The correct choice is part of the mapped topic."
            },
            "imageUrl": "/images/re/p4-ire-quran-prayer-cleanliness.svg",
            "imageCaption": "IRE Qur’an, prayer and cleanliness."
          }
        ]
      },
      {
        "subtopicId": "p4-ire-dress-cleanliness-application",
        "title": "2. Daily-life application",
        "modules": [
          {
            "moduleId": "p4-ire-dress-cleanliness-life",
            "title": "Applying the lesson",
            "bigIdea": "Islam teaches cleanliness, purity and decent dress.",
            "learnIt": [
              "A learner can apply this topic by choosing to keep clothes, body and worship places clean and decent.",
              "The answer should be respectful, practical and connected to daily life.",
              "If the question is about worship or scripture, learners should ask a teacher or trusted adult for correct details."
            ],
            "workedExample": {
              "question": "Write one respectful action connected to this topic.",
              "steps": [
                "Think of the topic value.",
                "Think of home, school or community.",
                "Write a practical action."
              ],
              "answer": "A P4 learner can apply Dress and Cleanliness by choosing to keep clothes, body and worship places clean and decent."
            },
            "tryThis": {
              "question": "The best way to apply Religious Education is to:",
              "choices": [
                "mock other people",
                "choose to keep clothes, body and worship places clean and decent",
                "spread quarrels",
                "ignore good advice"
              ],
              "correct": 1,
              "explanation": "This action applies the topic respectfully in daily life."
            },
            "imageUrl": "/images/re/p4-ire-quran-prayer-cleanliness.svg",
            "imageCaption": "IRE Qur’an, prayer and cleanliness."
          }
        ]
      },
      {
        "subtopicId": "p4-ire-dress-cleanliness-reasoning",
        "title": "3. Reasoning and respectful application",
        "modules": [
          {
            "moduleId": "p4-ire-dress-cleanliness-reasoning-module",
            "title": "Reasoning and respectful application",
            "bigIdea": "Religious Education should shape respectful thinking and daily conduct, not only memorisation.",
            "imageUrl": "/images/re/p4-ire-quran-prayer-cleanliness.svg",
            "imageCaption": "IRE Qur’an, prayer and cleanliness.",
            "learnIt": [
              "Name the main teaching in Dress and Cleanliness.",
              "Explain the value behind the teaching in simple words.",
              "Give one practical action a P4 learner can do at home, school or community.",
              "Use respectful language about Allah, the Qur’an, prayer and Prophet Muhammad (PBUH)."
            ],
            "workedExample": {
              "question": "Write two sentences showing how Dress and Cleanliness can guide a P4 learner.",
              "steps": [
                "Name the teaching.",
                "Explain the value.",
                "Give a practical respectful action."
              ],
              "answer": "A good answer explains Dress and Cleanliness and gives a respectful daily-life action."
            },
            "tryThis": {
              "question": "A strong RE answer should:",
              "choices": [
                "mock other people",
                "memorise words only",
                "explain and apply the teaching respectfully",
                "ignore daily life"
              ],
              "correct": 2,
              "explanation": "A strong answer explains the teaching and applies it respectfully."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Dress and Cleanliness should help a learner:",
        "choices": [
          "mock prayer",
          "be careless with worship",
          "spread insults",
          "choose to keep clothes, body and worship places clean and decent"
        ],
        "correct": 3,
        "why": "Islam teaches cleanliness, purity and decent dress."
      },
      {
        "q": "A good IRE answer should connect Islamic teaching to:",
        "choices": [
          "daily life and good conduct",
          "only noise",
          "only money",
          "only roads"
        ],
        "correct": 0,
        "why": "IRE should connect Islamic teaching to daily life."
      },
      {
        "q": "When unsure about a religious practice, a learner should:",
        "choices": [
          "guess carelessly",
          "ask a teacher or trusted adult",
          "mock it",
          "ignore learning"
        ],
        "correct": 1,
        "why": "Trusted guidance prevents mistakes."
      },
      {
        "q": "This topic includes Hadith concerning cleanliness.",
        "choices": [
          "False",
          "Only for P7",
          "True",
          "Only for Mathematics"
        ],
        "correct": 2,
        "why": "Hadith concerning cleanliness is listed in the NCDC/MoES P4 abridged map for this topic."
      },
      {
        "q": "Which is connected to this topic?",
        "choices": [
          "weather instruments only",
          "money conversion only",
          "road construction only",
          "Prophetic teaching on cleanliness"
        ],
        "correct": 3,
        "why": "Prophetic teaching on cleanliness is part of the topic scope."
      },
      {
        "q": "A learner shows good Religious Education learning by:",
        "choices": [
          "acting respectfully",
          "insulting others",
          "hiding all mistakes",
          "refusing peace"
        ],
        "correct": 0,
        "why": "Religious Education should shape respectful conduct."
      }
    ]
  }
];

export function getP4ReTopic(id: string): Topic | undefined {
  return P4_RE_TOPICS.find((topic) => topic.id === id);
}
