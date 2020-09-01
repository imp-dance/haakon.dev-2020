import styled from "styled-components";

const LoadingText = styled.span`
  display: block;
  &:after {
    overflow: hidden;
    display: inline-block;
    vertical-align: bottom;
    animation: ellipsis steps(4, end) 600ms infinite;
    content: "…"; /* ascii code for the ellipsis character */
    width: 2px;
    @keyframes ellipsis {
      to {
        width: 20px;
      }
    }
  }
`;

export default LoadingText;
