import { useState } from "react";
import {
  Upload,
  User,
  DollarSign,
  BarChart3,
  FileText,
  Info,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function BusinessValuationForm() {
  const [formData, setFormData] = useState({
    ownerName: "",
    businessName: "",
    email: "",
    countryCode: "+971",
    mobile: "",
    regions: "",
    country: "",
    location: "",
    businessType: "",
    businessCategory: "",
    annualTurnover: "",
    currency: "",
    yearOfEstablishment: "",
    annualExpenses: "",
    purpose: "",
    annualProfit: "",
    valueOfAssets: "",
    valueOfStock: "",
    message: "",
    consentEmail: false,
    consentTerms: false,
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const SectionHeader = ({ icon: Icon, title }) => (
    <div className="flex items-center gap-2 mb-6">
      <Icon className="h-5 w-5 text-green-500" />
      <h3 className="text-lg font-semibold text-blue-600">{title}</h3>
    </div>
  );

  const FileUploadArea = ({ label }) => (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
      <p className="text-sm text-gray-600 mb-2">Upload File</p>
      <input type="file" accept=".pdf" className="hidden" />
      <button className="text-gray-600 border border-gray-300 px-4 py-2 rounded-md bg-transparent hover:bg-gray-100">
        Choose File
      </button>
    </div>
  );

  return (
    <div className="container mx-auto p-5">
      {/* Header */}
      <div className="relative flex flex-col items-start gap-5 pl-5 mb-5">
        <div className="absolute top-0 left-0 w-2 h-full bg-[#22C55E] z-[1] rounded-r-full"></div>

        <div className="ml-5">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0091FF] mb-6 leading-tight">
            Get Your Business Valuations
          </h1>
          <p className="text-lg md:text-xl text-[#000000] leading-relaxed max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            ultrices lectus sem.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Owner & Business Information */}
        <div className=" ">
          <div className="flex items-center gap-2 mb-6">
            <User className="h-5 w-5 text-green-500" />
            <h3 className="text-lg font-semibold text-blue-600">
              Owner & Business Information
            </h3>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="ownerName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Owner Name
                </label>
                <input
                  id="ownerName"
                  type="text"
                  placeholder="Enter Owner Name"
                  value={formData.ownerName}
                  onChange={(e) =>
                    handleInputChange("ownerName", e.target.value)
                  }
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="businessName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Business Name
                </label>
                <input
                  id="businessName"
                  type="text"
                  placeholder="Enter Business Name"
                  value={formData.businessName}
                  onChange={(e) =>
                    handleInputChange("businessName", e.target.value)
                  }
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Country Code
                </label>
                <select
                  value={formData.countryCode}
                  onChange={(e) =>
                    handleInputChange("countryCode", e.target.value)
                  }
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-blue-500"
                >
                  <option value="+971">🇦🇪 +971</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                </select>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="mobile"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mobile
                </label>
                <input
                  id="mobile"
                  type="tel"
                  placeholder="Enter mobile number"
                  value={formData.mobile}
                  onChange={(e) => handleInputChange("mobile", e.target.value)}
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Regions
                </label>
                <select
                  value={formData.regions}
                  onChange={(e) => handleInputChange("regions", e.target.value)}
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-blue-500"
                >
                  <option value="north-america">North America</option>
                  <option value="europe">Europe</option>
                  <option value="asia">Asia</option>
                  <option value="middle-east">Middle East</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Country
                </label>
                <select
                  value={formData.country}
                  onChange={(e) => handleInputChange("country", e.target.value)}
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-blue-500"
                >
                  <option value="uae">United Arab Emirates</option>
                  <option value="usa">United States</option>
                  <option value="uk">United Kingdom</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700"
              >
                Location
              </label>
              <input
                id="location"
                type="text"
                placeholder="Enter Location"
                value={formData.location}
                onChange={(e) => handleInputChange("location", e.target.value)}
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Financial Details */}
        <div className="">
          <div className="flex items-center gap-2 mb-6">
            <DollarSign className="h-5 w-5 text-green-500" />
            <h3 className="text-lg font-semibold text-blue-600">
              Financial Details
            </h3>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="annualTurnover"
                  className="block text-sm font-medium text-gray-700"
                >
                  Annual Turnover
                </label>
                <input
                  id="annualTurnover"
                  type="number"
                  placeholder="Enter Annual Turnover"
                  value={formData.annualTurnover}
                  onChange={(e) =>
                    handleInputChange("annualTurnover", e.target.value)
                  }
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Currency
                </label>
                <select
                  value={formData.currency}
                  onChange={(e) =>
                    handleInputChange("currency", e.target.value)
                  }
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-blue-500"
                >
                  <option value="usd">USD</option>
                  <option value="aed">AED</option>
                  <option value="eur">EUR</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="yearOfEstablishment"
                  className="block text-sm font-medium text-gray-700"
                >
                  Year of Establishment
                </label>
                <input
                  id="yearOfEstablishment"
                  type="number"
                  placeholder="Enter Year of Establishment"
                  value={formData.yearOfEstablishment}
                  onChange={(e) =>
                    handleInputChange("yearOfEstablishment", e.target.value)
                  }
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="annualExpenses"
                  className="block text-sm font-medium text-gray-700"
                >
                  Annual Expenses
                </label>
                <input
                  id="annualExpenses"
                  type="number"
                  placeholder="Enter Annual Expenses"
                  value={formData.annualExpenses}
                  onChange={(e) =>
                    handleInputChange("annualExpenses", e.target.value)
                  }
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Select the Purpose
              </label>
              <select
                value={formData.purpose}
                onChange={(e) => handleInputChange("purpose", e.target.value)}
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-blue-500"
              >
                <option value="selling">Selling Business</option>
                <option value="buying">Buying Business</option>
                <option value="investment">Investment Purposes</option>
                <option value="loan">Loan Application</option>
              </select>
            </div>
          </div>
        </div>

        {/* Valuation Input for Accuracy */}
        <div className="">
          <div className="flex items-center gap-2 mb-6">
            <BarChart3 className="h-5 w-5 text-green-500" />
            <h3 className="text-lg font-semibold text-blue-600">
              Valuation Input for Accuracy
            </h3>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="annualProfit"
                  className="block text-sm font-medium text-gray-700"
                >
                  Annual Profit
                </label>
                <input
                  id="annualProfit"
                  type="number"
                  placeholder="Enter Annual Profit"
                  value={formData.annualProfit}
                  onChange={(e) =>
                    handleInputChange("annualProfit", e.target.value)
                  }
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="valueOfAssets"
                  className="block text-sm font-medium text-gray-700"
                >
                  Value of Assets
                </label>
                <input
                  id="valueOfAssets"
                  type="number"
                  placeholder="Value of Assets"
                  value={formData.valueOfAssets}
                  onChange={(e) =>
                    handleInputChange("valueOfAssets", e.target.value)
                  }
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="valueOfStock"
                className="block text-sm font-medium text-gray-700"
              >
                Value of Stock / Inventory
              </label>
              <input
                id="valueOfStock"
                type="number"
                placeholder="Enter Value of Stock"
                value={formData.valueOfStock}
                onChange={(e) =>
                  handleInputChange("valueOfStock", e.target.value)
                }
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* File Uploads */}
        <div className="">
          <div className="flex items-center gap-2 mb-6">
            <FileText className="h-5 w-5 text-green-500" />
            <h3 className="text-lg font-semibold text-blue-600">
              File Uploads (PDF Only - Max 9 MB Each)
            </h3>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  P&L Report (1 Year Minimum)
                </label>
                <FileUploadArea label="P&L Report" />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Equipment List
                </label>
                <FileUploadArea label="Equipment List" />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Business Profile
                </label>
                <FileUploadArea label="Business Profile" />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Business Images (Combined PDF)
                </label>
                <FileUploadArea label="Business Images" />
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="">
          <div className="flex items-center gap-2 mb-6">
            <Info className="h-5 w-5 text-green-500" />
            <h3 className="text-lg font-semibold text-blue-600">
              Additional Info
            </h3>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Enter Your Message Here"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-blue-500 min-h-[120px]"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="consentEmail"
                  checked={formData.consentEmail}
                  onChange={(e) =>
                    handleInputChange("consentEmail", e.target.checked)
                  }
                  className="h-4 w-4"
                />
                <label
                  htmlFor="consentEmail"
                  className="text-sm leading-relaxed"
                >
                  Please tick if you consent to being contacted by email from
                  PBSF.COM. Note: We do not sell, rent or share your data with
                  third parties without your consent.
                </label>
              </div>

              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="consentTerms"
                  checked={formData.consentTerms}
                  onChange={(e) =>
                    handleInputChange("consentTerms", e.target.checked)
                  }
                  className="h-4 w-4"
                />
                <label
                  htmlFor="consentTerms"
                  className="text-sm leading-relaxed"
                >
                  I have read and accept the{" "}
                  <Link to={'/terms-and-conditions'}>
                  <span className="text-blue-600 underline cursor-pointer">
                    TERMS & CONDITION
                  </span></Link>{" "}
                  &{" "}
                  <Link to={'/<li>Privacy Policy</li>'}><span className="text-blue-600 underline cursor-pointer">
                    PRIVACY POLICY
                  </span></Link>
                  .
                </label>
              </div>
            </div>

            <p className="text-xs text-gray-600 leading-relaxed">
              By submitting this request for a free business valuation, you
              confirm that you agree to our website terms of use, our privacy
              policy, and consent to cookies being stored on your computer.
            </p>

           <Link to={'/business-valuaion-submission'}> <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-lg font-medium rounded-md"
            >
              Get Valuations
            </button></Link>
          </div>
        </div>
      </form>
    </div>
  );
}
