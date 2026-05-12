// Le catalogue centralise toutes les données des sections (caractères, vocabulaire, quiz) pour que la page kanji n'ait plus besoin de répéter le code des switch a chaque nouveau case.

// 1. IMPORTS DES VOCABULAIRES
import { kanjiLot1Vocab } from "../kanjiVocab/kanjiLot1Vocab";
import { kanjiLot2Vocab } from "../kanjiVocab/kanjiLot2Vocab";

// 2. IMPORTS DES QUESTIONS
import { kanjiLot1Questions } from "../kanjiQuestions/kanjiLot1Questions";
import { kanjiLot2Questions } from "../kanjiQuestions/kanjiLot2Questions";

export const kanjiCatalogue = [
  {
    id: "lot1",
    label: "Kanji Lot 1",
    description: "Les nombres de 1 à 10",
    vocab: kanjiLot1Vocab,
    questions: kanjiLot1Questions,
  },
  {
    id: "lot2",
    label: "Kanji Lot 2",
    description: "Grands nombres, yen, jours de la semaine (partie 1)",
    vocab: kanjiLot2Vocab,
    questions: kanjiLot2Questions,
  },
];
