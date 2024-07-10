import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setCurrentPage } from "@/lib/features/posts/postsSlice";
import ReactPaginate from "react-paginate";

const Paginator = () => {
  const { currentPage, postsDetails } = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();

  const pageCount = postsDetails.pageCount || 3;

  const handlePageClick = (event: { selected: number }) => {
    dispatch(setCurrentPage(event.selected + 1));
  };

  return (
    <div className="mt-7 flex flex-col items-center justify-between lg:flex-row">
      <Pagination>
        <ReactPaginate
          breakLabel="..."
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          nextLabel={
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          }
          previousLabel={
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
          }
          containerClassName="flex items-center space-x-5 mt-4"
          disabledClassName="text-gray-400"
          activeClassName="font-semibold text-dull-navy"
          initialPage={currentPage - 1}
        />
      </Pagination>
    </div>
  );
};

export default Paginator;
