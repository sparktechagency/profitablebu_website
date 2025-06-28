
import { useState } from "react"
import { Facebook, Twitter, Linkedin, Instagram, MessageCircle } from "lucide-react"
import Header from "../AboutUs/Header"

export default function ContactUs() {
          const [formData, setFormData] = useState({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    message: "",
          })

          const handleInputChange = (e) => {
                    const { name, value } = e.target
                    setFormData((prev) => ({
                              ...prev,
                              [name]: value,
                    }))
          }

          const handleSubmit = (e) => {
                    e.preventDefault()
                    console.log("Form submitted:", formData)
                    // Handle form submission here
          }
          return (
                    <>

                              <Header title="Contact Us" description="Get in touch with us for any inquiries or questions." />
                              <div className="flex items-center justify-center">
                                        <div className="max-w-6xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden my-20">
                                                  <div className="flex flex-col lg:flex-row">
                                                            {/* Left Side - Gradient Background */}
                                                            <div className="lg:w-2/5 bg-gradient-to-br from-blue-500 via-blue-400 to-green-400 p-8 lg:p-12 flex flex-col justify-between relative overflow-hidden">
                                                                      {/* Decorative dots pattern */}
                                                                      <div className="absolute top-8 right-8 grid grid-cols-6 gap-2 opacity-30">
                                                                                {Array.from({ length: 24 }).map((_, i) => (
                                                                                          <div key={i} className="w-2 h-2 bg-white rounded-full"></div>
                                                                                ))}
                                                                      </div>

                                                                      {/* Contact Us Text */}
                                                                      <div className="flex-1 flex items-center">
                                                                                <h1 className="text-white text-2xl lg:text-3xl font-bold tracking-wider transform -rotate-90 origin-center whitespace-nowrap">
                                                                                          — CONTACT US
                                                                                </h1>
                                                                      </div>

                                                                      {/* Social Media Section */}
                                                                      <div className="mt-8">
                                                                                <h3 className="text-white text-lg font-semibold mb-4">Follow Us On</h3>
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
                                                            </div>

                                                            {/* Right Side - Contact Form */}
                                                            <div className="lg:w-3/5 p-8 lg:p-12">
                                                                      <div className="max-w-lg">
                                                                                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Get In Touch With Us</h2>
                                                                                <p className="text-gray-600 mb-8 leading-relaxed">
                                                                                          There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration
                                                                                          in some form.
                                                                                </p>

                                                                                <form onSubmit={handleSubmit} className="space-y-6">
                                                                                          {/* Name Fields */}
                                                                                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                                                                    <div>
                                                                                                              <input
                                                                                                                        type="text"
                                                                                                                        name="firstName"
                                                                                                                        placeholder="First Name"
                                                                                                                        value={formData.firstName}
                                                                                                                        onChange={handleInputChange}
                                                                                                                        className="h-12 border-0 border-b-2 border-gray-200 rounded-none bg-transparent focus:border-blue-500 focus:ring-0 px-0"
                                                                                                                        required
                                                                                                              />
                                                                                                    </div>
                                                                                                    <div>
                                                                                                              <input
                                                                                                                        type="text"
                                                                                                                        name="lastName"
                                                                                                                        placeholder="Last Name"
                                                                                                                        value={formData.lastName}
                                                                                                                        onChange={handleInputChange}
                                                                                                                        className="h-12 border-0 border-b-2 border-gray-200 rounded-none bg-transparent focus:border-blue-500 focus:ring-0 px-0"
                                                                                                                        required
                                                                                                              />
                                                                                                    </div>
                                                                                          </div>

                                                                                          {/* Email Field */}
                                                                                          <div>
                                                                                                    <input
                                                                                                              type="email"
                                                                                                              name="email"
                                                                                                              placeholder="Email Address"
                                                                                                              value={formData.email}
                                                                                                              onChange={handleInputChange}
                                                                                                              className="h-12 border-0 border-b-2 border-gray-200 rounded-none bg-transparent focus:border-blue-500 focus:ring-0 px-0"
                                                                                                              required
                                                                                                    />
                                                                                          </div>

                                                                                          {/* Phone Field */}
                                                                                          <div>
                                                                                                    <input
                                                                                                              type="tel"
                                                                                                              name="phone"
                                                                                                              placeholder="Phone Number"
                                                                                                              value={formData.phone}
                                                                                                              onChange={handleInputChange}
                                                                                                              className="h-12 border-0 border-b-2 border-gray-200 rounded-none bg-transparent focus:border-blue-500 focus:ring-0 px-0"
                                                                                                              required
                                                                                                    />
                                                                                          </div>

                                                                                          {/* Message Field */}
                                                                                          <div>
                                                                                                    <textarea
                                                                                                              name="message"
                                                                                                              placeholder="Type Your Message"
                                                                                                              value={formData.message}
                                                                                                              onChange={handleInputChange}
                                                                                                              rows={4}
                                                                                                              className="border-0 border-b-2 border-gray-200 rounded-none bg-transparent focus:border-blue-500 focus:ring-0 px-0 resize-none"
                                                                                                              required
                                                                                                    />
                                                                                          </div>

                                                                                          {/* Submit Button */}
                                                                                          <div className="pt-4">
                                                                                                    <button
                                                                                                              type="submit"
                                                                                                              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                                                                                                    >
                                                                                                              Send Message
                                                                                                    </button>
                                                                                          </div>
                                                                                </form>
                                                                      </div>
                                                            </div>
                                                  </div>
                                        </div>
                              </div>
                    </>
          );
}