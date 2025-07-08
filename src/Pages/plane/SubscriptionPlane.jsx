import React, { useState } from "react";
import img from "../../assets/Home/cover.png";
import AddSubPlane from "./AddSubPlane";
import Header from "../AboutUs/Header";
const plans = [
  {
    title: "Free Plan",
    price: "00",
    subtitle: "Starter – 15 Days Trial",
    features: [
      "Access all public listings (businesses, franchises, assets, ideas)",
      "Submit interest request (without seeing contact details)",
      "View listing summaries and brief descriptions",
      "NDA signing prompt before contact access (but no actual contact shown)",
      "Dashboard to manage applied listings",
    ],
  },
  {
    title: "1 Months",
    price: "99",
    features: [
      "Includes all Free Plan features, plus",
      "View seller contact details",
      "Direct messaging with sellers",
      "Save favorite listings",
      "Real-time chat with sellers",
      "Set alerts for new listings by industry, location",
    ],
  },
  {
    title: "3 Month",
    price: "199",
    features: [
      "Includes all 1-Month Plan features, plus",
      "Priority notifications when new listings match interests",
      "Appear first in seller’s inquiry lists (visibility boost)",
      "Enhanced search filters (search by verified sellers, franchises)",
    ],
  },
  {
    title: "6 Month",
    price: "399",
    features: [
      "Includes all 3-Month Plan features, plus",
      "Early access to premium listings",
      "View your saved search history",
      "Real-time listing suggestions based on past interests",
      "Extended support via in-app admin message form",
    ],
  },
];

const SubscriptionPlan = () => {
  const [openAddModal, setOpenAddModal] = useState(false);
  return (
    <div className=" py-16 ">
       <Header
              title="Subscription Plans for Buyers"
              description="Unlock premium features and connect with top listings tailored to your investment goals."
            />
      <div className="max-w-6xl mx-auto text-center pt-11">
        <p className="text-sm text-[#0091FF] font-semibold">Pricing Table</p>
        <h2 className="text-3xl font-bold mb-12">Our Pricing Plan</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.slice(0, 3).map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
                {plan.subtitle && (
                  <p className="text-sm text-gray-500 mb-4">{plan.subtitle}</p>
                )}
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
              <button onClick={() => setOpenAddModal(true)} className="mt-auto bg-[#0091FF] text-white rounded-md py-2 px-4 hover:bg-blue-600 transition">
                Purchase Now
              </button>
            </div>
          ))}
        </div>

        {/* 6 Month Plan Separate */}
        <div className="mt-10 flex justify-center">
          <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-md">
            <h3 className="text-xl font-semibold mb-2">{plans[3].title}</h3>
            <h2 className="text-4xl font-bold mb-4">
              {plans[3].price}
              <span className="text-lg align-top">$</span>
            </h2>
            <ul className="text-left space-y-2 mb-6">
              {plans[3].features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="text-green-500">✔️</span> {feature}
                </li>
              ))}
            </ul>
            <button className="bg-[#0091FF] text-white rounded-md py-2 px-4 hover:bg-blue-600 transition">
              Purchase Now
            </button>
          </div>
        </div>
      </div>
      <AddSubPlane setOpenAddModal={setOpenAddModal}
        openAddModal={openAddModal}></AddSubPlane>
    </div>
  );
};

export default SubscriptionPlan;
