import React from "react";
import { AnchorHTMLAttributes } from "react";
import { default as NextLink } from "next/link";
function Link({
  href,
  className,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <NextLink className={className} href={href!} {...props}>
      <a className={className}>{children}</a>
    </NextLink>
  );
}
export default Link;
