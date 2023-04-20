import Link from "next/link";

const MovieNotFound = () => {
  return (
    <div className="single-movie-nfwrapper flex items-center justify-center flex-col">
      <h1>We couldn&apos;t find the movie you looking for!</h1>

      <Link href="/" className="underline text-2xl mt-2">
        Go home
      </Link>
    </div>
  );
};

export default MovieNotFound;
