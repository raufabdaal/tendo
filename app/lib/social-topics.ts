import type { Topic } from "@/lib/topics";
import { addUpperPrimarySocialV4 } from "@/lib/v4-social-helpers";
import { applyP7SocialHeavyV4 } from "@/lib/p7-v4-heavy-lessons";


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

const P7_SOCIAL_TERMS: Record<string, "Term I" | "Term II" | "Term III"> = {
  "location-of-africa": "Term I",
  "physical-features-of-africa": "Term I",
  "climate-of-africa": "Term I",
  "vegetation-of-africa": "Term I",
  "people-ethnic-groups-settlement": "Term II",
  "foreign-influence-africa": "Term II",
  "nationalism-road-independence": "Term II",
  "post-independence-africa": "Term II",
  "economic-developments-africa": "Term III",
  "major-world-organisations": "Term III"
};

const SOCIAL_TOPICS_DATA: Topic[] = [
  {
    id: "location-of-africa",
    themeId: "sst-living-together-africa",
    themeName: "Living Together in Africa",
    title: "Location of Africa on the map of the world",
    estMinutes: 16,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "Why this matters: P7 Social Studies begins by placing Africa correctly on the world map. Learners need to use latitudes, longitudes, continents, surrounding water bodies, regions, countries and capitals.",
      learningObjectives: [
        "Locate Africa on a world map using latitudes and longitudes.",
        "Name the continents of the world and compare their sizes.",
        "Identify water bodies that surround Africa.",
        "Name regions of Africa, countries in those regions and capital cities.",
      ],
      whatYouNeedToKnow: [
        "Africa is the second largest continent after Asia. It lies mostly between the Tropic of Cancer and the Tropic of Capricorn, and it is crossed by the Equator, the Prime Meridian and the Tropic of Cancer and Capricorn.",
        "**Definition:** Lines of latitude are imaginary lines running east to west around the Earth, used to locate places north or south of the Equator (0°).\n**Definition:** Lines of longitude (meridians) are imaginary lines running north to south from pole to pole, used to locate places east or west of the Prime Meridian (0°).",
        "Africa is surrounded by the Mediterranean Sea to the north, the Red Sea and Indian Ocean to the east, the Atlantic Ocean to the west, and the Southern Ocean area towards the south.",
        "Africa is commonly grouped into North Africa, West Africa, East Africa, Central Africa and Southern Africa. Uganda is in East Africa.",
        "Knowing countries and capitals helps learners read maps, follow news and understand cooperation among African states.",
      ],
      worked: {
        problem: "A learner says Uganda is in West Africa because it is west of Kenya. Correct the statement.",
        steps: [
          "Step 1. Remember that African regions are not decided by comparing only two neighbouring countries.",
          "Step 2. Uganda is part of the East African region.",
          "Step 3. Kenya, Tanzania, Rwanda, Burundi, South Sudan and Uganda are commonly studied as East African neighbours.",
        ],
        answer: "Answer: Uganda is in East Africa, even though it lies west of Kenya.",
      },
      commonMistakes: [
        "Confusing lines of latitude with lines of longitude.",
        "Thinking Africa is the largest continent instead of the second largest.",
        "Mixing up oceans and seas around Africa.",
        "Placing Uganda in the wrong African region.",
      ],
      tryThis: {
        question: "Which major line of latitude crosses Africa near the middle?",
        choices: ["Equator", "Prime Meridian", "International Date Line", "Greenwich line only"],
        correct: 0,
        explanation: "The Equator is a line of latitude and crosses Africa near the middle.",
      },
      writingTasks: [
        {
          title: "Map task: Locating Africa",
          prompt: "Use a world map or globe to describe the location of Africa using nearby oceans, continents and major lines of latitude/longitude.",
          planningSteps: [
            "Name the oceans around Africa.",
            "Name nearby continents north, east and north-east of Africa.",
            "Mention the Equator, Tropics or Prime Meridian where relevant.",
            "Use compass directions such as north, south, east and west.",
          ],
          checklist: [
            "Oceans and neighbouring continents are named correctly.",
            "Compass directions are used accurately.",
            "Major imaginary lines are mentioned where useful.",
            "The description is clear enough for someone to find Africa on a map.",
          ],
          modelOpening: "Africa lies south of Europe and south-west of Asia. It is bordered by the Atlantic Ocean to the west and the Indian Ocean to the east.",
        },
      ],
      recap: [
        "Africa is the second largest continent.",
        "Latitudes and longitudes help locate places.",
        "Africa has five commonly studied regions.",
        "Uganda is in East Africa.",
      ],
    },
        subtopics: [
      {
        subtopicId: "location-position-africa",
        title: "1. Location and position of Africa using major lines of latitudes and longitudes",
        modules: [
          {
            moduleId: "africa-on-world-map",
            title: "Africa on the World Map",
            bigIdea: "Africa is studied in P7 as a continent on the world map and in relation to other continents, oceans and seas.",
            learnIt: [
              "<strong class=\"kw\">Meaning:</strong> Africa is one of the seven continents of the world.",
              "<strong class=\"kw\">P7 focus:</strong> location, countries, regions, map lines, oceans and nearby continents.",
              "<strong class=\"kw\">Map tools:</strong> world map/globe, compass directions, latitudes and longitudes.",
              "<strong class=\"kw\">Example:</strong> Europe is north of Africa; the Atlantic Ocean is west of Africa.",
              "<strong class=\"kw\">Exam point:</strong> Do not just say Africa is on the map. Use directions and nearby features."
            ],
            tryThis: { question: "Which tools help a learner locate Africa on a world map?", choices: ["A globe, compass directions, latitudes and longitudes", "Only a ruler", "Only country flags", "Only rainfall figures"], correct: 0, explanation: "NCDC expects learners to use a globe/world map, compass directions, latitudes and longitudes to locate Africa." }
          },
          {
            moduleId: "latitude-longitude-position-keywords",
            title: "Latitude, Longitude and Position",
            bigIdea: "Latitude and longitude are map lines used to describe the position of places.",
            learnIt: [
              "<strong class=\"kw\">Position:</strong> where a place is found on a map or globe.",
              "<strong class=\"kw\">Latitude:</strong> imaginary lines running west to east; they show north or south of the Equator.",
              "<strong class=\"kw\">Longitude:</strong> imaginary lines running north to south; they show east or west of the Prime Meridian.",
              "<strong class=\"kw\">Main latitude:</strong> Equator, marked 0° latitude.",
              "<strong class=\"kw\">Main longitude:</strong> Prime Meridian, marked 0° longitude."
            ],
            tryThis: { question: "Which statement correctly describes lines of latitude?", choices: ["They help show how far north or south a place is", "They are capital cities", "They are oceans around Africa", "They are types of vegetation"], correct: 0, explanation: "Latitude lines help show position north or south of the Equator." }
          },
          {
            moduleId: "equator-tropics-prime-meridian-africa",
            title: "Equator, Tropics and Prime Meridian",
            bigIdea: "Africa is crossed by important map lines that help learners describe its position accurately.",
            learnIt: [
              "<strong class=\"kw\">Equator:</strong> 0° latitude; divides the earth into Northern and Southern Hemispheres.",
              "<strong class=\"kw\">Prime Meridian:</strong> 0° longitude; divides the earth into Eastern and Western Hemispheres.",
              "<strong class=\"kw\">Tropic of Cancer:</strong> important latitude north of the Equator; crosses North Africa.",
              "<strong class=\"kw\">Tropic of Capricorn:</strong> important latitude south of the Equator; crosses Southern Africa.",
              "<strong class=\"kw\">Map task:</strong> draw Africa and label the Equator and Prime Meridian clearly."
            ],
            tryThis: { question: "Which line is 0° longitude?", choices: ["Prime Meridian", "Equator", "Tropic of Cancer", "Tropic of Capricorn"], correct: 0, explanation: "The Prime Meridian is 0° longitude. The Equator is 0° latitude." }
          },
          {
            moduleId: "locating-africa-compass-directions",
            title: "Locating Africa Using Compass Directions",
            bigIdea: "Compass directions help learners state where other continents, oceans and seas are from Africa.",
            learnIt: [
              "<strong class=\"kw\">Compass directions:</strong> north, south, east, west, north-east, south-east, south-west and north-west.",
              "<strong class=\"kw\">Europe:</strong> north of Africa.",
              "<strong class=\"kw\">Asia:</strong> north-east/east of Africa.",
              "<strong class=\"kw\">Atlantic Ocean:</strong> west of Africa.",
              "<strong class=\"kw\">Indian Ocean:</strong> east/south-east of Africa.",
              "<strong class=\"kw\">Exam sentence:</strong> The Atlantic Ocean lies to the west of Africa."
            ],
            tryThis: { question: "Which water body lies west of Africa?", choices: ["Atlantic Ocean", "Indian Ocean", "Red Sea", "Arctic Ocean"], correct: 0, explanation: "The Atlantic Ocean lies to the west of Africa." }
          },
          {
            moduleId: "map-drawing-activity-africa-lines",
            title: "Map Drawing Activity: Africa, Regions and Lines",
            bigIdea: "NCDC expects learners to practise drawing maps and showing regions, latitudes and longitudes.",
            learnIt: [
              "<strong class=\"kw\">Step 1:</strong> draw a simple outline map of Africa.",
              "<strong class=\"kw\">Step 2:</strong> label the Equator and Prime Meridian.",
              "<strong class=\"kw\">Step 3:</strong> show the regions of Africa: West, East, Northern, Central, Southern and Horn of Africa.",
              "<strong class=\"kw\">Step 4:</strong> add a north arrow or compass direction mark.",
              "<strong class=\"kw\">Marking guide:</strong> clear labels are more important than decoration."
            ],
            tryThis: { question: "Which item should appear on a good P7 map of Africa for this topic?", choices: ["Regions, latitude lines and longitude lines", "Only football teams", "Only rainfall bars", "Only animal drawings"], correct: 0, explanation: "The assessment competence includes drawing Africa showing regions, lines of latitude and lines of longitude." }
          }
        ]
      },
      {
        subtopicId: "world-continents-sizes",
        title: "2. World continents and their sizes",
        modules: [
          {
            moduleId: "continents-of-the-world",
            title: "Continents of the World",
            bigIdea: "A continent is one of the largest land masses of the world, and Africa is one of the seven continents.",
            learnIt: [
              "<strong class=\"kw\">Continent:</strong> a very large land mass on the earth.",
              "<strong class=\"kw\">Seven continents:</strong> Asia, Africa, North America, South America, Antarctica, Europe and Australia.",
              "<strong class=\"kw\">Africa:</strong> the continent where Uganda is found.",
              "<strong class=\"kw\">Spelling trap:</strong> Australia is a continent; Austria is a country in Europe.",
              "<strong class=\"kw\">Map task:</strong> point to Africa, Europe, Asia, Australia and the Americas on a world map."
            ],
            tryThis: { question: "Which list contains only continents?", choices: ["Asia, Africa, Europe", "Uganda, Kenya, Tanzania", "Nile, Congo, Niger", "Atlantic, Indian, Arctic"], correct: 0, explanation: "Asia, Africa and Europe are continents. Uganda, Kenya and Tanzania are countries; Nile, Congo and Niger are rivers; Atlantic, Indian and Arctic are oceans." }
          },
          {
            moduleId: "continents-size-order",
            title: "Continents in Order of Size",
            bigIdea: "NCDC expects P7 learners to identify the continents of the world and arrange them in order of size.",
            learnIt: [
              "<strong class=\"kw\">Largest to smallest:</strong> Asia, Africa, North America, South America, Antarctica, Europe, Australia.",
              "<strong class=\"kw\">Largest:</strong> Asia.",
              "<strong class=\"kw\">Second largest:</strong> Africa.",
              "<strong class=\"kw\">Smallest:</strong> Australia.",
              "<strong class=\"kw\">Memory chain:</strong> Asia → Africa → North America → South America → Antarctica → Europe → Australia."
            ],
            tryThis: { question: "Which continent is second largest in the world?", choices: ["Africa", "Asia", "Europe", "Australia"], correct: 0, explanation: "The NCDC size order places Asia first and Africa second." },
            workedExample: { question: "Arrange these continents from largest to smallest: Africa, Asia, Europe, North America.", steps: ["Asia is largest.", "Africa is second largest.", "North America is larger than Europe.", "Final order: Asia, Africa, North America, Europe."], answer: "Asia, Africa, North America, Europe." }
          },
          {
            moduleId: "continent-map-practice",
            title: "Map Practice: Finding Continents",
            bigIdea: "Learners understand Africa better when they locate it among other continents on a world map or globe.",
            learnIt: [
              "<strong class=\"kw\">Find Africa:</strong> point to Africa on a world map or globe.",
              "<strong class=\"kw\">North of Africa:</strong> Europe.",
              "<strong class=\"kw\">North-east/east of Africa:</strong> Asia.",
              "<strong class=\"kw\">Across the Atlantic:</strong> South America is to the west/south-west side of Africa.",
              "<strong class=\"kw\">Exam sentence:</strong> Africa is south of Europe and west of the Indian Ocean."
            ],
            tryThis: { question: "Which continent is north of Africa across the Mediterranean Sea?", choices: ["Europe", "Australia", "Antarctica", "South America"], correct: 0, explanation: "Europe lies north of Africa across the Mediterranean Sea." }
          }
        ]
      },
      {
        subtopicId: "water-bodies-africa",
        title: "3. Water bodies that surround Africa",
        modules: [
          {
            moduleId: "oceans-around-africa",
            title: "Oceans Around Africa",
            bigIdea: "NCDC expects P7 learners to name the water bodies that surround Africa.",
            learnIt: [
              "<strong class=\"kw\">Ocean:</strong> a very large body of salty water.",
              "<strong class=\"kw\">World ocean list:</strong> Atlantic, Pacific, Arctic and Indian oceans.",
              "<strong class=\"kw\">West of Africa:</strong> Atlantic Ocean.",
              "<strong class=\"kw\">East/south-east of Africa:</strong> Indian Ocean.",
              "<strong class=\"kw\">Exam point:</strong> Pacific and Arctic are world oceans, but they do not directly border mainland Africa like the Atlantic and Indian oceans."
            ],
            tryThis: { question: "Which two oceans directly border Africa?", choices: ["Atlantic and Indian", "Pacific and Arctic", "Arctic and Southern", "Pacific and Mediterranean"], correct: 0, explanation: "Africa is bordered mainly by the Atlantic Ocean to the west and the Indian Ocean to the east." }
          },
          {
            moduleId: "seas-around-africa",
            title: "Seas Around Africa",
            bigIdea: "The Mediterranean Sea and Red Sea are the two seas named in the official P7 Topic 1 content.",
            learnIt: [
              "<strong class=\"kw\">Sea:</strong> a large body of salty water, usually smaller than an ocean and partly enclosed by land.",
              "<strong class=\"kw\">North of Africa:</strong> Mediterranean Sea.",
              "<strong class=\"kw\">North-east of Africa:</strong> Red Sea.",
              "<strong class=\"kw\">Mediterranean Sea:</strong> separates North Africa from Europe.",
              "<strong class=\"kw\">Writing tip:</strong> write full names: Mediterranean Sea and Red Sea."
            ],
            tryThis: { question: "Which sea lies north of Africa and separates Africa from Europe?", choices: ["Mediterranean Sea", "Red Sea", "Indian Ocean", "Pacific Ocean"], correct: 0, explanation: "The Mediterranean Sea lies north of Africa, between North Africa and Europe." }
          },
          {
            moduleId: "directions-of-water-bodies-from-africa",
            title: "Compass Directions of Water Bodies from Africa",
            bigIdea: "Learners should name water bodies and state their compass directions from Africa.",
            learnIt: [
              "<strong class=\"kw\">Atlantic Ocean:</strong> west of Africa.",
              "<strong class=\"kw\">Indian Ocean:</strong> east and south-east of Africa.",
              "<strong class=\"kw\">Mediterranean Sea:</strong> north of Africa.",
              "<strong class=\"kw\">Red Sea:</strong> north-east of Africa.",
              "<strong class=\"kw\">Exam sentence:</strong> The Red Sea lies to the north-east of Africa."
            ],
            tryThis: { question: "Which water body lies north-east of Africa?", choices: ["Red Sea", "Atlantic Ocean", "Pacific Ocean", "Arctic Ocean"], correct: 0, explanation: "The Red Sea lies to the north-east of Africa." }
          }
        ]
      },
      {
        subtopicId: "regions-africa",
        title: "4. Regions that make up Africa",
        modules: [
          {
            moduleId: "six-regions-of-africa",
            title: "The Six Regions of Africa",
            bigIdea: "NCDC names six regions that make up Africa for this P7 topic.",
            learnIt: [
              "<strong class=\"kw\">Region:</strong> a part or area of a larger place.",
              "<strong class=\"kw\">Six regions:</strong> West Africa, East Africa, Northern Africa, Central Africa, Southern Africa and Horn of Africa.",
              "<strong class=\"kw\">Uganda:</strong> studied under East Africa.",
              "<strong class=\"kw\">Horn of Africa:</strong> horn-shaped area on the eastern side of Africa.",
              "<strong class=\"kw\">Writing tip:</strong> use capital letters for region names."
            ],
            tryThis: { question: "Which list contains only regions named in the P7 Topic 1 content?", choices: ["West Africa, East Africa, Northern Africa", "Pacific, Atlantic, Indian", "Asia, Europe, Australia", "Nile, Congo, Zambezi"], correct: 0, explanation: "West Africa, East Africa and Northern Africa are regions of Africa. The other options list oceans, continents or rivers." }
          },
          {
            moduleId: "locating-african-regions-on-map",
            title: "Locating African Regions on a Map",
            bigIdea: "Learners should not only name regions; they should also know where the regions are found on a map of Africa.",
            learnIt: [
              "<strong class=\"kw\">Northern Africa:</strong> north of Africa.",
              "<strong class=\"kw\">Southern Africa:</strong> south of Africa.",
              "<strong class=\"kw\">West Africa:</strong> west of Africa.",
              "<strong class=\"kw\">East Africa:</strong> east of Africa.",
              "<strong class=\"kw\">Central Africa:</strong> middle part of Africa.",
              "<strong class=\"kw\">Horn of Africa:</strong> eastern projection towards the Red Sea, Gulf of Aden and Indian Ocean side."
            ],
            tryThis: { question: "Which region is found near the middle of Africa?", choices: ["Central Africa", "Northern Africa", "Southern Africa", "West Africa"], correct: 0, explanation: "Central Africa is found near the middle of the African continent." }
          },
          {
            moduleId: "regions-countries-link",
            title: "Regions Help Us Group Countries",
            bigIdea: "Regions prepare learners to list countries and capital cities in the next subtopic.",
            learnIt: [
              "<strong class=\"kw\">Continent:</strong> Africa.",
              "<strong class=\"kw\">Region:</strong> East Africa, West Africa, Northern Africa and others.",
              "<strong class=\"kw\">Country:</strong> Uganda, Kenya, Nigeria, Egypt and others.",
              "<strong class=\"kw\">Capital city:</strong> Kampala, Nairobi, Abuja, Cairo and others.",
              "<strong class=\"kw\">Exam chain:</strong> Africa → East Africa → Uganda → Kampala."
            ],
            tryThis: { question: "What is the relationship between Africa, East Africa, Uganda and Kampala?", choices: ["Continent, region, country, capital city", "Country, capital, ocean, river", "Region, continent, sea, country", "Capital, country, continent, ocean"], correct: 0, explanation: "Africa is a continent, East Africa is a region, Uganda is a country and Kampala is a capital city." }
          }
        ]
      },
      {
        subtopicId: "countries-capitals-africa",
        title: "5. Countries in each region and their capital cities",
        modules: [
          {
            moduleId: "country-capital-region-meaning",
            title: "Countries, Regions and Capital Cities",
            bigIdea: "NCDC expects P7 learners to list countries in African regions and name their capital cities.",
            learnIt: [
              "<strong class=\"kw\">Country:</strong> an independent state with its own government, people and borders.",
              "<strong class=\"kw\">Capital city:</strong> the main administrative city of a country.",
              "<strong class=\"kw\">Region:</strong> a part of Africa used to group countries for study.",
              "<strong class=\"kw\">Answer order:</strong> region → country → capital city.",
              "<strong class=\"kw\">Example:</strong> East Africa → Uganda → Kampala."
            ],
            tryThis: { question: "Which pair correctly shows a country and its capital city?", choices: ["Uganda — Kampala", "Africa — Kampala", "Nile — Cairo", "Indian Ocean — Nairobi"], correct: 0, explanation: "Uganda is a country and Kampala is its capital city. Africa is a continent, the Nile is a river and the Indian Ocean is an ocean." }
          },
          {
            moduleId: "school-first-countries-capitals-by-region",
            title: "School-First Countries and Capitals by Region",
            bigIdea: "Learners should first master a smaller P7 school list before using a full reference table.",
            learnIt: [
              "<strong class=\"kw\">East Africa:</strong> Uganda—Kampala; Kenya—Nairobi; Tanzania—Dodoma; Rwanda—Kigali; South Sudan—Juba.",
              "<strong class=\"kw\">Horn of Africa:</strong> Ethiopia—Addis Ababa; Somalia—Mogadishu; Eritrea—Asmara; Djibouti—Djibouti.",
              "<strong class=\"kw\">West Africa:</strong> Nigeria—Abuja; Ghana—Accra; Senegal—Dakar; Mali—Bamako; Liberia—Monrovia.",
              "<strong class=\"kw\">Northern Africa:</strong> Egypt—Cairo; Sudan—Khartoum; Morocco—Rabat; Libya—Tripoli; Tunisia—Tunis.",
              "<strong class=\"kw\">Central Africa:</strong> D.R. Congo—Kinshasa; Cameroon—Yaoundé; Angola—Luanda; Chad—N'Djamena; Gabon—Libreville.",
              "<strong class=\"kw\">Southern Africa:</strong> South Africa—Pretoria; Botswana—Gaborone; Namibia—Windhoek; Zambia—Lusaka; Zimbabwe—Harare."
            ],
            tryThis: { question: "What is the capital city of Kenya?", choices: ["Nairobi", "Kampala", "Dodoma", "Kigali"], correct: 0, explanation: "Kenya is an East African country and its capital city is Nairobi." }
          },
          {
            moduleId: "islands-part-of-africa-school-first",
            title: "Islands Which Are Part of Africa",
            bigIdea: "NCDC expects learners to name islands which are part of Africa, so learners should know common African island countries.",
            learnIt: [
              "<strong class=\"kw\">Island:</strong> land surrounded by water.",
              "<strong class=\"kw\">Common African island countries:</strong> Madagascar, Mauritius, Seychelles, Comoros, Cabo Verde, São Tomé and Príncipe.",
              "<strong class=\"kw\">Indian Ocean side:</strong> Madagascar, Mauritius, Seychelles, Comoros.",
              "<strong class=\"kw\">Atlantic Ocean side:</strong> Cabo Verde, São Tomé and Príncipe.",
              "<strong class=\"kw\">Capital examples:</strong> Madagascar—Antananarivo; Mauritius—Port Louis; Seychelles—Victoria."
            ],
            tryThis: { question: "Which of these is an African island country?", choices: ["Madagascar", "Uganda", "Mali", "Chad"], correct: 0, explanation: "Madagascar is an island country in the Indian Ocean side of Africa." }
          },
          {
            moduleId: "capital-city-answer-practice",
            title: "Answering Country and Capital City Questions",
            bigIdea: "Good P7 answers are clear, correctly paired and grouped by region where needed.",
            learnIt: [
              "<strong class=\"kw\">Pair format:</strong> country — capital city.",
              "<strong class=\"kw\">Correct:</strong> Ghana — Accra.",
              "<strong class=\"kw\">Wrong:</strong> Ghana — Nairobi.",
              "<strong class=\"kw\">Region check:</strong> do not mix countries from different regions when the question asks for one region.",
              "<strong class=\"kw\">Spelling tip:</strong> practise difficult names slowly: Antananarivo, Ouagadougou, N'Djamena."
            ],
            tryThis: { question: "Which answer is correctly grouped under West Africa?", choices: ["Nigeria — Abuja", "Kenya — Nairobi", "Egypt — Cairo", "Botswana — Gaborone"], correct: 0, explanation: "Nigeria is in West Africa and Abuja is its capital city." }
          }
        ]
      },
      {
        subtopicId: "premium-map-answering",
        title: "Practice: Answering Topic 1 Map Questions",
        modules: [
          {
            moduleId: "map-answering-read-the-task",
            title: "Step 1: Read the Map Question Carefully",
            bigIdea: "A good map answer starts by identifying exactly what the question is asking for.",
            learnIt: [
              "<strong class=\"kw\">Name:</strong> give the correct place or feature.",
              "<strong class=\"kw\">Locate:</strong> say or show where it is found.",
              "<strong class=\"kw\">Draw:</strong> make a simple labelled map or diagram.",
              "<strong class=\"kw\">Identify direction:</strong> use north, south, east, west or another compass direction.",
              "<strong class=\"kw\">Pair:</strong> country first, capital city second. Example: Uganda — Kampala."
            ],
            tryThis: { question: "A question says: 'Identify the ocean west of Africa.' What must your answer include?", choices: ["The name of the ocean and its direction", "Only a capital city", "Only a continent size", "Only a vegetation type"], correct: 0, explanation: "The question asks for an ocean and gives a direction clue, so the answer should name the Atlantic Ocean and connect it to west of Africa." }
          },
          {
            moduleId: "drawing-africa-regions-lines",
            title: "Step 2: Draw Africa with Regions and Lines",
            bigIdea: "NCDC assessment expects learners to draw Africa showing regions and major latitude/longitude lines.",
            learnIt: [
              "<strong class=\"kw\">Map outline:</strong> draw a simple recognisable shape of Africa.",
              "<strong class=\"kw\">Regions:</strong> label West, East, Northern, Central, Southern and Horn of Africa.",
              "<strong class=\"kw\">Lines:</strong> show the Equator and Prime Meridian.",
              "<strong class=\"kw\">Direction:</strong> add a north arrow or compass mark.",
              "<strong class=\"kw\">Marking tip:</strong> neat labels score better than decoration."
            ],
            tryThis: { question: "Which item should be included when drawing Africa for this Topic 1 assessment?", choices: ["Regions and latitude/longitude lines", "Only animals", "Only rivers from Topic 2", "Only climate regions from Topic 3"], correct: 0, explanation: "NCDC assessment mentions drawing Africa showing regions, lines of latitude and lines of longitude." }
          },
          {
            moduleId: "answering-direction-questions",
            title: "Step 3: Answer Direction Questions",
            bigIdea: "Direction answers should name the place or water body and state where it is from Africa.",
            learnIt: [
              "<strong class=\"kw\">Atlantic Ocean:</strong> west of Africa.",
              "<strong class=\"kw\">Indian Ocean:</strong> east/south-east of Africa.",
              "<strong class=\"kw\">Mediterranean Sea:</strong> north of Africa.",
              "<strong class=\"kw\">Red Sea:</strong> north-east of Africa.",
              "<strong class=\"kw\">Europe:</strong> north of Africa."
            ],
            tryThis: { question: "Which is the best answer to: 'Where is Europe from Africa?'", choices: ["Europe is north of Africa", "Europe is inside Africa", "Europe is a sea", "Europe is the capital of Africa"], correct: 0, explanation: "Europe lies to the north of Africa across the Mediterranean Sea." }
          },
          {
            moduleId: "countries-capitals-islands-practice",
            title: "Step 4: Practise Countries, Capitals and Islands",
            bigIdea: "Topic 1 practice should help learners pair countries with capitals and identify African island countries.",
            learnIt: [
              "<strong class=\"kw\">Country-capital pair:</strong> Ghana — Accra.",
              "<strong class=\"kw\">East Africa pair:</strong> Kenya — Nairobi.",
              "<strong class=\"kw\">Island example:</strong> Madagascar.",
              "<strong class=\"kw\">Region check:</strong> Nigeria belongs to West Africa, not East Africa.",
              "<strong class=\"kw\">Practice task:</strong> write three East African countries and three West African countries with capitals."
            ],
            tryThis: { question: "Which pair is correct?", choices: ["Ghana — Accra", "Egypt — Nairobi", "Uganda — Dakar", "Madagascar — Kampala"], correct: 0, explanation: "Ghana is a West African country and Accra is its capital city." }
          }
        ]
      }
    ],
    quiz: [
      { q: "Which continent is the second largest in the world?", choices: ["Africa", "Europe", "Australia", "Antarctica"], correct: 0, why: "Africa is the second largest continent after Asia." },
      { q: "Which line of latitude divides the earth into northern and southern hemispheres?", choices: ["Equator", "Prime Meridian", "Tropic of Cancer only", "International Date Line"], correct: 0, why: "The Equator divides the earth into northern and southern hemispheres." },
      { q: "Which ocean lies to the west of Africa?", choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"], correct: 0, why: "The Atlantic Ocean is west of Africa." },
      { q: "Uganda belongs to which African region?", choices: ["East Africa", "North Africa", "West Africa", "Southern Africa only"], correct: 0, why: "Uganda is studied as an East African country." },
      { q: "Lines of longitude help locate places:", choices: ["East or west", "Only above clouds", "Only in lakes", "By population size"], correct: 0, why: "Longitudes locate places east or west of the Prime Meridian." },
      { q: "Which sea is north of Africa?", choices: ["Mediterranean Sea", "Caspian Sea", "Caribbean Sea", "Baltic Sea"], correct: 0, why: "The Mediterranean Sea lies north of Africa." },
      { q: "What is a capital city?", choices: ["Main administrative city of a country", "Any village", "A mountain", "A river mouth"], correct: 0, why: "A capital city is the main administrative city of a country." },
    ],
  },
  {
    id: "physical-features-of-africa",
    themeId: "sst-living-together-africa",
    themeName: "Living Together in Africa",
    title: "Physical features of Africa",
    estMinutes: 17,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "Why this matters: Africa's mountains, rivers, lakes, plateaus, rift valleys and coastal plains influence settlement, transport, farming, climate and tourism.",
      learningObjectives: [
        "Name and locate major physical features of Africa.",
        "Explain how some physical features are formed.",
        "Describe the importance of physical features to people.",
        "Relate physical features to settlement and economic activities.",
      ],
      whatYouNeedToKnow: [
        "**Definition:** Physical features are natural landforms and water bodies found on the surface of the earth, not made by people.\n**Types of physical features in Africa:** Mountains and highlands, rivers, lakes, plateaus, rift valleys, deserts, and coastal plains.\n**Key UNEB examples:** Mount Kilimanjaro (highest), River Nile (longest), Lake Victoria (largest by area), Great Rift Valley (faulting formation).",
        "Important mountains include Kilimanjaro, Kenya, Rwenzori and Atlas. Important rivers include the Nile, Congo, Niger and Zambezi. Important lakes include Victoria, Tanganyika, Malawi and Chad.",
        "The Great Rift Valley is a long depression formed by earth movements. Rift valley lakes are often long and deep, such as Lake Tanganyika.",
        "Physical features are important for fishing, farming, transport, hydro-electric power, tourism, mining and settlement. They can also create challenges such as barriers to transport or flooding.",
      ],
      worked: {
        problem: "Give two ways a river can be useful to people in Africa.",
        steps: [
          "Step 1. Think of direct uses: people may get water and fish from rivers.",
          "Step 2. Think of economic uses: rivers can support irrigation, transport and hydro-electric power.",
          "Step 3. Give clear examples instead of one-word answers.",
        ],
        answer: "Answer: A river can provide water for irrigation and can be used to generate hydro-electric power.",
      },
      commonMistakes: [
        "Calling man-made features physical features.",
        "Confusing Lake Victoria with River Nile.",
        "Forgetting that physical features can be useful and challenging.",
        "Mixing up mountains and highlands.",
      ],
      tryThis: {
        question: "Which physical feature is a long depression formed by earth movements?",
        choices: ["Rift valley", "Island", "Capital city", "Factory"],
        correct: 0,
        explanation: "A rift valley is a long depression formed by earth movements.",
      },
      writingTasks: [
        {
          title: "Case study: How physical features help people",
          prompt: "Choose one African physical feature and explain how it helps people and also creates challenges.",
          planningSteps: [
            "Name the physical feature and where it is found.",
            "Explain at least two benefits, such as fishing, farming, tourism, minerals or transport.",
            "Explain one challenge, such as flooding, steep slopes, disease vectors or transport difficulty.",
            "Suggest one way people can use the feature responsibly.",
          ],
          checklist: [
            "The feature is a real African physical feature.",
            "Benefits and challenges are both included.",
            "The answer links the feature to people's activities.",
            "Responsible use or conservation is mentioned.",
          ],
          modelOpening: "Lake Victoria is an important physical feature in East Africa. It supports fishing, transport and rainfall, but people must avoid polluting its water.",
        },
      ],
      recap: [
        "Physical features are natural features of the earth's surface.",
        "Africa has mountains, rivers, lakes, plateaus and rift valleys.",
        "Physical features influence settlement and economic activities.",
      ],
    },
    subtopics: [
            {
        subtopicId: "mountains-highlands",
        title: "1. Mountains and Highlands of Africa",
        modules: [
          {
            moduleId: "physical-features-relief-drainage",
            title: "Physical Features, Relief and Drainage",
            bigIdea: "Physical features are natural landforms and water features that make up the environment.",
            learnIt: [
              "Physical features are landforms and water features that exist on the earth and give it shape. They include mountains, highlands, plateaus, lowlands, rift valleys, lakes, rivers, depressions, islands and coastal plains.",
              "NCDC groups physical features into relief features and drainage features. Relief features are landforms such as mountains, highlands, plateaus, lowlands, rift valleys and coastal plains.",
              "Drainage features are water features such as lakes, rivers, seas and oceans. In this subtopic, we focus first on mountains and highlands, which are relief features.",
              "Physical features are important because people depend on the physical environment for settlement, farming, transport, tourism, minerals and water. Learners should therefore locate them and also appreciate their value."
            ],
            tryThis: {
              question: "Which pair contains only relief features?",
              choices: ["Mountains and highlands", "Rivers and lakes", "Seas and oceans", "Rainfall and wind"],
              correct: 0,
              explanation: "Mountains and highlands are relief features. Rivers, lakes, seas and oceans are drainage features."
            }
          },
          {
            moduleId: "major-mountains-highlands-africa",
            title: "Major Mountains and Highlands of Africa",
            bigIdea: "P7 learners should name and locate major mountains and highlands of Africa beyond East Africa.",
            learnIt: [
              "The major mountains and highlands listed for this topic include the Atlas, the Drakensberg, the Cameroon highlands, the Jos plateau, the Ahaggar, the Tibesti and the Ethiopian highlands.",
              "Use regions to locate them. The Atlas Mountains are in Northern Africa. The Drakensberg is in Southern Africa. The Cameroon highlands and Jos plateau are in West/Central Africa. The Ahaggar and Tibesti are in the Sahara region of North/Central Africa. The Ethiopian highlands are in the Horn of Africa.",
              "Use countries carefully when your teacher asks for them. School-first examples include: Atlas — Morocco/Algeria/Tunisia; Drakensberg — South Africa/Lesotho; Cameroon highlands — Cameroon; Jos plateau — Nigeria; Ahaggar — Algeria; Tibesti — Chad/Libya; Ethiopian highlands — Ethiopia.",
              "A good map answer should name the feature and locate it by region or country. Example: The Atlas Mountains are found in Northern Africa, especially around Morocco, Algeria and Tunisia."
            ],
            tryThis: {
              question: "Which mountain range is found in Northern Africa?",
              choices: ["Atlas Mountains", "Drakensberg", "Jos plateau", "Cameroon highlands"],
              correct: 0,
              explanation: "The Atlas Mountains are found in Northern Africa, especially around Morocco, Algeria and Tunisia."
            }
          },
          {
            moduleId: "mountains-highlands-value-map-practice",
            title: "Value and Map Practice for Mountains and Highlands",
            bigIdea: "Mountains and highlands should be studied with maps, models and examples of how they affect people's lives.",
            learnIt: [
              "NCDC guidance says learners should use maps, atlases, wall maps and ground maps to locate physical features. For mountains and highlands, always practise pointing to the region or country where each one is found.",
              "Mountains and highlands can be valuable because they may provide water sources, cool climates, tourist attractions, minerals, forests and farming areas on suitable slopes.",
              "They can also create challenges. Steep slopes may make transport difficult, cause soil erosion if misused, and make settlement harder in some places.",
              "Activity: draw a simple map of Africa and mark at least four examples: Atlas in the north, Drakensberg in the south, Ethiopian highlands in the Horn/East, and Cameroon highlands/Jos plateau in West or Central Africa."
            ],
            tryThis: {
              question: "Why should learners use an atlas when studying mountains and highlands?",
              choices: ["To locate the features by region and country", "To learn music notes", "To count rainfall drops", "To avoid drawing maps"],
              correct: 0,
              explanation: "NCDC guidance recommends maps and atlases so learners can locate major physical features accurately."
            }
          }
        ]
      },
            {
        subtopicId: "rivers-africa",
        title: "2. Rivers of Africa",
        modules: [
          {
            moduleId: "rivers-as-drainage-features",
            title: "Rivers as Drainage Features",
            bigIdea: "Rivers are drainage features because they carry water across the land into lakes, seas or oceans.",
            learnIt: [
              "A river is a large natural stream of water flowing in a channel from a source to a mouth. The source is where a river begins. The mouth is where a river ends by flowing into another water body.",
              "NCDC groups rivers under drainage features. Drainage features are water features such as rivers, lakes, seas and oceans.",
              "When studying rivers of Africa, learners should name them, locate them on a map, and know the seas or oceans into which major rivers flow.",
              "A good P7 river answer should include the river name and one useful location fact. Example: The Nile flows northwards and enters the Mediterranean Sea."
            ],
            tryThis: {
              question: "Why are rivers called drainage features?",
              choices: ["They carry water across the land", "They are mountain ranges", "They are capital cities", "They are lines of latitude"],
              correct: 0,
              explanation: "Rivers are drainage features because they carry water across land towards lakes, seas or oceans."
            }
          },
          {
            moduleId: "major-rivers-of-africa-ncdc-list",
            title: "Major Rivers of Africa",
            bigIdea: "NCDC lists major African rivers that P7 learners should be able to name and locate.",
            learnIt: [
              "The rivers listed in the P7 Topic 2 content are River Congo, the Nile, the Niger, Zambezi, Orange, Limpopo, Blue Nile and the Volta.",
              "Use region clues when locating them. The Nile and Blue Nile are in north-eastern/northern Africa. The Congo is in Central Africa. The Niger and Volta are in West Africa. The Zambezi, Orange and Limpopo are in Southern Africa.",
              "Map practice should come before memorising long notes. Point to each river on a map of Africa and say the region where it is found.",
              "Do not confuse river names with countries. Niger can refer to a country, but the Niger River is a river. Congo can refer to countries, but River Congo is a river."
            ],
            tryThis: {
              question: "Which river is found mainly in Central Africa?",
              choices: ["River Congo", "River Volta", "River Orange", "River Limpopo"],
              correct: 0,
              explanation: "River Congo is a major river of Central Africa."
            }
          },
          {
            moduleId: "river-mouths-oceans-seas",
            title: "Where Major Rivers Flow",
            bigIdea: "NCDC assessment expects learners to identify oceans and seas into which major African rivers flow.",
            learnIt: [
              "The Nile flows northwards and enters the Mediterranean Sea. This is a key example because it connects rivers with seas around Africa.",
              "River Congo and River Niger flow into the Atlantic Ocean. The Volta also flows towards the Atlantic Ocean side of West Africa.",
              "The Zambezi and Limpopo flow into the Indian Ocean side of Southern Africa. The Orange River flows into the Atlantic Ocean side of Southern Africa.",
              "When answering, write the river and the water body clearly. Example: River Congo flows into the Atlantic Ocean. The Zambezi flows into the Indian Ocean."
            ],
            tryThis: {
              question: "Into which sea does the Nile flow?",
              choices: ["Mediterranean Sea", "Red Sea", "Arctic Ocean", "Lake Ngami"],
              correct: 0,
              explanation: "The Nile flows northwards and enters the Mediterranean Sea."
            }
          },
          {
            moduleId: "river-value-map-practice",
            title: "Value and Map Practice for Rivers",
            bigIdea: "Rivers are valuable physical features, but P7 learners must also practise locating them accurately.",
            learnIt: [
              "Rivers are useful because they provide water for people, animals and crops. They can also support fishing, transport in some places, hydro-electric power and tourism.",
              "Rivers can also create challenges. They may flood, form waterfalls or rapids that make transport difficult, or become polluted when people misuse them.",
              "Activity: draw a simple map of Africa and mark at least five rivers from the NCDC list: Nile, Congo, Niger, Zambezi and Orange. Add arrows showing the direction each river generally flows towards a sea or ocean.",
              "Use an atlas or wall map when available. NCDC guidance expects learners to locate major physical features on the map of Africa."
            ],
            tryThis: {
              question: "Which activity best helps a learner study African rivers?",
              choices: ["Locating rivers on a map and noting where they flow", "Only copying capital cities", "Only naming vegetation zones", "Avoiding maps completely"],
              correct: 0,
              explanation: "Rivers should be named and located on a map, and learners should know the oceans or seas into which major rivers flow."
            }
          }
        ]
      },
            {
        subtopicId: "lakes-africa",
        title: "3. Lakes of Africa",
        modules: [
          {
            moduleId: "lakes-as-drainage-features",
            title: "Lakes as Drainage Features",
            bigIdea: "Lakes are drainage features because they are water bodies found in depressions on the land.",
            learnIt: [
              "A lake is a large body of water found in a hollow or depression on the earth's surface. Some lakes are fresh-water lakes, while others may be salty or seasonal.",
              "NCDC groups lakes under drainage features. Drainage features are water features such as lakes, rivers, seas and oceans.",
              "When studying lakes of Africa, learners should name them, locate them on a map, and understand their value to people and other living things.",
              "A good P7 answer should include the lake name and a location clue. Example: Lake Chad is found in the Lake Chad Basin in north-central Africa."
            ],
            tryThis: {
              question: "Why are lakes called drainage features?",
              choices: ["They are water features found on the earth's surface", "They are mountain ranges", "They are capital cities", "They are political parties"],
              correct: 0,
              explanation: "Lakes are drainage features because they are water bodies found on the earth's surface."
            }
          },
          {
            moduleId: "lake-chad-lake-ngami",
            title: "Lake Chad and Lake Ngami",
            bigIdea: "NCDC specifically lists Lake Chad and Lake Ngami under lakes for this topic.",
            learnIt: [
              "The two lakes named in the extracted NCDC Topic 2 content are Lake Chad and Lake Ngami.",
              "Lake Chad is found in north-central Africa around the Lake Chad Basin. It is associated with countries around that basin such as Chad, Nigeria, Niger and Cameroon.",
              "Lake Ngami is found in Southern Africa, in Botswana. It is linked to the wider Okavango area and may change in size depending on water supply.",
              "Map practice: locate Lake Chad in the north-central part of Africa and Lake Ngami in Southern Africa. Use an atlas or wall map where available."
            ],
            tryThis: {
              question: "Which lake is specifically listed by NCDC under Topic 2?",
              choices: ["Lake Chad", "Lake Superior", "Lake Baikal", "Lake Michigan"],
              correct: 0,
              explanation: "The extracted NCDC content lists Lake Chad and Lake Ngami."
            }
          },
          {
            moduleId: "lake-value-map-practice",
            title: "Value and Map Practice for Lakes",
            bigIdea: "Lakes are valuable physical features, and learners should practise locating them on maps.",
            learnIt: [
              "Lakes can provide water for people and animals. They may also support fishing, transport, tourism, irrigation and settlement where conditions allow.",
              "Lakes can also face problems such as drying, pollution, overfishing, flooding near shores and conflicts over water use.",
              "NCDC guidance says learners should identify and locate physical features on the map of Africa. For lakes, practise pointing to the country or region where each lake is found.",
              "Activity: draw a simple map of Africa and mark Lake Chad in north-central Africa and Lake Ngami in Southern Africa. Then write one sentence about why lakes are important to people."
            ],
            tryThis: {
              question: "Which activity best supports learning about lakes of Africa?",
              choices: ["Locating Lake Chad and Lake Ngami on a map", "Only listing football clubs", "Only naming continents by size", "Avoiding atlas work"],
              correct: 0,
              explanation: "NCDC expects learners to identify and locate major physical features on maps of Africa."
            }
          }
        ]
      },
            {
        subtopicId: "plateau-rift-coastal",
        title: "4. Plateau, Rift Valley and Coastal Plains",
        modules: [
          {
            moduleId: "plateau-rift-coastal-as-relief-features",
            title: "Plateau, Rift Valley and Coastal Plains as Relief Features",
            bigIdea: "Plateaus, rift valleys and coastal plains are relief features because they describe the shape and height of land.",
            learnIt: [
              "Relief features are landforms that show the shape and height of land. NCDC lists plateau, rift valleys and coastal plains among relief features.",
              "A plateau is a raised area of land that is fairly flat on top. Much of Africa is often described as a plateau continent because large parts of the continent are high and fairly flat.",
              "A rift valley is a long, narrow depression formed when parts of the earth's crust sink between faults. Rift valleys may contain lakes, steep sides and flat valley floors.",
              "A coastal plain is low, fairly flat land found near the coast. NCDC specifically mentions coastal plains in the West, North and South of Africa."
            ],
            tryThis: {
              question: "Which physical feature is a raised area of land that is fairly flat on top?",
              choices: ["Plateau", "River", "Sea", "Capital city"],
              correct: 0,
              explanation: "A plateau is raised land that is fairly flat on top."
            }
          },
          {
            moduleId: "locating-plateau-rift-coastal-plains",
            title: "Locating Plateau, Rift Valley and Coastal Plains",
            bigIdea: "P7 learners should locate relief features on a map of Africa, not only define them.",
            learnIt: [
              "Use a map of Africa to identify raised plateau areas, rift valley areas and low coastal plains. NCDC guidance says learners should locate physical features region by region.",
              "The Great Rift Valley system is an important example of a rift valley feature in Africa. It is already familiar from East Africa, but in P7 learners connect physical features to the wider African continent.",
              "Coastal plains are found near the coast. For this topic, remember NCDC's wording: coastal plains in the West, North and South of Africa.",
              "Map practice: shade highland/plateau areas lightly, trace a rift valley line, and mark low coastal plains near the coast. Keep labels short and clear."
            ],
            tryThis: {
              question: "Where are coastal plains generally found?",
              choices: ["Near the coast", "Only at mountain tops", "Only inside rivers", "Only in capital cities"],
              correct: 0,
              explanation: "Coastal plains are low, fairly flat lands found near coastal areas."
            }
          },
          {
            moduleId: "model-and-value-practice-relief-features",
            title: "Model and Value Practice for Relief Features",
            bigIdea: "NCDC encourages learners to model physical features and discuss how they influence people's lives.",
            learnIt: [
              "NCDC guidance suggests modelling physical features using local materials such as stones, banana fibres, papyrus, wood, sand, clay and water.",
              "A simple model can show a plateau as raised flat land, a rift valley as a sunken strip between higher sides, and a coastal plain as low flat land near water.",
              "These relief features influence people's lives. Plateaus may support settlement and farming where climate and soils allow. Rift valleys may contain lakes and tourist sites. Coastal plains may support fishing, ports, farming and settlement.",
              "They may also create challenges. Rift valley sides can be steep, some plateau areas may be dry, and coastal plains may face flooding or erosion. Keep examples simple and connected to the map."
            ],
            tryThis: {
              question: "Which model best shows a rift valley?",
              choices: ["A sunken strip between higher sides", "A round ball only", "A capital city symbol", "A line of longitude"],
              correct: 0,
              explanation: "A rift valley is a long depression, so a sunken strip between higher sides is a good simple model."
            }
          }
        ]
      },
            {
        subtopicId: "formation-physical-features",
        title: "5. Formation of Major Physical Features",
        modules: [
          {
            moduleId: "formation-folded-mountains",
            title: "Formation of Folded Mountains",
            bigIdea: "NCDC guidance asks learners to describe folded mountains as one way mountains are formed.",
            learnIt: [
              "Folded mountains are formed when layers of rocks are pushed from opposite sides by forces inside the earth. The pressure makes the rock layers bend or fold upward.",
              "This process happens slowly over a long time. The folded layers may rise to form long mountain ranges.",
              "A simple P7 model can be made by pushing a sheet of paper or soft cloth from both sides. The folds that rise up represent folded mountains.",
              "School-first example: the Atlas Mountains in Northern Africa are commonly studied as folded mountains. Use a map to locate them in North Africa."
            ],
            tryThis: {
              question: "How are folded mountains formed?",
              choices: ["Rock layers are pushed and folded upward", "A river flows into the sea", "A lake dries up", "A capital city is built"],
              correct: 0,
              explanation: "Folded mountains form when forces inside the earth push rock layers until they fold upward."
            }
          },
          {
            moduleId: "formation-fault-block-mountains-rift-valleys",
            title: "Faulting: Block Mountains and Rift Valleys",
            bigIdea: "Faulting can form raised blocks of land and sunken valleys.",
            learnIt: [
              "Faulting happens when cracks develop in the earth's crust and blocks of land move up or down along those cracks.",
              "A fault-block mountain forms when a block of land is pushed or left standing higher than the land around it. A rift valley forms when a long block of land sinks between faults.",
              "A simple model can be made with three books or blocks: leave the middle block lower to show a rift valley, or raise one block to show a block mountain.",
              "For P7, focus on the idea that faulting is caused by earth movements and can form both raised and sunken relief features."
            ],
            tryThis: {
              question: "Which feature can be formed when a long block of land sinks between faults?",
              choices: ["Rift valley", "Capital city", "Ocean current", "Latitude line"],
              correct: 0,
              explanation: "A rift valley can form when land sinks between faults."
            }
          },
          {
            moduleId: "formation-volcanic-mountains",
            title: "Formation of Volcanic Mountains",
            bigIdea: "Volcanic mountains are formed when materials from inside the earth build up around a volcanic opening.",
            learnIt: [
              "A volcanic mountain forms when hot molten rock, ash and other materials come out through an opening in the earth's crust and build up around it.",
              "After repeated eruptions, the materials cool and pile up to form a mountain or volcanic cone.",
              "A simple model can be made by piling sand or clay around a small opening to show how volcanic materials build up around a vent.",
              "School-first examples linked to Africa include volcanic mountains such as Mount Cameroon and Mount Kilimanjaro. Use an atlas or wall map to locate them."
            ],
            tryThis: {
              question: "What builds up to form a volcanic mountain?",
              choices: ["Lava, ash and other volcanic materials", "Capital city buildings", "Only river water", "Lines of longitude"],
              correct: 0,
              explanation: "Volcanic mountains form when lava, ash and other materials build up around a volcanic opening."
            }
          },
          {
            moduleId: "formation-diagram-practice",
            title: "Diagram and Model Practice",
            bigIdea: "NCDC expects learners to draw and model the formation of major physical features.",
            learnIt: [
              "For folded mountains, draw rock layers bending upward after being pushed from both sides. Label the folded layers and arrows showing pressure.",
              "For faulting, draw cracks called faults. Show one block higher for a block mountain or the middle block lower for a rift valley.",
              "For volcanic mountains, draw a cone shape with an opening called a vent. Show lava or ash building up around the vent.",
              "Keep diagrams simple, labelled and neat. A correct simple diagram is better than a complicated drawing with no labels."
            ],
            tryThis: {
              question: "What should a good formation diagram include?",
              choices: ["Clear labels and arrows showing the process", "Only decoration", "Only country flags", "No labels at all"],
              correct: 0,
              explanation: "Formation diagrams should show the process clearly with labels and arrows where helpful."
            }
          }
        ]
      },
            {
        subtopicId: "premium-physical-features-application",
        title: "Practice: Physical Features Map and Formation Questions",
        modules: [
          {
            moduleId: "physical-features-question-commands",
            title: "Step 1: Read the Physical Features Question",
            bigIdea: "A good answer depends on whether the question asks you to name, locate, explain or draw.",
            learnIt: [
              "If the question says name, give the correct physical feature. Example: Name one major river of Africa — River Congo.",
              "If the question says locate, give the region or country where the feature is found. Example: The Atlas Mountains are found in Northern Africa.",
              "If the question says explain formation, describe the process simply. Example: Folded mountains form when rock layers are pushed and folded upward.",
              "If the question says draw, make a neat labelled diagram or map. Do not write a long paragraph when a labelled diagram is required."
            ],
            tryThis: {
              question: "Which command word asks you to show where a feature is found?",
              choices: ["Locate", "Colour", "Whisper", "Ignore"],
              correct: 0,
              explanation: "Locate means show or state where something is found."
            }
          },
          {
            moduleId: "physical-features-map-practice",
            title: "Step 2: Practise Map Location",
            bigIdea: "NCDC expects learners to locate physical features on the map of Africa region by region.",
            learnIt: [
              "Start with feature groups: mountains/highlands, rivers, lakes, plateau/rift/coastal plains. This helps you avoid mixing names.",
              "For mountains and highlands, practise Atlas, Drakensberg, Cameroon highlands, Jos plateau, Ahaggar, Tibesti and Ethiopian highlands.",
              "For rivers, practise Nile, Congo, Niger, Zambezi, Orange, Limpopo, Blue Nile and Volta. For lakes, practise Lake Chad and Lake Ngami.",
              "Use an atlas or wall map. Say the feature name, the region, and one country clue where your teacher has provided it."
            ],
            tryThis: {
              question: "Which item belongs to the rivers group?",
              choices: ["Zambezi", "Atlas", "Lake Chad", "Drakensberg"],
              correct: 0,
              explanation: "Zambezi is a river. Atlas and Drakensberg are mountains/highlands; Lake Chad is a lake."
            }
          },
          {
            moduleId: "physical-features-formation-practice",
            title: "Step 3: Practise Formation Answers",
            bigIdea: "Formation answers should name the process and state how the feature is formed.",
            learnIt: [
              "Folded mountain answer: rock layers are pushed from opposite sides and fold upward to form mountains.",
              "Fault-block/rift valley answer: cracks called faults form in the earth's crust, and blocks of land move up or down.",
              "Volcanic mountain answer: lava, ash and other materials erupt from inside the earth and build up around a vent.",
              "Use simple process words: pushed, folded, cracked, moved, sank, rose, erupted and built up. These help your answer stay clear."
            ],
            tryThis: {
              question: "Which process is linked to volcanic mountains?",
              choices: ["Eruption and build-up of lava/ash", "Listing capital cities", "Naming continents by size", "Writing latitude only"],
              correct: 0,
              explanation: "Volcanic mountains form when volcanic materials erupt and build up around an opening."
            }
          },
          {
            moduleId: "physical-features-value-answer-practice",
            title: "Step 4: Explain Value Without Filler",
            bigIdea: "Value answers should connect the feature to how people and living things use the environment.",
            learnIt: [
              "NCDC says physical features are natural resources because people depend on the physical environment to earn a living.",
              "A strong value answer names the feature and gives a direct use. Example: Rivers provide water for people, animals and crops.",
              "Avoid vague answers like 'it is important'. Say how it is important: for water, fishing, farming, transport, tourism, minerals, settlement or climate influence where appropriate.",
              "Also be balanced when needed. Physical features can help people, but they may also create challenges such as floods, steep slopes, erosion or transport difficulties."
            ],
            tryThis: {
              question: "Which answer best explains the value of a river?",
              choices: ["A river provides water for people, animals and crops", "A river is just important", "A river is a capital city", "A river is a continent"],
              correct: 0,
              explanation: "The best answer names a direct value: rivers provide water for people, animals and crops."
            }
          }
        ]
      },],
    quiz: [
      { q: "Which is the highest mountain in Africa?", choices: ["Kilimanjaro", "Rwenzori", "Atlas", "Elgon"], correct: 0, why: "Mount Kilimanjaro in Tanzania is the highest mountain in Africa." },
      { q: "Which river is commonly known as the longest river in Africa?", choices: ["Nile", "Congo", "Niger", "Zambezi"], correct: 0, why: "The Nile is commonly taught as Africa's longest river." },
      { q: "A rift valley is formed mainly by:", choices: ["Earth movements", "Voting", "Fishing", "Factory smoke"], correct: 0, why: "Rift valleys form due to earth movements such as faulting." },
      { q: "Which lake is shared by Uganda, Kenya and Tanzania?", choices: ["Lake Victoria", "Lake Chad", "Lake Malawi", "Lake Turkana only"], correct: 0, why: "Lake Victoria is shared by Uganda, Kenya and Tanzania." },
      { q: "Which activity can be supported by waterfalls and fast-flowing rivers?", choices: ["Hydro-electric power generation", "Printing passports", "Making latitudes", "Forming parliaments"], correct: 0, why: "Fast-flowing water can turn turbines for hydro-electric power." },
      { q: "Which is a physical feature?", choices: ["River", "School uniform", "Parliament building", "Textbook"], correct: 0, why: "A river is a natural physical feature." },
      { q: "Which physical feature is a raised flat area?", choices: ["Plateau", "Valley only", "Ocean", "Capital city"], correct: 0, why: "A plateau is a raised area of land that is fairly flat on top." },
    ],
  },
  {
    id: "climate-of-africa",
    themeId: "sst-living-together-africa",
    themeName: "Living Together in Africa",
    title: "Climate of Africa",
    estMinutes: 22,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "Why this matters: Climate affects farming, settlement, vegetation, animals, transport and daily life. P7 learners need to know Africa's climatic regions and the factors that influence climate.",
      learningObjectives: [
        "Name major climatic regions of Africa.",
        "Describe characteristics of different climatic regions.",
        "Explain factors that influence climate in Africa.",
        "Show how climate affects human activities and how people affect climate.",
      ],
      whatYouNeedToKnow: [
        "**Definition:** Climate is the average weather condition of a place recorded over a long period of time (usually 30+ years).\n**Definition:** Weather is the day-to-day condition of the atmosphere at a specific place and time.\n**Elements:** Rainfall, temperature, wind, humidity, sunshine, air pressure, and cloud cover.\n**UNEB distinction:** Climate is what you EXPECT (long-term average); weather is what you GET (daily changes).",
        "Africa has climatic regions such as equatorial, tropical, desert, Mediterranean, semi-arid and mountain climate. Equatorial areas are generally hot and wet throughout the year, while desert areas are hot and dry with very little rainfall. Mediterranean areas have hot dry summers and cool wet winters.",
        "Factors that influence climate include latitude, altitude, distance from the sea, ocean currents, winds and relief. High places are cooler than low places, and places near the Equator are generally hotter. Windward slopes receive more rainfall than leeward slopes, which may be drier because of rain shadow.",
        "Climate influences farming, clothing, housing, settlement, transport and tourism. For example, wet areas support crop farming and forests, while dry areas may support pastoralism, irrigation farming or sparse settlement.",
        "Human activities such as deforestation, swamp drainage, bush burning, overgrazing, industrial pollution and settlement expansion can affect climate and rainfall patterns. Tree planting, wetland protection and careful land use help protect climate and the environment.",
      ],
      worked: {
        problem: "Why are highland areas often cooler than lowland areas near them?",
        steps: [
          "Step 1. Identify the factor: altitude or height above sea level.",
          "Step 2. Temperature decreases as altitude increases.",
          "Step 3. Therefore highlands are cooler than nearby lowlands.",
        ],
        answer: "Answer: Highland areas are cooler because temperature decreases as altitude increases.",
      },
      commonMistakes: [
        "Confusing weather and climate.",
        "Thinking all of Africa is desert.",
        "Forgetting altitude as a climate factor.",
        "Ignoring how human activities affect climate.",
      ],
      tryThis: {
        question: "Which climate is hot and dry with very little rainfall?",
        choices: ["Desert climate", "Equatorial climate", "Mountain climate", "Mediterranean climate"],
        correct: 0,
        explanation: "Desert climate has very little rainfall and is usually hot and dry.",
      },
      writingTasks: [
        {
          title: "Climate reasoning task: Farming and settlement",
          prompt: "Explain how climate affects farming and settlement in one region of Africa.",
          planningSteps: [
            "Name the climate region, such as equatorial, savanna, desert or Mediterranean.",
            "Describe rainfall and temperature in that region.",
            "Explain how the climate affects crops, animals or settlement patterns.",
            "Mention one human activity that can improve or damage the local climate/environment.",
          ],
          checklist: [
            "The climate type is named correctly.",
            "Rainfall and temperature are described.",
            "The link to farming or settlement is clear.",
            "Human influence on climate/environment is included.",
          ],
          modelOpening: "Savanna climate has wet and dry seasons. It supports grasslands, crop growing during the rainy season and pastoralism in some areas.",
        },
      ],
      recap: [
        "Climate is long-term average weather.",
        "Africa has several climatic regions.",
        "Latitude, altitude, winds, relief and distance from sea affect climate.",
        "Climate affects human activities and people can affect climate.",
      ],
    },
    subtopics: [
            {
        subtopicId: "climatic-regions",
        title: "1. Climatic regions of Africa",
        modules: [
          {
            moduleId: "weather-climate-elements",
            title: "Weather, Climate and Climate Elements",
            bigIdea: "Climate describes the usual weather conditions of a place over a long period of time.",
            learnIt: [
              "Weather is the condition of the atmosphere of a place over a short time, such as a day or a week. Climate is the usual weather condition of a place over a long period of time.",
              "NCDC lists important weather and climate elements: wind, rainfall, sunshine, temperature and humidity.",
              "These elements help learners describe climates. A place may be hot or cool, wet or dry, windy or calm, humid or less humid.",
              "In P7, climate is important because it supports and affects human life, animals and plant life. Learners should connect climate to farming, settlement, vegetation and daily activities."
            ],
            tryThis: {
              question: "Which item is an element of weather and climate?",
              choices: ["Rainfall", "Capital city", "Political party", "Longitude only"],
              correct: 0,
              explanation: "NCDC lists rainfall as one of the elements of weather and climate."
            }
          },
          {
            moduleId: "six-climatic-regions-africa",
            title: "The Climatic Regions of Africa",
            bigIdea: "NCDC names six main climatic regions of Africa for this topic.",
            learnIt: [
              "The climatic regions listed for P7 are Mediterranean, Temperate, Desert, Tropical, Equatorial and Mountain or Montane climate.",
              "A climatic region is an area that has a similar pattern of temperature, rainfall and seasons. These patterns influence plants, animals and people's activities.",
              "Use simple map thinking: equatorial climate is near the Equator; desert climate is common in very dry areas; Mediterranean climate is found in parts of North and South Africa; mountain climate is found in highland areas.",
              "Do not only memorise names. Connect each climate name to its main weather pattern and where it is commonly found in Africa."
            ],
            tryThis: {
              question: "Which list contains only climatic regions named for this topic?",
              choices: ["Equatorial, Tropical, Desert", "Nile, Congo, Zambezi", "Atlas, Drakensberg, Ahaggar", "Uganda, Kenya, Ghana"],
              correct: 0,
              explanation: "Equatorial, Tropical and Desert are climatic regions. The other lists contain rivers, mountains or countries."
            }
          },
          {
            moduleId: "climate-region-map-practice",
            title: "Map Practice: Locating Climatic Regions",
            bigIdea: "Learners should identify climatic regions on a map and connect them to African places.",
            learnIt: [
              "Use a map of Africa to locate broad climate areas. The Equatorial region is around the Equator. The Sahara and Namib are hot desert areas. Mediterranean climate is found in parts of North Africa and the south-west/southern tip of Africa.",
              "Mountain climate occurs in highland areas where altitude affects temperature. Temperate climate is associated with parts of Southern Africa. Tropical climate covers many areas with wet and dry seasons.",
              "NCDC assessment also asks learners to name countries experiencing different climate types. Use teacher-approved maps or atlases for country examples before treating them as final answers.",
              "Activity: draw a simple map of Africa and shade broad areas for Equatorial, Desert, Mediterranean and Mountain climates. Add a key so the colours or patterns are easy to read."
            ],
            tryThis: {
              question: "Which desert is a major hot desert of Africa?",
              choices: ["Sahara", "Amazon", "Arctic", "Gobi only"],
              correct: 0,
              explanation: "The Sahara is one of Africa's major hot deserts."
            }
          }
        ]
      },
            {
        subtopicId: "characteristics-climate",
        title: "2. Characteristics of different climatic regions",
        modules: [
          {
            moduleId: "equatorial-tropical-characteristics",
            title: "Equatorial and Tropical Climate Characteristics",
            bigIdea: "Climate characteristics describe the temperature, rainfall and seasons of a region.",
            learnIt: [
              "Equatorial climate is generally hot and wet for most of the year. It is common near the Equator and supports thick vegetation in many places.",
              "Important characteristics of equatorial climate include high temperatures, heavy rainfall and high humidity. Rain may fall in many months of the year.",
              "Tropical climate is generally hot, but it commonly has wet and dry seasons. This climate supports savanna grasslands and many farming/livestock activities where rainfall allows.",
              "When comparing the two, remember: equatorial climate is wetter throughout the year, while tropical climate has clearer wet and dry seasons."
            ],
            tryThis: {
              question: "Which characteristic best fits tropical climate?",
              choices: ["Wet and dry seasons", "Snow all year", "No sunshine", "Only polar winds"],
              correct: 0,
              explanation: "Tropical climate is commonly described by wet and dry seasons."
            }
          },
          {
            moduleId: "desert-mediterranean-characteristics",
            title: "Desert and Mediterranean Climate Characteristics",
            bigIdea: "Desert and Mediterranean climates are tested because learners must know hot deserts and Mediterranean seasons.",
            learnIt: [
              "Desert climate is hot and dry. It receives very little rainfall and has sparse vegetation. NCDC expects learners to name the hot deserts of Africa such as the Sahara and Namib.",
              "Problems in hot deserts include shortage of water, high temperatures, limited vegetation, sandstorms and difficulty in farming without irrigation.",
              "Mediterranean climate has hot dry summers and cool wet winters. In Africa it is associated with parts of North Africa and the south-west/southern tip of Africa.",
              "For P7, the key Mediterranean point is the season pattern: hot dry summers and cool wet winters. Do not confuse it with equatorial climate, which is wet for much of the year."
            ],
            tryThis: {
              question: "Which pair correctly describes Mediterranean climate?",
              choices: ["Hot dry summers and cool wet winters", "Hot wet all year", "Snowy all year", "No seasons at all"],
              correct: 0,
              explanation: "Mediterranean climate is known for hot dry summers and cool wet winters."
            }
          },
          {
            moduleId: "temperate-mountain-characteristics",
            title: "Temperate and Mountain Climate Characteristics",
            bigIdea: "Temperate and mountain climates are cooler than many lowland tropical areas of Africa.",
            learnIt: [
              "Temperate climate is generally milder than desert or tropical climate. It is associated with parts of Southern Africa where conditions are cooler and more moderate.",
              "Mountain climate is found in highland and mountain areas. Temperature usually becomes cooler as altitude increases.",
              "Mountain areas may receive more rainfall on windward slopes and less rainfall on leeward slopes. This can influence farming, vegetation and settlement.",
              "When describing characteristics, use climate elements: temperature, rainfall, sunshine, wind and humidity. Example: mountain climate is cooler because of high altitude."
            ],
            tryThis: {
              question: "Why are mountain areas usually cooler?",
              choices: ["Because temperature decreases with altitude", "Because all mountains are deserts", "Because they are capital cities", "Because they have no rainfall"],
              correct: 0,
              explanation: "Altitude affects climate: higher places are usually cooler than lowland areas."
            }
          }
        ]
      },
            {
        subtopicId: "factors-climate",
        title: "3. Factors that influence climate of Africa",
        modules: [
          {
            moduleId: "climate-factors-ncdc-list",
            title: "Main Factors that Influence Climate",
            bigIdea: "NCDC lists the main factors that help explain why different parts of Africa have different climates.",
            learnIt: [
              "A climate factor is something that affects the usual weather conditions of a place over a long period of time.",
              "The factors listed for this P7 topic are nearness to water bodies, winds, land mass, altitude or relief, human activities and vegetation.",
              "These factors affect climate elements such as temperature, rainfall, wind, sunshine and humidity.",
              "When answering a P7 climate question, name the factor first, then explain how it affects temperature or rainfall."
            ],
            tryThis: {
              question: "Which one is a factor that influences climate of Africa?",
              choices: ["Altitude or relief", "Capital city spelling", "River source only", "Country flag colour"],
              correct: 0,
              explanation: "NCDC lists altitude/relief as one of the factors that influence climate."
            }
          },
          {
            moduleId: "water-bodies-winds-landmass",
            title: "Water Bodies, Winds and Land Mass",
            bigIdea: "Water bodies, winds and large land masses affect rainfall, temperature and humidity.",
            learnIt: [
              "Nearness to water bodies affects climate because large lakes, seas and oceans add moisture to the air and may make nearby places more humid or moderate in temperature.",
              "Winds affect climate because they move air from one place to another. Some winds bring moist air and rainfall, while others bring dry conditions.",
              "Land mass affects climate because places far inside the continent may be drier or have more extreme temperatures than coastal places.",
              "Example answer: Coastal places may receive moist winds from the sea, while inland desert areas may remain dry because they are far from large water bodies."
            ],
            tryThis: {
              question: "How can winds affect climate?",
              choices: ["They can bring moist or dry air", "They create capital cities", "They are countries", "They stop all rainfall everywhere"],
              correct: 0,
              explanation: "Winds can carry moist air that brings rainfall or dry air that causes dry conditions."
            }
          },
          {
            moduleId: "altitude-relief-vegetation-human-activities",
            title: "Altitude, Relief, Vegetation and Human Activities",
            bigIdea: "Height of land, landform shape, vegetation cover and human actions can all change climate conditions.",
            learnIt: [
              "Altitude means height above sea level. Higher places are usually cooler than lowland places. This is why mountain climates are cooler.",
              "Relief affects climate when mountains and highlands influence rainfall. Windward slopes may receive more rainfall, while leeward sides may be drier.",
              "Vegetation affects climate because plants add moisture to the air and protect soil. Areas with thick vegetation may be cooler and more humid than bare areas.",
              "Human activities also influence climate. Cutting forests, burning bushes, draining wetlands and polluting the air can reduce rainfall, increase heat and damage the environment."
            ],
            tryThis: {
              question: "Why are highland areas often cooler?",
              choices: ["Temperature decreases with altitude", "They are always deserts", "They have no air", "They are all near the sea"],
              correct: 0,
              explanation: "Higher altitude usually makes places cooler than nearby lowlands."
            }
          },
          {
            moduleId: "factor-answer-practice",
            title: "Answering Factor Questions",
            bigIdea: "A strong climate-factor answer links the factor to rainfall, temperature or humidity.",
            learnIt: [
              "Weak answer: Altitude affects climate. This is too short because it does not explain how.",
              "Better answer: Altitude affects climate because temperatures become cooler as land becomes higher.",
              "Weak answer: Water bodies affect climate. Better answer: Water bodies add moisture to the air and may increase rainfall near them.",
              "Use this pattern: factor + how it affects climate + example where possible. This keeps answers clear and exam-ready."
            ],
            tryThis: {
              question: "Which answer best explains how vegetation affects climate?",
              choices: ["Vegetation adds moisture and can cool the local area", "Vegetation is a capital city", "Vegetation is a longitude line", "Vegetation stops all winds permanently"],
              correct: 0,
              explanation: "Vegetation can add moisture through plant processes and help cool the local environment."
            }
          }
        ]
      },
            {
        subtopicId: "climate-human-activities",
        title: "4. Influence of climate on human activities",
        modules: [
          {
            moduleId: "climate-controls-activities",
            title: "How Climate Influences Human Activities",
            bigIdea: "Climate affects what people grow, where they settle, how they dress and the work they do.",
            learnIt: [
              "Climate influences human activities because people depend on rainfall, temperature, sunshine and seasons for many daily and economic activities.",
              "Farming depends strongly on climate. Crops need suitable rainfall and temperature. Livestock also need water, pasture and tolerable heat conditions.",
              "Climate can also influence tourism, transport, mining, industry, lumbering, trade and settlement. A very dry climate may limit farming, while a wet forest climate may support lumbering.",
              "A good answer should name the climate and the activity it supports. Example: Hot desert climate may support irrigation farming where water is available."
            ],
            tryThis: {
              question: "Which activity is strongly affected by rainfall and temperature?",
              choices: ["Farming", "Spelling names only", "Drawing longitude lines only", "Naming capital cities only"],
              correct: 0,
              explanation: "Farming depends on rainfall and temperature, so climate strongly affects it."
            }
          },
          {
            moduleId: "desert-mediterranean-temperate-activities",
            title: "Activities in Desert, Mediterranean and Temperate Climates",
            bigIdea: "Different climate regions support different human activities.",
            learnIt: [
              "In hot deserts, NCDC lists irrigation, mining, nomadism and tourism. These activities depend on scarce water, minerals, open dry land and desert scenery.",
              "Problems in hot deserts include shortage of water, high temperatures, little vegetation and difficulty in farming without irrigation.",
              "In Mediterranean and temperate climates, NCDC lists trading, industry, farming and tourism. Mediterranean areas are known for hot dry summers and cool wet winters.",
              "When answering, avoid saying every activity happens everywhere. Match the activity to the climate. Example: nomadism is common in dry areas, while some farming is easier where rainfall and temperature are favourable."
            ],
            tryThis: {
              question: "Which activity is listed by NCDC for hot deserts?",
              choices: ["Nomadism", "Deep-sea fishing only", "Snow skiing everywhere", "Rice growing without irrigation"],
              correct: 0,
              explanation: "NCDC lists nomadism as one of the activities in hot desert areas."
            }
          },
          {
            moduleId: "equatorial-tropical-mountain-activities",
            title: "Activities in Equatorial, Tropical and Mountain Climates",
            bigIdea: "Wet, seasonal and highland climates support different activities in Africa.",
            learnIt: [
              "In equatorial and tropical climates, NCDC lists lumbering, agriculture, hunting, tourism, mining, trading, transport and livestock farming.",
              "Equatorial areas may support thick forests and lumbering because they receive heavy rainfall. Tropical areas with wet and dry seasons may support crop farming and livestock where conditions allow.",
              "In mountain climate, NCDC lists farming, tourism, lumbering and mining. Highland areas may be cooler and may receive rainfall on windward slopes.",
              "A strong answer should connect the climate to the activity. Example: Mountain climate can support tourism because highlands and mountains attract visitors."
            ],
            tryThis: {
              question: "Which activity is listed by NCDC for mountain climate?",
              choices: ["Tourism", "Calendar date change", "Capital city voting", "Only desert nomadism"],
              correct: 0,
              explanation: "NCDC lists tourism as one of the activities in mountain climate areas."
            }
          },
          {
            moduleId: "climate-activity-answer-practice",
            title: "Answering Climate and Activity Questions",
            bigIdea: "A good answer links climate type, climate characteristics and the human activity.",
            learnIt: [
              "Use this answer pattern: climate type + characteristic + supported activity. Example: Equatorial climate has heavy rainfall, so it supports forests and lumbering in some places.",
              "For deserts, mention dry conditions and water shortage before explaining irrigation, mining, nomadism or tourism.",
              "For Mediterranean climate, mention hot dry summers and cool wet winters before discussing farming, tourism, trading or industry.",
              "For mountain climate, mention high altitude and cooler temperatures before discussing farming, tourism, lumbering or mining."
            ],
            tryThis: {
              question: "Which is the best answer?",
              choices: ["Desert climate is dry, so irrigation may be used where water is available", "Desert climate is wet all year", "Climate does not affect farming", "Mountain climate is a capital city"],
              correct: 0,
              explanation: "The best answer links the climate characteristic to the human activity."
            }
          }
        ]
      },
            {
        subtopicId: "human-activities-climate",
        title: "5. Influence of human activities on climate",
        modules: [
          {
            moduleId: "human-activities-that-harm-climate",
            title: "Human Activities that Harm Climate",
            bigIdea: "Some human activities change the local environment and can make climate conditions worse.",
            learnIt: [
              "Human activities can influence climate when people change vegetation, wetlands, soil and air quality.",
              "Harmful activities include cutting down forests, burning bushes, draining wetlands, overgrazing, poor farming methods and polluting the air.",
              "Deforestation reduces tree cover. This can reduce moisture in the air, increase heat and reduce protection of soil and water sources.",
              "Bush burning and air pollution add smoke and harmful gases to the air. Overgrazing and poor farming can leave soil bare, making the land hotter and drier."
            ],
            tryThis: {
              question: "Which human activity can reduce tree cover and affect climate?",
              choices: ["Deforestation", "Map reading", "Naming continents", "Drawing a compass"],
              correct: 0,
              explanation: "Deforestation means cutting down forests, which reduces vegetation cover and can affect local climate."
            }
          },
          {
            moduleId: "effects-of-human-activities-on-climate",
            title: "Effects of Human Activities on Climate",
            bigIdea: "Human activities can change rainfall, temperature and environmental conditions.",
            learnIt: [
              "When vegetation is removed, an area may become hotter because there is less shade and less moisture from plants.",
              "When wetlands are drained, the area may lose natural water storage and moisture. This can affect local rainfall, farming and water supply.",
              "Air pollution and uncontrolled burning can make the air dirty and may contribute to warming and unhealthy living conditions.",
              "A strong P7 answer should show cause and effect. Example: Cutting down trees reduces vegetation cover, which may reduce moisture and increase heat in an area."
            ],
            tryThis: {
              question: "Which answer shows cause and effect correctly?",
              choices: ["Cutting trees reduces vegetation cover and may make an area hotter", "Cutting trees creates oceans", "Wetlands are capital cities", "Smoke improves all rainfall"],
              correct: 0,
              explanation: "The correct answer links the activity to a climate/environment effect."
            }
          },
          {
            moduleId: "protecting-climate-environment",
            title: "Protecting Climate and the Environment",
            bigIdea: "People can reduce harmful climate effects by caring for vegetation, wetlands and soil.",
            learnIt: [
              "Good human activities can protect the environment and support better climate conditions. These include planting trees, protecting forests, conserving wetlands and using better farming methods.",
              "Tree planting and forest protection help restore vegetation cover. Vegetation adds moisture, gives shade, protects soil and supports living things.",
              "Wetland protection helps conserve water and supports plants and animals. Soil conservation reduces erosion and keeps land useful for farming.",
              "Controlled use of fire, proper waste management and reducing pollution also help protect the local environment."
            ],
            tryThis: {
              question: "Which activity helps protect climate and the environment?",
              choices: ["Planting trees", "Burning all forests", "Draining every wetland", "Overgrazing land"],
              correct: 0,
              explanation: "Planting trees helps restore vegetation cover and protect the environment."
            }
          },
          {
            moduleId: "human-influence-answer-practice",
            title: "Answering Human Influence Questions",
            bigIdea: "Good answers separate harmful activities, effects and solutions.",
            learnIt: [
              "If asked how human activities affect climate, name the activity first. Example: deforestation, bush burning, wetland drainage or pollution.",
              "Then state the effect. Example: deforestation reduces tree cover and may increase heat or reduce moisture in the area.",
              "If asked for solutions, give protective actions: plant trees, protect wetlands, control bush burning, conserve soil and reduce pollution.",
              "Use this pattern: human activity + effect on climate/environment + solution where needed. This keeps the answer clear and complete."
            ],
            tryThis: {
              question: "Which is the best solution to deforestation?",
              choices: ["Planting and protecting trees", "Cutting more forests", "Burning bushes", "Draining wetlands"],
              correct: 0,
              explanation: "Planting and protecting trees helps restore vegetation cover after deforestation."
            }
          }
        ]
      },
            {
        subtopicId: "premium-climate-interpretation",
        title: "Practice: Climate Interpretation Questions",
        modules: [
          {
            moduleId: "climate-question-commands",
            title: "Step 1: Read the Climate Question",
            bigIdea: "Climate questions may ask you to identify, describe, explain, name or state problems.",
            learnIt: [
              "If the question says identify, name the climate region, factor or activity. Example: Identify one hot desert of Africa — Sahara Desert.",
              "If the question says describe, give characteristics such as temperature, rainfall, seasons, humidity or winds.",
              "If the question says explain, give a reason. Example: Mountain areas are cooler because temperature decreases with altitude.",
              "If the question asks for problems, give clear problems linked to that climate. Example: hot deserts have water shortage, high temperatures and little vegetation."
            ],
            tryThis: {
              question: "Which command word asks you to give reasons?",
              choices: ["Explain", "List only", "Copy", "Colour"],
              correct: 0,
              explanation: "Explain means give reasons or show how something happens."
            }
          },
          {
            moduleId: "climate-region-characteristic-practice",
            title: "Step 2: Practise Climate Regions and Characteristics",
            bigIdea: "Learners should match each climatic region with its main characteristics.",
            learnIt: [
              "Equatorial: hot and wet for much of the year, with high humidity. Tropical: hot with wet and dry seasons.",
              "Desert: hot and dry with very little rainfall. Mediterranean: hot dry summers and cool wet winters.",
              "Temperate: milder and cooler than many tropical lowlands. Mountain: cooler because of high altitude.",
              "Practice by making pairs: climate region + rainfall/temperature/seasons. Example: Mediterranean climate — hot dry summers and cool wet winters."
            ],
            tryThis: {
              question: "Which climate has hot dry summers and cool wet winters?",
              choices: ["Mediterranean", "Equatorial", "Desert", "Mountain"],
              correct: 0,
              explanation: "Mediterranean climate is known for hot dry summers and cool wet winters."
            }
          },
          {
            moduleId: "climate-factors-activities-practice",
            title: "Step 3: Practise Factors and Human Activities",
            bigIdea: "Strong answers connect climate factors and climate regions to human activities.",
            learnIt: [
              "Factor answer: Altitude affects climate because higher places are cooler than lowlands.",
              "Activity answer: Hot desert climate supports nomadism, mining, tourism and irrigation where water is available.",
              "Cause-effect answer: Deforestation reduces vegetation cover, which may increase heat and reduce moisture in an area.",
              "Always connect your answer to rainfall, temperature, season, altitude, vegetation or human activity. Avoid vague statements like 'climate is important' without explanation."
            ],
            tryThis: {
              question: "Which answer best links climate to human activity?",
              choices: ["Desert climate is dry, so irrigation may be used where water is available", "Climate is just there", "A mountain is a capital", "Rainfall is a continent"],
              correct: 0,
              explanation: "The correct answer links a climate characteristic to a human activity."
            }
          },
          {
            moduleId: "climate-protection-practice",
            title: "Step 4: Practise Climate Protection Answers",
            bigIdea: "Climate protection answers should name the harmful activity and give a practical solution.",
            learnIt: [
              "Harmful activity: deforestation. Solution: plant trees and protect forests.",
              "Harmful activity: wetland drainage. Solution: conserve wetlands and use them wisely.",
              "Harmful activity: bush burning or air pollution. Solution: control burning, manage waste properly and reduce pollution.",
              "A complete answer can have three parts: problem, effect and solution. Example: Deforestation reduces tree cover and may increase heat, so people should plant and protect trees."
            ],
            tryThis: {
              question: "Which answer gives a problem and a solution?",
              choices: ["Deforestation reduces trees, so people should plant and protect trees", "Deforestation means all climates disappear", "Wetlands are mountains", "Pollution is a capital city"],
              correct: 0,
              explanation: "The best answer names the problem and gives a practical solution."
            }
          }
        ]
      },],
    quiz: [
      { q: "Which instrument measures wind speed?", choices: ["Anemometer", "Wind vane", "Barometer", "Thermometer"], correct: 0, why: "An anemometer measures wind speed." },
      { q: "Climate is best described as:", choices: ["Average weather over many years", "Today's rainfall", "Wind direction", "A type of vegetation"], correct: 0, why: "Climate is the average weather conditions over a long period (30+ years)." },
      { q: "Which factor most strongly influences climate in Africa?", choices: ["Distance from the Equator", "Country name", "Flag colour", "Road signs"], correct: 0, why: "Distance from the Equator affects temperature and rainfall patterns." },
      { q: "The Sahara Desert is found in:", choices: ["North Africa", "Southern Africa", "Central Africa", "East Africa only"], correct: 0, why: "The Sahara Desert is in North Africa." },
      { q: "Which ocean current makes the Namib coast very dry?", choices: ["Benguela Current", "Agulhas Current", "Mozambique Current", "Canary Current"], correct: 0, why: "The cold Benguela Current cools air along Namibia's coast, reducing rainfall." },
    ],
  },
  {
    id: "vegetation-of-africa",
    themeId: "sst-living-together-africa",
    themeName: "Living Together in Africa",
    title: "Vegetation of Africa",
    estMinutes: 18,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "Vegetation affects animals, population distribution, farming, tourism and environmental protection across Africa.",
      learningObjectives: ["Name and locate major vegetation types of Africa.", "Explain factors that influence vegetation distribution.", "Describe the importance of vegetation and game parks."],
      whatYouNeedToKnow: [
        "Vegetation is the natural plant cover of an area. Types in Africa: equatorial rainforest, savanna grassland, desert vegetation, Mediterranean vegetation, mountain vegetation, mangrove vegetation.",
        "Vegetation distribution depends mainly on rainfall. Temperature, altitude, soil, and human activities also influence it.",
        "Vegetation is important for food, timber, medicine, rainfall, soil protection, animal habitats, and tourism. Game parks protect wildlife and vegetation.",
      ],
      worked: { problem: "Why are savanna grasslands important to tourism in Africa?", steps: ["Savanna has grass and scattered trees.", "Many wild animals like lions and elephants live there.", "Tourists visit game parks to see them."], answer: "Savanna grasslands support wildlife, which attracts tourists." },
      recap: ["Vegetation depends mainly on rainfall.", "Africa has forests, savanna, desert, Mediterranean, and mountain vegetation.", "Vegetation supports animals, people, tourism, and the environment."],
    },
    subtopics: [
            {
        subtopicId: "vegetation-types",
        title: "1. Location and names of vegetation types of Africa",
        modules: [
          {
            moduleId: "vegetation-meaning-types",
            title: "Meaning and Types of Vegetation",
            bigIdea: "Vegetation is the plant cover of an area, and Africa has different vegetation types in different regions.",
            learnIt: [
              "Vegetation means the plant cover of an area. It includes trees, grasses, shrubs and other plants growing naturally or planted by people.",
              "NCDC expects learners to locate and name the types of vegetation in Africa. This means learners should know both the names and where they are broadly found on a map.",
              "The vegetation types listed for this topic are Equatorial forests, Mangrove forests, Montane vegetation, Temperate grasslands or velds, Savannah vegetation and Mediterranean vegetation.",
              "Vegetation is important because people and animals depend on it for food, shelter, medicine, fuel, grazing, timber, rainfall support and habitats."
            ],
            tryThis: {
              question: "What is vegetation?",
              choices: ["Plant cover of an area", "A capital city", "A line of longitude", "A river mouth"],
              correct: 0,
              explanation: "Vegetation means the plant cover of an area."
            }
          },
          {
            moduleId: "forest-vegetation-types",
            title: "Forest Vegetation Types",
            bigIdea: "Some vegetation types in Africa are mainly forest vegetation.",
            learnIt: [
              "Equatorial forests are thick forests found in hot and wet equatorial areas. They usually have many tall trees and dense plant growth.",
              "Mangrove forests grow in muddy and salty coastal areas, especially around sheltered tropical coasts and river mouths.",
              "Montane vegetation is found in mountain and highland areas. It changes with altitude because temperature and rainfall change as land becomes higher.",
              "Map practice: locate equatorial forest areas near the Equator, mangrove areas near coasts, and montane vegetation in highland or mountain areas."
            ],
            tryThis: {
              question: "Which vegetation type grows in muddy salty coastal areas?",
              choices: ["Mangrove forests", "Temperate grasslands", "Desert shrubs only", "Mediterranean scrub"],
              correct: 0,
              explanation: "Mangrove forests grow in muddy and salty coastal areas."
            }
          },
          {
            moduleId: "grassland-shrub-vegetation-types",
            title: "Grassland and Shrub Vegetation Types",
            bigIdea: "Other African vegetation types include grasslands, savannah and Mediterranean vegetation.",
            learnIt: [
              "Savannah vegetation is mainly grassland with scattered trees and shrubs. It is common in many parts of tropical Africa and supports many wild animals.",
              "Temperate grasslands, also called velds, are open grassland areas associated especially with parts of Southern Africa.",
              "Mediterranean vegetation grows in areas with Mediterranean climate. The NCDC extract links it to South Africa, Tunisia, Algeria, Morocco and Libya.",
              "These vegetation types are not identical. Savannah has grasses with scattered trees; velds are temperate grasslands; Mediterranean vegetation is adapted to hot dry summers and cool wet winters."
            ],
            tryThis: {
              question: "Which vegetation is mainly grassland with scattered trees?",
              choices: ["Savannah vegetation", "Mangrove forest", "Equatorial forest", "Montane forest only"],
              correct: 0,
              explanation: "Savannah vegetation is mainly grassland with scattered trees and shrubs."
            }
          },
          {
            moduleId: "vegetation-map-practice",
            title: "Map Practice: Locating Vegetation Types",
            bigIdea: "Learners should connect each vegetation type to broad African map areas.",
            learnIt: [
              "Use a map of Africa to shade vegetation areas. Put equatorial forests near the Equator, savannah across broad tropical grassland areas, and Mediterranean vegetation in the north and south-west/southern tip areas where Mediterranean climate occurs.",
              "Mark mangrove forests along suitable coastal areas and montane vegetation in highland/mountain areas.",
              "Keep the map simple. Use a key to show each vegetation type, and write labels neatly so the map is easy to read.",
              "Do not memorise vegetation types as isolated words. Always connect the vegetation type to climate, relief, soils and human activities because these factors influence distribution."
            ],
            tryThis: {
              question: "Why should a vegetation map have a key?",
              choices: ["To explain what each colour or pattern means", "To hide the labels", "To replace all vegetation names", "To show only capital cities"],
              correct: 0,
              explanation: "A key helps the reader understand what each colour or pattern on a map represents."
            }
          }
        ]
      },
            {
        subtopicId: "factors-vegetation",
        title: "2. Factors that influence vegetation distribution",
        modules: [
          {
            moduleId: "vegetation-factors-ncdc-list",
            title: "Main Factors that Influence Vegetation Distribution",
            bigIdea: "NCDC lists four main factors that influence where different vegetation types grow in Africa.",
            learnIt: [
              "Vegetation distribution means the way different vegetation types are spread over an area.",
              "The factors listed for this topic are climate, types of soil, human activities and relief or altitude.",
              "These factors explain why one area may have thick forest while another has savannah, grassland, Mediterranean vegetation or sparse plant cover.",
              "When answering, name the factor first and then explain how it affects vegetation. Do not only list factors without explanation."
            ],
            tryThis: {
              question: "Which factor influences vegetation distribution?",
              choices: ["Climate", "Country anthem", "Capital city spelling", "Longitude time only"],
              correct: 0,
              explanation: "NCDC lists climate as one of the factors that influence vegetation distribution."
            }
          },
          {
            moduleId: "climate-soil-relief-vegetation",
            title: "Climate, Soil and Relief/Altitude",
            bigIdea: "Natural factors affect the type and amount of vegetation in an area.",
            learnIt: [
              "Climate affects vegetation through rainfall, temperature, sunshine, wind and humidity. Areas with heavy rainfall may support forests, while dry areas support sparse vegetation or drought-resistant plants.",
              "Soil affects vegetation because plants need soil for support, water and nutrients. Fertile soils can support thicker plant growth than poor or shallow soils.",
              "Relief and altitude affect vegetation because highland areas are usually cooler and may have different rainfall patterns from lowland areas.",
              "Example answer: Equatorial areas receive heavy rainfall and high temperatures, so they can support thick forests. Dry desert areas receive little rainfall, so they have little vegetation."
            ],
            tryThis: {
              question: "How does rainfall affect vegetation?",
              choices: ["High rainfall can support thicker plant growth", "Rainfall is a capital city", "Rainfall stops all plants", "Rainfall is a mountain range"],
              correct: 0,
              explanation: "Rainfall supplies water needed by plants, so areas with more rainfall often support thicker vegetation."
            }
          },
          {
            moduleId: "human-activities-vegetation",
            title: "Human Activities and Vegetation",
            bigIdea: "Human activities can destroy vegetation or help restore it.",
            learnIt: [
              "Human activities influence vegetation distribution. Some activities reduce vegetation, while others protect or restore it.",
              "Activities that reduce vegetation include deforestation, bush burning, overgrazing, poor farming methods, settlement expansion and charcoal burning.",
              "Activities that restore or protect vegetation include afforestation, re-afforestation, controlled grazing, soil conservation and protecting forests or game parks.",
              "A strong P7 answer should show direction: deforestation reduces vegetation, while afforestation increases or restores vegetation cover."
            ],
            tryThis: {
              question: "Which human activity can restore vegetation cover?",
              choices: ["Afforestation", "Deforestation", "Bush burning", "Overgrazing"],
              correct: 0,
              explanation: "Afforestation means planting trees where there were few or no trees, so it can restore vegetation cover."
            }
          },
          {
            moduleId: "vegetation-factor-answer-practice",
            title: "Answering Vegetation Factor Questions",
            bigIdea: "Good answers explain how the factor affects vegetation, not just name the factor.",
            learnIt: [
              "Weak answer: Climate affects vegetation. Better answer: Climate affects vegetation because rainfall and temperature determine the type and amount of plants that can grow.",
              "Weak answer: Soil affects vegetation. Better answer: Fertile soil supports thick vegetation because plants get enough nutrients and water from it.",
              "Weak answer: People affect vegetation. Better answer: Bush burning destroys grass and young trees, reducing vegetation cover.",
              "Use this pattern: factor + how it affects plants + example. This makes your answer complete and easier to mark."
            ],
            tryThis: {
              question: "Which answer best explains how soil affects vegetation?",
              choices: ["Fertile soil supports better plant growth", "Soil is a country", "Soil is a sea", "Soil stops all rainfall"],
              correct: 0,
              explanation: "Fertile soil gives plants nutrients and supports better growth."
            }
          }
        ]
      },
            {
        subtopicId: "importance-vegetation",
        title: "3. Importance of vegetation",
        modules: [
          {
            moduleId: "vegetation-importance-people",
            title: "Importance of Vegetation to People",
            bigIdea: "Vegetation is valuable because people use plants and plant-covered areas in many daily and economic activities.",
            learnIt: [
              "Vegetation is important to people because it provides useful materials and supports livelihoods.",
              "People get food, fruits, medicine, timber, poles, firewood, charcoal, fibres, grass for thatching and materials for crafts from vegetation.",
              "Vegetation also supports farming, bee keeping, tourism and rainfall/moisture conditions where plant cover is protected.",
              "A strong answer should name the use clearly. Example: Vegetation provides timber for building and furniture."
            ],
            tryThis: {
              question: "Which is an importance of vegetation to people?",
              choices: ["It provides timber and medicine", "It is a longitude line", "It is a capital city", "It stops all farming"],
              correct: 0,
              explanation: "Vegetation provides useful materials such as timber, medicine, firewood and food."
            }
          },
          {
            moduleId: "vegetation-importance-animals-environment",
            title: "Importance of Vegetation to Animals and the Environment",
            bigIdea: "Vegetation provides habitats and food for animals and helps protect the environment.",
            learnIt: [
              "Vegetation is important to animals because it provides food, shelter, nesting places and protection from enemies or strong sunshine.",
              "Grasslands provide pasture for grazing animals. Forests provide fruits, leaves, insects, shade and homes for birds, monkeys and many other animals.",
              "Vegetation protects soil from erosion because roots hold soil particles together and plant cover reduces the force of rain and wind on bare soil.",
              "Vegetation also helps conserve water and supports rainfall/moisture conditions. Destroying vegetation can harm both people and animals."
            ],
            tryThis: {
              question: "How does vegetation help animals?",
              choices: ["It provides food and shelter", "It names capital cities", "It draws longitude lines", "It removes all habitats"],
              correct: 0,
              explanation: "Animals depend on vegetation for food, shelter, nesting places and protection."
            }
          },
          {
            moduleId: "caring-for-vegetation",
            title: "Caring for Vegetation",
            bigIdea: "NCDC expects learners to appreciate vegetation and practise how to care for it.",
            learnIt: [
              "People can care for vegetation by planting trees, protecting forests, avoiding unnecessary bush burning and using land carefully.",
              "Afforestation means planting trees where there were few or no trees. Re-afforestation means planting trees again where forests were cut down.",
              "Controlled grazing, soil conservation, agroforestry and protection of wetlands also help vegetation to recover and remain useful.",
              "A complete answer should include both the problem and care action. Example: Deforestation reduces vegetation, so people should plant and protect trees."
            ],
            tryThis: {
              question: "Which action helps care for vegetation?",
              choices: ["Planting and protecting trees", "Burning forests carelessly", "Overgrazing", "Cutting all trees"],
              correct: 0,
              explanation: "Planting and protecting trees helps restore and conserve vegetation."
            }
          }
        ]
      },
            {
        subtopicId: "game-parks-animals",
        title: "4. Game parks and animals",
        modules: [
          {
            moduleId: "importance-of-game-parks",
            title: "Importance of Game Parks",
            bigIdea: "Game parks protect wild animals and their habitats, which is part of caring for vegetation and wildlife.",
            learnIt: [
              "A game park is a protected area where wild animals, birds and their habitats are conserved.",
              "Game parks are important because they protect wild animals from poaching and habitat destruction. They also protect vegetation zones where animals live.",
              "Game parks support tourism, create jobs, earn income for countries and help learners study animals, birds and vegetation in their natural environment.",
              "NCDC also connects this topic to caring for wild animals through protection, feeding, treatment, love, preserving habitats and security by game wardens or rangers."
            ],
            tryThis: {
              question: "Why are game parks important?",
              choices: ["They protect wild animals and habitats", "They destroy all vegetation", "They are lines of latitude", "They stop all tourism"],
              correct: 0,
              explanation: "Game parks protect animals, birds and the vegetation habitats where they live."
            }
          },
          {
            moduleId: "animals-in-vegetation-zones",
            title: "Animals in Different Vegetation Zones",
            bigIdea: "Different animals live in different vegetation zones because zones provide different food, water, shelter and climate conditions.",
            learnIt: [
              "NCDC expects learners to identify animals found in different vegetation zones, especially Equatorial forests, Savannah and Temperate grasslands.",
              "Equatorial forests may support animals such as monkeys, gorillas, forest birds, insects and other forest animals because forests provide fruits, leaves, shade and shelter.",
              "Savannah vegetation supports many grazing and hunting animals because it has grass, scattered trees and open land. Examples include elephants, zebras, antelopes, buffaloes, giraffes, lions and cheetahs where found.",
              "Temperate grasslands/velds support grassland animals and livestock where conditions allow. Specific animal examples should be checked with a teacher or atlas before premium-final status."
            ],
            tryThis: {
              question: "Which vegetation zone commonly supports many grazing animals?",
              choices: ["Savannah", "Mangrove swamp only", "Mediterranean city centre", "Bare rock only"],
              correct: 0,
              explanation: "Savannah grasslands provide grass and open land for many grazing animals."
            }
          },
          {
            moduleId: "why-animals-live-in-different-zones",
            title: "Why Animals Live in Different Vegetation Zones",
            bigIdea: "Animals live where vegetation gives them the food, water, shelter and protection they need.",
            learnIt: [
              "Animals are found in different vegetation zones because each zone provides different living conditions.",
              "Food is one reason. Grazing animals need grasses, browsers need leaves and fruits, and predators need prey animals.",
              "Shelter and protection are also important. Forest animals may need trees and shade, while savannah animals may use tall grass, scattered trees and open spaces for movement.",
              "Climate and water also matter. Animals survive better where temperature, rainfall and water supply suit their bodies and feeding habits."
            ],
            tryThis: {
              question: "Why do different animals live in different vegetation zones?",
              choices: ["Zones provide different food, water and shelter", "All animals need capital cities", "Vegetation zones are oceans", "Animals only follow longitude lines"],
              correct: 0,
              explanation: "Animals live in zones that provide suitable food, water, shelter, climate and protection."
            }
          },
          {
            moduleId: "caring-for-animals-birds",
            title: "Caring for Animals and Birds",
            bigIdea: "Caring for animals and birds means protecting them and the vegetation habitats they depend on.",
            learnIt: [
              "NCDC expects learners to write down the importance of caring for animals and birds. Caring for them helps conserve wildlife for the future.",
              "Ways of caring include protecting animals from poachers, preserving habitats, treating sick or injured animals, feeding animals where necessary, and providing security through game wardens or rangers.",
              "People should also avoid destroying vegetation because animals and birds need plants for food, shelter and nesting places.",
              "A strong answer connects animals to habitat. Example: We should protect forests because many birds and animals use trees for food, shelter and nesting."
            ],
            tryThis: {
              question: "Which action helps care for wild animals?",
              choices: ["Protecting their habitats", "Destroying game parks", "Poaching", "Burning all vegetation"],
              correct: 0,
              explanation: "Protecting habitats helps wild animals and birds survive."
            }
          }
        ]
      },
            {
        subtopicId: "population-vegetation",
        title: "5. Population and vegetation",
        modules: [
          {
            moduleId: "population-distribution-and-vegetation",
            title: "Population Distribution and Vegetation",
            bigIdea: "Population distribution is related to vegetation because vegetation affects settlement, farming, grazing and livelihoods.",
            learnIt: [
              "Population distribution means the way people are spread over an area. Some places have many people, while others have few people.",
              "Vegetation can influence where people settle. Areas with useful vegetation, water, pasture, fertile soils and farming opportunities may attract more people.",
              "NCDC links population distribution to vegetation zones such as Equatorial, Desert, Savannah, Mediterranean and Mountain areas.",
              "A good answer should connect vegetation to settlement. Example: Savannah areas may support livestock and farming where rainfall is suitable, so people may settle there."
            ],
            tryThis: {
              question: "What does population distribution mean?",
              choices: ["The way people are spread over an area", "The height of a mountain", "The source of a river", "The capital of a country"],
              correct: 0,
              explanation: "Population distribution is the way people are spread over an area."
            }
          },
          {
            moduleId: "reasons-population-differs-vegetation-zones",
            title: "Why Population Differs in Vegetation Zones",
            bigIdea: "Different vegetation zones support people differently, so population is not evenly spread.",
            learnIt: [
              "Some vegetation zones attract more people because they support farming, grazing, trade, transport, tourism or forest products.",
              "Desert vegetation zones often have fewer people because water is scarce, vegetation is sparse and farming is difficult without irrigation.",
              "Equatorial forest areas may have valuable forests, but thick vegetation, diseases, poor transport and difficult clearing can limit dense settlement in some places.",
              "Mountain and Mediterranean areas may attract people where climate, soils, tourism or farming conditions are favourable. Always explain the reason, not only the population pattern."
            ],
            tryThis: {
              question: "Why do hot desert areas often have fewer people?",
              choices: ["Water is scarce and vegetation is sparse", "They have too many capital cities", "They are all oceans", "They have no sunshine"],
              correct: 0,
              explanation: "Hot desert areas often have fewer people because water is scarce and vegetation is sparse."
            }
          },
          {
            moduleId: "effects-of-big-population-on-vegetation",
            title: "Effects of Big Population on Vegetation",
            bigIdea: "A large population can put pressure on vegetation when people need more land, fuel and resources.",
            learnIt: [
              "A big population may increase demand for land for settlement, farming, grazing, roads and buildings. This can lead to clearing of vegetation.",
              "High demand for firewood, charcoal, timber and farmland can cause deforestation and reduction of natural vegetation cover.",
              "Too many animals on limited land can cause overgrazing. Overgrazing removes grass cover and may lead to soil erosion.",
              "Other effects include bush burning, habitat destruction, loss of wildlife, reduced rainfall/moisture in some areas and land degradation."
            ],
            tryThis: {
              question: "Which is an effect of a big population on vegetation?",
              choices: ["Deforestation", "More Prime Meridians", "More oceans", "Less need for land"],
              correct: 0,
              explanation: "A big population can increase demand for land and fuel, leading to deforestation."
            }
          },
          {
            moduleId: "protecting-vegetation-from-population-pressure",
            title: "Protecting Vegetation from Population Pressure",
            bigIdea: "People can reduce damage to vegetation by using land and plant resources carefully.",
            learnIt: [
              "Vegetation can be protected even where population is growing if people use better land-management methods.",
              "Helpful actions include planting trees, using fuel-saving stoves, controlled grazing, agroforestry, soil conservation, protecting wetlands and avoiding careless bush burning.",
              "Communities can also protect forests, game parks and reserves so that plants, animals and birds continue to survive.",
              "A complete answer should include the problem and solution. Example: Overgrazing destroys grass cover, so farmers should control the number of animals grazing in one area."
            ],
            tryThis: {
              question: "Which action can reduce overgrazing?",
              choices: ["Controlled grazing", "Keeping too many animals on little land", "Burning all grass", "Cutting all trees"],
              correct: 0,
              explanation: "Controlled grazing helps prevent animals from destroying vegetation cover in one area."
            }
          }
        ]
      },
            {
        subtopicId: "premium-vegetation-application",
        title: "Practice: Vegetation Reasoning Questions",
        modules: [
          {
            moduleId: "vegetation-question-commands",
            title: "Step 1: Read the Vegetation Question",
            bigIdea: "Vegetation questions may ask you to name, locate, describe, explain, relate or outline effects.",
            learnIt: [
              "If the question says name, give the correct vegetation type. Example: Name one vegetation type of Africa — Savannah vegetation.",
              "If the question says locate, state where the vegetation is found broadly on a map. Example: Equatorial forests are found near the Equator.",
              "If the question says explain, give a reason. Example: Animals live in savannah because it provides grass, water and prey animals.",
              "If the question says outline effects, give clear results. Example: A big population may lead to deforestation and overgrazing."
            ],
            tryThis: {
              question: "Which command asks you to give reasons?",
              choices: ["Explain", "Copy", "Colour only", "Ignore"],
              correct: 0,
              explanation: "Explain means give reasons or show why something happens."
            }
          },
          {
            moduleId: "vegetation-types-factors-practice",
            title: "Step 2: Practise Vegetation Types and Factors",
            bigIdea: "Good vegetation answers connect vegetation types to the factors that influence their distribution.",
            learnIt: [
              "Vegetation types to practise: Equatorial forests, Mangrove forests, Montane vegetation, Temperate grasslands, Savannah vegetation and Mediterranean vegetation.",
              "Factors to practise: climate, types of soil, human activities and relief/altitude.",
              "A strong answer connects the factor to vegetation. Example: Heavy rainfall and high temperatures support thick equatorial forests.",
              "Avoid vague answers like 'climate affects vegetation' without explaining how rainfall or temperature affects plant growth."
            ],
            tryThis: {
              question: "Which factor best explains why dry areas have little vegetation?",
              choices: ["Low rainfall", "Too many capital cities", "Longitude only", "Ocean names"],
              correct: 0,
              explanation: "Low rainfall limits plant growth, so dry areas often have less vegetation."
            }
          },
          {
            moduleId: "animals-game-parks-practice",
            title: "Step 3: Practise Animals and Game Parks",
            bigIdea: "Animals live in vegetation zones that provide suitable food, water, shelter and protection.",
            learnIt: [
              "When asked about animals in vegetation zones, name the zone and give suitable animal examples from teacher-approved notes.",
              "When asked why animals live in different zones, mention food, water, shelter, climate and protection from enemies.",
              "When asked about game parks, explain that they protect animals, birds and habitats and also support tourism, jobs and learning.",
              "When asked how to care for animals and birds, mention protecting habitats, preventing poaching, treating sick animals and providing security through wardens or rangers."
            ],
            tryThis: {
              question: "Why do animals live in different vegetation zones?",
              choices: ["Because zones provide different food, water and shelter", "Because animals are capital cities", "Because all zones are oceans", "Because vegetation has no effect"],
              correct: 0,
              explanation: "Animals live where they can find suitable food, water, shelter, climate and protection."
            }
          },
          {
            moduleId: "population-vegetation-practice",
            title: "Step 4: Practise Population and Vegetation Answers",
            bigIdea: "Population questions should connect settlement, land use and vegetation change.",
            learnIt: [
              "When asked about population distribution, explain how vegetation zones influence where people live and work.",
              "When asked why population differs, mention water, farming opportunities, pasture, forest resources, climate, diseases, transport and land availability where relevant.",
              "When asked effects of population on vegetation, mention deforestation, overgrazing, bush burning, soil erosion, habitat destruction and conservation solutions.",
              "Use complete reasoning: A big population needs more land for farming and settlement, so vegetation may be cleared, causing deforestation."
            ],
            tryThis: {
              question: "Which answer best explains an effect of population on vegetation?",
              choices: ["More people may clear vegetation for farming and settlement", "More people create new oceans", "Population is a longitude line", "Vegetation never changes"],
              correct: 0,
              explanation: "Population growth can increase demand for land, leading to clearing of vegetation."
            }
          }
        ]
      },],
    quiz: [
      { q: "Vegetation means:", choices: ["Plant cover of an area", "Capital city", "All rivers", "Only wild animals"], correct: 0, why: "Vegetation is the natural plant cover of an area." },
      { q: "Which vegetation type is common near the Equator?", choices: ["Equatorial rainforest", "Desert vegetation", "Mediterranean scrub", "Tundra"], correct: 0, why: "Heavy rainfall near the Equator supports equatorial rainforest." },
      { q: "Which factor strongly influences vegetation?", choices: ["Rainfall", "Flag colour", "Capital name", "Number plate"], correct: 0, why: "Rainfall affects the type and amount of vegetation." },
      { q: "Game parks are important because they:", choices: ["Protect wildlife", "Destroy all forests", "Stop tourism", "Remove all animals"], correct: 0, why: "Game parks protect animals and their habitats." },
      { q: "Which animal is commonly associated with savanna?", choices: ["Lion", "Polar bear", "Penguin", "Whale only"], correct: 0, why: "Lions live in savanna ecosystems." },
    ],
  },
  {
    id: "people-ethnic-groups-settlement",
    themeId: "sst-living-together-africa",
    themeName: "Living Together in Africa",
    title: "People of Africa, ethnic groups and settlement",
    estMinutes: 17,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "African societies have different origins, migrations, languages and settlement patterns. Understanding diversity promotes unity.",
      learningObjectives: ["Describe origins and movements of ethnic groups.", "Identify settlement patterns.", "Explain reasons for migration."],
      whatYouNeedToKnow: [
        "An ethnic group shares common culture, language, origin, and history. Major groups: Bantu (largest), Nilotes, Cushites, Khoisan.",
        "Migration = movement of people. Push factors: population increase, land shortage, wars. Pull factors: fertile land, water, security, trade.",
        "Settlement patterns: dispersed (farming), nucleated (markets/water), linear (roads/rivers). Influenced by relief, climate, water, security, soils.",
      ],
      worked: { problem: "Give reasons why ethnic groups migrated.", steps: ["People needed land and water.", "Wars forced movement.", "Harsh climate pushed people away."], answer: "Population increase, land shortage, wars, harsh climate, and expansionism." },
      recap: ["Africa has many ethnic groups.", "Migration has push and pull reasons.", "Settlement patterns vary with environment."],
    },
    subtopics: [
            {
        subtopicId: "origin-ethnic-groups",
        title: "1. Origin of different ethnic groups",
        modules: [
          {
            moduleId: "ethnic-group-meaning-respect",
            title: "Meaning of an Ethnic Group",
            bigIdea: "An ethnic group is a group of people who share identity, culture or history, and all cultures deserve respect.",
            learnIt: [
              "An ethnic group is a group of people who share things such as language, culture, ancestry, values, religion, place of origin or a sense of belonging.",
              "NCDC expects learners to show respect for their own culture and other cultures. This means we study ethnic groups to understand people, not to rank or insult them.",
              "Africa has many ethnic groups because people have different histories, languages, migrations and settlement patterns.",
              "A good P7 answer should be respectful. Avoid words that make one group seem better or worse than another. The key value is unity in diversity."
            ],
            tryThis: {
              question: "Which statement best describes an ethnic group?",
              choices: ["People who share culture, language or origin", "A river in Africa", "A climate region only", "A capital city"],
              correct: 0,
              explanation: "An ethnic group may share culture, language, origin, history, values or a sense of belonging."
            }
          },
          {
            moduleId: "basis-of-ethnic-identity",
            title: "How Ethnic Groups are Identified",
            bigIdea: "Ethnic identity may be connected to language, culture, ancestry, values, religion, nationality and place.",
            learnIt: [
              "The NCDC background explains that people may be grouped by geographical location, language, culture, ancestry, sense of belonging, religion, values and nationality.",
              "Language is one common way people identify ethnic groups. Culture is another: it includes ways of dressing, food, music, marriage customs, ceremonies and beliefs.",
              "Ancestry and origin also matter because people may trace where their ancestors came from and where they later settled.",
              "Do not assume everyone in an ethnic group is exactly the same. People can share identity but still have different personal experiences, religions, occupations and ways of life."
            ],
            tryThis: {
              question: "Which factor can help identify an ethnic group?",
              choices: ["Language", "Longitude time only", "Ocean current only", "A mountain height only"],
              correct: 0,
              explanation: "Language is one of the factors that can identify an ethnic group."
            }
          },
          {
            moduleId: "major-ethnic-groups-careful-language",
            title: "Major Ethnic Group Terms in the Source",
            bigIdea: "Some older source terms need careful and respectful explanation for modern learners.",
            learnIt: [
              "The NCDC source names groups such as Berbers, Bantu, Cushites, Arabs, Hamites and Semites. Some older textbooks also used broad racial terms that should be handled carefully and respectfully.",
              "For learner use, focus on respectful ethnic and cultural terms. Bantu, Cushites, Arabs/Semites and Berbers are examples learners may meet in P7 Social Studies notes.",
              "The main learning point is that Africa's people have different origins, languages, cultures and settlement histories. These differences should be appreciated, not used for discrimination.",
              "Teacher review is still needed before premium-final status for detailed tribe-to-ethnic-group matching because some source terms are old and sensitive."
            ],
            tryThis: {
              question: "What value should guide our study of ethnic groups?",
              choices: ["Respect for all cultures", "Mocking other groups", "Ignoring unity", "Saying one group is better"],
              correct: 0,
              explanation: "NCDC emphasises respect, appreciation, love and cooperation when studying cultures."
            }
          }
        ]
      },
            {
        subtopicId: "movements-ethnic-groups",
        title: "2. Movements of different ethnic groups into Africa",
        modules: [
          {
            moduleId: "migration-origin-settlement",
            title: "Migration, Origin and Settlement",
            bigIdea: "Migration explains how people moved from places of origin and later settled in new areas.",
            learnIt: [
              "Migration is the movement of people from one place to another. In this topic, learners study movements of different ethnic groups and where they eventually settled.",
              "Origin means where a group is believed to have come from. Settlement means the place or pattern where people finally live after movement.",
              "A migration answer should separate three ideas: origin, movement and settlement. Example: people came from an origin, moved along routes, and settled in new areas.",
              "NCDC also asks learners to compare ancient migrations with current rural-urban, rural-rural and urban-rural migration. This helps learners see that people still move today."
            ],
            tryThis: {
              question: "What does migration mean?",
              choices: ["Movement of people from one place to another", "Growth of vegetation only", "A mountain formation process", "A capital city"],
              correct: 0,
              explanation: "Migration means movement of people from one place to another."
            }
          },
          {
            moduleId: "tracing-movements-map-practice",
            title: "Tracing Movements on a Map",
            bigIdea: "NCDC expects learners to locate migration routes and settlement patterns of peoples of Africa.",
            learnIt: [
              "To trace movement, use arrows on a map. The arrow should show the direction from the origin towards the settlement area.",
              "Do not invent exact routes if your source or teacher has not given them. Use teacher-approved maps, wall maps or atlases when drawing migration routes.",
              "When describing movement, use simple direction words such as north, south, east, west, north-east or south-west.",
              "A good migration map should have a title, arrows, labelled groups and settlement areas. Keep it simple and readable."
            ],
            tryThis: {
              question: "What should arrows on a migration map show?",
              choices: ["Direction of movement", "Only rainfall", "Only capital cities", "Only ocean names"],
              correct: 0,
              explanation: "Arrows on a migration map show the direction people moved."
            }
          },
          {
            moduleId: "ancient-and-current-migration",
            title: "Ancient and Current Migration",
            bigIdea: "People migrated in the past and still migrate today, but reasons and routes may differ.",
            learnIt: [
              "Ancient migrations involved ethnic groups moving from their origins and settling in new areas over long periods of time.",
              "Current migration may be rural-urban, rural-rural or urban-rural. Rural-urban migration means people move from villages to towns. Rural-rural means movement from one rural area to another. Urban-rural means movement from towns to rural areas.",
              "Comparing ancient and current migration helps learners understand continuity and change: people move because of land, work, security, climate, family and opportunities.",
              "In this subtopic, do not yet list all reasons in detail. The next subtopic will handle reasons for migration and settlement more fully."
            ],
            tryThis: {
              question: "What is rural-urban migration?",
              choices: ["Movement from villages to towns", "Movement from a river to a lake", "Movement of clouds only", "Movement of longitude lines"],
              correct: 0,
              explanation: "Rural-urban migration is movement of people from rural areas to towns or cities."
            }
          }
        ]
      },
      {
        subtopicId: "settlement-tribes",
        title: "3. Settlement patterns and tribes",
        modules: [
          {
            moduleId: "settlement-patterns-clean",
            title: "Settlement patterns and reasons",
            bigIdea: "Settlement patterns show how people arrange homes and communities in an area.",
            learnIt: [
              "### Settlement Patterns and Tribes",
              "<strong class=\"kw\">Settlement pattern</strong>:",
              "Is the way people arrange their homes and communities in an area.",
              "<strong class=\"kw\">Types:</strong>",
              "* <strong class=\"kw\">Dispersed settlement</strong> has homes spread apart.",
              "* <strong class=\"kw\">Linear settlement</strong> has homes arranged along a road, river or coast.",
              "* <strong class=\"kw\">Nucleated settlement</strong> has homes close together.",
              "<strong class=\"kw\">Factors:</strong>",
              "* <strong class=\"kw\">Water supply</strong> attracts settlement.",
              "* <strong class=\"kw\">Fertile soils</strong> attract farmers.",
              "* <strong class=\"kw\">Security</strong> encourages people to live close together.",
              "* <strong class=\"kw\">Trade routes</strong> encourage towns to grow."
            ],
            tryThis: {
              question: "Which factor affects settlement patterns?",
              choices: ["Water supply", "Book colour", "Answer letter", "Bell sound only"],
              correct: 0,
              explanation: "People often settle near reliable water sources."
            }
          }
        ]
      },
      {
        subtopicId: "problems-effects-migration",
        title: "4. Problems and effects of ethnic migrations",
        modules: [
          {
            moduleId: "migration-problems-effects",
            title: "Problems and effects of migration",
            bigIdea: "Migrants faced dangers during movement, and their settlement changed population, culture and land use.",
            learnIt: [
              "### Problems and Effects of Ethnic Migrations",
              "<strong class=\"kw\">Problems:</strong>",
              "* <strong class=\"kw\">Resistance</strong> came from people already living in an area.",
              "* <strong class=\"kw\">Difficult terrain</strong> slowed movement.",
              "* <strong class=\"kw\">Wild animals</strong> attacked some migrants.",
              "* <strong class=\"kw\">Diseases</strong> affected people and livestock.",
              "* <strong class=\"kw\">Food and water shortage</strong> made journeys dangerous.",
              "* <strong class=\"kw\">Harsh climate</strong> made settlement difficult.",
              "<strong class=\"kw\">Effects:</strong>",
              "* <strong class=\"kw\">Population increase</strong> occurred in areas where migrants settled.",
              "* <strong class=\"kw\">Cultural change</strong> occurred through new languages and customs.",
              "* <strong class=\"kw\">Intermarriage</strong> created mixed communities.",
              "* <strong class=\"kw\">Conflicts</strong> sometimes developed over land and resources.",
              "* <strong class=\"kw\">New settlements</strong> grew into villages, towns and kingdoms."
            ],
            tryThis: {
              question: "Which is a problem faced during migration?",
              choices: ["Food and water shortage", "Too many latitudes", "Solar eclipse only", "Good roads everywhere"],
              correct: 0,
              explanation: "Food and water shortage made migration difficult."
            }
          }
        ]
      },
      {
        subtopicId: "premium-people-settlement-reasoning",
        title: "Premium Exam Practice: Migration and Settlement Reasoning",
        modules: [
          {
            moduleId: "migration-cause-effect-clean",
            title: "Explaining Migration and Settlement",
            bigIdea: "Strong migration answers separate causes, problems and effects.",
            learnIt: [
              "### Premium Exam Practice: Migration and Settlement Reasoning",
              "<strong class=\"kw\">Migration reasoning answer</strong>:",
              "Is an answer that clearly separates why people moved, problems they faced and effects of their settlement.",
              "<strong class=\"kw\">Types:</strong>",
              "* <strong class=\"kw\">Push factor</strong> forces people to leave a place.",
              "* <strong class=\"kw\">Pull factor</strong> attracts people to a new place.",
              "* <strong class=\"kw\">Effect</strong> is a result after people move and settle.",
              "<strong class=\"kw\">Examples:</strong>",
              "* <strong class=\"kw\">War</strong> is a push factor.",
              "* <strong class=\"kw\">Fertile land</strong> is a pull factor.",
              "* <strong class=\"kw\">Cultural exchange</strong> is an effect of migration.",
              "<strong class=\"kw\">UNEB Exam Trap:</strong>",
              "* <strong class=\"kw\">Cause</strong> explains why people moved.",
              "* <strong class=\"kw\">Effect</strong> explains what happened after movement."
            ],
            tryThis: {
              question: "Which is a pull factor?",
              choices: ["Fertile land", "Famine", "War", "Disease outbreak"],
              correct: 0,
              explanation: "Fertile land attracts people to settle in an area."
            }
          }
        ]
      }
    ],
    quiz: [
      { q: "An ethnic group commonly shares:", choices: ["Culture and origin", "Only shoe size", "Only rainfall", "Only road signs"], correct: 0, why: "Ethnic groups share culture, language, origin or history." },
      { q: "Migration means:", choices: ["Movement of people from one place to another", "Growth of grass", "Building a dam", "Drawing a map only"], correct: 0, why: "Migration is movement of people." },
      { q: "Which is a reason for migration?", choices: ["Search for land", "Too many latitudes", "A mirror image", "Short circuit"], correct: 0, why: "People migrate to find land." },
      { q: "Which factor affects settlement patterns?", choices: ["Water supply", "Book colour", "Answer letter", "Bell sound only"], correct: 0, why: "People settle near reliable water." },
    ],
  },
  {
    id: "foreign-influence-africa",
    themeId: "sst-living-together-africa",
    themeName: "Living Together in Africa",
    title: "Foreign influence in Africa",
    estMinutes: 20,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "Why this matters: Foreign traders, explorers, missionaries, colonialists and settlers affected Africa politically, economically and socially. P7 learners need to understand causes, methods and effects.",
      learningObjectives: [
        "Identify foreign groups that came to Africa.",
        "Explain reasons for the coming of explorers, traders, missionaries and colonialists.",
        "Describe the scramble and partition of Africa.",
        "Explain effects of foreign influence and methods of colonial rule.",
      ],
      whatYouNeedToKnow: [
        "Foreign groups that came to Africa included Arab traders, Persian and Indian traders, European explorers, missionaries, traders, colonialists and settlers. They did not all come at the same time or for the same reason.",
        "Explorers came for curiosity, fame, mapping, search for trade routes, sources of rivers and information about Africa. Examples often studied include David Livingstone, Mungo Park, Bartholomew Diaz and the Landers. Explorers faced diseases, wild animals, difficult terrain, language barriers and resistance.",
        "Traders came for goods such as gold, ivory, spices and later raw materials and markets. The Trans-Atlantic/Triangular trade connected Europe, Africa and the Americas and caused great suffering through slave trade and exploitation.",
        "Missionaries came to spread Christianity, build schools and hospitals, translate religious materials and campaign against some practices such as slave trade. Their work also prepared the way for deeper European influence in some places.",
        "Colonialists came to control land, labour, raw materials, markets and strategic areas. The scramble and partition of Africa refers to European powers rushing to claim and divide African territories, especially after the Berlin Conference of 1884–1885.",
        "Colonial rule was established through treaties, force, divide and rule, company rule and taking advantage of existing conflicts. Colonies were administered using methods such as direct rule, indirect rule and assimilation.",
        "Foreign influence had political effects such as loss of independence, economic effects such as exploitation and infrastructure development, and social effects such as formal education, religion, new languages, intermarriages and cultural change. Africans reacted through cooperation, resistance, protest and later nationalism.",
      ],
      worked: {
        problem: "Give one political, one economic and one social effect of foreign influence in Africa.",
        steps: [
          "Step 1. Political: Africans lost independence in many places.",
          "Step 2. Economic: raw materials were exploited, but roads and railways were also built.",
          "Step 3. Social: Christianity, Islam in some areas, formal education and foreign languages spread.",
        ],
        answer: "Answer: Political — loss of independence. Economic — exploitation of raw materials. Social — formal education and foreign languages spread.",
      },
      commonMistakes: [
        "Thinking all foreigners came for the same reason.",
        "Forgetting the difference between explorers, missionaries, traders and colonialists.",
        "Listing only positive or only negative effects.",
        "Confusing direct rule, indirect rule and assimilation.",
      ],
      tryThis: {
        question: "What was the scramble for Africa?",
        choices: ["European rush to claim African territories", "A football game", "A climate region", "A type of vegetation"],
        correct: 0,
        explanation: "The scramble for Africa was the European rush to claim and control African territories.",
      },
      writingTasks: [
        {
          title: "History source task: Foreign groups in Africa",
          prompt: "Explain how one foreign group influenced Africa and give both positive and negative effects where appropriate.",
          planningSteps: [
            "Choose one group: traders, explorers, missionaries, colonialists or settlers.",
            "State why they came to Africa.",
            "Explain at least two effects of their coming.",
            "Separate facts from opinions and avoid one-sided answers.",
          ],
          checklist: [
            "The chosen foreign group is clearly named.",
            "Reasons for coming are correct.",
            "Effects are specific and balanced.",
            "Historical terms such as colonialism, trade or missionary work are used correctly.",
          ],
          modelOpening: "Missionaries came to Africa mainly to spread Christianity. They built schools and hospitals, but their coming also helped prepare the way for colonial influence in some areas.",
        },
      ],
      recap: [
        "Different foreign groups came to Africa for different reasons.",
        "Colonialism led to loss of independence.",
        "Foreign influence had political, economic and social effects.",
        "Africans reacted to colonial rule in different ways.",
      ],
    },
    subtopics: [
{
        subtopicId: "foreign-groups-africa",
        title: "1. Foreign groups in Africa",
        modules: [
          {
            moduleId: "who-came-to-africa",
            title: "Who came to Africa?",
            bigIdea: "Different foreign groups came to Africa at different times for different reasons. The main groups were traders, explorers, missionaries, colonialists and settlers.",
            learnIt: [
              "Arab traders came across the Indian Ocean and the Sahara, bringing goods, Islam and new trading networks.",
              "Persian and Indian traders also traded along the East African coast.",
              "European explorers travelled into Africa to map land, find rivers and gather information.",
              "European missionaries came to spread Christianity and build schools and hospitals.",
              "European traders came for gold, ivory, spices, slaves and later raw materials.",
              "European colonialists and settlers came to control land, labour, markets and resources."
            ],
            visual: {
              kind: "timeline",
              title: "Foreign groups in Africa",
              description: "Show a simple timeline: Arab and Indian traders → European explorers → missionaries → traders → colonialists and settlers."
            },
            tryThis: {
              question: "Which group came mainly to spread Christianity?",
              choices: ["Missionaries", "Miners", "Colonial soldiers", "Settler farmers"],
              correct: 0,
              explanation: "Missionaries came to Africa mainly to spread Christianity and build mission stations."
            }
          }
        ]
      },
{
        subtopicId: "european-explorers",
        title: "2. European explorers in Africa",
        modules: [
          {
            moduleId: "reasons-explorers",
            title: "Reasons for the coming of European explorers",
            bigIdea: "European explorers came to Africa for curiosity, fame, mapping, finding trade routes, discovering sources of rivers and collecting information about the continent.",
            learnIt: [
              "Explorers wanted to map African rivers, lakes, mountains and interior lands.",
              "They searched for the sources of major rivers such as the Nile, Niger and Congo.",
              "They hoped to find new trade routes and resources such as gold and ivory.",
              "Some explorers wanted fame, scientific knowledge or to spread Christianity.",
              "Examples often studied include David Livingstone, Mungo Park, Bartholomew Diaz and the Lander brothers."
            ],
            visual: {
              kind: "cards",
              title: "Reasons explorers came to Africa",
              description: "Show cards for mapping, sources of rivers, trade routes, fame and scientific knowledge."
            }
          },
          {
            moduleId: "problems-effects-explorers",
            title: "Problems and effects of European explorers",
            bigIdea: "Explorers faced many dangers, and their journeys opened Africa to later foreign influence.",
            learnIt: [
              "Problems included tropical diseases such as malaria, wild animals, difficult terrain, harsh climate, lack of food and water, language barriers and resistance from local people.",
              "Explorers produced maps and reports that encouraged more Europeans to come.",
              "Their work helped missionaries, traders and colonialists follow them.",
              "Some explorers also spoke against the slave trade and promoted Christianity and commerce."
            ],
            workedExample: {
              question: "Give two problems faced by European explorers in Africa.",
              steps: [
                "Explorers faced tropical diseases such as malaria.",
                "They also faced difficult terrain, wild animals and lack of supplies."
              ],
              answer: "European explorers faced diseases, wild animals, difficult terrain, harsh climate and shortages of food and water."
            },
            examTip: "When writing about explorers, mention their reasons for coming, the problems they faced and their effects on later foreign influence."
          }
        ]
      },
{
        subtopicId: "traders-triangular-trade",
        title: "3. European traders and the Triangular trade",
        modules: [
          {
            moduleId: "reasons-traders",
            title: "Early Traders and Trans-Saharan Trade",
            bigIdea: "Foreign trade routes linked Africa to the Arab world across the Sahara.",
            learnIt: [
              "Early Arab traders arrived at the East African coast by dhows blown by monsoon winds, introducing Islam, Arabic architecture, and Swahili culture.",
              "Trans-Saharan Trade: connected West Africa across the Sahara Desert to North Africa using camel caravans. Africans traded gold, ivory, and kola nuts in exchange for North African salt, silk, and horses."
            ]
          },
          {
            moduleId: "triangular-trade",
            imageUrl: "/images/social-studies/triangular-trade-map.png",
            imageCaption: "Trans-Atlantic Triangular Trade routes linking Europe, West Africa, and the Americas.",
            title: "The Triangular trade",
            bigIdea: "The Trans-Atlantic or Triangular trade linked Europe, Africa and the Americas. It involved the exchange of manufactured goods, enslaved people and raw materials such as sugar, tobacco and cotton.",
            learnIt: [
              "The Triangular trade had three legs: Europe to Africa with manufactured goods, Africa to the Americas with enslaved people, and the Americas to Europe with raw materials.",
              "Enslaved Africans were taken to work on plantations in the Americas.",
              "The trade caused great suffering, population loss and social disruption in Africa.",
              "It also created wealth for European traders and plantation owners.",
              "Some African rulers and merchants were involved in the slave trade."
            ],
            visual: {
              kind: "flow",
              title: "The Triangular trade",
              description: "Show a triangle connecting Europe, Africa and the Americas with arrows: Europe → Africa (manufactured goods), Africa → Americas (enslaved people), Americas → Europe (raw materials)."
            },
            tryThis: {
              question: "The Triangular trade connected which three continents?",
              choices: ["Europe, Africa and the Americas", "Asia, Africa and Australia", "Europe, Asia and Antarctica", "Africa, Australia and South America"],
              correct: 0,
              explanation: "The Triangular trade connected Europe, Africa and the Americas."
            }
          }
        ]
      },
{
        subtopicId: "colonialists-scramble",
        title: "4. Colonialists and the scramble for Africa",
        modules: [
          {
            moduleId: "reasons-colonialism",
            title: "Reasons for European colonialism",
            bigIdea: "European colonialists came to control African land, labour, raw materials, markets and strategic areas. They wanted political power and economic profit.",
            learnIt: [
              "Colonialists wanted raw materials such as minerals, rubber, cotton and timber for European industries.",
              "They wanted markets where they could sell manufactured goods.",
              "They wanted cheap labour to work on plantations, mines and railways.",
              "They wanted strategic control of coasts, rivers and trade routes.",
              "Some colonialists also wanted to spread Christianity and European culture."
            ]
          },
          {
            moduleId: "scramble-partition",
            imageUrl: "/images/social-studies/partition-of-africa-1884.png",
            imageCaption: "Map illustrating European colonial partition of Africa following the 1884 Berlin Conference.",
            title: "Scramble and partition of Africa",
            bigIdea: "The scramble for Africa was the rapid European rush to claim African territories. The partition divided Africa among European powers, especially after the Berlin Conference of 1884–1885.",
            learnIt: [
              "European powers such as Britain, France, Germany, Portugal, Belgium, Italy and Spain competed for African territories.",
              "The Berlin Conference of 1884–1885 set rules for claiming African land.",
              "African leaders were not invited to the conference.",
              "By 1914, almost the whole of Africa was under European colonial rule, except Ethiopia and Liberia.",
              "Colonial rule was established through treaties, military force, divide and rule, and company rule."
            ],
            visual: {
              kind: "map",
              title: "Partition of Africa",
              description: "Show a simple map of Africa around 1914 with territories coloured by colonial power: British, French, Portuguese, Belgian, German, Italian and Spanish."
            },
            tryThis: {
              question: "The Berlin Conference of 1884–1885 is linked to:",
              choices: ["Partition of Africa", "Independence of Ghana", "Formation of OAU", "Discovery of oil"],
              correct: 0,
              explanation: "The Berlin Conference set rules for European powers to claim and partition African territories."
            }
          },
          {
            moduleId: "methods-acquiring-colonies",
            title: "Methods of acquiring colonies",
            bigIdea: "European powers used different methods to take control of African territories. These included treaties, force, divide and rule, and company rule.",
            learnIt: [
              "Treaties: some African leaders signed agreements, but the terms were often misunderstood or unfair.",
              "Military force: European armies used superior weapons to defeat African resistance.",
              "Divide and rule: colonialists took advantage of conflicts between African groups.",
              "Company rule: companies such as the British South Africa Company and the Imperial British East Africa Company ruled territories on behalf of European governments.",
              "Some African groups resisted, while others cooperated or were forced to accept colonial rule."
            ]
          }
        ]
      },
{
        subtopicId: "settlers-administration",
        title: "5. Settlers, colonial administration and African reactions",
        modules: [
          {
            moduleId: "european-settlers",
            title: "European settlers in South Africa and Zimbabwe",
            bigIdea: "European settlers came to live permanently in parts of Africa, especially South Africa and Zimbabwe. They took land and established farming, mining and political control.",
            learnIt: [
              "In South Africa, Dutch settlers called Boers or Afrikaners arrived from the 1600s and later British settlers also came.",
              "The Great Trek was the movement of Boers inland to escape British control and find new land.",
              "Settlers took land from African people, leading to wars and displacement.",
              "In Zimbabwe, British settlers under the British South Africa Company took control of land and resources.",
              "Settler colonies often denied Africans political rights and access to good land."
            ],
            visual: {
              kind: "map",
              title: "The Great Trek",
              description: "Show a simple map of South Africa with arrows showing Boer movement inland from the Cape Colony during the Great Trek."
            }
          },
          {
            moduleId: "methods-colonial-administration",
            title: "Colonial Administration Systems",
            bigIdea: "European powers administered colonies using direct rule, indirect rule, or paternalism.",
            learnIt: [
              "Indirect Rule: used by Britain (e.g., in Buganda kingdom and Northern Nigeria) where colonial governors ruled through existing traditional African kings and chiefs.",
              "Direct Rule and Assimilation: used by France (e.g., in Senegal) attempting to transform Africans into French citizens adopting French culture, language, and laws.",
              "Paternalism: used by Belgium in the Congo, treating African subjects like children incapable of self-governance or political rights."
            ],
            workedExample: {
              question: "Differentiate direct rule and indirect rule.",
              steps: [
                "Direct rule uses colonial officials to govern the colony.",
                "Indirect rule uses traditional chiefs and local leaders under colonial supervision."
              ],
              answer: "Direct rule governs through colonial officials, while indirect rule governs through traditional chiefs under colonial supervision."
            }
          }
        ]
      },
{
        subtopicId: "effects-foreign-influence",
        title: "6. Effects of foreign influence",
        modules: [
          {
            moduleId: "effects-foreign-influence",
            title: "Effects of foreign influence",
            bigIdea: "Foreign influence had political, economic, social and cultural effects. Learners must give balanced answers that include both positive and negative effects.",
            learnIt: [
              "Political effects: loss of independence, creation of colonial boundaries, denial of political rights, and later growth of nationalism.",
              "Economic effects: exploitation of raw materials, introduction of cash crops, building of roads and railways, and creation of wage labour.",
              "Social effects: spread of Christianity and Islam in some areas, formal education, new languages, Western medicine, and changes in family life.",
              "Cultural effects: new dress, music, religions, and sometimes loss of traditional practices.",
              "Africans reacted through resistance, cooperation, protest, formation of political parties and later nationalism."
            ],
            visual: {
              kind: "comparison",
              title: "Effects of foreign influence",
              description: "Show two columns: Positive effects such as schools, hospitals, roads and new crops; Negative effects such as loss of independence, land alienation, forced labour and slave trade."
            },
            examTip: "For effects questions, always give a balanced answer with both positive and negative effects where possible."
          }
        ]
      },
{
        subtopicId: "premium-foreign-influence-analysis",
        title: "Exam Summary: Foreign Influence — High-Yield UNEB Points",
        modules: [
          {
            moduleId: "foreign-influence-exam-summary",
            title: "15 Must-Know UNEB Facts about Foreign Influence in Africa",
            bigIdea: "Master these high-frequency exam facts about explorers, missionaries, traders, colonialists, and the scramble for Africa.",
            learnIt: [
              "1. FOREIGN INFLUENCE = the impact of non-African people and powers on Africa’s politics, economy, society, and culture.",
              "2. Early foreign traders: Arabs traded with East Africa (slaves, ivory, gold) from about the 7th century. Indians also traded along the East African coast.",
              "3. European EXPLORERS came for curiosity, fame, mapping, and finding trade routes. Examples: David Livingstone (traced the Zambezi, ‘discovered’ Victoria Falls), Mungo Park (River Niger), Bartholomew Diaz (Cape of Good Hope, 1488).",
              "4. MISSIONARIES came to spread Christianity, build schools and hospitals, translate the Bible, and campaign against the slave trade. They paved the way for deeper European influence.",
              "5. TRADERS and CHARTERED COMPANIES: IBEACo (Imperial British East Africa Company) in Kenya/Uganda; GEACo (German East Africa Company) in Tanganyika. They traded and later administered territories.",
              "6. SCRAMBLE FOR AFRICA = the rapid rush by European powers (Britain, France, Germany, Portugal, Belgium, Italy, Spain) to claim African territories, especially after 1880.",
              "7. PARTITION OF AFRICA = the actual division of Africa among European powers. Formalized at the BERLIN CONFERENCE of 1884–1885, called by Otto von Bismarck of Germany.",
              "8. NO African leader was invited to the Berlin Conference. By 1914, only Ethiopia and Liberia remained independent.",
              "9. Methods of acquiring colonies: Treaties (often unfair), Military force (superior weapons), Divide and rule (exploiting African conflicts), Company rule (IBEACo, GEACo).",
              "10. Colonial administration systems: Indirect Rule (Britain — used local chiefs, e.g., Buganda); Direct Rule/Assimilation (France — made Africans French citizens); Paternalism (Belgium in Congo).",
              "11. Effects of foreign influence: Political (loss of independence, artificial borders), Economic (raw material exploitation, cash crops, infrastructure), Social (schools, hospitals, new religions, new languages).",
              "12. African reactions: Active RESISTANCE (Maji Maji rebellion in Tanganyika led by Kinjikitile Ngwale; Mau Mau in Kenya led by Dedan Kimathi; Omukama Kabalega of Bunyoro); COLLABORATION (Apollo Kaggwa of Buganda, Semei Kakungulu).",
              "13. TRANS-ATLANTIC SLAVE TRADE (Triangular Trade): Europe → Africa (manufactured goods), Africa → Americas (enslaved Africans), Americas → Europe (raw materials: sugar, cotton, tobacco). Caused massive suffering and depopulation.",
              "14. The Great Trek: Dutch Boers moved inland from the Cape to escape British rule (1830s–1840s), founding the Orange Free State and Transvaal. Led to conflict with African groups like the Zulu.",
              "15. Positive legacies: Formal education, written languages, modern medicine, roads and railways. Negative legacies: Artificial borders causing modern conflicts, loss of land, cultural disruption, economic dependency."
            ],
            tryThis: {
              question: "The Berlin Conference of 1884–1885 was called by which European leader?",
              choices: ["Otto von Bismarck (Germany)", "Queen Victoria (Britain)", "King Leopold II (Belgium)", "Napoleon (France)"],
              correct: 0,
              explanation: "Otto von Bismarck, the Chancellor of Germany, called the Berlin Conference where European powers divided Africa."
            }
          }
        ]
      }
    ],
    quiz: [
      { q: "Which group of foreigners came to Africa mainly to spread Christianity?", choices: ["Missionaries", "Traders", "Explorers", "Colonialists"], correct: 0, why: "Missionaries came to spread Christianity and built schools/hospitals." },
      { q: "The partition of Africa was formalized during which conference?", choices: ["Berlin Conference", "Addis Ababa Conference", "Durban Conference", "London Conference"], correct: 0, why: "The Berlin Conference of 1884–1885 formalized the division of Africa." },
      { q: "Which system of colonial rule was used by the British in Buganda?", choices: ["Indirect rule", "Direct rule", "Assimilation", "Paternalism"], correct: 0, why: "Britain used indirect rule, governing through existing local chiefs and kings." },
      { q: "Which of the following was a negative effect of the Triangular Trade?", choices: ["Depopulation and suffering in Africa", "Creation of new railways", "Spread of modern medicine", "Growth of democratic institutions"], correct: 0, why: "The slave trade caused severe depopulation and suffering in Africa." },
      { q: "Which African country successfully resisted Italian colonisation in 1896?", choices: ["Ethiopia", "Liberia", "Kenya", "Ghana"], correct: 0, why: "Ethiopia defeated the Italians at the Battle of Adwa in 1896." },
    ],
  },
  {
    id: "nationalism-road-independence",
    themeId: "sst-living-together-africa",
    themeName: "Living Together in Africa",
    title: "Nationalism and the road to independence",
    estMinutes: 20,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "Nationalism helped Africans organise to regain independence. Pan-Africanism drove continental unity.",
      learningObjectives: ["Explain nationalism, patriotism and Pan-Africanism.", "Identify key nationalists.", "Describe methods used for independence."],
      whatYouNeedToKnow: [
        "Nationalism = love and loyalty to one's nation, desire for self-rule. Pan-Africanism = unity of African people continent-wide.",
        "Key nationalists: Kwame Nkrumah (Ghana, 1957), Jomo Kenyatta (Kenya, 1963), Julius Nyerere (Tanzania, 1961), Milton Obote (Uganda, 1962), Nelson Mandela (South Africa).",
        "Methods: Political parties, newspapers, strikes, boycotts, demonstrations, negotiations, armed struggle where peaceful methods failed.",
      ],
      worked: { problem: "Differentiate nationalism and Pan-Africanism.", steps: ["Nationalism = love for one's nation and self-rule.", "Pan-Africanism = unity of African people continent-wide.", "Both helped independence."], answer: "Nationalism is loyalty to one's nation; Pan-Africanism is unity of African people." },
      recap: ["Nationalism drove self-rule.", "Pan-Africanism promoted unity.", "Methods included parties, strikes, and negotiations."],
    },
    subtopics: [
{
        subtopicId: "meaning-nationalism-panafricanism",
        title: "1. Meaning of nationalism, Pan-Africanism and patriotism",
        modules: [
          {
            moduleId: "nationalism-patriotism",
            title: "Nationalism and patriotism",
            bigIdea: "Nationalism is love for one's nation and the desire for self-rule. Patriotism is love for one's country and willingness to serve it responsibly.",
            learnIt: [
              "Nationalism is love for and loyalty to one's nation, often shown through the desire for self-rule and independence.",
              "A nationalist is a person who works for the interests or independence of a nation.",
              "Patriotism is love for one's country and willingness to serve it responsibly, pay taxes, obey laws and protect national values.",
              "Nationalism grew in Africa because people wanted freedom from colonial control, fair treatment, land rights and control of their own countries.",
              "Patriotism continues after independence – citizens are expected to work hard, respect the constitution and promote unity."
            ],
            visual: {
              kind: "comparison",
              title: "Nationalism vs Patriotism",
              description: "Show two cards: Nationalism – love for one's nation and desire for self-rule; Patriotism – love for one's country and willingness to serve it responsibly."
            },
            tryThis: {
              question: "Nationalism means:",
              choices: ["Love for and loyalty to one's nation", "A type of lake", "A climate zone", "A vegetation belt"],
              correct: 0,
              explanation: "Nationalism is love for and loyalty to one's nation, often linked to self-rule."
            }
          },
          {
            moduleId: "panafricanism-meaning",
            title: "Pan-Africanism",
            bigIdea: "Pan-Africanism is the idea that African people should unite, support one another and work together for freedom and development.",
            learnIt: [
              "Pan-Africanism is the idea that African people should unite and support one another.",
              "A Pan-Africanist is a person who promotes African unity and cooperation.",
              "Pan-Africanists encouraged African pride, unity and resistance to colonial domination.",
              "Pan-Africanism helped spread nationalist ideas through conferences, newspapers, books and meetings.",
              "Both nationalism and Pan-Africanism helped the struggle for independence in Africa."
            ],
            workedExample: {
              question: "Differentiate nationalism and Pan-Africanism.",
              steps: [
                "Nationalism focuses on love for and self-rule of a nation.",
                "Pan-Africanism focuses on unity and cooperation of African people across the continent.",
                "Both helped the struggle for independence."
              ],
              answer: "Nationalism is loyalty to one's nation and desire for self-rule; Pan-Africanism is the unity and cooperation of African people."
            },
            examTip: "When asked to differentiate, give a clear meaning for each term and state how they are linked."
          }
        ]
      },
{
        subtopicId: "panafricanists-nationalists-work",
        title: "2. Work of Pan-Africanists and nationalists",
        modules: [
          {
            moduleId: "work-panafricanists-nationalists",
            title: "African Reactions and Key Nationalists",
            bigIdea: "Africans reacted to colonialism through active armed resistance or collaboration before forming nationalist movements.",
            learnIt: [
              "Active armed resistance against colonial rule: Mau Mau rebellion in Kenya led by Dedan Kimathi fighting British settlers for land and freedom; Maji Maji rebellion (1905-1907) in Tanganyika led by Kinjikitile Ngwale against German cotton forced labor; and Omukama Kabalega of Bunyoro resisting British invasion.",
              "Collaborators: African leaders who cooperated with colonial powers for military protection or territorial expansion, such as Apollo Kaggwa of Buganda and Semei Kakungulu.",
              "Key African Nationalists who led the road to independence: Kwame Nkrumah (first president of Ghana 1957); Julius Nyerere (led Tanganyika to independence 1961); Jomo Kenyatta (first president of Kenya 1963); Nelson Mandela (anti-apartheid icon in South Africa); and Ignatius Kangave Musaazi (founder of UNC in Uganda)."
            ],
            visual: {
              kind: "timeline",
              title: "Work of nationalists",
              description: "Show a simple timeline: forming political parties → writing newspapers → petitions and protests → negotiations → independence."
            }
          },
          {
            moduleId: "leading-panafricanists",
            title: "Leading Pan-Africanists who fought for Africa's independence",
            bigIdea: "Leading African nationalists and Pan-Africanists included Kwame Nkrumah, Jomo Kenyatta, Julius Nyerere, Patrice Lumumba and Nelson Mandela, among others.",
            learnIt: [
              "Kwame Nkrumah – Ghana. Helped organise people through political action and demanded self-rule from British colonial rule.",
              "Jomo Kenyatta – Kenya. Played a key role in Kenya's independence movement.",
              "Julius Nyerere – Tanzania. Promoted African unity and socialism after independence.",
              "Patrice Lumumba – Democratic Republic of Congo. Fought for Congo's independence from Belgium.",
              "Nelson Mandela – South Africa. Fought against apartheid and for equal rights for all South Africans.",
              "Learners should connect leaders with the wider struggle for self-rule, not memorise names only."
            ],
            tryThis: {
              question: "Which country is Kwame Nkrumah associated with?",
              choices: ["Ghana", "Kenya", "South Africa", "Congo"],
              correct: 0,
              explanation: "Kwame Nkrumah was a nationalist leader in Ghana."
            },
            examTip: "When writing about a nationalist, name the country, the method used and one challenge faced."
          }
        ]
      },
{
        subtopicId: "countries-not-colonised",
        title: "3. Countries that were not colonised and reasons for maintaining independence",
        modules: [
          {
            moduleId: "countries-not-colonised-africa",
            title: "Countries that were not colonised in Africa",
            bigIdea: "Ethiopia and Liberia are commonly studied as African countries that were not colonised in the same way as most African states.",
            learnIt: [
              "Ethiopia resisted Italian invasion, especially at the Battle of Adwa in 1896.",
              "Ethiopia had a strong army, united leadership and difficult mountainous terrain that helped defend the country.",
              "Liberia had a special history linked to freed formerly enslaved people from America who settled there in the 1800s.",
              "Liberia declared independence in 1847 and maintained close ties with the United States.",
              "These two countries are important case studies in the NCDC syllabus."
            ],
            visual: {
              kind: "map",
              title: "Ethiopia and Liberia",
              description: "Show a simple map of Africa highlighting Ethiopia in the Horn of Africa and Liberia in West Africa, with a note: 'Maintained independence'."
            },
            tryThis: {
              question: "Which country is commonly studied as having resisted colonisation by Italy?",
              choices: ["Ethiopia", "Kenya", "Ghana", "Nigeria"],
              correct: 0,
              explanation: "Ethiopia is known for resisting Italian colonisation, especially at Adwa."
            }
          },
          {
            moduleId: "reasons-maintaining-independence",
            title: "Reasons for maintaining independence",
            bigIdea: "Ethiopia and Liberia maintained their independence because of strong leadership, unity, international support and geography.",
            learnIt: [
              "Strong leadership: leaders such as Emperor Menelik II in Ethiopia organised effective resistance.",
              "Unity: people united against foreign invasion.",
              "Difficult terrain: mountains in Ethiopia made invasion difficult.",
              "International recognition: Liberia had support from the United States.",
              "Diplomacy: both countries used negotiations and international relations to protect their sovereignty.",
              "Determination: citizens were willing to sacrifice to defend their freedom."
            ]
          }
        ]
      },
{
        subtopicId: "methods-problems-independence",
        title: "4. Methods and problems of Pan-Africanists and nationalists",
        modules: [
          {
            moduleId: "methods-panafricanists-nationalists",
            title: "Methods of work by Pan-Africanists and nationalists",
            bigIdea: "Pan-Africanists and nationalists used many methods to fight for independence, from peaceful political action to armed struggle.",
            learnIt: [
              "Forming political parties and trade unions to mobilise people.",
              "Using newspapers, radio and books to spread nationalist ideas.",
              "Petitions, boycotts, strikes and demonstrations against colonial policies.",
              "Negotiations and constitutional conferences with colonial governments.",
              "Armed struggle in some places where peaceful methods failed.",
              "International pressure through the United Nations and other organisations."
            ],
            visual: {
              kind: "cards",
              title: "Methods used by nationalists",
              description: "Show cards for: political parties, newspapers, petitions/boycotts, strikes/demonstrations, negotiations, armed struggle, international pressure."
            },
            tryThis: {
              question: "Which method was used by nationalists?",
              choices: ["Forming political parties", "Creating deserts", "Stopping all schools", "Making oceans"],
              correct: 0,
              explanation: "Political parties helped mobilise people for independence."
            }
          },
          {
            moduleId: "problems-panafricanists-nationalists",
            title: "Problems Pan-Africanists and nationalists faced",
            bigIdea: "Nationalists faced serious challenges, including arrest, imprisonment, lack of funds and strong colonial armies.",
            learnIt: [
              "Arrest, imprisonment and exile by colonial governments.",
              "Censorship: newspapers and meetings were often banned.",
              "Lack of funds: nationalist parties struggled to raise money.",
              "Tribal and religious divisions were sometimes used by colonial powers to weaken unity.",
              "Poor communication: roads, telephones and transport were limited.",
              "Strong colonial armies and police used force against protesters.",
              "Despite these problems, nationalists continued to organise and sacrifice for independence."
            ],
            workedExample: {
              question: "Give two problems faced by nationalists in Africa.",
              steps: [
                "Many nationalists were arrested or imprisoned by colonial governments.",
                "They also faced lack of funds, censorship and poor communication."
              ],
              answer: "Nationalists faced arrest and imprisonment, censorship, lack of funds, ethnic divisions and strong colonial armies."
            }
          }
        ]
      },
{
        subtopicId: "political-systems",
        title: "5. Political systems: multiparty and single party",
        modules: [
          {
            moduleId: "multiparty-system",
            title: "Multiparty system",
            bigIdea: "A multiparty system is a system where more than one political party can compete for power through elections.",
            learnIt: [
              "In a multiparty system, more than one political party is allowed to operate legally.",
              "Parties compete in free elections and voters choose their leaders.",
              "Advantages claimed include wider choice for voters, checks on government power and protection of different opinions.",
              "Challenges can include costly elections, political rivalry and sometimes conflict if not managed well.",
              "Uganda today operates a multiparty system."
            ],
            tryThis: {
              question: "A multiparty system means:",
              choices: ["More than one political party can compete", "Only one river exists", "No voting is allowed", "All countries have one capital"],
              correct: 0,
              explanation: "Multiparty systems allow more than one party to compete for power."
            }
          },
          {
            moduleId: "single-party-system",
            title: "Single party system",
            bigIdea: "A single party system is a system where only one political party is allowed to operate legally.",
            learnIt: [
              "In a single party system, only one political party is allowed by law.",
              "Supporters claimed it promoted national unity and faster decision making, especially soon after independence.",
              "Critics said it limited choice, reduced accountability and could lead to abuse of power.",
              "Many African countries tried single party systems after independence before returning to multiparty systems.",
              "Democratic participation, accountability, peaceful transfer of power and respect for rights are important in any system."
            ],
            visual: {
              kind: "comparison",
              title: "Multiparty vs Single party",
              description: "Show two columns: Multiparty – many parties compete, wider voter choice; Single party – one legal party, claimed to promote unity but limits choice."
            }
          },
          {
            moduleId: "political-systems-summary",
            title: "Comparing political systems",
            bigIdea: "Whether multiparty or single party, what matters most is democratic participation, accountability, peaceful transfer of power and respect for rights.",
            learnIt: [
              "Multiparty systems allow competition between different parties.",
              "Single party systems allow only one legal ruling party.",
              "Each system has claimed advantages and disadvantages.",
              "Good governance requires democratic participation, accountability, peaceful transfer of power and respect for human rights.",
              "Citizens should be patriotic, obey the constitution, vote responsibly and respect different opinions."
            ],
            examTip: "For political systems questions, define the system, give one advantage and one disadvantage, and mention the importance of democracy and accountability."
          }
        ]
      },
{
        subtopicId: "forms-of-government",
        title: "6. Forms of government and governance in Africa",
        modules: [
          {
            moduleId: "types-of-government",
            title: "Types of Government",
            bigIdea: "Different African countries are ruled under different forms of government, including democracy, monarchy, and military regimes.",
            learnIt: [
              "A form of government is the system or way a country is ruled and organized.",
              "Democracy (Democratic Republic): A system of government where leaders are elected by the people through periodic free and fair elections. Most African nations today, including Uganda, Kenya, and Ghana, are republics.",
              "Monarchy (Kingdom): A system of government headed by a King or Queen whose title is usually inherited. Examples in Africa include the Kingdom of Eswatini (formerly Swaziland) and the Kingdom of Morocco.",
              "Military Rule / Dictatorship: A system where the armed forces seize power by force (coup d'état) or where a single leader rules with absolute authority without constitutional checks. Historical examples include Idi Amin in Uganda and Mobutu Sese Seko in Zaire (DRC)."
            ],
            tryThis: {
              question: "A form of government where the country is headed by a King or Queen is called a:",
              choices: ["Republic", "Monarchy", "Military regime", "Federation"],
              correct: 1,
              explanation: "A monarchy is headed by a traditional ruler such as a King or Queen."
            }
          },
          {
            moduleId: "pillars-of-democracy",
            title: "Pillars of Democracy and Good Governance",
            bigIdea: "Good governance ensures peace, justice, and development by protecting human rights and following the rule of law.",
            learnIt: [
              "Democracy literally means 'rule of the people'. Abraham Lincoln defined it as government of the people, by the people, and for the people.",
              "Pillars of democracy include: regular free and fair elections, rule of law (no one is above the law), respect for human rights, freedom of speech and press, and citizen participation.",
              "Separation of powers divides state authority between the Executive (implements laws), Legislature (makes laws), and Judiciary (interprets laws) to prevent abuse of power.",
              "Duties of a patriotic citizen in a democracy: voting in national elections, paying taxes regularly, obeying national laws, protecting public property, and promoting peace."
            ],
            tryThis: {
              question: "Which organ of government is responsible for making national laws?",
              choices: ["The Executive", "The Legislature (Parliament)", "The Judiciary", "The Police"],
              correct: 1,
              explanation: "The Legislature (Parliament) makes laws, the Executive implements them, and the Judiciary interprets them."
            }
          }
        ]
      },
{
        subtopicId: "premium-nationalism-reasoning",
        title: "Exam Summary: Nationalism & Independence — High-Yield UNEB Points",
        modules: [
          {
            moduleId: "nationalism-exam-summary",
            title: "15 Must-Know UNEB Facts about African Nationalism and Independence",
            bigIdea: "Master these high-frequency exam facts about Pan-Africanism, key nationalists, methods, and independence dates.",
            learnIt: [
              "1. NATIONALISM = love for and loyalty to one’s nation, shown through the desire for self-rule and independence.",
              "2. PAN-AFRICANISM = the idea that African people should unite, support one another, and work together for freedom across the whole continent.",
              "3. Key Pan-Africanists: W.E.B. Du Bois (organised the first Pan-African Congress, 1919), Marcus Garvey (Jamaican — ‘Back to Africa’ movement), Kwame Nkrumah (Ghana — led Ghana to independence in 1957).",
              "4. GHANA (formerly Gold Coast) was the FIRST sub-Saharan African country to gain independence — 6 March 1957, led by Kwame Nkrumah.",
              "5. UGANDA gained independence on 9 October 1962 from Britain. First Prime Minister: Milton Obote. Key nationalist parties: UNC (Uganda National Congress) founded by Ignatius Kangave Musaazi in 1952.",
              "6. KENYA gained independence on 12 December 1963. Key nationalist: Jomo Kenyatta (first President). The Mau Mau rebellion (1952–1960) led by Dedan Kimathi fought against British settlers for land and freedom.",
              "7. TANZANIA (Tanganyika) gained independence on 9 December 1961. Key nationalist: Julius Nyerere (first President, promoted Ujamaa socialism and African unity).",
              "8. Methods used by nationalists: Forming political parties (UNC, TANU, CPP), Newspapers and writing, Strikes and boycotts, Demonstrations and protests, Negotiations and constitutional conferences, Armed struggle where peaceful methods failed.",
              "9. Problems faced by nationalists: Arrest, imprisonment, and exile by colonial governments; Censorship of newspapers; Lack of funds; Ethnic divisions exploited by colonialists; Strong colonial armies.",
              "10. ETHIOPIA and LIBERIA were NOT colonised. Ethiopia resisted Italian invasion at the Battle of Adwa (1896) under Emperor Menelik II. Liberia was founded by freed formerly enslaved people from America (1847).",
              "11. Single-party system = only one legal political party. Multiparty system = more than one party competes in elections. Uganda operates a multiparty system.",
              "12. PATRIOTISM = love for one’s country and willingness to serve it responsibly — paying taxes, obeying laws, protecting national resources, promoting peace.",
              "13. Forms of government in Africa: Democracy/Republic (leaders elected by people), Monarchy/Kingdom (King or Queen, e.g., Eswatini, Morocco), Military Rule/Dictatorship (army seizes power by force).",
              "14. The OAU (Organisation of African Unity) was formed in 1963 in Addis Ababa to promote African unity and support liberation movements. It was replaced by the AU (African Union) in 2002.",
              "15. Democracy requires: free and fair elections, rule of law, respect for human rights, freedom of speech and press, citizen participation, and separation of powers (Executive, Legislature, Judiciary)."
            ],
            tryThis: {
              question: "Which African country was the first south of the Sahara to gain independence?",
              choices: ["Ghana (1957)", "Uganda (1962)", "Kenya (1963)", "Tanzania (1961)"],
              correct: 0,
              explanation: "Ghana, led by Kwame Nkrumah, became the first sub-Saharan African country to gain independence on 6 March 1957."
            }
          }
        ]
      }
    ],
    quiz: [
      { q: "Nationalism means:", choices: ["Love for and loyalty to one's nation", "A type of lake", "A climate zone", "A vegetation belt"], correct: 0, why: "Nationalism is love for one's nation." },
      { q: "Pan-Africanism promotes:", choices: ["African unity", "Colonial rule", "Desert expansion", "River flooding only"], correct: 0, why: "Pan-Africanism promotes African unity." },
      { q: "Which was the first sub-Saharan country to gain independence?", choices: ["Ghana (1957)", "Uganda (1962)", "Kenya (1963)", "Tanzania (1961)"], correct: 0, why: "Ghana, 6 March 1957." },
      { q: "Ethiopia resisted Italian colonisation at:", choices: ["Battle of Adwa (1896)", "Berlin Conference", "World War I", "Scramble"], correct: 0, why: "Ethiopia defeated Italy at Adwa in 1896." },
    ],
  },
  {
    id: "post-independence-africa",
    themeId: "sst-living-together-africa",
    themeName: "Living Together in Africa",
    title: "Post-independence Africa",
    estMinutes: 18,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "After independence, African countries formed OAU, AU and regional groupings for unity, peace, and development.",
      learningObjectives: ["Explain OAU and AU.", "Name regional groupings.", "Identify post-independence challenges."],
      whatYouNeedToKnow: [
        "OAU: Formed 1963, Addis Ababa. Promoted unity, supported liberation, defended sovereignty.",
        "AU: Replaced OAU in 2002. Peace, democracy, human rights, development. HQ: Addis Ababa.",
        "Regional groupings: COMESA, ECOWAS, SADC, IGAD. Promote trade, transport, peace, cooperation.",
      ],
      worked: { problem: "Give advantages of regional cooperation.", steps: ["Larger markets for goods.", "Shared infrastructure reduces costs."], answer: "Creates larger markets and encourages shared infrastructure." },
      recap: ["OAU promoted unity.", "AU continues with wider aims.", "COMESA, ECOWAS, SADC, IGAD are key groupings."],
    },
    subtopics: [
{
        subtopicId: "oau-formation-aims",
        title: "1. Formation of OAU, objectives and functions",
        modules: [
          {
            moduleId: "formation-oau",
            title: "Formation of the OAU",
            bigIdea: "The Organisation of African Unity (OAU) was formed in 1963 in Addis Ababa, Ethiopia, to promote African unity and support countries still fighting for independence.",
            learnIt: [
              "OAU stands for Organisation of African Unity.",
              "It was formed on 25 May 1963 in Addis Ababa, Ethiopia.",
              "Thirty-two independent African countries signed the OAU Charter at the first meeting.",
              "The headquarters of the OAU was in Addis Ababa, Ethiopia.",
              "African countries formed the OAU because they wanted unity, peace, to support liberation movements, defend sovereignty, and encourage cooperation.",
              "The OAU wanted to help countries still under colonial or minority rule to gain independence."
            ],
            visual: {
              kind: "timeline",
              title: "Formation of OAU",
              description: "Show: 1963 – OAU formed in Addis Ababa – 32 founding members – aims: unity, liberation, sovereignty, cooperation."
            },
            tryThis: {
              question: "The OAU was formed in:",
              choices: ["1963", "2002", "1884", "1945"],
              correct: 0,
              explanation: "The OAU was formed in 1963."
            }
          },
          {
            moduleId: "objectives-functions-oau",
            title: "Objectives, functions, achievements and failures of OAU",
            bigIdea: "The OAU promoted unity, supported liberation, defended sovereignty, and encouraged cooperation — with real achievements but also challenges.",
            learnIt: [
              "Objectives of the OAU included: promote unity among African states; defend sovereignty and independence; eradicate colonialism; promote cooperation in development; promote international cooperation.",
              "Functions included: holding summits of heads of state; supporting liberation movements with funds and political backing; mediating conflicts between member states; coordinating common African positions in world affairs.",
              "Achievements: helped many African countries gain independence; promoted African unity and pride; defended African sovereignty; created a common voice for Africa internationally.",
              "Failures/challenges: could not stop all conflicts and coups; had limited funds; the principle of non-interference sometimes prevented action during internal crises; economic integration was slow.",
              "Despite challenges, the OAU laid the foundation for the African Union."
            ],
            workedExample: {
              question: "Give two objectives of the OAU.",
              steps: [
                "The OAU wanted to promote unity among African states.",
                "It also wanted to support liberation movements and defend sovereignty."
              ],
              answer: "Objectives of the OAU included promoting African unity, supporting liberation movements, defending sovereignty, and encouraging cooperation."
            },
            examTip: "When asked about OAU achievements, give at least one political achievement (liberation/unity) and mention one challenge to show balance."
          }
        ]
      },
{
        subtopicId: "au-formation-organs",
        title: "2. Formation and objectives of AU, challenges and organs",
        modules: [
          {
            moduleId: "formation-objectives-au",
            title: "Formation and objectives of the AU",
            bigIdea: "The African Union (AU) replaced the OAU in 2002 to promote deeper unity, peace, democracy, development and human rights.",
            learnIt: [
              "AU stands for African Union.",
              "The AU replaced the OAU in 2002.",
              "The launch took place in Durban, South Africa.",
              "Objectives of the AU include: promote unity among African states; promote peace, security and stability; promote democracy, human rights and good governance; promote economic development and cooperation; promote research in science and technology; work with international partners.",
              "The AU continues the OAU's unity work but adds stronger focus on democracy, human rights, economic integration and intervention for peace.",
              "The headquarters of the AU is in Addis Ababa, Ethiopia."
            ],
            visual: {
              kind: "comparison",
              title: "OAU vs AU",
              description: "Show two columns: OAU – 1963, unity + liberation, non-interference. AU – 2002, unity + peace + democracy + development + human rights, right to intervene for peace."
            },
            tryThis: {
              question: "Which organisation replaced the OAU?",
              choices: ["AU", "UNICEF", "WHO", "NATO"],
              correct: 0,
              explanation: "The African Union replaced the Organisation of African Unity."
            }
          },
          {
            moduleId: "challenges-organs-au",
            title: "Challenges and organs of the AU",
            bigIdea: "The AU faces challenges such as conflicts, poverty and limited funds, but works through organs such as the Assembly, Commission, Pan-African Parliament and Peace and Security Council.",
            learnIt: [
              "Challenges faced by the AU include: conflicts and civil wars in some member states; poverty and debt; political instability and coups; limited funds – many programmes depend on external partners; poor transport and communication links; disease outbreaks and climate disasters.",
              "Important organs of the AU include: the Assembly of Heads of State and Government – the highest decision-making body; the AU Commission – the secretariat that runs daily work; the Pan-African Parliament – represents African peoples; the Peace and Security Council – handles conflict prevention and peacekeeping; the Court of Justice – handles legal disputes.",
              "The AU tries to solve challenges through peacekeeping missions, election observation, development programmes, health coordination and regional cooperation.",
              "Member states are expected to contribute funds, respect AU decisions, promote democracy and protect human rights."
            ],
            examTip: "When naming AU organs, give the full name and one function – e.g., 'Peace and Security Council – handles conflict prevention'."
          }
        ]
      },
{
        subtopicId: "regional-economic-groupings",
        title: "3. Regional economic groupings, cooperation, and solutions",
        modules: [
          {
            moduleId: "comesa-ecowas-sadc-igad",
            title: "Regional economic groupings: COMESA, ECOWAS, SADC, IGAD",
            bigIdea: "Regional economic groupings bring nearby countries together to trade, build infrastructure, keep peace and develop faster.",
            learnIt: [
              "A regional economic grouping is an organisation of nearby countries working together for trade and development.",
              "COMESA – Common Market for Eastern and Southern Africa. Promotes trade in Eastern and Southern Africa. Uganda is a member.",
              "ECOWAS – Economic Community of West African States. Promotes trade and cooperation in West Africa.",
              "SADC – Southern African Development Community. Promotes development and cooperation in Southern Africa.",
              "IGAD – Intergovernmental Authority on Development. Groups countries in Eastern Africa and the Horn of Africa; works on drought, food security, peace and development.",
              "These groupings encourage free trade, transport links, joint infrastructure, peace efforts and shared markets."
            ],
            visual: {
              kind: "map",
              title: "Regional economic groupings",
              description: "Show Africa with four shaded regions: COMESA across East/Southern, ECOWAS in West, SADC in Southern, IGAD in East/Horn – label with full names."
            },
            tryThis: {
              question: "IGAD is mainly associated with which region?",
              choices: ["Eastern/Horn of Africa", "South America", "Europe", "Australia"],
              correct: 0,
              explanation: "IGAD groups countries in Eastern Africa and the Horn of Africa."
            }
          },
          {
            moduleId: "advantages-disadvantages-cooperation",
            title: "Advantages and disadvantages of economic cooperation",
            bigIdea: "Economic cooperation gives countries larger markets, shared infrastructure and stronger bargaining power, but faces challenges such as conflicts, poor transport and unequal development.",
            learnIt: [
              "Advantages of economic cooperation: larger markets – producers can sell to more countries; shared infrastructure – countries build roads, railways, power lines together, reducing costs; peace-building – trade partners are less likely to fight; easier movement of goods, people and services; stronger bargaining power – a group negotiates better trade deals than one small country alone; technology and skills sharing.",
              "Disadvantages / challenges: political conflicts between member states can slow cooperation; poor transport links make trade expensive; different levels of development – richer members may benefit more; smuggling and unfair trade practices; poverty limits buying power; different currencies and taxes create barriers; failure to implement agreed policies.",
              "Cooperation works best when members respect agreements, maintain peace and invest in shared infrastructure."
            ],
            workedExample: {
              question: "Give two advantages of regional economic cooperation in Africa.",
              steps: [
                "Think about trade: countries can sell goods to a bigger market.",
                "Think about infrastructure: countries can work together on roads, railways and energy."
              ],
              answer: "It creates larger markets for goods and encourages shared infrastructure development."
            }
          },
          {
            moduleId: "solving-problems-groupings",
            title: "Ways of solving problems faced by economic groupings",
            bigIdea: "Problems in economic groupings can be solved through peace-building, better transport, fair trade rules, fighting corruption and investing in skills and infrastructure.",
            learnIt: [
              "Promote peace and political stability – conflicts destroy trade, so mediation and peacekeeping help.",
              "Improve transport and communication – build better roads, railways, ports and internet links to reduce trade costs.",
              "Harmonise trade policies – agree on common tariffs, standards and customs procedures to make trade smoother.",
              "Fight corruption – transparent customs and fair courts encourage honest trade.",
              "Support poorer members – special funds or technical help reduce unequal development.",
              "Invest in skills and industries – train workers, add value to raw materials, and build factories locally.",
              "Respect agreements – member states should implement protocols they have signed.",
              "Citizens and leaders must promote responsible leadership, accountability and regional solidarity."
            ],
            examTip: "For cooperation questions, give both an advantage and a challenge, then suggest one practical solution – this shows balanced PLE thinking."
          }
        ]
      },
{
        subtopicId: "political-instabilities-conflicts",
        title: "4. Political Instabilities and Conflicts in Post-Independence Africa",
        modules: [
          {
            moduleId: "causes-of-political-instability",
            title: "Causes of Political Instability in Africa",
            bigIdea: "After independence, many African countries experienced political instability due to colonial border disputes, ethnic rivalries, coups d'état, and bad governance.",
            learnIt: [
              "Political instability refers to a state of unrest, civil conflict, frequent violent changes of government, or lack of peace in a country.",
              "Colonial border disputes: European powers drew artificial borders during the Scramble for Africa that divided ethnic groups or forced hostile groups together.",
              "Ethnic rivalries and tribalism: Leaders favoring their own ethnic groups caused resentment and civil conflicts (e.g., Nigerian Civil War / Biafra, Rwandan Genocide).",
              "Military coups d'état: Unlawful seizure of power by the military due to corruption, election rigging, or economic collapse.",
              "Greed for power and corruption: Leaders refusing to step down after their terms expire or embezzling public funds intended for basic services."
            ],
            tryThis: {
              question: "Which of the following was a major cause of political instability in post-independence Africa?",
              choices: ["High agricultural production", "Artificial colonial borders and tribalism", "Formation of regional economic groupings", "Abundant solar energy"],
              correct: 1,
              explanation: "Artificial colonial borders divided tribes and grouped rival ethnic groups together, leading to civil conflicts."
            }
          },
          {
            moduleId: "effects-and-solutions-instability",
            title: "Effects and Solutions to Political Instability",
            bigIdea: "Political instability causes displacement and economic decline, but regional peacekeeping and democratic constitutionalism can restore peace.",
            learnIt: [
              "Effects of instability: Loss of human lives, destruction of infrastructure (roads, schools, hospitals), collapse of trade and agriculture leading to famine.",
              "Refugees and Internally Displaced Persons (IDPs): Millions of Africans flee their home countries (refugees) or leave their homes within the country (IDPs), putting pressure on neighboring states.",
              "Brain drain: Educated professionals (doctors, engineers, teachers) migrate to developed countries to escape instability, slowing national development.",
              "Solutions: Promoting peaceful dialogue and national reconciliation, enforcing constitutional rule and term limits, conducting free and fair elections, and fighting corruption.",
              "Regional peacekeeping: Organizations like the AU, ECOWAS (ECOMOG), and IGAD deploy peacekeeping missions to resolve disputes and protect civilians."
            ],
            tryThis: {
              question: "People who are forced to flee their home country due to war or political instability are called:",
              choices: ["Tourists", "Refugees", "Explorers", "Investors"],
              correct: 1,
              explanation: "Refugees are individuals forced to cross national borders to seek safety from armed conflict or persecution."
            }
          }
        ]
      },
{
        subtopicId: "premium-post-independence-solutions",
        title: "Exam Summary: Post-Independence Africa — High-Yield UNEB Points",
        modules: [
          {
            moduleId: "post-independence-exam-summary",
            title: "14 Must-Know UNEB Facts about Post-Independence Africa",
            bigIdea: "Master these high-frequency exam facts about OAU, AU, regional groupings, and post-independence challenges.",
            learnIt: [
              "1. OAU (Organisation of African Unity): Formed on 25 May 1963 in Addis Ababa, Ethiopia. 32 founding members signed the OAU Charter.",
              "2. OAU objectives: Promote African unity, Defend sovereignty and independence, Eradicate colonialism, Promote cooperation in development.",
              "3. OAU achievements: Helped many African countries gain independence; Supported liberation movements; Created a common African voice internationally.",
              "4. OAU failures: Principle of non-interference prevented action during internal crises; Limited funds; Could not stop all conflicts and coups.",
              "5. AU (African Union): Replaced the OAU in 2002. Launched in Durban, South Africa. Headquarters: Addis Ababa, Ethiopia.",
              "6. AU objectives: Promote unity, peace, security, and stability; Promote democracy, human rights, and good governance; Promote economic development.",
              "7. AU organs: Assembly of Heads of State (highest body), AU Commission (secretariat), Pan-African Parliament, Peace and Security Council.",
              "8. REGIONAL GROUPINGS: COMESA (Common Market for Eastern and Southern Africa — Uganda is a member), ECOWAS (West Africa), SADC (Southern Africa), IGAD (Horn/Eastern Africa).",
              "9. Benefits of regional cooperation: Larger markets for goods, Shared infrastructure (roads, railways, power), Easier trade, Stronger bargaining power internationally.",
              "10. Challenges facing the AU: Conflicts and civil wars; Poverty and debt; Political instability and coups; Limited funds; Disease outbreaks (Ebola, COVID-19).",
              "11. POLITICAL INSTABILITY = frequent changes of government, coups, civil wars, and lack of peace. Caused by: artificial colonial borders, ethnic rivalries, greed for power, corruption.",
              "12. Effects of instability: Loss of lives, Destruction of infrastructure, Refugees and IDPs, Brain drain (educated people leave), Economic decline.",
              "13. REFUGEES = people forced to flee their country due to war or persecution. IDPs (Internally Displaced Persons) = people forced to leave their homes but stay within their country.",
              "14. Solutions to African challenges: Promote peace and dialogue, Enforce constitutional rule and term limits, Fight corruption, Invest in education and skills, Build regional infrastructure."
            ],
            tryThis: {
              question: "Which organisation replaced the OAU in 2002?",
              choices: ["African Union (AU)", "United Nations (UN)", "ECOWAS", "Commonwealth"],
              correct: 0,
              explanation: "The African Union (AU) replaced the Organisation of African Unity (OAU) in 2002."
            }
          }
        ]
      }
    ],
    quiz: [
      { q: "The OAU was formed in:", choices: ["1963", "2002", "1884", "1995"], correct: 0, why: "OAU formed in 1963." },
      { q: "Which organisation replaced the OAU?", choices: ["AU", "UNICEF", "WHO", "NATO"], correct: 0, why: "African Union replaced OAU." },
      { q: "COMESA is:", choices: ["Regional economic grouping", "Mountain range", "Desert", "Lake"], correct: 0, why: "COMESA is a regional grouping." },
      { q: "Advantage of economic cooperation:", choices: ["Larger markets", "More isolation", "Stopping trade", "Removing roads"], correct: 0, why: "Larger markets benefit members." },
    ],
  },
  {
    id: "economic-developments-africa",
    themeId: "sst-living-together-africa",
    themeName: "Living Together in Africa",
    title: "Economic developments in Africa",
    estMinutes: 22,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "Africa's resources shape development. Case studies: Nigeria, South Africa, DRC, Sudan, Libya, and Uganda.",
      learningObjectives: ["Name major economic resources.", "Explain problems in using resources.", "Compare country case studies."],
      whatYouNeedToKnow: [
        "Resources: minerals (gold, copper, cobalt, diamonds, petroleum), fertile soils, water, forests, wildlife, sunshine.",
        "Economic activities: agriculture, mining, tourism, trade, fishing, manufacturing, transport.",
        "Nigeria (oil), South Africa (minerals/industry), DRC (minerals/forests), Uganda (farming/tourism).",
      ],
      worked: { problem: "Why is value addition important?", steps: ["Raw materials sold cheaply.", "Processing increases value.", "Creates jobs and income."], answer: "Value addition increases income and creates jobs." },
      recap: ["Africa has many resources.", "Development depends on wise use.", "Peace, skills, infrastructure support development."],
    },
    subtopics: [
{
        subtopicId: "resources-africa",
        title: "1. Economic resources of Africa and their care",
        modules: [
          {
            moduleId: "major-economic-resources-africa",
            imageUrl: "/images/social-studies/mining-and-agriculture-processing.png",
            imageCaption: "Value addition transforms raw agricultural crops and mined ores into high-value manufactured products.",
            title: "Major economic resources of Africa",
            bigIdea: "Africa is rich in natural and human resources. Development depends on using these resources wisely, not just on having them.",
            learnIt: [
              "Natural resources are useful things found in nature, such as land, minerals, water, forests and wildlife.",
              "Mineral resources include gold, copper, cobalt, diamonds, petroleum, iron ore, bauxite and coltan.",
              "Agricultural resources include fertile soils, favourable climate, pasture land and water for irrigation.",
              "Forest resources provide timber, medicine, fuel, food and support rainfall.",
              "Water resources include rivers, lakes and underground water used for fishing, transport, irrigation and hydro-electric power.",
              "Wildlife and scenery support tourism, which earns foreign exchange.",
              "Human labour – skilled and unskilled workers – is also a key economic resource.",
              "Sunshine and wind are renewable energy resources that can generate solar and wind power."
            ],
            visual: {
              kind: "cards",
              title: "Major economic resources",
              description: "Show cards for: minerals/oil, fertile soils, forests, water/fisheries, wildlife/tourism, human labour, sunshine/wind."
            },
            tryThis: {
              question: "Which is a major economic resource in Nigeria?",
              choices: ["Oil", "Snowfields", "Polar bears", "Volcanoes only"],
              correct: 0,
              explanation: "Nigeria is well known for oil production."
            }
          },
          {
            moduleId: "problems-utilisation-resources",
            title: "Problems faced in the utilisation of resources",
            bigIdea: "Having resources is not enough. Africa faces problems that prevent full use of resources for development.",
            learnIt: [
              "Poor transport: bad roads, limited railways and few ports make it expensive to move goods to markets.",
              "Limited capital: many countries lack money to invest in machines, factories and infrastructure.",
              "Low technology: old tools and low skills reduce productivity in farming, mining and industries.",
              "Political instability: wars, coups and insecurity scare away investors and destroy infrastructure.",
              "Corruption: misuse of public funds reduces money available for development projects.",
              "Poor markets: low local buying power and unfair international trade terms reduce income from exports.",
              "Climate problems: drought, floods and unreliable rainfall affect farming and water supply.",
              "Land conflicts: disputes over land ownership slow farming and investment.",
              "Low value addition: selling raw materials cheaply instead of processing them locally – for example selling raw coffee beans instead of roasted coffee.",
              "Environmental degradation: deforestation, overgrazing, mining pollution and poor waste management damage resources."
            ],
            visual: {
              kind: "cards",
              title: "Problems in resource utilisation",
              description: "Show cards for: poor transport, limited capital, low technology, political instability, corruption, poor markets, climate problems, low value addition, environmental degradation."
            },
            examTip: "When listing problems, explain how each problem affects development – do not just name the problem."
          },
          {
            moduleId: "caring-resources",
            imageUrl: "/images/social-studies/agroforestry-farm.png",
            imageCaption: "Agroforestry integrates shade trees, crops, and livestock conservation on the same farm.",
            title: "Caring for our resources",
            bigIdea: "Resources must be used responsibly so they benefit current and future generations. Conservation protects the environment and supports long-term development.",
            learnIt: [
              "Caring for resources means using them wisely without destroying them.",
              "Forest conservation: plant trees (afforestation/reforestation), control bush burning, harvest timber sustainably, use alternative energy to reduce charcoal demand.",
              "Soil conservation: terracing on slopes, crop rotation, cover crops, agroforestry, avoiding overgrazing.",
              "Water conservation: protect catchment areas, avoid polluting rivers/lakes, use irrigation efficiently, harvest rainwater.",
              "Wildlife conservation: protect game parks and reserves, stop poaching, promote eco-tourism.",
              "Mineral resources: mine responsibly, rehabilitate mined land, add value locally instead of exporting raw ores only.",
              "Energy conservation: use energy-saving stoves, invest in solar/wind/hydro power, reduce waste.",
              "Human resource development: educate and train workers, provide healthcare, promote gender equality in economic activities.",
              "Good governance: transparent management of resource revenues, anti-corruption measures, community participation in resource decisions."
            ],
            workedExample: {
              question: "Why is value addition important for African resources?",
              steps: [
                "Raw materials are often sold cheaply on world markets.",
                "Processing them into finished or semi-finished goods increases their value.",
                "This creates jobs, more income, and foreign exchange for the country."
              ],
              answer: "Value addition increases income from resources and creates jobs by processing raw materials before sale."
            }
          }
        ]
      },
{
        subtopicId: "economic-activities-development",
        title: "2. Major economic development in Africa",
        modules: [
          {
            moduleId: "major-economic-development-africa",
            title: "Major economic development in Africa",
            bigIdea: "**Definition:** Economic development is the process of improving people's standard of living by using resources well — including better income, health, education, housing, and services.\n**Definition:** Value addition is processing raw materials into finished or semi-finished goods to increase their market value (e.g., roasting coffee beans instead of selling raw beans).\n**Key economic activities in Africa:** Agriculture, mining, tourism, trade, fishing, manufacturing, and transport.",
            learnIt: [
              "Economic development means improving people's standards of living – better income, health, education, housing and services.",
              "Agriculture: provides food, jobs and exports such as coffee, cotton, tea, cocoa, maize and horticulture. Many Africans depend on farming.",
              "Mining: provides minerals such as gold, copper, cobalt, diamonds and petroleum. Mining earns foreign exchange but needs careful environmental management.",
              "Tourism: earns income through wildlife, scenery, culture, beaches and historical sites. Tourism creates jobs in hotels, transport, guiding and crafts.",
              "Industries: process raw materials into finished goods – food processing, textiles, cement, steel, oil refining. Industrialisation creates jobs and adds value.",
              "Trade: internal trade within countries and international trade with other countries. Regional economic groupings help expand markets.",
              "Transport and communication: roads, railways, ports, airports, mobile phones and internet support all other economic activities.",
              "Energy: hydro-electric power, thermal power, solar and wind energy power homes, schools, hospitals and industries.",
              "Fishing, pastoralism and irrigation also contribute to food security and income in many regions."
            ],
            visual: {
              kind: "flow",
              title: "Resource to development flow",
              description: "Show: resource → processing/value addition → jobs → income → better services (schools, hospitals, roads). Examples: cotton → cloth; crude oil → fuel products."
            },
            tryThis: {
              question: "Value addition means:",
              choices: ["Processing raw materials to increase value", "Wasting resources", "Stopping trade", "Cutting all forests"],
              correct: 0,
              explanation: "Value addition increases the worth of raw materials by processing them."
            }
          }
        ]
      },
{
        subtopicId: "country-case-studies",
        title: "3. Case studies: Nigeria, Sudan, Libya, South Africa, DRC, Uganda",
        modules: [
          {
            moduleId: "nigeria-sudan-libya",
            title: "Case studies: Nigeria, Sudan, Libya",
            bigIdea: "Nigeria, Sudan and Libya show how oil, farming and irrigation shape economic development in different parts of Africa.",
            learnIt: [
              "Nigeria – West Africa. Major economic activities: petroleum production and export (oil is the main foreign exchange earner), farming (cocoa, palm oil, groundnuts, yams), trade and transport, growing manufacturing and services. Large population provides a big internal market. Problems: oil price fluctuations, pipeline vandalism, environmental pollution in the Niger Delta, corruption.",
              "Sudan – North-East Africa. Major economic activities: farming in the Nile Valley, Gezira Irrigation Scheme (cotton is a major crop), pastoralism, gum arabic production, gold mining, oil in some areas. The Nile provides water for irrigation and hydro-electric power. Problems: political instability, desertification, poor transport in some areas.",
              "Libya – North Africa. Major economic activities: petroleum production and export (main source of income), desert irrigation projects (Great Man-Made River brings underground water to coastal farms), tourism (desert landscapes, Roman ruins), growing industrialisation. Problems: political instability, desert climate limits farming, over-dependence on oil."
            ],
            visual: {
              kind: "comparison",
              title: "Nigeria / Sudan / Libya",
              description: "Three cards: Nigeria – oil + farming + large market; Sudan – Nile Valley + Gezira irrigation + cotton; Libya – oil + desert irrigation + Great Man-Made River."
            },
            tryThis: {
              question: "The Gezira Irrigation Scheme is associated with:",
              choices: ["Sudan", "South Africa", "Ghana", "Morocco only"],
              correct: 0,
              explanation: "The Gezira Scheme is a major irrigation project in Sudan."
            }
          },
          {
            moduleId: "south-africa-drc-uganda",
            title: "Case studies: South Africa, DRC, Uganda",
            bigIdea: "South Africa, DRC and Uganda show how minerals, forests, farming and tourism combine differently in Southern, Central and East Africa.",
            learnIt: [
              "South Africa – Southern Africa. Major economic activities: mining (gold, diamonds, platinum, coal), farming (maize, fruits, wine, livestock), manufacturing and industry, trade and transport, tourism (wildlife, Cape Town, Table Mountain). Has the most advanced infrastructure and industrial base in Africa south of the Sahara. Problems: inequality, unemployment, electricity shortages in some periods.",
              "DRC – Democratic Republic of Congo, Central Africa. Major economic activities: mining (copper, cobalt, coltan, diamonds, gold), forestry (timber from the Congo Basin rainforest), hydro-electric power potential (Inga Dam on River Congo), farming. Very rich in minerals and forests but faces challenges: poor transport, political instability/conflict in eastern regions, weak infrastructure, illegal mining.",
              "Uganda – East Africa. Major economic activities: farming (coffee, tea, cotton, maize, bananas, dairy), tourism (mountain gorillas, national parks, Lake Victoria, Rwenzori Mountains), fishing (Lake Victoria, other lakes), mining (limited gold, limestone, growing oil development in Albertine region), trade and services. Problems: over-dependence on agriculture, poor transport in rural areas, youth unemployment, climate variability."
            ],
            visual: {
              kind: "comparison",
              title: "South Africa / DRC / Uganda",
              description: "Three cards: South Africa – mining + industry + tourism + advanced infrastructure; DRC – minerals + forests + water power, challenges: transport/conflict; Uganda – farming + tourism + fisheries + growing oil."
            },
            tryThis: {
              question: "Which country is known for strong mining and industrial development in Southern Africa?",
              choices: ["South Africa", "Chad", "Somalia", "Rwanda only"],
              correct: 0,
              explanation: "South Africa is known for mining and industrial development."
            }
          },
          {
            moduleId: "comparing-countries",
            title: "Comparison with other countries in terms of economic development",
            bigIdea: "Comparing countries helps learners understand why some countries develop faster: resources, infrastructure, peace, governance, skills and value addition all matter – not just resource wealth.",
            learnIt: [
              "Resource wealth alone does not guarantee development. Good management matters more.",
              "Nigeria has oil wealth but faces infrastructure and governance challenges; South Africa has more diversified industries and better infrastructure.",
              "DRC is extremely resource-rich but conflict and poor transport slow development.",
              "Libya has high oil income per person but a harsh desert climate limits farming.",
              "Sudan uses the Nile for irrigation (Gezira Scheme) to overcome dry climate.",
              "Uganda has fertile land, good climate and tourism potential, but needs more industrialisation and value addition.",
              "Factors that help development: peace and political stability, good governance, skilled labour, reliable infrastructure (roads, railways, power), value addition/industrialisation, access to markets, regional cooperation, environmental care.",
              "Comparing countries teaches learners to analyse strengths, weaknesses and solutions – not just memorise country names."
            ],
            examTip: "For case study questions, name the country, state at least two resources/economic activities, explain how they create jobs/income, mention one problem, and suggest one solution."
          }
        ]
      },
{
        subtopicId: "challenges-solutions",
        title: "4. Challenges affecting economic development and possible solutions",
        modules: [
          {
            moduleId: "infrastructure-and-energy-challenges",
            title: "Transport and Energy Infrastructure Bottlenecks",
            bigIdea: "Poor road and rail networks combined with unreliable electricity shortages severely slow down industrial growth and trade.",
            learnIt: [
              "Transport bottlenecks: Poorly maintained feeder roads, limited cross-border railways, and congested seaports make transporting goods expensive and slow across Africa.",
              "Landlocked challenges: Inland nations like Uganda, Rwanda, Zambia, and Chad depend entirely on coastal neighbors (like Kenya or Tanzania) to export and import goods.",
              "Energy deficits: Frequent power blackouts and reliance on firewood or expensive thermal generators stop factories from operating at full capacity.",
              "Impact on industrialisation: Without reliable electricity and modern railways, foreign investors are discouraged from building large processing factories."
            ],
            tryThis: {
              question: "Why do landlocked countries in Africa face higher transport costs for imported goods?",
              choices: ["They have too many seaports", "They must transport goods through neighboring coastal countries", "They do not pay import taxes", "They produce all their own manufactured goods"],
              correct: 1,
              explanation: "Landlocked countries lack direct access to the sea and rely on road and rail networks through coastal neighbors."
            }
          },
          {
            moduleId: "trade-and-debt-challenges",
            title: "Unfavourable Trade Terms and Heavy Debt Burden",
            bigIdea: "Exporting raw materials at cheap prices while importing expensive manufactured goods leaves African economies in heavy debt.",
            learnIt: [
              "Over-dependence on primary exports: African nations mainly sell unprocessed raw materials (coffee, raw cotton, cocoa, crude oil, copper minerals).",
              "Price fluctuations: Prices of raw materials on world markets change unpredictably, leading to unstable national export earnings.",
              "Unfavourable terms of trade: Imported industrial goods (tractors, medicines, electronics) cost much more than the raw agricultural products exported.",
              "Heavy foreign debt burden: Many governments borrow huge sums of money from foreign lenders (World Bank, IMF, foreign banks); repaying these loans with interest consumes national revenue needed for schools and health.",
              "Brain drain: Skilled workers (engineers, doctors, IT specialists) leave the continent seeking better pay abroad, starving domestic industries of talent."
            ],
            tryThis: {
              question: "Processing raw coffee beans into packaged roasted coffee before exporting is called:",
              choices: ["Devaluation", "Value addition", "Scramble for Africa", "Deforestation"],
              correct: 1,
              explanation: "Value addition transforms raw materials into finished products that fetch much higher prices."
            }
          },
          {
            moduleId: "governance-and-social-challenges",
            title: "Governance, Corruption, and Rapid Population Growth",
            bigIdea: "Corruption and civil insecurity waste valuable public funds, while rapid population growth increases pressure on social services.",
            learnIt: [
              "Corruption and embezzlement: Misuse of public funds intended for building roads, hospitals, and schools reduces national development speed.",
              "Political instability and civil wars: Insecurity destroys existing infrastructure, displaces farming communities, and discourages tourism and investment.",
              "Rapid population growth: When the population grows faster than job creation, youth unemployment rises alongside overcrowded schools and hospitals.",
              "Low technology and skills gap: Limited technical and vocational training leaves many workers without practical industrial skills."
            ],
            tryThis: {
              question: "How does corruption negatively affect economic development in a country?",
              choices: ["It increases foreign exchange reserves", "It diverts public funds away from schools, hospitals, and roads", "It promotes value addition", "It improves weather conditions"],
              correct: 1,
              explanation: "Corruption steals public money that should have been spent on infrastructure and social development."
            }
          },
          {
            moduleId: "environmental-and-climate-challenges",
            title: "Climate Change and Environmental Degradation",
            bigIdea: "Erratic weather patterns, prolonged droughts, and floods hurt rain-fed agriculture and hydroelectric power generation.",
            learnIt: [
              "Dependence on rain-fed agriculture: Over 70% of African farmers rely directly on rainfall; prolonged droughts destroy harvests and cause food shortages.",
              "Floods and soil erosion: Heavy storms wash away fertile topsoil, destroy bridges, and flood farming communities.",
              "Deforestation and desertification: Cutting trees for charcoal and farming exposes soil to erosion and pushes desert conditions further south (e.g., Sahel region).",
              "Hydro-power vulnerability: Dropping water levels in rivers and lakes during severe droughts reduce electricity generation at hydroelectric dams."
            ],
            tryThis: {
              question: "Which farming practice helps conserve soil and moisture during dry seasons?",
              choices: ["Overgrazing", "Mulching and agroforestry", "Bush burning", "Monoculture without fallow"],
              correct: 1,
              explanation: "Mulching covers soil to prevent water loss, while agroforestry integrates trees that protect soil structure."
            }
          },
          {
            moduleId: "solutions-economic-development",
            title: "Solutions for African Economic Transformation",
            bigIdea: "African countries can achieve sustainable economic development by investing in value addition, regional trade, technical education, and clean energy.",
            learnIt: [
              "Value addition and industrialisation: Building local factories to process crops, oil, and minerals before export creates jobs and multiplies export income.",
              "Regional economic integration: Expanding trade across African borders through AfCFTA, EAC, COMESA, and ECOWAS removes trade barriers and creates a massive continental market.",
              "Investing in infrastructure and renewable energy: Building cross-border standard gauge railways, solar farms, geothermal plants, and hydroelectric dams.",
              "Promoting technical and vocational education (TVET): Equipping youth with practical engineering, agricultural, and digital skills.",
              "Good governance and zero tolerance for corruption: Enforcing transparency, auditing public funds, and maintaining political peace."
            ],
            visual: {
              kind: "cards",
              title: "Challenge → Solution pairs",
              description: "Show matching pairs: Raw material exports → Value addition; Poor transport → Invest in railways & roads; Corruption → Transparency & audits; Power shortage → Solar & hydro development."
            },
            examTip: "For economic solutions questions, match each solution directly to the challenge: if the problem is low export prices, the solution is value addition; if the problem is poor transport, the solution is building roads and railways."
          }
        ]
      },
{
        subtopicId: "premium-economic-reasoning",
        title: "Exam Summary: Economy of Africa — High-Yield UNEB Points",
        modules: [
          {
            moduleId: "economy-exam-summary",
            title: "15 Must-Know UNEB Facts about Africa’s Economy",
            bigIdea: "Master these high-frequency exam facts about resources, economic activities, country case studies, and development challenges.",
            learnIt: [
              "1. ECONOMIC ACTIVITY = work people do to earn income or produce goods and services. Main types in Africa: Agriculture, mining, tourism, trade, fishing, manufacturing.",
              "2. NATURAL RESOURCES = useful things found in nature: minerals, fertile soils, water, forests, wildlife, sunshine, wind. Africa is rich in natural resources.",
              "3. VALUE ADDITION = processing raw materials into finished or semi-finished goods to increase their market value. Example: roasting coffee beans instead of exporting raw beans.",
              "4. NIGERIA (West Africa): Major oil producer — petroleum is the main foreign exchange earner. Also farms cocoa, palm oil, groundnuts. Has Africa’s largest population and market.",
              "5. SOUTH AFRICA (Southern Africa): Most industrialised African economy. Major mining (gold, diamonds, platinum, coal). Farming (maize, fruits, wine). Advanced infrastructure.",
              "6. DRC (Central Africa): Richest in minerals (copper, cobalt, coltan, diamonds). Has the Congo Basin rainforest (timber). Major hydroelectric potential (Inga Dam on River Congo). Challenges: poor transport, conflict.",
              "7. SUDAN (North-East): Gezira Irrigation Scheme (between Blue Nile and White Nile) — major cotton producer. Also produces gum arabic, gold, and some oil. The Nile provides water for irrigation.",
              "8. LIBYA (North Africa): Major oil producer. The Great Man-Made River brings underground desert water to coastal farms for irrigation.",
              "9. UGANDA (East Africa): Farming (coffee, tea, cotton, maize, bananas, dairy). Tourism (mountain gorillas, national parks, Lake Victoria). Fishing (Lake Victoria). Growing oil development in the Albertine region.",
              "10. Problems facing African economies: Poor transport (bad roads, limited railways); Limited capital (money for investment); Low technology; Political instability; Corruption; Low value addition.",
              "11. Landlocked countries (Uganda, Rwanda, Zambia, Chad, Zimbabwe) face higher transport costs because they depend on coastal neighbours’ seaports (e.g., Mombasa for Uganda).",
              "12. BRAIN DRAIN = educated professionals (doctors, engineers, teachers) leaving Africa to work in developed countries, slowing national development.",
              "13. Solutions for African economies: Value addition and industrialisation; Regional trade (AfCFTA, EAC, COMESA); Invest in infrastructure and renewable energy; Technical education (TVET); Good governance and anti-corruption.",
              "14. TOURISM earns foreign exchange and creates jobs. Requires: peace and security, good transport, hotels, conservation of wildlife and scenery.",
              "15. AfCFTA (African Continental Free Trade Area) — aims to create a single African market for goods and services, reducing trade barriers across the continent."
            ],
            tryThis: {
              question: "The Gezira Irrigation Scheme is found in which country?",
              choices: ["Sudan", "Egypt", "Nigeria", "Uganda"],
              correct: 0,
              explanation: "The Gezira Scheme is a major irrigation project in Sudan between the Blue Nile and White Nile rivers."
            }
          }
        ]
      }
    ],
    quiz: [
      { q: "Major resource in Nigeria:", choices: ["Oil", "Snowfields", "Polar bears", "Volcanoes"], correct: 0, why: "Nigeria is known for oil." },
      { q: "Most industrialised in Southern Africa:", choices: ["South Africa", "Chad", "Somalia", "Rwanda"], correct: 0, why: "South Africa is most industrialised." },
      { q: "Value addition means:", choices: ["Processing raw materials to increase value", "Wasting resources", "Stopping trade", "Cutting forests"], correct: 0, why: "Increases worth by processing." },
      { q: "Solution for development:", choices: ["Good governance", "Corruption", "Civil war", "Destroying roads"], correct: 0, why: "Good governance supports development." },
    ],
  },
  {
    id: "major-world-organisations",
    themeId: "sst-living-together-africa",
    themeName: "Living Together in Africa",
    title: "Major world organisations",
    estMinutes: 18,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "African countries relate with global organisations like the UN and Commonwealth.",
      learningObjectives: ["Explain UN origin and organs.", "Name UN agencies.", "Describe the Commonwealth."],
      whatYouNeedToKnow: [
        "UN: Formed 1945 after WWII. HQ: New York. Replaced League of Nations.",
        "UN organs: General Assembly, Security Council (5 permanent veto), ICJ, Secretariat.",
        "UN agencies: UNICEF (children), WHO (health), FAO (food), UNESCO (education), UNHCR (refugees).",
        "Commonwealth: Voluntary association of mostly former British colonies. Democracy, trade, scholarships, Games.",
      ],
      worked: { problem: "Match UNICEF and WHO to their work.", steps: ["UNICEF = children's welfare.", "WHO = health worldwide."], answer: "UNICEF supports children; WHO promotes health." },
      recap: ["UN formed 1945 for peace.", "Agencies handle children, health, food, education.", "Commonwealth links member countries."],
    },
    subtopics: [
{
        subtopicId: "un-formation-organs",
        title: "1. Formation of the United Nations, organs and functions",
        modules: [
          {
            moduleId: "formation-united-nations",
            title: "Formation of the United Nations",
            bigIdea: "The United Nations (UN) was formed in 1945 after the Second World War to promote peace, security, cooperation, human rights and development among nations.",
            learnIt: [
              "UN stands for United Nations.",
              "The UN was formed in 1945 after the Second World War ended.",
              "The main reasons for forming the UN were: to maintain international peace and security; to promote cooperation among nations; to protect human rights; to support economic and social development.",
              "The headquarters of the UN is in New York, USA.",
              "Uganda and most African countries are members of the United Nations.",
              "The UN replaced an earlier organisation called the League of Nations, which had failed to prevent World War II."
            ],
            visual: {
              kind: "timeline",
              title: "Formation of the UN",
              description: "Show: World War II ends 1945 → United Nations formed → headquarters New York → aims: peace, security, cooperation, human rights, development."
            },
            tryThis: {
              question: "The United Nations was formed in:",
              choices: ["1945", "1963", "2002", "1884"],
              correct: 0,
              explanation: "The UN was formed in 1945 after World War II."
            }
          },
          {
            moduleId: "un-organs-functions",
            title: "Origin, objectives, membership, organs and functions of the UN",
            bigIdea: "The UN has important organs that do different jobs. The General Assembly gives all members a voice; the Security Council handles peace and security.",
            learnIt: [
              "Membership: almost every country in the world is a member of the UN. New members are admitted by the General Assembly.",
              "Objectives: maintain international peace and security; promote friendly relations among nations; promote human rights; promote economic and social cooperation; be a centre for harmonising international actions.",
              "Important organs of the UN: General Assembly – all member states meet here, each country has one vote; Security Council – has special responsibility for maintaining international peace and security, has 5 permanent members with veto power and 10 rotating members; International Court of Justice – settles legal disputes between countries, located in The Hague, Netherlands; Secretariat – runs the day-to-day work of the UN, headed by the Secretary-General; Economic and Social Council (ECOSOC) – coordinates economic, social and development work.",
              "Functions: peacekeeping missions; mediating conflicts; providing humanitarian relief; coordinating development aid; promoting human rights; organising international conferences.",
              "The UN Charter is the founding document that sets out the purposes, principles and structure of the UN."
            ],
            visual: {
              kind: "cards",
              title: "UN organs",
              description: "Show cards: General Assembly – all members, one vote; Security Council – peace and security; International Court of Justice – legal disputes; Secretariat – daily work, Secretary-General; ECOSOC – economic/social development."
            },
            workedExample: {
              question: "Name two organs of the United Nations and state what each does.",
              steps: [
                "General Assembly – all member states meet, each country has one vote, discusses international issues.",
                "Security Council – maintains international peace and security, can authorise peacekeeping missions."
              ],
              answer: "General Assembly – forum for all member states; Security Council – maintains international peace and security."
            },
            examTip: "Do not confuse UN organs (General Assembly, Security Council, ICJ, Secretariat, ECOSOC) with UN agencies (UNICEF, WHO, FAO, UNESCO, UNHCR, WFP)."
          }
        ]
      },
{
        subtopicId: "un-agencies-rights",
        title: "2. UN agencies, Human Rights Charter, and importance of the UN",
        modules: [
          {
            moduleId: "un-agencies-functions",
            title: "UN agencies and their functions",
            bigIdea: "UN agencies are specialised bodies that do specific jobs in health, children, food, education, refugees and development. Learners must match each agency to its work.",
            learnIt: [
              "An agency is a specialised body that does a particular job within the UN system.",
              "UNICEF – United Nations Children's Fund. Supports children's welfare, health, nutrition, education and protection. Works in schools, immunisation campaigns and emergency relief for children.",
              "WHO – World Health Organization. Promotes health worldwide, fights diseases, coordinates responses to epidemics, sets health standards, supports vaccination programmes.",
              "FAO – Food and Agriculture Organization. Supports food security, agriculture, fisheries and forestry. Helps farmers improve crop yields and fight hunger.",
              "UNESCO – United Nations Educational, Scientific and Cultural Organization. Supports education, science, culture and communication. Protects World Heritage Sites, promotes literacy.",
              "UNHCR – United Nations High Commissioner for Refugees. Protects and supports refugees – people forced to flee their countries because of war or persecution. Provides shelter, food, education and helps with resettlement.",
              "WFP – World Food Programme. Provides food assistance in emergencies, school feeding programmes, and helps communities build food security.",
              "Learners should match each agency to its work, not memorise abbreviations only."
            ],
            visual: {
              kind: "cards",
              title: "UN agency – function matching",
              description: "Show matching cards: UNICEF → children; WHO → health; FAO → food/agriculture; UNESCO → education/science/culture; UNHCR → refugees; WFP → food assistance."
            },
            tryThis: {
              question: "Which UN agency focuses mainly on children?",
              choices: ["UNICEF", "WHO", "FAO", "WFP"],
              correct: 0,
              explanation: "UNICEF supports children's welfare and rights."
            }
          },
          {
            moduleId: "un-human-rights-charter",
            title: "UN Human Rights Charter",
            bigIdea: "Human rights are basic freedoms and protections every person should enjoy. Rights go together with responsibilities.",
            learnIt: [
              "Human rights are basic freedoms and protections every person should enjoy, regardless of race, religion, gender or nationality.",
              "The Universal Declaration of Human Rights was adopted by the UN in 1948.",
              "Examples of human rights: right to life; right to education; right to health; right to fair treatment before the law; freedom of worship/religion; freedom of expression; freedom from discrimination; freedom from torture and slavery; right to own property; right to participate in government.",
              "Rights go together with responsibilities: e.g., the right to education comes with the responsibility to study hard and respect teachers; freedom of expression comes with the responsibility not to insult others or spread false information.",
              "Children have special rights protected by the UN Convention on the Rights of the Child, supported by UNICEF.",
              "Governments, organisations and citizens all have a role in protecting human rights."
            ],
            tryThis: {
              question: "Which is a human right?",
              choices: ["Right to education", "Right to steal", "Right to pollute", "Right to violence"],
              correct: 0,
              explanation: "Education is recognised as a basic human right."
            }
          },
          {
            moduleId: "importance-un",
            title: "Importance of the United Nations",
            bigIdea: "The UN is important because it promotes peace, protects human rights, coordinates humanitarian relief, supports development and gives small countries a voice in world affairs.",
            learnIt: [
              "Promotes international peace and security through diplomacy, mediation and peacekeeping missions.",
              "Protects human rights through the Universal Declaration of Human Rights and monitoring bodies.",
              "Coordinates humanitarian relief during wars, natural disasters, famines and refugee crises.",
              "Supports development through agencies such as UNDP, UNICEF, WHO, FAO and WFP – especially in Africa.",
              "Provides a forum where all countries, large and small, can speak and vote in the General Assembly.",
              "Fights diseases globally – e.g., smallpox eradication, polio vaccination campaigns, COVID-19 response coordinated by WHO.",
              "Promotes education, science and cultural preservation through UNESCO.",
              "Supports refugees through UNHCR – important in Africa where conflicts have displaced millions.",
              "Helps countries achieve Sustainable Development Goals (SDGs) in poverty reduction, health, education, clean water and climate action."
            ],
            workedExample: {
              question: "Match two UN agencies with their work: UNICEF and WHO.",
              steps: [
                "UNICEF focuses on children and their welfare – health, nutrition, education, protection.",
                "WHO focuses on health and disease control worldwide."
              ],
              answer: "UNICEF supports children; WHO promotes health and fights diseases."
            }
          }
        ]
      },
{
        subtopicId: "commonwealth-challenges",
        title: "3. The Commonwealth of Nations and challenges of world organisations",
        modules: [
          {
            moduleId: "commonwealth-nations",
            title: "The Commonwealth of Nations and CHOGM",
            bigIdea: "The Commonwealth unites Britain and its former colonies to promote democracy and global cooperation.",
            learnIt: [
              "The Commonwealth of Nations is an voluntary association of Britain and countries that were formerly under British colonial rule (such as Uganda, Kenya, Nigeria, India, Canada).",
              "Functions: promotes democracy, human rights, trade, educational scholarships, and cultural exchange through the Commonwealth Games.",
              "Leadership assembly: member state leaders gather every two years at the Commonwealth Heads of Government Meeting (CHOGM) to discuss global challenges."
            ],
            visual: {
              kind: "map",
              title: "Commonwealth member countries",
              description: "Show a world map highlighting Commonwealth member countries across Africa, Asia, the Americas and Oceania, with a note: voluntary association, shared values."
            },
            tryThis: {
              question: "The Commonwealth is mainly an association of:",
              choices: ["Member countries cooperating together", "Only rivers", "Only deserts", "Only mountains"],
              correct: 0,
              explanation: "The Commonwealth is an association of member countries."
            }
          },
          {
            moduleId: "membership-functions-commonwealth",
            title: "Membership and functions of the Commonwealth",
            bigIdea: "Commonwealth membership is voluntary and based on shared values. Functions include promoting democracy, education, trade, sports, scholarships and development cooperation.",
            learnIt: [
              "Membership: countries apply to join voluntarily. Members are expected to uphold shared values: democracy, human rights, rule of law, good governance.",
              "Functions of the Commonwealth: promote democracy and good governance – election observation missions; promote education – Commonwealth Scholarships allow students to study in other member countries; promote trade – easier trade between member countries with common legal systems and English language; promote health and development – sharing best practices; promote youth empowerment and gender equality; organise the Commonwealth Games – a multi-sport event held every four years; provide technical assistance to small states.",
              "The Commonwealth is smaller than the UN and focuses more on practical cooperation, education and shared values than on global peacekeeping.",
              "Uganda has benefited from Commonwealth scholarships, election observation and trade links."
            ]
          },
          {
            moduleId: "challenges-un-commonwealth",
            title: "Challenges of the UN and the Commonwealth of Nations",
            bigIdea: "World organisations face challenges such as limited funds, conflicts, slow decision-making, powerful countries' interests, and failure by members to respect agreements – but they continue to help through relief, peacekeeping, education and development.",
            learnIt: [
              "Challenges faced by the UN: limited funds – many programmes depend on voluntary contributions from rich countries; conflicts and wars – the UN cannot always stop fighting, especially when Security Council permanent members disagree (veto power); powerful countries' interests – big powers sometimes ignore UN resolutions; slow decision-making – reaching agreement among nearly 200 countries takes time; refugee crises – wars and disasters create more refugees than agencies can support; climate disasters – floods, droughts and storms overwhelm relief capacity; failure by members to respect agreements – some countries do not follow UN resolutions or human rights commitments.",
              "Challenges faced by the Commonwealth: limited funds compared to the UN; no enforcement power – it can suspend members but cannot force compliance; political disagreements among members; some countries leave or threaten to leave; balancing diverse members from rich to poor countries.",
              "Despite challenges, world organisations help through: peacekeeping missions; humanitarian relief (food, medicine, shelter); health campaigns (vaccination, disease control); education programmes and scholarships; technical advice for development; human rights monitoring; climate action coordination.",
              "For PLE answers: always name the organisation, state its function correctly, and give one realistic challenge."
            ],
            examTip: "For organisation questions, match the organisation to its function. Write the full name at least once – do not only write the abbreviation. For challenges, give a specific example such as 'limited funds' or 'conflicts between member states'."
          }
        ]
      },
{
        subtopicId: "premium-organisation-casework",
        title: "Exam Summary: Africa and the World — High-Yield UNEB Points",
        modules: [
          {
            moduleId: "world-organisations-exam-summary",
            title: "15 Must-Know UNEB Facts about World Organisations",
            bigIdea: "Master these high-frequency exam facts about the UN, its agencies, the Commonwealth, and human rights.",
            learnIt: [
              "1. UNITED NATIONS (UN): Formed in 1945 after World War II. Headquarters: New York, USA. Replaced the League of Nations that failed to prevent WWII.",
              "2. UN objectives: Maintain international peace and security; Promote friendly relations among nations; Promote human rights; Promote economic and social cooperation.",
              "3. UN organs: General Assembly (all members, one vote each); Security Council (15 members, 5 permanent with veto power: USA, UK, France, Russia, China); International Court of Justice (The Hague); Secretariat (headed by Secretary-General).",
              "4. UN AGENCIES: UNICEF (children’s welfare, education, immunisation); WHO (health, disease control, vaccination); FAO (food and agriculture, fighting hunger); UNESCO (education, science, culture, World Heritage Sites); UNHCR (refugees — protection, shelter, resettlement); WFP (food assistance in emergencies).",
              "5. UNICEF = United Nations Children’s Fund. Works in Uganda on immunisation (polio, measles), education, child protection, and nutrition.",
              "6. WHO = World Health Organization. Coordinates global health responses (Ebola, COVID-19), sets health standards, supports vaccination campaigns.",
              "7. UNHCR = United Nations High Commissioner for Refugees. Protects millions of refugees in Africa fleeing war in South Sudan, Somalia, DRC, and other countries.",
              "8. HUMAN RIGHTS = basic freedoms and protections every person should enjoy: right to life, education, health, fair trial, freedom of religion, freedom of expression.",
              "9. The Universal Declaration of Human Rights was adopted by the UN in 1948. Rights go together with RESPONSIBILITIES (e.g., right to education → responsibility to study).",
              "10. COMMONWEALTH OF NATIONS: A voluntary association of countries, mostly former British colonies (including Uganda, Kenya, UK, India, Canada, Australia).",
              "11. Commonwealth functions: Promotes democracy, human rights, trade, educational scholarships (Commonwealth Scholarships), and sports (Commonwealth Games held every 4 years).",
              "12. CHOGM (Commonwealth Heads of Government Meeting): Leaders of member countries meet every 2 years to discuss global challenges. Uganda hosted CHOGM in 2007.",
              "13. Challenges facing the UN: Limited funds (dependent on rich countries’ contributions); Veto power disagreements (Security Council permanent members can block action); Conflicts where UN cannot intervene effectively.",
              "14. Challenges facing the Commonwealth: Limited funds; No enforcement power (can suspend members but cannot force compliance); Political disagreements among members.",
              "15. Despite challenges, world organisations help through: Peacekeeping missions, Humanitarian relief (food, medicine, shelter), Health campaigns (vaccination), Education (scholarships, literacy), Human rights monitoring."
            ],
            tryThis: {
              question: "Which UN agency is responsible for the welfare of children?",
              choices: ["UNICEF", "WHO", "FAO", "UNHCR"],
              correct: 0,
              explanation: "UNICEF (United Nations Children’s Fund) focuses on children’s welfare, health, education, and protection."
            }
          }
        ]
      }
    ],
    quiz: [
      { q: "The UN was formed in:", choices: ["1945", "1963", "2002", "1884"], correct: 0, why: "UN formed 1945 after WWII." },
      { q: "UN agency for children:", choices: ["UNICEF", "WHO", "FAO", "UNHCR"], correct: 0, why: "UNICEF supports children." },
      { q: "UN agency for health:", choices: ["WHO", "UNESCO", "UNHCR", "FAO"], correct: 0, why: "WHO is World Health Organization." },
      { q: "The Commonwealth is:", choices: ["Member countries cooperating", "Only rivers", "Only deserts", "Only mountains"], correct: 0, why: "Commonwealth is association of countries." },
    ],
  }
];


export const SOCIAL_TOPICS: Topic[] = balanceTopicAnswers(applyP7SocialHeavyV4(addUpperPrimarySocialV4(SOCIAL_TOPICS_DATA, "P7", P7_SOCIAL_TERMS)));

export function getSocialTopic(id: string): Topic | undefined {
  return SOCIAL_TOPICS.find((topic) => topic.id === id);
}
