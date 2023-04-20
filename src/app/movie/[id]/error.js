"use client";
import Link from "next/link";

const error = () => {
  return (
    <div className="single-movie-nfwrapper flex items-center justify-center flex-col">
       <h1>An error has occurred. Sorry for that! </h1>

      <Link href="/" className="underline text-2xl mt-2">
        Go home
      </Link>
    </div>
  );
};

export default error;
