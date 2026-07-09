import type { Topic } from "@/lib/topics";

export const ENGLISH_TOPICS: Topic[] = [
  {
    "id": "school-holidays",
    "themeId": "english-term-i",
    "themeName": "Term I",
    "title": "School holidays",
    "estMinutes": 20,
    "status": "published",
    "reviewStatus": "verified",
    "note": {
      "intro": "Why this matters: Holiday topics help learners practise future plans, past experiences, sequential time conjunctions, and guided composition writing for PLE.",
      "learningObjectives": [
        "Use holiday vocabulary correctly in speaking and writing.",
        "Express future plans using Future Simple tense and 'going to'.",
        "Construct sequential sentences using 'as soon as', 'immediately', and 'no sooner had... than...'.",
        "Read holiday schedules and write guided composition paragraphs."
      ],
      "whatYouNeedToKnow": [
        "Holiday vocabulary includes words like travel, package, visit, camp, duration, relative, chores, tuition, and break.",
        "To express prior intention or future plans, use 'will/shall' or 'going to' (e.g., We are going to visit our grandparents).",
        "To show two actions happening immediately one after another, use 'No sooner had [subject] [past participle] than [past tense]' (e.g., No sooner had the bell rung than the pupils ran home)."
      ],
      "worked": {
        "problem": "Rewrite using 'No sooner...': As soon as we reached the village, it started raining.",
        "steps": [
          "Identify the first action: reached the village.",
          "Begin with 'No sooner had' followed by the subject 'we' and past participle 'reached'.",
          "Connect the second action using the word 'than' followed by simple past 'it started raining'."
        ],
        "answer": "Answer: No sooner had we reached the village than it started raining."
      },
      "recap": [
        "Use future tense or 'going to' for intended holiday plans.",
        "'No sooner had...' is strictly followed by the connector 'than...'.",
        "A good composition paragraph needs a clear topic sentence, supporting details, and a closing sentence."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "holiday-plans",
        "title": "1. Holiday Plans, Vocabulary and Future Tense",
        "modules": [
          {
            "moduleId": "future-plans",
            "title": "Future Plans and Holiday Vocabulary",
            "bigIdea": "Holiday plans describe intended future activities using the Future Simple tense and intention expressions.",
            "learnIt": [
              "Essential holiday vocabulary: travel (journey to distant places), package (wrapped parcel or bundled tour), visit (go to see relatives), camp (stay in tents), duration (length of time), chores (daily home tasks), tuition (holiday study revision), break (school vacation).",
              "Future Simple Tense: formed using will / shall + infinitive verb. Rule: use 'shall' with pronouns I and We (e.g., We shall travel to Jinja tomorrow); use 'will' with You, He, She, It, They.",
              "Intention structure 'going to': shows a decision made before speaking (e.g., My parents are going to pay my tuition next week)."
            ],
            "tryThis": {
              "question": "Complete the sentence: We ___ visit our uncle in Mbarara next school vacation.",
              "choices": ["shall", "were", "had", "did"],
              "correct": 0,
              "explanation": "With the first-person plural pronoun 'We', the traditional Future Simple auxiliary verb is 'shall'."
            }
          },
          {
            "moduleId": "sequential-grammar",
            "title": "Sequential Actions: As soon as, Immediately, No sooner",
            "bigIdea": "Sequential conjunctions link two actions where the second happens immediately after the first finishes.",
            "learnIt": [
              "Using 'as soon as' and 'immediately': join two simple past tense actions directly (e.g., As soon as term ended, we packed our suitcases. Immediately the bus arrived, we boarded).",
              "Structure of 'No sooner...': When starting a sentence with 'No sooner', the auxiliary verb 'had' MUST come before the subject, followed by the past participle verb, and the two clauses MUST be joined by 'than' (never 'when' or 'then').",
              "Example transformation: 'As soon as Akello finished her chores, she went to play.' -> 'No sooner had Akello finished her chores than she went to play.'"
            ],
            "tryThis": {
              "question": "Choose the correct transformation: As soon as the teacher entered the classroom, the learners stood up.",
              "choices": [
                "No sooner had the teacher entered the classroom when the learners stood up.",
                "No sooner had the teacher entered the classroom than the learners stood up.",
                "No sooner did the teacher entered the classroom then the learners stood up.",
                "No sooner had the teacher enter the classroom than the learners stood up."
              ],
              "correct": 1,
              "explanation": "'No sooner had [subject] [past participle] than [simple past]' is the exact PLE grammatical structure."
            }
          }
        ]
      },
      {
        "subtopicId": "holiday-activities",
        "title": "2. Recording Activities and Composition Writing",
        "modules": [
          {
            "moduleId": "past-activities",
            "title": "Completed Activities in Simple Past Tense",
            "bigIdea": "When recording experiences from past vacations, verbs must switch consistently into past forms.",
            "learnIt": [
              "Regular past tense verbs add -ed (camped, visited, traveled, revised). Irregular past tense verbs change spelling (went, bought, saw, wrote, spent).",
              "Time connecting words: First, Next, Afterwards, Later, During the week, Finally. These maintain chronological time order in storytelling."
            ],
            "tryThis": {
              "question": "Which connecting word correctly introduces the final activity in a holiday composition?",
              "choices": ["Firstly", "Meanwhile", "Finally", "Yesterday"],
              "correct": 2,
              "explanation": "'Finally' signals the conclusion of a sequence of events."
            }
          },
          {
            "moduleId": "writing-reading",
            "imageUrl": "/images/english/composition-paragraph-structure.png",
            "imageCaption": "Hamburger paragraph model: topic sentence, supporting details, concluding sentence.",
            "title": "Reading Schedules and Paragraph Structure",
            "bigIdea": "Well-structured guided compositions follow a clear hamburger model with topic and closing sentences.",
            "learnIt": [
              "Reading holiday schedules: timetables and programs list dates, times, venues, and planned activities. Always read headings and footnotes carefully.",
              "Paragraph structure (The Hamburger Model): Top layer = Topic Sentence (introduces the main idea of the paragraph); Middle layer = Supporting Details (2 to 4 sentences explaining activities, reasons, or examples using connecting words); Bottom layer = Concluding Sentence (summarizes the feeling or lesson learnt)."
            ],
            "tryThis": {
              "question": "What is the primary role of a topic sentence at the start of a composition paragraph?",
              "choices": ["To list the writer's index number", "To introduce the main central idea of that specific paragraph", "To ask a riddle", "To say goodbye"],
              "correct": 1,
              "explanation": "The topic sentence sets the focus so the reader knows what the paragraph will discuss."
            }
          }
        ]
      }
    
      ,{
        "subtopicId": "premium-holiday-exam-practice",
        "title": "3. Premium Exam Practice: Timetables and Composition",
        "modules": [
          {
            "moduleId": "holiday-programme-comprehension",
            "title": "Reading Holiday Programmes and Notices",
            "bigIdea": "PLE English often tests whether a learner can read a simple notice, timetable or programme and answer exactly what is asked.",
            "learnIt": [
              "Read the heading first. It tells you whether the text is a programme, notice, invitation, timetable or letter.",
              "Circle dates, places, times, people and required actions. Most comprehension questions ask for one of these details.",
              "When answering, use words from the passage but write a full clear answer. Do not copy a whole sentence if only one detail is needed."
            ],
            "workedExample": {
              "question": "A holiday programme says: 'Monday 9:00 a.m. — Mathematics revision in Room P7.' What will learners do on Monday morning?",
              "steps": [
                "Step 1: Identify the day and time: Monday at 9:00 a.m.",
                "Step 2: Read the activity written after the dash: Mathematics revision.",
                "Step 3: Answer in a complete sentence."
              ],
              "answer": "They will have Mathematics revision on Monday morning."
            },
            "tryThis": {
              "question": "In a timetable, the word 'venue' means:",
              "choices": ["place where an activity happens", "person in charge", "time of arrival", "reason for holiday"],
              "correct": 0,
              "explanation": "Venue means the place where an event or activity takes place."
            }
          },
          {
            "moduleId": "holiday-composition-rubric",
            "title": "Writing a Holiday Composition that Scores",
            "bigIdea": "A premium composition is planned, sequenced and checked before submission.",
            "learnIt": [
              "Plan three parts before writing: beginning, main events, and ending. A short plan prevents mixed-up ideas.",
              "Use time connectors such as first, later, afterwards, finally, while and during to show order.",
              "After writing, check tense consistency, capital letters, punctuation, paragraphing and whether every sentence helps the story."
            ],
            "workedExample": {
              "question": "Write a strong opening sentence for a composition titled 'My Best Holiday'.",
              "steps": [
                "Step 1: Name the holiday period.",
                "Step 2: Mention where you went or what made it special.",
                "Step 3: Create interest without writing too much."
              ],
              "answer": "Last December holiday, I visited my grandparents in Masaka and learnt lessons I will never forget."
            },
            "tryThis": {
              "question": "Which sentence is the best composition opening?",
              "choices": ["Last holiday, I visited my uncle in Gulu and helped him on his farm.", "Holiday good food nice.", "I am ending my story now.", "Because and then we went."],
              "correct": 0,
              "explanation": "It is complete, clear and introduces the main event."
            }
          }
        ]
      }],
    "quiz": [
      { "q": "Choose the correct sentence:", "choices": ["No sooner had the bus stopped than the passengers stepped out.", "No sooner had the bus stopped when the passengers stepped out.", "No sooner did the bus stopped than passengers stepped out.", "No sooner had the bus stop then passengers stepped out."], "correct": 0, "why": "'No sooner had + past participle' must be paired with 'than'." },
      { "q": "We ___ travel to Mombasa during the Christmas break.", "choices": ["shall", "did", "were", "had"], "correct": 0, "why": "'Shall' expresses future intention with 'We'." },
      { "q": "Which word means money paid for extra holiday teaching or school instruction?", "choices": ["Tuition", "Chores", "Package", "Duration"], "correct": 0, "why": "Tuition refers to teaching fees or instructional lessons." },
      { "q": "Complete: As soon as the rain ___, we walked to the garden.", "choices": ["stopped", "stop", "stopping", "had stop"], "correct": 0, "why": "'As soon as' links two simple past actions ('stopped' and 'walked')." },
      { "q": "What does the word 'chores' mean in a holiday context?", "choices": ["Routine household domestic tasks like washing and sweeping", "Long bus journeys", "End-of-term examinations", "School report cards"], "correct": 0, "why": "Chores are routine domestic tasks performed at home." },
      { "q": "Rewrite in past tense: He buys a bus ticket to visit his relative.", "choices": ["He bought a bus ticket to visit his relative.", "He buyed a bus ticket to visit his relative.", "He has buy a bus ticket to visit his relative.", "He was buying a bus ticket to visit his relative."], "correct": 0, "why": "The irregular simple past tense of 'buy' is 'bought'." },
      { "q": "Which connector shows two activities happening at the exact same time?", "choices": ["While / Meanwhile", "Finally", "No sooner", "Yesterday"], "correct": 0, "why": "'While' or 'Meanwhile' indicates simultaneous duration." },
      { "q": "A guided composition paragraph must end with:", "choices": ["A concluding / closing sentence", "An index number", "A question mark", "A new title"], "correct": 0, "why": "The hamburger model closes each paragraph with a concluding sentence." }
    ]
  },
  {
    "id": "letter-writing",
    "themeId": "english-term-i",
    "themeName": "Term I",
    "title": "Letter writing",
    "estMinutes": 22,
    "status": "published",
    "reviewStatus": "verified",
    "note": {
      "intro": "Why this matters: Letter writing is tested in PLE Section B. Candidates must distinguish informal friendly layouts from formal official double-address structures.",
      "learningObjectives": [
        "Format informal letters with a single top-right address and warm close.",
        "Format formal official letters with double addresses, formal salutations, RE subject lines, and appropriate sign-offs.",
        "Pair 'Dear Sir/Madam' strictly with 'Yours faithfully,' and named salutations with 'Yours sincerely,'.",
        "Write excuse duty letters and official applications clearly."
      ],
      "whatYouNeedToKnow": [
        "Informal friendly letters require ONE address (sender's address top right), date, friendly salutation ('Dear Uncle,'), and warm close ('Your loving nephew,').",
        "Formal official letters require TWO addresses (sender top right, addressee below left), formal salutation ('Dear Sir/Madam,'), underlined subject line ('RE: APPLICATION...'), formal body, and sign-off ('Yours faithfully,' with signature and full name)."
      ],
      "worked": {
        "problem": "Choose the correct complimentary close for a formal letter starting with 'Dear Sir or Madam,'.",
        "steps": [
          "Check the salutation: 'Dear Sir or Madam,' does not use a personal name.",
          "Apply the formal letter rule: unnamed official salutations must sign off with 'Yours faithfully,'.",
          "Include your signature above your written full name."
        ],
        "answer": "Answer: Yours faithfully, (followed by signature and full name)."
      },
      "recap": [
        "Informal = 1 address; Formal = 2 addresses.",
        "Dear Sir/Madam -> Yours faithfully,; Dear Mr. Kato -> Yours sincerely,.",
        "Always underline or capitalize the RE subject line in official letters."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "informal-letters",
        "title": "1. Informal Letters (Friendly Letters)",
        "modules": [
          {
            "moduleId": "informal-format",
            "imageUrl": "/images/english/letter-layouts.png",
            "imageCaption": "Comparison of single-address informal letter layout vs double-address formal official letter layout.",
            "title": "Format and Layout of Informal Letters",
            "bigIdea": "Informal letters use a single address, a date, and a friendly layout to communicate with family and friends.",
            "learnIt": [
              "Writer's address and date: written at the top right-hand corner of the page.",
              "Salutation: use a warm, personal greeting such as 'Dear Mother,' 'Dear Uncle John,' or 'Dear Sarah,' followed by a comma.",
              "Body paragraphs: open by asking about their wellbeing, share your personal news or story in logical paragraphs, and ask questions to invite a reply.",
              "Complimentary close: sign off on the right or left with affectionate phrases like 'Your loving son,' 'Yours affectionately,' or 'Your friend,' followed by your first name only."
            ],
            "tryThis": {
              "question": "How many addresses should appear at the top of an informal letter written to a cousin?",
              "choices": ["None", "One (the sender's address)", "Two (sender's and receiver's)", "Three"],
              "correct": 1,
              "explanation": "Informal letters only require the sender's address at the top right corner."
            }
          },
          {
            "moduleId": "informal-vocabulary-structures",
            "title": "Vocabulary and Tone in Friendly Letters",
            "bigIdea": "Friendly letters use conversational English, idioms, and lively descriptive expressions.",
            "learnIt": [
              "Vocabulary: affectionate, regard, reply, postage, envelope, pen-pal, and greetings.",
              "Sentence structures: 'I am writing to inform you that...', 'Please extend my warmest greetings to...', 'I look forward to hearing from you soon.'",
              "Tone: polite, conversational, and warm, but avoiding rude slang or abbreviations (like 'u' instead of 'you')."
            ],
            "tryThis": {
              "question": "Which of the following is the most suitable complimentary close for a letter to your mother?",
              "choices": ["Yours faithfully,", "Your loving daughter,", "Yours obediently,", "Best regards sir,"],
              "correct": 1,
              "explanation": "'Your loving daughter,' or 'Your loving son,' shows appropriate family affection."
            }
          }
        ]
      },
      {
        "subtopicId": "formal-letters",
        "title": "2. Formal Letters (Official Letters)",
        "modules": [
          {
            "moduleId": "formal-format",
            "title": "Format of Formal and Official Letters",
            "bigIdea": "Formal letters strictly require two addresses, a formal salutation, a subject line, and an official sign-off.",
            "learnIt": [
              "Sender's address and date: placed at the top right-hand corner.",
              "Receiver's address: placed below the date on the left-hand side (e.g., The Headteacher, Tendo Primary School, P.O. Box...).",
              "Salutation: 'Dear Sir,' or 'Dear Madam,' (or 'Dear Mr. Kato,' if the exact name is known).",
              "Subject line (RE:): written below the salutation in capital letters or underlined (e.g., RE: APPLICATION FOR A VACANCY IN P.7).",
              "Complimentary close: 'Yours faithfully,' (when salutation is Dear Sir/Madam) or 'Yours sincerely,' (when addressed by name), followed by your signature and full name."
            ],
            "tryThis": {
              "question": "If a formal letter opens with the salutation 'Dear Sir or Madam,', which sign-off must be used?",
              "choices": ["Yours sincerely,", "Yours faithfully,", "Your loving friend,", "Yours truly,"],
              "correct": 1,
              "explanation": "'Yours faithfully,' is strictly paired with unnamed formal salutations like 'Dear Sir or Madam,'."
            }
          },
          {
            "moduleId": "official-applications-vocabulary",
            "title": "Writing Applications and Official Letters",
            "bigIdea": "Formal letters use direct, respectful language without slang to apply for vacancies, apologize, or complain.",
            "learnIt": [
              "Key vocabulary: vacancy, application, reference, qualification, attach, curriculum vitae (CV), apologize, and faithfully.",
              "Sentence structures: 'In response to your advertisement in...', 'I humbly beg to apply for...', 'I would be grateful if my request is considered.'",
              "Rule of conciseness: state your purpose clearly in the first paragraph; do not include irrelevant family stories or casual jokes."
            ],
            "tryThis": {
              "question": "Where should the subject line (RE:) appear in an official letter?",
              "choices": ["Above the sender's address", "Below the receiver's address and salutation", "At the very end below the signature", "On the envelope only"],
              "correct": 1,
              "explanation": "The subject line sits directly between the salutation and the opening paragraph."
            }
          }
        ]
      }
    
      ,{
        "subtopicId": "premium-letter-exam-practice",
        "title": "3. Premium Exam Practice: Choosing and Marking Letters",
        "modules": [
          {
            "moduleId": "letter-format-decision",
            "title": "Choosing the Correct Letter Format",
            "bigIdea": "Before writing any letter, decide whether it is informal or formal; the format depends on that choice.",
            "learnIt": [
              "An informal letter is written to a friend or relative. It normally has one address, a friendly greeting and a warm ending.",
              "A formal letter is written to an official person or office. It normally has two addresses, a subject heading and formal language.",
              "Look at the recipient in the question. Words like Headteacher, Chairperson, Manager or Officer usually signal a formal letter."
            ],
            "workedExample": {
              "question": "The question asks you to write to the Headteacher requesting permission to miss school for a medical appointment. Which type of letter is needed?",
              "steps": [
                "Step 1: Identify the receiver: Headteacher.",
                "Step 2: A Headteacher is an official school authority.",
                "Step 3: Use formal letter format and polite formal language."
              ],
              "answer": "A formal letter is needed."
            },
            "tryThis": {
              "question": "Which recipient requires a formal letter?",
              "choices": ["The District Education Officer", "Your cousin", "Your best friend", "Your grandmother"],
              "correct": 0,
              "explanation": "A District Education Officer is an official recipient, so formal format is needed."
            }
          },
          {
            "moduleId": "letter-marking-rubric",
            "title": "Letter Writing Marking Checklist",
            "bigIdea": "A letter can lose marks even when the message is good if the format, tone or paragraphing is wrong.",
            "learnIt": [
              "Check format: address, date, greeting, body and ending must be placed correctly.",
              "Check tone: formal letters must be respectful and direct; informal letters may be friendly but still clear.",
              "Check body paragraphs: reason for writing, important details, and closing request or message."
            ],
            "workedExample": {
              "question": "Improve this closing in a formal letter: 'Ok bye, see you.'",
              "steps": [
                "Step 1: Recognise that the phrase is too casual.",
                "Step 2: Use a polite formal closing.",
                "Step 3: Match the closing to the greeting."
              ],
              "answer": "Yours faithfully,"
            },
            "tryThis": {
              "question": "A formal letter that begins 'Dear Sir' should usually end with:",
              "choices": ["Yours faithfully", "Your friend", "Cheers", "Love from"],
              "correct": 0,
              "explanation": "Dear Sir/Madam pairs with Yours faithfully."
            }
          }
        ]
      }],
    "quiz": [
      { "q": "Which sign-off is correctly paired with the salutation 'Dear Sir/Madam,'?", "choices": ["Yours faithfully,", "Yours sincerely,", "Your loving friend,", "Yours affectionately,"], "correct": 0, "why": "'Yours faithfully,' is paired with unnamed official salutations." },
      { "q": "In a formal application letter, where is the receiver's address written?", "choices": ["Below the date on the left-hand side", "At the bottom right corner", "Above the sender's address", "On the back page only"], "correct": 0, "why": "The addressee's official address sits below the date on the left margin." },
      { "q": "What does the prefix 'RE:' stand for in an official letter?", "choices": ["Regarding / Reference / Subject matter", "Reply everywhere", "Return envelope", "Right entry"], "correct": 0, "why": "'RE:' introduces the central subject or purpose of the formal letter." },
      { "q": "Which salutation is appropriate for an informal letter to your sister?", "choices": ["Dear Grace,", "Dear Madam,", "To Whom It May Concern,", "Respected Sister,"], "correct": 0, "why": "Informal letters use warm first-name greetings." },
      { "q": "Which sign-off is correctly paired with the named salutation 'Dear Mrs. Musoke,'?", "choices": ["Yours sincerely,", "Yours faithfully,", "Yours obediently,", "Bye for now,"], "correct": 0, "why": "When the recipient's personal name is used, sign off with 'Yours sincerely,'." },
      { "q": "An excuse duty letter written by a parent to a headteacher should be formatted as:", "choices": ["A formal official letter with two addresses", "An informal friendly letter with one address", "A text message", "A poem"], "correct": 0, "why": "Official school correspondence requires formal double-address layout." },
      { "q": "In formal letter sign-offs, what must appear directly above the writer's printed full name?", "choices": ["The writer's handwritten signature", "A postage stamp", "The date", "A thumbprint"], "correct": 0, "why": "Official letters require a handwritten signature above the printed full name." },
      { "q": "Which sentence is suitable for the opening paragraph of a formal job application?", "choices": ["I am writing to apply for the advertised vacancy of Library Assistant.", "How are you doing my dear friend?", "I hope your children are playing well.", "Yesterday I ate rice and beans."], "correct": 0, "why": "Formal letters state their official business concisely in the opening sentence." }
    ]
  },
  {
    "id": "examinations",
    "themeId": "english-term-i",
    "themeName": "Term I",
    "title": "Examinations",
    "estMinutes": 24,
    "status": "published",
    "reviewStatus": "verified",
    "note": {
      "intro": "Why this matters: Examinations require mastery of assessment vocabulary, conditional If-clauses (1, 2, and 3), purpose structures ('so... that', 'too... to'), and timetable instructions.",
      "learningObjectives": [
        "Use examination vocabulary (invigilator, candidate, index number, pass slip).",
        "Construct and transform sentences across Conditionals 1, 2, and 3.",
        "Join sentences using 'so... that...', 'too... to...', and 'in order to...'.",
        "Interpret examination timetables and formal instruction sheets."
      ],
      "whatYouNeedToKnow": [
        "Conditional 1 (Possible future): If + Present Simple -> Future Simple (If she revises hard, she will pass PLE).",
        "Conditional 2 (Unlikely/Hypothetical present): If + Simple Past -> would + infinitive (If she revised hard, she would pass PLE).",
        "Conditional 3 (Impossible past regret): If + Past Perfect -> would have + past participle (If she had revised hard, she would have passed PLE).",
        "'Too... to...' expresses negative impossibility (He was too tired to write -> He was so tired that he could not write)."
      ],
      "worked": {
        "problem": "Rewrite using Conditional 3: Akello did not read instructions, so she failed the paper.",
        "steps": [
          "Identify the past failure: did not read -> failed.",
          "Begin with Conditional 3 past perfect 'If Akello had read instructions...'",
          "Complete with result clause 'she would not have failed the paper' (or 'she would have passed the paper')."
        ],
        "answer": "Answer: If Akello had read the instructions, she would not have failed the paper."
      },
      "recap": [
        "Conditional 1 = will + verb; Conditional 2 = would + verb; Conditional 3 = would have + past participle.",
        "'Too... to...' joins negative meaning without using the word 'not'.",
        "Always check exam instructions and allocate time properly."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "exam-vocabulary-conditionals",
        "title": "1. Examination Vocabulary and Conditional Clauses",
        "modules": [
          {
            "moduleId": "exam-vocabulary",
            "title": "Vocabulary of Examinations",
            "bigIdea": "Knowing examination terminology ensures candidates follow instructions and rules inside the examination room.",
            "learnIt": [
              "Core vocabulary: candidate (a student registered to sit an examination), index number (official identification code), invigilator (the teacher supervising inside the examination room to stop cheating), supervisor (chief examination officer at the center), instructions (rules printed on the question paper front page).",
              "Results vocabulary: score / mark (points earned), grade (division awarded like D1, D2), pass slip (official result certificate), result sheet, cheat (disqualified malpractice)."
            ],
            "tryThis": {
              "question": "The official supervisor inside an examination room whose duty is to ensure candidates do not cheat is called an:",
              "choices": ["Invigilator", "Candidate", "Instructor", "Editor"],
              "correct": 0,
              "explanation": "An invigilator watches over candidates sitting an examination."
            }
          },
          {
            "moduleId": "conditional-clauses",
            "title": "Mastering Conditionals 1, 2, and 3 (If-Clauses)",
            "bigIdea": "Conditional clauses link a condition to a result across three exact grammatical tenses.",
            "learnIt": [
              "Conditional 1 (Likely / Probable Future): If + Present Simple -> Future Simple (will/shall + verb). Example: If Opio registers early, he will sit the exam.",
              "Conditional 2 (Unlikely / Unreal Present): If + Simple Past -> would + base verb. Used for advice or imaginary situations. Example: If Opio registered early, he would sit the exam. (If I were you, I would revise daily).",
              "Conditional 3 (Impossible Past Regret): If + Past Perfect (had + past participle) -> would have + past participle. Shows regret about something that cannot be changed. Example: If Opio had registered early, he would have sat the exam."
            ],
            "tryThis": {
              "question": "Complete using Conditional 3: If the candidates had read the instructions carefully, they ___ all the questions correctly.",
              "choices": ["will answer", "would answer", "would have answered", "answered"],
              "correct": 2,
              "explanation": "Conditional 3 pairs 'had + past participle' in the if-clause with 'would have + past participle' in the result clause."
            }
          }
        ]
      },
      {
        "subtopicId": "purpose-structures-instructions",
        "title": "2. Purpose Structures and Interpreting Instructions",
        "modules": [
          {
            "moduleId": "purpose-structures",
            "title": "Using so...that, too...to, and in order to",
            "bigIdea": "These grammar structures express extreme degree, negative impossibility, and purpose.",
            "learnIt": [
              "Using 'so... that...': shows result of an extreme degree (e.g., The exam was so hard that many candidates failed).",
              "Using 'too... to...': expresses negative impossibility without using the word 'not' (e.g., The exam was too hard for candidates to pass).",
              "Transformation rule: 'The boy was very ill. He could not sit the paper.' -> 'The boy was so ill that he could not sit the paper.' -> 'The boy was too ill to sit the paper.'",
              "Using 'in order to' / 'so as to': shows purpose (e.g., She woke up at 5:00 a.m. in order to reach the examination center on time)."
            ],
            "tryThis": {
              "question": "Choose the correct transformation using 'too... to...': The mathematics paper was very difficult. The candidates could not finish it.",
              "choices": [
                "The mathematics paper was too difficult that candidates could not finish it.",
                "The mathematics paper was too difficult for the candidates to finish.",
                "The mathematics paper was so difficult to finish.",
                "The mathematics paper was too difficult for finish."
              ],
              "correct": 1,
              "explanation": "'Too [adjective] for [noun/pronoun] to [infinitive verb]' replaces negative clauses accurately."
            }
          },
          {
            "moduleId": "exam-conduct",
            "imageUrl": "/images/english/ple-exam-instruction-sheet.png",
            "imageCaption": "PLE exam instructions sheet highlighting careful reading and time budgeting.",
            "title": "Interpreting Timetables and Instructions",
            "bigIdea": "PLE candidates must analyze examination timetables and obey front-page instruction rubrics strictly.",
            "learnIt": [
              "Interpreting timetables: check exact dates, morning (9:00 a.m.) vs afternoon (2:00 p.m.) sessions, and time duration (e.g., 2 hours 15 minutes).",
              "Reading instruction sheets: check how many questions to attempt (e.g., Answer ALL questions in Section A and Section B), time allocation rules, and warnings against malpractice."
            ],
            "tryThis": {
              "question": "If an examination rubric states: 'Attempt all questions in Section A and any four questions from Section B', what happens if a candidate attempts five questions in Section B?",
              "choices": ["The candidate gets bonus marks", "Only the first four answered questions in Section B will be marked", "The invigilator gives a prize", "Section A is canceled"],
              "correct": 1,
              "explanation": "Examiners strictly follow rubric instructions and mark only up to the maximum required number of questions."
            }
          }
        ]
      }
    
      ,{
        "subtopicId": "premium-exam-skills",
        "title": "3. Premium Exam Practice: Instructions and Written Answers",
        "modules": [
          {
            "moduleId": "rubric-reading-mastery",
            "title": "Reading Examination Instructions",
            "bigIdea": "Many learners lose marks not because they do not know the answer, but because they ignore the instruction.",
            "learnIt": [
              "Underline command words such as choose, rewrite, explain, give, complete, arrange and punctuate.",
              "Check how many answers are required. If the question asks for two reasons, give exactly two clear reasons.",
              "Read section instructions before answering. Some papers require all questions in one section and only a number from another section."
            ],
            "workedExample": {
              "question": "The instruction says: 'Give two reasons why candidates should arrive early.' How many reasons should you write?",
              "steps": [
                "Step 1: Identify the number word: two.",
                "Step 2: Do not write one reason only.",
                "Step 3: Do not waste time writing five reasons unless asked."
              ],
              "answer": "Write two reasons."
            },
            "tryThis": {
              "question": "The command word 'rewrite' means you should:",
              "choices": ["write the sentence again in the required form", "explain the meaning", "draw a picture", "choose any answer"],
              "correct": 0,
              "explanation": "Rewrite means write it again after making the requested change."
            }
          },
          {
            "moduleId": "exam-answer-quality",
            "title": "Writing Clear Examination Answers",
            "bigIdea": "A good written answer is short, complete and directly connected to the question.",
            "learnIt": [
              "Answer in a full sentence when the question asks 'why', 'how' or 'explain'.",
              "Do not repeat the question without adding the answer. Make sure the key information is present.",
              "For grammar transformations, keep the meaning the same while changing only the required structure."
            ],
            "workedExample": {
              "question": "Answer: Why should candidates write their index numbers clearly?",
              "steps": [
                "Step 1: Identify the key action: write index numbers clearly.",
                "Step 2: Give the reason: scripts can be identified and marked correctly.",
                "Step 3: Write one complete sentence."
              ],
              "answer": "Candidates should write their index numbers clearly so that their scripts can be identified and marked correctly."
            },
            "tryThis": {
              "question": "Which is the best answer to 'Why should candidates read instructions?'",
              "choices": ["They should read instructions so that they answer correctly.", "Instructions.", "Because yes.", "They reading."],
              "correct": 0,
              "explanation": "It is a complete sentence and gives a clear reason."
            }
          }
        ]
      }],
    "quiz": [
      { "q": "Complete using Conditional 2: If I knew the invigilator's name, I ___ you.", "choices": ["would tell", "will tell", "would have told", "told"], "correct": 0, "why": "Conditional 2 pairs simple past ('knew') with 'would + base verb' ('would tell')." },
      { "q": "Complete using Conditional 3: If she had revised her notes, she ___ the examination.", "choices": ["would have passed", "would pass", "will pass", "passed"], "correct": 0, "why": "'Had revised' requires 'would have passed'." },
      { "q": "Join using 'too... to...': The desk was very heavy. The candidate could not carry it.", "choices": ["The desk was too heavy for the candidate to carry.", "The desk was too heavy that the candidate could not carry it.", "The desk was so heavy to carry.", "The desk was too heavy carry."], "correct": 0, "why": "'Too heavy for the candidate to carry' expresses negative impossibility concisely." },
      { "q": "Who is an invigilator?", "choices": ["A teacher supervising inside an examination room", "A candidate writing exams", "A doctor in a hospital", "A driver of a school bus"], "correct": 0, "why": "An invigilator watches over examination rooms." },
      { "q": "What does the phrase 'in order to' express in a sentence?", "choices": ["Purpose or intention", "Regret", "Past time", "Negative refusal"], "correct": 0, "why": "'In order to' explains the purpose behind an action." },
      { "q": "Choose the correct Conditional 1 sentence:", "choices": ["If he arrives early, he will sit the test.", "If he arrived early, he will sit the test.", "If he arrives early, he would sit the test.", "If he had arrived early, he will sit the test."], "correct": 0, "why": "Present simple ('arrives') pairs with future simple ('will sit')." },
      { "q": "What is an index number?", "choices": ["An official registration number assigned to an examination candidate", "The number of pages in a book", "A phone number", "A score mark"], "correct": 0, "why": "PLE candidates use unique index numbers for identification." },
      { "q": "Rewrite: He read hard so that he could pass PLE. (Begin: He read hard in order...)", "choices": ["He read hard in order to pass PLE.", "He read hard in order that pass PLE.", "He read hard in order passing PLE.", "He read hard in order for pass PLE."], "correct": 0, "why": "'In order to + base verb' replaces purpose clauses cleanly." }
    ]
  },
  {
    "id": "electronic-media",
    "themeId": "english-term-ii",
    "themeName": "Term II",
    "title": "Electronic media",
    "estMinutes": 22,
    "status": "published",
    "reviewStatus": "verified",
    "note": {
      "intro": "Why this matters: Electronic media vocabulary and Active/Passive voice conversions are core PLE components for modern communication.",
      "learningObjectives": [
        "Use media terms (broadcast, internet, email, presenter, viral) correctly.",
        "Convert active voice sentences into passive voice across tenses.",
        "Use preference structures ('prefer... to...', 'like... more than...').",
        "Read web announcements and draft short email communications."
      ],
      "whatYouNeedToKnow": [
        "Active voice: subject performs the action (The presenter reads the news). Passive voice: subject receives the action (The news is read by the presenter).",
        "Preference structure: 'prefer [noun/gerund] to [noun/gerund]' strictly takes 'to' (never 'than'). Example: I prefer reading emails to watching television."
      ],
      "worked": {
        "problem": "Rewrite in Passive Voice: The technician repaired the broken radio.",
        "steps": [
          "Identify subject (technician), past verb (repaired), and object (the broken radio).",
          "Make object the new subject: 'The broken radio'.",
          "Use past passive auxiliary 'was' + past participle 'repaired' + by phrase 'by the technician'."
        ],
        "answer": "Answer: The broken radio was repaired by the technician."
      },
      "recap": [
        "Active = doer first; Passive = receiver first.",
        "'Prefer' must always be paired with 'to'.",
        "Email messages must be concise with a clear subject line."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "media-vocabulary-voice",
        "title": "1. Media Vocabulary and Active / Passive Voice",
        "modules": [
          {
            "moduleId": "broadcast-media",
            "title": "Radio, Television and Internet Terminology",
            "bigIdea": "Modern electronic communication relies on specific broadcast and digital terminology.",
            "learnIt": [
              "Broadcast media vocabulary: television, channel, station, studio, presenter (announcer hosting a show), producer, viewer (watches TV), listener (listens to radio), broadcast (transmitting programs).",
              "Digital internet vocabulary: internet, website, email (electronic mail), social media, network, download (transfer files from internet to device), upload (transfer files from device to internet), viral (spreading rapidly online)."
            ],
            "tryThis": {
              "question": "A person who listens to a radio broadcast is called a:",
              "choices": ["Viewer", "Listener", "Presenter", "Editor"],
              "correct": 1,
              "explanation": "Radio audiences are listeners, while television audiences are viewers."
            }
          },
          {
            "moduleId": "active-passive-voice",
            "title": "Converting Active and Passive Voice",
            "bigIdea": "Voice shows whether the subject performs the action (active) or receives the action (passive).",
            "learnIt": [
              "Simple Present transformation: Active -> 'The presenter reads announcements.' Passive -> 'Announcements ARE READ by the presenter.'",
              "Simple Past transformation: Active -> 'He sent an email yesterday.' Passive -> 'An email WAS SENT by him yesterday.'",
              "Present Continuous transformation: Active -> 'She is downloading a file.' Passive -> 'A file IS BEING DOWNLOADED by her.'",
              "Future Simple transformation: Active -> 'They will broadcast the match.' Passive -> 'The match WILL BE BROADCAST by them.'"
            ],
            "tryThis": {
              "question": "Choose the correct passive form: The teacher operates the computer.",
              "choices": [
                "The computer is operated by the teacher.",
                "The computer was operated by the teacher.",
                "The computer operates the teacher.",
                "The computer is being operated by the teacher."
              ],
              "correct": 0,
              "explanation": "Present simple active ('operates') becomes present simple passive ('is operated by')."
            }
          }
        ]
      },
      {
        "subtopicId": "preferences-emails",
        "title": "2. Preference Structures and Email Drafting",
        modules: [
          {
            "moduleId": "preference-grammar",
            "title": "Expressing Preference: Prefer... to, Like... more than",
            "bigIdea": "Preference grammar follows exact prepositions when comparing two activities.",
            "learnIt": [
              "Rule for 'prefer': always use the preposition 'to' (never 'than'). Example: Akello prefers sending emails to writing letters.",
              "Rule for 'like... more than': use 'more than'. Example: Akello likes sending emails more than writing letters.",
              "Rule for 'interested in': always use preposition 'in' + gerund (-ing verb). Example: He is interested in browsing websites."
            ],
            "tryThis": {
              "question": "Complete the sentence correctly: Most youth prefer watching television ___ listening to the radio.",
              "choices": ["than", "to", "over", "more"],
              "correct": 1,
              "explanation": "In formal PLE English, 'prefer' is strictly followed by the preposition 'to'."
            }
          }
        ]
      }
    
      ,{
        "subtopicId": "premium-media-communication",
        "title": "3. Premium Exam Practice: Emails, Notices and Media Messages",
        "modules": [
          {
            "moduleId": "email-message-writing",
            "title": "Writing Clear Emails and Messages",
            "bigIdea": "Electronic writing should be clear, polite and easy to understand quickly.",
            "learnIt": [
              "A good email has a clear subject, greeting, short body and polite closing.",
              "Avoid slang in formal school emails. Use respectful language just as you would in a formal letter.",
              "State the purpose early: request, apology, invitation, report or reminder."
            ],
            "workedExample": {
              "question": "Write a subject line for an email asking your teacher for permission to submit homework late.",
              "steps": [
                "Step 1: Identify the purpose: permission for late homework.",
                "Step 2: Keep it short and specific.",
                "Step 3: Use respectful wording."
              ],
              "answer": "Request to Submit Homework Late"
            },
            "tryThis": {
              "question": "Which subject line is clearest?",
              "choices": ["Request for Science Notes", "Hi", "Important", "Please"],
              "correct": 0,
              "explanation": "It clearly tells the reader what the email is about."
            }
          },
          {
            "moduleId": "media-comprehension",
            "title": "Reading Online Notices and Broadcast Messages",
            "bigIdea": "Media messages often answer who, what, where, when and why.",
            "learnIt": [
              "When reading a notice or broadcast message, identify the audience first. Is it for learners, parents, teachers or the public?",
              "Look for action words such as register, attend, download, submit or listen. They tell the reader what to do.",
              "Check dates and times carefully because electronic messages often give deadlines."
            ],
            "workedExample": {
              "question": "A notice says: 'Parents should download report cards by Friday.' What should parents do?",
              "steps": [
                "Step 1: Identify the audience: parents.",
                "Step 2: Identify the action: download report cards.",
                "Step 3: Include the deadline if needed."
              ],
              "answer": "Parents should download report cards by Friday."
            },
            "tryThis": {
              "question": "In an online notice, the word 'deadline' means:",
              "choices": ["last allowed time or date", "first person to arrive", "computer password", "radio station"],
              "correct": 0,
              "explanation": "A deadline is the final time or date by which something must be done."
            }
          }
        ]
      }],
    "quiz": [
      { "q": "Choose the correct passive voice: They will upload the video tomorrow.", "choices": ["The video will be uploaded by them tomorrow.", "The video is uploaded by them tomorrow.", "The video was uploaded by them tomorrow.", "The video will upload tomorrow."], "correct": 0, "why": "Future simple active ('will upload') becomes future simple passive ('will be uploaded')." },
      { "q": "Complete: I prefer reading storybooks on my tablet ___ playing computer games.", "choices": ["than", "to", "over", "from"], "correct": 1, "why": "'Prefer' takes the preposition 'to'." },
      { "q": "What does the word 'download' mean in electronic media?", "choices": ["Transferring electronic files or data from the internet onto a personal device", "Deleting files", "Turning off a computer", "Sending a letter by post"], "correct": 0, "why": "Downloading retrieves remote server files to local device storage." },
      { "q": "Convert to active voice: The radio announcement was read by Sarah.", "choices": ["Sarah read the radio announcement.", "Sarah reads the radio announcement.", "Sarah is reading the radio announcement.", "Sarah will read the radio announcement."], "correct": 0, "why": "Past passive ('was read') converts to past active ('read')." },
      { "q": "Which word means an announcer who introduces programs on television or radio?", "choices": ["Presenter", "Invigilator", "Candidate", "Viewer"], "correct": 0, "why": "A presenter hosts and introduces media broadcasts." },
      { "q": "Complete: He is very interested ___ learning how to build websites.", "choices": ["in", "on", "at", "for"], "correct": 0, "why": "The adjective 'interested' takes the preposition 'in'." },
      { "q": "Rewrite: She likes watching news more than listening to music. (Use: ...prefers...)", "choices": ["She prefers watching news to listening to music.", "She prefers watching news than listening to music.", "She prefers watching news more than listening to music.", "She prefers watching news over listening to music."], correct: 0, "why": "'Likes X more than Y' transforms to 'prefers X to Y'." },
      { "q": "A person who watches television broadcasts is called a:", "choices": ["Viewer", "Listener", "Presenter", "Broadcaster"], "correct": 0, "why": "Television audiences are viewers." }
    ]
  },
  {
    "id": "rights-responsibilities-freedom",
    "themeId": "english-term-ii",
    "themeName": "Term II",
    "title": "Rights, responsibilities and freedom",
    "estMinutes": 24,
    "status": "published",
    "reviewStatus": "verified",
    "note": {
      "intro": "Why this matters: Civic rights and responsibilities require precise mastery of Reported Speech (Direct/Indirect conversions) and contrast conjunctions.",
      "learningObjectives": [
        "Use civic vocabulary (citizen, human rights, duty, child abuse, fair trial).",
        "Convert Direct Speech into Indirect (Reported) Speech for statements, commands, and questions.",
        "Use contrast conjunctions ('although', 'even if', 'in spite of', 'despite').",
        "Interpret human rights charters and child protection comprehension passages."
      ],
      "whatYouNeedToKnow": [
        "Direct speech uses exact quotation marks ('...'). Reported speech drops quotation marks, backshifts tenses (Present -> Past), and changes pronouns/time words.",
        "'In spite of' takes the preposition 'of'; 'despite' never takes 'of' (Despite the rain vs In spite of the rain)."
      ],
      "worked": {
        "problem": "Change to Reported Speech: 'I will protect school property tomorrow,' Opio said.",
        "steps": [
          "Identify reporting verb: Opio said that...",
          "Change pronoun: 'I' -> 'he'.",
          "Backshift modal verb: 'will' -> 'would'.",
          "Change adverb of time: 'tomorrow' -> 'the next day' or 'the following day'."
        ],
        "answer": "Answer: Opio said that he would protect school property the following day."
      },
      "recap": [
        "Present tenses backshift to past tenses in reported speech.",
        "'Now' -> 'then'; 'today' -> 'that day'; 'yesterday' -> 'the previous day'.",
        "Despite = In spite of (never write 'despite of')."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "civic-vocabulary-reported-speech",
        "title": "1. Civic Vocabulary and Reported Speech",
        modules: [
          {
            "moduleId": "rights-duties",
            "title": "Civic Rights and Responsibilities Vocabulary",
            "bigIdea": "Every basic human right is balanced by a moral or legal responsibility.",
            "learnIt": [
              "Essential vocabulary: citizen (legal member of a country), human rights (entitlements belonging to every person), responsibility / duty / obligation (moral or legal requirement to act), child abuse (mistreatment or violation of a child's rights), fair trial (unbiased court hearing), juvenile (a young person under 18), violate (break a law or right).",
              "Matching rights to responsibilities: Right to education -> Responsibility to attend school and study diligently; Right to health -> Responsibility to maintain clean personal hygiene."
            ],
            "tryThis": {
              "question": "Which vocabulary word means breaking or disregarding a person's legal right or rule?",
              "choices": ["Violate", "Conserve", "Protect", "Invigilation"],
              "correct": 0,
              "explanation": "To violate a right or law means to breach or fail to respect it."
            }
          },
          {
            "moduleId": "reported-speech-rules",
            "title": "Direct and Indirect (Reported) Speech",
            "bigIdea": "Reporting someone's words requires shifting tenses, pronouns, and time expressions accurately.",
            "learnIt": [
              "Tense backshifting rules: Simple Present -> Simple Past ('I know my rights,' she said -> She said that she knew her rights); Present Continuous -> Past Continuous ('I am reading,' -> She said she was reading); Future Simple ('will') -> Conditional ('would').",
              "Time and place changes: now -> then; today -> that day; tomorrow -> the next/following day; yesterday -> the previous day; here -> there; this -> that.",
              "Reporting commands: use 'told' or 'ordered' + infinitive (e.g., The teacher said, 'Stand up!' -> The teacher ordered the pupils to stand up)."
            ],
            "tryThis": {
              "question": "Change to Reported Speech: 'We are studying our civic duties today,' the learners said.",
              "choices": [
                "The learners said that they were studying their civic duties that day.",
                "The learners said that we are studying our civic duties today.",
                "The learners said that they studied civic duties today.",
                "The learners told that they are studying their civic duties that day."
              ],
              "correct": 0,
              "explanation": "'We are studying... today' shifts to 'they were studying... that day'."
            }
          }
        ]
      },
      {
        "subtopicId": "contrast-grammar",
        "title": "2. Contrast Conjunctions: Although, Despite, In Spite Of",
        modules: [
          {
            "moduleId": "despite-inspiteof",
            "title": "Using Although, Even if, In spite of, and Despite",
            "bigIdea": "Contrast conjunctions join opposing ideas, following strict prepositional rules.",
            "learnIt": [
              "Rule for 'although' / 'even though': joins two clauses directly (e.g., Although the boy was poor, he attended school regularly).",
              "Rule for 'in spite of': MUST be followed by the preposition 'of' + noun/gerund (e.g., In spite of poverty, he attended school).",
              "Rule for 'despite': MUST NEVER take the preposition 'of' (e.g., Despite poverty, he attended school). Never write 'despite of'."
            ],
            "tryThis": {
              "question": "Choose the correct sentence:",
              "choices": [
                "Despite of the heavy rain, the citizens attended the independence parade.",
                "Despite the heavy rain, the citizens attended the independence parade.",
                "In spite the heavy rain, the citizens attended the parade.",
                "Although of the heavy rain, citizens attended."
              ],
              "correct": 1,
              "explanation": "'Despite' never takes 'of', whereas 'in spite' must take 'of'."
            }
          }
        ]
      }
    
      ,{
        "subtopicId": "premium-rights-comprehension",
        "title": "3. Premium Exam Practice: Rights Passages and Reported Speech",
        "modules": [
          {
            "moduleId": "rights-passage-reading",
            "title": "Reading Rights and Responsibility Passages",
            "bigIdea": "Civic passages test vocabulary, careful reading and the ability to explain duties clearly.",
            "learnIt": [
              "Separate rights from responsibilities. A right is something a person is entitled to; a responsibility is a duty or expected action.",
              "When a passage mentions a problem such as child labour, neglect or abuse, answer with careful respectful language.",
              "For 'give a reason' questions, write a complete sentence that connects the action to the result."
            ],
            "workedExample": {
              "question": "Why should children respect school property?",
              "steps": [
                "Step 1: Identify the responsibility: respect school property.",
                "Step 2: Explain the result: property remains useful for all learners.",
                "Step 3: Write a complete answer."
              ],
              "answer": "Children should respect school property so that it remains useful for all learners."
            },
            "tryThis": {
              "question": "Which is a responsibility of a learner?",
              "choices": ["Keeping the classroom clean", "Being denied food", "Being abused", "Missing all lessons"],
              "correct": 0,
              "explanation": "Keeping the classroom clean is a duty learners can carry out."
            }
          },
          {
            "moduleId": "reported-speech-premium",
            "title": "Reported Speech without Losing Meaning",
            "bigIdea": "Reported speech changes tense, pronouns and time words while keeping the original meaning.",
            "learnIt": [
              "Change pronouns according to the speaker and listener. 'I' may become he, she or I depending on context.",
              "Common tense backshifts: am/is -> was, are -> were, will -> would, can -> could, has/have -> had.",
              "Common time changes: today -> that day, tomorrow -> the next day, yesterday -> the previous day, now -> then."
            ],
            "workedExample": {
              "question": "Change to reported speech: 'I can report the case today,' Sarah said.",
              "steps": [
                "Step 1: Begin with Sarah said that.",
                "Step 2: Change I to she.",
                "Step 3: Change can to could and today to that day."
              ],
              "answer": "Sarah said that she could report the case that day."
            },
            "tryThis": {
              "question": "Change 'will' in direct speech to reported speech after 'said that'.",
              "choices": ["would", "will", "shall", "can"],
              "correct": 0,
              "explanation": "Will usually changes to would in reported speech."
            }
          }
        ]
      }],
    "quiz": [
      { "q": "Change to reported speech: 'I will defend my rights tomorrow,' Sarah said.", "choices": ["Sarah said that she would defend her rights the following day.", "Sarah said that she will defend her rights tomorrow.", "Sarah said that she defended her rights the next day.", "Sarah told that she would defend her rights tomorrow."], "correct": 0, "why": "'I will... tomorrow' shifts to 'she would... the following day'." },
      { "q": "Choose the correct sentence:", "choices": ["Despite the challenges, we fulfilled our responsibilities.", "Despite of the challenges, we fulfilled our responsibilities.", "In spite the challenges, we fulfilled our responsibilities.", "Although of the challenges, we fulfilled our responsibilities."], "correct": 0, "why": "'Despite' stands alone without 'of'." },
      { "q": "What does 'child abuse' mean?", "choices": ["Mistreatment or violation of a child's fundamental rights and wellbeing", "Sending a child to school", "Feeding a child a balanced diet", "Giving a child school chores"], "correct": 0, "why": "Child abuse involves physical, emotional, or educational neglect and mistreatment." },
      { "q": "Change to direct speech: The judge ordered the juvenile to stand up.", "choices": ["The judge said to the juvenile, 'Stand up!'", "The judge said, 'He stood up.'", "The judge asked, 'Did you stand up?'", "The judge told, 'Standing up.'"], "correct": 0, "why": "Reported command 'ordered... to stand up' reverts to direct quotation ''Stand up!''." },
      { "q": "Complete: ___ his young age, the boy knew all his civic rights.", "choices": ["In spite of", "Despite of", "Although of", "Even"], "correct": 0, "why": "'In spite of' correctly pairs with the noun phrase 'his young age'." },
      { "q": "A legal member of a country who enjoys national rights and duties is called a:", "choices": ["Citizen", "Refugee", "Invigilator", "Presenter"], "correct": 0, "why": "A citizen holds legal civic membership." },
      { "q": "Rewrite beginning 'Although...': In spite of being tired, the policeman stayed on duty.", "choices": ["Although the policeman was tired, he stayed on duty.", "Although being tired of the policeman stayed on duty.", "Although he stayed on duty despite tired.", "Although the policeman tired he stayed."], "correct": 0, "why": "'Although + clause' replaces prepositional phrase 'In spite of + gerund'." },
      { "q": "In reported speech, what does the direct time adverb 'now' change into?", "choices": ["then", "that day", "there", "before"], "correct": 0, "why": "'Now' backshifts to 'then' in reported speech." }
    ]
  },
  {
    "id": "environmental-protection",
    "themeId": "english-term-iii",
    "themeName": "Term III",
    "title": "Environmental protection",
    "estMinutes": 20,
    "status": "published",
    "reviewStatus": "verified",
    "note": {
      "intro": "Why this matters: Ecology vocabulary, Relative Pronouns ('who', 'which', 'whose', 'whom'), and cause/effect connectors allow persuasive writing on conservation.",
      "learningObjectives": [
        "Use environmental terms (pollution, afforestation, poach, ecosystem, charcoal).",
        "Join sentences smoothly using Relative Pronouns (who, which, whose, whom, that).",
        "Express cause and effect using 'because', 'since', 'as a result of', and 'consequently'.",
        "Write argumentative essays and poems advocating environmental preservation."
      ],
      "whatYouNeedToKnow": [
        "'Who' and 'whom' refer to people; 'which' refers to animals/things; 'whose' shows possession.",
        "'As a result of' takes a noun phrase (As a result of deforestation, rainfall decreased)."
      ],
      "worked": {
        "problem": "Join using a relative pronoun: There goes the forest warden. His vehicle caught fire.",
        "steps": [
          "Identify common reference: the forest warden and His (possession).",
          "Replace possessive pronoun 'His' with relative pronoun 'whose'.",
          "Combine clauses: 'There goes the forest warden whose vehicle caught fire.'"
        ],
        "answer": "Answer: There goes the forest warden whose vehicle caught fire."
      },
      "recap": [
        "Who = people (subject); Whom = people (object); Whose = possession; Which = things.",
        "Afforestation = planting new forests; Reforestation = replanting cut forests."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "ecology-vocabulary-relatives",
        "title": "1. Ecology Vocabulary and Relative Pronouns",
        modules: [
          {
            "moduleId": "why-protect-environment",
            "title": "Environmental Vocabulary",
            "bigIdea": "Precise vocabulary helps explain environmental threats and conservation remedies.",
            "learnIt": [
              "Threats: pollution (contaminating water, air, or soil), poach (hunt wildlife illegally in game parks), degrade (ruin environmental quality), deforestation (cutting trees indiscriminately for charcoal).",
              "Remedies: conserve (protect natural resources wisely), recycle (process waste plastics/paper for reuse), afforestation (planting trees where none existed), ecosystem (balanced natural habitat)."
            ],
            "tryThis": {
              "question": "What does the verb 'poach' mean in environmental protection?",
              "choices": ["To hunt wild protected animals illegally in game parks", "To plant new tree seedlings", "To boil drinking water", "To collect plastic litter"],
              "correct": 0,
              "explanation": "Poaching threatens endangered wildlife species with extinction."
            }
          },
          {
            "moduleId": "relative-pronouns",
            "title": "Joining Sentences with Relative Pronouns",
            "bigIdea": "Relative pronouns link descriptive clauses to antecedent nouns or pronouns seamlessly.",
            "learnIt": [
              "Using 'who': refers to people as subjects (e.g., The environmentalist WHO planted trees was rewarded).",
              "Using 'which': refers to animals or inanimate objects (e.g., The wetland WHICH was drained has dried up).",
              "Using 'whose': indicates possession for people or animals (e.g., The farmer WHOSE crops failed practiced monoculture).",
              "Using 'whom': refers to people as objects of verbs or prepositions (e.g., The officer TO WHOM we reported poaching arrested the hunters)."
            ],
            "tryThis": {
              "question": "Join correctly: That is the game ranger. The poachers shot his dog.",
              "choices": [
                "That is the game ranger whose dog the poachers shot.",
                "That is the game ranger who dog the poachers shot.",
                "That is the game ranger whom dog the poachers shot.",
                "That is the game ranger which dog the poachers shot."
              ],
              "correct": 0,
              "explanation": "'Whose' replaces possessive pronoun 'his'."
            }
          }
        ]
      },
      {
        "subtopicId": "cause-effect-grammar",
        "title": "2. Cause and Effect Connectors",
        modules: [
          {
            "moduleId": "practical-protection",
            "title": "Because, Since, As a result of, Consequently",
            "bigIdea": "Cause and effect connectors link environmental actions directly to their ecological consequences.",
            "learnIt": [
              "Using 'because' and 'since': introduce cause clauses (e.g., Rivers flooded BECAUSE forests were destroyed).",
              "Using 'as a result of' / 'due to': followed by a noun phrase (e.g., As a result of reckless bush burning, soil erosion increased).",
              "Using 'consequently' / 'therefore': introduce result sentences (e.g., People dumped plastics into the lake; consequently, fish died)."
            ],
            "tryThis": {
              "question": "Complete: ___ heavy deforestation, local rainfall patterns have become erratic.",
              "choices": ["As a result of", "Because", "Since", "Consequently"],
              "correct": 0,
              "explanation": "'As a result of' is followed by the noun phrase 'heavy deforestation'."
            }
          }
        ]
      }
    
      ,{
        "subtopicId": "premium-environment-writing",
        "title": "3. Premium Exam Practice: Persuasive Environmental Writing",
        "modules": [
          {
            "moduleId": "environment-notice-comprehension",
            "title": "Reading Environmental Notices",
            "bigIdea": "Environmental texts often ask learners to identify causes, effects and solutions.",
            "learnIt": [
              "A cause explains why a problem happens. An effect explains what happens because of the problem.",
              "A solution explains what people can do to reduce or stop the problem.",
              "When reading about pollution, deforestation or poaching, look for words that show cause and effect: because, therefore, as a result, leads to."
            ],
            "workedExample": {
              "question": "A notice says blocked drainage channels cause flooding. What is the cause of flooding?",
              "steps": [
                "Step 1: Identify the problem: flooding.",
                "Step 2: Look for the word cause.",
                "Step 3: The cause given is blocked drainage channels."
              ],
              "answer": "The flooding is caused by blocked drainage channels."
            },
            "tryThis": {
              "question": "Which word best shows an effect?",
              "choices": ["therefore", "although", "before", "unless"],
              "correct": 0,
              "explanation": "Therefore often introduces a result or effect."
            }
          },
          {
            "moduleId": "environment-persuasive-paragraph",
            "title": "Writing a Persuasive Environmental Paragraph",
            "bigIdea": "A strong persuasive paragraph states a problem, gives a reason and asks for action.",
            "learnIt": [
              "Begin with a clear topic sentence naming the environmental problem.",
              "Give one or two reasons why the problem is serious. Use cause-and-effect connectors.",
              "End with a practical action such as planting trees, sorting rubbish, cleaning drainage channels or reporting poachers."
            ],
            "workedExample": {
              "question": "Write a strong topic sentence about tree cutting.",
              "steps": [
                "Step 1: Name the problem: cutting trees carelessly.",
                "Step 2: Show that it is serious.",
                "Step 3: Make the sentence clear and direct."
              ],
              "answer": "Cutting trees carelessly is a serious problem because it destroys the environment and reduces rainfall."
            },
            "tryThis": {
              "question": "Which sentence is most persuasive?",
              "choices": ["We should plant trees to protect our environment.", "Trees good.", "I saw tree.", "Environment because."],
              "correct": 0,
              "explanation": "It clearly asks for action and gives a reason."
            }
          }
        ]
      }],
    "quiz": [
      { "q": "Complete: This is the factory ___ polluted our community water stream.", "choices": ["which", "who", "whose", "whom"], "correct": 0, "why": "'Which' refers to inanimate things like factories." },
      { "q": "Complete: There goes the village elder ___ tree seedlings were stolen.", "choices": ["whose", "who", "which", "whom"], "correct": 0, "why": "'Whose' indicates possession of the seedlings." },
      { "q": "What does 'afforestation' mean?", "choices": ["Planting trees in an area where there was no previous forest cover", "Cutting down timber trees", "Hunting wild animals", "Burning charcoal"], "correct": 0, "why": "Afforestation creates new wooded areas." },
      { "q": "Join: The pupils collected plastics. They wanted to recycle them. (Use: ...in order to...)", "choices": ["The pupils collected plastics in order to recycle them.", "The pupils collected plastics in order that recycle them.", "The pupils collected plastics in order for recycle.", "The pupils collected plastics in order recycling."], "correct": 0, "why": "'In order to + base verb' expresses purpose." },
      { "q": "Complete: The river dried up ___ prolonged drought.", "choices": ["due to", "because", "since", "consequently"], "correct": 0, "why": "'Due to' / 'as a result of' pairs with noun phrase 'prolonged drought'." },
      { "q": "Which relative pronoun refers to people when they are the object of a preposition?", "choices": ["whom", "which", "whose", "what"], "correct": 0, "why": "'Whom' is the objective personal relative pronoun (e.g., to whom)." },
      { "q": "What is the illegal hunting of protected wildlife in game parks called?", "choices": ["Poaching", "Recycling", "Conservation", "Degrading"], "correct": 0, "why": "Poaching is illegal wildlife hunting." },
      { "q": "Rewrite: Because people cut trees, soil erosion occurred. (Begin: As a result of...)", "choices": ["As a result of cutting trees, soil erosion occurred.", "As a result of because people cut trees, soil erosion occurred.", "As a result of soil erosion, people cut trees.", "As a result of cut trees occurred."], "correct": 0, "why": "'As a result of + gerund phrase' replaces clause 'Because people cut trees'." }
    ]
  },
  {
    "id": "ceremonies",
    "themeId": "english-term-iii",
    "themeName": "Term III",
    "title": "Ceremonies",
    "estMinutes": 22,
    "status": "published",
    "reviewStatus": "verified",
    "note": {
      "intro": "Why this matters: Ceremonies vocabulary, Adverbial clauses of time ('while', 'whereas'), and Question Tags are essential for PLE Paper Sections A and B.",
      "learningObjectives": [
        "Use ceremonial terms (MC, guest of honor, wedding, funeral, RSVP).",
        "Construct sentence contrasts using time conjunctions ('while', 'whereas', 'during').",
        "Apply correct positive and negative Question Tag rules across complex tenses.",
        "Design formal invitation cards following RSVP conventions."
      ],
      "whatYouNeedToKnow": [
        "Question Tag Golden Rule: Positive statement -> Negative tag (She arrived early, didn't she?); Negative statement -> Positive tag (She didn't arrive early, did she?).",
        "Words like rarely, hardly, never, seldom make statements negative so their tags MUST be positive (He rarely attends weddings, does he?)."
      ],
      "worked": {
        "problem": "Add a question tag: They seldom arrive late for graduation ceremonies, ___?",
        "steps": [
          "Check the statement polarity: 'seldom' makes the statement negative.",
          "Identify tense and auxiliary: simple present tense ('arrive' -> auxiliary 'do').",
          "Apply positive tag rule: positive auxiliary 'do' + pronoun 'they'."
        ],
        "answer": "Answer: They seldom arrive late for graduation ceremonies, do they?"
      },
      "recap": [
        "Statement positive -> Tag negative; Statement negative -> Tag positive.",
        "Never, rarely, hardly, seldom = negative statements requiring positive tags.",
        "RSVP on invitation cards means 'Please reply to confirm attendance'."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "ceremony-vocab-tags",
        "title": "1. Ceremonies Vocabulary and Question Tags",
        modules: [
          {
            "moduleId": "marriage-ceremonies",
            "title": "Vocabulary of Weddings, Funerals and Invitations",
            "bigIdea": "Ceremonies require formal cultural and programmatic vocabulary.",
            "learnIt": [
              "Social gathering roles: Master of Ceremonies / MC (person conducting programmatic announcements), Guest of Honor (chief invited VIP), bride (woman getting married), bridegroom (man getting married), congregation / mourners (people attending church or funeral).",
              "Invitation card conventions: must state exact Venue (place), Date, Time, and RSVP (French abbreviation Répondez S'il Vous Plaît meaning 'Please respond to confirm attendance')."
            ],
            "tryThis": {
              "question": "What does the abbreviation 'RSVP' printed at the bottom of a formal wedding invitation card instruct invited guests to do?",
              "choices": ["Please reply to confirm attendance", "Bring expensive presents", "Arrive after sunset", "Wear traditional dress only"],
              "correct": 0,
              "explanation": "RSVP requests guests to confirm whether they will attend so organizers can plan seating and catering."
            }
          },
          {
            "moduleId": "question-tags-mastery",
            "title": "Mastering Question Tags across Complex Tenses",
            "bigIdea": "Question tags turn statements into questions by opposing the statement's polarity.",
            "learnIt": [
              "Standard positive statement -> negative tag: 'The bride looked beautiful, DIDN'T SHE?' 'They have cut the wedding cake, HAVEN'T THEY?'",
              "Standard negative statement -> positive tag: 'The MC did not arrive on time, DID HE?' 'We won't leave before speeches, WILL WE?'",
              "Trap words making statements negative: Never, rarely, hardly, seldom, barely, scarcely. Because these words carry negative meaning, their question tags MUST be positive! Example: 'The guest of honor rarely speaks long, DOES HE?' (Never write 'doesn't he?').",
              "Special tag rule for 'I am': 'I am invited to the reception, AREN'T I?' (Never write 'amn't I?')."
            ],
            "tryThis": {
              "question": "Add the correct question tag: The choir hardly ever sings out of tune during weddings, ___?",
              "choices": ["doesn't it?", "does it?", "didn't it?", "do they?"],
              "correct": 1,
              "explanation": "The word 'hardly' makes the statement negative, requiring the positive singular tag 'does it?'."
            }
          }
        ]
      },
      {
        "subtopicId": "time-conjunctions",
        "title": "2. Adverbial Clauses of Time: While, Whereas, During",
        modules: [
          {
            "moduleId": "funeral-ceremonies",
            "title": "Using While, Whereas and During",
            "bigIdea": "Time and contrast conjunctions link simultaneous events during ceremonies.",
            "learnIt": [
              "Using 'while': links two continuous simultaneous actions (e.g., WHILE the choir was singing, the bridegroom marched in).",
              "Using 'whereas': shows direct comparison or contrast (e.g., The wedding reception was lively, WHEREAS the funeral service was solemn).",
              "Using 'during': followed strictly by a noun phrase indicating time period (e.g., DURING the speeches, all guests listened attentively)."
            ],
            "tryThis": {
              "question": "Complete correctly: ___ the graduation ceremony, parents clapped and cheered.",
              "choices": ["During", "While", "Whereas", "As soon"],
              "correct": 0,
              "explanation": "'During' is followed by the noun phrase 'the graduation ceremony'."
            }
          }
        ]
      }
    
      ,{
        "subtopicId": "premium-ceremony-programmes",
        "title": "3. Premium Exam Practice: Programmes, Invitations and Speeches",
        "modules": [
          {
            "moduleId": "ceremony-programme-reading",
            "title": "Reading Ceremony Programmes",
            "bigIdea": "Programmes show order of events; learners must read sequence, roles and timing carefully.",
            "learnIt": [
              "Read the title to know the ceremony type: wedding, graduation, funeral, baptism or birthday.",
              "Identify roles such as MC, guest of honour, chairperson, bride, bridegroom, mourner or speaker.",
              "Use sequence words like first, next, after, before and finally to answer order questions."
            ],
            "workedExample": {
              "question": "A programme lists: 1. Opening prayer 2. Welcome speech 3. Guest speech. What happens after the welcome speech?",
              "steps": [
                "Step 1: Find welcome speech in the order.",
                "Step 2: Look at the next item after it.",
                "Step 3: The next item is guest speech."
              ],
              "answer": "The guest speech happens after the welcome speech."
            },
            "tryThis": {
              "question": "In a programme, MC stands for:",
              "choices": ["Master of Ceremonies", "Main Candidate", "Morning Class", "Market Chairperson"],
              "correct": 0,
              "explanation": "MC means Master of Ceremonies, the person who guides the programme."
            }
          },
          {
            "moduleId": "ceremony-speech-writing",
            "title": "Writing Short Ceremony Speeches",
            "bigIdea": "A good short speech greets people, states the purpose and ends politely.",
            "learnIt": [
              "Begin by greeting the people present in order of importance, such as the guest of honour, teachers, parents and learners.",
              "State the purpose of the ceremony clearly. Do not write unrelated stories.",
              "End with appreciation, congratulations or a polite closing depending on the ceremony."
            ],
            "workedExample": {
              "question": "Write a good opening line for a graduation speech.",
              "steps": [
                "Step 1: Greet the important people present.",
                "Step 2: Mention the ceremony.",
                "Step 3: Keep the tone respectful."
              ],
              "answer": "The guest of honour, headteacher, teachers, parents and fellow learners, I am happy to welcome you to our graduation ceremony."
            },
            "tryThis": {
              "question": "Which is the best closing for a short appreciation speech?",
              "choices": ["Thank you for listening.", "I am going away.", "Food is there.", "Because ceremony."],
              "correct": 0,
              "explanation": "It is polite and suitable for ending a speech."
            }
          }
        ]
      }],
    "quiz": [
      { "q": "Add the correct question tag: She rarely misses family ceremonies, ___?", "choices": ["does she?", "doesn't she?", "did she?", "didn't she?"], "correct": 0, "why": "'Rarely' makes the statement negative, requiring the positive tag 'does she?'." },
      { "q": "Add the correct question tag: I am the Master of Ceremonies today, ___?", "choices": ["aren't I?", "amn't I?", "am I?", "don't I?"], "correct": 0, "why": "The standard grammatical tag for 'I am...' is 'aren't I?'." },
      { "q": "Complete: ___ the bride was walking down the aisle, the choir sang a hymn.", "choices": ["While", "During", "Whereas", "Despite"], "correct": 0, "why": "'While' introduces a continuous action clause ('was walking')." },
      { "q": "What is the primary role of a Master of Ceremonies (MC) at a wedding reception?", "choices": ["To guide the program and make official announcements", "To cook the feast", "To drive the bridal car", "To sign the marriage certificate"], "correct": 0, "why": "The MC directs the schedule of speeches and events." },
      { "q": "Add the correct question tag: The mourners have arrived at the church, ___?", "choices": ["haven't they?", "have they?", "didn't they?", "don't they?"], "correct": 0, "why": "Present perfect positive ('have arrived') takes present perfect negative tag ('haven't they?')." },
      { "q": "Complete: We sat quietly ___ the entire speech by the guest of honor.", "choices": ["during", "while", "whereas", "as soon"], "correct": 0, "why": "'During' pairs with the noun phrase 'the entire speech'." },
      { "q": "Add the correct question tag: Let us pray together for the bereaved family, ___?", "choices": ["shall we?", "will we?", "don't we?", "can we?"], "correct": 0, "why": "Imperative suggestions beginning with 'Let us...' always take the tag 'shall we?'." },
      { "q": "Which word refers to the woman on her wedding day?", "choices": ["Bride", "Bridegroom", "Invigilator", "Candidate"], "correct": 0, "why": "The bride is the female partner in a wedding." }
    ]
  }
];

export function getEnglishTopic(id: string): Topic | undefined {
  return ENGLISH_TOPICS.find((topic) => topic.id === id);
}
