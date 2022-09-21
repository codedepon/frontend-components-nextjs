import React from "react";
import {
  MenuItemProp,
  RedirectLink,
  Submenu,
} from "../../interfaces/MenuTypes";
import { Direction } from "../../interfaces/Utilities";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import styles from "./HorizontalMenu.module.css";
interface HorizontalMenuProps {
  menuItems: MenuItemProp[];
  className?: string;
  menuPosition: Direction.up | Direction.down;
}

function HorizontalMenu({
  menuItems,
  className,
  menuPosition,
}: HorizontalMenuProps) {
  return (
    <div className={`${styles.menu} ${className}`}>
      {menuItems.map((item, index) => {
        return (
          <DropDownMenu
            key={index}
            menuItems={item}
            menuPosition={menuPosition}
          />
        );
      })}
    </div>
  );
}

export default HorizontalMenu;
