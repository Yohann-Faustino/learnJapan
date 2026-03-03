import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <h2 className={styles.title}>Bienvenue !</h2>
      <p className={styles.subtitle}>Choisis une catégorie pour commencer :</p>

      <div className={styles.categories}>
        <Link to="/phrase" className={styles.card}>
          Phrase
        </Link>
        <Link to="/particules" className={styles.card}>
          Particules
        </Link>
        <Link to="/hiragana" className={styles.card}>
          Hiragana
        </Link>
        <Link to="/katakana" className={styles.card}>
          katakana
        </Link>
        <Link to="/kanji" className={styles.card}>
          Kanji
        </Link>
        <Link to="/base" className={styles.card}>
          Vocabulaire de base
        </Link>{" "}
        <Link to="/intermédiaire" className={styles.card}>
          Vocabulaire intermédiaire
        </Link>{" "}
        <Link to="/complexe" className={styles.card}>
          Vocabulaire complexe
        </Link>
      </div>
    </div>
  );
}
