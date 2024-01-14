import Button from "../../common/Button/Button";
import s from "./Deck.module.css";
import logo from "../../../assets/icon.png";
import { useAppDispatch } from "../../../store/store";
import { setWordForLearning } from "../../../store/features/englishSlice";

export const Deck = () => {
  const dispatch = useAppDispatch();

  const addNewWord = () => {
    dispatch(setWordForLearning());
  };

  console.log(addNewWord, "add");

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
    </div>
  );
};
