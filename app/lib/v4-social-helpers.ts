import type { UpperPrimaryLesson } from "@/lib/content-blocks";
import type { Subtopic, SubtopicModule, Topic } from "@/lib/topics";

type UpperClassLevel = "P4" | "P5" | "P6" | "P7";
type TermName = "Term I" | "Term II" | "Term III";

const SOCIAL_MEANINGS: Record<string, string> = {
  district: "an administrative area in Uganda with leaders, services, people and important places",
  map: "a drawing of a place as seen from above",
  compass: "a tool or sign that shows directions such as north, east, south and west",
  key: "the part of a map that explains symbols",
  scale: "the part of a map that helps estimate real distance",
  boundary: "a line that separates one area from another",
  neighbour: "a place or country next to another place or country",
  landlocked: "having no coastline on a sea or ocean",
  physical: "natural features on the earth's surface such as mountains, rivers, lakes, valleys and plains",
  vegetation: "plant cover that grows in an area",
  climate: "the usual weather conditions of a place over a long period",
  weather: "the condition of the atmosphere at a particular time",
  resource: "something useful found in the environment that people use",
  culture: "the way of life of a group of people, including language, customs, food, dress, music and beliefs",
  leader: "a person who guides or serves others",
  government: "the group or system that leads and makes decisions for a country or area",
  independence: "freedom of a country to govern itself",
  population: "the number of people living in an area",
  settlement: "a place where people live",
  migration: "movement of people from one place to another to live or work",
  nationalism: "love for one's country and the desire for self-rule",
  citizen: "a legal member of a country with rights and responsibilities",
  democracy: "a system where people take part in choosing leaders or making decisions",
};

function stripNumberPrefix(title: string): string {
  return title.replace(/^\d+\.\s*/, "").trim();
}

function cleanTerm(value: string): string {
  return value.replace(/[.,:;!?()]/g, "").replace(/\s+/g, " ").trim();
}

function meaningFor(term: string, topicTitle: string): string {
  const lower = term.toLowerCase();
  const key = Object.keys(SOCIAL_MEANINGS).find((word) => lower.includes(word));
  if (key) return SOCIAL_MEANINGS[key];
  return `a useful Social Studies word or phrase for ${topicTitle.toLowerCase()}`;
}

