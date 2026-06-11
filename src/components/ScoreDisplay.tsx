import { getLastScore, getBestScore } from "../services/progressService";
import styles from "./ScoreDisplay.module.css";

interface ScoreDisplayProps {
  category: string;
  subCategory: string;
}

export function ScoreDisplay({ category, subCategory }: ScoreDisplayProps) {
  const lastScore = getLastScore(category, subCategory);
  const bestScore = getBestScore(category, subCategory);

  if (lastScore === null) return null;

  return (
    <div className={styles.scoreDisplay}>
      <p>
        📊 Dernier score : {lastScore}% | Meilleur : {bestScore}%
      </p>
    </div>
  );
}
