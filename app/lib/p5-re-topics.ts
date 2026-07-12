import type { Topic } from "@/lib/topics";
import { addUpperPrimaryReV4 } from "@/lib/v4-re-helpers";

// P5 Religious Education beta content layer.
// Source map: content/curriculum/p5-re.json.
// Rule: NCDC first, build second. This follows the researched P5 Set One CRE/IRE structure.

type Seed = {
  id: string;
  option: "CRE" | "IRE";
  title: string;
  theme: string;
  minutes: number;
  intro: string;
  objectives: string[];
  know: string[];
  worked: { problem: string; steps: string[]; answer: string };
  modules: Array<{
    id: string;
    title: string;
    bigIdea: string;
    learn: string[];
    question: string;
    steps: string[];
    answer: string;
    tryQ: string;
    choices: string[];
    explanation: string;
  }>;
  quiz: Array<{ q: string; choices: string[]; why: string }>;
};

function makeTopic(seed: Seed): Topic {
  const meaningModules = seed.modules.slice(0, 1).map((m) => moduleToContent(m, seed));
  const applicationModules = seed.modules.slice(1).map((m) => moduleToContent(m, seed));

  return {
    id: seed.id,
    themeId: seed.option === "CRE" ? "p5-cre" : "p5-ire",
    themeName: seed.theme,
    title: seed.title,
    estMinutes: Math.max(seed.minutes, 32),
    status: "published",
    reviewStatus: "beta",
    note: {
      intro: `P5 beta content: verify against official NCDC Primary Five Religious Education before public-final release. ${seed.intro}`,
      learningObjectives: seed.objectives,
      whatYouNeedToKnow: seed.know,
      worked: seed.worked,
      recap: seed.know.slice(0, 3),
    },
    subtopics: [
      {
        subtopicId: `${seed.id}-meaning`,
        title: "1. Meaning and key teaching",
        modules: meaningModules,
      },
      {
        subtopicId: `${seed.id}-application`,
        title: "2. Daily-life application",
        modules: applicationModules,
      },
      {
        subtopicId: `${seed.id}-reasoning`,
        title: "3. Reasoning and exam practice",
        modules: [reasoningModule(seed)],
      },
    ],
    quiz: seed.quiz.map((item) => ({ ...item, correct: 0 })),
  };
}

function imageForSeed(seed: Seed): { imageUrl: string; imageCaption: string } {
  if (seed.option === "CRE") {
    if (/church|witness/i.test(seed.title)) {
      return { imageUrl: "/images/re/p5-cre-church-community.svg", imageCaption: "Christian community, worship, witness and service." };
    }
    if (/discipleship|relationship|hope|spirit/i.test(seed.title)) {
      return { imageUrl: "/images/re/p5-cre-discipleship-hope.svg", imageCaption: "Discipleship, relationship with God and hope." };
    }
    return { imageUrl: "/images/re/p5-cre-faith-values.svg", imageCaption: "Faith and Christian values in daily life." };
  }

  if (/surat|surah|kauthar|zilzala/i.test(seed.title)) {
    return { imageUrl: "/images/re/p5-ire-surahs-quran.svg", imageCaption: "Surah recitation, meaning and daily lessons." };
  }
  if (/fasting|tarawiih|idd|madina|last days/i.test(seed.title)) {
    return { imageUrl: "/images/re/p5-ire-worship-prayer.svg", imageCaption: "Islamic worship, prayer and disciplined conduct." };
  }
  return { imageUrl: "/images/re/p5-ire-akhlaq-values.svg", imageCaption: "Islamic values, accountability and good conduct." };
}

function moduleToContent(m: Seed["modules"][number], seed: Seed) {
  const image = imageForSeed(seed);
  return {
    moduleId: m.id,
    title: m.title,
    bigIdea: m.bigIdea,
    imageUrl: image.imageUrl,
    imageCaption: image.imageCaption,
    learnIt: m.learn,
    workedExample: { question: m.question, steps: m.steps, answer: m.answer },
    tryThis: { question: m.tryQ, choices: m.choices, correct: 0, explanation: m.explanation },
  };
}

function reasoningModule(seed: Seed) {
  const image = imageForSeed(seed);
  const faithWord = seed.option === "CRE" ? "Christian" : "Muslim";
  const sourceWord = seed.option === "CRE" ? "Bible teaching and Christian values" : "Qur'an/Hadith teaching and Islamic values";
  const respectfulReminder = seed.option === "CRE"
    ? "Use respectful language about God, Jesus, the Church and other people."
    : "Use respectful language about Allah, the Qur'an, prayer and Prophet Muhammad (PBUH).";

  return {
    moduleId: `${seed.id}-reasoning-module`,
    title: "Reasoning and exam-style application",
    bigIdea: `${seed.title} should help a learner explain a belief and then apply it in a real-life situation.`,
    imageUrl: image.imageUrl,
    imageCaption: image.imageCaption,
    learnIt: [
      `A strong ${faithWord} Religious Education answer does not stop at naming a term; it explains the value behind it.`,
      `Connect the answer to ${sourceWord}, then show how a learner can practise it at home, school or in the community.`,
      respectfulReminder,
      "Use full sentences: name the teaching, explain it, and give a practical example.",
    ],
    workedExample: {
      question: `Write a two-sentence answer showing how ${seed.title} can guide a P5 learner at school.`,
      steps: [
        "Start by naming the main teaching from the topic.",
        "Add one school action that shows the teaching in practice.",
        "Keep the tone respectful and specific.",
      ],
      answer: `${seed.know[0]} At school, a learner can show this by choosing honest, respectful and helpful behaviour.`,
    },
    tryThis: {
      question: `Which answer best applies ${seed.title} in daily life?`,
      choices: [
        "Use the teaching to act honestly and respectfully.",
        "Ignore the teaching after the lesson.",
        "Mock people who believe differently.",
        "Use the topic only to memorise words without changing behaviour.",
      ],
      correct: 0,
      explanation: "Religious Education should guide respectful conduct, not just memorisation.",
    },
  };
}

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

