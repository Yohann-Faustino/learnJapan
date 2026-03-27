// Le catalogue centralise toutes les données des sections (caractères, vocabulaire, quiz) pour que la page katakana n'ait plus besoin de répéter le code des switch a chaque nouveau case.

// 1. IMPORTS DES VOCABULAIRES
import { katakanaVoyellesVocab } from "../katakanaVocab/katakanaVoyelles";
import { katakanaKVocab } from "../katakanaVocab/katakanaConsonneK";
import { katakanaSVocab } from "../katakanaVocab/katakanaConsonneS";
import { katakanaTVocab } from "../katakanaVocab/katakanaConsonneT";
import { katakanaNVocab } from "../katakanaVocab/katakanaConsonneN";
import { katakanaHVocab } from "../katakanaVocab/katakanaConsonneH";
import { katakanaMVocab } from "../katakanaVocab/katakanaConsonneM";
import { katakanaYVocab } from "../katakanaVocab/katakanaConsonneY";
import { katakanaRVocab } from "../katakanaVocab/katakanaConsonneR";
import { katakanaWVocab } from "../katakanaVocab/katakanaConsonneW";
import { katakanaDakutenVocab } from "../katakanaVocab/katakanaDakuten";
import { katakanaHandakutenVocab } from "../katakanaVocab/katakanaHandakuten";
import { katakanaCombiVocab } from "../katakanaVocab/katakanaCombi";
import { katakanaExceptionsVocab } from "../katakanaVocab/katakanaExceptions";

// 2. IMPORTS DES QUESTIONS
import { katakanaVoyellesQuestions } from "../katakanaQuestions/katakanaVoyellesQuestions";
import { katakanaKQuestions } from "../katakanaQuestions/katakanaConsonneKQuestions";
import { katakanaSQuestions } from "../katakanaQuestions/katakanaConsonneSQuestions";
import { katakanaTQuestions } from "../katakanaQuestions/katakanaConsonneTQuestions";
import { katakanaNQuestions } from "../katakanaQuestions/katakanaConsonneNQuestions";
import { katakanaHQuestions } from "../katakanaQuestions/katakanaConsonneHQuestions";
import { katakanaMQuestions } from "../katakanaQuestions/katakanaConsonneMQuestions";
import { katakanaYQuestions } from "../katakanaQuestions/katakanaConsonneYQuestions";
import { katakanaRQuestions } from "../katakanaQuestions/katakanaConsonneRQuestions";
import { katakanaWQuestions } from "../katakanaQuestions/katakanaConsonneWQuestions";
import { katakanaDakutenQuestions } from "../katakanaQuestions/katakanaDakutenQuestions";
import { katakanaHandakutenQuestions } from "../katakanaQuestions/katakanaHandakutenQuestions";
import { katakanaCombiQuestions } from "../katakanaQuestions/katakanaCombiQuestions";
import { katakanaExceptionsQuestions } from "../katakanaQuestions/katakanaExceptionsQuestions";

