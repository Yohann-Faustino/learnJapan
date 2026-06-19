import type { ReactNode } from "react";
import BackButton from "./BackButton";
import ThemeToggle from "./ThemeToogle";
import styles from "./ParcheminLayout.module.css";

interface ParcheminLayoutProps {
  title: string;
  children: ReactNode;
  backButton?: boolean;
  themeToggle?: boolean;
}

export default function ParcheminLayout({
  title,
  children,
  backButton = true,
  themeToggle = true,
}: ParcheminLayoutProps) {
  return (
    <div className={styles.parchemin}>
      {themeToggle && <ThemeToggle />}

      <h1 className={styles.title}>{title}</h1>

      <div className="parchemin">
        <div className={styles.content}>{children}</div>

        {backButton && (
          <div className={styles.backButtonContainer}>
            <BackButton />
          </div>
        )}
      </div>
    </div>
  );
}
