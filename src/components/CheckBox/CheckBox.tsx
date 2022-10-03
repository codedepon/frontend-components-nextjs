import React, { useState, useRef } from "react";

import { CheckmarkIcon } from "../Icons/Icons";
import styles from "./CheckBox.module.scss";
import ContentBox from "../ContentBox/ContentBox";
interface CheckBoxProps {
  checked?: boolean;
  className?: string;
  size?: number;
  onChange?: () => void;
}
function CheckBox({ checked, size, onChange, className }: CheckBoxProps) {
  return (
    <ContentBox
      style={{
        width: `${size?.toString() || "2"}em`,
        height: `${size || 2}em`,
      }}
      className={`${styles.checkbox} ${className || ""}`}
    >
      <button className={styles.innerBox} onClick={onChange}>
        {Boolean(checked) && <CheckmarkIcon className={styles.checkmark} />}
      </button>
    </ContentBox>
  );
}
export default CheckBox;
