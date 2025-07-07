/* eslint-disable no-unused-vars */
import React, { useState, useMemo, useEffect } from 'react';
import {
  Select,
  Input,
  Button,
  Row,
  Col,
  Tag,
  Pagination,
  Collapse,
  Checkbox,
  Radio,
  Drawer,
  Empty,
} from 'antd';
import {
  AppstoreOutlined,
  UnorderedListOutlined,
  FilterOutlined,
  CaretRightOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import {
  ageOfListingOptions,
  businessData,
  businessTypes,
  categories,
  countries,
  location,
  ownershipTypes,
  priceRanges,
  sortOptions,
} from '../../dummy-data/DummyData';
import uk from '../../assets/country-icons/uk.png';
import us from '../../assets/country-icons/us.png';
import cn from '../../assets/country-icons/cn.png';
import gr from '../../assets/country-icons/gr.png';
import fr from '../../assets/country-icons/fr.png';
import italy from '../../assets/country-icons/italy.png';
import spain from '../../assets/country-icons/spain.png';
import aus from '../../assets/country-icons/australia.png';
import uae from '../../assets/country-icons/uae.png';
import ind from '../../assets/country-icons/india.png';
import { Link, useSearchParams } from 'react-router-dom';
const { Option } = Select;
const { Search } = Input;
const { Panel } = Collapse;

const BusinessDirectory = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');
  const [searchTerm, setSearchTerm] = useState(searchQuery || '');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [selectedBusinessTypes, setSelectedBusinessTypes] = useState([]);
  const [selectedOwnership, setSelectedOwnership] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedAgeOfListing, setSelectedAgeOfListing] = useState([]);
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

  // Update URL search params when filters change
  useEffect(() => {
    const params = {};
    if (searchTerm) params.query = searchTerm;
    if (selectedCategories.length > 0)
      params.categories = selectedCategories.join(',');
    if (selectedCountries.length > 0)
      params.countries = selectedCountries.join(',');
    if (selectedLocations.length > 0)
      params.locations = selectedLocations.join(',');
    if (selectedPriceRanges.length > 0)
      params.prices = selectedPriceRanges.join(',');
    if (selectedBusinessTypes.length > 0)
      params.businessTypes = selectedBusinessTypes.join(',');
    if (selectedOwnership.length > 0)
      params.ownership = selectedOwnership.join(',');
    if (selectedAgeOfListing.length > 0)
      params.age = selectedAgeOfListing.join(',');

    setSearchParams(params);
  }, [
    searchTerm,
    selectedCategories,
    selectedCountries,
    selectedLocations,
    selectedPriceRanges,
    selectedBusinessTypes,
    selectedOwnership,
    selectedAgeOfListing,
    setSearchParams,
  ]);

  // Initialize filters from URL on component mount
  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);
    if (params.query) setSearchTerm(params.query);
    if (params.categories) setSelectedCategories(params.categories.split(','));
    if (params.countries) setSelectedCountries(params.countries.split(','));
    if (params.locations) setSelectedLocations(params.locations.split(','));
    if (params.prices) setSelectedPriceRanges(params.prices.split(','));
    if (params.businessTypes)
      setSelectedBusinessTypes(params.businessTypes.split(','));
    if (params.ownership) setSelectedOwnership(params.ownership.split(','));
    if (params.age) setSelectedAgeOfListing(params.age.split(','));
  }, [searchParams]);

  // Filter and sort logic
  const filteredBusinesses = useMemo(() => {
    let results = [...businessData];

    // Apply filters
    if (searchTerm) {
      results = results.filter(
        (business) =>
          business.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          business.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategories.length > 0) {
      results = results.filter((business) =>
        selectedCategories.includes(business.category)
      );
    }

    if (selectedCountries.length > 0) {
      results = results.filter((business) =>
        selectedCountries.includes(business.country)
      );
    }

    if (selectedLocations.length > 0) {
      results = results.filter((business) =>
        selectedLocations.some((loc) =>
          business.location.toLowerCase().includes(loc.toLowerCase())
        )
      );
    }

    if (selectedPriceRanges.length > 0) {
      results = results.filter((business) => {
        const price = business.price;
        return selectedPriceRanges.some((range) => {
          const rangeObj = priceRanges.find((r) => r.label === range);
          if (!rangeObj) return false;
          return price >= rangeObj.value[0] && price <= rangeObj.value[1];
        });
      });
    }

    if (selectedBusinessTypes.length > 0) {
      results = results.filter((business) =>
        selectedBusinessTypes.includes(business.businessType)
      );
    }

    if (selectedOwnership.length > 0) {
      results = results.filter((business) =>
        selectedOwnership.includes(business.ownership)
      );
    }

    if (selectedAgeOfListing.length > 0) {
      const now = new Date();
      results = results.filter((business) => {
        const createdAt = new Date(business.createdAt);
        const ageInDays = Math.floor((now - createdAt) / (1000 * 60 * 60 * 24));

        return selectedAgeOfListing.some((age) => {
          switch (age) {
            case 'last3Days':
              return ageInDays <= 3;
            case 'last14Days':
              return ageInDays <= 14;
            case 'lastMonth':
              return ageInDays <= 30;
            case 'last3Months':
              return ageInDays <= 90;
            default:
              return true;
          }
        });
      });
    }

    // Apply sorting
    switch (sortBy) {
      case 'newest':
        results.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      case 'priceLow':
        results.sort((a, b) => a.price - b.price);
        break;
      case 'priceHigh':
        results.sort((a, b) => b.price - a.price);
        break;
      case 'viewed':
        // Assuming there's a views property on businesses
        results.sort((a, b) => (b.views || 0) - (a.views || 0));
        break;
      default:
        break;
    }

    return results;
  }, [
    businessData,
    searchTerm,
    selectedCategories,
    selectedCountries,
    selectedLocations,
    selectedPriceRanges,
    selectedBusinessTypes,
    selectedOwnership,
    selectedAgeOfListing,
    sortBy,
  ]);

  // Pagination logic
  const paginatedBusinesses = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredBusinesses.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredBusinesses, currentPage, itemsPerPage]);

  // Handle filter changes
  const handleCategoryChange = (checkedValues) => {
    setSelectedCategories(checkedValues);
  };

  const handleCountryChange = (checkedValues) => {
    setSelectedCountries(checkedValues);
  };

  const handleLocationChange = (checkedValues) => {
    setSelectedLocations(checkedValues);
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

  const handleAgeOfListingChange = (checkedValues) => {
    setSelectedAgeOfListing(checkedValues);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const clearAllFilters = () => {
    setSearchTerm('');
    setSelectedCategories([]);
    setSelectedCountries([]);
    setSelectedLocations([]);
    setSelectedPriceRanges([]);
    setSelectedBusinessTypes([]);
    setSelectedOwnership([]);
    setSelectedAgeOfListing([]);
    setSortBy('newest');
    setCurrentPage(1);
    setSearchParams({});
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
            Starting from ${business.price.toLocaleString()}
          </span>
          <Link to={`/business-details/${business.id}`}>
            <button
              className={`bg-blue-500 hover:bg-blue-600 ${
                viewMode === 'list' ? 'mt-3 md:mt-0' : 'mt-3 sm:mt-0'
              } text-white px-4 py-2 rounded transition-colors`}
            >
              View Details
            </button>
          </Link>
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
              className="text-sm !flex items-center"
            >
              <img
                className="inline-block h-4 w-6 object-cover mr-2"
                src={
                  country === 'United States'
                    ? us
                    : country === 'United Kingdom'
                    ? uk
                    : country === 'Canada'
                    ? cn
                    : country === 'Australia'
                    ? aus
                    : country === 'Germany'
                    ? gr
                    : country === 'France'
                    ? fr
                    : country === 'Italy'
                    ? italy
                    : country === 'Spain'
                    ? spain
                    : country === 'United Arab Emirates'
                    ? uae
                    : ind
                }
                alt={country}
              />
              {country}
            </Checkbox>
          ))}
        </Checkbox.Group>
      </Panel>

      <Panel header="Location" key="4">
        <Checkbox.Group
          value={selectedLocations}
          onChange={handleLocationChange}
          className="flex flex-col space-y-2"
        >
          {location.map((loc) => (
            <Checkbox key={loc} value={loc} className="text-sm">
              {loc}
            </Checkbox>
          ))}
        </Checkbox.Group>
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

      <Panel header="Age of Listing" key="9">
        <Checkbox.Group
          value={selectedAgeOfListing}
          onChange={handleAgeOfListingChange}
          className="flex flex-col space-y-2"
        >
          {ageOfListingOptions.map((type) => (
            <Checkbox key={type.value} value={type.value} className="text-sm">
              {type.label}
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
    </Collapse>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6">
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
                onSearch={(value) => setSearchTerm(value)}
              />
            </div>

            <div className="flex items-center w-full md:w-auto justify-between md:justify-end gap-4">
              <div className="flex items-center p-2 rounded border-2 gap-2">
                <span className="text-sm text-gray-600 hidden sm:inline">
                  Items Per Page:
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
          <div className="w-64 hidden h-full overflow-y-scroll lg:block">
            {renderFilters()}
          </div>

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
            {(searchTerm ||
              selectedCategories.length > 0 ||
              selectedCountries.length > 0 ||
              selectedLocations.length > 0 ||
              selectedPriceRanges.length > 0 ||
              selectedBusinessTypes.length > 0 ||
              selectedOwnership.length > 0 ||
              selectedAgeOfListing.length > 0) && (
              <div className="mb-4 p-3 bg-white rounded-lg border">
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-sm font-medium text-gray-600">
                    Active Filters:
                  </span>
                  {searchTerm && (
                    <Tag closable onClose={() => setSearchTerm('')}>
                      Search: {searchTerm}
                    </Tag>
                  )}
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
                  {selectedLocations.map((loc) => (
                    <Tag
                      key={loc}
                      closable
                      onClose={() =>
                        setSelectedLocations((prev) =>
                          prev.filter((l) => l !== loc)
                        )
                      }
                    >
                      Location: {loc}
                    </Tag>
                  ))}
                  {selectedPriceRanges.map((range) => (
                    <Tag
                      key={range}
                      closable
                      onClose={() =>
                        setSelectedPriceRanges((prev) =>
                          prev.filter((r) => r !== range)
                        )
                      }
                    >
                      Price: {range}
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
                  {selectedAgeOfListing.map((age) => (
                    <Tag
                      key={age}
                      closable
                      onClose={() =>
                        setSelectedAgeOfListing((prev) =>
                          prev.filter((a) => a !== age)
                        )
                      }
                    >
                      Age:{' '}
                      {ageOfListingOptions.find((a) => a.value === age)?.label}
                    </Tag>
                  ))}
                  <Button
                    type="link"
                    size="small"
                    onClick={clearAllFilters}
                    className="ml-2"
                  >
                    Clear all
                  </Button>
                </div>
              </div>
            )}

            {/* Results Count */}
            <div className="mb-4">
              <p className="text-gray-600">
                Showing {filteredBusinesses.length} results
                {paginatedBusinesses.length < filteredBusinesses.length && (
                  <span>
                    {' '}
                    (displaying {paginatedBusinesses.length} on this page)
                  </span>
                )}
              </p>
            </div>

            {/* Business Cards */}
            {paginatedBusinesses.length > 0 ? (
              <Row gutter={[16, 16]}>
                {paginatedBusinesses.map((business) => (
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
                <Empty description="No businesses found matching your criteria" />
                <Button type="link" onClick={clearAllFilters}>
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
                  onChange={(page) => setCurrentPage(page)}
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
