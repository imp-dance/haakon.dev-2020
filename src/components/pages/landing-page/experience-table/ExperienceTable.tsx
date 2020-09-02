import React, { useRef, useState } from "react";
import styled from "styled-components";

import useMouseMove from "../../../../hooks/useMouseMove";
import constants from "../../../../styles/constants";
import Dialog from "./Dialog";
import landingPageData from "../../../../data/landingPage";

const { colors, typography, whitespace } = constants;

export interface EntryProps {
  isJob: boolean;
  date: string;
  content: string;
  url?: string;
  title: string;
  longText?: React.ReactNode;
}

const ExperienceTable: React.FC = () => {
  return (
    <div>
      <TableTitle>Work</TableTitle>
      <ExperienceTableContainer>
        <tbody>
          {landingPageData.experienceTable.work.map((workItem) => (
            <Entry
              isJob={true}
              title={workItem.title}
              content={workItem.position}
              date={workItem.date}
              longText={workItem.text}
              url={workItem.url}
            />
          ))}
        </tbody>
      </ExperienceTableContainer>
      <TableTitle>Projects</TableTitle>
      <ExperienceTableContainer>
        <tbody>
          {landingPageData.experienceTable.projects.map((projectItem) => (
            <Entry
              isJob={false}
              title={projectItem.title}
              content={projectItem.shortText}
              date={projectItem.date}
              longText={projectItem.text}
              url={projectItem.url}
            />
          ))}
        </tbody>
      </ExperienceTableContainer>
    </div>
  );
};

const Entry: React.FC<EntryProps> = ({
  isJob,
  date,
  content,
  url,
  title,
  longText,
  ...props
}) => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const buttonRef = useRef<HTMLTableDataCellElement>(null);
  const [mouseMove, styles] = useMouseMove(buttonRef);
  const onKeyDown = (e: React.KeyboardEvent) => {
    const { key } = e;
    if (key === " " || key === "Enter") {
      e.preventDefault();
      !isDialogOpen && setDialogOpen(true);
    }
  };
  return (
    <EntryContainer>
      <td valign="top">{date}</td>
      <ProjectButton
        valign="top"
        ref={buttonRef}
        role="button"
        onMouseMove={mouseMove}
        tabIndex={0}
        onKeyDown={onKeyDown}
        style={styles}
        onClick={!isDialogOpen ? () => setDialogOpen(true) : undefined}
      >
        <strong>{title}</strong>
        {content}
      </ProjectButton>
      <Dialog
        close={() => setDialogOpen(false)}
        content={{ isJob, date, content, url, title, longText }}
        openOn={isDialogOpen}
      />
    </EntryContainer>
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
      opacity: 0.5;
    }
  }
`;

const EntryContainer = styled.tr`
  font-size: ${typography.s};
  opacity: 1;
  > td {
    padding-bottom: ${whitespace.m};
    &:first-child {
      padding-top: ${whitespace.s};
      padding-right: ${whitespace.m};
      border-right: 1px solid ${colors.lightPink};
      width: 80px;
      text-align: center;
    }
    &:last-of-type {
      padding-left: ${whitespace.m};
    }
  }
  strong {
    font-size: ${typography.m};
    display: block;
  }
  a {
    color: ${colors.primary};
    text-decoration: none;
  }
`;

export default ExperienceTable;
