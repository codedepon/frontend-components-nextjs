import React from "react";
import { ReactNode } from "react";
import ContentBox from "../ContentBox/ContentBox";
import styles from "./SideNotification.module.css";

interface SideNotificationProps {
  children: ReactNode;
  className?: string;
  position?:
    | "top-left"
    | "top-right"
    | "bottom-right"
    | "bottom-left"
    | "center-bottom"
    | "center-top";
  blockContent?: boolean;
}

function SideNotification({
  children,
  className,
  position,
  blockContent,
}: SideNotificationProps) {
  position = position === undefined ? "bottom-right" : position;

  const box = (
    <ContentBox
      className={`${styles.notification} ${className || ""} ${
        styles[position]
      }`}
    >
      {children}
    </ContentBox>
  );
  if (blockContent) {
    return <div className={styles.blocker}>{box}</div>;
  }
  return box;
}

export default SideNotification;
