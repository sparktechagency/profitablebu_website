import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Navigate } from "../Navigate";
import { Link } from "react-router-dom";
import { useGetProfileQuery } from "../redux/api/userApi";
import { imageUrl } from "../redux/api/baseApi";
import { User } from "lucide-react";

const BASE_URL = "https://your-server-url.com/uploads"; // Update with your actual base image URL

export const ProfilePage = () => {
  const { data: profileData, isLoading } = useGetProfileQuery();

  const user = profileData?.data;
  console.log(user);
  if (isLoading) return <div>Loading...</div>;
  if (!user) return <div>No user data found.</div>;

  return (
    <div className="container mx-auto md:mt-10 mt-20 mb-20">
      <Navigate title={"Profile Settings"} />

      <div className="p-6 bg-white rounded-xl shadow-md">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-4">
            {user?.image ? (
              <img
                src={`${imageUrl}/uploads/profile-image/${user.image}`}
                alt={user?.name || "User"}
                className="w-16 h-16 rounded-full object-cover"
              />
            ) : (
              <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                <User className="w-8 h-8 text-gray-500" />{" "}
             
              </div>
            )}

            <div>
              <h2 className="text-lg font-semibold">{user.name}</h2>
              <span className="inline-block text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded mt-1">
                {user.role}
              </span>
              <p className="text-sm text-gray-600 mt-1">{user.email}</p>
            </div>
          </div>

          <Link to={"/profilePage/EditProfile"}>
            <button className="text-sm bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              ✏️ Edit
            </button>
          </Link>
        </div>

        <div className="space-y-2 mb-4 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-blue-500" />
            <span>{user.mobile}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-blue-500" />
            <span>{user.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-blue-500" />
            <span>
              {user.location}, {user.country}
            </span>
          </div>
        </div>

        <div>
          <h3 className="text-base font-semibold mb-1">About Me</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            {user.description}
          </p>
        </div>
      </div>
    </div>
  );
};
