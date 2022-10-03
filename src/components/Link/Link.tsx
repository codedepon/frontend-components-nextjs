import React from "react";
import { AnchorHTMLAttributes } from "react";
import { Link as ReactLink } from "react-router-dom";
function Link({
  href,
  className,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <ReactLink to={href!} {...props}>
      <a className={className}>{children}</a>
    </ReactLink>
  );
}
export default Link;
