"use client";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCategories } from "src/redux/services/services";

const Categories = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const categories = useSelector((state) =>
    state.movies.categories.slice(0, 6)
  );

  return (
    <div className="grid xl:grid-cols-6 md:grid-cols-3  grid-cols-2 gap-6 justify-center items-center">
      {categories.map((category) => (
        <Link
          className="flex hover:scale-105 duration-300 justify-center h-16 bg-zinc-800  text-white items-center border-[#333] font-bold rounded-lg"
          href={`/${category.id}`}
          key={category.id}
        >
          <div>{category.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
