import matter from "gray-matter";
import path from "path";
import fs from "fs";
import { cache } from "react";
import { Post } from "./types";

const POSTS_FOLDER = path.join(process.cwd(), "src", "posts");

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
    } as Post & { slug: string };
  });
});

export async function getPost(slug: string) {
  // Usage:
  // const posts = await getPosts('my-post');
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug);
}

// Get paginated posts with sorting and tag filtering (optional)
export async function getData(
  sortBy: string = "date",
  page: number = 1,
  postsPerPage: number = 4,
  tag?: string
) {
  const allPosts = await getPosts();

  let filteredPosts = allPosts;
  if (tag) {
    filteredPosts = allPosts.filter((post) => post.hashtags.includes(tag));
  }

  // Sorting (title or date)
  const sortedPosts = [...filteredPosts];
  if (sortBy === "title") {
    sortedPosts.sort((a, b) => a.title.localeCompare(b.title));
  } else {
    sortedPosts.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  // Pagination
  const startIndex = (page - 1) * postsPerPage;
  const paginatedPosts = sortedPosts.slice(
    startIndex,
    startIndex + postsPerPage
  );
  const pageCount = Math.ceil(sortedPosts.length / postsPerPage);

  return {
    posts: paginatedPosts,
    currentPage: page,
    pageCount: pageCount,
  };
}
