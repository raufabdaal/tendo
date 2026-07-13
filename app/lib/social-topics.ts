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
        title: "Mountains and highlands of Africa",
        modules: [
          {
            moduleId: "types-of-mountains",
            imageUrl: "/images/social-studies/block-and-fold-mountains.png",
            imageCaption: "Formation of block horst mountains (e.g. Mt. Rwenzori) vs volcanic peaks (e.g. Mt. Kilimanjaro).",
            title: "Types of Mountains: Volcanic, Block, and Fold",
            bigIdea: "Mountains form in three ways — volcanic eruption, fault-block uplift, and rock folding. Each type has distinct features and African examples.",
            learnIt: [
              "**Mountain**: Is a high, steep raised part of the earth's surface, usually over 600 metres above surrounding land.",
              "**Volcanic Mountains**: Are formed when molten rock (magma) erupts onto the surface through a vent, cools, and piles up over thousands of years into a cone shape. Examples: Mount Kilimanjaro (Tanzania — highest in Africa at 5,895m), Mount Kenya (Kenya), Mount Cameroon (Cameroon), Mount Elgon (Uganda/Kenya border).",
              "**Block Mountains (Horsts)**: Are formed when blocks of the earth's crust are pushed up along parallel fault lines by compressional or tensional forces. The uplifted block forms a flat-topped mountain with steep sides. Examples: Rwenzori Mountains (Uganda/DRC — also called 'Mountains of the Moon'), Usambara Mountains (Tanzania).",
              "**Fold Mountains**: Are formed when layers of sedimentary rock are squeezed from both sides by compressional forces, causing them to buckle and fold like a wrinkled cloth. Examples: Atlas Mountains (Morocco, Algeria, Tunisia — extends over 2,000 km), Cape Ranges (South Africa).",
              "**UNEB trap:** Do not confuse Mount Kilimanjaro (volcanic) with the Rwenzori (block). Kilimanjaro is a cone; Rwenzori is a block with a flat top."
            ],
            visual: {
              kind: "diagram",
              title: "Three ways mountains form",
              description: "Show three cross-section diagrams: Volcanic (cone with magma rising), Block/Fault (block pushed up between faults), Fold (wavy folded rock layers)."
            },
            tryThis: {
              question: "Which type of mountain is Mount Kilimanjaro?",
              choices: ["Volcanic mountain", "Block mountain", "Fold mountain", "Plateau mountain"],
              correct: 0,
              explanation: "Kilimanjaro formed when magma erupted and piled up into a volcanic cone — it is Africa's highest volcanic peak."
            }
          },
          {
            moduleId: "major-mountains-and-highlands",
            title: "Major Mountains and Highlands of Africa",
            bigIdea: "Every region of Africa contains distinct mountains or highlands. You must know their locations, countries, and economic importance for UNEB.",
            learnIt: [
              "**Atlas Mountains**: Are fold mountains in North Africa, running through Morocco, Algeria, and Tunisia. They are the longest mountain range in Africa (over 2,000 km). They receive winter snow despite being in a hot region.",
              "**Ethiopian Highlands**: Are volcanic highlands in the Horn of Africa covering Ethiopia and Eritrea. They are the largest continuous area of high altitude in Africa, often called the 'Roof of Africa'. Ras Dashen (4,550m) is the highest peak.",
              "**Drakensberg Mountains**: Are in Southern Africa, mainly in South Africa and Lesotho. They have flat tops and steep sides (escarpment). Important for tourism and water catchment.",
              "**Cameroon Highlands**: Are volcanic highlands in Cameroon, West-Central Africa. Mount Cameroon is an active volcano that last erupted in 2000.",
              "**Jos Plateau**: Is a highland in central Nigeria, West Africa. Rich in tin and columbite minerals. Cooler climate supports potato and vegetable farming.",
              "**Ahaggar (Hoggar) Mountains**: Are volcanic highlands in southern Algeria, in the Sahara Desert. Mount Tahat (2,918m) is the highest peak.",
              "**Tibesti Mountains**: Are volcanic highlands in northern Chad, in the Sahara Desert. Emi Koussi (3,445m) is the highest peak in the Sahara."
            ],
            visual: {
              kind: "map",
              title: "Mountains and highlands of Africa",
              description: "Show Africa with labels for: Atlas (North), Ethiopian Highlands (Horn), Drakensberg (South), Cameroon Highlands (Central West), Jos Plateau (Nigeria), Ahaggar (Algeria), Tibesti (Chad)."
            },
            tryThis: {
              question: "The Atlas Mountains are found in which part of Africa?",
              choices: ["North Africa", "West Africa", "Southern Africa", "Central Africa"],
              correct: 0,
              explanation: "The Atlas Mountains run through Morocco, Algeria and Tunisia in North Africa."
            }
          },
          {
            moduleId: "importance-of-mountains",
            title: "Importance and Challenges of Mountains",
            bigIdea: "Mountains provide water, minerals, tourism, and cool climates for farming, but steep slopes and erosion create serious challenges.",
            learnIt: [
              "**Importance of mountains in Africa:**",
              "1. Source of rivers — Mountains receive heavy rainfall (orographic/relief rainfall), feeding major rivers like the Nile (from Ethiopian Highlands) and Niger.",
              "2. Tourism — Mountains like Kilimanjaro, Rwenzori, and Drakensberg attract climbers and tourists, earning foreign exchange.",
              "3. Minerals — Mountains contain valuable minerals (e.g., copper in the Rwenzori foothills at Kilembe, tin on the Jos Plateau).",
              "4. Cool climate for farming — Highland areas grow tea (Kericho, Kenya), coffee (Ethiopian Highlands), pyrethrum, and potatoes.",
              "5. Forest resources — Mountain forests provide timber, medicine, and wildlife habitats.",
              "**Challenges of mountains:**",
              "1. Steep slopes make road and railway construction difficult and expensive.",
              "2. Soil erosion is severe on deforested mountain slopes.",
              "3. Landslides can destroy homes and block transport routes.",
              "4. Some mountains have volcanic hazards (e.g., Mount Cameroon eruptions)."
            ],
            workedExample: {
              question: "Give three ways mountains are important to people in Africa.",
              steps: [
                "Step 1: Mountains receive heavy rainfall and are sources of major rivers.",
                "Step 2: Mountains attract tourists, earning foreign exchange.",
                "Step 3: Mountains have cool climates suitable for crops like tea, coffee, and pyrethrum."
              ],
              answer: "Mountains are sources of rivers, attract tourists for foreign exchange, and have cool climates for crops like tea and coffee."
            },
            examTip: "When asked about a physical feature, always give both benefits AND challenges. Use the phrase 'source of rivers' — it is a common UNEB answer."
          },
          {
            moduleId: "mountains-exam-summary",
            title: "Exam Summary: Mountains — High-Yield UNEB Points",
            bigIdea: "These are the most commonly tested UNEB facts about African mountains and highlands.",
            learnIt: [
              "1. Mount Kilimanjaro (5,895m) in Tanzania is the HIGHEST mountain in Africa — it is a VOLCANIC mountain.",
              "2. The Rwenzori Mountains are BLOCK mountains (horsts) on the Uganda-DRC border — also called 'Mountains of the Moon'.",
              "3. The Atlas Mountains are FOLD mountains in Morocco, Algeria, and Tunisia — the longest range in Africa.",
              "4. Ethiopian Highlands are the largest continuous high-altitude area in Africa — source of the Blue Nile.",
              "5. Drakensberg Mountains are in South Africa and Lesotho — important for tourism and water catchment.",
              "6. Jos Plateau in Nigeria is rich in tin and columbite minerals.",
              "7. Mountains receive orographic/relief rainfall because moist air rises and cools on the windward side.",
              "8. Leeward slopes of mountains are drier — this is called the RAIN SHADOW effect. (UNEB trap: do not confuse windward and leeward.)",
              "9. Volcanic mountains form from cooled lava; block mountains form from faulted crust pushed up; fold mountains form from compressed rock layers.",
              "10. Mount Cameroon is an active volcano — it last erupted in 2000.",
              "11. The Ahaggar and Tibesti mountains are found IN the Sahara Desert.",
              "12. Mount Kenya (5,199m) is the second-highest mountain in Africa — also volcanic."
            ],
            tryThis: {
              question: "The Rwenzori Mountains on the Uganda-DRC border are classified as:",
              choices: ["Block (horst) mountains", "Volcanic mountains", "Fold mountains", "Plateau mountains"],
              correct: 0,
              explanation: "The Rwenzori are block mountains formed when the crust was pushed up along parallel faults."
            }
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
            bigIdea: "Africa's lakes form in three ways: basin lakes from downwarping, rift valley lakes from faulting, and crater lakes from volcanic activity.",
            learnIt: [
              "**Classification: Types of Lakes in Africa**",
              "**Rift Valley Lakes:** Formed when a block of land sinks between parallel faults, creating a long, narrow, deep depression. They are elongated and steep-sided. Examples: Lake Tanganyika (deepest in Africa), Lake Malawi, Lake Albert, Lake Edward, Lake Turkana.",
              "**Basin Lakes / Downwarped Lakes:** Formed when a large area of land sags or warps downward slowly over time. They are wide and fairly shallow compared to rift lakes. Examples: Lake Victoria (Africa's largest lake by surface area, shared by Uganda, Kenya and Tanzania), Lake Kyoga (Uganda), Lake Chad (Central Africa).",
              "**Volcanic Crater Lakes:** Formed when water fills the crater of an extinct or dormant volcano. They are usually small, deep and circular. Examples: Lake Katwe (Uganda), Lake Bunyonyi (Uganda), Lake Nyos (Cameroon).",
              "**Importance of Lakes in Africa:**",
              "1. Fishing — Lakes provide fish for food and trade (e.g., Nile Perch from Lake Victoria).",
              "2. Transport — Large lakes connect communities and countries by boat.",
              "3. Water supply — Lakes provide water for irrigation and domestic use.",
              "4. Tourism — Lakes attract tourists and generate foreign exchange.",
              "5. Hydro-electric power — Outflowing rivers from lakes can generate HEP (e.g., Owen Falls Dam on the River Nile at Lake Victoria's outlet).",
            ],
            visual: {
              kind: "diagram",
              title: "Types of African lakes",
              description: "Show three simple cross-section diagrams: Rift valley lake (narrow, deep, between faults), Basin/downwarped lake (wide, shallow saucer shape), and Volcanic crater lake (small round lake in volcano top)."
            },
            workedExample: {
              question: "Name Lake Victoria and classify it by its method of formation.",
              steps: [
                "Step 1: Identify Lake Victoria as Africa's largest lake by surface area.",
                "Step 2: Explain that it formed by downwarping — the land sagged downwards over time.",
                "Step 3: Classify Lake Victoria as a basin lake / downwarped lake.",
                "Step 4: Note it is shared by Uganda, Kenya and Tanzania."
              ],
              answer: "Lake Victoria is a basin lake formed by downwarping of the earth's crust. It is shared by Uganda, Kenya and Tanzania."
            },
            tryThis: {
              question: "Which lake was formed by volcanic activity filling a crater with water?",
              choices: ["Lake Tanganyika", "Lake Katwe", "Lake Victoria", "Lake Chad"],
              correct: 1,
              explanation: "Lake Katwe is a volcanic crater lake in Uganda. It formed when water filled an extinct volcano crater."
            }
          },
          {
            moduleId: "lakes-comparison-importance",
            title: "Comparing lakes and their economic importance",
            bigIdea: "Different types of lakes serve different economic and social purposes.",
            learnIt: [
              "**Basin lakes** like Lake Victoria and Lake Kyoga are important for large-scale fishing and water transport because of their wide surface area.",
              "**Rift valley lakes** like Lake Tanganyika and Lake Malawi are important for unique fish species and biodiversity.",
              "**Volcanic crater lakes** like Lake Katwe are important for salt mining (Lake Katwe) and tourism (Lake Bunyonyi).",
              "Lake Chad has been shrinking due to climate change and overuse of water — this is a key UNEB exam point about environmental change.",
              "Lakes face problems: water pollution, overfishing, water weeds (e.g., water hyacinth on Lake Victoria), and shrinking due to climate change."
            ],
            workedExample: {
              question: "Give two reasons why Lake Victoria is described as a basin lake.",
              steps: [
                "Step 1: Basin lakes form when the earth's crust sags or warps downward without sharp fault lines.",
                "Step 2: Lake Victoria's wide, saucer-like shape is characteristic of downwarping formation.",
                "Step 3: Unlike Lake Tanganyika, Lake Victoria is relatively shallow for its size."
              ],
              answer: "Lake Victoria is a basin lake because it formed by downwarping (crustal sagging), and its wide, shallow saucer shape is typical of basin lake formation."
            },
            tryThis: {
              question: "Which of these is a rift valley lake?",
              choices: ["Lake Victoria", "Lake Tanganyika", "Lake Kyoga", "Lake Chad"],
              correct: 1,
              explanation: "Lake Tanganyika is a deep, narrow lake formed in the Great Rift Valley by faulting."
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
        title: "Forces and processes that form physical features",
        modules: [
          {
            moduleId: "faulting-and-rift-valley",
            imageUrl: "/images/social-studies/great-rift-valley-formation.png",
            imageCaption: "Formation of the East African Rift Valley by tensional faulting.",
            title: "Faulting and the Rift Valley",
            bigIdea: "Faulting is the cracking and displacement of the earth's crust along lines of weakness. It produces rift valleys, block mountains, and escarpments.",
            learnIt: [
              "**Faulting**: Is the process where rocks of the earth's crust crack and move along lines of weakness called faults due to tensional (pulling apart) or compressional (pushing together) forces.",
              "**Rift Valley**: Is a long, narrow depression formed when a block of land sinks between two parallel fault lines while the land on both sides remains higher. The Great Rift Valley is the world's longest rift, stretching from the Red Sea through East Africa to Mozambique.",
              "**Eastern Rift Valley branch**: Runs through Ethiopia, Kenya, and Tanzania. Contains lakes like Turkana, Natron, and Manyara. Features volcanoes like Kilimanjaro and Mount Kenya.",
              "**Western Rift Valley branch**: Runs through Uganda, Rwanda, Burundi, and DRC. Contains the deepest African lakes — Tanganyika (1,470m deep), Albert, Edward, and Kivu. Features the Rwenzori block mountains.",
              "**Block Mountains (Horsts)**: Are raised blocks of land between two faults. The Rwenzori Mountains on the Uganda-DRC border are the best African example — they reach 5,109m at Margherita Peak.",
              "**UNEB trap**: The rift valley formed by TENSIONAL forces (pulling apart), NOT compressional forces. This is a common exam error."
            ],
            visual: {
              kind: "diagram",
              title: "Faulting and rift valley formation",
              description: "Show cross-section: tensional forces pulling crust apart → two parallel faults form → middle block sinks → rift valley with steep walls."
            },
            tryThis: {
              question: "Which geological force mainly formed the Great Rift Valley?",
              choices: ["Tensional forces (pulling apart)", "Compressional forces (pushing)", "Volcanic eruption", "Wind erosion"],
              correct: 0,
              explanation: "The rift valley formed when tensional forces pulled the earth's crust apart along parallel fault lines."
            }
          },
          {
            moduleId: "volcanicity-and-features",
            title: "Volcanicity and Volcanic Features",
            bigIdea: "Volcanicity is the process where molten rock (magma) from the earth's mantle rises to the surface, forming volcanic mountains, lava plateaus, crater lakes, and hot springs.",
            learnIt: [
              "**Volcanicity**: Is the process where magma (molten rock) from deep inside the earth rises through cracks and vents to the surface. When it reaches the surface, it is called lava.",
              "**Volcanic Mountains**: Are cone-shaped mountains built from layers of cooled lava and ash that erupted from a central vent. Examples: Mount Kilimanjaro (5,895m — highest in Africa), Mount Kenya (5,199m), Mount Elgon (4,321m), Mount Cameroon (active — last erupted 2000).",
              "**Lava Plateau**: Is a wide, flat elevated area formed when runny lava flows out through long cracks (fissures) and spreads over a large area before cooling. Example: Ethiopian Highlands — the largest continuous volcanic plateau in Africa.",
              "**Volcanic Crater Lakes**: Are small, round, deep lakes that form when water fills the crater (caldera) of an extinct volcano. Examples: Lake Katwe (Uganda — famous for salt mining), Lake Bunyonyi (Uganda — second deepest lake in Africa), Lake Nyos (Cameroon).",
              "**Hot Springs and Geysers**: Are places where underground water is heated by volcanic rocks and bubbles to the surface. Found in volcanic areas like parts of western Uganda and the Rift Valley."
            ],
            tryThis: {
              question: "Lake Katwe in Uganda is an example of a:",
              choices: ["Volcanic crater lake", "Rift valley lake", "Basin lake", "Man-made lake"],
              correct: 0,
              explanation: "Lake Katwe is a crater lake formed when water filled an extinct volcano — famous for salt mining."
            }
          },
          {
            moduleId: "folding-and-downwarping",
            title: "Folding, Down-warping, and Other Formation Processes",
            bigIdea: "Besides faulting and volcanicity, Africa's features also formed through folding (compressed rock layers), down-warping (crustal sagging), and deposition.",
            learnIt: [
              "**Folding**: Is the process where layers of sedimentary rock are squeezed from both sides by compressional forces, causing them to bend, buckle, and form wave-like folds. The upward folds are called anticlines; the downward folds are called synclines. Example: Atlas Mountains (Morocco, Algeria, Tunisia) — formed by the collision of African and Eurasian tectonic plates.",
              "**Down-warping (Crustal Sagging)**: Is the slow, gentle sinking of a large area of the earth's crust without sharp faulting. It creates wide, shallow depressions that fill with water to form basin lakes. Examples: Lake Victoria basin, Lake Kyoga basin, Lake Chad basin.",
              "**Lake Victoria**: Is a basin/downwarped lake, the LARGEST lake in Africa by surface area (69,484 km²) and the largest tropical lake in the world. Shared by Uganda, Kenya, and Tanzania. Formed when the land between the two branches of the rift valley slowly sagged downward.",
              "**Deposition**: Is the process where rivers, wind, or waves drop the materials they were carrying. Coastal plains form when rivers deposit sediment at their mouths, or when sea levels drop exposing flat land. Africa has coastal plains in the West (Gulf of Guinea), North (Mediterranean coast), and South (Cape coast).",
              "**Erosion**: Is the wearing away of the earth's surface by water, wind, or ice. River erosion creates V-shaped valleys in youthful stages and wide valleys in mature stages."
            ],
            workedExample: {
              question: "Explain how Lake Victoria was formed.",
              steps: [
                "Step 1: Identify the formation process: down-warping (crustal sagging).",
                "Step 2: The land between the Eastern and Western Rift Valleys sagged downward slowly.",
                "Step 3: The depression filled with water from rivers and rainfall to form a wide, shallow lake.",
                "Step 4: Lake Victoria is shared by Uganda (45%), Tanzania (49%), and Kenya (6%)."
              ],
              answer: "Lake Victoria formed by down-warping—the crust sagged between the two rift valley branches, creating a wide shallow basin that filled with water."
            },
            tryThis: {
              question: "Lake Victoria was formed mainly by:",
              choices: ["Down-warping (crustal sagging)", "Faulting", "Volcanic eruption", "River deposition"],
              correct: 0,
              explanation: "Lake Victoria is a basin lake formed when the crust sagged down slowly between the two branches of the Rift Valley."
            }
          },
          {
            moduleId: "forces-exam-summary",
            title: "Exam Summary: Formation Processes — High-Yield UNEB Points",
            bigIdea: "These are the most commonly tested facts about how Africa's physical features formed.",
            learnIt: [
              "1. Faulting = cracking of the crust along faults due to tensional or compressional forces.",
              "2. The Great Rift Valley formed by TENSIONAL forces — pulling apart, not pushing.",
              "3. The Eastern Rift has volcanoes (Kilimanjaro, Kenya); the Western Rift has deep lakes (Tanganyika, Albert).",
              "4. Lake Tanganyika (1,470m) is the DEEPEST lake in Africa — it is a RIFT VALLEY lake.",
              "5. Volcanicity = magma rising from the mantle to the surface through vents and cracks.",
              "6. Lake Katwe is a volcanic CRATER lake — important for SALT MINING in Uganda.",
              "7. Folding = rock layers squeezed from both sides into waves (anticlines and synclines).",
              "8. The Atlas Mountains are FOLD mountains. The Cape Ranges are also fold mountains.",
              "9. Down-warping = slow sagging of the crust forming wide, shallow basins.",
              "10. Lake Victoria is a DOWNWARPED/ BASIN lake — Africa's LARGEST lake by area.",
              "11. Rwanda is called 'the Land of a Thousand Hills' due to intensive volcanic and erosional activity.",
              "12. Deposition = rivers/wind dropping materials — forms coastal plains and deltas.",
              "13. Coastal plains in Africa are found in the West (Gulf of Guinea), North, and South."
            ],
            tryThis: {
              question: "Which lake is the deepest in Africa?",
              choices: ["Lake Victoria", "Lake Tanganyika", "Lake Malawi", "Lake Chad"],
              correct: 1,
              explanation: "Lake Tanganyika (1,470m) is the deepest lake in Africa and the second deepest in the world — it is a rift valley lake."
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
              "Rain Gauge: Measures the amount of rainfall in millimetres (mm). It is a metal cylinder with a funnel and measuring jar placed in an open area away from trees and buildings.\nThermometer (Six's Thermometer): Measures maximum and minimum daily temperatures in degrees Celsius. Contains mercury and alcohol in a U-shaped tube with metal indices.\nBarometer: Measures atmospheric air pressure in millibars (mb). High pressure = dry weather; low pressure = wet/stormy weather.\nAnemometer: Measures WIND SPEED in kilometres per hour. Has three or four hemispherical cups that rotate faster in stronger wind.\nWind Vane: Shows WIND DIRECTION (where the wind is coming from). A free-swinging arrow points into the wind. UNEB trap: Anemometer = speed; Wind Vane = direction.\nWindsock: Shows both wind DIRECTION and wind STRENGTH. A fabric cone on a pole — commonly seen at airports.\nHygrometer: Measures relative humidity (%) — the amount of water vapour in the air.\nSunshine Recorder (Campbell-Stokes): Measures the duration of bright sunshine in hours per day using a glass sphere that focuses sunlight to burn a trace on a card.\nCeilometer: Measures cloud ceiling height and cloud thickness at weather stations and airports.\nStevenson Screen: A WHITE wooden box with louvered (slatted) sides mounted 1.2 metres above ground on metal legs. Shelters thermometers and hygrometers from direct sunlight, rain, and wind while allowing free air circulation. It is painted WHITE to reflect heat.",
              ,
              ,
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
          },
          {
            moduleId: "semi-desert-climate",
            title: "Semi-desert and Desert Climates in Detail",
            bigIdea: "Desert and semi-desert climates cover about 40% of Africa. The Sahara is the largest hot desert, the Namib and Kalahari are southern Africa's major deserts.",
            learnIt: [
              "Sahara Desert: The world's LARGEST hot desert — 9.2 million km² across 11 North African countries (Algeria, Chad, Egypt, Libya, Mali, Mauritania, Morocco, Niger, Sudan, Tunisia, Western Sahara). Receives less than 250mm/year of rainfall. Contains ergs (sand seas), hamadas (rock plateaus), and oases.",
              "Kalahari Desert: A semi-desert in Southern Africa covering Botswana, Namibia, and South Africa. Receives 125-250mm of rainfall annually — enough for some grass and drought-resistant shrubs. Home to the San (Bushmen) people.",
              "Namib Desert: A coastal desert along Namibia's Atlantic coast — one of the OLDEST deserts in the world (~55-80 million years). Formed by the cold Benguela Current. Famous for massive sand dunes over 300m high. Receives less than 10mm/year of rainfall in some areas.",
              "Oasis: A fertile spot in a desert where underground water reaches the surface, allowing trees (date palms) and crops to grow. Examples: Siwa Oasis (Egypt), Tafilalt Oasis (Morocco).",
              "Desertification: The process where fertile land becomes desert, caused by deforestation, overgrazing, drought, and poor farming methods. The Sahel region (south of the Sahara) is severely affected."
            ],
            tryThis: {
              question: "Which cold ocean current causes the Namib Desert along Namibia's coast?",
              choices: ["Benguela Current", "Agulhas Current", "Mozambique Current", "Canary Current"],
              correct: 0,
              explanation: "The cold Benguela Current cools the coastal air, preventing rainfall and creating the Namib Desert."
            }
          }
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
              "Ocean currents: Warm ocean currents heat the air — warm moist air rises and brings heavy rainfall to coasts. Cold ocean currents cool the air — cold air holds little moisture, creating dry coastal deserts.\nWarm currents near Africa: Mozambique Current (Indian Ocean — rain to Mozambique/Tanzania coasts); Agulhas Current (Indian Ocean — off South Africa's east coast).\nCold currents near Africa: Benguela Current (Atlantic Ocean — off Namibia — creates the Namib Desert, ~800 km long); Canary Current (Atlantic Ocean — off Northwest Africa — creates Sahara's coastal dryness).\nUNEB trap: Warm current brings MOISTURE and RAIN. Cold current brings DRY air and coastal DESERTS.",
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
        title: "Exam Summary: Climate of Africa — High-Yield UNEB Points",
        modules: [
          {
            moduleId: "climate-exam-summary",
            title: "17 Must-Know UNEB Facts about Africa's Climate",
            bigIdea: "These are the most commonly tested climate facts in PLE Social Studies. Master every one.",
            learnIt: [
              "1. CLIMATE = average weather over a long period (30+ years). WEATHER = day-to-day atmospheric conditions.",
              "2. Africa has SIX main climatic zones: Equatorial, Tropical (Savanna), Desert, Semi-desert, Mediterranean, and Temperate.",
              "3. The Equator crosses Africa — countries on it (Uganda, Kenya, DRC, Gabon, Congo) have Equatorial or Tropical climates.",
              "4. Temperature decreases by about 1°C for every 150-160 metres rise in ALTITUDE — why mountain tops are cold.",
              "5. The Sahara Desert is the world's LARGEST hot desert — covers 11 North African countries.",
              "6. The Namib Desert is a COASTAL desert formed by the cold BENGUELA Current — one of the driest places on Earth.",
              "7. The Kalahari is a SEMI-DESERT — it receives some rainfall and supports grass, unlike true deserts.",
              "8. Orographic/Relief rainfall: moist wind rises over a mountain → windward side is WET, leeward side is DRY (rain shadow).",
              "9. Lake Victoria basin receives heavy rainfall because of EVAPORATION from the lake surface.",
              "10. Mediterranean climate = hot DRY summers + mild WET winters — Morocco, Algeria, Tunisia, Libya, South Africa's Cape.",
              "11. Warm ocean currents (Mozambique, Agulhas) bring RAIN. Cold currents (Benguela, Canary) create DRY coastal DESERTS.",
              "12. The SAHEL region south of Sahara is affected by DESERTIFICATION — overgrazing, deforestation, drought.",
              "13. Anemometer = wind SPEED. Wind Vane = wind DIRECTION. Hygrometer = humidity. Barometer = air pressure. Do NOT confuse!",
              "14. Stevenson Screen is painted WHITE to reflect sunlight — protects instruments from direct sun, rain, and wind.",
              "15. Moist winds from oceans bring RAIN; dry winds from deserts (Harmattan from Sahara) bring DRY dusty conditions.",
              "16. Deforestation reduces transpiration, which can reduce local rainfall — a key UNEB cause-and-effect question.",
              "17. Coastal areas have moderate temperatures; inland areas have extreme temperatures (hot days, cold nights)."
            ],
            tryThis: {
              question: "Which climatic zone is found along the Mediterranean coast of North Africa?",
              choices: ["Equatorial", "Mediterranean", "Tropical", "Desert"],
              correct: 1,
              explanation: "Mediterranean climate (hot dry summers, mild wet winters) is found along the coast of Morocco, Algeria, Tunisia, and Libya."
            }
          }
        ]
      },
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
        title: "Exam Summary: Vegetation of Africa — High-Yield UNEB Points",
        modules: [
          {
            moduleId: "vegetation-exam-summary",
            title: "14 Must-Know UNEB Facts about Vegetation",
            bigIdea: "These are the most commonly tested vegetation facts in PLE Social Studies.",
            learnIt: [
              "1. VEGETATION = the natural plant cover of an area — includes trees, shrubs, grasses, and other plants.",
              "2. RAINFALL is the most important factor determining vegetation type — more rain = thicker vegetation.",
              "3. Equatorial Rainforests: Found in DRC, Gabon, Congo Basin. Hot and wet all year. Trees are tall with dense canopies. Mahogany, ebony, and rosewood are common hardwoods.",
              "4. Savanna Grasslands: The LARGEST vegetation zone in Africa. Grass with scattered trees (acacia, baobab). Has wet and dry seasons. Supports wildlife like lions, elephants, giraffes.",
              "5. Desert Vegetation: Very sparse plants adapted to dry conditions — thorny bushes, cacti, short grasses. Found in Sahara, Namib, Kalahari.",
              "6. Mediterranean Vegetation: Shrubs and small trees adapted to hot dry summers and cool wet winters. Found in North Africa (Morocco, Algeria, Tunisia) and South Africa’s Cape. Includes maquis and garrigue scrub.",
              "7. Mountain Vegetation: Changes with altitude from forest at the bottom to bamboo, heather, and grassland near the top. Found on Kilimanjaro, Rwenzori, Ethiopian Highlands.",
              "8. Mangrove Forests: Grow in salty coastal swamps where fresh and salt water mix. Found along the coasts of West Africa (Nigeria, Ghana) and East Africa (Kenya, Tanzania, Mozambique).",
              "9. DEFORESTATION = cutting down trees without replanting. Causes: charcoal burning, farming expansion, logging, settlement. Effects: soil erosion, reduced rainfall, loss of wildlife habitats.",
              "10. AFFORESTATION = planting trees where none existed before. REFORESTATION = replanting trees where forests were cut. Both help restore vegetation cover.",
              "11. Game parks protect vegetation AND wildlife. Examples: Murchison Falls (Uganda), Serengeti (Tanzania), Kruger (South Africa), Maasai Mara (Kenya).",
              "12. Vegetation provides: timber, medicine, food (fruits, nuts), pasture for livestock, habitats for wildlife, and rainfall support through transpiration.",
              "13. The Sahel region (south of Sahara) suffers from desertification — overgrazing and deforestation turn grassland into desert.",
              "14. Savanna animals are adapted to seasonal vegetation: grazers (zebras, wildebeest) migrate following rain and fresh grass."
            ],
            tryThis: {
              question: "Which vegetation zone is the largest in Africa?",
              choices: ["Equatorial rainforest", "Savanna grassland", "Desert vegetation", "Mediterranean scrub"],
              correct: 1,
              explanation: "Savanna grasslands cover the largest area of Africa’s vegetation zones."
            }
          }
        ]
      },
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
        title: "Types of vegetation in Africa",
        modules: [
          {
            moduleId: "forest-vegetation",
            imageUrl: "/images/social-studies/africa-vegetation-belts.png",
            imageCaption: "Comparison of dense tropical rainforest vs open savanna woodland.",
            title: "Forest vegetation of Africa",
            bigIdea: "Forest vegetation includes equatorial rainforests, mangrove forests, and montane forests.",
            learnIt: [
              "Equatorial forests: Thick, evergreen forests in hot, wet areas near the Equator. DRC, Gabon, Congo Basin. Tall trees with dense canopies. Hardwoods: mahogany, ebony, rosewood.",
              "Mangrove forests: Grow in salty coastal swamps where fresh and salt water mix. Found along West and East African coasts.",
              "Montane forests: Found on high mountains where climate is cooler and wetter. Slopes of Kilimanjaro, Rwenzori, Ethiopian Highlands.",
            ],
            tryThis: { question: "Which forest type grows in hot, wet areas near the Equator?", choices: ["Equatorial forest", "Mangrove forest", "Montane forest", "Desert scrub"], correct: 0, explanation: "Equatorial forests grow in hot, wet areas near the Equator." }
          },
          {
            moduleId: "grassland-savanna",
            title: "Savanna and grassland vegetation",
            bigIdea: "Savanna is Africa's largest vegetation zone with grass and scattered trees adapted to wet and dry seasons.",
            learnIt: [
              "Savanna vegetation: Grassland with scattered trees (acacia, baobab). Covers large parts of East, Central and West Africa. Wet and dry seasons.",
              "Temperate grasslands (velds): South Africa. Short grasses, few trees, cooler winters.",
              "Mediterranean vegetation: Shrubs and small trees adapted to hot dry summers and cool wet winters. North Africa coast and South Africa's Cape.",
              "Desert vegetation: Sparse, drought-resistant plants. Thorny bushes, cacti. Sahara, Namib, Kalahari.",
            ],
            tryThis: { question: "Which is the largest vegetation zone in Africa?", choices: ["Savanna grassland", "Equatorial rainforest", "Desert vegetation", "Mediterranean scrub"], correct: 0, explanation: "Savanna grasslands cover the largest area of Africa." }
          },
          {
            moduleId: "vegetation-exam-summary",
            title: "Exam Summary: 10 UNEB Facts about Vegetation",
            bigIdea: "Master these high-frequency vegetation facts for PLE.",
            learnIt: [
              "1. Vegetation = natural plant cover. Rainfall is the main determining factor.",
              "2. Equatorial rainforests: DRC, Gabon, Congo Basin. Hot, wet all year. Hardwoods: mahogany, ebony.",
              "3. Savanna: Africa's largest zone. Grass + scattered trees. Wet and dry seasons.",
              "4. Desert vegetation: Sahara, Namib, Kalahari. Sparse, thorny, drought-resistant.",
              "5. Mediterranean: North Africa coast and Cape. Shrubs. Hot dry summers, wet winters.",
              "6. Mangrove forests: Salty coastal swamps along West and East African coasts.",
              "7. Mountain vegetation changes with altitude: forest → bamboo → grassland.",
              "8. Deforestation = cutting trees without replanting. Afforestation = planting new trees.",
              "9. Game parks protect wildlife: Murchison Falls (Uganda), Serengeti (Tanzania).",
              "10. Desertification: fertile land → desert. Caused by overgrazing, deforestation, drought.",
            ]
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
        title: "Origin and types of ethnic groups",
        modules: [
          {
            moduleId: "major-ethnic-groups",
            imageUrl: "/images/social-studies/bantu-nilote-migration-map.png",
            imageCaption: "Migration routes of Bantu and Nilotic speakers into East Africa.",
            title: "Major ethnic groups of Africa",
            bigIdea: "Africa has distinct ethnic groups: Bantu, Nilotes, Cushites, Semites, Berbers, and Khoisan.",
            learnIt: [
              "Bantu: Largest group. Originated from Cameroon/Congo. Migrated across Central, East, Southern Africa. Uganda examples: Baganda, Banyankole, Bakiga.",
              "Nilotes: From Bahr-el-Ghazal, South Sudan. River-Lake Nilotes (Acholi, Alur, Luo); Plain Nilotes (Maasai, Karimojong); Highland Nilotes (Kalenjin).",
              "Cushites: Horn of Africa (Somali, Oromo). Semites/Berbers: North Africa (Arabs). Khoisan: Southern Africa (San hunters, Khoikhoi pastoralists).",
            ],
            tryThis: { question: "An ethnic group commonly shares:", choices: ["Culture, language and origin", "Only shoe size", "Only rainfall", "Only road signs"], correct: 0, explanation: "Ethnic groups share culture, language, origin or history." }
          },
          {
            moduleId: "reasons-migration",
            title: "Reasons for migration and settlement",
            bigIdea: "Push factors force people out; pull factors attract them to new areas.",
            learnIt: [
              "Push factors: Population increase, land/water shortage, wars and conflicts, harsh climate, famine.",
              "Pull factors: Fertile land, reliable water, security, trade opportunities.",
              "Effects: Population growth in settled areas, cultural exchange, intermarriage, conflicts, new settlements.",
            ],
            tryThis: { question: "Which is a pull factor?", choices: ["Fertile land", "Famine", "War", "Disease outbreak"], correct: 0, explanation: "Fertile land attracts settlement." }
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
        title: "Nationalism, Pan-Africanism and key leaders",
        modules: [
          {
            moduleId: "nationalism-patriotism",
            title: "Nationalism and patriotism",
            bigIdea: "Nationalism drives self-rule; patriotism is love and service to one's country.",
            learnIt: [
              "Nationalism: Love for one's nation, desire for independence and self-rule.",
              "Patriotism: Love for one's country — paying taxes, obeying laws, promoting peace.",
              "Key dates: Ghana (6 March 1957 — first), Uganda (9 October 1962), Kenya (12 Dec 1963), Tanzania (9 Dec 1961).",
            ],
            tryThis: { question: "Nationalism means:", choices: ["Love for and loyalty to one's nation", "A type of lake", "A climate zone", "A vegetation belt"], correct: 0, explanation: "Nationalism is love for one's nation." }
          },
          {
            moduleId: "key-nationalists",
            title: "Key African nationalists",
            bigIdea: "Nkrumah, Kenyatta, Nyerere, Obote, and Mandela led their countries to freedom.",
            learnIt: [
              "Kwame Nkrumah (Ghana): First sub-Saharan independence, 1957. Pan-Africanist.",
              "Jomo Kenyatta (Kenya): First president, 1963. Mau Mau rebellion led by Dedan Kimathi.",
              "Julius Nyerere (Tanzania): First president, 1961. Ujamaa socialism, African unity.",
              "Milton Obote (Uganda): First PM, 1962. UNC party founded by Ignatius Musaazi, 1952.",
              "Nelson Mandela (South Africa): Anti-apartheid. 27 years imprisoned. President, 1994.",
            ],
            tryThis: { question: "Which country did Kwame Nkrumah lead?", choices: ["Ghana", "Kenya", "South Africa", "Congo"], correct: 0, explanation: "Nkrumah led Ghana to independence in 1957." }
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
        title: "OAU and AU",
        modules: [
          {
            moduleId: "oau-au",
            title: "From OAU to AU",
            bigIdea: "OAU (1963) promoted unity; AU (2002) added peace, democracy, and development.",
            learnIt: [
              "OAU: 25 May 1963, Addis Ababa. 32 founders. Objectives: unity, sovereignty, eradicate colonialism.",
              "AU: 2002, Durban. Objectives: peace, security, democracy, human rights, development.",
              "AU organs: Assembly, Commission, Pan-African Parliament, Peace and Security Council.",
            ],
            tryThis: { question: "The OAU was formed in:", choices: ["1963", "2002", "1884", "1945"], correct: 0, explanation: "OAU formed 1963 in Addis Ababa." }
          },
          {
            moduleId: "regional-groupings",
            title: "Regional economic groupings",
            bigIdea: "COMESA, ECOWAS, SADC, IGAD promote trade and cooperation.",
            learnIt: [
              "COMESA: Eastern and Southern Africa. Uganda is a member.",
              "ECOWAS: West Africa. SADC: Southern Africa. IGAD: Horn/Eastern Africa.",
              "Benefits: larger markets, shared infrastructure, peace-building, stronger bargaining power.",
            ],
            tryThis: { question: "COMESA is:", choices: ["Regional economic grouping", "Mountain range", "Desert", "Lake"], correct: 0, explanation: "COMESA is a regional economic grouping." }
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
        title: "Economic resources and case studies",
        modules: [
          {
            moduleId: "major-resources",
            imageUrl: "/images/social-studies/mining-and-agriculture-processing.png",
            imageCaption: "Value addition transforms raw crops and ores into products.",
            title: "Major economic resources of Africa",
            bigIdea: "Africa is rich in natural and human resources. Wise use drives development.",
            learnIt: [
              "Minerals: Gold, copper, cobalt, diamonds, petroleum, iron ore, coltan.",
              "Agriculture: Coffee, tea, cotton, cocoa, maize, bananas. Fertile soils, favourable climate.",
              "Forest/water: Timber, medicine, fishing, irrigation, hydroelectric power.",
              "Tourism: Wildlife, national parks, gorillas, scenery. Foreign exchange earner.",
            ],
            tryThis: { question: "Major resource in Nigeria:", choices: ["Oil", "Snowfields", "Polar bears", "Volcanoes"], correct: 0, explanation: "Nigeria is known for oil." }
          },
          {
            moduleId: "country-case-studies",
            title: "Country case studies",
            bigIdea: "Each country has different resources and challenges.",
            learnIt: [
              "Nigeria: Oil, cocoa, palm oil. Africa's largest population. Challenges: pollution, corruption.",
              "South Africa: Gold, diamonds, platinum. Most industrialised. Farming: maize, fruits, wine.",
              "DRC: Copper, cobalt, coltan, Congo rainforest. Challenges: poor transport, conflict.",
              "Uganda: Coffee, tea, tourism (gorillas), fishing (Lake Victoria), growing oil.",
            ],
            tryThis: { question: "Most industrialised African economy:", choices: ["South Africa", "Chad", "Somalia", "Rwanda"], correct: 0, explanation: "South Africa is most industrialised." }
          },
          {
            moduleId: "problems-solutions",
            title: "Problems and solutions",
            bigIdea: "Poor transport, limited capital, and corruption slow development.",
            learnIt: [
              "Problems: Poor roads/railways, limited investment, low technology, instability, corruption, raw material export dependence.",
              "Solutions: Value addition, regional trade (AfCFTA, EAC), infrastructure, technical education, good governance.",
            ],
            tryThis: { question: "Processing raw coffee before export is:", choices: ["Value addition", "Devaluation", "Deficit", "Disinvestment"], correct: 0, explanation: "Value addition increases worth." }
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
        title: "United Nations and agencies",
        modules: [
          {
            moduleId: "un-basics",
            title: "Formation and organs of the UN",
            bigIdea: "UN formed 1945 to promote peace, security, cooperation, and human rights.",
            learnIt: [
              "UN: 1945, HQ New York. Uganda is a member. Replaced League of Nations.",
              "Organs: General Assembly (all members), Security Council (15, 5 permanent veto), ICJ, Secretariat.",
            ],
            tryThis: { question: "UN formed in:", choices: ["1945", "1963", "2002", "1884"], correct: 0, explanation: "UN formed 1945 after WWII." }
          },
          {
            moduleId: "un-agencies",
            title: "UN agencies and functions",
            bigIdea: "UNICEF, WHO, FAO, UNESCO, UNHCR serve specific needs.",
            learnIt: [
              "UNICEF: Children's welfare — health, education, immunisation.",
              "WHO: Global health, disease control, vaccination.",
              "FAO: Food and agriculture, fighting hunger.",
              "UNESCO: Education, science, culture, World Heritage Sites.",
              "UNHCR: Refugees — protection, shelter. WFP: Food assistance.",
            ],
            tryThis: { question: "Which UN agency focuses on children?", choices: ["UNICEF", "WHO", "FAO", "UNHCR"], correct: 0, explanation: "UNICEF supports children's welfare." }
          },
          {
            moduleId: "commonwealth",
            title: "The Commonwealth of Nations",
            bigIdea: "Voluntary association of former British colonies promoting democracy and cooperation.",
            learnIt: [
              "Membership: Voluntary, shared values — democracy, human rights, rule of law.",
              "Functions: Promotes democracy, trade, scholarships, Commonwealth Games (every 4 years).",
              "CHOGM: Leaders meet every 2 years. Uganda hosted in 2007.",
            ],
            tryThis: { question: "The Commonwealth is:", choices: ["Member countries cooperating", "Only rivers", "Only deserts", "Only mountains"], correct: 0, explanation: "Commonwealth is an association of countries." }
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
      },
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
      },
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
      },
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
      }
    
      ,{
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
      },
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
    ];

export const SOCIAL_TOPICS: Topic[] = balanceTopicAnswers(applyP7SocialHeavyV4(addUpperPrimarySocialV4(SOCIAL_TOPICS_DATA, "P7", P7_SOCIAL_TERMS)));

export function getSocialTopic(id: string): Topic | undefined {
  return SOCIAL_TOPICS.find((topic) => topic.id === id);
}
