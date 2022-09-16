import React from "react";
import { Children, ReactNode } from "react";
import ContentBox from "../ContentBox/ContentBox";
import styles from "./Table.module.scss";

interface TableProps {
  children: ReactNode;
  className?: string;
}

function Table({ children, className }: TableProps) {
  return (
    <div className={`${styles.tableContainer} ${className || ""}`}>
      <div className={`${styles.tableVerticalContainer}`}>
        <div style={{ overflow: "hidden" }}>
          <div className={styles.tableHorizontalContainer}>
            <div className={`${styles.table}`}>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface TableRowProps {
  children: ReactNode;
}

export function TableRow({ children }: TableRowProps) {
  const arrayChildren = Children.toArray(children);
  return (
    <ContentBox className={styles.row}>
      {arrayChildren.map((child, index) => {
        return (
          <div key={index} className={styles.cell}>
            {child}
          </div>
        );
      })}
    </ContentBox>
  );
}

export default Table;
