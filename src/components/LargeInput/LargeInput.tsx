import React from "react";
import { InputHTMLAttributes } from "react";
import styles from "./LargeInput.module.scss";

function LargeInput({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`${styles.inputBox} ${className}`} />;
}

export default LargeInput;
