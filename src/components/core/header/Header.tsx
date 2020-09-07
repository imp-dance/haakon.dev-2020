import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { Container } from "../layout";
import FancyButton from "../buttons/FancyButton";
import Title from "./Title";
import constants from "../../../styles/constants";
import { fadeUpButtons } from "../../../styles/animations";
import GetInTouch from "./GetInTouch";

const Header: React.FC = () => {
  const history = useHistory();
  return (
    <StyledHeader>
      <HeaderContainer>
        <HeaderAlignment>
          <LeftColumn>
            <Title />
          </LeftColumn>
          <RightColumn>
            <GetInTouch />
            <FancyButton
              secondary
              onClick={() =>
                window.location.pathname === "/articles"
                  ? window.location.reload()
                  : history.push("/articles")
              }
            >
              Articles
            </FancyButton>
          </RightColumn>
        </HeaderAlignment>
      </HeaderContainer>
    </StyledHeader>
  );
};

const HeaderContainer = styled(Container)`
  padding: ${constants.whitespace.m} 0;
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

  @media screen and (max-width: 360px) {
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
