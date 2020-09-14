const API_URL = `https://impedans.me`;

export const GetPostBySlug = (slug: string) => {
  return new Promise((resolve, reject) => {
    fetch(`${API_URL}/web/wp-json/wp/v2/posts/?slug=${slug}`)
      .then((res) => res.json())
      .then((res: any) => resolve(res))
      .catch((err: any) => reject(err));
  });
};

export const GetAllPosts = (postsPerPage = 100) => {
  return new Promise((resolve, reject) => {
    fetch(`${API_URL}/web/wp-json/wp/v2/posts/?per_page=${postsPerPage}`)
      .then((res) => res.json())
      .then((res: any) => resolve(res))
      .catch((err: any) => reject(err));
  });
};

export const GetCategories = () => {
  return new Promise((resolve, reject) => {
    fetch(`${API_URL}/web/wp-json/wp/v2/categories`)
      .then((res) => res.json())
      .then((res: any) => resolve(res))
      .catch((err: any) => reject(err));
  });
};
