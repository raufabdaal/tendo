import type { Topic } from "@/lib/topics";


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

const P6_RE_TOPICS_DATA: Topic[] = [
  // ──────────────────────── PART I: CRE ────────────────────────
  {
    id: "p6-cre-gods-family",
    themeId: "p6-cre",
    themeName: "CRE · Primary Six",
    title: "God's Creation and Human Relationships",
    estMinutes: 25,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "Why this matters: Understanding God's care for humanity and nature calls P6 Christian learners to environmental stewardship and peaceful relationships with school and community neighbors.",
      learningObjectives: [
        "Explain God's providential care for human beings and all creation (Matthew 6).",
        "Demonstrate practical Christian virtues of peace, unity, and forgiveness in community relationships."
      ],
      whatYouNeedToKnow: [
        "God sustains creation by providing fertile soil, sunshine, rain, and daily sustenance.",
        "Christians are stewards commanded to care for nature rather than destroy trees and water bodies.",
        "Living peaceably requires patience, sharing, and active reconciliation when disputes arise."
      ],
      worked: {
        problem: "State two ways in which human beings act as co-creators and stewards of God's creation.",
        steps: [
          "Identify environmental protection: planting trees, watering flowers, and conserving wetlands.",
          "Identify family care: raising children in love and caring for domestic animals."
        ],
        answer: "Planting trees (reforestation) and caring for domestic animals and family members."
      },
      recap: [
        "Matthew 5:9: 'Blessed are the peacemakers, for they shall be called children of God.'",
        "Forgiveness heals broken relationships."
      ]
    },
    subtopics: [
      {
        subtopicId: "p6-creation-stewardship",
        title: "1. God's Care for Humanity and Nature",
        modules: [
          {
            moduleId: "p6-divine-providence",
            title: "God's Providential Care and Human Stewardship",
            bigIdea: "God sustains every creature with food and shelter, calling Christians to protect the natural environment.",
            learnIt: [
              "God's care: Jesus taught in Matthew 6 that God feeds the birds of the air and clothes the wild lilies, showing He cares even more deeply for His human children.",
              "Stewardship: Genesis teaches that humanity was placed in the Garden of Eden to cultivate and care for it. Environmental destruction violates divine trust."
            ],
            workedExample: {
              question: "According to Matthew 6, why should believers avoid excessive anxiety about food and clothing?",
              steps: [
                "Recall Jesus' sermon: God feeds wild birds without farming.",
                "Conclude that heavenly Father knows human needs and provides."
              ],
              answer: "Because our heavenly Father knows our needs and providentially sustains us."
            },
            tryThis: {
              question: "How can P6 pupils best practice stewardship over school compound trees?",
              choices: ["By watering them and avoiding breaking branches", "By burning their leaves", "By uprooting them during play", "By carving names in bark"],
              correct: 0,
              explanation: "Stewardship requires actively protecting and nurturing living plants."
            }
          }
        ]
      },
      {
        subtopicId: "p6-peaceful-living",
        title: "2. Living in Peace and Unity with Neighbors",
        modules: [
          {
            moduleId: "p6-peacemaking-community",
            title: "Christian Peacemaking and Forgiveness",
            bigIdea: "Unity and peace build strong communities where differences are resolved through Christian love.",
            learnIt: [
              "Neighborly love: Jesus taught the Greatest Commandment includes loving one's neighbor as oneself.",
              "Peacemaking virtues: humility, sharing with the needy, and immediate forgiveness when wronged prevent communal conflict."
            ],
            workedExample: {
              question: "Explain what Jesus promised to peacemakers in the Beatitudes (Matthew 5:9).",
              steps: [
                "Quote Matthew 5:9.",
                "Identify the divine reward: they shall be called children of God."
              ],
              answer: "They shall be blessed and called the children of God."
            },
            tryThis: {
              question: "Which Christian virtue helps heal broken friendships after a disagreement?",
              choices: ["Forgiveness and reconciliation", "Pride and gossip", "Revenge", "Anger"],
              correct: 0,
              explanation: "Forgiveness restores broken fellowship in Christian communities."
            }
          }
        ]
      }
    
      ,{
        subtopicId: "premium-premium-practice-creation-and-stewardship",
        title: "Premium Practice: Creation and Stewardship",
        modules: [{
          moduleId: "caring-for-god-s-creation",
          title: "Caring for God's Creation",
          bigIdea: "CRE answers connect creation to responsibility and care.",
          learnIt: ["Christians believe God created the world.", "Stewardship means using and protecting creation wisely.", "Good relationships include respect, forgiveness and sharing."],
          workedExample: { question: "How can a learner care for creation at school?", steps: ["Think of the school environment.", "Avoid littering and care for plants.", "Give a clear action."], answer: "A learner can avoid littering and plant or protect trees." },
          tryThis: { question: "Which action shows stewardship?", choices: ["Planting trees", "Wasting water", "Destroying flowers", "Littering"], correct: 0, explanation: "Planting trees helps care for creation." }
        }]
      }],
    quiz: [
      { q: "Who provides daily sustenance and rain for all living creatures?", choices: ["God the Creator", "Kings", "Traders", "Angels only"], correct: 0, why: "God is the ultimate provider." },
      { q: "How should Christians treat their community neighbors?", choices: ["With love, peace, and helpfulness", "With hatred", "By fighting", "By stealing"], correct: 0, why: "Love your neighbor as yourself." },
      { q: "What does peacemaking bring into a school or village community?", choices: ["Unity, harmony, and development", "Poverty", "Sickness", "Fear"], correct: 0, why: "Peace builds community strength." },
      { q: "Why did God create plants and animals?", choices: ["To balance ecosystems and sustain human life", "To cause trouble", "To fill empty space", "For no reason"], correct: 0, why: "Creation serves divine purpose." },
      { q: "Which virtue helps resolve misunderstandings between classmates?", choices: ["Forgiveness and humility", "Pride", "Anger", "Gossip"], correct: 0, why: "Forgiveness heals broken bonds." },
      { q: "What did Jesus say about peacemakers in Matthew 5:9?", choices: ["They shall be called children of God", "They are weak", "They lose money", "They are sad"], correct: 0, why: "Matthew 5:9 pronounces peacemakers blessed." },
      { q: "How can learners care for school compound trees?", choices: ["By watering them and not breaking branches", "By burning them", "By uprooting them", "By peeling bark"], correct: 0, why: "Stewardship protects environmental assets." },
      { q: "What does sharing food with the needy demonstrate?", choices: ["Christian love and compassion", "Pride", "Wastefulness", "Fear"], correct: 0, why: "Charity reflects God's generosity." }
    ]
  },
  {
    id: "p6-cre-ten-commandments",
    themeId: "p6-cre",
    themeName: "CRE · Primary Six",
    title: "The Ten Commandments in Daily Life",
    estMinutes: 25,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "Why this matters: God's moral law given to Moses on Mount Sinai guides Christian ethical conduct, emphasizing respect for parents, honesty, and respect for property.",
      learningObjectives: [
        "Interpret the Fifth Commandment regarding honoring parents and respecting lawful authority.",
        "Apply the Seventh and Eighth Commandments regarding honesty, integrity, and avoiding theft or cheating."
      ],
      whatYouNeedToKnow: [
        "The Fifth Commandment carries a promise of long life and prosperity.",
        "The Eighth Commandment forbids stealing, embezzlement, corruption, and cheating in school exams.",
        "Integrity means doing what is honest and right even when no one is watching."
      ],
      worked: {
        problem: "Give two reasons why Christians should obey the laws of Uganda and school rules.",
        steps: [
          "Authority comes from God to maintain social order.",
          "Obedience prevents chaos, crime, and punishment."
        ],
        answer: "To honor God-given authority and promote peaceful social order."
      },
      recap: [
        "Honor your father and mother.",
        "Do not bear false witness against your neighbor."
      ]
    },
    subtopics: [
      {
        subtopicId: "p6-honoring-parents",
        title: "1. Honoring Parents and Respecting Authority",
        modules: [
          {
            moduleId: "p6-fifth-commandment",
            title: "The Fifth Commandment and Obedience",
            bigIdea: "Honoring parents and teachers fosters discipline and carries God's promise of long life.",
            learnIt: [
              "Exodus 20:12: 'Honor your father and your mother, that your days may be long in the land.'",
              "Application: honoring means listening to guidance, helping with household chores, speaking respectfully, and caring for parents in old age."
            ],
            workedExample: {
              question: "What unique divine promise is attached to the Fifth Commandment?",
              steps: [
                "Recall Exodus 20:12.",
                "Identify promise: long life and blessings in the land."
              ],
              answer: "The promise of long life and prosperity."
            },
            tryThis: {
              question: "Which action shows true honor to school teachers?",
              choices: ["Obeying school rules and completing homework diligently", "Making noise during lessons", "Refusing to sweep the classroom", "Arriving late daily"],
              correct: 0,
              explanation: "Diligent obedience reflects true respect for educators."
            }
          }
        ]
      },
      {
        subtopicId: "p6-honesty-integrity",
        title: "2. Honesty, Integrity and Avoiding Theft",
        modules: [
          {
            moduleId: "p6-eighth-commandment",
            title: "The Eighth Commandment and Truthfulness",
            bigIdea: "Respect for other people's property and truth-telling build trustworthy moral character.",
            learnIt: [
              "Exodus 20:15: 'You shall not steal.' Stealing includes taking school pencils without permission, cheating in exams, and corruption.",
              "Integrity: standing firm for truth and returning lost-and-found items to school authorities."
            ],
            workedExample: {
              question: "If a pupil finds a ten-thousand shilling note in the school compound, what does Christian integrity require?",
              steps: [
                "Keeping it violates the prohibition against theft.",
                "Surrendering it to the teacher on duty ensures honest return to the owner."
              ],
              answer: "Take the money to the teacher on duty or headteacher so the rightful owner can be found."
            },
            tryThis: {
              question: "Which commandment forbids taking someone else's property without permission?",
              choices: ["Eighth Commandment (You shall not steal)", "Fourth Commandment", "Fifth Commandment", "First Commandment"],
              correct: 0,
              explanation: "The Eighth Commandment protects property rights."
            }
          }
        ]
      }
    
      ,{
        subtopicId: "premium-premium-practice-commandments",
        title: "Premium Practice: Commandments",
        modules: [{
          moduleId: "applying-the-ten-commandments",
          title: "Applying the Ten Commandments",
          bigIdea: "Commandment questions show how God's law guides behaviour today.",
          learnIt: ["The commandments guide believers to love God and respect people.", "Honouring parents means respecting and helping them.", "Honesty means avoiding stealing, lying and cheating."],
          workedExample: { question: "How can a learner avoid false witness?", steps: ["False witness means lying about someone.", "A learner should tell the truth.", "Apply it to school life."], answer: "A learner can tell the truth and not lie about others." },
          tryThis: { question: "Which commandment teaches honesty?", choices: ["Do not steal", "Pollute water", "Forget parents", "Break promises always"], correct: 0, explanation: "Do not steal teaches respect for property." }
        }]
      }],
    quiz: [
      { q: "Where did God give Moses the Ten Commandments on stone tablets?", choices: ["Mount Sinai", "Mount Zion", "Mount Carmel", "Mount Ararat"], correct: 0, why: "Moses received the Law on Mount Sinai." },
      { q: "Which commandment carries the promise of long life?", choices: ["Fifth Commandment (Honor your parents)", "First Commandment", "Eighth Commandment", "Tenth Commandment"], correct: 0, why: "Exodus 20:12 attaches long life to filial honor." },
      { q: "What does Christian integrity mean in school life?", choices: ["Being honest and truthful even when unsupervised", "Cheating quietly", "Stealing pens", "Lying to prefects"], correct: 0, why: "Integrity is unwavering moral honesty." },
      { q: "Which commandment forbids telling lies or false witness against others?", choices: ["Ninth Commandment", "Second Commandment", "Fourth Commandment", "Sixth Commandment"], correct: 0, why: "The Ninth Commandment mandates truthfulness." },
      { q: "Why should Christian children respect civic and school leaders?", choices: ["Lawful authority is established to maintain social order and peace", "To get free money", "Because leaders fly", "To avoid writing exams"], correct: 0, why: "Romans 13 teaches respect for orderly authority." },
      { q: "Which practice violates the Eighth Commandment (You shall not steal)?", choices: ["Cheating in examinations and taking school property", "Singing hymns", "Reading the Bible", "Sharing lunch"], correct: 0, why: "Cheating and theft misappropriate what belongs to others." },
      { q: "How did Jesus summarize the entire Ten Commandments?", choices: ["Love God with all your heart and love your neighbor as yourself", "Fast for forty days", "Build stone churches", "Travel to Jerusalem"], correct: 0, why: "Love fulfills the Law (Matthew 22)." },
      { q: "What should a learner do after accidentally breaking a classmate's ruler?", choices: ["Apologize honestly and offer to replace or repair it", "Hide the pieces", "Blame someone else", "Fight the classmate"], correct: 0, why: "Honesty and restitution restore peace." }
    ]
  },
  {
    id: "p6-cre-jesus-miracles",
    themeId: "p6-cre",
    themeName: "CRE · Primary Six",
    title: "Miracles and Compassion of Jesus Christ",
    estMinutes: 25,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "Why this matters: Jesus' miracles demonstrate His divine power over sickness and nature, teaching Christians to show practical compassion and mercy to the suffering.",
      learningObjectives: [
        "Describe key healing miracles of Jesus (blind Bartimaeus, the ten lepers, the paralyzed man).",
        "Explain lessons of forgiveness, mercy, and Christian reconciliation demonstrated in Christ's ministry."
      ],
      whatYouNeedToKnow: [
        "A miracle is a divine event that cannot be explained by ordinary human science.",
        "Jesus healed out of deep compassion for human suffering and to reveal God's saving power.",
        "Only one of the ten healed lepers returned to thank Jesus, teaching the duty of gratitude."
      ],
      worked: {
        problem: "What moral lesson do Christians learn from the Samaritan leper who returned to thank Jesus (Luke 17)?",
        steps: [
          "Ten were healed, but only one (a foreigner) returned to give glory to God.",
          "Christians must always show gratitude to God and benefactors for blessings received."
        ],
        answer: "The importance of thanksgiving and gratitude for God's blessings."
      },
      recap: [
        "Faith is often required to receive God's miraculous touch.",
        "Show compassion by visiting the sick and helping those in need."
      ]
    },
    subtopics: [
      {
        subtopicId: "p6-healing-miracles",
        title: "1. Healing Miracles and Compassion for the Sick",
        modules: [
          {
            moduleId: "p6-lepers-blind-man",
            title: "Healing of Blind Bartimaeus and the Ten Lepers",
            bigIdea: "Jesus responded to cries of faith with divine healing, demonstrating compassion for marginalized sufferers.",
            learnIt: [
              "Blind Bartimaeus (Mark 10): sat begging by Jericho road, cried out 'Jesus, Son of David, have mercy on me!' His persistent faith restored his sight.",
              "The Ten Lepers (Luke 17): lepers were outcasts. Jesus cleansed all ten, but only one Samaritan returned to give thanks."
            ],
            workedExample: {
              question: "What did Jesus say to Blind Bartimaeus after healing his eyes?",
              steps: [
                "Jesus recognized his persistent faith.",
                "He declared: 'Go your way; your faith has made you well.'"
              ],
              answer: "'Go your way; your faith has made you well.'"
            },
            tryThis: {
              question: "Out of the ten lepers healed by Jesus, how many returned to praise God and express gratitude?",
              choices: ["Only one (a Samaritan)", "All ten", "Five", "None"],
              correct: 0,
              explanation: "Only one former leper returned, highlighting rare gratitude."
            }
          }
        ]
      },
      {
        subtopicId: "p6-forgiveness-reconciliation",
        title: "2. Forgiveness and Christian Reconciliation",
        modules: [
          {
            moduleId: "p6-paralyzed-man-mercy",
            title: "Healing the Paralyzed Man and Forgiving Sins",
            bigIdea: "Jesus has authority both to heal physical paralysis and forgive spiritual sins.",
            learnIt: [
              "Paralyzed man lowered through roof (Mark 2): four friends lowered him before Jesus. Seeing their faith, Jesus said, 'Son, your sins are forgiven,' and commanded him to walk.",
              "Reconciliation: Christians are called to forgive seventy times seven times (Matthew 18)."
            ],
            workedExample: {
              question: "What did the four friends do when crowd congestion blocked entry to Jesus?",
              steps: [
                "They climbed onto the flat roof.",
                "They opened the roof tiles and lowered the paralyzed man on his mat."
              ],
              answer: "They opened the roof and lowered the paralyzed man directly before Jesus."
            },
            tryThis: {
              question: "According to Matthew 18, how many times did Jesus tell Peter to forgive a sinning brother?",
              choices: ["Seventy times seven times (always)", "Seven times only", "Three times", "Never"],
              correct: 0,
              explanation: "Seventy times seven symbolizes limitless Christian forgiveness."
            }
          }
        ]
      }
    
      ,{
        subtopicId: "premium-premium-practice-miracles-and-compassion",
        title: "Premium Practice: Miracles and Compassion",
        modules: [{
          moduleId: "learning-from-jesus-care",
          title: "Learning from Jesus' Care",
          bigIdea: "Miracle questions ask for the event and lesson.",
          learnIt: ["Jesus' miracles showed power and compassion.", "Healing miracles teach care for the sick.", "Forgiveness and reconciliation are important Christian values."],
          workedExample: { question: "What lesson comes from Jesus healing the sick?", steps: ["Jesus cared for suffering people.", "Christians should care for the sick.", "State the lesson clearly."], answer: "Christians learn to show compassion and care for the sick." },
          tryThis: { question: "Which action shows compassion?", choices: ["Helping a sick classmate", "Laughing at the sick", "Refusing to forgive", "Stealing medicine"], correct: 0, explanation: "Helping the sick shows compassion." }
        }]
      }],
    quiz: [
      { q: "What blind beggar near Jericho cried out for Jesus to have mercy on him?", choices: ["Bartimaeus", "Zacchaeus", "Lazarus", "Nicodemus"], correct: 0, why: "Bartimaeus received sight in Mark 10." },
      { q: "Why did Jesus perform healing miracles during His earthly ministry?", choices: ["Out of divine compassion and to reveal God's saving power", "To get money", "To show off pride", "To defeat Roman soldiers"], correct: 0, why: "Miracles demonstrated divine mercy and kingdom authority." },
      { q: "In the miracle of the ten lepers, what nationality was the single grateful man who returned?", choices: ["A Samaritan", "A Roman", "A Greek", "An Egyptian"], correct: 0, why: "Luke 17 notes the grateful man was a Samaritan." },
      { q: "How did four friends present a paralyzed man to Jesus inside a crowded house?", choices: ["By making an opening in the roof and lowering his mat down", "By breaking windows", "By shouting outside", "By calling police"], correct: 0, why: "Their persistent faith bypassed the door crowd." },
      { q: "What did Jesus say to the paralyzed man before healing his physical legs?", choices: ["'Son, your sins are forgiven you'", "'You are rich'", "'Go to prison'", "'Never walk again'"], correct: 0, why: "Jesus addressed spiritual forgiveness first." },
      { q: "How can modern P6 pupils show Christian compassion to sick schoolmates?", choices: ["By visiting them, praying for them, and sharing notes", "By laughing at them", "By stealing their books", "By avoiding them completely"], correct: 0, why: "Compassion acts practically to relieve suffering." },
      { q: "What is a supernatural event caused by God's power called?", choices: ["A miracle", "A magic trick", "An accident", "A coincidence"], correct: 0, why: "Miracles surpass ordinary laws of nature." },
      { q: "What does Jesus' healing of outcasts like lepers teach the church?", choices: ["To love and care for all people without social discrimination", "To hate the poor", "To build walls", "To charge money for prayer"], correct: 0, why: "Christ's love embraces all marginalized people." }
    ]
  },

  // ──────────────────────── PART II: IRE ────────────────────────
  {
    id: "p6-ire-surahs",
    themeId: "p6-ire",
    themeName: "IRE · Primary Six",
    title: "Selected Surahs and Moral Teachings",
    estMinutes: 25,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "Why this matters: Recitation and translation of Surah Al-Qadr and Ad-Dhuha instill deep gratitude to Allah for His divine revelation and comfort in times of difficulty.",
      learningObjectives: [
        "Recite, translate, and explain the spiritual significance of Surah Al-Qadr (The Night of Decree).",
        "Recite and explain moral lessons from Surah Ad-Dhuha regarding gratitude and care for orphans."
      ],
      whatYouNeedToKnow: [
        "Surah Al-Qadr commemorates Laylatul-Qadr, the blessed night the Holy Quran was first revealed.",
        "Worship during Laylatul-Qadr is better than worship of a thousand months.",
        "Surah Ad-Dhuha comforted Prophet Muhammad (PBUH) and commands believers never to oppress orphans or beggars."
      ],
      worked: {
        problem: "State two moral duties commanded by Allah at the end of Surah Ad-Dhuha.",
        steps: [
          "Do not treat the orphan with harshness or oppression.",
          "Do not repulse or shout at the petitioner (beggar), and proclaim Allah's blessings."
        ],
        answer: "Treat orphans kindly and never repulse or shout at beggars."
      },
      recap: [
        "Laylatul-Qadr falls in the last ten odd nights of Ramadan.",
        "Always express gratitude (Shukr) for Allah's favors."
      ]
    },
    subtopics: [
      {
        subtopicId: "p6-surah-qadr",
        title: "1. Surah Al-Qadr (The Night of Decree)",
        modules: [
          {
            moduleId: "p6-laylatul-qadr",
            title: "Revelation of the Quran and Laylatul-Qadr",
            bigIdea: "Surah Al-Qadr celebrates the majestic night when Allah sent down the Quran as eternal guidance.",
            learnIt: [
              "Meaning of Al-Qadr: Decree, Majesty, or Power. It has 5 verses revealed in Makkah.",
              "Spiritual weight: Verse 3 states 'The Night of Decree is better than a thousand months' (over 83 years of worship). Angels and Jibril descend with peace until dawn."
            ],
            workedExample: {
              question: "Why is Laylatul-Qadr considered the most blessed night in the Islamic calendar?",
              steps: [
                "The Holy Quran was first revealed on this night.",
                "Worship performed on this night exceeds a thousand months in divine reward."
              ],
              answer: "Because the Quran was revealed then, and its worship reward exceeds 1,000 months."
            },
            tryThis: {
              question: "According to Surah Al-Qadr, what descend to earth on Laylatul-Qadr by Allah's permission?",
              choices: ["Angels and the Spirit (Jibril)", "Rain and thunder only", "Stars and planets", "Birds"],
              correct: 0,
              explanation: "Angels descend bringing peace and blessings."
            }
          }
        ]
      },
      {
        subtopicId: "p6-surah-dhuha",
        title: "2. Surah Ad-Dhuha (The Morning Hours)",
        modules: [
          {
            moduleId: "p6-dhuha-teachings",
            title: "Divine Comfort, Orphans and Gratitude",
            bigIdea: "Allah reassured the Prophet of His constant love, commanding kindness toward orphans and the needy.",
            learnIt: [
              "Context: revealed when revelation paused briefly. Allah swore by the morning sunlight that He had not forsaken His Prophet.",
              "Moral injunctions: remind believers that Allah found them wandering and guided them; therefore, treat orphans with compassion and proclaim divine blessings."
            ],
            workedExample: {
              question: "Explain the command regarding orphans found in Surah Ad-Dhuha.",
              steps: [
                "Identify verse 9: 'So as for the orphan, do not oppress him.'",
                "Application: support orphans with education, shelter, and gentleness."
              ],
              answer: "Do not oppress or harsh orphans, but treat them with loving care."
            },
            tryThis: {
              question: "What does Surah Ad-Dhuha command believers to do regarding Allah's favors and blessings?",
              choices: ["Proclaim and express gratitude for them", "Hide them completely", "Deny them", "Sell them"],
              correct: 0,
              explanation: "Verse 11 commands proclaiming and thanking Allah for His bounty."
            }
          }
        ]
      }
    
      ,{
        subtopicId: "premium-premium-practice-selected-surahs",
        title: "Premium Practice: Selected Surahs",
        modules: [{
          moduleId: "applying-moral-lessons-from-surahs",
          title: "Applying Moral Lessons from Surahs",
          bigIdea: "IRE answers connect a Surah to a daily-life lesson.",
          learnIt: ["Surah Al-Qadr teaches the importance of Laylatul-Qadr and worship.", "Surah Ad-Dhuha teaches hope, gratitude and care for orphans.", "A strong answer gives a practical example."],
          workedExample: { question: "What lesson comes from Surah Ad-Dhuha?", steps: ["It encourages care and hope.", "Mention care for needy people or orphans.", "Apply it to daily life."], answer: "Muslims learn to be grateful and care for orphans and needy people." },
          tryThis: { question: "Which value is shown by caring for orphans?", choices: ["Kindness", "Greed", "Cruelty", "Wastefulness"], correct: 0, explanation: "Caring for orphans shows kindness." }
        }]
      }],
    quiz: [
      { q: "In which Islamic month does Laylatul-Qadr (The Night of Decree) occur?", choices: ["Ramadan", "Muharram", "Shawwal", "Rajab"], correct: 0, why: "Laylatul-Qadr falls during the holy month of Ramadan." },
      { q: "According to Surah Al-Qadr, worship on Laylatul-Qadr is better than worship of how many months?", choices: ["A thousand months", "One hundred months", "Ten months", "Five hundred months"], correct: 0, why: "Verse 3 explicitly states 'better than a thousand months'." },
      { q: "Which holy scripture began descending from Allah on Laylatul-Qadr?", choices: ["The Holy Quran", "The Injil", "The Zabur", "The Tawrat"], correct: 0, why: "The Quran descended on this majestic night." },
      { q: "What is the English meaning of Surah Ad-Dhuha?", choices: ["The Morning Hours / Glorious Morning Light", "The Night", "The Fig", "The Elephant"], correct: 0, why: "Ad-Dhuha refers to morning sunlight." },
      { q: "How does Surah Ad-Dhuha instruct Muslims to treat orphans?", choices: ["With kindness, dignity, and without oppression", "By driving them away", "By taking their wealth", "By ignoring them"], correct: 0, why: "Oppressing orphans is strictly forbidden." },
      { q: "Which angel is referred to as 'Ar-Ruh' (The Spirit) descending on Laylatul-Qadr?", choices: ["Angel Jibril (Gabriel)", "Angel Mikael", "Angel Israfil", "Angel Izrail"], correct: 0, why: "Jibril is honored as Ar-Ruh." },
      { q: "What should a Muslim do when approached by a polite beggar or petitioner?", choices: ["Assist kindly or speak a gentle word without shouting", "Insult and chase them away", "Call police immediately", "Throw stones"], correct: 0, why: "Surah Ad-Dhuha forbids repulsing petitioners." },
      { q: "Why did Allah reveal Surah Ad-Dhuha to Prophet Muhammad (PBUH)?", choices: ["To reassure and comfort him that Allah had not abandoned him", "To declare war", "To change fasting rules", "To count wealth"], correct: 0, why: "It brought divine solace during a pause in revelation." }
    ]
  },
  {
    id: "p6-ire-pillars-fasting",
    themeId: "p6-ire",
    themeName: "IRE · Primary Six",
    title: "Pillars of Islam: Fasting and Prayer",
    estMinutes: 25,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "Why this matters: Sawm (Fasting during Ramadan) and Salah (Prayer) are core pillars that build self-discipline, spiritual purity, and solidarity with the poor.",
      learningObjectives: [
        "Explain the rules, exemptions, and spiritual benefits of Sawm (Fasting) during Ramadan.",
        "Demonstrate punctuality, cleanliness (Wudhu), and concentration in the five daily Salah prayers."
      ],
      whatYouNeedToKnow: [
        "Sawm involves complete abstinence from food, drink, and bad behavior from dawn (Fajr) until sunset (Maghrib).",
        "Exemptions from fasting: the sick, travelers, elderly, pregnant/nursing mothers, and young children.",
        "Suhoor is the pre-dawn meal; Iftar is the meal taken to break the fast after sunset."
      ],
      worked: {
        problem: "Mention two social and spiritual benefits gained from fasting during the month of Ramadan.",
        steps: [
          "Spiritual: develops Taqwa (God-consciousness) and purifies sins.",
          "Social: cultivates empathy for hungry poor people, promoting Zakat and charity."
        ],
        answer: "Fasting develops Taqwa (God-consciousness) and sympathy for the needy."
      },
      recap: [
        "Ramadan is the ninth month of the Islamic lunar calendar.",
        "Wudhu (ablution) is mandatory before performing Salah."
      ]
    },
    subtopics: [
      {
        subtopicId: "p6-sawm-ramadan",
        title: "1. Rules and Spiritual Benefits of Sawm (Fasting)",
        modules: [
          {
            moduleId: "p6-fasting-rules",
            title: "Observing Ramadan: Suhoor, Iftar and Exemptions",
            bigIdea: "Fasting trains the soul in self-control and obedience to Allah from dawn until sunset.",
            learnIt: [
              "Definition of Sawm: intentional abstinence from food, drink, and vain speech from true dawn until sunset during Ramadan.",
              "Key meals: Suhoor (blessed meal taken before dawn); Iftar (breaking fast promptly after sunset, traditionally with dates and water).",
              "Valid exemptions: travelers on long journeys and sick individuals may break fast but must make up the lost days later (Qadha)."
            ],
            workedExample: {
              question: "At what specific times does a fasting Muslim start and break the daily fast during Ramadan?",
              steps: [
                "Start time: true dawn immediately before Fajr prayer.",
                "Break time: sunset immediately at Maghrib call to prayer."
              ],
              answer: "Fasting begins at dawn (Fajr) and ends at sunset (Maghrib)."
            },
            tryThis: {
              question: "What is the pre-dawn meal eaten before starting the daily fast called?",
              choices: ["Suhoor", "Iftar", "Taraweeh", "Zakat"],
              correct: 0,
              explanation: "Suhoor provides physical sustenance and carries sunnah blessings."
            }
          }
        ]
      },
      {
        subtopicId: "p6-salah-punctuality",
        title: "2. Punctuality and Cleanliness in Salah",
        modules: [
          {
            moduleId: "p6-wudhu-five-prayers",
            title: "Ablution (Wudhu) and the Five Daily Prayers",
            bigIdea: "Regular clean prayer connects the believer directly to Allah five times every day.",
            learnIt: [
              "Five daily prayers: Fajr (dawn, 2 Rakaat), Dhuhr (early afternoon, 4 Rakaat), Asr (late afternoon, 4 Rakaat), Maghrib (sunset, 3 Rakaat), Isha (night, 4 Rakaat).",
              "Cleanliness (Wudhu): washing face, arms, wiping head, and washing feet is mandatory for valid Salah."
            ],
            workedExample: {
              question: "Name the mandatory sunset prayer consisting of three Rakaat.",
              steps: [
                "Check prayer times: Fajr is dawn; Maghrib is sunset.",
                "Verify Rakaat count: Maghrib has 3 Rakaat."
              ],
              answer: "Maghrib prayer."
            },
            tryThis: {
              question: "Which ritual cleanliness washing must be performed before offering Salah?",
              choices: ["Wudhu (Ablution)", "Sawm", "Hajj", "Iftar"],
              correct: 0,
              explanation: "Wudhu purifies the body for standing before Allah."
            }
          }
        ]
      }
    
      ,{
        subtopicId: "premium-premium-practice-fasting-and-prayer",
        title: "Premium Practice: Fasting and Prayer",
        modules: [{
          moduleId: "practising-sawm-and-salah",
          title: "Practising Sawm and Salah",
          bigIdea: "Pillars questions explain both meaning and practice.",
          learnIt: ["Sawm means fasting, especially during Ramadan.", "Salah is prayer performed at prescribed times.", "Fasting teaches self-control, patience and care for the poor."],
          workedExample: { question: "Give one lesson Muslims learn from fasting.", steps: ["Fasting involves self-control.", "It helps Muslims remember needy people.", "State one lesson clearly."], answer: "Muslims learn self-control and care for the poor." },
          tryThis: { question: "Salah means:", choices: ["prayer", "fasting", "pilgrimage", "charity only"], correct: 0, explanation: "Salah is prayer." }
        }]
      }],
    quiz: [
      { q: "Which pillar of Islam mandates fasting during the ninth lunar month?", choices: ["Sawm (Fasting in Ramadan)", "Salah", "Zakat", "Hajj"], correct: 0, why: "Sawm is the fourth pillar observed in Ramadan." },
      { q: "What meal is eaten at sunset to break the daily Ramadan fast?", choices: ["Iftar", "Suhoor", "Lunch", "Eid feast"], correct: 0, why: "Iftar breaks the fast promptly at Maghrib." },
      { q: "Which category of Muslims is legitimately excused from fasting during Ramadan?", choices: ["The sick, elderly, and long-distance travelers", "Healthy youths", "Rich merchants", "Teachers"], correct: 0, why: "Islamic law grants mercy to those unable to fast safely." },
      { q: "How many mandatory Rakaat make up the Fajr dawn prayer?", choices: ["Two Rakaat", "Four Rakaat", "Three Rakaat", "One Rakah"], correct: 0, why: "Fajr consists of two obligatory units." },
      { q: "What is the primary spiritual goal of observing Sawm (Fasting)?", choices: ["To attain Taqwa (God-consciousness and piety)", "To lose weight", "To save food money", "To sleep all day"], correct: 0, why: "Quran 2:183 declares fasting is prescribed to gain Taqwa." },
      { q: "Which special congregational night prayers are performed exclusively during Ramadan?", choices: ["Taraweeh prayers", "Jummah prayers", "Janazah prayers", "Eid prayers"], correct: 0, why: "Taraweeh prayers follow Isha throughout Ramadan." },
      { q: "What invalidates or breaks ablution (Wudhu)?", choices: ["Passing wind, using the toilet, or deep sleep", "Drinking clean water", "Smiling", "Reading Quran"], correct: 0, why: "Bodily discharges require fresh Wudhu." },
      { q: "Why must Muslims face the Qiblah (Kaaba in Makkah) during Salah?", choices: ["To maintain global unity and obedience to Allah's command", "Because the sun rises there", "To look at mountains", "For decoration"], correct: 0, why: "Facing Makkah unites worshippers worldwide." }
    ]
  },
  {
    id: "p6-ire-prophet-makkah",
    themeId: "p6-ire",
    themeName: "IRE · Primary Six",
    title: "Life of Prophet Muhammad (PBUH) in Makkah",
    estMinutes: 25,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "Why this matters: Prophet Muhammad (PBUH)'s early dawah in Makkah models immense patience under persecution and unwavering commitment to truth and moral integrity.",
      learningObjectives: [
        "Describe early secret and open dawah in Makkah and patience under Quraysh persecution.",
        "Explain exemplary ethics of Prophet Muhammad (PBUH) (Al-Amin - The Trustworthy, As-Sadiq - The Truthful)."
      ],
      whatYouNeedToKnow: [
        "For three years, the Prophet preached secretly to close family and friends (Khadijah, Abu Bakr, Ali, Zayd).",
        "When ordered to preach openly at Mount Safa, the idol-worshiping Quraysh opposed and persecuted believers.",
        "Despite persecution, the Prophet remained patient and truthful, never retaliating with deceit."
      ],
      worked: {
        problem: "Why did the people of Makkah call young Muhammad 'Al-Amin' even before his prophethood?",
        steps: [
          "He never told lies and always kept people's deposits safely.",
          "His impeccable honesty earned him the title Al-Amin (The Trustworthy)."
        ],
        answer: "Because of his outstanding honesty, integrity, and trustworthiness in trade and conduct."
      },
      recap: [
        "Early persecuted martyrs included Sumayyah and Bilal ibn Rabah.",
        "Truthfulness (Sidq) leads to righteousness and Paradise."
      ]
    },
    subtopics: [
      {
        subtopicId: "p6-makkah-dawah",
        title: "1. Early Dawah and Patience Under Persecution",
        modules: [
          {
            moduleId: "p6-secret-open-preaching",
            title: "Secret Preaching, Mount Safa and Quraysh Opposition",
            bigIdea: "The Prophet endured fierce social and economic boycott with patience while inviting Makkans to monotheism.",
            learnIt: [
              "Secret Dawah: began inside Dar al-Arqam for three years. Early converts showed resilience.",
              "Open Dawah at Mount Safa: the Prophet called Quraysh clans to abandon idols for One Allah. Abu Lahab fiercely rejected him.",
              "Persecution: believers like Bilal were tortured on burning Makkah sand, yet proclaimed 'Ahad! Ahad!' (Allah is One)."
            ],
            workedExample: {
              question: "Who was the first female believer and supportive wife of Prophet Muhammad (PBUH)?",
              steps: [
                "Recall early Makkah history.",
                "Sayyidah Khadijah bint Khuwaylid believed immediately and comforted him after Hira."
              ],
              answer: "Sayyidah Khadijah (RA)."
            },
            tryThis: {
              question: "Which noble companion endured being placed under heavy heated rocks on Makkah sand without renouncing Islam?",
              choices: ["Bilal ibn Rabah (RA)", "Abu Hurairah (RA)", "Khalid ibn Walid (RA)", "Tariq ibn Ziyad (RA)"],
              correct: 0,
              explanation: "Sayyiduna Bilal exemplified steadfast patience under severe torture."
            }
          }
        ]
      },
      {
        subtopicId: "p6-islamic-ethics",
        title: "2. Islamic Ethics: Kindness, Honesty and Trustworthiness",
        modules: [
          {
            moduleId: "p6-al-amin-ethics",
            title: "Al-Amin, As-Sadiq and Kindness to Neighbors",
            bigIdea: "The Prophet's moral character demonstrated that true religion requires honest dealings and gentle mercy.",
            learnIt: [
              "Titles of honor: As-Sadiq (The Truthful) and Al-Amin (The Trustworthy). Even enemies trusted him with their valuables.",
              "Ethics: Hadith teaches that a true believer is one from whose tongue and hand others are safe."
            ],
            workedExample: {
              question: "What does the title 'Al-Amin' given to Prophet Muhammad (PBUH) mean in English?",
              steps: [
                "Recall Arabic root for trust/Amanah.",
                "Translate Al-Amin = The Trustworthy."
              ],
              answer: "The Trustworthy."
            },
            tryThis: {
              question: "According to Islamic ethics modeled by the Prophet, how should a merchant conduct business?",
              choices: ["With truthfulness, accurate weights, and zero cheating", "By hiding defects and using false scales", "By overcharging strangers", "By swearing false oaths"],
              correct: 0,
              explanation: "Honest trade is highly praised in Islamic teachings."
            }
          }
        ]
      }
    
      ,{
        subtopicId: "premium-premium-practice-prophet-muhammad-in-makkah",
        title: "Premium Practice: Prophet Muhammad (PBUH) in Makkah",
        modules: [{
          moduleId: "learning-from-early-dawah",
          title: "Learning from Early Dawah",
          bigIdea: "Seerah answers connect events to character lessons.",
          learnIt: ["Prophet Muhammad (PBUH) was known as Al-Amin, the trustworthy.", "Early Muslims faced hardship in Makkah but remained patient.", "Learners can learn truthfulness, patience, courage and trust in Allah."],
          workedExample: { question: "What lesson comes from the title Al-Amin?", steps: ["Al-Amin means trustworthy.", "Trustworthy people tell the truth and keep promises.", "Apply it to school life."], answer: "Learners should be truthful and trustworthy." },
          tryThis: { question: "Al-Amin means:", choices: ["the trustworthy", "the rich", "the traveller", "the writer only"], correct: 0, explanation: "Al-Amin means trustworthy." }
        }]
      }],
    quiz: [
      { q: "What title meaning 'The Trustworthy' did Makkans give Prophet Muhammad (PBUH) before prophethood?", choices: ["Al-Amin", "Al-Farooq", "As-Siddiq", "Saifullah"], correct: 0, why: "Al-Amin reflects his spotless trustworthiness." },
      { q: "For how many years did Prophet Muhammad (PBUH) preach Islam secretly in Makkah before preaching openly?", choices: ["Three years", "Ten years", "One year", "Five years"], correct: 0, why: "Secret dawah lasted three years." },
      { q: "At which hill in Makkah did the Prophet publicly assemble the Quraysh clans to announce Islam?", choices: ["Mount Safa", "Mount Uhud", "Mount Sinai", "Mount Judi"], correct: 0, why: "He proclaimed open monotheism from Mount Safa." },
      { q: "Who was the first close adult male companion to accept Islam outside the Prophet's household?", choices: ["Abu Bakr As-Siddiq (RA)", "Umar ibn Al-Khattab (RA)", "Uthman ibn Affan (RA)", "Hamza (RA)"], correct: 0, why: "Abu Bakr accepted Islam without hesitation." },
      { q: "How did Prophet Muhammad (PBUH) respond when Quraysh leaders offered him wealth to abandon preaching Islam?", choices: ["He firmly rejected their offers, remaining devoted to Allah's mission", "He took the money and stopped", "He ran away to Egypt", "He agreed to worship idols on weekends"], correct: 0, why: "No material wealth could compromise his prophetic duty." },
      { q: "Which title meaning 'The Truthful' was given to Prophet Muhammad (PBUH) due to his honesty?", choices: ["As-Sadiq", "Al-Ghani", "Al-Malik", "An-Noor"], correct: 0, why: "As-Sadiq honors his truthfulness." },
      { q: "What lesson do modern P6 learners gain from early Muslims persecuted in Makkah?", choices: ["Patience (Sabr), steadfast faith, and moral courage during hardship", "Revenge and hatred", "Fear and cowardice", "Cheating to escape"], correct: 0, why: "Sabr under trial is a hallmark of true faith." },
      { q: "Whose house served as the first secret educational center for early Muslims in Makkah?", choices: ["Dar al-Arqam (House of Al-Arqam)", "Dar al-Nadwa", "Kaaba courtyard", "Palace of Abu Jahl"], correct: 0, why: "Al-Arqam opened his home for early Quranic instruction." }
    ]
  }
];

export const P6_RE_TOPICS: Topic[] = balanceTopicAnswers(P6_RE_TOPICS_DATA);

export function getP6ReTopic(id: string): Topic | undefined {
  return P6_RE_TOPICS.find((topic) => topic.id === id);
}
