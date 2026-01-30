import type { Question } from "../types/Question";

export const hiraganaVoyellesQuestions: Question[] = [
  // QUESTIONS 1-11 : MÊMES MOTS QUE DANS hiraganaVoyellesVocab
  {
    id: 1,
    category: "hiragana",
    subCategory: "voyelles",
    question: "Comment se prononce le mot あい ?",
    options: [
      { text: "ai", correct: true },
      { text: "ii", correct: false },
      { text: "ae", correct: false },
      { text: "ua", correct: false },
    ],
  },
  {
    id: 2,
    category: "hiragana",
    subCategory: "voyelles",
    question: "Comment se prononce le mot いい ?",
    options: [
      { text: "ii", correct: true },
      { text: "oo", correct: false },
      { text: "aa", correct: false },
      { text: "ee", correct: false },
    ],
  },
  {
    id: 3,
    category: "hiragana",
    subCategory: "voyelles",
    question: "Comment se prononce le mot あう ?",
    options: [
      { text: "au", correct: true },
      { text: "aa", correct: false },
      { text: "ai", correct: false },
      { text: "ou", correct: false },
    ],
  },
  {
    id: 4,
    category: "hiragana",
    subCategory: "voyelles",
    question: "Comment se prononce le mot あお ?",
    options: [
      { text: "ao", correct: true },
      { text: "oa", correct: false },
      { text: "oo", correct: false },
      { text: "oi", correct: false },
    ],
  },
  {
    id: 5,
    category: "hiragana",
    subCategory: "voyelles",
    question: "Comment se prononce le mot うお ?",
    options: [
      { text: "uo", correct: true },
      { text: "ou", correct: false },
      { text: "oo", correct: false },
      { text: "io", correct: false },
    ],
  },
  {
    id: 6,
    category: "hiragana",
    subCategory: "voyelles",
    question: "Comment se prononce le mot ええ ?",
    options: [
      { text: "ee", correct: true },
      { text: "ii", correct: false },
      { text: "aa", correct: false },
      { text: "uu", correct: false },
    ],
  },
  {
    id: 7,
    category: "hiragana",
    subCategory: "voyelles",
    question: "Comment se prononce le mot おお ?",
    options: [
      { text: "oo", correct: true },
      { text: "uu", correct: false },
      { text: "aa", correct: false },
      { text: "ii", correct: false },
    ],
  },
  {
    id: 8,
    category: "hiragana",
    subCategory: "voyelles",
    question: "Comment se prononce le mot いう ?",
    options: [
      { text: "iu", correct: true },
      { text: "ii", correct: false },
      { text: "ie", correct: false },
      { text: "ai", correct: false },
    ],
  },
  {
    id: 9,
    category: "hiragana",
    subCategory: "voyelles",
    question: "Comment se prononce le mot うえ ?",
    options: [
      { text: "ue", correct: true },
      { text: "ie", correct: false },
      { text: "eu", correct: false },
      { text: "oi", correct: false },
    ],
  },
  {
    id: 10,
    category: "hiragana",
    subCategory: "voyelles",
    question: "Comment se prononce le mot あおい ?",
    options: [
      { text: "aoi", correct: true },
      { text: "oai", correct: false },
      { text: "aou", correct: false },
      { text: "oui", correct: false },
    ],
  },
  {
    id: 11,
    category: "hiragana",
    subCategory: "voyelles",
    question: "Comment se prononce le mot いいえ ?",
    options: [
      { text: "iie", correct: true },
      { text: "iee", correct: false },
      { text: "eii", correct: false },
      { text: "ieu", correct: false },
    ],
  },

  // QUESTIONS 12-16 : IDENTIFICATION DES HIRAGANA (pour compléter à 16 questions)
  {
    id: 12,
    category: "hiragana",
    subCategory: "voyelles",
    question: "Quel est l'hiragana 'a' ?",
    options: [
      { text: "あ", correct: true },
      { text: "い", correct: false },
      { text: "う", correct: false },
      { text: "え", correct: false },
    ],
  },
  {
    id: 13,
    category: "hiragana",
    subCategory: "voyelles",
    question: "Quel est l'hiragana 'i' ?",
    options: [
      { text: "い", correct: true },
      { text: "あ", correct: false },
      { text: "う", correct: false },
      { text: "お", correct: false },
    ],
  },
  {
    id: 14,
    category: "hiragana",
    subCategory: "voyelles",
    question: "Quel est l'hiragana 'u' ?",
    options: [
      { text: "う", correct: true },
      { text: "い", correct: false },
      { text: "え", correct: false },
      { text: "お", correct: false },
    ],
  },
  {
    id: 15,
    category: "hiragana",
    subCategory: "voyelles",
    question: "Quel est l'hiragana 'e' ?",
    options: [
      { text: "え", correct: true },
      { text: "あ", correct: false },
      { text: "い", correct: false },
      { text: "お", correct: false },
    ],
  },
  {
    id: 16,
    category: "hiragana",
    subCategory: "voyelles",
    question: "Quel est l'hiragana 'o' ?",
    options: [
      { text: "お", correct: true },
      { text: "あ", correct: false },
      { text: "い", correct: false },
      { text: "う", correct: false },
    ],
  },
];

// VOCABULAIRE (LES MÊMES 11 MOTS QUE DANS LES QUESTIONS 1-11)
export const hiraganaVoyellesVocab = [
  { jp: "あい", romaji: "ai", fr: "amour" },
  { jp: "いい", romaji: "ii", fr: "bon / bien" },
  { jp: "あう", romaji: "au", fr: "rencontrer" },
  { jp: "あお", romaji: "ao", fr: "bleu (nom)" },
  { jp: "うお", romaji: "uo", fr: "poisson" },
  { jp: "ええ", romaji: "ee", fr: "oui" },
  { jp: "おお", romaji: "oo", fr: "grand / beaucoup" },
  { jp: "いう", romaji: "iu", fr: "dire" },
  { jp: "うえ", romaji: "ue", fr: "au-dessus" },
  { jp: "あおい", romaji: "aoi", fr: "bleu (adjectif)" },
  { jp: "いいえ", romaji: "iie", fr: "non" },
];
