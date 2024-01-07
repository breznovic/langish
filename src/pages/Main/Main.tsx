import { useNavigate } from "react-router-dom";
import s from "./Main.module.css";

const Main = () => {
  const navigate = useNavigate();
  const startApp = () => navigate("/cards");

  return (
    <div className={s.container}>
      <h1 className={s.mainTitle}>Main Page</h1>
      <button onClick={startApp} className={s.button}>
        Click to start
      </button>
    </div>
  );
};

export default Main;
