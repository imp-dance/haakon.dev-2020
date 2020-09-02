import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import styled from "styled-components";
import parse from "html-react-parser";

import Header from "../../core/header/Header";
import {
  Container,
  DarkSection,
  LightSection,
  LoadingText,
} from "../../core/layout";
import constants from "../../../styles/constants";

const { colors, whitespace, typography } = constants;

interface MatchParams {
  slug: string;
}

interface ArticleProps extends RouteComponentProps<MatchParams> {}

interface ArticleItem {
  author: number;
  categories: Array<number>;
  tags: Array<number>;
  content: ArticleContent;
  excerpt: ArticleContent;
  title: ArticleContent;
  guid: ArticleContent;
  date: string;
  modified: string;
  slug: string;
  id: number;
}

interface ArticleContent {
  protected?: boolean;
  rendered: string;
}

const ArticleListPage: React.FC<ArticleProps> = ({ match }) => {
  const [data, setData] = useState<ArticleItem | null>(null);
  useEffect(() => {
    fetch(
      `https://impedans.me/web/wp-json/wp/v2/posts/?slug=${match.params.slug}`
    )
      .then((res) => res.json())
      .then((data) => setData(data[0]))
      .catch((err) => console.error(err));
  }, [match.params.slug]);
  return (
    <>
      <Header />
      <DarkSection>
        <Container>
          <ArticleTitle>
            {data ? parse(data.title.rendered) : <LoadingText />}
          </ArticleTitle>
          {data && (
            <ArticleContainer>{parse(data.content.rendered)}</ArticleContainer>
          )}
        </Container>
      </DarkSection>
    </>
  );
};

const ArticleTitle = styled.h2`
  margin: 0 0 ${whitespace.l};
`;

const ArticleContainer = styled(LightSection)`
  padding: ${whitespace.l};
  color: ${colors.bgDark};
  p,
  li {
    max-width: 700px;
    font-size: ${typography.s};
    line-height: 1.5rem;
  }
  img,
  iframe,
  code,
  pre,
  video {
    max-width: 100%;
    background: ${colors.beige};
  }
  code {
    padding: ${whitespace.xs};
  }
  pre > code {
    padding: 0;
    background: ${colors.bgDark};
    color: ${colors.beige};
  }
  pre {
    background: ${colors.bgDark};
    padding: ${whitespace.m};
    overflow-x: auto;
    font-size: ${typography.s};
    line-height: 1.4rem;
  }
`;
export default ArticleListPage;
