import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import ParcheminLayout from "../components/ParcheminLayout";

export default function Home() {
  return (
    <ParcheminLayout title="Bienvenue" backButton={false}>
      <p className={styles.subtitle}>Choisis une catégorie pour commencer :</p>

      <div className={styles.categories}>
        <Link to="/phrase" className={styles.card}>
          📖 Structure des phrases
        </Link>
        <Link to="/particules" className={styles.card}>
          📌 Particules
        </Link>
        <Link to="/verbes" className={styles.card}>
          🔄 Verbes
        </Link>
        <Link to="/hiragana" className={styles.card}>
          🈁 Hiragana
        </Link>
        <Link to="/katakana" className={styles.card}>
          🈂 Katakana
        </Link>
        <Link to="/kanji" className={styles.card}>
          🈶 Kanji
        </Link>
        <Link to="/base" className={styles.card}>
          📚 Vocabulaire de base
        </Link>{" "}
        <Link to="/intermédiaire" className={styles.card}>
          📚 Vocabulaire intermédiaire
        </Link>{" "}
        <Link to="/complexe" className={styles.card}>
          📚 Vocabulaire complexe
        </Link>
      </div>
    </ParcheminLayout>
  );
}
