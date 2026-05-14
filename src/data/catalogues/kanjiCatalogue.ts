// Le catalogue centralise toutes les données des sections (caractères, vocabulaire, quiz) pour que la page kanji n'ait plus besoin de répéter le code des switch a chaque nouveau case.

// 1. IMPORTS DES VOCABULAIRES
import { kanjiLot1Vocab } from "../kanjiVocab/kanjiLot1Vocab";
import { kanjiLot2Vocab } from "../kanjiVocab/kanjiLot2Vocab";
import { kanjiLot3Vocab } from "../kanjiVocab/kanjiLot3Vocab";
import { kanjiLot4Vocab } from "../kanjiVocab/kanjiLot4Vocab";

// 2. IMPORTS DES QUESTIONS
import { kanjiLot1Questions } from "../kanjiQuestions/kanjiLot1Questions";
import { kanjiLot2Questions } from "../kanjiQuestions/kanjiLot2Questions";
import { kanjiLot3Questions } from "../kanjiQuestions/kanjiLot3Questions";
import { kanjiLot4Questions } from "../kanjiQuestions/kanjiLot4Questions";

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
  {
    id: "lot3",
    label: "Kanji Lot 3",
    description: "Métaux, directions, tailles, nature",
    vocab: kanjiLot3Vocab,
    questions: kanjiLot3Questions,
  },
  {
    id: "lot4",
    label: "Kanji Lot 4 (31-40)",
    description: "Le corps humain et les actions de base",
    vocab: kanjiLot4Vocab,
    questions: kanjiLot4Questions,
  },
];
