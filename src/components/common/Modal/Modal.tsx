import React, { useState } from "react";
import s from "./Modal.module.css";
import Button from "../Button/Button";

type ModalProps = {
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className={s.overlay}>
      <div className={s.modal}>
        <button className={s.closeButton} onClick={onClose}>
          &times;
        </button>
        <div className={s.content}>
          <h2 className={s.title}>Modal Title</h2>
          <p className={s.description}>This is the modal content.</p>
          <Button
            onClick={handleCloseModal}
            title="Close"
            className={s.closeButton}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
