import React from 'react';
import { Button, Card, Col, Form, Input, Row } from 'antd';
import loginImg from './login.png';
import { Typography, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useForgotPasswordMutation } from '../Pages/redux/api/userApi';
const { Title, Text } = Typography;
function ForgotPassword() {
  const [fogetPass] = useForgotPasswordMutation()
  const navigate = useNavigate();
const onFinish = async (values) => {
  if (!values.email) {
    message.destroy();
    message.error('Please enter email');
    return;
  }
    const { email } = values;
    const data = {
      email: email, 
    };

  try {
    const res = await fogetPass(data).unwrap();

    if (res?.success) {
      message.success(res?.message);
      localStorage.setItem('email',  values?.email);
      navigate('/auth/verification');
    }
  } catch (error) {
    message.error(error?.data?.message || 'Something went wrong');
    console.error('Forgot password error:', error);
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
              height: '100%',
              border: 'none',
            }}
            bodyStyle={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div style={{ width: '100%', margin: '0 auto' }}>
              <Title
                level={1}
                style={{ marginBottom: '8px', color: '#1f2937' }}
              >
                Forget Password?
              </Title>
              <Text style={{ marginBottom: '8px', color: '#1f2937' }}>
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
                    { required: true, message: 'Please input your email!' },
                    { type: 'email', message: 'Please enter a valid email!' },
                  ]}
                >
                  <Input
                    placeholder="esfutui_sch@gmail.com"
                    style={{ height: '48px' }}
                  />
                </Form.Item>

                

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    block
                    style={{
                      height: '48px',
                      background: '#3b82f6',
                      borderColor: '#3b82f6',
                      // borderRadius: '8px',
                      fontSize: '16px',
                      fontWeight: 500,
                    }}
                  >
                    Continue
                  </Button>
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
