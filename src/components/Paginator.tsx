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
import { useSearchParams } from "next/navigation";

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
          marginPagesDisplayed={2}
          pageCount={pageCount}
          nextLabel={
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          }
          previousLabel={
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          }
          containerClassName="flex items-center gap-2 mt-4"
          disabledClassName="text-gray-400"
          activeClassName="font-semibold rounded-lg border border-gray-300"
          // initialPage={currentPage - 1}
          pageLinkClassName="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10"
          breakClassName="flex h-9 w-9 items-center justify-center"
          renderOnZeroPageCount={null}
          forcePage={currentPage - 1}
        />
      </Pagination>
    </div>
  );
};

export default Paginator;
