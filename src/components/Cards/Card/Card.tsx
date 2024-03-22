import Button from "../../common/Button/Button";
import s from "./Card.module.css";
import { RootState, useAppDispatch } from "../../../store/store";
import {
  addEnglishWordForLearning,
  deleteEnglishWord,
} from "../../../store/features/englishSlice";
import {
  addSpanishWordForLearning,
  deleteSpanishWord,
} from "../../../store/features/spanishSlice";
import { useLocation } from "react-router-dom";
import { WordType } from "../../../store/words/englishWords";
import { useState } from "react";
import { useSelector } from "react-redux";

type PropsType = {
  word: string;
  definition: string;
  id: string;
};

export const Card = (props: PropsType) => {
  const isEnglishActive = useSelector(
    (state: RootState) => state.english.isActive
  );

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
    isEnglishActive
      ? dispatch(addEnglishWordForLearning(wordToAdd))
      : dispatch(addSpanishWordForLearning(wordToAdd));
  };

  const deleteKnownWord = () => {
    isEnglishActive
      ? dispatch(deleteEnglishWord(props.id))
      : dispatch(deleteSpanishWord(props.id));
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
