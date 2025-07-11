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

const SchedualeCall = () => {
  const [form] = Form.useForm();

  // const navigate = useNavigate();

  const handleSearch = (values) => {
    console.log("Applied filters:", values);
    // navigate("/search", { state: { filters: values } });
  };
  return (
    <div className="relative max-w-7xl mx-auto px-5 pt-20 pb-10 rounded-lg shadow-sm">
      <div className="relative flex flex-col items-start gap-5 pl-5 mb-10">
        <div className="absolute top-0 left-0 w-2 h-full bg-[#22C55E] z-[1] rounded-r-full"></div>
        <div className="ml-5">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0091FF] mb-6 leading-tight">
            Schedule a call
          </h1>
          <p className="text-lg md:text-xl text-[#000000] leading-relaxed max-w-2xl">
            Let’s connect and discuss your goals.
          </p>
        </div>
      </div>

      <Form
        form={form}
        onFinish={handleSearch}
        layout="vertical"
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        <Form.Item
          label="Full Name"
          name="fullName"
          rules={[{ required: true, message: "Please enter your full name" }]}
        >
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full border border-gray-300 px-4 py-3 rounded-md"
          />
        </Form.Item>

        <Form.Item
          label="Email Address"
          name="email"
          rules={[{ required: true, message: "Please enter your email" }]}
        >
          <input
            type="email"
            placeholder="Enter your email (e.g., you@example.com)"
            className="w-full border border-gray-300 px-4 py-3 rounded-md"
          />
        </Form.Item>

        <Form.Item
          label="Preferred Date"
          name="preferredDate"
          rules={[{ required: true, message: "Please select a date" }]}
        >
          <input
            type="date"
            className="w-full border border-gray-300 px-4 py-3 rounded-md"
          />
        </Form.Item>

        <Form.Item
          label="Preferred Time"
          name="preferredTime"
          rules={[{ required: true, message: "Please select a time" }]}
        >
          <input
            type="time"
            className="w-full border border-gray-300 px-4 py-3 rounded-md"
          />
        </Form.Item>

        <Form.Item
          label="Time Zone"
          name="timeZone"
          className="col-span-2"
          rules={[{ required: true, message: "Please select your time zone" }]}
        >
          <Select style={{height:'50px'}} placeholder="Select your time zone (e.g., GMT+6 – Bangladesh Time)">
            <Option value="GMT+6">GMT+6 – Bangladesh Time</Option>
            <Option value="GMT+5.5">GMT+5.5 – India Standard Time</Option>
            <Option value="GMT+0">GMT+0 – UTC</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Meeting Topic"
          name="meetingTopic"
          className="col-span-2"
          rules={[{ required: true, message: "Please describe the purpose" }]}
        >
          <input
            type="text"
            placeholder="Briefly describe the purpose of the meeting"
            className="w-full border border-gray-300 px-4 py-3 rounded-md"
          />
        </Form.Item>

        <Form.Item
          label="Additional Notes (Optional)"
          name="notes"
          className="col-span-2"
        >
          <textarea
            rows={4}
            placeholder="Add any extra details or requests (optional)"
            className="w-full border border-gray-300 px-4 py-3 rounded-md"
          />
        </Form.Item>

        <Form.Item className="col-span-2">
          <Button
            htmlType="submit"
            className="bg-[#0091FF] text-white font-bold py-6 px-6 rounded-md"
          >
            Request A Call
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SchedualeCall;
