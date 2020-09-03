import React, { useEffect, useState } from "react";
import styled from "styled-components";
import parse from "html-react-parser";

import { ArticleItem, ArticlePageProps } from "../../../interfaces/Article";
import Header from "../../core/header/Header";
import {
  Container,
  DarkSection,
  LightSection,
  LoadingText,
} from "../../core/layout";
import constants from "../../../styles/constants";
import { GetPostBySlug } from "../../core/API";

const { colors, whitespace, typography } = constants;

const ArticlePage: React.FC<ArticlePageProps> = ({ match }) => {
  const [item, setItem] = useState<ArticleItem | null>(null);

  useEffect(() => {
    GetPostBySlug(match.params.slug)
      .then((res: any) => setItem(res[0]))
      .catch((err) => console.error(err));
  }, [match.params.slug]);
  useEffect(() => {
    if (item) {
      (window as any).Prism.highlightAll();
    }
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) {
        const offset = 20;
        const elPos = el.getBoundingClientRect().top;
        const offsetPos = elPos - offset;
        window.scrollTo({
          top: offsetPos,
          behavior: "smooth",
        });
      }
    }
  }, [item]);
  return (
    <>
      <Header />
      <DarkSection>
        <Container>
          <ArticleTitle>
            {item ? parse(item.title.rendered) : <LoadingText />}
          </ArticleTitle>
          {item && (
            <ArticleContainer className="language-js">
              {parse(item.content.rendered)}
            </ArticleContainer>
          )}
        </Container>
      </DarkSection>
    </>
  );
};

const ArticleTitle = styled.h2`
  margin: 0 0 ${whitespace.l};
  font-size: ${typography.xl};
`;

const ArticleContainer = styled(LightSection)`
  padding: ${whitespace.l};
  color: ${colors.bgDark};
  > *:first-child {
    margin-top: 0;
  }
  > p:first-child:not(:empty),
  .introSection {
    padding: ${whitespace.m};
    border-left: ${whitespace.m} solid ${colors.lightPink};
    background: ${colors.beige};
    max-width: 100%;
  }
  p,
  li {
    max-width: 700px;
    font-size: ${typography.s};
    line-height: 1.6rem;
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
    padding: 0.1em ${whitespace.s} !important;
    background: ${colors.gray};
    margin: ${whitespace.m} 0;
  }
  pre > code {
    padding: 0 !important;
    background: ${colors.bgDark};
    color: ${colors.beige};
  }
  a {
    color: ${colors.primary};
    &:hover {
      text-decoration: none;
    }
  }
  pre {
    background: ${colors.bgDark};
    padding: ${whitespace.m};
    overflow-x: auto;
    font-size: ${typography.s};
    line-height: 1.4rem;
  }
  h3,
  h4 {
    margin: ${whitespace.l} 0 ${whitespace.m};
  }
  h3 {
    font-size: ${typography.xl};
  }
  h4 {
    font-size: ${typography.l};
    &:before {
      content: "# ";
      opacity: 0.5;
    }
  }
  blockquote {
    background: ${colors.gray};
    margin: 0;
    padding: ${whitespace.m};
  }
  .wp-block-columns {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    > div:first-child {
      padding-right: ${whitespace.m};
    }
    > div:last-child {
      max-width: 40%;
      img {
        border: ${whitespace.m} solid ${colors.bg};
      }
    }
  }
`;

export default ArticlePage;
