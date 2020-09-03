import React from "react";

interface Props {
  to: string;
  className?: string;
}

const ExternalLink: React.FC<Props> = ({
  to,
  children,
  className,
  ...props
}) => {
  return (
    <a
      {...props}
      href={to}
      rel="noopener noreferrer"
      target="_blank"
      className={className}
    >
      {children}
    </a>
  );
};

export default ExternalLink;
