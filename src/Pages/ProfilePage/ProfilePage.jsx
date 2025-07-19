import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Navigate } from "../Navigate";
import { Link } from "react-router-dom";

export const ProfilePage = () => {
  return (
    <div className="container mx-auto md:mt-10 mt-20  mb-20">
      <Navigate title={"Profile Settings"}></Navigate>
      {/* Header section */}
      <div className="p-6 bg-white rounded-xl shadow-md">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-4">
            <img
              src="https://i.pravatar.cc/150?img=7"
              alt="Dianne"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h2 className="text-lg font-semibold">Dianne</h2>
              <span className="inline-block text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded mt-1">
                Business Idea Lister
              </span>
              <p className="text-sm text-gray-600 mt-1">dric@gmail.com</p>
            </div>
          </div>

          <Link to={"/profilePage/EditProfile"}>
            <button className="text-sm bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              ✏️ Edit
            </button>
          </Link>
        </div>

        {/* Contact Info */}
        <div className="space-y-2 mb-4 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-blue-500" />
            <span>(406) 555–0120</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-blue-500" />
            <span>sardor@mail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-blue-500" />
            <span>
              Conference Hall 3, TechSphere Tower, 789 Silicon Avenue, San
              Francisco
            </span>
          </div>
        </div>

        {/* About Me */}
        <div>
          <h3 className="text-base font-semibold mb-1">About Me</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            A motivated business professional seeking to explore diverse
            business opportunities. I am interested in purchasing high-potential
            businesses, franchises, and assets that align with my growth goals.
            With a focus on profitability and sustainability, I am committed to
            making strategic investments that will drive success in the long
            term.
          </p>
        </div>
      </div>
    </div>
  );
};
