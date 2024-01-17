import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import englishReducer from "./features/englishSlice";
import { WordType } from "./englishWords";

export const store = configureStore({
  reducer: {
    english: englishReducer,
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
  saveDataToLocalStorage("myWords", state.english.myWords);
  saveDataToLocalStorage("wordsForLearning", state.english.wordsForLearning);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
