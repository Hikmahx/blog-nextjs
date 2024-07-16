"use client";

import React from 'react';
import CardPost from "@/components/CardPost";
import Paginator from "@/components/Paginator";
import SortSelect from "@/components/SortSelect";
import { Post } from '@/lib/types';

type Props = {
  posts: Post[];
  currentPage: number;
  pageCount: number;
};

function PostsLayout({ posts, currentPage, pageCount }: Props) {
  return (
    <main className="flex min-h-screen flex-col px-4 py-8 container mx-auto">
      {/* <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl xl:text-6xl prose-h1 my-6">
        Blog
      </h1> */}
      <div className="w-full flex justify-end mb-12">
        <SortSelect />
      </div>
      <div className="flex flex-col mx-auto gap-x-6 gap-y-2">
        {posts.map((post: Post) => (
          <CardPost key={post._id} post={post} />
        ))}
      </div>
      <Paginator pageCount={pageCount} currentPage={currentPage} />
    </main>
  );
}

export default PostsLayout; 
