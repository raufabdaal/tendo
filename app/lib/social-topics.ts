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
              "Africa is one of the continents of the world. In P7 Social Studies, learners study Africa's position on the world map, its countries, its regions and its relationship with the rest of the world.",
              "To locate Africa properly, use three map tools together: a world map or globe, compass directions, and major lines of latitude and longitude.",
              "A good location answer should not only say 'Africa is on the world map'. It should explain Africa's position using nearby continents, oceans, seas and major map lines.",
              "Examples: Europe is north of Africa. The Atlantic Ocean is west of Africa. The Indian Ocean is east of Africa. The Mediterranean Sea is north of Africa."
            ],
            tryThis: {
              question: "Which tools help a learner locate Africa on a world map?",
              choices: ["A globe, compass directions, latitudes and longitudes", "Only a ruler", "Only country flags", "Only rainfall figures"],
              correct: 0,
              explanation: "NCDC expects learners to use a globe/world map, compass directions, latitudes and longitudes to locate Africa."
            }
          },
          {
            moduleId: "latitude-longitude-position-keywords",
            title: "Latitude, Longitude and Position",
            bigIdea: "Latitude and longitude are map lines used to describe the position of places.",
            learnIt: [
              "Position means where a place is found. In map work, position can be described using direction words, nearby features, latitude and longitude.",
              "Lines of latitude run from west to east across a map. They help show how far north or south a place is from the Equator.",
              "Lines of longitude run from north to south on a map. They help show how far east or west a place is from the Prime Meridian.",
              "The Equator is the main line of latitude. The Prime Meridian is the main line of longitude. A learner should be able to tell the difference between these two types of lines."
            ],
            tryThis: {
              question: "Which statement correctly describes lines of latitude?",
              choices: ["They help show how far north or south a place is", "They are capital cities", "They are oceans around Africa", "They are types of vegetation"],
              correct: 0,
              explanation: "Latitude lines help show position north or south of the Equator."
            }
          },
          {
            moduleId: "equator-tropics-prime-meridian-africa",
            title: "Equator, Tropics and Prime Meridian",
            bigIdea: "Africa is crossed by important map lines that help learners describe its position accurately.",
            learnIt: [
              "The Equator is 0° latitude. It divides the earth into the Northern Hemisphere and Southern Hemisphere, and it crosses Africa.",
              "The Prime Meridian is 0° longitude. It divides the earth into the Eastern Hemisphere and Western Hemisphere, and it crosses western Africa.",
              "The Tropic of Cancer is an important latitude north of the Equator. The Tropic of Capricorn is an important latitude south of the Equator. Africa lies largely within the tropical region between these two tropics.",
              "When drawing a map for this topic, show Africa, the Equator, the Prime Meridian and, where required by the teacher, the two tropics. Label each line clearly."
            ],
            tryThis: {
              question: "Which line is 0° longitude?",
              choices: ["Prime Meridian", "Equator", "Tropic of Cancer", "Tropic of Capricorn"],
              correct: 0,
              explanation: "The Prime Meridian is 0° longitude. The Equator is 0° latitude."
            }
          },
          {
            moduleId: "locating-africa-compass-directions",
            title: "Locating Africa Using Compass Directions",
            bigIdea: "Compass directions help learners state where other continents, oceans and seas are from Africa.",
            learnIt: [
              "A compass direction tells where one place is from another. The four main compass directions are north, south, east and west.",
              "From Africa, Europe is to the north, Asia is to the north-east/east, the Atlantic Ocean is to the west, and the Indian Ocean is to the east/south-east. The Mediterranean Sea is north of Africa and the Red Sea is north-east of Africa.",
              "In P7, avoid one-word answers when explaining location. A strong answer names the place and gives its direction from Africa.",
              "Example: The Atlantic Ocean lies to the west of Africa. The Mediterranean Sea lies to the north of Africa."
            ],
            tryThis: {
              question: "Which water body lies west of Africa?",
              choices: ["Atlantic Ocean", "Indian Ocean", "Red Sea", "Arctic Ocean"],
              correct: 0,
              explanation: "The Atlantic Ocean lies to the west of Africa."
            }
          },
          {
            moduleId: "map-drawing-activity-africa-lines",
            title: "Map Drawing Activity: Africa, Regions and Lines",
            bigIdea: "NCDC expects learners to practise drawing maps and showing regions, latitudes and longitudes.",
            learnIt: [
              "Activity 1: Draw a simple outline map of Africa. Do not worry about making it perfect; focus on correct labels and position.",
              "Activity 2: Draw and label the Equator and Prime Meridian. If your teacher asks for them, also show the Tropic of Cancer and Tropic of Capricorn.",
              "Activity 3: Mark the main regions of Africa: West Africa, East Africa, Northern Africa, Central Africa, Southern Africa and the Horn of Africa.",
              "Activity 4: Use arrows to show directions of nearby water bodies and continents from Africa. For example, draw an arrow west to the Atlantic Ocean and north to Europe."
            ],
            tryThis: {
              question: "Which item should appear on a good P7 map of Africa for this topic?",
              choices: ["Regions, latitude lines and longitude lines", "Only football teams", "Only rainfall bars", "Only animal drawings"],
              correct: 0,
              explanation: "The assessment competence includes drawing Africa showing regions, lines of latitude and lines of longitude."
            }
          }
        ]
      },
      {
        subtopicId: "world-continents-sizes",
        title: "2. World continents and their sizes",
        modules: [
          {
            moduleId: "world-continents-meaning-types",
            title: "World Continents and Their Types",
            bigIdea: "A continent is a very large landmass on the earth's surface, and continents may be inhabited or uninhabited.",
            learnIt: [
              "### World Continents and Their Sizes",
              "<strong class=\"kw\">Continent</strong>:",
              "Is a massive, continuous landmass on the earth's surface separated from others by vast oceans.",
              "<strong class=\"kw\">Types:</strong>",
              "* <strong class=\"kw\">Inhabited continents</strong> permanently support human settlement and population.",
              "* <strong class=\"kw\">Uninhabited continents</strong> do not permanently support human life.",
              "<strong class=\"kw\">Inhabited continents</strong>:",
              "Are continents that permanently support human settlement and population due to favorable climate and resources.",
              "<strong class=\"kw\">Uninhabited continents</strong>:",
              "Are continents that do not support permanent human life due to extreme weather conditions like freezing cold.",
              "<strong class=\"kw\">Examples:</strong>",
              "* <strong class=\"kw\">Asia</strong> is the largest continent.",
              "* <strong class=\"kw\">Africa</strong> is the second-largest continent.",
              "* <strong class=\"kw\">North America</strong> is the third-largest continent.",
              "* <strong class=\"kw\">South America</strong> is the fourth-largest continent.",
              "* <strong class=\"kw\">Antarctica</strong> is the fifth-largest continent and is uninhabited.",
              "* <strong class=\"kw\">Europe</strong> is the sixth-largest continent.",
              "* <strong class=\"kw\">Australia</strong> is the smallest continent."
            ],
            tryThis: {
              question: "What is a continent?",
              choices: ["A massive continuous landmass separated from others by vast oceans", "A small lake surrounded by land", "A type of weather condition", "A group of villages in one district"],
              correct: 0,
              explanation: "A continent is a massive, continuous landmass on the earth's surface separated from others by vast oceans."
            }
          },
          {
            moduleId: "continents-uses-importance",
            title: "Uses, Importances, Advantages and Disadvantages of Continents",
            bigIdea: "Continents provide land, resources and habitats, but they also experience challenges such as natural disasters and unequal resource distribution.",
            learnIt: [
              "### Uses, Importances, Advantages and Disadvantages",
              "<strong class=\"kw\">Uses:</strong>",
              "* <strong class=\"kw\">Settlement</strong> provides land for human settlement and urbanization.",
              "* <strong class=\"kw\">Agriculture</strong> offers fertile grounds for growing food crops.",
              "* <strong class=\"kw\">Mining</strong> supplies mineral resources for economic growth.",
              "* <strong class=\"kw\">Habitats</strong> host diverse wildlife and vegetation.",
              "<strong class=\"kw\">Importances:</strong>",
              "* <strong class=\"kw\">Political boundaries</strong> define different sovereign nations.",
              "* <strong class=\"kw\">Climate patterns</strong> are influenced by geographic positioning.",
              "* <strong class=\"kw\">Trade unions</strong> are fostered among neighboring countries.",
              "<strong class=\"kw\">Advantages:</strong>",
              "* <strong class=\"kw\">Terrestrial ecosystems</strong> get a stable foundation to thrive.",
              "* <strong class=\"kw\">Raw materials</strong> power manufacturing industries.",
              "* <strong class=\"kw\">Geographical mapping</strong> and population tracking become simpler.",
              "<strong class=\"kw\">Disadvantages:</strong>",
              "* <strong class=\"kw\">Tectonic movements</strong> cause destructive natural disasters like earthquakes.",
              "* <strong class=\"kw\">Unequal resource distribution</strong> leads to regional geopolitical conflicts.",
              "* <strong class=\"kw\">Mountainous terrains</strong> hinder smooth overland transportation networks."
            ],
            tryThis: {
              question: "Which use of continents is connected to growing food crops?",
              choices: ["Agriculture", "Tectonic movement", "Geopolitical conflict", "Mountainous terrain"],
              correct: 0,
              explanation: "Agriculture uses fertile land on continents to grow food crops."
            }
          },
          {
            moduleId: "continental-size-ranking",
            title: "Continental Size Ranking",
            bigIdea: "Continental size ranking arranges continents from the largest landmass to the smallest landmass.",
            learnIt: [
              "### Continental Size Ranking",
              "<strong class=\"kw\">Continental size ranking</strong>:",
              "Is the sequential arrangement of landmasses from the largest total surface area to the smallest.",
              "<strong class=\"kw\">Types:</strong>",
              "* <strong class=\"kw\">Largest continent</strong> is Asia.",
              "* <strong class=\"kw\">Smallest continent</strong> is Australia.",
              "<strong class=\"kw\">Largest continent</strong>:",
              "Is Asia, covering about 30% of the total land area of the earth.",
              "<strong class=\"kw\">Smallest continent</strong>:",
              "Is Australia, also called Oceania, which is the smallest individual continental mainland.",
              "<strong class=\"kw\">Examples:</strong>",
              "* <strong class=\"kw\">Asia</strong> is the 1st largest continent.",
              "* <strong class=\"kw\">Africa</strong> is the 2nd largest continent.",
              "* <strong class=\"kw\">North America</strong> is the 3rd largest continent.",
              "* <strong class=\"kw\">South America</strong> is the 4th largest continent.",
              "* <strong class=\"kw\">Antarctica</strong> is the 5th largest continent.",
              "* <strong class=\"kw\">Europe</strong> is the 6th largest continent.",
              "* <strong class=\"kw\">Australia</strong> is the 7th largest continent.",
              "<strong class=\"kw\">Uses:</strong>",
              "* <strong class=\"kw\">Land area data</strong> is allocated using continent size.",
              "* <strong class=\"kw\">Population expansion</strong> is studied using continental land space.",
              "<strong class=\"kw\">Importances:</strong>",
              "* <strong class=\"kw\">Biodiversity</strong> is often greater in larger continents.",
              "* <strong class=\"kw\">Resource potential</strong> is linked to continental land area.",
              "<strong class=\"kw\">Advantages:</strong>",
              "* <strong class=\"kw\">Large continents</strong> provide extensive agricultural spaces.",
              "* <strong class=\"kw\">Small continents</strong> make administrative governance easier across regions.",
              "<strong class=\"kw\">Disadvantages:</strong>",
              "* <strong class=\"kw\">Massive continents</strong> experience extreme climatic isolation in interior regions.",
              "* <strong class=\"kw\">Smaller continents</strong> suffer rapid resource depletion due to high density."
            ],
            workedExample: {
              question: "Arrange Africa, Asia, Europe and Australia from largest to smallest.",
              steps: [
                "Asia is the largest continent.",
                "Africa is the second-largest continent.",
                "Europe is the sixth-largest continent.",
                "Australia is the smallest continent."
              ],
              answer: "Asia, Africa, Europe, Australia."
            },
            tryThis: {
              question: "Which continent is the second-largest in the world?",
              choices: ["Africa", "Asia", "Europe", "Australia"],
              correct: 0,
              explanation: "Africa is the second-largest continent in the world after Asia."
            }
          },
          {
            moduleId: "world-continents-exam-summary",
            title: "General Exam Summary Points",
            bigIdea: "UNEB questions often test the order of continents, special continent facts, and common traps such as Greenland and Australia.",
            learnIt: [
              "### General Exam Summary Points",
              "<strong class=\"kw\">General exam summary points</strong>:",
              "Are key facts about world continents and their sizes that learners should remember for UNEB Social Studies questions.",
              "<strong class=\"kw\">Examples:</strong>",
              "* <strong class=\"kw\">Africa</strong> is the second-largest continent in the world after Asia.",
              "* <strong class=\"kw\">Asia</strong> is the largest continent by total surface area and human population.",
              "* <strong class=\"kw\">Australia</strong> is completely surrounded by water and is called an island continent.",
              "* <strong class=\"kw\">Antarctica</strong> is the coldest, windiest and driest continent.",
              "* <strong class=\"kw\">Antarctica</strong> is the only completely uninhabited continent.",
              "* <strong class=\"kw\">Ice sheets</strong> cover over 98% of Antarctica.",
              "* <strong class=\"kw\">Antarctica</strong> holds about 70% of the world's fresh water supply.",
              "* <strong class=\"kw\">Eurasia</strong> is the combined continuous landmass of Europe and Asia.",
              "* <strong class=\"kw\">Ural Mountains</strong> separate Europe from Asia.",
              "* <strong class=\"kw\">Africa</strong> has the highest number of independent countries, with 54 nations.",
              "* <strong class=\"kw\">Algeria</strong> is the largest country in Africa by total land area.",
              "* <strong class=\"kw\">Seychelles</strong> is the smallest country in Africa.",
              "* <strong class=\"kw\">Greenland</strong> is the largest island in the world but is not a continent.",
              "* <strong class=\"kw\">Equator</strong> passes through South America, Africa and Asia.",
              "* <strong class=\"kw\">Continental drift</strong> slowly moves continents over millions of years.",
              "* <strong class=\"kw\">Pangaea</strong> was the ancient single supercontinent.",
              "* <strong class=\"kw\">Southern Ocean</strong> entirely surrounds Antarctica at the South Pole.",
              "<strong class=\"kw\">UNEB Exam Trap:</strong>",
              "* <strong class=\"kw\">Greenland</strong> is an island, not a continent.",
              "* <strong class=\"kw\">Australia</strong> is a continent even though it is surrounded by water.",
              "* <strong class=\"kw\">Antarctica</strong> is uninhabited because of extreme cold."
            ],
            tryThis: {
              question: "Which statement is a UNEB exam trap?",
              choices: ["Greenland is the largest island but not a continent", "Africa is the smallest continent", "Asia is smaller than Europe", "Antarctica is densely populated"],
              correct: 0,
              explanation: "Greenland is the largest island in the world, but it is not a continent."
            }
          }
        ]
      },
      {
        subtopicId: "water-bodies-africa",
        title: "3. Water bodies that surround Africa",
        modules: [
          {
            moduleId: "water-bodies-meaning-types",
            title: "Water Bodies That Surround Africa",
            bigIdea: "Water bodies around Africa include oceans, seas, gulfs and channels that border the continent and connect it to world trade routes.",
            learnIt: [
              "### Water Bodies That Surround Africa",
              "<strong class=\"kw\">Water body</strong>:",
              "Are large expanses of water such as oceans, seas, gulfs and channels that border and isolate a continental landmass.",
              "<strong class=\"kw\">Types:</strong>",
              "* <strong class=\"kw\">Oceans</strong> are vast bodies of salt water that separate continents.",
              "* <strong class=\"kw\">Seas</strong> are smaller salt-water bodies partly surrounded by land.",
              "<strong class=\"kw\">Oceans</strong>:",
              "Are vast bodies of salt water that cover the majority of the earth's surface and separate entire continents.",
              "<strong class=\"kw\">Seas</strong>:",
              "Are large bodies of salt water that are smaller than oceans and are partly surrounded by land.",
              "<strong class=\"kw\">Examples:</strong>",
              "* <strong class=\"kw\">Atlantic Ocean</strong> borders Africa in the west.",
              "* <strong class=\"kw\">Indian Ocean</strong> borders Africa in the east and southeast.",
              "* <strong class=\"kw\">Mediterranean Sea</strong> borders Africa in the north.",
              "* <strong class=\"kw\">Red Sea</strong> borders Africa in the northeast."
            ],
            tryThis: {
              question: "Which water body borders Africa in the west?",
              choices: ["Atlantic Ocean", "Indian Ocean", "Red Sea", "Mediterranean Sea"],
              correct: 0,
              explanation: "The Atlantic Ocean borders Africa in the west."
            }
          },
          {
            moduleId: "water-bodies-uses-importance",
            title: "Uses, Importances, Advantages and Disadvantages of Water Bodies",
            bigIdea: "Water bodies support trade, fishing, energy and climate regulation, but they also create risks such as storms, piracy and salt-water limitations.",
            learnIt: [
              "### Uses, Importances, Advantages and Disadvantages",
              "<strong class=\"kw\">Uses:</strong>",
              "* <strong class=\"kw\">Shipping routes</strong> support global maritime trade.",
              "* <strong class=\"kw\">Fishing grounds</strong> support commercial marine fishing.",
              "* <strong class=\"kw\">Offshore extraction</strong> supports oil and gas production from the seabed.",
              "* <strong class=\"kw\">Tidal energy</strong> and wave power can generate electricity.",
              "<strong class=\"kw\">Importances:</strong>",
              "* <strong class=\"kw\">Coastal climate</strong> is regulated through maritime winds.",
              "* <strong class=\"kw\">Natural barriers</strong> defend some coastal nations.",
              "* <strong class=\"kw\">Evaporation</strong> supplies water vapor needed for rainfall formation.",
              "<strong class=\"kw\">Advantages:</strong>",
              "* <strong class=\"kw\">Cheap transport</strong> carries heavy international cargo.",
              "* <strong class=\"kw\">Coastal tourism</strong> grows through beaches and marine resorts.",
              "* <strong class=\"kw\">Marine life</strong> supports food security.",
              "<strong class=\"kw\">Disadvantages:</strong>",
              "* <strong class=\"kw\">Tropical cyclones</strong> and tsunamis destroy marine environments.",
              "* <strong class=\"kw\">Saltwater</strong> cannot be used directly for irrigation without desalination.",
              "* <strong class=\"kw\">Deep waters</strong> can hide maritime security threats like piracy."
            ],
            tryThis: {
              question: "Which process supplies water vapour for rainfall formation?",
              choices: ["Evaporation", "Earthquake", "Mining", "Desalination"],
              correct: 0,
              explanation: "Evaporation from water bodies supplies water vapour needed for rainfall formation."
            }
          },
          {
            moduleId: "marine-gateways-channels",
            title: "Marine Gateways and Channels",
            bigIdea: "Marine gateways and channels connect larger water bodies and shorten trade routes around Africa.",
            learnIt: [
              "### Marine Gateways and Channels",
              "<strong class=\"kw\">Marine gateway</strong>:",
              "Is a narrow waterway consisting of straits, canals or channels that connects two larger bodies of water around Africa.",
              "<strong class=\"kw\">Types:</strong>",
              "* <strong class=\"kw\">Natural straits</strong> are naturally formed narrow water passages.",
              "* <strong class=\"kw\">Artificial canals</strong> are man-made channels dug for ships.",
              "<strong class=\"kw\">Natural straits</strong>:",
              "Are naturally formed, narrow water passages that connect two large seas or oceans.",
              "<strong class=\"kw\">Artificial canals</strong>:",
              "Are man-made water channels excavated to allow ships to pass directly between two water bodies to shorten trade routes.",
              "<strong class=\"kw\">Examples:</strong>",
              "* <strong class=\"kw\">Strait of Gibraltar</strong> connects the Atlantic Ocean to the Mediterranean Sea.",
              "* <strong class=\"kw\">Suez Canal</strong> connects the Mediterranean Sea to the Red Sea.",
              "* <strong class=\"kw\">Mozambique Channel</strong> separates Madagascar from mainland Africa.",
              "* <strong class=\"kw\">Strait of Bab-el-Mandeb</strong> connects the Red Sea to the Gulf of Aden."
            ],
            tryThis: {
              question: "Which marine gateway is man-made?",
              choices: ["Suez Canal", "Strait of Gibraltar", "Mozambique Channel", "Strait of Bab-el-Mandeb"],
              correct: 0,
              explanation: "The Suez Canal is an artificial, man-made waterway in Egypt."
            }
          },
          {
            moduleId: "marine-gateways-uses-importance",
            title: "Uses and Importance of Marine Gateways",
            bigIdea: "Marine gateways are strategic routes for shipping, naval monitoring and regional trade.",
            learnIt: [
              "### Uses and Importance of Marine Gateways",
              "<strong class=\"kw\">Uses:</strong>",
              "* <strong class=\"kw\">Shipping distance</strong> is shortened between Europe, Africa and Asia.",
              "* <strong class=\"kw\">Naval monitoring</strong> is supported at strategic checkpoints.",
              "* <strong class=\"kw\">Regional trade</strong> moves through localized transit routes.",
              "<strong class=\"kw\">Importances:</strong>",
              "* <strong class=\"kw\">Global trade volume</strong> is controlled through narrow gateways.",
              "* <strong class=\"kw\">Transit revenue</strong> is earned through toll fees in countries like Egypt.",
              "<strong class=\"kw\">Advantages:</strong>",
              "* <strong class=\"kw\">Fuel consumption</strong> is reduced for cargo ships.",
              "* <strong class=\"kw\">Coastal ports</strong> grow into commercial business hubs.",
              "<strong class=\"kw\">Disadvantages:</strong>",
              "* <strong class=\"kw\">Political conflicts</strong> can block shipping bottlenecks.",
              "* <strong class=\"kw\">Congestion</strong> increases collision and blockage risks."
            ],
            tryThis: {
              question: "Why is the Suez Canal important for shipping?",
              choices: ["It shortens sea routes between Europe and East Africa or Asia", "It is the largest ocean", "It separates Africa from Europe in the northwest", "It is a fishing lake"],
              correct: 0,
              explanation: "The Suez Canal shortens maritime routes by linking the Mediterranean Sea to the Red Sea."
            }
          },
          {
            moduleId: "water-bodies-exam-summary",
            title: "General Exam Summary Points",
            bigIdea: "UNEB questions often test the direction of water bodies around Africa and the difference between natural and artificial waterways.",
            learnIt: [
              "### General Exam Summary Points",
              "<strong class=\"kw\">General exam summary points</strong>:",
              "Are key facts about water bodies surrounding Africa that learners should remember for UNEB Social Studies questions.",
              "<strong class=\"kw\">Examples:</strong>",
              "* <strong class=\"kw\">Mediterranean Sea</strong> borders Africa in the north and separates Africa from Europe.",
              "* <strong class=\"kw\">Red Sea</strong> borders Africa in the northeast and separates Africa from Asia.",
              "* <strong class=\"kw\">Indian Ocean</strong> borders Africa in the east and southeast.",
              "* <strong class=\"kw\">Atlantic Ocean</strong> borders Africa in the west.",
              "* <strong class=\"kw\">Suez Canal</strong> is a man-made waterway in Egypt.",
              "* <strong class=\"kw\">Strait of Gibraltar</strong> connects the Atlantic Ocean to the Mediterranean Sea.",
              "* <strong class=\"kw\">Strait of Bab-el-Mandeb</strong> connects the Red Sea to the Gulf of Aden.",
              "* <strong class=\"kw\">Mozambique Channel</strong> separates Madagascar from mainland Africa.",
              "* <strong class=\"kw\">Cape Agulhas</strong> is near where the Atlantic and Indian Oceans meet.",
              "* <strong class=\"kw\">Gulf of Guinea</strong> is a major inlet of the Atlantic Ocean in West Africa.",
              "* <strong class=\"kw\">Benguela Current</strong> causes dry conditions on the southwestern coast.",
              "* <strong class=\"kw\">Mombasa</strong> is a key Kenyan port used by landlocked countries like Uganda.",
              "<strong class=\"kw\">UNEB Exam Trap:</strong>",
              "* <strong class=\"kw\">Suez Canal</strong> is artificial, but the Strait of Gibraltar is natural.",
              "* <strong class=\"kw\">Dar es Salaam</strong> and Mombasa are coastal trade cities, not oceans.",
              "* <strong class=\"kw\">Landlocked countries</strong> rely on coastal ports to access world oceans."
            ],
            tryThis: {
              question: "Which statement is correct?",
              choices: ["The Suez Canal is artificial and the Strait of Gibraltar is natural", "The Suez Canal is a natural strait", "The Red Sea borders western Africa", "The Atlantic Ocean borders eastern Africa"],
              correct: 0,
              explanation: "The Suez Canal is man-made, while the Strait of Gibraltar is a natural water passage."
            }
          }
        ]
      },
      {
        subtopicId: "regions-africa",
        title: "4. Regions that make up Africa",
        modules: [
          {
            moduleId: "regions-meaning-types",
            title: "Regions That Make Up Africa",
            bigIdea: "A region is a division of a continent made by grouping countries according to location, climate, culture or history.",
            learnIt: [
              "### Regions That Make Up Africa",
              "<strong class=\"kw\">Region</strong>:",
              "Is a geographical division of a continent consisting of countries grouped together based on their location, climate, culture or historical backgrounds.",
              "<strong class=\"kw\">Types:</strong>",
              "* <strong class=\"kw\">Geographical regions</strong> group countries by compass direction or physical position.",
              "* <strong class=\"kw\">Political regions</strong> group countries by administrative or treaty arrangements.",
              "<strong class=\"kw\">Geographical regions</strong>:",
              "Are divisions based strictly on the compass direction or physical boundaries where countries lie on the continent.",
              "<strong class=\"kw\">Political regions</strong>:",
              "Are divisions based on administrative alignments or shared regional governance and political treaties.",
              "<strong class=\"kw\">Examples:</strong>",
              "* <strong class=\"kw\">North Africa</strong> is a main region of Africa.",
              "* <strong class=\"kw\">East Africa</strong> is the region where Uganda belongs.",
              "* <strong class=\"kw\">Central Africa</strong> includes the Congo Basin area.",
              "* <strong class=\"kw\">West Africa</strong> lies on the western side of Africa.",
              "* <strong class=\"kw\">South Africa</strong> or Southern Africa lies in the southern part of Africa."
            ],
            tryThis: {
              question: "Which region does Uganda belong to?",
              choices: ["East Africa", "North Africa", "West Africa", "South America"],
              correct: 0,
              explanation: "Uganda belongs to the East African region."
            }
          },
          {
            moduleId: "regions-uses-importance",
            title: "Uses, Importances, Advantages and Disadvantages of Regions",
            bigIdea: "Regions make Africa easier to study, govern, trade within and coordinate across borders.",
            learnIt: [
              "### Uses, Importances, Advantages and Disadvantages",
              "<strong class=\"kw\">Uses:</strong>",
              "* <strong class=\"kw\">African Union operations</strong> are organized through regions.",
              "* <strong class=\"kw\">Regional trade networks</strong> are planned through regions.",
              "* <strong class=\"kw\">Climate studies</strong> compare environmental patterns across regions.",
              "* <strong class=\"kw\">Security coordination</strong> handles cross-border threats.",
              "<strong class=\"kw\">Importances:</strong>",
              "* <strong class=\"kw\">Regional unity</strong> grows among neighboring countries.",
              "* <strong class=\"kw\">Geographical study</strong> becomes simpler for learners.",
              "* <strong class=\"kw\">International aid</strong> is guided by regional needs.",
              "<strong class=\"kw\">Advantages:</strong>",
              "* <strong class=\"kw\">Resource management</strong> becomes more efficient between neighbors.",
              "* <strong class=\"kw\">Bargaining power</strong> strengthens in international trade.",
              "* <strong class=\"kw\">Cultural exchange</strong> is promoted among related communities.",
              "<strong class=\"kw\">Disadvantages:</strong>",
              "* <strong class=\"kw\">Uneven economic growth</strong> causes migration pressure.",
              "* <strong class=\"kw\">Cross-border conflicts</strong> can spill into neighboring countries.",
              "* <strong class=\"kw\">Language barriers</strong> hinder smooth regional integration."
            ],
            tryThis: {
              question: "Which use of regions is connected to cross-border threats?",
              choices: ["Coordinating regional defense and security operations", "Naming the seven continents", "Calculating longitude time", "Finding the smallest island"],
              correct: 0,
              explanation: "Regions help countries coordinate defense and security against cross-border threats."
            }
          },
          {
            moduleId: "main-regions-exam-summary",
            title: "General Exam Summary Points",
            bigIdea: "Africa is commonly divided into five main geographical regions recognized for study and administration.",
            learnIt: [
              "### General Exam Summary Points",
              "<strong class=\"kw\">General exam summary points</strong>:",
              "Are key facts about Africa's regions that learners should remember for UNEB Social Studies questions.",
              "<strong class=\"kw\">Examples:</strong>",
              "* <strong class=\"kw\">Africa</strong> has five main regions: North, East, West, Central and South Africa.",
              "* <strong class=\"kw\">West Africa</strong> contains the highest number of countries.",
              "* <strong class=\"kw\">North Africa</strong> is the largest region by land area.",
              "* <strong class=\"kw\">North Africa</strong> is strongly influenced by the Sahara Desert and Arabic-speaking populations.",
              "* <strong class=\"kw\">East Africa</strong> is famous for the Rift Valley, high mountains and Lake Victoria.",
              "* <strong class=\"kw\">Central Africa</strong> has large equatorial rainforests and the River Congo system.",
              "* <strong class=\"kw\">Southern Africa</strong> is rich in minerals like gold and diamonds.",
              "* <strong class=\"kw\">Horn of Africa</strong> includes Somalia, Ethiopia, Eritrea and Djibouti.",
              "* <strong class=\"kw\">Equatorial Guinea</strong> is geographically in Central Africa.",
              "* <strong class=\"kw\">Seychelles, Comoros and Mauritius</strong> are grouped under East Africa for administrative mapping.",
              "* <strong class=\"kw\">Cape Verde</strong> is clustered under West Africa.",
              "* <strong class=\"kw\">ECOWAS</strong> is a regional economic community in West Africa.",
              "* <strong class=\"kw\">EAC</strong> is a regional economic community in East Africa.",
              "* <strong class=\"kw\">Sahara Desert</strong> separates North Africa from much of Sub-Saharan Africa.",
              "* <strong class=\"kw\">Uganda</strong> belongs to East Africa and supports landlocked neighbors like South Sudan and Rwanda.",
              "<strong class=\"kw\">UNEB Exam Trap:</strong>",
              "* <strong class=\"kw\">South Africa</strong> can mean one country or the southern region depending on the question.",
              "* <strong class=\"kw\">Equatorial Guinea</strong> is in Central Africa despite the word Equatorial.",
              "* <strong class=\"kw\">Island nations</strong> may be grouped regionally for administrative mapping."
            ],
            tryThis: {
              question: "Which region has the highest number of countries?",
              choices: ["West Africa", "East Africa", "Southern Africa", "Central Africa"],
              correct: 0,
              explanation: "West Africa contains the highest number of countries of any African region."
            }
          }
        ]
      },
      {
        subtopicId: "countries-capitals-africa",
        title: "5. Countries in each region and their capital cities",
        modules: [
          {
            moduleId: "capital-cities-meaning-types",
            title: "Countries in Each Region and Their Capital Cities",
            bigIdea: "A capital city is the administrative centre of a country where government offices and ministries are located.",
            learnIt: [
              "### Countries in Each Region and Their Capital Cities",
              "<strong class=\"kw\">Capital city</strong>:",
              "Is the administrative center or seat of government of an independent country where head offices and ministries are located.",
              "<strong class=\"kw\">Types:</strong>",
              "* <strong class=\"kw\">Coastal capitals</strong> are located along ocean shores.",
              "* <strong class=\"kw\">Inland capitals</strong> are located inside the mainland away from ocean coasts.",
              "<strong class=\"kw\">Coastal capitals</strong>:",
              "Are capital cities located directly along the ocean shores which often serve as major maritime ports.",
              "<strong class=\"kw\">Inland capitals</strong>:",
              "Are capital cities located deep within the interior of the mainland away from any ocean coastlines.",
              "<strong class=\"kw\">Examples:</strong>",
              "* <strong class=\"kw\">Kampala</strong> is the capital city of Uganda.",
              "* <strong class=\"kw\">Nairobi</strong> is the capital city of Kenya.",
              "* <strong class=\"kw\">Dodoma</strong> is the capital city of Tanzania.",
              "* <strong class=\"kw\">Cairo</strong> is the capital city of Egypt.",
              "* <strong class=\"kw\">Abuja</strong> is the capital city of Nigeria.",
              "* <strong class=\"kw\">Kinshasa</strong> is the capital city of DRC."
            ],
            tryThis: {
              question: "What is the capital city of Uganda?",
              choices: ["Kampala", "Nairobi", "Dodoma", "Abuja"],
              correct: 0,
              explanation: "Kampala is the capital city of Uganda."
            }
          },
          {
            moduleId: "capital-cities-uses-importance",
            title: "Uses, Importances, Advantages and Disadvantages of Capital Cities",
            bigIdea: "Capital cities centralize government work, diplomacy, security and national administration.",
            learnIt: [
              "### Uses, Importances, Advantages and Disadvantages",
              "<strong class=\"kw\">Uses:</strong>",
              "* <strong class=\"kw\">Embassies</strong> and diplomatic missions are hosted in capital cities.",
              "* <strong class=\"kw\">National administration</strong> is coordinated from capital cities.",
              "* <strong class=\"kw\">Parliamentary buildings</strong> and state houses are often located in capital cities.",
              "* <strong class=\"kw\">Financial services</strong> and commercial activities often concentrate in capital cities.",
              "<strong class=\"kw\">Importances:</strong>",
              "* <strong class=\"kw\">Governance</strong> is centralized in a sovereign country.",
              "* <strong class=\"kw\">International entry</strong> is supported through national airports.",
              "* <strong class=\"kw\">Regional security</strong> is coordinated with neighboring states.",
              "<strong class=\"kw\">Advantages:</strong>",
              "* <strong class=\"kw\">Communication</strong> between the head of state and ministries becomes easier.",
              "* <strong class=\"kw\">Foreign investment</strong> and business headquarters are attracted.",
              "* <strong class=\"kw\">Urban development</strong> and infrastructure grow at a central point.",
              "<strong class=\"kw\">Disadvantages:</strong>",
              "* <strong class=\"kw\">Rural-urban migration</strong> increases due to high centralization.",
              "* <strong class=\"kw\">Overpopulation</strong> causes traffic congestion and slum growth.",
              "* <strong class=\"kw\">Conflict risk</strong> rises because capitals are major targets during unrest."
            ],
            tryThis: {
              question: "Which institution is commonly found in a capital city?",
              choices: ["Parliament", "Fishing net", "Coral reef", "Desert dune"],
              correct: 0,
              explanation: "Parliamentary buildings are often found in capital cities."
            }
          },
          {
            moduleId: "landlocked-coastal-countries",
            title: "Landlocked and Coastal Countries",
            bigIdea: "Landlocked countries have no direct ocean coast, while coastal countries have direct access to an ocean or sea.",
            learnIt: [
              "### Landlocked vs Coastal Countries",
              "<strong class=\"kw\">Landlocked country</strong>:",
              "Is a country that is completely surrounded by land and has no direct access to an ocean coast.",
              "<strong class=\"kw\">Types:</strong>",
              "* <strong class=\"kw\">Landlocked nations</strong> depend on maritime neighbors for sea trade.",
              "* <strong class=\"kw\">Coastal nations</strong> have direct shoreline access to oceans or seas.",
              "<strong class=\"kw\">Landlocked nations</strong>:",
              "Are countries that depend entirely on maritime neighbors to access world sea trade routes.",
              "<strong class=\"kw\">Coastal nations</strong>:",
              "Are countries that possess a direct shoreline boundary along an ocean or open sea.",
              "<strong class=\"kw\">Examples:</strong>",
              "* <strong class=\"kw\">Uganda</strong> is a landlocked country.",
              "* <strong class=\"kw\">Ethiopia</strong> is a landlocked country.",
              "* <strong class=\"kw\">Mombasa</strong> is a coastal port in Kenya.",
              "* <strong class=\"kw\">Dar es Salaam</strong> is a coastal port in Tanzania.",
              "<strong class=\"kw\">Uses:</strong>",
              "* <strong class=\"kw\">Transport corridors</strong> are planned for imports and exports.",
              "* <strong class=\"kw\">Customs exemptions</strong> are planned for transit cargo.",
              "<strong class=\"kw\">Importances:</strong>",
              "* <strong class=\"kw\">Import costs</strong> are influenced in interior countries.",
              "* <strong class=\"kw\">Diplomatic relationships</strong> are shaped between landlocked and coastal neighbors.",
              "<strong class=\"kw\">Advantages:</strong>",
              "* <strong class=\"kw\">Coastal countries</strong> collect transit revenue from neighbors' goods.",
              "* <strong class=\"kw\">Coastal countries</strong> enjoy cheaper international shipping costs.",
              "<strong class=\"kw\">Disadvantages:</strong>",
              "* <strong class=\"kw\">Landlocked countries</strong> suffer high transport costs.",
              "* <strong class=\"kw\">Landlocked countries</strong> face delays at transit neighbors' ports."
            ],
            tryThis: {
              question: "Which country is landlocked?",
              choices: ["Uganda", "Kenya", "Tanzania", "Somalia"],
              correct: 0,
              explanation: "Uganda is landlocked because it has no direct access to an ocean coast."
            }
          },
          {
            moduleId: "countries-capitals-exam-summary",
            title: "General Exam Summary Points",
            bigIdea: "UNEB questions often test capital cities, changed capitals, landlocked countries and major coastal ports.",
            learnIt: [
              "### General Exam Summary Points",
              "<strong class=\"kw\">General exam summary points</strong>:",
              "Are key facts about African countries and capital cities that learners should remember for UNEB Social Studies questions.",
              "<strong class=\"kw\">Examples:</strong>",
              "* <strong class=\"kw\">Uganda</strong> is landlocked and its capital city is Kampala.",
              "* <strong class=\"kw\">Mombasa</strong> is a Kenyan port used by Uganda for sea trade.",
              "* <strong class=\"kw\">Tanzania</strong> moved its capital from Dar es Salaam to Dodoma.",
              "* <strong class=\"kw\">Nigeria</strong> moved its capital from Lagos to Abuja.",
              "* <strong class=\"kw\">Cairo</strong> is the capital city of Egypt.",
              "* <strong class=\"kw\">Addis Ababa</strong> is the capital city of Ethiopia and AU headquarters.",
              "* <strong class=\"kw\">South Sudan</strong> became independent in 2011 and its capital is Juba.",
              "* <strong class=\"kw\">Gitega</strong> is the political capital of Burundi.",
              "* <strong class=\"kw\">Bujumbura</strong> remains Burundi's main economic center.",
              "* <strong class=\"kw\">Kinshasa</strong> is the capital city of DRC.",
              "* <strong class=\"kw\">Brazzaville</strong> is the capital city of Congo Republic.",
              "* <strong class=\"kw\">Pretoria</strong> is the administrative capital of South Africa.",
              "* <strong class=\"kw\">Asmara</strong> is the capital city of Eritrea.",
              "* <strong class=\"kw\">Yamoussoukro</strong> is the political capital of Ivory Coast.",
              "* <strong class=\"kw\">Victoria</strong> is the capital city of Seychelles.",
              "* <strong class=\"kw\">Khartoum</strong> is where the White Nile and Blue Nile meet.",
              "* <strong class=\"kw\">Mali, Niger and Burkina Faso</strong> are landlocked West African countries.",
              "<strong class=\"kw\">UNEB Exam Trap:</strong>",
              "* <strong class=\"kw\">Mombasa</strong> is a port city, not the capital of Kenya.",
              "* <strong class=\"kw\">Dar es Salaam</strong> is a major port, not the current capital of Tanzania.",
              "* <strong class=\"kw\">Abidjan</strong> is a commercial port city, not the official political capital of Ivory Coast."
            ],
            tryThis: {
              question: "Which city is the current capital of Tanzania?",
              choices: ["Dodoma", "Dar es Salaam", "Mombasa", "Nairobi"],
              correct: 0,
              explanation: "Dodoma is the current capital city of Tanzania."
            }
          }
        ]
      },
      {
        subtopicId: "premium-map-answering",
        title: "Premium Exam Practice: Map Location Answers",
        modules: [
          {
            moduleId: "map-location-answer-structure",
            title: "Writing Accurate Map Location Answers",
            bigIdea: "A strong map-location answer uses direction, nearby continents, oceans, seas and major imaginary lines.",
            learnIt: [
              "### Premium Exam Practice: Map Location Answers",
              "<strong class=\"kw\">Map location answer</strong>:",
              "Is a clear sentence that describes where a place is found using direction, nearby features and important map lines.",
              "<strong class=\"kw\">Types:</strong>",
              "* <strong class=\"kw\">Absolute map answer</strong> uses latitudes and longitudes.",
              "* <strong class=\"kw\">Relative map answer</strong> uses nearby continents, oceans and seas.",
              "* <strong class=\"kw\">Combined map answer</strong> uses both coordinates and nearby features.",
              "<strong class=\"kw\">Absolute map answer</strong>:",
              "Is an answer that locates a place using lines of latitude and longitude.",
              "<strong class=\"kw\">Relative map answer</strong>:",
              "Is an answer that locates a place using neighboring land masses and water bodies.",
              "<strong class=\"kw\">Combined map answer</strong>:",
              "Is an answer that uses both imaginary lines and surrounding features to describe location.",
              "<strong class=\"kw\">Examples:</strong>",
              "* <strong class=\"kw\">Africa</strong> lies south of Europe and southwest of Asia.",
              "* <strong class=\"kw\">Africa</strong> is bordered by the Atlantic Ocean in the west and Indian Ocean in the east.",
              "* <strong class=\"kw\">Africa</strong> is crossed by the Equator, the Tropics and the Prime Meridian.",
              "<strong class=\"kw\">Uses:</strong>",
              "* <strong class=\"kw\">Map answers</strong> help learners locate places accurately.",
              "* <strong class=\"kw\">Map answers</strong> help learners score full marks in UNEB questions."
            ],
            tryThis: {
              question: "Which answer best locates Africa?",
              choices: ["Africa lies south of Europe and is bordered by the Atlantic and Indian Oceans.", "Africa is somewhere on the map.", "Africa is near all places.", "Africa is only in Uganda."],
              correct: 0,
              explanation: "The correct answer uses direction and nearby water bodies clearly."
            }
          },
          {
            moduleId: "map-location-worked-example",
            title: "Worked Example: Locating Africa",
            bigIdea: "A premium answer should combine water bodies, direction and major lines into one clear response.",
            learnIt: [
              "### Worked Example: Locating Africa",
              "<strong class=\"kw\">Worked map answer</strong>:",
              "Is a model response that shows the correct steps for describing the position of a place.",
              "<strong class=\"kw\">Steps:</strong>",
              "* <strong class=\"kw\">Identify oceans</strong> around the continent.",
              "* <strong class=\"kw\">Identify nearby continents</strong> using compass directions.",
              "* <strong class=\"kw\">Identify major imaginary lines</strong> crossing the continent.",
              "* <strong class=\"kw\">Write one clear sentence</strong> with accurate direction words.",
              "<strong class=\"kw\">Examples:</strong>",
              "* <strong class=\"kw\">Atlantic Ocean</strong> lies west of Africa.",
              "* <strong class=\"kw\">Indian Ocean</strong> lies east of Africa.",
              "* <strong class=\"kw\">Europe</strong> lies north of Africa.",
              "* <strong class=\"kw\">Asia</strong> lies northeast of Africa.",
              "* <strong class=\"kw\">Equator</strong> crosses Africa near the middle.",
              "<strong class=\"kw\">UNEB Exam Trap:</strong>",
              "* <strong class=\"kw\">Vague answers</strong> like Africa is on the map are weak.",
              "* <strong class=\"kw\">Wrong directions</strong> make an otherwise good answer lose marks.",
              "* <strong class=\"kw\">One clue only</strong> is weaker than two or three accurate clues."
            ],
            tryThis: {
              question: "Which detail makes a map answer stronger?",
              choices: ["Using direction and nearby features", "Writing Africa is there", "Ignoring oceans", "Naming a random capital"],
              correct: 0,
              explanation: "Direction and nearby features help someone locate Africa accurately."
            },
            workedExample: {
              question: "Describe Africa’s location using two oceans and one major line.",
              steps: ["Identify oceans: Atlantic Ocean to the west and Indian Ocean to the east.", "Identify a major line: the Equator crosses Africa.", "Combine the clues into one clear sentence."],
              answer: "Africa lies between the Atlantic Ocean and the Indian Ocean, and it is crossed by the Equator."
            }
          },
          {
            moduleId: "map-location-common-mistakes",
            title: "Common Mistakes in Map Location Answers",
            bigIdea: "Many learners lose marks by using vague language, wrong directions or confusing oceans and seas.",
            learnIt: [
              "### Common Mistakes in Map Location Answers",
              "<strong class=\"kw\">Common mistake</strong>:",
              "Is an error that makes a map-location answer unclear or incorrect.",
              "<strong class=\"kw\">Types:</strong>",
              "* <strong class=\"kw\">Vague location</strong> gives no useful map clue.",
              "* <strong class=\"kw\">Wrong direction</strong> places features on the wrong side.",
              "* <strong class=\"kw\">Wrong water body</strong> confuses oceans and seas.",
              "* <strong class=\"kw\">Missing map line</strong> ignores important latitudes and longitudes.",
              "<strong class=\"kw\">Examples:</strong>",
              "* <strong class=\"kw\">Africa is somewhere</strong> is too vague.",
              "* <strong class=\"kw\">Indian Ocean west of Africa</strong> is a wrong direction.",
              "* <strong class=\"kw\">Pacific Ocean around Africa</strong> is a wrong water body.",
              "* <strong class=\"kw\">Prime Meridian as latitude</strong> is a wrong map-line description.",
              "<strong class=\"kw\">Advantages:</strong>",
              "* <strong class=\"kw\">Error checking</strong> improves accuracy before final answers.",
              "* <strong class=\"kw\">Direction checking</strong> protects learners from simple map mistakes.",
              "<strong class=\"kw\">Disadvantages:</strong>",
              "* <strong class=\"kw\">Rushed answers</strong> easily mix up east and west.",
              "* <strong class=\"kw\">Memorised answers</strong> fail when the map question changes."
            ],
            tryThis: {
              question: "Which answer is too vague?",
              choices: ["Africa is somewhere on the map.", "Africa is west of the Indian Ocean.", "Africa is south of Europe.", "Africa is crossed by the Equator."],
              correct: 0,
              explanation: "Africa is somewhere on the map gives no useful location clue."
            }
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
            moduleId: "mountains-meaning-types",
            title: "Mountains and Highlands of Africa",
            bigIdea: "Mountains are high land areas with steep sides and summits, and Africa has volcanic, block, fold and residual mountains.",
            learnIt: [
              "### Mountains and Highlands of Africa",
              "<strong class=\"kw\">Mountains</strong>:",
              "Are high land areas with very steep sides and a peak or summit rising above the surrounding land.",
              "<strong class=\"kw\">Types:</strong>",
              "* <strong class=\"kw\">Volcanic mountains</strong> form from cooled lava and ash.",
              "* <strong class=\"kw\">Block mountains</strong> form when land blocks are pushed upwards between faults.",
              "* <strong class=\"kw\">Fold mountains</strong> form when rock layers are squeezed and crumpled.",
              "* <strong class=\"kw\">Residual mountains</strong> form when hard rocks remain after erosion.",
              "<strong class=\"kw\">Volcanic mountains</strong>:",
              "Are mountains formed when molten rock or magma erupts onto the earth's surface through a vent and cools to form a cone.",
              "<strong class=\"kw\">Block mountains</strong>:",
              "Are mountains formed when blocks of land are pushed upwards between parallel fault lines caused by tensional or compressional forces.",
              "<strong class=\"kw\">Fold mountains</strong>:",
              "Are mountains formed when sedimentary rock layers are squeezed and crumpled by lateral compressional forces.",
              "<strong class=\"kw\">Residual mountains</strong>:",
              "Are mountains formed by prolonged erosion of hard resistant rocks after softer surrounding layers are washed away."
            ],
            tryThis: {
              question: "Which type of mountain is formed from cooled magma or lava?",
              choices: ["Volcanic mountain", "Block mountain", "Fold mountain", "Residual mountain"],
              correct: 0,
              explanation: "Volcanic mountains form when magma or lava erupts and cools."
            }
          },
          {
            moduleId: "mountains-examples-africa",
            title: "Examples of Mountains in Africa",
            bigIdea: "Important African mountains include Kilimanjaro, Kenya, Elgon, Mfumbiro, Rwenzori, Atlas and Drakensberg.",
            learnIt: [
              "### Examples of Mountains in Africa",
              "<strong class=\"kw\">Examples:</strong>",
              "* <strong class=\"kw\">Mount Kilimanjaro</strong> in Tanzania is the highest mountain in Africa.",
              "* <strong class=\"kw\">Mount Kenya</strong> in Kenya is the second highest peak in Africa.",
              "* <strong class=\"kw\">Mount Elgon</strong> is shared by Uganda and Kenya and has the largest caldera in the world.",
              "* <strong class=\"kw\">Mount Mfumbiro</strong> is shared by Uganda, Rwanda and DRC and is a habitat for mountain gorillas.",
              "* <strong class=\"kw\">Rwenzori Mountains</strong> are shared by Uganda and DRC and form the highest block mountain in Africa.",
              "* <strong class=\"kw\">Atlas Mountains</strong> in Morocco, Algeria and Tunisia are young fold mountains.",
              "* <strong class=\"kw\">Drakensberg Mountains</strong> in South Africa are residual mountains.",
              "<strong class=\"kw\">UNEB Exam Trap:</strong>",
              "* <strong class=\"kw\">Kilimanjaro</strong> is the highest mountain in Africa, not Mount Kenya.",
              "* <strong class=\"kw\">Rwenzori</strong> is a block mountain, not a volcanic cone.",
              "* <strong class=\"kw\">Atlas Mountains</strong> are fold mountains in North Africa."
            ],
            tryThis: {
              question: "Which mountain is shared by Uganda and DRC?",
              choices: ["Rwenzori Mountains", "Atlas Mountains", "Drakensberg Mountains", "Mount Kenya"],
              correct: 0,
              explanation: "The Rwenzori Mountains are shared by Uganda and DRC."
            }
          },
          {
            moduleId: "mountains-uses-importance",
            title: "Uses, Importances, Advantages and Disadvantages of Mountains",
            bigIdea: "Mountains support farming, tourism, water supply and forests, but they can also cause landslides, erosion and transport difficulties.",
            learnIt: [
              "### Uses, Importances, Advantages and Disadvantages",
              "<strong class=\"kw\">Uses:</strong>",
              "* <strong class=\"kw\">Volcanic soils</strong> support crop cultivation on mountain slopes.",
              "* <strong class=\"kw\">Tourism</strong> brings foreign exchange to mountain countries.",
              "* <strong class=\"kw\">Water catchments</strong> source major permanent rivers.",
              "* <strong class=\"kw\">Cool climate</strong> supports settlement and agriculture.",
              "* <strong class=\"kw\">Natural forests</strong> provide timber and firewood.",
              "<strong class=\"kw\">Importances:</strong>",
              "* <strong class=\"kw\">Relief rainfall</strong> forms on the windward side.",
              "* <strong class=\"kw\">Political boundaries</strong> form between countries like Uganda and DRC.",
              "* <strong class=\"kw\">Wildlife habitats</strong> protect rare species like mountain gorillas.",
              "<strong class=\"kw\">Advantages:</strong>",
              "* <strong class=\"kw\">Tour jobs</strong> support guides and porters.",
              "* <strong class=\"kw\">Fresh water</strong> supplies domestic use and irrigation.",
              "<strong class=\"kw\">Disadvantages:</strong>",
              "* <strong class=\"kw\">Landslides</strong> bury villages during heavy rainfall.",
              "* <strong class=\"kw\">Transport construction</strong> becomes difficult and expensive.",
              "* <strong class=\"kw\">Rain-shadow effect</strong> causes dryness on the leeward side.",
              "* <strong class=\"kw\">Rugged terrain</strong> may hide rebels and bandits.",
              "* <strong class=\"kw\">Soil erosion</strong> becomes severe on cultivated steep slopes."
            ],
            tryThis: {
              question: "Which side of a mountain usually receives relief rainfall?",
              choices: ["Windward side", "Leeward side", "Desert side", "Shadow side only"],
              correct: 0,
              explanation: "Moist winds rise on the windward side, cool and form relief rainfall."
            }
          }
        ]
      },
      {
        subtopicId: "rivers-africa",
        title: "2. Rivers of Africa",
        modules: [
          {
            moduleId: "rivers-meaning-types",
            title: "Rivers of Africa",
            bigIdea: "Rivers are natural channels of fresh water that flow into lakes, seas, oceans or other rivers.",
            learnIt: [
              "### Rivers of Africa",
              "<strong class=\"kw\">Rivers</strong>:",
              "Are permanent or seasonal natural streams of fresh water flowing in a definite channel into a lake, ocean, sea or another river.",
              "<strong class=\"kw\">Types:</strong>",
              "* <strong class=\"kw\">Permanent rivers</strong> flow throughout the year.",
              "* <strong class=\"kw\">Seasonal rivers</strong> flow mainly during the rainy season.",
              "<strong class=\"kw\">Permanent rivers</strong>:",
              "Are rivers that flow continuously throughout the year because their sources receive constant heavy rainfall or melting snow.",
              "<strong class=\"kw\">Seasonal rivers</strong>:",
              "Are rivers that flow only during the rainy season and dry up during the dry season due to high evaporation and unreliable rainfall."
            ],
            tryThis: {
              question: "Which type of river flows throughout the year?",
              choices: ["Permanent river", "Seasonal river", "Dry valley", "Coastal plain"],
              correct: 0,
              explanation: "Permanent rivers flow continuously throughout the year."
            }
          },
          {
            moduleId: "major-rivers-africa",
            title: "Examples of Major Rivers in Africa",
            bigIdea: "Major rivers of Africa include the Nile, Congo, Niger, Zambezi, Limpopo and Orange.",
            learnIt: [
              "### Major Rivers of Africa",
              "<strong class=\"kw\">Examples:</strong>",
              "* <strong class=\"kw\">River Nile</strong> is the longest river in the world and flows from south to north.",
              "* <strong class=\"kw\">River Congo</strong> crosses the Equator twice and has the highest HEP potential in Africa.",
              "* <strong class=\"kw\">River Niger</strong> forms a large oil-rich delta before entering the Atlantic Ocean.",
              "* <strong class=\"kw\">River Zambezi</strong> is famous for Victoria Falls and Kariba Dam.",
              "* <strong class=\"kw\">River Limpopo</strong> forms borders between South Africa, Botswana and Zimbabwe.",
              "* <strong class=\"kw\">River Orange</strong> is used extensively for irrigation in dry areas.",
              "<strong class=\"kw\">UNEB Exam Trap:</strong>",
              "* <strong class=\"kw\">River Nile</strong> flows from south to north because of the gentle slope of the land.",
              "* <strong class=\"kw\">River Congo</strong> has the largest volume of water in Africa.",
              "* <strong class=\"kw\">River Zambezi</strong> is linked to Victoria Falls, not River Nile."
            ],
            tryThis: {
              question: "Which river crosses the Equator twice?",
              choices: ["River Congo", "River Nile", "River Orange", "River Limpopo"],
              correct: 0,
              explanation: "River Congo crosses the Equator twice."
            }
          },
          {
            moduleId: "rivers-uses-importance",
            title: "Uses, Importances, Advantages and Disadvantages of Rivers",
            bigIdea: "Rivers provide power, water, fishing, transport and fertile soils, but they can also flood and spread diseases.",
            learnIt: [
              "### Uses, Importances, Advantages and Disadvantages",
              "<strong class=\"kw\">Uses:</strong>",
              "* <strong class=\"kw\">Hydro-electric power</strong> is generated at waterfalls and rapids.",
              "* <strong class=\"kw\">Irrigation</strong> supports projects like the Gezira Scheme in Sudan.",
              "* <strong class=\"kw\">Water transport</strong> carries goods and people on navigable rivers.",
              "* <strong class=\"kw\">Inland fishing</strong> supports livelihoods.",
              "* <strong class=\"kw\">Fresh water</strong> supports domestic and industrial use.",
              "<strong class=\"kw\">Importances:</strong>",
              "* <strong class=\"kw\">Political boundaries</strong> separate some nations.",
              "* <strong class=\"kw\">Alluvial soils</strong> support crop farming on floodplains.",
              "* <strong class=\"kw\">Tourist attractions</strong> include waterfalls, gorges and riverine wildlife.",
              "<strong class=\"kw\">Advantages:</strong>",
              "* <strong class=\"kw\">Bulk transport</strong> is cheaper than road and air transport.",
              "* <strong class=\"kw\">Irrigation farming</strong> improves food security in dry regions.",
              "<strong class=\"kw\">Disadvantages:</strong>",
              "* <strong class=\"kw\">Floods</strong> displace communities during heavy rains.",
              "* <strong class=\"kw\">Blackflies</strong> spread river blindness.",
              "* <strong class=\"kw\">Snails</strong> spread bilharzia.",
              "* <strong class=\"kw\">Waterfalls and rapids</strong> restrict navigation.",
              "* <strong class=\"kw\">Seasonal rivers</strong> limit agricultural use during dry seasons."
            ],
            tryThis: {
              question: "Which river use is connected to waterfalls and rapids?",
              choices: ["Generating hydro-electric power", "Growing coral reefs", "Making deserts", "Stopping rainfall"],
              correct: 0,
              explanation: "Waterfalls and rapids can be used to generate hydro-electric power."
            }
          }
        ]
      },
      {
        subtopicId: "lakes-africa",
        title: "3. Lakes of Africa",
        modules: [
          {
            moduleId: "lakes-meaning-types",
            title: "Lakes of Africa",
            bigIdea: "Lakes are large water-filled depressions on the earth’s surface, and African lakes form in several ways.",
            learnIt: [
              "### Lakes of Africa",
              "<strong class=\"kw\">Lakes</strong>:",
              "Are large depressions on the earth's surface filled with water.",
              "<strong class=\"kw\">Types:</strong>",
              "* <strong class=\"kw\">Down-warping lakes</strong> form in wide shallow basins.",
              "* <strong class=\"kw\">Rift valley lakes</strong> form in long narrow rift depressions.",
              "* <strong class=\"kw\">Volcanic crater lakes</strong> form in volcanic hollows.",
              "* <strong class=\"kw\">Man-made lakes</strong> form behind dams built by people.",
              "<strong class=\"kw\">Down-warping lakes</strong>:",
              "Are lakes formed when lateral compressional forces cause the earth's crust to bend downwards, creating a wide shallow basin that fills with rain and river water.",
              "<strong class=\"kw\">Rift valley lakes</strong>:",
              "Are lakes formed when water fills depressions on the floor of the rift valley, resulting in long, narrow and very deep water bodies with steep sides.",
              "<strong class=\"kw\">Volcanic crater lakes</strong>:",
              "Are lakes formed when water fills the explosive hollow or depression left at the top of an extinct volcanic cone.",
              "<strong class=\"kw\">Man-made lakes</strong>:",
              "Are artificial lakes created by humans blocking a river channel with a dam to store water for hydro-electric power or irrigation."
            ],
            tryThis: {
              question: "Which lake type is formed behind a dam?",
              choices: ["Man-made lake", "Rift valley lake", "Volcanic crater lake", "Down-warping lake"],
              correct: 0,
              explanation: "Man-made lakes are created when people block a river channel with a dam."
            }
          },
          {
            moduleId: "major-lakes-africa",
            title: "Examples of Lakes in Africa",
            bigIdea: "Africa has down-warping lakes, rift valley lakes, crater lakes and man-made lakes.",
            learnIt: [
              "### Major Lakes of Africa",
              "<strong class=\"kw\">Examples:</strong>",
              "* <strong class=\"kw\">Lake Victoria</strong> is the largest fresh-water lake in Africa and is formed by down-warping.",
              "* <strong class=\"kw\">Lake Tanganyika</strong> is the longest and deepest rift valley lake in Africa.",
              "* <strong class=\"kw\">Lake Nyasa</strong> is a deep rift valley lake between Malawi, Tanzania and Mozambique.",
              "* <strong class=\"kw\">Lake Albert</strong> and <strong class=\"kw\">Lake Edward</strong> are rift valley lakes shared by Uganda and DRC.",
              "* <strong class=\"kw\">Lake Katwe</strong> in Uganda is a volcanic crater lake famous for salt mining.",
              "* <strong class=\"kw\">Lake Nasser</strong> in Egypt and <strong class=\"kw\">Lake Volta</strong> in Ghana are man-made lakes.",
              "* <strong class=\"kw\">Lake Chad</strong> is a shallow shrinking down-warping lake in the Sahel region.",
              "<strong class=\"kw\">UNEB Exam Trap:</strong>",
              "* <strong class=\"kw\">Lake Victoria</strong> is large and shallow, not a deep rift valley lake.",
              "* <strong class=\"kw\">Lake Tanganyika</strong> is the deepest rift valley lake in Africa.",
              "* <strong class=\"kw\">Lake Katwe</strong> is a crater lake known for salt mining."
            ],
            tryThis: {
              question: "Which lake is famous for salt mining in Uganda?",
              choices: ["Lake Katwe", "Lake Victoria", "Lake Tanganyika", "Lake Nasser"],
              correct: 0,
              explanation: "Lake Katwe is a volcanic crater lake in Uganda famous for salt mining."
            }
          },
          {
            moduleId: "lakes-uses-importance",
            title: "Uses, Importances, Advantages and Disadvantages of Lakes",
            bigIdea: "Lakes support fishing, transport, irrigation, minerals and tourism, but they can also spread disease and create hazards.",
            learnIt: [
              "### Uses, Importances, Advantages and Disadvantages",
              "<strong class=\"kw\">Uses:</strong>",
              "* <strong class=\"kw\">Salt mining</strong> takes place in hyper-saline lakes.",
              "* <strong class=\"kw\">Irrigation water</strong> supports farming in arid regions.",
              "* <strong class=\"kw\">Inland transport</strong> carries ferries and cargo ships.",
              "* <strong class=\"kw\">Commercial fishing</strong> provides livelihoods.",
              "* <strong class=\"kw\">Domestic water</strong> supports households and industries.",
              "<strong class=\"kw\">Importances:</strong>",
              "* <strong class=\"kw\">Convectional rainfall</strong> increases through lake moisture.",
              "* <strong class=\"kw\">National borders</strong> form between neighboring countries.",
              "* <strong class=\"kw\">Unique ecosystems</strong> boost tourism and revenue.",
              "<strong class=\"kw\">Advantages:</strong>",
              "* <strong class=\"kw\">Fish</strong> provide cheap high-protein food.",
              "* <strong class=\"kw\">Lake transport</strong> lowers bulky trade costs.",
              "<strong class=\"kw\">Disadvantages:</strong>",
              "* <strong class=\"kw\">Water hyacinth</strong> chokes engines and suffocates fish.",
              "* <strong class=\"kw\">Crocodiles and hippos</strong> endanger fishermen.",
              "* <strong class=\"kw\">Mosquitoes</strong> spread malaria around lakes.",
              "* <strong class=\"kw\">Snails</strong> spread bilharzia.",
              "* <strong class=\"kw\">Fishing rights</strong> can cause cross-border conflicts.",
              "* <strong class=\"kw\">Toxic gases</strong> from deep volcanic lakes can suffocate aquatic life."
            ],
            tryThis: {
              question: "Which lake problem can choke boat engines?",
              choices: ["Water hyacinth", "Relief rainfall", "Alluvial soil", "Continental drift"],
              correct: 0,
              explanation: "Water hyacinth can choke boat engines and suffocate fish."
            }
          }
        ]
      },
      {
        subtopicId: "plateau-rift-coastal",
        title: "4. Plateau, Rift Valley and Coastal Plains",
        modules: [
          {
            moduleId: "plateau-rift-coastal-meaning",
            title: "Plateau, Rift Valley and Coastal Plains",
            bigIdea: "Plateaus, rift valleys and coastal plains are major landforms that influence settlement, transport, farming and tourism.",
            learnIt: [
              "### Plateau, Rift Valley and Coastal Plains",
              "<strong class=\"kw\">Plateau</strong>:",
              "Is a large, elevated area of relatively flat or level land that rises sharply above the surrounding areas.",
              "<strong class=\"kw\">Rift valley</strong>:",
              "Is a long, narrow trough or depression on the earth's surface formed between parallel fault lines due to tensional or compressional forces.",
              "<strong class=\"kw\">Coastal plains</strong>:",
              "Are low-lying, relatively flat stretches of land adjacent to the ocean or sea coast.",
              "<strong class=\"kw\">Types:</strong>",
              "* <strong class=\"kw\">Continental plateaus</strong> are vast interior tablelands.",
              "* <strong class=\"kw\">Intermontane plateaus</strong> are flat highlands enclosed by mountains.",
              "* <strong class=\"kw\">Eastern Rift Valley branch</strong> has shallow salty lakes.",
              "* <strong class=\"kw\">Western Rift Valley branch</strong> has deep fresh-water lakes.",
              "<strong class=\"kw\">Continental plateaus</strong>:",
              "Are vast, expansive tablelands that rise abruptly from coastal plains, making up the largest part of Africa's interior.",
              "<strong class=\"kw\">Intermontane plateaus</strong>:",
              "Are high-altitude flat lands completely surrounded or enclosed by high mountain ranges."
            ],
            tryThis: {
              question: "What is a plateau?",
              choices: ["A large elevated area of relatively flat land", "A small ocean", "A volcanic vent only", "A flowing stream"],
              correct: 0,
              explanation: "A plateau is an elevated area of relatively flat land."
            }
          },
          {
            moduleId: "rift-branches-examples",
            title: "Rift Valley Branches and Examples",
            bigIdea: "The Great Rift Valley has eastern and western branches, and Africa also has major plateaus and coastal plains.",
            learnIt: [
              "### Rift Valley Branches and Examples",
              "<strong class=\"kw\">Eastern Rift Valley branch</strong>:",
              "Is the branch of the Great Rift Valley that runs from the Red Sea through Ethiopia, Kenya and Tanzania, characterized by shallow salty lakes.",
              "<strong class=\"kw\">Western Rift Valley branch</strong>:",
              "Is the branch of the Great Rift Valley that runs along the western border of Uganda, DRC, Rwanda and Burundi down to Malawi, characterized by deep fresh-water lakes.",
              "<strong class=\"kw\">Examples:</strong>",
              "* <strong class=\"kw\">East African Plateau</strong> covers most of Uganda, Kenya and Tanzania.",
              "* <strong class=\"kw\">Jos Plateau</strong> in Nigeria is famous for tin mining.",
              "* <strong class=\"kw\">Ethiopian Highlands</strong> form the highest and most extensive plateau region in Africa.",
              "* <strong class=\"kw\">Great Rift Valley</strong> stretches from Jordan through the Red Sea to Mozambique.",
              "* <strong class=\"kw\">Western Rift Valley</strong> contains Lake Albert, Lake Edward and Lake George.",
              "* <strong class=\"kw\">Mozambican Coastal Plain</strong> lies along the Indian Ocean in East-Central Africa.",
              "<strong class=\"kw\">UNEB Exam Trap:</strong>",
              "* <strong class=\"kw\">Western Rift Valley</strong> has deep fresh-water lakes.",
              "* <strong class=\"kw\">Eastern Rift Valley</strong> has many shallow salty lakes.",
              "* <strong class=\"kw\">Great Rift Valley</strong> extends beyond Africa into Asia."
            ],
            tryThis: {
              question: "Which rift branch contains Lake Albert and Lake Edward?",
              choices: ["Western Rift Valley branch", "Eastern Rift Valley branch", "Atlantic coastal plain", "Jos Plateau"],
              correct: 0,
              explanation: "Lake Albert and Lake Edward lie in the Western Rift Valley branch."
            }
          },
          {
            moduleId: "plateau-rift-coastal-uses",
            title: "Uses, Importances, Advantages and Disadvantages",
            bigIdea: "Plateaus, rift valleys and coastal plains support grazing, mining, farming, tourism, ports and settlement.",
            learnIt: [
              "### Uses, Importances, Advantages and Disadvantages",
              "<strong class=\"kw\">Uses:</strong>",
              "* <strong class=\"kw\">Livestock grazing</strong> takes place on plateau grasslands.",
              "* <strong class=\"kw\">Mining</strong> extracts minerals like gold, diamonds and copper.",
              "* <strong class=\"kw\">Cash crops</strong> like tea and coffee grow on cool high plateaus.",
              "* <strong class=\"kw\">Tourism</strong> grows along rift valley floors, game parks and salt lakes.",
              "* <strong class=\"kw\">Ports and harbors</strong> develop on flat coastal plains.",
              "<strong class=\"kw\">Importances:</strong>",
              "* <strong class=\"kw\">Settlement distribution</strong> is influenced by flat terrain.",
              "* <strong class=\"kw\">Temperature modification</strong> makes high plateaus cooler and habitable.",
              "* <strong class=\"kw\">Scenery</strong> attracts international tourists.",
              "<strong class=\"kw\">Advantages:</strong>",
              "* <strong class=\"kw\">Flat land</strong> makes transport construction cheaper on plateaus and coastal plains.",
              "* <strong class=\"kw\">Deep-water harbors</strong> support international maritime trade.",
              "<strong class=\"kw\">Disadvantages:</strong>",
              "* <strong class=\"kw\">Rain-shadow drought</strong> affects deep rift valley floors.",
              "* <strong class=\"kw\">Escarpments</strong> make road and railway engineering dangerous and expensive.",
              "* <strong class=\"kw\">Coastal humidity</strong> creates hot oppressive conditions.",
              "* <strong class=\"kw\">Tsetse flies</strong> live in warm wooded plateau and rift valley areas."
            ],
            tryThis: {
              question: "Which landform is best for ports and harbors?",
              choices: ["Coastal plains", "Rift escarpments", "Volcanic cones", "Mountain summits"],
              correct: 0,
              explanation: "Flat coastal plains support ports, harbors and coastal trading centers."
            }
          }
        ]
      },
      {
        subtopicId: "formation-physical-features",
        title: "5. Forces and Processes that Form Physical Features",
        modules: [
          {
            moduleId: "internal-forces-meaning-types",
            title: "Forces and Processes that Form Physical Features",
            bigIdea: "Internal forces originate from within the earth and create features by breaking, bending, lifting or sinking the crust.",
            learnIt: [
              "### Forces and Processes that Form Physical Features",
              "<strong class=\"kw\">Internal forces</strong>:",
              "Are movements or pressures originating from within the earth's interior that alter, lift or break the crust to create physical features.",
              "<strong class=\"kw\">Types:</strong>",
              "* <strong class=\"kw\">Faulting</strong> breaks the earth's crust.",
              "* <strong class=\"kw\">Volcanicity</strong> forces molten rock into or onto the surface.",
              "* <strong class=\"kw\">Down-warping</strong> bends or sinks the crust downwards.",
              "* <strong class=\"kw\">Folding</strong> bends young sedimentary rocks.",
              "<strong class=\"kw\">Faulting</strong>:",
              "Is the fracturing, cracking or breaking of the earth's crustal rocks due to tensional or compressional forces.",
              "<strong class=\"kw\">Volcanicity</strong>:",
              "Is the process by which molten rocks or magma are forced from the earth's interior into or onto the earth's surface.",
              "<strong class=\"kw\">Down-warping</strong>:",
              "Is the gentle bending or sinking of vast areas of the earth's crust towards the center due to underground compressional pressure.",
              "<strong class=\"kw\">Folding</strong>:",
              "Is the bending or wrinkling of young sedimentary rock layers due to lateral compressional forces pushing from opposite sides."
            ],
            tryThis: {
              question: "Which process forms fold mountains?",
              choices: ["Folding", "Evaporation", "Fishing", "Irrigation"],
              correct: 0,
              explanation: "Folding bends or wrinkles sedimentary rock layers to form fold mountains."
            }
          },
          {
            moduleId: "internal-forces-examples",
            title: "Examples of Internal Forces and Features",
            bigIdea: "Tensional forces, compressional forces, crustal warping and volcanic eruptions form major physical features in Africa.",
            learnIt: [
              "### Examples of Internal Forces",
              "<strong class=\"kw\">Examples:</strong>",
              "* <strong class=\"kw\">Tensional forces</strong> pull crustal rocks away from each other and can form rift valleys.",
              "* <strong class=\"kw\">Compressional forces</strong> push crustal rocks together and can form block or fold mountains.",
              "* <strong class=\"kw\">Crustal warping</strong> created shallow basins containing Lake Victoria and Lake Kyoga.",
              "* <strong class=\"kw\">Volcanic eruptions</strong> formed Mount Kilimanjaro, Mount Elgon and the Mfumbiro ranges.",
              "<strong class=\"kw\">UNEB Exam Trap:</strong>",
              "* <strong class=\"kw\">Faulting</strong> is linked to rift valleys and block mountains.",
              "* <strong class=\"kw\">Volcanicity</strong> is linked to volcanic mountains and crater lakes.",
              "* <strong class=\"kw\">Down-warping</strong> is linked to shallow basin lakes like Lake Victoria.",
              "* <strong class=\"kw\">Folding</strong> is linked to fold mountains like the Atlas Mountains."
            ],
            tryThis: {
              question: "Which process formed Mount Kilimanjaro?",
              choices: ["Volcanicity", "Down-warping", "River erosion only", "Coastal deposition"],
              correct: 0,
              explanation: "Mount Kilimanjaro was formed through volcanic activity."
            }
          },
          {
            moduleId: "internal-forces-uses-importance",
            title: "Uses, Importances, Advantages and Disadvantages of Internal Forces",
            bigIdea: "Internal forces create useful landforms and resources, but they can also cause earthquakes, eruptions and difficult terrain.",
            learnIt: [
              "### Uses, Importances, Advantages and Disadvantages",
              "<strong class=\"kw\">Uses:</strong>",
              "* <strong class=\"kw\">Minerals</strong> are brought closer to the surface during volcanic activity.",
              "* <strong class=\"kw\">Hot springs</strong> and geysers support geothermal power and tourism.",
              "* <strong class=\"kw\">Mountain peaks</strong> trigger cloud condensation for water supply.",
              "<strong class=\"kw\">Importances:</strong>",
              "* <strong class=\"kw\">Tourist attractions</strong> include escarpments, craters and geysers.",
              "* <strong class=\"kw\">River flow direction</strong> is determined by tilted warped land basins.",
              "* <strong class=\"kw\">Fertile volcanic soils</strong> boost agricultural production.",
              "<strong class=\"kw\">Advantages:</strong>",
              "* <strong class=\"kw\">High-altitude locations</strong> receive heavy relief rainfall.",
              "* <strong class=\"kw\">Natural depressions</strong> store large volumes of fresh water.",
              "<strong class=\"kw\">Disadvantages:</strong>",
              "* <strong class=\"kw\">Earthquakes</strong> destroy infrastructure along fault lines.",
              "* <strong class=\"kw\">Volcanic eruptions</strong> emit toxic gases and bury farmland under lava.",
              "* <strong class=\"kw\">Rugged terrain</strong> makes roads, bridges and railways difficult to build."
            ],
            tryThis: {
              question: "Which internal-force result can destroy infrastructure along fault lines?",
              choices: ["Earthquakes", "Fishing", "Convectional rainfall", "Port trade"],
              correct: 0,
              explanation: "Earthquakes can occur along fault lines and destroy infrastructure."
            }
          }
        ]
      },
      {
        subtopicId: "premium-physical-features-application",
        title: "Premium Exam Practice: Feature Formation and Importance",
        modules: [
          {
            moduleId: "feature-formation-answer-structure",
            title: "Explaining Relief Features Clearly",
            bigIdea: "A strong physical-features answer names the feature, states the formation process and gives its importance or problem.",
            learnIt: [
              "### Premium Exam Practice: Feature Formation and Importance",
              "<strong class=\"kw\">Relief feature answer</strong>:",
              "Is a clear answer that names a physical feature, explains how it formed and states its importance or problem.",
              "<strong class=\"kw\">Types:</strong>",
              "* <strong class=\"kw\">Formation answer</strong> explains how the feature was made.",
              "* <strong class=\"kw\">Importance answer</strong> explains how the feature helps people.",
              "* <strong class=\"kw\">Problem answer</strong> explains how the feature affects people negatively.",
              "<strong class=\"kw\">Formation answer</strong>:",
              "Is an answer that uses process words such as faulting, folding, volcanicity, erosion, deposition or down-warping.",
              "<strong class=\"kw\">Importance answer</strong>:",
              "Is an answer that states useful activities such as transport, fishing, irrigation, tourism, water supply or hydro-electric power.",
              "<strong class=\"kw\">Problem answer</strong>:",
              "Is an answer that states hazards such as floods, disease vectors, erosion, landslides or transport barriers.",
              "<strong class=\"kw\">Examples:</strong>",
              "* <strong class=\"kw\">Rift valleys</strong> form through faulting.",
              "* <strong class=\"kw\">Volcanic mountains</strong> form through volcanicity.",
              "* <strong class=\"kw\">Lakes</strong> support fishing and transport.",
              "* <strong class=\"kw\">Mountains</strong> may cause landslides and transport barriers."
            ],
            tryThis: {
              question: "Which process word explains the formation of a rift valley?",
              choices: ["Faulting", "Condensation", "Pollination", "Trading"],
              correct: 0,
              explanation: "Rift valleys form mainly through faulting."
            }
          },
          {
            moduleId: "physical-features-worked-examples",
            title: "Worked Examples: Importance and Problems",
            bigIdea: "Worked examples help learners turn short facts into complete UNEB-style answers.",
            learnIt: [
              "### Worked Examples: Importance and Problems",
              "<strong class=\"kw\">Worked example</strong>:",
              "Is a model answer showing the steps needed to write a complete response.",
              "<strong class=\"kw\">Steps:</strong>",
              "* <strong class=\"kw\">Read the command word</strong> before choosing the answer type.",
              "* <strong class=\"kw\">Name the feature</strong> before explaining it.",
              "* <strong class=\"kw\">Use a process word</strong> for formation questions.",
              "* <strong class=\"kw\">Use a direct benefit</strong> for importance questions.",
              "* <strong class=\"kw\">Use a realistic effect</strong> for problem questions.",
              "<strong class=\"kw\">Examples:</strong>",
              "* <strong class=\"kw\">Rivers</strong> provide water for irrigation.",
              "* <strong class=\"kw\">Rivers</strong> generate hydro-electric power at waterfalls and rapids.",
              "* <strong class=\"kw\">Lakes</strong> support fishing and inland transport.",
              "* <strong class=\"kw\">Mountains</strong> attract tourists and provide water catchments.",
              "* <strong class=\"kw\">Rift escarpments</strong> make road construction difficult."
            ],
            tryThis: {
              question: "Which answer states an importance of rivers?",
              choices: ["Rivers provide water for irrigation.", "Rivers are parliamentary buildings.", "Rivers are capital cities.", "Rivers are imaginary lines."],
              correct: 0,
              explanation: "Providing water for irrigation is an importance of rivers."
            },
            workedExample: {
              question: "State two ways rivers are important to people in Africa.",
              steps: ["Think of direct uses of river water.", "Rivers can provide water for irrigation and domestic use.", "Some rivers can generate hydro-electric power or support fishing."],
              answer: "Rivers provide water for irrigation and can be used to generate hydro-electric power."
            }
          },
          {
            moduleId: "physical-features-exam-traps",
            title: "UNEB Traps in Physical Features",
            bigIdea: "Physical geography questions often test process words, examples and correct feature classification.",
            learnIt: [
              "### UNEB Traps in Physical Features",
              "<strong class=\"kw\">UNEB exam trap</strong>:",
              "Is a common mistake in physical geography that leads to a wrong answer.",
              "<strong class=\"kw\">Types:</strong>",
              "* <strong class=\"kw\">Process trap</strong> confuses faulting, folding, volcanicity and down-warping.",
              "* <strong class=\"kw\">Example trap</strong> attaches a feature to the wrong country or type.",
              "* <strong class=\"kw\">Use trap</strong> gives a vague benefit instead of a direct use.",
              "* <strong class=\"kw\">Problem trap</strong> gives an unrealistic effect.",
              "<strong class=\"kw\">Examples:</strong>",
              "* <strong class=\"kw\">Rwenzori Mountains</strong> are block mountains, not volcanic mountains.",
              "* <strong class=\"kw\">Atlas Mountains</strong> are fold mountains.",
              "* <strong class=\"kw\">Lake Victoria</strong> is a down-warping lake, not a rift valley lake.",
              "* <strong class=\"kw\">Lake Tanganyika</strong> is a deep rift valley lake.",
              "* <strong class=\"kw\">Mount Kilimanjaro</strong> is a volcanic mountain.",
              "<strong class=\"kw\">Advantages:</strong>",
              "* <strong class=\"kw\">Trap awareness</strong> improves accuracy in UNEB answers.",
              "* <strong class=\"kw\">Feature classification</strong> helps learners explain formation correctly.",
              "<strong class=\"kw\">Disadvantages:</strong>",
              "* <strong class=\"kw\">Guessing processes</strong> causes wrong formation answers.",
              "* <strong class=\"kw\">Memorising examples only</strong> fails when explanation is required."
            ],
            tryThis: {
              question: "Which statement is correct?",
              choices: ["Lake Victoria is a down-warping lake.", "Lake Victoria is the deepest rift valley lake.", "Atlas Mountains are volcanic cones.", "Rwenzori is a coastal plain."],
              correct: 0,
              explanation: "Lake Victoria is a down-warping or basin lake."
            }
          }
        ]
      }
    ],
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
            moduleId: "climate-weather-meaning",
            title: "Climate and Weather",
            bigIdea: "Climate is long-term average weather, while weather is the short-term state of the atmosphere.",
            learnIt: [
              "### Climatic Regions of Africa",
              "<strong class=\"kw\">Climate</strong>:",
              "Is the average weather conditions of a place recorded over a long period of time, usually 30 to 35 years.",
              "<strong class=\"kw\">Weather</strong>:",
              "Is the state of the atmosphere of a given place at a specific or short period of time.",
              "<strong class=\"kw\">Types:</strong>",
              "* <strong class=\"kw\">Equatorial climatic region</strong> is hot and wet throughout the year.",
              "* <strong class=\"kw\">Tropical climatic region</strong> has wet and dry seasons.",
              "* <strong class=\"kw\">Mediterranean climatic region</strong> has hot dry summers and cool wet winters.",
              "* <strong class=\"kw\">Desert climatic region</strong> is extremely dry.",
              "* <strong class=\"kw\">Semi-desert climatic region</strong> is a dry transition zone.",
              "* <strong class=\"kw\">Temperate climatic region</strong> is a high-altitude grassland climate."
            ],
            tryThis: {
              question: "What is climate?",
              choices: ["Average weather over a long period", "Weather for one afternoon", "A mountain peak", "A river channel"],
              correct: 0,
              explanation: "Climate is the average weather conditions of a place over a long period."
            }
          },
          {
            moduleId: "climatic-regions-types",
            title: "Types of Climatic Regions in Africa",
            bigIdea: "Africa has several climatic regions with different rainfall, temperature and seasonal patterns.",
            learnIt: [
              "### Types of Climatic Regions",
              "<strong class=\"kw\">Equatorial climatic region</strong>:",
              "Is a hot and wet climatic zone found within 5 degrees North and South of the Equator, experiencing heavy convectional rainfall throughout the year.",
              "<strong class=\"kw\">Tropical climatic region</strong>:",
              "Is a climatic zone flanking the equatorial region, characterized by two distinct wet seasons and one long dry season.",
              "<strong class=\"kw\">Mediterranean climatic region</strong>:",
              "Is a unique climatic zone found at the extreme northern and southern tips of Africa, featuring hot, dry summers and cool, wet winters.",
              "<strong class=\"kw\">Desert climatic region</strong>:",
              "Is a hyper-arid zone experiencing extreme temperatures, daytime heat and unreliable rainfall under 250 millimeters annually.",
              "<strong class=\"kw\">Semi-desert climatic region</strong>:",
              "Is a dry transition zone between the desert and savanna, experiencing low, unreliable rainfall and sparse vegetation.",
              "<strong class=\"kw\">Temperate climatic region</strong>:",
              "Is a high-altitude grassland zone also known as the Veld, experiencing warm summers and cold winters."
            ],
            tryThis: {
              question: "Which climatic region has hot dry summers and cool wet winters?",
              choices: ["Mediterranean climatic region", "Equatorial climatic region", "Desert climatic region", "Tropical climatic region"],
              correct: 0,
              explanation: "Mediterranean climate has hot dry summers and cool wet winters."
            }
          },
          {
            moduleId: "climatic-regions-examples",
            title: "Examples and Uses of Climatic Regions",
            bigIdea: "Each climatic region supports different farming, energy, livestock and tourism activities.",
            learnIt: [
              "### Examples and Uses of Climatic Regions",
              "<strong class=\"kw\">Examples:</strong>",
              "* <strong class=\"kw\">DRC</strong> lies completely within the hot and wet Equatorial belt.",
              "* <strong class=\"kw\">Gabon</strong> and Republic of Congo form part of the forested Amazon of Africa.",
              "* <strong class=\"kw\">Uganda</strong> and Kenya mostly experience modified Tropical savanna climate.",
              "* <strong class=\"kw\">Sahara Desert</strong> is the largest hot desert in the world.",
              "* <strong class=\"kw\">Kalahari</strong> and Namib Deserts lie in southwestern Africa.",
              "* <strong class=\"kw\">Cape Town</strong> region has Mediterranean climate.",
              "* <strong class=\"kw\">Highveld</strong> represents the temperate grassland climate.",
              "<strong class=\"kw\">Uses:</strong>",
              "* <strong class=\"kw\">Tropical double rainy seasons</strong> support large-scale crop farming.",
              "* <strong class=\"kw\">Desert solar radiation</strong> supports solar energy generation.",
              "* <strong class=\"kw\">Mediterranean weather</strong> supports citrus fruits and grapes for wine.",
              "* <strong class=\"kw\">Highveld grasslands</strong> support sheep rearing and wool production."
            ],
            tryThis: {
              question: "Which desert is the largest hot desert in the world?",
              choices: ["Sahara Desert", "Namib Desert", "Kalahari Desert", "Gobi Desert"],
              correct: 0,
              explanation: "The Sahara Desert in North Africa is the largest hot desert in the world."
            }
          },
          {
            moduleId: "climatic-regions-importance",
            title: "Importances, Advantages and Disadvantages of Climatic Regions",
            bigIdea: "Climatic regions shape farming, wildlife, disease patterns, rainfall and drought risk.",
            learnIt: [
              "### Importances, Advantages and Disadvantages",
              "<strong class=\"kw\">Importances:</strong>",
              "* <strong class=\"kw\">Equatorial rainforests</strong> regulate the global carbon cycle.",
              "* <strong class=\"kw\">Savanna ecosystems</strong> shape the distribution of African wildlife.",
              "* <strong class=\"kw\">Semi-arid zones</strong> determine pastoralist migration calendars.",
              "<strong class=\"kw\">Advantages:</strong>",
              "* <strong class=\"kw\">Equatorial regions</strong> support continuous crop growing.",
              "* <strong class=\"kw\">Desert and semi-desert regions</strong> reduce moisture-loving disease vectors.",
              "* <strong class=\"kw\">Temperate zones</strong> support healthy livestock through nutritious pasture.",
              "<strong class=\"kw\">Disadvantages:</strong>",
              "* <strong class=\"kw\">Desert and semi-desert zones</strong> cause droughts and famine.",
              "* <strong class=\"kw\">Equatorial regions</strong> harbor anopheles mosquitoes.",
              "* <strong class=\"kw\">Convectional storms</strong> cause destructive lightning in the Equatorial belt.",
              "* <strong class=\"kw\">Mediterranean zones</strong> limit agriculture because rain falls mainly in winter."
            ],
            tryThis: {
              question: "Which climatic region can support continuous crop growing?",
              choices: ["Equatorial region", "Desert region", "Semi-desert region", "Polar region"],
              correct: 0,
              explanation: "Equatorial regions have heat and rainfall throughout the year, supporting continuous crop growing."
            }
          }
        ]
      },
      {
        subtopicId: "characteristics-climate",
        title: "2. Characteristics of different climatic regions",
        modules: [
          {
            moduleId: "climatic-characteristics-meaning",
            title: "Characteristics of Different Climatic Regions",
            bigIdea: "Climatic characteristics are measurable features such as temperature, rainfall and humidity.",
            learnIt: [
              "### Characteristics of Different Climatic Regions",
              "<strong class=\"kw\">Climatic characteristics</strong>:",
              "Are the specific measurable atmospheric conditions such as temperature, rainfall pattern and humidity that uniquely define a particular climatic zone.",
              "<strong class=\"kw\">Types:</strong>",
              "* <strong class=\"kw\">Equatorial characteristics</strong> show hot wet conditions.",
              "* <strong class=\"kw\">Tropical characteristics</strong> show alternating wet and dry seasons.",
              "* <strong class=\"kw\">Desert characteristics</strong> show very dry and extreme conditions.",
              "* <strong class=\"kw\">Mediterranean characteristics</strong> show dry summers and wet winters."
            ],
            tryThis: {
              question: "Which item is a climatic characteristic?",
              choices: ["Rainfall pattern", "Capital city", "Country flag", "Parliament"],
              correct: 0,
              explanation: "Rainfall pattern is one of the measurable conditions used to describe climate."
            }
          },
          {
            moduleId: "characteristics-types-examples",
            title: "Types and Examples of Climatic Characteristics",
            bigIdea: "Different climatic regions have distinct temperature, rainfall and humidity patterns.",
            learnIt: [
              "### Types and Examples",
              "<strong class=\"kw\">Equatorial characteristics</strong>:",
              "Are atmospheric conditions featuring high temperatures throughout the year above 24°C, low temperature range about 2°C, high humidity and heavy convectional rainfall received in two peaks.",
              "<strong class=\"kw\">Tropical characteristics</strong>:",
              "Are atmospheric conditions featuring distinct alternating wet and dry seasons, with temperatures ranging from hot in the dry season to warm in the rainy season.",
              "<strong class=\"kw\">Desert characteristics</strong>:",
              "Are atmospheric conditions featuring extreme daytime temperatures, very cold nights, low humidity and unreliable rainfall below 250mm annually.",
              "<strong class=\"kw\">Mediterranean characteristics</strong>:",
              "Are atmospheric conditions featuring hot, completely dry summers and cool, wet winters due to prevailing westerly winds.",
              "<strong class=\"kw\">Examples:</strong>",
              "* <strong class=\"kw\">Congo Basin</strong> has regular afternoon thunderstorms around 4:00 PM.",
              "* <strong class=\"kw\">March and September equinoxes</strong> trigger high rainfall peaks in Equatorial zones.",
              "* <strong class=\"kw\">Harmattan winds</strong> cause dry dusty conditions in West Africa.",
              "* <strong class=\"kw\">Namib temperature inversion</strong> creates coastal fog but almost no rainfall."
            ],
            tryThis: {
              question: "Which wind causes dry dusty conditions in West Africa?",
              choices: ["Harmattan winds", "Westerlies only", "Sea breeze", "Land breeze"],
              correct: 0,
              explanation: "Harmattan winds cause dry dusty conditions across the Tropical savanna of West Africa."
            }
          },
          {
            moduleId: "characteristics-uses-importance",
            title: "Uses, Importances, Advantages and Disadvantages of Climatic Characteristics",
            bigIdea: "Climatic characteristics guide crop choices, tourism, water availability and plant adaptations.",
            learnIt: [
              "### Uses, Importances, Advantages and Disadvantages",
              "<strong class=\"kw\">Uses:</strong>",
              "* <strong class=\"kw\">Equatorial heat and moisture</strong> support rubber and oil palm.",
              "* <strong class=\"kw\">Tropical dry seasons</strong> support land clearing, harvesting and grain drying.",
              "* <strong class=\"kw\">Mediterranean winter rainfall</strong> supports wheat and barley.",
              "<strong class=\"kw\">Importances:</strong>",
              "* <strong class=\"kw\">Desert plants</strong> develop long roots and thick stems.",
              "* <strong class=\"kw\">Dry depressions</strong> support solar salt crystallization.",
              "<strong class=\"kw\">Advantages:</strong>",
              "* <strong class=\"kw\">Equatorial characteristics</strong> allow farming all year round.",
              "* <strong class=\"kw\">Tropical clear skies</strong> improve wildlife visibility for tourism.",
              "<strong class=\"kw\">Disadvantages:</strong>",
              "* <strong class=\"kw\">Constant heat and humidity</strong> encourage crop pests and disease vectors.",
              "* <strong class=\"kw\">Prolonged dry seasons</strong> restrict water for people and livestock."
            ],
            tryThis: {
              question: "Which climate supports rubber and oil palm cultivation?",
              choices: ["Equatorial climate", "Desert climate", "Temperate Veld only", "Semi-desert climate"],
              correct: 0,
              explanation: "Rubber and oil palm grow well in the hot, moist Equatorial climate."
            }
          }
        ]
      },
      {
        subtopicId: "factors-climate",
        title: "3. Factors that influence climate of Africa",
        modules: [
          {
            moduleId: "climatic-factors-meaning",
            title: "Factors that Influence Climate of Africa",
            bigIdea: "Climatic factors are physical and environmental forces that control climate patterns.",
            learnIt: [
              "### Factors that Influence Climate of Africa",
              "<strong class=\"kw\">Climatic factors</strong>:",
              "Are the physical, environmental and geographical forces that determine, modify and control the weather and climate patterns of a specific region.",
              "<strong class=\"kw\">Types:</strong>",
              "* <strong class=\"kw\">Latitude</strong> affects solar radiation.",
              "* <strong class=\"kw\">Altitude</strong> affects temperature.",
              "* <strong class=\"kw\">Distance from water bodies</strong> affects moisture.",
              "* <strong class=\"kw\">Prevailing winds</strong> carry moisture or dry dust.",
              "* <strong class=\"kw\">Ocean currents</strong> modify coastal temperature and moisture.",
              "* <strong class=\"kw\">Vegetation cover</strong> affects local moisture through transpiration."
            ],
            tryThis: {
              question: "Which factor causes temperatures to drop as land gets higher?",
              choices: ["Altitude", "Longitude", "Capital city", "Fishing"],
              correct: 0,
              explanation: "Altitude causes temperature to decrease as height above sea level increases."
            }
          },
          {
            moduleId: "climate-factor-definitions",
            title: "Definitions of Main Climate Factors",
            bigIdea: "Latitude, altitude, water bodies, winds, ocean currents and vegetation all influence climate in Africa.",
            learnIt: [
              "### Definitions of Main Climate Factors",
              "<strong class=\"kw\">Latitude</strong>:",
              "Is the angular distance north or south of the Equator that determines the intensity and angle of solar radiation a place receives.",
              "<strong class=\"kw\">Altitude</strong>:",
              "Is the height of land above sea level which directly causes temperatures to drop by 6.5°C for every 1000 meters ascended.",
              "<strong class=\"kw\">Distance from water bodies</strong>:",
              "Is the geographical proximity of a place to oceans or large lakes, dictating whether it receives moisture-laden breezes or continental dry air.",
              "<strong class=\"kw\">Prevailing winds</strong>:",
              "Are large-scale masses of moving air that blow from a specific direction, carrying either moisture or dry dust across continents.",
              "<strong class=\"kw\">Ocean currents</strong>:",
              "Are continuous directed movements of ocean water that modify temperatures and moisture content of adjacent coastal lands.",
              "<strong class=\"kw\">Vegetation cover</strong>:",
              "Is the thickness and distribution of plant life that influences local climate through transpiration."
            ],
            tryThis: {
              question: "At what rate does temperature drop with altitude in this content?",
              choices: ["6.5°C per 1000 meters", "1°C per 10 meters", "30°C per 1 meter", "No change at all"],
              correct: 0,
              explanation: "Temperature drops by about 6.5°C for every 1000 meters ascended."
            }
          },
          {
            moduleId: "climate-factor-examples",
            title: "Examples, Uses and Importance of Climate Factors",
            bigIdea: "Climate factors explain why different African places have different temperatures, rainfall and economic activities.",
            learnIt: [
              "### Examples, Uses and Importance",
              "<strong class=\"kw\">Examples:</strong>",
              "* <strong class=\"kw\">Equator</strong> makes nearby regions hotter and wetter.",
              "* <strong class=\"kw\">Mount Kilimanjaro</strong> has a snow-capped peak due to high altitude.",
              "* <strong class=\"kw\">Lake Victoria Basin</strong> receives heavy convectional rainfall near a large water body.",
              "* <strong class=\"kw\">Southeast Trade Winds</strong> bring moisture from the Indian Ocean into East Africa.",
              "* <strong class=\"kw\">Benguela Current</strong> helped form the dry Namib Desert.",
              "* <strong class=\"kw\">Mozambique Current</strong> brings warm moist conditions to southeastern Africa.",
              "<strong class=\"kw\">Uses:</strong>",
              "* <strong class=\"kw\">High-altitude areas</strong> support tea and coffee estates.",
              "* <strong class=\"kw\">Coastal breezes</strong> support tourist resorts and water sports.",
              "* <strong class=\"kw\">Heavy rainfall zones</strong> support commercial forestry and agroforestry.",
              "<strong class=\"kw\">Importances:</strong>",
              "* <strong class=\"kw\">Altitude differences</strong> explain different temperatures at the same latitude.",
              "* <strong class=\"kw\">Climatic factors</strong> influence nomadic pastoralist migration patterns."
            ],
            tryThis: {
              question: "Which current is linked to the dry Namib Desert?",
              choices: ["Benguela Current", "Mozambique Current", "Gulf Stream", "Equatorial Counter Current"],
              correct: 0,
              explanation: "The cold Benguela Current helps create dry conditions along the Namib coast."
            }
          },
          {
            moduleId: "climate-factor-advantages",
            title: "Advantages and Disadvantages of Climate Factors",
            bigIdea: "Climate factors can create habitable highlands and rainfall, but also deserts and rain-shadow zones.",
            learnIt: [
              "### Advantages and Disadvantages",
              "<strong class=\"kw\">Advantages:</strong>",
              "* <strong class=\"kw\">High altitude</strong> creates cool habitable climates in tropical regions.",
              "* <strong class=\"kw\">Lake breezes</strong> provide regular rainfall to lakeside communities.",
              "<strong class=\"kw\">Disadvantages:</strong>",
              "* <strong class=\"kw\">Cold ocean currents</strong> cause severe coastal deserts like the Namib.",
              "* <strong class=\"kw\">Rain-shadow zones</strong> suffer drought on the leeward side of highlands.",
              "<strong class=\"kw\">UNEB Exam Trap:</strong>",
              "* <strong class=\"kw\">High altitude</strong> can make equatorial places cold.",
              "* <strong class=\"kw\">Warm currents</strong> bring moist conditions.",
              "* <strong class=\"kw\">Cold currents</strong> often cause dry coastal conditions."
            ],
            tryThis: {
              question: "Which side of a highland is often dry because rain is blocked?",
              choices: ["Leeward side", "Windward side", "Lake side only", "Equator side only"],
              correct: 0,
              explanation: "The leeward side may be dry because the highland blocks moisture-bearing winds."
            }
          }
        ]
      },
      {
        subtopicId: "climate-human-activities",
        title: "4. Influence of climate on human activities",
        modules: [
          {
            moduleId: "human-activities-meaning-types",
            title: "Influence of Climate on Human Activities",
            bigIdea: "Climate influences farming, industry, trade, transport, tourism, dressing and housing.",
            learnIt: [
              "### Influence of Climate on Human Activities",
              "<strong class=\"kw\">Human activities</strong>:",
              "Are the economic, social and cultural operations carried out by people to earn a living and adapt to their geographical surroundings.",
              "<strong class=\"kw\">Types:</strong>",
              "* <strong class=\"kw\">Agricultural activities</strong> depend on rainfall and temperature.",
              "* <strong class=\"kw\">Industrial activities</strong> depend on climate-related raw materials.",
              "* <strong class=\"kw\">Commercial activities</strong> depend on weather stability and seasons.",
              "* <strong class=\"kw\">Recreational activities</strong> depend on favorable weather.",
              "<strong class=\"kw\">Agricultural activities</strong>:",
              "Are farming operations including crop cultivation and livestock rearing that depend directly on seasonal rainfall and temperature.",
              "<strong class=\"kw\">Industrial activities</strong>:",
              "Are processing and manufacturing operations that rely on climate-dependent raw materials like timber, agricultural yields and water resources.",
              "<strong class=\"kw\">Commercial activities</strong>:",
              "Are trading, transport and service operations whose logistics fluctuate based on weather stability and seasonal changes.",
              "<strong class=\"kw\">Recreational activities</strong>:",
              "Are leisure and tourism operations that depend on favorable weather conditions like clear skies or sunshine."
            ],
            tryThis: {
              question: "Which activity directly depends on seasonal rainfall and temperature?",
              choices: ["Agriculture", "Parliament debate", "Longitude drawing", "Capital naming"],
              correct: 0,
              explanation: "Agriculture depends directly on rainfall and temperature."
            }
          },
          {
            moduleId: "climate-human-activity-examples",
            title: "Examples, Uses and Importance",
            bigIdea: "Climate affects pastoralism, crop growing, terrace farming, tourism, drying crops and wind energy.",
            learnIt: [
              "### Examples, Uses and Importance",
              "<strong class=\"kw\">Examples:</strong>",
              "* <strong class=\"kw\">Karamojong</strong> and Fulani practice pastoralism in dry regions.",
              "* <strong class=\"kw\">Congo Basin</strong> supports double cropping due to constant heat and rainfall.",
              "* <strong class=\"kw\">Kigezi highlands</strong> support terrace farming, vegetables and Arabica coffee.",
              "* <strong class=\"kw\">Savanna parks</strong> support dry-season wildlife safaris.",
              "<strong class=\"kw\">Uses:</strong>",
              "* <strong class=\"kw\">Savanna dry seasons</strong> help sun-dry maize and beans.",
              "* <strong class=\"kw\">Coastal and desert winds</strong> pump water and generate electricity.",
              "<strong class=\"kw\">Importances:</strong>",
              "* <strong class=\"kw\">Dressing habits</strong> and house designs match regional temperatures.",
              "* <strong class=\"kw\">School calendars</strong> and transport schedules are affected by floods and downpours."
            ],
            tryThis: {
              question: "Which activity is common in dry regions with low rainfall?",
              choices: ["Nomadic pastoralism", "Double cropping rice every month", "Deep sea fishing inland", "Snow skiing in deserts"],
              correct: 0,
              explanation: "Dry regions often favor livestock keeping such as nomadic pastoralism over crop farming."
            }
          },
          {
            moduleId: "climate-human-activity-effects",
            title: "Advantages and Disadvantages of Climate on Human Activities",
            bigIdea: "Reliable climate can support food and tourism, while droughts, floods and pests can damage livelihoods.",
            learnIt: [
              "### Advantages and Disadvantages",
              "<strong class=\"kw\">Advantages:</strong>",
              "* <strong class=\"kw\">Reliable bimodal rainfall</strong> supports multiple harvests per year.",
              "* <strong class=\"kw\">Sunny tropical climates</strong> attract holidaymakers and boost tourism revenue.",
              "<strong class=\"kw\">Disadvantages:</strong>",
              "* <strong class=\"kw\">Severe droughts</strong> cause crop failure and livestock deaths.",
              "* <strong class=\"kw\">Heavy storms</strong> flood roads and sweep away bridges.",
              "* <strong class=\"kw\">Weather-dependent pests</strong> like desert locusts destroy vegetation.",
              "<strong class=\"kw\">UNEB Exam Trap:</strong>",
              "* <strong class=\"kw\">Climate</strong> affects both economic and social activities.",
              "* <strong class=\"kw\">Dry seasons</strong> can help harvesting but can also cause drought.",
              "* <strong class=\"kw\">Rainy seasons</strong> can support crops but can also disrupt transport."
            ],
            tryThis: {
              question: "Which climate problem can paralyze rural transport?",
              choices: ["Flooding roads and sweeping away bridges", "Clear skies for tourism", "Sun-drying maize", "Reliable rainfall"],
              correct: 0,
              explanation: "Heavy storms can flood roads and sweep away bridges, disrupting transport."
            }
          }
        ]
      },
      {
        subtopicId: "human-activities-climate",
        title: "5. Influence of human activities on climate",
        modules: [
          {
            moduleId: "climate-change-meaning-types",
            title: "Influence of Human Activities on Climate",
            bigIdea: "Human activities can change climate through global warming and local micro-climate modification.",
            learnIt: [
              "### Influence of Human Activities on Climate",
              "<strong class=\"kw\">Climate change</strong>:",
              "Is the long-term alteration or variation in global or regional climate patterns, primarily driven by human actions that disrupt the atmosphere.",
              "<strong class=\"kw\">Types:</strong>",
              "* <strong class=\"kw\">Global warming</strong> increases the overall temperature of the atmosphere.",
              "* <strong class=\"kw\">Micro-climate modification</strong> changes weather conditions in a small local area.",
              "<strong class=\"kw\">Global warming</strong>:",
              "Is the gradual increase in the overall temperature of the earth's atmosphere caused by the greenhouse effect and increased carbon dioxide emissions.",
              "<strong class=\"kw\">Micro-climate modification</strong>:",
              "Is the localized change in weather conditions within a small specific area resulting from immediate changes in the surrounding environment."
            ],
            tryThis: {
              question: "What is global warming?",
              choices: ["Gradual increase in the earth’s atmospheric temperature", "A short rainy afternoon", "A capital city changing location", "A river changing its name"],
              correct: 0,
              explanation: "Global warming is the gradual increase in the overall temperature of the earth’s atmosphere."
            }
          },
          {
            moduleId: "human-activities-climate-examples",
            title: "Examples, Uses and Importance",
            bigIdea: "Deforestation, swamp reclamation, smoke emissions and overgrazing can damage climate, while trees and agroforestry can restore it.",
            learnIt: [
              "### Examples, Uses and Importance",
              "<strong class=\"kw\">Examples:</strong>",
              "* <strong class=\"kw\">Mabira deforestation</strong> reduces local convectional rainfall.",
              "* <strong class=\"kw\">Swamp reclamation</strong> lowers humidity and dries local water sources.",
              "* <strong class=\"kw\">Factory smoke</strong> in Kampala and Jinja traps heat and raises urban temperatures.",
              "* <strong class=\"kw\">Overgrazing</strong> in Uganda’s cattle corridor removes vegetation and accelerates desertification.",
              "<strong class=\"kw\">Uses:</strong>",
              "* <strong class=\"kw\">Afforestation</strong> restores degraded forest cover.",
              "* <strong class=\"kw\">Reforestation</strong> helps stabilize unreliable rainfall.",
              "* <strong class=\"kw\">Smart agroforestry</strong> preserves soil moisture and cools crop farms.",
              "<strong class=\"kw\">Importances:</strong>",
              "* <strong class=\"kw\">Environmental planning</strong> helps design towns with less heat and pollution.",
              "* <strong class=\"kw\">Conservation laws</strong> protect water catchment areas from destruction."
            ],
            tryThis: {
              question: "Which activity can reduce local rainfall when forests are removed?",
              choices: ["Deforestation", "Afforestation", "Agroforestry", "Tree belt planting"],
              correct: 0,
              explanation: "Deforestation removes forest cover and can reduce local convectional rainfall."
            }
          },
          {
            moduleId: "human-activities-climate-effects",
            title: "Advantages and Disadvantages of Human Influence on Climate",
            bigIdea: "People can improve climate by planting trees, but they can also cause droughts, floods, desertification and water insecurity.",
            learnIt: [
              "### Advantages and Disadvantages",
              "<strong class=\"kw\">Advantages:</strong>",
              "* <strong class=\"kw\">Tree belts</strong> create windbreaks and cool hot concrete environments.",
              "* <strong class=\"kw\">Artificial forest reserves</strong> act as carbon sinks.",
              "* <strong class=\"kw\">Carbon sinks</strong> absorb dangerous greenhouse gases.",
              "<strong class=\"kw\">Disadvantages:</strong>",
              "* <strong class=\"kw\">Destroyed ecosystems</strong> cause prolonged droughts and flash floods.",
              "* <strong class=\"kw\">Desertification</strong> turns productive farmland into dry wasteland.",
              "* <strong class=\"kw\">Lowered water tables</strong> dry permanent streams and reduce water security.",
              "<strong class=\"kw\">UNEB Exam Trap:</strong>",
              "* <strong class=\"kw\">Afforestation</strong> improves climate conditions.",
              "* <strong class=\"kw\">Deforestation</strong> worsens climate conditions.",
              "* <strong class=\"kw\">Wetland destruction</strong> reduces humidity and local water supply."
            ],
            tryThis: {
              question: "Which human activity can act as a carbon sink?",
              choices: ["Creating forest reserves", "Burning forests", "Draining swamps", "Overgrazing grasslands"],
              correct: 0,
              explanation: "Forest reserves absorb carbon dioxide and act as carbon sinks."
            }
          }
        ]
      },
      {
        subtopicId: "premium-climate-interpretation",
        title: "Premium Exam Practice: Climate Interpretation",
        modules: [
          {
            moduleId: "climate-graph-answering",
            title: "Premium Climate Interpretation Answers",
            bigIdea: "Strong climate answers connect rainfall, temperature, seasons and human activities.",
            learnIt: [
              "### Premium Exam Practice: Climate Interpretation",
              "<strong class=\"kw\">Climate interpretation answer</strong>:",
              "Is a clear answer that uses rainfall, temperature, seasons and examples to explain climate or human activity.",
              "<strong class=\"kw\">Types:</strong>",
              "* <strong class=\"kw\">Climate-region answer</strong> identifies the climatic zone.",
              "* <strong class=\"kw\">Climate-factor answer</strong> explains the cause of climate conditions.",
              "* <strong class=\"kw\">Human-activity answer</strong> links climate to work and settlement.",
              "<strong class=\"kw\">Examples:</strong>",
              "* <strong class=\"kw\">Equatorial climate</strong> supports all-year farming.",
              "* <strong class=\"kw\">Desert climate</strong> supports solar energy but limits crop farming.",
              "* <strong class=\"kw\">Altitude</strong> makes highland areas cooler.",
              "* <strong class=\"kw\">Cold ocean currents</strong> create dry coastal conditions."
            ],
            tryThis: {
              question: "Which factor makes highland areas cooler?",
              choices: ["Altitude", "Longitude", "Capital city", "Population"],
              correct: 0,
              explanation: "Altitude lowers temperature as height increases."
            }
          },
          {
            moduleId: "climate-worked-example",
            title: "Worked Example: Climate and Farming",
            bigIdea: "A complete climate answer should name the climate, describe rainfall or temperature and link it to the human activity.",
            learnIt: [
              "### Worked Example: Climate and Farming",
              "<strong class=\"kw\">Worked climate answer</strong>:",
              "Is a model answer showing how climate affects human activities.",
              "<strong class=\"kw\">Steps:</strong>",
              "* <strong class=\"kw\">Name the climate</strong> in the region.",
              "* <strong class=\"kw\">State rainfall and temperature</strong> clearly.",
              "* <strong class=\"kw\">Link climate to farming</strong> or another activity.",
              "* <strong class=\"kw\">Add one example</strong> from Africa.",
              "<strong class=\"kw\">Examples:</strong>",
              "* <strong class=\"kw\">Equatorial climate</strong> has constant heat and rainfall.",
              "* <strong class=\"kw\">Tropical climate</strong> has wet and dry seasons.",
              "* <strong class=\"kw\">Dry climate</strong> favors pastoralism more than crop farming."
            ],
            tryThis: {
              question: "Which answer best links climate to farming?",
              choices: ["Equatorial climate has rainfall throughout the year, so it supports continuous crop growing.", "Climate is a capital city.", "Weather never affects crops.", "Desert climate gives heavy rainfall all year."],
              correct: 0,
              explanation: "This answer names the climate, states rainfall and links it to crop growing."
            },
            workedExample: {
              question: "Explain why equatorial regions can support continuous crop growing.",
              steps: ["Identify the climate: equatorial.", "State the key conditions: constant heat and rainfall.", "Link the conditions to farming throughout the year."],
              answer: "Equatorial regions can support continuous crop growing because they have constant heat and rainfall throughout the year."
            }
          },
          {
            moduleId: "climate-exam-traps",
            title: "UNEB Traps in Climate Questions",
            bigIdea: "Climate questions often test weather versus climate, altitude, ocean currents and human influence.",
            learnIt: [
              "### UNEB Traps in Climate Questions",
              "<strong class=\"kw\">UNEB exam trap</strong>:",
              "Is a common climate mistake that causes learners to lose marks.",
              "<strong class=\"kw\">Types:</strong>",
              "* <strong class=\"kw\">Weather-climate trap</strong> confuses short-term and long-term conditions.",
              "* <strong class=\"kw\">Altitude trap</strong> ignores cooling with height.",
              "* <strong class=\"kw\">Ocean-current trap</strong> confuses warm and cold currents.",
              "* <strong class=\"kw\">Human-influence trap</strong> ignores deforestation and pollution.",
              "<strong class=\"kw\">Examples:</strong>",
              "* <strong class=\"kw\">Weather</strong> is short-term atmospheric condition.",
              "* <strong class=\"kw\">Climate</strong> is long-term average weather.",
              "* <strong class=\"kw\">Benguela Current</strong> is cold and creates dry coastal conditions.",
              "* <strong class=\"kw\">Mozambique Current</strong> is warm and brings moist conditions.",
              "* <strong class=\"kw\">Deforestation</strong> reduces local rainfall.",
              "<strong class=\"kw\">Advantages:</strong>",
              "* <strong class=\"kw\">Trap awareness</strong> improves climate reasoning answers.",
              "* <strong class=\"kw\">Keyword checking</strong> helps learners answer command words correctly."
            ],
            tryThis: {
              question: "Which statement is correct?",
              choices: ["Weather is short-term; climate is long-term average weather.", "Weather and climate mean exactly the same thing.", "Climate is one afternoon only.", "Weather is always 35 years long."],
              correct: 0,
              explanation: "Weather is short-term, while climate is the long-term average weather condition."
            }
          }
        ]
      }
    ],
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
        title: "1. Vegetation types of Africa",
        modules: [
          {
            moduleId: "vegetation-types-meaning",
            title: "Vegetation Types of Africa",
            bigIdea: "Vegetation is the plant cover of an area and Africa has forests, savanna, desert, mountain, Mediterranean and mangrove vegetation.",
            learnIt: [
              "### Vegetation Types of Africa",
              "<strong class=\"kw\">Vegetation</strong>:",
              "Is the general plant life or cover of an area, which can grow naturally or be planted by human beings.",
              "<strong class=\"kw\">Types:</strong>",
              "* <strong class=\"kw\">Equatorial rainforests</strong> are dense evergreen forests in hot wet areas.",
              "* <strong class=\"kw\">Savanna vegetation</strong> is tropical grassland with scattered trees.",
              "* <strong class=\"kw\">Mediterranean vegetation</strong> has short trees with thick bark and leathery leaves.",
              "* <strong class=\"kw\">Desert and semi-desert vegetation</strong> has drought-resistant plants.",
              "* <strong class=\"kw\">Mountain vegetation</strong> changes with altitude.",
              "* <strong class=\"kw\">Mangrove forests</strong> grow in salty coastal waters and mudflats.",
              "<strong class=\"kw\">Equatorial rainforests</strong>:",
              "Are dense, evergreen forests found in the hot, wet equatorial belt, characterized by tall trees forming multiple layers or canopies.",
              "<strong class=\"kw\">Savanna vegetation</strong>:",
              "Is a vast tropical grassland region divided into wet savanna and dry savanna, characterized by scattered trees and tall grasses.",
              "<strong class=\"kw\">Mediterranean vegetation</strong>:",
              "Is a specialized plant zone found at the extreme northern and southern tips of Africa, consisting of short trees with thick bark and leathery leaves to survive dry summers."
            ],
            tryThis: {
              question: "What is vegetation?",
              choices: ["The general plant life or cover of an area", "The daily state of the atmosphere", "A capital city", "A marine gateway"],
              correct: 0,
              explanation: "Vegetation is the general plant life or cover of an area."
            }
          },
          {
            moduleId: "vegetation-types-definitions-examples",
            title: "Vegetation Type Definitions and Examples",
            bigIdea: "Different vegetation types are identified by rainfall, temperature, altitude, soil and coastal conditions.",
            learnIt: [
              "### Vegetation Type Definitions and Examples",
              "<strong class=\"kw\">Desert and semi-desert vegetation</strong>:",
              "Is a sparse plant zone consisting of drought-resistant scrub, thorny bushes and cacti adapted to hyper-arid conditions.",
              "<strong class=\"kw\">Mountain vegetation</strong>:",
              "Is a layered plant community that changes systematically with increasing altitude, ranging from dense forest to bamboo, heath and alpine moorland.",
              "<strong class=\"kw\">Mangrove forests</strong>:",
              "Are water-resistant forests with tangled aerial roots found growing in salty coastal waters and mudflats along ocean margins.",
              "<strong class=\"kw\">Examples:</strong>",
              "* <strong class=\"kw\">Congo Basin Forest</strong> is the largest continuous equatorial rainforest in Africa.",
              "* <strong class=\"kw\">Mabira Forest</strong> and Budongo Forest are major tropical rainforests in Uganda.",
              "* <strong class=\"kw\">Miombo Woodlands</strong> cover parts of Tanzania, Zambia and Malawi.",
              "* <strong class=\"kw\">Baobab</strong> and Acacia trees are drought-resistant savanna trees.",
              "* <strong class=\"kw\">Okoume</strong> and Mahogany are valuable equatorial hardwoods.",
              "* <strong class=\"kw\">Olive</strong>, Cork Oak and Citrus trees dominate Mediterranean vegetation.",
              "* <strong class=\"kw\">Lobelia</strong> and Senecio are Afro-alpine plants at high mountain altitudes."
            ],
            tryThis: {
              question: "Which forest is the largest continuous equatorial rainforest in Africa?",
              choices: ["Congo Basin Forest", "Mabira Forest", "Mangrove forest", "Mediterranean forest"],
              correct: 0,
              explanation: "The Congo Basin Forest is the largest continuous equatorial rainforest in Africa."
            }
          },
          {
            moduleId: "vegetation-uses-importance",
            title: "Uses, Importances, Advantages and Disadvantages of Vegetation",
            bigIdea: "Vegetation provides timber, medicine, fuel, pasture, climate regulation and tourism, but it can also harbor pests and obstruct transport.",
            learnIt: [
              "### Uses, Importances, Advantages and Disadvantages",
              "<strong class=\"kw\">Uses:</strong>",
              "* <strong class=\"kw\">Hardwood timber</strong> supports furniture making and export.",
              "* <strong class=\"kw\">Medicinal herbs</strong> support local and modern pharmaceuticals.",
              "* <strong class=\"kw\">Firewood and charcoal</strong> provide cooking energy.",
              "* <strong class=\"kw\">Latex and sap</strong> support industrial rubber processing.",
              "<strong class=\"kw\">Importances:</strong>",
              "* <strong class=\"kw\">Wildlife habitats</strong> preserve biodiversity.",
              "* <strong class=\"kw\">Carbon sinks</strong> absorb carbon dioxide and release oxygen.",
              "* <strong class=\"kw\">Plant roots</strong> hold soil particles and reduce erosion.",
              "<strong class=\"kw\">Advantages:</strong>",
              "* <strong class=\"kw\">Savanna pasture</strong> feeds wild herbivores and livestock.",
              "* <strong class=\"kw\">Eco-tourism</strong> earns national revenue from forest reserves.",
              "<strong class=\"kw\">Disadvantages:</strong>",
              "* <strong class=\"kw\">Tsetse flies</strong> in savanna woodlands limit settlement.",
              "* <strong class=\"kw\">Forest undergrowth</strong> makes road construction difficult.",
              "* <strong class=\"kw\">Predators and reptiles</strong> threaten nearby communities."
            ],
            tryThis: {
              question: "Which vegetation use is linked to mahogany and ebony?",
              choices: ["Hardwood timber", "Solar energy", "Longitude calculation", "Port construction"],
              correct: 0,
              explanation: "Mahogany and ebony are hardwood timber resources."
            }
          }
        ]
      },
      {
        subtopicId: "factors-vegetation",
        title: "2. Factors that influence vegetation distribution",
        modules: [
          {
            moduleId: "vegetation-distribution-meaning",
            title: "Factors that Influence Vegetation Distribution",
            bigIdea: "Vegetation distribution is the spread and density of plant life across different regions.",
            learnIt: [
              "### Factors that Influence Vegetation Distribution",
              "<strong class=\"kw\">Vegetation distribution</strong>:",
              "Is the geographical arrangement, spread or density of plant life across different regions of the continent.",
              "<strong class=\"kw\">Types:</strong>",
              "* <strong class=\"kw\">Climatic factors</strong> include rainfall and temperature.",
              "* <strong class=\"kw\">Edaphic factors</strong> are soil factors.",
              "* <strong class=\"kw\">Physiographic factors</strong> are relief and landform factors.",
              "* <strong class=\"kw\">Biotic factors</strong> are human and animal influences.",
              "<strong class=\"kw\">Climatic factors</strong>:",
              "Are atmospheric elements, primarily rainfall and temperature, that determine water availability and plant growth cycles.",
              "<strong class=\"kw\">Edaphic factors</strong>:",
              "Are the physical and chemical properties of soil, including depth, texture and fertility, that dictate what plant species can grow there.",
              "<strong class=\"kw\">Physiographic factors</strong>:",
              "Are structural landforms, altitude and slope angle that modify local weather and water drainage.",
              "<strong class=\"kw\">Biotic factors</strong>:",
              "Are living organisms whose interactions, grazing habits or destructive activities alter natural plant cover."
            ],
            tryThis: {
              question: "Which vegetation factor refers to soil?",
              choices: ["Edaphic factor", "Climatic factor", "Political factor", "Marine factor"],
              correct: 0,
              explanation: "Edaphic factors are soil factors such as soil depth, texture and fertility."
            }
          },
          {
            moduleId: "vegetation-distribution-examples",
            title: "Examples, Uses, Importances and Effects",
            bigIdea: "Rainfall, soil, altitude and human activity explain why vegetation changes from place to place.",
            learnIt: [
              "### Examples, Uses, Importances and Effects",
              "<strong class=\"kw\">Examples:</strong>",
              "* <strong class=\"kw\">Congo Basin rainfall</strong> supports dense evergreen rainforest.",
              "* <strong class=\"kw\">Sahara rainfall below 250mm</strong> limits plants to cacti and thorny shrubs.",
              "* <strong class=\"kw\">Mount Elgon volcanic soils</strong> support montane forests and crops.",
              "* <strong class=\"kw\">Sandy coastal soils</strong> support specialized mangrove forests.",
              "* <strong class=\"kw\">High altitude</strong> changes forests into bamboo and alpine moorland.",
              "* <strong class=\"kw\">Bush burning</strong> changes woodlands into open savanna grasslands.",
              "<strong class=\"kw\">Uses:</strong>",
              "* <strong class=\"kw\">Soil and rainfall analysis</strong> guides timber plantation locations.",
              "* <strong class=\"kw\">Heavy rainfall zones</strong> guide forest reserve protection.",
              "<strong class=\"kw\">Importances:</strong>",
              "* <strong class=\"kw\">Vegetation distribution</strong> explains forest-to-grassland change away from the Equator.",
              "* <strong class=\"kw\">Risk prediction</strong> helps conservationists identify desertification areas.",
              "<strong class=\"kw\">Advantages:</strong>",
              "* <strong class=\"kw\">High rainfall</strong> allows natural vegetation regeneration.",
              "* <strong class=\"kw\">Mountain vegetation layers</strong> support distinct wildlife zones.",
              "<strong class=\"kw\">Disadvantages:</strong>",
              "* <strong class=\"kw\">Semi-arid zones</strong> limit tall hardwood growth.",
              "* <strong class=\"kw\">Overpopulation</strong> accelerates natural plant destruction."
            ],
            tryThis: {
              question: "Which area supports dense evergreen rainforest due to heavy rainfall?",
              choices: ["Congo Basin", "Sahara Desert", "Namib Desert", "Kalahari Desert"],
              correct: 0,
              explanation: "Heavy rainfall in the Congo Basin supports dense evergreen rainforest."
            }
          }
        ]
      },
      {
        subtopicId: "importance-vegetation",
        title: "3. Importance of vegetation",
        modules: [
          {
            moduleId: "natural-resource-meaning",
            title: "Importance of Vegetation as a Natural Resource",
            bigIdea: "Vegetation is a natural resource because people use plants and forests to meet needs and generate wealth.",
            learnIt: [
              "### Importance of Vegetation",
              "<strong class=\"kw\">Natural resource</strong>:",
              "Is any material found in nature that humans can use to satisfy their needs and generate economic wealth.",
              "<strong class=\"kw\">Types:</strong>",
              "* <strong class=\"kw\">Renewable vegetation resources</strong> can grow back when managed sustainably.",
              "* <strong class=\"kw\">Non-renewable vegetation resources</strong> cannot be replaced once extracted and consumed.",
              "<strong class=\"kw\">Renewable vegetation resources</strong>:",
              "Are plant covers and forests that have the capacity to regenerate, grow back or multiply naturally after being harvested, provided they are managed sustainably.",
              "<strong class=\"kw\">Non-renewable vegetation resources</strong>:",
              "Are ancient fossilized plant matters like coal beds trapped deep underground that cannot be replaced once extracted and consumed.",
              "<strong class=\"kw\">Examples:</strong>",
              "* <strong class=\"kw\">Mabira Forest</strong> regulates rainfall for Central Uganda.",
              "* <strong class=\"kw\">Budongo Forest</strong> contains valuable mahogany.",
              "* <strong class=\"kw\">Savannah Grasslands</strong> graze Africa’s herbivore herds.",
              "* <strong class=\"kw\">Mangrove Swamps</strong> filter pollutants and reduce wave erosion."
            ],
            tryThis: {
              question: "Which vegetation resource can grow back if managed well?",
              choices: ["Renewable vegetation resource", "Non-renewable vegetation resource", "Coal bed only", "Petroleum field"],
              correct: 0,
              explanation: "Renewable vegetation resources can regenerate if managed sustainably."
            }
          },
          {
            moduleId: "vegetation-importance-uses",
            title: "Uses, Importances, Advantages and Disadvantages of Vegetation Resources",
            bigIdea: "Vegetation supports construction, medicine, fuel, food industries, rainfall, rivers, oxygen and soil protection.",
            learnIt: [
              "### Uses, Importances, Advantages and Disadvantages",
              "<strong class=\"kw\">Uses:</strong>",
              "* <strong class=\"kw\">Hardwood timber</strong> supports construction, furniture and export trade.",
              "* <strong class=\"kw\">Barks, leaves and roots</strong> provide traditional and modern medicines.",
              "* <strong class=\"kw\">Wood fuel</strong> and charcoal supply cooking energy.",
              "* <strong class=\"kw\">Wild fruits, nuts and sap</strong> supply food and chemical industries.",
              "<strong class=\"kw\">Importances:</strong>",
              "* <strong class=\"kw\">Transpiration</strong> releases moisture for convectional rainfall.",
              "* <strong class=\"kw\">Water catchments</strong> purify runoff and feed permanent rivers.",
              "* <strong class=\"kw\">Carbon sinks</strong> absorb carbon dioxide and release oxygen.",
              "* <strong class=\"kw\">Root networks</strong> prevent destructive soil erosion.",
              "<strong class=\"kw\">Advantages:</strong>",
              "* <strong class=\"kw\">Natural pasture</strong> feeds wild herbivores and livestock.",
              "* <strong class=\"kw\">Eco-tourism</strong> earns foreign exchange in forest reserves.",
              "<strong class=\"kw\">Disadvantages:</strong>",
              "* <strong class=\"kw\">Tsetse flies</strong> cause nagana and sleeping sickness.",
              "* <strong class=\"kw\">Predators and poisonous reptiles</strong> threaten nearby communities.",
              "* <strong class=\"kw\">Dense vegetation</strong> obstructs roads and railways."
            ],
            tryThis: {
              question: "Which process releases moisture from plants into the atmosphere?",
              choices: ["Transpiration", "Faulting", "Desalination", "Longitude"],
              correct: 0,
              explanation: "Transpiration releases moisture from plants into the atmosphere."
            }
          }
        ]
      },
      {
        subtopicId: "game-parks-animals",
        title: "4. Game parks and animals",
        modules: [
          {
            moduleId: "game-parks-meaning-types",
            title: "Game Parks and Animals",
            bigIdea: "Game parks and reserves protect wild animals, birds and natural vegetation.",
            learnIt: [
              "### Game Parks and Animals",
              "<strong class=\"kw\">National game park</strong>:",
              "Is a large area of land set aside and protected by the government for the preservation of wild animals, birds and natural vegetation.",
              "<strong class=\"kw\">Game reserve</strong>:",
              "Is an area of land protected by the government where wild animals are preserved, but controlled hunting or limited resource extraction may be permitted under special licenses.",
              "<strong class=\"kw\">Types:</strong>",
              "* <strong class=\"kw\">Savanna game parks</strong> protect wildlife in open grasslands.",
              "* <strong class=\"kw\">Forest game parks</strong> protect primates and rare birds in dense forests.",
              "* <strong class=\"kw\">Marine game parks</strong> protect aquatic wildlife and coastal waters.",
              "<strong class=\"kw\">Savanna game parks</strong>:",
              "Are wildlife conservation areas located in open grasslands, dominated by large herbivores and carnivores.",
              "<strong class=\"kw\">Forest game parks</strong>:",
              "Are conservation areas located in dense mountain or equatorial forests, primarily protecting primates and rare bird species.",
              "<strong class=\"kw\">Marine game parks</strong>:",
              "Are protected ocean or lake coastal waters designed to preserve aquatic wildlife, coral reefs and water birds."
            ],
            tryThis: {
              question: "What is a national game park?",
              choices: ["A protected area for wild animals, birds and vegetation", "A capital city", "A coastal port", "A desert climate"],
              correct: 0,
              explanation: "A national game park is protected by government for wildlife and vegetation preservation."
            }
          },
          {
            moduleId: "game-parks-examples-importance",
            title: "Examples, Uses, Importances, Advantages and Disadvantages of Game Parks",
            bigIdea: "Game parks protect wildlife and earn tourism income but may also create human-wildlife conflicts.",
            learnIt: [
              "### Examples, Uses, Importances, Advantages and Disadvantages",
              "<strong class=\"kw\">Examples:</strong>",
              "* <strong class=\"kw\">Kidepo Valley National Park</strong> is famous for ostriches and cheetahs.",
              "* <strong class=\"kw\">Murchison Falls National Park</strong> is Uganda’s largest national park.",
              "* <strong class=\"kw\">Queen Elizabeth National Park</strong> is famous for tree-climbing lions and Kazinga Channel.",
              "* <strong class=\"kw\">Serengeti National Park</strong> is famous for wildebeest migration.",
              "* <strong class=\"kw\">Kruger National Park</strong> is known for the Big Five.",
              "* <strong class=\"kw\">Bwindi Impenetrable National Park</strong> protects mountain gorillas.",
              "<strong class=\"kw\">Uses:</strong>",
              "* <strong class=\"kw\">Safe habitats</strong> allow animals to breed, graze and hunt naturally.",
              "* <strong class=\"kw\">Scientific research</strong> supports field studies and education.",
              "* <strong class=\"kw\">Safari lodges</strong> support tourism.",
              "<strong class=\"kw\">Importances:</strong>",
              "* <strong class=\"kw\">Foreign exchange</strong> is earned through tourism.",
              "* <strong class=\"kw\">Employment</strong> is created for guides, rangers and hotel workers.",
              "* <strong class=\"kw\">Endangered species</strong> are preserved from extinction.",
              "<strong class=\"kw\">Advantages:</strong>",
              "* <strong class=\"kw\">Infrastructure</strong> improves through roads, hotels and airstrips.",
              "* <strong class=\"kw\">Local markets</strong> grow for crafts, souvenirs and food.",
              "<strong class=\"kw\">Disadvantages:</strong>",
              "* <strong class=\"kw\">Human-wildlife conflict</strong> destroys crops and lives.",
              "* <strong class=\"kw\">Poaching</strong> kills animals for ivory, skins and bushmeat.",
              "* <strong class=\"kw\">Protected land</strong> reduces land available for farming and settlement."
            ],
            tryThis: {
              question: "Which Ugandan park protects mountain gorillas?",
              choices: ["Bwindi Impenetrable National Park", "Murchison Falls National Park", "Kidepo Valley National Park", "Serengeti National Park"],
              correct: 0,
              explanation: "Bwindi Impenetrable National Park protects mountain gorillas."
            }
          }
        ]
      },
      {
        subtopicId: "population-vegetation",
        title: "5. Population and vegetation",
        modules: [
          {
            moduleId: "population-pressure-meaning",
            title: "Population and Vegetation",
            bigIdea: "Population pressure affects vegetation by increasing demand for land, fuel, building materials and settlement space.",
            learnIt: [
              "### Population and Vegetation",
              "<strong class=\"kw\">Population pressure</strong>:",
              "Is a situation where the number of people living in a specific geographical area exceeds the available natural resources, including land and vegetation.",
              "<strong class=\"kw\">Types:</strong>",
              "* <strong class=\"kw\">Overpopulation</strong> means too many people for available resources.",
              "* <strong class=\"kw\">Underpopulation</strong> means too few people to fully use available resources.",
              "<strong class=\"kw\">Overpopulation</strong>:",
              "Is when the number of people in an area is too large for the available resources to support them sustainably.",
              "<strong class=\"kw\">Underpopulation</strong>:",
              "Is when the number of people in an area is too small to fully utilize and develop the available natural resources.",
              "<strong class=\"kw\">Examples:</strong>",
              "* <strong class=\"kw\">Kigezi highlands</strong> have severe farmland fragmentation and hillside vegetation destruction.",
              "* <strong class=\"kw\">Lake Victoria crescent</strong> has lost wetlands and forests to housing and industry.",
              "* <strong class=\"kw\">Karamoja</strong> has sparse populations that allow dry savanna vegetation to remain.",
              "* <strong class=\"kw\">Congo Basin interior</strong> has low human density that preserves rainforest."
            ],
            tryThis: {
              question: "What is overpopulation?",
              choices: ["Too many people for available resources", "Too few people to use resources", "A type of tree", "A game park"],
              correct: 0,
              explanation: "Overpopulation occurs when people are too many for the available resources."
            }
          },
          {
            moduleId: "population-vegetation-effects",
            title: "Uses, Importances, Advantages and Disadvantages of Population Pressure",
            bigIdea: "Population can support tree planting and environmental funding, but it can also cause deforestation, swamp reclamation and land degradation.",
            learnIt: [
              "### Uses, Importances, Advantages and Disadvantages",
              "<strong class=\"kw\">Uses:</strong>",
              "* <strong class=\"kw\">Dense labor forces</strong> can support afforestation and reforestation.",
              "* <strong class=\"kw\">Forest products</strong> meet construction, building and fuel needs.",
              "<strong class=\"kw\">Importances:</strong>",
              "* <strong class=\"kw\">Balanced settlement</strong> prevents depletion of forests and catchments.",
              "* <strong class=\"kw\">Environmental laws</strong> protect forests from illegal encroachment.",
              "<strong class=\"kw\">Advantages:</strong>",
              "* <strong class=\"kw\">Community labor</strong> supports agroforestry and tree planting.",
              "* <strong class=\"kw\">Tax revenue</strong> funds environmental bodies like NEMA.",
              "<strong class=\"kw\">Disadvantages:</strong>",
              "* <strong class=\"kw\">Deforestation</strong> increases as people seek land for food and settlement.",
              "* <strong class=\"kw\">Swamp reclamation</strong> lowers humidity and destroys fish breeding grounds.",
              "* <strong class=\"kw\">Land degradation</strong> increases through overcultivation and overgrazing."
            ],
            tryThis: {
              question: "Which problem is caused by expanding populations clearing land?",
              choices: ["Deforestation", "Afforestation", "Eco-tourism", "Carbon sink growth"],
              correct: 0,
              explanation: "Expanding populations may clear forests for farming and settlement, causing deforestation."
            }
          }
        ]
      },
      {
        subtopicId: "premium-vegetation-application",
        title: "Premium Exam Practice: Vegetation Reasoning",
        modules: [
          {
            moduleId: "vegetation-exam-traps",
            title: "Premium Exam Practice: Vegetation Reasoning",
            bigIdea: "Strong vegetation answers define the vegetation type, give examples and connect it to climate, soil, wildlife or human use.",
            learnIt: [
              "### Premium Exam Practice: Vegetation Reasoning",
              "<strong class=\"kw\">Vegetation reasoning answer</strong>:",
              "Is a clear answer that links plant cover to climate, soil, altitude, wildlife or human activity.",
              "<strong class=\"kw\">Types:</strong>",
              "* <strong class=\"kw\">Type answer</strong> identifies the vegetation zone.",
              "* <strong class=\"kw\">Factor answer</strong> explains why vegetation grows there.",
              "* <strong class=\"kw\">Importance answer</strong> states how vegetation helps people or the environment.",
              "* <strong class=\"kw\">Problem answer</strong> states how vegetation or population pressure causes difficulty.",
              "<strong class=\"kw\">Examples:</strong>",
              "* <strong class=\"kw\">Equatorial rainforest</strong> grows where rainfall is heavy and reliable.",
              "* <strong class=\"kw\">Desert vegetation</strong> survives with little rainfall.",
              "* <strong class=\"kw\">Mangroves</strong> grow in salty coastal waters.",
              "* <strong class=\"kw\">Montane vegetation</strong> changes with altitude.",
              "<strong class=\"kw\">UNEB Exam Trap:</strong>",
              "* <strong class=\"kw\">Vegetation</strong> is plant cover, not climate itself.",
              "* <strong class=\"kw\">Savanna</strong> is grassland with scattered trees.",
              "* <strong class=\"kw\">Mangroves</strong> are coastal forests, not desert plants."
            ],
            tryThis: {
              question: "Which vegetation grows in salty coastal waters?",
              choices: ["Mangrove forests", "Equatorial rainforest", "Mediterranean vegetation", "Alpine moorland"],
              correct: 0,
              explanation: "Mangrove forests grow in salty coastal waters and mudflats."
            }
          },
          {
            moduleId: "vegetation-worked-example",
            title: "Worked Example: Vegetation Importance",
            bigIdea: "A complete vegetation answer should name the vegetation and state a clear use or importance.",
            learnIt: [
              "### Worked Example: Vegetation Importance",
              "<strong class=\"kw\">Worked vegetation answer</strong>:",
              "Is a model answer showing how to explain the importance of plant cover.",
              "<strong class=\"kw\">Steps:</strong>",
              "* <strong class=\"kw\">Name the vegetation</strong> before explaining it.",
              "* <strong class=\"kw\">State a direct use</strong> such as timber, pasture or medicine.",
              "* <strong class=\"kw\">State an environmental importance</strong> such as rainfall, oxygen or soil protection.",
              "* <strong class=\"kw\">Use a real example</strong> where possible.",
              "<strong class=\"kw\">Examples:</strong>",
              "* <strong class=\"kw\">Mabira Forest</strong> helps regulate rainfall.",
              "* <strong class=\"kw\">Savanna grasslands</strong> provide pasture for animals.",
              "* <strong class=\"kw\">Mangroves</strong> reduce coastal erosion."
            ],
            tryThis: {
              question: "Which answer best explains an importance of vegetation?",
              choices: ["Vegetation protects soil from erosion by holding soil particles with roots.", "Vegetation is a country capital.", "Vegetation is a longitude line.", "Vegetation stops all rainfall."],
              correct: 0,
              explanation: "Plant roots hold soil particles and reduce soil erosion."
            },
            workedExample: {
              question: "State two ways vegetation is important to people and the environment.",
              steps: ["Think of a direct human use such as timber, medicine or pasture.", "Think of an environmental role such as rainfall, oxygen or soil protection.", "Write two clear points with vegetation keywords."],
              answer: "Vegetation provides timber and medicine, and it protects soil from erosion by holding soil particles with roots."
            }
          }
        ]
      }
    ],
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
            moduleId: "ethnic-group-meaning",
            title: "What is an ethnic group?",
            bigIdea: "Ethnic groups share culture, language, origin or history, and all groups deserve respect.",
            learnIt: [
              "### Origin of Different Ethnic Groups",
              "<strong class=\"kw\">Ethnic group</strong>:",
              "Is a group of people who share culture, language, origin or history.",
              "<strong class=\"kw\">Examples:</strong>",
              "* <strong class=\"kw\">Bantu</strong> are one major ethnic group in Africa.",
              "* <strong class=\"kw\">Nilotes</strong> are one major ethnic group in Africa.",
              "* <strong class=\"kw\">Cushites</strong> are one major ethnic group in Africa.",
              "* <strong class=\"kw\">Semites</strong> are one major ethnic group in Africa.",
              "* <strong class=\"kw\">Berbers</strong> are found mainly in North Africa.",
              "* <strong class=\"kw\">Khoisan</strong> are associated with Southern Africa.",
              "<strong class=\"kw\">UNEB Exam Trap:</strong>",
              "* <strong class=\"kw\">Ethnic group</strong> does not mean race superiority.",
              "* <strong class=\"kw\">Culture and language</strong> are key identifiers of ethnic groups."
            ],
            tryThis: {
              question: "An ethnic group commonly shares:",
              choices: ["Culture and origin", "Only shoe size", "Only rainfall", "Only road signs"],
              correct: 0,
              explanation: "Ethnic groups share culture, language, origin or history."
            }
          }
        ]
      },
      {
        subtopicId: "movements-ethnic-groups",
        title: "2. Movements of different ethnic groups into Africa",
        modules: [
          {
            moduleId: "migration-meaning-reasons",
            title: "Migration of ethnic groups",
            bigIdea: "Migration explains how different groups moved and settled in different parts of Africa.",
            learnIt: [
              "### Movements of Different Ethnic Groups into Africa",
              "<strong class=\"kw\">Migration</strong>:",
              "Is the movement of people from one place to another for settlement.",
              "<strong class=\"kw\">Reasons:</strong>",
              "* <strong class=\"kw\">Search for land</strong> encouraged people to move.",
              "* <strong class=\"kw\">Search for pasture</strong> encouraged pastoral groups to move.",
              "* <strong class=\"kw\">War and insecurity</strong> forced people away.",
              "* <strong class=\"kw\">Drought and famine</strong> pushed people to better areas.",
              "* <strong class=\"kw\">Trade</strong> attracted people to new places.",
              "<strong class=\"kw\">Effects:</strong>",
              "* <strong class=\"kw\">Population increase</strong> occurred in settlement areas.",
              "* <strong class=\"kw\">Cultural exchange</strong> happened between groups.",
              "* <strong class=\"kw\">Intermarriage</strong> created mixed communities."
            ],
            tryThis: {
              question: "Migration means:",
              choices: ["Movement of people from one place to another", "Growth of grass", "Building a dam", "Drawing a map only"],
              correct: 0,
              explanation: "Migration is movement of people from one place to another."
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
