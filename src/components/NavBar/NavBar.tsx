import React from "react";
import styles from "./NavBar.module.css";
const NavBar = ({ children }: { children?: React.ReactNode }): JSX.Element => (
  <>
    <nav className={styles.NavBar}>{children}</nav>
    <div className={styles.spacer}></div>
  </>
);

export default NavBar;
