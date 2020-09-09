import React from "react";
import styled from "styled-components";
import constants from "../../../styles/constants";

import { Container, DarkSection } from "../../core/layout";
import Link from "../../core/links/Link";

const { whitespace, typography } = constants;

const Article404 = () => {
  return (
    <>
      <DarkSection>
        <Container>
          <Title>Aw shucks, looks like a 404</Title>
          <p>
            That article doesn't exist anymore{" "}
            <span role="img" aria-label="Man shrugging">
              🤷‍♂️
            </span>
          </p>
          <p>
            <Link to="/#articles">Or maybe it does?</Link>
          </p>
        </Container>
      </DarkSection>
    </>
  );
};

const Title = styled.h2`
  margin: 0 0 ${whitespace.l};
  font-size: ${typography.xl};
`;

export default Article404;
