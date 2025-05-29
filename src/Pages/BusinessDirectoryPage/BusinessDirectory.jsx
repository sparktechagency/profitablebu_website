/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useMemo } from 'react';
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
} from 'antd';
import {
  SearchOutlined,
  AppstoreOutlined,
  UnorderedListOutlined,
  DownOutlined,
  FilterOutlined,
  CaretRightOutlined,
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
  const [activeFilters, setActiveFilters] = useState(['1']); // Default open panels

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
  };

  const handleCountryChange = (checkedValues) => {
    setSelectedCountries(checkedValues);
  };

  const handlePriceChange = (checkedValues) => {
    setSelectedPriceRanges(checkedValues);
  };

  const handleBusinessTypeChange = (checkedValues) => {
    setSelectedBusinessTypes(checkedValues);
  };

  const handleOwnershipChange = (checkedValues) => {
    setSelectedOwnership(checkedValues);
  };

  // Mobile filter menu
  const mobileFilterMenu = (
    <Menu className="w-64">
      <Menu.SubMenu key="category" title="Business Category">
        {categories.map((cat) => (
          <Menu.Item key={cat} onClick={() => setSelectedCategory(cat)}>
            {cat}
          </Menu.Item>
        ))}
      </Menu.SubMenu>
      <Menu.SubMenu key="country" title="Country">
        {countries.map((country) => (
          <Menu.Item key={country} onClick={() => setSelectedCountry(country)}>
            {country}
          </Menu.Item>
        ))}
      </Menu.SubMenu>
      <Menu.SubMenu key="businessType" title="Business Type">
        {businessTypes.map((type) => (
          <Menu.Item key={type} onClick={() => setSelectedBusinessType(type)}>
            {type}
          </Menu.Item>
        ))}
      </Menu.SubMenu>
      <Menu.SubMenu key="ownership" title="Ownership Type">
        {ownershipTypes.map((type) => (
          <Menu.Item key={type} onClick={() => setSelectedOwnershipType(type)}>
            {type}
          </Menu.Item>
        ))}
      </Menu.SubMenu>
      <Menu.SubMenu key="priceRange" title="Price Range">
        {priceRanges.map((range) => (
          <Menu.Item key={range.label} onClick={() => setSelectedPriceRange(range)}>
            {range.label}
          </Menu.Item>
        ))}
      </Menu.SubMenu>
      {sortOptions.map((option) => (
        <Menu.Item key={option.value} onClick={() => setSelectedSort(option.value)}>
          {option.label}
        </Menu.Item>
      ))}
    </Menu>
  );

  const BusinessCard = ({ business, viewMode }) => (
    <div
      className={`h-full rounded-md bg-white ${
        viewMode === 'list' ? 'flex' : ''
      } overflow-hidden shadow-md transition-shadow duration-300`}
      key={business.id}
    >
      <img
        alt={business.title}
        src={business.image}
        className={`${viewMode === 'list' ? 'w-1/3' : 'w-full'} object-cover`}
      />
      <div className="space-y-3 p-2">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {business.title}
        </h3>
        <p className="text-gray-600 text-sm">{business.location}</p>
        <div className="flex flex-wrap gap-1">
          <h1 className="text-[#0091FF]">{business.category}</h1> ||
          <h1 className="text-[#D97706]">{business.subcategory}</h1>
        </div>
        <div
          className={`${
            viewMode === 'list'
              ? 'w-2/3 '
              : 'w-full flex justify-between items-center gap-3'
          }`}
        >
          <span className="text-base ">Starting from ${business.price}</span>
          <button
            className={`bg-blue-500 hover:bg-blue-600 ${
              viewMode === 'list' ? 'mt-3' : ''
            } text-white px-4 py-2 rounded`}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header with Search */}
        <div className="mb-6">
          <div className="flex flex-col md:flex-row gap-4 w-full justify-between md:justify-end items-center">
            <div className="flex items-center w-full md:justify-end justify-between gap-4">
              <div className='flex items-center justify-center gap-2'>
                <span className="text-sm text-gray-600">Items Per Page:</span>
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

              <div className="flex border rounded">
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
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Desktop Sidebar Filters */}
          <div className="hidden lg:block w-64">
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

              <Panel header="Regions" key="2">
                <div className="text-xs text-gray-500 mb-2">
                  Select regions...
                </div>
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
                <div className="text-xs text-gray-500 mb-2">
                  Select location...
                </div>
              </Panel>

              <Panel header="Asking Price" key="5">
                <Checkbox.Group
                  value={selectedPriceRanges}
                  onChange={handlePriceChange}
                  className="flex flex-col space-y-2"
                >
                  {priceRanges.map((range) => (
                    <Checkbox
                      key={range.label}
                      value={range.label}
                      className="text-sm"
                    >
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
                  onChange={(e) => setSortBy(e.target.value)}
                  className="flex flex-col space-y-2"
                >
                  {sortOptions.map((option) => (
                    <Radio
                      key={option.value}
                      value={option.value}
                      className="text-sm"
                    >
                      {option.label}
                    </Radio>
                  ))}
                </Radio.Group>
              </Panel>

              <Panel header="Age of Listing" key="9">
                <div className="text-xs text-gray-500 mb-2">
                  Select age range...
                </div>
              </Panel>
            </Collapse>
          </div>

          {/* Mobile Filter Button */}
          <div className="lg:hidden mb-4">
            <Dropdown overlay={mobileFilterMenu} trigger={['click']}>
              <Button icon={<FilterOutlined />}>
                Filters <DownOutlined />
              </Button>
            </Dropdown>
          </div>

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

            {/* Results */}
            <div className="mb-4">
              <p className="text-gray-600">
                Showing {filteredBusinesses.length} results
              </p>
            </div>
            <Search
              placeholder="Search your perfect event"
              allowClear
              size="large"
              className="md:w-96 !mb-4"
              //   prefix={<SearchOutlined />}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {/* Business Cards */}
            <Row gutter={[16, 16]}>
              {filteredBusinesses.map((business) => (
                <Col
                  key={business.id}
                  xs={24}
                  sm={12}
                  md={viewMode === 'grid' ? 12 : 24}
                  lg={viewMode === 'grid' ? 12 : 24}
                  xl={viewMode === 'grid' ? 12 : 24}
                >
                  <BusinessCard viewMode={viewMode} business={business} />
                </Col>
              ))}
            </Row>

            {/* Pagination */}
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
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDirectory;
