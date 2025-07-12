import React from 'react';
import { Card, Input, Button, Upload, Form, Typography, Divider } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { div } from 'framer-motion/client';

const { Title, Paragraph, Text } = Typography;

const Seller = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Form values:', values);
  };

  return (
    <div className='pt-11 lg:pt-0'>
      <div className="min-h-screen  py-10 px-4 ">
      <Card className="container m-auto lg:p-10  shadow-xl">
        <Title level={3} className="text-center mb-2">Seller Non-Disclosure Agreement (NDA)</Title>
        <Text className="block text-center text-gray-500 mb-8">ProfitableBusinessesForSale.com<br />From Listings To Legacy</Text>

        <Paragraph className="mb-4">
          <strong>Seller Non-Disclosure Agreement</strong><br />
          This Non-Disclosure Agreement ("Agreement") is entered into by and between:
        </Paragraph>
        <Paragraph className="mb-2">
          <strong>First Party (Disclosing Party):</strong> The Seller, an individual or entity listing a business for sale on ProfitableBusinessesForSale.com ("Disclosing Party").
        </Paragraph>
        <Paragraph className="mb-2">
          <strong>Second Party (Receiving Party):</strong> ProfitableBusinessesForSale.com, operated by Global IPQ LLC under license no. 2430223.01 ("Receiving Party").
        </Paragraph>

        <Paragraph className="mb-2">
          By submitting a business listing, uploading sensitive materials, or sharing confidential details with ProfitableBusinessesForSale.com, the Seller agrees to the following terms:
        </Paragraph>

        <Divider />

        <Title level={5}>1. Purpose</Title>
        <Paragraph>This Agreement ensures that any confidential business information shared remains protected and undisclosed.</Paragraph>

        <Title level={5}>2. Definition of Confidential Information</Title>
        <Paragraph>
          "Confidential Information" includes but is not limited to:<br />
          - Financial statements<br />
          - Business registration details<br />
          - Customer/vendor lists<br />
          - Contracts & proprietary agreements<br />
          - Operational details<br />
          - Marketing plans<br />
          - Employee payroll summaries
        </Paragraph>

        <Title level={5}>3. Obligations</Title>
        <Paragraph>
          - Use only for business sale evaluation<br />
          - No third-party sharing without permission<br />
          - Secure data storage<br />
          - Public listing without sensitive content
        </Paragraph>

        <Title level={5}>4. Exceptions</Title>
        <Paragraph>
          - Public domain info<br />
          - Third-party lawful data<br />
          - Independently developed info<br />
          - Required disclosures (with notice)
        </Paragraph>

        <Title level={5}>5. No Guarantee</Title>
        <Paragraph>ProfitableBusinessesForSale.com does not guarantee any sale, inquiry, or return on listing.</Paragraph>

        <Title level={5}>6. Data Compliance</Title>
        <Paragraph>
          Complies with:<br />
          - UAE PDPL<br />
          - EU GDPR<br />
          - UK Data Protection<br />
          - Other applicable laws
        </Paragraph>

        <Title level={5}>7. Duration & Enforcement</Title>
        <Paragraph>Valid for two (2) years or until information is no longer deemed confidential.</Paragraph>

        <Title level={5}>8. Governing Law</Title>
        <Paragraph>Subject to mutually agreed jurisdiction laws.</Paragraph>

        <Title level={5}>9. Entire Agreement</Title>
        <Paragraph>Complete understanding between parties. Modifications in writing only.</Paragraph>

        <Title level={5}>10. Acknowledgment</Title>
        <Paragraph>By submitting a listing, Seller agrees to this NDA.</Paragraph>

        <Divider />

        <Form form={form} layout="vertical" onFinish={onFinish}>
          <div className='grid grid-cols-2 gap-4'>
            <div>
            <Title level={4}>First Party (Seller)</Title>

          <Form.Item label="Seller Full Name" name="fullName" rules={[{ required: true, message: 'Please enter your full name' }]}> 
            <Input size="large" placeholder="Enter full name" />
          </Form.Item>

          <Form.Item label="Email Address" name="email" rules={[{ required: true, message: 'Please enter your email' }]}> 
            <Input size="large" placeholder="Enter email address" />
          </Form.Item>

          <Form.Item label="Phone Number" name="phone" rules={[{ required: true, message: 'Please enter your phone number' }]}> 
            <Input size="large" placeholder="Enter phone number" />
          </Form.Item>

          <Form.Item label="Passport/National ID Number" name="idNumber" rules={[{ required: true, message: 'Please enter ID number' }]}> 
            <Input size="large" placeholder="Enter ID number" />
          </Form.Item>

          <Form.Item label="Upload ID/ Passport Document" name="idDocument">
            <Upload beforeUpload={() => false}>
              <Button icon={<UploadOutlined />}>Upload Signature</Button>
            </Upload>
          </Form.Item>

          <Form.Item label="Upload Trade License" name="tradeLicense">
            <Upload beforeUpload={() => false}>
              <Button icon={<UploadOutlined />}>Upload Signature</Button>
            </Upload>
          </Form.Item>

          <Form.Item label="Signature" name="signature">
            <Upload beforeUpload={() => false}>
              <Button icon={<UploadOutlined />}>Upload Signature</Button>
            </Upload>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" className="w-full">Submit</Button>
          </Form.Item>

       
          </div>

          <div>
            <Title level={4}>Second Party (ProfitableBusinessesForSale.com)</Title>
          <Paragraph className="mb-1"><strong>Full Name:</strong> Global IPQ LLC (ProfitableBusinessesForSale.com)</Paragraph>
          <Paragraph className="mb-1"><strong>Email:</strong> info@ProfitableBusinessesForSale.com</Paragraph>
          <Paragraph className="mb-4"><strong>Signature:</strong></Paragraph>
          <img src="/signature-placeholder.png" alt="Signature" className="w-32 mb-2" />
          <Text type="secondary">Feb 21, 2023 at 03:05 pm</Text>
          </div>
          </div>
        </Form>
      </Card>
    </div>
    </div>
  );
};

export default Seller;