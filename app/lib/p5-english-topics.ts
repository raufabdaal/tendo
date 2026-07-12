import type { UpperPrimaryLesson } from "@/lib/content-blocks";
import type { Topic } from "@/lib/topics";
import { addUpperPrimaryEnglishV4 } from "@/lib/v4-english-helpers";

// P5 English beta content layer.
// Source map: content/curriculum/p5-english.json.
// Rule: NCDC first, build second. This follows the researched P5 Set One English structure.


function balanceTopicAnswers(topics: Topic[]): Topic[] {
  let nextCorrectIndex = 0;

  function visit(value: unknown): void {
    if (Array.isArray(value)) {
      value.forEach(visit);
      return;
    }
    if (!value || typeof value !== "object") return;

    const record = value as Record<string, unknown>;
    if (Array.isArray(record.choices) && typeof record.correct === "number" && record.choices.length === 4) {
      const choices = record.choices as string[];
      const currentCorrect = record.correct;
      if (currentCorrect >= 0 && currentCorrect < choices.length) {
        const answer = choices[currentCorrect];
        const remaining = choices.filter((_, index) => index !== currentCorrect);
        const targetIndex = nextCorrectIndex % 4;
        remaining.splice(targetIndex, 0, answer);
        record.choices = remaining;
        record.correct = targetIndex;
        nextCorrectIndex += 1;
      }
    }

    Object.values(record).forEach(visit);
  }

  visit(topics);
  return topics;
}

const P5_LETTER_WRITING_V4: UpperPrimaryLesson[] = [
  {
    id: "p5-v4-friendly-letter-parts",
    classLevel: "P5",
    term: "Term II",
    curriculumMode: "subject",
    subject: "English",
    topicTitle: "Letter Writing",
    subTopicTitle: "Parts of a Friendly Letter",
    lessonTitle: "Parts of a Friendly Letter",
    blocks: [
      { kind: "vocabulary", title: "Letter words", words: [
        { word: "address", meaning: "where the writer lives or receives letters" },
        { word: "date", meaning: "the day, month and year when the letter is written" },
        { word: "greeting", meaning: "the opening words of a letter" },
        { word: "body", meaning: "the main message in the letter" },
        { word: "closing", meaning: "the ending words of a letter" },
        { word: "signature", meaning: "the writer's name at the end" },
      ] },
      { kind: "definition", term: "friendly letter", definition: "is a personal letter written to someone known well, such as a friend or relative.", simpleCheck: "A letter to your cousin inviting him to visit is a friendly letter." },
      { kind: "categories", title: "Parts of a friendly letter", categories: [
        { name: "Address", definition: "writer's address at the top", examples: ["P.O. Box 12, Jinja"] },
        { name: "Date", definition: "when the letter is written", examples: ["12 July 2026"] },
        { name: "Greeting", definition: "opening words", examples: ["Dear Sarah,"] },
        { name: "Body", definition: "main message", examples: ["invitation, thanks, news"] },
        { name: "Closing", definition: "ending words", examples: ["Your friend,"] },
      ] },
      { kind: "diagram", title: "Letter layout", imageUrl: "/images/english/p5-letter-layouts.svg", caption: "Friendly letter layout: address, date, greeting, body and closing.", labels: ["address", "date", "greeting", "body", "closing"] },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "Name five parts of a friendly letter.", answer: "Address, date, greeting, body, closing and signature." },
        { type: "written", prompt: "Write a correct greeting for a letter to your friend Sarah.", answer: "Dear Sarah," },
        { type: "multiple-choice", prompt: "The main message of a letter is the:", choices: ["body", "stamp", "envelope", "road"], answer: "body" },
      ] },
    ],
  },
  {
    id: "p5-v4-invitations-replies",
    classLevel: "P5",
    term: "Term II",
    curriculumMode: "subject",
    subject: "English",
    topicTitle: "Letter Writing",
    subTopicTitle: "Invitations and Replies",
    lessonTitle: "Invitations and Replies",
    blocks: [
      { kind: "definition", term: "invitation", definition: "is a message asking someone to come to an event or activity.", simpleCheck: "Please come for my birthday party on Saturday." },
      { kind: "categories", title: "What an invitation should include", categories: [
        { name: "Event", definition: "what the person is invited to", examples: ["birthday", "debate", "wedding", "class party"] },
        { name: "Date and time", definition: "when the event will happen", examples: ["Friday at 2 p.m."] },
        { name: "Place", definition: "where the event will happen", examples: ["school hall", "home", "church"] },
        { name: "Polite request", definition: "kind words asking the person to come", examples: ["Please come", "You are invited"] },
      ] },
      { kind: "examples", title: "Model invitation", examples: [
        { name: "Please come for our class debate on Friday at 2 p.m. in the school hall.", explanation: "mentions event, day, time and place" },
        { name: "Thank you for inviting me. I will come.", explanation: "positive reply" },
        { name: "Thank you for inviting me. I am sorry I will not come.", explanation: "polite refusal" },
      ] },
      { kind: "activity", title: "Write now", instructions: ["Choose an event.", "Write the date, time and place.", "Use polite words.", "Write a short reply accepting or refusing."], safetyNote: "Invitations should be shared with permission from parents or teachers." },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "written", prompt: "Write one sentence inviting a friend to a debate on Friday." },
        { type: "written", prompt: "Write one polite reply accepting an invitation." },
        { type: "multiple-choice", prompt: "An invitation should include:", choices: ["place and time", "only insults", "no message", "only drawings"], answer: "place and time" },
      ] },
    ],
  },
];

const P5_COMMUNICATION_V4: UpperPrimaryLesson[] = [
  {
    id: "p5-v4-communication-means",
    classLevel: "P5",
    term: "Term II",
    curriculumMode: "subject",
    subject: "English",
    topicTitle: "Communication",
    subTopicTitle: "Means of Communication",
    lessonTitle: "Means of Communication",
    blocks: [
      { kind: "vocabulary", title: "Communication words", words: [
        { word: "communication", meaning: "sending and receiving messages" },
        { word: "post office", meaning: "a place where letters and parcels are sent or received" },
        { word: "telephone", meaning: "a device used for speaking to someone far away" },
        { word: "internet", meaning: "a network used to send, receive and find information" },
        { word: "message", meaning: "information sent to someone" },
      ] },
      { kind: "definition", term: "communication", definition: "is the sending and receiving of messages between people.", simpleCheck: "A phone call is communication." },
      { kind: "categories", title: "Means of communication", categories: [
        { name: "Post office", definition: "used for sending letters and parcels", examples: ["letter", "parcel", "stamp"] },
        { name: "Telephone", definition: "used for speaking or sending messages", examples: ["phone call", "SMS"] },
        { name: "Internet", definition: "used for messages, learning and information", examples: ["email", "website", "online lesson"] },
        { name: "Radio and television", definition: "send information to many people", examples: ["news", "announcements"] },
      ] },
      { kind: "diagram", title: "Communication card", imageUrl: "/images/english/p5-communication-message.svg", caption: "Ways people send messages clearly and politely.", labels: ["phone", "letter", "internet", "message"] },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "What is communication?", answer: "Sending and receiving messages." },
        { type: "short-answer", prompt: "Name four means of communication.", answer: "Post office, telephone, internet, radio, television or letters." },
        { type: "multiple-choice", prompt: "Which one is used to send a letter?", choices: ["post office", "hoe", "basket", "plate"], answer: "post office" },
      ] },
    ],
  },
  {
    id: "p5-v4-clear-messages-telephone",
    classLevel: "P5",
    term: "Term II",
    curriculumMode: "subject",
    subject: "English",
    topicTitle: "Communication",
    subTopicTitle: "Clear Messages and Telephone Language",
    lessonTitle: "Clear Messages and Telephone Language",
    blocks: [
      { kind: "definition", term: "clear message", definition: "is a message that gives the correct information in a way the receiver can understand.", simpleCheck: "Parents will meet at school on Friday at 10 a.m. is clear." },
      { kind: "categories", title: "Parts of a clear message", categories: [
        { name: "Who", definition: "the person or group involved", examples: ["parents", "teacher", "pupils"] },
        { name: "What", definition: "the event or action", examples: ["meeting", "debate", "homework"] },
        { name: "When", definition: "time and date", examples: ["Friday at 10 a.m."] },
        { name: "Where", definition: "place", examples: ["school hall", "classroom"] },
        { name: "Polite telephone language", definition: "kind words used on a call", examples: ["Hello", "May I speak to...?", "Thank you"] },
      ] },
      { kind: "activity", title: "Write a phone message", instructions: ["Say who called.", "Write the message clearly.", "Include time and place where needed.", "Check spelling and punctuation."], safetyNote: "Use phones and internet with adult guidance." },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "written", prompt: "Write a message: Teacher says parents will meet at school on Friday at 10 a.m." },
        { type: "written", prompt: "Write a polite phone greeting." },
        { type: "multiple-choice", prompt: "A clear message should include:", choices: ["important details", "only jokes", "unclear words", "no time ever"], answer: "important details" },
      ] },
    ],
  },
];

