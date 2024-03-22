import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import s from "./Cards.module.css";
import Header from "../Header/Header";
import { useEffect, useState } from "react";
import { Card } from "./Card/Card";
import Deck from "./Deck/Deck";
import { useLocation, useNavigate } from "react-router-dom";

const Cards = () => {
  let englishWordForLearning = useSelector(
    (state: RootState) => state.english.wordsForLearning
  );

  let spanishWordForLearning = useSelector(
    (state: RootState) => state.spanish.wordsForLearning
  );

  const isEnglishActive = useSelector(
    (state: RootState) => state.english.isActive
  );

  let myEnglishWords = useSelector((state: RootState) => state.english.myWords);

  let mySpanishWords = useSelector((state: RootState) => state.spanish.myWords);

  let wordForLearning = isEnglishActive
    ? englishWordForLearning
    : spanishWordForLearning;

  let myWords = isEnglishActive ? myEnglishWords : mySpanishWords;

  const navigate = useNavigate();

  const toLearning = () => {
    setRenderChangedCode(true);
    navigate("/learning");
  };

  const location = useLocation();
  const isLearningPage = location.pathname === "/learning";

  const [renderChangedCode, setRenderChangedCode] = useState(false);

  useEffect(() => {}, [renderChangedCode]); // Need for deploy on Vercel

  const button = (
    <button
      onClick={toLearning}
      className={isLearningPage ? `${s.button} ${s.hide}` : s.button}
    >
      Go to learning
    </button>
  );

  return (
    <div>
      <Header />
      <div className={s.container}>
        <div className={s.cardWrapper}>
          <Deck wordForLearning={wordForLearning} />
        </div>
        {wordForLearning.length > 0
          ? wordForLearning.map((w) => (
              <div className={s.cardWrapper} key={w.id}>
                <Card word={w.word} definition={w.definition} id={w.id} />
              </div>
            ))
          : ""}
      </div>
      <div className={s.buttonContainer}>
        {myWords.length > 0 ? button : ""}
      </div>
    </div>
  );
};

export default Cards;
