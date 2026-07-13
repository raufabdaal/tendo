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
        "Lines of latitude run from east to west and help locate places north or south of the Equator. Lines of longitude run from north to south and help locate places east or west of the Prime Meridian.",
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
        title: "1. Location and position of Africa using lines of latitudes and longitudes",
        modules: [
          {
            moduleId: "what-is-latitude",
            title: "What is latitude?",
            bigIdea: "Latitude is an imaginary line that runs from east to west around the earth. It helps us say how far a place is north or south of the Equator.",
            learnIt: [
              "Latitude lines are drawn from east to west on a map or globe.",
              "They are also called parallels because they run parallel to the Equator.",
              "The Equator is the most important line of latitude. It is marked 0°.",
              "Places north of the Equator are in the northern hemisphere. Places south of the Equator are in the southern hemisphere.",
              "The latitude of a place is written as a number of degrees north or south, for example 0°20'N."
            ],
            visual: {
              kind: "diagram",
              title: "Lines of latitude",
              description: "Show the earth as a circle with horizontal lines running east to west. Label the Equator as 0° and show lines above marked north and lines below marked south."
            },
            tryThis: {
              question: "Lines of latitude run from east to west and help us locate places:",
              choices: ["North or south of the Equator", "East or west of the Prime Meridian", "Only in Africa", "Only near the poles"],
              correct: 0,
              explanation: "Latitude helps us locate places north or south of the Equator."
            }
          },
          {
            moduleId: "what-is-longitude",
            title: "What is Longitude and Time Calculation",
            bigIdea: "Longitudes run from North to South and help calculate time differences around the Earth.",
            learnIt: [
              "Lines of longitude (meridians) run vertically from North Pole to South Pole. The Prime Meridian (Greenwich Meridian) is 0°.",
              "Calculation of time using longitudes: Earth rotates 360° in 24 hours, which equals 15° per hour or exactly 4 minutes per degree of longitude (1° = 4 minutes).",
              "Places East of Greenwich are ahead in time (+4 minutes per degree East), while places West are behind in time (-4 minutes per degree West)."
            ],
            visual: {
              kind: "diagram",
              title: "Lines of longitude",
              description: "Show the earth as a circle with vertical lines running from North Pole to South Pole. Label the Prime Meridian as 0° and show lines to the right marked east and to the left marked west."
            }
          },
          {
            moduleId: "major-lines-cross-africa",
            imageUrl: "/images/social-studies/africa-latitudes-longitudes.png",
            imageCaption: "Map of Africa showing Equator 0°, Prime Meridian 0°, and the Tropics of Cancer and Capricorn.",
            title: "Major lines that cross Africa",
            bigIdea: "Africa is crossed by the Equator and the Prime Meridian. It also lies mostly between the Tropic of Cancer and the Tropic of Capricorn, so most of Africa is in the tropics.",
            learnIt: [
              "The Equator crosses Africa near the middle. It passes through countries such as Uganda, Kenya, Democratic Republic of Congo and Gabon.",
              "The Prime Meridian crosses Africa near the western coast. It passes through countries such as Ghana, Mali and Algeria.",
              "The Tropic of Cancer is found north of the Equator at about 23½°N. It passes through the northern part of Africa.",
              "The Tropic of Capricorn is found south of the Equator at about 23½°S. It passes through the southern part of Africa.",
              "Because most of Africa lies between the two Tropics, it is often called a tropical continent."
            ],
            visual: {
              kind: "map",
              title: "Major lines across Africa",
              description: "Show the outline of Africa with the Equator across the middle, the Prime Meridian through the west, the Tropic of Cancer in the north and the Tropic of Capricorn in the south."
            },
            examTip: "When asked to locate Africa, mention at least two of these: the Equator, the Prime Meridian, the Tropics, nearby oceans or neighbouring continents."
          },
          {
            moduleId: "how-to-locate-a-place",
            title: "Locating Places on a Map",
            bigIdea: "Grid references, coordinates, and compass points help locate exact positions.",
            learnIt: [
              "We locate places accurately on maps using grid references and lines of latitude and longitude (geographic coordinates).",
              "Direction is determined using the 16 points of a compass: 4 Cardinal points (N, E, S, W); 4 Secondary points (NE, SE, SW, NW); and 8 Tertiary points (NNE, ENE, ESE, SSE, SSW, WSW, WNW, NNW)."
            ],
            workedExample: {
              question: "Describe the location of Uganda using the Equator and compass directions.",
              steps: [
                "Uganda lies almost on the Equator, so it is in the northern hemisphere and also close to the southern hemisphere.",
                "Uganda is found in the eastern part of the African continent.",
                "It belongs to the East African region, which lies to the west of the Indian Ocean."
              ],
              answer: "Uganda is an East African country located near the Equator, in the eastern part of Africa."
            }
          }
        ]
      },
      {
        subtopicId: "world-continents-sizes",
        title: "2. World continents and their sizes",
        modules: [
          {
            moduleId: "seven-continents",
            title: "The seven continents",
            bigIdea: "The land on earth is divided into seven large masses called continents. Africa is one of these continents and it is the home continent of Uganda.",
            learnIt: [
              "The seven continents are Asia, Africa, North America, South America, Antarctica, Europe and Australia.",
              "A continent is a very large, continuous area of land.",
              "Continents are separated from each other mainly by oceans and seas.",
              "Africa is located between the Atlantic Ocean to the west and the Indian Ocean to the east.",
              "Uganda is found in the eastern part of Africa."
            ],
            visual: {
              kind: "comparison",
              title: "The seven continents",
              description: "Show a simple world map with the seven continents labelled: Asia, Africa, North America, South America, Antarctica, Europe and Australia."
            }
          },
          {
            moduleId: "continents-by-size",
            title: "Continents by size",
            bigIdea: "Asia is the largest continent. Australia is the smallest. Africa is the second largest continent, which means it is bigger than Europe, Antarctica, Australia, South America and North America.",
            learnIt: [
              "The continents in order from largest to smallest are: Asia, Africa, North America, South America, Antarctica, Europe and Australia.",
              "Asia is the largest continent. It is found mainly in the eastern hemisphere.",
              "Africa is the second largest continent. It is about three times the size of Europe.",
              "Australia is the smallest continent. It is also a country.",
              "Do not confuse the smallest continent, Australia, with the largest island, Greenland."
            ],
            workedExample: {
              question: "Arrange the following continents from the largest to the smallest: Africa, Asia, Europe, Australia.",
              steps: [
                "Asia is the largest continent.",
                "Africa is the second largest.",
                "Europe is smaller than both Africa and Asia.",
                "Australia is the smallest of the four."
              ],
              answer: "Asia, Africa, Europe, Australia."
            }
          },
          {
            moduleId: "africa-place-among-continents",
            title: "Africa's place among continents",
            bigIdea: "Africa is the second largest continent and it sits in a central position on the world map, touching both the northern and southern hemispheres and almost reaching both the eastern and western hemispheres.",
            learnIt: [
              "Africa is the second largest continent after Asia.",
              "Africa is wider in the north and narrower in the south.",
              "It is the only continent that has land both north and south of the Equator in a very large area.",
              "Because of its size and position, Africa has many different climates, physical features and cultures.",
              "Africa is connected to Asia by the narrow Isthmus of Suez in Egypt."
            ],
            tryThis: {
              question: "Which statement about Africa is correct?",
              choices: ["Africa is the largest continent", "Africa is the second largest continent", "Africa is the smallest continent", "Africa is larger than Asia"],
              correct: 1,
              explanation: "Africa is the second largest continent after Asia."
            }
          }
        ]
      },
      {
        subtopicId: "water-bodies-africa",
        title: "3. Water bodies that surround Africa",
        modules: [
          {
            moduleId: "four-main-oceans",
            title: "The four main oceans",
            bigIdea: "The world has four main oceans: the Pacific, Atlantic, Indian and Arctic Oceans. Africa is bordered by the Atlantic and Indian Oceans.",
            learnIt: [
              "The Pacific Ocean is the largest ocean in the world. It lies between Asia and Australia on one side and the Americas on the other.",
              "The Atlantic Ocean is the second largest ocean. It lies between the Americas and Europe/Africa.",
              "The Indian Ocean is the third largest ocean. It lies south of Asia, east of Africa and west of Australia.",
              "The Arctic Ocean is the smallest ocean. It surrounds the North Pole.",
              "Africa does not touch the Pacific or Arctic Oceans."
            ],
            visual: {
              kind: "comparison",
              title: "The four main oceans",
              description: "Show four simple cards for Pacific, Atlantic, Indian and Arctic Oceans, each with a one-line description of its position."
            }
          },
          {
            moduleId: "seas-oceans-near-africa",
            title: "Seas and oceans near Africa",
            bigIdea: "Africa is surrounded by the Atlantic Ocean to the west, the Indian Ocean to the east, the Mediterranean Sea to the north and the Red Sea to the north-east.",
            learnIt: [
              "The Atlantic Ocean is found to the west of Africa.",
              "The Indian Ocean is found to the east of Africa.",
              "The Mediterranean Sea separates Africa from Europe. It is found to the north of Africa.",
              "The Red Sea separates Africa from Asia. It is found between north-eastern Africa and the Arabian Peninsula.",
              "A sea is a smaller body of salt water that is partly surrounded by land. An ocean is a very large body of salt water."
            ],
            visual: {
              kind: "map",
              title: "Water bodies around Africa",
              description: "Show Africa in the centre with the Atlantic Ocean to the west, Indian Ocean to the east, Mediterranean Sea to the north and Red Sea to the north-east."
            },
            tryThis: {
              question: "Which water body lies to the east of Africa?",
              choices: ["Atlantic Ocean", "Indian Ocean", "Mediterranean Sea", "Red Sea"],
              correct: 1,
              explanation: "The Indian Ocean lies to the east of Africa."
            }
          },
          {
            moduleId: "directions-water-bodies",
            title: "Directions of continents and water bodies from Africa",
            bigIdea: "Use compass directions to describe where the continents and water bodies around Africa are found.",
            learnIt: [
              "Europe is north of Africa, across the Mediterranean Sea.",
              "Asia is north-east of Africa, across the Red Sea.",
              "The Atlantic Ocean is west of Africa.",
              "The Indian Ocean is east of Africa.",
              "The Southern Ocean area lies to the south of Africa, beyond the Cape of Good Hope."
            ],
            workedExample: {
              question: "A learner writes that the Mediterranean Sea is south of Africa. Correct this statement.",
              steps: [
                "The Mediterranean Sea separates Africa from Europe.",
                "Europe is found to the north of Africa.",
                "Therefore the Mediterranean Sea is to the north of Africa, not the south."
              ],
              answer: "The Mediterranean Sea is north of Africa."
            },
            examTip: "When describing the location of a water body, always use a compass direction and say which land it is near or between."
          }
        ]
      },
      {
        subtopicId: "regions-africa",
        title: "4. Regions that make up Africa",
        modules: [
          {
            moduleId: "six-regions",
            imageUrl: "/images/social-studies/map-of-africa.png",
            imageCaption: "Map illustrating the major geographical regions of the African continent.",
            title: "The six regions of Africa",
            bigIdea: "For study purposes, Africa is divided into six regions: West Africa, East Africa, North Africa, Central Africa, Southern Africa and the Horn of Africa.",
            learnIt: [
              "West Africa is found in the western part of Africa. Examples of countries are Nigeria, Ghana, Senegal and Ivory Coast.",
              "East Africa is found in the eastern part of Africa. Examples of countries are Uganda, Kenya, Tanzania, Rwanda and Burundi.",
              "North Africa is found in the northern part of Africa. Examples of countries are Egypt, Libya, Algeria and Tunisia.",
              "Central Africa is found in the middle of the continent. Examples of countries are Democratic Republic of Congo, Cameroon and Central African Republic.",
              "Southern Africa is found in the southern part of Africa. Examples of countries are South Africa, Zambia, Zimbabwe and Botswana.",
              "The Horn of Africa is the north-eastern corner of Africa. Examples of countries are Somalia, Ethiopia, Eritrea and Djibouti."
            ]
          },
          {
            moduleId: "where-each-region-is",
            title: "Where each region is found",
            bigIdea: "Each region has a special position on the map of Africa. You should be able to point to each region and name at least one country in it.",
            learnIt: [
              "North Africa is at the top of the map, along the Mediterranean Sea.",
              "West Africa is on the left side of the map, along the Atlantic Ocean.",
              "East Africa is on the right side of the map, along the Indian Ocean.",
              "Central Africa is in the middle, around the Equator.",
              "Southern Africa is at the bottom of the continent.",
              "The Horn of Africa sticks out into the Indian Ocean like a horn."
            ],
            visual: {
              kind: "map",
              title: "Regions of Africa",
              description: "Show a simple outline of Africa divided into six labelled regions: North, West, Central, East, Southern and Horn of Africa."
            },
            tryThis: {
              question: "Uganda is found in which region of Africa?",
              choices: ["West Africa", "East Africa", "North Africa", "Southern Africa"],
              correct: 1,
              explanation: "Uganda is found in East Africa."
            }
          },
          {
            moduleId: "horn-of-africa",
            title: "The Horn of Africa",
            bigIdea: "The Horn of Africa is a special region in the north-eastern corner of Africa. It is important because it lies between the Red Sea and the Indian Ocean and is close to the Middle East.",
            learnIt: [
              "The Horn of Africa is the part of Africa that points towards the Arabian Peninsula and Asia.",
              "It is called a horn because on the map it looks like the horn of an animal.",
              "The countries of the Horn of Africa are Somalia, Ethiopia, Eritrea and Djibouti.",
              "The Red Sea lies to the north of the Horn and the Indian Ocean lies to the east and south.",
              "This region is important for trade and shipping because many ships pass through the Red Sea and the Gulf of Aden."
            ],
            visual: {
              kind: "map",
              title: "The Horn of Africa",
              description: "Show the north-eastern corner of Africa with Somalia, Ethiopia, Eritrea and Djibouti labelled, and the Red Sea and Indian Ocean nearby."
            }
          }
        ]
      },
      {
        subtopicId: "countries-capitals-africa",
        title: "5. Countries in each region and their capital cities",
        modules: [
          {
            moduleId: "east-africa-countries-capitals",
            title: "Countries and capitals of East Africa",
            bigIdea: "East Africa is the region where Uganda is found. Each country in the region has a capital city that serves as the main centre of government.",
            learnIt: [
              "Uganda — capital city is Kampala.",
              "Kenya — capital city is Nairobi.",
              "Tanzania — capital city is Dodoma.",
              "Rwanda — capital city is Kigali.",
              "Burundi — capital city is Gitega.",
              "South Sudan — capital city is Juba.",
              "A capital city is the main town where the government of a country is based."
            ],
            tryThis: {
              question: "What is the capital city of Kenya?",
              choices: ["Kampala", "Nairobi", "Dodoma", "Kigali"],
              correct: 1,
              explanation: "Nairobi is the capital city of Kenya."
            }
          },
          {
            moduleId: "other-regions-countries-capitals",
            title: "Countries and capitals of other regions",
            bigIdea: "You should be able to name at least one country and its capital city from each of the other regions of Africa.",
            learnIt: [
              "West Africa: Nigeria — Abuja, Ghana — Accra, Senegal — Dakar.",
              "North Africa: Egypt — Cairo, Libya — Tripoli, Algeria — Algiers, Tunisia — Tunis.",
              "Central Africa: Democratic Republic of Congo — Kinshasa, Cameroon — Yaoundé, Chad — N'Djamena.",
              "Southern Africa: South Africa — Pretoria, Zambia — Lusaka, Zimbabwe — Harare, Botswana — Gaborone.",
              "Horn of Africa: Ethiopia — Addis Ababa, Somalia — Mogadishu, Eritrea — Asmara, Djibouti — Djibouti."
            ],
            examTip: "When asked to name countries and capitals, write the country first, then the capital. Check your spelling if you are not sure."
          },
          {
            moduleId: "islands-africa",
            title: "Islands which are part of Africa",
            bigIdea: "Africa also includes islands in the Atlantic and Indian Oceans. These islands are part of the African continent even though they are surrounded by water.",
            learnIt: [
              "Madagascar is the largest island that belongs to Africa. It is found in the Indian Ocean off the south-east coast.",
              "Other islands in the Indian Ocean include Mauritius, Seychelles and Comoros.",
              "Cape Verde and the Canary Islands are African islands in the Atlantic Ocean.",
              "Sao Tome and Principe is also an African island country in the Gulf of Guinea.",
              "An island is a piece of land that is completely surrounded by water."
            ],
            visual: {
              kind: "map",
              title: "Islands of Africa",
              description: "Show the coast of Africa with Madagascar, Mauritius, Seychelles, Cape Verde and Canary Islands labelled in their correct ocean positions."
            },
            tryThis: {
              question: "Which is the largest island that belongs to Africa?",
              choices: ["Mauritius", "Seychelles", "Madagascar", "Cape Verde"],
              correct: 2,
              explanation: "Madagascar is the largest island that belongs to Africa."
            }
          }
        ]
      }
    
      ,{
        subtopicId: "premium-map-answering",
        title: "Premium Exam Practice: Map Location Answers",
        modules: [
          {
            moduleId: "map-location-sentence",
            title: "Writing Accurate Map Location Answers",
            bigIdea: "A premium map answer uses directions, nearby water bodies and major imaginary lines, not vague statements.",
            learnIt: [
              "When asked to locate Africa, mention at least two strong clues: nearby continents, oceans, the Equator, the Prime Meridian or the Tropics.",
              "Use compass directions correctly. Africa is south of Europe, south-west of Asia, east of the Atlantic Ocean and west of the Indian Ocean.",
              "Avoid vague answers such as 'Africa is on the map'. A good answer helps someone actually find the continent."
            ],
            workedExample: { question: "Describe Africa's location using two oceans and one major line.", steps: ["Step 1: Identify oceans: Atlantic Ocean to the west and Indian Ocean to the east.", "Step 2: Identify a major line: the Equator crosses Africa.", "Step 3: Write one clear sentence."], answer: "Africa lies between the Atlantic Ocean and the Indian Ocean, and it is crossed by the Equator." },
            tryThis: { question: "Which answer best locates Africa?", choices: ["Africa lies south of Europe and is bordered by the Atlantic and Indian Oceans.", "Africa is somewhere.", "Africa is near all places.", "Africa is only in Uganda."], correct: 0, explanation: "It uses direction and nearby water bodies clearly." }
          }
        ]
      }],
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
        "Physical features are natural features found on the earth's surface. Examples in Africa include mountains, highlands, rivers, lakes, plateaus, rift valleys, deserts and coastal plains.",
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
        title: "Mountains and highlands of Africa",
        modules: [
          {
            moduleId: "mountains-highlands-africa",
            imageUrl: "/images/social-studies/block-and-fold-mountains.png",
            imageCaption: "Formation of block horst mountains (e.g. Mt. Rwenzori) vs volcanic peaks (e.g. Mt. Kilimanjaro).",
            title: "Mountains and highlands of Africa",
            bigIdea: "Africa has many mountains and highlands. The ones you must know outside East Africa are the Atlas, Drakensberg, Cameroon highlands, Jos plateau, Ahaggar, Tibesti and Ethiopian highlands.",
            learnIt: [
              "A mountain is a high, steep raised part of the land. A highland is land that is higher than the area around it but usually less steep than a mountain.",
              "The Atlas Mountains are found in North Africa, in countries such as Morocco, Algeria and Tunisia.",
              "The Drakensberg Mountains are found in Southern Africa, mainly in South Africa and Lesotho.",
              "The Cameroon highlands are found in Central Africa, in Cameroon.",
              "The Jos plateau is found in West Africa, in Nigeria.",
              "The Ahaggar and Tibesti highlands are found in the Sahara Desert region of North Africa, in Algeria and Chad.",
              "The Ethiopian highlands are found in the Horn of Africa, in Ethiopia and Eritrea."
            ],
            visual: {
              kind: "map",
              title: "Mountains and highlands of Africa",
              description: "Show a simple outline of Africa with labels for the Atlas, Drakensberg, Cameroon highlands, Jos plateau, Ahaggar, Tibesti and Ethiopian highlands in their correct regions."
            },
            tryThis: {
              question: "The Atlas Mountains are found in which part of Africa?",
              choices: ["North Africa", "West Africa", "Southern Africa", "Central Africa"],
              correct: 0,
              explanation: "The Atlas Mountains are found in North Africa, in countries such as Morocco, Algeria and Tunisia."
            }
          },
          {
            moduleId: "mountains-highlands-use-challenge",
            title: "Use and challenges of mountains and highlands",
            bigIdea: "Mountains and highlands are useful to people but they also create problems, especially for transport and settlement.",
            learnIt: [
              "Mountains receive more rainfall than lowlands, so they are sources of rivers.",
              "Highlands and mountains have cooler climates, which can be good for growing crops such as tea, coffee and pyrethrum.",
              "Some mountains and highlands have minerals and attract tourists, for example the Drakensberg and Mount Kilimanjaro.",
              "Steep slopes make road and railway construction difficult and expensive.",
              "Mountain soils can be eroded if forests are cleared."
            ],
            workedExample: {
              question: "Give two ways mountains are useful to people in Africa.",
              steps: [
                "Mountains receive a lot of rainfall and are sources of rivers.",
                "Mountains attract tourists and may contain minerals."
              ],
              answer: "Mountains are sources of rivers and attract tourists; they may also contain minerals and have cooler climates for crops."
            },
            examTip: "When asked about a physical feature, always give both a benefit and a challenge if the question allows."
          }
        ]
      },
      {
        subtopicId: "rivers-africa",
        title: "Rivers of Africa",
        modules: [
          {
            moduleId: "rivers-of-africa",
            imageUrl: "/images/social-studies/major-rivers-lakes-map.png",
            imageCaption: "Map of Africa highlighting major river systems: Nile, Congo, Niger, and Zambezi.",
            title: "Rivers of Africa and Stages of a River",
            bigIdea: "Africa has major drainage basins and rivers that flow through three distinct geological stages.",
            learnIt: [
              "Major African rivers: River Nile (world\'s longest river flowing north into Mediterranean Sea), River Congo (deepest river flowing west into Atlantic), River Niger, and River Zambezi (famous for Victoria Falls).",
              "Stages of a river profile: 1) Youthful (upper) stage in high mountains marked by steep V-shaped gorges, rapid erosion, rapids, and waterfalls; 2) Mature (middle) stage with wider U-shaped valleys and lateral meanders; 3) Old (lower) stage near the mouth marked by slow flow, silt deposition, ox-bow lakes, estuaries, and deltas."
            ],
            visual: {
              kind: "map",
              title: "Major rivers of Africa",
              description: "Show a simple map of Africa with the Nile, Congo, Niger, Zambezi, Orange, Limpopo and Volta rivers drawn and labelled with the ocean or sea they flow into."
            },
            tryThis: {
              question: "Which river flows northwards into the Mediterranean Sea?",
              choices: ["Congo", "Niger", "Nile", "Zambezi"],
              correct: 2,
              explanation: "The Nile flows northwards and drains into the Mediterranean Sea."
            }
          },
          {
            moduleId: "rivers-use-challenge",
            title: "How rivers help and challenge people",
            bigIdea: "Rivers are very important to people, but they can also cause problems such as flooding and disease.",
            learnIt: [
              "Rivers provide water for drinking, cooking, washing and irrigation.",
              "Rivers are used for fishing and transport by boats and canoes.",
              "Waterfalls and fast-flowing rivers can be used to generate hydro-electric power, for example at the Owen Falls Dam on the Nile and the Kariba Dam on the Zambezi.",
              "Rivers can flood nearby land, destroy crops and homes, and spread water-borne diseases.",
              "Some rivers have rapids and waterfalls that make transport difficult."
            ],
            workedExample: {
              question: "Give two problems caused by rivers in Africa.",
              steps: [
                "Rivers can flood land near their banks.",
                "Floods can destroy crops, homes and roads and may spread diseases."
              ],
              answer: "Rivers can cause flooding, which destroys crops and homes and may spread water-borne diseases."
            }
          }
        ]
      },
      {
        subtopicId: "lakes-africa",
        title: "Lakes of Africa",
        modules: [
          {
            moduleId: "lakes-of-africa",
            title: "Lakes of Africa",
            bigIdea: "Africa has both large freshwater lakes and smaller lakes, including lakes found in the Rift Valley. You should be able to name and locate the major lakes.",
            learnIt: [
              "Lake Victoria is the largest lake in Africa. It is shared by Uganda, Kenya and Tanzania.",
              "Lake Tanganyika and Lake Malawi are long, deep lakes found in the Great Rift Valley.",
              "Lake Chad is found in Central Africa, near the border of Chad, Nigeria, Niger and Cameroon. It has been shrinking.",
              "Lake Ngami is found in Botswana, in Southern Africa.",
              "Lakes provide fish, water for irrigation and transport, and they can attract tourists.",
              "Rift valley lakes are usually long and deep because they lie between steep sides."
            ],
            visual: {
              kind: "map",
              title: "Major lakes of Africa",
              description: "Show a simple map of Africa with Lake Victoria, Lake Tanganyika, Lake Malawi, Lake Chad and Lake Ngami labelled in their correct positions."
            },
            tryThis: {
              question: "Which lake is shared by Uganda, Kenya and Tanzania?",
              choices: ["Lake Malawi", "Lake Chad", "Lake Victoria", "Lake Tanganyika"],
              correct: 2,
              explanation: "Lake Victoria is shared by Uganda, Kenya and Tanzania."
            }
          }
        ]
      },
      {
        subtopicId: "plateau-rift-coastal",
        title: "Plateau, rift valley and coastal plains",
        modules: [
          {
            moduleId: "plateau-coastal-plains",
            title: "Plateau and coastal plains",
            bigIdea: "Most of Africa is a plateau, a raised area of land that is fairly flat on top. Around the edges of the continent there are coastal plains in the West, North and South.",
            learnIt: [
              "A plateau is a raised, fairly flat area of land.",
              "Africa is called a plateau continent because most of the land is raised above sea level.",
              "The South African plateau and the East African plateau are large examples.",
              "Coastal plains are found along the coast where the land is low and fairly flat.",
              "The NCDC notes that Africa has coastal plains in the West, North and South.",
              "Plateaus and coastal plains are important for farming, settlement and transport."
            ],
            visual: {
              kind: "map",
              title: "Plateau and coastal plains",
              description: "Show a simple cross-section or map view of Africa as a raised plateau with narrow coastal plains along the western, northern and southern coasts."
            }
          },
          {
            moduleId: "rift-valley",
            imageUrl: "/images/social-studies/great-rift-valley-formation.png",
            imageCaption: "Formation of the East African Rift Valley by tensional faulting.",
            title: "The Rift Valley",
            bigIdea: "The Great Rift Valley is a long, narrow depression in the earth's surface. It was formed by earth movements and runs from the Red Sea area down through East Africa.",
            learnIt: [
              "A rift valley is a long, narrow depression formed by earth movements such as faulting.",
              "The Great Rift Valley runs from the Middle East through the Red Sea and down through East Africa.",
              "In East Africa it has two main branches: the Eastern Rift Valley and the Western Rift Valley.",
              "Many rift valley lakes are long and deep, such as Lake Tanganyika and Lake Malawi.",
              "Rift valleys have steep sides and flat floors that can be used for farming and settlement.",
              "Rift valleys are also important for tourism because of their scenery and wildlife."
            ],
            visual: {
              kind: "diagram",
              title: "The Great Rift Valley",
              description: "Show a simple diagram of two parallel faults with a block of land sinking between them to form a rift valley, with a long narrow lake in the bottom."
            },
            tryThis: {
              question: "A rift valley is formed mainly by:",
              choices: ["Earth movements such as faulting", "River deposition", "Wind erosion", "Human digging"],
              correct: 0,
              explanation: "Rift valleys are formed by earth movements such as faulting."
            }
          }
        ]
      },
      {
        subtopicId: "formation-physical-features",
        title: "Formation of major physical features",
        modules: [
          {
            moduleId: "formation-mountains",
            title: "How mountains are formed",
            bigIdea: "Mountains are formed in different ways. The NCDC asks learners to know folded, fault-block and volcanic mountains.",
            learnIt: [
              "Fold mountains are formed when layers of rock are squeezed and folded by earth movements. The Atlas Mountains are an example of fold mountains.",
              "Fault-block mountains are formed when blocks of the earth's crust are pushed up or dropped down along faults. Examples include the Rwenzori Mountains and parts of the Ruwenzori range.",
              "Volcanic mountains are formed when molten rock erupts and piles up. Examples include Mount Kilimanjaro, Mount Kenya, Mount Cameroon and the Ethiopian highlands.",
              "Some mountains are made by a mixture of these processes."
            ],
            visual: {
              kind: "diagram",
              title: "Folded and volcanic mountains",
              description: "Show two simple diagrams: one where flat rock layers are squeezed into folds, and one where a volcano builds up from erupted material."
            },
            examTip: "When asked how mountains are formed, name the process and give one African example."
          },
          {
            moduleId: "formation-other-features",
            title: "Formation of rift valleys and coastal plains",
            bigIdea: "Rift valleys and coastal plains also have special formations. Knowing how they are formed helps you understand why they look the way they do.",
            learnIt: [
              "A rift valley is formed by faulting: one block of land sinks between two parallel faults while the land on either side stays higher.",
              "Coastal plains are formed when rivers deposit mud and sand at the coast, or when the sea level changes and leaves a flat area behind.",
              "The NCDC notes that Africa has coastal plains in the West, North and South.",
              "Lakes form by different geological forces: Rift valley lakes form in elongated fault depressions (Lake Tanganyika, Lake Malawi, Lake Albert); Basin lakes form by crustal sagging or downwarping (Lake Victoria—Africa's largest lake, Lake Kyoga, Lake Chad); Volcanic crater/caldera lakes form when water fills extinct volcano tops (Lake Katwe)."
            ],
            workedExample: {
              question: "Explain how a rift valley is formed.",
              steps: [
                "Underground forces create cracks called faults in the earth's crust.",
                "A block of land between two parallel faults sinks down.",
                "The sunken block forms a long, narrow depression called a rift valley."
              ],
              answer: "A rift valley forms when a block of land sinks between two parallel faults, creating a long, narrow depression."
            }
          }
        ]
      }
    
      ,{
        subtopicId: "premium-physical-features-application",
        title: "Premium Exam Practice: Feature Formation and Importance",
        modules: [
          {
            moduleId: "relief-feature-reasoning",
            title: "Explaining Relief Features Clearly",
            bigIdea: "Physical geography answers should name the feature, explain how it formed and state its importance or problem.",
            learnIt: [
              "For mountains, valleys and rift valleys, use process words such as faulting, folding, volcanicity, erosion and deposition.",
              "For rivers and lakes, explain importance such as transport, fishing, irrigation, hydro-electric power, tourism and water supply.",
              "For problems, use realistic effects such as flooding, disease vectors, transport barriers, erosion or displacement."
            ],
            workedExample: { question: "State two ways rivers are important to people in Africa.", steps: ["Step 1: Think of direct uses of river water.", "Step 2: Rivers can provide water for irrigation and domestic use.", "Step 3: Some rivers can generate hydro-electric power or support fishing."], answer: "Rivers provide water for irrigation and can be used to generate hydro-electric power." },
            tryThis: { question: "Which process forms a rift valley?", choices: ["Faulting", "Condensation", "Evaporation", "Pollination"], correct: 0, explanation: "Rift valleys form when land sinks between faults." }
          }
        ]
      }],
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
        "Climate is the average weather condition of a place over a long period. Weather changes daily, but climate describes a longer pattern. Elements of weather and climate include rainfall, temperature, wind, humidity, sunshine, air pressure and cloud cover.",
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
        title: "Climatic regions of Africa",
        modules: [
          {
            moduleId: "weather-and-climate",
            title: "Weather and climate",
            bigIdea: "Weather is what the atmosphere is like over a short time. Climate is the average pattern of weather over many years. Elements such as rainfall, temperature, wind, sunshine and humidity help describe both.",
            learnIt: [
              "Weather is the condition of the atmosphere over a short period, such as one day or one week.",
              "Climate is the average weather condition of a place over a long period of time, usually many years.",
              "Elements of weather and climate include wind, rainfall, sunshine, temperature and humidity.",
              "P7 learners use these elements to compare different climatic regions of Africa."
            ],
            tryThis: {
              question: "Which statement is correct?",
              choices: ["Weather is the long-term average pattern", "Climate is the short-term condition", "Climate is the average weather over many years", "Weather never changes"],
              correct: 2,
              explanation: "Climate is the average weather condition of a place over a long period of time."
            }
          },
          {
            moduleId: "weather-instruments",
            title: "Weather Instruments and the Stevenson Screen",
            bigIdea: "Meteorological instruments measure specific weather elements accurately at weather stations.",
            learnIt: [
              "Rain gauge measures rainfall amount in millimeters (mm); Barometer measures atmospheric air pressure in millibars; Hygrometer measures relative humidity (%).",
              "Six\'s thermometer measures maximum and minimum daily temperatures (°C); Anemometer measures wind speed; Wind vane shows wind direction; Sunshine recorder measures daily sunshine duration.",
              "Ceilometer is an advanced instrument used at weather stations and airports to measure cloud ceiling height and cloud thickness.",
              "Stevenson Screen: a white wooden box with louvered slatted sides mounted 1.2 meters above ground. It shelters thermometers and hygrometers from direct rain and sunlight while allowing free air circulation."
            ],
            visual: {
              kind: "cards",
              title: "Weather instruments",
              description: "Show cards for: Rain gauge → rainfall, Thermometer → temperature, Wind vane → direction, Anemometer → speed, Hygrometer → humidity."
            },
            tryThis: {
              question: "Which instrument is used to measure wind speed?",
              choices: ["Wind vane", "Anemometer", "Rain gauge", "Thermometer"],
              correct: 1,
              explanation: "An anemometer is used to measure the speed of the wind."
            }
          },
          {
            moduleId: "equatorial-tropical",
            imageUrl: "/images/social-studies/africa-climatic-zones.png",
            imageCaption: "Map of Africa color-coded into major climatic regions: Equatorial, Savanna, Desert, and Mediterranean.",
            title: "Equatorial and tropical climates",
            bigIdea: "Equatorial areas are hot and wet for most of the year. Tropical areas have a distinct wet season and dry season. Both are found near the Equator and support important human activities.",
            learnIt: [
              "Equatorial climate is hot and wet throughout the year. It is found in countries near the Equator, such as Democratic Republic of Congo, Gabon and parts of Uganda.",
              "Tropical climate has a wet season and a dry season. It covers large parts of East, West and Central Africa.",
              "In equatorial areas, rainfall is heavy and temperatures remain high all year.",
              "In tropical areas, people grow crops during the rainy season and keep livestock that can survive the dry season."
            ],
            visual: {
              kind: "comparison",
              title: "Equatorial and tropical climate",
              description: "Show two simple cards side by side. Equatorial card: hot and wet all year. Tropical card: hot with a wet season and a dry season."
            }
          },
          {
            moduleId: "desert-mediterranean",
            title: "Desert and Mediterranean climates",
            bigIdea: "Desert areas are hot and dry with very little rainfall. Mediterranean areas have hot, dry summers and cool, wet winters.",
            learnIt: [
              "Desert climate is hot and dry. The Sahara Desert in North Africa and the Namib Desert in Southern Africa are major hot deserts.",
              "Desert areas receive very little rainfall, so vegetation is scarce and settlement is sparse.",
              "Mediterranean climate is found in North Africa along the Mediterranean coast, for example in Morocco, Tunisia, Algeria and Libya.",
              "Mediterranean climate has hot, dry summers and cool, wet winters.",
              "The NCDC assessment expects learners to name the hot deserts and identify Mediterranean seasons."
            ],
            visual: {
              kind: "comparison",
              title: "Desert and Mediterranean climate",
              description: "Show two cards. Desert: hot, dry, little rain, sparse vegetation. Mediterranean: hot dry summers, cool wet winters."
            },
            tryThis: {
              question: "Which climate has hot, dry summers and cool, wet winters?",
              choices: ["Equatorial", "Mediterranean", "Desert", "Tropical"],
              correct: 1,
              explanation: "Mediterranean climate has hot, dry summers and cool, wet winters."
            }
          },
          {
            moduleId: "temperate-mountain",
            title: "Temperate and mountain climates",
            bigIdea: "Temperate climate is found in some southern parts of Africa and has moderate temperatures. Mountain climate changes with altitude, becoming cooler as you go higher.",
            learnIt: [
              "Temperate climate has moderate temperatures and is found in parts of South Africa, such as the Cape area.",
              "Mountain climate is found on highlands and mountains. Temperature decreases as altitude increases.",
              "Mountain areas may receive heavy rainfall on the windward side and be drier on the leeward side.",
              "Mountain climate supports crops such as tea, coffee and pyrethrum that need cooler conditions."
            ]
          }
        ]
      },
      {
        subtopicId: "characteristics-climate",
        title: "Characteristics of different climatic regions",
        modules: [
          {
            moduleId: "temperature-rainfall",
            title: "Temperature and rainfall patterns",
            bigIdea: "The best way to describe a climate is to say how hot or cold it is and how much rain falls, and when the rain falls.",
            learnIt: [
              "Equatorial climate: high temperatures and heavy rainfall all year round.",
              "Tropical climate: high temperatures with a clear wet season and dry season.",
              "Desert climate: very high temperatures during the day, cool nights, and very little rainfall.",
              "Mediterranean climate: warm to hot dry summers and mild wet winters.",
              "Temperate climate: moderate temperatures with rainfall spread through the year.",
              "Mountain climate: temperature drops with height; windward slopes are wetter than leeward slopes."
            ],
            visual: {
              kind: "comparison",
              title: "Climate characteristics",
              description: "Show a simple table with columns for Climate, Temperature and Rainfall, listing equatorial, tropical, desert, Mediterranean, temperate and mountain."
            },
            examTip: "When describing a climate, always mention temperature and rainfall. If the climate has seasons, say when it is wet and when it is dry."
          },
          {
            moduleId: "where-climates-are-found",
            title: "Where each climate is found",
            bigIdea: "Each climate type is found in specific regions or countries of Africa. Knowing these locations helps you answer map and case-study questions.",
            learnIt: [
              "Equatorial climate: Democratic Republic of Congo, Gabon, Cameroon, parts of Uganda and Kenya near the Equator.",
              "Tropical climate: large parts of East Africa, West Africa and Central Africa, including Uganda, Kenya, Tanzania, Nigeria and Ghana.",
              "Desert climate: Sahara region of North Africa, Namib Desert of Namibia.",
              "Mediterranean climate: coastal North Africa, including Morocco, Algeria, Tunisia and Libya.",
              "Temperate climate: parts of South Africa, especially around the Cape.",
              "Mountain climate: Ethiopian highlands, East African highlands, Drakensberg and Atlas Mountains."
            ],
            workedExample: {
              question: "Name one country with Mediterranean climate and one country with desert climate.",
              steps: [
                "Mediterranean climate is found in coastal North Africa, so Tunisia is a correct example.",
                "Desert climate is found in the Sahara and Namib regions, so Egypt or Namibia is correct."
              ],
              answer: "Tunisia has a Mediterranean climate; Egypt has desert climate."
            }
          }
        ]
      },
      {
        subtopicId: "factors-climate",
        title: "Factors that influence climate of Africa",
        modules: [
          {
            moduleId: "latitude-altitude-distance",
            imageUrl: "/images/social-studies/relief-orographic-rainfall.png",
            imageCaption: "Relief (orographic) rainfall showing wet windward slopes and dry leeward rain shadows.",
            title: "Factors that Influence Climate",
            bigIdea: "Latitude, altitude, ocean currents, distance from the sea, and winds control regional climate.",
            learnIt: [
              "Altitude: high places like Mt. Kilimanjaro and Rwenzori are cooler than lowlands (temperature drops by 1°C for every 150 meters rise).",
              "Ocean currents: Warm ocean currents (e.g., warm Agulhas and Mozambique currents along Eastern and Southern Africa) heat coastal breezes bringing heavy rainfall. Cold ocean currents (e.g., cold Benguela current off Namibia and cold Canary current off Northwest Africa) cool passing winds so moisture condenses over the ocean, forming coastal deserts like the 800 km Namib Desert.",
              "Prevailing winds and distance from water bodies: moist sea breezes bring coastal rain, while dry continental winds bring arid desert weather."
            ],
            visual: {
              kind: "diagram",
              title: "Latitude and altitude",
              description: "Show the earth tilted with the Equator receiving direct sun rays and the poles receiving slanted rays. Show a mountain with temperature dropping as height increases."
            }
          },
          {
            moduleId: "winds-relief-vegetation",
            title: "Winds, relief and vegetation",
            bigIdea: "Winds carry moisture from the sea to the land. Relief, such as mountains, can force winds to rise and produce rain. Vegetation also affects local climate.",
            learnIt: [
              "Winds from the sea bring moisture. When moist winds rise over mountains, they cool and produce rain on the windward side.",
              "The leeward side of a mountain, away from the wind, is often drier. This dry area is called a rain shadow.",
              "Relief therefore affects both rainfall and temperature.",
              "Vegetation gives off water vapour through transpiration, which can increase rainfall and cool the air. Deforested areas may become hotter and drier."
            ],
            tryThis: {
              question: "The dry side of a mountain, away from the moist wind, is called:",
              choices: ["Rain shadow", "Rain forest", "Windward side", "Coastal plain"],
              correct: 0,
              explanation: "The dry side of a mountain, away from the moist wind, is called a rain shadow."
            }
          },
          {
            moduleId: "human-influence-climate",
            title: "Human activities that influence climate",
            bigIdea: "People can change the climate and weather patterns of an area through the way they use the land.",
            learnIt: [
              "Deforestation removes trees that release water vapour and cool the air. This can reduce rainfall and raise temperatures.",
              "Bush burning and overgrazing remove vegetation and expose the soil, which can lead to desertification.",
              "Swamp drainage reduces evaporation and can change local rainfall.",
              "Industrial pollution and smoke from factories, vehicles and burning waste can add gases to the atmosphere and contribute to climate change."
            ],
            examTip: "When asked how human activities affect climate, give a specific activity and explain the effect on rainfall, temperature or vegetation."
          }
        ]
      },
      {
        subtopicId: "climate-human-activities",
        title: "Influence of climate on human activities",
        modules: [
          {
            moduleId: "hot-deserts",
            title: "Life in hot deserts",
            bigIdea: "Hot deserts make farming difficult because of water shortage. People survive through irrigation, nomadic pastoralism, mining and tourism.",
            learnIt: [
              "Hot deserts have very little rainfall and sparse vegetation, so crop farming is difficult without irrigation.",
              "People grow crops near oases where underground water reaches the surface.",
              "Nomadic pastoralists move with their animals to find water and pasture.",
              "Mining is possible in desert areas where minerals are found, because people can bring in water and supplies.",
              "Tourism is attracted by desert landscapes, but tourists need water, shelter and transport.",
              "Problems in hot deserts include water scarcity, extreme heat, sandstorms and sparse settlement."
            ],
            visual: {
              kind: "diagram",
              title: "Life in a hot desert",
              description: "Show a desert scene with an oasis, nomads with animals, a mine and a tourist vehicle, labelled with water scarcity and extreme heat as challenges."
            },
            tryThis: {
              question: "Which problem is common in hot deserts?",
              choices: ["Water scarcity", "Too much forest", "Heavy snow", "Flooding every month"],
              correct: 0,
              explanation: "Hot deserts have very little rainfall, so water scarcity is a major problem."
            }
          },
          {
            moduleId: "mediterranean-temperate-mountain",
            title: "Mediterranean, temperate and mountain areas",
            bigIdea: "Cooler or wetter climates support different activities. Mediterranean and temperate areas are good for farming, industry and tourism. Mountain areas support forestry, mining and specialised crops.",
            learnIt: [
              "Mediterranean areas grow crops such as wheat, barley, grapes, olives and citrus fruits because of the wet winters and dry summers.",
              "Temperate areas in South Africa support mixed farming, fruit growing, wine making and industry.",
              "Mountain areas support farming on lower slopes, forestry, mining and tourism.",
              "Trading and industry often develop in these cooler climates because settlement is denser and transport is easier than in deserts."
            ]
          },
          {
            moduleId: "equatorial-tropical-activities",
            title: "Equatorial and tropical areas",
            bigIdea: "Wet and hot climates support forests, crop farming, livestock and many economic activities. However, too much rain or heat can also bring challenges.",
            learnIt: [
              "Equatorial and tropical areas support lumbering because of the dense forests.",
              "Agriculture is important; crops include maize, millet, sorghum, bananas, cassava and rice depending on the local rainfall pattern.",
              "Tourism is attracted by wildlife, forests and national parks.",
              "Mining and trading also take place where minerals and transport routes exist.",
              "Livestock farming is common, but in tropical areas herders must manage the dry season carefully.",
              "Transport can be difficult during the heavy rainy season when roads become muddy or rivers flood."
            ],
            workedExample: {
              question: "Give two economic activities common in equatorial and tropical parts of Africa.",
              steps: [
                "Equatorial and tropical areas have heavy rainfall and dense forests, so lumbering is common.",
                "The same rainfall supports crop farming such as bananas, cassava and maize."
              ],
              answer: "Lumbering and agriculture are common economic activities in equatorial and tropical areas."
            }
          },
          {
            moduleId: "climate-problems-solutions",
            title: "Problems caused by climate and their solutions",
            bigIdea: "Extreme climate conditions like drought, flooding, and extreme heat create problems for people. Understanding these problems helps us find solutions to protect lives and livelihoods.",
            learnIt: [
              "Drought occurs when there is very little rainfall for a long time. It leads to crop failure, death of livestock and water scarcity. Solutions include irrigation, planting drought-resistant crops and building dams for water storage.",
              "Flooding occurs when there is excessive rainfall or rivers overflow. It destroys crops, houses and roads and can lead to water-borne diseases. Solutions include building dykes and embankments, improving drainage systems and planting trees to absorb water.",
              "Extreme Heat is common in deserts and during heatwaves. It causes dehydration, heatstroke and crop wilting. Solutions include using irrigation, planting shade trees and building houses with cooling designs.",
              "Climate Change is the long-term shift in temperature and weather patterns, often caused by human activities like deforestation and pollution. This leads to more frequent extremes of drought and flooding. Solutions include reforestation, reducing greenhouse gas emissions and using renewable energy."
            ],
            tryThis: {
              question: "Which of the following is a solution to the problem of drought?",
              choices: ["Building dykes", "Using irrigation", "Cutting down forests", "Building houses with cooling designs"],
              correct: 1,
              explanation: "Irrigation helps provide water to crops during dry periods, which is a key solution to drought."
            }
          }
        ]
      },
      {
        subtopicId: "human-activities-climate",
        title: "Influence of human activities on climate",
        modules: [
          {
            moduleId: "protecting-climate",
            title: "Protecting the climate",
            bigIdea: "People can also protect the climate by planting trees, conserving wetlands, controlling bush burning and using land carefully.",
            learnIt: [
              "Tree planting increases transpiration, which can improve local rainfall and cool the air.",
              "Wetland protection keeps water cycles balanced and supports biodiversity.",
              "Soil conservation methods such as terracing, cover crops and agroforestry reduce erosion and keep land productive.",
              "Controlled bush burning clears dry grass without destroying forests.",
              "Reducing pollution from factories, vehicles and waste burning helps protect the atmosphere and climate."
            ],
            visual: {
              kind: "flow",
              title: "Protecting the climate",
              description: "Show a simple flow: tree planting and wetland protection lead to more rainfall and cooler air, which supports better farming and settlement."
            },
            tryThis: {
              question: "Which human activity helps protect the climate?",
              choices: ["Deforestation", "Tree planting", "Bush burning", "Swamp drainage"],
              correct: 1,
              explanation: "Tree planting helps increase rainfall and cool the air, which protects the climate."
            }
          }
        ]
      }
    
      ,{
        subtopicId: "premium-climate-interpretation",
        title: "Premium Exam Practice: Climate Graphs and Factors",
        modules: [
          {
            moduleId: "climate-graph-reading",
            title: "Reading Rainfall and Temperature Graphs",
            bigIdea: "Climate questions often require learners to read a graph before explaining climate conditions.",
            learnIt: [
              "Read the title, months and scale first. Check whether bars show rainfall and the line shows temperature.",
              "High bars show wet months; low bars show dry months. A high temperature line shows hot months.",
              "After reading the graph, connect it to climate type, farming activities or vegetation."
            ],
            workedExample: { question: "A climate graph shows high rainfall in March, April and May. What season is shown?", steps: ["Step 1: High rainfall bars show wet months.", "Step 2: March to May is a wet period in many equatorial areas.", "Step 3: Name it as a rainy/wet season."], answer: "It shows a wet or rainy season." },
            tryThis: { question: "On a climate graph, rainfall is commonly shown using:", choices: ["Bars", "Compass points", "Political parties", "Railway lines"], correct: 0, explanation: "Rainfall is often shown by bars, while temperature is often shown by a line." }
          },
          {
            moduleId: "climate-factor-answering",
            title: "Explaining Factors that Influence Climate",
            bigIdea: "A strong climate answer links each factor to its effect on temperature or rainfall.",
            learnIt: [
              "Altitude affects temperature: higher places are cooler than lowlands.",
              "Distance from the sea affects rainfall and temperature range. Coastal places may be wetter and more moderate.",
              "Ocean currents and prevailing winds can make places wetter, drier, warmer or cooler depending on where they come from."
            ],
            workedExample: { question: "Why are highland areas cooler than lowland areas?", steps: ["Step 1: Identify the factor: altitude.", "Step 2: Temperature decreases as altitude increases.", "Step 3: Therefore highlands are cooler."], answer: "Highland areas are cooler because temperature decreases as altitude increases." },
            tryThis: { question: "Which factor mainly explains why mountain tops are cooler?", choices: ["Altitude", "Longitude", "Population", "Fishing"], correct: 0, explanation: "Altitude affects temperature." }
          }
        ]
      }],
    quiz: [
      { q: "Climate means:", choices: ["Average weather over a long time", "Weather for one hour", "A capital city", "A mountain only"], correct: 0, why: "Climate is the average weather condition of a place over a long period." },
      { q: "Which factor explains why mountains are cooler?", choices: ["Altitude", "Population only", "Language", "Longitude only"], correct: 0, why: "Temperature decreases with increase in altitude." },
      { q: "Which climate has heavy rainfall and high temperatures throughout the year?", choices: ["Equatorial", "Desert", "Polar", "Mediterranean only"], correct: 0, why: "Equatorial climate is generally hot and wet throughout the year." },
      { q: "Which human activity can reduce rainfall over time?", choices: ["Deforestation", "Tree planting", "Soil conservation", "Agroforestry"], correct: 0, why: "Deforestation can reduce evapotranspiration and disturb rainfall patterns." },
      { q: "Which climate is found around parts of North Africa near the Mediterranean Sea?", choices: ["Mediterranean climate", "Polar climate", "Equatorial only", "Mountain only"], correct: 0, why: "Parts of North Africa near the Mediterranean Sea have Mediterranean climate." },
      { q: "Weather differs from climate because weather:", choices: ["Changes over a short time", "Never changes", "Means only rainfall", "Is a continent"], correct: 0, why: "Weather is the condition of the atmosphere over a short time." },
      { q: "Which activity is strongly influenced by climate?", choices: ["Farming", "Spelling only", "Drawing latitudes only", "Naming months only"], correct: 0, why: "Farmers depend on rainfall and temperature patterns." },
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
      intro: "Why this matters: Vegetation affects animals, population distribution, farming, tourism and environmental protection across Africa.",
      learningObjectives: [
        "Name and locate major vegetation types of Africa.",
        "Explain factors that influence vegetation distribution.",
        "Describe the importance of vegetation and game parks.",
        "Relate vegetation to animals and population distribution.",
      ],
      whatYouNeedToKnow: [
        "Vegetation means the plant cover of an area. Africa's vegetation types include equatorial rainforest, savanna grassland, desert vegetation, Mediterranean vegetation, mountain vegetation, swamp vegetation and mangrove/coastal vegetation.",
        "Vegetation distribution is influenced by rainfall, temperature, altitude, soil, drainage, relief and human activities. Areas with heavy rainfall usually support thick forests, while dry areas have sparse vegetation. Mountain vegetation changes with height because temperature and rainfall change with altitude.",
        "Equatorial forests are dense and evergreen, savanna has grass with scattered trees, deserts have drought-resistant plants, Mediterranean vegetation has shrubs and trees adapted to dry summers, and mangroves grow in salty coastal/swampy areas.",
        "Vegetation is important because it provides food, timber, medicine, rainfall support, soil protection, animal habitats, grazing land, fuel, building materials and tourist attractions.",
        "Game parks protect wildlife and vegetation. Animals live in different vegetation zones because of food, water, shelter and climate conditions. For example, many grazing animals and predators live in savanna areas.",
        "Population distribution can be affected by vegetation. Very thick forests, deserts, tsetse-fly areas or disease-prone areas may have fewer people, while fertile grasslands may attract settlement and farming. Rapid population growth can lead to deforestation, overgrazing, bush burning and settlement expansion.",
      ],
      worked: {
        problem: "Why are savanna grasslands important to tourism in Africa?",
        steps: [
          "Step 1. Savanna has grass and scattered trees.",
          "Step 2. Many wild animals such as lions, elephants, giraffes and antelopes live there.",
          "Step 3. Tourists visit game parks to see these animals.",
        ],
        answer: "Answer: Savanna grasslands support wildlife, which attracts tourists to game parks.",
      },
      commonMistakes: [
        "Thinking vegetation means animals instead of plant cover.",
        "Saying all vegetation types support the same animals.",
        "Forgetting that people affect vegetation through farming, settlement and cutting trees.",
        "Ignoring the value of game parks.",
      ],
      tryThis: {
        question: "Which vegetation type has grass with scattered trees?",
        choices: ["Savanna", "Desert only", "Mangrove", "Ice cap"],
        correct: 0,
        explanation: "Savanna vegetation is mainly grass with scattered trees.",
      },
      writingTasks: [
        {
          title: "Vegetation comparison task",
          prompt: "Compare two vegetation zones of Africa and explain how each supports people or animals.",
          planningSteps: [
            "Choose two vegetation zones, such as equatorial forest and savanna.",
            "Describe the plants found in each zone.",
            "Explain how rainfall, temperature or altitude affects each zone.",
            "State how people or animals use each zone.",
          ],
          checklist: [
            "Two correct vegetation zones are compared.",
            "Characteristics of each zone are clear.",
            "Climate or relief influence is mentioned.",
            "Human/animal use is explained without encouraging destruction.",
          ],
          modelOpening: "Equatorial forests are thick and evergreen because they receive heavy rainfall, while savanna vegetation has grasses and scattered trees suited to wet and dry seasons.",
        },
      ],
      recap: [
        "Vegetation is plant cover.",
        "Rainfall and temperature strongly affect vegetation.",
        "Vegetation supports animals, people and tourism.",
        "Game parks protect wildlife and plant life.",
      ],
    },
    subtopics: [
      {
        subtopicId: "vegetation-types",
        title: "Vegetation types of Africa",
        modules: [
          {
            moduleId: "forest-vegetation",
            imageUrl: "/images/social-studies/africa-vegetation-belts.png",
            imageCaption: "Side-by-side comparison of dense multi-layered tropical rainforest vs open grassy savanna woodland.",
            title: "Forest vegetation of Africa",
            bigIdea: "Forest vegetation in Africa includes thick equatorial forests, coastal mangrove forests and mountain forests. Each type grows where climate and soil allow.",
            learnIt: [
              "Equatorial forests are thick, evergreen forests found in hot, wet areas near the Equator, such as the Democratic Republic of Congo and Gabon.",
              "Equatorial forests have tall trees, dense undergrowth and many layers of vegetation.",
              "Mangrove forests grow in coastal swampy or tidal areas where salt water and fresh water mix, for example along parts of the East and West African coasts.",
              "Montane forests are found on high mountains where the climate is cooler and wetter, such as on the slopes of Mount Kilimanjaro and the Rwenzori Mountains.",
              "Hardwood trees such as mahogany, ebony and rosewood are found in equatorial forests."
            ],
            visual: {
              kind: "comparison",
              title: "Forest vegetation types",
              description: "Show three cards: equatorial forest with tall trees, mangrove forest with roots in salty water, and montane forest on a cool mountain slope."
            },
            tryThis: {
              question: "Which forest type grows in hot, wet areas near the Equator?",
              choices: ["Equatorial forest", "Mangrove forest", "Montane forest", "Desert scrub"],
              correct: 0,
              explanation: "Equatorial forests grow in hot, wet areas near the Equator."
            }
          },
          {
            moduleId: "grassland-shrub-vegetation",
            title: "Grassland and shrub vegetation",
            bigIdea: "Most of Africa is covered by grasslands and shrubs. Savannah, temperate grasslands and Mediterranean scrub each have special plants adapted to their climate.",
            learnIt: [
              "Savanna vegetation is grassland with scattered trees and shrubs. It covers large parts of East, Central and West Africa.",
              "Savanna has a wet season when grass grows and a dry season when grass turns brown and trees may shed leaves.",
              "Temperate grasslands in South Africa are called velds. They have short grasses and few trees because winters are cool.",
              "Mediterranean vegetation is found in North Africa and the Cape area of South Africa. It has shrubs and small trees adapted to hot, dry summers and cool, wet winters.",
              "Desert vegetation is sparse and includes drought-resistant plants such as thorny bushes, cacti and short grasses."
            ],
            visual: {
              kind: "comparison",
              title: "Grassland and shrub vegetation",
              description: "Show four cards for savanna, velds, Mediterranean scrub and desert vegetation, each with a short rainfall/temperature clue."
            },
            examTip: "When asked about savanna, mention grass with scattered trees and the wet/dry season pattern."
          }
        ]
      },
      {
        subtopicId: "factors-vegetation",
        title: "Factors that influence vegetation distribution",
        modules: [
          {
            moduleId: "natural-factors-vegetation",
            title: "Natural factors affecting vegetation",
            bigIdea: "Climate, soil and relief are the main natural factors that decide which plants grow in a place.",
            learnIt: [
              "Climate: areas with heavy rainfall support thick forests, while dry areas have grasslands or desert vegetation.",
              "Temperature: hot areas support tropical plants, while cool highlands support different plants such as heather and bamboo.",
              "Soil: fertile soils support dense vegetation and farming, while poor sandy soils support only drought-resistant plants.",
              "Relief and altitude: high mountains have changing vegetation from forest at the bottom to scrub or grass near the top. Steep slopes may also affect plant growth."
            ],
            workedExample: {
              question: "Why do equatorial areas have thick forests?",
              steps: [
                "Equatorial areas receive heavy rainfall throughout the year.",
                "Temperatures are high all year, which supports rapid plant growth.",
                "Therefore thick, evergreen forests develop."
              ],
              answer: "Equatorial areas have thick forests because they receive heavy rainfall and high temperatures throughout the year."
            }
          },
          {
            moduleId: "human-factors-vegetation",
            title: "Human activities affecting vegetation",
            bigIdea: "People can destroy or improve vegetation through farming, settlement, tree planting and land management.",
            learnIt: [
              "Deforestation is the cutting down of trees. It reduces forest cover, destroys habitats and can reduce rainfall.",
              "Bush burning clears land for farming and grazing but can destroy young plants and animal homes.",
              "Overgrazing occurs when too many animals eat the grass, leaving the soil bare and causing erosion.",
              "Afforestation and reforestation mean planting trees to restore vegetation.",
              "Conservation farming, terracing and agroforestry help protect vegetation while producing food."
            ],
            tryThis: {
              question: "Which human activity destroys vegetation?",
              choices: ["Deforestation", "Tree planting", "Afforestation", "Soil conservation"],
              correct: 0,
              explanation: "Deforestation is the cutting down of trees and destroys vegetation."
            }
          }
        ]
      },
      {
        subtopicId: "importance-vegetation",
        title: "Importance of vegetation",
        modules: [
          {
            moduleId: "importance-vegetation",
            title: "Importance of vegetation",
            bigIdea: "Vegetation is valuable to people, animals and the whole environment. It provides materials, food, shelter and protection.",
            learnIt: [
              "Vegetation provides food such as fruits, nuts, honey, wild meat and pasture for animals.",
              "Trees provide timber for building, firewood for cooking, and raw materials for making tools and furniture.",
              "Forests protect the soil from erosion and help attract and keep rainfall.",
              "Vegetation provides habitats for birds, insects and wild animals.",
              "Plants are used as medicine by many communities.",
              "Forests, savanna and game parks attract tourists, which brings income to countries."
            ],
            visual: {
              kind: "cards",
              title: "Uses of vegetation",
              description: "Show cards for food, timber, medicine, rainfall, soil protection, animal habitat and tourism."
            }
          }
        ]
      },
      {
        subtopicId: "game-parks-animals",
        title: "Game parks and animals",
        modules: [
          {
            moduleId: "game-parks-animals",
            title: "Game parks and animals",
            bigIdea: "Game parks protect animals and their habitats. Different vegetation zones have different animals because each zone provides different food, water and shelter.",
            learnIt: [
              "A game park is an area set aside to protect wild animals and plants.",
              "Game parks are important because they protect endangered animals, attract tourists, preserve habitats and help maintain biodiversity.",
              "Equatorial forests have animals such as gorillas, chimpanzees, monkeys, forest elephants and many birds.",
              "Savanna has animals such as lions, elephants, giraffes, zebras, antelopes, buffaloes and cheetahs.",
              "Temperate grasslands (velds) have animals such as springbok, zebras, ostriches and meerkats.",
              "Wild animals are cared for through protection, feeding during droughts, treating sick animals, preserving their habitat and employing game rangers and wardens."
            ],
            visual: {
              kind: "comparison",
              title: "Animals in vegetation zones",
              description: "Show three columns: Equatorial forest with gorillas and parrots, savanna with lions and elephants, velds with springbok and ostriches."
            },
            tryThis: {
              question: "Which animals are commonly found in savanna vegetation?",
              choices: ["Lions and elephants", "Penguins and polar bears", "Whales and sharks", "Gorillas only"],
              correct: 0,
              explanation: "Savanna vegetation supports animals such as lions, elephants, giraffes and zebras."
            }
          },
          {
            moduleId: "animals-vegetation-zones",
            title: "Why animals live in different vegetation zones",
            bigIdea: "Animals choose vegetation zones that provide the food, water, shelter, climate and safety they need.",
            learnIt: [
              "Animals need food. Grazing animals live in grasslands where grass is available; forest animals eat fruits, leaves and insects.",
              "Animals need water. Many savanna animals stay near rivers or waterholes, especially in the dry season.",
              "Animals need shelter. Forests provide hiding places; grasslands provide open space for running.",
              "Animals need the right climate. Some animals cannot survive very cold or very dry conditions.",
              "Animals need protection from enemies. Some vegetation helps animals hide or escape predators."
            ],
            examTip: "When explaining why an animal lives in a vegetation zone, mention food, water, shelter and protection."
          }
        ]
      },
      {
        subtopicId: "population-vegetation",
        title: "Population and vegetation",
        modules: [
          {
            moduleId: "population-vegetation",
            title: "Population distribution in relation to vegetation",
            bigIdea: "People tend to settle where vegetation supports farming, water supply and building materials. Some vegetation zones are difficult for settlement.",
            learnIt: [
              "Dense equatorial forests have few people because thick vegetation, pests and diseases make farming and transport difficult.",
              "Savanna grasslands often have more people because the land can support crop farming and livestock.",
              "Desert areas have very few people because there is little water and vegetation.",
              "Mediterranean and temperate areas can support dense settlement because of good climate and soils.",
              "Mountain areas may have moderate population because steep slopes limit farming, although some highlands support tea, coffee and herding."
            ],
            visual: {
              kind: "comparison",
              title: "Population and vegetation zones",
              description: "Show five simple zones: equatorial forest (sparse), savanna (dense), desert (sparse), Mediterranean (dense), mountain (moderate)."
            }
          },
          {
            moduleId: "population-effects-vegetation",
            title: "Effects of population on vegetation",
            bigIdea: "A large population can destroy vegetation through farming, settlement and fuel collection. A small population may allow vegetation to recover.",
            learnIt: [
              "A big population needs more land for farming and settlement, which can lead to deforestation.",
              "More people need more firewood, timber and pasture, which can cause overgrazing and tree cutting.",
              "Bush burning to clear land can destroy large areas of vegetation.",
              "Soil erosion may follow when vegetation is removed, making the land less productive.",
              "A small population puts less pressure on vegetation, allowing forests and grasslands to recover.",
              "Solutions include family planning, tree planting, improved farming methods, conservation education and controlled land use."
            ],
            workedExample: {
              question: "How can a rapidly growing population affect vegetation?",
              steps: [
                "More people need more farmland and settlement land.",
                "This leads to clearing of forests and grasslands.",
                "Overgrazing and firewood collection can further damage vegetation."
              ],
              answer: "A rapidly growing population can cause deforestation, overgrazing and soil erosion as people clear land for farming, settlement and fuel."
            }
          }
        ]
      }
    
      ,{
        subtopicId: "premium-vegetation-application",
        title: "Premium Exam Practice: Vegetation Belts and Human Use",
        modules: [
          {
            moduleId: "vegetation-belt-matching",
            title: "Matching Vegetation to Climate",
            bigIdea: "Vegetation belts are closely linked to rainfall and temperature conditions.",
            learnIt: [
              "Equatorial forests grow in hot, wet areas with heavy rainfall throughout the year.",
              "Savanna grasslands grow where there is seasonal rainfall with wet and dry seasons.",
              "Desert vegetation grows in very dry areas and often has adaptations such as deep roots, small leaves or thick stems."
            ],
            workedExample: { question: "Why is savanna vegetation common in areas with wet and dry seasons?", steps: ["Step 1: Savanna vegetation needs some rainfall but can survive dry periods.", "Step 2: Wet seasons allow grass to grow.", "Step 3: Dry seasons limit thick forest growth."], answer: "Savanna grows there because rainfall is seasonal, with enough rain for grass but dry periods that limit dense forest." },
            tryThis: { question: "Which vegetation type is common in very dry areas?", choices: ["Desert vegetation", "Equatorial forest", "Papyrus swamp", "Mangrove forest only"], correct: 0, explanation: "Desert vegetation is adapted to dry conditions." }
          },
          {
            moduleId: "vegetation-conservation",
            title: "Conservation and Human Activities",
            bigIdea: "Vegetation is useful, but careless human activity can destroy it.",
            learnIt: [
              "Vegetation provides timber, medicine, pasture, fruits, rainfall support, windbreaks and habitats for wildlife.",
              "Human activities such as bush burning, overgrazing and deforestation can destroy vegetation cover.",
              "Conservation actions include afforestation, controlled grazing, fire control, national parks and environmental education."
            ],
            workedExample: { question: "Give two ways of conserving natural vegetation.", steps: ["Step 1: Think of actions that protect plant cover.", "Step 2: Planting trees replaces lost vegetation.", "Step 3: Controlled grazing prevents animals from destroying all grass."], answer: "Afforestation and controlled grazing help conserve vegetation." },
            tryThis: { question: "Which activity destroys vegetation?", choices: ["Bush burning", "Afforestation", "Controlled grazing", "Creating forest reserves"], correct: 0, explanation: "Bush burning destroys plant cover and habitats." }
          }
        ]
      }],
    quiz: [
      { q: "Vegetation means:", choices: ["Plant cover of an area", "Capital city", "All rivers", "Only wild animals"], correct: 0, why: "Vegetation is the natural or planted plant cover of an area." },
      { q: "Which vegetation type is common in areas with heavy rainfall near the Equator?", choices: ["Equatorial rainforest", "Desert vegetation", "Mediterranean scrub only", "Tundra"], correct: 0, why: "Heavy rainfall near the Equator supports equatorial rainforest." },
      { q: "Which factor strongly influences vegetation distribution?", choices: ["Rainfall", "Flag colour", "Capital name", "Number plate"], correct: 0, why: "Rainfall affects the type and amount of vegetation in an area." },
      { q: "Game parks are important because they:", choices: ["Protect wildlife", "Destroy all forests", "Stop tourism", "Remove all animals"], correct: 0, why: "Game parks protect animals and their habitats." },
      { q: "Which animal is commonly associated with savanna grassland?", choices: ["Lion", "Polar bear", "Penguin", "Whale only"], correct: 0, why: "Lions live in savanna ecosystems where prey animals are found." },
      { q: "Which activity can destroy vegetation?", choices: ["Bush burning", "Tree planting", "Controlled grazing", "Protecting seedlings"], correct: 0, why: "Bush burning can destroy plant cover and animal habitats." },
      { q: "Why may deserts have low population density?", choices: ["Little water and sparse vegetation", "Too many schools", "Too much rainfall", "Too many lakes"], correct: 0, why: "Deserts have little water and sparse vegetation, making settlement difficult." },
    ],
  },
  {
    id: "people-ethnic-groups-settlement",
    themeId: "sst-living-together-africa",
    themeName: "Living Together in Africa",
    title: "People of Africa, ethnic groups and settlement patterns",
    estMinutes: 17,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "Why this matters: African societies have different origins, migrations, languages and settlement patterns. The topic helps learners appreciate unity in diversity.",
      learningObjectives: [
        "Describe origins and movements of different ethnic groups in Africa.",
        "Identify settlement patterns of ethnic groups.",
        "Give reasons for migration and settlement.",
        "Explain problems and effects of ethnic migrations.",
      ],
      whatYouNeedToKnow: [
        "An ethnic group is a group of people who share common culture, language, origin or history. Africa has many ethnic groups, including Bantu, Nilotes, Cushites, Semites, Berbers and others.",
        "Migration is the movement of people from one place to another. People migrated because of population increase, search for land and water, wars, internal conflicts, trade, harsh climate, diseases and expansion of kingdoms.",
        "During migration, people faced problems such as resistance from indigenous people, wild animals, diseases, difficult terrain, food shortage, water shortage and harsh climate.",
        "Migrations changed population distribution, spread cultures and languages, caused intermarriages, led to conflicts in some areas and helped form new settlements.",
        "Settlement patterns are influenced by relief, climate, water, vegetation, security, fertile soils and economic activities.",
      ],
      worked: {
        problem: "Give three reasons why ethnic groups migrated in Africa.",
        steps: [
          "Step 1. Think about needs: people need land, water and food.",
          "Step 2. Think about danger: wars and conflicts can force people to move.",
          "Step 3. Think about environment: harsh climate or disease can push people away.",
        ],
        answer: "Answer: Ethnic groups migrated because of search for land and water, wars or conflicts, and harsh climate or disease.",
      },
      commonMistakes: [
        "Using tribe and ethnic group carelessly as if they always mean exactly the same thing.",
        "Thinking migration had only one cause.",
        "Forgetting both positive and negative effects of migration.",
        "Ignoring unity and respect among different cultures.",
      ],
      tryThis: {
        question: "What is migration?",
        choices: ["Movement of people from one place to another", "A type of mountain", "A capital city", "A climate zone only"],
        correct: 0,
        explanation: "Migration is movement from one place to another.",
      },
      writingTasks: [
        {
          title: "Migration task: Push and pull factors",
          prompt: "Explain why people move from one place to another and how migration can affect settlement patterns.",
          planningSteps: [
            "Define migration in simple words.",
            "Give two push factors that force people to leave a place.",
            "Give two pull factors that attract people to a new place.",
            "Explain one effect of migration on settlement or culture.",
          ],
          checklist: [
            "Push and pull factors are separated correctly.",
            "Examples are realistic for Africa.",
            "Settlement pattern is mentioned.",
            "Different ethnic groups are discussed respectfully.",
          ],
          modelOpening: "Migration is the movement of people from one place to another. People may leave an area because of drought or conflict and move to places with fertile land, water or jobs.",
        },
      ],
      recap: [
        "Africa has many ethnic groups.",
        "Migration has push and pull reasons.",
        "People faced challenges during movement and settlement.",
        "Learners should appreciate unity in diversity.",
      ],
    },
    subtopics: [
      {
        subtopicId: "origin-ethnic-groups",
        title: "1. Origin of different ethnic groups",
        modules: [
          {
            moduleId: "what-is-ethnic-group",
            title: "What is an ethnic group?",
            bigIdea: "An ethnic group is a group of people who share culture, language, origin or history. All ethnic groups deserve respect and no group is superior or inferior to another.",
            learnIt: [
              "An ethnic group shares things such as culture, language, origin, history or traditions.",
              "The word tribe is sometimes used to mean a smaller group within an ethnic group.",
              "Africa has hundreds of ethnic groups, which is why the continent is rich in languages, music, dress and customs.",
              "Social Studies teaches us to respect all cultures and to live peacefully with people who are different from us.",
              "No ethnic group should be mocked, ranked or treated as better than another."
            ],
            visual: {
              kind: "diagram",
              title: "What makes an ethnic group",
              description: "Show a simple circle labelled 'Ethnic group' with arrows pointing to culture, language, origin, history and traditions."
            },
            tryThis: {
              question: "An ethnic group commonly shares:",
              choices: ["Culture, language and origin", "Only shoe size", "Only rainfall", "Only road signs"],
              correct: 0,
              explanation: "Ethnic groups often share culture, language, origin or history."
            }
          },
          {
            moduleId: "major-ethnic-groups",
            imageUrl: "/images/social-studies/bantu-nilote-migration-map.png",
            imageCaption: "Map tracing historical migration routes of Bantu and Nilotic speakers into East Africa.",
            title: "Major Ethnic Groups of Africa",
            bigIdea: "Africa is populated by distinct ethnic groups with unique origins and migration routes.",
            learnIt: [
              "An ethnic group is a large group of people who share a common origin, language group, history, and cultural heritage.",
              "Bantu: the largest ethnic group in Africa, originating from the Cameroon/Congo basin cradle and migrating south and east across Central, Eastern, and Southern Africa.",
              "Nilotes: originated from Bahr-el-Ghazal in South Sudan along the Nile valley. Grouped into River-Lake Nilotes (Acholi, Alur, Luo), Plain Nilotes (Maasai, Karimojong), and Highland Nilotes (Kalenjin, Sabiny).",
              "Other major groups: Cushites (from Horn of Africa e.g. Somali, Oromo); Semites and Berbers (North Africa e.g. Arabs); Negroes (West Africa); and Khoisan (comprising the San hunters and Khoikhoi pastoralists of the Kalahari region in Southern Africa)."
            ],
            visual: {
              kind: "map",
              title: "Major ethnic groups of Africa",
              description: "Show a simple map of Africa with labels showing Berbers in North Africa, Arabs in North Africa and Nile Valley, Cushites in the Horn, Bantu in Central/East/Southern Africa and Hamites/Semites in parts of North-East Africa."
            },
            examTip: "When naming ethnic groups, use the exact names from the NCDC source: Berbers, Negroes, Bantu, Cushites, Arabs, Caucasians (Hamites and Semites)."
          }
        ]
      },
      {
        subtopicId: "movements-ethnic-groups",
        title: "2. Movements of different ethnic groups into Africa",
        modules: [
          {
            moduleId: "migration-into-africa",
            title: "Migration of ethnic groups into Africa",
            bigIdea: "People moved into Africa from different directions over long periods of time. These movements shaped where different ethnic groups live today.",
            learnIt: [
              "Some groups moved into Africa from the north, across the Mediterranean and Sahara regions.",
              "Some groups moved into Africa from the north-east, across the Red Sea and into the Horn of Africa.",
              "Some groups moved within Africa from west to east and from north to south.",
              "These movements happened over many centuries, not at one single time.",
              "As people moved, they settled in places where they could find land, water and security."
            ],
            visual: {
              kind: "map",
              title: "General directions of ethnic movements into Africa",
              description: "Show Africa with simple arrows from the north and north-east moving inward, and internal arrows showing movement within the continent. Keep the map general and NCDC-aligned."
            }
          },
          {
            moduleId: "reasons-migration",
            title: "Reasons for migration",
            bigIdea: "People did not move for one simple reason. The NCDC lists population increase, wars, internal conflicts, shortage of land and water, harsh climate and expansionism as major reasons.",
            learnIt: [
              "Population increase: when families grew, there was not enough land for everyone, so some people moved to new areas.",
              "Wars and internal conflicts: fighting between groups forced people to leave and find safer places.",
              "Shortage of land and water: people moved to places with fertile soil and reliable water.",
              "Harsh climate: drought, heat or disease pushed people away from difficult areas.",
              "Expansionism: some groups moved to expand their territory, power or control.",
              "Trade: some movements were linked to trade routes and the search for goods."
            ],
            workedExample: {
              question: "Give three reasons why ethnic groups migrated in Africa.",
              steps: [
                "Think about needs: people need land and water for farming and grazing.",
                "Think about danger: wars and conflicts force people to leave.",
                "Think about environment: harsh climate or disease can make an area hard to live in."
              ],
              answer: "Ethnic groups migrated because of population increase, shortage of land and water, wars or conflicts, harsh climate, disease and expansionism."
            }
          }
        ]
      },
      {
        subtopicId: "settlement-tribes",
        title: "3. Settlement patterns and tribes",
        modules: [
          {
            moduleId: "settlement-patterns",
            title: "Settlement patterns of ethnic groups",
            bigIdea: "Settlement patterns show how people arrange their homes in an area. Relief, climate, water, vegetation, security and economic activities all influence where ethnic groups settle.",
            learnIt: [
              "Dispersed settlements have homes spread out, often found in farming areas.",
              "Nucleated settlements have homes grouped together, often around a market, road junction or water source.",
              "Linear settlements follow a road, river or railway line.",
              "People prefer to settle where there is fertile land, reliable water, good climate and security.",
              "High mountains, thick forests, deserts and tsetse-fly areas may discourage settlement."
            ],
            visual: {
              kind: "diagram",
              title: "Settlement patterns",
              description: "Show three simple diagrams: dispersed homes spread across farmland, nucleated homes clustered near a water source, and linear homes along a road or river."
            },
            tryThis: {
              question: "Homes grouped together around a market or water source form a:",
              choices: ["Nucleated settlement", "Dispersed settlement", "Linear settlement", "Desert settlement"],
              correct: 0,
              explanation: "A nucleated settlement has homes grouped together around a central point."
            }
          },
          {
            moduleId: "tribes-ethnic-groups",
            title: "Tribes belonging to ethnic groups",
            bigIdea: "Tribes are smaller groups within an ethnic group. For example, the Bantu ethnic group includes many tribes found across Central, Eastern and Southern Africa.",
            learnIt: [
              "A tribe is a smaller group that shares a common language, culture and often a common ancestor.",
              "Examples of Bantu-speaking groups in Uganda include Baganda, Batoro, Banyoro, Bakiga and Banyankole.",
              "Nilotic-speaking groups in Uganda include Acholi, Lango, Iteso and Karamojong.",
              "Cushitic-speaking groups in the Horn of Africa include Somali, Oromo and Afar.",
              "Knowing tribes helps learners understand local culture, but it must be studied with respect."
            ],
            examTip: "When giving examples of tribes, link them to the correct ethnic or language group and spell the names carefully."
          }
        ]
      },
      {
        subtopicId: "problems-effects-migration",
        title: "4. Problems and effects of ethnic migrations",
        modules: [
          {
            moduleId: "problems-migration",
            title: "Problems during movement and settlement",
            bigIdea: "Migrants faced many dangers. The NCDC lists resistance from indigenous people, difficult movement, wild animals, diseases, difficult terrain, food and water shortage, and harsh climate.",
            learnIt: [
              "Resistance from indigenous people: the people already living in an area sometimes fought to protect their land.",
              "Difficult movement: long distances, forests, rivers, mountains and deserts made travel hard.",
              "Wild animals and diseases: migrants faced attacks by wild animals and diseases such as malaria and sleeping sickness.",
              "Difficult terrain: steep slopes, swamps and thick forests slowed movement.",
              "Food and water shortage: travellers sometimes ran out of supplies before reaching a safe place.",
              "Harsh climate: extreme heat, cold or drought made journeys dangerous."
            ],
            visual: {
              kind: "cards",
              title: "Problems faced during migration",
              description: "Show six cards with icons or labels: resistance, wild animals, diseases, difficult terrain, food/water shortage, harsh climate."
            }
          },
          {
            moduleId: "effects-migration",
            title: "Effects of ethnic migrations",
            bigIdea: "Migrations changed Africa in many ways. The NCDC notes population increase and cultural change as key effects, but migrations also caused intermarriage, conflict and the formation of new settlements.",
            learnIt: [
              "Population increase: when migrants settled in an area, the population grew.",
              "Cultural change: migrants brought new languages, customs, music, dress, religions and farming methods.",
              "Intermarriage: when different groups met, they sometimes married and formed mixed communities.",
              "Conflicts: competition for land and resources sometimes led to wars between groups.",
              "New settlements: migrants founded new villages, towns and kingdoms.",
              "Spread of languages and technologies: farming tools, iron working and trade practices spread as people moved."
            ],
            workedExample: {
              question: "Explain two effects of ethnic migrations in Africa.",
              steps: [
                "Migration led to population increase in the areas where people settled.",
                "Migrants brought new languages and customs, which changed the culture of the places they settled."
              ],
              answer: "Effects of ethnic migrations include population increase, cultural change, intermarriage, conflicts and the formation of new settlements."
            }
          }
        ]
      }
    
      ,{
        subtopicId: "premium-people-settlement-reasoning",
        title: "Premium Exam Practice: Migration and Settlement Reasoning",
        modules: [
          {
            moduleId: "migration-cause-effect",
            title: "Explaining Why People Move",
            bigIdea: "Migration answers should separate causes of movement from effects after settlement.",
            learnIt: [
              "Push factors force people away from a place, such as drought, war, famine, land shortage or disease.",
              "Pull factors attract people to a place, such as fertile land, security, trade, water or jobs.",
              "Migration can lead to cultural exchange, population growth, conflict over land or growth of towns."
            ],
            workedExample: { question: "Give one push factor and one pull factor for migration.", steps: ["Step 1: A push factor makes people leave. War can make people leave.", "Step 2: A pull factor attracts people. Fertile land can attract settlers."], answer: "War is a push factor, while fertile land is a pull factor." },
            tryThis: { question: "Which is a pull factor?", choices: ["Fertile land", "Famine", "War", "Disease outbreak"], correct: 0, explanation: "Fertile land attracts people to settle in an area." }
          },
          {
            moduleId: "settlement-patterns",
            title: "Settlement Patterns and Reasons",
            bigIdea: "Settlement patterns are influenced by water, relief, climate, security and economic activity.",
            learnIt: [
              "People often settle near water sources because water is needed for domestic use, farming and animals.",
              "Flat fertile land encourages farming and dense settlement, while steep mountains or deserts may have sparse settlement.",
              "Towns grow where there is trade, transport, industry or administration."
            ],
            workedExample: { question: "Why do many people settle near lakes and rivers?", steps: ["Step 1: Lakes and rivers provide water.", "Step 2: They may support fishing, farming and transport.", "Step 3: These activities support settlement."], answer: "People settle near lakes and rivers because they provide water and support activities such as fishing and farming." },
            tryThis: { question: "Sparse settlement is most likely in:", choices: ["deserts", "fertile plains", "trading centres", "well-watered areas"], correct: 0, explanation: "Deserts have little water and harsh conditions, so fewer people settle there." }
          }
        ]
      }],
    quiz: [
      { q: "An ethnic group commonly shares:", choices: ["Culture and origin", "Only shoe size", "Only rainfall", "Only road signs"], correct: 0, why: "Ethnic groups often share culture, language, origin or history." },
      { q: "Migration means:", choices: ["Movement of people from one place to another", "Growth of grass", "Building a dam", "Drawing a map only"], correct: 0, why: "Migration is the movement of people from one place to another." },
      { q: "Which is a reason for migration?", choices: ["Search for land", "Too many latitudes", "A mirror image", "Short circuit"], correct: 0, why: "People may migrate to find land for settlement and farming." },
      { q: "Which problem could migrants meet?", choices: ["Food and water shortage", "Too much homework only", "Plane mirror", "A fuse"], correct: 0, why: "Migrants could face shortages of food and water during movement." },
      { q: "Which is an effect of migration?", choices: ["Spread of cultures", "Stopping all languages", "Removing all rivers", "Ending all settlement"], correct: 0, why: "Migration can spread cultures, languages and practices." },
      { q: "Which factor affects settlement patterns?", choices: ["Water supply", "Book colour", "Answer letter", "Bell sound only"], correct: 0, why: "People often settle near reliable water sources." },
      { q: "Why should learners study ethnic groups respectfully?", choices: ["To appreciate unity in diversity", "To insult other cultures", "To create conflict", "To hide history"], correct: 0, why: "Social Studies encourages respect for different cultures and unity in diversity." },
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
      }
    
      ,{
        subtopicId: "premium-foreign-influence-analysis",
        title: "Premium Exam Practice: Foreign Influence Source Questions",
        modules: [
          {
            moduleId: "foreign-influence-timeline",
            title: "Ordering Foreign Influence Events",
            bigIdea: "History answers become clearer when learners put events in the correct order.",
            learnIt: [
              "Foreign influence in Africa included early trade, missionaries, explorers, chartered companies and colonial rule.",
              "Missionaries often came to spread Christianity, build schools and hospitals, and sometimes paved the way for colonial influence.",
              "The Berlin Conference of 1884-1885 formalised European partition of Africa without African consent."
            ],
            workedExample: { question: "Why was the Berlin Conference important in African history?", steps: ["Step 1: Identify the date: 1884-1885.", "Step 2: European powers met to divide Africa among themselves.", "Step 3: Africans were not invited to decide their own future."], answer: "It was important because European powers used it to divide Africa among themselves without African consent." },
            tryThis: { question: "The Berlin Conference took place in:", choices: ["1884-1885", "1962", "1945", "2002"], correct: 0, explanation: "The Berlin Conference was held in 1884-1885." }
          },
          {
            moduleId: "foreign-influence-effects",
            title: "Effects of Foreign Influence",
            bigIdea: "Foreign influence had both positive and negative effects, so answers must be balanced and specific.",
            learnIt: [
              "Positive effects may include formal education, hospitals, new crops, roads, railways and written languages in some areas.",
              "Negative effects may include loss of land, forced labour, exploitation, cultural disruption, artificial borders and political domination.",
              "A premium answer names the effect and explains how it affected Africans."
            ],
            workedExample: { question: "Give one negative effect of colonial rule in Africa.", steps: ["Step 1: Choose a specific effect.", "Step 2: Explain it, not just name it.", "Step 3: Example: Africans lost land to colonial settlers or companies."], answer: "One negative effect was loss of land, because some African communities were pushed off fertile land by colonial authorities or settlers." },
            tryThis: { question: "Which is a negative effect of colonialism?", choices: ["Loss of African land", "Free choice by all Africans", "End of all taxes", "Equal power for all chiefs"], correct: 0, explanation: "Many Africans lost land under colonial rule." }
          }
        ]
      }],
    quiz: [
      { q: "Which group came mainly to spread Christianity?", choices: ["Missionaries", "Only miners", "Only soldiers", "Only farmers"], correct: 0, why: "Missionaries came mainly to spread Christianity and build mission stations." },
      { q: "The scramble for Africa means:", choices: ["European rush to claim African territories", "African football tournament", "Formation of rainfall", "A type of map scale"], correct: 0, why: "The scramble for Africa was the rush by European powers to claim African territories." },
      { q: "Which was a political effect of colonial rule?", choices: ["Loss of independence", "Formation of clouds", "Growth of savanna", "Making longitudes"], correct: 0, why: "Colonised African societies lost political independence." },
      { q: "Which was an economic reason for colonialism?", choices: ["Search for raw materials and markets", "Correction of eyesight", "Formation of rift valleys", "Migration of birds only"], correct: 0, why: "European powers wanted raw materials, markets and wealth." },
      { q: "Which method was used to administer colonies?", choices: ["Indirect rule", "Latitude rule", "Vegetation rule", "Weather rule"], correct: 0, why: "Indirect rule was one method used by colonial administrators." },
      { q: "The Great Trek is associated with which country?", choices: ["South Africa", "Uganda only", "Libya only", "Mali only"], correct: 0, why: "The Great Trek was a major movement of Boers in South Africa." },
      { q: "Which is a social effect of foreign influence?", choices: ["Formal schooling spread", "All rivers dried", "Mountains disappeared", "All climates ended"], correct: 0, why: "Foreign influence contributed to the spread of formal schooling." },
    ],
  },
  {
    id: "nationalism-road-independence",
    themeId: "sst-living-together-africa",
    themeName: "Living Together in Africa",
    title: "Nationalism and the road to independence of Africa",
    estMinutes: 20,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "Why this matters: Learners need to understand how African people organised to regain independence and why patriotism, nationalism and Pan-Africanism mattered.",
      study: {
        bigIdea: "Nationalism helped Africans demand self-rule and independence. It grew because many Africans wanted freedom, fair treatment, land rights and control of their own countries.",
        keyVocabulary: [
          { term: "Nationalism", meaning: "Nationalism is love for one's nation and the desire for self-rule." },
          { term: "Nationalist", meaning: "A nationalist is a person who works for the interests or independence of a nation." },
          { term: "Patriotism", meaning: "Patriotism is love for one's country and willingness to serve it responsibly." },
          { term: "Pan-Africanism", meaning: "Pan-Africanism is the idea that African people should unite and support one another." },
          { term: "Independence", meaning: "Independence is freedom of a country to govern itself." },
          { term: "Multiparty system", meaning: "A multiparty system is a system where more than one political party can compete for power." },
        ],
        sections: [
          { title: "Why nationalism grew", points: ["Africans wanted self-rule and freedom from colonial control.", "People opposed forced labour, land alienation, heavy taxes and discrimination.", "Education, newspapers, trade unions and world events helped spread nationalist ideas.", "Pan-Africanism encouraged African unity and pride."] },
          { title: "Methods used", points: ["Nationalists formed political parties and trade unions.", "They used newspapers, petitions, boycotts, strikes, demonstrations and negotiations.", "Some countries used armed struggle where peaceful methods failed.", "International pressure also helped some independence movements."] },
          { title: "Leaders and challenges", points: ["Important leaders included Kwame Nkrumah, Jomo Kenyatta, Julius Nyerere, Patrice Lumumba and Nelson Mandela.", "Nationalists faced arrest, imprisonment, exile, censorship and lack of funds.", "Some countries faced ethnic divisions and strong colonial armies.", "Independence required organisation, sacrifice and unity."] },
        ],
        visual: { kind: "timeline", title: "Visual idea: Road to independence", description: "Show a timeline from colonial problems to nationalist organisation, protests/negotiations and independence." },
        examTip: "When writing about a nationalist, name the country, the method used and one challenge faced.",
      },
      learningObjectives: [
        "Explain nationalism, patriotism and Pan-Africanism.",
        "Identify leading Pan-Africanists and nationalists.",
        "Describe methods used to fight for independence.",
        "Compare single-party and multiparty systems.",
      ],
      whatYouNeedToKnow: [
        "Nationalism is love for and loyalty to one's nation, often shown through the desire for self-rule. A nationalist is a person who works for the interests or independence of a nation. Patriotism is love for one's country and willingness to serve it responsibly.",
        "Pan-Africanism is the idea that African people should unite, support one another and work for freedom and development. Pan-Africanists encouraged African pride, unity and resistance to colonial domination.",
        "Pan-Africanists and nationalists used political parties, newspapers, petitions, strikes, boycotts, demonstrations, negotiations, armed struggle in some places and international pressure to demand independence.",
        "Leading African nationalists and Pan-Africanists included people such as Kwame Nkrumah, Jomo Kenyatta, Julius Nyerere, Patrice Lumumba, Nelson Mandela and others. Learners should connect leaders with the wider struggle for self-rule, not memorise names only.",
        "Ethiopia and Liberia are commonly studied as African countries that were not colonised in the same way as most African states. Ethiopia resisted Italian invasion, while Liberia had a special history linked to freed formerly enslaved people from America.",
        "Nationalists faced problems such as arrest, imprisonment, exile, censorship, lack of funds, tribal or religious divisions, poor communication and strong colonial armies.",
        "Multiparty systems allow more than one political party to compete for power. Single-party systems allow one legal ruling party. Each system has claimed advantages and disadvantages, but democratic participation, accountability, peaceful transfer of power and respect for rights are important.",
      ],
      worked: {
        problem: "Differentiate nationalism and Pan-Africanism.",
        steps: [
          "Step 1. Nationalism focuses on love for and self-rule of a nation.",
          "Step 2. Pan-Africanism focuses on unity and cooperation of African people.",
          "Step 3. Both helped the struggle for independence.",
        ],
        answer: "Answer: Nationalism is loyalty to one's nation and desire for self-rule; Pan-Africanism is the unity and cooperation of African people.",
      },
      commonMistakes: [
        "Confusing patriotism with Pan-Africanism.",
        "Thinking independence came by only one method everywhere.",
        "Forgetting problems faced by nationalists, such as imprisonment and limited funds.",
        "Assuming every African country followed the same path to independence.",
      ],
      tryThis: {
        question: "Which idea encouraged African people to unite for freedom and development?",
        choices: ["Pan-Africanism", "Desertification", "Assimilation only", "Latitude"],
        correct: 0,
        explanation: "Pan-Africanism promotes unity and cooperation among African people.",
      },
      writingTasks: [
        {
          title: "Nationalist profile task",
          prompt: "Choose one African nationalist and explain how he or she contributed to the struggle for independence.",
          planningSteps: [
            "Name the nationalist and country.",
            "State the colonial power or problem being opposed.",
            "Describe methods used, such as parties, writing, protests, negotiation or armed struggle.",
            "Mention one challenge faced by nationalists.",
          ],
          checklist: [
            "The nationalist and country are correct.",
            "Methods of struggle are explained.",
            "The answer uses terms like nationalism, independence or self-rule correctly.",
            "Challenges are included.",
          ],
          modelOpening: "Kwame Nkrumah was a nationalist leader in Ghana. He helped organise people through political action and demanded self-rule from British colonial rule.",
        },
      ],
      recap: [
        "Nationalism helped African countries demand self-rule.",
        "Pan-Africanism promoted African unity.",
        "Nationalists used peaceful and sometimes armed methods.",
        "Political systems affect participation and accountability.",
      ],
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
      }
    
      ,{
        subtopicId: "premium-nationalism-reasoning",
        title: "Premium Exam Practice: Nationalism Cause and Effect",
        modules: [
          {
            moduleId: "nationalism-causes",
            title: "Why Nationalism Grew",
            bigIdea: "Nationalism grew because Africans wanted freedom, dignity and control of their own resources and governments.",
            learnIt: [
              "Causes included unfair taxes, forced labour, land alienation, racial discrimination and lack of political representation.",
              "Educated Africans, ex-servicemen, trade unions, political parties and newspapers helped spread nationalist ideas.",
              "World War II weakened European powers and encouraged Africans to demand independence."
            ],
            workedExample: { question: "How did education help nationalism grow?", steps: ["Step 1: Education helped Africans read and understand political ideas.", "Step 2: Educated Africans could form parties, write newspapers and demand rights.", "Step 3: This helped spread the desire for independence."], answer: "Education helped Africans understand their rights and organise political movements for independence." },
            tryThis: { question: "Which group helped spread nationalist ideas?", choices: ["Political parties", "Only wild animals", "Only mountains", "Only rivers"], correct: 0, explanation: "Political parties mobilised people to demand independence." }
          },
          {
            moduleId: "independence-timeline",
            title: "Independence Timeline Answers",
            bigIdea: "Road-to-independence questions are easier when learners arrange events and leaders in order.",
            learnIt: [
              "Use dates and leaders carefully. Do not mix up countries and independence leaders.",
              "Many African countries achieved independence through political parties, negotiations, constitutional conferences and sometimes armed struggle.",
              "A strong answer states the country, leader or party and the method used to fight for independence."
            ],
            workedExample: { question: "State one peaceful method Africans used to demand independence.", steps: ["Step 1: Think of methods that do not involve fighting.", "Step 2: Political parties organised people.", "Step 3: Negotiations and constitutional conferences were also used."], answer: "Africans formed political parties and negotiated for independence." },
            tryThis: { question: "A peaceful method of demanding independence was:", choices: ["forming political parties", "burning all farms", "stopping all schools", "destroying rivers"], correct: 0, explanation: "Political parties were used to organise and demand independence." }
          }
        ]
      }],
    quiz: [
      { q: "Nationalism means:", choices: ["Love for and loyalty to one's nation", "A type of lake", "A climate zone", "A vegetation belt"], correct: 0, why: "Nationalism is love for and loyalty to one's nation, often linked to self-rule." },
      { q: "Pan-Africanism promotes:", choices: ["African unity", "Colonial rule", "Desert expansion", "River flooding only"], correct: 0, why: "Pan-Africanism promotes unity and cooperation among African people." },
      { q: "Which country is commonly studied as having resisted colonisation by Italy?", choices: ["Ethiopia", "Kenya", "Ghana", "Nigeria"], correct: 0, why: "Ethiopia is known for resisting Italian colonisation, especially at Adwa." },
      { q: "Which method was used by nationalists?", choices: ["Forming political parties", "Creating deserts", "Stopping all schools", "Making oceans"], correct: 0, why: "Political parties helped mobilise people for independence." },
      { q: "A multiparty system means:", choices: ["More than one political party can compete", "Only one river exists", "No voting is allowed", "All countries have one capital"], correct: 0, why: "Multiparty systems allow more than one party to compete for power." },
      { q: "Which problem did nationalists often face?", choices: ["Imprisonment", "Too many oceans", "No mountains in Africa", "Lack of sunlight everywhere"], correct: 0, why: "Many nationalists were arrested or imprisoned by colonial governments." },
      { q: "Patriotism means:", choices: ["Love for one's country", "Fear of maps", "A type of rainfall", "A lake"], correct: 0, why: "Patriotism is love for and commitment to one's country." },
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
      intro: "Why this matters: After independence, African countries formed organisations to promote unity, peace, development and cooperation. Learners need to know OAU, AU and regional economic groupings.",
      study: {
        bigIdea: "After independence, African countries had to build unity, peace and development. They formed organisations such as OAU, AU and regional groupings to work together.",
        keyVocabulary: [
          { term: "Post-independence", meaning: "Post-independence is the period after a country gains independence." },
          { term: "OAU", meaning: "OAU means organisation of African Unity, formed in 1963 to promote African unity." },
          { term: "AU", meaning: "AU means african Union, the organisation that replaced the OAU in 2002." },
          { term: "Regional grouping", meaning: "A regional grouping is an organisation of nearby countries working together." },
          { term: "Cooperation", meaning: "Cooperation is working together to achieve common goals." },
          { term: "Political instability", meaning: "Political instability is lack of stable government or peace." },
        ],
        sections: [
          { title: "Why African countries cooperated", points: ["They wanted unity, peace, trade and development.", "They wanted to support countries still under colonial or minority rule.", "They needed stronger bargaining power in world affairs.", "They wanted to solve shared problems such as conflict, poverty and poor transport."] },
          { title: "OAU and AU", points: ["The OAU was formed in Addis Ababa in 1963.", "It promoted unity and supported liberation movements.", "The AU replaced the OAU in 2002.", "The AU works for peace, democracy, human rights, development and cooperation."] },
          { title: "Challenges after independence", points: ["Some countries faced civil wars, coups, corruption and poverty.", "Poor transport and weak industries slowed development.", "Regional organisations can help through peace efforts, trade and shared infrastructure.", "Responsible citizens and leaders are important for progress."] },
        ],
        visual: { kind: "comparison", title: "Visual idea: OAU vs AU comparison", description: "Use a simple comparison card showing formation dates, headquarters/meeting context, aims and examples of work." },
        examTip: "For post-independence questions, give both the problem and a practical solution or organisation involved.",
      },
      learningObjectives: [
        "Explain why the OAU was formed and what it achieved.",
        "Describe the formation and objectives of the AU.",
        "Name major regional economic groupings in Africa.",
        "Explain advantages, challenges and solutions for cooperation.",
      ],
      whatYouNeedToKnow: [
        "The Organisation of African Unity (OAU) was formed in 1963 in Addis Ababa, Ethiopia. It aimed to promote African unity, support liberation movements, defend sovereignty and encourage cooperation.",
        "The African Union (AU) replaced the OAU in 2002. The AU aims to promote unity, peace, democracy, development, human rights and cooperation among African states.",
        "Regional economic groupings include COMESA, ECOWAS, SADC and IGAD. They encourage trade, transport links, peace efforts and economic cooperation among member states.",
        "Advantages of cooperation include larger markets, peace-building, shared infrastructure, easier trade and stronger bargaining power. Challenges include conflicts, poor transport, political differences, poverty and unequal development.",
      ],
      worked: {
        problem: "Give two advantages of regional economic cooperation in Africa.",
        steps: [
          "Step 1. Think about trade: countries can sell goods to a bigger market.",
          "Step 2. Think about infrastructure: countries can work together on roads, railways and energy.",
          "Step 3. State the points clearly.",
        ],
        answer: "Answer: It creates larger markets for goods and encourages shared infrastructure development.",
      },
      commonMistakes: [
        "Confusing OAU and AU dates.",
        "Thinking all regional groupings cover the whole of Africa.",
        "Forgetting both advantages and challenges of cooperation.",
        "Writing abbreviations without knowing their meaning.",
      ],
      tryThis: {
        question: "Which organisation replaced the OAU?",
        choices: ["African Union", "United Nations", "COMESA only", "Commonwealth"],
        correct: 0,
        explanation: "The African Union replaced the Organisation of African Unity.",
      },
      writingTasks: [
        {
          title: "Problem-solution task: Post-independence Africa",
          prompt: "Choose one problem faced by African countries after independence and suggest practical solutions.",
          planningSteps: [
            "Name the problem, such as political instability, poverty, corruption, disease or poor transport.",
            "Explain why the problem affected development.",
            "Give two possible solutions.",
            "Mention the role of citizens, leaders or regional organisations.",
          ],
          checklist: [
            "The problem is clearly linked to post-independence Africa.",
            "Effects on development are explained.",
            "Solutions are realistic.",
            "The answer promotes responsible citizenship and leadership.",
          ],
          modelOpening: "One problem faced by some African countries after independence was political instability. It reduced peace, slowed development and discouraged investment.",
        },
      ],
      recap: [
        "OAU promoted African unity and liberation.",
        "AU continues cooperation with wider development and governance aims.",
        "COMESA, ECOWAS, SADC and IGAD are regional groupings.",
        "Cooperation has benefits and challenges.",
      ],
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
      }
    
      ,{
        subtopicId: "premium-post-independence-solutions",
        title: "Premium Exam Practice: Challenges and Solutions",
        modules: [
          {
            moduleId: "post-independence-challenges",
            title: "Explaining Post-Independence Challenges",
            bigIdea: "A premium answer names a challenge and explains how it affects people or development.",
            learnIt: [
              "Common challenges include poverty, unemployment, corruption, civil wars, tribalism, poor infrastructure, debt and disease outbreaks.",
              "Do not simply list challenges. Explain one effect, such as slowing development, causing displacement or reducing public services.",
              "Some challenges were inherited from colonial rule, while others came from poor leadership or conflict after independence."
            ],
            workedExample: { question: "How can corruption affect development?", steps: ["Step 1: Corruption means misuse of public resources for private gain.", "Step 2: Money meant for roads, schools or hospitals may be stolen.", "Step 3: This slows development and hurts citizens."], answer: "Corruption slows development because public money may be stolen instead of being used for services." },
            tryThis: { question: "Which is a post-independence challenge?", choices: ["Corruption", "Equator", "Photosynthesis", "Pinhole camera"], correct: 0, explanation: "Corruption is a governance challenge faced by some countries after independence." }
          },
          {
            moduleId: "post-independence-solutions",
            title: "Suggesting Practical Solutions",
            bigIdea: "Social Studies answers should not only name problems; they should suggest realistic solutions.",
            learnIt: [
              "Solutions to poverty may include education, job creation, improved farming, trade and better infrastructure.",
              "Solutions to conflict may include dialogue, fair laws, strong institutions and respect for human rights.",
              "Regional cooperation helps countries trade, share resources and solve cross-border problems."
            ],
            workedExample: { question: "Suggest two ways African countries can reduce unemployment.", steps: ["Step 1: Think of ways people get skills.", "Step 2: Vocational training can prepare people for work.", "Step 3: Supporting industries and small businesses can create jobs."], answer: "They can promote vocational training and support industries or small businesses." },
            tryThis: { question: "Which action can promote peace?", choices: ["Dialogue", "Tribal hatred", "Election violence", "Corruption"], correct: 0, explanation: "Dialogue helps people solve disagreements peacefully." }
          }
        ]
      }],
    quiz: [
      { q: "The OAU was formed in:", choices: ["1963", "2002", "1884", "1995"], correct: 0, why: "The OAU was formed in 1963." },
      { q: "Which organisation replaced the OAU?", choices: ["AU", "UNICEF", "WHO", "NATO"], correct: 0, why: "The African Union replaced the Organisation of African Unity." },
      { q: "COMESA is an example of:", choices: ["Regional economic grouping", "Mountain range", "Desert", "Lake"], correct: 0, why: "COMESA is a regional economic grouping." },
      { q: "Which is an advantage of economic cooperation?", choices: ["Larger markets", "More isolation", "Stopping all trade", "Removing roads"], correct: 0, why: "Cooperation gives countries access to larger markets." },
      { q: "Which challenge can affect African cooperation?", choices: ["Political conflicts", "Too many equators", "No countries", "No resources anywhere"], correct: 0, why: "Conflicts between or within states can weaken cooperation." },
      { q: "IGAD is mainly associated with which region?", choices: ["Eastern/Horn of Africa", "South America", "Europe", "Australia"], correct: 0, why: "IGAD groups countries in Eastern Africa and the Horn of Africa." },
      { q: "One aim of the AU is to promote:", choices: ["Peace and development", "Colonial rule", "Slave trade", "Desert expansion only"], correct: 0, why: "The AU aims to promote peace, unity and development." },
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
      intro: "Why this matters: Africa's resources and economic activities shape development. P7 learners compare case studies such as Nigeria, Sudan, Libya, South Africa, DRC and Uganda.",
      study: {
        bigIdea: "Economic development means improving people's standards of living by using resources well. African countries develop through farming, mining, industries, trade, tourism, transport, energy and good management.",
        keyVocabulary: [
          { term: "Economic activity", meaning: "An economic activity is work people do to earn income or produce goods and services." },
          { term: "Natural resources", meaning: "Natural resources are useful things found in nature, such as land, minerals, water, forests and wildlife." },
          { term: "Value addition", meaning: "Value addition is processing a raw material to make it more useful and valuable." },
          { term: "Infrastructure", meaning: "Infrastructure is basic facilities such as roads, railways, electricity, schools and hospitals." },
          { term: "Foreign exchange", meaning: "Foreign exchange is money earned from other countries through exports or tourism." },
          { term: "Industrialisation", meaning: "Industrialisation is development of factories and processing industries." },
        ],
        sections: [
          { title: "Main economic activities", points: ["Agriculture provides food, jobs and exports such as coffee, cotton, tea and cocoa.", "Mining provides minerals such as gold, copper, cobalt, diamonds and petroleum.", "Tourism earns income through wildlife, scenery, culture and historical sites.", "Industries process raw materials and create jobs."] },
          { title: "Country examples", points: ["Nigeria is known for petroleum, farming, trade and a large market.", "South Africa is known for minerals, industries, tourism and advanced infrastructure.", "DRC is rich in minerals and forests but faces challenges in transport, conflict and management.", "Uganda depends on agriculture, tourism, minerals, trade and growing oil development."] },
          { title: "Problems and solutions", points: ["Poor transport, limited electricity, conflict, corruption and low value addition can slow development.", "Solutions include better roads, reliable power, peace, skills training, industrialisation and responsible resource use."] },
        ],
        visual: { kind: "flow", title: "Visual idea: Resource to development flow", description: "Show a simple chain: resource → processing/value addition → jobs → income → better services. Use examples like cotton to cloth or crude oil to fuel products." },
        examTip: "For development questions, do not only list resources. Explain how the resource creates jobs, trade, income or better services.",
      },
      learningObjectives: [
        "Name major economic resources of Africa.",
        "Explain problems faced in using resources.",
        "Describe case studies of economic development in selected countries.",
        "Suggest solutions to challenges affecting development in Africa.",
      ],
      whatYouNeedToKnow: [
        "Major economic resources of Africa include minerals, oil, fertile soils, forests, water, wildlife, fisheries, sunshine, wind and human labour. Resources only support development when they are managed well.",
        "Economic activities include farming, mining, tourism, trade, transport, fishing, pastoralism, irrigation, hydro-electric power generation and industrialisation. These activities create jobs, income, taxes, exports and services when organised properly.",
        "Case studies include Nigeria's oil and farming, Sudan's Gezira Irrigation Scheme and Nile Valley, Libya's oil and irrigation, South Africa's mining and industry, DRC's minerals and forests, and Uganda's farming, tourism, mining, irrigation and pastoralism.",
        "Nigeria is known for oil, farming, trade and transport. Sudan is studied for the Nile Valley, Gezira irrigation and hydro-electric power. Libya is known for oil, desert irrigation, tourism and industrialisation. South Africa is known for mining, farming, industry, trade and tourism. DRC is rich in minerals, forests, water power and wildlife. Uganda is known for farming, tourism, mining, fisheries, irrigation and pastoralism.",
        "Problems affecting resource use include poor transport, limited capital, low technology, political instability, corruption, poor markets, climate problems, land conflicts, low value addition and environmental degradation.",
        "Solutions include good governance, peace, better roads and railways, value addition, skilled labour, environmental care, regional trade, fair markets, investment in energy, and responsible use of resources.",
      ],
      worked: {
        problem: "Why is value addition important for African resources?",
        steps: [
          "Step 1. Raw materials are often sold cheaply.",
          "Step 2. Processing them into finished or semi-finished goods increases their value.",
          "Step 3. This can create jobs and more income.",
        ],
        answer: "Answer: Value addition increases income from resources and creates jobs by processing raw materials before sale.",
      },
      commonMistakes: [
        "Listing resources without explaining their economic use.",
        "Thinking resource wealth automatically means development.",
        "Forgetting environmental care when using resources.",
        "Mixing up country case studies.",
      ],
      tryThis: {
        question: "Which country is well known for oil production in West Africa?",
        choices: ["Nigeria", "Uganda", "Kenya", "Rwanda"],
        correct: 0,
        explanation: "Nigeria is a major oil producer in West Africa.",
      },
      writingTasks: [
        {
          title: "Country case study: Resources and development",
          prompt: "Choose one African country and explain how its resources can support economic development.",
          planningSteps: [
            "Name the country and at least two resources or economic activities.",
            "Explain how the resources create jobs, trade or income.",
            "Mention one problem that can limit development.",
            "Suggest one way to improve resource use responsibly.",
          ],
          checklist: [
            "Country examples are accurate.",
            "Resources are linked to economic activities.",
            "Problems such as poor transport, conflict or low value addition are mentioned.",
            "Responsible development and environmental care are included.",
          ],
          modelOpening: "Nigeria has petroleum, fertile land and a large population. Petroleum can earn foreign exchange, while farming and industries can create jobs when resources are managed well.",
        },
      ],
      recap: [
        "Africa has many natural and human resources.",
        "Economic development depends on how resources are used.",
        "Case studies help compare countries.",
        "Peace, skills, infrastructure and good governance support development.",
      ],
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
            bigIdea: "Economic development means improving people's standard of living by using resources well through farming, mining, industries, trade, tourism, transport and energy.",
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
      }
    
      ,{
        subtopicId: "premium-economic-reasoning",
        title: "Premium Exam Practice: Resources, Trade and Development",
        modules: [
          {
            moduleId: "resource-development-link",
            title: "Linking Resources to Development",
            bigIdea: "Economic questions often ask how a resource helps people earn income or develop a country.",
            learnIt: [
              "Agriculture provides food, raw materials, employment and export earnings.",
              "Mining provides minerals for industry and export, but it can cause pollution and land degradation if poorly managed.",
              "Tourism earns foreign exchange and creates jobs, but it needs peace, transport, hotels and conservation."
            ],
            workedExample: { question: "How can tourism help a country develop?", steps: ["Step 1: Tourists spend money on transport, hotels, food and park fees.", "Step 2: This creates jobs and earns foreign exchange.", "Step 3: The money can support development if well managed."], answer: "Tourism creates jobs and earns foreign exchange." },
            tryThis: { question: "Which activity earns income from visitors seeing wildlife and scenery?", choices: ["Tourism", "Subsistence farming only", "Deforestation", "Smuggling"], correct: 0, explanation: "Tourism earns income from visitors." }
          },
          {
            moduleId: "trade-and-transport-reasoning",
            title: "Trade, Transport and Development",
            bigIdea: "Trade grows when goods can move easily from producers to markets.",
            learnIt: [
              "Good roads, railways, ports and airports help goods reach markets faster and reduce transport costs.",
              "Landlocked countries depend on neighbours' ports and transport corridors to import and export goods.",
              "Trade can be limited by poor roads, insecurity, high taxes, corruption, lack of storage or low production."
            ],
            workedExample: { question: "Why are good roads important for farmers?", steps: ["Step 1: Farmers need to take produce to markets.", "Step 2: Good roads reduce delays and damage to produce.", "Step 3: Farmers can sell more easily and earn income."], answer: "Good roads help farmers transport produce to markets quickly and earn income." },
            tryThis: { question: "A landlocked country mainly needs neighbours for access to:", choices: ["seaports", "deserts", "mountain tops", "rainbows"], correct: 0, explanation: "Landlocked countries have no coastline, so they use neighbours' seaports." }
          }
        ]
      }],
    quiz: [
      { q: "Which is a major economic resource in Nigeria?", choices: ["Oil", "Snowfields", "Polar bears", "Volcanoes only"], correct: 0, why: "Nigeria is well known for oil production." },
      { q: "The Gezira Irrigation Scheme is associated with:", choices: ["Sudan", "South Africa", "Ghana", "Morocco only"], correct: 0, why: "The Gezira Scheme is a major irrigation project in Sudan." },
      { q: "Which country is known for strong mining and industrial development in Southern Africa?", choices: ["South Africa", "Chad", "Somalia", "Rwanda only"], correct: 0, why: "South Africa is known for mining and industrial development." },
      { q: "Which problem can limit economic development?", choices: ["Poor transport", "Good roads", "Skilled labour", "Peace"], correct: 0, why: "Poor transport makes movement of goods and people difficult." },
      { q: "Value addition means:", choices: ["Processing raw materials to increase value", "Wasting resources", "Stopping trade", "Cutting all forests"], correct: 0, why: "Value addition increases the worth of raw materials by processing them." },
      { q: "Which activity is important for Uganda's economy?", choices: ["Farming", "Polar fishing", "Ice mining", "Penguin tourism"], correct: 0, why: "Farming is a major economic activity in Uganda." },
      { q: "Which solution can support development?", choices: ["Good governance", "Corruption", "Civil war", "Destroying roads"], correct: 0, why: "Good governance supports planning, investment and fair use of resources." },
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
      intro: "Why this matters: African countries relate with global organisations such as the United Nations and the Commonwealth. Learners need to know their origin, aims, organs, agencies, functions and challenges.",
      study: {
        bigIdea: "Major world organisations help countries work together on peace, health, education, children, refugees, food, development and human rights.",
        keyVocabulary: [
          { term: "United Nations", meaning: "United Nations are a world organisation formed to promote peace, cooperation and human rights." },
          { term: "Agency", meaning: "An agency is a specialised body that does a particular job." },
          { term: "UNICEF", meaning: "UNICEF means a UN agency that supports children's welfare." },
          { term: "WHO", meaning: "WHO means World Health Organization, a UN agency for health." },
          { term: "UNHCR", meaning: "UNHCR means a UN agency that supports refugees." },
          { term: "Commonwealth", meaning: "The Commonwealth is an association of countries, many of which were formerly under British rule." },
        ],
        sections: [
          { title: "United Nations", points: ["The UN promotes peace, security, cooperation and human rights.", "Its headquarters is in New York.", "The Security Council helps handle threats to peace.", "UN agencies support health, education, refugees, food and children."] },
          { title: "Important agencies", points: ["UNICEF supports children.", "WHO supports health.", "UNHCR supports refugees.", "FAO supports food and agriculture.", "UNESCO supports education, science and culture."] },
          { title: "Other organisations and challenges", points: ["The Commonwealth promotes cooperation among member states.", "World organisations may face limited funds, wars, disasters and disagreements among member countries.", "They help through relief, peacekeeping, advice, education and development programmes."] },
        ],
        visual: { kind: "cards", title: "Visual idea: Organisation-function matching", description: "Use matching cards: UNICEF → children, WHO → health, UNHCR → refugees, FAO → food/agriculture, UNESCO → education/culture." },
        examTip: "For organisation questions, match the organisation to its function. Do not only write the abbreviation.",
      },
      learningObjectives: [
        "Explain the origin, objectives and organs of the United Nations.",
        "Name UN agencies and their functions.",
        "Describe the UN Human Rights Charter in simple terms.",
        "Explain membership, functions and challenges of the Commonwealth of Nations.",
      ],
      whatYouNeedToKnow: [
        "The United Nations (UN) was formed in 1945 after the Second World War to promote peace, security, cooperation, human rights and development among nations. Its headquarters are in New York, USA.",
        "Important organs of the UN include the General Assembly, Security Council, International Court of Justice, Secretariat and Economic and Social Council. The General Assembly gives all member states a voice, while the Security Council has special responsibility for peace and security.",
        "UN agencies include UNICEF for children, WHO for health, FAO for food and agriculture, UNESCO for education, science and culture, UNHCR for refugees and WFP for food assistance. Learners should match each agency to its work, not memorise abbreviations only.",
        "Human rights are basic freedoms and protections every person should enjoy, such as the right to life, education, health, fair treatment, worship, expression and freedom from discrimination. Rights go together with responsibilities.",
        "The Commonwealth is an association of countries, many of which were formerly linked to Britain. It promotes cooperation, democracy, education, trade, sports, scholarships and shared values.",
        "Challenges faced by international organisations include limited funds, conflicts, powerful countries' interests, slow decision-making, veto power disagreements, refugee crises, climate disasters and failure by members to respect agreements.",
      ],
      worked: {
        problem: "Match two UN agencies with their work: UNICEF and WHO.",
        steps: [
          "Step 1. UNICEF focuses on children and their welfare.",
          "Step 2. WHO focuses on health and disease control.",
          "Step 3. Write the matches clearly.",
        ],
        answer: "Answer: UNICEF supports children; WHO promotes health and fights diseases.",
      },
      commonMistakes: [
        "Confusing UN organs and UN agencies.",
        "Thinking the Commonwealth and United Nations are the same organisation.",
        "Forgetting that the UN was formed after World War II.",
        "Writing agency abbreviations without knowing their work.",
      ],
      tryThis: {
        question: "Which UN agency is mainly concerned with health?",
        choices: ["WHO", "UNICEF", "FAO", "UNESCO"],
        correct: 0,
        explanation: "WHO stands for World Health Organization and focuses on health.",
      },
      writingTasks: [
        {
          title: "Organisation matching task",
          prompt: "Choose one major world organisation and explain its work in Africa.",
          planningSteps: [
            "Name the organisation, such as UN, AU, Commonwealth or an agency like WHO/UNICEF.",
            "State its main purpose.",
            "Give two examples of how it helps people or countries.",
            "Mention one challenge the organisation may face.",
          ],
          checklist: [
            "The organisation and its purpose are correct.",
            "Examples match the organisation's work.",
            "Challenges are realistic.",
            "The answer connects rights, peace, health, education or cooperation where relevant.",
          ],
          modelOpening: "The United Nations promotes peace, cooperation and human rights. In Africa, its agencies may support refugees, health, education and emergency relief.",
        },
      ],
      recap: [
        "The UN was formed in 1945 to promote peace and cooperation.",
        "UN agencies handle children, health, food, education, refugees and other needs.",
        "The Commonwealth links member countries for cooperation.",
        "World organisations face funding, conflict and decision-making challenges.",
      ],
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
      }
    
      ,{
        subtopicId: "premium-organisation-casework",
        title: "Premium Exam Practice: Organisation Case Questions",
        modules: [
          {
            moduleId: "agency-function-matching",
            title: "Matching Organisations to Their Work",
            bigIdea: "Organisation questions are easiest when learners match each body to its real function.",
            learnIt: [
              "UNICEF supports children. WHO supports health. UNHCR supports refugees. FAO supports food and agriculture. UNESCO supports education, science and culture.",
              "The Security Council is an organ of the UN, not a specialised agency. It focuses on peace and security.",
              "The Commonwealth is not the same as the United Nations. It is an association of member countries with shared historical links and values."
            ],
            workedExample: { question: "A refugee camp needs international support. Which UN agency is most directly concerned?", steps: ["Step 1: Identify the key word: refugee.", "Step 2: UNHCR supports refugees.", "Step 3: Match the need to the agency."], answer: "UNHCR is most directly concerned." },
            tryThis: { question: "Which agency focuses mainly on health?", choices: ["WHO", "UNICEF", "FAO", "UNHCR"], correct: 0, explanation: "WHO is the World Health Organization." }
          },
          {
            moduleId: "organisation-challenges-casework",
            title: "Explaining Challenges Faced by World Organisations",
            bigIdea: "A good answer gives a realistic challenge and explains how it affects the organisation's work.",
            learnIt: [
              "Limited funds can stop organisations from reaching all people who need help.",
              "Wars and insecurity can make it dangerous to deliver food, medicine or education support.",
              "Political disagreements between member countries can delay decisions and reduce cooperation."
            ],
            workedExample: { question: "How can war affect the work of UN agencies?", steps: ["Step 1: War creates danger for workers and civilians.", "Step 2: Roads, hospitals and schools may be destroyed.", "Step 3: It becomes difficult to deliver food, medicine and shelter."], answer: "War can make it dangerous and difficult for UN agencies to deliver help to people in need." },
            tryThis: { question: "Which is a real challenge faced by world organisations?", choices: ["Limited funds", "Too many equators", "No countries exist", "All problems ended"], correct: 0, explanation: "Limited funds can reduce their ability to serve people." }
          }
        ]
      }],
    quiz: [
      { q: "The United Nations was formed in:", choices: ["1945", "1963", "2002", "1884"], correct: 0, why: "The UN was formed in 1945 after World War II." },
      { q: "Which UN agency focuses mainly on children?", choices: ["UNICEF", "WHO", "FAO", "WFP"], correct: 0, why: "UNICEF supports children's welfare and rights." },
      { q: "Which UN agency focuses on health?", choices: ["WHO", "UNESCO", "UNHCR", "FAO"], correct: 0, why: "WHO is the World Health Organization." },
      { q: "Which organ of the UN helps maintain international peace and security?", choices: ["Security Council", "Sports Council", "School Council", "Vegetation Council"], correct: 0, why: "The Security Council has a major role in international peace and security." },
      { q: "The Commonwealth is mainly an association of:", choices: ["Member countries cooperating together", "Only rivers", "Only deserts", "Only mountains"], correct: 0, why: "The Commonwealth is an association of member countries." },
      { q: "Which is a human right?", choices: ["Right to education", "Right to steal", "Right to pollute", "Right to violence"], correct: 0, why: "Education is recognised as a basic human right." },
      { q: "Which challenge can affect the UN?", choices: ["Limited funds", "Too many equators", "No countries in the world", "No need for peace"], correct: 0, why: "Limited funds can make it hard for the UN to carry out its work." },
    ],
  },
];

export const SOCIAL_TOPICS: Topic[] = balanceTopicAnswers(applyP7SocialHeavyV4(addUpperPrimarySocialV4(SOCIAL_TOPICS_DATA, "P7", P7_SOCIAL_TERMS)));

export function getSocialTopic(id: string): Topic | undefined {
  return SOCIAL_TOPICS.find((topic) => topic.id === id);
}
