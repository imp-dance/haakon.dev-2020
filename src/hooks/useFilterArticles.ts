import { useState, useEffect } from "react";
import parse from "html-react-parser";
import { ArticleItem } from "../interfaces/Article";

export const useFilterArticles = (
  initialArticles: ArticleItem[] | null,
  search: string,
  categories?: Array<any>
) => {
  const [filteredArticles, setFilteredArticles] = useState<
    ArticleItem[] | null
  >(initialArticles);

  const filter = () => {
    if (!initialArticles) return; // Nothing to filter
    if (!search) {
      setFilteredArticles(initialArticles);
      return;
    } // No search value, don't filter

    const newArticles: any = [];
    initialArticles.forEach((item: ArticleItem, index: number) => {
      if (item) {
        // Let's parse relevant content:
        const parsedTitle = parse(item.title.rendered).toString().toLowerCase();
        const strippedContent = stripHTML(item.content.rendered);
        const parsedSearch = search
          .toString()
          .toLowerCase()
          .trim()
          .replace(/[|&;$%@"<>()+,]/g, ""); // Strip away potential regex

        // Then do actual search:
        let tagMatch = false;
        if (categories) {
          const allTagSearches = parsedSearch
            .split(" ")
            .filter((word) => word.startsWith("#"))
            .map((item) => item.substring(1).toUpperCase());
          if (allTagSearches.length > 0) {
            const categoryNames: string[] = [];
            item.categories.forEach((categoryID) => {
              const filter = categories.filter(
                (item) => item.id === categoryID
              );
              if (filter && filter.length > 0) {
                categoryNames.push(filter[0].name);
              }
            });
            const matches = categoryNames.filter((name) =>
              allTagSearches.includes(name.toUpperCase())
            );
            if (matches.length === allTagSearches.length) tagMatch = true;
          }
        }
        if (
          parsedTitle.search(parsedSearch) >= 0 ||
          strippedContent.search(parsedSearch) >= 0 ||
          tagMatch
        ) {
          newArticles.push(item);
        }
      } else {
        console.error("initialArticles should be typeof ArticleItem");
      }
    });
    setFilteredArticles(newArticles);
  };

  useEffect(() => {
    setFilteredArticles(initialArticles);
  }, [initialArticles]);

  useEffect(() => {
    if (initialArticles) {
      filter();
    }
    // eslint-disable-next-line
  }, [search, categories]);

  return [filteredArticles];
};

function stripHTML(html: string) {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = html;
  tempElement.innerText.toLowerCase();
  return tempElement.innerText;
}

export default useFilterArticles;
