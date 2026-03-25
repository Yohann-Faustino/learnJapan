// Le catalogue centralise toutes les données des sections (caractères, vocabulaire, quiz) pour que la page hiragana n'ait plus besoin de répéter le code des switch a chaque nouveau case.

// 1. IMPORTS DES VOCABULAIRES
import { hiraganaVoyellesVocab } from "../hiraganaVocab/hiraganaVoyelles";
import { hiraganaKVocab } from "../hiraganaVocab/hiraganaConsonneK";
import { hiraganaSVocab } from "../hiraganaVocab/hiraganaConsonneS";
import { hiraganaTVocab } from "../hiraganaVocab/hiraganaConsonneT";
import { hiraganaNVocab } from "../hiraganaVocab/hiraganaConsonneN";
import { hiraganaHVocab } from "../hiraganaVocab/hiraganaConsonneH";
import { hiraganaMVocab } from "../hiraganaVocab/hiraganaConsonneM";
import { hiraganaYVocab } from "../hiraganaVocab/hiraganaConsonneY";
import { hiraganaRVocab } from "../hiraganaVocab/hiraganaConsonneR";
import { hiraganaWVocab } from "../hiraganaVocab/hiraganaConsonneW";
import { hiraganaDakutenVocab } from "../hiraganaVocab/hiraganaDakuten";
import { handakutenVocab } from "../hiraganaVocab/hiraganaHandakuten";
import { hiraganaCombiVocab } from "../hiraganaVocab/hiraganaCombi";
import { hiraganaExceptionsVocab } from "../hiraganaVocab/hiraganaExceptions";

// 2. IMPORTS DES QUESTIONS
import { hiraganaVoyellesQuestions } from "../hiraganaQuestions/hiraganaVoyellesQuestions";
import { hiraganaKQuestions } from "../hiraganaQuestions/hiraganaConsonneKQuestions";
import { hiraganaSQuestions } from "../hiraganaQuestions/hiraganaConsonneSQuestions";
import { hiraganaTQuestions } from "../hiraganaQuestions/hiraganaConsonneTQuestions";
import { hiraganaNQuestions } from "../hiraganaQuestions/hiraganaConsonneNQuestions";
import { hiraganaHQuestions } from "../hiraganaQuestions/hiraganaConsonneHQuestions";
import { hiraganaMQuestions } from "../hiraganaQuestions/hiraganaConsonneMQuestions";
import { hiraganaYQuestions } from "../hiraganaQuestions/hiraganaConsonneYQuestions";
import { hiraganaRQuestions } from "../hiraganaQuestions/hiraganaConsonneRQuestions";
import { hiraganaWQuestions } from "../hiraganaQuestions/hiraganaConsonneWQuestions";
import { hiraganaDakutenQuestions } from "../hiraganaQuestions/hiraganaDakutenQuestions";
import { handakutenQuestions } from "../hiraganaQuestions/hiraganaHandakutenQuestions";
import { hiraganaCombiQuestions } from "../hiraganaQuestions/hiraganaCombiQuestions";
import { hiraganaExceptionsQuestions } from "../hiraganaQuestions/hiraganaExceptionsQuestions";

