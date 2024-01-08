import { useSelector } from "react-redux";
import Card from "./Card/Card";
import { RootState } from "../../store/store";
import s from "./Cards.module.css";
import Header from "../Header/Header";

const Cards = () => {
  const wordsForLearning = useSelector(
    (state: RootState) => state.english.englishWordsC1
  );

  const shuffledWords = wordsForLearning
    .slice()
    .sort(() => Math.random() - 0.5);

  const selectedWords = shuffledWords.slice(0, 8);

  const cards = selectedWords.map((w) => (
    <div key={w.id} className={s.cardWrapper}>
      <Card id={w.id} definition={w.definition} word={w.word} />
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
