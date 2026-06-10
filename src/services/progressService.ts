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

// Récupérer et exporter le meilleur score
export function getBestScore(
  category: string,
  subCategory: string,
): number | null {
  const key = `${category}_${subCategory}`;
  const data = localStorage.getItem(key);
  if (!data) return null;
  return JSON.parse(data).bestScore;
}

// Récupérer et exporter le dernier score
export function getLastScore(
  category: string,
  subCategory: string,
): number | null {
  const key = `${category}_${subCategory}`;
  const data = localStorage.getItem(key);
  if (!data) return null;
  return JSON.parse(data).lastScore;
}
