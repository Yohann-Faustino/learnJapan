import { useState, useMemo } from "react";
import type { Question, Option } from "../types/Question";
import QuizButton from "./QuizButton";
import { saveQuizScore } from "../services/progressService";
import { getScoreSmiley } from "./ScoreDisplay";

type QuizProps = {
  questions: Question[];
  title?: string;
  category?: string;
  subCategory?: string;
};

export default function Quiz({
  questions,
  title,
  category,
  subCategory,
}: QuizProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showScore, setShowScore] = useState<boolean>(false);
  const [finalScore, setFinalScore] = useState<number>(0);

  const shuffledQuestions = useMemo(() => {
    return questions.map((q: Question) => ({
      ...q,
      options: shuffleOptions(q.options),
    }));
  }, [questions]);

  const handleAnswer = (correct: boolean) => {
    const newScore = score + (correct ? 1 : 0);
    const nextIndex = currentIndex + 1;

    if (nextIndex < shuffledQuestions.length) {
      setScore(newScore);
      setCurrentIndex(nextIndex);
    } else {
      // Calcul du score final en pourcentage
      const finalScoreValue = Math.round(
        (newScore / shuffledQuestions.length) * 100,
      );

      // Sauvegarde du score
      if (category && subCategory) {
        saveQuizScore(category, subCategory, finalScoreValue);
      }

      setFinalScore(finalScoreValue);
      setScore(newScore);
      setShowScore(true);
    }
  };

  const currentQuestion = shuffledQuestions[currentIndex];
  if (!currentQuestion) return null;

  // Calcul du pourcentage pour l'affichage
  const percentage = Math.round((score / shuffledQuestions.length) * 100);
  const smiley = getScoreSmiley(finalScore || percentage);

  return (
    <div>
      {showScore ? (
        <div>
          <h2>{title || "Quiz terminé !"}</h2>
          <p>
            {smiley} Ton score : {score} / {shuffledQuestions.length}
          </p>
          <p>Soit : {finalScore || percentage}%</p>
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
