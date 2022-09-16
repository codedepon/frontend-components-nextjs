import React from "react";
import { MenuItemProp, RedirectLink, Submenu } from "../../types/MenuTypes";
import { Direction } from "../../types/Utilities";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import styles from "./HorizontalMenu.module.scss";
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
