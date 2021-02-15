import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { Container } from "../layout";
import Button from "../buttons/Button";
import Title from "./Title";
import constants from "../../../styles/constants";
import { fadeUpButtons } from "../../../styles/animations";
import { Modal } from "./GetInTouch";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const history = useHistory();
  return (
    <>
      <StyledHeader id="header">
        <HeaderContainer>
          <HeaderAlignment>
            <LeftColumn>
              <Title />
            </LeftColumn>
            <RightColumn>
              <Button onClick={() => setOpen(true)}>Get in touch</Button>
              <Button
                secondary
                onClick={() =>
                  window.location.hash === "#/articles"
                    ? window.location.reload()
                    : history && history.push("/articles")
                }
              >
                Articles
              </Button>
            </RightColumn>
          </HeaderAlignment>
        </HeaderContainer>
      </StyledHeader>
      <Modal open={open} close={() => setOpen(false)} />
    </>
  );
};

const HeaderContainer = styled(Container)`
  padding: ${constants.whitespace.m} 0;
  top: 0;
`;

const StyledHeader = styled.div`
  background: ${constants.colors.white};
  padding: 0.5em ${constants.whitespace.l};
  position: relative;
  z-index: 2;

  h1 {
    font-size: 1.7em;
    margin: 0;
  }

  p {
    font-size: 0.9em;
    margin: 0;
  }

  button {
    border-color: #fff !important;
  }
  > div {
    transition: transform 0.18s ease-in-out;
  }
  @media screen and (min-width: 1200px) {
    position: sticky;
    top: 0px;
    &.isSticky {
      max-height: 73px;
      margin-bottom: 22.5px;
      top: -1px;
      > div {
        transform: scale(0.8) translateY(-15%);
      }
      background: ${constants.colors.bg};
      h1 {
        color: white;
      }
      button {
        &:first-of-type {
          opacity: 0;
          pointer-events: none;
        }
        border-color: ${constants.colors.bg} !important;
        &:hover::after {
          opacity: 0 !important;
        }
      }
    }
  }
`;

const HeaderAlignment = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 570px) {
    flex-direction: column;
    h1 {
      margin-bottom: ${constants.whitespace.m} !important;
    }
  }
`;

const LeftColumn = styled.div`
  flex: 2;
`;

const RightColumn = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 380px) {
    flex-direction: column;
    button {
      width: 100%;
      margin: 0 !important;
      font-size: ${constants.typography.xs};
    }
  }

  button {
    margin-right: 1em;
    animation: ${fadeUpButtons} 0.3s ease-in-out;
    animation-fill-mode: both;
    &:last-child {
      margin: 0;
      animation-delay: 0.2s;
    }
  }
`;

export default Header;
