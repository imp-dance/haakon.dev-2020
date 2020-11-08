import styled from "styled-components";
import constants from "../../../styles/constants";
const { whitespace, colors, typography } = constants;

const Tag = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: ${whitespace.xs} ${whitespace.s};
  margin: 0 ${whitespace.s} ${whitespace.m} 0;
  border-radius: 3px;
  background: linear-gradient(
    to top right,
    ${colors.secondary},
    ${colors.primary}
  );
  opacity: 0.8;
  color: ${colors.beige};
  user-select: none;
  cursor: default;
  font-size: ${typography.xs};
`;

export default Tag;
