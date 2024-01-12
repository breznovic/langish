import Button from "../../common/Button/Button";
import s from "./Deck.module.css";
import logo from "../../../assets/icon.png";
import { useAppDispatch } from "../../../store/store";
import { addWord } from "../../../store/features/englishSlice";

export const Deck = () => {
  const dispatch = useAppDispatch();

  const addWordOnClick = async () => {
    dispatch(addWord());
  };

  return (
    <div className={s.card}>
      <h2>Deck</h2>
      <img src={logo} alt="Logo" />
      <div>
        <Button
          title="Add word to learn"
          className={s.button}
          onClick={addWordOnClick}
        />
      </div>
    </div>
  );
};
