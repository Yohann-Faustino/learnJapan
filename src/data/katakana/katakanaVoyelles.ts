// src/data/katakana/katakanaVoyelles.ts
import type { Question } from "../../types/Question";

export const katakanaVoyellesQuestions: Question[] = [
  // QUESTIONS 1-11 : MÊMES MOTS QUE DANS katakanaVoyellesVocab
  {
    id: 1,
    category: "katakana",
    subCategory: "voyelles",
    question: "Comment se prononce le mot アイ ?",
    options: [
      { text: "ai", correct: true },
      { text: "ii", correct: false },
      { text: "ae", correct: false },
      { text: "ua", correct: false },
    ],
  },
  {
    id: 2,
    category: "katakana",
    subCategory: "voyelles",
    question: "Comment se prononce le mot イイ ?",
    options: [
      { text: "ii", correct: true },
      { text: "oo", correct: false },
      { text: "aa", correct: false },
      { text: "ee", correct: false },
    ],
  },
  {
    id: 3,
    category: "katakana",
    subCategory: "voyelles",
    question: "Comment se prononce le mot アウ ?",
    options: [
      { text: "au", correct: true },
      { text: "aa", correct: false },
      { text: "ai", correct: false },
      { text: "ou", correct: false },
    ],
  },
  {
    id: 4,
    category: "katakana",
    subCategory: "voyelles",
    question: "Comment se prononce le mot アオ ?",
    options: [
      { text: "ao", correct: true },
      { text: "oa", correct: false },
      { text: "oo", correct: false },
      { text: "oi", correct: false },
    ],
  },
  {
    id: 5,
    category: "katakana",
    subCategory: "voyelles",
    question: "Comment se prononce le mot ウオ ?",
    options: [
      { text: "uo", correct: true },
      { text: "ou", correct: false },
      { text: "oo", correct: false },
      { text: "io", correct: false },
    ],
  },
  {
    id: 6,
    category: "katakana",
    subCategory: "voyelles",
    question: "Comment se prononce le mot エエ ?",
    options: [
      { text: "ee", correct: true },
      { text: "ii", correct: false },
      { text: "aa", correct: false },
      { text: "uu", correct: false },
    ],
  },
  {
    id: 7,
    category: "katakana",
    subCategory: "voyelles",
    question: "Comment se prononce le mot オオ ?",
    options: [
      { text: "oo", correct: true },
      { text: "uu", correct: false },
      { text: "aa", correct: false },
      { text: "ii", correct: false },
    ],
  },
  {
    id: 8,
    category: "katakana",
    subCategory: "voyelles",
    question: "Comment se prononce le mot イウ ?",
    options: [
      { text: "iu", correct: true },
      { text: "ii", correct: false },
      { text: "ie", correct: false },
      { text: "ai", correct: false },
    ],
  },
  {
    id: 9,
    category: "katakana",
    subCategory: "voyelles",
    question: "Comment se prononce le mot ウエ ?",
    options: [
      { text: "ue", correct: true },
      { text: "ie", correct: false },
      { text: "eu", correct: false },
      { text: "oi", correct: false },
    ],
  },
  {
    id: 10,
    category: "katakana",
    subCategory: "voyelles",
    question: "Comment se prononce le mot アオイ ?",
    options: [
      { text: "aoi", correct: true },
      { text: "oai", correct: false },
      { text: "aou", correct: false },
      { text: "oui", correct: false },
    ],
  },
  {
    id: 11,
    category: "katakana",
    subCategory: "voyelles",
    question: "Comment se prononce le mot イイエ ?",
    options: [
      { text: "iie", correct: true },
      { text: "iee", correct: false },
      { text: "eii", correct: false },
      { text: "ieu", correct: false },
    ],
  },

  // QUESTIONS 12-16 : IDENTIFICATION DES KATAKANA (POUR AVOIR 16 QUESTIONS)
  {
    id: 12,
    category: "katakana",
    subCategory: "voyelles",
    question: "Quel est le katakana 'a' ?",
    options: [
      { text: "ア", correct: true },
      { text: "イ", correct: false },
      { text: "ウ", correct: false },
      { text: "エ", correct: false },
    ],
  },
  {
    id: 13,
    category: "katakana",
    subCategory: "voyelles",
    question: "Quel est le katakana 'i' ?",
    options: [
      { text: "イ", correct: true },
      { text: "ア", correct: false },
      { text: "ウ", correct: false },
      { text: "オ", correct: false },
    ],
  },
  {
    id: 14,
    category: "katakana",
    subCategory: "voyelles",
    question: "Quel est le katakana 'u' ?",
    options: [
      { text: "ウ", correct: true },
      { text: "イ", correct: false },
      { text: "エ", correct: false },
      { text: "オ", correct: false },
    ],
  },
  {
    id: 15,
    category: "katakana",
    subCategory: "voyelles",
    question: "Quel est le katakana 'e' ?",
    options: [
      { text: "エ", correct: true },
      { text: "ア", correct: false },
      { text: "イ", correct: false },
      { text: "オ", correct: false },
    ],
  },
  {
    id: 16,
    category: "katakana",
    subCategory: "voyelles",
    question: "Quel est le katakana 'o' ?",
    options: [
      { text: "オ", correct: true },
      { text: "ア", correct: false },
      { text: "イ", correct: false },
      { text: "ウ", correct: false },
    ],
  },
];

// VOCABULAIRE (LES MÊMES 11 MOTS QUE DANS LES QUESTIONS 1-11)
export const katakanaVoyellesVocab = [
  { jp: "アイ", romaji: "ai", fr: "amour" },
  { jp: "イイ", romaji: "ii", fr: "bon / bien" },
  { jp: "アウ", romaji: "au", fr: "rencontrer" },
  { jp: "アオ", romaji: "ao", fr: "bleu (nom)" },
  { jp: "ウオ", romaji: "uo", fr: "poisson" },
  { jp: "エエ", romaji: "ee", fr: "oui" },
  { jp: "オオ", romaji: "oo", fr: "grand / beaucoup" },
  { jp: "イウ", romaji: "iu", fr: "dire" },
  { jp: "ウエ", romaji: "ue", fr: "au-dessus" },
  { jp: "アオイ", romaji: "aoi", fr: "bleu (adjectif)" },
  { jp: "イイエ", romaji: "iie", fr: "non" },
];
