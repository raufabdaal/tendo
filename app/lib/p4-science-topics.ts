import type { UpperPrimaryLesson } from "@/lib/content-blocks";
import type { Topic } from "@/lib/topics";
import { addUpperPrimaryScienceV4 } from "@/lib/v4-science-helpers";

// P4 Integrated Science live beta content layer.
// Source map: content/curriculum/p4-science.json
// Rule: NCDC first, build second. This file follows the NCDC Primary Four Integrated Science Syllabus, April 2009.
// Status: live beta until checked by a human reviewer for science accuracy, health-sensitive wording and source fidelity.


const P4_PLANT_LIFE_V4: UpperPrimaryLesson[] = [
  {
    id: "p4-v4-what-are-plants",
    classLevel: "P4",
    term: "Term I",
    curriculumMode: "subject",
    subject: "Integrated Science",
    topicTitle: "Plant Life",
    subTopicTitle: "What are plants?",
    lessonTitle: "What are plants?",
    blocks: [
      {
        kind: "definition",
        term: "plants",
        definition: "are living things that usually grow in soil or water. Most plants have roots, stems and leaves, and some plants produce flowers, fruits and seeds.",
        simpleCheck: "A bean plant is a plant because it grows, feeds, breathes and can produce new plants.",
      },
      {
        kind: "categories",
        title: "Main groups of plants",
        categories: [
          { name: "Flowering plants", definition: "plants that produce flowers and can form fruits and seeds", examples: ["bean plant", "maize plant", "mango tree", "orange tree"], notes: ["Most garden crops and fruit trees are flowering plants."] },
          { name: "Non-flowering plants", definition: "plants that do not produce flowers", examples: ["ferns", "mosses"], notes: ["Some non-flowering plants reproduce by spores instead of seeds."] },
          { name: "Food plants", definition: "plants grown or used for food", examples: ["cassava", "beans", "maize", "cabbage", "mango"] },
          { name: "Useful non-food plants", definition: "plants used for medicine, timber, shade, fibres or beauty", examples: ["eucalyptus", "sisal", "aloe vera", "flowers"] },
        ],
      },
      {
        kind: "examples",
        title: "Examples of plants around us",
        examples: [
          { name: "maize", explanation: "a food crop grown for its grains", localContext: "common in Ugandan gardens" },
          { name: "beans", explanation: "a food crop grown for seeds", localContext: "often grown with maize" },
          { name: "mango tree", explanation: "a fruit tree that gives shade and fruits" },
          { name: "sisal", explanation: "a fibre plant used to make ropes and mats" },
          { name: "aloe vera", explanation: "a plant commonly used for medicine with adult guidance" },
        ],
      },
      {
        kind: "characteristics",
        title: "Characteristics of plants",
        points: [
          "Plants are living things.",
          "Most plants are green because they contain chlorophyll.",
          "Most plants make their own food using sunlight, air and water.",
          "Plants grow and respond to light, water and gravity.",
          "Many plants reproduce using flowers, fruits and seeds.",
        ],
      },
      {
        kind: "diagram",
        title: "Flowering plant diagram",
        imageUrl: "/images/science/flowering-plant-parts.svg",
        caption: "A flowering plant showing roots, stem, leaves, flower, fruit and seed.",
        labels: ["roots", "stem", "leaves", "flower", "fruit", "seed"],
      },
      {
        kind: "exercise",
        title: "Evaluation",
        questions: [
          { type: "short-answer", prompt: "What are plants?", answer: "Plants are living things that usually grow in soil or water." },
          { type: "short-answer", prompt: "Give four examples of plants.", answer: "Maize, beans, mango, cassava, sisal, cabbage or any correct plant." },
          { type: "short-answer", prompt: "State two characteristics of plants.", answer: "They grow, make food, respond to light/water, reproduce or have parts such as roots/stems/leaves." },
          { type: "multiple-choice", prompt: "Which one is a plant?", choices: ["bean", "stone", "chair", "shoe"], answer: "bean" },
        ],
      },
    ],
  },
  {
    id: "p4-v4-parts-of-flowering-plant",
    classLevel: "P4",
    term: "Term I",
    curriculumMode: "subject",
    subject: "Integrated Science",
    topicTitle: "Plant Life",
    subTopicTitle: "Parts of a Flowering Plant",
    lessonTitle: "Parts of a Flowering Plant",
    blocks: [
      {
        kind: "definition",
        term: "flowering plant",
        definition: "is a plant that produces flowers. In many flowering plants, flowers later form fruits and seeds.",
        simpleCheck: "A bean plant, maize plant and mango tree are flowering plants.",
      },
      {
        kind: "categories",
        title: "Parts and functions of a flowering plant",
        categories: [
          { name: "Roots", definition: "hold the plant firmly in the soil and absorb water and mineral salts", examples: ["tap root", "fibrous roots"] },
          { name: "Stem", definition: "supports the plant and carries water and food to other parts", examples: ["bean stem", "maize stem", "tree trunk"] },
          { name: "Leaves", definition: "make food for the plant using sunlight, air and water", examples: ["bean leaves", "mango leaves", "banana leaves"] },
          { name: "Flowers", definition: "help the plant reproduce by forming fruits and seeds after pollination and fertilisation", examples: ["bean flower", "mango flower", "orange flower"] },
          { name: "Fruits", definition: "protect seeds and may help seeds to be dispersed", examples: ["mango", "orange", "tomato", "bean pod"] },
          { name: "Seeds", definition: "can germinate and grow into new plants", examples: ["bean seed", "maize grain", "mango seed"] },
        ],
      },
      {
        kind: "diagram",
        title: "Labelled flowering plant",
        imageUrl: "/images/science/flowering-plant-parts.svg",
        caption: "Label each part and say its function.",
        labels: ["roots", "stem", "leaves", "flower", "fruit", "seed"],
      },
      {
        kind: "characteristics",
        title: "Functions to remember",
        points: [
          "Roots absorb water and mineral salts from soil.",
          "The stem carries water from roots to leaves.",
          "Leaves make food for the plant.",
          "Flowers help in reproduction.",
          "Fruits protect seeds.",
          "Seeds grow into new plants during germination.",
        ],
      },
      {
        kind: "worked-example",
        question: "A learner says roots only hold the plant. Is the learner fully correct?",
        steps: [
          "Roots hold the plant firmly in soil.",
          "Roots also absorb water and mineral salts from soil.",
          "So the answer should include both functions.",
        ],
        answer: "No. Roots hold the plant and absorb water and mineral salts.",
      },
      {
        kind: "exercise",
        title: "Evaluation",
        questions: [
          { type: "short-answer", prompt: "Name six parts of a flowering plant.", answer: "Roots, stem, leaves, flowers, fruits and seeds." },
          { type: "short-answer", prompt: "What is the function of leaves?", answer: "Leaves make food for the plant." },
          { type: "short-answer", prompt: "What is the function of fruits?", answer: "Fruits protect seeds." },
          { type: "multiple-choice", prompt: "Which plant part absorbs water?", choices: ["roots", "flower", "fruit", "seed"], answer: "roots" },
        ],
      },
    ],
  },
  {
    id: "p4-v4-flowers-fruits-seeds",
    classLevel: "P4",
    term: "Term I",
    curriculumMode: "subject",
    subject: "Integrated Science",
    topicTitle: "Plant Life",
    subTopicTitle: "Flowers, Fruits and Seeds",
    lessonTitle: "Flowers, Fruits and Seeds",
    blocks: [
      {
        kind: "definition",
        term: "reproduction in flowering plants",
        definition: "is the process by which flowering plants produce new plants using flowers, fruits and seeds.",
        simpleCheck: "A flower may develop into a fruit with seeds after pollination and fertilisation.",
      },
      {
        kind: "categories",
        title: "Flower to seed process",
        categories: [
          { name: "Flower", definition: "the reproductive part of many plants", examples: ["bean flower", "mango flower", "orange flower"] },
          { name: "Pollination", definition: "the transfer of pollen to the stigma of a flower", examples: ["by insects", "by wind"] },
          { name: "Fertilisation", definition: "joining of male and female cells in the flower", examples: ["happens after successful pollination"] },
          { name: "Fruit", definition: "the part that develops from the flower and protects seeds", examples: ["mango", "tomato", "bean pod"] },
          { name: "Seed", definition: "the part that can grow into a new plant", examples: ["bean seed", "maize grain", "orange seed"] },
        ],
      },
      {
        kind: "examples",
        title: "Examples of fruits and seeds",
        examples: [
          { name: "mango", explanation: "fruit with a seed inside" },
          { name: "bean pod", explanation: "fruit that contains bean seeds" },
          { name: "maize cob", explanation: "has many grains that can be planted as seeds" },
          { name: "tomato", explanation: "fruit with many small seeds" },
        ],
      },
      {
        kind: "diagram",
        title: "Flowering plant parts",
        imageUrl: "/images/science/flowering-plant-parts.svg",
        caption: "Flowers can form fruits and seeds in many flowering plants.",
        labels: ["flower", "fruit", "seed", "pollination", "fertilisation", "germination"],
      },
      {
        kind: "exercise",
        title: "Evaluation",
        questions: [
          { type: "short-answer", prompt: "What is pollination?", answer: "Transfer of pollen to the stigma of a flower." },
          { type: "short-answer", prompt: "Why are seeds important?", answer: "They can grow into new plants." },
          { type: "short-answer", prompt: "Give two examples of fruits with seeds.", answer: "Mango, tomato, orange, bean pod or any correct example." },
          { type: "multiple-choice", prompt: "Which part can develop into a fruit?", choices: ["flower", "root", "leaf only", "stem only"], answer: "flower" },
        ],
      },
    ],
  },
  {
    id: "p4-v4-germination-plant-needs",
    classLevel: "P4",
    term: "Term I",
    curriculumMode: "subject",
    subject: "Integrated Science",
    topicTitle: "Plant Life",
    subTopicTitle: "Germination and Plant Needs",
    lessonTitle: "Germination and Plant Needs",
    blocks: [
      {
        kind: "definition",
        term: "germination",
        definition: "is the beginning of growth of a seed into a seedling.",
        simpleCheck: "A bean seed that starts producing a root and shoot is germinating.",
      },
      {
        kind: "categories",
        title: "Conditions needed for germination and growth",
        categories: [
          { name: "Water", definition: "softens the seed coat and starts growth", examples: ["moist soil", "watered cotton wool"] },
          { name: "Air", definition: "needed by the seed for respiration", examples: ["loose soil", "not waterlogged soil"] },
          { name: "Warmth", definition: "helps seed activities happen fast enough for growth", examples: ["warm soil", "sun-warmed place"] },
          { name: "Sunlight", definition: "needed by seedlings and grown plants for making food", examples: ["healthy green leaves", "plants near light"] },
          { name: "Good soil", definition: "supports plants and provides mineral salts", examples: ["loam soil", "garden soil with manure"] },
        ],
      },
      {
        kind: "characteristics",
        title: "Stages of germination",
        points: [
          "The seed absorbs water and swells.",
          "The seed coat splits.",
          "A young root grows downward.",
          "A young shoot grows upward.",
          "Leaves open and start making food when there is light.",
        ],
      },
      {
        kind: "worked-example",
        question: "A seed in dry soil fails to germinate. What is missing?",
        steps: ["Seeds need water to begin germination.", "Dry soil has too little water.", "Water the soil without flooding it."],
        answer: "Water is missing.",
      },
      {
        kind: "exercise",
        title: "Evaluation",
        questions: [
          { type: "short-answer", prompt: "What is germination?", answer: "The beginning of growth of a seed into a seedling." },
          { type: "short-answer", prompt: "Name three conditions needed for germination.", answer: "Water, air and warmth." },
          { type: "short-answer", prompt: "Why do seedlings need sunlight?", answer: "For leaves to make food." },
          { type: "multiple-choice", prompt: "Which condition is needed by a seed to germinate?", choices: ["water", "a bank account", "a mirror", "a pencil"], answer: "water" },
        ],
      },
    ],
  },
  {
    id: "p4-v4-uses-care-of-plants",
    classLevel: "P4",
    term: "Term I",
    curriculumMode: "subject",
    subject: "Integrated Science",
    topicTitle: "Plant Life",
    subTopicTitle: "Uses and Care of Plants",
    lessonTitle: "Uses and Care of Plants",
    blocks: [
      {
        kind: "definition",
        term: "care for plants",
        definition: "means doing activities that help plants grow well and remain healthy.",
        simpleCheck: "Watering a young plant and removing weeds are ways of caring for plants.",
      },
      {
        kind: "uses",
        title: "Uses of plants",
        points: [
          "Plants provide food such as beans, maize, cassava, fruits and vegetables.",
          "Plants provide shade and cool the environment.",
          "Plants provide timber and poles for building.",
          "Some plants provide medicine when used with adult/health-worker guidance.",
          "Plants provide fibres such as sisal and cotton.",
          "Plants help clean air and provide oxygen.",
          "Plants protect soil from erosion.",
        ],
      },
      {
        kind: "characteristics",
        title: "Ways of caring for plants",
        points: [
          "Water young plants when the soil is dry.",
          "Weed gardens so crops do not compete with weeds.",
          "Mulch soil to keep moisture and reduce erosion.",
          "Protect plants from animals and pests.",
          "Do not break branches or uproot young plants unnecessarily.",
          "Plant trees to replace those cut down.",
        ],
      },
      {
        kind: "diagram",
        title: "Plant care reminder",
        imageUrl: "/images/science/p4-plant-care.svg",
        caption: "Ways of caring for plants: watering, weeding, mulching and protecting plants.",
        labels: ["water", "weed", "mulch", "protect", "plant trees"],
      },
      {
        kind: "exercise",
        title: "Evaluation",
        questions: [
          { type: "short-answer", prompt: "Give four uses of plants.", answer: "Food, shade, medicine, timber, fibre, oxygen or soil protection." },
          { type: "short-answer", prompt: "Give three ways of caring for plants.", answer: "Watering, weeding, mulching, protecting from animals or planting trees." },
          { type: "short-answer", prompt: "Why should we not uproot young plants carelessly?", answer: "It kills or damages plants and reduces plant growth." },
          { type: "multiple-choice", prompt: "Which practice cares for plants?", choices: ["weeding", "breaking branches", "uprooting seedlings", "burning gardens"], answer: "weeding" },
        ],
      },
    ],
  },
];

