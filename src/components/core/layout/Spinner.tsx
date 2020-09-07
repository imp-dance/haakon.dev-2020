import React from "react";
import styled from "styled-components";

interface Props {
  active?: boolean;
}

const Spinner: React.FC<Props> = ({ active = true }) => {
  return active ? <StyledSpinner /> : null;
};

const StyledSpinner = styled.i`
  display: inline-block;
  border-radius: 50%;
  width: 1em;
  height: 1em;
  &:after {
    border-radius: 50%;
    width: 1em;
    height: 1em;
  }
  margin: 60px auto;
  position: relative;
  text-indent: -9999em;
  border-top: 0.1em solid rgba(255, 255, 255, 0.2);
  border-right: 0.1em solid rgba(255, 255, 255, 0.2);
  border-bottom: 0.1em solid rgba(255, 255, 255, 0.2);
  border-left: 0.1em solid #ffffff;
  transform: translateZ(0);
  animation: load8 1.1s infinite linear;
  @keyframes load8 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;
