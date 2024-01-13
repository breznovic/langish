import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store/store";
import s from "./Cards.module.css";
import Header from "../Header/Header";
import { useEffect, useState } from "react";
import { Deck } from "./Deck/Deck";
import { Card } from "./Card/Card";
import { setWordsForLearning } from "../../store/features/englishSlice";
import { WordType } from "../../store/englishWords";

const Cards = () => {
  let wordsForLearning = useSelector(
    (state: RootState) => state.english.wordsForLearning
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setWordsForLearning());
  }, []);

  const [cardsBackSide, setCardsBackSide] = useState(true);

  const reverseCard = () => {
    setCardsBackSide(!cardsBackSide);
  };

  let getWordsAray = (words: WordType[], index: number) => {
    const initialWord = words.slice(0, index);
    const addWordToArray = words.slice(index + 1);
    return initialWord;
  };

  let words = getWordsAray(wordsForLearning, 1);

  return (
    <div>
      <Header />
      <div className={s.container}>
        <div className={s.cardWrapper}>
          <Deck />
        </div>
        {words.map((w) => (
          <div className={s.cardWrapper} key={w.id}>
            <Card
              word={w.word}
              definition={
                cardsBackSide ? "Click to see definition" : w.definition
              }
              reverseCard={reverseCard}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
