import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { useGetCategtoryQuery } from "../../Pages/redux/api/businessApi";
import { imageUrl } from "../../Pages/redux/api/baseApi";



const Category = () => {
  const { data: categorie, isLoading, isError } = useGetCategtoryQuery();

  if (isLoading) return <p>Loading categories...</p>;
  if (isError) return <p>Failed to load categories.</p>;

  return (
    <div>
      <div className="flex justify-between items-center mt-20">
        <div className="flex items-center">
          <div className="w-[5px] h-12 rounded-r bg-[#22C55E] mr-4 "></div>
          <div>
            <h2 className="text-2xl font-bold text-blue-500">Top Rated Category</h2>
            <p className="text-gray-600 text-sm md:block hidden">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices lectus sem.
            </p>
          </div>
        </div>
        <Link to="/search" className="text-blue-500 hover:underline">Explore More</Link>
      </div>

      <div className="py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categorie?.data?.map((category) => (
            <Link
              key={category._id}
              to={`/categories/${category._id}`}
              className="block group relative overflow-hidden rounded-lg transition-transform hover:scale-[1.02]"
            >
              <div className="relative h-[280px] w-full">
                <img
                  src={`${imageUrl}/uploads/category-image/${category?.categoryImage}` }
                  alt={`${category.categoryName} category`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white transition-all duration-500 transform translate-y-16 group-hover:translate-y-0">
                  <h3 className="text-2xl font-bold mb-1">{category.categoryName}</h3>
                  <p className="text-sm font-medium mb-3">255+ Business Available</p>
                  <p className="text-sm opacity-90">Comparison new entertain melancholy son themselves.</p>
                  <Link to="/search">
                    <button className="bg-[#2766FF] w-9 flex justify-center h-9 items-center rounded-full mt-2">
                      <FaArrowRight />
                    </button>
                  </Link>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
