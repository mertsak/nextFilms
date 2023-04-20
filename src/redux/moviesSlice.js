import { createSlice } from "@reduxjs/toolkit";
import {
  fetchPopularMovies,
  fetchCategories,
  fetchSingleCategory,
  fetchMovieDetails,
  fetchUpComingMovies,
  fetchTopRatedMovies,
} from "./services/services";

export const MoviesSlice = createSlice({
  name: "movies",
  initialState: {
    popularMovies: [],
    upComingMovies: [],
    topRatedMovies: [],
    categories: [],
    singleCategory: [],
    movieDetails: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPopularMovies.fulfilled, (state, action) => {
      state.popularMovies = action.payload.results;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload.genres;
    });
    builder.addCase(fetchSingleCategory.fulfilled, (state, action) => {
      state.singleCategory = action.payload.results;
    });
    builder.addCase(fetchMovieDetails.fulfilled, (state, action) => {
      state.movieDetails = action.payload;
    });
    builder.addCase(fetchUpComingMovies.fulfilled, (state, action) => {
      state.upComingMovies = action.payload.results;
    });
    builder.addCase(fetchTopRatedMovies.fulfilled, (state, action) => {
      state.topRatedMovies = action.payload.results;
    });
  },
});

// Action creators are generated for each case reducer function
// export const {  } = MoviesSlice.actions;

export default MoviesSlice.reducer;
