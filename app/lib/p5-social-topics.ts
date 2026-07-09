import type { Topic } from "@/lib/topics";

// P5 Social Studies beta content layer.
// Source map: content/curriculum/p5-social-studies.json.
// Rule: NCDC first, build second. This follows the researched P5 Set One Social Studies structure.

type Seed = {
  id: string;
  title: string;
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
  return {
    id: seed.id,
    themeId: "p5-sst-uganda",
    themeName: "Primary Five Social Studies: Uganda",
    title: seed.title,
    estMinutes: seed.minutes,
    status: "published",
    reviewStatus: "beta",
    note: {
      intro: `P5 beta content: verify against official NCDC Primary Five Social Studies before public-final release. ${seed.intro}`,
      learningObjectives: seed.objectives,
      whatYouNeedToKnow: seed.know,
      worked: seed.worked,
      recap: seed.know.slice(0, 3),
    },
    subtopics: [
      {
        subtopicId: `${seed.id}-key-ideas`,
        title: "1. Key ideas",
        modules: seed.modules.slice(0, Math.ceil(seed.modules.length / 2)).map(moduleToContent),
      },
      {
        subtopicId: `${seed.id}-premium-practice`,
        title: "2. Premium practice and reasoning",
        modules: seed.modules.slice(Math.ceil(seed.modules.length / 2)).map(moduleToContent),
      },
    ],
    quiz: seed.quiz.map((item) => ({ ...item, correct: 0 })),
  };
}

function moduleToContent(m: Seed["modules"][number]) {
  return {
    moduleId: m.id,
    title: m.title,
    bigIdea: m.bigIdea,
    learnIt: m.learn,
    workedExample: { question: m.question, steps: m.steps, answer: m.answer },
    tryThis: { question: m.tryQ, choices: m.choices, correct: 0, explanation: m.explanation },
  };
}

