// NCDC-native content architecture v4 (DEV-033).
// Purpose: learner-facing lessons should teach directly using definitions, classifications,
// examples, characteristics/uses and exercises — not curriculum meta wrappers.

export type ContentFormat = "legacy-v3-modular" | "lower-primary-v4" | "upper-primary-v4";

export type ExerciseQuestionType = "oral" | "written" | "matching" | "multiple-choice" | "fill-blank" | "short-answer";

export interface VocabularyBlock {
  kind: "vocabulary";
  title?: string;
  words: Array<{
    word: string;
    meaning: string;
    localLanguage?: string;
    pronunciationHint?: string;
    audioKey?: string;
  }>;
}

export interface StoryBlock {
  kind: "story";
  title: string;
  text: string;
  questions?: string[];
}

export interface DefinitionBlock {
  kind: "definition";
  term: string;
  definition: string;
  simpleCheck?: string;
}

export interface IdentificationBlock {
  kind: "identification";
  title: string;
  points: string[];
}

export interface CategoryBlock {
  kind: "categories";
  title: string;
  categories: Array<{
    name: string;
    definition: string;
    examples: string[];
    notes?: string[];
  }>;
}

export interface ExamplesBlock {
  kind: "examples";
  title: string;
  examples: Array<{
    name: string;
    explanation?: string;
    localContext?: string;
  }>;
}

export interface CharacteristicsBlock {
  kind: "characteristics";
  title: string;
  points: string[];
}

export interface UsesBlock {
  kind: "uses";
  title: string;
  points: string[];
}

export interface PhonicsBlock {
  kind: "phonics";
  sound: string;
  words: string[];
  audioKey?: string;
}

export interface NumeracyBlock {
  kind: "numeracy";
  skill: string;
  examples: string[];
  exercise: string[];
}

export interface DiagramBlock {
  kind: "diagram";
  title: string;
  imageUrl: string;
  labels?: string[];
  caption: string;
}

export interface ActivityBlock {
  kind: "activity";
  title: string;
  instructions: string[];
  safetyNote?: string;
}

export interface WorkedExampleBlock {
  kind: "worked-example";
  question: string;
  steps: string[];
  answer: string;
}

export interface ExerciseBlock {
  kind: "exercise";
  title?: string;
  questions: Array<{
    type: ExerciseQuestionType;
    prompt: string;
    answer?: string;
    choices?: string[];
  }>;
}

export type LowerPrimaryContentBlock =
  | VocabularyBlock
  | StoryBlock
  | DefinitionBlock
  | IdentificationBlock
  | CategoryBlock
  | ExamplesBlock
  | PhonicsBlock
  | NumeracyBlock
  | ActivityBlock
  | ExerciseBlock
  | DiagramBlock;

export type UpperPrimaryContentBlock =
  | VocabularyBlock
  | StoryBlock
  | DefinitionBlock
  | CategoryBlock
  | ExamplesBlock
  | CharacteristicsBlock
  | UsesBlock
  | DiagramBlock
  | ActivityBlock
  | WorkedExampleBlock
  | ExerciseBlock;

export interface LowerPrimaryLesson {
  id: string;
  classLevel: "P1" | "P2" | "P3";
  term: "Term I" | "Term II" | "Term III";
  curriculumMode: "thematic";
  themeTitle: string;
  subThemeTitle: string;
  lessonTitle: string;
  learningArea: "Literacy I" | "Literacy II / News" | "Mathematics / Numeracy" | "English" | "Creative Performing Arts" | "Life Skills and Values" | "Integrated Theme" | "Religious Education";
  blocks: LowerPrimaryContentBlock[];
}

export interface UpperPrimaryLesson {
  id: string;
  classLevel: "P4" | "P5" | "P6" | "P7";
  term: "Term I" | "Term II" | "Term III";
  curriculumMode: "subject";
  subject: "Mathematics" | "English" | "Integrated Science" | "Social Studies" | "Religious Education";
  topicTitle: string;
  subTopicTitle: string;
  lessonTitle: string;
  blocks: UpperPrimaryContentBlock[];
}
