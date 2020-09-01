import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import parse from "html-react-parser";

import Header from "../core/header/Header";
import { Container, DarkSection, LoadingText } from "../core/layout";
import { fadeIn } from "../../styles/animations";
import constants from "../../styles/constants";

const { colors, whitespace, typography } = constants;

interface ArticlePreviewProps {
  item: ArticleItem;
}

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

const ArticleListPage: React.FC = () => {
  const [data, setData] = useState<ArticleItem[] | null>(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    fetch("https://impedans.me/web/wp-json/wp/v2/posts/?per_page=100")
      .then((res) => res.json())
      .then((json) =>
        setData(
          json.filter(
            (item: ArticleItem) =>
              item.categories.includes(2) || item.categories.includes(3)
          )
        )
      )
      .catch((err) => setError(true));
  }, []);
  return (
    <>
      <Header />
      <DarkSection>
        <Container>
          <h2>
            {!data && <LoadingText>[loading]</LoadingText>}
            {data && "/articles"}
          </h2>

          {data !== null && (
            <ArticlesContainer>
              {data.map((item) => (
                <ArticlePreview item={item} />
              ))}
            </ArticlesContainer>
          )}
        </Container>
      </DarkSection>
    </>
  );
};

const ArticlePreview: React.FC<ArticlePreviewProps> = ({ item }) => {
  const history = useHistory();
  return (
    <StyledArticle
      onClick={() => history.push(`/article/${item.slug}`)}
      tabIndex={0}
      role="button"
      aria-label={item.title.rendered}
    >
      <h3>
        <span>{parse(item.title.rendered)}</span>
      </h3>
      {parse(item.excerpt.rendered)}
    </StyledArticle>
  );
};

const StyledArticle = styled.div`
  transition: transform 0.2s ease-in-out;
  padding: ${whitespace.m};
  background: ${colors.bgDark};
  position: relative;
  cursor: pointer;
  max-height: 150px;
  overflow: hidden;
  h3 {
    max-width: 250px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  > p {
    font-size: ${typography.s};
    opacity: 0.6;
  }
  &:focus {
    outline: 5px auto rgba(0, 150, 255, 1);
  }
  &:hover {
    transform: scale(1.01);
  }
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 70px;
    background: linear-gradient(to top, ${colors.bgDark}, rgba(0, 0, 0, 0));
  }
`;

const ArticlesContainer = styled.div`
  margin: ${whitespace.l} 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: ${whitespace.s};
  > div {
    animation: ${fadeIn} 0.2s ease-in-out;
    animation-fill-mode: both;
    animation-delay: 1500ms;
    opacity: 0;
  }
  > div:nth-child(1) {
    animation-delay: 0s;
  }
  > div:nth-child(2) {
    animation-delay: 100ms;
  }
  > div:nth-child(3) {
    animation-delay: 200ms;
  }
  > div:nth-child(4) {
    animation-delay: 300ms;
  }
  > div:nth-child(5) {
    animation-delay: 400ms;
  }
  > div:nth-child(6) {
    animation-delay: 500ms;
  }
  > div:nth-child(7) {
    animation-delay: 600ms;
  }
  > div:nth-child(8) {
    animation-delay: 700ms;
  }
  > div:nth-child(9) {
    animation-delay: 800ms;
  }
  > div:nth-child(10) {
    animation-delay: 900ms;
  }
  > div:nth-child(11) {
    animation-delay: 1000ms;
  }
  > div:nth-child(12) {
    animation-delay: 1100ms;
  }
  > div:nth-child(13) {
    animation-delay: 1200ms;
  }
  > div:nth-child(14) {
    animation-delay: 1300ms;
  }
  > div:nth-child(15) {
    animation-delay: 1400ms;
  }
`;

export default ArticleListPage;
