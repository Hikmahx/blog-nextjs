import { CardPost } from "@/components/CardPost";
import Paginator from "@/components/Paginator";
import PostsLayout from "@/layouts/PostsLayout";
import { getData, getQueryString } from "@/lib/post";

type PageProps = {
  sortBy?: string;
  currentPage?: number;
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    sortBy?: string;
    page?: string;
  };
}) {
  const sortBy = searchParams?.sortBy || "title";
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
