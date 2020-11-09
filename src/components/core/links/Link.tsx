import React from "react";

interface Props {
  to: string;
  className?: string;
  style?: React.CSSProperties;
  ref?: any;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  onClick?: (e: React.MouseEvent) => void;
}

const Link: React.FC<Props> = ({ to, children, className, ...props }) => {
  return (
    <a {...props} href={to} className={className}>
      {children}
    </a>
  );
};

export default Link;
