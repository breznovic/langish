import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import englishReducer from "./features/englishSlice";

export const store = configureStore({
  reducer: {
    english: englishReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;