const P4_GROWING_CROPS_V4: UpperPrimaryLesson[] = [
  {
    id: "p4-v4-what-is-crop-growing",
    classLevel: "P4",
    term: "Term I",
    curriculumMode: "subject",
    subject: "Integrated Science",
    topicTitle: "Growing Crops",
    subTopicTitle: "What is crop growing?",
    lessonTitle: "What is crop growing?",
    blocks: [
      { kind: "definition", term: "crop growing", definition: "is the practice of planting and caring for crops until they are ready for harvesting.", simpleCheck: "Growing beans, maize or cassava in a garden is crop growing." },
      { kind: "categories", title: "Common crops", categories: [
        { name: "Food crops", definition: "crops grown mainly for food", examples: ["maize", "beans", "cassava", "sweet potatoes", "rice"] },
        { name: "Cash crops", definition: "crops grown mainly for sale and income", examples: ["coffee", "cotton", "tea", "sugarcane"] },
        { name: "Vegetable crops", definition: "crops grown for leaves, fruits, stems or roots eaten as vegetables", examples: ["cabbage", "tomatoes", "onions", "eggplants"] },
      ] },
      { kind: "examples", title: "Examples in Uganda", examples: [
        { name: "maize", explanation: "grown for food and sale" },
        { name: "beans", explanation: "grown for protein food" },
        { name: "cassava", explanation: "grown for edible roots" },
        { name: "coffee", explanation: "grown as a cash crop" },
      ] },
      { kind: "diagram", title: "Crop-growing cycle", imageUrl: "/images/science/crop-growing-cycle.svg", caption: "The main steps in growing crops from land preparation to harvesting and storage.", labels: ["prepare land", "plant", "care", "harvest", "store"] },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "What is crop growing?", answer: "Planting and caring for crops until harvesting." },
        { type: "short-answer", prompt: "Give three examples of food crops.", answer: "Maize, beans, cassava, rice or sweet potatoes." },
        { type: "multiple-choice", prompt: "Which crop is commonly grown for sale as a cash crop?", choices: ["coffee", "stone", "chair", "shoe"], answer: "coffee" },
      ] },
    ],
  },
  {
    id: "p4-v4-land-preparation-planting",
    classLevel: "P4",
    term: "Term I",
    curriculumMode: "subject",
    subject: "Integrated Science",
    topicTitle: "Growing Crops",
    subTopicTitle: "Soil Preparation and Planting",
    lessonTitle: "Soil Preparation and Planting",
    blocks: [
      { kind: "definition", term: "soil preparation", definition: "is making soil ready for planting crops.", simpleCheck: "Clearing, digging and making seedbeds are ways of preparing soil." },
      { kind: "categories", title: "Steps before and during planting", categories: [
        { name: "Clearing", definition: "removing weeds, rubbish and unwanted plants from the garden", examples: ["slashing grass", "removing old stems"] },
        { name: "Digging / tilling", definition: "loosening soil so roots can grow easily", examples: ["using a hoe", "turning soil"] },
        { name: "Making seedbeds", definition: "preparing raised or flat places where seeds are planted", examples: ["vegetable bed", "nursery bed"] },
        { name: "Planting", definition: "putting seeds or seedlings into soil", examples: ["sowing maize", "transplanting cabbage seedlings"] },
      ] },
      { kind: "characteristics", title: "Good planting practices", points: ["Use good seeds or healthy seedlings.", "Plant at the right spacing.", "Plant at the right depth.", "Plant at the beginning of rains where possible.", "Water seedlings if the soil is dry."] },
      { kind: "worked-example", question: "Why should soil be loosened before planting?", steps: ["Loose soil allows roots to enter easily.", "Loose soil lets air and water move better.", "This helps seedlings grow well."], answer: "Soil is loosened to help roots grow and to allow air and water into the soil." },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "Name three ways of preparing land for planting.", answer: "Clearing, digging, making seedbeds or applying manure." },
        { type: "short-answer", prompt: "Why is spacing important when planting?", answer: "It gives crops enough space, light, water and nutrients." },
        { type: "multiple-choice", prompt: "Putting seeds in soil is called:", choices: ["planting", "harvesting", "cooking", "washing"], answer: "planting" },
      ] },
    ],
  },
  {
    id: "p4-v4-crop-care",
    classLevel: "P4",
    term: "Term I",
    curriculumMode: "subject",
    subject: "Integrated Science",
    topicTitle: "Growing Crops",
    subTopicTitle: "Crop Care",
    lessonTitle: "Crop Care",
    blocks: [
      { kind: "definition", term: "crop care", definition: "means doing activities that help crops grow well and remain healthy.", simpleCheck: "Watering, weeding and mulching are crop-care practices." },
      { kind: "categories", title: "Crop-care practices", categories: [
        { name: "Watering", definition: "giving crops water when the soil is dry", examples: ["watering vegetables", "watering seedlings"] },
        { name: "Weeding", definition: "removing unwanted plants from the garden", examples: ["pulling weeds", "hoeing weeds"] },
        { name: "Mulching", definition: "covering soil with dry grass or leaves", examples: ["banana mulching", "vegetable mulching"] },
        { name: "Pest and disease control", definition: "protecting crops from pests and diseases", examples: ["hand-picking pests", "using safe teacher/adult-guided methods"] },
      ] },
      { kind: "characteristics", title: "Why crop care is important", points: ["Water helps crops make food and grow.", "Weeding reduces competition for water, nutrients and light.", "Mulching keeps soil moist and reduces erosion.", "Pest control protects leaves, stems, roots and fruits.", "Good crop care increases harvest." ] },
      { kind: "diagram", title: "Crop care cycle", imageUrl: "/images/science/crop-growing-cycle.svg", caption: "Crop care includes watering, weeding, mulching and pest control before harvesting.", labels: ["water", "weed", "mulch", "control pests", "harvest"] },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "What is crop care?", answer: "Activities that help crops grow well and remain healthy." },
        { type: "short-answer", prompt: "Give three crop-care practices.", answer: "Watering, weeding, mulching, thinning or pest control." },
        { type: "multiple-choice", prompt: "Removing unwanted plants from a garden is called:", choices: ["weeding", "harvesting", "pollination", "digestion"], answer: "weeding" },
      ] },
    ],
  },
  {
    id: "p4-v4-harvesting-storage",
    classLevel: "P4",
    term: "Term I",
    curriculumMode: "subject",
    subject: "Integrated Science",
    topicTitle: "Growing Crops",
    subTopicTitle: "Harvesting and Storage",
    lessonTitle: "Harvesting and Storage",
    blocks: [
      { kind: "definition", term: "harvesting", definition: "is collecting mature crops from the garden or field.", simpleCheck: "Picking ripe tomatoes or cutting mature maize is harvesting." },
      { kind: "definition", term: "storage", definition: "is keeping harvested crops safely for future use or sale.", simpleCheck: "Keeping dry beans in a clean sack is storage." },
      { kind: "categories", title: "Good harvesting and storage practices", categories: [
        { name: "Harvesting mature crops", definition: "collecting crops when they are ready", examples: ["ripe tomatoes", "dry beans", "mature maize"] },
        { name: "Drying crops", definition: "removing extra moisture before storage", examples: ["drying maize", "drying beans", "drying groundnuts"] },
        { name: "Safe storage", definition: "keeping crops in clean, dry and protected places", examples: ["sacks", "granaries", "sealed containers"] },
      ] },
      { kind: "characteristics", title: "Why storage matters", points: ["Good storage prevents rotting.", "Good storage protects crops from rats, insects and mould.", "Dry crops store better than wet crops.", "Stored food helps families during dry seasons."] },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "What is harvesting?", answer: "Collecting mature crops from the garden or field." },
        { type: "short-answer", prompt: "Why should crops be dried before storage?", answer: "To prevent rotting and mould." },
        { type: "multiple-choice", prompt: "Which place is good for storing crops?", choices: ["clean dry store", "wet floor", "open rubbish pit", "dirty water"], answer: "clean dry store" },
      ] },
    ],
  },
];

const P4_HUMAN_BODY_ORGANS_V4: UpperPrimaryLesson[] = [
  {
    id: "p4-v4-organs-meaning",
    classLevel: "P4",
    term: "Term II",
    curriculumMode: "subject",
    subject: "Integrated Science",
    topicTitle: "Human Body Organs",
    subTopicTitle: "Major Body Organs",
    lessonTitle: "Major Body Organs",
    blocks: [
      { kind: "definition", term: "organ", definition: "is a body part that does special work for the body.", simpleCheck: "The heart is an organ because it pumps blood." },
      { kind: "categories", title: "Major body organs and functions", categories: [
        { name: "Brain", definition: "controls body activities and helps us think, learn and remember", examples: ["thinking", "moving", "remembering"] },
        { name: "Heart", definition: "pumps blood around the body", examples: ["heartbeat", "blood circulation"] },
        { name: "Lungs", definition: "help the body breathe in oxygen and breathe out carbon dioxide", examples: ["breathing in", "breathing out"] },
        { name: "Stomach", definition: "helps digest food", examples: ["mixing food", "breaking food down"] },
        { name: "Kidneys", definition: "help remove waste from blood and make urine", examples: ["urine formation", "waste removal"] },
      ] },
      { kind: "diagram", title: "Body organs diagram", imageUrl: "/images/science/p4-body-organs.svg", caption: "Major human body organs and their positions.", labels: ["brain", "heart", "lungs", "stomach", "kidneys"] },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "What is an organ?", answer: "A body part that does special work." },
        { type: "short-answer", prompt: "Name four body organs.", answer: "Brain, heart, lungs, stomach, kidneys, liver or skin." },
        { type: "multiple-choice", prompt: "Which organ pumps blood?", choices: ["heart", "tooth", "hair", "fingernail"], answer: "heart" },
      ] },
    ],
  },
  {
    id: "p4-v4-care-body-organs",
    classLevel: "P4",
    term: "Term II",
    curriculumMode: "subject",
    subject: "Integrated Science",
    topicTitle: "Human Body Organs",
    subTopicTitle: "Care for Body Organs",
    lessonTitle: "Care for Body Organs",
    blocks: [
      { kind: "definition", term: "care for body organs", definition: "means doing healthy things that protect organs and help them work well.", simpleCheck: "Eating clean food helps protect the stomach and body." },
      { kind: "categories", title: "Healthy habits for organs", categories: [
        { name: "Brain care", definition: "protecting the brain and helping it work well", examples: ["sleeping enough", "wearing a helmet when needed", "avoiding head injuries"] },
        { name: "Heart care", definition: "habits that keep the heart healthy", examples: ["exercising", "eating healthy food", "avoiding smoking areas"] },
        { name: "Lung care", definition: "habits that protect breathing", examples: ["avoiding smoke", "keeping rooms ventilated", "covering mouth when coughing"] },
        { name: "Stomach care", definition: "habits that help digestion", examples: ["eating clean food", "washing hands", "drinking safe water"] },
      ] },
      { kind: "characteristics", title: "Important safety habits", points: ["Avoid smoke, unknown medicines and poisonous substances.", "Wash hands before eating.", "Drink safe water.", "Exercise and rest enough.", "Tell an adult when you feel sick or injured." ] },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "Give three ways to care for body organs.", answer: "Eat clean food, drink safe water, exercise, rest, avoid smoke and avoid unknown medicines." },
        { type: "short-answer", prompt: "Why should children avoid smoke?", answer: "Smoke can harm the lungs and breathing." },
        { type: "multiple-choice", prompt: "Which habit helps the stomach?", choices: ["eating clean food", "drinking dirty water", "eating spoiled food", "not washing hands"], answer: "eating clean food" },
      ] },
    ],
  },
];

const P4_TEETH_V4: UpperPrimaryLesson[] = [
  {
    id: "p4-v4-types-functions-teeth",
    classLevel: "P4",
    term: "Term II",
    curriculumMode: "subject",
    subject: "Integrated Science",
    topicTitle: "The Teeth",
    subTopicTitle: "Types and Functions of Teeth",
    lessonTitle: "Types and Functions of Teeth",
    blocks: [
      { kind: "definition", term: "teeth", definition: "are hard white structures in the mouth used for biting, tearing, crushing and grinding food.", simpleCheck: "Teeth help break food into small pieces before swallowing." },
      { kind: "categories", title: "Types of teeth", categories: [
        { name: "Incisors", definition: "front teeth used for cutting food", examples: ["biting sugarcane", "cutting a piece of fruit"] },
        { name: "Canines", definition: "pointed teeth used for tearing food", examples: ["tearing meat", "tearing tough food"] },
        { name: "Premolars", definition: "teeth used for crushing and grinding food", examples: ["crushing groundnuts", "chewing cooked food"] },
        { name: "Molars", definition: "back teeth used for grinding food", examples: ["grinding posho", "chewing beans"] },
      ] },
      { kind: "diagram", title: "Teeth types diagram", imageUrl: "/images/science/teeth-types-functions.svg", caption: "Types of teeth and their functions.", labels: ["incisors", "canines", "premolars", "molars"] },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "Name the four types of teeth.", answer: "Incisors, canines, premolars and molars." },
        { type: "short-answer", prompt: "What is the function of incisors?", answer: "Cutting food." },
        { type: "multiple-choice", prompt: "Which teeth tear food?", choices: ["canines", "incisors", "molars", "premolars"], answer: "canines" },
      ] },
    ],
  },
  {
    id: "p4-v4-tooth-care-decay",
    classLevel: "P4",
    term: "Term II",
    curriculumMode: "subject",
    subject: "Integrated Science",
    topicTitle: "The Teeth",
    subTopicTitle: "Tooth Care and Tooth Decay",
    lessonTitle: "Tooth Care and Tooth Decay",
    blocks: [
      { kind: "definition", term: "tooth decay", definition: "is the damage of teeth caused by germs and acids, often after sugary food remains on teeth.", simpleCheck: "A toothache may be a sign of tooth decay and needs adult or dental help." },
      { kind: "categories", title: "Causes and prevention of tooth decay", categories: [
        { name: "Causes", definition: "things that make tooth decay more likely", examples: ["too many sugary foods", "not brushing teeth", "dirty mouth", "not visiting dental workers"] },
        { name: "Prevention", definition: "ways to stop tooth decay", examples: ["brushing teeth", "rinsing mouth", "eating fewer sweets", "visiting dental workers"] },
        { name: "Good tooth care", definition: "daily actions that keep teeth healthy", examples: ["brush morning and evening", "use clean toothbrush", "eat hard fruits safely", "drink clean water"] },
      ] },
      { kind: "characteristics", title: "How to care for teeth", points: ["Brush teeth at least twice a day.", "Use a clean toothbrush and safe toothpaste where available.", "Avoid too many sweets and sugary drinks.", "Rinse the mouth after eating.", "Report toothache to an adult." ] },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "What is tooth decay?", answer: "Damage of teeth caused by germs and acids." },
        { type: "short-answer", prompt: "Give three ways to care for teeth.", answer: "Brush teeth, reduce sugary foods, rinse mouth, use clean toothbrush or visit dental worker." },
        { type: "multiple-choice", prompt: "Which habit prevents tooth decay?", choices: ["brushing teeth", "eating sweets all day", "not brushing", "sharing dirty toothbrushes"], answer: "brushing teeth" },
      ] },
    ],
  },
];

const P4_ANIMAL_LIFE_V4: UpperPrimaryLesson[] = [
  {
    id: "p4-v4-common-animals",
    classLevel: "P4",
    term: "Term III",
    curriculumMode: "subject",
    subject: "Integrated Science",
    topicTitle: "Animal Life",
    subTopicTitle: "Common Animals",
    lessonTitle: "Common Animals",
    blocks: [
      { kind: "definition", term: "animal", definition: "is a living thing that feeds, breathes, grows, reproduces and usually moves from place to place.", simpleCheck: "A goat is an animal because it feeds, breathes, grows and moves." },
      { kind: "categories", title: "Groups of common animals", categories: [
        { name: "Domestic animals", definition: "animals kept by people at home or on farms", examples: ["cow", "goat", "sheep", "dog", "cat", "pig"] },
        { name: "Wild animals", definition: "animals that live on their own in the environment", examples: ["lion", "elephant", "monkey", "antelope"] },
        { name: "Poultry birds", definition: "domestic birds kept by people", examples: ["hen", "duck", "turkey", "goose"] },
        { name: "Small animals", definition: "animals commonly seen around homes, gardens or compounds", examples: ["rabbit", "rat", "mouse"] },
      ] },
      { kind: "examples", title: "Examples around us", examples: [
        { name: "cow", explanation: "kept for milk, meat, manure and income" },
        { name: "goat", explanation: "kept for meat, milk and income" },
        { name: "dog", explanation: "kept for security and companionship" },
        { name: "hen", explanation: "kept for eggs and meat" },
      ] },
      { kind: "diagram", title: "Animal care card", imageUrl: "/images/science/p4-animal-care.svg", caption: "Common animals need food, water, shelter, health care and kindness.", labels: ["cow", "goat", "hen", "dog", "food", "shelter"] },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "What is an animal?", answer: "A living thing that feeds, breathes, grows, reproduces and usually moves." },
        { type: "short-answer", prompt: "Name four domestic animals.", answer: "Cow, goat, sheep, dog, cat, pig, hen or duck." },
        { type: "multiple-choice", prompt: "Which one is a domestic animal?", choices: ["goat", "stone", "chair", "shoe"], answer: "goat" },
      ] },
    ],
  },
  {
    id: "p4-v4-animal-needs-care",
    classLevel: "P4",
    term: "Term III",
    curriculumMode: "subject",
    subject: "Integrated Science",
    topicTitle: "Animal Life",
    subTopicTitle: "Animal Needs and Care",
    lessonTitle: "Animal Needs and Care",
    blocks: [
      { kind: "definition", term: "animal care", definition: "means providing animals with what they need to live safely and remain healthy.", simpleCheck: "Giving clean water and shelter to goats is animal care." },
      { kind: "categories", title: "Needs of animals", categories: [
        { name: "Food", definition: "what animals eat to grow and get energy", examples: ["grass for goats", "feeds for hens", "milk for young animals"] },
        { name: "Water", definition: "a basic need for animals to live", examples: ["clean drinking water", "watering trough"] },
        { name: "Shelter", definition: "a safe place that protects animals from rain, sun, thieves and predators", examples: ["kraal", "kennel", "coop", "sty"] },
        { name: "Health care", definition: "keeping animals clean and treating sickness", examples: ["vaccination", "calling a veterinary worker", "separating sick animals"] },
      ] },
      { kind: "characteristics", title: "Good animal care practices", points: ["Give enough clean food and water.", "Provide clean shelter.", "Keep animal houses dry and ventilated.", "Separate sick animals from healthy ones.", "Call a veterinary worker or trained adult when animals are sick.", "Treat animals kindly and avoid cruelty."] },
      { kind: "worked-example", question: "A hen is weak and not eating. What should a farmer do?", steps: ["Separate the sick hen from healthy hens.", "Give clean water and keep it safe.", "Ask an adult or veterinary worker for advice."], answer: "Separate the sick hen and seek adult or veterinary help." },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "Name four needs of animals.", answer: "Food, water, shelter, air and health care." },
        { type: "short-answer", prompt: "Why should sick animals be separated?", answer: "To reduce the spread of disease." },
        { type: "multiple-choice", prompt: "Which is good animal care?", choices: ["giving clean water", "beating animals", "keeping animals in dirty houses", "hiding sickness"], answer: "giving clean water" },
      ] },
    ],
  },
  {
    id: "p4-v4-uses-animal-safety",
    classLevel: "P4",
    term: "Term III",
    curriculumMode: "subject",
    subject: "Integrated Science",
    topicTitle: "Animal Life",
    subTopicTitle: "Uses of Animals and Safety",
    lessonTitle: "Uses of Animals and Safety",
    blocks: [
      { kind: "definition", term: "uses of animals", definition: "are the ways animals help people and the community.", simpleCheck: "A cow is useful because it can provide milk, meat, manure and income." },
      { kind: "uses", title: "Uses of animals", points: ["Animals provide food such as milk, meat and eggs.", "Animals provide manure for gardens.", "Some animals provide labour such as ox-ploughing.", "Dogs may provide security.", "Some animals provide transport in some communities.", "Animals can provide income when sold or when their products are sold."] },
      { kind: "characteristics", title: "Animal safety rules", points: ["Do not disturb strange or wild animals.", "Do not touch animal waste with bare hands.", "Wash hands after handling animals.", "Report animal bites to an adult quickly.", "Keep away from angry or sick animals."] },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "Give four uses of animals.", answer: "Food, manure, labour, security, transport or income." },
        { type: "short-answer", prompt: "Why should children wash hands after handling animals?", answer: "To remove dirt and germs." },
        { type: "multiple-choice", prompt: "Which animal may provide security?", choices: ["dog", "mosquito", "housefly", "worm"], answer: "dog" },
      ] },
    ],
  },
];

