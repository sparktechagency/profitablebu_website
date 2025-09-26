import React, { useEffect, useState } from "react";
import {
  Form,
  Input,
  Select,
  Checkbox,
  Button,
  Upload,
  message,
  Spin,
} from "antd";
import ReactPhoneInput from "react-phone-input-2";
import { UploadOutlined } from "@ant-design/icons";
import { User, DollarSign } from "lucide-react";
import { useAddBusinessValuationMutation } from "../redux/api/businessApi";
import { useNavigate } from "react-router-dom";
import { Country } from "country-state-city";

const { Option } = Select;

export default function BusinessValuationForm() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState([]);

  const [addBusinessValuation] = useAddBusinessValuationMutation();
  const navigate = useNavigate();
  const [contactNo, setContactNo] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const handleCountryChange = (value) => {
    setSelectedCountry(value);

    form.setFieldsValue({ state: undefined, city: undefined });
  };
  useEffect(() => {
    setCountries(Country.getAllCountries());
  }, []);
  const MAX_FILE_SIZE = 9 * 1024 * 1024;

  const beforeUpload = (file) => {
    const isPDF = file.type === "application/pdf";
    if (!isPDF) {
      message.error("Only PDF files are allowed.");
    }
    const isLt9M = file.size < MAX_FILE_SIZE;
    if (!isLt9M) {
      message.error("File must be smaller than 9MB!");
    }
    return isPDF && isLt9M;
  };

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const formData = new FormData();

      formData.append("ownerName", values.ownerName);
      formData.append("businessName", values.businessName);
      formData.append("email", values.email);
      // formData.append("countryCode", values.countryCode);
      formData.append("mobile", values.mobile);
      formData.append("region", values.region);
      formData.append("country", values.country);
      formData.append("location", values.location);
      formData.append("annualTurnover", values.annualTurnover);
      formData.append("currency", values.currency);
      formData.append("annualExpenses", values.annualExpenses);
      formData.append("purpose", values.purpose);
      formData.append("annualProfit", values.annualProfit);
      formData.append("yearOfEstablishment", values.yearOfEstablishment);
      formData.append("valueOfAsset", values.valueOfAsset);
      formData.append("valueOfStock", values.valueOfStock);
      formData.append("category", values.category);
      formData.append("message", values.message);

      const pdfFields = [
        "plReport",
        "equipmentList",
        "businessProfile",
        "businessImage",
      ];
      pdfFields.forEach((fieldName) => {
        const fileList = values[fieldName];
        if (fileList?.[0]) {
          formData.append("pdfs", fileList[0].originFileObj);
        }
      });

      const res = await addBusinessValuation(formData).unwrap();

      message.success(res.message || "Submitted successfully");
      setLoading(false);
      form.resetFields();
      navigate("/business-valuaion-submission");
    } catch (error) {
      console.error(error);
      setLoading(false);
      message.error(error?.data?.error || "Submission failed");
    }
  };

  return (
    <div className="container mx-auto px-5 pt-20 pb-10">
      <div className="relative flex flex-col items-start gap-5 pl-5 mb-6">
        <div className="absolute top-0 left-0 w-2 h-full bg-[#22C55E] z-[1] rounded-r-full"></div>

        <div className="ml-5">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0091FF] mb-4 leading-tight">
            Get Your Business Valuations
          </h1>
        </div>
      </div>
      <p className="text-gray-700 mb-10 max-w-4xl">
        Are you wondering what your business is really worth? Our professional
        business valuation service provides an accurate and reliable assessment
        of your company's true market value. This helps you set the right asking
        price, attract qualified buyers, and maximize your returns. Don't risk
        undervaluing your company. A certified business valuation ensures your
        business is positioned correctly in the market-saving time and improving
        your chances of a successful sale. Simply submit the form below, and our
        team will review your details and contact you with a custom quotation
        for your business valuation report.
      </p>
      <div className="flex items-center gap-2 mb-6">
        <User className="h-5 w-5 text-green-500" />
        <h3 className="text-lg font-semibold text-blue-600">
          Owner & Business Information
        </h3>
      </div>

      <Form
        layout="vertical"
        form={form}
        onFinish={onFinish}
        autoComplete="off"
      >
        <div className="md:grid grid-cols-2 gap-4">
          <Form.Item
            label="Owner Name"
            name="ownerName"
            rules={[{ required: true, message: "Please enter owner name" }]}
          >
            <Input className="py-3" placeholder="Enter Owner Name" />
          </Form.Item>

          <Form.Item
            label="Business Name"
            name="businessName"
            rules={[{ required: true, message: "Please enter business name" }]}
          >
            <Input className="py-3" placeholder="Enter Business Name" />
          </Form.Item>
        </div>

        <div className="md:grid grid-cols-2 gap-4">
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter email" },
              { type: "email", message: "Invalid email address" },
            ]}
          >
            <Input className="py-3" placeholder="Enter Your Email" />
          </Form.Item>

          <div className=" gap-4">
            <Form.Item
              label="Phone Number"
              name="mobile"
              required
              rules={[
                {
                  required: true,
                  message: "Please enter your phone number!",
                },
              ]}
            >
              <ReactPhoneInput
                country={"us"}
                value={contactNo}
                onChange={(value) => setContactNo(value)}
                inputStyle={{ width: "100%", height: "48px" }}
              />
            </Form.Item>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
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
              {countries?.map((country) => (
                <Select.Option
                  key={country?.isoCode}
                  value={country?.name}
                  label={country?.name}
                >
                  <div className="flex items-center gap-2">
                    <img
                      src={`https://flagcdn.com/w20/${country?.isoCode.toLowerCase()}.png`}
                      alt={country?.name}
                      className="w-5 h-3 object-cover"
                    />
                    {country?.name}
                  </div>
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Regions" name="region">
            <Input className="py-3" placeholder="Enter Regions" />
          </Form.Item>
        </div>

        <div className="md:grid grid-cols-2 gap-4"></div>

        <Form.Item label="Location" name="location">
          <Input style={{ height: "48px" }} placeholder="Enter Location" />
        </Form.Item>

        <div className="md:grid grid-cols-2 gap-4">
          <Form.Item
            label="Business Type"
            name="businessType"
            rules={[{ required: true, message: "Please enter Business Type" }]}
          >
            <Input className="py-3" placeholder="Enter Business Type" />
          </Form.Item>

          <Form.Item
            label="Business Category"
            name="category"
            rules={[
              { required: true, message: "Please enter Business Category" },
            ]}
          >
            <Input className="py-3" placeholder="Enter Business Category" />
          </Form.Item>
        </div>
        <div className="flex items-center gap-2 mb-6 mt-16">
          <DollarSign className="h-5 w-5 text-green-500" />
          <h3 className="text-lg font-semibold text-blue-600">
            Financial Details
          </h3>
        </div>
        <div className="md:grid grid-cols-2 gap-4">
          <Form.Item
            label="Annual Turnover"
            name="annualTurnover"
            rules={[
              { required: true, message: "Please enter Annual Turnover" },
            ]}
          >
            <Input
              style={{ height: "48px" }}
              placeholder="Enter Annual Turnover"
            />
          </Form.Item>

          <Form.Item
            label="Currency"
            name="currency"
            rules={[{ required: true, message: "Please enter Currency" }]}
          >
            <Input className="py-3" placeholder="Enter Currency" />
          </Form.Item>
        </div>

        <div className="md:grid grid-cols-2 gap-4">
          <Form.Item
            label="Year of Establishment"
            name="yearOfEstablishment"
            rules={[
              { required: true, message: "Please enter Year of Establishment" },
            ]}
          >
            <Input
              style={{ height: "48px" }}
              placeholder="Enter Year of Establishment"
            />
          </Form.Item>

          <Form.Item
            label="Annual Expenses"
            name="annualExpenses"
            rules={[
              { required: true, message: "Please enter Annual Expenses" },
            ]}
          >
            <Input
              style={{ height: "48px" }}
              placeholder="Enter Annual Expenses"
            />
          </Form.Item>
        </div>

        <Form.Item label="Select the Purpose" name="purpose">
          <Select style={{ height: "48px" }} placeholder="Select Purpose">
            <Option value="Selling My Business">Selling My Business</Option>
            <Option value="europBuying a Businesse">Buying a Business</Option>
            <Option value="Attracting Investors / Raising Capital">Attracting Investors / Raising Capital</Option>
            <Option value="Business Loan or Financing Requirement">Business Loan or Financing Requirement</Option>
            <Option value="Mergers & Acquisitions (M&A)">Mergers & Acquisitions (M&A)</Option>
            <Option value="Partnership Buy-In / Buy-Out">Partnership Buy-In / Buy-Out</Option>
            <Option value="Legal or Compliance Requirement">Legal or Compliance Requirement</Option>
            <Option value="Tax or Accounting Purposes">Tax or Accounting Purposes</Option>
            <Option value="Succession or Exit Planning">Succession or Exit Planning</Option>
            <Option value="General Business Valuation / Market Worth">General Business Valuation / Market Worth</Option>
          </Select>
        </Form.Item>

        <div className="flex items-center gap-2 mb-6 mt-16">
          <DollarSign className="h-5 w-5 text-green-500" />
          <h3 className="text-lg font-semibold text-blue-600">
            Valuation Input for Accuracy
          </h3>
        </div>

        <div className="md:grid grid-cols-2 gap-4">
          <Form.Item
            label="Annual Profit"
            name="annualProfit"
            rules={[{ required: true, message: "Please enter Annual Profit" }]}
          >
            <Input
              style={{ height: "48px" }}
              placeholder="Enter Annual Profit"
            />
          </Form.Item>
          <Form.Item
            label="Value of Assets"
            name="valueOfAsset"
            rules={[
              { required: true, message: "Please enter Value of Assets" },
            ]}
          >
            <Input
              style={{ height: "48px" }}
              placeholder="Enter Value of Assets"
            />
          </Form.Item>
        </div>
        <Form.Item
          label="Value of stock / Inventory"
          name="valueOfStock"
          rules={[
            { required: true, message: "Please Value of Stack / Inventory" },
          ]}
        >
          <Input
            style={{ height: "48px" }}
            placeholder="Enter Value of Stack / Inventory"
          />
        </Form.Item>
        <div className="flex items-center gap-2 mb-6 mt-16">
          <DollarSign className="h-5 w-5 text-green-500" />
          <h3 className="text-lg font-semibold text-blue-600">
            File Uploads (PDF Only - Max 9 MB Each)
          </h3>
        </div>
        {/* File Upload Example */}
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
          <Form.Item
            label="P&L Report"
            name="plReport"
            valuePropName="fileList"
            getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
          >
            <Upload
              style={{ width: "100%" }}
              beforeUpload={beforeUpload}
              maxCount={1}
              accept=".pdf"
              listType="text"
            >
              <Button
                style={{ width: "100%", height: "48px" }}
                icon={<UploadOutlined />}
              >
                Upload PDF
              </Button>
            </Upload>
          </Form.Item>

          <Form.Item
            label="Equipment List"
            name="equipmentList"
            valuePropName="fileList"
            getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
          >
            <Upload
              style={{ width: "100%" }}
              beforeUpload={beforeUpload}
              maxCount={1}
              accept=".pdf"
              listType="text"
            >
              <Button
                style={{ width: "100%", height: "48px" }}
                icon={<UploadOutlined />}
              >
                Upload PDF
              </Button>
            </Upload>
          </Form.Item>

          <Form.Item
            label="Business Profile"
            name="businessProfile"
            valuePropName="fileList"
            getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
          >
            <Upload
              style={{ width: "100%" }}
              beforeUpload={beforeUpload}
              maxCount={1}
              accept=".pdf"
              listType="text"
            >
              <Button
                style={{ width: "100%", height: "48px" }}
                icon={<UploadOutlined />}
              >
                Upload PDF
              </Button>
            </Upload>
          </Form.Item>

          <Form.Item
            label="Business Image (Combined PDF)"
            name="businessImage"
            valuePropName="fileList"
            getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
          >
            <Upload
              style={{ width: "100%" }}
              beforeUpload={beforeUpload}
              maxCount={1}
              accept=".pdf"
              listType="text"
            >
              <Button
                style={{ width: "100%", height: "48px" }}
                icon={<UploadOutlined />}
              >
                Upload PDF
              </Button>
            </Upload>
          </Form.Item>
        </div>

        <Form.Item
          label="Message"
          name="message"
          rules={[{ required: true, message: "Please message" }]}
        >
          <Input.TextArea placeholder="Enter message" />
        </Form.Item>

        <Form.Item name="consentEmail" valuePropName="checked">
          <Checkbox>I agree to be contacted via email by PBSF.COM</Checkbox>
        </Form.Item>

        <Form.Item
          name="consentTerms"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("You must accept the terms")),
            },
          ]}
        >
          <Checkbox>
            I accept the <a href="/terms-and-conditions">Terms</a> and{" "}
            <a href="/privacy-policy">Privacy Policy</a>
          </Checkbox>
        </Form.Item>

        <Form.Item>
          <button
            type="submit"
            className="w-full mt-8 py-2 bg-[#0091FF] text-white rounded "
            disabled={loading}
          >
            {loading ? <Spin size="small" /> : "Submit"}
          </button>
        </Form.Item>
      </Form>
    </div>
  );
}