const P5_PRINT_MEDIA_V4: UpperPrimaryLesson[] = [
  {
    id: "p5-v4-print-media-vocabulary",
    classLevel: "P5",
    term: "Term I",
    curriculumMode: "subject",
    subject: "English",
    topicTitle: "Print Media",
    subTopicTitle: "Print Media Vocabulary",
    lessonTitle: "Print Media Vocabulary",
    blocks: [
      { kind: "vocabulary", title: "Print media words", words: [
        { word: "newspaper", meaning: "printed pages with news and information" },
        { word: "magazine", meaning: "a printed book with stories, pictures and articles" },
        { word: "brochure", meaning: "a small printed paper giving information" },
        { word: "newsletter", meaning: "a printed update for a group or organisation" },
        { word: "article", meaning: "a written piece in a newspaper or magazine" },
        { word: "advert", meaning: "a notice that tells people about something to buy or attend" },
      ] },
      { kind: "definition", term: "print media", definition: "means printed materials used to share information, news, stories or adverts.", simpleCheck: "A newspaper is print media." },
      { kind: "categories", title: "Types of print media", categories: [
        { name: "Newspapers", definition: "printed news and information", examples: ["daily newspaper", "school newspaper"] },
        { name: "Magazines", definition: "printed material with articles, stories and pictures", examples: ["children's magazine", "sports magazine"] },
        { name: "Brochures", definition: "small printed papers giving information", examples: ["school brochure", "health brochure"] },
        { name: "Newsletters", definition: "printed updates for a group", examples: ["school newsletter", "club newsletter"] },
      ] },
      { kind: "diagram", title: "Print media card", imageUrl: "/images/english/p5-print-media.svg", caption: "Newspapers, magazines, brochures and newsletters share information.", labels: ["newspaper", "magazine", "article", "advert"] },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "What is print media?", answer: "Printed materials used to share information." },
        { type: "short-answer", prompt: "Name four types of print media.", answer: "Newspaper, magazine, brochure and newsletter." },
        { type: "multiple-choice", prompt: "A written piece in a newspaper is an:", choices: ["article", "engine", "spanner", "river"], answer: "article" },
      ] },
    ],
  },
  {
    id: "p5-v4-articles-relative-pronouns-writing",
    classLevel: "P5",
    term: "Term I",
    curriculumMode: "subject",
    subject: "English",
    topicTitle: "Print Media",
    subTopicTitle: "Articles, Relative Pronouns and Writing",
    lessonTitle: "Articles, Relative Pronouns and Writing",
    blocks: [
      { kind: "definition", term: "article", definition: "is a word used before a noun: a, an or the.", simpleCheck: "Use an before a vowel sound: an orange." },
      { kind: "categories", title: "Grammar for print media", categories: [
        { name: "A", definition: "used before a singular noun beginning with a consonant sound", examples: ["a newspaper", "a story"] },
        { name: "An", definition: "used before a singular noun beginning with a vowel sound", examples: ["an article", "an advert"] },
        { name: "The", definition: "used when the reader knows the exact thing", examples: ["the school newsletter"] },
        { name: "Who / which", definition: "relative pronouns used to add information", examples: ["The editor who wrote the article", "The paper which was printed"] },
      ] },
      { kind: "activity", title: "Write a short article", instructions: ["Choose a school event.", "Write a title.", "Write who was involved.", "Write what happened, where and when.", "Check articles, punctuation and spelling."], safetyNote: "Do not write false news or words that insult people." },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "Fill in: ___ article was interesting. (A/An)", answer: "An" },
        { type: "written", prompt: "Write one sentence using who." },
        { type: "multiple-choice", prompt: "Which is correct?", choices: ["an advert", "a advert", "the an advert", "an newspaper"], answer: "an advert" },
      ] },
    ],
  },
];

const P4_LIKES_FEELINGS_V4: UpperPrimaryLesson[] = [
  {
    id: "p4-v4-likes-preferences",
    classLevel: "P4",
    term: "Term I",
    curriculumMode: "subject",
    subject: "English",
    topicTitle: "What I Like and How I Feel",
    subTopicTitle: "Likes, Preferences and Feelings",
    lessonTitle: "Likes, Preferences and Feelings",
    blocks: [
      { kind: "vocabulary", title: "Words for likes and feelings", words: [
        { word: "like", meaning: "to enjoy something" }, { word: "prefer", meaning: "to like one thing more than another" }, { word: "happy", meaning: "feeling glad" }, { word: "sad", meaning: "feeling unhappy" }, { word: "afraid", meaning: "feeling fear" }, { word: "because", meaning: "a word used to give a reason" }
      ] },
      { kind: "definition", term: "preference", definition: "is something a person likes more than another thing.", simpleCheck: "I prefer mangoes to oranges." },
      { kind: "categories", title: "Sentence patterns", categories: [
        { name: "Likes", definition: "sentences that tell what someone enjoys", examples: ["I like reading.", "She likes netball."] },
        { name: "Preferences", definition: "sentences comparing what someone likes more", examples: ["I prefer rice to posho.", "He prefers football to volleyball."] },
        { name: "Feelings with reasons", definition: "sentences that tell a feeling and why", examples: ["I am happy because I passed.", "She is afraid because it is dark."] }
      ] },
      { kind: "diagram", title: "Feelings and preferences", imageUrl: "/images/english/p4-feelings-preferences.svg", caption: "Use like, prefer and because to talk about feelings and choices.", labels: ["like", "prefer", "happy", "sad", "because"] },
      { kind: "activity", title: "Speaking and writing practice", instructions: ["Say two things you like.", "Say one thing you prefer and give a reason.", "Write three sentences about your feelings using because."], safetyNote: "Do not laugh at another learner's feelings or choices." },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "written", prompt: "Write one sentence using like." },
        { type: "written", prompt: "Write one sentence using prefer." },
        { type: "multiple-choice", prompt: "Choose the correct sentence.", choices: ["I am happy because I passed.", "I happy because passed.", "Happy I because.", "I am because happy passed."], answer: "I am happy because I passed." }
      ] }
    ]
  }
];

const P4_BEHAVIOUR_V4: UpperPrimaryLesson[] = [
  {
    id: "p4-v4-behaviour-advice",
    classLevel: "P4",
    term: "Term II",
    curriculumMode: "subject",
    subject: "English",
    topicTitle: "Behaviour",
    subTopicTitle: "Good Behaviour and Advice",
    lessonTitle: "Good Behaviour and Advice",
    blocks: [
      { kind: "vocabulary", title: "Behaviour words", words: [
        { word: "behaviour", meaning: "the way a person acts" }, { word: "honest", meaning: "telling the truth" }, { word: "polite", meaning: "showing good manners" }, { word: "careless", meaning: "not taking care" }, { word: "should", meaning: "used to give advice" }, { word: "must", meaning: "used for a strong rule" }
      ] },
      { kind: "definition", term: "good behaviour", definition: "is acting in a respectful, safe and responsible way.", simpleCheck: "Saying please and thank you shows good behaviour." },
      { kind: "categories", title: "Advice structures", categories: [
        { name: "Should", definition: "used to give advice", examples: ["You should greet elders.", "You should keep time."] },
        { name: "Must", definition: "used for a strong rule", examples: ["You must wash your hands.", "You must respect others."] },
        { name: "Must not", definition: "used for forbidden actions", examples: ["You must not fight.", "You must not steal."] }
      ] },
      { kind: "diagram", title: "Behaviour advice", imageUrl: "/images/english/p4-behaviour-advice.svg", caption: "Use should, must and must not to give advice about behaviour.", labels: ["should", "must", "must not", "good", "bad"] },
      { kind: "activity", title: "Advice practice", instructions: ["Choose one good behaviour.", "Write a sentence using should.", "Choose one bad behaviour.", "Write a sentence using must not."], safetyNote: "Use advice to help others, not to insult them." },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "written", prompt: "Write one sentence using should." },
        { type: "written", prompt: "Write one sentence using must not." },
        { type: "multiple-choice", prompt: "Which sentence gives good advice?", choices: ["You should respect elders.", "You must fight.", "You should steal.", "You must break desks."], answer: "You should respect elders." }
      ] }
    ]
  }
];

const P4_TIME_ENGLISH_V4: UpperPrimaryLesson[] = [
  {
    id: "p4-v4-past-tenses-time",
    classLevel: "P4",
    term: "Term II",
    curriculumMode: "subject",
    subject: "English",
    topicTitle: "Time",
    subTopicTitle: "Past Simple and Past Continuous",
    lessonTitle: "Past Simple and Past Continuous",
    blocks: [
      { kind: "vocabulary", title: "Time words", words: [
        { word: "yesterday", meaning: "the day before today" }, { word: "last week", meaning: "the week before this week" }, { word: "was", meaning: "past form used with I, he, she or it" }, { word: "were", meaning: "past form used with you, we or they" }, { word: "while", meaning: "during the time that something was happening" }
      ] },
      { kind: "definition", term: "past simple tense", definition: "is used to talk about an action that happened and ended in the past.", simpleCheck: "I played yesterday." },
      { kind: "definition", term: "past continuous tense", definition: "is used to talk about an action that was happening at a certain time in the past.", simpleCheck: "I was reading when Mother came." },
      { kind: "categories", title: "Past tense structures", categories: [
        { name: "Past simple", definition: "subject + past verb", examples: ["I walked home.", "She cooked food."] },
        { name: "Past continuous", definition: "was/were + verb-ing", examples: ["I was reading.", "They were playing."] },
        { name: "While", definition: "shows two actions happening around the same time", examples: ["While I was reading, it rained."] }
      ] },
      { kind: "diagram", title: "Time tenses", imageUrl: "/images/english/p4-time-tenses.svg", caption: "Use past simple and past continuous to write about time.", labels: ["yesterday", "was", "were", "-ing", "while"] },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "written", prompt: "Write one sentence about what you did yesterday." },
        { type: "written", prompt: "Write one sentence using was or were + -ing." },
        { type: "multiple-choice", prompt: "Choose the correct sentence.", choices: ["I was reading.", "I were reading.", "I reading was.", "Reading I was."], answer: "I was reading." }
      ] }
    ]
  }
];

