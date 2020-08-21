import React, { useRef, useState } from "react";
import styled from "styled-components";

import useMouseMove from "../../../hooks/useMouseMove";
import constants from "../../../styles/constants";
import ExternalLink from "../../core/links/ExternalLink";
import Dialog from "./Dialog";

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
          <Entry
            isJob={true}
            title="Idean Norway (Capgemini Norge AS)"
            date="2020 - Present"
            content="Front End Developer"
            longText={
              <>
                <p>
                  I started working as a frontend developer for Idean in April
                  of 2020. Since then I've been able to take part in a couple of
                  projects, namely the CityforCity initiative - as well as an
                  internal Equinor project.
                </p>
                <p>
                  Working at Idean has been my first official web developer
                  position, and has allowed me to work with larger teams of
                  other developers and designers, which has greatly accelerated
                  my growth and learning.
                </p>
                <p>
                  I have worked using the scrum framework at a project at
                  Equinor, which has been a great experience.
                </p>
              </>
            }
            url="https://idean.com"
          />
          <Entry
            isJob={true}
            title="LIGL AS"
            date="2016 - 2020"
            content="Legal Tech Developer | Web Developer | IT-Consultant"
            longText={
              <>
                <p>
                  I worked for LIGL AS for 4 years, from August 2016 - April
                  2020.
                </p>
                <p>
                  During my time at LIGL I worked with a great range of tasks
                  ranging from office IT-support to web development and legal
                  tech development.
                </p>
                <p>
                  While working at LIGL, I learned how to use ContractExpress
                  Author to automate legal documents. I also designed a website
                  that interacts with these documents, complete with a login
                  system, rating system, backend statistics, rating and sorting,
                  and much more. This website came in many iterations, but the
                  final version which is still up today is called{" "}
                  <ExternalLink to="https://ida.ligl.no">
                    Ida by LIGL
                  </ExternalLink>
                  . .
                </p>
                <p>
                  Other than these projects, I've also developed and designed
                  their website,{" "}
                  <ExternalLink to="https://ligl.no">ligl.no</ExternalLink>. I
                  mostly made this in PHP, as the project was started before I
                  really had much experience with Javascript frameworks.
                </p>
              </>
            }
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
            longText={`Ida by LIGL was a project I worked on at LIGL and that I still maintain 
            today. Ida is a tool for anyone to generate top quality legal documents. I worked on 
            both the document automation part (using ContractExpress Author) as well as our web 
            portal for free users.`}
            url="https://ida.ligl.no"
          />
          <Entry
            isJob={false}
            title="Eirik Underbakke Portfolio"
            date="2015"
            content="Developed website & backend system based on his own design."
            longText={`This was my first project using a modern Javascript framework, made 
            in 2015. It was my first and only project using AngularJS. Designed by my brother, 
            Eirik Underbakke`}
            url="https://eirik.underbakke.net/"
          />
          <Entry
            isJob={false}
            title="Ryfylke Bok & IT"
            date="2015"
            content="Developed & designed their website in-house while working summer job."
            longText={`I was working for Ryfylke Bok & IT initially as summer-help. I worked 
            the cash register, as well as a little bit in the IT-department. Since their website 
            was quite outdated, I offered to build them a new one. They have kept my design 
            ever since.`}
            url="https://bok-it.no"
          />
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
  return (
    <EntryContainer>
      <td valign="top">{date}</td>
      <ProjectButton
        valign="top"
        ref={buttonRef}
        role="button"
        onMouseMove={mouseMove}
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