// 3. CATALOGUE DES SECTIONS HIRAGANA
export const hiraganaCatalogue = [
  // 1. VOYELLES
  {
    id: "voyelles",
    label: "Voyelles",
    caracteres: [
      { char: "あ", romaji: "a", exemple: "papa" },
      { char: "い", romaji: "i", exemple: "ski" },
      { char: "う", romaji: "u", exemple: "loup" },
      { char: "え", romaji: "e", exemple: "été" },
      { char: "お", romaji: "o", exemple: "pot" },
    ],
    vocab: hiraganaVoyellesVocab,
    questions: hiraganaVoyellesQuestions,
  },

  // 2. K
  {
    id: "K",
    label: "K",
    caracteres: [
      { char: "か", romaji: "ka", exemple: "kaki" },
      { char: "き", romaji: "ki", exemple: "kilo" },
      { char: "く", romaji: "ku", exemple: "coup" },
      { char: "け", romaji: "ke", exemple: "képi" },
      { char: "こ", romaji: "ko", exemple: "colis" },
    ],
    vocab: hiraganaKVocab,
    questions: hiraganaKQuestions,
  },

  // 3. S
  {
    id: "S",
    label: "S",
    caracteres: [
      { char: "さ", romaji: "sa", exemple: "salade" },
      { char: "し", romaji: "shi", exemple: "chiche" },
      { char: "す", romaji: "su", exemple: "sucre" },
      { char: "せ", romaji: "se", exemple: "sel" },
      { char: "そ", romaji: "so", exemple: "salon" },
    ],
    vocab: hiraganaSVocab,
    questions: hiraganaSQuestions,
  },

  // 4. T
  {
    id: "T",
    label: "T",
    caracteres: [
      { char: "た", romaji: "ta", exemple: "tasse" },
      { char: "ち", romaji: "chi", exemple: "tchèque" },
      { char: "つ", romaji: "tsu", exemple: "tsunami" },
      { char: "て", romaji: "te", exemple: "terre" },
      { char: "と", romaji: "to", exemple: "tonne" },
    ],
    vocab: hiraganaTVocab,
    questions: hiraganaTQuestions,
  },

  // 5. N
  {
    id: "N",
    label: "N",
    caracteres: [
      { char: "な", romaji: "na", exemple: "nature" },
      { char: "に", romaji: "ni", exemple: "niche" },
      { char: "ぬ", romaji: "nu", exemple: "nuage" },
      { char: "ね", romaji: "ne", exemple: "net" },
      { char: "の", romaji: "no", exemple: "note" },
      { char: "ん", romaji: "n", exemple: "la lettre N" },
    ],
    vocab: hiraganaNVocab,
    questions: hiraganaNQuestions,
  },

  // 6. H
  {
    id: "H",
    label: "H",
    caracteres: [
      { char: "は", romaji: "ha", exemple: "haleine" },
      { char: "ひ", romaji: "hi", exemple: "histoire" },
      { char: "ふ", romaji: "fu", exemple: "houhou" },
      { char: "へ", romaji: "he", exemple: "héros" },
      { char: "ほ", romaji: "ho", exemple: "hôtel" },
    ],
    vocab: hiraganaHVocab,
    questions: hiraganaHQuestions,
  },

  // 7. M
  {
    id: "M",
    label: "M",
    caracteres: [
      { char: "ま", romaji: "ma", exemple: "maman" },
      { char: "み", romaji: "mi", exemple: "mile" },
      { char: "む", romaji: "mu", exemple: "mule" },
      { char: "め", romaji: "me", exemple: "métier" },
      { char: "も", romaji: "mo", exemple: "mobile" },
    ],
    vocab: hiraganaMVocab,
    questions: hiraganaMQuestions,
  },

  // 8. Y
  {
    id: "Y",
    label: "Y",
    caracteres: [
      { char: "や", romaji: "ya", exemple: "yacht" },
      { char: "ゆ", romaji: "yu", exemple: "youpin" },
      { char: "よ", romaji: "yo", exemple: "yoga" },
    ],
    vocab: hiraganaYVocab,
    questions: hiraganaYQuestions,
  },

  // 9. R
  {
    id: "R",
    label: "R",
    caracteres: [
      { char: "ら", romaji: "ra", exemple: "radar" },
      { char: "り", romaji: "ri", exemple: "rideau" },
      { char: "る", romaji: "ru", exemple: "ruse" },
      { char: "れ", romaji: "re", exemple: "relais" },
      { char: "ろ", romaji: "ro", exemple: "robot" },
    ],
    vocab: hiraganaRVocab,
    questions: hiraganaRQuestions,
  },

  // 10. W
  {
    id: "W",
    label: "W",
    caracteres: [
      { char: "わ", romaji: "wa", exemple: "wagon" },
      { char: "を", romaji: "wo", exemple: "particule (prononcé 'o')" },
      { char: "ん", romaji: "n", exemple: "la lettre N" },
    ],
    vocab: hiraganaWVocab,
    questions: hiraganaWQuestions,
  },

  // 11. DAKUTEN
  {
    id: "Dakuten",
    label: "Dakuten",
    caracteres: [
      { char: "がぎぐげご", romaji: "ga gi gu ge go", exemple: "série K → G" },
      { char: "ざじずぜぞ", romaji: "za ji zu ze zo", exemple: "série S → Z" },
      { char: "だぢづでど", romaji: "da ji zu de do", exemple: "série T → D" },
      { char: "ばびぶべぼ", romaji: "ba bi bu be bo", exemple: "série H → B" },
    ],
    vocab: hiraganaDakutenVocab,
    questions: hiraganaDakutenQuestions,
  },

  // 12. HANDAKUTEN
  {
    id: "Handakuten",
    label: "Handakuten",
    caracteres: [
      { char: "ぱぴぷぺぽ", romaji: "pa pi pu pe po", exemple: "série H → P" },
    ],
    vocab: handakutenVocab,
    questions: handakutenQuestions,
  },

  // 13. COMBINAISONS
  {
    id: "Combinaisons",
    label: "Combinaisons",
    caracteres: [
      { char: "きゃきゅきょ", romaji: "kya kyu kyo", exemple: "série K + y" },
      { char: "しゃしゅしょ", romaji: "sha shu sho", exemple: "série S + y" },
      { char: "ちゃちゅちょ", romaji: "cha chu cho", exemple: "série T + y" },
      { char: "にゃにゅにょ", romaji: "nya nyu nyo", exemple: "série N + y" },
      { char: "ひゃひゅひょ", romaji: "hya hyu hyo", exemple: "série H + y" },
      { char: "みゃみゅみょ", romaji: "mya myu myo", exemple: "série M + y" },
      { char: "りゃりゅりょ", romaji: "rya ryu ryo", exemple: "série R + y" },
      { char: "ぎゃぎゅぎょ", romaji: "gya gyu gyo", exemple: "dakuten + y" },
      { char: "じゃじゅじょ", romaji: "ja ju jo", exemple: "dakuten + y" },
      {
        char: "ぴゃぴゅぴょ",
        romaji: "pya pyu pyo",
        exemple: "handakuten + y",
      },
    ],
    vocab: hiraganaCombiVocab,
    questions: hiraganaCombiQuestions,
  },

  // 14. EXCEPTIONS
  {
    id: "Exceptions",
    label: "Exceptions",
    caracteres: [
      { char: "っ", romaji: "sokuon", exemple: "consonne doublée (petit tsu)" },
      { char: "ー", romaji: "chōonpu", exemple: "voyelle longue (trait)" },
      { char: "は (particule)", romaji: "wa", exemple: "se prononce 'wa'" },
      { char: "へ (particule)", romaji: "e", exemple: "se prononce 'e'" },
      { char: "を (particule)", romaji: "o", exemple: "se prononce 'o'" },
      { char: "ん", romaji: "n", exemple: "son nasal" },
    ],
    vocab: hiraganaExceptionsVocab,
    questions: hiraganaExceptionsQuestions,
  },
];
