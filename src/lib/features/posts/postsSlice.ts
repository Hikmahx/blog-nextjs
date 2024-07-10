import { createSlice } from "@reduxjs/toolkit";
import { PostsDetails } from "./types";


interface PostState {
  error: boolean;
  loading: boolean;
  posts: PostsDetails | [];
  errMsg: string;
  currentPage: number;
}

const initialState: PostState = {
  error: false,
  loading: false,
  posts: [],
  errMsg: "" as string,
  currentPage: 1,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setCurrentPage: (state, { payload }) => {
      state.currentPage = payload;
    },
  },
});

export const { setCurrentPage } = postSlice.actions;
export default postSlice.reducer;
