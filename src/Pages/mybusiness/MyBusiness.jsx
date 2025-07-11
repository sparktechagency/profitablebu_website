import React from "react";
import { Navigate } from "../Navigate";
import card from "../../assets/Home/card1.png";
import backCard from "../../assets/Home/ii.png";
import { Link } from "react-router-dom";
const MyBusiness = () => {
  const businesses = [
    {
      id: 1,
      title: "Powering Better Financial Solutions",
      location: "Los Angeles, CA",
      categories: "Financial Services",
      price: "$100",
      image: card,
      imageAlt: "Futuristic office space with purple lighting",
    },
  ];

  const businesse = [
    {
      id: 1,
      title: "Powering Better Financial Solutions",
      location: "Los Angeles, CA",
      categories: "Financial Services",
      price: "$100",
      image: card,
      imageAlt: "Futuristic office space with purple lighting",
    },
  ];

  return (
    <div className="container m-auto pb-20 mt-11 px-4">
      <Navigate title={"My Business"}></Navigate>
      <div className="pt-6">
        <div className="">
          <div className="">
            <div className="flex justify-end">
              <Link to={"/addnewbusiness"}>
                {" "}
                <button className="bg-blue-400 px-4 py-2 text-white rounded hover:underline">
                  Sale a New One
                </button>
              </Link>
            </div>
            <div className="mb-6 mt-11">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-[5px] h-12 rounded-r bg-green-500 mr-4 "></div>
                  <div>
                    <h2 className="text-2xl font-bold text-blue-500">
                      Current business for sale
                    </h2>
                  </div>
                </div>
              
              </div>
              
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {businesses.map((business) => (
                <div
                  key={business.id}
                  className=" border border-[#0091FF] bg-cover bg-center rounded"
                  style={{
                    backgroundImage: `url(${backCard})`,
                  }}
                >
                  <div className="h-48 relative">
                    <img
                      src={business.image}
                      alt={business.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {business.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{business.location}</p>
                    <div className="mb-2">
                      <span className="text-blue-500">
                        {business.categories}
                      </span>{" "}
                      ||{" "}
                      <span className="text-[#D97706]">
                        Business Consulting
                      </span>
                    </div>
                    <p className="text-gray-800 mb-4">
                      Starting from{" "}
                      <span className="font-semibold">{business.price}</span>
                    </p>
                    <Link to={"/details"}>
                      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="pt-16">
        <div className="">
          <div className="">
            <div className="flex justify-between mb-6">
              <div className="flex items-center">
                <div className="w-[5px] h-12 rounded-r bg-green-500 mr-4 "></div>
                <div>
                  <h2 className="text-2xl font-bold text-blue-500">
                    Previous business that has been sold
                  </h2>
                </div>
              </div>
              
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {businesses.map((business) => (
                <div
                  key={business.id}
                  className=" border border-[#0091FF] bg-cover bg-center rounded"
                  style={{
                    backgroundImage: `url(${backCard})`,
                  }}
                >
                  <div className="h-48 relative">
                    <img
                      src={business.image}
                      alt={business.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {business.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{business.location}</p>
                    <div className="mb-2">
                      <span className="text-blue-500">
                        {business.categories}
                      </span>{" "}
                      ||{" "}
                      <span className="text-[#D97706]">
                        Business Consulting
                      </span>
                    </div>
                    <p className="text-gray-800 mb-4">
                      Starting from{" "}
                      <span className="font-semibold">{business.price}</span>
                    </p>
                    <Link to={"/details"}>
                      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="pt-16">
        <div className="">
          <div className="">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <div className="w-[5px] h-12 rounded-r bg-green-500 mr-4 "></div>
                <div>
                  <h2 className="text-2xl font-bold text-blue-500">
                    Interested Franchises
                  </h2>
                </div>
              </div>
             
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {businesses.map((business) => (
                <div
                  key={business.id}
                  className=" border border-[#0091FF] bg-cover bg-center rounded"
                  style={{
                    backgroundImage: `url(${backCard})`,
                  }}
                >
                  <div className="h-48 relative">
                    <img
                      src={business.image}
                      alt={business.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {business.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{business.location}</p>
                    <div className="mb-2">
                      <span className="text-blue-500">
                        {business.categories}
                      </span>{" "}
                      ||{" "}
                      <span className="text-[#D97706]">
                        Business Consulting
                      </span>
                    </div>
                    <p className="text-gray-800 mb-4">
                      Starting from{" "}
                      <span className="font-semibold">{business.price}</span>
                    </p>
                    <Link to={"/details"}>
                      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="pt-16">
        <div className="">
          <div className="">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <div className="w-[5px] h-12 rounded-r bg-green-500 mr-4 "></div>
                <div>
                  <h2 className="text-2xl font-bold text-blue-500">
                    Interested Business Ideas
                  </h2>
                </div>
              </div>
              
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {businesses.map((business) => (
                <div
                  key={business.id}
                  className=" border border-[#0091FF] bg-cover bg-center rounded"
                  style={{
                    backgroundImage: `url(${backCard})`,
                  }}
                >
                  <div className="h-48 relative">
                    <img
                      src={business.image}
                      alt={business.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {business.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{business.location}</p>
                    <div className="mb-2">
                      <span className="text-blue-500">
                        {business.categories}
                      </span>{" "}
                      ||{" "}
                      <span className="text-[#D97706]">
                        Business Consulting
                      </span>
                    </div>
                    <p className="text-gray-800 mb-4">
                      Starting from{" "}
                      <span className="font-semibold">{business.price}</span>
                    </p>
                    <Link to={"/details"}>
                      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBusiness;
