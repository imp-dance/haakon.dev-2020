import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FancyButton from "../buttons/FancyButton";
import constants from "../../../styles/constants";
const { colors } = constants;

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
  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      close && close();
    }
  };
  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", onKeyDown);
    } else {
      document.removeEventListener("keydown", onKeyDown);
    }
    return () => document.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line
  }, [open]);
  return (
    <>
      <Backdrop open={open} onClick={close}>
        <ModalContainer open={open} onClick={(e) => e.stopPropagation()}>
          {open && (
            <FrameContainer>
              <iframe
                title="Contact"
                src="https://docs.google.com/forms/d/e/1FAIpQLSccn9xWFPR6JVyg0zm4eq_RWHDV5q6ChTbMVWDt4YTZiekVUA/viewform?embedded=true"
                width="640"
                height="620"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
              >
                Loading…
              </iframe>
              <FancyButton onClick={close} secondary>
                Close form
              </FancyButton>
            </FrameContainer>
          )}
        </ModalContainer>
      </Backdrop>
    </>
  );
};

const Backdrop = styled.div<ModalProps>`
  position: fixed;
  background: ${colors.bgDark}ee;
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
  transform: ${(props) =>
    props.open ? `translate(0px, 0px)` : `translate(0px, 20px) scale(0.9)`};
  cursor: default;
  overflow: hidden;
  overflow: auto;
`;

const FrameContainer = styled.div`
  display: flex;
  flex-direction: column;
  button {
    border-radius: 0px;
    border: none !important;
  }
  iframe {
    max-width: 100% !important;
    color: ${colors.beige};
    background: ${colors.gray};
    max-height: calc(100vh - 100px);
  }
`;

export default GetInTouch;
