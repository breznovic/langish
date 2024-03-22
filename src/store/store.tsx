import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import englishReducer from "./features/englishSlice";
import spanishReducer from "./features/spanishSlice";
import { WordType } from "./words/englishWords";

export const store = configureStore({
  reducer: {
    english: englishReducer,
    spanish: spanishReducer,
  },
});

const saveDataToLocalStorage = (key: string, data: WordType[]) => {
  try {
    const serializedData = JSON.stringify(data);
    localStorage.setItem(key, serializedData);
  } catch (error) {
    console.log("Error saving data to localStorage:", error);
  }
};

store.subscribe(() => {
  const state = store.getState();
  saveDataToLocalStorage("englishWordsC1", state.english.englishWordsC1);
  saveDataToLocalStorage("spanishWordsA1", state.spanish.spanishWordsA1);
  saveDataToLocalStorage("myEnglishWords", state.english.myWords);
  saveDataToLocalStorage("mySpanishWords", state.spanish.myWords);
  saveDataToLocalStorage(
    "englishWordsForLearning",
    state.english.wordsForLearning
  );
  saveDataToLocalStorage(
    "spanishWordsForLearning",
    state.spanish.wordsForLearning
  );
});

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
