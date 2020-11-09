import React, { useEffect, useState } from "react";
import styles from "./Input.module.scss";

export interface InputProps {
  classes: object;
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

  let labelClass = `${styles.Label} `;
  let legendClass = `${styles.Legend} `;
  let fieldsetClass = `${styles.Fieldset} `;
  const messageClass =
    state === "failure" ? `${styles.MessageFailure}` : `${styles.Message}`;

  legendClass += isFocused ? `${styles.LegendFocused}` : "";
  labelClass += isFocused ? `${styles.LabelFocused}` : "";
  fieldsetClass += isFocused ? `${styles.FieldsetFocused}` : ``;

  const onBlurHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.persist();
    setIsFocused(false);
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

  useEffect(() => {
    setInputValue(value);
  }, [value]);

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
          type={type}
        />
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
