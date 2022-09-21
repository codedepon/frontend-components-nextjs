import React from "react";
import { useRef, useState } from "react";

import { CheckmarkIcon } from "../Icons/Icons";
import styles from "./CheckBox.module.css";
import ContentBox from "../ContentBox/ContentBox";
interface CheckBoxProps {
  checked?: boolean;
}
function CheckBox({ checked }: CheckBoxProps) {
  const [isChecked, setIsChecked] = useState(Boolean(checked));
  const toggleChecked = () => setIsChecked(!isChecked);
  const checkmarkRef = useRef(null);
  return (
    <ContentBox onClick={toggleChecked} className={styles.checkbox}>
      <button className={styles.innerBox}>
        {isChecked && (
          <CheckmarkIcon ref={checkmarkRef} className={styles.checkmark} />
        )}
      </button>
    </ContentBox>
  );
}
export default CheckBox;
