import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import s from "./Cards.module.css";
import Header from "../Header/Header";
import { useState } from "react";
import { Deck } from "./Deck/Deck";
import { Card } from "./Card/Card";

const Cards = () => {
  let wordForLearning = useSelector(
    (state: RootState) => state.english.wordsForLearning
  );

  const [cardsBackSide, setCardsBackSide] = useState(true);
  const [index, setIndex] = useState(0);

  const reverseCard = () => {
    setCardsBackSide(!cardsBackSide);
  };

console.log(wordForLearning, 'fw');


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
    </div>
  );
};

export default Cards;
