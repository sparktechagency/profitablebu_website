import React from "react";
import { Crown } from "lucide-react";
import { Navigate } from "../Navigate";
import { useGetProfileQuery } from "../redux/api/userApi";
import { Link } from "react-router-dom";

const Subscription = () => {
  const { data: profileData, isLoading } = useGetProfileQuery();

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;

  const subscription = profileData?.data;
const startDate = profileData?.data?.subscriptionStartDate
  ? new Date(profileData.data.subscriptionStartDate).toLocaleDateString()
  : 0;

const endDate = profileData?.data?.subscriptionEndDate
  ? new Date(profileData.data.subscriptionEndDate).toLocaleDateString()
  : 0;

console.log("Start Date:", startDate);
console.log("End Date:", endDate);

  const role = profileData?.data?.role;

  return (
    <div className="container mx-auto p-4 space-y-4 mt-11">
      {/* Header */}
      <Navigate title={"Subscription"} />

      {/* Subscription Status Card */}
      <div className="bg-white rounded-lg shadow-sm border p-6 relative overflow-hidden">
        <div className="flex justify-between items-start">
          <div className="flex items-start gap-4">
            <div className="bg-blue-50 p-2 rounded-md">
              <Crown className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <p className="text-gray-600 text-sm">
                Your subscription plan:{" "}
                <span className="font-semibold">
                  {subscription?.subscriptionPlanType} / $
                  {subscription?.subscriptionPlanPrice}
                </span>
              </p>

              <p className="text-gray-600 text-sm">Active until</p>
              <h2 className="text-xl font-bold mt-1">{endDate}</h2>
            </div>
          </div>
          <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-md text-sm font-medium">
            {role}
          </div>
          {/* Decorative gradient */}
          <div className="absolute right-0 top-0 h-full w-1/3 pointer-events-none">
            <div className="absolute right-0 top-0 h-full w-full bg-gradient-to-brrounded-r-lg"></div>
            <div className="absolute right-8 top-4 h-2 w-2 bg-blue-200 rounded-full"></div>
            <div className="absolute right-12 top-12 h-3 w-3 bg-blue-200 rounded-full"></div>
            <div className="absolute right-4 top-24 h-2 w-2 bg-blue-200 rounded-full"></div>
            <div className="absolute right-20 bottom-8 h-4 w-4 bg-blue-200 rounded-full"></div>
            <div className="absolute right-6 bottom-20 h-2 w-2 bg-blue-200 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Last Purchase Date */}
      <div className="space-y-2">
        <h3 className="text-base font-medium">Subscription Start Date</h3>
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <p className="text-gray-800">{startDate}</p>
        </div>
      </div>

      {/* Subscription Expiry Date */}
      <div className="space-y-2">
        <h3 className="text-base font-medium">Subscription Expiry Date</h3>
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <p className="text-gray-800">{endDate}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
        <Link to={"/plane"}>
          <button className="bg-blue-500 w-full hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-colors">
            Change Subscription
          </button>
        </Link>
        <Link
          to={
            subscription?.subscriptionPlanPrice === 0
              ? ""
              : `/plane/singlePlane/${subscription?.subscriptionPlan}`
          }
        >
          <button
            disabled={subscription?.subscriptionPlanPrice === 0}
            className={`w-full font-medium py-3 px-4 rounded-lg transition-colors
      ${
        subscription?.subscriptionPlanPrice === 0
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-blue-500 hover:bg-blue-600 text-white"
      }`}
          >
            Upgrade Subscription
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Subscription;
