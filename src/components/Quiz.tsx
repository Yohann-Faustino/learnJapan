import { useState, useMemo } from "react";
import type { Question, Option } from "../types/Question";
import QuizButton from "./QuizButton";

type QuizProps = {
  questions: Question[];
  title?: string;
};

export default function Quiz({ questions, title }: QuizProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showScore, setShowScore] = useState<boolean>(false);

  const shuffledQuestions = useMemo(() => {
    return questions.map((q: Question) => ({
      ...q,
      options: shuffleOptions(q.options),
    }));
  }, [questions]);

  const handleAnswer = (correct: boolean) => {
    if (correct) setScore((s) => s + 1);

    const nextIndex = currentIndex + 1;
    if (nextIndex < shuffledQuestions.length) {
      setCurrentIndex(nextIndex);
    } else {
      setShowScore(true);
    }
  };

  const currentQuestion = shuffledQuestions[currentIndex];
  if (!currentQuestion) return null;

  return (
    <div>
      {showScore ? (
        <div>
          <h2>{title || "Quiz terminé !"}</h2>
          <p>
            🎉 Ton score : {score} / {shuffledQuestions.length}
          </p>
        </div>
      ) : (
        <div>
          <h2>{title || "Quiz"}</h2>
          <p>
            Question {currentIndex + 1} / {shuffledQuestions.length}
          </p>
          <p>{currentQuestion.question}</p>
          <ul>
            {currentQuestion.options.map((opt, idx) => (
              <li key={idx}>
                <QuizButton
                  label={opt.text}
                  onClick={() => handleAnswer(opt.correct)}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function shuffleOptions(options: Option[]): Option[] {
  const shuffled = [...options];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
