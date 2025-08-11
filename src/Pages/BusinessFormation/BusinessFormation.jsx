import React from "react";
import { imageUrl } from "../redux/api/baseApi";
import { useGetAllFormateQuery } from "../redux/api/businessApi";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function BusinessFormation() {
  const { data: getAllFormat, isLoading, isError } = useGetAllFormateQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError || !getAllFormat?.data) {
    return <p>Failed to load business formation data.</p>;
  }

  return (
    <div className="container mx-auto px-5 pt-20 pb-10">
      {/* Header Section */}
      <div className="relative flex flex-col items-start gap-5 pl-5 mb-5">
        <div className="absolute top-0 left-0 w-2 h-full bg-[#22C55E] z-[1] rounded-r-full"></div>

        <div className="ml-5">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0091FF] mb-6 leading-tight">
            Business Formation
          </h1>
          <p className="text-lg md:text-xl text-[#000000] leading-relaxed max-w-2xl">
            Find the perfect business opportunity by applying detailed filters
            to narrow down your search.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="space-y-8 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {getAllFormat.data.map((service) => (
            <div
              key={service._id}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white rounded-xl overflow-hidden border border-gray-100 h-full flex flex-col"
            >
              {/* Service Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={`${imageUrl}/uploads/business-image/${service?.image}`}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
            
              </div>

              {/* Service Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {service.detail}
                  </p>
                </div>

                <Link to={`/business-formation-details/${service._id}`}>
                  <button
                    className="mt-auto w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 group-hover:shadow-lg"
                   
                  >
                    View Details
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
