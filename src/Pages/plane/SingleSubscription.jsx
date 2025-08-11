import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useGetSingleSubscriptionQuery } from '../redux/api/businessApi';
import AddSubPlane from './AddSubPlane';
import Header from '../AboutUs/Header';


const SingleSubscription = () => {
  const { id: subscriptionId } = useParams();
  const [openAddModal, setOpenAddModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const { data: signleSubscription, isLoading, isError } = useGetSingleSubscriptionQuery({
    subscriptionId,
  });

  if (isLoading) return <p>Loading subscription plan...</p>;
  if (isError) return <p>Failed to load subscription plan.</p>;

  const plan = signleSubscription?.data;

  return (
    <div className="py-16">
      <Header
        title={`Subscription Plan for ${plan?.subscriptionPlanRole || "User"}`}
        description="Unlock premium features and connect with top listings tailored to your investment goals."
      />

      <div className="max-w-6xl mx-auto text-center pt-11">
        <p className="text-sm text-[#0091FF] font-semibold">Pricing Table</p>
        <h2 className="text-3xl font-bold mb-12">Our Pricing Plan</h2>

        {plan ? (
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">{plan.subscriptionPlanType}</h3>
              <p className="text-sm text-gray-500 mb-4">{plan.subscriptionPlanRole}</p>
              <h2 className="text-4xl font-bold mb-4">
                ${plan.price}
                <span className="text-lg align-top"> / {plan.duration}</span>
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
                setSelectedPlan(plan);
                setOpenAddModal(true);
              }}
              className="mt-auto bg-[#0091FF] text-white rounded-md py-2 px-4 hover:bg-blue-600 transition"
            >
              Purchase Now
            </button>
          </div>
        ) : (
          <p className="text-gray-500">No subscription plan available.</p>
        )}
      </div>

      <AddSubPlane
        openAddModal={openAddModal}
        setOpenAddModal={setOpenAddModal}
        subscriptionId={selectedPlan}
      />
    </div>
  );
};

export default SingleSubscription;
