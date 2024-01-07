import { useSelector } from "react-redux";
import Card from "./Card/Card";
import { RootState } from "../../store/store";
import s from "./Cards.module.css";

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

  return <div className={s.container}>{words}</div>;
};

export default Cards;
