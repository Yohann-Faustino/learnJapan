import { verbesG1Vocab } from "../verbesVocab/verbesG1Vocab";
import { verbesG2Vocab } from "../verbesVocab/verbesG2Vocab";
import { verbesG3Vocab } from "../verbesVocab/verbesG3Vocab";

import { verbesG1Questions } from "../verbesQuestions/verbesG1Questions";
import { verbesG2Questions } from "../verbesQuestions/verbesG2Questions";
import { verbesG3Questions } from "../verbesQuestions/verbesG3Questions";

export const verbesCatalogue = [
  {
    id: "groupe1",
    label: "Groupe 1 (う-verbes)",
    description:
      "Les verbes qui se terminent par う, つ, る, む, ぶ, ぬ, く, す, ぐ",
    regle: "Forme ます : remplacer le う par い + ます",
    exemples: [
      { base: "行く", forme: "行きます", romaji: "ikimasu" },
      { base: "話す", forme: "話します", romaji: "hanashimasu" },
      { base: "読む", forme: "読みます", romaji: "yomimasu" },
    ],
    vocab: verbesG1Vocab,
    questions: verbesG1Questions,
  },

  {
    id: "groupe2",
    label: "Groupe 2 (る-verbes)",
    description: "Les verbes qui se terminent par る (avec い/え avant)",
    regle: "Forme ます : enlever le る + ます",
    exemples: [
      { base: "食べる", forme: "食べます", romaji: "tabemasu" },
      { base: "見る", forme: "見ます", romaji: "mimasu" },
      { base: "寝る", forme: "寝ます", romaji: "nemasu" },
    ],
    vocab: verbesG2Vocab,
    questions: verbesG2Questions,
  },

  {
    id: "groupe3",
    label: "Groupe 3 (verbes irréguliers)",
    description: "Deux verbes seulement, à mémoriser",
    regle: "する → します, 来る → 来ます",
    exemples: [
      { base: "する", forme: "します", romaji: "shimasu" },
      { base: "来る", forme: "来ます", romaji: "kimasu" },
      { base: "勉強する", forme: "勉強します", romaji: "benkyou shimasu" },
    ],
    vocab: verbesG3Vocab,
    questions: verbesG3Questions,
  },
];
