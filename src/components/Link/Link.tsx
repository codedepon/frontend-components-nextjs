import React from "react";
import { AnchorHTMLAttributes } from "react";
import { Link } from "react-router-dom";
function Link1({
  href,
  className,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link to={href!} {...props}>
      <a className={className}>{children}</a>
    </Link>
  );
}
export default Link1;
