import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { WordType} from "../words/englishWords";
import { loadDataFromLocalStorage } from "../../components/common/localStorageUtils/localStorageUtils";
import { spanishWordsA1 } from "../words/spanishWords";

const initialState: {
  spanishWordsA1: WordType[];
  myWords: WordType[];
  wordsForLearning: WordType[];
} = {
  spanishWordsA1: loadDataFromLocalStorage("spanishWordsA1") || spanishWordsA1,
  myWords: loadDataFromLocalStorage("mySpanishWords") || [],
  wordsForLearning: loadDataFromLocalStorage("spanishWordsForLearning") || [],
};

export const setWordForLearning = createAsyncThunk(
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

export const { addWordForLearning, deleteWord } = spanishSlice.actions;

export default spanishSlice.reducer;
