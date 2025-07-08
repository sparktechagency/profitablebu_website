import { useState } from "react";

export default function InterestForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    countryCode: "+971",
    mobile: "",
    sector: "",
    activity: "",
    email: "",
    serviceZone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white shadow-lg rounded-lg">
        <div className="p-4 border-b">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 text-green-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-blue-600">I am Interested</h2>
          </div>
        </div>

        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div className="space-y-2">
              <label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="Enter Full Name"
                value={formData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                className="w-full border border-blue-200 focus:border-blue-400 focus:ring-blue-400 rounded-md p-2"
              />
            </div>

            {/* Country Code and Mobile */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Country Code</label>
                <select
                  value={formData.countryCode}
                  onChange={(e) => handleInputChange("countryCode", e.target.value)}
                  className="w-full border border-blue-200 focus:border-blue-400 focus:ring-blue-400 rounded-md p-2"
                >
                  <option value="+971">🇦🇪 +971</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                  <option value="+91">🇮🇳 +91</option>
                  <option value="+880">🇧🇩 +880</option>
                </select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label htmlFor="mobile" className="text-sm font-medium text-gray-700">
                  Mobile
                </label>
                <input
                  id="mobile"
                  type="tel"
                  placeholder="Enter mobile number"
                  value={formData.mobile}
                  onChange={(e) => handleInputChange("mobile", e.target.value)}
                  className="w-full border border-blue-200 focus:border-blue-400 focus:ring-blue-400 rounded-md p-2"
                />
              </div>
            </div>

            {/* Sector and Activity */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Sector</label>
                <select
                  value={formData.sector}
                  onChange={(e) => handleInputChange("sector", e.target.value)}
                  className="w-full border border-blue-200 focus:border-blue-400 focus:ring-blue-400 rounded-md p-2"
                >
                  <option value="">Select One</option>
                  <option value="food-beverage">Food & Beverage</option>
                  <option value="retail">Retail</option>
                  <option value="technology">Technology</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="education">Education</option>
                  <option value="real-estate">Real Estate</option>
                  <option value="automotive">Automotive</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="activity" className="text-sm font-medium text-gray-700">
                  Activity
                </label>
                <input
                  id="activity"
                  type="text"
                  placeholder="Enter Activity"
                  value={formData.activity}
                  onChange={(e) => handleInputChange("activity", e.target.value)}
                  className="w-full border border-blue-200 focus:border-blue-400 focus:ring-blue-400 rounded-md p-2"
                />
              </div>
            </div>

            {/* Email and Service Zone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full border border-blue-200 focus:border-blue-400 focus:ring-blue-400 rounded-md p-2"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="serviceZone" className="text-sm font-medium text-gray-700">
                  Service Zone
                </label>
                <input
                  id="serviceZone"
                  type="text"
                  placeholder="Enter Service Zone"
                  value={formData.serviceZone}
                  onChange={(e) => handleInputChange("serviceZone", e.target.value)}
                  className="w-full border border-blue-200 focus:border-blue-400 focus:ring-blue-400 rounded-md p-2"
                />
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Enter Your Message Here"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                className="w-full border border-blue-200 focus:border-blue-400 focus:ring-blue-400 rounded-md p-2 min-h-[120px] resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-2 rounded-md font-medium"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
