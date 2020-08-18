import React from "react";
import styled from "styled-components";

import Header from "../core/header/Header";
import { Container } from "../core/layout";
import constants from "../../styles/constants";
import { fadeIn, fadeUpButtons, expandOut } from "../../styles/animations";

import { ReactComponent as HeaderSVG } from "../../assets/svg/vector.svg";

const LandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <LandingPageContainer>
        <IntroSection>
          <Container>
            <IntroTitle>
              <i>Hi,</i> <i>my</i> <i>name</i> <i>is</i> <i>Håkon</i>{" "}
              <i>Underbakke.</i>
            </IntroTitle>
            <p>
              I'm a Norwegian frontend developer currently working for Idean.
            </p>
            <p>
              I have been doing web development professionally for the last 4
              years. These days, I mostly work with React and Typescript.
            </p>
          </Container>
          <HeaderSVG />
        </IntroSection>
        <Showcase>
          <Container>
            <IntroTitle>Check out some my work</IntroTitle>
          </Container>
        </Showcase>
      </LandingPageContainer>
    </>
  );
};

const LandingPageContainer = styled.div`
  z-index: 1;
  background: ${constants.colors.bg};

  section {
    padding: ${constants.whitespace.xxl} 0;
  }
`;

const IntroTitle = styled.h2`
  font-size: ${constants.typography.xl};
  > i {
    font-style: normal;
    animation: ${fadeUpButtons} 0.4s ease-in-out;
    animation-fill-mode: both;
    &:nth-child(1) {
      animation-delay: 0s;
    }
    &:nth-child(2) {
      animation-delay: 0.6s;
    }
    &:nth-child(3) {
      animation-delay: 0.7s;
    }
    &:nth-child(4) {
      animation-delay: 0.8s;
    }
    &:nth-child(5) {
      animation-delay: 1s;
    }
    &:nth-child(6) {
      animation-delay: 1.1s;
    }
  }
`;

const IntroSection = styled.section`
  position: relative;
  overflow: hidden;
  color: ${constants.colors.lightPink};

  > svg {
    position: absolute;
    bottom: 0;
    width: 100vw;
    right: 0;
    transform: rotate(80deg);
    z-index: 1;
    pointer-events: none;
    user-select: none;
  }

  #headerPath {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: dash 3s cubic-bezier(0.29, 0.74, 0.8, 0.34) forwards;
    animation-fill-mode: both;
    animation-delay: 2s;
  }
  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }

  p {
    font-size: ${constants.typography.m};
    max-width: 700px;
    animation: ${fadeIn} 0.2s ease-in-out;
    animation-fill-mode: both;
    animation-delay: 2s;
  }

  p,
  h2 {
    position: relative;
    z-index: 2;
    background: ${constants.colors.bg};
  }
  h2 {
    display: inline-block;
  }
`;

const Showcase = styled.section`
  background: ${constants.colors.white};
  animation: ${fadeIn} 0.5s ease-in-out;
  animation-delay: 3.9s;
  animation-fill-mode: both;
  min-height: 400px;
`;

export default LandingPage;
