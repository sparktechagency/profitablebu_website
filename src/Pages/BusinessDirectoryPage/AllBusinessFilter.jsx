import React, { useEffect, useState } from "react";
import {
  SearchOutlined,
  AppstoreOutlined,
  UnorderedListOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Button, Input, Select, Collapse, Card, Checkbox, Radio } from "antd";
import { div } from "framer-motion/client";
import { useGetAllBusinesFilterQuery } from "../redux/api/businessApi";
import { Link, useLocation } from "react-router-dom";
import { imageUrl } from "../redux/api/baseApi";

const { Panel } = Collapse;
const { Option } = Select;

const businessCategories = [
  "Restaurant",
  "Retail",
  "E-commerce",
  "Franchise",
  "Services",
  "Manufacturing",
  "Health & Beauty",
  "Education",
  "Automotive",
  "Other",
];

// const region = [
//   "Africa",
//   "Asia",
//   "Central America",
//   "Europe",
//   "Middle East",
//   "North America",
//   "Pacific",
//   "Rest Of The World / Other",
//   "South America",
// ];

const country = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "Franch",
  "Italy",
  "Spain",
  "United Arab Emirates",
  "India",
];

const location = [
  "Dubai",
  "Sharjah",
  "Ajman",
  "Umm Al-Quwain",
  "Fujairah",
  "Ras Al Khaimah",
];

const askingPrice = [
  "Under $50K",
  "$50K - $100K",
  "$100K - $250K",
  "$250K - $500K",
  "$500K - $1M",
  "Over $1M",
];

const businessType = [
  "Franchise",
  "Independent",
  "Startup",
  "Home-Based",
  "Online",
];

const ownerShipType = [
  "Sole Proprietorship",
  "Partnership",
  "Corporation",
  "LLC",
];

const sortBy = ["Newest First", "Price Low to High", "Most Viewed"];

const ageListing = [
  "Anytime",
  "Last 3 Days",
  "Last 14 Days",
  "Last Month",
  "Last 3 Month",
];

const businessListings = [
  {
    id: 1,
    title: "Powering Better Financial Solutions",
    location: "Los Angeles, CA",
    categories: ["Financial Services", "Business Consulting"],
    startingPrice: 100,
    image: "/modern-city-skyline.png",
  },
  {
    id: 2,
    title: "Powering Better Financial Solutions",
    location: "Los Angeles, CA",
    categories: ["Financial Services", "Business Consulting"],
    startingPrice: 100,
    image: "/modern-office-interior.png",
  },
  {
    id: 3,
    title: "Powering Better Financial Solutions",
    location: "Los Angeles, CA",
    categories: ["Financial Services", "Business Consulting"],
    startingPrice: 100,
    image: "/placeholder-lhks3.png",
  },

  {
    id: 3,
    title: "Powering Better Financial Solutions",
    location: "Los Angeles, CA",
    categories: ["Financial Services", "Business Consulting"],
    startingPrice: 100,
    image: "/placeholder-lhks3.png",
  },
];

export default function AllBusinessFilterAnt() {
  const locations = useLocation();
   console.log(locations?.state);
  const [searchQuery, setSearchQuery] = useState("");
  console.log(searchQuery);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setSearchQuery(params.get("query") || "");
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    setSelectedBusinessCategory(params.get("businessCategory") || null);
    setSelectedCountry(params.get("country") || null);
    setSelectedLocation(params.get("location") || null);
    setSelectedAskingPrice(params.get("askingPrice") || null);
    setSelectedBusinessType(params.get("businessType") || null);
    setSelectedOwnerShipType(params.get("ownerShipType") || null);
    setSelectedSortBy(params.get("sortBy") || null);
    setSelectedAgeListing(params.get("ageOfListing") || null);
    setFilters(params.get("businessRole") || null);
  }, [location.search]);

  const [businessRole, setFilters] = useState([]);
