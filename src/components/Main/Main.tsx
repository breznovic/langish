import { useNavigate } from "react-router-dom";
import s from "./Main.module.css";
import brFlag from "../../assets/brFlag.png";
import spFlag from "../../assets/spainFlag.png";
import { useAppDispatch } from "../../store/store";
import { learnEnglish } from "../../store/features/englishSlice";
import { learnSpanish } from "../../store/features/spanishSlice";

const Main = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const startEnglishApp = () => {
    dispatch(learnEnglish());
    navigate("/cards");
  };

  const startSpanishApp = () => {
    dispatch(learnSpanish());
    navigate("/cards");
  };

  return (
    <div className={s.container}>
      <h1 className={s.mainTitle}>Welcome!</h1>
      <p>
        This application is designed for those who are learning foreign
        languages and want to expand their vocabulary.
      </p>
      <h2>Choose language</h2>
      <div className={s.flags}>
        <img src={brFlag} className={s.flag} onClick={startEnglishApp} />
        <img src={spFlag} className={s.flag} onClick={startSpanishApp} />
      </div>
    </div>
  );
};

export default Main;
