import { CardPost } from "@/components/CardPost";
import Paginator from "@/components/Paginator";
import React from "react";

const Blog = () => {
  return (
    <main className="flex min-h-screen flex-col px-4 py-8 container mx-auto">
      <h1 className="mb-4 font-bold ">Blog</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-x-6 gap-y-8">
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
      </div>
      <Paginator />
    </main>
  );
};

export default Blog;
