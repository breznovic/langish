import { useNavigate } from "react-router-dom";
import logo from "../../assets/icon.png";
import s from "../Header/Header.module.css";

const Header = () => {
  const navigate = useNavigate();
  const toMainPage = () => navigate("/");

  return (
    <header className={s.header}>
      <img src={logo} alt="Logo" onClick={toMainPage} />
      <h1>Langish App</h1>
    </header>
  );
};

export default Header;
