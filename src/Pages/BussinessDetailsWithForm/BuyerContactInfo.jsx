import { Tag } from "antd";
import { Mail, Phone, MapPin } from "lucide-react";

export default function BuyerContactInfo() {
  return (
    <div className="container mx-auto p-5">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">
        Buyer Contact Info
      </h2>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Side - Profile Section */}
        <div className="p-5">
          <div className="flex items-start gap-4">
            <div className="h-16 w-16 bg-gray-200 rounded-full">
              <img
                src="https://i.ibb.co.com/RvFgZC8/aman.png"
                alt="Profile"
                className="w-20 h-20 rounded-full mx-auto"
              />
            </div>

            <div className="flex-1 space-y-3">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Sardor
                  </h3>
                  <Tag className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
                    Buyer
                  </Tag>
                </div>
                <p className="text-gray-600">dric@gmail.com</p>
              </div>

              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-md">
                Send Message
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Details */}
        <div className="space-y-4">
          {/* Email */}
          <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Mail className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h4 className="font-semibold text-blue-600 text-lg">Email</h4>
              <p className="text-gray-700">Dric@Gmail.Com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Phone className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h4 className="font-semibold text-blue-600 text-lg">Phone</h4>
              <p className="text-gray-700">(704) 555-0127</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <MapPin className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h4 className="font-semibold text-blue-600 text-lg">Location</h4>
              <p className="text-gray-700">
                Ul. Mlynarska 142, Bydgoszcz 85-376
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
