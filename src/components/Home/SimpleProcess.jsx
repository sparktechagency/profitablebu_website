import React from "react";
import backImg from "../../assets/Home/bb.png";
import img from "../../assets/Home/mmm.png";
import { Link } from "react-router-dom";
const SimpleProcess = () => {
  const steps = [
    {
      number: 1,
      title: "Create Your Account",
      description:
        "We dejoy working with dining clients, people for whom quality, service, integrity & aesthetics.",
    },
    {
      number: 2,
      title: "Browse Listings or Create Your Listing",
      description:
        "We dejoy working with dining clients, people for whom quality, service, integrity & aesthetics.",
    },
    {
      number: 3,
      title: "Contact the Seller or Buyer",
      description:
        "We dejoy working with dining clients, people for whom quality, service, integrity & aesthetics.",
    },
    {
      number: 4,
      title: "Negotiate & Finalize Deal",
      description:
        "We dejoy working with dining clients, people for whom quality, service, integrity & aesthetics.",
    },
    {
      number: 5,
      title: "Complete the Transaction",
      description:
        "We dejoy working with dining clients, people for whom quality, service, integrity & aesthetics.",
    },
    {
      number: 6,
      title: "Ongoing Support",
      description:
        "We dejoy working with dining clients, people for whom quality, service, integrity & aesthetics.",
    },
  ];
  return (
    <div>
      <section className="py-16  ">
        <div className="">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-blue-500 font-medium mb-2">Our Simple Process</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Whether you're buying or selling, our platform makes the process
              seamless and straightforward. Here's how it works:
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-[#FFFFFF] rounded-2xl p-8 py-11 border-2 border-cyan-200 hover:border-cyan-300 transition-colors"
              >
                {/* Number Icon */}
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-xl">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div>
        <div
          className="bg-[#0A0D53] md:grid grid-cols-2 md:px-11 px-4 py-11 w-full gap-6 text-white mt-20 bg-cover bg-center md:h-[60vh] h-[70vh]"
          style={{
            backgroundImage: `url(${backImg})`,
          }}
        >
          <div className=" md:flex justify-center items-center">
            <div className="">
              <h1 className="md:text-6xl text-4xl pb-4 text-black font-bold">
                ── Start Your <span className="text-[#22C55E]">Business</span>{" "}
                Journey
              </h1>
              <p className="text-black text-xl pt-4">
                Turn your business idea into a success story! Submit your
                listing with a clear description and image ── and let motivated
                buyers discover your opportunity.
              </p>
              <Link to={'/auth/login'}><button className="bg-[#0091FF] md:mt-11 mt-5 mb-5 py-3 px-4 rounded">
                Create Listing Now
              </button></Link>
            </div>
          </div>
          <div className="w-full">
            <img className="w-full" src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleProcess;
