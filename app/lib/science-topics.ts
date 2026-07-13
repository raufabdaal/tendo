import type { Topic } from "@/lib/topics";
import { addUpperPrimaryScienceV4 } from "@/lib/v4-science-helpers";
import { applyP7ScienceHeavyV4 } from "@/lib/p7-v4-heavy-lessons";


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

const P7_SCIENCE_TERMS: Record<string, "Term I" | "Term II" | "Term III"> = {
  "muscular-skeletal-system": "Term I",
  "excretory-system": "Term II",
  "electricity-and-magnetism": "Term I",
  "simple-machines-friction": "Term II",
  "light-energy": "Term II",
  "energy-resources-environment": "Term I",
  "interdependence-environment": "Term III",
  "population-and-health": "Term III"
};

const SCIENCE_TOPICS_DATA: Topic[] = [
  {
    "id": "muscular-skeletal-system",
    "themeId": "science-human-body",
    "themeName": "Human Body",
    "title": "Muscular-skeletal system",
    "estMinutes": 20,
    "status": "published",
    "reviewStatus": "verified",
    "note": {
      "intro": "Why this matters: The muscular-skeletal system helps the body stand, move, bend, lift and keep its shape. P7 learners need to name important bones, joints and muscles, and know how to care for them.",
      "learningObjectives": [
        "Name important bones and muscles in the human body.",
        "Explain the functions of the skeleton and muscles.",
        "Identify common types of joints.",
        "Describe health habits that keep bones and muscles strong.",
        "Recognise common disorders of bones, muscles and joints and how some can be prevented."
      ],
      "whatYouNeedToKnow": [
        "The skeleton is the framework of bones in the body. It gives the body shape, supports soft parts, protects delicate organs, and works with muscles to make movement possible.",
        "Important bones include the skull, backbone, ribs, humerus, radius, ulna, pelvis, femur, tibia and fibula. The skull protects the brain, the ribs protect the heart and lungs, and the backbone supports the body and protects the spinal cord.",
        "Muscles are body tissues that contract and relax to cause movement. Voluntary muscles are controlled by our will, such as muscles used for walking or writing. Involuntary muscles work without our direct control, such as muscles in the intestines and blood vessels.",
        "A joint is a place where two or more bones meet. Examples include hinge joints at the elbow and knee, ball-and-socket joints at the shoulder and hip, pivot joints in the neck, and gliding joints in the wrist and ankle.",
        "Bones and muscles can be affected by diseases and disorders such as rickets, fractures, sprains, dislocations, arthritis and poor posture. Some are caused by accidents, poor feeding, infection, or careless body use.",
        "Good health habits include eating foods rich in calcium and proteins, exercising, sitting and standing correctly, avoiding dangerous play, and seeking medical help after serious injury."
      ],
      "worked": {
        "problem": "A pupil says the ribs are not important because they do not help us write. Explain two important functions of the ribs.",
        "steps": [
          "Step 1. Identify where the ribs are found. They form a cage around the chest.",
          "Step 2. Think about the organs inside the chest. The heart and lungs are inside the rib cage.",
          "Step 3. State the protection function. Ribs protect the heart and lungs from injury.",
          "Step 4. State the breathing support function. Ribs help the chest expand and contract during breathing."
        ],
        "answer": "Answer: The ribs protect the heart and lungs and help in breathing movements."
      },
      "recap": [
        "The skeleton gives shape, support and protection.",
        "Muscles contract and relax to cause movement.",
        "Joints are places where bones meet.",
        "Good posture, exercise and balanced diet help keep bones and muscles healthy."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "skeleton-structure",
        "title": "1. The Structure and Types of Skeleton",
        "modules": [
          {
            "moduleId": "skeleton-basics",
            "imageUrl": "/images/science/human-skeleton.png",
            "imageCaption": "The human skeletal system framework showing major bones and joints.",
            "title": "Types of Skeletons and Bone Basics",
            "bigIdea": "Skeletons provide rigid structural support, give the body shape, and protect delicate vital organs.",
            "learnIt": [
              "Three main types of skeletons exist in living organisms: Endoskeleton (internal bony framework found in vertebrates such as humans, fish, birds, and cattle), Exoskeleton (hard outer shell found in invertebrates/arthropods such as insects, crabs, and snails), and Hydrostatic skeleton (fluid-supported body cavity found in soft-bodied animals such as earthworms and jellyfish).",
              "Major bones of the human skeleton: Skull (cranium), Backbone (vertebral column made of 33 vertebrae protecting the spinal cord), Rib cage (12 pairs of ribs protecting heart and lungs), Collarbone (clavicle), Shoulder blade (scapula), Arm bones (Humerus in upper arm; Radius and Ulna in forearm), Pelvis (hip bone), Leg bones (Femur/thigh bone—the longest and strongest bone in the body; Tibia/shin bone and Fibula in lower leg; Patella/kneecap).",
              "Four core functions of the human skeleton: gives the body its shape and support; protects delicate internal organs (brain, heart, lungs, spinal cord); works with attached muscles across joints to produce body movement; manufactures red and white blood cells inside the bone marrow of long bones."
            ],
            "tryThis": {
              "question": "Which type of skeleton is found inside vertebrates such as humans and cattle?",
              "choices": ["Exoskeleton", "Endoskeleton", "Hydrostatic skeleton", "Shell skeleton"],
              "correct": 1,
              "explanation": "An endoskeleton is an internal bony or cartilaginous framework located inside the body tissues of vertebrates."
            }
          }
        ]
      },
      {
        "subtopicId": "joints-muscles",
        "title": "2. Joints, Muscles and Movement Mechanisms",
        "modules": [
          {
            "moduleId": "joint-types",
            "imageUrl": "/images/science/hinge-and-ball-joints.png",
            "imageCaption": "Comparison of human hinge joints (elbow/knee) and ball-and-socket joints (shoulder/hip).",
            "title": "Structure and Types of Joints",
            "bigIdea": "A joint is the meeting point of two or more bones, held together by ligaments and lubricated by synovial fluid.",
            "learnIt": [
              "Classification of joints: Movable (synovial) joints allow free movement between bones; Immovable (fixed/fibrous) joints allow zero movement (e.g., sutures connecting the bones of the skull).",
              "Hinge joint: allows movement in only one plane (backwards and forwards like a door). Examples: elbow joint, knee joint, and finger joints.",
              "Ball-and-socket joint: allows rotational movement in all directions (360 degrees). Examples: shoulder joint and hip joint.",
              "Other movable joints: Pivot joint (found in the neck between first and second vertebrae, allowing head rotation from side to side); Gliding joint (found in wrist and ankle bones sliding over one another).",
              "Anatomy of a movable joint: Cartilage (smooth elastic tissue covering bone ends to cushion against shock and prevent bone-on-bone friction); Synovial fluid (slippery liquid inside the joint capsule that lubricates joint movement); Ligaments (tough fibrous bands that hold bone firmly to bone across a joint); Tendons (inelastic strong cords that attach muscle to bone)."
            ],
            "tryThis": {
              "question": "What is the function of cartilage at a movable synovial joint?",
              "choices": ["To attach muscle to bone", "To cushion bone ends and reduce friction during movement", "To produce blood cells", "To conduct nerve signals"],
              "correct": 1,
              "explanation": "Cartilage covers the articulating surfaces of bones to absorb mechanical shock and prevent grinding friction."
            }
          },
          {
            "moduleId": "muscle-action",
            "title": "Types of Muscles and Antagonistic Action",
            "bigIdea": "Muscles can only pull by contracting; therefore, body movements require antagonistic muscle pairs working in opposite directions.",
            "learnIt": [
              "Three types of muscles: Voluntary / Skeletal muscles (muscles attached to bones under direct conscious control, e.g., biceps and leg muscles); Involuntary / Smooth muscles (muscles operating automatically without conscious thought, e.g., walls of stomach, intestines, and blood vessels); Cardiac muscle (specialized involuntary muscle found ONLY in the heart that contracts rhythmically without ever getting tired).",
              "Antagonistic muscle action: muscles work in opposing pairs where when one contracts (shortens and thickens), the other relaxes (lengthens).",
              "Example at the elbow joint: To bend (flex) the arm, the Biceps muscle contracts while the Triceps muscle relaxes. To straighten (extend) the arm, the Triceps muscle contracts while the Biceps muscle relaxes."
            ],
            "tryThis": {
              "question": "What happens to the biceps and triceps muscles when a person bends their arm upwards at the elbow?",
              "choices": ["Both biceps and triceps contract", "Biceps contracts while triceps relaxes", "Triceps contracts while biceps relaxes", "Both muscles relax completely"],
              "correct": 1,
              "explanation": "In antagonistic action, the flexor muscle (biceps) contracts to pull the forearm up while the extensor (triceps) relaxes."
            }
          }
        ]
      },
      {
        "subtopicId": "health-posture",
        "title": "3. Diseases, Disorders and Care of Bones and Muscles",
        "modules": [
          {
            "moduleId": "system-diseases",
            "title": "Diseases and Physical Disorders",
            "bigIdea": "Nutritional deficiencies, viral infections, and mechanical accidents can damage bones, joints, and muscles.",
            "learnIt": [
              "Rickets: a nutritional deficiency disease in young children caused by lack of Vitamin D, Calcium, or Phosphorus, resulting in soft, bowed legs and knocked knees.",
              "Osteoporosis: a disorder in older adults where bones lose calcium, becoming brittle and easily fractured.",
              "Poliomyelitis (Polio): a highly infectious viral disease transmitted through contaminated food/water that destroys motor nerves, leading to permanent muscle paralysis and crippled limbs (prevented by oral polio vaccine OPV).",
              "Mechanical joint and bone injuries: Fracture (a break or crack in a bone: Simple/closed fracture stays inside skin; Compound/open fracture pierces through skin; Greenstick fracture is a partial bending break in young elastic children's bones); Dislocation (when bone ends are forced out of their normal joint position); Sprain (tearing or overstretching of ligaments at a joint); Strain (tearing or overstretching of a muscle or tendon)."
            ],
            "tryThis": {
              "question": "An injury where ligaments holding a joint together are overstretched or torn is called a:",
              "choices": ["Strain", "Sprain", "Fracture", "Dislocation"],
              "correct": 1,
              "explanation": "A sprain affects ligaments at a joint, whereas a strain affects muscles or tendons."
            }
          },
          {
            "moduleId": "system-care",
            "title": "Care and Proper Posture",
            "bigIdea": "Maintaining upright posture and eating a diet rich in calcium and vitamin D ensures strong skeletal growth.",
            "learnIt": [
              "Balanced diet: regularly consume calcium-rich foods (milk, cheese, small fish with bones) and vitamin D sources (sunlight exposure, egg yolk, liver) to calcify and harden bone tissue.",
              "Proper posture: posture is the correct carriage of the body when sitting, standing, walking, or lifting. Good sitting posture prevents spinal curvature (such as hunchback or scoliosis).",
              "Regular physical exercise: strengthens skeletal muscles, increases joint flexibility, and improves blood circulation.",
              "First Aid for skeletal injuries: immobilize broken limbs using clean wooden splints and bandages; apply cold ice compresses to sprains to reduce swelling; never attempt to massage or pull a compound fracture."
            ],
            "tryThis": {
              "question": "Why is early morning sunlight exposure beneficial for bone health in young children?",
              "choices": ["It kills skin bacteria", "It helps the skin manufacture Vitamin D required for calcium absorption", "It softens bones", "It relaxes cardiac muscles"],
              "correct": 1,
              "explanation": "Ultraviolet rays in sunlight stimulate human skin cells to synthesize Vitamin D, which is essential for depositing calcium into bones."
            }
          }
        ]
      }
    
      ,{
        "subtopicId": "premium-skeleton-application",
        "title": "4. Premium Exam Practice: Diagrams, Injuries and Care",
        "modules": [
          {
            "moduleId": "skeleton-diagram-labelling",
            "title": "Labelling Skeleton and Joint Diagrams",
            "bigIdea": "A learner scores easy marks when they can name bones and joints from a diagram and state their functions.",
            "learnIt": [
              "When a diagram shows the head, identify the skull and remember that it protects the brain.",
              "When a diagram shows the chest, identify the ribs and remember that they protect the heart and lungs and help in breathing.",
              "For movable joints, name both the joint type and where it is found: hinge at elbow/knee, ball-and-socket at shoulder/hip."
            ],
            "workedExample": {
              "question": "A diagram points to the rib cage. State two functions of the rib cage.",
              "steps": ["Step 1: Identify organs inside the rib cage: heart and lungs.", "Step 2: State protection: it protects the heart and lungs.", "Step 3: Add breathing function: it helps the chest move during breathing."],
              "answer": "It protects the heart and lungs and helps in breathing movements."
            },
            "tryThis": { "question": "Which joint is found at the elbow?", "choices": ["Hinge joint", "Ball-and-socket joint", "Pivot joint", "Fixed joint"], "correct": 0, "explanation": "The elbow bends and straightens like a door, so it is a hinge joint." }
          },
          {
            "moduleId": "injury-first-aid-posture",
            "title": "Injuries, First Aid and Posture",
            "bigIdea": "Science questions often ask for safe care of bones, muscles and joints after injury.",
            "learnIt": [
              "A fracture is a broken bone. Do not move the injured part unnecessarily; support it and seek medical help.",
              "A sprain affects ligaments around a joint. Resting the joint, cooling it and avoiding further strain can reduce damage before medical care.",
              "Good posture protects the backbone and muscles. Learners should sit upright, carry bags properly and avoid careless play."
            ],
            "workedExample": { "question": "Why should a suspected broken arm be supported before taking the patient to hospital?", "steps": ["Step 1: A broken bone can move and cause more injury.", "Step 2: Supporting the arm keeps it still.", "Step 3: This reduces pain and prevents further damage."], "answer": "It keeps the bone still and prevents further injury." },
            "tryThis": { "question": "Which habit helps prevent back problems?", "choices": ["Sitting upright when reading", "Carrying a very heavy bag on one shoulder", "Bending the back for long hours", "Jumping from desks"], "correct": 0, "explanation": "Good posture reduces strain on the backbone and muscles." }
          }
        ]
      }],
    "quiz": [
      { "q": "Which joint is found at the shoulder?", "choices": ["Hinge joint", "Ball-and-socket joint", "Pivot joint", "Fixed joint"], "correct": 1, "why": "The shoulder allows movement in many directions, making it a ball-and-socket joint." },
      { "q": "Which tissue attaches muscle to bone?", "choices": ["Ligament", "Tendon", "Cartilage", "Skin"], "correct": 1, "why": "Tendons attach muscle to bone, while ligaments attach bone to bone." },
      { "q": "Which disease weakens bones due to lack of vitamin D?", "choices": ["Polio", "Rickets", "Malaria", "Scabies"], "correct": 1, "why": "Rickets causes soft bones in children due to lack of vitamin D and calcium." },
      { "q": "What happens to triceps when the arm straightens?", "choices": ["It contracts", "It relaxes", "It breaks", "It turns into cartilage"], "correct": 0, "why": "To straighten the arm, triceps contracts while biceps relaxes." },
      { "q": "Which skeleton type is found inside humans?", "choices": ["Exoskeleton", "Endoskeleton", "Hydrostatic skeleton", "Shell skeleton"], "correct": 1, "why": "Humans have an internal endoskeleton made of bones." },
      { "q": "What cushions bone ends at a joint?", "choices": ["Cartilage", "Skin", "Hair", "Marrow"], "correct": 0, "why": "Cartilage covers bone ends to reduce friction and absorb shock." },
      { "q": "Which muscle type works automatically in the intestines?", "choices": ["Voluntary muscle", "Involuntary muscle", "Cardiac muscle", "Skeletal muscle"], "correct": 1, "why": "Smooth/involuntary muscles control digestion automatically." },
      { "q": "A sprain is an injury to:", "choices": ["A bone", "A ligament at a joint", "The skull", "The liver"], "correct": 1, "why": "Sprains occur when ligaments are torn or stretched." }
    ]
  },
  {
    "id": "electricity-and-magnetism",
    "themeId": "science-matter-energy",
    "themeName": "Matter and Energy",
    "title": "Electricity and magnetism",
    "estMinutes": 22,
    "status": "published",
    "reviewStatus": "verified",
    "note": {
      "intro": "Why this matters: Electricity and magnetism power modern homes, schools, hospitals, transport, and communication networks.",
      "learningObjectives": [
        "Identify sources and types of electricity.",
        "Draw and explain simple electric circuits in series and parallel.",
        "Distinguish electrical conductors and insulators.",
        "Explain properties, laws, and uses of magnets and electromagnets.",
        "Describe home electrical safety precautions and first aid."
      ],
      "whatYouNeedToKnow": [
        "Electricity is a form of energy. Current electricity flows through closed circuits, while static electricity builds up on insulated surfaces due to friction.",
        "Sources of electricity include dry cells, accumulators, generators, dynamos, solar cells, and hydroelectric dams.",
        "Magnets attract iron, steel, cobalt, and nickel. First Law of Magnetism: Like poles repel, unlike poles attract.",
        "Electromagnets are temporary magnets made by passing electric current through a coil wound around a soft iron core."
      ],
      "worked": {
        "problem": "Plan a simple experiment to make a temporary electromagnet using a dry cell, insulated wire, and an iron nail.",
        "steps": [
          "Wind insulated copper wire tightly around a soft iron nail many times.",
          "Connect the two bare ends of the wire to the positive and negative terminals of a dry cell.",
          "Bring iron paperclips near the tip of the nail to test attraction."
        ],
        "answer": "Answer: When current passes through the wire coil, the iron nail magnetizes instantly and attracts metal paperclips."
      },
      "recap": [
        "Like magnetic poles repel, unlike poles attract.",
        "Static charges build up by friction; lightning arresters protect buildings.",
        "Parallel circuits keep other rooms lit if one bulb blows.",
        "Fuses melt during short circuits or overloads to prevent fires."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "magnetism-basics",
        "title": "1. Magnetism: Properties, Methods and Care",
        "modules": [
          {
            "moduleId": "magnetic-materials",
            "imageUrl": "/images/science/bar-magnet-field-lines.png",
            "imageCaption": "Bar magnet showing North and South poles surrounded by looping magnetic field lines.",
            "title": "Properties and Fields of Magnets",
            "bigIdea": "Magnets exert unseen invisible magnetic force fields that attract magnetic substances and obey exact pole laws.",
            "learnIt": [
              "Magnetic vs Non-magnetic substances: Magnetic materials are attracted by a magnet (iron, steel, cobalt, nickel); Non-magnetic materials are not attracted (wood, plastic, copper, aluminium, glass, brass).",
              "Basic properties of magnets: every magnet has two poles (North-seeking pole N and South-seeking pole S); magnetic force of attraction is strongest at the poles; a freely suspended bar magnet always comes to rest pointing in the Earth's North-South geographical direction.",
              "First Law of Magnetism: Like poles repel each other (N repels N; S repels S), while Unlike poles attract each other (N attracts S). Repulsion is the only sure test for magnetism.",
              "Magnetic field: the space or region surrounding a magnet where its magnetic force can be detected. Magnetic lines of force always loop from the North pole to the South pole outside the magnet."
            ],
            "tryThis": {
              "question": "Why is repulsion considered the only sure test to confirm that a metal bar is a permanent magnet?",
              "choices": ["Because a magnet attracts both unmagnetized iron and opposite poles, but only repels a like magnetic pole", "Because magnets never attract iron", "Because repulsion produces sparks", "Because magnets are heavy"],
              "correct": 0,
              "explanation": "An unmagnetized piece of iron will be attracted by either pole of a magnet, but true repulsion only occurs when two like magnetic poles face each other."
            }
          },
          {
            "moduleId": "making-demagnetizing-magnets",
            "title": "Making, Demagnetizing and Storing Magnets",
            "bigIdea": "Permanent magnets are made from steel by stroking or induction, while temporary electromagnets use electric current.",
            "learnIt": [
              "Methods of making magnets: Single touch stroking method (stroking a steel bar repeatedly in one direction using one pole of a permanent magnet); Double touch stroking method (stroking from center outward using opposite poles of two magnets); Electrical method (placing a steel bar inside a solenoid/coil carrying Direct Current DC to form a permanent magnet).",
              "Electromagnets (Temporary magnets): made by coiling insulated copper wire around a soft iron core and connecting to a battery. They gain magnetism instantly when current flows and lose magnetism instantly when current is switched off.",
              "Methods of Demagnetization (destroying magnetism): hammering or beating a magnet violently; heating a magnet until red hot and letting it cool pointing East-West; passing Alternating Current (AC) through a coil surrounding the magnet; dropping magnets repeatedly on hard concrete.",
              "Care and storage: store bar magnets in pairs with unlike poles facing each other (N opposite S) with soft iron pieces called keepers placed across their ends to preserve their magnetic domains."
            ],
            "tryThis": {
              "question": "Which metal is best suited for making the core of a temporary electromagnet used in electric bells?",
              "choices": ["Hard steel", "Soft iron", "Copper", "Aluminium"],
              "correct": 1,
              "explanation": "Soft iron is easily magnetized when electric current flows and readily loses its magnetism as soon as current is switched off."
            }
          }
        ]
      },
      {
        "subtopicId": "static-electricity",
        "title": "2. Static Electricity and Lightning Protection",
        "modules": [
          {
            "moduleId": "static-charges-lightning",
            "title": "Electric Charges and Lightning Arresters",
            "bigIdea": "Friction transfers electrons between objects creating static charges that can discharge violently as atmospheric lightning.",
            "learnIt": [
              "Static electricity is stationary electrical charge built up on the surface of insulated objects by friction (rubbing).",
              "Two types of electric charges exist: Positive charge (+) and Negative charge (−). Law of static charges: Like charges repel each other (+ repels +; − repels −), while Unlike charges attract (+ attracts −).",
              "Formation of lightning: vigorous friction between rising warm air currents and water droplets inside storm clouds creates massive static charges (positive at cloud top, negative at cloud base). When electrostatic attraction between cloud charges and Earth surface becomes too high, a giant spark of electricity leaps to the ground as lightning, producing thunder by heating air instantly.",
              "Lightning arrester (conductor): a thick copper strip mounted on top of tall buildings ending in sharp copper spikes pointing skywards, with the lower end buried deep in moist earth. Function: sharp spikes attract atmospheric static charges from clouds and conduct them safely down into the ground without striking or burning the building."
            ],
            "tryThis": {
              "question": "What is the primary function of a lightning arrester installed on a multi-storied school building?",
              "choices": ["To generate electricity for lighting classrooms", "To attract atmospheric static discharge and conduct it safely into the earth", "To stop rain from falling", "To measure wind speed"],
              "correct": 1,
              "explanation": "The copper conductor provides a low-resistance path that safely carries lightning electrical discharge directly into underground soil."
            }
          }
        ]
      },
      {
        "subtopicId": "current-electricity-circuits",
        "title": "3. Current Electricity, Circuits and Electrical Quantities",
        "modules": [
          {
            "moduleId": "sources-and-circuits",
            "imageUrl": "/images/science/simple-electric-circuit.png",
            "imageCaption": "Simple closed electric circuit with dry cell, closed switch, wires, and lit bulb.",
            "title": "Sources of Electricity and Circuit Types",
            "bigIdea": "Current electricity is the continuous flow of electric charges along a closed conducting path.",
            "learnIt": [
              "Sources of electric current: Chemical cells (Dry cells/Leclanche cells used in radios/torches; Wet secondary accumulators/lead-acid batteries used in cars); Dynamos and Generators (convert mechanical kinetic energy into electrical energy using rotating coils inside magnets); Solar panels (photovoltaic cells converting sunlight directly into electricity); Hydroelectric power plants (falling water spinning turbines connected to generators).",
              "Series circuit: electrical components (bulbs or cells) connected end-to-end along a single single conducting loop. Characteristics: current is identical through all components; if one bulb blows or is removed, the entire circuit breaks and all bulbs go off; connecting dry cells in series increases total voltage and brightness.",
              "Parallel circuit: components connected across separate branching loops so current divides. Characteristics: each bulb receives full supply voltage; if one bulb blows, the remaining parallel loops continue operating brightly; household wiring always uses parallel circuits."
            ],
            "tryThis": {
              "question": "Why are electrical light bulbs in modern school buildings and homes wired in parallel rather than in series?",
              "choices": ["To consume more wires", "So that if one bulb blows or is switched off, the other rooms continue lighting independently", "Because series wiring is illegal", "To reduce solar heat"],
              "correct": 1,
              "explanation": "In a parallel circuit, each appliance has its own complete independent path back to the electrical source."
            }
          },
          {
            "moduleId": "voltage-current-resistance",
            "imageUrl": "/images/science/conductors-vs-insulators.png",
            "imageCaption": "Comparison of copper metal conducting electricity vs rubber and wood acting as safety insulators.",
            "title": "Current, Voltage, Resistance and Conductors",
            "bigIdea": "Voltage pushes electric current through conductors against electrical resistance.",
            "learnIt": [
              "Electric Current (I): rate of flow of electric charges along a conductor. Measured in Amperes (Amps or A) using an Ammeter connected in series.",
              "Voltage / Potential Difference (V): electrical pressure or pushing force provided by a battery or generator that drives current through a circuit. Measured in Volts (V) using a Voltmeter connected in parallel.",
              "Resistance (R): opposition offered by a material to the flow of electric current. Measured in Ohms (Ω). Thin long wires offer higher resistance than thick short copper wires.",
              "Conductors vs Insulators: Conductors allow electric current to flow through them easily (copper, silver, aluminium, graphite, wet human body, salty water); Insulators completely block electrical current flow (dry wood, rubber, plastic, porcelain, pure distilled water)."
            ],
            "tryThis": {
              "question": "Which instrument is used to measure the rate of flow of electric current in a circuit?",
              "choices": ["Voltmeter", "Ammeter", "Barometer", "Anemometer"],
              "correct": 1,
              "explanation": "An Ammeter measures electric current in Amperes and must be wired in series with the circuit components."
            }
          }
        ]
      },
      {
        "subtopicId": "appliances-and-safety",
        "title": "4. Electrical Appliances and Home Safety Precautions",
        "modules": [
          {
            "moduleId": "electric-bell-structure",
            "imageUrl": "/images/science/electromagnet-nail-coil.png",
            "imageCaption": "An electromagnet created by coiling insulated copper wire around an iron nail connected to a dry cell.",
            "title": "Structure and Working of an Electric Bell",
            "bigIdea": "The electric bell operates using an electromagnet that repeatedly pulls and releases a spring-loaded striker.",
            "learnIt": [
              "Core components of an electric bell: Electromagnet (U-shaped soft iron core wound with copper coils); Soft iron armature (iron bar suspended on a springy metal strip); Hammer / Striker (metal rod attached to armature); Gong (metal bell bowl); Contact adjustment screw.",
              "Working mechanism: When the bell switch is pressed, circuit completes and current flows through coils; electromagnet magnetizes instantly and attracts the soft iron armature forward; hammer strikes the gong producing a loud ringing sound; as armature moves forward, it pulls away from the contact screw breaking the circuit; electromagnet demagnetizes instantly, allowing spring to pull armature back to touch contact screw; circuit completes again and rapid ringing repeats."
            ],
            "tryThis": {
              "question": "Why does the hammer of an electric bell spring back away from the gong immediately after striking it?",
              "choices": ["Because the gong pushes it away", "Because forward movement breaks contact at the screw, stopping current so the electromagnet loses magnetism", "Because dry cells run out of charge", "Because gravity pulls it down"],
              "correct": 1,
              "explanation": "When contact at the adjustment screw breaks, current stops flowing, turning off the electromagnet so the spring pulls the armature back."
            }
          },
          {
            "moduleId": "electrical-safety-precautions",
            "title": "Electrical Safety, Fuses and First Aid",
            "bigIdea": "Fuses and circuit breakers automatically cut off electricity during dangerous short circuits or overloads.",
            "learnIt": [
              "Electrical hazards: Electric shock (electricity passing through human body causing burns or cardiac arrest); Short circuit (accidental low-resistance connection causing sparks and house fires); Overloading sockets (plugging too many high-power heaters into one adapter socket).",
              "Fuse: a safety device containing a short thin wire of low melting point inserted on the live wire. If excess current flows due to short circuit or overload, the fuse wire heats up and melts instantly (blows), breaking the circuit before appliances catch fire.",
              "Safety precautions: switch off mains before replacing bulbs or repairing switches; never touch electrical switches or appliances with wet hands; insulate all bare exposed wires with electrical tape; insert sockets properly with 3-pin earth plugs.",
              "First aid for electric shock victim: NEVER touch a victim who is still touching a live power wire with bare hands; immediately switch off mains power switch; if switch is out of reach, use a dry wooden stick or dry rubber rod to push the wire away from the victim; perform cardiopulmonary resuscitation (CPR) if victim stops breathing."
            ],
            "tryThis": {
              "question": "What is the function of a fuse inside a 3-pin electrical plug?",
              "choices": ["To generate extra voltage", "To melt and break the circuit if dangerous excess electric current flows", "To cool down the room", "To store static charges"],
              "correct": 1,
              "explanation": "A fuse wire has a low melting point so it blows instantly during an overload, protecting household appliances from electrical fires."
            }
          }
        ]
      }
    
      ,{
        "subtopicId": "premium-electricity-application",
        "title": "5. Premium Exam Practice: Circuits, Safety and Troubleshooting",
        "modules": [
          {
            "moduleId": "circuit-fault-finding",
            "title": "Finding Faults in Simple Circuits",
            "bigIdea": "Circuit questions test whether learners understand complete paths, conductors, insulators and switches.",
            "learnIt": [
              "A bulb lights only when there is a complete circuit from one battery terminal through the bulb and back to the other terminal.",
              "If a bulb does not light, check whether the cell is exhausted, the switch is open, a wire is disconnected, or an insulator is in the path.",
              "In a series circuit, one broken part stops the whole circuit. In a parallel circuit, one branch may fail while another branch still works."
            ],
            "workedExample": { "question": "A bulb does not light although a cell and wires are present. Give two possible reasons.", "steps": ["Step 1: A circuit needs a complete path.", "Step 2: One wire may be disconnected or the switch may be open.", "Step 3: The cell may also be weak or exhausted."], "answer": "A wire may be disconnected, the switch may be open, or the cell may be exhausted." },
            "tryThis": { "question": "Which material is a good conductor?", "choices": ["Copper", "Rubber", "Plastic", "Dry wood"], "correct": 0, "explanation": "Copper allows electric current to pass easily." }
          },
          {
            "moduleId": "home-electrical-safety",
            "title": "Home Electrical Safety",
            "bigIdea": "Electricity is useful but dangerous when handled carelessly.",
            "learnIt": [
              "Never touch electrical appliances with wet hands because water can conduct electricity and cause shock.",
              "A fuse protects a circuit by melting when current is too high, breaking the circuit before wires overheat.",
              "Lightning arresters protect tall buildings by providing a safe path for lightning to reach the ground."
            ],
            "workedExample": { "question": "Why is a fuse connected in an electric circuit?", "steps": ["Step 1: Too much current can heat wires dangerously.", "Step 2: A fuse melts when current is too high.", "Step 3: This breaks the circuit and protects appliances and people."], "answer": "It breaks the circuit when current is too high, protecting the appliance and users." },
            "tryThis": { "question": "Why should a person not touch a switch with wet hands?", "choices": ["Water may conduct electricity and cause shock", "Water makes the switch beautiful", "Water stores magnetism", "Water makes current disappear"], "correct": 0, "explanation": "Water can conduct electricity, increasing the risk of electric shock." }
          }
        ]
      }],
    "quiz": [
      { "q": "Which item is needed to open and close an electric circuit?", "choices": ["Switch", "Ruler", "Magnet", "Thermometer"], "correct": 0, "why": "A switch opens or closes the conducting path." },
      { "q": "Which metal is best for making the core of an electromagnet?", "choices": ["Soft iron", "Hard steel", "Aluminium", "Copper"], "correct": 0, "why": "Soft iron magnetizes and demagnetizes readily." },
      { "q": "What happens when two North poles face each other?", "choices": ["They repel", "They attract", "They spark", "They stick together"], "correct": 0, "why": "Like magnetic poles repel." },
      { "q": "Why are household lights wired in parallel?", "choices": ["So they work independently", "To save wire", "To increase heat", "To make them dimmer"], "correct": 0, "why": "Parallel circuits give each bulb independent voltage." },
      { "q": "What is the function of a fuse?", "choices": ["To melt and cut current during overload", "To produce sparks", "To store electricity", "To measure voltage"], "correct": 0, "why": "A fuse wire melts during dangerous current overloads." },
      { "q": "Which material is an electrical insulator?", "choices": ["Dry wood", "Copper", "Iron", "Salt water"], "correct": 0, "why": "Dry wood does not conduct electricity." },
      { "q": "How does a lightning arrester protect a building?", "choices": ["Conducts static lightning charge safely into the earth", "Stops rain", "Reflects sunlight", "Generates mains electricity"], "correct": 0, "why": "Sharp copper spikes attract and ground atmospheric charges safely." },
      { "q": "An ammeter is connected in:", "choices": ["Series", "Parallel", "Circle", "Reverse"], "correct": 0, "why": "An ammeter measures current flowing through the loop in series." }
    ]
  },
  {
    "id": "excretory-system",
    "themeId": "science-human-body",
    "themeName": "Human Body",
    "title": "Excretory system",
    "estMinutes": 20,
    "status": "published",
    "reviewStatus": "verified",
    "note": {
      "intro": "Why this matters: The body produces metabolic wastes that must be removed to stay healthy. Learners need to know the excretory organs, products, kidney anatomy, skin structure, and system care.",
      "learningObjectives": [
        "Distinguish between excretion and egestion.",
        "Name the four excretory organs and the wastes they excrete.",
        "Describe the internal anatomy of the kidney and urinary system flow.",
        "Explain the layers and functions of human skin.",
        "Identify kidney, skin, lung, and liver diseases and their prevention."
      ],
      "whatYouNeedToKnow": [
        "Excretion is the removal of cellular metabolic wastes, whereas egestion is the removal of undigested dietary faeces.",
        "The kidneys filter blood to excrete urine (urea, excess water, salts). The skin excretes sweat. The lungs excrete carbon dioxide and water vapour. The liver deaminates excess amino acids into urea and excretes bile pigments.",
        "The kidney has an outer cortex, inner medulla, and central pelvis collecting funnel."
      ],
      "worked": {
        "problem": "Explain the path followed by urine from where it is formed until it leaves the body.",
        "steps": [
          "Nephrons filter blood in the kidney cortex and medulla to form urine.",
          "Urine collects in the funnel-shaped renal pelvis.",
          "Urine flows down through the ureter tubes into the urinary bladder.",
          "Urine leaves the body through the urethra during micturition."
        ],
        "answer": "Answer: Kidney (Pelvis) -> Ureters -> Urinary Bladder -> Urethra."
      },
      "recap": [
        "Excretion removes metabolic waste; egestion removes undigested food.",
        "Kidney filters urea; skin releases sweat; lungs exhale CO2; liver deaminates amino acids.",
        "Drink safe water and maintain cleanliness to prevent nephritis and skin diseases."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "excretory-organs-overview",
        "title": "1. Excretion vs Egestion and the Four Excretory Organs",
        "modules": [
          {
            "moduleId": "excretion-vs-egestion",
            "title": "Excretion versus Egestion",
            "bigIdea": "Excretion eliminates cellular metabolic wastes, while egestion discharges undigested food remains from the alimentary canal.",
            "learnIt": [
              "Excretion is the removal of harmful metabolic waste products produced by chemical chemical processes inside living body cells.",
              "Egestion is the removal of undigested food materials (faeces) through the anus. Faeces have never taken part in cellular respiration or metabolism inside body cells.",
              "Why excretion matters: toxic metabolic wastes such as urea, uric acid, and excess carbon dioxide poison body cells if allowed to accumulate in blood."
            ],
            "tryThis": {
              "question": "How does biological excretion differ from egestion?",
              "choices": [
                "Excretion removes cellular metabolic wastes while egestion discharges undigested food remains",
                "Excretion happens only in animals while egestion happens in plants",
                "Excretion removes solid faeces while egestion removes liquid urine",
                "There is no difference between them"
              ],
              "correct": 0,
              "explanation": "Excretion removes cellular waste produced by metabolism, whereas egestion eliminates undigested dietary fiber from the gut."
            }
          },
          {
            "moduleId": "four-excretory-organs",
            "imageUrl": "/images/science/urinary-system.png",
            "imageCaption": "Anatomical diagram showing the human kidneys, ureters, and urinary bladder.",
            "title": "The Four Excretory Organs and Their Wastes",
            "bigIdea": "The kidneys, skin, lungs, and liver work together as the four primary excretory organs of the human body.",
            "learnIt": [
              "Kidneys: filter circulating blood to excrete excess water, mineral salts, and nitrogenous urea as liquid urine.",
              "Skin: excretes sweat (a watery solution containing excess mineral salts and trace amounts of urea) through sweat pores.",
              "Lungs: excrete gaseous carbon dioxide and water vapour during exhalation (breathing out).",
              "Liver: detoxifies blood chemicals, excretes bile pigments (from broken-down red blood cells), and produces urea by breaking down excess amino acids (deamination)."
            ],
            "tryThis": {
              "question": "Which organ converts excess poisonous amino acids into urea through deamination?",
              "choices": ["Kidney", "Skin", "Liver", "Lungs"],
              "correct": 2,
              "explanation": "The liver performs deamination, converting surplus amino acids into urea which circulating blood then transports to the kidneys."
            }
          }
        ]
      },
      {
        "subtopicId": "urinary-system-kidneys",
        "title": "2. The Urinary System and Internal Kidney Anatomy",
        "modules": [
          {
            "moduleId": "kidney-structure-function",
            "imageUrl": "/images/science/kidney-nephron-diagram.png",
            "imageCaption": "Anatomical cross-section of the human kidney showing cortex, medulla, pelvis, and blood vessels.",
            "title": "Internal Structure of the Kidney",
            "bigIdea": "The kidney consists of an outer cortex, inner medulla, and central pelvis that filter blood and channel urine.",
            "learnIt": [
              "Gross internal structure of the kidney: Cortex (the dark reddish outer region containing millions of filtering nephrons/Malpighian bodies); Medulla (the lighter inner region containing striated renal pyramids that reabsorb water); Pelvis (the central white funnel-shaped cavity where urine collects before flowing down the ureter).",
              "Renal blood circulation: Renal artery brings oxygenated blood rich in metabolic urea into the kidney; Renal vein carries filtered, deoxygenated blood away from the kidney toward the vena cava.",
              "Urine pathway: Nephron filters in cortex/medulla -> Pelvis cavity -> Ureter tubes -> Urinary bladder (temporary storage sac) -> Urethra (muscular exit tube)."
            ],
            "tryThis": {
              "question": "Which funnel-shaped central cavity inside the kidney collects formed urine before directing it into the ureter?",
              "choices": ["Cortex", "Medulla", "Pelvis", "Nephron"],
              "correct": 2,
              "explanation": "The renal pelvis acts as the central collecting funnel for urine dripping from the medulla pyramids."
            }
          },
          {
            "moduleId": "kidney-disorders",
            "title": "Major Disorders of the Urinary System",
            "bigIdea": "Nephritis, kidney stones, and renal failure impair blood filtration but can be prevented by hydration and hygiene.",
            "learnIt": [
              "Nephritis: bacterial inflammation of the filtering glomeruli inside the kidney cortex, causing blood and protein to leak into urine.",
              "Kidney stones: hard mineral crystals (calcium oxalate) that form inside the renal pelvis or ureter due to chronic dehydration or excessive dietary salts, causing severe abdominal pain.",
              "Kidney failure: loss of kidney filtering capacity resulting in toxic uremia; treated by renal dialysis (artificial blood filtering machine) or kidney transplant.",
              "Prevention: drink at least 2 to 3 litres of boiled safe water daily, limit excessive salt consumption, practice proper personal hygiene, and avoid self-medication with toxic painkillers."
            ],
            "tryThis": {
              "question": "What hard mineral crystals form inside the renal pelvis due to chronic dehydration and excess dietary salt?",
              "choices": ["Bile stones", "Kidney stones", "Gallstones", "Cortex stones"],
              "correct": 1,
              "explanation": "Kidney stones crystallize from concentrated mineral salts when fluid intake is inadequate."
            }
          }
        ]
      },
      {
        "subtopicId": "human-skin-excretion",
        "title": "3. The Human Skin: Epidermis, Dermis and Conditions",
        "modules": [
          {
            "moduleId": "skin-structure-layers",
            "imageUrl": "/images/science/human-skin-cross-section.png",
            "imageCaption": "Cross-section of human skin illustrating the epidermis, dermis, and sweat glands.",
            "title": "Skin Layers and Temperature Regulation",
            "bigIdea": "The skin protects underlying tissues and regulates body temperature through sweat evaporation and capillary action.",
            "learnIt": [
              "Epidermis (Outer layer): consists of the Horny layer (dead protective keratin cells on the surface), Granular layer, and Malpighian layer (contains living dividing cells and dark melanin pigment that filters harmful solar ultraviolet radiation).",
              "Dermis (Inner layer): thick connective tissue containing coiled Sweat glands (absorb water, salts, and urea from surrounding capillaries and pump sweat out through pores), Hair follicles, Sebaceous oil glands (secrete sebum to waterproof skin), Blood vessels, and sensory nerve endings.",
              "Functions: temperature regulation (when hot, sweat evaporates cooling the skin; skin capillaries dilate/vasodilation to radiate heat; when cold, hairs stand erect trapping insulating air), physical protection against bacterial invasion and mechanical impact, sensory reception of touch/heat/pain, and synthesis of Vitamin D under sunlight."
            ],
            "tryThis": {
              "question": "Which specific layer of the epidermis contains the dark melanin pigment that protects underlying tissues from ultraviolet solar radiation?",
              "choices": ["Horny layer", "Malpighian layer", "Subcutaneous layer", "Dermis layer"],
              "correct": 1,
              "explanation": "The Malpighian layer produces melanin pigment and continuously regenerates new skin cells."
            }
          },
          {
            "moduleId": "skin-diseases-hygiene",
            "title": "Skin Conditions, Diseases and Hygiene",
            "bigIdea": "Personal cleanliness prevents contagious parasitic and bacterial skin conditions.",
            "learnIt": [
              "Contagious skin diseases: Ringworm (a fungal infection forming circular itchy scaly patches); Scabies (caused by microscopic itch mites burrowing under skin); Leprosy (chronic bacterial infection attacking skin nerves and causing numbness/disfigurement); Boils (staphylococcal bacterial infection of hair follicles forming pus-filled swellings).",
              "Hygiene and care: wash the entire body daily using clean warm water and antiseptic soap; never share bath towels, bed sheets, or clothes; dress clean open skin wounds immediately with sterile bandages."
            ],
            "tryThis": {
              "question": "Which contagious skin disease is caused by microscopic itch mites burrowing into the upper layer of human skin?",
              "choices": ["Ringworm", "Scabies", "Leprosy", "Boils"],
              "correct": 1,
              "explanation": "Scabies is caused by Sarcoptes scabiei mites tunneling into the skin to lay eggs."
            }
          }
        ]
      },
      {
        "subtopicId": "lungs-liver-excretion",
        "title": "4. Lungs and Liver: Excretory Mechanisms and Disorders",
        "modules": [
          {
            "moduleId": "lungs-liver-disorders",
            "title": "Gas Exchange, Deamination and Associated Disorders",
            "bigIdea": "Lungs excrete respiratory carbon dioxide while the liver detoxifies metabolic poisons and produces urea.",
            "learnIt": [
              "Lungs excretory mechanism: carbon dioxide produced during cellular respiration diffuses from blood capillaries into alveolar air sacs and is expelled through the windpipe and nostrils.",
              "Liver excretory mechanism: performs Deamination (breaking down toxic surplus amino acids into urea and glucose) and breaks down old worn-out erythrocytes (red blood cells) to form greenish-yellow bile pigments excreted via the intestinal tract.",
              "Liver disorders: Liver Cirrhosis (irreversible scarring and hardening of liver tissue caused by chronic alcoholism or hepatitis virus); Hepatitis (infectious viral inflammation of the liver causing jaundice/yellowness of eyes).",
              "Care: avoid excessive alcohol intake, get vaccinated against Hepatitis B, avoid inhaling toxic chemical fumes or tobacco smoke, and exercise regularly."
            ],
            "tryThis": {
              "question": "Which irreversible liver disease characterized by fibrous tissue scarring is primarily caused by chronic heavy alcohol drinking?",
              "choices": ["Hepatitis A", "Liver Cirrhosis", "Nephritis", "Leprosy"],
              "correct": 1,
              "explanation": "Alcohol acts as a chemical toxin that gradually destroys functional liver hepatocytes, replacing them with scar tissue."
            }
          }
        ]
      }
    
      ,{
        "subtopicId": "premium-excretion-application",
        "title": "5. Premium Exam Practice: Organ Functions, Disorders and Hygiene",
        "modules": [
          {
            "moduleId": "excretory-organ-matching",
            "title": "Matching Organs to Wastes",
            "bigIdea": "A common exam task is to match each excretory organ with the waste it removes.",
            "learnIt": [
              "Kidneys remove urea, excess water and mineral salts in urine.",
              "Lungs remove carbon dioxide and water vapour during breathing out.",
              "Skin removes water, salts and small amounts of urea in sweat; the liver breaks down harmful substances and excess amino acids."
            ],
            "workedExample": { "question": "Name the organ that removes urea from blood and forms urine.", "steps": ["Step 1: Urea is a nitrogenous waste from protein breakdown.", "Step 2: Blood carrying urea is filtered in the kidneys.", "Step 3: The kidneys form urine."], "answer": "The kidneys." },
            "tryThis": { "question": "Which waste is removed by the lungs?", "choices": ["Carbon dioxide", "Undigested food", "Faeces", "Bile only"], "correct": 0, "explanation": "The lungs excrete carbon dioxide and water vapour." }
          },
          {
            "moduleId": "urinary-health-cases",
            "title": "Health Cases: Urinary System and Skin",
            "bigIdea": "Health questions ask learners to connect symptoms, prevention and care without guessing beyond the syllabus.",
            "learnIt": [
              "Drinking enough clean water helps kidneys remove wastes and reduces concentration of urine.",
              "Keeping skin clean helps prevent some skin infections and removes sweat, dirt and germs.",
              "Severe pain, blood in urine, swelling or persistent skin disease should be taken to a health worker. Learners should not self-medicate."
            ],
            "workedExample": { "question": "Give two ways of caring for the urinary system.", "steps": ["Step 1: Think of what helps kidneys work well.", "Step 2: Clean water helps remove wastes.", "Step 3: Seeking medical help for urinary problems prevents worse illness."], "answer": "Drink enough clean water and seek medical help when urinary problems occur." },
            "tryThis": { "question": "Which habit helps care for the skin?", "choices": ["Bathing regularly", "Sharing dirty towels", "Scratching wounds with dirty nails", "Wearing wet clothes all day"], "correct": 0, "explanation": "Bathing removes sweat, dirt and germs from the skin." }
          }
        ]
      }],
    "quiz": [
      { "q": "What is excretion?", "choices": ["Removal of body waste products", "Eating food", "Breathing in oxygen only", "Breaking food by teeth"], "correct": 0, "why": "Excretion is the removal of waste products made by body activities." },
      { "q": "Which organ forms urine?", "choices": ["Kidney", "Heart", "Stomach", "Eye"], "correct": 0, "why": "The kidneys filter blood and form urine." },
      { "q": "What carries urine from the kidneys to the bladder?", "choices": ["Urethra", "Ureters", "Windpipe", "Intestine"], "correct": 1, "why": "The ureters carry urine from the kidneys to the urinary bladder." },
      { "q": "Which waste is removed through the skin?", "choices": ["Sweat", "Faeces", "Oxygen", "Saliva"], "correct": 0, "why": "Sweat is removed through the skin and contains water, salts and small amounts of urea." },
      { "q": "Which organ converts excess amino acids to urea?", "choices": ["Liver", "Kidneys", "Bladder", "Teeth"], "correct": 0, "why": "The liver performs deamination." },
      { "q": "Which habit helps care for the kidneys?", "choices": ["Drinking enough safe water", "Taking unknown drugs", "Holding urine for very long", "Avoiding all liquids"], "correct": 0, "why": "Safe water helps the kidneys remove wastes properly." },
      { "q": "What is the bladder's main function?", "choices": ["To form urine", "To store urine", "To pump blood", "To digest food"], "correct": 1, "why": "The urinary bladder stores urine before it leaves the body." },
      { "q": "Which skin disease is caused by itch mites?", "choices": ["Scabies", "Ringworm", "Leprosy", "Boils"], "correct": 0, "why": "Scabies mites burrow under the skin." }
    ]
  },
  {
    "id": "light-energy",
    "themeId": "science-matter-energy",
    "themeName": "Matter and Energy",
    "title": "Light energy",
    "estMinutes": 24,
    "status": "published",
    "reviewStatus": "verified",
    "note": {
      "intro": "Why this matters: Light helps us see and understand natural phenomena. Learners need to know light sources, speed, rectilinear propagation, reflection, refraction, dispersion, lenses, and the human eye.",
      "learningObjectives": [
        "Distinguish luminous and non-luminous sources and state the speed of light.",
        "Demonstrate rectilinear propagation and explain opaque, transparent, and translucent materials.",
        "Describe shadow formation, solar eclipses, lunar eclipses, and pinhole camera action.",
        "State the laws of reflection and explain periscopes and mirrors.",
        "Explain refraction, dispersion (ROYGBIV rainbows), lenses, eye anatomy, and myopia/hypermetropia corrections."
      ],
      "whatYouNeedToKnow": [
        "Light travels at 300,000 km/s in straight lines (rectilinear propagation).",
        "Opaque objects block light casting umbra/penumbra shadows; solar eclipses happen when the Moon is between Sun and Earth.",
        "Laws of reflection: angle of incidence equals angle of reflection (i = r). Refraction bends light across media.",
        "Myopia is corrected by concave lenses; hypermetropia is corrected by convex lenses."
      ],
      "worked": {
        "problem": "Explain why a stick placed halfway in a bucket of clean water visually appears bent at the water surface.",
        "steps": [
          "Identify the two transparent media involved: air and water.",
          "State that light changes speed when crossing the water-air boundary.",
          "Identify the optical bending phenomenon as Refraction of light.",
          "Conclude that refracted light rays emerging from underwater make the stick look bent and shallower than its real depth."
        ],
        "answer": "Answer: Light refraction across the water-air boundary bends emerging rays, making the stick appear bent."
      },
      "recap": [
        "Light travels at 300,000 km/s in straight lines.",
        "Solar eclipse = Sun-Moon-Earth; Lunar eclipse = Sun-Earth-Moon.",
        "First law of reflection: angle i = angle r.",
        "Short-sightedness needs concave lenses; long-sightedness needs convex lenses."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "sources-beams-travel",
        "title": "1. Light Sources, Rectilinear Propagation and Beams",
        "modules": [
          {
            "moduleId": "natural-artificial-sources",
            "title": "Luminous and Non-Luminous Sources",
            "bigIdea": "Luminous bodies emit natural or artificial light at 300,000 km/s, enabling vision.",
            "learnIt": [
              "Speed of light: light travels through space and air at an immense speed of approximately 300,000 kilometers per second (much faster than sound).",
              "Luminous objects generate their own light. Natural luminous sources: Sun, stars, fireflies, glow-worms, and lightning. Artificial luminous sources: electric bulbs, lit candles, kerosene lamps, and torches.",
              "Non-luminous objects do not produce light (e.g., moon, mirrors, wood, water, planets); we see them when they reflect light from a luminous source into our eyes."
            ],
            "tryThis": {
              "question": "What is the approximate speed at which light energy travels through air or vacuum?",
              "choices": ["330 meters per second", "300,000 kilometers per second", "1,000 kilometers per hour", "100 meters per second"],
              "correct": 1,
              "explanation": "Light travels at 3x10^8 m/s (300,000 km/s), which explains why lightning is seen before thunder is heard."
            }
          },
          {
            "moduleId": "rectilinear-propagation-beams",
            "title": "Rectilinear Propagation and Types of Beams",
            "bigIdea": "Light always travels in straight lines and forms parallel, convergent, or divergent beams.",
            "learnIt": [
              "Rectilinear propagation of light is the biological and physical principle that light travels in straight lines through a uniform medium.",
              "Experimental demonstration: view a lit candle flame through three cardboard screens with aligned pinholes; flame is clearly visible. Move one screen slightly out of line; vision is immediately blocked because light rays cannot curve around obstacles.",
              "A ray is the direction of light path indicated by a straight line with an arrow. A beam is a collection of light rays.",
              "Three types of light beams: Parallel beam (rays remain equidistant, e.g., searchlights); Convergent beam (rays direct inward to meet at a single focal point, e.g., through a convex lens); Divergent beam (rays spread outward from a single point source, e.g., light leaving a torch bulb)."
            ],
            "tryThis": {
              "question": "A collection of light rays spreading outward from a single lit torch bulb is called a:",
              "choices": ["Parallel beam", "Convergent beam", "Divergent beam", "Reflected beam"],
              "correct": 2,
              "explanation": "Divergent rays separate wider apart as they travel away from the point source."
            }
          }
        ]
      },
      {
        "subtopicId": "shadows-eclipses-pinhole",
        "title": "2. Materials, Shadows, Eclipses and Pinhole Camera",
        "modules": [
          {
            "moduleId": "opaque-transparent-translucent",
            "title": "Opaque, Transparent and Translucent Materials",
            "bigIdea": "Materials interact with light based on their optical transmission density.",
            "learnIt": [
              "Transparent materials transmit all light rays without scattering, allowing clear vision through them (clear window glass, clean water, spectacles).",
              "Translucent materials allow partial light transmission but scatter rays irregularly so objects behind look blurred (frosted bathroom glass, tracing paper, oiled paper, fog).",
              "Opaque materials completely absorb or reflect hitting light rays, allowing zero transmission (brick walls, wooden doors, iron sheets, human body)."
            ],
            "tryThis": {
              "question": "Why is frosted glass installed in bathroom windows?",
              "choices": ["It is opaque and blocks sunlight", "It is translucent, letting light inside while blurring internal shapes for privacy", "It acts as a magnifying mirror", "It produces artificial light"],
              "correct": 1,
              "explanation": "Translucent frosted glass scatters transmitted light, preventing clear visibility from outside."
            }
          },
          {
            "moduleId": "shadows-and-eclipses",
            "title": "Shadows and Eclipses",
            "bigIdea": "Because light travels in straight lines, opaque bodies cast shadows with dark umbra and lighter penumbra zones.",
            "learnIt": [
              "Shadow formation: when an opaque obstacle blocks rectilinear light rays, a dark silhouette shadow forms on a surface behind it.",
              "Umbra: the central region of complete shadow where 100% of light rays are blocked. Penumbra: the outer surrounding zone of partial shadow.",
              "Solar Eclipse (Eclipse of the Sun): occurs during daytime when the Moon moves directly between the Sun and the Earth along a straight line (S-M-E alignment). Moon blocks sunlight, casting an umbra shadow onto Earth.",
              "Lunar Eclipse (Eclipse of the Moon): occurs at night when the Earth moves directly between the Sun and the Moon (S-E-M alignment). Earth blocks sunlight from illuminating the Moon."
            ],
            "tryThis": {
              "question": "During a Lunar Eclipse (eclipse of the moon), which astronomical body lies precisely in the middle of the straight line?",
              "choices": ["The Sun", "The Moon", "The Earth", "Mars"],
              "correct": 2,
              "explanation": "In a lunar eclipse, Earth blocks sunlight from reaching the full moon (Sun - Earth - Moon alignment)."
            }
          },
          {
            "moduleId": "pinhole-camera",
            "imageUrl": "/images/science/pinhole-camera-ray-diagram.png",
            "imageCaption": "Ray diagram of a pin-hole camera focusing straight light rays to form an inverted real image.",
            "title": "Structure and Images of a Pinhole Camera",
            "bigIdea": "Straight light rays crossing at a tiny pinhole aperture project a real inverted image onto a translucent screen.",
            "learnIt": [
              "Structure of a pinhole camera: a light-tight wooden or cardboard box with a tiny pinhole aperture punctured on the front face and a translucent greaseproof paper screen on the back face.",
              "Characteristics of pinhole image: Real (formed on a screen), Inverted (upside down vertically and left-right horizontally), and maintains object colour.",
              "Why inverted: light rays from the top of the object travel in straight lines obliquely down through the hole to strike the bottom of the screen.",
              "Aperture effects: enlarging the pinhole makes the image brighter (more rays enter) but blurred/fuzzy (overlapping ray circles)."
            ],
            "tryThis": {
              "question": "What happens to the image on the screen if the tiny pinhole of a pinhole camera is widened into a large hole?",
              "choices": ["It becomes upside down", "It becomes brighter but blurred and out of focus", "It disappears completely", "It turns upside up"],
              "correct": 1,
              "explanation": "A wide hole admits multiple overlapping cones of light rays, causing sharpness to degrade."
            }
          }
        ]
      },
      {
        "subtopicId": "reflection-and-refraction",
        "title": "3. Reflection, Mirrors, Refraction and Rainbows",
        "modules": [
          {
            "moduleId": "reflection-plane-mirrors",
            "title": "Laws of Reflection and Plane Mirrors",
            "bigIdea": "Smooth shiny surfaces reflect light rays symmetrically according to the two fundamental laws of reflection.",
            "learnIt": [
              "Regular reflection occurs on polished flat mirrors producing sharp images; Diffuse (irregular) reflection occurs on rough surfaces scattering rays in all directions.",
              "Laws of reflection: First Law states the angle of incidence equals the angle of reflection (i = r); Second Law states the incident ray, reflected ray, and normal perpendicular line at the point of incidence all lie in the same plane.",
              "Plane mirror image characteristics: Upright (erect), Virtual (cannot be projected onto a screen), same size/distance as object, and Laterally inverted (left side appears as right side).",
              "Periscope: optical instrument utilizing two parallel plane mirrors fixed at 45-degree angles inside a tube to observe objects over high walls or above water surface from submarines."
            ],
            "tryThis": {
              "question": "If a light ray strikes a polished plane mirror at an angle of incidence of 40°, what is the angle of reflection?",
              "choices": ["20°", "40°", "50°", "90°"],
              "correct": 1,
              "explanation": "According to the First Law of Reflection, the angle of reflection (r) always equals the angle of incidence (i)."
            }
          },
          {
            "moduleId": "refraction-dispersion-rainbow",
            "imageUrl": "/images/science/light-refraction.png",
            "imageCaption": "Refraction of light rays causes a stick or pencil to appear bent when partially submerged in water.",
            "title": "Refraction, Apparent Depth and Dispersion",
            "bigIdea": "Light bends when moving between media of different optical density and splits into seven spectrum colours.",
            "learnIt": [
              "Refraction is the bending of light rays as they pass obliquely across the boundary between two media of different optical densities (e.g., from air into glass or water) due to velocity change.",
              "Real vs Apparent depth: refraction makes clear swimming pools and rivers look shallower than their real depth. A wooden stick placed at a slant in a water bucket visually appears bent upward at the water surface.",
              "Dispersion of white light: the splitting of white sunlight into its seven constituent spectrum colours when passing through a triangular glass prism or raindrops.",
              "Spectrum colours in order of decreasing wavelength: Red (bends least), Orange, Yellow, Green, Blue, Indigo, Violet (ROYGBIV—bends most).",
              "Rainbow formation: naturally occurs when sunlight falls upon falling raindrops after a rain shower; raindrops act as tiny prisms that refract, internally reflect, and disperse white light into a colorful arc."
            ],
            "tryThis": {
              "question": "Which colour of the visible light spectrum bends the most during dispersion through a glass prism?",
              "choices": ["Red", "Yellow", "Green", "Violet"],
              "correct": 3,
              "explanation": "Violet light has the shortest optical wavelength and slows down most inside glass, bending at the steepest angle."
            }
          }
        ]
      },
      {
        "subtopicId": "lenses-camera-human-eye",
        "title": "4. Lenses, Human Eye Cross-Section and Vision Defects",
        "modules": [
          {
            "moduleId": "lenses-and-camera",
            "title": "Convex and Concave Lenses",
            "bigIdea": "Lenses refract passing light rays either converging them to a focal point or diverging them outward.",
            "learnIt": [
              "Convex (converging) lens: thicker at the center than at the edges. Converges parallel light rays inward to meet at a real Principal Focus. Applications: reading magnifying glasses, camera lenses, microscopes, and telescopes.",
              "Concave (diverging) lens: thinner at the center and thicker at the edges. Spreads light rays outward away from a virtual focal point.",
              "Comparing human eye and photographic camera: Eye Lens corresponds to Camera Lens; Iris controls pupil aperture just as Diaphragm controls Shutter Aperture; Retina captures real inverted image just as Photographic Film/Sensor captures camera image."
            ],
            "tryThis": {
              "question": "Which optical component in a photographic camera controls the amount of light entering, exactly like the iris in a human eye?",
              "choices": ["Shutter speed", "Diaphragm / Aperture", "Film sensor", "Focus ring"],
              "correct": 1,
              "explanation": "The adjustable diaphragm expands or constricts the aperture opening to regulate incoming light volume."
            }
          },
          {
            "moduleId": "human-eye-structure-care",
            "imageUrl": "/images/science/human-eye-anatomy.png",
            "imageCaption": "Anatomy of the human eye showing cornea, lens, retina, and optic nerve.",
            "title": "Human Eye Anatomy, Vision Defects and Corrections",
            "bigIdea": "Myopia and Hypermetropia occur when eye lenses fail to focus light onto the retina, but are corrected by spectacles.",
            "learnIt": [
              "Structural cross-section of the human eye: Cornea (transparent front protective window refracting light); Iris (coloured muscular ring controlling pupil size); Pupil (central dark aperture admitting light); Crystalline Lens (biconvex elastic lens focusing rays); Ciliary body/muscles (alter lens thickness for near/distant focusing—accommodation); Retina (internal back screen containing light-sensitive rods and cones where inverted real images form); Optic nerve (transmits electrical visual signals to the brain).",
              "Short-sightedness (Myopia): individual sees close objects clearly but distant objects appear blurry because the eyeball is too long or lens too curved, causing light rays to focus IN FRONT of the retina. Correction: wear spectacles fitted with Concave (diverging) lenses to spread rays out before hitting the eye.",
              "Long-sightedness (Hypermetropia): individual sees distant objects clearly but near reading objects look blurry because the eyeball is too short or lens too flat, causing rays to focus BEHIND the retina. Correction: wear spectacles fitted with Convex (converging) lenses to bend rays inward onto the retina.",
              "Eye care: read in adequate balanced lighting, wash eyes with clean boiled water, consume Vitamin A rich foods (carrots, dark green leafy vegetables, mangoes), and never stare directly at solar eclipses or bright welding arcs."
            ],
            "tryThis": {
              "question": "Which type of spectacle lenses must be prescribed to correct Short-sightedness (Myopia)?",
              "choices": ["Convex (converging) lenses", "Concave (diverging) lenses", "Plane glass mirrors", "Opaque dark lenses"],
              "correct": 1,
              "explanation": "Concave lenses diverge incoming light rays slightly outward so the eye lens focuses the image precisely onto the retina rather than in front of it."
            }
          }
        ]
      }
    
      ,{
        "subtopicId": "premium-light-application",
        "title": "5. Premium Exam Practice: Ray Diagrams, Lenses and Vision",
        "modules": [
          {
            "moduleId": "ray-diagram-reasoning",
            "title": "Reasoning with Rays and Shadows",
            "bigIdea": "Light diagram questions test whether learners remember that light travels in straight lines.",
            "learnIt": [
              "Shadows form because light travels in straight lines and opaque objects block it.",
              "A pinhole camera forms an inverted image because rays from the top of the object pass through the hole to the bottom of the screen, and rays from the bottom go to the top.",
              "Reflection follows two laws: the angle of incidence equals the angle of reflection, and the incident ray, reflected ray and normal lie in the same plane."
            ],
            "workedExample": { "question": "Why is the image in a pinhole camera upside down?", "steps": ["Step 1: Light travels in straight lines.", "Step 2: Rays from the top of the object pass through the pinhole to the lower part of the screen.", "Step 3: Rays from the bottom pass to the upper part of the screen."], "answer": "Because light rays cross at the pinhole, forming an inverted image." },
            "tryThis": { "question": "Which object forms a dark shadow?", "choices": ["Opaque object", "Transparent object", "Clear glass", "Air"], "correct": 0, "explanation": "Opaque objects block light and form shadows." }
          },
          {
            "moduleId": "lenses-eye-problems",
            "title": "Lenses, the Eye and Vision Defects",
            "bigIdea": "Vision questions connect lens shape, focusing and correction of defects.",
            "learnIt": [
              "A convex lens is thicker in the middle and can converge light rays. It is used in magnifying glasses and to correct long sightedness.",
              "A concave lens is thinner in the middle and diverges light rays. It is used to correct short sightedness.",
              "The retina receives the image, the optic nerve carries messages to the brain, and the iris controls the size of the pupil."
            ],
            "workedExample": { "question": "Which lens can be used to correct short sightedness?", "steps": ["Step 1: Short sightedness means distant objects are not seen clearly.", "Step 2: A concave lens spreads light rays before they enter the eye.", "Step 3: This helps the image focus on the retina."], "answer": "A concave lens." },
            "tryThis": { "question": "Which part of the eye receives the image?", "choices": ["Retina", "Iris", "Eyelid", "Tear gland"], "correct": 0, "explanation": "The retina is the light-sensitive layer where the image is formed." }
          }
        ]
      }],
    "quiz": [
      { "q": "Which is a natural source of light?", "choices": ["The sun", "Electric bulb", "Lit candle", "Mirror"], "correct": 0, "why": "The sun is a luminous natural object." },
      { "q": "How does light travel?", "choices": ["In straight lines", "In circles", "In zigzag lines", "Only upwards"], "correct": 0, "why": "Light travels in straight lines." },
      { "q": "What is formed when an opaque object blocks light?", "choices": ["A shadow", "A rainbow", "A mirror", "A lens"], "correct": 0, "why": "Opaque materials block light casting a shadow." },
      { "q": "What is reflection of light?", "choices": ["Bouncing back of light from a surface", "Bending of light in water", "Splitting of white light", "Absorption of light"], "correct": 0, "why": "Reflection is bouncing back of light rays." },
      { "q": "Why does a stick look bent in water?", "choices": ["Refraction of light", "Reflection of light", "Absorption of light", "Dispersion of light"], "correct": 0, "why": "Refraction bends light across media." },
      { "q": "Which lens is thicker in the middle?", "choices": ["Convex lens", "Concave lens", "Plane lens", "Opaque lens"], "correct": 0, "why": "Convex lenses converge light." },
      { "q": "Which habit cares for the human eye?", "choices": ["Reading in adequate light", "Rubbing eyes with dirty hands", "Looking directly at the sun", "Reading in pitch darkness"], "correct": 0, "why": "Adequate light prevents eye strain." },
      { "q": "During a solar eclipse, which body is in the middle?", "choices": ["The Moon", "The Sun", "The Earth", "Mars"], "correct": 0, "why": "The Moon blocks sunlight during a solar eclipse." }
    ]
  },
  {
    "id": "interdependence-environment",
    "themeId": "science-environment",
    "themeName": "The Environment",
    "title": "Interdependence of things in the environment",
    "estMinutes": 20,
    "status": "published",
    "reviewStatus": "verified",
    "note": {
      "intro": "Why this matters: Living and non-living things depend on one another. Understanding biological interactions, food chains, and agroforestry helps learners protect the environment.",
      "learningObjectives": [
        "Identify biotic and abiotic components of the environment.",
        "Explain plant-animal interdependence and oxygen/carbon dioxide exchange.",
        "Construct food chains/webs and identify producers, consumers, and decomposers.",
        "Describe agroforestry, nitrogen-fixing trees, coppicing/pollarding, and woodlot fire lines."
      ],
      "whatYouNeedToKnow": [
        "An ecosystem has biotic (living) components like plants/animals and abiotic (non-living) components like sunlight/water/soil.",
        "Food chains show trophic energy flow from producers to consumers and decomposers.",
        "Agroforestry combines crops, trees, and animals; leguminous trees fix atmospheric nitrogen."
      ],
      "worked": {
        "problem": "Construct a four-stage food chain using grasshopper, grass, frog and snake.",
        "steps": [
          "Start with the producer: grass.",
          "Identify the primary consumer: grasshopper.",
          "Identify the secondary consumer: frog.",
          "Identify the tertiary consumer: snake."
        ],
        "answer": "Answer: Grass -> Grasshopper -> Frog -> Snake."
      },
      "recap": [
        "Biotic = living; Abiotic = non-living.",
        "Food chains show energy flow starting from green producers.",
        "Coppicing and pollarding allow sustainable wood harvesting.",
        "Fire lines stop accidental bushfires from destroying woodlots."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "environment-components-interdependence",
        "title": "1. Biotic and Abiotic Ecosystem Components",
        "modules": [
          {
            "moduleId": "living-nonliving-components",
            "title": "Biotic and Abiotic Components",
            "bigIdea": "An ecosystem consists of living biotic organisms interacting with physical abiotic factors.",
            "learnIt": [
              "Biotic (living) components: green plants (producers), animals (consumers), bacteria and fungi (decomposers).",
              "Abiotic (non-living) components: sunlight (ultimate source of energy), water, atmospheric gases (oxygen and carbon dioxide), mineral soil, rocks, temperature, and wind.",
              "Ecosystem interaction: biotic organisms cannot survive without abiotic physical factors. For instance, green plants require abiotic sunlight, carbon dioxide, water, and soil mineral nitrates to synthesize glucose during photosynthesis."
            ],
            "tryThis": {
              "question": "Which of the following is an abiotic component of a forest ecosystem?",
              "choices": ["Fungi decomposers", "Mineral soil nutrients", "Earthworms", "Acacia trees"],
              "correct": 1,
              "explanation": "Abiotic factors are non-living physical and chemical elements of the environment such as minerals, water, and air."
            }
          },
          {
            "moduleId": "plant-animal-interdependence",
            "imageUrl": "/images/science/carbon-oxygen-cycle.png",
            "imageCaption": "Gas exchange cycle between green plants releasing oxygen and animals exhaling carbon dioxide.",
            "title": "Biological Plant-Animal Interdependence",
            "bigIdea": "Plants and animals depend reciprocally on each other for respiratory gases, nutrition, and reproduction.",
            "learnIt": [
              "How animals depend on plants: herbivores depend on plants for dietary nutrition; animals inhale atmospheric oxygen (O2) released as a byproduct of plant photosynthesis; dense trees and bushes provide shelter and nesting habitats; medicinal plants provide herbal remedies.",
              "How plants depend on animals: animals exhale carbon dioxide (CO2) required by green plants for photosynthesis; insects (bees, butterflies) and birds pollinate plant flowers; birds and grazing mammals disperse plant seeds through dung or fur attachment; animal droppings and carcasses decompose into nutrient-rich organic humus."
            ],
            "tryThis": {
              "question": "During biological gas exchange between forest trees and forest animals, what gas do trees release during daytime that animals inhale?",
              "choices": ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
              "correct": 1,
              "explanation": "Green plants produce oxygen during sunlight photosynthesis, which animals require for aerobic cellular respiration."
            }
          }
        ]
      },
      {
        "subtopicId": "food-chains-and-webs",
        "title": "2. Food Chains, Webs and Trophic Energy Flow",
        "modules": [
          {
            "moduleId": "food-chains-webs",
            "imageUrl": "/images/science/food-chain.png",
            "imageCaption": "Energy transfer in a farm food chain from producers (plants) to primary and secondary consumers.",
            "title": "Trophic Levels and Energy Flow",
            "bigIdea": "Food chains trace the directional flow of solar energy from green producers through consumers and decomposers.",
            "learnIt": [
              "A food chain is a linear feeding relationship showing how nutritional energy is transferred from one organism to another.",
              "Trophic levels: Producer (always a green plant or algae that traps solar energy); Primary consumer (herbivore feeding directly on plants, e.g., grasshopper, goat, zebra); Secondary consumer (carnivore feeding on herbivores, e.g., frog, lion, lizard); Tertiary consumer (top predator feeding on secondary consumers, e.g., eagle, hawk, python).",
              "Decomposers: saprophytic bacteria and fungi that secrete enzymes to break down dead plant and animal matter, recycling mineral salts back into the soil.",
              "Rule of energy flow: arrows in a food chain diagram MUST always point in the direction of energy transfer (from the organism being eaten toward the consumer)."
            ],
            "tryThis": {
              "question": "In the ecological food chain: Grass -> Grasshopper -> Chicken -> Hawk, which organism occupies the trophic level of secondary consumer?",
              "choices": ["Grass", "Grasshopper", "Chicken", "Hawk"],
              "correct": 2,
              "explanation": "The grasshopper is the primary consumer (herbivore), while the chicken that eats the grasshopper is the secondary consumer."
            }
          }
        ]
      },
      {
        "subtopicId": "agroforestry-wood-projects",
        "title": "3. Agroforestry, Tree Harvesting and Woodlot Management",
        "modules": [
          {
            "moduleId": "agroforestry-importance",
            "title": "Agroforestry and Nitrogen-Fixing Trees",
            "bigIdea": "Agroforestry combines tree planting with agriculture, using nitrogen-fixing species to enrich soil naturally.",
            "learnIt": [
              "Agroforestry is the agricultural practice of integrating trees and shrubs into crop fields or livestock pasture on the same piece of land.",
              "Benefits: trees act as windbreaks shielding crops from violent storms; deep tree roots bind soil particles preventing soil erosion; tree leaf litter decomposes into fertilizing humus; trees provide shade, firewood, building poles, and livestock fodder.",
              "Nitrogen-fixing leguminous trees (e.g., Calliandra, Leucaena, Sesbania): their roots house symbiotic root nodule bacteria that fix inert atmospheric nitrogen into soil nitrates, boosting soil fertility without synthetic chemical fertilizers."
            ],
            "tryThis": {
              "question": "Why do agricultural extension officers encourage farmers to plant leguminous shrubs like Calliandra along terraces in agroforestry farms?",
              "choices": ["To attract wild monkeys", "To fix atmospheric nitrogen into nitrates and improve soil fertility", "To dry up farm wetlands completely", "To poison soil insects"],
              "correct": 1,
              "explanation": "Leguminous root nodules contain Rhizobium bacteria that enrich soil nitrogen levels naturally."
            }
          },
          {
            "moduleId": "tree-harvesting-techniques",
            "title": "Tree Harvesting Techniques and Woodlot Fire Lines",
            "bigIdea": "Coppicing, pollarding, and lopping allow sustainable wood harvesting, while fire lines prevent forest fires.",
            "learnIt": [
              "Sustainable harvesting techniques: Coppicing (cutting a tree trunk close to ground level so multiple vigorous new stems shoot upward from the living stump); Pollarding (cutting off the top crown branches of a tree high above the ground out of reach of browsing cattle so dense shoots regrow); Lopping (cutting selected side branches for firewood or animal fodder while leaving the main trunk growing).",
              "Managing school and home woodlots: plant fast-growing species during rainy seasons, water seedlings, and weed regularly.",
              "Fire lines (firebreaks): wide strips of land around and through a forest plantation where all grass and vegetation are cleared to bare mineral soil. Function: halts spreading accidental bushfires from crossing into the woodlot."
            ],
            "tryThis": {
              "question": "What is the primary purpose of clearing wide bare strips of soil called fire lines around a school timber woodlot?",
              "choices": ["To serve as running tracks for students", "To prevent spreading bushfires from crossing into the timber trees", "To allow rainwater to collect into ponds", "To let sunlight reach grass"],
              "correct": 1,
              "explanation": "Clearing dry flammable grass creates a fuel gap that stops ground fires from reaching planted forest trees."
            }
          }
        ]
      }
    
      ,{
        "subtopicId": "premium-ecosystem-application",
        "title": "4. Premium Exam Practice: Food Webs and Environmental Decisions",
        "modules": [
          {
            "moduleId": "food-web-reasoning",
            "title": "Reasoning with Food Chains and Food Webs",
            "bigIdea": "Food-chain questions test cause and effect in ecosystems.",
            "learnIt": [
              "A food chain starts with a producer, usually a green plant, because it makes food using sunlight.",
              "Arrows show the direction of energy flow, from food to feeder. Grass -> grasshopper means energy moves from grass to grasshopper.",
              "If one organism is removed, other organisms may increase or decrease depending on their feeding relationships."
            ],
            "workedExample": { "question": "Grass -> grasshopper -> frog -> snake. What may happen to frogs if many grasshoppers are killed?", "steps": ["Step 1: Frogs feed on grasshoppers.", "Step 2: If grasshoppers reduce, frogs have less food.", "Step 3: Frog numbers may reduce."], "answer": "The number of frogs may reduce because they have less food." },
            "tryThis": { "question": "What is the producer in this chain: maize -> rat -> snake?", "choices": ["Maize", "Rat", "Snake", "Soil"], "correct": 0, "explanation": "Maize is a green plant and makes its own food." }
          },
          {
            "moduleId": "agroforestry-decisions",
            "title": "Agroforestry and Conservation Decisions",
            "bigIdea": "Environmental science asks learners to choose practices that protect soil, water and living things.",
            "learnIt": [
              "Agroforestry means growing trees together with crops or animals on the same land.",
              "Trees can reduce soil erosion, provide shade, act as windbreaks and improve soil fertility when leaves decompose.",
              "Good environmental decisions balance human needs with conservation so resources remain useful in the future."
            ],
            "workedExample": { "question": "Give two benefits of planting trees on a farm.", "steps": ["Step 1: Think of how trees affect soil and weather.", "Step 2: Trees reduce erosion by holding soil.", "Step 3: Trees also provide shade, fruits, timber or improve soil."], "answer": "Trees reduce soil erosion and provide useful products such as fruits, timber or shade." },
            "tryThis": { "question": "Which practice helps conserve soil?", "choices": ["Planting trees on slopes", "Burning all vegetation", "Overgrazing", "Cutting all trees"], "correct": 0, "explanation": "Trees help hold soil and reduce erosion." }
          }
        ]
      }],
    "quiz": [
      { "q": "Which is an abiotic component of the environment?", "choices": ["Soil minerals", "Grass", "Bacteria", "Insects"], "correct": 0, "why": "Soil minerals are non-living physical components." },
      { "q": "What does the arrow in a food chain represent?", "choices": ["Direction of energy flow", "Size of animals", "Speed of movement", "Number of plants"], "correct": 0, "why": "Arrows point in the direction energy is transferred." },
      { "q": "Which organism breaks down dead plants and animals?", "choices": ["Decomposer", "Producer", "Herbivore", "Carnivore"], "correct": 0, "why": "Decomposers break down dead matter into soil nutrients." },
      { "q": "What is agroforestry?", "choices": ["Growing trees together with crops or livestock", "Cutting down all forest trees", "Growing crops in water only", "Keeping animals inside forests without trees"], "correct": 0, "why": "Agroforestry combines tree growing with farming." },
      { "q": "Why do farmers mulch around young tree seedlings?", "choices": ["To retain soil moisture", "To attract insects", "To heat the tree roots", "To prevent leaves from growing"], "correct": 0, "why": "Mulch covers soil and reduces evaporation." },
      { "q": "Which tree harvesting practice involves cutting stem near ground level for regrowth?", "choices": ["Coppicing", "Pollarding", "Lopping", "Overgrazing"], "correct": 0, "why": "Coppicing allows new stems to shoot from the stump." },
      { "q": "What is the function of a fire line in a woodlot?", "choices": ["To stop spreading bushfires", "To collect rainwater", "To grow grass", "To shade trees"], "correct": 0, "why": "Cleared fire lines prevent bushfires from crossing." },
      { "q": "Which trees fix atmospheric nitrogen into soil?", "choices": ["Leguminous trees like Calliandra", "Eucalyptus", "Pine trees", "Mango trees"], "correct": 0, "why": "Leguminous root nodules fix atmospheric nitrogen." }
    ]
  },
  {
    "id": "population-and-health",
    "themeId": "science-community-health",
    "themeName": "The Community, Population and Family Life",
    "title": "Population and health",
    "estMinutes": 24,
    "status": "published",
    "reviewStatus": "verified",
    "note": {
      "intro": "Why this matters: Community health depends on sanitation, clean water, vector control, ORS preparation, worm prevention, and safe social habits.",
      "learningObjectives": [
        "Explain vector life cycles and control methods for Anopheles mosquitoes and houseflies.",
        "Describe the 4 Fs transmission path and prepare homemade Oral Rehydration Salts (ORS).",
        "Identify hookworms, tapeworms, and roundworms and explain prevention.",
        "Recognise youth substance abuse effects (alcoholism/cirrhosis) and apply assertiveness skills.",
        "Conduct tally-chart health surveys and construct school tippy-taps."
      ],
      "whatYouNeedToKnow": [
        "Female Anopheles mosquitoes transmit malaria; their 4-stage aquatic life cycle is controlled by ITNs, draining water, and pouring oil.",
        "Cholera and diarrhoea spread via 4 Fs (Faeces, Flies, Fingers, Food); ORS formula = 1 litre boiled water + 8 tsp sugar + 1 tsp salt.",
        "Hookworm larvae penetrate bare feet; tapeworms spread in undercooked beef/pork; excessive alcohol causes liver cirrhosis."
      ],
      "worked": {
        "problem": "Explain how boiling water and washing hands help prevent diarrhoea in a home.",
        "steps": [
          "Diarrhoea is caused by germs contaminating food or water.",
          "Boiling kills intestinal pathogens in drinking water.",
          "Hand washing with soap removes faecal germs from fingers before handling food."
        ],
        "answer": "Answer: Boiling water kills pathogens, while washing hands breaks the faecal-oral transmission chain."
      },
      "recap": [
        "Malaria vector = Female Anopheles mosquito; controlled by nets and draining pools.",
        "ORS formula: 1 litre clean boiled water + 8 level teaspoons sugar + 1 level teaspoon salt.",
        "Wear shoes outside to prevent hookworms; cook beef/pork well to prevent tapeworms.",
        "Alcoholism causes fatal liver cirrhosis; use assertiveness to resist bad peer pressure."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "vector-borne-diseases",
        "title": "1. Vector-Borne Diseases and Vector Life Cycles",
        "modules": [
          {
            "moduleId": "malaria-vector-control",
            "imageUrl": "/images/science/anopheles-mosquito-life-cycle.png",
            "imageCaption": "4-stage life cycle of the female Anopheles mosquito vector.",
            "title": "Female Anopheles Mosquito and Malaria Control",
            "bigIdea": "Malaria is transmitted by female Anopheles mosquitoes whose aquatic breeding cycle can be broken by draining pools.",
            "learnIt": [
              "Vector transmission: the female Anopheles mosquito transmits Plasmodium protozoan parasites into human blood while feeding on blood.",
              "4-stage complete metamorphosis life cycle: Egg rafts (laid on stagnant water surface) -> Larva (wriggler breathing through spiracles just below water surface) -> Pupa (comma-shaped active tumbler) -> Adult winged mosquito.",
              "Vector control methods: sleep under Insecticide-Treated Nets (ITNs); slash bushes around homesteads where adult mosquitoes rest; drain stagnant pools or empty broken containers to destroy egg/larval breeding sites; pour oil over open water pools to suffocate larvae."
            ],
            "tryThis": {
              "question": "Why does pouring a thin layer of oil or paraffin on stagnant water pools kill mosquito larvae?",
              "choices": ["It poisons their food", "It blocks their breathing spiracles from reaching air at the surface, causing suffocation", "It burns them with solar heat", "It sinks them to the mud bottom"],
              "correct": 1,
              "explanation": "Mosquito larvae must surface to breathe atmospheric air; oil creates an impermeable film blocking gas exchange."
            }
          },
          {
            "moduleId": "houseflies-transmission",
            "title": "Houseflies and Disease Transmission",
            "bigIdea": "Houseflies spread filth germs onto exposed food through hairy legs and feeding vomit.",
            "learnIt": [
              "Housefly transmission mechanism: houseflies breed in rotting garbage, faeces, and manure. Germs stick to their hairy bodies and legs. When landing on human food, flies vomit digestive saliva onto food to liquefy it, depositing pathogenic bacteria.",
              "Diseases spread by houseflies: Trachoma (contagious eye blindness infection), Cholera, Typhoid, Dysentery, and Diarrhoea.",
              "Control: always keep human food covered, dispose of garbage in covered pits, construct ventilated improved pit (VIP) latrines."
            ],
            "tryThis": {
              "question": "Which contagious bacterial eye infection leading to blindness is mechanically transmitted by houseflies landing on human faces?",
              "choices": ["Trachoma", "Malaria", "Rickets", "Polio"],
              "correct": 0,
              "explanation": "Houseflies feeding on eye secretions transfer Chlamydia trachomatis bacteria between individuals."
            }
          }
        ]
      },
      {
        "subtopicId": "sanitation-waterborne",
        "title": "2. Sanitation, Water-Borne Illnesses and ORS Preparation",
        "modules": [
          {
            "moduleId": "sanitation-four-fs",
            "title": "The Four Fs Transmission Path and Cholera/Typhoid",
            "bigIdea": "Faecal-oral infections spread via Faeces, Flies, Fingers, and Food when sanitation is poor.",
            "learnIt": [
              "The Four Fs Transmission chain: Faeces (infected human faeces contain millions of germs) -> Flies / Fingers (flies land on faeces or unwashed fingers touch latrine handles) -> Food / Fluids (germs contaminate food or drinking water) -> New host ingestion.",
              "Water-borne illnesses: Cholera (caused by Vibrio cholerae bacteria, resulting in sudden violent watery rice-water diarrhoea and rapid fatal dehydration); Typhoid fever (caused by Salmonella typhi bacteria contaminating food/water); Amoebic/Bacillary Dysentery (severe diarrhoea containing blood and mucus).",
              "Prevention: always boil drinking water for at least 10 minutes or use chlorine tablets; wash hands thoroughly with soap and running water after using pit latrines and before eating."
            ],
            "tryThis": {
              "question": "In the faecal-oral disease transmission chain known as the '4 Fs', what do the four letters represent?",
              "choices": ["Forests, Farms, Fruits, Fires", "Faeces, Flies, Fingers, Food", "Fish, Frogs, Feathers, Feet", "Fever, Fatigue, Fainting, Flu"],
              "correct": 1,
              "explanation": "Pathogenic intestinal bacteria transfer from infected Faeces via Flies and unwashed Fingers into ingested Food."
            }
          },
          {
            "moduleId": "ors-preparation",
            "title": "Preparation and Role of Oral Rehydration Salts (ORS)",
            "bigIdea": "ORS prevents fatal dehydration during diarrhoea by replenishing lost body water, glucose, and sodium electrolytes.",
            "learnIt": [
              "Role of ORS: severe diarrhoea and vomiting expel vital body fluids and mineral electrolytes rapidly. ORS solution restores fluid balance immediately.",
              "Exact preparation of homemade ORS (Sugar-Salt Solution SSS): Measure exactly 1 litre of clean boiled and cooled drinking water into a clean container. Add exactly 8 level teaspoons of sugar (glucose energy and sodium absorption helper). Add exactly 1 level teaspoon of common table salt (sodium chloride). Stir thoroughly with a clean spoon until all crystals dissolve completely.",
              "Administration: give the sick child or adult ORS solution after every watery stool pass and seek medical help at a health center."
            ],
            "tryThis": {
              "question": "When preparing homemade Oral Rehydration Salts (ORS) solution using 1 litre of clean boiled water, what exact measurements of sugar and salt must be mixed?",
              "choices": ["1 level teaspoon sugar and 8 level teaspoons salt", "8 level teaspoons sugar and 1 level teaspoon salt", "4 level teaspoons sugar and 4 level teaspoons salt", "10 level teaspoons sugar and half teaspoon salt"],
              "correct": 1,
              "explanation": "The precise physiological ratio of 8 teaspoons sugar to 1 teaspoon salt per litre optimizes intestinal water absorption."
            }
          }
        ]
      },
      {
        "subtopicId": "worm-infestations",
        "title": "3. Intestinal Worm Infestations",
        "modules": [
          {
            "moduleId": "worms-prevention",
            "title": "Hookworms, Tapeworms and Roundworms",
            "bigIdea": "Parasitic worms rob the body of blood and nutrients, but can be prevented by wearing shoes and cooking meat well.",
            "learnIt": [
              "Hookworm: microscopic larvae living in damp faeces-polluted soil bore directly through the unbroken skin of bare human feet. Inside the intestine, hookworms suck blood, causing severe anaemia and weakness. Prevention: wear shoes or sandals when walking outside or visiting latrines.",
              "Tapeworm: long ribbon-like flatworms transmitted when humans consume undercooked infected beef (beef tapeworm) or pork (pork tapeworm) containing bladder worm cysts. Prevention: thoroughly roast or boil all animal meat before eating.",
              "Roundworm (Ascaris): transmitted by ingesting roundworm eggs present on unwashed raw fruits/vegetables or dirty hands. Prevention: wash all fruits with clean water before eating and deworm every 3 months."
            ],
            "tryThis": {
              "question": "Which intestinal worm infection is specifically prevented by thoroughly roasting or boiling beef and pork before eating?",
              "choices": ["Hookworm", "Tapeworm", "Ringworm", "Earthworm"],
              "correct": 1,
              "explanation": "Tapeworm larvae encyst in cattle and pig muscle tissues and are destroyed only by high cooking temperatures."
            }
          }
        ]
      },
      {
        "subtopicId": "social-health-community",
        "title": "4. Social Health Issues and Community Hygiene Projects",
        "modules": [
          {
            "moduleId": "substance-abuse-cirrhosis",
            "title": "Substance Abuse and Liver Cirrhosis",
            "bigIdea": "Abusing addictive drugs and alcohol causes organ failure, mental breakdown, and liver cirrhosis.",
            "learnIt": [
              "Substance abuse is the improper or excessive consumption of addictive drugs and chemicals without medical prescription.",
              "Commonly abused substances among youth: Alcohol, Tobacco cigarettes, Marijuana (bhang), Mairungi (khat), and inhaled petrol/glue.",
              "Health effects of chronic alcoholism: causes Liver Cirrhosis (fatal hardening and scarring of liver tissue leading to liver failure), stomach ulcers, domestic violence, and brain deterioration.",
              "Assertiveness against anti-social peer pressure: assertiveness is the life skill of firmly saying 'NO' to negative peer pressure without being aggressive or intimidated. Avoid friends who smoke or drink alcohol."
            ],
            "tryThis": {
              "question": "Which fatal organ condition characterized by fibrous hardening and scarring is caused by chronic habitual alcohol consumption?",
              "choices": ["Nephritis", "Liver Cirrhosis", "Polio", "Asthma"],
              "correct": 1,
              "explanation": "Heavy alcohol intake poisons hepatocytes, converting functional liver tissue into scar tissue."
            }
          },
          {
            "moduleId": "school-health-clubs",
            "imageUrl": "/images/science/tippy-tap-handwashing.png",
            "imageCaption": "Village tippy-tap device enabling hygienic touch-free handwashing with soap.",
            "title": "Tally-Chart Surveys and Tippy-Tap Construction",
            "bigIdea": "School health clubs conduct local health surveys and build hygienic tippy-taps to prevent community disease.",
            "learnIt": [
              "Tally-chart health surveys: school health clubs collect data on household latrine coverage, safe water access, and common illnesses using tally marks (||||) to organize frequency tables and plan hygiene education.",
              "Constructing a Tippy-Tap handwashing station: suspend a 5-litre plastic water jerrycan on a horizontal wooden stick between two upright poles. Pierce a small hole near the handle and attach a string from the handle down to a foot pedal stick near the ground. Hang a piece of soap on a string nearby. When a user steps on the foot pedal, the jerrycan tilts pouring clean water without dirty hands touching the container."
            ],
            "tryThis": {
              "question": "Why is a foot-operated Tippy-Tap considered more hygienic for rural handwashing than dipping hands into a communal water basin?",
              "choices": ["It heats the water automatically", "It prevents dirty hands from touching and re-contaminating the water vessel", "It filters salt from water", "It saves soap"],
              "correct": 1,
              "explanation": "Because the user operates the water tilt with their foot, clean hands never touch dirty container surfaces."
            }
          }
        ]
      }
    
      ,{
        "subtopicId": "premium-health-application",
        "title": "5. Premium Exam Practice: Disease Prevention and Community Health",
        "modules": [
          {
            "moduleId": "disease-transmission-cases",
            "title": "Disease Transmission Case Questions",
            "bigIdea": "Health case questions ask learners to connect a disease to its mode of spread and prevention.",
            "learnIt": [
              "Malaria is spread by female Anopheles mosquitoes. Prevention includes sleeping under treated mosquito nets and removing stagnant water.",
              "Cholera and typhoid spread through contaminated food and water. Prevention includes drinking safe water, washing hands and using latrines properly.",
              "Worms may spread through contaminated soil, water or food depending on the type. Shoes, sanitation and safe food help prevention."
            ],
            "workedExample": { "question": "A village has many open containers with stagnant water. Which disease risk may increase and why?", "steps": ["Step 1: Stagnant water can breed mosquitoes.", "Step 2: Female Anopheles mosquitoes spread malaria.", "Step 3: Therefore malaria risk may increase."], "answer": "Malaria risk may increase because mosquitoes breed in stagnant water." },
            "tryThis": { "question": "Which action helps prevent cholera?", "choices": ["Drinking boiled water", "Leaving food uncovered", "Defecating near water sources", "Sharing dirty cups"], "correct": 0, "explanation": "Boiling water kills many disease-causing germs." }
          },
          {
            "moduleId": "community-health-action",
            "title": "Community Health Action Plans",
            "bigIdea": "Science is applied when learners can suggest practical community health actions.",
            "learnIt": [
              "A health club can promote handwashing, compound cleaning, safe water storage and proper rubbish disposal.",
              "A tippy tap helps people wash hands where there is no tap, especially near latrines or eating places.",
              "Health surveys can use tally marks to count cases, then use the results to decide what action is needed."
            ],
            "workedExample": { "question": "A school survey shows many pupils do not wash hands after visiting the latrine. Suggest two actions.", "steps": ["Step 1: Identify the hygiene problem: poor handwashing.", "Step 2: Provide a handwashing facility such as a tippy tap.", "Step 3: Teach pupils to wash hands with soap or ash after using the latrine."], "answer": "Build handwashing facilities and teach pupils to wash hands after using the latrine." },
            "tryThis": { "question": "What is the main purpose of a tippy tap?", "choices": ["Handwashing", "Cooking food", "Measuring rainfall", "Catching mosquitoes"], "correct": 0, "explanation": "A tippy tap is a simple handwashing device." }
          }
        ]
      }],
    "quiz": [
      { "q": "Which insect transmits malaria parasites?", "choices": ["Female Anopheles mosquito", "Housefly", "Tsetse fly", "Cockroach"], "correct": 0, "why": "Female Anopheles mosquitoes transmit Plasmodium during feeding." },
      { "q": "How is cholera mainly prevented?", "choices": ["Boiling drinking water and proper latrine use", "Sleeping under a net", "Wearing spectacles", "Planting tall trees"], "correct": 0, "why": "Cholera spreads through contaminated water and food." },
      { "q": "Why should people wear shoes when visiting a pit latrine?", "choices": ["To prevent hookworm larvae from entering bare feet", "To look smart", "To avoid slipping only", "To kill flies"], "correct": 0, "why": "Hookworm larvae bore directly through bare foot skin." },
      { "q": "Which drug causes liver cirrhosis when consumed in excess?", "choices": ["Alcohol", "Aspirin", "Panadol", "Chloroquine"], "correct": 0, "why": "Excessive alcohol consumption destroys liver cells." },
      { "q": "What is a tippy-tap used for?", "choices": ["Hygienic handwashing with soap", "Boiling water", "Catching fish", "Storing firewood"], "correct": 0, "why": "A tippy-tap allows foot-operated handwashing." },
      { "q": "What tool uses tally marks to record community health information?", "choices": ["Health survey data table", "Microscope", "Stethoscope", "Thermometer"], "correct": 0, "why": "Survey tables use tally marks to count occurrences cleanly." },
      { "q": "What exact formula makes 1 litre of homemade ORS?", "choices": ["8 teaspoons sugar and 1 teaspoon salt", "1 teaspoon sugar and 8 teaspoons salt", "4 teaspoons sugar and 4 teaspoons salt", "10 teaspoons sugar and half teaspoon salt"], "correct": 0, "why": "1 litre boiled water takes 8 level tsp sugar and 1 level tsp salt." },
      { "q": "What do the 4 Fs represent in disease transmission?", "choices": ["Faeces, Flies, Fingers, Food", "Forests, Farms, Fruits, Fires", "Fish, Frogs, Feathers, Feet", "Fever, Flu, Fatigue, Fainting"], "correct": 0, "why": "Germs travel from Faeces via Flies and Fingers into Food." }
    ]
  },
  {
    "id": "energy-resources-environment",
    "themeId": "science-environment",
    "themeName": "The Environment",
    "title": "Energy resources in the environment",
    "estMinutes": 18,
    "status": "published",
    "reviewStatus": "verified",
    "note": {
      "intro": "Why this matters: Energy resources power daily life and industrial production. Learners compare renewable and non-renewable resources.",
      "learningObjectives": [
        "Identify renewable and non-renewable energy resources.",
        "Describe solar, water, wind, plant, animal, and fossil fuel resources.",
        "Explain sustainable resource use and conservation."
      ],
      "whatYouNeedToKnow": [
        "The Sun is the primary source of energy in the environment.",
        "Renewable resources (solar, wind, water, biomass) can be replaced naturally. Non-renewable resources (fossil fuels: coal, oil, natural gas) take millions of years to form and get exhausted."
      ],
      "worked": {
        "problem": "Explain why biogas from animal dung is considered a renewable resource while petroleum is non-renewable.",
        "steps": [
          "Define renewable: can be regenerated continuously from living cattle dung.",
          "Define non-renewable: petroleum takes millions of years underground to form from prehistoric remains and cannot be replaced once extracted."
        ],
        "answer": "Answer: Biogas is regenerated continuously from cattle dung, whereas petroleum takes millions of years to form and gets exhausted."
      },
      "recap": [
        "Sunlight is the major source of environmental energy.",
        "Fossil fuels (coal, oil, gas) are non-renewable.",
        "Use energy-saving stoves and renewable solar/hydro power to conserve environment."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "major-energy-sources",
        "title": "1. Solar, Water and Wind Energy",
        "modules": [
          {
            "moduleId": "solar-wind-water",
            "title": "Renewable Natural Energy Sources",
            "bigIdea": "The sun, moving water, and wind provide clean renewable energy that never runs out.",
            "learnIt": [
              "Solar energy: sunlight powers plant photosynthesis, dries crops/clothes, and generates electricity using solar photovoltaic panels.",
              "Hydroelectric power: fast-flowing river water or waterfalls turn water turbines connected to generators.",
              "Wind energy: moving air drives windmills and wind turbines to pump water from boreholes and generate electricity."
            ],
            "tryThis": {
              "question": "Which energy device converts sunlight directly into electric current?",
              "choices": ["Solar photovoltaic panel", "Windmill", "Dynamo", "Dry cell"],
              "correct": 0,
              "explanation": "Solar panels contain photovoltaic silicon cells that convert solar photons into electrical current."
            }
          }
        ]
      },
      {
        "subtopicId": "biological-fossil-fuels",
        "title": "2. Biomass, Biogas and Fossil Fuels",
        "modules": [
          {
            "moduleId": "fossil-fuels",
            "imageUrl": "/images/science/fossil-fuels-formation.png",
            "imageCaption": "Geological cross-section showing prehistoric strata transforming into underground coal and petroleum under heat and pressure.",
            "title": "Fossil Fuels vs Biological Energy",
            "bigIdea": "Fossil fuels are non-renewable hydrocarbon deposits formed from prehistoric remains.",
            "learnIt": [
              "Fossil fuels (Coal, Crude oil/petroleum, Natural gas): formed underground over millions of years from compressed prehistoric plant and marine animal remains under intense heat and pressure.",
              "Biomass and Biogas: renewable organic energy from firewood, charcoal, agricultural residues, and methane biogas generated by fermenting cattle dung in anaerobic digesters."
            ],
            "tryThis": {
              "question": "Why is crude petroleum classified as a non-renewable energy resource?",
              "choices": ["Because it takes millions of years to form underground and gets exhausted once mined", "Because it is liquid", "Because it burns with smoke", "Because it is found under lakes"],
              "correct": 0,
              "explanation": "Non-renewable resources cannot regenerate within a human lifetime once depleted."
            }
          }
        ]
      }
    
      ,{
        "subtopicId": "premium-energy-application",
        "title": "3. Premium Exam Practice: Energy Choices and Conservation",
        "modules": [
          {
            "moduleId": "renewable-nonrenewable-comparison",
            "title": "Comparing Renewable and Non-Renewable Energy",
            "bigIdea": "Energy-resource questions often ask learners to compare sources and choose the best option for a situation.",
            "learnIt": [
              "Renewable energy sources are naturally replaced, such as sunlight, wind, flowing water and biomass when well managed.",
              "Non-renewable sources such as coal, petroleum and natural gas can be used up and may pollute the environment.",
              "A good energy choice depends on availability, cost, safety and environmental effect."
            ],
            "workedExample": { "question": "Why is solar energy suitable for many homes in Uganda?", "steps": ["Step 1: Uganda receives strong sunlight in many places.", "Step 2: Solar energy does not require fuel after installation.", "Step 3: It produces less smoke than firewood or charcoal."], "answer": "Because sunlight is available and solar energy is clean after installation." },
            "tryThis": { "question": "Which is a non-renewable source of energy?", "choices": ["Petroleum", "Sunlight", "Wind", "Flowing water"], "correct": 0, "explanation": "Petroleum forms over a very long time and can be used up." }
          },
          {
            "moduleId": "energy-conservation-home",
            "title": "Saving Energy at Home and School",
            "bigIdea": "Energy conservation reduces waste, saves money and protects the environment.",
            "learnIt": [
              "Switch off lights and appliances when they are not being used.",
              "Use improved stoves or efficient cooking methods to reduce firewood and charcoal use.",
              "Planting trees helps replace wood fuel and protects the environment."
            ],
            "workedExample": { "question": "Give two ways a family can reduce fuel use while cooking.", "steps": ["Step 1: Think of cooking methods that waste less heat.", "Step 2: Improved stoves use less charcoal or firewood.", "Step 3: Covering saucepans helps food cook faster."], "answer": "Use an improved stove and cover saucepans while cooking." },
            "tryThis": { "question": "Which action saves electrical energy?", "choices": ["Switching off unused lights", "Leaving a radio on all night", "Opening the fridge for long", "Using damaged wires"], "correct": 0, "explanation": "Switching off unused lights prevents energy waste." }
          }
        ]
      }],
    "quiz": [
      { "q": "Which is the primary source of energy in the environment?", "choices": ["The Sun", "Petroleum", "Wind", "Wood"], "correct": 0, "why": "The Sun provides energy for all weather, plants, and life." },
      { "q": "Which of these is a non-renewable energy resource?", "choices": ["Crude oil / Petroleum", "Solar energy", "Wind energy", "Biogas"], "correct": 0, "why": "Petroleum takes millions of years to form and gets exhausted." },
      { "q": "What gas is primarily produced in a biogas digester from animal dung?", "choices": ["Methane", "Oxygen", "Nitrogen", "Chlorine"], "correct": 0, "why": "Anaerobic fermentation of dung produces methane gas." },
      { "q": "Which device generates electricity from moving wind?", "choices": ["Wind turbine", "Solar panel", "Accumulator", "Ammeter"], "correct": 0, "why": "Wind turbines rotate blades to drive electrical generators." },
      { "q": "Why are energy-saving stoves encouraged in rural communities?", "choices": ["To reduce firewood consumption and deforestation", "To produce more smoke", "To make food burn", "To stop cooking"], "correct": 0, "why": "Energy-saving stoves retain heat and conserve forest woodlands." },
      { "q": "Hydroelectric power plants generate electricity using:", "choices": ["Falling or fast-flowing river water", "Burning coal", "Sunlight", "Nuclear fuel"], "correct": 0, "why": "Water kinetic energy spins generator turbines." },
      { "q": "Which resource is renewable?", "choices": ["Sunlight", "Coal", "Natural gas", "Kerosene"], "correct": 0, "why": "Sunlight shines continuously every day." },
      { "q": "What remains formed coal millions of years ago?", "choices": ["Ancient swamp forests and plant vegetation", "Dinosaur bones only", "Ocean salt", "Plastic waste"], "correct": 0, "why": "Prehistoric swamp forests compressed under rock formed coal beds." }
    ]
  },
  {
    "id": "simple-machines-friction",
    "themeId": "science-matter-energy",
    "themeName": "Matter and Energy",
    "title": "Simple machines and friction",
    "estMinutes": 20,
    "status": "published",
    "reviewStatus": "verified",
    "note": {
      "intro": "Why this matters: Simple machines make work easier by multiplying force or changing direction. Friction opposes motion but enables walking and braking.",
      "learningObjectives": [
        "Calculate Mechanical Advantage (MA) and apply the principle of moments on levers.",
        "Classify first, second, and third class levers.",
        "Describe inclined planes, wedges, screws, pulleys, and wheel-and-axles.",
        "Distinguish useful vs nuisance friction and explain methods of increasing or reducing friction."
      ],
      "whatYouNeedToKnow": [
        "Mechanical Advantage = Load / Effort.",
        "Principle of moments: clockwise turning moment equals anticlockwise moment (Load x Load Distance = Effort x Effort Distance).",
        "Friction is reduced by lubricating with grease/oil, using ball bearings, and streamlining."
      ],
      "worked": {
        "problem": "A load of 120 N is lifted using an effort of 40 N on a lever. Find the Mechanical Advantage.",
        "steps": [
          "State formula: MA = Load / Effort.",
          "Substitute values: MA = 120 N / 40 N = 3."
        ],
        "answer": "Answer: The Mechanical Advantage is 3."
      },
      "recap": [
        "1st class lever = Fulcrum in middle; 2nd class = Load in middle; 3rd class = Effort in middle.",
        "MA = Load / Effort.",
        "Oil and ball bearings reduce nuisance friction in machines."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "levers-moments",
        "title": "1. Levers, Classes and Principle of Moments",
        "modules": [
          {
            "moduleId": "lever-basics",
            "imageUrl": "/images/science/three-classes-of-levers.png",
            "imageCaption": "Comparison of 1st, 2nd, and 3rd class levers showing effort, load, and fulcrum positions.",
            "title": "Classes of Levers and Mechanical Advantage",
            "bigIdea": "Levers multiply applied effort around a pivot fulcrum according to three distinct classes.",
            "learnIt": [
              "A lever is a rigid bar turning about a fixed pivot called the Fulcrum (F). Load (L) is the weight lifted; Effort (E) is the force applied.",
              "First Class Lever: Fulcrum lies between Load and Effort (L-F-E). Examples: seesaw, crowbar, pair of scissors, pliers, hammer, claw hammer.",
              "Second Class Lever: Load lies between Fulcrum and Effort (F-L-E). Examples: wheelbarrow, nutcracker, bottle opener.",
              "Third Class Lever: Effort lies between Fulcrum and Load (F-E-L). Examples: pair of sugar tongs, tweezers, human forearm lifting weight, fishing rod.",
              "Mechanical Advantage (MA) = Load / Effort. Principle of Moments: Load x Load Distance = Effort x Effort Distance."
            ],
            "tryThis": {
              "question": "In a wheelbarrow, the heavy load sits between the front wheel fulcrum and the handles where effort is applied. Which class of lever is a wheelbarrow?",
              "choices": ["First class lever", "Second class lever", "Third class lever", "Fourth class lever"],
              "correct": 1,
              "explanation": "Second class levers always place the Load between the Fulcrum and Effort (F-L-E)."
            }
          }
        ]
      },
      {
        "subtopicId": "other-simple-machines",
        "title": "2. Inclined Planes, Pulleys, Wedges and Screws",
        "modules": [
          {
            "moduleId": "slopes-wedges-screws",
            "title": "Slopes, Pulleys, Wedges and Screws",
            "bigIdea": "Slopes, wheels, and wedges trade extra distance for reduced lifting effort.",
            "learnIt": [
              "Inclined plane: a sloping surface (ramp) used to roll heavy drums onto trucks with less effort.",
              "Wedge: two double inclined planes meeting at a sharp cutting edge (axe, knife, chisel).",
              "Screw: an inclined plane wound spirally around a cylinder (bolt, car jack).",
              "Pulley: a grooved wheel carrying a rope. Single fixed pulley changes lifting direction (flagpole); movable pulley system halves lifting effort."
            ],
            "tryThis": {
              "question": "A wooden ramp used to roll heavy oil drums up into the back of a delivery lorry is an example of which simple machine?",
              "choices": ["Pulley", "Inclined plane", "Wedge", "Screw"],
              "correct": 1,
              "explanation": "An inclined plane is a sloping surface that reduces lifting effort over a longer distance."
            }
          }
        ]
      },
      {
        "subtopicId": "friction-nature-industry",
        "title": "3. Friction: Useful vs Nuisance and Control",
        "modules": [
          {
            "moduleId": "friction-control",
            "title": "Controlling Friction in Daily Life",
            "bigIdea": "Friction opposes motion between touching surfaces, enabling grip while causing heat and wear.",
            "learnIt": [
              "Friction is the force that opposes motion between two surfaces in contact.",
              "Useful friction: enables walking without slipping, vehicle brakes stopping wheels, lighting matchsticks, writing with pens.",
              "Nuisance friction: causes wear and tear on engine gears/shoe soles, wastes energy as heat.",
              "Methods of increasing friction: putting deep treads on car tyres, putting studs on football boots, roughing slippery surfaces.",
              "Methods of reducing friction: applying grease or lubricating oil, using smooth ball bearings in axles, streamlining vehicles and airplanes."
            ],
            "tryThis": {
              "question": "Why do bicycle mechanics apply grease or lubricating oil to bicycle chain axles?",
              "choices": ["To increase friction and stop the chain", "To reduce nuisance friction and prevent metal-on-metal wear", "To make the bicycle heavy", "To create electric sparks"],
              "correct": 1,
              "explanation": "Lubricants form a smooth liquid film between moving metal parts, eliminating grinding friction."
            }
          }
        ]
      }
    
      ,{
        "subtopicId": "premium-machines-application",
        "title": "4. Premium Exam Practice: Mechanical Advantage and Friction Decisions",
        "modules": [
          {
            "moduleId": "mechanical-advantage-problems",
            "title": "Mechanical Advantage Word Problems",
            "bigIdea": "Simple-machine questions often require identifying load, effort and mechanical advantage.",
            "learnIt": [
              "Load is the weight or resistance being moved. Effort is the force applied to move the load.",
              "Mechanical Advantage = Load ÷ Effort. If MA is greater than 1, the machine makes work easier by multiplying force.",
              "A fixed pulley changes direction of effort, while some pulley systems can reduce the effort needed."
            ],
            "workedExample": { "question": "A lever lifts a 300 N load using 75 N effort. Find the mechanical advantage.", "steps": ["Step 1: MA = Load ÷ Effort.", "Step 2: MA = 300 ÷ 75.", "Step 3: 300 ÷ 75 = 4."], "answer": "The mechanical advantage is 4." },
            "tryThis": { "question": "A machine lifts 200 N using 50 N effort. What is its MA?", "choices": ["4", "150", "250", "10"], "correct": 0, "explanation": "MA = 200 ÷ 50 = 4." }
          },
          {
            "moduleId": "friction-choice-questions",
            "title": "Choosing When to Increase or Reduce Friction",
            "bigIdea": "Friction can be useful or a nuisance depending on the situation.",
            "learnIt": [
              "Increase friction when grip is needed, such as tyre treads, shoe soles and brake pads.",
              "Reduce friction when moving parts are wearing out or wasting energy, such as bicycle chains and engine parts.",
              "Lubricants, smooth surfaces and ball bearings reduce friction; rough surfaces and treads increase friction."
            ],
            "workedExample": { "question": "Should friction be increased or reduced in a bicycle chain? Explain.", "steps": ["Step 1: A bicycle chain has moving metal parts.", "Step 2: Too much friction causes wear and wastes energy.", "Step 3: Oil is used to reduce friction."], "answer": "Friction should be reduced using oil or grease." },
            "tryThis": { "question": "Why are car tyres given treads?", "choices": ["To increase grip", "To reduce grip", "To store electricity", "To make tyres lighter"], "correct": 0, "explanation": "Treads increase useful friction between tyres and the road." }
          }
        ]
      }],
    "quiz": [
      { "q": "Which formula correctly calculates Mechanical Advantage (MA)?", "choices": ["Load ÷ Effort", "Effort ÷ Load", "Load × Effort", "Load + Effort"], "correct": 0, "why": "MA is the ratio of weight lifted divided by force applied." },
      { "q": "Which class of lever has the Fulcrum located between Load and Effort?", "choices": ["First class lever", "Second class lever", "Third class lever", "Fourth class lever"], "correct": 0, "why": "First class levers follow L-F-E arrangement (seesaw, crowbar)." },
      { "q": "How can nuisance friction between moving engine gears be reduced?", "choices": ["Applying grease or oil lubrication", "Adding sand", "Making surfaces rough", "Heating the gears"], "correct": 0, "why": "Lubrication separates sliding surfaces." },
      { "q": "Why do car tyres have deep rubber grooves (treads)?", "choices": ["To increase road grip friction and prevent skidding", "To reduce friction", "To look decorative", "To make the car slide"], "correct": 0, "why": "Treads increase useful friction on wet roads." },
      { "q": "A single fixed pulley used on a school flagpole makes work easier by:", "choices": ["Changing the direction of lifting force downwards", "Multiplying effort tenfold", "Reducing rope length", "Increasing friction"], "correct": 0, "why": "A fixed pulley changes pulling direction so gravity helps." },
      { "q": "An axe or sharp knife edge represents which simple machine?", "choices": ["Wedge", "Pulley", "Wheel and axle", "Screw"], "correct": 0, "why": "A wedge splits objects apart using two joined inclined planes." },
      { "q": "If a crowbar lifts a 200 N rock using 50 N effort, what is its Mechanical Advantage?", "choices": ["4", "150", "250", "10"], "correct": 0, "why": "200 N ÷ 50 N = 4." },
      { "q": "Which simple machine consists of an inclined plane wound spirally around a cylinder?", "choices": ["Screw", "Wedge", "Lever", "Pulley"], "correct": 0, "why": "Screws and car jacks use spiral inclined planes." }
    ]
  }
];

export const SCIENCE_TOPICS: Topic[] = balanceTopicAnswers(applyP7ScienceHeavyV4(addUpperPrimaryScienceV4(SCIENCE_TOPICS_DATA, "P7", P7_SCIENCE_TERMS)));

export function getScienceTopic(id: string): Topic | undefined {
  return SCIENCE_TOPICS.find((topic) => topic.id === id);
}
