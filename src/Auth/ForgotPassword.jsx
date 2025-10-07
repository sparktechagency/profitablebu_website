import React, { useEffect, useState } from "react";
import { Button, Card, Col, Form, Input, Row, Select, Spin } from "antd";
import loginImg from "./login.png";
import { Typography, message } from "antd";
import { useNavigate } from "react-router-dom";
import { useForgotPasswordMutation } from "../Pages/redux/api/userApi";
const { Title, Text } = Typography;
function ForgotPassword() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [loading, setLoading] = useState(false);
  const [fogetPass] = useForgotPasswordMutation();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    if (!values.email) {
      message.destroy();
      message.error("Please enter email");
      return;
    }
    const { email } = values;
    const data = {
      email: email,
      role: values.role,
    };

    console.log(data)
  setLoading(true);
    try {
      const res = await fogetPass(data).unwrap();

      if (res?.success) {
        message.success(res?.message);
          setLoading(false);
        localStorage.setItem("email", values?.email);
          localStorage.setItem("role", values?.role);
        navigate("/auth/verification");
      }
    } catch (error) {
        setLoading(false);
      message.error(error?.data?.message || "Something went wrong");
      console.error("Forgot password error:", error);
    }
  };

  return (
    <div className="relative flex items-center justify-center md:p-20 p-4">
      <div className="absolute w-full h-full flex">
        <div className="bg-[#1d4ed8] w-[30%] h-full"></div>
        <div className="bg-[#fff] w-[70%] h-full"></div>
      </div>
      <Row
        gutter={[16, 16]}
        className="w-full max-w-screen-2xl shadow-2xl mt-16 md:mt-0 mx-auto min-h-[600px]"
      >
        <Col className="hidden md:block relative" xs={0} md={12}>
          <div
            className="bg-cover bg-center bg-no-repeat rounded-l-sm absolute inset-0"
            style={{ backgroundImage: `url(${loginImg})` }}
          ></div>
        </Col>

        <Col xs={24} md={12}>
          <Card
            style={{
              height: "100%",
              border: "none",
            }}
            bodyStyle={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div style={{ width: "100%", margin: "0 auto" }}>
              <Title
                level={1}
                style={{ marginBottom: "8px", color: "#1f2937" }}
              >
                Forget Password?
              </Title>
              <Text style={{ marginBottom: "8px", color: "#1f2937" }}>
                Please enter your email to get verification code
              </Text>

              <Form
                requiredMark={false}
                name="login"
                layout="vertical"
                onFinish={onFinish}
                autoComplete="off"
              >
                <Form.Item
                  label="Email address"
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                    { type: "email", message: "Please enter a valid email!" },
                  ]}
                >
                  <Input
                    placeholder="Enter Your Email Address"
                    style={{ height: "48px" }}
                  />
                </Form.Item>

                <Form.Item
                  label="Select Role"
                  name="role"
                  rules={[{ required: true, message: "Please select Role!" }]}
                >
                  <Select
                    style={{ height: "48px" }}
                    placeholder="Select Role"
                    className="w-full"
                  >
                    <Option value="Buyer">Become a Buyer</Option>
                    <Option value="Seller">Become a Seller</Option>
                    <Option value="Broker">Become a Broker</Option>
                    <Option value="Francise Seller">
                      Become a Franchise Seller
                    </Option>
                    <Option value="Investor">Become Investor</Option>
                    <Option value="Business Idea Lister">
                      Become Business Idea Lister
                    </Option>
                    <Option value="Asset Seller">Business Asset Seller</Option>
                  </Select>
                </Form.Item>

                <Form.Item>
                  <button
                    className={`w-full py-3 rounded text-white flex justify-center items-center gap-2 transition-all duration-300 ${
                      loading
                        ? "bg-blue-400 cursor-not-allowed"
                        : "bg-[#3b82f6] hover:bg-blue-500"
                    }`}
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Spin size="small" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      "Continue"
                    )}
                  </button>
                </Form.Item>
              </Form>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ForgotPassword;
