import Skeleton from "@/components/Skeleton";

const loading = () => {
  return (
    <>
      <div className="my-20 ">
        <h3 className="mb-8  uppercase text-2xl tracking-tight">
          Upcoming Films
        </h3>
        <div className="grid  justify-items-center grid-cols-2  md:grid-cols-3 xl:grid-cols-6  gap-6 ">
          {Array(10)
            .fill(null)
            .map((_, index) => (
              <Skeleton key={index} height={415} />
            ))}
        </div>
      </div>

      <div className="my-20 ">
        <h3 className="mb-8  uppercase text-2xl tracking-tight">
          Popular Films
        </h3>
        <div className="grid  justify-items-center grid-cols-2  md:grid-cols-3 xl:grid-cols-6  gap-6 ">
          {Array(10)
            .fill(null)
            .map((_, index) => (
              <Skeleton key={index} height={415} />
            ))}
        </div>
      </div>

      <div className="my-20 ">
        <h3 className="mb-8  uppercase text-2xl tracking-tight">
          Top Rated Films
        </h3>
        <div className="grid  justify-items-center grid-cols-2  md:grid-cols-3 xl:grid-cols-6  gap-6 ">
          {Array(10)
            .fill(null)
            .map((_, index) => (
              <Skeleton key={index} height={415} />
            ))}
        </div>
      </div>
    </>
  );
};

export default loading;
