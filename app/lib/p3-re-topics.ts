import type { QuizQuestion, Subtopic, SubtopicModule, Topic } from "@/lib/topics";

// P3 Religious Education beta content layer.
// Source map: content/curriculum/p3-re.json from official NCDC P3 curriculum RE section.
// Supporting source cross-checks: trusted Bible, Qur'an, Hadith and Arabic-reading references documented in docs/ops/p3-re-source-research-2026-07-12.md.
// Status: beta for teacher/CRE/IRE review. P3 RE remains separate from thematic pages.

const BETA_NOTICE =
  "P3 RE beta: topics come from the official NCDC P3 Religious Education map. CRE/IRE details are cross-checked with trusted Bible, Qur'an, Hadith and Arabic-reading sources, and still need teacher review.";

type P3ReBlueprint = {
  id: string;
  term: string;
  weeks: string;
  title: string;
  subTopics: string[];
  reThemeId: "p3-cre" | "p3-ire";
  reThemeName: string;
};

type P3ReGuide = {
  icon: string;
  group: "CRE" | "IRE";
  sourceRefs: string[];
  meaning: string;
  sourcePoint: string;
  values: string[];
  practice: string;
  quiz: [string, string, string];
};

const RE_BLUEPRINTS: P3ReBlueprint[] = [
  {
    "id": "p3-cre-traditions",
    "term": "Term I",
    "weeks": "Weeks 1-3",
    "title": "Traditions",
    "subTopics": [
      "Traditional customs and practices",
      "Importance of traditional customs",
      "Other people's customs",
      "Christian customs and practices"
    ],
    "reThemeId": "p3-cre",
    "reThemeName": "Christian Religious Education"
  },
  {
    "id": "p3-cre-leadership",
    "term": "Term I",
    "weeks": "Weeks 4-6",
    "title": "Leadership",
    "subTopics": [
      "Different levels of leadership",
      "Family, village, clan, school and church leadership",
      "Good leaders from the Old Testament",
      "Jesus as a leader",
      "Qualities of good leadership today"
    ],
    "reThemeId": "p3-cre",
    "reThemeName": "Christian Religious Education"
  },
  {
    "id": "p3-cre-messengers-of-god",
    "term": "Term I",
    "weeks": "Weeks 7-9",
    "title": "Messengers of God",
    "subTopics": [
      "Different ways God speaks to people",
      "Qualities of God's messengers",
      "Children as God's messengers",
      "John the Baptist's message about Jesus",
      "Angels as messengers of God"
    ],
    "reThemeId": "p3-cre",
    "reThemeName": "Christian Religious Education"
  },
  {
    "id": "p3-cre-sorrow-joy-life",
    "term": "Term I",
    "weeks": "Weeks 10-12",
    "title": "Sorrow and Joy in Life",
    "subTopics": [
      "Lent",
      "Jesus during Holy Week",
      "Palm Sunday",
      "The Last Supper",
      "Good Friday",
      "Death and resurrection of Jesus",
      "Easter joy"
    ],
    "reThemeId": "p3-cre",
    "reThemeName": "Christian Religious Education"
  },
  {
    "id": "p3-cre-holy-spirit",
    "term": "Term II",
    "weeks": "Weeks 1-3",
    "title": "The Holy Spirit",
    "subTopics": [
      "Jesus' promise of the Holy Spirit",
      "Events of Pentecost",
      "Work of the Holy Spirit",
      "Gifts of the Holy Spirit"
    ],
    "reThemeId": "p3-cre",
    "reThemeName": "Christian Religious Education"
  },
  {
    "id": "p3-cre-worshipping-god",
    "term": "Term II",
    "weeks": "Weeks 4-6",
    "title": "Worshipping God",
    "subTopics": [
      "Guidance of the Holy Spirit",
      "Sharing good news",
      "Sharing positions and meals",
      "Praying together",
      "Reasons for worshipping God",
      "Biblical aspects of worship: offering, listening and praising"
    ],
    "reThemeId": "p3-cre",
    "reThemeName": "Christian Religious Education"
  },
  {
    "id": "p3-cre-christian-joint-activities-prayers",
    "term": "Term II",
    "weeks": "Weeks 7-9",
    "title": "Christian Joint Activities and Prayers",
    "subTopics": [
      "Christian joint activities and experiences",
      "Worshipping God in church and at home",
      "Personal prayers",
      "Thanksgiving prayers",
      "Confession prayers",
      "Petition prayers"
    ],
    "reThemeId": "p3-cre",
    "reThemeName": "Christian Religious Education"
  },
  {
    "id": "p3-cre-values-abilities-prayer",
    "term": "Term II",
    "weeks": "Weeks 10-12",
    "title": "Values, Abilities and Prayer",
    "subTopics": [
      "Values Jesus taught: honesty, responsibility and service",
      "Personal abilities from God",
      "Characteristics of God in families",
      "Jesus' example of prayer",
      "When, where and how to pray",
      "The Lord's Prayer",
      "Praying for others"
    ],
    "reThemeId": "p3-cre",
    "reThemeName": "Christian Religious Education"
  },
  {
    "id": "p3-ire-nature-quran",
    "term": "Term I",
    "weeks": "Weeks 1-3",
    "title": "Reading from the Qur'an: Nature of the Qur'an",
    "subTopics": [
      "Arabic alphabet",
      "Ayah",
      "Surah",
      "Juzu",
      "Divine nature of the Qur'an",
      "Handling and keeping the Qur'an respectfully"
    ],
    "reThemeId": "p3-ire",
    "reThemeName": "Islamic Religious Education"
  },
  {
    "id": "p3-ire-divine-books",
    "term": "Term I",
    "weeks": "Weeks 4-6",
    "title": "Tawhiid (Faith): Divine Books",
    "subTopics": [
      "Nature of the four revealed books",
      "Zaburi",
      "Tawrat/Taurat",
      "Injili",
      "Qur'an",
      "Prophets to whom the books were revealed",
      "Holiness of the Qur'an"
    ],
    "reThemeId": "p3-ire",
    "reThemeName": "Islamic Religious Education"
  },
  {
    "id": "p3-ire-nullifiers-salat-values",
    "term": "Term I",
    "weeks": "Weeks 7-9",
    "title": "Fiqh and Islamic Values",
    "subTopics": [
      "Nullifiers of Salat",
      "Ways of avoiding nullifiers of prayer",
      "Islamic values: patience",
      "Perseverance",
      "Reliance on Allah"
    ],
    "reThemeId": "p3-ire",
    "reThemeName": "Islamic Religious Education"
  },
  {
    "id": "p3-ire-first-revelation",
    "term": "Term I",
    "weeks": "Weeks 10-12",
    "title": "History of Islam: The First Revelation",
    "subTopics": [
      "Life of Prophet Muhammad (PBUH) before revelation",
      "Visit to Mount Hira",
      "Receiving the first revelation",
      "Jibril's message",
      "Khadijah's reaction",
      "The content of the first revelation"
    ],
    "reThemeId": "p3-ire",
    "reThemeName": "Islamic Religious Education"
  },
  {
    "id": "p3-ire-arabic-vowels",
    "term": "Term II",
    "weeks": "Weeks 1-3",
    "title": "Reading of the Qur'an: Vowels in Arabic",
    "subTopics": [
      "Arabic alphabet",
      "Arabic vowels",
      "Fatha",
      "Kasra",
      "Dhumma",
      "Shadda",
      "Madda",
      "Reading and writing vowels"
    ],
    "reThemeId": "p3-ire",
    "reThemeName": "Islamic Religious Education"
  },
  {
    "id": "p3-ire-content-divine-books",
    "term": "Term II",
    "weeks": "Weeks 4-6",
    "title": "Tawhiid: Importance and Content of Divine Books",
    "subTopics": [
      "Content of divine books",
      "Zaburi",
      "Tawrat",
      "Injil",
      "Qur'an",
      "Good things learnt from divine books",
      "Usefulness of their messages"
    ],
    "reThemeId": "p3-ire",
    "reThemeName": "Islamic Religious Education"
  },
  {
    "id": "p3-ire-dua-after-adhan-laws",
    "term": "Term II",
    "weeks": "Weeks 7-12",
    "title": "Dua after Adhan and Laws",
    "subTopics": [
      "Dua after Adhan",
      "Meaning and importance of Dua",
      "Law",
      "Types of laws",
      "Purpose of laws",
      "Respecting laws"
    ],
    "reThemeId": "p3-ire",
    "reThemeName": "Islamic Religious Education"
  },
  {
    "id": "p3-ire-khadijah-revelation-quran-rites",
    "term": "Term III",
    "weeks": "Weeks 1-3",
    "title": "Khadijah and the Revelation / Rites of the Qur'an",
    "subTopics": [
      "Events after the first revelation",
      "Khadijah's reaction",
      "Role of Naufal",
      "Rites before reciting the Qur'an",
      "Arabic alphabet and vowels in words"
    ],
    "reThemeId": "p3-ire",
    "reThemeName": "Islamic Religious Education"
  },
  {
    "id": "p3-ire-uniqueness-quran-impurities",
    "term": "Term III",
    "weeks": "Weeks 4-6",
    "title": "Uniqueness of the Qur'an and Impurities",
    "subTopics": [
      "Uniqueness of the Qur'an",
      "Meaning of Najasah",
      "Examples of impurities",
      "Toilet manners",
      "Ablution",
      "Conditions requiring ablution"
    ],
    "reThemeId": "p3-ire",
    "reThemeName": "Islamic Religious Education"
  },
  {
    "id": "p3-ire-dua-seeking-knowledge",
    "term": "Term III",
    "weeks": "Weeks 7-9",
    "title": "Moral and Spiritual Teachings: Dua and Seeking Knowledge",
    "subTopics": [
      "Dua",
      "Duas related to knowledge",
      "Importance of seeking knowledge",
      "Reciting Duas",
      "Role-playing Dua practices"
    ],
    "reThemeId": "p3-ire",
    "reThemeName": "Islamic Religious Education"
  }
];

