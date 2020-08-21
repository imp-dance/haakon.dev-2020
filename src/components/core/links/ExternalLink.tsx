import React from "react";

interface Props {
  to: string;
}

const ExternalLink: React.FC<Props> = ({ to, children }) => {
  return (
    <a href={to} rel="noopener noreferrer" target="_blank">
      {children}
    </a>
  );
};

export default ExternalLink;
