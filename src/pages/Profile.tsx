import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ParcheminLayout from "../components/ParcheminLayout";
import styles from "./Profile.module.css";

interface QuizStats {
  key: string;
  category: string;
  subCategory: string;
  lastScore: number;
  bestScore: number;
  path: string;
}

export default function ProfilPage() {
  const [stats, setStats] = useState<QuizStats[]>([]);

  useEffect(() => {
    const allStats: QuizStats[] = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && !key.startsWith("theme")) {
        try {
          const data = JSON.parse(localStorage.getItem(key) || "{}");
          const [category, subCategory] = key.split("_");

          // Déterminer le chemin vers le quiz
          let path = "";
          if (category === "hiragana") path = "/hiragana";
          else if (category === "katakana") path = "/katakana";
          else if (category === "verbes") path = "/verbes";
          else if (category === "kanji") path = "/kanji";
          else if (category === "vocabulaire") path = "/base";
          else if (category === "grammaire") path = "/particules";
          else path = "/";

          allStats.push({
            key,
            category,
            subCategory,
            lastScore: data.lastScore || 0,
            bestScore: data.bestScore || 0,
            path,
          });
        } catch (e) {
          // Ignorer les erreurs
        }
      }
    }

    // Trier par catégorie puis sous-catégorie
    allStats.sort((a, b) => {
      if (a.category !== b.category)
        return a.category.localeCompare(b.category);
      return a.subCategory.localeCompare(b.subCategory);
    });

    setStats(allStats);
  }, []);

  const getSmiley = (score: number) => {
    if (score >= 100) return "🎉";
    if (score >= 90) return "😍";
    if (score >= 70) return "😄";
    if (score >= 50) return "🙂";
    return "😢";
  };

  const getCategoryEmoji = (category: string) => {
    const emojis: Record<string, string> = {
      hiragana: "🈁",
      katakana: "🈂",
      verbes: "🔄",
      kanji: "🈶",
      vocabulaire: "📚",
      grammaire: "📌",
    };
    return emojis[category] || "📖";
  };

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      hiragana: "Hiragana",
      katakana: "Katakana",
      verbes: "Verbes",
      kanji: "Kanji",
      vocabulaire: "Vocabulaire",
      grammaire: "Particules",
    };
    return labels[category] || category;
  };

  // Fonction pour formater le nom de la sous-catégorie
  const formatSubCategory = (subCategory: string) => {
    const labels: Record<string, string> = {
      voyelles: "Voyelles",
      groupe1: "Groupe 1",
      groupe2: "Groupe 2",
      groupe3: "Groupe 3",
      particules: "Toutes",
      lot1: "Lot 1",
      lot2: "Lot 2",
      lot3: "Lot 3",
      lot4: "Lot 4",
      lot5: "Lot 5",
      lot6: "Lot 6",
      lot7: "Lot 7",
      lot8: "Lot 8",
      lot9: "Lot 9",
      lot10: "Lot 10",
    };
    return labels[subCategory] || subCategory;
  };

  if (stats.length === 0) {
    return (
      <ParcheminLayout title="📊 Mon Profil">
        <div className={styles.emptyState}>
          <p>😅 Aucun quiz complété pour l'instant.</p>
          <p>Fais un quiz pour voir ta progression ici !</p>
          <Link to="/" className={styles.goHomeButton}>
            🏠 Retour à l'accueil
          </Link>
        </div>
      </ParcheminLayout>
    );
  }

  return (
    <ParcheminLayout title="📊 Mon Profil">
      <div className={styles.content}>
        <p className={styles.subtitle}>📌 {stats.length} quiz effectués</p>

        <div className={styles.quizList}>
          {stats.map((stat) => (
            <div key={stat.key} className={styles.quizCard}>
              <div className={styles.quizInfo}>
                <span className={styles.categoryEmoji}>
                  {getCategoryEmoji(stat.category)}
                </span>
                <div className={styles.quizDetails}>
                  <span className={styles.quizName}>
                    {getCategoryLabel(stat.category)} -{" "}
                    {formatSubCategory(stat.subCategory)}
                  </span>
                  <span className={styles.quizScores}>
                    📊 Dernier : {stat.lastScore}% {getSmiley(stat.lastScore)}
                    &nbsp;|&nbsp;🏆 Meilleur : {stat.bestScore}%{" "}
                    {getSmiley(stat.bestScore)}
                  </span>
                </div>
              </div>
              <Link to={stat.path} className={styles.quizLink}>
                🔗 Réessayer le quiz
              </Link>
            </div>
          ))}
        </div>
      </div>
    </ParcheminLayout>
  );
}
