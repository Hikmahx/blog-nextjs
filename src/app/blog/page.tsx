"use client";

import { CardPost } from "@/components/CardPost";
import Paginator from "@/components/Paginator";
import React, { useEffect } from "react";
import SortSelect from "@/components/SortSelect";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setPostsDetails } from "@/lib/features/posts/postsSlice";

const getPostsDetails = async (sortBy = "date", curPage = 1): Promise<any> => {
  const validatePage = isNaN(curPage) || curPage < 1 ? 1 : curPage;
  const validateSortBy = sortBy === "title" ? "title" : "date";

  let queryString = sortBy === "title" ? `?sortBy=${validateSortBy}` : "";
  if (validatePage > 1)
    queryString += `${
      validatePage !== 1 &&
      (sortBy === "title" ? "&" : "?") + "page=" + validatePage
    }`;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/posts${queryString}`,
    {
      cache: "no-store",
    }
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
};

const Blog = () => {
  const { postsDetails, currentPage, sortBy } = useAppSelector(
    (state) => state.posts
  );
  const dispatch = useAppDispatch();

  const fetchPosts = async (sortBy: string, page: number) => {
    const postsDetails = await getPostsDetails(sortBy, page);
    dispatch(setPostsDetails(postsDetails));
  };

  useEffect(() => {
    fetchPosts(sortBy, currentPage);
  }, [sortBy, currentPage]);

  return (
    <main className="flex min-h-screen flex-col px-4 py-8 container mx-auto">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl xl:text-5xl prose-h1 my-6">
        Blog
      </h1>
      <div className="w-full flex justify-end mb-12">
        <SortSelect />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-auto gap-x-6 gap-y-8">
        {postsDetails.posts.map((post: any) => (
          <CardPost key={post.id} post={post} />
        ))}
      </div>
      <Paginator />
      {postsDetails.posts.length === 0 && (
        <div className="text-center py-12">No posts found.</div>
      )}
    </main>
  );
};

export default Blog;
