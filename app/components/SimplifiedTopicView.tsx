"use client";

import { useState, useEffect } from "react";
import type { Topic } from "@/lib/topics";
import InlineQuiz from "@/components/InlineQuiz";

type Phase = "content" | "done";

export default function SimplifiedTopicView({
  topic,
  backHref,
}: {
  topic: Topic;
  backHref: string;
}) {
  const hasSubtopics = topic.subtopics && topic.subtopics.length > 0;
  const hasV4 =
    (topic.contentFormat === "lower-primary-v4" && topic.lowerPrimaryLessons) ||
    (topic.contentFormat === "upper-primary-v4" && topic.upperPrimaryLessons);

  if (hasSubtopics) {
    return <ModularView topic={topic} backHref={backHref} />;
  }

  if (hasV4) {
    return <LegacyNoteView topic={topic} backHref={backHref} />;
  }

  return <LegacyNoteView topic={topic} backHref={backHref} />;
}

/* ───── Modular (subtopic → module) view ───── */

function ModularView({ topic, backHref }: { topic: Topic; backHref: string }) {
  const allModules = flattenModules(topic);
  const [moduleIndex, setModuleIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("content");
  // Gating: track whether the current module's quiz has been answered
  const [quizAnswered, setQuizAnswered] = useState(false);

  // Reset quiz gate when module changes
  useEffect(() => {
    setQuizAnswered(false);
  }, [moduleIndex]);

  useEffect(() => {
    try {
      localStorage.setItem(
        "tendo:last-topic",
        JSON.stringify({ href: `${backHref}/${topic.id}`, title: topic.title })
      );
    } catch { /* ignore */ }
  }, [topic.id, topic.title, backHref]);

  if (phase === "done") {
    return (
      <div className="done-screen">
        <div className="done-icon">🎉</div>
        <h2>Topic complete</h2>
        <p>You finished all {allModules.length} modules in {topic.title}.</p>
        <a href={backHref} className="btn btn-primary btn-block">
          Back to topics
        </a>
      </div>
    );
  }

  const mod = allModules[moduleIndex];
  const isLast = moduleIndex === allModules.length - 1;
  const pct = Math.round(((moduleIndex) / allModules.length) * 100);
  const hasQuiz = !!mod.tryThis;
  // Show next/finish only when quiz is answered OR there's no quiz to take
  const canAdvance = !hasQuiz || quizAnswered;

  function goForward() {
    if (!canAdvance) return;
    if (isLast) {
      setPhase("done");
    } else {
      setModuleIndex((i) => i + 1);
    }
  }

  function goBack() {
    setModuleIndex((i) => i - 1);
  }

  return (
    <div className="module-view">
      <div className="module-progress-bar">
        <div className="module-progress-fill" style={{ width: `${pct}%` }} />
      </div>

      <div className="module-step">
        {mod.subtopicTitle !== mod.moduleTitle && (
          <div className="module-subtopic-label">{mod.subtopicTitle}</div>
        )}
        <h3 className="module-title">{mod.moduleTitle}</h3>

        <div className="module-content">
          {mod.learnIt.map((point, i) => (
            <p key={i} className="module-point" dangerouslySetInnerHTML={{ __html: boldKeyTerms(point) }} />
          ))}
        </div>

        {mod.workedExample && (
          <div className="module-worked">
            <div className="module-worked-label">Worked example</div>
            <div className="module-worked-q">{mod.workedExample.question}</div>
            {mod.workedExample.steps.map((step, i) => (
              <div key={i} className="module-worked-step"
                dangerouslySetInnerHTML={{ __html: boldKeyTerms(step) }} />
            ))}
            <div className="module-worked-a"
              dangerouslySetInnerHTML={{ __html: boldKeyTerms(mod.workedExample.answer) }} />
          </div>
        )}

        {mod.tryThis && (
          <InlineQuiz
            key={moduleIndex}
            question={mod.tryThis.question}
            choices={mod.tryThis.choices}
            correct={mod.tryThis.correct}
            explanation={mod.tryThis.explanation}
            onAnswered={() => setQuizAnswered(true)}
          />
        )}
      </div>

      <div className="module-nav">
        {moduleIndex > 0 && (
          <button className="btn btn-secondary" onClick={goBack}>
            ← Back
          </button>
        )}
        <span className="module-nav-pos">{moduleIndex + 1} / {allModules.length}</span>
        {canAdvance ? (
          <button className="btn btn-primary" onClick={goForward}>
            {isLast ? "Finish" : "Next →"}
          </button>
        ) : (
          <span className="module-nav-hint">Answer the question to continue</span>
        )}
      </div>
    </div>
  );
}

/* ───── Legacy note (old format) view ───── */

function LegacyNoteView({ topic, backHref }: { topic: Topic; backHref: string }) {
  const [phase, setPhase] = useState<Phase>("content");

  useEffect(() => {
    try {
      localStorage.setItem(
        "tendo:last-topic",
        JSON.stringify({ href: `${backHref}/${topic.id}`, title: topic.title })
      );
    } catch { /* ignore */ }
  }, [topic.id, topic.title, backHref]);

  if (phase === "done") {
    return (
      <div className="done-screen">
        <div className="done-icon">🎉</div>
        <h2>Topic complete</h2>
        <p>Well done studying {topic.title}.</p>
        <a href={backHref} className="btn btn-primary btn-block">Back to topics</a>
      </div>
    );
  }

  const note = topic.note;

  return (
    <div className="module-view">
      <div className="module-content">
        {note.study?.sections?.map((section, i) => (
          <div key={i} className="module-step">
            <h3 className="module-title">{section.title}</h3>
            {section.points.map((point, j) => (
              <p key={j} className="module-point" dangerouslySetInnerHTML={{ __html: boldKeyTerms(point) }} />
            ))}
          </div>
        ))}

        {!note.study?.sections && note.whatYouNeedToKnow.map((point, i) => (
          <p key={i} className="module-point" dangerouslySetInnerHTML={{ __html: boldKeyTerms(point) }} />
        ))}

        {note.study?.keyVocabulary && note.study.keyVocabulary.length > 0 && (
          <div className="module-worked" style={{ marginTop: 20 }}>
            <div className="module-worked-label">Key terms</div>
            {note.study.keyVocabulary.map((item, i) => (
              <div key={i} className="module-point" style={{ marginBottom: 8 }}>
                <strong>{item.term}</strong>: {item.meaning}
              </div>
            ))}
          </div>
        )}

        <div className="module-worked" style={{ marginTop: 20 }}>
          <div className="module-worked-label">Worked example</div>
          <div className="module-worked-q">{note.worked.problem}</div>
          {note.worked.steps.map((step, i) => (
            <div key={i} className="module-worked-step"
              dangerouslySetInnerHTML={{ __html: boldKeyTerms(step) }} />
          ))}
          <div className="module-worked-a">{note.worked.answer}</div>
        </div>
      </div>

      {topic.quiz && topic.quiz.length > 0 && (
        <LegacyQuiz questions={topic.quiz} topicId={topic.id} topicTitle={topic.title} onComplete={() => setPhase("done")} />
      )}

      <div className="module-nav" style={{ marginTop: 24 }}>
        <a href={backHref} className="btn btn-secondary">← Topics</a>
        {topic.quiz && topic.quiz.length > 0 && (
          <button className="btn btn-primary" onClick={() => setPhase("done")}>
            I&apos;ve read everything
          </button>
        )}
      </div>
    </div>
  );
}

/* ───── Legacy quiz (inline at bottom) ───── */

const LETTERS = ["A", "B", "C", "D"] as const;

function LegacyQuiz({
  questions,
  topicId,
  topicTitle,
  onComplete,
}: {
  questions: { q: string; choices: string[]; correct: number; why: string }[];
  topicId: string;
  topicTitle: string;
  onComplete: () => void;
}) {
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  if (!started) {
    return (
      <div style={{ marginTop: 24 }}>
        <button className="btn btn-primary btn-block" onClick={() => setStarted(true)}>
          Try quiz · {questions.length} questions
        </button>
      </div>
    );
  }

  if (done) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div style={{ marginTop: 24, textAlign: "center" }}>
        <div style={{ fontSize: 40, fontWeight: 800, color: "var(--terracotta)" }}>
          {score}/{questions.length}
        </div>
        <p style={{ color: "var(--muted)", marginBottom: 16 }}>
          {pct >= 80 ? "Excellent work!" : pct >= 50 ? "Good effort!" : "Keep practising!"}
        </p>
        <button className="btn btn-primary btn-block" onClick={onComplete}>
          Finish topic
        </button>
      </div>
    );
  }

  const item = questions[index];

  function pick(i: number) {
    if (picked !== null) return;
    setPicked(i);
    if (i === item.correct) setScore((s) => s + 1);
  }

  function next() {
    if (index + 1 >= questions.length) {
      setDone(true);
      persistResult(topicId, score, questions.length);
    } else {
      setIndex((n) => n + 1);
      setPicked(null);
    }
  }

  return (
    <div style={{ marginTop: 24 }}>
      <div className="module-progress-bar" style={{ marginBottom: 16 }}>
        <div className="module-progress-fill" style={{ width: `${(index / questions.length) * 100}%` }} />
      </div>
      <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 14 }}>{item.q}</div>

      <div className="inline-quiz-choices">
        {item.choices.map((c, i) => {
          let cls = "inline-choice";
          if (picked !== null) {
            if (i === item.correct) cls += " correct";
            else if (i === picked) cls += " wrong";
          }
          return (
            <button key={i} className={cls} disabled={picked !== null} onClick={() => pick(i)} type="button">
              <span className="inline-choice-letter">{LETTERS[i]}</span>
              <span>{c}</span>
            </button>
          );
        })}
      </div>

      {picked !== null && (
        <>
          <div className={`inline-feedback ${picked === item.correct ? "correct" : "wrong"}`}>
            {picked === item.correct ? "✓" : "✗"} {item.why}
          </div>
          <button className="btn btn-primary btn-block" onClick={next} style={{ marginTop: 12 }}>
            {index + 1 === questions.length ? "See result" : "Next question"}
          </button>
        </>
      )}
    </div>
  );
}

