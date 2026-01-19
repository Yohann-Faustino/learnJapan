// FrenchRevealButton.tsx
import { useState } from "react";
import styles from "./RevealButton.module.css"; // On réutilise le même CSS

type FrenchRevealButtonProps = {
  french: string; // Mot français (toujours visible)
  romaji: string; // Romanji (révélé au clic)
  pronunciation: string; // Prononciation (révélée au clic)
};

export default function FrenchRevealButton({
  french,
  romaji,
  pronunciation,
}: FrenchRevealButtonProps) {
  const [revealed, setRevealed] = useState(false);

  const toggle = () => setRevealed(!revealed);

  return (
    <div className={styles.miniVocabItem}>
      {/* Colonne de gauche (espacement) */}
      <div className={styles.leftCol}></div>

      {/* Colonne du milieu : Français + Bouton */}
      <div className={styles.middleCol}>
        <span className={styles.japText}>{french}</span>
        <button className={styles.revealButton} onClick={toggle}>
          {revealed ? "Cacher" : "Voir"}
        </button>
      </div>

      {/* Colonne de droite : Romanji + Prononciation (révélés) */}
      <div className={styles.rightCol}>
        {revealed && (
          <div className={styles.revealContent}>
            <span className={styles.romaji}>({romaji})</span>
            <span className={styles.translation}>{pronunciation}</span>
          </div>
        )}
      </div>
    </div>
  );
}
