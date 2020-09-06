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
import { Helmet } from "react-helmet";
import Link from "../../core/links/Link";

const { colors, whitespace, typography } = constants;

const ArticlePage: React.FC<ArticlePageProps> = ({ match }) => {
  const [item, setItem] = useState<ArticleItem | null>(null);
  const [is404, set404] = useState(false);

  useEffect(() => {
    GetPostBySlug(match.params.slug)
      .then((res: any) => {
        if (res.length > 0) {
          setItem(res[0]);
        } else {
          set404(true);
        }
      })
      .catch((err) => console.error(err));
  }, [match.params.slug]);
  useEffect(() => {
    if (item) {
      (window as any).Prism.highlightAll();
    }
    if (window.location.hash) {
      const filteredHash = window.location.hash.split("#")[2];
      const el = document.querySelector("#" + filteredHash);
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
  return is404 ? (
    <>
      <Header />
      <DarkSection>
        <Container>
          <ArticleTitle>Aw shucks, looks like a 404</ArticleTitle>
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
  ) : (
    <>
      <Helmet>
        <title>{item ? parse(item.title.rendered) : document.title}</title>
      </Helmet>
      <Header />
      <ArticleSection>
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
      </ArticleSection>
    </>
  );
};

const ArticleSection = styled(DarkSection)`
  @media screen and (max-width: 520px) {
    padding: 0;
    padding-top: ${whitespace.l};
    > div > h2 {
      padding-left: ${whitespace.l};
      padding-right: ${whitespace.l};
    }
  }
`;

const ArticleTitle = styled.h2`
  margin: 0 0 ${whitespace.l};
  font-size: ${typography.xl};
`;

const ArticleContainer = styled(LightSection)`
  padding: ${whitespace.l};
  color: ${colors.bgDark};
  font-family: "IBM Plex Sans", sans-serif;
  > *:first-child {
    margin-top: 0;
  }
  > p:first-child:not(:empty),
  .introSection {
    padding: ${whitespace.m};
    border-left: ${whitespace.m} solid ${colors.pink};
    background: linear-gradient(to right, ${colors.beige}, ${colors.beige}55);
    max-width: 100%;
    font-family: "IBM Plex Mono", monospace;
    font-size: ${typography.s};
  }
  p,
  li {
    max-width: 700px;
    font-size: ${typography.m};
    line-height: 1.6rem;
  }
  img,
  iframe,
  code,
  pre,
  video,
  .wp-block-image {
    max-width: 100%;
    background: ${colors.bg};
    font-size: ${typography.s};
    margin: ${whitespace.m} 0;
  }
  img {
    margin: 0;
  }
  code {
    padding: 0.1em ${whitespace.s} !important;
    background: ${colors.gray};
    margin: ${whitespace.m} 0;
    font-family: "IBM Plex Mono", monospace;
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
    }
    @media screen and (max-width: 600px) {
      flex-direction: column;
      > div:last-child {
        max-width: 100%;
      }
    }
  }
`;

export default ArticlePage;
