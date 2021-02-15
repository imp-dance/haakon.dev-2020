import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";
import { useBoop } from "../../../hooks/useBoop";

import { fadeInUp } from "../../../styles/animations";
import constants from "../../../styles/constants";
import Link from "../links/Link";

const Title = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const titles = ["dev", "music", "design"];
  useBoop(titleRef, "animating");
  return (
    <StyledLink
      to="/#/"
      onKeyDown={(e) => {
        if (e.key === " ") {
          e.preventDefault();
          // Why? Because it feels natural to press space to click on the link/button
          // But, since this is a link, only "Enter" will work, space would normally
          // make the page scroll down - which is probably not what the user wants
          // when focusing the title.
        }
      }}
    >
      <StyledTitle ref={titleRef}>
        haakon.
        <TitleRotator className="header-titleRotator">
          {titles.map((item, index) => (
            <span key={`title-domain#${index}`}>{item}</span>
          ))}
        </TitleRotator>
      </StyledTitle>
    </StyledLink>
  );
};

const animation = keyframes`
    27%{
        transform: translate(0px, -0px);
    }
    33%{
      transform: translate(0px, -100%);
    }
    60%{
      transform: translate(0px, -100%);
    }
    66%{
      transform: translate(0px, -200%);
    }
    90%{
      transform: translate(0px, -200%);
    }
    100%{
      transform: translate(0px, 0px);
    }
`;

const StyledTitle = styled.h1`
  display: inline-flex;
  animation: ${fadeInUp} 0.3s ease-in-out;
  .header-titleRotator {
    span {
      @media screen and (max-width: 570px) {
        display: none;
        &:first-child {
          display: inline-block;
        }
      }
      background: none;
      background: -webkit-linear-gradient(
        30deg,
        ${constants.colors.secondary},
        ${constants.colors.pink},
        ${constants.colors.primary}
      );
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      &:first-child {
        -webkit-background-clip: initial;
        background-clip: initial;
        -webkit-text-fill-color: initial;
        background: none;
      }
      &:nth-child(2) {
        background: -webkit-linear-gradient(
          30deg,
          ${constants.colors.secondary},
          ${constants.colors.pink},
          ${constants.colors.primary}
        );
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      &:nth-child(3) {
        background: -webkit-linear-gradient(
          130deg,
          ${constants.colors.primary},
          ${constants.colors.secondary},
          ${constants.colors.lightPink}
        );
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
  &.animating {
    transition: all 0.2s ease-in-out;
    position: relative;
    .header-titleRotator {
      span {
        animation: ${animation} 4.5s ease-in-out;
        @media screen and (max-width: 570px) {
          animation: none;
        }
      }
    }
    &::after {
      animation: borderAnim 4.5s ease-in-out;
      transform: scaleX(1);
      opacity: 1;
    }
  }
  @keyframes borderAnim {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    95% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    transition: transform 0.2s ease-in-out, opacity 0.3s ease-in;
    transform: scaleX(0);
    height: 1px;
    opacity: 0;
    background: linear-gradient(
      30deg,
      ${constants.colors.primary},
      ${constants.colors.pink}
    );
  }
`;

const TitleRotator = styled.div`
  display: flex;
  flex-direction: column;
  max-height: calc(1em + 10px);
  overflow: hidden;
  span {
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export default Title;
