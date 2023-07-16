import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { WordType, englishWordsC1 } from "../englishWords";

const initialState: { englishWordsC1: WordType[] } = { englishWordsC1: [] };

export const setWords = createAsyncThunk("english/setWords", async () => {
  const res = await Promise.resolve(englishWordsC1);
  let englishWordsForLearning: WordType | undefined = res.find(
    (w) => w.id === w.id
  );
  return englishWordsForLearning;
});

export const englishSlice = createSlice({
  name: "english",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setWords.fulfilled, (state, action) => {
      if (action.payload) {
        state.englishWordsC1.push(action.payload);
      }
    });
  },
});

export default englishSlice.reducer;
