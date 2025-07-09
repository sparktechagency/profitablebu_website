import { useState } from 'react';
import { Form, Input, Button } from 'antd';
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MessageCircle,
} from 'lucide-react';
import Header from '../AboutUs/Header';
import img from '../../../public/contact-us.png';
export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (values) => {
    console.log('Form submitted:', values);
    // Handle form submission here
  };
  return (
    <>
      <Header
        title="Contact Us"
        description="Get in touch with us for any inquiries or questions."
      />
      <div className="flex items-center justify-center px-5 py-10">
        <div className="container mx-auto w-full bg-white rounded-2xl shadow-2xl overflow-hidden my-20">
          <div className="flex flex-col lg:flex-row">
            <section
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
              }}
              className="lg:w-2/6 bg-gradient-to-br from-blue-500 via-blue-400 to-green-400 p-5 lg:p-10 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Contact Us Text */}
              <div className="flex-1 flex items-center"></div>

              {/* Social Media Section */}
              <div className="mt-8">
                <h3 className="text-white text-lg font-semibold mb-4">
                  Follow Us On
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-black bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-all"
                  >
                    <Facebook className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-black bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-all"
                  >
                    <Twitter className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-black bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-all"
                  >
                    <Linkedin className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-black bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-all"
                  >
                    <Instagram className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-black bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-all"
                  >
                    <MessageCircle className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            </section>
            <section className="lg:w-4/6 p-5 lg:p-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Get In Touch With Us
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>

              <Form
                requiredMark={false}
                layout="vertical"
                onFinish={handleSubmit}
                className="grid grid-cols-2 gap-4"
              >
                {/* Name Fields */}
                <Form.Item
                  label="First Name"
                  name="firstName"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your first name!',
                    },
                  ]}
                  className="col-span-2 md:col-span-1"
                >
                  <Input
                    className="!border-t-0 !border-l-0 !h-10 !rounded-none !border-r-0 !ring-0 !focus:ring-0 !border-b-1 !border-gray-300 !focus:border-b-1 !focus:border-gray-300"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </Form.Item>
                <Form.Item
                  label="Last Name"
                  name="lastName"
                  rules={[
                    { required: true, message: 'Please input your last name!' },
                  ]}
                  className="col-span-2 md:col-span-1"
                >
                  <Input
                    className="!border-t-0 !border-l-0 !h-10 !rounded-none !border-r-0 !ring-0 !focus:ring-0 !border-b-1 !border-gray-300 !focus:border-b-1 !focus:border-gray-300"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </Form.Item>

                {/* Email Field */}
                <Form.Item
                  label="Email Address"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your email address!',
                    },
                  ]}
                  className="col-span-2"
                >
                  <Input
                    type="email"
                    className="!border-t-0 !border-l-0 !h-10 !rounded-none !border-r-0 !ring-0 !focus:ring-0 !border-b-1 !border-gray-300 !focus:border-b-1 !focus:border-gray-300"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </Form.Item>

                {/* Phone Field */}
                <Form.Item
                  label="Phone Number"
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your phone number!',
                    },
                  ]}
                  className="col-span-2"
                >
                  <Input
                    type="tel"
                    className="!border-t-0 !border-l-0 !h-10 !rounded-none !border-r-0 !ring-0 !focus:ring-0 !border-b-1 !border-gray-300 !focus:border-b-1 !focus:border-gray-300"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </Form.Item>

                {/* Message Field */}
                <Form.Item
                  label="Message"
                  name="message"
                  rules={[
                    { required: true, message: 'Please input your message!' },
                  ]}
                  className="col-span-2"
                >
                  <Input.TextArea
                    rows={4}
                    className="!border-t-0 !border-l-0 !h-32 !rounded-none !border-r-0 !ring-0 !focus:ring-0 !border-b-1 !border-gray-300 !focus:border-b-1 !focus:border-gray-300"
                    placeholder="Type Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </Form.Item>

                {/* Submit Button */}
                <Form.Item>
                  <Button type="primary" htmlType="submit" className="w-full">
                    Send Message
                  </Button>
                </Form.Item>
              </Form>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
