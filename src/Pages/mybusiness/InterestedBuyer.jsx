import React from 'react';
import { Navigate } from '../Navigate';
import { Link, useParams } from 'react-router-dom';
import { useGetSingleIterestUserQuery } from '../redux/api/businessApi';

const InterestedBuyer = () => {
  const { id: businessId } = useParams();

  const { data: businessDetails, isLoading } = useGetSingleIterestUserQuery({ businessId });

  const businessTitle = businessDetails?.data?.business?.title;
  const interestedUsers = businessDetails?.data?.interestedUsers || [];

  return (
    <div className="container mx-auto p-6 space-y-4">
      <Navigate title={`${businessTitle} / Interested Buyers`} />

      {isLoading ? (
        <p>Loading...</p>
      ) : interestedUsers.length === 0 ? (
        <p className="text-gray-500 h-[60vh]">No interested buyers yet.</p>
      ) : (
        interestedUsers.map((buyer, index) => (
          <div
            key={buyer._id}
            className="flex items-center justify-between p-4 bg-white shadow rounded-xl hover:shadow-md transition-all"
          >
            {/* Left Section */}
            <div className="flex items-center space-x-4">
              <img
                src={`https://i.pravatar.cc/150?img=${index + 1}`} // Placeholder
                alt={buyer.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold">{buyer.name}</h3>
                <p className="text-sm text-gray-500">{buyer.email}</p>
              </div>
              <span className="text-xs bg-blue-100 text-blue-600 font-medium px-2 py-1 rounded ml-2">
                {buyer?.userId?.role || 'N/A'}
              </span>
            </div>

            {/* Middle Section */}
            <div className="hidden md:block text-sm text-gray-700">
              <p className="font-medium">Interested On</p>
              <p className="text-blue-500">{businessTitle}</p>
            </div>

            {/* Right Section */}
            <Link to={`/interestBuyer/details/${buyer._id}/iterestDetails/${buyer.businessId}`}>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm">
                View Details
              </button>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default InterestedBuyer;
