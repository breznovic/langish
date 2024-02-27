import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import s from "./Cards.module.css";
import Header from "../Header/Header";
import { useEffect, useState } from "react";
import { Card } from "./Card/Card";
import Deck from "./Deck/Deck";
import Button from "../common/Button/Button";
import { useLocation, useNavigate } from "react-router-dom";

const Cards = () => {
  let wordForLearning = useSelector(
    (state: RootState) => state.english.wordsForLearning
  );

  let myWords = useSelector((state: RootState) => state.english.myWords);

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
    <Button
      title="Go to learning"
      onClick={toLearning}
      className={isLearningPage ? `${s.button} ${s.hide}` : s.button}
    />
  );

  return (
    <div>
      <Header />
      <div className={s.container}>
        <div className={s.cardWrapper}>
          <Deck />
        </div>
        {wordForLearning.length > 0
          ? wordForLearning.map((w) => (
              <div className={s.cardWrapper} key={w.id}>
                <Card word={w.word} definition={w.definition} id={w.id} />
              </div>
            ))
          : ""}
      </div>
      {myWords.length > 0 ? button : ""}
    </div>
  );
};

export default Cards;
