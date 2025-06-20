/* eslint-disable no-unused-vars */
import React from "react"
import hero from '../../assets/Home/hero.png'
import { Link } from "react-router-dom"

export default function Home() {
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
        <div className="relative z-10 px-4 py-20 md:py-32 lg:py-40 max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Empowering Your <span className="text-green-500">Business</span> with Smart{" "}
              <span className="text-blue-500">Financial Solutions</span>
            </h1>
            <p className="text-white text-lg mb-8">
              At PBFS.com, we provide tailored financial strategies, expert advice, and seamless support to help your
              business grow stronger and faster.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg h-auto">Get Started</button>
          </div>
        </div>

        {/* Decorative Star */}
        <div className="absolute bottom-20 right-20 z-10 hidden lg:block">
          <div className="w-32 h-32 text-amber-400">
            <img src="/images/gold-star.png" alt="Decorative star" width={128} height={128} />
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="relative z-20 mx-auto -mt-16 md:-mt-24 max-w-4xl px-4">
        <div className="bg-gradient-to-r from-sky-200/90 to-sky-300/90 backdrop-blur-sm rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
            You Find A <span className="text-green-500">Business</span> For{" "}
            <span className="text-blue-500">Yourself</span>.
          </h2>

          <div className="flex flex-col md:flex-row gap-2">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                dd
              </div>
              <input
                type="text"
                placeholder="Search Your Business"
                className="pl-10 pr-4 py-3 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6">Search</button>
          </div>

          <div className="mt-3 text-right">
            <Link to="/advanced-search" className="text-blue-600 hover:underline flex items-center justify-end gap-1">
              <span className="text-blue-500">🔍</span> Advanced search
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
