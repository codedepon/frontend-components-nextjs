import React from "react";

import styles from "./DropDownInput.module.css";
import { useState } from "react";
import useClickOutside from "../../hooks/use-click-outside";
import { ArrowIcon } from "../Icons/Icons";
import useParentProps from "../../hooks/use-parent-props";
import { CSSTransition } from "react-transition-group";
import { Direction } from "../../interfaces/Utilities";

interface DropDownInputProps {
  label: string;
  options: string[];
  onChange: () => void;
}

function DropDownInput({ options, label, onChange }: DropDownInputProps) {
  const [menuTitleIndex, setMenuTitleIndex] = useState<number>();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { ref: parentRef, parentProps } = useParentProps();
  const { ref: menuRef } = useClickOutside(() => setIsOpen(false), parentRef);
  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleSelect = (new_title_index: number) => {
    setMenuTitleIndex(new_title_index);
    onChange();
    setIsOpen(false);
  };
  const inputWidth =
    Math.max(Math.max(...options.map((el) => el.length)), "Select".length) *
    1.7;

  return (
    <>
      {label && <label className={styles.label}>{label}</label>}

      <button
        style={{
          width: `${inputWidth}ch`,
        }}
        ref={parentRef}
        className={styles.title}
        onClick={handleMenuToggle}
      >
        <span>
          {menuTitleIndex !== undefined ? options[menuTitleIndex] : "Select"}
        </span>
        <ArrowIcon className={styles.arrow} direction={Direction.down} />
      </button>
      <CSSTransition
        nodeRef={menuRef}
        in={isOpen}
        timeout={300}
        classNames={{
          enter: styles.menuEnter,
          enterActive: styles.menuEnterActive,
          exit: styles.menuExit,
          exitActive: styles.menuExitActive,
        }}
        unmountOnExit
      >
        <ul
          ref={menuRef}
          className={styles.menu}
          style={{
            width: `${inputWidth + 3.5}ch`,
            top: `${parentProps.top + 30}px`,
            left: `${parentProps.left}px`,
          }}
        >
          {options.map((value, index) => {
            return (
              <li
                className={`${index === menuTitleIndex ? styles.selected : ""}`}
                key={index}
                onClick={() => handleSelect(index)}
              >
                {value}
              </li>
            );
          })}
        </ul>
      </CSSTransition>
    </>
  );
}

export default DropDownInput;
