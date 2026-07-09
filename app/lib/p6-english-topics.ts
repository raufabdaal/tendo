import type { Topic } from "@/lib/topics";

export const P6_ENGLISH_TOPICS: Topic[] = [
  {
    id: "p6-safety-road",
    themeId: "p6-english-functional",
    themeName: "Functional Grammar & Situational Vocabulary",
    title: "Safety on the Road",
    estMinutes: 25,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "Why this matters: P6 road safety vocabulary and obligation modals (must, should, ought to) protect lives on busy highways and prepare learners for PLE grammar structures.",
      learningObjectives: [
        "Use situational road vocabulary correctly (zebra crossing, pedestrian, traffic lights, pavement).",
        "Construct rules and advice using modals of obligation: must, should, ought to, must not."
      ],
      whatYouNeedToKnow: [
        "'Must' expresses strong mandatory obligation or rule; 'must not' expresses strict prohibition against dangerous actions.",
        "'Should' expresses general advice or recommendation.",
        "'Ought to' always takes the preposition 'to' and expresses moral duty or safety advice."
      ],
      worked: {
        problem: "Complete the sentence correctly: Pedestrians ___ cross the road at the zebra crossing.",
        steps: [
          "Identify that crossing at a zebra crossing is a mandatory safety rule.",
          "Select the modal verb of strong obligation or good advice: 'must' or 'should'."
        ],
        answer: "Pedestrians should / must cross the road at the zebra crossing."
      },
      recap: [
        "Remember: pedestrian = person travelling on foot.",
        "Never use 'ought' without 'to' when giving advice."
      ]
    },
    subtopics: [
      {
        subtopicId: "p6-road-vocab",
        title: "1. Road Safety Vocabulary and Traffic Rules",
        modules: [
          {
            moduleId: "p6-safety-vocabulary",
            title: "Essential Road Vocabulary for Pedestrians and Drivers",
            bigIdea: "Pedestrians, cyclists, and motorists must recognize traffic signals and road markings to prevent accidents.",
            learnIt: [
              "Pedestrian: any person travelling on foot along a road or pavement.",
              "Zebra crossing: painted black and white stripes across a road where pedestrians have right of way to cross safely.",
              "Pavement (sidewalk): raised footpath along the side of a road specifically for pedestrians.",
              "Traffic lights: automated three-colour signals controlling vehicle flow (Red = Stop immediately; Amber/Yellow = Get ready; Green = Proceed safely)."
            ],
            workedExample: {
              question: "Choose the correct vocabulary word: A person walking along the road on foot is called a ___.",
              steps: [
                "Recall terms: passenger travels inside a vehicle; cyclist rides a bicycle.",
                "Select pedestrian for foot travellers."
              ],
              answer: "Pedestrian."
            },
            tryThis: {
              question: "What do painted black and white stripes across a busy road represent?",
              choices: ["Zebra crossing", "Railway line", "Airport runway", "Parking lot"],
              correct: 0,
              explanation: "Zebra crossings provide designated safe crossing zones for pedestrians."
            }
          }
        ]
      },
      {
        subtopicId: "p6-road-modals",
        title: "2. Modals of Obligation and Advice",
        modules: [
          {
            moduleId: "p6-modals-obligation",
            title: "Using Must, Should, Ought to, and Must Not",
            bigIdea: "Modal verbs express the exact level of necessity, prohibition, or advice in traffic regulations.",
            learnIt: [
              "Must / Must not: expresses strict law or absolute necessity. Example: Drivers MUST stop when traffic lights turn red. You MUST NOT play football on the road.",
              "Should / Ought to: expresses recommendation or safety advice. Note that 'ought' must always be followed by 'to'. Example: Cyclists ought to wear safety helmets."
            ],
            workedExample: {
              question: "Complete: You ought ___ look right, left, and right again before crossing.",
              steps: [
                "Identify the modal verb 'ought'.",
                "Apply grammatical rule: 'ought' requires the infinitive marker 'to'."
              ],
              answer: "You ought to look right, left, and right again before crossing."
            },
            tryThis: {
              question: "Which modal verb correctly completes: Children ___ never run across a busy highway.",
              choices: ["must", "ought", "might", "could"],
              correct: 0,
              explanation: "'Must never' (or must not) expresses strict safety prohibition."
            }
          }
        ]
      }
    
      ,{
        subtopicId: "premium-premium-practice-road-safety-messages",
        title: "Premium Practice: Road Safety Messages",
        modules: [{
          moduleId: "reading-and-writing-road-safety-notices",
          title: "Reading and Writing Road Safety Notices",
          bigIdea: "Road safety English becomes useful when learners can understand signs and write clear warnings.",
          learnIt: ["A road sign or notice should be short, clear and easy to obey.", "Use must for strong rules: Pedestrians must use the zebra crossing.", "Use must not for danger: Learners must not play on the road."],
          workedExample: { question: "Write a clear warning to pupils who cross the road while using phones.", steps: ["Step 1: Identify the dangerous action: using phones while crossing.", "Step 2: Use must not for a rule.", "Step 3: Make the warning short and direct."], answer: "Pupils must not use phones while crossing the road." },
          tryThis: { question: "Which sentence is the clearest road safety rule?", choices: ["Pedestrians must use the zebra crossing.", "Road crossing good.", "Cars maybe there.", "Because road."], correct: 0, explanation: "It is complete, clear and uses must for a rule." }
        }]
      }],
    quiz: [
      { q: "Complete: Pedestrians ___ walk on the pavement where available.", choices: ["should", "might not", "can not", "never"], correct: 0, why: "'Should' gives correct safety advice." },
      { q: "What is a painted area on the road where pedestrians cross called?", choices: ["Zebra crossing", "Airport", "Railway", "Harbour"], correct: 0, why: "Zebra crossings protect pedestrians." },
      { q: "Complete: Drivers ___ stop when traffic lights turn red.", choices: ["must", "might", "could not", "would"], correct: 0, why: "'Must' expresses mandatory traffic law." },
      { q: "Complete: You ought ___ wear a helmet when riding a motorcycle.", choices: ["to", "for", "in", "on"], correct: 0, why: "'Ought' is strictly followed by 'to'." },
      { q: "A person walking on foot along a road is called a:", choices: ["Pedestrian", "Passenger", "Pilot", "Captain"], correct: 0, why: "Pedestrians travel on foot." },
      { q: "Complete: Children ___ not run across the road without looking.", choices: ["must", "ought", "have", "are"], correct: 0, why: "'Must not' expresses prohibition." },
      { q: "What do green traffic lights signal to approaching drivers?", choices: ["Go / Proceed safely", "Stop immediately", "Reverse", "Turn off engine"], correct: 0, why: "Green indicates safe right of way." },
      { q: "Complete: Cyclists should ride ___ the left side of the road in Uganda.", choices: ["on", "at", "in", "by"], correct: 0, why: "Traffic moves on the left in Uganda." }
    ]
  },
  {
    id: "p6-debating",
    themeId: "p6-english-functional",
    themeName: "Functional Grammar & Situational Vocabulary",
    title: "Debating and Expressing Opinions",
    estMinutes: 25,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "Why this matters: Formal debating develops critical oral expression and structured argumentation required for PLE English comprehension and composition.",
      learningObjectives: [
        "Master debating vocabulary (motion, proposer, opposer, chairperson, timekeeper, audience).",
        "Use conjunctions and phrases of agreement and contrast correctly (agree with, disagree with, in my opinion, although, whereas)."
      ],
      whatYouNeedToKnow: [
        "The 'motion' is the official topic or proposition being debated.",
        "The 'proposer' speaks in favour of (supporting) the motion, while the 'opposer' speaks against the motion.",
        "Use polite discourse phrases: 'In my opinion...', 'I strongly agree with the previous speaker that...'"
      ],
      worked: {
        problem: "Complete: The ___ kept order and guided speakers during the school debate.",
        steps: [
          "Recall roles: timekeeper monitors minutes; secretary records points.",
          "Identify chairperson (or speaker) as the official leader presiding over the debate."
        ],
        answer: "Chairperson."
      },
      recap: [
        "Always address the Chairperson first when taking the floor.",
        "Use contrast conjunctions like 'however' and 'whereas' to counter opposing arguments."
      ]
    },
    subtopics: [
      {
        subtopicId: "p6-debate-vocab",
        title: "1. Roles and Vocabulary in Formal Debates",
        modules: [
          {
            moduleId: "p6-debate-roles",
            title: "Motion, Proposers, Opposers and Officials",
            bigIdea: "A formal debate follows parliamentary rules guided by officials to discuss opposing sides of a motion.",
            learnIt: [
              "Motion: the formal topic statement presented for discussion (e.g., 'Boarding schools are better than day schools').",
              "Proposer: the speaker who supports and argues FOR the motion.",
              "Opposer: the speaker who argues AGAINST the motion.",
              "Chairperson: presides over the session, maintains decorum, and calls speakers to the podium. Timekeeper rings the bell when speaking time expires."
            ],
            workedExample: {
              question: "If Akello argues against the motion during a debate, what role is she performing?",
              steps: [
                "Supporting speaker = Proposer.",
                "Against speaker = Opposer."
              ],
              answer: "She is acting as an Opposer."
            },
            tryThis: {
              question: "Who rings the bell to signal that a debater's allocated speaking time has ended?",
              choices: ["Timekeeper", "Chairperson", "Proposer", "Secretary"],
              correct: 0,
              explanation: "The timekeeper tracks duration and signals time limits."
            }
          }
        ]
      },
      {
        subtopicId: "p6-opinion-conjunctions",
        title: "2. Conjunctions of Agreement and Contrast",
        modules: [
          {
            moduleId: "p6-expressing-opinions",
            title: "Polite Phrasing: Agreeing, Disagreeing and Contrasting",
            bigIdea: "Persuasive speakers use polite discourse phrases and contrast conjunctions to present reasoned arguments.",
            learnIt: [
              "Agreement phrases: 'I entirely agree with the motion...', 'Furthermore...', 'In addition...'",
              "Contrast conjunctions: 'Although day schools are cheaper, boarding schools offer more study hours.', 'Whereas proposers claim boarding schools are expensive, I believe the academic environment justifies the cost.'"
            ],
            workedExample: {
              question: "Combine using 'although': Boarding schools are expensive. They produce excellent PLE results.",
              steps: [
                "Place 'although' at the beginning or middle to show contrast.",
                "Result: Although boarding schools are expensive, they produce excellent PLE results."
              ],
              answer: "Although boarding schools are expensive, they produce excellent PLE results."
            },
            tryThis: {
              question: "Complete: ___ my opinion, reading novels improves vocabulary faster than watching television.",
              choices: ["In", "At", "On", "By"],
              correct: 0,
              explanation: "The standard English idiom is 'In my opinion'."
            }
          }
        ]
      }
    
      ,{
        subtopicId: "premium-premium-practice-debate-speeches",
        title: "Premium Practice: Debate Speeches",
        modules: [{
          moduleId: "building-a-short-debate-point",
          title: "Building a Short Debate Point",
          bigIdea: "A good debate point states a position, gives a reason and stays polite.",
          learnIt: ["Begin by saying whether you support or oppose the motion.", "Give one clear reason and, if possible, a simple example.", "Use polite expressions such as I strongly support, I disagree because, or in my opinion."],
          workedExample: { question: "Write one point supporting the motion: Children should read every day.", steps: ["Step 1: State that you support the motion.", "Step 2: Give a reason: reading improves vocabulary.", "Step 3: Write a complete sentence."], answer: "I support the motion because reading every day improves children's vocabulary." },
          tryThis: { question: "Which phrase is polite in a debate?", choices: ["I disagree because...", "You are foolish", "Keep quiet", "Your idea is useless"], correct: 0, explanation: "It disagrees respectfully and gives a reason." }
        }]
      }],
    quiz: [
      { q: "What is the formal topic discussed during a debate called?", choices: ["Motion", "Notice", "Agenda", "Petition"], correct: 0, why: "A debate centers on a formal motion." },
      { q: "A speaker who argues in support of the debate motion is called a:", choices: ["Proposer", "Opposer", "Timekeeper", "Audience"], correct: 0, why: "Proposers support the motion." },
      { q: "Complete: I entirely disagree ___ the view that city life is better than village life.", choices: ["with", "to", "from", "on"], correct: 0, why: "We disagree 'with' a person or view." },
      { q: "Who controls the conduct of speakers and maintains order during a debate?", choices: ["Chairperson", "Timekeeper", "Proposer", "Opposer"], correct: 0, why: "The Chairperson leads the assembly." },
      { q: "Complete: ___ day schools allow children to live with parents, boarding schools foster self-reliance.", choices: ["Whereas", "Because", "Therefore", "So"], correct: 0, why: "'Whereas' introduces direct contrast between two ideas." },
      { q: "Complete: In my ___, primary school pupils should not carry smartphones to class.", choices: ["opinion", "thought", "mind", "brain"], correct: 0, why: "'In my opinion' is the proper polite discourse expression." },
      { q: "Which debate official records the main points raised by both sides?", choices: ["Secretary", "Timekeeper", "Chairperson", "Opposer"], correct: 0, why: "The secretary keeps official minutes and score sheets." },
      { q: "Complete: I agree with the previous speaker; ___, I wish to add two more points.", choices: ["furthermore / however", "because", "unless", "since"], correct: 0, why: "'Furthermore' adds supporting arguments." }
    ]
  },
  {
    id: "p6-family-relationships",
    themeId: "p6-english-functional",
    themeName: "Functional Grammar & Situational Vocabulary",
    title: "Family Relationships",
    estMinutes: 25,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "Why this matters: Precise family relationship vocabulary and genitive apostrophes ('s vs s') ensure accuracy when writing letters and narratives about Ugandan kinship.",
      learningObjectives: [
        "Identify extended family relations (niece, nephew, cousin, sibling, in-law, aunt, uncle).",
        "Form possessive nouns using apostrophes correctly for singular ('s) and plural (s') family members."
      ],
      whatYouNeedToKnow: [
        "Nephew = son of your brother or sister; Niece = daughter of your brother or sister.",
        "Sibling = brother or sister; Cousin = child of your aunt or uncle.",
        "For singular nouns, add apostrophe s ('s e.g., the uncle's car). For plural nouns ending in s, add only an apostrophe after s (s' e.g., the parents' meeting)."
      ],
      worked: {
        problem: "Complete: My brother's daughter is my ___.",
        steps: [
          "Daughter of a sibling is female relation.",
          "Male is nephew; female is niece."
        ],
        answer: "Niece."
      },
      recap: [
        "In-laws are relatives acquired through marriage.",
        "Irregular plurals not ending in s take 's (e.g., children's shoes)."
      ]
    },
    subtopics: [
      {
        subtopicId: "p6-kinship-vocab",
        title: "1. Extended Family Relations Vocabulary",
        modules: [
          {
            moduleId: "p6-extended-family",
            title: "Nieces, Nephews, Cousins, Siblings and In-Laws",
            bigIdea: "Extended family vocabulary maps generation lines across uncles, aunts, siblings, and marriage relations.",
            learnIt: [
              "Sibling: a brother or sister sharing parents.",
              "Nephew / Niece: nephew is the son of one's brother or sister; niece is the daughter of one's brother or sister.",
              "Cousin: the son or daughter of one's uncle or aunt.",
              "In-laws: relatives related by marriage (father-in-law, mother-in-law, brother-in-law)."
            ],
            workedExample: {
              question: "If Kato marries Jane, what relation is Kato to Jane's mother?",
              steps: [
                "Husband of one's daughter is related by marriage.",
                "He becomes her son-in-law."
              ],
              answer: "Son-in-law."
            },
            tryThis: {
              question: "What do we call the son of your sister?",
              choices: ["Nephew", "Niece", "Cousin", "Brother"],
              correct: 0,
              explanation: "The male child of a sibling is a nephew."
            }
          }
        ]
      },
      {
        subtopicId: "p6-possessive-apostrophes",
        title: "2. Possessive Pronouns and Genitive Apostrophes",
        modules: [
          {
            moduleId: "p6-apostrophe-rules",
            title: "Singular ('s) versus Plural (s') Possessive Rules",
            bigIdea: "Apostrophes indicate ownership; singular nouns take apostrophe s while regular s-plurals take trailing apostrophes.",
            learnIt: [
              "Singular possessive: add 's to any singular noun. Example: My mother's handbag; Kato's bicycle.",
              "Plural possessive (ending in s): add only an apostrophe after the s. Example: The sisters' bedroom; my uncles' farms.",
              "Irregular plural possessive (not ending in s): add 's. Example: The children's playground; women's group."
            ],
            workedExample: {
              question: "Punctuate correctly: The meeting for all parents is starting soon.",
              steps: [
                "Identify plural noun ending in s: parents.",
                "Add trailing apostrophe: parents'."
              ],
              answer: "The parents' meeting is starting soon."
            },
            tryThis: {
              question: "Which expression correctly shows ownership belonging to several cousins?",
              choices: ["The cousins' house", "The cousin's house", "The cousins house'", "The cousine's house"],
              correct: 0,
              explanation: "Plural noun ending in s (cousins) takes an apostrophe after s."
            }
          }
        ]
      }
    
      ,{
        subtopicId: "premium-premium-practice-family-descriptions",
        title: "Premium Practice: Family Descriptions",
        modules: [{
          moduleId: "writing-clear-sentences-about-family",
          title: "Writing Clear Sentences about Family",
          bigIdea: "Family vocabulary is strongest when learners can use the words in clear sentences.",
          learnIt: ["A niece is the daughter of one's brother or sister. A nephew is the son of one's brother or sister.", "Use apostrophes carefully: my father's bag means the bag belongs to one father.", "For plural possession, place the apostrophe after s: the girls' dormitory."],
          workedExample: { question: "Rewrite correctly: The bag of my aunt is red.", steps: ["Step 1: Identify the owner: aunt.", "Step 2: Use possessive apostrophe because one aunt is meant.", "Step 3: Write the sentence naturally."], answer: "My aunt's bag is red." },
          tryThis: { question: "The son of your sister is your:", choices: ["nephew", "niece", "uncle", "cousin only"], correct: 0, explanation: "A nephew is the son of one's brother or sister." }
        }]
      }],
    quiz: [
      { q: "My father's sister is my:", choices: ["Aunt", "Niece", "Cousin", "Mother-in-law"], correct: 0, why: "A sister to a parent is an aunt." },
      { q: "What relation is the daughter of your brother to you?", choices: ["Niece", "Nephew", "Cousin", "Aunt"], correct: 0, why: "Female child of a sibling is a niece." },
      { q: "Complete: We attended the ___ meeting at school last Saturday.", choices: ["parents'", "parent's", "parents's", "parentes"], correct: 0, why: "Plural parents taking possession requires s'." },
      { q: "Your mother's brother is your:", choices: ["Uncle", "Nephew", "Cousin", "Brother-in-law"], correct: 0, why: "Brother to a parent is an uncle." },
      { q: "Complete: Those are my two ___ bicycles near the veranda.", choices: ["brothers'", "brother's", "brothers's", "brother"], correct: 0, why: "Two brothers (plural ending in s) takes s'." },
      { q: "A child born to your uncle or aunt is your:", choices: ["Cousin", "Niece", "Nephew", "Sibling"], correct: 0, why: "Aunt or uncle offspring are cousins." },
      { q: "Complete: The ___ clothes were washed cleanly by the maid.", choices: ["children's", "childrens'", "childs'", "childrens"], correct: 0, why: "Children is an irregular plural not ending in s, so it takes 's." },
      { q: "The mother of your wife or husband is your:", choices: ["Mother-in-law", "Stepmother", "Grandmother", "Aunt"], correct: 0, why: "Marriage relations form in-laws." }
    ]
  },
  {
    id: "p6-occupations-crafts",
    themeId: "p6-english-functional",
    themeName: "Functional Grammar & Situational Vocabulary",
    title: "Occupations and Crafts",
    estMinutes: 25,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "Why this matters: Vocabulary of professions and artisan crafts enriches descriptive writing, while relative clauses (who, which, where) join sentences smoothly.",
      learningObjectives: [
        "Name professions and artisan crafts accurately (carpenter, plumber, tailor, surgeon, mechanic, cobbler).",
        "Form defining relative clauses using relative pronouns: who (people), which (things/tools), and where (places)."
      ],
      whatYouNeedToKnow: [
        "Carpenter makes/repairs wooden furniture; Plumber fixes water pipes and taps; Cobbler mends shoes.",
        "Surgeon performs operations in hospital; Tailor sews garments.",
        "Use 'who' for persons, 'which' or 'that' for objects/animals, and 'where' for places."
      ],
      worked: {
        problem: "Join using 'who': A carpenter is an artisan. He makes furniture out of wood.",
        steps: [
          "Identify the shared person: carpenter / He.",
          "Replace pronoun 'He' with relative pronoun 'who'."
        ],
        answer: "A carpenter is an artisan who makes furniture out of wood."
      },
      recap: [
        "Mechanics repair motor vehicles and machinery.",
        "Never use 'who' when referring to inanimate tools or workshops."
      ]
    },
    subtopics: [
      {
        subtopicId: "p6-professions-vocab",
        title: "1. Professions and Artisan Crafts Vocabulary",
        modules: [
          {
            moduleId: "p6-artisans-tools",
            title: "Artisans, Professionals and Their Workplaces",
            bigIdea: "Different occupations utilize specialized tools to produce goods or render professional services.",
            learnIt: [
              "Carpenter: works with timber using saws, planes, and chisels to make furniture.",
              "Plumber: installs and repairs water pipes, sinks, and drainage systems.",
              "Tailor / Seamstress: measures cloth and uses sewing machines to make garments.",
              "Cobbler: repairs and mends shoes and leather sandals.",
              "Surgeon: a medical specialist who operates on patients in a theatre."
            ],
            workedExample: {
              question: "Who is an artisan skilled in fixing broken water pipes and taps?",
              steps: [
                "Recall trades: carpenter fixes wood; electrician fixes wiring.",
                "Select plumber for water plumbing."
              ],
              answer: "A plumber."
            },
            tryThis: {
              question: "Which occupation repairs footwear and worn-out leather shoes?",
              choices: ["Cobbler", "Tailor", "Mason", "Plumber"],
              correct: 0,
              explanation: "A cobbler specializes in shoe repair."
            }
          }
        ]
      },
      {
        subtopicId: "p6-relative-clauses",
        title: "2. Defining Relative Clauses",
        modules: [
          {
            moduleId: "p6-who-which-where",
            title: "Joining Sentences with Who, Which and Where",
            bigIdea: "Relative clauses define exactly which person, tool, or location is being referenced without repeating nouns.",
            learnIt: [
              "Who: refers strictly to human beings. Example: A surgeon is a doctor WHO performs surgical operations.",
              "Which / That: refers to inanimate objects, tools, or animals. Example: A saw is a sharp tool WHICH a carpenter uses to cut timber.",
              "Where: refers to physical places or workplaces. Example: A workshop is a building WHERE mechanics repair vehicles."
            ],
            workedExample: {
              question: "Complete with who, which, or where: A bakery is a place ___ bread and cakes are baked.",
              steps: [
                "Identify antecedent: bakery (a physical location).",
                "Use relative adverb 'where'."
              ],
              answer: "Where."
            },
            tryThis: {
              question: "Complete: An electrician is a skilled technician ___ repairs electrical wiring.",
              choices: ["who", "which", "where", "whose"],
              correct: 0,
              explanation: "An electrician is a human being, requiring relative pronoun 'who'."
            }
          }
        ]
      }
    
      ,{
        subtopicId: "premium-premium-practice-describing-work",
        title: "Premium Practice: Describing Work",
        modules: [{
          moduleId: "occupations-and-relative-clauses",
          title: "Occupations and Relative Clauses",
          bigIdea: "A premium answer names the worker, workplace and the work done.",
          learnIt: ["Use who for people: A carpenter is a person who makes furniture.", "Use where for places: A clinic is a place where patients are treated.", "Use which for things: A hoe is a tool which farmers use for digging."],
          workedExample: { question: "Join: A baker is a person. He makes bread.", steps: ["Step 1: The sentence talks about a person.", "Step 2: Use who to join the ideas.", "Step 3: Keep the meaning clear."], answer: "A baker is a person who makes bread." },
          tryThis: { question: "Choose the correct sentence.", choices: ["A tailor is a person who sews clothes.", "A tailor is a place where sews clothes.", "A tailor is a tool which sews clothes.", "A tailor who clothes."], correct: 0, explanation: "Who is used for people." }
        }]
      }],
    quiz: [
      { q: "An artisan who makes and repairs wooden tables and chairs is called a:", choices: ["Carpenter", "Plumber", "Mason", "Cobbler"], correct: 0, why: "Carpenters craft timber products." },
      { q: "Complete: A sewing machine is a device ___ a tailor uses to stitch cloth.", choices: ["which", "who", "where", "whom"], correct: 0, why: "A machine is an inanimate object requiring 'which'." },
      { q: "Which professional performs operations inside a hospital surgical theatre?", choices: ["Surgeon", "Cobbler", "Plumber", "Mechanic"], correct: 0, why: "Surgeons conduct medical surgery." },
      { q: "Complete: A garage is a workshop ___ motor vehicles are serviced and repaired.", choices: ["where", "which", "who", "when"], correct: 0, why: "Garage is a physical place requiring 'where'." },
      { q: "A skilled worker who builds stone walls and houses using bricks and cement is a:", choices: ["Mason / Bricklayer", "Tailor", "Surgeon", "Carpenter"], correct: 0, why: "Masons build brick and stone structures." },
      { q: "Complete: A mechanic is a person ___ repairs automobile engines.", choices: ["who", "which", "where", "what"], correct: 0, why: "Mechanic refers to a person requiring 'who'." },
      { q: "Who repairs leaking water pipes and broken taps in a house?", choices: ["Plumber", "Electrician", "Cobbler", "Carpenter"], correct: 0, why: "Plumbers handle plumbing infrastructure." },
      { q: "Complete: A spanner is a sharp saw tool ___ cuts timber into planks.", choices: ["which", "who", "where", "whom"], correct: 0, why: "Tools take relative pronoun 'which'." }
    ]
  },
  {
    id: "p6-hotel-dining",
    themeId: "p6-english-functional",
    themeName: "Functional Grammar & Situational Vocabulary",
    title: "Hotel and Dining Etiquette",
    estMinutes: 25,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "Why this matters: Hotel and dining vocabulary prepares learners for situational communication in hospitality settings while mastering quantifiers with countable/uncountable nouns.",
      learningObjectives: [
        "Use dining vocabulary appropriately (menu, waiter, waitress, bill, cutlery, reservation, beverage, dessert).",
        "Apply quantifiers correctly with countable nouns (many, a few, several) and uncountable nouns (much, a little, a deal of)."
      ],
      whatYouNeedToKnow: [
        "Menu = printed list of dishes and prices; Cutlery = knives, forks, and spoons used for eating.",
        "Countable nouns can be counted as individual items (knives, tables, waiters -> take 'many' or 'a few').",
        "Uncountable nouns cannot be counted directly (water, sugar, soup, luggage -> take 'much' or 'a little')."
      ],
      worked: {
        problem: "Complete: How ___ sugar would you like in your African tea?",
        steps: [
          "Check noun: sugar is uncountable.",
          "Select quantifier for uncountable mass: 'much'."
        ],
        answer: "How much sugar would you like in your African tea?"
      },
      recap: [
        "Beverage means any drink other than water (tea, juice, coffee).",
        "'Some' and 'any' can be used with both countable and uncountable nouns."
      ]
    },
    subtopics: [
      {
        subtopicId: "p6-dining-vocab",
        title: "1. Restaurant Vocabulary and Dining Etiquette",
        modules: [
          {
            moduleId: "p6-restaurant-terms",
            title: "Menus, Waiters, Cutlery and Reservations",
            bigIdea: "Polite hospitality communication relies on standard terms for table booking, meal courses, and utensils.",
            learnIt: [
              "Menu: a card or list displaying available dishes and beverages with their prices.",
              "Waiter / Waitress: restaurant staff who take meal orders and serve food at tables.",
              "Cutlery: dining utensils including spoons, forks, and table knives.",
              "Bill / Receipt: written statement of total charges owed for meals consumed."
            ],
            workedExample: {
              question: "What do we call a advance table booking made at a restaurant?",
              steps: [
                "Recall hospitality terms: menu lists food; bill lists costs.",
                "Booking a table ahead of time is a reservation."
              ],
              answer: "A reservation."
            },
            tryThis: {
              question: "Which term refers collectively to knives, forks, and spoons used at a dining table?",
              choices: ["Cutlery", "Menu", "Beverages", "Dessert"],
              correct: 0,
              explanation: "Cutlery encompasses all table eating utensils."
            }
          }
        ]
      },
      {
        subtopicId: "p6-quantifiers-nouns",
        title: "2. Countable and Uncountable Nouns with Quantifiers",
        modules: [
          {
            moduleId: "p6-much-many-few-little",
            title: "Using Much, Many, A Few, and A Little",
            bigIdea: "Quantifiers must match whether the modified noun is a countable item or an indivisible uncountable mass.",
            learnIt: [
              "Countable quantifiers: many, a few, several, fewer. Used with plural countable nouns. Example: How MANY plates are on the table? We have A FEW spoons.",
              "Uncountable quantifiers: much, a little, less, a great deal of. Used with singular mass nouns (salt, tea, money, juice). Example: Do not put TOO MUCH salt in the soup. Add A LITTLE milk."
            ],
            workedExample: {
              question: "Complete: There are ___ customers waiting in the hotel dining room.",
              steps: [
                "Check noun: customers is plural countable.",
                "Select appropriate countable quantifier: many or several."
              ],
              answer: "There are many / several customers waiting."
            },
            tryThis: {
              question: "Complete: Please pour ___ hot water into the teapot.",
              choices: ["a little", "a few", "many", "several"],
              correct: 0,
              explanation: "Water is an uncountable mass noun requiring 'a little'."
            }
          }
        ]
      }
    
      ,{
        subtopicId: "premium-premium-practice-ordering-food-politely",
        title: "Premium Practice: Ordering Food Politely",
        modules: [{
          moduleId: "hotel-dialogue-and-quantifiers",
          title: "Hotel Dialogue and Quantifiers",
          bigIdea: "Dining English should sound polite, clear and grammatically correct.",
          learnIt: ["Use polite requests such as Please may I have..., I would like..., and Could you bring...", "Use many with countable plural nouns: many plates, many cups.", "Use much with uncountable nouns: much water, much sugar, much rice."],
          workedExample: { question: "Complete politely: ___ I have a glass of juice, please?", steps: ["Step 1: It is a polite request.", "Step 2: Use May or Could.", "Step 3: Keep please at the end or beginning."], answer: "May I have a glass of juice, please?" },
          tryThis: { question: "Choose the correct phrase.", choices: ["much water", "many water", "a few water", "several water"], correct: 0, explanation: "Water is uncountable, so use much." }
        }]
      }],
    quiz: [
      { q: "A printed card showing food dishes and their prices in a hotel is a:", choices: ["Menu", "Bill", "Cutlery", "Receipt"], correct: 0, why: "Menus list available dining options." },
      { q: "Complete: How ___ cups of tea did the guests order?", choices: ["many", "much", "little", "deal"], correct: 0, why: "Cups are countable individual items taking 'many'." },
      { q: "Knives, forks, and spoons placed on a dining table are called:", choices: ["Cutlery", "Crockery", "Beverages", "Courses"], correct: 0, why: "Cutlery refers to eating utensils." },
      { q: "Complete: There wasn't ___ juice left in the serving jug.", choices: ["much", "many", "a few", "several"], correct: 0, why: "Juice is uncountable liquid taking 'much'." },
      { q: "A male worker who serves food and drinks to customers at tables is a:", choices: ["Waiter", "Waitress", "Chef", "Cashier"], correct: 0, why: "Male servers are waiters; females are waitresses." },
      { q: "Complete: The chef added only ___ salt to the boiling stew.", choices: ["a little", "a few", "many", "several"], correct: 0, why: "Salt is uncountable requiring 'a little'." },
      { q: "Any drinkable liquid such as tea, coffee, or passion juice is called a:", choices: ["Beverage", "Cutlery", "Menu", "Dessert"], correct: 0, why: "Beverages encompass non-water drinks." },
      { q: "Complete: We invited ___ friends to join us for dinner at the hotel.", choices: ["a few", "a little", "much", "less"], correct: 0, why: "Friends are countable taking 'a few'." }
    ]
  }
];

export function getP6EnglishTopic(id: string): Topic | undefined {
  return P6_ENGLISH_TOPICS.find((topic) => topic.id === id);
}
