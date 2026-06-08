// Service permétant la sav du score des questionnaires

// Sauvegarde du score d'un quizz
export function saveQuizScore(
  category: string,
  subCategory: string,
  score: number,
): void {
  // Créer une clé unique pour ce quiz
  const key = `${category}_${subCategory}`;

  // Récupérer l'ancienne sauvegarde si elle existe
  const existing = localStorage.getItem(key);
  let bestScore = score; // Par défaut, le nouveau score est le meilleur

  if (existing) {
    const oldData = JSON.parse(existing);
    // Garder le meilleur score entre l'ancien et le nouveau
    bestScore = Math.max(oldData.bestScore, score);
  }

  // Sauvegarder les deux scores
  const data = {
    lastScore: score,
    bestScore: bestScore,
  };

  localStorage.setItem(key, JSON.stringify(data));
}
