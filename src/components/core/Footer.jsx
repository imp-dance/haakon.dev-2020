import React from "react";
import styled from "styled-components";
import { Container } from "./layout";
import constants from "../../styles/constants";
import ExternalLink from "./links/ExternalLink";
const { colors, whitespace, typography } = constants;

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <SourceLink to="https://github.com/imp-dance/portfolio-redesign-v999">
          <RiCodeSSlashFill /> source
        </SourceLink>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  text-align: center;
  padding: 0 0 ${whitespace.l};
`;

const SourceLink = styled(ExternalLink)`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  color: ${colors.lightPink};
  text-decoration: none;
  text-transform: uppercase;
  font-size: ${typography.m};
  opacity: 0.5;
  position: relative;
  svg {
    margin: 0 ${whitespace.s} 0;
  }
  &:after {
    content: "";
    position: absolute;
    top: calc(100% + 2px);
    height: 2px;
    background: ${colors.lightPink};
    left: 0;
    right: 0;
    transform: scaleX(0);
    transition: 0.4s;
    opacity: 0.5;
  }

  &:hover {
    &:after {
      transform: scaleX(1);
    }
  }
`;
function RiCodeSSlashFill(props) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      {...props}
    >
      <g>
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z" />
      </g>
    </svg>
  );
}

export default Footer;
