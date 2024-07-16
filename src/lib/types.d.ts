export type Author = {
  name: string;
  avatar: string;
};

export type Post = {
  title: string;
  createdAt: string;
  content: string;
  hashtags: string[];
  author: Author;
  img: string;
  _id: string;
  slug?: string;
};
