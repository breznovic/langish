import { useSelector } from "react-redux";
import { Card } from "./Card/Card";
import { RootState } from "../../store/store";
import s from "./Cards.module.css";
import Header from "../Header/Header";
import { useMemo, useState } from "react";

const Cards = () => {
  const wordsForLearning = useSelector(
    (state: RootState) => state.english.englishWordsC1
  );

  const [cardsBackSide, setCardsBackSide] = useState(true);

  const shuffledWords = wordsForLearning
    .slice()
    .sort(() => Math.random() - 0.5);

  const selectedWords = useMemo(
    () => shuffledWords.slice(0, 8),
    [shuffledWords]
  );

  const reverseCard = (id: string) => {
    setCardsBackSide(!cardsBackSide);
  };

  let cardsWithDefinition = selectedWords.map((w) => (
    <div key={w.id} className={s.cardWrapper}>
      <Card
        id={w.id}
        word={w.word}
        definition={w.definition}
        reverseCard={() => reverseCard(w.id)}
        isFlipped={!cardsBackSide}
      />
    </div>
  ));

  let learningCards = selectedWords.map((w) => (
    <div key={w.id} className={s.cardWrapper}>
      <Card
        id={w.id}
        word={w.word}
        definition="Click to see definition"
        reverseCard={() => reverseCard(w.id)}
        isFlipped={!cardsBackSide}
      />
    </div>
  ));

  return (
    <div>
      <Header />
      <div className={s.container}>
        {cardsBackSide ? learningCards : cardsWithDefinition}
      </div>
    </div>
  );
};

export default Cards;
