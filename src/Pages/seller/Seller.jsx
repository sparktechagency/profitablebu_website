import React, { useEffect, useState } from "react";
import {
  Card,
  Input,
  Button,
  Upload,
  Form,
  Typography,
  Divider,
  message,
  Spin,
} from "antd";
import sign from "../../assets/Home/sign.png";
import { UploadOutlined } from "@ant-design/icons";
import { div } from "framer-motion/client";
import Logo from "../../assets/Home/logo2.png";
import { useAddNdaMutation } from "../redux/api/businessApi";
import Investor from "./Investor";
import Idealister from "./Idealister";
import { useGetProfileQuery } from "../redux/api/userApi";
import Franchise from "./Franchise";
import Assest from "./Assest";
import Broker from "./Broker";
import Sell from "./Sell";
import Buyer from "./Buyer";

const { Title, Paragraph, Text } = Typography;



const Seller = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // update every second
    return () => clearInterval(timer);
  }, []);

  const formattedTime = currentTime.toLocaleString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const [form] = Form.useForm();
  const MAX_FILE_SIZE = 9 * 1024 * 1024; // 9MB
  const [loading, setLoading] = useState(false);
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
  const [addNda] = useAddNdaMutation();
  const onFinish = async (values) => {
    console.log(values);
    setLoading(true);
    try {
      const formData = new FormData();

      Object.entries(values).forEach(([key, value]) => {
        if (!Array.isArray(value)) {
          formData.append(key, value);
        }
      });

      const pdfFields = [
        "passportNationalIDNumber",
        "uploadTradeLicense",
        "signature",
      ];

      pdfFields.forEach((fieldName) => {
        const fileList = values[fieldName];
        if (fileList?.[0]) {
          formData.append("nda-file", fileList[0].originFileObj);
        }
      });

      const res = await addNda(formData).unwrap();
      console.log(res);
      setLoading(false);
      message.success(res.message);
      form.resetFields();
    } catch (error) {
      console.error(error);
      setLoading(false);
      message.error(error?.data?.error || "Submission failed");
    }
  };

  const { data: profileData, isLoading: profileLoading } = useGetProfileQuery();
  console.log(profileData);
  const role = profileData?.data?.role;

  return (
    <div className="pt-11 lg:pt-0">
      <div className="min-h-screen  py-10 px-4 ">
        <Card className="container m-auto lg:p-10  shadow-xl">
          {role === "Investor" && <Investor />}
          {role === "Business Idea Lister" && <Idealister></Idealister>}
          {role === "Francise Seller" && <Franchise></Franchise>}
          {role === "Asset Seller" && <Assest></Assest>}
          {role === "Broker" && <Broker></Broker>}
          {role === "Seller" && <Sell></Sell>}
          {role === "Buyer" && <Buyer></Buyer>}

          <Form form={form} layout="vertical" onFinish={onFinish}>
            <div className="md:grid grid-cols-2 gap-8">
              <div>
                <Title level={4}>First Party (Seller)</Title>

                <Form.Item
                  label="Seller Full Name"
                  name="name"
                  rules={[
                    { required: true, message: "Please enter your full name" },
                  ]}
                >
                  <Input size="large" placeholder="Enter full name" />
                </Form.Item>

                <Form.Item
                  label="Email Address"
                  name="email"
                  rules={[
                    { required: true, message: "Please enter your email" },
                  ]}
                >
                  <Input size="large" placeholder="Enter email address" />
                </Form.Item>

                <Form.Item
                  label="Phone Number"
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your phone number",
                    },
                  ]}
                >
                  <Input size="large" placeholder="Enter phone number" />
                </Form.Item>

                <Form.Item
                  label="Passport/National ID Number"
                  name="nidPassportNumber"
                  rules={[
                    { required: true, message: "Please enter ID number" },
                  ]}
                >
                  <Input size="large" placeholder="Enter ID number" />
                </Form.Item>

                <div className="grid grid-cols-3 gap-4">
                  <Form.Item
                    label="Passport/National ID Number"
                    name="passportNationalIDNumber"
                    valuePropName="fileList"
                    getValueFromEvent={(e) =>
                      Array.isArray(e) ? e : e?.fileList
                    }
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
                    label="Upload Trade License"
                    name="uploadTradeLicense"
                    valuePropName="fileList"
                    getValueFromEvent={(e) =>
                      Array.isArray(e) ? e : e?.fileList
                    }
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
                    label="Signature"
                    name="signature"
                    valuePropName="fileList"
                    getValueFromEvent={(e) =>
                      Array.isArray(e) ? e : e?.fileList
                    }
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

                <Form.Item>
                  <button
                    type="submit"
                    className="w-full mt-8 py-2 bg-[#0091FF] text-white rounded hover:bg-gray-800 focus:ring-2 focus:ring-gray-500"
                    disabled={loading}
                  >
                    {loading ? <Spin size="small" /> : "Submit"}
                  </button>
                </Form.Item>
              </div>

              <div>
                <Title level={4}>
                  Second Party (ProfitableBusinessesForSale.com)
                </Title>
                <Paragraph className="mb-1">
                  <strong>Full Name:</strong> Global IPQ LLC
                  (ProfitableBusinessesForSale.com)
                </Paragraph>
                <Paragraph className="mb-1">
                  <strong>Email:</strong> info@ProfitableBusinessesForSale.com
                </Paragraph>
                <Paragraph className="mb-4">
                  <strong>Signature:</strong>
                </Paragraph>
                <img src={sign} alt="Signature" className="w-32 mb-2" />
                <Text type="secondary">{formattedTime}</Text>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center gap-3">
                    <img src={Logo} alt="Logo" className="w-[50px]" />
                    <div>
                      <h1 className="text-2xl font-bold text-[#F59E0B] ">
                        P B F S
                      </h1>
                      <p className="text-[#F59E0B]">From Listings to Legacy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default Seller;
