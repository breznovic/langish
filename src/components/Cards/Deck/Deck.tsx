import Button from "../../common/Button/Button";
import s from "./Deck.module.css";
import logo from "../../../assets/icon.png";

export const Deck = () => {
  /*  const addWordOnClick = () => {
   setWordsForLearning()
  };  */

  return (
    <div className={s.card}>
      <h2>Deck</h2>
      <img src={logo} alt="Logo" />
      <div>
        <Button
          title="Add word to learn"
          className={s.button}
          onClick={() => {}} // BUTTON WITHOUT LOGIC
        />
      </div>
    </div>
  );
};