const P4_WEATHER_CHANGES_V4: UpperPrimaryLesson[] = [
  {
    id: "p4-v4-weather-elements",
    classLevel: "P4",
    term: "Term I",
    curriculumMode: "subject",
    subject: "Integrated Science",
    topicTitle: "Weather Changes Around Us",
    subTopicTitle: "Weather Elements",
    lessonTitle: "Weather Elements",
    blocks: [
      { kind: "definition", term: "weather", definition: "is the condition of the atmosphere at a particular place and time.", simpleCheck: "A day can be sunny, rainy, cloudy or windy." },
      { kind: "categories", title: "Elements of weather", categories: [
        { name: "Sunshine", definition: "light and heat from the sun", examples: ["sunny day", "drying clothes"] },
        { name: "Rainfall", definition: "water falling from clouds", examples: ["rain on gardens", "rain in tanks"] },
        { name: "Wind", definition: "moving air", examples: ["leaves moving", "clothes blown by wind"] },
        { name: "Cloud cover", definition: "the amount of clouds in the sky", examples: ["cloudy day", "dark rain clouds"] },
        { name: "Temperature", definition: "how hot or cold a place is", examples: ["hot afternoon", "cool morning"] },
      ] },
      { kind: "diagram", title: "Weather symbols", imageUrl: "/images/science/weather-symbols-chart.svg", caption: "Common weather symbols used in school weather charts.", labels: ["sunny", "rainy", "cloudy", "windy", "stormy"] },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "What is weather?", answer: "The condition of the atmosphere at a place and time." },
        { type: "short-answer", prompt: "Name four weather elements.", answer: "Sunshine, rainfall, wind, clouds and temperature." },
        { type: "multiple-choice", prompt: "Moving air is called:", choices: ["wind", "soil", "tooth", "food"], answer: "wind" },
      ] },
    ],
  },
  {
    id: "p4-v4-weather-symbols-chart",
    classLevel: "P4",
    term: "Term I",
    curriculumMode: "subject",
    subject: "Integrated Science",
    topicTitle: "Weather Changes Around Us",
    subTopicTitle: "Weather Symbols and Weather Charts",
    lessonTitle: "Weather Symbols and Weather Charts",
    blocks: [
      { kind: "definition", term: "weather chart", definition: "is a table or chart used to record weather conditions for different days.", simpleCheck: "A weather chart can show sunny, rainy, cloudy and windy days." },
      { kind: "categories", title: "Weather records", categories: [
        { name: "Weather symbols", definition: "small pictures used to show weather", examples: ["sun symbol", "rain cloud", "wind arrow"] },
        { name: "Daily record", definition: "weather written for each day", examples: ["Monday sunny", "Tuesday rainy"] },
        { name: "Weekly chart", definition: "weather recorded for a whole week", examples: ["5-day chart", "7-day chart"] },
      ] },
      { kind: "characteristics", title: "How to use a weather chart", points: ["Observe the sky and wind carefully.", "Choose the correct symbol.", "Record the day and weather.", "Count how many days were sunny, rainy or cloudy.", "Use the chart to make simple decisions, such as carrying a raincoat."] },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "What is a weather chart?", answer: "A chart used to record weather conditions." },
        { type: "short-answer", prompt: "Why are weather symbols useful?", answer: "They help show weather quickly and clearly." },
        { type: "multiple-choice", prompt: "A cloud with raindrops may mean:", choices: ["rainy", "sunny", "dry", "teeth"], answer: "rainy" },
      ] },
    ],
  },
  {
    id: "p4-v4-effects-weather",
    classLevel: "P4",
    term: "Term I",
    curriculumMode: "subject",
    subject: "Integrated Science",
    topicTitle: "Weather Changes Around Us",
    subTopicTitle: "Effects of Weather",
    lessonTitle: "Effects of Weather",
    blocks: [
      { kind: "definition", term: "effect of weather", definition: "is a way weather changes or influences people, animals, plants and activities.", simpleCheck: "Rain can help crops grow, but too much rain can cause flooding." },
      { kind: "categories", title: "Good and bad effects of weather", categories: [
        { name: "Good effects", definition: "ways weather helps people and living things", examples: ["rain waters crops", "sun dries clothes", "wind dries grains"] },
        { name: "Bad effects", definition: "ways weather can cause problems", examples: ["floods", "drought", "storms", "strong wind damage"] },
        { name: "Weather decisions", definition: "choices people make because of weather", examples: ["carry umbrella", "dry crops in sun", "stay indoors during storm"] },
      ] },
      { kind: "characteristics", title: "Weather safety", points: ["Do not play in storms or floods.", "Seek shade in very hot sun.", "Keep warm in cold weather.", "Listen to adults during dangerous weather.", "Farmers use weather information to plan planting and harvesting."] },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "Give two good effects of rain.", answer: "Rain waters crops, fills water sources and cools the environment." },
        { type: "short-answer", prompt: "Give two bad effects of weather.", answer: "Floods, drought, storms or strong wind damage." },
        { type: "multiple-choice", prompt: "What should a learner do during a storm?", choices: ["stay safely indoors", "play under trees", "run in flood water", "touch live wires"], answer: "stay safely indoors" },
      ] },
    ],
  },
];

const P4_PERSONAL_HYGIENE_V4: UpperPrimaryLesson[] = [
  {
    id: "p4-v4-body-cleanliness",
    classLevel: "P4",
    term: "Term I",
    curriculumMode: "subject",
    subject: "Integrated Science",
    topicTitle: "Personal Hygiene",
    subTopicTitle: "Body and Clothes Cleanliness",
    lessonTitle: "Body and Clothes Cleanliness",
    blocks: [
      { kind: "definition", term: "personal hygiene", definition: "is the practice of keeping the body, clothes and personal items clean to prevent diseases.", simpleCheck: "Bathing and wearing clean clothes are personal hygiene practices." },
      { kind: "categories", title: "Personal hygiene practices", categories: [
        { name: "Body cleanliness", definition: "keeping the body clean", examples: ["bathing", "washing hands", "cutting nails", "combing hair"] },
        { name: "Clothes cleanliness", definition: "keeping clothes clean and dry", examples: ["washing clothes", "drying clothes in sunshine", "changing dirty clothes"] },
        { name: "Personal item cleanliness", definition: "keeping personal things clean", examples: ["clean towel", "clean toothbrush", "clean comb"] },
      ] },
      { kind: "diagram", title: "Handwashing and hygiene", imageUrl: "/images/science/personal-hygiene-handwashing.svg", caption: "Good hygiene habits include bathing, washing hands, keeping nails short and wearing clean clothes.", labels: ["wash hands", "bath", "clean nails", "clean clothes"] },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "What is personal hygiene?", answer: "Keeping the body, clothes and personal items clean." },
        { type: "short-answer", prompt: "Name four personal hygiene practices.", answer: "Bathing, handwashing, cutting nails, washing clothes, brushing teeth or combing hair." },
        { type: "multiple-choice", prompt: "Which habit prevents germs from spreading?", choices: ["washing hands", "dirty nails", "sharing dirty towels", "wearing dirty clothes"], answer: "washing hands" },
      ] },
    ],
  },
  {
    id: "p4-v4-good-hygiene-disease-prevention",
    classLevel: "P4",
    term: "Term I",
    curriculumMode: "subject",
    subject: "Integrated Science",
    topicTitle: "Personal Hygiene",
    subTopicTitle: "Good Hygiene Habits and Disease Prevention",
    lessonTitle: "Good Hygiene Habits and Disease Prevention",
    blocks: [
      { kind: "definition", term: "disease prevention", definition: "means doing things that stop diseases from spreading or making people sick.", simpleCheck: "Washing hands with soap after using a latrine helps prevent disease." },
      { kind: "categories", title: "When to wash hands", categories: [
        { name: "After using the latrine", definition: "wash hands to remove germs", examples: ["after toilet", "after cleaning a child"] },
        { name: "Before eating or cooking", definition: "wash hands before touching food", examples: ["before lunch", "before preparing food"] },
        { name: "After dirty work", definition: "wash hands after touching dirt or animals", examples: ["after sweeping", "after gardening", "after handling animals"] },
      ] },
      { kind: "characteristics", title: "How hygiene prevents disease", points: ["Soap and clean water remove many germs from hands.", "Short nails collect less dirt.", "Clean clothes reduce bad smell and skin problems.", "Clean hair and skin reduce lice and skin infections.", "Good hygiene protects the learner and other people." ] },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "When should you wash hands?", answer: "After using the latrine, before eating, before cooking and after dirty work." },
        { type: "short-answer", prompt: "Why should nails be kept short?", answer: "Dirt and germs can hide under long nails." },
        { type: "multiple-choice", prompt: "Which item helps handwashing?", choices: ["soap", "dust", "dirty water", "stone"], answer: "soap" },
      ] },
    ],
  },
];

const P4_SANITATION_V4: UpperPrimaryLesson[] = [
  {
    id: "p4-v4-clean-environment",
    classLevel: "P4",
    term: "Term II",
    curriculumMode: "subject",
    subject: "Integrated Science",
    topicTitle: "Sanitation",
    subTopicTitle: "Clean Home and School Environment",
    lessonTitle: "Clean Home and School Environment",
    blocks: [
      { kind: "definition", term: "sanitation", definition: "is keeping the home, school and community clean to prevent diseases.", simpleCheck: "Sweeping a compound and using a latrine properly are sanitation practices." },
      { kind: "categories", title: "Sanitation practices", categories: [
        { name: "Clean compound", definition: "keeping the home or school surroundings clean", examples: ["sweeping", "slashing grass", "draining stagnant water"] },
        { name: "Safe waste disposal", definition: "putting waste in the right place", examples: ["rubbish pit", "dustbin", "compost pit"] },
        { name: "Clean water", definition: "protecting water from dirt and germs", examples: ["covered containers", "protected wells", "boiled water"] },
        { name: "Latrine use", definition: "using toilets or latrines properly", examples: ["closing latrine door", "washing hands after latrine use"] },
      ] },
      { kind: "diagram", title: "Clean environment", imageUrl: "/images/science/p4-sanitation-clean-environment.svg", caption: "A clean home and school environment reduces germs, flies and diseases.", labels: ["latrine", "rubbish pit", "clean water", "sweeping", "handwashing"] },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "What is sanitation?", answer: "Keeping home, school and community clean to prevent diseases." },
        { type: "short-answer", prompt: "Name four sanitation practices.", answer: "Sweeping, safe waste disposal, latrine use, handwashing, clean water or draining stagnant water." },
        { type: "multiple-choice", prompt: "Where should rubbish be put?", choices: ["dustbin or rubbish pit", "classroom floor", "water source", "roadside"], answer: "dustbin or rubbish pit" },
      ] },
    ],
  },
  {
    id: "p4-v4-waste-latrine-clean-water",
    classLevel: "P4",
    term: "Term II",
    curriculumMode: "subject",
    subject: "Integrated Science",
    topicTitle: "Sanitation",
    subTopicTitle: "Waste, Latrine Use and Clean Water",
    lessonTitle: "Waste, Latrine Use and Clean Water",
    blocks: [
      { kind: "definition", term: "safe disposal of waste", definition: "means putting rubbish, faeces and dirty water in the right place so they do not spread diseases.", simpleCheck: "Putting rubbish in a dustbin is safe waste disposal." },
      { kind: "categories", title: "Sanitation problem solving", categories: [
        { name: "Solid waste", definition: "rubbish such as papers, peels, tins and plastics", examples: ["dustbin", "rubbish pit", "recycling safe items"] },
        { name: "Human waste", definition: "faeces and urine that must be put in a latrine or toilet", examples: ["latrine", "toilet"] },
        { name: "Waste water", definition: "used water from washing or cooking", examples: ["soak pit", "drainage channel", "away from water sources"] },
        { name: "Safe water", definition: "water protected from dirt and germs", examples: ["boiled water", "covered water container", "protected spring"] },
      ] },
      { kind: "characteristics", title: "Why sanitation matters", points: ["Poor sanitation attracts flies, rats and cockroaches.", "Poor sanitation can spread diarrhoea, cholera, typhoid and worms.", "Clean latrines reduce bad smell and flies.", "Covered water containers keep water cleaner.", "Children should report broken latrines, dirty water points and overflowing rubbish pits to adults." ] },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "Why should water containers be covered?", answer: "To keep out dirt and germs." },
        { type: "short-answer", prompt: "Name two diseases linked to poor sanitation.", answer: "Diarrhoea, cholera, typhoid or worms." },
        { type: "multiple-choice", prompt: "Which action improves sanitation?", choices: ["using a latrine properly", "defecating near water", "throwing rubbish anywhere", "leaving food uncovered"], answer: "using a latrine properly" },
      ] },
    ],
  },
];

