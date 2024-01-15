import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { WordType, englishWordsC1 } from "../englishWords";

const initialState: {
  englishWordsC1: WordType[];
  myWords: WordType[];
  wordsForLearning: WordType[];
} = { englishWordsC1: englishWordsC1, myWords: [], wordsForLearning: [] };

export const setWordForLearning = createAsyncThunk(
  "english/setWordForLearning",
  async () => {
    const randomWord =
      englishWordsC1[Math.floor(Math.random() * englishWordsC1.length)];
    return randomWord;
  }
);

export const englishSlice = createSlice({
  name: "english",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(
      setWordForLearning.fulfilled,
      (state, action: PayloadAction<WordType>) => {
        state.wordsForLearning.push(action.payload);
      }
    );
  },
});

export default englishSlice.reducer;
