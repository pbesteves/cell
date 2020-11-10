import React, { useEffect, useState } from "react";
import { ReactComponent as ShowPassword } from "../../assets/icons/eye-close.svg";
import { ReactComponent as HidePassword } from "../../assets/icons/eye-open.svg";
import setUserStyles from "../../helpers/setCustomClasses";
import Button from "../Button";
import styles from "./Input.module.scss";

type Classes = {
  Root?: string;
  InputRoot?: string;
  Input?: string;
  Label?: string;
  Legend?: string;
  Fieldset?: string;
  Message?: string;
  MessageFailure?: string;
  LegendFocused?: string;
  LabelFocused?: string;
  LabelFailure?: string;
  FieldsetFocused?: string;
  FieldsetFocusedFailure?: string;
};

export interface InputProps {
  classes: Classes;
  disabled: boolean;
  label: string;
  message: string;
  placeholder: string;
  required: boolean;
  state: "neutral" | "failure";
  type: "text" | "email" | "password";
  value: string;
  onBlur(e: React.ChangeEvent<HTMLInputElement>): void;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  onFocus(e: React.ChangeEvent<HTMLInputElement>): void;
}

const Input: React.FC<InputProps> = ({
  classes,
  disabled,
  label,
  message,
  placeholder,
  required = false,
  state = "neutral",
  type = "text",
  value = "",
  onBlur,
  onChange,
  onFocus,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const userStyle: Classes = setUserStyles(classes, styles);

  let labelClass = `${userStyle.Label} `;
  let legendClass = `${userStyle.Legend} `;
  let fieldsetClass = `${userStyle.Fieldset} `;

  const messageClass =
    state === "failure"
      ? `${userStyle.MessageFailure}`
      : `${userStyle.Message}`;

  legendClass += isFocused ? `${userStyle.LegendFocused}` : "";
  labelClass += isFocused ? `${userStyle.LabelFocused}` : "";
  labelClass += state === "failure" ? ` ${userStyle.LabelFailure}` : "";

  fieldsetClass += isFocused ? `${userStyle.FieldsetFocused}` : "";
  fieldsetClass +=
    state === "failure" ? ` ${userStyle.FieldsetFocusedFailure}` : "";

  const onBlurHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.persist();
    if (inputValue.length === 0) setIsFocused(false);
    onBlur && onBlur(e);
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.persist();
    setInputValue(e.target.value);
    onChange && onChange(e);
  };

  const onFocusHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.persist();
    setIsFocused(true);
    onFocus && onFocus(e);
  };

  const togglePassword = (): void => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  useEffect(() => {
    setIsFocused(inputValue.length > 0);
  }, [inputValue]);

  return (
    <div className={styles.Root}>
      <label className={labelClass}>{label}</label>
      <div className={styles.InputRoot}>
        <input
          className={styles.Input}
          onBlur={onBlurHandler}
          onChange={onChangeHandler}
          onFocus={onFocusHandler}
          disabled={disabled}
          required={required}
          value={inputValue}
          type={showPassword ? "text" : type}
        />
        {type === "password" && (
          <Button
            classes={styles.TogglePassword}
            buttonStyle="text"
            onClick={togglePassword}
          >
            {showPassword ? (
              <HidePassword title="Hide Password" />
            ) : (
              <ShowPassword title="Show Password" />
            )}
          </Button>
        )}
        <fieldset className={fieldsetClass}>
          <legend className={legendClass}>
            <span>{placeholder}</span>
          </legend>
        </fieldset>
      </div>
      {message && <span className={messageClass}>{message}</span>}
    </div>
  );
};

export default Input;
