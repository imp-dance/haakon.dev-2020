import React, { useEffect } from "react";
import styled, { css } from "styled-components";

import { fadeIn } from "../../../../styles/animations";
import Button from "../../../core/buttons/Button";
import constants from "../../../../styles/constants";
import { EntryProps } from "./ExperienceTable";
import {
  DialogAnimation,
  DialogOutAnimation,
} from "../../../../styles/animations";

const { colors, whitespace } = constants;

interface DialogInterface {
  close: () => void;
  content: EntryProps;
  openOn: boolean;
}

interface StyledDialogInterface {
  isOpen: boolean;
}

const Dialog: React.FC<DialogInterface> = ({ close, content, openOn }) => {
  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      close && close();
    }
  };
  useEffect(() => {
    if (openOn) {
      document.addEventListener("keydown", onKeyDown);
    } else {
      document.removeEventListener("keydown", onKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
    // eslint-disable-next-line
  }, [openOn]);
  return (
    <>
      {openOn && <BackDrop onClick={close} />}
      <DialogContainer
        aria-hidden={!openOn}
        role="dialog"
        isOpen={openOn}
        key={``}
      >
        <StyledDialog aria-hidden={!openOn}>
          <h2>{content.title}</h2>
          <p>
            {content.isJob ? (
              <>
                Position: <b>{content.content}</b>
              </>
            ) : (
              <i>{content.date + " " + content.content}</i>
            )}
          </p>
          <LongText>{openOn && content.longText}</LongText>
          {openOn && (
            <DialogFooter>
              <Button
                secondary
                onClick={() => window.open(content.url, "_blank")}
                tabIndex={openOn ? 0 : -1}
              >
                Visit website
              </Button>
              <BackButton onClick={close} tabIndex={openOn ? 0 : -1}>
                Close
              </BackButton>
            </DialogFooter>
          )}
        </StyledDialog>
      </DialogContainer>
    </>
  );
};

const DialogContainer = styled.div<StyledDialogInterface>`
  display: grid;
  place-content: center;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  height: 100%;
  visibility: visible;
  z-index: 99;
  animation: ${(props) =>
    props.isOpen
      ? css`
          ${DialogAnimation} 0.35s ease-in-out
        `
      : css`
          ${DialogOutAnimation} 0.1s ease-in-out
        `};
  ${(props) =>
    !props.isOpen &&
    `
    pointer-events:none;
    visibility:hidden;
  `}
`;

const StyledDialog = styled.div`
  max-width: ${whitespace.container};
  background: ${colors.beige};
  padding: ${whitespace.l};
  overflow: auto;
  animation-fill-mode: both;
  display: flex;
  flex-direction: column;
  max-height: 90%;
`;

const BackDrop = styled.div`
  transition: opacity 0.2s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  background: ${colors.bg}f5;
  animation: ${fadeIn} 0.1s ease-in-out;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

const DialogFooter = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  button {
    border-color: ${colors.bg};
    &:hover {
      border-color: ${colors.bg};
    }
    &:after {
      display: none;
    }
    margin-top: ${whitespace.s};
  }
`;

const BackButton = styled(Button)`
  background: ${colors.bg};
`;

const LongText = styled.div`
  border: 1px solid ${colors.lightPink};
  padding: ${whitespace.m} 0;
  border-left: none;
  border-right: none;
  overflow: auto;
`;

export default Dialog;
