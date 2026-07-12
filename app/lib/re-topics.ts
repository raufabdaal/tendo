import type { Topic } from "@/lib/topics";
import { addUpperPrimaryReV4 } from "@/lib/v4-re-helpers";


function balanceTopicAnswers(topics: Topic[]): Topic[] {
  let nextCorrectIndex = 0;
  function visit(value: unknown): void {
    if (Array.isArray(value)) { value.forEach(visit); return; }
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

const P7_RE_TERMS: Record<string, "Term I" | "Term II" | "Term III"> = {
  "cre-theme-witnessing-gifts": "Term I",
  "cre-ancestors-pioneers-faith": "Term I",
  "cre-gods-freedom-law": "Term I",
  "cre-person-ministry-jesus": "Term II",
  "cre-passion-resurrection": "Term II",
  "cre-spirit-church-sacraments": "Term III",
  "cre-citizenship-service": "Term III",
  "ire-tawhid-iman": "Term I",
  "ire-pillars-ibadah": "Term I",
  "ire-quran-hadith": "Term I",
  "ire-akhlaq-morals": "Term II",
  "ire-hadith-sunnah": "Term II",
  "ire-history-seerah": "Term III",
  "ire-adab-social-justice": "Term III"
};

const CRE_TOPICS_DATA: Topic[] = [
  {
    "id": "cre-theme-witnessing-gifts",
    "themeId": "cre-term-1",
    "themeName": "CRE · Term I",
    "title": "An Overview of the P7 CRE Curriculum Theme",
    "estMinutes": 20,
    "status": "published",
    "reviewStatus": "verified",
    "note": {
      "intro": "Why this matters: P7 Christians learn to witness for Christ daily by discovering and using their God-given talents to serve the church and community.",
      "learningObjectives": [
        "Explain the meaning of 'Witnessing for Christ' in daily actions.",
        "Identify God-given talents and spiritual gifts.",
        "Describe practical ways of developing personal talents.",
        "Apply talents to serve community and church development."
      ],
      "whatYouNeedToKnow": [
        "'Witnessing for Christ' means reflecting Jesus' character through love, honesty, helpfulness, and courage.",
        "A talent is an innate, God-given ability or skill (singing, leadership, teaching, peacemaking).",
        "The Parable of the Talents (Matthew 25) teaches that God expects us to invest and multiply our gifts rather than bury them out of fear or laziness."
      ],
      "worked": {
        "problem": "Explain how a P7 candidate can witness for Christ inside the school environment.",
        "steps": [
          "Step 1: Define witnessing: showing Christ's love through words and deeds.",
          "Step 2: Identify practical school actions: helping weaker classmates in revision, speaking the truth when questioned, refusing examination malpractice, and comforting sick peers.",
          "Step 3: Conclude that moral behavior reflects Christian light to others."
        ],
        "answer": "Answer: By practicing honesty, refusing cheating, helping classmates, and showing kindness."
      },
      "recap": [
        "Witnessing for Christ means shining divine light through moral actions.",
        "Talents are God-given abilities that must be practiced and shared.",
        "Burying talents out of laziness displeases God."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "witnessing-for-christ",
        "title": "1. Understanding Witnessing for Christ",
        "modules": [
          {
            "moduleId": "meaning-of-witnessing",
            "title": "Daily Application of Witnessing for Christ",
            "bigIdea": "To witness for Christ means demonstrating His teachings and moral character in our everyday speech and conduct.",
            "learnIt": [
              "A Christian witness is someone who testifies to the truth of Jesus Christ through exemplary daily living.",
              "Jesus instructed His disciples: 'You will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth' (Acts 1:8).",
              "Practical daily witnessing: standing boldly for honesty and fairness, forgiving those who offend us, sharing resources with the needy, and speaking words of encouragement rather than gossip."
            ],
            "tryThis": {
              "question": "According to Acts 1:8, what divine power enables Christians to become effective witnesses for Christ?",
              "choices": ["Political authority", "The Holy Spirit", "Financial wealth", "Physical strength"],
              "correct": 1,
              "explanation": "Jesus promised that the Holy Spirit would empower believers to witness across the world."
            }
          }
        ]
      },
      {
        "subtopicId": "talents-and-service",
        "title": "2. God-Given Talents and Community Service",
        "modules": [
          {
            "moduleId": "parable-of-talents",
            "title": "Identifying and Developing Talents",
            "bigIdea": "God entrusts every person with unique abilities that must be cultivated and multiplied for common good.",
            "learnIt": [
              "A talent is a special natural or spiritual aptitude bestowed by God (e.g., musical ability, administrative leadership, teaching, counseling, caretaking).",
              "The Parable of the Talents (Matthew 25:14-30): a master entrusted five talents to one servant, two to another, and one to a third. The first two servants traded and doubled their talents, receiving praise ('Well done, good and faithful servant'). The third buried his single talent in the ground out of fear and was condemned.",
              "Developing talents: practice regularly, seek mentorship from elders, study hard, and use abilities to serve church choirs, community cleanup projects, and school leadership."
            ],
            "tryThis": {
              "question": "In the Parable of the Talents, why was the servant who received one talent rebuked by his master?",
              "choices": ["He stole the money", "He buried the talent in the ground out of fear and laziness instead of investing it", "He gave it to robbers", "He lost it in a river"],
              "correct": 1,
              "explanation": "God expects believers to actively exercise and grow the gifts entrusted to them."
            }
          }
        ]
      }
    
      ,{
        "subtopicId": "premium-premium-exam-practice-talents-and-witnessing",
        "title": "Premium Exam Practice: Talents and Witnessing",
        "modules": [
          {
            "moduleId": "applying-talents-in-daily-life",
            "title": "Applying Talents in Daily Life",
            "bigIdea": "A strong CRE answer connects God-given talents to service, honesty and care for others.",
            "learnIt": ["Witnessing for Christ is shown through actions, not only words.", "A talent should be developed through practice and used to serve others.", "In exam answers, give practical school examples such as honesty, helping classmates, leadership and kindness."],
            "workedExample": { "question": "How can a P7 learner witness for Christ at school?", "steps": ["Step 1: Mention a Christian value such as honesty or love.", "Step 2: Connect it to a school action.", "Step 3: Give a clear example."], "answer": "By being honest, helping weaker classmates and refusing to cheat in examinations." },
            "tryThis": { "question": "Which action shows good use of a talent?", "choices": ["Using singing to encourage others", "Hiding all abilities", "Mocking weak learners", "Refusing to help"], "correct": 0, "explanation": "A talent should be used to serve and encourage others." }
          }
        ]
      }],
    "quiz": [
      { "q": "What does 'Witnessing for Christ' mean in daily Christian life?", "choices": ["Reflecting Jesus' love, honesty, and moral character in words and deeds", "Wearing expensive jewelry", "Living in seclusion", "Boasting about religion"], "correct": 0, "why": "Witnessing is demonstrating Christian faith through exemplary conduct." },
      { "q": "In the Parable of the Talents, what did the servant with five talents do?", "choices": ["Traded with them and gained five more talents", "Buried them in a field", "Spent them on feasts", "Returned them immediately"], "correct": 0, "why": "He invested wisely and doubled his master's entrustment." },
      { "q": "Which biblical book records Jesus' promise: 'You will receive power when the Holy Spirit comes on you; and you will be my witnesses'?", "choices": ["Acts of the Apostles (Acts 1:8)", "Genesis", "Exodus", "Revelation"], "correct": 0, "why": "Acts 1:8 records Jesus' ascension charge." },
      { "q": "How can a P7 learner use the talent of singing to serve the church?", "choices": ["By joining the church choir to lead worship and praise", "By demanding high payment", "By refusing to sing with weak singers", "By keeping quiet"], "correct": 0, "why": "Musical talents glorify God and uplift the congregation." },
      { "q": "Why did God bestow different talents on different individuals?", "choices": ["So that people can complement and serve one another in community unity", "To create tribal pride", "To make some people lazy", "To cause arguments"], "correct": 0, "why": "Diverse gifts enable mutual support inside the body of Christ." },
      { "q": "What moral trait is condemned in the Parable of the Talents?", "choices": ["Laziness, fear, and burying one's potential", "Hard work", "Generosity", "Honesty"], "correct": 0, "why": "The slothful servant failed to utilize his entrustment." },
      { "q": "Which action best demonstrates witnessing for Christ during an examination?", "choices": ["Writing honestly and refusing any cheating or leaked papers", "Copying from a neighbor", "Helping a friend cheat", "Leaving papers blank"], "correct": 0, "why": "Absolute honesty under pressure reflects godly integrity." },
      { "q": "Who is the ultimate source of all human talents and spiritual gifts?", "choices": ["God the Creator", "Government leaders", "School teachers", "Wealthy merchants"], "correct": 0, "why": "James 1:17 affirms that every good and perfect gift comes from God." }
    ]
  },
  {
    "id": "cre-ancestors-pioneers-faith",
    "themeId": "cre-term-1",
    "themeName": "CRE · Term I",
    "title": "Ancestors and Pioneers of Faith",
    "estMinutes": 24,
    "status": "published",
    "reviewStatus": "verified",
    "note": {
      "intro": "Why this matters: Studying biblical faith giants and the courageous Uganda Martyrs inspires candidates to stand firm for truth under pressure.",
      "learningObjectives": [
        "Describe Old Testament faith lessons from Abraham, Moses, and King David.",
        "Explain New Testament pioneering roles of John the Baptist, Peter, and Paul.",
        "Narrate the martyrdom of the Uganda Martyrs under Kabaka Mwanga.",
        "Apply lessons of courage, repentance, and obedience to modern life."
      ],
      "whatYouNeedToKnow": [
        "Abraham demonstrated absolute obedience when called to sacrifice Isaac (Genesis 22). Moses led Israel out of Egyptian slavery.",
        "King David committed sin but modeled true repentance (Psalm 51).",
        "John the Baptist prepared the way for Jesus; Paul spread the Gospel to Gentiles.",
        "The Uganda Martyrs (1885-1887) chose death over compromising Christian morals."
      ],
      "worked": {
        "problem": "Explain what Christians learn from the life and repentance of King David.",
        "steps": [
          "Step 1: Identify David's failure: he sinned by taking Uriah's wife Bathsheba.",
          "Step 2: Identify David's reaction when confronted by Prophet Nathan: he humbled himself immediately and repented sincerely without making excuses.",
          "Step 3: Conclude on moral lesson: God forgives sincere repentance, and Christians must readily confess their sins."
        ],
        "answer": "Answer: Christians learn to remain humble, admit faults readily, and seek God's sincere forgiveness."
      },
      "recap": [
        "Abraham = Father of Faith; Moses = Liberator and Lawgiver; David = Repentant King.",
        "John the Baptist preached repentance and baptized Jesus in River Jordan.",
        "St. Charles Lwanga and companions stood unwavering at Namugongo."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "old-testament-ancestors",
        "title": "1. Old Testament Ancestors of Faith",
        "modules": [
          {
            "moduleId": "abraham-moses-david",
            "title": "Abraham, Moses and King David",
            "bigIdea": "Old Testament patriarchs modeled unwavering faith, courageous leadership, and sincere repentance.",
            "learnIt": [
              "Abraham (The Father of Faith): called by God to leave Ur for Canaan. Demonstrated supreme faith by obeying God's command to sacrifice his promised son Isaac on Mount Moriah before God provided a ram.",
              "Moses (The Liberator and Lawgiver): called at the burning bush to lead the Israelites out of Egyptian slavery across the Red Sea. Endured 40 years in the wilderness and received the Ten Commandments at Mount Sinai.",
              "King David (The Repentant Psalmist): greatest king of Israel who defeated Goliath. When Prophet Nathan confronted him over his sin regarding Uriah and Bathsheba, David wrote Psalm 51 expressing deep, brokenhearted repentance."
            ],
            "tryThis": {
              "question": "Which biblical ancestor demonstrated absolute obedience to God when asked to sacrifice his son on Mount Moriah?",
              "choices": ["Moses", "Abraham", "King David", "Noah"],
              "correct": 1,
              "explanation": "Abraham's willingness to obey earned him the title 'Friend of God' and Father of Faith."
            }
          }
        ]
      },
      {
        "subtopicId": "new-testament-pioneers",
        "title": "2. New Testament Pioneers of the Early Church",
        modules: [
          {
            "moduleId": "john-baptist-peter-paul",
            "title": "John the Baptist, Apostle Peter and Apostle Paul",
            "bigIdea": "John prepared the way for Jesus, Peter led the Jerusalem church, and Paul carried the Gospel across the Roman world.",
            "learnIt": [
              "John the Baptist (The Forerunner): lived in the Judean desert preaching a baptism of repentance for the forgiveness of sins, crying out: 'Prepare the way for the Lord.' Baptized Jesus in the River Jordan.",
              "Apostle Peter: bold leader of the twelve apostles who preached on Pentecost winning 3,000 souls. Overcame his earlier denial of Christ to shepherd the early church.",
              "Apostle Paul (Saul of Tarsus): formerly a zealous persecutor of Christians who experienced a dramatic conversion on the road to Damascus. Became the great Apostle to the Gentiles, writing 13 New Testament epistles."
            ],
            "tryThis": {
              "question": "Who experienced a blinding divine encounter on the road to Damascus that transformed him from a persecutor into an Apostle?",
              "choices": ["Apostle Peter", "Apostle Paul (Saul)", "John the Baptist", "Stephen"],
              "correct": 1,
              "explanation": "Saul converted on the Damascus road and became Paul, the great missionary to the Gentiles."
            }
          }
        ]
      },
      {
        "subtopicId": "uganda-martyrs-courage",
        "title": "3. The Uganda Martyrs and Modern Inspiration",
        "modules": [
          {
            "moduleId": "martyrs-legacy",
            "title": "Significance of the Uganda Martyrs",
            "bigIdea": "The Uganda Martyrs laid down their lives at Namugongo rather than compromise Christian moral standards.",
            "learnIt": [
              "Historical sacrifice: between 1885 and 1887, Kabaka Mwanga II executed Anglican and Catholic converts for refusing to engage in immoral palace practices or renounce Jesus Christ.",
              "St. Charles Lwanga: leader of the Catholic pages who protected younger boys like St. Kizito from moral corruption before being burnt on 3 June 1886 at Namugongo.",
              "Modern inspiration: the Martyrs inspire contemporary Christians to endure peer pressure, stand upright against corruption, and maintain moral purity."
            ],
            "tryThis": {
              "question": "Who was the youngest Catholic page martyred at Namugongo whose courage was sustained by St. Charles Lwanga?",
              "choices": ["St. Kizito", "St. Mbaga Tuzinde", "St. Balikuddembe", "St. Kaggwa"],
              "correct": 0,
              "explanation": "St. Kizito was only about 14 years old when he boldly walked into the martyrdom flames."
            }
          }
        ]
      }
    
      ,{
        "subtopicId": "premium-premium-exam-practice-faith-examples",
        "title": "Premium Exam Practice: Faith Examples",
        "modules": [
          {
            "moduleId": "learning-from-ancestors-and-pioneers",
            "title": "Learning from Ancestors and Pioneers",
            "bigIdea": "CRE history questions often ask what lesson a believer learns from a biblical or church figure.",
            "learnIt": ["Abraham teaches faith and obedience to God.", "Moses teaches leadership and trust in God during difficulty.", "The Uganda Martyrs teach courage and commitment to faith."],
            "workedExample": { "question": "What lesson can Christians learn from Abraham?", "steps": ["Step 1: Identify Abraham as a person of faith.", "Step 2: State the lesson in simple words.", "Step 3: Apply it to daily life."], "answer": "Christians can learn to trust and obey God." },
            "tryThis": { "question": "The Uganda Martyrs are remembered mainly for:", "choices": ["standing firm in their faith", "building railways", "writing the Qur'an", "discovering oil"], "correct": 0, "explanation": "They are remembered for courage and commitment to faith." }
          }
        ]
      }],
    "quiz": [
      { "q": "Who is known in the Bible as the 'Father of Faith' due to his obedience?", "choices": ["Abraham", "Moses", "Isaac", "Jacob"], "correct": 0, "why": "Abraham believed God unquestioningly." },
      { "q": "Which prophet confronted King David over his sin involving Uriah and Bathsheba?", "choices": ["Prophet Nathan", "Prophet Elijah", "Prophet Isaiah", "Prophet Samuel"], "correct": 0, "why": "Nathan used the parable of the ewe lamb to convict David." },
      { "q": "What message did John the Baptist preach in the Judean wilderness?", "choices": ["Repent, for the kingdom of heaven is near", "Build tall temples", "Collect more taxes", "Flee to Egypt"], "correct": 0, "why": "John called people to sincere moral repentance." },
      { "q": "Where did Saul (Paul) experience his dramatic conversion to Christianity?", "choices": ["On the road to Damascus", "In Jerusalem temple", "On Mount Sinai", "By River Jordan"], "correct": 0, "why": "The risen Jesus confronted Saul on the Damascus highway." },
      { "q": "Why were the Uganda Martyrs executed by Kabaka Mwanga II?", "choices": ["They refused to renounce Christ or participate in immoral palace acts", "They refused to fight in royal wars", "They stole cattle", "They insulted chiefs"], "correct": 0, "why": "They placed divine holiness above royal commands." },
      { "q": "Which Psalm did King David write to express his deep sorrow and repentance to God?", "choices": ["Psalm 51", "Psalm 23", "Psalm 1", "Psalm 150"], "correct": 0, "why": "Psalm 51 is David's great prayer of confession and cleansing." },
      { "q": "Who led the Israelites out of Egyptian slavery across the Red Sea?", "choices": ["Moses", "Joshua", "Aaron", "Caleb"], "correct": 0, "why": "God commissioned Moses at the burning bush." },
      { "q": "Which Apostle preached boldly on the Day of Pentecost leading to 3,000 conversions?", "choices": ["Apostle Peter", "Apostle Thomas", "Apostle Andrew", "Apostle Philip"], "correct": 0, "why": "Peter delivered the foundational Pentecost sermon." }
    ]
  },
  {
    "id": "cre-gods-freedom-law",
    "themeId": "cre-term-1",
    "themeName": "CRE · Term I",
    "title": "God's Freedom and the Law",
    "estMinutes": 22,
    "status": "published",
    "reviewStatus": "verified",
    "note": {
      "intro": "Why this matters: The Ten Commandments establish moral duties toward God and humanity, guiding Christians to use freedom responsibly without falling into sin.",
      "learningObjectives": [
        "Recite and categorize the Ten Commandments (Decalogue) given at Mt. Sinai.",
        "Distinguish between duties to God (Commandments 1-4) and duties to neighbors (Commandments 5-10).",
        "Define Christian freedom versus lawlessness.",
        "Apply responsible freedom to avoid youth addictions and delinquency."
      ],
      "whatYouNeedToKnow": [
        "God gave Moses the Ten Commandments on stone tablets at Mount Sinai (Exodus 20).",
        "Commandments 1-4 govern worship of God alone; Commandments 5-10 govern human interpersonal ethics.",
        "True Christian freedom means liberation from sin to do good, not license to commit immorality."
      ],
      "worked": {
        "problem": "Distinguish between the two stone tablets of the Ten Commandments according to Jesus' summary of the Law.",
        "steps": [
          "First tablet (Commandments 1-4): loving the Lord God with all your heart, soul, and mind (forbidding idolatry, blasphemy, and Sabbath breaking).",
          "Second tablet (Commandments 5-10): loving your neighbor as yourself (forbidding dishonor to parents, murder, adultery, theft, false testimony, and covetousness)."
        ],
        "answer": "Answer: The first tablet commands supreme love for God; the second commands love and justice for neighbors."
      },
      "recap": [
        "Decalogue = Ten Words given at Mount Sinai.",
        "True freedom operates under God's moral boundaries.",
        "Lawlessness leads to spiritual slavery and destructive habits."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "ten-commandments-sinai",
        "title": "1. The Ten Commandments (Decalogue) at Mt. Sinai",
        "modules": [
          {
            "moduleId": "duties-to-god",
            "title": "Commandments 1 to 4: Our Duties to God",
            "bigIdea": "The first four commandments require absolute monotheistic worship, reverence for God's holy name, and Sabbath rest.",
            "learnIt": [
              "Commandment 1: 'You shall have no other gods before me.' Forbids worshiping idols, money, or witchcraft.",
              "Commandment 2: 'You shall not make for yourself an idol / carved image.' Forbids bowing down to created objects.",
              "Commandment 3: 'You shall not misuse the name of the Lord your God.' Forbids blasphemy, cursing, or false swearing.",
              "Commandment 4: 'Remember the Sabbath day by keeping it holy.' Dedicates the seventh day for rest, worship, and spiritual renewal."
            ],
            "tryThis": {
              "question": "Which commandment specifically forbids using God's name casually in cursing or false oaths?",
              "choices": ["First Commandment", "Third Commandment", "Fifth Commandment", "Ninth Commandment"],
              "correct": 1,
              "explanation": "The Third Commandment guards the holiness and reverence of divine identity."
            }
          },
          {
            "moduleId": "duties-to-neighbors",
            "title": "Commandments 5 to 10: Our Duties to Humanity",
            "bigIdea": "The last six commandments protect human life, family honor, property rights, and truthfulness.",
            "learnIt": [
              "Commandment 5: 'Honor your father and mother.' Carries the promise of long life in the land.",
              "Commandment 6: 'You shall not murder.' Protects the sacredness of human life against violence and hatred.",
              "Commandment 7: 'You shall not commit adultery.' Protects marital purity and family faithfulness.",
              "Commandment 8: 'You shall not steal.' Safeguards personal and public property against theft and corruption.",
              "Commandment 9: 'You shall not give false testimony against your neighbor.' Forbids lying, perjury, and malicious gossip.",
              "Commandment 10: 'You shall not covet your neighbor's house or belongings.' Forbids greedy envy of another's blessings."
            ],
            "tryThis": {
              "question": "Which commandment forbids greedy envy and desiring what rightfully belongs to another person?",
              "choices": ["Seventh Commandment", "Eighth Commandment", "Tenth Commandment", "Sixth Commandment"],
              "correct": 2,
              "explanation": "Coveting addresses internal sinful desire before it manifests as outward theft."
            }
          }
        ]
      },
      {
        "subtopicId": "concept-of-freedom",
        "title": "2. True Christian Freedom vs Lawlessness",
        modules: [
          {
            "moduleId": "responsible-freedom",
            "title": "Using Freedom Responsibly to Avoid Sin",
            "bigIdea": "Christian freedom is liberation from destructive habits to serve righteousness under God's law.",
            "learnIt": [
              "Defining freedom: true Christian freedom is not doing whatever one feels like doing (lawlessness); rather, it is the moral liberty to choose what is right, noble, and pleasing to God.",
              "Lawlessness vs Liberty: lawlessness leads to addiction (drugs, alcohol), juvenile crime, and school failure. Responsible freedom respects school rules, civil laws, and parental guidance.",
              "Apostle Paul's instruction: 'You my brothers and sisters were called to be free. But do not use your freedom to indulge the flesh; rather, serve one another humbly in love' (Galatians 5:13)."
            ],
            "tryThis": {
              "question": "According to Galatians 5:13, how should Christians exercise their God-given freedom?",
              "choices": ["To indulge selfish desires", "To humbly serve one another in love", "To ignore civil laws", "To boast over non-believers"],
              "correct": 1,
              "explanation": "True freedom expresses itself through humble, constructive service to the community."
            }
          }
        ]
      }
    
      ,{
        "subtopicId": "premium-premium-exam-practice-commandments-and-freedom",
        "title": "Premium Exam Practice: Commandments and Freedom",
        "modules": [
          {
            "moduleId": "applying-god-s-law",
            "title": "Applying God's Law",
            "bigIdea": "A good answer explains how a commandment guides behaviour today.",
            "learnIt": ["The Ten Commandments guide Christians in loving God and respecting neighbours.", "Christian freedom does not mean doing anything carelessly; it means choosing what is right.", "Use practical examples: respecting parents, telling the truth, not stealing and worshipping God."],
            "workedExample": { "question": "How can a learner obey the commandment against stealing?", "steps": ["Step 1: Name the commandment: do not steal.", "Step 2: Apply it to school life.", "Step 3: Give one practical action."], "answer": "A learner can obey it by not taking another pupil's books, money or property." },
            "tryThis": { "question": "Which commandment teaches respect for parents?", "choices": ["Honour your father and mother", "Do not steal", "Do not kill", "Keep the Sabbath holy"], "correct": 0, "explanation": "Honouring father and mother teaches respect for parents." }
          }
        ]
      }],
    "quiz": [
      { "q": "On which mountain did Prophet Moses receive the Ten Commandments from God?", "choices": ["Mount Sinai / Horeb", "Mount Ararat", "Mount Carmel", "Mount Olivet"], "correct": 0, "why": "God delivered the Decalogue to Moses on Mount Sinai." },
      { "q": "Which commandment carries the explicit promise that your days may be long in the land?", "choices": ["Fifth Commandment (Honor your father and mother)", "First Commandment", "Eighth Commandment", "Fourth Commandment"], "correct": 0, "why": "Honoring parents is the first commandment with a promise." },
      { "q": "What does the Tenth Commandment forbid?", "choices": ["Coveting / greedy envy of a neighbor's property", "Working on the Sabbath", "Making carved idols", "Telling lies in court"], "correct": 0, "why": "The Tenth Commandment targets jealous covetousness." },
      { "q": "What is the Christian definition of true freedom?", "choices": ["Liberation from sin to freely choose righteousness and serve others in love", "Doing illegal acts without arrest", "Refusing school rules", "Living without working"], "correct": 0, "why": "Christian freedom operates inside moral responsibility." },
      { "q": "Which commandment protects the sacredness of human life against unlawful killing?", "choices": ["Sixth Commandment (You shall not murder)", "Seventh Commandment", "Ninth Commandment", "Third Commandment"], "correct": 0, "why": "The Sixth Commandment forbids murder." },
      { "q": "How did Jesus summarize the entire Old Testament Law?", "choices": ["Love the Lord your God supremely, and love your neighbor as yourself", "Perform animal sacrifices daily", "Wash hands before eating", "Fast twice a week"], "correct": 0, "why": "Matthew 22:37-40 summarizes all law under twofold love." },
      { "q": "Which commandment forbids lying and bearing false witness against others?", "choices": ["Ninth Commandment", "Eighth Commandment", "Second Commandment", "Fourth Commandment"], "correct": 0, "why": "The Ninth Commandment protects truthfulness." },
      { "q": "Why does lawlessness lead to spiritual slavery?", "choices": ["Because uncontrolled sinful habits trap individuals into destructive addictions and moral failure", "Because police arrest everyone", "Because freedom is expensive", "Because laws are too short"], "correct": 0, "why": "Sin enslaves the will when moral self-control is abandoned." }
    ]
  },
  {
    "id": "cre-person-ministry-jesus",
    "themeId": "cre-term-2",
    "themeName": "CRE · Term II",
    "title": "The Person and Ministry of Jesus Christ",
    "estMinutes": 24,
    "status": "published",
    "reviewStatus": "verified",
    "note": {
      "intro": "Why this matters: Jesus' parables, miracles, and Sermon on the Mount reveal God's kingdom values of forgiveness, healing power, and peacemaking.",
      "learningObjectives": [
        "Analyze major parables (Prodigal Son, Good Samaritan, Sower) and moral applications.",
        "Categorize miracles of Jesus (healing, nature, raising the dead) and their significance.",
        "Explain the Beatitudes and moral laws in the Sermon on the Mount."
      ],
      "whatYouNeedToKnow": [
        "Parables are earthly stories with heavenly moral meanings.",
        "Miracles demonstrate Jesus' divine authority over disease, nature, demons, and death.",
        "The Beatitudes (Matthew 5) pronounce blessings on the humble, merciful, pure, and peacemakers."
      ],
      "worked": {
        "problem": "Explain what the three types of soil represent in the Parable of the Sower (Matthew 13).",
        "steps": [
          "Path/hard ground: people who hear God's Word but don't understand it, so Satan snatches it away.",
          "Rocky/thorny ground: people who accept the Word joyfully but abandon faith during trouble or worldly wealth temptation.",
          "Good fertile soil: sincere believers who hear, understand, and produce abundant spiritual harvest (30, 60, 100 fold)."
        ],
        "answer": "Answer: They represent different human heart responses to the preaching of God's Word."
      },
      "recap": [
        "Prodigal Son illustrates God's eager forgiveness for repentant sinners.",
        "Raising Lazarus proves Jesus is the Resurrection and the Life.",
        "Sermon on the Mount elevates internal heart purity above ritual externalism."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "parables-of-jesus",
        "title": "1. Major Parables of Jesus and Moral Applications",
        "modules": [
          {
            "moduleId": "prodigal-samaritan-sower",
            "title": "Prodigal Son, Good Samaritan and Sower",
            "bigIdea": "Jesus taught profound kingdom ethics through relatable stories drawn from daily agricultural and social life.",
            "learnIt": [
              "The Prodigal Son (Luke 15): a rebellious younger son squandered his inheritance in wild living. Destitute, he repented and returned home. His loving father ran to embrace him, celebrating his return. Lesson: God unconditionally welcomes and forgives truly repentant sinners.",
              "The Good Samaritan (Luke 10): a despised Samaritan rescued a wounded traveler ignored by religious temple officials. Lesson: our neighbor is anyone in need regardless of tribe or nationality.",
              "The Sower (Matthew 13): seed sown on good soil produced a 100-fold crop. Lesson: believers must cultivate receptive, obedient hearts to bear moral fruit."
            ],
            "tryThis": {
              "question": "In the Parable of the Prodigal Son, what does the loving father's joyful reception of his returning son symbolize?",
              "choices": ["God's eager mercy and readiness to forgive truly repentant sinners", "Reward for wasting money", "Hatred toward older brothers", "Celebration of famine"],
              "correct": 0,
              "explanation": "The father represents God's boundless grace toward returning prodigals."
            }
          }
        ]
      },
      {
        "subtopicId": "miracles-of-jesus",
        "title": "2. Categories and Significance of Jesus' Miracles",
        "modules": [
          {
            "moduleId": "healing-nature-raising",
            "title": "Healing, Nature Miracles and Raising the Dead",
            "bigIdea": "Miracles confirmed Jesus' divine identity as the Son of God and revealed divine compassion for human suffering.",
            "learnIt": [
              "Healing miracles: restoring sight to blind Bartimaeus, cleansing the ten lepers, healing the paralyzed paralytic lowered through the roof. Revealed compassion and power over physical affliction.",
              "Nature miracles: calming the raging storm on Lake Galilee, walking on water, multiplying five loaves and two fish to feed 5,000. Proved absolute authority over physical laws of nature.",
              "Raising the dead: raising Lazarus of Bethany after four days in the tomb, raising Jairus' daughter, raising the widow of Nain's son. Proved Jesus holds supreme dominion over life and death."
            ],
            "tryThis": {
              "question": "Which nature miracle did Jesus perform on Lake Galilee that caused disciples to exclaim: 'Even the wind and waves obey him!'?",
              "choices": ["Calming a violent raging tempest storm", "Turning water into wine", "Raising Lazarus", "Healing ten lepers"],
              "correct": 0,
              "explanation": "Jesus rebuked the wind and sea saying 'Peace, be still!', demonstrating divine lordship over elements."
            }
          }
        ]
      },
      {
        "subtopicId": "sermon-on-the-mount",
        "title": "3. Sermon on the Mount and the Beatitudes",
        "modules": [
          {
            "moduleId": "beatitudes-new-law",
            "title": "The Beatitudes and Higher Moral Ethics",
            "bigIdea": "The Sermon on the Mount elevates righteousness from mere external rule-keeping to internal holiness of heart.",
            "learnIt": [
              "The Beatitudes (Matthew 5:3-12): 'Blessed are the poor in spirit, for theirs is the kingdom of heaven... Blessed are the meek... Blessed are the merciful... Blessed are the pure in heart... Blessed are the peacemakers, for they will be called children of God.'",
              "Restructuring old societal laws: Jesus taught loving enemies instead of personal revenge ('An eye for an eye'); internal purity avoiding lustful thoughts; absolute truthfulness in speech without swearing oaths; and practicing charity/prayer in secret humility rather than public show-off."
            ],
            "tryThis": {
              "question": "According to the Beatitudes in Matthew 5:9, who shall be called the children of God?",
              "choices": ["The peacemakers", "The warriors", "The wealthy", "The boastful"],
              "correct": 0,
              "explanation": "Peacemakers actively resolve conflicts and reflect God's reconciling character."
            }
          }
        ]
      }
    
      ,{
        "subtopicId": "premium-premium-exam-practice-jesus-teachings",
        "title": "Premium Exam Practice: Jesus' Teachings",
        "modules": [
          {
            "moduleId": "applying-parables-and-miracles",
            "title": "Applying Parables and Miracles",
            "bigIdea": "Questions about Jesus often ask for the meaning or lesson, not only the story.",
            "learnIt": ["Parables are stories Jesus used to teach spiritual and moral lessons.", "Miracles show Jesus' power and compassion for people in need.", "When answering, state the event and the lesson clearly."],
            "workedExample": { "question": "What lesson is taught by the Good Samaritan?", "steps": ["Step 1: Recall that the Samaritan helped an injured stranger.", "Step 2: Identify the lesson: love and help others.", "Step 3: Apply it to all people, not only friends."], "answer": "It teaches Christians to love and help all people, including strangers." },
            "tryThis": { "question": "A parable is:", "choices": ["a story with a moral or spiritual lesson", "a type of tax", "a Roman road", "a musical instrument"], "correct": 0, "explanation": "Jesus used parables to teach lessons." }
          }
        ]
      }],
    "quiz": [
      { "q": "In the Parable of the Sower, what does the seed falling on good fertile soil represent?", "choices": ["People who hear God's Word, understand it, and produce abundant moral fruit", "Birds eating grain", "Thorns choking wheat", "People sleeping in church"], "correct": 0, "why": "Good soil represents sincere receptive believers." },
      { "q": "Which friend of Jesus did He raise from the dead after four days in the tomb at Bethany?", "choices": ["Lazarus", "Zacchaeus", "Nicodemus", "Bartimaeus"], "correct": 0, "why": "Lazarus' resurrection proved Jesus is the Resurrection and the Life." },
      { "q": "What moral principle did Jesus teach regarding personal enemies in the Sermon on the Mount?", "choices": ["Love your enemies and pray for those who persecute you", "Seek immediate physical revenge", "Curse them secretly", "Hire soldiers against them"], "correct": 0, "why": "Jesus replaced retaliation with radical divine love." },
      { "q": "Which miracle demonstrated Jesus' authority over nature by feeding 5,000 men?", "choices": ["Multiplying five barley loaves and two small fish", "Turning water into wine at Cana", "Calming the storm", "Walking on water"], "correct": 0, "why": "Jesus blessed and multiplied a boy's lunch to feed thousands." },
      { "q": "According to the Beatitudes, what blessing is promised to the pure in heart?", "choices": ["They will see God", "They will become kings", "They will never feel hunger", "They will fly"], "correct": 0, "why": "Matthew 5:8 promises divine vision to the pure in heart." },
      { "q": "Why did Jesus perform miracles during His earthly ministry?", "choices": ["To confirm His divine authority as Son of God and show compassion for suffering", "To make money from spectators", "To entertain kings", "To show off magic tricks"], "correct": 0, "why": "Miracles authenticated the Gospel kingdom." },
      { "q": "In the Parable of the Good Samaritan, who bypassed the wounded traveler without helping?", "choices": ["A Jewish Priest and a Levite", "Two Roman soldiers", "A tax collector and a merchant", "Peter and John"], "correct": 0, "why": "Religious officials avoided ritual defilement while the Samaritan showed mercy." },
      { "q": "What does 'Beatitude' mean in Jesus' Sermon on the Mount?", "choices": ["Supreme spiritual blessedness or divine happiness", "A heavy burden", "A court judgment", "A tax notice"], "correct": 0, "why": "Beatitudes describe the joyful blessedness of kingdom citizens." }
    ]
  },
  {
    "id": "cre-passion-resurrection",
    "themeId": "cre-term-2",
    "themeName": "CRE · Term II",
    "title": "Passion, Death, and Resurrection of Christ",
    "estMinutes": 24,
    "status": "published",
    "reviewStatus": "verified",
    "note": {
      "intro": "Why this matters: The Passion Week, Crucifixion, and Easter Resurrection form the theological bedrock of Christian salvation and victory over death.",
      "learningObjectives": [
        "Narrate key events of Passion Week (Palm Sunday, Last Supper, Gethsemane).",
        "Explain the trials before Caiaphas and Pontius Pilate and Peter's denial.",
        "Describe the crucifixion at Golgotha and Jesus' seven last words.",
        "Explain the theological significance of Easter Sunday resurrection."
      ],
      "whatYouNeedToKnow": [
        "At the Last Supper, Jesus instituted Holy Communion representing His body and blood.",
        "Judas betrayed Jesus for 30 pieces of silver; Peter denied Him three times out of fear.",
        "Jesus rose from the dead on Easter Sunday, conquering sin and mortality."
      ],
      "worked": {
        "problem": "Explain why the resurrection of Jesus Christ is considered the cornerstone of Christian faith.",
        "steps": [
          "Proves divinity: authenticated Jesus' claim to be the Son of God.",
          "Conquers death: showed that death is not the end for believers.",
          "Assures salvation: guarantees forgiveness and eternal resurrection for Christians."
        ],
        "answer": "Answer: It proves Jesus' divinity, confirms forgiveness of sins, and guarantees eternal life."
      },
      "recap": [
        "Holy Communion was instituted during Passover Last Supper.",
        "Good Friday marks the crucifixion; Easter celebrates resurrection.",
        "Joseph of Arimathea buried Jesus in a new rock tomb."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "passion-week-events",
        "title": "1. The Passion Week, Last Supper and Betrayal",
        "modules": [
          {
            "moduleId": "last-supper-betrayal",
            "title": "Palm Sunday, Last Supper and Gethsemane Betrayal",
            "bigIdea": "Jesus entered Jerusalem meekly as Savior, instituted the Eucharist, and willingly submitted to betrayal.",
            "learnIt": [
              "Palm Sunday: Jesus entered Jerusalem riding a donkey fulfilling Zechariah's prophecy while crowds waved palm branches shouting 'Hosanna to the Son of David!' Cleansed corrupt money-changers from the temple.",
              "The Last Supper: celebrating Passover in the Upper Room, Jesus washed His disciples' feet demonstrating humble servant leadership. Instituted Holy Communion: broke bread saying 'This is my body', and shared the cup saying 'This is my blood of the new covenant poured out for the forgiveness of sins.'",
              "Betrayal and Denial: Judas Iscariot betrayed Jesus in the Garden of Gethsemane with a kiss for 30 pieces of silver. Peter denied knowing Jesus three times before the rooster crowed, later weeping bitterly in repentance."
            ],
            "tryThis": {
              "question": "During the Last Supper, what powerful lesson in Christian leadership did Jesus demonstrate by washing His disciples' feet?",
              "choices": ["Humble servant leadership and selfless service to others", "How to become wealthy kings", "That hygiene replaces prayer", "How to fight enemies"],
              "correct": 0,
              "explanation": "Jesus declared: 'Whoever wants to be first among you must be the servant of all.'"
            }
          }
        ]
      },
      {
        "subtopicId": "crucifixion-resurrection",
        "title": "2. Trials, Crucifixion at Golgotha and Easter Triumph",
        "modules": [
          {
            "moduleId": "golgotha-easter",
            "title": "Crucifixion, Burial and Resurrection Victory",
            "bigIdea": "Jesus suffered the penalty of human sin on the cross and rose on Easter Sunday offering eternal life.",
            "learnIt": [
              "The Trials: condemned by High Priest Caiaphas and the Sanhedrin for claiming to be God's Son. Roman Governor Pontius Pilate found no guilt in Jesus but washed his hands and surrendered Him to crucifixion to appease the crowd.",
              "The Crucifixion (Good Friday): nailed to a cross at Golgotha (Calvary) between two thieves. Spoke seven last words from the cross including 'Father, forgive them, for they do not know what they are doing' and 'It is finished.' Darkness covered the land; temple curtain tore in two.",
              "Burial and Resurrection (Easter Sunday): buried in a rock tomb by Joseph of Arimathea. On the third day, an angel rolled away the stone; Mary Magdalene found the empty tomb. The risen Jesus appeared to His disciples, commissioning them to preach before His Ascension."
            ],
            "tryThis": {
              "question": "Who requested the body of Jesus from Pontius Pilate and laid it reverently inside his own new rock-hewn tomb?",
              "choices": ["Joseph of Arimathea", "Nicodemus", "Simon of Cyrene", "John the Baptist"],
              "correct": 0,
              "explanation": "Joseph of Arimathea, a wealthy secret disciple, honored Jesus in burial."
            }
          }
        ]
      }
    
      ,{
        "subtopicId": "premium-premium-exam-practice-passion-and-resurrection",
        "title": "Premium Exam Practice: Passion and Resurrection",
        "modules": [
          {
            "moduleId": "meaning-of-jesus-death-and-resurrection",
            "title": "Meaning of Jesus' Death and Resurrection",
            "bigIdea": "Premium CRE answers explain why an event matters to Christians.",
            "learnIt": ["The Passion refers to the suffering and death of Jesus Christ.", "The Resurrection means Jesus rose from the dead.", "Christians believe these events show God's love, forgiveness and victory over sin and death."],
            "workedExample": { "question": "Why is Easter important to Christians?", "steps": ["Step 1: Link Easter to the Resurrection.", "Step 2: Explain its meaning: Jesus rose from the dead.", "Step 3: State why Christians celebrate it."], "answer": "Easter is important because Christians celebrate the Resurrection of Jesus Christ." },
            "tryThis": { "question": "The Resurrection means Jesus:", "choices": ["rose from the dead", "was born in Bethlehem", "entered Jerusalem", "was baptised"], "correct": 0, "explanation": "Resurrection means rising from the dead." }
          }
        ]
      }],
    "quiz": [
      { "q": "On which day did Jesus ride a donkey into Jerusalem while crowds waved palm branches?", "choices": ["Palm Sunday", "Good Friday", "Easter Sunday", "Ascension Day"], "correct": 0, "why": "Palm Sunday marks the triumphal entry." },
      { "q": "For how many pieces of silver did Judas Iscariot betray Jesus to the chief priests?", "choices": ["30 pieces of silver", "100 pieces of gold", "10 pieces of silver", "50 denarii"], "correct": 0, "why": "Judas accepted thirty pieces of silver." },
      { "q": "Which apostle denied knowing Jesus three times before the rooster crowed?", "choices": ["Apostle Peter", "Apostle John", "Apostle Thomas", "Apostle James"], "correct": 0, "why": "Peter denied Christ out of fear but later repented deeply." },
      { "q": "Who was the Roman governor who authorized the crucifixion of Jesus despite finding Him innocent?", "choices": ["Pontius Pilate", "King Herod", "Caiaphas", "Julius Caesar"], "correct": 0, "why": "Pilate surrendered Jesus to crucifixion under crowd pressure." },
      { "q": "Where was Jesus Christ crucified outside Jerusalem?", "choices": ["Golgotha / Calvary", "Mount Sinai", "Mount Tabor", "Capernaum"], "correct": 0, "why": "Golgotha means the Place of the Skull." },
      { "q": "What did Jesus say on the cross seeking pardon for His executioners?", "choices": ["Father, forgive them, for they do not know what they are doing", "Destroy them instantly", "I will return for revenge", "Let them suffer"], "correct": 0, "why": "Jesus modeled ultimate forgiving agape love." },
      { "q": "Who was the first person to discover the empty tomb on Easter Sunday morning?", "choices": ["Mary Magdalene", "Peter", "John", "Thomas"], "correct": 0, "why": "Mary Magdalene encountered the risen Christ near the tomb." },
      { "q": "What happened to the heavy temple curtain when Jesus died on the cross?", "choices": ["It tore in two from top to bottom, symbolizing direct access to God", "It turned gold", "It caught fire", "It flew into the sky"], "correct": 0, "why": "The torn veil symbolized direct access into God's holy presence." }
    ]
  },
  {
    "id": "cre-spirit-church-sacraments",
    "themeId": "cre-term-2",
    "themeName": "CRE · Term II",
    "title": "The Holy Spirit and the Church Today",
    "estMinutes": 22,
    "status": "published",
    "reviewStatus": "verified",
    "note": {
      "intro": "Why this matters: The Holy Spirit birthed the Christian Church at Pentecost, empowering believers with spiritual gifts, moral fruits, and holy sacraments.",
      "learningObjectives": [
        "Explain the events of Pentecost and the birth of the Christian Church.",
        "Distinguish between the Gifts (1 Cor 12) and Fruits (Gal 5) of the Holy Spirit.",
        "Explain the spiritual meaning of Baptism, Holy Communion, and Confirmation."
      ],
      "whatYouNeedToKnow": [
        "Pentecost occurred 50 days after Easter; apostles received boldness and spoke in tongues.",
        "Spiritual Gifts (wisdom, prophecy, healing) empower ministry service; Spiritual Fruits (love, joy, peace) reflect moral holiness.",
        "Confirmation confirms the baptismal covenant, sealing adult church membership."
      ],
      "worked": {
        "problem": "Distinguish between the Gifts of the Holy Spirit and the Fruits of the Holy Spirit.",
        "steps": [
          "Gifts (1 Corinthians 12): supernatural abilities bestowed by God for church service and ministry (e.g., healing, prophecy, speaking in tongues).",
          "Fruits (Galatians 5): moral character traits produced by the Spirit living inside a believer (e.g., love, patience, self-control)."
        ],
        "answer": "Answer: Gifts are supernatural abilities for ministry; Fruits are moral character virtues."
      },
      "recap": [
        "Pentecost marks the birthday of the Christian Church.",
        "Baptism initiates; Holy Communion nourishes; Confirmation strengthens.",
        "Self-control resists examination malpractice and substance abuse."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "pentecost-birth-church",
        "title": "1. Pentecost, Gifts and Fruits of the Holy Spirit",
        "modules": [
          {
            "moduleId": "pentecost-church-birth",
            "title": "Pentecost and Birth of the Church",
            "bigIdea": "The Holy Spirit descended on Pentecost transforming fearful disciples into bold evangelists.",
            "learnIt": [
              "Day of Pentecost (Acts 2): 50 days after Passover, apostles gathered in an upper room in Jerusalem. Sudden sound of rushing mighty wind filled the house; tongues of fire rested on each disciple.",
              "Immediate effects: filled with the Holy Spirit, apostles spoke in diverse foreign languages (tongues) understood by visiting pilgrims. Peter preached boldly, convicting 3,000 sinners who were baptized.",
              "Birth of the Church: Pentecost marks the birthday of the global Christian Church, uniting believers in fellowship, breaking of bread, and prayer."
            ],
            "tryThis": {
              "question": "How many believers were converted and baptized in Jerusalem after Peter's anointed Pentecost sermon?",
              "choices": ["3,000 souls", "12 people", "100 people", "500 souls"],
              "correct": 0,
              "explanation": "Acts 2 records the miraculous conversion of three thousand souls."
            }
          },
          {
            "moduleId": "gifts-vs-fruits",
            "title": "Spiritual Gifts versus Spiritual Fruits",
            "bigIdea": "Spiritual gifts equip Christians for ministry service while spiritual fruits mature their ethical character.",
            "learnIt": [
              "Gifts of the Holy Spirit (1 Corinthians 12): supernatural abilities distributed by the Spirit for the edification of the church. Examples: word of wisdom, knowledge, extraordinary faith, gifts of healing, working miracles, prophecy, distinguishing spirits, speaking in tongues, and interpretation of tongues.",
              "Fruits of the Holy Spirit (Galatians 5:22-23): nine moral character virtues cultivated by the Spirit: Love, Joy, Peace, Patience, Kindness, Goodness, Faithfulness, Gentleness, and Self-control.",
              "Ple application: candidates must exercise self-control to resist exam malpractice and kindness to support weak classmates."
            ],
            "tryThis": {
              "question": "Which of the following belongs to the supernatural Gifts of the Holy Spirit listed in 1 Corinthians 12?",
              "choices": ["Prophecy and gifts of healing", "Anger and pride", "Laziness and fear", "Gossip and envy"],
              "correct": 0,
              "explanation": "Prophecy and healing are divine gifts given to minister to the body of Christ."
            }
          }
        ]
      },
      {
        "subtopicId": "core-sacraments",
        "title": "2. Core Sacraments: Baptism, Eucharist and Confirmation",
        modules: [
          {
            "moduleId": "three-sacraments",
            "title": "Baptism, Holy Communion and Confirmation",
            "bigIdea": "Sacraments are sacred physical rites conferring divine grace and confirming church membership.",
            "learnIt": [
              "Baptism: sacrament of spiritual rebirth using water in the Trinitarian formula (Father, Son, Holy Spirit). Cleanses original sin and admits the candidate into God's family.",
              "Holy Communion (Eucharist): sacred meal instituted by Christ remembering His body broken on the cross (bread) and blood shed for remission of sins (wine/cup).",
              "Confirmation: sacramental rite where a bishop lays hands on a baptized candidate who publicly reaffirms their baptismal vows, receiving the Holy Spirit's strengthening grace for mature Christian discipleship."
            ],
            "tryThis": {
              "question": "During which sacrament does a baptized Christian make a public reaffirmation of faith and receive the laying on of hands by a bishop?",
              "choices": ["Confirmation", "Matrimony", "Ordination", "Anointing of the sick"],
              "correct": 0,
              "explanation": "Confirmation confirms young Christians as mature, responsible adult church members."
            }
          }
        ]
      }
    
      ,{
        "subtopicId": "premium-premium-exam-practice-holy-spirit-and-church",
        "title": "Premium Exam Practice: Holy Spirit and Church",
        "modules": [
          {
            "moduleId": "gifts-fruits-and-sacraments",
            "title": "Gifts, Fruits and Sacraments",
            "bigIdea": "A good answer separates gifts, fruits and sacraments instead of mixing them.",
            "learnIt": ["Gifts of the Holy Spirit are abilities for service, such as wisdom, healing or teaching.", "Fruits of the Holy Spirit are good qualities such as love, joy, peace and kindness.", "Sacraments are outward signs of God's grace, such as Baptism and Holy Communion in many Christian traditions."],
            "workedExample": { "question": "Give two fruits of the Holy Spirit.", "steps": ["Step 1: Remember fruits are character qualities.", "Step 2: Choose examples from the list.", "Step 3: Write them clearly."], "answer": "Love and peace are fruits of the Holy Spirit." },
            "tryThis": { "question": "Which is a fruit of the Holy Spirit?", "choices": ["Kindness", "A tax receipt", "A railway", "A desert"], "correct": 0, "explanation": "Kindness is a Christian character quality." }
          }
        ]
      }],
    "quiz": [
      { "q": "What miraculous physical signs accompanied the descent of the Holy Spirit on Pentecost?", "choices": ["Sound of rushing wind and divided tongues of fire resting on believers", "Solar eclipse and earthquake", "Heavy rain and flood", "Snow falling inside the house"], "correct": 0, "why": "Acts 2 describes wind and tongues of fire." },
      { "q": "Which event is recognized in Christian history as the birthday of the Christian Church?", "choices": ["The Day of Pentecost", "Christmas Day", "Good Friday", "Ascension Day"], "correct": 0, "why": "Pentecost launched worldwide Christian evangelism." },
      { "q": "Which chapter of Galatians lists the nine Fruits of the Holy Spirit?", "choices": ["Galatians 5:22-23", "Matthew 5", "Exodus 20", "Psalm 23"], "correct": 0, "why": "Paul lists the nine spiritual fruits in Galatians 5." },
      { "q": "Which sacrament involves partaking of bread and wine in remembrance of Jesus' death?", "choices": ["Holy Communion / Eucharist", "Baptism", "Confirmation", "Holy Matrimony"], "correct": 0, "why": "Jesus commanded believers to observe the Lord's Supper in remembrance of Him." },
      { "q": "What is the primary distinction between Gifts and Fruits of the Holy Spirit?", "choices": ["Gifts are abilities for church ministry; Fruits are moral character virtues", "Gifts cost money; Fruits are free", "Gifts are for adults; Fruits for children", "There is no difference"], "correct": 0, "why": "Gifts empower service while fruits reflect moral holiness." },
      { "q": "Which fruit of the Holy Spirit enables a P7 candidate to remain calm under difficult examination stress?", "choices": ["Peace / Self-control", "Wealth", "Boasting", "Anger"], "correct": 0, "why": "Divine peace and self-control quiet anxiety." },
      { "q": "What does Christian Baptism symbolize?", "choices": ["Spiritual cleansing from sin and rebirth into God's church family", "Learning how to swim", "Washing clothes", "Graduating from school"], "correct": 0, "why": "Water baptism signifies dying to sin and rising to new life." },
      { "q": "Who preached the bold Pentecost sermon that convinced three thousand people to repent?", "choices": ["Apostle Peter", "Apostle Thomas", "Apostle Andrew", "King Herod"], "correct": 0, "why": "Peter proclaimed the resurrected Christ boldly." }
    ]
  },
  {
    "id": "cre-citizenship-service",
    "themeId": "cre-term-3",
    "themeName": "CRE · Term III",
    "title": "Christian Citizenship and Service",
    "estMinutes": 20,
    "status": "published",
    "reviewStatus": "verified",
    "note": {
      "intro": "Why this matters: True Christian faith manifests through honest civic citizenship, diligent labor combating laziness, and social justice toward the vulnerable.",
      "learningObjectives": [
        "Explain the Christian view of civic leadership and duty to pray for leaders.",
        "Describe the biblical view of honest work against laziness.",
        "Explain how Christians use leisure time constructively.",
        "Demonstrate social justice toward orphans, widows, refugees, and the poor."
      ],
      "whatYouNeedToKnow": [
        "Apostle Paul taught praying for rulers and authorities so society may live in peace (1 Timothy 2:1-2).",
        "Apostle Paul taught: 'The one who is unwilling to work shall not eat' (2 Thessalonians 3:10), condemning laziness.",
        "Christians care for orphans, widows, and refugees following Jesus' teaching in Matthew 25."
      ],
      "worked": {
        "problem": "Explain why Apostle Paul instructed Thessalonian Christians that anyone unwilling to work should not eat.",
        "steps": [
          "Biblical origin: God instituted productive work in the Garden of Eden.",
          "Social problem: some believers stopped working out of laziness, becoming meddlesome burdens on others.",
          "Moral principle: Christians must earn their living honestly through diligent labor and avoid slothfulness."
        ],
        "answer": "Answer: To condemn laziness and encourage honest, productive labor for self-support."
      },
      "recap": [
        "Civic leaders are established by God to maintain justice.",
        "Work is a divine blessing; idleness is a moral failure.",
        "True religion cares for orphans and widows in distress (James 1:27)."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "authority-civic-duty",
        "title": "1. Civic Authority, Leadership and Prayer",
        "modules": [
          {
            "moduleId": "christian-leadership-civic",
            "title": "Christian View of Authority and Civic Obligations",
            "bigIdea": "Christians respect civic leadership, pay national taxes honestly, and intercede for rulers in prayer.",
            "learnIt": [
              "Origin of civil authority: Romans 13:1 teaches that governing authorities are instituted by God to maintain public order and punish evil.",
              "Civic obligations: Christian citizens must obey just national laws, participate peacefully in democratic elections, safeguard public property, and pay taxes faithfully ('Give to Caesar what is Caesar's').",
              "Prayer for leaders: 1 Timothy 2:1-2 commands believers to offer intercessory prayers and thanksgiving for kings and rulers so the nation may experience peace and godliness."
            ],
            "tryThis": {
              "question": "According to 1 Timothy 2:1-2, why should Christians intercede in prayer for national rulers and civil authorities?",
              "choices": ["So that citizens may live peaceful, quiet, and godly lives in dignity", "To get free government money", "So rulers will eliminate school exams", "To make soldiers abandon their posts"],
              "correct": 0,
              "explanation": "Praying for leaders fosters national stability and righteous governance."
            }
          }
        ]
      },
      {
        "subtopicId": "work-leisure-justice",
        "title": "2. Work, Leisure and Social Justice",
        modules: [
          {
            "moduleId": "work-combating-laziness",
            "title": "Biblical View of Work and Constructive Leisure",
            "bigIdea": "Honest work glorifies God and combats laziness, while leisure time should be used for renewal and charity.",
            "learnIt": [
              "Dignity of work: God created work when He placed Adam in Eden to tend the garden. Jesus worked as a carpenter in Nazareth.",
              "Combating laziness (sloth): 2 Thessalonians 3:10 warns: 'The one who is unwilling to work shall not eat.' Laziness leads to poverty, theft, and gossip. Christians work diligently to provide for families and give to the needy.",
              "Proper use of leisure: leisure is free time after work. Constructive leisure: visiting the sick, singing in church choirs, reading scriptures, and participating in sports. Destructive leisure: drug abuse, gambling, and bad company."
            ],
            "tryThis": {
              "question": "Which New Testament verse warns against laziness by declaring that anyone unwilling to work should not eat?",
              "choices": ["2 Thessalonians 3:10", "John 3:16", "Genesis 1:1", "Psalm 23:1"],
              "correct": 0,
              "explanation": "Apostle Paul established hard work as a non-negotiable Christian discipline."
            }
          },
          {
            "moduleId": "social-justice-vulnerable",
            "title": "Social Justice toward Vulnerable Groups",
            "bigIdea": "Pure religion requires showing active Christian charity to orphans, widows, refugees, and the poor.",
            "learnIt": [
              "James 1:27 defines pure religion: 'Religion that God our Father accepts as pure and faultless is this: to look after orphans and widows in their distress and to keep oneself from being polluted by the world.'",
              "Serving vulnerable groups: Orphans (children without parents), Widows/Widowers, Refugees fleeing conflict, and the sick. Christians serve them by sharing food, paying tuition, and defending their legal rights against exploitation."
            ],
            "tryThis": {
              "question": "According to James 1:27, what two actions define pure and faultless religion before God?",
              "choices": ["Looking after orphans/widows in distress and keeping oneself morally unpolluted by the world", "Wearing expensive robes and fasting every day", "Building tall fences and gathering wealth", "Singing loudly while ignoring the poor"],
              "correct": 0,
              "explanation": "True religion unites active social compassion with moral purity."
            }
          }
        ]
      }
    
      ,{
        "subtopicId": "premium-premium-exam-practice-christian-citizenship",
        "title": "Premium Exam Practice: Christian Citizenship",
        "modules": [
          {
            "moduleId": "serving-god-and-community",
            "title": "Serving God and Community",
            "bigIdea": "Christian citizenship connects faith to responsible behaviour in society.",
            "learnIt": ["Christians are encouraged to obey just laws, work honestly and serve people in need.", "Service may include helping orphans, widows, refugees, the sick and poor people.", "Good answers give practical actions, not only general words."],
            "workedExample": { "question": "How can a Christian learner serve the community?", "steps": ["Step 1: Choose a practical service action.", "Step 2: Connect it to helping others.", "Step 3: State it clearly."], "answer": "A learner can serve the community by joining a clean-up activity or helping needy people." },
            "tryThis": { "question": "Which action shows good citizenship?", "choices": ["Obeying just laws", "Destroying public property", "Cheating in exams", "Refusing to help anyone"], "correct": 0, "explanation": "Good citizens respect just laws and public property." }
          }
        ]
      }],
    "quiz": [
      { "q": "What rule did Apostle Paul establish in 2 Thessalonians 3:10 regarding work and laziness?", "choices": ["The one who is unwilling to work shall not eat", "Lazy people should receive extra money", "Work is a curse", "Only farmers should work"], "correct": 0, "why": "Paul condemned idleness and commanded diligent self-support." },
      { "q": "According to James 1:27, what constitutes pure and faultless religion before God?", "choices": ["Caring for orphans and widows in distress and remaining morally uncorrupted", "Giving long public speeches", "Paying money to judges", "Never leaving church"], "correct": 0, "why": "Pure religion balances social compassion with personal holiness." },
      { "q": "Why are Christians instructed in Romans 13 to obey lawful civil authorities?", "choices": ["Because governing authorities are instituted by God to maintain public peace and justice", "Because politicians are angels", "To avoid going to school", "Because laws never change"], "correct": 0, "why": "God establishes civil order to prevent lawlessness." },
      { "q": "Which activity represents a constructive, Christian use of leisure time after school?", "choices": ["Visiting sick neighbors or participating in church choir practice", "Gambling and drinking alcohol", "Engaging in street fights", "Vandalizing school desks"], "correct": 0, "why": "Constructive leisure refreshes spirit and builds community." },
      { "q": "What is a Christian's responsibility toward refugees who have fled war into Uganda?", "choices": ["Show hospitality, share food/supplies, and treat them with Christian love", "Mock their foreign language", "Chase them away", "Take their property"], "correct": 0, "why": "Biblical ethics require loving strangers and refugees as neighbors." },
      { "q": "Why did Jesus work as a carpenter in Nazareth before starting His public ministry?", "choices": ["To demonstrate the dignity and holiness of honest manual labor", "Because He could not speak", "To build royal palaces", "Because carpentry is easy"], "correct": 0, "why": "Jesus sanctified human labor by His personal example." },
      { "q": "What should a Christian citizen do when national elections are organized?", "choices": ["Participate peacefully and vote for honest, moral leaders without election violence", "Destroy ballot boxes", "Accept bribes to vote for corrupt candidates", "Run away into the forest"], "correct": 0, "why": "Voting responsibly fulfills godly civic duty." },
      { "q": "Why should Christians pray regularly for the President, Ministers, and local leaders?", "choices": ["So that rulers govern justly and the nation experiences peace and godliness", "To receive personal political appointments", "To make rulers stop tax collection", "To force leaders to resign"], "correct": 0, "why": "Intercessory prayer invites divine wisdom into national governance." }
    ]
  }
];

export const CRE_TOPICS: Topic[] = balanceTopicAnswers(addUpperPrimaryReV4(CRE_TOPICS_DATA, "P7", P7_RE_TERMS));

const IRE_TOPICS_DATA: Topic[] = [
  {
    "id": "ire-tawhid-iman",
    "themeId": "ire-term-1",
    "themeName": "IRE · Term I",
    "title": "Belief in Allah (Tawhid) and Articles of Faith (Iman)",
    "estMinutes": 22,
    "status": "published",
    "reviewStatus": "verified",
    "note": {
      "intro": "Why this matters: Tawhid (absolute Oneness of Allah) and the six Pillars of Iman form the core theological foundation of Islamic Religious Education in PLE.",
      "learningObjectives": [
        "Explain the concept of Tawhid (Oneness of Allah) and Surah Al-Ikhlas.",
        "List and explain selected attributes and Names of Allah (Asma-ul-Husna).",
        "State and describe the six Pillars of Iman (Articles of Faith).",
        "Name the major Angels and holy revealed Books in Islam."
      ],
      "whatYouNeedToKnow": [
        "Tawhid is believing Allah is One, unique, without partner or equal.",
        "The 6 Pillars of Iman: Belief in Allah, His Angels, His Books, His Messengers, the Day of Judgment, and Divine Decree (Qadar).",
        "Angel Jibril brought revelations; holy Qur'an was revealed to Prophet Muhammad (PBUH)."
      ],
      "worked": {
        "problem": "Match the four holy revealed books in Islam to the exact Prophets who received them.",
        "steps": [
          "Tawrat (Torah) -> revealed to Prophet Musa (Moses).",
          "Zabur (Psalms) -> revealed to Prophet Dawud (David).",
          "Injeel (Gospel) -> revealed to Prophet Isa (Jesus).",
          "Qur'an -> revealed to Prophet Muhammad (PBUH)."
        ],
        "answer": "Answer: Tawrat to Musa, Zabur to Dawud, Injeel to Isa, and Qur'an to Muhammad (PBUH)."
      },
      "recap": [
        "Surah Al-Ikhlas declares absolute monotheism.",
        "Ar-Rahman = The Most Merciful; Ar-Rahim = The Most Compassionate.",
        "Iman means steadfast sincere faith in heart, word, and deed."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "tawhid-attributes",
        "title": "1. Tawhid and the Names of Allah",
        "modules": [
          {
            "moduleId": "tawhid-surah-ikhlas",
            "title": "Tawhid and Surah Al-Ikhlas",
            "bigIdea": "Tawhid is the absolute belief in the indivisible Oneness of Allah as declared in Surah Al-Ikhlas.",
            "learnIt": [
              "Tawhid means monotheism: declaring that Allah is One, supreme, eternal, and has no parents, children, or partners.",
              "Surah Al-Ikhlas (Chapter 112): 'Say: He is Allah, the One and Only; Allah, the Eternal, Absolute; He begets not, nor is He begotten; And there is none like unto Him.'",
              "Shirk: associating partners or idols with Allah. Shirk is the unforgivable sin in Islam if unrepented."
            ],
            "tryThis": {
              "question": "Which short Surah of the Holy Qur'an is dedicated entirely to explaining the absolute Oneness of Allah (Tawhid)?",
              "choices": ["Surah Al-Fatiha", "Surah Al-Ikhlas", "Surah Al-Falaq", "Surah An-Nas"],
              "correct": 1,
              "explanation": "Surah Al-Ikhlas encapsulates pure monotheism."
            }
          }
        ]
      },
      {
        "subtopicId": "six-pillars-iman",
        "title": "2. The Six Articles of Faith (Iman)",
        "modules": [
          {
            "moduleId": "angels-books-prophets",
            "title": "Angels, Holy Books and Messengers",
            "bigIdea": "Allah communicates His guidance through sinless Angels delivering Holy Books to chosen Prophets.",
            "learnIt": [
              "Belief in Angels (Malaika): created from pure light (Nur), sinless, obeying Allah constantly. Key Angels: Jibril (brought revelation to Prophets); Mikail (distributes rain and sustenance); Izrail (takes souls at death); Israfil (will blow the trumpet on Day of Judgment).",
              "Belief in Holy Books: Tawrat (Musa), Zabur (Dawud), Injeel (Isa), and Qur'an (Muhammad PBUH—the final preserved revelation).",
              "Belief in Messengers/Prophets: 25 Prophets named in Qur'an starting with Adam and ending with Muhammad (PBUH) as the Seal of the Prophets (Khatam an-Nabiyyin)."
            ],
            "tryThis": {
              "question": "Which Archangel was entrusted by Allah with delivering divine revelations to Prophet Muhammad (PBUH)?",
              "choices": ["Angel Mikail", "Angel Jibril (Gabriel)", "Angel Israfil", "Angel Izrail"],
              "correct": 1,
              "explanation": "Angel Jibril delivered the Qur'anic verses over 23 years."
            }
          }
        ]
      }
    
      ,{
        "subtopicId": "premium-premium-exam-practice-tawheed-and-iman",
        "title": "Premium Exam Practice: Tawheed and Iman",
        "modules": [
          {
            "moduleId": "explaining-belief-clearly",
            "title": "Explaining Belief Clearly",
            "bigIdea": "IRE answers should define beliefs respectfully and connect them to Muslim life.",
            "learnIt": ["Tawheed means belief in the oneness of Allah.", "Iman includes belief in Allah, angels, holy books, prophets, the Last Day and Qadar.", "A strong answer gives the definition and one way the belief guides behaviour."],
            "workedExample": { "question": "What is Tawheed?", "steps": ["Step 1: Identify Tawheed as a belief.", "Step 2: State that Allah is One.", "Step 3: Avoid adding unrelated ideas."], "answer": "Tawheed is belief in the oneness of Allah." },
            "tryThis": { "question": "How many pillars of Iman are commonly taught?", "choices": ["Six", "Five", "Seven", "Two"], "correct": 0, "explanation": "The six pillars of Iman are commonly taught in IRE." }
          }
        ]
      }],
    "quiz": [
      { "q": "What does the Arabic term 'Tawhid' mean?", "choices": ["Belief in the absolute Oneness of Allah", "Fasting in Ramadan", "Giving alms", "Making pilgrimage"], "correct": 0, "why": "Tawhid is Islamic monotheism." },
      { "q": "Which holy book was revealed to Prophet Musa (Moses)?", "choices": ["Tawrat", "Zabur", "Injeel", "Qur'an"], "correct": 0, "why": "Musa received the Tawrat." },
      { "q": "Which Angel is responsible for blowing the trumpet to signal the Day of Judgment?", "choices": ["Israfil", "Jibril", "Mikail", "Izrail"], "correct": 0, "why": "Angel Israfil blows the trumpet." },
      { "q": "How many total Pillars of Faith (Iman) exist in Islam?", "choices": ["Six pillars", "Five pillars", "Seven pillars", "Four pillars"], "correct": 0, "why": "There are 6 Articles of Iman." },
      { "q": "Who is recognized in Islam as the Seal of the Prophets (final prophet)?", "choices": ["Prophet Muhammad (PBUH)", "Prophet Isa", "Prophet Ibrahim", "Prophet Adam"], "correct": 0, "why": "Muhammad (PBUH) concluded prophetic revelation." },
      { "q": "What is the unforgivable sin of associating partners with Allah called?", "choices": ["Shirk", "Tawhid", "Zakat", "Wudhu"], "correct": 0, "why": "Shirk contradicts pure monotheism." },
      { "q": "What are Angels created from according to Islamic teaching?", "choices": ["Pure divine light (Nur)", "Clay", "Smokeless fire", "Water"], "correct": 0, "why": "Angels are beings of light." },
      { "q": "Which holy book was revealed to Prophet Dawud (David)?", "choices": ["Zabur (Psalms)", "Injeel", "Tawrat", "Qur'an"], "correct": 0, "why": "Dawud received the Zabur." }
    ]
  },
  {
    "id": "ire-pillars-ibadah",
    "themeId": "ire-term-1",
    "themeName": "IRE · Term I",
    "title": "The Five Pillars of Islam (Ibadah / Worship)",
    "estMinutes": 24,
    "status": "published",
    "reviewStatus": "verified",
    "note": {
      "intro": "Why this matters: The Five Pillars of Islam are obligatory acts of worship (Ibadah) structuring Muslim daily life and spiritual discipline.",
      "learningObjectives": [
        "State and recite the Shahadah (Declaration of Faith).",
        "List the 5 daily obligatory prayers (Salah) and explain Wudhu ablution steps.",
        "Explain Zakat alms-giving and benefits of purifying wealth.",
        "Describe Sawm (Ramadan fasting) and Hajj pilgrimage to Mecca."
      ],
      "whatYouNeedToKnow": [
        "The 5 Pillars: Shahadah (Faith), Salah (5 daily prayers), Zakat (Charity 2.5%), Sawm (Fasting Ramadan), Hajj (Mecca Pilgrimage).",
        "Wudhu ritual ablution is mandatory before performing Salah.",
        "Sawm builds self-discipline and Taqwa (God-consciousness)."
      ],
      "worked": {
        "problem": "List the five obligatory daily prayers (Salah) in their correct chronological time order.",
        "steps": [
          "1) Fajr -> dawn / early morning prayer before sunrise (2 Rakaats).",
          "2) Dhuhr -> early afternoon prayer immediately after midday (4 Rakaats).",
          "3) Asr -> late afternoon prayer (4 Rakaats).",
          "4) Maghrib -> evening prayer immediately after sunset (3 Rakaats).",
          "5) Isha -> night prayer (4 Rakaats)."
        ],
        "answer": "Answer: Fajr, Dhuhr, Asr, Maghrib, and Isha."
      },
      "recap": [
        "Shahadah: La ilaha illa Allah Muhammad Rasulullah.",
        "Zakat purifies wealth and assists orphans and the needy.",
        "Ramadan fasting lasts from dawn (Fajr) to sunset (Maghrib)."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "shahadah-salah",
        "title": "1. Shahadah and Daily Salah (Prayer)",
        "modules": [
          {
            "moduleId": "five-pillars-overview",
            "title": "Overview of Five Pillars and Wudhu",
            "bigIdea": "Obligatory worship begins with declaring faith and performing ablution before facing Mecca for prayer.",
            "learnIt": [
              "Shahadah: 'I bear witness that there is no deity worthy of worship except Allah, and Muhammad is His messenger.'",
              "Wudhu (Ablution): ritual washing before prayer. Steps: wash hands, rinse mouth/nose, wash face, wash arms to elbows, wipe wet hands over head/ears, wash feet up to ankles.",
              "Qibla: Muslims face towards the Kaaba in Mecca during all prayers."
            ],
            "tryThis": {
              "question": "What ritual ablution must a Muslim perform to purify themselves before observing daily Salah?",
              "choices": ["Hajj", "Wudhu", "Zakat", "Sawm"],
              "correct": 1,
              "explanation": "Wudhu cleanses physical body parts before entering prayer."
            }
          }
        ]
      },
      {
        "subtopicId": "zakat-sawm-hajj",
        "title": "2. Zakat, Sawm (Fasting) and Hajj",
        "modules": [
          {
            "moduleId": "zakat-ramadan-hajj",
            "title": "Charity, Ramadan Fasting and Mecca Pilgrimage",
            "bigIdea": "Fasting and alms-giving cultivate self-restraint and compassion, while Hajj unites global Muslims.",
            "learnIt": [
              "Zakat: obligatory giving of 2.5% of annual savings to the poor, orphans, travelers, and widows. Purifies remaining wealth against greed.",
              "Sawm: obligatory fasting during the 9th lunar month of Ramadan from dawn break until sunset, abstaining from food, drink, and bad speech to attain Taqwa.",
              "Hajj: annual pilgrimage to Mecca during Dhul-Hijjah required once in a lifetime for those physically and financially capable."
            ],
            "tryThis": {
              "question": "During which holy lunar month do Muslims worldwide observe obligatory fasting from dawn until sunset?",
              "choices": ["Muharram", "Ramadan", "Shawwal", "Rajab"],
              "correct": 1,
              "explanation": "Ramadan is the 9th month when the Qur'an began to be revealed."
            }
          }
        ]
      }
    
      ,{
        "subtopicId": "premium-premium-exam-practice-pillars-and-worship",
        "title": "Premium Exam Practice: Pillars and Worship",
        "modules": [
          {
            "moduleId": "applying-the-five-pillars",
            "title": "Applying the Five Pillars",
            "bigIdea": "A strong IRE answer names the pillar and explains its practice.",
            "learnIt": ["The Five Pillars are Shahadah, Salah, Zakah, Sawm and Hajj.", "Salah is prayer performed at prescribed times.", "Zakah is obligatory giving to help eligible people and purify wealth."],
            "workedExample": { "question": "Why is Zakah important?", "steps": ["Step 1: Identify Zakah as obligatory giving.", "Step 2: Explain that it helps needy people.", "Step 3: Mention purification of wealth if relevant."], "answer": "Zakah is important because it helps needy people and purifies wealth." },
            "tryThis": { "question": "Which pillar means fasting in Ramadan?", "choices": ["Sawm", "Hajj", "Zakah", "Shahadah"], "correct": 0, "explanation": "Sawm is fasting, especially in Ramadan." }
          }
        ]
      }],
    "quiz": [
      { "q": "What is the declaration of faith in Islam called?", "choices": ["Shahadah", "Salah", "Zakat", "Hajj"], "correct": 0, "why": "Shahadah declares belief in Allah and His Messenger." },
      { "q": "Which obligatory prayer is performed early in the morning before sunrise?", "choices": ["Fajr", "Dhuhr", "Asr", "Maghrib"], "correct": 0, "why": "Fajr is the dawn prayer." },
      { "q": "What percentage of eligible annual wealth is distributed as Zakat in Islam?", "choices": ["2.5%", "10%", "50%", "5%"], "correct": 0, "why": "Zakat is fixed at 2.5% of qualifying savings." },
      { "q": "Which direction (Qibla) do Muslims face when offering daily prayers?", "choices": ["Towards the Kaaba in Mecca", "Towards Jerusalem", "Towards Cairo", "Towards Medina"], "correct": 0, "why": "The Kaaba in Mecca is the universal Qibla." },
      { "q": "What ritual purification must precede Islamic prayer?", "choices": ["Wudhu (Ablution)", "Sawm", "Zakat", "Hijrah"], "correct": 0, "why": "Wudhu ensures ritual cleanliness." },
      { "q": "Which obligatory prayer is observed immediately after sunset?", "choices": ["Maghrib", "Fajr", "Isha", "Dhuhr"], "correct": 0, "why": "Maghrib is prayed at dusk." },
      { "q": "What spiritual benefit is gained through observing Sawm during Ramadan?", "choices": ["Attaining Taqwa (God-consciousness and self-discipline)", "Earning physical trophies", "Avoiding work", "Traveling abroad"], "correct": 0, "why": "Fasting builds moral patience and empathy." },
      { "q": "Where does the annual Hajj pilgrimage take place?", "choices": ["Mecca", "Medina", "Jerusalem", "Damascus"], "correct": 0, "why": "Hajj centers around holy sites in Mecca." }
    ]
  },
  {
    "id": "ire-quran-hadith",
    "themeId": "ire-term-2",
    "themeName": "IRE · Term II",
    "title": "The Holy Qur'an and Hadith Guidance",
    "estMinutes": 20,
    "status": "published",
    "reviewStatus": "verified",
    "note": {
      "intro": "Why this matters: The Qur'an and authentic Hadiths provide divine and prophetic guidance for moral behavior, worship, and social ethics.",
      "learningObjectives": [
        "Explain the structure of the Qur'an (114 Surahs revealed over 23 years).",
        "Recite and explain moral lessons of Surah Al-Fatiha and Surah Al-Ma'un.",
        "Define Hadith and Sunnah of Prophet Muhammad (PBUH).",
        "Apply prophetic teachings on truthfulness, cleanliness, and kindness to parents."
      ],
      "whatYouNeedToKnow": [
        "The Qur'an contains 114 Surahs revealed via Angel Jibril over 23 years.",
        "Surah Al-Ma'un warns against neglecting orphans and showing off in prayer.",
        "Hadith records the sayings and actions of Prophet Muhammad (PBUH)."
      ],
      "worked": {
        "problem": "According to Surah Al-Ma'un, state two bad behaviors condemned by Allah.",
        "steps": [
          "Behavior 1: driving away or mistreating orphans harshly.",
          "Behavior 2: being heedless/lazy in performing prayers just to show off to people."
        ],
        "answer": "Answer: Mistreating orphans and praying hypocritically to show off."
      },
      "recap": [
        "Surah Al-Fatiha is the Opening chapter recited in every Salah rakaat.",
        "Cleanliness is half of faith (Iman) according to Hadith.",
        "Truthfulness leads to righteousness and Paradise."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "quran-surahs",
        "title": "1. Selected Surahs and Moral Lessons",
        "modules": [
          {
            "moduleId": "fatiha-maun",
            "title": "Surah Al-Fatiha and Surah Al-Ma'un",
            "bigIdea": "Qur'anic chapters praise Allah's mercy and instruct believers to care for the vulnerable.",
            "learnIt": [
              "Surah Al-Fatiha (The Opening): 7 verses reciting praise to the Lord of all worlds, requesting guidance along the straight path (Sirat al-Mustaqim).",
              "Surah Al-Ma'un (Small Kindness): condemns those who deny judgment day, repel orphans, refuse to feed the hungry, and pray hypocritically."
            ],
            "tryThis": {
              "question": "Which Surah of the Qur'an warns against driving away orphans and neglecting to feed the needy?",
              "choices": ["Surah Al-Ma'un", "Surah Al-Ikhlas", "Surah Al-Falaq", "Surah Al-Kawthar"],
              "correct": 0,
              "explanation": "Surah Al-Ma'un emphasizes social justice and sincere charity."
            }
          }
        ]
      },
      {
        "subtopicId": "hadith-teachings",
        "title": "2. Prophetic Hadith and Sunnah",
        "modules": [
          {
            "moduleId": "hadith-morals",
            "title": "Hadith on Truthfulness and Cleanliness",
            "bigIdea": "Prophet Muhammad (PBUH) taught that truthfulness leads to Paradise and cleanliness is half of faith.",
            "learnIt": [
              "Hadith vs Sunnah: Hadith is the written record of sayings of Prophet Muhammad (PBUH); Sunnah refers to His daily habits and practices.",
              "Hadith on Truthfulness: 'Adhere to truthfulness, for truthfulness leads to righteousness, and righteousness leads to Paradise.'",
              "Hadith on Cleanliness: 'Cleanliness (Taharah) is half of faith.' Muslims must keep clothes, bodies, school compounds, and food clean."
            ],
            "tryThis": {
              "question": "According to the famous Hadith of Prophet Muhammad (PBUH), cleanliness is considered half of what?",
              "choices": ["Half of wealth", "Half of faith (Iman)", "Half of knowledge", "Half of prayer"],
              "correct": 1,
              "explanation": "Prophet Muhammad (PBUH) elevated physical and spiritual purity to half of Islamic faith."
            }
          }
        ]
      }
    
      ,{
        "subtopicId": "premium-premium-exam-practice-qur-an-and-guidance",
        "title": "Premium Exam Practice: Qur'an and Guidance",
        "modules": [
          {
            "moduleId": "respecting-and-using-the-qur-an",
            "title": "Respecting and Using the Qur'an",
            "bigIdea": "Questions about the Qur'an should connect revelation, guidance and respect.",
            "learnIt": ["The Qur'an is the holy book of Islam revealed to Prophet Muhammad through Angel Jibril.", "Muslims use the Qur'an for guidance in worship, morals and daily life.", "Respect for the Qur'an includes cleanliness, careful handling and recitation with attention."],
            "workedExample": { "question": "How does the Qur'an guide Muslims?", "steps": ["Step 1: State that it is a holy book.", "Step 2: Mention worship or daily behaviour.", "Step 3: Write a full sentence."], "answer": "The Qur'an guides Muslims in worship, morals and daily life." },
            "tryThis": { "question": "Who brought revelation to Prophet Muhammad?", "choices": ["Angel Jibril", "Pharaoh", "Caesar", "A tax collector"], "correct": 0, "explanation": "Angel Jibril brought revelation to Prophet Muhammad." }
          }
        ]
      }],
    "quiz": [
      { "q": "How many total Surahs (chapters) are in the Holy Qur'an?", "choices": ["114 Surahs", "66 Surahs", "30 Surahs", "99 Surahs"], "correct": 0, "why": "The Qur'an comprises exactly 114 Surahs." },
      { "q": "Which chapter of the Qur'an is known as 'The Opening' and recited in every prayer?", "choices": ["Surah Al-Fatiha", "Surah Al-Ikhlas", "Surah Al-Baqarah", "Surah Yasin"], "correct": 0, "why": "Al-Fatiha opens the Qur'an." },
      { "q": "What term describes the recorded sayings of Prophet Muhammad (PBUH)?", "choices": ["Hadith", "Sunnah", "Qur'an", "Tawrat"], "correct": 0, "why": "Hadiths preserve prophetic sayings." },
      { "q": "According to Surah Al-Ma'un, how should Christians and Muslims treat orphans?", "choices": ["With kindness, generosity, and protection", "By driving them away", "By ignoring them", "By taking their property"], "correct": 0, "why": "Islam strictly forbids mistreating orphans." },
      { "q": "Over how many years was the Holy Qur'an revealed to Prophet Muhammad (PBUH)?", "choices": ["23 years", "10 years", "40 years", "7 days"], "correct": 0, "why": "Revelations occurred piecemeal over 23 years in Mecca and Medina." },
      { "q": "What does the Hadith teach about truthfulness?", "choices": ["Truthfulness leads to righteousness and Paradise", "Telling lies is acceptable in exams", "Truth makes people poor", "Silence is better than truth"], "correct": 0, "why": "Truthfulness is a pillar of moral character." },
      { "q": "What does 'Sunnah' mean in Islamic teachings?", "choices": ["The daily practices and exemplary actions of Prophet Muhammad (PBUH)", "A holy mountain", "A prayer carpet", "Fasting month"], "correct": 0, "why": "Sunnah models prophetic lifestyle." },
      { "q": "Which Archangel delivered the Qur'anic verses from Allah to the Prophet?", "choices": ["Angel Jibril", "Angel Mikail", "Angel Israfil", "Angel Izrail"], "correct": 0, "why": "Jibril is the angel of divine revelation." }
    ]
  },
  {
    "id": "ire-akhlaq-morals",
    "themeId": "ire-term-2",
    "themeName": "IRE · Term II",
    "title": "Islamic Morals, Ethics and Social Relations (Akhlaq)",
    "estMinutes": 22,
    "status": "published",
    "reviewStatus": "verified",
    "note": {
      "intro": "Why this matters: Akhlaq (good character) governs respectful relationships with parents, neighbors, and society while avoiding forbidden sins.",
      "learningObjectives": [
        "Explain Islamic teachings on respecting parents, elders, and neighbors.",
        "Describe Islamic brotherhood (Ummah) and modesty in dress code.",
        "Identify forbidden acts (Haram): gambling, alcohol, theft, bribery, and backbiting (Gheebah)."
      ],
      "whatYouNeedToKnow": [
        "Paradise lies under the feet of mothers according to Hadith.",
        "Haram acts (alcohol, gambling, corruption, backbiting) destroy personal health and social harmony."
      ],
      "worked": {
        "problem": "Explain why backbiting (Gheebah) is strictly condemned in Islamic moral ethics.",
        "steps": [
          "Define Gheebah: speaking ill of a brother or sister behind their back.",
          "Qur'anic comparison: Qur'an compares backbiting to eating the flesh of one's dead brother (Surah Al-Hujurat 49:12).",
          "Social impact: causes hatred, suspicion, and destroys community unity."
        ],
        "answer": "Answer: Backbiting destroys brotherhood and is likened to eating a dead brother's flesh."
      },
      "recap": [
        "Treat neighbors kindly regardless of their religion.",
        "Intoxicants and gambling are tools of Satan creating enmity.",
        "Modesty applies to speech, dress, and conduct."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "respect-parents-neighbors",
        "title": "1. Respect for Parents, Elders and Neighbors",
        "modules": [
          {
            "moduleId": "honoring-parents",
            "title": "Honoring Parents and Social Brotherhood",
            "bigIdea": "Kindness to parents (Birr al-Walidayn) is second only to worshiping Allah alone.",
            "learnIt": [
              "Qur'an command: 'Worship Allah and associate nothing with Him, and to parents do good' (Surah An-Nisa 4:36). Never speak words of disrespect like 'Uff' to them.",
              "Hadith on mothers: Prophet Muhammad (PBUH) stated three times that a mother deserves highest companion care, adding 'Paradise lies under the feet of mothers.'",
              "Neighborly rights: Angel Jibril emphasized treating neighbors so kindly that Prophet thought neighbors might inherit property."
            ],
            "tryThis": {
              "question": "According to the Hadith of Prophet Muhammad (PBUH), under whose feet does Paradise lie?",
              "choices": ["Under the feet of kings", "Under the feet of mothers", "Under the feet of wealthy merchants", "Under the feet of warriors"],
              "correct": 1,
              "explanation": "Mothers undergo immense sacrifice during childbirth and upbringing, earning supreme honor."
            }
          }
        ]
      },
      {
        "subtopicId": "haram-sins",
        "title": "2. Overcoming Forbidden Acts (Haram)",
        "modules": [
          {
            "moduleId": "avoiding-intoxicants-gambling",
            "title": "Avoiding Intoxicants, Gambling and Corruption",
            "bigIdea": "Alcohol, drugs, gambling, and corruption corrupt the mind and ruin community trust.",
            "learnIt": [
              "Intoxicants (Khamr): alcohol, drugs, and mairungi are strictly Haram because they impair rational reasoning and lead to domestic violence.",
              "Gambling (Maisir) and Bribery (Rishwah): earn money unjustly without honest labor. Prophet cursed both the giver and taker of bribes.",
              "Backbiting (Gheebah): gossiping about people behind their backs creates enmity and division."
            ],
            "tryThis": {
              "question": "In Surah Al-Hujurat (49:12), backbiting (gossiping behind someone's back) is compared to which abhorrent act?",
              "choices": ["Eating the flesh of one's dead brother", "Stealing gold from a temple", "Burning a green forest", "Sleeping during daytime"],
              "correct": 0,
              "explanation": "The strong metaphor highlights how cowardly and destructive backbiting is to human dignity."
            }
          }
        ]
      }
    
      ,{
        "subtopicId": "premium-premium-exam-practice-akhlaq",
        "title": "Premium Exam Practice: Akhlaq",
        "modules": [
          {
            "moduleId": "good-character-in-daily-life",
            "title": "Good Character in Daily Life",
            "bigIdea": "Akhlaq answers should give practical examples of good Muslim conduct.",
            "learnIt": ["Akhlaq means good character or moral behaviour.", "Examples include truthfulness, respect for parents, cleanliness, kindness and honesty in trade.", "A strong answer shows how the value is practised at home, school or community."],
            "workedExample": { "question": "Give one way a Muslim learner can show honesty at school.", "steps": ["Step 1: Choose a school situation.", "Step 2: Connect it to honesty.", "Step 3: Write the action clearly."], "answer": "A learner can show honesty by refusing to cheat in examinations." },
            "tryThis": { "question": "Which behaviour shows good Akhlaq?", "choices": ["Telling the truth", "Stealing", "Mocking parents", "Cheating customers"], "correct": 0, "explanation": "Truthfulness is part of good character." }
          }
        ]
      }],
    "quiz": [
      { "q": "Under whose feet does Hadith say Paradise lies?", "choices": ["Mothers", "Kings", "Soldiers", "Traders"], "correct": 0, "why": "Mothers receive supreme honor for nurturing children." },
      { "q": "What term refers to forbidden or unlawful acts in Islam?", "choices": ["Haram", "Halal", "Sunnah", "Wudhu"], "correct": 0, "why": "Haram designates actions prohibited by Allah." },
      { "q": "Why is alcohol (Khamr) strictly forbidden in Islamic ethics?", "choices": ["It impairs human reasoning, harms health, and causes social violence", "It is too sweet", "It is expensive", "It makes water boil"], "correct": 0, "why": "Intoxicants destroy rational control and spiritual devotion." },
      { "q": "What is the Islamic term for speaking ill of someone behind their back?", "choices": ["Gheebah (Backbiting)", "Tawhid", "Zakat", "Salam"], "correct": 0, "why": "Gheebah destroys social unity." },
      { "q": "How should a Muslim treat a non-Muslim neighbor?", "choices": ["With kindness, respect, protection, and generosity", "With hostility", "By ignoring them", "By damaging their fence"], "correct": 0, "why": "Neighborly rights apply universally without religious prejudice." },
      { "q": "What does Islamic brotherhood (Ummah) emphasize?", "choices": ["All believers are brothers united in faith regardless of race or tribe", "Tribal superiority", "Wealth division", "Fighting neighbors"], "correct": 0, "why": "The Ummah transcends ethnic boundaries." },
      { "q": "What did Prophet Muhammad (PBUH) teach regarding bribery (corruption)?", "choices": ["Both the giver and receiver of bribes are cursed", "Bribery is allowed during exams", "Only the receiver is guilty", "Bribery builds trust"], "correct": 0, "why": "Corruption subverts justice and honesty." },
      { "q": "Which Arabic word describes lawful or permitted food and actions in Islam?", "choices": ["Halal", "Haram", "Shirk", "Makruh"], "correct": 0, "why": "Halal denotes clean, blessed, and permitted provisions." }
    ]
  },
  {
    "id": "ire-hadith-sunnah",
    "themeId": "ire-term-2",
    "themeName": "IRE · Term II",
    "title": "Hadith and Sunnah Guidance",
    "estMinutes": 20,
    "status": "published",
    "reviewStatus": "verified",
    "note": {
      "intro": "Why this matters: Authentic Hadiths and Sunnah model Prophet Muhammad's character, guiding daily ethics on purity, truthfulness, and parent care.",
      "learningObjectives": [
        "Distinguish between Hadith (recorded sayings) and Sunnah (lifestyle practices).",
        "Explain Hadith teachings on cleanliness ('Purity is half of faith').",
        "Apply Hadith ethics regarding honoring parents and truthfulness."
      ],
      "whatYouNeedToKnow": [
        "Hadith preserves prophetic sayings; Sunnah models His daily conduct.",
        "Truthfulness leads to righteousness and Paradise; cleanliness is half of Iman."
      ],
      "worked": {
        "problem": "Explain what Prophet Muhammad (PBUH) taught regarding cleanliness and hygiene.",
        "steps": [
          "Quote Hadith: 'Cleanliness (Taharah) is half of faith.'",
          "Explain physical cleanliness: keeping bodies, clothes, homes, and water vessels clean.",
          "Explain spiritual cleanliness: purifying heart from envy, hatred, and arrogance."
        ],
        "answer": "Answer: Cleanliness is half of faith, requiring physical hygiene and spiritual purity."
      },
      "recap": [
        "Sunnah models exemplary prophetic character.",
        "Truthfulness saves believers from moral ruin.",
        "Honor mothers three times before fathers according to Hadith."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "hadith-vs-sunnah",
        "title": "1. Hadith vs Sunnah and Moral Ethics",
        "modules": [
          {
            "moduleId": "hadith-morals",
            "title": "Hadith on Truthfulness, Cleanliness and Parents",
            "bigIdea": "Hadiths translate Qur'anic principles into daily ethical action across personal and family life.",
            "learnIt": [
              "Hadith vs Sunnah: Hadith is the recorded spoken words and approvals of Prophet Muhammad (PBUH); Sunnah is His practical daily lifestyle.",
              "Hadith on Truthfulness: 'Be truthful, for truthfulness leads to righteousness, and righteousness leads to Paradise.'",
              "Hadith on Parents: a man asked who deserved best companionship; Prophet answered 'Your mother' three times, then 'Your father.'",
              "Hadith on Cleanliness: 'Taharah is half of Iman.' Muslims practice ablution and community environmental hygiene."
            ],
            "tryThis": {
              "question": "According to authentic Hadith, what virtue leads to righteousness and ultimately guides a believer into Paradise?",
              "choices": ["Truthfulness (Sidq)", "Boasting", "Hoarding goods", "Gambling"],
              "correct": 0,
              "explanation": "Truthfulness aligns speech with honesty, building godly character."
            }
          }
        ]
      }
    
      ,{
        "subtopicId": "premium-premium-exam-practice-hadith-and-sunnah",
        "title": "Premium Exam Practice: Hadith and Sunnah",
        "modules": [
          {
            "moduleId": "using-prophetic-teachings",
            "title": "Using Prophetic Teachings",
            "bigIdea": "Hadith and Sunnah questions ask learners to identify teachings and apply them.",
            "learnIt": ["Hadith are recorded sayings, actions or approvals of Prophet Muhammad.", "Sunnah is the Prophet's example and way of life.", "Teachings on cleanliness, kindness, neighbours, mothers and truthfulness can be applied in daily life."],
            "workedExample": { "question": "What lesson is taught by the Hadith about cleanliness?", "steps": ["Step 1: Recall that Islam values cleanliness.", "Step 2: Apply it to personal and environmental hygiene.", "Step 3: Give a clear answer."], "answer": "It teaches Muslims to keep their bodies, clothes and surroundings clean." },
            "tryThis": { "question": "The Sunnah refers to:", "choices": ["the example and way of life of Prophet Muhammad", "a mountain", "a market tax", "a river"], "correct": 0, "explanation": "Sunnah is the Prophet's example and way of life." }
          }
        ]
      }],
    "quiz": [
      { "q": "What is the recorded written report of sayings and approvals of Prophet Muhammad (PBUH) called?", "choices": ["Hadith", "Sunnah", "Tawrat", "Zabur"], "correct": 0, "why": "Hadith preserves oral prophetic statements." },
      { "q": "What does the term 'Sunnah' mean in Islamic jurisprudence?", "choices": ["The practical daily lifestyle, habits, and exemplary actions of the Prophet", "A holy mountain", "Fasting in Ramadan", "Giving Zakah"], "correct": 0, "why": "Sunnah demonstrates living application." },
      { "q": "According to Hadith, cleanliness (Taharah) represents what fraction of Islamic faith?", "choices": ["Half of faith", "One tenth of faith", "All of faith", "Zero"], "correct": 0, "why": "Prophet elevated cleanliness to half of Iman." },
      { "q": "When asked who deserved highest companionship, how many times did Prophet Muhammad mention 'Your mother' before mentioning 'Your father'?", "choices": ["Three times", "Once", "Ten times", "Five times"], "correct": 0, "why": "Mothers bear triple burden of pregnancy, birth, and nursing." },
      { "q": "Where does Hadith state that Paradise lies in relation to parents?", "choices": ["Under the feet of mothers", "On mountain tops", "Inside bank vaults", "At trading markets"], "correct": 0, "why": "Maternal respect opens the gates of Paradise." },
      { "q": "What vice did the Prophet warn leads to wickedness and Hellfire as the opposite of truthfulness?", "choices": ["Falsehood / Lying (Kadhb)", "Charity", "Smiling", "Prayer"], "correct": 0, "why": "Lying corrupts human character." },
      { "q": "Why did Prophet Muhammad encourage Muslims to brush their teeth using the Miswak toothbrush?", "choices": ["To maintain oral hygiene and please Almighty Allah", "To make teeth yellow", "Because water was missing", "To waste time"], "correct": 0, "why": "Miswak practice combines health with spiritual Sunnah." },
      { "q": "How does a Muslim demonstrate love for Prophet Muhammad (PBUH) in daily life?", "choices": ["By following His Sunnah and emulating His noble moral character", "By fighting neighbors", "By refusing school exams", "By sleeping all day"], "correct": 0, "why": "True love obeys prophetic guidance." }
    ]
  },
  {
    "id": "ire-history-seerah",
    "themeId": "ire-term-3",
    "themeName": "IRE · Term III",
    "title": "Islamic History, Seerah and the Four Caliphs",
    "estMinutes": 24,
    "status": "published",
    "reviewStatus": "verified",
    "note": {
      "intro": "Why this matters: Prophet Muhammad's Hijrah migration and the righteous leadership of the four Khulafa-ur-Rashidun established Islamic civilization.",
      "learningObjectives": [
        "Narrate the early life of Prophet Muhammad in Makkah as Al-Amin.",
        "Explain the historical significance of the Hijrah migration to Madinah.",
        "Describe the achievements of Caliphs Abu Bakr, Umar, Uthman, and Ali."
      ],
      "whatYouNeedToKnow": [
        "Hijrah (622 AD) marked the migration from Makkah to Madinah, establishing the first Islamic state.",
        "The Four Rightly Guided Caliphs preserved the Qur'an, expanded justice, and built Islamic institutions."
      ],
      "worked": {
        "problem": "Explain two major governance achievements of Caliph Umar ibn al-Khattab (Al-Farooq).",
        "steps": [
          "Achievement 1: Established the official Islamic lunar calendar starting from the Hijrah migration year.",
          "Achievement 2: Established state institutions including police force, public treasury (Bait-ul-Mal), judicial courts, and pension stipends for the poor."
        ],
        "answer": "Answer: He established the Islamic calendar and built state treasury/judicial systems."
      },
      "recap": [
        "Prophet Muhammad = Al-Amin (The Trustworthy).",
        "Abu Bakr compiled Qur'an manuscripts; Uthman standardized master copies.",
        "Ali ibn Abi Talib modeled judicial fairness and bravery."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "prophet-early-hijrah",
        "title": "1. Prophet's Life in Makkah and Hijrah to Madinah",
        "modules": [
          {
            "moduleId": "makkah-to-madinah",
            "title": "Early Life, Persecution and Hijrah Migration",
            "bigIdea": "Prophet Muhammad (PBUH) maintained honesty under persecution before migrating to Madinah to build peace.",
            "learnIt": [
              "Early Makkah life: born 570 AD; orphaned early; worked as shepherd and honest merchant earning title Al-Amin.",
              "Early Dawah challenges: Quraysh tribe persecuted early converts (e.g., Bilal tortured on burning sands).",
              "The Hijrah (622 AD): secret migration with Abu Bakr to Madinah. Significance: escaped assassination, built first mosque (Quba), united Ansar (helpers) and Muhajirun (emigrants), launched Islamic calendar."
            ],
            "tryThis": {
              "question": "What historical migration event marks year 1 (1 AH) of the official Islamic lunar calendar?",
              "choices": ["The Hijrah migration of Prophet Muhammad from Makkah to Madinah in 622 AD", "The birth of the Prophet", "The conquest of Makkah", "The building of the Kaaba"],
              "correct": 0,
              "explanation": "Caliph Umar designated the Hijrah as the watershed turning point of Islamic history."
            }
          }
        ]
      },
      {
        "subtopicId": "four-caliphs",
        "title": "2. The Rightly Guided Caliphs (Khulafa-ur-Rashidun)",
        "modules": [
          {
            "moduleId": "caliphs-achievements",
            "title": "Achievements of Abu Bakr, Umar, Uthman and Ali",
            "bigIdea": "The four righteous Caliphs led the Muslim Ummah with humility, justice, and devotion to scripture.",
            "learnIt": [
              "1) Abu Bakr as-Siddiq (The Truthful): closest companion; defeated false prophets and apostate tribes refusing Zakat; ordered first compilation of Qur'an under Zayd ibn Thabit.",
              "2) Umar ibn al-Khattab (Al-Farooq): expanded empire; established Islamic calendar, public treasury (Bait-ul-Mal), police force, postal system, and judicial courts.",
              "3) Uthman ibn Affan (Dhun-Nurayn): standardized single master dialect copy of Qur'an (Mushaf); built first Islamic naval fleet.",
              "4) Ali ibn Abi Talib: cousin and son-in-law of Prophet; renowned for heroic bravery at Badr/Khandaq, profound scholarship, and simple humble living."
            ],
            "tryThis": {
              "question": "Which Rightly Guided Caliph established the public treasury (Bait-ul-Mal), police force, and official Islamic calendar?",
              "choices": ["Caliph Umar ibn al-Khattab", "Caliph Abu Bakr", "Caliph Uthman", "Caliph Ali"],
              "correct": 0,
              "explanation": "Umar Al-Farooq laid down administrative state structures for civil welfare."
            }
          }
        ]
      }
    
      ,{
        "subtopicId": "premium-premium-exam-practice-seerah-and-caliphs",
        "title": "Premium Exam Practice: Seerah and Caliphs",
        "modules": [
          {
            "moduleId": "learning-from-islamic-history",
            "title": "Learning from Islamic History",
            "bigIdea": "History questions should name the person/event and explain its importance.",
            "learnIt": ["Seerah is the life history of Prophet Muhammad.", "The Hijrah was the migration from Makkah to Madinah and marks the beginning of the Islamic calendar.", "The Rightly Guided Caliphs helped lead the Muslim community after the Prophet."],
            "workedExample": { "question": "Why is the Hijrah important in Islamic history?", "steps": ["Step 1: Identify Hijrah as migration.", "Step 2: State from Makkah to Madinah.", "Step 3: Mention the Islamic calendar if needed."], "answer": "The Hijrah is important because it was the migration to Madinah and marks the beginning of the Islamic calendar." },
            "tryThis": { "question": "Hijrah was the migration from:", "choices": ["Makkah to Madinah", "Uganda to Kenya", "Egypt to Rome", "Mecca to London"], "correct": 0, "explanation": "Hijrah refers to migration from Makkah to Madinah." }
          }
        ]
      }],
    "quiz": [
      { "q": "What title meaning 'The Trustworthy' did Meccans give Prophet Muhammad in his youth?", "choices": ["Al-Amin", "Al-Farooq", "Al-Siddiq", "Al-Asad"], "correct": 0, "why": "His honesty earned him Al-Amin." },
      { "q": "In which city did Prophet Muhammad establish the first Islamic state after his migration?", "choices": ["Madinah (Yathrib)", "Makkah", "Cairo", "Jerusalem"], "correct": 0, "why": "Madinah welcomed the Prophet as leader." },
      { "q": "Who accompanied Prophet Muhammad inside the Cave of Thawr during the secret Hijrah migration?", "choices": ["Abu Bakr as-Siddiq", "Umar ibn al-Khattab", "Ali ibn Abi Talib", "Uthman ibn Affan"], "correct": 0, "why": "Abu Bakr was his faithful migration companion." },
      { "q": "Which Rightly Guided Caliph ordered the first compilation of Qur'an fragments into one volume after the Battle of Yamamah?", "choices": ["Caliph Abu Bakr as-Siddiq", "Caliph Ali", "Caliph Muawiyah", "Caliph Umar II"], "correct": 0, "why": "Abu Bakr compiled the Suhuf." },
      { "q": "Which Caliph earned the title 'Dhun-Nurayn' (Possessor of Two Lights) after marrying two daughters of the Prophet?", "choices": ["Caliph Uthman ibn Affan", "Caliph Umar", "Caliph Abu Bakr", "Caliph Khalid"], "correct": 0, "why": "Uthman married Ruqayyah and Umm Kulthum." },
      { "q": "Who slept in Prophet Muhammad's bed on the night of Hijrah to risk his life confusing the Meccan assassins?", "choices": ["Ali ibn Abi Talib", "Zayd ibn Thabit", "Bilal ibn Rabah", "Hamzah"], "correct": 0, "why": "Ali bravely risked his life enabling the Prophet's escape." },
      { "q": "What name was given to the native Muslim citizens of Madinah who welcomed and shared their homes with Meccan emigrants?", "choices": ["Ansar (The Helpers)", "Muhajirun", "Quraysh", "Bedouins"], "correct": 0, "why": "Ansar means helpers." },
      { "q": "Which Abyssinian companion endured torture on burning Makkah sands without renouncing Tawheed, crying 'Ahad! Ahad!'?", "choices": ["Bilal ibn Rabah", "Salman al-Farsi", "Ammar ibn Yasir", "Suhayb ar-Rumi"], "correct": 0, "why": "Bilal became Islam's first Muazzin." }
    ]
  },
  {
    "id": "ire-adab-social-justice",
    "themeId": "ire-term-3",
    "themeName": "IRE · Term III",
    "title": "Islamic Adab (Etiquette) and Social Justice",
    "estMinutes": 22,
    "status": "published",
    "reviewStatus": "verified",
    "note": {
      "intro": "Why this matters: Adab governs modest dress codes, strict Halal dietary laws, and honest marketplace business ethics.",
      "learningObjectives": [
        "Explain Islamic dress code and modesty rules for males and females.",
        "Distinguish between Halal (permissible) and Haram (prohibited) dietary laws.",
        "Apply Islamic business ethics against cheating weights, Riba (interest), and hoarding."
      ],
      "whatYouNeedToKnow": [
        "Modesty: males cover navel to knee; females wear Hijab covering body except face and hands.",
        "Haram foods: pork, blood, carrion (dead unslaughtered animals), alcohol/intoxicants, and meat sacrificed to idols.",
        "Haram business practices: cheating scales, Riba (usury/interest), and hoarding goods to create artificial scarcity."
      ],
      "worked": {
        "problem": "Explain why charging or paying usury/interest (Riba) is prohibited in Islamic business ethics.",
        "steps": [
          "Injustice: Riba exploits poor borrowers who must repay extra money regardless of whether their business made profit or loss.",
          "Alternative: Islam encourages profit-and-loss sharing partnerships (Mudarabah) and ethical trade where risk is shared fairly."
        ],
        "answer": "Answer: Riba exploits vulnerable borrowers; Islam requires fair risk-sharing trade."
      },
      "recap": [
        "Hijab preserves modesty and dignity.",
        "Slaughter animals invoking Allah's name (Bismillah).",
        "Accurate marketplace weighing scales earn Allah's blessing."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "dress-dietary-laws",
        "title": "1. Islamic Dress Code and Dietary Laws",
        "modules": [
          {
            "moduleId": "modesty-halal-haram",
            "title": "Modesty, Halal Provisions and Haram Prohibitions",
            "bigIdea": "Islamic modesty protects moral dignity, while Halal dietary laws nourish bodily purity.",
            "learnIt": [
              "Dress code (Awrah): males must cover between navel and knee with loose clothes; females wear loose Hijab covering entire body except face and hands. Clothes must not be transparent or skin-tight.",
              "Halal (Permissible): domestic cattle, sheep, goats, camels, chickens, and fish. Animals must be slaughtered with sharp knife severing throat veins while saying 'Bismillah Allahu Akbar.'",
              "Haram (Forbidden food): pork / swine flesh, blood, carrion (dead unslaughtered animals), carnivorous beasts of prey (lions, dogs), and any meat sacrificed to idols."
            ],
            "tryThis": {
              "question": "Which of the following dietary items is explicitly forbidden (Haram) for human consumption in the Holy Qur'an?",
              "choices": ["Fresh river fish", "Pork / Swine flesh and flowing blood", "Roast goat meat", "Cow milk"],
              "correct": 1,
              "explanation": "Surah Al-Baqarah 2:173 explicitly prohibits dead animals, blood, and pork."
            }
          }
        ]
      },
      {
        "subtopicId": "business-ethics",
        "title": "2. Marketplace Business Ethics and Social Justice",
        "modules": [
          {
            "moduleId": "honest-trade-riba",
            "title": "Honest Weights, Riba (Interest) and Hoarding",
            "bigIdea": "Islamic marketplace ethics forbid fraud, usury, and artificial hoarding to ensure economic justice.",
            "learnIt": [
              "Honest weights and measures: Surah Al-Mutaffifin condemns traders who demand full measure when buying but give short measure when selling to customers.",
              "Riba (Usury / Interest): charging fixed extra percentage on loans is strictly Haram because it oppresses debtors.",
              "Hoarding (Ihtikar): buying and hiding essential food supplies during shortages to artificially force market prices skywards is strictly condemned."
            ],
            "tryThis": {
              "question": "What is the Islamic economic term for charging fixed exploitative interest on financial loans?",
              "choices": ["Riba (Usury)", "Zakah", "Sadaqah", "Halal"],
              "correct": 0,
              "explanation": "Riba is prohibited to prevent financial oppression of the poor."
            }
          }
        ]
      }
    
      ,{
        "subtopicId": "premium-premium-exam-practice-adab-and-justice",
        "title": "Premium Exam Practice: Adab and Justice",
        "modules": [
          {
            "moduleId": "applying-islamic-etiquette-and-fairness",
            "title": "Applying Islamic Etiquette and Fairness",
            "bigIdea": "Adab and justice questions require practical examples of respectful conduct.",
            "learnIt": ["Adab means good manners or etiquette in daily life.", "Islamic social justice includes fairness, care for the needy, honesty in trade and avoiding exploitation.", "A premium answer names the value and gives a real example of practising it."],
            "workedExample": { "question": "How can a trader practise fairness in the market?", "steps": ["Step 1: Think of market behaviour.", "Step 2: Fairness means honest measures and prices.", "Step 3: State it clearly."], "answer": "A trader can practise fairness by using correct weights and measures." },
            "tryThis": { "question": "Which action shows fairness in trade?", "choices": ["Using correct measurements", "Cheating customers", "Hiding bad goods", "Charging after lying"], "correct": 0, "explanation": "Correct measurements show honesty and fairness." }
          }
        ]
      }],
    "quiz": [
      { "q": "What is the Islamic term for charging exploitative fixed interest on financial loans?", "choices": ["Riba (Usury)", "Zakah", "Mahr", "Sadaqah"], "correct": 0, "why": "Riba exploits debtors and is strictly forbidden." },
      { "q": "Which chapter of the Qur'an strictly condemns marketplace traders who cheat customers by giving inaccurate short weights and measures?", "choices": ["Surah Al-Mutaffifin", "Surah Al-Ikhlas", "Surah Al-Asr", "Surah Al-Kawthar"], "correct": 0, "why": "Al-Mutaffifin warns defrauders in weights." },
      { "q": "What is the mandatory modesty boundary (Awrah) for Muslim males during public life and prayer?", "choices": ["Covering the area between the navel and the knee with loose clothing", "Wearing golden hats", "Covering face only", "Wearing tight shorts"], "correct": 0, "why": "Navel to knee defines male Awrah." },
      { "q": "Why is hoarding (Ihtikar) essential food grains during a famine prohibited in Islamic business ethics?", "choices": ["Because it creates artificial scarcity to exploit starving citizens at high prices", "Because food spoils", "Because shops close", "To make rats happy"], "correct": 0, "why": "Hoarding oppresses the community for greed." },
      { "q": "What phrase must a Muslim butcher recite when slaughtering a Halal animal?", "choices": ["Bismillah Allahu Akbar (In the name of Allah, Allah is the Greatest)", "Subhanallah only", "Alhamdulillah only", "No words needed"], "correct": 0, "why": "Invoking Allah's name sanctifies animal provision." },
      { "q": "Which meat is explicitly classified as Haram (strictly prohibited) in Islamic dietary laws?", "choices": ["Pork / Swine flesh", "Beef", "Chicken", "Fish"], "correct": 0, "why": "Qur'an explicitly forbids pork consumption." },
      { "q": "What does the Islamic dress code require regarding female attire in public life?", "choices": ["Wearing loose, non-transparent clothing covering the entire body except the face and hands", "Wearing tight transparent dresses", "Wearing men's suits", "No restrictions"], "correct": 0, "why": "Hijab preserves feminine dignity and modesty." },
      { "q": "Why does Islam promote profit-and-loss sharing partnerships (Mudarabah) over interest-bearing loans?", "choices": ["To ensure fair sharing of business risks and rewards between partners without oppressing debtors", "To make banks close", "To avoid writing contracts", "To prevent trading"], "correct": 0, "why": "Ethical trade shares risk equitably." }
    ]
  }
];

export const IRE_TOPICS: Topic[] = balanceTopicAnswers(addUpperPrimaryReV4(IRE_TOPICS_DATA, "P7", P7_RE_TERMS));

export const RE_TOPICS: Topic[] = [...CRE_TOPICS, ...IRE_TOPICS];

export function getReTopic(id: string): Topic | undefined {
  return RE_TOPICS.find((topic) => topic.id === id);
}
