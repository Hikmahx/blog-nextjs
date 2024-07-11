"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  setPostsDetails,
  setLoading,
  setError,
  setCurrentPage,
  setSortBy,
} from "@/lib/features/posts/postsSlice";
import { CardPost } from "@/components/CardPost";
import Paginator from "@/components/Paginator";
import SortSelect from "@/components/SortSelect";
import { Skeleton } from "@/components/ui/skeleton";

const getQueryString = (
  searchParams: URLSearchParams,
  sortBy = "date",
  curPage = 1
) => {
  const validatePage = isNaN(curPage) || curPage < 1 ? 1 : curPage;
  const validateSortBy = sortBy === "title" ? "title" : "date";

  const params = new URLSearchParams(searchParams);
  if (validateSortBy === "title") {
    params.set("sortBy", sortBy);
  } else {
    params.delete("sortBy");
  }
  if (validatePage > 1) {
    params.set("page", validatePage.toString());
  } else {
    params.delete("page");
  }

  return `?${params.toString()}`;
};

const getPostsDetails = async (
  sortBy = "date",
  curPage = 1,
  searchParams: URLSearchParams
) => {
  const queryString = getQueryString(searchParams, sortBy, curPage);
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
  const searchParams = useSearchParams();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { postsDetails, currentPage, sortBy, loading, error, errMsg } =
    useAppSelector((state) => state.posts);
  const [initialized, setInitialized] = useState(false);

  const fetchPosts = async (sortBy: string, page: number) => {
    dispatch(setLoading());
    try {
      const postsDetails = await getPostsDetails(sortBy, page, searchParams);
      dispatch(setPostsDetails(postsDetails));
    } catch (err: any) {
      dispatch(setError(err.message));
    }
  };

  useEffect(() => {
    const pageParam = Number(searchParams.get("page")) || 1;
    const sortByParam = searchParams.get("sortBy") || "date";

    dispatch(setCurrentPage(pageParam));
    dispatch(setSortBy(sortByParam));

    setInitialized(true);
  }, []);

  useEffect(() => {
    if (initialized) {
      fetchPosts(sortBy, currentPage);
      const queryString = getQueryString(searchParams, sortBy, currentPage);
      router.push(queryString);
    }
  }, [sortBy, currentPage, initialized]);

  return (
    <main className="flex min-h-screen flex-col px-4 py-8 container mx-auto">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl xl:text-5xl prose-h1 my-6">
        Blog
      </h1>
      <div className="w-full flex justify-end mb-12">
        <SortSelect />
      </div>
      {loading && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-auto gap-x-6 gap-y-8 w-full min-h-[60vh]">
          {Array.from({ length: 6 }).map((_, index) => (
            <Skeleton
              key={index}
              className="min-h-[500px] w-full rounded-sm bg-slate-200"
            />
          ))}
        </div>
      )}
      {error && (
        <div className="text-center py-12 text-prose lg:text-prose-xl min-h-[60vh] text-2xl lg:text-3xl">
          {errMsg}. Reload page.
        </div>
      )}
      {!loading && !error && postsDetails.posts.length === 0 && (
        <div className="text-center py-12">No posts found.</div>
      )}
      {!loading && !error && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-auto gap-x-6 gap-y-8">
          {postsDetails.posts.map((post: any) => (
            <CardPost key={post.id} post={post} />
          ))}
        </div>
      )}
      <Paginator />
    </main>
  );
};

export default Blog;
