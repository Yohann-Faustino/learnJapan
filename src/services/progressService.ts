// Service permétant la sav du score des questionnaires

// Sauvegarde du score d'un quizz
export function saveQuizScore(
  category: string,
  subCategory: string,
  score: number,
): void {
  // Créer une clé unique pour ce quiz
  const key = `${category}_${subCategory}`;

  // Sauvegarder le score
  localStorage.setItem(key, score.toString());
}