const RE_GUIDES: Record<string, P3ReGuide> = {
  "p3-cre-traditions": {
    "icon": "🕊️",
    "group": "CRE",
    "sourceRefs": [
      "NCDC P3 Primary School Curriculum, May 2008, Religious Education section"
    ],
    "meaning": "Traditions are customs and practices people learn from families, communities and churches. CRE teaches children to respect good customs while following Christian love, prayer and worship.",
    "sourcePoint": "Use familiar customs such as greeting, naming, thanksgiving, church worship and family prayer. Keep the lesson respectful: learners should not mock another family or community custom.",
    "values": [
      "Respect good customs in families and communities.",
      "Compare customs politely with Christian customs such as prayer, worship and thanksgiving.",
      "Ask adults when a custom is confusing or unsafe."
    ],
    "practice": "Ask a learner to name one family or church custom and say why people value it.",
    "quiz": [
      "Which action shows respect for another person’s custom?",
      "listening politely",
      "laughing at it"
    ]
  },
  "p3-cre-leadership": {
    "icon": "🧑🏾‍🏫",
    "group": "CRE",
    "sourceRefs": [
      "NCDC P3 Primary School Curriculum, May 2008, Religious Education section"
    ],
    "meaning": "Leadership is guiding and serving people. CRE examples include family, village, clan, school and church leaders, Old Testament leaders and Jesus as a good leader.",
    "sourcePoint": "Use Bible stories of leaders such as Moses, David and Jesus to show service, courage, fairness and care for people.",
    "values": [
      "Good leaders listen, guide and serve.",
      "A child can practise leadership by helping, telling the truth and keeping class rules.",
      "Leadership is not bullying or showing off."
    ],
    "practice": "Role-play a class leader helping two learners solve a problem peacefully.",
    "quiz": [
      "A good leader should be:",
      "fair and helpful",
      "cruel and selfish"
    ]
  },
  "p3-cre-messengers-of-god": {
    "icon": "📣",
    "group": "CRE",
    "sourceRefs": [
      "NCDC P3 Primary School Curriculum, May 2008, Religious Education section"
    ],
    "meaning": "A messenger carries an important message. CRE teaches that God speaks through His word, through messengers, through John the Baptist’s message about Jesus and through angels.",
    "sourcePoint": "Use John the Baptist and angels as age-appropriate examples. Children can also carry good messages by speaking truthfully and kindly.",
    "values": [
      "A good messenger tells the truth.",
      "A child can share good news, peace and helpful reminders.",
      "Do not use messages to insult or frighten others."
    ],
    "practice": "Ask learners to practise one helpful message: “Let us keep our classroom clean.”",
    "quiz": [
      "A messenger should carry:",
      "a true helpful message",
      "a lie to hurt people"
    ]
  },
  "p3-cre-sorrow-joy-life": {
    "icon": "🌿",
    "group": "CRE",
    "sourceRefs": [
      "NCDC P3 Primary School Curriculum, May 2008, Religious Education section"
    ],
    "meaning": "Christians remember sorrow and joy through Lent, Holy Week, Palm Sunday, the Last Supper, Good Friday and Easter.",
    "sourcePoint": "Keep language gentle for P3. Explain that Christians remember Jesus’ suffering and death on Good Friday and celebrate Easter joy because Christians believe Jesus rose again.",
    "values": [
      "Comfort people who are sad.",
      "Celebrate good news with thanks to God.",
      "Use Holy Week and Easter lessons to learn love, hope and kindness."
    ],
    "practice": "Sequence simple cards: Palm Sunday, Last Supper, Good Friday, Easter.",
    "quiz": [
      "Easter reminds Christians of:",
      "joy after Jesus rose again",
      "mocking sad people"
    ]
  },
  "p3-cre-holy-spirit": {
    "icon": "🔥",
    "group": "CRE",
    "sourceRefs": [
      "NCDC P3 Primary School Curriculum, May 2008, Religious Education section",
      "BibleHub John 14:26",
      "BibleHub Acts 2:4"
    ],
    "meaning": "Christians believe Jesus promised the Holy Spirit as a helper. Pentecost teaches that the Holy Spirit helped the disciples speak boldly and serve God.",
    "sourcePoint": "John 14:26 is used as a source for the Holy Spirit as Helper/Teacher, and Acts 2 for Pentecost.",
    "values": [
      "The Holy Spirit helps Christians pray, learn and do good.",
      "Learners can ask God for help to be kind and brave.",
      "Do not pretend to have special power; focus on good actions and prayer."
    ],
    "practice": "Let learners name one good action they need help to do, such as forgiving, sharing or telling the truth.",
    "quiz": [
      "At Pentecost, Christians learn that the Holy Spirit helped the disciples to:",
      "speak boldly about God",
      "steal from people"
    ]
  },
  "p3-cre-worshipping-god": {
    "icon": "🙏",
    "group": "CRE",
    "sourceRefs": [
      "NCDC P3 Primary School Curriculum, May 2008, Religious Education section"
    ],
    "meaning": "Worshipping God includes praying, listening to God’s word, praising, offering, sharing meals and sharing good news.",
    "sourcePoint": "Use simple church and home examples: singing, prayer, giving thanks, listening respectfully and helping others.",
    "values": [
      "Worship should be respectful.",
      "Learners can worship at church and at home.",
      "Sharing and listening are part of worship."
    ],
    "practice": "Sort actions into worship actions and non-worship actions.",
    "quiz": [
      "Which one is an act of worship?",
      "praying together",
      "fighting in church"
    ]
  },
  "p3-cre-christian-joint-activities-prayers": {
    "icon": "⛪",
    "group": "CRE",
    "sourceRefs": [
      "NCDC P3 Primary School Curriculum, May 2008, Religious Education section"
    ],
    "meaning": "Christian joint activities are things Christians do together, such as worship, singing, praying, thanksgiving, confession and asking God for help.",
    "sourcePoint": "Keep prayer types simple: thanksgiving says thank you; confession says sorry; petition asks for help.",
    "values": [
      "Pray respectfully alone and with others.",
      "Thank God for good things.",
      "Say sorry when you do wrong and ask for help to change."
    ],
    "practice": "Learners match prayer types: thank you, sorry and please help.",
    "quiz": [
      "A thanksgiving prayer says:",
      "thank you to God",
      "I hate my neighbour"
    ]
  },
  "p3-cre-values-abilities-prayer": {
    "icon": "🌟",
    "group": "CRE",
    "sourceRefs": [
      "NCDC P3 Primary School Curriculum, May 2008, Religious Education section",
      "BibleHub Matthew 6:9"
    ],
    "meaning": "CRE teaches values such as honesty, responsibility and service. Christians believe abilities are gifts from God and should be used well.",
    "sourcePoint": "Matthew 6:9 is used as a source connection for the Lord’s Prayer. Teach the prayer respectfully according to the school/church tradition.",
    "values": [
      "Use abilities to help others.",
      "Pray for yourself and for others.",
      "Be honest, responsible and ready to serve."
    ],
    "practice": "Ask learners to name one ability and one way to use it to help at home or school.",
    "quiz": [
      "An ability should be used to:",
      "serve and help others",
      "boast and hurt others"
    ]
  },
  "p3-ire-nature-quran": {
    "icon": "📖",
    "group": "IRE",
    "sourceRefs": [
      "NCDC P3 Primary School Curriculum, May 2008, Religious Education section"
    ],
    "meaning": "IRE introduces the Qur’an as the holy book of Islam. Learners meet words such as Arabic alphabet, ayah, surah and juzu.",
    "sourcePoint": "Teach respect for the Qur’an: handle it cleanly, keep it in a safe place and listen carefully when it is recited.",
    "values": [
      "Handle the Qur’an respectfully.",
      "Listen quietly during recitation.",
      "Practise Arabic letters slowly and carefully."
    ],
    "practice": "Point to an Arabic letter, an ayah number and a surah name in a teacher-provided copy or chart.",
    "quiz": [
      "A Surah is:",
      "a chapter of the Qur’an",
      "a cooking pot"
    ]
  },
  "p3-ire-divine-books": {
    "icon": "📚",
    "group": "IRE",
    "sourceRefs": [
      "NCDC P3 Primary School Curriculum, May 2008, Religious Education section",
      "Quran.com Al-Baqarah 2:136"
    ],
    "meaning": "IRE teaches belief in divine books: Tawrat/Taurat, Zaburi/Zabur, Injili/Injil and the Qur’an, and the prophets linked to them.",
    "sourcePoint": "Qur’an 2:136 supports belief in what was revealed to prophets including Moses and Jesus. Teach respectfully and leave detailed theology to the teacher.",
    "values": [
      "Respect books of guidance.",
      "Use correct respectful names for prophets.",
      "Remember that Muslims believe the Qur’an is Allah’s final revealed book."
    ],
    "practice": "Match book names to prophets as taught: Tawrat—Musa (AS), Zabur—Dawud (AS), Injil—Isa (AS), Qur’an—Prophet Muhammad (PBUH).",
    "quiz": [
      "The Qur’an was revealed to:",
      "Prophet Muhammad (PBUH)",
      "a classroom desk"
    ]
  },
  "p3-ire-nullifiers-salat-values": {
    "icon": "🕌",
    "group": "IRE",
    "sourceRefs": [
      "NCDC P3 Primary School Curriculum, May 2008, Religious Education section"
    ],
    "meaning": "Fiqh here teaches that some actions spoil Salat and that Muslims should pray with patience, perseverance and reliance on Allah.",
    "sourcePoint": "Keep examples simple and teacher-reviewable: losing wudu, eating, drinking, deliberate talking/laughing or unnecessary movement during prayer can spoil Salat.",
    "values": [
      "Prepare before prayer.",
      "Stand calmly and respectfully.",
      "Be patient and rely on Allah."
    ],
    "practice": "Sort actions into “helps prayer” and “spoils prayer”.",
    "quiz": [
      "During Salat, a learner should:",
      "pray calmly and respectfully",
      "eat and laugh loudly"
    ]
  },
  "p3-ire-first-revelation": {
    "icon": "🌙",
    "group": "IRE",
    "sourceRefs": [
      "NCDC P3 Primary School Curriculum, May 2008, Religious Education section",
      "Quran.com Al-Alaq 96:1-5"
    ],
    "meaning": "IRE teaches the first revelation to Prophet Muhammad (PBUH): his visit to Mount Hira, Jibril’s message and Khadijah’s caring reaction.",
    "sourcePoint": "Qur’an 96:1-5 begins with “Read/Recite” and connects revelation with Allah who created and taught by the pen.",
    "values": [
      "Value knowledge and reading.",
      "Comfort people who are afraid or worried.",
      "Respect Prophet Muhammad (PBUH) and Khadijah (RA)."
    ],
    "practice": "Sequence the story: Mount Hira, Jibril, first revelation, Khadijah (RA) comforts him.",
    "quiz": [
      "The first revelation began with the command to:",
      "read/recite",
      "throw stones"
    ]
  },
  "p3-ire-arabic-vowels": {
    "icon": "🔤",
    "group": "IRE",
    "sourceRefs": [
      "NCDC P3 Primary School Curriculum, May 2008, Religious Education section",
      "Arabic vowel/harakat reference cross-check for Fatha, Kasra, Damma/Dhumma, Shadda and Madda"
    ],
    "meaning": "Arabic vowel marks help learners read Arabic letters correctly. Fatha gives a short “a”, Kasra a short “i”, and Dhumma/Damma a short “u”.",
    "sourcePoint": "Shadda shows a doubled sound and Madda lengthens a sound. Use teacher-led reading practice; do not rush Qur’an reading.",
    "values": [
      "Practise slowly and carefully.",
      "Respect classmates who are still learning.",
      "Ask a teacher before reading unfamiliar Qur’an text."
    ],
    "practice": "Read ba, bi, bu using Fatha, Kasra and Dhumma/Damma on the same letter.",
    "quiz": [
      "Kasra is usually read with a short:",
      "i sound",
      "drum sound"
    ]
  },
  "p3-ire-content-divine-books": {
    "icon": "📘",
    "group": "IRE",
    "sourceRefs": [
      "NCDC P3 Primary School Curriculum, May 2008, Religious Education section",
      "Quran.com Al-Baqarah 2:136"
    ],
    "meaning": "Divine books teach guidance, worship of Allah, good behaviour, truthfulness and obedience. IRE reviews Tawrat, Zabur, Injil and Qur’an.",
    "sourcePoint": "Connect the lesson to respect, good conduct and belief in Allah’s guidance as taught in the P3 map.",
    "values": [
      "Learn good things from guidance.",
      "Tell the truth and obey Allah.",
      "Respect people when discussing religious books."
    ],
    "practice": "Name one good behaviour taught by divine guidance, such as truthfulness, kindness or prayer.",
    "quiz": [
      "Divine books teach people to:",
      "do good and worship Allah",
      "hate learning"
    ]
  },
  "p3-ire-dua-after-adhan-laws": {
    "icon": "📣",
    "group": "IRE",
    "sourceRefs": [
      "NCDC P3 Primary School Curriculum, May 2008, Religious Education section",
      "Sunnah.com Sahih al-Bukhari 614"
    ],
    "meaning": "IRE teaches Dua after Adhan and the importance of laws. Laws guide people at home, school, community and in worship.",
    "sourcePoint": "Sahih al-Bukhari 614 is a source for the well-known Dua after Adhan. Teach transliteration/meaning according to teacher guidance.",
    "values": [
      "Listen respectfully to the Adhan.",
      "Make Dua politely.",
      "Follow good laws and school rules."
    ],
    "practice": "Role-play hearing the Adhan, listening quietly, then making a short Dua with teacher guidance.",
    "quiz": [
      "A law helps people to:",
      "live in order and safety",
      "fight all the time"
    ]
  },
  "p3-ire-khadijah-revelation-quran-rites": {
    "icon": "🤲",
    "group": "IRE",
    "sourceRefs": [
      "NCDC P3 Primary School Curriculum, May 2008, Religious Education section"
    ],
    "meaning": "This topic reviews events after the first revelation, Khadijah’s caring reaction, Waraqa/Naufal, and respectful rites before reciting the Qur’an.",
    "sourcePoint": "Keep the story simple: Khadijah (RA) comforted Prophet Muhammad (PBUH) and helped him after the first revelation.",
    "values": [
      "Comfort people who are afraid.",
      "Prepare respectfully before Qur’an recitation.",
      "Practise Arabic letters and vowels carefully."
    ],
    "practice": "Sort actions into “before reciting Qur’an” and “not respectful before reciting Qur’an”.",
    "quiz": [
      "Khadijah (RA) helped Prophet Muhammad (PBUH) by:",
      "comforting him",
      "mocking him"
    ]
  },
  "p3-ire-uniqueness-quran-impurities": {
    "icon": "💧",
    "group": "IRE",
    "sourceRefs": [
      "NCDC P3 Primary School Curriculum, May 2008, Religious Education section"
    ],
    "meaning": "IRE teaches the uniqueness of the Qur’an and simple cleanliness rules: Najasah means impurity, and Muslims learn toilet manners and ablution.",
    "sourcePoint": "Teach cleanliness gently and practically: use the latrine properly, clean yourself, wash hands and make wudu/ablution as guided.",
    "values": [
      "Keep the body, clothes and prayer place clean.",
      "Use toilet manners respectfully.",
      "Treat the Qur’an with special respect."
    ],
    "practice": "Put steps in order: use latrine, clean yourself, wash hands, prepare for prayer or Qur’an reading.",
    "quiz": [
      "Ablution helps a Muslim prepare for:",
      "prayer",
      "spoiling books"
    ]
  },
  "p3-ire-dua-seeking-knowledge": {
    "icon": "🧠",
    "group": "IRE",
    "sourceRefs": [
      "NCDC P3 Primary School Curriculum, May 2008, Religious Education section",
      "Quran.com Taha 20:114"
    ],
    "meaning": "IRE teaches Dua and seeking knowledge. Learners practise Duas related to knowledge and learn that seeking useful knowledge is important.",
    "sourcePoint": "Qur’an 20:114 includes the Dua meaning “My Lord, increase me in knowledge.” Use the Arabic and translation according to teacher guidance.",
    "values": [
      "Ask Allah for useful knowledge.",
      "Listen to teachers and parents.",
      "Use knowledge to do good."
    ],
    "practice": "Practise a short Dua for knowledge and say one good reason for learning.",
    "quiz": [
      "A learner asks Allah to increase him or her in:",
      "knowledge",
      "laziness"
    ]
  }
};

