import { useState } from "react";
import styles from "./RevealButton.module.css";

type RevealButtonProps = {
  japanese: string;
  romaji: string;
  french: string;
};

export default function RevealButton({
  japanese,
  romaji,
  french,
}: RevealButtonProps) {
  const [revealed, setRevealed] = useState(false);

  const toggle = () => setRevealed(!revealed);

  return (
    <div className={styles.miniVocabItem}>
      {/* Colonne de gauche (optionnelle) */}
      <div className={styles.leftCol}></div>

      {/* Colonne du milieu : Hiragana + Bouton */}
      <div className={styles.middleCol}>
        <span className={styles.japText}>{japanese}</span>
        <button className={styles.revealButton} onClick={toggle}>
          {revealed ? "Cacher" : "Voir"}
        </button>
      </div>

      {/* Colonne de droite : contenu reveal */}
      <div className={styles.rightCol}>
        {revealed && (
          <div className={styles.revealContent}>
            <span className={styles.romaji}>({romaji})</span>
            <span className={styles.translation}>{french}</span>
          </div>
        )}
      </div>
    </div>
  );
}
