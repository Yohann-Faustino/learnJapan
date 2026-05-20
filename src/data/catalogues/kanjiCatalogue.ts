// Le catalogue centralise toutes les données des sections (caractères, vocabulaire, quiz) pour que la page kanji n'ait plus besoin de répéter le code des switch a chaque nouveau case.

// 1. IMPORTS DES VOCABULAIRES
import { kanjiLot1Vocab } from "../kanjiVocab/kanjiLot1Vocab";
import { kanjiLot2Vocab } from "../kanjiVocab/kanjiLot2Vocab";
import { kanjiLot3Vocab } from "../kanjiVocab/kanjiLot3Vocab";
import { kanjiLot4Vocab } from "../kanjiVocab/kanjiLot4Vocab";
import { kanjiLot5Vocab } from "../kanjiVocab/kanjiLot5Vocab";
import { kanjiLot6Vocab } from "../kanjiVocab/kanjiLot6Vocab";
import { kanjiLot7Vocab } from "../kanjiVocab/kanjiLot7Vocab";
import { kanjiLot8Vocab } from "../kanjiVocab/kanjiLot8Vocab";

// 2. IMPORTS DES QUESTIONS
import { kanjiLot1Questions } from "../kanjiQuestions/kanjiLot1Questions";
import { kanjiLot2Questions } from "../kanjiQuestions/kanjiLot2Questions";
import { kanjiLot3Questions } from "../kanjiQuestions/kanjiLot3Questions";
import { kanjiLot4Questions } from "../kanjiQuestions/kanjiLot4Questions";
import { kanjiLot5Questions } from "../kanjiQuestions/kanjiLot5Questions";
import { kanjiLot6Questions } from "../kanjiQuestions/kanjiLot6Questions";
import { kanjiLot7Questions } from "../kanjiQuestions/kanjiLot7Questions";
import { kanjiLot8Questions } from "../kanjiQuestions/kanjiLot8Questions";

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
    label: "Kanji Lot 4",
    description: "Le corps humain et les actions de base",
    vocab: kanjiLot4Vocab,
    questions: kanjiLot4Questions,
  },
  {
    id: "lot5",
    label: "Kanji Lot 5",
    description: "Les verbes d'action essentiels",
    vocab: kanjiLot5Vocab,
    questions: kanjiLot5Questions,
  },
  {
    id: "lot6",
    label: "Kanji Lot 6",
    description: "Les verbes du quotidien",
    vocab: kanjiLot6Vocab,
    questions: kanjiLot6Questions,
  },
  {
    id: "lot7",
    label: "Kanji Lot 7",
    description: "Les adjectifs du quotidien",
    vocab: kanjiLot7Vocab,
    questions: kanjiLot7Questions,
  },
  {
    id: "lot8",
    label: "Kanji Lot 8 (71-80)",
    description: "Les contraires : température, quantité, force",
    vocab: kanjiLot8Vocab,
    questions: kanjiLot8Questions,
  },
];
