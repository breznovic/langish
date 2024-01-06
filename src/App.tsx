import s from "./App.module.css";
import Header from "./components/Header/Header";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "./store/store";
import { useEffect } from "react";
import { setWords } from "./store/features/englishSlice";
import Card from "./components/Card/Card";

function App() {
  const wordsForLearning = useSelector(
    (state: RootState) => state.english.englishWordsC1[0]
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setWords());
  }, [dispatch]);

  return (
    <div className={s.body}>
      <Header />
      <Card definition="This is" word="About" id="test"/>
    </div>
  );
}

export default App;
