import { useSelector } from "react-redux";
import { Card } from "./Card/Card";
import { RootState } from "../../store/store";
import s from "./Cards.module.css";
import Header from "../Header/Header";
import { useMemo, useRef, useState } from "react";
import { WordType } from "../../store/englishWords";

const Cards = () => {
  const wordsForLearning = useSelector(
    (state: RootState) => state.english.englishWordsC1
  );

  const [cardsBackSide, setCardsBackSide] = useState(true);

  const shuffledWords = wordsForLearning
    .slice()
    .sort(() => Math.random() - 0.5);

  const selectedWords: WordType[] = useMemo(
    () => shuffledWords.slice(0, 1),
    [shuffledWords]
  );

  const reverseCard = (id: string) => {
    setCardsBackSide(!cardsBackSide);
  };

  const initialWordRef = useRef(selectedWords[0]?.word);

  const initialDefinitionRef = useRef<string>(selectedWords[0]?.definition);

  let cards = selectedWords.map((w) => (
    <div key={w.id} className={s.cardWrapper}>
      <Card
        id={w.id}
        word={initialWordRef.current}
        definition={
          cardsBackSide
            ? "Click to see definition"
            : initialDefinitionRef.current
        }
        reverseCard={() => reverseCard(w.id)}
        isFlipped={!cardsBackSide}
      />
    </div>
  ));

  return (
    <div>
      <Header />
      <div className={s.container}>{cards}</div>
    </div>
  );
};

export default Cards;