const P4_FUTURE_V4: UpperPrimaryLesson[] = [
  {
    id: "p4-v4-future-expression",
    classLevel: "P4",
    term: "Term III",
    curriculumMode: "subject",
    subject: "English",
    topicTitle: "Expression of the Future",
    subTopicTitle: "Future Language and Planning",
    lessonTitle: "Future Language and Planning",
    blocks: [
      { kind: "vocabulary", title: "Future words", words: [
        { word: "tomorrow", meaning: "the day after today" }, { word: "next week", meaning: "the week after this week" }, { word: "will", meaning: "used to talk about future actions" }, { word: "going to", meaning: "used for future plans" }, { word: "diary", meaning: "a book for writing plans or events" }
      ] },
      { kind: "definition", term: "future tense", definition: "is used to talk about actions that have not happened yet.", simpleCheck: "I will read tomorrow." },
      { kind: "categories", title: "Future structures", categories: [
        { name: "Will", definition: "used for future actions or decisions", examples: ["I will revise English.", "She will visit her aunt."] },
        { name: "Going to", definition: "used for planned future actions", examples: ["I am going to read.", "We are going to plant trees."] },
        { name: "Diary plan", definition: "writing planned activities with time", examples: ["Monday: read a story", "Tuesday: practise sums"] }
      ] },
      { kind: "activity", title: "Write a study plan", instructions: ["Write three things you will do next week.", "Use will or going to.", "Put each activity on a different day."], safetyNote: "Choose safe and helpful plans." },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "written", prompt: "Write one sentence using will." },
        { type: "written", prompt: "Write one sentence using going to." },
        { type: "multiple-choice", prompt: "Which sentence talks about the future?", choices: ["I will read tomorrow.", "I read yesterday.", "I am reading now.", "I ate food."], answer: "I will read tomorrow." }
      ] }
    ]
  }
];

const P4_DEMOCRACY_V4: UpperPrimaryLesson[] = [
  {
    id: "p4-v4-democracy-election",
    classLevel: "P4",
    term: "Term III",
    curriculumMode: "subject",
    subject: "English",
    topicTitle: "Democracy",
    subTopicTitle: "Elections, Participation and Fair Play",
    lessonTitle: "Elections, Participation and Fair Play",
    blocks: [
      { kind: "vocabulary", title: "Democracy words", words: [
        { word: "democracy", meaning: "a way of choosing leaders by people's choice" }, { word: "election", meaning: "a process of choosing a leader by voting" }, { word: "candidate", meaning: "a person who wants to be chosen" }, { word: "vote", meaning: "to choose a leader or option" }, { word: "majority", meaning: "the greater number" }, { word: "fair play", meaning: "playing or competing honestly and respectfully" }
      ] },
      { kind: "definition", term: "democracy", definition: "is a system where people take part in choosing leaders or making decisions fairly.", simpleCheck: "Choosing a class monitor by voting is a simple democratic activity." },
      { kind: "categories", title: "Participation words", categories: [
        { name: "Candidate", definition: "a person who wants to be chosen", examples: ["Sarah is a candidate for class monitor."] },
        { name: "Vote", definition: "to choose someone or something", examples: ["Pupils vote for a leader."] },
        { name: "Majority", definition: "the greater number of votes", examples: ["The candidate with most votes wins."] },
        { name: "MDD / Games / Sports", definition: "activities where learners participate and express ideas", examples: ["music", "dance", "drama", "football"] }
      ] },
      { kind: "diagram", title: "Class election", imageUrl: "/images/english/p4-democracy-election.svg", caption: "Election and participation vocabulary.", labels: ["vote", "candidate", "leader", "majority", "fair play"] },
      { kind: "activity", title: "Class election report", instructions: ["Name the candidates.", "Say how pupils voted.", "Say who won by majority.", "Write a short report using polite words."], safetyNote: "Do not insult candidates or voters." },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "Who is a candidate?", answer: "A person who wants to be chosen." },
        { type: "written", prompt: "Write one sentence using vote." },
        { type: "multiple-choice", prompt: "MDD means:", choices: ["Music, Dance and Drama", "Money Day Desk", "Market Door Drum", "Map Drawing Day"], answer: "Music, Dance and Drama" }
      ] }
    ]
  }
];

const P5_VEHICLE_REPAIR_V4: UpperPrimaryLesson[] = [
  {
    id: "p5-v4-vehicle-repair-maintenance",
    classLevel: "P5",
    term: "Term I",
    curriculumMode: "subject",
    subject: "English",
    topicTitle: "Vehicle Repair and Maintenance",
    subTopicTitle: "Vehicle Parts, Tools and Safety Language",
    lessonTitle: "Vehicle Parts, Tools and Safety Language",
    blocks: [
      { kind: "vocabulary", title: "Vehicle words", words: [
        { word: "engine", meaning: "the part that powers a vehicle" }, { word: "brakes", meaning: "parts that help a vehicle stop" }, { word: "mirror", meaning: "helps a driver see behind or beside" }, { word: "jack", meaning: "a tool used to lift a vehicle" }, { word: "spanner", meaning: "a tool used to tighten or loosen nuts" }, { word: "mustn't", meaning: "must not; used for forbidden actions" }
      ] },
      { kind: "definition", term: "maintenance", definition: "means keeping something in good working condition by checking and repairing it.", simpleCheck: "Repairing bad brakes is vehicle maintenance." },
      { kind: "categories", title: "Language structures", categories: [
        { name: "Has / have", definition: "used to show possession", examples: ["The bicycle has a bell.", "The cars have mirrors."] },
        { name: "Must / mustn't", definition: "used for rules and safety", examples: ["You must repair brakes.", "You mustn't drive with flat tyres."] },
        { name: "If", definition: "used for condition and result", examples: ["If the tyre is flat, use a jack."] },
        { name: "In order to", definition: "used to show purpose", examples: ["He used a jack in order to lift the car."] }
      ] },
      { kind: "diagram", title: "Vehicle and travel language", imageUrl: "/images/english/p5-travel-dialogue.svg", caption: "Vehicle repair and travel communication language.", labels: ["engine", "brakes", "mirror", "jack", "mustn't"] },
      { kind: "activity", title: "Safety sentences", instructions: ["Name one vehicle part.", "Name one repair tool.", "Write one sentence using must.", "Write one sentence using if."], safetyNote: "Do not touch or repair real vehicles without a trained adult." },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "Which tool lifts a car?", answer: "A jack." },
        { type: "written", prompt: "Write one sentence using mustn't." },
        { type: "multiple-choice", prompt: "Which part helps a vehicle stop?", choices: ["brakes", "seat", "boot", "saddle"], answer: "brakes" }
      ] }
    ]
  }
];

const P5_TRAVELLING_V4: UpperPrimaryLesson[] = [
  {
    id: "p5-v4-travelling-language",
    classLevel: "P5",
    term: "Term I",
    curriculumMode: "subject",
    subject: "English",
    topicTitle: "Travelling",
    subTopicTitle: "Travel Vocabulary and Past Continuous",
    lessonTitle: "Travel Vocabulary and Past Continuous",
    blocks: [
      { kind: "vocabulary", title: "Travel words", words: [
        { word: "fare", meaning: "money paid for transport" }, { word: "ticket", meaning: "a paper or record showing payment for travel" }, { word: "destination", meaning: "the place someone is going to" }, { word: "journey", meaning: "travel from one place to another" }, { word: "while", meaning: "during the time that" }, { word: "often", meaning: "many times" }
      ] },
      { kind: "definition", term: "travelling", definition: "means moving from one place to another.", simpleCheck: "Moving from Kampala to Jinja by bus is travelling." },
      { kind: "categories", title: "Travel grammar", categories: [
        { name: "Past simple", definition: "used for completed past actions", examples: ["I travelled yesterday.", "She bought a ticket."] },
        { name: "Past continuous", definition: "was/were + verb-ing", examples: ["I was travelling.", "They were waiting."] },
        { name: "While", definition: "connects actions happening at the same time", examples: ["While I was travelling, it rained."] },
        { name: "Adverbs", definition: "words that tell how, when or how often", examples: ["quickly", "slowly", "often"] }
      ] },
      { kind: "diagram", title: "Travel dialogue", imageUrl: "/images/english/p5-travel-dialogue.svg", caption: "Travel vocabulary and dialogue practice.", labels: ["fare", "ticket", "destination", "journey"] },
      { kind: "activity", title: "Travel dialogue", instructions: ["Write a dialogue at a bus park.", "Ask for the fare.", "Say your destination.", "Use while or often in one sentence."], safetyNote: "Travel with trusted adults and follow road safety rules." },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "What is fare?", answer: "Money paid for transport." },
        { type: "written", prompt: "Write one sentence using while." },
        { type: "multiple-choice", prompt: "The place someone is going to is the:", choices: ["destination", "engine", "receipt", "paragraph"], answer: "destination" }
      ] }
    ]
  }
];

