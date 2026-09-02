import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import ParcheminLayout from "../components/ParcheminLayout";
import { getLikedCategories, toggleLike } from "../services/likeService";

export default function Home() {
  const [likedIds, setLikedIds] = useState<string[]>([]);

  useEffect(() => {
    setLikedIds(getLikedCategories());
  }, []);

  const handleToggleLike = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleLike(id);
    setLikedIds(getLikedCategories());
  };

  const categories = [
    { id: "phrase", label: "📖 Structure des phrases", path: "/phrase" },
    { id: "particules", label: "📌 Particules", path: "/particules" },
    { id: "verbes polis", label: "🔄 Verbes polis", path: "/verbespolis" },
    { id: "hiragana", label: "🈁 Hiragana", path: "/hiragana" },
    { id: "katakana", label: "🈂 Katakana", path: "/katakana" },
    { id: "kanji", label: "🈶 Kanji", path: "/kanji" },
    { id: "base", label: "📚 Vocabulaire de base", path: "/base" },
    {
      id: "intermediaire",
      label: "📚 Vocabulaire intermédiaire",
      path: "/intermédiaire",
    },
    { id: "complexe", label: "📚 Vocabulaire complexe", path: "/complexe" },
    { id: "profil", label: "📊 Mon Profil", path: "/profil" },
  ];

  const sortedCategories = [...categories].sort((a, b) => {
    const aLiked = likedIds.includes(a.id);
    const bLiked = likedIds.includes(b.id);
    if (aLiked && !bLiked) return -1;
    if (!aLiked && bLiked) return 1;
    return 0;
  });

  return (
    <ParcheminLayout title="Bienvenue" backButton={false}>
      <p className={styles.subtitle}>Choisis une catégorie pour commencer :</p>

      <div className={styles.categories}>
        {sortedCategories.map((cat) => {
          const liked = likedIds.includes(cat.id);
          return (
            <Link
              key={cat.id}
              to={cat.path}
              className={`${styles.card} ${liked ? styles.likedCard : ""}`}
            >
              <span className={styles.cardContent}>{cat.label}</span>
              <button
                onClick={(e) => handleToggleLike(cat.id, e)}
                className={`${styles.likeButton} ${liked ? styles.liked : ""}`}
                aria-label={
                  liked ? "Retirer des favoris" : "Ajouter aux favoris"
                }
              >
                {liked ? "❤️" : "🤍"}
              </button>
            </Link>
          );
        })}
      </div>
    </ParcheminLayout>
  );
}
