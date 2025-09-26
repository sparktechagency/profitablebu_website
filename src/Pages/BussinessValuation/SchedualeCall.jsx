import { Button, Form, message, Select, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { usePostScheduleMutation } from "../redux/api/metaApi";
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
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?._id;
  const [addSchedule] = usePostScheduleMutation();
  const [form] = Form.useForm();

  // const navigate = useNavigate();

  const handleSearch = async (values) => {
    const data = {
      userId,
      name: values?.fullName,
      email: values?.email,
      date: values?.preferredDate,
      time: values?.preferredTime,
      timeZone: values?.timeZone,
      topic: values?.meetingTopic,
      note: values?.notes || "",
    };

    try {
      const res = await addSchedule(data).unwrap();

      message.success(res?.message);
      form.resetFields();
    } catch (error) {
      console.error(error);
      message.error(error?.data?.message || "Failed to schedule call.");
    }
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
            placeholder="Enter your email"
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
          <Select
            style={{ height: "50px" }}
            placeholder="Select your time zone"
          >
            <Option value="UTC-12:00">GMT -12:00</Option>
            <Option value="UTC-11:00">GMT -11:00</Option>
            <Option value="UTC-10:00">GMT -10:00</Option>
            <Option value="UTC-09:30">GMT -09:30</Option>
            <Option value="UTC-09:00">GMT -09:00</Option>
            <Option value="UTC-08:00">GMT -08:00</Option>
            <Option value="UTC-07:00">GMT -07:00</Option>
            <Option value="UTC-06:00">GMT -06:00</Option>
            <Option value="UTC-05:00">GMT -05:00</Option>
            <Option value="UTC-04:30">GMT -04:30</Option>
            <Option value="UTC-04:00">GMT -04:00</Option>
            <Option value="UTC-03:30">GMT -03:30</Option>
            <Option value="UTC-03:00">GMT -03:00</Option>
            <Option value="UTC-02:00">GMT -02:00</Option>
            <Option value="UTC-01:00">GMT -01:00</Option>
            <Option value="UTC+00:00">GMT +00:00 (UTC)</Option>
            <Option value="UTC+01:00">GMT +01:00</Option>
            <Option value="UTC+02:00">GMT +02:00</Option>
            <Option value="UTC+03:00">GMT +03:00</Option>
            <Option value="UTC+03:30">GMT +03:30</Option>
            <Option value="UTC+04:00">GMT +04:00</Option>
            <Option value="UTC+04:30">GMT +04:30</Option>
            <Option value="UTC+05:00">GMT +05:00</Option>
            <Option value="UTC+05:30">GMT +05:30</Option>
            <Option value="UTC+05:45">GMT +05:45</Option>
            <Option value="UTC+06:00">
              GMT +06:00 (Bangladesh / Sri Lanka)
            </Option>
            <Option value="UTC+06:30">GMT +06:30</Option>
            <Option value="UTC+07:00">GMT +07:00</Option>
            <Option value="UTC+08:00">GMT +08:00</Option>
            <Option value="UTC+08:30">GMT +08:30</Option>
            <Option value="UTC+09:00">GMT +09:00</Option>
            <Option value="UTC+09:30">GMT +09:30</Option>
            <Option value="UTC+10:00">GMT +10:00</Option>
            <Option value="UTC+10:30">GMT +10:30</Option>
            <Option value="UTC+11:00">GMT +11:00</Option>
            <Option value="UTC+12:00">GMT +12:00</Option>
            <Option value="UTC+12:45">GMT +12:45</Option>
            <Option value="UTC+13:00">GMT +13:00</Option>
            <Option value="UTC+14:00">GMT +14:00</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Meeting Topic"
          name="meetingTopic"
          className="col-span-2"
          rules={[{ required: true, message: "Please enter the topic" }]}
        >
          <input
            type="text"
            placeholder="Briefly describe the purpose"
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
            placeholder="Add any extra details or requests"
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

// secondery flute cinema free market bythwaita actor
// A B C
// mountains host horse farm
