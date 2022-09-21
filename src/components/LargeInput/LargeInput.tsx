import React from "react";
import { InputHTMLAttributes } from "react";
import styles from "./LargeInput.module.scss";

function LargeInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={styles.inputBox} />;
}

export default LargeInput;
