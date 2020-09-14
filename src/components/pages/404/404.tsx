import React from "react";
import styled from "styled-components";

import { DarkSection, Container } from "../../core/layout";
import Link from "../../core/links/Link";
import constants from "../../../styles/constants";

const { typography, whitespace } = constants;

const Page404 = () => {
  return (
    <>
      <DarkSection>
        <Container>
          <Title>
            <span role="img" aria-label="Alien emoji">
              👾
            </span>{" "}
            Where did I leave this page again?{" "}
          </Title>
          <Text>
            <p>I can't seem to find what you were looking for...</p>
            <p>
              Maybe try taking a look at the{" "}
              <Link to="#/articles">articles page</Link>? 🕵️‍♂️
            </p>
          </Text>
        </Container>
      </DarkSection>
    </>
  );
};

const Title = styled.h2`
  font-size: ${typography.xl};
`;

const Text = styled.div`
  p {
    margin-bottom: ${whitespace.xl};
  }
`;

export default Page404;
