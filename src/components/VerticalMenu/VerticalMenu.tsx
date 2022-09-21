import React from "react";
import {
  MenuItemProp,
  RedirectLink,
  Submenu,
} from "../../interfaces/MenuTypes";
import { Direction } from "../../interfaces/Utilities";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import styles from "./VerticalMenu.module.css";
interface VerticalMenuProps {
  menuItems: MenuItemProp[];
  className?: string;
  menuPosition: Direction.right | Direction.left;
}

function VerticalMenu({
  menuItems,
  className,
  menuPosition,
}: VerticalMenuProps) {
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

export default VerticalMenu;
