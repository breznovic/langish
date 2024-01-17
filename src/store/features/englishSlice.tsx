import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { WordType, englishWordsC1 } from "../englishWords";
import { loadDataFromLocalStorage } from "../../components/common/localStorageUtils/localStorageUtils";

const initialState: {
  englishWordsC1: WordType[];
  myWords: WordType[];
  wordsForLearning: WordType[];
} = {
  englishWordsC1: loadDataFromLocalStorage("englishWordsC1") || englishWordsC1,
  myWords: loadDataFromLocalStorage("myWords") || [],
  wordsForLearning: loadDataFromLocalStorage("wordsForLearning") || [],
};

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
  reducers: {
    addWordForLearning: (state, action: PayloadAction<WordType>) => {
      const wordToAdd = action.payload;
      const isWordUnique = !state.myWords.some(
        (word) => word.id === wordToAdd.id
      );
      if (isWordUnique) {
        state.myWords.push(wordToAdd);
      }
      const arrayWithDeletedWord = state.wordsForLearning.filter(
        (word) => word.id !== wordToAdd.id
      );
      state.wordsForLearning = arrayWithDeletedWord;
    },
    deleteWord: (state, action: PayloadAction<string>) => {
      const wordIdToDelete = action.payload;

      state.englishWordsC1 = state.englishWordsC1.filter(
        (word) => word.id !== wordIdToDelete
      );

      state.myWords = state.myWords.filter(
        (word) => word.id !== wordIdToDelete
      );

      state.wordsForLearning = state.wordsForLearning.filter(
        (word) => word.id !== wordIdToDelete
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      setWordForLearning.fulfilled,
      (state, action: PayloadAction<WordType>) => {
        const wordToAdd = action.payload;
        const isWordUnique = !state.wordsForLearning.some(
          (word) => word.id === wordToAdd.id
        );
        if (isWordUnique) {
          state.wordsForLearning.push(wordToAdd);
        }
      }
    );
  },
});

export const { addWordForLearning, deleteWord } = englishSlice.actions;

export default englishSlice.reducer;
