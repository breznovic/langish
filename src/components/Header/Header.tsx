import logo from "../../assets/icon.png";
import s from "../Header/Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <img src={logo} alt="Logo" />
      <h1>Langish App</h1>
    </header>
  );
};

export default Header;
