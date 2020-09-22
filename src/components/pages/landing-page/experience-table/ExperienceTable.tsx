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
    <div style={{ position: "relative" }}>
      <TableTitle>Work</TableTitle>
      <ExperienceTableContainer>
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
      </ExperienceTableContainer>
      <TableTitle>Projects</TableTitle>
      <ExperienceTableContainer>
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
  const buttonRef = useRef<HTMLButtonElement>(null);
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
      <DateColumn>{date}</DateColumn>
      <ProjectButton
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

const DateColumn = styled.div`
  width: 70px;
  padding: ${whitespace.s};
  text-align: center;
`;

const TableTitle = styled.h3`
  padding: ${whitespace.m};
  margin-top: ${whitespace.m};
  &:first-child {
    padding-top: 0px;
    margin-top: 0px;
  }
  &:before {
    content: "# ";
  }
`;

const ExperienceTableContainer = styled.div`
  width: 100%;
  background: ${colors.beige};
  padding: ${whitespace.m};
`;

const ProjectButton = styled.button`
  transition: transform 0.1s ease-in-out;
  will-change: transform, background;
  cursor: pointer;
  overflow: hidden;
  border: none;
  background: ${colors.beige};
  width: 100%;
  text-align: left;
  padding: ${whitespace.s};
  strong {
    position: relative;
    z-index: 2;
  }
  &:before {
    content: "";
    display: block;
    position: absolute;
    pointer-events: none;
    background: transparent;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-bottom: 1px solid;
    will-change: transform, opacity;
    border-image: linear-gradient(150deg, rgb(177, 92, 92), rgb(116, 110, 195));
    border-image-slice: 1;
    transition: all 0.3s ease-in-out;
    transform: scaleX(0);
    opacity: 0;
    @media (prefers-reduced-motion) {
      transition: none;
    }
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
    /* transform: scale(1.01); */
    &:before {
      transform: scaleX(1);
      opacity: 1;
    }
    &:after {
      opacity: 0.5;
    }
  }
`;

const EntryContainer = styled.div`
  font-size: ${typography.s};
  opacity: 1;
  display: flex;
  width: 100%;
  > div {
    display: flex;
    flex-grow: 0;
    flex-shrink: 0;
    align-items: center;
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