console.log(businessRole)
  console.log(businessRole);
  const [itemsPerPage, setItemsPerPage] = useState("20");
  const [viewMode, setViewMode] = useState("grid");
  const [selectedBusinessCategory, setSelectedBusinessCategory] =
    useState(null);
  console.log(selectedBusinessCategory);
  //   const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedAskingPrice, setSelectedAskingPrice] = useState(null);
  const [selectedBusinessType, setSelectedBusinessType] = useState(null);
  const [selectedOwnerShipType, setSelectedOwnerShipType] = useState(null);
  const [selectedSortBy, setSelectedSortBy] = useState(null);
  const [selectedAgeListing, setSelectedAgeListing] = useState(null);
  const { data: businessFilter } = useGetAllBusinesFilterQuery({
    category: selectedBusinessCategory,
    location: selectedLocation,
    country: selectedCountry,
    ageOfListing: selectedAgeListing,
    sortBy: selectedSortBy,
    businessType: selectedBusinessType,
    ownerShipType: selectedOwnerShipType,
    askingPrice: selectedAskingPrice,
    searchText: searchQuery,
    businessRole: businessRole,
    
  });
  console.log(businessFilter);
  const business = businessFilter?.data || [];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container m-auto">
      <div className="flex min-h-screen bg-white my-11">
        {/* Sidebar */}
        <div className="w-80 border-r border-gray-200 p-6">
          <Collapse
            defaultActiveKey={["1"]}
            expandIcon={({ isActive }) => (
              <DownOutlined rotate={isActive ? 180 : 0} />
            )}
          >
            <Panel className="" header="Business Category" key="1">
              <Radio.Group
                value={selectedBusinessCategory}
                onChange={(e) => setSelectedBusinessCategory(e.target.value)}
              >
                {businessCategories.map((category) => (
                  <div key={category} className="mb-2">
                    <Radio value={category}>{category}</Radio>
                  </div>
                ))}
              </Radio.Group>
            </Panel>
          </Collapse>

          {/* Region */}
          {/* <div className="my-2">
            <Collapse
            
              expandIcon={({ isActive }) => (
                <DownOutlined rotate={isActive ? 180 : 0} />
              )}
            >
              <Panel header="Region" key="1">
                <Radio.Group
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                >
                  {region.map((category) => (
                    <div key={category} className="mb-2">
                      <Radio value={category}>{category}</Radio>
                    </div>
                  ))}
                </Radio.Group>
              </Panel>
            </Collapse>
          </div> */}

          {/* Country */}
          <div className="my-2">
            <Collapse
              expandIcon={({ isActive }) => (
                <DownOutlined rotate={isActive ? 180 : 0} />
              )}
            >
              <Panel header="Country" key="1">
                <Radio.Group
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                >
                  {country.map((category) => (
                    <div key={category} className="mb-2">
                      <Radio value={category}>{category}</Radio>
                    </div>
                  ))}
                </Radio.Group>
              </Panel>
            </Collapse>
          </div>

          {/* Location */}
          <div className="my-2">
            <Collapse
              expandIcon={({ isActive }) => (
                <DownOutlined rotate={isActive ? 180 : 0} />
              )}
            >
              <Panel header="Location" key="1">
                <Radio.Group
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                >
                  {location.map((category) => (
                    <div key={category} className="mb-2">
                      <Radio value={category}>{category}</Radio>
                    </div>
                  ))}
                </Radio.Group>
              </Panel>
            </Collapse>
          </div>

          {/* Asking Price */}
          <div className="my-2">
            <Collapse
              expandIcon={({ isActive }) => (
                <DownOutlined rotate={isActive ? 180 : 0} />
              )}
            >
              <Panel header="Asking Price" key="1">
                <Radio.Group
                  value={selectedAskingPrice}
                  onChange={(e) => setSelectedAskingPrice(e.target.value)}
                >
                  {askingPrice.map((category) => (
                    <div key={category} className="mb-2">
                      <Radio value={category}>{category}</Radio>
                    </div>
                  ))}
                </Radio.Group>
              </Panel>
            </Collapse>
          </div>

          {/* Business Type */}
          <div className="my-2">
            <Collapse
              expandIcon={({ isActive }) => (
                <DownOutlined rotate={isActive ? 180 : 0} />
              )}
            >
              <Panel header="Business Type" key="1">
                <Radio.Group
                  value={selectedBusinessType}
                  onChange={(e) => setSelectedBusinessType(e.target.value)}
                >
                  {businessType.map((category) => (
                    <div key={category} className="mb-2">
                      <Radio value={category}>{category}</Radio>
                    </div>
                  ))}
                </Radio.Group>
              </Panel>
            </Collapse>
          </div>

          {/* Ownership Type */}
          <div className="my-2">
            <Collapse
              expandIcon={({ isActive }) => (
                <DownOutlined rotate={isActive ? 180 : 0} />
              )}
            >
              <Panel header="Ownership Type" key="1">
                <Radio.Group
                  value={selectedOwnerShipType}
                  onChange={(e) => setSelectedOwnerShipType(e.target.value)}
                >
                  {ownerShipType.map((category) => (
                    <div key={category} className="mb-2">
                      <Radio value={category}>{category}</Radio>
                    </div>
                  ))}
                </Radio.Group>
              </Panel>
            </Collapse>
          </div>

          {/* Sort By */}
          <div className="my-2">
            <Collapse
              expandIcon={({ isActive }) => (
                <DownOutlined rotate={isActive ? 180 : 0} />
              )}
            >
              <Panel header="Sort By" key="1">
                <Radio.Group
                  value={selectedSortBy}
                  onChange={(e) => setSelectedSortBy(e.target.value)}
                >
                  {sortBy.map((category) => (
                    <div key={category} className="mb-2">
                      <Radio value={category}>{category}</Radio>
                    </div>
                  ))}
                </Radio.Group>
              </Panel>
            </Collapse>
          </div>

          {/* Age Of Listing */}
          <div className="my-2">
            <Collapse
              expandIcon={({ isActive }) => (
                <DownOutlined rotate={isActive ? 180 : 0} />
              )}
            >
              <Panel header="Age Of Listing" key="1">
                <Radio.Group
                  value={selectedAgeListing}
                  onChange={(e) => setSelectedAgeListing(e.target.value)}
                >
                  {ageListing.map((category) => (
                    <div key={category} className="mb-2">
                      <Radio value={category}>{category}</Radio>
                    </div>
                  ))}
                </Radio.Group>
              </Panel>
            </Collapse>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Search and Controls */}
          <div className="flex items-center justify-between mb-6 gap-4">
            <input
              className="border px-2 py-1"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search your perfect event"
            />

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span>Items Per Page:</span>
                <Select
                  value={itemsPerPage}
                  onChange={setItemsPerPage}
                  style={{ width: 80 }}
                >
                  <Option value="10">10</Option>
                  <Option value="20">20</Option>
                  <Option value="50">50</Option>
                </Select>
              </div>

              <div className="flex">
                <Button
                  type={viewMode === "grid" ? "primary" : "default"}
                  icon={<AppstoreOutlined />}
                  onClick={() => setViewMode("grid")}
                />
                <Button
                  type={viewMode === "list" ? "primary" : "default"}
                  icon={<UnorderedListOutlined />}
                  onClick={() => setViewMode("list")}
                />
              </div>
            </div>
          </div>

          {/* Business Listings */}
          {/* Business Listings */}
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                : "flex flex-col gap-6"
            }
          >
            {business.map((business) => (
              <Card
                key={business.id}
                hoverable
                cover={
                  viewMode === "grid" ? (
                    <img
                      alt={business.title}
                      src={`${imageUrl}/uploads/business-image/${business.image}`}
                      style={{
                        height: 200,
                        objectFit: "cover",
                      }}
                    />
                  ) : null
                }
                style={{
                  width: "100%",
                  backgroundColor: viewMode === "list" ? "#f9fafb" : "#fff", // bg change in list view
                }}
              >
                <div
                  className={
                    viewMode === "list"
                      ? "flex items-center gap-4" // list view flex layout
                      : "p-4"
                  }
                >
                  {viewMode === "list" && (
                    <img
                      alt={business.title}
                      src={`${imageUrl}/uploads/business-image/${business.image}`}
                      style={{
                        width:'400px',
                        height:'300px',
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                  )}

                  <div className={viewMode === "list" ? "flex-1" : ""}>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {business.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{business.location}</p>
                    <div className="mb-2">
                      <span className="text-blue-500">{business.category}</span>{" "}
                      ||{" "}
                      <span className="text-[#D97706]">
                        Business Consulting
                      </span>
                    </div>
                    <p className="text-gray-800 mb-4">
                      Starting from{" "}
                      <span className="font-semibold">
                        {business.askingPrice}
                      </span>
                    </p>
                    <Link to={`/details/${business?._id}`}>
                      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
