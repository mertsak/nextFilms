"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUpComingMovies,
  fetchPopularMovies,
  fetchTopRatedMovies,
} from "@/redux/services/services";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUpComingMovies());
    dispatch(fetchPopularMovies());
    dispatch(fetchTopRatedMovies());
  }, [dispatch]);

  const popularMovies = useSelector((state) =>
    state.movies.popularMovies.slice(10, 20)
  );

  const upComingMovies = useSelector((state) =>
    state.movies.upComingMovies.slice(10, 20)
  );

  const topRatedMovies = useSelector((state) =>
    state.movies.topRatedMovies.slice(10, 20)
  );

  return (
    <>
      <div className="my-20 ">
        <h3 className="mb-8  uppercase text-2xl tracking-tight">
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

      <div className="my-20 ">
        <h3 className="mb-8  uppercase text-2xl tracking-tight">
          Popular Films
        </h3>
        <div className="grid  justify-items-center grid-cols-2  md:grid-cols-3 xl:grid-cols-6  gap-6 ">
          {topRatedMovies.map((movie) => (
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

      <div className="my-20 ">
        <h3 className="mb-8  uppercase text-2xl tracking-tight">
          Top Rated Films
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
    </>
  );
};

export default Page;
