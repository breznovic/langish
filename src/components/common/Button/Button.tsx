import s from "./Button.module.css";

type PropsType = {
  onClick: () => void;
  children: React.ReactNode;
};

const Button = ({ onClick, children }: PropsType) => {
  return (
    <button className={s.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
