import React from "react";
import styled, { keyframes } from "styled-components";

import { fadeInUp } from "../../../styles/animations";
import Link from "../links/Link";

const Title = () => {
  const titles = ["dev", "music", "design"];
  return (
    <StyledLink to="/">
      <StyledTitle>
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
    }
  }
  &:hover {
    .header-titleRotator {
      span {
        animation: ${animation} 4.5s ease-in-out infinite;
        @media screen and (max-width: 570px) {
          animation: none;
        }
      }
    }
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
