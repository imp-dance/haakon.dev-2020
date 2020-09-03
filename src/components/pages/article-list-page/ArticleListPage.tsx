import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import parse from "html-react-parser";

import { ArticleItem, ArticlePreviewProps } from "../../../interfaces/Article";
import Header from "../../core/header/Header";
import { Container, DarkSection, LoadingText } from "../../core/layout";
import { fadeIn } from "../../../styles/animations";
import constants from "../../../styles/constants";
import { GetAllPosts } from "../../core/API";

const { colors, whitespace, typography } = constants;

const ArticleListPage: React.FC = () => {
  const [postList, setPostList] = useState<ArticleItem[] | null>(null);
  const [featuredItem, setFeaturedItem] = useState<ArticleItem | null>(null);
  useEffect(() => {
    GetAllPosts()
      .then((response: any) => {
        const filteredItems = response.filter(
          (item: ArticleItem) =>
            item.categories.includes(2) || item.categories.includes(3)
        ); // Remove uncategorized posts
        setPostList(
          filteredItems.filter((item: any, index: number) => index !== 0)
        );
        setFeaturedItem(filteredItems[0]);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <Header />
      <DarkSection>
        <Container>
          {!postList && (
            <h2>
              <LoadingText />
            </h2>
          )}

          {postList !== null && featuredItem !== null && (
            <>
              <FeaturedItem item={featuredItem} />
              <ArticlesContainer>
                {postList.map((item) => (
                  <ArticlePreview item={item} />
                ))}
              </ArticlesContainer>
            </>
          )}
        </Container>
      </DarkSection>
    </>
  );
};

const FeaturedItem: React.FC<ArticlePreviewProps> = ({ item }) => {
  const [featuredImage, setFeaturedImage] = useState<string | null>(null);
  const history = useHistory();
  useEffect(() => {
    if (item._links["wp:featuredmedia"] && item._links["wp:featuredmedia"][0]) {
      fetch(item._links["wp:featuredmedia"][0].href)
        .then((res) => res.json())
        .then((response: any) => {
          if (response.media_details) {
            setFeaturedImage(response.media_details.sizes.full.source_url);
          }
        })
        .catch((err) => console.error(err));
    }
  }, [item._links]);

  const openArticle = () => history.push(`/article/${item.slug}`);

  const onKeyDown = (e: React.KeyboardEvent) => {
    const { key } = e;
    if (key === " " || key === "Enter") {
      openArticle();
    }
  };

  return (
    <StyledFeaturedItem
      tabIndex={0}
      role="button"
      aria-label={item.title.rendered}
      onClick={openArticle}
      onKeyDown={onKeyDown}
    >
      {featuredImage && <img src={featuredImage} alt="Featured" />}
      <h3>
        <span>{parse(item.title.rendered)}</span>
      </h3>
      {parse(item.excerpt.rendered)}
    </StyledFeaturedItem>
  );
};

const ArticlePreview: React.FC<ArticlePreviewProps> = ({ item }) => {
  const history = useHistory();

  const openArticle = () => history.push(`/article/${item.slug}`);

  const onKeyDown = (e: React.KeyboardEvent) => {
    const { key } = e;
    if (key === " " || key === "Enter") {
      openArticle();
    }
  };

  return (
    <StyledArticle
      onClick={openArticle}
      tabIndex={0}
      role="button"
      onKeyDown={onKeyDown}
      aria-label={item.title.rendered}
    >
      <h3>
        <span>{parse(item.title.rendered)}</span>
      </h3>
      {parse(item.excerpt.rendered)}
    </StyledArticle>
  );
};

const StyledFeaturedItem = styled.div`
  margin: ${whitespace.m} 0;
  padding: ${whitespace.m};
  background: ${colors.bgDark};
  animation: ${fadeIn} 0.2s ease-in-out;
  animation-fill-mode: both;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    transform: translate(0px, -30%);
    opacity: 0.4;
    pointer-events: none;
  }
  > p,
  > h3 {
    position: relative;
    z-index: 1;
  }
  &:focus {
    outline: 5px auto rgba(0, 150, 255, 1);
  }
  &:hover {
    transform: scale(1.01);
  }
  > p {
    font-size: ${typography.s};
    opacity: 0.6;
    background: ${colors.bg}fa;
    line-height: 1.5rem;
  }
`;

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
    animation-delay: 50ms;
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
