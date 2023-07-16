import EducationCard from "./components/Card/Card";
import s from "./App.module.css";
import Header from "./components/Header/Header";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "./store/store";
import { useEffect } from "react";
import { setWords } from "./store/features/englishSlice";

function App() {
  const wordsForLearning = useSelector(
    (state: RootState) => state.english.englishWordsC1[0]
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setWords());
  }, [dispatch]);

console.log(wordsForLearning, 'words in app')

  return (
    <div className={s.body}>
      <Header />
      <EducationCard words={wordsForLearning} />
    </div>
  );
}

export default App;