const CRE_SEEDS: Seed[] = [
  {
    id: "p5-cre-faith",
    option: "CRE",
    theme: "Christian Religious Education",
    title: "Faith",
    minutes: 25,
    intro: "Faith helps learners understand trust in God and how belief is shown through choices and actions.",
    objectives: ["Explain the meaning of faith.", "Give examples of people who showed faith.", "Apply faith in daily life."],
    know: ["Faith means trusting and believing in God.", "Faith is shown through obedience, prayer, courage and doing what is right.", "Christians learn faith from Bible examples and from daily life."],
    worked: { problem: "How can a learner show faith in God during a difficult time?", steps: ["The learner can pray and trust God.", "The learner can continue doing what is right.", "The learner can seek guidance from trusted adults."], answer: "A learner can show faith by praying, trusting God and doing what is right." },
    modules: [
      { id: "meaning-faith", title: "Meaning of Faith", bigIdea: "Faith is trust in God that affects how a believer lives.", learn: ["Faith is more than saying 'I believe'.", "It includes trust, obedience and confidence in God.", "A person with faith tries to do what is right even when it is difficult."], question: "What is faith?", steps: ["Faith involves trust.", "For Christians, the trust is in God."], answer: "Faith is trust and belief in God.", tryQ: "Faith means:", choices: ["trusting God", "hating others", "stealing", "refusing prayer"], explanation: "Faith means trusting and believing in God." },
      { id: "faith-daily-life", title: "Faith in Daily Life", bigIdea: "Faith is seen in actions such as honesty, prayer and courage.", learn: ["A learner can show faith by praying before making decisions.", "Faith can help a learner refuse cheating or stealing.", "Faith also includes hope during sickness, loss or fear."], question: "Give one school action that shows faith.", steps: ["Think of a situation at school.", "Choose a good action connected to trust in God."], answer: "A learner can refuse to cheat in exams because they trust God and value honesty.", tryQ: "Which action shows faith?", choices: ["Praying and doing what is right", "Cheating", "Bullying", "Stealing"], explanation: "Faith should lead to good actions." },
    ],
    quiz: [
      { q: "Faith means:", choices: ["trusting God", "stealing", "hating", "sleeping only"], why: "Faith is trust and belief in God." },
      { q: "Which action can show faith?", choices: ["Praying and doing right", "Cheating", "Fighting", "Destroying property"], why: "Faith should guide good action." },
      { q: "A learner with faith should:", choices: ["remain honest", "tell lies", "steal", "mock others"], why: "Faith should support honesty." },
      { q: "Faith can help a person during:", choices: ["difficult times", "only games", "only meals", "only sleep"], why: "Faith gives courage and trust during difficulty." },
      { q: "Christians learn faith from:", choices: ["Bible examples", "bad habits", "only noise", "laziness"], why: "The Bible contains examples of faith." },
      { q: "Which value goes with faith?", choices: ["obedience", "cruelty", "dishonesty", "greed"], why: "Faith can lead to obedience to God." },
    ],
  },
  {
    id: "p5-cre-christianity-islam",
    option: "CRE",
    theme: "Christian Religious Education",
    title: "Christianity and Islam",
    minutes: 26,
    intro: "Learners compare Christianity and Islam respectfully and learn to live peacefully with people of different faiths.",
    objectives: ["Name key beliefs/practices in Christianity and Islam.", "Identify similarities and differences respectfully.", "Explain why respect between religions is important."],
    know: ["Christians worship God and follow Jesus Christ.", "Muslims worship Allah and follow the teachings of Prophet Muhammad (PBUH).", "Both religions teach prayer, respect, charity and good conduct."],
    worked: { problem: "Give one similarity between Christianity and Islam.", steps: ["Think of what both faiths teach.", "Both teach prayer and respect for God.", "Write respectfully."], answer: "Both Christianity and Islam teach prayer and respect for God." },
    modules: [
      { id: "christianity-islam-basics", title: "Basic Similarities and Differences", bigIdea: "A respectful answer names facts without insulting either religion.", learn: ["Christians worship in churches and Muslims worship in mosques.", "Christians read the Bible and Muslims read the Qur'an.", "Both faiths encourage prayer, honesty, respect and charity."], question: "Name a holy book used in Christianity and one used in Islam.", steps: ["Christianity uses the Bible.", "Islam uses the Qur'an."], answer: "Christians use the Bible and Muslims use the Qur'an.", tryQ: "Muslims worship in a:", choices: ["mosque", "church only", "court", "market"], explanation: "A mosque is a Muslim place of worship." },
      { id: "respecting-faiths", title: "Respecting Other People's Faith", bigIdea: "Religious education should build respect and peaceful living.", learn: ["Learners should not mock another person's religion.", "Respect includes listening, using polite language and cooperating with others.", "People of different faiths can live, study and work together peacefully."], question: "Why should learners respect people of other religions?", steps: ["Respect promotes peace.", "People may believe differently and still live together."], answer: "Learners should respect others to promote peace and unity.", tryQ: "Which action shows respect for another faith?", choices: ["Using polite language", "Mocking worship", "Destroying holy books", "Fighting"], explanation: "Polite language shows respect." },
    ],
    quiz: [
      { q: "Christians read the:", choices: ["Bible", "Qur'an only", "Atlas only", "newspaper only"], why: "The Bible is the Christian holy book." },
      { q: "Muslims read the:", choices: ["Qur'an", "Bible only", "dictionary only", "map only"], why: "The Qur'an is the Muslim holy book." },
      { q: "Christians worship in a:", choices: ["church", "mosque only", "bank", "stadium only"], why: "A church is a Christian place of worship." },
      { q: "Muslims worship in a:", choices: ["mosque", "church only", "garage", "clinic"], why: "A mosque is a Muslim place of worship." },
      { q: "Both Christianity and Islam teach:", choices: ["prayer and good conduct", "stealing", "hatred", "violence"], why: "Both faiths encourage prayer and good behaviour." },
      { q: "A respectful learner should:", choices: ["avoid mocking other religions", "insult others", "destroy worship places", "laugh at prayer"], why: "Respect supports peace." },
    ],
  },
  {
    id: "p5-cre-gods-word-for-us",
    option: "CRE",
    theme: "Christian Religious Education",
    title: "God's Word for Us",
    minutes: 25,
    intro: "Learners understand the Bible as God's word and practise listening to and obeying it.",
    objectives: ["Explain the Bible as God's word.", "State why Christians read the Bible.", "Apply Bible teaching in daily life."],
    know: ["Christians believe the Bible is God's word.", "The Bible guides Christians in worship and daily life.", "Obeying God's word means practising love, honesty, forgiveness and service."],
    worked: { problem: "How can a learner obey God's word at school?", steps: ["Think of a teaching such as love or honesty.", "Apply it to school life."], answer: "A learner can obey God's word by telling the truth and helping others." },
    modules: [
      { id: "bible-gods-word", title: "The Bible as God's Word", bigIdea: "The Bible guides Christians in knowing and obeying God.", learn: ["The Bible contains stories, teachings, commandments and guidance.", "Christians read the Bible during worship and personal prayer.", "The Bible teaches people to love God and neighbours."], question: "Why do Christians read the Bible?", steps: ["The Bible contains God's word.", "It guides worship and behaviour."], answer: "Christians read the Bible for guidance and to know God's word.", tryQ: "Christians believe God's word is found in the:", choices: ["Bible", "calculator", "road sign", "bank book"], explanation: "Christians use the Bible as God's word." },
      { id: "obeying-word", title: "Obeying God's Word", bigIdea: "God's word becomes meaningful when believers put it into practice.", learn: ["Reading scripture should lead to good action.", "Learners can practise kindness, honesty and forgiveness.", "Obedience may require courage when others choose wrong actions."], question: "Give one way of obeying God's word at home.", steps: ["Choose a value from Bible teaching.", "Apply it at home."], answer: "A learner can obey God's word by respecting parents and helping at home.", tryQ: "Which action shows obedience to God's word?", choices: ["Telling the truth", "Stealing", "Insulting", "Cheating"], explanation: "Truthfulness is a good action." },
    ],
    quiz: [
      { q: "Christians believe God's word is found in the:", choices: ["Bible", "newspaper only", "dictionary only", "phone battery"], why: "The Bible is the Christian holy book." },
      { q: "God's word guides Christians in:", choices: ["daily life", "stealing", "fighting", "cheating"], why: "It guides worship and behaviour." },
      { q: "Which action obeys God's word?", choices: ["Helping others", "Lying", "Bullying", "Stealing"], why: "Helping others shows love." },
      { q: "The Bible teaches love for:", choices: ["God and neighbours", "only money", "only games", "bad habits"], why: "The Bible teaches love for God and people." },
      { q: "A learner can obey God's word by:", choices: ["respecting parents", "insulting them", "hiding books", "fighting daily"], why: "Respect is a good value." },
      { q: "Bible teachings should lead to:", choices: ["good actions", "bad behaviour", "laziness", "hatred"], why: "Scripture should guide good living." },
    ],
  },
  {
    id: "p5-cre-gods-word-jesus",
    option: "CRE",
    theme: "Christian Religious Education",
    title: "God's Word for Us: Jesus",
    minutes: 25,
    intro: "Learners study Jesus' teachings and works as God's message of love, compassion and salvation.",
    objectives: ["Describe Jesus' teachings and miracles.", "Explain lessons from Jesus' life.", "Apply compassion, prayer and forgiveness."],
    know: ["Christians believe Jesus reveals God's love.", "Jesus taught through parables, actions and example.", "Jesus' miracles showed compassion and power."],
    worked: { problem: "What lesson do Christians learn from Jesus healing the sick?", steps: ["Jesus cared for suffering people.", "Christians should also care for those in need."], answer: "Christians learn to show compassion and care for the sick." },
    modules: [
      { id: "jesus-teachings", title: "Teachings of Jesus", bigIdea: "Jesus taught people how to love God and live well with others.", learn: ["Jesus taught love, forgiveness, prayer and service.", "Parables were stories used to teach lessons.", "Christians try to follow Jesus' example."], question: "Why did Jesus use parables?", steps: ["Parables are stories.", "They teach moral and spiritual lessons."], answer: "Jesus used parables to teach lessons." , tryQ: "A parable is:", choices: ["a story with a lesson", "a tax", "a mountain", "a road"], explanation: "Parables are teaching stories." },
      { id: "miracles-compassion", title: "Miracles and Compassion", bigIdea: "Jesus' miracles show care for people's needs.", learn: ["Healing miracles show compassion for the sick.", "Feeding miracles show concern for hungry people.", "Christians learn to help those who suffer."], question: "How can a learner show compassion?", steps: ["Think of someone in need.", "Choose a caring action."], answer: "A learner can help a sick or lonely classmate.", tryQ: "Which action shows compassion?", choices: ["Helping a sick person", "Laughing at the sick", "Stealing", "Ignoring suffering"], explanation: "Helping the sick shows compassion." },
    ],
    quiz: [
      { q: "Jesus used parables to:", choices: ["teach lessons", "collect taxes", "build roads", "measure land"], why: "Parables teach lessons." },
      { q: "A miracle of healing teaches:", choices: ["compassion", "cruelty", "greed", "hatred"], why: "Healing shows care for the sick." },
      { q: "Christians learn from Jesus to:", choices: ["forgive", "steal", "hate", "cheat"], why: "Jesus taught forgiveness." },
      { q: "Which action follows Jesus' example?", choices: ["helping the needy", "mocking others", "refusing prayer", "lying"], why: "Helping others follows Jesus' compassion." },
      { q: "A parable is usually:", choices: ["a story", "a stone", "a uniform", "a tax receipt"], why: "Parables are stories." },
      { q: "Jesus' works showed God's:", choices: ["love", "hatred", "greed", "laziness"], why: "Christians believe Jesus showed God's love." },
    ],
  },
  {
    id: "p5-cre-new-people-spirit",
    option: "CRE",
    theme: "Christian Religious Education",
    title: "We are the New People of God in the Spirit",
    minutes: 25,
    intro: "Learners study the Holy Spirit and the new life Christians are called to live.",
    objectives: ["Explain the Holy Spirit in Christian life.", "Name fruits or gifts of the Spirit.", "Describe Christian behaviour guided by the Spirit."],
    know: ["Christians believe the Holy Spirit helps and guides believers.", "Fruits of the Spirit include love, joy, peace, patience and kindness.", "A new life in the Spirit should show good behaviour."],
    worked: { problem: "Give two fruits of the Holy Spirit.", steps: ["Fruits are good character qualities.", "Examples include love and peace."], answer: "Love and peace are fruits of the Holy Spirit." },
    modules: [
      { id: "holy-spirit", title: "Holy Spirit and New Life", bigIdea: "The Holy Spirit helps Christians live as God's people.", learn: ["Christians believe the Holy Spirit gives guidance and strength.", "The Spirit helps believers choose good actions.", "New life should be seen in changed behaviour."], question: "How can the Holy Spirit help a Christian learner?", steps: ["The Spirit guides believers.", "A learner may be helped to choose honesty and kindness."], answer: "The Holy Spirit helps a learner choose good behaviour." , tryQ: "Which is a fruit of the Spirit?", choices: ["Kindness", "Stealing", "Anger only", "Cheating"], explanation: "Kindness is a good character quality." },
      { id: "fruits-spirit", title: "Fruits of the Spirit", bigIdea: "The fruits of the Spirit are good qualities shown in daily life.", learn: ["Love means caring for others.", "Peace means living calmly and avoiding unnecessary conflict.", "Patience means waiting or enduring without anger."], question: "Show one way a learner can practise patience.", steps: ["Think of a school situation.", "Waiting for a turn without quarrelling shows patience."], answer: "A learner can wait for a turn without quarrelling." , tryQ: "Which action shows peace?", choices: ["Solving conflict calmly", "Starting fights", "Insulting classmates", "Breaking desks"], explanation: "Peace is shown by calm conflict resolution." },
    ],
    quiz: [
      { q: "A fruit of the Spirit is:", choices: ["love", "stealing", "hatred", "cheating"], why: "Love is a fruit of the Spirit." },
      { q: "Patience means:", choices: ["waiting calmly", "fighting", "lying", "stealing"], why: "Patience is calm endurance." },
      { q: "The Holy Spirit helps Christians to:", choices: ["live good lives", "do evil", "hate others", "cheat"], why: "Christians believe the Spirit guides good living." },
      { q: "Which action shows kindness?", choices: ["helping a friend", "mocking a friend", "hiding food", "breaking books"], why: "Helping is kind." },
      { q: "New life in the Spirit should show:", choices: ["good behaviour", "more hatred", "theft", "laziness"], why: "Christian new life should show good behaviour." },
      { q: "Peace is shown by:", choices: ["solving conflict calmly", "fighting daily", "insulting people", "destroying property"], why: "Peace avoids violence." },
    ],
  },
  {
    id: "p5-cre-we-are-church",
    option: "CRE",
    theme: "Christian Religious Education",
    title: "We are the Church",
    minutes: 25,
    intro: "Learners understand the church as both a worshipping community and a place of service.",
    objectives: ["Explain the meaning of church.", "Name roles in the church community.", "Describe ways of serving in church."],
    know: ["Church can mean a building for worship and also the community of believers.", "Members of the church have different roles.", "Service in church includes prayer, singing, reading, cleaning, giving and helping others."],
    worked: { problem: "How can a P5 learner serve in church?", steps: ["Think of age-appropriate service.", "A learner may sing, clean, read or help younger children."], answer: "A learner can serve by singing in the choir or helping clean the church compound." },
    modules: [
      { id: "meaning-church", title: "Meaning of Church", bigIdea: "The church is a community of believers, not only a building.", learn: ["Christians gather in church for worship.", "The church community prays, learns and serves.", "People can serve God through different roles."], question: "Why is church more than a building?", steps: ["A building is only a place.", "The believers are the worshipping community."], answer: "Church is also the community of believers." , tryQ: "The church is:", choices: ["a community of believers", "only stones", "a market", "a bank"], explanation: "Church means believers as well as a worship place." },
      { id: "serving-church", title: "Serving in Church", bigIdea: "Every believer can serve God using abilities and good conduct.", learn: ["Children can serve through singing, reading, cleaning or welcoming others.", "Adults may serve as leaders, teachers, pastors or helpers.", "Service should be done with humility and love."], question: "Give one way children can serve in church.", steps: ["Choose a simple role.", "Make it age-appropriate."], answer: "Children can serve by singing or helping keep the church clean." , tryQ: "Which is church service?", choices: ["helping clean the church", "stealing offerings", "mocking worship", "fighting"], explanation: "Cleaning the church is service." },
    ],
    quiz: [
      { q: "Church can mean:", choices: ["community of believers", "only a shop", "only a farm", "only a road"], why: "Church includes the believers." },
      { q: "Christians gather in church to:", choices: ["worship", "steal", "fight", "pollute"], why: "Church is a place/community of worship." },
      { q: "A child can serve in church by:", choices: ["singing in the choir", "stealing", "fighting", "mocking others"], why: "Singing can be service." },
      { q: "Service should be done with:", choices: ["love", "pride and cruelty", "hatred", "dishonesty"], why: "Christian service should show love." },
      { q: "Which is a church role?", choices: ["teaching God's word", "destroying books", "hiding people", "stealing"], why: "Teaching God's word is a church role." },
      { q: "The church community should promote:", choices: ["unity", "division", "hatred", "violence"], why: "Church community should promote unity and love." },
    ],
  },
  {
    id: "p5-cre-witness",
    option: "CRE",
    theme: "Christian Religious Education",
    title: "Witness",
    minutes: 24,
    intro: "Learners understand witnessing as showing faith through words and actions.",
    objectives: ["Explain witness in Christian life.", "Give examples of witnessing.", "Practise courage and honesty."],
    know: ["A witness tells or shows what they believe is true.", "Christian witnessing can be through speech, conduct and service.", "Honesty, courage and kindness can witness to faith."],
    worked: { problem: "How can a learner witness at school?", steps: ["Choose a Christian value.", "Apply it at school."], answer: "A learner can witness by being honest and helping classmates." },
    modules: [
      { id: "meaning-witness", title: "Meaning of Witness", bigIdea: "Witnessing is showing faith through words and behaviour.", learn: ["A Christian witness speaks and acts in ways that show belief in Christ.", "Witnessing should be respectful, not forceful.", "Good conduct can be a strong witness."], question: "What does witnessing mean?", steps: ["It involves showing belief.", "It can be through words or actions."], answer: "Witnessing means showing faith through words and actions." , tryQ: "Which action is witnessing?", choices: ["being honest", "cheating", "bullying", "stealing"], explanation: "Honesty can show faith." },
      { id: "courage-honesty", title: "Courage and Honesty", bigIdea: "Witnessing may require courage to do right when others do wrong.", learn: ["A learner may refuse to cheat even if others cheat.", "A learner may defend a weaker child from bullying.", "Witnessing should be done with humility and love."], question: "Give one courageous witness action.", steps: ["Think of a difficult situation.", "Choose a right action."], answer: "Refusing to cheat in an examination is a courageous witness action." , tryQ: "Which value supports witness?", choices: ["courage", "cowardly lying", "greed", "cruelty"], explanation: "Courage helps a person do what is right." },
    ],
    quiz: [
      { q: "Witnessing means:", choices: ["showing faith", "hiding truth", "stealing", "fighting"], why: "Witnessing shows what one believes." },
      { q: "A learner can witness by:", choices: ["being honest", "cheating", "bullying", "lying"], why: "Honesty can show faith." },
      { q: "Witnessing should be done with:", choices: ["respect", "force", "hatred", "mockery"], why: "Respectful conduct matters." },
      { q: "Which value helps a witness?", choices: ["courage", "fear of doing right", "dishonesty", "greed"], why: "Courage helps a person stand for truth." },
      { q: "A Christian witness should avoid:", choices: ["cheating", "kindness", "prayer", "service"], why: "Cheating contradicts good witness." },
      { q: "Good conduct can be:", choices: ["a witness", "a theft", "a disease", "a storm"], why: "Actions can show faith." },
    ],
  },
  {
    id: "p5-cre-discipleship-rewards",
    option: "CRE",
    theme: "Christian Religious Education",
    title: "Discipleship and its Rewards",
    minutes: 25,
    intro: "Learners study what it means to follow Jesus and the rewards and challenges of discipleship.",
    objectives: ["Explain discipleship.", "State challenges of discipleship.", "Name rewards of following Jesus."],
    know: ["A disciple is a follower and learner.", "Christian discipleship means following Jesus' teachings.", "Discipleship may involve sacrifice, service and reward."],
    worked: { problem: "What is a disciple?", steps: ["A disciple follows a teacher.", "For Christians, a disciple follows Jesus."], answer: "A disciple is a follower and learner of Jesus." },
    modules: [
      { id: "meaning-discipleship", title: "Meaning of Discipleship", bigIdea: "Discipleship means following and learning from Jesus.", learn: ["A disciple listens to the teacher.", "A Christian disciple tries to live according to Jesus' teachings.", "Discipleship includes love, service and obedience."], question: "What does discipleship mean?", steps: ["A disciple follows a teacher.", "For Christians, the teacher is Jesus."], answer: "Discipleship means following Jesus and learning from him." , tryQ: "A disciple is a:", choices: ["follower", "thief", "river", "market"], explanation: "A disciple follows a teacher." },
      { id: "rewards-challenges", title: "Rewards and Challenges", bigIdea: "Following Jesus can bring joy and eternal hope but may also require sacrifice.", learn: ["A disciple may face mockery or difficulty for doing what is right.", "Rewards include peace, joy, friendship with God and eternal hope.", "A disciple should continue doing good even when it is hard."], question: "Give one challenge of discipleship.", steps: ["Think of what may happen when one chooses right.", "Others may mock or oppose the disciple."], answer: "A disciple may be mocked for doing what is right." , tryQ: "Which is a reward of discipleship?", choices: ["peace with God", "stealing", "hatred", "dishonesty"], explanation: "Discipleship brings spiritual rewards." },
    ],
    quiz: [
      { q: "A disciple is a:", choices: ["follower", "disease", "river", "stone"], why: "A disciple follows and learns." },
      { q: "Christian disciples follow:", choices: ["Jesus", "bad habits", "violence", "hatred"], why: "Christians follow Jesus." },
      { q: "A challenge of discipleship may be:", choices: ["mockery", "always stealing", "never helping", "hating God"], why: "Doing right may attract mockery." },
      { q: "A reward of discipleship is:", choices: ["peace", "dishonesty", "theft", "cruelty"], why: "Peace can be a spiritual reward." },
      { q: "A disciple should:", choices: ["serve others", "bully others", "cheat", "steal"], why: "Discipleship includes service." },
      { q: "Following Jesus requires:", choices: ["obedience", "greed", "hatred", "violence"], why: "Discipleship involves obedience." },
    ],
  },
  {
    id: "p5-cre-relationship-with-god",
    option: "CRE",
    theme: "Christian Religious Education",
    title: "Relationship with God",
    minutes: 24,
    intro: "Learners study prayer, worship and ways of living close to God.",
    objectives: ["Explain relationship with God.", "Describe prayer and worship.", "State ways of growing closer to God."],
    know: ["A relationship with God is built through faith, prayer, worship and obedience.", "Prayer is communication with God.", "Worship shows honour and love for God."],
    worked: { problem: "Give two ways Christians strengthen their relationship with God.", steps: ["Think of faith practices.", "Prayer and worship are common examples."], answer: "Christians strengthen their relationship with God through prayer and worship." },
    modules: [
      { id: "prayer-worship", title: "Prayer and Worship", bigIdea: "Prayer and worship help Christians communicate with and honour God.", learn: ["Prayer can include praise, thanks, confession and requests.", "Worship may include singing, reading scripture, giving and listening to teaching.", "A sincere relationship with God should affect daily behaviour."], question: "What is prayer?", steps: ["Prayer is directed to God.", "It is a form of communication."], answer: "Prayer is communication with God." , tryQ: "Which is a form of worship?", choices: ["singing praises", "stealing", "lying", "fighting"], explanation: "Singing praises can be worship." },
      { id: "living-close-god", title: "Living Close to God", bigIdea: "A relationship with God is shown through faithful actions.", learn: ["Christians can grow through prayer, Bible reading and good conduct.", "Forgiveness and love show obedience to God's will.", "Faith should be practised at home, school and church."], question: "How can a learner show closeness to God at school?", steps: ["Choose a value such as honesty.", "Apply it at school."], answer: "A learner can show closeness to God by being honest and kind." , tryQ: "Which action shows a good relationship with God?", choices: ["forgiving others", "cheating", "mocking prayer", "stealing"], explanation: "Forgiveness reflects good Christian living." },
    ],
    quiz: [
      { q: "Prayer is:", choices: ["communication with God", "a market", "a vehicle", "a river"], why: "Prayer is talking/listening to God." },
      { q: "Worship shows:", choices: ["honour to God", "hatred", "stealing", "dishonesty"], why: "Worship honours God." },
      { q: "A Christian can grow close to God through:", choices: ["prayer", "cheating", "fighting", "greed"], why: "Prayer builds relationship with God." },
      { q: "Which action shows obedience to God?", choices: ["forgiving others", "lying", "bullying", "stealing"], why: "Forgiveness is a Christian value." },
      { q: "Bible reading can help Christians:", choices: ["know God's word", "destroy property", "hate others", "avoid truth"], why: "The Bible guides Christians." },
      { q: "A good relationship with God should affect:", choices: ["daily behaviour", "only handwriting", "only height", "only uniform"], why: "Faith should shape actions." },
    ],
  },
  {
    id: "p5-cre-hope",
    option: "CRE",
    theme: "Christian Religious Education",
    title: "Hope",
    minutes: 24,
    intro: "Learners study Christian hope and how it helps people face difficulties with trust in God.",
    objectives: ["Explain hope.", "Give examples of hope in difficult situations.", "Encourage others using hopeful words."],
    know: ["Hope means expecting good with trust in God.", "Christian hope helps believers continue during trouble.", "Hope should lead to encouragement, patience and positive action."],
    worked: { problem: "How can a learner show hope after failing a test?", steps: ["The learner should not give up.", "They can revise, ask for help and try again."], answer: "A learner shows hope by revising, asking for help and trying again." },
    modules: [
      { id: "meaning-hope", title: "Meaning of Hope", bigIdea: "Hope gives courage to continue when life is difficult.", learn: ["Hope is not laziness or empty wishing.", "Hope works with effort, prayer and patience.", "Christians hope in God's love and promises."], question: "What is hope?", steps: ["Hope expects good.", "For Christians, hope includes trust in God."], answer: "Hope is expecting good with trust in God." , tryQ: "Hope helps a person to:", choices: ["continue trying", "give up forever", "hate others", "steal"], explanation: "Hope encourages people to keep trying." },
      { id: "hope-daily-life", title: "Hope in Daily Life", bigIdea: "Hope can be shown through encouragement and positive action.", learn: ["A learner can encourage a friend who is sad.", "A sick person may hope for healing while following treatment.", "A person facing failure can work harder instead of giving up."], question: "Give one hopeful action after a bad result.", steps: ["Do not stop trying.", "Revise and ask for help."], answer: "Revise, ask for help and try again." , tryQ: "Which sentence shows hope?", choices: ["I will revise and improve.", "I will never try again.", "I hate learning.", "I will cheat."], explanation: "It shows positive effort after difficulty." },
    ],
    quiz: [
      { q: "Hope means:", choices: ["expecting good with trust", "giving up", "stealing", "fighting"], why: "Hope expects good and continues." },
      { q: "A hopeful learner should:", choices: ["try again", "give up forever", "cheat", "tear books"], why: "Hope encourages effort." },
      { q: "Hope should go with:", choices: ["effort", "laziness", "hatred", "dishonesty"], why: "Hope works with positive action." },
      { q: "Which words encourage hope?", choices: ["You can improve if you try", "You are useless", "Never learn", "Stop trying"], why: "The words encourage improvement." },
      { q: "Christians hope in:", choices: ["God", "stealing", "violence", "mockery"], why: "Christian hope is trust in God." },
      { q: "A sick person can show hope by:", choices: ["following treatment", "refusing all help", "hiding illness", "mocking medicine"], why: "Following treatment is hopeful action." },
    ],
  },
];

