import s from "./Button.module.css";

type PropsType = {
  title: string;
  className?: string;
  onClick: () => void;
};

const Button = (props: PropsType) => {
  const buttonClassName = `${s.button} ${props.className || ""}`;

  return (
    <button className={buttonClassName} onClick={props.onClick}>
      {props.title}
    </button>
  );
};

export default Button;
