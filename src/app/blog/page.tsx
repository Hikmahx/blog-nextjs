import { CardPost } from "@/components/CardPost";
import Paginator from "@/components/Paginator";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const getPostsDetails = async (): Promise<any> => {
  const response = await fetch(`${process.env.NEXT_API_URL}/api/posts`, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
};

const Blog = async () => {
  const postsDetails = await getPostsDetails();
  console.log(postsDetails);
  const posts = postsDetails.posts;

  return (
    <main className="flex min-h-screen flex-col px-4 py-8 container mx-auto">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl xl:text-5xl prose-h1 my-6">
        Blog
      </h1>
      <div className="w-full flex justify-end mb-12">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Sort By</SelectLabel>
              <SelectItem value="date">Created At</SelectItem>
              <SelectItem value="title">Title</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-auto gap-x-6 gap-y-8">
        {posts.map((post: any) => (
          <CardPost key={post.id} post={post} />
        ))}
      </div>
      <Paginator />
    </main>
  );
};

export default Blog;