function sentenceList(items: string[], limit = 6): string {
  const selected = items.filter(Boolean).slice(0, limit);
  if (selected.length === 0) return "the official P3 RE sub-topics";
  if (selected.length === 1) return selected[0];
  return `${selected.slice(0, -1).join(", ")} and ${selected[selected.length - 1]}`;
}

function wrongChoices(answer: string): string[] {
  return ["a football score", "a torn shoe lace", "a hidden phone game"].filter((choice) => choice !== answer).slice(0, 3);
}

function makeTryThis(question: string, answer: string, explanation: string): NonNullable<SubtopicModule["tryThis"]> {
  return { question, choices: [answer, ...wrongChoices(answer)], correct: 0, explanation };
}

function buildModules(topic: P3ReBlueprint, guide: P3ReGuide): SubtopicModule[] {
  const imageUrl = `/images/p3/re/${topic.id}.svg`;
  return [
    {
      moduleId: `${topic.id}-official-map`,
      title: "Official NCDC RE focus",
      bigIdea: guide.meaning,
      imageUrl,
      imageCaption: `P3 ${guide.group}: ${topic.title}.`,
      learnIt: [
        `Official P3 RE sub-topics include ${sentenceList(topic.subTopics)}.`,
        guide.meaning,
        "This lesson should be taught respectfully and simply for P3 learners.",
        guide.group === "IRE" ? "Use respectful wording for Prophet Muhammad (PBUH) and other prophets, and let the teacher guide Arabic recitation." : "Use Bible stories, church/home examples and child-friendly language guided by the teacher.",
      ],
      workedExample: {
        question: `What is one key idea in ${topic.title}?`,
        steps: ["Read the topic title.", "Choose one official sub-topic.", "Say it in a short respectful sentence."],
        answer: `One key idea is: ${topic.subTopics[0] ?? topic.title}.`,
      },
      tryThis: makeTryThis(
        `Which one belongs to "${topic.title}"?`,
        topic.subTopics[0] ?? topic.title,
        `${topic.subTopics[0] ?? topic.title} is listed in the official P3 RE map.`,
      ),
    },
    {
      moduleId: `${topic.id}-trusted-source`,
      title: "Trusted source connection",
      bigIdea: "This module connects the official RE topic to trusted faith sources without overloading a P3 learner.",
      imageUrl,
      imageCaption: `Trusted source connection for ${topic.title}.`,
      learnIt: [
        guide.sourcePoint,
        `Source cross-checks for builder/reviewer: ${guide.sourceRefs.join("; ")}.`,
        "Learners do not need long quotations here; they need the correct idea, respectful language and guided practice.",
        "Teachers should adjust wording according to the school faith tradition and learner age.",
      ],
      workedExample: {
        question: "How should a learner use a trusted religious source?",
        steps: ["Listen to the teacher.", "Use the correct faith terms.", "Ask respectfully when unsure."],
        answer: "A learner should listen carefully, use respectful words and ask the teacher for help.",
      },
      tryThis: makeTryThis(
        "A trusted source helps us to:",
        "learn the correct faith idea",
        "Trusted sources help keep RE content accurate before teacher verification.",
      ),
    },
    {
      moduleId: `${topic.id}-values-practice`,
      title: "Values and daily practice",
      bigIdea: "P3 Religious Education should help children practise good values at home, school and in the community.",
      imageUrl,
      imageCaption: `Values and daily practice for ${topic.title}.`,
      learnIt: [
        ...guide.values,
        guide.practice,
        "Speak about other people's faith and customs respectfully.",
      ],
      workedExample: {
        question: "Name one good value from this RE topic.",
        steps: ["Think about the lesson.", "Choose one good action.", "Say how to practise it at school or home."],
        answer: guide.values[0] ?? "Use respectful words and good actions.",
      },
      tryThis: makeTryThis(guide.quiz[0], guide.quiz[1], `Correct: ${guide.quiz[1]} shows respectful RE learning.`),
    },
  ];
}