const P5_CULTURE_V4: UpperPrimaryLesson[] = [
  {
    id: "p5-v4-culture-language",
    classLevel: "P5",
    term: "Term II",
    curriculumMode: "subject",
    subject: "English",
    topicTitle: "Culture",
    subTopicTitle: "Culture, Language and Respectful Description",
    lessonTitle: "Culture, Language and Respectful Description",
    blocks: [
      { kind: "vocabulary", title: "Culture words", words: [
        { word: "culture", meaning: "the way of life of a group of people" }, { word: "nationality", meaning: "belonging to a country" }, { word: "language", meaning: "words people use to communicate" }, { word: "custom", meaning: "a way people do things" }, { word: "respect", meaning: "treating people well" }, { word: "because", meaning: "used to give a reason" }
      ] },
      { kind: "definition", term: "culture", definition: "is the way of life of a group of people, including language, food, dress, music, dance and customs.", simpleCheck: "Greeting elders politely can be part of culture." },
      { kind: "categories", title: "Writing about culture", categories: [
        { name: "Nationalities", definition: "words naming people from countries", examples: ["Ugandan", "Kenyan", "Tanzanian"] },
        { name: "Languages", definition: "ways people speak", examples: ["Luganda", "Runyankore", "English", "Kiswahili"] },
        { name: "Adjectives and prepositions", definition: "words used to describe and show position/relationship", examples: ["proud of", "known for", "rich in"] },
        { name: "Respectful writing", definition: "writing that does not mock a culture", examples: ["Their dance is beautiful.", "They speak Lusoga."] }
      ] },
      { kind: "diagram", title: "Culture, peace and banking card", imageUrl: "/images/english/p5-culture-peace-banking.svg", caption: "Culture should be described respectfully and clearly.", labels: ["culture", "language", "customs", "respect"] },
      { kind: "activity", title: "Describe a cultural event", instructions: ["Name the event.", "Say where it happened.", "Describe clothes, music, food or language respectfully.", "Use because or as to give a reason."], safetyNote: "Do not insult or belittle any culture or language." },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "What is culture?", answer: "The way of life of a group of people." },
        { type: "written", prompt: "Write two respectful sentences about a cultural event." },
        { type: "multiple-choice", prompt: "Which sentence is respectful?", choices: ["Their dance is beautiful.", "Their customs are stupid.", "Their language is useless.", "They are all bad."], answer: "Their dance is beautiful." }
      ] }
    ]
  }
];

const P5_PEACE_SECURITY_V4: UpperPrimaryLesson[] = [
  {
    id: "p5-v4-peace-security-language",
    classLevel: "P5",
    term: "Term III",
    curriculumMode: "subject",
    subject: "English",
    topicTitle: "Peace and Security",
    subTopicTitle: "Peace, Security and Safety Messages",
    lessonTitle: "Peace, Security and Safety Messages",
    blocks: [
      { kind: "vocabulary", title: "Peace and security words", words: [
        { word: "peace", meaning: "living without fighting or fear" }, { word: "security", meaning: "safety and protection" }, { word: "court", meaning: "a place where legal cases are heard" }, { word: "police", meaning: "people who help keep law and order" }, { word: "danger", meaning: "something that can harm people" }, { word: "message", meaning: "information sent to someone" }
      ] },
      { kind: "definition", term: "safety message", definition: "is a clear message that tells people what danger to avoid and what safe action to take.", simpleCheck: "Do not play near the road. Use the footpath." },
      { kind: "categories", title: "Language structures", categories: [
        { name: "Conjunctions", definition: "words that join ideas", examples: ["and", "because", "so that"] },
        { name: "Past simple", definition: "used for completed actions", examples: ["The police helped the child."] },
        { name: "Present perfect", definition: "has/have + past participle", examples: ["The guard has closed the gate."] },
        { name: "So...that", definition: "shows result", examples: ["The road was so busy that we waited."] }
      ] },
      { kind: "activity", title: "Write a safety message", instructions: ["Choose one danger.", "Tell people what not to do.", "Tell people the safe action.", "Use clear and polite words."], safetyNote: "Do not tell learners to hide danger. Report danger to trusted adults." },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "What is peace?", answer: "Living without fighting or fear." },
        { type: "written", prompt: "Write one safety message about road safety." },
        { type: "multiple-choice", prompt: "A safety message should be:", choices: ["clear", "hidden", "rude", "false"], answer: "clear" }
      ] }
    ]
  }
];

const P5_BANKING_V4: UpperPrimaryLesson[] = [
  {
    id: "p5-v4-banking-language",
    classLevel: "P5",
    term: "Term III",
    curriculumMode: "subject",
    subject: "English",
    topicTitle: "Services: Banking",
    subTopicTitle: "Banking Vocabulary and Dialogue",
    lessonTitle: "Banking Vocabulary and Dialogue",
    blocks: [
      { kind: "vocabulary", title: "Banking words", words: [
        { word: "bank", meaning: "a place where people keep, send or receive money" }, { word: "account", meaning: "a record of money kept in a bank" }, { word: "deposit", meaning: "to put money into an account" }, { word: "withdraw", meaning: "to take money from an account" }, { word: "balance", meaning: "money left in an account" }, { word: "cashier", meaning: "a person who serves customers with money transactions" }
      ] },
      { kind: "definition", term: "banking", definition: "is the service of keeping, saving, sending, receiving or withdrawing money through a bank or financial institution.", simpleCheck: "Putting money into an account is banking." },
      { kind: "categories", title: "Banking language", categories: [
        { name: "Deposit", definition: "putting money into an account", examples: ["I want to deposit UGX 10,000."] },
        { name: "Withdraw", definition: "taking money from an account", examples: ["She withdrew money for school fees."] },
        { name: "Balance", definition: "money left in an account", examples: ["My balance is UGX 25,000."] },
        { name: "Neither...nor", definition: "used to join two negative ideas", examples: ["Neither John nor Mary went to the bank."] },
        { name: "As soon as", definition: "used to show one action follows another", examples: ["As soon as I reached the bank, I joined the queue."] }
      ] },
      { kind: "diagram", title: "Banking language card", imageUrl: "/images/english/p5-culture-peace-banking.svg", caption: "Banking vocabulary and polite service dialogue.", labels: ["bank", "account", "deposit", "withdraw", "balance"] },
      { kind: "activity", title: "Banking dialogue", instructions: ["Act as customer and cashier.", "Ask to deposit or withdraw money politely.", "Use account, balance or receipt in a sentence.", "Say thank you at the end."], safetyNote: "Do not share real account details, PINs or private family money information." },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "What is a bank?", answer: "A place where people keep, send or receive money." },
        { type: "written", prompt: "Write one sentence using deposit." },
        { type: "multiple-choice", prompt: "Money left in an account is called:", choices: ["balance", "engine", "brake", "custom"], answer: "balance" }
      ] }
    ]
  }
];

