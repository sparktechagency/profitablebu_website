/* eslint-disable no-unused-vars */
import React from "react";
import card from "../../assets/Home/card1.png";
import card2 from "../../assets/Home/card2.png";
import card3 from "../../assets/Home/card3.png";
import card4 from "../../assets/Home/card4.png";

import backCard from "../../assets/Home/ii.png";
import { Link } from "react-router-dom";
const BusinessCard = () => {
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
    {
      id: 2,
      title: "Powering Better Financial Solutions",
      location: "Los Angeles, CA",
      categories: "Financial Services",
      price: "$100",
      image: card2,
      imageAlt:
        "Business professionals reviewing documents with city lights in background",
    },
    {
      id: 3,
      title: "Powering Better Financial Solutions",
      location: "Los Angeles, CA",
      categories: "Financial Services",
      price: "$100",
      image: card3,
      imageAlt: "Modern skyscrapers and office buildings",
    },
     {
      id: 4,
      title: "Powering Better Financial Solutions",
      location: "Los Angeles, CA",
      categories: "Financial Services",
      price: "$100",
      image: card4,
      imageAlt: "Modern skyscrapers and office buildings",
    },
  ];
  return (
    <div>
      <div className="mt-8 lg:-mt-11 md:-mt-28">
        <div className="">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <div className="w-[5px] h-12 rounded-r bg-[#22C55E] mr-4 "></div>
              <div>
                <h2 className="text-2xl font-bold text-blue-500">
                  Popular Business
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businesses.map((business) => (
              <div
                key={business.id}
                className=" border border-[#0091FF] bg-cover bg-center rounded "
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
                    <span className="text-blue-500">{business.categories}</span> || <span className="text-[#D97706]">Business Consulting</span>
                  </div>
                  <p className="text-gray-800 mb-4">
                    Starting from{" "}
                    <span className="font-semibold">{business.price}</span>
                  </p>
                  <Link to={'/business-details'}><button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
                    View Details
                  </button></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
