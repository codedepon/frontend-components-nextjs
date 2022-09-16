import React from "react";
import styles from "./DropDownMenu.module.scss";
import { CSSProperties, useState } from "react";
import useClickOutside from "../../hooks/use-click-outside";
import { ArrowIcon } from "../Icons/Icons";
import useParentProps from "../../hooks/use-parent-props";
import { CSSTransition } from "react-transition-group";
import Link from "../Link/Link";
import { MenuItemProp, Submenu, RedirectLink } from "../../types/MenuTypes";
import { Direction } from "../../types/Utilities";

const getArrowDirection = function (
  menuPosition: Direction,
  isOpen?: boolean
): Direction {
  switch (menuPosition) {
    case Direction.down:
      if (isOpen) return Direction.up;
      return Direction.down;
    case Direction.up:
      if (isOpen) return Direction.down;
      return Direction.up;
    case Direction.left:
      if (isOpen) return Direction.right;
      return Direction.left;
    case Direction.right:
      if (isOpen) return Direction.left;
      return Direction.right;
  }
};

interface DropDownMenuProps {
  label?: string;
  menuItems: MenuItemProp;
  menuPosition?: Direction;
}

function DropDownMenu({ menuItems, label, menuPosition }: DropDownMenuProps) {
  menuPosition = menuPosition ? menuPosition : Direction.down;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<MenuItemProp | Submenu>(
    menuItems
  );
  const { ref: parentRef, parentProps } = useParentProps();
  const { ref: menuRef } = useClickOutside(() => setIsOpen(false), parentRef);
  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };
  const arrowPosition = () => getArrowDirection(menuPosition!, isOpen);

  const getMenuPosition = function (): CSSProperties {
    switch (menuPosition) {
      case Direction.down:
        return {
          top: `${parentProps.top + 30}px`,
          left: `${parentProps.left}px`,
        };

      case Direction.right:
        return {
          top: `${parentProps.top - 16}px`,
          left: `${parentProps.right + 5}px`,
        };
      case Direction.left:
        return {
          top: `${parentProps.top - 16}px`,
          left: `${parentProps.left - parentProps.width - 5}px`,
        };
      case Direction.up:
        const rowHeight = 60;
        return {
          top: `${
            parentProps.top - (activeMenu.submenu?.length || 0) * rowHeight
          }px`,
          left: `${parentProps.left}px`,
        };
    }
    return {};
  };
  const animationClasses = {
    enter: styles[`menuEnter${menuPosition}`],
    enterActive: styles[`menuEnterActive${menuPosition}`],
    exit: styles[`menuExit${menuPosition}`],
    exitActive: styles[`menuExitActive${menuPosition}`],
  };
  return (
    <>
      {menuItems.submenu ? (
        <>
          {label && <label>{label}</label>}
          <button
            style={{ width: `${menuItems.title.length * 1.6}ch` }}
            aria-expanded={isOpen}
            ref={parentRef}
            className={styles.title}
            onClick={handleMenuToggle}
          >
            <span>{activeMenu.title}</span>
            <ArrowIcon className={styles.arrow} direction={arrowPosition()} />
          </button>
        </>
      ) : (
        <Link
          href={activeMenu.url}
          className={styles.titleLink}
          style={{ maxWidth: `${menuItems.title.length * 1.6}ch` }}
        >
          {activeMenu.title}
        </Link>
      )}
      <CSSTransition
        nodeRef={menuRef}
        in={isOpen}
        timeout={300}
        classNames={animationClasses}
        onExited={() => {
          setActiveMenu(menuItems);
        }}
        unmountOnExit
      >
        <ul
          ref={menuRef}
          className={styles.menu}
          style={{
            maxWidth: "fit-content",
            minWidth: `${parentProps.width}px`,

            ...getMenuPosition(),
          }}
        >
          {activeMenu.submenu?.map((item, index) => {
            return (
              <MenuItems
                setMenu={(menu) => {
                  setIsOpen(false);
                  setActiveMenu(menu);
                  setIsOpen(true);
                }}
                arrowPosition={getArrowDirection(menuPosition!, false)}
                key={index}
                item={item}
              />
            );
          })}
        </ul>
      </CSSTransition>
    </>
  );
}
export function MenuItems({
  item,
  setMenu,
  arrowPosition,
}: {
  setMenu?: (menu: MenuItemProp | Submenu) => void;
  item: Submenu | RedirectLink;
  arrowPosition: Direction;
}) {
  return (
    <li>
      {item.hasOwnProperty("submenu") ? (
        <button
          type="button"
          onClick={() => {
            if (setMenu) setMenu(item);
          }}
        >
          {item.title}
          <ArrowIcon
            className={styles.submenuArrow}
            direction={arrowPosition}
          />
        </button>
      ) : (
        <Link className={styles.linkTest} href={(item as RedirectLink).url}>
          {item.title}
        </Link>
      )}
    </li>
  );
}

export default DropDownMenu;
