import Button from "../../common/Button/Button";
import s from "./Card.module.css";
import { useAppDispatch } from "../../../store/store";
import { addWordForLearning } from "../../../store/features/englishSlice";
import { useLocation } from "react-router-dom";
import { WordType } from "../../../store/englishWords";

type PropsType = {
  word: string;
  definition: string;
  id: string;
  reverseCard: (id: string) => void;
};

export const Card = (props: PropsType) => {
  const location = useLocation();
  const isLearningPage = location.pathname === "/learning";

  const dispatch = useAppDispatch();

  const handleClick = () => {
    props.reverseCard(props.id);
  };

  const addWordToLearningList = () => {
    const wordToAdd: WordType = {
      word: props.word,
      definition: props.definition,
      id: props.id,
    };
    dispatch(addWordForLearning(wordToAdd));
  };

  return (
    <div className={s.card} id={props.id}>
      <h2 className={s.word}>{props.word}</h2>
      <p className={s.definition} onClick={handleClick}>
        {props.definition}
      </p>
      {isLearningPage ? (
        <div className={s.buttonGroup}>
          <div>
            <Button
              title="I know"
              className={s.knowButton}
              onClick={() => {}}
            />
          </div>
        </div>
      ) : (
        <div className={s.buttonGroup}>
          <div>
            <Button
              title="I know"
              className={s.knowButton}
              onClick={() => {}}
            />
          </div>
          <div>
            <Button title="To learn" onClick={addWordToLearningList} />
          </div>
        </div>
      )}
    </div>
  );
};
