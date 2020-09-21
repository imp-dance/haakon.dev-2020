import React from "react";
import styled from "styled-components";
import Particles from "react-tsparticles";

import { Container, DarkSection, LightSection } from "../../core/layout";
import ExperienceTable from "./experience-table/ExperienceTable";
import ExternalLink from "../../core/links/ExternalLink";
import ToolsShowcase from "./ToolsShowcase";

import { ReactComponent as HeaderSVG } from "../../../assets/svg/vector.svg";
import landingPageData from "../../../data/landingPage";
import { fadeUpButtons, fadeIn } from "../../../styles/animations";
import constants from "../../../styles/constants";
import particleOptions from "../../../data/particles.json";

const { colors, typography, whitespace } = constants;

const LandingPage: React.FC = () => {
  return (
    <>
      <LandingPageContainer>
        <IntroSection>
          <Container>
            <IntroTitle>
              {landingPageData.header.title.split(" ").map((item, index) => (
                <i key={`title-letter-${index}`}>{item} </i>
              ))}
            </IntroTitle>
            {landingPageData.header.text}
          </Container>
          <HeaderSVG />
        </IntroSection>
        <InfoSection>
          <InnerContainer>
            <ExperienceTable />
          </InnerContainer>
        </InfoSection>
        <DarkSection>
          <ToolsShowcaseContainer>
            <Particles id="tsParticles" options={particleOptions} />
            <InnerContainer>
              <ToolsShowcase />
            </InnerContainer>
          </ToolsShowcaseContainer>
        </DarkSection>
        <InfoSection>
          <Container>
            <LinksAndReferences className="linksAndReferences">
              <p>You can find me on...</p>
              {landingPageData.linksAndReferences.map((item, index) => (
                <LinkReference to={item.url} key={`link-reference-${index}`}>
                  {item.title} {item.context && <span>{item.context}</span>}
                </LinkReference>
              ))}
            </LinksAndReferences>
          </Container>
        </InfoSection>
        <DarkSection>
          <Container>
            <IntroTitle>Psst, I also make music</IntroTitle>
            <p>
              You can find my music everywhere as <strong>sl1ck</strong>.
            </p>
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

const ToolsShowcaseContainer = styled.div`
  #tsParticles {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    animation: ${fadeIn} 0.2s ease-in-out;
    will-change: opacity;
    animation-fill-mode: both;
    animation-delay: 2.3s;
  }
`;

const LandingPageContainer = styled.div`
  z-index: 1;
  background: ${colors.bg};

  section {
  }
`;

const InnerContainer = styled(Container)`
  > div {
    margin: 0 0 ${whitespace.l};
    opacity: 0.6;
    animation: ${fadeIn} 0.2s ease-in-out;
    will-change: opacity;
    animation-fill-mode: both;
    animation-delay: 2.3s;
    &:last-child {
      margin: none;
    }
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
    z-index: 0;
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
  .accordion-container,
  .linksAndReferences {
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

const LinksAndReferences = styled.div`
  background: ${colors.gray};
  padding: ${whitespace.m};
  > *:first-child {
    margin-top: 0;
  }
  > *:last-child {
    margin-bottom: 0;
  }
`;

const LinkReference = styled(ExternalLink)`
  display: flex;
  align-items: center;
  padding: ${whitespace.s};
  background: ${colors.beige};
  color: ${colors.bgDark};
  margin: 0 0 ${whitespace.s};
  text-decoration: none;
  span {
    margin-left: auto;
    font-size: ${typography.s};
    opacity: 0.4;
    text-align: right;
  }
  &:hover {
    background: ${colors.bg};
    color: ${colors.white};
  }
`;

export default LandingPage;
