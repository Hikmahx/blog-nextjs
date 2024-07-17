"use client";

import React from "react";
import CardPost from "@/components/CardPost";
import Paginator from "@/components/Paginator";
import SortSelect from "@/components/SortSelect";
import { Post } from "@/lib/types";
import Search from "@/components/Search";

type Props = {
  posts: Post[];
  currentPage: number;
  pageCount: number;
  searchTerm: string;
};

function PostsLayout({ posts, currentPage, pageCount, searchTerm }: Props) {

  return (
    <main className="flex min-h-screen flex-col px-4 py-8 container mx-auto ">
      <Search searchTerm={searchTerm} />
      <div className="w-full flex justify-between mb-4 mt-8">
        <h1 className="text-2xl font-bold tracking-tight prose-h1">Articles</h1>
        <SortSelect />
      </div>
      <div className="flex flex-col mx-auto gap-x-6 gap-y-2 w-full">
        {posts.length < 1 && searchTerm !== "" && (
          <h2 className="text-xl tracking-tight prose-h2 text-center mt-4">
            No title found matching {`'${searchTerm}'`}. Please update your search term
          </h2>
        )}
        {posts.map((post: Post) => (
          <CardPost key={post._id} post={post} />
        ))}
      </div>
      <Paginator pageCount={pageCount} currentPage={currentPage} />
    </main>
  );
}

export default PostsLayout;
