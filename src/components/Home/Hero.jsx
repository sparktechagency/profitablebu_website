/* eslint-disable no-unused-vars */
import React from "react";
import hero from "../../assets/Home/hero.png";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "./icons/SearchIcon";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="relative">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={hero}
            alt="Business meeting background"
            className="w-full h-full object-cover brightness-75 absolute inset-0"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 px-4 py-20 md:py-32 lg:py-40 container mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Empowering Your <span className="text-[#22C55E]">Business</span>{" "}
              with Smart{" "}
              <span className="text-[#0091FF]">Financial Solutions</span>
            </h1>
            <p className="text-white text-lg mb-8">
              At PBFS.com, we provide tailored financial strategies, expert
              advice, and seamless support to help your business grow stronger
              and faster.
            </p>
            <button className="bg-[#0091FF] hover:bg-blue-600 text-white px-8 py-3 rounded text-lg h-auto">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className=" z-20 mx-auto lg:-mt-28 mt-8  md:-mt-28 max-w-4xl px-4">
        <div className="bg-gradient-to-r from-sky-200/90 to-sky-300/30 backdrop-blur-sm rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-semibold text-white text-center mb-6">
            You Find A <span className="text-[#22C55E]">Business</span> For{" "}
            <span className="text-[#0091FF]">Yourself</span>.
          </h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const searchInput = e.target.elements.searchInput;
              const searchQuery = searchInput.value.trim();
              if (searchQuery) {
                navigate(`/search?query=${searchQuery}`);
              }
            }}
          >
            <div className="flex flex-col md:flex-row gap-2">
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
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6"
              >
                Search
              </button>
            </div>
          </form>

          <div className="mt-3 text-right">
            <Link
              to="/advanced-search"
              className="text-blue-600 hover:underline flex items-center justify-end gap-1"
            >
              <span className="text-blue-500">🔍</span> Advanced search
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
