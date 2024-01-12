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
    const shuffledWord = res[Math.floor(Math.random() * res.length)];
    return shuffledWord;
  }
);

export const englishSlice = createSlice({
  name: "english",
  initialState,
  reducers: {
    addWord: (state, action: PayloadAction<WordType>) => {
      state.myWords.push(action.payload);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(
      setWordsForLearning.fulfilled,
      (state, action: PayloadAction<WordType>) => {
        state.wordsForLearning.push(action.payload);
      }
    );
  },
});

export const { addWord } = englishSlice.actions;

export default englishSlice.reducer;
