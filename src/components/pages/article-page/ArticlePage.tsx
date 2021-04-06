import React, { useEffect, useState, Suspense, lazy } from "react";
import styled, { keyframes } from "styled-components";
import parse from "html-react-parser";

import { ArticleItem, ArticlePageProps } from "../../../interfaces/Article";
import {
  Container,
  DarkSection,
  LightSection,
  LoadingText,
} from "../../core/layout";
import constants from "../../../styles/constants";
import { fadeInUp, fadeInDown } from "../../../styles/animations";
import { GetPostBySlug, GetCategories } from "../../core/API";
import { Helmet } from "react-helmet";
import Tag from "../../core/misc/Tag";
import Link from "../../core/links/Link";

const { colors, whitespace, typography } = constants;
const Article404 = lazy(() => import("../404/Article404"));

const ArticlePage: React.FC<ArticlePageProps> = ({ match }) => {
  const [item, setItem] = useState<ArticleItem | null>(null);
  const [categories, setCategories] = useState([]);
  const [categoryNames, setCategoryNames] = useState<string[]>([""]);
  const [is404, set404] = useState(false);

  const onScroll = (e: any) => {
    const header = document.querySelector("#header");
    const offset = document.querySelector("body")?.scrollTop ?? 0;
    if (offset < 5) {
      header?.classList.remove("isSticky");
    } else if (offset > 16) {
      header?.classList.add("isSticky");
    }
  };

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

    GetCategories()
      .then((response: any) => {
        setCategories(response);
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

  useEffect(() => {
    if (item && categories) {
      const categoryList: string[] = [];
      item.categories.forEach((categoryID) => {
        const filter = categories.filter((item: any) => item.id === categoryID);
        if (filter && filter.length > 0) {
          categoryList.push((filter[0] as any).name);
        }
      });
      setCategoryNames(categoryList);
    }
  }, [item, categories]);

  useEffect(() => {
    document.querySelector("body")?.addEventListener("scroll", onScroll);
    return () => {
      document.querySelector("#header")?.classList.remove("isSticky");
      document.querySelector("body")?.removeEventListener("scroll", onScroll);
      // window.onscroll = null;
    };
  }, []);

  return is404 ? (
    <Suspense fallback={<>...</>}>
      <Article404 />
    </Suspense>
  ) : (
    <>
      <Helmet>
        <title>{item ? parse(item.title.rendered) : document.title}</title>
      </Helmet>
      <ArticleSection>
        <Container>
          <ArticleTitle className={item ? `loadedTitle` : `notLoadedTitle`}>
            {item ? parse(item.title.rendered) : <LoadingText />}
          </ArticleTitle>
          <Subtitle>
            {categoryNames.map(
              (tag) =>
                tag && (
                  <Link
                    to={`/#/articles#${tag.toLowerCase()}`}
                    key={`tag-${tag}`}
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <Tag
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      {tag}
                    </Tag>
                  </Link>
                )
            )}
          </Subtitle>
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

const Subtitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${whitespace.m};
  animation: ${fadeInUp} 0.3s ease-in-out;
  animation-delay: 0.2s;
  animation-fill-mode: both;
`;

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

const titleAnimation = keyframes`
  from{
    transform:scaleX(0);
    opacity:0;
  }
  30%{
    opacity:0;
  }
`;

const ArticleTitle = styled.h2`
  margin: 0 0 ${whitespace.l};
  font-size: ${typography.xl};
  display: flex;
  align-items: center;
  gap: ${whitespace.l};
  animation: ${fadeInDown} 0.4s ease-in-out;
  animation-fill-mode: both;

  &::before,
  &::after {
    content: "";
    flex: 1;
    background: linear-gradient(
      to right,
      ${colors.primary},
      ${colors.secondary}
    );
    height: 0.1em;
    margin: 0em;
    border-radius: 5px;
    opacity: 0.3;

    animation: ${titleAnimation} 0.4s ease-in-out;
    animation-fill-mode: both;
    animation-delay: 0.3s;
  }

  ::before {
    transform-origin: left;
  }

  ::after {
    transform-origin: right;
  }
  &.notLoadedTitle {
    &::before,
    &::after {
      opacity: 0;
      animation: none;
    }
  }
`;

const ArticleContainer = styled(LightSection)`
  padding: ${whitespace.l};
  color: ${colors.bgDark};
  animation: ${fadeInUp} 0.3s ease-in-out;
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
    display: block;
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
