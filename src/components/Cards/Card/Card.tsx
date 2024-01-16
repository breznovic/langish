import Button from "../../common/Button/Button";
import s from "./Card.module.css";
import { useAppDispatch } from "../../../store/store";
import {
  addWordForLearning,
  deleteWord,
} from "../../../store/features/englishSlice";
import { useLocation } from "react-router-dom";
import { WordType } from "../../../store/englishWords";
import { useState } from "react";

type PropsType = {
  word: string;
  definition: string;
  id: string;
};

export const Card = (props: PropsType) => {
  const location = useLocation();
  const isLearningPage = location.pathname === "/learning";

  const [cardsBackSide, setCardsBackSide] = useState(true);

  const reverseCard = () => {
    setCardsBackSide(!cardsBackSide);
  };

  const dispatch = useAppDispatch();

  const addWordToLearningList = () => {
    const wordToAdd: WordType = {
      word: props.word,
      definition: props.definition,
      id: props.id,
    };
    dispatch(addWordForLearning(wordToAdd));
  };

  const deleteKnownWord = () => {
    dispatch(deleteWord(props.id));
  };

  return (
    <div className={s.card} id={props.id}>
      <h2 className={s.word}>{props.word}</h2>
      <p className={s.definition} onClick={reverseCard} key={props.id}>
        {cardsBackSide ? "Click to see definition" : props.definition}
      </p>
      {isLearningPage ? (
        <div className={s.buttonGroup}>
          <div>
            <Button
              title="I know"
              className={s.knowButton}
              onClick={deleteKnownWord}
            />
          </div>
        </div>
      ) : (
        <div className={s.buttonGroup}>
          <div>
            <Button
              title="I know"
              className={s.knowButton}
              onClick={deleteKnownWord}
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
