import { nanoid } from "@reduxjs/toolkit";

export type WordType = {
  id: string;
  word: string;
  definition: string;
};

export let englishWordsC1: WordType[] = [
  { id: nanoid(8), word: "Abasement", definition: "humiliation; degradation" },
  { id: nanoid(8), word: "Abate", definition: "reduce in intensity" },
  {
    id: nanoid(8),
    word: "Aberration",
    definition: "deviation from the normal",
  },
];
