import React, { useEffect, useState } from "react";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Typography,
  Card,
  Row,
  Col,
  Divider,
  message,
  Select,
} from "antd";
import { ArrowLeft } from "lucide-react";
import loginImg from "./login.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../Pages/redux/api/userApi";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";
const { Title, Text } = Typography;

export default function Login() {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [form] = Form.useForm();
  const [loginUser] = useLoginUserMutation();
  const location = useLocation();
  const navigate = useNavigate();

  const [passwordVisible, setPasswordVisible] = useState(false);

  const onFinish = async (values) => {
 
     const data = {
    ...values,
    email: values.email.toLowerCase(), 
  };
  
    try {
      const res = await loginUser(data).unwrap();

      if (res?.success) {
        message.success(res?.message);

        localStorage.setItem("accessToken", res.data.accessToken);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/");
        window.location.reload();
      }
    } catch (err) {
      console.error(err);
      message.error(err?.data?.message || "Login failed");
    }
  };
  useEffect(() => {
    if (location?.state) {
      form.setFieldsValue({ role: location.state });
    }
  }, [location?.state, form]);

  const handleGoogleLogin = () => {

    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(async (result) => {
    
      
    });
  };

 

  return (
    <div className="relative flex items-center justify-center md:p-20 p-4">
      <div className="absolute w-full h-full flex">
        <div className="bg-[#1d4ed8] w-[30%] h-full"></div>
        <div className="bg-[#fff] w-[70%]  h-full"></div>
      </div>
      <Row
        gutter={[16, 16]}
        className="w-full max-w-screen-2xl shadow-2xl mt-16 md:mt-0 mx-auto min-h-[600px]"
      >
        <Col className="hidden md:block relative" xs={0} md={12}>
          <div
            className="bg-cover bg-center bg-no-repeat rounded-l-sm absolute inset-0"
            style={{ backgroundImage: `url(${loginImg})` }}
          >
            <Button
              type="text"
              icon={<ArrowLeft size={20} />}
              style={{
                position: "absolute",
                top: "20px",
                left: "20px",
                color: "white",
                zIndex: 1,
              }}
            />
          </div>
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
                level={2}
                style={{ marginBottom: "8px", color: "#1f2937" }}
              >
                Login to Account
              </Title>
              <Text
                style={{
                  color: "#6b7280",
                  marginBottom: "32px",
                  display: "block",
                }}
              >
                Please enter your email and password to continue as{" "}
                {location?.state}
              </Text>

              <Form
                form={form}
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
                    className="py-3"
                    placeholder="your_email@example.com"
                    
                  />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password
                    className="py-3"
                    placeholder="••••••••"
                    visibilityToggle={{
                      visible: passwordVisible,
                      onVisibleChange: setPasswordVisible,
                    }}
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

                <Row justify="space-between" style={{ marginBottom: "24px" }}>
                  <Form.Item
                    name="remember"
                    valuePropName="checked"
                    style={{ margin: 0 }}
                  >
                    <Checkbox>Remember Password</Checkbox>
                  </Form.Item>
                  <Link to="/auth/forgot-password">
                    <Button
                      type="link"
                      style={{ color: "#3b82f6", padding: 0 }}
                    >
                      Forgot Password?
                    </Button>
                  </Link>
                </Row>

                <Form.Item>
                  <Button
                    style={{ height: "48px" }}
                    type="primary"
                    htmlType="submit"
                    block
                  >
                    Log In
                  </Button>
                </Form.Item>
              </Form>

            

              <Text
                style={{
                  textAlign: "center",
                  display: "block",
                  color: "#6b7280",
                }}
              >
                Don&apos; have an account?{" "}
                <Link to="/auth/choose-role">
                  <Button
                    type="link"
                    className="hover:underline"
                    style={{ color: "#3b82f6", padding: 0 }}
                  >
                    Sign up
                  </Button>
                </Link>
              </Text>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
