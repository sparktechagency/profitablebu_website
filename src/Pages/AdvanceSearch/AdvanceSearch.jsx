import { useState } from "react"
import { ChevronDown, Filter } from 'lucide-react';

export default function AdvanceSearch() {
          const [filters, setFilters] = useState({
                    businessCategory: "",
                    country: "",
                    location: "",
                    askingPrice: "",
                    businessType: "",
                    ownershipType: "",
                    sortBy: "",
          });

          const handleFilterChange = (key, value) => {
                    setFilters((prev) => ({
                              ...prev,
                              [key]: value,
                    }));
          };

          const handleApplyFilter = () => {
                    console.log("Applied filters:", filters);
          };

          const businessCategories = [
                    "Technology",
                    "Healthcare",
                    "Retail",
                    "Manufacturing",
                    "Services",
                    "Real Estate",
                    "Food & Beverage",
                    "Education",
          ]

          const countries = [
                    "United States",
                    "Canada",
                    "United Kingdom",
                    "Australia",
                    "Germany",
                    "France",
                    "Japan",
                    "Singapore",
          ]

          const locations = [
                    "New York",
                    "Los Angeles",
                    "Chicago",
                    "Houston",
                    "Phoenix",
                    "Philadelphia",
                    "San Antonio",
                    "San Diego",
          ]

          const askingPrices = [
                    "Under $50K",
                    "$50K - $100K",
                    "$100K - $250K",
                    "$250K - $500K",
                    "$500K - $1M",
                    "$1M - $5M",
                    "Over $5M",
          ]

          const businessTypes = [
                    "Franchise",
                    "Independent",
                    "Chain",
                    "Online Business",
                    "Brick & Mortar",
                    "Home-based",
                    "Mobile Business",
          ]

          const ownershipTypes = ["Sole Proprietorship", "Partnership", "Corporation", "LLC", "Cooperative", "Non-profit"]

          const sortOptions = [
                    "Price: Low to High",
                    "Price: High to Low",
                    "Newest First",
                    "Oldest First",
                    "Most Popular",
                    "Alphabetical",
          ]

          const CustomSelect = ({ label, value, onChange, options, placeholder = "Select One" }) => (
                    <div className="space-y-1">
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                        {label}
                              </label>
                              <div className="relative">
                                        <select
                                                  value={value}
                                                  onChange={(e) => onChange(e.target.value)}
                                                  className="block w-full pl-3 pr-10 py-2.5 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md appearance-none bg-white cursor-pointer"
                                        >
                                                  <option value="">{placeholder}</option>
                                                  {options?.map((option) => (
                                                            <option key={option} value={option}>
                                                                      {option}
                                                            </option>
                                                  ))}
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                  <ChevronDown className="h-4 w-4" />
                                        </div>
                              </div>
                    </div>
          );

          return (
                    <div className="relative max-w-7xl mx-auto p-5 rounded-lg shadow-sm my-10">
                              <div className="relative flex flex-col items-start gap-5 pl-5 mb-5">
                                        <div className="absolute top-0 left-0 w-2 h-full bg-[#00FF3A] z-[1] rounded-r-full"></div>

                                        <div className="ml-5">
                                                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0091FF] mb-6 leading-tight">
                                                            Advanced Search
                                                  </h1>
                                                  <p className="text-lg md:text-xl text-[#000000] leading-relaxed max-w-2xl">
                                                            Find the perfect business opportunity by applying detailed filters to narrow down your search.
                                                  </p>
                                        </div>
                              </div>

                              {/* Search Form */}
                              <div className="space-y-6">
                                        {/* First Row - Business Category and Country */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                  <CustomSelect
                                                            label="Business Category"
                                                            value={filters.businessCategory}
                                                            onChange={(value) => handleFilterChange("businessCategory", value)}
                                                            options={businessCategories}
                                                  />

                                                  <CustomSelect
                                                            label="Country"
                                                            value={filters.country}
                                                            onChange={(value) => handleFilterChange("country", value)}
                                                            options={countries}
                                                  />
                                        </div>

                                        {/* Second Row - Location and Asking Price */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                  <CustomSelect
                                                            label="Location"
                                                            value={filters.location}
                                                            onChange={(value) => handleFilterChange("location", value)}
                                                            options={locations}
                                                  />

                                                  <CustomSelect
                                                            label="Asking Price"
                                                            value={filters.askingPrice}
                                                            onChange={(value) => handleFilterChange("askingPrice", value)}
                                                            options={askingPrices}
                                                  />
                                        </div>

                                        {/* Third Row - Business Type */}
                                        <div className="space-y-2">
                                                  <CustomSelect
                                                            label="Business Type"
                                                            value={filters.businessType}
                                                            onChange={(value) => handleFilterChange("businessType", value)}
                                                            options={businessTypes}
                                                  />
                                        </div>

                                        {/* Fourth Row - Ownership Type and Sort By */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                  <CustomSelect
                                                            label="Ownership Type"
                                                            value={filters.ownershipType}
                                                            onChange={(value) => handleFilterChange("ownershipType", value)}
                                                            options={ownershipTypes}
                                                  />

                                                  <CustomSelect
                                                            label="Sort By"
                                                            value={filters.sortBy}
                                                            onChange={(value) => handleFilterChange("sortBy", value)}
                                                            options={sortOptions}
                                                  />
                                        </div>

                                        {/* Apply Filter Button */}
                                        <div className="pt-2">
                                                  <button
                                                            onClick={handleApplyFilter}
                                                            className="w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-150 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-sm flex items-center justify-center gap-2"
                                                  >
                                                            <Filter className="h-5 w-5" />
                                                            Apply Filters
                                                  </button>
                                        </div>
                              </div>
                    </div>
          );
}
