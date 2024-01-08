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
  {
    id: nanoid(8),
    word: "Bucolic",
    definition: "Relating to the pleasant aspects of the countryside",
  },
  {
    id: nanoid(8),
    word: "Cacophony",
    definition: "A harsh, discordant mixture of sounds",
  },
  {
    id: nanoid(8),
    word: "Debacle",
    definition: "A sudden and ignominious failure; a fiasco",
  },
  {
    id: nanoid(8),
    word: "Ebullient",
    definition: "Cheerful and full of energy",
  },
  {
    id: nanoid(8),
    word: "Facade",
    definition:
      "An outward appearance that is maintained to conceal a less pleasant reality",
  },
  {
    id: nanoid(8),
    word: "Garrulous",
    definition: "Excessively talkative, especially on trivial matters",
  },
  {
    id: nanoid(8),
    word: "Hapless",
    definition: "Unfortunate; having bad luck",
  },
  {
    id: nanoid(8),
    word: "Iconoclast",
    definition: "A person who attacks cherished beliefs or institutions",
  },
  {
    id: nanoid(8),
    word: "Juxtaposition",
    definition:
      "The fact of two things being seen or placed close together with contrasting effect",
  },
];
