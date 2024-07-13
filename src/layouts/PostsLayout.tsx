"use client";

import CardPost from "@/components/CardPost";
import Paginator from "@/components/Paginator";
import SortSelect from "@/components/SortSelect";

type Props = {
  posts: any[];
  currentPage: number;
  sortBy: string;
  pageCount: number;
};

export default function PostsLayout({ posts, currentPage, pageCount }: Props) {
  return (
    <main className="flex min-h-screen flex-col px-4 py-8 container mx-auto">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl xl:text-5xl prose-h1 my-6">
        Blog
      </h1>
      <div className="w-full flex justify-end mb-12">
        <SortSelect />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-auto gap-x-6 gap-y-8">
        {posts.map((post: any) => (
          <CardPost key={post.id} post={post} />
        ))}
      </div>
      <Paginator pageCount={pageCount} currentPage={currentPage} />
    </main>
  );
}
