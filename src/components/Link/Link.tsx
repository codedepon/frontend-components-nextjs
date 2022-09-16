import React from "react";
import { AnchorHTMLAttributes } from "react";
function Link({
  href,
  className,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  try {
    const NextLink = require("next/link");

    return (
      <NextLink href={href!} {...props}>
        <a className={className}>{children}</a>
      </NextLink>
    );
  } catch {
    return (
      <a {...props} href={href} className={className}>
        {children}
      </a>
    );
  }
}
export default Link;
