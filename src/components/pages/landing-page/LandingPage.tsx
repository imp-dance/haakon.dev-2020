import React from "react";
import styled from "styled-components";

import Header from "../../core/header/Header";
import { Container, DarkSection, LightSection } from "../../core/layout";
import Accordion from "../../core/Accordion";
import ExperienceTable from "./experience-table/ExperienceTable";
import ExternalLink from "../../core/links/ExternalLink";
import ToolsShowcase from "./ToolsShowcase";

import { ReactComponent as HeaderSVG } from "../../../assets/svg/vector.svg";
import landingPageData from "../../../data/landingPage";
import { fadeUpButtons, fadeIn } from "../../../styles/animations";
import constants from "../../../styles/constants";

const { colors, typography } = constants;

const LandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <LandingPageContainer>
        <IntroSection>
          <Container>
            <IntroTitle>
              {landingPageData.header.title.split(" ").map((item) => (
                <i>{item} </i>
              ))}
            </IntroTitle>
            {landingPageData.header.text}
          </Container>
          <HeaderSVG />
        </IntroSection>
        <InfoSection>
          <Container>
            <Accordion label="Work & Experience" render={<ExperienceTable />} />
            <Accordion
              label="Tools & Technologies"
              render={<ToolsShowcase />}
            />
            <Accordion
              label="Links & References"
              render={
                <>
                  <ExternalLink to="https://github.com/imp-dance">
                    Github
                  </ExternalLink>
                  ,
                  <ExternalLink to="https://codepen.io/schart">
                    Codepen
                  </ExternalLink>
                  ,
                  <ExternalLink to="https://www.linkedin.com/in/hakonunderbakke/">
                    Linkedin
                  </ExternalLink>
                </>
              }
            />
          </Container>
        </InfoSection>
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
  }
`;

const IntroSection = styled(DarkSection)`
  p {
    animation: ${fadeIn} 0.2s ease-in-out;
    will-change: opacity;
    animation-fill-mode: both;
    animation-delay: 1.5s;
  }
  p,
  h2 {
    position: relative;
    z-index: 1;
    background: ${colors.bg};
  }
  h2 {
    display: inline-block;
  }
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
`;

const InfoSection = styled(LightSection)`
  .accordion-container {
    animation: ${fadeIn} 0.2s ease-in-out;
    will-change: opacity;
    animation-fill-mode: both;
    animation-delay: 2.4s;
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

export default LandingPage;
