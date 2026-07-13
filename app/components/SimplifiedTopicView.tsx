"use client";

import { useState, useEffect } from "react";
import type { Topic, SubtopicModule } from "@/lib/topics";
import InlineQuiz from "@/components/InlineQuiz";

type Phase = "modules" | "done";

export default function SimplifiedTopicView({
  topic,
  backHref,
}: {
  topic: Topic;
  backHref: string;
}) {
  const allModules = flattenModules(topic);
  const [moduleIndex, setModuleIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("modules");
  const [moduleDone, setModuleDone] = useState<boolean[]>(
    () => allModules.map(() => false)
  );

  // Save "last topic" for the continue chip
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

  const module = allModules[moduleIndex];
  const isLast = moduleIndex === allModules.length - 1;
  const progress = ((moduleIndex) / allModules.length) * 100;

  return (
    <div className="module-view">
      <div className="module-progress-bar">
        <div
          className="module-progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="module-step">
        {module.subtopicTitle !== module.moduleTitle && (
          <div className="module-subtopic-label">{module.subtopicTitle}</div>
        )}
        <h3 className="module-title">{module.moduleTitle}</h3>

        <div className="module-content">
          {module.learnIt.map((point, i) => (
            <p key={i} className="module-point">{point}</p>
          ))}
        </div>

        {module.workedExample && (
          <div className="module-worked">
            <div className="module-worked-label">Worked example</div>
            <div className="module-worked-q">{module.workedExample.question}</div>
            {module.workedExample.steps.map((step, i) => (
              <div key={i} className="module-worked-step">{step}</div>
            ))}
            <div className="module-worked-a">{module.workedExample.answer}</div>
          </div>
        )}

        {module.tryThis && (
          <InlineQuiz
            question={module.tryThis.question}
            choices={module.tryThis.choices}
            correct={module.tryThis.correct}
            explanation={module.tryThis.explanation}
            onComplete={() => {
              setModuleDone((prev) => {
                const next = [...prev];
                next[moduleIndex] = true;
                return next;
              });
            }}
          />
        )}
      </div>

      <div className="module-nav">
        {!isLast && (
          <button
            className="btn btn-primary btn-block"
            onClick={() => setModuleIndex((i) => i + 1)}
          >
            Next →
          </button>
        )}
        {isLast && (
          <button
            className="btn btn-primary btn-block"
            onClick={() => setPhase("done")}
          >
            Finish topic
          </button>
        )}
      </div>
    </div>
  );
}

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
    for (const subtopic of topic.subtopics) {
      for (const mod of subtopic.modules) {
        result.push({
          moduleTitle: mod.title,
          subtopicTitle: subtopic.title,
          learnIt: mod.learnIt,
          workedExample: mod.workedExample,
          tryThis: mod.tryThis,
        });
      }
    }
  }
  return result;
}
