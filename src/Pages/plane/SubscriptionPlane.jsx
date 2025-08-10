import React, { useState } from "react";
import AddSubPlane from "./AddSubPlane";
import Header from "../AboutUs/Header";
import { useGetProfileQuery } from "../redux/api/userApi";
import { useGetPlaneQuery } from "../redux/api/businessApi";

const SubscriptionPlan = () => {
  const [openAddModal, setOpenAddModal] = useState(false);

  const [selectedPlanId, setSelectedPlanId] = useState(null);
  console.log(selectedPlanId);
  const { data: profileData, isLoading: profileLoading } = useGetProfileQuery();
  console.log(profileData);
  const userRole = profileData?.data?.role;
  const { data: planeData, isLoading: planLoading } = useGetPlaneQuery({
    role: userRole,
  });

  if (profileLoading || planLoading) {
    return <p className="text-center py-10">Loading...</p>;
  }

  const plans = planeData?.data || [];
  console.log(planeData);
  return (
    <div className="py-16">
      <Header
        title={`Subscription Plans for ${userRole || "User"}`}
        description="Unlock premium features and connect with top listings tailored to your investment goals."
      />

      <div className="max-w-6xl mx-auto text-center pt-11">
        <p className="text-sm text-[#0091FF] font-semibold">Pricing Table</p>
        <h2 className="text-3xl font-bold mb-12">Our Pricing Plan</h2>

        {plans.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan._id}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {plan.subscriptionPlanType}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    {plan.subscriptionPlanRole}
                  </p>
                  <h2 className="text-4xl font-bold mb-4">
                    {plan.price}
                    <span className="text-lg align-top">$</span>
                  </h2>
                  <ul className="text-left space-y-2 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-green-500">✔️</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => {
                    setSelectedPlanId(plan); // এখানে plan._id পাঠাচ্ছি
                    setOpenAddModal(true);
                  }}
                  className="mt-auto bg-[#0091FF] text-white rounded-md py-2 px-4 hover:bg-blue-600 transition"
                >
                  Purchase Now
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No subscription plans available.</p>
        )}
      </div>

      <AddSubPlane
        openAddModal={openAddModal}
        setOpenAddModal={setOpenAddModal}
        subscriptionId={selectedPlanId}
      />
    </div>
  );
};

export default SubscriptionPlan;
