// Récupérer la liste des catégories likées
export function getLikedCategories(): string[] {
  const data = localStorage.getItem("likedCategories");
  if (!data) return [];
  try {
    return JSON.parse(data);
  } catch {
    return [];
  }
}

// Ajouter ou retirer un like
export function toggleLike(categoryId: string): void {
  const current = getLikedCategories();
  const index = current.indexOf(categoryId);

  if (index === -1) {
    current.push(categoryId);
  } else {
    current.splice(index, 1);
  }

  localStorage.setItem("likedCategories", JSON.stringify(current));
}

// Vérifier si une catégorie est likée
export function isLiked(categoryId: string): boolean {
  return getLikedCategories().includes(categoryId);
}
