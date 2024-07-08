import { CardPost } from "@/components/CardPost";
import React from "react";

const Blog = () => {
  return (
    <main className="flex min-h-screen flex-col px-4 py-8 max-w-xl lg:max-w-6xl mx-auto">
      <h1 className="mb-4 font-bold ">Blog</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 max-w-xl lg:max-w-6xl mx-auto gap-x-6 gap-y-8">
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
      </div>
    </main>
  );
};

export default Blog;
