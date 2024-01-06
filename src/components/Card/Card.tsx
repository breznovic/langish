import s from "./Card.module.css";
import { WordType } from "../../store/englishWords";

const Card = (props: WordType) => {
  return (
    <div className={s.card}>
      <h2 className={s.word}>{props.word}</h2>
      <p className={s.definition}>{props.definition}</p>
    </div>
  );
};

export default Card;