const P4_INTESTINAL_DISEASES_WORMS_V4: UpperPrimaryLesson[] = [
  {
    id: "p4-v4-communicable-intestinal-diseases",
    classLevel: "P4",
    term: "Term III",
    curriculumMode: "subject",
    subject: "Integrated Science",
    topicTitle: "Communicable Intestinal Diseases and Worm Infestation",
    subTopicTitle: "Communicable and Intestinal Diseases",
    lessonTitle: "Communicable and Intestinal Diseases",
    blocks: [
      { kind: "definition", term: "communicable disease", definition: "is a disease that can spread from one person to another.", simpleCheck: "Some diseases spread through dirty hands, unsafe water, contaminated food or close contact." },
      { kind: "definition", term: "intestinal disease", definition: "is a disease that affects the intestines or digestive system.", simpleCheck: "Diarrhoea, dysentery and typhoid affect the digestive system." },
      { kind: "categories", title: "Common intestinal diseases", categories: [
        { name: "Diarrhoea", definition: "passing watery stool many times", examples: ["caused by dirty food", "caused by unsafe water", "caused by germs"] },
        { name: "Dysentery", definition: "diarrhoea with blood or mucus", examples: ["needs quick adult/health-worker help"] },
        { name: "Typhoid", definition: "a disease often spread through unsafe food or water", examples: ["dirty water", "unwashed food", "poor sanitation"] },
        { name: "Cholera", definition: "a dangerous disease that can spread through unsafe water and poor sanitation", examples: ["serious diarrhoea", "needs urgent health-worker help"] },
      ] },
      { kind: "characteristics", title: "How these diseases spread", points: ["Eating food with germs.", "Drinking unsafe water.", "Not washing hands after using the latrine.", "Leaving food uncovered where flies can land on it.", "Poor sanitation around homes, schools and water sources."] },
      { kind: "diagram", title: "Disease prevention card", imageUrl: "/images/science/p4-worms-disease-prevention.svg", caption: "Prevention of intestinal diseases and worm infestation through hygiene and sanitation.", labels: ["wash hands", "safe water", "latrine", "covered food", "shoes"] },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "What is a communicable disease?", answer: "A disease that can spread from one person to another." },
        { type: "short-answer", prompt: "Name two intestinal diseases.", answer: "Diarrhoea, dysentery, cholera or typhoid." },
        { type: "short-answer", prompt: "Give two ways intestinal diseases spread.", answer: "Unsafe water, dirty food, dirty hands, flies or poor sanitation." },
        { type: "multiple-choice", prompt: "Which habit helps prevent diarrhoea?", choices: ["washing hands", "drinking dirty water", "leaving food uncovered", "using dirty plates"], answer: "washing hands" },
      ] },
    ],
  },
  {
    id: "p4-v4-worm-infestation",
    classLevel: "P4",
    term: "Term III",
    curriculumMode: "subject",
    subject: "Integrated Science",
    topicTitle: "Communicable Intestinal Diseases and Worm Infestation",
    subTopicTitle: "Worm Infestation",
    lessonTitle: "Worm Infestation",
    blocks: [
      { kind: "definition", term: "worm infestation", definition: "is a condition where worms live inside a person's body, especially in the intestines.", simpleCheck: "Worms can enter the body through contaminated food, dirty hands, unsafe water or bare feet in contaminated soil." },
      { kind: "categories", title: "Common worms", categories: [
        { name: "Roundworms", definition: "worms that can live in the intestines", examples: ["spread through eggs in dirty food, soil or hands"] },
        { name: "Hookworms", definition: "worms that can enter through bare feet in contaminated soil", examples: ["walking barefoot near dirty latrines"] },
        { name: "Tapeworms", definition: "flat worms that can come from eating poorly cooked infected meat", examples: ["unsafe pork or beef"] },
      ] },
      { kind: "characteristics", title: "Signs and prevention", points: ["Stomach pain, weakness, poor growth or loss of appetite may happen with worms.", "Wear shoes or sandals, especially near latrines and dirty soil.", "Wash hands with soap after using the latrine and before eating.", "Wash fruits and vegetables before eating.", "Eat properly cooked food.", "Take deworming medicine only with adult/health-worker guidance." ] },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "What is worm infestation?", answer: "Worms living inside a person's body." },
        { type: "short-answer", prompt: "Name two types of worms.", answer: "Roundworms, hookworms or tapeworms." },
        { type: "short-answer", prompt: "Give three ways to prevent worm infestation.", answer: "Wear shoes, wash hands, wash food, cook food well and use latrines properly." },
        { type: "multiple-choice", prompt: "Which worm can enter through bare feet?", choices: ["hookworm", "housefly", "mosquito", "bee"], answer: "hookworm" },
      ] },
    ],
  },
];

const P4_VECTORS_DISEASES_V4: UpperPrimaryLesson[] = [
  {
    id: "p4-v4-common-vectors",
    classLevel: "P4",
    term: "Term III",
    curriculumMode: "subject",
    subject: "Integrated Science",
    topicTitle: "Vectors and Diseases",
    subTopicTitle: "Common Vectors",
    lessonTitle: "Common Vectors",
    blocks: [
      { kind: "definition", term: "vector", definition: "is a living thing that carries germs from one person, animal or place to another.", simpleCheck: "A mosquito is a vector because it can spread malaria." },
      { kind: "categories", title: "Common vectors and diseases", categories: [
        { name: "Mosquito", definition: "a flying insect that can spread malaria and other diseases", examples: ["malaria", "yellow fever"] },
        { name: "Housefly", definition: "a fly that carries germs from dirty places to food", examples: ["diarrhoea", "cholera", "typhoid"] },
        { name: "Tsetse fly", definition: "a fly that can spread sleeping sickness", examples: ["sleeping sickness"] },
        { name: "Rat", definition: "an animal that can spoil food and spread diseases", examples: ["plague in some places", "food contamination"] },
        { name: "Louse / flea / bed-bug", definition: "small pests that can bite people and cause discomfort or spread disease", examples: ["itching", "skin irritation", "some diseases"] },
      ] },
      { kind: "diagram", title: "Vectors and disease control", imageUrl: "/images/science/vectors-disease-control.svg", caption: "Common vectors and ways of controlling them around home and school.", labels: ["mosquito", "housefly", "rat", "tsetse fly", "control"] },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "What is a vector?", answer: "A living thing that carries germs from one place/person to another." },
        { type: "short-answer", prompt: "Name four vectors.", answer: "Mosquito, housefly, tsetse fly, rat, louse, flea or bed-bug." },
        { type: "multiple-choice", prompt: "Which vector spreads malaria?", choices: ["mosquito", "goat", "hen", "fish"], answer: "mosquito" },
      ] },
    ],
  },
  {
    id: "p4-v4-vector-control",
    classLevel: "P4",
    term: "Term III",
    curriculumMode: "subject",
    subject: "Integrated Science",
    topicTitle: "Vectors and Diseases",
    subTopicTitle: "Vector Control and Protection",
    lessonTitle: "Vector Control and Protection",
    blocks: [
      { kind: "definition", term: "vector control", definition: "means reducing or removing vectors so they do not spread diseases.", simpleCheck: "Pouring away stagnant water can help control mosquitoes." },
      { kind: "categories", title: "Ways to control vectors", categories: [
        { name: "Mosquito control", definition: "removing mosquito breeding places and preventing bites", examples: ["sleep under nets", "remove stagnant water", "clear bushes near houses"] },
        { name: "Fly control", definition: "stopping flies from reaching food and dirty places", examples: ["cover food", "use latrines properly", "dispose rubbish safely"] },
        { name: "Rat control", definition: "removing food and shelter for rats", examples: ["cover food", "keep stores clean", "block holes", "use traps with adult help"] },
        { name: "Personal protection", definition: "actions that protect a person from vectors", examples: ["wear clean clothes", "sleep under a net", "keep bedding clean"] },
      ] },
      { kind: "characteristics", title: "Community protection", points: ["Keep compounds clean.", "Drain stagnant water.", "Cover food and water containers.", "Use rubbish pits or bins properly.", "Report vector problems to adults or local leaders."] },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "Give three ways to control mosquitoes.", answer: "Sleep under nets, remove stagnant water, clear bushes or cover water containers." },
        { type: "short-answer", prompt: "How can houseflies be controlled?", answer: "Cover food, dispose rubbish, use latrines properly and keep places clean." },
        { type: "multiple-choice", prompt: "Which action controls rats?", choices: ["keeping stores clean", "leaving food open", "throwing rubbish anywhere", "sleeping in dirty bedding"], answer: "keeping stores clean" },
      ] },
    ],
  },
];

const P4_ACCIDENTS_FIRST_AID_V4: UpperPrimaryLesson[] = [
  {
    id: "p4-v4-accidents-first-aid",
    classLevel: "P4",
    term: "Term III",
    curriculumMode: "subject",
    subject: "Integrated Science",
    topicTitle: "Accidents, Poisoning and First Aid",
    subTopicTitle: "Common Accidents and First Aid",
    lessonTitle: "Common Accidents and First Aid",
    blocks: [
      { kind: "definition", term: "accident", definition: "is an unexpected event that can cause injury or damage.", simpleCheck: "A fall, burn, cut or road crash can be an accident." },
      { kind: "definition", term: "first aid", definition: "is the first help given to an injured or sick person before full treatment by a health worker.", simpleCheck: "Putting a clean cloth on a small bleeding cut while calling an adult is first aid." },
      { kind: "categories", title: "Common accidents", categories: [
        { name: "Cuts and wounds", definition: "injuries caused by sharp objects", examples: ["knife cut", "broken glass cut", "thorn prick"] },
        { name: "Burns and scalds", definition: "injuries caused by fire, hot liquids or hot objects", examples: ["hot water", "fire", "hot charcoal stove"] },
        { name: "Falls", definition: "injuries from dropping or slipping", examples: ["fall from tree", "fall on slippery floor"] },
        { name: "Road accidents", definition: "accidents involving roads and vehicles", examples: ["bicycle crash", "car crash", "knocked by motorcycle"] },
      ] },
      { kind: "diagram", title: "First aid safety card", imageUrl: "/images/science/p4-first-aid-safety.svg", caption: "First aid basics and safety at home and school.", labels: ["cut", "burn", "fall", "poison", "call adult"] },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "What is an accident?", answer: "An unexpected event that can cause injury or damage." },
        { type: "short-answer", prompt: "What is first aid?", answer: "First help given before full treatment." },
        { type: "short-answer", prompt: "Name three common accidents.", answer: "Cuts, burns, falls, poisoning or road accidents." },
        { type: "multiple-choice", prompt: "Who should a child call during a serious accident?", choices: ["adult", "toy", "stone", "chair"], answer: "adult" },
      ] },
    ],
  },
  {
    id: "p4-v4-poisoning-safety",
    classLevel: "P4",
    term: "Term III",
    curriculumMode: "subject",
    subject: "Integrated Science",
    topicTitle: "Accidents, Poisoning and First Aid",
    subTopicTitle: "Poisoning and Safety",
    lessonTitle: "Poisoning and Safety",
    blocks: [
      { kind: "definition", term: "poison", definition: "is a substance that can harm or kill a person or animal if swallowed, breathed in or put on the body wrongly.", simpleCheck: "Medicine, paraffin, pesticides and cleaning chemicals can be poisonous if misused." },
      { kind: "categories", title: "Common poisons and prevention", categories: [
        { name: "Medicines", definition: "help when used correctly but can poison when misused", examples: ["tablets", "syrups", "injections"] },
        { name: "Household chemicals", definition: "chemicals used for cleaning or other work", examples: ["bleach", "detergents", "paraffin"] },
        { name: "Farm chemicals", definition: "chemicals used for crops or animals", examples: ["pesticides", "herbicides"] },
        { name: "Poison prevention", definition: "actions that stop poisoning", examples: ["keep chemicals away from children", "do not taste unknown substances", "read labels with adults"] },
      ] },
      { kind: "characteristics", title: "What to do in poisoning", points: ["Call an adult immediately.", "Do not hide poisoning.", "Do not drink more unknown liquids.", "Do not force vomiting unless a health worker says so.", "Take the container or label to the health worker if safe for an adult to do so." ] },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "What is poison?", answer: "A substance that can harm or kill if misused." },
        { type: "short-answer", prompt: "Name three things that may poison children if misused.", answer: "Medicines, paraffin, pesticides, bleach or detergents." },
        { type: "multiple-choice", prompt: "What should a child do in suspected poisoning?", choices: ["call an adult immediately", "hide", "drink more chemical", "sleep quietly"], answer: "call an adult immediately" },
      ] },
    ],
  },
];

const P4_OUR_FOOD_V4: UpperPrimaryLesson[] = [
  {
    id: "p4-v4-food-types-balanced-diet",
    classLevel: "P4",
    term: "Term II",
    curriculumMode: "subject",
    subject: "Integrated Science",
    topicTitle: "Our Food",
    subTopicTitle: "Food Types and Balanced Diet",
    lessonTitle: "Food Types and Balanced Diet",
    blocks: [
      { kind: "definition", term: "food", definition: "is what people and animals eat to live, grow, get energy and stay healthy.", simpleCheck: "Posho, beans, matooke, eggs, fish and fruits are foods." },
      { kind: "definition", term: "balanced diet", definition: "is a meal that contains the right amounts of different food groups needed by the body.", simpleCheck: "A meal with posho, beans, greens and fruit can be more balanced than sweets alone." },
      { kind: "categories", title: "Food groups", categories: [
        { name: "Energy-giving foods", definition: "foods that give the body energy", examples: ["posho", "rice", "matooke", "cassava", "sweet potatoes"] },
        { name: "Body-building foods", definition: "foods that help the body grow and repair itself", examples: ["beans", "eggs", "fish", "meat", "milk"] },
        { name: "Protective foods", definition: "foods that help protect the body from diseases", examples: ["fruits", "vegetables", "greens"] },
        { name: "Water", definition: "helps digestion, cooling and movement of substances in the body", examples: ["safe drinking water"] },
      ] },
      { kind: "diagram", title: "Balanced diet card", imageUrl: "/images/science/p4-balanced-diet.svg", caption: "A balanced meal contains energy-giving, body-building and protective foods.", labels: ["energy", "body-building", "protective", "water"] },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "What is food?", answer: "What people and animals eat to live and grow." },
        { type: "short-answer", prompt: "What is a balanced diet?", answer: "A meal with the right amounts of different food groups." },
        { type: "short-answer", prompt: "Name the three main food groups.", answer: "Energy-giving, body-building and protective foods." },
        { type: "multiple-choice", prompt: "Which food helps build the body?", choices: ["beans", "soda", "sweets", "dust"], answer: "beans" },
      ] },
    ],
  },
  {
    id: "p4-v4-food-hygiene-uses",
    classLevel: "P4",
    term: "Term II",
    curriculumMode: "subject",
    subject: "Integrated Science",
    topicTitle: "Our Food",
    subTopicTitle: "Food Hygiene and Uses of Food",
    lessonTitle: "Food Hygiene and Uses of Food",
    blocks: [
      { kind: "definition", term: "food hygiene", definition: "is keeping food clean and safe from germs before eating.", simpleCheck: "Washing fruits before eating is food hygiene." },
      { kind: "uses", title: "Uses of food", points: ["Food gives energy for work and play.", "Food helps the body grow.", "Food repairs worn-out body parts.", "Food protects the body from diseases.", "Food helps the body stay warm and healthy." ] },
      { kind: "categories", title: "Food hygiene practices", categories: [
        { name: "Before cooking/eating", definition: "actions before food is prepared or eaten", examples: ["wash hands", "wash fruits", "use clean utensils"] },
        { name: "During storage", definition: "actions that keep food safe", examples: ["cover food", "keep food in clean containers", "protect food from rats and flies"] },
        { name: "During serving", definition: "actions that keep served food clean", examples: ["use clean plates", "avoid touching food with dirty hands"] },
      ] },
      { kind: "characteristics", title: "Dangers of poor food hygiene", points: ["Food can be contaminated by flies, dirty hands, dirty water and dirty utensils.", "Spoiled food can cause stomach pain, diarrhoea and vomiting.", "Uncovered food can attract flies and cockroaches.", "Food handlers should be clean." ] },
      { kind: "exercise", title: "Evaluation", questions: [
        { type: "short-answer", prompt: "What is food hygiene?", answer: "Keeping food clean and safe from germs." },
        { type: "short-answer", prompt: "Give four ways to keep food clean.", answer: "Wash hands, cover food, wash fruits, use clean utensils, store food well." },
        { type: "multiple-choice", prompt: "Why should food be covered?", choices: ["to keep away flies", "to invite rats", "to make it dirty", "to spoil it"], answer: "to keep away flies" },
      ] },
    ],
  },
];

