import styles from "./BackButton.module.css";

type BackButtonProps = {
  onClick?: () => void;
};

export default function BackButton({ onClick }: BackButtonProps) {
  const handleClick = () => {
    if (typeof onClick === "function") {
      onClick();
    } else {
      window.history.back();
    }
  };

  return (
    <button className={styles.backBtn} onClick={handleClick}>
      Retour
    </button>
  );
}