/* ───── Helpers ───── */

interface FlatModule {
  moduleTitle: string;
  subtopicTitle: string;
  learnIt: string[];
  workedExample?: {
    question: string;
    steps: string[];
    answer: string;
  };
  tryThis?: {
    question: string;
    choices: string[];
    correct: number;
    explanation: string;
  };
}

function flattenModules(topic: Topic): FlatModule[] {
  const result: FlatModule[] = [];
  if (topic.subtopics) {
    for (const sub of topic.subtopics) {
      for (const mod of sub.modules) {
        result.push({
          moduleTitle: mod.title,
          subtopicTitle: sub.title,
          learnIt: mod.learnIt,
          workedExample: mod.workedExample,
          tryThis: mod.tryThis,
        });
      }
    }
  }
  return result;
}

/**
 * Bold key terms in text. Detects:
 * - Terms followed by ":" then definition (e.g. "Equal sets: two sets are...")
 * - Terms followed by "is/are" (e.g. "A set is a well-defined...")
 * - Terms that look like proper names/concepts
 */
function boldKeyTerms(text: string): string {
  // Already has HTML
  if (/<[a-z][\s\S]*>/i.test(text)) return text;

  let result = text;

  // Pattern 1: "Term:" at the start or after a period → bold the term + colon
  result = result.replace(
    /(^|\.\s*)([A-Z][a-zA-Z\s\/\-]{2,40}?):(\s)/g,
    '$1<strong class="kw">$2</strong>:$3'
  );

  // Pattern 2: "X is/are" where X starts with capital → bold X
  result = result.replace(
    /\b([A-Z][a-zA-Z\s\/\-]{2,40}?)\s+(is|are)\s+([a-z])/g,
    '<strong class="kw">$1</strong> $2 $3'
  );

  // Pattern 3: terms in curly brackets (math notation) — keep as-is but highlight
  result = result.replace(
    /\{([^}]+)\}/g,
    '<strong class="kw">{<span>$1</span>}</strong>'
  );

  // Pattern 4: key concept words that should stand out
  const concepts = [
    "set", "sets", "subset", "subsets", "element", "elements",
    "union", "intersection", "complement", "Venn diagram",
    "cardinal number", "empty set", "null set", "universal set",
    "equivalent sets", "equal sets", "disjoint sets",
    "finite", "infinite", "probability",
    "numerator", "denominator", "fraction", "decimal", "percentage",
    "integer", "whole number", "natural number",
  ];

  // Only bold standalone concept words (not inside already-bolded sections)
  for (const concept of concepts) {
    const regex = new RegExp(
      `(?<!<strong[^>]*>)(?<!["\\w])(${concept.replace(/\s/g, "\\s")})(?![\\w-])(?![^<]*<\\/strong>)`,
      "gi"
    );
    result = result.replace(regex, '<strong class="kw">$1</strong>');
  }

  return result;
}

function persistResult(topicId: string, score: number, total: number) {
  if (typeof window === "undefined") return;
  try {
    const raw = window.localStorage.getItem("tendo:progress");
    const data = raw ? JSON.parse(raw) : {};
    const prev = data[topicId];
    data[topicId] = {
      lastScore: score,
      lastTotal: total,
      bestScore: prev ? Math.max(prev.bestScore ?? 0, score) : score,
      attempts: (prev?.attempts ?? 0) + 1,
      updatedAt: new Date().toISOString(),
    };
    window.localStorage.setItem("tendo:progress", JSON.stringify(data));
  } catch { /* ignore */ }
}
