import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../store/store";
/* import { setWordForLearning } from "../../../store/features/englishSlice"; */
import { setWordForLearning } from "../../../store/features/spanishSlice";
import Button from "../../common/Button/Button";
import s from "./Deck.module.css";
import logo from "../../../assets/icon.png";
import { useState } from "react";

const Deck = () => {
 /*  const wordForLearning = useSelector(
    (state: RootState) => state.english.wordsForLearning
  ); */

  const wordForLearning = useSelector(
    (state: RootState) => state.spanish.wordsForLearning
  );

  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = useState(false);

  const modalClose = () => setShowModal(false);

  const addNewWord = () => {
    if (wordForLearning.length > 6) {
      setShowModal(true);
    } else {
      dispatch(setWordForLearning());
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
