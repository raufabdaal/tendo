"use client";

import { useMemo, useState } from "react";
import type {
  ActivityBlock,
  CategoryBlock,
  DefinitionBlock,
  DiagramBlock,
  ExamplesBlock,
  ExerciseBlock,
  IdentificationBlock,
  LowerPrimaryContentBlock,
  LowerPrimaryLesson,
  NumeracyBlock,
  PhonicsBlock,
  StoryBlock,
  UpperPrimaryContentBlock,
  UpperPrimaryLesson,
  VocabularyBlock,
  WorkedExampleBlock,
} from "@/lib/content-blocks";

export function LowerPrimaryLessonView({ lessons }: { lessons: LowerPrimaryLesson[] }) {
  const [activeLessonIndex, setActiveLessonIndex] = useState(0);
  const activeLesson = lessons[Math.min(activeLessonIndex, lessons.length - 1)];

  if (!activeLesson) return null;

  return (
    <section className="v4-lesson-shell v4-lower-shell" aria-label="Lower primary lesson">
      {lessons.length > 1 && (
        <LessonChooser
          label="Choose a lesson"
          lessons={lessons.map((lesson) => ({ title: lesson.lessonTitle, subtitle: lesson.subThemeTitle }))}
          activeIndex={activeLessonIndex}
          onSelect={setActiveLessonIndex}
        />
      )}
      <LessonStepper
        lessonId={activeLesson.id}
        kicker={`${activeLesson.classLevel} · ${activeLesson.term} · ${activeLesson.learningArea}`}
        title={activeLesson.lessonTitle}
        subtitle={`${activeLesson.themeTitle} · ${activeLesson.subThemeTitle}`}
        blocks={activeLesson.blocks}
        renderBlock={(block, index) => <LowerPrimaryBlockView block={block} index={index} />}
      />
    </section>
  );
}

export function UpperPrimaryLessonView({ lessons }: { lessons: UpperPrimaryLesson[] }) {
  const [activeLessonIndex, setActiveLessonIndex] = useState(0);
  const activeLesson = lessons[Math.min(activeLessonIndex, lessons.length - 1)];

  if (!activeLesson) return null;

  return (
    <section className="v4-lesson-shell v4-upper-shell" aria-label="Upper primary lesson">
      {lessons.length > 1 && (
        <LessonChooser
          label="Choose a sub-topic"
          lessons={lessons.map((lesson) => ({ title: lesson.subTopicTitle, subtitle: lesson.topicTitle }))}
          activeIndex={activeLessonIndex}
          onSelect={setActiveLessonIndex}
        />
      )}
      <LessonStepper
        lessonId={activeLesson.id}
        kicker={`${activeLesson.classLevel} · ${activeLesson.term} · ${activeLesson.subject}`}
        title={activeLesson.subTopicTitle}
        subtitle={activeLesson.topicTitle}
        blocks={activeLesson.blocks}
        renderBlock={(block, index) => <UpperPrimaryBlockView block={block} index={index} />}
      />
    </section>
  );
}

function LessonChooser({
  label,
  lessons,
  activeIndex,
  onSelect,
}: {
  label: string;
  lessons: Array<{ title: string; subtitle: string }>;
  activeIndex: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="v4-lesson-chooser" aria-label={label}>
      <div className="v4-lesson-chooser-label">{label}</div>
      <div className="v4-lesson-strip">
        {lessons.map((lesson, index) => (
          <button
            type="button"
            key={`${lesson.title}-${index}`}
            className={activeIndex === index ? "active" : undefined}
            onClick={() => onSelect(index)}
          >
            <small>{index + 1}</small>
            <span>{lesson.title}</span>
            <em>{lesson.subtitle}</em>
          </button>
        ))}
      </div>
    </div>
  );
}

function LessonStepper<TBlock extends LowerPrimaryContentBlock | UpperPrimaryContentBlock>({
  lessonId,
  kicker,
  title,
  subtitle,
  blocks,
  renderBlock,
}: {
  lessonId: string;
  kicker: string;
  title: string;
  subtitle: string;
  blocks: TBlock[];
  renderBlock: (block: TBlock, index: number) => React.ReactNode;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeBlock = blocks[activeIndex];
  const total = blocks.length;
  const percent = useMemo(() => `${Math.round(((activeIndex + 1) / total) * 100)}%`, [activeIndex, total]);

  return (
    <article className="v4-lesson-card" id={lessonId}>
      <div className="v4-kicker">{kicker}</div>
      <h2>{title}</h2>
      <p className="v4-subtitle">{subtitle}</p>

      <div className="v4-stepper-head" aria-label="Lesson progress">
        <div>
          <strong>Module {activeIndex + 1} of {total}</strong>
          <span>{getBlockLabel(activeBlock)}</span>
        </div>
        <div className="v4-step-meter" aria-hidden="true"><span style={{ width: percent }} /></div>
      </div>

      <div className="v4-module-strip" aria-label="Lesson modules">
        {blocks.map((block, index) => (
          <button
            key={`${getBlockLabel(block)}-${index}`}
            type="button"
            className={index === activeIndex ? "active" : undefined}
            onClick={() => setActiveIndex(index)}
            aria-label={`Open module ${index + 1}: ${getBlockLabel(block)}`}
          >
            <small>{index + 1}</small>
            <span>{getBlockLabel(block)}</span>
          </button>
        ))}
      </div>

      <div className="v4-block-list v4-single-module">
        {renderBlock(activeBlock, activeIndex)}
      </div>

      <div className="v4-stepper-actions">
        <button
          type="button"
          className="btn btn-secondary"
          disabled={activeIndex === 0}
          onClick={() => setActiveIndex((index) => Math.max(0, index - 1))}
        >
          ← Previous
        </button>
        <div className="v4-completion-note">{percent} done</div>
        {activeIndex < total - 1 ? (
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setActiveIndex((index) => Math.min(total - 1, index + 1))}
          >
            Next module →
          </button>
        ) : (
          <a className="btn btn-primary" href="#quick-quiz">Finish lesson →</a>
        )}
      </div>
    </article>
  );
}

