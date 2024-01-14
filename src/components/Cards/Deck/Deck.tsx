import Button from "../../common/Button/Button";
import s from "./Deck.module.css";
import logo from "../../../assets/icon.png";
import { useAppDispatch } from "../../../store/store";
import { setWordForLearning } from "../../../store/features/englishSlice";
import { useState } from "react";
import Modal from "../../common/Modal/Modal";

export const Deck = () => {
  const dispatch = useAppDispatch();

  const addNewWord = () => {
    dispatch(setWordForLearning());
  };

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


  return (
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
      <div>
      <button onClick={handleOpenModal}>Open Modal</button>
      {showModal && <Modal onClose={handleCloseModal} />}
    </div>
    </div>
  );
};
