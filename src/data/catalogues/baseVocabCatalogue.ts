// Le catalogue centralise toutes les données des sections (caractères, vocabulaire, quiz) pour que la page baseVocabulary n'ait plus besoin de répéter le code des switch a chaque nouveau case.

// Imports des vocabulaires
import { quotidienVocab } from "../baseVocabularyVocab/baseVocabularyQuotidienVocab";
import { salutationsVocab } from "../baseVocabularyVocab/baseVocabularySalutationsVocab";
import { nourritureVocab } from "../baseVocabularyVocab/baseVocabularyNourritureVocab";
import { transportVocab } from "../baseVocabularyVocab/baseVocabularyVocabTransport";
import { achatsVocab } from "../baseVocabularyVocab/baseVocabularyAchatsVocab";
import { santeVocab } from "../baseVocabularyVocab/baseVocabularySanteVocab";
import { utileVocab } from "../baseVocabularyVocab/baseVocabularyVocabUtile";
import { questionsVocab } from "../baseVocabularyVocab/baseVocabularyQuestionsVocab";

// Imports des questions
import { quotidienQuestions } from "../baseVocabularyQuestion/vocabQuotidienQestions";
import { salutationsQuestions } from "../baseVocabularyQuestion/vocabSalutationsQuestions";
import { nourritureQuestions } from "../baseVocabularyQuestion/vocabNourritureQuestions";
import { transportQuestions } from "../baseVocabularyQuestion/vocabTransportQuestions";
import { achatsQuestions } from "../baseVocabularyQuestion/vocabAchatsQuestions";
import { santeQuestions } from "../baseVocabularyQuestion/vocabSanteQuestions";
import { utileQuestions } from "../baseVocabularyQuestion/vocabUtileQuestions";
import { questionsQuestions } from "../baseVocabularyQuestion/vocabQuestionsQuestions";

export const baseVocabCatalogue = [
  {
    id: "quotidien",
    label: "🏠 Quotidien",
    description:
      "Les objets et situations de la vie de tous les jours au Japon",
    phraseUtile: "ここは [lieu] です (Ici c'est [lieu])",
    vocab: quotidienVocab,
    questions: quotidienQuestions,
  },
  {
    id: "salutations",
    label: "🏯 Salutations",
    description: "Les bases essentielles pour saluer, remercier et s'excuser",
    phraseUtile: "はじめまして、[nom] です (Enchanté, je m'appelle [nom])",
    astuce: "Utilisez 'sumimasen' pour attirer l'attention poliment",
    vocab: salutationsVocab,
    questions: salutationsQuestions,
  },
  {
    id: "questions",
    label: "❓ Questions",
    description: "Apprenez à poser des questions simples",
    phraseUtile: "[mot] は なんですか？ (Qu'est-ce que [mot] ?)",
    vocab: questionsVocab,
    questions: questionsQuestions,
  },
  {
    id: "nourriture",
    label: "🍣 Nourriture",
    description: "Pour commander, lire un menu et exprimer vos goûts",
    phraseUtile: "____ を ください (____ s'il vous plaît)",
    vocab: nourritureVocab,
    questions: nourritureQuestions,
  },
  {
    id: "transport",
    label: "🚄 Transport",
    description: "Pour prendre le train, demander son chemin",
    phraseUtile: "____ は どこですか？ (Où est ____ ?)",
    vocab: transportVocab,
    questions: transportQuestions,
  },
  {
    id: "achats",
    label: "💸 Achats",
    description: "Pour faire des courses, négocier les prix",
    phraseUtile: "いくらですか？ (C'est combien ?)",
    vocab: achatsVocab,
    questions: achatsQuestions,
  },
  {
    id: "sante",
    label: "⚕️ Santé",
    description: "Exprimer des problèmes médicaux et trouver de l'aide",
    phraseUtile: "びょういんは どこですか？ (Où est l'hôpital ?)",
    vocab: santeVocab,
    questions: santeQuestions,
  },
  {
    id: "utile",
    label: "🈴 Utile",
    description: "Les petits mots qui relient les phrases",
    phraseUtile: "[A] と [B] (A et B)",
    vocab: utileVocab,
    questions: utileQuestions,
  },
];
