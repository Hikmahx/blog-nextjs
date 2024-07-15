import matter from "gray-matter";
import path from "path";
import fs from "fs";
import { cache } from "react";

const POSTS_FOLDER = path.join(process.cwd(), "src", "posts");

type Author = {
  name: string;
  avatar: string;
};

type Metadata = {
  title: string;
  createdAt: string;
  content: string;
  hashtags: string[];
  author: Author;
  img: string;
  _id: string;
};

function getPostsFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

export const getPosts = cache(() => {
  // Usage:
  // const posts = await getPosts()
  const posts = getPostsFiles(POSTS_FOLDER);

  return posts.map((post) => {
    const filePath = path.join(POSTS_FOLDER, post);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
      ...data,
      content,
      slug: post.replace(/\.mdx?$/, ""),
    } as Metadata & { slug: string };
  });
});

export async function getPost(slug: string) {
  // Usage:
  // const posts = await getPosts('my-post');
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug);
}

export default getPosts;
