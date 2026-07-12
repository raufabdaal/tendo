import type { UpperPrimaryLesson } from "@/lib/content-blocks";
import type { Subtopic, SubtopicModule, Topic } from "@/lib/topics";

type UpperClassLevel = "P4" | "P5" | "P6" | "P7";
type TermName = "Term I" | "Term II" | "Term III";

function stripNumberPrefix(title: string): string {
  return title.replace(/^\d+\.\s*/, "").trim();
}

function faithLabel(topic: Topic): "CRE" | "IRE" | "RE" {
  if (/ire/i.test(topic.themeId)) return "IRE";
  if (/cre/i.test(topic.themeId)) return "CRE";
  return "RE";
}

function cleanTerm(value: string): string {
  return value.replace(/[.,:;!?()]/g, "").replace(/\s+/g, " ").trim();
}

function meaningFor(term: string, topic: Topic): string {
  const lower = term.toLowerCase();
  if (lower.includes("faith")) return "trust and belief in God/Allah shown through good actions";
  if (lower.includes("prayer") || lower.includes("swalat") || lower.includes("salat")) return "worship and communication with God/Allah";
  if (lower.includes("forgive")) return "choosing not to keep anger after wrong is admitted";
  if (lower.includes("peace")) return "living without fighting and with respect";
  if (lower.includes("clean")) return "keeping the body, clothes and places free from dirt";
  if (lower.includes("prophet") || lower.includes("messenger")) return "a person chosen by God/Allah to deliver His message";
  if (lower.includes("church")) return "the Christian community of believers or a place of worship";
  if (lower.includes("qur") || lower.includes("surat") || lower.includes("surah")) return "part of Islamic teaching from the Qur'an";
  if (lower.includes("jesus")) return "central figure in Christian teaching";
  if (lower.includes("muhammad")) return "Prophet Muhammad (PBUH), the final messenger in Islam";
  return `a key Religious Education idea in ${topic.title}`;
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
    .filter((term) => term.length >= 3 && term.length <= 44)
    .filter((term) => {
      const key = term.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .slice(0, 8)
    .map((word) => ({ word, meaning: meaningFor(word, topic) }));
}

function collectLearnIt(modules: SubtopicModule[]): string[] {
  return modules.flatMap((module) => module.learnIt ?? []).filter(Boolean);
}

function moduleToCategory(module: SubtopicModule) {
  return {
    name: module.title,
    definition: module.bigIdea,
    examples: module.learnIt.slice(0, 4).length ? module.learnIt.slice(0, 4) : [module.bigIdea],
    notes: module.learnIt.slice(4, 6),
  };
}

function imageBlock(topic: Topic, modules: SubtopicModule[]) {
  const imageModule = modules.find((module) => module.imageUrl);
  if (!imageModule?.imageUrl) return [];
  return [{
    kind: "diagram" as const,
    title: imageModule.title,
    imageUrl: imageModule.imageUrl,
    caption: imageModule.imageCaption ?? imageModule.title,
    labels: [faithLabel(topic), topic.title, ...modules.map((module) => module.title).slice(0, 4)],
  }];
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
    { type: "short-answer" as const, prompt: `Explain ${topic.title} in one respectful sentence.` },
    { type: "short-answer" as const, prompt: `Write one good action connected to ${topic.title}.` },
    ...tries,
    ...quiz,
  ].slice(0, 8);
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
  const option = faithLabel(topic);

  return {
    id: `${topic.id}-${subtopic.subtopicId}-v4`,
    classLevel,
    term,
    curriculumMode: "subject",
    subject: "Religious Education",
    topicTitle: topic.title,
    subTopicTitle: title,
    lessonTitle: title,
    blocks: [
      {
        kind: "vocabulary",
        title: `${option} key words`,
        words: vocabularyFrom(topic, subtopic, modules),
      },
      {
        kind: "definition",
        term: title,
        definition: first?.bigIdea ?? meaningFor(title, topic),
        simpleCheck: first?.tryThis?.explanation,
      },
      {
        kind: "categories",
        title: "Teachings / key ideas",
        categories: modules.map(moduleToCategory),
      },
      {
        kind: "examples",
        title: "Daily-life examples",
        examples: learnIt.slice(0, 7).map((point, pointIndex) => ({
          name: `Example ${pointIndex + 1}`,
          explanation: point,
          localContext: option === "CRE" ? "Connect this to Christian conduct at home, church or school." : option === "IRE" ? "Connect this to Islamic conduct at home, mosque or school." : "Connect this to respectful daily conduct.",
        })),
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
        title: "Respectful application",
        instructions: [
          `Name one teaching in ${topic.title}.`,
          "Say how a learner can practise it at home or school.",
          option === "IRE" ? "Use respectful wording for Allah, the Qur'an, prophets and Prophet Muhammad (PBUH)." : option === "CRE" ? "Use respectful wording for God, Jesus, the Bible and the Church." : "Use respectful religious language.",
        ],
        safetyNote: "Religious Education content remains beta and should be checked by qualified CRE/IRE teachers before premium-final status.",
      },
      {
        kind: "exercise",
        title: "Evaluation",
        questions: buildExerciseQuestions(topic, modules),
      },
    ],
  };
}

export function buildUpperPrimaryReV4Lessons(
  topic: Topic,
  classLevel: UpperClassLevel,
  termMap: Record<string, TermName>,
): UpperPrimaryLesson[] {
  if (topic.useOnlyV4Lessons && topic.upperPrimaryLessons) return topic.upperPrimaryLessons;
  const term = termMap[topic.id] ?? "Term I";
  const generated = (topic.subtopics ?? []).map((subtopic, index) => buildLessonFromSubtopic(topic, subtopic, index, classLevel, term));
  return [...(topic.upperPrimaryLessons ?? []), ...generated];
}

export function addUpperPrimaryReV4(
  topics: Topic[],
  classLevel: UpperClassLevel,
  termMap: Record<string, TermName>,
): Topic[] {
  return topics.map((topic) => ({
    ...topic,
    contentFormat: "upper-primary-v4" as const,
    upperPrimaryLessons: buildUpperPrimaryReV4Lessons(topic, classLevel, termMap),
  }));
}
