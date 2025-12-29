import React from "react";
import BackButton from "./BackButton";
import styles from "./Layout.module.css";

type LayoutProps = {
  children: React.ReactNode;
  showBackButton?: boolean;
};

export default function Layout({
  children,
  showBackButton = true,
}: LayoutProps) {
  return (
    <div className={styles.background}>
      <div className={styles.parchment}>
        {children}
        {showBackButton && (
          <div className={styles.backButtonContainer}>
            <BackButton />
          </div>
        )}
      </div>
    </div>
  );
}
