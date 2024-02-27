import { useNavigate } from "react-router-dom";
import s from "./Main.module.css";
import Button from "../../components/common/Button/Button";

const Main = () => {
  const navigate = useNavigate();
  const startApp = () => navigate("/cards");

  return (
    <div className={s.container}>
      <h1 className={s.mainTitle}>Welcome!</h1>
      <p>
        This application is designed for those who are learning foreign
        languages and want to expand their vocabulary.
      </p>
      <Button onClick={startApp} className={s.button} title="Click to start" />
    </div>
  );
};

export default Main;
