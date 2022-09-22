import React from "react";
import { useRef, useState } from "react";

import { CheckmarkIcon } from "../Icons/Icons";
import styles from "./CheckBox.module.scss";
import ContentBox from "../ContentBox/ContentBox";
interface CheckBoxProps {
  checked?: boolean;
  size?: string;
  className?: string;
  onChange?: () => void;
}
function CheckBox({ checked, size, onChange, className }: CheckBoxProps) {
  const [isChecked, setIsChecked] = useState(Boolean(checked));
  const toggleChecked = () => {
    if (onChange) onChange();
    setIsChecked(!isChecked);
  };
  const checkmarkRef = useRef(null);
  return (
    <ContentBox
      onClick={toggleChecked}
      // @ts-ignore
      size={size || "2em"}
      className={`${styles.checkbox} ${className || ""}`}
    >
      <button className={styles.innerBox}>
        {isChecked && (
          <CheckmarkIcon ref={checkmarkRef} className={styles.checkmark} />
        )}
      </button>
    </ContentBox>
  );
}
export default CheckBox;
