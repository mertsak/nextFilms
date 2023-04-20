import Skeleton from "../Skeleton";

const MoviesLoading = () => {
  return (
    <div className="grid  justify-items-center grid-cols-2  md:grid-cols-3 xl:grid-cols-6  gap-6 ">
      {Array(6)
        .fill(null)
        .map((_, index) => (
          <Skeleton key={index} height={429} />
        ))}
    </div>
  );
};

export default MoviesLoading;
