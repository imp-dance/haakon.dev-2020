import React, { useEffect } from "react";
import styled from "styled-components";
import { fadeIn, fadeInUp, fadeInDown } from "../../../styles/animations";
import constants from "../../../styles/constants";
import Button from "../../core/buttons/Button";
import { Container } from "../../core/layout";
import Tag from "../../core/misc/Tag";
import { EntryProps } from "../landing-page/experience-table/ExperienceTable";

const { colors, typography, whitespace } = constants;

const ShowoffPage: React.FC<EntryProps> = ({
  isJob,
  date,
  shortText,
  url,
  title,
  longText,
  slug,
}) => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);
  return (
    <ShowoffPageContainer>
      <Header>
        <h2>{title}</h2>
        <Subline>
          {isJob ? <JobTag>Position</JobTag> : <ProjectTag>Project</ProjectTag>}
          {shortText} ({date})
        </Subline>
      </Header>
      <Content>{longText}</Content>
      <GoButton
        role="link"
        secondary
        onClick={() => {
          window.open(url);
        }}
      >
        Visit {isJob ? "company website" : "project"}
      </GoButton>
    </ShowoffPageContainer>
  );
};

const Content = styled.div`
  animation: ${fadeInUp} 0.3s ease-in-out;
  background: ${colors.white};
  padding: ${whitespace.l};
  color: ${colors.bgDark};
  font-family: "IBM Plex Sans", sans-serif;
  border-radius: 3px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  a {
    color: ${colors.primary};
    &:hover {
      text-decoration: none;
    }
  }
  img {
    display: block;
    max-width: 100%;
  }
  p {
    font-size: ${typography.m};
    line-height: 1.5em;
    max-width: 750px;
    &:first-child {
      margin-top: 0;
    }
  }
`;

const GoButton = styled(Button)`
  border-color: ${colors.bg};
  width: 100%;
  opacity: 0.6;
  margin-top: ${whitespace.m};
  &:hover {
    opacity: 1;
    border-color: ${colors.primary};
  }
`;

const Header = styled.header`
  padding: ${whitespace.xl} ${whitespace.m};
  h2 {
    font-size: ${typography.xl};
    margin: ${whitespace.m} 0;
    animation: ${fadeInUp} 0.2s ease-in-out;
    display: flex;
    align-items: center;
    gap: ${whitespace.m};
    &:before,
    &:after {
      content: "";
      flex: 1;
      background: linear-gradient(
        to right,
        ${colors.primary},
        ${colors.secondary}
      );
      height: 0.1em;
      margin: 0.2em;
      border-radius: 5px;
      opacity: 0.3;
    }
  }
`;

const JobTag = styled(Tag)`
  background: linear-gradient(
    to bottom right,
    ${colors.secondary},
    ${colors.primary}
  );
`;
const ProjectTag = styled(Tag)``;

const Subline = styled.div`
  opacity: 0.8;
  font-style: normal;
  margin-bottom: ${whitespace.m};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: ${typography.s};
  animation: ${fadeInDown} 0.4s ease-in-out;
`;

const ShowoffPageContainer = styled(Container)`
  width: 100%;
  background: ${colors.bg};
  margin: 0 auto ${whitespace.l};
  color: ${colors.lightPink};
  animation: ${fadeIn} 0.2s ease-in-out;
  position: relative;
`;

export default ShowoffPage;
