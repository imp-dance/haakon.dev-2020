import React, { useState, useRef, useEffect } from "react";
import { debounce } from "ts-debounce";
import styled from "styled-components";
import constants from "../../styles/constants";

const { typography, colors, whitespace } = constants;

interface Props {
  render: React.ReactNode;
  label: React.ReactNode;
}

interface OpenProps {
  open: boolean;
}

interface ContainerProps {
  margin: number;
}

const Accordion: React.FC<Props> = ({ label, render }) => {
  const [open, setOpen] = useState(false);
  const [accordionHeight, setAccordionHeight] = useState(0);
  const accordionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (accordionRef.current) {
        setAccordionHeight(accordionRef.current.offsetHeight);
      }
    };
    const handleResize = () => {
      updateHeight();
    };
    const eventListener = debounce(handleResize, 30);
    updateHeight();
    window.addEventListener("resize", eventListener);
    return () => window.removeEventListener("resize", eventListener);
  }, [accordionRef, open]);

  return (
    <AccordionContainer
      margin={open ? accordionHeight : 0}
      className="accordion-container"
    >
      <AccordionButton onClick={() => setOpen(!open)}>
        {label}
        <Icon open={open} />
      </AccordionButton>
      <AccordionContent open={open} ref={accordionRef}>
        {open ? render : ""}
      </AccordionContent>
    </AccordionContainer>
  );
};

const AccordionContainer = styled.div<ContainerProps>`
  position: relative;
  transition: all 300ms cubic-bezier(0.17, 0.04, 0.03, 0.94);
  will-change: margin-bottom;
  margin-bottom: calc(
    ${(props) => props.margin}px + ${whitespace.m} + ${whitespace.m}
  );
`;

const AccordionButton = styled.button`
  width: 100%;
  text-align: left;
  font-size: ${typography.l};
  border: none;
  background: ${colors.bg};
  color: ${colors.beige};
  padding: ${whitespace.m};
  cursor: pointer;
  position: relative;
`;

const Icon = styled.i<OpenProps>`
  display: grid;
  position: absolute;
  top: 50%;
  transform: translate(0px, -50%);
  right: ${whitespace.m};
  &:after,
  &:before {
    transition: transform 0.3s ease-in-out, opacity 0.4s linear;
    content: "";
    display: block;
    grid-column: 1;
    grid-row: 1;
    width: 1em;
    height: 1px;
    transform-origin: center;
    background: #fff;
    transform: ${(props) => (props.open ? "rotate(45deg)" : "rotate(0deg)")};
    opacity: ${(props) => (props.open ? "1" : "0")};
  }
  &:before {
    transform: ${(props) => (props.open ? "rotate(-45deg)" : "rotate(0deg)")};
  }
`;

const AccordionContent = styled.div<OpenProps>`
  transition: transform 300ms cubic-bezier(0.17, 0.04, 0.03, 0.94);
  transform: ${(props) => (props.open ? `scaleY(1)` : `scaleY(0)`)};
  transform-origin: top;
  margin: ${whitespace.m} 0;
  position: absolute;
  top: 100%;
  right: 0;
  left: 0;
`;

export default Accordion;
