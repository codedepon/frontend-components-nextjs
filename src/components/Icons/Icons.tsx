import React from "react";
import { Direction } from "../../interfaces/Utilities";
import styles from "./Icons.module.scss";
interface IconProps {
  className?: string;
  color?: string;
  ref?: any;
}

export function CloseIcon({ className, color }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className ? className : styles.defaultIconClasses}
      fill="none"
      style={{ color: color }}
      viewBox="0 0 24 24"
      stroke={color ? color : "currentColor"}
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

interface ArrowProps extends IconProps {
  direction?: Direction;
}

export function ArrowIcon({ direction, className, color }: ArrowProps) {
  const rotation =
    direction === Direction.up
      ? "rotate(180deg)"
      : direction === Direction.left
      ? "rotate(90deg)"
      : direction === Direction.right
      ? "rotate(-90deg)"
      : "rotate(0deg)";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className ? className : styles.defaultIconClasses}
      viewBox="0 0 20 20"
      style={{
        transform: rotation,
        transition: "all",
        transitionDuration: "0.25s",
      }}
      fill={color ? color : "currentColor"}
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function MenuIcon({ color, className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className ? className : styles.defaultIconClasses}
      fill="none"
      viewBox="0 0 24 24"
      stroke={color ? color : "currentColor"}
      strokeWidth="2"
      style={{ color: color }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
}
export function PlusIcon({ className, color }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={3}
      stroke={color ? color : "currentColor"}
      className={className ? className : styles.defaultIconClasses}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );
}
export function PlayIcon({ className, color }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className ? className : styles.defaultIconClasses}
      fill="none"
      viewBox="0 0 24 24"
      stroke={color ? color : "currentColor"}
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

export function SortIcon({ className, color }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      className={className ? className : styles.defaultIconClasses}
      fill={color ? color : "currentColor"}
      viewBox="0 0 16 16"
    >
      <path d="M3.5 2.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 11.293V2.5zm3.5 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
    </svg>
  );
}

export function StarIcon({ color, className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className ? className : styles.defaultIconClasses}
      viewBox="0 0 20 20"
      fill={color ? color : "currentColor"}
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export function UserIcon({ className, color }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className ? className : styles.defaultIconClasses}
      fill="none"
      viewBox="0 0 24 24"
      stroke={color ? color : "currentColor"}
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  );
}

export function CheckmarkIcon({ className, color }: IconProps) {
  return (
    <svg
      className={className ? className : styles.defaultIconClasses}
      stroke={color ? color : "currentColor"}
      viewBox="0 0 42 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M41.235 5.22571L16.7281 32.9727L0.686327 21.3709L5.0795 15.5343L15.6367 23.1695L35.6651 0.493142L41.235 5.22571Z"
        fill="#FFC700"
      />
    </svg>
  );
}

export function OptionsIcon({ className, color }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={3}
      stroke={color ? color : "currentColor"}
      className={className ? className : styles.defaultIconClasses}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
      />
    </svg>
  );
}
export function ImageIcon({ className, color }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={3}
      stroke={color ? color : "currentColor"}
      className={className ? className : styles.defaultIconClasses}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
      />
    </svg>
  );
}
export function NavIcon({ className, color }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke={color ? color : "currentColor"}
      className={className ? className : styles.defaultIconClasses}
    >
      <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  );
}
