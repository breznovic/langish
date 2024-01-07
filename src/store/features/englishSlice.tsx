import { createSlice } from "@reduxjs/toolkit";
import { WordType, englishWordsC1 } from "../englishWords";

const initialState: {
  englishWordsC1: WordType[];
  wordsForLearning: WordType[];
} = { englishWordsC1: englishWordsC1, wordsForLearning: [] };

export const englishSlice = createSlice({
  name: "english",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default englishSlice.reducer;
