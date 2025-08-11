import React from "react";
import { Link } from "react-router-dom";
import backCard from "../../assets/Home/ii.png";
import card from "../../assets/Home/card1.png"; // fallback image
import {
  useGetAllBusinessHomeQuery,
  useGetAllBusinessQuery,
  useGetAllHomeBusinessQuery,
} from "../../Pages/redux/api/businessApi";
import { imageUrl } from "../../Pages/redux/api/baseApi";

const BusinessCard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const role = user?.role;

  const { data: interestData } = useGetAllHomeBusinessQuery({
    businessRole: "Sellers-business",
  });
  const { data: interestDataa } = useGetAllHomeBusinessQuery({
    businessRole: "Franchise",
  });
  const { data: interestDataaa } = useGetAllHomeBusinessQuery({
    businessRole: "Asset-seller",
  });
  const { data: interestDataaaa } = useGetAllHomeBusinessQuery({
    businessRole: "Business-Idea-lister",
  });
  console.log(interestData);
  const {
    data: businessData,
    isLoading,
    isError,
  } = useGetAllBusinessHomeQuery();
  console.log(businessData)

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;
  if (isError)
    return (
      <p className="text-center mt-10 text-red-500">
        Failed to load businesses
      </p>
    );

  const business = businessData?.data || [];
  console.log(business);

  return (
    <div className="-mt-28 lg:-mt-11 md:-mt-28">
      {/*================ Business er data ================*/}

      <div>
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <div className="w-[5px] h-12 rounded-r bg-[#22C55E] mr-4 "></div>
            <div>
              <h2 className="text-2xl font-bold text-blue-500">Popular Business</h2>
              <p className="text-gray-600 text-sm md:block hidden">
                Discover top opportunities curated for entrepreneurs.
              </p>
            </div>
          </div>
          <Link to="/search" className="text-blue-500 hover:underline">
            Explore More
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {business?.slice(0,4)?.map((business) => (
            <div
              key={business._id}
              className="border border-[#0091FF] bg-cover bg-center rounded"
              style={{ backgroundImage: `url(${backCard})` }}
            >
              <div className="h-48 relative">
                <img
                  src={`${imageUrl}/uploads/business-image/${business.image}`}
                  alt={business.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {business.title}
                </h3>
                <p className="text-gray-600 mb-2">{business.location}</p>
                <div className="mb-2">
                  <span className="text-blue-500">{business.category}</span> ||{" "}
                  <span className="text-[#D97706]">Business Consulting</span>
                </div>
                <p className="text-gray-800 mb-4">
                  Starting from{" "}
                  <span className="font-semibold">{business.askingPrice}</span>
                </p>
                <Link to={`/details/${business._id}`}>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*============================= interest er data ============================*/}

      {(!localStorage.getItem("accessToken") || role === "Buyer") && (
        <div>
          <div className="flex justify-between items-center mb-6 mt-16">
            <div className="flex items-center">
              <div className="w-[5px] h-12 rounded-r bg-[#22C55E] mr-4 "></div>
              <div>
                <h2 className="text-2xl font-bold text-blue-500">
                  Featured Businesses
                </h2>
                <p className="text-gray-600 text-sm md:block hidden">
                  Discover top opportunities curated for entrepreneurs.
                </p>
              </div>
            </div>
            <Link
              to={`/search?businessRole=Sellers-business`}
              className="text-blue-500 hover:underline"
            >
              Explore More
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interestData?.data?.length > 0 ? (
              interestData.data?.slice(0,4)?.map((business) => {
                return (
                  <div
                    key={business._id}
                    className="border border-[#0091FF] bg-cover bg-center rounded"
                    style={{ backgroundImage: `url(${backCard})` }}
                  >
                    <div className="h-48 relative">
                      <img
                        src={`${imageUrl}/uploads/business-image/${business.image}`}
                        alt={business.title}
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
                          {business.category}
                        </span>{" "}
                        ||{" "}
                        <span className="text-[#D97706]">
                          Business Consulting
                        </span>
                      </div>
                      <p className="text-gray-800 mb-4">
                        Starting from{" "}
                        <span className="font-semibold">
                          {business.askingPrice}
                        </span>
                      </p>
                      <Link to={`/details/${business._id}`}>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-center text-gray-500 col-span-4">
                No data found
              </p>
            )}
          </div>

          <div className="flex justify-between items-center mb-6 mt-16">
            <div className="flex items-center">
              <div className="w-[5px] h-12 rounded-r bg-[#22C55E] mr-4 "></div>
              <div>
                <h2 className="text-2xl font-bold text-blue-500">
                  Featured Business Assets
                </h2>
                <p className="text-gray-600 text-sm md:block hidden">
                  Discover top opportunities curated for entrepreneurs.
                </p>
              </div>
            </div>
            <Link  to={`/search?businessRole=Franchise`} className="text-blue-500 hover:underline">
              Explore More
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interestDataa?.data?.length > 0 ? (
              interestDataa.data?.slice(0,4)?.map((business) => {
                return (
                  <div
                    key={business._id}
                    className="border border-[#0091FF] bg-cover bg-center rounded"
                    style={{ backgroundImage: `url(${backCard})` }}
                  >
                    <div className="h-48 relative">
                      <img
                        src={`${imageUrl}/uploads/business-image/${business.image}`}
                        alt={business.title}
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
                          {business.category}
                        </span>{" "}
                        ||{" "}
                        <span className="text-[#D97706]">
                          Business Consulting
                        </span>
                      </div>
                      <p className="text-gray-800 mb-4">
                        Starting from{" "}
                        <span className="font-semibold">
                          {business.askingPrice}
                        </span>
                      </p>
                      <Link to={`/details/${business._id}`}>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-center text-gray-500 col-span-4">
                No data found
              </p>
            )}
          </div>

          <div className="flex justify-between items-center mb-6 mt-16">
            <div className="flex items-center">
              <div className="w-[5px] h-12 rounded-r bg-[#22C55E] mr-4 "></div>
              <div>
                <h2 className="text-2xl font-bold text-blue-500">
                  Featured Franchises
                </h2>
                <p className="text-gray-600 text-sm md:block hidden">
                  Discover top opportunities curated for entrepreneurs.
                </p>
              </div>
            </div>
            <Link  to={`/search?businessRole=Asset-seller`} className="text-blue-500 hover:underline">
              Explore More
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interestDataaa?.data?.length > 0 ? (
              interestDataaa.data?.slice(0,4)?.map((business) => {
                return (
                  <div
                    key={business._id}
                    className="border border-[#0091FF] bg-cover bg-center rounded"
                    style={{ backgroundImage: `url(${backCard})` }}
                  >
                    <div className="h-48 relative">
                      <img
                        src={`${imageUrl}/uploads/business-image/${business.image}`}
                        alt={business.title}
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
                          {business.category}
                        </span>{" "}
                        ||{" "}
                        <span className="text-[#D97706]">
                          Business Consulting
                        </span>
                      </div>
                      <p className="text-gray-800 mb-4">
                        Starting from{" "}
                        <span className="font-semibold">
                          {business.askingPrice}
                        </span>
                      </p>
                      <Link to={`/details/${business._id}`}>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-center text-gray-500 col-span-4">
                No data found
              </p>
            )}
          </div>

          <div className="flex justify-between items-center mb-6 mt-16">
            <div className="flex items-center">
              <div className="w-[5px] h-12 rounded-r bg-[#22C55E] mr-4 "></div>
              <div>
                <h2 className="text-2xl font-bold text-blue-500">
                  Interested Business Ideas
                </h2>
                <p className="text-gray-600 text-sm md:block hidden">
                  Discover top opportunities curated for entrepreneurs.
                </p>
              </div>
            </div>
            <Link to={`/search?businessRole=Business-Idea-lister`} className="text-blue-500 hover:underline">
              Explore More
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interestDataaaa?.data?.length > 0 ? (
              interestDataaaa.data?.slice(0,4)?.map((business) => {
                return (
                  <div
                    key={business._id}
                    className="border border-[#0091FF] bg-cover bg-center rounded"
                    style={{ backgroundImage: `url(${backCard})` }}
                  >
                    <div className="h-48 relative">
                      <img
                        src={`${imageUrl}/uploads/business-image/${business.image}`}
                        alt={business.title}
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
                          {business.category}
                        </span>{" "}
                        ||{" "}
                        <span className="text-[#D97706]">
                          Business Consulting
                        </span>
                      </div>
                      <p className="text-gray-800 mb-4">
                        Starting from{" "}
                        <span className="font-semibold">
                          {business.askingPrice}
                        </span>
                      </p>
                      <Link to={`/details/${business._id}`}>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-center text-gray-500 col-span-4">
                No data found
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BusinessCard;
