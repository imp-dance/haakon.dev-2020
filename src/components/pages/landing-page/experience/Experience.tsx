import React from "react";
import styled from "styled-components";
import constants from "../../../../styles/constants";
import InnerCont from "../../../core/layout/Container";
import landingPageData from "../../../../data/landingPage";
import { Link } from "react-router-dom";
import Tag from "../../../core/misc/Tag";
const { colors, typography, whitespace } = constants;
const {
  experienceTable: { projects, work },
} = landingPageData;

const experienceList = [...projects, ...work].sort((a, b) => {
  const parseDate = (date: string) =>
    parseInt(date.substring(0, 5), 10);
  const dateA = parseDate(a.date);
  const dateB = parseDate(b.date);
  return dateB - dateA;
});

type WorkItem = {
  title: string;
  date: string;
  _date: Date;
  position: string;
  slug: string;
  text: JSX.Element;
  url: string;
};

type ProjectItem = {
  title: string;
  date: string;
  shortText: string;
  slug: string;
  _date: Date;
  text: JSX.Element;
  url?: string;
};

type Props = {};

export const ExperienceSection = ({}: Props) => {
  const isWorkItem = (item: any): item is WorkItem =>
    item?.shortText === undefined;

  const renderWorkItem = (item: WorkItem) => (
    <ItemContainer to={`${item.slug}`} className="iswork">
      <h3>{item.title}</h3> <Tag>Work</Tag>
      <span className="shortText">
        <strong>{item.position}</strong>
      </span>
      <Date>{item.date}</Date>
      <ReadMore>Read more →</ReadMore>
    </ItemContainer>
  );

  const renderProjectItem = (item: ProjectItem) => (
    <ItemContainer to={`${item.slug}`}>
      <h3>{item.title}</h3>
      <Tag>Project</Tag>
      <span className="shortText">{item.shortText}</span>
      <Date>{item.date}</Date>
      <ReadMore>Read more →</ReadMore>
    </ItemContainer>
  );

  return (
    <Container>
      <InnerCont></InnerCont>
      <ShadowContainer>
        <ListContainer>
          {experienceList.map((item: ProjectItem | WorkItem) => {
            if (isWorkItem(item)) {
              return renderWorkItem(item);
            }
            return renderProjectItem(item);
          })}
        </ListContainer>
      </ShadowContainer>
    </Container>
  );
};

const Date = styled.div`
  position: absolute;
  bottom: ${whitespace.m};
  right: ${whitespace.m};
  color: ${colors.pink};
  font-size: ${typography.xs};
`;

const Container = styled.div`
  width: 100%;
  padding: ${whitespace.m};
`;

const ReadMore = styled.span`
  padding: ${whitespace.s};
  color: ${colors.bg};
  margin-top: ${whitespace.m};
  background: ${colors.beige};
  opacity: 0;
  transition: all 0.1s ease-in-out;
  font-size: ${typography.xs};
  font-weight: bold;
`;

const ShadowContainer = styled.div`
  margin: ${whitespace.xxl} auto;
  position: relative;
  width: min-content;
  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 6rem;
    pointer-events: none;
    background: linear-gradient(
      to left,
      ${colors.white},
      rgb(244 237 255 / 0%)
    );
  }
`;

const ListContainer = styled.div`
  display: flex;
  gap: ${whitespace.l};
  overflow-y: visible;
  overflow-x: auto;
  position: relative;
  max-width: calc(100vw - 10rem);
  > svg {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    width: 100%;
    z-index: -1;
  }
  --scroll-width: 20px;
  --scroll-size: 20px;
  --scroll-radius: 1px;
  --scroll-bg: transparent;
  --scroll-clr: transparent;
  /* Firefox */
  scrollbar-width: auto;
  scrollbar-color: var(--scroll-clr) var(--scroll-bg);
  padding: ${whitespace.xxl};
  padding-right: 15rem;
  padding-left: 3.4rem;
  background-image: url("https://haakon.dev/curveline.svg");
  background-repeat: repeat-x;
  background-position: center center;
  background-size: 100% 70px;
  background-attachment: scroll;
  /* Chrome, Edge, and Safari */
  &::-webkit-scrollbar {
    width: var(--scroll-size);
  }
  &::-webkit-scrollbar-track {
    background: var(--scroll-bg);
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--scroll-clr);
    border-radius: var(--scroll-radius);
    border: var(--scroll-width) solid var(--scroll-bg);
  }
`;

const ItemContainer = styled(Link)`
  padding: ${whitespace.m} ${whitespace.m} ${whitespace.xl};
  background: linear-gradient(
    to bottom right,
    ${colors.beige},
    ${colors.lightBeige}
  );
  --size: 280px;
  --offset: 5rem;
  flex-grow: 0;
  flex-shrink: 0;
  min-width: var(--size);
  max-width: var(--size);
  overflow: hidden;
  position: relative;
  opacity: 1;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  &:first-child {
    margin-left: -3rem;
    transform: scale(1.3) translateX(calc(var(--offset) / 2.5));
    opacity: 1;
    margin-right: var(--offset);
    &:hover ~ a,
    &:focus ~ a {
      transform: translateX(0px);
    }
  }
  height: var(--size);
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  h3 {
    font-size: ${typography.xl};
    color: #4b0732;
    display: flex;
    gap: ${whitespace.s};
    align-items: baseline;
    transition: all 0.3s ease-in-out;
    justify-content: space-between;
    padding-right: 60px;
  }
  ${Tag} {
    transition: all 0.2s ease-in-out, color 1s ease-in-out;
    position: absolute;
    top: 0;
    right: -1px;
    margin-right: 0;
    border-top-left-radius: 0%;
    border-bottom-right-radius: 0%;
    font-size: ${typography.xxs};
  }
  &.iswork {
    ${Tag} {
      background: #000;
    }
  }
  .shortText {
    color: ${colors.bgDark};
    font-size: ${typography.xs};
    opacity: 0.25;
    transform: translateY(15px);
    transition: all 0.2s ease-in-out;
  }
  &:nth-child(even) {
    height: calc(var(--size) * 1.25);
  }
  &:nth-child(4n) {
    margin-top: -3.9rem;
    padding-top: calc(${whitespace.m} + 3.3rem);
    &:hover,
    &:focus {
      transform: scale(1.3) translateX(calc(var(--offset) / 2.5))
        translateY(2.5rem);
      padding-top: calc(${whitespace.m} + 0.3rem);
    }
    h3 {
      padding: 0;
    }
  }
  &:hover,
  &:focus {
    transform: scale(1.3) translateX(calc(var(--offset) / 2.5));
    opacity: 1;
    ${ReadMore} {
      opacity: 0.8;
      transform: translateY(${whitespace.s});
      transition: all 0.2s ease-in-out;
    }
    ~ a {
      transform: translateX(var(--offset));
    }
    h3 {
      transform: scale(0.8) translate(-1.9rem, -0.5rem);
      color: ${colors.bgDark};
    }
    .shortText {
      transform: translateY(-5px);
      opacity: 1;
    }
    ${Tag} {
      transition: all 0.5s ease-in-out, color 0.05s ease-in-out,
        opacity 0.2s ease-in-out;
      top: -10px;
      right: 0;
      transform: scale(50);
      opacity: 0.05;
      pointer-events: none;
      user-select: none;
      color: transparent;
    }
  }
`;

export default ExperienceSection;
