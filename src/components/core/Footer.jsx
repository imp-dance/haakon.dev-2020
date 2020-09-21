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
          &lt;source /&gt;
        </SourceLink>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  margin-top: auto;
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

export default Footer;
