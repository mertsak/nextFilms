"use client";
import Movie from "@/components/Movie";
import { notFound } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails } from "src/redux/services/services";

const Page = ({ params, searchParams }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieDetails(params.id));
  }, [dispatch, params.id]);

  const movieDetails = useSelector((state) => state.movies.movieDetails);

  if (!movieDetails) {
    notFound();
  }

  if (searchParams.error === "true") {
    throw new Error("Something went wrong!");
  }

  return (
    <div className="single-movie-wrapper">
      <Movie movieDetails={movieDetails} />
    </div>
  );
};

export default Page;
