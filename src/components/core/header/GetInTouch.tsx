import React, { useState } from "react";
import styled from "styled-components";
import FancyButton from "../buttons/FancyButton";
import constants from "../../../styles/constants";
const { colors, whitespace } = constants;

const GetInTouch: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <FancyButton onClick={() => setOpen(true)}>Get in touch</FancyButton>
      <Modal open={open} close={() => setOpen(false)} />
    </>
  );
};

interface ModalProps {
  open: boolean;
  close?: () => void;
}

const Modal: React.FC<ModalProps> = ({ open, close }) => {
  return (
    <>
      <Backdrop open={open} onClick={close}>
        <ModalContainer open={open} onClick={(e) => e.stopPropagation()}>
          <iframe
            title="Contact"
            src="https://docs.google.com/forms/d/e/1FAIpQLSccn9xWFPR6JVyg0zm4eq_RWHDV5q6ChTbMVWDt4YTZiekVUA/viewform?embedded=true"
            width="640"
            height="808"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
          >
            Loading…
          </iframe>
        </ModalContainer>
      </Backdrop>
    </>
  );
};

const Backdrop = styled.div<ModalProps>`
  position: fixed;
  background: ${colors.bg}fa;
  opacity: ${(props) => (props.open ? "1" : "0")};
  pointer-events: ${(props) => (props.open ? "all" : "none")};
  transition: all 0.2s ease-in-out;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: grid;
  place-content: center;
  z-index: 15;
  cursor: pointer;
`;
const ModalContainer = styled.div<ModalProps>`
  transition: all 0.2s ease-in-out;
  background: ${colors.bg};
  padding: ${whitespace.l};
  transform: ${(props) =>
    props.open ? `translate(0px, 0px)` : `translate(0px, 20px) scale(0.9)`};
  cursor: default;
`;

export default GetInTouch;
