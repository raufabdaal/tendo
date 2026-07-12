import type { UpperPrimaryLesson } from "@/lib/content-blocks";
import type { Subtopic, SubtopicModule, Topic } from "@/lib/topics";

type UpperClassLevel = "P4" | "P5" | "P6" | "P7";
type TermName = "Term I" | "Term II" | "Term III";

function stripNumberPrefix(title: string): string {
  return title.replace(/^\d+\.\s*/, "").trim();
}

function definitionForMath(title: string, module?: SubtopicModule): string {
  const idea = module?.bigIdea ?? module?.learnIt?.[0];
  if (idea) return idea;
  return `is a mathematics idea that helps learners solve ${title.toLowerCase()} questions step by step.`;
}

function collectLearnIt(modules: SubtopicModule[]): string[] {
  return modules.flatMap((module) => module.learnIt ?? []).filter(Boolean);
}

function moduleToCategory(module: SubtopicModule) {
  return {
    name: module.title,
    definition: module.bigIdea,
    examples: module.learnIt.slice(0, 3).length > 0 ? module.learnIt.slice(0, 3) : [module.bigIdea],
    notes: module.learnIt.slice(3, 5),
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
    ...tries,
    ...quiz,
  ].slice(0, 7);
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
  const imageModule = modules.find((module) => module.imageUrl);
  const workedModules = modules.filter((module) => module.workedExample);

  return {
    id: `${topic.id}-${subtopic.subtopicId}-v4`,
    classLevel,
    term,
    curriculumMode: "subject",
    subject: "Mathematics",
    topicTitle: topic.title,
    subTopicTitle: title,
    lessonTitle: title,
    blocks: [
      {
        kind: "definition",
        term: title,
        definition: definitionForMath(title, first),
        simpleCheck: first?.tryThis?.explanation,
      },
      {
        kind: "categories",
        title: "Methods / key ideas",
        categories: modules.map(moduleToCategory),
      },
      {
        kind: "examples",
        title: "Examples and rules",
        examples: learnIt.slice(0, 6).map((point, pointIndex) => ({
          name: `Point ${pointIndex + 1}`,
          explanation: point,
        })),
      },
      {
        kind: "characteristics",
        title: "Steps to remember",
        points: learnIt.slice(0, 8),
      },
      ...(imageModule?.imageUrl ? [{
        kind: "diagram" as const,
        title: imageModule.title,
        imageUrl: imageModule.imageUrl,
        caption: imageModule.imageCaption ?? imageModule.title,
        labels: [title, topic.title, ...modules.map((module) => module.title).slice(0, 4)],
      }] : []),
      ...workedModules.slice(0, 2).map((module) => ({
        kind: "worked-example" as const,
        question: module.workedExample!.question,
        steps: module.workedExample!.steps,
        answer: module.workedExample!.answer,
      })),
      {
        kind: "exercise",
        title: "Evaluation",
        questions: buildExerciseQuestions(topic, modules),
      },
    ],
  };
}

export function buildUpperPrimaryMathV4Lessons(
  topic: Topic,
  classLevel: UpperClassLevel,
  termMap: Record<string, TermName>,
): UpperPrimaryLesson[] {
  if (topic.useOnlyV4Lessons && topic.upperPrimaryLessons) return topic.upperPrimaryLessons;
  const term = termMap[topic.id] ?? "Term I";
  const generated = (topic.subtopics ?? []).map((subtopic, index) => buildLessonFromSubtopic(topic, subtopic, index, classLevel, term));
  return [...(topic.upperPrimaryLessons ?? []), ...generated];
}

export function addUpperPrimaryMathV4(
  topics: Topic[],
  classLevel: UpperClassLevel,
  termMap: Record<string, TermName>,
): Topic[] {
  return topics.map((topic) => ({
    ...topic,
    contentFormat: "upper-primary-v4" as const,
    upperPrimaryLessons: buildUpperPrimaryMathV4Lessons(topic, classLevel, termMap),
  }));
}
