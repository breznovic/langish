import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store/store";
import s from "./Cards.module.css";
import Header from "../Header/Header";
import { useEffect, useState } from "react";
import { Deck } from "./Deck/Deck";
import { setWordsForLearning } from "../../store/features/englishSlice";
import { Card } from "./Card/Card";

const Cards = () => {
  const wordsForLearning = useSelector(
    (state: RootState) => state.english.wordsForLearning
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setWordsForLearning());
  }, [dispatch]);

  const [cardsBackSide, setCardsBackSide] = useState(true);

  const reverseCard = () => {
    setCardsBackSide(!cardsBackSide);
  };

  return (
    <div>
      <Header />
      <div className={s.container}>
        <Deck />
        <div className={s.cardWrapper}>
          <Card
            word={wordsForLearning[0]?.word}
            definition={
              cardsBackSide
                ? "Click to see definition"
                : wordsForLearning[0]?.definition
            }
            reverseCard={reverseCard}
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
