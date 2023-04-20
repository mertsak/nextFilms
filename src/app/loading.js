import MoviesLoading from "@/components/movies/loading";
import CategoriesLoading from "../components/categories/loading";
import FeaturedLoading from "@/components/featured/loading";

const loading = () => {
  return (
    <>
      <section className="my-20">
        <FeaturedLoading />
      </section>

      <section className="my-20">
        <CategoriesLoading />
      </section>

      <section className="my-20">
        <MoviesLoading />
      </section>
    </>
  );
};

export default loading;
