import type { Topic } from "@/lib/topics";
import { addUpperPrimarySocialV4 } from "@/lib/v4-social-helpers";


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

const P6_SOCIAL_TERMS: Record<string, "Term I" | "Term II" | "Term III"> = {
  "p6-location-east-africa": "Term I",
  "p6-physical-features-ea": "Term I",
  "p6-climate-vegetation-ea": "Term I",
  "p6-people-precolonial-ea": "Term II",
  "p6-colonization-ea": "Term II",
  "p6-independence-eac": "Term III"
};

const P6_SOCIAL_TOPICS_DATA: Topic[] = [
  {
    id: "p6-location-east-africa",
    themeId: "sst-east-africa",
    themeName: "People and Resources of East Africa",
    title: "Location of East Africa on the Map of Africa",
    estMinutes: 25,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "Why this matters: East Africa is our regional home. P6 learners must master latitudes, longitudes, surrounding countries, EAC member states, and the economic distinction between coastal and landlocked nations.",
      learningObjectives: [
        "Locate East Africa accurately on the map of Africa using lines of latitude and longitude.",
        "Identify neighboring countries and bodies of water surrounding the East African region.",
        "Name all East African Community (EAC) member states and their capital cities.",
        "Distinguish between landlocked and coastal countries and explain the economic transit challenges they face."
      ],
      whatYouNeedToKnow: [
        "East Africa lies between latitudes 5°N and 12°S, and longitudes 29°E and 42°E. The Equator (0°) crosses Uganda and Kenya.",
        "EAC member states: Uganda (Kampala), Kenya (Nairobi), Tanzania (Dodoma/Dar es Salaam), Rwanda (Kigali), Burundi (Gitega), South Sudan (Juba), DRC (Kinshasa), and Somalia (Mogadishu).",
        "Landlocked countries lack direct ocean coastline and depend on coastal neighbors' ports (Mombasa and Dar es Salaam) for international trade."
      ],
      worked: {
        problem: "Explain two economic challenges faced by landlocked EAC countries such as Uganda, Rwanda, and Burundi.",
        steps: [
          "Identify port dependency: overseas imports and exports must pass through coastal transit ports in Kenya or Tanzania.",
          "Identify transport costs: long inland distances by road and rail add heavy freight charges and border customs delays."
        ],
        answer: "Landlocked countries face high transit freight costs and depend on coastal neighbors' ports and railways for trade."
      },
      recap: [
        "The Indian Ocean forms East Africa's natural eastern boundary.",
        "Latitude 0° (the Equator) crosses Lake Victoria, Entebbe, and Nanyuki."
      ]
    },
    subtopics: [
      {
        subtopicId: "ea-position-size",
        title: "1. Position and Size of East Africa",
        modules: [
          {
            moduleId: "ea-latitudes-longitudes",
            imageUrl: "/images/social-studies/africa-latitudes-longitudes.png",
            imageCaption: "Map showing lines of latitude and longitude across the African continent with East Africa highlighted.",
            title: "Latitudes, Longitudes and Geographical Coordinates",
            bigIdea: "Lines of latitude and longitude form an exact geographical grid used to locate East Africa on the globe.",
            learnIt: [
              "Geographical coordinates: East Africa lies between latitude 5° North and latitude 12° South of the Equator, and between longitude 29° East and longitude 42° East of the Prime Meridian.",
              "Major imaginary lines: The Equator (0° latitude) passes directly through southern Uganda and central Kenya. Places along the Equator experience equal day and night (12 hours of sunlight and 12 hours of darkness).",
              "Size and scope: East Africa covers a vast territory encompassing freshwater lakes, highlands, and savanna plateaus extending from the Nile Basin to the Indian Ocean."
            ],
            tryThis: {
              question: "Which major imaginary line of latitude (0°) crosses directly through Uganda and Kenya?",
              choices: ["Tropic of Cancer", "The Equator", "Tropic of Capricorn", "Prime Meridian"],
              correct: 1,
              explanation: "The Equator is the 0° line of latitude dividing the earth into Northern and Southern Hemispheres."
            }
          }
        ]
      },
      {
        subtopicId: "ea-neighbors-waters",
        title: "2. Neighboring Countries and Surrounding Bodies of Water",
        modules: [
          {
            moduleId: "ea-borders-indian-ocean",
            imageUrl: "/images/social-studies/map-of-africa.png",
            imageCaption: "Political map of Africa illustrating East Africa's northern, western, southern neighbors and the Indian Ocean coastline.",
            title: "Borders and Maritime Boundaries of East Africa",
            bigIdea: "East Africa shares political borders with Central, Northern, and Southern African nations while facing the Indian Ocean.",
            learnIt: [
              "Northern neighbors: Sudan and Ethiopia border East Africa to the north.",
              "Western neighbors: The Democratic Republic of Congo (DRC) and Central African Republic form western boundaries.",
              "Southern neighbors: Mozambique, Malawi, and Zambia lie immediately south of Tanzania.",
              "Eastern maritime boundary: The warm waters of the Indian Ocean wash the coastlines of Kenya, Tanzania, and Somalia, linking East Africa to maritime trade with Asia and Arabia."
            ],
            tryThis: {
              question: "Which ocean forms the natural eastern border of Kenya and Tanzania?",
              choices: ["Atlantic Ocean", "Indian Ocean", "Mediterranean Sea", "Red Sea"],
              correct: 1,
              explanation: "The Indian Ocean lies to the east of East Africa."
            }
          }
        ]
      },
      {
        subtopicId: "eac-member-states",
        title: "3. Member States of the East African Community (EAC)",
        modules: [
          {
            moduleId: "eac-countries-capitals",
            title: "EAC Countries, Capital Cities and Expansion",
            bigIdea: "The East African Community (EAC) is a regional intergovernmental bloc uniting eight nations for economic cooperation.",
            learnIt: [
              "Original founding members: Uganda (Capital: Kampala), Kenya (Capital: Nairobi), and Tanzania (Capital: Dodoma; chief port Dar es Salaam).",
              "Subsequent expansion: Rwanda (Kigali) and Burundi (Gitega) joined in 2007; South Sudan (Juba) joined in 2016; Democratic Republic of Congo (Kinshasa) joined in 2022; Somalia (Mogadishu) joined in 2023.",
              "Headquarters: The official administrative headquarters of the EAC Secretariat is located in Arusha, Tanzania."
            ],
            workedExample: {
              question: "Identify the administrative capital city of Tanzania where the official headquarters of the EAC is hosted.",
              steps: [
                "Dodoma is Tanzania's national political capital.",
                "Arusha is the northern Tanzanian city designated as the official headquarters of the EAC Secretariat and East African Court of Justice."
              ],
              answer: "Arusha hosts the EAC headquarters."
            },
            tryThis: {
              question: "In which city is the official headquarters of the East African Community (EAC) located?",
              choices: ["Kampala", "Nairobi", "Arusha", "Kigali"],
              correct: 2,
              explanation: "Arusha, Tanzania, serves as the diplomatic capital of the East African Community."
            }
          }
        ]
      },
      {
        subtopicId: "ea-coastal-landlocked",
        title: "4. Landlocked and Coastal Countries",
        modules: [
          {
            moduleId: "ea-port-access-corridors",
            title: "Port Access, Northern/Central Corridors and Trade",
            bigIdea: "Coastal states control maritime ports, whereas landlocked interior states rely on international highway and rail corridors.",
            learnIt: [
              "Coastal states: Kenya, Tanzania, DRC, and Somalia possess ocean coastlines with international maritime seaports such as Mombasa, Dar es Salaam, and Tanga.",
              "Landlocked states: Uganda, Rwanda, Burundi, and South Sudan are entirely surrounded by land without direct access to open sea.",
              "Trade corridors: The Northern Corridor links Uganda, Rwanda, and South Sudan to the Port of Mombasa in Kenya via Malaba and Busia. The Central Corridor links inland states to the Port of Dar es Salaam in Tanzania."
            ],
            tryThis: {
              question: "Which major seaport in Kenya serves as the primary gateway for goods imported into Uganda along the Northern Corridor?",
              choices: ["Port of Dar es Salaam", "Port of Mombasa", "Port of Kisumu", "Port of Entebbe"],
              correct: 1,
              explanation: "Mombasa on the Indian Ocean handles the vast majority of Uganda's international maritime cargo."
            }
          }
        ]
      }
    
      ,{
        subtopicId: "premium-premium-practice-locating-east-africa",
        title: "Premium Practice: Locating East Africa",
        modules: [{
          moduleId: "writing-accurate-location-answers",
          title: "Writing Accurate Location Answers",
          bigIdea: "A strong location answer uses directions, neighbours, water bodies and major lines.",
          learnIt: ["East Africa lies in the eastern part of Africa.", "Use compass directions and surrounding water bodies where relevant.", "Landlocked countries have no coastline and depend on neighbours' ports."],
          workedExample: { question: "Why is Uganda called landlocked?", steps: ["Landlocked means no coastline.", "Uganda has no direct access to the sea.", "It uses neighbours' routes to seaports."], answer: "Uganda has no coastline or direct sea access." },
          tryThis: { question: "Which East African country is landlocked?", choices: ["Uganda", "Kenya", "Tanzania", "Somalia"], correct: 0, explanation: "Uganda has no coastline." }
        }]
      }],
    quiz: [
      { q: "Which imaginary line of latitude (0°) crosses through Uganda and Kenya?", choices: ["The Equator", "Tropic of Cancer", "Tropic of Capricorn", "Arctic Circle"], correct: 0, why: "The Equator crosses southern Uganda and central Kenya." },
      { q: "What ocean forms the eastern coastline of East Africa?", choices: ["Indian Ocean", "Atlantic Ocean", "Pacific Ocean", "Red Sea"], correct: 0, why: "The Indian Ocean borders East Africa to the east." },
      { q: "Where is the administrative headquarters of the East African Community located?", choices: ["Arusha, Tanzania", "Kampala, Uganda", "Nairobi, Kenya", "Kigali, Rwanda"], correct: 0, why: "Arusha is the official seat of the EAC." },
      { q: "Which of the following countries in East Africa is landlocked?", choices: ["Uganda", "Kenya", "Tanzania", "Somalia"], correct: 0, why: "Uganda has no direct ocean coastline." },
      { q: "What is the capital city of Burundi?", choices: ["Gitega", "Bujumbura", "Kigali", "Juba"], correct: 0, why: "Gitega is the official political capital of Burundi." },
      { q: "Which major trade corridor connects inland Uganda to the Kenyan seaport of Mombasa?", choices: ["The Northern Corridor", "The Central Corridor", "The Southern Corridor", "The Trans-African Highway"], correct: 0, why: "The Northern Corridor passes through Kenya to Mombasa." },
      { q: "Between which lines of latitude does the East African region lie?", choices: ["5°N and 12°S", "23°N and 23°S", "10°N and 35°S", "0° and 45°N"], correct: 0, why: "East Africa extends from 5° North to 12° South." },
      { q: "Why do landlocked countries face higher prices for imported manufactured goods?", choices: ["Because of extra overland transport costs, tariffs, and border delays along transit corridors", "Because they do not use money", "Because they have no roads", "Because ships sail on rivers"], correct: 0, why: "Inland freight shipping and transit customs increase import overheads." }
    ]
  },
  {
    id: "p6-physical-features-ea",
    themeId: "sst-east-africa",
    themeName: "People and Resources of East Africa",
    title: "Physical Features of East Africa",
    estMinutes: 30,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "Why this matters: Physical relief features—such as the Great Rift Valley, volcanic peaks, block mountains, and vast lakes—shape East Africa's climate, agriculture, tourism, and human settlement patterns.",
      learningObjectives: [
        "Describe the formation of the Great Rift Valley, block mountains (Rwenzori), and volcanic mountains (Kilimanjaro, Elgon).",
        "Identify major lakes and rivers in East Africa and classify lakes by their geological formation.",
        "Explain the economic importance of relief features and water bodies to agriculture, mining, tourism, and fishing."
      ],
      whatYouNeedToKnow: [
        "The Great Rift Valley was formed by faulting and tensional forces pulling tectonic plates apart.",
        "Block / Horst mountains like Mt. Rwenzori were formed when land between parallel faults was uplifted.",
        "Volcanic mountains like Mt. Kilimanjaro and Mt. Elgon formed from magma erupting onto the surface.",
        "Rift Valley lakes (Tanganyika, Albert, Turkana) are long, narrow, and deep; basin/depression lakes (Victoria, Kyoga) are wide, shallow, and irregular."
      ],
      worked: {
        problem: "Distinguish between the characteristics of Rift Valley lakes and Basin (depression) lakes in East Africa.",
        steps: [
          "Rift Valley lakes (e.g., Lake Tanganyika): formed on the floor of rift valleys; very deep, narrow, elongated, with steep rocky shores.",
          "Basin lakes (e.g., Lake Victoria, Lake Kyoga): formed by crustal down-warping; relatively shallow, wide, with irregular swampy shorelines."
        ],
        answer: "Rift Valley lakes are deep, narrow, and elongated; basin lakes are wide, shallow, and irregular."
      },
      recap: [
        "Mount Kilimanjaro in Tanzania is Africa's highest peak (5,895 m).",
        "River Nile originates from Lake Victoria and flows northward to Egypt."
      ]
    },
    subtopics: [
      {
        subtopicId: "relief-features-ea",
        title: "1. Major Relief Features: Rift Valley and Mountains",
        modules: [
          {
            moduleId: "great-rift-valley-ea",
            imageUrl: "/images/social-studies/great-rift-valley-formation.png",
            imageCaption: "Cross-section diagram illustrating tensional fault forces pulling the crust apart to form the East African Rift Valley.",
            title: "Formation of the Great Rift Valley by Faulting",
            bigIdea: "Tensional forces inside the earth fractured the crust along fault lines, causing the middle block to sink into a rift valley.",
            learnIt: [
              "Faulting mechanism: movements in the earth's crust generated tensional forces pulling blocks of rocks apart. Fractures called faults developed.",
              "Valley sinking: the land block between parallel fault lines collapsed and sank, creating a steep-sided trough called the East African Rift Valley.",
              "Two branches: The Western Rift Valley runs through western Uganda (Lake Albert, Lake Edward, Lake Kivu, Lake Tanganyika). The Eastern Rift Valley runs through central Kenya and Tanzania (Lake Turkana, Lake Nakuru, Lake Naivasha)."
            ],
            tryThis: {
              question: "Which geological process generated the steep escarpments and floor of the East African Rift Valley?",
              choices: ["Faulting and crustal tension", "River folding", "Wind erosion", "Glacial melting"],
              correct: 0,
              explanation: "Faulting fractured the earth's crust, letting the central block subside."
            }
          },
          {
            moduleId: "mountains-block-volcanic",
            imageUrl: "/images/social-studies/block-and-fold-mountains.png",
            imageCaption: "Comparison showing up-thrust block horst mountains versus volcanic magma cones.",
            title: "Block Mountains (Rwenzori) vs Volcanic Peaks (Kilimanjaro)",
            bigIdea: "Fault uplift produces rugged block mountains, while magma eruptions construct towering volcanic cones.",
            learnIt: [
              "Block / Horst Mountains: formed when compressional forces push a crustal block upward between parallel faults. Example: Mount Rwenzori on the Uganda-DRC border (snow-capped Margherita peak).",
              "Volcanic Mountains: formed when subterranean magma erupts through crust vents and solidifies into ash and lava cones. Examples: Mount Kilimanjaro (highest in Africa at 5,895 m), Mount Kenya, Mount Elgon, and the Virunga volcanoes."
            ],
            tryThis: {
              question: "Which mountain range on the border of Uganda and DRC was formed by faulting and uplift as a Block (Horst) mountain?",
              choices: ["Mount Rwenzori", "Mount Kilimanjaro", "Mount Elgon", "Mount Kenya"],
              correct: 0,
              explanation: "Mt. Rwenzori is a classic horst block mountain formed during rift faulting."
            }
          }
        ]
      },
      {
        subtopicId: "lakes-rivers-drainage",
        title: "2. Lakes and Rivers of East Africa",
        modules: [
          {
            moduleId: "ea-lakes-rivers",
            imageUrl: "/images/social-studies/major-rivers-lakes-map.png",
            imageCaption: "Hydrographic map of East Africa showing Lake Victoria, Rift Valley lakes, and River Nile drainage.",
            title: "Basin Lakes, Rift Lakes and Major Rivers",
            bigIdea: "East Africa's drainage network centers on Lake Victoria and feeds international waterways including the Nile.",
            learnIt: [
              "Basin / Down-warped Lakes: Lake Victoria (largest freshwater lake in Africa, shared by Uganda, Kenya, Tanzania) and Lake Kyoga formed when crust subsidence created broad shallow depressions.",
              "Rift Valley Lakes: Lake Tanganyika (second deepest lake in the world), Lake Albert, Lake Edward, and Lake Turkana occupy deep fault troughs.",
              "Major Rivers: River Nile flows northward from Lake Victoria across Uganda and South Sudan to the Mediterranean Sea. River Tana and River Athi flow across Kenya to the Indian Ocean. River Rufiji drains southern Tanzania."
            ],
            tryThis: {
              question: "Which lake is the largest freshwater body in Africa and is shared by Uganda, Kenya, and Tanzania?",
              choices: ["Lake Victoria", "Lake Tanganyika", "Lake Albert", "Lake Turkana"],
              correct: 0,
              explanation: "Lake Victoria occupies a vast shallow basin covering over 68,000 sq km."
            }
          }
        ]
      },
      {
        subtopicId: "economic-importance-relief",
        title: "3. Economic Importance of Physical Features",
        modules: [
          {
            moduleId: "relief-economy-ea",
            title: "Agriculture, Hydro-Electricity, Tourism and Fishing",
            bigIdea: "Relief features generate micro-climates for farming, waterfalls for clean energy, and wildlife habitats for tourism.",
            learnIt: [
              "Volcanic soils: weathered volcanic ash on the slopes of Mt. Elgon, Mt. Kilimanjaro, and Kigezi highlands creates fertile soils supporting arabica coffee, tea, bananas, and dairy farming.",
              "Hydro-electric power (HEP): waterfalls and river rapids turn dam turbines to generate clean electricity (e.g., Nalubaale and Bujagali dams on the Nile at Jinja).",
              "Tourism and Fishing: snow-capped mountains and rift valley scenery attract international tourists earning foreign exchange. Lakes provide tilapia and Nile perch supporting commercial fisheries."
            ],
            tryThis: {
              question: "Why do volcanic highlands such as the slopes of Mount Elgon and Kigezi support dense agricultural settlement?",
              choices: ["Because weathered volcanic ash produces rich, fertile soils combined with cool, reliable rainfall", "Because they are flat deserts", "Because no trees grow there", "Because rivers flow backwards"],
              correct: 0,
              explanation: "Volcanic soils and cool montane rainfall create prime agricultural productivity."
            }
          }
        ]
      }
    
      ,{
        subtopicId: "premium-premium-practice-physical-features",
        title: "Premium Practice: Physical Features",
        modules: [{
          moduleId: "explaining-formation-and-importance",
          title: "Explaining Formation and Importance",
          bigIdea: "Feature answers should name the feature, how it formed or why it matters.",
          learnIt: ["The Great Rift Valley was formed by faulting.", "Volcanic mountains formed through volcanicity.", "Lakes and rivers support fishing, transport, irrigation and tourism."],
          workedExample: { question: "How was the Great Rift Valley formed?", steps: ["Identify the process: faulting.", "Land between faults sank down.", "This formed a long valley."], answer: "It was formed by faulting." },
          tryThis: { question: "Which mountain is volcanic?", choices: ["Kilimanjaro", "Rwenzori", "Plateau", "Valley"], correct: 0, explanation: "Kilimanjaro is volcanic." }
        }]
      }],
    quiz: [
      { q: "Which geological process formed the steep-sided East African Rift Valley?", choices: ["Faulting due to tensional forces in the earth's crust", "Volcanic eruption", "River folding", "Wind erosion"], correct: 0, why: "Faulting pulled the crust apart, causing central trough subsidence." },
      { q: "Which mountain is the highest peak in Africa, standing at 5,895 metres above sea level?", choices: ["Mount Kilimanjaro", "Mount Rwenzori", "Mount Kenya", "Mount Elgon"], correct: 0, why: "Kilimanjaro in northern Tanzania is Africa's highest summit." },
      { q: "Which East African lake was formed by crustal down-warping into a broad, shallow basin?", choices: ["Lake Victoria", "Lake Tanganyika", "Lake Albert", "Lake Kivu"], correct: 0, why: "Lake Victoria occupies a shallow depression between the two rift valley branches." },
      { q: "Which mountain in western Uganda is classified as a Block (Horst) mountain formed by uplift between faults?", choices: ["Mount Rwenzori", "Mount Elgon", "Mount Moroto", "Mount Longonot"], correct: 0, why: "Rwenzori is an up-thrust block horst mountain." },
      { q: "Which major African river originates from Lake Victoria at Jinja and flows northward to Egypt?", choices: ["River Nile", "River Congo", "River Zambezi", "River Rufiji"], correct: 0, why: "The Victoria Nile emerges from Lake Victoria at Jinja." },
      { q: "What is the primary economic benefit of waterfalls and rapids along East African rivers?", choices: ["Generation of Hydro-Electric Power (HEP)", "Growing coffee directly on waterfalls", "Stopping ships from sailing", "Making river water salty"], correct: 0, why: "Falling river water turns dam turbines to produce electricity." },
      { q: "Why are Rift Valley lakes like Lake Tanganyika unsuitable for wading and shallow shore papyrus swamps?", choices: ["Because they have very steep, rocky shores and plunge to great depths immediately from the edge", "Because their water is hot", "Because they contain no fish", "Because they freeze daily"], correct: 0, why: "Faulting creates steep escarpment drops along rift shorelines." },
      { q: "How do volcanic highlands contribute to East African agricultural prosperity?", choices: ["Volcanic ash weathers into nutrient-rich fertile soils supporting coffee, tea, and dairy farming", "They block all clouds", "They produce mineral oil", "They prevent rainfall"], correct: 0, why: "Volcanic soil mineral fertility drives highland cash crop farming." }
    ]
  },
  {
    id: "p6-climate-vegetation-ea",
    themeId: "sst-east-africa",
    themeName: "People and Resources of East Africa",
    title: "Climate and Natural Vegetation of East Africa",
    estMinutes: 30,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "Why this matters: Climate controls water availability and farming calendars, while natural vegetation zones provide timber, pasture for wildlife, and protection against soil erosion.",
      learningObjectives: [
        "Identify climatic zones of East Africa (Equatorial, Tropical Savanna, Semi-Arid, Montane).",
        "Explain factors influencing regional climate: altitude, relief rainfall, prevailing winds, and distance from sea.",
        "Map natural vegetation belts and describe the conservation of forests and wildlife in game parks."
      ],
      whatYouNeedToKnow: [
        "Equatorial climate is hot and wet throughout the year with double rainfall maxima.",
        "Altitude effect: temperature drops by approximately 2°C for every 300 metres of elevation gain.",
        "Relief (orographic) rainfall occurs on the windward slopes of mountains; the leeward side lies in a dry rain shadow.",
        "Savanna grasslands host East Africa's world-famous wildlife national parks (Serengeti, Masai Mara, Queen Elizabeth)."
      ],
      worked: {
        problem: "Explain why the windward slope of Mount Elgon receives heavy rainfall while the leeward slope experiences dry rain shadow conditions.",
        steps: [
          "Windward slope: warm moist winds from lakes rise up the slope, expand, cool, condense into clouds, and drop heavy relief rainfall.",
          "Leeward slope: winds descending the opposite slope have already lost their moisture, warming up and causing dry rain shadow conditions."
        ],
        answer: "Moist winds rise, cool, and rain on windward slopes, leaving descending air dry on leeward slopes."
      },
      recap: [
        "Deforestation leads to desertification and severe soil erosion.",
        "Afforestation is planting trees where none existed before."
      ]
    },
    subtopics: [
      {
        subtopicId: "ea-climatic-zones",
        title: "1. Climatic Zones and Factors Influencing Climate",
        modules: [
          {
            moduleId: "ea-climate-types",
            imageUrl: "/images/social-studies/africa-climatic-zones.png",
            imageCaption: "Map illustrating Equatorial, Savanna, Semi-arid, and Montane climatic zones across East Africa.",
            title: "Equatorial, Savanna, Semi-Arid and Montane Climates",
            bigIdea: "East Africa experiences diverse climates ranging from steaming equatorial lake basins to freezing alpine summits.",
            learnIt: [
              "Equatorial climate: found around Lake Victoria basin and coastal forests. Experienced hot temperatures (~26°C) and heavy rainfall (1500 mm+) evenly distributed throughout the year.",
              "Tropical Savanna climate: covers most of northern and eastern Uganda, central Tanzania, and southern Kenya. Features distinct wet and dry seasons.",
              "Semi-Arid / Scrub climate: covers northeastern Uganda (Karamoja) and northern/eastern Kenya (Turkana). Characterized by high heat and unreliable rainfall below 500 mm.",
              "Montane climate: found on high mountain ranges (Rwenzori, Elgon, Kilimanjaro). Temperatures drop steadily with height until reaching permanent snowlines."
            ],
            tryThis: {
              question: "Which climatic zone covers the largest land area across East Africa, featuring distinct wet and dry seasons?",
              choices: ["Tropical Savanna climate", "Equatorial climate", "Semi-arid desert climate", "Polar climate"],
              correct: 0,
              explanation: "Savanna climates dominate the broad plateaus of Tanzania, Uganda, and Kenya."
            }
          },
          {
            moduleId: "ea-relief-rainfall",
            imageUrl: "/images/social-studies/relief-orographic-rainfall.png",
            imageCaption: "Diagram showing moist winds forming rain on windward slopes and dry air descending on rain shadow leeward slopes.",
            title: "Relief Rainfall, Altitude and Prevailing Winds",
            bigIdea: "Highland barriers lift moist air to trigger relief rainfall, leaving leeward slopes in dry rain shadows.",
            learnIt: [
              "Altitude temperature rule: the higher you go above sea level, the cooler it becomes. For every 1,000 metres climb, temperature falls by ~6.5°C.",
              "Orographic (Relief) rainfall: prevailing moist winds are forced upward by mountain escarpments. Cooling air condenses to pour rain on the windward side.",
              "Rain shadow effect: air descending the leeward side is dry and warming, resulting in low rainfall (e.g., the Kasese plains lying in the rain shadow of Mt. Rwenzori)."
            ],
            tryThis: {
              question: "What geographical term describes the dry area on the leeward slope of a mountain that receives very little rainfall?",
              choices: ["Rain shadow", "Equatorial basin", "Windward zone", "Wetland buffer"],
              correct: 0,
              explanation: "Rain shadow zones occur where mountain ridges block incoming rain-bearing winds."
            }
          }
        ]
      },
      {
        subtopicId: "ea-vegetation-conservation",
        title: "2. Natural Vegetation Belts and Wildlife Conservation",
        modules: [
          {
            moduleId: "ea-savanna-forests",
            imageUrl: "/images/social-studies/africa-vegetation-belts.png",
            imageCaption: "Vegetation map showing dense rainforests, expansive savanna grasslands, and semi-arid thorn scrub.",
            title: "Tropical Rainforests, Savanna Grasslands and Mangroves",
            bigIdea: "Natural vegetation adapts directly to rainfall volume, ranging from multi-canopy forests to drought-resistant thorn trees.",
            learnIt: [
              "Tropical Rainforests: dense evergreen forests with tall hardwood trees (mahogany, ironwood), lianas, and buttress roots (e.g., Mabira Forest in Uganda, Kakamega Forest in Kenya).",
              "Savanna Grasslands: tall grasses interspersed with fire-resistant acacia and baobab trees. Home to herbivores (zebras, wildebeest, antelopes) and carnivores (lions, cheetahs).",
              "Mangrove Forests: salt-tolerant trees growing along the muddy intertidal estuaries of the Indian Ocean coastline."
            ],
            tryThis: {
              question: "Which tree species is characteristic of East African savanna grasslands, having umbrella-shaped canopies and thorny branches adapted to dry seasons?",
              choices: ["Acacia tree", "Mahogany tree", "Papyrus reed", "Mangrove tree"],
              correct: 0,
              explanation: "Acacia trees thrive in savanna landscapes with drought and fire adaptations."
            }
          },
          {
            moduleId: "ea-national-parks",
            imageUrl: "/images/social-studies/agroforestry-farm.png",
            imageCaption: "Sustainable land use integrating timber trees, food crops, and protected natural forest buffers.",
            title: "National Parks, Game Reserves and Agroforestry",
            bigIdea: "Conserving forests and establishing national parks safeguards biodiversity and sustains eco-tourism revenues.",
            learnIt: [
              "Major National Parks: Serengeti and Ngorongoro in Tanzania; Masai Mara and Tsavo in Kenya; Queen Elizabeth, Murchison Falls, and Bwindi Impenetrable (mountain gorillas) in Uganda.",
              "Threats to vegetation: illegal poaching, charcoal burning, uncontrolled timber lumbering, and overgrazing causing desertification.",
              "Conservation solutions: enforcing anti-poaching laws, practicing agroforestry (growing food crops alongside timber/fruit trees), and reforestation."
            ],
            tryThis: {
              question: "Which national park in southwestern Uganda is globally famous for protecting endangered mountain gorillas?",
              choices: ["Bwindi Impenetrable National Park", "Murchison Falls National Park", "Serengeti National Park", "Tsavo National Park"],
              correct: 0,
              explanation: "Bwindi provides critical montane rainforest habitat for mountain gorillas."
            }
          }
        ]
      }
    
      ,{
        subtopicId: "premium-premium-practice-climate-and-vegetation",
        title: "Premium Practice: Climate and Vegetation",
        modules: [{
          moduleId: "linking-rainfall-to-vegetation",
          title: "Linking Rainfall to Vegetation",
          bigIdea: "Climate and vegetation answers explain how rainfall and temperature affect plants.",
          learnIt: ["Wet areas support forests, swamps or thick vegetation.", "Drier areas support savanna or semi-arid vegetation.", "Highland areas are cooler than lowlands."],
          workedExample: { question: "Why are highlands cooler?", steps: ["Identify the factor: altitude.", "Temperature decreases with altitude.", "Highlands are higher."], answer: "Highlands are cooler because temperature decreases with altitude." },
          tryThis: { question: "Which factor affects highland temperature?", choices: ["Altitude", "Fishing", "Mining", "Longitude only"], correct: 0, explanation: "Altitude affects temperature." }
        }]
      }],
    quiz: [
      { q: "Which climatic zone in East Africa is characterized by hot temperatures and heavy, reliable rainfall throughout the year?", choices: ["Equatorial climate", "Tropical Savanna climate", "Semi-arid desert climate", "Polar climate"], correct: 0, why: "Equatorial regions around Lake Victoria receive year-round convectional rain." },
      { q: "Why are high mountain summits such as Mount Kilimanjaro and Mount Rwenzori covered with permanent snow despite being located near the hot Equator?", choices: ["Because ambient air temperature decreases steadily with increasing altitude above sea level", "Because they receive snow from European clouds", "Because volcanos freeze lava", "Because strong winds blow ice from the sea"], correct: 0, why: "High altitude drops temperatures below freezing point." },
      { q: "What type of rainfall is produced when moist prevailing winds are forced to rise over steep mountain barriers?", choices: ["Relief (Orographic) rainfall", "Convectional rainfall", "Frontal cyclonic rainfall", "Acid rainfall"], correct: 0, why: "Mountain uplift causes adiabatic cooling and relief rainfall." },
      { q: "Which vegetation belt covers the vast plains of Serengeti and Queen Elizabeth National Park, featuring tall grasses and scattered acacia trees?", choices: ["Savanna grassland", "Tropical rainforest", "Mangrove swamp", "Alpine tundra"], correct: 0, why: "Savanna grasslands dominate East Africa's game park ecosystems." },
      { q: "What specialized coastal vegetation grows along the muddy, salty intertidal shorelines of the Indian Ocean in Kenya and Tanzania?", choices: ["Mangrove forests", "Papyrus swamps", "Mahogany forests", "Baobab groves"], correct: 0, why: "Mangrove trees possess stilt roots adapted to saline coastal estuaries." },
      { q: "What term refers to the deliberate planting of trees in an area that previously had no forest cover?", choices: ["Afforestation", "Deforestation", "Overgrazing", "Coppicing"], correct: 0, why: "Afforestation creates new forest plantations on barren land." },
      { q: "Which famous Tanzanian national park hosts the annual overland migration of over one million wildebeest and zebras?", choices: ["Serengeti National Park", "Bwindi National Park", "Lake Nakuru National Park", "Mount Elgon National Park"], correct: 0, why: "The Serengeti ecosystem hosts the great mammalian migration." },
      { q: "How does agroforestry promote environmental conservation on smallholder East African farms?", choices: ["By growing trees alongside agricultural crops to enrich soil humus, prevent erosion, and provide sustainable firewood", "By cutting all trees to plant grass", "By replacing soil with concrete tiles", "By burning vegetation annually"], correct: 0, why: "Agroforestry blends tree planting with food cropping." }
    ]
  },
  {
    id: "p6-people-precolonial-ea",
    themeId: "sst-east-africa",
    themeName: "People and Resources of East Africa",
    title: "The People and Pre-Colonial History of East Africa",
    estMinutes: 30,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "Why this matters: Tracing the historical migration routes of Bantu, Nilotes, and Cushites explains East Africa's ethnic diversity, centralized kingdoms, and pre-colonial trade corridors.",
      learningObjectives: [
        "Trace the origins and settlement patterns of Bantu, Nilotes (River-Lake, Plain, Highland), and Cushites.",
        "Compare centralized kingdoms (Buganda, Bunyoro) with decentralized chiefdoms (Nyamwezi, Akamba).",
        "Describe pre-colonial long-distance trade organized by the Nyamwezi, Akamba, and Arab/Swahili coastal merchants."
      ],
      whatYouNeedToKnow: [
        "Bantu originated from the Cameroon/Congo Basin and practiced settled agriculture and iron smelting.",
        "Nilotes originated from the Bahr-el-Ghazal region of South Sudan and migrated south along the Nile Valley.",
        "Long-distance trade exchanged interior ivory, copper, and enslaved people for coastal guns, cotton cloth, and glass beads."
      ],
      worked: {
        problem: "Explain two reasons why the centralized Kingdom of Buganda expanded rapidly during the 18th and 19th centuries.",
        steps: [
          "Centralized political hierarchy: strong leadership under the Kabaka assisted by appointed county chiefs (Saza chiefs) ensured administrative control.",
          "Agricultural and military strength: fertile soils around Lake Victoria ensured food security (bananas), supporting a standing standing army and naval war canoes."
        ],
        answer: "Centralized leadership under the Kabaka and strong food security from fertile soils enabled military expansion."
      },
      recap: [
        "River-Lake Nilotes include the Acholi, Alur, Padhola, and Luo/Jopadhola.",
        "Mirambo and Nyungu-ya-Mawe were renowned pre-colonial Nyamwezi leaders."
      ]
    },
    subtopics: [
      {
        subtopicId: "migrations-ethnic-ea",
        title: "1. Origins and Migrations of Bantu, Nilotes and Cushites",
        modules: [
          {
            moduleId: "bantu-nilote-migrations",
            imageUrl: "/images/social-studies/bantu-nilote-migration-map.png",
            imageCaption: "Historical migration arrows showing Bantu moving from Congo Basin and Nilotes descending along the Nile.",
            title: "Bantu Farmers, Nilotic Pastoralists and Cushite Traders",
            bigIdea: "Centuries of population movements populated East Africa with agriculturalists, cattle herders, and iron artisans.",
            learnIt: [
              "The Bantu: largest ethnic group in East Africa. Originated from the Niger-Congo cradle. Migrated seeking fertile arable land and escaping population pressure. Introduced iron smelting and permanent crop farming (bananas, millet). Groups include Baganda, Banyankole, Kikuyu, Sukuma, Chagga.",
              "The Nilotes: pastoralists originating from Bahr-el-Ghazal in South Sudan. Divided into three branches: 1) River-Lake Nilotes (Luo, Acholi, Alur, Jaluo); 2) Plain Nilotes / Nilo-Hamites (Karamojong, Masai, Turkana, Teso); 3) Highland Nilotes (Kalenjin, Sabiny).",
              "The Cushites: originated from the Horn of Africa (Ethiopia/Somalia). Practiced pastoralism and trading. Groups include Somali, Oromo, Rendille, and Bahima/Tutsi heritage lines."
            ],
            tryThis: {
              question: "Which major ethnic migration introduced iron-working technology and settled agricultural farming into East Africa?",
              choices: ["The Bantu migration", "The Plain Nilotes migration", "The Cushite migration", "The Arab coastal migration"],
              correct: 0,
              explanation: "Bantu pioneers cleared forests using iron axes and established settled crop agriculture."
            }
          }
        ]
      },
      {
        subtopicId: "traditional-governance-ea",
        title: "2. Traditional Governance: Kingdoms and Chiefdoms",
        modules: [
          {
            moduleId: "buganda-bunyoro-nyamwezi",
            title: "Centralized Kingdoms vs Decentralized Chiefdoms",
            bigIdea: "Pre-colonial societies organized into powerful centralized monarchies or clan-based age-set chiefdoms.",
            learnIt: [
              "Centralized Kingdoms: possessed a single supreme monarch with hereditary succession. Kingdom of Buganda was headed by the Kabaka, supported by the Katikkiro (Prime Minister) and Lukiiko (Parliament). Kingdom of Bunyoro-Kitara was headed by the Omukama.",
              "Decentralized Societies / Chiefdoms: lacked a single paramount king. Ruled by councils of clan elders or military age-set leaders. Example: The Nyamwezi of central Tanzania organized under warlord chiefs like Mirambo and Nyungu-ya-Mawe during trade expansion; the Masai organized under spiritual leaders called Laibon."
            ],
            tryThis: {
              question: "What title was held by the supreme traditional monarch ruler of the centralized Kingdom of Buganda?",
              choices: ["The Kabaka", "The Omukama", "The Laibon", "The Kyabazinga"],
              correct: 0,
              explanation: "The Kabaka presided as supreme political and judicial sovereign of Buganda."
            }
          }
        ]
      },
      {
        subtopicId: "precolonial-trade-ea",
        title: "3. Pre-Colonial Long-Distance Trade",
        modules: [
          {
            moduleId: "long-distance-trade-corridors",
            imageUrl: "/images/social-studies/triangular-trade-map.png",
            imageCaption: "Map of caravan routes connecting inland Tabora and Buganda to coastal ports of Bagamoyo and Zanzibar.",
            title: "Caravan Trade: Nyamwezi, Akamba and Arabs",
            bigIdea: "Caravan trade networks connected inland kingdoms to Indian Ocean ports, exchanging ivory for foreign manufactured goods.",
            learnIt: [
              "Key African merchant groups: The Nyamwezi (led by Mirambo) dominated central caravan routes across Tanzania. The Akamba and Baganda organized northern routes.",
              "Coastal partners: Arab and Swahili merchants (such as Tippu Tip) operated from Zanzibar, Bagamoyo, and Mombasa.",
              "Trade commodities: Interior exports included elephant ivory, gold, copper, and enslaved captives. Coastal imports included firearms, gunpowder, cotton calico cloth, beads, and glassware.",
              "Impact: stimulated urbanization (founding inland depot towns like Tabora and Ujiji), spread Kiswahili language and Islam inland, but severely devastated populations through slave raiding."
            ],
            tryThis: {
              question: "Which inland Tanzanian town developed into a major central depot and crossroads during the pre-colonial long-distance caravan trade?",
              choices: ["Tabora", "Arusha", "Dodoma", "Mwanza"],
              correct: 0,
              explanation: "Tabora served as the vital junction where Nyamwezi and Arab trade caravans rested."
            }
          }
        ]
      }
    
      ,{
        subtopicId: "premium-premium-practice-people-and-pre-colonial-life",
        title: "Premium Practice: People and Pre-Colonial Life",
        modules: [{
          moduleId: "migration-trade-and-kingdoms",
          title: "Migration, Trade and Kingdoms",
          bigIdea: "History answers connect why people moved, traded and formed communities.",
          learnIt: ["People migrated for pasture, fertile land, water, trade or security.", "Pre-colonial trade involved salt, iron tools, cattle, hides, beads and cloth.", "Kingdoms developed leadership, laws, armies and culture."],
          workedExample: { question: "Why did pastoral groups migrate?", steps: ["Pastoral groups keep animals.", "Animals need pasture and water.", "Searching for pasture and water caused movement."], answer: "They moved in search of pasture and water." },
          tryThis: { question: "Which item was traded in pre-colonial East Africa?", choices: ["Salt", "Mobile phones", "Computers", "Petrol cars only"], correct: 0, explanation: "Salt was an important trade item." }
        }]
      }],
    quiz: [
      { q: "From which geographical cradle region did the Bantu-speaking peoples migrate into East Africa?", choices: ["The Niger-Congo / Cameroon Highlands basin", "The Arabian Peninsula", "The Nile Delta in Egypt", "The Kalahari Desert"], correct: 0, why: "Bantu expansion originated in central-western Africa." },
      { q: "Which branch of Nilotes migrated along river valleys and settled on the shores of Lake Victoria as fishermen and crop farmers?", choices: ["River-Lake Nilotes (e.g., Luo, Acholi, Alur)", "Plain Nilotes (Masai)", "Highland Nilotes (Kalenjin)", "Cushitic pastoralists"], correct: 0, why: "River-Lake Nilotes adapted their pastoral lifestyle to fishing waterways." },
      { q: "Who was the legendary military chief of the Nyamwezi who united chiefdoms and controlled long-distance trade routes in central Tanzania?", choices: ["Chief Mirambo", "Kabaka Muteesa I", "Omukama Kabalega", "Chief Mkwawa"], correct: 0, why: "Mirambo built a powerful trade empire using Ruga-Ruga warriors." },
      { q: "What title was given to the traditional spiritual and political leader of the Masai people?", choices: ["The Laibon", "The Kabaka", "The Omukama", "The Katikkiro"], correct: 0, why: "The Laibon guided Masai age-set warriors and rituals." },
      { q: "Which valuable interior commodity was most heavily sought after by Arab and European traders during pre-colonial long-distance trade?", choices: ["Elephant ivory", "Bananas", "Clay pots", "Palm oil"], correct: 0, why: "Ivory commanded immense prices in Asian and European luxury markets." },
      { q: "Which coastal island became the commercial capital and slave trade hub under Sultan Seyyid Said in the 19th century?", choices: ["Zanzibar", "Madagascar", "Pemba", "Lammu"], correct: 0, why: "Sultan Seyyid Said relocated his capital from Oman to Zanzibar in 1840." },
      { q: "What major cultural legacy resulted from the contact between interior African traders and coastal Arab merchants?", choices: ["The widespread growth of Kiswahili language and Islamic culture along caravan corridors", "The disappearance of iron smelting", "The introduction of potato farming", "The adoption of French laws"], correct: 0, why: "Kiswahili developed as the regional lingua franca of trade." },
      { q: "Why did decentralized societies like the Akamba engage actively in pre-colonial long-distance trade?", choices: ["To exchange interior ivory and cattle products for foreign manufactured cloth, metal implements, and firearms", "To conquer Egypt", "To hide from rainfall", "To stop speaking Bantu"], correct: 0, why: "Trade provided access to high-value manufactured trade goods." }
    ]
  },
  {
    id: "p6-colonization-ea",
    themeId: "sst-east-africa",
    themeName: "People and Resources of East Africa",
    title: "Foreign Influence and Colonization of East Africa",
    estMinutes: 30,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "Why this matters: European Scramble and Partition divided East Africa through diplomatic treaties and chartered companies, prompting heroic African resistance against colonial occupation.",
      learningObjectives: [
        "Explain the Anglo-German partition treaties of 1886 and 1890 (Heligoland Treaty).",
        "Describe the role of chartered companies (IBEAC and GEAC) in establishing early colonial rule.",
        "Compare British Indirect Rule in Uganda/Kenya with German Direct Rule (Akidas and Jumbes) in Tanganyika.",
        "Analyze armed resistance led by Chief Mkwawa (Hehe), Omukama Kabalega (Bunyoro), and Koitalel Arap Samoei (Nandi)."
      ],
      whatYouNeedToKnow: [
        "The Anglo-German Agreement of 1886 divided East Africa along latitude 1°S; Britain took Kenya/Uganda sphere, Germany took Tanganyika.",
        "The Imperial British East Africa Company (IBEAC) under William Mackinnon administered Uganda and Kenya until going bankrupt.",
        "Omukama Kabalega of Bunyoro fought British invasion using guerrilla warfare for over seven years."
      ],
      worked: {
        problem: "Contrast British Indirect Rule in Uganda with German Direct Rule in Tanganyika during the colonial era.",
        steps: [
          "British Indirect Rule: governed through existing traditional kings and chiefs (e.g., using Buganda administration hierarchy under British District Commissioners).",
          "German Direct Rule: bypassed local hereditary chiefs and imported foreign coastal agents called Akidas and local headmen called Jumbes to enforce forced cotton labor and taxation."
        ],
        answer: "Britain governed through local traditional chiefs; Germany governed directly using foreign Akidas and Jumbes."
      },
      recap: [
        "The Maji Maji rebellion (1905-1907) in southern Tanganyika united ethnic clans against forced cotton cultivation.",
        "Captain Frederick Lugard promoted indirect rule administration."
      ]
    },
    subtopics: [
      {
        subtopicId: "scramble-partition-ea",
        title: "1. Scramble and Partition of East Africa",
        modules: [
          {
            moduleId: "anglo-german-treaties",
            imageUrl: "/images/social-studies/partition-of-africa-1884.png",
            imageCaption: "Historical map illustrating European imperial powers dividing East Africa during the Berlin Conference era.",
            title: "Anglo-German Agreements of 1886 and 1890",
            bigIdea: "European rivalries for East African territory were settled in European capitals by drawing arbitrary boundary lines.",
            learnIt: [
              "Causes of Scramble: demand for industrial raw materials (cotton, rubber), secure markets for European factories, and strategic control of the River Nile source.",
              "Anglo-German Agreement of 1886: Britain and Germany drew a boundary line from the coast to Lake Victoria across Mount Kilimanjaro. Britain received the northern sphere (Kenya); Germany received the southern sphere (Tanganyika).",
              "Heligoland Treaty (1890): Germany officially recognized Uganda and Zanzibar as British protectorates in exchange for Britain ceding the North Sea island of Heligoland to Germany."
            ],
            tryThis: {
              question: "Which European treaty formally recognized Uganda and Zanzibar as British protectorate spheres in exchange for the North Sea island of Heligoland?",
              choices: ["The Anglo-German Agreement of 1890 (Heligoland Treaty)", "The Berlin Treaty of 1885", "The Treaty of Versailles", "The Buganda Agreement of 1900"],
              correct: 0,
              explanation: "The 1890 Heligoland agreement finalized British dominance over Uganda."
            }
          }
        ]
      },
      {
        subtopicId: "chartered-companies-rule",
        title: "2. Chartered Companies and Administration Systems",
        modules: [
          {
            moduleId: "ibeac-geac-administration",
            title: "IBEAC, GEAC and Indirect vs Direct Rule",
            bigIdea: "Colonial governments initially outsourced territorial control to private commercial companies before establishing formal flags.",
            learnIt: [
              "Imperial British East Africa Company (IBEAC): founded by Sir William Mackinnon in 1888. Built roads, signed treaties (Lugard in Buganda), but collapsed due to financial bankruptcy and the high cost of suppressing religious wars.",
              "German East Africa Company (GEAC): led by Carl Peters in Tanganyika until the German imperial government took over after coastal uprisings (Abushiri rebellion).",
              "Administration comparison: Britain used Indirect Rule (using existing traditional leaders under colonial guidance). Germany used Direct Rule (employing harsh coastal Akidas to collect taxes)."
            ],
            tryThis: {
              question: "Why did the Imperial British East Africa Company (IBEAC) surrender administrative control of Uganda to the British government in 1894?",
              choices: ["It ran out of funds and faced severe financial bankruptcy", "It found no ivory in Africa", "It was defeated by Portuguese soldiers", "It completed all railway construction"],
              correct: 0,
              explanation: "Heavy administrative overheads exhausted Mackinnon's private company capital."
            }
          }
        ]
      },
      {
        subtopicId: "african-resistance-ea",
        title: "3. African Resistance to Colonial Occupation",
        modules: [
          {
            moduleId: "kabalega-mkwawa-koitalel",
            title: "Heroic Armed Resistance: Bunyoro, Hehe and Nandi",
            bigIdea: "African monarchs and spiritual leaders fiercely defended their sovereignty and lands against superior EuropeanMaxim guns.",
            learnIt: [
              "Omukama Kabalega of Bunyoro: resisted British invasion led by Colonel Colvile. Conducted brilliant guerrilla warfare from 1891 to 1899 before being captured in Lango alongside Kabaka Mwanga and exiled to Seychelles.",
              "Chief Mkwawa of the Hehe: resisted German encroachment in southern Tanganyika. Wiped out a German battalion at Lugalo in 1891 before conducting seven years of resistance.",
              "Koitalel Arap Samoei of the Nandi: led eleven years of resistance against British Uganda Railway construction across Nandi grazing lands in western Kenya before being lured to a peace meeting and assassinated by Colonel Meinertzhagen in 1905."
            ],
            tryThis: {
              question: "Which heroic king of Bunyoro-Kitara waged sustained guerrilla warfare against British colonial forces from 1891 until his capture in 1899?",
              choices: ["Omukama Kabalega", "Kabaka Mwanga II", "Chief Mkwawa", "Koitalel Arap Samoei"],
              correct: 0,
              explanation: "Kabalega stands out as one of East Africa's most formidable anti-colonial military strategists."
            }
          }
        ]
      }
    
      ,{
        subtopicId: "premium-premium-practice-colonisation-effects",
        title: "Premium Practice: Colonisation Effects",
        modules: [{
          moduleId: "foreign-rule-and-african-responses",
          title: "Foreign Rule and African Responses",
          bigIdea: "Colonisation questions should be balanced and specific.",
          learnIt: ["Europeans used treaties, companies, missionaries, soldiers and administrators.", "Some Africans resisted while others collaborated.", "Effects included schools and roads, but also loss of land, forced labour and taxes."],
          workedExample: { question: "Why did some Africans resist colonial rule?", steps: ["Colonial rule could take land and independence.", "Resistance defended freedom.", "State the reason clearly."], answer: "They resisted to protect land and independence." },
          tryThis: { question: "Which was a negative effect of colonial rule?", choices: ["Loss of land", "Complete African control", "No taxation", "No forced labour anywhere"], correct: 0, explanation: "Many Africans lost land." }
        }]
      }],
    quiz: [
      { q: "Which Scottish businessman founded the Imperial British East Africa Company (IBEAC) in 1888 to administer British spheres of influence?", choices: ["Sir William Mackinnon", "Captain Frederick Lugard", "Carl Peters", "John Speke"], correct: 0, why: "Mackinnon organized IBEAC under royal charter." },
      { q: "What was the main cause of the Maji Maji Rebellion (1905-1907) against German colonial rule in southern Tanganyika?", choices: ["Forced cultivation of cotton on communal plantations and brutal tax collection by Akidas", "Demand for free railway tickets", "Refusal to speak German", "Conflict over fishing rights"], correct: 0, why: "Forced labor and harsh Akida oppression triggered universal uprising." },
      { q: "Who was the spiritual and military leader of the Nandi people who resisted British railway construction across Kenya for eleven years?", choices: ["Koitalel Arap Samoei", "Chief Mkwawa", "Kinjeketile Ngwale", "Omukama Kabalega"], correct: 0, why: "Koitalel Arap Samoei led Nandi resistance until 1905." },
      { q: "In the 1900 Buganda Agreement, who signed on behalf of the infant Kabaka Daudi Chwa II alongside Sir Harry Johnston?", choices: ["Sir Apolo Kaggwa (Katikkiro) and fellow regents", "Omukama Kabalega", "Chief Mkwawa", "Bishop Hannington"], correct: 0, why: "Apolo Kaggwa negotiated the landmark 1900 constitutional treaty." },
      { q: "What administrative title did German colonial authorities assign to coastal agents imported to collect taxes and enforce direct rule in Tanganyika?", choices: ["Akidas", "Saza chiefs", "District Commissioners", "Prefects"], correct: 0, why: "Akidas exercised direct autocratic authority over local villages." },
      { q: "Why did European imperial powers rush to conquer East Africa during the late 19th century Scramble?", choices: ["To acquire industrial raw materials, secure consumer markets, and control the strategically vital source of the River Nile", "To escape European winter snow", "To learn traditional drumming", "To build leisure resort hotels"], correct: 0, why: "Economic and geopolitical imperial competition drove territorial annexation." },
      { q: "To which remote Indian Ocean island colony did the British exile Omukama Kabalega and Kabaka Mwanga after their capture in 1899?", choices: ["The Seychelles Islands", "Madagascar", "Zanzibar", "Ceylon"], correct: 0, why: "Exile to Seychelles isolated rebellious kings from their subjects." },
      { q: "Which German explorer signed dubious treaties with local chiefs in Tanganyika, prompting formal German imperial annexation?", choices: ["Carl Peters", "Otto von Bismarck", "Count Teleki", "Emin Pasha"], correct: 0, why: "Carl Peters headed the Society for German Colonization." }
    ]
  },
  {
    id: "p6-independence-eac",
    themeId: "sst-east-africa",
    themeName: "People and Resources of East Africa",
    title: "Road to Independence and the East African Community",
    estMinutes: 30,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "Why this matters: Nationalist struggles liberated East African nations from colonial exploitation, paving the way for regional economic sovereignty through the East African Community (EAC).",
      learningObjectives: [
        "Trace the rise of anti-colonial political parties in Tanganyika (TANU), Kenya (KANU), and Uganda (UNC/UPC).",
        "Highlight the contributions of founding nationalist statesmen: Julius Nyerere, Jomo Kenyatta, and Milton Obote.",
        "Explain the formation, organs, economic benefits, and operational challenges of the East African Community (EAC)."
      ],
      whatYouNeedToKnow: [
        "Tanganyika gained independence first in December 1961 under Mwalimu Julius Nyerere (TANU).",
        "Uganda achieved independence on 9th October 1962 under Apollo Milton Obote (UPC).",
        "Kenya gained independence on 12th December 1963 under Mzee Jomo Kenyatta after the Mau Mau liberation struggle.",
        "The East African Community promotes a Common Market, Customs Union, and freedom of movement across member states."
      ],
      worked: {
        problem: "State two major benefits experienced by East African citizens due to regional integration under the East African Community (EAC).",
        steps: [
          "Free movement of people and goods: abolition of visa fees and introduction of the East African passport facilitates regional trade and employment.",
          "Expanded market: producers and industrial manufacturers access a combined market of over 300 million consumers without paying internal customs tariffs."
        ],
        answer: "Free movement of citizens across borders and access to a duty-free regional market of over 300 million consumers."
      },
      recap: [
        "Ignatius Kangave Musaazi founded the Uganda National Congress (UNC) in 1952.",
        "The East African Court of Justice resolves legal disputes within the EAC."
      ]
    },
    subtopics: [
      {
        subtopicId: "nationalist-movements-ea",
        title: "1. Nationalist Parties and Independence Leaders",
        modules: [
          {
            moduleId: "nyerere-kenyatta-obote",
            title: "TANU, KANU, UPC and Independence Triumphs",
            bigIdea: "Nationalist political parties united teachers, trade unionists, and farmers to demand complete constitutional independence.",
            learnIt: [
              "Tanganyika (1961): Mwalimu Julius Nyerere transformed the Tanganyika African Association into TANU (Tanganyika African National Union) in 1954. Achieved peaceful independence on 9 Dec 1961. Later united with Zanzibar (Abeid Karume) in 1964 to form Tanzania.",
              "Uganda (1962): Ignatius Musaazi founded UNC in 1952. Apollo Milton Obote led the Uganda People's Congress (UPC) to win independence on 9 October 1962, with Sir Edward Muteesa II as President.",
              "Kenya (1963): Mzee Jomo Kenyatta led KANU (Kenya African National Union). Following the militant Mau Mau land uprising and Kenyatta's imprisonment, Kenya attained independence on 12 December 1963."
            ],
            tryThis: {
              question: "Which pioneering East African statesman led Tanganyika to independence in 1961 and later became the first President of the United Republic of Tanzania?",
              choices: ["Mwalimu Julius Nyerere", "Mzee Jomo Kenyatta", "Apollo Milton Obote", "Ignatius Musaazi"],
              correct: 0,
              explanation: "Julius Nyerere affectionately known as Mwalimu (Teacher) guided Tanzanian independence."
            }
          }
        ]
      },
      {
        subtopicId: "eac-regional-integration",
        title: "2. The East African Community (EAC)",
        modules: [
          {
            moduleId: "eac-organs-benefits",
            imageUrl: "/images/social-studies/mining-and-agriculture-processing.png",
            imageCaption: "Regional industries processing agricultural and mineral products for export across the duty-free East African Common Market.",
            title: "EAC Organs, Customs Union and Common Market",
            bigIdea: "Regional economic integration eliminates trade tariffs and coordinates infrastructure development across East Africa.",
            learnIt: [
              "Original EAC (1967-1977): formed by Nyerere, Kenyatta, and Obote; collapsed in 1977 due to ideological differences and unequal sharing of benefits.",
              "Revival (1999/2001): re-established by Presidents Museveni (Uganda), Mkapa (Tanzania), and Moi (Kenya).",
              "Key Organs: Summit of Heads of State; Council of Ministers; East African Legislative Assembly (EALA - makes regional laws); East African Court of Justice (ensures legal compliance); EAC Secretariat in Arusha.",
              "Pillars of Integration: Customs Union (zero tariffs on internal trade); Common Market (free labor and capital movement); Monetary Union (working toward a single currency); Political Federation."
            ],
            tryThis: {
              question: "Which legislative organ of the East African Community is responsible for debating and enacting regional laws for member states?",
              choices: ["East African Legislative Assembly (EALA)", "Summit of Heads of State", "East African Court of Justice", "EAC Secretariat"],
              correct: 0,
              explanation: "EALA serves as the regional parliamentary body representing all member countries."
            }
          }
        ]
      }
    
      ,{
        subtopicId: "premium-premium-practice-independence-and-eac",
        title: "Premium Practice: Independence and EAC",
        modules: [{
          moduleId: "explaining-cooperation-in-east-africa",
          title: "Explaining Cooperation in East Africa",
          bigIdea: "Independence and EAC questions connect freedom, cooperation and development.",
          learnIt: ["Independence means self-rule.", "East African countries cooperate through trade, transport, education and security.", "The EAC may face trade disagreements, insecurity and political differences."],
          workedExample: { question: "Why do East African countries cooperate?", steps: ["They share borders and resources.", "Cooperation helps trade and transport.", "It can improve peace and development."], answer: "They cooperate to promote trade, transport, peace and development." },
          tryThis: { question: "EAC stands for:", choices: ["East African Community", "Eastern Air Company", "European Aid Centre", "East Africa Climate"], correct: 0, explanation: "EAC means East African Community." }
        }]
      }],
    quiz: [
      { q: "Who founded the Uganda National Congress (UNC) in 1952, recognized as Uganda's first political party?", choices: ["Ignatius Kangave Musaazi", "Milton Obote", "Benedicto Kiwanuka", "Sir Apolo Kaggwa"], correct: 0, why: "Musaazi organized cooperative farmers into the UNC." },
      { q: "On what historical date did Uganda achieve independence from British colonial rule?", choices: ["9th October 1962", "12th December 1963", "9th December 1961", "1st July 1960"], correct: 0, why: "Uganda celebrates national independence every 9th October." },
      { q: "Which militant anti-colonial uprising in Kenya fought from the forests against British settler land expropriation during the 1950s?", choices: ["The Mau Mau Rebellion", "The Maji Maji Uprising", "The Abushiri Revolt", "The Hehe Resistance"], correct: 0, why: "Land freedom fighters led by Dedan Kimathi spearheaded the Mau Mau struggle." },
      { q: "Who became the first Executive Prime Minister of independent Uganda in 1962?", choices: ["Apollo Milton Obote", "Sir Edward Muteesa II", "Idi Amin Dada", "Godfrey Binaisa"], correct: 0, why: "Obote led the ruling UPC-KY coalition." },
      { q: "In which year did the original East African Community (founded in 1967) collapse before being successfully revived in 1999?", choices: ["1977", "1985", "1971", "1990"], correct: 0, why: "Political disputes led to the 1977 collapse of EAC assets." },
      { q: "What is the primary economic objective of the East African Customs Union?", choices: ["To eliminate internal trade tariffs and quotas on goods produced and traded among member states", "To close all border roads", "To stop citizens from traveling", "To force all countries to speak French"], correct: 0, why: "Customs unions remove internal duty barriers to stimulate intra-regional trade." },
      { q: "Which organ of the East African Community comprises the Presidents of all member states and provides supreme political direction?", choices: ["The Summit of Heads of State", "The Council of Ministers", "The East African Court of Justice", "The EALA Parliament"], correct: 0, why: "The Summit holds supreme decision-making authority." },
      { q: "Which nationalist leader served as President of KANU and led independent Kenya as its first President?", choices: ["Mzee Jomo Kenyatta", "Tom Mboya", "Oginga Odinga", "Ronald Ngala"], correct: 0, why: "Jomo Kenyatta steered post-independence Kenyan statehood." }
    ]
  }
];

export const P6_SOCIAL_TOPICS: Topic[] = balanceTopicAnswers(addUpperPrimarySocialV4(P6_SOCIAL_TOPICS_DATA, "P6", P6_SOCIAL_TERMS));

export function getP6SocialTopic(id: string): Topic | undefined {
  return P6_SOCIAL_TOPICS.find((topic) => topic.id === id);
}
