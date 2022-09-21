import React from "react";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import styles from "./Buttons.module.scss";

type ColorScheme = { color: "primary-500" | "secondary-800" | "secondary-900" };

enum ButtonSize {
  large = "large",
  medium = "medium",
  small = "small",
}
function Button({
  className,
  children,
  color,
  size,
  ...props
}: DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & { size: ButtonSize } & ColorScheme) {
  console.log(size);
  return (
    <button
      className={`${styles[`${size}Button`]} ${className} ${styles[color!]}`}
      {...props}
    >
      {children}
    </button>
  );
}

function LargeButton({
  ...props
}: DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  ColorScheme) {
  return <Button size={ButtonSize.large} {...props} />;
}

function SmallButton({
  ...props
}: DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  ColorScheme) {
  return <Button size={ButtonSize.small} {...props} />;
}
function MediumButton({
  ...props
}: DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  ColorScheme) {
  return <Button size={ButtonSize.medium} {...props} />;
}
export { LargeButton, MediumButton, SmallButton };
