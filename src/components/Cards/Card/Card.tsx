import Button from "../../common/Button/Button";
import s from "./Card.module.css";

type PropsType = { word: string; definition: string; reverseCard: () => void };

export const Card = (props: PropsType) => {
  const handleClick = () => {
    props.reverseCard();
  };

  return (
    <div className={s.card}>
      <h2 className={s.word}>{props.word}</h2>
      <p className={s.definition} onClick={handleClick}>
        {props.definition}
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
