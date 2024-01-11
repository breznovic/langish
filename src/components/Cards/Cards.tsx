import { useSelector } from "react-redux";
import { Card } from "./Card/Card";
import { RootState, useAppDispatch } from "../../store/store";
import s from "./Cards.module.css";
import Header from "../Header/Header";
import { useEffect, useRef, useState } from "react";
import { Deck } from "./Deck/Deck";
import { setWordsForLearning } from "../../store/features/englishSlice";

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

  const initialWordRef = useRef(wordsForLearning[0]?.word);

  const initialDefinitionRef = useRef<string>(wordsForLearning[0]?.definition);

  let cards = wordsForLearning.map((w) => (
    <div key={w.id} className={s.cardWrapper}>
      <Card
        id={w.id}
        word={initialWordRef.current}
        definition={
          cardsBackSide
            ? "Click to see definition"
            : initialDefinitionRef.current
        }
        reverseCard={() => reverseCard()}
      />
    </div>
  ));

  return (
    <div>
      <Header />
      <div className={s.container}>
        <Deck />
        {cards}
      </div>
    </div>
  );
};

export default Cards;
