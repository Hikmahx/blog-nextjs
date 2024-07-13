import PostsLayout from "@/layouts/PostsLayout";
import { getData } from "@/lib/post";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Blog',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    sortBy?: string;
    page?: string;
  };
}) {
  const sortBy = searchParams?.sortBy || "";
  const currentPage = parseInt(searchParams?.page || "1");
  const data = await getData(sortBy, currentPage);

  return (
    <PostsLayout
      posts={data.posts}
      currentPage={data.currentPage}
      sortBy={sortBy}
      pageCount={data.pageCount}
    />
  );
}
