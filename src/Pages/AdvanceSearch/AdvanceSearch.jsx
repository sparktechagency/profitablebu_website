import { Button, Form, Select, Space } from "antd";
import { useNavigate } from "react-router-dom";
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

const country = ["United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "Franch",
  "Italy",
  "Spain",
  "United Arab Emirates",
  "India",];

  const location = [  "Dubai",
  "Sharjah",
  "Ajman",
  "Umm Al-Quwain",
  "Fujairah",
  "Ras Al Khaimah",];

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
  const [form] = Form.useForm();

  const navigate = useNavigate();

  const handleSearch = (values) => {
    console.log(values);
    const params = new URLSearchParams(values).toString();
    navigate(`/search?${params}`);
  };

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

      <Form
        form={form}
        onFinish={handleSearch}
        layout="vertical"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5"
      >
        <Form.Item label="Business Category" name="businessCategory">
          <Select placeholder="Select One" allowClear style={{ height: "50px" }}>
            {businessCategories.map((category) => (
              <Option key={category} value={category}>
                {category}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="Country" name="country">
          <Select placeholder="Select One" allowClear style={{ height: "50px" }}>
            {country.map((country) => (
              <Option key={country} value={country}>
                {country}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="Location" name="location">
          <Select placeholder="Select One" allowClear style={{ height: "50px" }}>
            {location.map((country) => (
              <Option key={country} value={country}>
                {country}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="Asking Price" name="askingPrice">
          <Select placeholder="Select One" allowClear style={{ height: "50px" }}>
            {askingPrice.map((priceRange) => (
              <Option key={priceRange} value={priceRange}>
                {priceRange}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="Business Type" name="businessType" className="col-span-2">
          <Select placeholder="Select One" allowClear style={{ height: "50px" }}>
            {businessType.map((type) => (
              <Option key={type} value={type}>
                {type}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="Ownership Type" name="ownerShipType">
          <Select placeholder="Select One" allowClear style={{ height: "50px" }}>
            {ownerShipType.map((type) => (
              <Option key={type} value={type}>
                {type}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="Sort By" name="sortBy">
          <Select placeholder="Select One" allowClear style={{ height: "50px" }}>
            {sortBy.map((option) => (
              <Option key={option} value={option}>
                {option}
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