const IRE_SEEDS: Seed[] = [
  {
    id: "p5-ire-surat-al-zilzala",
    option: "IRE",
    theme: "Islamic Religious Education",
    title: "Surat Al-Zilzala",
    minutes: 24,
    intro: "Learners study the meaning and lessons of Surat Al-Zilzala.",
    objectives: ["Read Surat Al-Zilzala with respect.", "State its basic meaning.", "Apply its lessons on accountability."],
    know: ["Surat Al-Zilzala speaks about the shaking of the earth and accountability for deeds.", "Muslims believe Allah knows every good and bad deed.", "The Surah teaches responsibility for even small actions."],
    worked: { problem: "What lesson can a learner get from Surat Al-Zilzala?", steps: ["The Surah teaches accountability.", "Even small deeds matter before Allah."], answer: "A learner should do good because every deed matters." },
    modules: [
      { id: "zilzala-meaning", title: "Meaning and Message", bigIdea: "Surat Al-Zilzala teaches accountability for deeds.", learn: ["Al-Zilzala refers to shaking or earthquake.", "The Surah reminds believers that actions will be shown.", "It encourages doing good and avoiding evil."], question: "What does the Surah teach about deeds?", steps: ["It mentions deeds being shown.", "This means people are accountable."], answer: "It teaches that every deed matters and will be accounted for." , tryQ: "Surat Al-Zilzala teaches:", choices: ["accountability", "stealing", "forgetfulness", "laziness"], explanation: "It teaches responsibility for deeds." },
      { id: "zilzala-daily-life", title: "Daily-Life Lessons", bigIdea: "Belief in accountability should guide behaviour at home and school.", learn: ["A learner should avoid cheating even when no one sees.", "Small acts of kindness are valuable.", "Bad actions should be avoided because Allah knows them."], question: "How can a learner apply the Surah at school?", steps: ["Remember that every deed matters.", "Choose honesty and kindness."], answer: "A learner can avoid cheating and do good even in small things." , tryQ: "Which action matches the Surah's lesson?", choices: ["doing good even when unseen", "cheating secretly", "mocking others", "stealing"], explanation: "The Surah reminds believers that all deeds matter." },
    ],
    quiz: [
      { q: "Surat Al-Zilzala teaches about:", choices: ["accountability", "vehicle repair", "banking only", "weather"], why: "It teaches that deeds matter." },
      { q: "A good lesson from the Surah is to:", choices: ["do good deeds", "cheat", "steal", "mock others"], why: "The Surah encourages good actions." },
      { q: "Allah knows:", choices: ["all deeds", "only loud actions", "nothing", "only games"], why: "Islam teaches that Allah knows all deeds." },
      { q: "A learner applying this Surah should avoid:", choices: ["cheating", "kindness", "truthfulness", "helping"], why: "Cheating is a bad deed." },
      { q: "Small good deeds are:", choices: ["important", "useless", "forbidden", "always bad"], why: "The Surah teaches even small deeds matter." },
      { q: "Accountability means:", choices: ["answering for one's actions", "forgetting all actions", "hiding truth", "sleeping"], why: "Accountability means responsibility for actions." },
    ],
  },
  {
    id: "p5-ire-settlement-debts",
    option: "IRE",
    theme: "Islamic Religious Education",
    title: "Hadith: Settlement of Debts",
    minutes: 24,
    intro: "Learners study honesty and responsibility in borrowing and paying debts.",
    objectives: ["Explain debt and repayment.", "State Islamic lessons on settling debts.", "Apply honesty in financial dealings."],
    know: ["A debt is something owed to another person.", "Islam teaches honesty and responsibility in settling debts.", "A Muslim should not borrow carelessly or refuse to pay when able."],
    worked: { problem: "Why should a debt be paid back?", steps: ["Borrowed property belongs to another person.", "Paying back shows honesty and responsibility."], answer: "A debt should be paid back because it is another person's right." },
    modules: [
      { id: "meaning-debt", title: "Debt and Responsibility", bigIdea: "Debt settlement teaches honesty and trustworthiness.", learn: ["Debt means something owed.", "A person who borrows should plan to repay.", "Refusing to pay when able is dishonest."], question: "What is a debt?", steps: ["It is something owed.", "It may be money or property."], answer: "A debt is something owed to another person." , tryQ: "A person who borrows should:", choices: ["repay", "hide forever", "deny always", "steal more"], explanation: "A borrower should repay." },
      { id: "honesty-trade", title: "Honesty in Dealings", bigIdea: "Faith should show in how people handle money and property.", learn: ["Returning borrowed items builds trust.", "Writing or remembering debts prevents quarrels.", "A good Muslim keeps promises."], question: "How can a learner show honesty after borrowing a pen?", steps: ["The pen belongs to someone else.", "Return it after use."], answer: "The learner should return the pen to its owner." , tryQ: "Which action is honest?", choices: ["returning borrowed money", "denying a debt", "hiding property", "breaking promises"], explanation: "Returning debt is honest." },
    ],
    quiz: [
      { q: "A debt is:", choices: ["something owed", "a gift only", "a song", "a mountain"], why: "Debt is what one owes." },
      { q: "A borrower should:", choices: ["repay", "hide", "deny", "steal"], why: "Repayment is responsible." },
      { q: "Settlement of debts teaches:", choices: ["honesty", "lying", "cheating", "cruelty"], why: "Debt repayment is honest." },
      { q: "A good Muslim should keep:", choices: ["promises", "stolen things", "bad habits", "lies"], why: "Keeping promises is good conduct." },
      { q: "Borrowed property should be:", choices: ["returned", "hidden", "destroyed", "denied"], why: "Borrowed property belongs to another person." },
      { q: "Refusing to pay a debt when able is:", choices: ["dishonest", "kind", "responsible", "patient"], why: "It denies another person's right." },
    ],
  },
  {
    id: "p5-ire-resurrection-judgment",
    option: "IRE",
    theme: "Islamic Religious Education",
    title: "Resurrection and Judgment",
    minutes: 24,
    intro: "Learners study belief in life after death, resurrection and accountability before Allah.",
    objectives: ["Explain resurrection and judgment.", "State why accountability matters.", "Apply belief in judgment to good behaviour."],
    know: ["Resurrection means being raised after death.", "Judgment means Allah will judge people's deeds.", "Belief in judgment encourages good conduct and avoidance of evil."],
    worked: { problem: "How can belief in judgment guide a learner?", steps: ["The learner remembers Allah knows deeds.", "They choose honesty and avoid wrongdoing."], answer: "It guides a learner to do good and avoid evil." },
    modules: [
      { id: "meaning-resurrection", title: "Resurrection and Judgment", bigIdea: "Belief in accountability shapes Muslim behaviour.", learn: ["Muslims believe people will be raised after death.", "Allah will judge deeds fairly.", "Good deeds will be rewarded and bad deeds punished according to Allah's justice."], question: "What is resurrection?", steps: ["It comes after death.", "It means being raised again."], answer: "Resurrection means being raised after death." , tryQ: "Judgment means:", choices: ["Allah judging deeds", "forgetting deeds", "playing games", "travelling"], explanation: "Judgment is accountability before Allah." },
      { id: "judgment-daily-life", title: "Daily-Life Lessons", bigIdea: "Belief in judgment encourages discipline, honesty and kindness.", learn: ["A learner should avoid secret wrongdoing.", "Good actions should be done sincerely.", "Remembering accountability helps self-control."], question: "Give one action influenced by belief in judgment.", steps: ["Choose a good action.", "Connect it to accountability."], answer: "A learner may avoid cheating because Allah knows all deeds." , tryQ: "Which action fits belief in judgment?", choices: ["doing good sincerely", "stealing secretly", "lying", "mocking parents"], explanation: "Good conduct shows awareness of accountability." },
    ],
    quiz: [
      { q: "Resurrection means:", choices: ["being raised after death", "travelling", "fasting only", "sleeping"], why: "Resurrection is life after death." },
      { q: "Judgment means Allah will judge:", choices: ["deeds", "only clothes", "only houses", "only books"], why: "Judgment concerns actions/deeds." },
      { q: "Belief in judgment encourages:", choices: ["good conduct", "cheating", "stealing", "cruelty"], why: "Accountability encourages good behaviour." },
      { q: "Allah is believed to judge with:", choices: ["justice", "unfairness", "forgetfulness", "confusion"], why: "Islam teaches Allah is just." },
      { q: "A learner who remembers judgment should avoid:", choices: ["lying", "kindness", "prayer", "truthfulness"], why: "Lying is a bad deed." },
      { q: "Good deeds should be done:", choices: ["sincerely", "only for showing off", "with hatred", "while cheating"], why: "Sincerity is important." },
    ],
  },
  {
    id: "p5-ire-fasting",
    option: "IRE",
    theme: "Islamic Religious Education",
    title: "Fasting",
    minutes: 24,
    intro: "Learners study the meaning, practice and lessons of fasting in Islam.",
    objectives: ["Explain fasting.", "State lessons learnt from fasting.", "Describe respectful conduct during fasting."],
    know: ["Fasting means abstaining from food, drink and other invalidating acts for a period for the sake of Allah.", "Ramadan is the month of obligatory fasting for eligible Muslims.", "Fasting teaches self-control, patience, gratitude and care for the poor."],
    worked: { problem: "Give two lessons learnt from fasting.", steps: ["Fasting involves self-control.", "It helps Muslims remember the needy."], answer: "Fasting teaches self-control and care for the poor." },
    modules: [
      { id: "meaning-fasting", title: "Meaning and Practice of Fasting", bigIdea: "Fasting is an act of worship that trains self-control and obedience.", learn: ["Sawm means fasting.", "Eligible Muslims fast in Ramadan.", "Fasting is done with intention and discipline."], question: "What is Sawm?", steps: ["Sawm is an Arabic term.", "It means fasting."], answer: "Sawm means fasting." , tryQ: "Fasting in Ramadan is called:", choices: ["Sawm", "Hajj", "Zakah", "Adhan"], explanation: "Sawm means fasting." },
      { id: "lessons-fasting", title: "Lessons from Fasting", bigIdea: "Fasting should improve character and compassion.", learn: ["Fasting teaches patience.", "It helps Muslims appreciate food and remember the poor.", "It encourages self-discipline and worship."], question: "How does fasting help a person remember the poor?", steps: ["A fasting person feels hunger.", "This can create sympathy for those who lack food."], answer: "It helps a person feel compassion for the poor." , tryQ: "Which value is taught by fasting?", choices: ["self-control", "greed", "cruelty", "wastefulness"], explanation: "Fasting trains self-control." },
    ],
    quiz: [
      { q: "Sawm means:", choices: ["fasting", "prayer", "pilgrimage", "charity only"], why: "Sawm is fasting." },
      { q: "Fasting teaches:", choices: ["self-control", "greed", "lying", "waste"], why: "Fasting trains self-control." },
      { q: "The month of fasting is:", choices: ["Ramadan", "January only", "Friday", "Hajj"], why: "Muslims fast in Ramadan." },
      { q: "Fasting can help Muslims remember:", choices: ["the poor", "only games", "only markets", "only cars"], why: "Hunger can create compassion for needy people." },
      { q: "A fasting person should avoid:", choices: ["bad behaviour", "prayer", "kindness", "charity"], why: "Fasting should improve conduct." },
      { q: "Which action supports fasting?", choices: ["patience", "anger only", "greed", "mocking others"], why: "Patience is a lesson from fasting." },
    ],
  },
  {
    id: "p5-ire-prophet-madina",
    option: "IRE",
    theme: "Islamic Religious Education",
    title: "Prophet Muhammad (PBUH) at Madina",
    minutes: 26,
    intro: "Learners study the Prophet's life in Madina and lessons on leadership, unity and community building.",
    objectives: ["Describe the Prophet's life in Madina.", "Explain community lessons from Madina.", "Apply lessons of leadership and cooperation."],
    know: ["The Hijrah was the migration from Makkah to Madina.", "In Madina, Muslims built a community based on faith, brotherhood and cooperation.", "Prophet Muhammad (PBUH) showed leadership, kindness, justice and patience."],
    worked: { problem: "Give one lesson from Prophet Muhammad (PBUH)'s life in Madina.", steps: ["He built a united community.", "He promoted cooperation and justice."], answer: "Muslims learn to cooperate and live peacefully in the community." },
    modules: [
      { id: "hijrah-madina", title: "Hijrah and Life in Madina", bigIdea: "Madina became an important centre of Muslim community life.", learn: ["Hijrah means migration from Makkah to Madina.", "Muslims in Madina built brotherhood and cooperation.", "The Prophet guided the community with justice and kindness."], question: "What was the Hijrah?", steps: ["It was a migration.", "It was from Makkah to Madina."], answer: "Hijrah was the migration from Makkah to Madina." , tryQ: "Hijrah was from:", choices: ["Makkah to Madina", "Uganda to Kenya", "Rome to Egypt", "Madinah to London"], explanation: "Hijrah refers to migration from Makkah to Madina." },
      { id: "madina-lessons", title: "Lessons from Madina", bigIdea: "Madina teaches leadership, unity and peaceful community life.", learn: ["The Prophet encouraged cooperation between Muslims.", "He showed fairness in leadership.", "Learners can apply these lessons through teamwork and respect."], question: "How can learners practise unity?", steps: ["They can work together.", "They can respect classmates and avoid quarrels."], answer: "Learners practise unity by cooperating and respecting one another." , tryQ: "Which value is shown by community cooperation?", choices: ["unity", "hatred", "cheating", "greed"], explanation: "Cooperation supports unity." },
    ],
    quiz: [
      { q: "Hijrah means:", choices: ["migration", "fasting", "charity", "call to prayer"], why: "Hijrah is migration." },
      { q: "Hijrah was from Makkah to:", choices: ["Madina", "Kampala", "Rome", "Paris"], why: "The Prophet migrated to Madina." },
      { q: "Madina teaches community:", choices: ["cooperation", "hatred", "fighting", "selfishness"], why: "The Muslim community in Madina practised cooperation." },
      { q: "A good leader should be:", choices: ["just", "cruel", "dishonest", "greedy"], why: "Justice is a good leadership quality." },
      { q: "Which action shows unity?", choices: ["working together", "fighting", "mocking others", "stealing"], why: "Unity involves cooperation." },
      { q: "The Prophet's life teaches:", choices: ["kindness and patience", "hatred", "cheating", "laziness"], why: "The Prophet showed good character." },
    ],
  },
  {
    id: "p5-ire-surat-al-kauthar",
    option: "IRE",
    theme: "Islamic Religious Education",
    title: "Surat Al-Kauthar",
    minutes: 24,
    intro: "Learners study Surat Al-Kauthar and lessons of gratitude, prayer and sacrifice.",
    objectives: ["Read Surat Al-Kauthar with respect.", "State its basic message.", "Apply lessons of gratitude and worship."],
    know: ["Surat Al-Kauthar reminds Muslims of Allah's abundant blessings.", "It encourages prayer and sacrifice.", "The Surah teaches gratitude to Allah."],
    worked: { problem: "What lesson can Muslims learn from Surat Al-Kauthar?", steps: ["It speaks of Allah's blessings.", "A believer should be grateful and worship Allah."], answer: "Muslims learn gratitude and worship from Surat Al-Kauthar." },
    modules: [
      { id: "kauthar-message", title: "Message of Surat Al-Kauthar", bigIdea: "The Surah reminds believers to be grateful for Allah's blessings.", learn: ["Al-Kauthar refers to abundant good given by Allah.", "The Surah encourages prayer.", "It teaches gratitude and devotion."], question: "What does Surat Al-Kauthar teach?", steps: ["It mentions blessings from Allah.", "It encourages prayer and sacrifice."], answer: "It teaches gratitude, prayer and devotion to Allah." , tryQ: "The Surah teaches gratitude to:", choices: ["Allah", "idols", "money only", "markets"], explanation: "Muslims show gratitude to Allah." },
      { id: "gratitude-worship", title: "Gratitude and Worship", bigIdea: "Gratitude is shown through prayer, good conduct and using blessings well.", learn: ["A learner can thank Allah for life, family, food and knowledge.", "Gratitude should lead to good behaviour.", "Worship should be sincere."], question: "Give one way a learner can show gratitude to Allah.", steps: ["Think of a blessing.", "Choose a thankful action."], answer: "A learner can pray and use their abilities to do good." , tryQ: "Which action shows gratitude?", choices: ["praying sincerely", "wasting blessings", "mocking others", "stealing"], explanation: "Prayer can show gratitude." },
    ],
    quiz: [
      { q: "Surat Al-Kauthar teaches gratitude to:", choices: ["Allah", "idols", "money only", "rivers"], why: "The Surah reminds Muslims of Allah's blessings." },
      { q: "Which action shows gratitude?", choices: ["praying sincerely", "wasting food", "stealing", "mocking others"], why: "Prayer can show gratitude." },
      { q: "Al-Kauthar refers to:", choices: ["abundant good", "a debt", "a tool", "a road"], why: "It refers to abundant good/blessings." },
      { q: "The Surah encourages:", choices: ["prayer", "theft", "hatred", "laziness"], why: "Prayer is encouraged." },
      { q: "A grateful learner should:", choices: ["use blessings well", "waste everything", "hurt others", "deny blessings"], why: "Gratitude leads to good use of blessings." },
      { q: "Worship should be:", choices: ["sincere", "mocking", "careless", "dishonest"], why: "Sincerity is important in worship." },
    ],
  },
  {
    id: "p5-ire-good-neighbourliness",
    option: "IRE",
    theme: "Islamic Religious Education",
    title: "Hadith: Good Neighbourliness",
    minutes: 24,
    intro: "Learners study Islamic teachings on kindness and responsibility towards neighbours.",
    objectives: ["Explain good neighbourliness.", "State rights of neighbours.", "Apply kindness and peaceful living."],
    know: ["A neighbour is someone who lives near you or interacts closely with you.", "Islam teaches kindness, respect and help towards neighbours.", "Good neighbourliness promotes peace and security."],
    worked: { problem: "Give one way to be a good neighbour.", steps: ["Think of a helpful action.", "Avoid harming or disturbing neighbours."], answer: "A good neighbour helps others and avoids disturbing them." },
    modules: [
      { id: "neighbour-rights", title: "Rights of Neighbours", bigIdea: "Good neighbours treat each other with kindness and respect.", learn: ["Neighbours should not be harmed by words or actions.", "Sharing, greeting and helping in need promote good relations.", "Noise, insults and theft damage neighbourhood peace."], question: "How can a learner help a neighbour?", steps: ["Choose a simple helpful action.", "Make sure it is respectful."], answer: "A learner can help carry water or report danger." , tryQ: "Which action shows good neighbourliness?", choices: ["helping a neighbour", "throwing rubbish at their door", "insulting them", "stealing"], explanation: "Helping shows good neighbourliness." },
      { id: "peaceful-neighbourhood", title: "Peaceful Living", bigIdea: "Good neighbourliness builds peace in the community.", learn: ["Respect neighbours' property.", "Use polite language.", "Resolve disagreements calmly."], question: "Why should neighbours avoid quarrels?", steps: ["Quarrels destroy peace.", "Peaceful neighbours cooperate and help each other."], answer: "They should avoid quarrels to maintain peace and cooperation." , tryQ: "Which value supports good neighbourliness?", choices: ["kindness", "hatred", "greed", "cruelty"], explanation: "Kindness supports peaceful living." },
    ],
    quiz: [
      { q: "A neighbour is someone who:", choices: ["lives near you", "only lives overseas", "is always unknown", "is a mountain"], why: "A neighbour lives near or interacts closely." },
      { q: "Good neighbourliness means:", choices: ["kindness and respect", "fighting", "stealing", "noise only"], why: "Good neighbours respect each other." },
      { q: "Which action helps a neighbour?", choices: ["assisting in need", "insulting", "stealing", "throwing rubbish"], why: "Helping in need is good." },
      { q: "Neighbours should avoid:", choices: ["quarrels", "greetings", "kindness", "cooperation"], why: "Quarrels reduce peace." },
      { q: "Islam teaches neighbours to be:", choices: ["kind", "cruel", "dishonest", "violent"], why: "Kindness is encouraged." },
      { q: "Good neighbourliness promotes:", choices: ["peace", "hatred", "fear", "theft"], why: "Good neighbour relations promote peace." },
    ],
  },
  {
    id: "p5-ire-paradise-hell",
    option: "IRE",
    theme: "Islamic Religious Education",
    title: "Paradise and Hell",
    minutes: 24,
    intro: "Learners study belief in Paradise and Hell as part of accountability and moral responsibility.",
    objectives: ["Explain belief in Paradise and Hell.", "Relate belief to good and bad deeds.", "Apply moral responsibility in daily life."],
    know: ["Muslims believe Paradise is a reward for sincere faith and good deeds by Allah's mercy.", "Hell is punishment for evil and rejection of guidance.", "Belief in the Hereafter encourages good behaviour."],
    worked: { problem: "How can belief in Paradise and Hell guide a learner?", steps: ["A learner remembers that deeds have consequences.", "They choose good actions and avoid evil."], answer: "It guides a learner to do good and avoid bad actions." },
    modules: [
      { id: "paradise-hell-meaning", title: "Meaning of Paradise and Hell", bigIdea: "Belief in the Hereafter teaches accountability and hope.", learn: ["Paradise is associated with reward and Allah's mercy.", "Hell is associated with punishment for evil.", "Allah is just and merciful."], question: "What does belief in Paradise encourage?", steps: ["Paradise is reward for good.", "A believer is encouraged to do good."], answer: "It encourages good deeds and obedience to Allah." , tryQ: "Paradise is associated with:", choices: ["reward", "stealing", "cruelty", "lying"], explanation: "Paradise is a reward by Allah's mercy." },
      { id: "moral-accountability", title: "Moral Accountability", bigIdea: "Belief in the Hereafter should improve daily behaviour.", learn: ["A learner should avoid secret wrongdoing.", "Good deeds should be done sincerely.", "Remembering accountability helps self-control."], question: "Give one action that shows belief in accountability.", steps: ["Choose a good action.", "Connect it to knowing Allah sees all deeds."], answer: "A learner may refuse to cheat because Allah knows all deeds." , tryQ: "Which action fits belief in accountability?", choices: ["telling the truth", "cheating", "stealing", "mocking parents"], explanation: "Truthfulness shows moral responsibility." },
    ],
    quiz: [
      { q: "Paradise is associated with:", choices: ["reward", "punishment only", "lying", "stealing"], why: "Paradise is a reward by Allah's mercy." },
      { q: "Hell is associated with:", choices: ["punishment for evil", "reward only", "school fees", "weather"], why: "Hell is punishment for evil." },
      { q: "Belief in the Hereafter encourages:", choices: ["good behaviour", "cheating", "stealing", "cruelty"], why: "Accountability encourages good conduct." },
      { q: "A learner who remembers accountability should avoid:", choices: ["lying", "truth", "kindness", "prayer"], why: "Lying is a bad deed." },
      { q: "Good deeds should be done:", choices: ["sincerely", "for show only", "with hatred", "while cheating"], why: "Sincerity matters." },
      { q: "Allah is:", choices: ["just and merciful", "unaware", "unfair always", "forgetful"], why: "Islam teaches Allah is just and merciful." },
    ],
  },
  {
    id: "p5-ire-tarawiih-idd-prayers",
    option: "IRE",
    theme: "Islamic Religious Education",
    title: "Tarawiih and Idd Prayers",
    minutes: 24,
    intro: "Learners study special prayers in Ramadan and on Idd, and the community values around them.",
    objectives: ["Explain Tarawiih prayer.", "Explain Idd prayers.", "State values shown in congregational prayer."],
    know: ["Tarawiih is a special prayer performed in Ramadan after Isha prayer.", "Idd prayers are performed on Idd days.", "Congregational prayers promote unity, discipline and brotherhood/sisterhood."],
    worked: { problem: "When is Tarawiih prayer performed?", steps: ["Tarawiih is linked to Ramadan.", "It is performed after Isha prayer."], answer: "Tarawiih is performed in Ramadan after Isha prayer." },
    modules: [
      { id: "tarawiih-prayer", title: "Tarawiih Prayer", bigIdea: "Tarawiih is a special Ramadan prayer that builds worship and discipline.", learn: ["Tarawiih is performed at night in Ramadan.", "It is prayed after Isha.", "It encourages worship, patience and listening to Qur'an recitation."], question: "What is Tarawiih?", steps: ["It is a special prayer.", "It is connected to Ramadan."], answer: "Tarawiih is a special prayer performed in Ramadan after Isha." , tryQ: "Tarawiih is performed in:", choices: ["Ramadan", "Hajj only", "market day", "school assembly only"], explanation: "Tarawiih is a Ramadan prayer." },
      { id: "idd-prayers", title: "Idd Prayers and Community", bigIdea: "Idd prayers bring Muslims together in worship and celebration.", learn: ["Idd prayers are performed on Idd days.", "Muslims gather, pray and celebrate.", "The occasion encourages cleanliness, sharing and unity."], question: "Give one value shown during Idd celebrations.", steps: ["People gather together.", "They share greetings, food or charity."], answer: "Idd celebrations show unity and sharing." , tryQ: "Idd prayers are usually performed:", choices: ["in congregation", "alone only", "while sleeping", "in secret always"], explanation: "Idd prayers are communal." },
    ],
    quiz: [
      { q: "Tarawiih is performed in:", choices: ["Ramadan", "January only", "market only", "school break only"], why: "Tarawiih is a Ramadan prayer." },
      { q: "Tarawiih is prayed after:", choices: ["Isha", "breakfast", "market", "sunrise only"], why: "Tarawiih is after Isha prayer." },
      { q: "Idd prayers are performed on:", choices: ["Idd days", "any market day only", "rainy days only", "birthdays only"], why: "Idd prayers are for Idd days." },
      { q: "Congregational prayer promotes:", choices: ["unity", "hatred", "fighting", "division"], why: "Praying together builds unity." },
      { q: "A value during Idd is:", choices: ["sharing", "greed", "cruelty", "lying"], why: "Idd encourages sharing and kindness." },
      { q: "Muslims should attend prayers with:", choices: ["cleanliness and respect", "mockery", "fighting", "dishonesty"], why: "Prayer requires respect." },
    ],
  },
  {
    id: "p5-ire-last-days-prophet",
    option: "IRE",
    theme: "Islamic Religious Education",
    title: "Last Days of Prophet Muhammad (PBUH)",
    minutes: 26,
    intro: "Learners study the last days of Prophet Muhammad (PBUH) and the lessons from his life.",
    objectives: ["Describe the sickness and death of the Prophet respectfully.", "State lessons from his life.", "Apply values such as trustworthiness, kindness and patience."],
    know: ["Prophet Muhammad (PBUH)'s life teaches truthfulness, trustworthiness, kindness, patience and leadership.", "His final days remind Muslims to remain faithful and united.", "Learners should speak about the Prophet respectfully."],
    worked: { problem: "Give two lessons from Prophet Muhammad (PBUH)'s life.", steps: ["Think of his character.", "He was truthful and trustworthy.", "He was kind and patient."], answer: "Muslims learn truthfulness, trustworthiness, kindness and patience from his life." },
    modules: [
      { id: "last-days", title: "Last Days and Respect", bigIdea: "The Prophet's final days are studied with respect and focus on lessons for life.", learn: ["Muslims speak respectfully about Prophet Muhammad (PBUH).", "His sickness and death were important events for the Muslim community.", "The community had to remain faithful and united."], question: "How should learners speak about Prophet Muhammad?", steps: ["He is highly respected in Islam.", "Use respectful language."], answer: "Learners should speak about him respectfully." , tryQ: "The Prophet should be spoken about with:", choices: ["respect", "mockery", "insults", "carelessness"], explanation: "Respect is required." },
      { id: "lessons-prophet-life", title: "Lessons from the Prophet's Life", bigIdea: "The Prophet's life gives moral lessons for daily conduct.", learn: ["He was known for truthfulness and trustworthiness.", "He showed kindness and patience.", "He demonstrated leadership and concern for the community."], question: "How can a learner practise trustworthiness?", steps: ["A trustworthy person can be relied on.", "At school, this means telling the truth and keeping promises."], answer: "A learner practises trustworthiness by telling the truth and keeping promises." , tryQ: "Which value is learnt from the Prophet's life?", choices: ["truthfulness", "lying", "cruelty", "stealing"], explanation: "Truthfulness is a key lesson." },
    ],
    quiz: [
      { q: "Prophet Muhammad (PBUH) should be spoken about with:", choices: ["respect", "mockery", "insults", "carelessness"], why: "Respect is required." },
      { q: "One lesson from his life is:", choices: ["truthfulness", "lying", "cheating", "cruelty"], why: "He taught and showed truthfulness." },
      { q: "Trustworthiness means:", choices: ["being reliable", "stealing", "lying", "breaking promises"], why: "A trustworthy person can be relied on." },
      { q: "Which value did the Prophet show?", choices: ["kindness", "hatred", "greed", "dishonesty"], why: "Kindness is a lesson from his life." },
      { q: "Muslims learn from the Prophet's life to be:", choices: ["patient", "cruel", "dishonest", "lazy"], why: "Patience is an important value." },
      { q: "A learner can practise trustworthiness by:", choices: ["keeping promises", "cheating", "mocking", "stealing"], why: "Keeping promises shows trustworthiness." },
    ],
  },
];

