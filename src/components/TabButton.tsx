import styles from "./TabButton.module.css";

type TabButtonProps = {
  label: string;
  active?: boolean;
  onClick: () => void;
};

export default function TabButton({ label, active, onClick }: TabButtonProps) {
  return (
    <button
      className={`${styles.tabButton} ${active ? styles.active : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