function getBlockLabel(block: LowerPrimaryContentBlock | UpperPrimaryContentBlock): string {
  if (block.kind === "vocabulary") return block.title ?? "New words";
  if (block.kind === "story") return block.title;
  if (block.kind === "definition") return `What is ${block.term}?`;
  if (block.kind === "identification") return block.title;
  if (block.kind === "categories") return block.title;
  if (block.kind === "examples") return block.title;
  if (block.kind === "characteristics") return block.title;
  if (block.kind === "uses") return block.title;
  if (block.kind === "phonics") return "Say the sound";
  if (block.kind === "numeracy") return "Count / sort / match";
  if (block.kind === "diagram") return block.title;
  if (block.kind === "activity") return block.title;
  if (block.kind === "worked-example") return "Worked example";
  return block.title ?? "Exercise";
}

function LowerPrimaryBlockView({ block, index }: { block: LowerPrimaryContentBlock; index: number }) {
  if (block.kind === "vocabulary") return <VocabularyView block={block} index={index} />;
  if (block.kind === "story") return <StoryView block={block} index={index} />;
  if (block.kind === "definition") return <DefinitionView block={block} index={index} />;
  if (block.kind === "identification") return <IdentificationView block={block} index={index} />;
  if (block.kind === "categories") return <CategoryView block={block} index={index} />;
  if (block.kind === "examples") return <ExamplesView block={block} index={index} />;
  if (block.kind === "phonics") return <PhonicsView block={block} index={index} />;
  if (block.kind === "numeracy") return <NumeracyView block={block} index={index} />;
  if (block.kind === "activity") return <ActivityView block={block} index={index} />;
  if (block.kind === "diagram") return <DiagramView block={block} index={index} />;
  return <ExerciseView block={block} index={index} />;
}

function UpperPrimaryBlockView({ block, index }: { block: UpperPrimaryContentBlock; index: number }) {
  if (block.kind === "definition") return <DefinitionView block={block} index={index} />;
  if (block.kind === "categories") return <CategoryView block={block} index={index} />;
  if (block.kind === "examples") return <ExamplesView block={block} index={index} />;
  if (block.kind === "characteristics") return <PointListView title={block.title} points={block.points} index={index} />;
  if (block.kind === "uses") return <PointListView title={block.title} points={block.points} index={index} />;
  if (block.kind === "diagram") return <DiagramView block={block} index={index} />;
  if (block.kind === "worked-example") return <WorkedExampleView block={block} index={index} />;
  return <ExerciseView block={block} index={index} />;
}

function BlockFrame({ index, label, children }: { index: number; label: string; children: React.ReactNode }) {
  return (
    <section className="v4-block">
      <div className="v4-block-number">{index + 1}</div>
      <div className="v4-block-body">
        <h3>{label}</h3>
        {children}
      </div>
    </section>
  );
}

function VocabularyView({ block, index }: { block: VocabularyBlock; index: number }) {
  return (
    <BlockFrame index={index} label={block.title ?? "New words"}>
      <div className="v4-vocab-grid">
        {block.words.map((item) => (
          <div className="v4-vocab-card" key={item.word}>
            <strong>{item.word}</strong>
            <span>{item.meaning}</span>
            {item.localLanguage && <em>{item.localLanguage}</em>}
            {item.pronunciationHint && <small>Say: {item.pronunciationHint}</small>}
          </div>
        ))}
      </div>
    </BlockFrame>
  );
}

function StoryView({ block, index }: { block: StoryBlock; index: number }) {
  return (
    <BlockFrame index={index} label={block.title}>
      <p className="v4-story-text">{block.text}</p>
      {block.questions && block.questions.length > 0 && (
        <ul className="v4-simple-list">
          {block.questions.map((question) => <li key={question}>{question}</li>)}
        </ul>
      )}
    </BlockFrame>
  );
}

