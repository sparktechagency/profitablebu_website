import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function ServiceCard({ service }) {
  return (
    <div className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white rounded-xl overflow-hidden border border-gray-100 h-full flex flex-col">
      {/* Service Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={service.image || "/placeholder.svg"}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {service.isPopular && (
          <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
            <Star className="h-3 w-3 fill-current" />
            Popular
          </div>
        )}
      </div>

      {/* Service Content */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
            {service.title}
          </h3>
          {service.description && (
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {service.description}
            </p>
          )}
          {service.price && (
            <div className="mb-4">
              <span className="text-2xl font-bold text-blue-600">${service.price}</span>
              {service.originalPrice && (
                <span className="ml-2 text-sm text-gray-500 line-through">
                  ${service.originalPrice}
                </span>
              )}
            </div>
          )}
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
  );
}
