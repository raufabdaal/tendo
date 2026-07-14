"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { Topic, SubtopicModule } from "@/lib/topics";
import InlineQuiz from "@/components/InlineQuiz";

interface SubtopicViewerProps {
  topic: Topic;
  subtopicId: string;
  topicHref: string;
  subjectHref: string;
}

export default function SubtopicViewer({ topic, subtopicId, topicHref, subjectHref }: SubtopicViewerProps) {
  const subtopic = (topic.subtopics ?? []).find((s) => s.subtopicId === subtopicId);
  if (!subtopic) {
    return (
      <div className="done-screen">
        <h2>Subtopic not found</h2>
        <a href={topicHref} className="btn btn-primary btn-block">Back to subtopics</a>
      </div>
    );
  }

  const modules = subtopic.modules;
  const [moduleIndex, setModuleIndex] = useState(0);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    setQuizAnswered(false);
  }, [moduleIndex]);

  useEffect(() => {
    try {
      localStorage.setItem("tendo:last-topic", JSON.stringify({
        href: `${topicHref}/${subtopicId}`,
        title: `${topic.title} — ${subtopic.title}`
      }));
    } catch { /* ignore */ }
  }, [topic.title, subtopic.title, topicHref, subtopicId]);

  if (done) {
    return (
      <div className="done-screen">
        <div className="done-icon">🎉</div>
        <h2>Subtopic complete</h2>
        <p>You finished all {modules.length} modules in {subtopic.title}.</p>
        <a href={topicHref} className="btn btn-primary btn-block">Back to subtopics</a>
      </div>
    );
  }

  const mod = modules[moduleIndex];
  const isLast = moduleIndex === modules.length - 1;
  const pct = Math.round((moduleIndex / modules.length) * 100);
  const hasQuiz = !!mod.tryThis;
  const canAdvance = !hasQuiz || quizAnswered;

  function goForward() {
    if (!canAdvance) return;
    if (isLast) {
      setDone(true);
    } else {
      setModuleIndex((i) => i + 1);
    }
  }

  return (
    <div className="module-view">
      <Link href={topicHref} className="back-link" style={{ marginBottom: 12, display: "inline-flex" }}>← Subtopics</Link>
      <h2 className="subtopic-viewer-title">{subtopic.title.replace(/^\d+\.\s*/, "")}</h2>

      <div className="module-progress-bar">
        <div className="module-progress-fill" style={{ width: `${pct}%` }} />
      </div>

      <div className="module-step">
        <h3 className="module-title">{mod.title}</h3>

        <div className="module-content strict-content">
          {mod.learnIt.map((point, i) => renderStrictContentLine(point, i))}
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
          <button className="btn btn-secondary" onClick={() => setModuleIndex((i) => i - 1)}>← Back</button>
        )}
        <span className="module-nav-pos">{moduleIndex + 1} / {modules.length}</span>
        {canAdvance ? (
          <button className="btn btn-primary" onClick={goForward}>
            {isLast ? "Finish subtopic" : "Next →"}
          </button>
        ) : (
          <span className="module-nav-hint">Answer the question to continue</span>
        )}
      </div>
    </div>
  );
}

function renderStrictContentLine(point: string, key: number) {
  if (point.startsWith("### ")) {
    return <h4 key={key} className="strict-module-heading">{point.replace(/^###\s*/, "")}</h4>;
  }

  if (point.startsWith("* ")) {
    return (
      <p key={key} className="module-point strict-bullet">
        <span className="strict-bullet-mark">*</span>
        <span dangerouslySetInnerHTML={{ __html: boldKeyTerms(point.replace(/^\*\s*/, "")) }} />
      </p>
    );
  }

  return <p key={key} className="module-point" dangerouslySetInnerHTML={{ __html: boldKeyTerms(point) }} />;
}

function boldKeyTerms(text: string): string {
  if (/<[a-z][\s\S]*>/i.test(text)) return text;
  let result = text;
  result = result.replace(
    /(^|\.\s*)([A-Z][a-zA-Z\s\/\-]{2,40}?):(\s)/g,
    '$1<strong class="kw">$2</strong>:$3'
  );
  result = result.replace(
    /\b([A-Z][a-zA-Z\s\/\-]{2,40}?)\s+(is|are)\s+([a-z])/g,
    '<strong class="kw">$1</strong> $2 $3'
  );
  result = result.replace(
    /\{([^}]+)\}/g,
    '<strong class="kw">{<span>$1</span>}</strong>'
  );
  return result;
}