// 3. CATALOGUE DES SECTIONS KATAKANA
export const katakanaCatalogue = [
  // 1. VOYELLES
  {
    id: "voyelles",
    label: "Voyelles",
    caracteres: [
      { char: "ア", romaji: "a", exemple: "papa" },
      { char: "イ", romaji: "i", exemple: "ski" },
      { char: "ウ", romaji: "u", exemple: "loup" },
      { char: "エ", romaji: "e", exemple: "été" },
      { char: "オ", romaji: "o", exemple: "pot" },
    ],
    vocab: katakanaVoyellesVocab,
    questions: katakanaVoyellesQuestions,
  },

  // 2. K
  {
    id: "K",
    label: "K",
    caracteres: [
      { char: "カ", romaji: "ka", exemple: "kaki" },
      { char: "キ", romaji: "ki", exemple: "kilo" },
      { char: "ク", romaji: "ku", exemple: "coup" },
      { char: "ケ", romaji: "ke", exemple: "képi" },
      { char: "コ", romaji: "ko", exemple: "colis" },
    ],
    vocab: katakanaKVocab,
    questions: katakanaKQuestions,
  },

  // 3. S
  {
    id: "S",
    label: "S",
    caracteres: [
      { char: "サ", romaji: "sa", exemple: "salade" },
      { char: "シ", romaji: "shi", exemple: "chiche" },
      { char: "ス", romaji: "su", exemple: "sucre" },
      { char: "セ", romaji: "se", exemple: "sel" },
      { char: "ソ", romaji: "so", exemple: "salon" },
    ],
    vocab: katakanaSVocab,
    questions: katakanaSQuestions,
  },

  // 4. T
  {
    id: "T",
    label: "T",
    caracteres: [
      { char: "タ", romaji: "ta", exemple: "tasse" },
      { char: "チ", romaji: "chi", exemple: "tchèque" },
      { char: "ツ", romaji: "tsu", exemple: "tsunami" },
      { char: "テ", romaji: "te", exemple: "terre" },
      { char: "ト", romaji: "to", exemple: "tonne" },
    ],
    vocab: katakanaTVocab,
    questions: katakanaTQuestions,
  },

  // 5. N
  {
    id: "N",
    label: "N",
    caracteres: [
      { char: "ナ", romaji: "na", exemple: "nature" },
      { char: "ニ", romaji: "ni", exemple: "niche" },
      { char: "ヌ", romaji: "nu", exemple: "nuage" },
      { char: "ネ", romaji: "ne", exemple: "net" },
      { char: "ノ", romaji: "no", exemple: "note" },
      { char: "ン", romaji: "n", exemple: "la lettre N" },
    ],
    vocab: katakanaNVocab,
    questions: katakanaNQuestions,
  },

  // 6. H
  {
    id: "H",
    label: "H",
    caracteres: [
      { char: "ハ", romaji: "ha", exemple: "haleine" },
      { char: "ヒ", romaji: "hi", exemple: "histoire" },
      { char: "フ", romaji: "fu", exemple: "houhou" },
      { char: "ヘ", romaji: "he", exemple: "héros" },
      { char: "ホ", romaji: "ho", exemple: "hôtel" },
    ],
    vocab: katakanaHVocab,
    questions: katakanaHQuestions,
  },

  // 7. M
  {
    id: "M",
    label: "M",
    caracteres: [
      { char: "マ", romaji: "ma", exemple: "maman" },
      { char: "ミ", romaji: "mi", exemple: "mile" },
      { char: "ム", romaji: "mu", exemple: "mule" },
      { char: "メ", romaji: "me", exemple: "métier" },
      { char: "モ", romaji: "mo", exemple: "mobile" },
    ],
    vocab: katakanaMVocab,
    questions: katakanaMQuestions,
  },

  // 8. Y
  {
    id: "Y",
    label: "Y",
    caracteres: [
      { char: "ヤ", romaji: "ya", exemple: "yacht" },
      { char: "ユ", romaji: "yu", exemple: "youpin" },
      { char: "ヨ", romaji: "yo", exemple: "yoga" },
    ],
    vocab: katakanaYVocab,
    questions: katakanaYQuestions,
  },

  // 9. R
  {
    id: "R",
    label: "R",
    caracteres: [
      { char: "ラ", romaji: "ra", exemple: "radar" },
      { char: "リ", romaji: "ri", exemple: "rideau" },
      { char: "ル", romaji: "ru", exemple: "ruse" },
      { char: "レ", romaji: "re", exemple: "relais" },
      { char: "ロ", romaji: "ro", exemple: "robot" },
    ],
    vocab: katakanaRVocab,
    questions: katakanaRQuestions,
  },

  // 10. W
  {
    id: "W",
    label: "W",
    caracteres: [
      { char: "ワ", romaji: "wa", exemple: "wagon" },
      { char: "ヲ", romaji: "wo", exemple: "particule (prononcé 'o')" },
      { char: "ン", romaji: "n", exemple: "la lettre N" },
    ],
    vocab: katakanaWVocab,
    questions: katakanaWQuestions,
  },

  // 11. DAKUTEN
  {
    id: "Dakuten",
    label: "Dakuten",
    caracteres: [
      { char: "ガギグゲゴ", romaji: "ga gi gu ge go", exemple: "série K → G" },
      { char: "ザジズゼゾ", romaji: "za ji zu ze zo", exemple: "série S → Z" },
      { char: "ダヂヅデド", romaji: "da ji zu de do", exemple: "série T → D" },
      { char: "バビブベボ", romaji: "ba bi bu be bo", exemple: "série H → B" },
    ],
    vocab: katakanaDakutenVocab,
    questions: katakanaDakutenQuestions,
  },

  // 12. HANDAKUTEN
  {
    id: "Handakuten",
    label: "Handakuten",
    caracteres: [
      { char: "パピプペポ", romaji: "pa pi pu pe po", exemple: "série H → P" },
    ],
    vocab: katakanaHandakutenVocab,
    questions: katakanaHandakutenQuestions,
  },

  // 13. COMBINAISONS
  {
    id: "Combinaisons",
    label: "Combinaisons",
    caracteres: [
      { char: "キャキュキョ", romaji: "kya kyu kyo", exemple: "série K + y" },
      { char: "シャシュショ", romaji: "sha shu sho", exemple: "série S + y" },
      { char: "チャチュチョ", romaji: "cha chu cho", exemple: "série T + y" },
      { char: "ニャニュニョ", romaji: "nya nyu nyo", exemple: "série N + y" },
      { char: "ヒャヒュヒョ", romaji: "hya hyu hyo", exemple: "série H + y" },
      { char: "ミャミュミョ", romaji: "mya myu myo", exemple: "série M + y" },
      { char: "リャリュリョ", romaji: "rya ryu ryo", exemple: "série R + y" },
      { char: "ギャギュギョ", romaji: "gya gyu gyo", exemple: "dakuten + y" },
      { char: "ジャジュジョ", romaji: "ja ju jo", exemple: "dakuten + y" },
      {
        char: "ピャピュピョ",
        romaji: "pya pyu pyo",
        exemple: "handakuten + y",
      },
    ],
    vocab: katakanaCombiVocab,
    questions: katakanaCombiQuestions,
  },

  // 14. EXCEPTIONS
  {
    id: "Exceptions",
    label: "Exceptions",
    caracteres: [
      { char: "ッ", romaji: "sokuon", exemple: "consonne doublée (petit tsu)" },
      { char: "ー", romaji: "chōonpu", exemple: "voyelle longue (trait)" },
      { char: "ハ (particule)", romaji: "wa", exemple: "se prononce 'wa'" },
      { char: "ヘ (particule)", romaji: "e", exemple: "se prononce 'e'" },
      { char: "ヲ (particule)", romaji: "o", exemple: "se prononce 'o'" },
      { char: "ン", romaji: "n", exemple: "son nasal" },
    ],
    vocab: katakanaExceptionsVocab,
    questions: katakanaExceptionsQuestions,
  },
];
