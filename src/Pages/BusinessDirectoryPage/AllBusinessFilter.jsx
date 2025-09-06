import React, { useEffect, useState } from "react";
import {
  SearchOutlined,
  AppstoreOutlined,
  UnorderedListOutlined,
  DownOutlined,
} from "@ant-design/icons";
import {
  Button,
  Input,
  Select,
  Collapse,
  Card,
  Checkbox,
  Radio,
  Pagination,
} from "antd";
import { div } from "framer-motion/client";
import {
  useGetAllBusinesFilterQuery,
  useGetCategtoryQuery,
} from "../redux/api/businessApi";
import { Link, useLocation } from "react-router-dom";
import { imageUrl } from "../redux/api/baseApi";
import { City, Country, State } from "country-state-city";
import { Menu, X } from "lucide-react";

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
  "Other"
];

// <Option value="Franchise">Franchise</Option>
//                 <Option value="Independent">Independent</Option>
//                 <Option value="Startup">Startup</Option>
//                 <Option value="Home-Based">Home-Based</Option>
//                 <Option value="Online">Online</Option>

const ownerShipType = [
  "Sole Proprietorship",
  "Partnership",
  "Corporation",
  "LLC",
  "Other"
];

const sortBy = ["Newest First", "Price Low to High", "Most Viewed"];

const ageListing = [
  "Anytime",
  "Last 3 Days",
  "Last 14 Days",
  "Last Month",
  "Last 3 Month",
];



export default function AllBusinessFilterAnt() {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [cities, setCities] = useState([]);
  console.log(states, cities);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  console.log(selectedState);
  const [selectedCity, setSelectedCity] = useState(null);

  const { data: categorys } = useGetCategtoryQuery();
  const locations = useLocation();
  console.log(locations?.state);
  const [searchQuery, setSearchQuery] = useState("");
  console.log(searchQuery);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setSearchQuery(params.get("query") || "");
  }, []);
  useEffect(() => {
    setCountries(Country.getAllCountries());
  }, []);

  const handleCountryChange = (value) => {
    setSelectedCountry(value);
    setStates(State.getStatesOfCountry(value));
    setCities([]);
    setSelectedState(null);
    setSelectedCity(null);
    console.log("Selected Country:", value);
  };

// State Change
const handleStateChange = (value) => {
  setSelectedState(value); 
  const selectedStateObj = states.find((s) => s.name === value);
  setCities(City.getCitiesOfState(selectedCountry, selectedStateObj?.isoCode));
  setSelectedCity(null);
  console.log("Selected State:", value);
};


