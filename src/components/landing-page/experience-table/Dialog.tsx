import React from "react";
import styled, { css } from "styled-components";

import { fadeIn } from "../../../styles/animations";
import FancyButton from "../../core/buttons/FancyButton";
import constants from "../../../styles/constants";
import { EntryProps } from "./ExperienceTable";
import {
  DialogAnimation,
  DialogOutAnimation,
} from "../../../styles/animations";

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
  return (
    <>
      {openOn && <BackDrop />}
      <StyledDialog aria-hidden={!openOn} role="dialog" isOpen={openOn}>
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
        <LongText>{content.longText}</LongText>
        <DialogFooter>
          <FancyButton
            secondary
            onClick={() => window.open(content.url, "_blank")}
          >
            Visit website
          </FancyButton>
          <BackButton onClick={close}>Close</BackButton>
        </DialogFooter>
      </StyledDialog>
    </>
  );
};

const StyledDialog = styled.div<StyledDialogInterface>`
  width: ${constants.whitespace.container};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${colors.beige};
  padding: ${whitespace.l};
  height: 100%;
  overflow: auto;
  z-index: 5;
  animation: ${(props) =>
    props.isOpen
      ? css`
          ${DialogAnimation} 0.35s ease-in-out
        `
      : css`
          ${DialogOutAnimation} 0.1s ease-in-out
        `};
  animation-fill-mode: both;
  display: flex;
  flex-direction: column;
  ${(props) =>
    !props.isOpen &&
    `
    pointer-events:none;
  `}
`;

const BackDrop = styled.div`
  transition: opacity 0.2s ease-in-out;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
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

const BackButton = styled(FancyButton)`
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