function buildSubtopics(topic: P3ReBlueprint, guide: P3ReGuide): Subtopic[] {
  return [
    {
      subtopicId: `${topic.id}-lesson`,
      title: `1. ${topic.title}`,
      modules: buildModules(topic, guide),
    },
  ];
}

function buildQuiz(topic: P3ReBlueprint, guide: P3ReGuide): QuizQuestion[] {
  const firstSub = topic.subTopics[0] ?? topic.title;
  const secondSub = topic.subTopics[1] ?? topic.title;
  return [
    { q: `${topic.title} is part of:`, choices: [topic.reThemeName, "P3 Mathematics only", "a phone game", "a market receipt"], correct: 0, why: `This topic is in the official P3 ${topic.reThemeName} map.` },
    { q: `Which one belongs to "${topic.title}"?`, choices: [firstSub, "throwing rubbish", "mocking others", "running away from class"], correct: 0, why: `${firstSub} is listed under this topic.` },
    { q: `Another official sub-topic is:`, choices: [secondSub, "fighting", "stealing", "spoiling books"], correct: 0, why: `${secondSub} is part of the official map for this topic.` },
    { q: guide.quiz[0], choices: [guide.quiz[1], guide.quiz[2], "hiding the truth", "laughing at faith"], correct: 0, why: `${guide.quiz[1]} is the respectful answer.` },
    { q: "In RE, learners should speak about faith:", choices: ["respectfully", "rudely", "carelessly", "with insults"], correct: 0, why: "Religious Education needs respectful words." },
    { q: "A P3 learner should ask for help from:", choices: ["a teacher or trusted adult", "a stranger online", "nobody ever", "a hidden phone game"], correct: 0, why: "Teachers and trusted adults guide religious learning." },
    { q: "Good RE learning should help a child:", choices: ["do good at home and school", "hate classmates", "waste time", "break rules"], correct: 0, why: "RE should build good values and behaviour." },
    { q: "This P3 RE topic is still:", choices: ["beta for teacher review", "premium-final with no review needed", "not from the curriculum", "a P7 topic only"], correct: 0, why: "P3 RE is beta and needs CRE/IRE teacher verification." },
  ];
}