function DefinitionView({ block, index }: { block: DefinitionBlock; index: number }) {
  return (
    <BlockFrame index={index} label={`What is ${block.term}?`}>
      <p className="v4-definition"><strong>{block.term}</strong> {block.definition}</p>
      {block.simpleCheck && <p className="v4-check">Check: {block.simpleCheck}</p>}
    </BlockFrame>
  );
}

function IdentificationView({ block, index }: { block: IdentificationBlock; index: number }) {
  return <PointListView title={block.title} points={block.points} index={index} />;
}

function CategoryView({ block, index }: { block: CategoryBlock; index: number }) {
  return (
    <BlockFrame index={index} label={block.title}>
      <div className="v4-category-grid">
        {block.categories.map((category) => (
          <div className="v4-category-card" key={category.name}>
            <h4>{category.name}</h4>
            <p>{category.definition}</p>
            <strong>Examples</strong>
            <ul>
              {category.examples.map((example) => <li key={example}>{example}</li>)}
            </ul>
            {category.notes && <ul className="v4-note-list">{category.notes.map((note) => <li key={note}>{note}</li>)}</ul>}
          </div>
        ))}
      </div>
    </BlockFrame>
  );
}

function ExamplesView({ block, index }: { block: ExamplesBlock; index: number }) {
  return (
    <BlockFrame index={index} label={block.title}>
      <div className="v4-example-list">
        {block.examples.map((example) => (
          <div className="v4-example-card" key={example.name}>
            <strong>{example.name}</strong>
            {example.explanation && <span>{example.explanation}</span>}
            {example.localContext && <em>{example.localContext}</em>}
          </div>
        ))}
      </div>
    </BlockFrame>
  );
}

function PhonicsView({ block, index }: { block: PhonicsBlock; index: number }) {
  return (
    <BlockFrame index={index} label="Say the sound">
      <p className="v4-definition"><strong>{block.sound}</strong></p>
      <div className="v4-pill-row">{block.words.map((word) => <span key={word}>{word}</span>)}</div>
    </BlockFrame>
  );
}

function NumeracyView({ block, index }: { block: NumeracyBlock; index: number }) {
  return (
    <BlockFrame index={index} label={`Count / sort / match: ${block.skill}`}>
      <ul className="v4-simple-list">{block.examples.map((example) => <li key={example}>{example}</li>)}</ul>
      <h4>Try</h4>
      <ol className="v4-simple-list">{block.exercise.map((item) => <li key={item}>{item}</li>)}</ol>
    </BlockFrame>
  );
}

function ActivityView({ block, index }: { block: ActivityBlock; index: number }) {
  return (
    <BlockFrame index={index} label={block.title}>
      <ol className="v4-simple-list">{block.instructions.map((step) => <li key={step}>{step}</li>)}</ol>
      {block.safetyNote && <p className="v4-safety">Safety: {block.safetyNote}</p>}
    </BlockFrame>
  );
}

function DiagramView({ block, index }: { block: DiagramBlock; index: number }) {
  return (
    <BlockFrame index={index} label={block.title}>
      <div className="module-image-card v4-image-card">
        <img src={block.imageUrl} alt={block.caption} className="module-image v4-module-image" loading="lazy" />
        <p className="module-image-caption">{block.caption}</p>
        <p className="v4-image-hint">Tip: swipe the picture sideways if the labels look small.</p>
      </div>
      {block.labels && <div className="v4-pill-row">{block.labels.map((label) => <span key={label}>{label}</span>)}</div>}
    </BlockFrame>
  );
}

function WorkedExampleView({ block, index }: { block: WorkedExampleBlock; index: number }) {
  return (
    <BlockFrame index={index} label="Worked example">
      <p><strong>Question:</strong> {block.question}</p>
      <ol className="v4-simple-list">{block.steps.map((step) => <li key={step}>{step}</li>)}</ol>
      <p className="v4-answer"><strong>Answer:</strong> {block.answer}</p>
    </BlockFrame>
  );
}

function ExerciseView({ block, index }: { block: ExerciseBlock; index: number }) {
  return (
    <BlockFrame index={index} label={block.title ?? "Exercise"}>
      <ol className="v4-exercise-list">
        {block.questions.map((question, questionIndex) => (
          <li key={`${question.prompt}-${questionIndex}`}>
            <p>{question.prompt}</p>
            {question.choices && <div className="v4-pill-row">{question.choices.map((choice) => <span key={choice}>{choice}</span>)}</div>}
            {question.answer && <small>Answer: {question.answer}</small>}
          </li>
        ))}
      </ol>
    </BlockFrame>
  );
}

function PointListView({ title, points, index }: { title: string; points: string[]; index: number }) {
  return (
    <BlockFrame index={index} label={title}>
      <ul className="v4-simple-list">{points.map((point) => <li key={point}>{point}</li>)}</ul>
    </BlockFrame>
  );
}