const SEEDS: Seed[] = [
  {
    id: "p5-location-uganda-map-east-africa",
    title: "Location of Uganda on the Map of East Africa",
    minutes: 28,
    intro: "Learners locate Uganda in East Africa using neighbours, water bodies and compass directions.",
    objectives: ["Locate Uganda on the map of East Africa.", "Name Uganda's neighbours and nearby water bodies.", "Use compass directions and simple map symbols."],
    know: ["Uganda is found in East Africa.", "Uganda is landlocked because it has no coastline.", "Uganda neighbours Kenya, Tanzania, Rwanda, Democratic Republic of Congo and South Sudan."],
    worked: { problem: "Why is Uganda called landlocked?", steps: ["Landlocked means a country has no coastline.", "Uganda has no direct access to the sea.", "It uses neighbouring countries' routes to reach seaports."], answer: "Uganda is landlocked because it has no coastline or direct access to the sea." },
    modules: [
      { id: "uganda-location-neighbours", title: "Uganda and Its Neighbours", bigIdea: "Uganda is located by naming its region, neighbours and surrounding features.", learn: ["Uganda is in East Africa.", "Kenya is to the east, Tanzania and Rwanda are to the south, DRC is to the west and South Sudan is to the north.", "Lake Victoria lies to the south of Uganda."], question: "Name two countries that border Uganda.", steps: ["Recall Uganda's neighbours.", "Choose any two correct countries."], answer: "Kenya and Tanzania border Uganda.", tryQ: "Which country lies east of Uganda?", choices: ["Kenya", "Ghana", "Nigeria", "Morocco"], explanation: "Kenya is east of Uganda." },
      { id: "map-directions-symbols", title: "Compass Directions and Map Symbols", bigIdea: "Maps are easier to read when learners understand direction and symbols.", learn: ["A compass shows north, east, south and west.", "Map symbols stand for features such as towns, roads, rivers and lakes.", "A map key explains what each symbol means."], question: "Why is a map key important?", steps: ["A map uses symbols.", "The key explains those symbols.", "Without a key, symbols may be misunderstood."], answer: "A map key explains the symbols used on a map.", tryQ: "Which item explains map symbols?", choices: ["Key", "Title only", "Border only", "Colour only"], explanation: "A key explains symbols." },
    ],
    quiz: [
      { q: "Uganda is found in:", choices: ["East Africa", "West Africa", "Europe", "South America"], why: "Uganda is an East African country." },
      { q: "Why is Uganda landlocked?", choices: ["It has no coastline", "It has many oceans", "It is an island", "It has no lakes"], why: "Landlocked countries have no coastline." },
      { q: "Which lake lies to the south of Uganda?", choices: ["Lake Victoria", "Lake Chad", "Lake Malawi only", "Lake Tanganyika only"], why: "Lake Victoria lies in the southern part of Uganda." },
      { q: "Which country neighbours Uganda?", choices: ["Kenya", "Egypt", "Brazil", "India"], why: "Kenya borders Uganda to the east." },
      { q: "A map key is used to:", choices: ["Explain symbols", "Cook food", "Measure time", "Store money"], why: "A key explains map symbols." },
      { q: "Which direction is opposite north?", choices: ["South", "East", "West", "North-east"], why: "South is opposite north." },
    ],
  },
  {
    id: "p5-physical-features-uganda",
    title: "Physical Features in Uganda",
    minutes: 30,
    intro: "Learners study mountains, lakes, rivers, valleys, plains and their importance to people.",
    objectives: ["Name major physical features in Uganda.", "State their importance and problems.", "Explain simple formation ideas where appropriate."],
    know: ["Physical features are natural features on the land surface.", "Uganda has mountains, lakes, rivers, swamps, plains and plateaus.", "Physical features support fishing, farming, tourism, transport and hydro-electric power."],
    worked: { problem: "Give two uses of lakes in Uganda.", steps: ["Think of activities people do on lakes.", "Fishing provides food and income.", "Transport and tourism can also take place on lakes."], answer: "Lakes are used for fishing and transport." },
    modules: [
      { id: "uganda-relief-features", title: "Mountains, Rivers and Lakes", bigIdea: "Uganda's physical features affect settlement, transport, farming and tourism.", learn: ["Mountains include Rwenzori and Elgon.", "Rivers and lakes provide water, fish and transport routes.", "Swamps can provide papyrus and habitats for wildlife but may make transport difficult."], question: "Why are rivers important?", steps: ["Rivers provide water.", "They may support fishing, irrigation and hydro-electric power."], answer: "Rivers provide water and may support fishing, irrigation and power generation.", tryQ: "Which is a mountain in Uganda?", choices: ["Rwenzori", "Sahara", "Atlantic", "Nile only"], explanation: "Rwenzori is a mountain range in Uganda." },
      { id: "importance-problems-features", title: "Importance and Problems", bigIdea: "A strong Social Studies answer gives both use and possible problem of a feature.", learn: ["Mountains attract tourists but may make transport difficult.", "Lakes provide fish but may have water weeds, storms or disease vectors near shores.", "Rivers may flood but also support irrigation and power generation."], question: "State one problem of living near a river.", steps: ["Rivers can flood during heavy rains.", "Floods can destroy crops and homes."], answer: "Flooding can destroy crops and homes near rivers.", tryQ: "Which is a benefit of mountains?", choices: ["Tourism", "No rainfall anywhere", "Removing all roads", "Making maps useless"], explanation: "Mountains can attract tourists." },
    ],
    quiz: [
      { q: "Which is a physical feature?", choices: ["River", "School uniform", "Book", "Pencil"], why: "A river is a natural feature." },
      { q: "Which mountain is found in Uganda?", choices: ["Rwenzori", "Kilimanjaro only", "Everest", "Atlas only"], why: "Rwenzori is in western Uganda." },
      { q: "A use of lakes is:", choices: ["Fishing", "Typing", "Baking bread", "Making pencils only"], why: "Many people fish in lakes." },
      { q: "Which problem can rivers cause?", choices: ["Flooding", "No water", "No fish anywhere", "No transport"], why: "Rivers may flood during heavy rain." },
      { q: "Swamps may provide:", choices: ["Papyrus", "Petrol", "Gold only", "Desert sand"], why: "Papyrus grows in swamps." },
      { q: "Hydro-electric power uses energy from:", choices: ["Moving water", "Dry paper", "Dust", "Silence"], why: "Moving water can generate electricity." },
    ],
  },
  {
    id: "p5-climate-uganda",
    title: "Climate of Uganda",
    minutes: 28,
    intro: "Learners study weather and climate elements and how climate affects people's activities.",
    objectives: ["Name elements of weather and climate.", "Describe rainfall and temperature in Uganda.", "Explain how climate affects farming and settlement."],
    know: ["Weather is the condition of the atmosphere for a short time.", "Climate is the average weather of a place over a long period.", "Rainfall and temperature affect crops, animals, clothing and settlement."],
    worked: { problem: "Why do farmers need rainfall?", steps: ["Crops need water to grow.", "Rainfall provides water for crops and pasture."], answer: "Farmers need rainfall because crops and pasture need water to grow." },
    modules: [
      { id: "weather-climate-elements", title: "Weather and Climate Elements", bigIdea: "Weather and climate are described using elements such as rainfall, temperature, wind and sunshine.", learn: ["Rainfall is water that falls from clouds.", "Temperature tells how hot or cold a place is.", "Wind is moving air."], question: "What is temperature?", steps: ["Temperature describes hotness or coldness.", "It is often measured using a thermometer."], answer: "Temperature is the degree of hotness or coldness of a place or object.", tryQ: "Which instrument measures temperature?", choices: ["Thermometer", "Rain gauge", "Compass", "Ruler"], explanation: "A thermometer measures temperature." },
      { id: "climate-effects", title: "Effects of Climate", bigIdea: "Climate influences what people grow, wear and where they settle.", learn: ["Wet areas can support crops that need much water.", "Dry areas may have fewer crops and more need for irrigation.", "Cool highland areas may support different crops from hot lowlands."], question: "How can drought affect farmers?", steps: ["Drought means a long period with little or no rain.", "Crops may dry up.", "Animals may lack pasture and water."], answer: "Drought can make crops dry up and reduce pasture and water for animals.", tryQ: "A long period without enough rain is called:", choices: ["Drought", "Flood", "Breeze", "Sunrise"], explanation: "Drought is a long dry period." },
    ],
    quiz: [
      { q: "Weather means:", choices: ["Condition of atmosphere for a short time", "Population size", "A type of soil", "A river"], why: "Weather changes daily or hourly." },
      { q: "Climate means:", choices: ["Average weather over a long time", "One minute of sunshine", "A road sign", "A market"], why: "Climate is long-term weather pattern." },
      { q: "Which is an element of weather?", choices: ["Rainfall", "School bag", "Bank teller", "Pencil"], why: "Rainfall is a weather element." },
      { q: "Temperature is measured using:", choices: ["Thermometer", "Compass", "Ruler", "Clock only"], why: "A thermometer measures temperature." },
      { q: "Drought means:", choices: ["Long dry period", "Too much money", "Heavy daily rainfall", "A lake"], why: "Drought is prolonged lack of rain." },
      { q: "Climate affects farming because:", choices: ["Crops need suitable rainfall and temperature", "Crops do not need weather", "Only books grow", "Animals do not need water"], why: "Farming depends on rainfall and temperature." },
    ],
  },
  {
    id: "p5-vegetation-uganda",
    title: "Vegetation in Uganda",
    minutes: 28,
    intro: "Learners study vegetation types, uses and conservation in Uganda.",
    objectives: ["Name types of vegetation in Uganda.", "State uses of vegetation.", "Describe conservation methods."],
    know: ["Vegetation means plant cover in an area.", "Uganda has forests, savanna grasslands, swamps and cultivated vegetation.", "Vegetation provides timber, medicine, pasture, food, shade and habitats."],
    worked: { problem: "Give two ways of conserving vegetation.", steps: ["Plant trees to replace those cut.", "Control bush burning and overgrazing."], answer: "Afforestation and controlling bush burning conserve vegetation." },
    modules: [
      { id: "vegetation-types-uses", title: "Types and Uses of Vegetation", bigIdea: "Vegetation is useful to people, animals and the environment.", learn: ["Forests provide timber, medicine and habitats.", "Grasslands provide pasture for animals.", "Swamps provide papyrus and habitats for birds and fish."], question: "Give two uses of forests.", steps: ["Forests provide timber.", "They also provide medicine, fruits or wildlife habitats."], answer: "Forests provide timber and habitats for wildlife.", tryQ: "Vegetation means:", choices: ["Plant cover", "Animal bones", "Road network", "School fees"], explanation: "Vegetation is plant cover." },
      { id: "vegetation-conservation", title: "Conservation of Vegetation", bigIdea: "Vegetation must be protected because careless use damages land and resources.", learn: ["Afforestation means planting trees where there were none or where trees were removed.", "Re-afforestation means planting trees again in a deforested area.", "Controlled grazing and fire control help protect vegetation."], question: "Why should bush burning be controlled?", steps: ["Bush burning destroys plant cover.", "It may kill small animals and expose soil to erosion."], answer: "It destroys vegetation and exposes soil to erosion.", tryQ: "Which action conserves vegetation?", choices: ["Planting trees", "Bush burning", "Overgrazing", "Cutting all forests"], explanation: "Planting trees conserves vegetation." },
    ],
    quiz: [
      { q: "Vegetation means:", choices: ["Plant cover", "Water body", "Road", "House"], why: "Vegetation is plant cover." },
      { q: "Which vegetation provides papyrus?", choices: ["Swamp", "Desert only", "Ice cap", "Bare rock"], why: "Papyrus grows in swamps." },
      { q: "A use of forests is:", choices: ["Timber", "Petrol only", "Glass", "Salt only"], why: "Forests provide timber." },
      { q: "Which action destroys vegetation?", choices: ["Bush burning", "Afforestation", "Controlled grazing", "Tree planting"], why: "Bush burning destroys vegetation." },
      { q: "Planting trees where they were cut is:", choices: ["Re-afforestation", "Overgrazing", "Erosion", "Mining"], why: "Re-afforestation replaces cut trees." },
      { q: "Grasslands are useful for:", choices: ["Pasture", "Making petrol", "Making glass", "Only fishing"], why: "Grasslands feed animals." },
    ],
  },
  {
    id: "p5-natural-resources-uganda",
    title: "Natural Resources in Uganda",
    minutes: 28,
    intro: "Learners study natural resources, their uses and conservation.",
    objectives: ["Explain natural resources.", "Name resources in Uganda.", "State uses and conservation methods."],
    know: ["Natural resources are things provided by nature that people use.", "Examples include land, water, forests, minerals, wildlife and climate.", "Resources should be used carefully so they remain useful."],
    worked: { problem: "Why should forests be conserved?", steps: ["Forests provide useful products.", "They protect soil and support rainfall and wildlife.", "If destroyed, people and animals lose benefits."], answer: "Forests should be conserved because they provide resources and protect the environment." },
    modules: [
      { id: "resource-types-uses", title: "Types and Uses of Resources", bigIdea: "Natural resources support life and economic activities.", learn: ["Land supports farming and settlement.", "Water is used for domestic work, farming, fishing and transport.", "Wildlife supports tourism and biodiversity."], question: "Give two uses of water as a resource.", steps: ["People use water at home.", "Farmers use water for crops or animals."], answer: "Water is used for domestic work and farming.", tryQ: "Which is a natural resource?", choices: ["Water", "Plastic spoon", "School uniform", "Exercise book"], explanation: "Water is provided by nature." },
      { id: "resource-conservation", title: "Conserving Resources", bigIdea: "Conservation means using resources wisely and protecting them from destruction.", learn: ["Plant trees to conserve forests.", "Avoid polluting water sources.", "Protect wildlife through national parks and laws."], question: "How can people conserve water sources?", steps: ["Do not dump rubbish in water.", "Protect vegetation near water sources."], answer: "People can avoid pollution and protect vegetation near water sources.", tryQ: "Which action conserves resources?", choices: ["Planting trees", "Poaching wildlife", "Polluting rivers", "Wasting water"], explanation: "Planting trees conserves forest resources." },
    ],
    quiz: [
      { q: "A natural resource is:", choices: ["Provided by nature", "Always made in factory", "Only a book", "A school rule"], why: "Natural resources come from nature." },
      { q: "Which is a natural resource?", choices: ["Land", "Plastic bag", "Shoe lace", "Pen cap"], why: "Land is provided by nature." },
      { q: "Water can be used for:", choices: ["Irrigation", "Breaking all tools", "Making dust", "Stopping crops"], why: "Water supports irrigation." },
      { q: "Wildlife supports:", choices: ["Tourism", "Soil erosion only", "Pollution", "Deforestation"], why: "Tourists visit wildlife." },
      { q: "Which action protects resources?", choices: ["Avoiding water pollution", "Dumping waste in rivers", "Poaching", "Burning forests"], why: "Avoiding pollution protects water." },
      { q: "Conservation means:", choices: ["Using resources wisely", "Destroying resources", "Wasting everything", "Ignoring nature"], why: "Conservation protects resources." },
    ],
  },
  {
    id: "p5-people-precolonial-uganda",
    title: "The People of Pre-Colonial Uganda",
    minutes: 30,
    intro: "Learners study ethnic groups, migration, settlement, leadership and culture before colonial rule.",
    objectives: ["Name some ethnic groups in Uganda.", "Explain migration and settlement reasons.", "Describe pre-colonial leadership and culture."],
    know: ["Pre-colonial means the period before colonial rule.", "People migrated because of pasture, fertile land, water, trade, security or population pressure.", "Pre-colonial communities had leaders, customs, occupations and belief systems."],
    worked: { problem: "Give one reason why pastoral groups migrated.", steps: ["Pastoral groups keep animals.", "Animals need pasture and water.", "Groups moved to find pasture and water."], answer: "They migrated in search of pasture and water for their animals." },
    modules: [
      { id: "ethnic-groups-migration", title: "Ethnic Groups and Migration", bigIdea: "Uganda's people have different origins, languages and cultures.", learn: ["Ethnic groups include Baganda, Banyankole, Basoga, Iteso, Acholi, Bagisu and many others.", "Migration means movement of people from one place to another.", "Push and pull factors influenced settlement."], question: "What is migration?", steps: ["People move from one place to another.", "They may move for land, water, security or trade."], answer: "Migration is movement of people from one place to another.", tryQ: "Which is a reason for migration?", choices: ["Search for pasture", "No need for water", "Only sleeping", "Breaking pots"], explanation: "Pastoral groups may move for pasture." },
      { id: "precolonial-leadership-culture", title: "Leadership and Culture", bigIdea: "Pre-colonial societies had systems for leadership, work, worship and social life.", learn: ["Some communities had kings, chiefs or clan leaders.", "Culture includes language, dress, food, music, ceremonies and customs.", "People worked as farmers, pastoralists, hunters, fishermen, traders and craftsmen."], question: "Give two examples of culture.", steps: ["Think of how people live and express identity.", "Language and music are examples."], answer: "Language and music are examples of culture.", tryQ: "Which is a cultural practice?", choices: ["Traditional dance", "Soil erosion", "Thermometer reading", "Long division"], explanation: "Traditional dance is part of culture." },
    ],
    quiz: [
      { q: "Pre-colonial means:", choices: ["Before colonial rule", "After independence only", "During computer age", "After 2020"], why: "Pre-colonial means before colonial rule." },
      { q: "Which is an ethnic group in Uganda?", choices: ["Baganda", "Europe", "Pacific", "Compass"], why: "Baganda are an ethnic group in Uganda." },
      { q: "Migration means:", choices: ["Movement of people", "Measuring rain", "Writing letters", "Counting money"], why: "Migration is movement from one place to another." },
      { q: "A reason for migration is:", choices: ["Search for fertile land", "No need for food", "Destroying all homes", "Hiding maps"], why: "People may move to find fertile land." },
      { q: "Culture includes:", choices: ["Language and music", "Only stones", "Only rainfall", "Only roads"], why: "Language and music are cultural features." },
      { q: "A pre-colonial leader could be a:", choices: ["chief", "thermometer", "bicycle", "river"], why: "Chiefs were leaders in some communities." },
    ],
  },
  {
    id: "p5-foreign-influence-uganda",
    title: "Foreign Influence in Uganda",
    minutes: 30,
    intro: "Learners study early foreigners, missionaries, explorers, traders and their effects on Uganda.",
    objectives: ["Name groups of foreigners who came to Uganda.", "State reasons why they came.", "Explain effects of foreign influence."],
    know: ["Foreigners came as traders, explorers, missionaries and colonial agents.", "Missionaries spread religion and built schools and hospitals.", "Foreign influence had both positive and negative effects."],
    worked: { problem: "Give one positive and one negative effect of foreign influence.", steps: ["Positive effects may include schools or hospitals.", "Negative effects may include loss of independence or land."], answer: "Foreigners introduced schools, but colonial rule reduced African independence." },
    modules: [
      { id: "foreigners-reasons", title: "Foreigners and Their Reasons", bigIdea: "Different foreigners came for trade, religion, exploration or control.", learn: ["Traders came to exchange goods.", "Missionaries came to spread Christianity.", "Explorers came to find information about places and resources."], question: "Why did missionaries come to Uganda?", steps: ["Missionaries were religious people.", "They came to spread Christianity and build mission centres."], answer: "They came to spread Christianity.", tryQ: "Which group spread Christianity?", choices: ["Missionaries", "Only hunters", "Only fishermen", "Only farmers"], explanation: "Missionaries spread Christianity." },
      { id: "effects-foreign-influence", title: "Effects of Foreign Influence", bigIdea: "Foreign influence changed education, religion, trade, leadership and land ownership.", learn: ["Positive effects included schools, hospitals, new crops, roads and literacy.", "Negative effects included loss of independence, forced labour, taxes and land loss.", "A strong answer explains the effect, not just names it."], question: "How did mission schools affect Uganda?", steps: ["Mission schools taught reading and writing.", "They helped spread formal education."], answer: "Mission schools helped introduce formal education." , tryQ: "Which was a negative effect of colonial rule?", choices: ["Loss of independence", "More African control", "No taxes anywhere", "No forced labour anywhere"], explanation: "Colonial rule reduced African self-rule." },
    ],
    quiz: [
      { q: "Missionaries mainly came to spread:", choices: ["Christianity", "volcanic ash", "electricity", "soil erosion"], why: "Missionaries spread Christianity." },
      { q: "Explorers came mainly to:", choices: ["find information about places", "teach algebra only", "sell phones", "build satellites"], why: "Explorers gathered geographical information." },
      { q: "A positive effect of missionaries was:", choices: ["schools", "loss of all crops", "ending all learning", "destroying all roads"], why: "Missionaries built schools." },
      { q: "A negative effect of colonial rule was:", choices: ["loss of independence", "more self-rule", "no taxes", "free land for all"], why: "Colonial rule reduced independence." },
      { q: "Foreign traders came to:", choices: ["exchange goods", "measure rainfall only", "draw triangles only", "teach photosynthesis only"], why: "Traders exchange goods." },
      { q: "Foreign influence should be explained:", choices: ["with effects and examples", "by guessing only", "without examples", "by ignoring history"], why: "Good history answers give effects and examples." },
    ],
  },
  {
    id: "p5-how-uganda-became-nation",
    title: "How Uganda Became a Nation",
    minutes: 28,
    intro: "Learners study how different communities and territories were brought together to form Uganda.",
    objectives: ["Explain how Uganda became one country.", "Describe colonial administration and protectorate rule.", "State effects of forming Uganda as one nation."],
    know: ["Uganda was made up of different communities before colonial rule.", "Colonial administration brought different areas under one protectorate.", "Becoming one nation created shared government but also joined diverse peoples."],
    worked: { problem: "Why is Uganda made up of many ethnic groups?", steps: ["Different communities lived in the area before Uganda became one nation.", "They had different languages, cultures and leaders."], answer: "Uganda has many ethnic groups because different communities were brought together into one country." },
    modules: [
      { id: "formation-uganda", title: "Formation of Uganda", bigIdea: "Uganda became a nation by bringing different communities and areas under one administration.", learn: ["Before colonial rule, different kingdoms, chiefdoms and communities existed.", "The British declared Uganda a protectorate in 1894.", "Over time, different areas were administered together as Uganda."], question: "What was Uganda before it became one country?", steps: ["There were different communities.", "Some were kingdoms or chiefdoms.", "They were later administered together."], answer: "It was made up of different communities, kingdoms and chiefdoms." , tryQ: "Uganda became a British protectorate in:", choices: ["1894", "1962", "2000", "1945"], explanation: "Uganda Protectorate began in 1894." },
      { id: "nation-effects", title: "Effects of Becoming One Nation", bigIdea: "A nation brings people under shared symbols, government and identity.", learn: ["People share national symbols such as flag, anthem and coat of arms.", "A shared government can plan services for the whole country.", "Different communities must learn unity and respect for diversity."], question: "Why is national unity important?", steps: ["Uganda has many communities.", "Unity helps people work together and avoid conflict."], answer: "National unity helps people from different communities live and work together." , tryQ: "Which is a national symbol?", choices: ["Flag", "Private shoe", "Class desk", "Home cup"], explanation: "A flag is a national symbol." },
    ],
    quiz: [
      { q: "Uganda became a British protectorate in:", choices: ["1894", "1962", "2005", "1945"], why: "Uganda Protectorate began in 1894." },
      { q: "Before Uganda became one country, there were different:", choices: ["communities and kingdoms", "computers only", "airports only", "televisions only"], why: "Different communities existed." },
      { q: "A national symbol is:", choices: ["flag", "private spoon", "chalk", "shoe"], why: "A flag represents a nation." },
      { q: "National unity helps people to:", choices: ["live and work together", "fight daily", "destroy property", "avoid cooperation"], why: "Unity supports cooperation." },
      { q: "A protectorate is linked to:", choices: ["colonial administration", "weather only", "digestion", "fractions"], why: "Protectorate rule was colonial administration." },
      { q: "Uganda has many ethnic groups because:", choices: ["different communities were joined in one country", "everyone speaks one language only", "there are no cultures", "maps do not exist"], why: "Uganda brought together diverse communities." },
    ],
  },
  {
    id: "p5-road-to-independence",
    title: "The Road to Independence",
    minutes: 30,
    intro: "Learners study nationalism, political parties, leaders and events that led to independence.",
    objectives: ["Explain nationalism.", "Name methods used to demand independence.", "State events leading to independence."],
    know: ["Nationalism is love for one's country and desire for self-rule.", "Africans demanded independence through political parties, leaders, meetings and negotiations.", "Uganda got independence on 9 October 1962."],
    worked: { problem: "Give one peaceful method used to demand independence.", steps: ["Think of methods without war.", "Political parties organised people.", "Negotiations and meetings were also used."], answer: "Africans formed political parties and negotiated for independence." },
    modules: [
      { id: "nationalism-parties", title: "Nationalism and Political Parties", bigIdea: "Nationalism encouraged Ugandans to demand self-rule.", learn: ["Nationalism includes love for country and desire for independence.", "Political parties helped organise people.", "Leaders spoke for people and negotiated for self-rule."], question: "What is nationalism?", steps: ["It involves love for one's country.", "It includes desire for freedom or self-rule."], answer: "Nationalism is love for one's country and desire for self-rule.", tryQ: "Uganda got independence on:", choices: ["9 October 1962", "1 January 2000", "12 December 1963", "9 October 1945"], explanation: "Uganda became independent on 9 October 1962." },
      { id: "independence-events", title: "Events Leading to Independence", bigIdea: "Independence came through organised political activity and negotiation.", learn: ["Political parties campaigned for self-government.", "Elections and constitutional talks helped prepare for independence.", "Independence means a country governs itself."], question: "What does independence mean?", steps: ["A country is not ruled by another country.", "Its people govern themselves through their leaders."], answer: "Independence means self-rule." , tryQ: "A peaceful way to demand independence was:", choices: ["forming political parties", "destroying schools", "burning all crops", "stopping all learning"], explanation: "Political parties organised people peacefully." },
    ],
    quiz: [
      { q: "Nationalism means:", choices: ["love for country and desire for self-rule", "hatred of home", "weather change", "soil type"], why: "Nationalism is love for one's country and desire for freedom." },
      { q: "Uganda got independence on:", choices: ["9 October 1962", "1 January 2000", "12 December 1963", "9 October 1945"], why: "Uganda's independence day is 9 October 1962." },
      { q: "A peaceful method for independence was:", choices: ["forming political parties", "burning all schools", "destroying hospitals", "stopping all talks"], why: "Political parties helped organise demands." },
      { q: "Independence means:", choices: ["self-rule", "foreign rule forever", "no government", "no citizens"], why: "Independence means self-government." },
      { q: "Political leaders helped by:", choices: ["speaking for people", "ending all education", "hiding all meetings", "destroying laws"], why: "Leaders represented people's demands." },
      { q: "Which word is related to independence?", choices: ["freedom", "digestion", "thermometer", "erosion"], why: "Independence is about freedom/self-rule." },
    ],
  },
  {
    id: "p5-independent-uganda",
    title: "Uganda as an Independent Nation",
    minutes: 28,
    intro: "Learners study Uganda after independence, national symbols, citizenship and challenges.",
    objectives: ["State the meaning of independence.", "Name national symbols.", "Explain rights and responsibilities of citizens."],
    know: ["Uganda became independent on 9 October 1962.", "National symbols include the flag, anthem, coat of arms and national bird.", "Citizens have rights and responsibilities."],
    worked: { problem: "Give two responsibilities of a good citizen.", steps: ["Think of actions that help the country.", "Obeying laws helps order.", "Paying taxes and protecting property help development."], answer: "A good citizen obeys laws and protects public property." },
    modules: [
      { id: "symbols-citizenship", title: "Symbols and Citizenship", bigIdea: "National symbols build identity, while citizenship involves rights and duties.", learn: ["The Uganda flag has colours with meaning.", "The national anthem is sung at important national events.", "Good citizens obey laws, respect others and protect public property."], question: "Name two national symbols of Uganda.", steps: ["Think of symbols used for the country.", "Examples include flag and anthem."], answer: "The flag and national anthem are national symbols." , tryQ: "Which is a national symbol?", choices: ["Coat of arms", "Private shoe", "Class chalk", "Market basket"], explanation: "The coat of arms represents the nation." },
      { id: "independent-challenges", title: "Benefits and Challenges", bigIdea: "Independent countries make their own decisions but still face development challenges.", learn: ["Independence allows self-government.", "Challenges may include poverty, unemployment, corruption, disease and conflict.", "Citizens and leaders must work together to solve problems."], question: "Give one challenge faced by independent Uganda.", steps: ["Think of national problems after independence.", "Poverty or unemployment can affect development."], answer: "One challenge is poverty or unemployment." , tryQ: "Which is a benefit of independence?", choices: ["Self-rule", "Foreign rule forever", "No citizens", "No laws"], explanation: "Independence allows self-rule." },
    ],
    quiz: [
      { q: "Uganda became independent in:", choices: ["1962", "1894", "2000", "1945"], why: "Uganda became independent in 1962." },
      { q: "Which is a national symbol?", choices: ["Flag", "Private cup", "Shoe", "Desk"], why: "The flag represents the country." },
      { q: "A good citizen should:", choices: ["obey laws", "destroy public property", "steal", "promote violence"], why: "Good citizens obey laws." },
      { q: "A benefit of independence is:", choices: ["self-rule", "foreign rule", "no government", "no identity"], why: "Independence means self-rule." },
      { q: "Which can be a national challenge?", choices: ["unemployment", "a compass", "a river source", "a vowel"], why: "Unemployment is a development challenge." },
      { q: "Citizenship includes:", choices: ["rights and responsibilities", "only games", "only food", "only weather"], why: "Citizens have both rights and duties." },
    ],
  },
  {
    id: "p5-government-uganda",
    title: "The Government of Uganda",
    minutes: 30,
    intro: "Learners study government, leaders, arms of government and local government.",
    objectives: ["Name arms of government.", "State roles of leaders.", "Explain local government and citizen responsibilities."],
    know: ["Government is the system that leads and manages a country.", "The three arms are Executive, Legislature and Judiciary.", "Local government helps provide services closer to people."],
    worked: { problem: "Name the arm of government that makes laws.", steps: ["The Legislature is responsible for making laws.", "In Uganda, Parliament is part of the Legislature."], answer: "The Legislature makes laws." },
    modules: [
      { id: "arms-government", title: "Arms of Government", bigIdea: "Government work is divided among arms with different roles.", learn: ["The Executive implements laws and runs government programmes.", "The Legislature makes laws.", "The Judiciary interprets laws and handles justice."], question: "Which arm interprets laws?", steps: ["Courts handle justice.", "Courts belong to the Judiciary."], answer: "The Judiciary interprets laws." , tryQ: "Which arm makes laws?", choices: ["Legislature", "Executive", "Judiciary", "Police only"], explanation: "The Legislature makes laws." },
      { id: "local-government", title: "Local Government and Services", bigIdea: "Local government brings leadership and services closer to communities.", learn: ["Local leaders help manage districts, municipalities, sub-counties and villages.", "Services may include roads, health centres, schools and sanitation.", "Citizens should cooperate with leaders and protect public property."], question: "Give one service provided through local government.", steps: ["Think of services near communities.", "Roads, schools or health centres are examples."], answer: "Local government may help provide roads, schools or health services." , tryQ: "A role of local leaders is to:", choices: ["serve communities", "destroy services", "stop all meetings", "hide public money"], explanation: "Leaders should serve communities." },
    ],
    quiz: [
      { q: "The arm of government that makes laws is:", choices: ["Legislature", "Judiciary", "Executive", "Market"], why: "The Legislature makes laws." },
      { q: "The arm that interprets laws is:", choices: ["Judiciary", "Legislature", "Executive", "School club"], why: "The Judiciary interprets laws." },
      { q: "Government means:", choices: ["system that leads a country", "weather condition", "type of soil", "a plant"], why: "Government leads and manages a country." },
      { q: "A local government service can be:", choices: ["road maintenance", "stealing", "pollution", "fighting"], why: "Local government may help with roads." },
      { q: "A good leader should:", choices: ["serve people", "hide from people", "destroy property", "promote corruption"], why: "Good leaders serve people." },
      { q: "Citizens should protect:", choices: ["public property", "only private lies", "corruption", "crime"], why: "Public property belongs to the community." },
    ],
  },
  {
    id: "p5-population-size-distribution",
    title: "Population, Size and Distribution",
    minutes: 28,
    intro: "Learners study population meaning, distribution and factors affecting settlement.",
    objectives: ["Define population.", "Explain population distribution.", "State factors affecting settlement and population problems."],
    know: ["Population is the number of people living in an area.", "Population distribution means how people are spread over an area.", "People often settle where there is water, fertile soil, security, jobs and services."],
    worked: { problem: "Why do many people settle near towns?", steps: ["Towns provide jobs and trade.", "They may have schools, hospitals, roads and markets."], answer: "Many people settle near towns because of jobs, trade and services." },
    modules: [
      { id: "population-distribution", title: "Population and Distribution", bigIdea: "Population distribution is influenced by resources, services and physical conditions.", learn: ["Densely populated areas have many people living close together.", "Sparsely populated areas have few people.", "Water, fertile soil and jobs attract people."], question: "What does population mean?", steps: ["It refers to people.", "It counts people living in an area."], answer: "Population is the number of people living in an area." , tryQ: "An area with many people close together is:", choices: ["densely populated", "empty", "a desert only", "uninhabited"], explanation: "Dense population means many people in an area." },
      { id: "population-problems-solutions", title: "Problems and Solutions", bigIdea: "Population growth can create problems, but planning can reduce them.", learn: ["Population problems may include unemployment, land shortage, congestion and pressure on services.", "Solutions include education, job creation, better farming and improved services.", "Good planning helps communities use resources wisely."], question: "Give one problem caused by high population in a town.", steps: ["Many people need jobs and services.", "There may be congestion or unemployment."], answer: "High population can cause congestion or unemployment." , tryQ: "Which can attract settlement?", choices: ["jobs", "insecurity", "drought only", "no water"], explanation: "Jobs attract people to settle." },
    ],
    quiz: [
      { q: "Population means:", choices: ["number of people in an area", "number of trees only", "amount of rainfall", "height of mountains"], why: "Population counts people." },
      { q: "Densely populated means:", choices: ["many people in an area", "no people", "only animals", "only rivers"], why: "Dense means many people close together." },
      { q: "Which attracts settlement?", choices: ["water", "war", "drought", "disease only"], why: "People settle near water." },
      { q: "A problem of high population is:", choices: ["unemployment", "too much empty land", "no need for food", "no people"], why: "Many people may struggle to find jobs." },
      { q: "Population distribution means:", choices: ["how people are spread", "how books are printed", "how clocks work", "how food digests"], why: "Distribution is spread over space." },
      { q: "Which service can influence settlement?", choices: ["school", "desert wind only", "empty rock", "no road"], why: "Schools and services attract people." },
    ],
  },
];

export const P5_SOCIAL_TOPICS: Topic[] = SEEDS.map(makeTopic);

export function getP5SocialTopic(id: string): Topic | undefined {
  return P5_SOCIAL_TOPICS.find((topic) => topic.id === id);
}
