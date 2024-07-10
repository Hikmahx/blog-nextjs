export type Post = {
  _id: any;
  title: string;
  content: string;
  hashtags: string[];
  author: {
    name: string;
    avatar: string;
  };
  img: string;
  createdAt: string;
};

export type PostsDetails = {
  posts: Post[];
  pageCount: number;
  currentPage: number;
};

export type SortBy = "date" | "title";
