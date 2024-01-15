import { useSelector } from "react-redux";
import Button from "../../common/Button/Button";
import s from "./Card.module.css";
import { RootState, useAppDispatch } from "../../../store/store";
import { addWordForLearning } from "../../../store/features/englishSlice";

type PropsType = {
  word: string;
  definition: string;
  id: string;
  reverseCard: () => void;
};

export const Card = (props: PropsType) => {
  let myWords = useSelector((state: RootState) => state.english.myWords);

  const dispatch = useAppDispatch();

  const handleClick = () => {
    props.reverseCard();
  };

  const addWordToLearningList = () => {
    dispatch(addWordForLearning());
  };

  return (
    <div className={s.card} id={props.id}>
      <h2 className={s.word}>{props.word}</h2>
      <p className={s.definition} onClick={handleClick}>
        {props.definition}
      </p>
      <div className={s.buttonGroup}>
        <div>
          <Button title="I know" className={s.knowButton} onClick={() => {}} />
        </div>
        <div>
          <Button title="To learn" onClick={addWordToLearningList} />
        </div>
      </div>
    </div>
  );
};
