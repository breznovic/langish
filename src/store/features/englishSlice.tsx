import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { WordType, englishWordsC1 } from "../englishWords";

const initialState: {
  englishWordsC1: WordType[];
  myWords: WordType[];
  wordsForLearning: WordType[];
} = { englishWordsC1: englishWordsC1, myWords: [], wordsForLearning: [] };

export const setWordsForLearning = createAsyncThunk(
  "english/setWordsForLearning",
  async () => {
    const res = await Promise.resolve(englishWordsC1);
    let selectedWord = res
      .slice()
      .sort(() => Math.random() - 0.5)
      .slice(0, 1);
    return selectedWord;
  }
);

export const englishSlice = createSlice({
  name: "english",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      setWordsForLearning.fulfilled,
      (state, action: PayloadAction<WordType[]>) => {
        state.wordsForLearning.push(...action.payload);
      }
    );
  },
});

export default englishSlice.reducer;
