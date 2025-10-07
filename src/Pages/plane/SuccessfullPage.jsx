import { Card } from "antd";
import { CircleCheckIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const SuccessfullPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 via-white to-blue-200 px-4">
      <Card className="max-w-md w-full rounded-2xl  border border-blue-100 bg-white p-8 text-center space-y-6">
        {/* Success Icon */}
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full blur-xl bg-green-300 opacity-40 animate-pulse"></div>
            <CircleCheckIcon className="text-green-500 h-20 w-20 relative z-10" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mt-4">
            Payment Successful 🎉
          </h1>
          <p className="text-gray-500 mt-2">
            Thank you for your payment! Your transaction was completed successfully.
          </p>
        </div>

        {/* Button */}
        <div className="flex justify-center pt-4">
          <Link to={"/"}>
            <button className="relative px-10 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <span className="relative z-10">Return Home</span>
              <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 hover:opacity-100 transition-opacity"></span>
            </button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default SuccessfullPage;
