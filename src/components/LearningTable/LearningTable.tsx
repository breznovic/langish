import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import s from "./LearningTable.module.css";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import { Card } from "../Cards/Card/Card";

const LearningTable = () => {
  let myEnglishWords = useSelector((state: RootState) => state.english.myWords);

  let mySpanishWords = useSelector((state: RootState) => state.spanish.myWords);

  const isEnglishActive = useSelector(
    (state: RootState) => state.english.isActive
  );

  let myWords = isEnglishActive ? myEnglishWords : mySpanishWords;

  const navigate = useNavigate();

  const toDeck = () => {
    navigate("/cards");
  };

  return (
    <>
      <Header />

      {myWords.length > 0 ? (
        <>
          <div className={s.container}>
            {myWords.map((w) => (
              <div className={s.cardWrapper} key={w.id}>
                <Card word={w.word} definition={w.definition} id={w.id} />
              </div>
            ))}
          </div>
          <div className={s.buttonContainer}>
            <button onClick={toDeck} className={s.button}>
              Go to deck
            </button>
          </div>
        </>
      ) : (
        <div className={s.empty}>
          <div className={s.noCards}>Add new cards for learning</div>
          <button onClick={toDeck} className={s.button}>
            Go to deck
          </button>
        </div>
      )}
    </>
  );
};

export default LearningTable;
