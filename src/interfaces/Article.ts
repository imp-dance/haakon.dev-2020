import { RouteComponentProps } from "react-router";

export interface ArticlePreviewProps {
  item: ArticleItem;
  index?: number;
  categories?: any[];
}

export interface ArticleItem {
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
  _links: FeaturedMedia;
}

export interface FeaturedMedia {
  ["wp:featuredmedia"]: Array<FeaturedMediaItem>;
}

export interface FeaturedMediaItem {
  href: string;
}

export interface ArticleContent {
  protected?: boolean;
  rendered: string;
}

interface MatchParams {
  slug: string;
}

export interface ArticlePageProps extends RouteComponentProps<MatchParams> {}
