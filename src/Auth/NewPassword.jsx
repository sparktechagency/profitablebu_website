import React, { useState } from 'react';
import { Button, Card, Col, Form, Input, Row } from 'antd';
import loginImg from './login.png';
import { Typography, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useResetPasswordMutation } from '../Pages/redux/api/userApi';
const { Title, Text } = Typography;

function NewPassword() {
  const[newPasseord] = useResetPasswordMutation()
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

 const onFinish = async () => {
  const email = localStorage.getItem('email');

  if (!email) {
    message.error('Email not found in local storage');
    return;
  }

  if (!newPassword || !confirmPassword) {
    message.error('Please fill in both password fields');
    return;
  }

  if (newPassword !== confirmPassword) {
    message.error('Passwords do not match');
    return;
  }

    const data = {
     email,
      newPassword,
      confirmPassword,
    };

  try {
    const res = await newPasseord(data).unwrap();

    if (res?.success) {
      message.success(res?.message);
      localStorage.removeItem('email');
      navigate('/auth/login');
    } else {
      message.error(res?.message || 'Failed to update password');
    }
  } catch (error) {
    message.error(error?.data?.message );
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
                Set a new password
              </Title>
              <Text style={{ marginBottom: '8px', color: '#1f2937' }}>
                Create a new password. Ensure it differs from previous ones for
                security
              </Text>

              <Form
                requiredMark={false}
                name="login"
                layout="vertical"
                onFinish={onFinish}
                autoComplete="off"
              >
                <Form.Item
                  label="New Password"
                  name="newPassword"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your new password!',
                    },
                  ]}
                >
                  <Input.Password
                    size="large"
                    name="newPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </Form.Item>

                <Form.Item
                  label="Confirm Password"
                  name="confirmPassword"
                  rules={[
                    {
                      required: true,
                      message: 'Please confirm your password!',
                    },
                  ]}
                >
                  <Input.Password
                    size="large"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
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
                    Update Password
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

export default NewPassword;
