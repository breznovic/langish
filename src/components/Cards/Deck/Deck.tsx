import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../store/store";
import { setEnglishWordForLearning } from "../../../store/features/englishSlice";
import { setSpanishWordForLearning } from "../../../store/features/spanishSlice";
import Button from "../../common/Button/Button";
import s from "./Deck.module.css";
import logo from "../../../assets/icon.png";
import { useState } from "react";
import { WordType } from "../../../store/words/englishWords";

type Props = {
  wordForLearning: WordType[];
};

const Deck = (props: Props) => {
  const isEnglishActive = useSelector(
    (state: RootState) => state.english.isActive
  );

  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = useState(false);

  const modalClose = () => setShowModal(false);

  const addNewWord = () => {
    if (props.wordForLearning.length > 6) {
      setShowModal(true);
    } else {
      isEnglishActive
        ? dispatch(setEnglishWordForLearning())
        : dispatch(setSpanishWordForLearning());
    }
  };

  return (
    <>
      {showModal && (
        <div className={s.modal}>
          <div className={s.modalContent}>
            <p>First add the previous words to the list for study</p>
            <button onClick={modalClose}>OK</button>
          </div>
        </div>
      )}
      <div className={s.card}>
        <h2>Deck</h2>
        <img src={logo} alt="Logo" />
        <div>
          <Button
            title="Add word to learn"
            className={s.button}
            onClick={addNewWord}
          />
        </div>
      </div>
    </>
  );
};

export default Deck;
