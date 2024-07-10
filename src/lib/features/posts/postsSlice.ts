import { createSlice } from "@reduxjs/toolkit";
import { Post, PostsDetails, SortBy } from "./types";

interface PostState {
  error: boolean;
  loading: boolean;
  posts: Post[] | [];
  postsDetails: PostsDetails;
  errMsg: string;
  currentPage: number;
  sortBy: SortBy;
}

const initialState: PostState = {
  error: false,
  loading: false,
  posts: [],
  postsDetails: {
    posts: [],
    pageCount: 1,
    currentPage: 1,
  },
  sortBy: "date",
  currentPage: 1,
  errMsg: "" as string,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setCurrentPage: (state, { payload }) => {
      state.currentPage = payload;
    },
    setSortBy: (state, { payload }) => {
      state.sortBy = payload;
    },
    setPostsDetails: (state, { payload }) => {
      state.postsDetails = payload;
      state.posts = payload.posts || [];
    },
  },
});

export const { setCurrentPage, setPostsDetails, setSortBy } = postSlice.actions;
export default postSlice.reducer;
