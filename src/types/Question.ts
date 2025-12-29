export type Example = {
  word: string;
  meaning: string;
};

export type Option = {
  text: string;
  correct: boolean;
};

export type Question = {
  id: number;
  category: string;
  subCategory: string;
  question: string;
  options: Option[];
  examples?: Example[];
  audioUrl?: string;
};
