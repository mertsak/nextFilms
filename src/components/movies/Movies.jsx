"use client";
import Image from "next/image";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  fetchPopularMovies,
  fetchUpComingMovies,
} from "src/redux/services/services";

const Movies = ({ selectedCategory }) => {
  const dispatch = useDispatch();
  const selectedMovies = selectedCategory.movies;

  useEffect(() => {
    dispatch(fetchPopularMovies());
    dispatch(fetchUpComingMovies());
  }, [dispatch]);

  const popularMovies = useSelector((state) =>
    state.movies.popularMovies.slice(1, 7)
  );

  const upComingMovies = useSelector((state) =>
    state.movies.upComingMovies.slice(1, 7)
  );

  const Genres = useSelector((state) => state.movies.categories);

  return (
    <>
      <div className="mt-9">
        <h3 className="mb-8 uppercase text-2xl tracking-tight">
          Popular Films
        </h3>
        <div className="grid  justify-items-center grid-cols-2  md:grid-cols-3 xl:grid-cols-6  gap-6 ">
          {popularMovies.map((movie) => (
            <div
              className="rounded-lg duration-300 z-10 ease-linear hover:scale-105"
              key={movie.id}
            >
              <Link href={`/movie/${movie.id}`}>
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  unoptimized={true}
                  className="object-cover rounded-lg"
                  width={450}
                  height={650}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-9">
        <h3 className="mb-8 uppercase text-2xl tracking-tight">
          Upcoming Films
        </h3>
        <div className="grid  justify-items-center grid-cols-2  md:grid-cols-3 xl:grid-cols-6  gap-6 ">
          {upComingMovies.map((movie) => (
            <div
              className="rounded-lg duration-300 z-10 ease-linear hover:scale-105"
              key={movie.id}
            >
              <Link href={`/movie/${movie.id}`}>
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  unoptimized={true}
                  className="object-cover rounded-lg"
                  width={450}
                  height={650}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {selectedMovies.length > 0 && (
        <div className="mt-9 ">
          <h3 className="mb-8  uppercase text-2xl tracking-tight">
            {Genres.find((genre) => `${genre.id}` === selectedCategory.id).name}
          </h3>
          <div className="grid  justify-items-center grid-cols-2  md:grid-cols-3 xl:grid-cols-6  gap-6 ">
            {selectedMovies.map((movie) => (
              <div
                className="rounded-lg duration-300 z-10 ease-linear hover:scale-105"
                key={movie.id}
              >
                <Link href={`/movie/${movie.id}`}>
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    unoptimized={true}
                    className="object-cover rounded-lg"
                    width={450}
                    height={650}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Movies;
