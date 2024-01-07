import { useSelector } from "react-redux";
import Card from "./Card/Card";
import { RootState } from "../../store/store";
import s from "./Cards.module.css";
import Header from "../Header/Header";

const Cards = () => {
  const wordsForLearning = useSelector(
    (state: RootState) => state.english.englishWordsC1
  );

  let words = wordsForLearning.map((w) => {
    return (
      <div key={w.id} className={s.cardWrapper}>
        <Card id={w.id} definition={w.definition} word={w.word} />
      </div>
    );
  });

  return (
    <div>
      <Header />
      <div className={s.container}>{words}</div>;
    </div>
  );
};

export default Cards;