const P4_SCIENCE_TOPIC_DATA: Topic[] = [
  {
    "id": "p4-plant-life",
    "themeId": "p4-science-living-things",
    "themeName": "The World of Living Things",
    "title": "Plant Life",
    "estMinutes": 40,
    "status": "published",
    "reviewStatus": "beta",
    "upperPrimaryLessons": P4_PLANT_LIFE_V4,
    "useOnlyV4Lessons": true,
    "note": {
      "intro": "P4 Science beta: built from the NCDC Primary Four Integrated Science Syllabus, April 2009; human science/health review still required before premium-final release. Plant Life helps P4 learners observe, care for health and environment, and explain everyday science clearly.",
      "learningObjectives": [
        "Name parts of a flowering plant.",
        "State functions of plant parts.",
        "Explain plant needs and uses.",
        "Describe ways of caring for plants."
      ],
      "whatYouNeedToKnow": [
        "A flowering plant has roots, stem, leaves, flowers, fruits and seeds.",
        "Roots hold the plant and absorb water and mineral salts.",
        "Leaves make food for the plant using sunlight, air and water.",
        "Plants need air, water, sunlight and good soil.",
        "Plants provide food, shade, medicine, timber and oxygen."
      ],
      "worked": {
        "problem": "Why do roots help a plant survive?",
        "steps": [
          "Roots hold the plant firmly in soil.",
          "Roots absorb water and mineral salts.",
          "Water and mineral salts help the plant grow."
        ],
        "answer": "Roots anchor the plant and absorb water and mineral salts."
      },
      "commonMistakes": [
        "Calling every green part a leaf.",
        "Forgetting that roots also hold the plant.",
        "Saying plants only need water and not sunlight or air."
      ],
      "recap": [
        "Name each part.",
        "Match each part to its function.",
        "Care for plants by watering, weeding and avoiding damage."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-flowering-plants",
        "title": "1. Flowering plants and their parts",
        "modules": [
          {
            "moduleId": "p4-plant-parts",
            "title": "Parts and functions of plants",
            "bigIdea": "Each plant part has a special job that helps the plant live.",
            "learnIt": [
              "Roots absorb water and hold the plant.",
              "The stem supports leaves and carries water.",
              "Leaves make food for the plant.",
              "Flowers help plants produce fruits and seeds."
            ],
            "workedExample": {
              "question": "Name the part that makes food for a plant.",
              "steps": [
                "Food-making happens mostly in leaves.",
                "Leaves use sunlight, air and water to make food."
              ],
              "answer": "Leaves make food for the plant."
            },
            "tryThis": {
              "question": "Which part absorbs water?",
              "choices": [
                "roots",
                "flower",
                "fruit",
                "seed"
              ],
              "correct": 0,
              "explanation": "Roots absorb water from soil."
            },
            "imageUrl": "/images/science/flowering-plant-parts.svg",
            "imageCaption": "Diagram of flowering plant parts and their functions."
          }
        ]
      },
      {
        "subtopicId": "p4-plant-flowers-fruits-seeds",
        "title": "2. Flowers, fruits and seeds",
        "modules": [
          {
            "moduleId": "p4-flowers-fruits-seeds",
            "title": "From Flower to Fruit and Seed",
            "bigIdea": "Flowering plants reproduce by forming fruits and seeds after flowers are pollinated.",
            "imageUrl": "/images/science/flowering-plant-parts.svg",
            "imageCaption": "Flowering plant parts: flowers help plants form fruits and seeds.",
            "learnIt": [
              "A flower is the part of many plants that helps in reproduction.",
              "After pollination and fertilisation, some flowers develop into fruits.",
              "Fruits protect seeds. Seeds can grow into new plants when conditions are suitable.",
              "Seeds need air, water and warmth to germinate."
            ],
            "workedExample": {
              "question": "Why are seeds important to flowering plants?",
              "steps": [
                "Seeds can grow into new young plants.",
                "This helps the plant kind continue."
              ],
              "answer": "Seeds are important because they can grow into new plants."
            },
            "tryThis": {
              "question": "Which plant part can develop into a fruit?",
              "choices": [
                "root",
                "flower",
                "stem only",
                "leaf only"
              ],
              "correct": 1,
              "explanation": "In many flowering plants, the flower can develop into a fruit after pollination and fertilisation."
            }
          }
        ]
      },
      {
        "subtopicId": "p4-plant-germination",
        "title": "3. Germination and plant needs",
        "modules": [
          {
            "moduleId": "p4-seed-germination-needs",
            "title": "Seed Germination and Plant Needs",
            "bigIdea": "A seed germinates when it has the right conditions, and the young plant then needs light, water, air and good soil.",
            "learnIt": [
              "Germination is the beginning of growth of a seed into a seedling.",
              "A seed usually needs water, air and warmth to germinate.",
              "After germination, the seedling needs sunlight to make food in its leaves.",
              "Good soil gives support and mineral salts."
            ],
            "workedExample": {
              "question": "A seed is put in dry soil and does not germinate. What is missing?",
              "steps": [
                "Seeds need water for germination.",
                "Dry soil has too little water."
              ],
              "answer": "Water is missing."
            },
            "tryThis": {
              "question": "Which condition is needed for germination?",
              "choices": [
                "a bank account",
                "a compass",
                "water",
                "a mirror"
              ],
              "correct": 2,
              "explanation": "Seeds need water to germinate."
            }
          }
        ]
      },
      {
        "subtopicId": "p4-plant-life-application",
        "title": "2. Observing and caring for plants",
        "modules": [
          {
            "moduleId": "p4-plant-life-application-module",
            "title": "Plant observation and care",
            "bigIdea": "A good P4 science learner can observe a plant and explain how to care for it.",
            "learnIt": [
              "Observe a real plant and name its visible parts before writing notes.",
              "Check whether the plant has enough water, sunlight and space.",
              "Do not uproot young plants carelessly during observation."
            ],
            "workedExample": {
              "question": "A bean seedling is yellow and weak because it has been kept in a dark box. What should be changed?",
              "steps": [
                "Plants need sunlight for healthy growth.",
                "Move the seedling to a safe place with enough light and continue watering it."
              ],
              "answer": "Move it to a place with sunlight and care for it properly."
            },
            "tryThis": {
              "question": "A safe way to observe roots is to:",
              "choices": [
                "uproot every plant in the garden",
                "cut all roots",
                "throw soil in class",
                "look at a drawn diagram or teacher sample"
              ],
              "correct": 3,
              "explanation": "Learners should avoid destroying plants unnecessarily."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Which part holds a plant in soil?",
        "choices": [
          "roots",
          "flower",
          "fruit",
          "leaf"
        ],
        "correct": 0,
        "why": "Roots hold the plant."
      },
      {
        "q": "Leaves mainly help a plant to:",
        "choices": [
          "walk",
          "make food",
          "chew",
          "hear"
        ],
        "correct": 1,
        "why": "Leaves make food."
      },
      {
        "q": "Plants need:",
        "choices": [
          "only stones",
          "only darkness",
          "water, air and sunlight",
          "salt only"
        ],
        "correct": 2,
        "why": "Plants need water, air and sunlight."
      },
      {
        "q": "A fruit usually contains:",
        "choices": [
          "teeth",
          "bones",
          "lungs",
          "seeds"
        ],
        "correct": 3,
        "why": "Fruits contain seeds."
      },
      {
        "q": "One use of plants is:",
        "choices": [
          "food",
          "spreading malaria",
          "causing accidents",
          "making smoke only"
        ],
        "correct": 0,
        "why": "Many plants provide food."
      },
      {
        "q": "We care for young plants by:",
        "choices": [
          "uprooting them",
          "watering them",
          "stepping on them",
          "burning them"
        ],
        "correct": 1,
        "why": "Watering helps them grow."
      }
    ]
  },
  {
    "id": "p4-growing-crops",
    "themeId": "p4-science-living-things",
    "themeName": "The World of Living Things",
    "title": "Growing Crops",
    "estMinutes": 32,
    "status": "published",
    "reviewStatus": "beta",
    "upperPrimaryLessons": P4_GROWING_CROPS_V4,
    "useOnlyV4Lessons": true,
    "note": {
      "intro": "P4 Science beta: built from the NCDC Primary Four Integrated Science Syllabus, April 2009; human science/health review still required before premium-final release. Growing Crops helps P4 learners observe, care for health and environment, and explain everyday science clearly.",
      "learningObjectives": [
        "Describe steps in crop growing.",
        "Explain soil preparation and planting.",
        "Name crop-care practices.",
        "Explain harvesting and safe storage."
      ],
      "whatYouNeedToKnow": [
        "Crop growing starts with choosing a crop and preparing land.",
        "Soil preparation may include clearing, digging and making seedbeds.",
        "Crop care includes watering, weeding, mulching and controlling pests.",
        "Harvesting is collecting mature crops.",
        "Good storage protects crops from pests, rain and rotting."
      ],
      "worked": {
        "problem": "Why should a farmer weed a garden?",
        "steps": [
          "Weeds compete with crops for water, nutrients, light and space.",
          "Removing weeds helps crops grow well."
        ],
        "answer": "Weeding reduces competition and helps crops grow better."
      },
      "commonMistakes": [
        "Planting seeds too deep.",
        "Forgetting that weeds compete with crops.",
        "Harvesting before crops are mature.",
        "Storing wet crops where they can rot."
      ],
      "recap": [
        "Prepare soil well.",
        "Plant correctly.",
        "Care for crops until harvest."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-crop-growing-practices",
        "title": "1. Crop growing practices",
        "modules": [
          {
            "moduleId": "p4-growing-crops-steps",
            "title": "From planting to harvesting",
            "bigIdea": "Healthy crops need good preparation, planting and care.",
            "learnIt": [
              "Clear land and dig soil before planting.",
              "Plant good seeds or seedlings at the correct spacing.",
              "Water and weed crops regularly.",
              "Harvest crops when they are mature."
            ],
            "workedExample": {
              "question": "A crop is weak because weeds cover it. What should the farmer do?",
              "steps": [
                "Identify the problem: weeds.",
                "Use the correct practice: weeding."
              ],
              "answer": "The farmer should weed the garden."
            },
            "tryThis": {
              "question": "Which is a crop-care practice?",
              "choices": [
                "breaking all stems",
                "throwing rubbish",
                "weeding",
                "harvesting immature crops"
              ],
              "correct": 2,
              "explanation": "Weeding is a crop-care practice."
            },
            "imageUrl": "/images/science/crop-growing-cycle.svg",
            "imageCaption": "Crop-growing cycle from soil preparation to harvest."
          }
        ]
      },
      {
        "subtopicId": "p4-growing-crops-application",
        "title": "2. Crop problems and good farming choices",
        "modules": [
          {
            "moduleId": "p4-growing-crops-application-module",
            "title": "Solving crop-growing problems",
            "bigIdea": "Crop growing involves making good choices when plants face problems.",
            "learnIt": [
              "If seedlings wilt, check water, shade and soil condition.",
              "If pests attack crops, ask an adult for safe control methods.",
              "Harvest only when crops are mature and handle them carefully."
            ],
            "workedExample": {
              "question": "A farmer notices insects eating young cabbage leaves. What should the farmer do first?",
              "steps": [
                "Identify the problem as pests.",
                "Ask an experienced adult/agricultural worker for a safe control method.",
                "Avoid using unknown chemicals carelessly."
              ],
              "answer": "Seek safe pest-control advice and protect the crop."
            },
            "tryThis": {
              "question": "Which is safest for a child?",
              "choices": [
                "spray unknown chemicals alone",
                "taste pesticides",
                "ignore all pests",
                "ask an adult before using pest control"
              ],
              "correct": 3,
              "explanation": "Children should not handle unknown chemicals."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "The first step before planting is often:",
        "choices": [
          "preparing land",
          "selling crops",
          "cooking food",
          "harvesting"
        ],
        "correct": 0,
        "why": "Land is prepared before planting."
      },
      {
        "q": "Weeds compete with crops for:",
        "choices": [
          "school fees",
          "water and nutrients",
          "books",
          "chalk"
        ],
        "correct": 1,
        "why": "Weeds take water and nutrients."
      },
      {
        "q": "Mulching helps soil to:",
        "choices": [
          "burn quickly",
          "lose all water",
          "keep moisture",
          "become plastic"
        ],
        "correct": 2,
        "why": "Mulch reduces water loss."
      },
      {
        "q": "Harvesting means:",
        "choices": [
          "planting seeds",
          "watering soil",
          "naming animals",
          "collecting mature crops"
        ],
        "correct": 3,
        "why": "Harvesting collects mature crops."
      },
      {
        "q": "Wet grains should be dried before storage to prevent:",
        "choices": [
          "rotting",
          "reading",
          "germination always",
          "counting"
        ],
        "correct": 0,
        "why": "Moisture can cause rotting."
      },
      {
        "q": "Good seeds should be:",
        "choices": [
          "broken and rotten",
          "healthy and mature",
          "eaten by pests",
          "burnt"
        ],
        "correct": 1,
        "why": "Healthy mature seeds grow better."
      }
    ]
  },
  {
    "id": "p4-animal-life",
    "themeId": "p4-science-living-things",
    "themeName": "The World of Living Things",
    "title": "Animal Life",
    "estMinutes": 32,
    "status": "published",
    "reviewStatus": "beta",
    "upperPrimaryLessons": P4_ANIMAL_LIFE_V4,
    "useOnlyV4Lessons": true,
    "note": {
      "intro": "P4 Science beta: built from the NCDC Primary Four Integrated Science Syllabus, April 2009; human science/health review still required before premium-final release. Animal Life helps P4 learners observe, care for health and environment, and explain everyday science clearly.",
      "learningObjectives": [
        "Name common animals.",
        "State needs of animals.",
        "Describe animal care.",
        "Explain uses of animals."
      ],
      "whatYouNeedToKnow": [
        "Animals are living things that need food, water, air and shelter.",
        "Domestic animals live with people and are cared for by people.",
        "Wild animals live in natural habitats such as forests, water bodies and grasslands.",
        "Animals provide food, labour, security, transport and income.",
        "Animals should be treated kindly and kept healthy."
      ],
      "worked": {
        "problem": "Why should animals be given clean water?",
        "steps": [
          "Animals need water to live.",
          "Dirty water can spread disease.",
          "Clean water keeps animals healthy."
        ],
        "answer": "Clean water helps animals stay healthy and prevents disease."
      },
      "commonMistakes": [
        "Thinking animals only need food.",
        "Calling all animals domestic animals.",
        "Mistreating animals instead of caring for them.",
        "Forgetting that shelter protects animals from weather and enemies."
      ],
      "recap": [
        "Animals need food, water, air and shelter.",
        "Care includes feeding, cleaning and treating sickness.",
        "Animals are useful but need protection."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-common-animals-care",
        "title": "1. Common animals and animal care",
        "modules": [
          {
            "moduleId": "p4-animal-needs",
            "title": "Animal needs and care",
            "bigIdea": "Animals stay healthy when their basic needs are met.",
            "learnIt": [
              "Give animals enough food and clean water.",
              "Provide shelter such as kraals, kennels, coops or stables.",
              "Clean animal houses to reduce diseases.",
              "Call a veterinary worker when animals are sick."
            ],
            "workedExample": {
              "question": "A calf is kept in a dirty kraal. What problem may happen?",
              "steps": [
                "Dirty places attract germs and parasites.",
                "The calf may become sick."
              ],
              "answer": "The calf may get diseases or parasites."
            },
            "tryThis": {
              "question": "Which is a need of animals?",
              "choices": [
                "chalk",
                "a blackboard",
                "water",
                "a ruler"
              ],
              "correct": 2,
              "explanation": "Animals need water to live."
            },
            "imageUrl": "/images/science/p4-animal-care.svg",
            "imageCaption": "Animal needs and care summary."
          }
        ]
      },
      {
        "subtopicId": "p4-animal-life-application",
        "title": "2. Animal safety and kindness",
        "modules": [
          {
            "moduleId": "p4-animal-life-application-module",
            "title": "Responsible animal care",
            "bigIdea": "Animals are useful, but learners must care for them safely and kindly.",
            "learnIt": [
              "Do not tease or beat animals because they can be hurt or may attack.",
              "Wash hands after handling animals or cleaning animal houses.",
              "Sick animals should be reported to an adult or veterinary worker."
            ],
            "workedExample": {
              "question": "A dog at home refuses to eat and looks weak. What should a learner do?",
              "steps": [
                "The animal may be sick.",
                "A learner should not guess treatment.",
                "Tell an adult so a veterinary worker can help."
              ],
              "answer": "Tell an adult and seek veterinary help."
            },
            "tryThis": {
              "question": "A kind way to care for animals is to:",
              "choices": [
                "throw stones at them",
                "deny them food",
                "keep them in dirty places",
                "give clean water"
              ],
              "correct": 3,
              "explanation": "Clean water is part of animal care."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Which is a domestic animal?",
        "choices": [
          "goat",
          "lion",
          "crocodile",
          "elephant"
        ],
        "correct": 0,
        "why": "Goats are commonly kept by people."
      },
      {
        "q": "Animals need shelter to:",
        "choices": [
          "help them read",
          "protect them from weather and enemies",
          "make them plants",
          "turn them into stones"
        ],
        "correct": 1,
        "why": "Shelter protects animals."
      },
      {
        "q": "A dog may help people by:",
        "choices": [
          "making leaves",
          "laying eggs always",
          "guarding a home",
          "measuring length"
        ],
        "correct": 2,
        "why": "Dogs can provide security."
      },
      {
        "q": "Animal houses should be:",
        "choices": [
          "dirty",
          "flooded",
          "broken",
          "clean"
        ],
        "correct": 3,
        "why": "Clean houses reduce disease."
      },
      {
        "q": "A sick animal should be seen by:",
        "choices": [
          "a veterinary worker",
          "a tailor",
          "a barber",
          "a conductor"
        ],
        "correct": 0,
        "why": "Veterinary workers treat animals."
      },
      {
        "q": "Wild animals usually live:",
        "choices": [
          "inside exercise books",
          "in natural habitats",
          "in cups",
          "on desks only"
        ],
        "correct": 1,
        "why": "Wild animals live in natural habitats."
      }
    ]
  },
  {
    "id": "p4-weather-changes",
    "themeId": "p4-science-environment",
    "themeName": "Our Environment",
    "title": "Weather Changes Around Us",
    "estMinutes": 32,
    "status": "published",
    "reviewStatus": "beta",
    "upperPrimaryLessons": P4_WEATHER_CHANGES_V4,
    "useOnlyV4Lessons": true,
    "note": {
      "intro": "P4 Science beta: built from the NCDC Primary Four Integrated Science Syllabus, April 2009; human science/health review still required before premium-final release. Weather Changes Around Us helps P4 learners observe, care for health and environment, and explain everyday science clearly.",
      "learningObjectives": [
        "Name weather elements.",
        "Observe weather changes.",
        "Use simple weather symbols.",
        "Explain effects of weather on people, plants and animals."
      ],
      "whatYouNeedToKnow": [
        "Weather is the condition of the atmosphere at a particular time.",
        "Weather elements include sunshine, rain, wind, clouds and temperature.",
        "Weather changes from time to time and from place to place.",
        "Weather affects clothing, farming, travel and play.",
        "Weather symbols help us record weather quickly."
      ],
      "worked": {
        "problem": "Why do farmers need rain?",
        "steps": [
          "Crops need water to grow.",
          "Rain provides water to crops and soil.",
          "Too little rain can make crops dry."
        ],
        "answer": "Farmers need rain because crops need water to grow."
      },
      "commonMistakes": [
        "Confusing weather with climate.",
        "Saying every cloudy day must have heavy rain.",
        "Forgetting that too much rain can also cause problems.",
        "Not observing weather before recording it."
      ],
      "recap": [
        "Observe the sky and air.",
        "Use symbols carefully.",
        "Weather affects daily activities."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-weather-elements",
        "title": "1. Weather elements and symbols",
        "modules": [
          {
            "moduleId": "p4-weather-observation",
            "title": "Observing weather",
            "bigIdea": "Weather can be observed and recorded using simple symbols.",
            "learnIt": [
              "Sunshine can be shown by a sun symbol.",
              "Rain can be shown by drops or clouds with rain.",
              "Wind can be observed by moving leaves, flags or dust.",
              "Clouds may show that rain is possible."
            ],
            "workedExample": {
              "question": "A flag is moving strongly. Which weather element is being observed?",
              "steps": [
                "A moving flag shows air movement.",
                "Air movement is wind."
              ],
              "answer": "Wind is being observed."
            },
            "tryThis": {
              "question": "Which is a weather element?",
              "choices": [
                "tooth",
                "root",
                "rain",
                "profit"
              ],
              "correct": 2,
              "explanation": "Rain is a weather element."
            },
            "imageUrl": "/images/science/weather-symbols-chart.svg",
            "imageCaption": "Simple weather symbols for daily observation."
          }
        ]
      },
      {
        "subtopicId": "p4-weather-changes-application",
        "title": "2. Weather decisions in daily life",
        "modules": [
          {
            "moduleId": "p4-weather-changes-application-module",
            "title": "Using weather information",
            "bigIdea": "Weather observations help learners make safe daily choices.",
            "learnIt": [
              "Cloudy skies may warn people to carry raincoats or protect drying crops.",
              "Strong wind may make dust, falling branches or unsafe water travel.",
              "Weather records help farmers plan planting and harvesting."
            ],
            "workedExample": {
              "question": "The sky is dark with heavy clouds before school. What should a learner carry?",
              "steps": [
                "Dark heavy clouds may show rain is likely.",
                "A raincoat or umbrella can keep the learner dry."
              ],
              "answer": "A raincoat or umbrella."
            },
            "tryThis": {
              "question": "Which activity is risky during heavy rain?",
              "choices": [
                "staying indoors",
                "wearing a raincoat",
                "protecting books",
                "crossing a flooded stream"
              ],
              "correct": 3,
              "explanation": "Flooded streams can be dangerous."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Weather is:",
        "choices": [
          "condition of air at a time",
          "a plant part",
          "a tooth type",
          "a body organ"
        ],
        "correct": 0,
        "why": "Weather is the condition of the atmosphere."
      },
      {
        "q": "Which is a weather element?",
        "choices": [
          "root",
          "wind",
          "profit",
          "molar"
        ],
        "correct": 1,
        "why": "Wind is a weather element."
      },
      {
        "q": "A rain symbol helps us:",
        "choices": [
          "cook food",
          "measure teeth",
          "record rainy weather",
          "sell goods"
        ],
        "correct": 2,
        "why": "Weather symbols record weather."
      },
      {
        "q": "Farmers need rain because crops need:",
        "choices": [
          "stones only",
          "darkness only",
          "smoke",
          "water"
        ],
        "correct": 3,
        "why": "Crops need water."
      },
      {
        "q": "Too much rain may cause:",
        "choices": [
          "floods",
          "tooth decay",
          "reading",
          "good drying only"
        ],
        "correct": 0,
        "why": "Excess rain may flood places."
      },
      {
        "q": "A thermometer measures:",
        "choices": [
          "wind direction only",
          "temperature",
          "rain drops only",
          "plant roots"
        ],
        "correct": 1,
        "why": "Temperature is measured with a thermometer."
      }
    ]
  },
  {
    "id": "p4-personal-hygiene",
    "themeId": "p4-science-human-health",
    "themeName": "Human Health",
    "title": "Personal Hygiene",
    "estMinutes": 32,
    "status": "published",
    "reviewStatus": "beta",
    "upperPrimaryLessons": P4_PERSONAL_HYGIENE_V4,
    "useOnlyV4Lessons": true,
    "note": {
      "intro": "P4 Science beta: built from the NCDC Primary Four Integrated Science Syllabus, April 2009; human science/health review still required before premium-final release. Personal Hygiene helps P4 learners observe, care for health and environment, and explain everyday science clearly.",
      "learningObjectives": [
        "Describe ways of keeping the body clean.",
        "Explain clothes cleanliness.",
        "State good hygiene habits.",
        "Explain how hygiene helps prevent disease."
      ],
      "whatYouNeedToKnow": [
        "Personal hygiene means keeping the body and personal items clean.",
        "Good hygiene includes bathing, washing hands, brushing teeth and wearing clean clothes.",
        "Wash hands with clean water and soap after latrine use and before eating.",
        "Clean clothes reduce bad smell, skin infections and spread of germs.",
        "Good hygiene protects the learner and the people around them."
      ],
      "worked": {
        "problem": "Why should learners wash hands before eating?",
        "steps": [
          "Hands may carry germs from surfaces, soil or latrines.",
          "If germs enter the mouth, they may cause disease.",
          "Washing hands removes many germs."
        ],
        "answer": "Learners wash hands before eating to remove germs and prevent disease."
      },
      "commonMistakes": [
        "Washing hands with water only when soap is available.",
        "Forgetting to wash after latrine use.",
        "Sharing towels or combs carelessly.",
        "Wearing wet dirty clothes for long."
      ],
      "recap": [
        "Keep body clean.",
        "Wash hands at key times.",
        "Cleanliness prevents many diseases."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-body-cleanliness",
        "title": "1. Body and clothes cleanliness",
        "modules": [
          {
            "moduleId": "p4-hygiene-habits",
            "title": "Good hygiene habits",
            "bigIdea": "Hygiene is a daily habit that protects health.",
            "learnIt": [
              "Bathe regularly using clean water and soap.",
              "Brush teeth to remove food particles and reduce tooth decay.",
              "Wash hands before eating and after using a latrine.",
              "Wear clean dry clothes."
            ],
            "workedExample": {
              "question": "Name two times when hands should be washed.",
              "steps": [
                "Think of times germs may enter the body.",
                "Before eating and after latrine use are important."
              ],
              "answer": "Before eating and after using the latrine."
            },
            "tryThis": {
              "question": "Which habit prevents disease?",
              "choices": [
                "eating with dirty hands",
                "wearing wet clothes",
                "washing hands with soap",
                "not bathing"
              ],
              "correct": 2,
              "explanation": "Handwashing removes many germs."
            },
            "imageUrl": "/images/science/personal-hygiene-handwashing.svg",
            "imageCaption": "Personal hygiene habits that help prevent disease."
          }
        ]
      },
      {
        "subtopicId": "p4-personal-hygiene-application",
        "title": "2. Hygiene decisions at school",
        "modules": [
          {
            "moduleId": "p4-personal-hygiene-application-module",
            "title": "Choosing healthy habits",
            "bigIdea": "Personal hygiene becomes useful when learners practise it at the right times.",
            "learnIt": [
              "Wash hands before eating, after latrine use and after cleaning dirty places.",
              "Keep nails short and clean because dirt can hide under nails.",
              "Do not share personal items such as toothbrushes."
            ],
            "workedExample": {
              "question": "A learner wants to eat after playing in soil. What should happen first?",
              "steps": [
                "Soil can carry germs or worm eggs.",
                "The learner should wash hands with clean water and soap before eating."
              ],
              "answer": "Wash hands with clean water and soap."
            },
            "tryThis": {
              "question": "Which item should not be shared?",
              "choices": [
                "football",
                "class reader",
                "chalkboard",
                "toothbrush"
              ],
              "correct": 3,
              "explanation": "A toothbrush is a personal hygiene item."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Personal hygiene means:",
        "choices": [
          "keeping the body clean",
          "growing crops",
          "drawing maps",
          "counting money"
        ],
        "correct": 0,
        "why": "Personal hygiene is body cleanliness."
      },
      {
        "q": "We should wash hands after:",
        "choices": [
          "reading a poem",
          "using a latrine",
          "seeing the sun",
          "drawing a line"
        ],
        "correct": 1,
        "why": "Hands may get germs after latrine use."
      },
      {
        "q": "Soap helps to:",
        "choices": [
          "grow teeth",
          "make wind",
          "remove germs and dirt",
          "measure mass"
        ],
        "correct": 2,
        "why": "Soap helps remove dirt and germs."
      },
      {
        "q": "Dirty clothes may cause:",
        "choices": [
          "good health always",
          "more sunlight",
          "clean air",
          "skin infections"
        ],
        "correct": 3,
        "why": "Dirty clothes can carry germs."
      },
      {
        "q": "Brushing teeth helps prevent:",
        "choices": [
          "tooth decay",
          "rain",
          "wind",
          "profit"
        ],
        "correct": 0,
        "why": "Brushing removes food particles."
      },
      {
        "q": "A clean learner should:",
        "choices": [
          "never wash",
          "bathe regularly",
          "share dirty towels",
          "eat with dirty hands"
        ],
        "correct": 1,
        "why": "Regular bathing is hygienic."
      }
    ]
  },
  {
    "id": "p4-sanitation",
    "themeId": "p4-science-human-health",
    "themeName": "Human Health",
    "title": "Sanitation",
    "estMinutes": 32,
    "status": "published",
    "reviewStatus": "beta",
    "upperPrimaryLessons": P4_SANITATION_V4,
    "useOnlyV4Lessons": true,
    "note": {
      "intro": "P4 Science beta: built from the NCDC Primary Four Integrated Science Syllabus, April 2009; human science/health review still required before premium-final release. Sanitation helps P4 learners observe, care for health and environment, and explain everyday science clearly.",
      "learningObjectives": [
        "Describe sanitation at home and school.",
        "Explain safe disposal of waste.",
        "Describe proper latrine use.",
        "Explain the importance of clean water."
      ],
      "whatYouNeedToKnow": [
        "Sanitation means keeping the surroundings clean to protect health.",
        "Waste should be put in proper places such as dustbins, rubbish pits or compost pits.",
        "Latrines should be used properly and kept clean.",
        "Clean water should be collected, stored and used safely.",
        "Poor sanitation attracts flies, rats and germs."
      ],
      "worked": {
        "problem": "Why should a latrine be covered after use?",
        "steps": [
          "Uncovered latrines attract flies.",
          "Flies can carry germs to food.",
          "Covering helps reduce spread of disease."
        ],
        "answer": "It reduces flies and helps prevent disease spread."
      },
      "commonMistakes": [
        "Throwing rubbish anywhere.",
        "Leaving stagnant water around homes.",
        "Using latrines without washing hands.",
        "Mixing drinking water with dirty containers."
      ],
      "recap": [
        "Keep surroundings clean.",
        "Dispose of waste safely.",
        "Use clean water and latrines properly."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-clean-environment",
        "title": "1. Clean home and school environment",
        "modules": [
          {
            "moduleId": "p4-sanitation-practices",
            "title": "Sanitation practices",
            "bigIdea": "Clean surroundings reduce pests and disease.",
            "learnIt": [
              "Sweep the compound and classroom.",
              "Put rubbish in dustbins or pits.",
              "Drain stagnant water to reduce mosquito breeding.",
              "Keep latrines clean and wash hands after use."
            ],
            "workedExample": {
              "question": "A school has stagnant water near classrooms. What should be done?",
              "steps": [
                "Stagnant water can breed mosquitoes.",
                "Drain or fill the stagnant water."
              ],
              "answer": "Drain or fill the stagnant water to reduce mosquitoes."
            },
            "tryThis": {
              "question": "Where should rubbish be put?",
              "choices": [
                "classroom floor",
                "water source",
                "dustbin or rubbish pit",
                "roadside"
              ],
              "correct": 2,
              "explanation": "Rubbish should be disposed of safely."
            },
            "imageUrl": "/images/science/p4-sanitation-clean-environment.svg",
            "imageCaption": "Sanitation practices for clean surroundings."
          }
        ]
      },
      {
        "subtopicId": "p4-sanitation-application",
        "title": "2. Sanitation problem solving",
        "modules": [
          {
            "moduleId": "p4-sanitation-application-module",
            "title": "Keeping shared places clean",
            "bigIdea": "Sanitation protects everyone because dirty places can spread disease.",
            "learnIt": [
              "Classrooms, latrines, kitchens and water points should be kept clean.",
              "Rubbish should be sorted or placed in the correct pit/bin.",
              "Community sanitation improves when everyone takes responsibility."
            ],
            "workedExample": {
              "question": "A rubbish pit is overflowing near a classroom. What problem can this cause?",
              "steps": [
                "Overflowing rubbish attracts flies, rats and bad smell.",
                "These can spread germs and make the school unhealthy."
              ],
              "answer": "It can attract pests and spread disease."
            },
            "tryThis": {
              "question": "A good sanitation action is to:",
              "choices": [
                "throw rubbish anywhere",
                "leave latrines dirty",
                "keep stagnant water",
                "empty or manage rubbish safely"
              ],
              "correct": 3,
              "explanation": "Safe waste management improves sanitation."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Sanitation means:",
        "choices": [
          "keeping surroundings clean",
          "eating only meat",
          "measuring time",
          "drawing triangles"
        ],
        "correct": 0,
        "why": "Sanitation is environmental cleanliness."
      },
      {
        "q": "Stagnant water may breed:",
        "choices": [
          "books",
          "mosquitoes",
          "teeth",
          "flowers only"
        ],
        "correct": 1,
        "why": "Mosquitoes breed in stagnant water."
      },
      {
        "q": "Rubbish should be put in:",
        "choices": [
          "a water pot",
          "the classroom floor",
          "a dustbin or rubbish pit",
          "a plate"
        ],
        "correct": 2,
        "why": "Safe disposal reduces pests."
      },
      {
        "q": "After using a latrine, we should:",
        "choices": [
          "eat immediately with dirty hands",
          "touch food",
          "leave the door open",
          "wash hands"
        ],
        "correct": 3,
        "why": "Handwashing prevents germs."
      },
      {
        "q": "Dirty surroundings attract:",
        "choices": [
          "flies and rats",
          "clean air only",
          "more books",
          "good water"
        ],
        "correct": 0,
        "why": "Flies and rats are attracted to dirt."
      },
      {
        "q": "Drinking water should be stored:",
        "choices": [
          "open and dirty",
          "covered and clean",
          "near rubbish",
          "in a broken container"
        ],
        "correct": 1,
        "why": "Covered clean storage protects water."
      }
    ]
  },
  {
    "id": "p4-our-food",
    "themeId": "p4-science-human-body",
    "themeName": "Human Body",
    "title": "Our Food",
    "estMinutes": 32,
    "status": "published",
    "reviewStatus": "beta",
    "upperPrimaryLessons": P4_OUR_FOOD_V4,
    "useOnlyV4Lessons": true,
    "note": {
      "intro": "P4 Science beta: built from the NCDC Primary Four Integrated Science Syllabus, April 2009; human science/health review still required before premium-final release. Our Food helps P4 learners observe, care for health and environment, and explain everyday science clearly.",
      "learningObjectives": [
        "Name food types.",
        "Explain a balanced diet.",
        "Describe food hygiene.",
        "State uses of food."
      ],
      "whatYouNeedToKnow": [
        "Food gives the body energy, helps growth and protects against disease.",
        "Energy-giving foods include posho, rice, cassava and sweet potatoes.",
        "Body-building foods include beans, fish, eggs, milk and meat.",
        "Protective foods include fruits and vegetables.",
        "A balanced diet contains energy-giving, body-building and protective foods."
      ],
      "worked": {
        "problem": "Why is a meal of posho, beans and greens better than posho alone?",
        "steps": [
          "Posho gives energy.",
          "Beans help body growth and repair.",
          "Greens help protect the body."
        ],
        "answer": "It is more balanced because it has energy-giving, body-building and protective foods."
      },
      "commonMistakes": [
        "Eating only one type of food every day.",
        "Keeping food uncovered where flies can land on it.",
        "Not washing fruits before eating.",
        "Calling sweets a balanced diet."
      ],
      "recap": [
        "Eat a variety of foods.",
        "Keep food clean and covered.",
        "Balanced meals help the body grow and stay healthy."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-food-types",
        "title": "1. Food types and hygiene",
        "modules": [
          {
            "moduleId": "p4-balanced-diet",
            "title": "Balanced diet",
            "bigIdea": "The body needs different food groups to work well.",
            "learnIt": [
              "Energy-giving foods help us work and play.",
              "Body-building foods help growth and repair.",
              "Protective foods help the body fight disease.",
              "Food should be washed, cooked well when needed and covered."
            ],
            "workedExample": {
              "question": "Classify beans by food group.",
              "steps": [
                "Beans help build and repair the body.",
                "They are rich in proteins."
              ],
              "answer": "Beans are body-building food."
            },
            "tryThis": {
              "question": "Which is protective food?",
              "choices": [
                "posho",
                "meat",
                "orange",
                "sugar"
              ],
              "correct": 2,
              "explanation": "Fruits such as oranges are protective foods."
            },
            "imageUrl": "/images/science/p4-balanced-diet.svg",
            "imageCaption": "Balanced diet and food hygiene summary."
          }
        ]
      },
      {
        "subtopicId": "p4-our-food-application",
        "title": "2. Planning a balanced meal",
        "modules": [
          {
            "moduleId": "p4-our-food-application-module",
            "title": "Healthy food choices",
            "bigIdea": "A balanced meal combines food groups in a way the body can use.",
            "learnIt": [
              "A meal of only one food group is usually not balanced.",
              "Add body-building and protective foods to energy-giving foods.",
              "Food hygiene matters: wash, cook and cover food properly."
            ],
            "workedExample": {
              "question": "Improve this meal: posho only.",
              "steps": [
                "Posho mainly gives energy.",
                "Add beans for body-building food.",
                "Add greens or fruit for protective food."
              ],
              "answer": "Add beans and vegetables or fruit to make it more balanced."
            },
            "tryThis": {
              "question": "Which meal is more balanced?",
              "choices": [
                "sweets only",
                "cassava only",
                "soda only",
                "posho, beans and greens"
              ],
              "correct": 3,
              "explanation": "It has energy, body-building and protective foods."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Food gives the body:",
        "choices": [
          "energy and growth materials",
          "only dirt",
          "rain",
          "vectors"
        ],
        "correct": 0,
        "why": "Food supports life."
      },
      {
        "q": "Beans are mainly:",
        "choices": [
          "weather symbols",
          "body-building foods",
          "vectors",
          "teeth"
        ],
        "correct": 1,
        "why": "Beans have proteins."
      },
      {
        "q": "Fruits and vegetables are:",
        "choices": [
          "only energy foods",
          "poisons",
          "protective foods",
          "waste"
        ],
        "correct": 2,
        "why": "They protect the body."
      },
      {
        "q": "A balanced diet has:",
        "choices": [
          "only sweets",
          "only water",
          "only salt",
          "different food groups"
        ],
        "correct": 3,
        "why": "Balanced means varied and useful."
      },
      {
        "q": "Food should be covered to keep away:",
        "choices": [
          "flies",
          "books",
          "sunlight always",
          "teachers"
        ],
        "correct": 0,
        "why": "Flies can carry germs."
      },
      {
        "q": "Before eating fruits, we should:",
        "choices": [
          "throw them in dust",
          "wash them",
          "step on them",
          "leave them near flies"
        ],
        "correct": 1,
        "why": "Washing removes dirt and germs."
      }
    ]
  },
  {
    "id": "p4-human-body-organs",
    "themeId": "p4-science-human-body",
    "themeName": "Human Body",
    "title": "Human Body Organs",
    "estMinutes": 32,
    "status": "published",
    "reviewStatus": "beta",
    "upperPrimaryLessons": P4_HUMAN_BODY_ORGANS_V4,
    "useOnlyV4Lessons": true,
    "note": {
      "intro": "P4 Science beta: built from the NCDC Primary Four Integrated Science Syllabus, April 2009; human science/health review still required before premium-final release. Human Body Organs helps P4 learners observe, care for health and environment, and explain everyday science clearly.",
      "learningObjectives": [
        "Name major body organs.",
        "State functions of organs.",
        "Describe ways of caring for body organs.",
        "Introduce body systems simply."
      ],
      "whatYouNeedToKnow": [
        "Organs are body parts that do special work.",
        "The heart pumps blood around the body.",
        "The lungs help us breathe.",
        "The stomach helps digest food.",
        "The brain controls body activities.",
        "Good food, exercise, rest and hygiene help protect body organs."
      ],
      "worked": {
        "problem": "What is the function of the lungs?",
        "steps": [
          "Lungs are found in the chest.",
          "They help the body take in oxygen and remove carbon dioxide."
        ],
        "answer": "The lungs help us breathe."
      },
      "commonMistakes": [
        "Calling all body parts organs without knowing their work.",
        "Thinking the heart stores food.",
        "Forgetting that exercise and rest help body organs.",
        "Using unsafe substances that can harm organs."
      ],
      "recap": [
        "Each organ has a job.",
        "Care for organs by healthy habits.",
        "Body organs work together."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-major-organs",
        "title": "1. Major body organs",
        "modules": [
          {
            "moduleId": "p4-body-organs-functions",
            "title": "Organs and functions",
            "bigIdea": "The body works because organs do different jobs together.",
            "learnIt": [
              "The brain controls thinking, movement and many body activities.",
              "The heart pumps blood.",
              "The lungs help breathing.",
              "The stomach helps digest food."
            ],
            "workedExample": {
              "question": "Which organ pumps blood?",
              "steps": [
                "Blood is moved around the body by pumping.",
                "The heart is the pumping organ."
              ],
              "answer": "The heart pumps blood."
            },
            "tryThis": {
              "question": "Which organ controls thinking?",
              "choices": [
                "stomach",
                "tooth",
                "brain",
                "skin only"
              ],
              "correct": 2,
              "explanation": "The brain controls thinking and body activities."
            },
            "imageUrl": "/images/science/p4-body-organs.svg",
            "imageCaption": "Major body organs and functions."
          }
        ]
      },
      {
        "subtopicId": "p4-human-body-organs-application",
        "title": "2. Protecting body organs",
        "modules": [
          {
            "moduleId": "p4-human-body-organs-application-module",
            "title": "Healthy habits for organs",
            "bigIdea": "Body organs work best when learners practise safe and healthy habits.",
            "learnIt": [
              "Exercise helps the heart and lungs.",
              "Balanced food helps the stomach, blood and body growth.",
              "Avoid smoke, unknown medicines and poisonous substances because they can harm organs."
            ],
            "workedExample": {
              "question": "Why is cigarette smoke bad for the lungs?",
              "steps": [
                "Lungs help breathing.",
                "Smoke can damage lungs and make breathing difficult."
              ],
              "answer": "Smoke can harm the lungs and breathing."
            },
            "tryThis": {
              "question": "Which habit protects body organs?",
              "choices": [
                "taking unknown tablets",
                "breathing smoke",
                "never resting",
                "eating balanced food"
              ],
              "correct": 3,
              "explanation": "Balanced food supports body organs."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "The heart pumps:",
        "choices": [
          "blood",
          "air only",
          "food only",
          "urine only"
        ],
        "correct": 0,
        "why": "The heart pumps blood."
      },
      {
        "q": "The lungs help us:",
        "choices": [
          "chew",
          "breathe",
          "think only",
          "walk only"
        ],
        "correct": 1,
        "why": "Lungs are for breathing."
      },
      {
        "q": "The brain controls:",
        "choices": [
          "digestion only",
          "tooth decay",
          "body activities",
          "rain"
        ],
        "correct": 2,
        "why": "The brain controls body activities."
      },
      {
        "q": "The stomach helps to:",
        "choices": [
          "pump blood",
          "make rain",
          "measure length",
          "digest food"
        ],
        "correct": 3,
        "why": "The stomach digests food."
      },
      {
        "q": "We care for organs by:",
        "choices": [
          "eating well and exercising",
          "taking poison",
          "not resting",
          "eating dirty food"
        ],
        "correct": 0,
        "why": "Healthy habits protect organs."
      },
      {
        "q": "An organ is:",
        "choices": [
          "a type of weather",
          "a body part with a special job",
          "a crop disease",
          "a graph"
        ],
        "correct": 1,
        "why": "Organs do special work."
      }
    ]
  },
  {
    "id": "p4-teeth",
    "themeId": "p4-science-human-body",
    "themeName": "Human Body",
    "title": "The Teeth",
    "estMinutes": 32,
    "status": "published",
    "reviewStatus": "beta",
    "upperPrimaryLessons": P4_TEETH_V4,
    "useOnlyV4Lessons": true,
    "note": {
      "intro": "P4 Science beta: built from the NCDC Primary Four Integrated Science Syllabus, April 2009; human science/health review still required before premium-final release. The Teeth helps P4 learners observe, care for health and environment, and explain everyday science clearly.",
      "learningObjectives": [
        "Name types of teeth.",
        "State functions of different teeth.",
        "Describe tooth care.",
        "Explain ways of preventing tooth decay."
      ],
      "whatYouNeedToKnow": [
        "Teeth help us bite, tear, crush and grind food.",
        "Incisors cut food.",
        "Canines tear food.",
        "Premolars and molars crush and grind food.",
        "Brush teeth regularly and avoid too many sugary foods.",
        "Visit a dentist or health worker when teeth hurt."
      ],
      "worked": {
        "problem": "Which teeth are used for tearing food?",
        "steps": [
          "Different teeth have different shapes.",
          "Canines are pointed and help tear food."
        ],
        "answer": "Canines tear food."
      },
      "commonMistakes": [
        "Using the same function for all teeth.",
        "Forgetting to brush before sleep.",
        "Eating many sweets and not cleaning teeth.",
        "Using teeth to open bottles or crack hard objects."
      ],
      "recap": [
        "Know tooth types.",
        "Brush teeth properly.",
        "Reduce sugar and seek help for tooth pain."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-types-of-teeth",
        "title": "1. Types and care of teeth",
        "modules": [
          {
            "moduleId": "p4-teeth-functions-care",
            "title": "Teeth functions and tooth care",
            "bigIdea": "Healthy teeth help us eat and speak clearly.",
            "learnIt": [
              "Incisors cut food at the front of the mouth.",
              "Canines tear food.",
              "Premolars and molars grind food.",
              "Brush teeth with a toothbrush and toothpaste or safe local method recommended by a health worker."
            ],
            "workedExample": {
              "question": "Why should we brush teeth before sleeping?",
              "steps": [
                "Food particles left on teeth can feed germs.",
                "Germs can cause tooth decay."
              ],
              "answer": "Brushing removes food particles and helps prevent tooth decay."
            },
            "tryThis": {
              "question": "Which teeth grind food?",
              "choices": [
                "canines",
                "incisors only",
                "molars",
                "tongue"
              ],
              "correct": 2,
              "explanation": "Molars grind food."
            },
            "imageUrl": "/images/science/teeth-types-functions.svg",
            "imageCaption": "Types of teeth and their functions."
          }
        ]
      },
      {
        "subtopicId": "p4-teeth-application",
        "title": "2. Preventing tooth decay",
        "modules": [
          {
            "moduleId": "p4-teeth-application-module",
            "title": "Daily tooth care",
            "bigIdea": "Tooth care is daily work, not only something done when teeth hurt.",
            "learnIt": [
              "Brush teeth after meals or at least morning and night where possible.",
              "Reduce sugary snacks and rinse/clean teeth after eating.",
              "Do not use teeth to crack hard objects or open bottles."
            ],
            "workedExample": {
              "question": "A learner often eats sweets and sleeps without brushing. What may happen?",
              "steps": [
                "Sugar and food particles can remain on teeth.",
                "Germs use them and may cause tooth decay."
              ],
              "answer": "The learner may get tooth decay."
            },
            "tryThis": {
              "question": "Which protects teeth?",
              "choices": [
                "opening bottles with teeth",
                "eating sweets all day",
                "never cleaning teeth",
                "brushing regularly"
              ],
              "correct": 3,
              "explanation": "Regular brushing protects teeth."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Incisors are used for:",
        "choices": [
          "cutting food",
          "pumping blood",
          "breathing",
          "seeing"
        ],
        "correct": 0,
        "why": "Incisors cut food."
      },
      {
        "q": "Canines are used for:",
        "choices": [
          "grinding only",
          "tearing food",
          "making saliva",
          "hearing"
        ],
        "correct": 1,
        "why": "Canines tear food."
      },
      {
        "q": "Molars help to:",
        "choices": [
          "cut paper",
          "pump blood",
          "grind food",
          "make rain"
        ],
        "correct": 2,
        "why": "Molars grind food."
      },
      {
        "q": "Too many sweets may cause:",
        "choices": [
          "stronger teeth always",
          "rain",
          "clean water",
          "tooth decay"
        ],
        "correct": 3,
        "why": "Sugar can contribute to tooth decay."
      },
      {
        "q": "We should brush teeth:",
        "choices": [
          "regularly",
          "never",
          "only once a year",
          "with soil always"
        ],
        "correct": 0,
        "why": "Regular brushing helps teeth."
      },
      {
        "q": "A person who treats teeth is a:",
        "choices": [
          "driver",
          "dentist",
          "tailor",
          "farmer"
        ],
        "correct": 1,
        "why": "Dentists treat teeth."
      }
    ]
  },
  {
    "id": "p4-communicable-intestinal-diseases-worms",
    "themeId": "p4-science-human-health",
    "themeName": "Human Health",
    "title": "Communicable Intestinal Diseases and Worm Infestation",
    "estMinutes": 34,
    "status": "published",
    "reviewStatus": "beta",
    "upperPrimaryLessons": P4_INTESTINAL_DISEASES_WORMS_V4,
    "useOnlyV4Lessons": true,
    "note": {
      "intro": "P4 Science beta: built from the NCDC Primary Four Integrated Science Syllabus, April 2009; human science/health review still required before premium-final release. Communicable Intestinal Diseases and Worm Infestation helps P4 learners observe, care for health and environment, and explain everyday science clearly.",
      "learningObjectives": [
        "Explain communicable diseases simply.",
        "Name intestinal diseases and worm infestation risks.",
        "Describe signs that require adult/health-worker help.",
        "State prevention through hygiene, safe water and latrine use."
      ],
      "whatYouNeedToKnow": [
        "A communicable disease can spread from one person to another.",
        "Intestinal diseases affect the stomach and intestines and may cause diarrhoea or stomach pain.",
        "Worm infestation happens when worms live inside the body, often through contaminated soil, food or water.",
        "Prevention includes washing hands, using latrines, wearing shoes, drinking safe water and eating clean food.",
        "Sick learners should tell an adult and get help from a health worker."
      ],
      "worked": {
        "problem": "Why should learners wear shoes when going to the latrine or garden?",
        "steps": [
          "Some worms can enter through bare feet in contaminated soil.",
          "Shoes protect feet from germs, worms and injuries."
        ],
        "answer": "Shoes help prevent worm infestation and injuries."
      },
      "commonMistakes": [
        "Hiding sickness instead of telling an adult.",
        "Drinking unsafe water.",
        "Walking barefoot in dirty places.",
        "Thinking worms only affect children who eat too much."
      ],
      "recap": [
        "Communicable means can spread.",
        "Use latrines and wash hands.",
        "Seek adult/health-worker help when sick."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-intestinal-diseases-worms",
        "title": "1. Intestinal diseases and worm prevention",
        "modules": [
          {
            "moduleId": "p4-worms-hygiene",
            "title": "Preventing intestinal disease",
            "bigIdea": "Clean habits break the path of germs and worms into the body.",
            "learnIt": [
              "Wash hands after using the latrine and before eating.",
              "Drink boiled or treated safe water.",
              "Wear shoes in dirty or risky places.",
              "Use latrines properly and keep food covered."
            ],
            "workedExample": {
              "question": "A learner has stomach pain and diarrhoea. What should they do?",
              "steps": [
                "The learner should not hide sickness.",
                "Tell a parent, teacher or trusted adult.",
                "A health worker can advise treatment."
              ],
              "answer": "Tell an adult and get health-worker help."
            },
            "tryThis": {
              "question": "Which habit prevents worms?",
              "choices": [
                "walking barefoot in dirty soil",
                "eating unwashed fruit",
                "wearing shoes",
                "not washing hands"
              ],
              "correct": 2,
              "explanation": "Shoes protect feet from some worm infections and injuries."
            },
            "imageUrl": "/images/science/p4-worms-disease-prevention.svg",
            "imageCaption": "Ways to prevent intestinal diseases and worms."
          }
        ]
      },
      {
        "subtopicId": "p4-communicable-intestinal-diseases-worms-application",
        "title": "2. Breaking the disease path",
        "modules": [
          {
            "moduleId": "p4-communicable-intestinal-diseases-worms-application-module",
            "title": "Stopping germs and worms",
            "bigIdea": "Prevention works by stopping germs and worms from entering the body.",
            "learnIt": [
              "Use latrines so faeces do not contaminate soil and water.",
              "Wash hands and food before eating.",
              "Wear shoes in risky dirty places and drink safe water."
            ],
            "workedExample": {
              "question": "A child eats mangoes picked from the ground without washing them. What risk is there?",
              "steps": [
                "The mangoes may have dirt or germs on them.",
                "Eating them unwashed may cause stomach illness."
              ],
              "answer": "The child may swallow germs and get sick."
            },
            "tryThis": {
              "question": "Which breaks the disease path?",
              "choices": [
                "eating with dirty hands",
                "drinking unsafe water",
                "walking barefoot in dirty soil",
                "washing fruits before eating"
              ],
              "correct": 3,
              "explanation": "Washing fruits removes dirt and many germs."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Communicable disease can:",
        "choices": [
          "spread from person to person",
          "turn into a graph",
          "measure time",
          "be a tooth type"
        ],
        "correct": 0,
        "why": "Communicable means it can spread."
      },
      {
        "q": "One way to prevent intestinal disease is:",
        "choices": [
          "eating dirty food",
          "washing hands",
          "drinking unsafe water",
          "leaving food open"
        ],
        "correct": 1,
        "why": "Handwashing removes germs."
      },
      {
        "q": "Safe drinking water should be:",
        "choices": [
          "dirty",
          "from any puddle",
          "boiled or treated",
          "stored open near animals"
        ],
        "correct": 2,
        "why": "Safe water reduces disease."
      },
      {
        "q": "Worm infestation may be prevented by:",
        "choices": [
          "walking barefoot everywhere",
          "not using latrines",
          "eating soil",
          "wearing shoes"
        ],
        "correct": 3,
        "why": "Shoes protect feet."
      },
      {
        "q": "If a learner is sick, they should:",
        "choices": [
          "tell an adult",
          "hide it",
          "share medicine secretly",
          "ignore it always"
        ],
        "correct": 0,
        "why": "A trusted adult can help."
      },
      {
        "q": "A latrine helps to:",
        "choices": [
          "store food",
          "dispose of faeces safely",
          "wash clothes only",
          "grow flowers inside"
        ],
        "correct": 1,
        "why": "Latrines improve sanitation."
      }
    ]
  },
  {
    "id": "p4-vectors-diseases",
    "themeId": "p4-science-human-health",
    "themeName": "Human Health",
    "title": "Vectors and Diseases",
    "estMinutes": 32,
    "status": "published",
    "reviewStatus": "beta",
    "upperPrimaryLessons": P4_VECTORS_DISEASES_V4,
    "useOnlyV4Lessons": true,
    "note": {
      "intro": "P4 Science beta: built from the NCDC Primary Four Integrated Science Syllabus, April 2009; human science/health review still required before premium-final release. Vectors and Diseases helps P4 learners observe, care for health and environment, and explain everyday science clearly.",
      "learningObjectives": [
        "Define vector simply.",
        "Name common vectors.",
        "Match vectors to diseases they may spread.",
        "Describe vector control and personal protection."
      ],
      "whatYouNeedToKnow": [
        "A vector is a living thing that carries disease-causing germs from one host to another.",
        "Common vectors include mosquitoes, houseflies, rats, fleas, lice and ticks.",
        "Mosquitoes can spread malaria.",
        "Houseflies can carry germs to food.",
        "Control vectors by destroying breeding places, covering food, using mosquito nets and keeping surroundings clean."
      ],
      "worked": {
        "problem": "Why should stagnant water be removed near homes?",
        "steps": [
          "Mosquitoes breed in stagnant water.",
          "Mosquitoes can spread malaria.",
          "Removing stagnant water reduces mosquito breeding."
        ],
        "answer": "It reduces mosquitoes and helps prevent malaria."
      },
      "commonMistakes": [
        "Calling every animal a vector.",
        "Killing one mosquito but leaving breeding water.",
        "Leaving food uncovered where flies can land.",
        "Forgetting that clean surroundings reduce vectors."
      ],
      "recap": [
        "Vectors spread germs.",
        "Destroy breeding places.",
        "Protect food and sleeping places."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-vector-control",
        "title": "1. Common vectors and control",
        "modules": [
          {
            "moduleId": "p4-vectors-control",
            "title": "Stopping vectors",
            "bigIdea": "Vector control protects families and communities from disease.",
            "learnIt": [
              "Drain stagnant water to control mosquitoes.",
              "Cover food and keep latrines clean to reduce flies.",
              "Store rubbish properly to reduce rats.",
              "Sleep under mosquito nets where needed."
            ],
            "workedExample": {
              "question": "A house has many flies around uncovered food. What should be done?",
              "steps": [
                "Flies can carry germs to food.",
                "Cover the food and clean the surroundings."
              ],
              "answer": "Cover food and keep the place clean."
            },
            "tryThis": {
              "question": "Which vector spreads malaria?",
              "choices": [
                "goat",
                "hen",
                "mosquito",
                "earthworm"
              ],
              "correct": 2,
              "explanation": "Mosquitoes can spread malaria."
            },
            "imageUrl": "/images/science/vectors-disease-control.svg",
            "imageCaption": "Common vectors and ways to control them."
          }
        ]
      },
      {
        "subtopicId": "p4-vectors-diseases-application",
        "title": "2. Vector-control choices",
        "modules": [
          {
            "moduleId": "p4-vectors-diseases-application-module",
            "title": "Stopping vectors before disease spreads",
            "bigIdea": "The best vector control removes the places vectors live, feed or breed.",
            "learnIt": [
              "Mosquito control includes draining stagnant water and sleeping under nets where needed.",
              "Fly control includes covering food and keeping latrines clean.",
              "Rat control includes proper storage and waste management."
            ],
            "workedExample": {
              "question": "A home has many mosquitoes because tins collect rainwater. What should be done?",
              "steps": [
                "Mosquitoes breed in stagnant water.",
                "Empty, cover or remove tins that collect water."
              ],
              "answer": "Remove or empty stagnant water containers."
            },
            "tryThis": {
              "question": "Which controls flies?",
              "choices": [
                "leaving food open",
                "keeping latrines dirty",
                "dumping rubbish everywhere",
                "covering food"
              ],
              "correct": 3,
              "explanation": "Covered food reduces contamination by flies."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "A vector:",
        "choices": [
          "carries disease germs",
          "makes food in leaves",
          "measures money",
          "is a tooth"
        ],
        "correct": 0,
        "why": "Vectors carry germs."
      },
      {
        "q": "Mosquitoes may spread:",
        "choices": [
          "tooth decay",
          "malaria",
          "profit",
          "weather"
        ],
        "correct": 1,
        "why": "Mosquitoes can spread malaria."
      },
      {
        "q": "Flies can contaminate:",
        "choices": [
          "chalk only",
          "rulers only",
          "food",
          "books only"
        ],
        "correct": 2,
        "why": "Flies can land on food."
      },
      {
        "q": "Stagnant water should be:",
        "choices": [
          "kept open",
          "used for rubbish",
          "covered with food",
          "drained"
        ],
        "correct": 3,
        "why": "Draining reduces mosquito breeding."
      },
      {
        "q": "Sleeping under a mosquito net helps prevent:",
        "choices": [
          "mosquito bites",
          "toothache",
          "broken bones",
          "reading"
        ],
        "correct": 0,
        "why": "Nets reduce mosquito bites."
      },
      {
        "q": "Clean surroundings help:",
        "choices": [
          "increase flies",
          "reduce vectors",
          "store germs",
          "breed rats"
        ],
        "correct": 1,
        "why": "Cleanliness reduces vectors."
      }
    ]
  },
  {
    "id": "p4-accidents-poisoning-first-aid",
    "themeId": "p4-science-human-health",
    "themeName": "Human Health",
    "title": "Accidents, Poisoning and First Aid",
    "estMinutes": 34,
    "status": "published",
    "reviewStatus": "beta",
    "upperPrimaryLessons": P4_ACCIDENTS_FIRST_AID_V4,
    "useOnlyV4Lessons": true,
    "note": {
      "intro": "P4 Science beta: built from the NCDC Primary Four Integrated Science Syllabus, April 2009; human science/health review still required before premium-final release. Accidents, Poisoning and First Aid helps P4 learners observe, care for health and environment, and explain everyday science clearly.",
      "learningObjectives": [
        "Name common accidents at home and school.",
        "Identify possible poisons and danger labels.",
        "State basic first-aid actions.",
        "Explain safety rules to prevent accidents and poisoning."
      ],
      "whatYouNeedToKnow": [
        "An accident is an unexpected event that may cause injury.",
        "Common accidents include cuts, burns, falls and road accidents.",
        "Poisoning happens when harmful substances enter the body.",
        "First aid is the first help given to an injured or sick person before full medical help.",
        "Children should call an adult quickly during serious injury or suspected poisoning."
      ],
      "worked": {
        "problem": "A learner cuts a finger while sharpening a pencil. What first help is safe?",
        "steps": [
          "Tell an adult or teacher.",
          "Wash hands or use clean materials.",
          "Press the cut gently with clean cloth to stop bleeding."
        ],
        "answer": "Tell an adult and press the cut with clean cloth; seek more help if bleeding continues."
      },
      "commonMistakes": [
        "Giving unknown medicine to a poisoned person.",
        "Touching blood with bare hands when clean protection is available.",
        "Hiding accidents from adults.",
        "Playing with paraffin, pesticides or tablets."
      ],
      "recap": [
        "Prevent accidents by following safety rules.",
        "Call an adult in emergencies.",
        "First aid is first help, not full treatment."
      ]
    },
    "subtopics": [
      {
        "subtopicId": "p4-safety-first-aid",
        "title": "1. Safety, poisoning and first aid",
        "modules": [
          {
            "moduleId": "p4-first-aid-safety",
            "title": "First help and safety rules",
            "bigIdea": "Safe first aid protects the injured person and the helper.",
            "learnIt": [
              "Keep sharp objects, medicines, paraffin and pesticides away from children.",
              "In suspected poisoning, call an adult and health worker immediately.",
              "For minor cuts, use clean cloth to control bleeding and seek help.",
              "For burns, cool the burn with clean cool running water and tell an adult."
            ],
            "workedExample": {
              "question": "A child drinks an unknown chemical. What should be done first?",
              "steps": [
                "This may be poisoning.",
                "Do not guess treatment or force vomiting.",
                "Call an adult and seek health-worker help immediately."
              ],
              "answer": "Call an adult and get urgent medical help."
            },
            "tryThis": {
              "question": "First aid means:",
              "choices": [
                "playing with tablets",
                "hiding injuries",
                "first help before full medical help",
                "full surgery"
              ],
              "correct": 2,
              "explanation": "First aid is immediate first help."
            },
            "imageUrl": "/images/science/p4-first-aid-safety.svg",
            "imageCaption": "Safe first aid and poisoning response reminders."
          }
        ]
      },
      {
        "subtopicId": "p4-accidents-poisoning-first-aid-application",
        "title": "2. Emergency choices",
        "modules": [
          {
            "moduleId": "p4-accidents-poisoning-first-aid-application-module",
            "title": "Safe action during accidents",
            "bigIdea": "First aid must be safe for both the injured person and the helper.",
            "learnIt": [
              "Call an adult quickly when an injury or poisoning is serious.",
              "Do not give unknown medicine or force vomiting after poisoning.",
              "Keep dangerous items such as paraffin, pesticides, tablets and sharp tools away from children."
            ],
            "workedExample": {
              "question": "A child swallows unknown tablets. What should be done immediately?",
              "steps": [
                "This is possible poisoning.",
                "Do not guess treatment.",
                "Call an adult and seek urgent health-worker help."
              ],
              "answer": "Call an adult and get urgent medical help."
            },
            "tryThis": {
              "question": "Which first action is safest for poisoning?",
              "choices": [
                "force vomiting immediately",
                "give more tablets",
                "hide the problem",
                "call an adult and health worker"
              ],
              "correct": 3,
              "explanation": "Poisoning needs urgent adult/health-worker help."
            }
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "An accident is:",
        "choices": [
          "an unexpected event causing injury",
          "a food group",
          "a weather symbol",
          "a plant part"
        ],
        "correct": 0,
        "why": "Accidents may cause injury."
      },
      {
        "q": "First aid is:",
        "choices": [
          "a game",
          "first help before full treatment",
          "a graph",
          "a type of crop"
        ],
        "correct": 1,
        "why": "First aid is first help."
      },
      {
        "q": "Medicines should be kept:",
        "choices": [
          "in sweets tins for play",
          "on the floor",
          "away from children",
          "in dirty water"
        ],
        "correct": 2,
        "why": "Medicines can poison if misused."
      },
      {
        "q": "For suspected poisoning, a child should:",
        "choices": [
          "hide",
          "drink more unknown chemicals",
          "sleep without telling anyone",
          "call an adult immediately"
        ],
        "correct": 3,
        "why": "Poisoning needs urgent adult help."
      },
      {
        "q": "A sharp knife can cause:",
        "choices": [
          "cuts",
          "malaria",
          "tooth decay",
          "clouds"
        ],
        "correct": 0,
        "why": "Sharp objects can cut."
      },
      {
        "q": "To prevent accidents, learners should:",
        "choices": [
          "play with fire",
          "follow safety rules",
          "run across roads",
          "touch electric wires"
        ],
        "correct": 1,
        "why": "Safety rules prevent accidents."
      }
    ]
  }
];

const P4_SCIENCE_TERMS = {
  "p4-plant-life": "Term I" as const,
  "p4-growing-crops": "Term I" as const,
  "p4-animal-life": "Term III" as const,
  "p4-weather-changes": "Term I" as const,
  "p4-personal-hygiene": "Term I" as const,
  "p4-sanitation": "Term II" as const,
  "p4-communicable-intestinal-diseases-worms": "Term III" as const,
  "p4-vectors-diseases": "Term III" as const,
  "p4-accidents-poisoning-first-aid": "Term III" as const,
  "p4-our-food": "Term II" as const,
  "p4-human-body-organs": "Term II" as const,
  "p4-teeth": "Term II" as const
};

export const P4_SCIENCE_TOPICS: Topic[] = addUpperPrimaryScienceV4(P4_SCIENCE_TOPIC_DATA, "P4", P4_SCIENCE_TERMS);

export function getP4ScienceTopic(id: string): Topic | undefined {
  return P4_SCIENCE_TOPICS.find((topic) => topic.id === id);
}
