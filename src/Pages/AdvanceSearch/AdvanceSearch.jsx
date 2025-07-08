import { Button, Form, Select, Space } from "antd";
import { useNavigate } from "react-router-dom";
const { Option } = Select;

const businessCategories = [
  "Restaurant",
  "Retail",
  "Service",
  "Technology",
  "Healthcare",
];

const countries = ["United States", "United Kingdom", "India", "Spain", "UAE"];

const priceRanges = [
  "Less than $100,000",
  "$100,000 to $500,000",
  "$500,000 to $1,000,000",
  "$1,000,000 to $5,000,000",
  "More than $5,000,000",
];

const businessTypes = [
  "Sole Proprietorship",
  "Partnership",
  "Limited Liability Company (LLC)",
  "Corporation",
];

const ownershipTypes = ["Individual", "Partnership", "Family", "Institutional"];

const sortOptions = [
  "Oldest",
  "Newest",
  "Price: Low to High",
  "Price: High to Low",
  "Name: A to Z",
  "Name: Z to A",
];

export default function AdvanceSearch() {
  const [form] = Form.useForm();

  const navigate = useNavigate();

  const handleSearch = (values) => {
    console.log("Applied filters:", values);
    navigate("/search", { state: { filters: values } });
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
        <Form.Item label="Business Category">
          <Select
            placeholder="Select One"
            allowClear
            onChange={(value) =>
              form.setFieldsValue({ businessCategory: value })
            }
            style={{ height: "50px" }}
          >
            {businessCategories.map((category) => (
              <Option key={category} value={category}>
                {category}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="Country">
          <Select
            placeholder="Select One"
            allowClear
            onChange={(value) => form.setFieldsValue({ country: value })}
            style={{ height: "50px" }}
          >
            {countries.map((country) => (
              <Option key={country} value={country}>
                {country}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="Location">
          <Select
            placeholder="Select One"
            allowClear
            onChange={(value) => form.setFieldsValue({ location: value })}
            style={{ height: "50px" }}
          >
            {countries.map((country) => (
              <Option key={country} value={country}>
                {country}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="Asking Price">
          <Select
            placeholder="Select One"
            allowClear
            onChange={(value) => form.setFieldsValue({ askingPrice: value })}
            style={{ height: "50px" }}
          >
            {priceRanges.map((priceRange) => (
              <Option key={priceRange} value={priceRange}>
                {priceRange}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item className="col-span-2" label="Business Type">
          <Select
            placeholder="Select One"
            allowClear
            onChange={(value) => form.setFieldsValue({ businessType: value })}
            style={{ height: "50px" }}
          >
            {businessTypes.map((type) => (
              <Option key={type} value={type}>
                {type}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="Ownership Type">
          <Select
            placeholder="Select One"
            allowClear
            onChange={(value) => form.setFieldsValue({ ownershipType: value })}
            style={{ height: "50px" }}
          >
            {ownershipTypes.map((type) => (
              <Option key={type} value={type}>
                {type}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="Sort By">
          <Select
            placeholder="Select One"
            allowClear
            onChange={(value) => form.setFieldsValue({ sortBy: value })}
            style={{ height: "50px" }}
          >
            {sortOptions.map((option) => (
              <Option key={option} value={option}>
                {option}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item>
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
