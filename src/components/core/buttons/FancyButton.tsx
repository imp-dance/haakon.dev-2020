import React, { useState, useRef } from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const FancyButton: React.FC<Props> = ({ children, ...props }) => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLButtonElement>(null);

  const mouseMove = (event: React.MouseEvent) => {
    const { pageX, pageY } = event;
    if (ref !== null && ref.current) {
      setCoordinates({
        x: pageX - ref.current.offsetLeft,
        y: pageY - ref.current.offsetTop,
      });
    }
  };

  const styles = {
    "--x": coordinates.x,
    "--y": coordinates.y,
  } as React.CSSProperties;

  return (
    <StyledButton {...props} ref={ref} onMouseMove={mouseMove} style={styles}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  transition: all 0.2s ease-in-out;
  background: linear-gradient(150deg, #b15c5c, #746ec3);
  position: relative;
  font-family: sans-serif;
  font-size: 13px;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
  padding: 15px 30px;
  border-radius: 4px;
  border: 2px solid transparent;
  cursor: pointer;
  overflow: hidden;
  opacity: 0.9;

  &:after {
    content: "";
    transition: opacity 0.2s ease-in-out;
    position: absolute;
    top: calc(var(--y) * 1px);
    left: calc(var(--x) * 1px);
    transform: translate(-50%, -50%);
    width: 10em;
    height: 10em;
    background: radial-gradient(#ffffff, rgba(255, 255, 255, 0) 70%);
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    user-select: none;
    outline: none;
  }

  &:hover {
    opacity: 1;
    border-color: #fff;

    &:after {
      opacity: 0.3;
    }
  }

  &:focus {
    outline: 5px auto rgba(0, 150, 255, 1);
  }
`;

export default FancyButton;
