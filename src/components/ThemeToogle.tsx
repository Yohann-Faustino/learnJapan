import { useTheme } from "../context/ThemeContext";
import styles from "./ThemeToogle.module.css";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className={styles.themeToggle}>
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
