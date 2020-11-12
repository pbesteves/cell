import React from "react";
import styles from "./Button.module.scss";

export interface ButtonProps {
  /** A prop that will be rendered inside the button. */
  /** It can be anything you want. */
  children: React.ReactNode;
  /**A prop that passes custom classes to the button component */
  classes: string;
  /** A boolean to specify if the button is disabled or not */
  disabled: boolean;
  /** A string to specify how the button should be rendered */
  buttonStyle: "solid" | "outline" | "text";
  /** A function that will be called once the button is clicked */
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
}

const Button: React.FC<ButtonProps> = ({
  classes,
  children,
  disabled,
  buttonStyle = "solid",
  onClick,
}) => {
  let buttonClass: string;

  buttonClass = classes && classes;

  if (buttonStyle === "outline") {
    buttonClass += ` ${styles.ButtonOutline}`;
  } else if (buttonStyle === "text") {
    buttonClass += ` ${styles.ButtonText}`;
  } else {
    buttonClass += ` ${styles.ButtonSolid}`;
  }

  return (
    <button className={buttonClass} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
