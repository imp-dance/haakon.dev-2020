import styled from "styled-components";

import constants from "../../../styles/constants";
const { whitespace, colors, typography } = constants;

export const Section = styled.section`
  padding: ${whitespace.xxl} ${whitespace.l};
`;

export const DarkSection = styled(Section)`
  position: relative;
  overflow: hidden;
  color: ${colors.lightPink};
  padding: ${whitespace.xxl} ${whitespace.l};

  a {
    color: ${colors.lightPink};
    &:hover {
      text-decoration: none;
    }
  }

  p {
    font-size: ${typography.m};
    max-width: 700px;
  }
`;

export const LightSection = styled(Section)`
  background: ${colors.white};
`;
