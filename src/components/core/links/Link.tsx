import React from "react";

interface Props {
  to: string;
}

const Link: React.FC<Props> = ({ to, children }) => {
  return <a href={to}>{children}</a>;
};

export default Link;
