import React from "react";
import styles from "./DropDownMenu.module.scss";
import { CSSProperties, useState } from "react";
import useClickOutside from "../../hooks/use-click-outside";
import { ArrowIcon } from "../Icons/Icons";
import useParentProps from "../../hooks/use-parent-props";
import { CSSTransition } from "react-transition-group";
import Link from "../Link/Link";
import {
  MenuItemProp,
  Submenu,
  RedirectLink,
} from "../../interfaces/MenuTypes";
import { Direction } from "../../interfaces/Utilities";

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
  menuItems: MenuItemProp;
  menuPosition?: Direction;
  menuContainerClassName?: string;
  menuTitleClassName?: string;
  menuItemClassName?: string;
}

function DropDownMenu({
  menuItems,
  menuPosition,
  menuContainerClassName,
  menuTitleClassName,
  menuItemClassName,
}: DropDownMenuProps) {
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
          top: "105%",
          left: 0,
        };

      case Direction.right:
        return {
          top: 0,
          left: "105%",
        };
      case Direction.left:
        return {
          top: 0,
          right: "105%",
        };
      case Direction.up:
        return {
          bottom: "105%",
          left: 0,
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
  console.log("classes", menuTitleClassName);
  return (
    <div className={`${styles.container} ${menuContainerClassName || ""}`}>
      {menuItems.submenu ? (
        <>
          <button
            style={{
              ...(!menuTitleClassName && {
                width: `${menuItems.title.length * 1.3}ch`,
              }),
            }}
            aria-expanded={isOpen}
            ref={parentRef}
            className={`${styles.title} ${menuTitleClassName || ""}`}
            onClick={handleMenuToggle}
          >
            <span>{activeMenu.title}</span>
            <ArrowIcon className={styles.arrow} direction={arrowPosition()} />
          </button>
        </>
      ) : (
        <Link
          href={activeMenu.url}
          className={`${styles.titleLink} ${menuTitleClassName || ""}`}
          style={{
            ...(!menuTitleClassName && {
              maxWidth: `${menuItems.title.length * 1.3}ch`,
            }),
          }}
        >
          {activeMenu.title}
        </Link>
      )}
      <CSSTransition
        ref={null}
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
            // minWidth: "100%",

            ...getMenuPosition(),
          }}
        >
          {activeMenu.submenu?.map((item, index) => {
            return (
              <MenuItems
                className={menuItemClassName}
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
    </div>
  );
}
export function MenuItems({
  item,
  setMenu,
  arrowPosition,
  className,
}: {
  className?: string;
  setMenu?: (menu: MenuItemProp | Submenu) => void;
  item: Submenu | RedirectLink;
  arrowPosition: Direction;
}) {
  return (
    <li className={className || ""}>
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
