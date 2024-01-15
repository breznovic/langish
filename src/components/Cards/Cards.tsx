import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import s from "./Cards.module.css";
import Header from "../Header/Header";
import { useState } from "react";
import { Card } from "./Card/Card";
import Deck from "./Deck/Deck";
import Button from "../common/Button/Button";
import { useNavigate } from "react-router-dom";

const Cards = () => {
  let wordForLearning = useSelector(
    (state: RootState) => state.english.wordsForLearning
  );

  const navigate = useNavigate();
  const toLearning = () => navigate("/learning");

  const [cardsBackSide, setCardsBackSide] = useState(true);

  const reverseCard = () => {
    setCardsBackSide(!cardsBackSide);
  };

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
                <Card
                  word={w.word}
                  definition={
                    cardsBackSide ? "Click to see definition" : w.definition
                  }
                  reverseCard={reverseCard}
                />
              </div>
            ))
          : ""}
      </div>
      <Button
        title="Go to learning"
        onClick={toLearning}
        className={s.button}
      />
    </div>
  );
};

export default Cards;
