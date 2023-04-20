import { configureStore } from "@reduxjs/toolkit";
import MoviesSlice from "./moviesSlice";

export const store = configureStore({
  reducer: {
    movies: MoviesSlice,
  },
});
