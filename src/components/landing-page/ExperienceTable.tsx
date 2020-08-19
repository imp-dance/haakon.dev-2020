import React, { useRef, useState } from "react";
import styled from "styled-components";
import useMouseMove from "../../hooks/useMouseMove";

import constants from "../../styles/constants";
const { colors, typography, whitespace } = constants;

interface EntryProps {
  isJob: boolean;
  date: string;
  content: string;
  url?: string;
  title: string;
}

const ExperienceTable: React.FC = () => {
  return (
    <div>
      <TableTitle>Work</TableTitle>
      <ExperienceTableContainer>
        <tbody>
          <Entry
            isJob={true}
            title="Idean Norway (Capgemini Norge AS)"
            date="2020 - Present"
            content="Front End Developer"
          />
          {/* <Entry
              isJob={false}
              title="Ryfylke Kranservice AS"
              date="2019"
              content="Designed and developed their new website."
              url="https://ryfylkekranservice.no"
            /> */}
          <Entry
            isJob={true}
            title="LIGL AS"
            date="2016 - 2020"
            content="Legal Tech Developer | Web Developer | IT-Consultant"
          />
        </tbody>
      </ExperienceTableContainer>
      <TableTitle>Projects</TableTitle>
      <ExperienceTableContainer>
        <tbody>
          <Entry
            isJob={false}
            title="Ida by LIGL"
            date="2019"
            content="Released first major version of Ida by LIGL."
            url="https://ida.ligl.no"
          />
          <Entry
            isJob={false}
            title="Eirik Underbakke Portfolio"
            date="2015"
            content="Developed website & backend system based on his own design."
            url="https://eirik.underbakke.net/"
          />
          <Entry
            isJob={false}
            title="Ryfylke Bok & IT"
            date="2015"
            content="Developed & designed their website in-house while working summer job."
            url="https://bok-it.no"
          />
        </tbody>
      </ExperienceTableContainer>
    </div>
  );
};

const Entry: React.FC<EntryProps> = ({ isJob, date, content, url, title }) => {
  const buttonRef = useRef<HTMLTableDataCellElement>(null);
  const [mouseMove, styles] = useMouseMove(buttonRef);
  return (
    <ProjectEntry>
      <td valign="top">{date}</td>
      <ProjectButton
        valign="top"
        ref={buttonRef}
        role="button"
        onMouseMove={mouseMove}
        style={styles}
      >
        <strong>{title}</strong>
        {content}
      </ProjectButton>
    </ProjectEntry>
  );
};

const TableTitle = styled.h3`
  padding: ${whitespace.m};
  &:first-child {
    padding-top: 0px;
  }
  &:before {
    content: "# ";
  }
`;

const ExperienceTableContainer = styled.table`
  width: 100%;
  background: ${colors.beige};
  padding: ${whitespace.m};
`;

const ProjectButton = styled.td`
  transition: transform 0.1s ease-in-out;
  will-change: transform, background;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  strong {
    position: relative;
    z-index: 2;
  }
  &:after {
    content: "";
    display: block;
    width: 70%;
    height: 8em;
    background: radial-gradient(white 10%, transparent 70%);
    position: absolute;
    will-change: top, left;
    top: calc(var(--y) * 1px);
    left: calc(var(--x) * 1px);
    transform: translate(-50%, -50%);
    opacity: 0;
    pointer-events: none;
    z-index: 1;
  }
  &:hover {
    transform: scale(1.01);
    &:after {
      opacity: 0.3;
    }
  }
`;

const ProjectEntry = styled.tr`
  font-size: ${typography.s};
  opacity: 0.8;
  > td {
    padding-bottom: ${whitespace.m};
    &:first-child {
      padding-top: ${whitespace.s};
      padding-right: ${whitespace.m};
      border-right: 1px solid ${colors.lightPink};
      width: 80px;
      text-align: center;
    }
    &:last-child {
      padding-left: ${whitespace.m};
    }
  }
  strong {
    font-size: ${typography.m};
  }
  a {
    color: ${colors.primary};
    text-decoration: none;
  }
  strong,
  a {
    display: block;
  }
`;

const JobEntry = styled(ProjectEntry)``;

export default ExperienceTable;
