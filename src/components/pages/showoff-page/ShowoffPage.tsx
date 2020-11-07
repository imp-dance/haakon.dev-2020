import React from "react";
import styled from "styled-components";
import { fadeIn, fadeInUp } from "../../../styles/animations";
import constants from "../../../styles/constants";
import Button from "../../core/buttons/Button";
import { Container } from "../../core/layout";
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
  return (
    <ShowoffPageContainer>
      <h2>{title}</h2>
      <Subline>
        {isJob ? <JobTag>Position</JobTag> : <ProjectTag>Project</ProjectTag>}
        {shortText} ({date})
      </Subline>
      {longText}
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

const GoButton = styled(Button)`
  border-color: ${colors.bg};
  width: 100%;
  opacity: 0.6;
  &:hover {
    opacity: 1;
    border-color: ${colors.primary};
  }
`;

const Tag = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: ${whitespace.xs} ${whitespace.s};
  margin-right: ${whitespace.s};
  border-radius: 3px;
  background: linear-gradient(
    to top right,
    ${colors.secondary},
    ${colors.primary}
  );
  opacity: 0.8;
  color: ${colors.beige};
  user-select: none;
  cursor: default;
  font-size: ${typography.xs};
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
  font-size: ${typography.s};
`;

const ShowoffPageContainer = styled(Container)`
  width: 100%;
  background: ${colors.bg};
  margin: 0 auto ${whitespace.l};
  padding: ${whitespace.l} ${whitespace.m} ${whitespace.m};
  color: ${colors.lightPink};
  animation: ${fadeIn} 0.2s ease-in-out;
  position: relative;
  ::before,
  ::after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    left: 0;
    border-radius: 3px;
    background: linear-gradient(180deg, ${colors.primary}, ${colors.bg} 200px);
    opacity: 0.2;
    user-select: none;
    pointer-events: none;
  }
  ::after {
    right: 100%;
    left: auto;
    width: 10px;
    background: linear-gradient(180deg, ${colors.bgDark}, ${colors.bg} 50%);
    opacity: 0.7;
  }
  a {
    color: ${colors.beige};
    &:hover {
      text-decoration: none;
    }
  }
  img {
    display: block;
    max-width: 100%;
  }
  h2 {
    font-size: ${typography.xl};
    margin-bottom: ${whitespace.m};
    animation: ${fadeInUp} 0.2s ease-in-out;
  }
  p {
    font-size: ${typography.sm};
    line-height: 1.5em;
  }
`;

export default ShowoffPage;
