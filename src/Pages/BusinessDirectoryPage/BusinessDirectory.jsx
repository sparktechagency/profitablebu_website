/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useMemo, useEffect } from 'react';
import {
  Select,
  Input,
  Button,
  Card,
  Row,
  Col,
  Space,
  Tag,
  Dropdown,
  Menu,
  Pagination,
  Collapse,
  Checkbox,
  Radio,
  Drawer,
} from 'antd';
import {
  SearchOutlined,
  AppstoreOutlined,
  UnorderedListOutlined,
  DownOutlined,
  FilterOutlined,
  CaretRightOutlined,
  CloseOutlined,
} from '@ant-design/icons';

const { Option } = Select;
const { Search } = Input;
const { Panel } = Collapse;

const businessData = [
  {
    id: 1,
    title: 'Powering Better Financial Solutions',
    location: 'Los Angeles, CA',
    category: 'Financial Services',
    subcategory: 'Business Consulting',
    price: 100,
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop',
    businessType: 'Services',
    ownership: 'LLC',
    country: 'United States',
  },
  {
    id: 2,
    title: 'Powering Better Financial Solutions',
    location: 'Los Angeles, CA',
    category: 'Financial Services',
    subcategory: 'Business Consulting',
    price: 100,
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=250&fit=crop',
    businessType: 'Services',
    ownership: 'Corporation',
    country: 'United States',
  },
  {
    id: 3,
    title: 'Powering Better Financial Solutions',
    location: 'Los Angeles, CA',
    category: 'Financial Services',
    subcategory: 'Business Consulting',
    price: 100,
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop',
    businessType: 'Services',
    ownership: 'Partnership',
    country: 'United States',
  },
];

const BusinessDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [selectedBusinessTypes, setSelectedBusinessTypes] = useState([]);
  const [selectedOwnership, setSelectedOwnership] = useState([]);
  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState('grid');
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState(['1']);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Filter options
  const categories = [
    'Restaurant',
    'Retail',
    'E-commerce',
    'Franchise',
    'Services',
    'Manufacturing',
    'Health & Beauty',
    'Education',
    'Automotive',
    'Other',
  ];

  const countries = [
    'United States',
    'United Kingdom',
    'Canada',
    'Australia',
    'Germany',
    'France',
    'Italy',
    'Spain',
    'United Arab Emirates',
    'India',
  ];

  const priceRanges = [
    { label: 'Under $50K', value: [0, 50000] },
    { label: '$50K - $100K', value: [50000, 100000] },
    { label: '$100K - $250K', value: [100000, 250000] },
    { label: '$250K - $500K', value: [250000, 500000] },
    { label: '$500K - $1M', value: [500000, 1000000] },
    { label: 'Over $1M', value: [1000000, Infinity] },
  ];

  const businessTypes = [
    'Franchise',
    'Independent',
    'Startup',
    'Home-Based',
    'Online',
  ];

  const ownershipTypes = [
    'Sole Proprietorship',
    'Partnership',
    'Corporation',
    'LLC',
  ];

  const sortOptions = [
    { label: 'Newest First', value: 'newest' },
    { label: 'Price (Low to High)', value: 'priceLow' },
    { label: 'Most Viewed', value: 'viewed' },
  ];

  // Filter logic
  const filteredBusinesses = useMemo(() => {
    return businessData.filter((business) => {
      if (
        searchTerm &&
        !business.title.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return false;
      }
      if (
        selectedCategories.length > 0 &&
        !selectedCategories.includes(business.category)
      ) {
        return false;
      }
      if (
        selectedCountries.length > 0 &&
        !selectedCountries.includes(business.country)
      ) {
        return false;
      }
      if (
        selectedBusinessTypes.length > 0 &&
        !selectedBusinessTypes.includes(business.businessType)
      ) {
        return false;
      }
      if (
        selectedOwnership.length > 0 &&
        !selectedOwnership.includes(business.ownership)
      ) {
        return false;
      }
      return true;
    });
  }, [
    searchTerm,
    selectedCategories,
    selectedCountries,
    selectedBusinessTypes,
    selectedOwnership,
  ]);

  // Handle filter changes
  const handleCategoryChange = (checkedValues) => {
    setSelectedCategories(checkedValues);
    console.log('Selected Categories:', checkedValues); 
  };

  const handleCountryChange = (checkedValues) => {
    setSelectedCountries(checkedValues);
    console.log('Selected Countries:', checkedValues);
  };

  const handlePriceChange = (checkedValues) => {
    setSelectedPriceRanges(checkedValues);
    console.log('Selected Price Ranges:', checkedValues);
  };

  const handleBusinessTypeChange = (checkedValues) => {
    setSelectedBusinessTypes(checkedValues);
    console.log('Selected Business Types:', checkedValues);
  };

  const handleOwnershipChange = (checkedValues) => {
    setSelectedOwnership(checkedValues);
    console.log('Selected Ownership Types:', checkedValues);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    console.log('Sort By:', e.target.value);
  };

  const BusinessCard = ({ business, viewMode }) => (
    <div
      className={`h-full rounded-md bg-white ${
        viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
      } overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-lg`}
      key={business.id}
    >
      <img
        alt={business.title}
        src={business.image}
        className={`${
          viewMode === 'list' ? 'md:w-1/3 w-full h-48 md:h-auto' : 'w-full h-48'
        } object-cover`}
      />
      <div className={`p-4 ${viewMode === 'list' ? 'md:w-2/3' : ''}`}>
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {business.title}
        </h3>
        <p className="text-gray-600 text-sm mt-1">{business.location}</p>
        <div className="flex flex-wrap gap-1 mt-2">
          <span className="text-[#0091FF]">{business.category}</span>
          <span className="text-gray-400">|</span>
          <span className="text-[#D97706]">{business.subcategory}</span>
        </div>
        <div
          className={`mt-4 ${
            viewMode === 'list'
              ? 'flex flex-col md:flex-row md:items-center md:justify-between'
              : 'flex flex-col sm:flex-row sm:items-center sm:justify-between'
          }`}
        >
          <span className="text-base font-medium">
            Starting from ${business.price}
          </span>
          <button
            className={`bg-blue-500 hover:bg-blue-600 ${
              viewMode === 'list' ? 'mt-3 md:mt-0' : 'mt-3 sm:mt-0'
            } text-white px-4 py-2 rounded transition-colors`}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );

  const renderFilters = () => (
    <Collapse
      activeKey={activeFilters}
      onChange={setActiveFilters}
      expandIcon={({ isActive }) => (
        <CaretRightOutlined rotate={isActive ? 90 : 0} />
      )}
      className="bg-white"
      size="small"
    >
      <Panel header="Business Category" key="1">
        <Checkbox.Group
          value={selectedCategories}
          onChange={handleCategoryChange}
          className="flex flex-col space-y-2"
        >
          {categories.map((cat) => (
            <Checkbox key={cat} value={cat} className="text-sm">
              {cat}
            </Checkbox>
          ))}
        </Checkbox.Group>
      </Panel>

      <Panel header="Country" key="3">
        <Checkbox.Group
          value={selectedCountries}
          onChange={handleCountryChange}
          className="flex flex-col space-y-2"
        >
          {countries.map((country) => (
            <Checkbox
              key={country}
              value={country}
              className="text-sm flex items-center"
            >
              <span
                className={`inline-block w-4 h-3 mr-2 rounded-sm ${
                  country === 'United States'
                    ? 'bg-blue-500'
                    : country === 'United Kingdom'
                    ? 'bg-red-500'
                    : country === 'Canada'
                    ? 'bg-red-600'
                    : country === 'Australia'
                    ? 'bg-blue-600'
                    : country === 'Germany'
                    ? 'bg-black'
                    : country === 'France'
                    ? 'bg-blue-700'
                    : country === 'Italy'
                    ? 'bg-green-600'
                    : country === 'Spain'
                    ? 'bg-yellow-500'
                    : country === 'United Arab Emirates'
                    ? 'bg-green-500'
                    : 'bg-orange-500'
                }`}
              ></span>
              {country}
            </Checkbox>
          ))}
        </Checkbox.Group>
      </Panel>

      <Panel header="Location" key="4">
        <div className="text-xs text-gray-500 mb-2">Select location...</div>
      </Panel>

      <Panel header="Asking Price" key="5">
        <Checkbox.Group
          value={selectedPriceRanges}
          onChange={handlePriceChange}
          className="flex flex-col space-y-2"
        >
          {priceRanges.map((range) => (
            <Checkbox key={range.label} value={range.label} className="text-sm">
              {range.label}
            </Checkbox>
          ))}
        </Checkbox.Group>
      </Panel>

      <Panel header="Business Type" key="6">
        <Checkbox.Group
          value={selectedBusinessTypes}
          onChange={handleBusinessTypeChange}
          className="flex flex-col space-y-2"
        >
          {businessTypes.map((type) => (
            <Checkbox key={type} value={type} className="text-sm">
              {type}
            </Checkbox>
          ))}
        </Checkbox.Group>
      </Panel>

      <Panel header="Ownership Type" key="7">
        <Checkbox.Group
          value={selectedOwnership}
          onChange={handleOwnershipChange}
          className="flex flex-col space-y-2"
        >
          {ownershipTypes.map((type) => (
            <Checkbox key={type} value={type} className="text-sm">
              {type}
            </Checkbox>
          ))}
        </Checkbox.Group>
      </Panel>

      <Panel header="Sort By" key="8">
        <Radio.Group
          value={sortBy}
          onChange={handleSortChange}
          className="flex flex-col space-y-2"
        >
          {sortOptions.map((option) => (
            <Radio key={option.value} value={option.value} className="text-sm">
              {option.label}
            </Radio>
          ))}
        </Radio.Group>
      </Panel>

      <Panel header="Age of Listing" key="9">
        <div className="text-xs text-gray-500 mb-2">Select age range...</div>
      </Panel>
    </Collapse>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header with Search */}
        <div className="mb-6">
          <div className="flex flex-col md:flex-row gap-4 w-full justify-between items-center">
            <div className="w-full md:w-auto">
              <Search
                placeholder="Search businesses..."
                allowClear
                size="large"
                className="w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex items-center w-full md:w-auto justify-between md:justify-end gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600 hidden sm:inline">
                  Items:
                </span>
                <Select
                  value={itemsPerPage}
                  onChange={setItemsPerPage}
                  size="small"
                  className="w-20"
                >
                  <Option value={10}>10</Option>
                  <Option value={20}>20</Option>
                  <Option value={50}>50</Option>
                </Select>
              </div>

              <div className="border rounded md:flex hidden">
                <Button
                  type={viewMode === 'grid' ? 'primary' : 'default'}
                  icon={<AppstoreOutlined />}
                  size="small"
                  onClick={() => setViewMode('grid')}
                />
                <Button
                  type={viewMode === 'list' ? 'primary' : 'default'}
                  icon={<UnorderedListOutlined />}
                  size="small"
                  onClick={() => setViewMode('list')}
                />
              </div>

              <Button
                icon={<FilterOutlined />}
                onClick={() => setShowMobileFilters(true)}
                className="lg:hidden"
              >
                Filters
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Desktop Sidebar Filters */}
          {windowWidth >= 992 && (
            <div className="w-64 hidden lg:block">{renderFilters()}</div>
          )}

          {/* Mobile Filter Drawer */}
          <Drawer
            title={
              <div className="flex justify-between items-center">
                <span>Filters</span>
                <Button
                  type="text"
                  icon={<CloseOutlined />}
                  onClick={() => setShowMobileFilters(false)}
                />
              </div>
            }
            placement="left"
            width={300}
            onClose={() => setShowMobileFilters(false)}
            visible={showMobileFilters}
            className="lg:hidden"
            bodyStyle={{ padding: '16px 0' }}
          >
            {renderFilters()}
            <div className="p-4 border-t">
              <Button
                type="primary"
                block
                onClick={() => setShowMobileFilters(false)}
              >
                Apply Filters
              </Button>
            </div>
          </Drawer>

          {/* Main Content */}
          <div className="flex-1">
            {/* Active Filters */}
            {(selectedCategories.length > 0 ||
              selectedCountries.length > 0 ||
              selectedBusinessTypes.length > 0 ||
              selectedOwnership.length > 0) && (
              <div className="mb-4 p-3 bg-white rounded-lg border">
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-sm font-medium text-gray-600">
                    Active Filters:
                  </span>
                  {selectedCategories.map((cat) => (
                    <Tag
                      key={cat}
                      closable
                      onClose={() =>
                        setSelectedCategories((prev) =>
                          prev.filter((c) => c !== cat)
                        )
                      }
                    >
                      Category: {cat}
                    </Tag>
                  ))}
                  {selectedCountries.map((country) => (
                    <Tag
                      key={country}
                      closable
                      onClose={() =>
                        setSelectedCountries((prev) =>
                          prev.filter((c) => c !== country)
                        )
                      }
                    >
                      Country: {country}
                    </Tag>
                  ))}
                  {selectedBusinessTypes.map((type) => (
                    <Tag
                      key={type}
                      closable
                      onClose={() =>
                        setSelectedBusinessTypes((prev) =>
                          prev.filter((t) => t !== type)
                        )
                      }
                    >
                      Type: {type}
                    </Tag>
                  ))}
                  {selectedOwnership.map((ownership) => (
                    <Tag
                      key={ownership}
                      closable
                      onClose={() =>
                        setSelectedOwnership((prev) =>
                          prev.filter((o) => o !== ownership)
                        )
                      }
                    >
                      Ownership: {ownership}
                    </Tag>
                  ))}
                </div>
              </div>
            )}

            {/* Results Count */}
            <div className="mb-4">
              <p className="text-gray-600">
                Showing {filteredBusinesses.length} results
              </p>
            </div>

            {/* Business Cards */}
            {filteredBusinesses.length > 0 ? (
              <Row gutter={[16, 16]}>
                {filteredBusinesses.map((business) => (
                  <Col
                    key={business.id}
                    xs={24}
                    sm={viewMode === 'grid' ? 24 : 24}
                    md={viewMode === 'grid' ? 12 : 24}
                    lg={viewMode === 'grid' ? 12 : 24}
                    xl={viewMode === 'grid' ? 8 : 24}
                  >
                    <BusinessCard viewMode={viewMode} business={business} />
                  </Col>
                ))}
              </Row>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No businesses found matching your criteria
                </p>
                <Button
                  type="link"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategories([]);
                    setSelectedCountries([]);
                    setSelectedBusinessTypes([]);
                    setSelectedOwnership([]);
                  }}
                >
                  Clear all filters
                </Button>
              </div>
            )}

            {/* Pagination */}
            {filteredBusinesses.length > 0 && (
              <div className="mt-8 flex justify-center">
                <Pagination
                  current={currentPage}
                  total={filteredBusinesses.length}
                  pageSize={itemsPerPage}
                  onChange={setCurrentPage}
                  showSizeChanger={false}
                  showQuickJumper
                  showTotal={(total, range) =>
                    `${range[0]}-${range[1]} of ${total} items`
                  }
                  responsive
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDirectory;