function buildTopic(topic: P3ReBlueprint): Topic {
  const guide = RE_GUIDES[topic.id];
  return {
    id: topic.id,
    themeId: topic.reThemeId,
    themeName: topic.reThemeName,
    title: topic.title,
    estMinutes: 45,
    status: "published",
    reviewStatus: "beta",
    note: {
      intro: `${BETA_NOTICE} ${topic.term}, ${topic.weeks}: ${topic.title}.`,
      learningObjectives: [
        `Name key ideas in ${topic.title}.`,
        "Use respectful CRE/IRE words and examples.",
        "Connect the official RE topic to good daily behaviour.",
      ],
      whatYouNeedToKnow: [
        guide.meaning,
        `Official sub-topics: ${sentenceList(topic.subTopics)}.`,
        guide.sourcePoint,
        "This content is beta and must be checked by CRE/IRE teachers before premium-final release.",
      ],
      worked: {
        problem: `Write one respectful sentence about ${topic.title}.`,
        steps: ["Choose one official sub-topic.", "Use respectful faith wording.", "Write a short sentence."],
        answer: `Example: I can learn about ${topic.subTopics[0] ?? topic.title} respectfully.`,
      },
      commonMistakes: [
        "Mocking another person's faith or custom.",
        "Using difficult adult wording when a P3 learner needs a simple explanation.",
        "Forgetting that this RE content is beta and needs teacher verification.",
      ],
      recap: [
        `${topic.title} belongs to ${topic.reThemeName}.`,
        "The lesson should use respectful words and trusted sources.",
        "Teachers remain the final review layer before premium-final status.",
      ],
    },
    subtopics: buildSubtopics(topic, guide),
    quiz: buildQuiz(topic, guide),
  };
}

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

export const P3_RE_TOPICS: Topic[] = balanceTopicAnswers(RE_BLUEPRINTS.map(buildTopic));
export const P3_CRE_TOPICS = P3_RE_TOPICS.filter((topic) => topic.themeId === "p3-cre");
export const P3_IRE_TOPICS = P3_RE_TOPICS.filter((topic) => topic.themeId === "p3-ire");

export function getP3ReTopic(id: string): Topic | undefined {
  return P3_RE_TOPICS.find((topic) => topic.id === id);
}
