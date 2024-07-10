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
  errMsg: "",
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPostsDetails(state, action) {
      state.postsDetails = action.payload;
      state.loading = false;
      state.errMsg = "";
      state.error = false;
    },
    setLoading(state) {
      state.loading = true;
      state.error = false;
    },
    setError(state, action) {
      state.loading = false;
      state.error = true;
      state.errMsg = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setSortBy(state, action) {
      state.sortBy = action.payload;
    },
  },
});

export const {
  setCurrentPage,
  setPostsDetails,
  setSortBy,
  setError,
  setLoading,
} = postSlice.actions;
export default postSlice.reducer;
