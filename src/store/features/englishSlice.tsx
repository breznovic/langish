import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { WordType, englishWordsC1 } from "../words/englishWords";
import { loadDataFromLocalStorage } from "../../components/common/localStorageUtils/localStorageUtils";

const initialState: {
  englishWordsC1: WordType[];
  myWords: WordType[];
  wordsForLearning: WordType[];
  isActive: boolean;
} = {
  englishWordsC1: loadDataFromLocalStorage("englishWordsC1") || englishWordsC1,
  myWords: loadDataFromLocalStorage("myEnglishWords") || [],
  wordsForLearning: loadDataFromLocalStorage("englishWordsForLearning") || [],
  isActive: false,
};

export const setEnglishWordForLearning = createAsyncThunk(
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
    addEnglishWordForLearning: (state, action: PayloadAction<WordType>) => {
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
    deleteEnglishWord: (state, action: PayloadAction<string>) => {
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
    learnEnglish: (state) => {
      state.isActive = true;
    },
    stopEnglish: (state) => {
      state.isActive = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      setEnglishWordForLearning.fulfilled,
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
  addEnglishWordForLearning,
  deleteEnglishWord,
  learnEnglish,
  stopEnglish,
} = englishSlice.actions;

export default englishSlice.reducer;
