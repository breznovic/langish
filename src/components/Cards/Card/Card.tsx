import { WordType } from "../../../store/englishWords";
import Button from "../../common/Button/Button";
import s from "./Card.module.css";

type PropsType = WordType & { reverseCard: () => void; isFlipped: boolean };

export const Card = (props: PropsType) => {
  const { word, definition, reverseCard, isFlipped } = props;

  const handleClick = () => {
    reverseCard();
  };

  const cardClassName = `${s.card} ${isFlipped ? s.flipped : ""}`;

  return (
    <div className={cardClassName}>
      <h2 className={s.word}>{word}</h2>
      <p className={s.definition} onClick={handleClick}>
        {definition}
      </p>
      <div className={s.buttonGroup}>
        <div>
          <Button title="I know" className={s.knowButton} />
        </div>
        <div>
          <Button title="To learn" />
        </div>
      </div>
    </div>
  );
};
