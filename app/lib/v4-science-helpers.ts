import type { UpperPrimaryLesson } from "@/lib/content-blocks";
import type { Subtopic, SubtopicModule, Topic } from "@/lib/topics";

type UpperClassLevel = "P4" | "P5" | "P6" | "P7";
type TermName = "Term I" | "Term II" | "Term III";

function stripNumberPrefix(title: string): string {
  return title.replace(/^\d+\.\s*/, "").trim();
}

function firstMeaningfulPoint(module?: SubtopicModule): string {
  if (!module) return "This lesson explains the main science idea using clear definitions, examples and practice.";
  return module.bigIdea || module.learnIt[0] || "This lesson explains the main science idea using clear definitions, examples and practice.";
}

function shortDefinition(subtopicTitle: string, module?: SubtopicModule): string {
  const clean = stripNumberPrefix(subtopicTitle);
  const point = firstMeaningfulPoint(module);
  if (/\bis\b|\bare\b|\bmeans\b/i.test(point)) return point;
  return `means ${point.charAt(0).toLowerCase()}${point.slice(1)}`;
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
  const tryThisQuestions = modules
    .map((module) => module.tryThis)
    .filter(Boolean)
    .slice(0, 4)
    .map((tryThis) => ({
      type: "multiple-choice" as const,
      prompt: tryThis!.question,
      choices: tryThis!.choices,
      answer: tryThis!.choices[tryThis!.correct] ?? tryThis!.choices[0],
    }));

  const quizQuestions = topic.quiz.slice(0, Math.max(0, 5 - tryThisQuestions.length)).map((question) => ({
    type: "multiple-choice" as const,
    prompt: question.q,
    choices: question.choices,
    answer: question.choices[question.correct] ?? question.choices[0],
  }));

  return [
    { type: "short-answer" as const, prompt: `Define or explain ${topic.title}.` },
    ...tryThisQuestions,
    ...quizQuestions,
  ].slice(0, 6);
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
  const workedModule = modules.find((module) => module.workedExample);

  return {
    id: `${topic.id}-${subtopic.subtopicId}-v4`,
    classLevel,
    term,
    curriculumMode: "subject",
    subject: "Integrated Science",
    topicTitle: topic.title,
    subTopicTitle: title,
    lessonTitle: title,
    blocks: [
      {
        kind: "definition",
        term: title,
        definition: shortDefinition(title, first),
        simpleCheck: first?.tryThis?.explanation,
      },
      {
        kind: "categories",
        title: "Types / parts / key ideas",
        categories: modules.map(moduleToCategory),
      },
      {
        kind: "examples",
        title: "Examples and illustrations",
        examples: learnIt.slice(0, 5).map((point, pointIndex) => ({
          name: `Example ${pointIndex + 1}`,
          explanation: point,
          localContext: "Connect this to a real example at home, school or in the community where possible.",
        })),
      },
      {
        kind: "characteristics",
        title: "Characteristics / facts to remember",
        points: learnIt.slice(0, 8),
      },
      ...(imageModule?.imageUrl ? [{
        kind: "diagram" as const,
        title: imageModule.title,
        imageUrl: imageModule.imageUrl,
        caption: imageModule.imageCaption ?? imageModule.title,
        labels: [title, topic.title, ...modules.map((module) => module.title).slice(0, 4)],
      }] : []),
      ...(workedModule?.workedExample ? [{
        kind: "worked-example" as const,
        question: workedModule.workedExample.question,
        steps: workedModule.workedExample.steps,
        answer: workedModule.workedExample.answer,
      }] : []),
      {
        kind: "exercise",
        title: "Evaluation",
        questions: buildExerciseQuestions(topic, modules),
      },
    ],
  };
}

export function buildUpperPrimaryScienceV4Lessons(
  topic: Topic,
  classLevel: UpperClassLevel,
  termMap: Record<string, TermName>,
): UpperPrimaryLesson[] {
  if (topic.useOnlyV4Lessons && topic.upperPrimaryLessons) return topic.upperPrimaryLessons;
  const term = termMap[topic.id] ?? "Term I";
  const generated = (topic.subtopics ?? []).map((subtopic, index) => buildLessonFromSubtopic(topic, subtopic, index, classLevel, term));
  return [...(topic.upperPrimaryLessons ?? []), ...generated];
}

export function addUpperPrimaryScienceV4(
  topics: Topic[],
  classLevel: UpperClassLevel,
  termMap: Record<string, TermName>,
): Topic[] {
  return topics.map((topic) => ({
    ...topic,
    contentFormat: "upper-primary-v4" as const,
    upperPrimaryLessons: buildUpperPrimaryScienceV4Lessons(topic, classLevel, termMap),
  }));
}
