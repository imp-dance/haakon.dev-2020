import styled from "styled-components";
import constants from "../../../styles/constants";

const Container = styled.div`
  margin: 0 auto;
  max-width: ${constants.whitespace.container};
  iframe[id^="chirpy-"] {
    padding: 0 2rem;
    background: #111111;
  }
`;

export default Container;
