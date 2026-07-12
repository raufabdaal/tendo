import type { UpperPrimaryLesson } from "@/lib/content-blocks";
import type { Subtopic, SubtopicModule, Topic } from "@/lib/topics";

type UpperClassLevel = "P4" | "P5" | "P6" | "P7";
type TermName = "Term I" | "Term II" | "Term III";

function stripNumberPrefix(title: string): string {
  return title.replace(/^\d+\.\s*/, "").trim();
}

function cleanTerm(value: string): string {
  return value
    .replace(/[.,:;!?()]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function vocabularyFrom(topic: Topic, subtopic: Subtopic, modules: SubtopicModule[]) {
  const raw = [
    topic.title,
    stripNumberPrefix(subtopic.title),
    ...modules.map((module) => module.title),
    ...modules.flatMap((module) => module.learnIt.flatMap((point) => point.split(/,|;|\band\b|\bor\b/gi).slice(0, 2))),
  ];

  const seen = new Set<string>();
  const words = raw
    .map(cleanTerm)
    .filter((term) => term.length >= 3 && term.length <= 38)
    .filter((term) => {
      const key = term.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .slice(0, 8);

  return words.map((word) => ({
    word,
    meaning: `a useful English word or phrase for ${topic.title.toLowerCase()}`,
  }));
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
    { type: "short-answer" as const, prompt: `Write one clear sentence about ${topic.title}.` },
    ...tries,
    ...quiz,
  ].slice(0, 7);
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

function buildLessonFromSubtopic(
  topic: Topic,
  subtopic: Subtopic,
  index: number,
  classLevel: UpperClassLevel,
  term: TermName,
): UpperPrimaryLesson {
  const title = stripNumberPrefix(subtopic.title);
  const modules = subtopic.modules;
  const learnIt = modules.flatMap((module) => module.learnIt).filter(Boolean);
  const workedModule = modules.find((module) => module.workedExample);

  return {
    id: `${topic.id}-${subtopic.subtopicId}-v4`,
    classLevel,
    term,
    curriculumMode: "subject",
    subject: "English",
    topicTitle: topic.title,
    subTopicTitle: title,
    lessonTitle: title,
    blocks: [
      {
        kind: "vocabulary",
        title: "Vocabulary",
        words: vocabularyFrom(topic, subtopic, modules),
      },
      {
        kind: "definition",
        term: title,
        definition: modules[0]?.bigIdea ?? `is a part of the English topic ${topic.title}.`,
        simpleCheck: modules[0]?.tryThis?.explanation,
      },
      {
        kind: "categories",
        title: "Grammar / language ideas",
        categories: modules.map((module) => ({
          name: module.title,
          definition: module.bigIdea,
          examples: module.learnIt.slice(0, 4).length ? module.learnIt.slice(0, 4) : [module.bigIdea],
        })),
      },
      {
        kind: "examples",
        title: "Model sentences and examples",
        examples: learnIt.slice(0, 6).map((point, pointIndex) => ({
          name: `Example ${pointIndex + 1}`,
          explanation: point,
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
        title: "Speaking and writing practice",
        instructions: [
          `Say two sentences using words from ${title}.`,
          `Write three clear sentences about ${topic.title}.`,
          "Check capital letters, punctuation and spelling.",
        ],
        safetyNote: "Use polite language and avoid words that mock or insult others.",
      },
      {
        kind: "exercise",
        title: "Evaluation",
        questions: buildExerciseQuestions(topic, modules),
      },
    ],
  };
}

function writingTaskLesson(topic: Topic, classLevel: UpperClassLevel, term: TermName): UpperPrimaryLesson | null {
  const tasks = topic.note.writingTasks ?? [];
  if (!tasks.length) return null;
  return {
    id: `${topic.id}-writing-task-v4`,
    classLevel,
    term,
    curriculumMode: "subject",
    subject: "English",
    topicTitle: topic.title,
    subTopicTitle: "Guided Writing",
    lessonTitle: "Guided Writing",
    blocks: [
      {
        kind: "definition",
        term: "guided writing",
        definition: "means planning and writing sentences, messages, dialogues or paragraphs with clear steps.",
        simpleCheck: "A good answer has a purpose, complete sentences and correct punctuation.",
      },
      {
        kind: "categories",
        title: "Writing tasks",
        categories: tasks.map((task) => ({
          name: task.title,
          definition: task.prompt,
          examples: task.planningSteps,
          notes: task.checklist,
        })),
      },
      {
        kind: "activity",
        title: "Write now",
        instructions: tasks.flatMap((task) => [task.prompt, ...task.planningSteps]).slice(0, 8),
        safetyNote: "Write politely and clearly for your reader.",
      },
      {
        kind: "exercise",
        title: "Writing checklist",
        questions: tasks.flatMap((task) => task.checklist.map((item) => ({
          type: "written" as const,
          prompt: item,
        }))).slice(0, 6),
      },
    ],
  };
}

export function buildUpperPrimaryEnglishV4Lessons(
  topic: Topic,
  classLevel: UpperClassLevel,
  termMap: Record<string, TermName>,
): UpperPrimaryLesson[] {
  if (topic.useOnlyV4Lessons && topic.upperPrimaryLessons) return topic.upperPrimaryLessons;
  const term = termMap[topic.id] ?? "Term I";
  const generated = (topic.subtopics ?? []).map((subtopic, index) => buildLessonFromSubtopic(topic, subtopic, index, classLevel, term));
  const writing = writingTaskLesson(topic, classLevel, term);
  return [...(topic.upperPrimaryLessons ?? []), ...generated, ...(writing ? [writing] : [])];
}

export function addUpperPrimaryEnglishV4(
  topics: Topic[],
  classLevel: UpperClassLevel,
  termMap: Record<string, TermName>,
): Topic[] {
  return topics.map((topic) => ({
    ...topic,
    contentFormat: "upper-primary-v4" as const,
    upperPrimaryLessons: buildUpperPrimaryEnglishV4Lessons(topic, classLevel, termMap),
  }));
}
