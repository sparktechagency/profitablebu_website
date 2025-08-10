import { Form, Input, Select, Button, message } from "antd";
import { useForm } from "antd/es/form/Form";
import { useAddInterestMutation } from "../redux/api/businessApi";

const { TextArea } = Input;

export default function InterestForm({ businessId, businessRole }) {
  console.log(businessRole)
  const [addInterest] = useAddInterestMutation()
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?._id
 
  console.log(userId)
  const [form] = useForm();

  const onFinish = async(values) => {
const data = {
      userId: userId,
      name: values.name,
      email: values.email,
      countryCode: values.countryCode, 
      activity: values.activity, 
      serviceZone: values.serviceZone,
      message: values.message,
      businessRole: businessRole,
      businessId: businessId,
    };
console.log(data)
    try {
      const res = await addInterest(data).unwrap();
     
        message.success(res?.message);
        form.resetFields();
    
    } catch (error) {
      console.error(error);
      message.error(error?.data?.message || "Failed to schedule call.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white shadow-lg rounded-lg">
        <div className="p-4 border-b">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 text-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-blue-600">
              I am Interested
            </h2>
          </div>
        </div>

        <div className="p-6">
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            initialValues={{
              countryCode: "+971",
            }}
          >
            {/* Full Name */}
            <Form.Item
              label="Full Name"
              name="name"
              rules={[{ required: true, message: "Please enter your full name" }]}
            >
              <Input placeholder="Enter Full Name" />
            </Form.Item>

            {/* Country Code & Mobile */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Form.Item
                label="Country Code"
                name="countryCode"
                className="md:col-span-1"
              >
                <Select>
                  <Select.Option value="+971">🇦🇪 +971</Select.Option>
                  <Select.Option value="+1">🇺🇸 +1</Select.Option>
                  <Select.Option value="+44">🇬🇧 +44</Select.Option>
                  <Select.Option value="+91">🇮🇳 +91</Select.Option>
                  <Select.Option value="+880">🇧🇩 +880</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item
                label="Mobile"
                name="mobile"
                className="md:col-span-2"
                rules={[{ required: true, message: "Please enter your mobile number" }]}
              >
                <Input type="tel" placeholder="Enter mobile number" />
              </Form.Item>
            </div>

            {/* Sector and Activity */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                label="Sector"
                name="sector"
                rules={[{ required: true, message: "Please select a sector" }]}
              >
                <Select placeholder="Select One">
                  <Select.Option value="food-beverage">Food & Beverage</Select.Option>
                  <Select.Option value="retail">Retail</Select.Option>
                  <Select.Option value="technology">Technology</Select.Option>
                  <Select.Option value="healthcare">Healthcare</Select.Option>
                  <Select.Option value="education">Education</Select.Option>
                  <Select.Option value="real-estate">Real Estate</Select.Option>
                  <Select.Option value="automotive">Automotive</Select.Option>
                  <Select.Option value="other">Other</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item
                label="Activity"
                name="activity"
                rules={[{ required: true, message: "Please enter activity" }]}
              >
                <Input placeholder="Enter Activity" />
              </Form.Item>
            </div>

            {/* Email and Service Zone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please enter email" },
                  { type: "email", message: "Invalid email address" },
                ]}
              >
                <Input placeholder="Enter Email" />
              </Form.Item>

              <Form.Item
                label="Service Zone"
                name="serviceZone"
                rules={[{ required: true, message: "Please enter service zone" }]}
              >
                <Input placeholder="Enter Service Zone" />
              </Form.Item>
            </div>

            {/* Message */}
            <Form.Item
              label="Message"
              name="message"
              rules={[{ required: true, message: "Please enter your message" }]}
            >
              <TextArea
                placeholder="Enter Your Message Here"
                rows={5}
              />
            </Form.Item>

            {/* Submit Button */}
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="px-8 py-2 rounded-md font-medium"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
