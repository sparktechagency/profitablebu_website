import { Tag } from "antd";
import InterestForm from "../BussinessDetailsWithForm/InterestedForm";
import img from "../../assets/Home/bbb.png";
export default function BusinessFormationDetails() {
  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-5 w-full px-5 pt-20 pb-10">
      <div className="p-5 space-y-8 w-full md:w-1/2">
        <div className="flex flex-col gap-5">
          {/* Image Section */}
          <div className=" mt-11">
            <div className="md:flex gap-5 items-center">
              <img
                src={img}
                alt="Modern urban cafe with glass architecture"
                className="object-cover md:w-[200px]"
              />
              <div className="space-y-3 mt-6 md:mt-0">
                <Tag className="bg-blue-100 border-[#0091FF] text-[#0091FF] px-5 py-2 font-bold">
                  #Franchise
                </Tag>
                <h1 className="text-3xl font-bold text-[#0091FF]">
                  Trendy Urban Cafe in Dhaka City
                </h1>
              </div>
            </div>
          </div>

          {/* Business Details */}
          <div className="space-y-6 ">
            {/* <div className="space-y-4">
              <div className="grid grid-cols-1 gap-3 text-sm">
                <div className="flex justify-between">
                  <span className="font-bold text-gray-700">
                    Business Type:
                  </span>
                  <span className="text-gray-600">Franchise Resale</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold text-gray-700">Price:</span>
                  <span className="text-gray-600">$75,000 USD</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold text-gray-700">Location:</span>
                  <span className="text-gray-600">
                    Banani, Dhaka, Bangladesh
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold text-gray-700">Industry:</span>
                  <span className="text-gray-600">
                    Food & Beverage – Cafe & Coffee Shop
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold text-gray-700">
                    Ownership Type:
                  </span>
                  <span className="text-gray-600">Sole Proprietorship</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold text-gray-700">
                    Reason for Selling:
                  </span>
                  <span className="text-gray-600">Owner relocating abroad</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        <div className="space-y-5">
          <p className="text-gray-700 leading-relaxed">
            Located in the heart of Banani, this cozy, fully-operational urban
            cafe is a favorite among young professionals, students, and
            tourists. The business boasts a strong brand identity, stylish
            interior, and a loyal customer base.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The cafe is known for its handcrafted coffee, fresh bakery items,
            and comfortable ambiance perfect for casual meetings and co-working.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <div>
            <h1 className="text-2xl font-bold text-[#000] mb-5">Assets Included</h1>
            <div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Licensed franchise brand rights (transferable)</li>
                <li>• Complete cafe setup (~1,200 sq. ft.)</li>
                <li>• Professional coffee & kitchen equipment</li>
                <li>• POS system</li>
                <li>• Decor and interior furnishings</li>
                <li>• 10k+ social media followers</li>
                <li>• Staff and supplier contacts</li>
              </ul>
            </div>
          </div>

          {/* Financial Summary */}
          <div>
            <h1 className="text-2xl font-bold text-[#000] mb-5">Financial Summary (Approximate)</h1>
            <div>
              <ul className="space-y-2 text-sm text-gray-700">``
                <li>• Monthly Revenue: $4,500</li>
                <li>• Monthly Expenses: $2,000</li>
                <li>• Net Profit: $2,500</li>
                <li>• Inventory Value: $2,000</li>
                <li>• Lease Terms: 3 years remaining, renewable</li>
                <li>• Royalty Fee: 5% of monthly revenue</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-11 md:w-1/2">
        <InterestForm />
      </div>
    </div>
  );
}
