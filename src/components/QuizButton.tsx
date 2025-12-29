import styles from "./QuizButton.module.css";

type QuizButtonProps = {
  onClick?: () => void;
  label?: string;
};

export default function QuizButton({
  onClick,
  label = "Commencer le quiz",
}: QuizButtonProps) {
  return (
    <button className={styles.quizBtn} onClick={onClick}>
      {label}
    </button>
  );
}
