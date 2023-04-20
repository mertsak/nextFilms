"use client";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import Image from "next/image";
import { useSelector } from "react-redux";

const FeaturedMovies = () => {
  const movie = useSelector((state) => state.movies.popularMovies[19]);

  return (
    <div className="flex flex-col gap-6 mt-14 mb-14">
      <h1 className="text-4xl md:text-7xl uppercase tracking-tight font-extrabold max-w-[25ch]">
        {movie?.title}
      </h1>

      <p className="max-w-[50ch] text-sm md:text-xl">{movie?.overview}</p>

      <div className="flex gap-3">
        <Link
          className="flex items-center cursor-pointer justify-center bg-white text-black w-[200px] md:w-[300px] rounded-full text-md md:text-xl font-bold"
          href={`/movie/${movie?.id}`}
        >
          Play
        </Link>

        <button className="flex items-center cursor-pointer border-2 justify-center w-14 h-14 text-red-500 rounded-full">
          <FaPlus />
        </button>
      </div>

      <div>
        <div className="absolute top-0 bottom-0 left-0 right-0 -z-[1] content-overlay"></div>
        <Image
          className="-z-[2] object-cover h-auto max-h-screen"
          unoptimized
          src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
          alt={movie?.title}
          fill
        />
      </div>
    </div>
  );
};

export default FeaturedMovies;
