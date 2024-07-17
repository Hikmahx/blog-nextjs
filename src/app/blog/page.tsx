import React from "react";
import PostsLayout from "@/layouts/PostsLayout";
import { getData } from "@/lib/post";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    sortBy?: string;
    page?: string;
    search?: string;
  };
}) {
  const sortBy = searchParams?.sortBy || "";
  const currentPage = parseInt(searchParams?.page || "1");
  const searchTerm = searchParams?.search || "";
  const data = await getData(sortBy, currentPage, searchTerm);

  return (
    <PostsLayout
      posts={data.posts}
      currentPage={data.currentPage}
      pageCount={data.pageCount}
      searchTerm={searchTerm}
    />
  );
}