function vocabularyFrom(topic: Topic, subtopic: Subtopic, modules: SubtopicModule[]) {
  const raw = [
    topic.title,
    stripNumberPrefix(subtopic.title),
    ...modules.map((module) => module.title),
    ...modules.flatMap((module) => module.learnIt.flatMap((point) => point.split(/,|;|\band\b|\bor\b/gi).slice(0, 2))),
  ];

  const seen = new Set<string>();
  return raw
    .map(cleanTerm)
    .filter((term) => term.length >= 3 && term.length <= 42)
    .filter((term) => {
      const key = term.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .slice(0, 8)
    .map((word) => ({ word, meaning: meaningFor(word, topic.title) }));
}

function socialDefinition(title: string, topic: Topic, module?: SubtopicModule): string {
  const direct = meaningFor(title, topic.title);
  if (!direct.startsWith("a useful")) return direct;
  const idea = module?.bigIdea ?? module?.learnIt?.[0];
  if (idea) return idea;
  return `is an important Social Studies idea that helps learners understand people, places, resources, leaders and how communities live together.`;
}

function collectLearnIt(modules: SubtopicModule[]): string[] {
  return modules.flatMap((module) => module.learnIt ?? []).filter(Boolean);
}

function moduleToCategory(module: SubtopicModule) {
  return {
    name: module.title,
    definition: module.bigIdea,
    examples: module.learnIt.slice(0, 4).length > 0 ? module.learnIt.slice(0, 4) : [module.bigIdea],
    notes: module.learnIt.slice(4, 6),
  };
}

function buildExerciseQuestions(topic: Topic, modules: SubtopicModule[]) {
  const tries = modules
    .map((module) => module.tryThis)
    .filter(Boolean)
    .slice(0, 4)
    .map((tryThis) => ({
      type: "multiple-choice" as const,
      prompt: tryThis!.question,
      choices: tryThis!.choices,
      answer: tryThis!.choices[tryThis!.correct] ?? tryThis!.choices[0],
    }));

  const quiz = topic.quiz.slice(0, Math.max(0, 6 - tries.length)).map((question) => ({
    type: "multiple-choice" as const,
    prompt: question.q,
    choices: question.choices,
    answer: question.choices[question.correct] ?? question.choices[0],
  }));

  return [
    { type: "short-answer" as const, prompt: `Define or explain ${topic.title}.` },
    { type: "short-answer" as const, prompt: `Give one local example connected to ${topic.title}.` },
    ...tries,
    ...quiz,
  ].slice(0, 8);
}

function imageBlock(topic: Topic, modules: SubtopicModule[]) {
  const imageModule = modules.find((module) => module.imageUrl);
  if (!imageModule?.imageUrl) return [];
  return [{
    kind: "diagram" as const,
    title: imageModule.title,
    imageUrl: imageModule.imageUrl,
    caption: imageModule.imageCaption ?? imageModule.title,
    labels: [topic.title, ...modules.map((module) => module.title).slice(0, 5)],
  }];
}

function socialContext(classLevel: UpperClassLevel): string {
  if (classLevel === "P4") return "your district";
  if (classLevel === "P5") return "Uganda";
  if (classLevel === "P6") return "East Africa";
  return "Africa and the wider world";
}

function storyFor(topic: Topic, subtopicTitle: string, classLevel: UpperClassLevel): string {
  const context = socialContext(classLevel);
  if (classLevel === "P4") {
    return `A P4 learner studies ${subtopicTitle.toLowerCase()} by starting from the home district. The learner names local examples, reads simple maps or pictures, and explains how people live and work together.`;
  }
  return `A ${classLevel} learner studies ${subtopicTitle.toLowerCase()} by using ${context} as the main example. The learner names places, people, events or leaders and explains them with evidence.`;
}

function buildLessonFromSubtopic(
  topic: Topic,
  subtopic: Subtopic,
  index: number,
  classLevel: UpperClassLevel,
  term: TermName,
): UpperPrimaryLesson {
  const title = stripNumberPrefix(subtopic.title);
  const modules = subtopic.modules;
  const first = modules[0];
  const learnIt = collectLearnIt(modules);
  const workedModule = modules.find((module) => module.workedExample);

  return {
    id: `${topic.id}-${subtopic.subtopicId}-v4`,
    classLevel,
    term,
    curriculumMode: "subject",
    subject: "Social Studies",
    topicTitle: topic.title,
    subTopicTitle: title,
    lessonTitle: title,
    blocks: [
      {
        kind: "vocabulary",
        title: "Key words",
        words: vocabularyFrom(topic, subtopic, modules),
      },
      {
        kind: "story",
        title: "Read and talk",
        text: storyFor(topic, title, classLevel),
        questions: [
          `What is this lesson about?`,
          `Name one local or Ugandan example connected to ${title}.`,
          `Why is this lesson important in Social Studies?`,
        ],
      },
      {
        kind: "definition",
        term: title,
        definition: socialDefinition(title, topic, first),
        simpleCheck: first?.tryThis?.explanation,
      },
      {
        kind: "categories",
        title: "Key ideas / groups",
        categories: modules.map(moduleToCategory),
      },
      {
        kind: "examples",
        title: "Examples and evidence",
        examples: learnIt.slice(0, 7).map((point, pointIndex) => ({
          name: `Example ${pointIndex + 1}`,
          explanation: point,
          localContext: `Use an example from ${socialContext(classLevel)} where possible.`,
        })),
      },
      {
        kind: "characteristics",
        title: "Facts to remember",
        points: learnIt.slice(0, 8),
      },
      ...imageBlock(topic, modules),
      ...(workedModule?.workedExample ? [{
        kind: "worked-example" as const,
        question: workedModule.workedExample.question,
        steps: workedModule.workedExample.steps,
        answer: workedModule.workedExample.answer,
      }] : []),
      {
        kind: "activity",
        title: "Map / community practice",
        instructions: [
          `Name one example connected to ${title}.`,
          `Connect it to ${socialContext(classLevel)}.`,
          "Draw a simple map, table, timeline or example box if it helps.",
          "Use respectful civic and cultural language.",
        ],
        safetyNote: "Social Studies examples should be respectful and should not mock any group, leader, culture, religion or community.",
      },
      {
        kind: "exercise",
        title: "Evaluation",
        questions: buildExerciseQuestions(topic, modules),
      },
    ],
  };
}

export function buildUpperPrimarySocialV4Lessons(
  topic: Topic,
  classLevel: UpperClassLevel,
  termMap: Record<string, TermName>,
): UpperPrimaryLesson[] {
  if (topic.useOnlyV4Lessons && topic.upperPrimaryLessons) return topic.upperPrimaryLessons;
  const term = termMap[topic.id] ?? "Term I";
  const generated = (topic.subtopics ?? []).map((subtopic, index) => buildLessonFromSubtopic(topic, subtopic, index, classLevel, term));
  return [...(topic.upperPrimaryLessons ?? []), ...generated];
}

export function addUpperPrimarySocialV4(
  topics: Topic[],
  classLevel: UpperClassLevel,
  termMap: Record<string, TermName>,
): Topic[] {
  return topics.map((topic) => ({
    ...topic,
    contentFormat: "upper-primary-v4" as const,
    upperPrimaryLessons: buildUpperPrimarySocialV4Lessons(topic, classLevel, termMap),
  }));
}
