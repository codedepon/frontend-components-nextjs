import React from "react";
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import styles from "./ContentBox.module.scss";

function ContentBox({
  children,
  className,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  return (
    <div className={`${styles.contentBox} ${className}`} {...props}>
      {children}
    </div>
  );
}

export default ContentBox;
