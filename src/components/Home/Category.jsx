import React from "react";
import card from "../../assets/Home/card.png";
import card2 from "../../assets/Home/cat2.png";
import card3 from "../../assets/Home/cat3.png";
import card4 from "../../assets/Home/cat4.png";
import card5 from "../../assets/Home/cat5.png";
import card6 from "../../assets/Home/cat6.png";
import card7 from "../../assets/Home/cat7.png";
import card8 from "../../assets/Home/cat8.png";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCircleArrowRight } from "react-icons/fa6";
const Category = () => {
  const categories = [
    {
      id: "content-marketing",
      title: "Content Marketing",
      count: "255+",
      image: card,
    },
    {
      id: "hospitality",
      title: "Hospitality",
      count: "255+",
      image: card2,
    },
    {
      id: "tourism",
      title: "Tourism",
      count: "255+",
      image: card3,
    },
    {
      id: "healthcare",
      title: "Healthcare",
      count: "255+",
      image: card4,
    },
    {
      id: "finance",
      title: "Finance",
      count: "255+",
      image: card5,
    },
    {
      id: "retail",
      title: "Retail",
      count: "255+",
      image: card6,
    },
    {
      id: "real-estate",
      title: "Real Estate",
      count: "255+",
      image: card7,
    },
    {
      id: "manufacturing",
      title: "Manufacturing",
      count: "255+",
      image: card8,
    },
  ];
  return (
    <div>
      <div className="flex justify-between items-center mt-20">
        <div className="flex items-center">
          <div className="w-[5px] h-12 rounded-r bg-[#22C55E] mr-4 "></div>
          <div>
            <h2 className="text-2xl font-bold text-blue-500">
              Top Rated Category
            </h2>
            <p className="text-gray-600 text-sm md:block hidden">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              ultrices lectus sem.
            </p>
          </div>
        </div>
         <Link to="/search" className="text-blue-500 hover:underline">
                      Explore More
                    </Link>
      </div>
      <div className=" py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/categories/${category.id}`}
              className="block group relative overflow-hidden rounded-lg transition-transform hover:scale-[1.02]"
            >
              <div className="relative h-[280px] w-full">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={`${category.title} category`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Content with hover animation */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white transition-all duration-500 transform translate-y-16 group-hover:translate-y-0">
                  <h3 className="text-2xl font-bold mb-1">{category.title}</h3>
                  <p className="text-sm font-medium mb-3">
                    {category.count} Business Available
                  </p>
                  <p className="text-sm opacity-90">
                    Comparison new entertain melancholy son themselves.
                  </p>
                  <Link to={'/search'}><button className="bg-[#2766FF] w-9 flex justify-center h-9 items-center rounded-full mt-2">
                    <FaArrowRight />
                  </button></Link>
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
