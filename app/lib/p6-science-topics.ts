import type { Topic } from "@/lib/topics";
import { addUpperPrimaryScienceV4 } from "@/lib/v4-science-helpers";
import { applyP6ScienceHeavyV4 } from "@/lib/p6-v4-heavy-lessons";


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

const P6_SCIENCE_TERMS: Record<string, "Term I" | "Term II" | "Term III"> = {
  "p6-classification-living-things": "Term I",
  "p6-sound-energy": "Term I",
  "p6-circulatory-system": "Term II",
  "p6-respiratory-system": "Term II",
  "p6-livestock-keeping": "Term III"
};

const P6_SCIENCE_TOPICS_DATA: Topic[] = [
  {
    id: "p6-classification-living-things",
    themeId: "p6-science-living-things",
    themeName: "Diversity of Living Things",
    title: "Classification of Living Things",
    estMinutes: 30,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "Why this matters: Biological classification groups millions of organisms by structural similarities, enabling P6 learners to distinguish warm-blooded mammals from cold-blooded reptiles, and seed-bearing crops from spore-reproducing ferns.",
      learningObjectives: [
        "Classify animals into five vertebrate classes (mammals, birds, reptiles, amphibians, fish) and major invertebrate groups.",
        "Compare flowering plants (monocotyledons vs dicotyledons) and non-flowering spore plants (ferns, mosses, fungi).",
        "Identify specific structural adaptations of organisms to aquatic, terrestrial, and parasitic lifestyles."
      ],
      whatYouNeedToKnow: [
        "Vertebrates possess an internal backbone/spine. Warm-blooded (homoiothermic) vertebrates maintain constant body temperature (mammals, birds); cold-blooded (poikilothermic) change temperature with surroundings (reptiles, amphibians, fish).",
        "Invertebrates lack a backbone. Arthropods possess jointed legs and exoskeletons (insects have 6 legs/3 body parts; arachnids have 8 legs/2 body parts).",
        "Monocots produce one seed leaf with parallel leaf veins and fibrous roots (maize, grass); Dicots produce two seed leaves with network veins and tap roots (beans, mango)."
      ],
      worked: {
        problem: "State two structural differences between an insect (such as a housefly) and an arachnid (such as a spider).",
        steps: [
          "Count walking legs: insects have 3 pairs (6 legs); arachnids have 4 pairs (8 legs).",
          "Count body divisions: insects have 3 body parts (head, thorax, abdomen); arachnids have 2 body parts (cephalothorax and abdomen)."
        ],
        answer: "Insects have 6 legs and 3 body parts; arachnids have 8 legs and 2 body parts."
      },
      recap: [
        "Bats and whales are mammals because they have body hair and nurse newborn young with milk.",
        "Fungi lack green chlorophyll and feed as saprophytic decomposers on dead matter."
      ]
    },
    subtopics: [
      {
        subtopicId: "classification-vertebrates",
        title: "1. Classification of Animals: Vertebrates and Invertebrates",
        modules: [
          {
            moduleId: "vertebrate-five-classes",
            imageUrl: "/images/science/human-skeleton.png",
            imageCaption: "Internal skeletal structure illustrating the vertebral column that defines all vertebrate animals.",
            title: "The Five Classes of Vertebrates",
            bigIdea: "Vertebrates possess an internal bony spine and are divided into homoiothermic (warm-blooded) and poikilothermic (cold-blooded) classes.",
            learnIt: [
              "Mammals: warm-blooded vertebrates covered with fur or hair. Give birth to live offspring (viviparous) and nourish young with mammary gland milk. Examples: human beings, cattle, whales, dolphins, bats.",
              "Birds (Aves): warm-blooded vertebrates covered with feathers, possessing wings and horny beaks. Lay hard calcareous eggs. Examples: eagles, weaver birds, hens, ostriches.",
              "Reptiles: cold-blooded vertebrates covered with dry, horny epidermal scales. Breathe exclusively through lungs and lay leathery eggs on land. Examples: crocodiles, tortoises, lizards, snakes.",
              "Amphibians: cold-blooded vertebrates leading a dual life. Lay jelly-like eggs in water; young tadpoles breathe through aquatic gills, metamorphosing into adult frogs/toads breathing through lungs and moist scaleless skin.",
              "Fish: cold-blooded aquatic vertebrates covered with overlapping slimy scales. Move using fins and breathe dissolved oxygen through gills."
            ],
            tryThis: {
              question: "Which flying animal is scientifically classified as a mammal because it possesses fur and feeds its newborn offspring with milk?",
              choices: ["Bat", "Eagle", "Weaver bird", "Hawk"],
              correct: 0,
              explanation: "Bats are unique flying mammals that give live birth and nurse their young."
            }
          },
          {
            moduleId: "invertebrate-arthropods",
            imageUrl: "/images/science/food-chain.png",
            imageCaption: "Ecosystem interactions illustrating invertebrates and vertebrates transferring food energy across trophic levels.",
            title: "Invertebrates: Arthropods, Molluscs and Worms",
            bigIdea: "Invertebrates represent over 90% of animal species, protected by chitinous exoskeletons or soft shells.",
            learnIt: [
              "Insects (Class Insecta): possess 6 jointed legs, 3 body regions (head, thorax, abdomen), one pair of antennae, and compound eyes (e.g., bees, mosquitoes, grasshoppers).",
              "Arachnids: possess 8 jointed legs and 2 body divisions without antennae or wings (e.g., spiders, ticks, scorpions).",
              "Crustaceans & Myriapods: crustaceans breathe with gills in water (crabs, crayfish); myriapods have elongated segmented bodies (centipedes have 1 leg pair per segment and venom claws; millipedes have 2 leg pairs per segment and feed on dead leaves).",
              "Worms & Molluscs: molluscs have soft unsegmented bodies often protected by calcium shells (snails, slugs, octopuses). Worms include flatworms (tapeworms), roundworms (ascaris), and segmented annelids (earthworms)."
            ],
            tryThis: {
              question: "How many walking legs and distinct body regions does a true biological insect possess?",
              choices: ["6 legs (3 pairs) and 3 body regions", "8 legs (4 pairs) and 2 body regions", "10 legs and 1 body region", "4 legs and 2 body regions"],
              correct: 0,
              explanation: "Three leg pairs attached to the thorax define class Insecta."
            }
          }
        ]
      },
      {
        subtopicId: "classification-plants",
        title: "2. Classification of Plants: Flowering vs Non-Flowering",
        modules: [
          {
            moduleId: "flowering-monocots-dicots",
            title: "Monocotyledonous vs Dicotyledonous Flowering Plants",
            bigIdea: "Flowering plants reproduce by seeds enclosed inside botanical fruits, categorized by cotyledon seed leaf count.",
            learnIt: [
              "Monocotyledons: seeds contain 1 cotyledon (seed leaf). Leaves display parallel venation. Roots form a shallow fibrous root system. Vascular bundles are scattered. Examples: maize, sorghum, rice, sugarcane, grass, millet, bamboo.",
              "Dicotyledons: seeds contain 2 cotyledons. Leaves display network (reticulate) venation. Roots develop a deep central tap root system with lateral branches. Vascular bundles form a ring. Examples: beans, peas, groundnuts, mango, avocado, cassava."
            ],
            tryThis: {
              question: "Which characteristic leaf venation and root system define monocotyledonous crops such as maize and sugarcane?",
              choices: ["Parallel leaf veins and a fibrous root system", "Network leaf veins and a tap root system", "No veins and floating roots", "Thorn leaves and aerial roots"],
              correct: 0,
              explanation: "Parallel veins and fibrous roots are hallmark traits of monocot crops."
            }
          },
          {
            moduleId: "nonflowering-spore-plants",
            title: "Spore-Bearing Plants: Ferns, Mosses, Conifers and Fungi",
            bigIdea: "Non-flowering plants reproduce via microscopic spores or naked cones rather than true flowers.",
            learnIt: [
              "Ferns (Pteridophytes): vascular green plants with frond leaves. Produce brown spore clusters called sori on the underside of mature fronds.",
              "Mosses (Bryophytes): tiny non-vascular green plants forming carpet mats in damp, shaded habitats. Absorb water directly across cells.",
              "Conifers (Gymnosperms): produce needle-like evergreen foliage and bear naked seeds inside woody pine or cedar cones.",
              "Fungi (Mushrooms, Toadstools, Moulds): lack green chlorophyll. Feed as saprophytes by secreting digestive enzymes onto rotting wood or dead organic matter."
            ],
            tryThis: {
              question: "Where do ferns produce the microscopic reproductive spore structures called sori?",
              choices: ["On the underside of their mature frond leaves", "Inside sweet fleshy berries", "Inside underground bulbs", "On white flower petals"],
              correct: 0,
              explanation: "Sori appear as brown dots on the lower surface of fern fronds."
            }
          }
        ]
      }
    
      ,{
        subtopicId: "premium-premium-practice-classifying-organisms",
        title: "Premium Practice: Classifying Organisms",
        modules: [{
          moduleId: "using-clues-to-classify-living-things",
          title: "Using Clues to Classify Living Things",
          bigIdea: "Classification becomes easier when learners look for observable features before naming a group.",
          learnIt: ["Decide first whether the organism is a plant or an animal.", "For animals, check backbone, body covering, breathing organ and reproduction.", "For plants, check flowers, seeds, spores, leaves and roots."],
          workedExample: { question: "An animal has feathers, wings, a beak and lays eggs. Which class is it?", steps: ["Feathers and a beak are key clues.", "Laying eggs supports the choice.", "These features identify a bird."], answer: "It is a bird." },
          tryThis: { question: "Which group has a backbone?", choices: ["Vertebrates", "Invertebrates", "Fungi", "Mosses"], correct: 0, explanation: "Vertebrates have backbones." }
        }]
      }],
    quiz: [
      { q: "Which animal group consists of warm-blooded vertebrates covered with feathers that lay hard-shelled eggs?", choices: ["Birds (Aves)", "Mammals", "Reptiles", "Amphibians"], correct: 0, why: "Feathers and hard eggs define avian biology." },
      { q: "What fundamental anatomical feature separates vertebrate animals from invertebrate animals?", choices: ["Vertebrates possess an internal backbone/spine while invertebrates lack a backbone", "Vertebrates live in water only", "Invertebrates have bones", "Vertebrates fly"], correct: 0, why: "The vertebral column distinguishes vertebrates." },
      { q: "Which non-flowering plant reproduces by microscopic spores clustered in sori on the underside of its fronds?", choices: ["Fern", "Maize", "Bean", "Mango"], correct: 0, why: "Ferns reproduce via leaf-underside sori." },
      { q: "Which class of cold-blooded vertebrates breathe through gills and move using paired and unpaired fins in aquatic habitats?", choices: ["Fish", "Amphibians", "Reptiles", "Mammals"], correct: 0, why: "Fish are adapted for aquatic gill respiration." },
      { q: "What characteristic distinguishes monocotyledonous crops from dicotyledonous crops?", choices: ["Monocots have one seed leaf, parallel leaf veins, and fibrous roots", "Monocots have two seed leaves and tap roots", "Dicots have no roots", "Monocots produce no seeds"], correct: 0, why: "Seed leaf count, venation, and roots define plant classes." },
      { q: "Why are frogs and toads biologically classified as amphibians?", choices: ["They live part of their life cycle in water breathing with gills and part on land breathing with lungs and moist skin", "They have feathers", "They lay hard eggs", "They have warm blood"], correct: 0, why: "Amphibians lead a dual aquatic and terrestrial existence." },
      { q: "Which group of jointed invertebrates includes spiders, ticks, and scorpions possessing 8 walking legs and 2 body parts?", choices: ["Arachnids", "Insects", "Crustaceans", "Myriapods"], correct: 0, why: "Arachnids possess 4 leg pairs and lack antennae." },
      { q: "Which non-green organism lacks chlorophyll and obtains nutrition as a saprophytic decomposer on rotting organic matter?", choices: ["Mushroom / Fungi", "Maize", "Algae", "Grass"], correct: 0, why: "Fungi decompose dead matter saprophytically." }
    ]
  },
  {
    id: "p6-sound-energy",
    themeId: "p6-science-living-things",
    themeName: "Diversity of Living Things & Energy",
    title: "Sound Energy and the Human Ear",
    estMinutes: 25,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "Why this matters: Sound energy enables human communication and warning alarms. P6 learners must understand mechanical vibration, pitch control, echolocation, and ear hygiene.",
      learningObjectives: [
        "Explain how sound waves are generated by mechanical vibration and transmitted through solids, liquids, and gases.",
        "Distinguish between pitch (frequency), volume (amplitude), and reflected echoes.",
        "Describe the anatomical structure and hearing mechanism of the human ear parts.",
        "Identify ear care hygiene practices and prevent permanent eardrum deafness."
      ],
      whatYouNeedToKnow: [
        "Sound travels fastest through closely packed solid particles, slower in liquids, and slowest in air gases. It cannot propagate through a vacuum.",
        "High frequency vibrations produce high-pitched notes; forceful high amplitude vibrations produce loud volume.",
        "The inner ear cochlea converts mechanical vibrations into electrical nerve impulses sent to the auditory cortex."
      ],
      worked: {
        problem: "Explain why sound travels significantly faster through a solid wooden desk than through atmospheric air.",
        steps: [
          "Particle density: molecules in a solid desk are tightly bonded and touching one another.",
          "Vibration transfer: vibrating particles collide instantly with adjacent particles, transferring mechanical sound waves at high speed."
        ],
        answer: "Closely packed solid particles transfer mechanical vibrations instantly compared to spaced air particles."
      },
      recap: [
        "Bats and dolphins navigate in pitch darkness using echolocation echoes.",
        "Never push matchsticks or hairpins into the ear canal."
      ]
    },
    subtopics: [
      {
        subtopicId: "sound-production-travel",
        title: "1. Sound Production, Speed and Echo Reflection",
        modules: [
          {
            moduleId: "sound-vibrations-media",
            title: "Mechanical Vibrations and Speed in Solids, Liquids and Gases",
            bigIdea: "Sound is a mechanical longitudinal wave generated by vibrating bodies requiring material media to propagate.",
            learnIt: [
              "Sound generation: plucking guitar strings, striking drum membranes, or blowing across flute reeds sets air molecules into mechanical oscillation.",
              "Media transmission speed: Sound travels fastest in solids (~5,000 m/s in steel) because particles touch directly. Slower in liquids (~1,500 m/s in water). Slowest in gases (~330 m/s in air).",
              "Vacuum barrier: sound cannot travel through outer space or an evacuated bell jar because zero physical particles exist to transfer vibrations."
            ],
            tryThis: {
              question: "Why is it impossible for astronauts standing on the surface of the moon to hear each other speaking without radio communication headsets?",
              choices: ["Because outer space is a vacuum lacking physical air particles to transmit sound vibrations", "Because the moon is extremely cold", "Because space helmets block light", "Because lunar gravity is too weak"],
              correct: 0,
              explanation: "Sound mechanical waves require physical matter to travel."
            }
          },
          {
            moduleId: "pitch-volume-echoes",
            title: "Pitch, Volume and Echolocation Echoes",
            bigIdea: "Vibration frequency dictates note pitch, while hard acoustic barriers bounce waves back as echoes.",
            learnIt: [
              "Pitch vs Frequency: Pitch is the highness or lowness of sound. High frequency (many vibrations per second / tight thin strings) produces high pitch. Low frequency (slack thick strings) produces low pitch.",
              "Volume vs Amplitude: Volume is the loudness of sound determined by the force of vibration (amplitude).",
              "Echo reflection: when sound strikes a hard, smooth cliff or wall, it bounces back as an echo. Soft fabrics and acoustic foam absorb sound to prevent echo."
            ],
            tryThis: {
              question: "What happens to the pitch of a musical sound when a guitarist tightens a string to higher tension?",
              choices: ["It vibrates faster, producing a higher-pitched sound", "It vibrates slower, producing a lower pitch", "It produces zero sound", "It turns into a percussion beat"],
              correct: 0,
              explanation: "Tighter strings oscillate at higher frequencies, raising note pitch."
            }
          }
        ]
      },
      {
        subtopicId: "human-ear-structure",
        title: "2. Structure, Mechanism and Hygiene of the Human Ear",
        modules: [
          {
            moduleId: "ear-anatomy-hearing",
            title: "Outer, Middle and Inner Ear Parts",
            bigIdea: "The ear funnels sound waves across the eardrum, amplifies them via ossicles, and converts them into nerve signals.",
            learnIt: [
              "Outer Ear: Pinna (auricle) acts as an acoustic funnel collecting atmospheric sound waves into the ear canal, striking the tympanic membrane (eardrum).",
              "Middle Ear: three tiny ossicle bones—Hammer (Malleus), Anvil (Incus), and Stirrup (Stapes)—amplify eardrum vibrations 20 times. The Eustachian tube equalizes air pressure across the eardrum.",
              "Inner Ear: snail-shaped Cochlea filled with fluid and sensory hair cells converts vibrations into electrical impulses sent via the Auditory nerve to the brain. Semi-circular canals balance body posture."
            ],
            tryThis: {
              question: "Which snail-shaped structure inside the inner ear converts mechanical sound vibrations into electrical nerve impulses sent to the brain?",
              choices: ["Cochlea", "Pinna", "Eardrum", "Eustachian tube"],
              correct: 0,
              explanation: "The cochlea contains auditory sensory hair cells."
            }
          },
          {
            moduleId: "ear-hygiene-deafness",
            title: "Preventing Eardrum Perforation and Deafness",
            bigIdea: "Protecting the delicate tympanic membrane from sharp probes and explosive decibels prevents permanent hearing loss.",
            learnIt: [
              "Causes of deafness: puncturing the eardrum with matchsticks/hairpins, untreated middle ear pus infections (otitis media), or prolonged exposure to industrial machinery decibels.",
              "Ear hygiene: wash the outer pinna with clean water and soap. Never insert hard or sharp objects to clean wax (earwax is naturally expelled). Open your mouth during explosive thunder to allow the Eustachian tube to balance eardrum pressure."
            ],
            tryThis: {
              question: "Why should a P6 learner avoid inserting sharp objects such as matchsticks or hairpins into the ear canal?",
              choices: ["They can puncture or rupture the delicate eardrum membrane, causing permanent deafness", "They make earwax grow faster", "They cause malaria fever", "They make ears itch"],
              correct: 0,
              explanation: "A perforated eardrum cannot vibrate to transmit sound to middle ear bones."
            }
          }
        ]
      }
    
      ,{
        subtopicId: "premium-premium-practice-sound-in-daily-life",
        title: "Premium Practice: Sound in Daily Life",
        modules: [{
          moduleId: "explaining-echoes-pitch-and-ear-care",
          title: "Explaining Echoes, Pitch and Ear Care",
          bigIdea: "Sound questions connect vibration, medium, pitch and safe hearing habits.",
          learnIt: ["Sound is produced by vibrating objects.", "Pitch depends on frequency of vibration.", "Protect the ear from loud sounds, sharp objects and dirty water."],
          workedExample: { question: "Why can sound not travel through a vacuum?", steps: ["Sound needs particles to pass vibrations.", "A vacuum has no particles.", "Therefore sound cannot travel through it."], answer: "Because sound needs a material medium." },
          tryThis: { question: "Which sound has a higher pitch?", choices: ["Fast vibration", "Slow vibration", "No vibration", "Silent object"], correct: 0, explanation: "Higher pitch is caused by faster vibrations." }
        }]
      }],
    quiz: [
      { q: "In which physical medium does sound energy travel at the highest speed?", choices: ["Solids (e.g., steel / timber)", "Liquids (water)", "Gases (atmospheric air)", "Vacuum"], correct: 0, why: "Closely bonded solid particles transfer mechanical vibrations instantly." },
      { q: "What is the reflection of a sound wave bouncing back from a hard barrier called?", choices: ["An echo", "A shadow", "A rainbow", "A refraction"], correct: 0, why: "Echoes occur when acoustic waves reflect off hard obstacles." },
      { q: "What scientific property determines the pitch (highness or lowness) of a musical note?", choices: ["Frequency of vibration (vibrations per second)", "Force of plucking amplitude", "Weight of the instrument", "Color of the string"], correct: 0, why: "High frequency produces high-pitched notes." },
      { q: "Which part of the outer ear acts as an acoustic funnel collecting atmospheric sound waves into the ear canal?", choices: ["The Pinna", "The Cochlea", "The Eardrum", "The Stirrup"], correct: 0, why: "The external pinna gathers sound waves." },
      { q: "Which internal tube connects the middle ear cavity to the back of the throat to equalize air pressure across the eardrum?", choices: ["Eustachian tube", "Ear canal", "Trachea", "Fallopian tube"], correct: 0, why: "The Eustachian tube equalizes tympanic pressure." },
      { q: "Which animals use echolocation (emitting high-pitched squeaks and listening for returning echoes) to hunt flying insects in pitch darkness?", choices: ["Bats", "Lions", "Owls", "Chameleons"], correct: 0, why: "Bats navigate and hunt using ultrasonic echoes." },
      { q: "What happens when a guitar string is tightened to a higher mechanical tension?", choices: ["It vibrates faster at a higher frequency, producing a higher-pitched sound", "It vibrates slower", "It produces zero sound", "It turns into a drum beat"], correct: 0, why: "Taut thin strings oscillate rapidly." },
      { q: "Which inner ear structures are responsible for maintaining human body balance and posture rather than hearing?", choices: ["Semi-circular canals", "Cochlea", "Pinna", "Eardrum"], correct: 0, why: "Fluid in the semi-circular canals detects head equilibrium." }
    ]
  },
  {
    id: "p6-circulatory-system",
    themeId: "p6-science-living-things",
    themeName: "Diversity of Living Things & Anatomy",
    title: "The Human Circulatory System",
    estMinutes: 30,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "Why this matters: The circulatory system acts as the body's internal transport network, pumping oxygen, glucose nutrients, hormones, and immune white blood cells to all living tissues.",
      learningObjectives: [
        "Describe the anatomical structure and pumping mechanism of the four-chambered human heart.",
        "Compare structural and functional adaptations of arteries, veins, and capillaries.",
        "Identify components of blood (plasma, RBCs, WBCs, platelets) and their physiologic roles.",
        "Explain circulatory disorders including hypertension, nutritional anaemia, and sickle cell disease."
      ],
      whatYouNeedToKnow: [
        "The heart features upper receiving atria and thick lower pumping ventricles separated by one-way bicuspid/tricuspid valves.",
        "Arteries carry blood away from the heart under high pulse pressure (thick elastic walls, no valves). Veins return blood to the heart under low pressure (thin walls, internal pocket valves).",
        "Haemoglobin in red blood cells binds lung oxygen to form oxyhaemoglobin."
      ],
      worked: {
        problem: "Contrast the structural adaptations of arteries and veins in the human body.",
        steps: [
          "Arteries: possess thick, elastic muscular walls with a narrow lumen to withstand high ventricular pumping pressure; lack internal valves.",
          "Veins: possess thin walls with a wide lumen carrying low-pressure blood; equipped with one-way pocket valves along their length to prevent backflow."
        ],
        answer: "Arteries have thick elastic walls without valves; veins have thin walls with one-way valves."
      },
      recap: [
        "The pulmonary artery is the only artery carrying deoxygenated blood.",
        "Platelets form fibrin clots at open cuts to stop excessive bleeding."
      ]
    },
    subtopics: [
      {
        subtopicId: "heart-blood-vessels",
        title: "1. Heart Anatomy and Double Circulation",
        modules: [
          {
            moduleId: "heart-four-chambers",
            title: "Atria, Ventricles, Valves and Circulation Pathway",
            bigIdea: "The heart functions as a synchronized double muscular pump driving pulmonary and systemic circulation.",
            learnIt: [
              "Heart chambers: Right Atrium receives deoxygenated blood returning from body organs via the Vena Cava; Right Ventricle pumps deoxygenated blood to the lungs via the Pulmonary Artery.",
              "Systemic pump: Left Atrium receives oxygen-rich blood from lungs via the Pulmonary Vein; thick muscular Left Ventricle pumps oxygenated blood at immense pressure through the Aorta to all body systems.",
              "Valves: Tricuspid valve guards right chambers; Bicuspid (Mitral) valve guards left chambers. Semi-lunar valves guard aortic and pulmonary exits, ensuring one-way forward flow."
            ],
            tryThis: {
              question: "Which chamber of the human heart has the thickest muscular wall because it must pump oxygenated blood at high pressure through the aorta to the entire body?",
              choices: ["Left Ventricle", "Right Ventricle", "Right Atrium", "Left Atrium"],
              correct: 0,
              explanation: "The Left Ventricle requires powerful muscular force to drive systemic circulation."
            }
          },
          {
            moduleId: "arteries-veins-capillaries",
            title: "Arteries, Veins and Exchange Capillaries",
            bigIdea: "Vascular structures adapt their wall thickness and valves to arterial pulse pressure or low venous return.",
            learnIt: [
              "Arteries: transport blood AWAY from the heart. All carry oxygenated blood except the Pulmonary Artery. Thick elastic walls absorb heart beat pulse.",
              "Veins: transport blood TOWARD the heart. All carry deoxygenated blood except the Pulmonary Vein. Internal pocket valves prevent low-pressure backward pooling.",
              "Capillaries: microscopic vessels connecting arterioles to venules. Walls are exactly one cell thick, allowing rapid diffusion of dissolved oxygen and glucose out to cells while absorbing carbon dioxide waste."
            ],
            tryThis: {
              question: "Why do veins possess internal one-way pocket valves along their length while arteries do not?",
              choices: ["To prevent the backward flow of low-pressure blood returning toward the heart", "To generate high blood pressure", "To produce white blood cells", "To filter urea out of plasma"],
              correct: 0,
              explanation: "Valves ensure unidirectional return flow against gravity."
            }
          }
        ]
      },
      {
        subtopicId: "blood-components-disorders",
        title: "2. Components of Blood and Circulatory Health",
        modules: [
          {
            moduleId: "plasma-rbc-wbc-platelets",
            title: "Plasma, Erythrocytes, Leukocytes and Platelets",
            bigIdea: "Blood is a liquid tissue performing transport, immune defense, and clotting wound repair.",
            learnIt: [
              "Plasma: yellowish liquid matrix (90% water) carrying dissolved digested glucose, amino acids, hormones, antibodies, and excretory urea.",
              "Red Blood Cells (Erythrocytes): biconcave discs lacking nuclei. Contain iron-rich red pigment Haemoglobin that binds oxygen.",
              "White Blood Cells (Leukocytes): immune defenders. Phagocytes engulf and digest invading disease bacteria; lymphocytes manufacture neutralizing antibodies.",
              "Platelets (Thrombocytes): cell fragments that release clotting enzymes upon contact with open air, weaving a fibrin mesh plug to seal bleeding wounds."
            ],
            tryThis: {
              question: "Which specific blood cells act as immune defenders by engulfing invading disease germs or producing antibodies?",
              choices: ["White blood cells (Leukocytes)", "Red blood cells", "Platelets", "Plasma"],
              correct: 0,
              explanation: "WBCs patrol vascular channels to destroy pathogens."
            }
          },
          {
            moduleId: "circulatory-disorders-hygiene",
            title: "Hypertension, Anaemia, Sickle Cell and Heart Hygiene",
            bigIdea: "Regular aerobic exercise and low-salt nutrition safeguard cardiovascular vessels from chronic disease.",
            learnIt: [
              "Anaemia: deficiency of red blood cells or iron haemoglobin causing severe fatigue and pale skin. Prevented by eating iron-rich foods (liver, dark green vegetables, beans).",
              "Hypertension (High Blood Pressure): excessive vascular pressure caused by fatty plaque buildup, obesity, or high salt intake.",
              "Sickle Cell Anaemia: hereditary genetic condition where RBCs distort into rigid crescent sickle shapes, blocking capillaries and causing severe joint pain crises.",
              "Heart hygiene: perform regular physical exercise, avoid tobacco smoking, and limit saturated animal fats."
            ],
            tryThis: {
              question: "What nutritional condition occurs when a person's blood has a deficiency of red blood cells or iron haemoglobin?",
              choices: ["Anaemia", "Malaria", "Rickets", "Polio"],
              correct: 0,
              explanation: "Iron deficiency impairs oxygen transport, resulting in anaemia fatigue."
            }
          }
        ]
      }
    
      ,{
        subtopicId: "premium-premium-practice-blood-and-heart-cases",
        title: "Premium Practice: Blood and Heart Cases",
        modules: [{
          moduleId: "explaining-circulation-clearly",
          title: "Explaining Circulation Clearly",
          bigIdea: "Circulation questions connect heart, blood vessels and blood components.",
          learnIt: ["The heart pumps blood around the body.", "Arteries carry blood away from the heart; veins carry blood back.", "Red blood cells carry oxygen, white blood cells fight germs and platelets help clotting."],
          workedExample: { question: "Why is blood important during exercise?", steps: ["Muscles need more oxygen during exercise.", "Blood carries oxygen to body cells.", "The heart pumps faster to deliver oxygen."], answer: "Blood carries oxygen to working muscles." },
          tryThis: { question: "Which blood cells fight germs?", choices: ["White blood cells", "Red blood cells", "Platelets", "Plasma only"], correct: 0, explanation: "White blood cells fight germs." }
        }]
      }],
    quiz: [
      { q: "Which blood vessel carries deoxygenated blood away from the right ventricle directly to the lungs?", choices: ["Pulmonary artery", "Pulmonary vein", "Aorta", "Vena Cava"], correct: 0, why: "Pulmonary artery is the only artery carrying deoxygenated blood." },
      { q: "Why do internal veins possess one-way pocket valves along their length?", choices: ["To prevent the backward flow of blood moving at low pressure toward the heart", "To increase heart rate", "To destroy platelets", "To generate body heat"], correct: 0, why: "Valves ensure unidirectional low-pressure venous return." },
      { q: "What red iron-containing protein inside red blood cells binds oxygen from the lungs?", choices: ["Haemoglobin", "Chlorophyll", "Insulin", "Melanin"], correct: 0, why: "Haemoglobin forms oxyhaemoglobin during respiration." },
      { q: "Which chamber of the heart receives deoxygenated blood returning from body tissues via the vena cava?", choices: ["Right Atrium", "Left Atrium", "Right Ventricle", "Left Ventricle"], correct: 0, why: "Systemic venous return empties into the Right Atrium." },
      { q: "Which blood cells act as soldiers defending the body against invading disease germs?", choices: ["White blood cells (Leukocytes)", "Red blood cells", "Platelets", "Nerve cells"], correct: 0, why: "WBCs phagocytose pathogens and manufacture antibodies." },
      { q: "What is the average resting human heart beat pulse rate in healthy adults?", choices: ["About 70 to 72 beats per minute", "10 beats per minute", "200 beats per minute", "5 beats per minute"], correct: 0, why: "Normal cardiac output maintains stable pulse frequency." },
      { q: "Which microscopic blood vessels connect small arteries (arterioles) to small veins (venules) allowing nutrient exchange?", choices: ["Capillaries", "Aortas", "Tracheas", "Ureters"], correct: 0, why: "Thin one-cell thick capillary walls enable rapid tissue gas exchange." },
      { q: "What condition occurs when a person's blood has a deficiency of red blood cells or iron haemoglobin?", choices: ["Anaemia", "Malaria", "Rickets", "Hypermetropia"], correct: 0, why: "Anaemia causes fatigue due to inadequate oxygen transport." }
    ]
  },
  {
    id: "p6-respiratory-system",
    themeId: "p6-science-living-things",
    themeName: "Diversity of Living Things & Anatomy",
    title: "The Human Respiratory System",
    estMinutes: 25,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "Why this matters: Breathing draws atmospheric oxygen into lung alveoli for cellular aerobic energy release and expels metabolic carbon dioxide waste.",
      learningObjectives: [
        "Trace the pathway of inhaled air from nostrils through the trachea down to alveolar air sacs.",
        "Explain the mechanical action of the diaphragm sheet and intercostal rib muscles during inhalation and exhalation.",
        "Identify respiratory diseases (TB, pneumonia, asthma) and the carcinogenic hazards of tobacco smoking tar."
      ],
      whatYouNeedToKnow: [
        "Air pathway: Nostrils -> Pharynx -> Larynx (voice box) -> Trachea (windpipe) -> Bronchi -> Bronchioles -> Alveoli.",
        "During inhalation, the diaphragm contracts downward and ribs move up/out, enlarging chest volume to suck air in.",
        "Alveoli provide a massive moist surface area surrounded by dense capillaries for rapid oxygen diffusion."
      ],
      worked: {
        problem: "Explain why human beings should breathe through their nostrils rather than through their open mouths.",
        steps: [
          "Filtration: nasal hairs (cilia) trap airborne dust particles and bacterial spores.",
          "Conditioning: nasal mucus warms and humidifies cold dry air before it enters delicate lung tissues."
        ],
        answer: "Nostrils filter out dust, warm, and moisten incoming air to protect delicate lung tissues."
      },
      recap: [
        "Cartilaginous C-rings keep the trachea permanently open during pressure changes.",
        "The epiglottis flap closes over the windpipe during swallowing to prevent choking."
      ]
    },
    subtopics: [
      {
        subtopicId: "breathing-organs-mechanics",
        title: "1. Respiratory Organs and Mechanics of Breathing",
        modules: [
          {
            moduleId: "airway-pathway-alveoli",
            imageUrl: "/images/science/carbon-oxygen-cycle.png",
            imageCaption: "Gas exchange diagram illustrating oxygen diffusing into alveolar capillaries and carbon dioxide exhaled.",
            title: "Trachea Rings, Alveoli Gas Exchange and Diaphragm Action",
            bigIdea: "Respiratory organs maximize surface area for gas diffusion while muscular diaphragm contraction drives breathing mechanics.",
            learnIt: [
              "Trachea adaptations: reinforced by C-shaped rings of cartilage along its length to prevent airway collapse when chest pressure drops during inhalation.",
              "Alveoli gas exchange: thin one-cell thick walls covered in moisture dissolve oxygen gas, which diffuses instantly across capillary membranes into red blood cells.",
              "Inhalation mechanics: diaphragm contracts flattens downward; intercostal muscles lift ribcage upward and outward. Thoracic volume increases, lowering lung air pressure so atmospheric air rushes in.",
              "Exhalation mechanics: diaphragm relaxes arching upward into a high dome; ribcage drops downward and inward. Shrinking chest volume compresses lungs forcing carbon dioxide out."
            ],
            tryThis: {
              question: "What happens to the muscular diaphragm sheet at the base of the chest cavity during inhalation (breathing in)?",
              choices: ["It contracts and flattens downward, enlarging chest volume", "It relaxes upward into a high dome shape", "It stops vibrating", "It turns into bone"],
              correct: 0,
              explanation: "Downward diaphragm contraction creates suction pulling fresh air into expanding lungs."
            }
          }
        ]
      },
      {
        subtopicId: "respiratory-diseases-hazards",
        title: "2. Respiratory Diseases and Dangers of Smoking",
        modules: [
          {
            moduleId: "tb-pneumonia-smoking",
            title: "Tuberculosis, Pneumonia, Asthma and Tobacco Tar",
            bigIdea: "Airborne pathogens and toxic tobacco smoke chemicals destroy alveolar elasticity and paralyze airway cilia.",
            learnIt: [
              "Tuberculosis (TB): highly contagious bacterial infection caused by Mycobacterium tuberculosis. Spreads via coughing droplets. Symptoms include chronic cough, chest pain, and night sweats. Prevented in infants by BCG vaccination.",
              "Pneumonia: acute bacterial or viral infection causing fluid accumulation inside lung alveoli, causing severe shortness of breath.",
              "Asthma: allergic inflammatory airway constriction causing wheezing and tightness.",
              "Hazards of Tobacco Smoking: cigarette smoke contains poisonous Nicotine (addictive stimulant), Carbon Monoxide (binds haemoglobin displacing oxygen), and carcinogenic Tar (coats alveolar membranes causing lung cancer and emphysema)."
            ],
            tryThis: {
              question: "Which poisonous, sticky chemical present in tobacco cigarette smoke coats lung alveoli and is the leading cause of lung cancer?",
              choices: ["Carcinogenic Tar", "Vitamin C", "Glucose sugar", "Calcium"],
              correct: 0,
              explanation: "Tar deposits black soot that destroys delicate alveolar exchange surfaces."
            }
          }
        ]
      }
    
      ,{
        subtopicId: "premium-premium-practice-breathing-and-health",
        title: "Premium Practice: Breathing and Health",
        modules: [{
          moduleId: "gas-exchange-and-respiratory-care",
          title: "Gas Exchange and Respiratory Care",
          bigIdea: "Respiration questions connect breathing organs to oxygen, carbon dioxide and healthy habits.",
          learnIt: ["Air enters through the nose and reaches the lungs.", "In air sacs, oxygen enters blood and carbon dioxide leaves blood.", "Smoking, dust and polluted air can damage lungs."],
          workedExample: { question: "Why are air sacs useful in the lungs?", steps: ["Air sacs have thin walls.", "They are surrounded by capillaries.", "This allows gas exchange."], answer: "They allow exchange of oxygen and carbon dioxide." },
          tryThis: { question: "Which gas is needed by body cells?", choices: ["Oxygen", "Carbon dioxide", "Smoke", "Dust"], correct: 0, explanation: "Cells use oxygen to release energy." }
        }]
      }],
    quiz: [
      { q: "Where inside the human lungs does gas exchange between inhaled air and circulating blood occur?", choices: ["Inside the microscopic air sacs called Alveoli", "Inside the throat", "Inside the stomach", "Inside the kidneys"], correct: 0, why: "Alveoli provide thin vascular surfaces for oxygen diffusion." },
      { q: "Why does the trachea (windpipe) have C-shaped rings of cartilage along its length?", choices: ["To keep the airway tube permanently open and prevent it from collapsing during breathing", "To trap food", "To produce speech", "To digest air"], correct: 0, why: "Cartilaginous rings prevent tracheal tube collapse under pressure changes." },
      { q: "Which highly contagious lung disease is caused by Mycobacterium tuberculosis bacteria causing chronic cough and chest pain?", choices: ["Tuberculosis (TB)", "Malaria", "Scabies", "Rickets"], correct: 0, why: "TB attacks pulmonary tissue and spreads via coughing droplets." },
      { q: "What poisonous addictive chemical present in tobacco cigarette smoke paralyzes airway cilia and causes lung cancer?", choices: ["Tar and Nicotine", "Sugar", "Calcium", "Vitamin D"], correct: 0, why: "Carcinogenic tar coats alveolar membranes impairing oxygen absorption." },
      { q: "During exhalation (breathing out), what happens to the ribs and chest cavity volume?", choices: ["Ribs move downward and inward, reducing chest cavity volume", "Ribs move upward and outward", "Chest volume doubles", "Lungs freeze"], correct: 0, why: "Decreasing thoracic volume forces respiratory gases out." },
      { q: "Which voice box structure located at the top of the trachea houses vocal cords producing sound when air passes across them?", choices: ["Larynx", "Pharynx", "Esophagus", "Ureter"], correct: 0, why: "The larynx vibrates air to generate vocal phonation." },
      { q: "What flap of cartilage automatically closes over the trachea entrance during swallowing to prevent food from choking the lungs?", choices: ["Epiglottis", "Diaphragm", "Alveolus", "Aorta"], correct: 0, why: "The epiglottis guards the windpipe against food entry." },
      { q: "Which respiratory condition involves allergic or irritant narrowing and wheezing constriction of bronchial tubes?", choices: ["Asthma", "Polio", "Cholera", "Anaemia"], correct: 0, why: "Asthma causes reversible bronchial airway inflammation." }
    ]
  },
  {
    id: "p6-livestock-keeping",
    themeId: "p6-science-living-things",
    themeName: "Diversity of Living Things & Agriculture",
    title: "Cattle and Poultry Keeping",
    estMinutes: 30,
    status: "published",
    reviewStatus: "verified",
    note: {
      intro: "Why this matters: Livestock husbandry provides high-grade protein nutrition (milk, eggs, meat), farm household income, and organic kraal manure for East African agriculture.",
      learningObjectives: [
        "Compare indigenous cattle breeds (Zebu, Ankole Longhorn) with exotic dairy (Friesian, Jersey) and beef (Hereford) breeds.",
        "Describe poultry management housing systems (deep litter vs battery cage) and disease prevention.",
        "Identify livestock parasites (ticks, tsetse flies) and vectors transmitting East Coast Fever and Nagana."
      ],
      whatYouNeedToKnow: [
        "Exotic dairy cattle yield high milk volumes but require intensive zero-grazing care; indigenous cattle are hardy against heat and tick diseases.",
        "Deep litter housing places dry wood shavings on the coop floor to absorb moisture and produce farm manure.",
        "Brown ear ticks transmit East Coast Fever (ECF); regular plunge dipping or acaricide spraying breaks vector cycles."
      ],
      worked: {
        problem: "Explain two advantages of the Deep Litter housing system over the Free Range system in poultry management.",
        steps: [
          "Security: birds are protected from wild hawks, dogs, thieves, and harsh rain inside a roofed house.",
          "Manure harvesting: dry wood shavings mix with bird droppings, producing rich organic fertilizer for farm crops."
        ],
        answer: "Protects birds from predators/weather and harvests rich organic farm manure."
      },
      recap: [
        "Artificial Insemination (AI) introduces superior exotic bull genetics into local herds without transporting live animals.",
        "Vaccinate chicks promptly against fatal viral Newcastle disease."
      ]
    },
    subtopics: [
      {
        subtopicId: "cattle-breeds-management",
        title: "1. Cattle Breeds and Management Systems",
        modules: [
          {
            moduleId: "indigenous-exotic-cattle",
            title: "Indigenous vs Exotic Dairy and Beef Breeds",
            bigIdea: "Upgrading hardy indigenous herds with exotic dairy or beef genetics maximizes milk and meat yields.",
            learnIt: [
              "Indigenous breeds: East African Zebu, Ankole Longhorn, and Boran. Highly adapted to tropical heat, drought, and tick resistance, though milk yields are low (~3 litres/day).",
              "Exotic dairy breeds: Holstein Friesian (black and white Holland breed giving highest milk volume up to 30 litres/day), Jersey (cream brown breed producing milk with highest butterfat content), and Guernsey.",
              "Exotic beef breeds: Hereford, Aberdeen Angus, and Charolais reared specifically for heavy beef production.",
              "Management systems: Zero-grazing (stall feeding cut elephant grass and concentrates; ideal for small landholdings); Paddock rotational grazing (prevents overgrazing and disrupts tick parasite breeding cycles)."
            ],
            tryThis: {
              question: "Which exotic breed of dairy cattle originating from Holland is renowned worldwide for producing the highest volume of black-and-white milk?",
              choices: ["Holstein Friesian", "Hereford", "Ankole Longhorn", "Boran"],
              correct: 0,
              explanation: "Friesian cows excel in volume milk output."
            }
          }
        ]
      },
      {
        subtopicId: "poultry-keeping-housing",
        title: "2. Poultry Management and Housing Systems",
        modules: [
          {
            moduleId: "deep-litter-battery-cage",
            title: "Deep Litter vs Battery Cage Housing Systems",
            bigIdea: "Intensive poultry housing protects layers and broilers while controlling litter hygiene to prevent disease.",
            learnIt: [
              "Deep Litter System: birds are confined inside a ventilated house with the floor covered by 15 cm of dry wood shavings or coffee husks. Litter absorbs moisture and prevents bloody coccidiosis diarrhoea.",
              "Battery Cage System: individual laying hens are housed inside sloped metal wire cages. Eggs roll gently into collection troughs, ensuring clean eggs and zero egg-pecking cannibalism.",
              "Poultry types: Layers (reared specifically for table eggs e.g., White Leghorn); Broilers (fast-growing meat chickens ready for slaughter in 6 to 8 weeks)."
            ],
            tryThis: {
              question: "Why do farmers place dry wood shavings or coffee husks on the floor of a deep litter poultry house?",
              choices: ["To absorb moisture from bird droppings and maintain dry, disease-free floor conditions", "To feed the chickens", "To attract insects", "To make beds for sleeping"],
              correct: 0,
              explanation: "Dry litter prevents coccidiosis protozoan multiplication."
            }
          }
        ]
      },
      {
        subtopicId: "livestock-parasites-diseases",
        title: "3. Livestock Parasites and Disease Control",
        modules: [
          {
            moduleId: "ticks-tsetse-newcastle",
            imageUrl: "/images/science/anopheles-mosquito-life-cycle.png",
            imageCaption: "Vector control concepts: disrupting external insect vectors prevents transmission of fatal protozoan blood diseases.",
            title: "Controlling Ticks, Tsetse Flies, ECF and Newcastle Disease",
            bigIdea: "Preventive acaricide dipping and scheduled routine vaccinations protect livestock from fatal epidemic plagues.",
            learnIt: [
              "Tick-borne cattle diseases: East Coast Fever (ECF - transmitted by brown ear ticks causing swollen lymph nodes and death), Redwater, Heartwater, and Anaplasmosis. Controlled by plunging cattle in chemical acaricide dips weekly.",
              "Tsetse flies: transmit Trypanosomiasis (Nagana in cattle; sleeping sickness in humans). Controlled by clearing bush breeding sites and deploying insecticide fly traps.",
              "Poultry viral epidemics: Newcastle disease is a fatal viral infection causing twisting of the neck, gasping, and greenish watery diarrhoea. Controlled strictly by routine vaccination in drinking water or eye drops."
            ],
            tryThis: {
              question: "Which fatal tick-borne protozoan disease in cattle is prevented by regularly dipping livestock in acaricide chemical dips?",
              choices: ["East Coast Fever (ECF)", "Newcastle disease", "Rickets", "Polio"],
              correct: 0,
              explanation: "Brown ear ticks act as vectors for East Coast Fever."
            }
          }
        ]
      }
    
      ,{
        subtopicId: "premium-premium-practice-livestock-management",
        title: "Premium Practice: Livestock Management",
        modules: [{
          moduleId: "choosing-good-animal-care-practices",
          title: "Choosing Good Animal Care Practices",
          bigIdea: "Agriculture questions test safe, clean and productive animal-care decisions.",
          learnIt: ["Good housing protects animals from rain, cold, predators and overcrowding.", "Clean water, balanced feeds and disease control improve animal health.", "Vaccination, isolation and parasite control prevent disease spread."],
          workedExample: { question: "Why isolate a sick chicken from the flock?", steps: ["Some poultry diseases spread between birds.", "Isolation reduces contact.", "This protects healthy birds."], answer: "To prevent disease from spreading." },
          tryThis: { question: "Which practice helps control ticks?", choices: ["Dipping or spraying", "Dirty water", "Overcrowding", "Ignoring wounds"], correct: 0, explanation: "Dipping or spraying helps kill ticks." }
        }]
      }],
    quiz: [
      { q: "Which exotic breed of dairy cattle originating from Holland is famous for producing high quantities of black-and-white milk?", choices: ["Holstein Friesian", "Hereford", "Ankole Longhorn", "Boran"], correct: 0, why: "Friesian cows excel in volume milk yields." },
      { q: "Which external parasite transmits East Coast Fever to cattle?", choices: ["Brown ear tick", "Tsetse fly", "Housefly", "Mosquito"], correct: 0, why: "Ticks suck blood transferring ECF protozoa." },
      { q: "What fatal viral disease in chickens causes twisting of the neck, gasping, and greenish watery diarrhoea?", choices: ["Newcastle disease", "Coccidiosis", "Fowl typhoid", "Malaria"], correct: 0, why: "Newcastle virus decimates unvaccinated poultry flocks." },
      { q: "Which poultry housing system confines individual laying hens inside wired metal compartments with sloped floors for egg collection?", choices: ["Battery cage system", "Free-range system", "Deep litter system", "Fold unit system"], correct: 0, why: "Battery cages automate egg gathering and hygiene." },
      { q: "Why do farmers place dry wood shavings or coffee husks on the floor of a deep litter poultry house?", choices: ["To absorb moisture from bird droppings and keep the floor dry and comfortable", "To feed the chickens", "To attract insects", "To make beds"], correct: 0, why: "Dry litter prevents coccidiosis parasite multiplication." },
      { q: "Which blood-sucking insect vector transmits Nagana (African animal trypanosomiasis) to cattle?", choices: ["Tsetse fly", "Tick", "Flea", "Louse"], correct: 0, why: "Tsetse flies transfer trypanosome parasites." },
      { q: "What is the primary purpose of artificial insemination (AI) in cattle breeding?", choices: ["To introduce superior genetic traits from exotic bulls into local herds without transporting heavy live animals", "To make cattle sleep", "To cure ECF", "To stop grazing"], correct: 0, why: "AI upgrades dairy and beef herd productivity safely." },
      { q: "Which poultry disease caused by protozoa in damp dirty litter results in blood-stained droppings and drooping wings?", choices: ["Coccidiosis", "Newcastle disease", "Fowl pox", "Gumboro"], correct: 0, why: "Coccidiosis attacks intestinal lining in unhygienic coops." }
    ]
  }
];

export const P6_SCIENCE_TOPICS: Topic[] = balanceTopicAnswers(applyP6ScienceHeavyV4(addUpperPrimaryScienceV4(P6_SCIENCE_TOPICS_DATA, "P6", P6_SCIENCE_TERMS)));

export function getP6ScienceTopic(id: string): Topic | undefined {
  return P6_SCIENCE_TOPICS.find((topic) => topic.id === id);
}
