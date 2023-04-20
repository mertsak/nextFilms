import Skeleton from "../Skeleton";

const CategoriesLoading = () => {
  return (
    <div className="grid xl:grid-cols-6 md:grid-cols-3  grid-cols-2 gap-6 justify-center items-center">
      {Array(6)
        .fill(null)
        .map((_, index) => (
          <Skeleton key={index} height={72} />
        ))}
    </div>
  );
};

export default CategoriesLoading;
