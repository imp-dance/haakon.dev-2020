export const GetPostBySlug = (slug: string) => {
  return new Promise((resolve, reject) => {
    fetch(`https://impedans.me/web/wp-json/wp/v2/posts/?slug=${slug}`)
      .then((res) => res.json())
      .then((res: any) => resolve(res))
      .catch((err: any) => reject(err));
  });
};

export const GetAllPosts = (postsPerPage = 100) => {
  return new Promise((resolve, reject) => {
    fetch(
      `https://impedans.me/web/wp-json/wp/v2/posts/?per_page=${postsPerPage}`
    )
      .then((res) => res.json())
      .then((res: any) => resolve(res))
      .catch((err: any) => reject(err));
  });
};
