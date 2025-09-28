/* eslint-disable no-unused-vars */
import React from "react";
import hero from "../../assets/Home/hero.png";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "./icons/SearchIcon";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative pb-16"> {/* Added bottom padding */}
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={hero}
            alt="Business meeting background"
            className="w-full h-full object-cover brightness-75"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 px-4 py-20 md:py-32 lg:py-40 container mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Buy, Sell & Invest in{" "}
              <span className="text-[#22C55E]">Business</span>, Franchises,
              Assets & Business Ideas
              <span className="text-[#0091FF]"> Worldwide</span>
            </h1>

            <p className="text-white text-lg mb-8">
              Connect with serious buyers, sellers, brokers, investors,
              franchisors, and business idea listers on
              <span className="font-semibold"> ProfitableBusinessesForSale.com</span> — 
              the trusted marketplace that helps you grow.
            </p>

            <Link to="/auth/login">
              <button className="bg-[#0091FF] hover:bg-blue-600 text-white px-8 py-3 rounded text-lg">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="relative z-20 -mt-28 px-4">
        {/* -mt-20 will lift the search box slightly over the hero bottom */}
        <div className="mx-auto w-full max-w-4xl">
          <div className="bg-gradient-to-r from-sky-200/90 to-sky-300/30 backdrop-blur-sm rounded-lg p-8 shadow-lg border border-white/20">
            <h2 className="text-2xl md:text-3xl font-semibold text-white text-center mb-6">
              Find Your Profitable{" "}
              <span className="text-[#22C55E]">Business</span> Today.
            </h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const searchInput = e.target.elements.searchInput;
                const query = searchInput.value.trim();
                if (query) {
                  navigate(`/search?query=${encodeURIComponent(query)}`);
                }
              }}
            >
              <div className="flex flex-col md:flex-row gap-3">
                {/* Input Field */}
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <SearchIcon />
                  </div>
                  <input
                    type="text"
                    name="searchInput"
                    placeholder="Search Your Business"
                    className="pl-10 pr-4 py-3 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Search Button */}
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md"
                >
                  Search
                </button>
              </div>
            </form>

            {/* Advanced Search Link */}
            <div className="mt-4 text-right">
              <Link
                to="/advanced-search"
                className="text-blue-500 hover:text-white flex items-center justify-end gap-1"
              >
                <span>🔍</span> Advanced Search
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
