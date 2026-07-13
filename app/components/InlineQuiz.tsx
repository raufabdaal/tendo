"use client";

import { useState } from "react";

const LETTERS = ["A", "B", "C", "D"] as const;

interface InlineQuizProps {
  question: string;
  choices: string[];
  correct: number;
  explanation: string;
  onAnswered?: (wasCorrect: boolean) => void;
}

export default function InlineQuiz({
  question,
  choices,
  correct,
  explanation,
  onAnswered,
}: InlineQuizProps) {
  const [picked, setPicked] = useState<number | null>(null);
  const isCorrect = picked === correct;

  function pick(i: number) {
    if (picked !== null) return;
    setPicked(i);
    if (onAnswered) onAnswered(i === correct);
  }

  return (
    <div className="inline-quiz">
      <div className="inline-quiz-q">{question}</div>
      <div className="inline-quiz-choices">
        {choices.map((choice, i) => {
          let cls = "inline-choice";
          if (picked !== null) {
            if (i === correct) cls += " correct";
            else if (i === picked) cls += " wrong";
          }
          return (
            <button
              key={i}
              className={cls}
              disabled={picked !== null}
              onClick={() => pick(i)}
              type="button"
            >
              <span className="inline-choice-letter">{LETTERS[i]}</span>
              <span>{choice}</span>
            </button>
          );
        })}
      </div>
      {picked !== null && (
        <div className={`inline-feedback ${isCorrect ? "correct" : "wrong"}`}>
          {isCorrect ? "✓" : "✗"} {explanation}
        </div>
      )}
    </div>
  );
}
