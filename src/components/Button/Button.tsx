import React from "react";
import styles from "./Button.module.scss";

export interface ButtonProps {
  children: React.ReactNode;
  disabled: boolean;
  buttonStyle: "solid" | "outline" | "text";
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  buttonStyle = "solid",
  onClick,
}) => {
  let buttonClass: string;

  if (buttonStyle === "outline") {
    buttonClass = `${styles.ButtonOutline}`;
  } else if (buttonStyle === "text") {
    buttonClass = `${styles.ButtonText}`;
  } else {
    buttonClass = `${styles.ButtonSolid}`;
  }

  return (
    <button className={buttonClass} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
