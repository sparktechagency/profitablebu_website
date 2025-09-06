import { Button, Form, Select, Space } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetCategtoryQuery } from "../redux/api/businessApi";
import { City, Country, State } from "country-state-city";
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

export default function AdvanceSearch() {
  const { data: categorie, isLoading, isError } = useGetCategtoryQuery();
  const [form] = Form.useForm();
  const [subCategories, setSubCategories] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();
  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
    const category = categorie.data.find((cat) => cat.categoryName === value);
    setSubCategories(category?.subCategories || []);
    form.setFieldsValue({ subCategory: null });
  };
  const handleSearch = (values) => {
    console.log(values);
    const params = new URLSearchParams(values).toString();
    navigate(`/search?${params}`);
  };
  useEffect(() => {
    setCountries(Country.getAllCountries());
  }, []);

  const handleCountryChange = (value) => {
    setSelectedCountry(value);
    setStates(State.getStatesOfCountry(value));
    setCities([]); // reset cities
    form.setFieldsValue({ state: undefined, city: undefined });
  };

  const handleStateChange = (value) => {
    const selectedStateObj = states.find((s) => s.name === value);
    setSelectedState(selectedStateObj?.name);
    setCities(
      City.getCitiesOfState(selectedCountry, selectedStateObj?.isoCode)
    );
    form.setFieldsValue({ city: undefined });
  };
  useEffect(() => {
    if (categorie?.data?.length) {
      const defaultCategory = categorie.data[0];
      setSelectedCategory(defaultCategory.categoryName);
      setSubCategories(defaultCategory.subCategories || []);
      form.setFieldsValue({ category: defaultCategory.categoryName });
    }
  }, [categorie]);

  return (
    <div className="relative max-w-7xl mx-auto px-5 pt-20 pb-10 rounded-lg shadow-sm">
      <div className="relative flex flex-col items-start gap-5 pl-5 mb-10">
        <div className="absolute top-0 left-0 w-2 h-full bg-[#22C55E] z-[1] rounded-r-full"></div>

        <div className="ml-5">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0091FF] mb-6 leading-tight">
            Advanced Search
          </h1>
          <p className="text-lg md:text-xl text-[#000000] leading-relaxed max-w-2xl">
            Find the perfect business opportunity by applying detailed filters
            to narrow down your search.
          </p>
        </div>
      </div>

      <Form form={form} onFinish={handleSearch} layout="vertical" className="">
        <div className="">
          <Form.Item
            label="Business Category"
            name="category"
            rules={[
              { required: true, message: "Please select Business Category!" },
            ]}
          >
            <Select
              style={{ height: "48px" }}
              placeholder="Select Category"
              onChange={handleCategoryChange}
              value={selectedCategory}
            >
              {categorie?.data?.map((cat) => (
                <Option key={cat._id} value={cat.categoryName}>
                  {cat.categoryName}
                </Option>
              ))}
            </Select>
          </Form.Item>

          {subCategories.length > 0 && (
            <Form.Item label="Sub Category" name="subCategory">
              <Select
                style={{ height: "48px" }}
                placeholder="Select Sub Category"
              >
                {subCategories.map((sub, i) => (
                  <Option key={i} value={sub.name}>
                    {sub.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          )}
        </div>

        <div className="grid grid-cols-3 gap-4">
          {/* Country */}
          <Form.Item
            label="Select Your Country"
            name="country"
            rules={[{ required: true, message: "Please select your country!" }]}
          >
            <Select
              placeholder="Select your country"
              style={{ height: "48px" }}
              showSearch
              allowClear
              onChange={handleCountryChange}
              optionLabelProp="label"
            >
              {countries.map((country) => (
                <Select.Option
                  key={country.isoCode}
                  value={country.isoCode}
                  label={country.name}
                >
                  <div className="flex items-center gap-2">
                    <img
                      src={`https://flagcdn.com/w20/${country.isoCode.toLowerCase()}.png`}
                      alt={country.name}
                      className="w-5 h-3 object-cover"
                    />
                    {country.name}
                  </div>
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          {/* State */}
          <Form.Item label="Select State" name="state">
            <Select
              placeholder="Select your state"
              style={{ height: "48px" }}
              showSearch
              allowClear
              onChange={handleStateChange}
              disabled={!selectedCountry}
            >
              {states.map((state) => (
                <Select.Option key={state.isoCode} value={state.name}>
                  {state.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          {/* City */}
          <Form.Item label="Select City" name="city">
            <Select
              placeholder="Select your city"
              style={{ height: "48px" }}
              showSearch
              allowClear
              disabled={!selectedState}
            >
              {cities.map((city) => (
                <Select.Option key={city.name} value={city.name}>
                  {city.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </div>

        {/* <Form.Item label="Location" name="location">
          <Select
            placeholder="Select One"
            allowClear
            style={{ height: "50px" }}
          >
            {location.map((country) => (
              <Option key={country} value={country}>
                {country}
              </Option>
            ))}
          </Select>
        </Form.Item> */}

        <Form.Item label="Asking Price" name="askingPrice">
          <Select
            placeholder="Select One"
            allowClear
            style={{ height: "50px" }}
          >
            {askingPrice.map((priceRange) => (
              <Option key={priceRange} value={priceRange}>
                {priceRange}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Business Type"
          name="businessType"
          className="col-span-2"
        >
          <Select
            placeholder="Select One"
            allowClear
            style={{ height: "50px" }}
          >
            {businessType.map((type) => (
              <Option key={type} value={type}>
                {type}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="Ownership Type" name="ownerShipType">
          <Select
            placeholder="Select One"
            allowClear
            style={{ height: "50px" }}
          >
            {ownerShipType.map((type) => (
              <Option key={type} value={type}>
                {type}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item className="col-span-2">
          <Space>
            <Button
              className="bg-[#0091FF] text-white font-bold py-4 px-6 "
              htmlType="submit"
            >
              Apply This Filter
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
}
