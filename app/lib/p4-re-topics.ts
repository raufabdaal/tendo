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
    "estMinutes": 26,
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
        "This CRE topic should be studied respectfully using the Bible, teacher guidance and daily-life examples.",
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
        "answer": "A P4 learner can apply Traditions by choosing respectful words, doing what is right, and helping other people."
      },
      "commonMistakes": [
        "Writing one-word answers without explanation.",
        "Using disrespectful words about faith, worship or other people.",
        "Forgetting to connect the topic to daily life.",
        "Treating this beta source as premium-final before the full standard P4 RE syllabus is checked."
      ],
      "recap": [
        "This CRE topic should be studied respectfully using the Bible, teacher guidance and daily-life examples.",
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
              "explanation": "The first choice is part of the mapped topic."
            }
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
            "bigIdea": "A learner should show Christian values through action, not words only.",
            "learnIt": [
              "Use the lesson to make good choices at home and school.",
              "Speak respectfully about God, people and communities.",
              "Choose peace, honesty, service and care where the topic calls for them."
            ],
            "workedExample": {
              "question": "Write one respectful action connected to this topic.",
              "steps": [
                "Think of the topic value.",
                "Think of home, school or community.",
                "Write a practical action."
              ],
              "answer": "A P4 learner can apply Traditions by choosing respectful words, doing what is right, and helping other people."
            },
            "tryThis": {
              "question": "The best way to apply Religious Education is to:",
              "choices": [
                "do what is right respectfully",
                "mock others",
                "spread quarrels",
                "ignore good advice"
              ],
              "correct": 0,
              "explanation": "Religious Education should guide respectful good action."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Traditions should help a learner:",
        "choices": [
          "live with good values",
          "mock other people",
          "steal",
          "fight"
        ],
        "correct": 0,
        "why": "RE should guide good conduct."
      },
      {
        "q": "A good CRE answer should connect teaching to:",
        "choices": [
          "daily life",
          "only noise",
          "only money",
          "only roads"
        ],
        "correct": 0,
        "why": "CRE connects faith and life."
      },
      {
        "q": "Christians should speak about other people respectfully because:",
        "choices": [
          "respect promotes peace",
          "mockery is best",
          "fighting is worship",
          "truth is useless"
        ],
        "correct": 0,
        "why": "Respect promotes peace."
      },
      {
        "q": "This topic includes Traditional customs, practices and values.",
        "choices": [
          "True",
          "False",
          "Only for P7",
          "Only for Mathematics"
        ],
        "correct": 0,
        "why": "Traditional customs, practices and values is listed in the NCDC/MoES P4 abridged map for this topic."
      },
      {
        "q": "Which is connected to this topic?",
        "choices": [
          "Importance of traditions, customs and practices",
          "weather instruments only",
          "money conversion only",
          "road construction only"
        ],
        "correct": 0,
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
    "estMinutes": 26,
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
        "This CRE topic should be studied respectfully using the Bible, teacher guidance and daily-life examples.",
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
        "answer": "A P4 learner can apply Messengers of God by choosing respectful words, doing what is right, and helping other people."
      },
      "commonMistakes": [
        "Writing one-word answers without explanation.",
        "Using disrespectful words about faith, worship or other people.",
        "Forgetting to connect the topic to daily life.",
        "Treating this beta source as premium-final before the full standard P4 RE syllabus is checked."
      ],
      "recap": [
        "This CRE topic should be studied respectfully using the Bible, teacher guidance and daily-life examples.",
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
                "Meaning of messenger",
                "A random mathematics formula",
                "A road distance only",
                "A weather graph only"
              ],
              "correct": 0,
              "explanation": "The first choice is part of the mapped topic."
            }
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
            "bigIdea": "A learner should show Christian values through action, not words only.",
            "learnIt": [
              "Use the lesson to make good choices at home and school.",
              "Speak respectfully about God, people and communities.",
              "Choose peace, honesty, service and care where the topic calls for them."
            ],
            "workedExample": {
              "question": "Write one respectful action connected to this topic.",
              "steps": [
                "Think of the topic value.",
                "Think of home, school or community.",
                "Write a practical action."
              ],
              "answer": "A P4 learner can apply Messengers of God by choosing respectful words, doing what is right, and helping other people."
            },
            "tryThis": {
              "question": "The best way to apply Religious Education is to:",
              "choices": [
                "do what is right respectfully",
                "mock others",
                "spread quarrels",
                "ignore good advice"
              ],
              "correct": 0,
              "explanation": "Religious Education should guide respectful good action."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Messengers of God should help a learner:",
        "choices": [
          "live with good values",
          "mock other people",
          "steal",
          "fight"
        ],
        "correct": 0,
        "why": "RE should guide good conduct."
      },
      {
        "q": "A good CRE answer should connect teaching to:",
        "choices": [
          "daily life",
          "only noise",
          "only money",
          "only roads"
        ],
        "correct": 0,
        "why": "CRE connects faith and life."
      },
      {
        "q": "Christians should speak about other people respectfully because:",
        "choices": [
          "respect promotes peace",
          "mockery is best",
          "fighting is worship",
          "truth is useless"
        ],
        "correct": 0,
        "why": "Respect promotes peace."
      },
      {
        "q": "This topic includes Meaning of messenger.",
        "choices": [
          "True",
          "False",
          "Only for P7",
          "Only for Mathematics"
        ],
        "correct": 0,
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
    "id": "p4-cre-gods-continuing-love",
    "themeId": "p4-cre",
    "themeName": "Christian Religious Education",
    "title": "God's Continuing Love for His People",
    "estMinutes": 26,
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
        "This CRE topic should be studied respectfully using the Bible, teacher guidance and daily-life examples.",
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
        "answer": "A P4 learner can apply God's Continuing Love for His People by choosing respectful words, doing what is right, and helping other people."
      },
      "commonMistakes": [
        "Writing one-word answers without explanation.",
        "Using disrespectful words about faith, worship or other people.",
        "Forgetting to connect the topic to daily life.",
        "Treating this beta source as premium-final before the full standard P4 RE syllabus is checked."
      ],
      "recap": [
        "This CRE topic should be studied respectfully using the Bible, teacher guidance and daily-life examples.",
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
                "Creation",
                "A random mathematics formula",
                "A road distance only",
                "A weather graph only"
              ],
              "correct": 0,
              "explanation": "The first choice is part of the mapped topic."
            }
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
            "bigIdea": "A learner should show Christian values through action, not words only.",
            "learnIt": [
              "Use the lesson to make good choices at home and school.",
              "Speak respectfully about God, people and communities.",
              "Choose peace, honesty, service and care where the topic calls for them."
            ],
            "workedExample": {
              "question": "Write one respectful action connected to this topic.",
              "steps": [
                "Think of the topic value.",
                "Think of home, school or community.",
                "Write a practical action."
              ],
              "answer": "A P4 learner can apply God's Continuing Love for His People by choosing respectful words, doing what is right, and helping other people."
            },
            "tryThis": {
              "question": "The best way to apply Religious Education is to:",
              "choices": [
                "do what is right respectfully",
                "mock others",
                "spread quarrels",
                "ignore good advice"
              ],
              "correct": 0,
              "explanation": "Religious Education should guide respectful good action."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "God's Continuing Love for His People should help a learner:",
        "choices": [
          "live with good values",
          "mock other people",
          "steal",
          "fight"
        ],
        "correct": 0,
        "why": "RE should guide good conduct."
      },
      {
        "q": "A good CRE answer should connect teaching to:",
        "choices": [
          "daily life",
          "only noise",
          "only money",
          "only roads"
        ],
        "correct": 0,
        "why": "CRE connects faith and life."
      },
      {
        "q": "Christians should speak about other people respectfully because:",
        "choices": [
          "respect promotes peace",
          "mockery is best",
          "fighting is worship",
          "truth is useless"
        ],
        "correct": 0,
        "why": "Respect promotes peace."
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
          "The order of creation",
          "weather instruments only",
          "money conversion only",
          "road construction only"
        ],
        "correct": 0,
        "why": "The order of creation is part of the topic scope."
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
    "id": "p4-cre-gods-people-law",
    "themeId": "p4-cre",
    "themeName": "Christian Religious Education",
    "title": "God's People and the Law",
    "estMinutes": 26,
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
        "This CRE topic should be studied respectfully using the Bible, teacher guidance and daily-life examples.",
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
        "answer": "A P4 learner can apply God's People and the Law by choosing respectful words, doing what is right, and helping other people."
      },
      "commonMistakes": [
        "Writing one-word answers without explanation.",
        "Using disrespectful words about faith, worship or other people.",
        "Forgetting to connect the topic to daily life.",
        "Treating this beta source as premium-final before the full standard P4 RE syllabus is checked."
      ],
      "recap": [
        "This CRE topic should be studied respectfully using the Bible, teacher guidance and daily-life examples.",
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
                "God's covenant with His people",
                "A random mathematics formula",
                "A road distance only",
                "A weather graph only"
              ],
              "correct": 0,
              "explanation": "The first choice is part of the mapped topic."
            }
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
            "bigIdea": "A learner should show Christian values through action, not words only.",
            "learnIt": [
              "Use the lesson to make good choices at home and school.",
              "Speak respectfully about God, people and communities.",
              "Choose peace, honesty, service and care where the topic calls for them."
            ],
            "workedExample": {
              "question": "Write one respectful action connected to this topic.",
              "steps": [
                "Think of the topic value.",
                "Think of home, school or community.",
                "Write a practical action."
              ],
              "answer": "A P4 learner can apply God's People and the Law by choosing respectful words, doing what is right, and helping other people."
            },
            "tryThis": {
              "question": "The best way to apply Religious Education is to:",
              "choices": [
                "do what is right respectfully",
                "mock others",
                "spread quarrels",
                "ignore good advice"
              ],
              "correct": 0,
              "explanation": "Religious Education should guide respectful good action."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "God's People and the Law should help a learner:",
        "choices": [
          "live with good values",
          "mock other people",
          "steal",
          "fight"
        ],
        "correct": 0,
        "why": "RE should guide good conduct."
      },
      {
        "q": "A good CRE answer should connect teaching to:",
        "choices": [
          "daily life",
          "only noise",
          "only money",
          "only roads"
        ],
        "correct": 0,
        "why": "CRE connects faith and life."
      },
      {
        "q": "Christians should speak about other people respectfully because:",
        "choices": [
          "respect promotes peace",
          "mockery is best",
          "fighting is worship",
          "truth is useless"
        ],
        "correct": 0,
        "why": "Respect promotes peace."
      },
      {
        "q": "This topic includes God's covenant with His people.",
        "choices": [
          "True",
          "False",
          "Only for P7",
          "Only for Mathematics"
        ],
        "correct": 0,
        "why": "God's covenant with His people is listed in the NCDC/MoES P4 abridged map for this topic."
      },
      {
        "q": "Which is connected to this topic?",
        "choices": [
          "Noah's faithfulness to God",
          "weather instruments only",
          "money conversion only",
          "road construction only"
        ],
        "correct": 0,
        "why": "Noah's faithfulness to God is part of the topic scope."
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
    "id": "p4-cre-following-jesus-leader",
    "themeId": "p4-cre",
    "themeName": "Christian Religious Education",
    "title": "Following Jesus as a Leader",
    "estMinutes": 26,
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
        "This CRE topic should be studied respectfully using the Bible, teacher guidance and daily-life examples.",
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
        "answer": "A P4 learner can apply Following Jesus as a Leader by choosing respectful words, doing what is right, and helping other people."
      },
      "commonMistakes": [
        "Writing one-word answers without explanation.",
        "Using disrespectful words about faith, worship or other people.",
        "Forgetting to connect the topic to daily life.",
        "Treating this beta source as premium-final before the full standard P4 RE syllabus is checked."
      ],
      "recap": [
        "This CRE topic should be studied respectfully using the Bible, teacher guidance and daily-life examples.",
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
              "explanation": "The first choice is part of the mapped topic."
            }
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
            "bigIdea": "A learner should show Christian values through action, not words only.",
            "learnIt": [
              "Use the lesson to make good choices at home and school.",
              "Speak respectfully about God, people and communities.",
              "Choose peace, honesty, service and care where the topic calls for them."
            ],
            "workedExample": {
              "question": "Write one respectful action connected to this topic.",
              "steps": [
                "Think of the topic value.",
                "Think of home, school or community.",
                "Write a practical action."
              ],
              "answer": "A P4 learner can apply Following Jesus as a Leader by choosing respectful words, doing what is right, and helping other people."
            },
            "tryThis": {
              "question": "The best way to apply Religious Education is to:",
              "choices": [
                "do what is right respectfully",
                "mock others",
                "spread quarrels",
                "ignore good advice"
              ],
              "correct": 0,
              "explanation": "Religious Education should guide respectful good action."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Following Jesus as a Leader should help a learner:",
        "choices": [
          "live with good values",
          "mock other people",
          "steal",
          "fight"
        ],
        "correct": 0,
        "why": "RE should guide good conduct."
      },
      {
        "q": "A good CRE answer should connect teaching to:",
        "choices": [
          "daily life",
          "only noise",
          "only money",
          "only roads"
        ],
        "correct": 0,
        "why": "CRE connects faith and life."
      },
      {
        "q": "Christians should speak about other people respectfully because:",
        "choices": [
          "respect promotes peace",
          "mockery is best",
          "fighting is worship",
          "truth is useless"
        ],
        "correct": 0,
        "why": "Respect promotes peace."
      },
      {
        "q": "This topic includes Jesus as a leader.",
        "choices": [
          "True",
          "False",
          "Only for P7",
          "Only for Mathematics"
        ],
        "correct": 0,
        "why": "Jesus as a leader is listed in the NCDC/MoES P4 abridged map for this topic."
      },
      {
        "q": "Which is connected to this topic?",
        "choices": [
          "Jesus' authority",
          "weather instruments only",
          "money conversion only",
          "road construction only"
        ],
        "correct": 0,
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
    "estMinutes": 26,
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
        "This CRE topic should be studied respectfully using the Bible, teacher guidance and daily-life examples.",
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
        "answer": "A P4 learner can apply Jesus Christ Our Saviour by choosing respectful words, doing what is right, and helping other people."
      },
      "commonMistakes": [
        "Writing one-word answers without explanation.",
        "Using disrespectful words about faith, worship or other people.",
        "Forgetting to connect the topic to daily life.",
        "Treating this beta source as premium-final before the full standard P4 RE syllabus is checked."
      ],
      "recap": [
        "This CRE topic should be studied respectfully using the Bible, teacher guidance and daily-life examples.",
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
                "Jesus' suffering",
                "A random mathematics formula",
                "A road distance only",
                "A weather graph only"
              ],
              "correct": 0,
              "explanation": "The first choice is part of the mapped topic."
            }
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
            "bigIdea": "A learner should show Christian values through action, not words only.",
            "learnIt": [
              "Use the lesson to make good choices at home and school.",
              "Speak respectfully about God, people and communities.",
              "Choose peace, honesty, service and care where the topic calls for them."
            ],
            "workedExample": {
              "question": "Write one respectful action connected to this topic.",
              "steps": [
                "Think of the topic value.",
                "Think of home, school or community.",
                "Write a practical action."
              ],
              "answer": "A P4 learner can apply Jesus Christ Our Saviour by choosing respectful words, doing what is right, and helping other people."
            },
            "tryThis": {
              "question": "The best way to apply Religious Education is to:",
              "choices": [
                "do what is right respectfully",
                "mock others",
                "spread quarrels",
                "ignore good advice"
              ],
              "correct": 0,
              "explanation": "Religious Education should guide respectful good action."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Jesus Christ Our Saviour should help a learner:",
        "choices": [
          "live with good values",
          "mock other people",
          "steal",
          "fight"
        ],
        "correct": 0,
        "why": "RE should guide good conduct."
      },
      {
        "q": "A good CRE answer should connect teaching to:",
        "choices": [
          "daily life",
          "only noise",
          "only money",
          "only roads"
        ],
        "correct": 0,
        "why": "CRE connects faith and life."
      },
      {
        "q": "Christians should speak about other people respectfully because:",
        "choices": [
          "respect promotes peace",
          "mockery is best",
          "fighting is worship",
          "truth is useless"
        ],
        "correct": 0,
        "why": "Respect promotes peace."
      },
      {
        "q": "This topic includes Jesus' suffering.",
        "choices": [
          "True",
          "False",
          "Only for P7",
          "Only for Mathematics"
        ],
        "correct": 0,
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
    "id": "p4-cre-worshipping-community",
    "themeId": "p4-cre",
    "themeName": "Christian Religious Education",
    "title": "The Worshipping Community",
    "estMinutes": 26,
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
        "This CRE topic should be studied respectfully using the Bible, teacher guidance and daily-life examples.",
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
        "answer": "A P4 learner can apply The Worshipping Community by choosing respectful words, doing what is right, and helping other people."
      },
      "commonMistakes": [
        "Writing one-word answers without explanation.",
        "Using disrespectful words about faith, worship or other people.",
        "Forgetting to connect the topic to daily life.",
        "Treating this beta source as premium-final before the full standard P4 RE syllabus is checked."
      ],
      "recap": [
        "This CRE topic should be studied respectfully using the Bible, teacher guidance and daily-life examples.",
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
                "Christian activities in worshipping God",
                "A random mathematics formula",
                "A road distance only",
                "A weather graph only"
              ],
              "correct": 0,
              "explanation": "The first choice is part of the mapped topic."
            }
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
            "bigIdea": "A learner should show Christian values through action, not words only.",
            "learnIt": [
              "Use the lesson to make good choices at home and school.",
              "Speak respectfully about God, people and communities.",
              "Choose peace, honesty, service and care where the topic calls for them."
            ],
            "workedExample": {
              "question": "Write one respectful action connected to this topic.",
              "steps": [
                "Think of the topic value.",
                "Think of home, school or community.",
                "Write a practical action."
              ],
              "answer": "A P4 learner can apply The Worshipping Community by choosing respectful words, doing what is right, and helping other people."
            },
            "tryThis": {
              "question": "The best way to apply Religious Education is to:",
              "choices": [
                "do what is right respectfully",
                "mock others",
                "spread quarrels",
                "ignore good advice"
              ],
              "correct": 0,
              "explanation": "Religious Education should guide respectful good action."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "The Worshipping Community should help a learner:",
        "choices": [
          "live with good values",
          "mock other people",
          "steal",
          "fight"
        ],
        "correct": 0,
        "why": "RE should guide good conduct."
      },
      {
        "q": "A good CRE answer should connect teaching to:",
        "choices": [
          "daily life",
          "only noise",
          "only money",
          "only roads"
        ],
        "correct": 0,
        "why": "CRE connects faith and life."
      },
      {
        "q": "Christians should speak about other people respectfully because:",
        "choices": [
          "respect promotes peace",
          "mockery is best",
          "fighting is worship",
          "truth is useless"
        ],
        "correct": 0,
        "why": "Respect promotes peace."
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
          "Christian joint activities and experiences",
          "weather instruments only",
          "money conversion only",
          "road construction only"
        ],
        "correct": 0,
        "why": "Christian joint activities and experiences is part of the topic scope."
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
    "id": "p4-cre-christian-community",
    "themeId": "p4-cre",
    "themeName": "Christian Religious Education",
    "title": "The Christian Community",
    "estMinutes": 26,
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
        "This CRE topic should be studied respectfully using the Bible, teacher guidance and daily-life examples.",
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
        "answer": "A P4 learner can apply The Christian Community by choosing respectful words, doing what is right, and helping other people."
      },
      "commonMistakes": [
        "Writing one-word answers without explanation.",
        "Using disrespectful words about faith, worship or other people.",
        "Forgetting to connect the topic to daily life.",
        "Treating this beta source as premium-final before the full standard P4 RE syllabus is checked."
      ],
      "recap": [
        "This CRE topic should be studied respectfully using the Bible, teacher guidance and daily-life examples.",
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
                "Meaning of the Church",
                "A random mathematics formula",
                "A road distance only",
                "A weather graph only"
              ],
              "correct": 0,
              "explanation": "The first choice is part of the mapped topic."
            }
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
            "bigIdea": "A learner should show Christian values through action, not words only.",
            "learnIt": [
              "Use the lesson to make good choices at home and school.",
              "Speak respectfully about God, people and communities.",
              "Choose peace, honesty, service and care where the topic calls for them."
            ],
            "workedExample": {
              "question": "Write one respectful action connected to this topic.",
              "steps": [
                "Think of the topic value.",
                "Think of home, school or community.",
                "Write a practical action."
              ],
              "answer": "A P4 learner can apply The Christian Community by choosing respectful words, doing what is right, and helping other people."
            },
            "tryThis": {
              "question": "The best way to apply Religious Education is to:",
              "choices": [
                "do what is right respectfully",
                "mock others",
                "spread quarrels",
                "ignore good advice"
              ],
              "correct": 0,
              "explanation": "Religious Education should guide respectful good action."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "The Christian Community should help a learner:",
        "choices": [
          "live with good values",
          "mock other people",
          "steal",
          "fight"
        ],
        "correct": 0,
        "why": "RE should guide good conduct."
      },
      {
        "q": "A good CRE answer should connect teaching to:",
        "choices": [
          "daily life",
          "only noise",
          "only money",
          "only roads"
        ],
        "correct": 0,
        "why": "CRE connects faith and life."
      },
      {
        "q": "Christians should speak about other people respectfully because:",
        "choices": [
          "respect promotes peace",
          "mockery is best",
          "fighting is worship",
          "truth is useless"
        ],
        "correct": 0,
        "why": "Respect promotes peace."
      },
      {
        "q": "This topic includes Meaning of the Church.",
        "choices": [
          "True",
          "False",
          "Only for P7",
          "Only for Mathematics"
        ],
        "correct": 0,
        "why": "Meaning of the Church is listed in the NCDC/MoES P4 abridged map for this topic."
      },
      {
        "q": "Which is connected to this topic?",
        "choices": [
          "Events and activities of the Early Church",
          "weather instruments only",
          "money conversion only",
          "road construction only"
        ],
        "correct": 0,
        "why": "Events and activities of the Early Church is part of the topic scope."
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
    "id": "p4-cre-jesus-example-service",
    "themeId": "p4-cre",
    "themeName": "Christian Religious Education",
    "title": "Jesus Our Example in Service",
    "estMinutes": 26,
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
        "This CRE topic should be studied respectfully using the Bible, teacher guidance and daily-life examples.",
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
        "answer": "A P4 learner can apply Jesus Our Example in Service by choosing respectful words, doing what is right, and helping other people."
      },
      "commonMistakes": [
        "Writing one-word answers without explanation.",
        "Using disrespectful words about faith, worship or other people.",
        "Forgetting to connect the topic to daily life.",
        "Treating this beta source as premium-final before the full standard P4 RE syllabus is checked."
      ],
      "recap": [
        "This CRE topic should be studied respectfully using the Bible, teacher guidance and daily-life examples.",
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
              "explanation": "The first choice is part of the mapped topic."
            }
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
            "bigIdea": "A learner should show Christian values through action, not words only.",
            "learnIt": [
              "Use the lesson to make good choices at home and school.",
              "Speak respectfully about God, people and communities.",
              "Choose peace, honesty, service and care where the topic calls for them."
            ],
            "workedExample": {
              "question": "Write one respectful action connected to this topic.",
              "steps": [
                "Think of the topic value.",
                "Think of home, school or community.",
                "Write a practical action."
              ],
              "answer": "A P4 learner can apply Jesus Our Example in Service by choosing respectful words, doing what is right, and helping other people."
            },
            "tryThis": {
              "question": "The best way to apply Religious Education is to:",
              "choices": [
                "do what is right respectfully",
                "mock others",
                "spread quarrels",
                "ignore good advice"
              ],
              "correct": 0,
              "explanation": "Religious Education should guide respectful good action."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Jesus Our Example in Service should help a learner:",
        "choices": [
          "live with good values",
          "mock other people",
          "steal",
          "fight"
        ],
        "correct": 0,
        "why": "RE should guide good conduct."
      },
      {
        "q": "A good CRE answer should connect teaching to:",
        "choices": [
          "daily life",
          "only noise",
          "only money",
          "only roads"
        ],
        "correct": 0,
        "why": "CRE connects faith and life."
      },
      {
        "q": "Christians should speak about other people respectfully because:",
        "choices": [
          "respect promotes peace",
          "mockery is best",
          "fighting is worship",
          "truth is useless"
        ],
        "correct": 0,
        "why": "Respect promotes peace."
      },
      {
        "q": "This topic includes Ways Jesus served others.",
        "choices": [
          "True",
          "False",
          "Only for P7",
          "Only for Mathematics"
        ],
        "correct": 0,
        "why": "Ways Jesus served others is listed in the NCDC/MoES P4 abridged map for this topic."
      },
      {
        "q": "Which is connected to this topic?",
        "choices": [
          "Jesus serving His parents and other people",
          "weather instruments only",
          "money conversion only",
          "road construction only"
        ],
        "correct": 0,
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
    "estMinutes": 26,
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
        "This CRE topic should be studied respectfully using the Bible, teacher guidance and daily-life examples.",
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
        "answer": "A P4 learner can apply Making Our Decisions as Christians by choosing respectful words, doing what is right, and helping other people."
      },
      "commonMistakes": [
        "Writing one-word answers without explanation.",
        "Using disrespectful words about faith, worship or other people.",
        "Forgetting to connect the topic to daily life.",
        "Treating this beta source as premium-final before the full standard P4 RE syllabus is checked."
      ],
      "recap": [
        "This CRE topic should be studied respectfully using the Bible, teacher guidance and daily-life examples.",
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
                "Meaning of decision-making",
                "A random mathematics formula",
                "A road distance only",
                "A weather graph only"
              ],
              "correct": 0,
              "explanation": "The first choice is part of the mapped topic."
            }
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
            "bigIdea": "A learner should show Christian values through action, not words only.",
            "learnIt": [
              "Use the lesson to make good choices at home and school.",
              "Speak respectfully about God, people and communities.",
              "Choose peace, honesty, service and care where the topic calls for them."
            ],
            "workedExample": {
              "question": "Write one respectful action connected to this topic.",
              "steps": [
                "Think of the topic value.",
                "Think of home, school or community.",
                "Write a practical action."
              ],
              "answer": "A P4 learner can apply Making Our Decisions as Christians by choosing respectful words, doing what is right, and helping other people."
            },
            "tryThis": {
              "question": "The best way to apply Religious Education is to:",
              "choices": [
                "do what is right respectfully",
                "mock others",
                "spread quarrels",
                "ignore good advice"
              ],
              "correct": 0,
              "explanation": "Religious Education should guide respectful good action."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Making Our Decisions as Christians should help a learner:",
        "choices": [
          "live with good values",
          "mock other people",
          "steal",
          "fight"
        ],
        "correct": 0,
        "why": "RE should guide good conduct."
      },
      {
        "q": "A good CRE answer should connect teaching to:",
        "choices": [
          "daily life",
          "only noise",
          "only money",
          "only roads"
        ],
        "correct": 0,
        "why": "CRE connects faith and life."
      },
      {
        "q": "Christians should speak about other people respectfully because:",
        "choices": [
          "respect promotes peace",
          "mockery is best",
          "fighting is worship",
          "truth is useless"
        ],
        "correct": 0,
        "why": "Respect promotes peace."
      },
      {
        "q": "This topic includes Meaning of decision-making.",
        "choices": [
          "True",
          "False",
          "Only for P7",
          "Only for Mathematics"
        ],
        "correct": 0,
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
    "id": "p4-cre-peace",
    "themeId": "p4-cre",
    "themeName": "Christian Religious Education",
    "title": "Peace",
    "estMinutes": 26,
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
        "This CRE topic should be studied respectfully using the Bible, teacher guidance and daily-life examples.",
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
        "answer": "A P4 learner can apply Peace by choosing respectful words, doing what is right, and helping other people."
      },
      "commonMistakes": [
        "Writing one-word answers without explanation.",
        "Using disrespectful words about faith, worship or other people.",
        "Forgetting to connect the topic to daily life.",
        "Treating this beta source as premium-final before the full standard P4 RE syllabus is checked."
      ],
      "recap": [
        "This CRE topic should be studied respectfully using the Bible, teacher guidance and daily-life examples.",
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
                "Meaning of peace",
                "A random mathematics formula",
                "A road distance only",
                "A weather graph only"
              ],
              "correct": 0,
              "explanation": "The first choice is part of the mapped topic."
            }
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
            "bigIdea": "A learner should show Christian values through action, not words only.",
            "learnIt": [
              "Use the lesson to make good choices at home and school.",
              "Speak respectfully about God, people and communities.",
              "Choose peace, honesty, service and care where the topic calls for them."
            ],
            "workedExample": {
              "question": "Write one respectful action connected to this topic.",
              "steps": [
                "Think of the topic value.",
                "Think of home, school or community.",
                "Write a practical action."
              ],
              "answer": "A P4 learner can apply Peace by choosing respectful words, doing what is right, and helping other people."
            },
            "tryThis": {
              "question": "The best way to apply Religious Education is to:",
              "choices": [
                "do what is right respectfully",
                "mock others",
                "spread quarrels",
                "ignore good advice"
              ],
              "correct": 0,
              "explanation": "Religious Education should guide respectful good action."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Peace should help a learner:",
        "choices": [
          "live with good values",
          "mock other people",
          "steal",
          "fight"
        ],
        "correct": 0,
        "why": "RE should guide good conduct."
      },
      {
        "q": "A good CRE answer should connect teaching to:",
        "choices": [
          "daily life",
          "only noise",
          "only money",
          "only roads"
        ],
        "correct": 0,
        "why": "CRE connects faith and life."
      },
      {
        "q": "Christians should speak about other people respectfully because:",
        "choices": [
          "respect promotes peace",
          "mockery is best",
          "fighting is worship",
          "truth is useless"
        ],
        "correct": 0,
        "why": "Respect promotes peace."
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
          "Keeping peace through prayer and obedience to God's commandments",
          "weather instruments only",
          "money conversion only",
          "road construction only"
        ],
        "correct": 0,
        "why": "Keeping peace through prayer and obedience to God's commandments is part of the topic scope."
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
    "id": "p4-ire-surat-al-asr",
    "themeId": "p4-ire",
    "themeName": "Islamic Religious Education",
    "title": "Surat Al-Asr",
    "estMinutes": 24,
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
        "This IRE topic should be studied respectfully using the Qur'an/Hadith where applicable, teacher guidance and daily-life examples.",
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
        "answer": "A P4 learner can apply Surat Al-Asr by worshipping respectfully, keeping clean conduct, and treating other people well."
      },
      "commonMistakes": [
        "Writing one-word answers without explanation.",
        "Using disrespectful words about faith, worship or other people.",
        "Forgetting to connect the topic to daily life.",
        "Treating this beta source as premium-final before the full standard P4 RE syllabus is checked."
      ],
      "recap": [
        "This IRE topic should be studied respectfully using the Qur'an/Hadith where applicable, teacher guidance and daily-life examples.",
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
                "Reciting Surat Al-Asr",
                "A random mathematics formula",
                "A road distance only",
                "A weather graph only"
              ],
              "correct": 0,
              "explanation": "The first choice is part of the mapped topic."
            }
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
            "bigIdea": "A learner should show Islamic values through clean habits, respectful speech and good actions.",
            "learnIt": [
              "Use the lesson to make good choices at home, school and mosque.",
              "Speak respectfully about Allah, the Qur'an, prayer and Prophet Muhammad (PBUH).",
              "Choose cleanliness, patience, truthfulness and respect where the topic calls for them."
            ],
            "workedExample": {
              "question": "Write one respectful action connected to this topic.",
              "steps": [
                "Think of the topic value.",
                "Think of home, school or community.",
                "Write a practical action."
              ],
              "answer": "A P4 learner can apply Surat Al-Asr by worshipping respectfully, keeping clean conduct, and treating other people well."
            },
            "tryThis": {
              "question": "The best way to apply Religious Education is to:",
              "choices": [
                "do what is right respectfully",
                "mock others",
                "spread quarrels",
                "ignore good advice"
              ],
              "correct": 0,
              "explanation": "Religious Education should guide respectful good action."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Surat Al-Asr should help a learner:",
        "choices": [
          "live with good Islamic conduct",
          "mock prayer",
          "be careless",
          "steal"
        ],
        "correct": 0,
        "why": "IRE should guide good conduct."
      },
      {
        "q": "A good IRE answer should be:",
        "choices": [
          "respectful and clear",
          "mocking",
          "careless",
          "full of insults"
        ],
        "correct": 0,
        "why": "Religious answers need respect."
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
          "True",
          "False",
          "Only for P7",
          "Only for Mathematics"
        ],
        "correct": 0,
        "why": "Reciting Surat Al-Asr is listed in the NCDC/MoES P4 abridged map for this topic."
      },
      {
        "q": "Which is connected to this topic?",
        "choices": [
          "Meaning of Surat Al-Asr",
          "weather instruments only",
          "money conversion only",
          "road construction only"
        ],
        "correct": 0,
        "why": "Meaning of Surat Al-Asr is part of the topic scope."
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
    "id": "p4-ire-prophet-messenger",
    "themeId": "p4-ire",
    "themeName": "Islamic Religious Education",
    "title": "Prophet/Messenger",
    "estMinutes": 24,
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
        "This IRE topic should be studied respectfully using the Qur'an/Hadith where applicable, teacher guidance and daily-life examples.",
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
        "answer": "A P4 learner can apply Prophet/Messenger by worshipping respectfully, keeping clean conduct, and treating other people well."
      },
      "commonMistakes": [
        "Writing one-word answers without explanation.",
        "Using disrespectful words about faith, worship or other people.",
        "Forgetting to connect the topic to daily life.",
        "Treating this beta source as premium-final before the full standard P4 RE syllabus is checked."
      ],
      "recap": [
        "This IRE topic should be studied respectfully using the Qur'an/Hadith where applicable, teacher guidance and daily-life examples.",
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
              "explanation": "The first choice is part of the mapped topic."
            }
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
            "bigIdea": "A learner should show Islamic values through clean habits, respectful speech and good actions.",
            "learnIt": [
              "Use the lesson to make good choices at home, school and mosque.",
              "Speak respectfully about Allah, the Qur'an, prayer and Prophet Muhammad (PBUH).",
              "Choose cleanliness, patience, truthfulness and respect where the topic calls for them."
            ],
            "workedExample": {
              "question": "Write one respectful action connected to this topic.",
              "steps": [
                "Think of the topic value.",
                "Think of home, school or community.",
                "Write a practical action."
              ],
              "answer": "A P4 learner can apply Prophet/Messenger by worshipping respectfully, keeping clean conduct, and treating other people well."
            },
            "tryThis": {
              "question": "The best way to apply Religious Education is to:",
              "choices": [
                "do what is right respectfully",
                "mock others",
                "spread quarrels",
                "ignore good advice"
              ],
              "correct": 0,
              "explanation": "Religious Education should guide respectful good action."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Prophet/Messenger should help a learner:",
        "choices": [
          "live with good Islamic conduct",
          "mock prayer",
          "be careless",
          "steal"
        ],
        "correct": 0,
        "why": "IRE should guide good conduct."
      },
      {
        "q": "A good IRE answer should be:",
        "choices": [
          "respectful and clear",
          "mocking",
          "careless",
          "full of insults"
        ],
        "correct": 0,
        "why": "Religious answers need respect."
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
        "q": "This topic includes Meaning of prophet and messenger.",
        "choices": [
          "True",
          "False",
          "Only for P7",
          "Only for Mathematics"
        ],
        "correct": 0,
        "why": "Meaning of prophet and messenger is listed in the NCDC/MoES P4 abridged map for this topic."
      },
      {
        "q": "Which is connected to this topic?",
        "choices": [
          "Relationship between prophet and messenger",
          "weather instruments only",
          "money conversion only",
          "road construction only"
        ],
        "correct": 0,
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
    "estMinutes": 24,
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
        "This IRE topic should be studied respectfully using the Qur'an/Hadith where applicable, teacher guidance and daily-life examples.",
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
        "answer": "A P4 learner can apply Dress for Prayer by worshipping respectfully, keeping clean conduct, and treating other people well."
      },
      "commonMistakes": [
        "Writing one-word answers without explanation.",
        "Using disrespectful words about faith, worship or other people.",
        "Forgetting to connect the topic to daily life.",
        "Treating this beta source as premium-final before the full standard P4 RE syllabus is checked."
      ],
      "recap": [
        "This IRE topic should be studied respectfully using the Qur'an/Hadith where applicable, teacher guidance and daily-life examples.",
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
                "Usefulness of serving Allah and being peaceful",
                "A random mathematics formula",
                "A road distance only",
                "A weather graph only"
              ],
              "correct": 0,
              "explanation": "The first choice is part of the mapped topic."
            }
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
            "bigIdea": "A learner should show Islamic values through clean habits, respectful speech and good actions.",
            "learnIt": [
              "Use the lesson to make good choices at home, school and mosque.",
              "Speak respectfully about Allah, the Qur'an, prayer and Prophet Muhammad (PBUH).",
              "Choose cleanliness, patience, truthfulness and respect where the topic calls for them."
            ],
            "workedExample": {
              "question": "Write one respectful action connected to this topic.",
              "steps": [
                "Think of the topic value.",
                "Think of home, school or community.",
                "Write a practical action."
              ],
              "answer": "A P4 learner can apply Dress for Prayer by worshipping respectfully, keeping clean conduct, and treating other people well."
            },
            "tryThis": {
              "question": "The best way to apply Religious Education is to:",
              "choices": [
                "do what is right respectfully",
                "mock others",
                "spread quarrels",
                "ignore good advice"
              ],
              "correct": 0,
              "explanation": "Religious Education should guide respectful good action."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Dress for Prayer should help a learner:",
        "choices": [
          "live with good Islamic conduct",
          "mock prayer",
          "be careless",
          "steal"
        ],
        "correct": 0,
        "why": "IRE should guide good conduct."
      },
      {
        "q": "A good IRE answer should be:",
        "choices": [
          "respectful and clear",
          "mocking",
          "careless",
          "full of insults"
        ],
        "correct": 0,
        "why": "Religious answers need respect."
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
        "q": "This topic includes Usefulness of serving Allah and being peaceful.",
        "choices": [
          "True",
          "False",
          "Only for P7",
          "Only for Mathematics"
        ],
        "correct": 0,
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
    "id": "p4-ire-impurities",
    "themeId": "p4-ire",
    "themeName": "Islamic Religious Education",
    "title": "Impurities",
    "estMinutes": 24,
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
        "This IRE topic should be studied respectfully using the Qur'an/Hadith where applicable, teacher guidance and daily-life examples.",
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
        "answer": "A P4 learner can apply Impurities by worshipping respectfully, keeping clean conduct, and treating other people well."
      },
      "commonMistakes": [
        "Writing one-word answers without explanation.",
        "Using disrespectful words about faith, worship or other people.",
        "Forgetting to connect the topic to daily life.",
        "Treating this beta source as premium-final before the full standard P4 RE syllabus is checked."
      ],
      "recap": [
        "This IRE topic should be studied respectfully using the Qur'an/Hadith where applicable, teacher guidance and daily-life examples.",
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
                "Meaning of impurities",
                "A random mathematics formula",
                "A road distance only",
                "A weather graph only"
              ],
              "correct": 0,
              "explanation": "The first choice is part of the mapped topic."
            }
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
            "bigIdea": "A learner should show Islamic values through clean habits, respectful speech and good actions.",
            "learnIt": [
              "Use the lesson to make good choices at home, school and mosque.",
              "Speak respectfully about Allah, the Qur'an, prayer and Prophet Muhammad (PBUH).",
              "Choose cleanliness, patience, truthfulness and respect where the topic calls for them."
            ],
            "workedExample": {
              "question": "Write one respectful action connected to this topic.",
              "steps": [
                "Think of the topic value.",
                "Think of home, school or community.",
                "Write a practical action."
              ],
              "answer": "A P4 learner can apply Impurities by worshipping respectfully, keeping clean conduct, and treating other people well."
            },
            "tryThis": {
              "question": "The best way to apply Religious Education is to:",
              "choices": [
                "do what is right respectfully",
                "mock others",
                "spread quarrels",
                "ignore good advice"
              ],
              "correct": 0,
              "explanation": "Religious Education should guide respectful good action."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Impurities should help a learner:",
        "choices": [
          "live with good Islamic conduct",
          "mock prayer",
          "be careless",
          "steal"
        ],
        "correct": 0,
        "why": "IRE should guide good conduct."
      },
      {
        "q": "A good IRE answer should be:",
        "choices": [
          "respectful and clear",
          "mocking",
          "careless",
          "full of insults"
        ],
        "correct": 0,
        "why": "Religious answers need respect."
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
          "Types of impurities",
          "weather instruments only",
          "money conversion only",
          "road construction only"
        ],
        "correct": 0,
        "why": "Types of impurities is part of the topic scope."
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
    "id": "p4-ire-early-converts-islam",
    "themeId": "p4-ire",
    "themeName": "Islamic Religious Education",
    "title": "Early Converts in Islam",
    "estMinutes": 24,
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
        "This IRE topic should be studied respectfully using the Qur'an/Hadith where applicable, teacher guidance and daily-life examples.",
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
        "answer": "A P4 learner can apply Early Converts in Islam by worshipping respectfully, keeping clean conduct, and treating other people well."
      },
      "commonMistakes": [
        "Writing one-word answers without explanation.",
        "Using disrespectful words about faith, worship or other people.",
        "Forgetting to connect the topic to daily life.",
        "Treating this beta source as premium-final before the full standard P4 RE syllabus is checked."
      ],
      "recap": [
        "This IRE topic should be studied respectfully using the Qur'an/Hadith where applicable, teacher guidance and daily-life examples.",
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
                "Meaning of early converts",
                "A random mathematics formula",
                "A road distance only",
                "A weather graph only"
              ],
              "correct": 0,
              "explanation": "The first choice is part of the mapped topic."
            }
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
            "bigIdea": "A learner should show Islamic values through clean habits, respectful speech and good actions.",
            "learnIt": [
              "Use the lesson to make good choices at home, school and mosque.",
              "Speak respectfully about Allah, the Qur'an, prayer and Prophet Muhammad (PBUH).",
              "Choose cleanliness, patience, truthfulness and respect where the topic calls for them."
            ],
            "workedExample": {
              "question": "Write one respectful action connected to this topic.",
              "steps": [
                "Think of the topic value.",
                "Think of home, school or community.",
                "Write a practical action."
              ],
              "answer": "A P4 learner can apply Early Converts in Islam by worshipping respectfully, keeping clean conduct, and treating other people well."
            },
            "tryThis": {
              "question": "The best way to apply Religious Education is to:",
              "choices": [
                "do what is right respectfully",
                "mock others",
                "spread quarrels",
                "ignore good advice"
              ],
              "correct": 0,
              "explanation": "Religious Education should guide respectful good action."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Early Converts in Islam should help a learner:",
        "choices": [
          "live with good Islamic conduct",
          "mock prayer",
          "be careless",
          "steal"
        ],
        "correct": 0,
        "why": "IRE should guide good conduct."
      },
      {
        "q": "A good IRE answer should be:",
        "choices": [
          "respectful and clear",
          "mocking",
          "careless",
          "full of insults"
        ],
        "correct": 0,
        "why": "Religious answers need respect."
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
          "True",
          "False",
          "Only for P7",
          "Only for Mathematics"
        ],
        "correct": 0,
        "why": "Meaning of early converts is listed in the NCDC/MoES P4 abridged map for this topic."
      },
      {
        "q": "Which is connected to this topic?",
        "choices": [
          "Names of early converts in Islam",
          "weather instruments only",
          "money conversion only",
          "road construction only"
        ],
        "correct": 0,
        "why": "Names of early converts in Islam is part of the topic scope."
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
    "id": "p4-ire-surat-al-humaza",
    "themeId": "p4-ire",
    "themeName": "Islamic Religious Education",
    "title": "Surat Al-Humaza",
    "estMinutes": 24,
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
        "This IRE topic should be studied respectfully using the Qur'an/Hadith where applicable, teacher guidance and daily-life examples.",
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
        "answer": "A P4 learner can apply Surat Al-Humaza by worshipping respectfully, keeping clean conduct, and treating other people well."
      },
      "commonMistakes": [
        "Writing one-word answers without explanation.",
        "Using disrespectful words about faith, worship or other people.",
        "Forgetting to connect the topic to daily life.",
        "Treating this beta source as premium-final before the full standard P4 RE syllabus is checked."
      ],
      "recap": [
        "This IRE topic should be studied respectfully using the Qur'an/Hadith where applicable, teacher guidance and daily-life examples.",
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
              "explanation": "The first choice is part of the mapped topic."
            }
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
            "bigIdea": "A learner should show Islamic values through clean habits, respectful speech and good actions.",
            "learnIt": [
              "Use the lesson to make good choices at home, school and mosque.",
              "Speak respectfully about Allah, the Qur'an, prayer and Prophet Muhammad (PBUH).",
              "Choose cleanliness, patience, truthfulness and respect where the topic calls for them."
            ],
            "workedExample": {
              "question": "Write one respectful action connected to this topic.",
              "steps": [
                "Think of the topic value.",
                "Think of home, school or community.",
                "Write a practical action."
              ],
              "answer": "A P4 learner can apply Surat Al-Humaza by worshipping respectfully, keeping clean conduct, and treating other people well."
            },
            "tryThis": {
              "question": "The best way to apply Religious Education is to:",
              "choices": [
                "do what is right respectfully",
                "mock others",
                "spread quarrels",
                "ignore good advice"
              ],
              "correct": 0,
              "explanation": "Religious Education should guide respectful good action."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Surat Al-Humaza should help a learner:",
        "choices": [
          "live with good Islamic conduct",
          "mock prayer",
          "be careless",
          "steal"
        ],
        "correct": 0,
        "why": "IRE should guide good conduct."
      },
      {
        "q": "A good IRE answer should be:",
        "choices": [
          "respectful and clear",
          "mocking",
          "careless",
          "full of insults"
        ],
        "correct": 0,
        "why": "Religious answers need respect."
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
        "q": "This topic includes Reciting Surat Al-Humaza.",
        "choices": [
          "True",
          "False",
          "Only for P7",
          "Only for Mathematics"
        ],
        "correct": 0,
        "why": "Reciting Surat Al-Humaza is listed in the NCDC/MoES P4 abridged map for this topic."
      },
      {
        "q": "Which is connected to this topic?",
        "choices": [
          "Meaning of Surat Al-Humaza",
          "weather instruments only",
          "money conversion only",
          "road construction only"
        ],
        "correct": 0,
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
    "estMinutes": 24,
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
        "This IRE topic should be studied respectfully using the Qur'an/Hadith where applicable, teacher guidance and daily-life examples.",
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
        "answer": "A P4 learner can apply The 25 Prophets by worshipping respectfully, keeping clean conduct, and treating other people well."
      },
      "commonMistakes": [
        "Writing one-word answers without explanation.",
        "Using disrespectful words about faith, worship or other people.",
        "Forgetting to connect the topic to daily life.",
        "Treating this beta source as premium-final before the full standard P4 RE syllabus is checked."
      ],
      "recap": [
        "This IRE topic should be studied respectfully using the Qur'an/Hadith where applicable, teacher guidance and daily-life examples.",
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
                "Names of the 25 prophets mentioned in the Qur'an",
                "A random mathematics formula",
                "A road distance only",
                "A weather graph only"
              ],
              "correct": 0,
              "explanation": "The first choice is part of the mapped topic."
            }
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
            "bigIdea": "A learner should show Islamic values through clean habits, respectful speech and good actions.",
            "learnIt": [
              "Use the lesson to make good choices at home, school and mosque.",
              "Speak respectfully about Allah, the Qur'an, prayer and Prophet Muhammad (PBUH).",
              "Choose cleanliness, patience, truthfulness and respect where the topic calls for them."
            ],
            "workedExample": {
              "question": "Write one respectful action connected to this topic.",
              "steps": [
                "Think of the topic value.",
                "Think of home, school or community.",
                "Write a practical action."
              ],
              "answer": "A P4 learner can apply The 25 Prophets by worshipping respectfully, keeping clean conduct, and treating other people well."
            },
            "tryThis": {
              "question": "The best way to apply Religious Education is to:",
              "choices": [
                "do what is right respectfully",
                "mock others",
                "spread quarrels",
                "ignore good advice"
              ],
              "correct": 0,
              "explanation": "Religious Education should guide respectful good action."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "The 25 Prophets should help a learner:",
        "choices": [
          "live with good Islamic conduct",
          "mock prayer",
          "be careless",
          "steal"
        ],
        "correct": 0,
        "why": "IRE should guide good conduct."
      },
      {
        "q": "A good IRE answer should be:",
        "choices": [
          "respectful and clear",
          "mocking",
          "careless",
          "full of insults"
        ],
        "correct": 0,
        "why": "Religious answers need respect."
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
        "q": "This topic includes Names of the 25 prophets mentioned in the Qur'an.",
        "choices": [
          "True",
          "False",
          "Only for P7",
          "Only for Mathematics"
        ],
        "correct": 0,
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
    "id": "p4-ire-imaan-forgiveness",
    "themeId": "p4-ire",
    "themeName": "Islamic Religious Education",
    "title": "Imaan and Forgiveness",
    "estMinutes": 24,
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
        "This IRE topic should be studied respectfully using the Qur'an/Hadith where applicable, teacher guidance and daily-life examples.",
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
        "answer": "A P4 learner can apply Imaan and Forgiveness by worshipping respectfully, keeping clean conduct, and treating other people well."
      },
      "commonMistakes": [
        "Writing one-word answers without explanation.",
        "Using disrespectful words about faith, worship or other people.",
        "Forgetting to connect the topic to daily life.",
        "Treating this beta source as premium-final before the full standard P4 RE syllabus is checked."
      ],
      "recap": [
        "This IRE topic should be studied respectfully using the Qur'an/Hadith where applicable, teacher guidance and daily-life examples.",
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
                "Meaning of Imaan",
                "A random mathematics formula",
                "A road distance only",
                "A weather graph only"
              ],
              "correct": 0,
              "explanation": "The first choice is part of the mapped topic."
            }
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
            "bigIdea": "A learner should show Islamic values through clean habits, respectful speech and good actions.",
            "learnIt": [
              "Use the lesson to make good choices at home, school and mosque.",
              "Speak respectfully about Allah, the Qur'an, prayer and Prophet Muhammad (PBUH).",
              "Choose cleanliness, patience, truthfulness and respect where the topic calls for them."
            ],
            "workedExample": {
              "question": "Write one respectful action connected to this topic.",
              "steps": [
                "Think of the topic value.",
                "Think of home, school or community.",
                "Write a practical action."
              ],
              "answer": "A P4 learner can apply Imaan and Forgiveness by worshipping respectfully, keeping clean conduct, and treating other people well."
            },
            "tryThis": {
              "question": "The best way to apply Religious Education is to:",
              "choices": [
                "do what is right respectfully",
                "mock others",
                "spread quarrels",
                "ignore good advice"
              ],
              "correct": 0,
              "explanation": "Religious Education should guide respectful good action."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Imaan and Forgiveness should help a learner:",
        "choices": [
          "live with good Islamic conduct",
          "mock prayer",
          "be careless",
          "steal"
        ],
        "correct": 0,
        "why": "IRE should guide good conduct."
      },
      {
        "q": "A good IRE answer should be:",
        "choices": [
          "respectful and clear",
          "mocking",
          "careless",
          "full of insults"
        ],
        "correct": 0,
        "why": "Religious answers need respect."
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
          "Articles of Imaan",
          "weather instruments only",
          "money conversion only",
          "road construction only"
        ],
        "correct": 0,
        "why": "Articles of Imaan is part of the topic scope."
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
    "id": "p4-ire-congregational-prayer",
    "themeId": "p4-ire",
    "themeName": "Islamic Religious Education",
    "title": "Congregational Prayer (Swalat Al-Jama-a)",
    "estMinutes": 24,
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
        "This IRE topic should be studied respectfully using the Qur'an/Hadith where applicable, teacher guidance and daily-life examples.",
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
        "answer": "A P4 learner can apply Congregational Prayer (Swalat Al-Jama-a) by worshipping respectfully, keeping clean conduct, and treating other people well."
      },
      "commonMistakes": [
        "Writing one-word answers without explanation.",
        "Using disrespectful words about faith, worship or other people.",
        "Forgetting to connect the topic to daily life.",
        "Treating this beta source as premium-final before the full standard P4 RE syllabus is checked."
      ],
      "recap": [
        "This IRE topic should be studied respectfully using the Qur'an/Hadith where applicable, teacher guidance and daily-life examples.",
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
                "Meaning of congregational prayer",
                "A random mathematics formula",
                "A road distance only",
                "A weather graph only"
              ],
              "correct": 0,
              "explanation": "The first choice is part of the mapped topic."
            }
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
            "bigIdea": "A learner should show Islamic values through clean habits, respectful speech and good actions.",
            "learnIt": [
              "Use the lesson to make good choices at home, school and mosque.",
              "Speak respectfully about Allah, the Qur'an, prayer and Prophet Muhammad (PBUH).",
              "Choose cleanliness, patience, truthfulness and respect where the topic calls for them."
            ],
            "workedExample": {
              "question": "Write one respectful action connected to this topic.",
              "steps": [
                "Think of the topic value.",
                "Think of home, school or community.",
                "Write a practical action."
              ],
              "answer": "A P4 learner can apply Congregational Prayer (Swalat Al-Jama-a) by worshipping respectfully, keeping clean conduct, and treating other people well."
            },
            "tryThis": {
              "question": "The best way to apply Religious Education is to:",
              "choices": [
                "do what is right respectfully",
                "mock others",
                "spread quarrels",
                "ignore good advice"
              ],
              "correct": 0,
              "explanation": "Religious Education should guide respectful good action."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Congregational Prayer (Swalat Al-Jama-a) should help a learner:",
        "choices": [
          "live with good Islamic conduct",
          "mock prayer",
          "be careless",
          "steal"
        ],
        "correct": 0,
        "why": "IRE should guide good conduct."
      },
      {
        "q": "A good IRE answer should be:",
        "choices": [
          "respectful and clear",
          "mocking",
          "careless",
          "full of insults"
        ],
        "correct": 0,
        "why": "Religious answers need respect."
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
          "True",
          "False",
          "Only for P7",
          "Only for Mathematics"
        ],
        "correct": 0,
        "why": "Meaning of congregational prayer is listed in the NCDC/MoES P4 abridged map for this topic."
      },
      {
        "q": "Which is connected to this topic?",
        "choices": [
          "Importance of Swalat Al-Jama-a",
          "weather instruments only",
          "money conversion only",
          "road construction only"
        ],
        "correct": 0,
        "why": "Importance of Swalat Al-Jama-a is part of the topic scope."
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
    "id": "p4-ire-night-journey-israi-miraj",
    "themeId": "p4-ire",
    "themeName": "Islamic Religious Education",
    "title": "The Night Journey (Israi and Miraj)",
    "estMinutes": 24,
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
        "This IRE topic should be studied respectfully using the Qur'an/Hadith where applicable, teacher guidance and daily-life examples.",
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
        "answer": "A P4 learner can apply The Night Journey (Israi and Miraj) by worshipping respectfully, keeping clean conduct, and treating other people well."
      },
      "commonMistakes": [
        "Writing one-word answers without explanation.",
        "Using disrespectful words about faith, worship or other people.",
        "Forgetting to connect the topic to daily life.",
        "Treating this beta source as premium-final before the full standard P4 RE syllabus is checked."
      ],
      "recap": [
        "This IRE topic should be studied respectfully using the Qur'an/Hadith where applicable, teacher guidance and daily-life examples.",
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
              "explanation": "The first choice is part of the mapped topic."
            }
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
            "bigIdea": "A learner should show Islamic values through clean habits, respectful speech and good actions.",
            "learnIt": [
              "Use the lesson to make good choices at home, school and mosque.",
              "Speak respectfully about Allah, the Qur'an, prayer and Prophet Muhammad (PBUH).",
              "Choose cleanliness, patience, truthfulness and respect where the topic calls for them."
            ],
            "workedExample": {
              "question": "Write one respectful action connected to this topic.",
              "steps": [
                "Think of the topic value.",
                "Think of home, school or community.",
                "Write a practical action."
              ],
              "answer": "A P4 learner can apply The Night Journey (Israi and Miraj) by worshipping respectfully, keeping clean conduct, and treating other people well."
            },
            "tryThis": {
              "question": "The best way to apply Religious Education is to:",
              "choices": [
                "do what is right respectfully",
                "mock others",
                "spread quarrels",
                "ignore good advice"
              ],
              "correct": 0,
              "explanation": "Religious Education should guide respectful good action."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "The Night Journey (Israi and Miraj) should help a learner:",
        "choices": [
          "live with good Islamic conduct",
          "mock prayer",
          "be careless",
          "steal"
        ],
        "correct": 0,
        "why": "IRE should guide good conduct."
      },
      {
        "q": "A good IRE answer should be:",
        "choices": [
          "respectful and clear",
          "mocking",
          "careless",
          "full of insults"
        ],
        "correct": 0,
        "why": "Religious answers need respect."
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
        "q": "This topic includes Meaning of Israi.",
        "choices": [
          "True",
          "False",
          "Only for P7",
          "Only for Mathematics"
        ],
        "correct": 0,
        "why": "Meaning of Israi is listed in the NCDC/MoES P4 abridged map for this topic."
      },
      {
        "q": "Which is connected to this topic?",
        "choices": [
          "Meaning of Miraj",
          "weather instruments only",
          "money conversion only",
          "road construction only"
        ],
        "correct": 0,
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
    "estMinutes": 24,
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
        "This IRE topic should be studied respectfully using the Qur'an/Hadith where applicable, teacher guidance and daily-life examples.",
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
        "answer": "A P4 learner can apply Surat Al-Falaq (113) by worshipping respectfully, keeping clean conduct, and treating other people well."
      },
      "commonMistakes": [
        "Writing one-word answers without explanation.",
        "Using disrespectful words about faith, worship or other people.",
        "Forgetting to connect the topic to daily life.",
        "Treating this beta source as premium-final before the full standard P4 RE syllabus is checked."
      ],
      "recap": [
        "This IRE topic should be studied respectfully using the Qur'an/Hadith where applicable, teacher guidance and daily-life examples.",
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
                "Reciting Surat Al-Falaq",
                "A random mathematics formula",
                "A road distance only",
                "A weather graph only"
              ],
              "correct": 0,
              "explanation": "The first choice is part of the mapped topic."
            }
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
            "bigIdea": "A learner should show Islamic values through clean habits, respectful speech and good actions.",
            "learnIt": [
              "Use the lesson to make good choices at home, school and mosque.",
              "Speak respectfully about Allah, the Qur'an, prayer and Prophet Muhammad (PBUH).",
              "Choose cleanliness, patience, truthfulness and respect where the topic calls for them."
            ],
            "workedExample": {
              "question": "Write one respectful action connected to this topic.",
              "steps": [
                "Think of the topic value.",
                "Think of home, school or community.",
                "Write a practical action."
              ],
              "answer": "A P4 learner can apply Surat Al-Falaq (113) by worshipping respectfully, keeping clean conduct, and treating other people well."
            },
            "tryThis": {
              "question": "The best way to apply Religious Education is to:",
              "choices": [
                "do what is right respectfully",
                "mock others",
                "spread quarrels",
                "ignore good advice"
              ],
              "correct": 0,
              "explanation": "Religious Education should guide respectful good action."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Surat Al-Falaq (113) should help a learner:",
        "choices": [
          "live with good Islamic conduct",
          "mock prayer",
          "be careless",
          "steal"
        ],
        "correct": 0,
        "why": "IRE should guide good conduct."
      },
      {
        "q": "A good IRE answer should be:",
        "choices": [
          "respectful and clear",
          "mocking",
          "careless",
          "full of insults"
        ],
        "correct": 0,
        "why": "Religious answers need respect."
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
        "q": "This topic includes Reciting Surat Al-Falaq.",
        "choices": [
          "True",
          "False",
          "Only for P7",
          "Only for Mathematics"
        ],
        "correct": 0,
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
    "id": "p4-ire-unique-nature-muhammad-messengership",
    "themeId": "p4-ire",
    "themeName": "Islamic Religious Education",
    "title": "Unique Nature of Muhammad's (PBUH) Messengership",
    "estMinutes": 24,
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
        "This IRE topic should be studied respectfully using the Qur'an/Hadith where applicable, teacher guidance and daily-life examples.",
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
        "answer": "A P4 learner can apply Unique Nature of Muhammad's (PBUH) Messengership by worshipping respectfully, keeping clean conduct, and treating other people well."
      },
      "commonMistakes": [
        "Writing one-word answers without explanation.",
        "Using disrespectful words about faith, worship or other people.",
        "Forgetting to connect the topic to daily life.",
        "Treating this beta source as premium-final before the full standard P4 RE syllabus is checked."
      ],
      "recap": [
        "This IRE topic should be studied respectfully using the Qur'an/Hadith where applicable, teacher guidance and daily-life examples.",
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
                "Reasons why Muhammad (PBUH) went to the cave",
                "A random mathematics formula",
                "A road distance only",
                "A weather graph only"
              ],
              "correct": 0,
              "explanation": "The first choice is part of the mapped topic."
            }
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
            "bigIdea": "A learner should show Islamic values through clean habits, respectful speech and good actions.",
            "learnIt": [
              "Use the lesson to make good choices at home, school and mosque.",
              "Speak respectfully about Allah, the Qur'an, prayer and Prophet Muhammad (PBUH).",
              "Choose cleanliness, patience, truthfulness and respect where the topic calls for them."
            ],
            "workedExample": {
              "question": "Write one respectful action connected to this topic.",
              "steps": [
                "Think of the topic value.",
                "Think of home, school or community.",
                "Write a practical action."
              ],
              "answer": "A P4 learner can apply Unique Nature of Muhammad's (PBUH) Messengership by worshipping respectfully, keeping clean conduct, and treating other people well."
            },
            "tryThis": {
              "question": "The best way to apply Religious Education is to:",
              "choices": [
                "do what is right respectfully",
                "mock others",
                "spread quarrels",
                "ignore good advice"
              ],
              "correct": 0,
              "explanation": "Religious Education should guide respectful good action."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Unique Nature of Muhammad's (PBUH) Messengership should help a learner:",
        "choices": [
          "live with good Islamic conduct",
          "mock prayer",
          "be careless",
          "steal"
        ],
        "correct": 0,
        "why": "IRE should guide good conduct."
      },
      {
        "q": "A good IRE answer should be:",
        "choices": [
          "respectful and clear",
          "mocking",
          "careless",
          "full of insults"
        ],
        "correct": 0,
        "why": "Religious answers need respect."
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
          "Nature of Prophet Muhammad's (PBUH) messengership",
          "weather instruments only",
          "money conversion only",
          "road construction only"
        ],
        "correct": 0,
        "why": "Nature of Prophet Muhammad's (PBUH) messengership is part of the topic scope."
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
    "id": "p4-ire-conduct-after-swalat",
    "themeId": "p4-ire",
    "themeName": "Islamic Religious Education",
    "title": "Conduct after Swalat",
    "estMinutes": 24,
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
        "This IRE topic should be studied respectfully using the Qur'an/Hadith where applicable, teacher guidance and daily-life examples.",
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
        "answer": "A P4 learner can apply Conduct after Swalat by worshipping respectfully, keeping clean conduct, and treating other people well."
      },
      "commonMistakes": [
        "Writing one-word answers without explanation.",
        "Using disrespectful words about faith, worship or other people.",
        "Forgetting to connect the topic to daily life.",
        "Treating this beta source as premium-final before the full standard P4 RE syllabus is checked."
      ],
      "recap": [
        "This IRE topic should be studied respectfully using the Qur'an/Hadith where applicable, teacher guidance and daily-life examples.",
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
                "Dua for acquisition of knowledge",
                "A random mathematics formula",
                "A road distance only",
                "A weather graph only"
              ],
              "correct": 0,
              "explanation": "The first choice is part of the mapped topic."
            }
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
            "bigIdea": "A learner should show Islamic values through clean habits, respectful speech and good actions.",
            "learnIt": [
              "Use the lesson to make good choices at home, school and mosque.",
              "Speak respectfully about Allah, the Qur'an, prayer and Prophet Muhammad (PBUH).",
              "Choose cleanliness, patience, truthfulness and respect where the topic calls for them."
            ],
            "workedExample": {
              "question": "Write one respectful action connected to this topic.",
              "steps": [
                "Think of the topic value.",
                "Think of home, school or community.",
                "Write a practical action."
              ],
              "answer": "A P4 learner can apply Conduct after Swalat by worshipping respectfully, keeping clean conduct, and treating other people well."
            },
            "tryThis": {
              "question": "The best way to apply Religious Education is to:",
              "choices": [
                "do what is right respectfully",
                "mock others",
                "spread quarrels",
                "ignore good advice"
              ],
              "correct": 0,
              "explanation": "Religious Education should guide respectful good action."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Conduct after Swalat should help a learner:",
        "choices": [
          "live with good Islamic conduct",
          "mock prayer",
          "be careless",
          "steal"
        ],
        "correct": 0,
        "why": "IRE should guide good conduct."
      },
      {
        "q": "A good IRE answer should be:",
        "choices": [
          "respectful and clear",
          "mocking",
          "careless",
          "full of insults"
        ],
        "correct": 0,
        "why": "Religious answers need respect."
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
          "True",
          "False",
          "Only for P7",
          "Only for Mathematics"
        ],
        "correct": 0,
        "why": "Dua for acquisition of knowledge is listed in the NCDC/MoES P4 abridged map for this topic."
      },
      {
        "q": "Which is connected to this topic?",
        "choices": [
          "Behaviour after Swalat",
          "weather instruments only",
          "money conversion only",
          "road construction only"
        ],
        "correct": 0,
        "why": "Behaviour after Swalat is part of the topic scope."
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
    "id": "p4-ire-dress-cleanliness",
    "themeId": "p4-ire",
    "themeName": "Islamic Religious Education",
    "title": "Dress and Cleanliness",
    "estMinutes": 24,
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
        "This IRE topic should be studied respectfully using the Qur'an/Hadith where applicable, teacher guidance and daily-life examples.",
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
        "answer": "A P4 learner can apply Dress and Cleanliness by worshipping respectfully, keeping clean conduct, and treating other people well."
      },
      "commonMistakes": [
        "Writing one-word answers without explanation.",
        "Using disrespectful words about faith, worship or other people.",
        "Forgetting to connect the topic to daily life.",
        "Treating this beta source as premium-final before the full standard P4 RE syllabus is checked."
      ],
      "recap": [
        "This IRE topic should be studied respectfully using the Qur'an/Hadith where applicable, teacher guidance and daily-life examples.",
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
              "explanation": "The first choice is part of the mapped topic."
            }
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
            "bigIdea": "A learner should show Islamic values through clean habits, respectful speech and good actions.",
            "learnIt": [
              "Use the lesson to make good choices at home, school and mosque.",
              "Speak respectfully about Allah, the Qur'an, prayer and Prophet Muhammad (PBUH).",
              "Choose cleanliness, patience, truthfulness and respect where the topic calls for them."
            ],
            "workedExample": {
              "question": "Write one respectful action connected to this topic.",
              "steps": [
                "Think of the topic value.",
                "Think of home, school or community.",
                "Write a practical action."
              ],
              "answer": "A P4 learner can apply Dress and Cleanliness by worshipping respectfully, keeping clean conduct, and treating other people well."
            },
            "tryThis": {
              "question": "The best way to apply Religious Education is to:",
              "choices": [
                "do what is right respectfully",
                "mock others",
                "spread quarrels",
                "ignore good advice"
              ],
              "correct": 0,
              "explanation": "Religious Education should guide respectful good action."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Dress and Cleanliness should help a learner:",
        "choices": [
          "live with good Islamic conduct",
          "mock prayer",
          "be careless",
          "steal"
        ],
        "correct": 0,
        "why": "IRE should guide good conduct."
      },
      {
        "q": "A good IRE answer should be:",
        "choices": [
          "respectful and clear",
          "mocking",
          "careless",
          "full of insults"
        ],
        "correct": 0,
        "why": "Religious answers need respect."
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
        "q": "This topic includes Hadith concerning cleanliness.",
        "choices": [
          "True",
          "False",
          "Only for P7",
          "Only for Mathematics"
        ],
        "correct": 0,
        "why": "Hadith concerning cleanliness is listed in the NCDC/MoES P4 abridged map for this topic."
      },
      {
        "q": "Which is connected to this topic?",
        "choices": [
          "Prophetic teaching on cleanliness",
          "weather instruments only",
          "money conversion only",
          "road construction only"
        ],
        "correct": 0,
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
