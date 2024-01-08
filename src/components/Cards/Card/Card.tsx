import { WordType } from "../../../store/englishWords";
import Button from "../../common/Button/Button";
import s from "./Card.module.css";

interface PropsType extends WordType {}

const Card = (props: PropsType) => {
  return (
    <div>
      <div className={s.card}>
        <h2 className={s.word}>{props.word}</h2>
        <p className={s.definition}>{props.definition}</p>
        <div className={s.buttonGroup}>
          <div>
            <Button title="I know" className={s.knowButton}/>
          </div>
          <div>
            <Button title="To learn" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
