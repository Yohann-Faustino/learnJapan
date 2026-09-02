// Le catalogue centralise toutes les données des sections (caractères, vocabulaire, quiz) pour que la page katakana n'ait plus besoin de répéter le code des switch a chaque nouveau case.

import { verbesPolisG1 } from "../verbesPolisVocab/verbesPolisG1Vocab";
//import { verbesPolisG2 } from "../verbesPolisVocab/verbesPolisG2Vocab";
//import { verbesPolisG3 } from "../verbesPolisVocab/verbesPolisG3Vocab";

import { verbesPolisG1Questions } from "../verbesPolisQuestions/verbesPolisG1Questions";
//import { verbesPolisG2Questions } from "../verbesPolisQuestions/verbesPolisG2Questions";
//import { verbesPolisG3Questions } from "../verbesPolisQuestions/verbesPolisG3Questions";

export const verbesPolisCatalogue = [
  {
    id: "groupe1",
    label: "Groupe 1 (う-verbes)",
    description: "15 verbes du groupe 1 - forme polie",
    regle: "Remplacer le う final par い + ます",
    exemples: [
      { base: "行く", forme: "行きます", romaji: "ikimasu" },
      { base: "話す", forme: "話します", romaji: "hanashimasu" },
    ],
    vocab: verbesPolisG1,
    questions: verbesPolisG1Questions,
  },
  /*{
    id: "groupe2",
    label: "Groupe 2 (る-verbes)",
    description: "10 verbes du groupe 2 - forme polie",
    regle: "Enlever le る + ます",
    exemples: [
      { base: "食べる", forme: "食べます", romaji: "tabemasu" },
      { base: "見る", forme: "見ます", romaji: "mimasu" },
    ],
    vocab: verbesPolisG2,
    questions: verbesPolisG2Questions,
  },
  {
    id: "groupe3",
    label: "Groupe 3 (verbes irréguliers)",
    description: "5 verbes irréguliers - forme polie",
    regle: "Mémoriser les 2 verbes de base + les composés",
    exemples: [
      { base: "する", forme: "します", romaji: "shimasu" },
      { base: "来る", forme: "来ます", romaji: "kimasu" },
    ],
    vocab: verbesPolisG3,
    questions: verbesPolisG3Questions,
  },*/
];
