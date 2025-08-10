import { Card } from "antd";
import { CircleCheckIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const SuccessfullPage = () => {
  return (
 <div className="flex flex-col items-center justify-center min-h-screen">
      <Card className="max-w-md w-full space-y-6 p-6 bg-white rounded-lg shadow-lg ">
        <div className="flex flex-col items-center">
          <CircleCheckIcon className="text-green-500 h-16 w-16" />
          <h1 className="text-3xl font-bold  text-black mt-4">Payment Successful</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Thank you for your payment.
          </p>
        </div>
       
        <div className="flex justify-center pt-6">
          <Link
            to={'/'}
            
            
          >
          <button
              type="primary"
              htmlType="submit"
              className="px-11 bg-[#0091FF] rounded text-white py-2"
            >
              Return Home
            </button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default SuccessfullPage;
