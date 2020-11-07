import React from "react";
import styled from "styled-components";
import { Container } from "./layout";
import constants from "../../styles/constants";
import ExternalLink from "./links/ExternalLink";
const { colors, whitespace, typography } = constants;

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <SourceLink to="https://github.com/imp-dance/portfolio-redesign-v999">
          &lt;code src="github" open /&gt;
        </SourceLink>
      </FooterContainer>
    </StyledFooter>
  );
};

const FooterContainer = styled(Container)`
  text-align: center;
`;

const StyledFooter = styled.footer`
  margin-top: auto;
  text-align: center;
  padding: 0 0 ${whitespace.l};
`;

const SourceLink = styled(ExternalLink)`
  display: inline-flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  color: ${colors.lightPink};
  text-decoration: none;
  text-transform: uppercase;
  font-size: ${typography.s};
  padding: ${whitespace.s} ${whitespace.m};
  font-weight: bold;
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
