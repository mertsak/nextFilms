"use client";
import Categories from "@/components/categories/Categories";
import FeaturedMovies from "@/components/featured/FeaturedMovies";
import Movies from "@/components/movies/Movies";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSingleCategory,
  fetchPopularMovies,
} from "@/redux/services/services";

function Home({ params }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (params.category?.length > 0) {
      dispatch(fetchSingleCategory(params.category[0]));
    }
  }, [dispatch, params.category]);

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  const singleCategory = useSelector((state) => state.movies.singleCategory);

  let selectedCategory;

  if (params.category?.length > 0) {
    selectedCategory = true;
  }

  return (
    <>
      <section>
        <FeaturedMovies />
      </section>

      <section className="my-20">
        <Categories />
      </section>

      <section className="my-20">
        <Movies
          selectedCategory={{
            id: params.category?.[0] ?? "",
            movies: selectedCategory ? singleCategory.slice(1, 7) : [],
          }}
        />
      </section>
    </>
  );
}

export default Home;