const P5_RE_TERMS = {
  "p5-cre-faith": "Term I" as const,
  "p5-cre-christianity-islam": "Term I" as const,
  "p5-cre-gods-word-for-us": "Term I" as const,
  "p5-cre-gods-word-jesus": "Term II" as const,
  "p5-cre-new-people-spirit": "Term II" as const,
  "p5-cre-we-are-church": "Term II" as const,
  "p5-cre-witness": "Term III" as const,
  "p5-cre-discipleship-rewards": "Term III" as const,
  "p5-cre-relationship-with-god": "Term III" as const,
  "p5-cre-hope": "Term III" as const,
  "p5-ire-surat-al-zilzala": "Term I" as const,
  "p5-ire-settlement-debts": "Term I" as const,
  "p5-ire-resurrection-judgment": "Term I" as const,
  "p5-ire-fasting": "Term II" as const,
  "p5-ire-prophet-madina": "Term II" as const,
  "p5-ire-surat-al-kauthar": "Term II" as const,
  "p5-ire-good-neighbourliness": "Term III" as const,
  "p5-ire-paradise-hell": "Term III" as const,
  "p5-ire-tarawiih-idd-prayers": "Term III" as const,
  "p5-ire-last-days-prophet": "Term III" as const
};

export const P5_RE_TOPICS: Topic[] = balanceTopicAnswers(addUpperPrimaryReV4([...CRE_SEEDS, ...IRE_SEEDS].map(makeTopic), "P5", P5_RE_TERMS));
export const P5_CRE_TOPICS: Topic[] = P5_RE_TOPICS.filter((topic) => topic.themeId === "p5-cre");
export const P5_IRE_TOPICS: Topic[] = P5_RE_TOPICS.filter((topic) => topic.themeId === "p5-ire");

export function getP5ReTopic(id: string): Topic | undefined {
  return P5_RE_TOPICS.find((topic) => topic.id === id);
}
