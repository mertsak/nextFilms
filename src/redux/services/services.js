import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPopularMovies = createAsyncThunk(
  "movies/fetchPopularMovies",
  async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
    );
    const data = await response.json();
    return data;
  }
);

export const fetchCategories = createAsyncThunk(
  "movies/fetchCategories",
  async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    const data = await response.json();
    return data;
  }
);

export const fetchSingleCategory = createAsyncThunk(
  "movies/fetchSingleCategory",
  async (genreId) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=${genreId}`
    );
    const data = await response.json();
    return data;
  }
);

export const fetchMovieDetails = createAsyncThunk(
  "movies/fetchMovieDetails",
  async (movieId) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
    );
    const data = await response.json();
    return data;
  }
);

export const fetchUpComingMovies = createAsyncThunk(
  "movies/fetchUpComingMovies",
  async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    const data = await response.json();
    return data;
  }
);

export const fetchTopRatedMovies = createAsyncThunk(
  "movies/fetchTopRatedMovies",
  async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    const data = await response.json();
    return data;
  }
);
