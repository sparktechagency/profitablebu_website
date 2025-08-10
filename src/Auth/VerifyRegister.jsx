import React, { useState } from "react";
import { Button, Card, Col, Form, Input, Row } from "antd";
import loginImg from "./login.png";
import { Typography, message } from "antd";
import { useNavigate } from "react-router-dom";
import {
  useVerifyEmailMutation,
  useVerifyOtpMutation,
} from "../Pages/redux/api/userApi";
const { Title, Text } = Typography;
function VerifyRegister() {
  const [verifyOtp] = useVerifyOtpMutation();
  const [verify, { isLoading }] = useVerifyEmailMutation();
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onFinish = async (values) => {
    const email = localStorage.getItem("email");
    const code = values.otp;

    const data = {
      email: localStorage.getItem("email"),
      code: code,
    };

    if (!email || !code) {
      message.error("Missing email or OTP");

      return;
    }

    try {
      await verify({ data: data })
        .unwrap()
        .then((res) => {
          console.log(res);
          localStorage.setItem("accessToken", res?.data?.accessToken);
          message.success(res?.message);
          navigate("/plane");
        });

      //   const res = await verifyOtp(data).unwrap();
      //   console.log(res);
      //   if (res?.success) {
      //     message.success(res?.message);
      //     console.log(res?.success);
      //     localStorage.setItem("otp", code);
      //     localStorage.setItem("accessToken", res?.data?.accessToken);
      //     navigate("/plane");
      //   } else {
      //     message.error(res?.message || "Verification failed");
      //   }
    } catch (error) {
      message.error(error?.data?.message || "Something went wrong");
    }
  };

  const resendOtp = () => {
    message.destroy();
    message.success("Otp sent successfully");
  };
  return (
    <div className="relative flex items-center justify-center md:p-20 p-4">
      <div className="absolute w-full h-full flex">
        <div className="bg-[#1d4ed8] w-[30%] h-full"></div>
        <div className="bg-[#fff] w-[70%] h-full"></div>
      </div>
      <Row
        gutter={[16, 16]}
        className="w-full max-w-screen-2xl shadow-2xl mx-auto min-h-[600px]"
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
                Verify Register
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
                  label="Verification Code"
                  name="otp"
                  rules={[
                    { required: true, message: "Please input your OTP!" },
                  ]}
                >
                  <Input.OTP
                    size="large"
                    name="otp"
                    rules={[
                      {
                        required: true,
                        message: "Please input your OTP!",
                      },
                    ]}
                    onChange={onChange}
                    value={value}
                    length={6}
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    block
                    style={{
                      height: "48px",
                      background: "#3b82f6",
                      borderColor: "#3b82f6",
                      // borderRadius: '8px',
                      fontSize: "16px",
                      fontWeight: 500,
                    }}
                  >
                    Verify
                  </Button>
                </Form.Item>
              </Form>
              <Text style={{ marginBottom: "8px", color: "#1f2937" }}>
                You have not received the email?
                <span
                  onClick={resendOtp}
                  style={{ color: "#3b82f6", cursor: "pointer" }}
                >
                  Resend
                </span>
              </Text>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default VerifyRegister;
