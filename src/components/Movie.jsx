import FeaturedMovies from "src/components/featured/FeaturedMovies.jsx";

const Movie = ({movieDetails}) => {
  return (
    <>
      <FeaturedMovies movieDetails={movieDetails} />
    </>
  );
};

export default Movie;