const P5_ENGLISH_TOPIC_DATA: Topic[] = [
  {
    "id": "p5-vehicle-repair-maintenance",
    "themeId": "p5-english-set-one",
    "themeName": "Primary Five English Language",
    "title": "Vehicle Repair and Maintenance",
    "estMinutes": 36,
    "status": "published",
    "reviewStatus": "beta",
    "upperPrimaryLessons": P5_VEHICLE_REPAIR_V4,
    "useOnlyV4Lessons": true,
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
            },
            "imageUrl": "/images/english/p5-travel-dialogue.svg",
            "imageCaption": "Travel and vehicle communication language."
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
                "must",
                "mustn't",
                "has",
                "were"
              ],
              "correct": 1,
              "explanation": "Driving with flat tyres is dangerous, so use mustn't."
            },
            "imageUrl": "/images/english/p5-travel-dialogue.svg",
            "imageCaption": "Travel and vehicle communication language."
          }
        ]
      },
      {
        "subtopicId": "p5-vehicle-repair-maintenance-practice",
        "title": "3. Writing and speaking practice",
        "modules": [
          {
            "moduleId": "p5-vehicle-repair-maintenance-writing-speaking-module",
            "title": "Writing and speaking practice",
            "bigIdea": "English becomes useful when learners practise real communication, not only definitions.",
            "imageUrl": "/images/english/p5-travel-dialogue.svg",
            "imageCaption": "Travel and vehicle communication language.",
            "learnIt": [
              "Plan before writing about Vehicle Repair and Maintenance.",
              "Use the correct vocabulary and sentence structure from the topic.",
              "Write for a real reader: friend, parent, teacher, customer or community member.",
              "Revise for punctuation, spelling and clear purpose."
            ],
            "workedExample": {
              "question": "Write a short paragraph, message or dialogue using the topic Vehicle Repair and Maintenance.",
              "steps": [
                "Choose the audience and purpose.",
                "Use the topic vocabulary.",
                "Write complete sentences and check punctuation."
              ],
              "answer": "A good answer is clear, purposeful and uses vehicle repair and maintenance language correctly."
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
        "q": "Which part helps a driver see behind?",
        "choices": [
          "engine",
          "seat",
          "boot",
          "mirror"
        ],
        "correct": 3,
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
          "mustn't",
          "must",
          "where",
          "because"
        ],
        "correct": 1,
        "why": "Must shows a strong safety rule."
      },
      {
        "q": "Complete: If the tyre is flat, the driver ___ repair it.",
        "choices": [
          "were",
          "did",
          "will",
          "has"
        ],
        "correct": 2,
        "why": "If can pair with will."
      },
      {
        "q": "Which is a repair tool?",
        "choices": [
          "windscreen",
          "seat belt",
          "head lamp",
          "spanner"
        ],
        "correct": 3,
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
          "fuel price",
          "turning direction",
          "driver's name",
          "number of passengers"
        ],
        "correct": 1,
        "why": "Indicators show turning direction."
      },
      {
        "q": "Why should vehicles be maintained?",
        "choices": [
          "To spoil tyres",
          "To hide mirrors",
          "To reduce accidents",
          "To make roads dirty"
        ],
        "correct": 2,
        "why": "Well-maintained vehicles are safer."
      }
    ]
  },
  {
    "id": "p5-print-media",
    "themeId": "p5-english-set-one",
    "themeName": "Primary Five English Language",
    "title": "Print Media",
    "estMinutes": 36,
    "status": "published",
    "reviewStatus": "beta",
    "upperPrimaryLessons": P5_PRINT_MEDIA_V4,
    "useOnlyV4Lessons": true,
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
                "driver",
                "nurse",
                "farmer",
                "journalist"
              ],
              "correct": 3,
              "explanation": "A journalist writes or reports news."
            },
            "imageUrl": "/images/english/p5-communication-media.svg",
            "imageCaption": "Communication and print media language."
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
            },
            "imageUrl": "/images/english/p5-communication-media.svg",
            "imageCaption": "Communication and print media language."
          }
        ]
      },
      {
        "subtopicId": "p5-print-media-practice",
        "title": "3. Writing and speaking practice",
        "modules": [
          {
            "moduleId": "p5-print-media-writing-speaking-module",
            "title": "Writing and speaking practice",
            "bigIdea": "English becomes useful when learners practise real communication, not only definitions.",
            "imageUrl": "/images/english/p5-communication-media.svg",
            "imageCaption": "Communication and print media language.",
            "learnIt": [
              "Plan before writing about Print Media.",
              "Use the correct vocabulary and sentence structure from the topic.",
              "Write for a real reader: friend, parent, teacher, customer or community member.",
              "Revise for punctuation, spelling and clear purpose."
            ],
            "workedExample": {
              "question": "Write a short paragraph, message or dialogue using the topic Print Media.",
              "steps": [
                "Choose the audience and purpose.",
                "Use the topic vocabulary.",
                "Write complete sentences and check punctuation."
              ],
              "answer": "A good answer is clear, purposeful and uses print media language correctly."
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
        "q": "Which is print media?",
        "choices": [
          "radio only",
          "telephone call",
          "newspaper",
          "rainfall"
        ],
        "correct": 2,
        "why": "Newspapers are print media."
      },
      {
        "q": "Choose correctly: ___ editor checked the story.",
        "choices": [
          "A",
          "Thee",
          "At",
          "An"
        ],
        "correct": 3,
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
          "who",
          "which",
          "where",
          "why"
        ],
        "correct": 1,
        "why": "Article is a thing, so use which."
      },
      {
        "q": "An advertisement is used to:",
        "choices": [
          "hide news",
          "cook food",
          "promote or announce something",
          "repair shoes"
        ],
        "correct": 2,
        "why": "Advertisements promote goods, events or services."
      },
      {
        "q": "Which is part of a newspaper?",
        "choices": [
          "car jack",
          "stethoscope",
          "hoe",
          "front page"
        ],
        "correct": 3,
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
          "a bank account",
          "a drawing or humorous picture",
          "a vehicle engine",
          "a type of rain"
        ],
        "correct": 1,
        "why": "Cartoons are drawings or humorous pictures."
      }
    ]
  },
  {
    "id": "p5-travelling",
    "themeId": "p5-english-set-one",
    "themeName": "Primary Five English Language",
    "title": "Travelling",
    "estMinutes": 36,
    "status": "published",
    "reviewStatus": "beta",
    "upperPrimaryLessons": P5_TRAVELLING_V4,
    "useOnlyV4Lessons": true,
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
                "luggage",
                "speed",
                "fare",
                "seat"
              ],
              "correct": 2,
              "explanation": "Fare is transport money."
            },
            "imageUrl": "/images/english/p5-travel-dialogue.svg",
            "imageCaption": "Travel and vehicle communication language."
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
                "While bus moving baby slept.",
                "While was bus move.",
                "Baby bus while sleep.",
                "While the bus was moving, the baby slept."
              ],
              "correct": 3,
              "explanation": "It uses while and past continuous correctly."
            },
            "imageUrl": "/images/english/p5-travel-dialogue.svg",
            "imageCaption": "Travel and vehicle communication language."
          }
        ]
      },
      {
        "subtopicId": "p5-travelling-practice",
        "title": "3. Writing and speaking practice",
        "modules": [
          {
            "moduleId": "p5-travelling-writing-speaking-module",
            "title": "Writing and speaking practice",
            "bigIdea": "English becomes useful when learners practise real communication, not only definitions.",
            "imageUrl": "/images/english/p5-travel-dialogue.svg",
            "imageCaption": "Travel and vehicle communication language.",
            "learnIt": [
              "Plan before writing about Travelling.",
              "Use the correct vocabulary and sentence structure from the topic.",
              "Write for a real reader: friend, parent, teacher, customer or community member.",
              "Revise for punctuation, spelling and clear purpose."
            ],
            "workedExample": {
              "question": "Write a short paragraph, message or dialogue using the topic Travelling.",
              "steps": [
                "Choose the audience and purpose.",
                "Use the topic vocabulary.",
                "Write complete sentences and check punctuation."
              ],
              "answer": "A good answer is clear, purposeful and uses travelling language correctly."
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
        "q": "Money paid for transport is called:",
        "choices": [
          "luggage",
          "fare",
          "ticket only",
          "destination"
        ],
        "correct": 1,
        "why": "Fare is transport money."
      },
      {
        "q": "The place a traveller is going to is the:",
        "choices": [
          "departure",
          "speed",
          "destination",
          "seat"
        ],
        "correct": 2,
        "why": "Destination is the end point."
      },
      {
        "q": "Complete: While he ___ travelling, he lost his ticket.",
        "choices": [
          "were",
          "is",
          "are",
          "was"
        ],
        "correct": 3,
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
          "newspaper",
          "taxi",
          "paragraph",
          "kettle"
        ],
        "correct": 1,
        "why": "A taxi is used for transport."
      },
      {
        "q": "Complete: I often travel ___ bus.",
        "choices": [
          "on",
          "at",
          "by",
          "of"
        ],
        "correct": 2,
        "why": "We say travel by bus."
      },
      {
        "q": "The opposite of arrive is:",
        "choices": [
          "reach",
          "stop",
          "sit",
          "leave"
        ],
        "correct": 3,
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
    "estMinutes": 36,
    "status": "published",
    "reviewStatus": "beta",
    "upperPrimaryLessons": P5_LETTER_WRITING_V4,
    "useOnlyV4Lessons": true,
    "note": {
      "intro": "P5 beta content: verify against official NCDC Primary Five English before public-final release. Letter Writing helps learners communicate politely through personal letters, invitations and short messages.",
      "learningObjectives": [
        "Identify parts of a friendly letter.",
        "Write addresses, dates, greetings and closings correctly.",
        "Use polite invitation and reply language.",
        "Write a short clear letter for a real purpose."
      ],
      "whatYouNeedToKnow": [
        "A friendly letter has an address, date, greeting, body, closing and name/signature.",
        "The body gives the message in clear paragraphs.",
        "Invitation letters should say the event, date, place and time.",
        "A reply should accept or decline politely."
      ],
      "worked": {
        "problem": "Write a polite opening for a letter inviting a friend to a birthday party.",
        "steps": [
          "Begin with a greeting such as Dear Sarah,",
          "State the reason for writing.",
          "Mention the event clearly."
        ],
        "answer": "Dear Sarah, I am writing to invite you to my birthday party."
      },
      "recap": [
        "Include address and date.",
        "Use a polite greeting and closing.",
        "State the purpose clearly."
      ],
      "commonMistakes": [
        "Forgetting the address or date.",
        "Using rude or unclear invitation language.",
        "Writing one long paragraph without clear message.",
        "Forgetting the closing."
      ],
      "writingTasks": [
        {
          "title": "Write an invitation letter",
          "prompt": "Write a short letter inviting a friend to a school music, dance and drama day.",
          "planningSteps": [
            "Write your address and date.",
            "Greet your friend.",
            "Mention the event, place, date and time.",
            "Close politely."
          ],
          "checklist": [
            "I included address and date.",
            "I gave event details.",
            "I used polite words.",
            "I used a closing and name."
          ],
          "modelOpening": "Dear Maria, I am writing to invite you to our school music, dance and drama day."
        }
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p5-letter-parts",
        "title": "1. Parts of a friendly letter",
        "modules": [
          {
            "moduleId": "p5-letter-parts-module",
            "title": "Address, date, greeting and body",
            "bigIdea": "A good letter is organised so the reader knows who wrote, when and why.",
            "learnIt": [
              "Write the address at the top as taught by your teacher.",
              "Write the date below the address.",
              "Begin with a greeting such as Dear Uncle or Dear Amina.",
              "Use the body to explain the message clearly."
            ],
            "workedExample": {
              "question": "Name three parts of a friendly letter.",
              "steps": [
                "Think of the beginning and ending of a letter.",
                "Choose important parts."
              ],
              "answer": "Address, date and greeting are three parts of a friendly letter."
            },
            "tryThis": {
              "question": "Which belongs in a friendly letter?",
              "choices": [
                "division sign",
                "date",
                "thermometer",
                "vector"
              ],
              "correct": 1,
              "explanation": "A date tells when the letter was written."
            },
            "imageUrl": "/images/english/p5-letter-message.svg",
            "imageCaption": "Letter and message writing plan."
          }
        ]
      },
      {
        "subtopicId": "p5-invitation-reply",
        "title": "2. Invitations and replies",
        "modules": [
          {
            "moduleId": "p5-invitation-reply-module",
            "title": "Writing invitations politely",
            "bigIdea": "An invitation should give enough details for the reader to attend.",
            "learnIt": [
              "Say what the event is.",
              "Give date, time and place.",
              "Use polite words such as please, kindly and thank you.",
              "A reply should clearly accept or decline."
            ],
            "workedExample": {
              "question": "Write one sentence inviting a friend to a debate on Friday.",
              "steps": [
                "Name the event: debate.",
                "Mention the day: Friday.",
                "Use polite wording."
              ],
              "answer": "Please come for our class debate on Friday."
            },
            "tryThis": {
              "question": "Which detail is important in an invitation?",
              "choices": [
                "only shoe size",
                "only weather",
                "time and place",
                "only a joke"
              ],
              "correct": 2,
              "explanation": "The invited person needs time and place."
            },
            "imageUrl": "/images/english/p5-letter-message.svg",
            "imageCaption": "Letter and message writing plan."
          }
        ]
      },
      {
        "subtopicId": "p5-letter-writing-practice",
        "title": "3. Writing and speaking practice",
        "modules": [
          {
            "moduleId": "p5-letter-writing-writing-speaking-module",
            "title": "Writing and speaking practice",
            "bigIdea": "English becomes useful when learners practise real communication, not only definitions.",
            "imageUrl": "/images/english/p5-letter-message.svg",
            "imageCaption": "Letter and message writing plan.",
            "learnIt": [
              "Plan before writing about Letter Writing.",
              "Use the correct vocabulary and sentence structure from the topic.",
              "Write for a real reader: friend, parent, teacher, customer or community member.",
              "Revise for punctuation, spelling and clear purpose."
            ],
            "workedExample": {
              "question": "Write a short paragraph, message or dialogue using the topic Letter Writing.",
              "steps": [
                "Choose the audience and purpose.",
                "Use the topic vocabulary.",
                "Write complete sentences and check punctuation."
              ],
              "answer": "A good answer is clear, purposeful and uses letter writing language correctly."
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
        "q": "A friendly letter should have:",
        "choices": [
          "address and date",
          "a price list only",
          "a map key only",
          "a multiplication table"
        ],
        "correct": 0,
        "why": "Letters need address/date."
      },
      {
        "q": "The body of a letter contains:",
        "choices": [
          "only the stamp",
          "the main message",
          "only the envelope",
          "only the closing"
        ],
        "correct": 1,
        "why": "The body carries the message."
      },
      {
        "q": "Which greeting is polite?",
        "choices": [
          "Hey you!",
          "Move there!",
          "Dear Aunt Mary,",
          "No greeting"
        ],
        "correct": 2,
        "why": "Dear Aunt Mary is polite."
      },
      {
        "q": "An invitation should include:",
        "choices": [
          "only a colour",
          "only an animal",
          "only a proverb",
          "date, time and place"
        ],
        "correct": 3,
        "why": "These details help the reader attend."
      },
      {
        "q": "A polite closing is:",
        "choices": [
          "Your friend,",
          "Go away,",
          "No name",
          "Wrong you"
        ],
        "correct": 0,
        "why": "Your friend is a friendly closing."
      },
      {
        "q": "A reply to an invitation should:",
        "choices": [
          "insult the writer",
          "accept or decline politely",
          "hide the answer",
          "change the event"
        ],
        "correct": 1,
        "why": "Replies should be clear and polite."
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
    "upperPrimaryLessons": P5_COMMUNICATION_V4,
    "useOnlyV4Lessons": true,
    "note": {
      "intro": "P5 beta content: verify against official NCDC Primary Five English before public-final release. Communication helps learners send, receive and respond to messages clearly and politely.",
      "learningObjectives": [
        "Explain communication as sending and receiving messages.",
        "Name means of communication.",
        "Use polite telephone and message language.",
        "Write short clear messages."
      ],
      "whatYouNeedToKnow": [
        "Communication is sharing information between people.",
        "Means of communication include speaking, letters, phones, radio, television, newspapers and notices.",
        "A good message should be clear, brief and polite.",
        "The receiver should listen or read carefully before responding."
      ],
      "worked": {
        "problem": "Write a clear phone message for your mother: Teacher called a meeting tomorrow at 9 a.m.",
        "steps": [
          "Say who called.",
          "State the meeting time.",
          "Keep the message short and clear."
        ],
        "answer": "Teacher called a meeting tomorrow at 9 a.m."
      },
      "recap": [
        "Communication shares messages.",
        "Messages need sender and receiver.",
        "Good messages are clear and polite."
      ],
      "commonMistakes": [
        "Leaving out important time or place details.",
        "Using rude telephone language.",
        "Writing unclear messages.",
        "Not listening before replying."
      ],
      "writingTasks": [
        {
          "title": "Write a phone message",
          "prompt": "Write a short phone message telling your parent about a school meeting.",
          "planningSteps": [
            "Say who sent the message.",
            "Give the day and time.",
            "Give the place.",
            "Keep it short and polite."
          ],
          "checklist": [
            "I included day/time.",
            "I included place.",
            "The message is clear.",
            "The tone is polite."
          ],
          "modelOpening": "Teacher sent a message that parents will meet at school on Friday at 10 a.m."
        }
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p5-means-communication",
        "title": "1. Means of communication",
        "modules": [
          {
            "moduleId": "p5-means-communication-module",
            "title": "Ways people send messages",
            "bigIdea": "Different means of communication fit different situations.",
            "learnIt": [
              "Speaking is useful when people are near each other.",
              "Letters and notices are written means of communication.",
              "Phones, radio and television can send messages quickly to many people."
            ],
            "workedExample": {
              "question": "Name two means of written communication.",
              "steps": [
                "Think of communication that uses writing.",
                "Letters and notices are written."
              ],
              "answer": "Letters and notices are written means of communication."
            },
            "tryThis": {
              "question": "Which is a means of communication?",
              "choices": [
                "molar",
                "swamp",
                "radio",
                "fraction"
              ],
              "correct": 2,
              "explanation": "Radio sends messages to listeners."
            },
            "imageUrl": "/images/english/p5-communication-media.svg",
            "imageCaption": "Communication and print media language."
          }
        ]
      },
      {
        "subtopicId": "p5-clear-messages",
        "title": "2. Clear messages and telephone language",
        "modules": [
          {
            "moduleId": "p5-message-telephone-module",
            "title": "Polite communication",
            "bigIdea": "A clear message helps the receiver understand and act correctly.",
            "learnIt": [
              "Start a phone conversation politely.",
              "State the message clearly.",
              "Include important details such as name, place, date and time.",
              "End politely."
            ],
            "workedExample": {
              "question": "Write a polite phone opening.",
              "steps": [
                "Begin with a greeting.",
                "Identify yourself."
              ],
              "answer": "Good morning, this is Amina speaking."
            },
            "tryThis": {
              "question": "Which message is clearest?",
              "choices": [
                "Come there.",
                "That thing is soon.",
                "You know it.",
                "The meeting is tomorrow at 2 p.m. in P5 class."
              ],
              "correct": 3,
              "explanation": "It gives time and place."
            },
            "imageUrl": "/images/english/p5-communication-media.svg",
            "imageCaption": "Communication and print media language."
          }
        ]
      },
      {
        "subtopicId": "p5-communication-practice",
        "title": "3. Writing and speaking practice",
        "modules": [
          {
            "moduleId": "p5-communication-writing-speaking-module",
            "title": "Writing and speaking practice",
            "bigIdea": "English becomes useful when learners practise real communication, not only definitions.",
            "imageUrl": "/images/english/p5-communication-media.svg",
            "imageCaption": "Communication and print media language.",
            "learnIt": [
              "Plan before writing about Communication.",
              "Use the correct vocabulary and sentence structure from the topic.",
              "Write for a real reader: friend, parent, teacher, customer or community member.",
              "Revise for punctuation, spelling and clear purpose."
            ],
            "workedExample": {
              "question": "Write a short paragraph, message or dialogue using the topic Communication.",
              "steps": [
                "Choose the audience and purpose.",
                "Use the topic vocabulary.",
                "Write complete sentences and check punctuation."
              ],
              "answer": "A good answer is clear, purposeful and uses communication language correctly."
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
        "q": "Communication means:",
        "choices": [
          "digging soil",
          "sharing information",
          "counting teeth",
          "measuring mass"
        ],
        "correct": 1,
        "why": "Communication shares information."
      },
      {
        "q": "A receiver is the person who:",
        "choices": [
          "sells goods",
          "makes rain",
          "gets the message",
          "draws angles"
        ],
        "correct": 2,
        "why": "The receiver gets the message."
      },
      {
        "q": "Which is written communication?",
        "choices": [
          "drum only",
          "handshake only",
          "walking",
          "letter"
        ],
        "correct": 3,
        "why": "A letter is written."
      },
      {
        "q": "A good message should be:",
        "choices": [
          "clear and polite",
          "confusing",
          "rude",
          "empty"
        ],
        "correct": 0,
        "why": "Clear polite messages work best."
      },
      {
        "q": "Which detail is important in a meeting message?",
        "choices": [
          "shoe colour only",
          "time",
          "favourite food only",
          "height only"
        ],
        "correct": 1,
        "why": "Meeting messages need time."
      },
      {
        "q": "A polite telephone opening is:",
        "choices": [
          "You! Listen!",
          "Who are you?",
          "Good morning, this is...",
          "No greeting"
        ],
        "correct": 2,
        "why": "This opening is polite."
      }
    ]
  },
  {
    "id": "p5-culture",
    "themeId": "p5-english-set-one",
    "themeName": "Primary Five English Language",
    "title": "Culture",
    "estMinutes": 36,
    "status": "published",
    "reviewStatus": "beta",
    "upperPrimaryLessons": P5_CULTURE_V4,
    "useOnlyV4Lessons": true,
    "note": {
      "intro": "P5 beta content: verify against official NCDC Primary Five English before public-final release. Culture helps learners describe people’s ways of life respectfully.",
      "learningObjectives": [
        "Explain culture in simple English.",
        "Name examples of culture.",
        "Use respectful vocabulary for cultural practices.",
        "Write a short description of a cultural event or practice."
      ],
      "whatYouNeedToKnow": [
        "Culture is the way of life of a group of people.",
        "Culture includes language, food, dress, music, dance, stories, ceremonies and values.",
        "Good English about culture should be respectful and clear.",
        "Learners should avoid mocking other people’s customs."
      ],
      "worked": {
        "problem": "Write two sentences about a cultural dance.",
        "steps": [
          "Name the dance or event.",
          "Use respectful describing words.",
          "Write complete sentences."
        ],
        "answer": "The dancers wore colourful clothes. They danced to traditional drums."
      },
      "recap": [
        "Culture means way of life.",
        "Describe customs respectfully.",
        "Use clear adjectives and full sentences."
      ],
      "commonMistakes": [
        "Mocking other people’s customs.",
        "Writing culture as if it only means dancing.",
        "Using unclear pronouns without naming the event.",
        "Forgetting capital letters for names of people or places."
      ],
      "writingTasks": [
        {
          "title": "Describe a cultural event",
          "prompt": "Write a short paragraph about a cultural ceremony, dance, food or story you know.",
          "planningSteps": [
            "Name the practice/event.",
            "Describe what people do.",
            "Say why it is important.",
            "Use respectful words."
          ],
          "checklist": [
            "I explained culture respectfully.",
            "I used full sentences.",
            "I avoided insults.",
            "I checked punctuation."
          ],
          "modelOpening": "At the ceremony, people wore traditional clothes and sang songs."
        }
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p5-culture-meaning",
        "title": "1. Meaning and examples of culture",
        "modules": [
          {
            "moduleId": "p5-culture-meaning-module",
            "title": "Culture as a way of life",
            "bigIdea": "Culture is seen in how people speak, dress, eat, celebrate and teach values.",
            "learnIt": [
              "Languages are part of culture.",
              "Traditional foods and dress show culture.",
              "Stories, proverbs, songs and dances pass knowledge to younger people."
            ],
            "workedExample": {
              "question": "Name three examples of culture.",
              "steps": [
                "Think of ways people live.",
                "Choose three examples."
              ],
              "answer": "Language, food and dance are examples of culture."
            },
            "tryThis": {
              "question": "Which is part of culture?",
              "choices": [
                "division only",
                "thermometer",
                "bank note only",
                "traditional food"
              ],
              "correct": 3,
              "explanation": "Food can be part of culture."
            },
            "imageUrl": "/images/english/p5-culture-peace-banking.svg",
            "imageCaption": "Culture, peace, security and banking language."
          }
        ]
      },
      {
        "subtopicId": "p5-respect-culture",
        "title": "2. Respectful cultural description",
        "modules": [
          {
            "moduleId": "p5-culture-respect-module",
            "title": "Writing respectfully about culture",
            "bigIdea": "A respectful description explains without insulting.",
            "learnIt": [
              "Use words such as traditional, colourful, respectful and meaningful.",
              "Avoid words that mock or belittle a group.",
              "Explain what people do and why it is important."
            ],
            "workedExample": {
              "question": "Rewrite politely: Their clothes are funny.",
              "steps": [
                "The sentence mocks people.",
                "Use respectful words."
              ],
              "answer": "Their traditional clothes are colourful."
            },
            "tryThis": {
              "question": "Which sentence is respectful?",
              "choices": [
                "The ceremony was important to the family.",
                "Their customs are stupid.",
                "They dress badly.",
                "I laughed at them."
              ],
              "correct": 0,
              "explanation": "It describes without insulting."
            },
            "imageUrl": "/images/english/p5-culture-peace-banking.svg",
            "imageCaption": "Culture, peace, security and banking language."
          }
        ]
      },
      {
        "subtopicId": "p5-culture-practice",
        "title": "3. Writing and speaking practice",
        "modules": [
          {
            "moduleId": "p5-culture-writing-speaking-module",
            "title": "Writing and speaking practice",
            "bigIdea": "English becomes useful when learners practise real communication, not only definitions.",
            "imageUrl": "/images/english/p5-culture-peace-banking.svg",
            "imageCaption": "Culture, peace, security and banking language.",
            "learnIt": [
              "Plan before writing about Culture.",
              "Use the correct vocabulary and sentence structure from the topic.",
              "Write for a real reader: friend, parent, teacher, customer or community member.",
              "Revise for punctuation, spelling and clear purpose."
            ],
            "workedExample": {
              "question": "Write a short paragraph, message or dialogue using the topic Culture.",
              "steps": [
                "Choose the audience and purpose.",
                "Use the topic vocabulary.",
                "Write complete sentences and check punctuation."
              ],
              "answer": "A good answer is clear, purposeful and uses culture language correctly."
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
        "q": "Culture means:",
        "choices": [
          "weather only",
          "money only",
          "way of life",
          "road only"
        ],
        "correct": 2,
        "why": "Culture is people’s way of life."
      },
      {
        "q": "Which is part of culture?",
        "choices": [
          "litre",
          "magnet",
          "fraction",
          "language"
        ],
        "correct": 3,
        "why": "Language is culture."
      },
      {
        "q": "When writing about culture, use:",
        "choices": [
          "respectful words",
          "insults",
          "mockery",
          "rude jokes"
        ],
        "correct": 0,
        "why": "Respect is important."
      },
      {
        "q": "A traditional dance may use:",
        "choices": [
          "thermometers only",
          "drums",
          "bank cards only",
          "compasses only"
        ],
        "correct": 1,
        "why": "Drums may be used in dances."
      },
      {
        "q": "Which sentence is respectful?",
        "choices": [
          "Their food is nonsense.",
          "I hate their customs.",
          "The food is traditional.",
          "They are backward."
        ],
        "correct": 2,
        "why": "It uses respectful wording."
      },
      {
        "q": "Stories and proverbs can teach:",
        "choices": [
          "only prices",
          "only angles",
          "only rainfall",
          "values"
        ],
        "correct": 3,
        "why": "They pass values and knowledge."
      }
    ]
  },
  {
    "id": "p5-peace-security",
    "themeId": "p5-english-set-one",
    "themeName": "Primary Five English Language",
    "title": "Peace and Security",
    "estMinutes": 36,
    "status": "published",
    "reviewStatus": "beta",
    "upperPrimaryLessons": P5_PEACE_SECURITY_V4,
    "useOnlyV4Lessons": true,
    "note": {
      "intro": "P5 beta content: verify against official NCDC Primary Five English before public-final release. Peace and Security helps learners use English for safety, conflict resolution and community protection.",
      "learningObjectives": [
        "Use vocabulary of peace and security.",
        "Describe causes of conflict and unsafe situations.",
        "Give advice for keeping peace.",
        "Write a short safety message or report."
      ],
      "whatYouNeedToKnow": [
        "Peace means living without violence, fear or serious quarrels.",
        "Security means protection of people and property.",
        "Conflict can be reduced through dialogue, fairness, forgiveness and respect.",
        "Safety messages should be clear and practical."
      ],
      "worked": {
        "problem": "Write one sentence advising learners not to fight.",
        "steps": [
          "Use should or must not.",
          "Name the action: fighting.",
          "Give a peaceful alternative."
        ],
        "answer": "Learners must not fight; they should report problems to a teacher."
      },
      "recap": [
        "Peace needs respect and dialogue.",
        "Security protects people and property.",
        "Safety messages should be clear."
      ],
      "commonMistakes": [
        "Using violent language in a peace message.",
        "Giving advice without saying what to do instead.",
        "Confusing peace with silence only.",
        "Forgetting to mention adults/security when danger is serious."
      ],
      "writingTasks": [
        {
          "title": "Write a safety message",
          "prompt": "Write four sentences advising learners how to keep peace and security at school.",
          "planningSteps": [
            "Name one danger or conflict.",
            "Give peaceful advice.",
            "Mention reporting serious problems.",
            "End with a positive message."
          ],
          "checklist": [
            "I used peace/security words.",
            "My advice is safe.",
            "I used should or must not.",
            "My sentences are clear."
          ],
          "modelOpening": "Learners should solve small disagreements by talking politely."
        }
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p5-peace-words",
        "title": "1. Peace and security vocabulary",
        "modules": [
          {
            "moduleId": "p5-peace-vocabulary-module",
            "title": "Words for safe living",
            "bigIdea": "Peace and security vocabulary helps learners talk about problems and solutions.",
            "learnIt": [
              "Useful words include peace, security, danger, conflict, forgive, report, protect and reconcile.",
              "Dialogue means talking to solve a problem.",
              "A security officer helps protect people and property."
            ],
            "workedExample": {
              "question": "Use conflict in a sentence.",
              "steps": [
                "Think of a disagreement.",
                "Write a sentence showing a quarrel or disagreement."
              ],
              "answer": "The teacher helped the learners solve their conflict."
            },
            "tryThis": {
              "question": "Security means:",
              "choices": [
                "protection",
                "dancing",
                "buying",
                "digging"
              ],
              "correct": 0,
              "explanation": "Security is protection."
            },
            "imageUrl": "/images/english/p5-culture-peace-banking.svg",
            "imageCaption": "Culture, peace, security and banking language."
          }
        ]
      },
      {
        "subtopicId": "p5-safety-message",
        "title": "2. Writing safety messages",
        "modules": [
          {
            "moduleId": "p5-safety-message-module",
            "title": "Clear safety communication",
            "bigIdea": "A safety message should tell people what danger to avoid and what safe action to take.",
            "learnIt": [
              "Use must not for dangerous actions.",
              "Use should for good advice.",
              "Report serious danger to a trusted adult or authority."
            ],
            "workedExample": {
              "question": "Write a safety message about strangers near school.",
              "steps": [
                "Mention the danger.",
                "Give a safe action.",
                "Use clear language."
              ],
              "answer": "Do not follow strangers; report them to a teacher or parent."
            },
            "tryThis": {
              "question": "Which is a good safety message?",
              "choices": [
                "Hide all danger.",
                "Report broken glass to a teacher.",
                "Fight everyone.",
                "Run into traffic."
              ],
              "correct": 1,
              "explanation": "It gives a safe action."
            },
            "imageUrl": "/images/english/p5-culture-peace-banking.svg",
            "imageCaption": "Culture, peace, security and banking language."
          }
        ]
      },
      {
        "subtopicId": "p5-peace-security-practice",
        "title": "3. Writing and speaking practice",
        "modules": [
          {
            "moduleId": "p5-peace-security-writing-speaking-module",
            "title": "Writing and speaking practice",
            "bigIdea": "English becomes useful when learners practise real communication, not only definitions.",
            "imageUrl": "/images/english/p5-culture-peace-banking.svg",
            "imageCaption": "Culture, peace, security and banking language.",
            "learnIt": [
              "Plan before writing about Peace and Security.",
              "Use the correct vocabulary and sentence structure from the topic.",
              "Write for a real reader: friend, parent, teacher, customer or community member.",
              "Revise for punctuation, spelling and clear purpose."
            ],
            "workedExample": {
              "question": "Write a short paragraph, message or dialogue using the topic Peace and Security.",
              "steps": [
                "Choose the audience and purpose.",
                "Use the topic vocabulary.",
                "Write complete sentences and check punctuation."
              ],
              "answer": "A good answer is clear, purposeful and uses peace and security language correctly."
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
        "q": "Peace means:",
        "choices": [
          "fighting",
          "stealing",
          "fear only",
          "living without violence"
        ],
        "correct": 3,
        "why": "Peace is safety and harmony."
      },
      {
        "q": "Security means:",
        "choices": [
          "protection",
          "a song",
          "a food",
          "a hill"
        ],
        "correct": 0,
        "why": "Security is protection."
      },
      {
        "q": "Dialogue means:",
        "choices": [
          "fighting",
          "talking to solve a problem",
          "hiding",
          "stealing"
        ],
        "correct": 1,
        "why": "Dialogue solves problems peacefully."
      },
      {
        "q": "Learners should report danger to:",
        "choices": [
          "a stranger only",
          "no one",
          "a trusted adult",
          "a rumour"
        ],
        "correct": 2,
        "why": "Trusted adults can help."
      },
      {
        "q": "Which word fits peace?",
        "choices": [
          "revenge",
          "violence",
          "insult",
          "forgiveness"
        ],
        "correct": 3,
        "why": "Forgiveness supports peace."
      },
      {
        "q": "A safety message should be:",
        "choices": [
          "clear and practical",
          "confusing",
          "rude",
          "empty"
        ],
        "correct": 0,
        "why": "Clear safety messages help people."
      }
    ]
  },
  {
    "id": "p5-services-banking",
    "themeId": "p5-english-set-one",
    "themeName": "Primary Five English Language",
    "title": "Services: Banking",
    "estMinutes": 36,
    "status": "published",
    "reviewStatus": "beta",
    "upperPrimaryLessons": P5_BANKING_V4,
    "useOnlyV4Lessons": true,
    "note": {
      "intro": "P5 beta content: verify against official NCDC Primary Five English before public-final release. Services: Banking helps learners use English for saving, depositing, withdrawing and asking for help at a bank.",
      "learningObjectives": [
        "Use basic banking vocabulary.",
        "Explain services offered by a bank.",
        "Use polite language at a bank counter.",
        "Write a short banking dialogue or form-like message."
      ],
      "whatYouNeedToKnow": [
        "A bank is a place where people keep and manage money.",
        "Banking services include saving, depositing, withdrawing, lending and keeping money safe.",
        "A customer should speak politely and give clear information.",
        "Important words include account, deposit, withdraw, balance, teller, loan and savings."
      ],
      "worked": {
        "problem": "Write a polite request to withdraw money at a bank.",
        "steps": [
          "Start politely.",
          "State the service needed.",
          "Mention the amount if needed."
        ],
        "answer": "Good morning. I would like to withdraw fifty thousand shillings, please."
      },
      "recap": [
        "Deposit means put money in.",
        "Withdraw means take money out.",
        "Use polite clear banking language."
      ],
      "commonMistakes": [
        "Using rude commands at the bank.",
        "Confusing deposit and withdraw.",
        "Writing amounts unclearly.",
        "Sharing secret account information carelessly."
      ],
      "writingTasks": [
        {
          "title": "Write a banking dialogue",
          "prompt": "Write a short dialogue between a bank teller and a customer who wants to deposit money.",
          "planningSteps": [
            "Start with greetings.",
            "Let the customer state the service.",
            "Let the teller respond politely.",
            "End with thanks."
          ],
          "checklist": [
            "I used deposit/withdraw correctly.",
            "The dialogue is polite.",
            "The amount is clear.",
            "Each speaker is labelled."
          ],
          "modelOpening": "Teller: Good morning. How may I help you?"
        }
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p5-banking-words",
        "title": "1. Banking vocabulary",
        "modules": [
          {
            "moduleId": "p5-banking-vocabulary-module",
            "title": "Words used in a bank",
            "bigIdea": "Banking vocabulary helps learners understand financial services.",
            "learnIt": [
              "Deposit means putting money into an account.",
              "Withdraw means taking money out of an account.",
              "Balance means the amount of money left in an account.",
              "A teller serves customers at a bank counter."
            ],
            "workedExample": {
              "question": "What is the difference between deposit and withdraw?",
              "steps": [
                "Deposit means put money in.",
                "Withdraw means take money out."
              ],
              "answer": "Deposit is putting money into an account; withdraw is taking money out."
            },
            "tryThis": {
              "question": "A person served at a bank is a:",
              "choices": [
                "patient",
                "customer",
                "pilot",
                "referee"
              ],
              "correct": 1,
              "explanation": "Bank clients are customers."
            },
            "imageUrl": "/images/english/p5-culture-peace-banking.svg",
            "imageCaption": "Culture, peace, security and banking language."
          }
        ]
      },
      {
        "subtopicId": "p5-bank-dialogue",
        "title": "2. Polite banking dialogue",
        "modules": [
          {
            "moduleId": "p5-bank-dialogue-module",
            "title": "Speaking politely at a bank",
            "bigIdea": "Polite banking language is clear, respectful and accurate.",
            "learnIt": [
              "Use greetings such as Good morning.",
              "Say the service you need clearly.",
              "Say thank you after being helped.",
              "Do not share secret information with strangers."
            ],
            "workedExample": {
              "question": "Write a teller question asking a customer what they need.",
              "steps": [
                "Use polite question language.",
                "Mention service."
              ],
              "answer": "Good morning. How may I help you?"
            },
            "tryThis": {
              "question": "Which sentence is polite at a bank?",
              "choices": [
                "Give me now!",
                "You there!",
                "I would like to deposit money, please.",
                "Money!"
              ],
              "correct": 2,
              "explanation": "It uses polite request language."
            },
            "imageUrl": "/images/english/p5-culture-peace-banking.svg",
            "imageCaption": "Culture, peace, security and banking language."
          }
        ]
      },
      {
        "subtopicId": "p5-services-banking-practice",
        "title": "3. Writing and speaking practice",
        "modules": [
          {
            "moduleId": "p5-services-banking-writing-speaking-module",
            "title": "Writing and speaking practice",
            "bigIdea": "English becomes useful when learners practise real communication, not only definitions.",
            "imageUrl": "/images/english/p5-culture-peace-banking.svg",
            "imageCaption": "Culture, peace, security and banking language.",
            "learnIt": [
              "Plan before writing about Services: Banking.",
              "Use the correct vocabulary and sentence structure from the topic.",
              "Write for a real reader: friend, parent, teacher, customer or community member.",
              "Revise for punctuation, spelling and clear purpose."
            ],
            "workedExample": {
              "question": "Write a short paragraph, message or dialogue using the topic Services: Banking.",
              "steps": [
                "Choose the audience and purpose.",
                "Use the topic vocabulary.",
                "Write complete sentences and check punctuation."
              ],
              "answer": "A good answer is clear, purposeful and uses services: banking language correctly."
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
        "q": "A bank helps people to:",
        "choices": [
          "keep and manage money",
          "grow teeth",
          "make rainfall",
          "draw maps only"
        ],
        "correct": 0,
        "why": "Banks manage money."
      },
      {
        "q": "Deposit means:",
        "choices": [
          "take money out",
          "put money in",
          "tear a letter",
          "measure time"
        ],
        "correct": 1,
        "why": "Deposit puts money in."
      },
      {
        "q": "Withdraw means:",
        "choices": [
          "put money in",
          "sing",
          "take money out",
          "vote"
        ],
        "correct": 2,
        "why": "Withdraw takes money out."
      },
      {
        "q": "A teller works at:",
        "choices": [
          "a swamp",
          "a poultry house",
          "a football pitch",
          "a bank counter"
        ],
        "correct": 3,
        "why": "Tellers serve bank customers."
      },
      {
        "q": "A polite banking request is:",
        "choices": [
          "I would like to save money, please.",
          "Give money now!",
          "You! Money!",
          "No greeting"
        ],
        "correct": 0,
        "why": "It is polite and clear."
      },
      {
        "q": "Balance means:",
        "choices": [
          "a type of dance",
          "money left in an account",
          "a vehicle part",
          "a crop pest"
        ],
        "correct": 1,
        "why": "Balance is account amount left."
      }
    ]
  }
];

const P5_ENGLISH_TERMS = {
  "p5-vehicle-repair-maintenance": "Term I" as const,
  "p5-print-media": "Term I" as const,
  "p5-travelling": "Term I" as const,
  "p5-letter-writing": "Term II" as const,
  "p5-communication": "Term II" as const,
  "p5-culture": "Term II" as const,
  "p5-peace-security": "Term III" as const,
  "p5-services-banking": "Term III" as const
};

export const P5_ENGLISH_TOPICS: Topic[] = balanceTopicAnswers(addUpperPrimaryEnglishV4(P5_ENGLISH_TOPIC_DATA, "P5", P5_ENGLISH_TERMS));

export function getP5EnglishTopic(id: string): Topic | undefined {
  return P5_ENGLISH_TOPICS.find((topic) => topic.id === id);
}
