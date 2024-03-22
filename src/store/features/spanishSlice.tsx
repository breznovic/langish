import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { WordType } from "../words/englishWords";
import { loadDataFromLocalStorage } from "../../components/common/localStorageUtils/localStorageUtils";
import { spanishWordsA1 } from "../words/spanishWords";

const initialState: {
  spanishWordsA1: WordType[];
  myWords: WordType[];
  wordsForLearning: WordType[];
  isActive: boolean;
} = {
  spanishWordsA1: loadDataFromLocalStorage("spanishWordsA1") || spanishWordsA1,
  myWords: loadDataFromLocalStorage("mySpanishWords") || [],
  wordsForLearning: loadDataFromLocalStorage("spanishWordsForLearning") || [],
  isActive: false,
};

export const setSpanishWordForLearning = createAsyncThunk(
  "spanish/setWordForLearning",
  async () => {
    const randomWord =
      spanishWordsA1[Math.floor(Math.random() * spanishWordsA1.length)];
    return randomWord;
  }
);

export const spanishSlice = createSlice({
  name: "spanish",
  initialState,
  reducers: {
    addSpanishWordForLearning: (state, action: PayloadAction<WordType>) => {
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
    deleteSpanishWord: (state, action: PayloadAction<string>) => {
      const wordIdToDelete = action.payload;

      state.spanishWordsA1 = state.spanishWordsA1.filter(
        (word) => word.id !== wordIdToDelete
      );

      state.myWords = state.myWords.filter(
        (word) => word.id !== wordIdToDelete
      );

      state.wordsForLearning = state.wordsForLearning.filter(
        (word) => word.id !== wordIdToDelete
      );
    },
    learnSpanish: (state) => {
      state.isActive = true;
    },
    stopSpanish: (state) => {
      state.isActive = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      setSpanishWordForLearning.fulfilled,
      (state, action: PayloadAction<WordType>) => {
        const wordToAdd = action.payload;
        const isWordUnique = !state.wordsForLearning.some(
          (word) => word.id === wordToAdd.id
        );
        const isWordAlreadyAdded = state.myWords.some(
          (word) => word.id === wordToAdd.id
        );
        if (isWordUnique && !isWordAlreadyAdded) {
          state.wordsForLearning.push(wordToAdd);
        }
      }
    );
  },
});

export const {
  addSpanishWordForLearning,
  deleteSpanishWord,
  learnSpanish,
  stopSpanish,
} = spanishSlice.actions;

export default spanishSlice.reducer;
