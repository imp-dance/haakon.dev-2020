import React from "react";
import styled from "styled-components";

import Header from "../core/header/Header";
import { Container } from "../core/layout";
import constants from "../../styles/constants";
import { fadeIn, fadeUpButtons } from "../../styles/animations";

import { ReactComponent as HeaderSVG } from "../../assets/svg/vector.svg";
import Accordion from "../core/Accordion";
import ExperienceTable from "./experience-table/ExperienceTable";
import ExternalLink from "../core/links/ExternalLink";

const { colors, typography, whitespace } = constants;

const LandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <LandingPageContainer>
        <DarkSection>
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
        </DarkSection>
        <LightSection>
          <Container>
            <Accordion label="Experience" render={<ExperienceTable />} />
            <Accordion
              label="Tools & Technologies"
              render={
                <div>
                  <h3>Javascript</h3>
                  <p>ES6, React, TypeScript, Node, Electron, jQuery</p>
                  <h3>CSS</h3>
                  <p>Sass, styled-components, animations, responsive design</p>
                  <h3>HTML</h3>
                  <p>HTML5, ARIA, Pug</p>
                  <h3>Tools</h3>
                  <p>Git, Webpack, VSCode</p>
                </div>
              }
            />
          </Container>
        </LightSection>
        <DarkSection>
          <Container>
            <IntroTitle>Psst, I also make music</IntroTitle>
            <p>You can find my music everywhere as sl1ck.</p>
            <p>
              <ExternalLink to="https://open.spotify.com/artist/5nieID8LGLw0nMgwbIIsVq?si=gkshKgypQiSbLlz4iILbMQ">
                Spotify
              </ExternalLink>
              ,{" "}
              <ExternalLink to="https://soundcloud.com/sl1ck">
                Soundcloud
              </ExternalLink>
              ,{" "}
              <ExternalLink to="https://www.youtube.com/channel/UCH_FcfP7oNrQXaC2RngA84Q">
                YouTube
              </ExternalLink>
            </p>
          </Container>
        </DarkSection>
      </LandingPageContainer>
    </>
  );
};

const LandingPageContainer = styled.div`
  z-index: 1;
  background: ${colors.bg};

  section {
    padding: ${whitespace.xxl} ${whitespace.l};
  }
`;

const IntroTitle = styled.h2`
  font-size: ${typography.xl};
  > i {
    font-style: normal;
    animation: ${fadeUpButtons} 0.4s ease-in-out;
    animation-fill-mode: both;
    will-change: opacity, transform;
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

const DarkSection = styled.section`
  position: relative;
  overflow: hidden;
  color: ${colors.lightPink};
  > svg {
    position: absolute;
    top: 0;
    width: 100vw;
    right: 0;
    transform: translate(0px, 50%) rotate(80deg);
    z-index: 1;
    pointer-events: none;
    user-select: none;
  }

  a {
    color: ${colors.lightPink};
    &:hover {
      text-decoration: none;
    }
  }

  #headerPath {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: dash 2s cubic-bezier(0.29, 0.74, 0.8, 0.34) forwards;
    will-change: stroke-dashoffset;
    animation-fill-mode: both;
    animation-delay: 1s;
  }
  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }

  p {
    font-size: ${typography.m};
    max-width: 700px;
    animation: ${fadeIn} 0.2s ease-in-out;
    will-change: opacity;
    animation-fill-mode: both;
    animation-delay: 1.5s;
  }

  p,
  h2 {
    position: relative;
    z-index: 2;
    background: ${colors.bg};
  }
  h2 {
    display: inline-block;
  }
`;

const LightSection = styled.section`
  background: ${colors.white};
  .accordion-container {
    animation: ${fadeIn} 0.2s ease-in-out;
    will-change: opacity;
    animation-fill-mode: both;
    animation-delay: 2.4s;
  }
`;

export default LandingPage;
