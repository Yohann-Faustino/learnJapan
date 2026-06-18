import { getLastScore, getBestScore } from "../services/progressService";
import styles from "./ScoreDisplay.module.css";

interface ScoreDisplayProps {
  category: string;
  subCategory: string;
}

export function getScoreSmiley(score: number): string {
  if (score >= 100) return "🎉";
  if (score >= 90) return "😍";
  if (score >= 70) return "😄";
  if (score >= 50) return "🙂";
  return "😢";
}

export default function ScoreDisplay({
  category,
  subCategory,
}: ScoreDisplayProps) {
  const lastScore = getLastScore(category, subCategory);
  const bestScore = getBestScore(category, subCategory);

  if (lastScore === null) return null;

  const lastSmiley = getScoreSmiley(lastScore);
  const bestSmiley = getScoreSmiley(bestScore || 0);

  return (
    <div className={styles.scoreDisplay}>
      <p>
        📊 Dernier score : {lastScore}% {lastSmiley} | Meilleur : {bestScore}%{" "}
        {bestSmiley}
      </p>
    </div>
  );
}
