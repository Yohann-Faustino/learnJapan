// Le catalogue centralise toutes les données des sections (caractères, vocabulaire, quiz) pour que la page kanji n'ait plus besoin de répéter le code des switch a chaque nouveau case.

// 1. IMPORTS DES VOCABULAIRES
import { kanjiLot1Vocab } from "../kanjiVocab/kanjiLot1Vocab";

// 2. IMPORTS DES QUESTIONS
import { kanjiLot1Questions } from "../kanjiQuestions/kanjiLot1Questions";

export const kanjiCatalogue = [
  {
    id: "lot1",
    label: "Kanji Lot 1 (1-10)",
    description: "Les nombres de 1 à 10",
    vocab: kanjiLot1Vocab,
    questions: kanjiLot1Questions,
  },
];
