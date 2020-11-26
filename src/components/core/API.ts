const API_URL = `https://impedans.me`;

const doFetch = (url: string) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((res: any) => resolve(res))
      .catch((err: any) => reject(err));
  });
};

export const GetPostBySlug = (slug: string) => {
  return doFetch(`${API_URL}/web/wp-json/wp/v2/posts/?slug=${slug}`);
};

export const GetAllPosts = (postsPerPage = 100) => {
  return doFetch(
    `${API_URL}/web/wp-json/wp/v2/posts/?per_page=${postsPerPage}`
  );
};

export const GetCategories = () => {
  return doFetch(`${API_URL}/web/wp-json/wp/v2/categories`);
};
