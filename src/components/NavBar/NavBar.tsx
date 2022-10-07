import React, { ReactNode } from "react";
import styles from "./NavBar.module.scss";
interface NavBarProps {
  children?: ReactNode;
  className?: string;
}

const NavBar = ({ children, className }: NavBarProps): JSX.Element => (
  <nav className={`${styles.NavBar} ${className || ""}`}>{children}</nav>
);

export default NavBar;
