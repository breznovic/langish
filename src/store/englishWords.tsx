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
  {
    id: nanoid(8),
    word: "Beak",
    definition: "horny projecting mouth of a bird",
  },
  {
    id: nanoid(8),
    word: "Bet",
    definition: "stake on the outcome of an issue",
  },
  { id: nanoid(8), word: "Bid", definition: "propose a payment" },
  { id: nanoid(8), word: "Broadly", definition: "in a wide fashion" },
  {
    id: nanoid(8),
    word: "Bubble",
    definition: "a hollow globule of gas (e.g., air or carbon dioxide)",
  },
];