const handleCityChange = (value) => {
  setSelectedCity(value);
  console.log("Selected City:", value);
};

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    setSelectedCategory(params.get("category") || null);
    setSelectedSubCategory(params.get("subCategory") || null);
    setSelectedCountry(params.get("country") || null);
    setSelectedState(params.get("state") || null);
    setSelectedCity(params.get("city") || null);
    setSelectedLocation(params.get("location") || null);
    setSelectedAskingPrice(params.get("askingPrice") || null);
    setSelectedBusinessType(params.get("businessType") || null);
    setSelectedOwnerShipType(params.get("ownerShipType") || null);
    setSelectedSortBy(params.get("sortBy") || null);
    setSelectedAgeListing(params.get("ageOfListing") || null);
    setFilters(params.get("businessRole") || null);
  }, [location.search]);

  const [businessRole, setFilters] = useState([]);
  console.log(businessRole);
  console.log(businessRole);

  const [viewMode, setViewMode] = useState("grid");
  const [selectedCategory, setSelectedCategory] = useState(null);
  console.log(selectedCategory);
  //   const [selectedRegion, setSelectedRegion] = useState(null);

  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedAskingPrice, setSelectedAskingPrice] = useState(null);
  console.log(selectedAskingPrice);
  const [selectedBusinessType, setSelectedBusinessType] = useState(null);
  const [selectedOwnerShipType, setSelectedOwnerShipType] = useState(null);
  const [selectedSortBy, setSelectedSortBy] = useState(null);
  const [selectedAgeListing, setSelectedAgeListing] = useState(null);
  // const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  console.log(selectedSubCategory);
  const [currentPage, setCurrentPage] = useState(1);
  console.log(currentPage);

  const pageSize = 10;
  const { data: businessFilter } = useGetAllBusinesFilterQuery({
    category: selectedCategory,
    location: selectedLocation,
    country: selectedCountry,
    ageOfListing: selectedAgeListing,
    sortBy: selectedSortBy,
    businessType: selectedBusinessType,
    ownerShipType: selectedOwnerShipType,
    askingPrice: selectedAskingPrice,
    searchText: searchQuery,
    businessRole: businessRole,
    subCategory: selectedSubCategory,
    state: selectedState,
    city: selectedCity,
    page: currentPage,
    limit: pageSize,
  });

  console.log(businessFilter);
  const business = businessFilter?.data || [];
  console.log(business)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const SidebarContent = () => (
    <div className="w-80 border-r border-gray-200 p-6">
      <Collapse
        defaultActiveKey={["1"]}
        expandIcon={({ isActive }) => (
          <DownOutlined rotate={isActive ? 180 : 0} />
        )}
      >
        <Panel header="Business Category" key="1">
          <Radio.Group
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setSelectedSubCategory(null);
            }}
          >
            {categorys?.data?.map((category) => (
              <div key={category.categoryName} className="mb-2">
                <Radio value={category.categoryName}>
                  {category.categoryName}
                </Radio>

                {selectedCategory === category.categoryName &&
                  category.subCategories?.length > 0 && (
                    <div className="ml-6 mt-2">
                      <Radio.Group
                        value={selectedSubCategory}
                        onChange={(e) => setSelectedSubCategory(e.target.value)}
                      >
                        {category.subCategories.map((sub) => (
                          <div key={sub.name} className="mb-1">
                            <Radio value={sub.name}>{sub.name}</Radio>
                          </div>
                        ))}
                      </Radio.Group>
                    </div>
                  )}
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
           <div style={{ maxHeight: "200px", overflowY: "auto" }}>
             <Radio.Group
              value={selectedCountry}
              onChange={(e) => handleCountryChange(e.target.value)}
            >
              {countries.map((country) => (
                <Radio key={country.isoCode} value={country.isoCode}>
                  <div className="flex items-center gap-2">
                    <img
                      src={`https://flagcdn.com/w20/${country.isoCode.toLowerCase()}.png`}
                      alt={country.name}
                      className="w-5 h-3 object-cover"
                    />
                    {country.name}
                  </div>
                </Radio>
              ))}
            </Radio.Group>
           </div>
          </Panel>
        </Collapse>
      </div>

      {/* State */}
      <div className="my-2">
        <Collapse
          expandIcon={({ isActive }) => (
            <DownOutlined rotate={isActive ? 180 : 0} />
          )}
        >
          <Panel header="State" key="2">
           <div style={{ maxHeight: "200px", overflowY: "auto" }}> <Radio.Group
  value={selectedState}
  onChange={(e) => handleStateChange(e.target.value)}
>
  {states.map((state) => (
    <Radio key={state.isoCode} value={state.name}>
      {state.name}
    </Radio>
  ))}
</Radio.Group></div>
          </Panel>
        </Collapse>
      </div>

      {/* City */}
      <div className="my-2">
        <Collapse
          expandIcon={({ isActive }) => (
            <DownOutlined rotate={isActive ? 180 : 0} />
          )}
        >
          <Panel header="City" key="3">
            <div style={{ maxHeight: "200px", overflowY: "auto" }}>
             <Radio.Group
  value={selectedCity}
  onChange={(e) => handleCityChange(e.target.value)}
>
  {cities.map((city) => (
    <Radio key={city.name} value={city.name}>
      {city.name}
    </Radio>
  ))}
</Radio.Group>
            </div>
          </Panel>
        </Collapse>
      </div>

      {/* Location */}
      {/* <div className="my-2">
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
      </div> */}

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
  );
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container m-auto">
      <div className="flex min-h-screen bg-white my-11">
        {/* Sidebar */}

        <div className="hidden lg:block">
          <SidebarContent></SidebarContent>
        </div>

        <div>
          <div className="block lg:hidden">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 border rounded-md  z-50 -mt-11 fixed ml-4 bg-white"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {isSidebarOpen && (
            <div className="fixed inset-0 z-50 flex">
              {/* Overlay */}
              <div
                className="fixed inset-0 bg-black bg-opacity-40"
                onClick={() => setIsSidebarOpen(false)}
              ></div>

              {/* Drawer */}
              <div className="relative bg-white w-90 h-full shadow-lg z-50 ">
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="absolute top-3 right-3 p-1  rounded-full bg-gray-200"
                >
                  <X className="h-5 w-5 " />
                </button>
                <div className="mt-11">
                  <SidebarContent />
                </div>
              </div>
            </div>
          )}
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
                <Pagination
                  current={currentPage}
                  pageSize={pageSize}
                  total={businessFilter?.meta?.total || 0}
                  onChange={handlePageChange}
                  showSizeChanger={false}
                />
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

          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6"
                : "flex flex-col gap-6"
            }
          >
            {business?.map((business) => (
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
                      ? "md:flex items-center gap-4" // list view flex layout
                      : "p-4"
                  }
                >
                  {viewMode === "list" && (
                    <img
                      alt={business.title}
                      src={`${imageUrl}/uploads/business-image/${business.image}`}
                      style={{
                        width: "400px",
                        height: "300px",
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
                        {business.subCategory}
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
